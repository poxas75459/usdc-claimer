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
    "T5ASSEyVngVRsq2vYqfindZ1ZKvvSDWQtEWtzhs7Yj2ERpf8nhou9emEGaFs6Bgsfpqes3CTZU1GSrnbYk6ze8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b7vhDhDzrX8BSsczzUyhaVjhhR821Mfm95nERNVq2yKp5aaeFk1Z9mHCTVeyqk2EtU3cqaiQ7oJiN95HNMgYXgJ",
  "key1": "393M7YdWPE28kmfFzoK1v7TxmzZ8uiVpcAAPFBRn8jv3pFm79CsyTemZwkZhyBSr47Wqptss5QfHNoNZP8Suaq8f",
  "key2": "3SrdvHPdWzyZyvE8kQdYydVknn4Yh4m1SQbYEoVahf7MhCbrTQCAVbviBvsnpi3PLkVELoJEGYoxu5QbfTvYgKiy",
  "key3": "oB1mJ7ntorjbotu26ZVUfZG6LEcbJdgUoUgmmV7f5m2MNBYKbEvsP8rgDL9Jjz5mXp4rV5v8PRNfzM6HCdjYgCN",
  "key4": "5sexTLVfRwtSBrwnbZJdbhSJGfRXAbRKWs7BYgze3NToyHDU9baUDtyYCFxS3E9LBUbhu7neY9TUbYvU7hQvsmJw",
  "key5": "48LLjnTKXfXExpK2re1dARk4kWsv4cpCJjvUpRUF8okhR3hgoA8BVhR2x13n6UXQXuyhowUauSJtSyVvgQdgp1kc",
  "key6": "4vXsgx2Ne3R6S5QVqtQ1LuxVCvBoShikFVJq6yX8CZ72JPQBpZ6h91NEFFQDuyS2d3TGNkE4dG584vPfJxprnHR",
  "key7": "4eoH1Zf2DJZJaZkJdscjo9oWrBD6TJCDbM1ZLfMbhtuLZTha7ZtE8aePbevsvNUANri3rWn8sPMH3xRbKGgmzttz",
  "key8": "YQZMFLVvnt1M9CVW6e2YozNzgvwxNwkpkiot3MrKRot834YwT3w7k4QbdbizgNtqSLMZdyyhdtYhtYuWV7H1VZM",
  "key9": "65eHRm22Y9VjjtiUfUfdwWFKonsWzKSvnVuFH4yTUDvMs2vQuJEGYWSGGEeWKeHZzkELxs4kCmsgKWbCJVZZi5yV",
  "key10": "3p82TYtAR5RgSZLVo4zgY7U37NTU24biQuUdrd4SSPbv3trWG2VXf4w19hqmF9gde17V972Yd1MWtk9Rhxi4F5kX",
  "key11": "3qkejqkh6uttkVoWqFvHKBXDj1Zq7Jttwq1FL9YjnEo6QKA4WXKjheYjhcAASjXGBPqxGBkwiAiVM8FyRLCXkHdW",
  "key12": "56p3gBX1u272HmhLZdjci3THkUSPuQ6yg9VzjpvGGccdZD1fH7zohy6hArupMo3QArjTmgb27wPtCfo4ecqp96D1",
  "key13": "4AJc5hM1tbvCLsCLehicpYx73hm1YyAnV1B26sPoMiXaHE49TAGGNNScWwL8tRoXsiDSUSkw9aVE86qxtRDdMaM3",
  "key14": "HdbpT1KhQdfzb6uddWM7nE566PgfNHTF1Lumud7wqRV2PswLHAsSiUX3oddXhW6L1FKpr5C9nMQX1nhCgYuANJV",
  "key15": "3sVjX4izos7CWUpZAAKw4QnsbGmi7fTHhubCUaNrgCpNbbSYvreYCmtzU7hViLZYiek9J5prRprfXZtp3FDHEmhQ",
  "key16": "5DRcfFnRBWdW86MbEPC9RMtJex6QaHf7TggDEnQa5StqMjqR4Jc8KzmZMWuTavDfAebc4EzqdxhDjWP9vtmXyFKA",
  "key17": "LKypxH1PGXUAgKVSjGBuftkQ644yh2CcP9ekKGb6gptd9CmCuS1JNfMsYMkcd3TxScbXxq1vrSW16K158SYYPrj",
  "key18": "cLmYWtPQPgo9RrJHqosTxJSjgNKshFRzttTT3k24yQ1k6kvAZsxZsJj3EfBnrVERE8VkqSq8KfUr1yhhFQRQ86E",
  "key19": "xHCwwKyQd3S464vA9RiskLrniDCsWGBhD84Jtv5Y4wiCZgb2ketA9V6cwRYL8NpJYVQyodouDULLmYyYBUgvw7V",
  "key20": "2CQ1MjhvqUWVkb7cgFGUrpfGqH8Qv8g7eTd9v3YxwKAvsnkqPPyRiQBLEELopAErPCxiNhGyqv9vZNU2ew5oEbr4",
  "key21": "yGent63xJs9qoq9TGjTNPJ2PiZr3H9Twrp46nEMUR2MtjJyiye48wEd6iMxPut5xqHxJ8DwvKJJindZ4hrqYaU4",
  "key22": "2PUKuqN2YgqZT4Wqu6WdCpZ7dj4rm4mxQqokCqsk8qyzYtTF77TnsDSfRZsmBd6fJk6sH7Wzbyq9mET5H8t7R6gv",
  "key23": "2qQZ2pspw6BydS2NyWd9CXcThwKyNvcQ7UHCqgMVN6wqw5wB3EYdsonjCjNtqwFvBaGyH9iv1SXxRZmsYU418Qrk",
  "key24": "2KrJW2g4RxGtAA1KzVr7CNLrKcKH3a3hF1vTTBWJXgRZtRvotnoupJmtLErKCZLjyGPeftFUHZKYrBFjZaKRV9z",
  "key25": "5W8fKjLcbMtwvtsxPTUQQRroLWZyXoKqYwVzCScqGvMHvaTH7E3TKjLCgpmvTXxEZ91L1jZE7Fv9gjyqCfVed1Es",
  "key26": "3jXc2TerjwAUnzPPuS5fpAnPtUn3rEzsvLwFtJyF9FErJ4matT2V117PoaDx45rCU1ZbT1UxsroEtAhtJAkqXxnW",
  "key27": "4KWBs3zrDJ3RPFWL3duAThQTwZPmRPtLaQEkDd34McT6dFDdLb3KQCePo6sgeTBuohhFsg8duF2AYec3Ykbzhsk6",
  "key28": "61S9BUcg2PZT8MUh1zJkmhTdLYqrohNmRyqaMApoR9pLmqPCaTX1VksNAxD5jfHUzuoewhFjMp5xRHhUeAyA8UCp",
  "key29": "3XxheZQPXz9FxPDxcwxmK28EsJanzhug8msPjg7XLL65AJMGaiYwHDq5jhwy9FgE2Mh5EW9ymfwS42694gZjW3Z9",
  "key30": "34NVjSumeWb9fjkLR2Vm9qMz46Rh2fLN1WjHMBJ9DoyJNJL2cjaF59QRqqKf5KbKYA3zAnbRBj59ADvzxeQh6tJ4",
  "key31": "2a6DqDkBUzzduGMnnqeqnLuMiHQ8u7HzHtwV3x59ywBvYQ7PT4Ck1KDRE4A3dTeK8mPjG4PXtME5djsnFHfh7FQk",
  "key32": "5eMu6uYGDdQCP51YsaPKat6C8ttMVHquFJqrjureDia9v4QqLU2CwEkyDPZFcg7oNuWmrz3UZ3CM22r5rmxaBirM",
  "key33": "23acBZRDT1nW9XbATXxxMaMFMLWSvD3LHDGJPJgWTWX8PqKYgQE97Q11xr9rHGPYinKA98qFoU2NSqks2C3CrS1P",
  "key34": "2oBRH5FBcpJYKqtYmCa3hMv2HEaaPh3h7BqZU4rbs3arHNMYx2pwa8cPRmn6rq6aGa7QDhto4ZDyr6bi4dvM7k2d",
  "key35": "5uJkRuPyh9ryQLjWRFsP5gLHWtqaRnqfBn2kx8CD1ZfRK4xWp6rUxK2D996GKhZjLYKu549Kr8ALmVpznqRNJrXk",
  "key36": "2JXPeU9xToUpFmUzb8t4oCAeqMiTjx73Ton7iyZZMG15JwS5CjvEu9eevnTCh2cDNERkZbqoNuZyeeS7MW1KXFUv",
  "key37": "5ghFABRCm2tZG6i8k8juGHcivmMbxiB7XWtR3ncDk5cULSxNm5h47gpNrAdeo1HFYXWsfPg1guCXT4dezn2cJzjH",
  "key38": "4qZziqx11vFiMXMgNWz4GpF7m2VqXcnWvEHMDsnRzgMcZ3ZbUvusa1jEysai8dJHxrf9ZjHF7gaQyAsuvJNbAmk3",
  "key39": "2hgCBA4vAgTsvoeUdJAJH7B4PxzcfxKw4zyCqCHF6tgkdAVKchUEbAz2HRyhpM2Co1KCNgGxViD3YSAsT9Jkyvb4"
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
