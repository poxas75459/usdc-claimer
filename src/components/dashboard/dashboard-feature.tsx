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
    "4UGYdzmPFBSWC1ZRR8NfyPPUywM562GeGqbV1HYfnrjSJ5XTfw7GgnYJ3kc7fbf5LUmvAga9sJnmf9f2oFiACkhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59iGbkZuNFkMzpwKR4gJGmMkohu3br3S4ZRSMjP6piQvdftMv7WRQXvf6QGTUcmQWxnddRjSeH8UuXKDGVKQGXJj",
  "key1": "51Utxo7gVqCJS5z6qVHZjgtaNUasvA5x4zJM98K7Dzrdcv1kTJoq7nRE61cz7ibCBfE3Lfj1hxzHofBHzp7XhTZR",
  "key2": "3CxzGLgg9aPVxN7UNxde5EkRUCsW9UuJaBcp5HDdiz2tvdrUGkTGdHbMAaeHLdbf2gNJ9GN1cqzAp6yRYE8RFRFd",
  "key3": "5nGQCFbYUAM2Rf6FjEsaVvrReydo7Vpu4SBbk92sSzHcd8FSkKrGtcf2nGVszS9oBh8b7obTKbc546BUsvM3vB74",
  "key4": "3Dj9Cxf2YRKuKePuA5vcKJTru1XJrAp9VUeyhvcfPzcgCnUUoN5i9egHwZmNa1qhPpp75TRyj2Dt4oneFTihpXG6",
  "key5": "4KsuuNpqKaNjNviqnLyDXxrFxzNKCAtNt6VeBGJustWhY9QXv9f97LSo7nZiSrV8EWevgN4B2AR3UYwBALppiKwR",
  "key6": "4Bw5dgvnu3mGaJof1D1Cn867suUtnnYdEHvG9XpWCMYWhh3QXxgWUq1xctQDUQEFceYYWUWLq8sixLLoWEB3XVis",
  "key7": "655U51gn72ihoYKnk8KxGmHdH4f9B7YfvZR2EFtA9mJwKGxsdsWXNmyizFTc58VSqzD5y6ASd7KNBMkzYua5ZaYZ",
  "key8": "phfwFM6bNekQyWSxL6Dkc5ysRcvH2wVUmsySodHWsNc91eJxPUhMaq1bCQFYicsfPEAwG1dyWQqTaDHLBf4zvs7",
  "key9": "2iuFoe9i1QZKoZZ5FzsxJSKCNU7vj1kkEJ5r4WWviyS4xzNdiVu12NYXxW58wjx4mL4ZZFBQVg6RM3LESCFioJHg",
  "key10": "4iuP29Wceiqt5JLQSYCduzB5qX4Mvxv2uEHbnYYiNf6i4NikGQo3hVjLqtxY6sBWsN27qipZwcnC61uLSUv54jM3",
  "key11": "5xX2VuPsMYjLsKUzygyBv5VPHbPra9oFp3ENWfCQzzXHwMYzMNMcYi6KBXsPY93azNMxWsrFd53b89JDDXVsE7Re",
  "key12": "3PhcTG7vV8BnDr9Pc8Dj7BH7KP8eC6ESBMsxWAUPX8eQyewk1RE7FLBe1Z3R1skme8jfmGXBxFQ7e3xvVpech24u",
  "key13": "3Wgzh8omG3VG1Dt3MApM2zYtCKvDfT7fDayQ2v6DtfU23u7m8HDABP2YdMjHEdBmzsrUEgovP2YJYH6rvcn61D89",
  "key14": "3V5ptt6HuNNNCby7F9LZRrrNrqK6UkdrW156zhcs1u6DBFvRx8KUnQA335CaaZKcbq6EGVYhMCwoYkZW6fCKKtEq",
  "key15": "3DwCv7bHsB3t1BqYRQNqnC1cAW5sGnJvnM8tyEsa3294iTqaZ5LwE2XigWGFTPmF6fi7u88mfSS7ZtJyjXAgXzML",
  "key16": "3pVesNvXWXRyrEXPZDSGzBT6A3gPV69tR7YikzKmnS99KZZ4ipHAg92fU7JXCBErmjVziPeAZSi6XV49p6wEDLPu",
  "key17": "4NepMK1gFxCX2rViPJQYQakczo9ErU6YeZmRgeNYGoQC14g1WCRcC3QKK3NQeUv1u5CueQYjPFLqhxWaUCwMKXR9",
  "key18": "2usvXKeumQDr8GzivxqgyazcJgb3HfFWs7DeQgVL2WDAK2Pgi6h7MdMb5N3FanucYWEcD9x8uCayU3LjukJdqv6a",
  "key19": "4pighZFpHo8Zdi5jfdfNRFr9ZLmYrZWZQFMKJtDnkDiG4PiQTpF15YoMwc8y1ScWuZznswvHEj8SgJLxu1NCKm9c",
  "key20": "5xnpcRo24qhH3R79u4d94oT1jxWxRjwa7fMZD4UmVmZU7sMvski4k6cE4e7Bh8RcdDCfCjYmgeiT9RYotgHXCmXt",
  "key21": "4tk4YV5rRCmPCTMdCkwbeMBXWV5siT4Sbyi7bwnYn3PGY7pbbw9c3XEzVJRsXhXNHZckDpG8PsEr8TXwXVMzJwK",
  "key22": "5tL8V312xdTcnukqSyYuwgGNvEwAv4wHj8NHHkRXPRNbQFD7p8rBbpfkrXzDycyUa4P96t2gyzmVskmwMRWFmk3H",
  "key23": "c92Nn7yTWKUSpr4wfAH8pJM2WYDQtBUKWLXiEAjc36gkeKQQT1ztDTRrpzRpmvF5rSeQEnszEcJYxVwykNNNyea",
  "key24": "3HrFmDnrAtxZhJKmtfya6HJdawR6aUzzYKNqxSptReFQrmhxFybmoZ3BC4J3TemEcXN8MFH74yS54rf9yZE6U1MP",
  "key25": "3wE2zYaGxcREy2tmAcU9aDkcgYwz8yMvBQdBXusZjggrubiT3yDStQx7RkZqaaMSQu2AQFTvf1mhWkgifrUPBAsH",
  "key26": "59hYz2QModgp7ziYMBjyJ7HQ5iL2v5swNkn1m1e35D63a58jc4f1YMSkTnq2VTdJc1GGgcZua3HLmUv8LkU1SYE6",
  "key27": "orYy7t9hhFVM13G2wZEj482SMcU3fvnQLe5yA6dRWjxN2bj3B3kFKdFddvaiCFLcqWgr4ZQ9DsazNTpEGHdKEKV",
  "key28": "2NaV9ZYpCaWmmfmpTaHznzLQiPp1X79L84xASo2UsVJ3L8xsEYTqtAj9DJHvNJMAGYRQ2oeeoZxo2uEf4w7zLVLn",
  "key29": "28DL7mjuFVrbENV7pXytUT7mxYra7eeuBSjSp16fsfN9n9VG34bWgLyTzvnYS7tCfkrNEwxgooZVqm9Jq5biUeZC",
  "key30": "5pFbKr3WCS463MVh1WiSL6DCoqVxNSmDdoKM6cbwZm2vHvpdPYciEkYt8UER8LayV9yY2fNJf1HsRw1Yn4GfFuz3",
  "key31": "4MM84EXo9jZb9ugFVfGXoe8T5TTi4p9SmMF8Q54EajZcqiLBzsGis3s2bHLZ6iG7UeBmCqTmhSsokRKc3kB9dVLN",
  "key32": "5Lb1U2u1Zh8JJykqnZXzVvggsyBH8e4iDBgHVkSuSiddeQiU5Rhx485BxGwcXQUBUTaixLx6oB4WimrrNf7Kizh7",
  "key33": "NmqAGPMfEp7gkJ91HV9zdUWbSGhkBQc8oiPCy3eFVNv9h6jQjkfRZVp1RJk1fSCymSjpr9dKM72K1cotFsd81rQ",
  "key34": "7u2dyqzHnodzLRVzRBiJr1DG83dGLUNX7MsEFnx7TUcDjYcfFfk6HVw4QXn7i43KXKz9TVku6yyHRC9KcxX94bV",
  "key35": "5ChhCpTDRKMHD8mbosfNQ3AYMt6HhWELgRY1aSdjdyiUeSLyjG6JnWznwJoSqDqNWwhs3XLhjxRaqVxwbTq9AZjY",
  "key36": "gLhua8egKXHmjpunm5NSGeCkgFwPNENNii2mPcnhxvBfsYALzjNF7tQGeUcpZpRsaYpXcSpSofbn7qQJZCcj12g",
  "key37": "4ekKyWkiH1eHHJwM9DnuK5y8iTTeXyuVPGXmSuuV1ubPwqQXeLHsgXnpRVYfjcPxChkxS6hmTpds3qWFTqUMS2dW",
  "key38": "3Spz3hXUdygfDAFn9yWUjnCMEFnyHJ5hZMfdNagEkTkGCGJ2eVkh84ncHHbPuxr9PnHJkma3jjDd5WZoYJoG7nnd",
  "key39": "4MqmM4LcVENhhXYJbYZT1NyzpyW2pQuyrLS6We1gRt983Ub7agg6tDDDn71dPX2THAH9FVjL44tMSHcBBknt5iyE",
  "key40": "2wgMNV9By8c7aFSJkPa8q26kjDuD26hPcaH2LZupKgVJRCKVBW3JCP5Ni6ZhKPMS56d5TMBZhikcVSAB3HLK79Ny",
  "key41": "4bdVmnSaRCPPkRoNhYAiVp3PFPfRPEqUcf9wtJdnVgZHaUJ4eAgopCBENmtDHpXtKM37vpF4WATyTwqFP51r4CxW",
  "key42": "2UMtFBuRSmvopoBdUrTNf2s7GFX5u4J9jXf1dPSjWeQqTGohmFdhes3Y3qk4AuL851AYkKCHxGePL3TiHxdCY5Lm",
  "key43": "5oqApgUmwdY814rsnhnEz9MpYKhinjzmDvH77DUqhxWwppfncJnCXA76xrNFs4dZLq3UbfWfuMaJzBJWWczPqXzS",
  "key44": "477PaK5fj8vPYq8ts3xiRsMh9GRKDSyPnUW5S16Lz9QDbh3H1LRw8NQEauAher6j8pJKdu9BtQfNan9idebPpeNL",
  "key45": "5fZMzPTeG1H2odYCfWKZWdfJZbsrXNQqv1uStwFiyQYxneXYNCa9dVHPybc8eWaxtuDpUxvypaWunC41kQK9Xvrj"
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
