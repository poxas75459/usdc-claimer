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
    "21PjnBfBrB3Y8nnyGCYxTqUsWeHZwgA9mT5V58uiUDcJJ4Pm9ac1fn2GoX8ttsyCMXMZULvoyUvkEKox7UvJgYzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MLgntdS8wovABSHTgPkDHrHyyq9XVN7Cw2MhmDfKtipfsDEdiJMCLUzE3jLZ8H3sj2pAtJ3oT2hYaBoJ9LD87dP",
  "key1": "5WeVA5HZAuMSNZYC7hYQ6w8hpu9EZsbru5zZRt5wcU7CxN2GjgFt2VN7TSFvsAwWoMQX5E8W4vgy2JfDMVimtKey",
  "key2": "ZTkkfVn4kpsNB9pmgyFqN24XpmxNXngNJppRV7MMb23Rw9Vk3FHNc5mx5J2MMwpfk9rTxgq3UhiapUsGUUHLges",
  "key3": "GfSgYQp6CszhNWeKP2z7HCoBGZtxpZAw91A65PZwaEB3HZZVnd4KppejjjN1Temah8ou2eH5aT3xUjpFR67riTv",
  "key4": "sfJ9orWwXVg9FwiCZa9im5pDYvuvpLKU5BKn4HER9agQaFUckQ7zRhxTNsX8E8ST3tnePFMeWnhkb72Bpm85VG6",
  "key5": "4bSGYS58EocpFrJXFsFjULGAaRkPUK2s7fQv1xEyJJQeBR6rYzdyHGdfVcFsGudDXgpRBYQC2QtmDqPCaMeMK5HV",
  "key6": "4smUj9ogw5AUqZKQ6Cex23Pj9izpM4SGTBBT9eVnWiChNXmzRxqMcDWj3u2B1pKswvKMpXCKL923SwKBfZhy6Dfd",
  "key7": "4JpLwRL9bfRYzkzfDEmiqWn3m9Raa4CzKqShTdB3JCqFFggo562KaiyznkmqPwJxnT4FqG8bZg9b7DBudyCoKuyw",
  "key8": "2TcWU2rg2M95Pyfr7S288JwtoMtvUaRgTuELVPaMZJywsghNVo7iYhK5s7uWrJFYejisNiLsv7Zf8Q1sPKJvAQkp",
  "key9": "5Mnuu8FyMhWdbxjPyh2FTLZuQpYsGii6fvdE5ryreQ27JyVYBv4GguMm68nXYLjcgqqVfm5nifhwBkb5VpyU38bV",
  "key10": "5L6Q54ZpHh2ezQQS794dDT8s3jdJbfiFUQfwWrP8e5Hp5Y7qCVkx4cpNSFRgFvVpp3gqgghYLjG4Bfbb2HkYSKMM",
  "key11": "2mi6H9BqyzgJgGaeQ2WSEVw8YypFnJhnW9bqLL7GL8iPAqPHW7UQH2NvphY7ehPDR5AzibuuMw995HW3yceoATSN",
  "key12": "kLM3UA27tt6UiygAy11qZYFxBVxpQi1rgdtZyMajduumFKypgszd2xJW7kwETPHktFKMfRALHwSZTQG3GYKgHrm",
  "key13": "4PStWUV1wZTAQLQy7bAKDWxh4iVz5WDszGMdNj13tAoihc7S1FioZswHRxyMa1pXaPERbiwo2jPpbFRq9cNLRBYK",
  "key14": "VKDu7cwePc1gw8gpH3H564tYpyNnnoC5Pn37EwpY7CzALQB8voJvnSYTdsVU7SNoZPLroWhHytFCqNqbzBAofLo",
  "key15": "3BqShTmDaABcvveZSs84AHhLHXgxaK1Awi54KhVx1S72UF4WPB8cH4f1PVsADhc73t7SZPi9zSKEfvCcJeTu2oJA",
  "key16": "4fDLBS5YUvCAonCfp52SosCf8pF1Z6jtMwd7MN8TaW7JBEWTQCvDWyRJwzWv2ktzgUF6c4eF4J6amLU8uyGhE8aW",
  "key17": "5evg1isCjisvzeRcj7MsSFeFJR8HCyi43WcLS4kv6VsSrvNSfFKvdQfA5Jk1rqZKRku9fZ7swpi66171CrgLui6i",
  "key18": "589oAaJL1V2573eG5TGMKLkDjRnB6Nnbss445B7QQahTZxg52rYevL3pYz7s1kuXy31f5zktYCSqHQunAFWdUxSu",
  "key19": "5gvFYDiXbVi8VkQFbmLA7R6hoC6YVk6qWWSxqvLPGm9zFzt6p5ijH1YTk96anBCSZ2KVtBFvSde5uGmAhsMuFMym",
  "key20": "BivBvch2shVpK8ySJKtCHBwgMv9uFHn7e8nWeUDjtM32wFmezcaEVa77iUdmLMtRhHayiNVaP7w9wtE6UBNYStF",
  "key21": "4ug69yUeV9h6aaP5Zbd5iLSDQctsiss6nnv9V4MtBAzLvQn275BrYihVi8RaXPzUpUhQnZsarw3SD1UoRGP1RRAp",
  "key22": "3aPFSfrFVEwHc55jThMnKCjEtTxa5KxxA5mgUA4ZBV5bxfom3wpS1thKVNRHK37BDnhVcpPJKMag6vmGgSp1d1pq",
  "key23": "ptC2Yutj3jBTJY5fGrJ2xQW4oCmf9TmQd4pg16UbhwhofAsK7BxSCxhtZkrBAkWqjUsajWXc3Cyod7CXzs4D36s",
  "key24": "4psjFykhTqmJotrcGLmtBvmFF1qqkikijHfB35NYA7FsaDxmRdfRv53UxDrnqTxvDaerhEFyz6KQeoW3AhfdkJaW",
  "key25": "4fxbr8mB9qmHo5uYRnBeNt7q3NPxKxngPZEWkKbKimooNVWTJSf25cL8rCgQ5AvEtX6jJWQaDJiGYh5yT5VbzAw9",
  "key26": "4DLzVHfWDZNrD9FS9s8e6vqDjSc4T5SdshCxuyQGyEjMfAUw2DXn7agxbUtMTTmDU4YdLHoAgcBpQZJWsotQ4hpE",
  "key27": "PfzyECkJxqCs3LBfKZaXKev8S1cW7xeXrsV4A8y3Hsmv59LVWYqCedLxdFZRY72ngt3rdxMjShbPmacY8ihCRDm",
  "key28": "2g8TmHRgQeF3ekW1z9J4eUZLBspU2auwhoScZjxwMptgJUakpsgprXDGZd7cWY9PU45DbcZbviPZohL8Q7kVdU1F",
  "key29": "3d6sCbAPExCMejxAfhaorrDd194Eks44B6AQhjZiDPAcNwjPQoB2MK59uHGa1TuqTjEPu25yNZg4bQybz2yPsNMj",
  "key30": "Q9DWGC1YC6PArUQNByzn7oznh47d9sVgKrbks62ZV81nGMs9sa9fiDDqCiS68ApmDsj5sjnbYaqgWJMiK2DiPv4",
  "key31": "2cpcEkr8DyiqfvYGDV2KxUzNs9mV5f1LSAU6RGke62NLbauxuL94RKLAXdwo73Wnjxv9eTQhKtkqmU2PbjFwwLuc",
  "key32": "TAbEuZBVQmVFoTbXD7TSWnXqa7ewWeNCSTZbadxDPia2VUFAFg7XvrEGkB2A9qVoeJKRbtkxX6M2mvVbfHwDTm3",
  "key33": "34hMbbBLu7VWQezjsGF9AuMU4Kmaz4ehmz2AmhvAUfBCg2LLd6t93hjwdnxF3rb7KXhZpcxXGtAhxyry1Va9rddw",
  "key34": "3CvV44G25suphDhNCa4q6765CXPhS5SmNKC7sZFAUkFKidseWxhkHEGHf2wCpVwzEvS1QzRkvjiHkV2FmN2KfMYa",
  "key35": "2wSc8Tko857Zj7oGyC8bMwTxBkG5WMgAMYyRfSeaZXycMVVDCrmfcHoNJHaURYLt7NpALMHujzZtYm4g85CXfogZ",
  "key36": "48EQH3h3ompamNneNQ9Y6AjNgjuocWh2AqvLy98sU1ZPQfVJEXaWpay1DQ44xV95o82TkNJL2yjKLfxM49MrkudA",
  "key37": "2CrrDvaXmQxnJpBxGQWbx1jhkEcnoa2VejvpBdQ3uLbsXg9U2EVzkC3GGBEY1AP9fJ2Vho574wShgz8La2TFDabx",
  "key38": "EwJRy7wYALUCkyLYaZiFRPN3uF2QDkgrkhu91NVPYbV7Ut8Mb6GfX7LoEK7m684rtAjDarHii62zNJSjgD1HGt5",
  "key39": "4fD5czEr5LxejQFo3WVGCr3ZT4TqBRvm9weVMtZKFiL2JRaHBKgcwiL722R28SC9G8UKwUDohU3Htr3tuEgmwypR",
  "key40": "4xPKnVHGnpvNLXeRiCszDh6xgqGc6WdRkU5C6hGrxzLdHPb97YpCzXBBG1cqgYDH3SvXqADiQTtMtbAmK59mDLEt",
  "key41": "3r2sKrMvup7iHmPoRXGQjRyzuFMqEf4186fZ9npup5K8oZdM2KStvQTqJ8JgrSPRA2CPX5R3kfHpm9uyvs1aUncR",
  "key42": "2KRmE1VNdkDYhjWPkkRMK2CLbVusZKXPb691xCm1Y6SL2f3X45awz5cBnBCdBe4ZVmgifeefgh2jgAZ9WU24UKLn",
  "key43": "3TTj25wuWC8c6rvebbWsXF6v2XtA6tQYrGfY8kk3YnxtrnmCsrDRQbZa2CXpEiEfqqQZQ5wk9F9imxkomJtWhbfd",
  "key44": "3TbZvBmVZQcWfusKmFHPTpugUS52bjbtp5azpKPnxwbGKmUrU5UtUQPAGkSTDmAiJaHKWWrQLitmSS8LGjZh8fc7",
  "key45": "26HCWcujfuqTo2NJAqzWGt4aW3mHBxU1BQBb6t5DqB1KJH8k5oFFTHuQTrugKJB9zzo7yosdJtWLeeAQbLd4zQpD",
  "key46": "5m5oBn58WacVe9k6BZXwuxcM7EVeiDMxXCdHTcV45X6MWDmP8ezmbsmWwZYkXxizH6pkiWHRbArv8oNYs352ZVM5",
  "key47": "2hfu1CDqGxAvYzpHV7YNyNB6t6NDap68VspAYzHrieEZanQMyHSQQTFBS2jAQyuxT3k4WR3iLm3JsCSUnMTPzURN",
  "key48": "47wB935PpDSFMh9xiiV3kqRCrQAxiunUgZbve3Jt2p3RovkU1Q94zJhpFTLBpJTuTctmKaRWSgbF5QyEeHzCCMWn"
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
