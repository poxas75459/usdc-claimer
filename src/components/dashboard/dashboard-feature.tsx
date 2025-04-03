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
    "31QfgPiZL2bnjr37q78GVziBYC1kxkPU3py7MRFRH1WKJMTWEPa5akXyj5L278AJdzWEdPsV35S7soSNNAxhnuYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26JcFFZRXZNVBqcbLpy3wsG8HytoSo6mjzSS4xDKieDBKUgReDwueYwgu8MvYtu53rwuQUmHLmoF769kqATemRzr",
  "key1": "CnRpmfo8KapHkLJ7Kk3yoWtfb3AoVPimjTK4bpC8dgEbXT12fT9nchgnnoADbURqmknDNaxd7nV7NBVpbD1ZMBG",
  "key2": "AfJGfHDvyVfQJLkxw8hZw1DjfMWbiBpU4Eu17UuMJMmDeNN3hegP4eDSZXnnpcDkKmfj4Y9mjas2Wc9WWmLoHjY",
  "key3": "4CLkaACXMGMnGqYjYGYzeMSx7JRh7aBkYUmyjYy3xSv5xbfCkVZcNwH69RNzdB7rEPoLbqZVb9NHYj5XmyMW8NhY",
  "key4": "35tXrdFAtxVQqaV2SHSpWJmacUnmHUcaNysjgkk96r1offSoQ5dMAqS1KRWpsi8zreryfyrTNYnXGdzV24P2MHYb",
  "key5": "gDy6qhKnXbeEk336cJVnd8UKp7P5KUFbgXAvovMUv6pmFU1AeKgGjryFdiFz81GCygqdjcG1oMVarFMicSJCzvB",
  "key6": "3hJM8cTudUG1vbHQvoq6RYK49ow1NQg3Z3Q1FG85p1gbLchLEtCB9R2ECNKggjk8cMDxNQSY1RmWTq8uaGbFH6q",
  "key7": "2jUBXXh7ouchQKAM67NPTVawSNqDdv3ZCfU9btLsjo1hvgynapZoatFVVQHiVwUFTuZzPkuYqRPgk7LVMgRtT2qL",
  "key8": "2xjpkQa5WomEZ6jqoHKJ6qgS2vXQsg8eWCkzPznaui56NHvEUdPi6H2vFiWvZZrGXp1KMixvnroLg5CRDpvfsoVY",
  "key9": "Vf1Eg1HHNpXo3LckSS25NTeUeqRzKdozYY3bCbCw9oQS4C291H7b8HWSKxYSGNZBD3XSg3i8GPjX8xxwT3jNTDW",
  "key10": "eN8PiqLqLnR4wFNUE5EmNJRbHdc9r1euTtYcrriTBppojkDVDvaBPe1ZzBwpn4dEFE2C3tUKbhEmvGYnBeDEEYr",
  "key11": "4nPZFxukDjsEVk6ocRByNj5AjmQuw8i4nxuDVYHYi1DHybGcg9mcyhRptru7K26vDKQJHWc9rCTpm8ZCfBZbBhQZ",
  "key12": "5xwE6eNXPbnwWdZzgKw3jEetzBnXsGpJ8CV7pNeCFcGe9PaxHknyky2W2hJM7ZCMn8KhsEke57uNhoYGZWcJTiSX",
  "key13": "CnbHWbbNWNqCutCR6cdDpAoV4JLZXh1BN4vqTNByX61r1ffEqD4Sk2vyDoEs4egm1T6PE5y7AHwnDukDwWYGs86",
  "key14": "65oRoLUmhFMGDYZhffUEYXJ3SMDMrEiDvPwMPSzi69pdsKnuzzwSziRXiurQB5UnGtpiQy6oLxq4JLCMVgGWY8Rk",
  "key15": "2vi25Y8KjdvYJvf1VsqGSrKnLQwqV2Sjd1N2deZwEEFGXcycNrVB43NyguMcjUP3AohTpn7W1TJsTU52UXcegQeA",
  "key16": "4CSUM7Ak9A7ds1mJ7uLZRmZZforT26yBshqrJBwoGZ1Sf5th2V8P8Fcsw8ESCEp9Czv5ZvsC5dgQ6gTTrv5AckSb",
  "key17": "5asiZgV2wFFqwtJ7HfBDy2oXs2WGCX847BsVikxsfsRbiWSigeXhDbSrsko9X4TS9sTjtbnqNysSqTorpoZZpB3q",
  "key18": "2EaNCi5r9rrfVrL7GJ5osPabMSxQthLANSp9SgZT6fnTzwdduwCibvH1PMMs1atqjAxfUMoPi76RcvnF59gLsZHQ",
  "key19": "2DjLBDHmeP9cqkC5ZB9JvoX8uegiYKYMkA7tkNs4wpLhZLJFNtkACR863vXPWL9TZmQhowvEpTWffgRbVVLaGd6h",
  "key20": "2SQ8h4MVGhJbvueNv2HtNCucusLut2eA8mm9sR3u6W6vu7A8kBaUA2FxxN6fTSBG8VV8HruTmwrkMHiG6sEB6jiT",
  "key21": "wkWt17BNSX2Jw1v1jDE1ALVrCmuT3gA7hSYivtZzbkKzNKKpc5c4Dqf8QUtAzeUt521vQ3s7PRLtvEm2RCwt4pG",
  "key22": "5mcZ8JMxUm84iP9g9NxdfZhR9zEosSKTeUAzuEcX9BgSvL58qEFecqm2vGaTpSTjQQWAnHpyjSmiVKXwSocRE8a9",
  "key23": "27Pijfv5AHMkvN9b6L683hZKYWRFfspkYPwYigMYfoZoqnJ9Yjd1ar7C6v9QvZVCqRA6McFYeVMc3iuCrX7x4RPJ",
  "key24": "xY4ccFUNk7zvv2eCRBvwQrRfsX4kT55XzRAUZvjEu1Y1FndCXqPULCyDxmFXKgAqgxL74jfBVBJyxTDEq3sFM2H",
  "key25": "2p1axfgaJHTuZUAf8VvdZ3U7JkP2o2ySeVjJiYDW4qbW5Jp7ARVMcgN4DLtpm3QfJWmo4JREoLgSW4jkSgijhoyY",
  "key26": "5MDUHstAur6jVG4AnJ354KBDiZRrurCENEHTypHJ3TQtYHre922jELdhpMYqFKVUJodGV2v7PZMtpYnGQA4mTEPa",
  "key27": "2WaWFhv6cUuGGKar6jLQaGvMn4RbzVY89Zzz2okffLER2XXdeZaDbGLqTpBiF3HmNLCJQEbdvuuLy2p3RxKBD7ym",
  "key28": "2Q5GQfem4yKB1E6tZqiu2X56AV8WqTeB2oasC5aGAbpBCe6pA5tr5uNurWmoesnoZwUrbfU5H62k2HT5Bn5pGVr2",
  "key29": "5PhD6Jn1wyJ6mYt6tDv2sNd2ycr5uJYPLckTDoAPyqP2qmyiWx7nrBCuoNXQrzhUV9HSkxxQoQYLiEhjCjgXB4W1",
  "key30": "bkoyrX5fDBWBKNJnV1wSpVLrSfA2LpL3g7mn3MBLupeTgc4uFozrgsx1fmeKQTxucVy5nZYSYazPxsDj3vbjYvS",
  "key31": "3sMc4xBMoi9HSJsyxbgd3mBQP94gEERCXZURworNifEPdGj75JiUL9d5S5HSupCpXLjesvdfMsD1zhD6qRqkDczG"
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
