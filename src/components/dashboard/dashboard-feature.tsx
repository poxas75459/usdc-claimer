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
    "P4Ux7uUB33RRPuasq1pAqqupQit4cdtrsod6qcLKsgvsNgaiahbmBeRjeAasU5cfohQYsFas8xN3XMBCywvSZft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54KKQXDU9gT7Mbce9uGdjUPgMF4UfwiGP9PuzNczkzTcZgJJmri2aCtLbJ6QFq2f5WK3ktUbWNcDze3jKsERbJVi",
  "key1": "4EZbLYWpdnmhNSanh4r8r11BFA1kiqffnxQMChmcqic4gLcwMfmhxqo8M1pD7dR529u9ZC83wJ8TcBSsfcMzpvzT",
  "key2": "5QJZ4bBq594BYFqGPgYMxmhLMcskZX9u8cVTFLUtsHjpcf6DRJnY9hMqUyg1X639szCFzK138VZ5L8SD4rN3ghBR",
  "key3": "2wmmktyTQgAHth1K1iUzoATie4NeLmsviyixaMsghraksDbjaRYHfXQgmQ4CwXkJM4qnyivUnq1L35uyAaUQ8FKG",
  "key4": "3BMsDLGXW64tV3AuGuX1QszWXn3oyQAjtcyTZzKnQHJea7pW9SEhVpebiGZnbkNrDSn9wCSR3AbkhHtci35qrVHX",
  "key5": "31hXvNRfZD6cFT94CYHf4q3SN6PkxHn9jhbAZXif17TsrKuQrzDVF8HXAUHHC7Z2MpG6p4hVzB8cbJtoUCGi3y1m",
  "key6": "cJcpNM5TYoBgy33yjpyChTtBxq94Uxs4qpZ2aKPpB7t3gf9xiHQyXMA4ssj6S1RezT3XuZ2NSdTCPZbkQbuXxad",
  "key7": "Fg27ecQbAJneaetDUCcsXdFj3TQ4aALJf5E9oZy7Eu2ANQ8GsTFEpDjY95bGYqTBuiNThKXBXNsry8s37Sy5Vfv",
  "key8": "2KdTS45QqDkuCX17tSaMiYFBVJmyQ9HNt59ALWVEzXkWmhcXAEV3yDQJCnLAodnqhFMw67UT6g162HUia7iwh9fn",
  "key9": "4c6JHiTQFJQRo4XSBm6hBeBLnTiKjxKTanQoP2e69yQK63RVLEk9NBLDzs3eG8mWVqfrRQD24cG76juEonVdNU1Q",
  "key10": "pYwxKZwqbRQ6yeivVT6UtBBYSfBXrxVzNrjZE4uWFDdf8uqcZss873YZFSHwLLuDG92gFDsD7BuWkNZxJeLPc7d",
  "key11": "2YoKyNRXRgQSnYsreheEjQrs7Cuv3VjVfWaQtDDjWTUN7phHWzfvKnHT51wquwuvvcgavEovpnZTJRDWTPZBvmiz",
  "key12": "GWSfz18PExTrNWqp2TvdTgbghd4tNGoahAGcyA1jp1dVPh2e24aXJJymm4Va7wD4WPoHTHrzjr7V4qJ6fvivgSX",
  "key13": "jtQARMHDr8KB5NmKumCr7hFwwGGrw4kCh4vxEqE595tavhnnrWTE1p7U9JsHL33ZM9RUXhnPNa4rQ7vqJQrYEpF",
  "key14": "4sYiGknVKqybQskt54MjzGuQt2vmbFrnPUiBHm9ivCiQGXVhPwQtWRKR3ybQyo1QEack6YcgsZ7AwD2E5mX8drDm",
  "key15": "WFdTMCbVTCRkrmK965f3cdA2b1c36sUMvSBmrRtrSBUa94K3yCNXbcN9gK98MNNbHzvBATEKGjoSEqS94zcErrU",
  "key16": "32PMtMAmW3Dn8BAeYJ9prssszosGqtmDT5bqbwjaPzkwcnUE2wM7sayGotbSX1qpzaPyJaX27qEpBCUSqgxQB3bz",
  "key17": "3THVPEqTKfPNdVi5FVDELfKZEySjP4RrfwNLK95fhbWL63coZNhUXAUtGts51YgdxxHMePZmHzWwAvKyammzbZHM",
  "key18": "48nVh2EN3fXbsFBaLphiH9N6KRQePNL2m5KSq6FzXuvoLBPTsRNzwhSwCozxrQ1RbT7Sqk9a8X5xtLrUcVkBa9iy",
  "key19": "5Mvfehh5vGodpDKxzjmjtd94apTJmV96ZC6QRj7kRPpKfNEM4sFL9EeyVcQBdFVfCnKuUTzrTesudgv7fLD5BtfF",
  "key20": "gfppUy5oxCEhDo6xwTjtGux8TMKm42fyX5CUjya9SWUZAbxYB7h1yqaPcc2BBBFEC9wNQBQPbJjz4k8i5m3r1Zz",
  "key21": "2UfWwvDKjZSvkCGBg7evGzNpuiEzahipP9jnCdmYngmtvERCu8UL2vCvvyZQga5iRNnwPR5eMu6HizaMcXBg2uGF",
  "key22": "55wyKbsdhp8JZLSJa6jUn9nSoQX5QrM1Fd5FD5FYkST6NFQgfFD6hjMDMNXRYEerMBfCJGfdydJBEtkmSmbhpv9g",
  "key23": "28ZMj2J8VmXzGBu5c48zz9SEZJ5119AuGmXhNoC3sQLUCTWV9bhGzgL2gW6mLMenFFQ13tHguiDdv6Mj6A6QhwMq",
  "key24": "AHFcVt2QMFHnkMME9f9WtpBvW9xcactWguLHNkZcv35mX6V1iNgSdWbePrCL9CSV4dTqs6CQToLXUUyXdPLEXMg"
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
