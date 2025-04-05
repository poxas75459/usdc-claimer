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
    "4Geua4waD9XcYYZRHedEfm8APJjQ29s8XqfkVgmT3Vnb4x9JzfdcfFyWgviTYDsHEZEADRRV3rUuVDA5844ufci7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kWxkpGDWGJcMniCKZsW7VrALwFmU51yDNChyuSdcrrFUhw6CCYvU5Ugp9TTbgPmJ9cvJgkrnfgQgcUqjeEvd9cW",
  "key1": "7XLsuWHszwzvQtZY3oSzZiXu6tV4seJCv42N4HjfVq1rGV7EF9ZAanqv946vUMHkaEtj4RZrCtZ9wHGivS5fKkr",
  "key2": "4vuyH145ejcx4Z3cmxkvDd7rbcJ6Pf1wE8Vx3GD9d2RN3VKb6EWdY69bJvJxYXyjHe3qMTfYok1by4aBDBoPBnhx",
  "key3": "32ktqPtCYwggL5cjqiBeS3YUxramtMteFZZ42dDuuokNnT4R7o97o32FjuYx7tjVmoYXQKDtEYRzaZStcWz5v4bR",
  "key4": "5GTCaY2uFJ8Mw1AJdVX2r39QvrJyQ8MkdsWj2b7w56tGCaSVCUnsMZxAH9Fq2MDcXsc66bAz6iVSU5RkN6KiSW43",
  "key5": "5sSTzFRUQJst8iB2zGEaKoUFMp54j8cKWFksUNKUfL2Ko3GZxbwPxv2igR4b5M1QZFt4b3Yu8vck7S4p3P8QXPry",
  "key6": "47drjhLDbkWpnP1ntNs8UU81j8Ex7WTEtWEvAwJS5bumYtCpjfDUUjoUsAfVvWn2YKEir1MdvRchn14qvHTWSYVb",
  "key7": "3Q2jNKdsz5PLAs9DHGi2ivXLEYYa6FzmTWYNZoZzxXFUtwLCqGdscWE7hJEtogAJe3k6zzXdsMHBRY2Et3y1Yy3f",
  "key8": "47YDqN9Yt9nmbrrx41H1YVEmwsKRtMjZD7BBvyxoadsnTK8K3w6xWV1w2MTf4e4EckRpX4vpf1NBjBxHqCr4T5jq",
  "key9": "2YmTPFrWR7kRx3HGSbqvhGcPWKYfBWNpi83L8iRW6YtfvptRf2Ps6PxP9ef3PtmQUu9voUWo6NDid5ipxHWBii9y",
  "key10": "3ajQMUje8cXWxQYRWWMEg22dnTBZA7z1B8QqCZ9wLRyMGgX73YGpEAdXJFPXzT5kU6HVd5QcbsG59Hijc65QSMAp",
  "key11": "5Qpyra84b6EPrJviZ3tPAQJpRn2F3zBbBAn7qqAXdPHuPTNTi6hhdXGpCoTuQ32tvz5caytXc2RRr73GRo5U4kRq",
  "key12": "3k8Raj7febWLzm9etXSziA5wdJRjeQXubRdMAiotLpiLTC91FE4C8w6mWpcYLq6iYBTegMaRYumtXZ77PQrkyDpH",
  "key13": "2VBAP7Geg7CURc1iTG41DcVxu94uX5KNZmoNfjiev2ZbpruVsLEHzxhxcw8Z8JZq7xm2Wfjpoftq1ofud4YEQN6Q",
  "key14": "23LHehd8Ju6Z9YRn1YTe1zwH1cYJMZMKudDiYCahZsxKSUZ4W2bdjLeDsSW135W9n3BYRovCNcTvETuYhZEvKK1h",
  "key15": "3Jnqq8GuYMKst7PndaiDHptwz5hT1F6bbCRHNM14BW1z7RGd2ULY9Znmo2acBBF8ngNFKgWSnSXi7rMzvkZMRgm5",
  "key16": "a67M3dRby5bhgh6b2TwdBBHEQ2qffyYmf33DKvVtgU5sSgThrsqpg4SGJx1RdmSMu27kyeQNagZ1KTEbKCfvpfk",
  "key17": "3vEYTTjd52ALBk6bdaut36d1ekeFfBwPW8w9YHHQNbf6JyeTJbvK21Py27pqfYg2RPFA6cnA3tbxavJYVMzWe3V3",
  "key18": "5rs9B9PzhMzGvSfxqVXEiEcm6oKzmWsgZqkb4aX22b4hEAAaWJFUqjmwJqufYCWrVi2fsCH8nkNc9rZog2eoYapm",
  "key19": "4zUmohpLF5JoxBfMv3tsfsDmFRDARGAHMBKFcyLHZSbozSLTihjTLePSxPtn7FnDD5wyZmYEdFqpv8UqNQJFE1Wx",
  "key20": "PLy2vCTj9q7BgccwEh3XYQYLxuW8JML7ErVF4wRSEEP6fZZ2pEahMe7uzqcoDSa16bGt6wi3pa5y5eHEjHy8H6J",
  "key21": "dGyBfBDBhaPuDPqD7V9LA1xuwnifKL5Y4uzfYfrcen4KjWg9Cw8huN2QXTB1mqZM88q6EbgFdHAX7ccr26fobMe",
  "key22": "5ekbKP5NAiDtbULYBo4LAvnFH8HAPx9mJg3ajgMCzihzikBT3W1LWYuL14ZkNDQ9NZs1yUXHBe5h3ozt6XBQdPNp",
  "key23": "56Ep2b6Xm2wkiPgVE2e6WxxkqzK2w4EhwDXcdK9niEX8Sy21qscqFv1d4VgmTR7GPgK4zf3i1k45bovjubQ3eJJj",
  "key24": "3RVMRmRnK3Q3vPwh1qPhVX2AepxQbJJCEbbYgf7mmrV9ZRqtoMxbtbfxwnXTTSwHn8Xs2qPqnJXNUXvU4isEcrVR",
  "key25": "5sdJ9S7A5y1CY3saeHa4V4oUkMhLC2yxto5ELsBteKv8EhYqgiv1s2yRCgMF6zetpGSoAwwYQFspboeu5UK9Vvzy",
  "key26": "JS6QtYsKSBsavokhhLmVvbHnUcFirZGhvuTTL86TD5F6R9at2mAViHMNG6AUGGh7XrHF4CdcEbJwh3mqDb3RHMx",
  "key27": "5bQRQa4jtsxYRqdQZ63SKM7n7aPF2CdyMVu2ogvMRH5UryAN4actQ8AYRpoU9ZzZKpDnLfviuV2Us7ocTRiZzhvx",
  "key28": "4YcproJJ7uuMWYq5Jzk93WpUAf3SDStKZV8XWxhaKBDTQhHUQJPYeKEdFQyLwoJzw45gnnzuYNFoUhV8UK15u6N2",
  "key29": "4VbM9SbzWegK3wUQf7Wzz59suswrLruBWUaehzxXMmY5umMFHDj99cggik54PV8JZEKM3NhNW1CE5kLsAD46D51p",
  "key30": "fC9Pun92Xh8CJomQfjtuPru3QpDcG6C9oU1MRLaidBumRiZ8H13d8zeFUtQFZ4bTybCs9GMtntnYBVrdxEVdF6Z",
  "key31": "3pMdFppbqbjJYVg4ywuCmbRJMttcfGk1yCc25WtBRC5niRBEKTymbezV582uAfWbPWq98rxBKQvs4mLMFJDQHsmZ",
  "key32": "5nYAQbe8U8aMUUQsHr2xGJPu6SrH48wXpF9UUqMwNyKUX5tL4WxR86pL16EMNDPt4sQit3oxyh1LaShqYBfSTW9Q",
  "key33": "38fXov7MWLhGMud1TfkJYkt6Zpu6Bk5yXTs4jAAmEMoK2dMKS3HyDTBV2KbgF1gL6vpUtow1CEhKhaBd7hFZnASk",
  "key34": "278uD8gVo4hvaVrJdz7dTxrgPE8MRnCckcWrfHC8Yd6nE9hbgTc5fxjZrHtE7w3RLZKqvVJRncNpVb1MTY2ydGjo",
  "key35": "KPQdpzdUFeLDU4TdXczfkqJNo6A8ebxFP7j5THBYrkxMH7iQptGS3gxugX9p3i2ezwbeGPHoMCyhpYc5vcxxrph"
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
