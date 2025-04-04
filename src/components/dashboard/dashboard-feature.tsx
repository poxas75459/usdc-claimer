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
    "WYKvH7hXa9QVykECUdj4tk7yQfEwGUbRhFBZDnb6zAYoKhoCputVKjzcHnJQe38p7EDanFCWiNBBoVFyjFNdBug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UtBzDnPLBxu8mfMh8BLTuznxHZ7RtRdoBNqARnDg3c7xBCYYx9tteHenewszpB6JkC6EfsNdedMNhovpDZnN2jQ",
  "key1": "5JMEVbmqMYG3sDnNqGw2edfHhyzTQyy93KYQmX6s1WFsNdv18fCAzsetquNxqu4dYJmSYsHssEesLuoCfAMbKEf8",
  "key2": "5UyPZrp57xCyWy1mD3oaUnqCsVvpihfiFKGn4gn5Lt9zmK8M1witU3Racnt1LwUXSh5H179sakvWgy1H3mN5bR43",
  "key3": "3Rad1zHkw2jWtwhNq25xoQUJew5xeEcSUzqjRou8JPueAFto6r6riKTxd43JRRJkNbqZTbtBK4KrCWr2ABWEVn68",
  "key4": "653PnWHg8EQK9UbGMSP9Gz88q8cxb3b7x7UTEFay9uMB5SyiJgqsque8webnVAt3BYAhvbQC2wVaW22McR3CFdUk",
  "key5": "3sp4wXdUPXFvFNr5yp9WGHaHfSmgJndonhNRmT7a9A9iPzVnMJMasAQT3bzW9wHxWxy7zzdv8eeM9VUxAucqEBeA",
  "key6": "35z15gwcPEqZxQoJyfGHVMmbhhupeLZr2g4neiSRVnJ5duFNBXB1CEqksVMGUAc8JvHWaMaPQqRLHyGcidGT4KL6",
  "key7": "4VjNMjjSRhm2yivP9Gf1Djse2iXkYVKyraxKR9iymnNn2s8jKz11sJCaYgRZQEnnyrgN7NLj3jYxUTfmpDsiokic",
  "key8": "4ewMd2SXGbvA81PSBpzGbrgTez7yTYg1QuRpRtGnnQSN3z8nKVU5A7hSToyTy1pHPRwr7FFLpCwPtz9FyietoCuk",
  "key9": "5KaiXRgSNBVEsSZ69iWBss793hR1ZUQPNixvJmSRNdWasnNQmLo6vBNkFQ2ynUnq41X6SjBqQEijzJ5SM7iJFoHN",
  "key10": "4k8d1UFLhQy2Dpc6ZCkY5GLfwSrU8bYir1XKduej4nfKoT8j5LQkdXN72KNiKV8MH7gCtHqLAw1GR2zzj8532qSj",
  "key11": "5Xs6kHcnWg376HYr4eG8e4NXLvj2bunRzM1vEoaETU3QkcAEpyNSgJJzApLv9GoHYw9a5m26GPaah2RL5toePnYz",
  "key12": "t4DA5Sm8QKDtEA3Dg8FDuvTke2EWYMQ8E9PKhc7XUZcasr2D3Qnmaerg9a9ETDFG4fn3sSMFSz4s7XP5pBe97Zo",
  "key13": "3yWhgUeqhhK6aoenS1PW9KbGM2NcL8xPMHrLjLm1WGc1Ph4sJga2zrTFc9kwhcH6Qz9rBWhnjBjwBQfhcsG1MKLY",
  "key14": "3c3c6jse3YZiwcHdQELRKQvmsnTCDHtsNnWAi6SRoVuoHTqTUfGbmHDoCqLij5jvDwRjH8RL5ukTVvc17U2TsEQC",
  "key15": "4bcEf8iGio4zYmPE9FduGqdejZTsPpAWNRBzxZNfr5UgbKotL5HV6FKCVJqMqrxnfRnP7nqZsrAC6dJuBjFKLGE2",
  "key16": "3KQHmUBpYxFhLW75ExjUgo4PGGznWwKcpbQkSpjhKkTCQEZsY9fV5cNsFmSGhZXHXPt5PYqYsEdBkBd9nko6N2cG",
  "key17": "2MavwBuvZCnpphxr8fmcivdXFksmqmqqJJjJdFa9go25eY3MCajk5vgcsdgGeN3FyKLXHN1o8TfnitJNUYmBKA9D",
  "key18": "4nGHjuJAmTMp3E5JeqNoQWdW1Yq4QxazQt34i4tUPQKnUTjzFYMh3jWAztBEyyzP9T3k1wzq5KUxk11NTb28YvAJ",
  "key19": "58bzeC9ETFmwcBxQN2M8LW5YbfqaFfvD74JCx83Fbj8uMKnjvPFggZRHtzRb517iLSQj7VGX9YXbKwnZwpwYahrj",
  "key20": "4g2Cp3kGKuNtycNr6fARvuHvnJFJhEnwwjG2k37PuTJ5aYx7QLBM4bxbNdPBTaqudd57goRzBpQd4fMbxo6cpL6L",
  "key21": "3P2jv9BtehH3ir6Cj1C2MazxvUpdfBnDK6Ph7uy4K5NTDvZb2JoSRzBEU877Efn8oBbaE33TBCVNxHqyVdxSyCrp",
  "key22": "2BNBHqKBLrXEzZgsjb1SioqE6gs57jRbKTj4jvddJUfkuvCS4232Mi1Lo2xZRUHeAnofma2D9A9pF3RYnCE3Nxo2",
  "key23": "4ni6mQywrupFodi3Ejrkx6awij1dnnuoUDVw6A8rNjBYUkNNLgDaAUVww4fNZf78bkw6BitLbKtmhxivLNXWuqa6",
  "key24": "EHDuXpdKjsuKnkUwcaU8y5LCrQehAmfoTQt7qRD6tRammSWixoKatZbF8VgAsFmuTDen4pj7yHMb9PXGBC1bLiZ",
  "key25": "5Etmc4UrAAEfPYvhPW4DWj45vJL7BWGFRwzVEGo7PqwaJebRBi2hN6YAT2YcRe9XJzgaMRStxt1fK8sGYpf8t7C5",
  "key26": "hiSU533P4uWY5i2EM79EtQah6XBDUcmJ58vqFM6n7J6dezp71vEYwrupRtTYdkscwQMPCquyXs6em7Dw6LTk2V1",
  "key27": "53WwDXBeWqDbjkqcT1fMHsYMjt9fZ7cKEoweYGivcTHkdahp73dhWPp29uNbdeDWsqoTNgYvryAag4MCpCLWJvAc",
  "key28": "4QuzeKA9V2239JKh3qsk9qd69zoxxV965bhyr2FMTa1ibE21NahEaRs2QeXkj6fQwWea5tQc8RshNtggb9iZog5j",
  "key29": "4fY2ozF9QKpAWd6qHyotuUvEh49NDEXcz7C1umjDappGdbZN5r6qKpRLsiKT1A9BfMSh14KYytzJx7tfuHeBmhas",
  "key30": "4Bj2jYZFkwD3L8pUXSmobTBALSEb6aDFHdW8eXbvJJqpVPstK1yrpmdqeWmXMS8s4mLC5q2Wzs9XqoXsWyDTYrrB",
  "key31": "3ejxSbmXZ27Xy46PZ7yqPGp5JJ7756gh913Lso5xqPeqHFmevWuV7KLwVBPq39ieKXoC1nFaETXGAVVNrQF3Lggd",
  "key32": "BwN6VZjG6GrMJFxH34hEKTzHz6xEoCVYmnuvFwEu1sx1dghnJwji6uMUscUSRpKgMhHfEDeGa2wBEpEjqP8saUn",
  "key33": "4dbf85UcHPNbNssnTV7WmsK6f4sbYUdFVygakQy5XPFWcc5x9xCizes2DTynjHxk1Qzx4F6zQXbse6XbVPrfDksF",
  "key34": "4dA3VHPehCGcM6mtf4ZQdZVsPCmjnot67cgw2US4NoMmLs8D81dxPYwmtno8TqdfHtWsfGYN6Mf4krD8C9D1b6qh",
  "key35": "5zrsZEEwz1Aaa4SdPCdvoefdBE6KTcVef7RSQi89JtCx7UZKBhtrBJQMFyQT9oStyvXVgkQkrKuUgijN4AaYU2fj",
  "key36": "4dkGJt1CJwnAHLh73xSTTKq4rF17kcfRDkvJrykkG1g2UtLB9LNvm1TbMZ4KidTcS4WGQwpFZYnfsvuEeaTppm4Z",
  "key37": "Cz63mqSgDwWvEQ9RhqPiuD7vftfEgCAq6D8NpiwuhgrdK6CD8QrNWCJeyABm28g6bAsNJpPKxKGh3buMKUCAvoB",
  "key38": "2rPqYujJn6zUhW8oH3w6GAqadoQaXif5eH5R4AfZQ1mJrteEATvkuC3perD5sL1wwMYwAaT89QcHrT2TkXtZEYQb"
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
