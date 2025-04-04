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
    "2ncvNoaebBorP2X8h2YXjMbXSh4qVNVBA4uJYmi4U5Bq7WVcLUR9QeLL4miY1oQtRoSuHAuKy3yPdoxNPNwFWn1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AZxAkMqA6fSvxbsY6aAr2JjbcJfS5C6NwUMHc4skjrL3RdiA7gKiQQCu5qCe1D6WS8F61AJdvLpCpbhyXBNZNLF",
  "key1": "2DYp6BuTT8JAvzgCU2xwDY9HzwnY2hJYrGY47tqtJjsDEJp5DjzCZxu1x1sRq4hUtCzciCdRCJb8ahnmGK4cin1",
  "key2": "4K9LjREebjTJLznrD4wMtMZScQggjHcVqYA83vkfQm957iTEHgpwG2gmpwtnKNyZiQa4vRp94T4jdDoJ1fV9woY1",
  "key3": "GzY1C7TfzRrxaYNcpWnSERieoCeaESCzce6ygjTi5hTQTZvetAJDyK8jT47fTU6YDL2WxQPvJrCCut65Tivf6rA",
  "key4": "4qg252Aco9mdGZwnDL8nejMSH49mA52wxWbHrgze7YcHbTSZD7pTS2LzFEAJpXdhn1FKdvdf9EmgP4cyLXvkpat2",
  "key5": "4m7dT6dMC8gD9U2NUvSCm9QbDLR7pggZEJw1cDSXb3ttFUV8JbAq3oshxCee73g35hGwYy9i4R3ci2LJooSr5w9E",
  "key6": "tctq9TUV6qK2xao6YrLVNgeTjehPqrmPyD55RZny59wzFaV1asafYXUrbJUUAi6RsFho5CiJS5jUA1XsV8wYhVS",
  "key7": "61H635C2LTQ4cyGdt4F7z9poHrMAc6fQearHDogJdxqKvtAsBgUumnhJBU3EYNZcuRyDP8m3ApmArmJoiDEX8ugg",
  "key8": "4SEdoPPtKeT9HTBU2TipH6TfP79oL7ocs5ZqXwHXpbthmTkej1BTG2middR3WdUHiAku1rnbz9gjCcsjGsciJ9ND",
  "key9": "4giNVgt7zx2ceXQkujWyz1ySX5kcDCgPVHtfe4VCjrNDZsNi8mB8PJyK9T4H1ygzNZ16pNd4BStFAjrEUNVxWn88",
  "key10": "3xy5Wk329s91y4aUpRRpndz6qT9EjaoozsLdMQ27nq7S368AKjFSSRLUQhkNkYCZHR4XtjxoimMbgLoAF4nxcgTX",
  "key11": "2w5tyrfhXz6w8KzubUUmb8d2uhU3ibzrdspdR91EMgBYyfHGsygMM5gm6EVjK4E1QXe62FVLR57tCqpJJ5wXqabx",
  "key12": "5YnzMFUCvFLP1LJ3NjKtuHruXMpxXRSPGukS94apUMJx3BmaJLXeVZiirdgug8frqw7ykh615rpisSfBxwJpdYqU",
  "key13": "4br9TcdgEeJD8fHtLrJL36Fso7eQFsYUY6tme492eaN9dUCm1exnk8r6YB3AAiDKVgESafXdvFCpNWEgAppbVsLd",
  "key14": "4eyCeABtDqCXD52X14TeH64UKNbnuBN5q4ohNeoDoHMsmfBqdFmi6RzDnnqQNtPqBxwhEDLcGkaGQzjxVE143x8p",
  "key15": "5AF16AyryW8SjqEDWZJK6zZTCFEmV7hN7AP6FXH38xksN4mw8q2X2yvV8346gRXkCRqHWzpU52ADY2mnkgpRvCk8",
  "key16": "MU4bWoQ3N34N5aefRz8ttnSy4rTpjmxpXT8YhVMKSX5P9hiruHCDTK8kbmfg1X798AhgUmpUbgHAatjjngxCqKs",
  "key17": "413ZAF8AewVAYu2pNvMfnzq29JkNKMDxGWmJamhpbVzLYLTVo9oytnsTiV6CX9T1NGJ9pbkqcA5T7fbbfmhc2JEe",
  "key18": "52ccqTE22Db1rztKFbKGdkeZ1wsZ9JfM3jxb3rFTK8T2SzBBSrHpBbRvwV5jH6Z15QMUDHMtX15mNLDYjYQZLXCX",
  "key19": "5iGepFuJRnFwQqG4pd7ERd2ty5d4pn8RfaJK1d7QhCg9ayQhHSAwGKP8pCEbwxDHddeV3zfSqbHEAbDqC5NmXKnD",
  "key20": "58HnDaSg11V2fiZHRrfsqNSbpgGNiq2uMNHFsBzAQNHJCdEmMh14sPcrFhg36KMfTnHZXFmxjbzZKPmsSsiXAJof",
  "key21": "3gyzxGKwrpvTwncaxwvfQ9UunMSogqTHzmbX8Txf68iZiwKxRBPJje1v4HFWjJZBPWRmegfES3yn8xfSVHjUuSKB",
  "key22": "2Vh89b122yneuVaru7FH5zdRtaHTiBy9KppGcZ3CpE1RyDKkokQ8rmJQXUyUTEYCTwhbbrGdudWYt57HrWCNh68R",
  "key23": "BLJxZKeJwjkSsZCmDa5Wfb4PtZhSFFQC97MqKHEtD3dZQhNdFcdEqdUXee2sLwo7X6KyVLmyHyjfvbFXVww9fri",
  "key24": "2sCJxovNK1VR5yafFJvRwyEJDkWr4CFDyUuSL8dj8RnRnNSTqJgHpozkNhiMFvrD3jN5VDhNfsWKdMuWC7uS9PsU"
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
