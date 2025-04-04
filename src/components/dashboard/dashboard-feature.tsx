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
    "45qg7iwNZzoiCFTdSQ7Eyz9qEAptimgtrDiDbrJJbAtBVBMZVNQokxmYcin3KcrKqP5LaHiw4q3R4cDDVirvKqeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BWksGeKwTHZQZKTuXh9AeLQtSc3CV5mBp7rDaDSiKkXvayGLwXKxggKx1srQT9hAoskRNWFQSi7FkkF4sbstWkv",
  "key1": "4jfSiqAp1b7w5fgSz25FotL6deXW2BCptCwkLk9uFzaRRhzH4aF149JSHfdNUZeLjp7sSGtVki3KXeV6ST5r3Fk5",
  "key2": "3ZQ61EnFyxweMntiGJJs31SQVHqAatuo1jDiZNWkv5NmRsgDqhk5URwJpmRNoTB2Fvr4vk3Lz2swfqg4nGxznEBY",
  "key3": "4iiJMMASp1LwXjsQkb3esaANW6LvBTPXweN9LkRija2xis3rpqfqZLx9NuvPHiKAexycgSk7uzRvcKqhv2F2PCrd",
  "key4": "647Wkb2JimeC1PvvpnBbmh2qPM6eDnB9dkUigZKdVHjgzb2aPyQqXLdz1SCNdiK8wUXEz1xRRdNpsZ9N7ApbDwJc",
  "key5": "3eUhgCjLn7KV6AAZGKKyGFqr7Rexr5QiomP2RBb4rQhtZqZThdaHUntnHWB27oNyUgLMoi4UCp9RBRK4JgVaizML",
  "key6": "Vi23aLgybCUtfq57Z3qTVb3QY33pFns198eNsApZCgk55bdFePUaSqh4uptA2Rs6ttw2u9jk8RYJ5pXdDAJf4Hi",
  "key7": "4pJNDQZYP2YjedvcPHvsoiT94pspbzwaRjR1EhLQFoDStWJQULVuJNUce1fZ3pUdgKVsz7NfsHGzsEwdPsYfEapj",
  "key8": "hxihWfGcgAn3xa4HKgFnu8yW5AX2PnaVBg4pMasjrnuhDSDVSNHWUFD5XvTTzxfDMfFsR7xNDmP8TzpFc1Zbdks",
  "key9": "5kj3rhScdrF7XoUX6dxinsUvetmuJ1yG69WcqqTtRPBZ8H1KMn8vN82wP6hryPjJjxkLcAoGNxyYoM7n8UAuUoYm",
  "key10": "5kpjAPCgga9BDfaySAPJKjM1vprY9Y2R7peYzohfvWksAt2A7fweeXp53aN37scroCGWiudougarpkzUyW5UFDJc",
  "key11": "2Ykud8jGsgeFhy9g6EdqS6KiFykSNvYvUuBaooTYVhYZKgqMYYwehWPgxjVSPtf2cMKS8t8NFjT9DrcLELNivX9q",
  "key12": "4nPmd6gjw3tSaroEGwHgM7vnRBk4MFvJ3gci7bS8M22ixgGJXm2xaiUEUX7GFLR9BHbRf4kAjvSX8VQRysKiUJKk",
  "key13": "MwnXb3UsJKr7ptGdtbeLctF3FVRvsfkBXR1JD7dtL11ETd5YQSFqtkE92brwgtz8T6buBGCV973FwYTKEN9L8Ck",
  "key14": "3fUpVqiUH375BfAGhSgzW8roTofiQkoYhMXi1qKGJoF4dW8HKiA7CgSuCJVWyuieagbryguwc8E9emvdW66WZwzd",
  "key15": "3L6BxhQj7BUcFJTku8byaVs5cJXS4feR74N8H7kn7aun6tbnniRWhxeAjgtsamhTskN5cB144KNF9iCNe3FjXQq9",
  "key16": "5iS3U3s686bFVyf6xE8bM7WRWbJZr7GCC6RZcFgPffKtZCrM2DM8MmNN5w8VqpeB6sRVkVa1rK3n3YdhMKSF8f7e",
  "key17": "4hEr1zjYFwKcxaufhgctv3usNVQdxghq5sFm8eQmkCoj8C3i93yJVWFkB2VTofPZqbotRmjRaebGd4CRbNDC8aFV",
  "key18": "4AmPwnjxVepqH7hehS2dUvoounrWtVByshZ2AjCstRQWpvEYCFMjM4XGwWEitazyAxfd4NgQeZzRaH8fSPxfhwgv",
  "key19": "cmFGkk3o9QLHgzZFb48X6sjTYsmtZeZgEtfWJfP2cTTh1g1a1g2PkCU959eNyUdHaT5esWcPMwz6DnA5RXRPmw2",
  "key20": "2PofkV6WiUKRK4L7g47WmWnWvKz8JKrh1QkLvtXk9tzU6gUKNz1uc1FE6UYtYcSQbXbYydkqPKbCJzKGhSnED2kK",
  "key21": "5URR7YGDeNaLF8SjJqQGLtepNpyeUiYKLg5zKATxvgkZWjWRXH3EzhEEv6X61Fbe2xquGnpRieaZQNyzDT9LX9pw",
  "key22": "3HkF9PywaxfXaoYXpM8bNFtoKSd6K9DSAhsTFN7kBDnuLSzFh16kH7jbBkmYkWKD1ujmboQMGNfFjALyvo9971AB",
  "key23": "FLrovmBUZsRG1mgd4XH3282WAtV9gi8716igUz3wTWAZHPhSRmQaavDEKLbsaUnypw7866YYwQQrJ7MSDnV1SEi",
  "key24": "5yTzz8AReFrR4daMZgcSWpF3yNAAV3pVaXz2uE2SibZvUghJYtmCL3gLvtEnDwpHpwG4zKbXLPdwTC3n3NLjH9ax",
  "key25": "21ot8Soxg2xRxNnhqe9zqzPxjs6y8Ds3HYaSAZJ7mfPzr5E97wv4rEkueePURwnRfUCMG41FKFE2vPG7RA9d7G6x",
  "key26": "5JcM9D9eD1jZeCqSFHYh9pqGVgXhTJp4yViPP4biq2JWrYox7khX4UtPar5B3oKyQWVMSztxSwTMzLiEb5n4TqBB",
  "key27": "23pBSDvDsjePD1WyWkAY7ZSmpvdPWzk1pF1TEWF8cwUTqH7A8fCukyJBooUrHomWDFnZZGwoNTNXqykeDwRrLgRo",
  "key28": "4pBB88LEXHB9kfxe3n7uD9pz9ndab82ddf7KekZpji7FYYM7tjkqmVQb1r8mcs3RQ5Wfs96bS8UB5gMAgnd8jr5C",
  "key29": "QpXmZTSDmjEM45zksFgEfNfSsfni99ypmkQK1uf7KEaAQtoTc2V5EVLHbNNiDidgZmsT68vrV2HmxwYGB4xKTdR",
  "key30": "34uS6fEj8fBvorWKETKezR4aTAtGGGKzPnMsjaeqJTQA43Kth7d4LQ6pNuSfTv3vvQg5nszAP6m6gwgVzV5pR4k7",
  "key31": "3ryzRFTKT1T4SvNzo5abKce1xYCJhqCK676BfpsjfsMuBaGfzABKb4Ucjb7aRKt9y2EADEVFFwU2RdXDLUDYrdTE",
  "key32": "fXhZwsrGwCio9cywvjvG4LxVWRoKB78kqhshviYEs2dEKriRyZbXxqq817mwTo1kqtX1JP78kbMuDfrAAGRDWCw",
  "key33": "HYzpE4oKYkoQnPh3vXtQy33Q9zAqQxGf7riAketRw4CuKxK669kLBhJVxhgmbpDqgvJGk7qBYxstWJ5U3eqeVL8",
  "key34": "5tXCtrjurKZUbLzKMMk9crUCxxfX3THorjKr5iPtLGpxpe2QuYnxQRjU4K8G2y922pG48gGVJSj1GqnNmEQ4WZ1",
  "key35": "35msdEXLiyuE6JQDPmpSMKF1S3AxkcZTPuHnq9AZHiCuQPAGzZmBcrXLoKRp9uj8vfeo4VoNBKhobhS2qExBhAEs",
  "key36": "bA66d7Y2QrBpJSFjzhnLntxAa2TaP171YrJKJNgYbWeFJzKkygeBuh2LuUBzroahXBuh3Av3q5bqtv1TQaC7ACs"
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
