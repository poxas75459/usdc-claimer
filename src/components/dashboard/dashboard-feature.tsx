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
    "3jGjD3i6d5mM5652H8ePVAj5BLWu4tWifSpa1jiqMSw6d7L7xH2gSVPPdEPoziEpYLaTKgpN3b9pHRPAUhsBCZb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kHRL8v4nFHavaLVDMfAtFbHKMM1uKFYGEfrR9voVmJyyeBj463DfqbXume5YvmnrHMTbTYkodQYuSjXvmnGYXrS",
  "key1": "62eMbTuksi8uFc7ZsfTGmFA8mM12dJC7Q9Zj9THUy5EePtCw2KZd42ap5S3dUNJwhhDVMfZu1L4jKdrqda7PEJL9",
  "key2": "4dowEys1wVy5ctFqn9fQQ5VwyMRkGVEynvvdkDvTnVS6UuJNzGJd6AyMpUgTRZdsdkC555f9znWvMEU5DESdbXma",
  "key3": "2DTe9meFTYQcHRMvpq5tMRo97GkZCUmmtPWYqj5y1ZXJYUKpHc8FxktnQa4prLtQMT82MFfm6gCGsnWeTRBaqep",
  "key4": "4cXGzEkexLtQdv96CW72c1WuRQno6nSvLGCwuRV4KpiEFa1dz5PBxkeCW5vVAgU19fydnwfzbjctrGDZhi8NHGsJ",
  "key5": "3oB85uZEsMQPS7ZDnBUiKpF4Qr8sxm93VQmj6P9oFHzU7do2XiXa2TkFHViFJMCZUgSxRJVjACeKMETEXSsbt596",
  "key6": "4NTXvmgCzJwJR6mT9JR6FnHHcQjJs3gik7t2gmTENBsuib9jYPFgQTFvcJDFRTrisxJ8iq31mV57o25KaTpKx6At",
  "key7": "3cz73ai8jeDz3DogmVKKcHTf9nBf8nvJt6JokbMFAGCCu1ptrrKNajFoAEei168t8725PjcMUSZxcqhqvJ777kRz",
  "key8": "5b1S6ZvA4ykZuidycR4bFda9jeqYqEWwzNWTuQLXQJGXFYz3ALdGuLxVxjebjaMyC13eaNnmp9mJQs6ZymxZSZNe",
  "key9": "2SyJYc2xMuTNFnYVCTNqtxzxhRHXdtXKpz4QgdhfmaDiVPaaUsCsBeNUbd9hggkMi48XDaFx8LxCz8PDNKoscgWd",
  "key10": "4oLoK8QhgAPHfMvrhE2FJhBfutmXbQ1SohBNpwMntP8gkmFsUqcxfBnCc7widaXGvap32xoMR7zz9gTNSbwWAuHn",
  "key11": "5brkWPuUXY9eHpw1qGDAjvHBAay8xeo9cZR5Y95a2y5StjAjpVQdPDsf8FEx9KsYmg4Km47Js9NiyLPAVcTrahcC",
  "key12": "46HhuPQ6jgdTC9BnNfppHc5jyEMLvpFvaPmP5vh1JRbVmvXubL7n1jUYKU4hSN8TML7rKP9AiT7c825PmHLCgXdd",
  "key13": "56epSNQhzPKwxS746KftegPgE2hkdBFGjSyUDcBiMDG6mAxj9DxX2U4AxiCVyzDsfgFKwr9qy6cY7F9uQhDAf2ZX",
  "key14": "MKZBubvUikQY2NevF385XA4qVs9gFds7N5ZJXaf1VxGViU81ffwTb7fqSJziMcgapf6qc7kpuHGXhUtCp4Hrbre",
  "key15": "4GsQM5gsYnrCEXGUT26Vrf8442iHTQgHNDJy3PyR3T4jUQpWpJqEqSGGoy8m66tBuvZ8bL7bpV2aFbCFGHgdRMS",
  "key16": "9wwDnaSSWBZ4yK2s8mXeGSVyTh97vqBc9BiThQW2Wsq2wtzX9mPtJSfuGT83kWuv9ujY3BtchFMG8CcG9MBA5BF",
  "key17": "5paP3giyNxh3hXhq4w8MFLRRBcyvakAHPiRH8u8kRRCpAhiNcvqdhRg8DoXb3EpHHiCDv6H4rGKEBtxZzVB8L9z6",
  "key18": "4mbfZUFV9xhtXjvaurYNsgq1aVpC6DPNEbdMJ9WrSKMzK1G69cPrtKTFxqzMuqFMHhvW8x6hTJv79YsDdFK2c3JM",
  "key19": "3sHju5UsCxyt28T4b8EzGY5Hj7jsd6Rt7ymRbyNS539wQeBGinZVpPrXawqCorja9qWuseTckaFkdGL8LCRqGLLJ",
  "key20": "3PWysjMMgnAJP3ysT7bpog61ctQ7hDuf2jR1aJA7adS31L7JYRuorhcHvAt28jC5tNBLJUuUFVkHj8zNS7n2dvv5",
  "key21": "2zCz3wTZUcaWrGLvzDiC4zHpALFMqNgTjd2rfWnaoLPGwbQGGWATQ6xUnRpJur2bLEgWDGSkVVTrgbW5UeHmxGBn",
  "key22": "431ULXgRTK6fPQpHc8URheGLwq7pf17rBrELZoy5da9vy1JWCfkSFkpwx9wgS8JDxWfj3hNoMPDqpBWSY11ZNCLX",
  "key23": "5EaetRaGM6g7MWEze98v5viWQi1onCKHpA1wADy5WtaPAEQ8aSBDMzxvtdf83MBdiXZU5mqRW37bZu7gtfiDqSka",
  "key24": "4XNVR5wE7fNtA3Pf7uQLS3BTXFtsdJjoWGzY6YMbWDeBzuo6p8SbkbpWe3dX6rQrwuMLxM8HCjReKAypekSbRNPN",
  "key25": "5wRVHkZGJmmUUZtJa5LPMnfkpAw5AZUP8kG879zrAcdCWYEneLkeDipXYbJPSv49VxeWYpyjMJhekfdbhN2s9tps",
  "key26": "3aDLJMnSuA2hdajAx3qMUhgdyaRut78hufESyQrWtTDQ8ZkD2cHVnJ2Bs9eoSNLD7QACyifuDRSG7Z83ccMYhqhR",
  "key27": "6315UG7nFZRoixAPsLDYTRUJsFLiubnh1s3RSgCCws9GpByKr6Jjc1icTBCXBQTQH6qwJujWpCwZeRBwUS2BuX67",
  "key28": "V8PBmzoiAtCe3L4omqPvXuosFwcrYLanLSSVPFbN1PgtxB1Tziequ4oQD5SpeK24f2YZf2FE2Se8yAkpucy1awQ",
  "key29": "4oJSHGpCbdf4Z5h2ihxp6Z7f7sxaYVCEzEAGSheYDmtwQ24pHb6ZgS14ovPo1p6VsixAMFVLxGWAhisvyY32PgEH",
  "key30": "3JqSMopv6Nsfbc2VhNt6nhnvwHWujCbjhjqa1YLWtxrWaYTup5rBQZqWEpSn6TYkGGDs29cPuBZsNQknSSJZ4b1w",
  "key31": "4Vbwf2T8znD65c73jZcX6GENaLJ55FfyM7o14SbvAS5FMpqhkgzBbZUv18XX3EXQddnd7ftXCdD1Cj2E7aFjvCN9",
  "key32": "UPrwukPhJXiWiUjCMtt5XrGTUxMK1Ttjdbq5f8mvGKwEMfrWiNZ8eCtQTZWYj8zzNGWFY3Gg8H5JxtgaArDYjW9",
  "key33": "oTe5ZaUtmT2zqWxjVKiphyvpSznuz8Sfh2vsjUTPYSC2eUiLpwPVcRcRmxMVJmtMy78fy9wvrU9HEQHMaMo3aYJ",
  "key34": "31vNRBYT1axNCoDv46Tkjmp9aSNd3Zpqguu1DwBXfUGenAvqhAfwKR12yaGiQ8UZnAjPCkUx46CJ8vRCz1ktB2Bw",
  "key35": "42JojraF7Jv5ihjn3bpSTR7n8pXAwHVhJ5kbCCEsj9zKE2gzgX7erdCaHbfRijENK4MNxeHDjfsHWhjtEapQrLWu",
  "key36": "2eCsya5wP36BqvGN2HT1hVq2e1KhZeP827RGxjESAJ2PGk6imfz6b6Zc5CBA2ePmTEQ4nG7DwZx4DbTFMbFhyVro",
  "key37": "bC7Bwdquct6usZ9JBpuyAHbBdyDtyBikHwm1DFV9BVKejM4ceEHFCvv8HMnqTtCpV3VQtA1JdLtEFXMpNsmW6sF",
  "key38": "3Yf5kVGn2QtJoFg7uhBBoRUYAPdg6132chX2CDES43TEBfKfxVMj49A9LXL6gMkBsPzfoNiSJnQ31dDhQJpZZPt9",
  "key39": "SwUze1VKDAyDvCb8LxZ1BBfBCaPm9PgXSKgS6rrrSzWHoiKUSHr9fQNjtRmroxhEfquLSEGVVacaqpQkCo3rkvZ",
  "key40": "5aW3GzyfygL7EdF39nMzNFBnFAQrfKYwGbyKdMubhUN2enn613qBkgG9ksXmQBzMt6ZR8cteUSscSqevNzLPqUpk",
  "key41": "28Z4kDxhV6BLUuLLuhDHKCcqLsahgDEWm1QDwzBmm4SQeXMtRsaGQvpTciZnG3ZcUXdtwWRqxkYDxPcsdAjqtVb3",
  "key42": "5y4hWmaAGGgHbsThfyhwh92gkY6PbNhbkhH7HEBemDeoETnp4zwbjeicDupEWonQJzyrYbDXwB7biHNia4zUgNXs"
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
