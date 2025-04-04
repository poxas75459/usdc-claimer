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
    "p5xxwrRoKfxQt1E2EfD45MiEeCtanDJNSJGtQ9yutM6ML73HydFD6uoKtukKWpqQeMLVw4qp6fh9caMDoNCyh23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42X2fFLWdxsQeMc4pXr8s7aZ1fz3YavyWQZy9KegkYjuxPYV36yW1dXUWVySrjqATJtfw6rCVDX4p2ZtmfnVvjso",
  "key1": "2zqZ2D7mFTxMn12YhYvCAeBB6T6q2gbLAoNdZJFh4J9HNQnJKCxdFmUXS24ZHMRp4HDuNmUJ5k89dRKgAMH5Vdk2",
  "key2": "4KxgjRNKeQmuCveDNrX5TkDtzcvWupGcNtJZpBQUpqYGnPm5LrywDiRe1jquBCqtxFV1PiZHPexySBZYP5r4nJyV",
  "key3": "4S5R4fMW9TEfk1P1EpvK49Gk8bZjTBydT2c5XUBTHeKN72rxYzbQzQQBkskB9WyzUVbv548yVfoR7NTuDUWNdpXG",
  "key4": "655G8ez4DRdZb2eGGLNSLvEeYzku8raRGPtXLhozaFsRYvLHR5F7FN2g9rd5BWPbm34VXoJKiP9Kujg4KSYjntFL",
  "key5": "3boArtKXxkE6KKudXcGPTzRcSFC7gZHK5VBM3PAPr3r22ANAL5UUhkd7WPh2ciBrjzHuQqquRJH3ba9vQN6B5QLg",
  "key6": "316Q8jHeWvvZrHBx6B6U4Tt3MEK24R6FRHpMBW7BBdHjgDSe9Fjvim7YjYGy6id9Q8Rgc2qSd51ryFLXdGKZrYD9",
  "key7": "E9FYPSpTd9WmaTaYFzTXfPveyLoRY9dTEJYgiEb5KC1Q8hSWyz5YWQmXHL9EPEj6922yvod78ifePVnxUdLepJ5",
  "key8": "5qZk376KtAqQWrf9bNWtSYiF4x1NQLRwmqJAoTJwh1tdKVk9xXYuUkuRgRAyguT4JYQSFMf976bAuDSaLsKSsgeP",
  "key9": "3ziLFAdfEq3srENp7ayACrbDUs8Hm4gCjzhp7HajxwYuPxQdQ8cDHd95Sr8NmknHJ4s2jgVMWr7gozjLTFdkK6DV",
  "key10": "2gJ1wgcq3UqdNqgqq5RMSv3mpydF4bm21ri9r2g9mgVrtfGUxJCK5MNo5J3qcrVNjLub5sTrjkN9qZoUbLAVCKST",
  "key11": "337VeMLCVET6N46WoV9onS4NspTbu7T6QvMMg5Bx9AMPaCG9soQk6v35wXyYMnioGBBXSPHnmCeUHGCmJhBoU3Lk",
  "key12": "2Pad6ybxtXubUHiw3t12KWFWo8HRh1DvvFkyYyKh4YHYe7QEd1FxZ5Ze9bFbv3HfVPQMtqRvHFWVfBRvFP9M5LDh",
  "key13": "2y9Am36shuG6Q7pARgPzMi3rzALEXfWLJ3jWSK6sG9i7bEWfrtq8FMWZpzGFL2WoHvntbnTa8FqVP4R8veZsevze",
  "key14": "2Xrn7asf9q5epU2txfDWMTG16ACGjhPNnQrsZYQYjVo8AwyoTrCsPEb2UHFu7wgJHifTginhzLmJqX2gVvMFNZAj",
  "key15": "3SkMD7wDNKiNk8BWRvxKH2n4cuXdQx7UpDceNEGLCWNJUdnTQovQUqxsjvT9akZZFTwwKLftNNFYvSsNT7iGD7i2",
  "key16": "4eVgLBPBBmESBDXxQHJozd7XAjnEYFxvpDZLaqHai89LdvNKxhbHHvBjkM9Hqarmbqx2AdNQkMzpsJMpCie12r17",
  "key17": "3XTtXfMqP8SVF219qKyrxEqey9GKq2LpT6b6Fqjj2xeBiJDTA8BM7bseSxLK8kKa86WMVuckthZziawwY8pHsPg7",
  "key18": "2qabwrHA8bMDGEJ8ZeMGbgUYmXP4nqFiEjmLDrACpYCxcsMhXbzT8DForZ87ZQxdswCmUDx4dtBEDzTZVvtoxp3C",
  "key19": "2ZipUkSmZGsg4583YNND14mmKfyJbS1pMoucaAcsXeYwGuEbDj9pbVyQzH8xr5kCFjbDkcZy2FszAqaajuUk5kwT",
  "key20": "4WHwR4RwDMUEvyh7EJyfoRBs1fAMUURaGXm4cKfbYQEMdzPPEQ4egDNuQo3w8AUv71xbXxpYiVwb6YrLHv1jWWt",
  "key21": "2XGhUEHnzc9H5MupJSHRfjpLG3hRUxKBWp9sdaZ6k6dpDTVEcwGfwAtfmQGEhBheCgpwrgTjAS5Fu4awje9KLNYC",
  "key22": "5yTXo9UT5xRVKgfgj2DextPCYRhxFUG1juvUyUXYADAzTUQ8t5ysdLAv5ZmtuqWJQDi2oTpGVt3z6H2QkrFiWE83",
  "key23": "3Ln6tX8wXvFFn1KR4n99SSeYe5RxU22YGYQ9WNTb1AeTsJhTNDVFqKqur5LjA9q191xuP6YS4SzTrPA42TQ3RdP5",
  "key24": "4hz5LEecaD8uQNzUZsrtDkcfjJ6iMi37yQj5CHqhixirhLZn4LYzmrMe3Zu3X2axJPR9m85HnzY7bpZxzP2YTgTU",
  "key25": "taEpe9t77su2QpWyznBwncNXZJiz9m19NNB1jsKn3ykSwDC7vdhvLQzTM1Ra31gsbGrMzbM1MH9re4AQFdNgsSM",
  "key26": "2pSQwNC96EqHcdptZoLcA2iEkMi1nbfb4L5STixxBZNnNUek8yjyaQ2pr2PyVFFrt3FJBxiCjunjtYNevyURugvR",
  "key27": "3q6HbizTCgLZrCda1bm4EaeUcZFe5YWDkhLqyWidjnBCqJAgPL37Q8Ejmke1z6rf9yrWz1WGWS3fJt6jTxuPgsLZ",
  "key28": "vnEdYY7cMq2Kbyz76FBPU1gRNj6THvLfwuR8Sw36oxDrwqeN5KbnzqBUQ15TCgPG2yzGgBV61ejyQmHsz3cLCRQ"
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
