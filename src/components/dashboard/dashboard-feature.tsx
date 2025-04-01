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
    "3vhyTb4GidUA7MExGkczyQ5YPdZjExqg1HvhXBTrPmSFDPy2sL8y9n3ECmo4y6WAWW9X6rGxrBuafwBPFnZGuvHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4acFbQZf1ZXTThYQzv3dvoCiH5aTHEjLYpCxWydEZYZcZH3qezpuxviKhSM3c3kbCwWG2eDiH7osikWwywGSLwYf",
  "key1": "4qrkS6KDXAZAqx7pcP5J3bMLJk7ifjcDgGkaj4ptr6uDPgdmuD7TcnAxqCai8irGvMrK5VMc2n3CUBpNsxLjvwQx",
  "key2": "5ArqfA4c7h2BU85A9gC7KZB2wTY59P7MhiyT7jHtxomY89X9H2o7qaq9Fyy6PGvhoDjuhwRz2DLaHRJ8Go2m3c7v",
  "key3": "5WnRVBQmBB66wj7evpUm2viLq7sHjYeyjS6JqWsYpmUKxE8aRCyYxDiX9F2xRELEUbbhUi1WruKa6LaA4GTeywtt",
  "key4": "36eCJ7iMpJ578PBMFxsAw829i1P9BPZszbhEJJHRbjNaVwmb8TiMJzkNEP4w36wQ9kBX9rnohAdJQzBhoJh17Hn9",
  "key5": "4PcrNDKXzHrBaunL7a31dxtBCCQ2PRh31HbcFqVJnqYHGpWcw4ixQKgTSDMqbv2WvzP9tozHYJYCZqoTF6qLaKqu",
  "key6": "3k2nmuRQjAXBkQSZzkinMoahEhoKD7PF8Hr3aF4ZYxkTVevQW6C5715xheVX29nmnfQxFaPzELnJRHeB8t9w4TvJ",
  "key7": "2exqPxMNARzkLaojSW19V4z77kybDDvy6QAQpopvszGTxVEquQCPMXZCnVSheuLmQedCH6epoPGM668Ro28kFzAf",
  "key8": "353GE4SS9nQ3kWfPz6FDxqsWbbWpFyifKgzcni7ysLKbsHdqPwggSpLeLKanNqJzgu3fVDStnKXMjKdVdWSz6WRC",
  "key9": "3Xsxmv89Dn3STeTj26QEWGrak8J5HbzEbR21XSGBoykMBd8Pbp9VMBqJ5ZxPMXd8rzA7KgFfXh5wou4ct3bLJD4c",
  "key10": "2JxSydJF2VusZMtKttnUb1scLy8WGPbg3mun2MpwHBeiWyNhtBdAkecZBU9QFsjuNSvmMeSNjEyPhRTMcXSipg2o",
  "key11": "363ytzF9MmaNPqednSQiADpCewEhuWmTmU1m4qK533QvFvPWBgsnvKxK2fGLpJW5XkugVn737v4n9wvWD7sa9j2r",
  "key12": "5GfqWGNDNmu67nFZwwkAa6MMVyauhrSAEdSTFZ4Tu2eaz7mri6pY9WP5PKdjr6687DcLQzcKBpDvvF1YrdXGcmYM",
  "key13": "wKDVqLZWKh2Wn3GBJnX8Kaq9kQPG7UpmFaXNKPWs6mEh83XZqyZmjMWUYwXQr56o7yMpa57HstFLH5e92dcLeEs",
  "key14": "xLyuSLYC2F5fPWGoR4bWGZvSQVyz3uobjj3nFFepfEuF9LRpSuDoVGfzkq4xCrH1kLPuU2E6h1fH5mZ9jxZru76",
  "key15": "5LRYoAAfomsp31ejKPwnC7yLKtEGrbHcDo8P6nTUwEmofjMFMpSmYJRfyGdf2yByPsGbKjLxPmA1KfL53WT9SJWW",
  "key16": "2Q7diLmvwZF8ogkmhsUSm43sDGttYrfcS7V8PQKrfWmrqTFYFiMNyeNDtmt9jXsR3WEJxyNtR3MhAyp8HGnaUWDa",
  "key17": "4duZmNKTVRgARGCFB2UznbswLsdP11MyToD3jCk3UwFZ5efX7r8MCd94kQz1fpWpcAdKZjcKsvf9fEUEaAPZFQwe",
  "key18": "5gDfMTUigQekpnf7YNmXb5XtQXWBufgzr7sC41nCXKFvYyc69We51n155M1NAjw5SBz5kvywd7ybucaoVou7AZFm",
  "key19": "2CPoDNKaKqD4jjj6ZXkHtCPseWL2TCWuxwDqnaDVQFLCfM8TnNweVe2Gn9Ng7d7KgvD4tCxDXXVnY5nXYEpsuScN",
  "key20": "Hoj1oJTVPadueo1FwsMkH8ikMXjqoZqit5AhMdANd8sexWyK2AyyjRH52PhLYGbvCW19vRD5xnjU9tuv5RmE7WS",
  "key21": "3ZoFmNZBjQg6vCMk3xfLaB33xp6itpinbkVAMFG81ogaPrBqPizARnYr4ooywMHLHHxfCr5qRDQDgnoTU8SoiJ1T",
  "key22": "5WhAkjuzYpEF86ytpeVEKhwnDxj1ekZvRaUiAKGfHAh7hpx3RQvN8HvXqfQb1BwimqCqbBxD7MYdVNahvaKtfVbM",
  "key23": "5yg1VCzzeC4Nvgap81gmAWNepsJ3LwtZnhrNZMsJygCq7ui4XaFjGpFRMqMXABvj8gBHupzwFK86uBA5Q5WBLdW2",
  "key24": "4xRCUhnu3rZ1oWa6DQuCqgsoFRPZUT2TobXffbrSp37MFwofNSboheoTox3C5j33a2RKepTCXZVufG7mFQ2P6vVr",
  "key25": "8CzkYxZeu76z2aWSh7bfT2fmuADaWbwDSnjazQsDGid62yiRSiBKdxsuaGw1v1q1bRxz5ntA2a3P5VKCPfwwsLG",
  "key26": "3WsFyWjRK4AtdcwwRfZRP94ftiJLhY3BdHYJM75SfGR6skn61PArbErwatuq7a3DpY3DEPP5Tjk9zoNp7JJXJmV4",
  "key27": "3E4nHtbqdMvnUrcMt5965AVRn23aCY8GKrxdu6h81uvDPc2mNHh19smTwZtPF9hZ82XxxczjQC8jDqPqyqZnSjKu",
  "key28": "2oijCb1L2ptKW6LxLuv5KRPTJ9ovENEMomeH4BTivnWPms5jwXzMkrvifUYnqN6HeD59qPmCH789sCKmg8QkHrGa",
  "key29": "nwqDxbmpUYGcKnoEGW7qqpP6MPzKyD1WJEjtmUatYa1aU8AxuQyGqg2eMfFQ6vKHHGjDqkshzyW5Di34fKeazYz",
  "key30": "5iHZaVSxvczq6AoGo3DjjA5h6YBgADhRjqW6dtVi4FzUSjXGSFaYKNocuAy4J9bWTtfBpj7i1dYCk8PRwqBWrnwe",
  "key31": "53L7mhg4zV2N3wxkPoaRPeqQ5T5p8Z5CkYhXwNK7Ah2pL5BUH6EKxQixw26YmQh7S3PRbHBHbvUtt5B7bfc93rT7",
  "key32": "sXgfT2EW8KFzPZm6BSmVnKehVmP5fZqMUpc7naCAvK8yYCNKzmsPegzBgL9u68AMhn3ouT4Sf1pXPagqaFRvSjd",
  "key33": "5o88rBafixS447X49eucgSURykz9zZUwdwVS1jV2UkpkYHzUUSP3UKmdoV9AYHqVCqH1mA8dSo6kZ8dddJLXHFjy",
  "key34": "2DoNtmqnqVfE92Kdkc9qBbRde7cSMsDwQe32KtgmrxwNmF4CHm1ozMsGwPPZjB5Yv7x7wUqDCbQdQCp44AzWiYQZ",
  "key35": "3ArGxepRpEuKfg3wgN2MyAszbgduDx8HLooV933AZZUuNciuzkPJs9KRU3Evqxi4CgkAuvx1aMySeE4DF9yhQX5n",
  "key36": "4gaModXfuZFDVsjPocAK7CWSXbAyn8jccAAsWLJXAnAQyFXhxZiE3F2WAMmxUcW2DyW7eTQNx544ca2c2Brfa5BN",
  "key37": "5H5UnZM877cWJ7FaoF6efJR5tSNCbZn3bdotHakXPQwG4pseSARw5fUNcXd6xfMv5uWPyTejBYZr56PBjJ17hrwE"
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
