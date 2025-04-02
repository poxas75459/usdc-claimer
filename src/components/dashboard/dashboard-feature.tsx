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
    "ygNxiEvC9wKN1NCGSCKcZCbMJrp9VgyFaRiWdL6dyk1osWP3UZWfMWVmNuHCeUjn4eVxvVvJFCa7rSqB1V6rw7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FNssLp9APKiurcrj46LK1JrpoQeLo3k53NqQq8M7Zy2siJZRjjLQCAanWYa7N2SBHLFjdLyfxJqieJF4dRdY7sW",
  "key1": "2Gd8NbYiHkGj8xfNTqX7vKHG4fwf3KTKUhYta2mMQLqn2kK4LLf8fy1ejmDsffiDMgsVs3Y7nCt3diF1Zs7dZjFa",
  "key2": "2qPd693yzN3q2FkzWXcvssm82yvjpCfSuNxkt2GucjjpHigj74tVZGrBrJHtiQXQi13wYvXCu9TbUT6mKoKzeuPA",
  "key3": "2P3NtcoDP48pJrUGN5NQcs48JG9D8D8E9Zd7VD4YxdQf8w2195qAaGiCAjVmyVQXMdWiKMfSxY5eqpWydj7hy2EN",
  "key4": "5sxuzBwtfjauQyn5J5Z2KUbfvCqDastwoSPoLrEA7exWZPsutWAYjhHWFAqQcZXkUmiFZMG8LLrpeqDSh7QUtpN5",
  "key5": "2nJrgVDyvaGxdJmhKFf1e3voef4tfMbpZa9kWz3FytheicfGwi175NAqmvUeUpg5jdMtTJSUfv7ixWyQQLny7p69",
  "key6": "3UugxHhjpTiTdqa4WARCoMVzYfnHziAtmMtsVvY8aJcGBCh9vt3vpfDWqCpHDmDQ2S3UQ884jsrNRLXdBLJbJ3Zp",
  "key7": "3wDgRd4qJigcTpt4kXWhhDpGbuqtYSiLdaXgLbfCuRxxX3qiPqD1eMSvzAVx2CpjMK9bUygLxGusM5NN4ioAGGnF",
  "key8": "2XappfoNt2LL1oQ5ip2phkB7b2Eh9mg4gCtZeeXPF3H1gRTUuX64xhjgw2EQp1eyvGmcakQfnCDPvhvoE5Q8aD2i",
  "key9": "53D3BdyLCbZbV4ui9MaDpYwiEqmEJz62Fmb2fwDzHPqf43qM5aesdcPf5NRMdLf2a8EPrduaip2MnegfCVcY5TEP",
  "key10": "2cedaago8Ddc8HiawQ3Hfa2m3KQXkfTLrZJpMPdDSbFZVZRkjKQb4ghsz7BedbbPYbZufHdcsLeSC1FZtTFpdeiS",
  "key11": "2T58HLQ6YEB7zxSreXxLfHQ9Wzw9dfMmZz3km9voDuEEcb5wDU4YKEu68URfiDG8fR8461WN8ipyj4wHFnPGqGe7",
  "key12": "4fy4ZtjLeXpZ1jGeubFLZyuc8Ff9patfF37F4cTvKyUDPEK9SGZgbGDs4gBCZHQHC5MFKXRy1qSJaEJM4BvEPVQi",
  "key13": "3BU2q7Q3TDm5vAkk4VBn4fWRBWQ5QgTJHnYVknkNctth4yeoFCeNj3EzmvmYcezFrergkBXFzRFF2NJz2wVypQs6",
  "key14": "2Uzoe1sLtGUzzkFqkp84gtLFBhwCndop4oAzqQGJH1dLrXJJoD7j9uEZ91ojkZBSqoYN74vB6sT6qSvUfqho9xCG",
  "key15": "59T1hj9PKo9sXY5NrS6L8WBwQjAEFzmTFBf3pXionwZ4e29kkByigJah4rThp51wUEugam6N9bMivNVQ2dvpzHrR",
  "key16": "27Y4oZKzHVUqGGW5wKQNzeiMZ2K1k11G4QESfxCVgnmmkuTVySv1bFF68fqR4tWasQUaUQLZ7U1PHR6MTTTaG7Uc",
  "key17": "5kHTefDacDcip7J49xZpgnvRKcggrMVaMB6P5BViBGR4ym4cENLmWJyNqv5t6ckmArFj4VncncCujWmSdtyy93rm",
  "key18": "2uhboFYvUs4jXenZeGf14VwAkcjHMPwePAeanVfLmEMxzQaXAzDgD2VoVd2vQeD2vGcFUWW673hjypK5PE9kBVty",
  "key19": "8oERzbozEne3Ton5xnrkVsWLqTTRtdLdUnXjhWsFKyqBCaM1u3XwbteCZ1qE9g3iT1jEyjHVqNn5AXaxBmzaPZx",
  "key20": "4y1pMN34Lq4aiDZcS4KtPNUSUVgRxxUYCwNXy8AQcEGQbkQDFyExW2Lxg5fpoD7yukMc4RuNscDKnk1aKhHpcnaY",
  "key21": "5djeeU1QC7ZPkVtU6kVv2WnvKNXUU4JdiJReyk2gCAvKsbECWsog1FkLyxT6xMEFA6hswMqME9GrKgUpnmCuULkx",
  "key22": "F2HpnWzNdYqWc6xQSnq9XwxSVTaHi6LKoSzC8BDMDTmF7Q6k8HDnnza1Qwyqoj8RnScfyZ6jx983CurMWJhrnNX",
  "key23": "RPLuxefNJHi9MSz1GaHoZrTKPmBaB8DQ3WkKSV9wii48ihgK7bwB3ovvZco62AGQoFiH5XvNunKsXS7iKJpcJ6X",
  "key24": "3WKUFzqVTiKWAA9FsJzzsEG7Nq8L9UyAoMKLrS9HoQAFisqGKWb5rSnoaczoD2nWK4seAN7mrBdo6xrBM95zjJqD",
  "key25": "CyWNEqMYTsssio6DeGAnM4w3yFXUc5LRFYxaPBpTQ8kEWzwk93q89cnzPAn8NwfGFa69TB3H1DoNNkG1auCPwsw",
  "key26": "4XVHcBAZEcwb4PoAf72aqUwJWDPx5Axj4GobYNuucyEk46ahmG9iBd7yipgRY19R4F8aH3EzPzpAaX7baHM6TKAC",
  "key27": "5RLhbbY7UHXqTkmzobDJ1fdAzSTPRRUbJNLXp4nLQrz1eYynHbXbfkXSoQHhgewdqPUAMmaTvwJuCC111maGc9BJ",
  "key28": "5Z1gUgUQi9QCDtkR9Xz76Z7hGQpTqiCerTjc8S7neMPoTkVBFNQstDg6fqJJXs59byzbfu2CreGo8URQCFjB79JV",
  "key29": "5pU2H23GDbaSn44GLg1fNmHHZQLMUBayrUDJH38YNrQ4MhR7P4xwiUiCTk15WbSCrbs2XLQqFrgCE7ZbFtK1ZgZE",
  "key30": "3VWq8G2JV8rLDizaLQZFRGwYccSNxfpApqs4iSdoyGcsMNggRdUYi5CDd8zyffBanWqeq6xcRgr7V2Z3g4fgDtG5",
  "key31": "5JgJvEwWvFA2eohE9gryKEtvvLmJNn3KChjYR8Wi12zF8VsjxfmJ6vhpXh6XNG6bTWSvgQ5q4kcrt8VoFHG9bMCP",
  "key32": "67TJuVLr8sGjTPGUbDPiC1t5VQLodLAjFYZG4cs3g8F6zc3j4FD6yTAicg3Sm3ES2TnG2zNWmEZmhnW8J2sKppSc",
  "key33": "29q5Pch871G2UZNSg2cwGFDkuSMu7GQask6SXJHsVJTXW45f84yTraGAnMQ9zctMLXhxm3wRy2kiXwnybNxPi1xc"
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
