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
    "28MVrbmZMDiQJ8hGCrT54SWjPt9W5oaANKiTXxB78jvrwdxWrtw8vp5uadGBBNeT4uuVyEbyfYxTjAvEVmZsdUVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QmzxMaXzNDTGaAqN9ipLdzwXAjBzdhencFGcPyxZVPb1MFtyFPPu93B2vQ4bX6P9g8ESPPRCmk4aJVSKKdeaHBG",
  "key1": "d4ZLAconxK1KvcZijnrhVrb4Z2sZrBD33YdiSySa6bbYJrfBrcRcqdbFrBweYHCsoBMPEZ41DnbXDgBbCasM2Y3",
  "key2": "Js5zgZ5UekWBuC9jiq2egG4SCeFtqvv5scgnUPY82QsHTYZpE3nditd1SLcbjiWEd9GBh3c6yWAW6RN77PkWufk",
  "key3": "21kNQ6xdew3VuAB2FQ3Zk93FnMLtzC9rkdyawRC4wGw1XudSRLezzyCwNo3JqqKUhxyCJWTP5HeMQJuF8PgeFHxo",
  "key4": "5XQqbTdnGTh5XdgSo49nWfM2AqJQRR5DkfuEkQmCPfBhdFb4LL3ykQgFR5apzA3pX42pZE8xGyfE7r6Yn4safkjq",
  "key5": "2844comJTmYHvyuBgphButCB9Gh1jBmCLxRmPpTfB7FWF4YpcRufoxBwbS11wjEX4vhbu2iLU4VWxRcz1rgcinMD",
  "key6": "MMQNSsD3sM9kv6CisvF3Y6NmSKgGGB27YxyfcEttCD3k5gaddY14Db8NsN63hWNjLNxSfpTYagzK8raywz5roHf",
  "key7": "5EGBkfdVK8UpNaNRUbHu5bF1puB89ZsXH34bA3xd1FBH9Poo22SGmo8vzkdrjMULQqN7g5kvRptHzSEhV3NZCnga",
  "key8": "2KoFua17utrz7NdhEDcbbJhQK9Se3jMimtrrtV9x7baeqyZE7nyBAPW3T3oEVeceQ4njeMefHiNhPYViWhVUyMDX",
  "key9": "2tPxrb5L8SNSmTE9v3hMtXXj3LJFM34sKjKhZKCkNH5CQvnMS3uFSPwBVCDjYaEtvv4tv1kbvmedEcLFTPCxcboE",
  "key10": "3jpE3JFkxeZogT93qs5iCXA86MszoKjDhx6gC6ptET6f9b1VjQS9yhKaAcgn2VLfwqrPwMZeeorjjA9u5gAPdDMs",
  "key11": "y2YzANzXFYjJf3Bo5csafUsrn9iVLfg4xiChT2vC8WY1ykrvuL1aLH64pZSKbWTiLpqK3k3Kaqfe8XPrr8Vpnrh",
  "key12": "3PJowhzFpe372KvEViRpHF8hc7A4eqZEqQDmtw6bG9DK5KgUKLk5tVhoMo5Nczsea8HQeTYaSMKATytFtQbnryzX",
  "key13": "2nrMYxVUiGeS6DN6BFF6A5VjRQwgNY8CprFM37yYbHEovBk4WCMnW12CpDmYhP5K4WfcDBMHpnXL21QB9uY4hme5",
  "key14": "5WSTY4Bf9oGEwMTJKoDg7Aeqc9hKHMAHVNKxMmSSapq9KUYeyLRhm8ubadmRKJhgAKtR5EJRLnwdQVzEQrXnD2Xc",
  "key15": "39wgy8Vh74doPQ6jKMfBsbRWTUrLUq5o3bWJrERghKwEzqQM7i6tLseArfkvjSDReZWZ3B6pFzCh8Wcc3zYTDSjh",
  "key16": "2DYX1nXRmr1SAZJnNULc7PNBfPgPS2h1xkKQfJWJthnH7rkL1nGEqF9Mv6jLV32Symf7QZCkw96QcQEjLBJBgEZC",
  "key17": "4uMK3uu3H8HampCnDrcAyypECp8crEJsztvnNvahdD8dRtLTtYbcoBWvdSWJ7YjV4qDY2EMDHudtrG97t9enh7a7",
  "key18": "AgiNJegoSJCqEQ9WQXGvLAFrfguH5EXEVhEsXAVinqkBEuqYPGURHqnXkutdgReNDJBFKcnsxcThkTEZWmcPYrp",
  "key19": "5QbqwNLfepiZ5su3wTPySkuBydi9EF2LufNd6dMnjYr2NqKonb8irstMGTBWvtuiUZf2X8sigs1kr2njwbCZSLTi",
  "key20": "542h5dXxYF19V8QH2LXKfGnmkFWzNPgtCAqfKhDtK9tnueyStfGhKpdCCD9rTSKUnQekTi9fcoFEpgwr3emq5tPA",
  "key21": "4GcD1fZyE2ydCYSZ1rZEyfx7oLfP5NdqU1NAcs3cRYvvSocv1dzxEkTasoLf3RhmZzmLTiptd9HoNN9KD7cLpvxV",
  "key22": "5haSUbq533ysgRYaPzG4SxiFTdZBegLkrHKWLQcKcVSFKMviR3gSi29qScdriFopXDPnz8rZBZWE4tqnW5QS8FLQ",
  "key23": "28wipCWnk5MeBKfHHG7Cr3kKK2a4tKVndBDQKYsdeUPM9pXPHKaRVbwYaSsvsMu45nrQyqygDY1buJmn4xHJkh1D",
  "key24": "2mh2hitawtfRcrYkMVtm9LVp3SJdfV5Dfmi7EsPe7VZo3XeEdZm5xMG7Nnd3tayPssrKVHqSCaD4PR6PweqXJsUC",
  "key25": "54jo7m9kmkDzwPpFkmMPxQsP8NKkDFFMQTMoY1fyVj2nMEtm4vWfM9drvgJ17AiF5WNkDiuaj76ynDNBL2TQBXVp",
  "key26": "4FZwM9BQPNJ8agdLd5JcSsubJgV9b4FQnjbARG4dHzCHWrjEntVgR84phsTQNJ1BbGtwNdziE71LAp9SZn9zvNb2",
  "key27": "4wFq3tT1ajtMAkyNbZ4tK8zQKKCQip2oRUgdDCGghRAuq5CEqvNHsNcK7bdqhn7LnuNocjKD3GdSUTBP1L6e7Et3",
  "key28": "2kG6wNGXegFMQJC87KwJEH8P5HbRmimsqZ1eXyiAJiC2UBSYiMkePuEbqHEgTW6hfvTUptJ9SjYB55k2hQeevRjK",
  "key29": "4atd5MFdTVUa9jxoYW2LhEsvFeZsY5FgW2pemZx78LeuBRQ2Z2n1983eyY5wZNsWTJ5BgMdVixFrokvcwfjrxbqW",
  "key30": "xBojDeDZkVJv9if7j9dCjZj5jAfvECWecjfecP6uA4NaWwjCs5rGiSgerdysRpYmUxoXqBmV3Ui6Y46UNacHVLK",
  "key31": "3WEriieQER7nhzZ7RK6A8pjr9CyQQxk5QxJ5XdEdMau8Sn3cWj7iEbXeufoXYaVV6tqj5G17B2JEgTwwU6KGcjrr",
  "key32": "3fnbb6YYc6xKD9soTnapPjgJtUBnGE1MJDo7n2u5is63iHh7szBaAcEHtyb4Sx37r6LpE8CrSoE4RsqTBSigvVu4",
  "key33": "CAiZw3mB8UhfCFqm6mu2bHdU9uaZyFgbMUG8egNLD1LFdp5xrh68ScnchDoYksyiwDM52EDAuc587hwcMBjBTTi"
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
