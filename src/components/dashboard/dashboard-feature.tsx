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
    "4ZQYH4Yr3SysF7Eb7L5gcvY5YTMHHukeiVxdGckPnyvqbjKTAPfUZhLFWdk9HeaxuUwkHdehDJvpiJcjxdDwndra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43r5mHD5s1uaho9TCsDcUDnydeouwFMDbDvQgigKkiZcqp2YdRzdzuZKpW8Eye96xWhT9Qo7ZdPtGXrqdbpGmK2G",
  "key1": "qH4RjcuCD8PCCzmMafaCZFu59H7FTaRqtezWfxjwDDtSpD3hYjLEqWhiG8Vq6JN2xtZYxmVQXAus5LiAKh5mTSp",
  "key2": "32fLHJ43dtcME8a8sHFwdFCufGPieQDEKKf5FfvaojNoe4rcvVuf1zvgto2RtvVFq1kaSS3mBasG8c2h9WKV7R6q",
  "key3": "3sGpMYS8Ke4ZUbjbUPFdnzYqabVZE7B8aUvoP3jkbfSnbJ9L1gJJN5iHvMNipzQaooU81xSnYS9PQaNzA7bCwA5L",
  "key4": "4dW7QExtYor9VthX9ZdLQp5WQrY3jcXUzUoz1oWkpStRGwNeikQxntogUfjskfwrJuNzHfocxries3g42znGdqLM",
  "key5": "4AF3ukBvfL5Xk5aKCydSsyeLr3TiDkawe2Qw6Rs9vYzwwveiHGZeZEvGhnqm3n3161vQj6hFpLJxTZwPFVqPuzy9",
  "key6": "4KV1wRztKF2JvCmjxQFGTsibdfMmMXAPoW8gZNbM9YqEfdxQM2fpEvDYC4TxjbLpFKrdQob7rXBjg4SF135sioAV",
  "key7": "367dNpiu743DmGbGkpix5E4yDCnBcicoiV5mqQDaAnixNXK8C9cC5Ysd721Kx1jwZdY1HUBSbBF3rEbwsSEeM8fj",
  "key8": "5jNMTqtcg7CdA9PVQLeGNGSwDxn5oU5d1bcMPfChwDhLyLB1i8qnvjTzdLPKZmG5pz3WxqAbjYd9Q6G7Mivxvry9",
  "key9": "5f5UTPLHu34QtyU6XaPnumyoxe2tpK9YiEgCUSNAuAjsayewfbonD7RAXEE8rNiWk9f1VnSapuRbw9i3v8uFML77",
  "key10": "2sbp4GJBxhChvavxaP76Rv5tpu1zvxKeAfPCqMnzRk8EvaCTLdVmn5T5fyL1XXbokW8Lq3nNueNFCxc7xk1rc64Z",
  "key11": "nSsuZjWoqrGyeWjNfDNWL3TxKr8yAfEDkCFHajhMQ3CwHQiSvcz99Lg2MBFqPDuv47MxbBPgmH7c7BL3DTTZE29",
  "key12": "4vC9gjQzm6QYPY9vrSNouf9mZKCWY4dmpQprViqbVbhc4eKfMVEtJx2tGFocYY29hEg7v6Exc5KkvRNVJXoiMe9x",
  "key13": "zJRfUaPyqNLrF8YBJjV4Zs22PCXmfixboY7T4KX5a75F2cspE2MVUWpn9RJZEDLboGtJCA3cWuxRD4SzuT1DrKM",
  "key14": "3W7Q47bhg2yLu72EVz9jpnwmnVpB3m7mtgYfNc3eJLcDsZidyX75mJxPBcQ87EAxaU21WSPugQSUcLjVrWryj8aq",
  "key15": "2E5ZZPAVNWGQnyXXxSgsacpTLLRyny8finPbmPKN62tdev3q3gLxsEiqaXfYdPrj4hhr3LDyGB2DSk9KvpnyKPhT",
  "key16": "2WrA2nDszadkNymFQ6nezh9Poyg1G8mpWA9pcAKD3qcC3wCMLNb5BLu9RCkVek6ag2dXPyni798T6C7J2YsRwLec",
  "key17": "TYFrbM6tvAGBo2vBRT6LH9HnMNZmyCpZSSBzzUK7nmQfMSGeWYDYFp9qFN5JZq1y4CCQvexZmC4f3RCVMhcW985",
  "key18": "aBPMYXy9SUnHcPZqAsGny42gvGBCPap31XUSMJu26TcS6QPWcnCtq24P5Hsg54Tp46ThkjESRZai7wvVHdQNKAS",
  "key19": "3sC6Eweu9UNiRgs946sYyABUbrLQiSRtyJrn1XH41SL6i7LoVn2w3YWn9EmXkwK9Q3MVgkHPkoJ85rvnMDMvHn3a",
  "key20": "5HCK7SZ7TFsMUdc4oiU3PbmbC3PMi5mZ15Yvy1nBVzGcaXNvoFLbJPUNA63qRTJJDdz6RhQsxwjFjL36991Qu1vU",
  "key21": "4V4oS6M3iWYR5GFcfoERcjEnHT8gyEo3aY7zgZkRx6mnRw6oRidoew4ewTFgRaEheqZJHHkZgcMETq4t1ebEwvdp",
  "key22": "2QAGyeU1gXqzms9fCw1GjKef8ZMDL8MMyHiy6LKq74MpoFjN1CTFarhqUdd6ksZMAftN1vCJpbzc8cd9aNJayRQW",
  "key23": "uA87P1sv1AHEz2o4zdHYCgvke2BjmT4uq2mGXxEqT7Za7idtzx16zBUmBJqT2eJZ2y68dKGsmoVWkcoDEDL4sXC",
  "key24": "3eYCjXF9JBY7nFVaucb5EZCmivVGs539zmVXbviS6KSh3Fs2S9qgWAtP3kab8oBgEL8dPmGba5EYHxnUi4VLDN7K",
  "key25": "57FgP2eEcEkLR4f9NgUqwTr5c7T2NaVJcQnXzkXuh47ogiMtSSDWSuPiFdrnsxfmrt6zhuW2Eeh4kXmPwrpz25SP",
  "key26": "3udJsMxHCa78RWNKifr3yTQN9QFrVHr6GnaDo6B1pT55U1tq4kaALbHdZ9imRqNszno8xBy62TQenw91mJ2ZFhqX",
  "key27": "3BFeJYrVpadDPqExNEge5Ak7JJgXtrydZ9cCA9BKbNikMksCMKKhSsiLm21D94K1fNnjsQo8JiGHCurL5fUbjwz2",
  "key28": "5TfotJnLULr7saMoNJEGb2PaE5eaaDhrLqkgcMGjH7q1hngp8ZAC7C1Fpb5qoE9y9RJ8GPd99nzXTtsdacHEHyvV",
  "key29": "4RxQd2vD78NhmFWaRSrsRVNDYe5Qm8VyRru2wVPceJ6fC8zZwE2Mw5b592HW6Bxft4SNR5a6zhjCb9rw5GKNiszs",
  "key30": "3epS87EWPCeNcCJfS3dow5nmEwFnTEkSuuDGUTd1z5QbZpkVZZCXdPqaKceBJLx7LoGKZUZVKdAbmr4btiRaPXfT",
  "key31": "5HY5D4uwvD68GgQx4BJtsqzGJapjV7u9evAd7JufLTUvLWUUYa8NiF4rsaj4bgb7PUL8mvqQteNrZntmoMziTgy",
  "key32": "qeXs5dgsNrEVsagHP8nyjtC6jLk4Rs4PcRcU3KRTXkkSpQxgUa8osxbi354f8CiaAPGyLE28UjHZhRyU6G5Qcvs",
  "key33": "3cDKWR2azhLdRUYQm91WMxtiQHSLUNrqTFv2X9F8dy86XBquNDKRnppQvG6HvUFCFzVbkYAgityZkdLWBKkpR36p",
  "key34": "5Z4iZeKsgqNvyRyKh98qfbM7xvgeFAyyqCPWW6XDniwyYUmgCjgdhHDErLa1XwmFaDDAviHBrq8sANi6djQU1zyu",
  "key35": "4aTXu4HnW13BtdehbEGkpEqiXnoHsXy5SZHo1ZxHYAX1p7EEnxG3fxuoVTweP2WEDzysSZvUSiXGrdcDmoVHS5vF",
  "key36": "3EBQRxBM5nQnkNfh896KTWFEpschXwBdEdVsqu7awKzPsBNjFN3cvPKcEpmRzHKEr5oJYZQQdyYG1cyRoMjyAk4h",
  "key37": "2dzZj7FAd1ZbotZ7ik7dQ1fz4BjNmK3MCKjcPg22S5U72pnhvjNFxccQYd4ahwPqicjRaUUp4FUUbAyXBVRW1ge1",
  "key38": "28MQYg5mBm1dG8FYACiqb5orzqh78PiMKwLbXd5fQT93Xa2fBB1tav6DxF6zTYD36PJB8VXW6jw17jwVSP3FACxb",
  "key39": "63tyMSSGTod68oFxKUSxS4msqgNLjXnVEqPzvQH3tSfExQKuadDKs1QorCrzyPhLLgtu8eFazuBzDMur1FSzu3Ds",
  "key40": "3nDqLbrLsJim3sVa9o5g5cMDuVdHUkKNjwKFfHV9djBSb4VVxHggrwTU5V7SE786gpEdCKZcWvrmPREfSERRTTQX",
  "key41": "5u7qJ2D3iMZPayTjw3qgj14TPAK2Ae9iAf8PGqrLSFW9pQvppZhUsAANxLa5sW1C1AtizhawfbYaWWX3kCWyKc7K",
  "key42": "EXXEL97QdPH6MiCRiBaW3AgGMcgkCpDerNVTEPaYf5qVhTBdsqsG1qSZTEMXzB7SNp8PLKnJ3kYPLpzofvJDzkh",
  "key43": "3C3YvucGEsR84UHcBioNZs9Pn1eoCVZ7NbcuwtWCnmUUdG229BafaUdXe5r7gjitPz7VT5yXQ6MiCxcfBYfrYuFd",
  "key44": "MapW95U5nfbfKepjANcGa4AdcozZpRtcqpRgRL7KQg9vGNR6ypu812qakVBTKa9xjTgEumA3xy9xy1r7FSFi8Uh",
  "key45": "3VcvfGbr6KZhAVESNTbMMz9BZ27dBSWXuCNJ5R5DWu9MuRzhgkmkQSanitUzyFgFx55ZUXJAKMLscisHYThheW41",
  "key46": "ve9smcNhGZzsT8qreYr9hpcSwzg7akq9RyZbXReRdBTbtPEpaUurUEjKugMr1YS6JvjKhoc7rdn8cDUcrjwwWik",
  "key47": "2fmi98ogiD3vTVHCaLpXuPLzm7FDtK8kzi19UwXQqzNAnKDbX2gvL6UDANrT7mtTii8aKYHdSz89eAp7hhwwuetk",
  "key48": "zrkNRWumoRu27XGXEJXKDhsmtr2uoCTf4unDWT39fYGwvNmCpSebLok1ft12JaZLZCzkJE742M7YSznp2reNHSU"
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
