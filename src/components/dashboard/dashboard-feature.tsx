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
    "o39LwYmK6gkPPwtkZFixY4qTJcvXCXm3z6pekiZLjQWeX2KTrHouyiY7ubSdUaPUDAfZF9nWY32o8SuQRHGuh9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u9Vjwh59TFdTYGfz9bZLAWyz3Hh6Po7gv8e8J8CpUgEHCgVctx3dgwzoTCkbzAtUdZrEgggiUgrnLNkNGx7BCJN",
  "key1": "2pQTXD1wPggoAsQ84NKojagXKygDvQ3g9pRE1sdbHC1adPe9o8vhADLjSKnc4aY68TY4utfbMNEkvrKoZUPDpMkn",
  "key2": "5geGTnY4eijpZTrRSron8ak3nDb8yGbahny5E8etRneDVA4o19a3DWi2NK7AHuQKcxC9m28m7WCz5Dpp2s52Hxjk",
  "key3": "3dxCmDJDqv8Emswe2nW893xqZbqcEsESMJco35djANaUKDJePYxwWsNrMegXn2R2dTvCS4KwhDF82aKbcL98v8d",
  "key4": "d8KxKqfMSpCsrWJ1cZtkjEELRXxataaYjGqh8qDxwgKDZMYXY6VerAoUvga4cuRDysVn8eEBb5Cak3Xv3fUjBQp",
  "key5": "4stxHEo6bn115n3gAxfS4P2cMDY1rNyqJ6NuaCwmYFWMQgr8Wxu3Q1ePnBu4oWoTgn2s6th9Riuf249Th7Yd8JyQ",
  "key6": "GG19YN9LHtRsks8EbasmJcj4wsqsbapsgruRPKk14fbAE2jtbhSwEuSbMURKeo8MPJnHQYjMqrxmLfhtWEoEBmW",
  "key7": "3FHvFC1JcDyUPaimpoEsoiPXCB2uoKiNL6P6X41XW9SqDBvsQzwCB2XvxxJoLu83ZJNHBqYXK7QfsSdKmjoBzDKA",
  "key8": "LJ8kXK3ULnDzmr86SD2FvVbRkqqLxTXMBN93uoa2uY5Y3FAwCXKK99ySmQuzb8J2gt8GPSy6uoxDSRb5BLagnfw",
  "key9": "5LYusEYeUX6xeHyMTsk81nvDSKoPwirEomF5qgdqKaw3Zp8iJqoWifKDex2oEoJfcrrDFAEr5YfL2Kcc4iiEqGXV",
  "key10": "3C4sduqHwurXbYLLL8Gc3dpkgMAzEGKazKxD4eGgpFZR3He4cJu8qX2erCLDbEWtVNY72VVmCZoABygCssCw75jx",
  "key11": "2pQfAH8coiuVAyRbD5xJd3jQzHGfJrRxNKd31V7RdnJDoin6XSBfkSkbHLjLrovLLssLpfBd3qYd21vt73wSh7H5",
  "key12": "4NihNMZS3MYc1FSLQPEN5DxzrFjr6jbC4rm8L3wHRVKKjWS499s6CtsPRBRa2GiPsKHaYZxrTf1vrzzKQFbaruX8",
  "key13": "3vRnfJTPZrdJRBFxEYsE4Q1Tpjv26oheBUBSTz9Ss9BJgYyC2siyjyRHKWpYKZx1nH9fLH6WLuG5FTF4okDHQof8",
  "key14": "UeoHbFbrRrsUaBBdLdW47LPd8j2N5qNPWdTZE8giNwCDFANurhabQLKxebHB9Y7i2ejsSm9FDxtkApc7T7guCZx",
  "key15": "2Jr84opevqf4z6A7k6DdUoJrnx7mXzE5uT2tem7ksVh9ydv8w9g5yFHMusjukH6Qgnio6yqprMFaWTTxhW79FqZb",
  "key16": "4KNnrjPjz2LCVaU4pEiwcPhHWpVSmctgsjuDgC8rVztXbSPh2rqJPavUSTRFaNpFduNoj5DPpKyUyEudA4SE7o6P",
  "key17": "5tXuUxbrqPzdG5GEy8ejCxUREZxorom6Vsxx2YQjsaQmpxM7Evrpxs6vvo4zLii25tL615TD1uTo2B2rCNGHZtSj",
  "key18": "2TndQX5PBjHBSLuEvXgTqf14G5baV3zigjf3fDG7hWeacn8qXfQHoNYGtyPtBNcv4yLo5eQ4BD6SUyEyFEn9WMWB",
  "key19": "4wi7rVXtdJfQ1dKHUFvgk2CTRRh31NA2ZxbemKkhzeaUaG91fy5WRrRLYL36oF9ckPqsmbVso8aqSoRUGkp9W9FC",
  "key20": "4bG3WYGULFwnLYXbiiggKKSu4pGwe6o5vPj8ReNYY1RXBAJHYRPC8CJ1B85jDvAxinHveu2vJMijZ9AvjahcxzE1",
  "key21": "2YodfEHHFViEYxzXCAHoPncFgEP25i3qTSXtfaEnvJhZygvQPBcxxc84VZ76FyA22SFvf4Y2wcjr1tYAoexbUuoJ",
  "key22": "2d7z5bqEaPeuAGbmPzC4PhBTnJdzrZGFAysrat3msjwcKmVAfk1biAbV43oJrx26eUsr5roVbxHDxKH6B4adtgYR",
  "key23": "4C7r3bSQBp4RJ2iFfsqdExfQh9jeS6aTy27mqtxQhdKV5uT5HEEqfxkfRqHcLF6ALRpLbBkZoKj8HDRoWJF7H9Yt",
  "key24": "5kzatMxLSuhKXTHTab2rR97ZXkKrYC1gatLN9EoJ8CSXXQFhbYEKBVmRA6VMYMPFpqe3tfop2VhmuGdHj6UkUk3F",
  "key25": "643fKaAfqzkzDdDd1KxiSEHhRw9FNqAx4v6rtUg9hWahWZEqzwZPk3M1WWrKbcH6q3HFhunBS5KF8CeZsZqkbg27",
  "key26": "4XDT3ZKvR7rHMnN8EwLxsFxJ9iqgpY5Lcfk1jzqWCjkmmgNmSVP5AncPjM49HRTtQSyoDU8SnjZ4u4HV2eYPMJjp",
  "key27": "4smBwJSKbyo7tMKKeLJTgQz6GsF41Gf5hZsbC3AQ3yEFctRMQXAoo467DbKbbUqAiymnWH9AxJSeVshWnZ9LabKG",
  "key28": "5G97FkAqJdHxm1PBLrMhyBFaJ4KD14YcR5WCFxPHEBjZqsT2iCoF8iKsaW9vSCF64mq9pQ73SC7AXiT5zVvWC5EE",
  "key29": "3kzwWncWyEcxf81L2KTRU8tUy56a8mnEhHyzCon8UignizURwrfnFNKYLwcGEiDcpq5s3BxE1z3wuGhYVVu6bvuQ",
  "key30": "2thG36vbxiR9AueHc3QKEjyMn2BxZmMjGwU8gK2GtdnZvChHxtrWmJjVk21BK8ammnnR74DwvK6bKuSefkUVBmbs",
  "key31": "2pm7axnCygiGpL2z4TbckYvBQJbkeevDUpP8GNAGfuDCAA3vAZUGWGuzt8ovr9rMSYVVGaRYovQ8UZ2q1NG9f7N1",
  "key32": "4VHxTXh7zeo8uazrTeEqzUnmXtcBvWGvBdeLF6LCGgw7yePeHVEbm5uaNbn2KpThVfkeSHiP5gBwPPvkBi8tMXjd",
  "key33": "2ugJ5Wbr7nmuuJA6WDD3DN3JjTjjjs9y2abpDGv1JoEdTrfgZv6PMLnXeQqAvMfjGhEJMEbB3iLW8aJBPmscF4Km",
  "key34": "547yeR19rwiYQmyXkjLXKR2sAmt3R8mLnZWvbxMcpERn3tUjtu33xxczPQMNj7zBFWm1QrzDx4nfzQ86eec33Q1F",
  "key35": "Tog7XRuYBEndypF65kt1NsH2yvraoJL3jJ5yNSfuBMj9HfSSRLwpoa1hud66p4xGiyZGzF9KgezB4jU59bPjHjs",
  "key36": "2p5niKq3st87RYHXGHo2Fu27Hsyd2mmSFCCtiVpY5T2AzqNShteVaA9cgyDmuemXhU89t8e6tHwPeDutGYmp1rA6",
  "key37": "2nbhVe4CgW3rnyvGmFqRrG9z33HbUk7NLwv6NKmc3QdykWQNsFVbwR4VcjtsEtm9HwncbaVUzdyCNbsAsZBBaVo",
  "key38": "36Q71cRJRLdhnxu5JJkTBuVoxVw1AtR5r92z66WqWbUo4XHC519N5MwteFFQtfWe7L7xpMZNYkZHXtFgfqYXBP8z",
  "key39": "5DNMPRT5PRg33royRj5ysCpV8Nky9KfhT4EY9paaRy41wae6TNAKdo1ftZMSWzHyddNGsaJLK53PYmWGbRgdQC1m",
  "key40": "2GzRKRRhuYUpwuuadEcVpz9mQhR76BwTv6jxFX8EbW33SFHuz2ZZFxpaPZZajgdxxBAJ4dapCDsLcRxuQhMEybwh",
  "key41": "4MNHwJzMovbyaxWar61H7mib5GDcBL9hRgxErJQohwBZzDr1AfT8sg1TSw4e9GP6D5RteyU9jej2TfN4hCBdfnJw"
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
