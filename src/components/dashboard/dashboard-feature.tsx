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
    "3wB59Mhsk8zzg7ca1nLzdTvWCz17tAJGhX1L7kkSmmiHxZTNi4gicts3hjNLGzmzJa3ZtEexKWsRTubhZ6rmvv7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QPDbPNA5yPJmmsATHSbrcAYHr9EboDeGUtSTByRZSdpRV5zzkTMVQ92RqnmNGYUALE27jnpffNHMk3Q7GGQpwYr",
  "key1": "5z3aeStL3jsyvmjSf5dD6L6AwrpMtf6S8jVDweoMLhc2VZavTyYR1CLB5UC2ErwzvhbwVTsqiWHFHYB2JQbKRaqH",
  "key2": "4fGCFWSzJbozzkvRu6mV9U1bRBPkoCiwMdcRkeprrM36kRBbkPsbnJtoueKWKGheRVAxjZY4ykP2SbCE6uftwrJi",
  "key3": "551akVMshLiXqwySEZLaKv7SEtQa2tWuMbZ26ZvosF3x4yktmaFZjaDyQC4CiLSno4h2UMJTpRsYf9Ggn2L3jQP2",
  "key4": "2GJXFtoB76DtKQ9KMxyXzxXnw7JpMcAHfgszVycga1Sbx71db3zRvfARrR56uaSG72pP9xdbjWyKnDE8TZmrfHih",
  "key5": "2K2dM8tKuBTZNpsDCi4zzetjFLBAegokSunUASKSkM9afbG4sFKXPjNmNiKQP1M8YESXC4RuiiENjZgTMYUoSCVc",
  "key6": "3Hu59NpBRypHJ7nm8eYJWp2TopjBsBswzSLNiA9jh1Rkr8wVxDntGHdNCupjeW1H3ygSggjEndJ84Vz2xQkJxvBt",
  "key7": "4nXJYdrUpLVvYU5tVYVga1RN8Nyo6DaK9zaGuB31628AzkpVNvtEmzTpncFphnerkYRQLmU2kE4AexETxoW9nDHc",
  "key8": "48KcYYLzMrnryA2gBXMQ4GitfZx7KqFFRCKnPbrhRko3zJbYxTXkFB23AxyDNwmU9E6fAE6abkefK49M6XnaKn8W",
  "key9": "3oZaz45MjS3xZoc5EN4eXh7Pas9h6Sd4x8zuhPUc9oz4Ne7Bjrtx4yeomF8uyFGaf2bKeg5sYwrj2kBHaWpJcjRD",
  "key10": "3eHYidAUgvAhbV9vSticb6CEVvrnYdgto39BkzgQxiLP8rz7C8JZmNVNz5VwfnavhgmLbFzoCpcSiMvENUw3ptAR",
  "key11": "3b3rLrvHaWL717rLtNuzFUhw9bmKpWdcwhuE36jRD8LbVucMokUxjeQWmBVwGpF4HbvZd3He1vPuraWxKtJf79H1",
  "key12": "61Fhmqy9LtUrFdPA97RT5xcQKMSwT9KcRtaHoYbJ26Eti7nRnnfnKZeNuSMAj3sfJj8hpqnwzmyqCWgcjhJ8cRf5",
  "key13": "2ME22h5dPQPpHUjzLVefQaaFixe32LesQdupvdtGGhHVuWrA2eRmE98wksz4XnvD49uTAFw8AiCAwrePVdWAEDCd",
  "key14": "5fFfhYtiU7tcWT84o8ojJYeiTeAP9vJwGdZ1WyC9gc2PQs4SVBq7vuBMPEZiPjiVjNw37onqSi9NXZ1JexyXcPaW",
  "key15": "3D15Ltaq17ijScb7mD3XUp1wqxcDdGbeCwf62W53MjaG6zHCE2MQdMpAMb7y66TbywFjY3u5rYEaynu9zreqeQPp",
  "key16": "3RTRrkzs7tm338extLSyNoaJP8pj2QNUixppRjF5RG7StonUpUEPJeo5CSUt13Cn86F3ze3opM8Eh6Uib57a1KCk",
  "key17": "3koLUBvsequn3jHVYgUAFvYVk7FabJoyWQC85ZcgAtdguAL5e1GWprHeBN3op7pDt8rSPfDTY8oTbvVuGGyPgi3W",
  "key18": "qr1pR7Tv8GYR5qtgBazz8DKHbnLxL8bMVb1yNaGa2vD3TTbboB3NfHageuRkrHaUcD3PvNQNMp7CehE9t9ztDzP",
  "key19": "2XiC5j4TpapZQz6wkGD4UZYirpTmPQWNkPvmCpAADKDRgwzMQReDtqNGPvzZB5B1fDqW4D3vCCZxM3NuLTYahaQ5",
  "key20": "5xYTV75zs7wrHafnwfUjEc1Fj8xvBTTkMLm5bwLN3xg4goFyf4unE4gtGbbxw7Rks76dEYJuziNPyfWC4EnFQfit",
  "key21": "mzjxcKyH9Wiw1KuNZMEgjNpsUTWLfGFtr4Q8kUN1Jy823izA1nrNkhzxqiuj56EPZTQMShs41FcokADWHWg8Tza",
  "key22": "2kwU6bmZQbVocpSim7nvf6UUthMYFjL7e36Ho6L8JAtFb5AhoQojd8sEp25Qbh5H5YXJKFjv8q7G952bbLJjgwzr",
  "key23": "49a2FmNNiYENPMywT3PhLZYaFZpvE8EUoZ2aLkeMtFTy3fcFE7wvmteHkQC38DA5VESMgsck9ook2zXizhLdn6R6",
  "key24": "XCPa5A7HoUPz7J8b9oWumG4MAA8cHt3PBeNHquAcda245Z2N4yFVZNmWFjrjhENHP7wWCBJMeZCtLkmPAxLcuvY",
  "key25": "3JMzgzz2qPWtjvsj3kzj9cHFzqYNuT7LThQnEsWn667x57BwcWaayZVfH3cCGBN5nwGEYfEsULBaqjNEZDNynDkK",
  "key26": "5UX8tLoXk2FaeJjWuzX7gcSD97yVCtSZXe8gX6eLLuUrJpjSzWrPSnwYouCbiy1rKcmnmMeBtktYrG3HKuDWyUK",
  "key27": "2bVaJVEqjXH5Em8M9FffJJ7LAGPpMTqsr6cuYMArzCbSLBN5R2NyDY5tH4ifXW41rccSX5zN4nEMWcGkB1zvs399",
  "key28": "5dpuYR8tzrPjewabmjBd8BfrLzpJGm1KWXqdhYG2Fy1QJ1gtF9moMdGmCZ3UTb4dVnbFuk3hzFeoHdcPqRHBgZXW",
  "key29": "KQw7UxywpPBeXADCVTvKwiuw65ZB5HjGr1gmu1cLsvADf9dDpMk8ZTE6M4PVoro82g6SA4uu1SihJAJgkPp3FcU",
  "key30": "5MQcQeEi1ew7XnBLrfaGYLQCnmcff7itUxUtdN2oGxRECXYUzQBqM12Ds49SEjsSc7DqtefzQBRSauLka9S51mWP",
  "key31": "hhnfb7yQnbAi9zZX45PpY3YdznbaNRqUtYDFFbrj68tg6YtufJF6MNJaNj7cPDYcBHcJ5GMdgyNgb8TcBD1RtaZ",
  "key32": "35xWSikmTQGr9okQ8AmxJeGv4S5VJXW6MNgTJsBQXEd2oJZRKTupD5xZfrkeJ81HMtcWpB2smN26bNLfbftt8H6p",
  "key33": "U42tmR9ySFgwbiu2aTd6SLaWbYCzZGvLsFy9pMbUbYSSc5gfuewgxMTq461vJPxWgiSjkCu4YEkXMgVEx6Nr7Ys",
  "key34": "65ECJXWn4Fpc7GG9BHckoSAWD8jwE6j5R9HX3DydxSRZTRvwV9dJHVuU32hrnpD4YUBofyLrNK3E4EvjZbfzb87d",
  "key35": "37hv5g52SyCx2JTWSeH7obeE1CVh5bHLjBQz5p3JriWsDFfkoMmvJnmcXcjX1arfgSc7F23ZbCkhLcasAbZUSPXC",
  "key36": "SLTBNcPpJnUgKvQerUw1HBXmuZU5aYiZEQNRVFt3NF5Vb1JUgmApEJmqJxRaGpWz9QfQg3iVN7DYpU48RikcAcX",
  "key37": "221WoToEdZogMeBGGVeAFj3J9v4tTPSQHg4Z3vmPANYn945zFUthattB1S7pm6kiXJfoYugYHdohuiV2yPGsRayx",
  "key38": "35iRz4BfeDXczJeqmxsMzu1tpohdqpSZfJkANzKnepFXjP99QgzzDa5YwcVUduR45PHHCJPj441KvSasJzC7XdXB",
  "key39": "27Brry1Yzh7w2jtd4rP4E4gYhBUePcY94U5kBdn2NjSDZFyMDyU18WXndAxtt2BriEDnkm5Mfz2rQNvvG9kQfNZc",
  "key40": "568jAdWExUYZVCSgSgNv6cWHAAgmaasQh4sB4Ka8UdasNNATT6dsNJ8Frd3S7dHVC6jT2EuPfKGmTYmnrarTZgfk"
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
