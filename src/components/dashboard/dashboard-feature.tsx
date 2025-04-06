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
    "qPgKkVTdzM26QsuHKgwZ9Zbq5hVfksxKftQooPYEF1hrZoCrooXcLiSCWhv1vXyaqqsbqHPiRjaMvKpFzS9bk4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4okT2wig1pXRvSig9RrUvn4bqfeouRCbcgMmzRKJYm9ytL6nC6v3cJ7ZyRoxfxE68L1SPCJvJWJVwQCgtdZzoJaT",
  "key1": "5vZzxPNqQbEUT8GmduHntx8iNaQJJ7wQWdJxkbVx73mm6HSY15P16ZYCBDRQAAwzyyUT8Q5FpdbuQBzNihktRg5y",
  "key2": "X9DCzzNCk3E9DD1kzSvDdjApMU77c9SXd8NT5TdJmSvDFVD6vYLzh9KK46FfGDqVk85Y2KPNx59T52vnxTG4qcf",
  "key3": "nxDpVEouUqPntvpwcjqLnFo9WTV2S5nf1GDuCdNe5miJyDxZ2KqHQWECATaUjE3RJxVgd6aR2Vbp29BGZpSAWre",
  "key4": "3DTFgii6jXXUC27askCbjhUrgeouTPqXNPNtBMpnXPhD9SgRKZtDvedQWrBX13yqk7UYQ1MCbNxxDSqYnh7uP348",
  "key5": "BRmgzw3GB2dPFGKPRqSLbPZbCtkmTABCzFMcnq8MLFVF8Y9xT7niFRtZvxHsVcxCwdeyTJ4KVcxc7sRsJ8w1w9i",
  "key6": "mV8bgzTb5dKwEvsAAf7yXz1hVyXAkXNm5LmaAEdPxGST5hV6MrNB7qPRbYzniQjKmL7TxPxnBeHSHq1R4yEjFtU",
  "key7": "4QRqPH6kaLmkhc6G8gfsXpR628m4cuQBve9savogKpXV3qkS9NWQcm4qLHDDFUcxEV4k6SgVYbfeySTCoXW2GZ42",
  "key8": "4xyZBKsqrjEsbWYt6wYwuQL7y1uQR6sdHETVMLX71BqPLw2o7CuC8Qhx4L2fbrCFDx8WbJT5Ux6DuZjDReGtpzNG",
  "key9": "5HMpwZD9RdMwy8QbeMGeeTCTejS2tjXwMLN844CP5kCd3qW3VQrXRjogzXrReM9VqnHoKGjbfB6BBSFvZnz3tZzy",
  "key10": "3DZUzQ18cfHxjKwQgX1PFg6CdhpoVPoeXae5XZFfCWjvEYsUxKY9YinkSAamyuSqoaTsMtp8keqnZJNnqFGp5dau",
  "key11": "JBF1ou6msSUw3ZAHEeL7ViYBRKLJ66EG6TdQ2eeZjV99ZRZqswhNDA1PzUap1d9nK1dnxWNdkvwVoY1fVD1dUyv",
  "key12": "PwYkYzcSka69WH5iw7wCDNrF4WzLQuhpG9bqRUCnbxoEd6WCNSGtW6hd4tGzwp6Faij39SZ3nd7prSNP9Rt6Sdh",
  "key13": "5aTDvN6ZLmdYrmyPp2GJZPeDvLPtZTWQgYxjyv6ST5LPwTdigJhREWS3RSH734eAZizNVzt285nGnz2H2g34cxVZ",
  "key14": "67X8b2doVXZDgRropKxtDw3ngqNh3yZy24NAs1W6xLieBVtYEme5LaQMFt3jk1ieDL5hHr42yZQ1dMFDhEidgU1B",
  "key15": "2QyBF84Hvz2W3jezAXTJXcXNrD5RUZ4TruixHUBZBmC3uUndqVW1ZhZFvpUZcy21wTnFbVTg8TMJHuiCegDZo2vX",
  "key16": "5XkVgax8VNx3FND6umjNAr1khdjkVaSJmQLGTcFtnRF6fbFN2UPYDj1fPbcmhsEYc68uwkaTCvuh9aUEqoRAMFwM",
  "key17": "5wuDTh4wf4jEpd3BeRAkeDDZ5vBt1ARvDswErxu3MhmcnCq4JxWsSXJD6pa1qTkcguXGrmGHHuRxzDHfhXsfGmRR",
  "key18": "2PZ2r7N9Aif6atnsAiNDDRsJFFY4gGMxFPjhH4RFL7epos1JVJWGJGiBQXC4epmprCAgMHoe7XzPNUF4RM8HL1hF",
  "key19": "rwNCBXhnMLyTd76XKdW7pYcX1VqHMEri8xtHLJuUBXtcKuWV3JcBYmuQ4FtA6MaRLJGsFgkxaRWFRs7sJwJjUCi",
  "key20": "47c7Q2oSqRZwAzG6gFeH6Arow7DtGAumnFAWNbAjZrX1GkLRUVEnk7NW7Dfzo9XRmWoiuDDppQUDSPvM8tjkwsgx",
  "key21": "bZrUwbzqRnK89USvGFWLnEfVDEF9ecVUn8NsC1uY4fEDDGyQoPJy3edcprh3b5tsirfzWe9EGVovWiCys4VyNfk",
  "key22": "5vZbRCcN5wjCmBgbwgCMaXLRDhdktXBXEVy2epitbJNwAsDuzckponpqTecjTPz6tMpLW3n5ScuSChmj3QjpduFc",
  "key23": "47piAUcmbxtPpu4PMhwcCuR3wjvedujb9Gus69ueG3KAQsHKpFzn957V396JoC487VZzugshK95ELdLRwVkZvF1H",
  "key24": "4nqQxokj1vH1BfWYMXQWnFHwGWrVgYsEki2qKzVUpevPNHC9ejJGMWX7Xsatn7aHkk2eYqHk42KLCm32zLebek57",
  "key25": "5LbLaZ5qTD2W2xPvKDoMYSrWj5VXGBTEchRTPzjYsF4jJm4BujqpAmL9PmxPKysjjnEuUjB8wB2pzuPopsZEgPhn",
  "key26": "2KMHWf2jTGLhiCvDpvsqrbxctCNvBoWyX6WqGoVLeQWxf4APteodsSYKfYRWUyCFcZATnLrYfmqcguVZDXtHCxHi",
  "key27": "4Kbxw1HfiNaMSwUM1e7svBkTGfca41tnuUcjFJQNebqS4YibF9n8wda11DyVi6tuh5FNSL6TjXYaqNUenFW4m2VT",
  "key28": "3UPYCtmGpHtF5nHitNiF1CKzjo9jUCMXCiNEDUWyLnNPJBfbRHZ8cijJfbcncdy6icGCKHcLah6o9c5ymd9yRHFK",
  "key29": "4xKeRVcJBmuXHiTVTqn9bx934FvNvC5uxZkJGF37wfgE8uwW1sgy5APzG1ritUai34AZt85HZ6uaPyQ1g82eM4eM",
  "key30": "2nsofotDW6fRACpyAnZJgqU53NTmqYzZXZTH6JuAjWekaDMqYagp8iLqag6a1HD1VCPHbobLeLzKYe9DkU3hYTNg",
  "key31": "5Cg87grzsP72zezzA1N1Q3LiJh65ceNjqLNmqJ1zdVbmMRcacwzgrVV7GyePzvUuUYPGcxXDWADGQocnvWBgBVE5",
  "key32": "4QvpTfd2CgpoYr7q9cadLVBUwi3yNmbgcvo14CMhU3441WhMz2zg6LDRA4udNsugrmeRDhLEjBGEvea7wizgZhke",
  "key33": "66m5T5nkQDD16N1rDmJ6TWcsEREyMfEYGUCzktW5W7FiUPSnwgBVquGijhxCus8AV453c5S9cG3HFCpUVyDJ2JaT",
  "key34": "4sdSHAVccc3mHpQQCQEwDjdyzMBib1keLqmkanXKoQdY1iLrNUzJs1NEwgLQVioVWp9rUhFA1iMCzKeZFpTmzbLf",
  "key35": "2HuTW8PmTeAKtywAvdQESyPy6UrJDNzwhS4CQkosDQhjAz73zfyuqcHWZA3skJqQ5CHgq1n2bQj1LDcLnb4LiwFz",
  "key36": "5fQGxarBPfMeWaCpsUurZwVDcHeyNxKuKn5MLrz4BZdpYq4LKzPL44vcy818TUhWN8fwq3hEooYPTqFnq2jTRQP8",
  "key37": "4kXrcdfUcxcGBFGMxzqGPmJkDB7UE6wGr4PtKr8exUNhxd6K6C27yuryBDNBG9huKFyqpBsZ5VcUkNVGGzQk6zZ5",
  "key38": "3XLMWmCKaNjqSzheEnNg5v6Uouyh4Txu2uSsEG3pgbrRtmyycsgZjWbrbdDFwLeFECfAZTef9uoPKkccHL4kYic3",
  "key39": "4bjyBikb9XLVEQ9B9hCdAMixToD1gScHCJBfgQuzpGwknbCL75oFdsJYSdQgPtH5tTe9ZYndoPgfgcMTN2tdVchr",
  "key40": "2X7pUW1Kq2b6i5dbrE7qF1WfMcS3toZNrdVCCQ3SW3jaLTXJxnSUT4DkppqVCNatuKk47yW5479nwNej9UWria3r",
  "key41": "4ysyBWdMiKhBM1mxSrYEb5sDqRFoXRcpnN3wBuFLKZc56VVz8GFaUrq1273sdAxSfQRiFuJsH4qfPwcPbFVFVwZ7",
  "key42": "264dR9HmT2wmYnF3pYD5jt5aCVX4BKCQyeYvMdwbzQ6jpv8z4Cptf78KBj8KSNdcpy83DsPgnvgg3ZQQYZiSCcM1",
  "key43": "4tM84qAKyuQTwd3CZHyyXaonyh6EkaEKjg3uVzxet1JbUwUPs2dRUhGtdhdtTGEQNtbp5NhPLbXD5iFzKnaC6dYZ",
  "key44": "3WojyTBQWoJnxx5y9mSdT99RsDqzvm96apYQqhMcxT7DrwQVQVNVtb2LT5x8wsx11eWxcYczPR76R9eZCtWco1PR"
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
