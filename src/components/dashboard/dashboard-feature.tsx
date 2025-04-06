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
    "4NAwLQK6wva7TeaCFRym5RV3r1Yj6JAYhAdtJJ64kqkPzCn36X3qS6XYDxahsdxnbnP3U4eAzq8rH1gNq3quuvSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YXeUYTXBcA7qM14FWVCULWmhM92SCBogbPbm6mEputtQmCbDpKtgtoPexuEXQqhmUY683Z84MHb2H7ngQFDut9N",
  "key1": "4kLQMeHAWFWb3TesLk8kEk14jF1NbFt4xXHmFqf8U6pqpgLudDxT3vpMxoWqMTJqR934umoTz9rTotZR8mPuRvqd",
  "key2": "oDKP1UkyeLmchoaN4JAB14SN5i99SoHHjM5GVt767PDvdoqvpVR4nENtVs2aA3TCgmbhVdQCcWKdk8oXrAye7RR",
  "key3": "2opqF97J7su587PpYjYcrM5fZSmVpr973sRE94PbQnD73bSQYkwhrNB9oHzg9ryzjHZAkKgXNSZdNP1mVqMspurT",
  "key4": "sa9VsrFYKb8cqevE1gh55ffZtKjNiV1oDiW9oxneFMGBMcxaYuJ4EWDbr5oagiQ81dKRAXWv66pVeAEGgX3RcuP",
  "key5": "AuD73T369KZKhFuyzFCryZxRtBwdvfJEv7xwPdkY5UsCwNiBTY7b2u1vMwmxombkh21JnoUcetGicUWabA3MfaF",
  "key6": "4N2hSEEyJgZGo5bMRMTUXcuzg6WafFU9u9rc1ir11iNnTYaHS484XEj3GPbKSSTXU1ieM2wqFGSg3X5uLKZNpE3d",
  "key7": "YvHYTfqC1DaFtwe8gy7sHdPY8iuaRXjQYUTBPgWWuGgB7uAUSNnU5dAHQCyYQrh9LNRyid6dqzQEa8DWGtdNx6B",
  "key8": "2fvt6b8NK4bzqrivJMH5QTBejw49KTXNKzGLMP3nbgiTdobn3eoX6ck2d3ZTXCN97XezYiheLNNhgYr8pBJ3DJeV",
  "key9": "5rb26GbYx7uXwftYRoqviEH13B9xiCWqJ5azJCkcj8YnKXnv4NVuu748E36Fre3tHHonHZXX6cmkjUZTBiqV6S91",
  "key10": "5e7akJwxfmCX7jSQbL7FVcr2xQPBgsMQqRa27tsXMzGe9KNVo3sNeBNBmFpCqPLyFgFgg5xkN2t4FdcrTuscPQZ4",
  "key11": "QrMQ41QKY4WVBT2ibCMbmv1UCBVmPpeFnptQQk49VWwJGJPaFWGpwQMepFpoF2UqCPmUfC7Q8VWBe9vHEPzyD4F",
  "key12": "CnXA91J8Vi8uT1SgBk86wPhC3LFFriNuqnN4tU2ZWvNe2XA5AhFyN1bu5sQhyj52qoGxBJuhy2aeQtrSseiGbXG",
  "key13": "5fWhRfCr3BuvATuc6dYtez3NF2dYxyKhiDQe4Qd8oQPgQ8sRyvBdmd1XUQtqw1dwX4psde3LrT1eGpjSJWvpMXH8",
  "key14": "4Bp2Cy3F9FT1mWiBhwPRoJZTVGqu8sZ9AH7z843LfdfPM5HonM4siWWNDCeo9VcvUrCzv8mRxsFRSKXyZyHVEd5o",
  "key15": "2jvECE1KppcxeJ6b5XqSVU6M6r7PtGQuwxxvcbbVjp5SRraKuWhwog8fjG9iJd6LZJRfdXJJgMcW1HjgJQKzrL3D",
  "key16": "3GNCJm359PLAcby7KbvkcYWLLXHCz2FCu3RP2kr9qbfAQi7BGUyBH9gKt5DpLEav1WL6YRvP9EHwLb46786bEDTV",
  "key17": "3ARmaWp4V5v7mh358VCTVzUcmck9Rub7aL4nGqZKzo9cid7cgX9w6X5ps9xFWrAeKrq4MAvVjey8EbVoWtWtgDjz",
  "key18": "4UpHs927UfcuVPBWHQQGPbanY6Ydyo1UBTFVbNaKunVDf2M9ggqynQrW68SV2UKYK8B1LGbErkcWXUVjP7vExik8",
  "key19": "2hRjcLMM2PqZJd9XryvpNayZ5iVpdsugmwsPQJSVvtsKtSGyQCwet4PEJqt5TwnLLxXYkiDd89Nu489c7LXMD9so",
  "key20": "CFPCxFP65thk4j6vAEanyKjjscw7LkmYf6HnvTD47mpcja1wPuTga57vbkwd78VhNHBJ7cQxzDNr75WkrkfcQcW",
  "key21": "5KBEDtkk134eimKPr3kaWHEqUbvM2LKyLoogCAGHdLnkUBt8VnEv44q9zYSA8oF8ThCV99tjVRLLZSMU476g42eJ",
  "key22": "2aXJ5Vu9YXja5UULyhRcKn5VzvrC4fFu8HmvRQ2bxT81bzctbz4EmwvV2gutgoRFVWU19CEkeB2FQoZ1ozMf1WfY",
  "key23": "3Dp8Xv6EGhynMJwVMUDYmGfZxQ7a9E5KoWf5H5yW2jFujFBtnVKW2R9HAkVJuEiyWXZbmSbojBw1jQ6Yojg1BA32",
  "key24": "5FVWGuNLJqcJMx5eZga9JnhEgMkHvvBHxYFCPQ7M1bazxhVAsJVmXe8HmZGz3BWnHcbBtqyNmyeaUpiffBsWdig",
  "key25": "3b2MrqED5EPQadEE6XE4VTPgPoqdPyaG8hepBMiDGZTpSu7UCTXo69Qj9XABZTS2G6Ju6uTY13Nh7znunLBzx6SJ",
  "key26": "4P6CV9Eyytey1hVuVChxma7JBdphygAZm4a82puTVtyYH6UJXRPj2qTnJKE3Bbd9MKk3jBBeLmR9u7Wug3LojrQh"
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
