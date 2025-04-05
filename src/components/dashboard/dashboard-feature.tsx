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
    "kxgaWcP2Fem2TYhsDa5yobxgNJkyNmgMkcqmU99bs1sJrGPXsxzPmLyonoxxouoLU4DaFheTLdkExEBnkeW6SA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mBpD3EFppgQybfzzoA2wQ3eWRcwUGVf6znrJxPyAiMT5CTF5tbb2ViDbBRzK2L9sLw72GjWHUp2BQDLR2zNiseW",
  "key1": "4YGXYFQM6R6VxH61vjn2MEi83tig9fiAh3Rd5hFEuUvMo4gbBi16wbhmcJcKdkYndHkJsJVWtaKstMghkk7cZNd5",
  "key2": "3FYQa1gptXefcL19LrjRkEcM3sQU45Vyr9y8o1sZPSgn5u7sFYnbyAcqBpkYmNQpg6hXHZppw8swBumSpCz2AgTS",
  "key3": "4HeTVQjGbAMo9kQu893MsX63u6WX1ebUCmoAWKuuypKUkVDkoEu9fY78ub4S7K8f9rkDWwVza9vUMUxjmfCNWL7C",
  "key4": "iHgthSAbUuu9Sfm1Noi1Qe8ijUZJPbVEqGsAcG7C9KQcDYwQCFhWDvLHSPJAbaxydqVcyxpLXAZ5L6rJaJ8V5FS",
  "key5": "5MZfPztxtSjR63mXgaWhrgp5ZeD4YJ1wE58aFJLEHrGL7zvSTA7qJsKbNAKBUDrLAK2rjrWKE3sxNvJqWBUapQzU",
  "key6": "4NCzhJQMZeVaGAoqjYfeAqjrwF3fFFr4cB8KHjQK77w8ywh8RgUmqw7MQ5JBwo1RwPRaQsqMR5jdqC6nwerzdChR",
  "key7": "5UKo1HaAZqgAUzfwBfv65DDDqrhvR7ZN5LDzTPBQ2LzY9joHrSgrZqJBMzhVpfp3RcjUvgtd6gMvKJLyTxrmJBpL",
  "key8": "MJe12Vy9rpsdxatRsB1aiqEFZdPyJM9wH86RxLgiW2Ur5WopgzGvBGw7bcYCkZqFKt3cQMEMn5bsobBSqQspM9s",
  "key9": "265n7rWxEibogryNnwFXrdqg3SYgdMUmWCYSMK9M3Ne3WLh1yR2H8NSN4qorkAfsq7ynxk2e5mRvnP4Wei3bE1B3",
  "key10": "2RPuZhyrYd9fktMsbRKFdZRbQiN7xj8evaeHfBk6nkjESEfy5vybdWwVBMgyrQ3xhDyQwXLYi4vwEjXqGsnwc4cm",
  "key11": "3CE48GWe7CvkLHzszoonLXa6mPqjJjXegKuR73D4Hwe5sFwrCzTprAvUp7WKJLfxsqHGQjitTkt19wQgYzD82Rdz",
  "key12": "VjGffjq1G2679vn5j4QLKupjdw1HUAoBNhfRgePH3F1wVJwEqT5JMbRJ9fANiXZXtetz1U5gjuMcRzBmbX7wrsE",
  "key13": "58DTJ5KpqRCPE1KTptLk4KExVsSoEpztT85vsa3mCUm6pjVPZ7XYRG7CwV1rwuYduR3Se4PFCmTH5XNPCgkBtgGn",
  "key14": "3JTZTES1ezGQNjyD6kiApE28GG9mQ81NWDKKhGVoFEPvkuP41FsCaG7rc2AwFwRKAEJ9fuCn4nFA7V8qcqWJWwFr",
  "key15": "3iqVUsvCbCjiod3d36yT9qpipTeABYxxjLZc73r8Qi861Hioymox4izqm5bHR9CQkydfT77oTnmkm1J9tEy3fGUS",
  "key16": "5atGbRsqPHxSCRJAhdgNWn8kMeRErcRo7qNiHh7mhrp348iysQ1vZw5wUtmsfZKjxcj7vTdp73KSuqAGDuKATDgS",
  "key17": "JLyiB1DcHxZodPaMQkTbnhFkK52qpWS2RNRJ7mnQ8GZ6zBKF6eRVUfoSgULwCyZ6fRySo2sznsuSB15LUtSkKyj",
  "key18": "4hZF6Z6wYdqXWCQnMXCGNf4iTZwc6rJDEwDQgBXQASuFBFeqdC8oFdgQpUCtfqcsRBJBK76nEvQA6xJKfBGbsA7Y",
  "key19": "Fzntgo6GYbJzB32tQ1AbvSVjf5U2ZPZtWv6wCfBmJbV4sE5DRdj3sBFDoQFwMKXcA2KnJqMNAXNtGn9hHkBPPWw",
  "key20": "3R6kxzeFGEwDUiehJPCJEqruy2HRFeAZDeBKbFdRTXVkjzin41JJytriAf5p4CpHgBrRnsPmncmPn6vkdQdJdUKo",
  "key21": "gnpae4jxbKQxv3u9aijXmuaQRYYbVsAuziN3xHpxq47dJoJw7oYcWbToeTtuQPKdXMpN5FoWcSEDD1hFjx6ZkHE",
  "key22": "2bp4KgSLsP7AFjC4aQRBWttgiRWVP4PTDnDRJ9qmygMSFAcHeTyHjzDmaVKgcYPWZSfh1jgiZWsvm52647npYXwN",
  "key23": "4b53JJBSGn4Jue3zWRJMK3s6we3ARGjjqpsWy5n4sTRpoFcjYYPjCPyYw4JnBbkoriD424rbrftceWedRHhp9zB7",
  "key24": "5D5prKWbqNuR21irPK7jF1VzixGzp61gEwj4f47jrFMZVHZTcLbg9Ja6eh5JZZA1hEQVKQdD2tFynic7LrZwgybR",
  "key25": "3cRUnBhjdVLr9NBBgrKnqQmbR7GY9i9kvHBFhZaW5RJgJA7Lhc3sszyhuPNbdGZ8ayD6pZrDTkJA6wCnnccEqJMA",
  "key26": "2UkiLGghqV7Vm6bom6b8wHyLdNnLw64kLZKVPSBSpis4EpyWb4UXLF5ERKWkk3n3H21j1xPnztRRsezDHAWM4v4D",
  "key27": "5GkZuMrkccamm3xak7Ut8HadKkosPHWtaMsF23Cm4wKUapmaMZd79fdu3ZKUCFYGAhHcwq1C1W9XSGJXxgYdbuKT",
  "key28": "5o11QAkUATNnLieb8mJjRUzcBTqgGw8KxicomPUVa2S6wXHTPa45qeTraqj7xse25wM7aYDKe3HoEgZtLgrfNirp",
  "key29": "2fGLiu7NHtFvLTvCGzQhxR11SJDYm3ABK4FP1mX8CcdgtSPKLCCPR27GTVTZDHEg2m7oE5hcMP15APB3UQWRWTYA",
  "key30": "36XZDEG7wmmDKVs625GR4rgAuwsmKZ9xDYpEK4cGx3r4d2NMZhZa7yrrrJAz484grEmMnWPWQ7XFnvuj7Fdc8vkz"
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
