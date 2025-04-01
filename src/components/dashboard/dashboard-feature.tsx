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
    "4AHZVzVrTKuQ6tohujCTiP3m42gRpVQs69Bisvrau9CB1gFeV2feJGxBsHd46U29vKtbWCgpWvBTf4gho4gB34MQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jzjZ6qwZxr3cfbGn2UxB58dsddmtRAiqCdRyLpkZZyidsiyHKFnwSYy421texhazp41UhwkBy31zxwPnpkUG1yj",
  "key1": "4wWoQy51eYEczP4P1dV18qLDGJow1dUHZLjHS8VpqhAnq2GJVsyumS7zNYyqTNpByeTeVt2wa3meBcfibnMxp5sR",
  "key2": "UeuQ2DdRcCJHNBEUg8W8gzaarfPvKcEQeqQdzCSeApE6nDzeVFTEjm9ZyXsABrt7aNCXtz1JpmLFddAAaTEbeLj",
  "key3": "49W7mRnnDCMm5VwsdWFH6APu9iuKpUHbH2RyWhqtnhQZDWXAYLAHzDSrLRmq87pdE6X93G1xfyBupePZWcSvxdcg",
  "key4": "4XpouBo3URSNGAwLoickPzUt3LnyK3JXrCGPKswrrma9NmNzJZPjr4YgwYCqyD3CPA4Jxx63djPjfRT9yHaBmiLU",
  "key5": "2pSFnTLQqzeQhDFGPydhSXtHtwqyNcQciX3w6heKYCgAE1VkiR6iicHxEkRynjaHjcypEhnnK3k2FvDx21Rip8HL",
  "key6": "3ed7ct3vKibmsW63oivMGN6XT5SFMTE3xeYu14gEY7GKahBQchmjDUHmEHCPPbMpKq9aWsm2Ven7cvKYuug83wTX",
  "key7": "33njX4NgWjqTPxe8sB5tbyAqtdS6qNqjeFJqnU9dkuq23bsojKKnJz9KF5P8cwPM4u34FScwji7Ca1gaTZmSjWT4",
  "key8": "3nqSZjY7DVEXaWy7HTZ1oZi55HhyrGD2bbTjwMnMgzcQ6oLDBj5HxgpVFB5Y9iKYuEA2JFGY7DrHunpdvpKvF61i",
  "key9": "3iWt5gac3HDqU1VG5XkZRupoxppnecTsNvBQqbcFpbMh7DgSQid6axaSRGgC1xqpv7ZqzvTrgDtGyGCE21w1bAQF",
  "key10": "3sEtMKatrSPQ7kdybWtfetzCrT6dyh8Vg2J3uktJYSbiGXSj9enu5CpE5azgWfqpwcauaQRS9TkDDABdEJaBEtg6",
  "key11": "b6jzKMT5L2W684LZhADcof5z11o3kycR4DWNnrXT9fhDbUhu5NroHbsBBiWDHF8yAoEBMeDiGf1XPRpGdZaJt6p",
  "key12": "4TAGefDYfshf4osJhsmK2QoJTHCX4CWGexDkpXRV5TvdqWUf5EHynHyxwvHm7LLrP8RvDa7efx75aury28LWKwih",
  "key13": "D2ciEwwg1kh695yTGsRRrqXMt7LHFkVqHJc4wT3hb7i3V11ZmcTEjDdoY1TgUCFpTcvv7ttms1ubFg5eRz6DzqW",
  "key14": "3Li9v9zTLu8vn6obmd1rXr7xtfYgNbb2cST8wozDAZYD5xo8qLpG9F1ZRic5pu69AjVXGtrye2zce1L8Q67UFmD9",
  "key15": "3ofNCse4hECLCJjJH4jchESt1BREPFJtZowUzNdVq3H1tSa6PNH4ExGiyMVJ6EDRomZBYSbnxYcexTEZ7jtjz4CR",
  "key16": "5aBp3Za2GD2g7WWVF5WwphbfWrKi4L5bGgLmCk7XthPrQhKGZ9PvoKYQJ7ecYy8dPh5TV8K7GxS7RtQLvLsNTuhD",
  "key17": "2B9oBwmWL6GUJGqL4y4do7zX8e8bAE6sQiBjMLqif9d4yJijoukWV7CSXH7dpYJMNjFJ6uAdT7GDbQjQSNkvzmwf",
  "key18": "5QRMFLbX65hYJMWzRve7PsV2YtgNxbqPFYwVUeSdgS5dKHspvTv3C6dqTgycD9TpQXDyc1Df7Zqw4ZQJsDf46wnZ",
  "key19": "2ZALDxwsiXGthacJm6rJbgwUcMGFwdxsdHzSDUJhSiHn3weNJCossfGbBHno8CJrPWnHhuUi8hsARvB6GQ2F4LUw",
  "key20": "2jVKfZ75VdH7r1ihxAtN9WiNd8f1x1ErUdhcpGPtqo9UQSHakWC1qBw7fBWUtinVomRZS17jwMNfCSj1kGtpaZr5",
  "key21": "53jN4n3ap3qHLkUjsUscBsQnca3mKtMoLhFZyi7eBo329j1sNxmCSeN3oG1zBgRuWSVi8114zG6qqfGLhVrMs38u",
  "key22": "2YBLbGyFaaigHGQWhVzzAC3yrRBVNSnytFDR9ddggyAHyRzwbaYzVJLhbkDN3Mt28gASWjLb6G698R9sse9qmwPU",
  "key23": "4PWiBBjsavZKnzAD3rGS56JTq8FKNXaPAe8S5acmPyPNE5VDwXuvNPWx5RHefWZRuw6w2vLxLXN5RfnHWzA2YwVh",
  "key24": "3JiTDF2UGEhUGiWDCejz5iXBKsqwD9CXpcXRd1qmLJKEPwQ1RaEiK7zyi5R5RRYh1ePMsTTZ9Np26kB4x4inJJE1",
  "key25": "43vv1UwCn59sCZxXnt7ZQW4Rj2jq3GAeJr29CPDeysoviHvLnks1DWgbhQk3s6fo43VDZweCdtb4xxAYuSQJPguK",
  "key26": "4G7cecBtbHczRKdirxPLJ2eyvMRkWQsjAZUxvLM3eeAQnvmF9SF3pX27r3hvNNuVcmpzuF2mq27ZcrsBeVVJDYVb",
  "key27": "A658B9zeMGQoUCSgW35VphUY8A5QaqxwMiXkAneKCwRabbqTfAaKyogqC5b7dr3ci19Utggx3DjvQTrGAyA3RqA"
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
