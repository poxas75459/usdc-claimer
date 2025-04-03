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
    "377MWevsugyuXbN8vfcic4ECtutToVsTCuF7FHuTSXXZdmYjUQwNktaZ4jB6x6pez5y3eXNR5ZBSq9An1smJzMyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q6fU2rk7eKcGXhTqvppgB9LAqncSbFkHZQr67D3HqSq5utkEAg3NHjyeQW35RLdyCjahaa2YRUaduV9qun1TxA7",
  "key1": "572GaGgGnar56CUnTw36Ai4nryJ7G8YDE974XewbLsxdE9edLn8DXQwJKFfr82qDDSKDGKBksczK7zV6B1yiucg4",
  "key2": "2mLiwUe7uT8v4FM9kLbxbaSUyEePxTDtgLwRcJ4Q83K8FDHMcQdDmjGRsudbHi9q6fSoJNs3dAqpikugm7iWmzEY",
  "key3": "3Hn3BrFNuNmNCSvQx7WPBQ1VHmHjBJw2TrrU32oGACPSkiU6xrEr59dddXtrjr1kk8MEpNjmXLY1t6J7JLp5PW1g",
  "key4": "3QbStuaUwXUY7s6GrTBo6wsFW2WxjAG879jnjRHwvbnuxjxNzZiSwYXSbQPup642npHdyD7qH4u8E6iUoBu8Vjdb",
  "key5": "45jB3ecGAwBUm92zizWij2ozxUatWzf7SpUGT7XM1snMviTDXtYed7oMQs3rTfNvR9sGM8PY3LdMD6RMybo1RfqW",
  "key6": "2KczBt2cq1Y4G5Rvm8jFxTcrJpaihe6pSTSWKqYstGdUQ9Ki3S3ye3xU2FMDgRnaeSmGCLKK9nqxFb8vm9sP7rBa",
  "key7": "4EP1az6f9d9MuDVNTeF6R73bVnys5gnTrx9EEXb4dSzf2cxRdgHtxHMuU5i4ejg2KGxzH5qBJFy2jqYiwhgFUE2w",
  "key8": "4WVZpUJAW9EjZFycM5G3qhWCfzpLx4WrnjaZ9hYw6eo7vfTz6GHJaTNo8s1k7zjUWV3mQTc4XPTmQUfCyy5tYR6H",
  "key9": "4PsHYkBQVBubsxrRWgvLeNFPXA35cw3RNKxAdfwz3v33qvbrsjk1P5aKfnhm31HZw1xu79FxebbchuPdPU55LJXb",
  "key10": "4u1sZsAPFwgMiyLgUgAEnkrPVSDxRvCKRkwZzpmpE8RuzXMkUjpZhF6x7FxjEcREVZ51HUHV6JZfVL9qRscwP3JN",
  "key11": "3VXjjyKeSeHxDd1rRA9oUgJV1HNvYRyy8PTDHY5Haw1u26F7VaVcSEVK1YUw1hVeRwJiu1ior3Be7RMPK966a1u8",
  "key12": "bgVAWLnRqetGmMxnvFaPR7MTh7Me5qygiBs5eXgYZ6nonDp3mMTzadYUgcH55MWPEcZsY4vh988FSYc2AwpdXfj",
  "key13": "42LuJmU1oftj8KmbJLAjkk5xgQaCK4WqNeJDDhDr6nc5Te5o4N7RcEmh7oLMnArMYmsbpmhCyyYbugkL1NyuZcxx",
  "key14": "3EYWfVaJc9AsxciqNsKJJecethK1TgmJek14s9csTGMyCvXPcL9111WmFfUf2BZsykxKcookQ7yUAE9727pWJjev",
  "key15": "5d72qKXTQ8n8PB8meko1nwK3KXHVXqPehMjjdfhj6e4DyYMZUQHLUno9k8L6RLsSnHoqk1upcJBU4G3QUx9RT7gg",
  "key16": "3CWF8cL2QagtMEjox4wKcNfi8HTrHJsJSQcnnrpAqQXtU2b3xoom4fAiC3nqSCpn82QnJAXFtbqs5rY9FRRAYra3",
  "key17": "2FiH5WMLPVk36E62jeheceigmebrY8foLEYh1Aft1hwtR1yidauboArLYKVPs7xC5NCzLiiWsAaZr8iqBgAWy2kp",
  "key18": "58Fvi2RSk8sPZM5diiodb1sv4ZH2nazQzZhEa4CN2GfCWuuWpYSRMUCzDt5UcF4TdL87GsUpeP5epCkvo1pVf97T",
  "key19": "314iLhV42MDbYT1gKXaqumG2vG1mUjUqZmbkbghK5Fw4pf6Xe9WM8Jt2ohv7N7qsFD4DPSSZBNS2MWbF6uHWumeu",
  "key20": "4dgR7UTsdii6wSE4ompK8yLWFPgR6BmBYcRnKuzrXQmmJcs25aKdvoKRQPgsfheubgd4TNdSA24Tehmqp9Wo8i5t",
  "key21": "5SKyaGXJNzuAgdxs2Cf6cjLVadpbuDhkRiuc6LoPqAWmogE7AaVQMnrng9tG8EVek982eh77WzhpWxRLzLny4X8f",
  "key22": "4X19oAEBpiEZ1sCXpgAxtLQKPtgdoQF57G8N4KnkMNn7f5RLTxXiZYBra1X7skXXet5uTm5M9EXty57DZNL7pnL7",
  "key23": "5tsHvPBGWGzuNH5SHDsLHzXbThCQDPCzxbnNE1dxb2UQJHUqs397W5Vo6bv9VgPobnMiLLoxyefUke6Aqdk2cfS6",
  "key24": "4LWeibSSnXTFABUzfWfztYu7tZJJfNbEEAc1ST4csSbNdSGEQtXLsy7rs4v6hatf56Uu1LzjFYNsM8qMfRCoEgGp",
  "key25": "2wa44jChGnjXn2n9oc1GYreYjRo1r6f6YnUnURz4QDXkvRYFgbLFbgq9iV1kRQncN3tVHqz1J8cmFE9ht7Ccyjdj",
  "key26": "5jCSY4t37bjXx5UZVsEhjmx1YU8Fo1XtJkrUpaHmjnYvvDdpZxPQYY9sxEuaMRjUexy4NSJhFYXNxeUDwUXpavmL",
  "key27": "LTR7oLrVJDKg7Pp4ayJhhrRytRsH85dbPm9qUZFVUtBFazkQCi8KNBDVpPZUybQAYHtCYHQ1DZsq6g4MR6UiAqw",
  "key28": "4afbc6mqyYgjbECoQJfyv4E4xnBr2cj78DQwv84YPD5uMvtxU9EB8rscFhh93udhBqtvxX6zhQ6rADnQnZeyBDqZ",
  "key29": "51BujQRRXckTaJ8ssyfs3FekBVbCDzCzKvYKVEGs4BRTJmmnYgzaLqC9JTDY3fiLj1kTW1ZqePdJ2Z2PUa9i7jGd",
  "key30": "62Mit9Dwcz95LnUEDG9Mf43ZVBf1ozVxVKZ64qYK2GiqkXskwJE3edBjhRLCYXZFqAthe2guxdfevPE4i53BCJwG",
  "key31": "4W6asTo5X2J61E3r4t6HLePLyXj2DH2XdRep714cSwCvhf8ZwrgtXF34acLgJ36cMYNc1n7WusjDUy2ENzaxh9wB",
  "key32": "GTfr6b6XF9897B8iA8BVWi71ccmqfKQP3Q6NZVo2SbgWm2cYRwPXb9VG7YFDG7szx4wUTm6a2D5prfRmR2DMMu4",
  "key33": "4H7LFMiwNwQexYTHccgUATY4ZsPSBge54MzfobZVsbSuwwE8Mx1WgKjkfuKSdwtU2AdUr3AurSwH7t8qUUHd8Br4",
  "key34": "2pxhUTirmLWK7PngwLxfYShrWSEnvx48zBMvsonY7a5eJqERP6niVjFpqvCK88LgJuNiULqLxhQTitXvwiwssRcP",
  "key35": "4FfcEuYQPwx4h91znRZY5hkHJqMDWuVEjjH9L2YJNRXPhyzH7FgVvRqn6idJdqzYD1Ku3yGQhwBeaW1qSuWg7izP",
  "key36": "3A3QjmKgWnWW131cUYE34KzVBqHuEWH6xeC3qvv26EuUe6V5uXyhnmBFr2WeKwqa9pc48W5P3yQJQ6Ez4Ff1Fszo",
  "key37": "4eBZqNnWjMrvg4dE8xpmaApR7rjuS5hbZ9y9noh9kk7bDYBt5PaffMc4ir5qSHT12DbRU72xt6UKu9M8EJtZ5acU",
  "key38": "3UTQYtBxeQXNNmuydG8VunF7Js4ejPBaTGcEU4jXv3czRdfyxbgBcrZSwNXryN3jvjB9k5ENTzg5Ce1oPBCaZeos"
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
