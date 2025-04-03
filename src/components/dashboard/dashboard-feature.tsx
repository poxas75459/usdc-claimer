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
    "6762BeXCEa3YzQBRUw1YyL3uXs6jThJwCMv9DPSvaQoZgCqu5RF4R1Du6JYxyPGJXhy8iAiR2FFEWWJtjvWDYV7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jDjWeyZPy2RuQvjajq73MVjuMk7ocViN9qU85pCJMC42tWmQ7MbmmRXpxY4ZcdVg5SQjALyz5qiAhmJXF84FvKK",
  "key1": "2jgXLYrfBgZPgbNnN5cC41RMKn7iyLmr9f57wcfSmX9uBJzBaXugMChNZ9GCHf5dRr9nJymsLQ1Y4Px2Muu7DHR5",
  "key2": "kk6y6Lk7aogWdpKJU4hmWk5mztSTThcz9xETJy6B49gCQoUg5jw5p3KTyUgsWGCS2ZssjWG8jJHjQDwXGUtQ2T1",
  "key3": "2RnxPFdVPXHEiTGGKzdGhgDz12CffQm3JX3un8eBwNGGH5eN9nNvWPc3xp5AZaEwEphMHzX9qhJ4C7jV5ddfC7oL",
  "key4": "mxtc9ksqcS6idMhDVWUDg6wjs5XQ7Y6qEyj5F8UdEjus3sP4ie2bT5miDuQXLNv43SQ6qp6yVdZeHHNLgYBfJJV",
  "key5": "55373JH2Fom694jMkaMNwoEMM42CP1gbnRq6TbmMrEKiZmwcq8mKzorj8MEdwWF672HzyqLiekdGAfBSyDgzJTuU",
  "key6": "4Zy6mTA3FcdMmCvy5YuoaUoaLgY7nqGXNjAM9eLa5jPaJqohZkJuwGaQkuQCXhJJCBLYeZxNmw8Be57TBtEUxeEQ",
  "key7": "49X5dSRZN2ANjFPY9uBQiJxXXcsgVbEbkFco8kjMF2qQQMprngB4DneDnWeNKKGz8a9Ca9R6KrbxMRq1RasQFbH",
  "key8": "26ecDcRPtmyn4dkeoZHSBWBr189id69GnmwnHHqF4wGPfuBYwqDVdsTjXmKjRcqn9s69i54TvCCbKmnx1gYRGgsi",
  "key9": "3FC8es3TfAfUxnJvHRzzWJEv5pmBgTgGd1RGoktMokoarP3CKzcRSxTSkVMiVa4yzByrL9WoStmqn7knx4DNZPt4",
  "key10": "3ErjvTps2c9nHyKkihJrjw3SiFyjUTxQui1i96d8KjRWUrVucFAc9neUyxQ3TESqQ8PNTAnfZTjZCny28ukBDFG6",
  "key11": "CjniDAJayEK7CURAk72ffWKUYijHaAHPWtvaECYqZTnxJiN37xs4YG65VknbKmNMtWfnPaaWZcVxtcKTwHtVmeM",
  "key12": "3KMZT6hXdfnUUCSFXLvssPsmDzoCqsrcZAiVoA1uemF3mgTom1LGYLwec87iwpdddP8QqB6ctBqXNqGaPPWhzjqv",
  "key13": "2b6DoSnzhsAu7ij9P1txkJxF7YR2po9z576JaTZ1UnLidVoLoekmN9eayVToyEmaUM3qfEhowtZuk1A1yrN9m93E",
  "key14": "MDh2Sa3McjTX3a5U3pZFDxGWrpq6BgmyftA9qa6uhA8CHvsnvRub8swCQM88jNnvvQ3MsJZC9qvVpU5HJy9Pxr1",
  "key15": "4ofqZWMNWmSwHRxbC6i4bB1DXp35e1ZDjrwcyA5YV7LhLyXAAcxQUaE5R2VALf8pGiVqQtR3mautDBTMUq4jKbEH",
  "key16": "51c6779P7MYv17oupj2GQSgNVrzVQxGPrnjTqzkJSeogJBs7vb2qbME43WHvatRPSdkCyWPzQz3K1z5GvwDqhmjA",
  "key17": "2JaiFbNggZBaJKKsbBJgaVSk88NfzaxkpjqJ8SsYt9LhavTvGjEc21eJXVyFTsGcJFi1mjV9exD8cVQVknfCZhWv",
  "key18": "5Ce8poKJ1pCfxpzgRvQqHoCgb4tm7JNg9AMSrhubtPSeFg46vBGK4xCV81BVjZtYvYDj4Cy4fT723KJaFYMzdgz6",
  "key19": "2djjAwenAQMwiFa7vcs42fM8EM6QbEhL8Pgfrxj9QHrQ3eNiVXixMYnUM9Fg9tSoKUz3JUYGwNGp2fjAqMj7hnoi",
  "key20": "BnczpQJpfbVZKn3KjConBXXhzyaHX6jne1xU1P8v7ywEEPNZYjCNYhKoUsQy7xr6d1JHU2EDsi8iZSs33dLjcGN",
  "key21": "4WzcWc7i8kdifvUKbLygiD22tRCxK2TasRCwvWyuukmLk1a6i48YGsg3AaPiDnaRD5UNg8xxXfhMg3gFeEMXj88a",
  "key22": "3duEEyi5d27m6cQ2oQwtcR5ECexJVLaHS55wfCeoAQMzwk4kW7c7m5hB94J99c8qEWK5WfrMQFH8jEdMYXvudCcT",
  "key23": "zsKZUAYMH93BqMuHfj76V69PNVzbjECZrQ7ZHTpb7vAqvbH3spQLTMSoFjX4LPtAknyt6nBAjX6uNYLSTXu3ZRL",
  "key24": "4RtLfa2bGngB27L7pUEUj8tLe5AmfGPYGv5LxXhM9bBLiVKLf8d2vZPiQGGzFhNXrAHDFi9ApmxRZA4a48qas2mE",
  "key25": "VrJ6WFAzww2hXjfTG4uxBwfMPKirrVbjMKZr26bhQ1aBfW5YpjNTFgDLTQ3kbPb5mYiJAR3PVCE3Y5RQvrZnVgu",
  "key26": "bx59YDVM8SHjAPucVp26tPzmtKEMzRhkgR3LKv7CS62UhkwDV4qs3SCCgMRaJjTJccTUmNEW2ucZ54guF4Af8yG",
  "key27": "Spn99c5C1XjduhrGFBgHb4S7NeHcadaRi1yqBKprJUBqoUTYyd1fYffLsrUysEpDnA4CNAo5cnWXcjmKX1cZR32",
  "key28": "5SyUNw4ZtzpSDYbYuyCmweuVLh9BWk13TWDWoQWXGdnxuEw6Wjg2h6VbdNCrgX44EUrGMWjuN2oPM8hFDQMqERcE",
  "key29": "3uA7MXgQTPa97YJhjtSNaR3j2CXULoJUP8wHrW3ZN5QeEdAFnKyHAvCgvn28dNxQYTgH4SqdG65sLVpjYVrpt2UE"
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
