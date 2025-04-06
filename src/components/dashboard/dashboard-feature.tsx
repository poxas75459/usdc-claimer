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
    "5r3tssjtB8WGpDgL7tH85fP19j6yeVxto6Wbc4EWrAcA1Z5gDULUE9VUipKM5vD3AnjCPoABipXaR9tEuGiZc4N1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bjfztG5U5rahFwzSzNdVo9VfznLe2f25fN8yAkjNGr87cNMu83WeCbQRfYL5r8epatyBHo7XA6EE6D239fff7TP",
  "key1": "2F8MLPqaBBCQQCcYbTMumvJSJwG4nrbnPe194tmSPc1XNdBy7xQaAnnmhh7qUiZzvNVESDBMuEJym4av8vkrZPd2",
  "key2": "4efXqqpXfyY8NfJXWv9A9TGULVyWu2omAdiReb36yUF7g68qLNAhBwpF7xF37ZGS9yZHWzMzs7BZMZaFYUGFzoWh",
  "key3": "tqRwY3K1mXrX19f4FMEwHGm1oMZyPhTaRLBAiWBiSFzTaB7N5RyKrCjm1aWGEZNNk51iMCXXai47w3uBUwmTS9z",
  "key4": "4FPfbpyVebCEdcVUcsmYUBLRyXEFYWEx75GhmGeNcoD8PuBqpSS5eU9eumLSCz8u1CaDJkCrqheCuEZqkVnUGN9N",
  "key5": "66HXEri7P4Y41tk2jeBMHpMW23zrQzYw2i4F9Js3JZNaVWQtBPpbpKx5P6B1wum7baaqdAXRdFzx6uDgY4NGprgj",
  "key6": "39YxsNPP2NV3wYzHH7nVbWAHMP31QN6RVntWzhdn9kdH4JogFesCTQaGvV3tLEVVWXYCkt3PiHK47PCfjqXUJwx2",
  "key7": "4XxV7P1REQZKiTGxusQga93Qmy9W7EE3rPk88yCbV4vsQdaVAzGwTuVYWbNeEPbsDHGEPWDqsvdBX2UgDuzp8Eci",
  "key8": "5crfjoB6JkekJY5TAg4bxAP4Xc2KSyRCFKt4fpN1Kav4BejMPPNuo7HP3uA9CErv8n6XJwDiGmSscdhPqDrpnGvz",
  "key9": "36DpXZVNfhSfxQdqjzxGuWViDne7Y1nu8LhigPQQC56fvF5MBb9hncxr2eDC8rGLVRcKwKghbwru8whVPN2dacQ7",
  "key10": "4V9grnBcEPn83TumQYBvoSZNCenPaAtaLi5EwuejFfRPWc14CN1sxkq37GyL5cf3Qij763aSPbio8ef1b7pMU2rm",
  "key11": "2gWV97KV8mqCv8RCZKkC1dxnAxdNYUB1vmq95gJHc2bktCkSoBQwsfPzJPzvUoCuhf7sJj7xRorXKtv8MaeQMZuk",
  "key12": "5g7yhcbUbyj4aZDSdZBoHikRmLnh96U4gUXu4S86XJU7S7QLfi5zEZMhR1jevLgYAs1csSDhR3h4cB7m3cAD1uWd",
  "key13": "2hVJPNBEFahBmtYvvCWKdVknkLzqgW5UKwN7oHrDh9cRNaE24jtfPqw7G99EDQRKzx3SABiiVm1miC9tzWfGevos",
  "key14": "5yKcnVT3oe93UYVr5oHXnxgrPRS6vMSw312JDYpTJhWkCJaWZR6U4vKE6hGEd8gzRYW7BZC6aKVLr2sAfT9qY1GP",
  "key15": "5oBHTPr72ZTcmjAcsNWa6JYsuE8BCjm9VGS8m6dLvZRgE4tbeeZVVXTLFGqqqTZPLU4oxnJHE3Bs49PZF5z6yTFp",
  "key16": "5NKLSWoymUDv62aSLMCxZxVgMeiCLTqygUNJWn3csGQqe2gPFt4BQYERHy9vs31f4sM6atW2PDLmrb3Yg1f4MFdF",
  "key17": "4xAmYQAeSa2TtWCVWxCBt4s9zoCaaCyia865aUiWcg8PxdjNbG7BsMHNoYWgCgKPqL78sZwbEH7mUS9JGoYxZBEv",
  "key18": "2oEdACKVHLbKipRTXS8zXQc2iADnyVJBATUazTGhQRdTXhjnWdmtmb8fjKQkaMQaPm4zG3jXp9nC3mBzzfYipnEg",
  "key19": "5hAbjbgMpMqErV3yTUncMqpZ9a786BrgcNNpN6yiVWsGuU19AT5fdUYFDCUVaxsDv3geH1nyCCv2kdqk2VxwDAML",
  "key20": "3bM7qghSzo9rGvEoZUdT8RykntQtNxkAsDWhqNH2thcNyZ3pvg2zxiucr4SBDkfXf4U1HZ9Qkx2EM2b7gcaDFpa7",
  "key21": "45eAWpRxbLg7Wxv9WiGUdhEQ9TSYJQ7LggZ1Kn7AWZWJ5tcL4wV3BzstF4wBj2YtkEafD9NPPX59FjRVsu9w8SAX",
  "key22": "4QZ2DKntXQMBrM1L7M4cd5tLZLYDC4aNq6tiv1UUdYiAkKpeim9LrcyGWiNbVVCFs78Tz37xjivA82WGMeYn6Z1M",
  "key23": "2iPxez2jPC8UijLV8B5RNDSENYCnj2XM2TRAzqJ4fFCVBrQzLzicZvkp9TMPK2DHL5evuhiJ6WhZGEoiX5Mfxk2",
  "key24": "3cX8RwbBwd49ketUVrBeLYYs55B51S7iZF6Lqy32DWyBZPsiGRT8qPQsUtV47fqktrsKWC3QT3FLwNbpuWD9RfND",
  "key25": "4Ny1j9mWXpZZTNxfKhJ5zTi2b1Tkh8nDHUmcSRdm6bK4LHP2G8q7t37QydP529hqahKiaNfQVP6jZHiPBhT44cHB",
  "key26": "2k8uJtRncUGJhmEVfpgB44rDtxdvRTrPtrCZKSpABStKP6S4Xaxx4SNtubVbd5NM9mPB6gUezGFvSjCfZ6hLJFRS",
  "key27": "5hVfYNM1W22KCQQzXKLoFY2X8hVhJ65puaTYzMXragcXDcTAVKh56sJmkUAChSViPJqajE79TcTsiFi2haTrBFKQ",
  "key28": "2azKzLBYeqC9C1ErT84c8G7dUH24XtqXe9TZkYB1fqhioB418SGbcV42hRrK9QD2TeweP9WUebmg6S7cmJnmmvSt",
  "key29": "4orihgxeVkLUuiKXNqQT8xpx8RajpdnEV8JyvN74odiZNqrMJEKj6Xdu2KX38UUNFyN4HnczPC817rw8KkWLrDNS",
  "key30": "xs4sNbKbcBqWQkh5a3j82pfBTNTZD2frUWM8itfNVMXdhgytkxgwxs9ZEHdsAoJraZ6ZKh5QAcfHddLqsycGTrH",
  "key31": "3neQhMqvRSCdF83EucSeTJurwcz8SHEaUYvaBdwoZJQh6mQKDc9f3P9j7U5JNj94TeRDj12V2Pbex4GUrritiSvp",
  "key32": "5i1QEXg2W9WiDufq7qoWMTwW9KxT41BsMFXtYepEEYRX4HiGyjHbyW1s16YcsT24YxpNJ4GzUSGg3pmjLt66oxkb",
  "key33": "4dPUuUi2Apw9F4QEjBXJxeMR3CD2BNAKtoCR4ZNoSj7u6bJSC1QiRvWermC1CiMqQ1qf56gL53n263R2CRMsHbEV",
  "key34": "3z5jZMbwCxyt7UJbiNrAqiRFawW4t8je43Cj7FcDXnyxCXN15ewhpBfESSy7WWy2wEsGdXhQU4By2xad92s7yrnU",
  "key35": "2z1TFboSBrcFncPoYBVqYnJDUzUx4FvzHE9XbJHocRnGdVv1s5NFnDLfPJseiQDbshbkjt7E1pHcP5RwaZJQ7Lsc",
  "key36": "L1AW3tTPHx2zckmrQdbdvf5izeqfBqoCpYcSRfLFDqFrVMzWyzv6A7ZA7X8xsjX5ZnjxQG3CcqwkPeVJcpYjrKr",
  "key37": "3j4VquneDz9FijitmHa38QkAVsEtxgGQfQxBUXvPJ9RYJLgukT5QE9P8TL5NMwqamVFptDB3SoCEpFDSqz1JsFKx",
  "key38": "5YFhK3eRbJgyoqrNVdtTSUHJqzuppQ3ou58fzSRKmGkzxYDnz6DJfKJLFBZzJPurUWXNwWsqQ3BWkGkjDSHhPvou",
  "key39": "4N7d4Jg3qafJdWxSbRdJaGv6yA6xkTziwPJhbinVJE3qrgdwT98oWYUJV1Gxx9aZxn7CFT13SScYnwuHyirLZmGH",
  "key40": "33zC1Qjuv7Z8fpGiNdqLqq6iR4NKP47iYTTFDZFNTd2E9dEfny4PTmyd14prXN33Pk9E2Y3B9y47rNtDjds5RgWt",
  "key41": "5EPBY7H1mHuGHodiahXkQxeBXyR1cozyidBLdsfJrTMQTkF2vgTLgtR3BELmyT5aPNJbJk16m4858SD8nGACHaKS",
  "key42": "4wyZ34S8TgZLtJMkVM7WAxwG9C4Woyc3SmFhCAZkZtqPbj2Wi1X6W8TR4SHMkdnEb4AMeK2SMAWTBe18eHc1vkkH",
  "key43": "4KHe62zR5qEyRtJK956Whm7jtnrMsvm2j4ACQDMgov6kKNKGjb4rxXCRWTZEjyzUUcPJDUAzTjRrzwifydxDV6wR",
  "key44": "4uJwEapzW5ULx84iXh6ASNuv8YhhnmGpiMwKRvCcb3NC6czEEDNKg4NbaqE9GouYn8LJKhpx1DTQThE74TDL7JCH"
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
