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
    "2J9LCbmpLPcQ1FNFzz5P1A7uEWpzbsp2U4D3wAbwVQh9foJfouVBS9AGYrXS5PidWs7TSxT5W3zg6ZsHzcCb8srh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cAxDAvkim4N3G6b61c6HViZWbwvgboCVXXJn2x5kc7fSwdSHkAyfaBrUKdUktypE2aocszCaMPYTLuKnnkoPxK",
  "key1": "3MNGuT5jQw9oJiai39GNbiSCBETbhqmKWxAY4QBPiESJaXT23wWy3Viatkt9XeVyghM4LDJCyrYsdW3gSLatQ9Gi",
  "key2": "VbiQZ224NyoRVFdWd1hD2MMWQrJzHEntJWpf9cA22FUFn8gqzCLZfiqGozACY41Fo3rvFKp6wHUdyMBL44gH9EC",
  "key3": "2WV6SHxvhr2aR8eF3XELukwJQrNrXmoryScvdtvGTMcudr78efxNS8sXcKToB8Undw7KcgRLMBhyyJm5FSG8UtSv",
  "key4": "2FyoTN7i8MjNJxQKZknGwhbVtMS6pN75Zk6B73FmuT3uZgix1pjiGnCFfY5CnEadtva1cHuavxZANgwmLVAJ4JL6",
  "key5": "3PfY4yahjMmCbQDnWySwEPdVJkE4VmyGxW42y7E79RQtXDzkobygWE1VGUd9fz7EsT264cDPBiG4J9t1uQu1BdNf",
  "key6": "5zszJ5uzbnRf8AKEGDwagUMkMgDiaoL8btabBcErG1AwB9hfeD4bocFTBqytaWCfgjiWwedz5J12BJtXRG5Hf6QQ",
  "key7": "4GzxyJQAmozegw8PBSwT7VayHD52n6pejiwZokL3KRk7JFHRASfGyGr6pLEX1RHJHzkKM6hhZRtnHQ7fFVecwLqc",
  "key8": "4Ff2neVkzr1pE1tQT3DQRqueRNdX5NufuW33YAjJ3AqmiiXEENd7X7ezLtedW2WBAbAihtAqJX9NTnco57cawA9d",
  "key9": "2rZQMpttBjmaeTh8gd8E1MLrED8RKXgnzuzyVpM5rDywdMd4rDkDemmDRR2sT29Jwob4xa6CV1GDJFb8QuMRnM9Y",
  "key10": "55waoY6zhAdrRgyscGqFgZ6kx7BjfVxaNwvMdasZ82vPLi15FxX6BCjEYqJem572Cz7Vz9djGj7CSr9td8xFf2C4",
  "key11": "67W5YFaHhgbNt62jDnWjrknfu4YjDDGAxrBymPv1GM7ESzHUMGWJwdJFNzZPaEr1dBRnAUkYoGNE9KGJEhqVuZzE",
  "key12": "4V5vbL6eXE4Fq3eWCe7YsubSdxk2rzx43qQZzTZQ41LPRMuWoBE8nZNLvaMmvNrkG5Lm97gSrZWe8ngYWAYFb7jL",
  "key13": "4JSry511roVwRDihWcSLvnnbPT8PfVko9a9yV2UCtjPf1CTYjSZQLeRMuRX9ZEZfhT1G9v9fjtCS1NXXEPB9iLmg",
  "key14": "51qKUSzmCyducLCa5coug9s8ViodBh8qGehMbxmcD5x4GYRLwUqUhvKVLKfLxK4EYJqiN5omUaFCtwKmq365zurq",
  "key15": "2XpENVNMChJcPZffPkrR7r73HYGXVzC8DhhaR6vQcbVdWiFAgzGXNmcosZVEZs4SqhAjgbRCLBnQtEWPvdcoW8aH",
  "key16": "3AsYXpTZTgnf9xtm3pCXViZZVwtUb6grT7QD57mxyw8qmgK1rKqiV9Wnqh69JjkPh94rUQVnZxDqn9uMykW2MAB1",
  "key17": "2AZzYpBLJt8yctnAHievXbtXrcvVQdGQWRG8Pef2tSq36ePYjnnMdvnUG1T75ZuzcWLdquuTnAKhfeqfijFdbURi",
  "key18": "2U4SeTxtXVnjDtybAXiWq23Q2xAL8RYxztEW74YkTq2SYjgdHC3bL8Q6zNViKYG9CJd3P1XE4JiHSV3YVUJn2wSk",
  "key19": "4oAPKSX84cba5jUkrdrnLQqyMJyg7juP662wGfaSZKxMUaL167fohVP2tCq4Rne3V84dbacgy9rr1Qr2NcaiPAzT",
  "key20": "2Ux5QZN8BWKY4yCTfNKiGA7KQkXTVyvx5a6k7VHw8vFiDwTRSmRNm9V8TCQVDGwbAc5hJQrLeKkEZ5QUG4L6VAUN",
  "key21": "3APtW8MN9vRouDWXQDnmDcQLaEdKN63CFTsLN4V5wNUkeh5m9DZvCfuNmYSqaRJSie8v5fTwfnhwa7JbgWcAaHZ3",
  "key22": "3ogzDxdwq8fr5FWCSTjPT7tEh4hEAVHEkMgKRuJR1tz3KjKiboE86SFbmLHFRTgHRXE9BumCqBf8jdYgnQCvHEyB",
  "key23": "7pY3ShtXfqGZgktVvsUZCLXaMwUP4vpbkhzkhkXoLsZKmfbuyWx9nkDxEMmhn4CcEWZmx61B4qY91ZCqi2zRfx7",
  "key24": "4kSciaRAhcXtjKnqB85ssqUxYvvWQ7LjC1UZ9RsUNJyTohLsJsA8M2iVyJF5SQuCbSbFZa7d7xKVFE15J3GyE8FJ",
  "key25": "5DWBVKKE9fgsjmqJs7YVF1Lirp66YTjAWPNgJRWn3EBvow9GGvXSuohNbdTK5VjBrv7jA8B9Wv4HjKpQZtf2yoG3",
  "key26": "2zYS33EYu9h5QF66SPycrDcWZTKfwbbQvumqMmUU6uGEy2qyb2YctRzoBK7fYoxuC8uXNSj9of9wRyPV6k3Cg4Ae",
  "key27": "5cS37FzhQ5YmjVVFbniYJLNJayPzYfKyQmwNvMuvZPmQk1QApVjBpqWpoVrePunsFgXmQrKn84BPFiYweS8zZEUu",
  "key28": "28yUwHShQgAcddemsrPVFgCUMNEiriFoe2fdEwSwQLEqAG1saLC1m8CC8GLGcqxahTidUyUfYkopsFQeHMvoGQm7",
  "key29": "4VuVzxkysp7D6mMKMKCmUNvJC1x2FeEkJJ2Z3hhTnYgKW8weT8A1NnEhYsReRrZLwvmfZAJPxVeMZna3PwcrKzgp",
  "key30": "3cEUwwkaesj6Z9FUTEjtqhvvES7GvERSup6GVw8ePiYVVxRucmr6yxoARxbUBpeZqYerUKCgWmzBZfW5RwYsmnXN",
  "key31": "2Lmctsjy2noGX7rd2LC1Y8eKUTWyBq2MU1rhaahRFNBdKuS5XPfWWCdWuQjY3uKcBFzdQ15wWV8S9MsCTgW8gwqP",
  "key32": "34QSg3PJUwRJSGHdANpGq3PYPsPVaEpsKap3FXiAREkTuUWfPCbs4BQbvT3X2h3987iYo7Xn57mtMt2FoNzBm8KU",
  "key33": "2QhazCJgF1Y5XxREUmgA1pXm67nBLhWs5hwjQBbi2d6wziamsfcnVnKvf8NzdAgqDu23CZPGujf6UEygJs8kETko",
  "key34": "4FtD1MXcWTu53dBJu6oAbUwcb7GVerm3U9Kb1LivLzbotYYtLmHzx17TLoU4QWVXeLfmuZvPsszDjEQHeDeZ7eaz",
  "key35": "2fEyYtZgQYfUDwDyvBF2PSENZzjNpbU2wNzRoKVyeFdo5jQzzFXw5WrB6hTMZUj2X645jNJwHLTmwrQxi1qGPhiY",
  "key36": "2epEhVKQt3WnUjjR2L2Xiw4ZYq4fk1WkhLMb1kAB15NiWb7i8jW3B1Lr6ntK5iUsWEwLNE35aQZB6Kxs61n97hB4",
  "key37": "35jStSFsUJy3En6dFXcqX9v25LsZfs4hSHLFauvAzHtXvg6G5JorMTXUTvaGWy3E5BwBu6h5B5AX5zUZJgqFuVeT",
  "key38": "59RCPCine5QcF5DMj2nbgFYYStv5GnHy5Mxk4KNrWqPB15WKt6JDwTCJRbRLD7afUV28P3Lpq9b8MDxufk8PbmGj",
  "key39": "3UtR4wv9vG7udznHvURUh7w85JnPguaLyPyJXgxaWEfw9VD9Agwiff6TXyzjjbKYASk6KJCrkFj6GVJJteUBKQaM"
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
