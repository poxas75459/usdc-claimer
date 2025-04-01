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
    "3Z6qAGrqPs4rwwKhndDnyQfLmZcVazQd9cQFmFEQmkMZAYJaPMkjUEpbCi6P6kzhVhPRf1T8rHHtd6xDnnSe7CHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b4TNFddWaxFerjTq66sz2QWmxp1fyMhv8c2VJQ48wj95LQ4JJNqUKEAZPULTUc55qUqeAkYGxtQN7MKeS9Girho",
  "key1": "4PwVEEnEJDT9sNLFPhnua18FCPsvXE41zuXr9S3Ct3Wx5GBdCLC9o9VfA63HA2gDXhTH3daXSjSSEb4cWTjvdKCA",
  "key2": "Zp8EbhFqZXDxHYmTQLu5P98mMF2EiiFNLxqWn2S5dQKfd7u4RcZ6CoKVn9vwU5xZf6GgTbtz79fXN94xzb188hS",
  "key3": "4i8gwqiEwfbA8vtTG98y35zTqp4wVeDagEaFyG3phdURTUVFBpuCZeRwwdGw2V9jzaqZn3XE9WKSieGmFzfcQPg7",
  "key4": "2ThvoPoahnrKYdkvUNgRVbqm7UB4DJ9ZBDLjjQu4YMCGfELGKTtN8Mc5eaB2Us9cK2AgrAG3aC2SZGx1ZrvrevLZ",
  "key5": "3NfoD8R2JFj4xFwu5Q8suPVEJgiHDsFXoaxi1fYBV7qPZBKwwRdDCcEPh5gEHSdBB5wzDTT6DdPJPXridQxGEDoc",
  "key6": "3nCGnwDEuwqDnBF9AA7ZFVtZJvbKQKByXEkcKQz97G44WVWKVB9u5NaQrRZoQ1bhnWwRvgMDRKKhYFHb1xwWijPf",
  "key7": "63YiUMrzojxrVEn5z6gD84gnYLpmyZDCowDyWaBGRMzy4L7DooCJ6SQPAPJUSGXT3bLhq4isGtpfYLmfboXrCNib",
  "key8": "tThSJ4wHuYDd6ttJmWgsx3SSTUe9hc2S9W49H6tXpBzNfHimdjMT4Z54yd33tJLy7QCotvfykbZpAbRmRsQmKAK",
  "key9": "3qKNDk9de5o623ix3uF1PZwTVb9u2BULiLS3TT7aNayPzFRan6oGePbsmB58d5JTWbNSvsYTrTr1aFyDUnTjJpgQ",
  "key10": "8HFU3ParhY2rRcJezhoZS6WRxD4ib4fbYdGy7wWmfEMNrPGeTFuzA3eivZ6Z8Fv32je9XZUGFN1v8hTz2GYmrUu",
  "key11": "5MRoNsj3PJTS4qQMXDy5EJBrz9vHmxaUcKcnSqQd8votuAzqx2bnpDcNMBi6wF3c82GRpoDZWr1G3wEoKmWsCU7b",
  "key12": "4qYAmPsqBQexvjzJYm8Eg5FFGCq7eSDgjoUr5t2ZvbtJp9Eg1NT8kULZEo12vBqfYh9nSeuLPhgtRM8jUKcakpc2",
  "key13": "7xeuJTKkHDCjzReytPYD4jHxXDkbs7owJtPrZ6X1pRC6876NAGwv8WuobarvH49QJKfmrqdWzxSCf5AVV8ayUg1",
  "key14": "2t2d4KnDtpJHzNSiXSfE6QurPSbBGWpPpVY1JkvxwXRrU3g5NDSAR8TdSBtWL3C6nn9YFuGa9RGA1ySE7v8F5Ck4",
  "key15": "4DfvyJFSptKV5XU7DRMyRSFvHXpPjVdgD3hBpLoMkWDVJKdmS9WU76t7SsqmwrZBK2Fwa4zFFBsNP7uCBQomCiL1",
  "key16": "2eKm5tudhbjEjiCxwZ3VMNovvfk66KoJrMy2c3MrQE68Kzn2eWJ3BMoRqp6iCPW1WovXrxt2arCXMqc6iyh8TpU7",
  "key17": "61QL9hXjwJYFKhnepca7VVJBnjLcVW5tmDaPEBLcdR3f15purvgV8jMj3eFWFs6pEEokTHhtpDEkuPacexbqRJVb",
  "key18": "4KkAg9DVqjbog6vbk4ST9BuyGisf5GKgyutiW6TzFTgwfumdqFK6tUtQRTZkSBG8qFHsZokJDvrtctEUQv1h21N1",
  "key19": "4dnFdaukuddCdnFu7bkM6f4p8sRXBXxu8o8Rxc2Cyum8H5qFjjCr1dw2oGfBvG7E8xWnfXpEqA6aQpdPHNDeduxS",
  "key20": "5Ni54GukqA4hEdEuxp7zCL434N69VJPLTimXcTiVJ661QEPbtDJRzj3XCWU4Ytg9iJSRWPYyn6WpSW8BCqsNXnLw",
  "key21": "3UditLUWhJ8ozkbmqdstfu2teTcCo7b7ZZL7wdDxknTYQxHCF6HoakPh8nt1HPPkN3gaip7ZG4K8kT8BiTeSJacR",
  "key22": "42MfyrkHwt7mBmxYgLsPY2QECBrj51yG3MnNP1vNwFaUgQ68KQZ3Dtiz1vpPwKwoZp2UXiYgk5ZVX1MXNVUCrHJy",
  "key23": "2bPKUnJzCStY1m6953DHHFgNcRSqqAyopFaPbaWmNfseEK1AaZNKtmzAnSPdedcK1QKeGSX2F7UHMAVRY1HHn5iy",
  "key24": "5cvAZpsXt4hiDyBpUWUrZmpipJVxwbD8Pj9krsMGu2ahPyHEZ1JxPU3Vc14PdMiLhS32MBNzrMgkea4jnL5D26eJ",
  "key25": "2H4ZXySW1Tz6WmJw9srEE383qp74WiicAdsLdmVeeTbR9EcQSwQxK4s5yha8jip9F6iEWYYy4FyBLGtLp5JULssH",
  "key26": "4oGf8NEU4yS723jZeY1nhinaZvawThEAQuJpMQEbSyxjKDkLeEMW76q2WAxeNkURpPszN9Gv29m3hR8JjY7wNfEH",
  "key27": "3bmDtpbhpmzCNVos5TJxHB3LM2sEQ71YAUTdsS3kea22uB1Uo9wAcqbknYFM7zgaz6oBxjtDMwZ3EMCx1NyeeV1F",
  "key28": "4shFT168dXVshAzDPx4ngU5fBrBqg3zHc2KjrX8tnitdY5LJKj8CurX3rmvmhJXGEFQnVidbf6q1K2R1btvhdaQn",
  "key29": "JsJHcZZ6QRjnSYi32vX4NHxngeW4uLHy9dFnwtWEnvUNjEuSDgQ2WoDcjJ5SB5tDoPnEGzWuMJdEfLTEKwZwMcu",
  "key30": "5G8ypoT5gaqoNT5CEJAvqSjufe4jT45DjTwyqYffVnFWnA6aY6Tset6QewMYnrqZhffGEtYVLihtNDXwh4dC8dpM",
  "key31": "5X85H8QnNJA2C6cQycg7qmFXagttV2DSG7FGHPcB7UkwibVekEWRGKQmc9uaVSBfx9WGgcEMwhQCMrJdhe8PPagp",
  "key32": "GQq4n1rWT4Tz1GHNxj1naFJzQALEVJZx6aYroGEV46jWiFuphG5mq8y3sqTD75pM3HPen7aF1DGBRKUhnFWQ4S6",
  "key33": "4aBPt8tAcPwYDQXUdJhjrGYWsZc6nz9pEvHymCACsqqupVA7nZZNqArVLt5LHTQWzXrtdGn7XxCoX36rv6tABGBZ",
  "key34": "7Ltastpdu7jWnpQCgDVcrqNZf7WK9VHTEjRUvp4WwAJJJXGv97e2ssDPSRs8kpsXtqXfAM4eN7c7ZnvZcJzEiBC",
  "key35": "3QZsa2uHEDDmBQZRPJJfFX4XxhTv9YJnG46NHCHpnUJP7nVd3VJJA4M971LqnMRXY6a3qM56teeszAQr5TmmB1nE",
  "key36": "3eDQCVz3oxw2VRPEdf2BhJ7DhWUDSK1nmjr89hT9fYFkJ3Cx1MNssendMhPJbmKugwjs3LNPYpSK4KYUxw44nxhJ",
  "key37": "uqjLRaUdZGsZjYpecExQw42b2E4qZPHJ3N8uPVoMmnUnjew5Hrfg42NdD4z68sBqoVGb48UAGHxGM1kDGJVmb7X",
  "key38": "5ji4aB1sLyunRMDqYJn8ZGxq7tnkDCWsTjV5wqUhyYEBkC8bedKY7r4gzP7uk9qWbabB9pGmArqcyHJzGuiaKpse",
  "key39": "4BJy7sPUUfi1F9j2szw6kCR2SaWyoLKSewYtELZV2wjqCCQRHpZrCirPu1N4YEuQ5L2AbeN4Y4X1swuZLUNwGRhn",
  "key40": "g52Zixquc1gUPKfwhAXLokPSQrDuqttcTbHAq1ndr35Gc9vFD2vZ1FWktgPWNFf2xWUr4MGEpGYt26WRbHHXahE",
  "key41": "2XrgRGnBFZKykHpyzhCMYAu52zPrmKTUuaLXu7cDzcxKKYY71tquER2mDr28pMXPGtJ93dtx6WhLp3LkpZXwBBaT",
  "key42": "53YwJzKbr8e6KpiGrQWJ7yWaiDAcUqzGV9owk9cHFTD3KxTbzRpKCe3GYXRyvqyrA8SvhdJ4JFgX1aRZh4KEKZuT",
  "key43": "5XZxAyBsg732sFNjsER9qcXcWFqhiUQPojCNBEHFQYqLwxc8WuchUiVyjHRVSLDohLQa7j5qwUrWmfMwqy9938xW",
  "key44": "41Z4Dqq5sJ7DEDpJ27vXJLeHpFBiAw6UNh56PebRS4LVnoix5jb2Z2QcKK61ZVcjg6QHpzdGphxMuU7D3ztYuPcY",
  "key45": "66goMY9WyHKuHb3NcULb7s6owsGPWwxvBiYtZpzBAwpaKbNZbPoC2xp8W4uK3BJrJvZ5B8CScLGvetkLobQgJsnx"
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
