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
    "4CqF6vpMi1SXeLV8kEmiM3C469yDZqvV3pQJwm63SX9KSrQvrtMqoxwvBna5mTTSwhTguCMPnMMaJm46cYk6e5Fk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jcAgvpFWDRKrK6Cob57kpQpc1scMq5bRFGuh5uSucfKEsh6XjR9r8VjgGencxWLdYo7sRCcY3m2tZndBBn8VHYJ",
  "key1": "3WwuAUywHUKjsaU21qNDZYtqB3gkUJXzJjTw1poUWp6tcXxvLMHWquwqjAScWKn3TpN7PSrPZ9kpSZmVQX7vtLLG",
  "key2": "5wKJmLYSEWzk9eYvZjizoRMYezvKrmFDhRJUygSNuy3X6vq6YEHHDTP6KaA9Jxzcmi5JCRaqqE3Yw56PAq3WpqS4",
  "key3": "ZHzAFeMNCu97yDUzzoCKGHfvb1kzCUknDhJoDgPVSUmpwvNcLf2naTp9hWpT86RJzgDQLpj7ET5whbVaV7H4gBA",
  "key4": "2cubTdL8YUpTbJpagV78NTDYit2W1FSTL5QschFM7mEKMxbdufRk5fvvYztGwmrWFW2fmQ1NNHzdzfL7EvUEYizz",
  "key5": "5SmmsHYgVGrmMQPY8vQP7zewBGufhm8NwMiuYj2eXZMisPygLQttAoBaaXBKDQDuZbSLiYx5FCrvCZJtzDx4WaKY",
  "key6": "3WeDpeUCEQfjKHgDYheh55ZDm3gHxS92b2QRqrzc3KXTn5Z491wKFpcrsMbDhdQU3c1MoKQdLNe1MC9eseg5zPeZ",
  "key7": "USHV92N1xhGqpsbWRB8jxMpVosdo1Ypt5nWhVKCMZMn7u7PAwZGVyCkb3T65aNuYU6f5gF6hiUax1GuWRb4QzNm",
  "key8": "2zyjLxDR2vqE9C6zMREDHvHQien2vAR1CQPzVi6kNMKK3mZXBVCwJenE9XgG9bksLtGrZvQoNfMpPkKpr2psNVvD",
  "key9": "2Zh5V36FYKgG1ZDPcWMkW1Kw7LWgAT6KHC4sJc734xf9s3zVS3kHkLoXHUFCdpFswSeiTbt33fAGR3wotU4GZpH5",
  "key10": "cjFR3eF5W94zyFG13XAYJMyCJiomaewcBhwPfF5jNzG6UuEGUv2sU367j7NMwd8XGkJBD9LWdr4GiRjeevjv3qC",
  "key11": "27bccR7qnXNe52KKXqj3r9BuNEaXYixTcXYC5akLNm4P3sMskMBoRFaeFPF52ycJaKddqL4P8ZBzKpqFpUVsuLrx",
  "key12": "UeTUSx26Q2TtH25TvmD4oXffAfwepsuzsC39CpqSKV9cqAHdD6QTnX3Kwr77xCaUfRsidCuHC6s2z7gfKBvZbPW",
  "key13": "4wE2DuaSJpJsgdMUp4XxGXoS3JkRfvEUx2i9Wa7EEeuEWd2TY7k5aa4U5jbU1nRKJeRk9jQXjT5rzWcXCdD5UYYi",
  "key14": "2oTHuuhdvhd65mbLbkQPeQwibeymDa2HJmnQ7nLFAT7SnJpj2f7fuJNNHagg1uMLcvrHqWTNKoNd5BHfTbrqsHi3",
  "key15": "RucGxoUE9PK6Uxd84bRG7999h6SM77D9Py4Y1QRPkwuZvC2yVBrzcAqmawsHSPwUR11kcMCdaezMqmQodpfcG3i",
  "key16": "p3qcoGYxWAdDEMC3Qmm3H5ucNfmAYDaACKJYcCjegAZgJZL8FrkWzfoUQtaVx1rvrHBj7vzEti7a3VYSoboSuND",
  "key17": "4fWTWtSZ7LmDv19jkbaAbk9uxVjg3mqmDkzJ7EfM1erxSK72KgMrPUKnewxnDn7pFvLJLaKJ1ZFoEEtN8cUTFFPP",
  "key18": "CDratedM56DitbhJMjUzmRCxGomRcvfCuChkCiqg21NkFttYUN8NKgYztFqSJu8TrxesenyRyJmSCnEWpu5gA9i",
  "key19": "3hKD5SV2CLXvTZE5QCoqhxEtigNZeCKqMZDgxbgKQxfaRRyBHyPGSc8fCQTZerNn4ruYwhfWKDPyNXaE9DFzavJn",
  "key20": "1MJMBxYdvsa1AkZNFr5aXQJnZhNoMD8jca6CCCUbrauQnpYWKokhSPeyDHBSQBEQhAvviraNZ7ZrLVoauXmTKjz",
  "key21": "5nCk7Cj5FLEBwnjRgWNceXsrmfY3HnJby8W23sgqzc749p7iAQL4dLSCjq1jQSsebVu9fJiNbm1tW14HZjVFAB4W",
  "key22": "2iive2RNiNfgFtyZbSubApvAHUoh7g5hGk73AGqky98sGi1xGJk7t5CJH9iFXqZbirLaXt6nioL1mNcQAcDf2RfW",
  "key23": "5SsrVajNw8WwLCUKpBGXPCDzHXKQgBB8vM273s2hZxKYi7Zye86MXQ3FKzSmZJDjY9cDDojkQULGviWsSdMM16d9",
  "key24": "4nhnqzUwv5K45ecC5AirqV53MEAa6Qxumiu1L2oUePCWhSP8Yyeuy12tfjTTP1XHXbJXEgpg1uyEzGJ3Umgopbuv",
  "key25": "4j8BB9FwFkGd4q6KwcwNNFoLRKNZ187wPKiMNuWaUEGBhvYwob31xAAkQXmCL8xd2pgZoHqguxi5sHWdyydWn4T6",
  "key26": "95WyMi8LDgWFrQnttwmcLe9xWMCvg8ZWTfyDDXCbUFCudMJpJWicyNVU7soQciJgJstL9A8vFMXFPkee8TUiFGf",
  "key27": "5DFvkorFSPB2RnPxjRz7JBbkbtdNDE5Q7JrKuEj8exqtGGoKvqDoP4exvXNbji7MkoU6C5Zo4VjRo5D4oNf1cVE3",
  "key28": "3Ye1YxeTMaCgwyK3cFF1JrvtKjsAegH8DmD8AJ3gpNooB3ZHVPZ2coghnfBZ3kBscopgEHxiEfC7PWWghi1E9EDj",
  "key29": "4B9c1Bqw8t4AaF3GAU5BmSWjJgkNncc7zBvFy6Eo1BycZFZkon64dmeQ3HvUBBZyAFBxGHdEGkbVCRX9UjP4xBLA",
  "key30": "3ivCj6431XCAzxXotGpSFFBMJCeVQuPeHV5Yf1jxtbBYJQ6tYUjoLgfqeMLUgkJVB6dGrEEnySinCzNuzjvhESwF",
  "key31": "2XDkzkD3rUY57i7LRdjuP4xJck24Vr3kxtxT7jS8h2yNonRvHqpEgogfbqL5FMzo6sQXceCYDpw2mig1VvvDFw7q",
  "key32": "5KUzr1W6DzTkhoxcTgRjiaMSyASWM5R773tCRfjmv44wYWDS7CdKssTsd4Mi2iC974txxdUPHznwiDu5AEPZmwAD",
  "key33": "3ncYMzWBUNVdipGzQ4XWpsmJNQznJ4kzPGnZ7D9mMFGZSwZYTGjiwkx9qsxyYYE46VoAUmQy5uRWjYghHCpnA9TR",
  "key34": "4J8zNTQHERncvG1XSFGf3zt7CWUD7oEhvnb3yQpj4oAuW3ULnhtrXwTunUWJkZAHo3ZiLkdPCPE7y6XWkeDaWkGj",
  "key35": "5NSRAA2QDShYkUWJzMEuQYX4kotnBuhtjSsy2TJjskBhQf81dzWm9oUcNRvpigTNGyNYMcqRn37xW7SDXUfkchB8",
  "key36": "LvQXhVtHF6kYNK1su93haFyDrT8cyUM3Szbs8e4FdiHf2rJNHsEvy7xNhWbytecLeUuJXChGK7VMSd9m4TGNTXJ",
  "key37": "4s7aWXrPtkSxnoWwE3TQmApeizsmikvagynsxnpUo8boRgYTXGwRg92GXNtXaap3VE8Hty4YHBaqw1FoJVSa5ygZ"
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
