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
    "3idv7XL6Ayqvyo8gNAr2JZpZXYXRfJgJDPV9GfU7vDySuy214PkR6cZyTHr3g4BpMtWte5KvaKi6EU7rszS8sQ5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mYPkdCZJbdcvkzUG8kaKvxQgYMXMXRzTmXoYuqVFiuXyY5CYkfnBip7ntDG2SoFN378dYfuf4o15AhVMgo13qAD",
  "key1": "64iymGTxxCoEJfvMZe164fPxE4VZ2Szbq6YgB5cSRYRP2tFsBreN1FkwdRq3Bt8mq47Rd1JJCMAyj6JFAazy1nAJ",
  "key2": "2SwecpthNoLsyj7mTUEBLS1Gpm4769tgvbr8KkoH8V6n1tsmNU3QPWSedSkxEargKnp7sbXFkZ6UyCqDLpG4V2jv",
  "key3": "dBUu9dh1u1Kwoy584YCMetaLpGzy84g9io1moNvk7zxZ9Xjfbk5cY17vFFjf9woaTC1UMzPUvwGD8B5nDFRPZVL",
  "key4": "5EHemWBRaKNnUowH8fXkjCdB8S7sFfYKbrfsWGVbphPGc1GzaEdYfPpbAKVM9bDSu3zNTsDJhVVkMsb6Crh8qD9b",
  "key5": "3oZozPvRMByuCDeSHgodYFC6bCnvPyevhxLuWiJCUfCjWA9GYr1UVpxrdgCpD7CEpMeQGJ9AG8Wdu2uSTm6CER3b",
  "key6": "3TzJmnSGn4Vh6atx2DQKECdfRmr4M4MRNtLBu74onJbgrQdFY3AxxBhbzSuTsL4LQ7aBw3fFDLB88me1TJhkxe9w",
  "key7": "5Nk8DNsRKLvcqoNREW8zRiZGrubFoCLj3C45kHBPpnd1mjZUqQY3WnvrwkrzSSUwYFQuSUjYYeBPGVgpxLGLacE",
  "key8": "3GUHYudQqWqGb44G7k89YirkFBPW6Xzqx9yUXp2HtvjMQ3Q17uy7ZJ2RjEWUGPrkLHzDhSCkQFVJ8u2m3ZM4k9iG",
  "key9": "62bzc6QUE9w2R566eawjH7WtSPw9DkpF3AoYUxqYYqTHdrNp5BJpJQPAJYntzGw6j4vid9H4pzzZmV64xvhGyKG3",
  "key10": "46SEAJ8isShC1j3qVaRotX22iUeXWrSTezSoQesuwerQuXps3ZyBTzK6hqqmfceJmTSQMADSSyq2hHdtm8V4C992",
  "key11": "4tNTgMzkNNjDwxo3TJGRcnW71SZZ3Sr3hc2rXTeX7V8n39kjy6qqu6tzWCP8t3BKYgegjXpncyAB4Mb1UeK2C3kc",
  "key12": "4S9hohnmxGpZUdQYWK933uck1rof9QTGzXr3h6L2kPecJgGyYYmzSgx7F9ZwrYtsYiRewPTvsjuzBVbXXDNCwHqx",
  "key13": "5ZyP8SSVCBR5kCXqTJaiFYMpLUFJUbzxMgo6DWbJwXnKywnqDecEDYJKhdxtTWT7tbaXFgHuYFpPmhkgqcQ1wgsK",
  "key14": "33og2Yh9w9JDBQ1R5SknPe5EaEaiPfALZm4gz9KuF8rKdVGrYvhB1vn9DttGKfjQr3prhPKBmqT5zCjH4vd9UuCb",
  "key15": "kr3YC2DG8PrU1Jh7oPEHnoR3NVRPyTGLgukp8DWeah3Fn1EpuVw5JEJWKQq6NooJBqxEphKpgSVSXvvKmgy8RDK",
  "key16": "23btTmbzm9jctx9cEn3aqTPfNZFpNjTyS9xwwPPhgfJJcBx7tzfgivLWXgvMVpcpGqhf6hpoTmJqj3C9jRZYwSYX",
  "key17": "29YRVVkPF4FBxFBjXUCKJVgphpPfHTuQ1ovsrneQRV65oD7bsk6AgG95VVCrNB53B3JcAf4raCPp9C8Pody6jkm6",
  "key18": "8q3rHphMsZhzsB27cK73CSEao9CFLYfnE6y5EDg9vYkiX8Xa57JTXZRUTdD6WUxAdPTPiWu2Nm42eqgv4Hq6YDx",
  "key19": "5FtaaHc88Q69g5UQwPHkNpMHZewJ9EERyS2TP26kFmGp8PhPr8sqJf4x3AXV2HdjgCrxt4E8ZQJWUvHFm9cvszZA",
  "key20": "nKb9yqrNB7jwgXit5gCQDfruWVooHg77XycrsBvw3ujWnxqrBuqw5fKgSfC4Ti3gtDyJJKL7PosHr2kirbpymmb",
  "key21": "3RbDL592NZiJBMxKq4td82qDehPdyotAnwcJzwvtRpDkZjvUUt6GimjNCGnnmN6qZTQvYsZzFcr5kHyZYEQHAoR7",
  "key22": "5C3YGa6uyjjfmEChJzSe7G48rm8WCLJSEZRuDJuw5qNTSQwpppnKm19VTc9kfvKLxZFeA4UNa4umVUWdfLrr6Hwg",
  "key23": "2kcxnxqyVgGyaKqPtiCfo4GbBSrVHAhFS7ti3YxtTyg8G4GQTsM7NP6BsXmovFyD89mvWZv3NXeBGArr5oqq3JkE",
  "key24": "4F9asfi5UKY6uroRC3xZoDiJMBYsrz1XPzaiB9cMw7prPc5sH8gXSwwaPpKnsz83mKfKbugXedMWoQS9WFatAFrh",
  "key25": "4ShRcAtPYZ3W7oj1SexyQp2K7nCJquMdWBUevNzdz6Ai1edr1MyS8DZJysGsLJRwweLXmyShmxmcbfKN9ZyK2Xb9",
  "key26": "4sjVNCU4YFcmHuMkDmqioNSqoVG7AB4bqbC6XG1wwCAHaAvuvhBH21PUfD7RteG6Syek5PK9CyFZm23iuycBYq4M",
  "key27": "F9qmYD6yg5ZX4ajGwpwXbDGmpTY9pReuNMF4wxLA9yq8C8622MVaGcPm5ipLXVNrkk7CmVJ9AS14yDUvBrv7MUe",
  "key28": "4ymVcvwBnSfJZVFKMs46F8ZeBh6XHBqJAhprWHosfMLLxceLio1ZynRSEdW2TpmSsbsPZ9ti2jUBrhFftveYDFSa"
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
