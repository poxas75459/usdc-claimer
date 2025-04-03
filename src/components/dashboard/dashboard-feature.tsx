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
    "2CCS8Qe6LmzV2RHq3s42Bvbc6bufg1bKjTWYKMzXTH4zgtfrvNomR95cWDjjribDfT38GPBJmZTshK26qzidKhLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gd5hKKDVQ7pdtj5rqAXNgSArPZvRv8mHqShki4uPXLw8sk6WpuiorRmsvBnsjkvaMtx2f7LvGAeLGM76F3jABVU",
  "key1": "4yfHUKbL3SNesGt2PfTUizxszfuNm1ExBiyv2pSwZHRZbyZ8w3saKvVUxJCUz7ihpqv6nmvbYG8ZYHNBNCQKyVVJ",
  "key2": "oAYcKpzpVCnutsGyeDJ4w7Khexkw8q38mg73kGiL4FR9nnV1nRtTg9qKQpmMUrMa9pbycCKmP8uM3V5LqAuJLLv",
  "key3": "3vg5HfKQk55Pst1XZz1bwNQAZDGKV4Ci1dpUtme4k2pH3Z72PX5LZXmXnjdtcWyT3dKmbVNY3s7xe6wtGey7am64",
  "key4": "bda8BHUAb1nxAQFBHArX8hyM2rd8oXn3MNhXCwJuftyA69v2RXfKGHomowzkUbRATSgESCK1w9fJiY5jaRGicEC",
  "key5": "57njNAo9hcry3akZ19K2d3op9wtLnBLZTFHJjcF8a5BMvSkbpyCWQmVX46suVgfF84Upxaq3fs1UsJQfhUsGEE6g",
  "key6": "2yVEBYGHxy6rLfxNSemV6fY5vUrnmg7fLK7P6obEeJGcWgzLmC3Nfvv86M2dWeqBiBB9oUTqPFTMsEnaQDLZMGYi",
  "key7": "2hW3xN8ZdVroRZgKfGiWJAv8hQMCpDQFaJW2xxC9aJVqn6eUdQFYuiZJSJb7cSYGxZqounPQ9XjewSM1umoot27m",
  "key8": "4YVYicgHKRdtRk3xjADCiuXwvi4q2J2zxwQBpdG85YhnHdG76ndcw6kqUGAGMjZ4c3VuM3toKGTTYG9y3HhioWc4",
  "key9": "65pvtxDtT9LqgD2j5bqc86j6psdAKjazTdqtozuAvGtHhRECzGeJa9R2wGVsXgDsk2PYouLzyPd5wRzu7zb3ptya",
  "key10": "45tWotm85tEVuH7su9r5RSGY4dkPEcD8fYp5Lhrx4KqfLaEpSe3x7F93MUu7udaposJkasHM934nHoLdChucVUDN",
  "key11": "3pKsagHKPhghTR4sTgwycDRBXdVPxaYZPWpymEi5Tus2soJjmbe1YTnpwApBkg5xrk4Srjy5U3pKu2gvSwiYvDDW",
  "key12": "4gTTvqXBig7pYtv6EPtQAxdBZv14qSbZEULx977c3WTqotWutoRQWtF8XGzFs7hDNEYi56gKw8s5AXcnfdvakTbV",
  "key13": "4LyDJZUenNPU1wEC41RU8fgChSqtg9rcswFZtmeeGBFVgaKbprQXsuKke9Z2BcogejqmAJaxFe8iEHTUPeSZ977E",
  "key14": "2ySPxqJhUXfDygtqRXFkH2anYTqH39o2oatJUCYDKUBXrHLuwdsVUhyrm6ze9F17WTLsKgCfJDQR9nsWhEYK9D71",
  "key15": "2kUg3LUSxH61CwTViS55LY5LKuqW3o6ZtN8RY9FX6PzUTs7Yy9YTQc5CxgtbAJBVXVmhcWHvmqcvki3CaivSng8c",
  "key16": "2yWAKJfNPG1z67srauXLNLDfmEewV97Y9RVUR8Aw6QpmzhigCSDPMXAiZG6SMduMHeBt3ktQsPLVFy3tzTLp3tzz",
  "key17": "2mAmejDCZGLpikck24PVu45kV4cyWo7Sc12P3aCkn4qny1rwvWi9Jo3tuoNxcByFoeBCaKavcxxV56n6nJegMiEb",
  "key18": "5HCutnbbWGMBcdCKVy2X1hPF1Ze97nASivvMTVRXFE8g8kePkSkcPx9prY15Pk8Kg28i3y1GPSGYLoZALYqTfVwW",
  "key19": "26T56GCNsYjqJ4kQmxTzXxJNF2521PdG2ihAEVqfPAsDAnFo9E9Zw3KXM9VHmwHM7jcTdX67fRkkB8WsbcyEJHrx",
  "key20": "5YtqUbpoybmfhooPTuEUkHn32tgnMcLTYGjMZavper2CtHeHcHiz5umxxoracep3MB97Pza42MfjGmxtbQNptTiJ",
  "key21": "59kcstySgAoTY1vtBuvqjzMSJ5xfHXEBiRpCZ7XNCYRqmi8BwzQKp53KkdFrSTUbfbQjprZ3RjVf5rB9GvHUfeVv",
  "key22": "4pJbaz5Xqg22faFBfJ8rr6XSkxk8tEPe3ekSu5zAitTF8kuh3JbgErMiiow7XCUL9CgecBMMTpSi24r7UGhPtw9N",
  "key23": "jDEFSFxmsqcbgA7E1kzFRUmvNZwg7bJKuej9NYw1UE1div4Rxmt7j6JQH3k8dE6EysW4rT2MbJMoinK3W9KK5PQ",
  "key24": "1XaaXwWfKkg8mTsUjVcP5rNh57bzhGpMbmrA22u5f8MijA9XxBfGYqVwYBM3ipT2vkWHhBtF97QuT728RhGWPeE",
  "key25": "RkimVVG3KaEhRXTvHjnDJhySEqUDNn2L57vzcLSpZ6SguCJtoZWS4Bb1qS5FdkkmTiEySt6aP5CXTbixHUnkwbV",
  "key26": "2wQZkZARTUAsdDaSRj14qotqmrtayDJkTMeFT9T6oVxgG3sjbfAaoMV54dDvCjc7zqbvwDbK73Ai3XJeZLND1Mrw",
  "key27": "3y5kRKXczNnmbinGupM7WF6YPsx19mQ8J3W2MyBZ3rBRKu7FmCAD43h5sUFzZhHDwdcTJqMZZNZgLZJqPAuPCE43",
  "key28": "4LCCwY8wvRfzRaHjiCNYocsgYzMpvE18vnf9eQMZRjMjPwxn8XkdrEPawrg2Cxx4e8n1NLqgG4SUNDWPuYXX4ree",
  "key29": "3biURyePA8Chu44od4EWvoxrTKHkvzNeMSZEQaGaMLKVXU8RZPNuCw1GaePcMMDVF1LjmQihZGJK3geZdXDQDkjw",
  "key30": "3kEUAWgMRjeLeyaVEWbV1FGMhHXFENqNmpeVBsVJ6eLuA8VMTUkfA6sdSs1X5T9tEh9UjaAvtxHKyMmj4bnCqXkf",
  "key31": "mVcXRjcBappybujbw2ppHNaVToFUgxwmaFUnrp5CfxPyzGhLGcGbZMQMs372ni7B1un8exARy8FVryzi8J3aUb9",
  "key32": "5kuHkVcdJ7hW9FjUVLJEUECJcaP6mHW2rc1ccZH8UDwVM5E3mR5FjKTTgZQTRQJfpKxv4cgA9zyAmB7r2unZUEhC",
  "key33": "57iPvoSRQb5DNez6fhSH28imnB5N5gwk5JfjLRnayjzRaoLwraxJYA4W1zp7VG1tmvdf5yW8HG7XSZCQXKCujVk6",
  "key34": "2die2d6TfZ35xQ4qkmzUKwsgNPvZH3jgomeb8oYgShbRENEL4r48z9d4izzFvE8FM7rGuZJsB89JKAcqGBePda1d",
  "key35": "2JdGhHjkVAKnzMwXvZSq5gVfeNWnhyn7y8zos3kX4kddiCFyKZz5Qav3ZQZcUm8r6E2qU4pfNN62q4kjeSfHxS1v",
  "key36": "fyUJiRDhu6gaiUuWCznebKuCMvaNVzqhT58hBruUEuYBP4xx8oHh4esGN8BTHvNe2FouTgWbTse2mMBASmukiSP",
  "key37": "3qvXv5E4LhHjd117qCkMd2KSn2tkRpq4T2gU4EqWRbHPtJrFLT3p7DLH6cAJWSUQ1d6Q1LXoou9mTtAhyWAJKx3Z",
  "key38": "oTU4fn3jaXYoLpKy3aZJrE5FNtTqrkSUXD8DtskUkmYw3P91YFLfkruSeu1cKW9QpTZGyteYemGEXrZD3gNuVsU",
  "key39": "4u2Xe5TPgiQQNbehJawcVNwu9Bz4AvixmUxTkWW6Hb8y9DrQC9EMBPrneqrg87kfbFhM5oSpj9Gjax5chJ7HCAdG"
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
