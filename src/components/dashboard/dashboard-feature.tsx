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
    "3LY8UCik8C42fTfP2TMJmiUnCcaQRBVpeB9ysbAD67mRT32bEMtgdhUQQnL2WSabecgNZW6eNy8CbAU3GJDur5rr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wMdGEo1oKwZY68eyxppCqovYzASc2hKZ2xEmcATRz1HfccpoSUbv6YBJWEyUB5MFJX9L7ESmeaAwj5qDhubfTXe",
  "key1": "2j7fKsZ8NWChzGHFVrMuuANPccUNmEtLKHsA8839nh42F3N889MCkxj4K6wXXVi3Dcdb1GpLVTYzJxEixABYiD6G",
  "key2": "5SgAUrqEF7K5gqntnfSuP9MoieHf3hCQJ9s8sbx2sEucFeVWAGB5p89KtPQDb4atFmAyQRZkx8yy9Cm8mAMatWtZ",
  "key3": "LTiVQqNtcAdzoY45rLtmD145KscK98QNnm1cDmPfqUV27QHytAoc1JwumpnoZNgY2wJZ5xZE36shbJX6tH1Lyyy",
  "key4": "2GkNMPZXn81uxLdM2iN4qNQUJFHvWudmw9BRhJjJcwL9GczyG7mV5vERggQMH962LQ1UEHFg7dohkzXVgXZRbvQ7",
  "key5": "63STGmwio49mebJ9ncF6ueuDTNn5NP26jCKTdieYmC1HhEUYxRDhtczeheot7r91mdrKF11YP3T18x2MomZYppav",
  "key6": "8fLYcEv1YNvLZq2QYB3159afr1f53gGsH7QhFw5KdgVpLcHo9nTfs974NZqudk4MAREK3KYi3Hp8SEUKX4QvFC2",
  "key7": "3HzRPGG8wTP7ApEw3Ns7ASANDu7KqM84jnjVLeP4pVLJdDqakQV66qsGVBv59czxryrkKvfniK6eqtKH2cPVhhUH",
  "key8": "5qjTT1bFzmEzkMhvH8iWVcQYZnVqHM3xKJ7wdsnQeNyKPpebC2qagP6wA54znpjY25dWxaW3hnyCcCLUCpHqJf4J",
  "key9": "4v4FggH9Q8ibB3g7uHCvHr3yZdUjy2vV8FfAHDu6beT1RHzDBatFKcz4gvWui6HSffsMMFa2VDZ5Ko2yQ6RjxHLj",
  "key10": "V9iKkgtqVovauTEbpPCAEeAuVUfvfekYaSakj48aRWLoTXjFwms51KH618SkxggLZK4FU8usj7NCdxT1XZM8jCN",
  "key11": "2JapPMd743EfNx9NgfSA1g2oKFr7bS7pQMbcMUfkVG63LvB2jPWUyho5vihVHRavU1D8YWWMjWJwjjvc1RwakyRA",
  "key12": "3HhhZ8VBpv61vXHVFbFCTNQQpugdpR4c5Kz3Scdp1Fhu8yhn4CjLfy3b49EvjfDde4hTxK3GXvFYYySbeHT3PadW",
  "key13": "5rRDN6preaoJBTHWpYQsUfPWoJrMQVorCesUqLXDsSjqfYaKQVrEwD5JUGMjp4ys5VFQeoRkFTy2CGTFsTnCACZd",
  "key14": "cntPgwUBEHpodyRSbaTtGy6SkM6wKhyKCg6u2axJ13nMixRsNQsBmrRAsnLR6Lw3wprGSbByxVz79SSJDKfGDfZ",
  "key15": "5AeJy7GMjjh2tSdgVEyejD4WVU4mX467rQjsEnmewQHHDMPSihok4d8UH4s1mGrLPsnSmofwdb3qs2ZhgAkoX4Ve",
  "key16": "3j9Fz5CbW52pVABteczgziT7J1KNYkEwTvqw27jfeHf9rcBDN9nJBW6i1AVGJoQGGG2HA5tLVcEjCE68kkPKqDLo",
  "key17": "4KSKoTaAyxp5ZxNogo9FR4t3Eu1cnP8vDtnogRkNVQ8ZXhPVTfBq1hZcUrwGTVDoUK6NpDLZzPRoAJeBC7mEbHug",
  "key18": "3rJxM6LwY4RcVgfKQE1igXJbuno16QtfGLQqcEDNCwHEFD2icwTgVCHLtfXpH2BerozyAXGsv8g5dgsu362jwBVo",
  "key19": "3rFT8HpvfkbTTZgZYUgpNb6RRpwv7UTEsU9bv8a5TsAsjMRuXQhJLdEFwy9JNqXAtY2svPksm5ArMwfFATCSC27k",
  "key20": "59DeELiJr8yAkiqS2dC2tx9fDC3t5Bc2bKQ99KhQUpXXcbBqtybWqaHDUfMaJRYGoRhWmHfK694CFKgcYodnKfy7",
  "key21": "SQ2eBtMeF4CYjhXCGGFYVeiNEm7h2eDPZ5zkhMN1KDQtqE6t4L6gsFA2qRpttSHWab4ZDRGYGRpCyHbniyPPGF5",
  "key22": "5Eqp7e5MrMwbdVndApP3GCEFp9xd5msWjVTNDztakB3DEgLPKsG1X27hy9xxXR4gHD6U9s3zUvMqWyDXa6VJDS6W",
  "key23": "5YB3n1dpneU5fDwRc3jxoLqzS24xxBhx8tXseLhY1gnmT8wapD8be9i4X13dNVScwhAVFrGisDNJrLUHDMuKKJVt",
  "key24": "4DEvRUeoKRRPFUG6SsuHJ5JTA4GJpWtFQwGRWfWzaZq6pYBnCKgQYLkNQtpduM4vQvQUbcfdk3CsDzm92QciubR8",
  "key25": "mSPtHUkzLPgk6ywyztC89SaHrrkSBuBfiyebWuYkQEMnSzQazYqRtscYLrXsiXn9yjqn4pVBLq7pY7i6HSn9K7e",
  "key26": "5m9xc7KiQpF2YDz8hSG7onJKme8CqbFiU2uHgRgPGDJ2bazDnb2QQXtxKyfoHTpvAbmLhzZq47i1rXSgaNaMev44",
  "key27": "2pCvUjdpsCGynxmBbW8b8esthh2RHkvqMN4z1G1MFBQCQJtK9vznUQirQYMqeiW7Qxw4XSuhitqMf2w4scciFGfi",
  "key28": "TZ1bjr9deF8XtJqzgdF3JB57YUNKFHoB7yPctbaitmLGPVDpdfG2nJcmcy111NYSecxzEwXMRaPJDDMTrf6abGu",
  "key29": "3yx2D1aBAHioNN4XnPX8BnM8EorF9Km96cZwhmPa1jgwfKBSWYBTyyNm96p81jPgHi9X4iDvby16MAGDdxEsYBzt",
  "key30": "2BjyNFmWqgYLHVNBAttRFbZoX4JKsiWAAdqtbrDKSaTHESp13cuxaY2z9T1CjQXvZS35mojzYKj1DxUDfiUQjhqd",
  "key31": "3VBG7DideKjEJbXz8ixubk8mDjghopbxVCP1ftCTnBbxDg8xkJDdD6W6kjTQsXJ3LrtEFpuu7NPPZDSJLN8p1cea",
  "key32": "BrkPyGGmDc159G2Tew82e6pHgCLrFMFHyfCA1xAxUNTiEZSBdWdL7FmaLRa9BUBMsG1CfsAXff45howBDRBx3Vk"
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
