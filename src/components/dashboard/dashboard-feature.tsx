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
    "29BnGxhv2MTS7phg8ovKRt2pRgniV3jLo3mJAUjVPtzREdkiHKwXejuq5mVuKRVY5XF3pUrwvefSL98zywFJM3hQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ettceGUVqY67pkPvzSwfAVVxuPH8k2nHADYkbWNe2hGsNfXoxauJzsCfGsdFGvGpT1hNr1UwqNQYZHaZV19vjhR",
  "key1": "3EWAbzBhkS695vg6CFcNx22Xv2f1BdX3Q89FVevxxhbww7M2EBWHFEtPmwxKwDNKQRPGp7HgYdij43NKytQdnqre",
  "key2": "4kLG22BC7ikEWyQyTaYoRJ8cT5a1412F5qzQeQcyfYCHNFWNtzCFsWDGokddKuvQi5cHn6SzezxXhupgWDXmUn4z",
  "key3": "2UdXLSeQdpKSxXLjzoEvGC5U47GTnu5ysnpssnussw6mMgKu84fgLVz8i8XDWwrRcyDD1uL5KR9ZTsBv4DVrWH3P",
  "key4": "yZ5heKsngGLuwJDbJCDvvV3JN7TqaBM663V79YdZL2FG8oSMKsnwNfCeugacV4C9GfBekP5fT7QHs1aSwBMjiWf",
  "key5": "3opN4w7FwJyDxBojkYMbnEs481mKCGQumUCKL1VttvGeQ7JVvMxZpsSqVGec8jPVxVPQEcPCA2hLn3mDkypZe7Dd",
  "key6": "2UhMrxNhGmq4PiAuhCibuzR2KhCrbeGPKBRDUJGUp73YVgHyWXcznxBWpvsWRDWmqpFXCqHTCGQmrsjEHHu83156",
  "key7": "4gwNgs3ZMYjGGuPqqfPhEoTzNDLYcPtPdq7kNq5efcUwbqs7rbBk4DywuBUTwgWmuYUqnJHhxT7vA3RfhCVrdPBN",
  "key8": "4BB13DJuiToQySSBaP77ecsrEfbZeZji48fkKXmtSZqJzSBnjHuSAeKMxqhvJ7SJwPvWPgvuAQZeFDMTZBnAetZp",
  "key9": "3ERAiRq6eNHKbA9nsHr7REF1hS3seCjwEQfa4LA74DgfujAsgtTsKiNAJ89qerSNCtTJMi8o1pDdjaDToJCJnBhG",
  "key10": "5mz4EhjBTg884vzTj5AjQJF8f8FYL7EY5UrnJaHU84WJRYDtcFCQJneiwDnfTrMYjXkMnVwhRUE7sSjG5euztm51",
  "key11": "5v6YCDfo9LDXELV9tVitz9SQoEptPg5piHWXysRj5gFKjCBZ3NRXmyh5AjQYbRFrznMiWh8g9XrBhm6U2mzwYyUw",
  "key12": "5RfRoEpLo8SrAt7prstjxAuCvFoz6f7vs69TA3WT4hmEtpKF38e1tvG5d1mN2Dg5k1pME7Aepocwunho47h9W4G",
  "key13": "4mrTC5HN1pd1GWSgWXgzweYm2fzKh9Qi3W2BcPqMeDTa4dBn4aa9gdHLRJxsdZVjsXDVd5jtAAaYnQ8kZEcRUVEC",
  "key14": "5uBNmBq3U9gok6Vm5UYWmyEgjL3ynnmoYsq4Uy1q9yn6zfk6PVDDr55krdRCCbPtLKY4e5FB7VbPLekpck1WVxMv",
  "key15": "4RysTh9ho4uqh4YXgU6VVejHeih4j4yTKyi6KkxYPHGJLEfYTsQ93U4EAjQGWZbuBdU4xfYQqoPmjupzn5XRT2YW",
  "key16": "3JasZmmdn18LEndbto2EaSr2E8GSDfSqa9nfASY3wYReUtNoc5E84R7aSxjgCufnyYyo3Cu8mLLgxTUKMAhBKdh5",
  "key17": "2z29D6tx13ts9rVSqHWSpziZfaSR5JcAJjhswmJwH9gR2zm63aQp9Q6KnVhUbPEF96HTPYtZqxgXknnN7EzofgJz",
  "key18": "5xuciJUqH2tUsTQGaQxfGUGMTbQQwMt3xsaTNKZ2T7wY8ifyV1dRpsTasbEvGvKZ33QM9hCuBrKah1HunT8XTRBx",
  "key19": "5dxpjaKnx1YPvaBfbsT2te1VhKN5LXxJNReGn65CmvnuT3PwZ1x7G6XoEQdB3tzsamrDAokPMsD2rAjPk7GkBbz",
  "key20": "2cp6xgitP3FZJyAVFBVh9KoBambnXZdwsYcWjbGMJvZaLjXLg12HVePVCyE817MzpPvc4eFztXNr4pCgGXoY3ZRQ",
  "key21": "36FDSPJtV2xJxUmEYR1KeEteAswYe36TAMqeBiePibhSuVQ1DzD2qtC7XanGqqgpw4MPCeU2Vehb8rn9WCN3ijTT",
  "key22": "4ZVkJP6Re9bjM5QSBSwv9ToPzzZLftoxi88PuDYrHyAv3K5u17KRSh6nYWVkhSfKy4wX3VgfT11BgK2hALR7MZxx",
  "key23": "229RaT425kGbX5M5cck9LUdZ1vwHGsg6GKsjkUsBFF35ZSQi9dUZrbxKDxFQ8WKU4464AeRbp8PcbLFC1Eg1e4X9",
  "key24": "GNUEC12Dnwdzj6q8iHxVZeunqHNj7HBwRxiLkP6Vbfm3GXN7z6SS7HnQ5vZZ55TYaUPQRddVuQRARiqRApu8vWz",
  "key25": "35J9j9V9JnDR6wefZADLWPCDcDbAdguSnR1WCqnoutbDbXQADdSJsWXD9K5QnmhuyMevenheuBF8KgTNq4eYU7Cq",
  "key26": "2GebqeyZfuWZBHB54MugKRmgJ21axzY6dCE6HKgoXPkmZFkPbrXFmohAQfoZVjbCUL9C59DBfvYSAXhExzRCEPqb",
  "key27": "35AzaN66cwV6j1jNALmwLsJwuHLjvEM5UwAdoPkEUQ9Fq3zsHbESYiXKL4r8Ux38StFnWxNjov8gpsG9gTqNGGs9",
  "key28": "3suNzbxijF9mH9y3HbWz6MnzcKEiwREUFxUycLKmHRjSsgbYcUEzbrnuzDhz7GpJJdsZaao43fbZ3TLQ5VY8PiHK",
  "key29": "zcqrJhH9mNRjjHiiRpmKgkeMguGeyGWdxjhtFioPYJ98upEks5UEFetgVknt3RXbaBPz4YEf69ahCTwAnR1xb78",
  "key30": "651uGRUWfuvDyECvvkCDbcdkB4kMVh4d7PwgrA5rq1L9TPuqrYkRwdM5EY79rCp5vNu7z8tXtxGjWaEKsxJJnASU",
  "key31": "2ypmg6UzGvLhpBjWRmDjMmfe1b5W4yRcRBKBEQap1H962dQyMsreDyEW6d5Ap69eNhmT1vsQ34GLHEsMRw7kq6LV",
  "key32": "6NuheXxAVZotRUaJ5WrxUs8UiGupE2hiAHHYKpBskPvHaCDZU7iwTFX637bwmyTbRMgydGeMSXk4UPVfrhtoHpy",
  "key33": "62B1Pka72dhTT5BejY2TQyKhKB4shMNmBXLGtUd19815XaJgPUZx92sns32jwy67C2xeGgCCyFjUXS5ZmD2niMRx",
  "key34": "5zWoKgwBGqKDXHVWb6Yb4PZxNQTfJDBNDyjVE9s5aWdYjZiViHnKniKx8xTXWMVqo6Qwgp8QARrULEKBeV1akVwB",
  "key35": "3gdTVLVgs3d2ehKqS4JfNc5VoqYL4t3ZSqux3ESYYiTLsBYZjuW7bXEtUXuiod61z5fUK7oLABdKEHSkiM3XP895"
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
