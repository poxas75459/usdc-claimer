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
    "58QbE6kAeCCUHJu55qRFyT6r3nmifX6ZfzHSVn81R31oHqdSogWrTpiFzQebZeNRTnL9DAwR8fAChbVfDjVvwDP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2exiuv2NtTVhdX5rW6XAQ7usctmV8BGgmfk8UVdw4eVNztF1oZSJjKq7ktBMFav5n5QbHzNXoR6AGq2aLnXKHYQu",
  "key1": "3gRbm66evPHJqbfhQfiYjzwnbjE7daBXKjZSdFFv45pWghchxMe4Z6jhj7wg7HTdC2iDXyyqkXRjbEKm8mjLCHZw",
  "key2": "3PZHucz4gos2CrPhmgeuq1KtLkAyF4pQf4PKgpbSGkw42NFbRjVqyB6We3kXk2h8rZ6Pms7fDo8UYb4yQkDNHyXw",
  "key3": "4cP2F9DAwogdK1cr4KDnr4VnNiMh9bkEPvBDPugG9XutY72Wh9MTn9ypB2kDHDfvRdciziJgj37EzVdKtx1msbPK",
  "key4": "ofuX5ZTLhfy7mLktFkvJwAgAu4kdrvoQXCFnavVbgXZ7GBXom3pWp8PHJ32GU6ymcMvcbFC91A58vBoGrFRm8dX",
  "key5": "5HuL5kn2t61rrtFDFACxQcaT4H8A6S4Wh9Siq4kcWrm2X8smapCqxYERdnp6fAht536pLJGJUAQdhEcnRCqBz2rS",
  "key6": "5e5LhkeZGJzAcT8kp6oPs7KjyjzEZp4Pk7TrvAumbRfYEAc3dymu2pynaXnASCnaTpPpwypD4CxMhkbFFQejZqW1",
  "key7": "4jodpLcoFZXx4b1Qkq1dYEkQDFS756Kxn6AmveHy4Nk4mm6Z9hRp4jpNycMDG2JChJ5xwAe4UFm4CFzW6c61ixHc",
  "key8": "gYV6v8cznbdWFhLxSHZ9bbGvLgvykVfDgKo8tmBQjQf5uteLjuLQ3z7F4wybRwwz8mF9dQtrLFjkqG1NuxEtqfx",
  "key9": "uz6hJzwWsphCUyGy664yqhQanUDs3ybo9cV8iCLFpmNkNrbKhtcr2nRMQKGR5mveZx4t2jRvMdjw3Xa2ureDS3q",
  "key10": "4fBR4RtoXp1bb8zGZBXNCzEB3K98PvEjx1ZFdsZmw3nrptXjwent64y3hgpQBbRGDzRzZDifQy5t6mJvkFp2EsJx",
  "key11": "3QTwsSCKg6FUCmTpuBEKcViQ5vwPvDScCptSURzzX91PcTykKv791ZERvHV1zRJU7ByKBBD2o7J7DhhZLtozM36o",
  "key12": "51qfFvAcDG2YhsSVKdcoEN1xGdfUzYw1qAfVbijLMYtdQhuPCjmwKAr7BjJVqmfFigfJzJc3osugYinpy64AxsCY",
  "key13": "1SUcCQMobQeM3Kdo81WK1V4UFBYmPfekKF5U9EK2y84j4LdiGs4KxaruQ7QEDKDHrNwvSSK3YoUGfg4pDQdVc5J",
  "key14": "jDhceX1iwziVSgfdWKAVnojgW7VHr2jUzjK8FAFP5aPUcEmZuHVATuR988JVgiizwCD2i4XY75QvcmjDhFDKfzi",
  "key15": "21GDhAyJ5mvfCnX8XicBQgWeegdv4JJRWV2ngwoxNNc1EAxYTWm7kTkVQ5kXfoKvzhUWcM4uFenYPPtEye7b1GaG",
  "key16": "3hrfkoEj18oEXMV3CtSA4ZHsTaq1NBS22K4zoWnZEv9V9zKkEFo9tneGyBu2VcR3s8VacunEFkXx1GLW2jPwcyad",
  "key17": "556EKZyC7FSUGVBNWrv2yW1DPcXWnho3rWDWyAoEDhw3N3UcfxsmFLb3cYwskkhzrq7WtUY7ZYAjp8VcDsNu3LyV",
  "key18": "2Ms8Eyi52RN5FGS5b5M3JSUW3FV9hUUHtw6i3fPPBgFpHHKuz1UL2q53PRxJA2L9i41t8iPZ6bYSzF1t2LySXDa2",
  "key19": "64Zfty5fX7FDr6zgaXG3MNFESDotseS7nY4SEXwYwV2cVgLk1dPMDf26QKSwoKx68r44KJ5m8U9F9dfGCHo2kdVa",
  "key20": "4Qf5mWWqwHaQddvgNY75AsGGci1qTp8f3K8CtYMyhLM42tuHdQg14xiavmctszbA3HqTSZCu9CfG6r4oQrE5tMsB",
  "key21": "5nDhSxvMsAzXxGD94rTguzSZja5xvJ7WXzYsnb2oGUEAztyWShsKcKerAia6ehcx4m9YDcEruqgH8ZHQTqrw7oi",
  "key22": "3VsHqpUkFrkjor4u4yGshiVLKaG8CnjMVWuXpwWnhEUhTk3T8WkqmgPg7XG24yKkhGTCxkvWvWWMyEXdBPXvGjW",
  "key23": "3nobhjAYstfTp4PJfBQwGSMKq1swyq5wdpHgjF7bj2iUMyTU3kgn6RpHWbxyyr2MxrkrixkJavyy9wenWv9pXf5",
  "key24": "2zhr9uYNRxbJpFwjN5HzaN1BgpK9KBWXW4PfTdj8fGtDQ45xSvHVtKUozvktzyCbm7LdSdTuFzR8HjRhm6osFEcv",
  "key25": "2WeD1LRkKS5dKDjRBU2L5N3PCNQYCiG5UV3v8PCqak338W9rwsko7hGhp7xVY5BW5UkrVcGjpnH1VGC4zidVfFVM",
  "key26": "65Wa6mHvK9JGkShFQBUcvaDbz6h4pgETU3FcCK4kxmTUuSSADQXvXhpzHqSCDuDyfUehpMWthSZhQEKKAT9NzmNA",
  "key27": "67qieXsYJxprcXmedCfx8hZET3QzTkB3NmkGUnPSCnWiPRAVHxAixjuEMyd6qhqz1jP2G92WVPF3fM4DxsudaaJL",
  "key28": "4hD6Edi8DBrBrWQYVrDAbaXCCvVxAxYgKHhWPJVK4A252mTayCFNpHsUgSScFhLBRv2jV7zWr6jUj9XnkudCVkf4",
  "key29": "nYuEwhaea2aZJEB63f482wg5EVmVuyQobN44DqktSau7QyYi7X8HNQrppZptDxZ1w7MpQDdj8sTvAwovkz6hKKf",
  "key30": "3EasUBVDSVpa3Nc6Fxy9u578YBiqSNTYm5BH6GuRACfKYf88knaX3WEZ9dNJuEVNPVpRx91qyGiMA9M6iT3QmpZx",
  "key31": "5z8cGmauyVVSPpNELeFEyS8Y4hrqMM2aGQZ1q2d4QW7XxbbEnhjXwur3jzfBLakm2xLLa3Kwtye9UxLZGWv3qMhn",
  "key32": "R6ncVxTBoLJHayp92EMRUovWScuqPMWJ8Z4YtSfSXv4yYhqBQfY1jtM3vdKz4ZXuCrENDtsYuTAiDPgfXNjNWcD",
  "key33": "4mP7fw2zndpYbA98juRejyjVDxR9NthKBEV18V74kq8ouKaUpbP9wYp1Zi9B1k93jTMsaQhdyRp6SwRzLom8GxN4",
  "key34": "62PwFdH3GBeVNcia8kDgSwaekWpieZ4N7Uvc2RFAZo6YCGh3xpURtRfmaimsxBhgvKBEKqgCsCe4ENxqHrCoJh62",
  "key35": "3UC4FNU45oBoY54nBtMxx1UJGg6ZUTfmoUtgsdK4Lc4rVv9ye6Uiiuy9Q2EzhkzqoDmpxi1GDZTZT8ERBk7Q9jdZ",
  "key36": "5KYeDa19EwNVCY9U8uMhoY3kXGoUvRew7KC3qSybr4PWwf1uAEA7j7th1V3JWfSc9ztZgAQarW3VHVeEfgVExxSz",
  "key37": "4NapXpnFJmvdkwRfVvCywRDcujomvrrZxDoMZj3AUDcD87V9YmukKATj7JbM7Y4GPCJgXsBWb3AcRPmpAR53vUpe",
  "key38": "3eJLrhw5h8q76bGF6AaakiGkvLJqCsY36dj1AN3YSwncRPS43HVvzmSWJ3rbDWX71Cqj4j4jCb7xsxJZuVgoAzTY",
  "key39": "51gJrTt9niv6AQyGLRAGmSxxGfCPmTuxczVEZpEkVmzXDiLqPbr8VdgqugmMj8U1vstbZfKdnXMrzCMBApJHTyWx",
  "key40": "2tNNCuT87zbrAsFcviPtUbFFx41qqqiiW2QbzNVgaM9FKcYGLZbEHgKqNiDSybwkMZCbDggVKXH1amdyHo5T4qb7",
  "key41": "3WtvV69n4QTumTWGvwdcDWk1JZoeMzPNMDa7ZaQNJDXCJWqg3QANTegrazPTwJU24phNyzhhgdAFWrrLZ4jmVGrL",
  "key42": "5WGrnGFQuikv9wk5k92J1DubQ4efDSRTTppEPfn6UM3guvpVwXLbaj9xMofGfcGhQasHr53mAwV95TcHs41GXZkE",
  "key43": "3AptfqM2cJ3MBtHYF2yC5mw6Ce7JNWy9yDWmMFvbT7SFPrxTatQ9QLAmz8H6Bno6cjodwE96bpDt31VjteZ9MSYY",
  "key44": "582hDdiFouhLFDz8imvzaBqhgnWuQpTF9gXhLnQYw2FCnmJtwubawCKaBm3FFU3jNDmVic9xYy44GX2tFdwpySKe",
  "key45": "6Gms982btuRjhXwVn8RuqB5jAqGaeFddvTd3QqHBSsUxdaTZBdCTPhumpkPt5KBg2eXdrCRJhUJkyDPBTc7FUmh",
  "key46": "5ztKvV7PNKrTmDxpxkNgPq4jLB7TPzJx9mBaxXGm4uwM8wkWn9ZPoWt3SLysZRsYiP5zGZeHqw49g6kEVczvM4B9"
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
