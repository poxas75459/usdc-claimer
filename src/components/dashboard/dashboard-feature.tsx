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
    "3zfWx9fkzS4aGTuev8JA9vnuPTVnvp2GGgXdC2po8QaJ2GiMxreZnRMDQv3nhFsDcgatxNN5wXzba8BrNXTRFsjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hxP91nCynmVLfXG8yKa4CtaTtpT5UFvfchnekPWFkonYnWpysVXzQzJA9hghZWzPVrzP9STWMCowusj1k96U3ES",
  "key1": "4tj3EZrGW1M3HHKDXqvpbGuPVJ61y415q2YcmD7cGwiChNZKByG9hWhiPuFkFJKRYE74VwaxVqAk1ts8q2h7omXm",
  "key2": "ykxUmZ87NPXZ5vm3f6XmkXt45UxqYjcWawLRujciBEF7Umbz7iNhcw1L9ESNYFAbF9MhGyP5TgdyxdRDZPxmMc9",
  "key3": "5kfff316DTaXDBKGo1eZhivzeTBF1evJhYv6VpCqjLPef8MJzU3VKT7JWujb6Xz1hQMr2PBar8CjyiGN8Yme84Re",
  "key4": "2EhmW47xLjtDBhw8iHegD37E33A6264Gxw7RaaPDYvT9HiqjQ127t6s8FdchfTW1vHqKGCNs2U65ReJ1Fi25PWyv",
  "key5": "H4R1RVVLAUo4QNSD4zCnN6aBHbR7832f4nTNscZ5jWWdwkeU6bjYrWdBmVTYnBpbuoXcpeXGDXswsLT4UkYi5xk",
  "key6": "5FNoGgT8DE2fmpJzC6rXqVLzuCks3HNX31Mg477eFv4o4AZ3V2iLtzSfkggghZx23kmQgvCJDnCXZPJRa771JnRq",
  "key7": "5zoUbUfiUTYWjPnuc5WeL4G3cQVG2eULAgQL4wY68fMtCcBrGpEFRcT9zDY9fvZpBtYbZfVEEvxYCMDfScMwzNgU",
  "key8": "4qTqmLHVNxU7gjNbAPMUBkBB6RMCyb4sbbyQSp1EDeMCZnztmmwubkFtAUentvWBTpjq3WaPq23VRqH1VdjUXvtd",
  "key9": "5uAjSdHz61KkyuweGFUrLgZpB76ikquHtC9QzzqeLoNtZC52q1Ub5pniuH83we53cGxKAgpfR5s77ogLYhhDUfL8",
  "key10": "2uHUoDprrJRXr7nh6NF3v6CFw4cFpzZAzsL7Udn3i9se1jsUMmZJ5dsnpVEqRzR4wGf7WaDc8jnodcCV7dFYyqPM",
  "key11": "3e4fGRJNS3rDXs5dfSA6jL2sNwKQngAfhAJE8BTjFXZjNsE9PY592rcQCENpRzhkpyyxrEoPm8BPAETpRC1h9mHF",
  "key12": "5ZZQKAeEFNYMxRktMwDoC6g4qqxXdQTCj5MoyApWFTQ6AQM8jrWibfSmnyy9Tqzwky1U8562kT3b5zEDF3neXkhx",
  "key13": "5jiQkcpSyZnVtzZXkvjSmRERKeebNdgGyn6NTXtiRYWUxPr9oy2ZR7ZcJsmVN4cWTQfMZvNks29uZojjELuXnazV",
  "key14": "4Q6eCXuMJkKEj37S4bQVe6ndFzLxLw8ebCRJoaB5UZFvpEvCFvthV1cRk2gPvKrJtVpz1rKFJgv5pk3fd5eWYYCQ",
  "key15": "3rhRS9XsidDPT21qpGdMo59CidN5sS7k3Ewp7AHkN2zHgZ4Q385J7QsfuXvF9ZvHatSkmbjhWHQeNhxkJEGrw1Yw",
  "key16": "3mk3RZvRp4tFAucXktpa44wqrtHn6pxTfYMMQYhXioHW3zacZWjEqGFq8ABwFVcp5br2y22ApsEu2vULFo91uXre",
  "key17": "35w1srux3Nynhx7J48ZQHQdr9qwYSc952uhyL8hKaqEM1iiWN6PJV9iZVMdZZ7cRp2R7sqQ4eFDCEpAoqaxWkP3X",
  "key18": "vZ1o4LTKLgGQZKdwBLCP6jJVSGDNQfUKD9PLmGi8MmWQqFvvKSnzp7shAZKE5hPJVokC7LtLQ7woC2ZnSH2Qy3A",
  "key19": "2XZTqFRCQcGrCuwRPbNEA59CH98YkctBYM3Y3f6QyGBX3Ch8A1PwHKRkkvJYtJMzZe3Dy4g9cZsigZxrHweiCpSZ",
  "key20": "3Fp1p9iYPYDQyVfP7Pqojj3HvRZh4Eonamtc2tUcU1QNVDwNpQS2PyCeZRSzFcMNS7Mrhv672PqDY2feLKbsxjEq",
  "key21": "67QZ8tZ6mEc1FWB9rvHWp8jP7ZkmN8ayAKU8brVwnQfg8jvcq19d1UxyjiYwh9v1Q4eh1XKK5JWNsPKiHW7R2M4q",
  "key22": "3A1mNSyYG6CTzmBcbHwCNij98x4x4i78e77pwTxWFA5rNwLmjycxvNNJLb8seXjmcbqBj9DjX2Zb1sYJ3Z7D8Lk4",
  "key23": "2dmgQKmnGvcDRrV3MraFGYsDxFyy25X4jw1fWxn8CJ9S3PiL6qaLwx27qFCegkDd5gsQQyK79RFZdFqHJrRHfFeS",
  "key24": "iBxwC1yZ5AvjtBuh6npdkwR5YX7uEaXmRyPtHdAWHDLNrE4r4Dr9BdA6JKViiJrhQJLokEdbLxjoZkMJeK1xRhG",
  "key25": "4jBGYS8rQwoa36z5XFYhwknYHkgeVtyJanWmZ7CP3SXdQ2ZKtuCP6VaBfJK2aWvLb6oU8jQAePx1MbBb98SkGjYA",
  "key26": "4wx6Z1PXBwCE3JdVfDuDpTNPFrEsi75WQkLcobAH5v9bDp1nt3ANhttNMWmGVQSnaP11dw1XqBKJdH34ABjwKhAQ",
  "key27": "XbUTQ9LCKd22hmntFbu1tAHqTJuBw5SMUvr63JZqrbJTSD5mHhNdNQFxtmjUpduBYx5LDvKM2zVhx7YcwZa4dk4",
  "key28": "3gnf28qY6qrVVjkLVn8YEEWKwiZxk6nY97vkAcfCGKV2rWKKuSmKLLjeFqPS5FhZp1R7mC8JNBus7RsgicQAZWiK",
  "key29": "4pgzoESA1yNvgdyrmUvxsV7tA5WFRvYP8CvUYYwjnRhXp56cjxRVDurR2cZxpjZaxAUjfSrrLzKbpZqW6DUVCfKH",
  "key30": "GUEEqpzgn7dM2uN7Thu42pmEHjYWmhPaL8fbCswMFNsykCrEQupTDTBfrFUmdxiW3FsgwkT6zAMrX7dhDpyRuye",
  "key31": "2P8gXLgNK5pWLpcLeth8XcBuvfwtkL9X8pg1FZWnmacYbEi7eqdcVZU5jcRpGEbioC9Xj4w5u4ZWNbwRhj72Bmpw",
  "key32": "3St8iSExHaqy9YpQp36Dex646ooFVqnJK4p3pwb4t3Mrbg3oCVadNRst9tjcmrVhRjd91QFFCKwhqvnp28qZut3n",
  "key33": "A5zSCKxbDhHv1CnQLiFbxpGSjCFabZFdmmp2ngPyPFm7vYrLuph85ixaZVLPtrxnYxqP8SQU67eDatUUaivsSSk",
  "key34": "3oFAy2EVvujw6KKbM5p7wVSe4MWCJnpm5y8vE4r23LFhKW79n3boTcW6HiKTpK4nfgv4ce5Baddt8RdpziaUeSXP",
  "key35": "4QEYxypxJ7rnWtgSBFZhdApkzab9D1amFNxDoRqYihpeRzoFeAh8p49fz35pmQGZwjBmPYWy2ruCXiiuGMRNBVqD",
  "key36": "2pAaA9y17aiBjEZZLH4zLnDNa2abcC8WJZEZaV1s6oDNtwqwYgY1VjLT7ztAtqF7zy6JBpe1iYDrZkoqsdcKzwoe",
  "key37": "52Pj5uUPvi2CGGmAFJ2buegx1RnnWCqo1dPDGBFUsvwoRgToKaWvJsS4Cp8pSfLmiUebmjFdjvyB9HfXHBW9jzfH",
  "key38": "4M1BzP3h2kxXXezko8cJD5vdmPEaH5negQPghQFgacdognnzKSrrE4995nJYydBep2tG8bute3KhQju8jRxEiG8S"
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
