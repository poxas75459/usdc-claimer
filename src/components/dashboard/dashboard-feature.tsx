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
    "2EydoqXFPk7b1ZGPQc2TSMVRcwm3q1vP68wpFPwUPesXa13XPpwdH6o2PHjSDrN382Xk8wsDrvBxhteoXqZAw3ui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vjp5CPGpzvVWAcALxdw5M7BqynAFQAr7ucYi6TmVwPRCBJ6mksrqc8Lo7YVzjijRw7cn1UGM9snFPG5FwLoLHkn",
  "key1": "hDD6dN2Dd2kG5nyWirV3bf2aU47mxy33XFscpVErPw9JjsWapFFqZa5rE3b6jWu4FS3gTqL711nzoq2rdprzE45",
  "key2": "3aVeQ51JS7pKDv9b19N5ar2N6RQvSseXRoPjr456o7aWeEaQ9U7GqgxukrntmpReprtePZuntdcFZfTStCc7fg1o",
  "key3": "3JofjYmiUHCEQBTm1pDGpUnyV3svdXxWUvYXRusTU1aHD8LeJK5rRv8vXCxkhpnMpSfYeaaHezY4SGsn56jKDzZA",
  "key4": "5DY7yQ1kyT4ArQKaRNFYioAqiKDmisKWbzzkU2knYsrGddy8w1yiwEsdYCBF2ft76Vss7Lxar7pH8kSKkzNJgr9k",
  "key5": "3F3um1bpg63zUb56Um2jtHfEj6WfcFQkm3hC6Xkyjz9DvR5RBRiBkq1jjjMGh4n1k5Np2HzuvUqtxp7NZv3zqVtx",
  "key6": "5LhyNXEyPdhyz3oFW4kxtZdPbBbx5Ga6jFTjQK8Fvx9Eiy1m3k4sA1i7Un5ZsLKKHy3f9jho5GsPrSrSZZWQ7h2a",
  "key7": "3CPSJAXk3kkLE72Af52KSBAGFmcyoDahgEmmgQ1rgpaoRmT1wUWVfbeH288sN7QzTadMNHsB5scizio9GKV8pRSD",
  "key8": "3qRsZAzB5s1hHEhrgXiv5S7V1WdirCXHXwkXgm8rjoMCr8aGcXTZgjugGV4t2TfdpvN1YWRU5UTrZheGsuLpnejX",
  "key9": "5sAqF8aB1zcRfCWWg2qRvWKdC7kRBhVLAf1FEDsyzyzNac4QL78SceKeS8kCAjENvy7sw7oUAd4yg56yNPdGgHRi",
  "key10": "LctgYxntGFxwyLQTteiDe3gJ1yNvXX8mjGJmycqWWmjy8hWD3kqArJhoj1DV1swURV3yLwQ7GXfTp1uxxawQcVW",
  "key11": "hTNHD1DPZuHwURyrSUYzmV9pdspMmH8a3CQhvug2ZrfgoJoosbnVFvmAx77jJiVdhjUyu1M9XsgoM31GpK8EajC",
  "key12": "5zbQycaBakyLqPk5sG2RJxSmwSAEaLN3SmCuk9fB1BCtTLmxzEnLSsjgzBzrHCxdcP34g5p7SyxTbCQUTwoER87T",
  "key13": "3aEYZbeQdaV5tsL5V6vL42tqkPzujKFVhtpyucofmEJaofsPCgUhdJfhwWsT2fFYxq36nYVe7cbwHsJbemQGgV8m",
  "key14": "5DYZajMtm5mALJ2gW4ABx1wigL7zjuQXRWy6XVor72XVthZw4sV1PZiWocsHpNYZoa2VVz4cjYNe4wTs3tHdPakF",
  "key15": "37qMvHAPUiZcE6fogQyihppRcCEGaHnhc7Uq29zgNQUkw9rRQ6vsQKQXKMB2SMYmLWxWeA8a6SQSgVK1LNg5Wnbo",
  "key16": "4mWfFJpiXpxWhLY8akqpwxkm8trZssHqLssSD1GJaLMqyac7W1QfEwTzdD7oFCoLs7e7MYa7XKoMQZap4iEzBAcS",
  "key17": "5DjbwTq8kH2CkD8v7QuhYvaJgVa6S3YmLqf7HCRpy8yjcRU67bUynPjpBs3FSakuMuWxXgQXkpYuLH2qRgJNvRv5",
  "key18": "UBGUjrLVMVkUG4pQYuAAtTywasNbhBwaVNbEvuR66YhyYPTELF92rxBcZwUmNxNyoeMQiXFvWFtXQUB6ncGrswu",
  "key19": "46Tmyggo3bqd6Y8bLaZZqxFcpzMqYBrxki97HyBwxksavwsUnwNKZgD2DcdktRVbfTdCDSJKjpq9rmydCFg5UHbr",
  "key20": "2jowSYgDv22RFAfGYyxEqCUTbBf6LJ4JKq9rir1VqBcU3DMsp76zxymPYsJ9TYTKHUqjrR4UL8oYtWcpoKz56YBt",
  "key21": "2ww8xLvt2CtwNHQxeSd1bxdRLmMYy8vEiA88mPNm1aRmLsMfdE5QUnK2uSstu84cm6izEsoeRHsb1zFv3L7TNBPL",
  "key22": "2kshBPmGEaDYcDf9r92hrkBZbNmSAZJ3NFhtcUXLG3QGZMPewsm1ZdM4vqDsCBGcKRzRQo3JTEpBiXkh56iDzgRh",
  "key23": "PBD5zHc3vm497JyMpDinjdFNCYNaMMofdUi6jv82gdWp9FRnZsHpxao3CFuDbQsgTfXvFVgqDfsZurpYKenHgAo",
  "key24": "4goq1Y3hobw69mWJtGRRoD4mXJEyPP6LnqRnskmAppiXz6CLQoz7iuMrnm7tgzAMCYHSkc5QvRBRfJeMLXmQ1qCe",
  "key25": "4kcDxzy41mVb8bqDBX7kotNxCvwm1rizy9vQfeeG8ytMQe1abriLHkBU2RRkMZQCUu7G5a277nF2oeCvrR1KfHkF"
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
