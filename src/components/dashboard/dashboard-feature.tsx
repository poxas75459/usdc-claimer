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
    "2vxUr5p1R8uMmZUazWCB8GAZDr7zA8212LVG9LT7kbye9USZbrFyekM3RkxZmGetTybq866T5AxoYukmRi9xpAcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S3sGKgZTyrcnypZE7mJhZKQ3Z2qJDgDivapFCuXYnQu5UxLnmqU46kkxjnjM46mmXPajrinG178DnMgiSybpmp1",
  "key1": "3wLShG1zfXRDNv5Mmv9T8CL6u94m2ht76vCQoMXDKKa2FNXt4p37kbEvn6uicBcGpHWxaUYfQi9JwXerQRtzpu9W",
  "key2": "2aGzeu3idFbzcJQdyPrQs3ibUGkHnHcxHTwSiqLCgkxDEhcEeMSQFk6Gy4izZR6eBaruPGvoYSTC4iPzFCEfpjNm",
  "key3": "3SmEppBd1e6AYCUXZhx4XhKEcMrj89R75JfqtSodQnX5KytosSmaci3ucYYjxtBH4hdcR7k5ZrTpAgVpecEZwfWj",
  "key4": "55bQjd2493LPeKrHSrGBGj1pw8fgq1yfotVMVG9qRrWCeb16CQpHdTaVPSdmcDGTqRtDDuLdnY6MGfRHfbs4KMZU",
  "key5": "2JaHFJGn4EosZ9MYgD4kYak5dgMstQs6UGT1N43hCDjbBbUzHT8EcSwQX3UDyvLCg1rw8UnvovvMks8myhiJEjgJ",
  "key6": "3Ser5ZXF2NX8VG9aoYyBNJdaPzjNsQ6SZm5mc1xZjY2Py3gfT4iy8G4Kvf8LfJG5kJbantH9C9wYQ7Cch7tMvnEM",
  "key7": "2XQaDC6U1eq74Qawq2vY329UaB7tWHokxXDCqJGEVYdR2EZv2qqThuw7BkWgVr1bM9NmGfqhPhLNHfi8xua2FVZx",
  "key8": "3aiuAnY6FZfDNwKeu3b7G4Fo7Rym8iHJ91LTC81KCPiUN4yqvCHqdyCqTG3WPY6ayHHCCSmhbJzWzfdkAW1DhSKM",
  "key9": "2SBuC1DqBXSw95ERiNQpyBFR5ZvkbEC7J6GLepBtv7pKdo1WVT6TJviCx84jWMdgkXHR7iuidzo1o2iUj9XRebE8",
  "key10": "5vRLvmHdxSi7XyxV5YbvP7UiXvyfnLPVT8ZQp5vAf7sEgi3xnX1RBq5ZDDziTnn3QbutUFtwy88UcavaHzcXgbhF",
  "key11": "5qrEZDXoWJf7nFcZ2fkJF1TxQX5kMg5J3u2hKkKSg28dq3wMEQrmLaCLScKUFjGjqoFmixAjD1HvLF2SZY79jZmX",
  "key12": "3QeFC4ZxsQ7miHtNz1ZTy23cVgMCeKPZ31b8PsppWwkSHJnZL31aPtPw43JUxdUdbQ1N9TFZVTacHRQkhX7adBiH",
  "key13": "3CTVqmXgeAFKJ9iaCinHiMSBTsVnwrqHaqdbeT9py7mzCUi68buSFtABxKXavXmdAUA6XAoroDNmhz6Q5JbdzYuy",
  "key14": "2tfVv7CKpcucFchTQ51N9VbnefiRfSkKJ7ntc4ogBps3T3ruhzs9krHp5mKDKzWm9fSw54QpqXBtm3ennqqmbhk1",
  "key15": "4Y9T9Ff9VFUDjTLh92WLN9HceM13UUFBur1ryjV1hexmeWQvpCssozAAy9q1yb3NS6wEnVQWraRbw3xqrVkXeZkH",
  "key16": "2bThPx686KjmZgqM4QvrQx4fyFByix6cZLGxh7kwp2tnUkLWQqD5opkCxwybf13nvzpL2kRPJ1xo6mCq1tDVeiGJ",
  "key17": "3dksNF7dpxUbD1hCCggsh6Sxnx7zKZshXQAxBNbisDyfSYgnndn3zfdJhjHcNdtTr6NpovryuHfG3DjoKLDjBeoK",
  "key18": "2qC29zHnbE75Rq1B7JMKa99AXdCog2TxHR3cpcYEGxGW5znmZWL6c1D9mk7gA2qqToAhS21eAzRaCbnNbJpCLVcf",
  "key19": "3M6xMKKC5xteo3VNbhMgfo4gnc7tUFc8UNBAeHR9M6zorrMFBLM9vTo1yfsjLqo2QbyDpDeqLLumYwASVFffLpQ4",
  "key20": "yDdcz7NFsNNgUsDkongRyYVSNAYV7W5SGvsgGieAC8QCZTof9iSAp3MfAViesBS5tv9GDoSBRmFHgndMvrgpAND",
  "key21": "2a3ZZ2Wyd9sUAbH9Mh9DcdZ3bGGTNM1dgM5NPmZvdMRJ8UPL9qGnsWdTQmVWb6T29ohs1rnvKXHCm5yECr7AucEz",
  "key22": "4FK4AW1Kiuhf6r8ngtZaghv9Mu9PZF9ud5t8yRjm29SJK5bx8Usg4XSuVsJfRh8MPmPNBh6NxhP6ihZTnr8k2tvA",
  "key23": "5NLo5ieS8LvNhPx5d1PPsWYhdvYu1z7eP1vi6ymTpgTMJL1AwxLxs6duLxoyhHrQTLiHt2s6svX5EJ1MYNaWaYWW",
  "key24": "nvHcHxj9G83goXZtkqZ1SmcKbeKmFm8YwuqLN4HkCVU1U3keinvooeKM5ERw9M2H9faHkjQzFMVTEoxvR22pjkk",
  "key25": "CMRHsYuXuY6npf5sf4bnV69Rs4iodsCGuzCP4gJgcMgio3c8CFmQpoYoqzieKAhSBKq3krnFrTtP9AK3Jc3RLRb",
  "key26": "mZvSS29aEvYxYobx2kP8nUboiMve9hVvvoMaUTw3DZevYHJ9VG9XE2ZLGicgGhzP4Ct5yTby74ksteYvEVg25nP",
  "key27": "4vcvVQSBh5rceNAv4UCJmzySQm21WiAuF6tB9JjChQfgihzN5rKhu6LuAR1uVBJF3AECp4PTPz3BNS9oUqvh69Vi",
  "key28": "2zy1pWg9qzeojFJhEe3KtHBkTk2giSKDF7AzRXQtdFKCNRBgBdNqyHqNZKMGarGZtEbvL5Veo43dCEHivjTc1E9Q",
  "key29": "3aQW3Ef6n7RVg4bNiBEjNsqqDycCVZ9hQnXEeLji2ELNJ5CM5GMs82M5uTJdJwaNnTPJ3XLDTvNNeP3Q3Z3sb5jD",
  "key30": "m9ZWuZ7nRRToE3hbAr3ksDRis1qW8KmD4JPC4FHehHHNS9UVDvBQbVjD9QfRu5rirLLvkQET4QSHtiNFw3UYzU8",
  "key31": "57VTHYiq9DPA7L8PM6gyrs39t8Mnsp4TN1wC3qpCSVJNWCj7oZnXLfdi81qmjSGNGTsi3JfEBnkX47w35fzbeiaf",
  "key32": "4v4gb5VAwsVdS6L1BrEG61MdF4oAWQZHzceT77hCucdsH9hYX95XW9HNUbxz8Qvy3WCNuFeL8ybWENRT3yXgXJuo",
  "key33": "4r6MxqYNkF4DwGAvhfUJkJLMHGGRzdgT3Vv2v96CB2XPUYD6GXEDy8urhSPCTcfF2UyxfjFBf32jWU2Q3x7yKM7E",
  "key34": "3ddeVSJeTvwgn7QmTHecdW2j4bZUtc76u9Gr4qLkZQfZbw4j8sfuityRv23j1SBfUSPCuN8F8ALMwNYXoXhZcfZd",
  "key35": "4whPBFGjJEPzSrP2dMbLLas7sW9Rkkt6zU7Eoc22NK6hgADjZggGf4pqWiBFzBNt4tkrrLpwYPr1ta8ajR2EL3Mf",
  "key36": "4t38yqfYBvL9s1SPNiK5peubkzSXyCgZhePYj7S6WGutKr8EXSjdQMy4wGutte77ngDT1uN8iSEbVZYYmWqNtwUs",
  "key37": "q3o1dybJ5g5htuBv98xzDx7ih2vWBcNBZ2dLKfjpsym3uTEkBzQPCZ4hn8xNm9ad6BE74nJ6eUpDkbdL7UMgcM3",
  "key38": "4R4qsE2fhkPLCY4euQfhhztn1c5fvsbbExtuGcBvFDmmgVJ2DScK8y3W6GWR9y2bQm3e9k8ToYfAsV7q6oQKAFW9",
  "key39": "tHzfuXYftKd545W9umscfUd3xCoVwbXFvDkJfcqs7tXAApu367vuhTiPhpjgeemww9ZvigHzM9RVpwC28ADEHan",
  "key40": "258LvutRyT4sAWvGtSGLuvwHunJmuqDqLN5z1J7fTv29A26sygBdktzf8FiZFcXt6cCedNmc9vHRLQryVqc3jCZV",
  "key41": "3QcBxRCzBqnHkKG6hbPbmteesYk6Pn5hpEFqyUdKRujNjN2sivu49VUEHZnbHLP6aKfjc73X63KEDLEvpRjSGGyc"
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
