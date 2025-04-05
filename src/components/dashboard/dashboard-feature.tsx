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
    "3BkRiBWLnGgPsRB6LjptCrLe4H2MeghRRRfMdQZuyDbwvCedQ3yFVhefkJxoq5qVFTfrTL9fztQnMqzw6TNec2MC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CmPz6TM6whnnaxZH8scp8yKFBRYDYuKKAdfYgdKYMBt6EKAdtmbEsPrPBLvWKNqVWYhKFWUy74y9sNwTcxYAzTP",
  "key1": "2PkGnc2i7KMKLehdhKNtJtscYQ4vUEVhqWPAvJYJSFzKx7itrruhSiWpnG1NRvcXo1TAtK5jPu6sBgszfYE3aydi",
  "key2": "5j4bxre3fcryVHh8JiDrUkm7VACf5dSq6tAiEUzzNgrwQZiw16TtdwdJ2EqsmEhBUC3TKwiMZ8xm6hVfTAqvKpyy",
  "key3": "536UHZDS2SReUMN5S3KF21Z4S5aNi3SwMrzFavF8Yg69VGMRxiL4PFBLeXJhdwMSGJvQxHXDX6tCK8yCXEAQuQZi",
  "key4": "zR8eo37XNNSXuW1nvhzTziFxzcR84HDYNm58u5qf9rtzenVnvJHVABGYnvoWJbcwmSjGKKeZzC9Xy5UbP1vCC7L",
  "key5": "2Krk1vtyEXGG1Bj3DRwExRL3CYdMQrZMxDHwFdWJMaH4TjzRv24JkLeX1HZ8JfZgVnn7dfWZzGpJUGrqGCNZmKxZ",
  "key6": "nPtW66BFc1H77km1spMLdCMq6tpeu5Rj2vwnzUnsgjk7eamYfisAauDG4mAGKmEHAASi9QvKpFBcjWxamNC2B6r",
  "key7": "3qZ3PW5kKCU1s1gi5jbktUj1f5qrTRScF6ePAckoqEBy7YXdLGQqbP4RBBBkzKMaoDSU8zu9k32QgnCiMCHAZv2J",
  "key8": "5uAE8mx1pyaM2iNgcGVtscepHivpuNbs3kEnvRt3yoPBk4R1cTHVsmodd133vyGZraqeFQrb7GMUzu1SCVL5UxGr",
  "key9": "5F5EA6JSKqiUq8Mf9xNJMZNEh1TmcmcK83LZYta8BgUae3hc3Uj7dCrMrzteVNbe6uoSQQjYDYhxxkPmV6weeAUJ",
  "key10": "CH3fxGutRCqdWXD292dq98vPjBZkJDVsuLrvoGvpZT49RDBb1zvcArHgkEm4KtnU4inAVtDhvQCczKem33SFHuy",
  "key11": "5HHCcWndp8aNbpVdHefPjbmw5xAmkeCfCEoj5jYc1eJv1byqAz82SDUR22ktbLMaL9u6cF7MoorEu5VB1ASbj8pM",
  "key12": "5gAh1V1BLMfEW7VgQLvBs93j5LtX4FXUro2SFYvs6rYnpd7ZyDNRX3L35RUzM3UfWTkwXcxj4R67WkNZE4oQHwDc",
  "key13": "37V7Ve4M8qpBeJmqBAGdM5AH8jTcpcbLn8P4Qv5JxZTXyp5ViivkKzs7FXzWHeDeJEapDhzdLJXJzVgFr5hcL8h5",
  "key14": "384tfkjMgowHE8w2SQXYfDU8ZisK4AQKWZhbpGhnyZEu6GqxaQFc2o5HawNGUXcTkA1ucSpHzxvGLRau43cDcLgV",
  "key15": "56qFcHhnEeFm9inCVVpJKw9EEcFBk2oWntNN3MjcSgD81U345NrpouV5tCRVGTbqVpmvZwkoDmPWpURqmHUXVxHW",
  "key16": "3E12pjP4uk22CcHyA4XDSnopZ1bPMYNmPFETSN6stU8aZaVY8gfdVNbfiMpohULQi5VurZQGXP8MHmsvG1sFmhc6",
  "key17": "iv7pvKDjJJXzTLYnps5sqjmCEFDsVyRK1wQtPDCTLjGmWUSPBvptERMTgA7Ut6P4Dq9yLanWaBy53z7uLPHTcis",
  "key18": "4f7RyBdT1zYREAP5L9TAKA7hXkr5SVKjxuMSnfb9nxNp7b6xF4DEZcsNDAgFsBjn2hti97y4qtPx6ek9pwDsUZ1J",
  "key19": "5XuRzk3nBfdMJhNcMiGEhDF8atve4tiNaB6BZVWtSnpWHHgRaMHf7h5iYCsQsfNszUMVwrVMy7dNQvENUwXeNTVc",
  "key20": "5z1g2jxCC6wPdb34AWxd1shBjA4yPbV2G1qQh51oiniecNyUUMkxJ8EbYMx3BnxDhLR5nGGcbsQMXM4MhNxUu17c",
  "key21": "3Vbdy4ozgYk7xe5n9sZTexUcMnUPEqrk5fUV8ihuKLmtRjxmsLXmjpzB4cZcqCZvtdqym34T8HN834B4mH4QD1kn",
  "key22": "2MhmZ9GueWQBYqiYJrCnb9gWX6yxNPrxRGL2WAVXv71vZMNAUnCLVra8UhRej2gg2qMJDTfBHDLfcTDNCkRfLYC2",
  "key23": "53qT5fEedmk9xVLXWGBoFJsE9acWSJFdL62zALjUXN78EWG8kYwgoxrN5GxpFZ2avifYaEe2tSdwirZVqhjpq3an",
  "key24": "2qJydVAAavVH7c28vsYksPkPQfF9GK5XhFH2JQGt8zTXmAKJyuKwsfT3MRHFpZ29cUgKFG22Dax35KSTHsaerPCC",
  "key25": "3az1vXs3T6gMjMCQDzqg6h5ZhMc2LpSGgvzrNxc5oA7tmkVrTfk8J2rngJaQ8Mn4MfJBDHY4nkqSn8KXFYkoUjBs",
  "key26": "37rY8f517y3KZkPamTgHLHmVJZx38yiw5iYM55to6hmSzCNB7SKnrCWoYSMPTDHMcTz5Hasit4cxuWQjrNHjVh5r",
  "key27": "ap5BbKw8ymiZc3iyc2s3gcB3i2ZwNGBZLR7QATPBnZZZUzrfYk35Y5s21CNoJpNZ8youYHvxfWCQXK5TqwqeAkF",
  "key28": "3quRdbaqhzjTLojqYU3HosquiWS2GRKq7iGSvX147y7yKSCGQjnFx9TLx6tFN8Jb1GafrGU8gHm7CCMAuVSQax9D",
  "key29": "BJEMnRRhRMv3FovqySgbSYFGkrrUuJT3pQsr4RZjsToRqdeJ8qbeLnanTWYPfoqd95mBn1xDhwDvKKmKwxzuYbY",
  "key30": "4gxSq3sbiaL1bJzrMV8fmDscaRmpU27VRis7VCgtgPwvP4hLqWKP8pMjeZu8RkgwhshX1VTnYnMxry5qt1UCvMWw",
  "key31": "ff7xjDhZ1dW79Jc8NAk5VvwG9ptXa5gpSpkc7YovM1GfTJ6zw8PEqyTRZxsFuTpDyJNrvcKriU8MV9emANbKszV",
  "key32": "5wxURvKp8pn38tE3AhNgZYP4THATiTn3WkNGeqZf1GUtnQujdbdvE5RjmDbcvo9b7HWCPtAQZKwLUV1ZUwMh1Qw6"
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
