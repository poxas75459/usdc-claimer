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
    "5mbAy1MrsbCNJ26HSPYGkZYFF9EpRRqiUhd5m9MoTN61rmbnKvuA22dxS5JQEFrJvU1jCfN2MzHQrC67hDhsgc9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sE5ENLWWvptAogVnsNsqUwKCGE5hR4so4oozNd2HNeXPGFYKMGwCc3eMHdERbEop5tLa63TDpkWh1Z9D3udoW6c",
  "key1": "3Dh215UgpcucUbzn8yfypJxrCFnJYfJmMiruG5uRA1y63VzZLa9oti9cJzMkAfgj4a9B1yf3A4vzJoggVxkB3bLi",
  "key2": "28hDvrGztCMfmEFoMPgN6FVrEQFDfVoXBxYkdH9PEUdPwxwxozK6F72o2vPT7DZF5NC6evDBroXBi9CNwvcwM9oz",
  "key3": "3XDc2kLVaxDzM5i9W4aYCMCd9HHjUFBgAUm3KZUbHSZi3TqixgF1Stsn29Bo9x8y4Xyqqrksy9dHUG1suHpKnMTu",
  "key4": "2GiCRmdvjhCWZS115QPQ4mp5aYTa6Fp4emV3UKs2VKLQiL78PPvfFCKrZqeyZRYbLrTDPFVbvVSeT5ftCf1onZwt",
  "key5": "4fubLxB7LzPtd3DrHwC5vQ7N2t3ZcdqRcctpxjuE21SZJARqFeEXmT2dvF8wWEvsFNf13vUAjhdMLKdy71B9UxSt",
  "key6": "2JPRrwio4Za8hL3kRtwAw2KdjkrqgLdGAERTbj1vb4AgHL9MxoWCwNWCqnL7xTr7s9TCKYQBiybeWuDnLxWCKCAt",
  "key7": "9rWyhjvsHuPxQjudkVT8VtFyxBtgWQ8jePvZB14TRm5zvWo7EoKe7N3yJtjFjHkMKv7r43GJNw5dhyRnmeiVqiw",
  "key8": "4Y66MqkS8HAtgkv91hKFYNf9gfMM7nXmo5DfpWHBvdioA7n2zJExmQB1KccKo2vw5qAbuYMLod9992yLBLnw1gjY",
  "key9": "4ak9dpZfkHCY1xNA4fsq3GFcWGpvFpiwfwHzV14zZg72f4by7vwB7cVH6YKgCcugC45MUtMxYjw4ZCJLMZjDh6WM",
  "key10": "4i7SnQYsnLASJdPdZymQvJSPBDhM2iY8ANbxMQdxjmq5KayhJbdyvrinak9idzbWjotJC9kwZjX1e1YP6fuoBW2x",
  "key11": "4orSzyeG492z2PD2peszsVPE4hcegTHMDggmpNqYRsfr5hvaeq8kec2jJX1LVFhf1w5mitbx8YPKakuqmGR95Z9Z",
  "key12": "3UQe7JxAhpCx7J1RoMMA3HLDjSxKMSckQFyXjANnS4NWkxCt69T8Jo2cuLwr4ocA8kXFZreMC3TsuCWns7Ztu6ZB",
  "key13": "3czBpUV41RhGPshx1mKJZ1jTQ5z9kkHHM59oYDWA6nPM6WGDJQgrAnaJBtQNr8eZTnsCK3q7u6okwy6g79xy4Kwq",
  "key14": "2TNNYeDjBMRuHzDv193tBy5W4CVi9UpC1jaCJZzKuvpwzE6mvZnaYJupmTq258jp31TXJ6TG1DAn3HBtZW1phZ2F",
  "key15": "2McReajpmDGqpe4B44JUG9TiqQrsNqwijKurpPubDoj5XtuFpjp6kUQeqcEoCzkq6bm3RkynUMHSYpW3PVgPMWmS",
  "key16": "4euXpMF3zU8E1HSiQgUotqJWSyhx2u2VukFiM2GPBpCseUGz8jR4M1f6cTZ93ujEE4qbi9mJ71dJ2eR8TSFEVbW6",
  "key17": "3Ezrb6cNSNPKtoZgikwctBTXwBjucBhddA6ysmMZzjbAKRgwTLbDLS7NDaSCjoBg2JaFQdCY2mYJX4w2CLpTVxPC",
  "key18": "2oFbq3kML27YsDn971hc4FY4i1FXGGe3nwwgCf9vukAHYmY7wU5AmmiFHjkkbZuCd2hSXhv6PcgkbbLWrBwoqcTG",
  "key19": "3zZVxcoxrGN2xcEJ7RYot5qgKsv5kSqtvHAeYimUMmDpcy67QSG54B6bmcv4m8mB68pGPTx9RcYzzyyuPwtLmWAq",
  "key20": "3bkn7CRP86SMFtnGyz5dhBo9ie5iDmdENsHmddRrZLN3iBEVfJ2bPq144tp9gcpWcSoTyVNNojaPYBcDwzExDUtP",
  "key21": "55EgEh5LQ8AMYJXBn8FMdwGjCe8QSLsbShjep76KzuhRCX3hQPDCVeqg1fvKdzwB5T7ms2VA5qPejsrfMTeUaA91",
  "key22": "qNjbtBG6bGDLNzdGNW112MDSBZoKQj5tNEGeFrfAehq7NkcH5BPchJW63cfDDzxDJ92f7rRonuwfyV8b18cBQi3",
  "key23": "3iSPZnZ44D4JQPbkWhb9AnGY9bEi1eWMQXshHSQp1RAm6Ev6Mrj4D6UXum188FzyhMjDD8FJaP3zJ7fJya197DCz",
  "key24": "2EnQ8eVxf7D8EpZUnSt95hPW8kwHBMycesPQgHUVuypRDWaYgdkvBpZYjxqpsYBYjyjPUcF8Zoj8n8aS5agcjZoM",
  "key25": "3oQwy5RnE8VyK8mqKkDF7iPFwDkJR2zXziK21WoDe1P6t1vdAXEqPH43YLAhCZp4cFVcRUoLx7Va7RL86nT7WTRq",
  "key26": "2vfGujTMcJyr2SkAotoak5aLM2BWBwmNbGrjh9g5NnLFBcHXAHTqwhhgu3LCnUQ97VaytzRvYLT714ZpnHq1KXcw",
  "key27": "5JYkNdsaFVuqn8q5FQE7u7vKbdPBbevzJUipWfDGbSWy342UetEiE5QZDY3nApqNFvfQ67FUiReKV1fgkSrcifQn",
  "key28": "4kue34SiDdvuBdUDnFFg8qZZxGV3rYKmYSCS4t4r74ybmK83BtT3xaF63pX2meW9bV9VpFcxD19X3fZGpTM53NX1",
  "key29": "3yq4FRsEEGBPPV3GBhBPfSYrSo4nDKSXzKuXMFEDVBXZVbz6VF5kDz1pkxw5ssPjQdAP2SD4hv3EPDW7d8QpnNjp",
  "key30": "33EuY61aVEkUaxJLqNPRVF21zf9oziHEyPEzzacyZzMgEJJEeKTEFgCmCTc17ppBp6MBm1ioinEGMXYDgNCxuDN5",
  "key31": "36ZEzCf2tcsf6DFPrNNYuw6gHRgSuDzdsEpoABgiPksD7CNh5nehXLr2EnqDFhVd4UwwLf1JgMq6RezhEEEbZsDM",
  "key32": "5QTWMCn9dQBeyTkaFSeNfQaJk5MxFwJXzdmTNFu2PLqEXCM3Mc5AbGxNFVrXFi5pE8ybvCRdcYL78iqoVFmFo8T3",
  "key33": "5ApSLJD3SHxg3cqoxuFcbHYbswAF6oWhny85D2p9Ta8GKHMKg9TJjz2MrNJdDwYXdN2D52GZ2AcFgc7M7pTLfhNV",
  "key34": "2yMmD8fmDqiQnJTU95fZYEJsKXhywVUvMuqzuwZudn2s5x8MAEa3Ae5m8gQnYQQR9zZqwfWbjdJrdoKdsab9qXjB",
  "key35": "47hYdVExckm1NN1iKZXq7iDZym3SauZGz2Jxuwr4EbMjuZdBxnQxVKKh7m5gkxofiwxP4xoSZ7nNL1dxizuGqNda",
  "key36": "5DBxixVpJLEPRHRRK21H8z4tyMcFPp65C7UrBDPRiKRkdnjsikeVenyfJFoxCgSLmhub3kMz4KhDCroPxiScVyAS",
  "key37": "29X7EghS5CEzJpeEFPNZiHLpYu6UEzFoMVE3GW1AKKHRLYniJJe6b7vooCnYBzKB9xxahMkMp8vNiZNzNgpgkyF5",
  "key38": "4Lg3eYmMmdD8j4GNSdfGap6v1QUZYM7x5EqdHDSy4FJ289H3p6PzfHUdBVsrnzQT8VY12VjZE9px636PD1TZBvjJ",
  "key39": "BPLqoJvpmNjaV4Y43zLztyKJcKMbjDVzcuXXcAdHbvaXeyMDfGguQ2p9LSM1YRmptz48oNUE9sUbc235Cycotfx",
  "key40": "59iT1cvF5WrfCKBwafaLZFgEferYG9DsKGBobvATpFkmMVj8yd2kYmbdpn1233sfF9kJrtY5q2SjecBzXqdB7Y2n",
  "key41": "2umoLKaNXzwbjdztcjj3PKLh893HUVEGsHxji7hvmFKhgcjRXPK2HKFR9vY5UCTXDWPGv9T94HGYd1XcJBePQAuv"
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
