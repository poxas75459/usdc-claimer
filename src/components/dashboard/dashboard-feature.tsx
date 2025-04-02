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
    "21nQc7JEorBtNj1GUPTYSZGrkNS85Hqegk3Ew5ARhU8MDC2RQ48EG7nCXrnixFVtaTaFocc8aMqDvRdER12rZC79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ymwq8YEXvME2KFUUPdJhHjg6GnoG74wtT89Y5zMrL9cDWYg6dMAUxYyTxWURMaBBPmTD1d36gbGXMjN1Go4Y797",
  "key1": "gAzoZAWBAyMyvxurwqGvymzxQHSpJ45dzNHPSgfXxzomJZ6r7v4yGiWR6Q6W9L5s1xzQWKMQXFF6zTWtwoz2Ffq",
  "key2": "5e2NyHj1G8whoPUYzJDJJoTRfzNoZcQ4xPi2KAnPX4Evno7dz1FaNHK29BuzPkRbdGXf6ZRN4BLGSReGwU8NmwzR",
  "key3": "3R69sdMuS9bX6v5bHZW1dMQ5ojUmYQLrjQmuMgjotjBdgGKoH4gmqMVpK7ACyVwLFCTMLeDomM2Ch81Dfn2vrR9y",
  "key4": "3SYhWxPgm8sSESW75eXvTQvxSUApTyksB9Ke4aaYjqrHSPx1yucyh3dcSXCiVNXmNFVV3FmPhhNohZqfvZmZgeNs",
  "key5": "2QRivuAmbZyQ6AtosKKW9ihBmhZwrxb35uEs1ipinpi6HVKsiX6WmSUTpVbvGW6svqvWEYBi5vyW4YdMLmhaYH1x",
  "key6": "ZKWGSBmhw4oN7Yp7ZsHZkB3ZT5XPxPK5atg2oJaM8hUjAeEJKjPb1LYGubSumB1Wb1wv9DGJPG5fjhoEHHZ7No6",
  "key7": "4bUjWyW3tXbbbP6tHTDVBSzVVdDRh1boUvsmAhUPCSKyRkLSVDsaWTz1tZPT2BPRQ4B5xoMk1ZwJMWB1jZUVwZsM",
  "key8": "2MhW3DAYakLe3KZb5wA1dUYdiwbLRNShAHgakKEHit8JJoyYUd87RpcsBfuK1nQyfiMfw8nEx9Mcc2fcNj8Ymwdo",
  "key9": "5fnh9AK6GmUybN7htgtNSEWPF3oMXaCbhvekMXrfgZUG3vWEoNqYbhMtUVTiXJkLDD6wtnV8PPNnXbRUftpyh48B",
  "key10": "4j9KQmru9SsHKzdZWP1U4VFpiEG7brdFMwMSQ5KHPFt714WytBqUxtzQcdt7aQqKntDuysg7RZ93yDVb487ibMXV",
  "key11": "25ETTUkXe3hu4yQND3ne6R9KxVJbYgLB2dA3EQqCTBRmX3Yvj7nXaaZ2WqN9VjXfHsZU4J3TiABHzJJwvn86ojRd",
  "key12": "5QLenn7dwUVv5tEjesW1sF5SQSwQ71tJz6cGFA68h66GGPD2Q3efZDnybJQbLjznQeCst6TjnbBNgzjqDSN28QCi",
  "key13": "yUNqUjvMW6h4wQLvMQyefJKtch8B7sj3ZNaRiJ2zBPsXoLyK7DkqbrFXn6iAp58ogtihDs7zFA2NMcvuWncQwnJ",
  "key14": "3uazrSUDcQF7KVDuFeuaYKJP8gwWeNyd2hKreNWzBFfXS9qPY9PJz8NsBtFM2FuhDwZHFB9LV9zK3SsuGnZJtMDN",
  "key15": "5nghcDYdJHpsLH1rCAuQVcxWUW3QahBri77dauJCm9KQEPFKTLLGe1Su1YUddju3HhRpPCkuZ9J4DrPWt9xduPdp",
  "key16": "3otQpGhtcsJg8xo377W4ojUSxuGJg9enaxgYgWWPjfBonHkYFcDPJTsMZvSQYnzT5R5b2XMFatcqn9tuZMQUh9z9",
  "key17": "5ijy7xZYfQHWNK2FVvDE7hEe5EDhNoNw8s8cDXd8VkmCdefTv6fQb76kEAYKgNtJrV6qM8ciFhvY28XLkb3w6K1Z",
  "key18": "2XfUe1hz34wVK4JxKsLeV9SEqYm89zXzDYgaz3Mz27XfNuwWYEHoCEJ4Nw9pXRjaMnKnQvJ1CVtbPSQguCMGkKn7",
  "key19": "55tV6dD7CPqzBWVwpgNroLUN7FnuB4LjGd6PRSRhWzxWVmNSL7D79iJGsw6KXJZZ75y7bi4FCa5cGGePhmUBzXei",
  "key20": "63DNigXkEMtyJ42LXJQnrpeQUqCX13DHSdsPnmLtyRAQsYFQq7tSNpYops3vNyT14AbnRzW3zKi97prVTT4ZVvB1",
  "key21": "2chjqbZP6NqPCJWzbyNBZoQLzzimV7VdkEUGHjEi8BJc1vaJEHhX3u1si7CG8mXSfXBG87bLGf17mzLMnfwworLB",
  "key22": "67PJEh8mqRgdF4CDqeRBAWeY4q4RB9xqHu9mSUNbnyVNnec66haPidyv21hYfDnLs4aiZQq9HNhWgfQPhPWWKJ7q",
  "key23": "5mpmzikH5gYEsGdiGrTDfxiFNdnCA12RyrBQMm5Wi1R5zbw85ymtweR6eqSrJZ9F6p2QAX86E7cWmJpDu4AqC5Ja",
  "key24": "KDPQFtca5KHKbnnV89pJdP3qFcar61uGDCrVdNrCpoRyMpJoUQHMehfDRhpjV1rDJo9qCUtoSYb19Z5SbfnokEr",
  "key25": "2rtUjYvfutYAs8ZQGQdf6z8W3WCezdhS3hYEshBWSeaWDUFhdbea4cgKh9kfWDE9QCzAKkZGaAJorsSskkHqx1b3",
  "key26": "WAu5c4XnVwk1oB4NLdZ2BcadMtz1XERFmeUsX2UeH3ncbBcxqAFRvDVTR17SXhumfsdGdncK3LSETFvwEiMzjzk",
  "key27": "3nzXLrGLhR4aYsM9vVP3evtEdXvdWKRURC39CdwWfPc9q3ZLvEcWpLd6YayGXZPuW8rfSgZfpkkoEWPXciHPuD9z",
  "key28": "4ywDDThgQZh4RgWmVTzeHcEN7ZZtr1qjpg5bSD4PYuPz4Do6y7GRU8CMUBMpdfYYKkWEqFGGWkgCg9hbYuwuuXBV",
  "key29": "TJXDKmQBnBaFsdJEGrXG4zRosR5MGPxy5RVZ4g72F35qaLK2wHLBcDatNGghAmWPQzsjji7Aweh2FgMw8gyM6F6",
  "key30": "4zfmXmLmDDsbE6q8EXYcqsfwMHSPqqjGMJVQ6N1M6Gqwkq8Nmkc2v7nC1ywsDLtcSd1p1uZxp1gn4JDvmJt3UzLB",
  "key31": "2MPAZQqALespVtHQPZU36JimBebFutKvnZ3hMxHUVtGgziXjXRCH7M84M8415vBE9vWC3xF29CMxMKzpzLWa5tAi",
  "key32": "3BCSfX9HbJP4CzPxmUyfufVK9APRU8DkjMTEKd6AS5gLiYMBeeCEpHn2RUD65bHt89PjHiebyFNsK6fcxrADmc8u",
  "key33": "3Lb6gd7eKyrobUUrJuhahKBBUskx2wpz9PPgBNL9JfPd9g53bf2p7ypbPSqcfY2tVjXzPT9AgQmdRBKjG9cTvRWd",
  "key34": "5tKmubDV8PwztmQRDwrzT83ybCkMWRPfLHFAp1afMg2pKst7d9X7FaLJH3DsVZtvV7JNWt513R2yHcXxF4NDGiiv",
  "key35": "pJgZgXQRV3bJJHzmp7GHzPVYZPjdgStLxejpXJRuz6qvxfCJqwMC8o6oNmjKizfbaPWK3Ue6CSxDKYam1uY51p3",
  "key36": "4wc9AhaXsi9rxRZkSpG3kyQ42KDBHqKZdq6ezQvcYs359eMKXNpHPvQRnAhqVW3YCX5TrLhsXWGV5uktdS8bm14W",
  "key37": "5baLGRq89ssPwdLQpnbUyGxNw99prmVeWjbauunc1B6EBiZe8jDQL7tLiTFdSjiqN9n6i9G9uUpcWpBHytui3MWL",
  "key38": "21ys5Sa6Sh9wvymHaNW753YQR8v75f4PTCEBmewZfBrRgx3pCff8LjdXAiDMaCeDBco73UufgJfhdveXN2GWSceU",
  "key39": "4f935YdbLo9hL5uxJxrawc37cBvdtVhVnbNLvj3xDWqqX9bF4ZJgJFfn2GTxFqjDWe6GjADCyWxotqB8b5CXRG1H",
  "key40": "59hxwBy2Xu7wjZiP4e4RuzPpztdJNGAn9S78m8E6WSCsWVbDQHAJF8bewHuHr2NaJKSB3cnAUwThCR5Y6kNYGFeK",
  "key41": "x2yvQgGGjo4Ecpu6Fx3XTSuS9QUetuk8YMD7YT43nz5YbH6tkrys22ggqshzSu57BoJoNqqtsznjXbdRJc5euHv",
  "key42": "T2hFzei5qxgmesidsyoH4sxBAzqK6MVfuNVkzVt5jWwwtLqqYzA3mLjqF3uywUss5RMUh7Wy7Hr8hvKEGSL9BoF",
  "key43": "45znk99NmnQ6SE3392z4VLpTdii2eFpUL1W8Rku4CBzyc7riGzJoRdfLCCiae1RV9ShB4mzZQp64MCuMbETpWU3P",
  "key44": "3ysf3To84pqpFLxhY59garH5SzZW1atWX6zVefy2nyqxvtJjWF2x4qESrFfKM2QT57P5RMW3fqehBX9UypS9DVwk",
  "key45": "2otfBkPDQh4yQLapukvcnYwfLfHM6K4brXuQz9LNA694fjPWgyUPYj5xsUbFb3ALgNwo7gSWdNY7xH4c4QDoBtsw"
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
