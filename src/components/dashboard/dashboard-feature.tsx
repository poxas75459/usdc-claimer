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
    "4X2fj1xNW2Y5sfcy5TXNqKMnx32AvPKsDGfE7zJQ8j4nc1AiBBfMjdEtGMZE1DERYtQSQiBYskAjtEdEULtKBEi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XCY836KJTusBcNefsFLt4kwUHxf4pjCenY3rK1YvUqdZCradG9kER891fWteby9nrgtkh6HRGrkNpASzedKpGoL",
  "key1": "2cy3eJ7sX8W1CSGBrepM1kbwD8r5vbjAbVtEs9RUKUbmc8U7J81R1nqUu6gtKsXZwauVr2EN96TqM8ueK6JLPegG",
  "key2": "3doG1z4X4kn4uxy3qjAftv1Z6yXQMpEdiqqo66TX8VLPiX7C1E9hKWj4TW43CmG5F4hLZZ91qqZ3nEBWbKBSLvZ7",
  "key3": "Tsh4KGe2Nxn9xV4FoZV4uNhCeb8BLtrnS73thMJAzWPCsPrkzmczEngyEiabx1FDQ5DWxHaDBSrWGSseS1SpYFY",
  "key4": "5B26X9swD13VERSZpFkMV8zq46KJpFNCeGEhaTViFKvvg25AghCQwwWiQDQZih43tQo546dKkYNjmEPYA7PtHvaT",
  "key5": "AzrjRVgxE2rAZJ5XVBMFm6hpND3Pd8h3b6bLbhVb9Q2J5G3K2T7EacyPdbf9kcn82D5vfjMcTnJt1BTpXD1onNX",
  "key6": "kSUYV95ab3uMAsgZUHLsX1Vxp6hrPjh65uKF8nzTCL1ox5bWT4cKjnqbLMPhbYXogLaaPfJS4ryua8aubn5DGm5",
  "key7": "61B9gncU9jpi3pwAgWJs9rREmEjn2UTbA8Z5oMMSh5moVYqchHWh8kjJrJLPadkRxAToaVoPDCMdXbhee8pagWeL",
  "key8": "sdegGBHJNN327VrQpfyQyGZmSeY8LsnDah9MRga6LL5Eg1CVpJesdeJegnosiGPe3UXmT89wh9xqoabJPhRyMqm",
  "key9": "2VaDJbgvRkb8mvuXD9UTesKb69Ps8vJMbbk8VYX3SzhQVoMmjLhpQQhtE5zER7G7ER9QQsrXwTtixcWnxX1XdEHx",
  "key10": "iGNvPfHLta1CcBmk2UqWJyBukWBxL6W53BZKyZkY2eVSn1uLa8wXd4rFdobRUW8chQYZHXFi8P11c8HyF3kMmhH",
  "key11": "2nM7hUJD53JPjsCoYZko4xfGAgBCpCPfFXZAWwrdYJQYaoVpdoME8tbEXCCnhAb5FG9uBFiFaqj8TN8NvfZhA5Mn",
  "key12": "3doxiBTfTDwLbRBDS84RppZZU8kYu4j8wRKDsyMLEYfNqAtubfkXA8v6T8f9S83QfBKHdaqUUFTWtjRi6aUDoDgD",
  "key13": "4kBhraUk6awMMgwKCz7ZN1GP7LfVgAvEgEjCc5FYB52tmiot9btN2dBBZ82o4fQc37biR6on7VbbMZfnVPUJTome",
  "key14": "22BjZUDgvK3fnFgvGP5d1jSHvkHv6LDQ65YYbwHpU1NgqmYsayeEMcAGJ3gQGLWNoEBjnwK4E7ZAKBctzfrxFxBu",
  "key15": "3cUtKt4gR3eztm5Jdjx5kgxekR97CHQPmEoisWpEVdQkn76gsxDostBF9QiXjhyNdjczCM3T8jDmZmn61wCHZqQh",
  "key16": "4eSVkbswwTopiHdvA5GH2zwvXg78kZnmSh847tsVq46ioRtJAx1iRV3s4fM65UxSqey4Eb5YWpQ9w7k82t3XwYAb",
  "key17": "2BCXL6QNarQX4EHJXjin5XMqVEwaHNwwFgELKvXxzZmEjRRrfXqq7JMCy7UHqYSSo6pCz6H9keXACcWTrR6VazRe",
  "key18": "4QPLQ4w7oNjRCa8z5wBhJcEZ7P9ZfeDUDeEcTHiHJDxtNYxi34BTGsG8XaCYRzgRU8dD16dSupZji9QNLDor9aaz",
  "key19": "3HK12HWBaictDfDqcNrPMWrB6fyZmRQvQCNzCbRrSBVDUsF2itSDvZ2fH8Hi4eAALVJYWe5YwpUWp8KqM7u3Sfhh",
  "key20": "2RqT9QgzdmeRGLr8Fg7JTNUHKi1RB2NsXLn6HDp4cJvEdC3c3cMX6srtoLsxdiYefZpHjtE9JCz8Bwzg8wsHLceZ",
  "key21": "4EPZeYfJuucJh5mSVjyzAgjJDe7LNdHJVLHd7EZXRJmowYj4Xwz5bnMMzsaAVHgpdLyAh25Kakvo8Yp3giXCKexK",
  "key22": "4R75VzpajSoHFG6ZHLXMT8CfK8hv9JHhsgxS986TRxXqxrpuzNQ2E9F3h6GdmBFwq6YVAY1dpatjFjhLM3gwtjmr",
  "key23": "2hHBok1cozjkABq4CP74oS2CJPE1AP2JSvo5JoC3RyhkMvWXP7RMWLS6CEnZG9ZXJMHmWLXrN6byXv4WjHwN5vEj",
  "key24": "2p9H7XuBGvLx5wQDmbMuHbXeF9Sh5PAtsGEMcbwUwAzDu97vhTUWySPzioGp2oWP5rxLZTdRpSp33cSARbxgDZ7s"
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
