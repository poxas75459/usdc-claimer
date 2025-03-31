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
    "25sEaWGrrE7LP341cDe97Lgpu5btwugGmKTVHuerD9PvRLszzJS9gNpX2aUiWU7G3rHZ45DX8wfSLhmU7DdS6Mdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PeB5YjHDXHgKJvc8WJYNDDJKx7uxGxsT8HrRA7Pta69o8wpspkWTbropMkSRaUDDHC9JnSs3ZdeTCe95WLUq1pF",
  "key1": "28UjKp9Cv1SJCqpi4bTpYtfHvft7Zy74FFfMNATF8szVHVnEr1TXTEiWoEG8k2sPJHAawDgtqukhNPQXUsQteGxC",
  "key2": "2DWp8vmYwhZwpA37tz8ZyNSpKLvg1gAjq5xhnfifB4xJzzJXy4YyhZQzVvmh324nbXNTJGQXiei9pznhCmUEXiiL",
  "key3": "3B9BqJhsAJ6dNsGuJwPpj6mcrnqKSQJonKV1pFzKDSYdc8bfu8LvnurvywWSV9WXyMu5TDQezn16brAUn1WJeKXk",
  "key4": "58pn4HnRYaP88LxHh5HPkz4f7hMnMV75SE5gcUqaiY6S9EVRppbFSTj68rzH2YhJri7v2aQc8z5k6s8FZbsQx5mx",
  "key5": "TAFYta9F789nTFt1pA4MZbLRuoxie71KgkjKPasXq1wzwq1CKf5hCUpcYu2TQzSSEmFwq4Mgnc22DzDaqKAPGtZ",
  "key6": "2FdzGVZdUiVgAwvRMRXqW8DrMbwxYZxM2gzMUMU3SUXDhvvzbpqn1yx86V5LKn4y31uqXqMstpvgVx5Ty6W4vAdM",
  "key7": "5HVdcT4BX5ye3aM5wbn8hrUEcrNJgQhXm7uMTyMnyX9BHQMS2Wd2FnEj27TZgZ75b1549Ch8aqKLxkQ3uSpLKUrG",
  "key8": "4mxc9xLwfXZbX2QTxAPYyAjvi7pE15s5cTMNsdA9vYrwfRzVSzg66CWRFWxD1jYpL3VMoLUpXkeyxt37rnoiE3E",
  "key9": "36cscee6BYXuqjmGYRFRg5bi1kavju13xEWEDJwnUKkRLKMzThbEZLCYaM8c5eNX1YhnT1EDQGc9pZT7XkciPxy3",
  "key10": "5dV5JQxk334HV9LwoPxiZsVM8MQgHXQkZW8Kd3MiWBf7TZ2Pv2L1rjCjQ3kbga4gGJGXiRC4PDdUh93FYrz4HZf3",
  "key11": "5XJVmBo5Vccs2RA6e6fqMqnPZMiYcinYYsFmGkbgyDgeMYfJKxeyfJEdCGsYoHPCT97ucf6w65tQYggyVfj5ehpz",
  "key12": "4xfoo6rviNz5MXNwvEbvQF3cwW6c27XeThN2qEBbLd2X6bS5SvhboyY7D5yCF8fq9eQpGWsZWtd8Uzd9sNWTXjd9",
  "key13": "3HUuXChukMLLFFrVXC49zCXc5QdCZpmCYxMkGRF4wvxD7TAXXB3gBDHsTixDXspKHVNorb9ZJXa4L1x2DuySH8ey",
  "key14": "548YP4czELH7FAVmk3N21YgUgoQAiXYs9USeZmVSaW6AfqPxg3V1BGNWGTr8GoPpVBMedDmJBgehRdVdbTVyRAiK",
  "key15": "xQhGNrFCTFdzihXRpApDDLFGnBHjjNXJuqHJKr7gfCbYJjMaNFqbyXyy9w8prJfMXWJgjbWNjTwLjL22B8WMYzq",
  "key16": "3cZQnQJpFHaHTLVSHJpmMTQKxJAD8P8hP4mo8nS5gxHvyppWobbgQwsxsVgo6GZoNY3ZYdXurzYPs1WxUsJCbQJx",
  "key17": "2Km9zEWUJUKF7mj7ghb1RbYxbnyD6WE7LU7zaUntJbMev7j8sEJ43buZGBnbov2ue62nAb4WkTR86ZRGHDLLtack",
  "key18": "rXd7E5o9U8h2BBYNSDysTLM9eo2XY892nig6RTnNJ9TSBrM2ib95iuW8SeQa1HFQWpeC7bjrWkwZhJr1Tod6B66",
  "key19": "2Mbao9GRTqHV2P7db67VeKHGqeC6ryuZQgGC3uVVvxAjfxuSxu92GoV2t6LqfjftwvtBn7erwAvhvwN5Q4vMztwj",
  "key20": "4CLLasVZD8XGbjVQZQz45nEtap4TRzfN4t3UYGrrTE9zuqaRahW9eNijy1kAjC3ZBienj15qqxQpk8E76VbizP4X",
  "key21": "5xT3XGM1hMjjSSk1xcpM6tck5JKAmHYnzEw5nUv5SCEBxsnZeGaoDtVmZNWLz3WyDZttLmpJCbuZXxLaLFDg5b2B",
  "key22": "2gsHGdLCJ4PeavTXXtxVPbwLqr9KhE2R9QhpNSvDehLWbp2CKAEZ5kQRcgDj2Kcosxyub88Wwa9RdPxr2W9zBJF8",
  "key23": "3bpaN3Jx1FgMtNn1WU2LWKYC1tExFcnm8uXfkBHu3XvUXMtMEivH75eg7uxVc3KjmEWEBxzyaMe7H2WSuGh4u14S",
  "key24": "215R5e84VRziazN7RKkU3a2dhspP7sss9BHt6JJR17h47SxheuzxzH2iT8sj4vcVpYbEmPCCrcRXG6bqZnSDttns",
  "key25": "29vhJCUAFXaeHTnmr6EQUZn3qBxBAywcQBcMZkLHPEWFHgR14S8JKrcQkRFqrVRPEp65pgW6qzbaAeNaW8SNfdE8",
  "key26": "2ehor4rfRFQLBiD2ygDJRAPmy2KyCaYbfJbGT1oxeRyNhxZ9JCZXpvhdFQERi8UP7xmeSgQq9eC9nVdQRijtTZNm",
  "key27": "5bczFJqX6D2S8YxNBGps5C6TtjipGU6eznrCGimu6uYCAczPA97hjQYfu4iPv6pJRJVAkXVHUPbUGM4VM38D2S5w",
  "key28": "4RABtKr3wZY6zc2KAR1X4yTdUVkrdGyuxjQ74sJUvUcdWnAjYcV5KiF5X4pxxynDExjuUAaLRFYSTuCFXFfesQu8",
  "key29": "3LSEziTWvH8g6Ry2bCUXDeUexzLT9EyyF5VXU9AZdN52vu7myAMKqx54pPQEg9tUN67VaJ93NG2Ftz9jLZouYcfs",
  "key30": "5dXKvnco6YMWthVgmAH9hbV6PHJMXg62DegE3AUS4CWECvRPW35BmcpSNvvNvoGBg9AELniZ6FGhsTNGnahzph6c",
  "key31": "5bVag7Zy2NNycYz8qVxXqCe8xWzUs41rd42HBArPgAtvSYqkn2wDyPAdXfrxeewGUDzfLVRbNy8uQqribh14BFHC",
  "key32": "4daGiZc3B3CcS1iswDaaBBcPo4MqzkhPCcAMqJPyj2nANH2JUKXLVZLyQmfixmiih2T31oei1CRey4g7VZzk8S1f",
  "key33": "4YarpkHqCtaUhAFB2yNCESdftbF88TFssZgz5PCnJUkqyn3uMoqXCtaf5nQ7fc66BoN1q64eNuHWxkyS4iTmvwhw",
  "key34": "2pdUrWvhC9YUapBopBUG7RrhMwqj6vXiz7FFovgP7U28AUq61KLWcQyeRyendwp1NG7opGLXxbVwkZhmKAGjpgfB",
  "key35": "fB2bC6zmWMaYc9TLh7SRFDYVM5YCNmddYS6hBvDDJb6VxCEjoZrCg56uWzzfNzUqjdSq5jEVZkKuFPHpqoAvGx7",
  "key36": "3eQmDp3XCq7LudTsL57rPdvv4fZDt4Tw99rFDchYvAQQiSZjWqvkYB91o4tTQZJDGWaS1911AtVRK9GN2uaqAiXE",
  "key37": "4wsVzFguJqqsKhyFoD4oEno7Gkc5rTs8VNKmywuwoBYUtxQw6SxZMyRRq56McH5eaazWJ42xBcLdtwGNUCMg4qQJ",
  "key38": "313dVwwpPnhXejXJBzsEG9xqgBrg3YvUKyaqBekEDUUmjNWDvvKm3SumeRDCFcdj2HPGYqSZB4SAinJirbzuVabb",
  "key39": "v3NmgCxL2YyNb9uX3PVAPYX2peq43p3SN56agt9QAQPdsdxtZxArYEqjkUhebwjze2YhiiNp4CyUgaJZWa7S5jX"
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
