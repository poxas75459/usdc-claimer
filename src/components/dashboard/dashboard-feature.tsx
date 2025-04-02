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
    "RjbMGDjDaDnodrBgKjCH5mxnaWeubMEkS4onJC6va4VUKUYNdza3ZcGRtzdeNGCsc3SAvPcchyrvjsRjhQRa6j9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tJ1S93ytnyk8EKsRookpUAiGwJWjFNuXW8wa3JXUqJ2Jtmbd34NxhGwg9J5v6FFGPeTcHZ9WwsnyBPuU5JX1wDs",
  "key1": "3K44T8SK9UL23RDf1eEWn6RbkjP5kr4rFeHv9rWqF23cezRPY7DVZknACbcdb7N33eHNVkmid9e82zmS48RqcXJj",
  "key2": "26MzqqgpwgcbCFck37KVhno4Y6NyG9pSXzAvB7aihVp9nvLU5cjfgsNj3UWjCKhworPPPTrRozAE4sY9qzeyWgv2",
  "key3": "5DjF3xyDCCKJmpecSpUZujTzpcn8TxQjQ4c2yZvz9hXpUzWa6JpZkDfNLppuBShFnxCwDYvd62QAjvKaHXUy3b2x",
  "key4": "3GNvYVL6r1GGDD5viHDWMpCmRwybhxdqU5QBy1uKqCLEvNnJs4pfpEr9k63Hz2XQEAopgTWw21X5FvoyY1HZVSNk",
  "key5": "25sh2cTwHrxizNJmoGnu164AL3N3v9deRo9ryZcrKogtY8Hb6qabpvoq1CHrASMRqTfY4CQM3XchVZpUGKyHTVTk",
  "key6": "5rwewjN33mVDcxrVZG7Ey8qhBF9M13A6KC6VxLW4PzxuN2hXqUMdeCnozn5KCh6WrqYDmZD1hgFqL8kBKCLLvUe9",
  "key7": "2bragHMfXHsUZzu4FAbwcqwFrPK47WKe2UNBejN5j3GpBqSLxcFTRG8SbeYt6X5gd6qQGAwyvaHSZhbNvhkd83mT",
  "key8": "2eVtP96knSHJXhhysQBiHwZoTatRRvMYCJq5WqfByYgiQdvxZdzY88uyjd6ZqWwKVNzvzbL5yT8q9TxvLFkHN36d",
  "key9": "UsbKaKjc2FPL2ebnKA8j4xjkDHHX1t7uU1JyxgJim2TsfPyT2ofnDAX4UbFCvDENjSGFyNR1sEpq3LtwN2zGzSR",
  "key10": "4Ha5YNdmczzLSqp5Bw1GVUdXQNm4Sv4drZ4w9dv9owabGGxj3EK2YUHmZ5diV5HwAnXyxdBfniyssBkaphxZLqqc",
  "key11": "2u8BHadpyYshkpcP1Kvv2mU6ugAM4GfMUfa82nHRvhSNwuhWe447CQK9k4W584L8kHAMMwKRboKHX9N5PbbJMpCo",
  "key12": "4UjYDXeHZH7gx2g8W1A4BnfKbWi1gyzTZKWTFhrVwk214G7QM8LmoYg6izTtHWrAGo7EdHaf26g8V2ZeMz6yYE8S",
  "key13": "3xsoEkcxte1z1F8S11cY4qrDzf1Nx1TBmR9AFGiuLBxBnMJ46WxFsY8MrjAUR1Fy8RNQ5QJe9SHqecXjrkyt2gqK",
  "key14": "3SuH7MoLMr1ViidgpMKDCQpRDBwdpEBEieukwY1gXSYsczcJZw7phc5eW51QzUfqj6eEgW8u1SKecx2LN4CKNd9p",
  "key15": "2TdnCjQqAkJwenatz78MteX21AgTgYGyfXhgXJ5qHm3VT8w6Y7SA1jLkCjXMfZh1dFPtYioBCwqrBmiHswDuMp8R",
  "key16": "438bEKxkgsmokVnjMjtWaDNQdVyYda5LH4CG7qoByCq481JGZGnTxvV8TX1ivWLAE7Cp2GsWG1bBrwBXKA7CnH9r",
  "key17": "4814yxUD4igubjhcLVyrqc66igTFmF34448wMtShziTJB7f9BcGTNhZpcAXrZ7cLUFGAaenMEr49iNqMKiJ8kGyP",
  "key18": "2wW7cgbNZUxRxyYjnoY3X66JiZbPRcPV1MfCAR2r4hCgo5tTa8E3q3YicLh2JyQXuuKdpsoJb6xhr3pq4cugtgrX",
  "key19": "3SiPs1spsDBX5hdZW6LqdPtYK569bqpgX31FkvfgpVZCQoCpQYnBTFahw6HHGEWSdyg7zNmDZwzCoZJxwt7t3AHE",
  "key20": "5967o692V6hMUiRKVJBfnayoHoohgFkbJjN2juCySU3URJQdw15F4o4ffFoyLLRgWtXZyKkfTdrXy9sQUyJeyfZk",
  "key21": "3PnMB2s93aJo75vAyYCNdMEEjhPB7gQyjECRHehfby3V3vxqmtudhcpHJduxSnPeZ7KT8HbY3qu6gwBZoPXPYnP8",
  "key22": "dUdR2Yn2aCFyytPqMGyBMw1eZcKpCLH4UoerHYKW3yVYHbWgXxJVPNUbCrc1qVbcrbceUKApsYkdjFBHzzMeajU",
  "key23": "Hr9ABfm9iM7dxCZo1DdcVAGWUjp8ghYCNHxas9ZL8zmGi5Mx1upnMWRz36xZGrNXRpRZzHU91sVtf3ZBAbBkCuw",
  "key24": "3zht1QgNx93VNRTSa45sDuRf4hfsiwF4V4TdSkVunmGA1jh5gcWeVYyzdPEMgZ214TgVsD6kf7mefNsnnhigLdWm",
  "key25": "ZpdXrs9hNWhC9rhQ9kqyz5uwDZHZxoqz8UpYAGg8TBSQgZtcxiuJTkRbi3eEu9mPjPgLv7eYJojTRERKcGvSfGc",
  "key26": "24FvwWDDLML7Z53NpMzJ5J8bveCAjAKUJUWhdENsiWS4o4XNTpe9AeeiT7bzBH9i4Fg6kZmGqP4MSRpHxgUS55jw"
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
