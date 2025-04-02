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
    "34f26mtu2MLxUAfHo4cgKUs7dZHKYMkbPz53xipQRu1qZvdUjyVS3DjjJDfsmrigbHuaZScrDRKAxYJJDiXi55ip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aJMPPVGzRAUvdhGo6SCQQhfHDUEmkw1kaYzDjXtKAuR5CUSZ14rGwC8HNHj7WxQsgM94mXYxPydWjLBZ1uRds7W",
  "key1": "nBDNr6FxbX7cWfMdwf1qDfM94LB1jsJQ4pAvrym1J9uDYUDgTmBnpz3RzQ37vhYfaorC2oGZKG8Y5fG9WayrVkD",
  "key2": "4pM6nA1oM8MF3XZWzdbRwsTXbyCAbCY84BaPhC1hMkzFEiHaz9N2chzFBJxjNcJchU5V95osXoT1xRP5X2gb3Hie",
  "key3": "5dAzCdjBuh45Qrgcee14vkPF72HYMTkKN8EMUN33gq4x9vv4NRCNLvwbaubxzD96x4bdwRTVdviZzM5hkq22W5Vd",
  "key4": "362RAK5oeh5LuvRGMwqaoKToSZ7R1dbjL7e9Q3NRzNAdLevmE6aSWNpERBPwHwexJ5e9FEKc7GZti3MEj2ZCrDXG",
  "key5": "4ke5GzsjKLY6fwBP6CmZzFCBpR1jvAWAbJUCn6kr1cwvU3zB6rH6eBV1SrXkhGSke3boB9j6Q1h8xztyXCpEdq5h",
  "key6": "5zpAnZPRKfUuuT7beDW3LmZmbRSvXU9LnCbZVKedZNrSPK5MPvEdhPAgAx2ZgearNJHS1TnTn8qLfoAQsNEaa1hk",
  "key7": "Ly7CGtRKenhzehd4U8gujNHfwsuidpD4dtPqdNESV7pCP7EbR4fahxzBixtziAD7UeNPqF8KBCQJ9whq2x4tzT9",
  "key8": "ve7AqiwdV9QwQPcZUxcYu612eXwb9hXNRwA5CWZEyFTzjyrD1wmypJ2u3rLEcefRBecfi2wsSVgWDWgcwwjpqyV",
  "key9": "32MLtNAoghdeWrBEugqrxFDHmpqwicUZcBRsNhMpaidskvG5gCiWpTX3beTfNDZSbwRTjn9ALNdBiHfBx1MbvBYJ",
  "key10": "5ZQfT2DYKNAvSQYG4UGowXn5gVDzTCwU5K4rq7VMsEQ76JJa46BmBUV3SbikMijQXK75Vb4MSVMqys34nxza64XE",
  "key11": "4Yq5TWtDNiEV3ZEXTw6fELJThnjJhSjQM1SYtBmU3kGfAx1V7emiSD6ucfAjZb6HFGasJDDKrHem28NX5CodWnBt",
  "key12": "3apKX5TgK7AZrkVxUVCfADrVZ2YpYrkmy2em3QohWmm9PPbagggZ7toFRwvKp59XcH5WUQQLbhFkXsPzgpogbfGf",
  "key13": "2C721XvX8sJm3AZBYJHEw4fhZAA9mGu87wGhvp3CPTXcFkkt1kTY5mq9TyEwX7xQrjU3jFRezxy88TCbDJWCBru3",
  "key14": "5t7wzk56EwBKY3abzFWzXG8cVNgQF1kwWyWc1jeCLR1i9sN7ZTUSCzXYwcci9sCr3jSUaFH24Jy1keoExBoQJBVU",
  "key15": "4dUuw41WN9DBPZV9aDJxmyEV1djPdaKMksajStVf9q9JQJux5H3CkGUUdw9HPbatt5cN1gULeQ9oCVgCmR7DHj5W",
  "key16": "WgbR1vV49TCRD1LiG7K6ALDXB4zeiuWp6ko7JuFu2E9Z4XBQXCGPQbeG9vkHGwZ4kqFfdW5GrDH4xDXNquRzW2y",
  "key17": "HxorZwVXPyHqkbAX1b2Lyy2GeiNWV4595Mwoa6kGUgauU98tYTa6LkkqePgStLaPZbc97YvXJ5jwdde9iuzXFAc",
  "key18": "5UgX9okcrPmJmnumZzfGnagdSMbLktMNNy9CaheiAwovyvqu8jeBoTk4jkAmM4PjBhksc65HUxLF1eNUkt1DFiJZ",
  "key19": "36jwmyvJiqpbei56ABqFxvQvP26Pt4mTfMjJSxKL4TNwfqHzLaAx755uYLUMBpdvgGfWDscuhE8bjmwimRf7c1eQ",
  "key20": "1Zbn3jSuw3vpSYazjJavDwcgJjkpXkeK71ennALGXtW6BsT2uMksPwRyfoj48RgczfC4E5PkaC1aQSzr9yRuXcV",
  "key21": "2fQ6osAAhqTA5LMedVeGzFZcKgTuTmNHuMUBRBsZ8ViLMJCRpu7H8KzVsrq3gGdRCCvDNpagUosdP2d9ETe2wmvA",
  "key22": "HcFAY4sSGMVDW5YZJVBgPi9WYpdwJos469XFPqWyVdPytRBPLDQLfUKcSpPmD55NJx2wbWmyPBtnhreAbjDjqnb",
  "key23": "5Hn91duPCqZ9atnHjBov9nsQYCqQ1qc8hz6QrDv5fHwwgXGzQmGA7uzK9rEuFDW3UE5MRKwwrNziCuae2wnossQJ",
  "key24": "4K5KMeaWnhk1asPZGVS16i7atkQ8VavZqo3fxoguwc1dApiJL5ms2saGuQMSZAcx7GtB2BvHqtpiqLrh8WSjetKw",
  "key25": "5KrYx4VeJsbAUkYagviMQHU1xLYp5fpZrBEB5worVFHkpuAN47RQtSzBvT7jQkjSwadyrcs78x99V37PC2YfWjFQ"
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
