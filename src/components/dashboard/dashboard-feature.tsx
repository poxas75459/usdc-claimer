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
    "kFLQceoAMUuiSngX5BehQc6dtTxALzdMQ55HFwduiQUcqQMAHvXrogY9HsvHxEP77WMoAx75QqdCWktTqyKTGJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jsyYGonkrhph8QAV9K4DbhEuugUvxjRKqbyrZb6ZbkQtNhnxPqw3dLeARmvhaAQKuucXj8NbHPoumaFn4Pj1m5D",
  "key1": "DoK34YQa8ixs6LQjegcmmpYKFaNdxovjB9PWwUyF7nv4zug32QXB4Jg8FhqvBYe7tuzmpSM9GT7zkZEd6gjwiFu",
  "key2": "CCgpHpctQb2wNAYnQW5ScqZbgQ4zeSV1CMRxp2KYGiZaBczjmU6PDybsbT4eJsN9HCpiAm381L8TvP574cSuanN",
  "key3": "49RnLw9ZyFZQk5vtaJhAjs5v4F9Cs7Kfi9sCfQtR7fXm9S1uXoDYMNKRWjPYLnqcHRQazhupxWaqoGPcCQccD48N",
  "key4": "54fnH2FVvXW6QsKrw9qhTHHZM1DFuTmKo2icPBszsrmB74zoBywFQ2ndARF8TNzPN8r2gNfwvhgRUbYSg3rX1D3h",
  "key5": "2zKtiqKPf2d2NZX2QwCa7LymbSZbBN8VWAZ4XiVTW33odT9j4ycjXWGphuaVgfPrpECCviiNjJTK2AcevtTWm2Ck",
  "key6": "52A9mmCgSrzZSJCAJhdguuMf3Ug4A41RyuS29qpTdgNN5PtUtZAfiC3L6733rJ1hEfHvLeofiqJu9RfqNnZUzrgQ",
  "key7": "5tGFpE7GzEJXhE2WptoXiQFwhJbN6KVMNFWTU1qrovAJYaSG3q2nSS22cLpMzMWSUfXmX9fMfV9Pzo9Xxqrup9Lv",
  "key8": "3v4sqqwFkxg1BAvnMEdjMFQtY3JvpF2KLMdYc3wR9NrJzmMH2o6kGWJSkWuYBSPq13FDSMXr9yJGSTBCf2ScNfS2",
  "key9": "2L3A7kh9qBGweF8RNNuQsCopbGxiPoXLBFx97WLtn56or1keNi2oyj29GeAaCnkgo7SgrgPRYU54edkbZzAZGxtU",
  "key10": "3ULzBNaG9UpEcTJxX3Bi3D2mrsJsAQKnab7eAGHR8fr3RpZaxLgw3Ad86bkWmFwkeYzkX5UrUaX9KcTmmbYSr62c",
  "key11": "pAi93ttwRWaY8w2GcaeZiyUvj367s62JiaBAkeDRKCuvUXiJtkPsRF1sMwtoE1MvUkhrraNM5UiGEVjABsp8kiW",
  "key12": "52pCvzaigiA7gx5ooEQxfZBP67CEGYcYrxCGKPZxyXU3PKv8fQ5SdKDEwvbvDAPBDrNcwEGzJTLsLuRDtQMhoyzd",
  "key13": "vxzBQ3TTuFh5mu82nRDDvLSdZ2mZFZXCo3krA57Ww9p66BCSy1xJX3J4jK4dE6roWewfhK93KYEeVyNdycXtHhD",
  "key14": "5pPi5x7XAsnh3CEm4FdDjWzgNQwqzf2G7MvKCVA5489WFqbmXaCPkHv6r1b3WmaNWjHRGPViaiDzgArCHcZp6hMx",
  "key15": "MfqMrEra2twAdboYcMguEkUCcTXPssj84bFXrWKhfbwrj5syKsruSSixZCoUjuWtjaFUp9PZisf96iwy6qLQmeJ",
  "key16": "5ZxWeGaK3sXakRrJ1z72LMgLGJijabs8eeXFNRVU9Vc2NA49gXu6GxHdTrvwDKfbGCYPpyKZFFQmoLivTJrH339R",
  "key17": "5Ms56TBMJLaU1PH9s7MqsaTk1BpLH8u8YyGKD7rx7Bz4EcCzSoZex91hqY8xNxN4reP7ckrw5sznrbyFd5bLVz6V",
  "key18": "eV3Lm6jngdvLiZvdgUgUSpeuPGnByC5EfMopYgM1aQ49xjxUreEmtaXvdxEKdpLdUPzgFf5LCocgd6HkV2bYggo",
  "key19": "5m862nQxfz5mLMEybq72ThueK8EuZtSwvFb92fGxBFrSY7E1QjDCpS3xJDn9wLPZaht6KVvMADyq1uWyTE4ZfAB4",
  "key20": "5TC9yMVfa3AVieSwueEDdKERZzoWqmU8aE6ikh8WzL8r9vx5zeHvFf7wDMjqMNpB8gYWvPQEUotZdZPtXs5apXy8",
  "key21": "ia4y9zpHT19sCRtBM61e4DbumdRXhXwkjmEF9HemQks9FcVFei1tSuoWihuHEfoPrJB7AGGheWoHBNcEhXYeWwB",
  "key22": "5cjQZ15paUDF9Uin7EkQgyTy8dpLe328hE26sPYGVApEbriPzUZkfuzteNDVisw7bWZ5695nkmfrciNQFaKZDoxm",
  "key23": "aqH8VARW2f1hDvjwzoNfsU6CM8Ejb917gFyA5JxmbzM62mMdauateF4yM9Jt6Zy7rJ7Bj2hWhWHrXWTPJngdNFj",
  "key24": "VqdwLntNYaFz3YsqooVJT1nNTykk6A1B2U7vLEyDQwuvpdynHokYJNhsc6V6ebo2qMVx3HdyxZPwKX41de9cuAg",
  "key25": "4TiAsSUcbVYZWvUL1KykU4GvuWEF1XD3fMw1fVqCEXC7KzEGSbrUqJiWmEXERhihsNd8Z1XZq4wMjZVmbMJ8JW15",
  "key26": "4xQWTsM1joar3AGuonesuWBdxDRatJCXVfY4nC4siiL7wbdY1iQXQUJAoiBziouY7qy94XmTYkMD45vk4Y5HPGv6",
  "key27": "4FNmfMHwLd47Qrs8swYf5iTnbk2My9oTGmCFtyZ9jooqBvwQhkUM7zdKiXUbV5k27bhej9aVwaxBz89rhGF3nmy2",
  "key28": "2S96HsjkJd2VEV453MAH8yLWdRmgxTNjeCt68i6YrR2FcvdZvfnnHLt16ZpryYSh35L3CdiSzfYGLFSUxavtZaTF",
  "key29": "QcgVe7jry4XM4vGifPwmoC1T24vjK4tgNhkBKSDGAuRqhXRoRG5gWG2NAJYv16f5xhBbS3yLEuqD5L5qaZYs9oY",
  "key30": "zy4s6wB4y6RUE5SXqdhUbPrVUBwcst1Zb7haB2jgjWhL8YRvAi8Dwy69qkWt1KeFdraq9TPyXMATmW5ki77hTHJ",
  "key31": "4kW2jzjG2hc6pKtkXxnsaWZZ2VWfanhCcDehF1T5kDZnxzZXaHxL48r4hASmfTC21w9N2LHoyHZuC4ZNoPrdz48u",
  "key32": "Uvr8iB84vyhgwnqg8v8inWLY4M224MnSwdBs5g3s7Fo2UWGxovbHyyPtNoy9AtgKGcdhBHPdPg8LGg5J98nNFZB",
  "key33": "41ZoK97F1ti2YRU15xeULTmfDQPyWUWbzpeJdhxQnSgsfF9XoDNijgjW9oY4Cw1yQY9Nd7BZh5yUL9Mn3SMuDLBM",
  "key34": "3FYeDJAAWupa68SC8SBAHsRSNtyuRCvn9xGjw7zTQ2ntErLzT1MyWHjiSj6qyA7SwDWPvCcPH6TQAoVPf23kRj42",
  "key35": "5UVXqmhjT4jpxgcNxqkVdrXgVEnVmAnpb2Kwcyawx4ksqb5eK61rk5uxGk8wvyCXrCnhsefcLSobSh4HtmikHf8w",
  "key36": "SQGqBKSpJtrAU67vCVAa3UWPjY4fUAB4TQzSJYa9v61cEwCXf1kQeUeRvzTDVQs1VrJUhNH4VGiCz8g36WMQzgM",
  "key37": "SKR53mcq42nK6jo2CNwRbHEPGSWndenaCWf3HtmohHGTY4c5nNhwRYRGx11saM3FxtMZnrqx47RDMocTyKyjPWM",
  "key38": "TPiW2sbma214XoRANQumwL8FjK8EY6i8M9EvMPy6C67aFH7AgM4hQw5jqtoAiSBLjAYQ7X3LBymLSAW1cXUhwqM",
  "key39": "rmGqpV1mqDaypBRQzPHWYhNyUckuLjxTiavzdyLK3FkdWcymnpAfSf1GQs1Zn9AfuC6pYFt1yxqpwAyBJJyaELg",
  "key40": "5vC7ktaZgexkbovSNpmMcMYjBN23Z8g2ictCfqJ1W3Ckt4dghsWpQSJ31eRZPr8RTEJKCxnVKXvPNpi8ooKpQZRe",
  "key41": "XX1AjxAE4jg1WM6A6m6dzh97R9Zs6xs6DSo5cngjDt31135ooZdxVtNxBKvFQh3bK5ZjssQ7nLLJJYDmgEjm5cV",
  "key42": "62UtNjJYrZgNezQbJ1Y8bAjsdxoEm2XHcmMvsajzCUwGVdwTL8XPfkqhTqCw4x9HyM3e6D6ftymkUAXdDTbmwhVC"
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
