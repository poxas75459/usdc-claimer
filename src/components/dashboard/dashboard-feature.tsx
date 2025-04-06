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
    "5QkKncuJmFmPWgRzVrXENqNehRpkfmG2dZoWmkvMJvPuhynVXwDCU6KPDVKF95mb635RwhCXuiT7GTEAjBLudhqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xBoNxarxctyjmobghzqT7taWTHnH4yrLSC5xXLMx4JxwFg6iyzZghpctgZpwWhkMayxHH3DiEdphtRvwLfoeZJn",
  "key1": "4VmY1cPLk1MQLRxNsxnpR4WquNPwUiaJHteGp39kThtvvXKdXY49ji51ugDHuQy4TkXiG9WDD5mf5qo343aihcVU",
  "key2": "4V9XwFZ3G3kZb9JjzxZyk5HEM3pBCnzLkbipJyJZgt7ctUacN5Pi1LpzPMJriSvf6vtatU81KbAUpEXa9v3NRHfp",
  "key3": "4N21Vdeh7ijKhXmg5fnwvGgLHm1bcg8D92vKYvfatL49ZoTYQCJnXy6snAHG62c6kFuR3A3WuTWbXzp3FzH6W7nX",
  "key4": "2vcn2np9jYDVuEB3DdMdseXxc7NMkMjiVLpSCDrPh6oz1ys2yHNFWzZXY4b1Etqf3PidWQSNhKSKE2zRQMxXipHz",
  "key5": "5GqhgH4D939i2mzZd8DR43Sj7PKGBSWm1LZ3VgYc7sWVXRoSYLcjSCRZuDQoqurHvyzJVhGShgJs8AkDweCqPAiR",
  "key6": "5sGXJV1bMP5MBNKodgPj68CrxkzjRzjQYF2bfGephvzw8FHYECsjwqWDqgKPnKBow2yjBAvqLFcRnoSKmGG6En6Y",
  "key7": "5wBfn5eHZGSVT2qfx6Yit1fEnioemrdeqW7QfwSa887s5eALYNc8XfeZHL3JXasXRpZkfUgngvGx8fYYfRQqUzeF",
  "key8": "oejneZrimBpmYQH5aUga5KpMhKDh9qSV4ipLdMHNvzBq7QgeizXVBxYN14DnDpKkeTJ6hi7q8SYUUAagUnbTifn",
  "key9": "4r4UnuWpz62xs6138j2jCA1nvT9BKTUPfB7f1n2hfj1FPQ4FmxZPpHHW7YZ5yEnSMBzHVGfrvPUSPHSXtLeJVt5o",
  "key10": "28oxCLsPBVZoRoszU7P6zXFTmj5HmVrwY8DY6p23bMZ4QfsUYgriBPpgwjeuBw5DGe4bQkV8zxPtonqYczwdTwJB",
  "key11": "4BhkErh7PT2c3NUGNnYAGF19X8WLcey8SMyZH8LQphG4YN9qotSjFAsKSe8fs7N57kYNzH4mvGkCqaEEkiQcakHY",
  "key12": "4ttvuaTp7fMQvQAE3UPbzAtnYWgVo9vfagjuhS9GAfjpSB9T7WAGZJujUnGLE2mXPSBjNVEqiApTNhdF2P4fU5rQ",
  "key13": "51q4wz1F2Uny9nRk38xTTgmHMCPeefh4aPPqUoqoGhnmaGYoW13TS9twixJ7uBEz4pB9bmx8DwPJa74ZRRC5434N",
  "key14": "19BSzF6vw6MiJAwcWYKmo3W9SwavQZahrcWwc1ZQgYEVzTcXw7n4sp1cj6Xp1DpTBfgjAajPzGJzPHxnQXzhytW",
  "key15": "4v7w5GQsFazt2j1KJjE7nyBdt2ZMaUEFPdGyBj6caBvsz1qcSgn5FmG85wvQq4ABK3wjeXMosrx1N18pY4Noj3Dy",
  "key16": "3ebZ7LcuRoJTVBcZQVbPWuwKuodS7CcWTfWvcy6o3cNh6NLmyVoTvWsF8V1giVALpEqvjY66yctrytJWJkZi5ZKE",
  "key17": "Ngt5nWc36oyCuqpCVxXoCbxourXi2rxPQbtViacYxrvRSsDLWcZRpNogtQ9w7eAeQX2xApcNoSA5Fj4hKFoCZuo",
  "key18": "quag1apcx78N1jW6xZtoPYuo5zGsmYvjLEQu4YzgfhVwgL1KppxV4z6mnF3p4SaVHivtXiaGx2K2QGsoDUChpns",
  "key19": "2Xe76G59ZD5gS177qNWztJwL6jGC1jJydG3pAiMegacT9JMidSj6S2SszWWtqa4oEBAnrVDysvq7X3QVpUkEGi5Y",
  "key20": "4XY6A3EYANrPUgTQCQjTZWJUKLFYQPzHkanAMeK8NgTvarAQH9p6VvuQmgbkJDRrHDVJKCpbYpnmFzVaZhkmBuaL",
  "key21": "oHvUA6ZeFwXoPvN6FC5CjtKKPFF6tMkjKtqPQEEoU2RuFejRrKdPSKFJAU8AZCD5iXu8rqAuMNyt9Pc35YPa9yW",
  "key22": "57sN5A7TKfC9CDDUQLy2Uqh9MoWHx9KB2u8MeoAmtFMVwPdS5q6XbTsWHjdGJf6U1LUYAGipd9HsRFMWtt66qK4o",
  "key23": "2TR6WFzrErX12L2p3MYawFE6UucyaBkhTVC8DZGwdDQGvceWZ51RwuMDYCPAizFduvDc27CJjvD2213ocGXKHBXb",
  "key24": "53dbPoE8gz4ybq6gwTuezpnREJ3qVg7m7D33B6vrbvQTLqqpoVycomny7YNci9YRvrAhKQiAvE8G6ZbTy3JugSEV",
  "key25": "4Tg7h8mg3scxvpKfq1bvB5BEfD1hX5k78KiPuite4XjpsNtRLnPxJxjZckAEq3tbKEZzERVGBshn1Eadts5kLnBf",
  "key26": "4ioxKZFNZikWJfLAcKADRPWmtDT7sKA1xeAPetUYRoJ4TPLxMKj5urCQ6hCAGHrRFjYdToJoV9vUUP53pTXLJ2EN",
  "key27": "65MVuEWUUmy3DrNWoCbEfCA3aQs63ekhxQ36NxhtwQoqe6eXu39QHQ7f6GkrxwZTbVhWdBNoKe3oHDv4gRzKjiLa",
  "key28": "4LAW6MXWTyxhJEfc8SBuaBVt1WUa9zDgpF9JeisXScyr7JWor4vENEfLXJiUPtRSrqVR62cVzkC73HaVdsFf2jHm"
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
