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
    "5YoSfuTgYnR8UkwcpH29DtVpsgcJEBdA7oXZJx9966mEJ2Tn6m17HDGXMjA8RmvCuwbE48EZjAk6g5qd3kunv828"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5geTfoiq8yNuCmXn3EnFeFp5kJBoBPfeL9EXrcLvK5X6G6XATSpwXoVPvV6oBJtnvsJTQePGPdvDjW2V5b387k9z",
  "key1": "5AErWS9zf6zXn5be9BbRVKWqrZBUBHfwqZwFqvLKjQj9rnJS8fLmf7Vo7uDt4DbDfMT8swZy8RWQ6RGgnW1mJNYH",
  "key2": "4o9Pa8He9ZH92Z8gM18BdMW4w6nCb6GGN9QzZBjaGvMxPs13z8Nz3y6TNSh9n8N3DpoiqhYDv7upeWTqXUVAnKAu",
  "key3": "2Rzdf9Ueh6bKiUBN5EakJVLcx9Wgib6rngdWwjXcRgLzQJiymgVPKsZ3GJC8r1FRfb29ms8TtupXxKJ5BzizWWU5",
  "key4": "5m58UFEs2uYY9SV5zGrBoxVBuEUexPBNA62xXTM7V8pr1AMnqdMdmr7iSv8HN8t73nFHiVfYZdEibJ4hXJJQGagW",
  "key5": "U9NoeqoyRmrQ94yu1Nox3UrgdFGgp8G8wMFY1odSfUYWwBRY4tLnnnhN7cf193M38rk8JKc4mFhxwxmJ2FzrQKV",
  "key6": "22zPY1xAdUPBfZJUF9nN7Kv5Vgi7h8UiFXyyeYoYgJh7ZFXxWaRrmEEyf2yfU5MaPbEd6vQCXDVauQ55pSRhypPh",
  "key7": "1bQhi8PcPpmhe4KsYVd5B8EinavQhdofq13LpPC3adfhPgcdwLjEvEsdUpriGe5YAKJJnsUD5pdRviTidqTuUZd",
  "key8": "3viGeVR8VkUYL1DxXkxVqt54JqgPyBN5dehMAfejg6Zj5Fd5QVPKVYgMw31fjv34AWfg2iz7ri9FKNNLtqogsDcT",
  "key9": "1JJPBEJ6y8bDfTxxV3NN1VCBEQFBV4VB22CFdBwyppCDYVdyNo3LerWFHWHQSgqpHreNdbyGhGNAF27e9FWiA5q",
  "key10": "5dsgNRq245UiNUkVEbnowYMtQdTNEj7J6Uv7qLk5hdrPhz1ZmGMYCY5DFFDJ1ATF9HVhhJyKMsj9RZvvRXvzhdgs",
  "key11": "vUp2PiYCFXCJ5hdb1vsLS23Bk6PpzyumxvZRJrTsYzgFLE99CAXJntJqNAeuqkrDVkFPLJyUzenU3PXSL2PCj22",
  "key12": "2Rfvmr8LdiuCeCntfZ5CWfhZQLqsiYGE81QKFGMN9kPXVwx4AuHrYthaGiHbsvn8o8Ro8sYyaWFibsS6eiZrmBcm",
  "key13": "5ovdG1hGxZh4TyeZ3Rjp2YBok2UGs1VnXwfAKkyjsTrTMUSo88cAxxgCzUhW5MjktdKq9LcQAJ4VrABDjzJFQEpZ",
  "key14": "2pkF1HVNCvnfvS5Qf8JSbYmVqAkUrV6yqrHe8q6oLVVnx69S94A3mGnCTjHgnWPpoDDRnNBnVdV2aQJv4hNHE6XH",
  "key15": "PfRGF68sSLRSgPc54NbQMPKbFNkRfV6axPZi8fWB22rTBLivq5vc6TGoq1WJEJCZU4ocLeqXBios7HRJ3qkAHeR",
  "key16": "4ZitRrzqDBRyqd7ipAAe3GhvjYajF5Fv9cjbKh7eWhFGFZkaUUTLoCDpEzXrSNKHtNPHXfo8rURXVoMBgrYvHeky",
  "key17": "3ueyoS7MXbe1h8T3oXxw8aw5XaMReoiNF2AKCDANxeDLfC7mxk2u5SyfcDoy825vMbVDZor3X8kQYp7aPXv9Ehtg",
  "key18": "3Fa3nmgGTKvEExjQd4K5QWZVeY7Cc87XK5wUX9AyWzPEsubvJZsAuVUsApEjuM7Dsv8uXUDSF9EwxUTwpqkWRLtj",
  "key19": "5etvFMK8zPjJDwxrXmn48g9e8tnKUG6K2AEisz6q6oZ8ofMMzWUzZzvQeKsUTZHxRKJh5DCyHa7ifdkDyZipMLqS",
  "key20": "3TrZ7VjS4DBey2SU5FzyCLQttz2ns18ZxXacYNvBJ1mUhmVbXcqhnoiJb1nn2ym3XF1yHy6fgvWBkkWSagrfKkNX",
  "key21": "2NGS8NNMJ4uUvDVzVUoWKjnhgJ7PiZaeP9AJxhP8DtW4BmD9dSAhp2uopvmP9u9Lhfj1pYuNcXyRoJMWbWAm439p",
  "key22": "Mrq5KgvVnzWQj4rWYx3aXjZHg2CLf4qYuGQAGfBVULCeBijmBR5ToFoB3zm4MCp5zvFjxuzyvdaVoGrTeBjmkzo",
  "key23": "3Bk8v6HgUcaFHMY5v9ZVZeGsShHh6RHwRwwwdNjUwU51MM8wz7Nh1i4CHr1435V1LFj2vsyoW7E3tpYocVBwbWiE",
  "key24": "4Tjb5WDoXS38XaVw45R5MgtzqSG9bp9oU2TnWmsFgJoTon59HV1tFXYTt8WACUKx9SaMiGKRNAUpkbB5Ls2smvXy",
  "key25": "33XETejY5hccfZzotoDRSYyu4D5wYjhXiB36Gh94X6cbFjq3kdzbcZT2nDLUU4zzYEqZVeQvHRZrpxGsGKgSGWNF",
  "key26": "2B78J5qAcnSWmgn5e48A14VN9WUCt48xiSeP9B3r8PuQu1n2QLU8CNuc3BAgYHja4MXyLNfjDXSDoZwkBM6Ka5vn",
  "key27": "5wXgj6kLhcN9o4tADGSiNWwoAvKRzSHXNvRngvHhJ6Njvix3XfctTePe3snZbUgjZivpr82GSJUjQi7n9zkEBtjk",
  "key28": "3jgkg85CAZ7oVHsuv6RpzeU9KnKt65osouUr56KKpHqe3cGA3QNtuYn1nKEgNYQExre5hhgtyzxvXYZ33diTS8NF",
  "key29": "4WT7nkmDU7Y8y5twT8uoheJgfUCVRYWZLjuuSuWtgnwU5n2pDwRU1jfPDziG349Y4yyjHXLU1MrDKyTRQRVdjizA",
  "key30": "4Y9NUyM6M1DhFL4Uv8xoUgtpmCbB8CNBCYZDucJayHwwDGzZhJtaUZVvP1B6gJ1jHffRmJTQybmxvNPTVRyqUhYU",
  "key31": "5noLhDE9AVyah8eCncpcGjY9S6KBnrbbYSEKeVebK2PPyX6FNDyHMHM6yjVvAJrsS9sNdEWpCjjqcJ2Pbnu8yks2",
  "key32": "3x9nBQWHSHUXLDv4Rtgai4vR4dJZ6QkeMWedWjhbx5Nz6owwrLbmibAFcCnYeNKhjqS22scv4cBxEP9jYyqMfGu2",
  "key33": "3E71n5CQqieXtVGXCq6JSCtSWBKPNHxN7yGrNiWfp4YQf5og94BpuiYBKEDaP5ajGtzdPNp9xTC1YvUSAsM5h9yA",
  "key34": "3BC4nugGwUjbfZWqK8XFf8Hj2f3dDA7pEn5u9hRsAZQYnTRCfx3t1CLfB89uaSvvoMFqWidDauzfxXaQKjrjcF7P",
  "key35": "4dDRCfLobmC1jcXRY3f7RaFdTUUuPECafUkjNTYUNv5mvRZKu2E8Yv7x4BfiHoJmWXQnwFCgE7QYC7K3w21P9EnW",
  "key36": "2FePmBWdktXLVYtoXdEQPXASsL1tq3gCXkGBGjZbjSNUu8o8yVPE7csgRFpRoijUt8DGiF4ABurnVTix5aUrTyrz",
  "key37": "4QDDZis1dPQXD32udA3mT1XVenLETg4nXqBfFha8cdBE888VyYRwPZJGLFhoWQwPGeiyEtwh4CcEP1DxTmMiUpBj",
  "key38": "4fwQrZsYohw3yLo7zVttjFrYxkf6HpuKjTVMcK9GKxqej4581WiMh8V4Bg7gxpLryd6pni7dQt3ATLBt8ryfxjkb",
  "key39": "566rWej9tuo1Lk2s7C6DysNzX5JH4yAjeCAsuof7xyi1UF4NHiZkdEZZMvxuyLV8mQqZyDCt8DhLJUX5mXFGsg7w",
  "key40": "5XGWo1aJLqFow4ZKsmE8Xa2az8yQf7C4yJ62vocUYQxqw2oGCVSFydUrPHzbZrf74hoGvv6Efetx1zZe7itn2rih",
  "key41": "zrvxJfLqVj3fXA9M1KTwvff7G5DvHxrcTb7GfKbq16SvXkgMJ6qLXanqu28eiin6FHX1Y2gS4kZPiG3zPWdaw7H",
  "key42": "fHXtn5T6uWyRAGWx2mAKFwULBz8uiE8hgpZsh4AuunRbkkmV7eg2kywCgR73q2YHWnd63tpBU53kquKz8RE6RMM",
  "key43": "3YFA3pE5smisvKtdx9ULbFB8Y1QXB3VrFAgaZrc4ufLDK7RUVbe4YdRhnHxqSUyVFZP1hiV4PT2ddtXzte5KdK6v"
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
