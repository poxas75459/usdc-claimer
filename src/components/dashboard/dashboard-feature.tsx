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
    "633NW37rvczRs2f3R9M9opc3B1kHcrLCfKteUW1SrsH5vX3pQ4XS16aCCXUUvAwLwDQSjxbPZepmsQXrtbSR76WT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47VWv6zaEUT7PH7gRA8b54CdZs9aN5qu4du4d7hsdVhcLMfG4hAx9zGgGkfDWwKrkErQ3DUsyzg9mAwPQcFi6rZL",
  "key1": "3UbRKzbYdv435AYJGmLcZvZdFdUJLpgvdVDsU6Phcif9MUY7ffLvVn8dyMamHuEUzQvAAzvomks3Q7ss6JJxc1e3",
  "key2": "25deLHy5ZJiLxb2TTxjxWyzQCpRNocvCtppWZXhZbdwP6w8r6uxrDvYR7h2YRhBD7xCMLiLT3Xhb9uwnAxMGFC2B",
  "key3": "2Ao5tkgSEBDbGjAxoG8m9rN7uXFhKT2H9oUSfu1eza5vwRzsBjSNZhxGkJ1J8Cc7nS7hhj32q6Jiy3XmxaDUcbzb",
  "key4": "zuE8hHgBqWCeeDxMUU6aNXtho699RY3yBkBkk15ULVnigFQLg2daUkgwzvYvmmvb7EeRkQiyjjmf4N7deNQ1fjd",
  "key5": "41WnTJyEpoQFbfrbmN4rrNf4cGbNNZPdq3yud8RYXKHY2rNuXyRwDdyzsPqCWP8QuTGtAWgpdB9zZ3quSKsetY7W",
  "key6": "625Zk8gPPST6idvkny9bB11qpfS8287hfS3eRqcZUYxsbKB4QkzeCJhBWbw8nTGcra4bXHeDDhHznZYqfo3HWzxD",
  "key7": "5dTHENWfMmyjjCJGjPPRz8XxmYjr4Dntn5u3LJ2iSLRGCGETAB1uBn2GvQWHvbGPfMfFBsiFxUiwngDWKbCmaSq8",
  "key8": "5A8jV3Nk3torDH8TEasyaX1WzRErVS95W7wCo7dcBE9X4a4vvZtz2WCLq8CiHhjQWZrJDP6CjCLpVSs1vixrd8ds",
  "key9": "2nfyREpxLSEwMvUavQu12PjusLdPDMHdXBiHJ3REbziGNHtxeb1NstUWQwAGXNtaiYX9VNse8y362p5R9U7M2cmc",
  "key10": "2tmRj8cgqBZJshiHLprnEV8W5Ti3UaWr7F2pEyZDcoT2uyAti6NEoUNtHru14PfQ2zRKmZeZkHxgLn8Sd3JqXvri",
  "key11": "2E2hXeWpmYBD8z283rg2NiJauGT8aKNpuKeyjabFwFePwRYjP1xhz1KvzALSjT7K49KNGkyCwAdT27ckBdY5WoQL",
  "key12": "3LUtuVv7AWUcF4VgRhgTsWbn81i8ZkQUar9W9RnLFqQ7vy96i9Fx1U3WoSJYVPLqcAik2gB9Ap78Vu2AuSaDAf8T",
  "key13": "4rTZ8gupfF6UF7bceLR4gQ1ZLB3wVfN5BuFS6NzFksMus1h9FLmcaUG99inrdgomnv8Y5PjWUiBTBi6t52Lgstq2",
  "key14": "3ipnbP4DKNiVvyrbzi19M37SD4wxouP2HB6Q2PMFKwK3pHdLu5o2HFDXEgj37arq1Nm5P9uh4mwBBtdWqhZtr2mo",
  "key15": "5HVQgcUqS7rLkKfkVF2dhezMWmTKKsSEniWxMmynd7LWFZaVrkqEkLwNyf5tSkhchLdbLRWXcEoXhohWWhgGQP6a",
  "key16": "7f7CXAP9FD5yXkVydfvaMSuPs8Xz74nLwe4sSqSa83XwkJ9RNUKqRqmnmzCMZJZ3WgaGVj39kLvvQJn4ViSQEe7",
  "key17": "2L1rm9F8mF7VBouYqBzMWtY2QgPy6vCoS4VPf1sUswE46poDFvCRmpzEsZcSeyGapzhSH8c21VPtGGwqYo7Wvz9Z",
  "key18": "3dEkoaGp5iofU6hr5dYWuwcaZsTsn9pYamZR5qQawkuJUQCcoXVoDmgCkEKc8DGJa1kaMCJQkF27m2PSn2HdCnkG",
  "key19": "5Ukzew8vy8aN8Dah5AwtaJqAxgXePkurzB9P1R6p3vYe2RxYJ4rBcy2dfBiYqkvJJ7HcD3hH6YG7Vg1GtYitq3LK",
  "key20": "4BSbWUHz4gBSiCQ3SukEBHP2LawqrcQkBSiTxq6G3q8cDh5r6dZ7twZ58HfufzHaRyDCj6SkJ38c1hCgMRWfcywf",
  "key21": "35pNKdRy2fg2sJmM4aMczxuB93EbMwBfHUAedQtbzb6mzyr6gn15nTsXyZNgjEedZGCLCTneYNsYnYx9miqgqZu8",
  "key22": "3rXAT7ivbDAFaWmhmWbQTodm3qE6NDXGzUkunVG91k3Y5KqHLZcrcoumokRtCosRnor1NJgnCpXUtiDceN2wkBAc",
  "key23": "2wZUxrCrbRaqajoNTV1M35ZpG6vPnMN1gMBm9TQq1Mf9RqRrxREXdQpmdcWQPuxWtyKuxWZ8eL5EoZiQ6RUK2C3e",
  "key24": "58ndWwGKrtU3aHPr8rfTHQCSxosGZd5jmufWKycULwohBNQ3CXMmmkwnjPEBhFZwbCq4jihWqwfd452FYeza7MfX",
  "key25": "4xWsKhFLY41kypG92pH3QZRnq49mpRQ9n3A2uAUh2N5pnKrSudKNpq9W6gCZwuTVvX6MHV4BGgUKayXSivMyWwwY",
  "key26": "57daGAABpS2D5E6CgDJjNNEMKegXpEGJ2JBDCeqRdBNcNHwnQSNTui5fAsjw186XTTQDLuwJcR5jwsaSEbjZ3FLW",
  "key27": "3xfZLy8qiax2kHoWTXfTconstjd54X4oXfCAkXbsX5wr1JWQT5Wh9Z6VA2YoU5SSniMJ72WRSLf4p744WYGi4f7A",
  "key28": "3RUJeLnj7MxpPoAFixXmnNNzCKe9G2PQovr1MrvXTtNq1oq7s6kQ9qP73qjZCKqhHrBwPowoznfD9h3QeGqpujnh",
  "key29": "5qDqjvZZSPphbVWeepmYBghn6qAiosW1xeyktsMNYdxnbrusPSz34E8oMsnwyGX4j2uxwPQ8t23y9xbBXqsnkBQY",
  "key30": "ZCUxuALXyZyBQUQr2ZYEFUCL3CPM5v5xxzFnMLzgULagWqnXP6JKvedu74MHyboCdCbDzNzSKwbp72QmXc1FQPr",
  "key31": "5DMRHfS6rP1qZPgaWHyWVY5H63CpCiSZxKpnMSAYXqGrYb6ut8GGm1AchoBtdR32HeXwJyjwWd8J3M34H7FvffdQ",
  "key32": "VSFf2sdiyxU4ydGXxEAL6GpKNXeHSp3YWF7Ky1yuZz3yjZ1cz3F2XaVgqQHH16Y4VeYZpFgwENegaGTttZAwYxT",
  "key33": "2ycEhii3r81BdQ1DYgSjSvJf4ZBD5Kask9cRtv46s5aYFbfK7GvkA795XaZzDXmYbu5a1qXPRkY9EU6rrZtwZxuf",
  "key34": "3waRk7mtFQZT3Cjjba4YiGn4n5yJXhv6WMqwwDU5mdpWjqPsgUckFUYs5FeHwBZc2HHLuT4PNvF4cGoscfitFE3p",
  "key35": "4UvnxFf6mypiqdQ6SycxpXdEP71fyt3T7r1CYFpNW4ZK3D4J9icCU8hJ5VFRJ3wtrJXUc1nYA28zx5txqSrZmQAA",
  "key36": "4WyJH7vXimLe4JNsZBUkct7kuwwD8Y3bhy6rAtfXnyDafqQzt5yZLcgVv9EyiW29XesXornMmPzaS3bGvgA8dAgn",
  "key37": "Af7Num2a4yajkGQEvvqu3s5KQjqAr2H5XzZf6j8k6zwXeoAVGuDCY7WJtBcECqbiiWV4hG1UVcbgL7VBy2sAa88",
  "key38": "2Jhmg5aCNkhH3yQASL26kNf2bqTmAZ7YJsXNPw32Cd4JJEDqgR4RjQdXXiDMWUhgbeRpj3SsrCrfnrsipbZMVSk2",
  "key39": "35RrNcw1PpAwXTKALVm1imiAP2YDWvhYoNnvEjLi3rLC1k9TDjZQzzygwxNqGN1jmjB55vj8oU9P2BKu6YW3u5aB",
  "key40": "3Z95bQACN3acQrxwRHnZbzqb5WEdrnBQtZKWpVysNiLgaDPQD4qjRgUVR6APpYbM2kJjJCnWc6AzXMQaznKzp3uv",
  "key41": "4G2qqDuoX13FCDN4vvhAe1AN2sVTHrSbazNXyu7xVMCrokxBeEUcSBG9imS8QSTYJCfEz4YxAQyrYPbW5o8ecaKy",
  "key42": "4S3pdrjn6CA9XM63iFtz7Zf5UERpoqYtCPbxDUEYAQX384AiGb1e1GkHkYbjKZrL1gAd45qZaCgs3DoFG8icfLjT",
  "key43": "48kLanxW65PmNfSPRzvkTC9yHqqJKBWfCYvkd8MuCTpf1dmVsUy2GrcYQQwd8W6insFL2fvqKrK6cJA5Mwr3y3bv",
  "key44": "5eq4WoW55hJF6Dh59FKUpKAV5A58JUXvMN5qAJsY8XCcPVt5NV2mLEVukoyE4srPR1ytQAFBebSfJ8cZnsdAgaqo",
  "key45": "5khNsbSUfUmwp5sGMNBMvpthiRUqZrG9cjD7mUJSPR3PeKCimKgjAQNKeAyiN5KiB4zkuEe1ejyvezp47LUuUP9P"
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
