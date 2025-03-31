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
    "2Fuonh5GE1yFYPWxSSPzmv98WS3vZ4VwREuCAiAU6svtqhdTxrnmkaQRdK2D3yJqUSgra4A99AzzoPakY6r6NQaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yCKCYPCDahLYD56uwMYM4H7No9QPWLQRVZZ7dFG3jLYFpBc1E9jHVHYDqkW89v2kHGeMEVDi1wM8d8QbQNnnbVt",
  "key1": "4EKmmP2Cu3QFpX9HxNasgBee8rLKuh7ogzsZixiyh2MJHMXECC36NeWriKPBdS1evLCwDEYKvDPvGeg44E4A1Xru",
  "key2": "3mtxKJu19iu3nqQznv6xztCsyPz5FMcAmz4PhgYR7wwsLuHoMeMbwRkmbgZQ9GGX1q1R8TJNakYoLSfpVSC814q2",
  "key3": "rbiy5xj6Cc8G9Qxy7Bbh7auzzWX7APTzinnsFQqDnRxoMvL15DCGE2FWH2pzo8FscubahTZFN7M2Tb4tLpu5k8y",
  "key4": "4cHE4ERiZiENNxkqPQM3NT5n7tkW62Q7yp6cRMdpZDNoARDRxDGpfPTztp1pDJZFEyzQnepWoACbGcW3cBDDzaKt",
  "key5": "2Q2Lwizh17GqSMPoJUf3UZe4dkMN4j3K6btaVS8TLz9yo1c4caUDYffdFH2DcQZML1gPHcX6VKxhLmNyAjo2172E",
  "key6": "5bHx4xDbsiRYfa9HS4pcZtxy6yDH4jhRwKPQPZR91yTFGAs9g1y2WxxoW9rmQWPqrpy8hqe2jc63WJiTGBQtt1bZ",
  "key7": "3oyiH2q7QwLW2CtYi3r1QYZmiCUPU1CvXW1ZEFKLeJue2oJsTTEPCpTnbTVEexuekbCVVBaMfSZtTpCrPcH5zGbW",
  "key8": "5i9N1bC1pAsLBQ9bJWoH1Zdtvaogsv4icHiuWmF9ghsi6meHxYtazv1otQg5oU4Psc4Nag56HqPdsQCpSgStY5jH",
  "key9": "53c7uWgZvqdGw28CRbtB1a8YZRu4jSryqBbDdDtQozGjFv7rYFiJcVdCnZqKP8MyKxa6tL6Kdk4tCUiX9RBrSEX5",
  "key10": "38eGeKstCzWT7M1Gwr1vAbcaFaQ95ZJu4YtqsvenrvYH6eVQ32uhuWN5bh7e8hwWEwLboMjtf2qpv9qWW7LTg9PZ",
  "key11": "2Q86uf62T2jrnLTvSr9v7J35bQLUsjDPgu6Jq4d6cpioExKrwe8QT79xh1CjPMSpRMmEkcLcaHpqma4EHMSQ4775",
  "key12": "57nxTHuMAuK8jsMjq8urZmvAGyuTKiofoFeVmiwafT9djqHFTQpF1s1ZThxyVtWo5SfD9vKJmNrS7unWk5A97mJM",
  "key13": "4xBHx9VvLB1yb6i7Lymp3zLNWbSyqtu2LUPxotUAayXurMxH5BdexKrRozFzn3zdfjCfVFGREFXrYJvR2vQYyhpX",
  "key14": "2UqR1n4KbFwCxi5w2gpLwfeXGz5RhDFeoQiiiV7dybEmQXXYBV1MxsFbW3KHrB8S68C5k2jkTfwPqdRz1EzcDUBt",
  "key15": "4nUGDG2FAwMbeRYP2rgEGA6kpSPLrxY794PAJycNgVpE2LzCN8wMn1ogpx9FDqpEN92DCv6zXFumuvTMBHcmcNL4",
  "key16": "39PtLvAUxQEwB45KnMKRuDHr2EwYwHnV7iune2EjTA3RHW5wi7fcfBD65MQsHFSUbYEFzefz2ZegvnfFDcwrWAih",
  "key17": "4wxUNCKsC8LwwoZEenhvxgZRV69AM5ZQRhTnJjfGSiCdaJuFDyMqE7gUHgY7LYD1d5GFkTgMSXE2QJ85hzBUH1Xb",
  "key18": "5R2dUtxHpY655zWX9yqtvpFczTCRKWs68mo91NMdzAykkNNsqhEUL823Ye6u3EzA4bc3d5hsrvfwFKFJuvyHuFzj",
  "key19": "4HDxmC4hpcRp2H4iDEa1uPGKEb8RqiNEaUcjg1W7xxE4RcWoSXWZLVby1sybeoqDprXFkMKTRgw5iNFaUNkSqegR",
  "key20": "3xmySeub4C1wp1r6QNxhPVt1FnSDxbVtvwV6BtKEFNfQ8NtzW2S652huBZKBRSaux2bRt14Fav5QNcER77y4Vh1g",
  "key21": "6tZ6VzfFYMR7nmdhDyTRkxyW7YoELabXbF9YnUS3zjEAvKLixYRZfd6wnWkw6zwPyEmiFV6cfzezMfc5Bmmb2s8",
  "key22": "55FJq4GvydxdpNkVLAajWsPhbY99ZYgeVBd9rT8oHQPwEGkCB9bLAyKY8nSD2F94ocLJAsGpf1nogUnnCHNn8ZT9",
  "key23": "4WSHU6CDG41KW8NGosR89yugTG4McF1B5f5gkYK8m4SmXE5TdFSzAXVTmPwBaX3LHAcrRPuNVh3ueuVuu5GsYAUE",
  "key24": "5c6croCVJoaxEp9w85zr1WBc2w91NUXSf65uDmkSGEgpyZrnRfb3e4RkZVhTgM4Tbz6TVT8xEm14mxykkizppiL3",
  "key25": "5S1jUQ2MDhfvBhxD2FzhUw3SqwJssW8RJmPQ855tkLfjAi2hjrXjR3G67Ey3u5EHHqR3th77DbaiTLb7WuBGqy3Y",
  "key26": "5dQp7b8X98WTSDFmbqFCAxdrA1yyjbkPpF8eKL6uAzXA9uerzfhRM6ifERVK9UjJM4cDBVACjBtDGrmAPEQ5oA6C",
  "key27": "5hzvwCgZovNFbQGo2seMdoSBeV2Xe1U4LYA2G6b14Dhr9oCAdGmx6d3TMLhJui95KM2ws2Cfq5dbGqMoCUeoqkZw",
  "key28": "DYame7dmCE9RnXh19jG3F83f4wG9YyGWuFNuxGRehwYLzSoMqfXbRrLWdL45ymwwV4ZXYEpm3xgcXSqE7LPz2iQ",
  "key29": "5wzzsyoVrmYSn9pxXWjKQgbhWM99QuSkFHqwinCSNgEJXDW2YyQcm4jbj5Z3xr3D3xu8YSZQ896AruBLT4m7VnHV",
  "key30": "eLD22oUhqGQsXzyFjBvk1SW1FsWzbL7SySpyRPVdWu84ywTKSwmAaXLpn8n6mVVPNS91uKqVzhqucUWwHkj8DXo",
  "key31": "5z4HG4kjLeXFda7aodbJdDcMzMPz7MvDkQfXdBUXJXUgCKjF2LUcgrBYhaoruMyzmzujQt2RQDJuRKoQMrhABUf8",
  "key32": "25MnNiwXJf1Efzq18VJk5rxVR2meP1JbGPmQkWUfHKsxhqRVTD1o3jes9SbCN1x3aswL3qAXUUuRB37ZEBpnQBox",
  "key33": "2cZuUeVpme9sppZ4tCHnC4akXVAEHga2PrXPuSV1P6VXbskWixXrDqaoGsWwsLiM4o7k3MGGaqgPpL1M7SUThQKW",
  "key34": "2HQpxh6ZhS3NiTgEt8qmkE5Epv16KqRsfGAhXtBcSoa2bPyUEUJpGTFMz5DSiQUREZqQNeWdcYF8gr4aEwoEzjgb",
  "key35": "5QJSbQVjRMGzC3bc9nZtEygx6fgrAXKmvLWfPDMdx59ASpxHHSZyucFW23jV6fKscdVCpfLpbU44m5m3VuLoA1u3",
  "key36": "VijMnc448CRnskd3sh2ZkUsjPg3de8qdGGHubqGVYACybfFoC1kHevdEYhFsmqTgcFHab9diGCxKurocUge5igi",
  "key37": "2FbsdhsY3KAhssxDCDDNPtz6ieDgZfzDaEoLASCH735DwCCkAwRheJSRdq8WFWhePQx2ExTZ2jV56QQS4mAnth4w",
  "key38": "VtGU6fP3aGV96vMYe1dXYhdA4h5SaH2yojXANVpiLak4mVR1aejBGQTJizRjMVxSe5RMx4obt7jhwzHYtzoRkPV",
  "key39": "213hPXbCsBkcc9phuX42qiehYrBfM4oVjdCEmoSK975mk6YXmU9EHGg9mMPHCoX3WYKYLWHENYVDX88dH365c2sm",
  "key40": "5SfJpyq3LppNbagRY9A5Rwmq55urjPXfTTv37HGkMwTUfwzxL7hXRQYRVeadFSuSgFcMF7gaHvvmh3CDaPL3MwJp",
  "key41": "3PgWyerpa9dSMtYcXnFtvnt1nHxjxSoERwR1AZjCwiAMajMgsGd3XRhAEiPJtopj45yBoxrCT1MvwsFwgUR1eSHv",
  "key42": "3kGhyxmgnd1m5TvfFd1h32sFEeBzkxXFbWCo21kuNRH8KuMMB5kvxtASzm68ETi9Q8RkCsnncBiV8FApJXSnBP6K",
  "key43": "3A8yvMeZSDjNpMPsWXhZGueV69D59gExmPHNjVigz2cXwdnj1fqkTAVk9w8RX4ziPYi8Rk7P2Xujkv6w52qacdfQ",
  "key44": "5w8YGkzU3BH5iZ5FvFsKhiqNxzAqnSRMxShypXVdFVQM8tcmt2SihF6UTVXRRokZmn7vDuqxb58RqAcEJEzp7J95",
  "key45": "4Xbork4ZkDsGmyp5ZbvXFD98WUhRY9n7VkVUnJV5i1UDUPuYyYSAzFM7g1B1f1DcXcc4966ECHBBJfoFhCpPowN8",
  "key46": "5vcgy4MBkEZc17HN3DhohK5pL4j6Xuz8De9arUeyLFkfehAGN2Lihyj3X2cub1TimZsooS4SzdXqhPiqDNML6mFB",
  "key47": "tqgA7rGUbU5R6B2hP8eoVfutxkzJPppguAMsDWsN3c4girNe9JLYLeEj7rY2MiABzwfFrGDFmYdWeV3re37kjT1"
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
