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
    "66jujn7vmgkJ3VjWCKDgBgLmAcKAvZeuQxJaJBGa5h6VnkzG8c9nByJLVRG6mU1kXfPwyC8L7zmoifyGaYXoDGV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KZ2cvRRegCbRixs88XuR6ncirsxSKfzfn7qGNpjwwwP51qUHpEkdKwrmKEirbaB8HHAYojPZRKEEjivUbwnvEhs",
  "key1": "3N2XgttHVxoUPiu1yH9aswyaJjRCRHmgpwN8D92nbt9hj7i9mRgWvMVdQt3FqCyD2p651tAmpzwyBRrkV2hjQwGk",
  "key2": "3LYa77DZA38r5fkWPWwGMTSbm2fJQLYpqP9nMnWAS7pahzVeRcreytRMUocZUpoe1UsnCjihXbNoZEqa1iAMjvCG",
  "key3": "2bcSbKR92vW1C6h9mGVgQGP4JJM6N6xfUo8g6TLJ14s8YJ5Nwyy6eRD2WzDoFC7xaZvG6PKH2snu8eieL2iCSetV",
  "key4": "4umcFce97VN6utpK2woRHTsort7gN5bE8WaUzZeyqTLAQEqp2oqBC2LeUZFeuVaSEPGjxrhLmsa7XVQcbxrw78Pj",
  "key5": "BUGxnqQKqgevMd1n9mduKEU3o8AJ3KUZhe1iUD8JvgcrhLWEqf2Pmg3UcMzfDsY4dwRWLhrLWjg6eGRzCVUbrR9",
  "key6": "57UqBzcD8ph3PER8cTc2aGf533VHGtSsdFEj9v6vUhmzdnFZQZ6RYRUEFXhwcBSVGbuzVaBx1eENcWw5aJaYgQGv",
  "key7": "34mocedy1SfqHRgPczY6DYBRuqGCVeoaUhzspQh2x2izzMXZschTVfmZGBYcm5bWHVJhvsFgLBvLrjFNZLUSxFZ8",
  "key8": "5HNzNW7WUDVVpBQT5BjMgqRmkXBAmJutFm4DBh7fankqfqqtZvrrJwx7yNdLiFR1eiL8EAnKgCmHfR1iwFUi3cQq",
  "key9": "4Q9Qu6MDSWx4YANEpNRnxndGFqTNEoCAiPcKv4HyGj8nQNsjXy7BmUXobVhvyLGgH8ePCzmcRFRk2MmKhnYcf11s",
  "key10": "2DfLeaXyBVEfsUpzgimxA7eoE3ovrAVER5W589Jmij8xtqxu2hNFP5ZS79sRJkqpqXJTDzoqgSUbhi3yrygDnpM6",
  "key11": "32XjnxeryXAKWq3qPrA7uianYRAssAGHQSLqZkV2EQ9ngpFD7LB1ekVkX3wWCfh9vVqK8RAxqkY1GKvxFnmBBFcA",
  "key12": "5fvBiQW81DHNpLpMmToT6dAky1rLVZ4wkeiiMCGmDDGxaMGmPFdi5PWpQvSztSDo4h9EiEw5TPbc9Ym6Xeag8oVm",
  "key13": "4J7ZYLub5iG7bXDLFHbjP3jLknzDxsczQCLhLYTL2Zsypzd6avFDBZ8bgicxDfnW6ErnnBaqPvxWYpaHBnuLZgWt",
  "key14": "2aeHx5ExPSvFwFAU4pezPd6UrMKVUdfoJo4tMFTJAKzyaKg4DVVThoP4UwEw86A3ZTZwPmw6sdy2wt3d7zYoLN6C",
  "key15": "jtfs5ov2JmNT1zH4LyuxHtdSxVKugNaPJwgKi71HyhwA2EVLAajdA1SaguwzERUJRWPLpirbjsU5Hzs6FvEAHoC",
  "key16": "3JnNYnEjBGAgZHzoersSfnSuY8jjXjAjUTgU4N1LC8BAwDc8D2A5VRc3tNvTRAehaecogm9z3eypaVBAQSgZYRZN",
  "key17": "42LGa2xWJsWK7XVqoDytQBqrSz9eFc2noBZNktikRuXcPTCzysyQgXsT3wYYSSj7Y5GxY9pFg4pW4ihLZE6TBsud",
  "key18": "43gHBLaamCZ336CDuRf66bRX7GaiGCgRg6yY8Eh8Ly9XtgzFAbqdBVCWn3MwRwga3eNqRFLRWxJvjCaNiLN8UZaU",
  "key19": "2PXoPnD3nYVDqw3xCsVfoGpxG1tUjwGSwZF8J2u4q4UTSPEXLxLQG2ezKuVX7LCe3Mo82vuSFA9ufNxWwy9SShWk",
  "key20": "2jY4PscocMuUdtWdt7X7tuSV41JQEw4Z97wQ3NJkbSw2qpXowdrRUKqurEX7yYk64MXkz2AC9ZZWcMdM297NP7Ew",
  "key21": "ZzpiqoE7eUohLFkGM2kcRHafLERDDHrncgJiEarCqQHb784NUWRdpnaGCwhmbCMUTyQwZ28bfCQULkYbK1Uzbcy",
  "key22": "yDcV8rZcnuYoDBRaDqJSjvTYHumUis2jpggyB3dv1o4DBuiTf2TcQqBUdK57d6eNj8VESJ1nbmgAWw2aw9QyYzp",
  "key23": "33yv33f3VsAJQBFagrb2Tm554EZvUBdcw4YP1UapUcB8A8ZQfQ9fdgQwRgVzYREj8EYpmhFEVLozrs7KZKut37mp",
  "key24": "4oBDtmnyWBUn5ZksGGefkfMX4zYQkvrq2xeyDDC8V9yARrhZ1FvWFaDAphxUu6CQeq5x5HA3tT6pT9rPx6hfBUP1",
  "key25": "46MQWnQTW3jkCBa1sKL6ktZgeBRRC1saKhroYC72t1QNEhpdxX74gLUsEtVWe4JHc3LNmkZevFf9KdxAoTnpVtwd",
  "key26": "5Sg5TCuEWFduVCA5P4KGyH25pJUuwBwSjshPEVXWTxtitvXT2YLRjutLs8GAJkPfXzLXjGM94NmgySoLc6VRdPw5",
  "key27": "4sRUQT7xQRBhZNXxu3oBuhcAGaZ2nPhuGz37zQRs1qVh8aBuZtLxfc1bok5PTsAEPm3dnEnJRWLLiwR9XBBmDvuF",
  "key28": "2En86WDekBGLkKsAzvzVmyPWwQ6fbsjycmxbuztvoRFo7imQVqwKBpkdppg2PY3NQFi6p1NSyM1cwhzkWvBSyYDH",
  "key29": "3pKgkQoJHrFMH6XzAsRA1wiN3yGHcSjMqAT33XwD9NN8Le5GC9K4hh86jREgpzga4ZbQKf62kRR1BXYnG4FgXP4i",
  "key30": "6wahjMJUJUFug5mHaZPVmi9yD16fx4queBjYZM1PMrp8n2jShV9FUc6rtfNyTo4FBguA1np5iexzZm5R1YrQGgR",
  "key31": "27YJxiU6hPcEYmwa3K6n89XKDGoxVce9wjvXkTWemGRkqNjMGTPxJi2ht162BCjHrwXyp5NqgEmzeggHwLgd1DZP"
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
