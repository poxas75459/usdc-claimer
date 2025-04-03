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
    "wLEH3u5f5uEb893tKYtLT2SoPaHoCWaHKsyCPYi1cxNes44ch5ePEFYQhMzkBePjmVWrnWyvrJQMeiVzFwCAbhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f6RGGTyc6SBRXmNqqD8UWyKnFynT6bmigp8FifMRnudpaUjPSyp4jMDnbz7RU2j2KWMTmBr9c4P7E6fF2m93M9t",
  "key1": "5zPfbLztuzJRN5rF4TiLuhvCFapJGK3vDs3XNSLDuc2u7XwpkmgPu52AJdDaH4MhnLByEkmaDTE9xKVRgdYdrmXC",
  "key2": "3gcpBid5TFraFZjuvFdmz6uQEcq4dczVgfZgBQWLA4NwJD4VwvpYTHUXzXGrSFmGfrqUAa8y9wvXqkx8hgL1HAqb",
  "key3": "4Q5dPThZEGvKfgDw8dbRp7bSpYmTboaTw456xVNPYgvWxvoGDpDzrZVhhg3Lo2d6qCVPdP2piMo3zeykn6NJQb6i",
  "key4": "62ZQYVL7QUsquHq9CBuRZGaN8mmYrzzX61JT35ag9gx9uXzGTTSyo6eb9xDfbK7tEc1xxd7YEbHGogyN8dgFuLkU",
  "key5": "3awCdcE2YkuPiEF8pBJCGDLgVpdSdP66ho2bNy2YaGPDZC6VyB7kdLBJ2cQC4DS3WmNdSPdVHHvLMpWSKB3ow7zV",
  "key6": "5Pm91mHtoEXjYqnuvbVCftVHB2LraW2P4bWSUpan4ko3W1AUzf6AzCG31dXKYPug2ieku4niLtzcWwvNCSc4fMBN",
  "key7": "5tYcYKZx8u9uHXz8Wg5RQZhHcEUa1NGeuDB94acne1vPd7QNg66nLrQpLAXvbQikEKAX3eL5co2szSriTfRZTW97",
  "key8": "39GC2ak8oVNCM2df5Xm8Jy6XTPZXEM6q6SpPJvqHkYgDN7CNayMcFoNRoM1MJP9b1HQneCZ3xhYiMokrhrqqh9eg",
  "key9": "5cS5CoZRGuWMmbYVvjpywR3p53wgUC99nq52wZoAKm2r2kzNhkdNrxWhgMvtLZXy9sAt9jQwtECavjJ67aPGSwKq",
  "key10": "2XX2Ce2tU3C5SNnHqNAmuZLA1eVm3Fbx8XCk8oDZv5pGw3UYSm1Qox6GGJttcEifSBYWtSEVR83wp4Ch6JdJevai",
  "key11": "2aiJth4F6Hq2YftL9F5NbxuPHtY6GzsvQeVohnVUf9xp6fhWjauJ1UXp9bP4iSmPC9HPR9qkeNtyPze3cmJuHLn",
  "key12": "4i12CeBV12zVh4hnNaKrZdoKiJ4yQbS5S3P1kjZMhzkjzJ2LBnhWBdbygZakKBKVhnqqYfcZxSFNMGraWq7r5m9E",
  "key13": "57Z4FrRrxdVk27yt3Mv6NH53AKvHJW3A2tafqKX2EZ2cw7EEBQBQ9yb2KGFgtbtFkatvwC3zyCvtEKNS4tsjfxWf",
  "key14": "SxcUedZjbBdM3AohUSMBgUbDrucZ1M6mrmLnkqMZGBnrD6qkdtGZavAdviE7Uh3rH5pwCGeGpUE2d8bRrjjPx8n",
  "key15": "3mbk6be35nkozHGKzxBvNncRsmdzYMUG32sq1kTAGvfW9dnTwBvbDafwt1nDvqaz9YA6E3VQ6msBcWK2qyDLpFLu",
  "key16": "4vF8i6j7C4kGXpcXzAA5FaD4fcX7Xk3456JAQrryv8CzCb4gPuSuPvVCZFZz4fgvcwzWfEouMAcNShkn9H63jZYq",
  "key17": "3hpxaWyQi1TCW8iTP4tKEFD8hmNTqfWmmbKtoGindfwNKTSsNxfK4efqCVVWs77MNJk6yu94mWUy18nbsCjJJUn",
  "key18": "3fov1TpbrQ9Pzyidu1VV2mcGm9xxq5sGkofwzLWfHTdvPA1uXSssUG4qW9JNN1a1PbKjuFRxMgfoA6eZnDHgK2cy",
  "key19": "2GuTXBXZe1Fe2mR8C16oBjbgKVsQrng6qgsdQRDke7XYfWf6qetp4iDvCd5WvwEP2PyDy2fufXonnztVmfqprjpx",
  "key20": "2xTDCvwHHTvssUTbZJrRjFTSUxDfhKSUXRqRhtTmUt8R7b2teiQC5QWhSrWE9FK4ehxbzGhGqhTPogabUqJkHvmb",
  "key21": "qZz8HxtEikAQ45ghSB1BgQog5cVqwUy6NLwGhAcgXwZY7FuhbME9v71KjzdPLXk4edofnYYJtWhTswLXem3Rjhy",
  "key22": "527Sq7h91n2fV97vH5sJ3fNnqGpsQie7gC6Y6FDpeWzhcayJ7vEreFnarFPGetZXdEPspCAbJ24k12YuSCf2otcg",
  "key23": "5yoBkZvA72CQqT2Yt8wFAqS3ivKdHJe94Tfgvb5c8zyWUXVaRWufxtx1tc8T8FQAxqn8EjuyX9RVDcx23DDdTc2w",
  "key24": "3AywERi87AZNXSonXWna3djgz3judagvwjMfArjAkuYLguDPZxh3JiYnefSkdDn29DtVYwAP4qEdyufnYLGD65e6",
  "key25": "4Xu4cubAKKmX5qkY6bVk64X6g9b2HZAMtYZDoXZZ7DCKLXM92XQGJBUVev4FrTcSEYgmp5PYn1bjqsKW6Wbv3XXj",
  "key26": "2cP9ZP6jfd8isRhd4robdB4NWG8yhMqZwg8XhfuqRVgDLQdWBewCj2m2VPLxdA91E3kxBAzwauBNbbLmK6krWG3C",
  "key27": "5193vcpo31VnDrA7mVfdNkB9MhULdAeNNjD5E97FR6eFvCuckuNjb5LUvy7MN7mXrh4PdQm1BgDXous3TuAVXfh7",
  "key28": "4zu1FcCPZ7xH9KFcrVEP8LBqNwUPWLy5WVpxcsSiBhdiykmd886jLowx4EzQJjbEsSjjNQ1urp7pADYTCBVkimbA",
  "key29": "58k2WvfKcKW7xU5tuEZS9jDg9vZ2YqXCvKyXpdJpJpxA2jhoBQsKaZmoGZciVYZWG2yGroekAgLe3RjocMatEHTL",
  "key30": "5ge9KzPTH68knVBaEj7JSxf2ab1UFPX62oRzAALm4em8Te8jQJCNEkXEwFtfahwG6Tep1aTc3tb9mNjhehgP4ZyR",
  "key31": "4StN8PKu8nG1R3zttDH1uT2eUBoDbpVoRFsg74HZyYbbV9Z2gp2ES9jXaUwPVdk1XKExH6UGHLjX3CVF4zBzoDL5",
  "key32": "49nYrd1uD6dLBw8cWbTMFZ6fdfU2DehQcVPhjmxipovvdDAhfuuCfzxrjhkM7vZ8LrqGHitjukW9tLCyqxwkRFUL",
  "key33": "3Hum2Ws8XEbcHvbN3RsFbveK11P3x6ZecgZRh5ovEVhoehv6gK3ubGQboQniivL8TkH6SEifMuQbq3jXghAtXQjM",
  "key34": "65RCgkrkrtigUXFuf4khYKjK54eXGtAsWTnLYWNvNUvD2u8r9HUomnYMJhtqBC35v3cURGUCCVnbfqw12oDRF4jL",
  "key35": "4PaynovQU3g77gsnYtg4bUhEr43o4H1grXcVGNFnPnYtnmHyf6fAEyeQr4HwVKGyfGWpRWRfFAvWC24EFjFTMwuz",
  "key36": "uHU6g5rEzQ4WaEnKcLmx52DVVrbtGntJNBkwcWNyBubL6kiFLL2w71tk7mHRe2QTVfPqv289GuVbiK2AVn5LWdQ",
  "key37": "2xZFwVF7EZg5EpEqzM1HcGWDqqoXiqyiE3LZQSBNwNLyejYWeFNyDw4VPzVqehgqzruP7EFGsb1144SbiyzZrnrQ",
  "key38": "HhXZz587gpcob4MtLLbtjXeoN4nET38H2qX7DrgcrrsEurHuZA2eZ2Dra9BGfaXbay9W7Vfqna7VqFQhKKNK8iM",
  "key39": "5g84bwtNQPkmbYFHYQ5LMn7jDReDDLEyx35dinhXHL16HDnEK423QreLD3QGHzuPX5DYQSobz5GtqjCFX1K1mweq",
  "key40": "3v3SBZs42xmQBD3RujtkFcKvg6FtvZ4C9nE97nHaaX4XLvVubekgGJaMKBFyfWEqt5s7jg7fAnghBLSRmVu86CYb",
  "key41": "65AgSocvJ9Y6mYPbeycwUpd8ffJvC2cUErRSP2N7AjW56Rj5PTCs842fbQf3x8uq7dd6E5BnBXLecB6Q15VD8VKf",
  "key42": "2N9pBrnrthLjdXVuf2vfmZ6pwRTiESisV2gb64sP34KBCVgZaBg9nUAu3RaXMHP6u3HpoZwDzD8QEBzWbSJ2kAGW",
  "key43": "3GEV4b78S6Zkt5TfQBfFXzbmQ5TnQNm51o6EquewhQgXZU4GmwWuFrFRyQdmUkD3jBvhN6nmkHs7Sb95ezduDedW"
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
