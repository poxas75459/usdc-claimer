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
    "41EpVy9Uu6rfa8ihZ6fhmpBExfBnNtXjVjZWxuJBWRvk9AtTcSrfHb5hSWAyaSgsaarQdnJYRo35Y8KtyFU7PxGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2upHGPMX87xUBQ46UvHKf2rXCgmnNXJrsm1ozUbGyc6EKLbRMPsafwYWFNXuJHaybUAEnkre9Yh7wytFGwYmAh2L",
  "key1": "ApYs7SQ8kXqK71Hu4FrHLZaNcfKEtkW79Zw6d61dAfGKXLxESfqtdi4q2RhFPPRSBoC3kxcXr41ukYj5CUbCKAK",
  "key2": "8buKxeskfsNpgwCj4aEdog3LYc2i4xQy4h23gJ2nkS89VR6Z5578TKFyjTXeKYeeFyFZwwPBhRN52sVq2CPTuw5",
  "key3": "3hXbzHWNNZFfoj4cvbwm4PMf3oueUEW6bLh6iqUsVZJhQF5JVNqJjkJU6KQKxfYkoZ9VHmoGqoFM4U29LTMYeybV",
  "key4": "4R5sgvN6bfKTQzXDbcMQHKTAH6Rn4cTgzC4ZH6j5C4nX16Y7aveKRmkQNdjuRFJqARxWHKbUxMMUea4R4RBpJisk",
  "key5": "4WopoTcSBUWG53E6taDTLVrRrwq51HQ2hy3SQuaovYn3JWN59WKKbfQkptUCUbHjemr4BqtK2zruqDvaRfzyShFx",
  "key6": "63zrDAce4zqNQE94BWyY6vQWv7NtyDtJ2KP2g614v3aRLQc3tbrRn2KmsiNiGe96vtsxC58xchj7hmhS1g2i9Lev",
  "key7": "24M3fdYUyUE7yFpy46tnhyRgyEeY7DzUFmEmZxnQi39Vvky28AorTxVnAQ6wcMcskQquPRAMvRM7UTmYfBaKz9Hw",
  "key8": "3g1RR7tjjNStr52DmZrTyCHfji1EznfgNCC1FuCKMDGRDhegnbnMbDRWUiB31cMBgNGWLoZR8feiuy8v8TDSDkwg",
  "key9": "2tJsrVsLT1HS8h12AQe6hBUVXEaEL4ns4wjBxtUMFSHMUaTrNsrtEdw5oaELoobTxGj4Aosux7NYh4AqUYb4pDR",
  "key10": "3q4DhPoJjYgqeegXVfMBMJQD7zZ1oNST78KUNaxdZQvfojmLP1JZ2dsW5TUskwxSB5y8MUFfoKoag9G6SHqq7zKK",
  "key11": "4DocJtannNnKyLTkTttXtaKoVPj1nBZYFf7uwiwQCUbi77tf2nHv1s2byqdAXkqfUaAGFKUcv5y8uKwcDxpG1MH1",
  "key12": "5P4DSfy7NHnxEXy2HFjcZJjbALMAE1wiwG27BeJbyRZ3qCJTGt1zcv4LeLAn1To38Vzr6S8tZWovR9dc4vvuNzsJ",
  "key13": "2CCM7R73k28vJL4bhcnESA571SUJ5r1y5MQ94kNTuxgYcipJwrUrdNg5TxnaGp4E1ta2CW35UF2eF1pGbuBYCX2L",
  "key14": "BBYi4M23ndzorWn18YZaXs7eNCCvXRXhmsyZD4uA5CU3WvC17GyD5CBp4sVZqM93bd7kbCCN7XsRoFKbL1s6h2A",
  "key15": "5msrQKUpwE3nhZgmjtwBTqcrZJxUQpC95pHbFQ1tj51QDyBJv44PU3rB91yUJZkcMvZgWvk4BB2ivG9qV3JgnQmA",
  "key16": "iXdkn5sVHBkf5kWRuD4TUQ3ooWDdaZsNDn2gfCstzWYXMjdUYpSSnLtnCADF9SSv6CT6fGHe4ZLHTQYUp1NmkPw",
  "key17": "2r37UJaNLyneP7MDx2JzeD3tdaUAdzFuurKCbYvoBkQf8biAAYPeYcukZPXU1H14gdznrPZ9Apy4bLu8roNLuJ8i",
  "key18": "5cDiijTrHmwVTbVQJff4pNwaTPfBgnUTucSxb6hZVk2rvkWKgRLueTWSRNvwRHx8KF2YbxhQgiLidWb1wagz324C",
  "key19": "33TUDRe1boHRNcaovU15ydf3wmXodNSsr8cvkPSh1wbJA3AF5WxaPc6j3i2g1uYq2gw8HDNWJA1m6ifFAiwRnunh",
  "key20": "2gRZx6av6Nvccf1UwQHH8MAk2P6bhcptTycu96dWpyNbgkbuvD1ZQ5NFzi378FnrQN3dnWGEunWD5VpWKu1hWTtX",
  "key21": "RcZsxbAFatNCGfWvrp3aq9gWBZXNXaZ7jiSd7yzRXh9zDyXvMhSaDN6Zov1a8o6ZcpQbfHwXj1NHkK1sfZU7Yc8",
  "key22": "3YJXv2dDNrkCZz3aGSf9yjNhobB28Munn8kykNQHCzhg7gHgQ4KsJmJmkwWmFqk8zMCtJReLY862HiUm13DmjXmh",
  "key23": "2mZQJ43CLYCbqNSGxYzk6S1TRfRzhueMsDHFhyqF2MmGrS8gw7qfs95D2XAiUdXsc7cLWParfZBq65mnyB1yYaur",
  "key24": "4uBBKZX3D5KbiwFso4NSVt1U4kAcaDxcHBNTGxJQWJz7jm2Ri52fmkceC2svyZLoCyiJzGnxb2PUBjk71QrgqfvJ",
  "key25": "2AWH2A1UMtToy7XCFY1dm3WqTQxeHtmATCLPvL8mPKytqwFtytzDv4KzBASMwK2QEi9zrQ9XoPzn9pwLmrRSNQLM",
  "key26": "5MqpCTH7TJGd9zfqiLYXNK2rVbwLjTEFc7kPG6uBP7zwEYL2bngMXthMgsH2viX3APw9L8Bn2NYG4KEFeBvjx3gJ",
  "key27": "2qx44KtbX1ShEbnBfmz8inj1yEigFugZXzdiTjdhWzNXofaF5PAxn3AKP1HZ8Mk8gCQ592jQLa5wAC5F64nKYhUe",
  "key28": "5wcsWnWKKXQiStJdgCP9PeyrXba2s3cfNWiRidMv31cM1cJEuY7CQ4z2TvQW8BbYC2cBSU8KRvBQHEUYjLJNvajg",
  "key29": "3KeZwgpmAgqx88nA9oD3Z7HHrBevd3JRXRHXPutv5j4PhYeWGoN4inTJEEXSPnvEeYo4rrkA7fjzUiL8RoXjQYDr",
  "key30": "tdAZd5jnDKEHzdSjwKp1FBgKkVxk59KtxbHW5jz1xkDpqkawHmcMvEA2jeLbZJaATP6WhmogANs7eFhDdnRdhmc",
  "key31": "5nN8fAQsb3mc9sK5pUexB9NsK55a8Wr1cH5FqF6x6gJD3xaTQnL8yiCGniauHQtnF1bb5DKQqpwKYAGJXc5d1tB4",
  "key32": "KygMzJdFvrrqsfFQxq7LVgiueuzAFDYdiHoJSqktRdUdJzPcBrcu3RYoKSzfYJgARxS9Bcoh4DSL7ZHrkRk26pZ"
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
