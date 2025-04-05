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
    "3VgtYDKccjUDyd2jqthpsekmBzgeibZJp7nNzaWNK12oZ58hDUCYfrxh9MoHSu3khJn5hSyUGXPfuWTwwGQtws2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pKwb3TCGtoo8XLx3HY3Ftns76JVRokCUSM9WDDYXDufvRcr94PqmDk1LDnN58qanJc1AeYddRLz5QMEG3vsQ3W7",
  "key1": "2kQdqq9QqYTmbToRasQCY5QqHEMgxhauzFBDfYBiEygTw4RkAZmkuxLzEDJUT84n8pujUMi1NUcHSrbSo7xnu95Q",
  "key2": "5mYY3EfJ6NMxLhKD5kLdk7UQGZjFKzZmkBNN2aBY1u2z4oGQpwmMjstkje58uZxhNfSwuUvnkfrSAWga7zfUN6Hh",
  "key3": "27jqWkjpR47P4XZqAxsktsrvL6yvTQ9ksnCHed5ymkHU4NKnAgVmhy3NXvqmKizHj152NeKSsMQujDNLAQ18XvGQ",
  "key4": "4x4NHEgtYivi1hzPgj2Pf1MJxtbe9sS7K5ecTbKuhJfPtBvTwLxuyUSRvC7DRWxStLWcMkSCNjEcu4ckoomxnci2",
  "key5": "4pGHUri5UJp5mciDv3CKhKgcTayRYbzTLCqKoFo95WNNxjJqqSHtSipt2GTKL2cPooxDyyCAv6846FXhpLyg5xxZ",
  "key6": "3Mm6ve7kee89m8N6iXC5MoY1Q9qzu5kj1C2WbbcHRQ3pPkpT8vEeC2JR3ZLfHT38RVGngmbwV11mRVMgwETEtn7f",
  "key7": "2GKLP5pXTdtBZ2zYNFTgHtzQ78itpAoxxGv7QbJ5Yo4w4iK6agPm2WRYMUPJu4nuB2CRJrahWju7db5uqpKSzKd9",
  "key8": "4pdqvPaH5Ys5oYts2Sa6czLQ27dzwzMJSMSxArmCxrevUuSsbSQqUD7ewHm6HCvEe3KbeLRvHjmN9Sah6w29F61T",
  "key9": "46ezyufoHaHXV47DEXyGf91yHKrn4NQYPqgqgbVAN59SqQsFXEsxWsPWdEW1echPg96bAnLRBkP1tzteMLmraQdU",
  "key10": "212rLaWZ3beKdz9Ydss1cJmSbknmpRAtHvYDAxFX8q9tR23xTHUHP9V1bB3HAchM2FYhQq3sbsU3HeNfFaBNcqVj",
  "key11": "3scTquBipuJSzb3zEtcjbivno6fquGJPTBeGXFeyEbNnNhA6B72Qpct1J7kJhMYkx3Th3F9ks5XeW3QL3EvTN9y6",
  "key12": "4oFvDqdhbuDpFgEnVGBvnNwW4WZ6ESDCLCrrQWHYAFkKMKtZBJcP7zQa3H36PbFExp6q6NfV1h2Z6u4kKpusAZZK",
  "key13": "4bF8g2jV9DsrcYKZCimsExF1e3cQSr7xEFkyfKfaWYebJqueddmtTY4nRV8aEAMnTVsymLVu3fTan1ySqNmXgJbi",
  "key14": "5QZwPxerEianMJumVGxotGffPDWBiLmYMQqGADqXQzbe4Hj8zZUSgfU1JreNDkfXZTWEGJrWQxXN6GcgQxCkCc3m",
  "key15": "5Dnuqqj7f88AwVco8XanxmrDBqYV4eH9EsGkhCE67idf1c8eLgfuBg4oB7QfggKwsHsGbHrayLWCSaY2ow7BJGqN",
  "key16": "5YKiqZnwisJN8KJB4jpaabKHPCaL8j8Kdww4hekdnMVViiCizcBcbD8rgrYpmybamoaSzLpYrDntPYvDYEzK4JdH",
  "key17": "cGrD6Hv6jMp4QUhDvErcGakThwHUDciAF2TqwE68ypEqYYFq3SAdo7XB98PBFz3KatX4h6XzkbXErRMsXcZbQzU",
  "key18": "5h76e1ZwbpY3cNATCym7iQkJJcxs5Uv5dBk73sqh6yo1qkU9QdGaVtmwjjFGQphZLRZtoNUDKnkrvipZPUoVvTuB",
  "key19": "mhrouHxEuf8T3TKYhqDSqDhKE8NdHzmLxU1tQT9Qgr1TEeXB5sk6QgDV4fA6CWctoUusbpWr7musjkb7Kvps8pi",
  "key20": "2i1DVGsLtzH8kW8wEHFt7c9LaytkFMwW5tgQ1aqZvndbnPr5QTjQLvZhrYasf1dtq7qHRuWCLYwR7dTUWap5Qaj9",
  "key21": "r4LrU3u8SCE1DL5PUD1EVfua4BgyWR2vwPBrUEL5UyHG6PbLJjcSdQoXiUg8zHAHpWtUnqhFkyP3y6rRUNada4r",
  "key22": "376mLXMys7NEVmcG1DouJk7aACQBisB3KdLLSMwibyFRm8xSaPcHh1LHb6mMnpqtudp58YSvBFr2z4csocYU9pkU",
  "key23": "3TJCFxpcnKQgYogg3YVapU7HdEwCCU3nsaG3p84jaeLhmy5iSuSahywqgr8e8yLdqQEZ7bjg3rv7qCJJRySKbVEZ",
  "key24": "5eq8LXQhBnBuVDFZPBM3T4wvyPZTeDfq6KkMcmGVTSHNKH3rwRTVUVs6caymLjQ4KB5NhQ9sqHwAREVL9AdobWcA",
  "key25": "uRbmsa7ojYwrBN6RSLuJobGkpBtGfPB27fQFzmJMWaicdBp5QXsRRU6491tjCccQrRKPzLpM41dGjRAezsMfxFw",
  "key26": "2EzCWsCS5z8Eviv5bZmqAVRtottVXPjn87QxZc7aojbK1hmHAaZp15NxVu3y8TgsfEUKahpgyq7dt7M68xeiz4iR",
  "key27": "51z21tPZrwm8CWuStWgcPW6p3bj3pMmnQbbWRK3XvWNTFP73qNqfWgVNvHq8GVioqQzasaHqDX3YmMBevQWdXhi",
  "key28": "Ynwoc4AZJ3fa6pkvLi3SRoRbwnbhJWYgyVwzHnNxRoGCDiH4cGeWFA7VDDALfrPxfSisMnnE1VAEfxqJYrFMfTK",
  "key29": "3dUvHN1AHhzk6TzXfoLBS4vasEVzarZGK4o4ftERpFj15tBuC2ZHakmnXJiKEmeuT8B6xzfa4Tr7yJVnqngA4mJ4",
  "key30": "Zow7M2ZiftsKMD3SqTdpti4iAEzb6p551o6CuqUFbu7GD8sYcr8UjDg3e7dGRhJxLsAxuuv3TUcugqAB2A5gRPX",
  "key31": "27VCpPcPANHF9kgxjr2SMmtRmyJC2WVwCz6ihixJeSGhgvA5s5EhyYkkNzjgWbPXQhKYHFn1F2kpX2vyFpLJxc7d",
  "key32": "ht2Rop5XEpAMQyTK6ZBiTitq7NPA4GoufDq2g4md6jysqdgQvB9ihrsHiiq3vWQvQ99QSPjNHBZ89tQbG1VmQ7c",
  "key33": "4Bkwa9HbmxY9o2HN2EmPFZ5Wsb4HtxunUmaxFhGusveAHDd9CApEWXrZH7gGemiFTQub646Zw2fj3x8WfV5e1x7T",
  "key34": "4TfeftQBsEDbPDTGNZP4k35DexJ7xRNamFN14i2bU5KrCTvKVjA4AWaaBhU8pndnvJCqUjKah83jvHJUZNzFoqS5",
  "key35": "2cMuDYZWKo9jTJfeNGxtm7EhsJVJD7Sf8PtZY6UuPNtVPWQiDsf4cP2ncrCWv7nYn8D9K26N7teBStwmMNeQRRbP",
  "key36": "5UNTRvtMHnyEsu4DAZq1sVeeLY6Zm9kWsgqUmZu9cn8sLj61hyQxbEpJksWFVqE8jbrwVXYnNoDHjwZNiMsmvwYw",
  "key37": "5qbUbSEFC1bGrBprjsiyaGJVXWmDhQ9hdPyNQZN359rLCnKwytfrBhYoGrHMtTgdV92QwM1DudYeHeFAAL4Zju1L",
  "key38": "ca5HFkfE8UF56EcRackG67YRFTag2j2q5e7kcdWhQDcjKcgaZ3UzjYFRHanniN5fqSJvv3ZX8SZTHFJVERfR31i",
  "key39": "25sp7BkMNcozeGGsYdYCxeJ3diFVXsqDctrii7Wq7EbZwbqt4fhSMFN2gUu3JHCVPs1PSX9MJkaJdhKcZZveEZMw",
  "key40": "3mgTh7rYMJpZtbLWcEZq23uDiMn2f6YUiicr2khDor4jWgPnACcRadMkpjFG75DmFywoerrKMDK8X4cJ7q2WqhnE"
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
