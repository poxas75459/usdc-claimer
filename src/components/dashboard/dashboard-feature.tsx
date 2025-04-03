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
    "4Byx6R7zodkbk5o6UNisN2cNQESdiv48TE4LfUzBqS8c4mNuMZVJeBLUDiS6sarrZueABun3rRgwoHGunLY3G3c1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rEXY42a3CQabqvhdFLr5Dqdp22aktA45cDr5siAV2mxzyD7T5xjLYHkh7x9fUw5XN5N3FHdYmtZReSSAQmRSHAk",
  "key1": "3s627QrqecjuBxH6N7nVjDNsS3okD61EL6ncBVQ9F8P9savYDdSoPjBH84sfZoFNQg5EwWwihK9RxoG4icvrZNKz",
  "key2": "2KmUYNT6LUDefFkjbbJK6yrmaHwEGQfStWDEdKPQ8agSNCWPEF8qW1pQdH761biYZmMwEGFEFotxTozStrbfZB6Y",
  "key3": "5wMT1EM6xgKEdPCQfDhSVimdbvySaHDhxAijGXWA1GvRESUPm7UZTmU38rB224JdsqjoFygHo5nv1FF72eUa9BEY",
  "key4": "5jpGMqN5F5HSC5W9d8MhCpaUDDFKPKfQYyiKyQP71TLdzHqqmxD4uNjViWpNNWPxX6D6HvdQys3LWZsTmynEuvvs",
  "key5": "3L4tYV1LFcWRzX2N2kAt6aAmfhUwYDt3PeyqeTHieNxvE99CRCiHTNnYXCoKgBgk4fvaiPCL48Pog1yxPXrzYPNj",
  "key6": "3Rva2giErUiyNGBrPdD6CnB6TgsPgQZj7tv1VTD8bzn7vASTrJ1JdWw9L8Fy85kXiwBqokFTaybrayYBD4G3nE3Q",
  "key7": "4U4JZ4nT1ofhVXut533jkw96iKG28WnzXWDVewbSLofHttZi6PhnFfv8JqxdLakDNLyNMYp9cLMV5szqYG8cYUPG",
  "key8": "xEbLtLecXUH14V2KhW6YqtzG2EbDv2LFZ12bc7xixS6nMkZq5YYVkJDyo8EFDurgCyRgjyjNtK1jVesL4UvpJtd",
  "key9": "4MHXtZ5v5VbRvMat2x3NedKLHQ7dS4xZxFqoLSNWeykgx3ni5ixgA5YbTCwWUKxCCeDpcyWyQ1EmVbWKrigwsjAD",
  "key10": "5mPFCfygY49F9QduKE81LKWre3uL8Y4HZz68A5kztMjtJjF2SrwosdSQD7f7Gir8WkCFM5bkQ2mJeuc7T63uNPUQ",
  "key11": "2ihZJX47pWEcDkFw3bcj6aEN9rKevqV8ur9stZUZLQPDbKTEMMAuGSbENJtTSRJcDDfS9Vg4r9k95WM5kfEqjQ9f",
  "key12": "2NSx2HA6unZLyKxWjpeD2tGx8MLzEebq484SoziAbxiHpM9yauGYg7Wm7RHBue74QiBpMyaQnfd6ZQXZH8USxRki",
  "key13": "5n2cMzKS89kWCZq1b6m5AmiPfUHe4jiFC7UUiTsxeM9io3XaXeuGFXCYxbxD3AtUpwa3dyYtTeu3k2ccFk1yTteS",
  "key14": "4ebU8b9s9nq1JH3JDYbauWQcfkoyTWHEuDBTzrcEvgXAxA9PCZbGkAw6T8qXhZk6ifv5mka4zjWFwRMRV8QTUYyW",
  "key15": "3MduE1wUc3t6egvgeC1LcwsSV22vCRdQ8GyEu7e4d28zQiVMrNEGXssNjEPAPWnHKnFbtBMuKx8YQX2ZhEB9JdLq",
  "key16": "5E2RDELaBrpsveZ7hqBqGwpiQMEXuS9NxHk6ajnCxZc1XEJ9pu6dcnxYuMNsC8jL6f7VXHjwu1Lpz2bPZuioh9Bj",
  "key17": "5mKTr5MQKKyhTwjHNvaB9tPiLu2mfXQf8bF8C1B3N4rXtqXtTh5reb1qeNkHVQmMgFWmnvkJfZxp8smLw1Ne8u3q",
  "key18": "GSH3GAeRf7kNieKpF2b1Hs8HYc9BUXDaZwv8s4q5ZpYBtz6RNEBe86hmjXmXtD7y2VhbTKACYiSUP4J3hkMZzwR",
  "key19": "2qqEyoxU9RaixYkFTJkkfc9Pz7QuZERupxGvcrxW2pKNPWgLxTeD3s4piVPaJcMj16z4Z4tiwUbqCjzdrgYgJ8z9",
  "key20": "4FSp7oW5E95rJrrgTXZLYExLG6pzTCEr1hdZuNinXAXp1v6huqKKNXacvQRfxzBuFGBdCjWpew8WVv4RTVBzqx2b",
  "key21": "4dTRA61mMfRvm3JjjPwuRMgLuMaqnNXpJbVA6sv928FXFNK51TDXPn753Q4uQAbmKRHVj49T863y58pi2fLJXuRx",
  "key22": "3raLyomszR8HwyZSMYyu2M5dqDhzLfz6LcMmAc3ECbixrRQZQYGBSYQusgjFNnBkqXDW6z4ZnfH5eXPRtR7aaMvw",
  "key23": "e9i4PydAEpc3oJDk3UfdKszz6tA37ktZQmvhtJqP5Hveh2Nyj28GmfT5QufnTFLu4yLtMWx41w37p5mvABzdnuM",
  "key24": "3dfgkKMMjAsD7ZHDd24FVNPsR3ttC38zEEHBEAjUi7vPkMozf7WpcdmkUirBPrKMtANETAeJd9uaZnUBmyQLtoe7",
  "key25": "4dMCvbN948PwaXooDb4HyMXmixR6vxxjkuwvvMtNorzSF6wEUU4n3VFeVRoYoRdNmBtLAeNKs6ygu1QaJPtyZynK",
  "key26": "4NM95tGymx9oW4mWbJ7rJbbbgosjiBvzKNahF42YwqkwYqtGB6uhJ4iTzs9PQwrmtRTdUJ8XxQjMXM4GhBt7LAQH",
  "key27": "JCGpWEFJx54SiWJebtHLijbgV5282MREehgiDGTtoJ5y579EjRW2ZHJ1jVqJABYt2xjBu7QzPP7mR38fqDaJ9xb"
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
