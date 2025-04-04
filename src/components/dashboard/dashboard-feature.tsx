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
    "3wvGneHTamRoehBUcqwzQ47ENH4KqJXbsKaFAcQXSgmc54oQcSW7wgThK8wfgCfpFMmfdMULjyyUbaCHrRE8VxbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bCrmahm2mQmb3wRKg3R9eWMUGn4XaYbzZQzYRLgcagrgfF9wWBtkCv1QRo6Jga5ABkYm2xb4h9TrbSn2VrRQX9Z",
  "key1": "4sBdpKEPvgogWVLK1xoWDx28yasKZLmKe2akEBCuBQg8vHqHaSzdCCMDxm9eFsCMtA5vt1US239HhxYWfNZK8uQd",
  "key2": "5HiGwR3LqdzdL7RmTZsnwegRajKwYtTf9eXGUAMYzNcLJkQLsVpQF6eYsNjh5wmWM9rwVPSpev8CiTrziCF7ezhJ",
  "key3": "2FcC2Seo7cFkfvYiZbMNMSaUyMvq2AEThjDdBsZUjFgzBi5KahKkBjBkpe9PK7P5Qqvvp6h5kw5483SPpeHQWyE2",
  "key4": "4idttJMyNTpHmicvDeZXHVoTJJrTL1KK9mD7AH8zDrVvkLGTMXPcD6pWim4PUjfN6LnHoZ99ZAGrXiqMBYt7eZDV",
  "key5": "4dk7crF7BjiGfHPsiYgg6f8vs78vLBQ5zUb9tUdDGuCsbKNo5nYF5HMnuqEULgJ5hHG4XXJdXmn8us15cjpm5zsX",
  "key6": "2iddwSq4kfmDSdawYBTSBWFXpyRwKrY7ExqjVsc9F8sNn9V8o9h6qas85dHLzx2qBtzXzrpJe2jqEu8j3Q81CDVK",
  "key7": "54wNf4u5FTyL3HhoPh6aW1g5yavwEQy5uz1484zG1rWCcBHVLMLhN98E29DCVLBF51m7SHtabLyTirJdKgngWjno",
  "key8": "3xjhjhoWsSzsN8i96r9a22cbauhizfA4Vp7aE1Spfyov6B6gm3oHusBey9qKKdzNDbbzCrtVKLzWLWxEioVt3wsP",
  "key9": "4jpAxdxdhXQQEcgjgfePzgk4f8VDTX8Fnn2CWmWmkbcChzB6As5pdFSppcLUULRPAo9kXFonjJw938rtByLskdXv",
  "key10": "3YELwSWXCdDiHgGwgvuyi9QVgZ7keJqhBjUPGXEZJmgiUtRYuMmGnKHbdVKu65UQv32584UHCXWken92wPyN6yxG",
  "key11": "3n2Zo5KMxE5d16Cnq4pYFYsN8w8y7dZmMj8y2PaerBYEBEuP2QuvC7skxzg9zqaWR8TetMHaAsH2fiBhMjqgbYJx",
  "key12": "2EbpEPRU7WLAfJAQDiDiDZJC46thunTx6NvXzqJatxefiFW9ThC9EXfV7HrYkGSiUMxMyBRv2bNgaxnL2teDfwtH",
  "key13": "4Bpou9RbrNzq2DaJ4ykfUh3pMTYv4oFuEg2ZVGxrBw4Ndi2puGAYKMb8g8UehF6Uu9m2wPckKmZpMhYeRpdmuXXF",
  "key14": "3Xjb5DJjTWghy4ikgumi491kmGz5QYqx7e6pxq7rpJGTiB29JjpqR6dUZpEkpcQ1m6ugZnuP5Qq29en18ULLyXgS",
  "key15": "4NtRx7YrvgyGR3arapDLniZmGdBDotS1hTFoaB9Kz33qgfRD9FLDndjfvMwL1c8rjorMwTwfM1DU32Erte67CJ5Q",
  "key16": "87GK81zvEDCkrU7GNRoXiYnnt2h4M7PCwk4BWu7q75pZjqz86SXVvZB1wfmufiPHfbL3PFrFQm9SjHPknp5iUWu",
  "key17": "2bonzyqUGR6b6LVe69H74vp5s7jLLGx13PaWuDG36y4wrDqsKomNsTpmryDrnjsvJSVfMWvaWuV38od7BMQSiwdG",
  "key18": "2qR5BqcZReV7M6cuwiYVKJL8865oeUTokUAsF38eQbEZWWZiWYEkU1gT7xD5ENy9s9a9h9rCXXxXPRAqnRoMnKVb",
  "key19": "4kDbgSPWWf6gSUPSnmw7gwTnVbzQv6MyejwUQjvzgqUmqxGTi7GEb8upBiWA7Y7VZF1vfaRdHWsHeNN1AV1zLCae",
  "key20": "3gGiEbyo6uLh8gasTUewitpadL7aJVP4viUNYp5mzK1naT1SVVcN3xfVGzuTT5Pk32LEbmy7jkUGg2ULYhcnXyhC",
  "key21": "VmzhkrLdd1jaV93zj3oW6p2kADZjrukkrSNoN1WM9GkfuYynxm6qJVYPErxXoHJseAMGvUs9YE3gTys8S5cQLhC",
  "key22": "4xLfc34LLnQ3Lka95RJH8uecED7fDPLevgoSF8VZh1tiApox8kn1bVZw8HktzCVSxzESS7WDjQxJq5mEFeHnyMoQ",
  "key23": "2DYTyuBNwQbzkRSczGXatgY5naKqd6AegXksYdkhSRTDfozDv9jEwUzPheWU2dqaBcSF4FhwbYgrX28reowYXyGL",
  "key24": "Abasaday4UNGM4GQpQ59TpFPzBDQNd4hnk2Lx5P3mekzTw6Wp42PXf6CEzANSJiHBw9PTohfjzdEjRckfSmqRi9",
  "key25": "4kBHMwXWUJPNDuUKXNZJXmZuPUJnWecab1AHQqWka3x3nuRSbSEETkfYZAVSbW5u24S7QjW2gm1DgfwHff84NBMF",
  "key26": "5pDtPH93kTa5vG6ciqwXtYcZDX19K9xF5VqycparZxkzCvjha3cvcp51wvbcXxXYUdYMEg7XtMeQi65RHp5TngpM",
  "key27": "5JyDQtj2c2JpanAigG1FtxFe8b2Csjj1F21vKCsMWN7E6bUAu13Hcb9nt8qUkzeM6siuJhGa3gS8oyCYipPpRPVo",
  "key28": "3pW5sN8vrWCMmXvJruEbF643xjtXQdmoq2JvWAFExWBumgeBhKpUD8xPNjc4rEuRZB1mQVRziRxUbgacF4g4CmqZ",
  "key29": "4x9AE8LUuM3yjrRoESj7ZDGvzUCbjqbytUUZnbj1n68P9G511EhzTLenPPzEXWC6oRNNBZgREaeAtsCkirHXGwgz",
  "key30": "5wj1iPvR7Goac3QS2wwbDhk1Jps5ZTDNWUmn4VdHJT54ac1k5uuk1SnkUzVkb4sVAk8bcmyNFSAqKQJibMoUyq6X",
  "key31": "67UvBGA28CWbchNqBVsUrCwLAt14GpA1Szgu79dLBVxuKgQR2VhWTbTJiYnt1uPSdBUSSwsZbxSTNqDTHpMTP9Ht",
  "key32": "4q4gRFDGvJ1CitaQit6Xk45TUJQKJok4f9veD4XE3zaLUs4xpvSQU13fDvYTDg87QTEe7j8XboyjAaxymooPEmsv",
  "key33": "KH7BGYoTRP5oXmWaY2a4bjEycdXv6Ams1rUCXY6KD6SKfcjXSndhJr8iM4BmX83Y8XyUX5GB7DeWWESj18Ksx6c",
  "key34": "2XyEpz8fJ8k51csRAKtaz5NH2EMNEwRHduGXb8h5oWo12eA51KZuw5E4AFyqoxsr6HQdHSjiMiyyBctLfvFUrKZq",
  "key35": "3DfzAL5WNqNcJTXvaWxM2426kiYQxaWregj6nkpJJJ87USHDNETHX3HypNcH8WXGfXjXCwF2SvPEDw99qt4j79w"
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
