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
    "2wCUjB71g7yaGb4hcKQYsvhNt9Bmur2SjwbiHPirGh5DV8ykrsJbQTXJiMCSyiYLGAEHkam4fczt5e1nRu7tpzA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6g15jLBvWNqwjzzxLzxc4axFZMuUz9gvJL8deT4U6xAowB37dVU8wXMiwDZToZPnbDSizsmUh4odY1eYDh4H8oR",
  "key1": "5aKAiBgHFd3xJ168r5wpe6BhGfyGuy6MAeoa4AYSZmgqJM27h8tNUQuBZ5bL6RgXipUtetiru194sbNXbF33nGhJ",
  "key2": "2pst7WnvFr6fyQiHMFrzHtg1sKhv9dtbMmsKVU8LXFGoftwLWoqyCAG7Ho5xKr6NWNYfPUiwycnF9pLkr46ZipCx",
  "key3": "5yx4aQnEKSzvWhEWNRbcx62CeLNAez4ahVgEfq3NtZ9QBrWrFdXhL1NWieM8cAPL1x6jwC5tnL9db4HSh3c1AiUU",
  "key4": "5fRkkt3duLYneAaVTdSR56yH2nygJyGHXdem71CnEafWf7qCTyWsgka9hk8xaVaaNzMr44bYTkt2b1KzzNJZfUac",
  "key5": "udoVjYgeMFyUQXDDfvUzmTmJiwtB8MDrDHRzqqJW59pmn7uH27ZpLvB1Rijktz9u4kr2yuvyyVDRraabZM89kox",
  "key6": "43pYmRQhMS3zcyHTosKmK9GfpzWJ1wQ6XwpJchgKaWtRLe6V32eU5KqwB8rz716rfVAC84ZG66nsV6rs59ENgfeT",
  "key7": "gb4CQHzrW4jBECJvMTaYHGxn3JnNeZgNdjySpvFzGFooVKi7n3QbVJZ1ocjGPqnSit29pZkZnSTXEc8WTdzEk2y",
  "key8": "53myPhLTxGVsKDarfuzBVojFT9kgqiq6u2Xtqbs7vit5AkW8aUmQ5CbRhLqkhtDgHwoYzKLac9HDx6DHYiTPjhbL",
  "key9": "3ArEACSfvSagepxzFyynbcXdJgq6QarsmPbFz7hrYxNbwe2DRdxpspCXduS64GhkPCwLj1FHBxZTAtA5omLeCjER",
  "key10": "2hpAdkn6qwt6DGd3wsu94VrLnMfrwSDhMR7szaxud5MGyeiXcfRpfUoXsESN9dBUq1JtZaekn6Ri32NZM5DNSxqt",
  "key11": "3xLKcmwyoHBwajbECzhCuSHUdMo7K9JKYu9gStJGMoV4m6eHGezvKhVD2ypZaanmBJthmzpEdUjQQASJdjkCVs8x",
  "key12": "4Xqso2VVw1Usk3YLmUeD34SHQv2Fx2wUtqoePzMGYv6eP2g7M3desdq6rCixqkqGF1DbiqPXhfW5SX5BieLE6fgv",
  "key13": "3xD3zxPk72odkQcpmWU3Xp6WXzFAasnXPtzw1oAgordq8zTGd3At35812gTGbAmC5j9rSereJVdNVvfW6X5EtA1q",
  "key14": "2c5YfZmyYQd7zc8wTfXyAG1Jjn3XvvR7SB5Sc4GbhzonjNS44qrEfNP9THPhcw356Fzrxgdym1yw5qWMckr6H9RT",
  "key15": "3G9R7kFdUvyBjrJBHJxbEyz5jpJqDRz8rqa8RRHUjhc9SKCJ4LAkbpwoAasFhy8iYH9aSxHzqCfXVCNiKd4Q6raY",
  "key16": "4SvWDYbqFDJRHBxxzBLaB3kfDzmzBGASsYR4912JMebPnM1JrFfKvXmy8Wd5f2yb4X6g4BX1itFv5CuYUEZEwTHF",
  "key17": "4sm6m5SoCUpY3q2TgEp3HCb8hiNvByTLr8YEaEoASGHCkBSsYPn4zhPtRGU3qW5ZP6Y5QBqwxWDVS56v2y6T5zXA",
  "key18": "2DzYrog4jDbS5rAdeiHzzjTLu1BGomsuQqHCdKibQvkGu4RDKBt7b9JcMyto6DZ4vmYsQhSeAmYvZzz8RuvxQ7gH",
  "key19": "5eCYdQEaXeAc4JRGayvHbyYeVQSJudumBzhSJBb3DYHtxAPHQheGGJyr11tEcXvmm3gXt3mmUjES3bDDqxKsJjHs",
  "key20": "38ZXeS4YtNQkEvq2yywiKxNwGX5mpocBXHqsrjh8mVDcknoyREQZt2GACWFznoGNg5e57ZzMuTzdEyUwXReSkkiE",
  "key21": "24xxyRDq8GjJRuTA6QCmiUkuSNYrSbbyeSRLde1KNunuGaa5TvX6MfXrPbyuXDU3JcUhZ5qVJhq6PGU3pCR3Nz2V",
  "key22": "8TqAiVcrUrNS1TrWGsq21dg2YtT2Zwbh28wZaQY2zjUWxH5BmWwnzWToTynRdLhtiLkm4G3pzCdngY5bmzeiAd5",
  "key23": "2YYcWKHTFYEfr4DqoYoxe2UGB1FvTuYS2AxLCHVUtBECSeTy5AMVZBaz9y5ruM6NRqi7J37ycsvFYppcZzBqsCFy",
  "key24": "2ZVKo4dk6kj3pbMhDgd2gRaM1fegt1vFbZQ3MWi2y2zw2J4gwhsV4xffQHM3iHrSz7A5QpkUoorWw9vtrDEQApC",
  "key25": "3Hd82vWF9ARQtw37ouLoA84EfooMbq9yjEAVCH5vnjxcWZwMsgWR3MzXt4psBG8yFhXHmF8j9viRDwwG84dUH54S",
  "key26": "4bGjmxS9g6t9Zb3XbkrgehbkTfTuvTMzmQEgpuA3sqty1AMtw79bB7seGceVyBpuLtKEvLbYreAUmsZPr1J5mgxu",
  "key27": "4YAxRHHopy62qZUg8GjH1FTvGzqcFR1XssQEyotHEQDBSCc1SL4a1gW3tY4mkBJmu5vg2412jk8UhsiRUL4Xpy8o",
  "key28": "2cXkHjVRmAHbVyiCSpUu66spzbW68qkj7PzmDv2yHT96uZUoAc9q67jGKUEbgUiGo5GySSJ4ECRLhRzZ84cfFkFy"
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
