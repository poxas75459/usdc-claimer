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
    "3XN3SMxcZaUdLcSmnwJbHirhnp9cGjFN3gDDwqJneJYXrzQ4Dgup4CCXqW54fUDqQt1W56bzXRndFff7Sb65GQnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xZn9KUV6jyQbxJkhThvLqYUb1BqofH4EjRKpEWZcMC8UBawfhXM9XS6U5mtNErywtCQ5k51AaTKJpCxqrt5K2mL",
  "key1": "5m9Bmet4soPWGhEQTdAALo2YXHjASqNH3Vzg4TqwuNG5K99ExntC1G7GwV9gq4xYCubsmAdbZyDsjwQzYHN9vy1y",
  "key2": "3Y9kvfKgzZMm8PAu92RVf8HFRHGJStEpxbmN13mKJsqvnv1FZfHDz73NHnMXyq6Tn7BM69ZK8PTeoa7X5XViLL6F",
  "key3": "4byffvgoFzVwZiY8LXjFLwMpNt8X5MVExA6XBzMmgydJpRLmsADRASoaKLoazBbiEbANz9iztESnk8BoBZJkUzuF",
  "key4": "36JVYtw67fkMnRkyGmpdYtK4qiJ1H4BCzexzXtQSDZfCJXD5fZPkH6cKnpfxRGsc6xbfAdJsmELCJs4JRpi3QDCV",
  "key5": "42fCFW1QgUfBc7x1gM9kjikHc7AcXxv1n2kXcu8NMp5TLTFoJY4rAef4SrKwGo6t4qqFRmoG9kruJNKxPsbXia5X",
  "key6": "2Gf8ovP36a2UMGhSWcvkVTp4UFx5CnFGHkR2gi1MqHiKEwFFj1fYus3Wn11VwvMU5sxTRsVteat4vrnkuNg8HbNM",
  "key7": "4bCwDDbtBUcoQWJNioFj71Sy7ddugSQPTRnoFE5xksrJf6TMPdUi71vg5xEDBRkDrKcBhdZvaMBWZwYkruyt8z2t",
  "key8": "2WKQm8wv9F7mDPPPc7NG7D3tyojta29gCmDdEj5irpMrcLFoHDEAYSajDk8Yr8F9F5JFGkv1z4ULRvwcdBo1jtx1",
  "key9": "pt7xQvFjRhQZb1jZjRx1rwFqhrJTt2CyJky61hdkRtMGJNyQMayiFvbtoGkPe7rWLRkAWgRLtGf6DWo1Gb1dXVS",
  "key10": "ZWpkALhGC5tkkhhQtXgpPKXji6XM319GPQepNuk8tiKoZfBwvSkKRG76bXZxkD8neDj931e16qfgddBM3AfyTaE",
  "key11": "28ydLSLT1xLd5WrNfNLiTFwStm3Bv3M5d7xBY8xbBLbSsrP9n51yDxag5iNLpkymqTXLaNW9p9gkwpY2wRQMAQkZ",
  "key12": "5WpmvLQEd19Dkjsski8qeGjUUiiADoiG8Yxx8UuAWR9eXLZyW7eShJWuTRFe8carzYrHx834dSw2watkkbKUFRhS",
  "key13": "7WPBhvUKVGmzB9biyA4Tzqf3NgrWeyUTnor9viavuc23aYhFmyZFeEsxBzGcWpaYaQJ5Wj7N2o9nBh4CrD9wMzo",
  "key14": "cAo8EPpwxWCThQELhFujKECKygx52LiChFAKLUtF1RvUvFf1TD3V3nfgLKobKEqygpTQaUMauS6RL11P9gp6Xem",
  "key15": "4TpZgLNcY4gKV3ErHhSPiiwA7GJuAAJeyb2FZkfWxiPfRRxFRd3bvA2mHj94MdaSDEmRbuLb5YBv4SKT3e1kQPpN",
  "key16": "61BkPbnuwPXkCSV1G2cgJFLWGqspYvRjHWGe3FDXbd7UhMbSHAe35EtVqywkXd98QLBtiRiHFhDTyN4CAmDCW3NR",
  "key17": "5JXV5GrwPUb74iDusxY7uSSQU7TTv48yAFwhVeZXsYkm8cQXbUCUVTqvA5aVo6puBThzNavrqfEkWD5kVLiTavr4",
  "key18": "j5ZdRYJTLHNeTU1d6c32VHfTg12956G5Q4GuWS83BsopAj6JHPJvrEuKHKqeahKjL5jabsVnJyKssTHEwbnCYNs",
  "key19": "AA21Ti32QdZcogf31X3H5LwFgXujNV2Da7WKAiTUZVCxx8y93qj481YH9ui6coTQaJtMRri7RcLvMG9LArA82Gg",
  "key20": "33WVWp5HTH5gyr2oRQb13gHujCYFRU5sBgXiB6WHSRkG12bKwrwbQ2waszY5k1VEDGXm1Ri8oGVcPpsCB42NT6VR",
  "key21": "HXY7CLSnZ1w3vTiQeejuWbUjbXTSv2M766qjNx1Ug9SHvUxw45Js11HJiHwg2S87uu1zZyjtymufQfXHKCiVoYc",
  "key22": "51nVNgDgHwAh8N8jFWue7mzxZPQCsb34maEiK327fBuq8p3Rb9CGRvrH3ss2EpxHeEGcoMXJ41RoxGZVg6pQ8bvo",
  "key23": "2rUGWwuzX3TR94dw6cNVVEPwtgtuM7aj8AdYZBQXVHLFfCGBfUENRK9ZAx2zuikR16SoJcFtyVFzhKhFGMpaZpGQ",
  "key24": "3DhFCGUEsxH2rP3KXP15AeNeEt774EDwYnMgXrpbSbhAwXX3F3PVh1xXDw9t584s5YneY7eSc9EZLYkoqHEGFJkz",
  "key25": "c1WSMwPYcpzBEZpYWmohbPcwTNvawXsnRUkC8Fn4C91tGUdeZxkWuShJapP86pkdH98hAMW5v9oeTTHuHemtRSJ",
  "key26": "4vDUszMBL8G1wrZmF1checaFra2UqRgkRTnb3X7g2T4Vn9USnEhDq1kPanLC7osznKnC3JbrFs8n2zSQ3E3gQvFE",
  "key27": "x2ViBUSjH1ia8Urwy3d75ZR2vJgcbg2uoTW38CA2sEgnw34tLFg2YygMwffYz2ragG9LsPLfxpL4iqUgd1nDBmE",
  "key28": "2ebv6cB7RCqKoPWny3NLXbkqDqWmTJU3eh2gTVMFv76mtNhmCa3A3L7sUD23RVnHUpdYjGmsVsy9QQ8FCG2ziBeB",
  "key29": "21D6BwtpiWcy6LKn7HHDdgBNUftEbMWgkFdYoSuf5ydhmG62B4omyFneXBk9AvjjbJG96npFKMGk7t9Eur7orDCH",
  "key30": "5LL4BZBD4Meoq1eAgZkXawp3pRn6xZGkSUJgCSqRkJHscB3nKFz1rf6NX8ru57vnPSLYLqFN77T3ssuDhvaJj1nZ"
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
