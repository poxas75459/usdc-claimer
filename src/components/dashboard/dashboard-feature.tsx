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
    "hbtqMpnEhspEH8U2mhjcsVZHHiHJYmvBwenou9GwdSh6BedSxqbgdtgAyhzsxBiNKErnGfF9Pd5NM6sMxkocSzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fHnNo1xoxW9niBfZQaz2pD9XWHWZNZSbtKcxTTJbiikTszCiyhBM7Xtjb6pTypkjDGPCCVFcDeqQGSJ2xDaMboN",
  "key1": "52D5CQQCkMEkC1QD8NPkRGhNhnScyPdawT1iwaqpasB3ZjTCZ9GbwArKg1KJEwyxdGP4AxtR4mncvWMZRfFfSV2N",
  "key2": "3aYxxfWR9qMpgAhGV3FvYaMk41iYTZmmc3CGD3Ts2pgQEPJMiW7NHzC5tRNyBRdRP4SAUe3fPx7RV7LmveLTVxXe",
  "key3": "488AxYxZupothburU9PC3Lq1TZYkm9QZf6j6qySHawLDpk7VfNoZUvoL7brMLnRxsH631QA7Vn2veduPJ4HCqVyj",
  "key4": "5FCPzLJ5Pvyi3wDz4fjSbqM8JHTpovsZ3pLqH4DLXygxq2mb8jkM3NnW1cc4npfFdYXJANRraKx5vTkyP2Y9Ay9g",
  "key5": "4m9fgUcS96CZKpiu6nrqcczr5nmwP32pfeSCUT5inQDD4JnMvcmUJGW9fHhqzyhZdSvEeYcx4Huq6fbZ6Lao5Rey",
  "key6": "4oNWexegyDnqR42tJkAeRE8z4qk8SNamTN5XoSe7CPxcdSJbjhCZLfaN4m9hAhvBPYzZuCmERLEhHvjuU4n6QGiT",
  "key7": "5yPuTSmcf46zHLYKzFREkGXLKxcb3pg8T7HnyZt2JXw3poGmSxSGLxyLYb785ergGN8YEvX8XnZx892iMzXCCYKb",
  "key8": "Cc1sxALHSBwZYQXbPVPD85JzcZPX37MMov48NDPMY7AAx3aGE5deuuGALqJMAqXhxScBTDwb33b5GRijfmDP4HR",
  "key9": "5WUbEx3d723r2Hsnxegwix6BDZUGEH99SE5XHD3xgXGLLoU1Kdh6pcBELJV8DeY4ftJ7Q13MB3cd2DW7uTL8PoqH",
  "key10": "XWuv4NrJJHCtk6r3UPkoEHor7QSwE1zbF3B22XbdhCdmmM3BVVSMzMEnjjDRjkn7yZJQ87Nbw4LYgfXrqq5KKDC",
  "key11": "xxe9h1tkFpGSVe8uFxm4GX54TW5zNQ3vAaahaps8sUbdD1qAcHubUEdrPqrFXA9EbSaa64s7zVmJHVc5eKqZDZ4",
  "key12": "3ERF2jYkijPjb8ZFEEjPKX967KHoKTzGfFXVrjU6C7rjUjdCXRgVWpDWm6PCzCBwfHHPjjRUwL1pv7NACZotmWuU",
  "key13": "5ygBZSs6YkcqqFWtD9xF9m3ZivuvbG8ju4zEa7H2ryvUAfqSAUV7U8i7cHBAB4MDRZaREAya8x5rEheFbf8qFf4o",
  "key14": "2x6waL7UbSW8SAWFHrZzT7j9nsFmxrKWr4jj5QhiDsKAMPFq8foFHtjMo71wzC8Qiym59Rav2kJVniZxJkVb7Zdq",
  "key15": "3kEMVUWm1iannBgvdRRDpSChfUcbtJXn2SFC7BhWuEaCKv6WD9r7tJZJHRakq68vGun7GKrKKyidAuNhBUTVRdwv",
  "key16": "QTkQnB8urREdpDgRPsy5obLujLoGggNP3g9GpHj2s4aBNYe2uHtEb1h3FppjzUgc3RvDwj8kuueHQYiJ3VsGqch",
  "key17": "41v5KNVdqTsmAtoVBAhRq92R4dieCS4S6tsvQUG4s61t9shvyufkEqTBtKPEfeM3PuyVV4uynd4MvQBhAzxrtR1X",
  "key18": "51SfMBb3nFJdxirRcY8PjQ8i1wh2gjnz39oksmmQ4hkfyM7Q5MGnayUmWrDUDpx9aUz6dR1XrTGXoE8V2JmnGn8q",
  "key19": "5Jqfb6seDhqA5wJbyyA2PcMWEnFUpy8RfgpXgNCWmoYDQcxW5WZmm45ELhovrsHVmUHnC4hBz9jd4aSWLrDFGTjT",
  "key20": "4E4cjsJeB7noxEJCTmX9yrfw6YBURRFbnDcBRYngBTN3QLKmXDwPApbWfpMzUuTmcBBP77TmjGsyU54Y9sRmEs4d",
  "key21": "2XDet3eoeeJd7CHrJjeHMuYApxaZy5hvnQxnqu92dLTadPcQc49jGKX7Ha1yENLVH3QjjmAWFNtrtzMypq3NT7nZ",
  "key22": "5Z7xy6H7QvTmS3hfuDgHXfRbjJzMgeFc86raG9hGSRBJv8tXNFjhadBdnu8NEyboPCAa8yT8W6Ln3kx9WqQWTEZx",
  "key23": "2joqy4Tvd4RJNZDFtCTGtWANgND9hNV4kahYwXY2U9VxEuNKQj5UZLHhn9T6s1GASXm6pRQFwEMn86CHScMSQgdm",
  "key24": "56ehQAiJKpgq9h4cBRN21nWFy4cnTMh8f5PdP75ma1HPGnPwBGfFcSPuFFaj1mviAmgV7PUwjvjiUb92CcdNWBGV",
  "key25": "5QFDfkcT3czypNYd4B4ZExfaKi9JLqMDtEcdCE5eZK3SPBArubTiMQFkoyf8LJ68yCGunpYQYBE2Q17EW7E63gpp",
  "key26": "pZDnExtjsesJSz3hDxna4bXj2yb87HPneyLazYgMW1LBoyTEktxT89JihtFB6xEx7RyTE53XruhcztgxJVxj8na",
  "key27": "2c7tJqUxMUbS9sowkD2zWALvmsqzjQwRRMDq8a1F3YBT6AZsPTNgbxJYB8TtZLaWdvHAHXHQS4ucH65Bhs57rQVr",
  "key28": "3B6j7M4MkNM2RKnQoJFvG17ARx8H24YWNiAujVFPVToFZQwoarYGwSWHDK2FHvYYCChythxbWvMAczC7dgccVzKD",
  "key29": "21RbHynNCawzwNQS3k7ivmQnAHtdmaCbv9KVKPffyivcCMU4PsKkgzEJVPTJTUPthV8arKN1B1GzoL6HHmtu1UeK",
  "key30": "4pwy2tx6UtYfF8oBEmcYGkKPg9Q51Jk9UBPviScmWHh8GPJ3xHDEo8oX8vypY6V2nxRX3ZNVY3xbYjQrKo22Miie",
  "key31": "3v9mNAifwqx8ULpxWwJwLHLcSKqq1BfJARgJKHgmqUENkGrVeRBMGE9wD11dUa3MjtUVdxJBktEGN81rgxR42RBw",
  "key32": "5Lgiyq1CBMhFV83rkAumUUkfCmEAmWQhMiD2N4p1pWyjbYfR1yvFWrqRfAqVAMpW7W94PS9Rb83J45jtndbMcBt",
  "key33": "2aKK7jnP8aU3EomCi7racckdv5LGUHMaWxmZ92ZUruDmsSZrGLFG9DGuNowPuZAPzRF6zM4NJbqQESyuy2xLHizC",
  "key34": "47YCBWqo3YiZwXRYKeCyK2Gyb7esAUJXmvUNu4RanL2d5GHBDfgDoBSnLffJhhNcvR5gnxRVXz8SGcAgsvdofHtG",
  "key35": "F6vSEfGca4XhrDyasJKs2n5bS5yxDe33hTzU2Cb5UEi5f5e38pjiaJeZxF11rMJwALqvP3Ze3QeDz96YCh47zk1"
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
