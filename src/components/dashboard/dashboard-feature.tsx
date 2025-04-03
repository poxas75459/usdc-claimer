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
    "3UQPGngirrVWFsPMjfz3u5od4F5iungzAs7oZKSBYEV3viNkmXyksMvqVNJMnYmFmAuEfRDbKMpsPwhPuLw1DeBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D5Co4SNZQqLpHJFgRbxn67jHbmQVBrreJrGwfQ8HqL3aSFXcvnvergZmVUL14mRpPNd14fSnqJvfbNTwFS2zuwY",
  "key1": "CtgowoJu7wtLmrsnybKVV5YSsz26vcEsFBbg66banpGfNc9pYsKnp4fXWaCPveGag9rzQM3NimprafjnCexr4QD",
  "key2": "2WEawANtsjLak8q6HDAoLQDu3X72eG81L5iUPnUnVXY8ZZN3LxCe8MLxyGJ5DtKYth3YKRDrkxnNtwo8wmwYwywb",
  "key3": "3z9NiE73tK26uA44vHE6PfybRo9XGhPEG5R1YwKBXHWRkh1hSxRDponDe4WDqvpqnmqcZaywNzermvcQsD4H8qkw",
  "key4": "2qvS38h7PGwcteG2RdLUp4wYGpiaTyRVtgdZXKYf3tij2mMZ1a6MgaGk8E6RN3QME2dtmgwhTt8SKSmMEXv5cu5g",
  "key5": "PgDjweus2r6FN4p4ftjGeyVkDhdToq5dXkyfijwhGXZLTL5EFSEsFzTEqVNXgSjGMozbW65y7X9wY9nn7DXvhWQ",
  "key6": "XA44skNkUDA33qk2tMEDBSZdDw4j3pgE4QtmGRd7hXzhwYLtsCFL2HGrqeyBnRo2aenfTvU17hh92SJJMP5BEM6",
  "key7": "2xdEKaJGhAC6Q9xZhLaFcgN4SBQKZP4VQ9XtiFdrQSQiQ2bJ6GWvG1qf3NLoDKrvXJT4LwFe9b9PY5dVLE6dKqFn",
  "key8": "5DvrjBx6Bc78eYnva6SEhHtadQkwGHioZLMFvrKMUJbLnsUejin5bHNThaXdGmrYQXDpqf4aXEfxG86ne6gdRipF",
  "key9": "5Whyea4KF3mrN5ZYce6JPiBkiKhfpqSG846YxJ6TLz8EizXqRR9jF7PnvXGrUkFya8HgqpjWCg3av4YxmeB5uciS",
  "key10": "MK1MTppBDWv8TQjbqsicjidv8cH4XDb7FugKJBnEdJDo53MeNdfTWK2J91yX96d2vEU65FbCXyomhLEpDVPMMFj",
  "key11": "1sFrCarJrUZykRrKpEmuUgQ4QZTgzRQeVzss74Fj9VmgULdByptQGzzMYEVprFgKY4A5fbawPQhoY5vsqK1f3g6",
  "key12": "JdHNe9ALWPqCMDQLuBoG6ZBp6ikBtrY3suYF7p9KyBRZzcg6HeHLch3RL4494cqzJuHh2mg8ppN7vfmWNFxvmAh",
  "key13": "SyuJ9JjTip3u1esrbz4NnSgYQFcy8xBm9BGtkRmzmuXkqam1Ft59q6mUGLF3ZAuaXSiEgj24UpiYLpr17STG41B",
  "key14": "5h48SL3Rqo3HscgemzjtLr9pXwT9Q2542muDg4fQ5umSNdxxWYBt7jQYN9cjDQYYX5e5YakWiP9FNqJLkZdtsraT",
  "key15": "6KqPUhruNzEjgr1zBLaT47R9kMmGmopoL3t9bYm6Ko2DAr6R8bV1nWLGMBePjbvA7s22Mix7afZDoZcroR13RHF",
  "key16": "dmSKQX7b2ZBTRes2wBKwXQrKACFiHUGz3txnNKXX23HskQqKcYuHCWuMxANYjug7ueCT6LFcLUGoKHg99DoR8Bf",
  "key17": "4p7YV7XC4iaBERv6t4psxNLdacpW3Pn378SFu3T5zGyuGqjpep5yxbbxD198UxhHuFTibdnHzLDJDQLPeLmLYaLd",
  "key18": "3XAXUbkPa3JWfeDmhvgmZ7tHGwnD5mYW9dAxxMLHFAcLmKzEsseyydFyfqiafvydwQuBhLH3CPYXspWE5M4sFbfF",
  "key19": "4QEJ9gmrSyEhUni6iEbQMQ9wv2U2wEwaWCiqfPGEZRGtdbT2foQfVMd1dKjybWaHryQo2WV6RKoj71bTvXiixSxa",
  "key20": "3ck3F5EkoPGyWZWjdVrJAg7uMkdwc6hE2yrN51W2N6X4bgGjjWF5WMucTL2VobxuhsLDeg6wDJ6p3RxJKP1mRnXc",
  "key21": "3V9RN4mn5oPTye6GGVTxCQGFJMYfRaU3sjUgRu3iDgMA2nxbGDMbgdK9URcUP74WQhF3GsdLo73k57yvW2J9zcmn",
  "key22": "k7DN2n65s92sgbDmBzVozKh74netZK4w2XpS5cWFeAGqcnQJr4Q6yFUnGedQ3y1tRji9tsNGxK8Y64TuocyZgTR",
  "key23": "4RQsLEKSHWf8M7JsiGuHe7dFJP5Z3sLPeGYEjbrZZ1jXmDaQA5iR2hdfXtNkKUUd58TUe5dBEbiMbuiJjrDGi1pd",
  "key24": "3PEbnA47NkM6GQYMYFrcA4DgS6wW8yRN815T39o4PY9Kr5Au2P7zb2RWAr6jJGbzqXMaDGdJ9EKmeCAcu9PpfZ4q",
  "key25": "Ry3ZpZxbatpTaqfmcF2ruQSB3v38amj8DUfGqya8bzfwbixDujtSuEe1XfSHqobMk47ccZv3mT1ThWVyUb9tMNd",
  "key26": "3zcpX8HYjG2frwBZWK55QChtrVomFGd6KPYz7KZpKnG3SUZYcJ6yLNK8zRjd1ieNPtBVo9bv8T9So7p19JF6Xmx8",
  "key27": "2KQmQjCuQJUYH8STYNBwZz1KNwKXHx9ixKraWxZ8C9kwQNzeeuDQdjouVaB3YC1LZezuSgUJcVyfVgXJVAihHafp",
  "key28": "QB416pYyQgFaPByJwsxzuansQKr3AWC3XtqWjP18gSBJZHrEE2ntjiChkxGL6ufD6npXrccjgYfHB4hvQukjvBP",
  "key29": "5CyRucito8xC1zwDjEXKrcYFAYKaAWg8cYUfwTGosuNkC1LXjxcU6Lx1rzcFZaF9WKubP4aufSoWMPHrwJJQwLSL",
  "key30": "2H2Dk8ne8aWLqF4mLxrYB4PKegF1739ut3edFTNEveFxzezkjQqVehocmbFjoLU9ixwxgWe7nFLXBJKQGKBmTPh4",
  "key31": "5S9Xuec8g4XW85n3TGpj9wipE2tnFwCR2sZSzUaRhAKV1aAnDGvSXswYg8Abg1Wpd9pAhHyaR6dHpSjHF9KUGSWt",
  "key32": "4JPfFDV9LuejeMB626KooA78uEGvpUDWEwUsRBpUBNKESmvkwYCRpE8hHm4EKGigVMnRU9e49Rk7ToSf4LN6soVX",
  "key33": "CwckYLtpfwwjMiDyWRS1yFxRDpjbNvkYKSPk71gRhH1ZeFjMnPLmWpRY9PtGLjGRQw5oqkL9WDmgSNu833aSB86",
  "key34": "4F4DF3sHZuz1P9qwjC6sNkt1oqesPVsTsjdeHVJ4j7zZAh5cEXQBq7nDK9UcD6pKrjnctUUX6AZs7H7Xz8X2X88q",
  "key35": "28kYNpUF3K7KQZ1ZHkx1Hkdq1cxtq1xQ1Kmf2Kq82chzQPUYVECdqKYjfV4bSdxU6p8ck3SxRzJHpFja4mBcNrp4",
  "key36": "Y6btBK6zkQ8LnqaXaCa7QeaZHo6mzEAbJaDwQpEqRJSit8esuywnDAyz2arGBcbCQDjubAqLwjuxVvWWShAza1w",
  "key37": "4GEp26cZQpb4a6y84w1CefzfF8rZtmdKkA98DEkdVTNJ9E48sdMYisRhauoj3huHvbKy3hH4aPBSbcXiFNDL9Cnx",
  "key38": "tcCrPvjAw6caD3RKzmHDr47zvLAeAQN7rFK3GPUnKUqEJtfRHcPmxyNKM2CCARiVgpJ3Ch1EqcLH3BCKR4NRpzA",
  "key39": "4SgYRdZ8v29uErDwTagMMyaE9VirmHcevBUU4bhQ5UqNAZMWKhgVKZyRAy8ZroqJ6Js22QTiSWvCfnqwWRBxsAiW",
  "key40": "3eGfptbJ19jhEjtfXFA4uXVRn5RqjqBPuKWuwoFyYqgw313Lxh9ExoAYpZNPFho5tH7HfjqrreMxr4vjhoaa8YaS"
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
