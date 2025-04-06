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
    "2m4guxYsphXqXtwKDo4BJQjDTFAHWEDPZwMvRXwMuShAk5bpDsyw3RfGjNG6t3jwqG8P5eePxQkTRceb2ma349kv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "215zwE3yun97ByvZMdbRo5thkuhJpG3JBk7kBm5aSi7nLU2zzVmcndfzJqP9pvw9BkCZcQhRQ5V6aAT3AZV429Rv",
  "key1": "5DwuWbZqZs1tjPcFxKiExJMrU4bFp597QQ5D71QXnkfhm2vAqyoRnnAYxaDA5qErKU2zEdWJoBULbYjPLgnGtX4g",
  "key2": "2nhHtGyV7fwePRtiKXWJ2ZQk85iUvy4FajK9MYEu6T7vJ9igs8VH8YLv64rmjLKuNFwu5sp8zquZiqBC7pftE1bF",
  "key3": "3Ad7rgm934aVeKLESZtCGMwP6giG8qhQY3SMkmW8zS7nHCNgNekSJe2ArMXTdUu97rhKUjoWaKc4qHkXnmSsFyGY",
  "key4": "4muifcZrrWSbduysG35mFjYyr5ctQFsX9GkB6dLBw5TuXswBU7JvsqL7iRDDrGWkpgj8ereedxN4Pfq9LrQEivwm",
  "key5": "2bZyRJsh16JwrqVnw2SDyrBRgG3q4yoPhvAPDu8sqizXxDP8HpCiYpr3aW8kzj2yi9oEgoAWaBjveiPECVUwwiiT",
  "key6": "M9yNzshiYF99mhMjEvYpqPgzpEuNFPzSgExaEMknBLn2bKFGTSKzXPSGeu2xbgSuUwKcgmKCvqufzY5ck7B7L8m",
  "key7": "41DyR7nLLMYpLuSdBU6GAraU1KEkvx7pL8oPYQ7accVvNdsMM6DRDQ1jRY2zHmukWpbLdj6AGNuk3m2PYCUWVuke",
  "key8": "6yymcKCbKvWPFLjHEaeFtpgEQxMrWjUNKQm2wCvSpDX98A6dRRT34KwjjUwB15q5jc17CKxMFAMBpyBBZcWfQFt",
  "key9": "4P4dtfA7aw6xiqvaExswGJHwCu9toKx4dQJKEV5keH1srZHCA321V1auUxSjUeVppEwEDbp8CancJW4kQSc5ayKx",
  "key10": "GCx4QqX1esaNXLcD3mmDg5kiQiYsz6XtCBE4pbfADsNoAE3w9vCjL8Fr7xhk55u4rPzkA11eqC3GarDPt1Ypwk7",
  "key11": "35icwtDCNmu65v9no7o6ZMaEmtEjdNL6aAii8xNpRX8kc3gCmrqvNo9q8HLECwJnzrM6qfyuBntkAP1Af5dKfFst",
  "key12": "3fkESXSoVkrZQuo81MDK22jaq4bfYscp5YGn2uoXRMmhV8qBbTrWerCj29QnD7yGWdbhKSkWX3mnsxUpnRppicrw",
  "key13": "2CD5DUdUauSmEhuDi3su4uhB7rrcAn9rNqGGETX6fWH683xw37Lvqxp5AdetGbWUPc1SVHbZbCrHABuV7E5EMeR5",
  "key14": "3se1nBKcpUmVbhXq3p927nncoKBhy1Hxf91FLCWDYUUfQDUJLcFGU8uyBhWeo2jSAGX91aCvj1hY58WC7pK6NKvW",
  "key15": "25udBXWtubzkM8SECPLk3U6GazWUq7NfSs6Jgu6S6SSEBawoikKTP5aJ25dDAp2U8QD5Y2Uvxq3yXyHdA64K2jBX",
  "key16": "2t3Am6jwCwsr2KzJwtmMzMwbQaEL7CK5WCnSuhEC8GWXZpw9QoeSMPAwayeSG2RFweLSuDpgGZcyYrvVJA981Vvh",
  "key17": "2SejCyDDH74qeb5zmkuE7LfxdEzmv2E2R7s8kKv7UGjzGEBv6v6zcwvLp4AFR662yYNqJMreDb97gkHrWSGpi3C2",
  "key18": "3k5DcWL7RLHRH5mWoL3drGmYPgZXEmH4VK9fWQZPSF2Bv2QbjcenQdUYyghmWrtz6HA5L351bE1mWjNE7nADSjCF",
  "key19": "gtPm3cbFZLWzVJNKws9L9unK23H1vFU7dtfW576M6eeTpUkLWwaSMXMyxut4c6YKgGBqBVxKvGPHmhkgfNQNiBM",
  "key20": "4oGYHCdKwAqdrmGpStXbh5pk6j2e6UNQ6UnrJ9KyrisV8E9rgUJ8ZSM6W3jVE52mYi1PNiuZjNKKFMjp5zLjfND9",
  "key21": "51mqJzFy1jJBxdi1quvPiXheK8XqivSzv3Xyjpeuh2BNT3VbneXyKfmCoQjLk9hUfjak6DjMBC4PftytE7QZNpQ1",
  "key22": "qvLv1mvyd5XbSZZ4i18KKJNucd7VarDazXESwrz4X2wFd5Y2bJwc9EjxUitfE6uHzbKxLdrYvZz1xP6q3No4Ng2",
  "key23": "5naimqkkytCSxykuj6fbT6RYGaYpr3LYuyQeMXPDpLyYnvD5uCbnehBehwQhcART1ayZmJiCiawbHGNGhkS6feb",
  "key24": "4SyeBEAa5Yd9BsCsphVLv1mVZVhirWWr4Nbd1GwQyzKVe3TFcot8CGyZQWkoAtSHCcMdnnpLfiftStc9WiCRta4V",
  "key25": "4pkxKLqBhhfatcSbhaoU8K95yugcR4sN55NpuDCHPRCqYMAELJAnZv7ipe4JRKZdYJWmTD1mTfjwth8NSmZY8wZT",
  "key26": "zgR6B9fW1kQU3Pxw5mwfJDGpzzj5NRuJUMYeAz8XeRZcuEExDyq1rTDcqkAuo1dEuKDG6ZUapkgpNMoknnvXzNp",
  "key27": "4S8bnNwGKpwm26YxeXEvLMmuhrm5TUyfdLC59k7Cx5U29APhC4LYP8DayLGKYdR27XWcHvyZUpNcwKqAKa8fRNhi",
  "key28": "Zbvyh7zmYx5rcXizqB1skAxv5FJTCWRHAAmp8cfZorJ4k3adb6yb88ir8x83BpxMqAnHWQ8NwDAWyxRKdt58aLj",
  "key29": "3W36aEsjfQB8EpYN46udxBY5MwBWHS8YBj22z3zciQYusVUwQwSGW8Mp2ZTsFN9epRAqCbvo6yY8ShtWgvo7QqK",
  "key30": "5S3XmJsThkSmxLUu52yxYJYEA1XZ3Gb64dSRPfVZc2cWiKqUWb8pjuynL46kWw4kjRkCrDnFB8SVKeFmsbm2fgWB",
  "key31": "2n6uLkog3scqZDKDrUdeXigNifkVYndUnKU57zSJCmJth8grfkxdNynHeQcKUhisq741L85VdSFCSrgoJzzx3Ge7",
  "key32": "feWgKEt4Fk5bFucTwwQ3KC7bKeUdcmEUmKig2p3e437w9ByxVG6KdrVXkLNmLDqbG8ePhwjMdL4kp2wUDMh972m",
  "key33": "4xPF4xAoCG33DqXKSSXcDDPDWuY1z912wT6qjrgheUfsiZcvowDmP9wsbe5S3N5UmvX9StyWrrAM9aieYt41Tqcb",
  "key34": "3wiwDAkfbkhgmGXf6d5cjobYJQHAW9LnDYFsK19ysbKohiJ2oHWiA2APuyo2gDN9sDPTnPiz4wdMfohr2Pdyk7qz",
  "key35": "5vN1EahS4dBshUFpsKNfAdoEuqRxJLkTnZRvTHfStHoKQuba6jPmXVRhiqsB4UHwcEvSueyieoroPSGjnFkh1vXy",
  "key36": "5UuXEL8cGJNoD32GF4soiF1UMxXTjgNfs9EThTXD1gPBgYR9DMZjoBgeXPXVrCBikb9GNma6393JDytwAJg7YgdQ",
  "key37": "3pK4SQkBwDEKUgDP45MaXdXvCTZ6Yp1Gx9WM9tqqH7JeXCTkjDdemzToto8kqYLWFNSWef9u7i7gBwaHoPuAGNbr",
  "key38": "2wrDPrhrWVjD6ezwnptDeGf1dZopy6jWQ1fYwNb87fhz91Lk2X1sfL1HSDeZMMcGPGfWETrmMM63U76xrfCUQsVv",
  "key39": "8PrGhaQjW1AMqYannbY2c8pUtm8Tq5jc8fZSDpVM6QehTa2nKd6npbehuo4DhwtYhkC62uu45PcZuPtAt9G6ma2",
  "key40": "un7cuoY5ApMWdts7Dh9d867nHfjNnwt83tCwTXkBJLTWwq3b2BVrV7aKwMk3tsadqjdPfHoqysQ7N6gtNK7VqG1",
  "key41": "58GefCg4yMcrfEvMpci9wkbm4SCneNNoKf7NvnXZ2feiD8AL3R2t9a6PVWip8zCtRcFH3N1xVdSzEciggiScmz4u",
  "key42": "236o1vdVKs3X95X8eMB2pJu7h14wYJavX3n6Tr6AnkAyfHZvUWe8XK7ZiqVAf5PcPGzCFadh7VvXQ7JsdP71Sin7",
  "key43": "aUFGiPCrLSMdyp9D7ymoXbVzBP7BRwnUNPxtfUBH7sW9tYTVuxKZcRDQMQVspW3gCEtFfQSvpi3QpZnpzaZmLSV",
  "key44": "gsuqLXkscc1B3BDKopMqVskMqmLfE9KM7EQ199eHeWwrtaSrd3LCDbpAoAFpu8SvB4R78QcVN3xzB4xGfTop6pr",
  "key45": "5FRzNm6Gdz4vh3HH99iq9yJ6TjG5Es6M8tyKAo5eZ8NzEjdMGBMfwemiumnB8jzYB7QbaFbbzFHaEULgcuzWdNZT",
  "key46": "4xroruV9VWdzB4C4RiXp4ABjuPDR4iDK3ZmZ5oUFaZxW84h8TQXE1Z9Bgh4CnHEQdKWbrVEsKydefpfvEvjoGuio",
  "key47": "5mXAGJCgnYy8ojtKhDPwCit2qNcPg8XuTnRHtdeEdX7fa5JzrRVpJMA1y3coZiQKDXMT6o5zJ4MF27ryp73GNNNE"
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
