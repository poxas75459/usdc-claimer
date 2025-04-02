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
    "583DfNDTcT3sRyiUa9s7gYUXJDYxNSriZnmqFQPL2UP18wF6yKBrBGzHMnHvBmxtLaLqpQHk6GE358R9tWyYWVfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3euhy2pYhEiQMAwhWRb1koE7WMZvqfyocQZYK5pD1uPAvEiEV89Tz1kYsYWZ4sGu1ceJYezSArmrKQD22VUdBUR5",
  "key1": "5cWEMTa1EnCgWFABnqnzWXypWzEydYDMBueo3wHyhfFGp7w26hnKhzTNiY76kZ7VsKQxuS1Wk6C5hBqgfJi6meed",
  "key2": "63EGUsWGd4Uz1HZEBYo3zN7H3krFcMKCAnvX27hxZGXcDsjVm2p8iZ78K4W9spF3JTTepjmkUZkbL4x8aBBgdWeo",
  "key3": "3jE7NLDUZ6sDqtaRowxPgbs7jEoN8KeDsrRrhoog4wCmdRDZqh2Mm7NeWWsMcehnxhjJAGbG3K2CfedqAsFz9ENk",
  "key4": "31eaLWjT3awWYaz91w4KxeEP5uwSoEf9dFMs6JMbYNF3LnuYpeqnXVJmMt26he59sB4GBwoFawyM8eGsLsbJstd2",
  "key5": "4V2SRJbPfCcuffdZoYErkG6EtHLaDioSzLSQgEJoNKhXC5mm1HVLsmCESL5UMKVDhxKt1MoeTPZCLwnXTY8WDtvv",
  "key6": "u9EksZDaHwPgGsLXG4VEC19XYENWxagdqvDTwCvomhjEZMB2NiGxeAQB1RPkT3WaiueJA4MCjnMzVVyjo4yFqJf",
  "key7": "etjxbutF9TMibyB6wJ3RcR5ZSHoLgoFW9RJg1MVJhr3Mox8DRh3wYg8LJDSgfp2Koy17DdNKpfCokWrTV5ELpLq",
  "key8": "3fvwLhhUwa2154NzrQ79F5es6Wc5DP3m2SZcz63iPmuSxaVdfcBDfYCefkzWtLbow3evW3Zhgkd8ZrwBGegvcSdi",
  "key9": "5fR6y8t322pneXmAR3D3w9Ty2aR1HmiYBd7oFguVr7NTtn3FRCErdST3Xmu9xe6nPbD1RzYNEGctWdYGH8kdofng",
  "key10": "Z5o5xuwb6SpavoDYGd8RDhNjeagj4dM8u9pB71DVDkYtpd6swHhbA7Liyo2QYPQWKpGjLccxWze4mbgMszh6Z2M",
  "key11": "2Qiv1SwHP3v14yrsHvDRfAfGgmrR3GcyoK7aUPjhqm91p4abviLuXTS1WDfrTDwbbwZC28QkqoBo9CWnZC8h6bB6",
  "key12": "5wyq3bP1yNTMV7Q51jxxBgV5etEoEDKK1bULG1ricnmxsMD8UnNJLvLkRBgun9jrAnWAeYpMv7yr5shpbKUyimL5",
  "key13": "3H1cvH2YfGEftYfDdDpQM3Rx9bdcmu7xt9aBZRJK6b68ZMkndbjM6YkNEhCndu7jpg7V6L1ExsBAniTFq2SZESSq",
  "key14": "3NExpfL2N7rymVbW88UyrzjwtnfwxdYFhcuzRHcx77rPDp3sJTeo5HMgaNTfy9j8LggC94Vf7uyVfEQQZiBvHzb5",
  "key15": "onW1RX2b1nKPoJJfcZsVoddZQfrrbsqonqUJHkt3qhuSEaxj1WcMpLsS2b6saZJgwC9h8RDr3ZKT58hBznQ13NW",
  "key16": "2AzbgQ8Ze1t2QPFZLxHueTtVWieu9rmHXJDv7x9njchD7RHhT1Sxhz6Wgx2p6xY2RjRXj73um2cZwB5xnJCVrEcx",
  "key17": "2cSLgmqxdBRPeEMP6jX5rGZCAsenwiv2p4PYi5B9Ri7rwJhQSG9qipqtjYFahTZmTVhFUrF9sqD6SZyy93h482nX",
  "key18": "3jvu7hH4YUhHuf372eBWC663T2CAwnN9fQXKpJsuBhp25qQHydW3SjkA5oqRmksgFBpCRNNxPDQc9EDut6DN9vvP",
  "key19": "2HQcqMY94sYdANKLfoLRHtDWkbSjrP9jvgMCSSr241Yn4ovZ81v1Y1xr7zgViV1zMKNhmBKpSWkMhLNFUHDMbKAi",
  "key20": "67R6Ao5VX9N6uu7J8SreMJRNhhMpWMLX7GYtAA994exN2gQQMEbkcrmdF6eKuEpS2FWosQ1WcgwE1CFDCJnKnsSk",
  "key21": "2uLGmj9srbsYviKmTEzveBD3Gru63hw2AkUFL2gfENVHrKLwZVbRYxfqC7mrfJT2wALH4qNvLCTLiKvdRR4FBFUh",
  "key22": "53kgvrqFaJfnUMiQc2r7NCQartrtEj2HsV4PFGrrrR4yrNBq3LKHNSdWVNsGi7NF7Y687GEvTTXge15vvLxSTxWr",
  "key23": "5GE9BroG8fN4qMhQkXe4KBbMTFL6nBWKmDZCrSPBkG6vrJ6f6fyFAWeYHVW6t42rnfsFNnP4FGpV8Bi5fdgXZGY7",
  "key24": "3VCPH55KsvRAJeYbjBnrj9hcP6if7CLQM1ByrWLTqwmERcMc98TLTqRoBqu2L5g2AVWSnyAR5YmfZoGYQ1HtJkDu",
  "key25": "5MZUKwR5n7yNuijzVUDEvbg3sUigkGTgBeLn2QnypR3rR2FKy4rJaQVgReFuWvt9PhZyBipkCcnvumXRmrbfJppJ",
  "key26": "5Phe8bJFsiPoEB8kwiXidVARenjFzDikchZZEy6v9oHJWuaCWL1sZXyQt5wAcGhQFf7ZucnJZQLsYvVKdiS5cxxu",
  "key27": "4agM9Qke6wvhBVRoFme2V5nQfa1ic6SAoZMPjeitmU9X28krNUSnyagw8thjfKQx9xt8UPLpd7jbLCfkGpZaqg8M",
  "key28": "5CpJmAWmX7W3qfiAzWXT4uBQ9JDj69xqcA1QbmZu3GpwWJxXdiJeewN4wREUCa7fdbYapxpBAB9mJnXWArXELS2c",
  "key29": "2KandfLvM9nJLbHhjjD333qFQyqBEt4iGFyKXFWpGDXPTRzKDAA71LsU5F1pT3ZZCUQYpA82M7fTPAyT8eFAYxkt",
  "key30": "36fgTLcRE53G3ZdQEe348qY4Dn46UgCmYVJuAyjr9bfptidKZdzwo2fKGamKk3rvmMZjQC1Ck1TYkKsagdUcxJiF",
  "key31": "4Coy1JjzF9s6wKuZivrLsk6Z8S1zGnUZE1bmC8ULF5i8jpNPkpkrueGaWhUqt9ifodun6AhjVKm9FhTBqjNWnw6z",
  "key32": "3QneH8Bd5Zba5piXE6BQFtUqjy2rVm3TdVqAv36dAAjzE6KKxH6SP4QFafshi7XBNUYjHuf7s5frmaNhZVaVVVjc",
  "key33": "5qiHWY8n489ZCMrLKke6MTEsXH5PkuFdYefuKG8Qq5YrJm3Y9iLbwFYYyXj9xoSEiYgtwQPbX8daGkASRQgutYzv",
  "key34": "2UCJoFx8dSBePHyXb9yCUKjZxiJGswuj2mDsrr7DfZdsdnpp28fk5iU7urCTdg6sk9exe5W69MQEZgt3zh63ZyWV",
  "key35": "53i9YdXorxLPdgL6UjJaeUxCsR13YvfpHDL1GDCxmihrEemoWaos8yx1nddPJ7u1YrrAgknLgzWoSPxneFg2Ro7L",
  "key36": "UzsagSpwGSPDh2iWSW7v6kiSWshRqxFufTM6DT2rd63w357GzFRW6GjyF3dtveBKi7bmTwsihLcY76JxWQ2KQPY",
  "key37": "43KguzMGkMUPzTqDMQaPcYD7SFKNXwv3kpaehaCAeFZL8U8WzNx8xqCHgVKE1Rh7dKRiNofuJarqCLnnnRoJszku",
  "key38": "3PvqpbcACXhguLfjdZkMuCdb8hVGBcFrgj4wFrZZg6fYiDL9QRuw74hGfqwmuGuk4xBnDLaDCkQoE4XRq4J1eYY8",
  "key39": "3xeqoeFawEaXKh7xupyDdszq6swNHkXABpBoHPhTs9oBEehKtJ8EnxYTGcvJCaJaYmhpgTKvEPmjJuLYWyDGDUb8",
  "key40": "4DVM2sPaszXr8FdhXc2LJaE6VcCy5ucyz965E6R2bFwfpSCduoyaeknBRG9Lr7bMCrD8mfWFhP17Fd5RFVkLmLPL",
  "key41": "2CN4d2BzNF8MJZPoXDY9XR4Z3PRAfWUufcYRqTgMsrwWTFgmtSg8nQnecj3qAXTsWDQiPsEDweA87nqJYtVqa6ZP",
  "key42": "5KTnvvKy5VVi7ippn8pTZ6rA18kS8tfvCTrPwKeykHDcUdRJFZpqEjtdc7H8E7DLWHWgzsdLEeRtY2e1YjNrLJ7n",
  "key43": "59mzj2tiThz9NfdkKtC6dJMrjmfaBqu2baAbQwnxosytzhiQGkta7dqfFVmLGyZLPQ3TadZYQ8nRijJDh78Vfp2x",
  "key44": "5MAjYtkvoARqZL7g8AiRRt5NpLRxocpBdvGt3Aq3dZZbAw1ckGf6H1qi1S3nNF5RknB4eVHshkmFYousZuyRZr7J",
  "key45": "3swj7v1u1LLMuG5eu1f49t8ykaw1RqhkiVEfBZkWTbyNXip4rFixWCfrd8y71HgBpqbCNkfd8R6EWZXxRSVh9qNA",
  "key46": "mD2zLBgJYcbc5vu5Mv9Z82vMGh8sLSsV1jNM8KCWxZMLK3yTqWGHJkwG6aG8oxHCtqJ5QwmJUwK3zG9DVb8VY71"
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
