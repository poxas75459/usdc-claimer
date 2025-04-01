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
    "2AGYmSEvwh2q6arSzFgRxcuBykKfjaowpo6qceneqKwzA6aNZKcvzRi8DcXht9xa7muYYumJLrhChdrjx6tFdvbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62KxZKYZaPD75hUqZVpMub9voRs3NbkRjhBt8PVyieuKFKnyJm1C6UJr4K9xK9hj6nms7M5BR872sALxq4ecEspY",
  "key1": "4E1DKsw89n38QoX3AhqTtM1FyPEQ5q9H2AGTV2Sj2bKvrDmphmjvfzwMoLA9BFSzZQ1rUwRW6BhdfRa2qka1KLb9",
  "key2": "5YzVJGvHLqS6hA8otYtvZyHK1aYwHqmwGZUmPiCidt8BcktbNdymGTq1RkCnpW9ftG7iBNf3dscSD3ESfCPPePuv",
  "key3": "5uhwfkDFaG3Lovu6p4mD5xF7NiH811kwS7qGcqzEypvddnTf4GePjmwJy35rfRxhQ6367vRekSfpsCTZrGNRvkMo",
  "key4": "4eDbkdAL7ctubYXKG5exDazKeazqjJMtZg7MNSENyo1uKkSgPHkxyXuF3xvMbtY9TrxQGwKZnKpbmUjgbkQj35Hy",
  "key5": "4Y4SEjx2dzKzyx9J649RuBN6A3My1kcYvyuQMcDHLu2ZjDoJf3T1y5P8AWFs91DpeQv3oooRyB2nTj9Z8ZDoo9sW",
  "key6": "5RvRRZYeHbGgKPnXmBKJJtTCrft4gm9Gn6Z1sMejMzGQoYTVewhpN6uc9q26iuiybKxGFekZEYjq9wDfwqB65Rab",
  "key7": "27591DRaNEQoU5Vqoj4TZX5oj9HDQ4Mq4GcFwW5ANEFSfA1gaH3XVHRTvNDYprNoRmgBYrbZ47pfVfVM1HdBnG6P",
  "key8": "2CFA8pPLUJCKRXtYnM9Ru7dAyWrW4wT1GC2ZMA3tQ6WSRhSjvDN2zKKwY5xvmiRSktAvkodoaETT5tUVeLwxS4i4",
  "key9": "3jhq9zDXEHuHKknZrJoaeKSfcNGvc7JhNmCci8FgeBdXs9z8bPHjwpC5ZutFv15spDnkPEM2QhuMxDjCNHZYZUte",
  "key10": "w417DN371sQ52WDWHroM3SWQJ3ePDLKZ9mMdtpbvbhfKXfN78aRkPmH36TrC2SL4ttQKTzY6M3dsUeSKsb8oR2h",
  "key11": "5nMivRGkfEdnxjJD6oBMNYaTb2h4Jf1zZ5m2pHt98AiLHQMY3vNqG1PtUPDN9d8xca2rhQgLxLWRT7NJ1T6BbM1X",
  "key12": "5FSSSjBbXey5fqdFRHVxP7eKpMavYKAHYSPYDWeknYSnm9X9QgqJs4ohVj3oaNzeUZGnws2DRLp1hmsLqYmC6HFs",
  "key13": "5wuDWJhK11MAMfsb2zcyGvXSd2rdjZK8V8AoEYxDavoCqWrRHvQYf5YjqVohgFHBBL5qCfJtCtV8J1tBeAVCWLDJ",
  "key14": "UKcgwrRkyZYU5jybmc5z3BfvrHT6EJJyjjFsKaPQPz4ToDW7CvEC1R7ozAYq6N2NDJUMNgRM88QM2TzamkBsF2E",
  "key15": "5Nz4f3eCjEgqFcfmc8UhM81Lpdz8nStyGtBLxFcZXdYTWKepGPtjwJMjtEzPMJ5JBYvXCwQbAqFu6KZA4E1DEgW9",
  "key16": "qFBcK1thzSdKZpg9iQZf6CYUnTYM1RmT1qv2J1Zb9iqXUb5g2MdsfVUoz1NostsGXChkrk6ED2aEPckejgUfLpb",
  "key17": "K9wXpXSGcKmdVScY3XDiDshrgeov2HTiJUDjE1W9zigANc9L5sZCJftz9GX76hkeCkQhd5rofpTxDKRX9QyMhXX",
  "key18": "EkzGu5Zm6yTiEAvP9DtAJq4qTDREgtQPFhH8nTN2bnyJSbWDiM4NpnEUVhVPn9ZE4f1qVAbjqEH778eipucDGau",
  "key19": "27BmrYv1tXW58smmH2uQNP6DAycHpupWqAT9rx8n4x8E4b7EyLYvjNH4VLEbjWPv1aGDCXok7S9sf9KMr2ojGUct",
  "key20": "d3BD2fKWxpYfKkG1XoLgb52qHCYQ7bT3wV9CcrLtA5LGefZuKPmjap5EWmn2ga8nuXqgW9P46gfHpXQfWzDWDfV",
  "key21": "3QneCJBP9dvCRcs5VhnWz4sYTeTyBexjodi9D1WHSsgJtMBM8neaWKeuY6ftsiSi56H7wKDe3PNhAviJRSqCjxUE",
  "key22": "449NFVKeoDn5ec8Wr7X9ghJZDJPKaLMfDCFXFQa2wgewdS9dMUybJq9RXTQf1xsQ3ZG57V86EoPb7UukJyCsGgaF",
  "key23": "47G2Z6B6bQTJiUNxMjw5m5Z3B6UsmyrD3AK8k1PbYGHCpZ9pWSUgXjyPv3qwjkzZaaCUX2rbc3JGw9cB6U7hvqib",
  "key24": "3dGGVKGLaqiLuFggFuHgHyhXJDQRJVVXM75ZQecJ6ax867ZhStZTQn3iK2yv4mcuQjoxucgoqU9ReMcEJ7aYTsd5",
  "key25": "4PYZpacX96799FDWvBYESBvYJBojXp3MQTYjWe38TAYFK8k69zLvrEeRfyLCgCHziLsBYBkCioDRTEqDp9HKaY82",
  "key26": "4L2HWj7suCuxKEDDQbniyxdsCwNwRw6NC9PJwBC68kHkNrnyGqFSX9Px1k5vAWJgac5QXVVeb1T8SDLN2oZoQpkb",
  "key27": "XD8pvPUPZR4u45DRT3cP7cxMS2R2hHRDvpm8sc82HiXj19mALv7G5EKEhyqrUYr9LDDsZYaP4Pz7KW5fh13NpZi",
  "key28": "3NFXiXtrnKXGsTjBbva4tVphqCqTDBwJc7BkEi4TsnwwNvbJNxicyyUEuKbUCZrnxccSA7UiniUqXJmeeN7wPdwB",
  "key29": "3gQBoEBygxAhCCSu4VRJVFPqzgHYDQMGGgyuVeFo4jgaemVsou5k1e9Jc41kwwbmtCbwDfxEE6KgHaMi9qPSkhDA",
  "key30": "UWiP9xqLJ9uFDZXgK8G7qXDKwYBnWL2MnFyk6HoEFTZeXHHSX3X5ipxJ9f1RU9DmuRyDuCj9QvixTsF2VtpT3uQ",
  "key31": "4qnLvWBzCdN9vxEme2Ez9uCVMBTBx7PF25rR6FknNvd1zK8FQZHrheRHJQRPEgPeNjuWEqN1c5iy4qwDhK4mHFsx",
  "key32": "44et9uW2Tcu1PmE9sv5m7fPnMuN87U3poMeHx1hBCQDWCDwCgyJZBgsmpxuiHW4oZFB6ctgZk7tjT47cZNQ27Jwh",
  "key33": "2UKLeBPQxjnRoE8k6XvZd5wQPMWPMm7cQgsBaFSVbXpXJWY4hk8ZkYDFcMk1tXU2Q1tRvaVRszSUCifjHkJxJbfQ",
  "key34": "5uNwjaeLCafaTCTNCVy5sr7oHwU79q8BZBuxCBGjc4mWk3nCwdJLd8pjmNu7f1GTV2MeqYmr45JpymDM54pXt9gD",
  "key35": "3Cjroper8v3GTBki8teovpjsfk33TCX1r2qvPLjRpk5ma4wDpMnYQ1FqdJ5B1jU9iJcdX4EQVcNWnBQLEih18zbf",
  "key36": "5PiLnNtvyPF1d6gzSFwoPFamtkytPKZSDgS3gxtxJKua3o6D1DoSQn1BjxPeqG3vnJyXamByCWm72uWenDnH4YJf"
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
