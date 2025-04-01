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
    "38JxzT5kEAZ4s9A1VCG1rTyDz9DDFmtsinJahvE6CGrafGsx3YKn2qh2uDyoovJTivxTijKFxM8FnGsFgAEhMpen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PCLMWAFiSC4zUkmLzMWtbeHsfTh8KAstc8FtMFNWZA39rab8Y2GM3YbTh88Rk1y6yguV1WCbEYURsvdi1zqQQ4g",
  "key1": "34urnrJWbtXP8M8Az6FxibsNj1guZ6xJiTEeTwYCbRQKY36kMCMiPsL5tnDGS5XrKUrpmaWHz6mw3ohdvzVsLbkd",
  "key2": "2czVd8zGjVqX1GaEy5AWgePS6Q8sCuupxby6KeqfiN6TGQfprDFk5MBhB7GxPKPMj2xuZCPAUxMX2rWkaDsgDwUZ",
  "key3": "5c1XXJkxMJg7NC1n3Cw9NJz1b3cf568k6c5xRkUinXUxKpowTgRDhdWnkndsrxYQaqpDKiAYcFtcHWpyP4Ru4XvQ",
  "key4": "LboQwRyCs1URbe24P7GRgjxFihBtdY35YW22sDE6fYfh1SeF4ukBGx3M7qSVBtfLPiidtJfZ3bu9yLyJ7EgjmtR",
  "key5": "55B2AF9cqeWYbS5LDvfpSuUbXPXPFzmkvC7a3rc23dMvxzMo4naHcitFNmjrNMYGVKoqYcxZ5u8F3h63We1RpGEF",
  "key6": "38gNgqKkK9bYjqsJxV7VFeopFGCCnmANLWYGudvKkRku1KGctZp37RpYeqHCSEj5Biehf2UJmJTfD4RbcL9Jrqii",
  "key7": "4NHvCMJMvkVkyzi4UfRJL9ZiWPW9xvarBgk2P9q4WJPCTDnuLK2BbsoR7WXn1Pm7c4wLqaWTC1T4i8wfyqpLGuYd",
  "key8": "2YJYktsJWkmnon5GTNuLPbkDG5Rs2rijgMCx7c9auBecHKMDybruRsisgxZfvCHD9JchwBSS7LRc6mcc8577hdrZ",
  "key9": "UxnzTrRbfe8sixJuUbcQqTfzKKhGiBaATncmMg8PbVPGNe9DpghDm6oF3rfTbywjfi1Mx2MsEje8mUJzkUt3YPm",
  "key10": "5U2NTMuAMSTKMETP9Gu3cXf2LgHU2j6sBcLFsw8kk6HnKkmGa2K1XcX9enbU14SpUf6FcMX5Z5sGFJzTbCb7E7eJ",
  "key11": "3rtVNf7Gku48wM8fjvt9KA9PSWFoGRWHis7t31tTyY9UuNE5z5k4dVW5Np79TuuMT1cQKjV9PSQvNhSV5YAwsGbj",
  "key12": "4XVsz3tziQ92JBPFgZQrMeUTtPjrTYvALUiUb4Q8YRdoFsKgMgQYRKXKYBxJFExu3DvdHG8TxpJxLhQHKWnNqrhx",
  "key13": "4mvAz8ooZcVSBLECtEZUzwMMCaLxcj221h15D2b7aqr8EKLbJuSBeJscRe5fvhGYPtvgBB8CuBSuCuYbZQwbjjy9",
  "key14": "5BR33YSyJVhAughRpREZAkEXrkhwUF1otsd39H4wAxdmsAuT2V8aZwpEG6h16oFK56JD9FnxiHSz6V2MRLcoXoZN",
  "key15": "5FJK55DFpZPMnnV18SdBAU3vCS8UwmwBx6C5dd2Gsybk5coC5ebYjjmGzuREb3LJLDzgQwKnjpcX3Kz7VDkXmyAf",
  "key16": "3Wy8QJibrsa5hwvp3NzF65aF5WWbsEZrYFwGfbJeBqcy3oP9ont91UsDgACuacfCSuHerC7bxbyvQwUb6gvz15SA",
  "key17": "3MGNHAuhrhPxp2a8ghJV6cbx986Kcsdad5nmgNuFU9SqQWF2DEuHyHJTx6oveXPQdwaxMM3GNNtUSFvWbpXkp4JG",
  "key18": "3dyLaGgg21z8b6fjTLcQMi5vDhRqRswvXcbjYJxcd4yJMWoxN2bm6Zn2YDVgKahhuRCcUKbUFLnsKgt3nhsTE3zN",
  "key19": "5DPS46MFZSbbMWEPcBouVPtLPLzyfyo234zeWemFNXXGQngxHWXZtTxqdAbLWABU3EGdf6uNMT8W1kojPGPcZbAB",
  "key20": "2jpjb7p5oJwqRzBj5FzE7tCwMWAxJusgnTnL54esYYd397hDzcb6jSTnjr7DgNWjoqVRHx12TVeoiPhA2Q3auBau",
  "key21": "tXTNk7vsaj3NnpFMukkSFLiZM4NDDYBADJ4EbyEZWakJUM7pSePZp8kahrrZR547pWzjCvmdJyDSCDq3XPCagS3",
  "key22": "5KJEyGaDnCFkKtoZ3kJkwwvFutTvrA6ENVETP5EnLHNB1kimPQGF8zMcZJyRDA1P5oY3RW3K48RGSn6AjRiKuBDx",
  "key23": "5BqzsURV1FnrxADS6ttNKbgE47sqaKi3xuxuAYDEVuteTWSrSTKYDbEMf4qoQQHw2x7LCDvNZnXefG3xTFT3ud6X",
  "key24": "3bE9W8BwbBBoVEBXB891TX1b3g9Mcf8PTioggg9ugZeUTKEqqXpDCn6T6rjkYBPrACjGZ9abK2UFC7xoWWYvXpDR",
  "key25": "fSEjgaJz8Lxp59jdcN6BwsyWKhaLhXBC5GNPKN6Ajb2LhMP9ZpqSzkZTL3gV8jRVajxvkTpr35rSQgB8TdWfyuS",
  "key26": "2cJ2pkKNnL59a44qvYaHNPFCLDAi97kfpEDQS5UchAwUVTA8Jf3uuoFQ2VSXG7inbkoU7YdQhGmKCYdMDb1kGAej",
  "key27": "4RZT3QW8tQgHF8EntY4u8kvaFuCFdvNhCc1VEvqFApdFgCe1dyGpFfQyEyACEMAzJ8WCbHuo2NffpHCWZQihKfLR",
  "key28": "3U4XvMyytfR4jE2kWSHro51Gd3axHSMHuvCvNsdadHvf2JCDcqRUCYiPLszstVruAqip6C9ohmM7jqKUL7EXTWS9",
  "key29": "2DETRixUwPu9rJPcwVmWT9KUr4tzgepZEovM8Sky8Tj3qHmkfr7UpMfnwK8Spbb5K9rKFhREVFGnzPjmdK7nsPiu",
  "key30": "5XutyvdSZNxc5o1aKr3icvJv9kc1JV1LeNWFwmJX6dY8prJMXX6WRooy2XBuMcbE8hJTfRn4wMAfaZgn6mkff956",
  "key31": "zA5L55mHTBwrs9gNkJTBnAM7aJH3RAT48cRUEsKMC2RRo8f6p2V8xNNrym8BPsnxzUJzdoJmEFgEBv7DdcP4LDd",
  "key32": "3SHYXdTAxTxFiXFfUTzoQmuCWZJyiMuPDnnwEpTuiLVR6nTe8FtU6SZu6jE2jWJH7ahr8UaevznqkBqfBw5V5kUy",
  "key33": "5rmMPin4ktR9wQL4RL9hERZV7n7TW2uQgvc6yxdwbXqWUuwpo7Q1UU8dvgXh5Y3DBFRNvxveK2AVv4JVuRZexc3i",
  "key34": "4wgARuCFjNZSqkNyfvKyg4Gn646sopL8AZbQXbyjJE3qYUgzokxQoVPyjEhP4JcMsEUxssiNvy9jkdi1hsR6hbpT",
  "key35": "4MYNufxWnhYxx5Z7y4fW88kRFmzX3x9T8b43RP5kEEKe9cSxZhMUKqkihCUo8bB86eypsVWz17XFDoMJ5Az7F4wD",
  "key36": "5LvwGQ6Nqbu17XhWkr4FasYxFc6YmLkscwkK7WoFhJtB5dcYmLSgwxtY7ZEgez9UnS3xpUXjjpD9newJUezr3kek",
  "key37": "3VcbtCzHK6QkfX86SYMXSrNxHvvedJTnem5vqMt3nxTxmmP7F2WdD388tLtC5AepEuyd5SQ4wmikF7G6Tt2Csnjr",
  "key38": "4Y7T3vKVAwQVWGLoitEudum7DTFsY8YV9TtTaRogMLdKZhqoHKoadeYvifzrGNfYeDVpbvRzWjE3nom2DHAc76ZQ",
  "key39": "5LJqgWeipEAuxK1Hky7SyzxVEP1bKoZwsBzU3RdHQ6jrmSTBvJxjqtag35wSe7Du1kmbwkYsvbFy8KcSBVtDPqR4"
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
