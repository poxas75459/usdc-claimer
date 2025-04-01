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
    "3hS55qFtBEhG5kHmpQ2reRTkg9adVMsKpAeNxTHmNZYYqVqYGHnH3oa6r1yTAx26ankKw5Hqkws3Nbe5GWa6DNwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PyKP5mtLG8FMTWPYrG4kxnj2pGcFR7CGx1hoqGDRQSS7RvbUmkSV6hxoq49Uo2Mp8bLFhJN9KiZD8hqwUv1NnCY",
  "key1": "7X4rxfSGRAP4KR8mBdxvwb6BPJpLY6wsnpjMeAru13U68iRPCVyydsz66o9yrkskpXJtzQbQb3We9DzxurYidfy",
  "key2": "28LNpixx661QDkyi6yr2kdbARpX1egNTtaMUYe6Bi8jngo9wXYfM7nD7Ate36G7gc2WiNwvqK3qc7CyKYxz4xjcN",
  "key3": "5NL75V2n8fspYZGHg3WNKcTEDXFi1E6xWHbuSEypUirXboY48DVWN74fPhRwTeKhcY4JfjVkF3WMqefBwCN7mFCE",
  "key4": "5C1SjYufVcdNHhVkXB4TdhxDTdDsdrDnRRm1vU9mbT9D6ma3nEzjtSz5qf7GJjxjf4EX5U5rZEgCgyfHZeZy3vmk",
  "key5": "2KMq1fQ3a1E5qog64XDXSdGHk66LZZYNSaYAtSsEoFKGn39zMf1QrrXPJHcUJAHh7YLk4E754mWiBNx4cSZ8TDnC",
  "key6": "2qHLi2q4aP27doWKwEvoKRbPFW6QimNJZFQLGraFbnt1jSXhTyD9YqwTErTMhPmj9FnjNNBeACDYsWZuz4jdfQ7F",
  "key7": "65sGECMYGvPDkbd4AgjYkjqk5dSZrhxWvTtppid4F3ktCLeNKnZMb1iyfekhqrBrB4uBzDeBF2hQ3AfEnnhofQ2P",
  "key8": "wXgbqfwDe58Xo6S2WCcZyPSMeKNpudvPVdueqgaVRK3GohwdPQtgLRpWtzNT8u5oyUy2WiDkFWVNpjfPb8d1nJK",
  "key9": "3vHJNcXsMzMC1ggWREKs3ST9u18wrYKhDZgqbVq7WJ4XAAezJm6v3zmnNsXoVa4yaagcu4inWtyRUjnn7yTopzJC",
  "key10": "4gmkY4odp5F8tvtCK2XVsKLXYq1AuiX8BUpFxqYQCNzLBg1veLdbdbzYhyoCoKBYM2RMC8BYkBeVZBg8KfkyZrAr",
  "key11": "2jdPG8ijerLwAMLBiiKamGnimnmV6CeQMxt94Z91Nd6YgRdRq5GvHVGxLs8Nysyy8VAXDVRcbmDUWn9wRC3ujCMW",
  "key12": "451KcF9vAQxRMvTUZ3BviPZ9znFq3UAnyAqHFRUYn9bMmjmr6kveRif1fEq6LtdNPq69QbQpuA95HAhgruVzGToL",
  "key13": "r5MccriJYZcmBUsyoGnSPSQPhUvSsTu1N1LyFMtFKsxUEUf8wEEDqEQVER42qndLpePMEu1gykU6HanZaMoRmy9",
  "key14": "4xzBZt5FmYfrukQJNWyfpBBsNcCqwMhC1sxXYxS9sczVPYwSUciMnWMJGACm41UNV4cBW17HqHVD898fT19ybk8q",
  "key15": "2AGpfjJmzfimmyWZpW6Rvue3Fve3oKd288BFtxkRD3rCFqXSg9BW24zprbZYDeXYLf65dsEeisNckdo6u2wPgEZR",
  "key16": "5UtZtNoE2gYs9bTpBrXC1WWnVft6t5GFLK2P7oK6ZebWTj1pH8HvzA89ZNyJFtuD7ETVUSw9eQk65Spfevq2Rh44",
  "key17": "3Mg4YAHMsxRP66SkQGAnLhx5ZoGZ7TLUj6DjzDmLneb5zR44wpnvzoE2NYdJUx3rycMQoqiFuHiP5cidbQaYvE3E",
  "key18": "JR6jcmsfcvV9HLqqkyV8HZ6ARpeu3VgqPJLq5YJwZq4xk519ZScDQRDjynAJcwoKqCDDHMG9EU81B1BYmYQgs9h",
  "key19": "5T8M94QCq9aie1LwUudzGvwJe3hF7rXd3cGsGAHnXeLxgE9p2ywotELR56eTgnPfBMnk2FksKQD8E3METJvZHgFV",
  "key20": "MCmGwG3ncCNV1yGvMMSyFviSzpjMbNiDH6W9MpDBRKtYLJvbScUEmhYZqFCLpqQt1bBj9RmwYUYsg1Us5L9Sc84",
  "key21": "2ed8U8LtBCq5RdmbAU8ZyLpFLxWt3tGS7RSSWfZhAzSGPGBG8yMUq52rfxTcFQuiaAHsvqQXSVDXzAoPk7JrFaqU",
  "key22": "5TxW77fs6ZZuwUTH2RDH35sqY5QVLyFyH9PmYVk2ggkf1hhdE62Rf9LHEC5dPJEjmNgDvRG2A23wjbsimT9mReC6",
  "key23": "4cCdfQHNDpmDCRXGkYbaqGbRW298nsPgJi7ZzyvzoeZvccgYRd5dj8DQJfWvp1fXMVdLwMPqJQS4BQgWPwsGqkg4",
  "key24": "5bVZ7kHmhYRUCgW2MtW34nYkCWAyqsXJdtkQHD2zma7Y9VjaLf27s57ppyu9bn1Hrm3SYk3gP9FAywNR1fX7eSab",
  "key25": "2r4SNctHpxjyVmQDwzUswbBpdU44hbamE2R9NdRpeHonSjDdFR4g2vLddwyU3QNp6KCXVVpwxc3vtJmgTM4u8j3n",
  "key26": "Bb4YDrUKryzqQUWXaRkugxoYDVdsWUZNyQPbC6Eb1faZSJxuR8TB96p7h26rsUejC89SPSTWwiepVCXQXj8bLNw",
  "key27": "2wkUW8TvaKn63E8L1Zm5Le3oRNES6ur5ThFZmGG7EdZimax7Rk5pzgM4m27S99HaPU8iaNJf4d7ywABYUmXJNhR",
  "key28": "4k8xEsLPQtXextWQSL6mQFGg3Vr7cFEHhWcShy76C3xs5WjsAcnJZCAheLugEuRk1NFy8qhU6CzpdjrxeLDe6sEe",
  "key29": "4a66ZMK8m4U3nNi4MNqHtRjgkjTy5uZq65YdFrw1d4CJ9bqazWAUDm43j5cfsJEtTRZvoWxUQ4Y9ajhFEDeNvGsU",
  "key30": "2tiVxDz3rTPawEGbfamCcTdwucjWF4G4jA7sLg2snAeu8Y6ZaXgU3aSyQLr3s158VTZnqhmnwNw2H2m1RcAUwvPs",
  "key31": "52LmtP9s7wjXuohANxeEaGrWxvppveCVkQPxjHYWQ85LpYu3kKF1eKVQ3cnMQC4m5u86rkEtB9Skf1XsXaVAqvQG",
  "key32": "2ViHScJukG1cmzvEK9MdW59x94UdgHmn1cYBGHWWenj4B4aVQJoZuwcsLpGLg6p8P5mGEfo5EePwqTaGHBKXKxf9",
  "key33": "4jZ9wX8mzrz31UzS2Uw1THmSWoRKGtzuU982Sprzq1vWYHPprx9Y7B9T1MRMmucVavit625d6BvwPCWx5MeBTR84",
  "key34": "4PPcK8VXpNLBRrP5JtrqCVTHVogVYXQDdjEs9USVAdbP13vtZhcW81NmiCYS2xfTzmdJGCnRveDXkAByiRJGz8Sr",
  "key35": "2UASA6J2gaTmBb2YMwSzsZ5pRPm7FcqaC2SqTBhAZ7zkVkrjJ3KfSruMLZNHDravjALD6GUTcG52cSXXLP66qaoJ",
  "key36": "fAThod1PCFWwKzhq2usMyj8xDnLZ9bNsA15hw89KUFutwC2g85jk6CRNqELaK3EGiDNpx5JtrtD99mYE6gQGbGd",
  "key37": "5pHjjyG7zVxPiqfSLyT61WABza7hXU1QybwXJD28zdb12Jbma8hbY6RtLrbsuptdMdGyZAs8HAm26Yp2nHzWod4R",
  "key38": "us6P1ZMcMxbHsh9Ei2D2d1nTjyLEzHYTqit45SoXT2LWUbqWNaQw77qbRA1ctFKkd5SpZindWbyDWPMNaMA43q5",
  "key39": "25Bwaqmsntg3fj5DF3mcoqx1opJRBVy33Wjf8hez7ms9M1dK9Vk77QEwvaKam5ERKRkyhE7oCboQzaSrTBH7Hr26",
  "key40": "65LFtTVUNu1N1SHPaezqWuLx5sdHqLRJfTLZkDGUipKvYbJvQsET84j8o5oh3STjLZ8a1PvGkyRcZyDan3DAKY97",
  "key41": "5DGANb5Nt67i2Usp9mfvThMv7DWW1654Vw3pZ1pDJXppaVcMoAEEiSin9m9F9rJWTM1zeLo5CJghjuke4hnFmvMg"
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
