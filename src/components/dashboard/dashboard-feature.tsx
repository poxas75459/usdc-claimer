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
    "49kkscD8wcyU5eKreh5AczspRnhjnk6cvvYgWkuDwRGNNpGZW37gZinCNQzn3a8FTYHzg7dT2mA1HffM31QAw8fZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65yBe1AtJ2tD8zAVXbPZT1LG9XiUyUWguy1KgQvbVZ43h7pTJYzdHfcjn9Jnr2jWNjRZ8cpRVS3ci62CCC6mK3w",
  "key1": "2qfF7Sd39Fujza9soM9qZ6nfYzajfTRyCda2etkcPF1zQyDV9vXEghhqtsHeTEjsn2sGiqyKfgGJHYZszx3QE4ph",
  "key2": "2FkPTZuyx74Y2uXCfwAfGg6jWmWdPbiwNpPHukoept9NVxNLscojRxpiufrXdWpVzch96hj5qi7on7atDPrYCgpQ",
  "key3": "5BBFWdjTCGeQ2fmssuyecJ8jdyPGMKskD7gPm3PK2pZeHw6Dqfs833cZsSUsfaRLZbbnYbCV3psvNQVhCryuMNu7",
  "key4": "61iYSgz2UkEajgj88aTqspbD6R4K7j9mTrPYN3GWtv92QfzFqKsVoDrD8Qsc7GQvM685KK4u8qSPhLs9HJPtEGjs",
  "key5": "3mjUqfNapJDhQXJBLidQ7KejoXdt5P2veQ5kDimnDcen1QMPxASrHxnfWyrDRaj4hrn9USKmW5GJwhoMR5q1BLGR",
  "key6": "5hLuwhoVYbRjq62QxqkQWWg45R7xDk1ch2s3HTcxVWGbEizFYadkkiGfiMRVCGgB9fuA9GWXN1CNmadSrixPfF4P",
  "key7": "2i3kmMYP5bkhzZseowEUvSaWiKz4J5VN9XYqf6YQJbXntoYM2dTcoZkQVkiwBd2ExYGgK693EiaHFBcq1hwtCRTi",
  "key8": "3TeDBsCA9NK4D6qnyoWWunZEwBciCa2jMxP6g8wh9MzhTcsk8CmgTMX2kqdoYwn6UgzAEZUHqv8Pdnh79xGve6K9",
  "key9": "4WXYL7vX5YEhQb5khQdtjJjn5Kh444rqcyEKqesUsx8b9Hf8s6nptxRwkYJvrUWgLGjP19KQSZq3KQwb7TGTaeg4",
  "key10": "Mnqv8TZiJcTbxHwRDCcqm4tYAaEkvXTUHQT8hRpvubfiMzBvYQjbXiDJD3Qa14SBQDjmLW1maarUE18Mpmk21R3",
  "key11": "JZoVpDerN9LcmC1gDD8BkyZp9jUaU5hXw8oawwHokroQmRDUc8XAsdsQohj1PNBtUpSy56kG3Lod984T5A61BCP",
  "key12": "3foeeWnTG6SVFi3wHfbN9BDciqv9MreDzDbo1TaSzdipnxRnhxm5KGug8ysu22RMD1z2TayyVjEZJjJaGjeWMJWS",
  "key13": "3LwLJfU682PxV2Dr7bpMmHZayNs7t3jUTs2vGadsUgB8tt27bmBz4Gm8KqsyqACFFReRJoa2MMvatmYLsHt6D8Pm",
  "key14": "WWbjaG1ioZ7GEGvXDmdLPp9S3ShygMtR42Ni8ia6ZLevz26aYZF3KnQadeg9wUSFZCwEY9mnGJUDmKK4aFBP3KQ",
  "key15": "4yBMYWqitcTjx4wFFYTieGmw7ADmMekmZZTGAzEufh7Cd7kMPJVPF5dkHuxYU8RxWE17NDFADkXTN9v89WTmCvKm",
  "key16": "5RcCFtGwbnaQEKQ8UvPwgZ6j4NHmU1STj6nLzhW1Vvj8aMgfaNF4TUZGLASzwpK3pBS8FjJDLr8LUrDnt26eKG9n",
  "key17": "2aJDS3Z1wJ69Vnc6JbyKcXGqZftdjWzsSkkedFK7S8tBD5VtHHMV1ohpgQmHT9Jpvx1V7SH5ccpf7czykx8ZNTid",
  "key18": "3eHgiVWf49VTAMESMYjZWUJxJ4fQ25kLoHC5H48YiK2nCwmrsJ8RiG3sMvcpoUjZbxbNZ1FYJi227pHX8611txbK",
  "key19": "5YQZAxGwLg4fDfmhVSNh56Q5Y1mVWUvUmJLWnVr68X7xxQH3j1rPH4s4Dh2bJ3wGzQhfM9xU6oyz4R4NSZ3SQFGK",
  "key20": "oiRgr9FMXiiJ5RRjBCkREEUhrksWMCDajjgPjDFxqGksmBcdX1ezFj4wdjmubPUmVkmvZN5f8oEwJPk8B18guat",
  "key21": "4HmPJFmyM8HeYa7N94o8YzyodPnbSBdUW2Qqb1ZszJmWLzbJWUBvbVkxRm93ahUteVB9bzznUc3kDNyFGtzEmDnw",
  "key22": "4C6Gcz2sSttXfQbtDFY29uZLyzfBWrSwXBLSpB7hXFMu7KF7bpuC7W39iFYrAZ4sJeRqL6Wpd9qKGfXcsRhQM6UH",
  "key23": "EqsbQLawDU1C5VvMNZvYxhmxxLU7QQKDiqz8X7kxjyEwEW2wCdQ87xv8DUmJR4WPMvWWYRVFpvMtDaK7bweo4z6",
  "key24": "3deGS16xK2xoa6bwQ9SBwxTeRCvNUi554uR7qydMsAx8H9PihSmsPSGqQ4SDayqDV3rMradrkZqCnVN7SFN3uhKP"
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
