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
    "3barJV2ENu4UpCTHGGgMVdzJUdrLHStPQaSZXpjj1LcAAS6EFANBTqHGdHBytcEQaS83EfCyhbpjbWxmiQQFrcJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ugr6oZenRhYmdmdhP1aS9n4JGoNNjqPduKE8y98QwehdwHUNd75qDysEp1MyWzaiiTa1VHqsn8xKDsJ8iCuE8KD",
  "key1": "3urrjBXGs6b3JSTFpuY7QygLDp6gpxY8pRDxaD35bMwkfJicJCXRSaz2qynYvWZAy97ysLfiBT3NbRrQ6ZqZs4Sy",
  "key2": "2QcubUyPWupvRWjrY6XK3yjjA8jBCNHuheZXwSS4bbiviXQS9unMXsLdWccvH5HwbTUEWhdFBojK82g4wgyujL4M",
  "key3": "2Ywen9xmcsG9y4WkHRvxppAo1cPUvFXrSFLSARRipaJpDP6KZjtTsYiQ4qKv3zVSoWWoACM8f33Qu8DpzmSwau79",
  "key4": "2frGiB3MTrmd4d8HeRMVzjApTriMQp5rUj6bwWhdAJ9qwhp3DPQsX5X5qoHWQ7szh1GGqdwezj1m5Wuk3SRTg6b5",
  "key5": "4SPm8Qk9ydhCmeWshQefHdWTq3JF5bsjZ4f2YC4pjkrA7h5JzVTu4iCrDZZjvBEZEQjrPH8pYLE7cTXoCfSeaHjR",
  "key6": "3MpQQCQJZ5KY1gGrrEtVXCKZ6jWiCVBrpkCP33GkeyNtxfdXvEocJ9UvGcDwWadJjv69HaUPABPm4wSn8XsXNWPR",
  "key7": "2mxJnbgAME8cg8jxtScq2jeh1C8EcN7tPSoBnqtudSmqcpn4RbDXz8w5Sjo4sN6j4YPmti1y3bQmnXD2zWuyw2RN",
  "key8": "zGj4rBNokoFxy18JAq2LMMBcf4fQFaYGV48bZMdcpcGiFWiGQxgq6qz2dLN5AAq1MK1c8pVVEdxdX49fC7BZNgZ",
  "key9": "5ZHU5DRxXQpcCpTHekrQQ49TzjkmzHeoScdNJJiETGwS3Z8TWSmFBCLfsve9hVtSBViapqeuT4P19oHgPLEobCd6",
  "key10": "4QPtChr79Jv8jFBGJQ33kcoonqRKxixDNnc2zCVB6MYvMTM6uHAdYfmATLH5CQhUHqBVdfLLW91uSUiRAy7DMTTX",
  "key11": "MumsvoygajEWmvMm1vdHBkxRC4Nt7U2HJgg2Gv5bLd6d83fzuMC8HYMpwo4GrZzEh9ND9XWqEyekSc96R56HSec",
  "key12": "2WCP5bn3wRCq1gK2Uoz8xJ8gCVEE4dyp9KJqwPiLCGD5V2iwxYczfDHWkUkLSk4ZwczVykkD5Nhxw8vbnKPr2q7x",
  "key13": "4ufyAC2xRJsBHtHzZWWxR77SD3De66WAXLaGM6xPVGEQStRzMKEDSp9ipu4wfjbMPwxuU8NzM8bt6Yjtff5SW6BU",
  "key14": "b2CgJ1ybDhNkniQpJzG8h54ErcQ942anWRWaSLw5N1q6c6ZSSuMPzLaXL1xVw57YggHf6aWdXtKaJbsBDYR8kq4",
  "key15": "4Y7XntrE1sw1RQtFrGxaR4b2ZVehNDWxCmVkhbjGcCvfKN2sGjYFBtyUEPk9aCiQTMuqfAnXxbtxsCtAZpEPUER8",
  "key16": "38m8guNUux4YSGdLPkwpJtVzFtTNL5JkJBSR2qsV7agD6nE8DtqiyTY9giSRc1DaHwJVW4mrFWXR9hzGvVCPzFAM",
  "key17": "3gwDzH6ZSdhQxSfaxhuN9KvAmcn7d8H59i6Kk771CP1r5jfkQV2isPgn3yGroXK84VmuaMrPAF2ZTzfiEugh9ZTa",
  "key18": "MUFEoNJi1Kezdaj2EfMdr9EwA2gHBcUFHSAqdzbYXNvEBjXPJpxKyVW4CSCH8sStCvCjZ9jYvFMtSiSFMn8yyWV",
  "key19": "3dP3jcZSFybQ8kq8KJK4mC9ggZjrUFnWcD1ZJmodBjoro4KbH62kJ8xHVB26ugUYk3d162NuoxbueBhJbALSYM7x",
  "key20": "quzsZcmoHmrCZHH3ygicpHyE3kkRJRhn2nKF17CZopAsD9RgVLWKqo6Ci5CetpRre5XNYo1JzX7L8KvGKRdtJeG",
  "key21": "4J4hciq86MpintRtajqqsXQXTto58BGaojFR87aGXKYKJJHT7u5sT2WHg5qFzMBKhGBaR6dS3EQRttabwviVdxRE",
  "key22": "2yEQJiR1xTHGpXmXogUuZwQzzxNgcvbVerpZ1suetxPbrtLcaio3eyS7GxMEknkeAgP7RBk9mb3XFQptRa7K2cu9",
  "key23": "4eND1u56Deq4Fp426e952xRUJ2MrguVAEVUJHK8k2ka9jTrbJkoJV4uRfFqTHNVroDqkocrj5r6xGi4W4BCVD9A2",
  "key24": "5UCrdFSL446vukvHeMKFH3YdzTFZjKBkuidszutuaT33z7qKBkJ8SCGieY2otTAcmzSm9uM5eDCohPkpALZH1x87",
  "key25": "2ELALK9MZiKmrZV3TQc4LrAwzKPFpKbBAX2QJqKhEvuhLx3bmPevemiKc4dUKVJJWnYwqmNW9YEgweeiAaFAyHp5",
  "key26": "5trSQoJJuXisz6ynz9mamETPUoLGfkpaLYazVKvkYamcNHhiDh35dhJ9LMsyYd9T4e7gCx1aonKD2Krxt3KS9WZ2",
  "key27": "5cEdGmTK5VCywqgzzcUomnZGb8SPsaX8CVwM8n3xCjP3Bv4XQ5u7cUa7qENpASQ6yi6dnyy86uJnQUAEYbckiKVg",
  "key28": "vqVrTuzH5TJNwuUMSv5PayAKvuGR2WDKpBVURZcxHYbonSBopw5eyhyAzLk5RhCkuTwzkxm7wifAquMr81zcH6b",
  "key29": "35gKH9j9RzB1b9gaUd3sTcGCybeDsRwfqmZETEeGwGFRV79rZ2FC2iuS4z3QFEdwbHkpV95YezrttvcrbnQCdRRu",
  "key30": "2xJLxQcSwFj5QAwy9gRCbXgkrGHDoxTzGsfXJkdJ3AtcEeHjb7TXN1XKqr3WJ5DEJirU4nbzKpzN883ETh7TNq4F",
  "key31": "64wjm8RZMNNmxbbHetZ8WrVk1shitcjJbxugN2vmNnp6LszgCg72XvQYwD34H6pBawE76ycmAot7ES65LzB9t9pY",
  "key32": "4kEpfNPxZBr4q3bwEnhrjo8bxoAprxEHLgvhgsD7nscH75sH52AbSB8pjrXrPthFJu5wEs9ejpBCUAdpm1CsEHN",
  "key33": "2LgBrYRH4FYkfNxsG5qqDoyJtb4d5KZ6QYosk1SKXwKsSVRKTHynUnXyCh8M3529xEpzPZrQDA2CCqP8yreRSQHA"
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
