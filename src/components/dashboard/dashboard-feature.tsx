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
    "25bz2DN18DbeJeFmBGU4BKcUvzYrHHdHwdAbFDER6Ji7mWHEjoEhJVHNcN664JvwbySeW9RaYUjfcAuJKttRay2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gWyDhFFGguvyuXTwqFCkUpReQ58pPGTKphqUf6FS5MH2RMvSpNFx7pV6Kap5PAu1ZNoQm6zBiYJrCyXPHQhKQVo",
  "key1": "gzcMV1HzBGMm7YdjBuLbgEjF3vEqj983LVbaUwsAXv8a2JYjr5Gr8df6QeZ3Z4VqKu9DdQuBzAvBfiyvNxPjwT6",
  "key2": "2sBUiCduGf6swp1y6CTopcMh7HCFkuT4xt5CgjoiE3qMdQeDGXQGpyEWkdXyeXZ1eht9r1uY4dbceJmSBZb2L7R9",
  "key3": "5q8DwRHA1pRDQx7CZm216fE13YakZnZ2TEFJdfX9ihyx1sPM48cH8m9qGwUZJNLZAv9qANigYh7gAeQbSCEZLeap",
  "key4": "66EmDBdzW8SdU4DxhsaQiXAiseP5zziwTqfbxyRSaXwTdBVgfGkcJmht7YeHwHC4h1npjRFmxHpvZjDFdVYSZbAR",
  "key5": "5K7nUjAiAgx9LH3Nu9R8erjNk5c9pJhykzGGkHmNgh52vAZS2BietusW9nLFFDSsGiu5L6zWKwQ6AJCxM2uGWECF",
  "key6": "4Xq6UKQ783T1wwUFXmiVxwK65NKhdYbQMSMqMSaehcgVSvc9UiWsAX8kbSGy1XmHzG1Bybwy2V4syZQ2kwiUjDuj",
  "key7": "2XiNe3YyKPNZ1DZeDz7qKyyU8anR4ewmiYm82kTNZ6dLnRPG3hRa8gVf8meSFaZgZPJXjij11979oSPpRYmT87PU",
  "key8": "2eS9n5ZkmJqonxmkgZ5G2GAvNEwsL7QwCj5PPjZw9L5KADdv97m7ErLm8wdg2wxdZDKg3HTGie6UqLtSxKeLVW7q",
  "key9": "5SnsWhjzj5LC4ehbqzYeaaQEhkmgm4YXku2qzSDSU9S7KnRHdeX2uaCHTRUZXtedN4bbcHMxePgmaxVZFB1JYhMn",
  "key10": "3aUf7ATRboEJPmDBmUJgAKiTqy3Ldm5DR8vC7kBkc9nQrz1M1RftbX9u6PpoCnzAVoqZbtbYusJypKFNbJrX5jrp",
  "key11": "4V8TtnAa12FGJCrk5vqguKRE7L9gJurNsBn47VKtSxZ9b2A9f8RgjHpNhSHEPpmipw2YTjwb5mDgFVpgBvnS7j99",
  "key12": "2ECVMr3CTgddUvQ2refpU21JQreXaJaeWyKBvSftiswDz4Z3WVz37GqAcgZAqMaJJEtT5NzW6Vq1jaxbbUkZXhvd",
  "key13": "3v9DvS4z5zF2H4TmTjeWf6tSqM1yKhqtC76sXLwrkvpWrohcr7fF5ZogB5of6LH8tTkCfqpxrG1v1s944ky72kyW",
  "key14": "5gNhco5LY7GvmkZS7tLizdnbJyB3ERm9wQw4FaNZaZ6vk7qMyRDcuNro95xoQsccAw78a1GCNXmh2U8TR2eayxWo",
  "key15": "3mEV2owou7ZuoLbEGJnkPfBGssGeMQq3JeuEtT728VgfaJhiAFxihnp6TRy351FAjafu5NCWSiUxBb82xPeTokA8",
  "key16": "7d1oE7sFXAkWC6r7x25y7RV3XER9XzzW7XTuYHehBD1YCCJSwcSHj2396qqi4NWzRC7SSRE5AQRK3zqHdTatUB9",
  "key17": "4uBHSFcKN24xvRtuFVJ954AiQPHwcCmh99us25kszkyq83epaGXvsnWSK6pWAyfF6BjXGDrCpWy1J3ptErAJBLcz",
  "key18": "35s3CCqhDX1PC1NgRF5AdgDXsPsAjC7HTB5qVFzsWMj4YRRSSoPYRxqyZyrC7iVTiuq766emX7BRJWZxLAe4W9v5",
  "key19": "3YATs6QHUgofnKknwrAU4dYiij3WKEsZ7Jo1qLRzd8MRYZUGg9eRWwDZT2LyuEdTrMnvcdVY9XCvpPN9LmQrgEoy",
  "key20": "2Jc5uCqsiXc7q1hWcW7nAt2vwKUVMmUBhDAfi5RfDkvMWjtnWfCAoHGjex2S4YitUJ12YCX5dbkSjYtQLKhuH7h2",
  "key21": "RsXdp2fkAs3g2b7CEDjzVGbb6twxBZMEYWPV2Phy3zSupgazyeeBy7QCbZ9pjtjbn6SaRrNJpLhysLqy3gCrBMJ",
  "key22": "3NpV3j5hyEGmPQzU5mcowWTXUA4ujAdCdsaCE8MJVKhvf9d7m8AozrYg5rLoh2pYvRk1r6niyDdEDicr3n6nFHEC",
  "key23": "5ZsxSuMdGDYkVTUNzxBHob4LxMv3t6coQ26sZgtxCjUULmogNuYLaju41zDBPi2gcChQN3q8Y1jH1d3dEgrdqpbX",
  "key24": "4NDHACPhLHNUzrzqLAdzPA8yYJcXm88sHFf6EPttycZrZd115hvMxAVZDFn1xRvwApUXBnsQV648g4Z2BJrcQ37J",
  "key25": "3wZbUeef2zGEYLWJRo3QEQpLtVZoK4kNqjwBJ3FJgQip5FeH1H4JohdNhS8zje18RR8tzxwaKeXWXqMaLR9z8Sn2",
  "key26": "TZ9s7CeJkNFoMLGrRoU2CKYofEVQXoNqjpJ6ePL7zsDX6FRSjkGEjZWZUHnKRVfh5iE248U5ibMvy3vg5Q2o7Hd",
  "key27": "XxKznLBbPXeCANvrXKZC63tB2KXHPGkiPuRgpSa5ia4GgA6hMfqcwZkLrcksGVjeHywM7q8oiVg8Sg1vUtMXrjf",
  "key28": "5ddWWtTCzYXa98b8uxPs51QC3QNSybt2AKHkJzDnjjPDjx4v3RkqJbNwWYU9GRHn972yCCb39t4ATvn9TiqvTTVp",
  "key29": "4xWm6R6jJYJofmDVkXvXLJYpRP9shAg8isXs1RWy9rbQsQ9wMrqjggMuhP6NABKJdTfsb2zjKypBKekyDJGpdzTi",
  "key30": "uhmySGRnTjokXgt3gKp4nw7tCX6B9A1CX1VC9fVGWTm1a1VAZ2JxQFY1UMHwmdj4WMgSJDNLAQFf5dJLprg4wQY",
  "key31": "4tqGwtujo3VvFyruSMkEmFZC78EuKTJWpcvUVp8B28kP91UHiLkhE7FEZEdTRAJ5rcYzRadegm2n4yz8LnRp6hST",
  "key32": "4xFBzYmv7D7WHewwpYyi1iDjyj3u4shT2859sRuG77hFUJdzkrjSGVQmhhjK4eqcLSWVahQBQB7TS42gFtFhFMEY",
  "key33": "4ndXVsVACYbmULFpiaaRCmzpqG6CaVtjEPiRPpftxbKJPXSCeQWgJthnjCHYZbrd6ggVvSp2fJGsZGr4vkNrxbkz",
  "key34": "33W9rrnhgxru436eta6AvSSuUgByAz1HJYcHQtfL3jn7NBRHE3YeVUep6YciCURRXTAahtHZyRYgAF3tTF8vPmio",
  "key35": "4dTro2bk6CVPkgwEJF537hpb39y52xbmKyJPb2fwpfdS18KwSeHoid5hTBNw9gr7KU5HYkvVbea14cDSMiWc18i5",
  "key36": "59DV4sSXNgW4oDzMQCboWfGA8qESQ3tdjjRS96J62iPpZH3PbiScZHQbyuBHADhoHGonBDaqp1UasCpJw33dve2L",
  "key37": "45tKouMZLq2JEE3wLpyW2S8RCUACUUTMFyKapTweEZC4XBj7ff6E1jyeYKhLoFxip28Dr8n8YXzU1XTEuhi3G8bP",
  "key38": "2FJTodkEktEHKyPiNrUTRCX4Xjts7BxqZwxb94puhTDSo26GKxNQ5JNvaqNuMWGTJdSCFXa2gH8bybrxAQo7JcFL",
  "key39": "q5D3Vxh1K1LgS3sCH7E7iWAsnF2pL6NU8ccNfKPzpKiToa6nGpqjWSVLkXwmoWoK8ZVQvezi5tbM3rcVe96EW8f",
  "key40": "xFL7tMKoR5TQjvvbLayTFboXZMRBBzpv1Nt6rpY6utPJeR9b5G48aDXxpcxQQZJMuGoFYbZ51pLFoFUGdJSiMJt",
  "key41": "2PdFx9XNL9HDMnskzVAmu3x6xetZPtw9Ag5iLbKCok1x4RCroz838BYUmHxqcJLZatGRxPZFiv1P5FoWUA1i7R11",
  "key42": "35F5Z8oaui6Gu8H6BTWK6Qh2vyAkTKwsVAzMbDeVAa1Q9km63U2VXSf1EcBNQGZG1GMqtXEWLQEkD17t6FfXah7v"
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
