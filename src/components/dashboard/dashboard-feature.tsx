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
    "3Xi1vCmyiDNZNuzDXny7JPuooiZg5BY3L9ucJbxrTFEqWfSb5rhkSsxM9AS6trfcXMXWUeDN2R5PTUU6NimASsjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "582cyXWWH73kV7DgiZZDE5C2JePGDigc7HR9dvRBCLnyx6DuUZciwRw6vr3KXDhLJeAVVtYwXmCKU5T43YfbHUWT",
  "key1": "2tUrrTkmzp23KCBteLa37pycjcMB9NRRE4tA8FL8qEUTUXeKch7U1X72XUE3kTyBQc4TVY6AiZyiMM7UJifkAF1L",
  "key2": "5gQFHuY1HkjprYbYASdE6K6j2JBYNnmWFCebUcsdvapfkKvh5tySgcVefZFVJ8W8A9CHY5zKJKeJfb52LWiAdi6J",
  "key3": "5iNDSYrS5WZGcRmzuzMq7fg1vxX2veSSYohBuHoWJ2ZViuqU6Byi32v9RmJy6JAPVZwb5ZE4ypyzKL3JszWzefwB",
  "key4": "4mVRRVftgjRovA5XH1i5pKXNisB9p5f67y8FS1H7GU53UXURkQ54BCMRmRHZppf1XXdSBs9nMPhDab946AJVnCDb",
  "key5": "GD59iDobqxnYb2V9AguhWAEEcAug17epB8BL9GVkBAo2rENRgSWVJdhYFwm6nZ1TniqHPq3KR7Dnrv9ADwXC1A5",
  "key6": "2sLdRMwsWGvqhZvkCYB8Udbw6w42DzYqvdikdWzDDNPoyeZUfHkHYYwD5toHN7Fx4ySWXgPQwYSWw1afqUAexxqT",
  "key7": "48z3y6ucCaELqHrf4kV84UQoba9nmoHdV4rJE1nYNPNeb4Z2GvYVDu6w6w3dp4VhTrjo8KTg1EPz6Pq8TrsUtLxK",
  "key8": "24wt613s6i383hLt5cudM6fcdErVU2HV9UkfZoCT7pEAs6gtfUEcyakTA6nNbJtkZW1UaQuzkipwmyWJE9HuVPPR",
  "key9": "2pEYbEGmGqiyfrTuHhLsRmZ1M8wPw2ubYYaFd9onaYfkTnHD4kU2WPR6HgnpL8nxKTwrB5zkeQkZJu3dgtjoUuTz",
  "key10": "3c4hoSjZbVkePzBK71YfJkfcAucPHTQVbbhmwxYhdPeuff7fAR2gCCeDA13KeWv4XNApYTZjJ7QRuXMXUkUjLtNh",
  "key11": "3q8gFjYU1viP28Ddk7pqxFnRfEMP1fUL4JuCrtAEy7YtYfv6PtJeC2H23wPqp9KZxnZYY9kELJQb7vyvRqMcKHuF",
  "key12": "5e33VBxT8exW4nvRTibo1dhR7gE4AahgeYh2MKJy7hmWT7jRfk7Woq8JQEGpAe7ZLoLYEFUXgUFn4pFnvUBSrRyu",
  "key13": "4sHHgJw9giDpRuA7ZCqA3A8yrofNG2BFWbkYivyYSmJJgnC44iRXGCmLVbshq9wABfHLaPHjnTKKXuDYVHdGCJNH",
  "key14": "2TJ6E7xv91afGt64FPf7uoq36VZwxKKBpBxseVWreZv927eNnTpEizsjq2GXisotvQZaEsbrrm8Vqdd81Y7NsgMu",
  "key15": "r2M9B8yCLp9Spg7YzNiQNefwTG2taVgxetVMw97uLrh4PMHjNXC9nyYv6LX15pRJbWyKrr5dJGAfgkC3HAZsHo4",
  "key16": "FvyRpYkfUtsw9ZCd1j3SrMd8JuUy1VAnoSbBzDRmeeYqa63y911y4cAEqv26TZ4eC87QhBwxfDKDntwdawhv5kx",
  "key17": "55cE1BwBmdmF9iw6J5Rh5pR9t5AWTtTbPzpxZbLKZZbUrBX6qLoASvikek3NwhA4JLgnaXgbgc82fUr8kaxXvThH",
  "key18": "3B1GmX1eSit5FuCgG9gWGNudydZXMcoCynBtuKTk9qHjZxZtykeRNR8uMDNppNYt7FPHasshC5JuZnBrqBubdNxH",
  "key19": "5dCyLPCH2tFe1KQea1Y3LJ5AMoHq24X2FA5KEy9o6FbtnoX1SSfpcvSVg2GcJZR21y2hhQyXvkoZk968LLrXeEod",
  "key20": "5c7xcJFFx4QTAfn8cXHv5XLgTdEJccNpnqmMvbkuDJd3rjhcQvpzoi4uUWcQChLhAHrb4KRcKXcgUDsXGJRAybV",
  "key21": "25WCaCHimz3iPhCYXHHWxbNwiAVLrwA2JqYvjQvmMcD4kLWQ4RJeBfUEdqMJMzbTwHh3gA7hXE8GgM3xECMwKTab",
  "key22": "5Vf3U7NgdQGLa277DKTcTnDFNmKKX6QmF8A62dR3zTcGDTxDbzNbpvDBa4vZ6mbUiTV1miUx3EPZCxpo4bhuPTEj",
  "key23": "2B9CFrRycdzjLhg7VNi3wr54Z5CbyA62Hf6C9vAQ2sCBGgMUXaMWkq2r2QQxoDxPs3nn8UKk7jAHyVHQq4LES2SG",
  "key24": "Kg4kwExeJfp6gF893MiTET2WkkZ6quysxd9tsub7AeUCi6Vdt8EyvwCXEgySe4jKNRS53JXrmCDWSzAaFLk4BqH"
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
