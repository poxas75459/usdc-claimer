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
    "2KXM5HkYz2VkZVKDpv29j4zVhpzvvF8pRLSUDpfNyUFMtZYLgsh8RQH28oPCDrDb9FarHLxKtp3kv372qF8viuF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gWmJjVaMm1Vgz8G5gg5oQ9mkZXpA6k1oRWihXarRn6W6i8zA244GTMJWdorPzqEARSW8ncFJm6qYSC1EERPKQWF",
  "key1": "5Spe33QYN3c334rTvoDdfYbjmmE14ry48WaQ2FePzRx5xpmEcJivu9AukSnsEGUr38JW7UxTgFm7vu6qwSJkYADQ",
  "key2": "DqnqXTZGijzpLX8dY1LQueXaLy4dppL9M5sRtu9HW4BRYLvDWh7YaBVWzAwKLniKA5CERQmAGotVaHc5xfNKmhZ",
  "key3": "5fxVhkfzxuz8s6WHZh7sB6DtY5VvxvTthn74cDDAdUWSec6x4hs5JgPCJjhWaWUvAQmhCcJCkmayJpWC7rRN8Ffn",
  "key4": "39w1UZRxy7spVHv26ru7FmPh2rwyEcWMWUCT42CXnrEzXb9iU73DwLD4PU4wfa9XFkUeoGZSaa7R77Hqq7QQ2jcM",
  "key5": "3reYni7umwkg7ZkzRHHGPUXKsNB7TKGkRauBps8vmx8152QhRhzmbmjek5R773rGNDSSJwpC5KW7cgMGih5qaQwG",
  "key6": "5ii3CTgkpJph6yEK8inJRqsmAf3M9E29hx8paxETmCB9zdSoqQ1prendknydhNRbp84j1XykUydWqGEePVAXeLWb",
  "key7": "52eY55wSPEqd3oezR1cPemN4KzY7HNmqKhqeQAq4iAixNYHa488NYgeFHYKvap8xGXkpUYRjSFbYTdiqxrEJ1Lyb",
  "key8": "5KyrN1QpjhLTa74pKyevgrEPY8WpBXMcmUUM11MVnnuM4SF3SgwG6DnVU55CbkkydxVt81otCp6TMR6qyfrHur7t",
  "key9": "3D5Ku942UTqU2MSsTsvZYxh4e7zceaEmfzxB6r2bsHkg1P926t12dVEWKDJiCtuPR3hpYUgpwo14beg7wBRowyQZ",
  "key10": "e2j7B3PNPRZTW9f2jE9z85HKhz89d3FAbEZFRUyHjEUBZau7uonSqzyEutse5rEo8LGgqE81q9SXoMWWR2Ftcep",
  "key11": "mC6kPYYXyApBfiQPd6DYPGGe9uuuPKwAiAfwuyTAFthFGat3ahHL2StDyeT18rR2xjcaNznfDS7zfQSz8SzjPqn",
  "key12": "BRMuJDENUurGF3duvXC3HzrPVoqXucRed5dQ9nDek3XwSdX7DTLDdXRTeALNNBuGCSMb231EP9LYJaVqjjEqpCJ",
  "key13": "iy6sxdNrPwmtWwwt4CRvDgY3JsB26HqWkrbzRszEyxgbXa1diwQthk6oL3GLgmTQFLuxbPL8jYomnJg31oFvNdL",
  "key14": "5wP7Tbj5iyr6qXx2czDoLT4pVoThJFzVkWmjj6aMsQWLJ4cSyXkcqSrttWvHbwBZMRDsn21MW2xVA72ANXtPSV8m",
  "key15": "smFBRjAmfj4cMb7wH8JHd9CFUYahj3Pd3ar7D5U29xBHwnL5XrK8gzAwkFRnLjm1fxeM8c4aF6GEGc1fbg33mpd",
  "key16": "4tFJxaT3zAwab8hrmRKprynegBKW6E6fSBdx5TeFHjc777aQXxBWgRTGvjezyaDzZEHSsrr3qJ87HtQTeGGLBfLW",
  "key17": "3V2bw9bGxKw13yN5KE26GiZhJvAUaVrhDqRMoDQg1iHsuCAR3U81xYvvkkjGJk4Lz56QuSWpLthL5yDTyNYCMDJq",
  "key18": "2ntgeJGTMmdnQEZzVTPjtujeRGimgaUvoAksmSWwyq8JsFtxFBFWyy7Zywx4LG6t6wwCqcdPxzZjphLwGCU5iaYX",
  "key19": "3rn5fGB4xiZrK8AZg9V4eumfC7wcmNpAtq4RgSuGnRAecsPLmW6yu2xqntkUmqUhACNawjzd9HiNYiA1MGP52MDH",
  "key20": "bcwY1C13ipZnXSu2xpu2yongddRW1M4kEXxBXfjySd3LgTzootsumQF9EopcfYfWbC5a5WUPc4dvJxoK3m7dfrW",
  "key21": "3RXgtpJSMBdoER9u6uWdN9xZoYMyJsb3daZmFXcEYRhJPYXPMTxfWgwdHbM6MBvXvCCQCHrLr5UtCrvGMkcz6r2S",
  "key22": "33GU9Fq4V3kdYsgB8LKLvqeNdmMAAFZuugkaFpeG5w77CT52VpYzUyqaqsBYiv2aK7jbyiNGm2zPhc3d9J4TpGXC",
  "key23": "v5yza4W5yWdUEPhVx7QCJz73H5MAi3Nc6sqbSxR5jwfR1GETgJakGW97wU47XGMMGXP6ovD8hWQKtM5shaqdES9",
  "key24": "5pPhEi6rhF7dDFnPQ8Gd8bT9QGxbNAc4WyMKgdADupJeTS2gQDobMbiAP951NDhA7Fdzs3mHvdVQpAYvpibB8dmC",
  "key25": "g5HRtBaaovuMHQfiK7LNdbqhEyAp4Y9jWR16BG49HqwGd78BKyPpPRw57dcweGarBBMQzZxD6WoD3wWmYLwqvaA",
  "key26": "5NuehHHbS6ZAHxdyjTSGHbmM7FcyyxQTkoint7rMGkieMueffeH5ui8v6ykCYZLv44woXmobm332w8K5nXwDW6v9",
  "key27": "2hUcj3jjEpgUJkbbfcJFpkGi3sfLpZEtJ3FGzFZdfbguZ99oRgCgnjraNHj5DQH7yduh2wAfm6uHnAJZ68jFfxbw",
  "key28": "2NyopuwKJBGAZirA9dLwU7c6j9d8iJRgb6vCcxgBZVvNeNTHKwR957XeSQ7cgQg9cqMuZwgXNw7CWHboHqtDGU3M",
  "key29": "23ydrMhzWDbGRXLbtLjWMhi7zcS4snHXMeqQDpc5okK9yu3Mznb6RSFT866BEi9ZkN7mFAVu7LyUZt7r84ZjRSjF",
  "key30": "2VFVVKMVy3sQeuwVWNZeYH9yQ6dtpsuJT3p6sYxHH7HxVUu939pByWbZQrvgfdMFPB9rgcPbPw1QUqvvDpZMJHJe",
  "key31": "dnY2vouKxD4e7NfC1rKScrP5nen8nW8my2oNpzxK5nMiCtst7H3zopt8Lib1rCUfY3HUVaXFWCsVMx2HQDzsVBZ"
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
