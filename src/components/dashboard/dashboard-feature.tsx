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
    "4fgJJmTwfbQRzSdk7eyWZEYpqjLJGNXmk4jo9JnpQF5y3QT9EHMifBWSjZJizMuTgmtw1W3n58DQS2tDzctJkVZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57DgyqVR3q61et2WfiWEhDbhyhyLopffatJMDYqqbKU5hZJtP7pQQiZtaKS3Xg2uHebBu7FEgXuhoBWVhnWYfWdB",
  "key1": "2QbLmsy6dnvTZ59CGjh1Cb7Kug51Aac7t5DsXCFi3jL1PuiyMEC1xPFJQkgYD85EJSPrACsuQBhFjDgnBnfRfX6U",
  "key2": "3dBWuE8zc33wUPVkUzBWjQguK9NBDwJ6a1dLm5guC1W5rsTbpgf9c181rVofz5ateqawrxKA666R96hdpbKmdtxF",
  "key3": "5zPjj2zqpWQcGmf3v9LCNhGe9uepXizC6dsy2NTMizmxSEQBpAqcX75U69ty4LdPgtDrjji6Gh6FbH3LmaUUwPyt",
  "key4": "4mPrPy68FJMmxzyogDQ6bRgLSc2MfFs7KbCHXYum8kFYwbbvqtwawgYMzdFJw58hrmnfiUpeupsHqSTFoUgJZcv4",
  "key5": "5z7AtuaaLQ5ksdrvhEAJBbAXev7tDAB1FzeLFinChWFUvAqXLhZjCzZqPgwc44TwWSC5zVyAWAvSZJV8LjQr6Tsd",
  "key6": "2vi3nEjyAgMcDMYbaNAQgUskJ97Vw1qd9je5wgiUoSYBFVmA5ztSTH19Utz6nXTndJeMgsxk8xhKED5B6n9qhvSd",
  "key7": "4uPtJTjiiXjFvVPSs9GgCd9WT5pzdvnoDdPxHNLR4FDuwKdRKctRWRg2CR3NePyni4co96EC1s25ycbaAgSUTzUM",
  "key8": "3sLqRPPiVFxZfTtNtyW2ad1yEF4J3zKtDYMFkuKho9vLEjM4MS5dTWUe8Q2yFAd2PzbhgvKkS11zj5iu5RSub6Pk",
  "key9": "55hjiUUnydW8CRNPdTJGGK3BkmN1px9Z8HuyFn2TU3HmiPNXvpNVQsQi8ynfU7iZisk9VnxC7sxSftoPE4gncqHZ",
  "key10": "bXBW82nTDvyYowVncnFxPmpBZ4srbbtkrp5pMgmbVTCcXdXzLGTAFZnvvwnS1gP1uBM6knk5iJRHhLybDJU8BR1",
  "key11": "7qEdgsVzMphC8cpc1yEfTbwKHmjysqGLgiemnkgSRVwMtF2ZvVE44wRjSKos41tUF9899RDjpuKfWMfmHHEMBwZ",
  "key12": "5AmYfJ3mY3LZvj71BpryDc6YegepDharzbgw6ofsbWjqnQsex6XWoDN49f6ats2WdBGmPaXHFA23sZzqM1rQXFey",
  "key13": "2B84Nfi1cngfqtvety1tG8xAuphRTyNx3r2GjgaMxy64jaVGfsQMkNUvkHKwfCfatcYn4K5VZTZ4R6zF9S8uB16j",
  "key14": "5X1tpNG3WoHfhLACyjfwyZdLvBktvZNbmL2tdktpWt2BKvknRhZs9qY42UszCNFSEFXg5BZZ1KtKxFzQFY2KN29h",
  "key15": "2Zk2mukB5zoaoUduodHmseK5ieg3ntWH2kNvPH7t11LLM4XPkyXbeHtzbjdaPkcT2TdBaKYvu2cb5QPTCSRC3iL",
  "key16": "4pUEqAgqVrHQTrtBcT3gLhM6jsGqtuwZgb5VZSQcaMY7XQJUa9s6h3cvo7ZxBLWNyHCQsHZ3LBCAQtRyFe2dsoCS",
  "key17": "4NL7pN8MHZvF1jPbWXEwpjCoFXKZfxxpvFTgukRyQZG9f3U2H5P3kUXgsBjpRt6RupxkktUZvaXGE5yYeL6q88ai",
  "key18": "4b9qBbMQxbEshFwsAS19PwpcUYZYWd9cJhBc9pdYJ8N427fpVoDgyuRWyYXsiHRypcw2RWJsPoLegwanyFhcoa5o",
  "key19": "yDNLhNivTQnLWgcoQWbf7qQLxppTMmquS9ZowfdxFtRoZTznumnDcs5aySZkUUVzZfvhW9F9Lhui7Q8GNbHkRE8",
  "key20": "5y2AP8fUQ7FgeV5jDbzLNtwURYdstTd66X1T7cAxdqCvUtJHiuS98EHxZv2SXgVKYEiR2oWJTNS3Veo3qPfs4h5G",
  "key21": "5nrgiCU4RXCLcQeGqjFGq2SXrR2mNKw3jCs69XPn5b5EYgdHG5rFfJnfVTCsCJe581FRgXMEzW1unYAkAKQ7vLNn",
  "key22": "4jUvGVEAuuVyGnHexEayWonBvM7iKfyVjbpFnYV3th2wPuCoM7aRauuhSok18aPuc2K4kmBxpYcvgUKQMPSGArqR",
  "key23": "5tCNhMYpEaQPrmtUJDGbYx7ZCjP65dXWsiJgPygtUW18SrwCw86bAo2W4AyjTf2WTVvGQwe3YusEgH2ov1Rxy6nN",
  "key24": "i9m1JL7yrVffwtNTUg8xVK3NRpPtwrQniDhmoreYDP4PrQvacHuydoLAYktFDg6ZBKLfe3kXpEot52vw8iGv42z",
  "key25": "BzCfQUE4vA3ZD9P7bMAe9JJ37YGShcbaGv8YyoM4DKFS3d7UzfzJvy4vyY6YmfCcyKBtm6LmWreCXTZaoXs8jhu",
  "key26": "B2veAg7Jp4c1ehBNc4tQL7RPWYMPrf5nKyGxB7GtRVNXLTXk7tnmsF2SeviaKaik8UaozgDuEADnk74JbarRHS3",
  "key27": "5SoSC2hwyXCjK1EBRgthQ1BeCQBEAxV2YMAiw6Hbi7Y9tbDkRfhFmw173wTc3S3gFPJ7vJMktt6YyPeEn7KQDA5h",
  "key28": "2wWVTBgfXTtVyTXXJNEEPqtuFUGTyW6WFRWruf7kh8XjsvsjQwpMGMmewpouBuQEqB1J9rG72CZrF2Ese8ZQL6t3",
  "key29": "2iufsen8skrvbYPSEZ8LnDbLYFaEkt37pdg22zYDztGJfypcZdNcUooYTNkpzudo1r4cY41odqij1phRGzQa6xyp",
  "key30": "3J17Rvp9mTUMLhg5hx48mDVPybuViAACLBiZF6oesbePT2TQ4HguT19rnXAdFAmWcBNuEEpf5NiGYcbmDq75JWHD",
  "key31": "2sRXLMxMUH8rmQkWFnfEQ5B65x88sv8WAQRLHnyPMUnizJsq98ToLCqTo7f6iUTx3CBsGwRewh69uHWopCzW7SLs",
  "key32": "3KuKXUzuNj8uRSZgEXmHFjnvVFr38VwkZ8KPquv5UKUw5X7Dp34q2moLDscXk3W2pHffgnR4ix5hganq5aJjhAxn",
  "key33": "2rgKe8BuKyLWUqnEtvv8vYoCrocGso3eYoay7yDvd4w2uCUuiJqpjsLNtGCexgjAoebzihEbSZ421r4g4a88ZyRh",
  "key34": "3KuXYXb6Tzu8wjLY6sxGsJs4u1YZPmFKDbzee6Ao2WSuH6WBrrTxkYv9rekK8zK8MfqmGowy3kcsRPMyc76KFx4q",
  "key35": "21sXtaL3GBJJihC9YHAR8qYx4kfG2um8uYiLYzfiMPrRVf6arHcUnVne8KWE6eQQDArVDkCgcf2MyBTiV8sZrbjt",
  "key36": "2wND5v3wd1zPTW3frn1bR8wEWfW3UUNEMcFohk2fxBRjtF6TfXgLbiJCdjviPRPmosCyrDFMwHwDKxQ4W6refuoR",
  "key37": "5Fq6SSwS2b64SpZXFFAsLnBwpPQH1tJPYCGzGPz7Wq9smodaUUzbbaUpgUhX6VeYyTiVEdjPnGqCq3YitBv3pkRp",
  "key38": "3uu1yxy4NJQ99MFCBRrfVcBuGuvs3TTD5mRGnZfVjgFgbhbWmGznMoxqgnJQjVwPYrC5gJq7QMdeWqbiEDQrkz7q",
  "key39": "4LAbg7zKia8zjdjqp7gTcVqxRNYqezYVm4Q9QEj3CWEJRV87CZTcPXicBVnYBMKr5ksVw5oVopMpbax2NswkrE2a"
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
