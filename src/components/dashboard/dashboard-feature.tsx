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
    "6xRxtANQ7wyHQKbDBfoiQukxkbAGq9VgKdbeR1miJiriuvRzPevcVAiPfpCYLqWtoyKrgxqrWdEVv1ugwFTK8AP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "meg5rw69AZGbSLuGS1ftQs6ASunaueek6C5tPoqZXgVePAyVXaPXH8qVpyDDiwp6yCM4tQDoZypgu2Kdh9vtTDq",
  "key1": "3SS7QS7V3nMLAWqXhqyuoDpGmeMkvygbp4f1FRhEUg5ka9yFkDyjqHZQVRCyN4q9FjPrR1eZVR5TX7XTk2CRqcQp",
  "key2": "4pAz4haEK57cd2QJWZ5ukaHQMh6uTS8HreG7MUwU9U8pFU3rpkSrcu9Mz6cj1DLWUdntWQ645hvczXB2y2ttEfQL",
  "key3": "4fzxgfNpivwPm8Rm69RMJX18yJ8y5ytwqDGqjTV14maFRMsnMpuGf9tYKyw3xaVq4njNG3j6e8p1dhThQB8mDQX1",
  "key4": "5H8v28NBN1rxbzeVs8FpUa7bDZVFkPSzfuuPvU5HYdMfHbw3X62rUjdV6EFiRLygyc41u6tTDjJdH3gWQXV7b1wP",
  "key5": "ya242YmS3aFXqt6e5QqZ3P9bVfUkebjjbe1YPfYCdq47uyk1L8UfdQnc5t7NekgDckfYVBXqsy5KQLUaWdijNmB",
  "key6": "2tThGfxpA8Jk2n4QoEC8shmL3LX3DKXvpba11XaGUKeBybWVvppNSdBpofNKK56uPBNG4Q3PNWSDvpunxK2esrK4",
  "key7": "GKLfU83UrvtrrXQpqSxopPpdnVDEny1KeqB76kvsb1QoTCG7s5UdMMMJ98QKDRuM5euocu9yMEXLhsuVpLn2yUo",
  "key8": "43nSzk3WiCEpz9xvRSniykAQpXgcKNLK8m34zqgbqaTF7sXMjPtMtu7AyUqpJh4Wew24Wa5aNPgW8q1YdwGQhwY",
  "key9": "4Yfh9Kyv6mY5rNjDUm9QpfERRV7jYv8cUCPgpXJ5vwVfN8g7L93swDaTQH2JbtE5R6KTCUGnu4Trww1743Gccgyg",
  "key10": "5GWUV2L5UEAqgJAiJsB88RjKqruYgDkyevrX5wEDq6GGDficvXDL7MBy7cityZzR6vyZ2M7AUiTenLZsgZUXLDjL",
  "key11": "2ty6P91t6nMUYnay9Y6CPeeum4atY578dVr5X3JoA6ivC341cjrzECmCgyGetbX5E6eqiCjTrJtVhN75MEtKAzeZ",
  "key12": "32asGSp3MpJobdvMxd4dtF3rbCTcFBF8Au8V1jiXudsifWUj8mjvd2WgsGnwrUKz2Uj8BthWSKVvgZXZzHsKDzcE",
  "key13": "4XAkDnEnYMrmcCsn9pb1zg8a7ZzyqzyBRuaVGxEqwoYn5bhj7znswSQLH4MTvTwT6ibx5MSE7ET7rFxV1pTreri8",
  "key14": "211HKYdM2yzb9HLqizfU9QGRtZ57uaXz9rAsQZPdxpccW1xV8MvvG5GD9hpbLcd8yFkwoRyJhNrrEC6ZpDaRFvHQ",
  "key15": "4Bh3TherbSCsFWJwgZk6ge4M9PoZ2dwHxhBC2g7z2DzCyT1nfjirgcZmt2BMh5j5vwczzzDb2a72rv8AAu3nTGtp",
  "key16": "D49nmccHpMc9ikf1T2AFDQyMFFMsKaxWqvqpEwMB7MDypsKtmfhLLpENfkdaex64pGXBeejzJmfKS3aZr3y3C9g",
  "key17": "3KtGAH12tJS7KTwMSKvAJNhw9NFv9E32FxVYjg7Cq3tbd2SpNXS4J6sF1gB49o8DqjXcbpAFB82BDihjkUedGxtQ",
  "key18": "22q2uwugzA49EWy3nCBvd8mdoGY87Ccnat25q3SpVeGQBc66rGVhVwKo9DYKi3TN88Eu3EEJ7ge5Qa1DBpTnN4UJ",
  "key19": "5v755aigGH2GhxmPDWfMaK2QJMuedcmsgSW9LKfAqUhqG1qzFTiCKmkSorXW696p9SZe83J29LovJwAHdDEhsU51",
  "key20": "36oVhWhhRBHa5AsJwzAfC9uTkZA4WGSE6amkAJsckWmY16rhYBsQ8doc4hio3bx9DDWWwQW8Qg2LEhqmfyQxnXWM",
  "key21": "gj6bMYr4JKcdoUEzPABvqAnFybz7h3FiNZUxGLnVCR5bkMnMS9uathcTWLY5wjUNeXhb19pabd3Ax1BSpfmyFVz",
  "key22": "4fpzPq7Kr6eWHYuG4Z2yr763aphR4VbDh2RPj3NeWHyzZ15EsCPrXTJtn2fFtz7fB887mKjzd3hA73k5ys1xmzAM",
  "key23": "42K2kjJmoKhRusb9DgmnmnYCa66EEVgWs7k5tjnqqByZPn8Ar1rY3rxTBsaR6JKu6cUC5ngS7jCpezFgwi9ECn39",
  "key24": "57zAqtuNwMVE9MtDSSpwe9w6Hvtc5mtZWt7BVKJHd44KRbupUyZCyEi79Fj79tSZq245wbYhQwLPidQRr1qysMM5",
  "key25": "3TxJGwRCDNqCUXiFv6dHtqJBwybAT4C6uudCTSBSjUXXrTL2qKKAC8RvE3ycRtoHgtmH47W6nF2zv6nNLzm9FB9n",
  "key26": "2Fyx4ikGL5vXd3h9Liy4fqAMQBUssoRepMx6WeGnJSd3jLbtZ7P1YndLEkHpdBHHepxuzcBqgmr6sbCq3Qgfp7Fb",
  "key27": "4dYFbmHbGYPEcWfTWE53LpnoEcWhJwgrhzCjRSYC3jBHFvnew7U54egxZ9dLDLN3wURnQ2y9rP3CSXYhY9gUvAwg",
  "key28": "5nmstw429zQWvAw7Fw7TvtbsF6tMDKVQHq4EJVQErgZAsG2keXyQZRZzg35SRUnXiy4TWPFUPgPvb534DxKD9zJ4",
  "key29": "VMvmbDFEzkLJbr2GCJwGHxcbD5PNHU1WcDtyKtQoJsDrsWJSYyYGrmsYj8317BLavwKyVPpovufMEp6K3niKMDK",
  "key30": "4FwxWXs3N1pNYuyFdBd5xWAekyaNwRQAoPSFKJLiMNkFQcvHkbpQkroWdZzAkjGTfMsVPsTRVePPjykgdQeFYvwe",
  "key31": "3EdfqPeqZrj6Kdu4ck5hCia6Cuyyvi5gwuMn1PRtwmwBFWTNR7X6aCgYvhHoZT6TUoZjFqVwzKtX1aNb7qdafP2T",
  "key32": "owSrTUPMFCGAX7HydSD1U2gdznr2q88sfQ1jTsaWrxzQ3mKQALPdBemsbumrBKQNifDpAr9AGTjsiux1xZCthkm",
  "key33": "2KoKZc2YJiNCAkzwSBttnVyuBW63ANS5Afk2a8T4REtzt83394hjnaktzjXa16HHJ5V6fcmLfcGUWXovmfchvgKV"
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
