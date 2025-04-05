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
    "2DJPZBViwmMNqASWCZuH3wqc1s9ZiTKLQmv3A4EQVm8ShKJaggQbCBjMcYB58TRUsnRxqS4gL3tZfA2oquNMtb3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U7Lk3jKwL8hptmc7Yf28i2eaRMyPU1McFbsFyy5Wa8KBjGd1yUjhSkkEw4bt5kSTxHjaxW7i5XHtyNAR95bDyNL",
  "key1": "63UNs8r4WAFeMefncXdSr745SKrU7a5ew2rqTacH4Gv2wmfCZGWMAhdtA3eMyuwuwAiTtiPko2GPn1rLucoN4cAj",
  "key2": "4JbejUP7oz6sbmJb3hRjphU5avc2qJdsf5372fCthS1d7f9G54EU487KGJurnLDupR1Jzg7V2K7QPacd9rSNiPSw",
  "key3": "3T56hKviitJ8BpNkLdpWHaVoUWTj35YYH9SHxUqwK3NXbhbeR1PkGAerYGp1eVCq92HFqX6cnbEkCZm77ahaozi",
  "key4": "3ztqn4xa3969D4nBoMMsfgwdrGEznsbjqVPqjoVgZKycJKkL3uSPHF2XfGZh5XxH6fJSaNkMPuarXGqbmvvNS5z7",
  "key5": "4hkkwUnGGr1HCMBqodG3WgTkcc4kvsks13MjjCQjFSXq9XpZUp8NwAPKnsAcjNR3PjxyDLyLC5GuyUwwcsKGjZdL",
  "key6": "52qWwFJBWTxfM6fPr9KFMmjBJ8qmRx9bbaBnXgbe9JTZm4v8kc2CBF5rPYx4RK3xNntduB6aUQ35bCcCyc5SC4tL",
  "key7": "5JMfiAHuyNNmSVGZ4a6b1pYFgopBGpQL2mYJmbWj9gyosicvejg5dYStib9WLQxXmVqHswVTx8jwggWmhhJYBtqd",
  "key8": "2dv1BPYAci4f54QC7LKsEkwjESUs9uJeefJujucnVGvPYm3iX52db4cRuYH3A49kTHanSrsfv1Zutdw5wdR4523g",
  "key9": "24ZJHohVrMiBT1jvWSYvzPABgxL5k7zpUiQ8mbQ6j5TqgDP9y81aaWipfNRCwYfLHFgLQZ8WsRLiYY26GSmeqCga",
  "key10": "JXuNkV9c11zrzyzfByuxm7RgYBVaLktunrn4wpLs4agPUdHdmeeaxYkXL9Dwvt7nptWprqvdezw1EM3DATMNPXC",
  "key11": "5gsoniaJtqqhvAMCZGdWrE1ZTWXYTikDPtpuvLLGh4M7rqq1nStXkqYjiLqJfByBy5C8x8917z9kc25R5AtSofyD",
  "key12": "59QfAuqBop5c3Jy1vGBnFUvqmeB5baHxaYtUjueSW7SNQdUHuSNueKv25PJ8XtoUbYxdZrBABCmRY1W5hSaa69sN",
  "key13": "34vAbSroqQf4wQodS1dPG9MUpuBBxdqRgSHaJgWfhMpHwB1uiRWfB35tgTzWvBRc5eBoDS7fWL1npDJans4Ck8Y3",
  "key14": "4xJuGmwURNdJKYjVPeNE4dWbTX3v5EKDcJLEd1vrGe9vAqSow4eUrUzXUSh2YHcAz2836HPxqJuLQqULBmMoN8EK",
  "key15": "2Eyc8azACkRvYRtVk4N2foYpaTHf4H3bHybGabM7R9dGzcoBt6Vi6SrBr3jEfAJANuYKNAoMu94NE5uUxux3i61f",
  "key16": "Kbb49TUPRJJ2AYQBj1baxKVcKA8u688Xh69EaZWEnjuZkc9m1apAKoVhv8d7PsJg9Bbtd8z8ytjq83dAPikUCqd",
  "key17": "5bG6esBYnmYGCXojjKRn32JeQv2sbVdpVhN4sv8FTKprmTWk1T5gL3F8rUtQXutrBQFDMTfLAoDJ4nenyJbhzKoA",
  "key18": "5zt5M8dADGNW9JtXxZD1YXTTjpQ2DH3TAvfwfYCj6WNFnHLg5VVyJibj2GP5zv1iDaZ3yPyxhE8PaV2thK1YSfsD",
  "key19": "2ah7MnEBMN35FoTcEZUnicFTBXdUM5DcUm3P7VL67r1WfSzjtWy6MSDBWtSRPeB7rPrEApSJNcqfM2cGdQWaGV87",
  "key20": "4bpmS5xmSn7NFRAvBKRhmcikvcCMUBaEVLjX24xjoCua82AXEKXuVh2p1jGTEGKPrneMJwDXXiEMLL814m68icPt",
  "key21": "5839zcrvLivfLrsMMBmk1YiULSAZ6E7qpf4BmKrHZJ9HsPpJ8xPRTk4MoXyvAjgzdmC7MTu8ojX9v8u62ySnL9gz",
  "key22": "BNkKDHkCmKnv7eFcaUW3BfxyKeLEXxuWsV44MNMnQKoSfbheSPyMfWmBVsN3URVccJYxgV8zjDMjMkrPnC5eDy4",
  "key23": "5tTrdEJ4itVX68RJBGie8EBt9c8rxbVGS2u8cu8XK9HDtiByzVsVLZsv8pYUGwqNujNndLs4S2gR8q8wDnqMFte",
  "key24": "4iDkVhGsyhh2RN8UTKW1vyDQyqWBTRFhvVTKffmYtLkJqszpEHXmuzkJ71vwG5XH6yTSUCMzrWfcV7P6uBt5WvCA",
  "key25": "5FgvNjQMUtuZKdF6hCfiwxThzehsaBz73DnUh6HL1PDhH2HY6V4xoFnxvRSUZp3ZZB3zzuv7HqwoQ47R1HYBMzoz",
  "key26": "t3jurpQ6zpx1t9Ahc7t1rf7xp2YVxRXVvq6YwYg1VnzEC3b3Qi4rUmAWWKTMvmu7nLL847beam2bnDyEvKwU9UL",
  "key27": "3hL1TaCWDZEEMb5wWN9AjQeMDWskm3gzvM1TMbL98nRBdUEK8K9KN2bjQpdMsqVru7jVTTvmqHJAJPJKKgn4cNxy",
  "key28": "5HqEdqyGu9ouH1uWQqPwuKY2eANm26pqVSYrmb8LwGFshqcZTisFKKNPgMT6cAmKZdXTA3x8wo9DFVGG2JA4bzPs",
  "key29": "4GAzHtv9RYT4evDu1oCkNySER8QTKctzRm1tH88uHALUWq6PPQy8HaGFmTk8YNtT5AomXPCu39t52DfzAzJg3djA"
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
