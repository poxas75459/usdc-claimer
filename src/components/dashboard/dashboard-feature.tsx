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
    "RQC19beNTct5Y4xTSb1s5a8Bo2TaHd1FAi3AwpKo4FxJjHJTL2vKnnLTNAzVg6Cm5jFjJNK9BpEGwR3zXg5Jd3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i4BuwbfYwUvcLefgcwNaAHFEdmNekbFo7xtBqK9eAva2qcLitsW8TUwXV1spFU6AWf6nc6tdmXx4favwZN2ytiM",
  "key1": "5ti4twjQV8Btb5YdyuaBm4dHanMDmeenCvnUAsJXVmeZutP8S96jVLrgxYuVkpXwmCBvh9HXjLTjMhJhcp3X3mY7",
  "key2": "5XfUo1nNatGzwHAxxYcbjmytQM9xfkPEwHDraiDNQHh1n1sV9KBoMRLt7GrEKv3jYKExvawNWAU2G4896qn2acyF",
  "key3": "64tA8gQDnSEnvpMbPCo1jAxLE9juLwMRzAUGyxrr3A2qVX6CTAcU4tgauSeXqqiA8FJ1b4dMPwFqGiKT4nhPJtUJ",
  "key4": "4vaVTCgraZXR7dVAvhbvYUj26E3cVcefBTFt66AfDNt6cRfp7shAoEm6L7yXJc91m3fyhSmT5Ko2QwH81eXSvgM5",
  "key5": "3LZyWMLDzUZUs9BmhTLrKjaV2adDTsVYPu7EjnntczWoTXzLxQNewFAkFREsyY5n8q1uYPX2tn67DLbmrnETvhFd",
  "key6": "4hwwDgLQDEhb1Lrq9125WzBKRrTXaoecDqisKx7qzvYEf2ZovvYRvoQj5zNi5CojXb4CJNKRR2VDbjrPdA2Q8q46",
  "key7": "3koLFXqstaB3cNwkKPYYTisHcoLVS9zKmVZPu1ASSvze4us7DRGYsTL1WdCRqYEJ8jdFEUdK1m35D6TNFNQ945BK",
  "key8": "2d5LNmKXqUZDKg56aHutAfBpqyHHvXN5USHUopABwzGYLqVDYmpadbYSd91YyHbiLZfuc7d1kCh23eLyKwbgXK4j",
  "key9": "29Zx6mXG8WeM7PDzCSUK1XjuqrgUDxmCqwyY1mGjs3dH8dFzuzkcjwpv4w3yZnrVsYQwojDaX4jCTNckP6qeoydN",
  "key10": "3HigG7Nz2H7zLekwbK6z8Rb6U6nzBQD59vQhbrYnH9mNKrTudpWc2sdv4WvtEPUDQo6wFqTtUoBhZc1zcuakWCG5",
  "key11": "3KoHLJgSSsBAu8tjSRp4K5gh1zuXRVKMWGL5M8VRGTMymUEjvi387pupVbdugG49qUBbBJUrHNVKPSc2bRDz5sdH",
  "key12": "4cKvwBF1caH3ej8D6g3vyhUSzGfPCuQb97LZtM95GgdM1PDYN2XSA8knUWVbjQXbtz495xSfXoGKS1DSnCUSRkBz",
  "key13": "2ibtHmr2JT7T91EmmiN9fFchNzgMWCATzVAuB6UaHQG7LKmy5wgzArEj9ETLj2e73aRQm2Fu9Qiwi3Am1fXFzk3v",
  "key14": "5KaKaWXmFVN7tqttjvgP1XjSpgRFSdVL63gRxY3WLPHXStsauFLzByP7XTrGJyWsXWEsp2mC6ksPdqB3G7WsNP8U",
  "key15": "5m6eK8J6gJtQzwSvbaqqZ7mrWQU6Y4xeHmswBKoLdqkkgozpN3Zs4YxQNP1PRyEvZC3DsSjSpUtR611aTg97qbug",
  "key16": "3TKwVygwMp3977e9m6ikdVgcBmCxURMAffnaCcuRiEpFLEMcNNgCGTmb4tPcdKX1zAjiHSuvCeCqVM78Y611PJ5X",
  "key17": "3dSYPipKf7HwWY82vz7FPAjzk1HJYDkjhK9yiVjx5B4KtJSVnxtJaUBZ6tGWgMLqusckFvZ2tMQjS6gG74qJyL5G",
  "key18": "3WKd2nzrdhbpDvxzc1iGqk7fMTkEVCFToQ1YdLkKvuXqUTfhxMH3HTSAJ31dM6qa4s3EoeSjTXHP69rjSaQT7m2F",
  "key19": "3oeQJCDhUagv6CamFEwap8JRvR9mPFmQnn8hpWrcmEmNJSEeBFmKsSqT6QEM27g9DuQvPBQsEBzu9Y1quEarRvkB",
  "key20": "CUWckJaMd9suzQfvLSkxAkuJVMTndsM6sFWAFDS9EDJZAWBYddA2psqgCcCeGKbnuNP2mYU4Don3rBUVVamCuZt",
  "key21": "36AMvijPj17AuHDsinkub1nPb5pYmW5XifNMv4AucM89WrhncNSJJpjzzoKBBPyMyxLCKWnPFwwcBsHfgLKTJzXc",
  "key22": "P4WygSffrS8snGr5s1zRgh2SWMxPjoMH1DtwRY7hTDxeHStqbKK6LPJjWyNaDSd4gxTQ6mUBZPt6777vN19BVG6",
  "key23": "3SU8eK2jAS3VRgFiL8JZfUfGYC7vESJRiLnjNCTtFCeAyt38YKF2UVyKP2BPWNThKVAnw2rCK6c5RZnAgS27L9qc",
  "key24": "51JihzL2fR4Qf44GgXaLvcsrRnG1R7q5vx24YgZWvGkZPTMDJMrcQmhczTDG85dtgpjsVaXqZCRRXjCnt3MDTAq8",
  "key25": "2JUEzX5k22RUpERK8KFrPJMW9r9iKM3sV1ZK6VkdxMxKFJxaHjfbUVD9vkRHPhc872rc5e9UtzfFPkMcg4DokDN4",
  "key26": "5UQiTNg1Ro7PCvd65aQazasDtnXEr8ujPLCDkoiE5USr1HVVwEPissRyLQYZzbirfe3WHrPJL8GDW6sLYaVJ35pT",
  "key27": "5cKYVpjvQyxcFiqwazpVh6X8s2BYyCgJ13TZNHevZNFfxNnFmZr59DkPhG8RaQYLWGisTadzS2teDWoUTWJxyPdd",
  "key28": "5PgxN97DxdaD7mAihpV1ZGbtmPrxtEEGXLpCuek6PUJdmxA8oNQ4HVqbRjU6dvws3zzHzKZqs8PMab6c1i87dgBZ",
  "key29": "5QxFp7PNJWJ8xmT6PNo8QW3bWwtJyk5Vb2SK8MtGLjuBaJjAsp5eG9syUywoAVUGAWN34QgKUP1b25nm7sRFWcmU"
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
