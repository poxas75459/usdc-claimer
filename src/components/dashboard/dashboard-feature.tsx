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
    "5TBoXvDnCsWC9bATw9Y4bAaek4YKNqwnbjmbSvn3Aj4vEWhWDS9UxTXW52XYjhhMENZyJErrAzMwiH9ekp1tyqAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24vGPydvn9HNEFpfi6AqrtgZbepzXMc26WZxFERyebegffXdv4A3vitsFYR6twn7KZuZB2okpof5AKmQP278s38a",
  "key1": "2fMbCZV7hLM8s3CRLGGxg5SdUvDFJ8PLaRh6GCiHCvTqDLxVcdQp7dMG7rdCvjCnE8buiiY824dACyGsgqUiRRxe",
  "key2": "3P6aWaM1Rkj1n7udYk3XkTNMcqNQHXZA4FfBpzdD2ie8Tp39LRyHkMsZFp5U1xaxkiGCkJKEFf74fbrxQoZh3kif",
  "key3": "3JuoBu3fAKYt6QbSuiBcnYUCcebx3Xah3Px7ATdYW9QjeraeVsrNy3W7w79sTQDgrPxq9uVKMLm71onQ52dXLhvU",
  "key4": "2AGwsUoyKKTS9ndV1TQmwbEwTNQzCYmBpPY5PVugYBPr1RoCw7zLiBXu8CQbxuWvMmD1LQj1PXnTKjchH6u7eHAz",
  "key5": "c8cvaxRGgHJe6CMq2tus5zJzEXGqVWm5na9HiUn4XCeRJDQXAGbzmcgvghDu8zaLstAEyFeVHFRvfxSjM5xBB46",
  "key6": "tcvEWYpsinwf1eK8uQAYSPJEiPAPx1uf6jrxjJYaZDeLs6vQjWdk8WGZwGpa8kQWYLk862trbHC7NxEuLkUYXEV",
  "key7": "3saagwXmwxqwzU4RxFe9w1Q9kBaMrmC7pVQEtn312XnXJhKCRFmFqsaeaL8T9BAG81V1rsP9ftvWMQ8cXBRvgKQi",
  "key8": "5sNKLzFvsGyKjL7iYV3kFFDami4Rpmtthg4rhm8TYFC1jbrfxhFzmVaeqY8gbJGBVXZGuqA7CHbPqM91qftsW9Fs",
  "key9": "5P6n7DxhxgEuHyHzchkeakJx1pYdGqUUDymyKP36FaSMqJUJPLbbX8s452qZoTvFFDNp2DDgRAqZ4AgNMWAFmnXt",
  "key10": "PUBR2q8EBbSUHREqhLGoTvtoZTtrjMnBChTcZYyRHjbed5f6LxE2A8hvQmbZgguYTW6MHsy7dLN9kHW6ZzYEsRD",
  "key11": "2nWxp2J7qaaiHamt7v5oKwW13B7nDYL3J9wsKgWi8FSjshrhZMwVbgdtx4GTw2T6Fq3GeYbJ5mqZCqmDihp1nsbU",
  "key12": "zsnwpVeY9R6X8CbvtkySHHPmBSuNQTapDtzmtAJZKs8B4rPJiCBFLocPbxTgCxZUbH2iCBNwQ3Rdr5UiVx66pNs",
  "key13": "4WteAEuPEm9HGBQfyu4F1NiSMQQqXu9bWmkJM5kbX61Yy18sS6Qe9oSGzAAHhBHeFVfTxnpq82JrTNfgWFUxmoSf",
  "key14": "736hi2oGnbgFFnLWD8GgjJD279C9kTWMnqdsmz9zjMWzr3NbeDn3sdm9YwEgBcMq2rJ7YZGmGF7h8QFNgpLELR5",
  "key15": "R33sz3w6jURCUhTFMbrtRRpMbbdxb4ZTmg3SqLnkemx59MBJ4zWt1Djq5kU8A8s7j6JcLeQjQB3vfmdU58Cstcf",
  "key16": "4CaKBZDxowyC1PNETnueYpxgCgQpFKaVyVEe1BUwqcgm8h6BizJPuzsa92dULpChWSqbDvQC3M8X3S9fdDcZoSRR",
  "key17": "eYpgCHbGJrTpMyHcu8CBYAkq1iVXLzGGV1Rhyj7iFu85hMVkjwSfBpNbqR9PKxouz3GBnHLQmorz7Wxk4fBZUnT",
  "key18": "1QLjZcoZRF4ay3RZaApxzCKfhH7UzPnr3Xow5jCnauURfWFKTQufxJikgMkgiRBa66fDDbN91cycbURoTWb3Di1",
  "key19": "4gca7BBpNuXKhZybSdKFdTaTWjWYYYLg8S3XsPb4ZaH7LxEgqpHvf8ygcYdrQVSMP637H5U9c5maYutKnMV26xxY",
  "key20": "38zsBHBiuvTGzX1DBYM87FJZmkPqTLYfwQ2wsPESDYjpjWzscoRmwSw4RRyLDCYxsqJ8LPcrBYYg64Quxey7NtE7",
  "key21": "5reTwgwHJzs2VRQyyzdLSD6j5DNhyiWvve6p375CX7BTy6dQKTrLPviyp5Rwi2zeHkQWXEQ6JZpYvEGG6AfzVh1p",
  "key22": "28PoXxNaDumGbVwdigskk29DkRgJFZ6BiMMJPs4TS9tLmHzJryQjLz78JYTyAPQsXDJxMQEbPV4X352ZscoHQ8tW",
  "key23": "5SUTBNDeoXE9uh5iFa6XESTtGAYheFwPPxAcX8hcVykTNh2dfFTnwaqGcYNC9fKcaN73qLEh7HCYt3Rw7HQ8qf3V",
  "key24": "5JS4XACXDtK2ecAingaXX7SNdLPnmBddWGDWSxHuWumhwDHTrhsm7VTw7dEAxG8tjLAbftemgichhY5RHQo4cwib",
  "key25": "53V6RBW4JY9GHHw5Tjuezuhg2z5E6PMMcka4ya6dbWvoBeooagMdxLn7oKAiad5u211uqNHouz5GKGCgTFN1Qjzw",
  "key26": "4k7FibuXuCUzXZQ19Pi6Eydyk9RhM1SStu24Rfm6p241jTYwcTYRXdWUgGrDgmc4jNRe7wMjV9SxB7e1onYfdm8Q",
  "key27": "5wR43XDKQ1Jso3wpp22KK7riuNHAHDLoiWzzbbryVqwbWSrF7HqKbBFCdmuUHqaDR3DU46j6awyuwDBxoxK6NuGF",
  "key28": "4SwtXBShjuYDhjrWzxWNQqTD6KRfjwbdQqgkrNy633rt5ZsYe7k9HKvHzZ6PrucWEhmSpWL6r5kbePS9idkQtHRN",
  "key29": "4diUWV3nnRZk2XzC3zN4o3pEZ9eSJr7FgkD4TLZ315B6NxevJwPGhkhe2BBjLt6MeC2Y5CWbCwXTbamcwntJzKKt",
  "key30": "2J5V8rpKeY5Kd8zATRDrTiQqkh9PqhV9JUsEbsVt3Qj11w7DiLAmYTr4K53dSHci38vhS4mSPTNfT55Ud86iJXCn",
  "key31": "3DbmfJ7a5S54zYP8pGPHBTzkthf5XLVYCi6gkfxvN6Z4wdYeVSDQZEP833McXgAjSPKEu5DU32ZZLwgUbyWuGodc"
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
