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
    "4VZ9bch9Fm9M7fKNxW8LPcH8CJFA63d1xLpMFFyKHytYfjp3ZzSFXK3odj9QJpLWGBswSbTRhbT9wGYDxstkfjBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n1L1RNnbH7vFc35x4CgShDcEHfyvPcwuNnKq3REtEXes76bX6b7pquYPV3bvQshnazv7codgJ1bDYnJwc2TmVJx",
  "key1": "4eukvhTcw2USqSMkJy4ZUKZ346uus8qGpyDDQF2QXbWzCrnb16JsdzX159FPwbRgWRirmGPWMku6yEFPnhuGkABC",
  "key2": "3HpKAZtbT28bBeGCoCc4Mr5TPYJrtHTePuDJ3dntKJZkQzCKJ4YgaNzBiUgwiebxA2zfQZdmRqnwYJ22nvYTuZdV",
  "key3": "4iHoMvZSRfhSXLcDZGDxrHaDKwP72VmgjGbtDAGLsw9i82iBSC4yUotomS19abudAVuEb1gppYSG3RVoKh7hffN7",
  "key4": "4fMxcMYMSxMrEQRrJjtxWTyUywZqkBWrUh8S1fLnuCRRV3LwMWGwQ1cMsVh9m3NMpDrVuZrZpMAtm5ZNK8TB3xwn",
  "key5": "5qDBtQdNAuiempQokGrNPHWwTT3dQiS1QotVc8vbkVAEA8tQAP6YezbPWuxPF5rFfQiZEDCS52ras4tC2o41JMYq",
  "key6": "64yaDQcPckENwLrPMpvgbaM9bqD4JtN5WitaykHmVeGPfMBdtP5Kr3EfyLwXETBAjyyxrwExsHnTvsMeP6smQRp5",
  "key7": "3FSYEy8nBW4HMJtbifrUYz58Cu1GMWwNyxbZYL4PVXBv1H5yz88eNRC3qVTyW5LFKzpye6G41AyFiWo5o5Mr54Sr",
  "key8": "4LWAptrQhsP7cPp5TjqYdBfg5p9NMN1MoBMLryc6xKzEKktLYkkVGR6zimFkZHKZ489voRh1mRm6UEoX6kRtFYEG",
  "key9": "55ttWZnwNqnLLpFLxpSFrL894pxDaKdYGtEsBzDEsmiBpBosNgL9krtKKr7wb7QbXqoYDQZNLZrikLUkRxGJsT4h",
  "key10": "jdsdsw7FwA6L6QXkuxvbpuTFyPD8MARJjpe9nE1Y7AAZLi1yRCwavAcicnJshD4QwhMXoCMTqAFAiHUsKV5ChEK",
  "key11": "2Wk6cxYPQrrX8ckdRamiXvMFGNHRPye9rdU2ttQUmTZXZe9HUa3Fvr4fxSKNwTFdLHMS97PgTNQ2iTwYMYveBcA4",
  "key12": "4eb5418XN21SEKKuTiizLMtaUNd1MnRhFzXR8kLZZMyg2Q975buYwme3FrqxjNRTXRKxjXuxbLq8Xiq1WJBgQc6p",
  "key13": "Ej1G9M6Eoq5BVoWCVWJLENADGQMXkNK5RV7dM83Tb7LttFcrY4brT5DxJ2a3GBJ3zxBLSHpX36hhTp5u662GviX",
  "key14": "5va5L8Uf9Gd8ZQc51Pq2XQ456GTxiKJKWg5mugysY6CXyMPbYScS72Bo43rUA672QuCR6atsjdGm3syivM9EGgAP",
  "key15": "2q72uXSJ4SBmUuBWGwc8bV7rrZE1AWKrAFN1ZBxmZXYg2pgBb6UXmiToDLNscfvSa84R3XoKJFar6u7m53MjejyJ",
  "key16": "3ePnLgFQzxa81J6DtiSTMBE8fxEeoU7uEVWNFu9Zn4CnXL6SXjxfcBQ67D9ZUDz8HAu6DxxGXGdn9tL4dgCNSFfL",
  "key17": "5Z13zy1gwsoBwQuvKsqVRMTuZsofiK7UrotD6tCh2oZKBT1LZvwTKG1PZEcHDhbVbBLECDZ8WTx7j1Zb7G9qJnAN",
  "key18": "5GcjWR4ZrMgUwjEvRBsa329AnvokVqNgj7DwnJe7HEyN2cQYW2S2wU9fdRAUy69Z6R4q9JrxHuEGFwgBuyAX9ebG",
  "key19": "2CdXB9xLDcL4TbrDQPTS27kQ57Yu7jVWtyk5MfwtFbbKF3iSRbe4edEvNPiKyWbTMQjiF4haMB115uvoxrAqkLmn",
  "key20": "55PwXMibb9Z3qwUPX5WgJtP1w4gvQkePKLSvhpT6B7GT2bAvhwmyj1Rsy8DBMENpS57wvdJRH483oMYeyJcm6Xnt",
  "key21": "5XNMhGsDD2ewEPNBXPypoY9m9EWprFmabGG7WmKL8fJSUGy7cLUJyTvZkFtqCLigvPysEmFYJ1FnCj8xBDTa697V",
  "key22": "5tn8hCuzHsWynAQCMwP4V4ZavnzqnATDy2mzEFJuy6KARFRZavrZ58FWmpwHrAWxgCpfrNrRmtFz8Zw3F1455JFq",
  "key23": "4Y6BCtvrPwVkUu8zgRwLupqsA6F4zVcNsftKiaM4zG4wV29mrpcfguLSSy21rMqhGyBBjeUE47r73AJygnsSJzat",
  "key24": "5zJQnVaSmZJjPmRfgB7rUyifYVQ5J7MmsovEnBc1U5ZVSaHMh4x6ozvFJ6ycPFweYDcKD1qKhcLJ5UY3Bx8MUvtb",
  "key25": "4WKNZDo7qrd9EhLwZGAbSmBea6WYBQBeZZgc6B25GCGbqZeTsVdEVaLAtpKPrnZiEWVdkshM2JDacadQvX4sjc1V",
  "key26": "57AxheBnBNUPBknBskNDZs8jN1S5NhQTPQrEZ7U7GgDsTvzeowdDQQnkjMy7tKaf3pubkZaxvu6rYsdWJjsjY8qY",
  "key27": "2t4anDbNfxhHyVs6Fon9mS89iebF51k7AUtehiJcV2jREsMc8ww1W5kyTDye3VQKwo8zHc1bKQP4iVbhoM9jhkz1",
  "key28": "5T1UvybD2Qwb63qv9ve3WupFANDk9m8cgGbmiiBFVKU4SjGwYHjcVkQ4UGHKTRa56D1MwPasEWf6petHtbvEMEPm",
  "key29": "5nWwDq3SmsyJopRgSYryhAx3ioZkcUyR6yWC9BmGKjwqtaqNkK5JAiXJkRrV3TA5V55wiegDUaxexo6VQAv7jues",
  "key30": "24c54JzdrK5Gecn3HxLgNGxYEHokU8GyLUNxm1bMYf1fKq5Gc59DKHbx2ZhUN44fXMJhJnUcLw6LA5XV38zYmKLY",
  "key31": "4Nz33TEyWDT1F1BbULkHfCtBsuZnW95ESiYCJciqTUHcuuexwbebF211PHdr4FPji5ebmtjUgJXxyBczgsfFfxJb",
  "key32": "391PNYfhEsNJuBGZM9TcyzanRwE7xfvy89PDrYeh3YE5NsDEPPQrbtj324e7PmJXuifJM8JB6nu4BfEmURDa2GLf",
  "key33": "7g3sMjnqSZeQXfFqrmZom5895tdzZYds2WLhx7zMTD2tdJowLnQKyN9auUrzPqL9sxaJ7EK2wUtqrkwBfBvwUsy"
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
