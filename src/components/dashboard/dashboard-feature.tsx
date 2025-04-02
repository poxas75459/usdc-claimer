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
    "2jbxGGpYa132kThWYdnBhfdFt3pyjX3De5z8249RpdKEsKSSCFgc9J5doBmW3aszg3xJGZsS2kpAZtvkyzPwEpAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BgNgQYEfLou77kBThzVWUNgXgCWMtEDizqHCt1jibkkF53DCzEABKviC64qCc5gGGFvKApJf22T6ThVNqBm43e2",
  "key1": "4UugyhvfWgGs6NQPyHLHUQB6vQd9YTQFT6fk8ZneLNZ9VdsfVfeGUH4BaZj5HszJi2upEtvSDtFuH7jtxUe9aRBL",
  "key2": "2GHCzKxWtHHWKdwe3TdULBt8d6Ru8s8UEajEUNyMGwp2zjDZUNZaLMoEt6TuKJLncavc86x3upUk7snJ768o2UD2",
  "key3": "ZrCkhfMubD18g5qUvCUGPUCtwo5P4Uq3AsyHeXfYuwH78ThbJd4sDnjX7eAsYTiPXY3tJw9CWm4LcXtQkX5fF5v",
  "key4": "45nk8cNeCAD42FYVZhsBqSvKfHsQZee6J2zVhrkoHyKuZqDRH21YWfbUe7MiSWHsdxXdZNphMhcFcDQuDF4RpFp1",
  "key5": "4WvWwX3HjZPr5txCGBuefP88gaiasNQFHRSVvBwqG2adeFS822ZnrtW7ACK3tqSNH7gWNgutxApnGnQ7Epvgfch9",
  "key6": "44rAhkfybAxjatKo8hqZFoJ16ay1yCr9GSEpiy2Ax91VMq52PJ88dfbXwxykAvPyCaNw81DPFoHiPKq6bnm19HHe",
  "key7": "63ChhFYpNTSPFoedR8yfReGgXRpEf5krvq74eXw7XirvfKPcyfFqXXhqU7qXGoCFuPUDmAvbZfwh8534kzG1q36v",
  "key8": "5sTZWzpb17NkWxgoHorXWepXVrGPA2HoBJgnqKTFbH9eB4PJ4dTUa66YhkhZb94wGPbWREtx4bKDxxA18Lu2Xvyq",
  "key9": "5NgXTnLrXmnsbWHerJMfqswtPAJf7uHwu1Sr8gv5ug6j6brU4duPKHeY5QJWwnWdfxfRfGFjJJnh4uAAL5kRY79N",
  "key10": "2u6CLay6sgMoCRuMsNGdGWXmeGHzsiMKzXm2TEuD9h8ksSzqGz2dWBU2Sxssxn69ZBsh5KXmkNdxEz2pfwE6Ea6p",
  "key11": "5KC11MRQvEDJJrkA1swh36HgLXw7VbNTfUpLZgMv7KNdToCogjJPp9LRb6cgK6ddwD8HH1fewfJcSo3Xx7eVvenZ",
  "key12": "5VjVZa29k9f1iqb7BKbzFLGsdzAMrAzQBm4yWDCrvxaP5uKPix5qr5GweQerwjkGQQqFtyJMpdZpGhFCMxrFAYXE",
  "key13": "5GbpvYY8wKW4CC81MCfUfA1n1KumtMMEjhVRSKP2sPp84cUAMhMQ6ofB1uk7FQsSQmXVjTJPCUXPxPrWtNPVpsLJ",
  "key14": "3eiXLLX4zhdPNTxv4evtZZX2fimWfios3Ww8tvJSbg1m5kT5fbmWxJfBiKiU7ZrpeaKYk1q3uQBBVqKEDogmCbqK",
  "key15": "2oahpa11wz4FSFFo49DzgnFfNjKqTeFzUFuieGye1zNLRdcG3cD4DnjfCWYESxWqHqgKwEDNnRebJVMdS7Jn7hWS",
  "key16": "4fccSYxuNgCsta76qM3NUuvnGewKtyQVLiCWtUqMuaFekvATZ59XVbBmnyRprEKJGNRfgeUcXPeUR7sCmzVCTerX",
  "key17": "5gzjZoSikCiBvwh5zCBZGLi2gRBTKuHbU5cjUMFVakawnovCiWYVf9ecF9upcuKXnuU3tP5KEeuHZFNE5Ub8qW7S",
  "key18": "5KpY6hFQy6QfCJ5fyVxp4zQ8QnKtoRBDqq1bTTJyrVBFAonZHw9GjqdKTAP6s9ZhtuG9Th2mubNPiG12CxdJMWpb",
  "key19": "5VRF7Ek4MvYRQ7iPYUDtnyMDfqKL5JQxfT9ufgfmur8Z5mi6bA1Ve4q9A7uFXqVDLfUuF8FbzkwvtixupEw2fWep",
  "key20": "58p6LKG4GWvdXYmfiqsSQXyYkBAvTpMxYtk3fnMRJwphYeo1y6EeJZ2KJpMht6gA7rHBZs92Vo9n5xGXndBD7f7u",
  "key21": "ftd1mvr7aMBRvJcJmUWWQ9r5DJVceJn9mnbRd69Sh9YjzYTb2h6G63fHoeDqKdwG4KetD9NNB7LDfWz1bdWAcMp",
  "key22": "4x7wfLTXNV4kgPeApb4aoBjj3LQ4bhyx8EtdcNwsPTMXQbUSuzpX21U99ntJg8uKYsaUbKTn1HKvijL9KpbEcQAs",
  "key23": "5qBZdnxhpWHm7asD47QXJeu6fVmcDW54uir7gos2YqEebVEiJacQFjhop1WNtC268aQzSCWcBgQnTDY9m1g5NCiw",
  "key24": "45u3F9JuHNrkNBPFXm2mGcLaxxEUU5NRNcaffhjJ1PqMRazLQ1w81zTkKSHH4D7rNuGVq3CgoAc3J6xEBB7jyTWq",
  "key25": "3qwUacS6WjsLN9aB9vh3TCbWNEWyAXWJ86wL6L4ayizvUGXe6a1VEMmg3Bd1ujUBSdzSqktw9bPzC3xgy6DwKPz1",
  "key26": "4hQek53JDgXXyzrpN4mCoAKHQD3db5rdtLbT1Wa55yUwKQ8JK13GaGwPLD3YPWUmufofvebiijLcd67CvtkG9c4S",
  "key27": "5bWB12r7E5JqWMFRQbkiwHgcZ8DKNB86hbCKianDEMdZRMmXtVFHSdjtfraunAx4AsVf6rAmhBF63aXSnP8jJPm",
  "key28": "4iDVViixTrJGN5orseksFLMbxcnWod6VGDGWpNjG1P3M9rrdF7qewwJv1vYvA7hk6DvFsxabxi1hVjuPXeRAT5Nu",
  "key29": "5VpgPiUNo9Qho3jBfR1HnurPgAWWhxVtcmNFZgVP8Y2N81mzZA6KqKLkAMVBen4vAhuGcAfSXE3BRfdRj1VK1gKo",
  "key30": "4Uscfm9jTLexSjqz76Dsy8yrpvqTJbqUpFG8AggffmezGcZax7vodDX9tBU9QLmtSB9FbDJspYo9QFHUWUButDJS",
  "key31": "5t2XewfR9a5aEqSZBmvQBkTEHkidPMtQHXNTdaUjEjkmiikYYhdroq5V7htqUEx22XbfnMZg2o8uLoQUJ2gyiJoc",
  "key32": "YEveVR3DTvpdfNSo8F4mhkVHFjF8MHj3r2MWSY4FXJxJnVgw7JBmaX1zv4Xe7f39q3b5fEAm2gxzfVfXFH7Jo3R",
  "key33": "2VfAPZa8dYScSdDqnhYhZ4XUabAzJuBMnb6PphHLk3R8cpsfRah5JVjx24spaJnC96kQQhthJzwHdKThgnApVrGb",
  "key34": "5hmCx8GVPv9WUVZEk64pga1rUmfuX3kQhSieH7jXsHPfYyX4ZxBEQnEShSAXGx2GHh3Gq7sUninbSiQm5J7YgPNr",
  "key35": "2ne4BetdCXJhcNy4CBCiddrKbgEa4dRrLRS55kTxhc64CbGb44ms26CUdKp2EMkhh7mV3Kr8n15fz429iVnbhCFH",
  "key36": "2s222AgWy2nCXeRBRmAJFh1ihvXkhATnhgBTYbNpMjh7C8RWbuQGxY3K1SY1QoqvasB2JuPsUiCUbob5QX89exMp",
  "key37": "4io3vwTaVbCnrDLfwS5FbufwuR3dutZwWqwTuXEitBStkrWAK6SzMea81c1nYG3pxq35b3g6DdhByLeirwtCVLu",
  "key38": "27aBGkCyo1BVmjdm4FpsrBcb9wYYbWVycEzhThJWZcxiSqtRT2EcKHz6FTftmZZGKewJtKmdDWFVHke7Mg5NJKgc",
  "key39": "VGyKVigxt9J14KrBNW35aCJ9PqAnb4CbpGypfDBQHMhKwi2Md26N3ASd3teRc1jD8oEwpLfp3pLiccBgcsUCofc",
  "key40": "3hwt7bna7G2PvyVtWsaKs4EQQFPCst7NYHQaEYWJiS6muJRyANj35BExiQVdkm3ZUuPFAuuhLqCRrmwqxHYPP7BT",
  "key41": "3VWFgpLhTBLxnZNexXZectN3WuXN5aN95MEigr9B1rvnqpwRTDpcM97bkpNRikzetAUcwUHW3mn9XfmS4rZ8NkBJ",
  "key42": "5wMwxAs5EEAjNeQhuErQCniVnwQXY1V99KMfaBoZQtLS2uBhzfAPEmFeXcrESvzM48aWKa1kEZScSndd5GY4Z6p8",
  "key43": "2oDcuBibUSuJQWXQYg4g4Nm6QWRo89N8nVhBq4BW7qR5wCQhnE3VUqhtnUirFY2vu6x9vGNBKD3ysf3ggpQMPP3H",
  "key44": "66GouUQPmDAeUzg6a39ikuFTq2tBaNq98a1rbcDTRZTQU31TiUxjSgQK8wRE5rz7nAbq9aybS6mEjEz1qxjf2CD7",
  "key45": "c81QcwECMMawktswMTteQhLXAy7C5veyrmRHNhoWz6Vzjnbw1797ESUdtzzjALq1oTP4sYkNRjCZMGRaNv9hDEi",
  "key46": "5pxcoktS6yoXV817g4a4qrbRKMxzZ8mqdbc8UYvVG9h3j7omGCeFgvsvKPzrvfA2f77ruVng3qNhzHCz9HGuLvKj",
  "key47": "3s9GWzLAgVhbj7G9M1hyYwM5saXphdBFcSzUyobuYeYUcVGQbWNePze4nKrffSNH3Z1GrnJ2Cn4jzZNSHNxTtcJA"
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
