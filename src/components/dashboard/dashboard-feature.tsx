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
    "4FoMXXqJKdUBFjSomy52JqF7WeMQEByjm9DrqtvWXb7ng85KHGDxfdyKuCek5y4emeLYsAEjaeXo1RfPw61XSJ7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26WkipXEjoQniFC2Wkhy25XTpeZMq1oo9sgiqaFXtkAQ6YUrNaaT6TqpRUu2Lah1Y6FDEFxxPs2mAByFr8wjZzn8",
  "key1": "4AJRQTgwHcE4em2v8wtJfu4W49pmjPiTxjprbyVXiwCirxDDfYjc7vBe2yctS1R1SvqnZGMXrbCTd7de8xWzp2gZ",
  "key2": "2JnjJNLrZgXkpQMGbjizf2i9VRZ43h6cwhT2KhroG1nRriiJqb6WXu72VsGGNBSxuYFyCe4YwnoSPTvhmKH2ST1n",
  "key3": "2zduCp1afcJSBMQgGgqZfZ42ZNzRcFztDEc6pZNq2gSASN7RxAhCand3hi5nZFHNoLdp2NuDakSUPGs42Xqbx4R7",
  "key4": "65RUdwHEMpruJuH4Z1TLAxubfYBzJ6A18nZDRpbhrB4JhaRSkdnCsT1dc3ATnDCR685tBvptRfr7nkyVXDyRHbRy",
  "key5": "4DwJUjhSUKs1R9q9V6ybtstLedZ8FF1d8ooUqyakKTdFXMi9oWXjpLH7PCS9XBJfgcopY1E6gqxmuyNj5iVsVNsX",
  "key6": "3TnnPKPmoFncmDxuJXiwn7U7jJZD6xNme4VyLnaXAWV5UyBq8X8vcUPNgieKqokY4u6MqAUPr2NVPSm8QaXfD3Uy",
  "key7": "3BncnjZnUYY5ag7mey6L3S93WBFtdJVZeU6Z72JXzFfMLMd4sWRP56K5j1mMNBwsgShdhRJrDNPnKQNKsrKSFYXZ",
  "key8": "4A4dGFZ4MnLdspASopuVHs1kVVXgFsZkza7Q3uBKY7LmjvN7z9vSbkALnMF5XtY5B9LPUVmDGn2qjW1HG9HQvThn",
  "key9": "2T4ZXPJmgj2vbAAdoagUY3MyWNFtmjYFqzHpmbcrWaJvbZYpw1dPCMXHRM8YQzqKmZahTpa2CJoXSQoKv3Eyc12",
  "key10": "yFg8XsEn96qogfAEiLy4D8shhzfEa6AWTARHy5q4td2KNYD73BSv84XWRZf7cHDLAT3mZi4FBt5wwotSEd44kCk",
  "key11": "2LgKAw8z1G2CTdktgCDcy2zkVP5W9V1dAk1oetZmHUGCS3zL6F31VboruSGHYSj98uU8zVEpvfJeftQrKiDKgerJ",
  "key12": "5CL2xxYmeW3GryBLhE6XFdufhQ7FDEqX3sLipr9uXHWmnU6CDMy1Ke9TRWAEThh9qwt5eXTKwbq7A8dH3KE91sUm",
  "key13": "2ATt42HCjKxA9mxCTPps1y16NHwAoBwJmtUtpK9EGTgp539mdiVqzWGXZABns7j9wc1XbQ2DfkgXW4MqsEm3juTP",
  "key14": "SjkiwXXk4VDSwFshogtqAWiKZEqgBUsVmW2p861nPF4VBYd859Bgrn6T6edDGHhXfgbitY5tgn16Qn2WsSjrWod",
  "key15": "65cTtVVrdtY8k8qGZkoio2Sb8eWrxnufT68sHDV1jQ6Dx23GFnzLKm5nTWqemNipMNcBDnhtLsNynoNLW28UKqhx",
  "key16": "48KHzLuXpEXbuhtFD3kTLgPznm4ZsxSLkqSuqftDQbUw6Tdcm4C9AQpjEqX56bxTNvFyxsSz5ruTfTQgSsGeCtTD",
  "key17": "5UmHedGm18161bL5eZGP9nqwZTWj1ivGjdAPRztZKA797DXsrX1FtH7oRXbQQRVVFtnFC1N1Uh3FkBF1wfa94PfC",
  "key18": "54kdccCUP77hsTouoN244rSRRSAYzFa3puxiPQaGXb2nirSXekbAG4eMa9iFLBCJ75muJ8HTEgGw8YcuGmKWSzy9",
  "key19": "2MBjsfuyuv4GShpudZ7SGnDDiCwdFfar3NLTfrk3Q4HxQfNjxgoiym8Ajr9hZVy1ZCmDx5HA5WMJ7grDykwmHk7e",
  "key20": "4fmUdJ8MefNMMMc38ZCS7ZkrkkcWiTvRpXiCdkMhAV9et6wqFxaZGp9cZW9JEsyXUfo3KmFU1CejawYYys6ZavJi",
  "key21": "4yRkPoxejCFpaBqfZAaiQ1mXAsHG9qARStQRjTx5wobcDT9r1wBHvZnXmrTHjk2gkE8xiMtVUUpLHd9RbaGCkQi7",
  "key22": "2sKfMcyWY6Harj5wt5GVK4ojMVTvhnFriSE8FSFGMVgmFPhb58BNgmpqD1mT3dRynYyNoWMYZEVUTVBXkFktz6wk",
  "key23": "4KtDj52vJQxTver6JChEPszz3kTKLDGsXZHwbDqZGPSaRt9xqbxujg7aDkHXo7GFoAWibjC39mb6FAgzGhNRQ57p",
  "key24": "4qUcFPJuwkKC44tELMB4Et3PaiP1GTNUb2YcuGsg9xSwQYc4s9GtmbsuMpQBTYuJvTh6LJMDBtEsTkxmofjvcbDE",
  "key25": "5nPuAPFiJFx1RL15vCBFzHJ2b3HeqpAGSgr9zRmbknrwLjU3n9NnLo8gdmXe7cWdXoHvECWG2Vh8MoMyydKBR5kJ",
  "key26": "2qD3HuyaoVmjfgR47qPs4qiFTVddd34K7Uke9Vj5dkszTV1zoSyDamG6a3KJVGa3uAeedy2BHbZziNRzTm55fJ7k",
  "key27": "223vDieJb8ZVMbxBwPaTgJJZBk46RBRonWvBNz5Ntaq9qJF23oUZKpx6Xzv1ZooXbtV36ibTUg3JHcNUmCTPKMbM",
  "key28": "5Gwy5aPZaZAsqEqN6XukXJLDf2DSrfehbuS9nEprpHfRJjZezzBdCB4QyACfnyrVdi8kTN81NPqJ262aMtK5x1h9",
  "key29": "2YTYdEmaMpsfQJRreJFnsCjR2TmFd2YTBXQzydYmSi2ZC2Ya5kN6x9Twde1Hgnu49KdrPiJUwyAmBnwZr9iovryj",
  "key30": "2abNmnMJ9nbYsP5zcQ6S5qYCNDJ6yV3zkxNYSCSz6Q1RciagMiiGW3iZ21aWSWPoX6wMrDsVYZXk7RHL7wdm2zCS",
  "key31": "4MhiYgTjP7Bi9bEtQVoXpKs2MjoYCJE7UgWXeKXeXsYP8fG3FFpo3oFvn6nEWhxRNPwh6BPkjKQU6ggAP8vcQoxQ",
  "key32": "4XDL4m1n1eEyacj5BHv5msEcmNNqxv6BtG1yePoCz9A1p8LWRFoba1Chvy2RyKwxCSCXmuHiskZUZRiQaDXsoDZf"
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
