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
    "3VFW8mvVtetDp6WEsVL9x8uY4DPqkHfjNykBYqRDnK72XSHXZGUhwfdRtbHKLSGyYjVTXaL6JHuxAnPrZXfbWJkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NKTYFqSmYq2WbpbCLH2TsADaLqGWMNGfTe21MnzKVao2gb19fZexVcahjqZRKhKxDPhXR6XfmaFCFzMpQ6BYyxs",
  "key1": "MYsmuugDz8gwLNHrhemesRMsYUuKrjvKtkfRBLbotejbYqkat1DQJ2GfmgBd8dXwGzyLjBrCTb6DHYoqrvkrsj2",
  "key2": "gFstc8LESjykcQysu2eZemXSN5xXYQrBtboFzdtonLM3ysCEetUgAt7UZu72o2EJXVwtqRbmG91bKVnqAmao41R",
  "key3": "5dRqCHk4XJM6W1Au43qDrJPyf9WooHwvbaSwmC63iMm6VtwQJporTBRqFbZNHKuAbLHJdqskM1gy9ooX3QHZUmST",
  "key4": "4XF6KgznhEByiiBNse5h62VXUCKxnwMbUPifWstRfJY9SrdhnFuSM2Y2WMLwcf4gSL6xBkapCsSwJwG5D9dx1qFW",
  "key5": "5H6pLUuV3jfaSPZi1LYwrz2KbqBr3bRgoCsit1XxxiqL9KaT7T88Y1YfSjEfv9sWiNr9Pp5GACpu7mjE5NFCeyYZ",
  "key6": "4Sw6yQiUNwss8mDhXWwkuecqPi7of3h2gi3jDsWmqWYXbe5AQ6CCzxaFizWeQHTR3z8CNUWtq55SUxxU2UCJTMXj",
  "key7": "3fnbSJxR2A9KrdScmLwf3i73pgkz5M2wFhgyV6Gf6sHB3zC85rbMwdJYZntgi4dcjcfLFy2rwjdqLCrh2Fby7mWg",
  "key8": "4NzWrygBqmsqXBL4BT7GgsS666QGBwwPgGdnTfH1aGZaBC26a6c2gcHrXg64Hafp1SDMuMHfTGmfDJk3iwhY6XfJ",
  "key9": "3bzZq4CzJ1BJ6cyhwqTLpGcYjdd3HaDrdKQZMuGQC44V4Cee6GsyECqxSRLNwn7yNNynHjLMddgRZf1FjfEZC91S",
  "key10": "5qsCZRFNjrtDmDp1imSKtG79VhiUgLg57M3HAjoJb6JB9s81WpN8f6jFoWvxz3ZtM2NztjH7Pa1ioyzb4gZweoFh",
  "key11": "3JkWpasfkq8FCLDHBicnizw3CT9HEoM83kjKadNRvYcPhG1XU8wrpYC6otv6ipm7qgUFTAtWoJz4ssvc5HPPTwGj",
  "key12": "4eejoaBQgUTi7gcBuLunJnNQvwwxwWR3JxtpheSiKHbMyP1ZpLW5No2dv1YVBBSfEC58ZQ2j1aSS6g9yKbNHvJA",
  "key13": "TzYDg8u7AwbG63ogVXzGmGL5ZHcTACzyXTJ6ZZMqgpLPyf88NDvfxnNDBMikAVodB7jkVAizcyHgsW4bDrftzRZ",
  "key14": "7FSHAUKf6WVEVNNkm7u1xiW2mw6DfSeWrNZvhXVdm3giZytk8CAcdmXSmoWMbw3CvvHctPMzT8yEFnh7av7DHZa",
  "key15": "38WSf8UyjLWU4PcLb3cqqgVeCxKJTyPqscn1Hg9ACsSb5GbqmeLCLeoEJMDJUjbyLDCCktwesRb9hRP4NtpRiAk8",
  "key16": "3BvRjazWY123WspBHqNVpnHxwEGHNybeG6yDof6oFZXqxMP3TrXFEm8uPwfmzUEKELhWW5Bg1E3m2xjm8nRd2KqY",
  "key17": "3KD21zuDVNPsunz7ZN9y2sWdhgJFsSaGuaiqfVYPSN9jYTSFzos2MqvDcJc5FNKUgmyzDmpJBFg8j2ogo5QiVKkQ",
  "key18": "3Qe8BtVwARfVF3X7y9AiQMMeVoBYiqA5t3w7W6kWXpi9CZFctZ2M4WWDbXzXSfkVkwVNvc4zbCvfj5QwKF614bpn",
  "key19": "3zErfQCMeUyrJtAC4aZozcShjPtr5NKEGmmEma4ZC65AizLMDEc2P4FruZEw7Fh6VWjTwhUV5B3MrriaGjvGFPGd",
  "key20": "4kBfauw6FQ8XSyD8YyQAj7uBxfX8ozm3H2NpQN7VsKgxiDEZrNyMzDbjeSr8kACWkMv3vbMumNJuMaQvzBnr2aqd",
  "key21": "24SbbzG72twpPjbfgg5UCHyLFn5VUZqxu7QVuzu7JHqEKzBccjaZBXCWS9SYJyqjW6gF2YCJAdXvUWdMNdBUZh9r",
  "key22": "3CNXQJSSRHa7Qxpva4dMJ6gYPUzKoVpJwftqJoSjSd3zTdbDb5qx1JsJPA3GTFBn7iBuAXmiB1Gj3xYmrDRfdiyN",
  "key23": "3wDiwciqLPsHVPty5E2eCho2WcAJChX1X3dwtoESQZwX4Kshqo224LhSLXXdAuk5bxxVEAonUxbCS8sXFiYiZsXo",
  "key24": "KSowGBwR2GjLX2o7bVMQKkM5Ae8WZV1JQ2wbDmHVAHyzuMjdmq3Zdu75xyQRqZstyrYkLsEUtNdJMhVxJigu8VU",
  "key25": "B6GSq5TEMPM5Rv98pDUUxrXk9mNkYydddKoYRjMBdFCBQZMJGRVtVztcNmBkGjw4EwkjtAgJkt2kJMPxy64WZuG",
  "key26": "3bpcZc6ACgV7r8yzhdjbMAwVmTJe1T7XvrEr1J5XfpTLdD21DjqgqxngPHnVTvyr77unf3vgbmgZz7VXQwfiqZnD",
  "key27": "4gyT8WtVX6yK2aw3UNUuu1FB8qhCDyuQBLnSaq3EcdizF9hvD4Qto8y1xjiD52qMLHQJweL6ERPMvHjPgFk7jZA5",
  "key28": "FB6BvnXHMk31qz69ZiemtosgtsLhnLkmE6xAi7XZ5zZU8jTYT97eLLnJ7sk4x6Kq8RFzZFGQ8yt4g81Dfqejs7w",
  "key29": "2MhQKAXSt4RMYRoZYnsLyXwxewc823uUVR6wCVbcATs3oyKgcYwcFcLKFTPLvnZFzSEadYQojYkA75jw9jnHbkCi"
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
