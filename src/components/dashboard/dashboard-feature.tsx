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
    "2yF2w2GRroTwgPfhwxKdEW1r6srRwfiZkUpAeUKcvpjq1jMhCdVQybKtm5ctx3p9mvVaFPoSErM8Dpp2HJAEYTGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ewS4WHLxPT8ZDm68JLR7AjX4THQzTu5urRAF6U6h2qSZrahLNu2dovei3hEEmpLhQCBRd9DQhGsSdEjRc6pqWMR",
  "key1": "VXxzBhTNkKhxkc23EpPG2CvUTx4Y3xJ4S4NScMBb9sRteRWeKPAGvxk14bqjpffKmL2YTjYeFEVybJ5jFkzRycR",
  "key2": "4Sv2MDYQC6jbnEVfnLmQZ8LgGfawWvZT7pn3BCEynE1rgLup1eZaqsV6QVE1P5pHQpsVb8rovX4BpiYjeXzh9jji",
  "key3": "2GzaEHh7F5F7x3GRiEYdyoeVd1tyPPRXSGMQYREBiaCFUo9bX4McfVgZq5W97qQe3SwrAobE31whV7afdCTxqazH",
  "key4": "271uCuFQ8PFxqwVDW3HFZ2wwbpu2ayT7NKHWZb38BHGFoPP3oUBhc9mMabsjpt3x6pMw7tn8fbLVebHT6o18WPg7",
  "key5": "eZ9wtV8iHTbGZH6KM1hGpBMmU24QpQteoq4keNkaQDWYd9xQK6ZgRLzWyvYLxM119FxCCUxYB5AUR9TTDP8Emox",
  "key6": "5x8JBfRzswyDSdhANqfUXgZueo6322pfa5Wj3nYRRtYxBqEkfCkafejetEnhsWfQaQMs6rKFBwCKPQn517fnH5cJ",
  "key7": "2MkHybFH59DwgQvQWs2GLHi9ogZM6quYcvTmUwcXVaMC19cs9uNcGPHeRqnCYWbL5Tv7WDcj3utAnWzm7vXRLbNx",
  "key8": "3umqf33VNN1iA5PaL3viFAgsKpwKnD6vmfy8Znfmwgm4quq4ZjdEWsZwhCq8vfods6v162bZH6CNLuwcfTRkcr8z",
  "key9": "F2egWwLyhfh1r3A6kZb8WUzkJDrbf8zaSSMU9PbvRzTptoEnwBiHkaCuP7GyUMfN71kfansGmfBTWgSsteh2t18",
  "key10": "4Chkvxvn3QCnciHjYfiGfoLkfRkGi63aJpRVMQ299sN4L8oBGPXkgfXBStG5RDCxTfmhANQRrZPi9vSSCzTyFrLi",
  "key11": "5CiZoSndqGdCxjvQD9MKssbRMGmUc7HALvBr4V3ybgiQH4HMPzPMKPowkqGJZrEzQZAatT3nrEAjHwMjuTN9jwAv",
  "key12": "DEidXknYzTs7s7kDza7d7LkwyhQM8WjtrPnW1wJqKxaiBkejPafG6HFVCJ251ChkCxaVs3tSKnvGPWdHfyXwv4p",
  "key13": "4y7648dySX61TsdfKeLiZHQvepNtFGDroLRGCUPTc28WqvT3rhC7mPjcyxE2vUC11DocsdGDsSfp5G5USzqowFHW",
  "key14": "4P3dzigeDa7XHQzv5sv5URdgBbVF7MWNDPxaXW6UceZdvgepBkAEzBpjftoRWuV9fHCSWchhSWebueDYho2yW6G6",
  "key15": "4aa9maoSf5a38FARBoqNaTLfTp2971Zcbi95SVQjc5UTX3xahbnNYCtqf4AJztJP6K682BMRwLo1v1BXCBrAxXvg",
  "key16": "37xKRNFHZnEcxxhu2GfdFG6v4beQnzK4HGKNmtQbnWDqfaWtMoEeNysYBh5PJth8wzfeiErcvzErs3Cj58Xp5TVA",
  "key17": "2nsRUUmy6hUKg3qiKjT721XrKiaArKdNYJdUdFeqepXinbwZdFRsWVrAVFThiJfMuLb7pTENdzghNpJYBGHcboxL",
  "key18": "3Vz1yLyiJVKWXkQNSDrXavhs4MDaGWQVB9mGx1daUmYyBPQbVUjSd4ZtX69xYzg8G7B5unrpboP7znAAkBWvLibU",
  "key19": "fwG2Bso7GXwABULEVY6NFGDtRFAJBrGiVabzfT5PJuCrD9RTfZjbSUuPAXPYa4WTUbTi6WSMUQRhTkKikX35NUG",
  "key20": "eswnX17V3oDLn9eCRJgZbgMPv9UGzgD7NZ3F6aYL1vWKpT9PouhUJBJn9dj848s3J1YBDxebLEbuyzPadY8axYj",
  "key21": "3u91rRK6ycQ3xGoF2N4dZC1Zi9nw3NQF32rTV8uuftw9H19i5TJ2Cckd54Ki4FnAZFouK9nNLKNWFzseVqKUMeLd",
  "key22": "5bGoSiWxZ2RbyZuUqzzr3BKyxdkbGHYVjWjvQtpKRXmTwVRP7TNBtR9qkJhWLpSbxRfCjCZGJJnW7nKYH4CBRugd",
  "key23": "3ttZWUqMm1fpyUgZzA61UUpMuGFTxZpNdqX22aReGbedYZe3UJzQ6HdindF4G32c2AFv4mUWDXY95FLQo6gA1Trj",
  "key24": "59k6uGis9GxNf7LdBudMUziGueWdRrQCuAv752GscnhprqTm2yjy5qXfJXJBEUc5JM9ndDMj6cY5K16AMN7kYDye",
  "key25": "27iepAKWb1NCCQ81TRmZdhDJCYE53J98wufiS8iH6ywBAW8U9skR2F7GThqejdRLSzbGko4CfFVZLL71DysBmDNk"
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
