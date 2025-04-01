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
    "4hXjdobgoL2cV5H5SieHGA5k1S3ajRrKd8Vm6hafjGMasWssyV5TTybARVs5QKwQeMua4T9QwQHoWg1D5oqS67tP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QLWMejTce1nMuDC4bHUq4w8eB93JWGiYsVkNDiUh2LDWtLneXngrhEjiWXjhMZoUPXYFHmkZhYTD2BipcqDJBXM",
  "key1": "3K1tzRWko4UGkSX7ZN4RLAvA36XPiMyhcDXaXhWaRfpESut66KXvR8jB3PfN2ybpgx5UVTVs2AarBXKu8VB2JKvB",
  "key2": "5sfCXNYa9GTFUYM4rD8CwUVhMRBNAxpTKDWM2rRELfopJj7EVFAyHK25r7DGYVF3Z4BSaF9snPVNVPk56wj3D3Dw",
  "key3": "4cn8FG1Kd8Mfr96v1frTjaeqY6hcqnMoNVvvdWQ9w5sucPjRJoWbED58xUm7HTmvW9ecGFFNBNR4qu8vJwLzf97L",
  "key4": "JyJsRj5SQUz33WyF3Lp98U8wriqcmtGgKauBdodMXApMvFnrQ6c3n9tJkATEbQSQaiaE4wK9ogaLcLGd7HhuWVy",
  "key5": "2RXVA78Fnr9XptAaUzmyxbjWRSPDZwJYXfx2uWJndjmj7ixEdZLMQsSdhhCrTFZWtetLV3RN5s7De5ubsGT4senx",
  "key6": "3FXM2aVgLCkH9cvwktJiTBstBk1eFSkDj5LFeJmrKBsRG93zwa3J3uURnNEQxz9EtBRUn6neqnSsyuSrTMiXTVNB",
  "key7": "2agAWEynnnn8mVPEV2DeN9wJHGeMTPd4rQgVBV2fwsBFve48RMfb1RXR341YRPnDxmDHhbUPWd9hEu4ej6pwY72P",
  "key8": "3ufJbvwgMhyjUcMHJT5zGPEB57fUbe6zQiGVKP9thq64LsKC9z4PjunkFbL75NLppTePc67Aic9ZK33JJHsrru8U",
  "key9": "bv1ocwrnbcgoma89kwHJ231Ppwrx5o5ga2sKbMLzbnG2XgDtEPJbhK4nL6PQvT4GuXLYZLPVCvCnbiQAhfGjC5w",
  "key10": "3eUKwUzdM1FNoK4BQbgsFb99kfWUvHHuVHp2c3x35FUhAm8fbeayAHup31FPVw2rxt8L7uWNTM8jw48iSQLTF37W",
  "key11": "NFsw1nvyyYaFUQzAWa2LTcdHpXdtauSFSsRFZ2kcbpdw5qSXmVXa7pkqZTmsKkXrX9cmZpuXagh9yrEqEDioUY6",
  "key12": "nAwUodprwUGv2SAC8CBtPGHEqrvP16tEKgKsEx6Uwn5VKQYCHmjQnEbDACauVMgdxhH63vvrPsHtcioaaT5H9sr",
  "key13": "5SZwk4qk1ijuveWWnHykUJgGWepmeu54tKvAwbzbVV7PkaLQCA5zGWeKSFWNHm6Dbb2LhvXoSLv2McKEnpUWz3LU",
  "key14": "2jBQZ9faFirhhx3egtmbdm4nAPHsFA2qSwc7ojsvfBTFhZcH6wanxiBaqqJeFwiJsXhpRpEMWwAzpdgeKqqMDNpv",
  "key15": "53cDNWiyQTF5Xho23ncbsh7xjNhPiGivtZ5ZVnpZ8fgFFeoyY1ACaxzxHBj6RKhQ1ANTicUigyNddPnXaKzJccRN",
  "key16": "2c8iZC8HebxrciJevhtBq1pz55V1LtXL5ZfqFLkzRvAz8cWxSY2tWADPYgfkrhjhZFabc6PrxJRAMUDfM2x49dL9",
  "key17": "4k8VjP9FexXKDi69UN9DgJ3bmB7UqQ6Hiu1MUpUgdsDHrjRiWHTXHLn2TKry9EucNYp7RDJ4SjdbRdkWodj2sidz",
  "key18": "5uZZkfSK2qWC2hz2QHMFrajeNUXBrHG5JEz8CMUoJMVmEvfBG5UC283puYoVs69G6iTiVr17AhWbEX93DYBH3twV",
  "key19": "5CZSQoJYeixVw3UHGJApvSgNwCSZf7co84JYfaCvmXodNGSMt5vMG8eYeDSERoLAeuXXE1V6NJ3KKF95MXJzGp2w",
  "key20": "3dCYB9d7auuPEzLT8oPJDk2wHwUFSCmZMCg2gy7iU8fp5X6zxtsdZQzweM4S2wuJhSqQcY8Tvg1osWtpcCQUrdLe",
  "key21": "AntrqTQAt3qh6dvfjCTCSGc7h2jebM6ym6pr6EArZC35PME3umSxcBuWtxwggXJ8TVGNCndJW4An4nri1dsfVP6",
  "key22": "X5RBZgjePkRFxs43dahBcdV1e4YP4H3PnnujhrwAAj9QzowUyicbC4cJfLvRqy2XLruJx15ZucftyuLkdqBjj16",
  "key23": "5xeGLeKBsW5Gh5jKJVRWAKzYb86LBXCeE8foTZf5kpRP8LhUrupsZy6D94M9osvD7rqGv3rCoyAccV4kCiB8MxYx",
  "key24": "663oCArrz9nLrQKtWC6NefN3LEA5LwASzaSDz9u4vma5QVtmAyJG7b4sy3b7REfNiSNGw5s8NEeDA7m65XsPjVXE",
  "key25": "ZdUetsDMSZN7zfVMv8Cd7dviX2uMnZAEetqV5R3QM5s3z2HTtKuuAnSt2QBqCwaxdBegy2ZFewSuok6WQBixMfs",
  "key26": "4JgTEuNankWznVnWTScVKpqgLFCgeSZT7gRXRgSfwb4MJHSXdQ9wBTTnfwvxH5nVsJkD3mF4fjBkx5RW8gjAdNmr",
  "key27": "Y1ov41Sq5ZRhuD5rwvQnpty1xTAsRXe7xuY1tVG1t4rEqXnGH3zChRTvo2eByQCFvqDSw5xsSoYRo6sNrCCmPK7",
  "key28": "34cE6Do8GVnMjyLJnL6X5ugQByc6syejsY5MyHqB5BQheK35bZxPSRiCXRuq3HRaJM3Yx5EHerGK7n1sHbBZX399",
  "key29": "41xyA55thdcxgzcDaoFUS1tF6ZQ4zVtsPSTuC3nTpYvV4iPRZjQZz8vXrT2xge1NXH2GgRyP7fGDu4td2J6TvQBu",
  "key30": "4CYiVVrwhDUyDP2FgtR1Rjy8pXSrb3CAicGhkP4QMayaYqCo9r4dG9BJ6urRo8vrGVAyuFjxj6WTabubZuvk5GtU",
  "key31": "4yrsCDDTQpAVKRTvUbZRSbY6dftF1v8Lkank9A5hXujAXUYCRjUd11QBZ1khFpLi2jUKRwu6veUUnkuu2jKLmWeK",
  "key32": "wJsqfA88cjJVFuz2d2oxDfaibqiLNxoXsZYrRtyUiWqpPjRjurnFAoEsaKehCXdoSs3kN9TzcbpjzA4WPiWvCsx",
  "key33": "4BdFbat68J6r3ykaKSY3Yw3NaSjL4sySfyoUZp4PTDS6eex4zfK4aM9eb5gab7HBWMazsjt4XV7ZCUFdQ9xniRiE",
  "key34": "4ugiyCkuGStAoHN6v3M5tYhWXzTaWDNJbA4Qr8J2d7zbQ7XXdE1aY2mE4tPWop2HzVUYaBGocXLWmFTJpFx3HpvT",
  "key35": "3MYjiUwPbwzPHRqswAd3H7956LBRXcrvbpeMGcdS5vTSLohZqhyEC5gusxZ1f4QYcDXpdm4Pq2ES57GfdiNHkh8A",
  "key36": "25WyXMStP9mMWaM6s4ByWc9G7SpC2WGHaH9kRVvsXpqsm9gaPPJ4uKnkL88QkkJ9ZzbbGQaGDo93XsmpvCrkzWTX",
  "key37": "3soZirhdy645D751AAY3CvuVrYEZNisvmMYM59eNQrHT2WC9LMN1e9F2Voh32ZXgNPtGGo9sbzs15fGwQfshvsVz",
  "key38": "3wXx6e8Xqfb1r5JRxTHzT7RbYvUoFM4PQFAHwgq5ESXKz7JVc9KBBy1r2XE1vb5QMLUGneCLPAV9vBEGKbQb1sSR",
  "key39": "ZWU8QojjL5NmZqyh25UmgofPKPUkYrr9XMYL321mQxZa6LjiHDxSrEryFitAH8H8cnavHFxE6EGgytxybZdrqEZ",
  "key40": "2X5w7qESfaHibxCPZ5qesF3LTtxY7oKzTBvL56PUTW92sM1hAKZr8VcmiwtEaTyLQMMujkgK8WecLmuRrUrNcAx3",
  "key41": "2J6oLcqubVJZVYwX2joEiWbE8XLWt8t5Fh9B8mwerDxfKQP894vYAKadvrJQAwUeeaT3378E45nrfJtJamQMc4fY",
  "key42": "4WtVtASp29S1QN4LRqkuXFSx8v5c62zAaG5LRxpkx6ZqxrsgfV8AZH2ZVcXtuS4stYALnN7HszBJF1N5Nz41tPVZ",
  "key43": "5aL9ZbRKod15fng8SMWrJzcNvonELfa7oqYqzn2BicNd12SYvn1vBdvw9Gh9vXRozhjXXGHQUbJHiCguasdAx9C",
  "key44": "4ePcryzX5B6u7MHnc4QPqv3uWdcvBgNeK4cEm7FdYyeTSmsekQdab99pcr8RARym4iEVmJCvns22E3326nrhGfnu",
  "key45": "YELZbTMLytK33YvBpCwyT4Kic6GB8PzDPA3d8jVJ2ZXiApZKJaNAy2ZP8QAWizH3va5m4FNrFTnxhdRARCArM9j",
  "key46": "61nW8Z72smRGTZHQNHNkegJSnkrTYpCqusHcBQCy42GxN4az4aMW3Dpi52BeRUb9iAfsSwTQ5ZJHhyzth1q9cUze"
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
