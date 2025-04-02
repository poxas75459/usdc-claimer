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
    "tkbWoBdas89ZGchgWJBuiYYGx4bDnpZhUGruCFW9EGZ5nUhsHu6FQrA4imhCP7TAM866pkLvm9udAqrfzjjb2rt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DEMpNdJYrW5RwMgBJAwS69eR2Z7h9DSC5rimP1WN62p8w5qiSsjjkV81vTSQqfpwyeWaG7M7SJ7fsYHBHf5FCV9",
  "key1": "4oAENaq8Mt7i5Hwj63RMDUqEU6cpF4pTir99ggMX8zDCCdvQno8EVkY9NYrK34kvYsz9nTAQK1HK6rv3JhbHAonH",
  "key2": "4YaQv1x5dopVAiwAsPedBzhj489YeA29n1brULZxVyXhZHfbq4u7YBdy9inBkrY5LbVcUtL6WEVchgNr1JYuitaT",
  "key3": "3eTG7R2gTTakJ5mh4Cx9Qufbgow5RFFr2UNWGzw4SeAHAAGJ78wDEz2EDUeEeH96HNHc1L199Y4hVZ2YsNAjfEHz",
  "key4": "WrjB2ToBhdB8aSjsfRmwkv9B4NEa7WDBARrjyR5Zqm22wjxsLBLoTNsuVNFMraL3URHAun1JY9BynUTTymvuUgB",
  "key5": "3rfcuRYzQWrANsNaMoFNybKZXPQLaPE6xieJ4so5joJvhv854DDXHAMDBSX7GZdSxpjAHtF8ekAwPngCmB5Zt9Pg",
  "key6": "4uvD4aDJJv6r89ZhKcbReP2cLk2S4KkfzVJ88CGpbnkEaxGCXy9VJdGco8AwTUjsicXGJfj6uQwY4CE5LMqSNe26",
  "key7": "2gTQkLFAyHE6U7c64QGBBm7TAS7ZigrntDobfRYuxtgLnKh7U4QW8wm3cjLNQPbsiWE62Yj8dYCnAzpa67Sbv6es",
  "key8": "9RSpJwxB8i9aTrP4iufpgXtoADGMwwDBinq9wc3TEKGRrL4imuJ44uWmd5fGeRfY8YGy7Rw4kWeRYHQ4WD3ywZ2",
  "key9": "2HLKVuiSbFBXZfSoGygVxRqsYu9tXYy6cZP3dM7RG6SDRuFRs3NGKgzUcmjkRf8RgN2RhFBdsPFayjDG1rRG7qRH",
  "key10": "5zEdKWSa4HH7f6iDRJfVh4B1eQRL8SqGX5RBBUz8iuUbyPYD9C3tx6RNTBfgh5RFvtNodvcUy6jnjUBuoKBGhzXZ",
  "key11": "5fHGnddEhXgaAKojXA8CSXqBhAuU4wYptW4Na91BVVDVxpY8M6f3VNbsbDoht6GTJKSA3JCKDcG4WagiunNHaRyD",
  "key12": "2oe1znzxhUgXZWd9ZKffK2wkC5onv6RfgGzc8sWSxuBYq9s5UKgDQqRgiYAFhrppwcHySYMzxF4zLaTazvFQw8np",
  "key13": "4JhHEAviJJYusKSi3Hq8nM2irQj8mvbvFQWqH5yrfkpZtjX3KZEU4v9MsFcDd5Z4CpnjnhMzYF8JdXNLUTo7cRuj",
  "key14": "51kPEneL2SPoEuwWuPpfT4RAhzvg4nyvd6K36GsDSByCAa7ZfJPKoTMdg8pux1GHAun1DWWX1YuZiGQii93E2WNg",
  "key15": "4ogMUossCBnfq2W696U1d7PYiDuuvxSawq5kvu8eZUrnQmDBGUpbHa8H9g64La3muS7K1E6G7gRWcDyvBXzBkwTt",
  "key16": "2nZFXuPcvXBLnYwj86PVw9Syg1pRhas8d75AWcpwPhy5yrSEyRmSb97dGbo55C3HD99QRJk8VzwGoW8PFxWecEtt",
  "key17": "5S4qBNsjMZHnv8JEfiCGof1Qh7a5VVWvu4LNPAQTuDrP74SUXTjpZQe5ARN5dGdtnhaFWAVv7imvNUaJYuYBJCoS",
  "key18": "3e9ScWkMRd3LeJenWcTnueStHF2Sc8hZx84w4szd2YYycpMvayAtj6sCxq5sEmGt1vmkhh8FSM4n87WsvTHvtihi",
  "key19": "Sw2oHHv4asVFT2SBBgL2G6f7HEvdQjuDF187PDgnjxkFz8D3Sjdr85QTuszUDpdoU8WCdQwj3Tf1h9Vbu84LyFv",
  "key20": "B4GS2EoH8jcHPNBk7SSovGmCnqMotSFb1yVxZcj4T6fy4HcLq4esNqPyYXPAKaKkd29hHsQhvTDZrMjyJPbw2E7",
  "key21": "4owi9uC4ikprseaCP9xSUMSgt8Me3WBHBfXo7y1E4CsWyRuHtw2wAx9ss7hcxWrukd1tSz8998NYxVdFN3YB7syt",
  "key22": "3AXQ9Tskvptr81DkHoFB4SjyRSJ2MVK4rQwV54wTou4kXYhbaiVHUyiz4vBuq7T3WuW2z5tmHH2JUGeVY3QDYb9H",
  "key23": "3gPoHitdAKFwwZXh2EgePHqNiUds1H55uc9jzNxwMEn8A2CuWUAgtgx8xZSSEzCKiGEYFkHDhjweA42YHT5VjbMa",
  "key24": "Ug3CeA5yJmaSM4sQr1skMP8ckdru8WKWZrRWw4vrQf2gLZKsgzT4LrnqCtCJFVTc2ZJsd8D41xsz7D58brGVno9",
  "key25": "2myjVRGuYxCfoCmrMHfd8gKE9qA1kGEruXrBuqVJSkz3YWP3fPL3om2iNLfihAePY8aw7SWffE33JkTsvQa4597p",
  "key26": "5SqKZjKiWyQb6TzkNUeAJb7cQzxFgrtjGn2SifNNvDBcADQrYUeAoByt4sxvTAm6eTS2XqwB7xgkEMtwx14shy2G",
  "key27": "43M5jjM5QiskFPPEpmHWZoQ56vRpSgUMjxAEFdaR1Dh9phzguG6ivYBJMAVeZ91h8yATrL7iHu1kA4KrRMqGxowp",
  "key28": "sY9p7RMmEQWdfKE9ygkjWtAeD9nufihGNHLzi71g36QgUkCAt8BuSgWhWbi8fex8VueKykQevDvTSRH7swwjLMn",
  "key29": "5MLJ7XeQFNQNf4QiC9gVDnygWzkiUvpt4UGzFsijEduR1MUYN4cSa8aHY3JT6gBw9FfcHjaosJrAof1He9v6659i",
  "key30": "62AHEbfxfi9Tig4jvgt5MGYPakr5yKaVzaF1TNUmnHsJ8RSPfMUZE4LDbx3LoHX3nQVYwSUt6VGyEupzuXcc3RBb",
  "key31": "49UvWMT2Lw1QAJJ1T71AWCybk8RgTProULrLiGwofziXtSiutu4yaUDa2M1umwGj1QSkQqyvprrnx2oLapLbBTyH",
  "key32": "2AFXpo8usr9bNchV1vuggkrXkrdWRYFZ48T8C7x6KwRJ84wqJLuCr8621b8rmFATAjwbLbfdhMP5wc4DPpye8PQf",
  "key33": "2oYfwAe4Y72nYxPCwKCGZhiV1wcAzwLbNxUfsY4bMWiGoKHPifVtvoEzeAXkb1BgzfK6JzA2vTja3xeTZDKF4Y2F",
  "key34": "4W9bJHLjDVhDKF7KEbPdUBqyY7dKnfrMVNJN3MDkfZrx5HcCCw2Sg8RvoANaHyBMYtxrVGe66Kk4DS5wf1sf2Nte",
  "key35": "55fxi7qrDu9uy84M4uWYoEU198VQs8SRa5WkChNcW9WiwqxhmpmMV8qoE4FC8oNGFTyB5YRru4RxdYCyrv1y6CMy",
  "key36": "55BKPfQnpUJEPh9w7RVsPQgb5abPNHVMKMtc3eBDkLA3TVFYHxVmJ5HiyAhae8b6yYFLNXumAwKkGnjzY2b8E3u",
  "key37": "5Y7H2t7V9D2aZGsSkDTmPZi2U1jMMA3bhW6pmadveapmKUu91nCYWa51EeqZEfRqBKKvUdAyLgMbhnCmmxyqswh2",
  "key38": "4G2zHmAuTK6XkNs314nKKirz5wB6vUd9YXsYDHeST17tYzK2yESR5XP3HiRUw3kXp4BH3NokoVSVctk6Vp5dPpUV",
  "key39": "5zvitcQJnNT9wRtwo7CEQ6ix9buxrKLoxHD9nAoq3dEyPiPFdmSCH2jgpyT8NKPQjaDCS9T7xVgZoLfQXsXg4kPQ",
  "key40": "3Ye2SMZTBin1xarhbHpfPde9eQYQTsCaJxVpX45nhhU1hE3zFg7aZJpQy4EpFP1rs3jJo7G7ZKvbP5vdtaxnFAFG",
  "key41": "4FxGGfAzLZwZEhd4GNGcxtpheTCo3RuvPEBeTswTwPygMW1sPn9Pw89xgyDUUNx8HaKaMppVrmvbfmsrWhsrJ8s1",
  "key42": "yh2Qxwfsk4BWJHrkDfq4TJpqJLmHJ4MLbNdWSruVxZvm9s9XHEMWW4C5AfTSSDR8R2HSMvbZwGABSAdnrxfu8kG",
  "key43": "5jkhnJrT9ENxFYDw16w9o79obuY5TRWR8bD1JmLp2qCgBZnZ84s6G4TKdHrAxDDc2v7BJTdHp7PK3sr2tWAjvzYN",
  "key44": "3b8kA78CUanmJFq1uvWjQk6rzQjoj3gbA9HYZDsYg7JU2ydWmyqfkgZgBtj73TZ539wNJGRQ7vxDguGYaqfVxTre"
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
