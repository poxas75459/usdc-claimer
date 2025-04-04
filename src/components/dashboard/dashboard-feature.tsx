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
    "63jftKvfi2pa12pkCR2yMDtvBPw1HnyteBAHf6ibUwE7W1oqJ8JqA4sXUfqMFUY593TBb6MdbWEzc5EuCiW9sUdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YodbUGd4S8WdjPNay2akhWeXPrHzHrECiur1GWKTCeMru6qMFJioGiZRBzLjebP9SacAStDdtGRoUfXBgTMFgYW",
  "key1": "KNqvcKqFcPdf61dSswPGw3Fha3Qk11K9R9S6MACzQQ8MjSuxbGuKbfYQca7qzfkdoE2fciLKT2Rg8yrUqXGzycn",
  "key2": "2VtdkUYAWoZUfsfPgeGV7LYo95VkSEnPCpbEjwSDfm7v25fhossu36CxUmH9GXdEfApkJfsZMDvwKpofqJLfZR2B",
  "key3": "e8mCqGsMwnC3AGt4isA7Aup2fKA97Mt2rpjPwLn9i9Qmt53N4NgG2hTMaXXTwkpmanB2Bm3YdtngYqYTmdhZLvo",
  "key4": "2sz87hvYB9r8zMTASDrzaX57mtb65axqEJ94eZ8PtrJcZ5dMvAvBxm8ymFoNXWS95pR2PwyZSUZZxiLYNYcrUJ8w",
  "key5": "67pJ51LhAq9GnJvLU6dWJRjWW99kiP43es5oBF2UMJZuuYWC9yBMkPH7Fj4c1mvu7ypVsMHb4orYxC7PUeSJ744d",
  "key6": "27UgWxMM3EWGUjKpsLtWBDWmayamYttPGoxu2hqDUigAg7h3icQ3b4tfUgQXBXd2Q4tdiKgDmC914s6NcWAZeDPH",
  "key7": "5vgWdZRkFKRMi41oXQda8CPsPEhmF3w15s8vQ7ywfSoycZaKheqWLRQeECja9ZpW564kK5dcdYQs8e5F3s76vHES",
  "key8": "2xZTQ4cTcDCqB2xye2uv66oZ7eEpGZC4PRXWQu6yLAA7tLxfxuDgrMm4U986GVVjZuLrS76XoGmurnLUTwsnBXGU",
  "key9": "4h3myoHNbdzAAghRhsfrdCSaRfK3USq2aLiT4hCCkNUgduTWRrZe3bddziYz4Z8v7ctrWaNmWZmdV9nrNtuZLxhH",
  "key10": "5tyKkjZz5wa57jdShU9SYQEQcS5fHK4yTUkbW5g39ViQ6S5pe1YJ6huF4K6gsTCrM7t6mwnrfw874KL77ofzBbqC",
  "key11": "SThy2oMYv2gNqiDvJJirYhcqTfkMRHXXScnVLXgjm5y3cEycnDYDqaVkHQq9yLbePxGEYza8gy7Qv6U653eRHhy",
  "key12": "31cDhviarUv5zeYhfGa7Z8Nw9cd2go1g7ZYtwmg9EbgDRVTRjyAWEefTauTcSuMSqPJNb4TmPzAXtNdEwpk3D1g",
  "key13": "22NGtei3tUGqFxtNR1zKyR9LeN7EbCT3nrw6BNcHhjiVG5ehqYs1V5sgTBFuKAszsW9GpVr5Aq4xnoUkDR6LSzaE",
  "key14": "pEbU2RFoA3WZWScKNSyBBPvwZJUUQJg8hAbFnVSCq8gpXrakDfFLQ1SfiawbQ7WKUyDTNmy7ke6qnvzbg4i5yKA",
  "key15": "Vi8LoAkkkdVjphq238ZsqSQaRAJxjZy27DxpTNdhBq44UXtsDWoYgYXcsMgp4J8EyY61zFMP851EFVfSD3yzEmc",
  "key16": "28A2rEwAq7ChJfaxtGAW6x12epuBxeDiweeoKsunocvpbC959TVvFJKZka28fp7ru1vSYxC5e4CiPMnzkMZn8CaJ",
  "key17": "3BhW2oDbmkuh1zwqu6nk9krqUQLbTGJvc8JbuzpuyCKo5PYcaNsRE778jeNaXuKtTvD9v5gCVjSDgCk6CtKR2rVR",
  "key18": "2Fz26Qeova1MGqEwoGtih4yzGz3dEBQWeRmhA9TLxMwuLXaEu6mc9BNc8N4w52YpYJXdxULcTwc4EqD8Wh186e9L",
  "key19": "G3vNY627ucc5PJwVn4s2yLbicZ1svp85dpHNQFZ62VFgsuxH5Kr9Dbj7XTCWHD2gfsqvG8pGuqRw3ognERJpLWa",
  "key20": "2p3DKDCspBF88fcQ7BWAsh6X6h2TnNwY3mFYj1BJ2cvmGa4XeVfn5KptaMHNYJEAZzgniYM7gkMtHCQJ35322cnS",
  "key21": "3MLhwfPPmk65ZY9riCVoFhEknzHvLNZqzNgbuyrzfaPsV4x24t1LuTVTGVLYfPuYooNnX184AFfsCsgcSymqsAXb",
  "key22": "5oFSLamP6hsamJ2mbTQ4wPzK6iWp3bFqQFdLSawv2ripq7G79axFr2K2U836gPXy8FLJxtyyPSzMUK8m4RjJiYR2",
  "key23": "3U3Vt6YxVtMQk8SDMmqag3wV1GJtFXY7ffCd6WYXCxqfJNqfMaeZPyRPYhmP6h2t36SVSYoVH5XJm2LPMY7hA9DP",
  "key24": "5xKjhJ8rm9QJrUQHsK5Y6xpWD1VvPiuUtQPDmBUAqjA7WdUzHjBkgpSQi7yES87aK2fr3SMDidZc6aXDYHC6BL7h",
  "key25": "4H99KiU8DonfsfdLEWmCArRy9ADHFVKZFEzspMAqWhwAMYBsYMZCb4MESPVVhPA8kjVZkfCZVVrbtXtd3uwdHSqJ",
  "key26": "4eJrFnS96qzMiY5evSH5YZKTZCPEmYigcdzcW7E3uaMLVVg8CZXhiYCfEQRGnDDg21YqjX4XHnipGTkykPnQ1wzj",
  "key27": "L96urLLwGvH9ugf9aNMnU9wC5mPtciNsgC33B5d1DtvgGefjtMpf8J4Rdf2h4EWygqZBbn6WnXotXz6zcVsSb1s",
  "key28": "x7oaZ45Y5UGD9GLozVpbDPVMuYtqcRdBm4YoqkQKr77wTxU4JroLZWc9zNwzB47SnzTLAw3H9DhyK8RqJmN3Rwt",
  "key29": "uctXGGKdJctipmpRKN2wKE7rU6yC6WH1N5nRKCouh1Reo3YZkYF4cNsaa7TCqZDGkrh6ig6Unq9yNf2i2YzuWfb",
  "key30": "5V6PNuiDyHm8BUH1suweyZdA8NWiGMQGgBRf7AGjKnHo3zp4nbZKQVAHJY2i78jgADUh1x4BnLujJgnkUZGcPhnf",
  "key31": "tScuTZpk8T1DbJU8LKTJgCmNVd2sW9LyFDpxEQodzN2ZAtwocDDCGohA69ZAAM1BiNWi3xDb965Nz4qvQ5sZ3HW",
  "key32": "59SB179zSCz1xay67LJqFsRZV6NaKXeUb1hY1G7cqSYjvd3LupiCj2QELLGre8BaY3Vv3LSBGYyTveBHja8rmG2j",
  "key33": "3qp3PbxTAVjV6M7B9bD8CnxgQrGMQaKcuozZmmfynJMVVDFBC6odVjNzB1AkwT55G5fTYHtG4XxLb4HvdhMUkPxo",
  "key34": "YEpQznChUzLkpvaHGRLiFbZfekpjrAJWfZnabtAwfL79LFNhvwShgmL3jwiUdw7tc9t3uv3xwxPYurZ78kCyQtB",
  "key35": "w9dpNQhWPWKaDC4qNtSu4XniX5CFBV1fywmJTN1CuJEX8Pw6tB5rM44gSSv7ZDVfDBgM6M5hW4xsN7PCmWTS29t",
  "key36": "5oT81KEosLBPKGWGMbyGWATGkJQqxdB4Nzc7XM7Q42Wjx3nMva4vW5QyxqVahNoVhVCGifNAnnVWqpbhyD8kBQna",
  "key37": "4vthRfYwCy5obZsNQz9466yFuJELsWgjMqiyGGGRzJLxNwB9FktQDAytHNSrrxksLGdQSEMBhXUG8uGAhUtQ1CL7",
  "key38": "4ddTkdLZ1zoJ86Fc7QAT2f7ViQLhbSqVLdW1hWUpheyqcMVLQ944UpRq9HiDqkEfG2vQw7KmaKEFqT22jFZHuW8q",
  "key39": "64zzgfH8SJL4d9DDcpiD7V6RWwAEa2gMdrCh3p9xm741syDVHNwwWMZ4z4sSUUhRkdQKJHRpXtioEGkDmWxqEkP4",
  "key40": "3R4rNPC2AXsJBTF6fr7QtRbTKbQM8fzcLBwXcRCP3HgnoAdRjB31DJWJmbjzXjjwiWFYVkKiQ3taSsgo7J3Nr36E",
  "key41": "574Lqc6tRT5Kbydy4XpkD4C7TVNvwfLaKLXopP1sJHp1FsyhpTXLAXWEZE6VVQL8hY7r7bSAmxXL2tjfHu6d8ANZ",
  "key42": "4RHZmNPpMVrfiP6nYRmsF1frDibjss5nGkVS9bw1m4Ln7ZNdfBKkhXDo7fQfDBZoGbTQ68tyiuKZXesvdG9VqVba",
  "key43": "4CepXkMUrPT7vQcaaCGnKUnsrZyJGuyanGq2YBZgStLsya5SyXqKwobtvP83SQTk3GBShukhHZb94dZs2sRcQvdy",
  "key44": "2frWEUPuT8kWwke2dAQdtf2trMfzr35S7jPYsFm5uEswZCmNjsGnrXpWxzRzJYgz9qmBzKiwSo74JvgDTWXH2FnU",
  "key45": "TWeumJgbD7qpMnqeujQzNkEhwzSSEsjjWTLXDvRbsNV24hkEyobYPDDFtzpZRJMMTpoGsKxJzpjEhKnoA7Y7xUL",
  "key46": "3M6yFXaV93wyKYLWa5qXZbx3byunNxdN6bVq9zGJihyLewkbDnycbk73amVWwS9QJQZNut6GG75YUwaB7phpYDwC",
  "key47": "4BcGNjf8XwSmFzrY1wRncSZYuVa69FcyefxCA1aQEsm4qfMCT4FKZaYT5KryAWKuuCLzB9wAD6ZWq4gFyygwWwa3",
  "key48": "54zZMoBoR6m2vHg8MUsKKdVuBAUeuoysTY1WDYt69Joha7USKNgvGnUYWoqG1joB8qmMfe382TgQEb9W1DD5X2W7",
  "key49": "2qjMer17kacbbgPPAMaSrV3H1hrxFzYhZvdvqADTqMvmJJGxsvBU8Y1k5SeGpruR7NrMxvjvqwNgb5XyanS55oRU"
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
