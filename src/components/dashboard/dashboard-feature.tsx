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
    "3ExvuDkPEuZgUFjcdiWMGd7X9X9LyCFfoXX3SAouw6ekyzBkcWQUfkcBCvDCCjjUdmGgF7PLKwiShvx9tYL7CN3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fVQ2Vi8qT8uNjhgu4DeMjj9NZJEoTCZ6xFnJKBm3cW3Hr5CnMUMSd2EiGHhTQjpYUwXvqD1KpreTyouZq7U8KuM",
  "key1": "VyLJgGGfPy3RcrcW7dHucKvkNK63Qb4tymJLhr6mrg1G72XjJFfBjNrkZzrkgvVUnE2aSjZzM4QwDBNQvUhqSek",
  "key2": "vRPkkD42vC2igWiWPSMZRn7CDsauD5JZYVLAUKxSPhDnjfUDxHoYNXw4Q7QqPybPJFso6E7kL1G4sgZnNrfPmev",
  "key3": "9EUfyHbYLBMbYK4dMyzZZj4Dzb36sy3bi87WQPKbghDuu9YN2XLsDiMoArFp87ELF9kMSrBAHSgkdSwhDCmvgLj",
  "key4": "4UTpgUdQtdBZFb8trrPcCDwNFNRZuUU6Fo9XquMJ5wPmMruY73cxCiQ2Cvujky4cXbZ7ZPC2t2AmgC9nzUik3nVo",
  "key5": "5GUNNCpoooMW41XFMWvPE57YUZRXfi7XhVGuHKLRUycHw8RnAP4yvq5SsHBKL5hLT3ZcCrPx8g8cL1YWoCyTB19G",
  "key6": "3PzRwUGKorP1JYXRD8JqxJfytyzVRkkgr9BxzpU1jAHbfZwXsyFhuXrRkFsRGDgKAuuRzBmJQYaTTmKHkHboVqt3",
  "key7": "4E2x6zM3yNBkyBYU65gRoMS7KFXEGWN6VURmVWomLXL9ZLLgBUqBtrvk6X3t5g3pxHqmHw4nw2BgrNcEJg68nQ1W",
  "key8": "3toj8X3vKtCG556PsYivgbRAZ2T5avUHvVDe2uhbAcab4NCiEH4upEZHhRS5xpFBb3C863MLQRHg6VqUf7swd5Wm",
  "key9": "GKV1u96Fd8nQJLC3w1cV4Xfyw8pMNJRKuQTNbc2gEQFY7vwKPghXJjKEtSSf6bx81htbDCh68h5JwjayFpXGm4g",
  "key10": "3TmTPSmFYVr19M7RxX4diSmz1jJ52bPPKqUkG5YQNEfPXbZDPYJ8fqskJL8NiuVrx9ZxHmYD6d7FM5wPVJxTziYw",
  "key11": "4rhxJ2pC6G6L5DUbQKPXRvyKtex3pG2EYj7juE7aGVtN1bPaN8KuDpEH5EcCtMfcyveCagyokJZUk6TFxkmBo6tn",
  "key12": "941SD5KbWCGFet2yGSZ6LcrvJoFhase2jZ11zoQpVeseosSKduiwUoP7nnE134u8DKTKip5989xAeSATP2fFVDz",
  "key13": "4d62XPQQjMgKa159w82c9SnHF1mwDavxCxExT1owP7HGyNUuuZA8DqsxYitCH37hHMTDWVTYXLsYb5eng47Wcwmd",
  "key14": "2ZK7JsBqoK1QGC2uaUzySGseG7tBHMcaovhkfqVydof8BxAyrU9qo31mNHENkukzYjqBDznKBgRa6VGyQXJLL7Ey",
  "key15": "3y5ynCUtf2v6Qt87iK9ZJTbLKGe2QfNBpGRucZxy8AqdfGKgTP9JUgvjfpxHHDcVQtm6FivsFNLk4dQC2t8b16Ps",
  "key16": "4nEQ9ALh7juSrUoZm2M4QwJs83pGqB27dpmZYvLFYc2KH6TUpiUvSqdbGf8GF22HqSyP1NSn3EzZ48ARFhzWSwcH",
  "key17": "4KLMYNW3GnsXguWaSKA6KUerjviRvQ7Ztckh5tJmysNXXvnS6Gd2DxNNrRsadTnCRw8BbEneAPW1Gn4ukQ1pAH9C",
  "key18": "2mh9fQYP2qibidMbfBUTUbkJxDpBB3uZY1pJUppQxbgi2qpgtYDTAtxtEoVYcgAPuLz6hAHqqfdjNb6P9DLay7hf",
  "key19": "46knsux1qGMgTPNXrDVb5kAhf3BGmSNAzoC2ouraCpCoKg4D4eig777yDGF3bpoAzRVydQoYtne2rwpTXPBfjVE4",
  "key20": "32zULiaG39zFc8MFgEeC4xhNm7KccPwFz6uZwzwyLXZ4Y6GqeGhna7YYuBgmxTZS4umaArnwGPeM1S9Gyf6ykKda",
  "key21": "bgiVDKqfc3UuDz726CueihBsqZ8oSVcgDngU3pJwWgWEvv4WmZN3E8e6FYW5d77pMDwJbuiHKLXVzjAnBqWXCsp",
  "key22": "2DNxGJvksCmmHCBRkftUiLRRX4JbAcvinKQzKUPnnNpMnJpxDchsfBz2ertYiGCLLWDp3s6SBnTFHRQZLbwJXurt",
  "key23": "23YXkBBdvXsCV5DB71Ej8a6UqfTKtkbLU2CTYR2sbhcotyBjEg4oTP4fXs2sNCgjaxHxfTS4NxuUia1dBw5ut9DL",
  "key24": "5qF3LRMyJTeTgvUAzRojpGc7bhjPShqqZnFmME1kHTcYRpGF8PzH1d6tTVMHT21bg8FsiFpwtALJc8kMDxbJcsYH",
  "key25": "5pGQprpBHNzVMQwfXhRJ8ZGhmyNTGFJSxm8zoRMGDrxFQXaFJj2xkHamxYRRetoB3qw8zfBt9jJxYaQtPR6viy9X",
  "key26": "fXRzN5HT7uvFMgvQerqH3YLR7rQqFiA4JVnTN2dhQNRsrsKF6nQN5egh7msJbKVTtW1oWDzkTUTZocGmsEWHGLt",
  "key27": "vLb9gAhoWb9vcL7vh4QL8g2sA7279B9gsnzcyBDDAYBoTTJRvm2Zk2wDEJitMXf69Ep8ChTfcS6L97rog4daSZy",
  "key28": "4B9o9GeB73RZPKGHi6XiwBNvjU7VPwh8vgXadJgu8X5bAv8meCJnsmkwNbYz8h38bLsXBir1XXYQk59QjjXqBd2o"
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
