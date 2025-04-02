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
    "2PwrHLjXF9xkGyqijtk6Lz7Zs8z5W1foBAHMJPtnNyheiFTK4NFBWPSY5U85ukPQKALbZmNxQhobqqUeQHE3WL8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gfabrnq1WAAWbhbp31X3pBrNxBd3wxBaYHVsx3ZG5AjhyPGEFoKzU2pQuo2RRvC5J7pw96cZPZrxEK3xp5Q7KrZ",
  "key1": "5i8ksJ5P7EEHnEBbNmHPcJEL5TrSJ6ewWiLVXigqsZk6jzYcsD8JsBArPw3vKWKRZphfg81s2V2bJBWca1vNcrLo",
  "key2": "2sixirbkLL3gLx1CaeB1aQ86m11ePeG5uqRQkFurRUtVkTAozsQDwd5HSh2wtRTLinLk6nCgx76drfvYoQJr5WMs",
  "key3": "5e5baKWG9YJMWcZBmLtbkosYiZZSd8UJHbHxGjqgu5VjTd6zxTmRZqJouZ6UbPUKngduCoyJG5YLn5JTWBRkiVJ3",
  "key4": "JPDyhq1U8g7JSbgRj4YnWVJtvepFUFQVHsjtVG2cGTM6qQbbkzooQCatXw6sVCckcT5EekSWYwy6zBAf4taS82H",
  "key5": "3T8fUFRHqSqnRH5B1ABeP4gDMxiqTMPoGCwQ4KyGhbCz9iUQZgDE9csTo4gB9MnuyAuKhrS7Q7YQkkApp1SvPyhT",
  "key6": "4GKUcdvqMoVVqjxdevSzsRteimCP6bRSWSdVQcDsrPRg3Q5HtTY4xw34aecnS93fQS3Ke6N8hLXhVG8u5PESLxaH",
  "key7": "1eieSwHJj7cN6XKDvJ4hHHektiHf9ee1r4UBbvPdfiKE95kuzvuqoxYTQEWxq5NNi7LyG4mEknop7YTrF7dbnHX",
  "key8": "2omnW9EopCHgjiN89uQJoi3UW6SjFbyQgX34PA7HohTguWFHLcdLh6mBwa6pFDGG3FffoQS8kTp7MEXSt5wHd1me",
  "key9": "4HnXqysoWjFXDpx7aEbZ6qeTQXGBDcrAwgCWLz5cVpNsBkmih7BFzfWJtphhgaCrPMgjjcxS1ziKKLWsHiRi7qNe",
  "key10": "4c9LiuQnNSCz2HcBG4qqkY8n5XSijJZNLkss2pdkhRKeo8Fdy88uJLDC8Pxnc2Mp8uXX2bBxvATdhWXDk5pwGHrE",
  "key11": "3PeAQCwkdX6dMPQCsJcMJs6RvmYvqT54LQfpLXTT8uEGebtmh3ArjmtHCiR7Eacw2k28mY9c6hGTEQT3Mmx39Fi9",
  "key12": "3ZRBmoKY9aGTuLmHbeEHdBBidXrb2gdxyjpqi2LsqDs1nZHqsNfs8DJQ37gdCwA52SiDr3LgVnmGggY7R2cGngxC",
  "key13": "618WiUF8X3yBPTcKQbH6sjR6LAZHRR1JzgZDjvfjS2DMxhcj55FH5PziARYrVGKDkcfJzgs1bsqreTFCJVVCsGNX",
  "key14": "WyqygKTdCckz1vjNDB7z8acCPUZzXjZv7C59vsk7FbkLW2ns6SR1hNABVpYFiHGZfYyQbnYendo2w7fNA1qUxVX",
  "key15": "mcip4h6e81mQUR3Q7oA9BsqFKb1sXJg7xHWBckdbqeWq84LJEoCy73eSj84YwiEQ6uExY1pcnhgPwwCYSN4kfej",
  "key16": "5ZqdHH2BRb8oVjwtBUQ37cMiYKHxAFpdFKKoATJ9yu985qPqcMrRYMdyM1puhUVsSofbXciqbQ1ioR9EZff9zumE",
  "key17": "5dqqqzXPWM1LpYSJ4ToAhfLj4zGPJw8nsyYgcgpxMV5Q4ftrgMPp9PStBsff4uFwX3w9yfCGmaFocSZA9oNkCMA5",
  "key18": "TZN1SQvc2rPrDUBRC16Kaf8mPYYerEDosjERDWXXcgveenQpG8ZjceC2SE26i4fZovYmkY7pi8J4MLtY7mhcYEE",
  "key19": "2d3EAowyiN4keHmJpfAHGYw14WxBRYHMCnxqq2JpVSrQ2WRq5pne7Fv2VWnnZiaoWuVyKHi7Vhej4wbRRBNwn7Xe",
  "key20": "3coDZEaKA8DDThVyCsWyRu3pCW2hwKjFQfAh39Wo5XAW6LFqA474XFNQzbdgu8C7A7M1sva7BSvV6uQYDcwJmfeQ",
  "key21": "5Bto78vSmMdJxmt4FH2tz6ZrD871efwvBmoN1E5sZMK3Eqn2vPPNiExp6Bv6kuyTqe2XeB4GS24kHnMhWT7RHU5",
  "key22": "4Rm44SebbAAV2nm7FN4kEWR2v3cdqGtTZXURKqP4EJuhQ4yVXnLLg7A3wn9FsBJ6hzeDcYKPFMQ7E3QzrNFEoBVz",
  "key23": "ZGE2Lt2JQ7jrEEuwg6hTMLPk3i9pmAajacuNE4UfcHVBB2ytNwkmWE3nFTS5zt3YzFECFcjpmPJxHvVYNnxrSn3",
  "key24": "Y7rYmeWrofEybcJiHHR2RqWfwaqqfdEe8CAp32vJ8MoPpNTuS6WcnNUrrZVP6vGYaocrgoQQisAAXx9nBoJ4XFP",
  "key25": "UZUECDLLAkebt1orfiWdRaJhKyZGUsKTCd6m4sqF6b3NgZr1uiq3gaE9KKoToc1sy612rdhFZjpFEjPi13MH7qV",
  "key26": "5zoBUxm3A7W94z6crSjVF6fs57HnRnoQpDRTzoKzRXXj41y9usmTdXeZC2NnYJsHrMg76LpcvPpqeM3FLQHTS3uH",
  "key27": "4oEc3e6SzE4EzTmoAfPB9gAGyJBWsbYkbhXN3Hb6ogKTr1QhnW1Ro9LhDER4kQKWEd4w4wWRw6Vhm7TPwJKgQ9se",
  "key28": "2SA4MgFoH4gpxCgMuHzk4w9MSuVrGvv9Ms142mFLyXg2ySWtEXZ72GMB2Z7LH1HihaQMK7eo5XFYhWGm6pP9tGsL",
  "key29": "bfg2iMTphKL4mbBnij8DnqBFxdQAw5YJYySA2pwm6yLU9G9YqFZLe3LwZHjGCndvYYhscUcXe1nVmX9Ju2YUkwp",
  "key30": "hqPyKQi2BG6amEg6BLagt5Th22hthT1AnKVANUC4Kzb58ji7jTCKfKH8TV99b1y2pWKNsGVyKbrNbrSbrX3Mc8R",
  "key31": "2T2zEigKLcP2ajDfoPmRqAQd5k3tdcGP6EQeGF3b7evhYbUmD2t7QY1pnWcKSa5NPCUsYjVWqc2jg7kUdZVqPSsK",
  "key32": "4tbGePjtuyxCVzv7FYxNSLJ6rqJFzHkMGNHaLuaQ25vrLMcoFQEbmo5tzJt8jciJgtFo6aLMXBRTNSGSrth6UTwx",
  "key33": "241YCpgXYQgUHc9q8TwhojbRnBjaz6UBxW5uuxFxTYWga6i4GDhQQBCookj5BZ8opeXYA9G5yc5Qj5XgG9GTBSLa",
  "key34": "4yy5E86SQURurX71KVyXkdJfPbZNEn3CxoSoq6pnkMqnzcd9AynrNPuvzspVLVCiznMDupwVJaBiAPy5zMoN65sP",
  "key35": "2ejyn9fwtr8oUXSF4NCdpbm171uQdndEBDV28ZW1KdKTu4QK3gcdQxC9kN6cEZBe3HSw2oHo7GKEKAeU6UcBDJXS",
  "key36": "2tepYm4u5DKEGdvm4mU4GR5Z1ZnGKXtogihTUHuX417Uc6pfCbbtyvhVr8ALPi715v2nAnTXrWRzYA72WVPEkK5M",
  "key37": "5ocEDsWASBzSnAJ5tNzVwdoiumLnmLY5hzV7wTKZsRB5ydruXN8EPMY36xg6zmHEFwk7CsdXKHX3DSdiLfQHzjQj",
  "key38": "52cogSHo9psc3rWCQ7hpFHH7qpW5XKPiFYbbPeJ9EcjmED6XVpBbyaGBm3CooHTqnAq7Ht61ZwqpJZtz9cndM3j1",
  "key39": "34ids92cxKMk6PSDRM55Qu8AD3WcjN9ZBdRzK2SZ3ECukLPMMMiaxXVmqpy9YcLEwLq6UKcYfFLvcvWz6vzEZGk7",
  "key40": "5WZ8HBU9osEDef8cz3stAc4ieLMAASwHPJnJu8kyCdxKrzAZDgsN3So5yqfq7jYnsuKW32JQ1C18waD9f9sQc7kx",
  "key41": "2pHfkhLj6TUgQUeaEzMigxX3dNC8GDEXbBNYAo6q5a86r6fadzWVQi4NhkmcAeCxULtBWpbiM2xwgR1QawAgwLNH",
  "key42": "2kBphVsbaRppVFeGqsVoZaL4NaunaJrUpMfT9wzisESdNDC8texhzrr3BnmSronda6QYDEPv3BUX5u5Py6m8d2vC",
  "key43": "4vswjprP9AUmBTDpPBu1SqJtqaRbzMBMg7P8dKXgfz8qBeKc4KyUXuMdYraY9wN6AzkgkriqqMZhG1gD4z9fHNy3"
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
