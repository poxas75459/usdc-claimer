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
    "3vggWfE9xU95qJPLixrFGKGdpWjXR3kjf1DGHsGB4QP8ts1Hempm2BqgpoPR8sZPcrEuy1F1uHffJLAMU5MnTN5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ZjQ6XtehWUTh6wVzXp9kBhDyAcnqTPtsy6ZZfEdQbBeCesSpR18h3ACfB6geqNzv4ZobvxR1GKBMPA3neujHcH",
  "key1": "sWp2vnTmWTmZJWRYhDNiU934cA8UWVk3SmmRAszGEfa3V4h6tFq1Sv3nhmhc9wqeuxS3s5Q46PHBCoZozoXPzvC",
  "key2": "mHVBQycokDnkwULpzXg4Vi6zeqNUYnkugAGjrZvTwsDoqY71Z4wAShMgFj1NakTY6ec16gECKvmTv1BFs63M6Ak",
  "key3": "2vEgzfwaswWNGYfmz8PrNZQ8aJXGAo6dvPJdWv3CwybCAebeo9fzaEztXABfQZWtUW5i5bLtesc3K8T8iVdekPc5",
  "key4": "sSMX85MLJ23BDuH1DB6Wn74F4TRhT8bhFay8bnqfzKsLDZ8ydURW5kJKTgHekb6pR6CpkqiWoqUntN4N6uiZmpk",
  "key5": "3R9yfZTszmGAJCq9n852ifmfcY1iDXmYLvNjwuU7zma2gb25Kt3cRCptB7AkuN8BeVyosVv6skZgUpUuHwNWoZUY",
  "key6": "5JLcpSN82o53n3Pxec6mK3RxKwdgwR3n4i2sULN5dUMnhjtJyY69TLKzx63sVfhP9VLCUXbXuFh3msPMt6yZnHU7",
  "key7": "61HDgn1pS92iUPu8AzPaDjXKf341PGD7n3waBwrXGzZv9sogAK6SNQYuNpaRydH6vimvVa2h3DTTFvz15mjxu7kY",
  "key8": "5Upqws3hzzB59pRrF7bRTvPAuHKG8HsxuE3JQsTf2n298TREhS37VP5sFf2w64iW782Hv3H1RTiYYAdCGqYEPewa",
  "key9": "4nhnfDu764kyEm7bT9UayZLBT2paYHXvDFsHV6m7brZ8egyj26HNzSMjH4V3c575pshxfQkvioYCNx5kb3HH1p5i",
  "key10": "5MNBBDdGySZhySvL1dRXQQP4shtrZ1NFC2c7QYnVA6HbuCjTyK7kiep4NjqWmF89Gvuy21hRsXmnoA1NhRm6A1X9",
  "key11": "DSovtEmWG6bKmSESpL9dH5BabqdibXFCeYkanmFUsv6H2Y8bN4FaSXtA7N3WNQS1B4M3L3imCDxEL9a6WXiahZf",
  "key12": "2Ef27qcurTo1mjzz6ssDN1UcpBjZvhNvuuD8U3n6Cw9ad2fwvVcCXpjXkvQrYsLikJcVu63htrhbjk4EZ49eUWfH",
  "key13": "2twp7qVphGBLeEDNFkwTXqy4b1m3coAS9XkN1FWe14Z3C7YrMmsZaJ8KMSMuKkv8nJGm8kqmvjRoHppUy41AtgCz",
  "key14": "43XxJvrdMxQiT1dM4DtUFSPMUbtMzAr3T5oLEaVTrYeNqTEMWJ9nbNApxE63BXJpYJqu78dst15NKeMeDYFJy4Zb",
  "key15": "23cAcrjtrQ5ATpyhDtq8PTzD6L7WgGgsiGNZJvFcUUBcwCYyMntGv1SJE4NDb9rJXzsVPnEsxMQUKcHFu1SkFRtQ",
  "key16": "2bDNxdDg4oU94vkfk6quvkWZdcJpT7PPRH71HpzdpXaZADbczMgz9qtBUoddsdSsLprgM5YahouzSJijBFjPERQN",
  "key17": "KtUWYpXG2t98QCs3YCRkvhLHENYy3YfeEaGyfGi5BGxov1RhVQDh4uuo6rYFnsNroePm4gif8Gh5jeoNsSqWEGH",
  "key18": "5LzTLx4cfD5273eYLqexonWqCz5SZvLSHRHpHngASrFqkFRj25TmBLpv27EnL1F5XXhdLybe85CtmTcChJWmQyei",
  "key19": "42bzUWduA1p5Eg5rBD7L2v4kPpDDsCoLfvzxTjmZDzJQxXrLEF5LF9ftFMrfAh825AHJo2q5pDxCsSFhH1fo67vC",
  "key20": "5uLeAem3qz3yazp13sFCZiEaH4HariH3YMsuzMMajyGmyxmkefq38SyditLpjNfdrCHmwxToChrdfv8A1Q5SHXYu",
  "key21": "wAsfNGGFcwtePRAqYkWt7FY1bfh8DN5VyJSLmRUcBupYcpH2DCH7HXzDR5BGYC8Pw8bKbFDHarXEHCjAmGnZJVn",
  "key22": "xGEgZYQTpiUqyPaiXjhkZ9aMJmjRVBxhZucQ6f9h6SYTQmv1eYTDYqbq81Z8rebgqPAcHjTxopaaRYTLaVm8Zvv",
  "key23": "5b2sGvbsdUZR7Jt7t1deqXjx8KTE795KbdTzpUS4hm4kugGjgJinQ2Fuj5y11wYkSNnEC4AKv2zEiVAPNNjiwqBm",
  "key24": "4JbYAR19pw1zoZYUra2ra66ngdDEs4R2XZAJHnM9FG9sTZjXio6rYCpN58CBtj4w5XkaksvT8tpcWiBXZTD5nmBQ",
  "key25": "4r9s5YX7xZM2zgY42wcZpR8miEcGBFuBm2QnTsBG4BDHFncND4KTALqi2Aec5qoDbejGmc9czDtQBRPbAs5ZTH61",
  "key26": "K135dhc1o1HyZH3WiY9sZWToBiJKHwegcEzWaqx4vjD1pZNrKmdjySyj5a56u9z74FBeDddpnWQkHrkva1qznDK",
  "key27": "NFdr9UtbjirXQS3eVE3LUrY4w49ZnxSHs6PHND1NwKKkqq9y4ke8JJwZTyLR1DL531wR4UzutorN6Qzs6Mpvepp",
  "key28": "CJ3hPAbQLAHB3FFeMBnMp5XQEMCKyJAxLLFQetSamEf9XKe1kumdHjBQqdU5po5C555ftqwmZ2Ly5LGofyfyWgP",
  "key29": "5uWPYXSwBLDaE2wRazWNSdM1UbMWt64eTw4pJkmQDkT4frSJr7poAY3bHL4HMxmknFLjTfXgC6UGRJPpMVzbroCW",
  "key30": "ygW76bghbwXa6ci96xHVHuMbBzjKmxUAvQLY4k3mW2KGABm2iqrtkWAJHScJZHedCoq7MHrHRuUFa7FZUP4XP2j",
  "key31": "3HMwpxn56NedmqoT5qjxyFABXGDiXxQ81pxNwzNcn4NVQGwd3eVGtqdSLn7S7VoAcM6Vrrkn4BGnnz5VUcAtE8gs",
  "key32": "xNCDtidPwofMSfKAJcfUq12sJgvFDLPF9Tn8GzjZj8DXYq9UhChgamr1K64As8ZeKQU7aQU5Ak2qu41SMBt6spB",
  "key33": "27LYw9Qaq2NquW6S5cCALJHYvNxyVzkehNoPjHWA1gA9vXTcBmnbFvQjje3kPMZAGhrmTcEHZwTF8ZWn1BkFVvNa",
  "key34": "5r7MLquTYquGSh7rxnBNNfZGYTXC1tMHuNzgzZcykQ9MuYGtcMCPfes1T8DHL2kRN6D9MpjtcgAjsyA2LWVFxNCs",
  "key35": "3FoSZCNr4H57Gtgu86EQKEetCyHzckQMNj1FXdMdupjyu2AJrXta73pG9oVo2gbNTcKZNyFfNVMyUJHWqoRSy8VV"
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
