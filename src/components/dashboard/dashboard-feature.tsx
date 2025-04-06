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
    "3jyXYf2MV2fJbwVedxby5QbbgcS759w2pQoVTepVkTrCwianHzZ8fgMpz2nr28Fsto92XkDGkCai4CsKtCtM3zMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LQsXwPAWZ3RqFTR12Mbom2ujVdCGcA2UW1b4Um24Dgi5MKgD5weVgDJn5JGRQGWUq37L58bpcs1toRXKogvAbQ5",
  "key1": "41dRbZB29jvuV8Z8FqNm9pb4FbTuvhuq525rdFoq96puBsjnuW3tD8dL7fgPobTUEoPehsT3TN25gbV2WALzNhpe",
  "key2": "3QP5bP5HXBYwknzGdEiAZUS4omhAjWJDz2f4jP4uzfiYtxuqbUu7BhuknAfXMTuFFfCUfwvK2vk5Kh3pYgUQWzha",
  "key3": "4hubDwTw3hpWTgSSZ7WGSFgUpRWaw8aGKK6G1bWXg7ozZioPkp5t8kRcWoXTU26xkiWnrDK5UQgyLbbCcQb8qDYH",
  "key4": "5BwEJTWzvYxSPBcfYyeUnhMYYsdqL4ZTmmuwx1ZByRdEC72KD4sufFK26TEkfNKJHC9LfSFD41RqBVkBNEnwfshP",
  "key5": "5bqycwHepe7TsfQh3vMcat5A4mAjK6wdutqHyG1npHihPgxxP6SeEwhhtipb6JwDsv7EtkgUTmB6m1KftxHDpa5A",
  "key6": "HQrGeMy1rpbLQAjP18EWVv7ygv3oaZ2QAeaFoQDnALsKNoEDtZzGG8pKRC7hRDAkLa7oEmGoqpS2umyfAHR4taB",
  "key7": "49vns2JbVt1zxHCxzMLXtJGpauyKRMCHBpRKsTkw2nih5TgGHTL5Ru7SCaoCLDpBxufFYusShrMUqjk2iSTSUycT",
  "key8": "3JfHbzvZvz4HdRJmneBrwB6MhJJmCMFeT1xqBoAm84tZ7rjyp62CZpWpVpNic13Z5Rzizpqa9ywJnLkTAeHAeijR",
  "key9": "4NmV5kfHDkAp7Z9KHhMcYpwPEW1R4BvxEef4ENaDAsBDF4DzoShijTJp77Ky1pndAcV4F1rWT3cmVhUfKsQeDPpN",
  "key10": "2nSyTDmbc6ErQrb2mU1Z6aFYUtuSXRmQmumSfqwhR2MuW5QJDgUDvAMhRahFRiwGe984MtqhGkdV2erstuoFZz5F",
  "key11": "3UJSKyZTXExtpT1sojuYqf8t1ouAdRkuCsgcxaTVMe2zcGn4taR9SurfjBke5jLkdDJNjnd1X4ty3nQioJQ13ErF",
  "key12": "3h3GKE6ww2eUG6JLFjtkQJnGeKXFbAWBj2DaFooDmmtaQejhP11Cd1zaTVkEni63gAXbnWTpG2vU7pdnMPoLK1xE",
  "key13": "5nNFqyfujeCBJc7doJtMXPVbNqJr2SwwXeo7xedoA8sMH54HkQqDBkbceifWphbn987J8JhDbGb4CzCh53Y3jpA5",
  "key14": "3p3pECfjfNVLe9TggyL1QuV9qPZWakiG1uFKJcowurJmNamfWfYf1do6XG5g1PKKEajh4yaJxmXJWhAx2KYmE6ns",
  "key15": "3gFEYnnEkRpL21ztEPMvgnzNWmeeQkezznJykB72ToRXw17c8279uPfeieFY6oRRdQB1S5YxKedfk3BPJgLeu2tL",
  "key16": "3C27k8k3hqmDLdjzyYhEHd7ZT5F9GvHE6ihS3L2mPbpZzo1T8ewP5S55dhMMQ7K3sRSWaYR4Q53cz5vuZPisY2dm",
  "key17": "3bhzEroiiWTcqfk7gBPq53PyEz4TwcqqNvvSbumDR8kAqkV5JspqiFCEmAAeDADRq7iSTMDSmCXpWyFDWc3v9oDg",
  "key18": "55xLZ7TjY6FbuskL5o6NmFFhkXPWVeSWBYeuYY4DfF69HcXJV2tq1UcbnGeFbJQBfPKYZgh32EhgkuLPg1JEV9xs",
  "key19": "4t8h5ZUVWkJJGt7QeMfKzfE2yMsux5qhLgtXSAhbqgNMLhNcYeXFQuCyndsgqWeweQ2ZQcw4NUZvvK1JFSxHDSMV",
  "key20": "2QE5soG1gUsysa2pzd8nFbHeGYcNJTxeeL4sh4qbJXMMXh4HrjdpL46gyzXpWLuqZYd9eK3HNooArZt5ZbVjWuVm",
  "key21": "3MeXNEEuL6oPLSYuUkYaCSLRssnBibX77AudhDfoBPjyhLmFx73RbNd7YpN14BvAQeeNn2K2PvSUSpPoqkcNJKtu",
  "key22": "3tBEHBLDeokcrUefdoUvoQMLXVxSJGg4EjoDF2W5qxJdHvEPAV8FykS9oqE7yDaPoNwpZLRtzRBaSLS9ftgxJxbD",
  "key23": "3BHeTexPDL7476ui5xqRZ1NcjW3PeYEL1Dr4GMpwRcvqzPf1bhw9qoUGtMQAHynaSXieC3271CKdSPUCUUNASGUu",
  "key24": "2LUqtZyeMCSCxyXNUWPSuNddTBbnqMm1CTbsNZEZT6SMSwahSx5NmQjvYLCbtRiB3z9ZQ6LJZtZrqrN7SkYJkTX8",
  "key25": "5enikUZFPyrtvSMhbH3VMh9vCQd6H34Cf6e8b66qrtTeMARiZfSxmyhxMyLSQbzN4caGuRgyHyHYQZF3mPRWwpmg",
  "key26": "b1d4Yyi7tcK7GJyzaa5he4p4d8oy3EdKu3UthZpvDn5EbxHdr2uFbNEGnkf5zWNUJMFGbNx7dhz983yxPe6XGQ3",
  "key27": "66zt4YgFXcV8MZtDEQ75Pxa9JDmPeVdnYpqbv2irS6tVUgcrX57JYGrtbbkncZdTK4ewdyvwdbhATzRnREohFjf2",
  "key28": "2xweHMkWf8SFHVhbqQiXNkXYnRVvhcsJF8Emnfn2P3VF2mfneAEVsqipRaYGVHHi5TFQScwxUDF4cGBd9vPUU4ug",
  "key29": "4zDRmdHLQBRZSiGHmNyyBgSef7CnVvKz2SPzsbSQVgBNj2GFzhe6Ef1dRcm1xJux3TJswXKD9tYND4h3NzMSLvQc",
  "key30": "3DthZQBCQYm9aDLAyfdMDz9WH6NrGM6ArdtenAAFnHMXCUSDcgBrd5rfaqWeSGqA9Uaib8yYVFQfpx6Gbq7FcFwL",
  "key31": "4a4gQAd5gTtzSTPPkVNmh8duCyB53tCoEqMejyMEDfygsJDBM5uCcHtVjG4iQ3wk5uwbXd6H1nUHynehPAGybPMk",
  "key32": "4oKJBKqWgyJbzZ3uuY6m4eYFYoRWW9AZYJ4gddwYFE2HoV1tY4V3L6bgmsedyAbk2ULf3JzJFZQpGtALwssdSaBF",
  "key33": "HNM8bqf2CjTCSS5Sk92oq6GknETgP4MdJCpa11tL6dR9Kik24iMj6tsCtTZ6BkVXBubNbCPHEQGvQB7CazAh1yp",
  "key34": "3psmqe8xYVZYCJD3q5wZQU6mQcoXuKkp6osrf5cH2s6A3r1fwUsGzSQQPz7v9jRDnACmqZPsoMLPzJYKnxwJS7MB",
  "key35": "4A2PqbXhNGVWZypCrJYTzo78Cxs3WfK6YinUSUmvgVyyHQm4Lf774YZABycV7ee3Y48dwYPB1WkZjP7n5m81ae8c",
  "key36": "3u8DvC29EwRNvfgoyieXTYVMcRiTk5EnD5wQnXUyF1TBb8xk1Qa8gFut2VP4vxqoS4mP6Swx91Z3zdEfjAtLidNV",
  "key37": "5iaEg2NQiVsw35Awf3XBcCXHEu41x4Saqf7QHQMu6JDHYo9oBgQWsUfjxzefKSKm7xWfYuvoLhjGGVMFPsbJdVz8",
  "key38": "gcvLqiy14uDGw3KbSskPmQE68Q9GC6fWfo1prgEcK3kYBxJgjLXhYBnHRRX7xtAQw1GYFGoMd9WJfDVsj7sDb5c",
  "key39": "3d6uZ6xzcAonB2FqYpaSDu8U9GemhMbJHLw6xKSD94fPMYTCthgKMECanFxg9EtPvEWCj23rxsd2jpECSKzw9DGi",
  "key40": "2NxRkRX4uCK8Ued8BZoPTgcS6J52EqeyrbkdKpv6vrZAT8Vn56cDSGFBmmqwe1RxNNuhr9Arwz9M8m2VMWwXXjBw",
  "key41": "WTYo4epV3JyQvsSKwAC1pGCNq3F4oHyW4bfW1XQ39hK7nBeK62riLtDaW3gyF2cSXFMkUfQG3zqmwj8Q1tAkm8a",
  "key42": "3uQCr7uSE4utLk2aYnLrD1SBHPKXs5uyL6WqiKcS3kfn7eMuddACt33WitG8TNY9bDxHihvd48JaK9Kaw4mox7H8",
  "key43": "5ZojETwJhUWSyJveEBkbHvGzT3Dju7yTyD7JMoEkgzqojxsBLkR6xKHzV9KQ5A6QTRxwGctHi6TkHVHVJGf1qszo",
  "key44": "fS3e6qjtzxu7EWujreNZjQshonMp9AhTqQddU8MibeMc73Rap78jCKhYrdwnsKCNShGZ7DNBuKQUgEkeEXDBPRL",
  "key45": "4Z83F1HMbEPsnHs7VTfnjXKpaUXmkseXNdwUKwmY1nuwUhJ1eigtvvCeMR14CSTPZWqyF7dW8LTmRWr9QWWSap3Z",
  "key46": "2ByPgCdJd7yfCGJUd7PurxsA8Sii5wXxjySDokDrJu5tGSUyCZivfspoobqzbdQJF8rFDgHprtHvebLm2YqKD3jd"
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
