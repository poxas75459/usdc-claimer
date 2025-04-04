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
    "37gDwLEdH1QfxsedqhPf3zu2V62wbspnhDcMWVZscyQ6dFm6ec6Rs56EtSeaJLJhU4Yj54iBYVsYeZdUsRAGouLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n4STZaiD7tWHj9Z1eGuhVLNbfkkpvZaQfMaX4KptDSmoLa3Xxbc1KEyq2msGFwvhFi74dJRgR5zKJGB9XjWneoP",
  "key1": "2qhNNa7wVNxHWCeLnVbPSvFoo5fBAQtqUUzycnu1r2B51b7mv3ReWXgpp1oaopfLWSfXe5Rq7FHbeXfranqp7vCh",
  "key2": "5mVYPfCoW251WcmZpfZo2NrXXQxdVkzpB9dh86RJ3ZjW35FuZfMpMAbgSU3DjmbRyqpHHTgJUHfLNJepMtJCdiU1",
  "key3": "3Q4Yjwd6XnCNPbaJqdaF8X3UxDSHMuyt7cXdJxzAGTWksYszPuAyT7cogAkiG3KeAGSnxGXoYwniLvxugGHZaprM",
  "key4": "3RapL4vszmEdHvsvbds5RjzsvU6nfMTXXL6pw3Dd8tq8xRmRwuB42hWFj8xEetjBrJWbmiyJ9A8wq2151ahbXxj5",
  "key5": "3F9pHyqNBaapJGPSvNKZ8JmkrCAArM4hQhZHdXvWaSfVPvgYh3LHprT4z125BNrwdt9AL5MfHuxEKjvkaiKH9Nwv",
  "key6": "2tmDJNgC99pSU1o48rt6LK7UjCpCjQkoyET7S4CskBfAvbRnGihr1dF9BxwBAN1V41z24252UEtLmyCMwo4yPrH6",
  "key7": "4bCJuGmoEepXATdGAgPurnFpoJZm9FYZ55ctDiJRxFk1YZvsjjbnV1dCGd93x78CsAo5pu6e3QdnwsswRaqHRcNz",
  "key8": "4tDfRfAKwYrgT34ixVAHwTX5AxGLFC8KqC8Ekh5xVWGepSvqQWKhNUVrove9nbEi9MemN9VPsfPWXdt3XvRTdW44",
  "key9": "3KDrUFJXuMD6a2MZgWFAgGZRbcmLeZdjpPTXGc5wkipQ9NPfyvbJ7Kz4S5srHRxCPUkwqWSpg59aTohTHSaQNVZ9",
  "key10": "fNfFFGYrvKDpTwrFYrBSVP8QRi3wUrCcawb3VDSZYpUskvCNidEzWFmbQsqQrAQD3N1c9bxDntJezu5Z43nYr4v",
  "key11": "3zvjoYMwiiLJ3SdE8pVg78EL7w4qTyhFKmFSHgcuyVhQ5kCHydNsAfou4f5VeEwgT5YXosYEG6hMZ3iZtLP5Gd4P",
  "key12": "5KA4cEVGYx5AywD3ms2f2KaPhsPa4k4cwyWsRZGVJTEBEC8mFyF3VHNyEidm48h3iuxYKGE7ZZcCMWZnhpWCYzVT",
  "key13": "32DgqHKRbVKh5H7z28q15m6iZiVFqf752sxQFhESnMFdzt4AxABJnTVktgQkFYAJnbraW5eDB4t5JpM3wK8SY5i3",
  "key14": "VTR4nszkCoBCvzADJqrCfEJ5XaYzJfDssZrPSQ65eNCGskrMrLNFwwioHCYSydiyYeqzTX5M2iXVn7SnRbnqKUu",
  "key15": "2vsYtaxoHUCGxBm1AU7JohAdxr9ZF7oU4m7Feh7xNmuDkHd7Jtsh6nhi55APiDSN5ShdfJufryrS8kU8nG3e1qtN",
  "key16": "36di9t8fKjnbH6RdBzgX4Gc8ZBtUiReWKDjnXQ6TQ2jGRQg5PrRkaVpLZR831sBNzSFd3LyeHJoM93m37135ciUL",
  "key17": "5NiCDYKd8jipeUKnWWqYYJMXj4xrqbWyzjEtuEsgqXJBiAusnE3yECEx8xNbDMhTkQMv4mJY7Gk7PvDgkPsdg3w8",
  "key18": "4Sb7FQB5LMW9cP9U5fQResiKwEUYFpCGqLdQEdNps2Hchsi3cDcVJvrgwK2PN78nEoMDy3rVZYtQTX3pBRfq2eqC",
  "key19": "s4a8MvmYFabhceDTF2fSfBUmNLT9UvkwuSjhFzcJ3fCPhJdhuNxBVRhy9PukJmU5MgrYBogBWBL16oEiv3VjY7k",
  "key20": "611rpKt2hxud1J7yzyv81qxps4GvjxrvJVTinJyPawiWGq9F1CmHhNa6Drbm3fbNWsMae7zL8XBzVPZ38A7qRwSB",
  "key21": "3GpVPWJgH5y9QXVJ8q9mWQZiQgGmdi5ZZUCyVDxcEk1ENtaLhb4pdrCdojaosriZqP2UJdkvsP2W9sAw6ShBMYhW",
  "key22": "2L2CNrARDNWasQQzircRkT81rghwqfQ7xu6yZeBsc6rsBxaQZZ8cLrqQCKg7kPQ4FB4kkg1sJJh74Kg5Z8nqop2B",
  "key23": "2iskLZBdaq5YVCDJqeCQMsBu66Bwzs5a77bNsEoWDM5q1o9s7aPu6JL1V5HS7mbQTjeiZEEDj2iRfWHQZVZNyc2R",
  "key24": "4CngU5fw4Af3xZUz6Jsrpsbqh1zjBDJGhQpGQWCf5y9XqRu8aKjQUQERoaEfuPFKaTWxkzs5NcaqcpyEYVqvz6tp",
  "key25": "5vLPEagwxkrY1WEbWmGCB1Hsah9EEEMLzgjh9jq4GDKSrsxwjkAivJfYwHY4ksGmaib7P1WCmZUhfhaYjQifQgKv",
  "key26": "643Gux8a1uGiddAPm7cEG38tA35SNrLUVhX8uDvWsjHyLSCGjqFt4Tncbxp88DPDz1dgF7LCcKjaSAo8YeayPEoW",
  "key27": "Ap93R9SADQm1zYqf2xzrdN8kWMeHpXG9ANmKok2xERY3ZZcvua1895qvcGSF3PGyZsGJoNvn9zWpdkYTbabtjtD",
  "key28": "4iW6fDApbMnmGAs966jrePXejWuQ3CYojcSFxrtxQjjvTCY73wsrhPCE8cjxajmdogLGdLd5Va2hpJndiso7PjYZ",
  "key29": "4iUVs2xccj2YsZjf2yeQd5C4CQRWKYhYCLkGxLfPi6koDe1ANw1dnGbgWZMH3nVwSM2XbyyN78BQX6YvB1aXr2L5",
  "key30": "8ysm4n4sGGJ6wReDS7PYCa4UCbqgAUEhoVQHYDnhS8mZbtxfLN4333Nmd3SbioDArmASGY43iJKSbnz3yczaiZy",
  "key31": "2XXJuQfBoVQZWEgMLQZ9PnKMFcrsywsnKc1vU6MUq2kqJtuk35nH4iHDsSCD4MVFfVp5YnuRxsabKVUwKCZGB8Q6",
  "key32": "36FG2koB3NQNSQqEcSDracr7jLwhLcs4mpHrbymX7RUtBsKdupPP7KE2Y2XxMBuJiM3we4p1qJtkEqfXT3sLgA6q",
  "key33": "3UqF67JuHt988xUpkVX1cYti3vtKWJmLgMZjmA7qyGDGpJpSw9Z6GJfw9UK9RN2xJGZQrWPSvxzLd2dSh2Yo4i7",
  "key34": "494tu3HAL1hryU9h1b9URm7mV9QBCksH1utYPWhJLhBtziqwqAfBEkTxafQN3tQBzbSt7rZ5ZswRuKKcgDbPjFJB",
  "key35": "3EHeZFeFwLhjwdqo1XbLACdUjHYwRQAfBmHeewVdtYhzcsboESs9XsfonTg7dpz8LA4pp8MSn4hG4LYKubZ58nXs",
  "key36": "bfGPiY59bbmb2asZ2RhanL5He2QY3Qu1uU1PRb3U46XjzSiddDmh8wC9wah9kwYn5qLyHr4vNhQoPcbV7JCCBhw",
  "key37": "4GbEFj6urVmfAfLZEKHM894UiY7Fj6CvehncPQTjiziDFYcDKY8wBg3wxGqNdjGpDuAhU7iZrqwp79WL1jjE1EKa",
  "key38": "5CknsQ2FmkivqPooNm2d5aZWSd74u6etsJVJC3vhVzwckaoqJFeJpYxJxmzszXT5Sskb8FaQbhEH5AZdk6Ecemwf",
  "key39": "5LBvBmyvAX5qzE3w6rxABUfcdwjacDX4JFX3R2srCCStnsMtxyrNKVXkajoKveBti8JtD21RXwmYHGhzEYMJVebv",
  "key40": "172DegvEb9WRmwQWEbWtaoSTaTGZnKiKbkVb9DaCRgp2fQHww6m4PQvX5yrpB7n4gfKG3eSSBj3zCRiavT5u3e2",
  "key41": "4Bht29W2y6pSwDCrUV1kaJFqwtpbMwgr57qiXZ5FwwhKeHB9pfWRis9kpXUQVKLcFNqgDa2MUk5wD27g3GdUTxtW",
  "key42": "5HfL5Y2fVKX4Xu7CCAAoMvZAg3caYNwEGAXnExxgEeanwvEirE3djhRT1o12Z4MdYvaKjk5qV7sMnNuVCmaxKnEz",
  "key43": "4RYQCFzHacESy7bmasHV7uZ2c5xfcbXbiVqF91QJ4YxeZGa9EQrZV5PvtfGHk8uR7GJQEcu4Y6jcphZQArYDugiS"
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
