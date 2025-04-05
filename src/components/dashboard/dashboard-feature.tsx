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
    "5bTv6auiCKnoewjHVWCo2HCxahe2jSKn3y6K5qwSLYbVUEh6EpH1bZcjEHCXfRggehwCsgrKtqHNEWTVzoxSixKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V2d3jzu9CNiVJLzzzGrjrWdvf1P2zw1w2ohm2DeLj3qPKWPUGKay4prtiEiBKF9nEj8TwJBzY1nuHTCkRFhJTJU",
  "key1": "288BNudU3ayV2KiHCuKwm3pUyonGQQzGM3eNbc2ZWYtNi7xJYq2SrXLuPPdfeMFFecuCArvN6W5hfNSVxjF9TuVy",
  "key2": "gXm9t5H2ToSVmRoJXJyGeCE3dWheUWZdvrLVynSFsduJCTHxvT3Mq24qcQ95tZM1Lc4mGLv26SC7KoRJu3t5Hjk",
  "key3": "47MDibixgYBRkPHhkYvpMDe6ecz76Ahit3MUbAViTgXLGDcCvptWZGAJQjz6BhZ5Ve9vt1iSgs9jb9TjtnWyJCVo",
  "key4": "63QJb1nAXqvZyrDJiGaercE2bJxq6N5yc1SEagA5tCma5NmxFD5F79NZSgP55tczr8dUbLKj77DMaYovRxBmoo6J",
  "key5": "5qdYAdstDs7BbufJjkaESjthAfY4tN8LWRcq5HyX8WzBtBmnXhRVoNNGUA5PofvU5VoeeD874TJsSoAMBbRTZHRM",
  "key6": "2vYXp5QUjmUUNCJ2Bo4D8845T5Ro7HSLKr4aTEvw3duvd37dtpVs1Dwh16SCnKkWtYKNWsHmJUU1cfhedGbujAMN",
  "key7": "23JyF8UGSHUPbYVNYJ9oaVH5mhtt2U2cyAz8h9XMTj4GmzTXRVpeKNDp8QJj2XcRhQ1pdPsjo7Crh8AE2vaQJ4zA",
  "key8": "2Cm7MzDdzm4zvLt8jAEPjYNTRYSpsTJXYuMUic7R97wmSQjps6Y3e5KUcSyF58U5WpQwigmmxzqvY8ETjWoy43eT",
  "key9": "2SBeaYbpcBg6iqKyQ9tCnexvDDgLVPzKviA8TRGeqaPWTyVct7jnr8SJ3qqcNUWpKAa6nVnhWAmbeXrSBQGvmqGx",
  "key10": "25DJgfhDqBoyW8PGPih67TV6BCxcDufMz38vGQYLpb1ErRGtrbV4w5UMRqNWHzELykbD9nfbj8oVKpEEwtPTCLf9",
  "key11": "2RdTAJ1DVNzVT3HBHtpguvi1bJveT7pUxxL3C6faXnhMYyZSLRM179m42F7Pc8N5jVgGpsB9Q4ByGZHAXYyS3G6n",
  "key12": "bmBEMqUcSc6b5WKVnSTQ8paVKuLf7ngiBXxJBtisJBunWw84xFPhp7ZZhgijdGuZyBbRoLu6EcDQT2DeYYejsJQ",
  "key13": "3jAxqrSpGpajXgSVAbb74guQeGCjmG1tvmYoY8GkGKdR3XKkWdxMrEDnehyjKpc8bbFob2hcAfHVdD1s2jKXsDtN",
  "key14": "sFANg64yuNs7r4ZV7bEpQHDBh4RakKMCXverNdmNDyK9ajjw6wA3DRQQBmMPtYfu1NB3Zh7rJpW89HbwHRp6CQq",
  "key15": "5wsDZWmrwCJ9XgBrXDpmdEHtqvF6G1U2bYrN5gTGFrMom3dKS4Z8qM1WUu2AiF2YjK3JaLAUbcimM8Mb2dtzYatT",
  "key16": "4h6EKbKa69Pk9KxT8FG6qa6ZxBAnSKATCvNhL8BKQ67G6VL8VeCVF9Sa5q7MZBvh8LNT3Q7P8Pji1hY5jNXzdFGr",
  "key17": "5T2er7vLLSKDdFmxHcda4FZQerRaSykEWg5PAC9J7tUxHzQ86HJSjHsozebv6e7dxEU6nRXkFwEbhNcvkPy769id",
  "key18": "4ZktUhQnjbb1dA6B4erUJPsEVFFyDozvziU26MxE5vWox6CSVWYVEM9YQYDHiQW2Uja8adWLk993URnrommWy4m1",
  "key19": "4UtbK35VWJBAr8wR7ggiqBNFFMhymZNQKvUk8DNzRcEPG94HCJVEkK9s9WjYJW426X8CS79t4cPMMG48tLDnuShq",
  "key20": "52VTfq78n6nPrc2eBRX9AUbzt7kmLmucjHM1ajJEdhatpwcKM2cihcyXJWxuf6XCYxeFLoERDbY9P3WHPPrdQr1s",
  "key21": "21iCRopQxJJ5K43r4peuJd3NDfstWfEc8sqV9odgFjrEEFBwKEbEWA4s6PGqfutks6BEphfx6SJAd32QLcYRuhi6",
  "key22": "4DCyBevWBT6G61R2c87L2xGk2zmdMU4Q3Qsbohesdr3sAwmNsVUM8tLiKWvKhu6zbZuTt1UZp4Y7L5WGodLz3iFn",
  "key23": "2DyhxgCrNEPTNeiXVoFHUMrGfat2u4e2VCV7PCSRiNNnGkbnmu4Eq94E5mtfDyE77ZEY2TpQYuvP5SXjq8woAKWi",
  "key24": "56DxtHHsQX1GCpPVtYnmGr5pRGMsYDuzfxRzMiGehwvnLNjxw75P5W2P7xC3E3pcu5TzzCSdFDzxXWGi5FyrgKYo",
  "key25": "5XRrHGdPZqk3VykwosRPiaEMEAJJRWpq6XnbYZ95MWW6J6AEsJ7Kto8foadU6KdBpNwXipPPBRZLCpoVpnXdkJtt",
  "key26": "59brwW5VsHEf6pQH8oDe1JFuNutFGWPTjpb8XN6eh7PZHL1h8aQjSZigwFgonYAuGeZo2kUqc2V34ArwzFj6rFbs",
  "key27": "42a8bG1iRVU1mTJVWR4dAPyDRtEGaFBKYDsrNxbkJq3597YwWqqvNEH2XEvngLPKa5jxgQhHzVyRmLDw9NkzydUT",
  "key28": "3eLAWNk7196KqbYv462sNcrAqX311ihhgHzsL7fejG1PfZRzbTsFa6rgd6Py5Y7RvrLWYecJwfNFjs8gYGojBLFK",
  "key29": "2XBywsN2f8Nu5uHB419bw4pHxoCup7v4aqYKTiiVyg92BSqjLaGuUpoKXKcKZFcPVFoxKsaEQJNQsbuayb6d7vvQ",
  "key30": "45NDGK5U4LEL6dtqtima7ttsLp7VMfn6DpqTczFAF9CDU4qSudvzo4p1JDXRQhNrZj1c9AaQLEx1DFRLG6ygBtB1",
  "key31": "rpYAeKiLx5wexaRuJpmAA8o7x7PUjUw6gWcJGVascbnMCr5tN23Qf1V35whbw3Bxbro4HxQDPekawSbYEN4q6Ng",
  "key32": "2K27DXN1gtZHirmYsByLtWKeaQi9wfUKWV2wJQwVcU79ig9JUNLtq1FJmpJsYn4PE6HqMTNy58SRwFv3BEggToWA",
  "key33": "2UxK8KU3ec8oZNGoeTqYka5M5zWNP4smwm9uP2hD47pm2q1UinL8RQR64pg9rZiwZeD2h9ikgNLG9hkVKhrseojK",
  "key34": "36GP6CwFZYTjufqYMEtd8WtVwq2APXSqXRU9JoMcQiyTMoJxR7SE8bq2QEh8q31s4Xt9XmWBjoQzYdVCvyWwJBSv"
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
