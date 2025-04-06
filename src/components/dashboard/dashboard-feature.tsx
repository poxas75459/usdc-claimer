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
    "3U31QoJeriRjR5mjLCqBg9yK6F7QdD4twRAgpf5dkXtqFCRDjTdnhUvc4irSsm9rtYDcpGG8WdosKizvYJbZtSuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RrfUvXSmpEiN9U25Wf8YxfswKxD2RZAzjgSi6ATJweb5VZb64uoBR9rB6vDoEm4REbv7NmqP8i4FPBgcj4zVcPt",
  "key1": "oYYXPQ22yrj1WCJ5e7XbUQ5HYifLXDD4pqS5BoJBrfEiQLdhNknLAkzE9GBNM8UDbN5DFhBNjLaEKjVQKwrjGXd",
  "key2": "3vJq4Sy2u4TVV57okzfidCwZ9QAJr2AG3FcLFkfFSnVCbDBXxL1RqWw2y9zVfK6uFs2Djg69cPJzaqS9ENXer7RK",
  "key3": "4CK8uqAsX7rJ9ebG5mYFjDhi34TdWGgz7DxQU8MYBZ9ZsdaYCYntTpM13erc1jpgDMyABzTzgasV5W1trsX1qtJK",
  "key4": "4EPuopRLfSFKqp2X9fBpzhCzLotfWQPpxxm6X2ZLzM8TaobbkHz6SYu1wqC4hUkngKBigC49YExHetkzCrUXM9fQ",
  "key5": "4ibr5vLzojGzaqJPyQcYrV6k2GRggU4XDdtiGYNo6xpBUbpjTuzUz6mY8VLQreQwm2J5obgNxRxNXWEwRos6XvPv",
  "key6": "3bWRQbuvyVWafayVteuAbZR3UMBkB2BKrBT51ck2g2FAXbwPmNKGLUj1RV2y5NATLbiZT43KWsiFZmZ694DJLcV1",
  "key7": "4c5D3wdye6cwmM6YyB9qcNwTeDbHv813vgaw2vAAyGw4ASXchoS3FZVUyXmJYwPzbEFLAfY54K28yDHAbHG3casA",
  "key8": "4FeXbAF3nmkGm745wJW1BMJTUwyoVyQSy2RqeYNjf5Tn76fB5rWvR37apY1QnXaa8W3TuvYAm3qNMpW7JRjv6wxY",
  "key9": "5jMRQBogco5s8FLbRFxXYEUHS5Yvw7mB9PPd4u1VHVafTL4bjD4VL5L3v4miJf2K1dEw7o1sSuhAkQtgfQkfpLFj",
  "key10": "5wkvbD5ViNNXcjEXFgB7Rm8wEhBWZu6W6FrNVhV5MpvJsLGmYozd7UXZoKhBkr3EN5bTzDreMemhBcBBBENVHyED",
  "key11": "2ymAHBRH99RCjuxzLygHVCNToFcZropr6wCLStvVRU1dedgEiDr423n6WM4agbanfLsBpBTNjnoc1ZP6wAEmnUfz",
  "key12": "jHXvPKsjy7CVuK9u9ZXiKyScmUUvCtShm5iF4caW5aUejVsQChhy81UFZwx9Bu3jQAx7BRWekypMS5PVWPw7PiV",
  "key13": "2iv8BDo3Kq2yZVryjG5gG7R8f17wZaqb3QFzZfwyBSXs2Q3WrJe7Y7bTZfycEutScpnjKnrKEQWQPG3Z6h4HjnpK",
  "key14": "2fg9hrUxTyd9mcdFAxjvw2egpTRQHrjoAi69SF4uSj24mJpVVCXDg2JKX8Xmpc3XYYTdV9Rxc4rBCgb1MXigrUye",
  "key15": "2hHCdJHNFVyA8vdBoejbTRETG1Kf8csjeoVvDpi5W2ZVvfBhDuM5o5E4AS6LGaFbaLuVnXkkwX3C28HvEZBD8RvL",
  "key16": "2ApJtyuKL8USX2FmEphcYUPo1ZViXZCP136v4mzCDArY73WnR4pKu7MBEQgiwrvzR32L44SrXWivJiPnD8ZkD2D",
  "key17": "pAF85gw5RUSV6251ESzd2GsaxxaQbLxaR53Bh5PuGxfhsHNpVazxMgV1W816kMZ6fBwuaCm79xEV2ZxBPkZrUm1",
  "key18": "3x2L3Y19xXxVPuX3BNDh4a3Fjtwz6Jq1gHr988UcgieUJnA9S7CRtJ2gEajoBBhV2eWshs7QqkzNgEpKVxjWFNjE",
  "key19": "2xGVHdBNuByfUCDJzQKYF3A3FfoTmo2ndGnXhsqHZyzZkibyMWRCoi34faCvJGQwLdUXmZHQTwVfxoarQoRPGSSA",
  "key20": "2G8duTVt7zrUZLCUd7spFcVk7xDUt1ddi1DXN9WAVXWZ2i73PKb8EZAod2P8sm4VnUrdiL5Q2UeXyvkdqn6FcRK",
  "key21": "67fjYnCidnXKRJtgc16C4tk4DQmNicFBa9TCo6AZwKXhL21h4KsfcCvYcPWyWnmYLBopF3fTMZAvxqL344QMZqaY",
  "key22": "XNhcfSjbyFrPTquVFiQ1huS4dfRoGvkfEwD7bgPtJkQDzegerC9MmRLKpnbJi4L1ES2SyYkQc4i5hMUjk79dmCQ",
  "key23": "558e1KbrZm33ZByyJXutFVSKJS9mHaRJitNwqUQnkd5Ki1aSXJYsDRM3zp7gyRN1fX9kTHrFh3ybP2jkruG944Jw",
  "key24": "2zCmgVqW41J27jivLDQZdjzbsrRcF26cEAdidc27uxkY2KN98PyhZA5S8fSvU91hRB1CWG8QWVmnBUqBgM6bYeiA",
  "key25": "4K2gBoiQTtNaPkPAEV22gdFLHAPKUM4BoYLgdA6PcLr9Y8YNQutnno6ishmse46uUfZE5sUqKoVjm4NVhg2KkyLv",
  "key26": "wm6G1YsYpX2PefEouUHRZ1y6LDNd65CBtUsdy5L5pPEPVJEzPnmkNCGoGE6fXtroUMJNusW2ZH4YNJJaP75iok6",
  "key27": "5bAAYTibYzHmNsu8J5pAM2zcwRES7HrFiY6S67t7Epy67qvXNgE91HQmDyCZLitXh96Yc2e4XZf5sX2HA2NNyjn",
  "key28": "D7DF8scbvnjTjgcUgYVgJWU4AqNJXXp5cmmFLTacooVLtFBBDBuFktfzQKjsqAfZvoXPcPMHzACnR47msWqc4Sk",
  "key29": "qy36cuE6hGbngUyAKJgnYfSZ1NpDKzJnVZ7ogVpN28U8Pbup5cKQmA3sMhkE3TJJf2sXJD2yGL6dMnpZJpAMNb1",
  "key30": "3bVD3Wa1pC85jBSha6jdwKzeiMgoPvrJeYyhkfhtg2wrqBKRGHFWzPpWnoMo3tpFXFPHs8mRxdTXN4b54jnrCdsB",
  "key31": "4XYUtDNg6MJq3GuuyYK5BZ8EjYhgjg8pcgAU7xnLHDiuaxDtTARuQwePNhxXycEw6gdJvxwRdeNSkhytMwh1fUsD",
  "key32": "5NYeUaTX5JAErHUj3C5XxHipmfuKyjVPrPXroBbSykEM1svmrmVXKakAvBzAqg84ghWz7P7gepXV7GiYpiRocmrT",
  "key33": "4hJKuXso17xchPNuz7TDtzxJqE65Xpdr1q9jNyU9hkEja3s5SByRXSzotGWwbNt1CFM3Ytkj1VmZG4v97Aii8vjt",
  "key34": "5PZehY4QV97T11Cx6gvkruTjPseXsFLwcYDp3FPnyZ3L1tcd6EfaA9ivuDtJw9znqFdmNWMQ1cXfjvbnvi5TQAJL",
  "key35": "3arXo5XXjvnpCrM8aLq7i6FRzz34HC5iy6GSXvr4B5ETCmGEQtg6kf2kW1yombYaRbUbobyw1AWtDT5Z3qd3TUsc",
  "key36": "32knUzKDEfH8hceeBytL3Etm7UYdS3eU2EzRMx1U4fj7NyS5dLtETjFU6z2UeiCCgT1VkhMfRRa8ga5vRBwwyj6J"
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
