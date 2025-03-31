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
    "sjJWDU2jdHWcFvazxxENGNY5oVDd6Z7LKesmCn3yXmUawwKvECWZFm4sibuacu1QVBDp1Z5fjzZWjhaj1RDEjw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Aw9KUn7AEb2SbeygVRvRq5FJJpPymyztqHxzhsg1txHSq8AQp6WaWe6jQuy7FsxgXVjU2shD94DXjBKZpFi3X2r",
  "key1": "4GkkA1o65uWiauWfKkKdYhLdrwHZEzmMEap1TFKSbu7iPTAH27PrJ3odFYWkmjPG4G58FzCUnswCgvb9Rb9UkVjE",
  "key2": "6udzkop65J3uXdwApQ2jV2aRiiegxXy2eT3cCKqXsdDmB3ZT1AiqVhNPBsRvc35XQ4WajYPgMTryjTJDoLXpPFo",
  "key3": "5aKjTbEB6snZeRqCWkNQKKb3AH9xqbRTBDCPpcWqtUzEjSGjYEPPtdVWdrubhio88cuYJbFS5kknkWsV3vaHRSGT",
  "key4": "Sd8qDgVaNT2qqRBFk4nLkx57xyMe3RH4TUG24rTFuWkRRcXZXDx8GYPBxWQNGHUhfSomMSAhayv5SSuz8ByowQQ",
  "key5": "2maPWajPqAh7opBwGaDKKhygXqwHxRwaEPyPaqrseUMqgVmMrZZjhR4GSqUDVRbXZCidTvZjbPBmgw5NxLBNb9d5",
  "key6": "22k1WNrAfm3riCfDssrrt13HCSD6zYQnC3dGPmb8e9ZTNPtMwNc1CoGNm51vMNp2sDu9z1JBDuW94S46YT66grRg",
  "key7": "2ETmUzN5i163J9z96ysSascu9HT57XgvkRFSGy2oLDrEXCHYCn9jVJjucg9Aw56HdagvHhosQLmXjvQmyYjnXLX6",
  "key8": "2SkcgWSnuniEQnmgi7sjr3NkfFYHHeHuNegaZ96vf7zSDkKPYs5WPKFMkprmiAuFgvNT4FMtm1vdr6atWv8zVGsq",
  "key9": "3Z8CbNEKDm4NRg6eCo7JRiQdjGgFutk6NxMQeQww4hDfwrjsPto4QmjmnrPmukBsPvNkHrgBNHQZWj3TjHwFZjHd",
  "key10": "pVdn9Mr3XwWbRXERmz43RfbSzWR9sHTCWQBnS6ikndj7JZjXTLnjjiV72VpA2uLeaTsRiGo5KydVNjmoTXLPfbd",
  "key11": "Los6cVSW1YdDquGy5CNZPvS7KsQ8B8kMtUjZDcVy8DfTtKd8yvYmpz2bYEe9cCJo5WV9JdbDDbCZsr1RyXhWUn3",
  "key12": "4bHB2PAAxW8ELU6TWp8fmjEvJaaD5KxXSEWxk9CWBB2rWZY3NAxXinrbm8tYaLp6D65J53pMsv4XzDwuYAwB74DX",
  "key13": "5rz1MrrqrbuuRieoRg9xuDijFekEixRVmF5LxKd54yLvFfxqGmvyojGwFQLU2cb96h2GYNLuqWQXzMByR1KCMX8E",
  "key14": "3DtYqyYCfAFjGJa2NUXzvFgFHyRmEBpJ9WAEYFX7tcktALn28KycxwhPVewvipncnewymWeqmsMiCgBps8TzUCWC",
  "key15": "DFaQm8ivEEy33i4X4oqhr9UuS2S5NRPNRPrsqooW2UGo7aQnLJJs77qGGyXDtUYfeUHu33ZmSJLbLqAYhpNqyZ9",
  "key16": "Tk8pYAULhYMWBh95ks7hi2DJibXjvDkYXiaAsraYaUXJ4YUFKw1Cai5121xaUJJEA8EBBS1LoKp9wDML4KeMg4B",
  "key17": "3QwodEpXrUqs12jh4fLL7hvYJUYHr8NoS9mEvhtjSaPV6Niozrxy19avXnPVS635GjzKX52gBswbYaEdnNHJP4MQ",
  "key18": "ojzxtdy2sSBjMM7vydB9gqH4xrNamEewikMvytfTj63WBX3j2AUw4rHcxDJRY43JaJiySUS2keuWBrvZkvxJCKY",
  "key19": "45ZfFC4ouysqPJmrkCyM9uUgo1XmvUVrCGG9A3Gbfg2hK73Tj9DMyNEAjaTLahpzduCe1hLed5nrUyVPyJq11Gh6",
  "key20": "2ie1LSRyWntJJiJHuKDuh1JVnsyszmHvLriHB22iTvdXF8BtPb5btYUW9dzjwJQR7sh3v6Ai3JKXkeHcmmk76QQ4",
  "key21": "q7Mm18ThrJXj2z1Ru6z13WNbAwVMCbxENUFyy9gUQpFog6Wac8C4f661BQWmmfKqXAgcDTtywTwsAZXLKEU8sDc",
  "key22": "5qgxiL3AeCf7RGgsJ2LZsXQeU5NmiDw38fcCQRWXvHxUYG3nFT5bjfAtuGak6dwCa4kAYh3wMEevqzYNNSFQiaxF",
  "key23": "2ugrUpt1PXuCi1XofvrgMzVWuQQ6mjMYkS9D4if5qTmq1cB7EwRro1uUmfJQ8s256PXe4SiNK2bxJZSXJKRuot62",
  "key24": "3ENV3hdViPQN6hJcYoXnZDMKSLZTd6NdoaxrWsuMWAQWAtwWoDbhZhpfHk9gLRUWyEJwCtxjnVEZ3LbVxe68GGmy",
  "key25": "5Uqmyag18ekFFbn1AwsTq12SUWxCcd2VrZ3UXPNqfzPc758MF4LP1VaryQtkjccEB8nkyJTQ6sLS4RPVa2W84t2S",
  "key26": "98BLiNJyDgepGL4E49MHQBrVMsHKSfAUUX2LfGkKhX5trACb2zQunWiCGj9tJtN7yegxxsebQXLrAGQKHrNz8CY",
  "key27": "2eTiGxjZN8ADURqRS6GLn5PX5YzCGbL9u1ys7H8gNqYmUXsEXvibF67Q7JvaaB1b4Q2WK6iBocsmXgq2PgKPHhkU"
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
