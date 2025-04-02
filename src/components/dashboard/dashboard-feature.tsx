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
    "4tMFhs9wk54HGDqnKkb1qZNyCbC4yjNbq7z9GZETF7ydqrpLwEnxzBU1arKEErayWC5b719X4dxW1Fe2TD7hNbSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tcmzMjcKztQfe27YK3kvehLAa4Hdo4hKxiXTjumuu5Vcdfe7JF9qL8CD3UhxHscaewm1HEdHScjKJ5uWUoYMa5u",
  "key1": "5qy6a9WykLwQEUwokofhv7RcHmezJzLinCJPrWEAfe2NHGpeY2ErCxohzyroxL9o32RnRJmzuFu9xM3SyE5z4hDP",
  "key2": "2ncBkKtovugkCZixPuWpoJ2FLxjDwEZyYEQPb33BzLQh3DpDJU1GU26EzvU1JdKNQckwmSGHmBfrrjs8MDKwnpTk",
  "key3": "4sYqfNJf7wacRYKxcAEoxykjqWGYdxfxnqtS3GWGckQvEzHArzhn573aBM3hY2DiKCN5esp8E72cwg1nSJ3C1yhK",
  "key4": "31kRZwfK2kS7iTJJCMZiP2iuBckrfLsMsu6eis98Kb98dHek5dDcxZpg4SVDJgRT1iXREECobgakk7nqACZYKmHQ",
  "key5": "SLNJwE5pc9ctH1cj1dqYGT4y3dfzqT4Qc4XMq3uYwjzDLAW4xiQVqBTLrujj7XB6sJCVoTjLPSkh4puZFh1tbHv",
  "key6": "5Epgq1NfNyri67fhwLYZFjJ1tTWzMmsLH5fAV8tJ6DvmxofzGBXhHvxY8gxcto8wTS6xxtuYeUCuPCCsUwn47E5Z",
  "key7": "Mu7je4umc5yYWXbVa7bgCoC5FVbAdV2eCB2UGLFDavtFizctArcSQ9xcbKMJP5qDCTY1b9wFnDoPpKtCUTmuBas",
  "key8": "49Cg2jgGajqHvX33zThLUm966ozFyWk85Eh7bGxaLD9nusss415yurU6DC6ydDnJpxiZVZZVRBRfC8CeQgSF5bFu",
  "key9": "MZVLtzUBkiKPJC3hHPwst6Wvejiy3vYKFA6SwTs5dCiXScD4GNwEj4Wgy2R3N4f6eq7twSNJgxBNe3x7R9Pzgd5",
  "key10": "52enaRMNu5HetawrzWh7KLMnXwqmAgvE39kYJusW29MPUdgDzt7BDK8868ZuPHZoQ3j2a2f1t6nokU6WgWgvbbXC",
  "key11": "5bGGJjMq5fNFEYgeRLXuxfeTQUZWc2KpLCayPQsbRfjDePTs41KfP2wSQmwcVMXb9kLZMmiJj7RHjTtY6LmknSWT",
  "key12": "3x6Hcxbo9HJjNnoQCsu4vSSDjddKUayi4MYVpJfXjWcUhJxvD1UH4tWEdmv5LVpWXA5Zkfjk9J2xhmeFENmo7vVJ",
  "key13": "3U3pAquR7387GwWzAayd7B2QtAkE5GQ2fKWdYYNkaEZ9gyrPzvznLxvfoM3WDU5XDb6WcTpJxfHgyiFtHxY7gyd5",
  "key14": "2uHwRLNoZXi2tgCoVX7dBDfEs86joCCCqC5XNdBLbp59ejZ5oER71QQh34ReL4RtSt2PmdmzZw9dtm4QCTme1oaE",
  "key15": "4fc9dr8sKdLJUg1dfMBdki7t1ikTxCrVQXo6D2hbSWUBpiGHYawBhws521FMgi4qpS2wqgdQD4fGLcs8KPWUvNcb",
  "key16": "2wPD8jzsJxFx2TKvHWnW2J6C2ukA7zQHGEqiG9hFwbXXiQtc49syC7sUUPePrnVCoMFG1RMD7beH61DWdFKmjEQe",
  "key17": "2JPtS1SDFYaDKv84r51zL8L3MFy1TraoimhnxNGF6A8EnN6C7rzRhvzwmgDqgT9ZrpG8bsr6E16ddwZXp1bWvqgu",
  "key18": "GBjECjLTx213VzkCp8opMmNnJMzfi4vUHjVAG15SSmFTRJHBeYUuH7WZoUkej1fRKxRVnZBxZDcC91LTEF9QmEz",
  "key19": "3jLhLWLrQzzzJKNXqB7cKY73icW18qEMYQewVXmuRjbHduiUsDZN9tVUrAV5eLZkHgzmYE1FXd23vG8rCLJ7N9cA",
  "key20": "29K1wgoCxJK8B5Ba5C79SPLZR4d6CcSX8EwYqBgcZLkmEDjzVEb659xRKUw32PDT3sVQN5kxRVmUcDegm4AkKfLq",
  "key21": "22V3kzdpi8UBNUUxdTSTxEGY4UECuW1VQG3u1KSxv5ubgqQJpJkKorMZviPyDLnRehDhtQAqfZJSdikr6ED2KsdS",
  "key22": "Gn87pq1dBo3kb6iKqTYhxnyKT9MxGUZtgQJpTowf3f8nEiRGBntmpunKdJ1JuebArkWA8NuUVnxbqdoozhPEiPg",
  "key23": "5DpUwor7fXnx9kdL9Cp2Fe15HDXTjfaPL3Syr1oe1s6h9aZmazzG1iYKLnZYAyaofFScqxxSRUfMhtFmHSHFnX1Y",
  "key24": "2j2TsgZfAaMqFN2HG9rRgPtHbiXpUNzpaQmHsuMYR3Y2b3upHMi6j4ArhiWivks7c33A3QuHjjC9h7NESYnYj5dY",
  "key25": "LY61ZtbPLUkjvqvUx25CYngVuiNarobWRZxmdTmZEpruThinyXsJxKRLgfxC4fu7QYHATMyBP2EjXWj9xSzQPk2",
  "key26": "3syrnKdjbFpSxWGMwTgdmNEGUMf6FVwbf5siHSmQUPFGVQsYfpjVxGSQf9iMyMcHX1sAeugUupn32GvK3s8mS493",
  "key27": "5nRqaYX2B79K9GvJtCAG6YkuMepr2zYvkCE4kwhJTSS68TDkK1JeNNaPfJHNpu1thw68U6qrrLwTaaQ7H4oHBP7Z",
  "key28": "5wRMUbsgMg2xhgbKNjeXot4NYonvzdQ9HJDZsvpUtkn2dY6M7TuEKN7X98W2vZKdf38fNJhGVkRKnCxJd7sRNZbj"
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
