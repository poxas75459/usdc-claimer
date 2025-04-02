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
    "66KnmMQ4nZgCFsfYKRBApNWC6X1TPHZBaCdFz8weEXC4inYzTctQd4hq5bjkb2bpJ4vJnUwhZtNTjfEk8ntLirRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63VAuXRGzhXMPJQusNefN2qW1cZoLM8dAirAdPKTCWki3qHQU38kPrCon1JvvZ27QL5ra9wkjJGPpujUdP5xVPin",
  "key1": "28FAwhpU93vEBftyKXDD8nZngFzyJ4evKRN9GR7Fy4imMs1KAF4csGQe8CrMxcaWR6KNgfGuUdADCvdwMSLjdp6s",
  "key2": "zr9eN235ymGZaUFjx3ntbLmQ9gUF6d27PYbD3pMDwEGwLeNKoAuM5uFHLbpRzW7LojxaGMreGu4E4PThaVVeLNh",
  "key3": "oGxZ6WZCaKa9UcbfrvkKrfWKJMsoq6viRJGVoCkB7LmyYPsaUS6s4YTDaqnbtm6AguGThVKaJ9SYfnnwej3gfcY",
  "key4": "61SUwfPUf2tbJWh81dMYyu83beori3JWv4YvKTkwmHvSL4nhruRDw6MLT7NgVXzNBfpLKjWNY4RNFNe9Kd8cQYvB",
  "key5": "67m8NXRxMncAUttfGvigeVBaC9oLm3XFn1dNmzScNuNGYZwsMtHzpDLcwz5AqiPTYeLMMFcGeFZ4CyCS1GkbjqLP",
  "key6": "4FXDWtiZiP1u8msTgGLD6PrpcxRrHjqykXwdLCTqTXY1NCQp43YhxMxLddPCk1ShB21aEGqNFvdvGBnq2JssUYJ6",
  "key7": "22mzRA8G56cdzVJZFo2sjEe7299Ww5qSxknWr5XMShF139bUCyGDF97H2JaKDfDEwtfeVc821MUQRLy2Ka7q6trP",
  "key8": "2kzjNLYQMuYEDeevoKFhgVVth77RFAVkDa4Nh2rPhpPLXoczYc1CSvhCEPz4xpvXXTWn2wAJrpw4c5P3zD1c3xLL",
  "key9": "4bNWC18xrVmWzbUT25cto3rM29JrFc4UHUUpXwEt1VzmkD3Wuhckic59p7K23XoLiJ3Fk9UJ5LM3hjCvwxXWBm3K",
  "key10": "3hT2ePQzyMBUBxWaHCmFdRNJceQwMVj7VgyaeX6HpCRPYv6GWLaA6nxgRUJsp3PDpbbmc5YJhWg1aqKiex9NtdHT",
  "key11": "rKdJyQiHdZpKSZcdo1Wn9omnv71vKaZySjTxuCS21JWuntVcayLjcZ8gnt8LHgJNs3yf8y4R9B7QQVtw3CAetxq",
  "key12": "4eoFPiX1UqzUezuNsNrvRG6MuhqpQpiPEaeDkv3TP7MkarNPsZxUmY71Gnqe3D53NjKRUqUec5G66dnpSbmN9uBf",
  "key13": "5BPST7Q9ZMaRS5WtS3YjR23h7Q6gspjWrkCJtJSH8XxtNRi18daCFKJXCbbfGF1H4a5wiebNHJmFMDcMGos73qL",
  "key14": "4uisnvzS7sdTHHCC11frZ3UPryZ643zNLuRhme4cmirkuHR9dUNeFafEoCKWwc7JY4Dn5nT26dwfbV1H4MD7qqKJ",
  "key15": "4N2qGXGPT48sdQ6xH7vgic6ZjfT6N2XNxuZGNtBwF3wn2juB9pJiJj7nTXsr7hrCw8Muv1ySyR19JFi8JQwVCT9r",
  "key16": "Um1zyp1P93B5Wtu5paUo4gEyxsqnuRqe1zkNNuDbhP2r9w7MZRekCkK2BjGjirW7beHyizAXq2HbuwdxCqq4wEP",
  "key17": "2KRXvjLfFPFiwcyDjd8nZEQrUbKJDAL95wVQ8VXvyriRnwdC8WABWECqzeM8Ls6DA4hJsRkxq2tqQB3tDsudsvY6",
  "key18": "2FWbNV491kAmTXwwapiRn3ukmkyGv5zAjpfvcukWxWgvk7U4wEF1iLst9Yf4vo4v1t8ZGHdc5urESw24C3SNxyqH",
  "key19": "5xm34VveUqz37Hpj6qwp9WUeeR9muo3j7FXq81PhvXZn6RjSKoZsf2XAwaHkvaBxwhDH7k7JNm1zKynHL2MCXa62",
  "key20": "3WkJt8hoNiinkMqkgT816KmWjCgsWkTCVh61SkjJPNWueZQ5sHYCxPGe233uuRR5jfoYStPTgKWvafrJMMDMsBNu",
  "key21": "3R4LE7Y9yHy9kRSkZJwbysqpKgpAyuPM5c68HM5TQLviT3Uf8j9ECzJMnW9R6GrDGd7CmcfJpeCizg3Y82cZaGbM",
  "key22": "4AQSfTtsUPTG5hUVFZS18mDwc46Z5MiNrPi8EVVT57UUWA4TmufHEiHnAw3uXpNZrm7vmb47wLhjGVvTEai5dmmS",
  "key23": "4RZ7ZBfJWayCRQjtAd7K13ddEACgWLHWstMWVqGZbXWKqVgREwAqoy2Wdy7BWRMDZ55nMDoHcNBYPQdwNS32nWWm",
  "key24": "3tFRHvdanW6Ww9BPSvQ2tNBiDM4YdZcsHX4rGs6Spor84L3X1erWe3APCVFUJojNxSxsMwYoPSX3asxoqf26k2Bq",
  "key25": "257nVxXZxyyooSVUxtZdgtyVRTrEy8chNuaY7saNUqg1Uy8PYJf7mC9sJLTi9YLG7WxuWyvs94dX71tpY1kftzUX",
  "key26": "38wadQVEuUjuXrMLVZ282CDURnuqUvQ7QL1yiWQaG6WYdi3oZwNo1RQgQhuhJZ2xvVGcCmvzd6CzuLq1L7TRYmcm",
  "key27": "4UK19g56xQJ3HkmEiHDsUJwRqGvRezNEZbeLZLa4DK3Y1tFc881Mw8Qh72zkQMP7aZnEi7EHApgx7WcStFRbhhhS",
  "key28": "5rPYsSxtgdbeXVUCN5ZFBGYF7d9WaBaZiaBRSSbmXf8urWGC5bvuSc3QRJMCD5HAEaSiAUc6qn6y21gxT41i2mWo",
  "key29": "2rnzK7f4DdPvaX1YnLWpnFVPduC7UWRDwQM3WEthGf2M18kmPm7ZAzppEKCiYUBgAn3JifNjXBWC2TFTZYfM3eRz",
  "key30": "4etmzrerJYeKWBy7wMcEfiuKn9bKyu36PfEfeBT5n5tQTdAwA9iLGGmU9eRMESDo6ubBhX4iVijSmCdgourVeQjP",
  "key31": "2zqRvL7nejkCw6NZjwsUQUMq4J7PyMiP5tFFau731PEhU5Qz1DNtBUm4JdEgLNJoGaTQ3G8mEbZRQpUh5j6bSA3",
  "key32": "37K67j9Yga7sWaBVxPjZbQKDzUd2Vg6B71VVSeBwFTKoy6oimq8QNCGw2Qk2EJZPS2VjZLFhe3eASwsB4fRdYNGR",
  "key33": "38ZULAfvRCAwmxBvbwRMarBGsVxLMSs8oCK8LXHqEhRUxmAudjZaYaKwXsoRWAy2xp7sWMFkpkQA9T97KeLDZzqN",
  "key34": "2JPwduBPWLzP3AfrBjREzF5sXfPzSFXuXZB6EDYhTwP6KMHkJsYKPtMXQqoXZgNYU3bTxbdyTbsLzuLmGkFzuZ3i",
  "key35": "36mMsda8uuApXY9HJUH5B9mhVGWnPrkQDRdDUSBC5F373bF9Z118mvP5p1PoY6pe24LbYm5oAkGFrvKnwRSdGiQK",
  "key36": "XawHmi6qpeEbeWQikzGnjvUzNnCXtR4Ve7ErWYPqoEVDd63ZPASULTNpvseu6QwKxUFJAL6cscVRo2k7zNUVfnK",
  "key37": "4kenoPUAJ38hHog74hY7LH67eQiAxSDAVhq7u8WS4d2N7d9S7KCYppmzkctwsYfFRtWEmb4Mt3RwiUtuawTH3fPA",
  "key38": "3fTPkJTCB8AxgxSGhFZAKsXjFBukchBtjgSoMzStG4rhdmBh8fQHmnUyoVFggPuqNMaLqFVLR6tYkAkj9dwpFMWJ",
  "key39": "3R6NkEcuXZvhAHNz1TQTH5DYsYrf5mdLjP1RLpsRC7Q2daA5EkyiNSpd1FGqRiRidU3nXyUC7A5VRkkseRy93RpS",
  "key40": "5H8a999zWKxcuHPt4kXyCW3h1E69AuoSt4JYDhFJTHNMCBMVmsshFfAPJetGb3NRLk68czGyxuHZYaAAia7peA4F",
  "key41": "5zbYUgXyUibwk7c3W9eXLrQLr8WLCCkVSFmrX7KsZyVZtFXNiDbyj6cjmLFaPtXvTjkV91yPfqNKnCh1bZrXDE5v",
  "key42": "39uxC9nwLdD4G6gMnmuX4rsQaHquG37NJvDMbftyH3DmADUfVJyTKy5mEqdgHK4N4fyzKhDyFiVTV9EPNVGC9Z1m",
  "key43": "5MJMzKNhp7jVQTtWekruub9AEeVLtkANSuEDCHFuGeHotW18q9PcQqZM2a3HbSLV4DCDRobWNCA1bNcY8WCzzNQi",
  "key44": "3U4RoFCyfC2xWw5me4knFW1H19AQZSfEpYBQoqfHqcPzYprd95s1SELg56jgH1uSQbxqknsYzoceS7S32MNQerpT",
  "key45": "4xprMGeyD481xBZJy1dJHScYkd8g7aNBmjVdemHaKkNe51XgfQB9UxUxy4ufSiV8JJtDKqDyafFrKbhw85uQEpJ2",
  "key46": "5AhZLsWewEDeY5B2quenMSFjKvG5R5ZmwVVu8pYZtiywJsKgA7ymCrcw6kvBi7Lidao7Go86FPJpaM6AtzdpdMea",
  "key47": "426oRtM3f2qJihobPrVwNp2eZfhKE2uRf1FAG2JknjujhfgodMF27LE45CdRbVBG4DkntEwL9pFsQRGKPrjPsRZE",
  "key48": "5Aa9eeJxig8CmuMbzRphyZcjM9yJA8C1CPCtwck45MQagmzJ7mA5R8m9gy2y7chts7msWryhd2RMGqGUFjsBHLo3",
  "key49": "3MS97j1tNZNm3hGrwz43aiXu4grZYHQfJzSSDXKxsKXw8M5P69CUU1rnDNfjP9ptwZbtHAq5ck8WJVKuxnR8BPBC"
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
