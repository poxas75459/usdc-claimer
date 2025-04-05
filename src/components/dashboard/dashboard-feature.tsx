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
    "2Qad5NYAw3KRJb7SS2iB1S84JSoogFJWfCSNdzjQ6UMn7ZbaNmMr5ac1Bow3yJzfhVAbwGkKjkJGcEAarJE6U8NV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eNwbXTPJndiDawaC8fNbvoNurVXDUYEeRSteS99wjNxZhMrQTwcnrAj1ALPdxWijkCQdaHRxNG9TnFJbj9NiywK",
  "key1": "2bCE1CySwon491QUYjPqXSoXiBxWzX92JxoqNwEh9wfk529PqB5UFJPTE9jX5doZQXjRPn2U9RrjjnnJkXdJyqV1",
  "key2": "3DEiEUpS3CSQEqW4JDuBEGQxqTZA3Uuc9aSjCZDg1CQdQURpKvNrq17Jr7pN9gRg78tvmMfVs5kNVHhA4tE813q7",
  "key3": "9xZguxwKawPLthSeSqevoKM7fdKojZUiDvfM3A9c3dEXetDHYBgunEQXqCRdttyPdF3ScRRKue6k1fSnR71UzUe",
  "key4": "2JvBi1qndRrhciRb2mRKmz3aBbQjfB2ii4JBDMCHEmqzfsdpZZHdub99Xzxh9X97w7bwANedYN2JNdQqLf68scj6",
  "key5": "jC9FCqZPDpbt5X5tUdg9MyoENG1qBvvUwWwEjuEHeW3JCN9qRPSX9GHCHuJUwdRwctbvY9qg7QpQQ2AmwSJGdBp",
  "key6": "23CG7tWXAnAqVN8dA6c1WuHA5rcKUeFuWJfdRrXGJJBvWsQ7GbN975QJMebQUUxgATaoJ14BjGc4YVFjk7SWARZT",
  "key7": "2W1ifCrge2Z4jBKCiCaHqCgCeRHCnASAuGBvRyMvXM7NqKe8VcrZV2A7yWDc32BibH5Zrhcw54vA1J41cqeg8ggJ",
  "key8": "3Wr45Qiv6y14FVh35uiR2AHcvwJFksBzp2tJfa19CZEJVX5TfVPX3HzQf89YXsGT3cpVFvu3pkYaawjQppB6UGdm",
  "key9": "3gYkMh68E5qbG4TMmaKA4DZ3ZtMRS5cb9G7hhC3YBd47AhQYDfbTuEYw9riidKFiUq53DWPhhVZBpPXNcqo5GUJ3",
  "key10": "2ePNeEJrLK9RwhcQTdiLcCvTXpJ3G88wgAFZFKsUn2FLfFcGKjtGV6TVdx7M4fHZuWfaPALWbaPnG3FkoUvQHVum",
  "key11": "5SnLrvFCibu9d35kDUDFS9LSgicdoZdZEHvtbqf5KSqmu7hwj59owfLQjQQdyEHKQ8EAk5j5eRjnkvm4u1RxMnX1",
  "key12": "AH1T32bQhEDUDGT8kc7cBMfYbvUzevyTV94zXenJMscsmyJh5miPrteNQumSTaR7EiqmgYtLiGCUFq7iG1CjbSy",
  "key13": "413bLoTDi1RuTepsVWBKpxx5FGA3EFWyvpGfSaA5k8z2bnmCi9Yd2Luu3XCcw6RqL1tfApdHZDMLHSWb1Hkxz8BQ",
  "key14": "26pw5LByGVCU8N9H7YPrP5xbW4vQazSGdc9kdidpMo96hq8FB2JYmStYfYGzLtDrMnrCHvfuZkMB26vmbDbnMgJG",
  "key15": "5DQ8VsSJBTU17y6VwMJ5S36hW3jduQVu4PyGPvL4fgUq2CmbmrJHRW5KntK9TckAebJTnKmJ7uF8JgHn4jtPDo5f",
  "key16": "24RJdamjGZ5z3xR92W7cnDfQy6S3H1T6Yp1tJqzan9U23uKXMN6QxYZsvydjyNgkKsBJTgrhkeQFMCheyJ3vv1g9",
  "key17": "5Eoi1aoDxsoY5zz8JfF5Gmp9zUVc4kmPE8pa1TGzEZijr7SmYvqZtMJ1KqmKbCSd4jZ7jYsB9PQvvBXa3aTeTPog",
  "key18": "3iH5CC7e5sbR9wJtRcvBGLsP7GUwUCrjLwetPTqF8QaQSzaWXZsYmzRNY6N8a1vmk37JzCqMqXdz49AJxM2RgLWH",
  "key19": "5r15aB2yYnEAbifXHPWPZ7C7NYC9daA9ejBFkzgjM8MUWZUFBZrUD8vmiwLnzkVUBGQT8hpMUoqJY3EjjgQwCXMn",
  "key20": "3sMhZMiR4uAsY7W9tatRENESMBarFs4uDHnSqeQeF3SDRvwZhtZJkh5FVP8uvVowfXj1ZYeBXewhp2akNMYQK318",
  "key21": "66L1trcrdFxmFgbK7WUgNiUreNswDjqFZqqBQzsxps9jiU7jReW4HXQJoEFm2imbeHNHuy7fALLyBdkH8SLqT8jp",
  "key22": "36UU8ieAC5UALkWY4E513RGNaCgtDJsdrn8gxkgSoSaWppjYGHbgUf5nHg3YFxhfuSnZKUWKbVrG9TquNZSSxchP",
  "key23": "5tUpFCnjkDkQXBr8arBN9BPwvKdgwMUCQagCWwDXX9wrx3YfW2LxaWoSSoLQBh9M6vM3PE8r3s8kZNskeWkWPMMD",
  "key24": "3mZqQa8pYGtKfVdS22nz9Qe3itWfH6fgT6RV72ym3a3xPh6AVQ1hJZpD9k7P3zovWSsNhVFfuWy8LsKLzYuPh3s9"
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
