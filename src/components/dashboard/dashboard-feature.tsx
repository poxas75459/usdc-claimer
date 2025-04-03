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
    "4CP1LjgMasM8XrqLoFp3Qa2WLtKjH39NB5j1rc8WRgqrPkog7PvLN6JsacuFLrgYVkooz6E33gQMzu91BFkSJAwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qKNnBAN71p5zd11853Tkfg526kYDZnyHeCK43pqhYjzDkBJTRS57xguPwaHYpRQDsuzfyV5EAtZ9yofX2X3DA9F",
  "key1": "4gS5mKZDWrzzaUcmvVzt5CydnvsKoy8t2cJzSf6WUaJJaSmd7ztcuWgNmGzWRdUfVvrcdewY1iFrvKt1dHTbgFJT",
  "key2": "3GmkoVNDB2bzxRoS1VUhdm7bTbDykBeefF41PpGGfebnEKepbW6BnzbfE2tM6kk5BeTzX2GL1YbTLYQxM3uNWY5L",
  "key3": "2F3Pr3xeEC2kHe93cXntm1TkY4WAizBhXKcGHGw5tykH8e7CJ9h9SMvaBLL68zAs4gTick6QMB9Ko8qWsdnA2jLb",
  "key4": "ukHNCxrxyd4TNfK8GfmLxAg4J5ZBykyJHaykb5BB15A1HjBaAAWpHtmZKkRS5Pqmp2fum2ykoUbHJAXSz3Sa8cG",
  "key5": "5E9RDgaTYztEm14Re4Yf7U4xpAYPAPAMEh8hKYVKBHkVByoC8L7iQcrfm2KMvf6PbRdLtxRgifR7aGohRh6jiGYC",
  "key6": "5Qe6mDuX82PuQ1PUSBmsghTS6iWjXPfxwVped88zf5bYpKanVN4WGUbvtRJ8xacSQyUfVmtDGRYFTUUe3fTYes9S",
  "key7": "3b1p5XKHRFUasUEnwQhyK8m3x8LiGrUhVd3SpMQyJNmQR8DFgXmQkBHKXb9Mn453szFpHLnCWSWRhwXPUaGq3UBd",
  "key8": "2qhjobSdeTmdBQJDZxrjjyxN9Rrr4tsJ8ycTvxzBLBRXXm3VYUivXeb5yDA7fAcsasZwNZ5cYByQyVUc57Bsu57y",
  "key9": "25qRG2aV2ZD3AA8HzHXTE46wDcm61AcWazhhwJ19LfiQu5DXwypjwMS9rzKavZH2fsjaYK4FzaTws4cZR6Ry32iD",
  "key10": "R9XyTHdaB2aQHb3onUEFPatC2zdu9n51Zdb88zzRaXyvJxXMswtLfSfSX3mNchYRMm5FZ8CQumfj1pdNf52osqc",
  "key11": "WGjq18yXTwgQqPTtJRxvzKQFGr7izHDaaPUyovQwepfBQfvRN8vLNmQSNpZiLEbN9AXyxRvhf9v2UHKG69bg3oL",
  "key12": "4c1rSD2628r7SovzGveLNygdFPCDPFoBStb8EncFcNV3KZKEA5voM2FUi1omufya2VxVyoyTdEZFBfgENmPFdF7o",
  "key13": "2MNENNg4mgHrto5cEtYAZbKuwkqs7xQKKNxppiybAGPawww6zy9jFHmQCYPLCB6J6Ec1e9fKqdsZbXd2BzKu91F8",
  "key14": "RgaSXj1CDKaejJrEJQXyxbMGk4XvqLsFQrDS4CrxXmzUfpp6fL1uTMUmVT7abhXVcyVhUaTtUUf8pGk6JAVPpw4",
  "key15": "3ZqQwLWxiuWHTFVcerkS4amH17ycpscmV6UaMxuMEFSWvwJDTxg3eo8FvtpzojZWsZG3g96xYPiid7UvkdqLGoPC",
  "key16": "2PkAhy7N7W9cY8VWFLeWrGqmBW8YcTY9BpgTGJ1McukLbdo9PhczJ1BukFpRrkMZTSXsq1gqE2sz8qWUKsdYvUNh",
  "key17": "2pHPnZAQmQ1jJXqB6H11XEMX17usiMPd45dNwZFRVhXkhXjTVBCkaqkLJ8cJt994rBMUJ9qV3xf9gCFVqEoWHqjs",
  "key18": "5bmnZn59B4h8nJBe7PEKn8U6A2r2sgwTC3icgBjFAesBuVzSsswebdffcagbFteotKEjdqkNVwFFxycYJTxn7B9",
  "key19": "4vsC8w7SW2c7vA96PqWb3osFLUJb3iJaCmcrxiJHEkDWV7pMVxCEUP6wDX4R9FCWbtVaGMK1TKGRZ8sxhY9T76BJ",
  "key20": "2RuLv8yuTyE6GPPkoajZ7y75o7Rjkd8fveb6WX7Q46YDpEag69cC9MkBkvFiQJwHVDuVTeQGTPVmRGP9np6BBkEt",
  "key21": "4J8rLM7gaQFfqJjjTPV3viTrt2TvnMLwHjMZPUFZSAUMurjamXMJh4saXEyCpt1cnKU4zArNWd5bgfcCNg7rPnej",
  "key22": "3vtr2JHxaALDDXsiARSH5x6LvSVV8qQZRdocaywfVXCtifyhrqpkiRqpESSmEPChDRY2hsUv8R179dQm5XyxMYSP",
  "key23": "Q2V2ucH8ntmu2s65RBEATXmjjQXHsfrdK9vTnnkCAkDxjCD2oDo9SSSjmZGa2SSr8phRNfqUh5nF2h8RFUx9tTf",
  "key24": "64KrvcgFa5yKDCu71JncFuK4hqCMBXAqtAiuASpdBh4v8dZpVBXAz1SaoGX7RK5CEYjrgD8PFAwq1KPb6z34j4rR",
  "key25": "5QBoVLFaFXuvtqXs1Gv5tgy1eZo5qQMAbNq2HFsvb8zVqzxVticbUK1zkFpjuftbKGswKUkLFs6ZRwGDJZNfSb9V",
  "key26": "4pokWQK6Pax9Wey4tj8b5ovt11KUqoSUzntoLhjzeXVoPwm6jYDrXxuxjq4VApiExhkc8NxnZ3MYoMLT54ydebsC",
  "key27": "27EHYBRpjRrS4MXjE6Dn4PFRjzoA4oLbQK7YS534UfXQwf1pESwJY3o7Y2hGESSQp5UusbrK9uqKT5GBf1Uwf73c",
  "key28": "2mq4TSWGRDnd7Uayr2xNADKchBag4vBnRCUkacPecvhC3fjJWqGsPEGBhiynnxXCcYpTFCu4sKdyYMCLC31AdMwX",
  "key29": "2MbtDXdFZbYEHW56ZYyjhXSoRc1x9BAr5settyLY5yeNSsUEw2uMJ2cA6qkfLNQoX4DP1avs7WfjMC1mQqvKx18b",
  "key30": "F54hmDb8YdTddBYGyaJioXfC9qZGfBDLip9ChyXv6n43fbURxwLRCbMToXifCGSm2h1RPUUgS85P2VgKP8fjLW6",
  "key31": "52vmER6Zz5FRthudc3BVbNm3Cz9tRenGyBdgCi8ZoFmSueBzv6Kybu5wfZ65AMfzdEb9hgWGJoYCgRonyH8fyXes",
  "key32": "5Ct1gQLdTXj6mejvYyDJN9uBbxRtSnzGMsnbEC8acDLahJunXkjFxdWfRrEAJwHvpUQxs5Qo2zBU29JShVqUSz5z",
  "key33": "2b34gNoAXN8gchovyETE9GA6Gy5fdATMb8z28cngn6G89W99t9xJ7933hru37DgtQ8Gye57jQXj4YzsWmXc7CsmA"
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
