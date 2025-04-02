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
    "4QGKdQoKxZ9W2bXynSiSZmXcyp8reJUHjVyW6DXDysi4PNw6iap5no46Ri4fthDMyGGmh2gcpNA4Jd7pMA74DSy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54x4dgzTP93bNk2NdVBW25Zc9kswzobToHVzYsAebaeeN27dajeAoicRdq8vJzvDngBHTW2J2uGDzqDBcMXc7NwX",
  "key1": "hGC3camM57dVmktn1SUDptBCSiBWJrsuv2oCknQP23tL1qpB5i7r2LJCjLJKSDdPtrHtmWdCBiioc4edEadeguy",
  "key2": "HiWSxnafBR4ELo445626LPKu55ktnfsGQznyMUV4uzSu9fv3sV5E5VTL8v7R4rAAYd4NGGipsLTAuSb8eWVB82d",
  "key3": "5AbCMTHXkZPqhcJpq8d3ZKPZHDytTEEH2Kbn8ZpUyXSa6CG6ihGEx1PfWovdDw2bGmLHVW6rLxtnvRfvvjMNGCta",
  "key4": "2fhswMtDy2vZwNWLq9dDVjCCcbrZ9e6Yhzr1B6Vmcpr8P1NsGPsDbWnJV1SAM3fX9GPWCWp5YoVhx9FWP87oLkBR",
  "key5": "42zavhDmTPSdJzkGp64yuMJpPUcfdiDmqLstxZmtthCveueyjiGJnrp7yAr79vkf7UyjhNDRyLrY5FzK8oCbUWGD",
  "key6": "5YGgMXLf3pU6Ypynx9PyD4ePXmQfW5iAj4y63AnJBcxyNmU7ZeoimbfYGqFQwm9m5GacDicyKsdDfZ1ETaBqW428",
  "key7": "4TjMMYavRuQAKTLogwNGsGLJcNn9oxcZVeLBS1hsYGwMtVRNwzeeyh1wLn1PQfk5Hvmvx1zBnd4onGbczHiJiQ9U",
  "key8": "5GF5E6gBf6oab5ULDZXPnZ6cmahcJR747BN4Pu7dLt3XpEhgKktQWDCCeguLdpgRGUnGSsRuoe7zTrvJdF6a7fm3",
  "key9": "4LhK56np6Nffmb6eb6cSuvo1CSmD8vb67n5RHqBoyXdxpaUVfnCodfeV6nGVRsatZ8RmvPBQaFpaTKptTmhhhfyK",
  "key10": "5jy6J3jS91RTd74pSP3imk6MSt5utRp6iyNSc1LtEzAF5QFL4uqS5pNCS2Bw5vMMkCFRV1D9HDpmUcGwerSWVgpx",
  "key11": "29T8bjB4e8DVwfCtkfCEkMqTeBJjvjdDqhyfDs5zSUsYCBU2HuSD5xdQoTJie6BM8ZXSHhW7NJK7LgBV9UAnRBiM",
  "key12": "4KW3jc1YPvFv7AzzVYKyBorUsEyCcEGjHrC2t2cD3K6XZRckAaSM9EoiUiAssH6Qs8Yqp55cZM7TPom52RTXHGQA",
  "key13": "3BGWFqqVx73gD26LRrrDhqgN6GUmFYRDTxvScW1juABppxWwtFBasEuHwhe6dvyKCqj4xthuHGcCxqKu3J6AWPiT",
  "key14": "28T6vaRSJMoNXU5wsG35xcX46ggsZaQC4B3zzkqnjPUP17KovtrUDUKo5k2zXcFz1Bi3uMgJMr1dmkuNMiN6MFo2",
  "key15": "2wS7dN8BcQPL672P3tvZKQLmytTuibmQz13cxSqSdyqorxgTuX69YVPfnRuSi828HCH5mpUA5RwQ1BiSqA3vmdhQ",
  "key16": "Ms9ieabxiWdJHMXoTDDLs3vcvFNcFn2qwEzpXbA3PGTLVo4vb3QRqxW5y8osEQvxERMmdkZehfAdFvaCTMEUW6U",
  "key17": "4zHQMnjQKUdtFapJrq1vDzL8XnUS9uCkACSp5csxQJw9VCfEdhkKVgRT9sJYMSE8sRkvuN21U5eBJfGpe4apPKNS",
  "key18": "44M9SKBsmgUtEUzcc1A8qNj1z9b9vRN1GyTRpw5W4xafSTRgeqLtUHgTChXDUdXuwZdH4Wch9VJTzVtRAX5qgFTC",
  "key19": "2CpiWvbUfYFUcNzhxasNZ7pJfhuSUuoCs7RX2eQkKPeFLBPvDFFh2uXX1ALCNG9MjAsnyDcMFeSiL4xgT94i44Ko",
  "key20": "3X9GUxs6i3TEa9W54taBrdZDisnQBCfmMSLmF79WBDyjyE7WZ9N5mrg65AgoKivDZi2NQC7Agv7t1nPKnfMwUPSs",
  "key21": "3BojXoD5DZaepJC7rFSdTYC1PuyGKe3C6DHAeGM5qYQspFZcaiLpJfF2gVDZfqdv48UkdHHKraqK64r2suxQtDNf",
  "key22": "2GZxMghfdMAAJwLPRnDKn8L67c9pb5GW4uuC8j8w6kJnrodoR4Vuh7Dir6ZWxTK9cDa9xuyuckkfZTYh2GPrmGo3",
  "key23": "5tV4MGAsomCENS8B2kxWbdeLaxLSY4cuwEhSNUEtBzz8dpRQFYR6H4BKnYikVccLp4NC9a17V6SQj7pa7rszhBm9",
  "key24": "3rFxKmcUjtWZxh91oFkfVZAgHDqC2UhuUqZNNvW1Tgbp3AuL2SiZ78kg8HPPqSA1qTdGpbapaQYc9PBU6xFk56Hh",
  "key25": "4aDoE5Ti8D5mAafxuU1YAW6ANkzpscC1TqHA8cNrhAPA8xgYy3D37pkXUfh6Hg6G2f6wjumrZokXczNLKF7vXNys",
  "key26": "4kma1KCptWCBgU1Z6vxeiijse923DtmBnnvsGAU1PqgCGKEehjFbap3vQa7BSeSBuUf6mB2bZethYiaigVKyKhK1",
  "key27": "KVFc15NxjimgDzuavRwqU3fLComBnQByV7rzZ3xsZJs8hx3nAmhSDhTqnNe642uBzda9HhGco5of7Tm4jhdjaxo",
  "key28": "3vTRmPh8SsexrrsDhVcYrGaQB5EvFPw4vek159Tx7rLsuAiy6QLVkw8ydCuDSUo5bc6T5BDLfuqHA9GPzdQiCfvt",
  "key29": "2EJSSmwhCSs8TH1mLYEUyqAs6zubmN7XJtZREFJY8sufdzdc3obcLfQ9psdJkfSPn756XEtK87x9ebhjPMwrMw1c",
  "key30": "63PYhVVtYm7SX2CACuqRuRXvRmEgcPj12vJL6bEXxe18YMBmSHSHZmq6npqcv4jipJmZjDqA8B7WczotaDFsV8cF",
  "key31": "5rQz429YbHjdLQR4J3i1afDYhP8E9UTfbTmxE9R9kzsDyQLNJGCgL253tYk9UnvHfJDEQjQ9jWZmfguFr5EYQANW",
  "key32": "49sjhNuHHqytcwr5qopqS3ygcsp9sR1Zx5Hh2a8hEbgGBdBfFT84uFzx82psWfTzUkybu9gH1Z8jFP3XT2tYwvSh",
  "key33": "pmrs7jfzeXdxbyiJA5AWGjRw7TedPVJSx2KYaCQGrCD6ZN255FuLAdDPtFnRrd459Un1r9iRAGBgXmaYbcpyJpC",
  "key34": "3UUP6TuwZda3Vz37RH2vVGG2mvZopBTUpuYxYDz2EYkMAWsRM5tqk1GW7imuRyThBPX3JtV7KeRvM5vUsuzzb7Fp",
  "key35": "JhXJdB1iZjq2zD1aHMvXB8QgqBo1WYiEGEvC2ZEFTSmeF5nq9Q7WpZuTEz26PcHajPtsLQMAyrdjx6MPEmZNyUN",
  "key36": "2bkQdophEWmaagtdhcPrJrTrBAaAXBBWF26P2tfp5kpcdfLPNaDTCBGM86Us24bX2F9ujYjmTYpcvN4U948EGS3u",
  "key37": "AdzFFxqaqrD9BGReCwxpsnSgvmAfx8r3y1zGTKiUo1jRc1cMTudLx9xRB5wcQt23CGJgTLAVM3nKLnCucRPPRqL",
  "key38": "4bEFr2JK4sJpY2ogcMFqtHugBNJFUNQ6UvRU269iABM94rYBkcRX3xD4je2BbyLj2GW9GaJLjUSrLJ9LyPzTYMoM",
  "key39": "4gAZU4dPegCM6pdmtrh2nQ4A5ggSUr7VWy6fTtYBwNewhdJm2GXYx2qhF1TvjCttyh1WfEBi6Wxkium88g3v2YP1",
  "key40": "67rHQpexyhU7wPXb7pbmPzak5GmumBN6fN7c3hrMhz918pre4EJGVLAMoDqbSNPVQsedKyXLBfdkj9RwsK95AaAR",
  "key41": "4Ajc9nWoukC9AbSZh9Ar55sB6y5RP9YBjJGUYGPwmJTHYDA966DVMhxZAMDed6ybGGTpVtTiZidEhUHXgLSLn7vj",
  "key42": "24pFMUrmAqf8TvSffnd7NdwzLByZzNsqBVremTyyviKzyLkZq9mnF584CpCS7uKZjTkJ4fYLY3f9hTm1MEaxiDe9",
  "key43": "3biZjoP39tcApy9sa19tQoi7c1xDu6Hi9pJFcaAd4ypfeirVte8fAJQKhgmj4SJohqyD6U3dB21Ai8m4Qe97xgfk",
  "key44": "4yoD38RX7LRDsB8thfEXeEnp1hutuCHtegrMwZVegCF1Fr1coghg7AtkyqbE2YekE7zYqLkwMArv3dk9cuwCAaBW",
  "key45": "3EroaDvgyB73HAFzakkPi7PAhb4dqdr4negzNcqpGRzZpHkAYHgE9UwtXAd7WeCofCdLcz83S4wq2XDVqhxDQ2GU",
  "key46": "5WrTXeupafEBN2epSEiHEsPnLzX5VEyc71JoVaETXMDumqyww1168Vjwj6UGsWprCYWDBd9joJHxQGWjCfdt1YXS",
  "key47": "2ucV4c4Rn1tBbunbxgZmbuP5YW5hA7VqNzpeHbaRdeCAvjjufJg7K2qDVaD7vyv758RC9Xeo6DfQwRpPQRVLizNQ"
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
