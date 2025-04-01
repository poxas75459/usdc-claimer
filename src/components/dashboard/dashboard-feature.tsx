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
    "3y41S8dxtkD45kGyPd5sFFsjhAD8ZjjmU6Lk2o4Riz1BATSMNMEwCPVYRfgKJ3Py7eQWYfSdSRKRrHJdUEdPv3y5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9vwAAYUJABYcqs1CMZ7u1njN8eddB3Zj4C74NAWoALcj8bGYvLAqZQnKBGLFp5R8M2h44HJw1iQZF9mLX4FzYEG",
  "key1": "66yK5DSTaJthPekaGyoBBa5VEKQgQuWyVPHDuHYB3FYUCkqVLHXwwmRRij7AsTLXSj4GHA2SL3cZZ1wSHXpbkJQB",
  "key2": "4UVpArAps2RT9QE9cc3a2GZYg8DnZTf4VciAqh4kccXW1obMaA33gtcxF9Qv9j6idCVmevknLttCMR4QdLR8fr5h",
  "key3": "3dsqruLWxw37aHdMe4E4doJcGSKGEWL8Pkj1HfKkRw9BsMtWi6jUyV4GMi7dj15Ds5kYnFPA3crKJsb61zHnKDaq",
  "key4": "5UG6isNWVvz3VZ4T5YoWsa2fHPKAQmXNmqkq5wzBZPBcqVwWrcHGMT1WCepcAkHBY2njLQgD4ZaWq5LfMBe5zRv8",
  "key5": "uXY8PEVgYKKKnkYruzX9RrxkhMtVsbRkQztkFdir7KVCeb3eDY68miMAswUS8PjtAERgwrztKAvDAeWwLjQnYsG",
  "key6": "44HvunDsetxaw6Y4tSPytNHkztCz8ta1eCsWsgiUxDkZy86N9YNeD3TgGWVKNnH96imcUZ38CTpfFvxR5sMDuXxC",
  "key7": "Be78QcxsXVE3AWVQTcr6gWB45NrqtwtoBs5WrC6SMCj1Nek3foKJhw8zbphsnUhNJFmdxPRJ8FyHMXWKJkrxizA",
  "key8": "2uzzCYMdJKvx1rs71jCVmn5UxwUhLLNbmuhnkSrMDsbp22r48qZ5yNK5S4opBx6nJJVkyuyH9uQeo1fp19Aqz1q4",
  "key9": "2P1Xuk9DU2bvVhVGSbbrKkX4SbrH7cuykjyHPqSL2XU4Qfiq8sK8NZCwFKz5f5dPNpY1JB9EnbYthMsC4w5TgoaP",
  "key10": "hm9HrLzg6ZRevauC8LgMiQ9Z6eeZ9mP7hgfb94xHSLaBeEwTBLya8ViJZ7dqL8yracawTCzCyVjvYFtHGP7cewv",
  "key11": "57mFtcEdxvzvEugcDxQa4VCCGbVge6EFF5SGqyCBCY6MGQ7ZiwbTGMoo3nZAS15rrQe8hjtbTKccrQHJcoYyjXA6",
  "key12": "65WfaU7oBX54w3sxiNvs9RyhMiPrL87KxtXBA8PyFMKp9kfnTagicexjwmkVX5PsKqTXZDsUZXb7ofm7jbbTezJy",
  "key13": "4PNAn33ZRptUfGXkxDKehhaGJHWozFR6Lr7Gxi7Eof2TgjUWnc1FZeQEJjyUwRqmcJZLWSDcfLNa2jEfjxi6h4pU",
  "key14": "4EsmTtqG2A1eYUxR7LfFqjsYQAft2FTBKSSGXFqDLQwnBAqEJU4dtcHqREAtZSo7N1EQRzdSwUXMWqpNN5fzJ9Mk",
  "key15": "2u4f6aUFE3sDUPzT4xpih2rbaBYTdcZhAh2LuLXSNdwY2VSNnKryyjT5waj8rsy61UWZ16DPfSkJ2mHXQ5pZidQ7",
  "key16": "4oU9bmvutAeZMVgWgFY3PEUjz5UEjWhNd7dgchjHaWPMNcTNjT53Cx2G9ZfswPSJPKFTvRx3NdgabkGqXGkua4Av",
  "key17": "42bipE34LQXrTswtDQicAFziBA7P5ufySZuAUDD79dUpjV7hBhX8np7B5gqANWncwQtYeehwTDHcvKTToom5cdvE",
  "key18": "3LMuStaBwMHtKhq11VnehcYYYJ6o2u5hDSvhKa4BeMSDezLdHD9PMw8ogGM72HBvR4jXPe1s7nu9SnN4v3U3JnvA",
  "key19": "2oHe9ZetxNDGNJjpoP1w5XnKd5LDWE5qxZ9gKPzDhF5mCcLf7Z3mCGRbMN7MVJBGYJVGfP5AT6W1ds2d9SuL3XtD",
  "key20": "4fzQpNqeZMDR2HYeiue2iLxhBsHMLMpoRqgEuLmcAXthndFySsuvSURa32B4qCjCQRLGhb1dDS43QZH3VmuLfufw",
  "key21": "2keFVPCjyiMHNkYRXFLPMbA13HxraijdbXCigZG7ByQrczYNpXMxqNzmEbUNCX3Bih3MicMcMknhKVF2LfqsahbJ",
  "key22": "4xYMJV2SpVU4oE1DpXbHk29zeYE6p1R8jy7wy2mfoAzMfJyGvNnjKJrDceqP9Fd1irNrwhphEjjhRB9XBfN28rWJ",
  "key23": "38RVbNyNiUvDjyLKSKgGUP6tY2ZMe9YGW9iVPARQgqixdNc3DKtsTv1yBqzPDfbdbnUDBd2wFAZwvHSNJhgtj8aw",
  "key24": "24j5qLMmtPJ2h2L7MRm3fAeHqTLmCw2iZq16Ui8Tpe4BXUKp3iNw8tH4s36v9godBtpWHfhYqCbyMELCAZ35YR4N",
  "key25": "4Y7uhyYXmHytxn1aZaCgUYQS5FPmQzdH36XJQbSRLUBYA7w1ixwTq7xc1YqsWixcrPvhYvF38LKYYKakx75TPmkD",
  "key26": "2rJUxEJBT4KJ2GoYerQZT9dhyBdNhkpU3grcUFTZuVa4vx7B2EbPTbh5sRPFTmU7D3enEQUajXk1hA37edWUcDcr",
  "key27": "4RgGaPetxqhzdjEyj3tGAjKQGXRQ17PxF3JMZRunprLMQZrhnXaT7jyCyy8fcPafS1CS9LTR16qwtqeLeGEVAz9J",
  "key28": "5zSnepKooCnFgA2hsq4bUaeAad2CZ1cuhE87fXv5L8D6Bqhp8fLXycM7WdyPrnaBXhbtHU3xidcpTNsP573T2qW8",
  "key29": "44WHS5WyybzqFF3v3iLmQocfYB7PNWr73rC2Dr8C8tbbG83QxDh94FmoceUuJj4uUTYoAsJKLJ8rmToXKUH7tGZP",
  "key30": "ZsDZcCMWSsidBErhF29cb27H7yKndiX6wBLtLaQJVXDP9Ycco5dqgXz4Z7STsfZt43ERrah8hpKFKAt8pw312MV",
  "key31": "3cxB6ZN69nfmSDrm4VNnAPLAKAWaUFA1s6hQVigaPgWxLVoj5sP3yGSMcByCgq62x5WBtjnskmJx1y558k6eTRuB",
  "key32": "5LUGKhgMFXqgMwpAHu4PZAUTJFARrWxyvRwsQW1CqYcWd94bHW6W159NXPdKjPea1UCT3YForoS2uvMCUMYbvTZ9",
  "key33": "4kfrR58r5VL4ABx9FB1APyYEPNZ88C9Mr7SztXaWEJDCVThzYDcAjUNhCvrBg34YgACJX3y9PHc6PDB88GNmoXHA",
  "key34": "UK3hjtPKuuhjHncSPW21jPCsxhWFaUk6araZQW5tXTRWJviPu82djzaqd4WQsVzHwAJCuk3RAbxzY2R5uUYCJR6",
  "key35": "4TbaSCCUo9butxPA9ydjyPKe8NsQM9jriUSCNAkaCbnT3gncLs2rNnJZV1LLCsXTwPzVdRV13pjQbCxNjKXyUKkn",
  "key36": "2Nn7rqc8hm7fQxEgurANsxEQ66iFdmgpZEPjBo9j9S4BTBi3FVpqiuVCwYA2kYY6yWJpW9TtKGMKwkwGjGeHe9yt",
  "key37": "3yPqn1UdqFE7iWmx2gozRvNaRcX5jk3oJhq7T7PbiaMLcYepoLgJmyLVL7NqwWcjqYKbnxsfaR4PrZ7sHtYBT7Y3",
  "key38": "BoT3ZvUnoseWXHeUa2trrHAT7iAg1xnLqjdQaAou12s3NL1WZTQ9vYFFMVwqikLjT84MojA37UJEw1YzedL4UtD",
  "key39": "5d46iyQi2D6Cd3ymuFtrYAq9CWm5jXtouUNiP3mgqZcK672sCaiqLEMd8xSbMfMp4f3K2ATTZoVLRoYP4KeRjh8P",
  "key40": "5Gzqwp9QC4ARSYYCKerGeX3TwYobxFKJnum1mtXG7QHtRViXeg7DUqZ9daNxQNB8R6dR7y7FZJYd8d1pWtMFLei3",
  "key41": "4PLniHDDTBiGTR6QcCV3nAvbiEcd9n6LypCvDtYLRbwwf26RTkbj48PSbmuj3atyh3iXx373wBpJXYFAXoYbwxwo",
  "key42": "2GUhzjUmyEXM6kMeSMWCZjKyh2XaSmqdeDvpMMmm6yzyPnAPXVNQUQXKWMMLx1CU8LnFbHnd72a4cdnAKxk4An19",
  "key43": "3VmxQz3WT4e3wPwSrqNJcLWNhfXajjuxrFYDZY6qAYtoMkR5kC4RF2bmkDsQQUrCBSPKD7MhXznU1W39JP9zryRu",
  "key44": "4XMRb1ug4BsoKojYKYBoTfvmRaNzABa65R7X9qcbR8CvFLqYgAyGGPMaPnYTZG57XpgtphRtQnF7qEtkDnDkesQ7",
  "key45": "36m3GbZeT6UVBvipR3d9TJ4SMGBwUJ8Tcw1NJW5M5X6GQFbFt7zFX95WaWjt1A9bznp7d97hSFJBR5f6p1LAQrbK",
  "key46": "XzcwZMhmmQ3fjcKAKWDrn6UwaRZFC8uvQDHiRzEpK3rh5SDN9RqCyJZJMegXtQEKQ7FPHLsiZW9bYUwD7ZaVeRy",
  "key47": "2fTt4nUwNzpSkXwBeM7Zo4LKzS7G5dXUqzxnhqso12fPeidt91cTQppqdKT8nocUguwKc8xTC6aLdFijmYbFfmJs",
  "key48": "2usLwK3F7csqGXpucW1KJyBDRpPDKoUcndhj2DoTYDbvo4orgtVejBdMqYYrSwRiYjWXC5cN4TRvJVBqYzEfqefA",
  "key49": "YRdmcqVGzJv3aKNrDCUqnxP7umQeLsdCK25i4ADADLX2wzCfNBcckzN9KSuexKim7A1mW1AVnBL1fcpwrXe2G6x"
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
