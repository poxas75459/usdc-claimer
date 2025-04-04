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
    "2QM1txcJm1cGuXCKSqPjtckyE5iqmdbo9be79chhNcuLZ3wVDg1jrqZ3x8ebbs9njKfiVk5rp7SCMHLa3xQDiyUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PBT7PZ6iML1ZXmJBBUhaJNwXrZixFLAQbja62iphsGaT3TeDUcPBz2Z7dYcYncUqVUTVrzZ8CqJzSx9F5Rexacu",
  "key1": "4C9B9D37YFXL4jJYUU3M2S1Ue7udueiJgj63DjuEXzCQSRx4vEXGvtTtT1rp2H9yDJZcarX2ZAEdpLp4LACi1chn",
  "key2": "5bwBBPDrKHsMdUr2Z47o8wJjBoxF8bzz9r6fVPwZU3WE2JVuu7Wz9M5r6gcd9iZjJXh6Zb3vpP5tNvxdMEghhQx7",
  "key3": "2Zi682qMKNRtit6TcmNqBkLQLNveNaLDvYC9V7Fhk1ashdHHeBK8GjAJ3B7PYxKhyAtiihBvEmJRTkY5wU6b1sgZ",
  "key4": "2aZg1cGeMFs9NiKta5knYGPs7eXvgQWLvYFjGPkMYh5ELKs31Avp5aTeZrrcEnRkmE8SzEMK56rgrpsPteMqNeSE",
  "key5": "4EFP96JkSV6tvc1uinVBA7ezHvv1xE18hbGrXYR3Y3U7ZMt5eFbQRFRhVa945jvRWFMNj2YnkJXZ61j5ApAghnzY",
  "key6": "5MYq3zxAiawMEu4LQksi25NNADcMXEmZE3JSk9f4DsNi7NiJjEMPjikR1dzfu8biWSHr8MweXL5JrWJFwasZePzC",
  "key7": "4Rsjq5DrHiPR3da9LJWiufXjcbaqEZW6xAyfa1r3pncw6TP2k3pT4RvbCggWWK244pktQHxB4H8ydb2CKwuk6JfM",
  "key8": "3WD3Pf1C9viFhwnrVNzZPgLcpJyYzeRxQdxPrfYrqkEmWBYm3oixKCZRzjmTX6AgqyWvT91YRABYLFSxxuKoNiwh",
  "key9": "38KNsAHpCv7XcgtQVDQSXQT2H72gsrdiEySEsKahNHrkgQaGerKP3mJBtmRvgbX8SSDj5hw1M7qYfuJj7w25CRRP",
  "key10": "4uU26Z31bBmN8U4bTEaxe167DarLL7YKJFaDYsssFAQrkfFaNDetT54j16jtDuo8haWCSB5RvjmTe7sh7JdTKoy7",
  "key11": "2B9Vbpqd38zuYyTcGe3zG7jmyw7DH9mKjVsxYrD26ee3Y1a67evxYh7EkEj93sj4W5JnSsdtRtuotdriQF62AmPZ",
  "key12": "2AB3HWKzwCqbeTExBQFFxAYZzDjJ1ZUdywNoMH9UdRfPJw7N1hDsPuCb56BpsWwEpPNvnuoHEunQPQL32WzpztNK",
  "key13": "mna1r4ghbCCF7GFKU18dGyMNxTwXCS7xF8GF6Rw7BvJCMwf1AovgfsL2HAeGQDJYJgj6hPJAgGbDsNMw7xsvVjX",
  "key14": "u5HoBT1wLeQtxWKsWCRX9tx7dNBasQgXS1RQxi4LqEuHTVupiQu9dGw4NTneVeWBkDyWbYvPHKk6qT6MGYvjU73",
  "key15": "3243orrfEgU888VWyXW42cMX8mH1JUBuBDcwX8obvbtoR1Ec2wGtdF4WHPfkrz89tY89CQX2xPLFoAHspBgtiYgW",
  "key16": "484uQjw9TfiUy68ePnU7w8YvL87YcnWFw1XSjzkP3CBmP3qj1qGQcgWvB1R4y7oehQUjES4GmUgUwpgxZPwZSapB",
  "key17": "4wRRg5xdSVJthDeHXic1wpaEATXW5pCAVqeNVX3KhGdbXRwPRsbjDKhhqsdJ5s3tRDv5WBY8Tx6T2FJr7SxmPrad",
  "key18": "3CWZJeHR9teZ22vaJtvwrCQQ5a17yTxdHfgmcJTBN7VL3ofN3oBWiXpTw7CjdHozdHLrbGJmCXRddJuyKr8cpxs6",
  "key19": "4DaHattPU1FobJ7tZKk1H1ehDaqsmmCSWEcqV16AMJ8TRGJgGfXHqNp1Bm66kC7eyhq5DyidFaPJcutRN9dxWpei",
  "key20": "BLdffLTbhuuLFoCbZ8ggBBpgREtHkxRAX7HSi6VBgC6wSNVGUKDDJ2cU4SisSticjbtAHXYGTR9hyrocYn86XcK",
  "key21": "3T7ygRjYom7xy29ncSt6hsBKLn1jGkmn3cam8iVzuosMfHjwnpP2Vn9pQV99ynZMbBfaatkMrL7v5tLkqDRpuKg3",
  "key22": "4UGYQb2UNVF6MdzpQLAMAT3aH7bbApyBhyCWP3LFNa46nLvZghRm5RQBsLgQujyhUhtxKuj2vHjmGKPemgDcWA3g",
  "key23": "5up1qGhDMKfj5TaLnkxf1MsxoFGLthTEPwuKXnp8ojxxP825tPg3sPotw9wuR6McwuGMPfKmt2D5b6AaozxBaWCr",
  "key24": "5mC7jyKYht1hKAU5DvQzbHpvbjcH68iDf2uu6J1k5u589EBghbjQdvrwwEjeVK8aC4BzzvTkF4m8sFJMRyCFBmyg",
  "key25": "57zTcHZRmj1TXPkXbS8DiE1HYygbw9xm6VT3VqoapvPxZW8K3op2ayxKiAsCV3CN1S77FpBNLU11ZNcXVdnhEgsD",
  "key26": "2ZQw4HGb7jTJSqo41LfLhk8iH4JKAaVFENDLRwJfXgwA7vDs3FGSvM931a44JPB9mKUs2mV1WyFVhJxeR1NHqW92",
  "key27": "23titPx3fRAEoXb5PTShazFqsxHkExwk6QraXJWUwyKM7SQV7t3TSdSNQVtwTqfnwDCGLgPHVhbUbQndePfPb2PS",
  "key28": "teHhqjd89qEYNdJsbKKJCcA5aeZsBh7mHJpQMpMQRuhrRcg3K4p6de4qbVF2LLgUzJHT7gJfxMQEkpetJYjLmrK",
  "key29": "2y7ZSnKaYiTBPYSGReEBe5xaWUoYMb6yYkg5CdZXPcike9XJLkPbprxMqExghrCj6s8qcyBVkxYkTsiExz7XgkWw",
  "key30": "5tXuQKSyL5KxfNhh7xj5bcTHnjdeNvTcWVUxGB8NgPmNuKJkuwxBX512AzLxCvg1Lq56bXa4WvEeHs217ZN6yBaJ",
  "key31": "4j965UnCsAujqHPgGBFGwFcCLsDowqxp5qXYydmU7vFYNa6G6bJBoKXdbkFm4BArqNtRFrzE8sgsaa1GWWCfhA6e",
  "key32": "gfLkm7rfUarSk4rqJxMQ1Vk6hNjHwALh89ERGCUkt421xutyuf7xH662uMqfKyd62yrdhJ3Dp6j6mFa1HXbkh52",
  "key33": "3GrDsDCZ4dqTDjVoQ42CMLuN4YRNmU3519ikyhLNrpqxBV6w6KLLp4Gug4gn7GLD9sqPRmXNXBDG8e9qxMaBsbt4",
  "key34": "mxpQSCQdj5DyKrRyXc63TS2eCvAVpMi8oXrLTRym5a8h6Tq9LJ6KWZZXFdyDprXMAt2x6jZGkipXLChsF6n2XHU",
  "key35": "2mPTV4GW5dTQJ4J6t51JanPXJMzejGdGh5DDGJEdxhmVu9AQgnDRWgracbCu9uKGvDJThQ3ddedM4SznrV1NnxLq",
  "key36": "2Mt5Y1hC8PG4cFfnHJ7tqUWdnHGwgYWqdW9h3zuVPAcHu7ScCFN9cGKC7btpAU3XvgxHBhqM72caRevF3qdp2ZHM",
  "key37": "4QGm7oiPamBZm467K6sAeGjDyBB245nHXdrFDPR3PH3Sb6puD68R3ZEGWBUNJ7ozkpnwLGd9eBLNxK51XxMCK5Gr",
  "key38": "33Lq5CZh4TkTVTWjoT8Y1hGV4MLLoDehybqKDy7EFbmWPrubUUCdHwndCXY9FLwHM9gFHPQGtaHzQf88FADStpA",
  "key39": "UJpe2pWEPpwswW95g45eu3HdtsJgBn2tpKbwyVp34eM6kemwZzrGtsqP2dAdfj7wrmMSbCJZ6JUn6cYg16qK3ow",
  "key40": "45Q6XQyYudrPcDjemU5DLWW9ok6nN3mCMHxe7vX8Yi3MY2UGtZTan8VCdaGhnVuSEmqLteCPEhRmp65yf9ghAJjP",
  "key41": "4ghzKBhSgZqRUaTYyHMTyszCwKTCvpTBV3gDwkrZbJR1RFYnfQjEBkc3xBHanxozYL9daW6MmsFWdZiR14oqdrH3",
  "key42": "2C4L1bzQzrn2ixmtKFXcm8DLfvzR2Tny1Mj5EmhNk8FeMCGSAL3PUgex5TKkztMz2ydzNTeQ42QtbS5DHnKHrEaA",
  "key43": "4Az8XjGZcdicYjhiPqYBKyYuRx673TfZaVBJFeVwfWf7Giz31t6pbq5K1p32uhB8mQWxtVw55uz9hS2pKUNpyJfY",
  "key44": "48PmufdKx96rf4sQcVrfmX7LMxTtyjiL8ahxD1ti3AiT6tTvLC4e38sR19aeiXjEFdvzRCPcoANLackit2TyQFEN"
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
