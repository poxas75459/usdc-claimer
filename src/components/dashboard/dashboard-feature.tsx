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
    "4hDocVtG7Vzed5p6xXGbgwp879uunbALf6ghC3YvfezXBaj1nMA2LATCGZ1gJrH6cE63GhmPtR6UjRLJcPXrjf7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hpCyFS3T48Frf5iVhryJZBniK9isJZnQYndb868Pem5V99ddE65Ci3o77WUQVFhEEJGu5VkWTiVpvSsg2GEukao",
  "key1": "3suX4Rg1eGbfcu2vQ2jFkJGDVb2ESB8Xpbj6YdntzhgPNHaNNSVfLPp77pKM6qic9uQ19fJ3H3KfHDWjSZWt1eAA",
  "key2": "5kwvJNATUdQhTvHrzpP17vQAPzZr8ZKeKrh2qcv8nqFtJiFhQQrCQ2PhkjHTxWtJtxzbtvR64RUuXaUxoj3Q7m6y",
  "key3": "4JANGpaPisYAp2qA1arEhgXept4BGoL9EpJMhgLeoZoDfnaZ5867zkbcf826k5dRyAMSyMuMH6xmUvy1FKB96e7d",
  "key4": "3tH2K5yeXMa3yZ3v6sGMCq7Hn8xipoPnfpyKJXyRexFwVuekezo94bCYBzpuU8QLzAWMuGaMrMaqXDNJ1hPXTd86",
  "key5": "3LW2JbLwr9XifapFjinuNYXM6esryCcbZFFcujRegfkbDg6Dgp3HirimGvEFXnTBQFnkYiiWoMCowLvLa3b8GpvH",
  "key6": "5ExxcCH1RQKHQFca1N3w4ETekQdYFJUvU8xwrsqt2d56j4WbpVRjHyU5z8K54o9UAH8xvyqQA81f6CbeNnUs7oAi",
  "key7": "2aagBbYrcVVz5Jt29XsaGX5rDKMkNDq4whCLobDZq5f8zhLeMVtUBTGsLK8ekYmQUezeM2aov7u2zUAmbKBmsVHk",
  "key8": "kwmWTEybYqmoSZ3J6YgMQ74kozGDeFgPZVYr435GQdfX26oyMWpvszoT19wNoiqBm7JCdgNmM3nK8cMZTybWX8A",
  "key9": "2VGamVzB7qYrzbsD96xA7FpNAu7FhkMQUZetK6kiitRKZsRcpTNHiPvxHEVs1CDcftE18dGqUD68TmovAijhxCQg",
  "key10": "4vaqGEb4w8n3P8uRcZecVKPaDUh2S566KM9cibuKfqK8HS219CJ2wjVWkYJ1Q9kFphKpETCanJ3R2MzP5ppVPy4Z",
  "key11": "2CcsgAvUNTn6kumV6PmVZkYBQ26t1NuQKuwZXRABYTyL8yUbVGDk61UzLRM2ueRLMrjn9q2PxEc47UqQdgExzXjv",
  "key12": "5KL7fWRDMkuaSHrwmfRTpibvkbg5mMqY32Wc2m2AepAMmrPBtR4ADp4ZN9yB8y51AsjYAmyd5t4MfKmYNz2P9Xq4",
  "key13": "3rKmuJtxq4HJc4EtQyija22JBKpe7rdbpQRcmjZCuJPDQezzgEmNvo5WyctYPLsLp6bDogqgTThta8okYrosPzhn",
  "key14": "4iTPXEpxJHu3ku5VUZuE7q6isbDKcz7vAgJ7R7siuua8puQRos9vzovBpJ9DS1or4XUUn5VRTHwADFZ1nyb2e8pJ",
  "key15": "XGPeXt484kKaStLuJb1RposiBS1R4477ceDqsA1CTJ77c5NCpFe3eN4gDHRh4L1ied6ySUKdBD38k3yNtA2ecQ7",
  "key16": "26WtJrY3k9VBAY4QnD744XMMSMg8EKcwvScoJ7fi1dqPxgqd8729iPhT8AYU5qUiAfzUMibRTn9CfHnSVMLLYAh9",
  "key17": "57piAs1MJi9GySYneAHLTnbsBX1HPzMgiczmr9RiCeEi3bU6Vjd3dHCjotEcc1qJ4swYv8KDW7yw842yrENYt3Jt",
  "key18": "4U9zy1rXeLjZAqEZJETwnpJwWD6cuSU6Dpaw4EjEnyUcSeYz3o9qfrzs7tSQUW7WPeMUVaFCiNTC4n9PaqxbmKa5",
  "key19": "4jcMbMn7Z1MhCS6dE46imkgfFVBTQmKGDXCxKowDodoCkw9cVCWhRiWPNePbBordNEDgPVPUBM2wrMW945pVyso6",
  "key20": "SH8EMezfjsGDTM8kGqtKfuGQ8wtEdWY7K4xAkgQSuDXgWUY2t2RHyia8PcH8DZ5WyrNPa5jBegNdrCikPyZVxc2",
  "key21": "2cU68W5QWE4nDgG8DiQsskJEKUw2a5g2AAyto1jKYWkEgQCqCixAxNwJC67vEozqHz5fPJ9pME7DQti8o88xNb87",
  "key22": "4s8NWcJBdtGp6KNgChmFsaLM2ftJak8ezTwHrjhw9s4CTLuRtVGGPAroZCPwVcLKVgj6jdYULSutAUujgewXornb",
  "key23": "2k795QFzFg1nCPxAxdaJE5QJ451SbRwNdkTn5bFfha1XrsDKUKdAYbVwSpsGhehYDWAtpVPZ9mNpmsU3TxzbhjSU",
  "key24": "4u84d5WYcx97L18stokWJta8HGYGQhtF5SGFjcWrDSmtFR2zd7qAtU47WitDZfgRt6Rw1rcmtgvHBZUDJwd45Dxn",
  "key25": "672FsBeAkSbTCruVmUaJ6ReUauj8mgR98ZX3cmsoG84EhH6PsbArs5RRyL58vxYiaYK1caFjAmSVdaH4EFr7C27G",
  "key26": "3bpPaDv7uXrx7X3HJRsiDZjLUEZibRpfnpDYiELzDJPm1syJmZTes7LSaTSc5ZfLUsPFwFtD7pp1M56bD9bmjkrg",
  "key27": "3DSm1BSXhZiDApk8mLZuXMxBoXBB6ZWdg8gVxWRLDE8QEY5rJYv5R4JJyhR9b7x1ZdXHDC724yTYP3jGaF6nTUX5",
  "key28": "ga4svyPGYrUKwdpFE9oT9F5S6Eo7YHgpv78UbYiaSru3qbvwXmtWiKdZWTX8syYpxUWy8LqYCnK9BLDz3McbMEL",
  "key29": "4Fk5YLSv3Ugg55TcGKJvra5T7Z7rc9P5CK7jiuuanwbr6HAhAi1r9BgkZrcCWc6jomZ4d1uKHsKRuRDM7tjaANCp",
  "key30": "5woitLYE5cvGa6qDbxeHZZ9ZXHGtTrU6b9Ccp65TghyDBpQoKHvAp17FzSeH1fLfXH6zyMbAv4hVPM9E5rVQmzJj",
  "key31": "3J5BWEiKuHPiFgrdCsZdDo2zhd74mrjQnrCNKzojJRE1XtnMMwN3hHdDRqYFhf164xHYFiW6m2XMBoy8TmJrQx2G",
  "key32": "m31AvB5GtUiKq1GXQtXqxegYX3jAnTivfiWoPvyoKifKXN9ULLX1e89wBCCE3BwDHBqJ2NpgN851xCQRVVaDPBb",
  "key33": "59bESKDxzE4GBc4YCFPro6WGqNepdPQCg4X32TK9BcCn9giKGCpUgGRCQJ8NYZ9iwRqNHcvZ3WWZ8zsDzzg8HNYP",
  "key34": "2Vv6QmwfaCx7XAybdc5ys1fRFtzeSgiBrpqsGuGptEkpgDgxqRCfDrhb8Vh1upzsYiJxMyuz9WXuH4G2GorKExpJ",
  "key35": "3RE2G4sRTBDy2yEHyubYVD9tvgME6QxT2VxqqUjTxN591F3wXkh2fA9mAvgXf5p4j39ZBWDfN4F5GxPi5ocMQwbm",
  "key36": "5KQrchCD5LPFMg3V4iJ4ZuPZz7cpghFfsy9efsiBMYKZGJvGnQmioLEg5mEk7eZJbZXySpc4KtrDpSYcMpp6SG9V",
  "key37": "537iNsq4Pmgu8yLKPa77VX5rVJEnUU4f9PSPu97SUFXSjK6mVHGGiGkgaVWdTkg8zooj49WpQ1vN8fPzFzMQjhrX",
  "key38": "5RsmArHEv89KUfUqVBoSrYbqbZXwGdnzp6Wk174nugvxUwfeFz4CzKmjcnfoz5GbbdoLkTJPPMeppjtZSbojcwsr",
  "key39": "5vUinwaSwHZMKMFBtKh9RdCR3Ek4Fmz6vi8pJDYBiz6A1wiJMVSpPtkcAP9sSonDtTM2RdhkLCdqruxabhJyGKGa"
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
