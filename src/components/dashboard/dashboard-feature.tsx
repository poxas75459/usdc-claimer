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
    "2Y1oGmR7f6KBGxnvJSXKjFMvQ2gyW6Pu45mRuwqAmDdku5vz5La8WQt7PkwppkHibUSe27x4d1QAomZfFAD5xnv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aoE8MZK6ncFaDGUfw9zzX4npEoNKXhgigfoa6TWjrKCBKBM3QPrQ9WaDcFJDxokzjbW4wPMrCekX4bCYjA9zxBy",
  "key1": "2TVZF7LfdihEHZzJU8cRK15H9kgnj9gfF79XzxoFU1vsSqVPxD12DgPpzMrkRTohihXrb6gF7dzX1Zrev1xzqhYY",
  "key2": "QRZPevCodvAPHGTR22sMoZBR4TB8U4NEUrbVP29Qv7t38WZAdDdCw4mTWL2HRopriC5W6ac3EabJGSZYLJi9A5Z",
  "key3": "YgAMKv3Ti4yKq3mFJRVyZLY5udNdGgQFGRz7gWfEg2mZtAFEqLcbRrDhffpoBZA4nZpkaWM1ypgP6DuGxhUegYu",
  "key4": "Xobn6kfk7u1J9mNLj9fzE3WasMaqEa3XwE5fXFRYvKAvH5zdQeefPTUAcTzkCSwg2VyK3pWS6rcSTGcjP8rBb6w",
  "key5": "2PBiJ6GFe3efrhHP9dyqdRmG4s3LcHf5oLvNEm77G9BHkuUKxUbcrF7iCiCXeo9AD71uAEEaZXuM4kHruWPx7iL1",
  "key6": "xi3RQrjkcG54k9kP2YXeVMeMNjWfbrZinDaGU1EFkKYkYLm8zSGjPCFvgbcQZvA4jvEqDQfRPJj19cRRV1wNdfm",
  "key7": "6sgyY8KxoKthdNb2EnhvVC6FWNgqGT695HaH8Y5gkoFpNEWwPXvc2xBbawwD3C9bWmXmuvmZWhiE8yq1mFTfHXG",
  "key8": "EZMfwJJASagukdoBbPzfTxbgPBZkYQRLxmLy1PzNoRTC8XynYsD2oHPUUL9RTEL23T4eyPx9PqBSF3SZgpfbTKt",
  "key9": "2m5fsVZ3wnNCLb8QyuKtbqS38tng5PAD2YiAko4J33Jb3zXqXpQmQL6ydpo62gqs81BNPLynvCQfutPT8tgPFSsg",
  "key10": "hXuRyYCitpGucENbaeFhtHyXWcJWMqf2HaZczjD3p8qmjsWUg8UTkcRxr9272tNMeNPC3uJWDtLThN42csAbM7s",
  "key11": "jNizYMu2DBoJvKCQt3XGCPFBS4AeFFSTTzX7eHfLFJuTBTjFr1iqvqSsYJa833e4Ho4hW2hkAr6eE7BEE5Lvcbt",
  "key12": "4dCoS7iDVtk9tHcujYtJS6ZErtWX4zSKdzQZzLp9T9BpuF9cUjP7n8nuSG57EW2sQ7k7N9KRoRJzra1B5U3QokL8",
  "key13": "47TWLNRk44TYu37vdeL6bUUtALJDxMvDgf727vFjRWYf8HZ15Yxzd5jzQahgdo7aDihrQYAGwD93sESHdwFsf97w",
  "key14": "H5iwUeFtpx4uA8rKSEWisYykEfrwGV2AbQhGRY43jPDTE94h2z8Hhd9X2RwxFFPrFuMe8x9rzDQfsQmkoZrvrFS",
  "key15": "2faJsNgV7UAY6iBpYwHWQtehmfVC4CUWKV34QGgnzurzGy6w2qZdugbWBkmUj6DWyHiEWUFtGVDywMwgs1i8eAiH",
  "key16": "54mS85hvkwoK59cHpS8ZgEswYMMbEVE8Fhumi6XCiGCJu8TDCBf97aZFpRoY135ckqq4c6g7CMfyJBMNxprhqBQF",
  "key17": "4goUe8U6815EuHRPkEjNoerndhJJNoxAcubSEvStiti7x5FKkNgCFVGgcaYVKtjqmmnXrAWfPRbAeRL4pJGFGJrC",
  "key18": "3wWHigHZUu172PZzvMpFM1mm9VywcxLfyKbp7ZDW3zN7Rrz1PbZtBKDfnirkPePoLiWM9R9bwVf6efLPZZ88XZsA",
  "key19": "4WoGkbk2SBwUAaBZdc8qWhLubmRyDNMNi5G6VFJUz44NXsjMCKS3Q737g2jwg1UxuXNQsyTxbCy92k95WPxSu9zv",
  "key20": "4VsvzrKAFLpe7mJNdXCTiGpkas2d4CEmK5puiqNi2NvA1mDzM2yEmU8y9KcBQ7g4rpY84SBVynbFFmNAFRsf6E2L",
  "key21": "wgKVHENnxZZYsKot1wYrYtePPJh2c4w58a3RBsbbtZYzVUKyXLLVYkrVkqVxKFehafWubyw16Mq7yW16tZamEsq",
  "key22": "37fWNJVnqmPGwfrnZbbkXtdkturkbVtq9tUPWp3DmiCh1xQuEK8jgSvyknChGvi8sRbJnpT2b9pwwMWrywn8RNGm",
  "key23": "2JrXDZEupnfrbz1eM8rvYMegmnBeokXBbn93woaZVQiApVcLZd37CFaawRzNQu3Bp2n8AvD8rpE1dDnJp2LFPoPC",
  "key24": "fNo7UH7GffHFGAVNVmTdYqMzeuLnewH4bV1V7XxMqmBGE8ftqr8S6p28dA5yRjHwZUzBXWUGSeubfoJ8WfPBDCQ",
  "key25": "3V8ANeoTuxkqdhJD9GXNXs41AdEKRF6UDveUyx5pteU1TRvr9rDh45Q3KpfQZy9gpD2hkqRsdtbcEsFkrbQtt7YU"
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
