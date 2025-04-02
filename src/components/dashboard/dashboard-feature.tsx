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
    "3uGtBidxAHAVdo4opGK7KaaV3DKFtjnuqyHw2iMRZTHwzG3GKERu3i8LDHHByPDD2inP7BuBsAQCCsfxCobanQ14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VwmxZ1C67zbzfdFBn5gz2tH5reiNhNcfVoUuRvT6sEvRHHo7W73PQAkZLpMztkMwVbDPVgVAw5hSmAyvYX8G18p",
  "key1": "3y3FVe2ZiL8Jw2P4UY3XCaNwnqhN2fBPsceNDCYMZfL7VPwAPevfV8gWTN9qPA9dNf8tSDgyma3QV1KfZ8uakEbM",
  "key2": "3DQPLYfZrygrGCH21r3kySYdBKdiJQcUzbsYC5qWx58x84DVP6HA4wjag93kBv8k5cVDbmrNbHG8RV1TJo8pNiyc",
  "key3": "4xbxj65pvaFmAmP9xcGBqnzqbL7cNepMcUSXShFncB4bdRJDjqRfDhikD98THNNmUrTMYPgWGgbJVh6j9SW8Jh4s",
  "key4": "3awsd7nPe5mKVuwRiUL5NRqDy9GaX9KJCcQhAfBMd1JupPGHBuib8zHas7eVpBCAV8egt7odYM7tiVY4dZosgt1e",
  "key5": "3p1Yr2mVX7TAkyHiUFzsytvf8qZvXZtxXvHWfutnSSmdj1Vb8BUpKJaTvEmjFveREYW4A8sXx4p6eKe1BbbCpZ1M",
  "key6": "3qkfKvrVkPJKUcJ2RXudWiqzhHFkckpGwW4DdZht7V7zSeosTEHfRXcrrJHboN1bjPziAmB8Lpncip4H2FnJqUHY",
  "key7": "4zJjfP4TfsXV8fGi3p7eXn6rCntCR1CpX8w8xsHJ2AKmmNHG4LuYvt3x3iUxJmaMVQU1uXGnZQs5QHehm33qiiHo",
  "key8": "5k7x3bM8KgskTZL44zA1Xet15upjptpFFWcaFgZ7gSNvQpKBwN98PEnGTtCxGcCEEhKJcWyRS6uoZsbuh3fLfFo9",
  "key9": "28ogzBnoTnv2rgLyFPYmdUjDSTAXRZoWSDMDgktVQ9SK9LrrTYnQS1g61viN3ZuY56b3MtNuNKRAe9R5mzWx9oL7",
  "key10": "3gXzPKQotnMD22vWXiRXZNnVYCQ79C3TZ5Z2VSs7bx5EzwGfB3fhdAxKVV1qJUiBTe7bYMbxowSyNfzFLFu8xoZn",
  "key11": "XQDk1fenE7f36AVXZMHvuDbhXwFXvBQc3yGvAGAevCWaYiC19XRMrK3FskJDhyfgctsFKbhMxCimUWSF7m4234D",
  "key12": "cqPChWeRG1qg12js6PboFGWAbtBABQPkBP7TR2fjFxPHizmKVfzHmAbqMCA2TwGvKdhUDqxSW7f79DqbzqmmVEP",
  "key13": "3ELvs6jN59gVZdnTch6DR1RmxppquPmQmTsGXrf6MYuqCgKwapdUbTXtVUUCizN5qXUFcLQ2CvVpCK5SkrbNdJwr",
  "key14": "3hvnv9fUKs2WttGwavFyMvFQ61zyxHPUopAwtoNGQHj6ZgoNnzALA1KWtfVs1wBtDsaDzoRMoegtsVuxoahxhxwh",
  "key15": "Q9TePN6e2zjr1DZaiSJ3SMbrNYUe4XDGQrttKeCnEHizqLdYS8bn5RhPFPQkeJW7CG9nrVMxjX1UXSzsH9qfjjx",
  "key16": "Benp6nxTqqXTouwpHyty5WtkmEFZYRwM2TNcN539Mm6FosNUrWsEpVHpyGUHEmMjfpu1TucfTpU7jLiGwX1XKBP",
  "key17": "3LLPA9RYaChVjx98bY63wxQXKwgUjzPAbca4nW3816SAfubkD28Db9AKzz5Udv5sMjQFnJpfxSpfaXUdW2Kf78u4",
  "key18": "2B5Bd7N97iuLx2zmxsXYPPqn1CtjjdALxyR3mXJiMXfqRtiTj66V5kXa2YeEhFHYc8XCk5KsKySeJ7fSEismNPGJ",
  "key19": "2NHhiXVymF9oT9BPc7arvq8GD2EjjSt9ayZU3vG3ZydAbRMmGZsHiPjLzk2g6Zc2hUVJ5ojkHReBtMt8f7VToKHh",
  "key20": "2iVZ7M22Xw8DMwKebk1U6TTbBNfCDBBkmTfBnxrDBvEpa6DhdXPrp49JM21ah2HEP4KFHqqxSHKXt2CsDUARhTcY",
  "key21": "5Kyv2P3StYUT8zhjdPbitq2maipKJo5gSnb6r2FydY5gBgmiGqkE9sZNrD1vwxBx5BAXssCCR7uE4hgAeVWKkLuf",
  "key22": "5xygxrQZWqqvCazaxL2QrupVjZQKPYRbxhFdJESvDXPdTXky48RLU25W4oRtNkAqd5qVvYgnuegxG1AMEfn6v4am",
  "key23": "4JQvqMFfCrzAMgfhJ5f47mhQnbyb8PkZcqfEq5LcqNdAFoH95SuvxXyptk4f8Ajg3Lbhw25J1bDsbYLwEv5JD9Zv",
  "key24": "3TacpzS8EMrh61pexkyE7A1skeTaCdC6rhcudjWwgjNs6Lp6Rg7Wqj3RymfeYLcyM38HVv7ZMYjUyVkfYK3zaijq",
  "key25": "4H6PZ3dmyja5YyJJr3thuvdrhDVmJvopuS3XGttVJrfrxQG3T5jU42kgNAjqJ7raRbb6Aqdvf3yuJWTqCvXok4Fm",
  "key26": "2ZwqNmFeyRSAeE9HyntHFRDxpkdqBUUMHPaLj1dVHCwD2NXA8GtXmjp9RhHiyymaz9swc76BmH16T4fF1zhq5bgS",
  "key27": "5zjCZz2dxgwBPgSqU5o4AW2seGDGvs9LNNfUfpr3PShw2r2XLe6wCksQo4M95wBrJX6NuQZJNXpVfUPKgJNAdypH",
  "key28": "5j6uy1owMVz94ab5KD7cvsNrXKEV5hW4e48pzYbBC3L4a6Vp2bKcBgkZjUV1ESvPxCuJ3UYntG2rP6pMkmitaBpE",
  "key29": "4T48ghhBnUDRH8FrZYHN7e2SGjrudj3aANDaEXbVjoWhUuiw8cE462cYkkyUYi93CiekNkdx5a8xrRoRbDXJZS5m"
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
