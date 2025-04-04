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
    "5ZTt1CrrNLyhycrGmESjkAKJUhqtBcVVAHrmPr242a1UWQoysfPMzxXYYpkqv24xep9hNob4uTG3u7KKMeL5APJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dZoCBJwWt3boBL7bMzTqwbpXc98PNUe1pc4ovWXPtyxw9zbiBfnfZPGG8unBcNCeczJmp4ksv7qEJhJ64EEf9Ts",
  "key1": "5wWRT4UW6FDHxdCMJ5naCBa5hpNndSwgcCmmrxsh3ptQSRvcymRX6Y7B73j1sTaSyZMcneF4aPGYetdJqVnpZcjk",
  "key2": "3wyvhKYAhD8U4aammpoHHz3Z74x5xZ2cdcKfeE3De5iY4vNevEgQ56eYedxNvC8ycxCV3az2ALPU1RguEDv817sE",
  "key3": "4QfAqPSBzXLsCeNxbbRSgsZwPboSkFpWKMjmtbQjGUY9r95FsDXqdVkxw8dfMUAAKHQYZDTffKMfiCWHYGCnfrzx",
  "key4": "2bBmg9wbbSkEGnAtLw6uuWwwhDACXorKwZtxU2jdwisJ53ZMs3rxJ6HyV8y7pDERc9TPQHfdX9KLcBkoC9huc1br",
  "key5": "2fyNpYEpyQaonXLDTfe5ztTaPNrdotPP6Fu5yFp1aGqdYTKDu5mg5HgboMbAumv1MJHuVwuodivypw8VJN7Unhy9",
  "key6": "3TEUevXXZ4kJofBhv2fTYPzXPvXeMtWPHbv2xA6TaeGcVsYfUHS31xzbgAfCjjHhR6NuTrvPVuRsqC2YV2ZC8uMf",
  "key7": "554LYAU6NzUa7i7dHbR8W8fsddppUBU5nHmgs2eHMCkhDs9c34DFV9BTMZ6Fanr6YWB21bTU4VLiGmwAZgRDGYRX",
  "key8": "2vo7m13MFV9ortD5H1B1ZGwstd2u3DkevXbvCwu5VEyxPGys6GT4cJCGtzhepP1q43ULRowQSPQk9XVWC7sPSang",
  "key9": "3KELXmv8xzFMJbbfdpu2DMmY134u25WPQDXd8wRbwTquJb5Fxi9a1JPsprEqaZqbYWCDsojgKpqpcMHNUeNvuwSw",
  "key10": "3gTysbytb7o2iKTk1B3rfyr1nDTZp5FNfYixNRKWHstwhBzcBByZYpJ7pYcpY5TzeD6W4dEErds48XMFJZL22fLk",
  "key11": "53bdx87Bbj77Js9rfVEbNo8MXoodYc8ZoK8m5rbVLsTikKqa2GaysNGRA8efxtC7wD3eQwFu2zdmLZABeJ91AArP",
  "key12": "dWaDqfhwocForMbPGhBNNSQ6WcdvfctBgrwtKp4ef91uTh5J6EthCWVKA1CzBHWGNwd7r76S5a1Ss38Hf4SE1LT",
  "key13": "3omxbeRJj2CbJsBsf6KXrEc4szsXLM6kfLK2y13ocTENXbesWEAmN6PQ1wFcaGkU68bwPS3muNZiauVNup69Koeb",
  "key14": "5hBopDwbaoPHGr9ZJXsgyoYfBTtcKb8TJrhuAAdouvNyQ3Z3CfxtbCMPMT8cqgGBRXLNfadXxLo5AL9tb5DkAVZM",
  "key15": "28yiAdSQxdAY8RYpCfC7ftoQnCKfZWF7Gq4araZnaGC6erMKVmqev8bxHdZvtNKndoFDkjX76PE1VXf7znNgT3PD",
  "key16": "3c9TMKSyoXsCBFeQaYBKUZjujVVHSZQwtXVMYAmD2WGBqivRkUoW9Yc2VtyoVeEpx18GENohCzNWkF7RU9aipNuT",
  "key17": "4K7BeKxVUV2owyTt7FDnksdJeWC7r3nm3Boq5V23jkhg7n45wYYtmaxiEYm8svo6QP8EyPmM2GZHS392ZywR7Yq6",
  "key18": "8V3HqHPifJSjv3WkPiyHiSBCgQEKNpeNrTKmqECK3rb8ALEo7Ex2y83wpCDKk5zKCL2PBAeZfcubmev4b2kfDmp",
  "key19": "4yRHpfA4zNavDqsTj7vzYASLbfXv5gfHhxiorkrpdRfioVKC2cfYV4unrPDFv5fDRHMSVo7LnoXJ1GrJFwmsWvbw",
  "key20": "3Ygsxdc33zp9tAFnfc2pzexpiFei3geXTxbdASAz7DEqyupu3FRoqWBDkstfRAPeTCKf6QV3fENZcazs55GYkmyb",
  "key21": "2UEt4jVJ7vKtpvSg4if7iyQgjCwhSh1f7tfQHCV5TtKzqriqhTT2maMzJVYRRDeLypxRk2q3v7cEjUckXQJ71PVz",
  "key22": "2c4ZL3X93gHrV9Zya7Z8eGTtJT2QTQbKnoHyZgMGn3tvga7FePYj1YwM1NqvPpt6VvySKvqBnmPXr9euAYdhktnC",
  "key23": "5rrz2hGfxWHFFzTahUBw1Sf5qWCf3s3yyMyCDwWdB1ArYTLP48LroUw14xqUf9sEbRwZssHe4DLhVRwvCqegQD5a",
  "key24": "Ehqt6qr8WmCAA5SnWchVFkbSUxqmTB1qSoyqhsH74QeSUt1Y8JMAmKxDVpgMDWReHYMMwREM1jFX1Y2CqapJf6B",
  "key25": "5a6QdPjnUev3j7MmJZQkQAZF1NoeCYwVy5EcSCDgaqgK89A5RdA6gxWqiEM5LaKw1UUR9rUsjoGz2Xeih7qmfXPz",
  "key26": "3R2e55ijvJLiNeBYwBqCP43siHVCEZERt7TpJ7RJD25BC5iPDP17i3CAdhKACxNNDo38NhBJuTuJtcWJDE9Y9LjN",
  "key27": "4RydQ6GwDoG4CEdpM48aXbkkVNQyPdJpeePj5Soupb29g6r7URtfgpafTLWDaN53ozY5VsAFkxb4Q39Fc1czfcDp",
  "key28": "3HFEvdKvC1qHPDFxugRGMeA4e2XaqgyChg8Qeebz8WBz4ZEX2gPmJ37yBtWn25RGd3f2PrY2yrQ39dUUWPk5esDb",
  "key29": "5kvcoeCZWBRTYb4YMFVfMEgjYPLAoc63yi5DDAb4qA8LQGsY4m6f4gDPUsfb8n9S6Jch77k574qcXgnrjCTCKTSN",
  "key30": "2V7irdeTqrdeydvuFdZA7vZeiaynbAVBD5MzgaT11sGGLw7C3dKMwLt6oUd5ki4f83Xguc4JufZtmfEEuTga35ES",
  "key31": "NrwPDkMAetoVPf3jaMZW9gzPc6LkDQrW4WVSe4M18v8EUocZKhTLv2MPtB3EmYQXFh4Lt6bhbPeF1pbiWxGTqgu",
  "key32": "4MxErPPgp5ZHywLmZtKC6sfiuQyZNNdBPhBwy79YVxftWV2p7DEXpoCkr4aEpiBXmYf8jLarf8RC2qzuuS2J6WE",
  "key33": "5VSgKwB9A46r8DYTxUyhNcka6fNQaV1ue7V61yKjeLzYjNA538iqT2CTneDLkH4czCQWXBxbvhAsK7Bb7hmtGhE8",
  "key34": "2pMYjD9HMCwtnRy4ZaKUw1uyLYdxe4c1eqF1Re7EcwotvXHkbo86b4GXk6GeCZTXpkPyrWYjwEPUuSrsnTpcwwar",
  "key35": "ZxqWHQAPpghqQcFqB8qokB41bkEhhFJmNXGQyXRaUagKNzNYFwCtKpM2CjZheccQN23jSLxkSMpnyQs6FcqsEXZ",
  "key36": "9mjPUsHi2AJ9enHNBxBXL69XyiwjsgsC3pnA9kdkmMtJmkXw2sD6ckuBfi3bfATvUa4KACysCFSrK2JV79tHEK1",
  "key37": "3xFSRgLAodqhfEvfiFbN5UGDu5iW5Ak2YNukfnDki1nGxyWUHRF7jWLy2dLhveaSFH9RnzbAGyW8cGnSHWfntNXv"
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
