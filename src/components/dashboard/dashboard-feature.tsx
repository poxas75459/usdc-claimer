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
    "TL7qeJYfRWphvjTfefWoWCbJgb6whjw29JVZbXBXGj1wWVfG7aXPsKnaft1EAodeuMcV3rZhjDFTV7k5mRonDKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HaHjkAqz5BBR2yavmHCDmYGizcf73nhEmaxn9fiPp1G1Kh5ghQ12Xy3PQuyLb1KrN8MmHE6BcgqVYVZ5UUTk5Bn",
  "key1": "3VXUXtz7pjmhSXkXUtYkdUBCdHka4TBnRuWrNDXbrRvRHjj85FeWAyoHfqsNUK6fZab4SVekaGL5dASh1fiZhaXG",
  "key2": "4nsREPLsyoEmnB2TjYga1gFLqFsT61QFpCVmBQDwuCsSVAYF3M6J9WzNPZSeMgtREVJ89mGCPjzQoYfQfjEubo3t",
  "key3": "4cCb5ytNWMuuL5WgHzw8W1FrjHQ61yPBQQgLrC76Mvcu6mcDCbCBsF3i5zRKG4U9BYEz7hSzJjuTxSdoraq3SnJL",
  "key4": "37ezehpw8EqxPqgcqoVoSVbrqyd3PnW9CdGYpZCta3euZkeTSkAAn5sKSAFAfaXb5BfjmzAVvXgZadqKd4pSLtkM",
  "key5": "4ejrP8C8YJGK4ANiChnyg9Njh6XQmCwVHfvnqkeVXk1aJiRqgvkv1LqWbQdnbL3Pt733ts3FzK2jg7ckfiW32oD2",
  "key6": "3MxLdmmD4FXyrqJ4qX8qfv6SQcwUUbJTA4yMRJEMLGTYFBHko99SHWZpMQ3QS5LaJr8Kjj9RE7aBBZ2uN7MbZGqt",
  "key7": "5CjCyfJbsXAZw6hrFN2KzzRyL3Pi2s2ZMTsbNPB1T8MHQtNwxNP21KZskf7WVajyZCEaRcbF73cFr5Cw95QJU2zU",
  "key8": "4mpPrzPLPCt8ynh6eUThw9XquMRYn13hYb8BBsdEjuEDuwGmXRYc7qd42eZdMMcEo1ka7uHVC5FBgZSZxu7EeJLm",
  "key9": "3BGtfg1SgNVhS8ps2XcBanindQhRZgmJi751quZWy9EcpiWsEaWX9goRroLN79BY88LK2FyJNub5d81bjEtufLMG",
  "key10": "39EG522W7PHo6HDsfc1Q4J8YR46UhecvoSVEaSWRsJy4zNYXq7iiN64eocXwM5N11SUSDL4WwFyvqLreBVdhvwdg",
  "key11": "3igbY6Mfr3LZTrdFCrNczrJVZosHDcPWZxd7cysRK53ZzD8Q9jVTAxCFzo2aRxwYr9qRxfZKJVbboujq8JYBHcPU",
  "key12": "2ByoU3aHVRDfWWkcjYwvZpd1GPM3yxPZfuq8WKfmxxaf1K9Qv5p3e9UVxu5WoWrPRdiFZFko5Gy3iTu77GqKb9Si",
  "key13": "4ZhTjHvMY1mCQpj4SnvHm3ztGt1hKA9d8h6Sg3vpTnaHcjZbCwAY7XwmXgMMXtV5HSqDC3kexZfdHG3tFuuvpiX5",
  "key14": "3JQBdX8vCrcp7ULzW3fYe5NgmKxLBzEfzHe2Dmzr7PoMMFeWynv2jUFLSogDn9CjGFo5jNRiM3MCvAYxeZJnGhWf",
  "key15": "25XUBDCjkSPYUam6ExhzxWsgdhGoWmXDd7w2xGdsJc8MDCYxbKRUqnmAuyxtKLvTys3rbMabybpLqgv3z7RAKQYK",
  "key16": "Xrr5cDodYv84b6r75eSUUhQcRHdHYcM8Coi2KbhNV8ruMzi1uHhp9iewh5DmNGN3xT8NQpBaHFHao9UCMdfxogy",
  "key17": "3nbp7prUXtNjXcyiChdjAMWz8PQj2tha5GBoEB5acpuSZHHrrN12HtcUFtxNAa5yjcgBPcQW3cN86nVmhQq7psKq",
  "key18": "4Bds23H2Vs7xNcP1ckDAoRYkvwPFRzXyNJTFQ6LRhYY5CFWKjgpV7PXCQkwKCxMJjLRfWTNuhEWN8Lxhev9nKBLB",
  "key19": "2WWXQVnBLp5MVZRzCYa1jERS7W7D4SZe7zXZXjV5yB4wKgJZE9FxUyEGqocnZv5nWi7WCJ5uNHV2NDMqYouMQJRG",
  "key20": "4VqBzGyYXn9prX3BKArPo3jUikLTYSVJFMvfNpiGpWymYaYhjEwwgyhZtRqLVWtg1tvwLzPaWZpqTVXrXuk9z6wY",
  "key21": "2pWqiymMuHHVAwRA5ykCjQUJSUFKvdjzfX3bipFrN8Gztj4x5rSBJrEHvp8pJGBF5X377dJzUktxuEGLecXWDvCf",
  "key22": "39HafTEHVRtuPDWkPFrmtyBbxEuoVtQDShb3JzRCbdWSPKLxAgPuWH7PApxYB7dpF8QG1NdNrNjj24R9FbFqTPyM",
  "key23": "2n5hzoW3cwvAxcDP4A1c3LxC54LXXcYaXCTMcyV6YDJRUhKmfCpShJze1ted8P8xQXEmsipSFGrpfPriyEMRiadP",
  "key24": "jNfbyPWtaeR1tabAQb7ZtpuzgrDAAu4vocvYSRHChEkDeM6e4i9DSNggYTvd1RqPd7YgQwwruMtHnFsSFAWWb9a",
  "key25": "2ogSWTKPfDGJWyp5bSKYKVjmVHH8YLfD3qyYEGc6n4Ddtpt2cN7G4uokxoLHfLyeZAKF4wRCqagtBvmsfxVFRjuq",
  "key26": "3ToNjTfz66eC6jZ2KJMTwE78TaVDgxuhfYs5WfcPb5TCmXtR7pMSa3BvoHy2fjQLfeZ8Pk558Qo7P2iC1VmAjbp8",
  "key27": "2dN8njTFAMNyXCsEKZ4nZR1AN6VftH9qEYH9kZ2K9jRiuur7WrpuFUmsK3d3fWEj4s5E11Q5oxPmHUUstMzUYqr8",
  "key28": "4AHY85U8Z9BpucUYKw8CsSwSbp7yY5sUh8RvN2yQURdLebynUX4SLjrrrPjrZKcbmUa8QCM5LBTZGgShoFo1ij67"
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
