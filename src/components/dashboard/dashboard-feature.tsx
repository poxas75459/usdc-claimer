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
    "5Aj8W4DPbCnVD9M15q16CvHciQapJUUbpKEc2Bgigji97nKW7uaTVv36LqhBuUB5xuYjfXd7PZh1TMo1Fphv9hZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mZWRwYvn45jL5qczUmm9kwkMVqzFph2ibXVEL3BnY3vQvU1NnA3pvt67subJnbj5qwiyxz8P8CeJL1MbemxDMy8",
  "key1": "4DN9wjqy7i326X9A1z6k1pyRrPoe57JGJr1EEWRhtm7H4mYeMm547J9zY4pyThZXNYUQMPthoZp2pHPP2U8bZjxf",
  "key2": "2wruhkHiWAi9NfnFvLvbZa3EWf9vEtkhysURZ7DwUvbn2qVB16eLnNUFGDqkDFhFr3zvDxpf8PxWkMLmLaQu3wLK",
  "key3": "2zFXhnLfywh3oQU4i1arvWbfurCzr9oLRCzK7WNt8Zk8bktS3Qx1x3RNZj6uWWvuEvebZjE8Unn7n2jf3qNWnFDH",
  "key4": "ZHfCgsqWFeuJpMvQYhsKdxwMKtApnJbMot65JheuYjnB5YN84UyxTif6e2pxh9kBY4eAKedSdnAVH8ak2miJJH2",
  "key5": "3xvMLZPthWu5QRtke7Y6vAw8FYUmoSVJGbbEv4ajvkKFeKwvk1ZCqxk89LWYut8AKQXT2AEyex6dt5PvXha8GE6r",
  "key6": "24d8bWUYA4QtH9rXoXuSzK2EKZmomSG6bcZTvLAQwFzUQ945GfeJw6dmtAAdzMXzisyJqVRCvxAGnY1cbfyYztrL",
  "key7": "W5MD455DscVD3tppwhdRF92nZS4ooNoVLtbYybZAiJjWnKDuV7Cx1m1SPyG3p3bfwozVpaw4zQYQXapb1x6PiQ3",
  "key8": "55e6C5YK4i8qELV3kHiLG9j2wMmGKSWLdiAkK9zeX9UHNn1DrpbuKTJs2u5cvuNj2HHNNcqgm3CdJEwMgdcPXak5",
  "key9": "5JxJNUw7iRm6gEntWbGXYgLkChcZF8XpqeDLdKAChVkRQdbu9qm2TDCipydjH15HpS2ixCaEsReidRtxq7mgBVCw",
  "key10": "3dXeXKmgou5EtPi6rc6GtkDu2feDmHTk6xGvsyHaVtHCaoWAc8mheuf8ZvgXAF511ahuQcAPJRqy9jv7T2Jad4kX",
  "key11": "5PuNsgJU6YyMxaANpJCCUPM8AEnwN6zN5Kj6fCv1pe6dwQHwueRNphcZtigGcSNFZQrU363M8G4n9B9EYqGxuGAW",
  "key12": "63Se2uVncMB4Jjx4C2HNLVn6ejdq8Hozng2jzUNsWymN1RevtHDtGhT9fFkw88arLp5uVZpeXutRk2N8mTXHxbN7",
  "key13": "658T5eD9iEuJCAvkAw6ed3LyDCnBYiV2Yjouhggm1T8AkrpXX8bAH2KBMXYHi1x6MH24E6xSNe1nQQckGJTw3eew",
  "key14": "2MVAvEngh1yU1urBhmB5RxR6SRE3Mkjq7U9iWXDmw7sCf1JHiYwdb6XVTkEwArb7sLPaLRNZ6kpAnUdcY6aygeUB",
  "key15": "524m8bbpKxo6GWpWxGkPMfArWyjhTFHLunH8728cTvvnYFRg19gx9ZEkcocG9Rcr9Fna9ez9GsxXtn22NjS9engu",
  "key16": "3nHaoGwz3hwsHKNCiZCTYKCegaQZLGFcKFeQSaChD1EUW9nnsB6qPE4vQvHUzDZgyZBBwW5ueVmnh7QB4iMedqUd",
  "key17": "WnUhmuS3vtvBsDxPLLiHjCHWjBU2nou5ejVKcYzS7TTbUNxDPPdPZn1x1QbJGr49NmqSCpKxaCDXh5KGMvjyizr",
  "key18": "2LMKTN4FCrtpAF781TCtmfctdn9wnuZtMUEPwQm9FbvPtWoYDapRPPnVwQJ85FntXAHRpVrtMj4gwwogpcgHMnMt",
  "key19": "5SX9QsseYqbmf4WMVQ83sSX22qSRQUU8JU66UkgaCH4CJf3198WgVd3vG6tFAidUdYCxu8qkRn3eZS1vg5YtPnQm",
  "key20": "5LkscwSuVyX8AvesrbGKaqzZe6nT1a2ahT5REoerU4oRtKCzEn23koUi8nedLLAWQLx6uTDttzxDFieNVC15mQ6V",
  "key21": "4LQJXEaXXhNgs4SePZAi5JZ43zR4QEY7DQoo6h41Ug6NGVn8EMQzkQQzygAxkhEkupdVW2texoYdsRGtPxBoqctT",
  "key22": "3EmH8B4Dym9UD29NVAUhrk7w23LwN1Ne91DQcJwzK6ce8eRopT9bsU4FFJL4tuDgqNcdiro89pNdnjJetGyGPeHQ",
  "key23": "5xjpgizvk2sSDMDVsKMzyYgKFCh2MUfRLUj181ejFCHtqpEC4NHjENUc5tEEii6mhKY7FBdcKXaWUqniWwZUUurT",
  "key24": "2oqmWyHUmxfhkNQdCrZyWxwbceGgj5fS3qZkfsQcNSA6yFLoM5QRZStk8d1jMAtchiEG32Vog244XD1dtGo9TZpb",
  "key25": "4xYm2GUAvnT7XJmvxTeaZoBUpNmNSRAAyMqj1ct72PDX5tYM2t3rFiLam13kXfe93nmepyWMjsHQupo6BDUqrLyz",
  "key26": "4dcUybyBWKYxJzNJTtXv1s3NWaLkaAXk7FcQm7U3rZdDw4MQur3Pv3zeot3h42wduGYk1cUBewtvDSjDqnjXukR",
  "key27": "4xj867E7TQU1Z9BEdxpE1Wm2oh1L3Vj7TofR7Juz5a5EVAjUXsvyVMUAqasebSSRJsVQ9Q5RcmC8XiJuPMmvWxzb",
  "key28": "3bjHPoXu99RSrSvC42aCEwo2JCa6uzY8apU3Jfbf57pubo3ejf9oagunNfPrT6ehh7UCBRmZM6eNCmimjmYQqysc",
  "key29": "5cn7WyEKcXigJYmZ8CZhnyAJXD44s3MAPsVJxctP6f8KxwMMUSb2yvFR47QqQMj9UnGdkTsEL3NunA5h1qzQsHPM",
  "key30": "Kifn9ikiyU5atY3SjMFU9QGeUV3Zcdv2TGMEHSorjmxAzkR57Zgka9WjZrSx53fzrCnDfxEABQn1dqCKNn4NeGA",
  "key31": "3LWE2nVhMHc3qptsswJ4AoxZexQNZTrxRBShzgHKzDgFQcERfpQ8jJFjRyBEGTB7dnk7KWkpTnR4vEYYdUGrx3Cx",
  "key32": "2TT2hCtZSCxUXLgBAqQ2BXUK9vAXsH5fhtKccP759bQyh8w9YDnfBbVc12qN1RvT5rSa1xinPWd2z86Qbp8acpyB",
  "key33": "4EEY1QY6opyEU2NST512sTS8uxfK9yP75F6KNna2Nq5NDjkNDHdWZTY663G5vBbnFsaw13eiqkaP95vMkBjnNVQ6",
  "key34": "rMiw5hcMTj9WADfrZkwmURwW51ynkZKeSbeUftYT76TydMkyERuZD7x99abvnGjGsh56fu5N9x1c7yWjZDoMwXn"
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
