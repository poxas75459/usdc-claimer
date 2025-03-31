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
    "5iTQLPAxV17r6GPX8DoJks6zrAkj2w3Y1YYm9kSmw3LUdgHt337v5dnoH1vdMEF4WdTBtC3Qzc4CJpamcZQCd8bP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "568PZ9tNdUxtrdvFrNb1buKg6FjH9cpGVjswGwyqGEEHEwK2HPiaAPUwFRmLX6Uq7aziaftVY97727ehKAfDUF4D",
  "key1": "5QZiqdHPesFAd5dPx6GyGkJEKMiE2ZqPCMkGJdH9aQq5BWZKQEYU9rCi7rYuXwHj6wbPHD6nnhQDyS9ucaP9gR4j",
  "key2": "3KTnq2FETTYgy9MEuYhsLdd1nr1CtAmjWKS1kswJ3ZMaLu7azDagF6T9KjA6xFZBmwHDKDfm3ZL7iRwQZGBTNBqw",
  "key3": "jaCQTfuqJN8XaLtKKecD6CiFKNU68wUupaeMqVnAD7nmBTRfNfbugFunZjHquvbw9r5oe1fTpFvKNCSh5ycxp23",
  "key4": "VPt38XAiTE62N8AAoQPpEQcc3Hvdrt3EnZ749V7hD2YEM77JWe3sWN399hBiAzXbPttuEHs6Q8hkW2BvAMx1Fz2",
  "key5": "2A9E4cPieW7M2DALq6BAXEx29KLndWdLgGfz7w1WbutVkKvvy2BVsSFp5WRNgfYyFPPFBQHzss7jwafpbh5t2okw",
  "key6": "4XwXdjYFgQFGhb2DFMT1vSmQnCGS2HSEibbjkiWsi3qA1iTjUtbbk8rhzFdJa6cgoGVVaMf5kxr4pKuHTBZdGEzQ",
  "key7": "hihEXBVsZQGRiAEmkX5ksCACdStqwcgwuxyHsCG61dHJX5aJds216UrTdXj4ZkBjuP1st31XQAkGL81FgTDvGn8",
  "key8": "xXtiF2MYhXsgziraFnYxByGNknsgYBDS8zcKeVwFXGvcyiEAa3t1HhtbPiYZM7D6cPXTSZQv1AVcbUKaFrixA5b",
  "key9": "3N6Lw5ikww3PvG3qtVNGTvJBmdWwmPahryByj66o1c1UkuXF5CYJH5bbcuRo1wZtpzNBqNLxMjnJVbk7hhLLooj",
  "key10": "3sr6yMWTGs13x9Ux6Gs3oT5C2rSHAr4b5EwwN8ApQmaSvaLxAFWBokfwy8sRbKTY1XnUJZFC3xfrRSDeUJ9V9AE",
  "key11": "34FExZTAU8KrZSiMxFVpYENxCbM85MSRKJ1TxirQavWkBcSphhAJyWQ8P9T2MP4DENq7erFDMZMbXbJS2PEhmJBa",
  "key12": "3t4Lzh2YYrFv6i7JWrZRNd9U91EX3oT6MTtF2hkPCSVWzxqCqGtECsaRWMW1Yw9SjJ5Bj3Q7x4QNrD9txMHmJSrW",
  "key13": "8CgyaFQ1osQagaS9uMsSCsnBj2MUjmPgQCY3BhWvWPnrdBC87MHJZoVhB5maM7M6wdm7hpwsmaiBMYUQ9UsXTrP",
  "key14": "569kmtn1g1fsEsHBZnjtA9rtYV7EkHYd6nEDJs5S4mV4zT3bD16Xt6poMYJcSpSSzfbyu6LaqpT3Lgv3xzvRu597",
  "key15": "37yKrpiavSNhrgiK7FPBvMKTHb9Wb78pu3rGLpudnZU5vz7LYkEpU98pFTXPzQKYvzM9HmzBNh32VVrw7d2FgdP3",
  "key16": "4R93Gng89EniYk3Qksn1WKUMmdV8TtktZJ53n4cyRXicWnMAj9udySjbXcv5RCxKpWyh5WV6G4mViG6ZbLiJrUYN",
  "key17": "5Y8rwQmgJqFrgGNpbUD3767na3aEXf7qSpGaoqCe8cSoDfTccxaVZKEERUBoDTKDGVTy7aF4N2972v9EE3rhEi4Y",
  "key18": "2McjZbJwnv1fDEgDdwfNC5zKUrzXoaBwcZoJB8p1MyBqaCMT3WVafxQqfP6qAmH3uBNpLHverZ2u6ekgcuiyY3Wq",
  "key19": "2cVcWFzAYKoTpWtCjSJYdP3xzcEwSj5GLCuZHt5FNzJfbGgZEiFqNrPo5iJVKwp4zXesU8ghCHpHJMXo9DJF2Hyr",
  "key20": "5aQw7b7k5328A5Zpbgan2c4cifV4vtvzqJdtcdj5D8wBMdnkuHZDQqRsLhYvMsU9pDN8daVFLZd3uDNxNuxTMQrW",
  "key21": "2cez5pj4L91MPAdT4x1KrvsrgWrusZpDLeLUyuCwN9addmkvyKgWkD3wLufDFFB1Hqr3X1z18WLgSv6m7Shc8tuh",
  "key22": "2tN6HUQ8mG2bnvyUhqHaQWVFTQgBg4YLSP8FgrrGnxNqXZ28SPWjkuoMGdLf6SoQDWn8yQK4JnnNZLpFJ5B35aWB",
  "key23": "4SnU1NSimrRCFJXhUe1hGYNv5r3txBucqwzvomnmTjffTEZaGstBUJyteMJpzkiBNzA1rvwnbCks5xiAE6vd2zyV",
  "key24": "QaAsUjaNgPCVyGvLhBhar7PaeKDEF4Ed3ph4jhiCdv89LEDoCnXHSWwhL88Bon1n1CytPSq5DKMmQmg6N3CucG2",
  "key25": "4WfmrfSEWxZ8Jj6WMYvKaktJhFnDeXKfTQZrWSa6MUEwvMyEyup7FaXK5zeQcXnDtzdiucH9DwPcMoLtnZg3RrXj",
  "key26": "3sKjnP6fJ29XV8cQd6BtFVoQiN8TMmL9n9WhMeoxtsXUBcWDUTAgE9bwme2tcTrBFfm6LyiCxqRwwYwEbeNZQdwv",
  "key27": "2LzFXmz9XMAsyXVZLPHNgYvaT3zSgBwdLPrxyT4BT3f6dbAXHxpCh4sdvPSjFwNv6q3z9okDv94iHirnKSvpXJWk",
  "key28": "4w58zzAH8AUPNQCAbsgr94SGEDLvvzaNhsKGN4j2vJezWjyNPTTX4CQyybZezBGyrS5y1yw45MaR1ZBZu7X9MsDr",
  "key29": "2NjHF2bFJ3qjDosUXJNyTuGLecMFSdyrqpZQnbnbKX1D2ZgU2pWwUwCiQSo2eZ1T1tJP54ucBpXxCcVTpVRLoVD5",
  "key30": "96UiMRjUTUwBuHBTPc1876dy4vcuUNnrX9h3pnMmAWS8S1BrHYVy1dhTp9jo6MA3UrLmS9oivoqAgXGF3bjgXWM",
  "key31": "5uYdLAiCRaeeoXHh7i2dCNUW3qQEyn9Hq75JcpkJ3SyRDBd7pWYNfUNNUdPtPMV78vWLNpRdnjTKUUU9RmFiHQfT",
  "key32": "6ZPMQRFjnFRDsj9eF1KqEgUJ9EDE371FWyB2URkQDAqcB9uKfWWDqXU8EXcZmkAiNfEuuJyjj1HzfT9Qf5eoV6C",
  "key33": "2rFxQrAW2KNzsNpX8TY8H2BKzL7ExKsPh241dcE64udzJmmnXdDhsmene5iJ3YNJjWFq1Qz2QmCBYKEkaSNK9YEH",
  "key34": "4LfdPcKRsi8yyotnvzsWGcuFJAwuMrzMHM389fiB8uQ3FC7S474w5oaz2d5Ef4CduhzsKTRUbe8jEcCYgqqDjWdR",
  "key35": "5W9vDMHDcqEMSAvCfep3prEVR5YmHLLC7JvMETzeQFCG7JiHyHZ7E395X9cPmViovKLgdoYpbNwSHCUtzeSYs4bK",
  "key36": "2jhkR49QYdHqXFBiPr6VyegndcfKy3KL8QbtjpsMhSuKz1NdcTnsrs92ug783DnspLrH1QemwpMBsBHQrD2zChdc",
  "key37": "vVwX1Fs2fjh2vQvpMuvyCupGRUzQq7hd2YNRNrf3xZ98NTizvv63XxSEUdSf1WvFomAViKwdQLzw2WAPSHD9Qh4",
  "key38": "3zdLQn6yWzpj8rJu5JsSd3KzkjYrhA86NYKhssBqLofAWFEHzHaMYSqagiX1wfMWDA4saz9J9PdySwPke5jKuULB",
  "key39": "3LsMuGpYnZTLawWfHyPiZQUutLYbTybUAGrjdXm1jq73Hc5ko9VsWAx3m5hyjAYAFUaBBicDXCbKmQ4uWAcfc4Qn",
  "key40": "3eHd2m7YELamv8TFAr7Hrbi2y4jjb79uP8AUUJorqbkriD4xvk4bG7ryPXy6XzDUyB78KHjbGX3XfMyHSdiso7jv",
  "key41": "26qvqrvHPoTh2oMapBmBeqjJHhNccnmmaUjU9qsWFf5dsstmUZtB45WN8STDB9bfEjGhvVQWUmAmnTibnk85JSLz",
  "key42": "5TQNdzx8NadWEL9FzuZNGnRA4iZCh8RJfJybo9yH36buo3ks3jLRaRnsLb126eSTiF8EdEcmakEb6yvvj5fGaFAz",
  "key43": "2gkdE8U6oGhNhgDCnBBTHmTdQATuYxMeHK9r3zGMCzMjBjttCtQ6UpFtxwyMikjZVV1dXq6XWw4hYjE3u2fy8x3d",
  "key44": "2WjhxnDwaLaRHowpFQ5NbomDkDu6yrmaaCX9buf2fRCYzkcCzkWh4TGP4792BBPr4q3h8wyBiVGB66LmGjkEik8W",
  "key45": "4ndmaGRchZr23BxnNEx4fcKGSZQZJGVBQnfLvZunQh85sLRKBT8WY5eP9LPWurfzVbYPfHeyzk8yE9j8rze9qWVy",
  "key46": "quVLDvuQyDw1LHsPKtxPfeyFR5XkHcaDMDQETN4Hv3ChZmQa4zfAfDG6GxrpeukH8C8LQw2UMY7Czbfzv2ChmJH"
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
