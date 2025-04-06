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
    "4btkjRcg9FRKbZcoXgtBFw1urx6W6PBM1ceukW6PpZDKSbrVK6k5cJQsxZHzPeEdsx3pEn2vyRdEuCMrFv3tPqvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q2zXCKyveTnEGaGf7yx6AvxnQi54ywD8FmvxKJJGs4wBJaNq7BuqstJckw1RAYqsigw1D7HHfmYwC1EzABGdB8y",
  "key1": "61mdLZA4dAp7ZBJyzM259JKiBZzFerwmfC7DEqbf7KusQQ1ubGG3AyGDkqN19Gcm1k21YHXRB2hhkDs9WiKAi2Ck",
  "key2": "2Aztapw6sPUuvXabaFjPUtbaiwoaRHVfoAcAzRKSfN8yNvZKUz4XsjKtfukJ1qnPTDNc4MVdQLogSLBBEFfzLdWL",
  "key3": "PLCZfx7hWYp9nHFoEJdZDznA7KDgwv4s41nQMxr26LYNkTSRDs2JWG8ULDq2Gpjss4rKbDHQoSEHoFZxRuLkvMb",
  "key4": "2vRMVWcr1eRySWQbF2WcjdnTLLpGqp6G6thVGiYUv1UDi4XBr1kkCxrCquTHNGq8AmaQfroX3ZcMdRdNrgNZ4vde",
  "key5": "JwMPvCPi1TT2WV5hmicgSEiQHAR7XZzZcjhe3jbAokVmjsSdgGDmJwjzyeR6yWFbUs67GuFqitkd4mXWm43P4Jk",
  "key6": "2NETjWH25MqQy8bxKWZeY1MkGXsKD55ssviYy1CBW9unrvU3HkgkqdRCxqcC2yYtbfeRojKcCFMZ8rCCT6i4FP6X",
  "key7": "456hb6StcaKXa8xXjDtp1yqW13f5MU4HQdQdc9LYS9r1D7sPGw2JYijQ68FpdhCDq3crjr3iMzZmjW9S2KQ1Leyb",
  "key8": "4m7PZ9757ofDxTaahmQWa4QdaS9ogGPhhthXKB47kY5z7tbGXMy8AkrPfQUtZaFM2tAGE87Kxbc7MzB6BqDDLTXH",
  "key9": "2EeeK3eUwq2EFy8cksJinPyEVeKtf3pFafWkD1CUgCpyAZURfJuggu8MPdoPY28JTAJmc7s5iDZ3cAj1uvLFJ5x7",
  "key10": "5sRaAcvy4S84sxMYzRtejhfF1DYXkAPcnb2ochLpY9Y1vNdEg2Vzh8PG334hYpFX26ACJvi1r2ryMrYNnJpm8sW5",
  "key11": "2ZboTL7aXZgHQmWef4DDbbNFBDk9bJjsx43ZbjsTXrQLcHHiVtZbaKHXEKQuSh3V6gY5jVEioSr2Ms22vadWhipJ",
  "key12": "4UvLH2YEgQodcvCRmcLdrkbnJJAJvVtucFcgU9SLCBCrsvu687tUdP9o225Kb4cbkvqeyoJZ4zXjKmJSP56kCHZh",
  "key13": "55vd8ipoHNNZq7qAdLg62HUnDFL5ovHWB3xwrFu3XeT9zk7MGmfcD4K2x1N27FwLRzwu3WkZ9bVBgKWoDgWqGD9R",
  "key14": "5ZX9fVk79gde9wY1bASMEVmPyR7wHgWPVumHbDMJDXLHxmZz9rWpUYNkwgzjK1wbGzgkxSihckAC35FomwFKCKkJ",
  "key15": "5SNCUpyBUPrzTQNRqrAohj2ho88ArPd9h3JQyBufwd1arHe6Qy6tuJe2ojh5XffDK1vxSWiLGUnfYeTtHsNG8WsM",
  "key16": "5ebKBuzEPjiPLya7984WaA2DdS3PP8BaR582EUFGJKXicj8xHDsjMmr3wyxXr58tgkmAsHxPmLJGyLUTQYCuhf3P",
  "key17": "51MvbLsP2ojRMvnScRgqXvME2cwo9VocYuLdkpex62khTJNN27DvPbYBpro6Z5hLDFWA5ji3smz6AzyCj6pSJMnm",
  "key18": "4ZGmcc3fTEJb2fToABPmKqKPezSJbBSS2edQzo7DWqDd7WHDDbaCfTnfoqiWkmUzCq7ouhHe9Dsx8sjMLXAN1uVS",
  "key19": "PvpgEdW4mnNAhnLKKWNNFMEWjPMVg6oU8erKFcUpvyGF1eHkSiCCYG1tz3V7Eo3fRdkWh6Txt6H91QWtJHT45ka",
  "key20": "3GPFxs29Qo3NrUoVdV7XoCtNswNvCsny9q4GSaeZW8xQ2zvpSvqp6dRGzUr4oYVQG2bt1Hf35GobuvpuihB2e68a",
  "key21": "33tVNjUBKCZbcbVkRDKZhUWddoBwT1N5x9dprHxNiGfLorULWkc8rZhCVaDdEB8YEvi2NQWzmdAgoHcjfYkj5zeG",
  "key22": "XToNd6R8xQTSzWqsP48GeKMZ8Pc57fxh7BV3XdJXH5SBaEvD8RpZKLi4DdXqoDniJqnayycVLtHnQKoj1rjWDwR",
  "key23": "39BajDHc7xTwcJjMiv6fETQYiPWq4HE9rp8TkwA8XxWjeA8oAmcSDAPLnJuRZQCrfoxdNY1tFraGWd1zM7F3RP3i",
  "key24": "57om7J2C98pHcoyFZQYCr4jJcVg8yFYn9gCZkxYqECJh4Yf863aZYjMzTtvtGc5kjfWxNizMLUTtUUzFZqrzppff",
  "key25": "PP2kW6gauD6k1nQZUJhe2aK1KJDTQnG7dVZdsebCRxE5NhiUxBBVVfYVf53z9xcTnsMiqEUe3nYgJPuKH6AicmH",
  "key26": "373gnkMCUhtb6gj4rsgjxuDtnnrzqBoAywAJ4p8fwxWKdqCnWSFfqWP2pEqwmNTRLWNtYrKxsoRCjQyGVaS7pTMo",
  "key27": "2baMoByAgthPoXWjZuwph1vSNSjfjYicmoyhh84FPQshqaC3Mt3aZWd264v8meRYuMUiRXmiCiYqMgNCJyNpTtr6",
  "key28": "ChJJmUJeqW58Z62A3HAzi6GLevh6uhMH5PAA3FMRekKN1BbpqDUndEhJLMkkzMhtYQkBMbx3SPRrcTi71mNXGuB",
  "key29": "2cVi8WxGcmSaWhMMzJSe9WXSoCgE32VtGDJHZxK7rqUZaL2qo2XfBw6RvV792ktM72yxg5jN6MjQKa35LhNc53uw",
  "key30": "hseviPC1A1zqpYBR46f1G78tR4RpHs4cpLyRSQ98Pss646dQ7xXEGCRqztQ5JTAtCxmoUKdKWq8n6xEthhPL5sA",
  "key31": "4yBXQDyaUfAZ5JFx6pZfV1t2zXgdw9qevWYKmHfMMx2EEv1q154A9ZvJgXDKhQLou3qvRT9LCyuyto13NmaT6K7Z"
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
