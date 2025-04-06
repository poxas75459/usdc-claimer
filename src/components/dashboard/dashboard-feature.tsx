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
    "4QRdi67uM2BJxVJpNqqUJrpHmtVA14bMj3zG5mgCbyrAZPQojeF9bwi3VrpZhiXhyQK1rgeZ24LFwoTrFqFNp79F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aqiuj1bhPcaWMcMGa23uGLwSHSk75VrRYkJQBBcs8FajJ88XtbX5jVEYoTNV6JYjGcU5cs5pWstqnTznRNVz2XW",
  "key1": "4WqtqmgXgargK7jfaQn7Ed3fCFiX22VentFnf6uvky37xKpP8A259DtMy7NRrBHyipkxqGZTaSzisxeLwbF2HEn2",
  "key2": "2CuEnmmhENFLYaCsLvzaQvoBpbLqNY3tNzyjpRFEAS8h4fN5ioe4nxqhqLSfVBeRim8bceHM6wqz2K5NuBT3E1Uj",
  "key3": "67TffeJcCANjuWMRJ7p6yQ9ujojsrX5FKYDh9AGG649tcjDQouuF85PY38k7ax2Q7uigMFDHC6A1cVx7uW1wFWSr",
  "key4": "2RmZ6U4aZoTCibrpWSJ6yEhVjmhs1TwZuzYeYUAsDRyooCYcbc35MyapCfB3XA1yG58usd268RNpbSgWydgwpLz5",
  "key5": "2rg2cy5xeTEKy2R6WCBPjW3BeNN9553pvhXjRP99j37SSmwAfMKtk49r763h5P8kXz5yUsLHsHBeBHb63hQAuPXE",
  "key6": "3bzrFHx6Y8EmaUhMUaiBGyr47Bavx2VNpe295gb3g8rRx2Zr17VEmMDVHfxx1AbeN5m8vLv1W3xcgUjoh6HCVVqg",
  "key7": "4v9kDhxNGKAkjuaG6cg1m1rDgZt5axRoxowsWwFzaqjLr6uYjBFefZu6wAS49CQXWm4pcz47kpUe4y7Qm4mBNP7R",
  "key8": "5tq1naLUoMLoxERJ9tQFY8eqz161EpwuYSAVeZDwn8d5D4DdnEkzbwvN7QNrr4QPZgF4j1CfJX5bkjN6EEm2csnw",
  "key9": "2ZcY2dfERFGRHc6VTbYEUVLtco2wqNPw2zy9peM8gNer3VLKeCFqfifi3Mm7oT1dCxJQfGcqhvcUECjm8WRbes8D",
  "key10": "3twsFaqMaxpaswxQVmxPAk4Kqnu4KNATonK84pKvgo1AN4gK54MqohZKkpQh8noBusuNL2tyXBhz3tbuudDDSeMi",
  "key11": "3KqiaeBgqct2maWjp6fNvfLzdgtpNPFAzddgkYHSkAZrbR9DfgeGk8zvuVUC5mzaiMFTZM1Hdr9sMro44pnmY5o9",
  "key12": "2XLFmr6VvUw9BA42FCqdtp7DXu1P1J89r2eR1CfMfAZzqNT5Dcoq7r8xH9AwXVBvprcXEiG9zsuYYBmjBvqDfyRE",
  "key13": "ux34kdaeWxUGkR7eoztB4Y6jNmQhQaC3Xd5buQtTexhRFkScEFX7efqV7726ECRfJS9oAXwknSk1nHzVqEPtkqV",
  "key14": "2RcVvA3HKEeHSzrcCpgDy63QHDYsJv9HamsVd3RMyj1F56YvvFZik3xM4gkuwrB75MKg1kpR137UaYmsGig8cUBj",
  "key15": "3iDL98DMyuyuUC3EVARxa3UGxYR6qhWmvDkGsyKyMKvunbvsDCaZpuz8v9Lun8KsuWCEjgRYqpzzaWj1iQSkocgj",
  "key16": "2eSfQakYK6UuKMwKu6hy3QyFJLHxYoTJukjMB1f9dPQvhCPUwVbfwjRyNzi3YLKgasyRQ56ZSYaiJwa8VkfSWxQx",
  "key17": "yQdUoEhvXQZcxpN4RmbsQs8MfQXMUNYzCoDyXLeoxPJKcMJD6kJArmufdsAT86pYBddgxV4XYPJU9V78VPCAsxW",
  "key18": "5ieTX1UDeP2bapNbCaVmJFuH9f5TbKcXvwaK3LtaHCJwn59Q2pmWEkhAonoQQapGvz7rGhmMnrpAh8xGWqm31kr9",
  "key19": "3YuML7TRPLA3mH5vDaLpBmB8UJ3C5ob5szuL7VpnVq99NG2nNXPQw2LBVppD19xF9NravGEr4T2i53b65TvyFJpu",
  "key20": "5WCyE7aEQKxce3vVVv6uhH6oxZDtPtiVvZ5QxquuVTHocdu3cjp8o7TzroHbsKsnrq4g6DEbNNU9qMX9vdXpYktF",
  "key21": "5bnozWx6fgtekzQ91ShawHq1HVNCWSeUcMN97Gc4QkH9Vq4tim5FkaFoEGRiBrNp1binQBgvecQyr7wxRh8FFM6g",
  "key22": "4V4TkfwKcUTFL5bF2MsjKbvm7kc62AzeiPR6y31V3dgqtP7dCj6HWtXPSMKVHz5KgXFrJw6dwsxfwS8fCkUAChja",
  "key23": "5cxGRbdzyeDJCFoQWPDi5GCU66aZn25BzD2xuUNEAstWa6GWwKaHmjjCvxW6qv21ZuT883UPoKTPmTx6LTwKVCkQ",
  "key24": "4c81dxxydEHDnA4q6GZpveKHWf8WRweDcBQTDebotkuDSZbPobVaNkXQzga6s2jYLY5A36F3TKF5tQBkni3ioo9R",
  "key25": "374EGZR2RLzH7W6UiSJK9uaTx8unet526zX3BDhGhozwzvP9uG2SHya8SfCXRcNQSHAd5v5ARkGNQVPn9VfrUoaS",
  "key26": "Z9XCi4bJC4EdpMVQFMb4gXmAo9fMyQzdMuqGtQ9coJrXystiTvo18WDJ9c95UHDsS7wezz8fuLsQMuDKxVevjUj",
  "key27": "2jeyFDzoZbBuSdzd1NUQVMRVSmUUfGJfYTsK3MRRUZFK3JYXPr9AZm95MsB7w2H47fLfytahx1gZxgFc5VbxRW5p",
  "key28": "5S9Sx2ym2UjyMiQ5LyMQFUL2HBXTLJSersTAMT9whyVfJkY18gRXnoA5NKFthQYnKsDbYmA3gE2t82qE5RkTrSg9",
  "key29": "45wJZmmLcKrrbLW5xdU7fQ5PceuvywRbu2RVNQ3DWALZFTqbGh1A4ccPCivLMDwFxdDtfCzYh5BVfny4i63Y9Zcd",
  "key30": "2hgcyqqzgM8eqLH9ez4uFxTP3xR4u6YNSArgG4o5RRtefrL2qWQWCTEUPamXNM9uw5CmQCF58aCnyMfnCvxqZ2RH",
  "key31": "W9yfrkPaxwboLZvmCcRSAKZ7GV3p5CPttjZhyc1CwxrUXRBNsqiyvtUAxUYUbcG8Wvnbqs8uXNdhwMaiU83oT22",
  "key32": "22bGES2FzKa6fpBq8g9anUpCTXdMp3Gjh57LDCHedARYbBYH7Awkya86gX97vk6xsjQYa2iMTmvdNU7rrChvzwaM",
  "key33": "2nFvyJWsSUYkoiR1dZzMAZKxoH4dkjasT2vKmfHbhUdiy6C2rsKxbxpnmJqXVXopHuKRwt1k8uqhYyawb8qoeULD",
  "key34": "4dtXxzD56zWE1dCD7bo4srdL3D3BMiZB3ZE4LAGE9nsAQgzjypBTnaoG27dfUwHK77VfaHbPVpv4bzEyPiwfsgLW",
  "key35": "3N86Qokn3m54ZNt1fSx6yUbMXkCfST286Mm8hDthknHoQXBHt5QLTSUMtNZ782pWcEpJpvahkhAuZk6yVxm9ifYn",
  "key36": "5WMPWHYrJHg6tj3noFGj4h8awo3rTb8BSC5L8AcE2P9oUkqRuLESKmDerGSZjjc16p7ky5yV9DSHrpWVeLqasw96",
  "key37": "5dvW7oToeZctPfAz4hzPLkoqHTSzruDFDCaE18nGMREkxFf7SKERmyuE4nQFkfePorUAFs5bimkKwyHjdgBKYaK6",
  "key38": "4SULngKT3LJJ8ZgpZTu4L5HULxdXNXRc7hVQKN4ExRRcJ958cgUqPVQwgePCcVpv8qrRr5haetN9ZUsa9fyBqdfB",
  "key39": "5ykGsVprJzKdD91iJrGrcmgNd3voprRCQgzqKf412ZpENckUKm9F8xozru7csd3or24kBHprpXTw3Yg3Sxp4bLw6",
  "key40": "5Yvpvh1pgxhwvdukN3M1sCVRcdchEhZaf64vSjvtwxPLViAFaaAwM8dYcV6GjZS1WN4EMRyi6uUKo38V5VWr9h3b",
  "key41": "xMihS3se9Hk1TTCMLnohsaTyZwZMTisBG6BRi3kMHsaQjCoEYNmFhAq6Bt1ViPGR6kv94w9jJNbNtDAC8x3zWDZ",
  "key42": "3obAG3Vno6EuzNcPtgPHhwngfT4jzGoUGMYQX5FmU8f5YbmcAwu9QfpRVADnCdXnfy4mWCym6qtdsvQM72wYywB6",
  "key43": "4nhGBvAZq3WKhgPPh6hbBFwupDNQnCkDpjafzyCgAmETWiXh4CuLLtDaJowcX94SYsNxmBE9LzEGLZFduieqx1xF",
  "key44": "5tp8GdkMaoehnbAwQ3T4aTuhcwJvSLPEvtkzvuQzRSJWQ34AxarDNSrLCjFVjFUsV4Yxgp3Yad5AGp2fijU9FEux",
  "key45": "4kMXGM3BzbmmEcKUvSwCFBnPD2kyg5dSFGWJ3HFSLYrrdqaFym9EzCZE9EZqUuzgCkmtDuUt9ec8T49aEpwqFzWv"
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
