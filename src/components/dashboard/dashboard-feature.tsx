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
    "5H7BLKLN28ZYzG1q4CPrsee1fLSx2Wu7TASJzUQds62xvCxZR4AhcG6viBbiPG8ikhNaGEn1ZZQuxfhcDRM9SfMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65v88X34rmAkNev27Ey4DezReMSrzaRwtaQPTxqQoypevXYFFXvCbzt2e3unjiLzDNqxeQwWKupjtdjYahSeaswE",
  "key1": "GctdehJiREqxy4HZCBCyuUqciZrpfaytM1ehVNSdHYuFJzxZnWPuA1u2vPDnkAw2Avz3QyVX1um5CMRNRimxcPk",
  "key2": "3k4TeduW6y9GMxZknW4pWe56968gRSLYLuTv7LPGtTx3MAYZ2ufkFy83VbYYwUeX1mSmDpXiyf4SztRLpwczPuVV",
  "key3": "soy3gEfja4s4wpMCTgcE8kf38JvvySfiVfL5fZ1sqWvyNrGwDMWtaTyPQfywk1qL7Hbhr2nXgDYawLUnRytfdYs",
  "key4": "2mA9oCXdazZt5LjxDyk9jGT3CcoNLFYekt7cVw4jZPTsQUz1jusEZEds2hRVXerwrF7dqcmwVcef2janNS9eapqd",
  "key5": "2ugDMHLHKqGzBwNuLwQN7kVGytNWthzRhbaEYchdAcWKCJLfLqzZSmMVGvsFeLgrCooa9M1JhX5ZpNMYH2o5VsK3",
  "key6": "HMUrETvp1SPCkHKPPHXRHn8eKwMCTzaHipqSkN9GFd9mEAqfA2wPWyy4Z3nMUejn2MtfgzvAb3rEZztnWUxtfMk",
  "key7": "6PufNJD6nsAw9EvN89BwV74AYXoyUQvuEGS44BgRPzUgxMweS21aFi4i5scTjdbq7adTDFZwjKLM2RFMudtm3H5",
  "key8": "3dNcBY4P7VmQpJCgR5ZVrxmfMmboGqQAKTYJEc9P3q1cixE2gywbkoGkjsKAbXnVKxFDAeR4J6VQm2tH4yfhWKEu",
  "key9": "5eArsJrPmfBbaT1fvhGMaFpd5JhUT8oczGa3GdnT1ayf7Ag5jU5yTn6sidS5vY5Cu1TUC5g5DGUnoCRvz2MTfbC1",
  "key10": "QN4pA9TodeCGf1jGkbK4gW5qfhuFy5ihAQoPk1mPrjHzChkGVPnKdMw1WfTJV6Qv5tkKkZukwC6ZA2DP7X4j96S",
  "key11": "5Kb6HVeDEuayBqGC5AicYLvgNyskVQ3qH4fZZPjGBZAurfbfzFVQ2Suqsjje4NMqwopYAFwmH8DUsR95AERZ22fw",
  "key12": "5wQC6tgp48nWDr5ELQsF4Kg12yiqgkJBphysgktPU8ry3u7LKWDsCoBrt33fwjnenBLoPyvbuFi3LTswhPBZ4fZm",
  "key13": "rEgRq6jNGYNpuLzEKi8RtMVkJ7LD9K1EMZ9rUUMYS4uFjSod4BiRdmxFpqpNKqiSwzWKWpH62L7sQSTb5MvnqPP",
  "key14": "4EUbTLEafjdL7AzafcpNN7vBSgUEQqX8bNtpCUYBVkMP9r1fGGM9rmwzHyrZJAGVLbXvvShZkv2xJaurUHPBdjij",
  "key15": "65JYtUx5rRrRQKk54s33LdoSrBxKUftwvSuGZtcNHG6EbvnsypsW1uZ4QMnHf9b1ea1swKAa5XapVHtpSmhaVM9L",
  "key16": "4KbuPfmMUscnqwxU8EzAAP98SJ32MvQzno3vSNb7KaRoM41viY2UGrC7a4aLPnMBXonopEM16qVWRWaAxXEJkwtc",
  "key17": "nUchjPGkrd5nzLeKmDEVBSSLLuxtebGpDdaeWLU1ocBGZ3aVtsPwetLDZ4bEc5PeignZ1prHstjsivJt44DnREn",
  "key18": "3AvbgV3gZvuYUhwwqwboDiE4KuBHX62Y15pKBUc7hYXne9b1WmBGxU8oVrd9hjMg4ubBbXkZChB7baXjXY6g2nBp",
  "key19": "4ZB7LmwyKdP5HiHzmc7eF1TyJokSCwZDdBmHWMmc58TbekDwZhGKecijVfLtjqGYtMUuERLSsZeGcQEuDt6SzMYE",
  "key20": "4Wk9okqozNmfMTXzaGW34H9QRS4CWqwfBnG8gjSPPZNj7c7hNvPmyBkoeS19PA9mSJ6GdAvfyBQwoL5TnmKGrqwu",
  "key21": "2zCjZER5ygKgWj8mLRxpwV8zjnUNd52brHQtACGcvZ6H1ZkUa3tyCVSW731HcaNwwKik5mT4gBzLsm1bWMLCVnYB",
  "key22": "523JaE7J4hwguHhbzETeNxYJEBaXJr9SsAb7ivRLsNMVDz4Xyuv7wDo74DMjfNjpCqTLJiCLP37HeS9qz9oYTXLL",
  "key23": "4nqfHwaFE5SDadsCNeg9KJGt7ET7W8WhjM1m4y5czDW1yepaq3p693yKLUjQuJ56hPa1frMrJBcYavs3PXEuLsKd",
  "key24": "D6zuNbZmQBWK7eiGzdMLponHhJWdZkcJy47HJGVqy8hsSUgBqgSqcvrUsB72q9SKCpvv8xNhtqa5PWdKufGBpcZ",
  "key25": "UTBsMtA5emvq55GopZFL5CRUXYc8pVWyJ1zAD1o2p2163PD1vSMmPqkpGRzmWBbg8ARqw81tXwvQWj5fTkK13ca",
  "key26": "UrtaA2btaVFHwxy4c6UphMXfRiN8PyXfni9F7GUzc4QNzVmu3xG8avgwkSyd6xXL9Bg3KJSpkMt61AEaoHSvuPH",
  "key27": "5uvAKMR6UAUN7UTikLYSEJp6c5C3YEeXiQDq4hUSS59G8aPohqNKzTERbVNhEPvz4hTwD6GqmpEBgYdzGhWVFuqN"
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
