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
    "MUBewxha2DhHaroY8d7ZrfJHiuTjxPtfM9KAtXnMGTuaN7qaGrxwWwoQ7nPkFoe6PTs9kYR9VnncuFbjgT49Qox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "13Mz2S8ukx9HeMAx5sZvZ2pAvLzAsKeEgmQJip8YophNnhkAsuVc73LBNYMeoTwZ68mJTkW6nqHQ1SZ8zXkfi5i",
  "key1": "YgUG738mzp9dexKQs6r8JWytkhpfWhKfUDjFScJCf2KVdnxcyVQjbJ66UFER4UPMvh5qW39pD1p6U9SBgNYmB5k",
  "key2": "38VLDgrERC1eDRszHMWqQyus59kaKyymaQ6eCNV1i9uUevWRGx5phrj8jsUd2pbU9oUbhqo8YPcrnHSPWqBmgswQ",
  "key3": "3xX6DgVRndo9mnyaBfrwtFz3pQVRCUikKP9kmYgSZQ5hDYvdF5PkQqZKD4hr1cT9yGk1Es1aV8fZ2LEYGEXcpd7H",
  "key4": "4qSBzGLjmLEFT7m2pNXFxcXjC3B9o3W3UfCeskjEGjnRTX1McbhB9CN9hwbdcgMiyCRAWkCfTq9BFLoi8LHt3BU8",
  "key5": "5D3DG56nwiVtXAtHanLMBNodtCgfsoUYEyngz4WuD4W833yyUeNFHxzM9iD54Q8xeo65ythqQDdcHnCTsa1ZDoaU",
  "key6": "3kBLmrDvDjQvjogEG5hxKoLnW5f1qsjvGsEJreKffGyMrKA73oZHCeJfYDUbPTsvJneTUm9kqssHRApDipd4dnQp",
  "key7": "439gPkr5g7WSSnoq2yf7xyc7gLrG8b3Lsfprn2aLVt4wqhLH1p8BcY2UDRBme2E7AjxdxeZ8TdhYJYYaq36AKoNe",
  "key8": "3bYH9KYkwGqFU3UvVtnT3paJE3NyVXiFSkZMPAcheYU1Pa1qJnhoZASHX76SJXc31itYzMu1t538Dane7Z9SxLzw",
  "key9": "m6pefmasDscCt53xH9A2n7bFU7sWM2u8h9SYLrR3weBWzAEpRu3Yb8ivSqBVJkuX9A6hxFTLfbqs3GU48HxrofL",
  "key10": "3drpvUMAJjiRuJdzbAAP4dSLD7E2Vh8tpowBH8t72tTTwuwTNyPoqoUnW1qcFCw7bqu52jFJLNuTerVLoPe32z4q",
  "key11": "2Hp1f4YdPeqPti7Wzpy4KowCFT2pPuLpYQvXfECLndSzGq1QsLV1LNtjtyDABCKfYD7EraGF5NRytyeQhtT9yuEp",
  "key12": "3ZZi6agan1q28dNMx4zFx7qyyQYZiFhbj7YZpLQy4nVQ5VDjcay7Eh2SrokFmrWoiJYZBShuUKoJ7AGtrx8aJQee",
  "key13": "3kqFfkWCxMUHtzwnUaxRaTsvXEG3zvUVAB1tJgXMtuDN6DBjmdHxMHJiWEQktpsmp5hv9WmDA8DvvHpBsZFeVoPa",
  "key14": "4QEVskvm1vte3yXXPXdLNgfqGmm4tQerAGauiZ8Duz262CQKVx9YefLwTzz3ZbtJwPUZuNL7sBgXcjYop1zhH4dH",
  "key15": "UYJYMZPZrkGaGhdDEbN1p7RdGB7Sf7mUp1BrVtAs6c61gDQnWntDwgwopW3z48U9Zhwec3XxwTfVZRg6U93ZQJt",
  "key16": "67QqPtvwrdZukHVXT2c1zEU776MQEjwuT5s3HL5wMAWSgcYdqbqmNkwfnwjpq3YUJFHLTwB1d6Uem6r1Ms4NfFmm",
  "key17": "36QcRJH6p8RaxVf4BHR1C2TrpZirzWJKM3M2LEx7TtVA9gASDeqYxu6zGvfeAeNaRGuAKA7Rzpkz6bJ7623XXBLF",
  "key18": "4AqFepSxwuYxwSNwiAZNxzPo7PNsTLG48xheDqEE1jfkuuVHAmR59wEzNE7L82mGgkNDq1kV5bnzavbwyRfna3Cy",
  "key19": "38PNwEhKT5WV9kpFBqm79TBKHGFhgXRcrjmhFUdvAxKb7c9nR3koKT3m97r2fvDEZNZqqLCeZRfZrczzGyP6W7N7",
  "key20": "msNjQU9pURzgrGdCBzctCxEygcd3wkfCqqn9xYdqC9QFQMu9md1Ta7qRcSihKT5xydQ7DN4qstj1i1H9KoW48Hp",
  "key21": "3xygur5dCyg3RBYUeahtVhZcMQawtc6r3FCckAuaKhJ3TBBTQXpX5J4iKDg1t2u51ANMtNyYMqBUs8MtzSub98xe",
  "key22": "4y2QcF246jgbmxnbh8ARhtaASJRHTGhRCWLC4fDAAuyGMUUMLmayT8xp1XsFxvfUKJcwAYJ1XzneDTagzx9sMKpD",
  "key23": "yaLKaiamw6Yc5pKtErPuS6HL5ZNKX4XLnv8JV3kAswpuQFu4HZAVd3V1BuusAWqVyEZDv2hZSic41sdA1994J26",
  "key24": "2sH4WTX4Qzn5ZGTqBngMqiYyuUXMKBrJdFbCvLzTDeRDJRd1p7pRKx1jZjatKcka7VX2ATqwWbd1kNARWCwVJxBT"
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
