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
    "43FRFnoSWetBMR9yqbxEGDvcSdoYCWUcXfdyt4X4G7Lnh6eWDDzz9Wuh4VzS9JevR1ZJ1eQE36U83KmXXoczXch5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wMx32kLpxu97pBu66k4VwzTPMoyYWZ5FwKeS4qxG2yxZsEVB6kxcsjVmtfBHp41ZpM25WGhFThhJhr5XMMv8kWb",
  "key1": "4F4nvkUJ7JxBpbH4uRTMAXsiYVA7KdWQejLLmWsTGgjYmEG5cgfWmsXiW1wJGTHVk8pJXhgk5jVf6AZTYgq8E8cY",
  "key2": "BVrLBvFFSF4Vh3cv1PEn2sqZGQdwogC9McdLH9ohCFvq7w3omaZXvoaNYFAU4yjgYvGvYzNW9NATFTTMtvS1B91",
  "key3": "4in19EYKS92Lhv77VFTWEGWH8WiuHnWxrcH2RgB5UJyL7BRDKXqePwhtnFN4EMQ8F8nyrU4Bmmie8WBW7WkBFfHB",
  "key4": "4HUiQkHJB2ovpoMmm96q39QbzM1bFoepzzU5pb4VQNYndKsiY4zeEti3j9GTaX2sdeYQfWSoy83L3Ac51bKpQhGe",
  "key5": "3kA4kgJ1akg2rcXanQcF6RVnXhqf5SZqoLJs9YHa5QJ72i3Eu9wPeXGoMrK8Q389h95QAZWQhoqLH2VmnngvyaxK",
  "key6": "jZXVGYffYU1CgU5HRaTC7tjpVN5GCupAQ8gW4sgNW17eGzbPyr3WRjHCDXMSbSECrepvq7whtYJ1v9Dr8o95TRs",
  "key7": "zqpw6rWha4d926NEb35gKhPVxAmy7bzFfvrN92GLDeEUQnA1pgxfmZ57RtM3T3R2FV3X9uaij4PmhiK95xMkdPS",
  "key8": "2omqVzAfUrEYw79QFZ9RdqyZZMb6gQPeeCafErHC8JENYYSJMn3rdt873ALRtJkMbUq2CwmMM2DFhv75iKY8GD83",
  "key9": "3ansNcxGyG76PsQiCg52V4XFL6SutoN58CTboViUFPFqEWDczBZ7HxVDp6ZCDswkHNnpsWJim5dkfeMe52NY6SbS",
  "key10": "2kMorMaDsepnuY4utJWuLnwMYQnjDfTyLVvHXarHkW5tyzt68Ruft22XuvPhKp5yD1fGjCppq9VjpaCYuHHtpvZe",
  "key11": "b2gSb2GbVH5oqtTp7W8TRTGbUi8f9Bb5BaTP57WKLHCrQSHXeHH1k5rTFnYsBS3z537oRpayWabNJdzdSfdf43g",
  "key12": "5RuRWuGKz8hfwSX4SZDiqJpF5JkWW21drgQkomB26Q6U5m9uGcYzrHg1YbmcCvocdofJUCEe7ocYVWKSAQGmXtN7",
  "key13": "3wid8vYY8ptxH27u9cGwWLeZhYoxYH5EeSddQUwxDyBCdcoZ62NGGQN8rMRPEKS92LgA349uG8oT4pL2o2ihVmPV",
  "key14": "4ZEXSK4M6CWEdgRtvkK5w4UayURS9vQcJJ6u94sjNuRf6pV7CsiPUt8YdWa1Jv5pMaBhJinqfT3mLpVT6VB78tpe",
  "key15": "3CXwGWEipHPdW67psN56SG9fj6N4ya4m3zg53iSSurLSWMG89kcqVJ6CX9XRhPdiUs3ynx6BWSWweK1XEoGzcJ1A",
  "key16": "a6kdzvbBYY8NZKVnv6o8DVT5Vk6n3A99b5VxrXEGk47yHEydyzGSF6UBtQ1q6QndGTga7XVG1vRmay5EqSD65Yq",
  "key17": "3ESkXoiPqrg8qXXBu4YMcfPteJqEcsPmWfk1JrJKQTgBNhJMbTK961fDceSYZrqsPPz14s6ifaKcAJj86zbca3hF",
  "key18": "5WK1nfgPS1dbuT3ZyJU48HnfCU5ysFVzqQ4C8zXFk3gbzDJVSDyG2Er6agBrQaLzXS7u8NTEe8TarVHhBqx31NXU",
  "key19": "233ASXhswdSPSeR2jT2HmRctmwBbAnC1PRHq3TQjF3iee5XEj6wCHX2nWtzD6gdTbZT9oW6WNhSDXGZdxZtZwMzN",
  "key20": "WJqjGNDrA9NrWFZR2VqQynVykcsfAb6KjKjdzLdbMPsDXHbgppNf3oArRarHRjQoMLnjjWAKGiMbUFiAmC9ov5i",
  "key21": "t1RuKBEarNL7x2ZYLNG2jnd3iPp3q8PXBZcT8ZtbX3YNiE3dXWnVm9bTv6wBWQAYhQTftUSo3NKiDa8NxSr63kJ",
  "key22": "4YMES8MCdV697EgLL2aXtqX1gfwAJ6GRfEzmoPKqzYkx3EQ3bUr7yTRxoMuSNVrUQ1vdCzDKkFC9yw1MjWUoeW3k",
  "key23": "4icsxFC7dBrFtPT1ehpAZCKmqofdP2AvARJgkb56mNX3fv1doRNDjqrCkpRUgG4qqrR1M4cjapZScqDNRiXdZxMw",
  "key24": "3NWcTYacUUF18ShAiUiFBXTXXw8z2emi57Wn2D2dVfRwGGowUMcvwrt94yqgGVkiBUPPajEcifLXGQUPgHYoZAMM",
  "key25": "3Hd9617jpUJnzsbfcV6pZpj4aN8zRVHZ5j7fR5CFTALoMRMjXAXFWyTGYxspJrnm6YqHnGZ48To58tunveAnDidm",
  "key26": "5UpWBkuvGZL3TdJ7XCUaNJv1rzUuMmuBtWdAvpb1Zc68HaTXfz5wvBd92QuCqUw1XyHGd449vAKS3zgNHGLJYSRM",
  "key27": "4DeWYwTZJJDFCV1NFq8VGq1gjYSbXgSJVWxu4d723oGxtyZZNqTRANfzyhVMtP42h6ZQQgreZrhBpc9xpuSea1V1",
  "key28": "65u7aSQhBGHZhF22m8Hw9iW1jFc77xj7iSRmck7c6hH1ir4MYYHBKKUYjCUBP84GZVyCtLYn8AficvAFB9R1KSn2",
  "key29": "5kY3ZMoU8kvecdNhA3AUyttub8CDjPXyRutaiFdz2LkN8idX959cy24j6FXKfq4kMKHoppFCeKoMSJeeyxbB3Fo2",
  "key30": "4THxrgCWAFMdQ8ZhUFuMCpPdfCRSdmFmEfs1zHMWUsA2UigzBB2sKPT9c1Qjn7M8911bJFAKJvySb3CjX5x3spFm",
  "key31": "5fN6JxTW3LLED38WmfpFC3X6bwV1qPjhFrDunaHTBXtGGkRELwAT67FFiMqBGz2teVNTkGDkto8jv68sMZYyergA",
  "key32": "5SK4yTAvoidQGyq4LxNDRE9p7Ha4WYz8TB28sPQc1LAKPxRxyKwWuo6CLmArpHqPZzN5hL269wQQkyWowZo5c9zV",
  "key33": "2wHka799aSYLp2r1CsY1S9hazXA1XXRRzQDZWDug96j7iSWE35XhJETwm7tcM1KAuqqzfFKmRPYEXLbXbmsRyn1R",
  "key34": "2sFJuS6d4fd6Z65vtufKneQNEP8CnK7gyDP7uTNgaf8GPUbresnRn8voUASrXL13hzPvHJtKFy4Yuy9EGxHq3WH4",
  "key35": "5uJcEUpPGA7yTEd9M5r431LENWtphesj2nd6A8YnAbDty3Kndg2ut136CV1szxVLDrKnKDmQ54sKwVwgX9vD2J1M",
  "key36": "39nSr9MkjvssP4gYaa3KeUaj2vhJWpYxH8jPwU3BzWeqNrAP4oKtTLjAhpWEh9oBb8yNyCfc9C498MrfQBnN81VC",
  "key37": "5qbmoVQA2svkGpwnpnpw8wJjhQ1SyErPgzuvKrGXVCRSG4Q3RsF8orVXXbkUZ4MB87Xc4YWuZfPMiPiTCemMAuy8",
  "key38": "5hU4DhmXkhqrbtrPy9rrQZR1SUX82NKTnHyJDqGPuMoNDkXassNurEXLoxKbXbYCwdBxfmzSrzrVZVkwdcSsAjxC",
  "key39": "2kdxNHJhg36tSdto5JNSJtiF2yR8Cm86SyrWdKsRJfzVuH2U1Nrxxyz784u3cFgGR1wyb5aaPra9JuvevNPDTG3U",
  "key40": "4Kgco9ADyAGEcL8BgFuheXRSHadVWebhvrSX4JMoSz4r92ZJSeKveSuRNCeevejLUWpom4tpxU1mot6hwx1w1ptx",
  "key41": "44f84AY9UQRs1kXrBjDzgKCSL2Ye4ZPTrWmZzTNiEN19NDRScRKvTE92RCnKKZaReYntpqSEUveXTMhYajQx59nR"
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
