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
    "3bigvoujoKPGy1nmggzHt96HyDmL3iSb6ceYRxvfkvMFBMqEn3kAETYbcen73cu8fiPedrdNsvkY6mkPjjiCPn2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RtDz6FkHLymiHsbx7VmsksnxLYemDRAzaCxNdJaFaNTZxnCQxdnG7ansBDqj6HPAMu7982wvCWckxAqKSzkREss",
  "key1": "4bxuVQXP3SCR1SPfQ3DGvEie6yGxnSLkroTgtBW6mW8yfpEUv91zkoHsH25zE37yC57qajmhsTMNnhqiBtnN8BBW",
  "key2": "3Tuo83jqMsdMBYSSN636tBfAuErucqLZtKQpN6nUFVP6ZppoPGMNNGwLNiSvEpqLNfajqGLsDjTdwb9nq1p2TAHK",
  "key3": "5oRiLe1qx5MY8G4y17uUy66iE6D6KVudgxX8jqnDMx7zfbtAhsH8HYeqZ9zDd8ci36ZzQQwyLwjJT7v7vkfivumC",
  "key4": "3DFU67AcR2BqFphDNawpXToGtqS6p6XdQG7PQMKLfezoFHXRL8garAD42fFG6eUzVu2we6voq5ugSEtngUzVhe8V",
  "key5": "2TzzNYS9BSvsv6w5GRkHExSdKa24zrVvh1Wxi62yHDH6gKCCh42BgUHSSeyjdYLMuvuzfCguRLx1MkuskgDTqjjf",
  "key6": "4psbtjGpi1fHYGjZXDp7uh3vEWqHGvyDq8XJu8YKrNYV8Eh8kxw58dLAgBDw4jvdN5x2VNk6Mmm3kvwzCM9pRGcU",
  "key7": "2ocemRs6ARkKeWwDRdv9ggJueVns7npVFQo5qNFhivVZvgYhyRMmkSWLGWRMhLjEghpHaJ2yBfxjEsfgpobMpPTj",
  "key8": "TcNGtSACawpctCM7iZDWuvQL4gHzAPZ46bZ3ti2fmD4L3zLC2n6dHZ9TC2fT6QiDunEthZMxcMHrJ1Xv2yNqVqK",
  "key9": "3sUULWitoNfNivZe9as34KpsSK57n7GfKpWNWp4fAmz6BzYPzqYixgu9ohNWVyocqzj2gGt8wvL4J1LbNgG7kdCA",
  "key10": "33Gi5agN24aNQo6YP4gm7JGJKYGmWoCaD4rgUQF78q282agpcvss77amx7AERsuRGaua1R2pJVh6YUoLcwnCQ2hD",
  "key11": "33Yfin44J7ozpCuANFVWebBBUEWB9NEavb97PBhK7MG5f3Hfw4TT126eaRNLD7FdZfQDqSDowgU3QeLdXdT71S7k",
  "key12": "291Pywpid3vmXQRjNSc2QfBt4zAG459eAFaMUezt1QddanqsSoyBhXoU1xT7rrXRdmaQ14BHDNPZ2R78APkLFJn7",
  "key13": "2avSejyVkFC6cMNNbgmX9XewuMu5UCsDvw1SSVVhHZBuxXdgGN1sqvJ753wJXVaeTNBAVP5abiXid1HM8PeQX8xR",
  "key14": "4HMCBwwWkooSYPiFm9WzfxbRy1iKYBBtAfe6UCkP93esKa5osgiJMmShRLZUiHuYD1KHTQHduFY5z1h82hCv77Bn",
  "key15": "8zCBv7Lcs2KMjAUkCrvq2cscUzANXG7MJ9MuGUssKNDTNRULtrzt3qRkSFvn2e1QWLGT5SqhZLg3LwZGPJY4otP",
  "key16": "4SQgoebcn9ATTDFzRW6C26EUoXyzPWnY9qKT53og7x4HdLWPoMMdFZd42s6X21MW7WBPEhvoSdUqHxeXpc1waXqq",
  "key17": "2XRkvc4nzEpXmQyeFvkzZK7MAUbi8vTKP48hgKxqt9kxiqG7Hs8sKYvdj7PjaBnn4vLkg2kLWA2GEmhYebV9oTy7",
  "key18": "5o3ZkRYrer7iCCUtir8HWcwHLZU7fzT3CT7gmRXSrwT8Ta9j64mYDAVDFSL6Exnq7fXTvCwgsQewCyTz4fd1zvhV",
  "key19": "2EGV8NPTTQBUZvawRHZUah12uGyfc44QizoT6JzQpJAg2J4PF9ciBhFPMn8NNKXBr78pYK8e5hTgDXYFNGfWdx5P",
  "key20": "4ufYyhmbyCdx2wo9MmbfZpSmR9RzaWMj2w3RoTZXvxM8jV3krgcfqYgC5S7C5NcW9Km25p9d9wv6PbmU5uueQLMn",
  "key21": "2X6kuPvmFhdrXeC3cjrm5AFoPBs2Y8776DiAnMqnXvcmK7iyx8LJ8jMS7QRfUgjUuBHEFcbbaJbka7nGPAu93z6i",
  "key22": "66wVRa6F3UkcBdMBfVPSVuLdsk186jHR7q4kNLPaYrGFDUdgh7ifYo7hYAAn5uPPZgkMWLy6cboWGfNiZ7Y1Zy9y",
  "key23": "UDZYFaXytA6AYrMnYEERWdzHJBKvSTt9ypn7n6hvnJeMTi9e3HCpCuCKXUPJjBEVwf4R5qwQvRVPqrEYfaqEaZ1",
  "key24": "2FFmVsTicDz9Ce7mjcR6G1qfSFEyNfeYx1qJJzKCjYevUv9vvS1UASDkPPgkzqcKSohXanyrQWRFoDwFVQYonHjK",
  "key25": "55C6Qq6Uq7XU3DcTQ4P32Q74f7YKXXnDw6tLxtVVkjEbYSu5Xnpk7YxA2m2EJmzZQA1zsutwXgaWjDxU5cUWauJ3",
  "key26": "r3XNJVkjKMGnTvQ9jq6FGMkSJ5o4ZKkjZEvKPu75ejj8KFwwVGpiQguLPSPY6t2fPjdKvJTgBXsJznszrWdopGd",
  "key27": "2zbf7XczKa6iGyCYXnTWLyikH6APS9LftC9uGLMNKoYHHkJpz73mg6bGCUNfkCLWSj9yhKKyabbXobKGNUXk9mUK",
  "key28": "2AtVvmjfbBX9ySrRJMYQ8t4QuuhiE8TjkzzQyqdM6Kgixwx36eXXq7fwVPJTX8zkSS8LkA1hPh7YwzsXN2tnzrZT",
  "key29": "2Wdk75mnqJWYCEMH6GhoYPf5VcZZ4yLeoishNYKgvdYvRugagYPgx17ouPAdp7somwhNK7Y8vbGHaTEBPUU4qZmV",
  "key30": "52xKXA4uyM1H1CfESVaQRBGd2zi7FASecg5nbFCZnxHUSw4vtB6wUREPenExuzeL4DS8SUf78YfW7poe1G94KQYW",
  "key31": "5GNKkd9tD524VYvMNphhn1ps455uKq3mCrRxxEHvLK5RGi9hRZTQsNCfC7HZ6Hs8bt8rZuo9RKaCyUAiH1Mf1TMv",
  "key32": "2diLGPQdVNY7g1Ymm6qshwaXuV3og9uKWMKAKVbuwosgHW2QEpbJmetDR9w8w6E7TTLnvzqgHxcXN3uHreRh23AD",
  "key33": "NpSzcpw5M34GfZPAjWuJXS2eAwRAywGw59z6tBrqpqvMwsaHeUE6RnV3Sb19b3mJmC78buVLVVZhocMFmLt19yB",
  "key34": "3eVuJjS3YvDjDLZ1XCHRmiGWTWqfFvANyvK3Tm3bhKnj7osPw9U6A5ShkjZhQpjLzV88JG1U7fAkc55C1tAwafUY",
  "key35": "39B5SU8B42SkjXP8Xg5YKQTxCtKbFfdbx1P9J5FQrMWpPpMzwmdpEJtRW5zYpVBsuRU19htUE72Xky7hQ271XbbU",
  "key36": "3JcQyPr39pmdGNa9DB3NCbLaY6SbqDHDBbyXQtVMvboq6jzj8mHHVTVhTaE4HivWiZjt4RrEW4382u2YceEC4dWR",
  "key37": "2eu9EFqyaS9F8TDzyo5M8My1bjGftCqGC28rAEVhYkU12tSZYU9rHV8EzFuB2vVcJ2YQUpEoeseTZNUVL243cumF"
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
