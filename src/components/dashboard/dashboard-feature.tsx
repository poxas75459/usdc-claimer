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
    "yv8TXkgQgKRY5bzTV1AFhTXUzaMQphwX71iin4PDsKVn7uTakuBiokvSoxJU2uPozWDPYfvN1yDSBDpZQ89e89w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45TkRTcbHRUPSn4okJxw8zHq46gKbpNYWHHN3RmGyhwFx7sDXHHZKpCptQx5VqqksvCsJJZLYNx9kQrpsbtY2Uuw",
  "key1": "4XHvYUiNPsQwpaHsuZHj5zHSyy127BVNm5LCATjpr8S7pMo2BL5L2FWKeLZHSVr9E9EfK8bzLDDwENwRWQFTBbVK",
  "key2": "24G4GGrAiz2ZK6iQuB8SCQJc9oa1SpAcygc3rDDDqfPYc2iGRkpsi6TBEsD7JHVQy3FYe27CFvGhSGrrGxNsvaKH",
  "key3": "5yGPkxtRAPq4REWqBs3QWTdzdFAdaQWLpe9nNsMwpJNBksrxhPUBPR9AVZkiKvDANcuVjgjRh1myLMkKUaeLHgqY",
  "key4": "5ZDrwiAkEcAZXceGwMmiy4zp7t6ZqZDYL4BwJYr46SJwR6MQjND6z91sZ8zMQsNeMfcu9zc2h5WBSBYc19Y3yTgR",
  "key5": "29nqbnRa5TT97CPPiGDrdyvzqQ97nLHPGd43WkqSJ2eepzeB6YAVhsowR6dsGiPQiELz1D9NqvScboYLK1BJtt95",
  "key6": "5ciZjsPVGVrNRLtms8nqTZ3QyKD7W6FMmFKVTBrSAKnCFSj8uEsMWM2pCRi5QrBUBhYomYooB5YjJXLK5j2Jz288",
  "key7": "2bZQwDFGKVhbfUSKZiVtNspZBiSr12zURRUPyC1oXwe8wDodByCRTcanu5fMMmo71JeScr8FRVUcCso13yFTphyJ",
  "key8": "4T4Jw7ivhRGtPzNUmVPDhXEkEuSPwexqJwXAVYQynjRbBw4ahpVbEiHYBmpXudnifwABN6h2fBJLrswWTLKUVqUS",
  "key9": "S4HtwxccE6sV4q9nTRNJwt5kHcMVATEegxrQJDy1EmcJNebwvfRRa5Lf6CTnckqQTCf5eM6s3qwwoBGXgKxhTDn",
  "key10": "36VMawZTsye7rKX8JUpyMSd1wfx4RZHk7amP6EnupKrqicwiTqGj3eVTHbHXZ3dNfYwj2z8wtNwS3cBJnBG8HZqv",
  "key11": "4WVvofueJZARNH1nxWQ8x7cwG8fJFFweF1zpsdNSxNMxp5vFmSgWr6cNYXjdYXgskdXDAg65sdvUW4hQ3S2M9JMC",
  "key12": "61xxEhokDwVCF99gd5UfP7aZDULuzcyMDXnWxMqoY4r6MHECxupBCvrp5HK85j7Yfd14HZyP9jNvKS3dKvxAjUkJ",
  "key13": "41s1RG1CwgBxjgKuEe8P8CiTs4xVt6g8RZNoocg15CFAot3CviHDs8RcEgYQWAZK4D4iTJwpsYUzvKESx3YFn7oS",
  "key14": "2hBYMyeNqpaRp9fEhw982rMCBWKgirnPWMQyzE8SGPvX5evbbUwWQHhVpUWYymWH33JGo2tSAigDB4fVVyPKsrG7",
  "key15": "4njMy5ctdySqX5fz3K7mhVCeUoF5wesKqhxWg8Hg9LVAuTWKmjHEJxTWAF8rifvyoq14VCMtYTGMRvhWnJpVL7gc",
  "key16": "XBHRzDgwkTThvG15Kb7CTU9Tyaw1GhsE5cxB8hQWzeREWxNXmEqenSn6x4t2BQ7wU7fgN3eHSH1uFj4B16fSwAW",
  "key17": "4xsvTtsjFnJcuqUtxkzokhyKntvozz7gFmo5Ge1fg7uHauq4Ri3jg3a2eaGWNuDJnyXV9CnHbm3CiQeoykf7zyyu",
  "key18": "ARkouU34AypKg1YZBGSDwNZhXxvic7Do3KtaAZgYiXDKG7YozBxvb3mM5dbk2QRQ8yCSRHP9QQdswjexGpr3BmD",
  "key19": "MiUcDMS2u1tqiLsz5bAQznaHSE2vSu2jmPgeQEvRi4C8stw8gfQdTME59SCkFYCezUN2ZU4ureAstjMx7GrLYYd",
  "key20": "5Z6gmwDzMyPQtrjsnGYWWvXpPrXN7nST9Lmsh25LTTst2D4VFPMRjCviiU74xEih9L61Xp9ejpuD2U9eGR2x1o56",
  "key21": "4VBCATWCCwEzNADzF8DLdAKYZfXUKkbTHoVjnG4UqvaCsWkPzUWpPbq7Kegf7jKW5rc8KDtM1uC2Zid4qoZbvvku",
  "key22": "2miEeGECZr8y37wMdbuB7mUQYRGFjgCuNx5HX5iyBUDTf7Srs9b3LdRmDouceV4jUDYURCkgxfjg86nuPntRVyBH",
  "key23": "3E6nZNHkQ4b8nc6NudHHsEcM6nxQFLJ3RpC92d2WPqQ3BqurXzneiEzv74o8jrqYRDuCwdaidNUdYDzqHQBVncWd",
  "key24": "SyRoCi1RthndniqdyxWvLVe4g7JWMHP8xGA2695786gAX4WoCewcNwNqZj3WnjakxHQZMZBzV2JNHYVXUz8jpH2",
  "key25": "5HrRiZA9mwbPPEuzDi5WoD5tijY8AAw6Woz8y5QV87eLngmiTMyp23cNU8xYiiGU8kqQFTgX3sRqTbfDM8uizF8M",
  "key26": "28LmXmP3T5EfE2QXnonxKxpxQWxwCXoisz4kpbtqw8pi3Kd9xhs9H4Z6NSwKEjKoH7EpFDHKFWd42Y3Dbpg6LwJa",
  "key27": "3Tcyzu3nFJxqNydvZ4vSKXiMTsokK6VRBjHXT81Hmdwcdup3LMCtfcDG7QUbYX7XXtE2gwBSLvuqcEGgLRDEXmvS",
  "key28": "QuzL2cXdVWCnwZx8gVrkf6U6QRaczNTByBCGqB9gE3FQ9x8xb36ErSqWjVDr6HwMBS58WwW12KAapTPCR1EwRPt",
  "key29": "2PYbrUJvnEkQ2XDzVkm8rk9CzEXc5VDhhu5GgvQMNFeHXNryofbRn6bNFivVUfuYxdUEUzUZURuyGFHiDdsHfQ5P",
  "key30": "3A1x46rPTgUySZCVQgxbvKrDgzsPJVWdHyamLmLe3SvSALm19QtEj95TgPFw3B7o8vytCT8kWxtxRVnrYAAeV6oD",
  "key31": "2WtpCPXQp5AojycHJ5bgQqo378bfNmjW6qPRCxv3hVH7YvzMtxkHiRmePtfE7q5wcyaUifzerYMAi6Nn9ben44vi",
  "key32": "5V5ZTrvVrMEQw73B4EDSWf4MLVBeJf3ek4rmEkezjAFSaPYrxoF6oCMvUSaPP2vr8SmDEnUbPYhmi4PeXZ9wkJVr",
  "key33": "5DwK2mvUybLDDz5kbEANVB3KY8zM8o2Sa1DojNaMa7cCfRL6StmyBd8dSfqQjGhLZ4MEKJR79GjTdozvx6fkx9Qg",
  "key34": "5mpErV7SiWmUf2vRe4PRNiNxq4mQSr8MQb6rR9q5Qp735F3UV1wWrAv2Sc85vQWdL2nSqk43x3aLmfgyvGp3DEF5",
  "key35": "2ubUEx4nQfdW8dH7GKF47Ajs62Vi4UEBVdBLHqbH2amNR9yaWSVDfaPfsZCixX7t6wKMDPQ6JzuQksYUzP8XQLZ4"
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
