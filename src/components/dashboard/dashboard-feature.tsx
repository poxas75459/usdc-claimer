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
    "4bvphVHqaByoa9dQFuToMkFdtiNcUsp7bYwGrQJBD4FBDBCrFhmVjhcfr9BqxSaqnZgsSdJNCpHGNW6AbLZ8AA6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VFvyWMLaGCGmiGzgXYKbH2ABKwacjD9RrL7gPBGJ5oMjWQXLXsMRgUyaT98yDRbHYT47WQb5o5uPzjfAGCFj5D3",
  "key1": "2Uuk8rvBfzLq6QYB8PxqD271C9FTq1ATNCDHMCqS77vJsKTKxK62nm3MW6oTQNw6mpW7qij1ZMQqvfuYEwyXeyNx",
  "key2": "ip8FK6U17Ec5TcmpMh98Z3roknpBLHUrQbfgjYnPP6xVcD6WC4tYYczcfkQUhBvARFsdLczvGVHskuTpTa5m66b",
  "key3": "2gzaQ2f6xzU7GGT97t2QBfSpL9WFpXjLXtnouVpawbV9ZPcd4f9qfpqKmDzG1yG5r2J4KwCnwZH4GuBBFoeUKMpn",
  "key4": "5EnYRUuwdFrYm1sryjDzoBv89M3TQab2HjaidXkuq8gDx2zg9BqVvmTzCFuQJh8EGiEfPrmP7caDfNyqs9c89E7u",
  "key5": "5wQ1MbxATrdZUPefLvUcH3zGtnF4dwtdpxBSwvpo9b5JtR5BHv5ATFPYskEXvXRHK8zzw8wehUXpabRj3Pj4TmaV",
  "key6": "5fufuG9kTjbiS3YsnJkCZMrJe7pRMaoPUqtRA38ZQgezfDs47YsaAKgYF5Ln19Apaibt9E5v1rAbaCHTmekiLbF",
  "key7": "2QqV6oXDBXNrwdY8yAtdMqsPYG3J9ZpyJmkwGaHPYjnmw6o9PGPmdJv4WGMhptLHjej2sXAf9sD98Wh56zv6Z3h5",
  "key8": "4TBVWRpQQrJSu3Ga3oeyHfXhVpxjwM1zaxTamCsJL7WrtLqwhBZ5Lg58FiUcM4qikekJjyDMPmrZioJ8LMgA1Tz7",
  "key9": "4fukksFrdUXn27NTigDgrnNLqmQxkuv4hXNTeAuz2sPFUJoxSFpkUXyFZTwEZbeUFTg2r7mExbUkQXUfjHaXHC21",
  "key10": "2B8LZg21ZaHfS82zxsgSQNH9SHqpUTyw65gN5CeJfJa2Gbf8HELJPGAfGnTPyUfAjjub2kuzjPjNG4udf7gYFsnt",
  "key11": "2yeFgkaxjPNcNrhyfg84JtVQTBBHz9Y5aFJUtRPPbk9bRnkqr6ufj27pkyLmz1pdfGMaS3mAqQiVNcs5tK6Svk9Z",
  "key12": "2YHA5DV1NetU2zjbQcytXduEF6mXGj91SXUW6aRtywzhD7nGextqQW4NaPbwZiKYQDcj1EPXnwdCaE4opCV2ZkUV",
  "key13": "59j1UfwYHePR6gZ82R5eg5hWWQwyhJ7jXj9HYjkHrjxxAwwiJPKLnQuDM7KdJCaezHn1cteVDWcvq8BR36Lzpcah",
  "key14": "4BEc5QJP7sYfoErdXfnFWSFtpm1qzizAEt7Nh3pYpj6TBMxP2NU1pnHTAM61BDzjGC6tkEjpcFf74bhHGVKaVETy",
  "key15": "u9rwnwtvtcsNbDPx1CjTgKh9jM5rvW1iBVwqDfrVdhpzZSAw7ZxcjWY2GGc94zw5g6MFqgPURhRjbuknATw6a97",
  "key16": "B5LhkmJdzHsBBHv2Zs4FrKugf8pMfPKsFtBhs6bZ19QYPQxLCQjP4dcD96EYZnfXwvcX3hGo1uVA8pg552mggMu",
  "key17": "5cqJnPV56yYJzZSrVTg3S65jhup1sxnRo3pcMX3wWvR7ECUgCoYSrsihMMhKFtwgSPwyM6spqK4MJCry6dXfeH9h",
  "key18": "8rAMFy8tpSbAKjAmsvuedVLN6v9r94hVaupyjRXGAmTg2kFVnnQKp3iRiiiRjQ3qyBb7gEuyfb8V887TPLCW6DV",
  "key19": "5QP9z1T3tpTFLXQK1EsXDEWC2VYX35MPzqPy8mYxqHv11ZwGHAnBgKKGycqWP4M19KjzEM8BkBD6jMyHUWPAzyYv",
  "key20": "37zroqRT65W3uz6U5eky1M6Ch5DLneL7vdAoJXR5P6aDxXFFKFP52AcZM4K7hyW3A75msCBWJhGbfs8e8JDJHCDe",
  "key21": "8p8EJCfPsdTCpWUyUXHJ223PvTt8JfJYP9MoFyTGB9nYUYrtMJNkdsANmkRukVeFs5qE7cfS3hVQBgXkK9va5QB",
  "key22": "Zng1m7arQrJPfMkUJWHXi2T4hbncta2yYbbzg6Pp6QvuseAKVmZ2FJR1b6hqzeqcFbAAywRxhULrHAb3zYSkq1v",
  "key23": "4uTxQtf3LuFze4H6iWhLinWe9JW1PsyYXZrtR5tin6aspghvxLk1PGo4t2qwMcChitWG13KsW954dkBfQ1i96Xrr",
  "key24": "2ka23nMbwFp3LPV7xj7p5KV8e5XzjKf17p9PRSnkG2QTBZZp5Hce9sMZTsSD3RMZYAm1Eyyuja6hhvz58kbdyAqC",
  "key25": "98HTVVhvDLDgY8zLRrNCF8rB9hwi39U4Kig19bem5BuAewr6vvVp8fBGYS3ZAVKDorHzkaxXf19gCzYGzprXBBP",
  "key26": "1F4VeXaee8T7hRYoKFc3BvhexgcZUNmauUxo61Y1on4QErwMbjz7ePZU815xBsUnP5oTYsUwpoqzBoFxM5ABQsp",
  "key27": "2XUVv3uUr8ogh5iyTxNrJWmsKF38frt5gC5Lsozk4SG1FDSGB5oE5xcdAN2Gmy7zs2CfycZCjzbR4ohcCQdnxTNn",
  "key28": "4asTxJQp64xhNiSaA2PkJ8H8CPeqjQnf29PDobud3kzhoS7UrfoRExCuh84xqgUw3QkvaCXgx1H6RiYPRt2T1Fcz",
  "key29": "5G3b9SvrSEfe3rVdpYhrnGT1mFCkGRUNxRbCEixqhNsf27Up7y9hwjejHvBXpspaR4C24mEEh4ZEELFhHLEkP9vh"
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
