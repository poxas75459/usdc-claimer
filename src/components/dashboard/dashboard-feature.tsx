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
    "65Q5Aa58YQranXafnCa6MESa8NaMGS9kYZZ3Rt8GxiiMvz1hq4kr3oaMRxBhTP1pA8sZVLvFvSefqgmSFg3PjD99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YzKLWxxmfH482GyRQXL2u4kJphJDCZw5SeHa5cMbUDKcAG8SBn5X3zsJGwzM8qffjignPFomWsGDBc1PVVNkG3z",
  "key1": "237qE5bH8U5B4nGPXgi7Hk9nndoVyWPZpg7Wzhmk4RMTyNzeGoitky2k1bBqBwtNnpxJwS9DiaHER3pKz4b2jpdS",
  "key2": "XAsXD7LK5Gx74fSMBpUYJz2sUW7nrnTaepX7hEyhKjZNbbf24wafqZtDJYaYm5ueoLHgYuDaWamTcLoVt44GtE6",
  "key3": "36HoJbQSR6Jg97iMoHze37G75GeQuUp9znn3Yxm19pRJtQXgmSVbVXLb3ZVvz51jizsXiGbmuqzR5W3Y4cffbKRz",
  "key4": "3ZNAHa3cWyn8eerwukGvbnV52ia4wR7b7rSKUpYidLChf8sEC6ktrNYYpSM84A2zoeqsavNVpERU3BfHzx5MCefb",
  "key5": "5xzF166sGwNgqKDdymFmWv1ryCwqjckqNNQXR2Sgtj92jxvY3SsoT9eHbWd3ESqZJiQnCYXNvfFcma28izo2Kroa",
  "key6": "4PQ1nxTLThS5nWHsoniNcq8sPYrwhqZ7bkVfFayLHLa2MeMHzCVqXaESFZYUobo2ttKVb6dFz7iV62yYh3H9vF5s",
  "key7": "3u5Sd82Xk45HasoHkanUKHAMAqQKTzEmnTWZfz2zGyUM8Crwb7qHamAit6owCpAqTs4Qf9bbxfY6Wi54idSqx3DT",
  "key8": "5tKT3t1S28NuSYHJoGmoTgVbYhH6SXAHY8wM8dabVeiNugXgzrfC4pvkjZByRDGrAeuvyrCmuCFmpgfoXbhSfMAd",
  "key9": "KW7QSCEiUDEt9Pvo7kQL3bLQCwJPjd564z99gyWqjg9e6e7X9cGYbwUVWG4FojGo5pYXrWU6kCrJ7SzFJsDo2xF",
  "key10": "5jk9dfjPKYyQ5zRLkMJEBawqeW7UxFMiwUAdAP4mm6RaNXuu3E9y9vYSdGzDVE9ftgzPSEquvEhCGzYdy6r8NHkM",
  "key11": "4vgM4ASQqoYw7z327WRn23o793Ms7GwaTL5Emkh8qys8gkThD7Q5vs7BSwgW1gxDn2So2ub2gEPLZdjAyUfnoUPQ",
  "key12": "3nQfh5GgtwmdE5QaSZiazRAEqJQEjNeeL7cXMEoM434fK4qG5kVoYbJSZWRF26TckxaEniSFBtyFuigHzpkG5hC",
  "key13": "MWgrPqBL7sM7iRW2aiNt7Bc5WekxoQusWaAnFyMkffZpjAwsWF5zTMSQnNyFCon9PvjUDw8ZkLurU6iA7YJHG3P",
  "key14": "3uDWSEpAciQguhAAVAxSTJBLJdmqHHt3wdMuYWGVttyW4fDRHz3xjpEaGwSbFAG9jSdyb8dLmTDwfYUj1XgpEQTz",
  "key15": "2GocCvG75yZuGpkzLz6G9ytZEV6EQw7aF3GzLc81vnzuehgSrtNfRrWEzDwu3a3LhXX5hgopHHURFZe1tfd7Xgzq",
  "key16": "2pomEL4zTZtQHiZDxSMkhh7rXwSwbgDvkQ8W2Gdh3wGmqRRsufXxpcF8s1724zLZF6CQah74p5WCd27gzFAL6G7s",
  "key17": "4Du2rRth9arRNHjz4REKBVGeyT2KPSWtV3gUi299qhhcEoCeTVh2sqrCcVEGLiqBHiF8yazX3B1bX8RNV617kdco",
  "key18": "mwzTfJ4hHL3efbyVaEFjqcE2pmjYymXJNwbmgAFeQkcQRMVha2zYWLY9Pz5usftCj4ZyMyAFhBkw7QPQ218EZXa",
  "key19": "4gop1BVuqDDCwBkzVLpQcp4bhfhv5je1fERoj84B9bswkBRgmjsmRZx8qnpQprn4pVHiUgkarpkdjAoEHpD1PGkt",
  "key20": "3DXadchJvxEu6Mwra7jyZuq9UUt6faMZ1sFq1GfPALUnxBWuBoJTrkK8uvnZui7tp1TNfmLSC8ah3rFd6sGSSr6j",
  "key21": "RUikcqrx6k1kQy1wU4JBBBPquC78TqRws92f1o8Lr3t2pYr5ZCk9hY9JFyPhfwuoifF5HqV8MkCAgTvdTuLQ9J1",
  "key22": "4rXmsgMB6uVKaQWrzvpQjPGH51Da1eMfygMbAEsLRFpPNgyqy6qMi4YFKqWKFFhwyd6jdeAF2ErHFHhZQ9Cwyakw",
  "key23": "4tpGv6r3Yc6rbGnA4uxorEy161GXyvu3TdYZqiMQCPY5u3y414tugwG6bcMyRG9Nvv2KsULTKWrKwKtUSMm8VuuS",
  "key24": "5qscxFT6yT9AMeEVdeB51t7inityG75K5LMGRLXQuRU1ML9YpFVYJ4KF2x27bVv3PetEgTnFvmX7wQNfinxWS45d",
  "key25": "3XQuZa2z1jECrtoJ2hn3BD7N5kkMA67snE8ga6uciN54x5KLoXBrmH9kDe6obPQqQEEFYX4p3ogZerDpSLrSFxCV",
  "key26": "4hQBezMd37LhmodZGyPVYsXLeww7ZfETucPyv5fzK6Xt6u78EKp2NNGtu5fy7n483y1irJ316vuA3nC6izxXRHJ9"
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
