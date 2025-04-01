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
    "WXFssSyGHRcVc2qJ5Q9BEMuv4vZBtioeazHjmtvG89ZspK1PiU5XeAkTvoq7CzA7mLwmVFat7F85LSsJZLcGVC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JhQ1MZJTKm4YCabFwWaHan15Fkt3sCsbdUKvsxW7m4v1kyZ3D7wyseNK2Xjd4dqL3EgGK1KjtXp5qub8o4Levof",
  "key1": "2k225jqV4giFyhtkrK271VFMovoxedswUixaQNcQX53WWtzWs12wkUDQqTyiG8SHPF8N6Lqhjd1TqYZYwcoAFh6w",
  "key2": "QSUc7RAsNJWjkikJ2cr514SuDEQtZCR1yFDrJpTswGzA5kn4vJrEEdtDV5Ea3rgSRv2RqDZc6MCo2PVhPvKcHub",
  "key3": "3nfEd4443XN8gkdiCgN4TgjvJyrzsfE5rXiWvKFSiVS2NzFjTA9kkVVHAiDbv61W1h1s2ZqCNXmScF4LBwJ1d3x2",
  "key4": "4E5xgEGAw8RjYachuYKPNEvCaHWjr6A3wmHu6hzA3iF7aysJKnZc9JYCoW6WdZmX9f4YmmpKr6MRqjMJ57zVMYFM",
  "key5": "29eEx8bxBsmrtYjsVrC8GuG7yZQS1dMBbU2ELxM2u6paTFmz6jq7zFNdzCELvaeYBdiUDWvnKEDzD7Mr2roe92yT",
  "key6": "291Qs7cNShEuH65293zeRM3gvdfXSvtFKfKFscA9b67zG2AcTchebN4ZfD8mxMV6NtNoaYdMgjHekngxtJkQM7nx",
  "key7": "38Wt7niMWQQwr1uWgmwV179Xcr9wFv9Pnuhyqw91MkCx3ixHAu3ChiFy1XL5NgCHkNYwnR6NM8KTcArvFU17zAhn",
  "key8": "4xmvnKqcmfrJpW5ve2jgHQ5J6hTSVsabDJGPwv6CJEUTAJMv58nVnugcx1im8w2dBP82TvcrVsjBwpDHbs5gRm8t",
  "key9": "NNS6hJW46fkYLnDr1qN8YFQj7MGjSJj9pQNoEkwxft6q4PMWqWzMFAUr3gyXktuU8Pe9GqxpZZgN1B1b4R6ooqm",
  "key10": "2FLBw7SpvG2YRjmHzmurbWwj5iQ1KL2DuUcbTPhANQjA3st8tJzCw29bqbbGJj9awT5c1dGgjTV9KPkUQrtRXBHh",
  "key11": "2dEpAPMT3A38az3Nzp5Kj2Dy94rAGg5zPV69iNhnVv4Mm5af96SqnaytuwaybuL2fivXanmGQZPqfm1Cm7mAZPG4",
  "key12": "LKaQbpaXeLCpmKpppRdaAmhKG6LNUK5EHAhreWfLtJRHwLQei6uRt3mr9Z46f4SR65RQUJDc8NXzhjXMbXiRbfa",
  "key13": "BoNq1VneYoFbnqWG6qQNkV2GS25u97SkmoCF2HYJ92NbEyXwqV8UT79qhGDEFP99xfQsAvePQ9swdPgCdqg9RLE",
  "key14": "3eRg4Z6CMgvM8RY2exvyiG7BvwcTYocMPrmnercutVXQu4FQYGwAgNHbhS6nPqXLyCU7ugL49bNoB9KZC3UkMGgi",
  "key15": "2e3CPMBwPsptYouitRECFFeYnPuAeXpaaFXmq3TmcDUKPutuhFgpYALEm6FwPQhfWgdaGJJWg7dnrwnXke2fHfBe",
  "key16": "2H4tg1mV814wzDc2AsguSrrzZtumcmarmZEVS2xnp8xjD4pZXf1w1w5hYCeJGfoMPoir2k3oZ3Uv7EkTAW5u3dtc",
  "key17": "4A9GuKRpZFNAur1sk7yEZJnDepVSMC2k39bzzzk8N3triQVppjmcQ5Vw2dbsuhQRXfvWrkqMH5aNAd6mEKvwR4dX",
  "key18": "2FSKvgR27TnParPDSUhuK5DrkDjQdwoHHJtXRorEfz6LmaGvwNqzSKGt8ggSu8k5sgAPDBvKDPyNjfWaPhD7nbwm",
  "key19": "2fXXiw1Jm1dWSEYUxeN1JGoiYdomDBQxPmxhJkJiU2BAtvyteLHa1UhD3SJYDtSPw15gV1PALSMkeBA4MBkWXU8u",
  "key20": "59kGcuKxipfSEJcdMaHzvbpwUDFGTzTg7Y8APAL98j59tfc952rvSxFdShAcBKdzBvFg6uBYBKsHvj6nJgV6CsnK",
  "key21": "4zmiPXWCYWHngf4L7srg1MTFj1qwSusWskxf3m3ftC7ZBNqhjwo9Bn4dbuEGuktibeuzENjVGcLBNbtsQ1qFqDPL",
  "key22": "29RAMyhaDX5XDkqPiKQYTQwkgy3W8B9ZJsw29gAdGj3zteWq2oHwgT9VDmG8F7Uq1MgXNnTW1gZVQ97QbkifK2Lk",
  "key23": "2PRNuH9pHmtBQeCFniyJkGTebnh8T4uNrpqYumYfwWPRtdgXwUtWeUhag3J5HqcMPXWkdmLWUNgCgqJH6PQP6RpD",
  "key24": "2wpSegb3bYhzenGCedEL5tmQHNr4dU6vtFWqQWjK3Y4Py8KUy9v6YXMtbpbk2zJe6B8PihTVwqjxi317BJmxtVyT",
  "key25": "4j1mL9ZNv1RXo2oeVuxVekyNdQw1mFZKTjgFpZfAPKRxEHaHXcJ8cRqxxZJNDSr2zfDbp1J8tRFY97AthuQEEWXj",
  "key26": "3yuK1iJxXFwS1bhaQqgMTLN6UajkVkfnDiyBzeEmkQ6XigU5mWoiW3UPLV8AZ3mWk4j1bk8G9hit6UNn9Qo5NELg",
  "key27": "5MrBdLMWL2Z9hsgpiAAttLqVhW5omkkVBqynwGq3DhfRYBznw6MUaBEYgC3qcWpYTpqanEsUpoZZJqXpMEGwmSx9",
  "key28": "2oEAog7ZCg4jSk1DSQoF41598CTbb3SLHEbysNg4k7twgMDouwLmSa3GhWEi5McVwyhT6Nv8ZtXY73ft5ZTohz85",
  "key29": "77zXXQ2HZAkx5x1LmkSFPDbg8y5r5c4y8QY5CmdruJpk3Mqiyh25zLUzZBF9dwW1CJdKz9KYMq4LFa7o543JD8a",
  "key30": "UDeKAXwoT5c46PcTnzGUNZePBjwF7yRPfCv5oYkztLkgvY98Pdx5a4ezPkeTisaDzwXVRqezzQUP6GStbKumSFk",
  "key31": "4C1BbLBBR8fz3m3kPjNSbd7UndHffMkjMv8QPQ9FLV4dY8GeSJVf2EpUGPyRDZtub6BVD7WdZ3iAaoeK8Y9YkX49",
  "key32": "2DGqJKUUx4dyyUaeoHq6YDbNZJ8KmaNgYGqPHuAAdMBHxGr4dT1CBfEc3gs92xNHn68RJgy31tBi3bBERwgPFZf9",
  "key33": "28TxCYDzkWJSpHrFvN357hDxf79cjwFmkF7MVGkZcqjvFyGUMnQpMckDSqHLkNnGhiio4NN2FES1dhLPt6FMXekd",
  "key34": "8wWHCxaAs1vicmwx9Gvpi7CQUcqi6JkN9CNSE52vFA3MuLan8ZnUNURg2xdnNe8aZQAyYRNv9gYdgmQs78YWvJ3",
  "key35": "4Cb2d7Qpsucsa1naSjSeqxA1x4SpqFph1cRU9gr3GqrU79TVRdiaTcofkCQs95c1gtzX5n5ubgqApqpxz5d1nwWC",
  "key36": "33SaiMsqhoibC6FHuBFAqPVJhbTn5U32kyTVbZz1351ZuFGHzSHg4r2T6BGz2K2fXzMiYFPGrbU7xo9KPjzVgXHr"
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
