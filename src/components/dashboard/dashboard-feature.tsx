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
    "66iWYitUgTgsEtq6izYkjN6eF4uM74rwGQnSNtdhnpjbyudHKyWeB563DFz2eFTXwhiJLLvBozzTk3KFi7MhcoaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dijyuAiQD4muRyquwG56RU5ZXRtUrsVGLhzA3tqrZb9qozFmC99gD9pmJJJ8unFow9jXfd5GVbBAc4FmCxZPD6s",
  "key1": "3xvLqUmwiMsjZMsCsYFoGCAPpCpVzW12pEbn4CkGZfqmGWC4TKqVjxnsNCWxCBrtuUS6pHnB47cJ8uBNPf6ec1JW",
  "key2": "2dHaqPWvuqyZbXjnBmhCmsgmQPTiwPwA5DbVAr7LWHimGUyJJF2LxvjMoXpWHza2UFuKswHDbjs1cBQG5S3mcikx",
  "key3": "Ge6KPGw1xtNBbw9SHCadETqvs8ifcdaEAgKr3wQqRCtbMooWv6YAqe9udzvpW5QSuH46x5PQd4W2dcEthXYZ8tJ",
  "key4": "2mNkN2r1quSwY8y6Le6GqAd1g61x5FoAdeua9mkRAHxLKWtCJywKWzhsyMdvBiQCL9nH4M6uhn2qSS62jZXvyWmD",
  "key5": "4mWjkvzU6jDkiQxhgV3Snmiz2WF2PsJVx799QJXJ762MU6zvaK6N7LUauT6p1XqL7VZWX7xEGcRgC2g2QtqR1ATN",
  "key6": "3vebrP36gGG4e7rwYcHv8fPGery2QohZiWcHjKc6S3jEi6kkSRFZ2Dros6ncFcLNYMWRAt7Qjq8zPrT2B7GCG213",
  "key7": "aqYoDBYr21se3LYqDGhwYUcqfXjB6P6TwG5EQvTpTFUcAqPGoPtqxBUpDdep14f6nTdAcAt2B6dx6hWvsTbRod9",
  "key8": "LJ3uGoc9ufVjgP3AW1C8S87kdkETs7Au1Ssz7nSdazhR29CW44TpxotA2jaKQiL7nVcYFducZ8cFcfw8Mkcm35C",
  "key9": "5oYon84no5PrF8MRWJ1KvymHRJA81fkXQsPLMxA9MvWTsgT8QeswPNUmCffvFhrF4i4qGKKVvN2uu4rHSdgxugPF",
  "key10": "4ayugGu57QxxJHAcYa7Cq3NMMTsnhU7gbkniHmHgV2iZN9dgy66EErMiFWxGHzbeuU97ZXhXz2qmcUpTooa1Gk5X",
  "key11": "2ECPx9tBG1e7HfTV2Z2ZiXNEKY6dkycsJmuvVq1vDkXA3aZdqLWqrs1V9iy6VqkTV9tRmUbsqHV5PTrqb4GJ68jB",
  "key12": "42kg9FDMBxJgFMcMRpFAKVtRTR1iT9NfXDzd6kJoxnjFCTmDhBc6FnyDvPfssPe1TZWUSZsSiarrPTdXc8A8Tj91",
  "key13": "wADiy46iFJFRhg86NPJx562tPJXBKPChPZheSSU5VpfYvkUqVUbTwekwVLX7saJCzgYmxyGBQqYp4XvrjPefppp",
  "key14": "5MPPaANwSgbVtKqzknth3ruobf8dcjbwZqeimjoaFR6HenuNvxspiknnM4MT7WJANq58xtwViw5oghsRYthWpLC1",
  "key15": "5GLUhn5yd9kRW1fmzfWjDYm6AF9sa65zKCVbywLqrEPFAE91PPxxT7A6piNuNtJqTPURygBfi5YWFRWvgxAgLU6z",
  "key16": "9ogAksEb7Z8pXyj1zFpYnsCykJ1Y5zUj7WRfRuoKdFw9d6oipRR1agiAiaJz4t5VG6saqf73rqhUmGLc3ZUQAEd",
  "key17": "4HsATayZzamkgzLHGpSXazqHC9ReL6AVyUGQshdx3kJJRxHQ7e5HUSQkspNPH2NzpZXkQfrJ8rMuXMW4QbLBVKsK",
  "key18": "3CXohpg9UouvhrrhuQbBWaYS6PJRPcf3vR3Y7beYuVJK7ryGsMTxvkYwGvy7jppwgtGa47gv7i4DAym4c8NESb2n",
  "key19": "64kEUJiYB8N2RrLjxYW2kZjf9mVBdkigTiCfz1xrgiaVkstXCNigry3oaPZA3L6MCyptxo7YZJtjr9VD9MzVvCbs",
  "key20": "4D5vD8n7PDZb3ts2RUbxTGeVfMJDZySsUyiBSX2t8KYQ4vd6YxNmMAnhN88t7aNBLnhpnq2neQdrrkWvSAiFSndp",
  "key21": "5qr4REeTir6nPKU4mcxPffHGt8ZLo2e5vXAMeuekQRLq8mDWmK3qC7TGAMpGV3CpfJsX96AN6FfwC9WMZfUdLA28",
  "key22": "4UDXCET4bZgPborCM36qmjCAxxASoqDyoQA2rKdk9tUGRSPJy9nXRgDNqrcjJDoJ6tpAnzg6fc8KJGVbi2m9FCAX",
  "key23": "2aSUsZuJSh2dJD56YgCVPA5Zo7qPhGr1Wg7G3TAdEfkAQFm4Xdfje6q291P8N3h7d3TxxCvsQDWKQ1fgzEJRp4qu",
  "key24": "HDCTP7C1Zsht28FNF5kFmCZ8fmJZ65xiCji6ku5UVza8QRYYQnLEHAwmEAL7Q6GXQaibQNwQmnHbXBZMArh3uMS",
  "key25": "2ta8jtWTKX29a7gDpkhheWoBcAvobcNbkxBBVJby1P2Z9Bovwm7biKhQztFmgfjFYhk3doZxfP2bAtsbFEFW1HY",
  "key26": "62Ks1VujQft8GJcp79vY5oC2HqXdCdJyKzcBxUTgUQ4dP46z62RPQrKy4q7afLgrr8xpXFJmCMuj1wn7CeVG4Hry",
  "key27": "4y2csTX4xZqnpikg2nutourgNX5X1pCTMy4uTVKpgD8fuSG32qJc8k8K3SRuHfb6CUuKv9SsWgCmcaoLjgxxfVJG",
  "key28": "4khwx3nrPKAuVMGiMqQLLbL5vXRkTPkXQZ2KtDkhs6rBTw3tNSe5wXYQtH3W5JZLE5fBEDN77M3ZNWbAdQGcMAc3",
  "key29": "3m5mkDEmmcHH4XhmziKPkM71PTJjeiPULJauWGf1cpMLuBuMaKsQCpZt9FhVExKr5dwEFP6UhEjc5dJR2Ursc2o",
  "key30": "3vdumNvvmoepUjnWNxVPTMiVdNsMbdYQt8TKs1gPZxWqwyzZat2pV3T6ec358m6dnQGau5YMN85UyXBYsoNMtfd4",
  "key31": "567qXkBKAhDAaQVedH5feTiZch2nsKhUajvjtCch8m7NvCyMZZECtD9Qn9wAYGBTgMyHGsSHrPKcBpLEFRgrKZ8P",
  "key32": "3YMQTc4hLT69KyHDfz9c3mVmTdD6RU91av4TAg3ZSvDXXug98QektL9DExkKzPxUnQEvdd7Waa4m6YDJ3L1zTa1s",
  "key33": "5D2MXfRKC8E9MZS7FbZjoePeVZvCgmoXDJJwSqpyQYcMvwN3XT7QNd9YJ7oGMMLb5ZBWqKmM8Ysk1jzr84voAa5U",
  "key34": "37XcccHd8DTQigsCjxPm4tcwFJ6WTsyC1DDQY42NLHHzmgandEt49KCsvLGgpFJyQqr3RL6DdvTFicWAi285ZoRN",
  "key35": "63sLTZjPquqgL6wzRrAr9WEVpnQaMEmmDavH5vcBwy5wqeDmNgnCYUhVZXqPDYr4eMXDkceJZdrvM9CToTJM16YS"
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
