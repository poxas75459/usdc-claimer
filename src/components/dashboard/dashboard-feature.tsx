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
    "35MSKpiZKMmYpyvpqgmjN5igj3ur7VmFAxHrrhx2Gi9UUYh6jT1XPhxrZ1LRqbAnn9SkkgX8NEFfHRhchQEXWr9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4evbmiQXXYy3VGraH3YLghqZXLPMRpQz6NcTfQgUxWQ4938UdgBdzxhiHx6iNir7CUEZKEwAiAaeKxStYKBoEHb6",
  "key1": "tE1kvk9uiPVhjFg6XBRfPWq9ziZjzMkSXtCfvJPkf5SaeuKwkgmPtECPTYSqt2YJ87CkRHY7QmAHbye2wQUXo49",
  "key2": "pwywXz45o2ioi1DXVo848Zzzng8uxKxm3ZbX84KrJC4VePgUdqGkTqEvWH5e3aj6D7GS7Nrs7TA4jR3nZmBJRZ5",
  "key3": "4vhVWWxeKuMs86cpuqXKQFTh3NDNoQ1tJsTkdPr5hrWEQapQFJC2ZDLoYLZojgCQGkw41h2A1433bruJ39UfzvwD",
  "key4": "5RztYWHJBYWZbCYoyj82HWewhpD3YbVYPeFdyYHRa9iWjr8aKyWe42qBgb1ffPgGiS8ihvh6jTVTebJvC5WXGc9o",
  "key5": "wuRdeJnaNmyVXPeKSNjzrN2QiYnLuQZzgZQDrnnGkm1xF4wvq2h31QjHxxrmJwphA4mschZsBWX1nk9kKz7QwVu",
  "key6": "5vmzcq7xJHrkMfcqbiSVEyTksqygZS3z1mZ9dcgTfKU2o2oiaskr7MB5e6wpaCVN5G45wpJs6UzybApqBrPXHydF",
  "key7": "423Ci2si2d24Ur4Ayv3KnCBPtS7QDg54qFAQXwzUU6HiXDp4aU2dV17zCvKf2fg4Ep8dYL8YmSTJRNa7oLawASyx",
  "key8": "4RDtChYD5avRRcMCwNDW6p5nG2S7L7rRTYVzhA6xF1YcYe1KvaRBQhYNqghCvDGSgK6yzBkuvg9vLJ6TSY1W9tb7",
  "key9": "3TEs5o1VYPCbdGgEgTZizvQQBTvvDgbRESt8FHEf6jtCXHpn7n6ehTNMTziWVuBvXfxza5PRtQZpzxEYZ5APQsxt",
  "key10": "4vjMZKVbj8FybydsrFFaSe2ELDLRvZQs7V6gWmhwc2sxZPBFtc1BU8MA6HqyugygcNLfkrxZ8VTqwvessHYfMae7",
  "key11": "3PXK8tGjSAiXQ1rce6bHgdWzhkWmtPW7F7V3e3TRPwnobLmg1ze4ySxdWaP62JY14MeBdgYHe3JB3hzEqYwZPPrM",
  "key12": "497jDqATYPnceYCM9HMTLfCZnkUHmD5XbvMRzWCMMxERrWHGA6igNtjFafDGLtwYAaA2gg1xiFSfAJQPoKmBJGf9",
  "key13": "3hdVQWuQJ7q5jZrPJvRPS8VtiQCrDqqT5KX96Stza6cQooL5vrm3YaaBwEvvvHQdrCdfev2krry1f4NnTV1a21UK",
  "key14": "2aEPKausjBd7hMZDLjjErt35qHpdKrGZSKRyXJhrdGW6X4zcFh9YYdneNoHRxJrZ1oiL1GmyDZ8CkhYSnZGfoVX9",
  "key15": "2oKa419j7vC6FeqcKdkyuSYgMjajFpg4ZxkrnedU6zqdxwFeA7bK8EX1t7gHEJN1Qr9gJ7ir6iWeg1dzLHvD8meG",
  "key16": "4Fb4ZxGFevqMhp7BW8831CauYDQJkNEoRHhMkEhW7FWX3HVTangpYGohYsSqJM9qgpaUZJuCmHqUKKwXNEddxqCv",
  "key17": "NY7vNHij7pAnchfdHWqGt8MUK45GF43UvjvZA78cWweXRZ5Xq6AgomSNc7ABZqCrUmVwr5u4qfbJ2UTjRG9W59e",
  "key18": "65EaU3QpStJFppzBCzn7wthoPSmgwanbexdTcNAWiufAtfsRaD4boDvP5Zi7BB8WBpS3crm2p7vMcESLTVRzY4Uz",
  "key19": "2yoGQpzeeMPufamPBQZv97c6xjLYiWeQTrQFD2sdMZoQgfuG93UWScXd5mHPc6TRVdJmSmvyHdaGopmn1j1ptBhJ",
  "key20": "5816hJhWUQnL4CNxcQ3TpHFb6JCThaeD1KqSDKwCmWc65XahVwaZfekipYnxkABtxD93kXDc68HF4vMd2nFpp8pC",
  "key21": "2XPNCEXemMM6PwhKsS3EhynAicoyj3dRu4zAWeixS6u5yBDF4CwXiitg82qdiezuKB3AS2fiGYfmAVdrVtWq3trr",
  "key22": "5zMx6WUH9HZXHEPjhbPJTV8oyVqFpL1tafcDJVJS52dbvnde3YfZ2s1KGATwG44hqgrcGqmWRQ9z2x9hkhomt2xu",
  "key23": "3iBWFU3kz5mdhvbAnoDPPP95eZSrGkhNKjPfNhVMekL7rYdVbxMqDJALQCBWJ5Hsr43MvCbANtXSdLSv36LQ1vYr",
  "key24": "5ANZM6CUKWFJY1uYS6jBS3Z3J4a3YBB4b5BqEfUKH2KB2kSeVQaazMrm7AbBkCtBv4BAswhyFMQNxCuLjMHP9LAd",
  "key25": "63XraYG7GTpaQgcNN6g5DPbpyXpfJjQob2TTZqQ292JugjKn6G15gVVVoRxCLzFF9Sk6qEaXbpvKhdqL76ata934"
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
