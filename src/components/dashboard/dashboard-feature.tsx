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
    "3gNpPikRvRJNjEHJwqQJk7V1LhjCBTBmZRSiuMZQzrjTTAHDbHnci2VY5Sqd39xSab8gUDDEB9ue8w4YNm358U71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eAd7BogwGqXYXSBFVVpxwTaCQuGh4d3hKcmoo9YtvVEAUfN5DtsiAQNJb1AnhU9QRzkQePGL8icL74AYstx5d9y",
  "key1": "2rYnRNNDqscTSDhM6nrkLnmL1pGvPrpd2AG4Mf48LUNRnQeZBmq8j97974x7i1cWVgH2yw8rMS475GX1FvwpXeSY",
  "key2": "5TvP37aLwZBkTibXj3acJzMMGbLisxEvziLZQZuQAVBLagQdQMxf5ADnM9z5uHm2fHmA8GXYsU2A7GgixoznSFDP",
  "key3": "rKnY5AXcgqJYQsdSyUGWTbefiLwqrytTkm1mKi8HLCpsSRDBwfiovXwDEeAdVRk6E7FLanVx7Ts6N17i2m9fxGW",
  "key4": "2gHKkuUNr7X6WYgbdMx4xC9X92gtKiq5uS2S9LdsLUS2NrCYDt2KJa9Sn9P9qohoFR3rxW1rkuwzsV66iPNBruhu",
  "key5": "37jUnXWfCkrUuNEkKyHK6yqbNoJGceSJD5UBtuFy8hqzSPJj48Q2W8Qf3UC6sBvhHW65DPqLAhnZn75F8rpQoCb6",
  "key6": "3Wys2VPVjZ5LX5EhEnvf4bTRQy5yZ6756wACY3uF2Z3G8bfdqwPi5XYPvToEqA4NojcSvW6ydJmMcNfYL24ChTDj",
  "key7": "5iQHYAjDUXvxwe5XwxkNxmaxiCmxvsj5HVMABc7RMhzSwCV7Njdnzx93gy2JAT33APkUqPk4uMFnZuoJNf8BttZc",
  "key8": "BK8fkXdkuX1Xv1EKHH54vxcEuV6gZr5xo1nKnQ7ygwYzeuHVMS5iFFCuauVgRyLFQ1hLxTJyFBmZjPBC7Gg7Pbo",
  "key9": "2jjCu56KKJP491Ae4bbpmyLsnekMwABXNaLgViPPU9bem3F4hdBo8ZdxvL5VM9QqjScKLNDwoaV3SBqd5rugxmYZ",
  "key10": "3W27LCUsJq86LTqqnbhy6SKP4PLpiCnDeAWGtJQSdg8UZwUyuTVbEHxsFtEYqPDTjM7Rwx4nbCiRrtS6ez4uKm34",
  "key11": "3cx2GnSC9kDhBdSgD9xNn23M1GPAjiBJ6r2gCpjeoLgikdjHaNA62H5z7AXGN9GhENxxVZb1hSbsv2gC13typ4Pw",
  "key12": "2d1ZGpffMwJJLLkTtm9NXYWpj8WpknSoysZK9WoVwTnYRzcYFA23EB8FqRffPxJKuPd7bth97JRasVreedpABun7",
  "key13": "3uZbrMyoWeHSCR1jqw4wof59QWBsSqRuHLcNXMHsKLFqc9wasovEvdZ7DstmvWUFDBDKcCoS8i95vmdHGnkJy2V5",
  "key14": "2hKQK5xdjZQu1ppeedT6ZiTLa3iqVceUqBtpZ2hRMBgRwHcsQoTGp9ohvX8zTyusEyzx6HGRHJaRsGCoaLFzQK6U",
  "key15": "4Jc7mYKW534FLPjTX11EczGw5dRzSuqjMn4TFG4WJRJaqVAXbW1UKVVQg3oiWBu6dGdNahXCAXb1CUeX2CrPQKXM",
  "key16": "2hBq947PvaYQmbDGv6vd8ZN3Mp4jvM2QnL1evDhD3y4rwzicJGShnT1qYbbsNjUa68E26Jntsn9cWAeyRG3Gqv5o",
  "key17": "4LjYJ4QHC6USrfhkhKhnKPHwwS38XTdc4Wt5N377TopfY7Px8RQroqtRgUpGJqBsCY9XGsAp5nmwHfScaaisLLB",
  "key18": "3kTwVD4YQYSPnr5caWvmiquPvEVyP6VfaMKcJN7J8m7Vo6nx65Giw5kQRPQykA96eza4M51HZM7wzUjFyaLkL14v",
  "key19": "46YMFQY6xWyiHRcbYTJdV1kSbw76Tharh6aUt34fJxf7tfwmvTbMzfM5m7Nm5SnJXhbQX41WY83Qs2rk974Pry94",
  "key20": "463QibEvK9UHQMYiXBUvDsufFj3Fhu3NmeAJqyWkdTMoGmGVTF4WS97xfgv7dfQkBk8FB4fczLjntNm6GhDdyNgi",
  "key21": "2Tb8E1YkmjnAc8Ly99ZKd3VyDMy8pE9Sa7ArFVCPDhfBoon18age4oJXLQFXC35vy3k995JnQtL2gq2EbBTHRGeK",
  "key22": "5AdM9QEFjKALXjDn596ALj5B8uLXyebGWqicb2utch4J3Lc7ZBFDvyC4p4FauK4mDhB2LhFr6vYG3oGTUNGyqEcu",
  "key23": "2KaF4Y7Y919QaBLLN6H1sSM8Wi1sQdDSoG1emxkqZrixhsLRRHx8ky8ieKcJFczrKDDTrhX6xkQyyTCyAe6XeS3g",
  "key24": "ted47UNuV3F6n3JkhmP6c1yAwz57qGhnPuJ6vRUKdDxNYxQvjrJ7SqKEgwA32Wfrs9jK7LeH7mZAGf9N2WR7eQX",
  "key25": "4dbNSUHeuPRCafcVZgfGFq6nxNqFpcrjdReUkUUZDDXLCo5jkpLc5hRo3mZHWDzDiEz8tgyZLMyjKgd36wmwSu7M",
  "key26": "5A8Cy5nBBQgmYNzE4pwLGWiNjymRupi1g2b19wvDij57y7ZAtVbyybqB7Fy7o5MBnKMtN9T9EccLmyodqLEEW7Yj",
  "key27": "2iGdEnGMUUCug6mLnkeB79hGB54FgLfmafLAHbW5bfwCQ4BS3WFtmhCZYwgCWkZhz1yDoPSoW3r1ygyigCn6bie8",
  "key28": "3oh2VVtTTrw7B8eMpyqwyDcHWdWj9QMRKP5mDCDGW7zHJcqsFowyTg4vWjceyZj9vzUW8cJt1TnckgPgjQXY9JjB",
  "key29": "LnHQnjJMaPrBc8KF515ggk9nJFhmJpDdew6MaDTGMXAB6gowaVhyxcCEkM7fx633yzXJaRqT4yVjtZqtv49Js8Y",
  "key30": "Emnf2uqQUCHk4BABs76289C9ALn4M3r9uerunx4sGwDDqocnVLzc2773ebt6CfJ29dqKwTDgCouhx1zDLoBKqdW",
  "key31": "2YxfSbyQV7uqJC9H2WPdZsqGuhqFMocPqgyeaWXJH6HFHdSzjU1shtiVpoCsHdvEkKz15XRvwctYZXzdjSWobLAW",
  "key32": "25zDtu55aug1ETX5uCEUc5TywxGfqJSbpWRuuGfp1Tt9eYGK3pwq7siNZ3VEvxkUNfRvNqZHw1y2pcUMxD5m4G4j",
  "key33": "2vRt56rWgSp3sWGfoyx1R3yp3YNrnKfHULtveP3ywEhDJsBpiUySrMC7BAD6U2Vi9ncA1iERc8AuZ9hsYUXu3cFA",
  "key34": "3i3qZbVYpGybGk54EGct8LzGtSXgHY4d4nc3B6CfjE8jMWF24e67tw4dQu9RBwbY8ActABXcb6R4MicNTeCXJgAK",
  "key35": "3Wh6P6VqWR7Woh9xER83sHxCVQLQ3EYuJYtc8G5JdPPKd7K2rjT4U5C2JdKyg12Rt1YTgJb4jtu84nCWQRLdsSxa",
  "key36": "5XFmpBNuCSnGHFj6zCfHoeopLNM1fsh323UREi7aqZyeUT5wME1Hy3rtd2YB6MSP9CtB1A535DDWeqCNGQ75vxXq",
  "key37": "5eFsA7A85UXpMfquSiZjFTBcZpcNswt8k35Nj1e3ShX2AhN6Ly4hAfyDSxfrLwCDgkMT987UV7kTeVpizopHMmkH",
  "key38": "av6s3N2z3iFq4ve63TWkZwfhX6g8YYXjXm6a1rbJSFU4VqdHBpgYk95B8PXpvQuPhCmiK732zXu7Y46KQTUxwYu",
  "key39": "586U51MP89QFe8yofWBjt6wbcwxaZ4zq3aXffH9tshNLDK8cYjNupij8TjVHzmLwpy2Wi1dh3XeRZiirpYeJShJz",
  "key40": "4Aa3L4t2o7G4xuty8KqSppkqk2zsHNCM9jHCR664EpsyMt25K9a6B6scQVRyWt9t4bLecc4qN16Mykfv6skiREjA"
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
