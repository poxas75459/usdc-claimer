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
    "4S6VB4tADzZnYJj4o9VDhmEDsu5QTrfhEcPXW882TzxaGHL2MX1ZBT8WTrn8S84tNtD2nPqGxyF9ZgvzG8Cqz8J2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tZKhzQSkeykMrs53Epj4dTkow8auaEPboMkFZTUipYf71pgty3BJ1BbmvLfztXbkox5thEVELRJfw94DfpkV5i2",
  "key1": "3wUXxtDmjrFrXUa1NDNX3gUu7CpJ8FfYVV69amzyjycqCWtWZSWcF2JQonWvRTgHgbEsYwkr8UYnM7BJrp78b3Pe",
  "key2": "5Eb2SBDw3HmRP1CsTq3nBKCcJFfKQ75w8chcpe5UfBCz4Ai5Z19ei7fe2eH7UPUA44gQMDJC1g4JjB7gqZrP8d6Q",
  "key3": "3zekP6aqsW4h2RxUuVy79N3Ch9XgairJdXnsup2MnCM9VQUL4gikNEHnk6orafg2gYq6sdv5y8d9ZDVCm1TVkdvS",
  "key4": "oZbjJofcMXaxbhbwJyKv2bhzdScBzAJNgiJgRGCxGfWRUfWkUShRkUQPV5FQxR6aQceq7zWefTTZu4cYG1KzCHU",
  "key5": "4y5bDNRhjqUeg5g3d5AL2TESLCXxwTjmRhaCX9nahP8m2wnyhsHiyAbMxdVL9eMEVtnfSLbbxxgNZDLMEYGcQfvz",
  "key6": "52QyccqEX48XDRHap3u5tJWKvBuiLRbXq4gUSy9iCN4qv1zCk32fYD282EK3zQPiJZpivCnX51DQ1eYSWQaW3HzW",
  "key7": "4wY3CSwfLYJo11YehcvfBtVw1urZnNdotnznf3vKVJrPLA2egisVFgX1FoMTiDdHLPbDwLGxHVnU734MbJsUdT9D",
  "key8": "mnpnQ7ifeugZU8NEi6hwrbCDFpB2w6og72qhPr8sTdCV6YsLvURtqa6YX7E5kBL4f9CvPjcfQHJkC6hTFTmivPD",
  "key9": "5t4ixvXxbfCuDXU69ukJn8AjbLEKzoruc4D5NcMfEGRteJn1PnsAMwNi31eskEt3XdnLw7kDSPXKYUSKmZ2GKAHC",
  "key10": "3L1VwUVkKeyJH9iE3K8FMyoDdCH5pbMxHVoY5wte8uuwTDGy7DVZCFxiZkYKvhcXYRkKt7rGdXRC7nVdCxy9vfHZ",
  "key11": "ZjAjH8t3BZWUMdYTv2fR5tn8V53hb1icBx1Zu88Ah9KHDC9fRGLECgYHrVTWtaPNwAGtRpCviCSzyWspRaLeZJV",
  "key12": "5iE6vqUvC4WYT2fQKXELZS7K7x6Bu6NXcfpxgkvmixtTDJM8m8hj2xo3p7ToUNnXs5fhjYCvRrzFwTTWziaN7QqG",
  "key13": "42nNxu3N4fgJt7kYf2CfmFFndz52WEv8KjJSeDS8i5X45TW4KTv5fk1QYcN6oPS4B1T3J3KyYKn2GuDiyTooJYDz",
  "key14": "2Gw2E4gWuU5Q2FsdenQpQbpuUkczLonmG4RJu35RPxMNHdQyhnW7cpPju3NyZF5fxeHakeGqEH3WWQMPjJtxbbB1",
  "key15": "35an1s4NNhWAaSGcCu7UbxKR8yPbUrNMWsStqqp2tjnDv1J5pRjQ6zfsooioW1JgSi8Cso6hu3vL9t2ZHDDiaX8g",
  "key16": "3s9ABH5orwzuq6T67GWsJUrB9xLfUsokQV7xiDbjbe8DpzqPrpnmC3UfryuamqqUcGEUctRSQMVVWt342fQvbq5Y",
  "key17": "jTG6D7jTnhdv33YtX6w6CZHJMvqgz6WAkoiimeEWHandZb1agp92VCbz1in3mhm4wsMixP89ePA5rd2GQbtyPBW",
  "key18": "5bfYSJ4jhjyPsAdEj6Hog4vscythDBTmfXFsvpyAvaXVRqzZ9edN6L64tG5tkq4fVEGD9MLFS9QszLmx9B9Z9bY6",
  "key19": "5a85Uwm3DxQKznwq35v7sRorhRQk9tRcK67f84spjN3DuGLHmoTNx1qbb6km2B7FwftDk9eRrJFAYbsyXz3ushLt",
  "key20": "2iyc2qPidV95QQnhyLkyr1nhoHJAnPssj3dT41eqUVNEkThkYDMVDdMQvaZkkvGcB41kKCcVaJCJY1a8t4iCYwek",
  "key21": "59a9CAef6ozHfiSwb7pxqAWfX2iwZ3azu3cvyfe7yootfhSpnn4rQfEJSwCD3VoKQ2G1BnsnwQTC9vMe1owJvoPW",
  "key22": "4K7bJuTPfKB22JrLFWpGi4GjpQs9EeFR3QTLKtgAfk5Uf8PntVX7khZZdQoDde6c3bwZwW94W9MLxk7GPr8qkkxP",
  "key23": "2SQXa5hqJG9m51zjAypYg3ffHbWAjQgMgRkDDoc3J8ofF6dQy8b9bz3F7go934LHH1yBaTJua1NvQFMJUCAA9fdE",
  "key24": "5hRjAXYBYeGXnAP31A8DVkfrtKKXY2EEB4PWBL1fBrhBkv4tYNUqhvxL8HsfJnnDes481nk7VQeiku8n6UvGEPjD",
  "key25": "4Tq1xT4QwZnve6njVVcEpp3ME1B61NJFWJq7t9BcWyDRp4V5CtHCQF1Cjwmc892XEJ7Pimsbma91mDoWTFShkcgg"
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
