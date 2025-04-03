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
    "2VkLiq5NGkL8MfVVPyLSYrGz8L7Rg4aaw4fVnK5dFcE6LL6WWRgffoB84E8TdY8bZf1uG1P68EP38XPjADyk3k5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55rHvJfP6okXWdgntU44TTy7BckUi6zguYic32tAZUejYTvJxH6ESqNkXeCfb2mBsj5ergmEEmMpYEmYXWZQS4A5",
  "key1": "PpaiioWqNR1oHCh8phTQBLacXHuJVn1WDFgXhu2gT5NLXGCAbHS2ZBg3XJsRH9qMkc6YiiFL8212McossWuUPiy",
  "key2": "5kx3fAiakn5qwJMVZwCAcmHipGRERbdQF77SfScWzht4f7s3MkGFgteqtwRgDSn1u48sr3FjEWfUi4i89sfmfGaM",
  "key3": "4bPeZtGJ7PVJQZBEfztCiKcCWbnQffstrGWNmTCbkeYdgaddjcMuvj8oo72pAP5Q9Z1mi6U3eLHsGSaDxVdB1ng",
  "key4": "5NSS5Mn5EbtrbnQ29nXcvuUsh5AEVpv5yCp2NbgpEbRW4s7oYm5jEtgvdBXr4uxVivRrXfH9P1Pe6zVicAsWRL7m",
  "key5": "2eJrWgH52c6ptrpPP9TzHH4tQWYfb26Kdonf6Lof5SDTKXmdrsX2u8ScV5oYSmbjxuSuuLQoZrwKkMxDWWx4bTTY",
  "key6": "3FEmuNg6dkeX2NDkkY9rtbKU1a7aVLqUGqUh3rb8zrbg5YDbwrzLWfBijxvgeUESZG8mF8suBBZ7drcA9iwFxnwC",
  "key7": "Pjuyeq9JA1T9sfr1gYNy2se35zKDMkYfsaQuvncSC6aRJL43GracacMHPUNCFts9Sf8bc5By8hVjHd6tPMiiH4u",
  "key8": "5ZrXk4zDbzN9KA4Nkw4aHFsAPbzU6sXihytQ4QT4NaGbh7uCN6EpFkdz5EDdcQKWhNDHytPiy4uBn5zreKqpua8y",
  "key9": "3z8XMRuY96h18Q9MaCxr4PfEpdhXkRHW2Ztq5nLqeuNHrhibEM4T56U4tdgRJkyZ364nfaDAPXvqZBkaR8NTG8ed",
  "key10": "49iNgHbWpVLcKbBwbA6EmVgtgT5k3Fw9cjfcGZfiz4bM752WeYfcJqHFrVT58RaCTLegRtyeHh48R9u1cFQQyKWC",
  "key11": "Rz1ncFJSKCKmYCN21N6enGXmufn8u4GozAnYLjadFwpw1JbtqpcpxzaHSFwnPR6vX7iAmLEz6YisUBip8cQHXmS",
  "key12": "3gspSbT2bJNQLwqajKJPhRni4URhPKWFEFWCnk1TNXCrwaX8ys83Uer1CSYJHeWoj2wvFuWCaSkWYPNSCoatpqXx",
  "key13": "4SZFT1hioak5rKRpzPXR88jkGFzu1cM65ft3yCPamznP38LL3YfpFhsmk48SRv7yX4i288gKikpnwrsH3Drc9xeV",
  "key14": "5NC9gUYN7xDGBLiXH98xmsTUZnRrgCodYcKZWc8r9PJ8Vu3Lc7c6wdLq3k1vJfDhBXgddmEvDE3z71seBLKvb7cE",
  "key15": "2gaHYXvgS7bjm6i5Qi3VQkqgrjNKZk8AhWDd25PmZHjJyHehwHdUsBUYvm81snXbLCrMbHDRph3ywXi6upJ58CW1",
  "key16": "34Wt71ohSUBbvtJskm77gXdB9LoMzEpiQQY6ffpNUfjWHdJrJqgxTrNbfVShwGLLx7NMkoNDhuRk3kRbG38P2ydC",
  "key17": "3HmDHpQiu4YeKy3Q7bsewdLBhPWBaUqedeXBiG3be2LMaadW3hBG9Tszw4L6mWkEcnZuFiRsvntN3aa7b9wFqFj1",
  "key18": "2PKm8bUBGV9hTKXRvW5PSQ1XZHJD4sop6be1NMmZe8Ba8Q9kCjJdQC4gBb4AJSX4hcFRv34Fy1hvyRkQWEaKsiMG",
  "key19": "2nnnebeMFKicLGynACC3MKLikZgb8kP9Au5N4Dz1xcNVz3LJKWC1XWTVGCjZp8nguvWRWbhn3t4n45DhPH3Cbtux",
  "key20": "5mubHUNAg1Pehx7Wy3VwXXb8wfEkHEcwT4ejTTcnuJHp4ex8m8wYixLN7VevE2qJyNfzceD8U5HvsSAADdiMUjQ1",
  "key21": "53y4JXSKitBE8Gbtn2VtH8TuctHpxnCpoYKdCR1T8qnpLLW9uTqLW6ULNEU51vcxkQR7Gke1BSaTc3gT6nu3ofZq",
  "key22": "5WAv3sPakXwcmaB9HWNfviwqaKmhQ8ZYi85Ar4NGLAWQfUMDNeHF56SttFqXrZna1XBoc3tcYFj4dA2GYW2xDp8Y",
  "key23": "4bjGQRkgWyPxidArQJMnfyAt9Dzj5Lfs6WS1MvFRjrQ2y5ppYDrvYdJRFzZTXreckdz2SzTtsD8kwoUJTo1cbMWL",
  "key24": "2BVF7GQdE1bqWktdUEHW7aJyWpEC87Ej5SDB7LXjSyaK8D2gmBrvh6ihm8e7gtZwGWCNDPPoUHNtLYTEdmL9taDt",
  "key25": "3S5rChR26BT6a4dQgCQ2d3AhUjcZXoy94xcJ7RZzHrKEfGWysedxviauatMvyHxiJifsbRNUbUigTf4DCr4hgZLL",
  "key26": "hgD1zmXQN4LxEtRos61uPzdba2YpmyHLitefiPeb7tacJKZiA4xudvkZU3fKeco8WG79Q8XArHdB8Mg7J3jaXDg",
  "key27": "4mvuQ22WJqcHCm4FWo4VbfNaMwmBMQdYEALniAgAg5QN88wSadxi6Q9RS55CBAwDpnvEvdgkggmBBL9UgsU1REAm",
  "key28": "3kAgbQVhpLBomYn4X8DQaRj6RU7xuhFAPAgQbvQ6Y8C41D21HBzv2ECY2mWmrBUtKH83XAqMikjPiCf2XS7KAttE",
  "key29": "5hYyW9k1vk4TCQAKZi41Cu4Wz4SfBx7AeJqm5UBXFCYtw3EzFSU4JRKeoL4t1nRyE8oexc1aJTLH2FH1VX3oC3sS",
  "key30": "2TXRDyFCmpvSnDapN73zPhXvjE9rVunxbA6Qo7Ke9iC3cxf3ABmwkegmspgT4SfEYxw8UuLVqDByfiQ6SfrcjDTs",
  "key31": "3utRxnb19W8XT4UDD9YmByo1WihrCDrAv4QqbCiqVJLNQkzRMRxkZduGdv8juafHaM7m6xS9QqUYPr9fmgM9tGpe",
  "key32": "t5tzbiyAqhoKaW3bjsxiZHMWjYtCyfn6917XnamPcctqPaXhqfEwHUFEerPLhQwMgqZLsNmD4WfFrunp9F6PXBN",
  "key33": "3tfaiqRh8irRB4zn5amNbdGJau7vHYWRC3yVAEB9yt3J1kPbXtVuXGyXs4ab4VjmsoM5ub6hm59XciuB246zEb39",
  "key34": "4JSVKkdcyYakTk3Pxmv8ha8cGNc9x5jwMC2acHZSpARYSCHysaGsrtEciqiunsqmWmgnSaFwaxny28QstaP5pPFu",
  "key35": "jiqj49YZkmpbsfZrVTw2mAKkCpRRKVmzoCYvkrJwhkFuvTjGARNwM58ARzwhipRbkTYeX9fmydbVyrp7jBMCXAL",
  "key36": "4qrx1Gwx3w9KhDtnQdeCnZxasXuv59BLDFyazJF7pva13LxVhyZmuAruuvBxcZnY2M87fBg6od1RgTcaUfg17ixG",
  "key37": "4sFpeXMqU7JaxbsUuqh9giKRY7hWYkxzVZuxHNF5PexDLLZWLq5gYJ8U3yJHrpCVPbbsTCpDfsF1GKyZbXKRn3K",
  "key38": "4K1qb3GdpezCchgWNeqotZ2nN1GFn8j1JzqiB2212RFDT8DxnFSFpTcM6PML3qz5QTVvxxEec3DzQ5ZEpDAMyEYA",
  "key39": "66V8MJh7Thb3y8uuPK8DcjU6ZbhRLzoekXEcHWp436mUpa7V8eoaaZhSnWCeMGupr6FTVJs4Z394SYLXpgzausxN",
  "key40": "3PvJVNErnQr99KEfBmS2Md8ESq7BCFopBYc9PPYMb1qm9755KZ5S17CDsqnHtogCnvqY5NcHVT3TLCD3Z5p8NgkP"
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
