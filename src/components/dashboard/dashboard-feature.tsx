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
    "4hFcGPWmN3sGGPrhmVTRtgRwAp3eejXXJJSJzEZZzyPFSxaAsQVsXGKskG7sFT2yHicciyDt84EfwLpo7YtL8jei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s29rKiVNx7pgbKmsZAuw53FtQKkCiAaq78cRApCQG7Cw8vMswk5FcNwtCxLfGTf4ZE7JCxcGpyGwmCK8QyBaSUh",
  "key1": "6dphSRd2rc2w3R2GmRJ7HLZWqX3i5StWnktmfKY5DbFL4iQursds22Zz5QybRyd5nqQaMKH8aCxcFNMXhD6FxbN",
  "key2": "Pg55P35fHaW75LZejG4M7VfwyPWoV4LQk2hfxTQ8g5pSVzP3MhtHg4WzwcbwMzC1zpQS6fwhA7dZYmSbcvGka6N",
  "key3": "FYpSaxGiosuDFUSzTrSYiyUDbtLShkWvAKVswEc4M8i7dyYyc6gY3o94MHkX1DrqQ85RHTBzseeQWpMZjqCdz1M",
  "key4": "LrEfBM3CR2EuJ7TDaWLBVU6nDm8gUYk1tPQYh2DPZdg78ZN44w6qRYPSXidbfv6d3fCLb63gX5AnfW7qMJJyT52",
  "key5": "5dT9vGgRBFa9y7JPmR7ZsT664UpL4gJx6UM4yzMUJbjQB7YB1dDDrFBanFvJ9sGz9ugcjc4LXb7MLhSiSQPavbKv",
  "key6": "2Dy28XtYTuUgwCdb9XXERfKyXdqc4oLrMdyQv8PEVLC2eFRgpidBxEe8dQaPia2dWqCNKvAXEgsWrJgys1UaPUdV",
  "key7": "3C3BTNNmgHM8eVq7XYhFoP4yVPbPxj6nuP5PBS5Sw1LXnYhbQpQ6i2PhhjXwpiwUXvcENBZr8Y3BzT1YuMB8JfvA",
  "key8": "5xS3Y5GbARjJ9SSEsTMrz99LHZRJyUWQAiafhrTzmXzQCtdgATHJGi1GLxTpgZaYEBvNMQsfj2Xzevbtp6oArYDM",
  "key9": "5kDhm7SQVNyHTjEztpsQFQ3L7aQFPWmtUNCd7arMnHJ6Bt2nZGUNBnRPuwVj4e1UMq4dAq2Go4ErE7iu9bPNeNjw",
  "key10": "26DpM2n3DZHTqzPD5KiS1Dq8gHCriE5uSgEyFZf2JwryaSKmcyo2TPC1CHhF4apgWZqyfQ2fqseR5Prk2AX3Dsdo",
  "key11": "2CBL643E7Znhb1YExgAdN7Hfdg5s4bYM9Jixdva8vhhKhUa1EFDy9bYi9ZiaSUocvBD86u5agc1vofw7zpkePp2E",
  "key12": "3sBBtqHiQkjLxDXBNnM6d88ZpzinSg9X39xeT3uS8qtcAX8wXtcUzF1NrE49JNfH3mWkUtv4jYh7ybY8kTnrCWFz",
  "key13": "5EjYfrSQyQVQX6G4WYtrkWvpvXBNNVTBvqwRF8q5pFtiegxXBeRfFPLBPWYPxaZAH9AmUUgS5jRuzoWi1mimQpnV",
  "key14": "2R7ygTgstN3AE6X6mfhoYt59smZnquSBHXVhPDaejifPNHbvFgo5zKdxH2S3SGw92R3YbZKpTvM6rk9D9AC6aqZc",
  "key15": "4bMoYgYhgGnVDA4GSxkgJ9R6bUCQUFPWaLJUcnwHYmR7RhTsPZAv3ZcuR1vSXCsTG42iKWpeCDDxVqQv1M3275Q1",
  "key16": "N4LRQZDZSFtkwdhnoS47H34rccLNCgXhhUCwDbXHwd3x4HfJyyTztTwFvf2f9zLSTaiLtXHm2qfVbQfwKP9o7sK",
  "key17": "3AtqRDFVtRiHqR3brzr3rToiCWQWVMvu2MfFx8dfhVotbbbAY1GSe2gcq45bPHNrg7f6DXgB56uEprgw1pU6jZD9",
  "key18": "4djJwy5m18eeLgZ6yVbftFgt34JuacDD68SNXL7wqBWgzR3i1nF45FaFeVFZ4bDYwXzgFaynHdPu4ZAcTYLRZTsv",
  "key19": "3MGxDdDWiw6DTRMZVbg8GQPNzoXXYpC79HQnFv7g8bk6BDwYckLYmSWoMgno3URzUqLdrJQcE7RYcbTVbXEarLeh",
  "key20": "4MB8EF5ZYKnv9yatHtSZvM8HJPLSXjEHGC3E9Cvp2NH7d6G3NGdqmtvTkeJLDXXpCZMmsVucNjeXuVXmwjbWNAn6",
  "key21": "3DjQ4XAPKLAPLovBKQVbqFaYKbu3UkdMbm5bbySzrdDidLDTee86R2vSDzURQaVKMEAgtQPBCCJgTVfrZJD53mDW",
  "key22": "3jbGs96MpUDQU6zHmE8kuLuD8oMb2bREEPFyYuNYyEPGAe7RJCUkjutDJGPBhQxQd85EcguA63A8FXmwiNKTXuRn",
  "key23": "4FT6v9JhKWZkXWYo4XjaPD2MpDmvzdp6YYNu5hawr6WgnfPntkgp9oxE6HMitPgr3CzPYDA2KWS5sjFGgQZ1HKuF",
  "key24": "35jSsehSKgHwB273q5EvUScaJYRCyXQbZ2cYEGuQnLrkEqQK2HDaW4uJ6nEdGRe9Nwp6bzkBd5XCfE9AkZ2Rxo2e",
  "key25": "4JdqDywoWDQnKcJwuVBixz4R13apbf5jL3EQ31KcwjZm77RkB7DDbwyEvFSpC3hwUaUFkUBU7TqZeTRiQnPeVBBB",
  "key26": "47xj4SkrkjwoGmrc59D5WFVjSqBR8776PR3ehB7JqTTaFHBcxBYtbCoZ8CNDB1ozXQ7hyf5j7nmzdQeefJSbkC1c",
  "key27": "4JAs9UxKDziTQXtCV2kS6bMLLHqY72xNGTgNcV5cqGwLNbnW8kcvkYKMgttRar58eky1WJreeYjCUDBy96SDcRUt",
  "key28": "356BDDezvvEoMNv3JKThSegPgtcoTgiYKTN5vC5gtBoYVWxw8BWoryyWYZon8YNe75YLaygtwd2qUAEsZmjB47Qz",
  "key29": "4Y8CMM3ZQ8b7Lzyui2EaJtDCF3DsZ3K9JstzbsXBjW2aoq7mc78AdVfHkioYzusidBMENi4BovGVgP5n6LyKp1Wj"
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
