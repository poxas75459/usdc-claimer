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
    "3FX6ta2pTymoKWKBk89mP3izHZUZDuUbuMtvq6j2j3JhEdewBDNZsgv9EKMiDy1m62HnftRanh7AxcKTV4yB5yrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36cPNYYryygBHALBJNSQABv6Wzd7op41hHpZ1N5TbyT3AtHW1GdXBHSXZgPW1AcvR4g4dBajPFcpHLPn5nHyY4ua",
  "key1": "3JKxR9d9wpQtZW25hC5F8amiaaLkGbkV1j234bLDf4tgT5GegJbvKwoRA12ai8Av26DE4z1JJ8Az57Zc4Zn3urwF",
  "key2": "RYXt85jm78YVUHPEv4pNR2SY674Kuh196At9RnnebCKMjm2wzrNW3KTyaJvWEEYsCJ9MNWRx4KYWMhEVMFPYPvs",
  "key3": "2vaXDZRBeKNTrfBthinmF9S1CC8ceiHUUWFJAuBz6bRejg1PXNSLHUbbLwFKSv8PKDcrjRSKXLRpkzYrBg7RHgmE",
  "key4": "2zLY3kUq8sgc4a4KXasxUqyTapAYSpDdQpBS6aSXwUrahAWB2jJEykJxRzRBzN55huCnJ83FyRZbMrPtr8n3uU3p",
  "key5": "5MjNXEQxT9SdKekXyqhu3Tb8Zx7NimpuzVUhpiQguv8Gp2Jv9cbzWrr9urixahhpPLx8ZKjhhKquKeP6cTzMVXhH",
  "key6": "5guQQcvDsJ1Da8exzvjzFHVJ3UmWnACBifdfrLvg7B68LhhVRcvS9MBicH19X2BvjDGU3FW6bSJWSGVc1tMTidL9",
  "key7": "3iVZBMrXrPp2aCnVJBxq3K4pewgDZ2VyXRKjBtyMScBpsRmnQq7nsqYwmNUbaN7dz15YkxTfWBJoFfBHEuj3jgtv",
  "key8": "CrUFXbDC3R3HqVtHAysTTjKjJsuEW9eR85bFAS5RgAvLQsez7HqRix43jAQn56XRGnqY7TvAZK5BgabW1VsfZWd",
  "key9": "2fZC7yASf14kKVLCHnvedfCJh7XGuR51x4aGXhmSAJBPsMFRwbmUWyk3TKsJDaJenFfRKnWJcUVQaNLkWBoQM4Fn",
  "key10": "5FSWEbpVZ8MCqjP3uBCR1X9PgY1MgnBUjeqcTcY53frdr4cpoGVMjGsjLiZtHiuzsRHw6wiZC129J4gDnxeadrPa",
  "key11": "2fxuZWEBnKipZ5W2FtDXJsnrFzVRC2i1GPVCDSYvZNmSSr5ScoPQUumr7Fstd9cav3GcJVEmWUtX7kVH9nh3zeTF",
  "key12": "v6p1F6nsusPZEfb6LBD3T6sHKqkunpB8V22Y4aT8VLXZM9yGSkk6Z5DUR94Gd3VSH7aqkeqpQXg8fBT4pwTGUkM",
  "key13": "5PMHEpSwLZbLUZzYSgvzTCjgBWeNb3xaG3LBqPhm4zymGxTUg5cXGQf4f3LzvB5RBMRNM7dFSCfWH5E42aQyNFYD",
  "key14": "4pndnuZnHMh5eAxVvqL6qtcNiaitA77kSJ3qedi8DkXBDQbYeQYzYmcUHqsMJBcMUvzaGWj9YiwAvuKNByL5ngzA",
  "key15": "5LLgLqWxyRbJzCTi7GkQzS6ukVWwv28c3mPWVm6eyx6rahCcT8hjdZrNebA47jvVeZWw1htbPVTFyHJALhzB7u5k",
  "key16": "4HZTErgxfv46BoYiyyVNHJJksAjMELoei4NWSHXuQN6LP2TU1HKNZMeV2JAgc2PFeZ9vVc1UQVnYXfZ6gjRM9L75",
  "key17": "4F8RGo8W8Z5wTAc9F253M8f6WTB7bTqkhP8TXpG4D1V9La7ziviaGxnzncRwqkEvunGuB3bm9G2FV7kkxDocgyG2",
  "key18": "2CwBin2M73zUAqAkJFjUUnaGR4BYaJR2dSTe9XbKXreXCpStkUmtVVnQ3ZsHwSYtWK2wQkoDB79YPZ5Sbpfrb4qK",
  "key19": "2neh3sCWQy9qsnEVfV2XiPqv5uJQv6ZZPYvkgbgG8g3mTo78n2qCQ26ZF7W9ysmzrL5PwSeLKXyeF1f7G34r618f",
  "key20": "65E2JP4iPXE6ZXksB78yq7Jyuq1cBERo5bVcyWZDBd7objDPEmTR7aRtZeXHXZ4j9L1eqUP9JWotHtnMGMeGReaZ",
  "key21": "5mwueJrCnwUxub5ykPgzqj511Fs14kSvoLVAcEshthYKqZXR8vSzaRzHFUa1ATm1QRcs3WbTid5QFg2QxAP1RV45",
  "key22": "3geLGhGv8uBMmunMtaBMWQf5gQGWAqMoM8ySe7HecyTxH1ScxATx4Dw6gDciBMgnXdfn4hPRFhhX52F4EHTsLFD7",
  "key23": "2Ey7wEE4fKaTkRpcbdTj86LVMYFZCyPL29DeAi4sVzLeZmfLPFUsUvY61FzmFqcw5uK6aNN23Vuz8vguAVwfs3wg",
  "key24": "4QKQWnjLfw4CCZgqVWxhjzRyi1U1QKPMVdsYSLAdg1dYwnuKoyfa1YXf5LnDjyZdjSyGQ7DzJV3rRdam36psNqnc",
  "key25": "5EvZojUgV5pi7TbfZbUaX2PLX92Q8v9HEe8GEcXrTEjzVGG9rAh6wz2pLTL98hL8LAcCkoixazxQPmswNyF5Fnpi",
  "key26": "6j4fVTNdRRKSK6FNPCsbgJDLvBvsy88FkCFD9UryEzCDguUYaPX7PiHDqCPxv6aB39v3z1Qfws8YhEPPgATd5sw",
  "key27": "2WzLfu4xkbpJdVozFGdMeX6VAqxjR5EQugE4WpjNFVidUYH3HsVvSuaQrzH1hDs1v21cVdCCFuryPinfVcq2N4rG",
  "key28": "5iLudFLMnQ4PzYrBH7LUsaD1mGtNxNeLibhdmMX8TFmaWhdmoQisZYq4EdfkaffWsbiQKwMC9NKjnBypjNi85r2P",
  "key29": "37rEELJWAgcDpyTDMfMRQhaQKX5w4fwKe3osG6m5W9k8GKRvuDfU4Cf5966TY5KmYh25Z7McJsshBVYRAcDajaio",
  "key30": "C827Bg4Lh9XsJG7wXNkg1TcPCs5kzAFeZMEuxcqCZBedbd2LKvY3uwTH1PB2eB7vEvWPG2pRZLXSiBVreYV5cGR",
  "key31": "62muyxhg6H59rqhkbRRL92PMjet1zrPnEKmpTRf3uL5dEtKFdEotVsVbSJjJRhsRuHTPtvJMLjXHtQ3nkb57oEYs",
  "key32": "2bHiZwuoGXA41N4g2xEsdjixv8y7CnW8FBtvNB3E9Gff44eQp1p1tz9MSSrjyxbkqnMX3G9ZywmVL2F2VXbQbpHi",
  "key33": "5Ddg2efQ3V3WKXvM6LXxcEKjvTvpoCSjCWfXNYjZj38ThYUGW646LasvUeXf6KmPHKDErGkJdg5xJc6eh49aUv2k",
  "key34": "5G7asqcaBuHxQkMELCUNEKCRkRkzcoPw61gNHcAZRcXPDKtPpm9WmAkXmUs8f8bDChH3sTu2w1ahgWx4ijZKuivy",
  "key35": "5nTK1t1H19QMLXghhpb5NGieZBcqgMCW7bK1STkwaFBiMoR4pbod3VRPZwttpWAPzPL6nopNw28EC6Hoj9SZvVf5",
  "key36": "4FmxpDk6t5qJ21ipK3p5LooVJeafmBYFGCvA4AmayZpXcETCsLwVDaE85HDUkMdZAQw5Ejn4arbF7hNZMn99EqUk"
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
