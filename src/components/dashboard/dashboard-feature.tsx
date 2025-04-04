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
    "zbvsa5XZGBPurZyoTJJhdTqXoEFnZvC2rYkfWZUhqKjNwj3mYDkGCVp5M8WZ8w4x55fioyxqDYdVFtHLRBin8xw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yJhFcjZUsRJWR4Z1hQpSMUWo7vSBLyQtojpkusAE4w1Z4YuwgwN46Q1DgbdfmL166RVj51sMhKjzE9i3j2DgjND",
  "key1": "5w2Gg434iKFmMbTAPcX7nA7JG6SRoS5QBbBc1Pakar8n4BRRn5xiz5gQqCjFrjmYiF1eHHwwHJPpKM3fCa2hjYX4",
  "key2": "2PeYtoenTUsbifVfMPvPQ5bbuxJcnFfhtamWg28KEjQyotuqqzmpsbKbQ3gQk9quXMRZnRexxXf9ofE7KSKe6nkr",
  "key3": "53EZw6pYgNsK6KyPAda54HRDYqCV94FbCorS7JSqjtHWQcdsntSjJrfPrDmh8WVipuhGyQo4ims9d5K4bd4tu3Hp",
  "key4": "36xTdjd1y9m5e9J93NwxgsjfWzhjWRGsdb2Tcq5iz4KJe1UCaXjnSUYtj2RHe4PdoDhCJyTivyHdo8ngLNzBB8uD",
  "key5": "4NrZ77SyxL2rDmk4W4snZoLyNtZmGjXedp7RwLB5r2oYxLrXu6ufeF1r1SKTrKZXh6UqC7vjzXKGvhYhTFPTzFW8",
  "key6": "237FDpPx5KjoLpobBG2nZucCqnUXTqKG8uVswfvHhtmKnxWW8goy33uomBcZewMCXSuJq4qgVdjHn4zTgPfrzXTs",
  "key7": "5dNYWR2YTCyMZdioG7Hmv2NEYZJQkDJKgZuJLntMycdDKR84C9XX2TqsyFit8SXNVuyDhKrW5Tcmyq3NX9cUQgBh",
  "key8": "4z1LTkHrwiMV9qNkzbCbpPsjfNLhM8BRePjq3in7ck2uP4qoYQsgbbt1GxGMzzK45u1MqdpnLR5G7Uro5eakV66d",
  "key9": "2Gpn9CpNQKQfSRQGVAiFvk8Tv1zPf4GWczV3YjEMw7MWLCiPXtv7tvNTqWTtSF7XZmFy66EywxXQ2Uoh9nMXqigg",
  "key10": "4M761PgQvTUZtAMRF5apQS2kPjKEnCuPBm9etjc19zs1jv99dbJEBn4UhMstAzJcSEopydCus8oAnFQNgKWDo24k",
  "key11": "TNiNxLFCguPfBLEb5o6BrSze6GuvU3MeNxYAXiuzBb96yvYjEDFCBBpACXmXW1SQpewHKvFtGmeWHigFJQb4qPj",
  "key12": "5K3rc5dKvfNZfwLVkM5xNQ7gVgW2ySUx7HmrzqBJpg6UvnRySKTtWrmxbkxhtP61RVVmJibK7Zjuyj9BfWVHRUgY",
  "key13": "24PpjJY9U33dio8tjEHNC7HycfHdyetUSVnUhTvd6QJMsApqEiaXpH7ZLsLfjxexPmKQGhvZjxXp4S95DZEsbwpA",
  "key14": "246LwajhFvjh2vPxYgyZBbD74p9BVZnjfCNHdEEbpoSNC9iZwVEURmGLTww75UU3huckPvQ1iuyMjRL68aurb7t4",
  "key15": "37jY6KhAr7ugMtd6JGHq7Gh8v1HXUwLVoBXEoCsMSEEdBhoVwJvcWZcmTNgWjEHeHtkBiDU6oUVZB5UtUtn9dS3m",
  "key16": "s8FdgWXA5Nosgqk8zniRpPwxvtKtR3XoKiqWZsRemV9tVnFt72f1MWzLCjawdt2muc3aH7M1yZ7XoUYhbgrxiy6",
  "key17": "5GDwhh9sSyqJEHjsKhirgogndK61GNjhBLcmfqBDRbg5CMaCNFtdnX4LicAYK8Nmdr4TuSdYHqMb2mtXo5MUCXSQ",
  "key18": "aVA9AtC5NUz6gVdphP5Kcq9UQoSFdQNi3QhoA679vE5tzhFbnLRf64FwSyAtk9Rjewsb6be5b6DEBoSQmbL4yrq",
  "key19": "71mxpq1MwXgX2c78Du6Vg1FS6eV2eZ5gg7Y6bfSjaFoN1uWqsfGvqfBK1gscTKt2E6CuHSgP8CTJSJBs6d33Num",
  "key20": "9gQmwy6fq1DvDgMFxC53o2bQ9PuXNZ4BNHryQomLGktNdkhqUBRzNxZoR9YXcbWYzsHhfWDLQCLHrJ8DgvT5Fdf",
  "key21": "2vQCv289oT1tFsGdz1PVAyapJkmk4SUbvScRKPH2oJpw75Kr2NVzV53HTwGZoZMkzcZJmzFnPh8x57qvohRyuWa9",
  "key22": "CKQXabSYRSrnKSdMHc9ZsfLpnbGKnMrqeeqJfqFnAqmpZP5Jrnq6Rp5CNbJdbvwEWnm2MrPVDP2GCwD3amMZDKQ",
  "key23": "5cfoKTXEd8nvhNTmxmkaD8h7N7nu6VeMUTKiG4XWRVxQyU3b16zQ2LwRy4TZ31mZxrJFY3ZwcbXEd78rqyqhCTdt",
  "key24": "3HzL4D8B2TEa4NgBWyowQ15iV138LLXkECJkTw3d6VyxZPRQD9oWCBdAS5xEUthimen1tFRbaJ9z4f3Tu4tbAosy",
  "key25": "2EN8UXmJEMm4DRNQFcApdLj2cb6mRAwHeApxfpNJ9WXo9BrLjvtCJwHkWkD4AQA1sqEU9VNMMsyGx1pD2XpcCHj8",
  "key26": "cB79BT5Q7Zj2PHMYb1W8kUNDNLYep495DTw5MdPEcey9YL45b2n3gpsjH1xYgjMYSVf7pi27zGptfZTMVfYPt4Y",
  "key27": "28tLMKTTWDtgS9QpsJraP7sCPspPVRQKKMu1rHfAcSqj3ZxdCBT2RNYF5QGV4GP6nfxe7emDZnWFetPvHKnRXgVH",
  "key28": "3Awic4ayY5yeBdpmiaAjy2xHbBCq8rTyodRbKQ1djJyBJf6nZdsDdRu3yjercEn5vKTHC5Jp6t258K7A6hRT4QNm",
  "key29": "2k1iGudaDFkTAzUsKDyWAfovBRDrYZBjM81jPRixL6ryUEgfNHb64B5Bmn8Xrs4kxSiK5avje8fSsKZE5kHWYwXA",
  "key30": "55ZRQ2QMDLwcxz87iv2oaVPzd2yoGYfNC4FMy55Np6ns9TyHT1hcgK247Jaya6ftN8NDZy7Li3rC5BJvWqWVZGqx",
  "key31": "3qBTRPRHeogCMpjMpEFhHdWMXqrXHZ5Vi1xDwyxd5MdLSGSeu34c1BqE56yiRejyz1WBNCQ1qrSHjcaC12EGzCRq",
  "key32": "5NbgqdfjgHBDCtLbJJ31yktJvhfPYjZWp5mKAw24KYnzYy42Ti4SNxeGosoMddPzoEpGQs1LW1isoVopQjKppRXi",
  "key33": "4rHEidfEwnMqD5xNTj8DKotL3Qmt17jbLTdHwvC7ekC3viiEZP92MQqenLVpvPZMaJxDyQ2owTaPBStKM3EZPhka",
  "key34": "4pyDC3yJLn9xnamU6DE89Sw1euJquHAeBAeAu1xDZat4sfseLk12BLQYEcsLKQoomQXcAgeqs4ugrUJ6VDKxjo22",
  "key35": "4Bac8r84QvmAWqCVjrDsphwtbQwkXpnWdaYsL8y6eR7Gk99CFHKd6Lf4DmASeiXJvH9TeuVPazD4rbzHGSMQk1rG"
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
