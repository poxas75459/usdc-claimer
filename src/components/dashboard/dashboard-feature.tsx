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
    "3YGpxFXVGAo1Mvbn41guroyz7qt21ugPm3KJAZuDywRAcXfscjPSvE8vGhwvPNFVYfZVr9sntjMkNAUudq1if8P2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57qbiqfKkW13rbyQRr3bN6Q5eofSfvB7NWR57AfsceVZWbbjAdi8RmANjJiRuL9XT3qGeWebjDa2vwrvYQKTuT2n",
  "key1": "3uAbSdNmHhkfNY67HQgQ8PN58SwzqB5LUozXib9DGqG3wKNgzmmnHEJbMBMuBaz4TsaBCDePmvrCjMaekEcYGAUB",
  "key2": "2EVPsSGB7NMRS7WZaioNk8eB1pQgCP7jZY9p8wdWAz2WyUNy8YBv5Qi6sckoyh2ncuYPfbXiadoRzXa5HumpztZB",
  "key3": "5yDiCJiwiWow9ukrAQmYpnSnLDuyuAH6YosTqDNFr1a7XAE73roHWvf7XpDxHSSCDgRdWaB7WFUBRYyivVqK3Bgu",
  "key4": "2CebxBmZcQWBQDzaf7AaR8e1T4R2xVZgBGQW3b41fmhAXeVoga17q173uhiNDyMVZ1nANbd7hufWkLbFUvreg7j9",
  "key5": "9VLcAMcUpQa6dkF43AhGSrApucFbLZ6SR2o9ixkefWSBoSBMCXAU6c9FdXPUWZyBjCgWVpji2oKvC5dPs6W76Tb",
  "key6": "4gLmzwPGGUtsK6jg3vbCUQUatrssPoYQsNrC58L7afL59Y1wCcDQVQ2xGuWnr526DJefZ8aUh9R8cgMCVbcNe1aM",
  "key7": "3VLNRz7xnZzUrmG6qC3tTuQybwHvUggUk6CwBvzRiYPcT25NUer9yHFPxhsKfQYwr5XWnY1QznT4awcLQdZSj5tR",
  "key8": "qnJB2M5qvnvw6x13tcXJLuR5vDvfjrszh8wQPNQrwZzqVWUpKNe6A9BSCpC9VabuVWARjr7u91FquUiWyxCRZow",
  "key9": "2BMscap7vSPpc23rRMmt2dVjnQjMJeKqGNAs9MyGHyw8tnPPgEdAQLoXVeBwvU9XzBXUUYQaNuoPdYpjpsqyBkw6",
  "key10": "4a5CVTFvydf7MU5gETURHCqWuHjwNridHeb51JQoQdmVe9876iNdNQz5Cg63CmuZan5tDzspS7MoeVns9en6jhJa",
  "key11": "5Ps3jAYGRRbVRJQ89KC3QhWA9f3ynvp6MXUxB1aXyuiskj5iHm7j7MyjuEXKoXjE98MXLFzj8hLiUnS4Hb8uEgPt",
  "key12": "M7REgoN2MncyEa7xRdsnEbJ2XJRZzLBce4y9E8qSbS9JVH5F9UbunkiAK9uzHCjUciiQx8oPLd3gQrSzDgLcJcz",
  "key13": "29UDMctLjReh7XoQ6pZhkAjSHBQWgWd5bsfAFoP7ct6Rve6TmzELjx3VUgbtsJa7j9DB1THXdTcVXtMgYEVW5PiZ",
  "key14": "fQmnhKxCMam1HkhzGaK3eHaHx63sUydVsZGFba91dPwuzmjAUttNfGaiyZm9XxKYVyRsrFamNcg16JmxrXB5x2g",
  "key15": "5KHdeCgn93Ye1pdSjAQPZExriqgEZnhN1XcK7o1LqH98t1a7XdRxVLTyrHpeZv2FAUPdG9BLz2emJXe8JDX3duyJ",
  "key16": "45PtwXLFRFWoBrRfkh61utGfa3kmLecmub9XCaiiNBZrBTLBMfRn3kU49NgHtDBPvT8Yiq5eFQWksRsWZzXZki6X",
  "key17": "5F53U6yyZVZ1msvDqxzkaknvjTqxs2e8zhXuZGmYW6oRpACCjLa2HJHdbaWjSuifJYfTyBJ1Fd9GthVhBhinipsN",
  "key18": "2SShigC4f6ZRa71c9ZFA1MKNzyx3ShFwzX29nQ8yreoYnruYAUGBWpF7dcnpX32V4ccX26afEnA2GRPzdwc4imc2",
  "key19": "4j2s62qcNstyJT5zZoJPEd9eqdoJsLNWv4ivFbeuPWtzYc7xqqSKpfTbxt47AmzYCPPguSgZh4mZDtu2gHqAdB7p",
  "key20": "4rHgCZ8pikJg9iu21C8HAddChnr7a5EcRuPJuTPBs45jiqJdorE4urUfzVRbm9H6iNtg7g7zEjRrWJRYMHrWmi5x",
  "key21": "2B4DAPKFFNehpmYk3jVbthRt2VC1yjPkVsxjXg8mhSootNw8mJiAKaHaeAfgJBHu3pvmUxyrDo5UzKb2U3sdpJXe",
  "key22": "5TZWUaTQgV9k9rFuP9g3E5mGttQPXMsrp9aTZFARCZQyKAVCR3BSvHcUMQafyao8TMHBALoJZMcLz3QZ5cRKbSE5",
  "key23": "63dm2vtGZr58ea6MH2TLHBHpXtxFskeovjiNswu1JnuR7ZGC8WsSTCUUthBNgbqSBLPy6dHTwsNvpmpXUbHd8sAZ",
  "key24": "3AfJqjmzJVPctmh8ic58goRAo4HNnkr3s66d7aUkqczUnBqeqkowEZA9SEhuLpW3cvmJgPCiMzqDzEE6pohb8K31",
  "key25": "4EZ6uisGyND3Bj5B9VAMh3qcpGoWpEsr9SAWpESJi8ms2TDmuwmjCNHukWa8MNupDioDWzKfBuqK6FYwkDH4F6R6",
  "key26": "4o4Ubts7yjVW1z1ht1MGzvPHnrh12ZCKhdWREVZFZCx3uGPh6X48YUWdi4b49paY6Muk21U6k8S39GjaovshHhva",
  "key27": "2kvpwWHvCvsNAs5FKCJgNFy2SjvopA7HDxdHmAPbYkaL47aaJ9HwhotEWRRgmU4GuEm1o7kdebGS85K9tsnGKvbM",
  "key28": "JP5MPqAVdTpmMMsaEsBuc5RFd1on5bBR2DJcS41iTHmt8rf9ZjrsAw75H3htg2d17He5s5eULdLhJpbzQKiaxie",
  "key29": "2mQezFPLWVzKDskWKBVZjXkY5xC48XKHuPtW7t62pbHSwGqhaegt52z2ZVp2Hwq7P5XGTpaLCZWM6Q2iry7mRMd9",
  "key30": "3cQ4K2nuhL2A4mhQ8zDCCy5j6zXH4KTsGHXvM5QCrX3x4PyECDmFA4suQmf1fToLdJhfaSgh2AVW9HQEwfT5tmB3",
  "key31": "2SV57RbwLL3fPyw5UmNVdwcAvKeV6MEdpe9EpVC7oGUNSmUQ9VxuaBLvg6xYJCBGhUjHBsjjkLjK98JTe7AQyV2L",
  "key32": "51UeDA3nFwbUKV1u1bFguY7UmbYQiifeYoR7zKWvSYaJZ5Nju2ts7nT4mFzfrMs5PoxSyKxpmCuyRoec7Wb8UNB5",
  "key33": "a4qwx2ggWZ6s4Ge6DJaKp7RSeBewHeiCsheimEax9wUKC2Bg8LAEntXzuSEKEZWw7KNUfoG45gmZ89XhfBNBQhH",
  "key34": "3aqj5gcHLs4Mer9PoM687sDGgrTh6srNsA3h5tJZskdZv8CdeGdFdJpS8nzdHC6fcD31ekcs66YkrWjinvEr8oWj",
  "key35": "4Z5WNj5XY3XiaHzyZbD4iu3cwEATFsx8Tivhdx49pQn36oJJnrW62qd5rSxNbFfi8jrou4CasKLpB7LnmktCJ3PA",
  "key36": "21uphtjk6NqR1XZqu3g4Cm1S43AkiaZTR9yHMXwd3mADad9JfgZdCBQ8Gxe4K8xhHPuRbuVK6Uxa4YdZLYkcuHnK",
  "key37": "4vfZ4w1vEwbmuigToSLxTfC4ojF5t3h25dFjozvW8iqpLC9pemZL1pzczvgkGrEwPL58ubTQHtpE8YoXosZKb4Cw",
  "key38": "2inyuugz7Z6vpMraFbaZvTepUTEJ1v8djXYitfVTogE5M3JHg8yyhUEpRYCkCn6Z28PaTytCCCk3HhyC6gy5nFUS",
  "key39": "4tsiE7rnACcwyNshjefDiNQP6hAMRGM2PHDRb6haqggqq3y8ez1HVECVZPALuyK2TvhyW5arqhUm558ZfvSG4oq9",
  "key40": "bj3BqEMTEsfc8aCrKzqWNfK7CyePWs3bBRUvq9W6PPupB3tuNEmHEkiyyTK7traVizu5GYkyuauqrYHkKwpyqR4",
  "key41": "tZAAvHdNxYdDyMJ18kB8ytB4JALpb7Q2RBsMARgrYp7rWBkfEY62Bax6tJq9baR7mDzW6JwWKoQNsjwCVCYidao"
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
