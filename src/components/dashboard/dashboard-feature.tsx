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
    "4Q3CxPLTLwEVHkuSpDHNvfKDdkEwgs98ZLbxD18UtbpZZb4Z4ty9gEih7CaZww4nXmDkVocdZk39L4WvXu81P1W7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cuwdp634td5ucrF71T1TYovJ94ZKvgaQ3KbdZnHKYHt1d2gFgbAXwkbVc4a5xaQpQ18NF2D1Gyr8ZSTMJ7obi4Y",
  "key1": "2gp2e4Jdsb1UgjgS89KuxpTJ2UActVcVu7uK7V27XhwjEaqYsFN6fA2z93bPqsErxhEqzHYuAPtZupUfCUwFcNKj",
  "key2": "3rYxCDB2fo3FE17uLkwaXqVb5wb8hJfuvnubPrVZyj25Niwrmqoscu6naFaWcowhCjvnNPYa5gZwzoD4wVahg6pm",
  "key3": "4kV26NMytuyQAQdJkyCodjfLvrhZ5gtG3Qarkf8EkNszaseYK6mqePeqynqQqHCFedoNjCuBPUACFFKFArZPCZWh",
  "key4": "4BUFyHjBmkwR1mTqN2BAr4pMWms5Ps9ABHZhigcjLrqmBBzShm4w57NYvZueZ4dG3Zu9PyFEhSgojYmatuQC4aSh",
  "key5": "3YBxZ2BjaJw2UzCNjyFSVATkUYpKP5wr4qiDrdjkwGmhCxcP6azesUcaPVSQbSQddtbgf3AaEUMGWxiuPyAspPS8",
  "key6": "3Sxf645SkCqMe7DZ9sK3kjwBPV7iwfmi5YVjp1vp5kMQ8DN4aCeG6fsytRSkhvBbFbVhR9Ub2YpSe4ZLVzGm3xrS",
  "key7": "5yoLHuDiVjLqnDRYV6oEmVCnM9mwsGj1Ju7X7496z8QXjgURKxuRkXqQXDWz1zFQbPLGEtQ3DNwEKxx4KmoVXHJw",
  "key8": "2DosaWzKnug8FpvT76qKayqBwRztqvLhCMv1cQoFBytaLu1a76MjDMENhyZfayk3MAWDHhSTUQ5fNLQvLZr9fz9Y",
  "key9": "2nY7C931rfHpXjCtpaGexUwj6BQ3WRMr3ynarfEzh7xbqj3nG3yJPtg3yYsFcXrw9sAXW7DMevPmVRgNfSxu3Hmf",
  "key10": "2TKr4qTSU3SMgCwaF8Qv4jMvFbCUQMEguEvdyRZqpgnYTLkjezeE4bS3HdRvhwZpdEnDiiQt1ptd5tXeBhG2UPRf",
  "key11": "qGYdLBcqqogYdDZ3CV31NUQwKx6yf7eyTPDVKJ6cB1ADujWFcDksfAqFKjgGmGZcg1AZ5cNHyaZSirmTi5yPo57",
  "key12": "2B2EjUPuFSAk54r2GTKxQhg4Ti5qwZ6TFSygRYq5vbqvsWewVAyL12aaF7arLrHPitFnGZA3pH5MFwL1CiYHffSD",
  "key13": "4cHgGfoa5HSoDtK54u1h6Fkm375nhCXFhJtgBGyaaT4285qwZnHc7pcBmmGEfHBWjF68L63XDnMQ8KR3YctL839G",
  "key14": "4Si1f2zgeuiMRX6F4p8kvH41TFKpmgBrFmbEHb6AAAKJbUYmAtwHqfVi4dR8S1dUSMS9LbjHS513ALv39jiM3gQv",
  "key15": "2HHmgmYnydYSuejgxzAqvzWie7vTkDCXwWeXa2Dhh8za3iBxSVi3uPvPZWsuoTsW1HKvDyq5fbHB4DrHY6CE9gjp",
  "key16": "44j3qJhQY7j2ZRmLZJFyreJJD45ZeXseBG414FwX3JuDA5xuum8WM3CJ4oXMdJEXU4hmMACgYeHCHGEaCPDzrM73",
  "key17": "NbUqaWW5sPQpP1GTXcr3xgKbEmLRDjKJoqH3FhV2aNMWpqgyJXcqJFuMTR9poxSpzhgoCQvr8z3YTFKZAvyJ2bk",
  "key18": "4kHrtZRKZBtvtPCAAGXVLApFPty2LcjemKJnsCUmb3Y5nbeSu6Ujf1qBHeNBUaJbtiQuPCXnE9GEVfHFD2R2Rxsu",
  "key19": "pUGqGXNtn27nkN2M5219NUxzFSK6Uu8yY8HpssyXNGXDJEJzjaif7N3QP4Abm1XFpg8eC6kQZY2kJoFHFVNNdj9",
  "key20": "2goM61moQKj7kLtQiqdaZ83Zv5YDYW2PEdACGvAbmiEXFDXKYnv7pbXCJ5hFGd7wbcmi7BpUVzbeVD5eKTkRKtmo",
  "key21": "2wpbdnhj5qYopxqfQGmaKEJxPnPTqFukQQvAibvsenQWCkmoU9U2VaetyqEdzi6WZWv4ob5UBE8N4BPwjzcEjoox",
  "key22": "3QnZHNgFBt2T2yZkM7WySUNHix9nJGenn2WW21UXLQSEBxLgKWU4yE1A5qDemo7E7FLhz21zgQPgjky6EUZCcTgm",
  "key23": "5givGtVLKYGHw6QCgyt8iCMCtTMPSpohBPLwGS9x3sUde6ThVeub6Qr78pu997yNiQjSKkEGcgV9HunCCSax2G2S",
  "key24": "4tUV3HmRnNTsm6yXpfQ9oEYRa5kgy4ZrAhbEiTtyC2fmYGkbmtbFhSJRYJtn2vL7bH6r6q1W5d1TkJysL1tfvXf1",
  "key25": "4EujjnYrDu5eB4q7cqjJrsCKywJhvwqk8GoJDFjr4BWmxYdEp4CQE18XXR26ijfQyZ8U59awUXNvMYvmn142YE7T",
  "key26": "3nkAcmKn7vDh8hqCtHJTmgFrsxp4JrZytZXa85hjQqwC2KvNyUNcQVgXfnX9fuimCktcKxpcBFFGXhKekcE1pzDD",
  "key27": "3TK1yzv7yTo14SV9USyW26dwC8rP7JjZuyhRtyy86Ak7ykzoBpqGDFV6Xti7ujaGXXzweBDsfukdC8YMPdUa5H3B",
  "key28": "23SgZT3SmruScNYQBqAhYYm6J9hhAinardwER91vd1wnjQEVoS7WuUuRNsQKTHEFgUZgS2cZYp57yM5EnxAAn8Qn",
  "key29": "2HC8iytQ1tDtuXdUp8iRP3uVWr5t8H3r3oUSBkFudHZHGsRumEuMsEY3Za8J4HbEMmb7TZ42T1eaBXdUqAkYJo7K",
  "key30": "22tY5v4x5JfMug9PXX6JbHsM5w544CGma5TvzrWG36DTCJRRMTSjn8w5eoAJnj5mSJNPyhRr3HM7kvRrF8joM5XZ",
  "key31": "4GxmpW3t8EitYGKxC3jcFZ8AGKoipGD3Ac6xuhQL7VYw6YvYd2jxYiagHFCHMCDK5KRubhihnLw97JvVWQ1LS6V4",
  "key32": "62Y2859rE7hygbBRGt2fyzPxopcD7izAr6XZza3VxMA43b1xzT8q8enoAh3fks3H56UNQ3nFzvh8TcVpxPrFLT72",
  "key33": "5kRiPgvM4dSKrKwoYLRGZSXHiAuB5rvU9gPPGdn6q4SfABiGFaYGrCeaT2NqvUg9TygMXM5qq2Hffpx2LvqVTuFg",
  "key34": "3i9QCkkdVD6en1rJdkD3JBUSZLzeE2JNrd1Avz83RsMagwziRgJ3fdz3R633jEQtAuCRRiCkvWuS9aaodJNU1h2t",
  "key35": "3sXJ2NGxjptrQH6aSRszbKvNP1JN951jWdbND1DFp3hbjfoNfkaBERSsWYMVnuruFM9c9fmRDkDEL63enfvjq9Tv",
  "key36": "3L4jMvsRtdqiffsbpbPv9T1hR79PhBRgkkf7VsSs9iBiC7BA6CB9ULZ7ee3oRzsPcUWsM6sCYbiiPzbs3gnG8n1",
  "key37": "4nHwZPSqXyoUTyKgVVktxLXEEXNtTAXCf9eCbq39m4AQ4zZ5udvm2eXEiJU4M5NGtf592rHXwq2ooJZWre7NqDT1"
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
