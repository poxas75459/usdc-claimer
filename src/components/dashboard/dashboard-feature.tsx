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
    "vM4yhag2zp3wHDEtSyE5YnvXVuKfwbr8cyD6ZrpgT1wmQ1L8z3THaFFKYnrepWri7Fq3VdErFnfRdB71RkazNnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yfDSdtmJzuoZ3NRnwVZJvigBpnsWzNMif3f9L47vfjDq6Hmxyrku4MENo3ByRdvQwXLwptTWzgbEoA3QgVWRVUE",
  "key1": "4bmaJ8LQaKHJJ7eNTbjZ4bKoUERUMWb9SkvBUggCBKZdfrjh92iUnfuzpfAcWpiLhfa2ox4SBYdt5rbsSYLrzyBH",
  "key2": "gaFcvgr6RGQmFpLKtYGqC13ANV6kH9oaZHupXFXHhyee72wR9Uyd9jaHS7USjGtDbqZ8FebDWw16Hev1nksxwAN",
  "key3": "4BkLqYK3jvBGQ42A2Jh6XiiDNYrfKameGcLKMnhqB3eSVPGFbLWXAosuSYxJk4VCrr3zU7XKktWuMVZznRqHga5p",
  "key4": "2YQPvJZ7YaYEjJVhrMEXb7Q3KgmsAVR2TyUmUgJJMk3SNW6sZ1tZgfyJ9s1JwLpfLStGSbqYQAoToy9G424x7DFn",
  "key5": "3R8evkwPy7Gm9RHuBi69JdNQAgJE3hepKi4P16LsYoSLwiPuVTXFm6xQdZxGJVjVpCpHmGVnM2SWJzT7Bmq5XK8y",
  "key6": "2hrE8LwsQmZNmrKNsTGzVECZjt4eazSbFug9Mb7direh5m4iXqSMm9UmMssz6HGiPEYoa9FHXioTdY234efabT4e",
  "key7": "4V3E8aBvSSFsBEeLzJEFUvoqHjUm4ybj9919DPkJCJJLQcBfWkTsqyi9zc1bMCauTv1f4c3W8aTuspyHoy5iyFkd",
  "key8": "4bu5serZ2y8a7RDyRNzuvRXUCYif48gWJnXx3BZm29ZrYfmtKo2rnRSZ2okkJMU3zmVwoDHBPVdvZvw38e74dDGR",
  "key9": "2bDMEhYkzzizSfnCXVEpbhXjQ5TmVcX6eXyNKJBPgSaypJgMrixVDjhrZFPvUzoBF8N76Ctbd8dHhYPdGzaDi2Vf",
  "key10": "5oA6XsreZmynPtLL3dSg9VfEuJy7PcM937hbJsFozAfCF9CXrfmedZ2R7LhAYELYAc9bqEDcW5rCAkwpqoXuHwRe",
  "key11": "3EtSnwBbE849fvTFmwvZJLJ4RyPXAYkYRo4641Ntnv6kTya74snes6AHiNaQqxW4DobZFAQQdhFViWvBHU87rDXM",
  "key12": "3aoNgz1s98nBrrXTG4CHiH7FtvMpdDEwNrYKPUHSBhaPVbxUsKFUpjBeCh47WPfN9jRcWv4Vuc3JWsb5JzYuzeTM",
  "key13": "2A9W4zaAt7t3KuJz3PbsyLYqeBfCQHzAGt9PE13h256UAScohPpdhS5Ux1NxpwjQn5mzJmSD7BEu2LN213ecMfPz",
  "key14": "MrUj3mEogC6d1CX3UCWJJySEfc3DWCNHJLnsh9LumqvKK1eXqd3VEfCM1JEQR1eUYCiPYFuAsPHDDgP58wm8AGa",
  "key15": "kcGyhsuuTgWZ7UoVa2UQvQb6WLcLFbbgjvPxYYyvQna7gkokxdX62MwbfhrAgYiDtfrsVzUfQmHJPZXxha6oUg2",
  "key16": "3T7WRR28g984NWQNv6UBis1weUBrHjmqKbmbM8AXuZqtiug81BR3qnJWnGUZT1iGh4E4dyYzyfvVsCiDt4UwAkTx",
  "key17": "4EWEwznLjzdc2gayLVnDUS2DQHGfkYo1maj3s6H5gbSY7MquRF8zsPLxSDCveYA6jnUiGg2WUUMi8R7PmHZ4mswv",
  "key18": "4tdpLfogJzajaCjUkWYFG7KG27wuddkD5CW7YwhEa8ALDKv1X196SZ9TSCJkz1rjv2ZijAsuPmgirnbDnLEPgEsL",
  "key19": "ckxPojfzPZGysLTEWvZYcoTK2E2q3BnUTw9j5WdWVZE5urJdbotFAshUwHRxhN4niV3jMDq7VDWEJvcC55gNScH",
  "key20": "44KqABLAZZhdJxoagkQqkvVVHGm2Ej4WqaWiBaaEpCwNBQJ4Q7SmzpWhLesra13br9VHeZe5wAoosRZiUQwcJbsW",
  "key21": "5q5nAWTPnTRyfdZzyFUHw1KeYW9zvQ3GFUis1VSarraEmmmAQbjwBMRKLK5my3EKXBfgvkYJG35kWxRRsME1bN1i",
  "key22": "5ouaKyGCXfD7cgXGpDHdix8EVsAn3byn6FF9j62bY9q7NHoUaXP1SYHR9NyGVddjF2ZsoVHBfZ28bjGWjnxamKyn",
  "key23": "fGMKDnYVHc8msuibu7PzSprvHy8931i1zXYJxyEY3hYDy5vcuiUwTHjsd2ivRHuBFfMqL8J756jGQ2Xmr4FeeYV",
  "key24": "3yUaVVUFfk8QUjYiFvdE2yoCnV1vb7dcmCowZ7n9LkDpEeMWAtN76c8qSXjsAfpn48u9gYHbEiX6kijzbJxLUBms",
  "key25": "5Uobar6V3gM9FWmFFCy1pr27nC6r2uvzWz5XLw5yJBLfTBNGFQURaGedGcSqn9UpkJRnZcsv2d7oMSNRYpW6yzpG",
  "key26": "5yinWPx1c23WS87PXniDuXHnd1m5oWfV89S7jrXTqSr4frAWVERHjPE1GKLh6a3XG4Vko6LUg48S53dkbuizJ2S1"
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
