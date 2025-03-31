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
    "4oLmKmVKXoFqHyZF1veFTvf46PNwBNquWrjrBcxQNSHzAyGA2JsETfzYo1vLkcmNjJMAJfeHQfpNFxyMvBLYdToU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "385pd26uCKaHh5cb2bNGojkXyveRqZUqzT7nFMwfu2SS11jtbF1QMHKGVj8jA4duGfZmVLjznCEqAuGyGrgUSPpi",
  "key1": "4TBYiMUeNwq8919gpyfa61iTYbBRpDyG7j8RGKmdcgQAk83ccTriB7HSgroX2bPMupJ6qtyqB53SdNNsPvDzCnk8",
  "key2": "2AYPUBPCWin7g34MJdsERnErP2Ve3tFWf5LzavXKJsoG9DXgyHN2ns3i6TxdK3bvM9dCQbfUzevuhf4zFV61tVBb",
  "key3": "4STnwB7whcWtVgCYHHGnFbSd2aJQSYEdMurxYbZVF8mHzSvoSxFmmi78kwtN8Z5cQFVZqJFW3rBfnHryG4UXptcN",
  "key4": "31R9UdZhCKPrkaME6CCcay6TzxWGmzxbvQ5WGTdkdf6vKG6RFtfL3WLQwHjErNcorS7dPkLQNUT9mgozD1NAgrmr",
  "key5": "5xSTBjYpGxysJ2XF6DCvRTP8YiXdmmUqmohuGnCC3MkSekfm99Qe8xgVduFkMbzxS2ooeKDtiFxZoNvASYtU79Kk",
  "key6": "5AXKcfcu2CExay66mn7AkxrhfJpQyCAxAf56wBZSWN6h1L5SaFcUexq2B5nebfqDZ4JSiLVrb3Xp2uG37CGriZWr",
  "key7": "63NGiXX41WcyaAnBCDeHBz866XYeyhZ9gt1LWJbGBURwP5i3jdMGgSccQ38UffsinJxEC28qCaM92EhMev7ctq8g",
  "key8": "3J7JXq78cPcTcDYs5fuqHRqE5NYJMvM8E4EK8nDfXpcCivhi96CUjzQso9hLhyiwjGCk1yMZnuiMG54r4nR8RhH8",
  "key9": "4NAkyAXsjvRp6KdckQSx44C5jwuJS7y8hEYhvWJJoyMqkpsD17hg1ysdZZQv9TCF3W8Xr5jDikJQMke7uRXi7td8",
  "key10": "5FPRrdeyJvFWMm15opCF4H89n2yVn33tTo3haAiHB5WEGjMuJPf5DBJxro3xTSWzoNCQCXqMomRJfFed1eeBZP2g",
  "key11": "3oYRpSNGmLe7U8DEcLDoc3rfz8ftvJLk9KgEoMG7jdhWw5S6agk1dTov191VkKr7Enbukb8M364o2zzRGEYVSyzA",
  "key12": "ELZTib6Rzfnyw3xJE7bdu5Ey3fmmzZyhaBjqSoGvGkeMDiBTfPDvTMPyQ4vssWDbfuPyXVg9YTaNK1TMz2vLV1f",
  "key13": "4yvMqFGRLF73nRQWS9XJaWcPkW6eY69vEKvZnsrfryA4XSTgkAZqRNagjgD65NQTPjP2BYaDzVExrYM4TY4J26Ev",
  "key14": "5s3BYUxEZHZdcjF3R4KC4iCvj7944w8JGYenfPfXmjoQmWqdq5a3HM9LBoHx7TcDUyXeg36SdNL97FoK8527Qs46",
  "key15": "3WtNGSabpbG6CFEzmbZsqepZH4RFSiFWdUE2LS7TzxnYr1xwzs59WFu7HYejM2gSFxu496LXneNDHMV89KD6CzgQ",
  "key16": "5DPUipN9suQonoonb4GNUuyUGKGnn4j9CnU6GwPPQJF45qzyQqWf8Ko3qA71LXFivFNVSDTgdUvwPEBXHBT1sgef",
  "key17": "tLCU88jdk6K27W9zukr8t2QS6QDpKxpDmv1ycepGfaE3Ybb2JW2erPL6UfqWPFShLCJWCDSZT2oSRvQEENeJ3Le",
  "key18": "3ff8BKd3pcGHQRoSS8hajNZZ5iBa9Qyb39T9xzQ5qG26dYdUDK4XtKJek8hgzQ1LjCZU3wcRRsUFQ3gG6TWK219y",
  "key19": "keNN7CmrtKMZXnMbTCcXT9sdF2yX6QLhdAZt3XAprrD6qV9oTTyavNJNcY33zbf5TxzHWLWEhTwsvEnpcG34Qks",
  "key20": "5ZrXpDJafs4tX84X3mR3YF1Ms6rMQ8mKtpW3g2FVqiuH8sR1j5P14yCYFCz3ZyKsUfxc1mo1Cb6Kk4NnRWLpNnSK",
  "key21": "4GobFtmNAKjwumNkGB6dnTa2ch1hY699xbarFdcEA7jqbB2sDykbbZaYLy5Uf3Q1SWodN3UMNi9NJZvt4xm7BPpC",
  "key22": "4nFAx2shLNiNQRyHYwUNhaBvJwvdA1ZDDvobnQbsK9kDeE7pgoL3atAvisf2uPfM6MgWXFtn9AECisepiycA5oeW",
  "key23": "2XYGAkvEs1xExikSMJFWhfgcyd3RW3mSTYDEpXirWv1ncjVFpxoMp8wPvbW4PZTH2HASyXYok3ttxCZghn4PSVsK",
  "key24": "2aksovU5eaVBqhiuUgUb1XNgKZqQX7R3RbQVS3wXJyCggmXinewgJvDWwxHAcKeWACyTj7o8fHia7FJ5fNq7Lj1d",
  "key25": "3nKSY1WrPTr19BpN78KEecVZbLwJgAMPn22m5L2jm3GLTyfqL4UFng48P1DyqvbMfXy3MDTj5sR7posoNZ7ZPb5b",
  "key26": "zdagCYgE37T9Nuz3ACBN1sSx3CapAD51F7xe4MsQv1HEx2dMKk3R38uELYbPkYKkJLD1v3RCd3WBgDSFRSbUDJw",
  "key27": "wPsMEWFr8KzLkBXhnKZVkTpTHCDByHnsJVpHyVupQBRkMWWdTmMFVbtp2N7baohSjh1m3PqLPhCJkTpbZd69GLb",
  "key28": "56uJTVWCtuRZXh1KS5jfdqpt26DhzgPqvNMq9uatmJm2MWrV6mZJNoTmkQ5duJjia8DhbmCKhtmp5TcKCNjqgfuy",
  "key29": "5VsVDv6gCN6zuW1168ycYCUMoAiQSLCLokc7cbau8kywTqNPJ6aFhmeMa6XH21yEUxfWtxpwis9KwbaNqSeY6JPj",
  "key30": "3YKcNMkcudVXJQjZaEVAt3AjCLzk1hBCJCUBLWt1LeDYe3GYfV1jua7HprJNFxMo4QDjuBkFxzsjVWsTfmoigXfC",
  "key31": "5TfNSM8U84n6AxfWxyvxgoZtskCM5Xc5ygEhHKcvG8Nodpe1XvoBjCQdx8iEsvFTFhs2Gwn6AuhRPS4jti9uSjBp",
  "key32": "5Y5SReGxG32sP5dqgx3XPvGbBMqWAzAN1nckGwxfzJEAtnWqc59CKmWh3AEtv6E6ixBPrV32DYAfF6A6YSQDpTsy",
  "key33": "v2Kw8vcTZCuKN4kU5kmJ6XEQ61tHRC7Ye2FWDKgDfsFYdmEEXqadPh5PQHxFN19yLjvLH3oVF9Q7sNX7McZAubG",
  "key34": "2gUREPYBgnxsgHXnufQvEpvBQnYKiqW4wyr5JPCeEosf25nBQTT435khZTVNuBWUyUeK3ATTZCE5sEuovSLpRgY7",
  "key35": "62uFuEDssaMs9idoz2wk4435Yx6GUeSDXHp5P9eP6p3ghpWwfJ7vuoM3KhTDmuaytxB7cuujJPHjCG7QvhZpfKfe",
  "key36": "5L2QKBXdB7ZTiMrRV6VuVCS12tXGCxaXHcM6LyETRK5w3ik6EfijytM8edA9PgNAT7CAe3QBh6EgEf7G2YvXUmac",
  "key37": "xKiCzVU8qk46sAmezNbRYUvnTtMzBQVFo66pL1sqj9aUjzBDffiDSgdk8yMyF3W9et4E9DtLgemyivERbqE39yz",
  "key38": "jbVcqXHD6Njoix3GEiCwHU94wqvB7MV4coaFv6Pthy5cu6THwh7NNQCwteTYwoT7BaKY6WMy3DzUyD2AtEnqYrJ",
  "key39": "eV8XR1EWHQjRTGrX59cktAtXJyqYyg5hGXGLFow8Mo4DAxwN8f4eM39RVwrWwqLQfGmwAUVqPXnQujx4mPCtxHi",
  "key40": "DFhwjyjUBQ4rH5hYzemX73PcHECKQ14Hqq1hA8CghfUH9eP7K8vYatuFtTT7HXVj5aCggyuqRnu9hMYkTsun8NQ",
  "key41": "3upup57bHqGiGKyC6MoLM7HCu4enNVq5QMYnvWAdimL3Aj8vkKEx4KE7RJ9BqV4MsiMW3E2jkXri61fskL85gy5M",
  "key42": "5ePTypqa7PFAzoqm7RWEpSYhGmzjZ85PkLZfvhBV9bmKuydT5RbFT4QZXL4aLVYJLBL5iaZ6DG1AK1hJNzh8xPtW",
  "key43": "3pb7tJFCUB6UUxfwrokdosnL2V2bCwVJeBZ4WbtCVMBMTE7k71TWzxLNGdeeWW3ApN4ZuakMfxgwhKRiQj6py38k",
  "key44": "3e69pg4GLddTfx5eawJgGYMvXPa1oeFTBTBqApVZKaHFYHo2kJY64tbthGBEvNMLzy8vUbPXZBvXCp9258rQcr2W"
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
