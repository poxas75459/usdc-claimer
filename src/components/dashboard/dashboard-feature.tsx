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
    "3XFZwWotGwVK4Hsz9zi6jsDVikotWGPGoqsvVeQtahWsM3XER93zoAStSfsK1F6go88TtoKaWkCvFXzJCh26WPdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oHjTAtnwc8cbKZdqv2XZZEubg3FPjkZhS8gQz8R5UZ2LAU16TfHrxLTzvbEjBHcC4jbt6dBguM3qo4wE69kPCXQ",
  "key1": "s5WXNSpEJeziWvRh6E2iX8N3zMKnDhhqsCCG3ijxNX6qBznBRcFfrEqiBtymFFsK5Pv83HAdffg77SdcbsbWcMf",
  "key2": "4FqYj1JeEk9X4MezLGJhhewwpjBUbPmX5LpsuZPWn3SW8KPkEj9pmi8daQTCeh3WyPyN7AceXwqdM1TxdPftwi5j",
  "key3": "3SeHnGhyM2A1iE1C5vEk9XoavRFWza7uMLdBXsxfA8MBLJDNiPxLCNdxUg2hqgTwjzuQfRKkMmG9WshLgttskW3i",
  "key4": "5NA81v3bKqFLnhGqNDy3teVh5DsQLtnK4YCj5H3XaHU81T83vJ73jSJPpTxRdJXiaLjWfzqBdZH8mHr8Ndv2boi4",
  "key5": "56CTvRPz4Ek7Mtvz6rwT3agUqXpv3AynnpTDHnSmBU1y5F4VTSKSydVUQKfZjPCanxsGcKfLjUFuz361YLS1Uj3h",
  "key6": "Akq2HbfvSBcmdnDw4VdFSUbYdXLRkcGVkvSUkmHnXzRUdzUbEWHENTDKNug6sDtkMLFPTNHHvPC7Zi4253KjUYp",
  "key7": "4jRGGpT9wN6iYkxQUQhfjSnQFQ7gR2ugdjr8qb6rR5VX2xosZ5Xk4gjjKKXS9YYoJaLLin6tateZ9pecSZkuyQ6i",
  "key8": "3AuY8Mbj73AX2nv37fhvvGzeoXafg6D3EhYRfJ279NPShfMEbbCx2ydr4wGckerfJEj1fi3Q5QEAqqKKYyFzy3xi",
  "key9": "4dBYZESFtbHgaab8twBDZudE2qnxr5aTMj7FVjPKiMBfELS9ACdB82ifPXC9GfdiRKziHc2FnpCnA8WKNorwSW1p",
  "key10": "3jgcVqDPxu1kVHwqH3BtnzKRagR1cAYESAagWXjcsU83irt7QfQjE7GE3K5nNJDKZT2a9c3wfEoqcUc1NrV9hUXc",
  "key11": "2GVUZmX3Ja2ZFzyHN9EVLwEhv1cpHNQ8eoi3PrfiqMdR47HQVydQtuAoj9eMGN79eZt1YATFTVE4PH2hYMZjax9R",
  "key12": "EoUmetzFpzBu8PggB6wb1F69yJnjn6mmJW3GeR6Dk64EdbpJZ25PHj4jwomWZgsXUfFdzcBvqhnNzJ7xdeVrXgE",
  "key13": "5kDA8p4ZkCVmmcTBsn3VhDmeVK1a84bfF88HamfSFjujh24Qgbmwh8ijf3HRSwBeZKf1mvf7aXNVAJGjQKycfDgU",
  "key14": "586Bv4HFVPnfyMHMeoVk5awQ3HeYaq15U9VfoJAQLPqNHDpDuogHAPhcGcdmoNoXiyBRZwKkbsXw2WTXpySddCG3",
  "key15": "2yZN4gWMzQGQPcaTNCEjcBhJtJaNanVgp3naFXPkrgvpKWc6mZr4bdVdDugwtZvfQWoERSXaVbMoGpLDsBpygRPV",
  "key16": "2sN2Lhq7Ac4AyW8ztenKCT4cjzhdmxehoRohWVgdPSjBFZFx1rM9up7C2UgLgGb9SM1UFNw5NcQb9BxcfWnMjWbh",
  "key17": "yuGFSfYqG6UBVUMrVmSsGhiXXVRAGfHScQgqP9b3wQJSrLc2fjVDHFuD8e1mUyWoc7vdKfNvaixttr5KG6ayBtJ",
  "key18": "3bA32A1YoBuhJeAkcWqXxpW61RB6hrqKrXQzYC7jFw6A9M2SGkxfwEysm5VtxJ3kbzwU7EAxJSKTjspGr7sphZCf",
  "key19": "624De2XNsV52JaaD56McfVMmbBeeutVby3NP86KWbUssyhYzdem1S1DkVVvhFb3xhBFc3N5gUFzvg8Gvc6nAu4EZ",
  "key20": "45QvxBPSTYH4DdhdVAR6q1Cv3dMrEoYtj5n55AFpJNWNpVHVmnNjcRHTqLAWMVBaQUijAw8hcmzr9ouqsYVZNBfs",
  "key21": "2nfGepkUVZvbRSv2vBC9UZuVVKtvD2VgvG7TN7N5BbKSeRGN3o3nuJVWnFPiesLxJh4XoorkfJVJAYHpvXcL4GeN",
  "key22": "2T4ta1ycrECXhVNsbtdXYy2jj3Aa3N5JrjfGjhBnrRGVvgzJ7VFbt5gSr6ioKbyz3CGRicnx1yxEFUKB4Seif221",
  "key23": "ovEaybUKzoVzzX6Qtc5B5hZUtwu3kvPrWb4XVyjFPMqCjbdPWXqYJP6oZ2PY4BAKn2xtdGUApKJ7qQz4tnsuzCx",
  "key24": "393FZtkiGyG4ccxfuKDrF23bm8LuCaiTdXs7QkcbLCXgwVanwYgJBp4wXMJJk14m6AkGHYsgUmACYAYjN4iXMUuH",
  "key25": "3rfuisAMVGRk9WRdYxYSFJT3Y8QntgtQiKP6UZrhuH92Hf6wpbbY2zKC3bnoQD6ThgV7zNoiKpkanLVbUXjnfSrz",
  "key26": "5o1HuQRLm81iYhYkJnFC67F7ib12KAJ3Ato7iDW5SUBDSxV85SSatrTeTjknQzp6uLSqndrRr5dBJswUDXaJLyjE",
  "key27": "5kpJZXCnLHiaSQCzDPB8eaJwPH83uXfxb6LQQ5XeNVxUgufyWU4XG6fraHdhGVFt3f8gjjrEW3QjAWPwR1uAhr45",
  "key28": "5afsuTeRquToxzExzvKeZ34kQFtrKnr5caiF46yda7yXHVsfwEMRju4DRfjPBehFoutimSf3E9JGCuRpHNKodPV6",
  "key29": "3DKiK5axLfCTDhg32QPQog2XKXy31h6Hn2z2MZpnWGMvLP7m2QZkgrreqHqAjVcTKZWpWnjNBM4z4xbsikeJTY8M",
  "key30": "4LQFrh5Xv7NV8Xo4V5XjqMzJs2CxBpLoxCJrcb4TPfoRRrXr9ApsgseWBJ5fnFvU1CGJ4Mn871g8zD2oVTHAotkN",
  "key31": "2GzkwVQFgofuJu3YSRRMDHTWhyHvsfAguR7QicnbVKhSVVsG4YNoFxh2Wr2FmSvtVYPyqPRs4GWVhvZJYGGMVUjR",
  "key32": "3GKhoyv3zmcU32RLbiu7N4buzS4chkj2GHSSNWub6GVBsE6YhQbhSgLGrtKLQCP2mv14FMSctvqob2EPxsXZRTm5",
  "key33": "31cVRNx1783RHfo3s14CGR1HjfNkaFtpSpXVsfvBbM13LjrG6LXBzJBYPaAwwHPwCP9LrKM99eoWvLfi4vbaQ9GA",
  "key34": "PmM6nRyhJhoMttESnDydoqGv3N3NRzNvBeHvi1BEbzj2ixq6Tpdgbx8Skt9w84YRuiUurt9b8t6L6nQw9VHJ1oV",
  "key35": "2z87yzb6uEsZAZy1FQmQDsVaLGdPhCaokRBM7xwJ9q5i5NoE13GxwjAbvYzNgecCHxw6skBWGNbH75cgwWMfVAoX",
  "key36": "5tWo5gW4eYufVZ8yK9JnXNNAMeAWrR3cRnSSoNUpmWc6v7u9s99GsVACx7fkKZCGEpkBEH7qkKoGxAiwhLkuQ922",
  "key37": "RJrsXa8yC1Y65XLRwRVWLXtkucb2kiAUUG2gwCDMDP2QZxB62eq6xyQxeD4HpXSu6XsEibFWSk9KhG6bsNh1jh7",
  "key38": "P6TTaRJRQQNBeG3eyBBvsgYasgj1cHmAw5tJaazViaWzjb1G9w9E7gcfrdHcoAw47VuJE7Veqw7TPn6jDH6TpYC",
  "key39": "36qhwFGtRgiCM4YQTryM4uWyRU6ed5eY6dELRscdBLzpA5pQ1av3hPEZzfanPXjor9TaYxuMCrX4uEbKnXDyYU5o",
  "key40": "3g6EQgG1QPRdDHuBqyVy8dF9F6ESPhfsmepewEuQRn8Ye5TbmoyGdcgKRVTQidwdmuGPMuqYtjRtnAsNFLr8L8Sm",
  "key41": "r9xEHjyivXWBMW8KHVTTqRSJDKvHTyCjH1strpwBJHmdvSuvqWTtS6SVdtj3oLyTL5h8Zf1Pc6MDq8GU34ViyZ5",
  "key42": "2dBZjfuTWpGktSAR5iQquTPNknznP1rpqyCtE6LHmWd5zHJU7cUBZFnznHYZ1SGusC1tVDq4KSq58AThNdoWXese",
  "key43": "4ZAiVT77uzt3GGY3F2eQUxVXW4Puy6PURfotw1tKzetrRcRET6G3FMs2RFT2vuFPdJiGYrQjXK5ngL4YVxPdaUG6",
  "key44": "4qFdA1xCjnsuGziwgf2dJ4rAwoiK7waEMNon4gRXSSdystKWuA5gDRHiCy7Kq3WG5XteJcXhfT5X9xFDJmB4y3ss",
  "key45": "x2tWoKXrgVUkELyWphdNhYjnXtPFVCzxy771YRbNTQGgigi8VYb6YQD53Z5vHrCt2EiPxQER7gjGavBb7pvTvBa",
  "key46": "5SqdqpLwUXQHAzjqkFwKSjp7yv1brcbDjFGqxeTQdvVJbRyht8eWjACY1Fhw7NmbtGw66RGU6Ggw9BdnB2oBgoFM",
  "key47": "4MAPUXNymzBeJCUCnmZFmRL5zJFCZiuN3DC1hHPEFXkncxkPJHsEP9rEy2qcB8UvtXW3WPjYqkaYSbP2ky37YN2j",
  "key48": "3rXjaHXu67tBMXmCtUbypfx66dBUHwsmmKtPt6V7JtSMFNZbyyYgsqkV3AMJBZkdqxs5atjgV7D5NeDZDQVj686A"
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
