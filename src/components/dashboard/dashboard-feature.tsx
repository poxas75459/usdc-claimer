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
    "5dkhVJgp2sQmBeu6TT9Qwcmy6ufbpYv7as5hoQqXoPXM8Gu8zeHsEG5K776ZPDBDAbUEr3XLXgdqgfoHqhMoSrxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QqYbN196VcPvsHSUTkVC6XLMGDp2UBen66fonCF31FyvcSEfdUnjqMY94D5eCLJ1cDFhiF9jRHP3hggXQpQQPQh",
  "key1": "g9Q8wa7sbcnWLizcv21aCxiU9Z4FkFLToUVkNjXhTrGNAMagMK48qRgkJphoqRS5vQ5t983Wda2Gngbr7Wqym3K",
  "key2": "3ECGajPX2Agt3LKzeWLHXP6kgi5oXykSvHrAs5Q4GyB6xeYNQgKnaqeer7337M1UtwxxdkEk9fzEpyqeZHHKYUwR",
  "key3": "2VjPnoWGW8bEHvWLnTjLs4Pzh1g9121ZWvTfoho67gLgAE1bLkZ3XRMttxNDiL2PKghanu64q7burUy3L7STRVe7",
  "key4": "51tT6UMtgekQyMgKhUf63nhVoeGhFLZtzcRniFsKG5voVcV97XckUgx2K2eigutt5A9RNBqvr1hyfiD9psQrzs9p",
  "key5": "4YsbVFdQnys4vAmLdGakFQmjFrc6kxy5JRH1uvxdjkD1Gvg9tC9xj1cyNxzkYSKor8nwBYgiPuwRDRdHNd3ymzsN",
  "key6": "3CYb7TR8GB6yGCzkYSRUXFCtDEi7tMEKYhV6PsYMYjs5zTRAXtM9wNQozGrM6DuWECFo2vbtwrv3RQ6jDGccy54z",
  "key7": "2BpQfX1cdZBpHtA9BfxMiye9B7uUtn8ghvzaZLre3NCEmc9y19H3Py6tmW3tH5g6Z5fyhgwhLb9uwjjQFipx6UCD",
  "key8": "2JrpESF5pD2FzPg41KEUFuMQGBftNCYUdNetAqVHGUqMV1952L6QKwpuNGbaWz3BjJWyvSYUGaHBF2or8dAe2SYg",
  "key9": "2avTcB8vAHSsdu5Tm1jUAgvgpDLj8kS8rwdCY1AFKv3vqAymocDM9x1hn8fRDTP1yx4zvokSoVrm1ZZHDoEFiEXW",
  "key10": "43ECF29LGoq8eSWTKF4uMBRKQ2hY9DNdyjYcx4gHk4xVBWtJAPBT5p8mk1mLmmaRNnQcQMVWEcBj5e2DzcNNLoHX",
  "key11": "3dkGQcChhWg4KLQgbhmxYRryWk17bfQDvk2fCUzgeKbvX4S1XNRS1E9NpsRQFBzBeSrtqzNzBQNtSHrB4owWm61W",
  "key12": "4hSzso4uZ7cFcodqmetZTwzoVjqeePYnYK5eSqRQvWNpKrpTm488zKB1KJUjYkfuCa1depRkiw96UWTw6feYGGH6",
  "key13": "2uGR1v379VgCA4JD4tJ1Y39LWD7TYcFZF5uwjLrFg8HZ8r2aSnKEMdrgcQsv1DS16UgDc1TL4vyMJTwu7V9XzxKY",
  "key14": "3AWg3Ac2j41eavFPim2hegvPowr1VyQNQWcdozBdFYScYmXfo87wd87sTCPKuoXq5rY4JyKKm42KTGZR5WDkWzkS",
  "key15": "3zQdjDCDVSZLXxmLfqEyDE1kesSxqKbVhjweD9ZKjcuD9L1S22m6cBqkuc4MmVVc8vYFvQ9fhSVyfvcbT1BSySCF",
  "key16": "49PLLuQWLNf3e7DnjcPxq9Gk3qvzGYGLAAEosXk8Ur6SKC5yofN7qVEmNcZvMT2pMZsAvZm4DvzG7tEnARWubJX9",
  "key17": "7Y56VKe7nWBWcVqAs61Tfz5qBoMRfoP8Dxto2aETsTrwR6TkAbSRbuBh1wh8vUBMUPytJ8E96RpdPFfaQEK5TsQ",
  "key18": "5nGEcpnzCxYgVRGTyytkycjAEmGYE9LoHYQj7E155JECMshs6DToNBowWRtQ7qQXisRXgvHusyqWp2x7QLz4BfD9",
  "key19": "4d6N15P375xLsdjDSKwXzQtVXBouECgj2CiurnjCxpatMdkkmfCuc5RA4VQPyTcohZxUBH6KtLop8az3FQ9NrhiY",
  "key20": "3Zgm1sWEwKzNg6JXj3dZhtTawrddvHGs7wKVq5xi8HhoVs31bFF9aq1JXA6YEQzfaK9JN3bNHyGH7R7qPN8PzY5t",
  "key21": "489qJf1zYc2mjucU3NE8bT4f2YjE6yDoVSKKCucjCoce6uCk4A5DUcFnBw8XYoEXpr3gupmTjdjnuTHd4VWFsCaL",
  "key22": "3q9ja6Jv1xmZLh9rfLE72Qrw1ovFQoP3CQroWSApJWWtb1Jk3FKrDxEKNkHxPJXzbTgpuaPGycxiWQczjh5sJbM3",
  "key23": "3dE96yb4uuJdFexaB6A6BxkXu7SK4LipztkNa3rkWGkuuKaW3nb2tQARREDdDShXtXAV5gyACzA6faVT47d1SgQg",
  "key24": "3wfQW1NcwMwXbHXvtJThSuFVkw9z7M6FngYAYALD5h3n8SGLdzz8VLAFFBYPtFACqFf7fKFFMYKZoKENRAVQPTS5",
  "key25": "5cWWbzUzc73WUfH6esZZJWL65UNXg4J3drcpb2qJyqpoQSPSqZu96UcZYh4AbwBwTVFzuqHNRZtysNJQFgLzoXuy",
  "key26": "4Fwm8ZH4LbGc4KXsJ4DDUzcX85n3PatXgHnPomB2osgyCcKh3DS6BaS3pNpZdRBpndJhoMvDgoSnbrdkuQCECbjY",
  "key27": "dqxjjHvh7rBjxviJAXthLsnHojzysdAW85TA9vPpd6DrQa4PcKEeiymwF31Y3ZjUfnDHPnKrUm3eV5gUDnLzru3",
  "key28": "3Y7X47GsFMs1GJB94JBK731TCh7PVVC64tQfHAqyb7tvxjK6kPnv7s5uL9h9WqwPFtBa4PqgPKVJXXhNJKQNzMjh",
  "key29": "4ZaiBsrQMGVpgesEEdyxpBhkx7QvGamdPn4q1iGDbegsNfJKxhGzE7YUubS7oaL4VqC4YbV4gTSnS7cYEjHxAWfm",
  "key30": "4YFLnGyFfXxQSfJBW9AzqbDugRL28ZcrkvxDn4FPi6LvYUvsbtBjnetEYhPpVz51Gc5yyAVGsfTPZuTwbTUQfq6Q",
  "key31": "4KHdpEr6w7ayU8vMnL5cbGA5qzHBJRSTCe2ASFBqU1FRDXJkpoVpXXjppzXbBfqetNK31HhjKWFwjfvmdaGdX92a",
  "key32": "34DFSSJSXXMP9Dc5GPfwyZ2kVcC8fnEfg8RieXq45TT3c6Ngq5iGY3ANUHFT4PFqZni5XCEHhHJpMSKXWkeMrQUU",
  "key33": "Uos7BDpdJM1Am3r6hbLoXEsCm7XsSAYZ4bHrizvD22V5UxsGNCeuiB9UiwyWQsoXnE7mvv9ffxYia9j6NXbNcxV",
  "key34": "bq3Xrc41nxZtpJRt7jydyaPUBUuPRgoyqCef8txLNAzpFx7yg8YZHq5VdA3rvBL5hRKzAP9FWWKrkx8GTiSNnh5",
  "key35": "4bmAqZTGxMm7aWTDCnCT6xCG29KrJWj8ZrowuGiVDPyx6wScUyfueGJDmjABY8kmrUT1BdHGhs4fvMzfmPKQQQbR",
  "key36": "2TNwHZjsifdwYmj5Xxf5VABucEChf3MWrj5bzHFdRCwMTFnM68ZChX4qfXEyo6CbEV96ZhL9BNku1rCm2bM2pVg4",
  "key37": "4kQbXj3u6xn9GoeEhSMXZsV9xkBnSs9j1tCVNB21h4E6cMgWMMBBy9oupu1eeTHSMvp3scLpv2C3wjnJuGQyfz3y",
  "key38": "kxsaxHt47UEA6ThLrjzAjtZGPkgLksY4nJztpH9cezfBQZRPna8ruwtyydLScASDgDnPkreJkJxbFX78cvdQL65",
  "key39": "4NkM8kC2bRb6WADnESXM8yaWfKpV2iJeYAzLgzmquXiA9zLGu8wYK8AAF9Jtsu5veez6B8ExFvyctgoRGFALhdDr",
  "key40": "243PAeMeiKWt9KaGH7tKXUmGseSdgkzVALJD7R61g3N8fvUPo9rHiQUKNvPXHiUDRYdasScpQf7dbcq3DkGpkqeq",
  "key41": "aUqn7YqzsNNeYpksSuD8acVwQgE8RiqABNcapK3nXaJUdGtRtsiEcD2Nm6JrmWRvyu5niXbbAzmTqgrouhUXwMg",
  "key42": "3VvCVg9Y6w4Uq9FqZfKWNRvco8iGNw66tJs65GEW8u9UfRxRXofNX6Nuxi9T8GpPozz6Yk5dnziv5DinTXbVv9tH",
  "key43": "5ntGMZRJGRT3wAq2yiiHuKaN9gq7KqhaMfLP6jtbAcv1ZtBJDzWwqciZbPm9VMaK6pNuQsLQDyMDgVZoSLkEsSFP"
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
