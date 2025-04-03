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
    "2nKLVZhtFfA7gcT8dzG1BJgt25NuWphBghfwUNX9ydLAF1Yym6GSH1sczzURAkj6Q9p91rGPdJfYr7sUx1gYPy1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gwMafydFdt6GXREpxLGx4N361tLKMXE1LAa429kueLQaWzeFSefkwXwL4k57uvJDYYrS2yNNLxzFnx4QCT6rJut",
  "key1": "59QULGWa5V917ZNxgDk1PEUhqyy172xsmCZHyyjdtTMPVR8a6FtkNwQXT2BemhowmoYuLAhzyxwoJt29KssHTqdD",
  "key2": "2mma4Nu71go2aDBdrPU9bt1FsdhRbzC1dTuXmQZc6WRwTTAFy9rKdnZY1BtnykfVuj2uMTiy6Y7QWY22RCvYQzKs",
  "key3": "L6jtpSh8XJTcUA1tyTAMrfEJkFimf8UsdeugJz1XjKFucrD39tKbA9tgWwuzJqWVV4krTtWXenUuk1MjKzqJtBT",
  "key4": "5tqhYoXSNPDK9R2scmF8jK5sVcVKCEAh9WRaNiNgip4zJ3KcMd4NaDoahqjqXxe6prng43zNuo52BRboPUvYf7hG",
  "key5": "HAYFSzLgGCfJxwz8RqE8ajgRLGQCccaoPu6REMjaoQZkSF9bPQFEpTX5DqacxYc1wesP2EvBCxGnqxUyrdzviKm",
  "key6": "4nvX1n65jPwZA6jjEKw14NodyZW1yRFxGc3ajtboJYubbv6ZwcC5Sr9UZTVBM1uDarxn4r7ZEYpyfkBRgC938tde",
  "key7": "4JPqrzFZ6Atrsr4y1XdF41szXTJjKjJ3GyayXoxeDT95L6cmxLoJ6VXfNibRioNzRSvaXJNABdK6PkVcVXPBN3yC",
  "key8": "3uHPvDMR3zxwDuV9SkiHVcXzvPia6PSpaoRPj7zr3p7HjLBQ8p2HG6aw8qp4N7KBZiZLBFrbPA9PTL41RxWfX9vJ",
  "key9": "2eyonYjc5uZXF7nHEjvDz8YZwedWkWuQUqBGPyVNLWnc3EQnseiSDBv5NUK5xWoNTKDFiw6aDyPMVZq1jihvNemh",
  "key10": "5ppEE4RyD2iS1XXoNw8ggnwEYEfr66ihRYe7sxi8n6sXmM5yHDgomvc6BoYjn3yFjxhqsCq3LsG2LuFLhX73bc7T",
  "key11": "36DVUb2LsHKSUUYkUv9owQg5hhShMmvcWMgbjDry9z7eATAYZjhoxbSXWvmt8yrU1cECiAt19yQg1TvHxdZHq8Kx",
  "key12": "i96cRVw63zAuVsrcW1ad1Pwg8zk4vC9guiJnHNojH6cGZsiXy1fTJcXU6EYLHYDZFM6kLndS9pg1wY6hJDEaQN9",
  "key13": "5kQo9JHNkJ63RPaoGzb8GUVB4Aj6EvQ7kVJ2eooTL53LrgrcWYXbsU5rTreRtrncYwRas1QmxPYEuRcXsVMemwhG",
  "key14": "3NsxgNsxe8cqTps8Q4Bx3WhiKbcG9X4Gq2z8Q1sZ5npBB5iRDk8VfNg8AD8BcFaeNzCK7aA2S3Kj7TLWnU8We3LS",
  "key15": "51G5Y3FzRpDhzcZRM2xXYPEXGQFTovjCgCm4fcgm4vzuV6d7sPw4YY2iqnV4LnZnBqvxQJbyY4vBj6h6mGV6AC4r",
  "key16": "4VZi4qTaMECEGTn4JdcfUrYt26xHpXLxvDyqDftsStjfKALUJsgWMWjgC3kHSKFkfXuS6wXoovSe4H6ANCDURS5P",
  "key17": "3xLwn3RvDkWmSMyJLpSexKgtS5dXj5NyD8dx16CdoqsyTM5R95tDMGxZkQgBFMJdJrepC2MvNwwxxczaWToiq32q",
  "key18": "3qBGjFCviBbSXAXG2gyW3bgzYsXiTJMgCjS4J87FYHsjxovqNYSBf2Y33FiUscYd93TX4fc6hqWdnh4GfPwuVHKi",
  "key19": "4RKWvFu5o9fA1uwo9gtHsbf24LbGb8kiLnUZa6gNnjynw5vrpRqKMaEEfLDSTvhKxdrnwcmHLGEMWm7LARUfYnU2",
  "key20": "2SmNjEudyUoseDSwJzm2v4jSeLdDezkNMWY9BJN3pnki94qxnfSzpvHWiP9kwHLDKPKX3nFJvroG2nyTtduTagCE",
  "key21": "31VwvVzBKRBDrFFN2HhmtCjwzVR6sv2DVaJq61Lvg8V26F5KiEbGmQwnLnmTqp6DPgMHe7n1vcNm1quH9ZD7ccM3",
  "key22": "3GX1M3581hGczozvvcCFBZ5HqpC9He7rdu2GGsWm1KcahUToyxmTRNj3yu5VjRM9HqumxJPELqVB2jJqSX5hRhzw",
  "key23": "3ZYotCfwhREt5g3RJKRDPXKs5ycb24vpRg7AeoR7QaWvQieD3gYBNFf3HFJ1DoRE4w4osNaXDRkEWqSutEnAiRBy",
  "key24": "38Nb3kj9PQKS8JxFtmkPhcuK5kigbJPCXCE6DpePdDUcKhSCmQxr5hnivozcCwBMcSj6GQsyiipZfUpGPeYSKkVU",
  "key25": "2GmVvr2FvFXA3FeC8CAJkGGyfZfU7YUjvBt4ZSigdzN9evWDuF6dkdAuUSxyAeTviz2jt3cP5FBttBxfMSQnGio5",
  "key26": "kuJ5nWt14We8hfFLB3B1ht1zUmy417admRwn9Pc23ZAwoo1dWPU3nNzjFDVwXeJouy5jJbuMDwMkapSffi6w848",
  "key27": "4vXYiNAHzc78qWSwU7kEWeU8Yc4ZSfw5brGsgCKxPCzG6ot4dzyvuWhUrE9F9BbePKSAHQEomepBV6JHKbDzySWc",
  "key28": "3hJYqA1pFV64aHwczS27cqsoFKf6UyW8BuhvWAV6bpVfAJgV1dTxQVvmyr47CbBPpxg3iVx51nVTK24skiBUmDpG",
  "key29": "2WAmqgyeu5mKy9WFGwR5t717fAxs9cCjgpQ9eEtvqGiqQsWhZJXDwZBB4NR3Ly53VzXa87Q3Kr7Y91ogQKTgVMLz",
  "key30": "4vC9zmoRJN6tiB6GHRH6ASfAbAo1XVprJJR3cs2duFC6fN9Gfg7MeftuCCdirWNntPNVQPJKRuYswy14yramg3Uv",
  "key31": "5rGeSi9s7UWRbHT54xt5K3ccqew3RAKMbs9eGMSeN1PA4zYSwDqFUm6GjnMSpdHvxfo4QYPw9ZvrkLKt72DDS2HD",
  "key32": "5TAg9TdPapBLuDFwe6XZBYSaTGmsF2hS5txBs7RYt6siX7LFJht1vK2WK2TwheytznXP1sRkq2VCA1P6qJwhg6N6",
  "key33": "5RkeLbneejpwVhN1BbyPqg56rCCQBvVhZvviZHjr4Khm8RSUKbFqXvvzTQP6PagmSwjc6WK34wk1SULKoHmUwc19",
  "key34": "4kb6m6fq7usJ3gKnNQAe3J88ABxLKcBjAKMKF7ktm1Y7rbetDLsk9DmKPzHKbNnudGB3LHDBREF3LR1a4tihJ7ha",
  "key35": "44NGJKp39V6yaFoYEx47YgLZ3sC9z2xgFzY2rgiwmuLRT5dhy19vWynSiXbau5wkCbZxECts1NnYxuWK2ytjh9op",
  "key36": "4touBmJViTHdMaGmY4xfQ3Z7FqwjHQJF6SeS2U2Dp4tCLawREU6ymfw1ietx9t5yYg2AgCzz4CrU1gt3UPHXQkus",
  "key37": "x3ixuAKyMpS3vbyaY9Uq9onUswBfUNR3VKek4ypgqJBd3N1AUwPi8mDhy7piLiZvjG6sxYL1Vo4jbN6tzh5femc",
  "key38": "3PRj4AoCStbM8kkvDFtydkTVTPZrVHUV5n3BZgT9x4Sjwn8Npdbx9k6jPBdrdpT8JwkZZUGxWwkSneXPfkueC7iE",
  "key39": "2LYg5L5bCXgLJ2MuHQd5vr7c6AxYXNkx1PZKYySQhNpDPKuK2x6RDz2anADZUupbrmtDo42unJYGFceeyG3uoEqA",
  "key40": "36nWD7MFB7GfHtMKFgPp8hkoQq9YE8pMtiJgNY8mLFoDqbnhLyuoAVqq72X3SonhvCMZCPCVyYks5s5LGqkMS8jY"
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
