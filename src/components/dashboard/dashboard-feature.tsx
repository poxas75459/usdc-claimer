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
    "2T1TQuLopjvpP4Vo9FiAAmBXog5JkCsTVAx99Wm3Nmf4FTRw7ibvZ8X5EbFGz7sZzVLMa7gUXbrS5MdBiW6dyok2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pmU6i516VyZoV5gXZvvZyoNqSGCMBGvfviTpR4JudGEStziUav5dR1DmFNpe4q5FLuHpsjn1pkUzJf9J5UiRSGe",
  "key1": "yEg19NkiapbnRhMYsDPyZz8siNiwCbFsrdPqjD1DSBjjGKF3Z9j5a3QLY8fFGBEHj4ggMaBZtvDkUz6aFdvPEDQ",
  "key2": "4x7mT2A8bHLMWRppZo63DJH8EicST45ZdaGA7mW4jjY6vYNktAwpfAan1ypARe9ExGN6cnaPTzkoaCzzJ5JGWRJs",
  "key3": "52YFP1epFKETLPth4atkQLvP8JVZGYbYxeP6dBPhWaPymec7xiK8QDsGNdmnDq2ibF6Lkjp21RH9kA4mEeQMUDz6",
  "key4": "42UQEzRvmq2BgEeU2KGGhfYCurnj4XVPnonJw63cPjYMHL5vAyQ5ctZDfRSPVQW1oUJqEKmM9fS8gUBuA27BJG76",
  "key5": "3mfSoUzqbmGLTHXY8fjZiZgWfJrdPTWtnxz1qaaCZzM3FFWXSptSTww58vPucs22C1JjNJsjdNvjJzXydWskjbb4",
  "key6": "61CTSbCsCg4WUB4f38yNonsZ9ieTg8Dzz9QQwbaqtzoZpyvFAnqQkAAuQwZgpHihkp2ihJK7cyD71u8GRH5otrGA",
  "key7": "jtpgDndvwswFM8AMBfjACMnz9L1aWnSXsACSNH9jy7TgaRoZ8NP7nFbdYXbdHjqb5DWz49skHMY44xazyUH4CHY",
  "key8": "2cm9vfBxj7ydiFSQjsqFHi8cXy9Ax4kEgfCV8h4yHtweETZq9NfotgV19MQfLk382p1iCnjzJ8SrzyoKvq6XEPYY",
  "key9": "3QoEPXDApxpSanXB2BG5aHZPM1VrqpNJ9GSRPgTkFKmzN2VE7PMZwboUEm9nYVV6Smw74aoJRESmGbAn7eraG4DT",
  "key10": "4GA1Fh24KByt844tnjFRkYnnXHQquBX6FJ2dDSvTCHYHaKjYzBVn7w9Qq1XXnyMxmoH4KPB4XMTqj2evLhkRpaho",
  "key11": "SDZUPQhjtRMZz1ku8xnv9mNPTy2No5JJK621Kcj5gaLVWv22YmPEEk4Nk65m4uYVxxmVyPPo8SeVfhjn9sRTU5i",
  "key12": "48tJy65S3qeyGyPAzsTmqx58esANa12LMS1kLt7nEVnVWTYRwaVz7uR8poq62yoTmDeunrE5Sxp3UAuCJJ4EsUzk",
  "key13": "4UjF9CoreqiGajguFwztsLGhS52sMCDqqXgauJ8hAa9bMR7rpu2Kpvj9tvkhpM5uPZZJsxxJQWCRfFRscJqwMBfn",
  "key14": "2txU9hYyg2yEGCYna1MKHeUNfP1t1NVsdfG83UM1DTHQQW2XEBJvKqZXaB2TjsBChqRRVDgLXiComBLSdsMuNdS6",
  "key15": "4NERmPYTZCYtMGZkKQDRfGMMi38n7ZV5XKkekNqpNENjW74eBJoC4jqR4NHCbtvMrzGJb9LpQby1PscLXfLBVSbR",
  "key16": "2z2nmTe5ZmVJ8cfi7wFHfheitEh51dCuYnQnc4mcL3rHT9nKagBAJqh85CwBARtNAXhiB7bJZhrg2ymW9QXcfvv9",
  "key17": "5T5CzprTcDeskPFfqdSpvXM1wdK7gaY33T4JTPK54dTX5dsk2iMifnr7YqT1CHJETGJeDbotMkENagFBtYVXSZJL",
  "key18": "2ygaP7hzmqH7ohGDmJB5Ecbt4HPBWwfyFo18y4Dct24Gh9bK57Abjm8Apt2E1jcfEoY5NPpuuuw8MJUD8MkSp85r",
  "key19": "4EArow2UFmHkqZSeofU1TExPcWRSbffWfdmEJ6a9tZtikhCdSV9w6qEMZwKLQmo3VUNfA42xLyM1xFBXKmk4P5mk",
  "key20": "4Am2cfufT6aQL77rurkGk9URWzriasc2xm3aX784ECCdBJtRfzsg61r6Nu7bkzwAfjqn4nNanDp5sV3gF9Md7pCm",
  "key21": "5V7jqnsYBA2ZHjfm8YedJ7RAe7p5mmkJdEZ9ZvGHf51WWNw5YK8LTaGHtoDePE8Bfu83TcNvzT66dRY6LKw7x9HM",
  "key22": "ZG4hTam2P5aNMqktnKKCmWJrCVknGGn2jwennTv8ttfSPe13RtkThQXfDuYN7pxWCeW6i5sG7FLXhcDJKUPFeEm",
  "key23": "4gy3zNvj96gDZm88ERMALCNrF7CuAADeTnNNcAQJheZorhapim2hSy6V45wdXRchoF6Y79pttqps7E2dXKTYeouc",
  "key24": "rKsDYuFYhQAc8dNfzQb9FPzvQVUWYsNoT2sqNVVk8hg4gs9foPtbwDcjJ3HFo7bkVyiDm6A1kPDCPMF9kJcdPM8",
  "key25": "5LSpoTpLtrQ5TCSnnKTSgJHxVVAUjoRNZHbX3D93FUMFLreRuAVvn3TzKy1WXCxNxNHwdbY2qyYa486UNDXegjhc",
  "key26": "4c6CCxQGsfsotopXFsr2UThSEXHNZTNHNJXqfyykNR9LGNWgEisRjzNYb4YF8z9uNf38cXFbjuuJSjApyUx2t59v",
  "key27": "3z317Fg71iYgegzWqf3NmhnbzH13WBGAqCjh7Ghk4FkrLRx6ro26Cr4oNxv3hsDpWhiZtY25oqg3FwPHPj9kGnoc",
  "key28": "MojV5EDAjVj4dDToEsMuh3iAdqM6V9hSf5QkYndZcBC9sxYCJ1GvXzJJBwBAnyzWTWVdVsdg9PjqanuSZZd26s6",
  "key29": "3qxYNpBYHFy4nUhcctFe5g8ewKgRHS9iEGFnqxuXdKzT5bDi6dH5KxKRF8qCPEuNfCynJbZDZGYMXFzyuzULgAJK",
  "key30": "3sYBD8hkFembc45uKgma8Y5KjZdn9UUHnsq7tLGAiaiNJnNvUqTAUiNEscrwjaNx5xSkyYFSWQoce4eZV8HLLtnn",
  "key31": "58gow9L1suVd65rqPNCaF2Ka7dHYnKGYDdsTaj63abD73gPvTHnMxiVAkcyFSaQPw9Vyk1BXkESs6MoAhBvHYbZJ",
  "key32": "5XpQwe52ZpaopKA2o4n9jUSNpurxzkYR6e7PpNe5gAKH34zQbrs4zVKPTEf3DB34mE4CkFVwYKPnPPLYmxb97Bk5",
  "key33": "5EFK3EaJMUfaJWkXk55KXKqGhC2aREQNM89Hv7gAHeN4F1nUKZaun6Wup3fzCrfwx4QsqkQj9MqB6r5LeZBkCTgc",
  "key34": "4LHPb89QUcdHqV9h5jfQom8gSmS8ZCnxE9rMCJ2vNm4ym8S95YejUk54YjkQjkaVrihtr3KmEDJS8wCJUvVruHP3",
  "key35": "3zePBSwawecoue7jSiAG7jSg7xZfbTKkfgxhVGwk4RhB4haux8yuK5W9m5sst1bMPJBQs9SHgTkLkwQ7s2QTq41J",
  "key36": "9n5A2K9R92GG76VrqFCseWPqVhPS1s3oYwg9e52Cgo1M6pC1bY1ue9SidneKfsPWkX1kgK1DQJhGCP7LaBqZKq6",
  "key37": "5YN4xX1scDVmPLY5nirJhasFyuoAUoJgVGg9uoLn4AUxFxitiqwdQaHjRkCZceUiF5Kdck8g33313uXDTPJHdQB5"
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
