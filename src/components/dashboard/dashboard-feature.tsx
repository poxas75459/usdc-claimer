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
    "NYk6pViCVY1vCxR1vMLwRRo1gQER53ZNxNQrBDAocvXsqBUV33bQ8RW96tSLCnGDLPrydNER6wtQhnMSYbfFGi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gc1auGeyKPWyuiCzEkHELWZjMnHfDNmzhQMUoDX8mDGHT5JWRjYw9s5uNruTVgzVdGXdEh6wJ6jDCzx6PhzS3K6",
  "key1": "maN3Bb9UekNp2vMpF8dkD4H1zWdJwkLUxNLd5qwq2rUd4aUw1B6BLThKGrRUUgxEwbc2Sw1NvsT9f1LvQSzReQG",
  "key2": "2V4fT3YdLWjXB23wFfLGYnFXRoJZjs3wciVjoCfe8PuGrtGy1f6cW2mCcP3jqxJbkvcEi5jjv1HCuUAiqNNRvWfq",
  "key3": "2mwTE3iYawNqSPW8mE2yt54caHsFHNTkE37rAoiAFNVqusyihhBzmHmWcDmWgnLQxaTAurb8W3fAy6pzezks1A2Y",
  "key4": "4gtpyK6jBJH4dbhyd9JwSjNqtgSjTAHZzsRjnUrTqVmvzbYsLPMeFYzYrtaYatz524WRLdrVWMuWULwgaVTuPipg",
  "key5": "47oNZh46tSeF8kDwCdSzRyW15rvDPyihs4jjG91FWUZ1Wnq5tAPzUBRRDWF6W5n6sdfp1kz4qxEmmXb6SUY9ZahP",
  "key6": "3Vk623knLD8HieAQNeKoSf2ohrd9328PfDwVTeEJAnvZLbzcuVHJ4BTUxL22uuD1Vu5w5nFQY27ZFkSvegqH3bVc",
  "key7": "3Ut7nrwvhRKUTbdyR7hFsFVC8rJMDZRPw8qjwubnBSgck9ufa69YiymccKidVrF7wiAh7E3EDQf78MdiegpnpKox",
  "key8": "6gUxKFtSGVZZnuQpkU5yb6rZLsH8N176vecCwViL6dk8Y8GdTBWUBvCsX3pyzmb1FPcWpG3GJwvrQJ2wrXf42w2",
  "key9": "4oCKPyB6carHq5vGCdPYj9VuKBNmyUB8RqsHfu5PD41M9eRqmeQaMB47PnhrXFS5uAfb8VyhfGT2hNXLVSAez5FN",
  "key10": "ow4adugWuawmFh2Fom7FqGoMgwxycEihgAeSRs2ZCibiXX6u6ZUcVrtXT6RmfGuH6x7uLCDJgxXjngTzMYo6ENE",
  "key11": "2KSqcxV4k7m4TmR5wGe5DFSrKkquPhqqAnXtBVuvbYMUsuBN9nDpU2mSZje2Ki45rhWehxMowfz8qnGmDMwaCB9B",
  "key12": "F8k4GGoHt8DWrn5hNzTZbwYwuyZedrEajcqiGwkF7UbGDzDfKXtVoDttWBdfw1imfRnXg8R9KRRKxXgykUnaSke",
  "key13": "2C2Sqwp7umWBbhBrKn7GteFU33UgY4GY6RkaCjJ9dSoyuN8yAakydn2CVcWUnJtekJeHuzEf8pocpdkXZdhPt4Ux",
  "key14": "4isFt1qZPb3M8LvNTFf1GnBWCyAk3rFYU9MYUhYZmgxm31FhRErEUX8PdRMp4bHJsdvoLQ3Ve32DmXrfk2updPoc",
  "key15": "5YAzUYCF2THgQob8iNTs7NfYw32KhfmnvANTzy7DdWdApJNyya6Xk1ExicF3Qsbn2Utd9nTD2W9dZwWBzk5LtUP1",
  "key16": "5KXEtXz8ENvce7K7MybtHT8L9NnwNZVLRcRjcpfAhonwGshmeGJCUS6HJG4Q9y7uQw1UUz39URZWyzn24vuzyEVo",
  "key17": "29mrK7GCwpjQjfPJkCb5wVpqYUYJHZrJfk3x9eppa3PFySDBsq5JxRw344kVj4VP6jyjfnUJZrbiG2FMkMHu7doc",
  "key18": "2dcT3LDMaqLjmBCCmpcc6emzBrdy8omUjE49e9Zr6gbroF2W9CD1YaG4CDXA936wZC9xQSovmXMgty8gD6KHsieQ",
  "key19": "4jrvbQUFNVhtHQDDxLKTNLuwfZgRPcUwDyFdCB6ygkcHCHQV7r9Xm6h8JKyffMt2R7rPYAUTSJrPVT4x27xz8tQs",
  "key20": "2e6GdfikBD74o1WXCcwxWZNjsrwAaDF1Bx4UdMkb3KRisJ2n7jkcDehGKR3Kadj89jrCeWvMmrx6cyTrBQofBXpc",
  "key21": "45UrqprTQ7M9zuT3AGB94Z4jw5L3LSxnaj6JPVoQqMnhiMchz68rM2H23ivG8S6izpPg4tiJ4CCRmgrVZhSzZ3U6",
  "key22": "XBiAFTiNYzQYfti7govo7hLgWZjaQjWgwCb3faSWJfFLyZi6q21kWewdgt8xAu3r1jZJ6oQn34665D5kUPrzux1",
  "key23": "66yAjSMdgDfKQXSvtc8TTh6PAQu3p9p8QfsvqFaY3XyXX1TiPLpxgbTUUhjqn3MQDLsiYBFDoxxJeR3pxVfaTNN7",
  "key24": "3brgUFqRVFG7haqx7tPpbkhZKDweFMWFeGPEV1EdHkAADtvbpFvYVTtUqAhhVDQLXPHFuHj3nqg2R8uNE97zRuZY",
  "key25": "TjhmaD34BQqNn8XinMiEp7ZGF138p1V4uWvURa1MfTRXLMAPgjDq6Xvy6wP8fXbeE3ufRLwsFnucNhPE8F4m7vA"
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
