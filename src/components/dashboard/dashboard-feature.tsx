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
    "4N3BdF994Zo9A2YqrJTCYEqwmNdSHAWjksHXJtMG7A25KBH7j83iM3GwZcYvrG8tKHXJG8xjPDNQZNa8uc2L4tkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ap1FyMHHtjJEiVtX18CNWzXHfyVnKs8wVQ69S25ev9urx3UP1zYSZX39YWj6ucUUdUYtA8sS3R9ToFh41Mr2p9m",
  "key1": "2ZrEuosMWAvarYdd9JA3nCccwCK97uMKvN14ZSKj9zmjKpTNSSQnTzdfThBVDZeZ7RKYjF2MzYiKC75yn8kBnFD1",
  "key2": "4ViVGoXrGWhh1pgQVU35xcKjzYHAEdVk4EfTYiKfgdh7CUw6n1r2w9W7GvFBPJsjWDpLP93rK43vTehWKzFrQcEj",
  "key3": "5GizUHRG1emAcYNDHDhWPxP7zhLJtiwf3tqem8s3anbe2aApcawoT9ZuxWcb3tbmKxcrUVSaE6T2nyWqwiQX54mE",
  "key4": "2qirapNCh1SGd3D8hiJVBEhtyngd6JibrfAWKUdQ4dswPr53suDBb8ytHtJiHwZQ1yYYbxMyYttL466HgaEyc9im",
  "key5": "3d8qsz1kS882rwXinwRTbA4BYmKR1ZDagGfLJwcytDtkEdhh5AgbeNdKih6tPLA9XE8Cw1RKrV3WbNZ4VaYs3yvF",
  "key6": "2ujuv5eNZfmopAPj2kwvM1TB7VuMQfq8XBo3xHJGhc33Zkyic74JHJB3frXQQox7RWyqyeWtK4u2HbufNPrUCAhn",
  "key7": "5RndzC4tWbobNorGp4TgqY39qxCLwu7yVE3CFBWS2Sk3Lrrs5y4RZL6b81a82JyakqtWvzFr4HiCsPjrZymrMAE2",
  "key8": "61ogy9akUVZBwRiwu4FPMUAUyNHfgg27scFa1op8bDdLtDidqWaLNyRRUksxQ8xh33bpC68pb4uXvMyVnn4Xyxp1",
  "key9": "2DXuNybUqF97o1QWqiAQREj3uEirQwZtEQ9h4VNJiE3dq157yv7poEUUqEiGwgby7MFZ42g4nHCmVihLww86oyz7",
  "key10": "4ZCMJN399qwjrd4RUzWHdx8adYzGbHTfubb2M8ffnxkRcrVUeVeEmWSw8n5P3Gqmp3Yx3xNW9Ub6j4yEggmXKdhi",
  "key11": "AQEzztnApQe4cpK4SDETfCxSuFc588CgWt2e7txpXLbD1n1bdYFZPiTMnwFAcshv6C1TnwKK3xbgWdsHZy4YpZp",
  "key12": "3Nyx7gN3NiCjWL8mUUh5HvdyDaT4v1MqpKzMb665KJgK8sERSfQ7Na3Rd3yDKMvDQ9bwHNDodjvheChEuDTFEfLp",
  "key13": "4uaeZL4bdzcqk3sEkhZJCDifHmmjn7x6Vyv8tVyQ6AhgxPH4Xv2fBy8yU4YfjZQacvGa9g1pZ4SLEdxr3QrHgrkN",
  "key14": "3HHyK2e5vSfFG1ze9vf1wDixBRX36wnq1SgnZpMqHi62R6GGSWWn5ZpetLGNJrvYGhKSMdz7iXRrgAz1HtGMhSTS",
  "key15": "276jG22wxkriauh5qo1fxWJkm3wRLVanXNegBwbTuW6WkZJAZLfSvSXvDX3AkWXqhFqBpAWFgV9ZpaLeJGzJfZoY",
  "key16": "2tbyH8LQvLdCVb3LCpB38Di5wUZzDr3cf88njFSjoA3rqNXibaTWctw3wHPqxFAzqejhTSUzhnTq74hDodSq1eep",
  "key17": "2tCsvuru3coP9MqrG6M5JASa4tXZPtZ7mtPThRmTvixdMbzucSTD4cxPUVwv3V2a1zQWvCQBDopm2moYM5JKkSNT",
  "key18": "47roiaCBDp5hmu8iSb7tdjpykWb5UMGzAjhwXgZk8jzLFhcRwvBY79JvCe2tkDVFT8vt6wWe8DoAiGu8zerYd33b",
  "key19": "3EpUX4HVDPy6SmMibRPG9FiBV7uGLkS2GEY2Vp5edhpyiiYpUmgVdMvQFuYgv7iHFC2An3WmfHaCDeEyL8C7u7Sv",
  "key20": "3xpCkaFmZqZJY6kUMTwqEFXH2zn1ukjYkR7nHY3RRDNwPKD2iBAo5s7yUwT5GUwZUHqQq2K9beETS1XdzXtpkqyf",
  "key21": "2LbphYGzw51Uah8fnJyYTC7xsePWBx2esHtgqUXR6bDPkuFGex43463ZFHNq2C42u4tuhvBXuMuEvvVCmCCocmfP",
  "key22": "37CrCMVpaWkK4wqMYz9fZhVEuF86kGT72QzUh4vGBKPusbVDjzTbA8N7EhPpZVSjqzoP6Ev95njzdXRC96yhnfeW",
  "key23": "qsMcSEhvgSoh7nH1vdamsxrwGR5oLn7M2dhB9szSDxFLZAhchVVRhiL3qaFGgSHS8ts6JdFmpFBH6yZ9r1KvpJS",
  "key24": "KmEfyj1pNMsNBmu3XnLNp4ocwNVfa8jsyHY7Z9gxZGeaRGmu6YDW47aKXHzqv6emX4tEZMSonhNNCDf1kzVwXs4"
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
