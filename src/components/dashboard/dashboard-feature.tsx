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
    "3Szec4v2VxvjKAHj5UDZWrztwcGNFxVu9z7HwoBvns19CQWc8gdkYkT6CXBemaeaZZt4wWisaRt3rzpkbcYqp8iP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V7K2i7txyeSUGnP3rSmipDdmJPCG27npS94SonGbMbVAEmgWxEB9ihTsSaRcVVVbFVux3e7N5h2ds9AVzeMahTb",
  "key1": "58EG8tDo2AjsfH4oFhQ1pJAGoESXLsnaKppizHQ5oSHyqjkJyZky39L9jxpg1f7m31168q7rCbu3tjRZJ6M5pKtd",
  "key2": "5dqfemianXxjDpSnTn7355iK77b36VyXjj65kgSAnr1aR2PBmS51oidCniUjd6JdKwPhAsc1BN2pGgqF4mtqcVdx",
  "key3": "48iWDLzjSd2wsxbrG9QJ7Vjvgz6doxVVerf734vPFNbmQRFbW8NxJYYd37VBMJJdghHdmcuKRNcon2WqXN2exXwE",
  "key4": "27MXCKSWRyEWTfkejgFJV3gGdCqpS87jWdJUVGBJxBTxPyvdm4AGW2fW48ieYwSqGnQBXHrccvwuNEskLiVSai3Z",
  "key5": "2rAqSAC3sRw1PwWa5ZmTBwUbrhHQzwJwZvrbErtrdj3JszWJCma1jYK28LbbHYfhNEBb6i9Ki4uq2xuiDKWAwM8q",
  "key6": "BE9CyqnW7TxrcX4hCpuAn3AXkaP6i9Tf4d5yTWz9xouP8tvVbQxEQK1CSKPVu6KoGMag57nKjuQEpeMGHVHF1td",
  "key7": "fSaGShJHHmEipV4n4v7ZjT1KAzLjbefnwhpCDmn2zsYUUNPMWoK4H3mkMqtmikY7p28zisy8XQp2sxSaHTrmnAY",
  "key8": "EYaLPCNgZhn8tW51PYqh5t74pbqeFWYN829ocKCS71uQK2y9WTvtf75AFs9T4t1qJmgoVYvydExKzvxQ5XR4ZF1",
  "key9": "4yucTxAtg5F7Vt512GDG73cCFgjQHuUs13qRvUob1dw2vPc8TKxTBpcYhA25Rd8uVivtcWvXTBaDq9j1iPxT6P3K",
  "key10": "3XzGhFzurw3J6SfXyT6nAZyrJxkj3gYURqoPygRg33qnqLD3YrHACiyj5EBc1WVuUNQF5qqpTMxRnDk7WTttcUfs",
  "key11": "5jHwVxR6rZJNM5mrNV9c5yohF3ZkaqiyGRWHBbiFDRtFfqoRgiEphQtQKU5Zb1uGLPdicjuXPDQtZhwpttZNYYPF",
  "key12": "2LPNe3RaxXzbqiFL524rt3PArsECZTuJhLuuQk2QLEAsdqXp2qBrEhKrNUMNQzvAAbb7FdUtvYRTAUYYrmyw7TL3",
  "key13": "JT5iuSmou9GCGVbB5dJgCBjMsfdK4CbWmFpSFyww6ZLWqPhGB1gFcgcHpAxCrpNerzqGfQzPGkgLvnK21AythEz",
  "key14": "YQL3aypkJ6myTsiuwoYvHpzo63x9NeJm6Y2y1cTTT3pjaH3qcQ29RJ6MU6cSr3T7CnqgVj2WyCxMjtYjbaCUsoC",
  "key15": "5q67cwTeDvY9TRgGBgy9qQuV8Z3vonkYPSwCjNgxQVqWmBCDqSrZJSbgHYvs9B4yDYeuvHruKWneiGHwRCWV8gm9",
  "key16": "4ij38zpLnG7WApu88TnprLCd4VAvmA7fxTf7nz1RCeLi7fXQtNCSyjJK5apgjG2JofvPse1ZbBvRPXdjvqGTcBuR",
  "key17": "JpKHmQnfzhiuEm83PoxAXtmxzdYH4GnuAEwKH5F48aq5sdQzcQrVQfxYYo38ASLHRuVUNdtYPCpzGG5AJnZmQvC",
  "key18": "56F9YUuMRzNhG9sFBBP283YRowNcsapRvKeg56YKP87Dam1ivtRYhpyptJ41kw4kmFfeHupHjjTz6SUHs2kUP3im",
  "key19": "4ZW23jyvUcTS5G6jwrP9XLTeGz4DKYVyecBVY3oh83mNJ6XPPixRNVYCuPZJimfdWUSkhfgcYNm72gCf4FcQYS24",
  "key20": "4kqkmV65eVbjDUjn93ocia8gX4FZmob1dgvyvcmih1LXFnLy93qrSLpFcxKUWQqEWQQmNJrGxVBWxYCBtsH9UGte",
  "key21": "5AGFSBDwHwCSgP9QTzLr7vPVN2wuCGt8AePYqcoGvK7Xb7YA1Pca24kw9V76HiiFsLZCqM7aqrMJGDe1E6R4TAR4",
  "key22": "4XFo4FrgZBZF4NRKGEN9ddi5ZVvt5ns76nYPoVGn7GpDacK9QUuMKuKMnUMEvuf6fvNgpJBt16eUrDrThxJZ9EJG",
  "key23": "2jNhmzZ8j4Hn2ZqcKCZxDXCKgeRpQQVPZSiMmbCKcJLFemZf7cLFMSNjGG6Ntywtd2sC6MZzDqrbSBSPtcn3PnXX",
  "key24": "5hJQ2Szp2tf6JUgKsRUdL5syaPe1NuHdg81jSdKXJC93AaXBJPrV3jLnQQYiwTZKos2dX2WAN2i787wU9sovMvNA",
  "key25": "64q4i5r2rdx3w36gGxaVZbc7eUtVMezWWdeaEdVNpKhogZXsUu8jpH8BxoPRR22xyEh7xyS3wRxCgWTB78RuiqoS",
  "key26": "3jrB6CM4w8L1N7SYxDWUmTyPw3YPjx3yqGyjqXhuhU9LpJdAvzCtxVSr6X62U3dPka9VZTXf38TmNBEamUFsKUib",
  "key27": "seTp9nXML9tQecrU41opWQKat1QfUm67njs59gq72g7uvAhYwB8f3F5d4ghS7uorSaVPv2fms2edrMxxasYnw8R",
  "key28": "3sXuBecEx2Lh4pyrwdXKXmJiYbSaypeUcCp2r2KNi1JToqJ9Zb5fCRc3KKLWJBKRqUZsn7J7QzNq2pr7ggrERQQ",
  "key29": "4jZvJDPmU4BZaZdN3QgLXgWUP7z8SaKAVuJbKYh3AeK9UBVURNc29U2BMEwWm2ZBhK52hvgCZLfZR4Duf2wJmgqD",
  "key30": "5L9BS4jPruBQhM3YcZhTSi5sggiHDKpNE3319AAmdbJnK6u3piGw1EMQQYQxVgiEowHfcf9VUcNGTcrsjRsYyfbi",
  "key31": "4xKgCzHZyAQrhzQq4dhcwK8uWzg24Cg8hBVsJGuGbKApo5voqGQH19sMheb7zGWv6XWTwmEWRwGovE3s59emNruk",
  "key32": "4Co8yECT2HszzDWEZnPrTuWudMWWahamNmLMUboXdk632wKpAvGo9P2zoffDQRNvWBaTE2A2Hnq5mWxUmUEzY3ZS",
  "key33": "3TwQjSGRnwHFUVMvx43pqufhKQB5c3qXRtmxJAwfBqi31m61d78Yqx5wimbY3vknQG4Jh2LFWzzBSXZ5QB779yTQ",
  "key34": "66hoT2yapTjz89pjMdeKR4cKNbpXWsqS2KDPaoAHSf5gTBZFbaCemMLpoYcPwPMWNLb1F3CPt5vH6fMqpzrDhVD7",
  "key35": "26zNPK64419UUHKaAd5tC4ptFfpSYv3XybxfPVDcg8pnV5mPZn8uAFQCqRu4sx6ikdYzJbQR7JMrebp166HPfiRp",
  "key36": "3nWAE1dq7ANUshHxcGrLsDwLzsg849xAeTTDeC88tey128gBvRWC2CBeqepfzBjN8dwvykGHBx2rY69QJSif2oBE",
  "key37": "6gWfYQ3BSzME7qFwUR4QaS8ZDerGkvQoeMBmpEztdeUKV1mLYmJRGwugD83EmD4zjkDbS7XFGsm6JsHhqvt5Tmr",
  "key38": "47d1wCVPrKnNAYDp1aXVkHqtX2vX9uQA59fzeJ8EQ3mtPXfUxntTSzFTex51aC85KYfGPTgFiD5bYs4oRQYtbpeP",
  "key39": "35fB5aM2nTvKypG6LE2NqAny9PoLYgaaPrk38C7ZytkcERrnkyTrjLKgbiJy2ZvQs8iE2vssmwefPjS6Vo3D5gXC",
  "key40": "3y7XcVfZ4EEL3f1bXtkxDHg34aGakJprXuhZb7ig3bfhzdRYsmczN4SXTXABXEgxK4vhX5vnxxPYTepJV1E2LXh7",
  "key41": "4ssYzEQ26FPG6KL2huWrvfH8j37ZfyUVAqfk2kGJU5p6yhQ9EcDPHchHpPwUmFfXzW6yjLynAifjWdjLGKBLqphv",
  "key42": "3yuyiHb7jS1wnGhDoYFdGxXKEHJPEPFG2uJ5wiEVA9giazSapU8ucZsidYbg2cKQFf1tnts1Zwgj3EZHjBw8eFVK",
  "key43": "2YB5wHd9wvqKMSAWKk7YUCheMUKGUqRXeZXJEgHnuUktzQm6JZD7i2JPTy7kpAmgtKBRzgC8erFyZKjZCrHY9fJq",
  "key44": "3kvx6jeX1aD9QZduu7MbR8kUbKX266gB2AXWrRSxeSeqCd5ELUf8JNGibMfLNHRcNcSDVRj5Rfqt8AYq4nwBiriP"
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
