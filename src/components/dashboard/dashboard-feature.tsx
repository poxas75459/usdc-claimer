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
    "2g75bMv4usSaHQZbS2wbWfBQjPqmh1kdHW1vzsEUqof1xVSXuu39omMEYu6yTNB4iWjKi36Xvbx6wTQeSo2JbyDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25m5auaz1qsAxjUGDhaZTWcdYKe5VuNACMM2h1ayAA3iJCpQ2iLGmghH35YqErUkjVDweZpbdUx787Pq4h5epi6o",
  "key1": "2vR6rge7Ujo355g1FFTermoyBS1fTWqQ4pXmGRoFsSagkNZp6HZw1P5RxsdcjhKKK6V6knhEisMG6F8zdBN5G8ab",
  "key2": "5BhQK2E5frHwj3723gCVVZmQZwhm8hX4nJj5Z9aJNck6PitHCq2N4wgcd4iCmkLNGX6NK4YjWBSzm2KUsTqCcWt2",
  "key3": "2G4FhaagYHUN94xfdRc4hxVTFcXSk5dpwf3JUD7pCwosrQnDc9qJv6bhoLf2UC4PnMK15GJ2swBpLushns6CUx9q",
  "key4": "3R5GctSX4GNvL3FRCsS9t5PcXW63k4BgfM7ucCk6VbBdiNCZmp9WZhQFVQRqK7K4eGJsW2S4vEfCpaoLfiFZRXXB",
  "key5": "3xWSCBfoCqXfggRtoetUokub4cZEiTwYsgDrPyEHaYDUJ2x32RNJtrF3fQeNexEQCGU3fJnK9gxHYKptYN6zXgBW",
  "key6": "2qQ6wVGCXWZ3WZz5tie4x3o8vjTWVjctM3iA51XE6Up1UYGvQvepkSmKqJiS5iCocPcySQsyAuQhRPfU2QAcHhX5",
  "key7": "3nZPH6nR2AXD5YfER4YxpTAsZgswM95qjcTUdU4xcg1Tf9vNM7W2x4uvW1whGAAoDDG9zCifPfbzZdqKFNcq7epZ",
  "key8": "5yvNUakrFpFJdgjkTwGYdm1XPzdGaUpJkj99EFZ4jdSu5QjhHsv98j5TLpz5trZbBSDswGw1k3KTgQyCQUW4Do4n",
  "key9": "47EREprJG6hL6qpTcrGmAUsx3R3E6AyLH7BDAtni9ahJJWJ68BPPhf88qSQmjYmt3Es2opp5abSo3mc91vDQGmGd",
  "key10": "3WHELh2ssMppCzxBehHufjoNB87iwxmjRwqAiMafPLcLoQk6G46UU5tRN8JyXNyZj3iWW21kmYTf3so2TUYBKkUF",
  "key11": "5KJMfeddnY85nNizoh6VGeRRMivN2fqWRmVvfPpzo6SStbsK5CJWFsnScaR4suuzPSxoj4aS3ysp23yqxDcVUjKr",
  "key12": "4W2GEZLD8bn76SDFLewP46NjH1BBsx1fFmtZmDhQTB5QWqR4V9xxpKLJgTSKrQv4y4xXVprU8e2D9FZ1PrAZ1H4t",
  "key13": "9matrfXx69AebzvnfUFtpBySYcGkLkM2r9VQKBAsZnQt38JYfZUU6PrXkhx5aLaSUoALLmVNM36pdCWFns4Giyt",
  "key14": "5GdGqaicGskduJhNFznadVeEFQz42qjJcvpJtCUum6izn8SwNUaBigHuPox1fRkiAcjHsWCsd3uiWefM24nC1h1U",
  "key15": "3L4GPQtxdpXDoK1TwxzAb4WU3BsyJrhSwaRsJmR7xYa6aRWAHpMXeWKUJeSWXG1EDDr8yTPr95T9EkqKRxpVdy2w",
  "key16": "2kAkLK5ktjWCihSyDU9nGyeqYifmoRdWTc66xAV9QUbyRfLmGdNKuDXyigbd3b4vq9W83EpT9NMQF6P94V5gpuhG",
  "key17": "58VUAmc1B9LbX8GEisfpkv1j1dTU7PpMVFLToU13KkP8YMGgiVxUVTvTtc9ugNcFFHaJNLJqJvgfoA6Nm3nWs9eH",
  "key18": "2z6PU6JipbV7KqysrfNCY4pBqC3YbX5nh5Kqc2kjyq7jL9tfrsRyYWdsoQfXawqUbjBKyPWuB9GAmKneAGdT9pVq",
  "key19": "t58iCMDrewyaJTatLU4LZ8nABfTwZSvNwequ9m27VXGynWVmRfGzNgxoXXQdoe4YjknoTcCjxCrc6h9T32aDS8Z",
  "key20": "2eQ4ugbgAmwj9pCkkdjKWk2qBCySu6iPfTLnFgQt9PcdmS8cunfNEn8t6F7rJPQfdeZvGEZ7u4otUEZ5s12BwhxV",
  "key21": "KKMsWMu1LWEbwjwbxPPQ9zLdFpChj61nAZqpFjbtHJxo5GNLzTaBnn4cPKuLYNxG364WberDUwDqS2EGe4guj5V",
  "key22": "54x5acczxge4qCCq9PMS7N5zS5TagmWmEGMgQdvfYKcwNZ9D74XhMm2YiexasqB9FyMbBbbCGmTDHL4wyRw8C4PV",
  "key23": "49iNvi53zKTaiZLySe58TKdrrmBV9tHvexWizcoAWLdXULWu6KPxu7tCGUR3CoEyEpx3Z57qk7L8N5Pmw2fgV6jT",
  "key24": "5HyaARvcMPCPNnwPwRCH5XZF57Ah93bwzUTXHSGZNbZTho3QVicMTSmabJAvx2VQfzchNJU9eb3NYCHaaKcSoAgK",
  "key25": "4MrhLSmGj6QFKscb8M2TH6TqDrH4DKwDXxc4KBbn4jUTZbvghqwDk5YqUcREw1tezQMpXsUU8pLa5nznMhEoQ1Gi",
  "key26": "Bph4GLwCuWnctHR3ziouc11mM1mE3wN8UzHmXUJX97LScprG2FoFPhWeQ5iCBNXNN2YxryoxXwvPe5W3hwHBj71",
  "key27": "4mRiCLYgRtQrYHbxXM5CnTvqeWTRahQ9EdM92j12c4s7PaxVX5buvjLs8mLQkwJteHoDE8ExngV8YZBTTTHbYxjw",
  "key28": "51MUpCn95BSRKhGPAZnU5wJLcJnNCJ9ZR3P5CvgJE5t8rgLvj2EtMC1VxPR9mZgAHejvCWGSnH9EpggWUG86LgWg",
  "key29": "3VjawPsA6G9QzbpvTddSn4waXPippq4LpBCJSGn5eroAgqsUmdYFqSfYdQdx2RGPViDrzKHWGgNYhc7AJqZTpR7z",
  "key30": "4DgNaXXeiJKhkVSeYLAecA3U61RcvwwswJGBJ6h9j6YnXHB6wsW9HcEc7NgKoQxW5pqAfkBRB2Hfy73Qt7oEJnBv",
  "key31": "5oNhcvE15xYWF95uTEeCa3m5zjiGa754cMRnSZH7nLtddKMCe1W7sPXBuJFqc4oqY15zDV1hhRNhWocfBuT3K2GT",
  "key32": "dbdtjXoNYDZ9Qq7MPGWzyxvHWSuYny6Z4G1ddKvMomCBzQuXvVuTHP7KVXceLAhstpLGa7E3eh3q5YUxkL524Lz",
  "key33": "22SY4oLzdwqDUnKQXnFXcLUas1HigyV34QSVZkZzRS6apVTt8bh6uz6tUvjmk1J9zTVSs7AbdpYB6cPsDGf2d9Ht"
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
