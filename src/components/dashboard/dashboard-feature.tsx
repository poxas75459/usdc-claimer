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
    "5LKZMbdxkx9GAZUnPyWnY3vMyxxQBcgXTLbCTaWVzwhY2dgJ9ryJ2JTiWfhJYcPgNBtZKujbTuET1bw4vaHm97u5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SWTENkaAiatRBY5WyZiuFKR1Jjj17jRoB4LULUdtnqFkxx3zavvWg7nMBVcrGU2Sks3NTUmq7ghroG8WUsmn1K5",
  "key1": "4FTV2caZND5r3AuBrNGGpBftArx2UniRVKM8j75kPynzGkCmukeXeFXBmkonfABF3xGgUnwPEVcbe2u8iZkKcx5T",
  "key2": "vrqvCehfd2RkJvx3S47Y3zz3yX2aV6cGqgAPjNiNFZnkgo6KJ6Qd4hzfqx1LbmD2JKGeaV2rhAaSyxuxVDqJdYq",
  "key3": "4LVinPPyoUXS3nMmbg2iwyvwc2xCtCzNLFcvT9yvv4vAUaQeoZT7Z9RDc6jBe1CjY1dvqZ7w2MvAx1eF3vZTTHDm",
  "key4": "5botzaG2s8kahXhbjKq93vMdL3AGBKvyFQs1JZCZZjTMWkfTmkYASkxAbsb84cFEXpxGhPfJiwTyeUVWRpTsr1w5",
  "key5": "4Te9ZVbyXccqCr6jkohkfDe9Vy8SJhR4Gao7i9Z6bUbzz5Py7AapiKWo1an84uYBjHoNk15AzM4GCVY64dUey81n",
  "key6": "23tHhzzVbiA8Jjdcs4Jpho4ubY9AVm8boZ3SZbGtxrFdv9vzZi2jFrXTzg1aMEu6G55ectx5cmJiL3s47VEyJNRV",
  "key7": "5wwb54dhaLcDHprojkG6muVZ3dqYxfujezi8FpKQQCns4tA7kcU4pUYnVToUTbmSRACojUy1GdCZivxMQFk8fUG6",
  "key8": "5rzbLdeUpMpKfsUemdDWrFoEmZpGvZHEcHy1psDFto5agvH22zbNCHt1pVm5niTqTuac2c5h2uFT2wJoubYapdiR",
  "key9": "2xQJwDPxsVgXRuBsXBmWmU9hozVBoLhd7ufXvvHCHLTkb1Ndd5WV3iujzykFdLgu2YMVtVD5eQbRq8Hjj4hPDst9",
  "key10": "3wjXTWLwjG4DywfMpMTZG5wAeYgvGo1tCBL1foXb7W2wycn3RGqJdy2QYRCbn24ew2KkHdHy1sZQopEroq6WhjMb",
  "key11": "5q6Uac7L4pLAF6NFjUAf18XNQ7e44uYcxg1hYESDjLx3cv5oCGb5RqKCYjEQgrGYShUSFs67RoFU3ACU8NfWDPSE",
  "key12": "4ChmAADv2Zn4oy9QxJYk9aR88nnvyW6PwHh8UjeR8SuCdr8WqWPZ9U1Y7hcLYzSrYWbW4FESJJpCSTbDNYe43pQW",
  "key13": "4T2RcQFBYoSeKPqyeBtvgdosugUDMrwzoJBTj5R9nb94Ys715DNedd8SrKHvYZBmHkaKU971uowpQ3tUTn1Rigkp",
  "key14": "2wYnnX1MJRLn7BmFuSpdXqzQq9zT51HPCTdGQ3r4FL8hRESQXW3EYugY9cJdTZe3pQk5uuTEdaigJfyDZt764ZJs",
  "key15": "2dUmCAxyJuqAMczi12KAE1r2rYo1ohnryJoG8jYeoFD6xGqaV9zhpm8J1HVtoiawH45pDaiENNPDFadfSWeppTQK",
  "key16": "5zgZUhQQemt5TRXzK47sb2kuxtRBVxMJQRrYfKxdrmS1K9pxkAtKXpT5TYgQtdVXcuumm5U5nRCdMnMK8175TvFX",
  "key17": "2C1b9cymLiL4bhx5xnbzavrqYmzn9fqJT99cYQcwsRPnSymJTpwMs9ZKr94cSisxt12AnbBUCnpuueNnVjWtK4qx",
  "key18": "e4qgYNqifW1zCjLy4JrrQmJkcDGs43KqLfS3LFEubQZQnQsBM9C1aSktKpTJBvCFhSYe7gvVFm4A1bvLS1CBa5f",
  "key19": "4UxxCe6wRAQELoZhLNUjrgas4ijXEdNXku73H3ykVLn4igfmnaivpApuiTkTqsaLYqHtLns76GC9uqAWSFXZeAoZ",
  "key20": "HX37MQgh9Bnmt6BQTNG6aAV1rGScc8RoMV1PiZed9DaXFbYPT32wRBv1kQkWtoBmYA1CLKSB5NoKTb5MoopiYS8",
  "key21": "hLto44czkZgvfTQSNZv1bNdCWX3r4ZGN9kSxmUJXfdhnJNukYNiYQcksUTv1pX5nzd3B8tfShpHUfZjuHhcmtun",
  "key22": "22jpi8NZ3H9M9D6mTfq9GtBnHbQVz9phv3gQ1wf3TJWarYBpwEKiNpwPYqMHnTggJy29ss416riKwBzdtHWyrsFP",
  "key23": "5SQJznV8j3mMdVh6xYTcz3GHwPjm3Lwzvx3Kqaq1Y1fRfGFACAuNdwbEFvU3V4RQPbeYhznqQoAsFcDbDw9AGc57",
  "key24": "b6C8ZtZhwNj94SEQT8GWU7q45Jyz9RuaxXnyUxQtJNp6vQ88NNVssDPgFbjGVBgvcgybrXSY44XGCQGQQTMidNy",
  "key25": "f63DKUtJ2pKtpakp2KbC4tN836HtJm2jzSQHTzjo4zzYargLE6UmnxigtsqVWgjMWeMbZUDykGYKySV6Lh5wxKC",
  "key26": "3nXpFjBai7UeZjQRXW5B4gYehCey759kramCM4AAMjZebThebCCYAYAKQ2E9zdJqLTrB5hY7cKSN165LjwQ1EbVa",
  "key27": "4J7RmaaUkY91SEqcPGJRMi8Y26Yjr7aN1u1tdJecgcczpuahSzAcsucwVzS49yzKXsYWWRi96ZMa2bjSm6gb6VJf",
  "key28": "5c4yx4SRH9LvHDL3HN3BpvhvURbCEJ6JuzjKmeVk3DrbaBRwTQLh4vUgbHPFdvxAvofxT7TZkUcjybvLfeYkMrb6",
  "key29": "37Jd2r85hngrp7zbL5nywNy9SERtnBSVu5sCEEyvjtdzaF4mYWbNhzdcP8FrR2nRcV5UgqBF2E1tzrcV4EXk4mgK",
  "key30": "ecGW7wF55vDZYwvYXdrPhroozYjz1RpMVECCQsYgAGEWAS8hvSGZ3YQrVpgDcb1GPeK9o1Apt8ZAefKb74s3tSM",
  "key31": "3Tfq5h4Q8q1SgoHTembemhLLGkaswrbVTWNjPVNwN5UJznpkp5mkzAAUshNy2EANViZC6uan7uMtjawzWLpU4v16",
  "key32": "uwzGUsivFtjNk9XDkVP6F5CdcCpRGXD86EP4RkUf2xfZgcdA9pU9jYUJNCCPPPK2K7xiGL91CZpwTUM6vDnZVpR",
  "key33": "4776u4q1SPvRyQ6RqcnGtJgmGKKoF9u4VeMKnseV5A156cZEYUqE4VPdQmpBy7E954eFiaGsE9i7VgJodNzhT6qh",
  "key34": "5gdKyNdn4q3svjVFSJxwjJjf4o2jhQhGb7db7a2Zn7EGjZzzb9mWw8akUxj3eU9QakJNBQg2Xn1tHcxusX9XVeJs",
  "key35": "i9m4aKXHuZ5RuYVRfQnztVGeC1U1XKjEhafVK4sZE6nx6LGgA1zBT9v3ntXMVswGjN3ecpZc2hWV1wDNUr86Juz",
  "key36": "3sDt4ga5Sx6qP9dXZt1dpu3fQSYgqyvwy8h54htf5zmngg7Kc6uj8v5XBpYGxGn7fX78uawEV3YyXKzP7nX2xRht",
  "key37": "53DiWSSZgnTzkrhuFezA7cye1d2v1UpaZpPbV9JtuGs6fey6iNTWzZb4CLoz3DM5QMHu85TcZbj8ByN9Ryy7geaz",
  "key38": "3wMTgYyGEkPcnT3HgkzN6ZYbAWnFRT6kWogmUcxRYArvTsd4aM8gcqUpTNLAuamsRrmVUpRt1CCsqx5ZdKkRWa4W",
  "key39": "4BtuBiQ18srCUx42AoMQ8YJG6xjS9Tb18WGrF37GqnCHSjuDvXQT4UZt2pmgHHmbZ9RUCXcb7gmvv3C9Kvnqiu1F",
  "key40": "3TzyWoxBeC7sEEG5biDFacMu1KgZwx1AWUwmAUL69P9zPddyN4CGW6K2PXkqBik9ykQH8Qci6uCgnJPtaJiZ2KTZ"
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
