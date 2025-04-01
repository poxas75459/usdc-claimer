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
    "28ox83B135FSjw3dAcSAAVLK6FEfGNYctKsJH2ribCyBQuF7F9mNGinLyrZRSYyZpXaTUBUf6XmdE3s38uq7nYM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NnBns3cthVv7sKaqLir6hG5nU4cUxLM2rESbYazHfX94GFYfdFsfxGiib7oPYsJiJyogqjRMzUKF67aQSX49Uhu",
  "key1": "4zYs5uygJ45sDQHtKdX1G3GadVgf6YjmSSmLXC35KrxGCU6vdv4YLdLrDsGqBzSR69fCHAspwc44PYDKCVhzbtfN",
  "key2": "3eqUUnawtPfVDsLb7tHrq8Dg3gc7K37kawyT3pLk2NzWDjg5cT1vs82EwTmUQVaSR7Pj9Q3e5hAUJKAhgruHTswc",
  "key3": "5VfxqYvxhNiQq2YoMjDe5d7TksVQoiL7GHKcaU1YAYZNWHTWFzqKkdDq9rZ6TAkhiXSkn9ZZB9JnikemQK1vWSCG",
  "key4": "3CCKasZCktK4ZQPHdLNDLBKUNsG2VMQw4vdpteEZ85dbsfvBUHKrjiDbhrwq5Zc56xyVZwAyyVf6NWaLzfYLC3d1",
  "key5": "28mGx9BwoooJGbvUbDTdtYPFdSotxtGTazdhUjMg8fmoXVcq2vogtGXSP1Jg6xHD1gXjBge9xh1LmtgAdpo9nigB",
  "key6": "5DFR3J1yLSNBZzoSAxN9iXqEHaEL2Gw8WHmNQdNaFC5BUy8bKgGMeTcPma6tCuUUgx5vkpzaqTEbSMBUppXUxQi4",
  "key7": "txiN5VutnjJwqY4Rwjq7MCrnpyRo3CZ3ojjzXu4Pdnv9EYxW81RUSyMs5RG4ckkfqjuEtUrbPbpvuQBoTaNnE76",
  "key8": "45ntVDj38K1K6JLQWdgfVnoWHpB6z7VWGYwqjerb1uRGKCeh9HB8JKp8F3xKRyppfH7yHG8kpFDEYoysCcQeyZjT",
  "key9": "3135yARrPszVGCweWk5Vp9Uw9xi4W7Y1EPrEeXLMj4dFFWWjNjVm6QPLwjjbxGXt1BC43goGtsfKYKkS7JLxFEMu",
  "key10": "35jx2PsKFMJU32FUsvPbikjo5oihUYX3yCrAWxZEAfGDZutFJPYMT4YAbaXCyiLFcNWXoMjWTZZdh2cFLc2w7CwT",
  "key11": "3gRibUEh5zy91BiNYKQGbzig1zLxuEotdjALgCuqHQgXGGhavMkhWPPAZjYaxd5KA5ptp7VFHTwAnPpoNHoaqKQw",
  "key12": "3pCANLAmyqRLDjBb9T4A9JtE8L2BqMQKY5ZqKZ7QWeakasRvKSmbx2Ug7jKwgUcqBFdzkF6EsPzDYcCkghnJy4D3",
  "key13": "4pFGta1iQri4pMWGquMTJgBHFXsMLwaiYSr3vSjab5XnBTCa3q7VcA78QWPgAqEHu9GfWNSczckBhuWtLRWmbjmr",
  "key14": "5Un6yumzRMCLfpaF2nB8sovmAP8fKNuvtxWZtgsmLyBTJVXybS2ZKCXjAG4hDE1eMmT13QuDSXEN3HqU4DnDGzNa",
  "key15": "4pbcgGcDrXjhUpVdVBNypQbtC8L9CjQiyLZ711rfoQwYR9JNSv9xyRAaLvesbXRMxjZFtyYUUPHLGFHW6EyGNMyU",
  "key16": "2Lt6kpoaaz65VwFD8V4DVHRsYi32rJD2K2HAZjmgRYfGZUHQaQdg7U7wkpbCGvRdJWecvMVXvZtBSPqkWvG5efWh",
  "key17": "dfZCWP6fnsGkcrzqNdbUfqN8N8qPCfVDe81HUnZEAV6yBhHQkXxTgY8unjwGj5xZVevfoa3MQfMCbodzerXaiwU",
  "key18": "5yRkBXA9YcyiNHYH2MsMwzxDcdVL9fAM1oMioJsWLZXRTnVUYR2fRCRUpG4kbym6YKacorZ3nYuFWDArxouP2ATS",
  "key19": "5VvmSZzGvzePwraAgPAvPTgAZpd1XV43RfzL9AdtMuf4zh8VXEMUS5xNNgmQdD97Q841EnAiFR2XbNy2ByqTRnZJ",
  "key20": "4RLc9gRZqXuNPA3X8pHJZNYf7EkD3rt94C9McnM6muPLsGdaCzHErafpEwqLxF62o8nWdUX8quvbncvyc8oBwvSQ",
  "key21": "2p6haUJjkv7AnNXncK2Dtb3mwgh6g3Gj4tfpRFwT7meYq5y8wYJ3A4ksg7Uyx8e1KmsrxM8iwzmhGaMmRNRVUhgC",
  "key22": "5quER7b5DRy6sG2uQUipFZrEMsi9nDfQE2bndG3Hjw7fk1LevVTq5eVnXdakip84LEQjiNHG1AcTFBfAnutCi3nE",
  "key23": "42cynpjTkgMYoSHtddajmPkj4wq6m58zJACEoBKBhgSFGQVEEyah2YZm8YEop6cQNBbhy5FpThWs8HQxyJRGA1ek",
  "key24": "465hdH2muFp7qJzUrRjerAMTdfGLmh5PAL4hRkMd3dwPVLH3MxHuqdyk6aCDtXVNq7EpWkqy6C8kXs7Bbbr35GC1",
  "key25": "3JhaGa41nmgzVXvrkLK3Hk75wy8RJHddoGAfe5byiqXPDZEFT6yZDskcZsyK6JdVAGXzPPCHo4moVRmY5mjhAxCC",
  "key26": "49bzJtHiEbxNt42kKpRizHZJrK4B1ijGJ2EExbQYvZ39Uzto22cr8USuydto7c6FiYRKmYtcqiFdnJGT7MtjkzAN",
  "key27": "4ULQP4TQyrrkRiDzMEr9HG1Y2bDCDbwUQAQtWzkVcZkeNKghPsBXNLXaMJhP7nX4xwG21kkB3ZfPgBPWMka3u7Rn",
  "key28": "5DY6afNvdLRhnx1sVkzKCgrypz6SEMvhZAxTzKXzUEZVddC4oaFfxdiVdoJdUQvSC39PxZEriNccPtRzyoqTKm1b",
  "key29": "4Dzrw96J5PN9Z3T9oPk86BxsBZ2yvKxtksMhmZB8DvjQSvxPG5VyNgPrjXjnaCNponZ5Rozj5jCb36KDWdvQYgNu"
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
