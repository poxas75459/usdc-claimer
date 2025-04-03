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
    "2FZyQCpauF7ZPgvoCpeYw5iyS3BSs87dpbqetU7vR6xSfScvxhmwzKd1z6tHZ3rhgF8XXQ13jszgFMXBxuJNQ9on"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uP4onn9UbL8YsGc1TPARyYfJqmLVvQ2KuSg2zHFL58XF67PqGvXCnthoNG4xMkB6R5L9C67qnf1vnhr1L32Vz5Y",
  "key1": "53KEtva7keNzXzhPU2mPxcSKB9SD3uvgkdVyiwjhvJ9GfSiugHX38CwvvpJCxpACWMZx8pwdRrJeSPdNH9D4Eqgi",
  "key2": "5SxUcWdrphwq615mxqhcQmfwWkitpo6DiuFgRQphr4GJGaKMMUjTXzjwVXq1BGAmzMu1HxynR7EmgwRGXYhFxgua",
  "key3": "36wqy49T4LCL7Uisgenq1TjMRgopqbDQ5dSG1L3qyfXawgzBJA7idNvvt3WS8VNnM1DvrxE66R9tq65yo3ygRWsM",
  "key4": "45SdDfA3uenvFaFQmvbpx5TeQmbLuotCXrLxnTnnNeoEeaLiwvQ9PFTzAVHWhj3dWTwS5EboJKeyj1fpMVygCSa7",
  "key5": "4ujk847meqJKhi4R6NLjHZEuywmPWAbgg2gnHrYJSWcqv3Yrgm2bgWxCkYndZF5EaszkpRhi3Ueyqt6DLHL1FY5d",
  "key6": "3dsPXVuGzVGmHEnQE6sWJ6PRipUsWu5Z8ghicubpDhLNbHysGVCs1Lq9zPW2ELcrGaMFqVpUVLRd2ytVmmZsnwoM",
  "key7": "4gi73xKzGXfzq2eqaUj5J8SGULoYw4Dp8RLDiseAqBMXVsm8Q4XALZCS5SniVFWM5EFcr2GC5cNPr7njUT4rQHJN",
  "key8": "2eCKhu7iMU4XZJ4Gx5uhxFinmkbj1dVhYgG2Dy2HMAK3ZZCGftqkjc9uC4KsjbzEu1tLTZaLuEgRLGmQx7rSityv",
  "key9": "3uWW7mCeAKcvitYmY9kMVyxyY4eSuD6n5nFuR4qLaVyTeupDa6XyC4pRhHdsVCg8w373jsedJxSNAFXH8p6AEupW",
  "key10": "3cepaqudqM7kTFuVbjnD6YBybT3Z333VjHBLZ8usGpJ4AY1cZr8VKSkgWACbmtytmBPk51xZ5QDnHbQVwKMfLrJu",
  "key11": "4kzSJJu2aa9hbLaEdbUb4vQY2RuJhhyzfzEywyYeHEmDpwwoNyBS2NPpfVbpn3Gab8LDXeQbaoazNAq4hsdrVQ9p",
  "key12": "2ffo8Q3pXVRLZGBZHdsaboYtHzT3Rv7i16XKLpLDco13B4SmLEU9XeQdedG7PLXakAn9bdBRRpotFCKxrgeXKwAi",
  "key13": "4B21ijmvHgr65kkrngtTQmSKMZoFaNdUHxLVjN9zxgrPXSZV8iBL9qVGXhSkgWuLS6zEjjQJA4CFrkrg48aHX3go",
  "key14": "u7nKZ48FABUrmvqKvCnAKP5oAhyewhN8TR32ysfYAkKEyNNnXctLpsE5XqfAx7pW6mHbeX3nLBxQcW4xqusnabv",
  "key15": "3a1rQtRwdRsE2BFiSwDfpdGk8QMvg1H9bKGBR3fEcRkLWz6ZCt7n6ji6a6TgBL385auHq9RcduLN6PwSEo38UUiC",
  "key16": "GXjCFckyRkgwgSXdHsUDsZHbtgUhufGaWXh9wzhD45gfdondjmHyqvL5zzW6bfHJ3wmXiJZX8FYz1PV1jb3k5RC",
  "key17": "5qCXtifPnqDTaP2KFCXut51Yh3snTmZtuVVghtqSUFoZbdWTpzCnPM6fMtbvmuHzxy1fBdfyHemBZtqYjNEuaNRP",
  "key18": "4HtANF86kLLE1bJAmWfcF8cJs1LJbyw2PVKNDBMSxWMQDJRmJ5eLyzAqRgr8HBhx9G3gBA6vMecGLMQxxq15YoGp",
  "key19": "5fZwSqqfUjbnTdCrgJHVwFpn5iSBcD82b5hsqFwzhgKBS2ufQyfAQ4eXG4LFw1fFZSrafMgD4gvFbLX35dvvcSXk",
  "key20": "dicfHQ74SEsDWXC96fvDrZm3CXcPk9r9na6ramt4TBKJ8hvEY5EvD3EpEvwMc7veAxpsGeWVGdFwFxQNeqSLtwC",
  "key21": "2QME4C8TV9VL6q1A8qh6FX3QFvH89ESoN22bT3bE2zta627hjJzyKPe4qL6uoUv8rhj5EdASDw5ocR89Z522Vaaw",
  "key22": "46SafJktM7pShbKXDVgVubodAPY4E5xpTUNSZYcR1J6mT5KTScjCTmJ4SBSxpkvbtz1DvjMasyzNaT2KrSSPa7b1",
  "key23": "4uuPDxcwqfZ1ixW4fRki5sdoifRBjCfHRHR4zikUXJdZfQKUH2uxxyMMGaBjsS2SiQcpUzJ1YBh7JvnCrXKfLqSj",
  "key24": "4xVGfhm4Jo7tFb4KibBbbA9B9PqpU2uLbwPcDDrvrMEKPpyzdzkTrym4k2YmnMCJyX9zoLhjFWELQqRFEKGJqvv9",
  "key25": "4qq6pfK2MMRs2btbETog9Xb3A2eKTGBU1Fp2pCoV7XuuYjG4q1r9roqHzfvjwc5oZ1MZfHTUhiHr9kkUzGgvP4DR",
  "key26": "21Uj1f9C2vJSrcfEsp9DEppbh6w77b7txtfRK5Hf6vUU3mWv25PZL1t5jEzVidpZNGJy9RFeSrTGfc5TRttquXtx",
  "key27": "3jAyq871Sz1rTS2pquc7o7MGumhunt5STEWs5Pq5TXUBEQTh6PZjSV9xGMQMPHAv8YYsesRL7wC9Y6ZgMiPhhQP6"
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
