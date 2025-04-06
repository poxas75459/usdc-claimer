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
    "4td5z7GWVyncwU3sk82bdUVmPVN3cER1Dfw2w2du6fZGWy5cHj1cagDZ2c6nFuriY6MAYHrwJynfvWao1SihEBXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tart7ncKDnQTFqU6XLvLHYDcBKZZyJsuwSEqh7SiQcDRZTsfkNrab2RVLJCDUxoLVaoHaJKycE5BEF3SagMxEyY",
  "key1": "3XXk2XHG6d61pXPCt7wcKuTak1NWPupY8jAKqjC4AyTVG3j3BxMLrRZcxTYGM8Mu5Z4cnScHDPLDNs77YSkYS7L5",
  "key2": "vPp29vZjGHkS21moU6fwosDKSBcwzTM6Mb7eanHhwCNJSfLKW13WVVRcojqhjW2F3z5rjyNkQQYQ2Drkfuhmzzh",
  "key3": "2woYPbZrFdMR69ntzZbA67v2urYG5SjpRbJnuoqd3YnzMXX43M2oGcNZV7GdGN119rG8VFAfz38Jkbhykb886DwX",
  "key4": "3hN35iVhjcciotovF5Murcbe6SVjVBEZzGw3hfNTpy6B8Q3dPKPEVmjraEGqQJhik2t3GVtnN4esZSm9E9GrzEru",
  "key5": "2HcP22E4RBgV4Und7T5m5431amfWPChMkGamv6wqyMEcTMH4T3eFGJcmwhPDpChZFoKvrho3CS7JT7WxHpU8ikTB",
  "key6": "5EePs4cUU4H1xeBZS3J6xsKM6MxvmnFjaWwqhURArCebzdqiSyuikSHDf8rvjRXmtWfgLMGDV9Nw6AtSKcBUNk7x",
  "key7": "2Eh3mpXVrRvHJFn4sVMhc1C5ekG8Ydvk3jX8nf7TdcMCNv5mLmNMeKfhRfn91rN8N6WcHYNdg2pveZMQvfzbwojG",
  "key8": "2AxHYkDrM8Y6aXz1sGtYJfNspWGm2DwagpZsULrcSne74wvgZuUmRhDkm1GKxCnZGtBkJS1zQ2DhV27prFNTysP5",
  "key9": "VgyeHrX8juMdeyeNoefxeeyWNksXnaobygjXPtFVCUkngspn75xUTkEQ6qJsZHQTvmFRXxPHFuytZ41bEtFtmUK",
  "key10": "4s5QmY1FQ2KVJfJUFvrHjAWmXKehoHSbBu6JsWNdP6ctQGPjJU59dNSbwSDky3r7waZ15rYnqmBUCrRVB5AqnD1M",
  "key11": "54gw5ucVEfS8KXLk8HgY61H9mPrLMkQugM7zZGYjkT6V6Ch3PhD8U5VfWR7YZycBtetFj6We5putdcXKBx9N7atH",
  "key12": "2GgK9HsnmvkfHjWYdNB9nF7P8YCyiwWvNobY1iQKEHntbYeyFtEfybgGRmPwD2GV4tEhDCbGo9wmSevb9gWX4Utf",
  "key13": "34k2sBYVeCao6se5ugXaGJP6BJnQLEhnDytUkV2J3EKU3B9s5yjfjG3NK4FSU2VsJmxY1DCQiDpWj5ai2ck256gy",
  "key14": "3GfHU5TLSzrh5dtdJsx5bCZV23HgLBxkDE5Dvtju8CmuUWT47uEC87wWY8ARynR2nwgFABRsPWfRBAMZn2J67YAG",
  "key15": "3Ri8GJDtMHiKCHeSL3B7ZbmCqk4qc1sCJJd8Lxz5sVY2dZ4Pv9CMFfWytNh79Yt5nrTAhYnYRpQKvEY93a5Qo1Tb",
  "key16": "3pnDWphCK1H87yArHPWswAnAbrxuyFCcCah285SoSpErkapZt7pQqEoQqotyMuybrjQA7bfCnYpqcpMdfejEukk1",
  "key17": "5XfWY5sGR5Yr2QepDVSHKsXAZbjwqA1AaPzdpHLShKf8SHms4PGULu9TeSk8GrrXsZ6abPw2ZnDiHzaczkHGQaJT",
  "key18": "668RyH2VW9gQXQSUvyT5Xa7ArL4t8PtxVqywVR4mSuKkfbPbE2pseGyaCwptoqbFzY6tLpPgVQN2PC3sqGhGQK9W",
  "key19": "5cENs1vRe6ubVb1Bo5kWzb5ADGH3rdHc2Zigw69jgCW42qdVY4qxm2GgXNxToV1KhbViWuZbtKV2HGqKJnY9kzmW",
  "key20": "48NGb1pnFg5wsuaXynP2S9E5WMAsj4HG8jDmLjoPmRYisTf9jaiN6LokN2NtztygqWAL5GBxxtE6tUgaPzr49FKZ",
  "key21": "3p9vDkBSbw7MF7XRibzN3cKzkDFTAZmLLWZQ2PZ1xWtJLFSEtgp5qLrsey3rtP5gPLh115Bht3kXmzAQg1L8cRkk",
  "key22": "4jVDV6tyDCQc9uiE2B6UoXP3BMT3EYiC5pf375uxj2XZEwiSjtcsq8wHdTodvb5t83xDRx9uRph1qVub54kbGRhs",
  "key23": "2R3GXb8UeizAGarApfGyYfJ2mbqeDKm3VXeo8ZLNrKgydrCXDZVu6Hv8rXQj435sPcFmgVSTkGPf88qZP58zWU4X",
  "key24": "3UNPUcUZq387kbSyRgseE3AdHnbwQZ8byFc7MgJpWHNkVzDsDbaUFJTVPkNCwoezMGJCCibrebS1YCVn95pyhMbo",
  "key25": "3QNmqfaT28gj9z4mBPPEsmbu3zymjkbyCwcT1Z3dcNjf97crywtyaYc5WdWiBtNjo2G2ixThifXfPpvZihfkAsaq",
  "key26": "3yZkW4dBpUv7LVRi6gnnDXXanevwXx15MccGhiXVmpoEztdUWtbo7qWN5nzH4m1TwXJrdvpC1NB52CUznCafvkV4",
  "key27": "4XaWymgHGuLqomNZSjHiZNL6c7K1KVTEPBtsGRjWWvwARmb8Aie62HaaGQhbjhKJrGVydQ2FykYVZ9pYuxqc7gsF",
  "key28": "2eMdZX1Sj5PzBAsuhjwZ7GJtJBrV2zLLCgm33fZ9StCxGr9XJgf1DzsfYkhr2Hew6pnYfFY3KrwnowzVVhcinMX5",
  "key29": "58DT5iTV62DcCgxFw9WTu6YWcSwmJ4SvfcnMjjLWCf2AYqP4zffxZAhxYcGhRpDiEj4PgQAeXG9zdKvqw3T2PBbV",
  "key30": "39D8GbfS1r8AgC7DmBSJ9cBmqT4FUC5ZnTCw97aqDhGF243uGQM6h5NFBG23eGLjQRpMJ1FcQCGB8GM13epfDB7T",
  "key31": "4MrLPcdtriJbAvwtGU2gY2u4YZk3PjgycuwVzUCDRoDeSxGfRSngKgHCsA3mWJeM1avGgPkUwoDXzfLMsvBEj4SE",
  "key32": "3obkzau7D2XH7rFF5fQ9jYY31caZaZnfQ6zo4HNxxwLNa1VLTL4sPYvwa51gkQfmE2S92qZACq6Laji7V1R2ahiJ",
  "key33": "4JbmQ6Syrf3EygQ9sHbXdHDEaRXR4sbNi5XMCL6N7397joui85Gj7w8VrqaBr5oeGePHJ6NTUrcsMxVq8dSBYMHX",
  "key34": "2Fb2Kban9HsHVKKx97qXVBDokRABHmd16s8VkJ7i17RQa7xypQCcvuSiiMA5v8Sg8TJyf4s595XiWKd6mEmpH1Lz",
  "key35": "4Fsd9jcygyA2zhjX7t2KqLYL8nLT8E6UFitxjDaxtrEA5yiyYJLpX3xWfo6jR45S1piB6fEDUPbVCByqSn3SrkW",
  "key36": "3DF6C24WnFv1nALj7BfWsy9WZUyXtrRQKnLoodJjR7jotpJzfrtiTWfuqi4fwJKBDbuvCLRNqQXVcZPe8tjpdjTU",
  "key37": "vXUxTXgQDtqapb7wUybXoJpEJfdiuYZBrHbrPmUrsZ991o7v2jBbN2p1Br5NsJ9cgnkZKtbz4z1MyaDni5SHgiC",
  "key38": "2gFwquSEXj62wGFUXEj314aXQzmJc3LpeSTmTxYSSkLVyXjSKnTVXukEXMZzkoGJ7Vin3hFDFU1jZGpeELj13VhN",
  "key39": "9UERQQhXnttYhc9tVoMftym8Vgix5XnYPKaJwRsYeEf33KZwRvQGuV5Wf5Ze96sCThHudqtNkHS88WWYmMqUGue",
  "key40": "3FwUoGcN25VEGx3kWk4YgoCVzrPuLAv2MsyoctFJJBrjir3UVLrqkpPdkjuqnW4CaYG6bJDJ8nuRJNWgxrmaCiCj",
  "key41": "5XfcpfVatRVb9EqHBmL1PrT1abNJimCamSXZZCavPFkZcwFLyKQUbd81oyRKtnhxCszj1eEGBQRr11ix4wN2EXWF",
  "key42": "56zCTg6x8yfUT1to4PYFoUs3bonduRWjTRuM4KxEGKRb2jhW6jiVec2p8SuhBNhMeQiCWn1AspXQLbRKy9V3CJsL",
  "key43": "2QSMVHDga5yk8UvCS39ZgQU2DFPSE51vcUZtnrEKPApb9szMbbzwBARaMj1wdyeGCPrF3jkZBnUdfPRxM29wc9s7",
  "key44": "e6ckFJHsjMPnTzp7J8g5F9cRLNVnC4dZEJsqdEXUuwc56zMinrbiz25UWXvXzhTdxNhdYsbXLcL1PkD2JPUmp1n",
  "key45": "2SiPj3A9S4QAbG1FLSxJ6GYkb8gFm7RZixeo5JD5uFeFp9zMi5gWJ9Vz3q7WbKmo81zU4myS5DJtB6S78LTZzRZm",
  "key46": "C2GZimkarbtd9io9Qj55iaNjrYDajgGwh89of6djUnp5qAbKyNCiYpK8b5F3wvQ4SCQNWgQ7RPD3WeL7Hyy9qvv",
  "key47": "5Vj63aeDxDoQtkXZsfjiwZ7xdjjm6FmATEkJrEXZEs8UDg3AsCgMY2yEhyHhCzS5SiuQdLtMmMtth8xNq8Ymt3ho",
  "key48": "4BzSAnG9RwcnpFeBoVcVgM8puowTxAZggK2zt7GWYjm2i7LR9k3mzrQpzUt9K64gPUfzS3EiUuutGAGnxqS24ZU5",
  "key49": "5hckWX9N2iQUALakbJHuk5g3Cjr4CLaavMvpsfeGznfcXZta6xFxWSam3b6F7AMHUQiG3BgD6hnmC9JaNeXuzXfN"
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
