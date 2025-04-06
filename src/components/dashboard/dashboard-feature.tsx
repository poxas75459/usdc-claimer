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
    "4YB6WXXAYBFXHttRgphcb3CFzaYwKoCrhzu3PUbVM2TVA9D49crTTpbzzEdmaxaEo3ZQn81zKs3RmRX8obKQLphp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62vHa66ShAUTVVRfYPdDSMF6WD8e5SXmB2bQaF1TtYcPzFmrm3CDSpW87LknepFCusKJVdagX92X57nb5XDLALAv",
  "key1": "Jvo2tdqiWMuC7L179DJYjbYpM2TeP4ZDugTwGL52pt4Dd2DvS2yFHBRAY9esMqjCUV9bbKotvA6g3aYcffCsztk",
  "key2": "3UPpxDReN4vX8oZsUEHUWf6ScaFdTRZt8XF1g4V9nuwRQCF7L3DVYBuvyfvrHFgUgQRKCvaxA6ED2sERqsQPyHcX",
  "key3": "HAq7zJmj4jMvqYSgoPaXDKZ4WieSr24HNnV1LEW9cXbX39hrZfAxzaGZYW7m8fdQZEWww79u1Lk4499yCoMU6hC",
  "key4": "xWcRab4U1Ri4jgbpjhpjjK4fgapdFkurK2uXJDewJa32i5N9Ya5k8w9JzYAA26qsNhpnSNPDKidj7DJgWb824pf",
  "key5": "9mFEfEhBseXCTERcaXh8H8pn3U19s9LZh1Yyrm5q92ao13NvfLeEpXAkiiaJ6ruXo8XFMNc6mcfzE6pxothRTRu",
  "key6": "LdAfP8DTgyNAQGBqC6zr72YnjPbxrD9FBCUpRUyEZAFamCfvcHPbDrT39PWjTC4hGjXj5X2LoVCtRHqMNKjSXhz",
  "key7": "42PY3qer1xaomUaEX7V6jhJJh4LNbmvKq6krc1nExkN9CcioCdWM3LSTBG1aNU9ALH967yqwfXkGhCiQK2HgG5wb",
  "key8": "5XP4rVghBRqTVwUgKfEdfNt72BRnLxhRcYRMa4RXgf59u3NPLb5VhAJsUWq9BRJn5BahJUn8xdE3Rnk56XmKnKeW",
  "key9": "395kSizmSdaPxC3MhY6PyTPDHqkdEAtKfTVUng7dpj8Q5QEGezidM4S5qwbt41JNNWCSxg2NDWfhHPVGwoTSuW6E",
  "key10": "3CFwcuPJbNUijAgqzg4R28EWJ2vd8juUCQTrFnhseebjBpUhbBCJhmMFXyevCSZrEcyMhVRTR7nQHcqSG9TKzA4S",
  "key11": "3tFvcEdWa6ATXwffq41pdcusSoaUgeGKzTBkA8jsWJWuCsjHC1R6sU72PYpPeKisF9tTTCFHvrM8EhgH3ZzthADi",
  "key12": "2hkmQMJ57VNZSSBFMJ8j1rs4TMDKYUk6jHg7eGSvD6TzdU3f3cJGjb6WJ4bxNqCjmte23ZKF4dVCSm2K2Y84E5jk",
  "key13": "tZjSRz8BPWhaNjMyiVnneaezCPVRy52ophaBrobNqK8Dnp69rkMuxDgLyhDJ2NUcqVF9RVmNSxPoCHzQUcBBvnK",
  "key14": "3Ywbp9hCCwT9phQM2RyW7YFf1CkU5iFbW9qchN4EVKFueBBBz567GotqhKyhPyK5E9xZiRPC4hzE2x44aMrQziF4",
  "key15": "LfY5pJgJKbPrMAFZojjH5iEdF6AdgTUbRuyDJ1U8CxhTnDU75ZUwPip8r3f592Frbv9Q6vCzmdQm375SPZCAmrg",
  "key16": "4P8yifASmPvUw2mRfqBhGj3G5P99NQNxhtHWmLwb24gwZAT3k1gf7NDuimXpRnUe4gLTqXPiCktTn2zaau5xSc9x",
  "key17": "3pYr3UR57pZfpJijX5knrDTomTUkjHLMdU2SkKjHk12S12Wvz43asbmF8jQYRjyn1kBcAjUdnXV84jgPEbgiB5Es",
  "key18": "2cxDHYzBx7cTUDLHtyyZQTtM4NfxShhMz5e9S4P1QanAtgwi87FcnutBU418Y2KETEYhG3LNJe1YSiF3WQCXfWMA",
  "key19": "2Z15FcGVksvtz5B1jjj4WpwUfFt5G36khL4eqrgfGZKsLoBJqT3Z5C4vxjf97MuwYfEdmA6rMUY6PJDFyPBE25qj",
  "key20": "4HxHacyXr5Xw78LVAEoQysGedj4FLbbMU3HDZg41XPfYijdPHHaynHiJDxnSKEcRdBUrP9F8Sfq4hT8b4dLF3TdS",
  "key21": "4JJwiivUdVEnAQuZVqWjj7M8u1W2pgkLGTRSno9cRQuyKiTNtkS5D8a8ujnZZKDBtMxa5HioSxh7pv3gCjetDm3R",
  "key22": "4tSbmaGCC3PdEXBYost6koHba7kqqQzRMqYepXfXEXPMe9hsZZcq1exkfteUzRhxuQbD8TbthB4Dt6V5bTcegJAd",
  "key23": "3b7jGAnLviKQUcvxmA5ST6Uq8orXnVpzkt8DQsDCzpCmjunxyyN2P3gMvjYYEixcDv4LyccxEnbCYJsA4MkVPjSz",
  "key24": "5b7SFf3Xg1CvGex5WUQRYXsjh2U87zD1hNoG5F4R7NVf3XmgoRkhETzgQWKPkucrV4soSon1gBxEkwiGLSa16mEU",
  "key25": "24ZBN33vggtaRe7z3KFuD8amrnwB169FrUFYVw28AXPJ7pXEJKKmEP41KXTnqv1rNX1eeZaoAgJXs2ci6FaTx4f3",
  "key26": "5VZaMFCnsEqrg9C4TgfQ2WsdVZ6HszcCCdDT7u4jzVfKwL3AdZq6rtbCeCNVsX5iTR2yvAxxFzXuGgh9CKYHXA8V",
  "key27": "5nP5LQmCxW6WGbS9E19N7U1TzWK5H1nMemumrnw6hC7jyyS1HZXTuXBAwJAYWVUtJkRbyLSBRkH8HXungJo6Bx4v",
  "key28": "4XujgP5CzLZuK3iVeRT5JXxTXNHu5JcFVybXCp9Zy8snBzryuoBggu8bjasciczgkGru7UGmpn2EaCPc6Uwxnu6X",
  "key29": "4qT4NumAVM9Q7DzqYGv7iRisWVTZJurK4YHuDDSwtoj6EXWYFWgatuGankWHTqjPTp7KV1oFFRKAYkUT8iSsQLaD",
  "key30": "4wPcJTVr6yH6cJha69LC1ZyaoC76bSWYJtrgrsvG8vCyFeSQiwLXwbbNKvRHceMQ99MFLxxmEXMANzrUpRYtzUgG",
  "key31": "4czN4sKXYdu3xkr7bFaFXRqtpuHcx5yY1WCTSxN83bR8wWfmna4LZs952shXRCMJX4raUqcJaNyrgRCXvN4y8PYd",
  "key32": "2h41RXWEZBMFpPt8j1ASoZoQEpnUH5nJ5PGPj5MwnSBzzM7XkRFSFi9rwtNeKqZ9f6pVnU8AkmvB5XL5RFr9LKZA",
  "key33": "2RRqd1zuCDEVeYLqpni1FL8pkxQXaf4YExFfC1EjUjk6Egt4jJN34Ns6rbcrGyuZZhgqBpd94gS9TtUM4JQNfjSv",
  "key34": "5eyFU3GPNwubhn93Mm4ueDeLo11nuVYEZGftYV7UV8MJ5EaSMGg8Lj4cndoyroRqaaFCXQ8Wh4Vmv16VrvMk4Vvv",
  "key35": "4QwpNDnmje4L7dZWeafG4YeZySXtRyircNhZ5tXHxtsLvTG58Y9ZvvxEiCrfNjVSYXmBPZoPtm7NPiCaT5wN2WBJ",
  "key36": "DjZJvFxcdzgdPHBCuUqnyM6oUo7yhXJqFWLRduXKodYoiNV5LriT2sP2BdpJcmxdQC3qnPCxTiZ7AbVCThnDdMP",
  "key37": "2c2AzXTaDQGUWwpXsiBAX7jdFE4k3W8jijyDNzp5RbUzLuQM2hJeT3uzTDa66hcJEjddRBq5XEvVJ6w5izoqZVXN",
  "key38": "5z1qmhj56tfH3eqT9dwvJkPQ3333SqcSqdbArciT3QzG9XonP1zeLTF81BoXVpHt5qrw1ehKZ3c3kMw61njs33k9",
  "key39": "2LKaqMLkTFgdmYXokdfQ4BSSFSCNJsuzWjycRWd15jAwZX8HNo6EApKHNVma345YfSdLeh5XxFd71JxXXZGWY3Pk",
  "key40": "37etvNC7DcUdwSmd8yvMCy49JffiBJYw95mvnmcJuM8sLSKYb5YZJyxRYKrRAHNPc4diYD9cxx4AR1yFZDjk1pk5",
  "key41": "2hL6PVBuLeeye7tKvw56rnH1BJjNQKftdrJiykx5t8ynmCMTALWGMQeJ7LenmseTrqXi5uKV4ZXczYfxsur4eXNG",
  "key42": "2jtVRK8k9SRGwoe6jyK1m8fLor8NYQLEfV3HRnAVBQbYZLjW5NTahXYdpwRvoCG3K7wd5yyddH7nxz81bBMjWTMz",
  "key43": "4KYMPywg6Vem4zc9CjnwMMpo28zezcy8Qu4BPBKMLGvQcpJzeKY8v3Zn9VLgaAPP1dFXKteL5d7PTA6Wpudy45UH",
  "key44": "2T7cYs6U9TSUhgUvEU99LhFbkHiMkQxdkAJNHtWDFXBGZBCceGFZGnqrMoJeabAhouSNgiS1mUHTn99rJfaCxTCm",
  "key45": "4km72Y4Xxah6v3KR8eMAXshsgpFdwZ8WhU4S1GqjtEiBkqVxs5azmnvzCNb1YQfmMckTM9X1opHyPMCzqQmdqCBy",
  "key46": "4vDUCUN3aMm1rgnsNAJbGz8rwpjcUHNhsz3CL6UYjcVYqVa9Z4gZosjE1nf6KkwVsGtnsrqj4QmyPXes4C1M1LHL"
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
