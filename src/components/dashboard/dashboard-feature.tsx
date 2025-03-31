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
    "2ZeLQskB5Z6oA7jdsxkjw7yHD3osDLJkebP4Ea6xGCKLcckYf9EXXhvpYESfnXKXxWZ1kX2tvhHNqgg8SqG27BZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2szu5QgmBo2cYbirZfJaeUHF2DJsxrJfnAhr4nRaBHQSnyqiRdNrTLAPjPsAxhfik4CRD8eWezRrYkGMRVWwHoMY",
  "key1": "4ou8uEENg7zP4SXiMzw8wiARmXm8cVHAkAH55x7zgdkwTcL7SLALQ5nMoWsSePmPHYDMGrM61P7zzywBN5ZgAB7C",
  "key2": "4J6QpY5gnyCKh8fkFfd32b9UER11htHsiCRiPxXHG5TDRDgQRM82tNnabizhjoh7ne8PwygCq2kiM1iPn4UkiYKW",
  "key3": "2VxTDQZ3e7j3adWdwJwxneh8oQ9MDz8z8ipgCRpEVCt7NAe713ss3B3sU1W6ezvCxZzDsKUjqyFPtygcfM94ycWT",
  "key4": "4scGWDmLE3vqXjNDacF9d6KHAtaKC9LjfrvnEznEPGoddizM4kauUtwNC7jecA61jwxZMwjnYu7mc1BSTDgYaoC7",
  "key5": "4i4jnEDTfUG9rzZqmwvE5vLpHgFqBpiL8rNFYMqtS38dXYMed89nKGDsKaeZM6jiEHhapWtqGXpfk2bcMpi5CAYn",
  "key6": "5yqjFtjiBoN7uSTQxc2F42x3b3zT7QXQnn2WmwtdejK5H1oskJZJTkCHtHQ4C7T9iu3qm6KPBWiLfBGQbGiQSy6g",
  "key7": "5pcQ9Ro3qhnWba3t1s5dw53d9v4EKzitArzDpkEQNBgfhhLbfjUpGMhwTH2UaLT6LE4B89ZQLURcXvbYNsqjxxCN",
  "key8": "xKmGzm7oNEuaKEHftt8MqJqt7kxqNMVBwccsoZEWAzepBv9w9BVCcjTAJHup6QyxwmsyNEBXeZnNZ4F1GDbp3hv",
  "key9": "4HZcVnuZdbiNPxBW8WrbzDeVbB6dJP71BA8Rj2sTU12icqgoeiY7BqaWo4nvmqNvXPSfzaXyFmcmxLCAYjopzg7p",
  "key10": "5pScfQJixEPEJqS9ZsudWKsVMmr3PpEfi46jxFR96WK4iQDp945qJMcKJiUSk89KSUj6ifUibYed6G19Z2PJSxYe",
  "key11": "5k5M76iAEz6d6Pk9G4ZQUpPAHUozSBbFHjfiWGTpoFM2qLadazuK46gUwLzTtWuavtTBFyVMVfPNzxvexFCS8wa1",
  "key12": "5Tw1P7buyn6PraEAz7xjeDpoVQjtB1tAnfUpFabmriK1L73gKLDQtcqwACiN39mqV8hGHa9jDH2PzUmpjJnPkDry",
  "key13": "uF5wWLYPf2L4q7qkMK2sFPKTgGRwuQ9yRwJBCBjCKdFdxWU3utodSQe4hCimH9XpEdvDbKZ7R5WXG5YvWcG26Xu",
  "key14": "4q6ZGPWYogzG7W5wMjsq45VzYjGiYK6Q9RsdiGzMiAJy2rMNRgEviVgQSLEn4f5iQBz2JAb3VaWQBvkpjLo5nByN",
  "key15": "5Uox1xrwL1qg67ECwjnykYPbjfExHwiPNVa8WSfufxRTiLTGp3nLvB4KXdEA1RVgPHnsMwT565pAzXv6DNcEqAyG",
  "key16": "peNZQnPPgQ99fQsAKjmxDj8xkrNhVvCvNTkQWeAU2ZqvKKMLiWSh6BXP11X4MW2Fgr9T3ozJ9D1U9HHvRMgbgVt",
  "key17": "5y75nMNpyhXjDaCVVKYi5uQnkA7erxF3UPoepFd9F2gC7oFZ88DY4W4aSTeBTdRxNyYA1RtC8dzAbTUc8BCKnwDz",
  "key18": "4U2jqjXoAEwSPnpdR8wRGTdzb5CByx38bSHBLrM4M3vBf1Yg3x9NaDxLux46ngEUT5Qzsep6XyVs4JXfmbEz3Gtj",
  "key19": "4AcPHodqmneidgZwdzDSxWGCgrCzEUaAzMGEVhR9yvg4VTW15EcfcU6yuJZRrNiqfkCz6A81KwRUMLfsEfr6z9Za",
  "key20": "4Jgr6D4d87qk1Guw22P2V4xJCohc7TgXH8K9Xa59zkPrzxVn6gDaf1BboSPfin382LMAP6n5cdckckmwvxGTpqGG",
  "key21": "2P5ApBMcDtEgq7evWBRbKskRb3QUGdBADP1wnn9QVLr9ypCXTGcEbLpPXKHiLUHne4uZbwWhzBQstSUUo1Qp9ukY",
  "key22": "UGf7o4z7Ls1279jPqyyYfpdhVEJA8QnU7PvtMpYJ5NhALFGYoQ9PhuPLVv6a81VoynVd1Sd3c8y4AnUfAi4ZqKJ",
  "key23": "3deM46idhhzmDVCtSWH7VY5Bo4NKYsaRMDjxSRBf15uMkQTwhu72fbvJEigxX5Gi8pXrkaemLUfkJMQ6QwMiRN1u",
  "key24": "29R48H1q3L74RkDmF7xC8Shu1vzrbGv3z9zkS3A62K9EwPeVbyZT8VZ3nGs1T9DHGhjcm1nyRa7EWmveDu6p5atX",
  "key25": "5Xou5hBUSbdDguvmmRTtu2E9MUeighC2xjMe5weLTkSgmPkJPiY4e4CB4h9JsDD88BPpx16NSqgGYMpLEddgKxxj",
  "key26": "2985w7TKHz7YeDJHfb45oooefH8tVe19By3c1EkHCVUoU91Nxcuj8pA6vQ6pw3uTnF3V9MpQPQ1UTC8Tmj4PwuNG",
  "key27": "4EBkA9hfjE7nNYYpZHHcwG88tsZExwGYNw23hakMs3nLg2PpzH8WE7ABLZKj33MqwvP4Re8WMNP4yJY8Rqu7xY5D",
  "key28": "5MK3PT3JX4ppXg6atUi76rSsEXAnZ1oaNCtr7Z6Kep3w4iHLUUWaNUJZucN9b9aKsxvvnrLu3tYhWidsftxbk9Gn",
  "key29": "2uLFdTAjttLi5qN4dfixgCGLbUdrrCsqSdA77iQaYAKyy88MpKJiC5eyu8rdkwtaKVzzn6ntLKSfinzY1rkFxrGf",
  "key30": "3ChM3uWAeJ7bi61zPEdrH3276XS3U1Wro1QHua1zuo7S5HRo2uTc1FhJYVbL5NeANpJiAgGGbzQjMzc3bM1N2SxV",
  "key31": "5K5Hf2ecokXpP8ufGekoUReoa8TC7ouvsByZ36yQRobePj6X9QeXq4xQrLVqiRJkAbk1AHQ2L7Xh5wMufrvEHzw9",
  "key32": "2B7tSgdurpLsd4TqMfJBCcEu98gjbVG7R4F9s3CLPTvVwqgVAhzm9gSqFV1RVf6vPQcZR7A1iDrfVrWAkLWWgs2G",
  "key33": "u7mguwCYbbP8FeCs1yVSBVFztSPgrLJxbecvoHUM4GK4UANi7D7aeTufqmYivzwWgzkNBMwYfaqr566BaT3PvJR",
  "key34": "5jjsopsSgQnar91DxWy8x7T1FJPgccaH7NtwpuPYSSHi7JZ7BPD1mhpKBMxJkxHysE5SzLTmsQTj6XdGv6MPxF8n",
  "key35": "5P6yWc649pGBAEohMnV7u4LnGuxW5ngBn1y5c71mnZX7UiJTUNSvq8njrZyvEhCDZS4crwG15W4Ew2PzrDMfPNbc",
  "key36": "2rUsKYxVSQHm5Cu3hHy83MNLMFzjXbo2cDTTqs7q1UZJwYfyta5WfhBwhpg5dzRm7jcmbpWSEufzPfqu3Qrxz1bd",
  "key37": "4yjxdybAbSaeEEXyswk98d1XcZDrbQcCi2MMVCCoQWRqCtFdPG2jcNuS1AGkbF7B2bmrBbnxozWxHpXTTxmVz5Uq"
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
