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
    "2b7BBEVnpjjmQ2xcZ8ojwFESH9JY7YpYRkHJTYXvq9zE7jAECEyqNR4Tcf55NKR2QrRxDPwYg4NajhrKp93CcQcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L4bd7j2EtMaF18b8kFWNNcghLEE3NzQz1ctd8rcuFMy3Mo2XMbkW4aH2Wj6ynw1mkzn6XzwSHVp8Sd6imjqjGbJ",
  "key1": "2S9qiXx82YDdYSbAPcFC8FB33h3Nmkr8c7wPtM3RigDnFtXaL8pzQC34VoqkPMuQcNcdnn3UY37mW2uvDZre8utJ",
  "key2": "31oASo4umJm4tKPXyHrUfmHoN2JX6WowWNE8fPeQu3EgC5YHNjN9HXR9YLiciGBU5LAq8y1mbCA85rvsNcHjxL6y",
  "key3": "4o3oCWZMH2KmxRhjCAhnVwbcZT29zbeRGTE9nkX5QPRYRdbFaV7DVK5MNW2Lm6mYVNL6DJsgabajacbf8aCzf5hr",
  "key4": "NcRmQdULaE5wzJn3Xe8GUpK8jY55BnFtZv8fTMFnCJZEBGYGu9CrpLvwMzQ96dizdqoXzCa3jC1cWt34hkxeS1z",
  "key5": "4DvggRpmY9qJUJiPq9bAyaXNuQP978rhN3G5eNCcdowf4Q1z1bFtKp1Lc8kMpaj59e1B5zPXgkwAQ7ZyXvBZUyuT",
  "key6": "udQ1ZH5tsu2MTjkBGwTXmWSaSGagCANBQCCcanL2Nkjt52JNyZziHL2TckLC67VDbUQMGHmGFnkaDMmjx53vZst",
  "key7": "CKZjFccWewyxAHAZXA1FcxxFQLnHEoAaQozrc9aE7oAH4h3rbz2YKKnhwiRoMnxK4srXFWnuXHxtRGvV35y8phR",
  "key8": "5ErTVdVWi3zpQc2b1vsqfZtoq9UBPekx48Hrk4oxjEezaqj5LCXpcSFjW7Zwo97158PLTmgPTxZvCBdEBZGtDyzy",
  "key9": "4suLAbAnaMG627Qas1N73y48XNgtgxzwipoQkyLn6LC1oD7ZwborYWkUJVoXgZTuXq2i2xVocpsNrEkqD3i6YbdN",
  "key10": "4Dw9cPC42e2BZ2x3weLwfNaZfTDW4QkD9ujetpL1pVgCydwwjLMAaiDwY7gfaxCukv6681t1qNxeWbyCjaL3VABf",
  "key11": "2yAmSKNk9ECMBpUV8SzoQLWpipr3EpsrUstfZV47BH4tH5fTMwv7aP3gqWLfMPpkiBEQhSW7Shn7BFd9NjpX11w",
  "key12": "3cDCasWAdxd4v2xNnQYTUdHbf9f5xJtmRXaDqaur6eb4LELmT14rBNLRQkmBYaPC4kcTwdyTB6he9rhbzRmyVT8D",
  "key13": "5ooUZS6f269aBooaFG696XmD3kmJcxDER8H1vhwKMVR9bvFbevn7yfc2Go9A9Jfhwcd3CmSyzaGkf4eHG3tunNix",
  "key14": "39c7Xt43Va23PLeTG4q4Ep3fg5tP6mceg3NXv2WTULSFttcS5pX8qr2cFVdoKp931T8pYFbY9r4dUypy7xAXzze",
  "key15": "2qYYdzNq5UWgjC8WRuThu8ZDMtZPGADYRnArcWmFzsJtfuoTUE8cL2az5J82XVjm3wpFmieew1xSJYXMdXRai8qA",
  "key16": "44xFVkH9dtKfF8HXMQSBn1xwzopgT9E5jzexRpx43pJ8qzn9tsyFjSJZgGkitxaq92reAU2fWNpCwD5TArVQAYSt",
  "key17": "3hgwhv43AU8sKWnMxz6yQytvsJsFr4jBKoBQXwVCC1L5WTbGaxMmi6GNsrYnr4TgcMyD2xZZxttm7Pj8o42wT3ZF",
  "key18": "5cLQ4HzZcD9WKCYEMRssmXtMXeTSjZ4Eg2aZsAyrcEmZ4T9xACnepEbxnuE2zYpGHZcZE9T3euEWi1LxRTDRoxMS",
  "key19": "41tYdsQA1xcBccMJWhHt3V8kD6n4vPhgHHGdHM8Ns92AW2ApJ4J5mLmcS5ryNqUfBS4BpRJzq3aGdq4D5gBg1Pe2",
  "key20": "RVipdVXbPwF7Xo4ZvzQQuREheT341f1L2kATnaruHjirTiwosB9WmFZLzNGRKBNGdAV3hSooFSV8MKGZVvqKGay",
  "key21": "54WztFDCG5cEQiRXFpEWm2fhY4HPPq9HvBAsnox9RJQ1UiaiNVzy3FMQQq6HG42UH7kUAPic6ZB8Mk9xUCTcuHt3",
  "key22": "2cd8FagqmUL6EYiscnh9dWmLHQX3ZZbcQScCYojrKZ8VJjLJsQQ4vpUQaFddz35z8BPUtdpDdH2D5zL6yntzjTcS",
  "key23": "5Cr4b91UcYS1juejnzC5SBbNfmWk165jAtKFc19PVttTT2QvtNaB4j88n6FQ361ohyc7PYhfPW3Eh6yY3dfZDVqN",
  "key24": "2958pGh4AYsSDxQkbAQt8jdRJzAp4Mne52Ra6RT1UvMLXqMhJvULLnqTL9DbaXtyCnCoUumc7v7oqs5iR92HMwAA",
  "key25": "5UxxWcP1n3SA4kyiSV6588P8cAj8cTzmtfEdP3hkPqaSYpnsGtZZyEcU6eraVRrdepsjai6fx5sUFxXDBxHPsA4M",
  "key26": "2bL2YDmSvuWRfG7gHibYdYwNYoij2gRRo1qnaE2UQDqpcZiLwBefP87moFpq6dqhyE4NuaFQHPPZ6uJNzrRpAwCi",
  "key27": "5wkeJgsBEHymtWFLEw6ZdXkXHMU7p9FNz5UWkBJDf5T9n3FuAsfez8gHCHRw2wGMK1rdeJApkSzX6tgbh5ncWebb",
  "key28": "Ve7SX9m5vBwgz9yatLqkxySjySQrH9LV7stna1aCAkZiRskUXkjfwwDY9me6KaJZYqWRqcXcEbHhQCjWAkm11Kg",
  "key29": "4otgeuNULWSHHopTPAZcryNnpqYSrPvetZ8WK2GjuDeRGknEpcHNu6ZK1R7mtS5r4dzcW3URCGiTyhrE2AgSZaBs",
  "key30": "3okJm8PkbagmXQY5M65RAN6QZmqk8k8Dams6qXGKD5Ad9cx1APQ9USVkeo62Xf9bezuxSDwzaFoYQjvGHcNGkFJ3",
  "key31": "5zJiGtxnvrAysyqhbTS3ChRXsudQGbHjtuuUSYZhSZttBEy8X3xH5NEPbWKUQUxfqeN6LB22Q4bFsLyqicaLp9eT",
  "key32": "5oiy2qpPTJi6zCW836doSpZUNBenjj8mwD3EjbzJj2WRKmpS7KMz6YkVNDgUFbwKCgMAwEetLLcSakDsanMF5iSG",
  "key33": "4F3uCcLbFWWeNk9FSmQNzFvtgRA5Qpyp5TYvP1BimXZeNwMLjD2Zca2sP4omdho7iUNvfMR1huUiuPBFLRr1v31H",
  "key34": "548ckYVAWuCxrSuQN3c7MLgF53xZaVzyDWY1F1uezhtC1nA129RCykKA2TLVKQYvjsWHH9pasSafh14uchcWpyNs",
  "key35": "2gXFEC63y4mzQSwZvtepGFJK4nk3N9YCfKcZKE6Xo8nVF1N7YonGJ9ouSVGb2LSUpkf7wdVx1tux82mm9eWeLGj9",
  "key36": "4GJcHVgjXfFEuW9BnDfNMBHJbAmVbJ7zK5hmY5LwKNBuQ5DQpVYp3U7DybjR3Mkq5WM4ui7MLb1WkfpoLD7mpA46",
  "key37": "3MPRu7is21K2NRZ9bhCG6fwmXNDzaCuqBTMm6dnafmHhAFpc3jpAe5Hvbfph793MQs1kHAquSFSfUZiCuGVNvTNu",
  "key38": "HLe3pw9XtUo2tzGntjsGz3XqT8apY7Rq7okCAUunVyRgBp3VvbSbpAhU8LruYWmghN4US2HGfTrbKCKw8z4Mjn6",
  "key39": "3guaFLkYExgmuJ7SWnutGtt3feAcSNjfTyxUbhbxaZ9dPwFM3MceB1fhMaEyojf2w2StGAuATReHV5b2nWfKBnPb",
  "key40": "2rFAcMJvSk2MtqkCioXaSkUQxssMNXDLJsbpoE82HBp6s8QsDb7x8Ktv48HZAvn6Nu9VVXXjrgB6MrjJ1uuGPpXV",
  "key41": "QsbPh2CpaJm1XG5axazXVmfeLwmCQyPxSpDyS4sPRY3hPnJMbBCWUfWgBwrddnrFLEKcbxBtywerp4mRvToY4zy",
  "key42": "MUR5hvG17DpeQC8dCbMDVHNJGTrGPVuTVvwWBCZoJr9MrT5caqyXJkU8RtjwabUiQvVpPoA3iPHzs2VQeHvmaZE",
  "key43": "QUWhgzBRuQCaB98216kZck9A1CLqSARYeSve9w7uUYqs7dPcmFpEie155DNkYrRtL5ntQkMzgBTeCCP5f1V4pPc",
  "key44": "46ciKDF7nDEtByRo3PZWgn44Y8YWgcu8tPYgQxxYoZRDeGLhCsMsx7iioefmjjv2cmFvJoLMWh3vVUwdBcxvD9HW",
  "key45": "4NndWCdMxGaBeSNFcxHaPisP1jBFUKWvzvCGWPxdqLy3s1Qu5kmVQwCc7TDuYRr4BvdTS3y3QPKR4U7t2CU8GeQ9",
  "key46": "2UCg2u9prBQo5k73HQggJYSnerw3LgQkB65M2MoNGfB8qESPVpZQrEgMi2bK9JBwzPwfYyxEwTAbAUqBs1aYmTXD",
  "key47": "3agkhX1qdZjYwFLXWCmuJuRbe2NTnzArQaooYJyuaYKFEA96khiqNLF3nVhLWi2cqzrUizfE8KTayWtgdqhwyTMb"
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
