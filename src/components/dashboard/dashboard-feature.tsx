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
    "3E184gthgsR3uNtNQ9EbBQ21Vbu4FGXcVYk9uNBpmFRkJgKk6UKpph74G3sXL5gcrWsLwLhkJnuZ5nYokzxVNRPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SV8Mzh2SrgnuRtfcWfR6Jbw9y5QL7MmVY9rKrA8ZtRVDxKdYTuXKPi65vpvuxmX7SPVHbiFLMYit2EMUmaXjv9w",
  "key1": "5dCRyS4xHSxtBViQFn3aiAxLQZJwgXdfLC5jwrUb9HQH4iKyNm2dpJgvxBMfTdBPSjPt3Q45JTfgrXu58tCbUFpJ",
  "key2": "21ig64TDZf1z1Z5Ezto1HodFpvm1Vz1vtwVB76RGHWNhmhNVRPXV8dbKJjSDcyd8d1sFqEqyEzuSWt6qzCpm9jUH",
  "key3": "4TeaxmL9JGHacLH3ULdzek79wefNx2fo38cCoA3FK2biGewCS2RFpMWPrtWaAiSTwdFQnJF2fPAJ1ExKETXphC83",
  "key4": "4mh8YUKdpJbfUBdxJUszL6sM3SjUpAiszoQxA5nCMsMRFZRBgnpdqXbuK9FT96tDNDXUPrWkkvDX46csmxEQ2ZoC",
  "key5": "4PD4TcTBxmspThjBucdrXewgQDNVWh8YX3Cj2fDJq4XKhPVo97RWTzY9WNkePqoiLFPFreQK8mJsmtjQw22gQXzf",
  "key6": "4WLrRQMc7iYRfdd8At9h83fzqo4BUeCXJrrKDkTpQcCR7mLU9J3mXvSfh4G8oeofyE9pUiryKSysRFwyyh223bKn",
  "key7": "xVPfjHwRcNU9tvHRJNutsaY2kE6skHopsMqCZxMoZDYdawWzsvXCArftN8TSauTFGtRAo7oKMsHSeYCT1z4g5VN",
  "key8": "5sX7xhfqtzJRXfUnXzsKmMwUWN6ca8sLkv8Gj9T6UcKuDwq9VK7dnLpY2gxR5eVrifLkmGQW3xUwwKo4EKxbLK1w",
  "key9": "3cohEaKmcYuSuMHwqbVGR4gLw1A3852nHhJVLcH7wdcAP2bQjYJq3ecA3XuAnNaqemWhsLshPU1UBYQppNk4zXGg",
  "key10": "w2sJsdFTHSbaRpNQYyB2KYyC1GdmfZ2BiEUCWjKYNLyMnbhgAsnmNDrzSo7ynq7uBfQodUJZnt9DYXZPtE6uwVH",
  "key11": "2YTVf4Ca3DGcZNe1b3tjmsGW4LSbRWmooJ3qXf4Ace684esNpuFhB485vSdXTXaFANAFPEXdrA4fAvCo22mPUw3M",
  "key12": "2cuTF7mksot7cnCbF83gmph5vjNxf1p4AJUQLdfSX7wDLH3FJFhzxtX6VBv6bpP3kdoebJo96cTeRzPZ27mw6xpt",
  "key13": "2c4rCYEMJ8DV2ShqJ3fhRQtEVQ9QPvtMmYtvfXhaMaWZ6T77Uxdg1QAjhDtsAWdnvx5gKGgjXENRD71knDoofGLf",
  "key14": "5qyepBD82yHygk1tpxSSomtNQLhNbANbL7XJJYJQMujJ4e5Bpv3BZPKUAc7twjN5kWUc3so1NGC8KVDqFPjAsNtA",
  "key15": "3F2zDdvwRFPHEU3YrEF59KS7JC7kHM2jj9XPVbWzLZ8V7zRyknqHd2pAq4ugNZby5AssEbF59WvQ3J45gtWmhdA1",
  "key16": "E21tv9v8RYsqDjT7ywDCpjRxqSWCY4WRcbBjFJGNWwa1qhNxPivtjnJJES7sbRG4Pvuw9Da7e3NrTy6rMJFeZKS",
  "key17": "4wJEGTBk6FU98Epu8WBXxjZJxvKUNBhKH8o376u4E1NvWmk28J42EAm3ddpgyP3zCpd1Laz42iMfd4uFptxxaLvd",
  "key18": "2eRj8yEDqATjFNeS3Y14QTqqEQbUe9oDZNb6thqvmKxZyWc4gUsJHEwgtudf1sehpMF3Sso8Wt9393SSVghLQvj9",
  "key19": "2sYKJYk3Z36SRdKeLG3YCkRUL4ouZ1SFnJ5TkTt2mRF9msUYTXmGcRWH86FPYMRJAzNV8k2JBa2bhwh7sRrdZo8D",
  "key20": "3RyLVauKPsAfiyvxghR7BqYk5w2hLFLQ2Xr6jULfTjGSHWfB8ms8bq84X7vRkx6ZTKXZzbLC1WhmPoB1A4Uf1N1W",
  "key21": "3BMYsQjotAgipPn9DkrXk5XGb87Y12FMXZW2S6XXD21XE5FYqQDCsJLtqu91yZDifvvYdkweHovjos1Mp7mSHRR2",
  "key22": "2YaGs4jLQ6f9qLHjfquFv4mM3W9Fxvqp7zqhYATYZVHf8TTAG65yiUCzJSXs6pUAVawwvG7tGCKdXVNa5QEfGGZq",
  "key23": "5B2Z4jKgtLXJVbAhcZdSEVAhoR5WZQXdjCV9WUDmZPmFwUfnwpvCtpGMdGjTez21zJQ3b8grgzpEEYX81Fn8aUpR",
  "key24": "4tz2EpvTL9KsQ9fUSJKnSjctCEGhGMEZDAXp6NJeJXi5gRHnAKt3CxhiUJN7zEdYfdAmBdDNT7xQ67kFuH92oEe1",
  "key25": "2mdrHzgiRpL5c7rLqLEQUaRdJsvSQpNJpoSmpPQL7dJr389iqqMEkTbGFgrrHLVa54saGJn6cPbNvNJAn8tPKMtD",
  "key26": "3Vyk9YVhnMHqVW9KnYCvBnkP7AS9pu16UCvGiq4Ac4jGRU7pGkQN5Mgnin9dV8eqnMDoTKpCTua2UEANsbhKVfoR",
  "key27": "5R65bqdWNoTc6A5SmAVsiNndiYbk1RqkSZVgtuYh1PSrmbbrF8L9FypbnXptng3poEGdozgD43Rtd3iU5YyviE1j",
  "key28": "3jMQ5m755ahxfaaMWG6rqM3ZnBKsmfEEoGfhWdVVCU3aQmk9PKjTCacXqM6kbuvk5kMk9JbP6BekxQXSVgt7b2gc",
  "key29": "t5QBeKVeL7BfXsQqLzGXPKJSKgMqvvRUizCmChAskWDx3K3ethmVR86yaD7EmkkFta82anDWee5iCLJ8igVF7aa",
  "key30": "3Lw4JADH9y33KrhAbyZUvtt8TG3BMep8sLCuSV5WwctAKp1HHHXWoxufsznqapc1u7t3LNkpJGTwHEHpU6vaKf5F",
  "key31": "55XRnHsj3mHue9V7pNXx8ZD3B754erfRApFhrR3SPGnJaakgcJWfNf9RH2UWT8eN29otUpUBAXfuBifsaQ1SjxQF"
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
