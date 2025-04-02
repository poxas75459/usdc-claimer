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
    "3xbJgz9LshvLzeDomEizx9P1disQNcL2FKAAKCyh9NSso28W8tRTbCmWiKMMB6TeU6XjtAWwRct4egnNcpjGaLCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u6bZi1VkWobeQN2zm8KruV6Nr9Ktw2jHnqgkRr8AMbuyFwptwXT69zs3WjNLf2j7JYtNJZ7Jy1CZGPZhvXxhoes",
  "key1": "4hvyhqX4m8A576FEscCGWS6aywJV5KVJUbsiLYu7efR943cXgFF24oV5CwENz7UwQsyb2L48JeVWaENyiKPCZwW6",
  "key2": "3Ry2UVfpBcCQtuheMQBsVnK8dmP8xD1kSc3k7mb4XiptFF2wfrEEtRoJ967rj55zYcwzyjt3PiAdGpDqCtSb52KF",
  "key3": "7pEXamww6MgZAJJwgrfuU9phwZLL7XZ3Xs7oHhHCZoSt8nqWksHfdETwhrHzYivKxFWUn2dgn9j7N8Z2Sy2YF6u",
  "key4": "ajg3Mtf6cBYHod3ZBctPbyu1f76cGPeEFXUfdUHsigZgZWn6Y7MqNAnZG96CQ61n8ijzr2eP1Gt7WyTYCmAu2nJ",
  "key5": "4CZSorEL8htzgChvrYykkgG5UqKxQnHZBxjwG9XYpUNYgyg4n37JQg8e27toxqS7iGvTkTQBZBHgMWaqqyjSLZk2",
  "key6": "5NeYrAtXxLk6G5WttwVbFEqBzDBSan7hXYuW3vqDXEe3zcYZ68ckRK9J19T9a8wgg2UokiKvmPe7b9re6pPn99C5",
  "key7": "5y4QCwN7XRDJjydS2byNDBoK6nBR36eDgVZL12XctWmyfJ4Ahpck1AcV6KKaN3bsEcaczcotkLdva5YbWZdfUthp",
  "key8": "2FXP6pZvz6Vf8ouii5Nx2hukEshqZ3pXJCVMZKaBHRBVG2ShACDE3QnchkgPu5hg2Zs1gZqyY5eNxaNyBzG4EkDT",
  "key9": "5bKEcxnM82XaTmLnBMR4zH9HZiUVSrWFCxSXmWCtgygyRWCY6KUQ4qFXDUpD1DZahDXjaJCFLaMtSKvbUUNhSYD5",
  "key10": "yD4YS3Gt6Ho5VU92WxWYpDjZUdpFTXWE42Bno2sRePtdGQ7GxP28ebDcBvaYwwrxEGUcPmGeRXZhxJ22iAPkwhr",
  "key11": "3gE7ZaMG4ySiKtn43BSUvJ6dvc7cS3ZAxyJuia9oCwXRbofkZuJH5sRj8RrRP4F8BJnHzwMmZ2J1mrgqQichwqC8",
  "key12": "NganFNGsiye5xHiRXZomZKaQjKbTcDAMSiU9dU4i3x9M4vcosTca13CeZHqYuV4GrUKwXjdWypYsnctY6CWsJLR",
  "key13": "4EmvZYTLcptunkY8YFAyC3hozadaKDhoc7wATfD6wffhvZGDYzyQrhJBNA7YRtUDSSsqGpjMBaCG6JPYBTTgnQyF",
  "key14": "2M6WDA6kqoMgipCiWWxcAv8GvpkdunsBsPW56VzcAei96QTo7Szp44EywnRRW6E6XkSQkeAPAGtGLF6vUZBzvMea",
  "key15": "4F3atwtgiZQXYcngGzL1nm6ZTS5pRf74aFbuqHSUBxypqaCGdnLmPG9PrmKntTUNbJ8eEgcfZCxAgGcASF9HdT4b",
  "key16": "3i7EDdNkyN34yBqzneaFA19CSRxSo6Qi1D6pC2bc725nahV92tD9KwdDKo4fgTWYosm7vdeo6TghXzGPQMusoQmF",
  "key17": "2jokrFtZCstnS8umnz9RHkLmpYv4a3DtcemTtanhdtPBXumvt9JCwn9wo6yRrUWpEMSzD19S46EevfHQxyRYo8xu",
  "key18": "3F9a3p6zJnC7pihyp3CuXquMb85qCin1va9nr5jAd3nV4ye4Efwpy3an3VSme9dYiP2j9HTkrvffSkvsmF6CXdw2",
  "key19": "5bXb8bwxhVnqWALWHBB3vFtv4A113M5k86AJpjtX67JaVBn2dvJwkZ6XigtugSXj2y3G4p9yt9zGHkVRoMt9ghQJ",
  "key20": "3MsfL4jpbdo9S2iXbESvkXrswoGQXrWh1uAs4u97w4Vka57mwicrCrJ45acHLTcZcxs2BKGzNd8KfMgRJomKjxmz",
  "key21": "5SQNSzeFYDWekojif4MDPXJ6W2weKsVwKVzwFCtoB5SYk1CoPGUyHdDnzuiitqYgiAZ69CCig1s1k34DqWjG6KtK",
  "key22": "5XC9HDtxUJ5HDDuE9nvXzX6pWJMRisXk3cMCy4zNd4gnL7M9knwdrKthSrLXo7tergJ82NxJnkKe47SE288f2CpR",
  "key23": "4xSVg7xNMcFktD1CQP7rWL8C32Pd1e3e3J9tMrCHnrs3jhumEn3ViPrmYpFSzgDwHfq9w1bHakteV4yPT6q4sKKC",
  "key24": "2iM9jPE5GzdtPTAMmPrFyAu4rqSUg18KuXHG22RLthhn6UUUPiYxra1WDU9LRsg59QXTYHkFEJ9Ke2cWRKb5tVHk",
  "key25": "59P6ATKzdoLHcnHMWcvfyaPv6maT8YGtsBxuW2N6uYeJhh5mpAqofNyAhV1kvxR6dMZXLrV5YyVYiEY3cUmKN3jP",
  "key26": "5jvVqgCF7mgSPyut4T2hfns2LcHs4Y2GGwdxpH1NvuCHQqXFRUz8drd9ysB7Lfb2kN815bSJnH3BA6rUH8iZyngS",
  "key27": "3Y98swm1cQadU2JCpUqYNq2VbvoUZjxW8QTRBUAzwNDNeaieDMcfYpAY6R7wVzre1FmzenhAEbCRsuqmdv6L2Et2",
  "key28": "5LgmmXnx9PTREpecNaqncuxhwEjdbaFWGjoWXs2EBADcLUAw8r2rbEZtaFwfLXEHJukSmRhpubjh4LxsYvicTFUo",
  "key29": "2GEDJc7Kmn8aKtY7xrqr2TmUpyHVHfqsCGuyDs5yVohSbVToXg7K7FRxHyFP6Ya71ESpUuHDzb1Z7RRTxWf8D1GJ",
  "key30": "4AwJuWt6UggGw33LnaMJkppvM6ZDtExuB8Mx1jmqVtDxHkV98w9Vu1vz6GRfw1KzBj38RqG2RPfk3H5V7WoH2CD7",
  "key31": "336hNgUQ2t1aTRjnjZc6J4yx61yhUYBtreRxdqcvkfojqKLMhNvDT6qobLxCwyYDA93azDDiHEKcd8MBToC7pp7C",
  "key32": "2DpeCmdF8Wd2Mnyycm3Zo6KMqpYdxae2amerhJgWMQ86oRrgv8K7eGsbScY6KwxFCzuhJ8tEEKsyiCFBUtaz8d5L",
  "key33": "3SzRXXXS731Lj5UPVxpkgSaWAYgpig8eRzAvz9CLGN5Q8gsagkfBcTwsTFvafcF8MRpJ9PaJVs1Ypo2TEThS8aUL"
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
