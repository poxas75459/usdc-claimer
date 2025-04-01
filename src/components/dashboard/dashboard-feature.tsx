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
    "3WndNLTAND3HFCYv9FExpsrHcuEKYvi212ZuY5e42MYECKqjwCKqbcTAFA3ND4Up1ziQXwDZH1GgWPB8pLgHV7gh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ew61Sgq6YY5fomJKYF4K34wxc1LidfxMEjHnxgTtNEZ81uiAqiPFzGpzRqjajAojDtPqYezppUH6Zk7qRQcAdyB",
  "key1": "3tq96ReHWEy9FaiX8rgUNsu6vfTvnwMWMYBqG4MjCDQyaWLTJi4rrGVPnG53XwP9LHP6yy8a8fXAihVsaBMYrntd",
  "key2": "53pV7Cfp48CcNi8rn8DVhqPV3ntB6WV4QcZcDrm658gZqA9fc7WwJE2JGHeuUgcZWoDYvktMdzPGcVLky8hf1hzE",
  "key3": "2AFPtJpzEunFYryHYASoCu3S1HEQdxisZBQXvi1cyaZegPsYCeH2sRC9ownaz4FGhEpET7JwNXuG6fGNmuFdoLYW",
  "key4": "5TsF7AwZkCX2VVMo84oNN6SLn7tSBMxsq6bgbn3WqVsertpczKLHDSgoxBRozthfDpD57tZUnRXJvJ8QkKrGUcBz",
  "key5": "4AjLbWCcEkVJ7rd1ZzriDoNamBenYL8ieKKwTuPr6KEX1BznrNsbPC4L8PkSzir8RiVSW63DTkGpfVoCpx56EVMi",
  "key6": "b2YVKaxZf6LYxSS3cgUb5yER1LSpdcrVxys7kFtrtNVR33YLcetqjnFtA3kP6Qk8CvYN8o7c5jGpo7bRu6g8MVj",
  "key7": "pRX5nbPiaP9yee1WURoY7nCWX138v5a4QRDNTLUJFNyoe8Rekjqb7koVfqGpZJm2t8ceYnci3XcQWpL7VaETkLB",
  "key8": "3MZ8gcnhMggZUKZPhqf8ZRFL5uaL4BQwwUniGKF7FFczmS5rC1E89RQUQxaAWfmCrGrQLttrEt9zXr9sGKZ4jTAC",
  "key9": "3rPtyojG9o3rkzhfJqu56HbYPyve5tr3nQR4LE91wwjB7YjMBcRURh5SQXh1dadu7BY6J2xErmydnYHBif2PzzNS",
  "key10": "3xkAfhXP7hMMoaRbLjybnAk88XXqkCcxJKY1z26uwH452aMtDJZKsQA1njMQ7sAn1ACwM74CGhXCxJwRZq5fZKZG",
  "key11": "5rnRHQFuhqjRZ1p5UhZgMAkvrcT83zbsn9QTYKuabsQTVXWi6xFmSzj7XXbXVezgCS8TUWXPRk9EAsez4gNRXsdQ",
  "key12": "4uoFDhASsUzDXEphfTogvqCKFV6nNfEwdf7W9nXZ1BHC1BYpABpRWarG84ChM7puNsPJTxybpuAe9JEhckgwQWhf",
  "key13": "4qZhBVggZGZ41hxHZLwjUafYoES46JWoLyNqGq2wWCdDhNFAYAymuCfEv89Won9ugarHPQgSwDyo7XhN26zhREEP",
  "key14": "5KzbCRh39SNdr6ELB1taKHNuPe8ZHVF8i5g3QpTez6oBpwbMgadxgTD4t2NhRHdLokMAZgjeuJErRs8ouF2bJHfY",
  "key15": "2QTxnqdpQcF5Fcxcz85F7nUxo8eBwffzYZb7oTdz2UjvV9tLTRQVgoqT7Q15RP1K773fkRNXMkxKqfA9JE7HSyLL",
  "key16": "5zRCMisWE9hdbUCbLyZBRyRERc4TW9ijsk9arjoqfHNcSjiHvzNaVLaHwReWpEsnqoRmu7JjqAhF8vX3B4z9YuDE",
  "key17": "2r9Z7SfWBpwVgwEiuE1p7uWrr7Puv3gB19sgBwfUMcr7PzruD3J4grYUrYwjRy8wFD5yUyJbrN2egcMqoeSK63La",
  "key18": "NZQjKL4AyG8JgW13434rxNx6KjvsM3NwuRfpeJnooqPSWmVXB6CSoLaF3sdvp8UYn3C3C7doasx3ayBqG5cYYAM",
  "key19": "3icbz3FprmEqCgAHY81S2CcaeKoBVohreQrrjWy9NT5yqUgx4bkkMjewf4Q7KK1xRHhBkPtggMeWDoYu6EYZoNXt",
  "key20": "3Xr5MGW3k7heEWPvyM9EKs1gyHtPcvs7A1vVXZ2AqyVKqAisunkiYt9RHupQh32HQx87Cds685WgmWmNga8LYzy6",
  "key21": "5mi9hvjor1nzvX1WVGcWRmm3Y2Vn7AdDJtjAK7m3DnFtmzzSP9qBG5vTwacynMKmkvrANduxoKkf34wk9yQKUtC3",
  "key22": "3rZZjBwQTA1e4Bmboi2HZaJZbXPy7cK12HaPAgW7tbLbCkbT3zT3qAPM9Gk9qZVs75VgoYcpZLDUJSHZXz3XoXuc",
  "key23": "3svtTws9N6S5nRq3A5zceMpNoVpFYdZk7DoJcbi29iTzshctDZvZRkqBeA9mTn3hL42nzt1Zdz549L29jegxcVgY",
  "key24": "5Raaauy8Wy15k8bhRJnCiDDVcWxPtegSFuuAt4tYBMQqLDB9TzCsDumrktUgrEhzz2DyETQGA2ZKpzsSJnkd9p3w",
  "key25": "4PPrtGGEEY9nCsxxNqTFeuNvkuSnjMFmjMN15wuCFbCAz2KKVVBAtuw9z6FKPEk2txqMczDJqALET5Ywb21HLCUb",
  "key26": "5gGidhT1sRKGNTxSPNNH7oqS7t2HwCdX7JVfuBqvj4JVh51xPLgi7R5gkFfz9BxyLbBgHq2tKorGaFmoA9uN8YtC",
  "key27": "2xoygt3PJLSZY7uFLf9xpKG9y5inddraqKthkjG1eoYB8mXWZstQBx7i1jBqwvjdZUJvPpYVR17E27ibUgT1S8wg",
  "key28": "5qhdZ7RKRCqZ4UAHqnajMjV8nfY8Ls1FwpqNeZYvjXNWAapX74Jhcbj2AX4tKwxvh9B8MgEV9L4A4m13eVCZzidD",
  "key29": "2StJRchUGktv2a55QAKgCBJYMXQA8gCcymTrZ8GM3xHGqdKJWi59qkx4vHZKfEphHsWQSZaRyxQHowm1197R832s",
  "key30": "2tTS1au9C9PbzXYiFs9dzN1rWFa9EKue73dDJpXiSggiSFpFH9D6PPo9h5WcMJJLtXzme2gzjU4TRSEXBYZHvJRf",
  "key31": "KH1So658jMwpUPAtjtsNY9F1GKcya78CStSrfBfkC9HbK9MmQ8Cn1QjFPhUaRxSbFB2ymEJb6FANQ3qKQfghJCu",
  "key32": "4N8sbmBSKNgdNz4zVTrodEg92LsbJLqLLGtGY85Z7PH5SMYE3h2QUEgFc9hSunvntotaAwY42GuHB2amgDxHLnr",
  "key33": "4g8wJsgEu8GiMe4PadjZ4D4dw1Ey6ChPwtT7fp4iThWY1f5PZyZG6BeAy3KZqzbkPinxdcTQkiiSoEffQKcKiw8m",
  "key34": "2pcW55kKLZ9QPEjxhDdktRC6T6dE2iaLr4zY7GE4xky8ETM6hjQzLN4yE4oP1SmQCd8jG4pAinxUGEBdAepkQwSr",
  "key35": "36DDWqdcYuTcKRDQPY1ComMJgUADBDog2PCm8iyzvqTAGuxPE7AibVozMAvWQekq9KnT6tdbupff1QG3zRhH1MQy",
  "key36": "2YoRHpbhnQTbX61r5D52Jh49Cfn2bSMu41UbZMrCnJaT43KZShpiRHsxVcfs272x1kP4eVbm11bnRmwohFWWEki1",
  "key37": "43D4KYbsMGL24HQZFNwzkU41YST3jCs9evs5PzkCPVDEzc68BkgnzjkignmaTKmcsFxrVEYkJgCm6TwZjiAv7PbH",
  "key38": "XQrumMKwbFaqrKQcENXEtxA48oU4SnEcefCDdFLQWBFENGmyyyR6h1p4X2AQiDnsn5P3yZo7pZqudBbab5NBESM",
  "key39": "4ERB2rKBQoUqcoYBdRT21EEExgvSyuV4CTR4aQKTSUemRE774zfS4FshGNHsQKkYwZrzmvPWi38Noz4nKukLdT4b"
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
