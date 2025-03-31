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
    "3ncHPgJkajzQu4TeYPasNjRUPbsq8AaAhbobMaW9exUPGzq2wXD5JgTV5Mb1XDbvJoc9an8hgvgjiEvRFVEcW3E2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DKZUW8CVWHRSDS5qr2oHUTo7kfgpR682HfnX63qrWzhfGJNifp8Ma8aesdThJSi2FpZK6stTywMVoApR4K26Qfk",
  "key1": "2QfbugNVZs8UeP1cXZtWq9BcCG1vHZmMbCfy1xnFsuuStZXqEawebu6c1Jc9o49sF2CEPsAjcxqUxWNhALD6i6Lk",
  "key2": "21N4zH56HTVgTh6AZKLDT8HYtxmrDRwBxmbodYkZskB7hHebQBzddghSxUfwWZqkvwxaS9D8cfDbHRMVb73uu11Q",
  "key3": "4TcvYzncgngqUc99EA98ng5WYYQ4FzP76pLCF8XiBM1d69SJhfZodhh2o6Ms74D6ukbQgwsq5MXaQ8sLNvvie7sK",
  "key4": "4pJzjUYWHyk8dxTmMmTKyC8qtk8PpveEdYbKDf5ZjGqaQoNjE2nzM8mSh4Z4jEpdGp4q85esNifhc3Jn583peTQJ",
  "key5": "5aJvFr468EKT459pvumucykDtSKT1tcPHELNaYfu9MMfcrEZZTNsYU57kPYfToHbuseG8TZA2p5QDeYERgRCH4pH",
  "key6": "kBwwaULDBw3oYXwfEiYcxomqMotRG8ZAytDNUA5tdSwnGi4nk72zjpRjbwMaKAy5RqD53ZpvvXZdefLTsRTDheB",
  "key7": "53mFPhmSN8uJccZhvxuV4wn21CUpNa5SopnqRFju6WoW42TZ7pHCJukZ1otvLYaockP4RGAaKcjDBzn2MxDfYpBu",
  "key8": "515esWrDSRGYQNpiEFCxjHVvUiWms4jtPzuRwE4U6XpVQziihsvmaqRCSc7UEqH3PHvkTYbuB6UdJWrQ86Yk8U8e",
  "key9": "47KQUgUmS6WH7vM1MDAfUcoUAza7UtejugYk67Jqkf5xsGwnUCb5yfwESMVxaieL1qhLzvhKeekpsM4ssW9SVqa4",
  "key10": "ivQrntuUBwYs6zewqqKhzHaVyWFrZ4r5q1NVqAC4RnCXjmQoPhU77qSjVwxF93dHuzfG5Fx2p7WNpLFPJLXKHbT",
  "key11": "4ywHGEFAeomAk7wcP1MLgkjMgbPJRUUnaYrQcSrtWKUmR3HkTmmnZWHwdvijzEAJvVWrfjbz5f4ND2pXSzNk14VN",
  "key12": "3nsfk9ZF1z1NYobw5kBdXjET6jmp1rvJMpyhuhaSvjQN9NHVzATdAdtAaFxFwMZxmweBqZ4RcLMs3WwEaMCAuYc5",
  "key13": "2t6GG8TDbApdT4YhKVgwsyoc8NJE1hENg5VN2A5swwA8PPLeW69FEMrNBKQBVgf7SEP8b35jntKbiW72AQDAawjN",
  "key14": "5MX3zsBk8Ft2Zzn6XenivAsEqYJuPkh29NaXb5fKNXmuiMjdPiWn4Gs5JgZuTah87RPzJZZERe2ch12cfdFKDAnp",
  "key15": "564q3ykCFEacXogfwyLXXWkdmJ2C5VZT122ctvzYaUdXJ75YC57H2hBMWabDVx7F9mHG1idgw3Hv4mfc5zAVDhQ2",
  "key16": "2wQFU6rsy3kkBScopBcphzpPFMSr5sykbqo5CzxtTUdhakywgUbnM6kZq8mMia83Pgh2KotiZAHKpKou2NmvNotQ",
  "key17": "2TicjDhGiaLuNfLiLa5cAoNBeLuXWPbnNGXLwdCYPAqZTUXxiytPg2bAaGC1mtEDEL7xGrYJVF1MCV47CfLChEUc",
  "key18": "be5Z6vJUh3HREzWiA2QcdCTQyTme2GGZehxrxNZKnJQQEnLZsHhCizctCBRmzUaKAmQke6vnpFpkLURZGj5UXvR",
  "key19": "UAVXJ6rWSWT1pNuR1xtvY3y16HwvZU483VTQjgWd7HnLGG7npuphLXTLmq1UwqD8iHALnrhC4Bpg48E7YfZqR2B",
  "key20": "33d1y8hstFf9V6TTUcAFhYXpFYE21W9Fxaq5XSeC2gW8oxydhDQGX8hgqD41y8ykYpiAn2g5jbQActakXp9rtuuv",
  "key21": "3XXbvucYm3LEKHMyoBb33hb4Y6YDH3HyhsoTNEqjGWMdD5reXbjB3CyG2pGypg4W8DKRJJupRLcG8tnHXvcgRiPQ",
  "key22": "3x1Y32GCyPvoejRzZ3pnLUkERdPrWoCr9jZdnXp5dAvb2ShP9kBKjTyBeSYBJmk8HMFFsH4AphVkCZ1kGwSjQYVG",
  "key23": "4WChe6Ak7YD9cV6bkpgPCi6vn5R7KixEvXYgUAzbPqV6T7CUCTyibiYjFrVg3SJtNUtjXpGQt3q1N6LRc9p9U4xC",
  "key24": "2ez7Sg46yzNyrND8zuybFtE47q2ER3ngDKDBWRMQUhnRBjxejyhLcT53K6JYgpUzqnaytLhwtxBDAt23CB3yujRg",
  "key25": "cqBv7xxkciCrmSNvoM43E1iAehpx631XEms6xN9GpzKiAtyopZyAXyA9ncG2QWfFc9THVjj2y2qcBdffvx6DtJn",
  "key26": "3S3LCb7t5WRpjQ9sRNcbkQeYEMmPumawc4CthjGAP1pbPMzrfU4jGtS3oC6MCAx6hfmnL3pLZd9Jukj3UCXBaRpH",
  "key27": "43kMUTNDAHh1Tu4JhNvUwDAjwmyJNq2GqhsGbi152gpGsxy6VTcoC9MTYZu19jvSpPcLkRenoC7nXk3Vy6ZUBuGd",
  "key28": "dV1UrJNkZT7ofGKKxM4VzSNgqFgeM25SwiiLC48omqjLPzLzPnBLHNUEoTok3HnH4hoBH4h9E7oFZotfSbSNMrw",
  "key29": "457pqV7qUW4pkDVQPPAbcykKfNygG3YprESiJXqRGeTnyM9fyX6gdJhkySTeosA8T3PBrbJ3FtCqmhnwuFQtkMF4",
  "key30": "Hw5nSd7hnuuzNcC2kSynoC4WzhQepSAuyWWiwQ6jsDLePJjpo4f5d6ksssS1MWDTyMtVHpGSwMPiddHPmks7QbE",
  "key31": "fPyxFVjGuAunQGudeW1vCvRwgNyazKLj6gzCPBZ2wnKZC9aXouVkS4xrm7H5WXcXA9W9yU4Y9fe5n6TYVkxEusy",
  "key32": "4hz1yNJcLU1axiMgQyXBzfJ8RksqTzuL5NZDmH97SeFMNEiq3SD5oDF73SH3jHanDFb8YuWqqYDtqnnWmqwuK1GS",
  "key33": "4ntQxMYukr2i3U42LF6dcpBmis1fAcBBvH5DrgLo2yeLr1j3tWSS6sDDYnu8jR6fC2ZaaPu2VkiLRApDiSLT3sQf",
  "key34": "4GABTF6kkM1eEFMMQfGyhC4ANsuqVtQpJwwGKzka442AwdP8sHWT4BaCsxYhsVb4VcjaP37AgCBfujDZ5TgUNHnz",
  "key35": "66VF3JgWpHWxwWSpyMcyecjL3DS5Mo3Y1CyiMYZwJNrnqaZnpzUpvGoQcu8MejVj8QTG3Yd3rdYNRjuCXS5V6gPA",
  "key36": "5ZSPQNa9bXAhMwm9pgdpjHYx9CD1vwF3J3cFfuxyNsqjK1Z2FXzXp1TT6Ke2ffFynTth7JspLXw41bAv3xrirdxn",
  "key37": "2un1UPKEgvHFNz9waoXVSS3vFH8Z5VkgWzsfGBm7hDuQz7ZVTJ3H3krycfMjEBTVWwJS2CmaBNVTmkgfQGauSL6o",
  "key38": "hz2wPbGHCACxg6w9bS7tVgmmzv1f2XzWxMqKSNDD7wU8rmttZsSJoNaeqhNnaq8Vb8nBA4r7ShZgY2bAXXxyxos"
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
