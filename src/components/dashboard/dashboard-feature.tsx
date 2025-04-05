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
    "4xYSvTtjV4cMt7cJaMCppSWjh2yeP1rXJnYUvhyuoENga8czq8azxnTxw2siwnhqaJA29MfYvD2Hfwm3afP9dBGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xBAA9eo6ySQQJtgMQtifti2Nd7BM6av82fYpAW9jZop6QmuiKJzXRsWzfHpZr9TR64tc2u25RbmWDTTLjPdKiMe",
  "key1": "WGn3Fzwitn1M8XMWs6RvacvUuf5f6i9jAyfvadDgxQJ5TyD4xQJaWi6nWC4WjAtTHbaXbq7CEzRBwXV7E3vqNRV",
  "key2": "5LoZb4K6JZfE2h2v7KJ6T9oTaFrMmwUBLzk4gsejjPzhXzKFhcHzHCZCB1CJ2iJBVnXinHUF5ZLjxuvhMWojNk6S",
  "key3": "3sW9p7E1tP2Lo3SegrYVz2ZbM1Wu3BXzi15Y8q29mzA7USo3egrTD93bcy6QzJREMP4C8D6xrzT99nZTztscKuDb",
  "key4": "HBHq2qFnkkqyPxFxoEwuCbZEfjA2T4mAnmLKYbxm7MVPgUbTk97LZBHRnZduSXqkadfEsNk7YYiQTHHbMB3qpDN",
  "key5": "5gbbELyQk8KA1AE825YpY5XJSUyBN7fnN2cgyMXDRS5S28ovjWK2pKM1x1CBVKHTv4oUuwFc1JzGSXosrDHZA2FN",
  "key6": "5WqYUEVpyLo3sb265pSYosF8v6VTyWdgkESuc2U35HexoffyQ6xzEXxj8LLk1JJnyxcPr5Yfxa4M2bHyMGei5Etv",
  "key7": "7tfDaN5op3cX3QaN6cReXLQeMix8cGnqDW6SzLFQzhLZaVfmCAcbnqt5QHX4UrZ5po77zCwfawJ6gMLmgtJFmqL",
  "key8": "cXBwBW1oDBLYybamhPL5XPj1r3zCcSmCXaC5c1RMadAPSxT52BtpgZj1RKhF75yqPQDkmNunEe1WYKmJm1m8H3i",
  "key9": "5yFgaDHax756195LoVvTApH24qaHNNyeVpfEV681MkDzrxVBr5V34jPSqgBq6zWnXBXLiUrRdUe9hPkSApAhTFLJ",
  "key10": "5mXoWi6cVqdyd9wGT7WaJhW8ERQSfe4k3kNBFKQ1EuiDd4ULcXEUR1hC8itLTTxGkVn631aTZjDm7LT51gj9iddG",
  "key11": "5m5ugbtQ8Md8PxK7j9xVSNxmkcXAf1TBM4rYFj6QSn5FX7KzRBYvJMHkSdC9xxqLhrzRq5td8mWbCeUumgHvfQo8",
  "key12": "2yLUwx6M5RQJGrsayHUxLyx8ER8JFm6B8H4qdjBw2kXr2vCYpe99htCvjjRJs8QDrTYcoG45FduRgYSyfyHZFJtH",
  "key13": "2aGTtysY5FwSfsTtmCiUH5wKMSWmmmvzTdexf2LkPhHGc1mESAWhbMN6b4jczyvartzCP4tsTFUBUKv2eJrJRrfq",
  "key14": "29gnmZ9hNgRnrcWD6bxo6sLawphr7kx8qfCDPbPtGmAvNBWVBmDVdoXn4goSCBrcqRicFd66bF9WU6z2mVPdh3tr",
  "key15": "4YQsLKJ9xSHUpSsmdrsNCMUZm1e4HpvsSQodn9tKYo5mGmYDdRQtjySZeAjQWrjbZx1bDa782SKvdkSjAWGWYmoZ",
  "key16": "39NwGmMPRK1D27BqHRZ22SxCTcaaUZ96arG5s6gsSDdYR9CNBAE1reFVdn6GsiZhfzjgy4HmwfkNZ12ZSwNz56Ce",
  "key17": "2ZUB7WCEMWZCMjdyn9BR8USAYP4fkN5D1QNJas1Pe4uHjJthZ43C6EU1pWDUWd3DUt6FNW7P7Hnr9HNAGmJ6Xq3c",
  "key18": "5XPyYvtZ5fGQCbWjyGWB8hZQeZAxrUj6h9pHJNdF5QLJrwSs84FAQuMNxDh2M4Usq6jn41KZiCKRjhmYJxafpR1Q",
  "key19": "3q6xXcNmbgUn9SYk1AVdLoxXPYJGVuJEcf3Votj4hpDnjRwznosn81Co6Ycvs3QuaDAYkgGhbx9o1E3feJNnHojC",
  "key20": "4uACo4pnExDrSXuo4G19wEpYZaHvzMKKdqV5DLZ5srPzLV1PjEueLUSfsoDKVMQ42EDemszweFeCuULLFCovH3LS",
  "key21": "ShPGiebRnTBnPvVYKvHeoCyQvNaNcdHZX6mpEuA6sCF7zTNLPaetoS5WribHatqvcCZb1PZhKRmX3x79SYqfVpo",
  "key22": "WZJYX7oHpvHfKqjYKkiNTo37dApUqAN24tQgDcRncNd5raGjnR17wH6HCQfbGet41RW1bBGvz7prK4vM1gTFpo6",
  "key23": "4cD8egV4QPMvymKiUxN1GDfYE8RAEEQcxr2TiRzWh4ndr12f7yVMof57tMF8c4kG15oVzub2QmQ7DY3f3Q5Eqx2X",
  "key24": "7RLi7YwT73oA5dYYaaiDD7dyA2bet6G6S5TPzvj9vLrvKLkTZqcZjVHnp4Z4HAeJaJe4q1enGgnrCZh3BzQnfDG",
  "key25": "2E7MCknJxgweBSt3nUMZtghinHrExDL3bBoTq8muS4PweVSHVttwkh8Vs16PCMRjTUVwbUDBcfzU77qu6dSn7nfN",
  "key26": "DMJSsUWJxptm5Z35grgtPurJ94gMkyJUi3m2mTM3MSd8btHoqEnRrPqix3BAwUGESsdvaDu9USpdq164NkDywgf",
  "key27": "MnbSgE6DhMZ3bfhs6AT88MPUFWMgoD43Ehti4x7PEEnwFVkpspdJg9At2m28uj7snMp93GiouGctKEhrMBkuxjf"
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
