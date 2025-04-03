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
    "3jLLEFf2F6pZdC7hArJioQQvway2WbXHPjaAjdQWMVq9LyXiVQ1dmSCUdrFtbwqr4BJbVd32qbky8GNa69kckEv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "267J96ZLZBGydEMhSycsK9X67K4eK6HzQuhnW4j1MQ8t3NfKAkNPVi75texhwSH7KcoCgYJgCBMYUXJ8WgNHjqhF",
  "key1": "4XyEEk4nm1CC9NexV4heNW47vWQWKYGVDrqzWEdvVkMTcQ5pWPvYY9aqthvyAmtwtKcpMwydutX2VKsfY7VMcjM6",
  "key2": "36uRqFwquXBpEkpMQ7dVavcCftA8kJKWWRt9RYSDZjHq9wdxedvv2fX44bMTQ5uycpaGCajbd51Z4CTp9FSRsaP7",
  "key3": "4f8PF3gDyYSGqW233VU2UoDTYndM3YvDjk2Hi1MXFA6aikWnyNfLciNrLDAiYfK4XRYm6cHQWa7TejK3FGJRE89n",
  "key4": "4iCzgT2JguajPHDwSw4H8kaoLfYtCE8NFKJLar6eijjbLMDBRwjRpgxG6DfeteaJdAmxxvPWtpgbmFNChaXfpmZy",
  "key5": "3tC96pBtNc1K9DzD5QTPhnzxWUFTre1wuBDjYCzU8WX6MmvahUKdTasQnLRacHxYSYN2iV9YQLpGZM4tUwQqheaG",
  "key6": "62WwpjHqeHmeC3WaDQVk2dmmKVCtbv7xwS7TfcHRGk5mqsSqcp2Sj7PZ4pr8ujWgjt7fH6Uy6mdJVdhN7JbdEsbf",
  "key7": "461XRZrLddi3wsiW2SzQHrMdCE4PLALf6qCb8WBK781L1iYUWxCcLbBGZroLt5L7gwLVKe45vTkqW3FQXpaUd18i",
  "key8": "286LCE1r8YhM5pxe4QzY6f56gzKAAhZqr3fqMbRRbh82wFdRhJdiiNMo3sjGKsCXSmv4APdgLQLE3FS5n2hmUPec",
  "key9": "ZcYGzCJXjvmzx152P7fWfu9YTCktYgy3WALA6DkPUTNroM6U6SxHhAjH2HFhD8XNWGB9Lx6LFrfXwziDHMZAgrD",
  "key10": "48VwtATVs55degw9NxMDhXJ96PmU2BCA85PLMtmykot2Kso4oi2mG4Fi7JPs3kMixvZQT3L1tcRFT6Z5so1aLtfF",
  "key11": "3BYAoJRszr5bQN5mH5XKaYkRrT6EQRy6GrApJbzyU3EZozbuDeEEn7bXBqaAAq7qiony1ocetsqD6XWvLTkHurgG",
  "key12": "2YL2ekymzVxxqygpG6XWeLZRyhzUM1AX39FW8rogwr7rxfPC2tJyco6b9k41VzuV2AYhk1TS2CQJ3R5has7xjujX",
  "key13": "4Lhu8Ucpj1U2rcT57UpJNe466nmK5xjw6baUcj8AZW7sHsPWqRwYcm7uMQ2ghfdzkfo792owFR7cPSrReucx6sE5",
  "key14": "5XDhp7Jjz49UHz2E8Vx8mZh6NhmdrzVd6oe5yTmmMJmLBMyXtKkMQykb1qAFpMaczzHEtax3N7xSu2Szb9ZFoBm2",
  "key15": "4w5ebacUfJNmZhdUseRsfX3Ti6p62vzv26XMw44cZyusZqdkWW7255UZoZp2usktgKmwUEAknZEYGfJGb2mjd5Pk",
  "key16": "4BnCrxmDqEbmYLaKR8do3vg1AH9mAiJsLEeVxDgJRPUAtmauYJQiCStvudYRh8XgbGHydkb3rinmGPtpdzK7AQxv",
  "key17": "57uV6gAx2zEXWZTbThQcRhuhgWgQEZk31Tjt8AGAnqfWeSNEHSbTG5C3orcoDQLSRZ5UX2sUw3kGr893Lt8jU19q",
  "key18": "4zLpxDbgfJXeGXpLnMgW2QsaWTn35Q1TQSS3gvk4FZ9n9xCo5b9uXUHeENdb1QburTUZfK6QMkm5KyPHgrkup4DA",
  "key19": "5uxbP8jhPaxHp6i4DMMWJu9U5kcGHa3bvbo3w55ooeyiiDw8MyXin39tKSCLW93cF9mno1gxwrMzhJvEtgmw6wp7",
  "key20": "3FHFM6zmGxEkgS2JPcGDoJrDkqDSBa63X5rWcZp6KN61sWog2GJ42pedpUapdHkusMbrhMHTsHzqwPWmjV14H45G",
  "key21": "2j5uKYV1gKvS4sdAXgG3xVidJhj5rX1BRxPjCwnFERE71VSqfkrq9GDwEpbuZW7kKo2wxSBNKEsrGjpsv1yU74rR",
  "key22": "2xhHu8smZhhLuhBytoYoMW1c8jJA3YQYXRaDy8zHCgfLeXvoNTWjwZVtBzKAMSU646dHmeGFq5XDp4LDQXYm78rY",
  "key23": "3jejLTwcZj17amrMjngf8iaRxo6aju7yFVPRESti8PEbLHpmXzKUeD7kBQouHxFSdkyvhDbzCsZ6uab7YPKatKZ8",
  "key24": "vntSnpzyqVSVU8Jt8LS2uX4XdRxQsiuYDZQbL8XrpEy7HsNLH7cPAGJddzxTeXfhgfJ1caFnNw77pSbcY4Lec2f",
  "key25": "3vpHz5CR2At6fQT7ms4ydXKZ2U1GvGUdrQzTyohJCcwSYxJu1f7wPmJnuaVU6Y2wr95uR2AtNixUtX4tWQaEugj8",
  "key26": "5FDg1LSXJErhQ4Xfsamvx6JETWhFLBfN3JTEN7moE6VYCavGkZFUX2GjaWLo5RYWoZyKT79Xa4QndxkzX6FYkFGK",
  "key27": "643Ne38ERBaPDSL6G9nwzgimc2pPZuFECuDj6itZcFQhvNsM6XXTfmEFVB7ocJq4EHzwgVArSKCGj9eFBCKqmJ6g",
  "key28": "39v3MmrRgWv4eNquVUPd2FhNoERq7TXc7CoZzRbrzELop429FJ9toNGSHpWnikKDUcqtTPmLuZ1BCHAW32kM3khD"
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
