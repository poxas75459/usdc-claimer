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
    "2tF4CvDu8PBAFAuFZmcznqgF5fpBqDoTYbhUVSbCLhbhLVFmKGidh2AZGMNDTbvEBp1qSFoe7ayWsBJZvkdZik6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22MkzyLnsNeRveJW9qMjs3vFgoHzSzA4pHDgyvzVanS4sLD9VeK4RbSo4Hm7RiQjuvuqoTixaDrxQx5UYsFpcmBb",
  "key1": "hSGVpiMJE7U9jrPuu1AH7sEyv3STX6AMWFP7W2JgVKAg7nPRseAds7nPZmsTb2gyopkxvQJX471byayRfwCHEFw",
  "key2": "oi366773UBvGNPUrBwJs5PMZaMYKRsP6yVmEAfVDR74WfRosSDJoG81gcUerFP47FRSFxUkwurx8ngUsD2woRxr",
  "key3": "5nBtEVqo876KPFSSbaGNrFHHfLsmvRS7vYt6PTciYQgRZPHmegqsKyHqG4J9XyYpzsBmDguDc6VCc1TG5hUR2KzQ",
  "key4": "32923taNXNjTJ8A2k38DqtAzmVLvutSxQDtErPCXzL9RsW7GBTY3uXpoEMDLGvx5KerAUtkkL9hjZGsviTyQJhuH",
  "key5": "3trPqszFVQaFHfan2bKb4VR7PScFZTXCVvQNUQcmUGRjcFS8XxKuLSnkiodWMGTQTFTPajQXhPXa9Z8hyxN9qDLC",
  "key6": "5KHJcWAsboM2QpP6Z6BsWb5kiZjvSWVFCDP1U9uPXRq9hGWUshTwi9Aq9BsEFKQmJsSqAKhiFx7cmj1B99KvLo4n",
  "key7": "RsYxYK6WNXiNwbsqQVdpoA7oE7j1shs4QgWmfSfbtj5SBd2esnJcjJ1AtcPNwkNCo6bXe1MixQbT2BxwQuBszSy",
  "key8": "2iLVNPnprwPcCjkg4YQ21ituJHsGMzd4Ycu8shK76rc8P5PkeWznpt3es2kiY28P1VRM5Nd4WWYXjNEgMbnfhASa",
  "key9": "oJjXWF5eDs7nguyc9u4q8T6cr5s9DPr4s11GP9syXAarbUh6fdFCNj5NWaLRs7T5bLzrEJmWBxBv5aG1LMEBvnZ",
  "key10": "5Y8n9BNqFLzubwLQiduHt9pbYA7h9EUo2sGKRGmnZeNTwG1Nk5z3r7CKp6nC8UC6cs2xcwxADKnDSRi48bHvz1z6",
  "key11": "5fx4sTrsju6knwTpNe5oPEkuaNtv985MTpY3FbuvkJXk7SwAc53NK3tBUWsozo1XRhGuC3kaqUevsJ9NWe87dRAN",
  "key12": "4b1fuALyCgcUBxNfSMS4e51XK51bT2HYHHLXfGYNyp9Z5gbUkJpTCD8XhgCNeESmBbXM96LZ6qTXK15yGC2yb9sN",
  "key13": "2k8epxEZqNs8JefJCMYKVKos1DF83Mw4ru3xry7KUbyLcpCyLxvEoz3bVPnLrDj3vZbUreujVVagVxGMMvhur8Pw",
  "key14": "4aUzKR6qePvPtNbiRURtTRh2CjKpr1edqpMDYavbZ6etvtJnUx5PwrUEQJXgaMTSo6KHhJfARwmz6fewtKZhVxJX",
  "key15": "3zztrfkhkSDVVaPBi8sdX8ahvVTeTPnZNMTyxr7ac5MGDpGmRPQ9GZ3j5kiC8K9E2SDJDd7SBnTzF4cWfYZz6537",
  "key16": "GFRgU8iqNoAUKaEvwLbnHG62mei2JtZ9uoARKS98XLdsxTcaT6932gkq2a7WiZ8oGwTfbbGThzK74gM9EnCDqJe",
  "key17": "3ajvWuzHmjNCCu1M9uSWDgViEJpCjQVbbrao3PKiFQ9ZAsL4c2xehSDDJ9kfr54hidPmM34kCTmcUBwdE7kNGcVk",
  "key18": "5fyANYTNe7CUaXg1TcvzgM82xUr5R9P8j5eUv1nZHCCBvp5krfYEfkpEWaN4FeT4uauCtFpzh5oUdH8opohQFXdm",
  "key19": "3So48QwfEoC41rnrBWMHY7ADKfdJ1VYQ7dXpW8KJNJcppHFYU5ix9GTwVYQHTLeV5Z1NjG4jn8MUKax3h9QSnuk5",
  "key20": "2GRjAeW5PUSUWCLHjcB2JR9ZgCSZVXWoe9M8wwB6zC9BadYus2SxRfuphaDaC4tGmz5jEgHGVyKFfKJL2M42wEWv",
  "key21": "5DJyEnruwq3JPBqzp4NNKoC57eyn1XkBt1HuugFJLoEDLb2JCF53KtgHCKH2LKqK5YT8bSmxHRk3c8AUMGumgWpM",
  "key22": "4DrqU9phs5x8PxMXQqBnTCVhcpvQ1UnUoCw392JcA2ZPH3ZMqx7FoKT9dxSC1ZsW48e5c3M7SLXFdjnHAhgim95E",
  "key23": "57iCXWYmRwGtLYd1y886gYt8hp4hDDn9pEDgBj28JAJgPTxpyKLM9HR1R1ePkCvCXF8FJUh4hEzipwNUjRhpzJsw",
  "key24": "28tDsaYACjiM3zVkGbuUtK5cPKAfaaWATHSxb6Hm73ZHrwbBivQbgVNAaKsABZuibEmKgYswr1s8PTPHEPHAY969",
  "key25": "3sMnXfmacE6hhTmTeZPm8k9h8uYMSVb5c19MXp5ypsLRuAdRrR22K1i3qw8N821ovNGV8sE92aqmo75p3qjiWggA",
  "key26": "2mQtH4zb2dT5BYWAZC7YwomCy1rWbUBAbopXpSRo1NPve1AAPh6dufGPqTw6uUgcxVDPyhKJeqSaJWRVFr2Bihqq",
  "key27": "2vNtABaSmkUKLvpWVNjYrh6Nsg5KgS5koEAJoXu3H3G5H3ZjZA4uixBvoE9F2MVZScEqnSYyn1Lt7o2w6bD1As2E",
  "key28": "4PTc4o9vMyMqmfvxoKt44xftaLSUfdsHZKFrxxEWTdWACmjsu13ckwALKuXEaNo9iWpixJxnimzERg3c3oAh1PXF",
  "key29": "mn9hBveWoDFz7af7jfUqkB6j7tzwXpiZR7VwfVWuevwDNyrZjsrKQrADdrNM6thXLEf5mQpup93VhvSu214WWym",
  "key30": "3uBuT6ytq8ATowTzaJwmL6C2637da3XTjoy9aBayJNDeFuddsbWoDpw8HUwUaSCGhxBpn8bVfEUdLNXMThqk76pG",
  "key31": "27rocUi2wYEVDHfyg6kuk1jVRVsZ83inm7Jray8tbS7aKxAaiajAf6C42LcyLKb3Ujn1G59R6mmWBqB5ouW44MH1",
  "key32": "3WAKLz7QVj7MNnxNMjzLsC4VHRmQWQoKmLRcEs1iSVyvMvFau9nfVhxBfUShBXYxAE8o5oRDN5ymEE4oWMcqmG2J",
  "key33": "5NDLqdt7vwhxHHcVZ7YGd23iZUbowFgtivLeiMXH3dG1k2RsG5c9vyQm4hfiupPYgeh9Ao95EMNoarr2uwVpwceK",
  "key34": "2iZm8ozWiEit4td4tpRbSqLwt2zzRNUAVPCtHjKYJrpN6zEX2UvG6c1fU5H1uktcDGZ5AKsjoxUQejYmo3MdBBqa",
  "key35": "yhB5oPuRJa5WTD3XGWPTETMFyDGzjx5LUq8DxUyTPdpP75DPWHEesGnMt91eHYj5rrz3w6W94YSzTqN9k6JDvX2",
  "key36": "3s4V95ZF6xdxwD5t91fg5YewyZoBhNxGBkWjEnmjxmK69gomGDuGF3wvtEMT8Pi8ntJjAv7h85rQFHCCBYqnApyk",
  "key37": "dCnzDJw3CRKEe89ACmqgqVdGeQJ4ZD5Gsd4eNYTo7W2EeU8THeFNp5e3mRnNKwAUakY3xSbQXdM79oANBwoPcvx"
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
