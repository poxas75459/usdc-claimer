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
    "32DrxdL5nZrDZTQg2VNAau7EYvbesre72ifsV6DLXsnCMz4vFFdrG6y1DFaiMqJZJMHPk26qjC26pcAFH3hbrRC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mxooZmvXKrqbVh3qx2QDr7aaaegQ7CAMWp35xY8sVUX5PXfYUL5AVPYwQ4G5hPfPP72KxV499wMppLtgpAyxeHm",
  "key1": "2zKZf9NwG3zuCFAXDeJTMc7KE6XjeZP1fNkjhviL1ZX5TQKYBdF84QwZep6jwqmZ91VJRfY1zz3Wpdsx2pwGW7y2",
  "key2": "3E8wDnirN8LoBadTSBpDFbUb5kGAAmKajMd1xSshKK55s4co4Pwv7yTs8yx8SnQ1Ro427TatQbxMxfpAkNGnnGuk",
  "key3": "5WrMDj4L4mPPoefLf9sQQTn9jAehG5XuCQJdfRPB9dRPmPHo8FLoebhp6XDMRDWAUKHF7g6nv7KiNwBXjk7ea6ZN",
  "key4": "2Vfnr3ECFX7GaF21BmEeE7heYHaxBBojWZaX5jeVK67KbeYDPbUeDasuiYstioQgo3RjPAgP41JhN97ZAnaYKCff",
  "key5": "5aAzBsDGjBGuQiR3LR2d4w71q8enYdGFhvCDj3WeKiGbRTGhAbM4WAb4FWjyw65yzwufwkt3STF9W1DL4K6Rc2EJ",
  "key6": "YirQZBRHtKLBSpUM78ky5Sr3LhW3G8o2Rt9gBi9qKLJ4hWYUvs4wgUPWi9fjdtZtYeWZQjtMn97FMtC3aH4jT8X",
  "key7": "2taw5pUHh8xWRub2QMvvbnkQFcu217ZvqRRE5hXdANUS9ixjRNNWXBKSJLG23YWgRwCEyxtzFgEgWQFryNX2o7QR",
  "key8": "3YAbGXThHcXMP66tS6F8rDCjioxMte9GtecnKc8o7zGZujaB5bDUG4n1oBjzT3CMfdEH4nedrs4bvMoMvc9ZvsbS",
  "key9": "2sgmNFgW1rNHjCUxhCQaP6EDGPvRXNqKs3MTfoUdZTjghF9Nu546jwaVbL1ZRuLn8AbQts9krDwxRYbBTGoTfFnv",
  "key10": "EUZi81dQpPF4FH9ibjFbwcrU73Bm6pc8yEtbbimYpSJ5QXdZPuBLzMhsEUq6bukVN9oP4qy4L12SxCEabsKcsXF",
  "key11": "55HmLipMYgcSNLkRxFwRxs68tNLzvnkHnsx9cHiYEKFWEq8Hc28SAka1ucNoweZJ3kHa94oWrLXwsBjzsxzPDHcd",
  "key12": "4XPPD2wbnHkksVKXRF8sNM9a27jr4byYuhN8Nqqfeje1YJUSjzTjmo55wssWnzVVW7EupvbkAYfXtpjuoL1roZsR",
  "key13": "5bVrzCyWb98pHXur1AiYarX8MKjVC3hkUBYT2VDgjkJYAjgxjeXYVBqyUtofVX1bAbK3ER9ujBQLDumjKjdxVJWE",
  "key14": "5WbLPpkYAPMhtR1BPwWFFDFBFR9sUv5qRvWooVPcYXRbbUy4WN85zX9DjjSy6u3BjBWZxBtV5pBDcRzJsAXkS2YR",
  "key15": "2cBTuoWCzoQy5317zFYAyXJh5aSKvTgme1QP8m6i9Dj2s9Rt1JyVe2v7ktvGNynD6smX3ikeYdvZ4exnqjEi9kNN",
  "key16": "32ZwhR3M2nBs1SieFGBBvYbX7CcXrCn2kH2XxFAtDeDQogKy2bY4iQ4iHL7gwdaRtniaXhApkzo13ib7EoKocf68",
  "key17": "2AHLZryFg3DTrEDpWjpfCEg14DkHYKKGCxH1onX2AnN5udWHm2eAU6cf2no965ed6LPMX9qhXM67ZtMdHvitcAxi",
  "key18": "3nZBZpvwvk6GGijyJxDKiJAsM4MpSTmtsHnX7YgWJV1w656iAVaz5722hMHgWnkjPAyah36NSDfeMohACpK1wsZX",
  "key19": "4rNBkTeZxf2mVY1RJ7fndXG5o56qDSBWPKDNpj9Nkjryyen1xYbr5iV7Ep6av3CLn4TVcTGrELUdTj1kaVHHK18N",
  "key20": "3QSqaozdE3uvCNJRMvjgxkoAms5XT7CSSRgY16pPmeb9M8JtPmLWVj588oZG1LB6V5Un1vemQcSVMpqym6phUExH",
  "key21": "2nsggptPjQgfXcwZ5Xq3C7jXC3fXhgiXE2KfB9wyhLdPCAPHwSN7gTg7nosbt4j58f2HsMXPrZyow37TN9WEoNoC",
  "key22": "26swCqoWaZZy8aaLdXRzBZQUi9ELDbtaFJTPsxgxayHxpqQG7SmXkPFnukHqHSbtPoFzVxmWvtBtj4qYEnrhK4nN",
  "key23": "3pXRPnNioaigTMrJcY4NjfUhkRzEvLKrrv5H1eadb2NsqDShPqF2n5x66yAm4u1W4KsLMWghbFyNfHMkQuUWvVgb",
  "key24": "67mVAAao2srPBvCUYCsXKKtt9PWRpQuvxQFQM3LdZRRcyEmUAAZQqx4btasC6dUXx6q5WGdGVpiNmzs6buJJ2PbQ",
  "key25": "2EcX7zjCXUyPHPkRKT14cNgUtjWucX29MuXFbZBdT5DpDGnsz5P69bTFT6hTkgLaf5soqzhiw5HQd8ZmZJLdTyut",
  "key26": "31WjbLnS8UbLGqFoRDhdjgUCLfHkVZtnaUZGCsXpiBCrGTk8gN9WfhyC5sGNdBxZ98zUGFraTmmB4k83oCNo3XoT",
  "key27": "ysrJUeLoVSU43yxMfSDUV9K3NCJRAswT5sqnRpgMwWo7ZjBEvs2KcpkC5QYE6oAKAjo6aCju2oocLY5weXu9N17"
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
