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
    "4QRZGghwYToD1kTLpDVf6wYLr3v6DMHbNJAwsWXvmKQv1Lb64zoGvRZWvo9vBpy4BSMD4rxJfoDTD87jXg23dke2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RjJitN36pQxTLdJFZhzPJaixkTa8VDHWHfgHMAcKxb3WWgRTtAeFosgv8bLkWfcGsu7Ymwy43w8dDX8FN9pyp2Y",
  "key1": "FNHgrnU67UYLtKPRvGvXdbYQ5cj3N3XwUJABDvu4sLSRSuZqMNqpQTXE2K8ZviRcFg2Z49X8N5ya53L9nN78ws3",
  "key2": "2ciuQpDdxZj86NYXaYKY2Nmpx66ufV3tsfMwRTg5gsnU4jcDW5FuvqBVGy1rRWNJiTaZm7utE5aEe5caaexRHoaA",
  "key3": "RfG8hNJgYAieH8qHGXyQGYnv39X8tUAKQQwi35s8drPFKQnEsSkfGREdEb8vypZXjGJciNrYKAEYmfDynJpCiRd",
  "key4": "byJCZ9qeqzw2VX4uwoT3D8uKYoXeTqdPDJrVQxEkraopfZtUMTWjbiBM2s7zebDafvfYwcLzeuzig4UeTk3QERW",
  "key5": "3QpS6mFSxRRqNinaxCjGAqcdrj3QHB7Jf9T1WsjY7mqts4HjgDGL5WnGJ7ScNP1bJqpPQvdURsZsg59YYprrZt8L",
  "key6": "5H3LXSQJXuEMwMrxiwUXEwhcgQgtLXX1X4nFiP9AvLk8wQFCjhYhTEG9ebarJQQm8BnTNrBStVtjfLCfvibZBpa2",
  "key7": "3Xt27D7jCWG54WbkKwvBPo3Af6ZBUc7Yknhc94tvfeq6bkXvArbRqmhDsrFgA7kFpgxMG7ApkhRiwnRong3datsT",
  "key8": "2JEeowxSZbPGG1zubcF6cSSHXR369QTXsCwt16ikZGWdcnoKTdMz4tcoCDnei2XmKytgosicR57enc9wAe4hTejX",
  "key9": "3edWYpXoyhKPVLCZhbZKFjPQ87SjA6KV9W2g5m8xRwVziYdfLjfse3q2sWUY1CSHStaXbuzkfi8X6Yo42myVZ8LC",
  "key10": "34DuKuzgKH78xg3HhKt8Lz8tWAnb3dxKfCLLcCmMNqkhQbbruptLf9RGARMgifVrBgpNocATfyW94QrUNtX6abxA",
  "key11": "38rHu1HZJNeQaParquBLXYPPVoh88eg6Bz7habkj54X7S5YGriKuEKeXaLxu3rCFo6kcVf3jB22wXQUd8HTrQRwi",
  "key12": "3kH6gHeeVmiC96FknmLV86NnE12pqrTZT3Ni2H8Z28eRQ4KAHZxfsTmnKd9QTGzB9GmVrucAvDZdnpokYBuwEvSa",
  "key13": "5uFvhHnaZVSsRCZfjQiMRNdhhX2haQ1kwLKbt7nEgBkSasxuRWTW64PXVmTTYMrw1KeCTrdJeo6T49R7x73gKtz9",
  "key14": "53faUxXPQ6wwJzyXMbkK4gFfWqXHZRAQv2FjsWqn7j7a7CUK5ERJxjH4eujNyNapGSFByp9D9WHU5KD978hYUjED",
  "key15": "TQxPXbEMUsqFxmjHY1PtcDXzjYZpsZvN5LVLL65rtzP7GUUNc2jQ7N6Mr6afwUEM2bhBrdeawxJeWnZaFAA3fRZ",
  "key16": "5ibHMMc5K5MKLhQ1guAJCCuPZww1LzFLfSDAbaoUijzZJVGPB4CM3JwLBwwtMKs4h9u2HmVr36C6yJQRS4rNVAtG",
  "key17": "4MtvuYh3dX7APfQirYp4ybU6Gfg7KKP7EfVjJkHZRxikwYx16hJdLRnE9ztHW4rW2dPm59Qsiu3gXpwm1dkMPr1N",
  "key18": "5JjWrx7ZCNWJM3CW3Sxc8JRUwTLZn7vHtHEgWi6mArRobrXWV3v9mUoNDGrdQn8CB6oi3haMhSqTSUrmLW6WwKkS",
  "key19": "4YaWdfvRQEE8TcEqEzSJX9oVUBAAKgXxg2EbK7fbW1UBxtWGfX5qwHV6hH35AgFWjCjzUBqwgBNsVzMejSd67tqH",
  "key20": "62nLTCoRkV2tKtmYj2swFtX1iFqCycEiNJEp26gFCkf39bjGxLzpFspax7Jx8129RhuiFHLQBHm1aGdBnFe1n4Jg",
  "key21": "3yCFR4NGNBcXWMUScLu6YgJKZ1u9uoGCEnahYL6DULYK38zDbYHeerZRM82L1Z8EwnzZTgfucF7vZXpwvEJezWjV",
  "key22": "xpTL2wz3kspAoJFMuX4x8viAsjdD3jehajtBpNPG4tpMGLRc1Wqv1yGkphF5iWkKyCFkVwjUJqaUzwn1kxezRvr",
  "key23": "RtVTqBPNpaMS2PPYnPQBgGutPdwAHvnb4p3G8baZbw67FGf34weFtFBum3JXVUd3jMJ1hqpzuECAeQsu5guAVnB",
  "key24": "Y9ZLrwwXEEdSa6stiLjZNTxAwrA9QbdkrwsGGF7FJzAjyZrNLPaLiA7iYc1wuBcfH2AUf4WWkJFFm7vFvrTX3pv",
  "key25": "3BC6U4AmyV3BtFe1sUteQfg4XLJe2jtLgrxJuAA8aAjxyuYnHGqqNH1DEDex1Cb378PFbgnYL58WL9v7767nnuiP"
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
