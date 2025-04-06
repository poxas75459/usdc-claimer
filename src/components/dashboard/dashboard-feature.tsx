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
    "n3Pp2C8pEZCTcjTpn7Z5xNuc74ZoNihSM7oCm8tok3WJsjqotmmhUfLNGJTgUePQhN7aJ15KiG1NuhHqdFBmA43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qfprYt89RhGWbWLupV9GqNa4C4E6FFGNHZExXyzEMLPF3mqntR1qBMT671RTKrQAuvKSBfsD1iGqDiVsyeuRgXg",
  "key1": "2BmecGmnt6CN4shh5tPvWQRr4p9mTw8RV82bm9FNAhNHvHumczva2cTV6sneRKW1BELYernseRT3qaoxBPd8BZJ8",
  "key2": "2FGnVqv9vgeY5DEyjG2zxEweaeW7MN6syJ6sD1ngNrjzxQ9V6ukPkgqgvJ65czQg891GfuoZbxFbtpc9R2NFCubx",
  "key3": "5qCBFDsfkFrf85h36fLeJZEjbySFRHFjUFivVSvzFDwL1LvN2mugmWdGqwmd3T8qUSyv7VV25PKwiPCEKYXcF9XB",
  "key4": "3PxmoQYiGiBJfhjcaoZdBpjisRxQKbmioXqjHNaejRcnEKVVUHE6SNed7UKmQDU33gbAtMTnDnbXhFCWnT6XZAkY",
  "key5": "4U5hw232dmmCcEJkkjyCqHewt7oNZiAffjt1TcnR7CdLWnxhJjhq76YrqhPkGbFaU726NectJACmXu3q8yrwUqs2",
  "key6": "3pSPjzf4d79C5j7ZWn7iKSw9tjdwJLdRYjPHX5iyaYpaExKnQV2CaNdkUJHQeMkDTDb73DZUpBA6DEGvzrV1yshU",
  "key7": "r7bEXVW8LUanMVYDgSSFR4Z3UdZ4K58ZveAfkpoiyVxKRX3sAr7yeE1wm2T9q67ghEu7D2ix5nHwngSAQSAa5yh",
  "key8": "5rsxehPGPCuGEsJvgQ5DJBj88urosFgCVGUkWpQWAsGs8ca9GbjDqHrAibnQJnoSiZEZYTUP8RqJsb5PB4PGPdJf",
  "key9": "47mgBsqbdq5ZDd5SPZTjTjGb8Mm2VNMEqHRHRZFLLTy9K2EbFgBs8TAVKByxzxP3cfN4yS1JpixJNjn2em7F7yoh",
  "key10": "3Acjhsc5A3DUJjLnq2yyHpwJvDpmiLmDCoju4LCDyLhsWhfJfMTjz7HYtq18B9VeG5Nu8mqW5JZG4SM9Tctaobw1",
  "key11": "5Gr71S2jG9HSpQMbgwYDWeVGMaVBTNM4JXBQoE4S5u3BA3MCLK8w17cjUxP5w1cG2q9hEiF18eemB7K7v4tjme2d",
  "key12": "2KsXs7FfcXgeZMZK1fJab7gRZ6V3RJStjaS3sfjaULfLbhqJ6WW4za2R6QYB7iZpuV8cQBvgxtGgSn28ttKBihgg",
  "key13": "5rKJS8JD18ECAEveGLwqjHoM8QcpPPHHVzckssh1WvZaFn7LtwM3h3CDARHnox9gCoYgKxb6q8PsJZj3hPRNAVPQ",
  "key14": "4g6ATRNdm8rc9ETpeBa2iKhDniNfLskEmDYRTcLm7cZQ7aAbsBXe6tdAJHypDty6AVEygVdG2QFGCbxaF27kCAxS",
  "key15": "NmMkDC8hAjp7vrnzcv2WmwSjVzjMF3nuqQjFhHc8Et17iHeN2KT4i1cTY8U76f5JH8JiKD54sPy4Kv7DfNKPUf8",
  "key16": "5mxSf6He227TH9HMgj3ovFnmdeXeZHGVpfGR29s25n8jpbTQMx7yfqCZvN5J7yiU6vkG4EtnJLkMB7RV8LHQiALT",
  "key17": "5ZxQLfTQnU4YAmWxrpqYMKXYmxmVE2mQwHBNHK4mGa3ckR4x4Tk8PDyKRGtS6XVknhLGpNCKpGFBKo5f3SoHcSkQ",
  "key18": "4WRkxr4HnaTqn1Nm8vYKpqQjaQpjXSSeTFQjAEn5RP5XUJmWtSaf1WKE7qrVLjrefeDQeJifAuVhdHW6Kp6UPvXt",
  "key19": "4wUXhwZ3ZYoJaLMH6jhTrmSefjjuT7rryrwxssNwf9Ny9NPLGqQ59cWrCHdVwL8NtjffDN2uRKpJkS7dsWg2xRfJ",
  "key20": "22zt1gAMCAq7obaE9DjJbK5g4XYgBbrpDQCiYtSXqJV97y9inKMaQEoLbkmY9tsng9TRZUUZZVUmGRP6T2PvSWBb",
  "key21": "3GhTng1tBR39qhbQ1uZYQdnRGzv3LVTz5grjKBWotn9vST2mFWFPWjhFrqJ2vy6fAJLLEPbFGq7Sr5eMs96zGNdj",
  "key22": "4BHxnccRcHgZiA91pUvAE4q3NzsXLq8ahU74mExQQGdxu2gH48GDKNT2XnoaCcz7e7Ab6VvmcYmj4eht36gxhYtL",
  "key23": "54tnErwT1Kx6Rwx1dqAbMrS6KLZYK9TnpLcjeeYHPL3YDeLbkHqoBeJqcGDpTm6usjzcgmMvfmVFVym1JZ6xjCLq",
  "key24": "2vBjimP1NX7W7cG6e8j9KY1yWxhZGkfxTwcCT96UJSo93EAJwmvijgqD81gRPwXNNxXMRwLDs1UJGurtR1xLdKu",
  "key25": "21fsTquctqgindvgqDjNH8fxkJsBx1a3iJTnN7t11kHArFSkF5XSwymF85fH8T2o5XCKcSbc2AM5eNSTvU6gTh7g",
  "key26": "365z2thpuAwEAc5tFWBf3iuBLu7xqb1s1a2npUV3Bq2SkXZqBk2yadvi9ZuFHSioctpKb56PYPJE24WxYwNGWuey",
  "key27": "4pCwVg4EdpWvu3wVA3JuENXXcdTNExBzX5LHicjkG38fFiZXhv45uvGaShBPGjEpKk6hiizdUsKVbmM6oQyRxEiE",
  "key28": "41nacW5oUogh9ZWeixpmxpuTPfNEsvGtJoCLaB1a2ovfZ3KirzBkbTaLLa12ebhiNe78pX5vY1XUeDsgWFvdZHTQ",
  "key29": "3Ch9edX56Pk2qDEvJSCjXkQegUPRiuaoJCBHeXi8ReWSeir6tnUpoXcN6H53GKUbV2Wxbh73Ycqa9Wfw8Sowm69U",
  "key30": "37jdE4q69LA8StyzmiQDNoLa2eYfwSJfc4vKLjE7hZfStrqXpWGF1feyWVzHfX5JwBkWJmVBwJK1ZspVZ51j3SK7",
  "key31": "2j8ggkAvoEjmiUGHzr6WnTv8gHfayhudHTbvXx79GRDJkaAuZ7k3t2LFWTvCUWm3xRL3f3X44TxjFPu5WxqCDpjS",
  "key32": "3u4oT958brJutcrA8DEtTMDF3LJVMehsbhZC873L4U6cqqgGoS7uKtqpsLWQvaApUCSu5kh8B6TwZQE8WQL2bfEi",
  "key33": "5seYg1QBnjWrrM2Le2PMcL6PpvTiVr3oBj8VP2w8yQ2D4rDLgk2YrbfCopYZdZGkaP2jywDb16F5DLnAf576NHK6",
  "key34": "2bEWPaxuRt5H1kZN9pphuMw4415kEKZcd1QyDkWZWbLtc2gfZ5bVah7gEeNG8ok1GZEYajB6ri3xptfA3VLb4N4S",
  "key35": "2m5BxuS9RYT9uWxrujzZ1RB8fKT42cy8GWyCvfrdoxxUaXE8YXehApgPg8gWcbYKqScGZKKGECW8PqTHJiavYQHk",
  "key36": "26kZZX4sKb8hGbdbccq6btkPNnnV6CNuc3ui43Jo3sY8BgQtACGPU3Rcgd5R6VfWimkp3PVH4t8ydgzWNPKagiqv"
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
