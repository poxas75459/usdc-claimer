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
    "bJFfM9DwDaAVkrZuSEQo8mL32YFs2TJ8CGVBaG48tMt9k6RvDX4gQHnaAyGvc1XwQ7GDfEDxYs7EaDH6u4DZeH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U4F6fSnsNoKLhMcfiSVNYV1wBX4nUfPzi2MxhXvz8aeDf7QSPdsuKcq3HhuNL3QpWKuNbXschPCPrYbcgNYBxcU",
  "key1": "2j82CWt6EwmYG1wLiJfa5a6opVvBh8xyUcEcgPpszyVv1Kmyebf5pYL4yKUfCgV9PS1idjJDVuihP9G7xh5K2dKJ",
  "key2": "5j3wu5GpEFA3eCBLEUEGgUHuDK8jxdBsJ1dC2h8zESAxENs9Npruq4snWyBk1oBeRmL43RDp16f5y463oKe5nto6",
  "key3": "2BgrdaL5hgNcdQxdpAi442ZPbE1tTSWr7Vr8GG2GJKSbWPzVpNW5vEFHwPL6KMai2EG17FCqQJtqXtkKmuRvfycB",
  "key4": "4V3qnsp78tvH91SMgywpTwPU8DzhAWzmkBkSoVr8kPEZFCFGtMgZyieeh1KP6mzr1FDbhQgQAu5CahAA693cizaG",
  "key5": "5E83rAh3N42NuoVLJTeTuYXZ2TixX7LjkyqmsCwxFb82agRsqDr8xtHPCkmbt124EmF8w7XW4gosPissFmLY9WxH",
  "key6": "S5NfJxc2Tc7TC2NT1TLuEGv7zkb2zCCD5DrJYLCbZh6DeW11TpzEkQy6PKXop57dkYB3T63ZRQiiGr5bAiYMr5X",
  "key7": "3yjgxa4i8zkFRGYNmGRgc4V54zLyhyh8ucnrScYk3QQZFeB594r4wFqeyVM4dY9cHCDfvMs2ENfBEF7R6pQ8NVRh",
  "key8": "3TWmaZYanaCKy5YYjPtEpAYAWJHBQkdJmx4cnJKNwR3YKqSQobYseSb9v7yBu4iivuwtP55HweFgFvN8BcATyrbq",
  "key9": "2Znet1Ffc82o4mR5xfSXdjTNQweanWNWJHTJAGt2w4nMzXDLNJFnKqFFLkBxVgpotVjKgHvdJXYGczvh6UvaM1sV",
  "key10": "49RuctxbnuxJ7WrRku63takGD7j9gR47AHXTDtri6fH1Du3FqfQW53MB4GYri4tUueVonUyFacRd14nTWSyjoo3F",
  "key11": "2vQ3AcSW94Z3cyERE19pkJ99guZQZfFgmsUVbYKLAcspcqtiEFXpiyj7tAd3oxvHnCQdKhUB3vkQS1fwZisbmKU7",
  "key12": "4ygiMZe2wocAByV2sVfj3YXdmQ1YtzN6J5T7G11mhCnx6HNzHFTfhXHXMAB38EaATUon384opcFzVukrLwcgRxjH",
  "key13": "5hyr6kp4Hho4Eodz7LCgYJnJZJTqrcnQYY3FTDoJehjcCVroT5hGPX7YVzVoFw4K3ME42KLErY72SojkZ9QJT5v7",
  "key14": "2s68tkV2F97MQXC7geM8EkEZ284n3eq5Vaxi7QbYwWtUdVfu1wsgeHWboHyrVwMNxMVNrkVnxThcAPKHmXFiyNpx",
  "key15": "5Rtyyt7dXqFaX8KEdZ4tFKfjtvpgyu6B2jahPesPYCoYnY45h5s7xG8QPXW67wE4JymvajqrxfPieEhna6rr2YqX",
  "key16": "29eL8T9KsKWoA42PLHbYxcsUrDcnRD3XVSgmn2Eqwekco1RELxu7qbHQ48XGxPjyhHXApBFqMSNX8CP9YzXS4JKh",
  "key17": "4Pa4tShAz3qHPJ5zp6E3NQFjSn5WAgeZUNDU5Wn78VLvs4vRY1CCYzhEmU4SKAF7PbdXuKWBrUaACYBLLDkqmsop",
  "key18": "55gLGRh8PX484DK1m19CV5dSz9P3sKDhKVG9aBZadzszdPq8YyzbEDQsLvWKJCm79xgLpNWAwENTL5mDzjXq4p1s",
  "key19": "2L84EkXw77zwuPbZuypK6gVpPncvQFNurZ5xVtp1HcEk1mZ5QQg4BXUBAuSZG8WyHcrnTEEFBwLR7Xme59BSrkPb",
  "key20": "zELhMMQDMtJzc7VzBbtYB9adC5V4vqJ7amAd4j6Nw86ABiNZ3wgfUkFNLyQiMHMP4oum7zaMFnALbmcXwbsWdqs",
  "key21": "2LiQutWH1ih7b7sdm4RN3stSo9dSwmYU1iV2bTAkEz9rAjrMQTdu9xWeGu4yLwBk5bpiTNiP31hLsmraYJiuXmps",
  "key22": "2BxS48sGggNbZ3XHiScnpiXLw9XQrLBbUdV7jQY9hwCvTEVm18cos5zE6QMCdMsyuAwKu77MXc62v3zh6iX8ZKVd",
  "key23": "3zwvTUZ7EaBNykQ4P3wuCP3FPZ3jDi6LxRGUGQq588HyNMG1tXRsBSTd1768wCWbJAaJypfH2k7ZcETjgyvveNta",
  "key24": "66PJjmQQtJaXx3qptej843N11Uo4bb2sodgXSJGReWAninVJcQqz796qoGywNug3MriTCS3uumZx2jt9bUcy5Z5V",
  "key25": "RxhoFJTiiLAbejCxVFnTv9GNgaLJ6Wt7e9frKfZaHuTBRaLwZnBoPd4aPhBpwmud4yVWVTQaheuTFsEFH9xVCmc",
  "key26": "2NQQnWezejiAU3SEUPQ4DBHH9PHYrpKbHbRFkHz2vJMYv6wUTY5Z5hxumbfdFW3Q7zgWHMX49tEzGdF52jEfEC2z",
  "key27": "SiRLhaoddcNypo4fmKkpFh7cZ5B21cfFv26pfgQmz4fXPDgdJayx2xc9MQAGvyBDevahocUSNDoAniUe67Pc1XZ",
  "key28": "xCt6u7gZJKcac4CoPEVyVcjjepmxg5bXZw1oRBedyWbHRKZzVshSdaEfYe8SX44hWWxhEV7jBDqFQz6ZJbkNath",
  "key29": "2i5GEadGeJMnjjnY7qAxnJtfWrb6q85XzEymWFHskzaM7SYdXExuzFB8iETYQBR3oeQAo4FeXKLYUiZai72ph8ZD",
  "key30": "fzPDHfmhegVAruB462qjrjTmdinZUSqCznd3yvfuTSumkbRcSJyHfADo168j6zjiSznttUjhDY9PR7tDmi6Eq9L",
  "key31": "7YvQ9dDzE8mq4BGYxv9YUUJKuqtboAsjwWTWh4DLvY1FJh6wmCXTjfuSGJPxA5HhDsgsEggtPSC3Yhm8as5q4SK",
  "key32": "3Po2ebhQtQgKLpq1LfP4r4AUDWEmiBHZaoeskiboLCiJvQS1A5LyrmwVEu7cdiZnV6m61UtiEVheins1n4g45uB5",
  "key33": "28V9h8mamQNmhN2tpCJDguGpbgg3rT3ysUMBQoK7DbdCHj6vgXA8rH3krwkpDRH83Bb5aUkjfWJTykumFioYm5VR",
  "key34": "5pAf6rdyE6QyQafRodPgeDzcsaYQoC2GPj26bQzJTgXecbQnDYjPKfWcFtwBtqobw9U4nzeQVTH9wd9gxjUYqQaz",
  "key35": "2aRWXDwF6Ykr13wbTGVsaZgqUvWwC1pbqNNsDcTisgRPNoXoVeJHc2hS1FJhGE2M3De6aA6DAFvMqsNfc114xhe7",
  "key36": "2CfKiPLaEtup2tp3LXrCZvbZvdfwSEupBGg6T1mqPc5B6TfuEwRNppQxxES2QcjicptqyLHHksRE78MuBxPMoH8r",
  "key37": "aMX5A9RY3YC1YcALHGKT59N1cDqsbW7nfbDctQ8GCjwKNZ5wopYua3MeU3frezLruTSh5g1P52sYMVrxqdAKLTy",
  "key38": "5NKTbyhmvtEJMigG8kWWMLLe35mmu68bTV9pCe9gy6frEcq9Lf3pnuVy6VzddiyjysKFgCGh3E9nHWfetJUoxyfv",
  "key39": "2HHAnUE2NBkNxzHsS2ufVemTcYKXmJcEqbUUnF21sZ7VvN5zVajckhv3D3pXugreXb3H51Ka6KKBbzq4hB8dvA1S",
  "key40": "zTFxzVF9LdUU4m3dKtb5nuFRqDzh8jK2p1bnSX2C2gZhznZ7YTpBL86VoWueCwBo7RiCDwZBXfQaFZEZbp5qX7z",
  "key41": "2fw66DGZq6neYr5irMej4xoRjQh5PhF4qchzShF6yecdsLsk1jAJbNxAzmrtQANDfx5B13vnwYfPCeWnzHXVfzqC",
  "key42": "3uyM1nGsbmebAGm48tuk9tyfUdAchM6iVybPQ4R7aZPKEDehFoBmFoJN9s65fxjH5N7XXGsfpjPd13REv6pP4JGy",
  "key43": "2B2GjAcroHHuczNQQKu4ENhU8664wXeic8Fg4GgVuuENiN6pqyWg1g5yqWz94ZNMBUz1ZARBkDDXnuPCc5LaqCmo",
  "key44": "2wxnXAcRH9xFH7G1AKHzEFbnY8Ksr2zRRH7YPiCFL8dSmnn88ptqvV6Eqxg7PFPHRWrSTopyd4yAgPa9nusDnMNf",
  "key45": "SVauvH7ReuEML2nEdRv7DuSvuE4nbVPFdHTX63myidsfShhkuk9FYyaUy4zRt7WF9GykrJnyVCMzXQUGQVG6Jq7",
  "key46": "4wigedtBaW5PyygjHEi86tWuFhSv8bTaFZzVVg5agaY7z6Be3GTBXGhCRsy4zAEBBZtS6W4F2t1DW4qDeQMyVsCj"
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
