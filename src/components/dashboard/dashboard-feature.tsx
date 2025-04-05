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
    "27KWKf2239RApNHKPXvES8z13Rz8VKBMriMW41PLhZutzmUtBaRrEaL4ucVYfaQun5mPPQdfPyUvb5KZwWjYhX5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pEj39375Rt7w9U7VTa4wr7uiV6ekPHzf3sCNF5d1y1HxPtWJFyBfRSkFupkNYDZ8n4X7AnjZ73ZBVxKzAkaVeGM",
  "key1": "3T42XFzQGYBypLN6YmsUdtRS1p4P6WBEDTPF1p7CYzdBB3XCApCxChDiCWgM3WXABif9sLMQWXwf2Xw6PGBTy9QY",
  "key2": "3GggnbrjF827wEmiVqHGdd1WNEeymB9Gqf1W6zjt8sy17oV2hccttyYggxjj7ZNvPjfD8xV1i7pcCdy4NHcdQEx8",
  "key3": "32uVumPWK6VuQCLhsvhf3PxDnJkUVATuxK3vpsEhHTWL8hkVrAMaGH8YtHaV8HRM1ayp8L8simg3TR9YGafvBFZw",
  "key4": "2p6E9UfMz4Fvx5cSN3FTyvSct5dyLYi3r26TySN5873ExrPYPqN9tX81BzJaH3mjYkNnrknQ8PxBD5ZHR9QwT875",
  "key5": "ktQdhCze4iULWrr317SAMFS5sGJLNW2quK5kPU2BtFeX7Lam3ZypwUJ8Mp9rQbaHckdPmVrxP98o7ocD1jCAdKj",
  "key6": "2vQbJfEeV6ar7RPRbeuGFXomN2imt9Yndz27bwTCtpUWweCWC4SmFox5Gs7zUKzDiCvS2kCLcCAZ7cjS5f1yzdxh",
  "key7": "2tB7yZtwyGSzySqFpHr3uBrg9Uk33Cnens4VFGRTBTivZLrTD7Ca4FUJc5y2M7iRhKpBZqDH3KJwx9aEWHSJDwmP",
  "key8": "592q2i1dznJX8KpMDz1RKrCQ5ibrDj8SbKEy8VsVSKMNwxtRY4XuS7YVnsiXjpbePK283fSTqhHYk4LfQm1dZK9k",
  "key9": "o19GFRNmFwnJg1GFPVe3NESRrrRaT7BPojJDPTiup9iWSf8RWvwNXkgdQWkxAQXmBDipMKYeqMyBzgfqVuDZN4g",
  "key10": "3A6BTZc232bjxxft1qXrv3266rbKWEsGo23GfW5RLhVfxrG2nrf2kNnwSvn12DgvzMFSKMuwQLq5tcDWg29mVBEo",
  "key11": "M7tXm4cRhrLW381v4xnjgMtwnG6T6yRFpbPBq5cxD7kDwMmDLa8hcAw9RiWE9ccyb4jz9aDy4vvZDEnhGceuiFY",
  "key12": "4ees1bGL6TG433fYfBumLvQkUgKfy3C7H36QmzQXgMEWzWessCd2ZxyjUjzVvmuTYdQhVjNgveZrevSnCAtz3QPU",
  "key13": "5rs5egN45WsW4h6TxR9To412aN4PbPXTPCTDr5NyDR21AsvTuZ7K5i52J2xymxFr3Uur6S9qahfUyoKeHxftw4Ub",
  "key14": "qPPTnhuDf9MwbSQ1SHR18r6U3abU11PkR4KLKrkMxgqJa3HwwvSpU6GDYg2LogLK8XSsUz41ZTvYfYj57tXZbgF",
  "key15": "4tSBCCQh3zfL73iAq4tVXKnHujR5rxV2EC83iFtuDUXmvMsiKZ3MpDp5QMkKSqnr4AZkRWpdpohYyjZ6nMythNcz",
  "key16": "QSuJuMoBhqsPv3GxFWzw4Qs7a1EhiHFEPXVjSnV1H3E5tY8aVFvsF85Juve4eracdLsBV9TwH5xB1ZZ8RGYyLjr",
  "key17": "npZ4SHoc6ziFeJR8iPr2Z6HU3QQRnSrEZAwex2XFRPFpwjcwaBb9ZMU7ortnAp6DRXKR6d4bku4kJzVn4UmusXh",
  "key18": "43xtqd5mzp9LQp4wXpqNeM4G8d53GRYX6UhVjPbeLodsNhVpr7891EfvYBgQK5NeSJ8trRRynpAE83Ux4ttigKNB",
  "key19": "3Bd9ySAWGaD3PM84uxCYN8hi48zwcfdpT458LCmAAhaYXTu8rew59ZaQaafBu57Xov4LsVPAVPYDryhWsAVJwWX6",
  "key20": "2mvwqRcG3BTKGKtKec1YHkhbTor4p9X9BQtPDrJJEZvHEHSC1HB7gPxXEuz6Xt3ErHpeLbiJzABedr1YSU5RoSQH",
  "key21": "3RzL26MM6wAp6hgwYYXbdgqAEhqoexH17BAK3WJyF5tY1QsWKRui2EeiaPMzRADkbf8ewqshFKDE7KLqyaRa3aYB",
  "key22": "3QXFVDgyQYhzYnMLc9YBdoWaggxu7MSmXzPpDgvEA87ouK51iX9TkWhhGJdajQCRaEXVxN1TPo4mfnZvKhXUfUSM",
  "key23": "5HnRsgUwKNY8B9vTcB863jLQjRPKmcarFQUx2nvSyDaVW9AS6HZnbcqfQKBHnPXvszusnnBESU4iumdQuxteqNs2",
  "key24": "2HHDer6eBJKiaqPL2pYFfcxq8DXQoYx67H1nEjGKQ57xDUEh8AqEbYEdcKrsXCMTmcRdYCiCqYgXRNjjG3SHJ8ed"
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
