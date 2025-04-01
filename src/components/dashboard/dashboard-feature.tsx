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
    "2NQKEnd6v53obkL1NTrosbsvfhbCZvu8tAUgjpMaffHdWAgCfumQomShvdoJ16TxGDJ897vDNQx2sMdEj8fVA9cN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mhVzwaHM1rD8thmjFtBKL2yXK7rQ3RE1Wae61Kg5ALPWNdxDSV8BziiMqJkXzw9qVYiyYJEh29eckUgefhPaA2H",
  "key1": "4oLnqmsMu2rJ4EeAqot5TK49jF5vByBmXKZaiRuu3oJ7zL9m3QvuWAyFuEWTDmoLAdEp6X6FbPQEXTXXt7EEL6tq",
  "key2": "2VHpNUSsAQ7nJAoPTNW2WsE9Wuwakki4NLH2yuHCeXDw26xLv5KVacQTNJ6n5EV2xpxmbHf7WJrMTyHkjXKdij5f",
  "key3": "4MEm1Rbe5EVu1DAYDPCSBkivdTgU2yzAe4kdrCUSpwngA5y6WxYG1ZccEYgF9WKbN54piDMrhxHD78DmCn2pForj",
  "key4": "5AKofghfKVNAkFvjW9jWP2jFfAuG2MupcmpWAD5JGqJA5fyj5je6uMqj9omMcxYfC9TyJBJjs9oKPtbGHhGXisaH",
  "key5": "4TsFM24K8ySRDPV5QpQFYJwA6fHHNDwaNpvNbwJ1U2K6vXwpLhDoHeBLX1iMorezkPVeFkj4XK5dkrax5QBXgGMs",
  "key6": "5nh1DDEc63o7qJJmKN6EGy5kezDqc8vomejBPZbhW88gRL1YLLgLy9NmQkDYWiznst9XgpUcUQosoUBiDjEwjCJQ",
  "key7": "2roeadM8csGN3WzAsMCFmXyCeKjWwjva99pZvHyZiU8cq2o214dKW1n5KWF2aLq4kMcHbJci3TVjL3SueRuzUhRY",
  "key8": "5nQ7Veq7fTbNMxWxpfFvDakuYzahZ8gwU7NWenA7rgNYJfijBdKmQmvrqS7WqYy1Q5R2MbjB9wSYrsfPQjvdkh7g",
  "key9": "3VcvPGnQjAMmtuZP8qUQwUq9VqC2SGkDtFi3Tzz8wpRgkyojpiRGg9BDUGmLgW5hSoXKhTh8FcqnwYjaAFQssdA6",
  "key10": "tw4ognSaHz3hTwzoqscy87gKHyfdA3649f6t7SuujG232HoB5AxuS3T64FX1DdT64Sk2YoYsym5jEwrsj3sSfV9",
  "key11": "5TzA61PdijpmDXNuJbSrn3X5zEqdN8QhNpug2h3WCTfWxPHgbZAegcW2suPBwSZZCedoNPgv5DNinsKduQPqenWr",
  "key12": "5jy2Qky8aAHRr8EX6nxcc5jPhULDPkwYxwvNoPPGdmQLMVqvFYEsxtj6NWBEdi6eVRZtoiB3dCJ2t85c9ZcSaujz",
  "key13": "ToxKqLBXDeB3SqUDKM3MN9UrroXYmA78zR3HB4KThf1N1tUZKkXuZBRP8MafcEumtepMn8gYjJGARuGMfvLnYNp",
  "key14": "2vpqZaSWou8JbXXCifJm4wcEs9dReLJtwqtRQrXSE6mWyAubtsi9hjrnAQbNAFiQax6bRnDLNzpFnDLThBjwVGxe",
  "key15": "2fwpNHvUwhFBrgjLDvJ3NMiAnMHrfWakcFmWnnSEyWTtAiSw3Q6SCwjtRcZ6QPJVRQ9YYH1CG9vWxjYdgQvpe9Ky",
  "key16": "5Csc38WJHR7u945Y8FeaSU29jTtTK3vVWWf7rBA2vtA73oM14L4JCThXLijYwreSXCrzxEuRVxhrsmb6FKjadSzd",
  "key17": "2vWt5TWvWskuu5RcBD2MKTZMU6E88kyKwQkQPQJc2fyh6PveunwCJaEHfqrtd9h9hGJW7QLobcKZLiAUei9EFA9S",
  "key18": "2m5633he4Cu9Norb36Agdm8AXzkT88xUPHGKHF2MT3tbkAPZbvHzzZ9hYNBb5Gg7p5fXDayXYd23ykoyvuFvCGb",
  "key19": "2dn9HngbtyL5riVftdSCQS5q7A531poU5PkjJJcckGu2pScDk9Scsu8Vi3f34MSwu8Uq6nNzj7VWKGvHEtqd5Ajo",
  "key20": "aXG7Dsgy8E9syTLkEEbAiwSXLLE5cKooNQvvNSGbugcZ5xmgBWWqtRn3TmJTzang6fCmBXguQQNXuH4N4NwBC71",
  "key21": "3cEBnBzPKeTX6vSDUBApuZ9Gp3ggcW5aHeLK3TjgtMBiz1G3n7seiB1XTeru4UXkif4zBm8p8eqsCPhEssz63tBU",
  "key22": "4kaTJtoVFCLXg6pNy4Tk7ghK3J3j9WQg45ZJEwec7WkCfaPb36F6RQa4P66fGXkWWp4HpqruBRQ1Y6fZUqV3UHQM",
  "key23": "2oruBjpV8L8wqRP2UoWLnTtkHtev2qkVWt4nEsKi8Z8mK6U37ocuhyBbdsp5ynEwJDMD7Tw7AhsByrTZGKb8GLoF",
  "key24": "371BqjC9aVAPgo4BiwK2A2j6GK96jvbzZVWjZ1gRrTAacDyom6nftMPQjo5h9tPhtN2QpCWwwmfFZNGgoVpSNoik",
  "key25": "VsPpg4iRGD23E8t5jRHoKK2sG6b5EdiyVp16QC5r6TkRWmzN9j9VzpD1c6GtsN9dEPBGTV4DtYBvjvrxatTe2Ab",
  "key26": "33oHB5yNymgArgjWHYYYw1bT64NoU3S5EHoQs3aM1c4ifopsYLCfQX2UH4oBqXWuJHfAWZjAK9KtxVZ4msUzfj4D",
  "key27": "2KDjtbg17kBT8uqtRuStAd7B4UxU5yFwkC8AQQDp78eh1J5Law1DKovXnHLnNar6tuFdnC1yihc7GdpXBVLA6vtf",
  "key28": "gMtfvzaVkho6TC4GkngeTemMvSNNMXN8HVfZkmGiyHemMFAuArTNiaWiSLwEpRUuDj8nyvHaTcgHXcabo6jxSKM",
  "key29": "5ZtBGcUr9UbYo5CRJVxZrugcbqMTThnFdESaCGhbCA7zFZy2o6MuHay5TRjY17Kn638Zz9sPYjjMezDg6Np2pqGS",
  "key30": "3PkrKtkiBnTRyRRuUx54FzyUvuef3gWmEukoQWhgQgQZQ67kSrWa6oJCeqUFL25Soy1jFkEV8jTJnd3NRQuU7R3i",
  "key31": "4GLfnzdqMka54TRLrmHaqXBxBZpD8d5YUiwVoKYM9yrsXUUQbV6BhmVB8T7cqvS58SwVJHoqYWrBNYCugy9U44ru",
  "key32": "5F6YiX98ps8ccAjZJGzyeFqGwYakHLo6Dy32wvvEKaXSL5yWMTRKyQi7Z3e9hgEL5tKxyAC7QBtp8rnWsHHATrVT",
  "key33": "368KD6LhPmuewd1jNmbqLj8miHXN1R2uRfhJZkX6RDKZ1AcTiMVYdd2wweY1C7L7PbvFqaUPpqduwd2F1R9axXDA",
  "key34": "5B5c4TysQhXKUR3JCPUZh8PbpgsUf2A8mhADmtP6kgB5TuPK6V4jJP75shAD1s6caRNpsucDNKLN1tE9FaXqoEUX",
  "key35": "2pr79xhGZCnhHtYEjpgfF8DQ6KoJrNYKvY8uUbbjHRVRfbgCKxaJTqnnQppVLtcjKsQPRVaZ7aDL6fQa1aQfeUWL",
  "key36": "5Zc2Ch33T5DE7NRe6wmVxxgDPLVQi7dntTZXutXue8r4nQENH5rrHNUPd4rpxmVcWaYT3WRiXmbzRxJzZTyFhhX6",
  "key37": "4PjS4PVS3Nt74ngvyjgVWLqksHnpsETYUxZtFwvrHr8aZuffeYEJu1qA6vq4xcZRzLCxXyUiMxSADk59wWgHxggk",
  "key38": "5UPgdMtRtEKVM6wMM8MYpk9qQj3uBSkd6cX5L3HUyaUWDzAZC5gSS1SiRqHyV1AEgApLuZVgD16nobLdjLYQEo2t",
  "key39": "2SwJyRhwt5KvwwFoBd4MZ4AbWCQdwWF57MuoBUxbn4Fyu8dudNd6msTXKihEcPHovRzKKcwDgCgqWGiEwXuuy7We",
  "key40": "4Q6toYNstYvqjvWb51q8z1L7o6f6ej8qkczLpKbRpRNDd5tMHpoa2V7kd8UPweVvzjUAvJuUzJkjegX6ohqh7aQB",
  "key41": "5apQhcas1N3kSjgk3NckFTxWHLQcNb1jnmFYpdW46kw61GFbwfUeR8Ce5kQHbrFkQemwufmMfHoJPLMw94BfKMVd",
  "key42": "3J4o8nYjeCmJmqvT9RDYxUnaeGmWJAcbJJK3fozg2NNwqqXUYUiZkN9JVPigYU4sFKKkbiBGDMJSFFnZ9uEJPN9x",
  "key43": "3zBnLysRjxP8XKZxBxEad67v6nF2vwFCqmT6tgHXBfTGFRwkzQnFn3A2R3uiYHkLXwa1qzbW7Ja9Q575u84KWuYD",
  "key44": "2nRRFUbwGExuCUdD8beMMdtkFFicgPTgpNZ72s4k1dEHmTJKy5Mb6xMowVaF3moPfAUwtCuFYQc4edGHrfKwgsAj",
  "key45": "2wsTD7c7s1RDLNXYAPL6XYk7aABN7PGwamYY2vwkiNwWBm74bT7Aka2K8kYx1YwcZXueMSeNzAfEsGRT16WvKn8a",
  "key46": "5ycXKG3mX91SgxBFtv3cWCaNw5ZkLomy2ab3n6nmdioyogjjv9z8PPsgt2MX2cRNH47VdhppjE9GsFEnCzw3j7pv",
  "key47": "3bfvwZKZCGDwXShFE7AhQELUBPApQcP9BmZsR2yTTrvPzWje7iwS8v39C4wAFyRJFkqW5ENRyKeJS9AXVda3r5Di",
  "key48": "GhU1Ynt5nrQic4qGpGHcVN9QNtLctgEJo9An95E4vhpbZapcefxVMGGwr7qNMxW4GVFbBMW8B21cqf2vcP31C3m"
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
