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
    "29V3Jnw8yeSGPgdrYHxJE1MTweHU9yrT4M5VV3siw8tg221Jcv7MyXBY6wrpdKwJ4hchJXWb7hLt1qpUtJi2dSp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eV5sedHeE3Zf71oA8Z2SEDq2m4tPHKFEASX5PiNNr4bWFfrBTr56xJH4NBWxNw83gkogtoKCo2SeBAwhi8Q3Mne",
  "key1": "5jtqTgNm1a8Fv9rtn3hc4zdwKPeeGBUb7muQBzjfYkLiXqU43PAtschbYZtj6JjteVnNbdy6ahmTxhJWxbzDeh2p",
  "key2": "zX6RU5XGU3tZ2D4jagGVh6DxB4wazh3PEmghnT8GeiJcd9bAExvarkQwFoVi8Ys9Mf16Anwysqk99cVptUXfcVE",
  "key3": "21o3yAx9qRBTRTLKxU5Zw3JAanDnEHSzQiX1mtFprFMBeWtq6npQfxgNjQ2BskxB4DGEv3TCknsf1h9qrtXd7hCh",
  "key4": "5MAbMTqosmcWR2seTdiRKWScmNG6NYR7MDUVE2pS6KeTZ2hsGaEAviMqheQbcA9Y14rT2buPo4xMNGVxJvEteq6q",
  "key5": "4mE2Jm8CtChYX9vdqG4AQigE6t9ffxLs71cm11KgGaQwQHLWLteFSxERkVQiAE1rU2thisM6huJuFyeVoPCc2ZJ1",
  "key6": "ufPHB2wyKeXE1NqbMrG4CDY71u8m6R2mFFibBGNWrkdkXeF3uKfVNquzkhdgCJKEcipofBaukqwT2KDStq7cpqA",
  "key7": "pJytkNwUbwSYEGyQ8NBxBGKqUKEbyhjDdqQP76bXBNKbMc3mQUzomADmM7bdkZsCCPb4LX3uXaxyBpJZNfhwbyq",
  "key8": "3NmsgKrL9cHiyeKibXF6ETcxmZhgYF5inb8ciq8rCSud4fJdX3UaxLXhXdWqfzYaBWh48uZHZChKdsqYNKT3oRn1",
  "key9": "3F7Uaexn3gcdEfhxhunguggbAE5E5dHosANmE7BLAYxgiZMeUvU2LLJ1CAJk3BZ8Y5iapP1pCS26yc8QJy8QYFTU",
  "key10": "3JKrLui2B8KWyNJJbM57rVUvxMo17DkMkuzTzw2UV7aD3ij6Jmqqmayb9b4ZgA7bY9pQsNXLfJtLSxNTz99Frmzh",
  "key11": "3epT5H1dwRfBvKe5EE1Ycobu4uJwy2cma4hTjGUBkkAoGv4tbjfsKywBSTWkXuLvxasw5UXNBb2mxNegshcYMr8V",
  "key12": "2nDoQoeqjmJaSvMqFM8kbj7LXypR7rKUNYRcBSRHchp3Yyie74ARHSHVnHYjfjq5pz1QscFBTgdieqbPky2Xmphi",
  "key13": "VcGUHTfTbv7UHGGhP6zU9joW3F3iQPVCpVEgEJ8VNrfv7ytYxj9in7CmndEhZ4YA6XmDHWsw8jnhapi5VNT2tni",
  "key14": "4V3iW8K9CRSBf9ivVM5Di7UDYi1xZVLy6wofg7EuYVmE2fv8HNX3Ba7bRDhDXyRoh57AacbKeFTMN4FZGKgN3FF",
  "key15": "5xWEBD73FqY1cKRvK6a2UP2hVqCicM4mu8DTdVVc7B8KmUPBurXwtpxKU9LRWdPjswADCUNaqc2VH7XfirKc7zh9",
  "key16": "2dj4YhRa7aWi3PTg76QwqmyCY7EnG2p7sAyWv5JExq47iRkB7PsfCvkj81rw1PBPeex4wZX8MLEtUkRoZrkX29tL",
  "key17": "5BnkfR2t9Qg5EmLiLPoLzZ1D8WMuuuX6fbbz79CnV2FkoeSgSqYLKe4jP91prZ13RrSTtjSChkWR29R7LJuBPanv",
  "key18": "5LjobGHkRzKYBqzj7KzbofqeLep9YeeK7aMNj5PQ1cx9AxNu3UtqPPgC4vjduP3PxrhrGzBT1sDXPuYJzK8DPja2",
  "key19": "2wrEXvrboMorZ6YTywu8meG88aWUGVs4kkirK3thsCKwf4LLU2oLD61Qz9BFyMrftXRTtZJ8YV7PLhxc4fTsZ3pV",
  "key20": "2cys2QmVZfss8N3xzuBoitgnjrCbaLaau1Lse1pknatrorL16MX4FXAswsie7SaQY6utQe5zp3j69KsuW8F3VJkp",
  "key21": "xiaFisTh7u9V85o1RdHmX9yY8uLiTEEEMAWToRwbURCwBGoHsEJvihVnkdG25SyApDAUWNRgAz7wSeafPEuPnAM",
  "key22": "NbP2R47GoPheaWT8eze873VDKGrxHe5zxzNbaTFrdYyBrb7vSd5AKiXZ1EKTX7nvDnmQiQvy1i4nJWXqKPuvsF9",
  "key23": "4KA8bsDgRjx7KrfMdXNve5ziH2mYGaAPncWLBtF5fbt74C5Xi66iHqJAkjcq2XG8aYb1FFAqLtTisvB1kMsDunyM",
  "key24": "4V8iBTUASqPpBfxEpJ4pJoPEmGnkGD8G5wDYacbFATswKBPsqEvqJrUQ5dUTzFvqTAQNr5CzY9AQxkqaETWD79cp",
  "key25": "5WAiJFZSFfeizb2Fjq18Juj8Rgd6J16F18Fn9EjDzGsu8ULVMYgqpuvMcKzQbXNZXRzXpUtiHTghFJKv1LTVYE9h",
  "key26": "5MVF6cnWESNT49Cj9ddsbHvHWvYfqJ8W6U2JmK5722G8iwqkcfVud4YXEvhuLnJ9qP3nxedA6YqVwwHe25Vd3GjB",
  "key27": "3LKWT9zpmQnv5A1gcbDc8YETdAmHFNtSpcu2nu7evUnebkDsvLxofzBRMPqJDAD9yDGUZ3brgKo99YodTeUTzdd",
  "key28": "3s6nHnYaxtEHnepThXp9VAjaB4f5yHhbTdqjW8sg85sstHNEyZ7uaaGpkYb3Rs53URcKVr5DeKYjk4erXY49LNsw",
  "key29": "4Xpoty4ryyyqowQ7oGsJADTMkidFq518HBRpeAWVUhFNH7DbCd8WDEG9H18fN6QmoQF7ByEmyktdYATggtmP6ioH",
  "key30": "5ugyuhuXCJxsbgNit8hKnREooZBjBau3v9YSWtum8eRVqtHd8YkatFWxnYTxsbTUs3pB24Q2joznkAdiYQeN2M4D",
  "key31": "3Muxk78Pfpo9WJxZAZ4g6PSGBUreM9hiNZNHLzsD4spRwY356p9teG4HUmjdhr7k2Rq2uwxXRccEEtfnt4WmkKUA",
  "key32": "3yMdZVV2GboEa8cKEWicUGbpR3hXReceXmTLkPvswLDHuoVBHUDTcXW5SDAEGc8yEk3WBmisZvynj6Jz58u1RAdb",
  "key33": "oohRNMNRnhWhCy6b5iaNDZQXfBYGsxtg2U4To5Y4KEmZDGggj8mVoK4HgTWJkq9BzQnaoxVEZEgFfPGuSmgpHk6",
  "key34": "2GeXhugZiwE4TjKNAFYnYMYiCAJ8qAk5tjHyYbfrQVRcy4VwGKZe5q3QGVzU3uqEx6sbW8CcUw99g9QHgBq72wP7",
  "key35": "2wuLVT6jNemijSTF7dSpBuULjLWifPsRUcvYcy7PyAbUnnH6485aXtMyD6qRsb6NUkNvjJwLkziibknWLUt7XxJu",
  "key36": "5bkuJxVposCKWDsZXaC7DsocmUW57Lw6fhgdRTKCm5WCMi8REtzxVzSmA9LEsX9KpxvhDSXXC7jdVXp2NBR5NSjH",
  "key37": "3AfzdQF1dWAN2b24kBysCVWJGzKHsWvnL3iak3NVtok4z3YHSh8NyavKCxS4nopKwomLJQtgf2hXymjhMYLPsrms",
  "key38": "2HaXQgQnoad1iRt23yEL1xt2JgXag8UQGqVEBxZYCDjVtEUBDHdNbvPwiuXYymeXHj8ipqm9JiuvP7vPtS4xLo1L",
  "key39": "5JzVm1EhzqKQmsKHwfNRFrnNuGAnWKGdxCK5DV7ot8oWu44KZPsKPJBxQxQ3JzEr9ZcPsa8FkgzvYTAXuy4rCQvJ",
  "key40": "4QXN4nFsMrcwtih9oHCetVdU6cu8Zi7HsyzjfG8RxMpTAcu7x5JdAU6Eq5dky15RcXTt9PxjBcquShi29eHGUfrm",
  "key41": "3M63a96HTECFP9FrUyPQhUK19fKuyikEVESay36xF5hdBeL5aWm9yQftewmAVkvNMcnwXJ5119rfYCxj6jB6kfAw",
  "key42": "4U8xRMArgGn7J9JRN7MBAHaYASjZhH5WPVkJHefJXt8euKvMqRxLnSehSTwc75WBu1EUpUG9adfN68oYQJk9aQnB",
  "key43": "3FpKKoPYjNmgGAsB8NR9nRApTFcdSfc3U78M8qFy7ea7TR6MaR6FmhUgkJzRk6qUa9TBUeyvRXcXfT4Cd4QKCZcT",
  "key44": "nMkDj3EoZYZLnXpnCpt5yEo2xyky7wWdSN1ctXoVXUvCy4caSscNPYbgA3Uonuw5kKAWLbQgAtHHZKfMaRsvo7x",
  "key45": "2XpCsYhZuWAH6QeEnMoFDu9V4j828nbjVrhmAyj1ATFQK1qU6Lrv3R8nSXw1BKAhM7JjkP6gdwhmvyfz8SKnLyvV",
  "key46": "2Bu8QDveDYEUNRQLD3YpsN2AW58qiGxmFEWADcWvFD1gmoMhr19CuHd5UU9PzMQ3vJ74fv1qk5YWwFeH1VJqweKT",
  "key47": "2YkGnNsYm4WugPxXaqdBvnjfixeTLdYAXstqqdWbzEgY7GRR7xPvgEeWZyfNUxw2LFG63G3t84QsGsB6G8CPoPNf",
  "key48": "3NALPFeWX7kgERQNxKZsRyaC4wzUkrz8dj4cYgjkQJ2cCNEkWzzTr9jw9YkFe9WqyFrDUnQ9Xa3ePjnUxcbaTPsm",
  "key49": "4kYxWoQo2F7FzArzd9dgGVKLZSNQh6vMHtrnj7PH7YA1CRQhcKHmXBHMtPXUtGXLhx7nAhPbCS3AR4x8otEfUN9g"
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
