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
    "5816UcxDGJGny61TB4qQkTnyiXyaWZNPwFYCY4wwfFaHdTDN8aVf5czbnzB131geT9ULiGtjHBp851KBjRVG3vwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ecbei6NpiMaDmdXbVZ6omqGQEnUCdZe95rmjyV4kUsUrLHh4J136ybj89pmS3Qd1Z6h1cShAQQgQCz4j5r1o8Yy",
  "key1": "joUGs3PJb3Yk1kmNQo3Wxc9wkGK7jZErG31kPpUKRCFiNSBzGkVsYFa6x3nCNCSAe34ZdJvigUxCyj5ToAjVUqM",
  "key2": "3h4K1ZwKVrWoCDMQV8bmVps8c6636BxHk8RznpX2a7xt8qpbfTTf2vU3QYogMRGAafPcVVMbSwXuGySKdbVUcbfJ",
  "key3": "3s9BviHm9vbXVD8qS7fTmyKwgb6PXzAaMecEtXHX4ufLMmiHsjkqfRcMqmafQCi6deJQBNRMAhhpJg5M96fwzNcR",
  "key4": "3h7iJEuiCtJBMMKpKrMRm21Q2uK8Sb8CMN6xHLZKCFGpR9D2QXkpmGeMpNbXaXcYxEecLuZYc7PB6VDigwpv8a28",
  "key5": "5iqs79m5RkdeaB9ZmCJ4ccBFbbKvHgJozVBrs2RqeZdMpxy7FN5DD8eaF1sJkdNEBi7goqw6FP5eLq48r2U4jFZG",
  "key6": "BaKRSaVz5V6eaR9SV5cDUBewYtP2DJgitaoxucuaDHHeYzUL9WbGA3ooQBfnboZhEAzQwV9s22RW9vCFcL8AtnE",
  "key7": "62KwvgTPJoGT2QeAhL4sLEomMXYyefjDc3pYEhyrYw3tQhUR39KRnW5bxviCyfA6yWTCvDoq2XMJDqcP8jeSwUJt",
  "key8": "bqvt41LUbiQzY3Dd8Eoc5udbXcP8k7A5XTiKiq8DU9Wr7BPis3HYG6dKiQ1gUZGRcM9sjspLyJvu29XhAYex6UY",
  "key9": "2KEX8YT8LTnLGJG4EXhCARY3tqmjrrMBNSbs8rGay8qDGcnAsxBSZA3izaaqffhnS4MA6spmMepNYfB7827La7KK",
  "key10": "2nLvp87n5GsT4Gn6Me2XCuvpkeb2qG7Y5NvGSAbaKXrsc68jqeXdU91rckqnDtj8fHYLvGzRSGDuBzYCGvQjAFUA",
  "key11": "5RD5HTDsqEgqkpP9mYfpQrhYG2MceipAv5Xu5uYfmpK4yMGd9UHZiJpCYJAAEW4DUB9jWkdL3Zm5MFP2MZgDKRRk",
  "key12": "61KPkS91ovgwstwj7dkUNTZGE7fPSHPBeyQPYadWcv7qvEGyLPTS1tuVHb6NNXPuU8xQZVqgv9j5iqgGCmohGXcs",
  "key13": "6ZoQPkBG74uC1depnsxrt2CejhLpDY8DujaQkfBhFCUAfEtd2jzUz45xcDivqUZg23hpT9yTGVnpnLpy67iuUDS",
  "key14": "2jc129u4ww7h4nesSJoQJqxPsmztp8mYHJrA5ArQcG8fMZSZxThK9wwxhygzYL1hDJnqyEZhrsSCW2vz6UxLRUpd",
  "key15": "5UiybZDgYCu3ZqMFtuCBNaEXNtzq7eHmjT6asfNvpUNYgz36ojrx8QuS3TAAvVNAUcD6vYzWYtBvg4mpM35dAvPm",
  "key16": "3CvnsmUwR3Zb8pJRohkBtCdNRjmAF8jzD1e4PHFxesJYVBLWWGmVGT8mfJisXGHxCCZUbp5RhkV1v8dGcpearQt9",
  "key17": "34tctWZdBbHZd8kFgkYJ6onaTrw6yTpBAGXbAcpCywfZTZpbQWnzrvyN66KQwGYzaeiSaco1dBUUxuCbPAdmsnYx",
  "key18": "4BxpavnLJKCAbKm2qV7yqPJP9UcMjkJrw6jTQNMjun5MDGk4EMjgtKacKi1LeeDArazmApfbinLKenL941vhdmCS",
  "key19": "uU3C3uqgz6ScwGNwJHuNCDudqzY4yAmy6qxu9rtC8EqCBLx5eNiMaMRodCqHHsh6tVyYt3mqkhcQwtRpe12WyQJ",
  "key20": "9wLULmoUvpqJVeA2uFqxKv1aekp6FBLrE5XA7P3c1NHKgigfQRHYcP77TBZT3mBrUy6KeYCLmmhgEdbuxMkL9QU",
  "key21": "5M25fKiMYBPxCi7nZ6BDEaSkjxRsKdc5h9QspY6RjSzGm2vpCmWzb8myBFyEWXiUSLBg31j4yG2BBNKyinYAhby9",
  "key22": "52aFaiFjHCiEsQ2TPcgGdbMhCPD4WEaP6CyMjzS8YmUtdS8pWU5AZuCvRHzFWi24i4d5L7Cn8J5LmaQ6n9AYWcFW",
  "key23": "2LjhcwNKRjJXKrTicHdQLDyyfcECCC3zmaFGjmDk8C8KrZZW3uL7bNk9QYC6NkKdAfaBDB8HkJnP2aQzALdx1VRd",
  "key24": "pwjKJCVLmX6uUvYBpKxgqv6sVh9osYbw7E6P5XwrxMqJviDyA6wc2q2YPeQuEV7YW1CWxpJVZHosHH9H4QJUTBa",
  "key25": "3rKAqkXnyVC7Dz82uvs4hgy9rWXnX66BWsuEh8iFRW2q7mDrvAR19d1M6uCK8ZkPfMajV5xDCg5KZN6pPiDqm6EL",
  "key26": "2nhqrUkoiQaDEHpvV5PnD9PaSu39qDUAwRtMEubMah4zoNBoNQUTC64u6PjQ8vpzWB4hxutb4cfnTscQ7nKqPnRX",
  "key27": "5mu8VFksNKUSQVeZWvvDFEz17rpwwqXy5PYnHURwdwTUdWnDCKefTVHpmPNcUkLNPx5kbbnL3wWChfbYxznxD8j3",
  "key28": "2bcMLdT2hBrKWdnm48foAZBZZa7TbTbETU6wVcFfDSTXVhQg8kLCjUoZSAmAhbSRD7g6RsTmrUAecznDtbQWnuE5",
  "key29": "Djghy74Mo2NVpUJNyFoGT4SnuBWeovqLHbNdG4ToVvguhZxT6Jd7tdcNpg3aq3FTs7vtyygYTM8qSNu9Pww58Gj",
  "key30": "3rixBeCNcQ5gzYC3kfhoAxRNy9Qe2xVLhYLZLsrumz4VH5Y5kwszxrKW7UiqV9DjoCYc6d3UTHVgT9DRp8tyB1jD",
  "key31": "4mo8hwnu7LuAn6iXup1tpAWmAyp4XJQ9mHaK4N3XDKKqrmwvpe2NXLUMbqrNomc9oFf3MQhmSCJNgdwGLRKTHiXb",
  "key32": "5t7XJQT2sk6A2en4Niq42qNVrbrtx86StoudQRVa3kmuizRkRqZg9Smy6ZEx6b7ndNYhTDTFwBUnTPbBuBN8WwvA",
  "key33": "5Qia2jGyNRaX4ZoxDvs1s6knaVKDfv1CUNatpvGAuLQnpBPVKjwE4hGRm3n8aVjqtHwFrUECXUxXT7yxmvZDRJGM",
  "key34": "5u4aiToCBQqnmFn8ewZrRHbH1heMdYdbBwi9mc7na1X5Gw77AVJ2dc1dBymVp9NwAFySuQ3sAvCzY1zVMfsPcbnp",
  "key35": "3Ae6Q9dXu3viLE9ahvSfhadvwYeceMJioH6sEi4DwmGjbmtMhTDotgn7MqcoaK57n4oCSZ112m9B5kSwX8YwVDfR",
  "key36": "2TCYcqdDGQKKFXj8wF47kd3jZ528eUXiYrzBb6fBu8tK9CQYUFWed9jBcDv343nT628BvxDzxNbSdEvfFBDMMTbc",
  "key37": "aCitqPqLx2tFLaqhgd6kJQspGdFZpdVpvWJzPPPkTC22zMuVdXNvSLbkBHWeihMNRF6kznM3MhZmvCBZR5x8DHf",
  "key38": "2hvgAWVE36GhS6yms6gzeMeEhzRL3Rf9WwztistHR1qnqcnNnTNb152FbY7Yq2DcsKZeserQ2TRTM9wzuJLrV7jQ",
  "key39": "616HyPcG8qWcyH4ZuNpaBHbxgGRMBmYfcy6GudGu44EK4XmNMX3BqHJMVCgfjWrCrWJwsobv5dzpstxh4SPGZ6Sy",
  "key40": "2Vs4MbouV2rLkqv5jhgvow7P3a72cCGzj2azsndrYiYJJFVN1LffVTsdKnQDJ3B1HSGr52Ptkh6XGXecrhj8rFDU",
  "key41": "3JoZVxf9W8TsRf24AkmcPrSqHGJRxQFyaRaefdxLEo8HyEND9PL5BSnbofTTj9wvjEmHq8irNyn6Kzvc3QzkXB2U",
  "key42": "2U81uzBEnmAxUCSJR5QSaG6BhWRCcKxEzCVRZzjLm7zxj4NNg4zCgFnALHsJwihJ9zmfRdv5GVCvSz5KN4egp9xU",
  "key43": "5nZGZwaPhqP2cKQR845sMxbLDft5FfTgBJ8GB7Mao6qD3TSoe8jpAHarvQHjW3UDXYcvbAt5Q79tiXGxj4AbC2MG",
  "key44": "EAMbG9cLWAs6RyS8rr97yuvuSvxfC7pyRt4TW6DKTFEsavU5HuKy3X7GRfFKt3439tZArUziSBhaXTfygv6SNVZ",
  "key45": "3KwZM23ZS4vGLzYyxW5DczucuEaWkh98Wyr1QtYMeP8JawbXHLNTbsabV14HczKAHaisy6bpWku6XpMWbGLbZTzo",
  "key46": "3dukAy95hmTV2bewevT5fqGUuMuLtzsmVtzFbYCG3XkkEKqVi3peyYc8rgkzo8a7kupGexyCvbbs4VkpTthScxeT",
  "key47": "PpaAxdKcFHp2LJb9uLrgQGebx8qE67Z6RpPdkL4nWKaMU7RLHdzktdgbfFbLoEChpiMaS6v79HYN72fGwzBV5Lp",
  "key48": "5sKwrJDzn9K2PmNZ8Cqe1dK62uCMZseNXBCHhbFfpVZnNuu3DDhjbhFgehLZx1GTxKedXLUg4cPCG64ZVCLBrA3K",
  "key49": "27vKjxLbQiVC8T9QvFbqCsaRAD5fcpSnmREQQAkNBD5rnt4CJjvd1mC2Wz5nuqQsh6HzfAjt3XhhxYfxV7rSRPii"
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
