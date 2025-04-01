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
    "WupPwHsCoCUYtvCvKchVN8Ki559dY9kkan2fPRd4CiPVy7N5y9Wp3zzXZve7K6Wzz4R8HoDEQzLs58HJSuBRzx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uw2vra5UaiSeyYAd3BSXU313cJnMvzLHXfEonAGa8j5PRAgLnQtqzfYyyGt8sZhfX1TU2eJDiWNB9NkDYHU1b3Y",
  "key1": "5bE4vW4bnWoSMWaC2iCPVgPHW7926gfZkSktVAY92jsktG6HCgVWjN5QvStSHS55ZYdjbQj8WUHRv6LX5oSQGqoZ",
  "key2": "PnWtMmAvN5C3P2j6vq9Xm9PKCPeKgdgGLzCh9UQv4HW6BEkpDkYEkBeYaU9dQkpiYzmM3N5WkRwC366vvf7etGE",
  "key3": "7sjXftepwtA1QqgYj9tPPcimL4pXu6UPLGu19XTiWTN413zmu7K7cbBwaK2xmJKqWQFBrWB2K4dusVWWHLN9wq9",
  "key4": "CKnwkYjynZawMmhmca9A2gc6THYo9z5cy9QxbEhiBG4RHMaKwAdAgHCJ7H46AWJc8pgrG4RuFwb1TsRvmJnuFA8",
  "key5": "4P6pd9wTug5JonYSD1dW2ZMQRVb47QJQnxZRQrHjaq4o4A2Hj4jEuVHpEpa8cwQmDAp5fg7niMKpacHoPVvsn8ey",
  "key6": "4ritEqtb5vxBf4j64KskbckLYvunAunE34eFt6GGjRgNSHyQ6EJDJnRVbTs4u3KWdurfoK3XL8XD5Cp8pMCb6YX9",
  "key7": "3bPjcw8dJXcrzf6Zxbe5FqFHjmNdbBbqkTAkdBtNLagtuihmoYcAYCGsuow6uehSH2HZejXQdT1HL4mAupCdFXjM",
  "key8": "56kyh3nukg7FkdstPDwZxTAaSXdhWjNecuJ5GUYSxHFyUJrByfKs85TMFfaT859Q6tRk5MPMqjkihA3PRCgNpWMK",
  "key9": "3FpwQfVannhKdiUXA5UfdLcG6W9Tx4ykuBxZ4Gp2doCesTVBnUutcTQymum1rnggrwAnrYgxRGtAtq3tDHrsLTxb",
  "key10": "3GWmtwUNxFNxDAdHpHZVNRs2Q1vmxFy1iP8ugynm2LRDPz6ERaaKaPPLLJHGkJ581Z6aZYU637ZbfSmP4WWEcSyZ",
  "key11": "4pqJ8X4vnA2fLFMgYVWsMrFCPvZzgqfNGr2P12GbCGMt6m247PLVBiSswehgaBX2Apdohu88uZgsTeSeDMr7x2kX",
  "key12": "3RBHk5rbG7w1V3PPBRMLzSmaFFXJacJDfSiESbw6PcPZKQAin7hBz5gWNsu3vbXPnLAraAHyHTNnZNHRQNQwQA28",
  "key13": "4vokFyaN9EukWvJWQB7mc1fxMcCBrsw1E8yDksHysLvd3MCagwbUMdrxudCEoBf7RRMzgRVH4vBFENFHZ5Rphrbu",
  "key14": "5ZijU5xQeXBcTyZqEG5gEYy4op3PeskW6uc6GPZ6e3NssVVkGJsAquNiQLwGZLyz4UwKZkCKdATRoJdiWY4MKY8g",
  "key15": "yYpqjQEcjSgEphGHxjqQ9RCbJ7qzGa9ADkANZU3CvLiKb5bRZu6asw3MXvpZQcFjgG1ER6YcUaxrctqxoiZm8VC",
  "key16": "3wEn4UA7EfiNnWSwVTxH4DFBvRBWtViFqSbdvCMssQA74nqs8n8xyWZDh7Lb8fAvcFjMuFRcgXmuanjzPkvGxVZC",
  "key17": "5e12SFBzfz63wjv7EbcDfRQLHFRtdsPEaPZb6Fy9BZjmAtoo5JbauKL4M2wcVPVzyRjQi76rbKvz6qnMj5NZVfZS",
  "key18": "2Yq7pUgEFsjHGKChJFuFCzoKvc4pJ8jHVA7vyp7Hg1cZA2S7yDNWsF2UwUiVtMF8VTE3N9ohgE8m5hoVu34j5Tfm",
  "key19": "2RHSyHrohMMA2BvgX8j2Vz1vRCn5nuLZZ6nNyMNQpK6Gg9RUZGk6H7X8C7VC9GvJVG23KsZ1jBbJhbboArJVJgiM",
  "key20": "rrCgdyZrkzpt3yrMxRxZeXrH7uYZUUdifAbsNMXJgYVgCgtyCsSSgEWwk4KypiRY23zZqo6gxGvV72Rcc3SoJqN",
  "key21": "65W8NeMLzJXUzt1DVkgQ4NrqHtiUBUFT6AZaZSNCVCgf5bHBJBhEZPCv8J1bBGLbkAnncGVwSvN39ki9oUaMYXNg",
  "key22": "3iZ4yaQR1fnhc9s95TMxr3xgcVgeaxE2bRuYKaztqoYvezUZ34RBYHkLdTaLYoFZ8a3VPqvtUzRwLVERoRPt7Mim",
  "key23": "YSXdZfXeYFWc2PGLusryc4VLyHvkGg1TTY7fEZr6o3FBoVxBxbVULFQ7wvi55HtK6Gha3JMzLKkDcmSoSx5ntTL",
  "key24": "3mX9cVV8BWeaxcV6btRKZgR45wpwSyZbxSvxgMThi5h8qou9xvV2tL4rSUDPdhTA7Sdt6tWehspssjRUXG7k6wdX",
  "key25": "61A3VCAXDPrMErDo8TXzLuKy7XjNvts13sKE6w4vyXZum198xsotRVWi2F9mhKy9N4Qpn88ZDr2MBc729zsoHJko",
  "key26": "2M3BR7CL3jjLpXnN1JtjjLPim63Bug9ckYYfTSxdP4z4jjxGKoqNea2g7ajhHLwTxKrKRV5ejmhm2GEucZMEjv7m",
  "key27": "3qNBMs82kN2wFVWPEs72gHfXHYJdvMWD5c4pviRrqJD3wXyyWKiZBhZ8yy7q8Cync6NuyYoxpL5bNPooNWt5k8v4",
  "key28": "3aVNox9fWriy1uvU9rDCZ82KdP9W19RaHLyg9adjDM5ScPTneTqNrpv4jDEqYuP4fmUD5Bt6pbMAg4E5wMWcuC6k",
  "key29": "R2hFNX1CXRZ7MX62r8aLqskfFKYFUDw83KGAYFdoZ3jLg2G9Dk7FUidijVBLomKb23xgENgG9yUZ9imucB6VPvp",
  "key30": "27bPRoV1hoVZYwHFeE94D3apzqxq87ABqwLnTUGWYQphwZurqgJx6Q8thVGJXnaUtUCVeS3aXfyeaTG6yWXFZ5yL",
  "key31": "5mynJpzPFXWVAcpWDV912Fb4d1sLGqgCsJ8337SKQnLdR8gxMARHPcUDTxGVx7aYTNCakV34N9FsWgU65xbMVcbJ",
  "key32": "MbSizPyF1AxTvZMXCAfm2m2td2arSu4ZznB4DPctvDF6kBA4WJQuGggRNRJtvQqFBRxEioX9BZGJkbsfwW3hdYX",
  "key33": "5PcoDuTJXWCH3pvgx7n5HfvKmSFK1yNQeu4M2SHZ9H55wjFGfTpVBoEzdGB6ZFRtGsjKSUwmSPkckqmqQMzGfsTS",
  "key34": "4t4PyC971qXn29Kt7VVT8fpnyfYmCysroVPZGyxDrzVuskdU4XxNVaGckSZ7AwojaLGrV9VKaGZTt2qa5cMKmQFV",
  "key35": "bEX7Qjtm1hNTDNghQhTZyK2Y6VaaFcok1LzsoAfreLUaNPyHUWBHyNiNNzbkmjX5hcivA32x1W99JKhk3TK1uDm",
  "key36": "4xWpqRRtLU9xuPDk2enLtwxzuGiCMCDqiQPTXANpYHvD7qxLpcEeXHrM3MDz6avncAHmTWEeY5CHaxgK9wRGhb76",
  "key37": "5fV6uABLdcYBL3VZ8cgBMqsQcUxAqtLTUzprkpQdaLM6DU28ypmo2wGnrAbuiK6iUkHDq2eJcFVgkrP4GcLoHRu9",
  "key38": "2PibYr7K19W4RqTVZ4NGDrqjjVvjMDbTkRoneENLxAUzHY8qB2CQqRCeURDza1mP71nMAGE5oZPJBVL59Sw9UTdY",
  "key39": "5MMtMfAmwUzj9pvVcjmtMtPLpiCvuRCEyEL2XpVh1syoYmMxodPCBsLa2R92NhDo9q1ivxCmsQ2GfhzudxPoq5t7",
  "key40": "VoFqujFW5oRUqMEKhK8Zk4K6vug3WrnNUqT4X5B9KnwFSRtRzGouJ7AVtVquRyago5FURkxzY19iYa5sZzVDx9t",
  "key41": "3qBeQ88nhiJUwn8QsBiMz8YAJEPCqbka4Be27VAhtPRt8N7NHvKpTU8YNygXKUsQefEDunJTkdzK9PPLAtWJtBcd",
  "key42": "4mcAt6Lpgk1WAyRuXgmVwiR77xidAFekRXfNT91HUTB1MEPjzThB8SsBeCdZvjkMW9qg8fETv8sg99YWZe6PrbpA",
  "key43": "4Qv6kNvW4YNhheypAKChJGprKCsArVdMFdh6WhLKcjgNXZ862sYozFqvk7aRh9j9xGkYuuqsDGsPSMK3kw9tGWNw"
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
