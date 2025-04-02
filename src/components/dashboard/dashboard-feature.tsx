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
    "4WQCEAxRjh9ojKi7Vdzi74zSVcjv6eMpX2DMiZqoTdU2zz1xjhbEb7QMZKTEQ8o9aSwUf6ESzCjejt3k3Hfy9vuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GW9hnUGgYvmuW42td1W4tMwioi7VSpxT8R9BWvuvokW3qdTcVCTYRkemX4oXV9vwJPmGJ6KJ53EqkZm53vZENVK",
  "key1": "2qhb7fZDtiHA8qwhmawcW9pN541Rzj8a8w7WbV8a6u3xaCam2rtvEe35P4dvn3zh3dYhX4R3eM6mqRdMgzRub7Dw",
  "key2": "4HxPmdbdwgZxQvCWBLzx9nZ8rE72Xpc3mdfXwNjV8PqbrUtGovCpaZihZTVZkDUbuiMcTo2hfCBATKVKwBej6Gps",
  "key3": "4Wz9UmQYR3tDA35j4b8HbqkUbJKVqHdappNJ1RGWLHr11EGVVEyFz3cDmtXogdsLsTYhPnUoCxP9y546wNwsKmHd",
  "key4": "2xuwmhtRjQJgE1g2PTs3GaPoqSdpmBkJZg5gwavHj14yLmyjt1FSAyPyZMskg239W4YKe3HMDXTUfyFMjbrxPxd1",
  "key5": "5yLQesoCMz5uHj3kdSUqsChSZVPv4yszbzczLQ6jiZoK6nn31LkfdjjPzMrpB5es5QwBWfUAFCaiZUMeLQyCCNuy",
  "key6": "53McXgCBbWmKgrn2gKJJ15WHVBD4JrBgvsxfuLrXCqBRHaKjWLJUy7CckEvwhVGo4wbMRvexCqZCHBqVSWbzWZU4",
  "key7": "5HJu6DjzwQUm4bFtJJY3RHqSE9vGVDrkyq8wgTwe9c7WwxKmpNupK2n8kbC7QX85W4B4rPWu2Ljsu2NsK6HfbH7B",
  "key8": "26BJ2FyB5Zrb2G185jErTzxNzUEzGxSt55NgsTZ25eQrYvmuQNWFMEwqGXwTC4Zww7iP1qp36rQ19DQgKxK22qdb",
  "key9": "3LtJ3dnaMPKn3syW6DQLGtWouQxFncA6EKjJRt44gUhW5kNsumttxnmPuYSgZPW925G93BpBWsiun3HPSDg3Vj9N",
  "key10": "28PUJr3t5S6WMmiJ9b5mpriZHw3ChVcdgXSZwARxsaFRjbH9gmQKFeLLZx2FwJ7NFqJzSVPvJh6TkGdY34zXwPV1",
  "key11": "2fg8XvjZ1w8fwZN8khBScTPfJnUwSP4ofrMcMn9STqa7Y85Z6K6smuzNtBNwvNcw59KedVfN1Vengk8U6uWDN8S7",
  "key12": "zb4i8LDbNJBFcEtcuDz2CrB5WHKPcH2v3PTmbWneBD6eQJVGRYCmALu2JGyDPvc6j9fWCLoQwAvMFovZdrEfJGz",
  "key13": "uan4GTN33cpDVivBeAKjjwh5k3UXDW7eV39AMAG1zgMVVVEy1EPKALTwmzzQAGJD5nts9DmmojVJ3w8KsKSpqf8",
  "key14": "2A54CsR1RfDRP1Kvd8tyzNp5uGqv8zinnxSReg9aev7Dvhm9AkX1r3puGFS5CvbLYXLGtJy3WkuVoLsAHy5AkDkK",
  "key15": "3Tj5cESDNDXUFmDWucGyxd39FHU1zynrr3bb7wXfdfhELyFnkbCjnZgidXnVLcRMy8ZzpLwskc7ezDnDijBjX7NB",
  "key16": "61tU2n2WZuUKbd3H9d5TeLns58FkQrb9kDSErmNgD8QSGs7tT69hGXeXuQMNGVLVGLC1j98JwYNuGGgnZXT2MFvc",
  "key17": "3oyK6PMENx2QCo4dpXf62VkcTeME84MDWFuv6EfCFg71myf9ygXvXGYUHqAKzr575jPa9qwXeH4yvD91UsdZXF1m",
  "key18": "DNpRRni8tFJTQ8VWkGgpwkyJzJqckzRpFS5CYnh9hAVfNtKnhTGBEFAAYwcFtXcyQhrLDhHmdDASSKvn4MHR83q",
  "key19": "2tHyWUn1XNTZyUkXyPDZ6p7kkxQCBJreYf7Si34Mn6L5tY9SupazSyyJQQoNNcqmYrY5WVuSRYExeAWxVBujtxdQ",
  "key20": "4dqb7ERBL37V5s8Rn78g2Q5nAysP35tWr6RU9e8GgdJKE3uruZJC1QW5eTo2cjs3PiXP8Uh9B6tBuVC9LqV5VJ7V",
  "key21": "3a3Z16AJNQS7yNotYUZxddiyD3rbvnWFoS5g1e1Tj8apg87TAdnbsf83cMAxHRMAxr98SHrmA9YiURfuMStDToeQ",
  "key22": "36Q4zuaJnDAekX3dwzYPvqEhWfAcnjcreohb2yRQnSHxXc6YvCkcmFUWmH2apSvfHaSs1BXgk8B7sajaByvNAnzv",
  "key23": "4rpai9nBRRU4qSApAsMjdk3xaT2DmeWWFfBdLh1YnVM9naf169nko3YFYeq1TUgQLUiVcbidvgGjbw3cjKJAV2NT",
  "key24": "3WTUbRbYDbFkoE4qSxKp7xpVWP9hV9aD1PjiPh3Tdf5bygNUGkJXudkAwPCUsWwDjgp63VtThnWyNAPQ671UGBnJ",
  "key25": "62xF4Cxq1QJdNi9FAaSLWhfLGwz99CQH17Yg9AbKvJGHY3owpbtRJQRUM9Fatm4DcrYFepQ4dxuR17b68Fgj2fL8",
  "key26": "5BAMcxXwqtkWxCJgkhEYWHqu5v5M583kWiwEhz9dytFMSXv8FqNGXB9rXv4cZMATgrWQ8jYVxYVBKRrajMVhJVgR",
  "key27": "3hDAThgFXuQtUqtHidoEfcfQeT8JESLcFhS5mzeFr33DBqm1wcrCBWxBWHVqYTwUYsUxFCfudr31h3XMWJkdh5Hc",
  "key28": "5SRxBxzGLLzBTKYACpsYQAH1VdzKnB3Z9L8GXEK1cAPG8z2GXumB51acrhppmAotrLE6S3aXma2ehVQbwgVy7MFH"
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
