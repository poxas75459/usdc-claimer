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
    "isMNWc3dZWxMvrrCnBYGuVjgujs61oNYqdtaABDp2HsP4AMV75NoC6weeBjZ3Sg67ureAX2mDkg7W8p4Y2YcMy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35e68P9gggaJGxv78byUtm6dow1KKWYqd8vEtUPMEJqyXnYvPNUR51ZVBhyCEmTqed2xbeLB4B8stqqQWJd4eaGP",
  "key1": "peT2g7JaaBWiXWefyGs3UsDi4Ht81Rx6aRr8EWs4HKiRRUwxRMVmEqALHRAiHB5HUuhEDZ6rXcKyMhZtyZ7sLHG",
  "key2": "2twUsKWZkWU3fVw7wr6rsxvsc5CawRoBU9bC6EUEMCNqwMf78pmHui2MdkMFEd6mLEZRXrvXzGZmfNS44cKb6XjM",
  "key3": "47TVFosppszChVGoocE9EqN2UoqdazwxpUJewFFBSSdqFwAvGB3s4PnsEiQ9caTrJT6moZ5ZvyGp7QHWxjmVhqXG",
  "key4": "2YMx5TFcW2VFUaJoGybrcuJTEcWyk5WWJhdp8TnK88brFpDSVVEhMG8xNtSRHQN5YTSqY4X2ejj14n8abtN2qG4y",
  "key5": "4TJEEh2B6GWfon3hfeSLJVqiKqCyX5njPoDE5c6La8hQpTwyP5JhTe1CRhdycxEE6SFiaHhNn2kDvZ7GixGX8q5V",
  "key6": "y9XqcyoR6XweCwe2DY2pEFyKCBYDpSk7DaGGRsLjvAZXng9DMSBuhBuWPyD7Agaz72buAWv1xaVDH3zpRA7YrTX",
  "key7": "2ENAuuuGR5AiKXFAr3CkPQpoKaHYk6ztHYc7PS5vwQ9KPRn9tRtAoZ1xCJZSvBGFfZFA5rDW9C6tUoFC4g1HqWpL",
  "key8": "4PhT4pP2g88qQycYnCeZTN8SQr7ZPQB4QbnmjhjoQXqW9m42AnUcAf7BsEt2GJG1cLGRFM2t6dAL1Addry1mL1uG",
  "key9": "6AcxCsNyJLw1riYfZMk8RHpiyyD2sRqGYmHWB7EA8vNyHk5ksXjocBmY61XXcwJpuDtYVuYH4fcKq8PAFGfyKNA",
  "key10": "2jBPsyjAigge8H66KmpdERdWDCLDfPNPPJ4WFcdXa9yXF8mjewtjoQNeGBPJ9jvRo4Sg33uEFVwHFy7q9ee3Hn5B",
  "key11": "32A1uyEBPJWXui5DJ77GkQoazB8XgZeWf8tammqvxFEsL998ZpBVXvDWb8ytmYrtdkTv9rMVEgy1RW9k8qPyuwpu",
  "key12": "xjaSrJRrj4mbQQsd1HJ3wKeK4whGCa2ToUAeceoRMhhSvKAwMfDX2f8DDKtScVmf8d8Usy7BsUvHLgTofAAYhht",
  "key13": "6F2fAob6dbGaQ7BiybDVPsBcA54RHo2BZf2dCfdJY4cM3SBzp3xyveNfF5YajqceJmwNHtZJCfSQwDrKiXsAQm4",
  "key14": "5iZh986JG9KxCc9zUYkbhdnTNo2z1z39EyQPso2dYj4KJ1rBxa5FvuRyNfXtDGzMTpiWqHWiMEuryh1bjdydjJzN",
  "key15": "4cMdoH3eokmnxzRy14SNzoARU589wgKGn8zQG9p4ypj2xGqznzNjotMZLwFynNobY2NVBaeyvdmDtvwRSiS3KFwB",
  "key16": "5yddAUM5aUuW2LHoLqaM9TzvHEh77Ckjhdj5Siww7m2jVkMrbgRtHEqcm2UQmvZR8tVmrnFeidQRsEiP1KLxyAFo",
  "key17": "3Vt15LDKabUKc9XucSw5ENNZrFtZ4gZankXAnymaHsvn3jirRYaBgxmVzs4zZw7io2GiJj9QdSRjn2KeZq4RhSJH",
  "key18": "t1U6VoXF3kU2jBP56fBrPsrCE7Vf61BbUBqvu2Yf4UJDhM7GEEYrjH3L7ExxGmWCzTfmYN2GKgS9U5mon6jw4aH",
  "key19": "4bdEYSbnCnF39Yi78wTS35aRAumA2t4BqH78UrgJQ7NjH5fVh3xckycBhgrphzNdQGq2GMC28USRzgratxkmm98s",
  "key20": "4xLuyYsTF56dv5uZZ5Wiv3iXuK6iC3fBye3tRvETATbmC4gE5eTqfsB3746yzuUXRAJhEut5UwjgNt5SjTBVo96L",
  "key21": "52Qamf5MhERZq2qK6D41GWEvS7yCZHTvfLTVo222crTvTZikhBQpng5VkUHynmj4LNw3EGHnRFLgSi5VR3wk8sAx",
  "key22": "4ihciEiFN5nHCMRYSNXGZ1wb8foczsebct87EuDuHwSAT4BDukibCZPgA8PgigVY3p16gKBt2tRa1pcscreM1a9S",
  "key23": "2oU8ebP2bEmZZ8wztjziMaHqS5Y55cV2dGjefzByqRcjWALqoGZ2v6zVExLX5L8Pu3XfwdDwFac5QB5E9ayFsrVU",
  "key24": "2tNKCHapqDFacjj73hPo9ZGSQWTGyQWxmW9ays4b4gLQ8Sknb6dk49SjjdGufL1B627VqUKsa9XUpf8YTf25te1q",
  "key25": "BDSou4m5gjn4f3PbnZj7aHe4XQLFdQc2K8ZstAfhGnTirz3K1ugm1TtaFcKqf8JFDL6gmcQWwoTUVQPQcHf5bmY",
  "key26": "3psZEvaacxCXe2Ro4wXaQ7SspotUv5LFRpwCDu9jrdUYEPe1gvJ5nTuM6dSj9txrh8RcNiQNnb8ixmJfyjZkSuf1"
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
