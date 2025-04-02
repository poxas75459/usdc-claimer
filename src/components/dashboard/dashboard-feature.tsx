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
    "YiiyFGfD5zwFuFpZS7TfS6JEXF8CjckKmApxDxZmC4Dvsd3eY23sCts2eTRkE7u9fR7sZhZjwF1KNG434kmhsFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fnzSne8L88zyJEC1HBRFLTGUKqrxoom3TDhp7EyQAjkJ6sE8ij5Ha4MdZgtbkoJKWbSTnAAZ8PGsSzyQmXic9KW",
  "key1": "5TKJFzemfaq83oonwV85bgNEQzt5mo5GWjhi3fBWkTnKvnFsSSmhVwBW7UmeChDaPgQQdcA8tHCKqC5Yw7KSA1vR",
  "key2": "5w2g6KqGHeygugP23s34zppirLCbeHMtLE1J5q9c7sBy17XMQpBMwHciQ8pdC5Py77mpfUkU3zthbo88VzTi8oRs",
  "key3": "23K6hsgmptMT5d9qhtXtv5oA2U2YmgRWDhKjDUynhuPgj4QwNsXR8HsfZM8g9mmtKYeZFG5XBNgpyXHZcgJzTuud",
  "key4": "23RGWjcrRdGbYG8nLYWYxaSCemX87g8fvvqvc8NrjSG6amDtS5PNivuY6NPEqGAb4TCHpufWddZU2XvtQ7DnGYKL",
  "key5": "epxzHbPrpa2kCFTsdhksTh9v5JK7Xrocvqhhqtob45Yz8xXj4KpEoTf2DB9Yfe1iW2iR1SL19pHkAjoPmPRYQYb",
  "key6": "3HQPUXjTYRZCQ8oXTwMScwdiBPHkgoY8UH7XGU5EY11WZUVDbAs5KL2z4MCYUHUfmpVjXbWdkkBocfgBuD5TVB3k",
  "key7": "8yPxZpkAynmQbpStPaxnzBQEPCpzxPRUqdhtk7SXiDeKFGirq5F5Gxg8Szym8zjXRrnK6i8gYqaKHZac5tu5WGg",
  "key8": "2Eb6ttbhWeb1MdJyyZTTs6cc9ud6HzvQyVxevY6gWmKPT8aph427Z2F7JrhmuFmumMpJZiZXbauu6u4kzxDn9TuH",
  "key9": "2PenCFkStwM2SVihZKnnvKdTykpbmGJtXLDwXw4gLEN4hhbpPfGG89nYFS2xknPMpXrPUywJTXR5pBobA2wh3LvB",
  "key10": "3HgVuxGDecKbu3eqFt7iJcLfo9beuESq8HzvWwmY3PBp2YHdbueqJxggK8aqM6QRBzWmdE4GWKSeecAyTJ3D5qB4",
  "key11": "5fz96gUib8UEXFZfB24m628H6vAekDAKawcj7mfkcpbdqCpyGav9WRRaiXKCMY7sAKfh5vmvCvHqz9EeLFunmNZJ",
  "key12": "44eSbvAJZKCgLyrqzmCofQiZhWtZybSsktVLVQ11tjZKSsYP4du4rPJ95B2vBBKUkep2kif6vrUb5A8Atn6wvs9x",
  "key13": "63Y9godE93iYiCuxtNsexLhomTL29fXhqshfD7asnA9HTMhkPQAa9Nxb3MZfzR8t9mGS7P2KZR13DYqSg9BmM9wN",
  "key14": "24kJ2qoPipWXoX9F1LLgqYh4LtvA4WczipgZYee3aVi5sVT2xfr4Cbgorw5QjqHcWQ6fZ9Q1JYYFkJx1kKBz3t49",
  "key15": "2R4veHr9psh3HHZkTwfvej8JAouJKfHCcnR4e9ujhHm9upC8b64VoWZ5gmfZNh7vBztJwcEpGfqVAsccRUmg28Go",
  "key16": "k43s56ctMzN9Vtnx2EbgRsprENyZSajhuUAturH3PjzwMFkqMr1hUP6aXczq8cezMyXquMUxFismEjWLk4YwvD3",
  "key17": "229SnfBreTTTA7Rf1ZSTLWvBsJfwidWiVPiowuqmoVp51siDTKLU3aYGikniKtBTdkpq5wb3Qdy9t5tbLhVCsyBT",
  "key18": "47Ymomoby6SA3SsAFE2EAe3QHZb1uWh2CEAHJ4WG7kKN5ukGVPDUV1oKGeHeLHuQAvQS4S2TVoqWds2muauN5PKM",
  "key19": "4FJnwRUSmHYPRMiMjvLbasFRkytCPtdwGo1vLMX74M9NCFi3acfcTTN1rJfzs9n3GoxQM3wtj4jXfQ627oE4Dw4C",
  "key20": "5gvaLFF3ZQ3DtE6p3zCyS5VybKMBUGpz6yPwvY67qrAffitM7x9ytmPMmKDAg3DG86NusdzRgR7nkMKSTqbuNTJ",
  "key21": "3cjXFCHXEsPAXNrVfA4kXfA5YUL5VgdqvGokZtinSymDJ7wTXaa968N6DQ4K66ehQQmTqw4LySKjBAVHVHFhqhBU",
  "key22": "5pknswLUSCHiJ9fSdq56NV6WnRgdiDZHV9CfiFmWy2Bqwxn5oiXLmvDxHi3adtfssVuq292Jyz1frk78RMaX4v1j",
  "key23": "5LcKhiVMapSuCm7Yv8Hd6ZrxYgjkGAFAP8G4DTuA8kcepuvry2zPTjQfcgkxWzeUrLPNLsvj8W6PPwirzNMcN8z3",
  "key24": "5gYHeEVbJjj5Dc5pUpfAJAhJVufGet8HJxFgzwhHFiNZuU19BUkxzuu2L9NxhnT8f7EvRpCUZspAjBiKRys7ZAdL",
  "key25": "3wEboiBLaUnVFdpDuRWACbTwUaZZuQ6PVSLiVnwx3tCHyYtXG5y4kbpNYjxBmz2MzogYPka41KZBVrwxeGyiEvAL",
  "key26": "2Zf7md9m4zfDTay1RKBJFwgsKzWVipjCCSYAUZzS2QLyHb6aRGtg6AYtCvJrk5EYNWGxGwhC8q9WFoZFAvLhS9AU",
  "key27": "qb4EQWeCVRv5LFDuBu86uhGqLtKXE9KL4XgGbMmvwtCHTwCfg1b7qMUUo76y9RT7hcasTzHB5LeNvD4BiSdYXR1",
  "key28": "4sQW55bL2MW5axF92dTkaXaRQGvEDqcW2PVzLu3rSJjJbEbShuPVo9jA8qArF1KjxBhPj7B5faFeTDYRkHMaooNs",
  "key29": "VApQJv76yBoKxhDgS7XZkk9xtG8D2Nrkbzc3FTSKmaJkLokX2sb8i9ZZ67Q5JZZQroSTaCmk7nepLadGjabchiT"
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
