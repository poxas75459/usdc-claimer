/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5VaAHYGtKHz5BBgZyBuZaNbY4DoStr5VM7cRkuNbckvajSSWnJgKkLLAHEJH7MG8wtnCxLwiLfx49VEyK7cZ3pRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jCNYdxwvUonu2UYzBWJFwbRth6emPfFbp8iwceZ6H8jyLyLoiUhsEVC5bRRG4mRxsjeRWwLVmYuYEMSQbYXg5bt",
  "key1": "45y7QLFrjb41rTZZqXyTqok6pvVqAs4t1EUuMbocR1PXrBFEmHK3eksEt69aEDxt7HXxgbD62AHZpMHXZRe6ojJh",
  "key2": "2rUsGJPnHfMvKQP6aYEZKuPyTBhXTGAHJaqfKrQ85XLe6KSbdx7cFr6uWNV6UdMaLY1cJFdgP2c2BWF4786prn57",
  "key3": "5qpbVvbgBXUh1bbEA3ovAGRJXnB1JgDyrvReCNd8zxyzEe4uyxPMcwGMtVwQUNLmVtTQHTu7C4usmFGJDC2Hjekp",
  "key4": "4hqJoaBwXeufCiP9ML9CE82Ndf6T72ppjCkXFSvv834cxk8Tfiu6TbN2KrXnxDGT2LUm9WzJ551QEgkAxH36vntA",
  "key5": "hQi53XVGMR5MCU8bBgJGQAmjoubanQ2fWCk1k5XV25JgFpuHZitxVP1ki5GW5hPp2QbdWsHkhjvd2qyyQL6iEhq",
  "key6": "5BZeNARp7uJAnBcFr6LrfFAn1JgiAB5WGHvFNJL6wye4DsuBvUMLvs8stjqsc5HW6yc5g5b95YiM9qgjJTjTj8Nu",
  "key7": "5EgwpNf5sgtK3Sp28EPmabFtStUhimCEGXS35yoozdnpPatETSjG5Gvxb2utpd2AsLkHrqip448WuzXmeLAafPym",
  "key8": "2L8zKfzUh23JUoMKQAFJgNpbRMirFhoQeXhZJi3xmqqcGHxNi2m9QwT5EnKbyCCHAXUhvYVpSBoeHbiGzhBxAVTk",
  "key9": "5R11DzwcDyNiFoTn7hv6UhJGyACz1agfmuMP1WRViHtfJypYuQpGBzGa7A8dkTaxjQGBLrJzFiCi6md3X2wi7yMq",
  "key10": "22Qg5zGM3LTT5vEbc61pJSrAmuRCk6tx2Bo3acs7qm11qAdcMvXJ93LMh5EjtZLhLQv3fw3ANKWGiKtPBsRvpkQ1",
  "key11": "5Lwhie3TUQdUwDsLXzjNXQApJwy2y83Lf2LVzH737s4aVb7KZVj2DvgX5XPrti1BC8Z5cEX19vXgrXzC4rNTdjk9",
  "key12": "474fyrB9tYt8hnQ2ReACRdFdrEniBRVrLXGBikmzuS2M6yXDH78q5FwN8sgw5W3qyN1BCYQsA5iMTZTbJ93bnpdK",
  "key13": "3zFSEbDknMkLhP1hw7vh2DBc4vjuZr3kZKpaobVCoVg5yGT2S2LcTLrbyTTk6FqEGz8psDwukNHMJwcAnpAnCSS9",
  "key14": "gP3kYFeaR9TXAcoS2wuu4HdCHypiTA7YHFRm99VN8u4eHXQdCY6oZWf4JqxqUzntjWTStUjzQLUdruod6KGfzjh",
  "key15": "39NL7YMmPtTKV31sK4pJfUyUCWysHB2bn2UEp4eUZcFQJmFCgiQtfhSEjYSrnLYJfjmjkGdZ1hpaP7EQSGQcQypM",
  "key16": "VfhDiaSnMc6h1rSgie6Xk4QKYeZsQKtCVWnffUbnQqdD8yWeNkHfLrbJtzewaCjkEqV8dBKrMBEQaAxKjqbxs8Q",
  "key17": "2afSd1RZSoYzir13dkTHHAgAABMgfXnhPMjzahHSd9NazQpqrG1Bb2smJwyxHGPw1tZ6v6Xb22WyRxN4YRaeDJKX",
  "key18": "466iEYJi3DztgohkQ54QG3u8Lty8ETEBSzEpDrui2sd1hP6R6pYDxGqVQKx4Y6VLyPTVZajDuiFMxR7bk2bES2aW",
  "key19": "322UgBaBje6exTN9ThCPAoDBieYTXqS46e26tLPVEN8zkTrNFPcm4XCFqspmVHm2ESg6jGAHeVw2NyY9gm1TexKi",
  "key20": "4U2sSNvnQQ1AuGDua4yVzpfoYxS4cWFou7RD85GfPXbvPuSUMSANbPDMsLBaKuy935Sc5ANAcA9wp4isx25eUfnH",
  "key21": "4XoU7HYneFwH7D16hAjwz9McdqZDoMJvz53xB2PUCPym9yC9YrRSgCR4iTZkJAAfuSVMea67h2VikscfSCqWzhdZ",
  "key22": "3cqWTgT8vf6NsJrhP7nQkdjxfQ95eS9G7Ks9duCPYn8Zf1xJdiEKqFETjxik1psZTeV1X4paJkGX5aEyZz3CCz5x",
  "key23": "3BnEmvBBppieLKdGD1hzM9anMgC3TsiPY9AuPj6dgqy2nQi7LL3nW3VcajDdKRShvJtjt72kbiHjjpTaN7YRncuJ",
  "key24": "hjySLv6ru2DegjCHrqHYSYntWoJiiRYC7Q78Y3cbonXCgP7WJ29bLyVRWGrnp8auXho5kN4bfpiUa2k7vmtrqDd"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
