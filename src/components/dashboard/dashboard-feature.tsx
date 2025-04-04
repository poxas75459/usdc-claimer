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
    "5iVBimWGT395B74GC7GaYDgNNUZ3ybQ3TdRu5H8a5QUcNnLsUAnphcRs4JpxsLTr8AyNyLLogiBwyKdWXnGg8WPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pW2dAcQqpmunQqa2CvBkuwojxkvPqKSDRoGqurfTcSUEvej98fN63D9q6uroZjFnfU6oYgGsmzvJMqCMmhEEMtw",
  "key1": "5cDzuuNCcxcjv4AwDrnmU5ngKCt518iRQtHDoWAkHvMy4DDjTfGnZdUz8N4t1bcAJRkvBNRaxStgnuyJUVnqB6uY",
  "key2": "3Ci4uDsRiAyRPbot39Rinp2G88nbRyW7SbZ7KTq1LQyNjAB7DTayTHibSH7JNZKykFwFuViksjuF9brKvkSkVc6k",
  "key3": "31N62QAUgKPkzTZzmeWVcVmdLFitXjvc4HmTBLz3yiwoNq9n5XwyAUTGKHirZGptAyW3cXhD3Pz98k2YuUDvUca5",
  "key4": "3u7ijitXMxEbt4Q6ReVXzPzg6bxCYmjkjFNj6iPEDg7kEi2aXkpC7UyzSHGwmHaTKuFgTo1bF3ByRqySzpbeaDvN",
  "key5": "6rEntHhe2S6rphv8v27Fd9MtKg6htfcHCYUPWhMswe3bBjVJ56D3uxmEhbCAEoMsEk9rtgzgWFhtBDwXcyxUbao",
  "key6": "37k8oKpcwET2W6Fe5USD2YBUwkL3khaXFuVNZXBpsPHJsUF4qNw3XFx1qCyqPvphjzT9qZGvaiUftvn4VTKJda5n",
  "key7": "JWp9FRVw2BpofHqDkFuhQe9dyX1fpsnAkpDMCe4XRxBrjrw2WnC7yo3HExNUypsBB2QUN8GVRzS8CFCtKh6HoxV",
  "key8": "5c67c5muK4h2AYqEDWEoidrqkaqz28ZuiPKNw8qr3EVTKmiBakooUvRWALXxhnSRRTXa5wia4UGsUMWt84K8N8Yw",
  "key9": "3eAoTa4dgCLKRBpmmLCWYgg1HuiX5LhJ5MYVuViL9G68Tg8DTdKR4rVEpiFftXYr6dcdFifqq5eicR4tRYXRpaJv",
  "key10": "5HSMV8YBuTF9GBeAF2nvr2bEKz8cNs6t5r2r7Cd61CejSifRKMZoTYJ81CmcTksWR43pGRC3tGxkJFdgWGCh8hFS",
  "key11": "5UBFiG6hWnhA8Px2K7qk1NGfrwESvMQ4vseT377v5w7GhdUxGbzF8VkPXCKEvdGH3VcCgYMkHVXnSoQ6Ns9499tE",
  "key12": "3L1x8xbnTJNGtCGqCq8tFeqy8U6YZkucz3BLXMwZBAViatmzReYy7YbDDWiqZCZDRqsCLeU5u2KszLYZsYuqe5fS",
  "key13": "1RKxojieYdgSpohoUJMw4yLrtpXcyfFXgmMsZcpdHZYHWSPkgxygpKJeWwyHcdi1a4H5wAwmGsSmVr8RxthvBnV",
  "key14": "48QsKFqrKh51gFPofsNSqpx3LtJeGT7SEXgWtGNcJMcxuUY3iJ6sHEHinVFwJ12xuJRuT5ZnH72QMaWWjS5qv1pA",
  "key15": "3wbTvVawjYHgQKngAkgAFE7rFiVvasqD33DU426VSxiHAEt338U6h2uhCXrTn7bJ5T1vr8nwYEmCWSNdE3FZ8ypv",
  "key16": "4ZoVXqk4N9G8Df8UBwSiu9v1rwaDcNzEbRQzvTumhgwXzdy9Y9Q726NTUCjQ1ZcQh41ZmxM9Rruqj6x5inL6iE7x",
  "key17": "3PHVngmacC29cqeFZ8ri7W647nmoboPQYrttFxkayRWe7jaSRybNdq6wsbWhT2HXsvYZfLta9FQ91vK9nyiDHdaJ",
  "key18": "5BkeTGuPRCwxkNtruCUX8YrhYxJ5H9XqttxASYzf9r6D1KDWCNRgeerbRN9MoBnLHh3HkdD6QGv1cnfaMZ9QAkLj",
  "key19": "3wcE2i1jhGjyzjKoChPsQmaAkoKnfkjfHF3nJi6TyEPGymzvos9Hwsru2wGjBdxcRSA4utzgbwa36TnpWmeb833P",
  "key20": "5Di2T2KPgCDWp2xAt7nFmddA5Tcg8Ydb555q4g9959NJYPVK8uzZ1yY1Q3RxdzayqtKZwuxHGiWXX7UppR2ByGSY",
  "key21": "3kZV8rgcoqBy2F4oRHLpxkE365ntsJNNnpWFGuU8VbKaAgotAB7u9PP9NnhUnJc5RSgP2CSLobGKVXwrNvedtbva",
  "key22": "5e2h5RJ6z39qMSr7oMsv726qXsQSigBM4UdxwH9TJdJaoiPeaqs4awE8qhh3XLfLdgHKcqE5Cq46TrmnxXKhPtac",
  "key23": "5jssHtHPj3FifuuZicSi3wmM28WJ9aGdRGaHqkYo72iSKR1djjc8CA6xR6bS78DnZCHa3ioRob9Y5h8FiJNnmDFC",
  "key24": "57WjMxzh2udVHubXvx15YxHRFD6E26tgMinvvcjvcst4aFgfj5LmByHBazcQbac9Q4zkdTvMTwg4xhgQrr71M96a",
  "key25": "2hzpdZrgwsek5ZaxurWhYozwt2FaMjdsphdESYqTN68PzdrVhkfkvdJvCJEfpRLY2EKiMZpG1TpNeyUDXDCBHZb2",
  "key26": "4R93WgVy6NK2wm4m7G4LAay8Bmn8FSH8a9BeSJLmJbDknojBScQc9EbiuLzwZUXgPTfNTaydfY9p8C82J9C7ZDD2",
  "key27": "2GSTRdHYDgmQ2sfuYujaaQmRnD4vP1vSYiz8F1UBqof68yZo6cAT8au2yHsWrtV7pPpYDLtXvXsYLaGfSHZczC2Z",
  "key28": "2S6dXUoVhmJGMAjtw4LDHzjiY8aV7QPcpvZBUV98QB2rwHdiTBvwdGrWqA9rHawnx2QoFDPTbvPkCYkoGnfUngZP",
  "key29": "5Lg6TUXmxjTcobHo3fWfQMCVswBGngzB3SaHaAQenptAiLArWQiDuLKB5xxUAeso3jcthdALa62SciN7yuafvKR7",
  "key30": "5E4yAAWq4WiAnqQNJ7ZWi3KH8ru4FAyv1L4os4ogexh7zHkrYf2xsC7VNtGGzKBXfTWG7FS3JgwZKYwUhQeLMpFh",
  "key31": "428GvGPHqtEZm4qAtnDsDJtD6EFdNSdfNJByoouTPjySBXR1AgdA5LyCNHjpjjn8bs8LHgnLV7VhHTd1oXLKdNSf",
  "key32": "28j3C2BDK79e2sLedbLVgWWwrFUAJVYBnsDE1r1v8fYd5UENFYjkTojcHMBNpDrtfk7X4tbgYyWJhe7wUeDt6DMK",
  "key33": "2D8CNNgDmBktVf617tQcarXRrRBLfukKshKHNLBVUDoQcQNteEyCHbmY78CEqAJFpbkkjynvjDTmt6xnoQLvLCvK",
  "key34": "68FgRErWSnAqmPJXLFZYpzT6FCAF5PzuKThMhDnvkcWxDzsW2uubh8LkXwuH9m5iQEVjrGDyqHnczieYKLXoUTx",
  "key35": "4BvUf35zaavDvorJ2YSXWPbWJ8HPn3HZgtuiUSkuhrnE43kcJPogymaFoaoRnN5vsL4ioUXCzanA98giVoMZYkyM",
  "key36": "4CAZMo2nm5pMXF6a4qCBhKeErD2NW3iHuyaRhv22doEED2MeCKdRH61e75eJLkBGvtfZ9hGKrvcoet7Nhb81EmtD",
  "key37": "4r53cA6uvNikHs5osCvBCXtoNmjD15tpfWoeL8nod3Zg2XdZmtmCf54Jtyydsxnr9nyWSB2CXiNKXpJozdQTuHr",
  "key38": "5kFvexi9UWSWKGFuBmPpuajn1GjaUH74aGETSQx4VsdUCjSJphWL5rtydSM6MF2qZwZEmCNbWYQVjkQuXY8zpDX2"
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
