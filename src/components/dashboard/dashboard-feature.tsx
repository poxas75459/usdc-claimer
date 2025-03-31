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
    "4ZZGD2MYbkCrN3oiVtoYCHGMdzc9nA6crHKARgAEzyb22rqzxxAU2QWWqCvj7JWGSNJuaSTjoMyMxEuEFSTaoank"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GT2Pi7nPU48Ny1jNSeuDHBiDVR66hc6Ytqw3aZtmY5Czce2YogoTRL9P5h7bASHCaE5q2struuBduxGvUhUyKY4",
  "key1": "hT5JuJ1YAkrwYZk6Q8bymuYQtv4ogP3Kkv4R73ZvAZjutqhUSrXGoxMmopEjWaoLNyUnkWV6VTbU9cXqu7DvHy9",
  "key2": "4BpZ4z5BukUTsBFybcL5uymiywLPEqoDnEqoHi2JQapYtZVMww2NyB1KCZCirbg7n96DNryaLugNu4PC4VsFjSBh",
  "key3": "3dxVbUr7VQhj7XpHz2q16PRiZx1dfqoyxCcnNndo55fXsdriBkkypWVjPkj2o4hBg61ViWqNdH1WYQn4AmWtfmoY",
  "key4": "QP27x6M5qqKhLmbbmjfVWQ6ByD5Z3vw1JsnUF8pa2ZJB1JzFJ49HtcZBahW6N9nsAXLsvaWaxN3gk3roWcE1UxY",
  "key5": "u1qevXkzYBmkEQ5aoaqUbT8wpVUmDCtJUD89kS6kYsaNfXpm31cZsbNDtQxTRFF1ny7puzxvsCfT2D6xiP6e2Yx",
  "key6": "56ajCCX7VE1pQa5x5rq5wkwBHMf3cTDPoUnUuBb6iCAhHmXGQYAwqDWmESTnEtuhV7LRDU3RiPXVzQDh1CszftDL",
  "key7": "2C9JzYux9KkPQxU8wWDJzMQMLF2EZzo8yqck34qLvjSt5DYoCjwx5RhyC68PmGnk1GNP2b3DNero6erVydscGMq",
  "key8": "g1veQncLb2YCBwqFDbZVy7wfngWHcD6gcdWu4yS6Wwao8QhVpCWzZUKmN9LAfaoZccdFDQN87nM1TKY9XgSFZqX",
  "key9": "4rD64jgPoS1J2SeAqf6VGnaqb1agFtW8mFpudSxbtY5sZZDekjTwQBLaLdzPAxEsFsKsS3k1DGq4EqedxNVPJcRh",
  "key10": "5VBcmmnMZBWBn39cSaFDSgto1xPZFFp714BwCbFx7YvN8aCenKq13NCL7hWjfMBqTBVG5BUuEwCsZNRWNtLZv4JJ",
  "key11": "3eYW5i5yPFsJRv5ucq9koLYmfWTzqRHkzBTdgUCLhpBRzTJkJWxYn8S2VfAxE6H8fZUDNjtS7mKtWhL4h6FafHDu",
  "key12": "2WbdVg5aHhWCY4pWk1YGpTP6Xj2ngMbdgAftrT7S5mUzCgSpnjJytk9At1qvQb1hG366oTwgcqu16TBW9zBuVKaw",
  "key13": "K2NXA5CqoZjEENZVr5msTr8uEX85HBsSV7S9Edn7ZF3LbcxFNvk2VhUSLBrir7C3EQTyuRpknok5X7h84hfwGhq",
  "key14": "4APEV3Sb8ANCNUmgiKixvG5Hu8kNheGJ6Sv9ejZSyuc1TNb2DaBkNNhZyQY7pvvUTDm3at1mbVk1qdTzy5uoLq1t",
  "key15": "29VgEDTzehFFoVeEo2Qoq4CunpgsVkgaNMZvpE28i7jZ5upFUNhvARR7QE8pBN95U51ec8M8v1T3CxPtbMxWHedm",
  "key16": "5ghsajL3HnU4QobhV7qY5mS5nhPVtZQQxjNSE6dSFWFyW4YKhg4vgBXv48V1AZqeioTr6nwmXWaK3Ju8dJVmGRJ9",
  "key17": "C2z5TZGS6Nq7hcBhQqfQUEtxaqQnRW5JxEP4PM64gp8edFVCtmBxGYB42bTuu9pqDzejk1foTZy9mDwiV6gf8sB",
  "key18": "5R7F9xjVZoA7X7BFbrnriURqtrPjjk5A3L7mek5zcLbgzeGmq2yAkmLvLWRMcBVu89UA5Zp6xFmNj9tch7s7HYgC",
  "key19": "5VPnzeLnLQe7uFTYf2d13cErn5NVFE2jBR7HHWyXe2L1tRoZqTic1t4rUWH3Dn9vkGuff7x8AS2YAe8bUd1UTt27",
  "key20": "67i6w8he7aQZhtWFPpM9EqjJ3bkGkdThRkzds1a8N1WSWhFR7DEay9MULCqtFUYPV1Bph9HExD1EF57Fj1bFJvvR",
  "key21": "3ZSH8xYHKpEDkKeefwFYVpriBmGDsLKuiUaE84aHjD9uXuzsqaXGB2fdzNRQ9vr6wtSAgi5BA51y6to1fAmZ1d6B",
  "key22": "3pcrovhHTweF4vmFZPwLKk8RjK8y7pzfwBcJZ1RBSeVcqqnrwRX3Vt6DypuEVckDsUMBr31QVTBfpfPTedfstZQQ",
  "key23": "3xXaAWUSZhuZXgsib7runLSHtfPEtRXWeLo86nhVwkFPg8dpSwSh4hU8BtjEF59KsgAGYFzpmyFnuzsEQhyvqLca",
  "key24": "5C935xPwFMkWwzdFMckSym1CvbqbV4Q9o61Wbz6KPP8HD2AhfFLz5cYbSmewehm8KckACqvJhDJ8QyKGW7Qv9Yim",
  "key25": "4KfRpi3p2p2StoNP1hLZBC4tiqsroSHwMvR6baqnfrUgFEsoFaL5fScKHFAtRJisbchfjNYXv4frRbgQ7WqQekv3",
  "key26": "2FBUGH3VpF7C7Swsgv3Q6YDrqzQ8LBxrCAzVo4n1jSCFGFPaEumpJg4RucppVwLGZLHVnymcVhC97dErP9WDCNEB",
  "key27": "2rt4CiMGX6xauWSQxAHBmFm83yPNax9Dx81YTWuNvfpnQZu5x3brXETUnDPDWVEQPs9Ek2nfEJKuTJdNLKGffsSv",
  "key28": "4Zeh3kXid1EhvpxGAjfxymFMA1zaXog51zCDz4AaomG5PxtPN5NgFM1EB2hizHJXJzMV8YwGUeAXnAZ6CXUYUeXz",
  "key29": "66UaA4Qg8X8rTuF3xFaxDVCz1UGQey9VWyCozmPRKBwjnkSC4jXNVUWnGbt8mXx96AMw7xAdodpHqFt8bRCW9Jne"
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
