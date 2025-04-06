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
    "5AEYAnYTU6uEFThqfWiZjsHT4k7VJTreuxZWh51x2zWa2RFiRZoCCt5BLx1M5Lv7fpXbqbHWkFMJ96zFdfRZaXp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zseFEL6PRHR3vs6tetzGmQThvs4tRNphp4xBwoEpAiuT5TJ7csN435BdTjMRhDggEbAFsmbhwaoqanM7zjkW3yp",
  "key1": "5pdyH4CGv4rgpwieDPURHXvtACegqiPPLiSU3wNLEMPaPQB6tcCkjw8Rta2sqAzXkdXd4f6ojkPrhKM4oNf4Nzg1",
  "key2": "654Ht9CUsVCWTeEbvyp4mDhXbttERne88rELJ4kERycqyLzSDnLWDZwGkTq5AkxuBoopK35YBwUJD4oHREamXbPd",
  "key3": "ezRVoct7eqUsCb9RHciPD6Nf1bQ6oQYzrH2VLtW2Lyr5jBDHnnTXbEaJjUC2QFZgZT3fg4ui6qD8jSpd3uGRJtT",
  "key4": "27LtKDuxqDPnXNLnxzPfDcbUSjEMHp1pj8sSGDx19GcE2dCBQHJA9MYC5JpypafZjouLxPMCbWMsPLCaTaxLzgfU",
  "key5": "uoACfm74tD8PW3YJB4BTHmdxahGzKseyZT9noL4u5yeLQebwrbVZwkhjpJHCnTWSJHNJo3cGkAStQpYskd6sNGk",
  "key6": "5cmoizTgGKazywcNjBhReiMPKwPVgvwMJAZjGkxT9ZZgt9GaX41NAu3gHuHNusJK4ocar1w3eL5GwbjP348KXFLM",
  "key7": "5Kdy9EpNK7UsoN9gBXmW39aCJCmy5hNDRokBRb7bPqYKsJ6TbNPWZgqMv58juWnX4Q8WKHdMj2MRjTe8Psx17HHH",
  "key8": "4ZJKTrZva545YsibwBRKGxU4hiBaFgmb7eAYRAn7TKSAgnJnvXSv9PLiydtsCTiazHXw8Zwa5WjWVu8VnYk5EwrB",
  "key9": "4zmaPvhKPrF46Qt9EfFkhs5eVjxZjex1KHjRVa3P11W6Uhoxn6vnfmjNctaq2GoQVUCL5FKtAY1Po6ZLh4kguqyR",
  "key10": "2QXhQ9ZVRXhbEio6khZQxNdXM5a1VowccFVYtKNMnGNMAqThr74wmEzaoDjqoSfZrsVKLogKzHFjwdLS19pNGqY4",
  "key11": "5iGnvDDA41FXvCUwsh74ro9iVVYSLc82CwVqS64eXGQonfUedvm2GjA9uxGoaHEok1o7oaCkjtPwpfxAHnpdpL9n",
  "key12": "4ReZA966rWJucszgPGqARkhbXRW6d6bavx2x4FYwX96EdQPjAh5DM4VtVb23FyegM2n4cyLvhC5zf4dtoAViBJty",
  "key13": "327ouikjQXJBAXxqR9sBEWzjaFMph9X2gRL61H9Lw4JdfTDyZ9PkvEKaWJmG3eiDcRwdXNa6vNjt3GbiSQYz9AQY",
  "key14": "65YhMzfciU5hgN6Fa6UdrztuTiXtsuWUGf7Z6krH1PihFFoUBQjatpSGUGgSaay1pC445C7e9UjKyCFyJGMvYCmE",
  "key15": "3gvTu5EveNAvebssmW13LVxBAxTmpTr1U9mKUrTDkBiYqs3RKhHYyKXxPoWkYYJcMfdLkDV9UFYvkj6HMBroskUU",
  "key16": "3qb6SRiwNzdWGBRAf23ZauppwqsgawNtfWQpq6ge5ScQ9bDuHep9bjX7HvrSrz5q9FyD32TgKbxSpmKhXiVf9xyT",
  "key17": "8Lc3eQMBJWYnM36qJJqXUqmoiGTX64ZrvN1eLGG2uSwbaQXAwudQHrvsvb1p6LLGT8T634D6NFChZejKDotinmS",
  "key18": "3HTHUsE3g9Fkf3Ujxqr4PvKfceewQBqH9u2pjdKoSBJ5B2kS6nd4oezead4PztfRf69VF9EiBs4q2FuiBLjM2zf2",
  "key19": "h7Sinr4J76ejtXDuaV3JKx5MykrVSvyKQqJzkF9Zjx2yWLA2ZqWp4sV5n2yS2U8kdX6RQTe1vgRtfNrbSMwS94A",
  "key20": "5gFiX7auUShZn3mvWQoYkMrAFAowTScnr4ZKBpzh5sxGzoodCQ1tS3TAr6JFZaVFkvQ7EzW9d37PJpiiRdqjxVxY",
  "key21": "3ELcmFvqKQLbMYtqe9i6gyqDEp8dq8CruHEfRQez86hXHCfAVtLeosJhaRmEwVsmBv3wp7nqCzb517uZDXPxJJFC",
  "key22": "5BfswiZEEjMZ1oGun87Pv4mpPAZHoN4JjBfr8HaZaN2U97wJkNr8EsAuyXrm1bBmz4v5E1RoedLBKdRoQ7sHira2",
  "key23": "sAVvMXdnaoxVW4rqcgvPJB7zFsM3GguFPoZ4BRNHyY3vDKQBwSsQuVKNHn7rMHe2ddrJGgzoTaC9gTdVtC5eMQc",
  "key24": "tRXKSwQ9CrYwC69Vepcst6Uz536TfaU6WTxgdKfnpHUKqQFE9iaHRejdfGoLH6iUKNYthTSnQixibfY8JGuoEXg",
  "key25": "4fGESbFQVuy2YhQKaBR4PNHHXhiciWk1m5NngfizCJih8rbfyo7b31NGF2vZ7tYd9TVWGwBZ6yAm4yNwCzd7ne2w",
  "key26": "54NqyNCAgEjNv37SCX1JwHbKdAV8XHAUpUFoPbLKp2T1Ab2c2m9GZWQhy9V3J2pjnXgnBE83DR62xUc94fcXmxr1",
  "key27": "3rzAqjYnyoNDFMHyJ6RqFVrZmRg5tiY8DPadEqpiCr9BCt7GvL5ysMQarUm4W9cr2RyxR7LyiRtTiiHCQGfvFJXL",
  "key28": "YXNox56WW2ToWK4fP616i3YDWQLyD9YTkZHeiTA1ay2tWGHJbWrWVsYstDBvTDyPn2StBda5gaY7VeD7Zj3jxEf",
  "key29": "313eqEmQi83ti22bhHYxz3ocnybmX9Nz9s6nFAR7Na65TZ7WrRBN8EizkxhmYAinSMnp5P2fd7VU3HsBgqGMVNhA",
  "key30": "2hxqaTHhQSYZ5z9w97Kcrf3WVovqtPBi7ctPPL1SyndCeEjWrWx2oy8NLFu9YBQ8qut1vscCEKP5NMK3sdryqYc",
  "key31": "24fcPhvwtEdm7AbVBRejU8nJDYqkoRccDXWdUyYvzAU5LXWqSfqoqvNddCJNw3mudAjSkqXqGu5bofjEL6KRCKKF",
  "key32": "54QZoYqreKbinRU37c7Z6zfCboLr58MXk5M4KF5WRhpX1LQews8vzBT3Cu98S9tNvpy4zJjMh92mumXVDzjxNxTL",
  "key33": "3UuNGytMZiJ7G6f4AHPWx2RgsPteokYFKeeUsyrZqoVKoKyxbk2C5qgHDvcEkunwudU6k1XDetGp3Exh5YNwLH1v",
  "key34": "4aU8iY54mrbWBzD8tzvRQyFfj9ZFaCtSZenmv4QWq7G8kHdYX7utqho6S1f4jgw6sU8fpPHgRTGbByMgkbBpEeFP",
  "key35": "Pon1SD49ayKHMjPWt37H18QDMm1tFC6vsYoGzY9yZrYZMT3iYVFHByEVwE8yhYiHSE8ZUmCeWoKSFyCN65Nxykc",
  "key36": "31QNkmDBYo3QAR7bwHGSF4MgfqC9Tm7TGMVEF7heTwyTMmhnxegiUzXimy3eyrZqrWxvmWKkFLvJUZ7gqW2v5H4k",
  "key37": "4QAouuyUujXZe9wjYvVEGue2Q3ZRZeRUhUJpCtEc8oNP9sxY7Ds5rtTW59Njmh4wZiEhUnEBsKdx56dxCTpSyJ84",
  "key38": "2pniknC4qD8VdKKMs7NxbYsTwXoEHjHGUwCQqfAc8SRycGnbpVYpZVy1vA4zyX7CX5MPFd4tGj6Pe7swBni4XLPP",
  "key39": "2jYHDJx8Drj73EWzxA3yyjH2F7LAS1sRAC131Kwm1RK2RpxJPQrVZAntTsKb2PGAHi2awr6q7XEiuuArNnztkYSx",
  "key40": "4a16gJ3iHgyx3Bqzi2A7HVoL8CWzuAGBT4JqMFz4BrXBdz99WQe26zp7b7WhyNYg2B4yNoYUzonBTA2Um4S7XRPh",
  "key41": "4e8ykExB1qWAqukhyseuGPW1DyFeyymRSLDubWuXErDMQU8RrkUP53FXJqRVEzGPz5HuWimsASsz5woEVxde4Q55",
  "key42": "5HCtpA1PrF4dbsSsqgGK5dZcrSADTQt3eXYSBxDNxxKgywBSQ6mQWrpVPtokjjGkWYFjBMARuPJTyJE3zqjhL74S",
  "key43": "5CJc3iK3DdcZkswBP4xZNGjSkfyaAxtDnAKdnf3WuFoyxCxe2QoXyhkAJztcMARrMAykNTLm65LmeTLenTQeUbS1",
  "key44": "3NDbocBraCCub72mF25ZNg27b3t2iAbdur1Tv9kFYTy11tRne9DowUpWK31Ca1xVDdTHEX5ZRxr79Db47yVkzeDz"
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
