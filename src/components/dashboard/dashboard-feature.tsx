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
    "46g7fYNXda9TFtei4rdLmJyYcd87yhKwubYfxNgVrKxh5Q5JEGR358buEXRoSNppUdRFGZtVtVtU9SHE7CoZq9yR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "298TmBaGrZSYMeC5fgXJZAyDNwVmcAg1X1KsgsABih8KAjbv3r7xegia7mTYn6r5fsRPb7AmWmAoR522hWNmqFYr",
  "key1": "WqkqCchNUmNK9B4AXJF6SQGq4ahqwh4DKirzzwLZadAQg9CQjai22VK2qyrSAwVpYFS88s8zETKrjgJrunfnN9G",
  "key2": "5q2uWpWBmHZ8rFWtVy3rFqEmhspYhnBUr1VVHjyxrNxxvYdyRkD7finSB5Upz7AUTKDWhackpbmuiE1aPeU2SV2x",
  "key3": "5ho8NKEhbzN5PY71qT89rp7sjCLNNRmWDgRdNkGMKkbhuAfGj93QjXB1VoTp77F8zy5eHDeDCrrrtz9V9E2gLiyG",
  "key4": "5qyWdoRhQyG5a2hogFGr1zjdoMC3pNenBniGFxj9EvxUpVyAB8CAp6EFJe3hppZ5uuQuhp4VhgantYsLSG6Kvybx",
  "key5": "5LMVq4iw6jNGpZePCU7nyybandEcazTjcW2EwpuT1ZUPErbk9p7rtXki7827ALJW4WiyZB2y3fBkve6bFYzPtZxu",
  "key6": "Yi4cTU8M5Du8tNcGGtM45hkS57CjgEzUfe1UQuADg9GKHRabqFE2RrXu8KPA9f4xUeChvtXSXLHb99Mg4GeVi8W",
  "key7": "5pVnDthWj2T4YciuA7ozMmyVFdqc9XN572LWZw1KsEU81X5YZjPLhktf2oBPRvpyrDH9DXkYQRNcdebGTduRyw5a",
  "key8": "36juaUwU3PvKRveAQY1s8wPPYcaY57LJw1ohaiW4axNii49euhL3WkwaTBB6do38waaB6mqz7Ugs2bKGDC7XaD7c",
  "key9": "3bMH7prWaTcY4akVMwB9LS8t5FFi5pV6ZrQdALhkJ68LXxksg15g2mVQzmHxUbasnBHRZkU1pAzpTCYNLFUKLVPi",
  "key10": "3ADF7CL8em6PTi5nfLbojK5Zpu9hyHPPpmzyMmCB4ZmyJ9jLQ9ZXaTr2VgJDpxtGPiScjU4dRahQ8pVR72RAkPKv",
  "key11": "2HCkqTXsoJVa1tjzaZkXnNoqPEeioBZP7RgKcVEvYjCXA4eT5ec8jJb2cVhyKLC556AZiag8Wdq73XpJjLZY93Nk",
  "key12": "2r7GFvCL43vwGwYaMGqd6x9pgvSWgVca8fJMwwdNk4wzLTWgzgejZzVpNtPjod2YbGJgYSWDsekBigZZ8wsceYVF",
  "key13": "3nBqKZyrLxfEgKw5X3Tx9JnzpFVwCj9HJqPxVCzPbaCycg6YeLUuSpg7Dx5t18dMvxVAsmy9hnNmh2kBzYmwP5N8",
  "key14": "5JyKoYTPxZteTxdzz7RZCY76Phy9CC6akgLPm5wQt5htoXt8LcScpHAhggktNsNsGqpE32uPmCgcNNwJdqkvrV51",
  "key15": "2JtSRei97zucHEAnFif4dWd41Ja4pp5cNm6ryhEnzzj7u1knPtvuPRY6YWpjeHPsBiAGbAAPF1X9SziEB9ChcPJR",
  "key16": "3XDP6rnjJ4sTACy5BYLupNyqkEhxJ5ghdVgKiSvDqdEdLSjsodevd4HCec5wFgmVLPSdSL1SgQtnnPo5Ka94dKFB",
  "key17": "QbqyZnLy1fLXz5hT6aofJK7MPdu5k5vruhD2H6KDqcFcYSvxhfwjLZDK8321Y1EqZgemm6Z4LBf464tkKX7v3xR",
  "key18": "2ZdATnM5krkGbg6wWMgB8HX2GMHG9cWaGLXxLbt4mgdwBsNEiC36hJdKXi7vkudJD4zJ4deT3UvDw2t6EcHzwfca",
  "key19": "BQb19pGxZHJJytsKtsTdHHTUmscSAHgDivEqS6DZuaz3Xt7yKxhRqdXTrbwfCc6GG9UXFayzWaFN4pfxsqWEoKZ",
  "key20": "5nmegn9WGMLQ3ff8iNnzE6TdUxTdCFPG9drzt7gLPiD772iwSToVpXK2mSHrpP34Q5Lw5GL8KgvqWx9Bhz1Zc1iN",
  "key21": "57jUVmWRiCcrhMh4zy8PrzhXp6WbxkTnsBmGLowffEEfU1uE1t1kEZbnRN4r1NYhCWfxDFa7GwZyUzvFagwstzKt",
  "key22": "4DBWYUE1D1GUMK7A3MSDXaDHyqfzrhkEjpMMUHqUVpynb3NTJMo1wsegiebNxGiUMkCxbVhUvoKCghQb9AeaDN3f",
  "key23": "67euuKZdHcrWi8ZqYVFmZtCNYTFEAVMqU6AsKsHY3WbVN3DTuCH1Zb4odbRYcb1pTQ1MBa7nnV3RGwd7iENVewUP",
  "key24": "2y4oPwe3iMxkcvZSjBWfDfF3NVmWALMfnnAoyusfHYesrv8AF4o2gjVttuKBU3bs4wbDBLHcNEGwbFx9ybGYtsod",
  "key25": "5KE28z6TUj3YRHSiDeKqWpR2aGb58dpGdpRSCTPtpmzeF8PbL4RmTT4Sm5TA3LPho3QAugdfyY7L2YVMSan2fhii",
  "key26": "4PyyUHLC3MWx6cdY3BoS2N8Att9Zu4j21NxT2RUpP2u7roMxUtqiVubsqrmCU29DrHpuGLsYrUnKnSpggXpim6aP",
  "key27": "4t8mSDgJdETujgJan4i6LHFtWw17oVtkWCMbDSigUj4KMA2FK1mQjeTRekuHpTwW6ka8LZZEncxLkRqLMiaJSRY4",
  "key28": "4tXtqdAmsMYv49iDEdGd1Mt5RgqR4jo3zvm7CGtu9Qvdz8oSA6AE2gP9cRmYiFnrVGP11i4BA2PjMN23rMJKUVmt",
  "key29": "jcoFR31LC1gGsVX98M5bbqvBSjcoyKDANEapsQxNZhKtVycKpvgQL2nkzwfo6Tvw5fBBWaAEUQ5moSReFxEa9pX"
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
