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
    "FqjRus6R4H9fTT48oYnJm2eNTtje8LjShE3o5aEiVtZbSjtDAjHnQVayUZnVEMZQd8pEd8JfTWwA6qjyfGV8a2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "679fczK5A69EPdmX1Uo4zRLXSwNhA1JsEFxyLHQvdZAuKh2X8EGVDAwWBcqRaZKYBG5QQFqUBLMeqNSsnb2y17xg",
  "key1": "523DCjz2J7tygE4M6Z7tju1bgkGpHUbmyapSe26s91EmM4cfzYg8YvTF8DoFeAWopayMM4eHmr9f6DtmmrPWweYS",
  "key2": "4ycbR65WkdctzLtTDYaifDSQLAmHU1RG7DDaVhJmMAbJxVz4udcXkUX48PiHkr2qmUqgrqiq8KXCtombEC17fEpE",
  "key3": "5qqZgY7Zg4pRPn8pe3un9rRvQtzspABr5wQ3xd1HVqe3LXL9QZsFs5eV2ya3dcVN7qN99ymPsnEGwP6JUAqEq6xp",
  "key4": "4rG76fE1BfPfTtyRUVwNvXMYix6haRw9TVRo9x6gyjak3wZjUVZCGrhQBcw5gr1RLCgRmSdiSLLuzcQ26coRgScM",
  "key5": "4NdYPJ5zqU9vmqmdS2r7NUadUTX3KX5AVBSV81K6RyochjiCV7ZWRzkT6aFaCG1CMnxSjYqMVEZ1uCxtJmwdANH",
  "key6": "4gP5uFZxhFiyztYU3MayjYRkAZ9Qr5J5egE2F4Rqd6Qv8g6usJmvtxx7mp57zaeTDz2JCefUJeekDzcKXZxNX6Bt",
  "key7": "4nsk698h952x1DVsMCErw4XPhtPn37rbUp6o74BvtZJdv8YUzdaCiwTwFNaYKCw2DbiH4zAG2FZCdmcjuwViU4mC",
  "key8": "62pbr4YtcM3iU3FUeKGVBNwZLDFAfachhUQLACEKqHHfEzoC6PZNYttzZwgLL6qNcUDpLmkmh8q8BQ8yCBC5aC4Z",
  "key9": "37Wo7yjA2hrL1RrkLGV4EbYuva1GVrsDypSsXQk2LDxvKgJVFzhgZ7DkJqgsjWnr3fmsK5iEsbPRSxhYEs3kLz45",
  "key10": "4mUZKW8hnyjaxeXh6tG6JWKsNFZEUGKWtJcgX597JKFVPsMX6rw5ZJJE85nyDMgXnHw7mXW45ffDch85v9bwAxZp",
  "key11": "3qECzrS19ggmLiFqFHKLkMAHsc9enBBBmcxJD9aPE9RkKXXZ51xCn7fiop8TLbyyc6x6PUiKxEHtc24X4QLjoHcs",
  "key12": "4T9oVyoMxk2wRbpnayrAK5keNNcPwaWrVRhfd736FTX1obGkomky8JVbRWoZZwrx4Hg7uNRwyd6Me5j1fx1bT4kG",
  "key13": "4YEX6e7cDtp5Wmt7foX5nookzhzKmGkRfu6HDTkcNddHbwo3pJkUpUYxJJ9dKUL8sWkf72Gnb5kUnk6kBnx3SGn4",
  "key14": "3dei9z9LXnk5CY7noftfreEbrzCvvxiBRQvJ8x3Tc6MgCeoJtSs5cxgYw7fdwxH9wncGFVrDRFobQLKXfpzkCcWS",
  "key15": "S2Bijd6b6EqWGEDBUBkiVPd7et4uhWxH4JunC6LgL77Kx7pGSZrss54S613ToXYYoxoWZn4q2tcbzwbxfeoKq1t",
  "key16": "2GhXd4XUjYd2c78QT9ZUriZewrTj7oUm2en9mkv7fSAvHbGtuogMRpA7sQTg11Nheu7oPQLkGvbydwZzH871qzRM",
  "key17": "2He3kugtQ7Cutcc7zzrm3rhF4jH7NWYsqp7pf6CF4PKJ4kdVF2e2sbri9hYz8JJ51aHw4Y8S7gTQhEHSQ7n4stHk",
  "key18": "2teuc5jrMpRZ2RtNxQwiKh1iU2Zui2Xaa46vKuKA6u1d96tFtJ283V1pHLA6dAYFjZ2YMEgk6fhgAmgKf7pikhQ3",
  "key19": "6w2B2rzaSd28BQT1ZhmnRXgb1NYCoXN4dNdE1SokGBdbqpAGUskYwYPb9mKW3tS5FJbuiJBQz3FhP4dyB92Bc6A",
  "key20": "5SywESzMghC45HABWPZFnmx1AC4g86BUPsThDSDvzcgyEZ31WQJHRrfFsrwjZJJ3rJd6aAH8jkcj7aKe3A4LAqfT",
  "key21": "3HcQ3jqZqgmiGfaZwvXdN46idW55gQUP4vvNdrsDnhgSTwn3UN6y6pWTgzokjCkmgx2F4LG8Zhx61GzFpxkfUTC4",
  "key22": "5xtKth2W7StH9pNcJrtrbjEoSW4Hq28oa45tupRbW4WhdLUmLg6nDDXecbhTWhkiQKYEQEbUrcD36CKkXAEKsChV",
  "key23": "4ogWqNTaVhPHmvmopsF7FME82UhqVsjw45Th8S2VLtsBqSYuk18EnpautuyiDczvefTiPaih5jLCc87i4EL2AVRq",
  "key24": "2WjBwsnYgJdqEJ5hVJ3ELotCpv56ui3Wesuv6JA5DkbBMhtPfczgEXCccX26NrsSrrKunRZ8rCCGVLfvhFSS6GWv",
  "key25": "5zG7wSYovq2jY66DxtyVujoq8fB9R8LsicJDPx53j3WQH5Kp5AGscUXd4dNzNu4gnsyxHTt9y7VzzXY95su2XzSE",
  "key26": "63Ak88SVBuVGDKumYqFiUCriojsGBGNnot49cJ6E1AntHpRFJSfrVSScW3z2AThKvBDba7AZyowkXuQ3CFP9QXUF",
  "key27": "2tC9LCzzaTs1cwBbLmETbqGBxDRiEVSEZJLjWFbcMduqwJBwvFGaM59NZugW35bpZKMSwYPDo5T8nkdkidir22Ys",
  "key28": "5oPXA9mpx3JcgAzxv46bLZBnU1fg9xGLJcry5NNZtpBgVJcfbP68w6s6DP4GwkSjnnngxNrZQab3bZRxnqSfPiaJ",
  "key29": "4rn9qiUAneQq8M3f6oCW4kRkh1iGt2XicohojertCh8kJeJZi9AAX5Ef2LULRvsgRSsc7bQBWd6pxzPm8S7uzLaj",
  "key30": "QcogcHw5HtGa65Uaf51k8qJjyr19CcvScCQY7LngSndjAPGsGMZtzhBzdfZVzcXdXSpVWS7mKkdvuRAsPaJxYPB",
  "key31": "5yzpWiVB7iUH2sg9Lk6aRGubTQAc1VipiSSJU2Xjnw49s2eiTsFtkvwc4XVWinufXTVTyBFgiam2Ks6KLvnMcYWZ",
  "key32": "5grvGSNKNMQ2vvngzMknMhoK27oLBL2yeaNkLiVP9faSsttsD4R4A1nX4LDAJ1Wft6Qk3WBRp5BWu7XtvLFam2yS",
  "key33": "Yu1Vcy9H1Mpob9DV4CBLko1sX2fwYS4nVeuyCH98LXBR836ksnBoMbYHHX5Wj8rPV2LZpZuDQ3qpC3z21UZEBjL",
  "key34": "2uLPoxtsUmdx37uR4WvvrqtfshFW8LpEht5VgKQWD3ZyLCknUW8noRWSiXMyEFU4hVcTWeZprXBdx6Rpx6orRoyz",
  "key35": "55MfyfEHaf2t9eqLEN1GxbxeRFCsv2y1M9Qi971U4HVy2NFw5Zb1KVewTSDLEF6j5zxJ9BPm98G1fdPT9ozvV7fQ"
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
