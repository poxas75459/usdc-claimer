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
    "4G3p1DicMXPJJ5NF86aeCA1Q7sKTPUWc57tqNwzqeNgCodYZgfuUEXCUEhgNerJYUJyXS9fJXGbC3jc42x8c4Rih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rFCA8dReT4Yo5ogo2QPzq9giyDjJQZcF2LkBWu7PFXSUEAcw4BPTZijYkxCDt3Dbjfwg45wzfniBgEV4y7zWVv",
  "key1": "2AJf2VHGTabfUTzaoz4UYLyKSthW4phCau2uaVUCVspNZgn4EgHzCy6FYe6jBtVqR1bzv76hB2p8P6sUyCVXnbpn",
  "key2": "49Nj2VhbsZjXq3gzKKXW8GV31EXqrQ6oyq8Kc1cZgJZqYoZu99EEGo62VTVW7jBXoYbC9XYGvkGx631wRo2HZxXS",
  "key3": "3pTpeTs4bCXhgT6n24BskMQH9Pz8fi7S8dzeZAcozSnJPbS8eEXzGyjk5t3bD7hK1o43GEZg78jsjtzhRT7D2yUo",
  "key4": "3rh2J97DKYnz4UEj97Hbj75fQTgUHugTRpk5owWBqU2bT6appK3AYod1rSxN6TRA5ocP9DxRMTjj8x5BHmd7RJgK",
  "key5": "5TZAxqbDMSNt6EQdb7dCC776UYNgbJh7xoiADWU6hPTPwvbsUU4Nrwd5XMsn8DhCAGmpePKH7yajxe3T3UdPtqrN",
  "key6": "HS1cvA7rFnuegQjCNnVnMJBfzn4DhCwYKKME75jYyGskvPsaUv7rgxpeqA1qdoxVmBzM4yDdusRfSHfWqMEJ3Uf",
  "key7": "5v1EMtbSejTDaRwjBwqfchEZn166HkLzcB8q3BPoQJ3SQb45WWE3wTrwvoymnHxhwJYmECs63AmVUTd4aPWALxsa",
  "key8": "2ex2nLDkAUdGdRojFG6x7CVU5YCrqLBhvKVdj3FsQsX1nWDTveKBqc8LwSSUAGztmChP8STQkRasNDFGgjxTd3Cx",
  "key9": "QYKvRZqMhLzWnrx95Ez9fH6tFVxQi7rBN6YYp2txiWWBCGvJaAocrNig7ZWCmrinYuzMhXbNyRVm5fomzcmuXCn",
  "key10": "5dg3thTS8VewANhttaBFBHNZvw6koHd8viW3J1L9eFZpKp5bn54kMeRq1R1ejH37ZY4Kfky8THrL4wkQ1EHFH9De",
  "key11": "AWM64SX267vrKC9p1NtEdyvmuuxBF4ULZJ84TA4WtNdMQfPRCooUGDqDXjYB3ghq6S9Vdsxxj3cemKLAqH6JRRV",
  "key12": "3kymNXGEhw9P9AvxpmEofkRJkjnLqxeULnWsRZLf5GDaJM26R6z97eV4D3LoJ3hykRRWbKx1917e6Dsxro5ZsY7",
  "key13": "38pMRSsTcakAG83mzMG6pCX9XdJDXnAR1jbcJQEBgwZPjV8i3fXkjgAfDfKQMf53gtDozEnn2V1E4CGu1MQgHc2h",
  "key14": "2gAV7uzKCchCoCjhFxrKHmnokuKQREuS8U84gxSDnZDzJWVwhgCNV8Zif4G52aZVz9QD8CYPWEnvUHD5gonYY8UG",
  "key15": "4PH2if3vQo57M4GbpvbJkV2NNiRLM3ezswPWVdSnRDDG3GJrZeoxWQrFnSLPhuZQpeUscbveiTSjtCWrFtrfWWi",
  "key16": "YcuAt7d7g5hyFy8NDu65TdY7DicLHzXrzKX6yAcmAB32oKcpZE7vPTq2L1QymXgvuWBfA1yhWGdgGkQnzkgFiTe",
  "key17": "2zavMKpeNydbGf6DBJZDj8PkoWRn91ascaobYhjv9Tdzj66g2C8CqAKvbrsahxu6RtZjUn32CQiquHkoDXBTQmn",
  "key18": "5b7BWmPN6Ac3tMBNiq7BDt6JV4cqq48ZVpmkPBoY26yxfL5W7BE1LsC3KgnGtCE3HuubV4X6BkisKPnsa7VqZ3gB",
  "key19": "559ybgGaYF8qXrPgNGqZQRrF2Zx58LUsRCz6ULkL4RXjgxwV6UTpzbRgqgtrkQvz1kwQhpxzHSJA3QTZm87824EG",
  "key20": "kWz2yfivoLdsAHWBqfNNssiU3taPjcc9CgTg5EbCK6KuQfiAnWfyHH4eZDywTsuDzVFgmMSowcijLgkx1KBXUY9",
  "key21": "2phDg2EGYTfWKqpfGV3GEP6tiCmqRZHRrUzGbbRy1awSXqzfKPxNzTmPRtjwn1XE9YxHy14Dvkg36HNaJDZRmJDg",
  "key22": "4EbDxjzHpLBaNxwPJfJB3sU7JDXikH8t1VGBgFQJtJ55d8jnBi3zzYkWhGRLHZXLKG9fDi9aM4ahDyszAyNJ6XGH",
  "key23": "2TUovndmD3CgnEvAQLvpyAfDhf2mZMCVTUqBgktCnC2cbMvrk1v2g8HVVvPRoNNnUAv4zVxDetFvKWmevnKJnsg4",
  "key24": "4AVugCUbcbSBrjVaeiiw64nyX4umLgjpeCwR1ap7XeXtTeDZsxmrDCUwuhoZhFkJXt26QG88VteKRYP6Knj5KbBN",
  "key25": "4K3v2EZUefrooyqZ4SCY44LS6QHraYvr2H9TXQRDYTHWVXJMKpZfFce6Q5hjf7EMc6H2gJHPZnvMadFKMuMDj8wx",
  "key26": "4j1ReGQJRGoAn5hQjvQnk7TfS3KXhpemz7dk8FtN49xxN8GtrsCz5cjyMAcBQTQF3pAwuEEgQZqsHkPdCnMJdfVP",
  "key27": "anNaKM7nR3auYyKmC3hpHzfypEP9hKnMXLgtxSeiPLwYrNr4hzCxkP2tEiHN67mjorEtEMBK6K24zMgjvrVj72F",
  "key28": "2iZUSyjEj9jNCpdNwezd7dT49gDzE3LSBFuwjL1GDvKocNYczFREVBxrZtJ8JJKWk7ut2sMpj2Hevp5PEw8m3XhG",
  "key29": "5Hm2V89FZ5J9VriBisdCeBZuWS1mdaoHeerDvvKq1qCr9Lzd2DwKUUyZCPdAbYB9yg6gbSt3r53idFV8X3dnzg9W",
  "key30": "2QNaqVkYgg8c8brNCoxsaFf2RrYxamv5K5z5cftqxqvHd4BJ7QeevPK2EW6dGDfZsYaf3tinfboZFYjxduNc4ger",
  "key31": "4VYmUUVK8UNQfN3Wc1munqY7FdxxEw48S9kg4pSvQi3WZAgoHH7NVSmEKvsGdRtTifbQvuE4gm6Ruvf33rfmPcZ9",
  "key32": "46hGveHxdD9zQxH8YjtR5yotxYMYinCXxqspafyxbsmyBnTYy1Yk5JtydppWWrrU13dtKDTRdMMBj2g2DBAoALUQ"
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
