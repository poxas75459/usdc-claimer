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
    "3yHdKY6HCeQJ8W4kLkomNWQt7EHRtpppgYJaDiqSPKquyG4vyBoSkhTWNRi6SXoSDtaxaC6Bh552suYJKRtPrbUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42jjR4VFwMHVC7Dt7dbLLvY7QDXkMerD3XW8hgY3YCrN8JesHEuVLu18Jp44Ma5SuigFbgNby9Z13eddkGMEctgk",
  "key1": "3WDqoRBjBDtj9z1CaQP4m7m1XWJ1JJrNbwhFx4cFpFJLXZP1ooGoU54RCnHBmr6jJsNA5jThwYW3FHTaZoYdY5YC",
  "key2": "52uGNfuCoTCegej8H3Dvd1QobGzYbFXQGPeGiAMtz66xRcK6GPdrgDN1ZZB9ZpibLKfCGAAVGip57UzbGYWBRmGe",
  "key3": "2xjuUKuE3Ew96VaFyoiyckeknhfbVrC8NewKZuaBMbnqZYhpa1E2QtJ6wnQoFUFbTVXjsJuWSNN4Jte2RsPHaYRv",
  "key4": "2s1QMe3ZFHUFnRF2tmpoqu2V6gc8TK1o9azmmnJDHjuZ7h6UbBiT9sutZq2RrMF5zrJVckMuYvdLwNM8JM71E8iZ",
  "key5": "3WTt4jAMY3eqCAtDYzNaHjLgxhsQst1qBTmHjYsvsXP96eSFCnC6xxUQxeGJJpTsCr3G7KshnAaMB4CNmBkfL8WY",
  "key6": "5RdtqnK5T3MPWpXHJKf48YmEHpABxXkjhenFLDSufkFYDFdKgEzSWhLGRwUsCAqXsEjqYMAkdeoticp9uvhJqSDa",
  "key7": "2hCLG3RA7p7DDw5t3gkxCtctkfHMeABdqFv2ii27LysVFVgNusxGPDed3k9HufTWuMHD3m5nARFY7SmF6UKnNd9d",
  "key8": "31iic12rLttV8HULEA9HhYVnuZr1aKvHqudWkKA1TEhdRgoecDDefJrZ3rnpQVKnvCyVqvyUe5eXGutynh88FkXf",
  "key9": "4B4a9gfNCXryjVX4uG4z7axTiuQiv5YBkNhx7t3R4dMRszbia4W39ANuKHXrBS3xKZtNBgDwQpt2gugUzHKdVt6B",
  "key10": "4heJbNcjksJiaZ2JtxvX9qCPfTUCaRa4wb4zKKunjkKQzxgRqf4Vrdr1XgT774UFiCfhxHyGZDJPbZMKLPbrfn2M",
  "key11": "Gkdcxn3kk9DdRBkwsuR1Z3TNfK1swdV652W1pp9isASTdnQeWkNwVWHTNnniu8Av7Z7xT9SV3g71ZwGrgXHXmka",
  "key12": "5Bw65P5ZQEnTEZsTifprzxxAWNSC75VzpBrDGGMkcgmpy2oYCvZ1pyHNqMuvpSMB1E1rBvs9KGYYTCB48Tf6coaQ",
  "key13": "4dHDg1Bue6BcUNrsdZXGhE7jHpGC4QQYMfhVWsYTD17Jor1ceJwjqmc9QN9GQsUZomHZyt2yryYAhiLmUoTURKPH",
  "key14": "5GBrbG4RZQ6NSVuBmhMVKQZVdYNKJu1szabLh62nzLJA3UEtymNu4x2gM9nHR16iQ6tFvEfo7CHcrqnuWfbkYn9Y",
  "key15": "2ahwDpTRMV4dJAwm8jL29xp5sDkUgJ7aCY6t4gvYQaKjXEXUfa7E8P1DfzYxBA9mNeteRLybsFteHXkkyvHhgQeK",
  "key16": "3JAvnFh9ntvfjWY4sugmqXV6QTLTdCTnyNvjnRNDFQo85GNwtcj14cdE5P66nx9kBNunbRFkP1jEE7VWpqsr45D8",
  "key17": "2zcxRocrWzSEs9nZiLXMkPniLVazxZ5KNif8pcf8hCX5NsZ4UUZRhpTcW63zYce9DJWDXASh6r4mfHiYQE4pbspr",
  "key18": "5D6JQd9Dw7oB69seaH7whmgRS45XNHhKfsYi2c14U9d6oi43SyV3XDFa9fZJiircEbix1CKL9kNnvrVLZFFwFmqg",
  "key19": "3HQ1dNchbeZu3Yj98TcxFir1sZSU4F2nep5m5ojUJx2T6c6ourAcQHDB73YkwV3aq25iCmJTEYp7QxUMrpN4UCdx",
  "key20": "2dbQhRA9TmNkvWnNu895LSeJH8Vc7H4JmRVJbvkAAawSCDJoGbRvRnztuh8dWa96C9jX1gWaWYPxPf3PC3LRcg6T",
  "key21": "C6jHWb8WsAbcrYAkjWFY8yQURMgMFjf8gPTcHUCA5hEFvG1dT7f9C7WyU5kFEDmnEKgShmQ2UXqdkYX8rNdfMFL",
  "key22": "4KYpcUSuh8mPHmZ6ARQSPa7yB1EyXt7hRJ9FRXkXBFzccr1P3R7bx54D4KoEGJsqYJ1ADRVqoaRHQRuJ87YWZYnh",
  "key23": "4huyQNefphrgQRR71GfignbanDjGtAHg1yLZW9dbiiNj8WQmnrRAYL7csnLNFL8P3qP8zPhUMFowtAhAFwhKgRTU",
  "key24": "5MPxZhmf8odPnaRm9vaH52BKBMHgL1fx4Qt3vzfwZqiRmdxrfxhMRsCYXnGcBaY4UCWVX5yfZ52TcsWksfmnwHjH",
  "key25": "5fNjmW9eHvXc5igAH1HXpQW9y7K7ATsp9AgACfisNVH3bPx7mvXsRRjXUWGbPrQTEChL5WVnpsqiLaomo3EU2yN",
  "key26": "4ioKbFzHk2zMNFyWkyhexnbb93v8EWG3VBZy3smpmXugc6WtSNVahHxkcXbroWEf61GEd9gmkZKdB5XmPubkGZ19",
  "key27": "3NRAnugG4oLn5xgHq3MukTKuTg6VQAGU1wyoj2ML93nDGLwpvkTLP1yq2bTuyAWVvj98H929fLz28ECmA4PURuNU",
  "key28": "qvFriMqxSUBHEkvv5yQRAjf4nPiXBBDYAWYatoqQDu5bnEaQ8YcotTFasfQcexRrV8mQT1c4Tpkd3m5YycTDj4W",
  "key29": "9fytAREUicrAZsdxYGH8UVqPgrjCNm6ozf55LddqFRzaVqnihv3rsua7YvVRVFqsSaicXQ1374hvrn9mkBjrB95",
  "key30": "2cFjrtvAoGPN4VvR9M9uJD4FNAz6up21DMzZx5eo8ig4UzZA5rThN6HdUCg4PwEme3eqTL3qKrfoe53BbxmnbrPS",
  "key31": "2jNfxzjviMz3K6x3t5MbtmDn4CNgvmGZgU1xvbVh8apdR2KDoxTAJMiinu76LQsicD2T48RF57Zbre6E98T35noA",
  "key32": "4961Zk6qcoinTFV82QirMCnKmfYn8D5eE5VFmi67hhgkW9ByRxozquMoWhdeh1bh54LJFqK3AxaneMEDeHsxi94v",
  "key33": "2eD5KfrT4bRdLPsV7ynwFVYw6jKreWbQ43KSJrbef3wXK8gAJtkKBSsSkMdXJm3wJu2nzAhzVMSzDnjaFDKQFpZM",
  "key34": "4wJHtdxRJg8gyM2Dk7S8g4QjvvAQxt66rQh2ZbwjAwDkLaufRZwr4zXPH49E1eDpiG4ca5PGYsVfoxP6RtwxWMXn",
  "key35": "3a6kAbcJcut6mhtJJ1TDeyqCk75gGp1z9VCnvW4C41PjpqE8T9ti2H9i8k2qLKPadHL92Dyfry3gyWvxkRGRRnyo",
  "key36": "5TuwFQQ7p59Z6EkzzyD18pBXrCYGVWvHgSEH9AbYurQ94R9Y1WP1dWhDqQyUjCfCgwjtrEw5pgiYnBryVDKPm2Pj",
  "key37": "2Rhwh2MbGdF83DTMbWJymRXVSEyfiNk6wLt9hHdA3Nshx1AGNt3k9ApHNYfeucPg1KHoipHbxQPNTrV9RRyWKy6o",
  "key38": "4i9wjD2T4wmGiGqKsL4dZaWrjJBPkqxAWWnBKkgPZrfrvz73gBAewJUGv6gWvNqzviWWGFF1GFsUSYpMDCJ3LNBB",
  "key39": "2Nq9u8AiNLmvfWWJ1q7VYHUicqMNYjxFhRtvqRuYqwn3ziJ5XvyXGzNxs6ZNxRDTLJxZqUAG8scJPgmtgXQYofAa",
  "key40": "4FKmQ1KMzjDpe9tTfk4L78CZettfF8anWj4zVRZTseaduqxvpmX4aLL11gz6pavWkGzBvn3Y6Lqt3zvuFtp68Bfx",
  "key41": "3pkzVuSVvtKBt3qMEVzLhMHTQ2LehUHLodqn9WEahFmMxpqYfqswWSBGj5uauzbnMbMVywHA7Zco2qBWthcJegEn",
  "key42": "29LZ9j2ZMCLVeDCPGipYPzvhp5pDGmHoy6bidjJtWF3ighMA8LokmZEGuEhMneXndEkXwsgrDG5TAmTH564n6JhY",
  "key43": "4rm5wijL64skEwxDQFXQRrXYN4BZqgmmTjmD5k7rdWJckWrW2wjzqHbgDHp1j485xyqpjdFyD6UYQEGiM4xco6u3",
  "key44": "63WqaSvoMbcQLmrinkF2L6hdsq9rZwA4pWcR9GcX8Lc3Hxy3jjEtUz67i7mYWPTvmaPmY98xqC8qJGAPoohjRPfB",
  "key45": "3zecG6AEkvXv3nLinq1u9bCU9V685wiae43Stmk7CAatgNqiFmkJ69VGiRjMV9p6ueQ22C1rAuPWNrGfPQis8ww",
  "key46": "5gkEVRRnrNdRYXhjCvZEr1FgbCrSyS1pj1EgqiRrUNJdDvtgixroKTf9F3bZG4LGUKpCSRbHxuNnLDYskuxq8AcF",
  "key47": "5tczccSJm6deV2LfLGzsJzEA3CF9GF5FHdaUFH5LFxrh6ZfgbBfSYebWpUPhaD4FEbJp5Gu4hQfVYqwJGzMUFaj2"
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
