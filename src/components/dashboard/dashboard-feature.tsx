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
    "RAYskrawFRXCfeVC4aGkga6UyCgmUg5oS7rgTCqd7wQSWwiJg2NjZpQwiSh5aZWQpZxBhEQNtDAM4ZVRhijW1FJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SBgUWXjoAeiZawJCKiJtHeV61ojXpWLnE1z13Yyf4gSj6zo2P5sgfayrvFbgxAFzAXXspGsyKBXCmxTNRJcamWS",
  "key1": "5SeDhPjRHGpfkCKh3omKKcdR8znvUfLgWk6iSewyDusy7qNZ8Cezh7SsjTzqWo5Uzsn11s31GppuGiX9uGbqmSjp",
  "key2": "5hDUvoQnityVEmipN4qPbdCmk1tZXM5BBRQdVZVEqYfDzaqTwU9fstsZP7B75YbvAW7zioqU93QCn4BcViyUC1C",
  "key3": "T6yxL7jxgGNSFGrWniMxGsbjRVCciQ9xSAQx6QrhmNsTuzpf4kT5c89WEfVkvwM5umyP1rMr59F226H2eYLDLSp",
  "key4": "3fV2hpAoGtjPcVvUAiFeioJ9nN989oeo6dqchUuLZj49s4kii6ULBhRSn8RgzTemFXg7GWSu3VKviddxkxNuyfi7",
  "key5": "2YX4HCSTFwwbQexrTWn17X699mVvCqhyfYV6vgvtS6kv6G6kWUqUTHdaNQ2paWU5StWaAupVvfWk1HbbdXFGdiAP",
  "key6": "526Fwo8BkCdCRVysERx69JQLHJGN9jaYW4sxb9Hi4vaN8nbCNRY22nCNotNxq1obR3nyAgNveEaGnnYTXF2JRCjN",
  "key7": "4cMypPvDkAUThH7RrRSxjfjUKCQ9sF9mhhaBLHLBsg4GzviCg8Mbv5t7tm3MD18GKFswykAW2xSJJK39NKUVcZhi",
  "key8": "275D8hPRxaziyRHwN8JY3mYRGgHbarArVU5yzhj27ePhYinvmgjdg5L3XeK9C7H1cSn5pFqxDWysYT58mxGZow1d",
  "key9": "2jw8XX6yiVdKL1YFS4dUdZgZKNEvQoEW2EmMg6yM9frQiwQDZMLHhR1Vm3qr4i42jKkXJiwjzT4j3XQA4pvTjr63",
  "key10": "2yzLQJyg98FQy1mg2A6F8SbdgUU2Zp4f7Pu8rEfQmGwLDFAoh9Ub5UfPNw1GKr1ZJWwu2AhM6PfBi5LBTEoGLq56",
  "key11": "2JpK7whSPpt7H5VLksCyqdnfvzgd3UfgxAsWgWGdHK588XtE2v8osRd5R94EqPN3pjYwvr8DN1SDaC8jdrbuhsu9",
  "key12": "ciKkionk2YKV2yRA8J4VudfqzMpdGUY7X3jXgAKoTejgQBaux98qbgLzDGURpjkfJbXRcQxUQiWj53Yd7uDHgam",
  "key13": "3Fr9amyE2H5YTQFzuaK7odZF6svA2AzcoRDnhSaFx41QdmdgeoVH45tM2JvGqjvKzccnM3FUe2sjZDrQW1bour91",
  "key14": "4gbGanNgTd34DZGhks8PZpaKzL9ivqiv5mrhbQasrno54Xuro8WLHYM5zMpsYPUyQJr4C1BKhsh8s9NNdm8QDDre",
  "key15": "3X8VWbz8szFXXeTih36v3T3V9kCMATZgZP3ac9n6Y2bfKPLzRWvdveUXV39uNXwE8CdY47waAR8TqYUSafLo6Fvi",
  "key16": "2tnETeKhcZWm8ozPbMhQ8ufabmqAe6u13C8pnTabRdJZyNr4rNLHms5xAkqeELCJwGNoGzDdMg2wge7goJKrjPiv",
  "key17": "59Xwz7oqKkJKsZq1unVjgCPvJfgSsKgGhBq7UERY587YiRQJNhEiVCNQayenstLwTaqitt2CMgdrZkWEUGSmkMxU",
  "key18": "3HHzNW8Bj7htj3Ejz41tUhwysejFzAqWhfP5q2apNeNSFyk4vSwqfWfB3PH2AVRhPcRLLtHSaGHoyTX95KKgDGBL",
  "key19": "27vY5JakYmE1jEq8tgDfF82ErCrmSwhkK9MAdQ9kZg5ju6FjBy1nmQiC6vUjHHUV3jdSvbSgBGzrAfYDU6nMnjdb",
  "key20": "5BRUophqZfBXQe39D8njPJUBV8TkytepcVLX1d3j66a3QrzWc8N4v8hSSuGn1nik7nZSMFATxGzw9dFCnHqAY234",
  "key21": "3K8Q2bLyDbJBPUhAnSMuRj3hQ5NEJWLxnZh9sVt29Rmrgbx6wL6k8uccNWiYQFSk2FxJ9HRJCupaRwVuqnV5Vs6p",
  "key22": "2niq1vEkoYWPJU3r1Gz7zhY6G6THQAuxvyzYLvbftzEKM2D74PKhUCRK9FBqtTHYVearLLmrf824iQFPSEj6jwj9",
  "key23": "EaG6xgF37NZG6G4cZrptMNVkXZEtNQFZtT96q9dDce2MVzTYRU9ncG3yqbgqCoygCkdA4gyiWVDxdwSHMTQog8B",
  "key24": "27GneHZyob1qWuXumHEBLku6ruFm8fp1q2B2XLVj6mYg1D9ZVyKAX4KpEi9nutRqDRBCahVjso54TxGNiH9skTZ6",
  "key25": "2pkytXEwvFD7ov3ABugxsk26xUP5tUFxAzjLwNJmZs2e29R4iKVk2yagTMgFeZ33rPHgbixPdWuKmBAsJb4dmynY",
  "key26": "4SCy7y82ws8XoX1mcrRWF1ZhyDjDMbeM1WdSGcV9edUdWqWKLuMDf3Wbrzudm1cBL4TbBuDBFbX9S5n33f6sYuaC",
  "key27": "5tGGAzkRXH2kquZpyXk87pnkqkaMPFarR3vsYfak6ughuUuNf4C6GMF6SrqY9sYNhFmE2STtCPBJMCRLySC1A8mE",
  "key28": "CQFsAFEesmHx6Dv5XtEL2tvDQJ1g5FjvZRcNWiMVod2vHLq2ap1u3W4D8emYCR8NhnyGWqvyvUExRQ8yVX5u26X",
  "key29": "5zGk9xkKVoEkiRVf3dEYDoy2wUQbusVL732TvSFex5pgk2xV7nYduWp1ephjKjGNqLyjC7d8vJA1YVsPofbd2oyk",
  "key30": "begxDP9aY7nf4Z7WTTNTfHiasQYp4LuTiGv5LxZ3edFJBy66Y4ehvrYhisQeV7UqdTTNYqSKUWxjW2DXdVR6yVj",
  "key31": "63MBgWSxN2Kj7D7Ju4zJ6D59L1846aLuerbAyJYv4E3n3reqBTG5DLvxKVXmuyQrd9GpNVpmkdMVi2SCyRTEUMV1",
  "key32": "4UCUjrL3rpYHyguWTN6oWMxnpkgu43BnoU2ic2gWNedN3GoFA4WJ7yryWx3A1Xm34Hq286dmhC7J3JFnG6uuRzgU",
  "key33": "3cf5XAdYytYJUCBHbgS8cVbdzcCdgCxheQ1kC4ebK4S2AoiJde1gDwkAobLg2JatZd9EZoQoFVHJN8gCbXyuBrWw",
  "key34": "66thNNgfdHUzewnm1WpsoG2rJS56dPaMHiDx2qF2P1Qo9PnGrfjZYEqAnLEgg9fVH36tgbu8stn8kcjX4dP4bkZV"
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
