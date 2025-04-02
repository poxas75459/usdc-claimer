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
    "5WBDTv6wi58AFDxMwpXybiLyNPosnK7DnHBf1K3rENX5VdnDpNptgfqDm81f5m1YLirkNCDSX8BhqPfkBDtomLVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mBYW4PQwoPgi5YUzESotQQ7H4sjDveRs6Ln1BQBfQSuPUFWi9qXAz5RewbGoQd32aAvDgQBzZFMb7MX88Guh16G",
  "key1": "5wdZh2VqCtADQt67o8F6GZbofXymYG5DsWEFouZDn7JVipe1HG6Yx6YqgAofwypWH5CTkojUcLEKcRw3e9qkG7d6",
  "key2": "3GxMPYY91qidoBwBUPPQWQP2YKKgb97AntNNhuoM6fJgUr1qoeHz6u7MgrepFw3qWu9cDqVxMutekCpWmdZu5339",
  "key3": "4qeGfpawMbk7aajek3gfzpLdFrEHuQNRZVbbtTsaGFL9RrYN8n4gdbiWwQB1Y9J2nMEbNnkepJa5s3F5xXccH4YM",
  "key4": "32bUja1XvUs7mwYtGfveUGkz48JVKWAwZJxEwvZzpZwehZWdRFkT271Js6inWRpx9vR9q7k51jXGvC8DiD5aDosd",
  "key5": "4kozjBY3Y2TZV5g7BSxFy9wKYMgw7TtZmMdEVbTZogHr5XDspwrtS2gEZmh1fahs2zdLLhfKd5qoTzhQMa6VVFiZ",
  "key6": "5QbkXuGbQF6NaBWbJNKeQr8cftj6zVjzTge96rUNV5uqFHn77VWCLXNjYZnKo8GUoVsPYHSBd2RESCszVxbS7yg1",
  "key7": "2y9Bomeisw3m8cBrSURQmkm9Xz7StroTPdADM4V1tAp6K9KHZ5YZt586k3bfPC1MVFXzmCuAPLnpabgtLCsba4xk",
  "key8": "5rr3NnngiqGbYox5Yu61sBMiPDBaAb5MpWBi9jp9LxsLSxKDoyYgswG8knfzaqUMJucAXxFHVK8o6BwDybUPCTR2",
  "key9": "5j3qM3nHaYynLyz7heFYtCEWrgFJNkh7xPmkUSYSY2nDw9EmKotndn8C2WUihffr2WqtADW7ktkCtpzxQF43JLxA",
  "key10": "ETssUAbZhqg2CaKbygABWzeoLPRciQz5egYofwj6zqjW6gQnLXfCvS11dp9au5SMqHDzxY6V5fAoHni56H2xMhK",
  "key11": "5ZS8rGY5iAjA9Kd5k1PpBv9wQhiWhdZWsYTUz7xRpznxwGJJ4zwV3FdjyiFjWkazA8F5FPRxjXxqfnoNdivrZ2Hm",
  "key12": "3SW48C8HGNVxSPvHtvnaHy1Lk1f2Y93JSAAzPYzARsPhgj68Dk56HKzxUuac32aHXFZRYcVcdtarfuYA5fgq2gsc",
  "key13": "31AHbgVeqdk6AVKcPmug6nZQ4ET4hbd2nzDmVx5QEvRXyFoRofmAWmuPaVwKjJ8ZqtpQ5TxvhDixNCB8nyyMjEee",
  "key14": "5z3rynMizSE9UEE5fb3mqWsGhd3s2NqePygrpDGT69KheoHoq3bDdgbv1EGhTuHXY4xJ7Dp2yX5cy3E42CQqir6c",
  "key15": "Vr7vJERnZrWA2bbeknPsoDwunfLJTvxfEuEqRVqcjh6MrHWi2KmjJoETpSaGF15hSDDCJLGkPYgAfszxSqLVBS7",
  "key16": "2zL3RaNWhWZuYVTmwi9wtqyaTo5utPbNkD7GxC4KFcsxRzHoW7R4d1uTh42iJenhuxBKJgXdRgbuLcMVH2YM1SNa",
  "key17": "4oJufpqiGowJCEt4WywitZbJQDKmauqZpkwEuyb5cHrm56F3K8L2KV8BfSY7psH7GPPYnPP3uC4Sg6jnTePJhgom",
  "key18": "3NUPtBspdKJ1NRqNEut5PyZwjUMQg2cYj542GmyWPMYyYsnrZgVTSoXmaj9FuTh1KhW4juDkkBjt4XaAWwqunSbz",
  "key19": "4YFguA1caAkUfuX1gBKGpD55WGju4dnVHQpznocPCCdLHQdTnHyAuLMs7yGq1u1Xz9FehygQ2MRJYwYhyvNUNbfe",
  "key20": "5wuggwiVPKTidqJwizzDixmgG1KWfn9ApzBXg35jbJEMAup4KomdEGNNF9m7BsBQbKDqooZyKyZt8q8EdqwwkJo8",
  "key21": "2dofy55goooq3rPL9RpQTS72h2rAUqmF4UxTrxiK7x1k31DwWYgkxmwnq5vVBcQMAnTYTvksetjHXxMQk6P9JS7B",
  "key22": "5X1p9CRYNDBeTCE73g48s6vKDGg2Kpw1rYvAf25PKqkYRFETSuA2kwdxmrimchRmKURFncprGFnLvrbq5fYkQ5Yk",
  "key23": "3LRJ18J1vkPKHP5YNoq4s6EnLeomaiJXcTfYKn2yZvLZHZL5EEFGD64duUCQg1XUvuGmGQF26XPoakdEAUqGVDeQ",
  "key24": "4XrsxgsXnyMUu4rsNcGnEYDKx6dDRNqXdmToaNQ6UWjnsiUMrz1rRtx11rfaYz4Vq3YbtZcJHvCbmWApi7k6qB2W"
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
