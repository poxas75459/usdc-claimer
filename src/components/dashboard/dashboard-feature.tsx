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
    "3ECXctu3jsWLivSphH5bdYYU3JcS2L8UVuPsvWz6wkRomFsAdyA3Tvb7qQYtdoWbpTKkr4n1VBRTFBmpFW8kvREK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RYNh8a5W8jfX7PyL1nHaA1h6xEATttyj16uvjLPCnNrdza8sckXgM5dKuKBuduPTT6rTTYeFimuZmX7NjScoSjQ",
  "key1": "DVL1yYbm2rYRhiC3JJ5tMTz17ZstotTZurEyNMA1zy8TDXR3dWrDu27fKdZrMbLqy2StBbbuiPLkZaDCvkKWwmB",
  "key2": "64TviNPLk6PFrTEFXeUoWxSWMAbtVVbv3BazFM65q6xCmxde8rHMfF2vQdK9et8zHGNmBr7ykBbMCwY5RLQxrcZn",
  "key3": "4NATDh4NcoHo6HVwSBmBMZugNzLVaBYCKULBQGtbaiZ4Fh8HDVt1g6NJX4JkZJFVvfpRL5iShY3NtYjHBJGEX9Mh",
  "key4": "4kqAXUNc4MWhRXdcFfcZtEcdxNfUdtrfwhYz3SDKm1cojx8JvzqGzPUEv377bZnnFynJkCm46WSqjZqUT72dmXFz",
  "key5": "2WQD39pdSMA4kjtPiezdEvMvFM6YgUA6p37TtmjoqspDACULEpZJaGMtdam3BNQNZhzLcAddxgT2CivsRRNmag2k",
  "key6": "tdmVLGeUcqQz9kSuG7YRZrqPAat8Utyeb5ugs9ia73M2enTY2pRMNyqtmvvysNkNUCLnnbwbQZx9SF3zsPKrxXj",
  "key7": "k9LLL8KZkiPcwXYNPZwVYgTRhYqR1iTBNQGLdJS72QR4KMJmbtuhWNbFVc8PUvPtY76tanbUBD5i4fBFsj77bq7",
  "key8": "4uaWPKyQ42Rqd2RjikYvGSHwaDqvU6k465rycn9qRS4arRxxHAWDnofqSwL91omruSMkQywGEBNn6hj9F8wBvZ4y",
  "key9": "2gVt5kuEHW3sftaVdAttBEGttMN6DZiSSqPhZkk5FuAiMwSoubmCthwxszD4xwymYLQoYZFUkwrc5WirTtfoRExR",
  "key10": "Z621aZGLoCBtvLQbJsbhwzFgAor4jXFhamjpPdHdmhNfeFwWwqCGxiKsoPnVUxykCk33r21yxzux6V1MUXCLWmK",
  "key11": "5gkGjReyzFP1GyLq9MaEwRJjvT9DBV9UbHV7bNEbkHt4kYYVMnBpV9SvbGn5JwP8wxjkMKN61aGM6wbkqA73HQQJ",
  "key12": "37TwAWqRb1Gwt1Ns7quXcNFpJ1jW63TDvYYd4EyhaYVywV4WGDQZ4KjiMQjywEEskiDxQfdigHXGD2kfHv1fp2La",
  "key13": "N3jFGcgcESmiqWaNYV27BivsMYiHUY4F1Vi7EyaeHeqUNx8bW4KLgo672ETB68JGKkiYqKJ3WSJYBzUywBHEbp1",
  "key14": "5egA6sq4Js2TwfBC9v4CmwPTp2CsBFnYC7BrZucgKAwm6GpM2mT6ZAKxvQgEVPAZePGEYJgPozi9xv1ttQSZy2oA",
  "key15": "4RkA9KfQ2kE1upc8anPrubh53v1ewHJM8oJRmAoTm95xvRosHhTTMmtQQeYVtXrXgxgVJPfTnF8t7GicZCLcHDaB",
  "key16": "2j5GVjC6RvAZgjY4tENoKZ3izmLiMVR6rSqLVDtSdUNxmP9YwHjEQGS8GkJZvcVgq3CHsaTJgsZH29EQt5tn4e97",
  "key17": "3UAFq3gqbizQAZjLRKvM9KP8KP5DQoF7Ppo44wUXYbmMhBczqwZsd6CVYPbbuUxjdkHNhiJz2sMnNG29BAb6sHUm",
  "key18": "TfTtJk64ia5icboabitYqTuNnm2PwRENnSxaaKuetBfE3gLMmYzUrZN2BSPPc6WAEvcPbbt77kRHZJ9XjoHsLY4",
  "key19": "4z1de5g6gATb7vk62MA29GmRkKabrLCZQZ3JMBk6Sf2Ur3xsoWBqWDRv83nMd3vdAAeKnzftG3CquGXvzsW6S1PH",
  "key20": "3646Wx6Z8CgsQ4Jv59rz4zzDjytFNqAbdawx9zp8mCsNpJ6RYcLFsAVt3uuL1s9uktuiCrmAb9twrE9aL8SUupq",
  "key21": "3Ji3cMZnCEaYavW6eR2g84KufareKCXryPUuFqbse1o5JQu6ZXz5c9VDEcheNiRtwi93pqB9LW2UP9rt6u12BGxL",
  "key22": "5vTykwh2kq7q3Qv2rmR2XSsap2SVfHWvAtH38F1PQMCfJ545z3UqLZoEptVKyL8XK2xw15SBdMXVewinjFUztBRy",
  "key23": "2ENdCPHpggTPmc4eYbJ1CdqFWDAJjMBHiJU1WtYVAt8LqYV2eNrFuNB3dCGvSvKcyboYiMNBUfNYsuP31yeiFK6P",
  "key24": "1Xo3dWiC6eB9Xq8N9Srzt2F3Wm7Bx5MVQbM67uzhDW2ZqhMvcFYoTu6jiR8mKVabKTMuuVqtkTxPCbRR6PnKpGf",
  "key25": "UqB2eZMxZpJU2a6AGJcEUvCXstWTacRtbN5ip9sy5aarHWCAVpYuEERxsQ1MAH8qEZZdS5jMoTugco9VLQ9mjfi",
  "key26": "2yh8Cwof8jtPLYi1kp7Q8MYoPQkqkYAmD688YUs5ZRkN6M3GTayjhwQRXhMAzFUkcq8d2mvgu75kjnEDxay2vz5j",
  "key27": "3iLeCxaJxLx1G7S3BQXgPXw9Et12EKe4S3LPz1KBHniJNfLoDzgwZAoqB6HLZfMRQGGCU8CXLpzT1TZ6v4sUyWkK",
  "key28": "59MA6Do2N7TFXRMHV1FAWDFUVz3vLqs9eH8TF4Jsrm758y9DpCoSV72otyUwc7j4qEC56YaWxsenKiWwwRiRPFrX",
  "key29": "4DHFrKg3WF13RFrVj8okCJvBGyHBbbP24WakrFbBY8NjiSxujaJNKvjVmGUJLjhmYXHiK5Xs6sq1JYNN8gJNSQQc",
  "key30": "5kRNq1bLyJAY4o99bXwJXYKWsXe8TBjVG7zis8xYJBFqGChjGEMFBn8YCfysEBsQ4ptMWmjutRsqcaLim2RfKFP6",
  "key31": "3Mm8LdgaY84w1N9yxLpoRsBoDqzQBryCK9z9pnG9GRBB1YVMhY6BwrpQKJHfmefLyJcfrSmUmPT6xAbAM47LC6p9"
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
