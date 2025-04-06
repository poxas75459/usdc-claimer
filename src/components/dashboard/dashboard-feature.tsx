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
    "4t8VJs8EEieKUZjxJLGwgg9bso7J7a82GyK9Y37pSJ88payZeAQnTundwfYe5J1NYACnNd8GmGrcjYLEXiqR985i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22VfD1asynDMDSJzrRPBWz8tQiP1sf71j98xk7pvgxtrtDbLYrzGQD6NnJtfn7Wcnxt6ZUz8kiP18ttWnJi8T4nW",
  "key1": "4oNtfSSRCrFM9oLwb73k72KFKVu55cY8bxevtMBNnrymywzVjv7fMhsr4s8tWjLSpMwbTNwNzDd5fF4jwNPkzeYt",
  "key2": "5GHNxuA7boXbxF262rXsdJNejqnKVQfyqHt7WphzoBogvsiT5AJXg2tSgwphzDb445pn2uZpf8WvjXhFWsCsAnJp",
  "key3": "2msKs66P2gbQuJ48w8BYzJ6UMUXAPx7Gg1qCEoGiYAZ7NbpJPuvHv7q9qEE8VBWGDc2yLPQE3vCoFznXUohr9mQE",
  "key4": "EKqKU4kQzMv2GNv3TcU9BVZmBmVLnkaG4ymgFjquRHBEHPoVVoAMGqeXTEczWi5RQ3TcC8aKs7TKx39nuxqmvWv",
  "key5": "52xi84AJfYfABWpiXXfVVNyB3gFeR1TcrUFnKLewYxjJggaH3tdA5tVHwuJemgpKsHcDootVUaaZyELVuqtqVBY4",
  "key6": "3wk2BgmzSNb1JDknZdXfmhzrwLhF24Dp41y37jquVESh1mFRVY65hVJKAKmPyap7SuXeTj3o58h9XJCD1Vu9HQ4x",
  "key7": "8cGWQBaoew5zXq6Fd21TmPt71yiUvRhTZqLrVEwb9UqGqdmRWfT9gQZXZnrku7KTazLz9KNSo8TmhJXhSkDbadd",
  "key8": "55p7v18Hd4noDzPVweqXtm8YPGj1hJhUBWbBP48mUo1z8EYHyoNtH9NwDmgWRvas3bcwFCE4QWSfiXHgijcT5jkN",
  "key9": "3tjx7u1z14banLEMSgnV7phWn8LDgaptzQUi5cJkW6oxLwXv7qnoXKkodZE4bQEL4HEdfpcZZcQs2iha9VMKoeva",
  "key10": "4ZWcK4srBJfxWQwbhKtf1RDC5gR3gC5p4dUc3sP5RDNKeacfbSHzNzWwUGMgvX4A4HM3wRzCVawU837sDJpefD2m",
  "key11": "4AGJ1ZfR8yvGXNC7c9ZncXtcgaS7FausxVbQdkntcsb4ugNdD4sXyuPenc2FSiDMtG92pqzxr38TDDMy5sxBV2h2",
  "key12": "4rjYJF3asBEABdTmnVwga3JnhcckWJhL11DTk2CQZ8QSwUghgR2WdH71nTfqPXoTQdcsALC4v94DDCQvzKxpMg7b",
  "key13": "2k7XQqwbsEEHmv4RDPbNthUkVAXtFvVwjC8mKWBCjE9sjkNd1EudHrzoGPZbya1EegegdWJ2Di5Qp4ML8Rt55Rqa",
  "key14": "2kKRJ4f1BhHEHX3jUDYuV4KkCPD8p4t9sVjhypddoKUYvKb5RdzHAfFWCeN9mDCvgWgj515P5o1mum9TyJhqaer3",
  "key15": "5uRhz29FpcHcMjbzmjs6M9T17jrXbT3QesGcKGKPXCLGhxMxspu8NnqynTtEvtzaVtaadQeYShN5AcrsUE8R5HgH",
  "key16": "5SLbE2o9qpsB8czEDeqiecN4NNDsA8HwkjVxSHmY3ah1i4TmDLQefSzhTcZrx6Unj5CLCx2Mz1LrkJphyRXxokss",
  "key17": "5UgajE9qPzQdRc3sv5GfMpLpG4GeR1g1vMejitj69z7WdrTKTsDaapv3jyVMUQdTXYxW6hxfUyoxgmHxUT6agoK7",
  "key18": "3CcncYMjSh6147ApfkVc32T28y1kKnDc98FetJcASHSyVd6GPocYLAMD1zEodbMsDQRHsasXHBSmibufbNsVGjsx",
  "key19": "467AfHUvoy7xGA4ozZ9h1s6pe8vy3jAKWTaEhHMgRKDfnFMbrADHR9GsEoyYYWch1243McjJMNn39o1h5Vg5AAsc",
  "key20": "5QJE7DxXeRmhsMpfvkAzEaZSMRFPfzqUDrM4wV4JMtrZhrEv4katj665myKDMXdNMug2qky1Tp6tyHJVBYg2wn3D",
  "key21": "5ai15ifwqvZrbHfd3ZxtaqexBUySSvynMyWDE3cBZpfVYXxxzVvAGmmZGGkCWvj4XkoefJYox5PZ265oL8z4o7DB",
  "key22": "38GswpBBeWq1HqpRFPeorkkKitdrGN49fogLH232dHyfuAy92rH4d6KhGU3oV2fYTuqbcvqUNcRWAGXFadFjLPuh",
  "key23": "27K5q9dB1k87VHwE9w6jrwLR5cEYUyxzeSLkdZBXxqfcdaYDnmrhYs6PaDfZZ5LWXWSHvoU4jgeS7a5gUHMSgdEF",
  "key24": "4xhNZ8WbdnVyuGfcBvY9fag2bDV2dgH6GES9hQWgwVyKDpbMr9yxoNBAPpnbBb7nzGVWNowfN76rtBCsTGxaZ4e1",
  "key25": "4DVyjvLb1QTWePSdwp4uoTQDbC4gRWhgv1Pf5gVANigXbbRxaaaAxojZHDwtMoRn2ZPcj1HfhGgwqDK873fdocFg",
  "key26": "4UgZe5CHoFomZHeCw9nMyLsA4iVzticqkDG33KwF6efFTC1U1vcQX5sNJKny9M31okFApibj1TTGuRnp9uravzmG",
  "key27": "5oiZHwzVeGGqvJ31T5rknJK4BcjPe9wTbr5RzhBKKYcVapjM32mVioEd2WyYvmYivJ2WxdezdPikvjCzyq1xzMp5",
  "key28": "PDF97sCAgkRTL73zpYjryUU1bwjgtWqbVHrXyznXqBRMoxeApMuNkE3Q8bXmfoxNDsMGt1gLbh2j8nNjCdx53YA",
  "key29": "41hjkhyPcQN6mmCYn229UFHDqvdqBFBULVE3WreToBCnspPvvYeLaXvFYSwpRKjQRCXZ7BK6AebMoHuWiaUwdpro",
  "key30": "5sMAbhdfa11AGfAYeCenR7tbPLZH3LqzvJiNNYobVfLacsGT5mFttWqc6jZJpLRshTdCsH98D65c52tuMNEwHeKR",
  "key31": "Ne3ZgbEwaWpa8hViExTe4zPaSzU9Xkptni5sXt7bi1HkfTvEa8UDsfTapDaTk9KQ8HkQmXUxH6pukLxJt3xw85M",
  "key32": "42JE3jmX1NQEhYR3UaVQwcsVBxzwq3px2donikGBBtErwhBMzUPXTkpeahtAgQ6NjjgMpUVkgGQ7T88NL7LnpzYC",
  "key33": "2L8v6iitqhzTdvj7tXtwKk3A1ThKSow5HcbR4NjwgD3fzp8ccpwbQtt6FFDCQnuPi5yccofiDGP1utmba15HWy29",
  "key34": "GaujgUHQRJNERoJUbCiVW1Jkne77fxW5Zoz5NFYe9SeF8aT6yZ3bZ9ACzmy97MXVcyZsaKEH4nVYbTd3AhdC4gg",
  "key35": "2pgy5VT4toLYt56Mb7g4n4ugbLeqB3HU26fzkQ1uJhZNEPjbUgv4CakJE6hPZzVCGsvc1SQFm5sAHXiyoWbSc42",
  "key36": "5NgvqBCL6YQxg8vwYHAspk9zPrp252M21j36cT2UfkhPSSZ3gC2aGJW8i4w7p2LzWPAuwHuEutjQNEPwZB4yjt6M",
  "key37": "4o9oy8P67JgVirJXFNzJUGtSmnDVDpnMAB8Gs3GvPVSXeZpvXQTWAga8seqRE1MXTS2b9E6KXMjSmpmjVCyd9eTV",
  "key38": "2ctFgpDfuK8DSz9PyuMQmhT4f6rR7jmRjuzzsn7F2qELfDotzcBSPDjExzwmUsD79arDk5LN4496FhSwYGqQAHKK",
  "key39": "5qmHvMNUhjDTVi6kDmiuajkxbDXQaRDvfNJp3q2z1tzWfQeDRWJqShr8jE9LJNbuYT8XsU4QFFsr2FfRvSzUspW6",
  "key40": "46fur5fWVt8g5hhnAWgNvqSfXXoaQqrEjAGYoXYfw3WMSbMAXQzgEjf573EY3ueDMt3PgnKuAcYS9EVjFPc8kwPE"
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
