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
    "4eSYoFbWBTTqypT1WWPMqGKQuYbcuH8CLjiNd9F6oYGXruyPLhXrrQCsV7AXJWfkSfyiZegWiU9gAhnwWigpdYEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54GssMFuyS28J8pccWJg7h2PTMoxQkbaj4cA9eKCixKNZta3EugUNELPQZ5GaX3mBNm3tREShRJ7mXQd4mZQGQjK",
  "key1": "4EBmWYsHW3dtBauSpE2djuvUbZfNjcxtS4vrjy91ATdKkRC86fBHdTG7yf3nj6YK9kidMgoTn7bgdw8oqzmPgwp7",
  "key2": "4rHYWggNjk5GYq2DqQd8GsiFU1moXmP29PtwQsoKZbXTFpaNRmLFmfG46Xm7yTqXgqB2Q2YxgjKSqKM8Qebd3h1y",
  "key3": "4CPRzhUY5CMezcx1Py4XxaeBS9HQii9Z2cg8Fr51zjjUMyXs4yNAYCDsbGhLcd78ao5A3FYrFG7cftWKNx8WXuyv",
  "key4": "2kukyaJ4UK7PECw4KjXpno9MBZchz6TRJsHSQFgGkiGbehanFh7LEM1SoGB9btkjnziBx3DxMWPaEssqgHbbU8mj",
  "key5": "gsvTgdDnxSFTwNAe4XFnZqjRN3zYxFJCaercZyoFAE2Ki7kDXSq1B4DL8XTeJXVSzCr8XuEJWyJo6Y8KgmDqYuk",
  "key6": "5T8y6XuAR1caeD8L2KaFq8kEPvhi81R59XseVwZkzjEYyHVFx4PCBJLpAf1HyUpnbJ3USL9npjJxai8Dkqe9Rqy7",
  "key7": "66ZCmCns7sTq9d96TYvMsyEFMaB848ag4vEWKbTNpSawEmyFDSpY1dauUz4QsBeae7mPw9FjMWqe28aRHn7ouHzW",
  "key8": "4gWT8eioD5nFto7Qg4zk9M3mZP2cwMYrBTtitQqSxs5CvFfa654mifgLw8opjsnoiXed6gWNdzSJZPAwv2KyWDkP",
  "key9": "ZWaMMSjdCmJ9mCdp7JvpRQsofVNeqZorvUH2aFi4bK55L96U4ZsbRwQBDwQjw2vPwGDtHZjZYZby9yUPyc7VH1M",
  "key10": "3SCxgxvj7aadsVFteHULPBsfLfadPLFpY2kWpqWX7bWfJRFducN4dcrJVWK6Ukext7uzaVcqzqtCxqvoDvrZZWoA",
  "key11": "4sQ7H3k7etCbZiMcZLt2qF21vjmwdopzZMJMt4eWWPdSGRs7aZqxbUxg3MSCb9HUuGQEAA1bC2a67Xq8Tj7Mtc1z",
  "key12": "5Qu87vC1hF5MySZrYu7uRqypUZDdxNXuLGWBH1S2w9YsBPMHJcT3fRLctwE8ZwHH3WueP4Mqgh1bUDTT5wL92CRF",
  "key13": "48o2PXsF9oggtewJHtoVcd51CXRsooCL7XriSrUf93ijJ4NuGHETUrTdkp3oAV6btUyRMDUeMD12sYMeB3UTJxZs",
  "key14": "4MgiAuZSBcs9PuoBiAVEE84jps6Ynihb5Rzf2xcfvJVek8RKw2fd9gbjbRJweGHFY6jTPiAPU4UdSwUWakMsETdA",
  "key15": "4S9YghwNfnvTqrTBMpCUD13MfXJA6UgGGnmYuMWNSeTvh9wf3KfYHZdg4JgN4jP7TUNBdbMABMFhDzW1rKvX81Fy",
  "key16": "2vUXkf3TGzDEBo89WyMjbru8D1WnjM9GLYsQA8cQb3WhrGVpzM79Vpqw6K5BJduzTixt3SvQVod6EsXvR3Bf455q",
  "key17": "22oJnTLi9iNob3PKSB5makmqStCte1WSTuERW2HcQb1imgZ4RBZzf234XWzJGPueRebn8twa4fo5QcZyuBAcc6Mt",
  "key18": "4Wr5aLR9YvqQ9YS6DLxXgbTY3BJYsbmjmsMAa1SjHVoLPQJEEfFtPkmku1ZFRAbBLJGQAEiTnsYmyzrckjd2DKH4",
  "key19": "2G8CsAvh26KLR3JhxrY4R2fh8tx2frHK4MF4EE1JLiH89xiNKyCFz5HwUy2Zq64tw7eiMPpKuvm2gFzk7z2uNtVo",
  "key20": "3K7JZ9PJLvdMd5Qg7424uuUaFVwZ5KtGX6b7otXMVBfcMzRBm2wxseXPqwCPexxaLQdRHd9rCXhfYx8Fk4ZM8Jsv",
  "key21": "5mTkLxbSP9FawgXk9HCpQGEpMco24Pa1Yux3q2ohGEkFCrJt9B2FzNUTuf8oB4cSGLuTJsBzejxyh2r441FDAB78",
  "key22": "5NZStygndD91NFTAnQZbHL7bLjtJK51STqc68vTEmDHN57Ph17o7qABL6kPY8rW225PSqcqsw9rVNnmwtgh6CnQR",
  "key23": "2yyrVkYhz4sYZ9Lurnwkz9YQAum4rtdF8b4DdEBq8rgbqY77c13RRrqJJVxrKj9Lv4iM5Rsc7nAr39LQEG15H1g",
  "key24": "5j3a23niQSGNgDELTAtRWYe7hoffDa6vc9nvnFmCLwGLHSw9wAtSevQwj5B5pqyxUJ222s4EKk3Jn7hjuVjS4uw4"
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
