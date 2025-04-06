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
    "3VULWHxTnBDbk4JE57tvJ1rErhAK8cT8HZ4sEgHvyQn8e9TwZ9FqJZLur1PCn47nmDZuKJoGnZqQ7TKBprjFPBBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zisycoAfJrxumm2f86LSQKr5AaYcEUbR2Y2UdrE61cKfXvjvKhFT7VjKovj4TmqzBgrb6DfXkT6LDgL5VwRxG6w",
  "key1": "24Gs1184neg2SEnph3m8qEmpQq2gyJm54NLhimZqFBVdQCRxsCaFXoj8AbStvQnCdhNkZiMvTaXqgR5Y7Bwh9kxm",
  "key2": "4macuF9G7kB1PDFdbGYzYBNjRu7dztvZasyBXEAoB6hb1K1gaWsGx9GCtedn5ezwfVc26gtUQQUzrgZ9Fk8mEUgk",
  "key3": "1BrosENuVfVL3ZwWdLFN5Hg4Edcd3jN3czSMHAHzSv6A6XgfuU48EXsA48Bi43ahUKc1gKdgHP928fzGnfRFKEU",
  "key4": "5uHm4RCuSX728VNPd4fUUZ9TUeeHkEBfEWdMxtUEb3Crhx7a6PsjSq6XhbWw2P44hjLxFCeHUy7YRmMZFW5v8797",
  "key5": "3XuW7zWkyFghqvGcP5HEhHnQcpken4ydHgo2HgNsf64HVS9EsBjme74XghFdvK2rGoJSj2kyb6133cMQPKre93XA",
  "key6": "3PqFoPfKnxmm1234vXavMNfEzUafUZRPFejNZDPRSeDYAJ5nWgrW9LLnxDg3XxGr4Yx8Q4dWTQ7sS7QygAL58V1K",
  "key7": "3LSnFDGpXaRze11qotLPet5G47stt8drFyuQCM71zrfp7N27K3Qx6xEtdNUdWBKnzcxkGupkNz4PKh2EzNUSXagu",
  "key8": "5TA2WfyokCXBCeYoo1YwVTgrra7jFh1mBkPmrCKNCqV8Eh1r2YmLvmRDfyH9MhgC2oXPM8xqzpha9aCQiNujxJYD",
  "key9": "57KbytdzNXEDFfyTVUVk9p77co78o7sbmWkegMwrrbnVfYDjP7yXMTqrsqbD9Q8QLRLG2f4YoAgwprMi1Z69wezw",
  "key10": "3aEJ3SaMrk59erWWr4DFNQp7VfVizYbbCL7j9veUqo37iNugeNEj3gC21KziyPhkxa2TiN7GUTadWsGdJX6R4g1c",
  "key11": "4u8HUXQYAk2BNPFUMGs7MBDw2YsTK34ByZPRrxhvdMZNPqBVJVGEsxqrjAk9RDFG25tE1DqExeTtZor4wjEAbKum",
  "key12": "3YQGu9rtf9XV5sz53NSfnrwTHNJjSQMJhsjtUC5Vj4ar16sqmKTdXTFaLKr7S56KovqkEKFhZTFwjoqu5sosXjNH",
  "key13": "3ZKBUTJRwBm2ZwLSBVho1s7wohYmBs9g7wLnegSeouqiAyUo9bzN8dNpPFKnF91yWaHppd3ECcbRnzKWvpkUj1Ju",
  "key14": "3Kj8vqytdjvgdCjXVaTjJk2ccPcReLj83PMpXTndnxRjkov1Q5XXjH7EscfqM1Y2b2TwwhrAoDjevhfcCu5zHqCL",
  "key15": "3t8xAkqH7pq7KApCtkn9qKYrJr28mMjySryHiyqT6C73TNHUNBQ1dztJp5NFXgAgy6tnC4NvWpuoAuwV32c9wHxr",
  "key16": "Yiu8LovjwjjNhKcCnQvmEu2bE5b2mmJMaWUWRdVeL6cuDzCDnzFhhpea57GtWFRet7zvpuZGpUYoCWs36QLWu3z",
  "key17": "53E1s8TyabxMp9RXcrjSH1LzDARPKfySyC2j8P1QVog6Xk7JWxNvqvuex5vH7K4jyYw22nvBVHNWFQNbNiGJfKro",
  "key18": "5WAaad9Q7W5BFZN8JMMsJjj59ZxT1gkeVFttwwZD1o7ZMes3ydYdhrE98Zta8oNjQkgf9TaNtnmUHYsPe3FhMYoh",
  "key19": "5qHBFMxrzR7iF1bHkYDxp1dcHEvV7sjYi1s7G9YhFVJ69gnr3MxPMmVNBE1LBTUER6rSEhmmyKMbRS4yyNniJ3sz",
  "key20": "rqJ6BKQCVzvMChMN9SYVYLQLtpxr6DP1RRCt2X4uwmVzwk4Qm6jZQ6qAP5aV6uXQS85F84Ui5tj6bc4SkyPfxEe",
  "key21": "36HsD1EmFeszrR2AURv5BkftHBfsZ7AXqX4iUzvsFd34L6k2kDm67B2JhZ6D8JKuGDXpEJNQMLPqJAnvJ1XMrH5y",
  "key22": "57PJbhdnJCXifv1FJXjwBPS75jSoAyewt18NZPhhctmnwxUXQi4MLCDmiYif3mjwKABoRka5kizQe2HYcb2SLuSE",
  "key23": "377ztxWg9wffxAavJg1BrWBV9rpgiNuqaRz2fjPn5MsJmCBcwLFLQW6n57txbU7cdFugDguLWRkrEdaGhghrwRrf",
  "key24": "5FMMP3Hm17uoDtkXDjjo8gfS4QtkbQgqTumgCMyGvq2AJMrRFmuocAVfymXpceyBuRdAyA75sg9BguBXSsicuwzr",
  "key25": "4ycuBhMZGYZE5gdbmv928eb2PM2cA4633qH4bJyfUj68zVXCfjcsm57kQXpYBW2zQZP2m89hCCtamFqBaqtpw3ib",
  "key26": "5f7VUqEwfnMvQwLAJ3XmCjr1Xw1CKRuii7AHE2bPYFQg9g8vTGMk2DSCztovVfUbHgnWFfTEfknTtnDDUpfsQmGS",
  "key27": "4Hircyq6RAXMrsQY8fdaTjC5THNWTudNKQDy6KvRNpG2Jr7LPFgKAJfUA1FjgHU3gtTPFRtpTm3veePZnj56U87t",
  "key28": "LviNvigMc8Gu5KPNFnHG3tsBzrvR1idmANSCrPuAj8vF4u7XYbBB1mrVEgobBNuU5JGYKvgztEqib96tpWU6Wzr",
  "key29": "4cQfRwWyBzBBatJtAcvMJxmmySHU8kQMLk9Y4tnXHi9D4KkC9NWbH5S8MJDMDQ38xBCu8YLyfNQuqb9JpbWYHPny",
  "key30": "2yPxoXJhXEEiYyBVzQJytbkFiGuPM15AwNWynXcVzjiJFLkPAtVXheWAGLbCuE6z75Ly1QByQFgQv33x4iYVN66e",
  "key31": "57RE7PEvtzTusrep6FUGtp15kR3wfMirk32F4oj1Kp6eUYv6N4Y2sefwh33zRpFaY1BnDQVo2u2XzYWk8Z72pXi8",
  "key32": "4Fs3EhKf4ZWUwyhmJVKLaGojmcMS36JPfzDpPaWLMAP9ff15Sp6fam8FvWZ5saN7RasiJBH4yqEpBAtzbBhQKHy9",
  "key33": "26pBrBALWTnE8KR5jURSYP8kU4air4qkReQ5NELFVMx379zZtNYQYXhiWC6w5gGL6dVmqrtqG2WzyQ1z4r4b7aWQ"
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
