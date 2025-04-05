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
    "4fm8JKmHrFMkd6G7FETTYnHB5EQBqE7TmKbexQQULBySJC7hCpmWiXV68A88Dq5WVamTAKjKKVr67BpioDN6P51U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fYGLjoebkPNQxzGE72AVwLiqsysPfw4gmrKkAY1aK1Wtxf5MK7y56EmwKVYynGHb3MB9DY69WkuUBwm85mAEa7g",
  "key1": "372ykZogRByg5PzNSmAvs1PvfUt3gbijzTSuDcj6aX7KR93gFinFzrdN2WCz1JUMjBbwLikDWdtmnkXBhYY3XTtV",
  "key2": "5SaMso7ccGwo8pHVfzRNZrun15iVYKaCPcZzrxiBdxnJgRWUR3LGtNa27dh1Li12gmWtStNqNAGtKtPKqp3wAAsD",
  "key3": "2udbGqJxGiHxKLJXnYZAyhpu8txoc2wfp4a6SZmrs5V9t8gui2SfxYAewxwmQM6KFAoSj7XSo8kk7ewF4rGpWG9a",
  "key4": "5psu53nAoyzb17G6NNxaJ4EVVqdjyLZyvxAucGcfNC4q4en2QzdYq7baU5gymYjahYTRZDPWV1t3rnAK4TRDsdxg",
  "key5": "2AQvqsTCVUYQqyNJ91LZwhJGtDVm9UwTb15Z3AknUm48VDm8bMX7SWyoMorRTpGdY6moAvbKjaBKxAezy7Ma8DSL",
  "key6": "4Aex2X4BwnVpJN1vGyG2UXspGNPfKm39ennjphaaYGcGET637PNbxmWXFyE8zRn1d6AH1qdsM2b45Ph9jUVhibqB",
  "key7": "24uuZsyZy6aJKAgjsT8qT4uuA3v7G61Myp5ZgBrTujJNTPFzdxcamb7RbAXTdrfQ4y71zuKcpPnKeomqM1kFw8qn",
  "key8": "3LhoM1edUx4LbeSiUy1pNSNCu685t526HrGAgdGnzQoEZwZdvCwVd9Wqb8yhZGybAEKMrk2RjT6HCks7EfRofW2L",
  "key9": "5A94iGPRSh2pkRsJFDybiciVzc6PaT13zPNbzgJRvHLyhMJfTsMWSLDWaS1qdKPYRv5HgiCfQH38Btm7WdPXXxfP",
  "key10": "57r8ds6CYb5WcVtVszKnn7NQjdC77jJieav7RyQ9eVHVeZy4Jkg861JBvPQxXuGyEpwEwp5stbKtMhV5qsbuNZvA",
  "key11": "53zG2FC1b9iG3SaLaGeU8P6cqyo9BorkSj1agHfUhxSoxJrTwX4rogdU8n2iT7cwwhCBMDgQVkRijoKKP1KNA4QM",
  "key12": "3mcHY58pmEunK2z6eVJH6v1xhMD4QLxcgzbAbM7QLzYYtFqfQPjoWbJiE73sQCbmRuZY19JTRCWTXZdnm5fSLjkH",
  "key13": "52h4zrJZ3QZV5zgzVLme7wUmaNLkZTbFTwDVVWF5UBRotNb1CMJZNhtPixLQH261ZkcpBE52CFU6AfbcegMNxn7X",
  "key14": "3MjYA5Madch7yUW6V3gdkwJnGqscrZycPMhQ4wttBWaZaSAecoz54x9oNwrZ9Ru2oDxLf2t5ghDLnwU7TxoZME9J",
  "key15": "uWw3Dw7KB1PLxMs8Qpgvyrt13ivs92q6hn6vA9EJd8JJbnp4SvZa55MqXXFgNzY1r2Es2dmNaWJXpACoQ5kNkU4",
  "key16": "2Jwk6KBtux3R9sNGPf7AsdmsWeBFZ5qo6gh6VafRQxCJw5SvtU3ma6iaDNNx5djwYtqCjvXm69G2jcd4xidpbpZ8",
  "key17": "2iXaXk1ofwany866zwGSTz9QCm4EM4E8vWr1t9mNiEUWtqvwnYJvWyvxk8m5rFLsMeVhJ9KcndXj7vZzUzneuNxU",
  "key18": "52HtPn89u6BeFxHhABCGoTa5CsSnVgRV7cmRogq9VoTKeqTyFGrQoCiqvzygbgr5ayrDQcjxWxDho3b8m8CwXG8S",
  "key19": "4g43tmKKuMfeap9TuYwgAX4hevEpxrehu7XmjqNrz7MiHtWMGobHPd2q6KUPjDfnjrtuDtfyrNbnfxZHuE6BSTqw",
  "key20": "3qc26mEeiLCoH5atRQ4SxGbpmcc4nr2xQsBk2Z9qewQuo77PB8gGPrV8cDZfmEibF45hmKxYx8vThZRfG1uSyMnz",
  "key21": "3FbSyMWcWNKFXQhxjQKjHeXJKrBNkSfJLEa6dPXQ8Y895ZL7V5ngYUG458fNE7NQ8pbBVgiEKLLTRiGAPnU3eQta",
  "key22": "22Yy7mroigV9dd5bKkfRhoDnNhEdmR8jeh2NR8kmwwgJzy8uVzgieVDwWwo8nmz5xah39NNF1Hy6XdjWqkjEizh1",
  "key23": "65y89zMRv2vSQGnS1z7sLGQCnX8gXeMBPsmdpgmwpzXdpCRi45DZx6HDrqYm1jNb6o8AsL231MxmHMw3xakaxfDb",
  "key24": "4mRqqhvKuk36KcXk9pJC9PUvWE8Ydex2kFtUmroZbi8xkUKhi9Vs4RRx9oQaDzB9dpxsrBumPPnyY9bQ7aPeNLZX",
  "key25": "5quTc3GLCbmLvix4CryfPrMPb6uae76X9ZCMi2tCS5U74t72sq4bbHXiL2n5kvJfsRtyytdQ38ccso7Qc4HCm1Yo",
  "key26": "2kGuVngTYTr37abHChoUWDLEvcuf6cvRLYYpk4hwmtCc9zyr2gQ86AwPE11q3sNGxT8E1Zjokrhvk6tA1aS1ZCpT",
  "key27": "3tTnKrymkFVK1S99J2vfqUSwQaaqwTgDu1kqDMHUS9VUQ1sGmdowT1FZTDnYLR4hdc3XGAtBsRib6QxFdiZbwTrE",
  "key28": "4C6rmc5SymJz679nfWrQ4qVaU8EmSMDjVxaSPqHoeFNP7zJF5qXf2rR8RaRDWfb5N3ZM9S5Wn9ph95TJLDSh7aVe",
  "key29": "36HiNvUPbCq4bhrPeBQRAbN2SxtYfh8PqZuf1t5BbtT6zLhwSw4ASfbyTqh4RsqxipoamBkTozDcvSdLAAk1Ghum",
  "key30": "NvuWZCgJiq2BMZ8LFVHehruf7W7AtoU9akDdz2tR7JFh5ap3pALG228VeFHRHbK3E2bAHia7Xv5oRecsMteEC55",
  "key31": "5yfkKorar64W8cRviwHmdsgN5zW9TRjWSLyKo4hq7WWi2bwsF3ZG1et1Bqnjj6gjriFaXqcdeSboQFSJDnZuKBip",
  "key32": "x2mFu7avW3b3gpeeBgbzP2xzwvgcQdZ9Gdk2au48HRcz2osHx9qoSdTkGWEv9P9aNdMXyao14R8FSRX3xp29DgD",
  "key33": "3nuRLTJyn6zFakLqZJjP1MyNFXtmgqR7J1QjJZmWygZprTwWu3d725Q3VWQZf9ZBccqAzv97LFxeVmiYyEif2QgR",
  "key34": "3grLzGYvZiMxu96fbG89P6aAqdEjDSeZmgsFqMzV9HMwWj3mDvZU3HUJkaHGZji9NYXdovdjE5sB4CoXjrZz6tKb",
  "key35": "53Ktz5YpuMR57NTUwFZUtjyADPt42aWS7RUGGQRGaLJ7TSPSAUnJj2tytxo5L8zpvBC34xRtPcJtgWoRXK7K1dDN"
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
