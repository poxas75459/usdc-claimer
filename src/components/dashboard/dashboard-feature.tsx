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
    "3jPmoBQ9NCCJqNvZXbwMDjX6Hn6unnZW6XzS51zTt6KsscBQ4gW57K4fLoG7cqaY3QiRvmS9bwXeMgp9wz3v5jtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KxPjs42jmeq1x2PjH1ucJt3gVZ2Dr3uUmCCG4U9nob6vuM5CoZ5vFqr49tAcmHJ3ZK2U3ud1BQh9LQVP92CzvdU",
  "key1": "Q3jMNgKf1ZKxNYYmXaNSKsevGqwHigYscj3tfPow8yL7XxBoBp1GKdYTJaF5AuxCDfcanxeUFrybkhWWtszztXb",
  "key2": "5Lh9UhDNvZAMEHZ4t2dmQxzapPELwS26qKGpYJ2nRyNuXupgxThdA6a94mxdC3Eyc9gh49SvWvN2bPRhS6FwdomM",
  "key3": "qZHekwpkMEAd2zo6cFTnhASMnPqqJAhhMssXAXoJxBejtjTJ336PXsXmWboaAQZjbwaSo15UrhouRGYhzSgHeUz",
  "key4": "3x9yYt77dP4f2EaUvmTGWZJrcoFLhgUiGpdUb6aPRwiJpc1mAECaS1sB3JJVkw7q7r7dFR3FpjXM8DR76mTFs4rt",
  "key5": "Xhs3GLHyyFY6mAHy2jSzmZ1p4g6BmniN3QAYj6u7cNExxn4dAiwpdzT2wLctBGPzJQNDZ2DdGXUq9vhXh1iBE5G",
  "key6": "cysVFn2WLHS4JQ2jMhRS4i8tVcJnygoKra72TAV2oHqe6UiwMet4V9f6banVvYX3Yoq3wDaGq1GZgEpMJ4PNUfs",
  "key7": "5Xj4LdiF14B72QoAFrm3hn4ec13LjCrnExNqNR2zesZQCMcJz85xV7LajZrA7gwGXyq1MQDvsVyfhwPUnctaKH6K",
  "key8": "n8YxAiSbXDMLo2kK3PBuC21LD7J6VtpFruPZBWReujeuWz7GonuC2a448AfxSJLATns3Erj2mKt6psuDGf2CoAL",
  "key9": "2v45PUhSF1sgynhzUV4apbJhRzbrc7EweaAy1Q79UcgM8BDWsQkN6uis27bi8mRHwKeypzwX8KMaqStb6JpePui8",
  "key10": "tapMmaDZtRrpPEhbEowbcRF3qNzK4uzcVk2A69hhAxQyxF2XEXkCCF8sgdvbjBTbZEKgd3ZcQ3rmU5Tvzz7rzkC",
  "key11": "4H8V85jUt48Jxds85omspJgjWW4NuVqCZAVq12JsZsjnARUjDHXWnmhfJDXotPm1J1driuCkun5hQxb49VxDp1Vg",
  "key12": "5V8eDGpSBHzMuH8uAg5CUMZ2V5edPhEn6tEj1AZxb8E1Q8JAQRxw6FyLqTmP6PKchSJajEPBJg9zcUe4sdoNcKF4",
  "key13": "2WSs6gd781WyvXxzSb2opFFH9SgLGdhdQLtTDQHw9k9xAs3VPVuSXk6TtqFw2yp853mgFh1WQ9xXUf1NUCHspzEe",
  "key14": "46WZTcatEALZuKBhoLDDBASRtFWp6PY4DvTs9ZtXgL8DvXCJiyzhUTeYF9vonun794hjrSi1o4MfsTBF1xZnQu1g",
  "key15": "2qhDiGyCXpDLKDRxzcdzciVZTdTtPt7DHHGTvzSkpG8Drte6rTDDx5hvCeFypCqfxf41v5wgqBkEbYQcvo9zDXQe",
  "key16": "1jQEvi4HctgT5JbD24FZazzMELDWkHhF2nSwrqsHW5h5MSwS2tboDmXaNmULJbTfctDaUDUtFHuac2Yt38VGzDX",
  "key17": "3gx5gpVPdWdg2qaLDQ7yNYVsUzREqKCLjunfpbK9bMbR7YeGBVwk31natcpkBmwDYK5ZohNJBHdLgXqyPjELhXx8",
  "key18": "5AFjyriy9P2Xp98hrt9ZpNwPUKwpTerPmGdFwaD6q71GgK4UD81ZG93ezBTcHVMja4XycFt8ZHrrKCrLPVEjfM9Y",
  "key19": "cv7KUHWHMXyuZqtpX9268d5VGnRmTmSfRsm6qXrMdhYCwZnt4Eop6oh8RiA7QF15NGzG2k7x6wZeajFoXSUkozP",
  "key20": "2nEGkCz5vKXNqXUJ5Se6M8EG3fvXAPnxUsS5hZLBJYipXQMDW9P83aWFZucUyCyWfmM5xjQCdGmSEMxYJDDk4u2z",
  "key21": "4teFbY7tPaiJ8uZUcEJPua3KLK6AZBbQrUaYAu4BxgkXFMjLoYKW1wE3aiwa2y4Wn8RJ4KeeVkMUQcTc8qHNUZvQ",
  "key22": "3dkW4yFerJeopuiEuQ2aSEjfXjqnYF1jSZAeJ3Mw6Z2zrW8qKGrHtHVBGYXF296itc1ttVXguid2sQoHTjhQkD4D",
  "key23": "5AhwibumWVvJKNvyr8YckdcdiM66QAhHzjYYRvKbZZymo3xpEM8RuAVVWffQYr6FodBEETzQCcoNR9xaH6P8tdHL",
  "key24": "kmftWVHHmSe5ZjkxqSkAMmELhC5Ww9yfmKeshUnfXfgc2JvLxLt3fKLxCroLPHVPuBX3XWAXY8CuqeoJSe9KQur",
  "key25": "4paXwdKQTksndx8GPabKKHnbubc19xGe52zTLtvUrUzUyNe3nf1ZAPxjoShsmUAAR6Bguk7b7Z7gmqd9BVXSSpyW",
  "key26": "GQJdDU4ysyyXhbTFCDMRENLHVZka7qb72NNc7aopQro2qhxMPjY6r5KSwVqGz5SBe3oceym6F3GxMGMicJdm2iM",
  "key27": "5pxDoci2ent9YsQSVGf7UDBqPZXvzCcz7mrw9oai3Qr5aGDBtQsgvHvwa88nUHjjAMQqBfptg5LLPDt5jZcJi6MT",
  "key28": "5aBmEix7TArdATMzf1n4nLtnzLP12SUzjoq9LWcxSZtr2HDA9qjoUvq86iDnhwKi3uKYSq6ku4NwJ2g6VgzJ747U",
  "key29": "337Ytx7UAXBCrqAvTjcrWuoXRQiYw73QLyNUMcSAcKhcGCurGLJRAMgTYHDZSQ2iUtEHexwucRXoJ1C3uk3Dv6mU",
  "key30": "5sHnNdNKAxYtYN8wxpmdKuJP5BaQEJJsDqVJD4ZEEK6ksQ1xy2i1cxmVnqaC82KMAR3XSPFRgRjfg3uTVAGZP2HG",
  "key31": "4Y7RmJCw68VPzepis8xCY2JvWYoQup6DYhuuh5d92LFUzcjvUmKqRTQDdU3F3N9an6aJY1fjjGL4bYZLhCx2xx28",
  "key32": "5YrVPhoar1xnzH1CfDi3hwGcKSFjJM4qzFafw3jKCtZ5x13L52rzWmdMLguaNGQoAZepLQqtExYTy3VTr7ws9pU7",
  "key33": "4gHkvX9Vdt58sZVcZHAwdL9t3C1Eza7HGziJjLqapDnn8eDppR8pFCrPQPewaM5XL6cfNR77PK2mJdVZQfJeiQkc",
  "key34": "55xpieYDKM8c1FfVEk823vDURoywRn3L2VWkpc21511LrpvrtdXZKvdC3ZvSkR5D9TAnq7dzx8Z5maUjgnYzEMFV",
  "key35": "25rqtkvSHJSb5nxpoLpT5fmHjyTXzqZTho99GnwPZ2r9UJ5cTMBosFJfzpSqANsWPbZhR4sgwn36BChYtJFW72jC",
  "key36": "2bdQoxTJdutTCYqEFvWDs4XGrcmq2xyss5C5N469iAbFdwtMiKvYtjC6i8LFJReANQn38DzewEnCUmk6vx7272a5",
  "key37": "27Ynia1GSUH1XXeWLTXDgVE8agSXsmG8sjmvAxWBGK5JpSqdqNqbg93uy6azVydxQ7syaqZLLo7orGgzkhAZ9nrG",
  "key38": "5WWAPMaW2TQ22aKJ66puyMwt6kab2aokFzoNtMcD33HwKNKYJtTWGB8C87cMUGXhFHouD2VDdVYKF3qY52k3Mu3Z"
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
