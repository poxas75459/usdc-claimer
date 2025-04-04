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
    "4SRCYUkDdYudytUV3igpouQ81Hc4BJAz3Td3Tz4UbSeygiGefqoKHWe7EwfEh4d3MZku716LwHiNrnyZjb92bQd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LBj8LkTVzVu23417FyReUHmJhUUKLnZDALwmTtJmbwUT4d67TEG6XWV6BVpCiHUygkwLtWtXg5mhTQAx2UiE8py",
  "key1": "34zupiwzsUyTx2tz3xCQLJz8Ggb2sXZ8EjJ8VykPRst4jVLj3R5heqVo9P26qRaJ6aEdVhgQFocpKApxMu1N1PNf",
  "key2": "5requixjSQwgRHgkxfQD4FDmyCiMfrTEB95kPdnQGfQVXuo95DoPEWFXEAR4KJjttQTnLnVP8EMGNPRMu1mWiNRx",
  "key3": "3Yp7y2Ak5idV9qtuh5BA4jbxqYHEfCMqkk3AsKPhc8H7REKCcdZ89gjvFqN9cxu4CfWLpcb2iNzRvqu1QmQxdE4P",
  "key4": "2M3qSXX6WnEET48uCNDUzmWyXCwpxvdTQTfXQ4evHS4YF3k13aqP7pmagAQubA96MyPbqKogfJPNEXT2e2NmRA8b",
  "key5": "56Uyk4cUYCfjTP1CMPrHrybew4oeDFNV8BJCVijdoVQziZuvAgj41HK2iwx7uHowxekL7H8nQRn5pA9LqnEcqDrk",
  "key6": "2rmxj2Kc6HNeDyqwiRejY5VYqm1hsbfjQCQkbvqad3iTF8bjkPq6WkErQDPrA3eAVQTizQiL2FdpKsnFpNZjdY6v",
  "key7": "3rToup2yRWv3WcanF7mBdyaYPmX3crvWyQnecoLphjnAKDh1VSMoaMPhkv3MqJPZVwsKUq9Fm3G4xpbpV1ZZWVof",
  "key8": "4FinXySuu9oPHw8VNd7DNgVR2mqJd5B8K5EGuknbQMZYW7PoYCgx6VRjop6V3YUR2TXFpaxwMD9QU6z3GrkpVdxJ",
  "key9": "5VM6CDxM2KmDwm4VLEbU2YUgt2LMEPJ3V4D2o5EoTv84cnBNzyoiCuVTBxQS8LTd93ptPGPoKzRx3UiRxuukqHVi",
  "key10": "xwU4FJasniHMXggiLAzsDXaaF6C9cuLnTjfeNpakXb9BwaQdpTgGo8LvqnmJN1CeAeCze8kwDM4oBP4tXE4s8MB",
  "key11": "3FvKU6Cgna8HhY8ASZnxsCDMqLoHUA6L57jQsw8pcV6ue9tebVUYKsCizuMjfFcFTNEyNwd8EkYmLs3DthYdYZD8",
  "key12": "qJ5UV3MXLABYbYxJ2PiVJucueTj6S54cRU2HnL28QXgs6yk3cW8jSH2oE24hKrokNy881spjDgQotsfrzaUr69S",
  "key13": "4dz7RoNcUqQMpHmdHqjipAVi5ocgutmxkeB5W9FcCofBiJ2B5JjsxaW8nHCarw7YgkXhvU8rR8yA32P9QSkZ7Kc8",
  "key14": "4VUBJvVtEgW4LaoqEEFy8au5Hw6yy3qSM293jS3ChUKWmBhcYTDKD3sHD8GSAn2816T9ZqdPx6B4AmqDL5w7iXGC",
  "key15": "KUopdnrtuQ1xXAGbzZr512TFixxLi2Ryga8Bx2YXLFyAHzCucoJuYDQcSC8eKPAUX7C8dHhMR5jTdLUYGmtEgNC",
  "key16": "2jZeGJy7WtNum2dhX98nm2vt7JjCmC4Vi1AAPLwcBdX7MWtGzQDDCW1VodwMdPYNJtAgbJQVqYAESf7XHjTwvdfc",
  "key17": "4qkpgAj2MYLF1QJhTqzvgk4oweUjBYzwWkoDwNQ4KDkjujTtfakmrc61hHRPxBc6Ynvm7FM93XEbvm99TfoesGvk",
  "key18": "2CPrm37iEicF72F75ji7qeZV9PAEuU14xftvAL23tGFZA2qH7kcz427wFWDmQxqt75hUdq8E75EmNqYAwZjsnYCP",
  "key19": "4rmQAK3iyStS8ySdjoKbfy676WKTrLsXG77HBeG2TjkaKPFF6Q4xFH3LvWyhD3g1bX95EYpmxMoKbtmmgqVwr1Dw",
  "key20": "2aaZXDiPLVNTMTxxZoMJxnsU43M1XeHnYZWaFZiNrBoNC2EHV2nPabTTcuZE5ubUvRCibEwmaC4k32h8ZUyweoH",
  "key21": "4KQk8Znkw6Eivvnb9CfGp1XY5fjJTqzCQKSXkHH5idiyzdzyZdu7Rx561hW7HbuHiMvQosxphnBvATBJvi5MrUji",
  "key22": "sth8AayJ3ALdgizq7j6wCdueQeJTReTSWRhYQLU1SiMAH9Zvnkvb61emRS2vTgSwmLj7fJo9k1QyG1nGR75TmAU",
  "key23": "4ranSayd7iBWxcxvfghuU2G2XF7mqpZAU1R1hf3RtRtth78CEH8jHof1V7L9Jt9mQDxuFhR4TFuJEjDtyyvCS91N",
  "key24": "5pzG1RgQTJzncyL5aizmBcT36AA7XZNM51xBzAk9aNurUpBiqEkncw74eFmYDnwFvJoyseqvsLQoTu5qyXHhsDWa",
  "key25": "3n875XTyg1NTajxU8feApELA2Dfu7eyeJGUf3hgwDJFPgwPbSUyHPo6AYgdts2iCaT3PZwdNsdfg6t2hzehNgW3s",
  "key26": "5WSXb262bX87Mq6F7mVUC64vgZ6wQCQw4VvsqsCFoLy67wzadMRYGGVWxz1abifjXV6KLK9BvzwkXyp416SSUN9N",
  "key27": "5HGEDDzKjFTgBM4kj962dpK22ijzi6cd8EdYGfJ9TxRDi7f3F3Bj7pL5ToLezmvNwMZmYK1Ywgy7dFSY9vHrnuxz",
  "key28": "43QjHWyoGmVAuYmqyhndHuVpusNYf9hwH21qdQbQuezNru4PXSaZVbL8NSQCKqGvfQs7VzaQWwswYCKeCSb6ZSMJ",
  "key29": "3X3yiqarp8ZSmRqCpzxgiXesLeYJFXExk3GRWv5zXdGn79BzfTQ2FCh2XqKcQcGuUnT4KgWuUzjMp7d3fYi72Wkx",
  "key30": "4oBEQjK3w8c897SpHRNZQjskdrVSAuz1PETVLHBi5Vv5BitkegaVg2nKJ6LaQE8K9VHi9ZGS4WWpByXjD3AUsWZp",
  "key31": "An2dck2eACf2ky1SUi6qjQTxCHu8cBk3LfMjbSweF8y4JNvigmtheaeAPiWwcNqJFMwXjVnz377VML5hm5yNcDq",
  "key32": "4CJqywA3WY8RFHUwDB3h9NDxTUMruejryb8Y45yCDUevdi1MbDKNY9NxiVBQuKZzGsQZywfCbfURCRiEXPgdrxTa",
  "key33": "Evmdb1NNFhzgHKH25ASYrJphkj95tT1yrpJjYN3ZZzXV3wtkPUuc2hc2ZTG7r7eJcAeW3i7SCR2er8bNHRfWJGz"
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
