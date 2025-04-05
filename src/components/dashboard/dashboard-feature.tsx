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
    "34g7XhdGjwFjGntgphZ59taQ8RJPARYNzzpXMqrGYo1hAf5KhEmYY2xdvPWg2czEuSxqcafQGgcpvXDKMchhuiEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M5oCntCVdNJAEagvBaJLeZWMganFzTQRApxnyTwnjWdszU1THEGAVYUsSPcxR7jRy36iLrxDyTeauuQj9jBiqaS",
  "key1": "31TYom8CsDV9kwTdyRnL4ys1vck8937zck8MNZAY5nsUWgL8GKt161p55hhLHgZra4nqLVjEqm7Vg7eKho3rSWQF",
  "key2": "5XuUkUvm3D56S2ephLGkFJ9wkXowkbyVCPCYtfhEF3hVVEP1uRkLoVq4MkdV8NaPL5e3yknHzeNc5CWmY7KTGEVb",
  "key3": "4Qdmw6vJ319oVouvBNFtRToC6WN59kDdqek67mBV9fHqCC7AAx7DHdaDiGh9uqFa9Ay32oc6nyw1Lu1zdY8URkED",
  "key4": "3f9uoUJHodcLMgsXM1NjRjYPxNVvfpZk2umUwjRUMnKwcEhPytzNxd6BASu6w2mMxs8LvDDUC7dJxxPWQ1wcedGv",
  "key5": "3a22fS4PAYZB6hE9NNjDpZYJzpQK5m7UoPB5Pq3zRbdvUETaofynzn6wEqxKgr1qx68KguwhcmCeyx7heFbsSk9U",
  "key6": "4er7u3gMggf1qgce2CNyFRy66oVWKbjd1nA99M25ivVGzuSeVkJFkdGXhmDRwpWGbQxvdSYr2CwoNgDD2n8Fu7hC",
  "key7": "3oWMVEXRQRL1rjNjjDYPeDVbtxEQaczHuiYcKL9tky9a8LNLRisvxgjfX8AJkTjNEpttKwiUJnbhhHp6dphuQvi3",
  "key8": "2Xc1E5iRXnkcGXHmkrtdWXTXcHFhu5fmCud8XmDwrAF2WMYG7WhDaQ8BvpzBbCeLZ8QJX7R5mMrWqnrzavMbcCnA",
  "key9": "4cnejt12q6bi9W9KYRHrPzeYkMVRKvTeqvMvv3AnVeCSz6HGyQjJ9G6rARoxwReydNCUF6zwX1iscChSMPDZCevL",
  "key10": "53bswTN9jrb2DjPkXszwkreH2rxqQzNNYyHWxVnvwuo3Et1GWwJ7q9P11tp6JNBVwrkTtApdykbGtbqSrs3PqNrU",
  "key11": "PUDQrf97zqDpjHpUgjXujgE2uqdDHAFPh9TeL28qfboQJ4tKV872M9Gead569DPN5izEc6JNCnA6xw2tvCsNUnw",
  "key12": "ZJhRbBtuXanZUF4fk2gYMjp8VyhZJsz8PBpBiWykfSUNia8FWcqsFBwjDqWGGLU7XusU1HjxzRwgzesiDj7bPKC",
  "key13": "3B2umGd2SyWV8bGLcpbJt365BiUvNDSA9KkwcTJXd9RHGAwGqNmzeLyykn2GmJ8nZNiJyjNZtQTUC9RvvVx5sX8D",
  "key14": "3QnAvkr5HjBW9FYYGqQoxs6ydpizC4Wfg55HEbMiWVcNgWvbXfEUvyFCMRuDquatbLRYMmhS7fteJwhA9N1Gi9K4",
  "key15": "3VHm7XQxB4z5NdZPVoRGXpndCbmj2F5ndchMPZ4S5MeymXoZ5sENxePNq9VxwyqZQ2dKcUMvTge9hMnX3uMKAK2C",
  "key16": "2sX4zhqzvqskWP2dGwk9RV8wotZ2dxcB6pDVbRN6qpK1HtPYcHiMev74RE31NikMTeRBs11K6WtKDC1vfimoMruP",
  "key17": "3h9k9s6JdSA3UxnkhWr5cnk5E1mPTzfYzeg7F8rtKpitnV9WMPKFBa6TSzbTPqvtLxSV6EWt9krUA6bB3afBzmTs",
  "key18": "2GWpzUXLpekSwxzgaQsdMMVz41JEq4Ti6uqgmeZpnc2iTZjncktccb61NK6ct43aXXw6vvMs8kaUgoNkbvpzVTxa",
  "key19": "UeXPsHLkbmkYWyKGKnJyS34ygeocJwGUPxbKrETPzNDgYHgg6wXz5d6Y9GkdfJChg5HtqErmUmG9a8exnLBK2sz",
  "key20": "4qZBgcm6RtWWif4ztzLhhKqyULAGjYY8QQoqo2GdkEnWYaDe4a2VAztUt61YHZLWQoCSqQgmNufrXxqwsjZ8iDZt",
  "key21": "5QHYcsqdU9A71ogZZwAVMp2Y6iX2cRUnywGvnur5aZaRRLGm1e9d9SMw9dCorUzZzCWam8diNcNNQjMYNEVjdbre",
  "key22": "3nfeTGzFyqbCETAZ2aBg9WefmXYS56YVQYoty5tigBoQ7UHxtCfqpFLpd14hVixhFgFqA1qzaxqJJ3ra5RTw99sR",
  "key23": "mycZgTd6HmxvPeHiQ5KUSo6sHynXN2xPMBBjG88BMmsENUBZRjae4rFatTcCmQZ8VauUCmfb2EHGpNUxk4XkYoe",
  "key24": "5UZNS55C7bajA9cBtiJJYpkYu4FcuLPKixJjgjLd3BYw4PssW87mzw7A8vtJ7ZiB7nNaEghLxbDN45VeM2DmoqFU",
  "key25": "Fxm7ijSitgn2SdUQThxQB4zHn4ybcejS247M22zuTTan9mPrncBzDLeqNUCBqe5TKiNHrpZTa7j9JAxwWrX6qKw",
  "key26": "FMjZ7H6qycTEen7MxRGuGgvh8M6sk5CbCkavqjyJjvBqzWb3UsjKM3fZeqsnZ5u3Z9bTAr1eMCKfPNmXJvJTngC",
  "key27": "2YhhoKM2QqJU8jX5PMHv6xUFB3A7rML6XeVTL2WC39dmPSaxewnf5dfTT5AyM8t6xxULwmexTBQT3hAkRBS1N9Jf",
  "key28": "2WisQdPEd56cbPipg8vgPHqyjZyuYkC6CPDQxzdo8Xo2MHSKS8ovE2e3yc8eCp2WVTERmmK1pHAXfVLtLGcVGCVT",
  "key29": "3435xQRjdS5inWEQ4aeS9Ndvg6v7rV1bDEEf8AqyxYiMdf2HS1Zu7FTsSywkRmQaWLVNDUD6Jffa9uCu2e8xeaEj",
  "key30": "5h168Y8FzK2SsR4h8uQLNxCNbWiVKJV9kp1DnkNaWzGefYDNsroWYtyw8cMA2NBxUVLwSwhe5YrwVdKaBfpi2b3",
  "key31": "3mUdwD2j1es8WvNFg6Hn7QRkhpDRUcQqJ9e1Wgd95gksnwTyn1p25Wgt11fcV8f75Th5mFzuCnLJ2iUFjVWBU5tM"
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
