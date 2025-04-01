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
    "bqfrPU1nFjmr2qmSvM7Zu8cvWwuo1s4fhEd84BDbUwHRML4uE79UYxTiq8iX6BeVFBSz2bCjjMp9zD4dVNkbA9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rBpB69xVB4QPoPiwEUEunsgFyZ5xbDb7WEsqeV9zVKWdZgNuoqny3oUCf1L9NSxfHD1HK35rTLnyLo9ggsEiDMB",
  "key1": "26VpMK4qbzY31CctdgtsS6XWvn1M4vYwtiMPjm4AhHqBbv8btxkHF4SApYcZS8kcb8xXkazAAwVK4kRCdSkFUvfk",
  "key2": "3jaLQPdiEac9LfiSreFzvooyhSoho97JDGS9US1khby9YFRC5KvRaAoaZELkwfRrjKNSyYQUoriod6udM3UafbnV",
  "key3": "5HrDZ4B9WKvdE6VqQSfWUm8yXK6RaXvaqNLSue2dUW5UCCSeNZH1MztT1SsUCL7c3A8tNDAVno1ePcnemDcdi8vA",
  "key4": "ve2D2TLt2uxUNsiaDmZx6bTbdjBx8oW1qKxSMiFkPysYwpnTQBDnfboAG6NAFn6bsNPHmsr3uCToEPpt6AEZu6s",
  "key5": "621x3pFthZZLvdBKo98Ze14Y41DK2B9YLUPtWvuU9WmpY7sDG9d82aqiPM5Pm7jxRpHEfUwvemk3TfEcGcCNuvvR",
  "key6": "2z4KNv3sUUs75Yu2EHJezDfmq1RQDJY4f9yhsyUV59opCQDZmQfZmsq1tRhSkgWTJM4xgps5nRYd8pe4RMh4LuC4",
  "key7": "4f9iXwbVQZn6MVC1nrU1AkKGwkyxYJB14fvUzw2NC2NotsF9WTsULwzjJ9VsNpGM1dEoLTYsp54KF1nXwN6cq4iC",
  "key8": "2LUn8TxsQmDrUjv6U3RqtsCfoLJWC6TnvSgCy3Bo6hfqqJwGvsD8L76V5RQJtP8dX9Sx5ZXVAofYxhyuWXnURB6C",
  "key9": "4b6kwvGk81AyJECkq3TCAXsT9yC5TFzg4ocEcA1rkUXQtSQXa3uSa9KtaMjH3cGdUFrDs21MbcNbg4o4k9Ref6BS",
  "key10": "2Po491eGgLsnDkXj8nJ4X5PB945uJNKnkRN5reWpnq7smbFbtbvU6xJDuj9cMrvNPDSHqPiLsxeSs7uJEKM834Fu",
  "key11": "7N52qPka4dbeyeD1q5vbPp29a959sK2EyD3LDr9WeJCfLzBXATXDCpH1go6VRFVSjnFYdHo67Trvprvp83LHGcv",
  "key12": "5FT17wsE5Lc7i7u9jJgkVUTYYJrVPTfk3mCZtwsVKiNmnfstHaZiWPkb33266hRrUZEY4q1b7yYJ3BVGSjkV8qZJ",
  "key13": "rguDvRJHS152KRWmGBXBm7FQKmnnLV2xQQc4zgAtEMk6dvBcS9UJqgFKvzRQyyV2YLzFfWKZJK4jodTEcLTSX9L",
  "key14": "vTdZTHSofGov8LGBCMKKt5ULewLB34Zi7q4HrLF6dmyotFFPnKypHBN2xCJtPobYdTwJbh3c5qSLFFhWx9UGT2E",
  "key15": "53qMx3EfutDU7qZ9n6KLu1cV4Xk7okrViEJBPhnzGyhni5rgYp65DRREHJsYFuiboB3za92E4PobTumLwVEH8JPb",
  "key16": "omJ5Mpx2bd3EXTE1DN5aU4KtDcxobxoJ8v19wmtAVcUdouFnMnobk23fJp9rGpvrb6LdPifG3HaQ8zA2DEbAunh",
  "key17": "49nDBDH8zTp18Lde5tVLTgbxQnbrMjmaE8cSrSxakRRgju4eXHoFH5B7DEqXQEJpKbTuuibVASRXYkdimrmtLUuF",
  "key18": "cgyjBRtbR8raEFrzVW9jZ1hJDCR8gkuZtau4Z1rgPNN18k4JKX7tAcqHh3ACRpP5WfPqjHsnAZQXARVjjdjtFbD",
  "key19": "5QNumyagosXeN8bHuZpyfdtx9r8zQjjaNfWnRmZZqp4QLHHxJ54yud8srMXTg8egbqYRRCw8LL9JhWEjtS5pxXL8",
  "key20": "2KB4FfXUMPo5vWYssBR12oYrVSj8m5cyXzavJxn9LBJLpQ8xzKnornYWzZGx2fmpHC7r1zHKEVoNLkBbajL9W9ia",
  "key21": "4Epi3VNySBXVr8s18YJSpDkjzjX27scd8eaRN9Bsj82YESNTivJZ2LuYuw468veXKGrfEpd4kNhQrfFdLASNt9ga",
  "key22": "25ZvH6KhjAWBMoiz6xpv73WRD8JEnnic7DEh49UW2SGQw3rE3VuNFJ6MfsLPnsjThJv5PPpahiQAiLX2otNQfqi4",
  "key23": "59fTagEyaRnvcfB9XLbkn5cTmhnxKYZNr1ucwq2wgYYqDEDJuNuhK1yGMHNx2WDRSeizp44WJLzEKAhQB3XVZggZ",
  "key24": "2RqWyeaHqhjWHGHqNv9fvYSVkFRPvXtNvJ6fW6FiJRjpHj4sjtRLY5CqjT6LSa17FneySnBkFYzXjNTxgMpzJTrA",
  "key25": "3gcdif6G52H3GgWQwSZ4c3weA7HSxdyzMebApc9FQs6R4AuDqwMxNubvMMsTdVY9Hdf6ZMQ68kG9bZhxt3qTrFoe",
  "key26": "43a38q7bREqLknAY7DpYb6Z81UKZRuXcpnXxX74t1n71Bou6jLFnqoSup6HRRGCGzSBNrpZ3s8YTDWM9NV29rPcD",
  "key27": "5gdPdtq79mTWMH4MdjTGZMmTzpU42a7GUEFoDqZEyUQz6QFmQX7EcPxSfnDeU7RqW4n8Xqp1enMuWTVDoFGRo1NV",
  "key28": "5zExDwaonRG9kE17uiWxjSncnBsEFMeNP9qZoMxRaGpLvLLMc9i4TFfnE9MixgmUpQrUUF5QTRbu6itiWYe7PB4c",
  "key29": "2fxGHtkofs2sYaUw7fJuuJNwcGYdP3RxeT83hGZre8rpF99WReY1AEFHsqaZeZLFoWv6FNp1Ki2EY2X9fkMWEHuj",
  "key30": "56gWMdNxin9y59eyAXYeAvMhagvmhdnj6FoWxL2r9MJJJiajKoBAeyvyobc345AVUJuf7mC2ow5dHssLEKJJgcaf",
  "key31": "2yiAVcB4CY6G3wikrJxH2z1wdR4aoE2SVAa71swbsAWpbyAToBFp6RZk5S1Sbh226mfiH2uuFuxVZ1ph9ZuU94tb",
  "key32": "4DWpCRJRWctasrzpENdBrpESyVi4AQrM7xLAAxYMpRu7ZGQPeRdSmfnxKzf8A6h1wWyQU7wkpMkCie1sNDH5D7qZ",
  "key33": "56nRJzEG5CMtbzR1NhxmwL7R1zizUGnXVoJpJhEUrghnoDX8qYbzGhuz3eTw1TFok2KqWhjUi9jYDxRoHDVCn7w4",
  "key34": "XT48Vsw28phNCxfdSnofYZP219Xxn7dZEygKb63CbPvmz3wG18tQ3BGT7DUAEDyWJdDigpFdW2vKPKh3so9UoPz",
  "key35": "LMRQMck62TVtwUG2JheKc3AuZPiqjvJ9xrtHN4T5HnNQgpV558m3ujm6Kz4Ew7YTAj34aUdieVwk9Bwy9ryq41P",
  "key36": "3wgEV2TfLyKiF5VLKgCECapPGQn55R5rqVsEfhQhNyo8bLsFciPipzmYgRVjQWZqiDfauP5Qppo8yZbGhExRVTYf",
  "key37": "53CNYM2LfAnch6PoXVBVB19AD2rKfSLceyM4LEMBn4J9pwd9fbRvFou5bibf1BzTC9CH6kChvxf4rVXmG9ruuTJj",
  "key38": "3Ufta7jdajuCWd7VH9cSEdMbSjn8mZEvpmj4ZDcWx8gYhZc7NvMboJBcwQnD9NeqYToxziTktixgYemHLujJ4aCy",
  "key39": "4ShN8iwbi8BSURYG1pr8XcHonGYH3bbb8AuxmnymTzrXDGsjz4wRvWcuRRENuaDzyjgs1yYopPa378jqgyz5DYPP",
  "key40": "4a4MmxMkXXAgWDMiP1w6FTPN3FaEDw3c5QnYgYjuKv6AbZw2hAz42DNZ9jYWVAWzQvLjHaDj9beL8qEPhqJ9Qrtr",
  "key41": "48QVMGAsAXNtSzyqHP34JpqfhfiMtBFmFBJNAe9rT17DZFmeaF7iYq9WLUAzq4tE9EjQ7G4oEVXvb6tzMyDbNdDS",
  "key42": "5kbJ1UkAL9zXncHUv8PMHZLqZYfRtJ95MKbFgPSt6GoXZAvRPAkvnzvTMh5MJ9TX2kGbgTRJLh3tcLMVprvHgDUo",
  "key43": "2EuCjcGNJgJzMkABEHur9Zh8p7phFBdy3B9BL9jV5VQZC5AyBovxTUVFUseTnBkkxGiF7CBtdWK5U7YP5wyU4cqP",
  "key44": "3q3APop5Zywznu9GZ5kPcouT1SRasx6Du2X7rpEStXT8i9tTmswnwWLC6Bb9DX5WFaYF9MHk3WJS2iwkcgVsXWYr",
  "key45": "2gDZ9QfDdTzi76fwLBWWXGv8HmaZsMbSXRvkdFg2onDhHnK6rbPUvsGYj74ztqSPpdhGq2FXr87ZSnWZ32H9TbVj"
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
