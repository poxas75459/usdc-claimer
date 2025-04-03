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
    "5N67xJJdsnYqEBVE4tonAmJ1eF3DoeH3sRsBaobDLPRG9ke6jMgYvyxqaKpZpqENBw9PQdodWBtD34dMkucPKJEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qa67aiBPyXWy79nowTbnkt8mbrVCD15zdYhicPVRVE7UBTXsxrcRs94aKRVNcthqFWRsjbVZaxFR7dkqCdwWssv",
  "key1": "Te1zdPuBJRdt7h2MeeneTM26AM8Fi1Z8wj7zN9g1XWBeahkzShg6PpVSP6iqdTikxpotKQyU6h1qMq9i5oWxsYU",
  "key2": "3k8w8Gvu1u2JzRpqJekuT7jR1dRMS5FDHkhVL2sWo6kMf6vzynNK8z1ivdHn7tG44dvhbkPZHJBRDJbe3442smyC",
  "key3": "5wd3pR9wts6DEY6CPdpjKbbjZBH444Hpmy8ZtCp1LeX9w3v2aKaJMtofwBbxBfTiGcgFvCpY8MvcEgj5tbrzG6SA",
  "key4": "2gUv4KV9U9Puq8bV5ViJvj8JX9B3sFcUMxgFptN8sEdnhhrE45kFmkqgmjf3P3Dve9otaJLRMUQPiYubggPnjkkJ",
  "key5": "55P2GFjfggKjY714LuFkzzyeBZexM5LQWNUVAAGoN2WSVj686aDrNacqVpgxkG4dYD5eJJzHGpDqveEBHogYXxyy",
  "key6": "4y77XUY6t93jgakvW1CLmMLD2dWgCRZdDpze6Xsxqq5CjXmAjUNEdFR3kh37Mt8z8BUHdnRAi7Buk1YekECxgJA9",
  "key7": "4bDd6iyufLZXveNNcCcCK9nZNZBFBdQx6GwzpkRti66KqGEt2pjMQBQqJHiehQQMk28LDWAT7SUaufnqMTeWQ8J2",
  "key8": "3yr8q1Qm5gZCMXELVjSktCiXwE6KnPY1UpzYDfdTv1Kir3K9iP3m8npQcQkSDcwu1e4RYvvuPpY5NqEER3iMVJUa",
  "key9": "3zCotWgvMZeTQZGJuScPZk499aMSNgAEGBJocMqaciS84UgxfZ7if7cH3U7JymHFc2xNkdgeLF6FJxs292DjyMFk",
  "key10": "5ATJHi2guzHRNg8LHCk6XuudPKmHaJBqTkyf3yQrh6DTDLB5vTaD2t6DMh6VqBic43TF6Y7PnSYu9xah9vUcz5c9",
  "key11": "2qnYdCeVQJMSWDz4tDcwrEF38dGcNGiikYqsKyjnijpkAZR2wM6ZiLypvYhrC3Unum8TD1nxifDL49boDF8scQF1",
  "key12": "5u4mGPtWaAwZYpZTzvPFMr5GayMvDFvM93S7Ftru9K5FkRJzxnAf6172ac2bA1vvUMCNaTfQxbS7r6htVPscwrzu",
  "key13": "B1gLuYVj2rzw8eYvVmRnRMNYMcDUQ2rhWqzoAsg7jLk5HY71a3f5nw5vVaqMo2xws2qVMxF2crizan4Yr66HJLk",
  "key14": "2thJXJThvZzynmxEtRdpJ5iWuaTJBszSvqXXUBnBHSCvaYvm1zVZfgWTxTUtQE93sXPjdZjd2NmBeEcM34pkrQWf",
  "key15": "2etrj88Deuer9aJsjkkbVrvtKrFheKBtybT6xeegwgmwbFESX7etwrdwpqV8FfVETM3XEcksuVjYuASfa6RdJ6B3",
  "key16": "35ANmzpx8KrPiGhb82ReLBZD6QGLgb6yWDUKFA6SZdQYh29cb2eziHFdFAQzP1tSkRjz4byi6UCujbqrGvDj31v8",
  "key17": "24jaQ6vDkERG6U7FewhkjfFBfTh8SCCE3r2AhALR3tePeDmuUZYdFj5KLMGzh54rargk6jp8owLGvgpgUCdedJCB",
  "key18": "5g5wYhjEx2WHwnZXiB1QjJMCrZYpNcgVN5aWaqMc4ynW8rQXy28QJDLiS4zBdsxMkypCCUX3xjQyrWak9wdAWJK2",
  "key19": "3X7QCFFH6bFxUi3WiZ1j7dvr9DKwQhsCJKNCxDmfCSsU5cFBHURBFKV4AEzwnHVwXEoLAJ9pZBnvmdGecXpJ9o6u",
  "key20": "hukaaGTVm6VTMCMgc3Shhk5cRsAASdpmYfx6tbb6hMgxwHDgUNxB1uMUhUhfXLFMHp96PHQkBbb4UNqwgVQVDEt",
  "key21": "4W7X2p1jApcrDL1ViGph54XaMp9NyAQpTvwEL3DftXYGvYVLR8B7VhZYLSCnLxiRPaqtbNvNXy3FZo6whvcB1sEh",
  "key22": "3MtMBCUo7bYXgsv8u4y9tVT8whvzatD68niXX4qphHn4LVVY67ZgCx6gn2BCEkcwjjUhJsiSabkv9rBT923PhbmX",
  "key23": "1T9QUxdh8FKbxtRdBURnFQfYNmJ2KBV4Yx4jnYc97HRBVjniuTywm9D4fqqJzR8o5Xoz6ZTY9aik5KUt27ovhxD",
  "key24": "2HFq5CGFD6aZQo3yWgtcEzU8UqGry8rFfLkYp7Bus9BkwZNZZG9QcmxjRKAAX3b9pvD9BKVXSCFdoLw4LpyWXNgG",
  "key25": "5EbCraiVBKrsR3W1kKGH2mt7P1PJDYFsZQNurUexq87DANnfUKeXTiS9gVBi4VrLQAcy38z4jan5chyqcbKG2k3U",
  "key26": "a4Z6hDDNdKRFvLUb3WWwkkAJALqEMAUn5tjDWpnHaVttRhCuccU8qzyFU8ujwF2UAKeiFFCqECJPGbt93AtGpeD",
  "key27": "36s6e9DUBFwmkPFVnpEJKkUMU5qcYv2cvrZk7PGvBUSa2JPa9GJFryCYpFk6UWUtdq7LBvwWHnr8BBeqinzQA5ao",
  "key28": "2FH7j5nr4FLwpe7bbra2mnNWb9jDBQVhFpTk84YM3pANVEDA49CBzEUTPjW7aQ4kfajpe56V23gnAc7gDhAAVFkn",
  "key29": "42yiHMuFnkBhi1mukTxq8C3eT2LCmJxrVcNuSm3z66xUwMxJiMXD1ks9Aov6bmNeJ5DW2nZYBaNmhDGYrhypKaFL",
  "key30": "4KWK2rZoTw9oHHBBAGv2yUyujQtDJoF1GBXWPtuKJfYuBCWQKfSzdaDvKwxc1rmJt3nwNsaooaUHusxqB2NCG3Nn",
  "key31": "3H2ut7f77sdr9B2xKzfzGsdDoDuHrYEQ1aXb5JSwg2MpHKPz9o1YKUr8md54nrcqzTAWW3AYw4ekCevotzSswCEJ",
  "key32": "56Qk3YytT8MVp8DUysZPrVoDN4kpf9ymqEJs75svcXe83YVJZrChXvkP7jREtVopQFPPrLbG67hauPwTbw5Y786K",
  "key33": "2rvghQM86Ev1qPE3G2gRWqozKNSB3PR9oZ2PeWbAxtdWRKxxy14Vv2a4NM8pSZi2cj8uDcxUn3YrVWsUNBvo1ZwS",
  "key34": "26LxzRbBY9V6mnXXviJsbAC48SHbKFYkxEFi6sEMfYTeF49htbw7zoqWV2eJ69Mx1ieRrZXQPF7LqFGha4Dj2NKu",
  "key35": "5wu8oyNGgn2NsmrfwaaaDWNTpmbXrt9CmgfVzGdQKUYi2QN6d38fPcBxiG8AZpGHKG4jUC5fVjmuBMm7F1LZqK56",
  "key36": "2tAEPQgiGQggw7WnTqe7EbrV1aWTQodDJHBoA6k2tWk3j37854R6Jy8Z1KsHWvAJBUai5fXVaBbQtHFF5VMSbdSo",
  "key37": "cTjVRGGxxnNeH4etfgySR8XZVwhNYfjdKKm8cmgvthVTL6dyE7AhQo6bNxMGYjmt3Xou2MogpWgzML3ys7Z5E7i",
  "key38": "3ZYA6qfroABbQsWPRb8rGXHkwodJrAEMGL14fxyNBhksr8pScZjXxzw5Nf9HEf3Az8LxLszWgdoxtDZyen93rHNL",
  "key39": "2mpTg2Sre69dK69mKec77iTAnpcTaZSXtiXMGdNLAgmHWqW68NAS2VSSPghmRX6HMpeQ7J9L28TrgvVpj6Utc6Mg",
  "key40": "8fjJEXGiRYd5T4xADMEgELSamZFTx74DjDjJJjrMjY5i7aRPzCvj5HDMJPA7XMaz87kLFpYWSF1Ci5woLbTjvB5",
  "key41": "2N7fMRPHUSufFDes89jL3mLCc1yFtXDPVqJqynJzH8NsSNGhG4hLTr4rAw8BGWwg5FqbDY2TKh9KBE9PymqDNULL",
  "key42": "4usYAZwmXAKukHeaqxaVqiFyAmSW9hc3Y197rTp2jWuWnKobcaMZuhD6bgdWs4wFMyctReysZ4iP2aB2ughxJ8Wq",
  "key43": "5o6h5C7svjuTUEY14X7nni27eDgE8Gqu7aumUCCuiNqxXRffxk6uoaDN8kcW2cU7AXfMThHfUCjLsExxqGRfa26W",
  "key44": "5hTPmBdV6cde5u4tTbx5zKQET8oyBoyiTf66iiH4LX9Sa3Fu2WnxvpT2c3LQzJ8NULVXuqHQf7JkqRh1KxVEM1J1",
  "key45": "5mETDQBdMJ8EhKQihLmjiK4QZniddZs2LHz96r4JmpMJtD3wEHnJ9MMbqyUJ2UvSe5NCfg7bamttwtDefHpi7CqV",
  "key46": "3Qoy1fCe9vGWfo6x4ELZVKwh1yWbPfcg5BvHmd8QwSWHS3xKie5ULsQzoWCEarXN7BeGuu93an5gfXwt7dHUB46i",
  "key47": "3iY38Z4dL9nLJzFkDWpmbL5dUvGr7Sbqa6qLe7WqEUbmuj97MrjXZqgVD3L6BLofMYXLxqxYs4REeKVQDcG2ihTu"
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
