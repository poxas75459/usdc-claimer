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
    "9kdnQjsYuFKnysC3BC6bv41kCeyFsrDY9SCZ223AuRhhKSbVJX97Y9xMzZc6wnZCpA1fY3ffhDRvgntSctuq46W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23f5x9HNGFfJv4Vuf6GHTidzAvwBrKZCFphRSSxdodrjzfN6oHsw9job4LrAyCuNEer73HSFSgjyLrUNJfNn1Cuw",
  "key1": "5UaJDWTxQ9TaFGtg1TxtECYwvwPE7duT7KCC7zWh4DsP2Am9q5adEWMyrUvZqhP2YgXwgMcvhZo9RFG9SLeW7pfr",
  "key2": "379VK4fWY8R29B7GxDq1fnEsFgDPnnChcTpMunBpT15NzXVAyeJUrFNArBMWiT4rh1rE8zP13Pc4BPCsXciUiHXH",
  "key3": "4F6xrYC9Gmgv2UMAcrfRG79FvjhKGoG5yZWmx3ijFUUp2hkNC76A63kRMtiJQzp5z7vEDiaPzVPFJrSt41QgiXmt",
  "key4": "4D92KyXzm3uQFNj9QFWSzeEYjZ9xKwy4b3Wz4YmSzjxAxC2J1StWLUUBSwHh4mw3jLQJEAYDAabWDAo1g586ZsvE",
  "key5": "3kAPm9DUopRfUBjMeRuQuqcjXs8a8XJuFJNNcx5MXrNzezrzeaYdyr2gE4PnYN91cH9AsKuxncoxt7gL1ytZpbVD",
  "key6": "2CPVTZaHSTjNqm4A2LGgKaScY2XKXnLpQ7tEZ7TvLCdpwJEwwJjabLyA3hTvumR32XFHijKP5ZjPDp6DktNEknm1",
  "key7": "3EbQApdkU5VMAsEetDgL4jYUcPPM11LTUeSDUjuC3B3BAjt1by3KLU2Da6jDE65RnVchk2TUn5qCGbLpUEzHakQj",
  "key8": "4CczAYfLtV2weqiqT8fJjRf4QcnqetCAeBnmw8NFEXq4kwiW1bivCAxfSeQ2iuq8wd7gyX4z8ZMgXAU8FHe2duq7",
  "key9": "b3zgfEYeKDfBx2VsNbaScGTN5HrctqaVCMUpDQU2ucJxsyWmx7nX73YzhabDV3ErLSiR7ePKHcfy248pumB9Czt",
  "key10": "4wyHabzv5KmqKHXwmDTJttNxauetXbyq34CckmeZRTMDmucodLrdHVhbHTbVHPQZ7ZxwaMyxfN4M1yUvytjFbS9X",
  "key11": "5f75bY9XZvGs1ewR8pnwbthCWa3NLtrXbc5JBAioTmBGXopWhi6RehBzKtrh56qBSG5snwrJbUUp4bTxsjq3Mpxq",
  "key12": "uQSp2YaxTRFT7UGhvhLH2JFAH5KSkqhGNdQNr6vdqyJFMBe8SM7WyetL4rnDTfjm6fVmdhHujoeDubnpqRnLXa3",
  "key13": "3U9ECPmLdUbBP1VSmoh5R1ZRNJRMt5rjKi1Q1bqjQ4JBFuqUci4oVvT9y9yuUXaDKCSzuomLF9hVwgWPwiprTe8A",
  "key14": "2needQwjvEAL1VLMiLdK8ECEbv7J4kDfJSfNjvTa6j2EmJ4n2rQFDjhjaCdGxrusiSmivgqPiRquJYq24rE2FJyD",
  "key15": "5Zxn9NicfNoi7oRkYdUm7mdQWH8d8De1c9HjWtkJibid3sUnszdYnZKX78CFcCEKnqxFVrXdpCKUdBPTvqBzqp9P",
  "key16": "4oqxKGgcAVRoabpaDXsAUaYaH7kP922fdh4GAfLgfvYk2hRDDvbLugqkqkEkND2NoxDM4iiie17d6Uq5ZvxEqqNq",
  "key17": "4BGhPeb8vdNYjJuicCUanYuebxTajJygAjQ5qArqoP6jiv2BeU5M5kecVQfkMpNWbkyhz3sN1nXDr5uUciJXX5cM",
  "key18": "CxuVxXvFzi1Ym9S6ZZeeUbjfxUgHtys5J1eCYMzMwpFyo77tZKyT21YZnLZCxXgXPvYfGGRTT5St8qJecYUpNGv",
  "key19": "5LFksaXh1etatBUPzcVCreiQeGjhCzdoyeNoGcbc3mzb1iv1NT2QPdNguKySvdQvKBGFA7RhJLf9ebncE1thGvGa",
  "key20": "362m2BvGs7hQusqcGiNR7aoebdSCPrg7xAYiPbCjiePB7rEuH6cciEo521TCBUq9bp3hHxwoaNoPvh8aByYREhAN",
  "key21": "4GgfJ2zobcsTJipJFTYDHQ2foyQB8tJsanNby8RGTkpkKqpU1gUc5iWcyLjEuFVpxPyX137poUGdHnp9gejVNyQw",
  "key22": "4kGq3Q5t1vg64UDtig58QfQ3Nk9FMGe7z2UrNb6jXX5XsLfZ6b6X5vL3PJqK7RSH8PywVqCinb66PakPKEag3LJx",
  "key23": "fb4HEhc6We1YzsYuN1xssNX2ojHV2M5kbuyC7kJNEpZEopUCQytNGr9m6WkX1LRDgp3tRaa12Kptp3rLcqNr3Ky",
  "key24": "4Yt9ZKyEF4bDcqTumTNCnvyCxojszuBobugLnE95PgWtfGPoJ6rFtqXaD3CLUsLwKfew8J2X5Cp7sqP8di35uJ7Z",
  "key25": "5PiZUTZDMAm1dbaKGkzmbA5gQBgRZfNyQozirq3vJyo3LcxHLgGKi9eSsz8yKgomofMGDGBBaMsgcGdpcfSFC7jA",
  "key26": "5f78C32jmSYC3eebhwu3A4AhD1m4Z13SER6v31W5AWMcWQhi2mc5hCeREadeecHUjwU8cHsaLYBfRcW57V8KHp9v",
  "key27": "L9wRoZP63R4TbdAC9mgtd2VaJvWP8D3TekzmEQVfqpVcuquTRWuXXSje7V5Y7zVFX5rEJAKdxX2DkQtoU7y6JVF",
  "key28": "3Sn6ejEAB8BSAskNRBKudEJoD3RWBnHYvaMgzrhSNju963hmpTftpEDt1V5LAR9nXpFUQh6jeM8mkb4Eo17m9aQG",
  "key29": "4UnfPgn6Hn6Kv2TEo4vwRLuQJRQY9f7gNBvy4VFYv5PRFjdsERWmrkCJzcTDWSwBYQrnD8DUyn5wncSz6hazSaDt",
  "key30": "5aUCciETYzvswamkP52EtL2ggjh353U5apqx8pGcsXUxUHVCMExznWvCTVZ8ToUmD4DxYsqvUUx3FKoKFt8B2zru",
  "key31": "4TCH44bqoWbHVMPZRExnCGtVcLvyzwukm13stfRnNgwKQoZ6hJ7HHyJStsRrACSipPm9VUtX7Jm3ePA4aHSug1JC",
  "key32": "2GpCBmQJMzKzUyV3gY268GeELuiWq3Mwz8vpqcQ58UCNhRbYAXWMKrgAiNTZBTtkVJ6szVw2ADqVadxATAtaeRLU",
  "key33": "2jpEirdDYn8vQSQapRmEbkpXKA8yAayvpKQhSWzCz7DcHNi7iX3FAxsu2as2vyfbpBkpBWM4FBTATs2NXj97P4nJ",
  "key34": "6RyKnVVsB7feGdkqEKCFWCDfa7wJcxHtZfds5agGhq5YinyMzqsf29y4KZjXdnUPMMp22StFU96TKcH4E1W9G3D",
  "key35": "2ima5VyrGFyZztSeKwRzZpyzzHqnAXRZpxAiqsPncCqSXXTcnmuXFyxbK5nUAAvzWyzBHfgQt1GFs8YohwyHtBrR",
  "key36": "2GBeSn5cv6ndR4hb9d3rG51S78cCynL6Xc3DEpZtcozLHdGHKSrupeSgFhH75arjod4GShd6B8ZhP4JDTgdftuuP",
  "key37": "63qiZ6UsLvq4UmfbCWhUKs2Dt4QcufhU1faWto1XtnRciSeoFbnKbWWnK1yGP6nGNoty1FuXaBEBU1F6UDrdkZmC",
  "key38": "5JS43Fewxgf7VTwVViS5uxaGgMAarkPWALSMTGDdd3rDiRR8df9gRUPAf5DsF74tz85zc7fefJPFUo5JdJQoArzb",
  "key39": "3vwZyaAGRKcVevHSH4JbGX1VemoeaoBjejAj3uYuThfTbHsk3jDyQrgT95i2nVa7xzaqCYXAuCjwyURYkbievSaL"
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
