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
    "4vyRrfqfLYcTUgarnkuwzqTwpHWFUMFYkZ6PYFPEA7wn14oTG88v3nSxk5yBXTKZuf8GQbCjyNUjPDuNXkqWbwv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JBaJ3xxv92pbBzUkDekY7nJiAT2Kxrg4NPYGGVivLSDPPxqjUnZ4sxwZSF9pTL1LdtdDbGzpKdwnTZXpbxVihPM",
  "key1": "jNh5DrKSZHBk1hHphDSorrTFkKCynYgDEqjKyjxjrh4AfnVkaeqx6GR6L1ikySswSCupg15qPu9sxuHbGyC5oBK",
  "key2": "4nvy9a7TwbEdsL6pRMr6eyCYz3P3mLy5F46AeVD8X2B4ffDQCPawdmRrumG7E825AVrgdgtNG8UUgv1tF6bQdXpW",
  "key3": "3jB7gyNbewVdv3PyvzjeWwXyjxGNn5aUZnMhokfaHbi3aeFC3EGrQVVDQqPNYuu47ebe9WpK1ZixnYbAg2vthMNV",
  "key4": "5eKLSTqUrYevnViNivx27e2tXjM6j8JvDxFRMuJiSUNvJRkd9SaEgMKwampuY2K3gQdpc2xZSkR3agAj2GPdGyTZ",
  "key5": "4nAXqsfQ1v6kRkWLnczqZXVzoED4NJy3KvfMmS97iCVeS8fy2j1tuSkb8N3hcLhHn1kNtqe8H93auRipWL7LcGrL",
  "key6": "5vXDkdmW6nbP3meA5UX936h33UE6FZWbXZorW1AADmrt2skS8G29VzftMeMy5hYHBmNn2xV2fgiSxcn3Fcq1ofcz",
  "key7": "4tQyY2r6jiEsdPzb9rgv8xgwdsefXkQYoimf3sQ8EoqCcGTRMg3uz8k1arq2gxRr1QUZaoLbroC5bshu9APgC1Y8",
  "key8": "3bWwxezYVJEfJM9cUoeeroSBAJLcV3zREs2gbE7ubL2xZMdBUcVrb38DB5D7hAJeLK9P7KFApLDuSkiZHGCjSxAJ",
  "key9": "3LGrHA2thtMSK7zFeuyhXYqHUbMVghfrBvq54n85VzayQQh61Fz3NZ6uZAc5CEXaztpEfdWFi6YSiUYE72x5YZ2Q",
  "key10": "38sjCnZgRHWSo7JTqSMnyzxdMuVrR9Vs3UinTmyeEuSz2FDCuZz3dmMrFDWtoN6fwPESQK3gvpfKbsHq6AbS3JjE",
  "key11": "41fUAvgVTUNWkQ9AdXqk8e8gutJhR96Px9gWDM9ZLUgGPfoeVZmyGPK8aEgG2Vr1VnK4VgRueUZfqNvjAVdLFF7P",
  "key12": "44eXq8HMwirFvnEKxeYxRdBskY5sanopCeVipz9D5rmCgi8Lgk9euKmyVHxTG5fbWkGKiSKVSfmTb7Y3pnqHcd7Y",
  "key13": "3fqu6kun7vr6QGVE3vwuYkAtU3mXNZQVd3sYNxqgHjT6yBUvAUExt7akTsjwtE9rkeJmEu4DzW3qXaKFbe8FEmst",
  "key14": "42hqMTcCqSpx1RXU5vHJJomwHtHc2uwYBijfiMJZ8nx1BQZcCNLv4u828U3986SraZJms7ataUCFfzEudHbYQy3M",
  "key15": "2zVuxF1cV1fMa47Ycfda3BTcUwRrhFS92tDmrGNf8R12TRNn8AyGgkk7rhpYycD1TTsqyNFtU7WYosi5q9tgygpD",
  "key16": "2tgbcoxuhe3qxsjDuhTXhGEcs28KwGQir519LZwdHXLkaQNx5a38abiWowKTiibXf4jPgpzi9FE4wvMwtErZnZzw",
  "key17": "5f5a6VLdSmP18XWN5hWA4QWT1cgMoahfAYt5sRQRSosfXtyweu6VfZ5h1NBXPo9sZQCTbhLmsU5sbE5JvnUzzPJZ",
  "key18": "46Bco1AnYCGpc2MRQcdmkXuMNh5qY1naTvFGd8ouCqDdbZDfLDUvZWwkLgj43HHbMTNF2XsT9tk66qENZghYVnCo",
  "key19": "f2DMudEryMYimmVcWTmHxt5W1pdaPpVhJZkiKXaTuNuWzTXHHV4HByJoGtMrhcnd3wDiVG3cYeyYPJGtsfexbnW",
  "key20": "5QhX8sk9373UeSaHTGGiz191MAxM8AeHR1WFCJXnkSv1ZSSnY7kLHSDnB7gYi3c6t9SB8iLkRbMpmZPZhhi6ZhVK",
  "key21": "3aJdcsCUcGs7jC5s56gStGjBBK2g4ELgUbpavrD6hKe2mmraUt2Y1DnojrS5FWx5dHCLUMw2hJ18Q6QAXwADwLoE",
  "key22": "4mjnEUpRdLwvrJFvSuSiBaRgbcMLSWrH4ZtEsEvC2tmwEveYCGUCZUTLH5yESduYqtpWej6EJvwSJ2im6CNq18JR",
  "key23": "5ui1yPc5M8dJdbcMUA7fNiH24wDJpras8mTvDZaGzPD5TxjJFPMQ486S9bAK2iZjL8TsEDVbUAXquT7YXYVUJV8c",
  "key24": "5fFayb8i7QjLGG6pewg1bKQjorMxtJviyZtE9bAyL2Y4ngUiDGt4o8k31452jghnQZK3HK1UdgrXg5AZK92HxHzZ",
  "key25": "4CMCyJ3ZFVBCShk47nAn1tYXN7ZJ75TdW2s9ooRZ24jdeupiBYnvJasWa7p8KN4dJAXEBzNiSyiSsTmrWHDRg47j",
  "key26": "3D4jxnQVC6mGTv7MU7veXM29qmYwMWV1bniEHnfsfVVCSQYPkGjXUjVpbrpQMHgD6Ly42DKyvG9h6F8Tk2WvWddr",
  "key27": "edMs985mm1Y4nKoM11gnYSHHiqfzJ8rWWcvWFkp8tVVXBv67tNksjhrHwiFgsxrAnFxott1D7APCd5zm3LCcDJC",
  "key28": "5NWCeFc6sD1LyTQAxrMuXJSAtsjM3nUzY5bxCKTW9iiEAJxcMa3WMW6GdoEe2dyxZApxN8XjsFbM1G4r2MuuYRJM",
  "key29": "336vVjY86XuA3khZ39gCu2oS2rBNziM7BmKDP9XKuJVypscEgV1pGUamJe2gRd4GeA9pkxBcPSUsW98jCzjQXcih",
  "key30": "3FS6J46jGtzf1EsczXymRMKE9MnKihTpoNRFFXhLmN43JZYVZk1sH6PGLeXTxzwKneqswjWCbhhsbFippFJF35wQ",
  "key31": "36nPVBXEwZWBhYrBUpRFY3f2arFc373HHyRMvoDtMasqY7oGw254a6i2vLPu5gVsFM8m4ujWHFEWSUv7VuRbya5h"
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
