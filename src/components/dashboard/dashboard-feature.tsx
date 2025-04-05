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
    "oShRUBHPZYjjDVxjouhyuVYNH8PuzZTw7h5dujVvWQ2bB2G2aM2AdzAt3LBjtgUTZrhdMVaQFzNtkNFt2boRof7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wPpT9GiHWteP6Z1JmeWX36eHuafzxZDty7TEjjK32aqpVEjMy77WaiasC9WkXopTLQ7dKExYqM7JDArSAUT1zFM",
  "key1": "2FPCjLAwLyNDBi1ep13afQfY537cfbZsNGmJ2Lfohg7JTUePfYXuGzNka6tiRkoueotZYR2Tf9x4gJrVyxm9eUvR",
  "key2": "ZJhJFEx8BgaDmuASBdemuiikqnycYkn8ucfwPGPnVhRG27ma5HYeXHDzDLhaXa2gpSgAiaC8974bxDjdy5wyyZJ",
  "key3": "4cy5BaW2LEikTekqNdKcqDgBWeHRLzxvzkJQnizr5FGMkYj5UAH2qgqB5LTStbtqg1agP4eQxePgnLFF1Bsda3zN",
  "key4": "4oztK6GEKf44ojcvgityrMLGmRDPQiVrA6spuyJBMUVwYKqFVMTGcckP8cVbq2KTwYsMB5fwPrspcuqq7aRkaNjm",
  "key5": "CHLZYk6YVDCqovp3cxgYNpuHd5JYNEa42fyRGKADgmof5MU43zrCZMiqAdufjDrdWgr583Aa5uE6TWh4WkXo2bR",
  "key6": "uT6GcKwGU5hLnrBsTGR3bGhgLEfLYkPG2NePnXXo4ZchTaYiaYVj2VTREZ8Bibdg5DZufzbf1MpCQ3PCpCxhq7g",
  "key7": "5KVqicXreLvAoTrfELB54Qk1G5Be92xR7zeNdS3NfYX1T2J629Nbf4vni3iziBptW1zm5uWUMKCgoJ3GHfxatUXz",
  "key8": "37rBzXFAc6G2MAuMGcMBLTtrXPwfsXM5RbA2XWcwf8s157irCMH9xN6K8jVC6Zjq1aNyMC3J2KWo7EY3j4eNCmsU",
  "key9": "2JbVbPF2aQdqZAtYoqz5ohCWRhYSAgYvEMzMfykwi82HToHftFhjKSU77DNy99awYKqVreysc1T1G4fiYigiVYXH",
  "key10": "2aT8WL4447eqnpw3NACjmcaFRN7c82hQqebnoxbh9vVkUyUgYiDkb7okXxUFr5Moy3iGHiVrtGWMRcfUR6AQhfDQ",
  "key11": "5He9HhFn8ewCpAPCxzywM1cZ1NuwK7Evvo3WkK3VNHo1d9PVNgBeLPLu4kSgeNqjj6NcWW3PdbZbjJ7gZC4G995e",
  "key12": "sF1qZ54t9oMRfyzxyp927JsPq2aYhi24hs7kijwKgTcjqSaaQpLsTjc9AvdePyGMQZw9zcos5b3WaU6NENcB8K3",
  "key13": "5rrNevMNYDtoEL6FLXWkeJVdQdWxb2W5H1Xv2Gcq65TKm9ShTMAwsNWepzXuNdJvfiWKyRDyiRHsChwSSDHWTnop",
  "key14": "41kERX1b8rbaKPCBCz8boomheH7j5Nfkai8pK4aXiu33nojrcW5dSNxf1fE9JGDa5qGjJwZhDq8KkiumW8dNYjVG",
  "key15": "4D6hUKMadzf615KPp25ake1tvu5qUiZrJcZyJNAEqdqLzGtq1AEnAjb4ht9bjvG4vsQCob55J2emytKtKNqtXzmA",
  "key16": "55iUUR7xm3ZZx2szTZYgqf78zg2cVqU8fLhAT5fdPx7cQmUxQJ4Zmy2WkJMsTYBz4m6qvXSs3Ukev6wqEHZm5oYc",
  "key17": "3D9DbJCSJ6Fai4dtX7d2taoJW4y61wBrTXrjomRxNsXvmGtfMKhggmtXPCPQUixrtNy6twGoFq9LWGKrXwnqGjBG",
  "key18": "2QWAfT1QyEkeWSo4cDvqSn5FBYjDA4C6Neq5HxnA5dS9UeSvM9kK2YxT2mGvWS1N3jjC5hz4QaBxEqC82WSxZNtj",
  "key19": "42bkunkn65eY9SdCph7MTVbY6Ex3zXXHHaAuKKfGyWfwhpw4FxPEUnMQpgKdXeZoGdQxi9sHAMDJrN3ZZaFt6sTm",
  "key20": "3coLZAx7fobf6EXcrokdDPZ623JaqJHhwL56T9D6AB89C3GmVkhDQAsc3WamivYmziQCaCnA8CPP9y78Y1WdC1iN",
  "key21": "4dx3KfgNddXG82uZcdAV3LTdUfb5tV56cniWGpURUcsnHXbYuLLD9XvLkddDz711G6cM9xr7S4beQK88w7Te3sp2",
  "key22": "2thVh7arAYzxDxHRGuesahHkZmT7e2ssvJjhY7FY5UGWfWXF4HT4e1hevKCsn6HadkBtbH8FQEDdhs1ys8JQdZ9w",
  "key23": "2jvv5qwYv8R5kQ1FjJT5BNAax6fEoxwNwfLvHTC8x4e7ofBWKmxcGfFWCRJswzsccXWcYdWpQAiJPcfemkf7tsDv",
  "key24": "43BMe7bYQec3aeZ2tCzkm9S4r73xDghwAZ4csktgF1A5jzww2P3LnUY2H39tqrCrHug92vTgAKM2mLUPd8D81eMJ",
  "key25": "pbaZNi8ZupfETLa3G61Z1PsU2fR8sah11Dr11u2L2iWZpZn8CA6pQ65TcBmHyj8bJuSC9tyuLwfEqjkSvvMu4DL",
  "key26": "2xgBQKLf5MgfKoZ3kG3Vrz3QmgwkT5WgJhJsgzA1wRD3Uuyr8ajj38oATC5KcPYnUF8W1GUa65pdrgqvv6LNP4Tz",
  "key27": "3FGf1TwawpfeaK6FgAPHmivjBhoBnuWf4R2H8zqYVEcYDcbPeStkFponRcsFDaFBw6vZaDMZqAwLijd64X8jVNid",
  "key28": "3ur8wXrjXVFKt1VeTqXSm1FJ7aTNJwwjH3sZUF65awkJQfErqDU3pG5XxKcFHRjWNQuLK7PW64nhndXFXxaf1WZP",
  "key29": "3Lm6dxkC4EzVcQGELZX9QxpJyrUeq9M1HrF9sidAUxg76a161kVPvUhqMa35Bfv6FVLyMew3eupjr3S76uorFsQv",
  "key30": "2JF5R6BcJTGWJDdoSdco6nwHQHmHrMeWiPFRV8xEp7FtJYpU1LajEjBf9pTWgQvwcsQHtLL5Gvkxz5evo26ki7xd",
  "key31": "5o31MrscSuRxJer4ouh1XGn2V8Wcsn8M1989bLXz6nuY579SRff1cjTHfHwH6N6ckq2SJpLWrvE8xeXJftQ4SCBE",
  "key32": "3BjXaD1oY2JrdGZagWX9FXM6b7UM73PUY3GeF8nq7dspt3BnYxQsMDfb1WYbwkAKVyMGZGFMdGi3ow77xpsbNmM7",
  "key33": "3ymk7c299AtPefn4Gko9DwGBsXeMmqC8gLi5vWApqkqiwPgjL3CZYmkJgoAPcHfdS12Br6N8s6nE5964Tdm8vp1D",
  "key34": "4vAa2x8oJGUR5b4HUXHuV5hhpe4ZMDA4T9aVXVN93dWRzdwNNRrVfPvfUZ6kQzw5PXV7X6CWV2WWhXjJnEYJipMq",
  "key35": "3odmNQFoKU1tHFowUjfxb3FcVFLqPQYJzgbJWxhAy7UbLc7YEEmXBqxgTnkNvWhK9FDm6YwdhAks9MpE2gXynKu2",
  "key36": "uVgwUcarQS8bhjnZCgvBrfWSxi8Sj2R87txo19TEcQ9eop2973jgCPxLZf3J356n974kESdopguxRLAw9EB911L",
  "key37": "4p7aatApChW34uE4qaiYCrXxs9naMjxxVnqqwtgFfXSf9NaM6hsb8d5iL5uyyKxnFrJo4pPkuBiUSuwyNZ7FwKNf",
  "key38": "4ARTv75G2221a6H6huihE9ossfYzSCd3GovBsHdPg6yqKMjAU7kUeJWvq1fgg3mNaT7K9Q25dVxR8WR3NTwkbcyJ",
  "key39": "53oPGNY3dvk8zW3WRrih4QPAcCKNm6Fk1wrjrUwuWoqWJBsyspG13DTCMQSRENbgmRFt6R298porCqW8jyWcSzKq",
  "key40": "3MK9fDhfg2zKNGYRL6dWrgB7vjyEzjnFmZihjriXjk3xFpYpCspFABkTSUYMqAEHQLz1dhiMoK336McvA1mZnk7L",
  "key41": "3qQfW1z8VFftTDc1dgJQgMxnjbB2Eu8HYrxRaEYzQEkVM8FMsnjRtvG8FYgiFN7An7VTvq33tqqxnbJW8gegeNsm",
  "key42": "4684e69yNuzESSwf6GRjFT7HvoYksTQYYziEVeZ8ompZo8zkqALoQPCJv2eEHhyzqUR1TZAuJpUrrdt4pXoxgemh",
  "key43": "6VsdHZoiL3CPyqgRtnygJqyRi4jHwp2Eo8S5xrHmgxuPcq3uCWQ6oZFa9HBYQzLwPmAqXw7jadYBTEXrXbxfG3o",
  "key44": "46zAfyzbwZSSARSAgwDTDDJbPqBXQrPfCxbh9jXeomxDpFmnuGgjDbG65htFcjW4XCbZP4ypZyDpph9sxsbFZRJK",
  "key45": "mfFXNQfvWoCHNyudjvYMaeug6h3pKBvTCEEv3qkempR7DRpCWimpxeYdktGv65ubmq2tJ774NsVpjLTHS4B6fvF",
  "key46": "2DuegjPRNyaD2Pj3eHR936WTsDnyvuqBmvVaAHxjPpq7A39oorXQJ2tfFkpuzGnTDDXoh3WPdwNy6j5HCAWTRDuR",
  "key47": "4JqLvrDAxeYpbfBqZ451s3KzkquQVxJms4w8CBRfBHYLZWCjefv7h9w2sRVZbcwuQJgekBaqYmbXW1bWFEj93oNW",
  "key48": "2GwmetJ8CPnxTZD9b2spzDvCRLXL31BoSoFA49v5ixWskiJtvnqh9acX9dUsobFAk3tQ1ip1vcHYrJnE8VMJRdEU",
  "key49": "5m5JTorYzwc5YnSwwYSrRwxh5zipUupgjTT1XbRGoWdXcKsM32C9GeHSjpVp4yrSHduNaUudyM5B2bBNgTtpoEsA"
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
