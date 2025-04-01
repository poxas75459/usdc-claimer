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
    "4NGkNNCL7r5rdESzXhvq9y4L5UA1ygDq5zS5gYoMkH7MhDDjv1FW7FhrZwskpaMCzVNXdPBUbZz4kjKjpcJPYY8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ed2G2isweuA8RXUthWdhAJ6jW7Sct55QP1373N6ANBcGyaeC6WAMf59gNTLvi8wDNqXCkF78wbYyZq1dhWk5ZBC",
  "key1": "BQC3fofR9XGfobtvJDyDf3Ew64T7KTtjZn7uA37RvEzDr61kB41uiFth1AgterpAxhHG4q9VRYdQ6A6cU61PTAC",
  "key2": "3c8pcJqkzYHL52AfckPeektg4Hgc813JWkAdxRxXdSAWouFGXc9CocxopQtBLGeGidnaNL9Q4hWUXaEebJ9eFmyZ",
  "key3": "4JmcGeJJGAiuGmUYD2oVapAkkQJio8KGyvow2zLpoWEY7DjhSM9TT9nwmpgqzHPjk5k9zQSscHs5bBuHHCQHQ2EA",
  "key4": "4E227xFKzMvm1WPyXdmDsTBYv7vSrp4PUHz79hKiXPz8ZABqgGifEiuoEQQjKHm2cEjAo9gZAgAVsaxs3x1ihzJK",
  "key5": "5H3N2bQKceXT4Z8nnBsdrvgVh5yrfmGeiRWEGRy5nbAS643gQmZY6ooXvao4jtNkWavBRZpN3idnEo8ZCEKn8EAT",
  "key6": "qBhfra86uTcLdXJZb91mYjULsvZkTd7kB5doAqKaaHvoQJMxKCt6r1B4BKNT8i53c6362MsqaV8K9pR8NM1YXyQ",
  "key7": "3dukggsqeCALdricWKtHHCnLMx3F1HxZ6ah4W8yQvArPN2cj68WZRsuHYz66p6EXcB6FJZQwQBT37cogtdt6Dokr",
  "key8": "61MouTAhDokww7djFdNH6CxtST9EAPnTDUKiGJffntZbKQcyUbF8CjuQQCUgjsiVfmRwtg3v6nCpBjCB3HaNoACV",
  "key9": "55RMDLuDHioS2zQjtaGS8NrcqJ551tDBJZKENM5fKVak5EKm1tArQrnF7jcuDaLLdB3uQocQvGK8dgvtwXZ9zCYc",
  "key10": "3tziUvvLL2QJDfXChQ79tzkQiUeYERcQQbkAycQK1PR7hoYk5hnCfMjXa83N1Z5pDNXnymwLtk1aUoZYcMNAfGNp",
  "key11": "2qh1EnMiM7GDtiMSvL2AjrM15WRUNzH9wJYjCW6xskmVLjyAUDTFSYGDWSZLyqo7ogWA1cDnWqo8c9si7iiqeas4",
  "key12": "32ywBSpV7w51nTqdvKYSVcYmqmUNSmqy4PQZF6oD4JsVfVJqS8yNcJzKuZ5sD9DZbjwK5KCY3Y1TBJ1SS4BC17rM",
  "key13": "2AxvHxUQaqMEsKKjN5iaUGrBKnd9MtvTTro5ggCNHtCCuotvu4EHmVnxBiteB4nVrDhZuLzeuTLv2Myvbq8M8fjV",
  "key14": "58wqTFQtXNLAtHQNKEaptKGuhyqoQbJNKYvWvHbSSnCGoyegugdwQrqoZVL2ZNVHHRXYoJXsv5jBqptgpf3L6WMp",
  "key15": "io5N1QR18GACbWF6ZqTCzseMx42jpH2JFxvNyvE7wjS3USJcNUwZ5DJoMFt9Gt9X2b3SgxeC8Y9fjsXT42oUZku",
  "key16": "4DgNL7Ar86A9hv3mDuanBuXirferdntcUpWW5UgB3HpUNsu9txvkS3oLVx29EV9VYVRDW4rAj8Wd2cyscj56N9n2",
  "key17": "zZaf8fr6LMRYTcmZpUmDtK5kTyGZK9bDWg36KMJqozdKnW17g7bQ7tUdPGvEpfE2KR2N4yuGMpYT146LeVYQ77v",
  "key18": "2pbzcXGzZdqw9quVkmqW99KFbhHpFxGrNT9tFQbmuWB5kTVJ4KdDwEQ8vXCcA4XyJrzh5srMYGWRZXe4JCPw6Ewg",
  "key19": "5YCTMswPqVnsy6rWrss6TmLbfyTdcFxmM3fnKPvJ2D4A3pJgJmWHnN86aCheSPuVrMWfRhB38E8LBA37NQmPASxS",
  "key20": "4gXaJECqMxREStspZvtk9ABJFvrPsQkCB1e74o4zmdgwbPQ5BVLiVy3PSkxeNTLbVwkVyK7XvMqGbvJqoeEPnp6W",
  "key21": "3o795RbEEFeTd6G3MwXTzWhPq31tmQALGTqZhENLr7uvm4QUoHz7eM76JECsoNjPsdaVbnV6riPzsvkk43RFQ4dP",
  "key22": "jqWdWqL9pViZC6gYT9jNGJ3meZEU8ntXzxMQgusrMkQGNe8wn6qfRwLNAPYCJEWsZAj6bgQUHqUH7h8uMtu9ka8",
  "key23": "2vzgctFy5e4FuoH7UK3fAqakh4KwpERZsfm27LEJBXZybgpmiUMPiSmj2gFrmrmk2WGJnf373ePMWiDTee7LSCtf",
  "key24": "fiV81PDZCFUYRhf2Zew8yQ5orAQupyqhHZirWo6AXo6ATfMbqAby3YxyE2MnQFBwocg9vHcmAD7fso8Yz9wFXe4",
  "key25": "3np1WnbXoozfuKk5eb9uz9pf4ekSuXhYYFFdb5ULaSVWsLmNanT6YbxPPcbqCpXrMDADdEQF5vHqbTT3vLrLoJe",
  "key26": "5Yhf3M5LvT6hYBBocAfQ49c6sSJyKp4TxcnZrtbLVY9AygdUrm6UGV9ULQBYbDCyMMVeYGezN1PNVRww2ACsivQ",
  "key27": "4MV45vQcU1nXnHCX17UBTeHqMc1eGW5eRZ7aXHr48bLgj1MUBQ1XGWBzz8Cn4z3i3KMnQg3PTvfpqazVfVin59Zq",
  "key28": "66kegKrP8U2JAvKtq2RaPR9Q3nyDwTcsByYEmTjM3WN5ZuM2KiYBc7BGa5avCMBH7ie4KFgUa8zSR9uYWJciSuLj",
  "key29": "5Zk3HRYsrL3jqimbgFJMq1vabSXK8ydZCBGVijCPUGbf2dwF9rkwm1Z2w8hsBEuhrHNj9qd5AA9c1fjkn6gqTmcU",
  "key30": "4ppaYC7NXBfJb8TBaJCaqKCdG23juB3FfJfy8TdpQ7n2ERJzJsE7qzMjNQsQ86PnZhM1dayMNHGUBvoCEFkoUEQB",
  "key31": "31DdDV6Tig3mfFCxwqyrWHJQh55E6u5y1NRdTGHffwpS6ZdCPeBgov435KMQSnLeYUEEyfARVJ42QHFmHdhBtxEG",
  "key32": "22eoQMQ8Kz1NSEpQn9bAKMvf6ZNUtjfwv7hkQRnhA21cpsc7S6pp1k8k6dmh9EPyTWWHsPHiezWHurF398E6DAoT",
  "key33": "3ZqUriZYERCM9XvWSVFF79jhUKiaaM7KnVb6AehN9PVriLCikwYyP2eNdGEa33NQc543GG7wvkrJAYnkx3Gsa52x"
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
