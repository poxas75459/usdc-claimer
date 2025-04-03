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
    "2ZnPGwnPcVwHDxLZxKr74THfarn1NumhFDzaMqanUY4GgmdJwmGEdh7yzkUXJoJBmBsxvEv71qzJo2jEPjKotNim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ky1RGstpxkAqTUdBGoSZP1AL7YEMTmyaAMQwHEDUoXLeYQiE3Frb2mKWvCEMUPzBY1cw2tbBV17vGbzSx8uUDoW",
  "key1": "24PRBRNDKfCqsx47M8nhxTZzao4Nts3RVhz3kKYh2aJA9CWytxq9e43D5i63ecFZ6Xe8GBNfDHAP5ctCFKUoJrVf",
  "key2": "3e2UzT3BjAyMirR5jPdLMZYUE7d9C3RuaeL4ahRunazFc8NEGgtyjRvz7hd7Q3tnyKqc3S3GjHoPFWEpwjfsCKXb",
  "key3": "2cFjKWd1jvKLmgxNCpWR8roTBFhqSxsWxv9nxzvhJs7QBDGdgDnJkRFqatJNJZcyoPmp6tyx6XGux7VpSzKMmfTW",
  "key4": "m2jk1aAadZXfFUMrHCdHYsg7v8kcSb64WWNcbiYkH2kfM3cBp6QTsJ5SAEXtFL4zibPfyunuhdrddYRnL3KTtpR",
  "key5": "97Gvbk2jkV4XiQNJ3KH4d7sXGj1GD8SYdBYqWPPnqRmENW5eMqbDeKqW8Et3aUpY6ifgnj2ib7xNdyjP7ygFhef",
  "key6": "5aU2bLWAf42rftTogo6kbiatyig46S4FJE5nzZrwCVU4ok48CfLUaZ7oSfzQJ8rCYmuRewA3h5B4TVEpuXQ8dmm9",
  "key7": "2KHDhBrKaeWBNzBL545qohw2rFp9WZQxSYniJvi5i2L9NbiHdrPrcuFNaEckd1X8cqPJtZe4e8pB1RKTZPpnRKbt",
  "key8": "54TMSMACCQkgkHxdhd7446Eua8VnLK4W6Gn5ZZ4fraey7JE6aEsmPgtUhvFndMeafsx1EVkgbXgnpN8Zi7Fk1ybX",
  "key9": "3GjyGMz88E4HCmHYyXEB3MU6mYp4rgZDnPPxhMgfT2pstoSMGHq7KUETS7XL5iL6D6mwFymx5r27C1Cu18ryKUzZ",
  "key10": "5G8H7NmozExZgMfnJNMbP1jU4BLiBb1XgRmpAwXZQ2tWC2hQwMXBnmwaSyUa9QPLEJ2YRyjEeKM7kjNaq3eFaNCz",
  "key11": "5f1D91y26yRc3uKRCC1zS6UDdN2ceytznY2vFNKS1fb2rbuGQtKdXULxPoFv1aitZDSjjDXcaxYDeboT2NMnzWJC",
  "key12": "5kPrbY1YyTHKcg2kqT6rhiwfQkJMZTzLDiqaNg8W1rwhpUgesSbp6LG7DDZ2mtMRyz7xPqrUE5MDuUHhPY7cafHV",
  "key13": "2mgZB55cR9qtQCoHFAmzxUCcoLf9SDWt5ks2TTdj7jvqhCyrRXgDUFM2qdvaixs6pLQc3jCiRAv8WJjKW9aHEVsY",
  "key14": "4W1R3gYQ8f1MkRR4XphFsmaoawT7e2JgnDdiZ5Dnt9LHX9P1c5ZeaoVe4Z3KqNc5dEwMgdeHCo1Ju1N9hERA62sa",
  "key15": "2tNkkn1eP7cViViDHSQdMkP2dQddyRVQADrXQ3nRR2M4VNJ7sV2iGHbCxUFXTTDayML5925TpBov4MvamXvDAVGE",
  "key16": "3Yj88AQkrMFZEYqBFLuh15x2PaZX3YkKXxyx2Mh8sBkKuRofFkBboMgETtcEHURcmdz8WVhXEtnUDt2ibttjDVvA",
  "key17": "3NazgFfvSK7Lg4ZDrjSkTTCE7PVVodqUnrNj6gTtZpThUCiPDXgJDw4C2eCvHV3y12fFYctDZHRCZS8iHWJoa7ff",
  "key18": "3MjPQPXVw7EzgYHwp1DRpAPRU925goBzmK6WB31aVP9DCGUZmkEU6PuJ3ZM48Yk54MiTEZS1gYpBc9gfxKNdMJ9X",
  "key19": "643fjh3ZqEVQPkk93DrWkFZ3MBbfFBhe1he8oV9VqiZwJVxbM9nBHrAh48Fi8CZkUXKXcFU4TKz5pDjjW6NHESjJ",
  "key20": "2tovJV6BAVzu7fzn4k1DLLPSwAnxVJR62ipnh7HTQHZXYvkc3BQsSGhVXg2ytTa7JHRdQVyM4wS5gtMroMVvuAUf",
  "key21": "27A8Bbw1D6H5dYv47GB2dvpq82pBE5UESnCDjX8TZ2WtW98iFeCzfboCnZ7RwA7C8ctLeFmyatFYKpkqvSjtvHfL",
  "key22": "2P6wnZw62mXvBsVyjsotJoP1xHYZkwsdXP5Ev6kywjXN7pigyHCyHw2WPb7oSEi9eUA3WUaWwbAY3QR3ppBYmFyk",
  "key23": "PMYXaxkw4GF48aRvA1NrPq7VaqFJL3yYq8Gp51e3wZi3ZPhAgPPm7fXT3NBryECpRs9hYdPzCr1wgG9PAv7CfQB",
  "key24": "MsdjU7gARdBFaUpHwmgcLtNbSgYcPRyxsqu9C6eKVfuFPN5iFV8nML8KMgD9AzvQEuCWY3p9JEAmjqpUHyqt4AX",
  "key25": "mw7h6YMurrX1kLqSHr6MjXmSPa85cDmKiNu2RqQTP4JwV6k2rj9xuW6sgmNVXB7GDht7fNB72aWbbJ8zF6x9J85",
  "key26": "4XXsEpLYa9X2e13L8CV3rCGkGa4FhMwdR6DyM7kxwykYCBXtTAYm5W4PgMv7LiXBzNAVASFrWf1o81z2F5EXt9hG",
  "key27": "2GScw2dTpnruoTDQQuxocvDPr83PPzJv9ok1dmqSbN3oDbtBEU6cZV2NnNYT5N9WVaNT9GKajgr7Wjy3YH5MoirZ",
  "key28": "3efdfzoYFpSAN9i5WYH6xTJRiiSRAzsjCUnsFTGZobXeUtZnG7bMt23GNRLQmSKD8mwL5erjuewg4Yr4WasWvGoP",
  "key29": "49hsGJbrXmAQW3z1uE2z57QQtpXGKhnD4LJiSiMM6NMN9nAeozqT6BJiMjHQfGsKFKUrDuavgMVtKV8S4AKgvNF7",
  "key30": "MpSRkCZEzYGxrp2QutpsWjh54geqRv5xGp66FY2RoS3fjgRThspwNhNXxCbwMTBm69x4mmiULgLJ9s8TnvoaQm6",
  "key31": "7vMQUL4KLmimQPh6yQgGPKawBzsmX31DfbQgcT2xtE1MnZT18vwQVgabRCAzeY252y1L3S1nL99QGfhG3weBLq9",
  "key32": "2bfU5kgDaqkHfGBJtZidTT74Vbg56F1JMx6nfrg2kCCRawUBiYpEuRi65oGqiacd7Dt67vJyFukB8oQ5D6c3Vp9h",
  "key33": "5TPtCrNtGw7zXKQB6qvrSb8gKSj6YtFPznJEa89CEgmv5VvxjE61J3w8rqj8qauvG8nusJM5QvKzZd6qsXtM1fiA",
  "key34": "3XR6KmugJrzV9zr4h83zCqQCag5BSngpNYd3WfXcURxYFH6NemB1ebd8GK5yxazxoM6tiaF6SZMfcYhYw6pmxs1a",
  "key35": "5Lty2iroKYQSHG18C2eMfpQ83VMZm733QWoqPS3metjLCjcsbg26K1Wdu8JrK3Hp8jFk3KfELwxWYX5Qt5kwWits",
  "key36": "2226Lru1FqX61rzBmfTpNTrqN65wXPSpmT5nxXrTHTanpwY91K4mCGwJkEGjEqLUa9L737CStSc8Q53b1VhT2KAq",
  "key37": "M7xWSEGHbYUWCwkVVJw5ke8T8oeek8CmRD7CzQ47De5KPvq7c8MAYtoxJFT2xBaMQozDS4cb4xmfotmSWrEeUop",
  "key38": "4Vy3e2JHSV9tSrbBHyQc4tB2Ex27DLwzPQQwtuVqsoBms5YA8kMSp4L8MTkJtfKkzwkW6BKz7uTrZvbA6AEd9DfD",
  "key39": "3zHqtYPCx8ZLpmWEbDBt8Z9RVj5WxpdHCwqLxGumnxVzkFsjaMvUiva4vnMkTYMhdDXEJuV7PTnSWFXPo19mnRXY",
  "key40": "7EvSEKViCUk2pJi7auDQe9Z917g9uf3iYSf6YrDEASrLs3xhX2Q494nGnecRv47L887EZM6UZHkR9tivr8cz8RC",
  "key41": "6655pjrfPGP1rJZ9obn8QXL6Ft2NSThHcAt72dXCygb1E2rYsCcQufCPM1JNQX2AtNAcap7YBqphfGtVmxcFKFCw",
  "key42": "37C1tsPH1yGtX7VVtBcEJyrnfyoht4K15bV56BmmasTN1EvZHwX3ocYocMiDFspm1LryuL62rsymZ5WiJgnyAmYc",
  "key43": "4HJhTGMfSDYtJXq17Yh5eyT9Rxem22TbFUjdZR48p5xU8Vgq3EFbrL4b3i1A3CFd7R11WbFuZd8XN69poTs8m77G"
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
