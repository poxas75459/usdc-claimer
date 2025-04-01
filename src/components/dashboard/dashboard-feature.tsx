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
    "X2TBqp9qPh6kyqMcyLtwptD6YaEydsWwuFpFH65SqENEbZUAdcHa5vH56hwL5jHqgaZLBxhXQnWS23HSFa4Bx2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jr72qpMrLM6PTvb2YZ8KbrxxU9Xo5NNZfJQhmap976xef5F8N8NjjjTijgr459iR1dpxZNe1iPJ6vAned9wLyrF",
  "key1": "5khrc5f4SZp62V3hnqGmiPJpL9xxYFcRkXVzSpJuY6LRUf6MffoCJgrGAEpViwyiNbZhJRVKQKMUbtFUhVhdSGuh",
  "key2": "3atsP7eMv4Km8FUBNckUHyaKiuwLuSRcD3oaRuVMhy6ptKNN1ohxzbnWDfFpQW4e3e9TEyQpkUFzyivPZmLKAuJs",
  "key3": "TsFHCVp1vNogeBZUajbZfXCyGnhCmVAGQTt2GChzUP2E9GZQVBv11F14RMMTP84zTk8nytp9SED4BCCw87zv5vC",
  "key4": "4zeZBDoJq1AqaPxBza4dj7J7UwbhzMjjvRUqQ4yomYnCfvD8wK2FkkRauvUMXJQMSFKjdBC9AhM1bKkL4rvyRFTh",
  "key5": "SN3CcVNi5TK1zezTbD6RZgRknuV6u1hc7b36t4MhxWTU4b61eWvkRhrwEZERqdoCg9m4pgjN6JSBHMH2RTz1VVV",
  "key6": "4m5KwEP7ZyTntgRA7tG6wmvRGiF3GZ7Mu4nd1acNhf91qU6p8Qj2dfiYFMZntDqXZfvXRLw7XyrskkpY533W9xTW",
  "key7": "5bXCAJ4xcvUKKyWPmQ3Acnv9SEkkyQu4h1vGqja7cfVMvdUpRUxRUZW4NgUDAkytJovoutKskYA324Aco4EitNNf",
  "key8": "5RrAc32Wbsh9hh1F198vbXXQueDSFqyQidLo7aoXgA7TVa6C6Xjj1UzwKXeHVgkXiNTtobx6cCY2mRSHDw812C7s",
  "key9": "37nKLT7Lwfj4ZpaWy3qvLc16cyYkLQ1pXtijGfp8PGhsQrrNadCprywuLspJcRV2quNN9YC2Cy1FnBMSrbk3eTTw",
  "key10": "2rNCc91NLh3Nv8FNdgRPKjJ6joAjRdAniBSuS154Em55YjB9yYdf6StFxTmCKZcJCW5fqjZzMo8CUqVEkL2YcEbS",
  "key11": "55tmeC4WddDV9Jx3RTomRcgTW1rz5sQvLBftciUBiJfF4w8vQEYGfLteyCVKobzaCZWe1jcR9pwmxyvk2NHQXvGF",
  "key12": "CX14SbXQ2TwAMJRs9ew84tAg1GSLK1mq8MmeUh7rXH2mgc8pSxcpRtEbSuYBz67ycGfUrLZDyLhPF2C3KMt1Kue",
  "key13": "2nYDKMWoYX454jMJ3svu1E8Dz8ovXeDjuwXV8Bkd32AtJ2tLNXdUDrAfhbVRkZJhvgsSzYvZ9ckVJk9q9bU275AL",
  "key14": "5fCkJ1N591RjA1xVqMRv3GFd36xZGZSKevZA1aPY5bM8dMBuAZmuWjTCsGPxbpvLCrTJhRFPEf9mk5yq8an878aR",
  "key15": "583bXes6HTXyJnFsHNSAdhgR8NYaPkLbAa7wyd6BDPXbjgphgCAs7vDTbmRwqgV6HxBwBtcoqJsY3PY8ciYGkstk",
  "key16": "4vJnqttBmWmRxCcbXQW5ipVjqJ8x2yjdtU9DZBn8DmuDZPmbXzRPNDrNY3sM6thn69MyZS7ZzmGqYr5b79sdjyRZ",
  "key17": "5j2JdhdtQGudQtHZHHbtZUbGBbUCLs3mMWbogpvUfDb7rSXuPUmsXx993uUruVUYppqNFSYg3RiWnm2oQ6H2GCzi",
  "key18": "3efEx5wEEgjLNTHd9ioHMfioYUQuEWXmzfXrCGCxPKDKNNrsjWZPpcXmuqPCuiqUypk6EcPo9fyo8jhMNLJVwvKi",
  "key19": "26qjvnLsH729FGynDT4BA9RYdbAT9PCyVJRbox6xVvmgKnYygoMTprYjkETmhiMH8uWruUM8sbRDYwLhRfpwhUxN",
  "key20": "5UedXd8KLQgiGVGqopADQCfjmwPyrh4g6sv5Ua7EtNizGHYJ8cjZqBGtM3WbpyPQxgJrwqNkY3BnQymEjF59uJBJ",
  "key21": "5NeXxErctWyrJA3YKLxihr2a5JnYwqfw51wBSwzCVmWREtRbKy9NWBKnBZtDTxP89MfRpcU6Zh1Yg1UFk4StQdeJ",
  "key22": "4zWyptf782ftZwnuWzNLDv8Xjsqt8SaBc1PK5vxiDDq2b4g8rkbJP5z2GpuTnoahUahxy74MdzWY4HB7D3MBDvEC",
  "key23": "5YY5w9XxxnCVc8tCQUZFxAj1SnkpsrJ2kg2Y2v9RGXMAxEPDwUhX7ogiPwQLuLEQ8i7EdAiBBXHm1MLizatmRSiB",
  "key24": "5Jan5hp4dBwcTPxrhPYWqmgm1QgSR9mpcRS36Yv73nmWbBgyqGLSBPbihEL2mnNHbf9rEN7iMpdHxRE7rRrmavt5",
  "key25": "23NDNftfZgivCJe7EJcepchSdcFodfMiwJLxo9FE3LTMfut2qKhGUUtP3i5o4ALAYL85UhrJeMVi55WBk9spUKyn",
  "key26": "ADNJtLNyaxzua2jm1qk26LWaFw2xYwDjYaaYB7wVPRi1Nj2hDnvK2kJ7pcq1WchBjNudMk83y6hyvGnZqGaAW2Q",
  "key27": "67E6TYqYzvV1a1JsBT4PyKP5dKWDc3EjypkJB44Gbo9RqnP43DJCxdqdvPXR4RfkTKhtey7jnLTWsjB651HqgoKu",
  "key28": "5Bi5aFWQuDFsJygLTvX6iEAELasX9pCRpV8KwVtUNWwzkoHADvZwaqBNDBA3xEytHdEDwPxxQAxQwA5g2GcxkqgH",
  "key29": "2U51jzAYiCFwQNx8fEqfD87SPbtHKdTr7ePCetNjRdGshxUhXjyErAaC2S94E2epZhVoBf3St4Qv7GAsz53zT9EE",
  "key30": "4EVZQgCg7b6riefV2jfa4hFsuCx3AEv48PaDiQskbGN6EkBVKsGZ7kmub3q7btBDLmvwQLuN4kZGgywETC6LmfSj",
  "key31": "3grnKDGJgCJdQxteFzZRUUHkSTdPeNc1bDSFZ9twqmMvvk3B4idKgF8LgPvywEcaNG3sGHVwa2jNheCVkvKf6P6q",
  "key32": "4GgS68yEWAb49rLFVozeQi2E3iM8aEoTL2gNgzXArjNACjXNE2sHzMVEWcLwS2ELaco3xqxWbqMFVT19XWWKFJ4w",
  "key33": "3HcJZHXiTvdDyEYJNwAjWjKYWVYa6SCHyiiFjYAVi7UZZS99HR6HhdodKHtMvwTKbmpYBcYXE1bAgRTx3uU2wMh3",
  "key34": "SZmmX3g5aY52uWP2oWrdggBKrdxtHXH1rsqigmocmqP4L6ZYn1qBTLNgGeAGM5vmVKdpuLznFtDs15cvtNU44MA",
  "key35": "5yuktcNeMGXZbvPG82PVxrRfiomW8YhzXgt1K61Tuf8cV4pJS67e9dKeVWyYLYWZLruQ55KbgDGDPsn9oUYRZh93",
  "key36": "3rCZGw4bEZnttVHDF6zhdhMDsijDr19J7FFYzsa1US3NBEn9Kfzkm4b5huSZjaA9pGNbjwYrEY8rG8Le4D9puYTs",
  "key37": "5waBiAUjGkBkvpAMEw9LwTXD48KNLV8tYz5b1FqZR9mXZys6QME6hVTyu7qbkg81aMrwvz4s1FqFgox4kxYwZEBM",
  "key38": "51kid5hyZ6uoCV8Hu2sQrL3Sgp6TPXvedLN8FvNvWwE2QGXMJwa72GHcLBemKQBu9GvbmYtoMKYpZxNeVRD69woz",
  "key39": "4VbtKPQdmRfUtJHay4ff8MPggLXeQpmQqWVjz8xr8TP5gJGYiKn4D8c144GvYKWzdCrg9DdnE8K6W9boGwGDNnTg",
  "key40": "2X7A7YiPiRa1FLTTcVcaSMVw1aCt8YHKeCZNbiV7ZjxVmn32bb67efgFqdp1HZRe73e9BeLMva2Xn7ZgZwXgvwrU",
  "key41": "3pa2oAPRjEe5PzxoWYkzxhHmD9rYLWzkFGjFMb9q1NvvAR4x43bExA7aUEaT71KU5yKxjKCgDP6KCokF7wTbRwTv",
  "key42": "nnaqVAYmHqKyUhwgkpLSUcthKAfkAa1ynHpYwFwCLKwWvmrsDw1nACxYkiAJ3atkVvdyZw3HSTTyFBsFiQsYbTj",
  "key43": "2zTM515ShQQaLSD4TsSLUgEhacwb1fvzhoQm6QLiYwtxRm5gCSUxLi7WJggMsbyoHi3mXNftjv69N3hjdQBq21d7",
  "key44": "4yWkhLjmNxp2aK9CzvCJwbvfewu634j4yCq4aDPUKvup2c1cZ83fgofxNcYEtyb4wbXumF6CKc3XTaaq87WDnwHQ",
  "key45": "hprPeZQPHpuH8BnMAHDPpjVNo5iuY5o2B5vY3jjMF1pYTzKHyTH3ts9gB24waY5eg7ACTqdWtGf3ztNoBvXVhWh",
  "key46": "2qzFzqKnHBTRWHaJbRoBfK93TxJ3KFGg1RbqnwMpaPcoUsLf6t6dw9W4AjhGsyJJCKV5zvvf6HbGkKA5T8rLkVDf",
  "key47": "ndxsYbYsgz4c1s2Fdcrm1aezY1EFUzHcmqF4H9ZE1rq455DqYZKZwGunCwNYCR1zS5d3XcM7pDbqsKp5a6GvAMz"
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
