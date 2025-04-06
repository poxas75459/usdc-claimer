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
    "3bwt6jfMVSEAjh3soCMNVCQmCBXTdB7vXk5ZV1o13SwWcL1k1UBuTgFhRVfj3geKnR7dCrp9EJfTjhjJwRMkACXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aLPwshx5t744uTURtCv285yD68hskwb8XQH6FMgzXnmGzCv5RCkjLfFTJTfHeX6FproC29qqUHNet2J5hk654fV",
  "key1": "4hd6VrVgHwJ4m9Mjc3rYDrpE917CTsqsbcnDj8cE9gL2jcCaZC9m59vPcHHECHtWV7ct2uRG93KD3YyZCqETPGfX",
  "key2": "3iFTEq3NHPzGqUxfWNLZHvbT3gNn2ATFuakxMUAHT7YJs5UcmhoGRA1GyaXbM6StTHJDnqgmBtZGd22jW4fBgqxW",
  "key3": "31TMURHpMEqEJJm7TdpGWGpnGSAKsG2U8HQngHzH5v9GTZh4LWYf4ozCT9idoSYuG7gasWMujvD4drwFsxKv33Wh",
  "key4": "5m7pZuVmygXsD7Vy9hfzajynpwjqVFjvZMVyuCAsbWUV3TvdSxXwUYxbbATwo2qJGzWhbDingZyE9AKDPtiPMvgJ",
  "key5": "5cHKwLBeWaAQyBQrM2mEZct2HLVDMYbjb5gtLfuX6DXgLmbQ7Pxf4jXn2RFfanVJqapHQy7XPyrxrRmemzBNW3Kz",
  "key6": "2KQNDQgZTNNU6Yk4X4a72PHuz6cik4pMH3SnyEYtiVvfxESgndp8HjTauWwiEiSBEjfdua9QQBGGJ16dq9oSha9B",
  "key7": "3C2erKryHnwNoMevcHyG1H9FktE91TJEYdBaTu3XRewp2A8Zwg2MQm58JeQSJAgWaApwfQWEZtX4oEjvBo8rWsFx",
  "key8": "3mntcHVFaenoE1GVwmnnv2AkJDrmH6NKDQAvpC7cAVxcYUx38wwB32XUnPyi2srZACbb5ugmTnttdvURpMYkj3W4",
  "key9": "5i4ufEsFiMdjZTZeaTWZfUmktf2mXDVC1pZq8acDBcThhYwHooNhdYvUaJXe4kkCRUJfqWJG6ayHmKCHuExsc7hF",
  "key10": "4S3S1KgjYcCHXFxv16hUcsS2tM1s6AYZjXfThy9ANgyoZ8C2zyphrWJkSwwzgZ6jEzXSENDX66RhqFRmgcMJnvwy",
  "key11": "4o1fStX1PGi1TDYfv4D1rMkVCpuwaweWGVqd6NnvtsQcMVvxEyUJAChMa473TNFghhcnVe4H6VYvUqiSg3sLgXjy",
  "key12": "5ofxLPwjEML4y2xGHc9WCdANA3P66TJx9FvWB8w6Gowc5DD15YfixrsoKxZcTn5spQTN6QZZvE1sWkjGzGc5p65s",
  "key13": "3d5wQK3QLYpk1sa9zkqnWA6iKer4JGxFvRyKm3fLtaBPEgv5pSeamhZvqQ3QWJJFhR4T24mCvsCmDvxnivyrMi7J",
  "key14": "nDqEV9rfP7LrKj9VXdEg33nhB7A1xL1ruypAUCVh2T5JeZ6pzJzCXi4PhFKFinuz7kUwxVvUyS9uR44yuDhUSM4",
  "key15": "2wrjT9ctavZu2HGJUFbrCDB94WGM6uVMLgNyeLgZ4Cyfb6mAi868jni8TxHkzp4rAivDxeDXsJwyLLbrDspCjP9j",
  "key16": "33btBqVptvGNui7ZtNTJSvvMaDStvR5Yf12HAGDr5u8ciZFCUXtodyZ4ybwk4duw2g9gugd36jb8p5gPQGGVVBP9",
  "key17": "FSRiVhUFciGWuqsMAEnJ3igWc7m7J6oMcSCTyXfP5mPNHbx3yvZnbv4TkN4HPKRSFBd29HpTtHPB4cxrze8U5rX",
  "key18": "VZqMRcHpXT6yeTm1UsGkQSkzBhLjRMm5PhW523m9LzYASVHQPwncSGZoTx81qZPScda3KumBjGHoWcz1oTmFrYa",
  "key19": "3dQKBUS7G1EkfdAwEqR2GiFcujb1dqumFvFijsYiWA4AKbXckpErggWM2e8aCsQFCXpnvRkngfQKEDAC9nugbaZp",
  "key20": "2oR1DAw5bqHcSZyr4xCaioqKDtrMX7zRp6ZMRE7YFgaHKU8rh8H2yci5htYs7Z8KjCzGoccxM8919TKKErrrv3nT",
  "key21": "2vNxLHcQnuLufcm2UqdaCadsB8S9ZneWczFHupjSG77G6hEZwMkraqMvES4WXhZUQSwGXVTUwnyexFdu8xEGzsCZ",
  "key22": "2EEek9ETpxsR4bzYtQMTiiV6mSWwS7eFAKdvzRmvq56HFDi5ngyKFuiG2nKAiAYJ19oNK88ZhZEPqydxSmH47XHN",
  "key23": "4NRJ9TvfpnQhBrsN7KNF6ioJzfwKfG5TKLeLNiktFWCDya5jLVJHfYNnMEHDi7k2rm2ynKefE5FJ8u5w6Ek2GYin",
  "key24": "2yJditgF9zaihjiEXW8ytJk28MQCfMasKTm4pCYbNm83iAc7mttRFtvzq2PBUUuPrqGhWt9tzqRxY1fp63CM3YcS",
  "key25": "3iSHPSFHjKs8YGVVreXBSba7U7ZUqxuzZ6AxLeBUJfPKrpXJLuMoEWhazZ5c72o4gYTpreuNeW9cKs3ub3nXRsXR",
  "key26": "3ENDmarjWK1T5Qvb8rBvMVkZcHX672gVFtEzHUAnqYsrHNRRe2bJrjMngwx4gT7jpwDN8MCrcNYQ2t84UrPqKSif",
  "key27": "GRgxQpYj2sRABV3Ek2W9XSvea8CJ6V49NrVWNiNL16q69L18JmuFbkMG8ufRqfkg3v2x2XNzMPVBqa9GiJTjAGh"
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
