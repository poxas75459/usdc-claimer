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
    "jLhREMY6q6p8PtiXPvWquxeu6c76o85we3XetKKQvDVXQFy6yrT467JowceZ2nCbx3VsXha9oJGa7q4nuLuHKrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NQo5YyPc6JkGAizThKUcYMn3rvAFHSpHzYAbTVAxj3tJfBRqq73YoBQ9V1dCRyKMwY6CuMsLgo6FhuR6npW7HSS",
  "key1": "VBFEJMHtbaLGyrdKNj4785UKXxRE8ZoSVGAJi8B7ZZ98v2qMMvh1oJtnnCVLZpqxoEqEVBxCxLXUDr5fuQAK3Ne",
  "key2": "5ajPX6JBSq1qyDAm9AHjkzSVaAGuGwvMGQ8QobmUCv4ZfKyC5jHZDUQJwfcyKh2oiZPLEVm7CZ5BArPmdYepEsgX",
  "key3": "27dX7THRvZmKZ7oDpwx6oTPjusfcKMMpYtaddeVX3t66AzggjX45viTc3xk8n9rQLiA14XgqGmFsmLyUZjz3HmJp",
  "key4": "282gjtFA3a2XokRNtSQv8kHT4EjLQjY5sJRwN8aTsyqsT3QVZn77yfdH6RgBYtkqqTsFcTWNgyQEqEasLuj1NL7V",
  "key5": "4SpvLuMAWePUdaRsvUcBYx2AJq3jgpzY6xYcWhpgbVT5pEqVe3LLCHNRr2u27QxJtpHymoSnn1N7MUUEsz8iUrxB",
  "key6": "5N9xwh76UvRxcbBWbyPWH9WNHoXRCfLjcSm8YWTiqTgKmzeKDtFtCySpsqqbZmnXWCvJeDZs2Ger5UVSg9CA6yBv",
  "key7": "4ybC28jSKNmzDAyRyvYajBFSGVFcdSbRJcsa2u4vVrvfU4NjoznD5ypRB7HfbTeDfKvoKKCqxrJ6NSBwMZrifNzU",
  "key8": "4whpFNDEgX17ijoqkXUm882nHdJaKcefeXAemJCKqBG6jkuWGfF2Pyqi3ZxW1KiSi8Aiedg1NvBSvjbW8gRq5ofv",
  "key9": "2LbDUkAGHN5pAgUHL2nWYNHZQpsgVPRnduQrGsAxVDurpc33jM5jpFa4BxjKyomhHDxRjyrPPEXcVUERbLMiDqbQ",
  "key10": "5prPEiNCZeJfWWVkqwPWWCbfiCkg1y7pEgJv45wF6gVLatQNEQABbS5Eow7n8pkkmodzU6faPiZ89zXmRAfEq495",
  "key11": "2NUDYNrURmuoZHGYqqdd2A7VfJysRdjoPdFmTUj3zeChJxAPpAcMeJa7mZNsymA6sUpqA4DAcAz4HvX96WBVaoNu",
  "key12": "2NpJwxM4YKQe9ZioAc2HungN7MnwsfqPjPBwNWgHe13e8cY4MuaL8EqjmptEQFhmpnvL9HykLGrKPugL4wh1wprJ",
  "key13": "2Q6zxxzkBAx2cfdjij3AZJ1MXMrBb3CcP4vqvRLqiZzmrZ9nbwC4GzP1h4KZKdf2rjDrSjBKztk6DMsHV1d3G5Rn",
  "key14": "3aLFmnjegQGg7Z2G4g1DHTYqzvKCXzCZWTUTginegeZ9Kt7gAawrkDYgF26UNWYs6RinWCjyJRmjzE5smG5AFAr2",
  "key15": "3jw7b7oiA87cnQdDtqAiv7W3PG1X7JLHgDUX5GuCgVwFNy9QndqqgXJZuEp2GZhEex3iDPcfaiFKWai5KP3SQsuQ",
  "key16": "2j1bPH6VP2i9p154DrK3GpxfTviXTqvPZE5Y8XEt7oUeXmbZKQw7CU6RL1AsjsL1yWZ9dUh7aLumGnMehAiNLnu2",
  "key17": "5wLmFLyZWzAC8dxQLguaGjfXPSU17knntK53YZfoQkR9Nf6pX6KStthrH8T3jAtqEnmXZpLjZK8ouvL9w14sFt7q",
  "key18": "YdAZUmxsh7Zg8R7VXTzfZsWEgWgPYKvfeYMjmjyKRa7AdkKFHraj41uNv966Q77p2MYi2u3QPkK3C3tY1Ju5Z9V",
  "key19": "Z8Vs1sLGhqo6UgvTcs5frJUrKX3rhFfKgs4b5UhCKFY76EVYt73d6fGn49fjSFsGeSAaTatZJbXProaDW66ySqS",
  "key20": "4A1YvjFaBuDGwy6VX2bGo9eMVB2xryNZ4dE8pDBydFJ77nqscBDKKD9vB9WadxhuyYBbqPETcjZYHE5Yoa33spej",
  "key21": "4tsKVZSH6y6RP63x9qoaLhveYWuksojoXWCxQRua6ZaKguWuH7nEA7EdApP8R4t3PvFV1hog9PoRbXRr1XvStt2x",
  "key22": "4zesgpCHeagj5ef3F88RpKBxzZnj81KR7JP4ioMe4ZCHUPQ5QHnJJMZ1ETCgkwmVjP2PSP771pZkBU6wJK2AckcY",
  "key23": "aX5bhxQeN4TPZxUxtwveSMkomLEpzvErfWaXDeJg48fZDpxakABceYVMdMV3uNjCGq3CFvYjYoYm4xZC5XWDbTV",
  "key24": "2kqMXgpHTHWEb4fbUuYKZYNRxFcvBUSc5FTX2kbmry35719ubc7gbQHJ4Gz5PeeWWpeaQjsm6JzxodNEr3hnjDL5",
  "key25": "4BniH7u4ejUAvf2fLJFQGf3aiaBZ6rWdHhLGoJgDK7n23Uz97eJvei2PEr33ESfbchppvSz8DNqxHotjgCaYtLRK",
  "key26": "4mh4ePToW5b86DNFrFeNwE3zyFhAJvCncNZW7iWwxfJJKvKG3sqMMQ22AMihquetW7zQsBJjDW4XvtscDrNHMRj1",
  "key27": "54km3nqKaEaBDaoAfAWEGrPuHZ3ZHBQx8G9pqnzgxW6pfU1bBhTdfb3qXs4oBcG6azWzeKRVuDcSTe5p7B1xxUxc",
  "key28": "4siNaWhyfAu1Yv6z7e3tNrrsJxJKRiDu8D7T1azwVEgtJPDRujfirZBrLxCrdTH5Bcrms1ohQ24va4oCJKCb9Kmb",
  "key29": "AcnqxLS6P1tbTzerEC7bQF22Nwxy8dThgANhTA2g51GMsoThxDrLpha2Tb1GYcCh5o3qSQAGkbjNLruT3f24Vrp",
  "key30": "DBHu7Y8UVWho8VKiLR8WkQwywCdGikREKJZLfSAxmFNeTUG4ttYJbR7Gxr7odksKA9T4ikaN9so9xdbUz757TKn",
  "key31": "nBwEnbJreFJ9dTTmDHkhxN1pwriiaw6fzz5ruPQ3dF4Xa7hcq1efuztAFfj7npee3RyP3pmbQcD9gp2HJhcqztk",
  "key32": "2hZ8EigwUEUFMv3yj9B6UodYPB9QJn4iPUHMZap4jK7sHjXouo9jtk8PhkLpFBK3HRJsTHarMfhpwbh9aiYmvfeV",
  "key33": "5Hi34mGuY6zTHtKjtgzRzgtKS5CsEEDH38yL3bQZdCnm6fJVfEfrfre2HGPcSmnERkNmcPyF6rr1WcbKfbQmXi62",
  "key34": "5Hwp9VBMgLxhUmGx2r9imEpnQRWxaZv7KNc4UMEr7rrjpBY3EXXJKhYKEX3vqek7sbjkTw6KfMwxjAemrXyDqRtT",
  "key35": "mBcaYWLFCsixfyp577E4mENFJaoBGjCegHEcNAULrACrMZF6RWRW9BLHhiX41cjNpZCT5cMrAecFZwW5ZKMH1Wi"
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
