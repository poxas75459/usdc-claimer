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
    "5KpczADKVAUS96h7bUzoYMa4n8ZZrXfbAbe7eptNy4AawcwaN36FV7J1Y2TvmuC4F2yvEez78K3J32kuwQVbkbsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kaesHPMpdqtCTRNgiFGk8dwBYv7YtARfWHaeK1Jwi58Z6nNyK77AvMLAGWXhArZwsYKhTjecd47mi95LKpEYs1s",
  "key1": "3Hm2PPKkGbnL4gxhs2rGxxzC9agqPeJ39a9rx4yrWboPF7MXri7yZUedYJYH4i5i7LnBKd7yisEuA6xTQZFDBarY",
  "key2": "2GYHqhHsgwVga1ceACX1zxi1V58dcaCYNRrpFDeaNBPWgQjNdMwNHKqSycj4WhcHhsySyUNqUicNvhzr1PQCNNpv",
  "key3": "59JGT8YF2DEyzW5isBh5LZ34aQoiD2jFPEqfEmXc9yWPfcBv4N2nT9ytZUyHZ2yjLvwy94xPLNfK6bDpXbaoNMq3",
  "key4": "4ZqVLANFSRUK3QJm3dbyF1ctMjJrpLLBL8W6ENAweR389tfUbPYiqsak6se2XPxUcrTTcu3ov8wDzME52fi8zwtg",
  "key5": "4CETFXXfEqCCtCa9PWxCF3kokzo3pcSRJbguHUtMxppuhSTm6qJV2H9pwWCHQXSgXt9E5QMwYfgBYHEcrYqdse3x",
  "key6": "2PMspWiBN1wv8XWXv8qJrrFbRWKJq9MRHth3V5w8KTo3o13kM6kziCaQt7Pmhed3FQvyQJKo4vMutmN5kcgDsJVi",
  "key7": "3XV1Qr6PFdmqghrT4bqCK5kbJwnYcdzG5HrVqwA3ixU5XGDZxFyS3i5fMNyU9dPhciy87ixaby8QWeJCxePrSY7",
  "key8": "268cXjZ77E41YZ95roJUW5xwdguXUbB8rmP2C6Dx5n5XkVf4gED5bQ6wA4Awvk8oee7Nh1ax34gWgLG33G2hm4dJ",
  "key9": "4q6DNNNaW2aZxid5322fm3bDrReFdAtc9YLGzBEiJk7L9K9RBy7u8eg6A7RoTQsXTpFXAjAaCUMA4GHhZZD83mvR",
  "key10": "4YdmUEstym2GLWr1ZDJnakneu4fyQNqL7cr3bH5bcjfTNPTFiuKqcLkaHAVgZBNYGrXTgLEvGGxuSo4G5Vuh2DUN",
  "key11": "3xZ5s5VBwrPPVqjxsxN9VqU6bKHEy2sW59SmwiedXkzQoUMCYaZgRTrq2daqrz8krjNJrwBRK9wikbiC3EwuLT95",
  "key12": "5yffe9529NK9nsd39636Efrm4uRcJTnJMPPHj4z34VcmYQbTHQcNDjJ4G9EGzoqnJyCc6A9nbujbfBBfgKFoCjEW",
  "key13": "46Z3Nqzkx1Wjfg5sUz1s5aonkN48v3xGtbteEugkFfFLk2e6uyMQcRcWoy8gcahfZASjj8tUVdGkPehc3AQx9CDi",
  "key14": "5uhGYH9DgS44hhPcbAhiFC8HfxXKPRuTuDkSAgFr7gyHd5Y8NNXoQkXFCeFBfwrH1wHRDBhC1TmHHTHE5ZyYibpH",
  "key15": "32GrXsK2Q5ZDmpNaBvzmhaSstF4Tgn2fNYgW5i5BXyfmL37jdo1akAPfWUuB3mFFVRy3bZTBvxXDw6i6gGJ9gfiY",
  "key16": "3Lt9AtNtZX3M42gujyytFvVjD5ynL3eND6jPqAW8GDtFr97hhtwgco32ssp9AWDzWNjFuuERc93gWdFNhRHYkyQv",
  "key17": "5JnxB6mPAKjdcnh2UQhDXiTmS6fwgCHWXMuLq9h9tgMy7vPJork8mUrHT82EFrTct5WvVpNtznibZpm7cATaT1pK",
  "key18": "4FhvoimvM6WsjmaJNVA4rXhwoxRXFRm9EWmmGaHDsEBStFt1yJL9mNegRkmWL8qYqBuktSofj7CYLWVhrWjc9K6C",
  "key19": "5V8SS2r9KrQATLtc1iXXMvwgzVZPsab7cq6615GBw8Wz4xfU4ewqByiUSCvFSZ3uHHd2Wn3MgTcJLXY3fLPsRG3F",
  "key20": "LuxYTi475YyaDs5cpQUuMyx4PrBHueRoTuzYYKreAuG418MVh9hrz9HPCP2ULVnqmw9cJoGzaNGno7CACKycEpZ",
  "key21": "43JnbiFKwnzJEPqBUtjUmjnFJPwBRFwy48HjGu2mQ3irQyZxSdjEsxoLmzxS4asQk2nz4M2pQEEZjXm49JCZde9T",
  "key22": "yCWfEuase2NdoYb8ebVjdd5ifEbaojFyZGmx2mPaVDYER5phjTfiwXUJDBFkePmTBDXTGxA7xuHyDzsJzQ7GGss",
  "key23": "27ZJDZ27NVLGUz3MzFXArKUyy2nb4x2qT4m1H7MfHtg58apBKVAUShfR6WqyrYHNxYLu7MPLwkAi4bsJqdu7tN3P",
  "key24": "ZxK3a9AopCV4Zh3QsNxFvQJXGPyWwnFJvpJ3Ju9jY5KTvPPV4Ui1JvZW4YBWwvzYwsT3SPTsBpQaN7cQ3KMyW3N",
  "key25": "Lrd1dnMMb6g1xeWy3ZafY3RvWFizaEtGgfRjyRy4dFjo76Sd8yWkjajvk6Kvy6zxiNsjGKRjpggvdNNdLHyLU8o",
  "key26": "4hqpsrYhX6xGi9DdNT6cKnR6RhySaPY1EsrAUcM8BYfADBGK9j5n3JmG2cm8x381pPZzndyLnaACL8V6aVRGx7xD",
  "key27": "4M5gBKbiCcYy6zLruNAiTEnJEv8PnhVSceqtWAKRew6pUpowp6gfSJY7ghWeFvxYrZxwm2HyLkdfKzVGZqUiF2gs",
  "key28": "kG4qrsnGRBY9kUppyrVodEHahWUZxrJMkwdzUKuCvsCtMstcaY96iZNnqfR7imUHDnWDPKNxFHRbqvHb6FNhsoM",
  "key29": "4ioNQ1NLdebp1BwFW8iLWvaN8Vmq6BZeZB3YvoraYdp7C86VwRcUbWux315fEo747b2ddJdkpLJcxN863vnwYTfA",
  "key30": "2GDA72avCjrKwyRmQrQwJPEbEM3D2y7HZrCAacgj6atYbakQpRsh4kHn4VGTi1xD9qyobZotsugM67yQQjp8uGGt",
  "key31": "2AJG2KqofSqJMPgRhDbB8aoBNeYvniA7wf8ayxZXSXb1LLoypg1p8sbgoZPe5L1QdotritgzchKZKSkmYKzX3Y7Q",
  "key32": "3RLaUqsTcqDgPewSArNYf3AUqfrDbL3efmWMhUoMLZynGBx7WztCPjWKK8Z6oC4Bw1Z2sdJxe2G8V49fVsV3j8zU",
  "key33": "3ebMSAyDWje3BAFpzfRyvuvvToR6crwcqL2EPoQX6qZZoswtdwoYjMPsjjUYdJYeaPjBKfR3jpyJzVjtbjnXcM59",
  "key34": "3Ne5LR2Rgwda3E1Kbfo7C61DWBxT9EBW1MDkk3z9npSXE5qPdn2QqPhVFKjVAeGJmqrRo65hp1mhwTD3F2ruuX5z",
  "key35": "65H43GikUMtJ58xsUEhVi9kcUwEES3wr6RXGVLyWk5hMbYWHgcoWhnGDp14DVpWgx5VHQ6MGcz5TvhoYzhdiR2xy",
  "key36": "QCbWu5LBGDKc1scrL71XQYm7e5ks8oGgSgxGskPHEZsH5kU1AJ49ujGa5iqpNsS6t8wSjtjE6vQUGPBvwksJSkM",
  "key37": "3bvErjYoEgo1DuoXVHtpfKpQboAoAYvaow57dtf6v4cgGCbH1wH4gyS35NQ3772yVWdzx43zmyBw6vP881o1MM8F",
  "key38": "2ijhMfdtr5soE9m4rVMCj5fGWJEa78raMRBLFJohCBYGC1YDMP7jrnJZs9gscdzV3P7y7P5EE1FxPidK5vb8Sesi",
  "key39": "38SRYTQUGohwVtF9cNEQqyPM9dB3EYKYNVKDug3pGmNaDRA9LVrcAZVF1iwdF5KFneTgfXCWyGVRgx23ra5C6EqD",
  "key40": "2FWdJgcExTJ6XL7oeHpWA3YUMH9seLeJ1uzvDwVsNCQNwCvtrsyswKgL2FEFDvAt3Yt9D2o33KaF9JJwx7Kv99x9",
  "key41": "3MR7FhEohic6nE7ppsG8ckofek3k7KH4QKNzYTWCmUUgZvtYVXvWcRag8a9RFjRsRvaXBuhcvGNtYj5JpuXtryia",
  "key42": "2PhvfgtxgyUgaYMUPUY1RfYLoFPSP69pHpcQ9GhFeP8a2sKuoRK7DjZGaGpCfJ5VeAfaw9YNX2PQVbyfB5KKCJ3X",
  "key43": "HHmy8y2ab44Be9V69f8dqXEczqUSXdV9Ljcb5EKjeSNm6LSPiAJfL3MaoyWaHZLZhiQumgxk2GZ4oSJzCTmLhUs",
  "key44": "5VBbub9qcerTjf7ftxfi3CMH44uXiZrKUHgQfiNwn5CPXcUnKuGaC2ieAVqZPq6rPTrWSL6HKTAgUWPhBUSiGNMQ",
  "key45": "224FFuhg7rFDkgpsBtvUrnwPe4oaARbY7wt9MJFejVezVajCa6LsBfmTqQWSGcAWgBh8vGcKW9ku3s73BwkJupQG",
  "key46": "4f6RoSPZ7ossgDYULFiunY8gLCR77UtqbcEQ2Mwa39FYAdWpJZmh4kisDaX5Qx2GyJRd6x4fUvvT4qmTgquDM7mr"
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
