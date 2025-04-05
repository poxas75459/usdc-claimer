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
    "5zHRTwEfXFgcnJxZ8BSet4JzehbPyGrJ5B2oqd2TKFpY7FoVbuncuFYhRE7sqc7suYv81zzRPmGGNCGm2fcL3hyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8CxhNbb6kNgPQxgJKpm6iWmzEZvEg26smzRMAHxJrqTGSHKupx3Ho8jzxGi3UxZ4AmSdyw4gmEKS78HwMYxENMd",
  "key1": "qUHwXh6ashQWcc8hHjxaf4e4KMFXy9YzJj2uridnxB5rwKyGNwRfT2c1pia4WgAbFDdhLqHA8z6hKmAxkW2pteg",
  "key2": "367MfZLAvzaQXyPnwzM2EjDVH2LkZRvkZ8oLktBM6vK8k4VRWBV6cSpcgbnxxhQ3ghi69C7J5F92VjZnrNxp9GB1",
  "key3": "2gMLdGEMFGC4EmKi5CMhkmqTTMBRAzbPRLXrf6poE1a7eXQmk58tzyPt3ak9Gn3B7v2o4BmHJvgvU6PTi6acXBzX",
  "key4": "26kjTuvibWnU7RwRfxtAZGxtDsy4d7DRGT51Z7qXqbT7KjB4zA49K11BKi64seRKgxKFiWrSqYYnF1Qi2SuqkDGN",
  "key5": "2HHqKbeXaged1DTNLDH4HrmqVajZW8vNSazr6h3WpCbjXh9pKuf53rcdgzAhvCAVyUXfoXd5RPtRTtC1gMDKcnY1",
  "key6": "4FhFS9xBR4dQWUz8gAcc7q9ftYTab6jwPHz4pnMPBRv1cL3HJDL5YFdeME1Nvjju7wjBQeRVAzP9HeoSgTpyckXe",
  "key7": "zhiNsTLad6zEvfy4Q23TDk6pLK2YKTpBggGxQ2jxocg7s5fQ5vm7EAAmFjrB9rxwf621H2VRKgfo7i3bYqStJyB",
  "key8": "41ZM3n7dTYMk4P1GSBEPQEeCetCSbEv2TQ3xpvSBe7s5eMHRQCATvqBk4wuTpeXBZ3GdbUxU9igVHdf9vnWvxpwP",
  "key9": "3LT5oesDaLZrwLZFdadGGaHoKvLDkyrD7hPc8uVUBQERmvdDiUvE7VpU5HuRgehNP9FpggJTcjH23H98heLHxYHo",
  "key10": "2GPtkg3P5Z9Wy9s1CL8s4pkn4Sr7oM5hNMjJgygk9A9i8NMZohxt5Q2b1X1wrZ7pTzj8PJkv3zrFXpHzKkAe3QTd",
  "key11": "5uxXEzbTChdRatQCUpbiMVw9ah1qsiNdqyYZcSdHTchT4kSeH9RFrkUkRZQ1jdDyi8mZuEZZNoXAZrw8PHUazr8o",
  "key12": "63Td7qBWCpTkT8Y9CZ18kY7iVmjoQ7TSALsWCFUegBYCpxyvKqpvzvNqtXScn9haXEZL2DVcSvRa8midFbGJdenz",
  "key13": "3ENJ2YEhvfWZhvxoHxTBJ9ACGZ3U256AQUZsF9Ugv6unv8VhecchurdtRUQTeFfdcBCurG4dsNUCMo2KPSWEmSKr",
  "key14": "2qEwwKgQdVGCAgpEJAoEwrbWgDQyqELWpnEH1EnenHJeXTgQyxwJbYBjniqaDRRBVB34nNy9onYzuvpjNSK6JPQd",
  "key15": "o471NR4RXmxZRj3Zvz9WLp26Z11S2TmL62ajiPfTNxhcbCyUVBbWXkf5qAbje9vwQvxJC1cfxCwdDp7hU2xREAY",
  "key16": "5XBepLWsGdJQjBa5ofoe5uRYJh547P4pZSzuB1a1LHBocaSn6topknmt4E1FM6vRmgskvZq9c9xBkpxuHeeeVSak",
  "key17": "3wRJfw4xqBnjffeopLQtyKJS9Bg1uYy1Wii32BiJ8PKqGN55UYDgEFwuXHjk4mSDiQ3ENWN5Qmz3k5jmFKBd7zdV",
  "key18": "41FYR85u2AL2EVrG6Gjr75NxK4wgR3e7qciMjxfQzcg6tmcC3EqpMpxGTBc2aH8Xqc5Wr8m42mCHpzproQiSp4CE",
  "key19": "67ZUBtwoAxHLSm7EEmSG8jjP37dLr5tTCpQq2p169jJkAvzuV5tDPSV8ASaT2uQijVe28STqWefXYnCJMhgNnE2m",
  "key20": "2V9MFhaNRXX7JMDVnDSgYwvB2DQMdvy6t9fE95JonP5hA7y34WKTLQAUFEB8QZ2vZ8chQYtR2tcBNDtnsao7RuSo",
  "key21": "2bhFeodDmHRT4x5uqxFYChPQ1GwCoQFyGkMbTp5dQ5DKxL3WytPY1KJJvcMtYVhEgwU6Wy1zeRd1PYvdLBJ2cByL",
  "key22": "39gBriftvEQiRV8wDG8w4ezA3qQJuE5vreNiF8U3cHrhXkfxh6BFQX2qdcw6rHgdm4E9RetVgdQLnXWhkg7j63TQ",
  "key23": "3LWzmuLVhhccrLpRzdaUm7aDdrnZ1Pn6oiJMyaMRbMQ5PFqUQTEJBNAusQ8592WZqNk4dhhJk3bDVXZo4SR42JLu",
  "key24": "5abKmz91hvQdnHBMQTUhLPbDFu1cqSnWJLdjob6Hafc61hV1eqx3MZFtrXuYkAtRCs5GSnx8Ytch589B7bsNSq3X",
  "key25": "2U4hhADPScw7iF9c3sy5LsJRohTHGvEbJegjRZrFoiqAPKtntNa5swhQDGvfTcjrdWH5tRmnPmbbrVKTbD6Swf8Z",
  "key26": "2yRvCMnwNwKJm1WHmTACZfnhKcxvq7VyZzwmx6KcD2ueFv6t4oT8U5Yh5aRZedn7UgRXEPHMpYJPCb5sGSTWoUqr",
  "key27": "4JbKxzN8ovFUhSUC1jhHwnzV5Ff7UBVLybR8h7mSvbXYJT8KWkE9u76sJ8FkEDFpJiQ4xDRFCWPhJLpbWxCicB8F",
  "key28": "2w8qy8dUEUP2A53uToCUXivrBBC61ZCbne8MfqPszJrXtvoQJMGDsa9KFpUArQ8QtNuEqVFvLjHhGRyVc9SmYpcF",
  "key29": "3hWAGLMuH9NsLd3o5LHWK3dT6DJJmYkoPKskE3CCa9e1RdNcd4bMqZQmwBzBQCgP5HjdCaMGzz7J9Z3rTDnL3i5K",
  "key30": "ghouXZXkjFHHTGYcCwskBihncyJdFjVgKCa4RtDtZTnH9F9v9WMefJusXgXUti4bEujfuh5gyq97rz4k8D98qf6",
  "key31": "3vQxQyehcTcAgibLB4vbyu8GLu1A9aawPGKYioQ76vHHiUubejvRiuKkYHTRJGrnYgQwxPMGKnTHaFsqoUwUgYo1",
  "key32": "457Bo6wSmMUEbgkKQUN3PoeApWBhN24JGXSwZBwASDn5A7NyqDn7NdzAegihJ9q7zVGVEEEuGCT55bknRr9e4gqq",
  "key33": "4pzX9pqtMuFqyX3sdBhwuJaFghQXKH66MQUL7zN4TLw8FuMK4r5Mjiejz6bXiZZubCPdetjHjqDRYPgQEakjygLQ",
  "key34": "5oE4S2YR9J6WVH8kriWc8Fag32BuburuQry5ev1tSu2NQdtGkYxbDRNRgbgT5kyWEBDzYUxqm9GTGhMiSDBt31rh",
  "key35": "66cYuAdAamJN1AzMVzG8pGKebTiBns14X4qJ6NAhw5rLSWZJ5e7KCR2XZCrcW8Tnb8SuEsEBBRXPwQA4rH2qKZeu",
  "key36": "4J4qtP1aeAYf7nRRCKMT4H2Jrgg2Nmkm3JRgbK44PQ69BYZdCe7WUKBKFwV6USaSaKjY8dVwrZNYu12TjeThQmVb",
  "key37": "9UkNHzrsM116wWjE1MusPyx8xLXj8Fba4nqxEF1xuoTcEF41qzoohjfCRw4HqUpKVPwxFtdftVJDvzyj3nG5DqA",
  "key38": "2DAfyVwXqoW4pF6yZFzpBBpU5hB9FYCKPAWC18NcPFfvKb9DoxgXsu3cVeZ9HbUezesZmFNbznK2pScuywGYc2Wp",
  "key39": "5RhkwPMhXEJQoccbLSBa9nKhnxyJjyHWQ1cUL6uAui5K96Y479SrgziNhPN57acLDhxL6Gx8VsoNTZZCqwwqSUqJ",
  "key40": "5PCm7AekW2zj7NHw9sdt2xxQ7TuQpcEGEB5NPW2qJpQJEPS1m4V2K412aU2wRgBKtT3uZhpuXC6StLb3qwopUKy9",
  "key41": "A8CSmMJuZfatvWprLs8PZurMuz6csRw8JaUqeSz8YvtBvUZ6gZoUaYqbNnfj9ZmP36mKdrffaCLFUaQrmkAAW1h"
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
