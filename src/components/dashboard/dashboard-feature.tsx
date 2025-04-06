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
    "4kwU8zZhj2AtsP8BsWKKrSm4LG7hYrfG7u3yuK9K33Y6SGHh7qFdKpcBHgV5KeepojxnhaVjkw7H7vgUSNKgvnjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZZsfp6YDE8aa11EWMvkp7ZaGWUD5AsSUNqvg22VVhDifUicsUjf6qBFjfCCYgYBCo4WBGgWMSBSuvQHznbsUNWW",
  "key1": "2p6ZyLtphF8HPo5HUyNXt1nNUqL1TqhnuxmA8bMfxTPegq7PwM3zBcq5bQaoR97oJUkKB6BP5U5TGNRBwxZWpvh6",
  "key2": "3K191V1BaZQ6YfC8cicSi4GxaTEsiq9dzcFYWwzWwWhtJptbF1YqFuJSwrF1ca9DYjN6ZMoirz29qhnBMgviEZaY",
  "key3": "4E98w7qj9dCjokz3nhCeRSeCWRhbgAzLJ5WfqrcDFE6drcme65cEnyTRqsMusQdqb8SUc7ZFQ1D7TpPddTKzKRxY",
  "key4": "5K9NMSmDhjEsjmmePkuqXEu6XFr3hxeJy9RY69RGYQba6txh1X9PDWDRnzg814njm3TVPoM3nq51F5AEWqtnLxxh",
  "key5": "4sEuodRHJRqNvLLxo34q3KJjgC9JLSGZDTswuyunjQBHqNhc6VAfLWqPJGan7GkoKDHivbkc5s4F2136jrwdzEtU",
  "key6": "2fTXAqW7ses7Hnps8LCm4xchVrHR4ubZtFRoYJ3rKntZ86A2bWwm4r3VtitEQU2sU7FLnXHGKPr99BTziDnWZnyS",
  "key7": "4VnJjMEpJr37yAAEbn9fody5Cxa9n5qay9qBGSkQG9WBtksWLGxJUpNvrjnfxhFvhBUgcf9w6NyyXRx5qfKu5peS",
  "key8": "26WhDVxCwGxhy78dvYmAivTnk4JFzEYEKrMt5p8nShfWfZsJdj1XcC186t53AhBaRyJtJK9FNJURqtXEDgKduBSL",
  "key9": "2CJzJbULvFF5cYQTDRQG5yx5izXvueAwdDdKEATGSboyvMwQ4AUBbemskVH7XBDh9sEPDMzVUhox8SKxfEyrqpQ",
  "key10": "3A1sKjVVNhHDAYJPtuFMxGeHmpQTLrRbP48Yr1V5Hw5LsvUUNtnfzAkTY4TWVzF8zitNpy6fX5qtMq4kSyJcpWu1",
  "key11": "3rYLcwd2ZMj9rFvvvq1yB28TfuHaWHASDFyUFFeUA8XXgiCnA1zerqdPHeXNgBJQm51pxZFoXrbYV4nsd9V4P8hD",
  "key12": "4DaprDidgn1wMsfy88UnzohF9rhtYa2wzCkJ1FfC84T5agS53RJwfiRXBYNLv3RE9of2pZYNjtFLLhEkmLGs8cDH",
  "key13": "5n4ycxPabhKe2ZnTaHnKCiRSwUFRwcKv9R6f9rhSwinWnPx6S3qRqLPnUFDn6C83jyWF6F79GCGzAA7gNVXwSfQb",
  "key14": "3fMEedrW2uy5UKUqcmBcLzuvPuK5Yvb6NyYaTwr4mJN448bchGaPzS4xoRZCpREowsjKLbfe4JVeYVV1vVsYYV8m",
  "key15": "4eSMsKF7DeNWZZhcZQr8xomEe4MFDFGPjXfxpTqF8p4Bpvz4qmNW4hCPDAcpsRSWGcz5DN1jRJJBJvDd5BbmW47t",
  "key16": "nnT4nCNP4W2e3nS6HgnL3iyZZuV7iGA7Z4y3HhBfCAdZLbY5gWLZCbwshp8Vof3D3WnusMbDHxavfj7N2EJr8Mx",
  "key17": "2GtTJduzr6GbKEuB2HPTFvZWaACZ16FFNntSqrdsob4kD7jFfznZ1hDB3nUZR8iFDXNocijYNnZpZDHp7tKqZBa2",
  "key18": "zgrcEuajJgLZTH2uhQMZt7JinwC5GMQZ4XDLfQPb2ZWqq1LirNg9VZHHrVHtHL6attM9xLdhryGwGbM8WAUaLoW",
  "key19": "3REHkqrk6Zw4inNwbcbjz6RX7URYXCQ3gm2qr392qzLdC2273qGZUAJvjX8zmacpfkuEiHsnKmSYU5hWrJEqyERz",
  "key20": "3JsurewXRTvi3U24wPbcHLCwWZqX7MF1qXUcFZsRbHf19XM746xDyVh1Jqn6qJSbJ7S4fMvzZYQigQimJ77aKZZP",
  "key21": "3Wm6zbEU73L6PBmqxZQqfqgp9EzQUXbkyDRFeqewoB9181DHFtLojFjy8dPeAAP8QETnaw7uUSKQGj2jP5JHbtdD",
  "key22": "zuPU1UQsAnCtBwe7puhaQwGEGYrj9XW9f8GhqhFrqPZrEP6vNQSqA4Vi7Cd5dBg4PsVrzCN3pk8eDQAHmTRtZHu",
  "key23": "Mi3CD69w5PfzaeLf82pzij5TVmsK1sNy3UyyJw3EkHb3siiwvMNz2ySVCs4fEhiievWU5LUBpJyTpo4p7ibzGX8",
  "key24": "2Qrcv2WLs9pHbZuV3Fff1qvmEB1xyfRenbiBtNyynGj5YNg1otdH2773b1pxZsk9V3fusmAzGaAR2H99BabDb37n",
  "key25": "63KZDMEX42hxKbUHh5wXDTkqfkFUKSZZAqaJbfz3XR1XnYaJ4it2kvba1cNEjxRsuFUiwzuXhv4SddDppGcp54nh",
  "key26": "4qgcFxnXUGRjb6xYYr5Kg9upmZTpYzZqo53ABQwhAUhKQYqyZUAA7Nz5pKrejpypWERyQmLsMQ5S23PqhdrfT921",
  "key27": "28XfSct3mTBWNXoF42bPQcvitHbEw95aX4hryjRnDDdJ9XvyFcxWSokBGGmJx313UXKNkmR8HB5PQqxddVgBRSUy"
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
