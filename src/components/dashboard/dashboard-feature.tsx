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
    "szVQcCtb56bmnjsMhvDJiPxn4eqEZMFeH377o6Wtr1r7h8xMQoHvvRvvmKMqB65CzRgUJVn6SPefxL6EfEuL1MU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PLvHJSFTH91gEbFaJLPLF78GUZ6udHLcDzoDDWAkxhWMaYPRPHW1pGDj6yJ26JJCFcq3TwBpfdcUqFcm3CVVi4J",
  "key1": "4UN4btBktb5BvfmXGFPTaRzwpVPXDE7x1AjbYPLsqsjS497nVbzgFuFMYyEkLzpVfK8UciZhBrcjAeNvLhcApWy5",
  "key2": "3uHX6k7Aqs8jVDKSfXNbQtQQWDjeukw4oRa1xbNL2YxXF9EemhpHtgP6GPKzpCGaa2Hd33f7nCsSA3ZCLZyH9zoj",
  "key3": "6pGu45nytnSJ9Z3qW3yEuG7RYJQdNMKYgW41wmFHHhnXpVvmgt89W87Bt4LVpAHYKaHP8tbmiVSqcTC1zjPWYiu",
  "key4": "5bC7ZsaSpv9Bd9mW4hyy656aRhYgYqaGyFUAJKxG6EwkWjXk9cozLxf6oPwh2SKEW7QKieFHftwYEhsSSHThfQuW",
  "key5": "5xyJDWSm1KrqghAuaNvKQ9esdso9gBbdjSD7KgCqvNnxvoGCKfUXCJ3B3v74LzVgNkQ7wGq2146LRamwt2fHVnnZ",
  "key6": "2eHdL5ryj6pm3kDgCWGAB5yZtAthv4626bkvNCNaV5xboreG6x84GraczM8Bvx7wPU9bft6eh6jXifzBFdtMFhqe",
  "key7": "38q1dWPdXLbAujmZMryPDCLrBhKPFAFHdLQAsXAzo7nnzLbX425QpiPmCJzdRaai1vpbC38Tq1VdZeYZWRvPqsf8",
  "key8": "2neQKc47yAD1DMs5vPJPdb79UHySHLaDaj4acKbAvXXNMNhBJ54WHuvt1t8N3khQPC5aS2BYAm5u2uJvLDCzjR8j",
  "key9": "4fvzrmcCCtpMNcGQLKWsJj5ioHRg46bgczV6NpQfcGecL6HEKVnzjtznnVPPytiqdzDPnucvEuKGWSHa5pxsjCcm",
  "key10": "4ULJRdEARLLPZ2UAhAKkih8kmUFDD5yGw2EdJpiX879RqBbSffAQ59JS84SAhKxBzNgrszfKuVDNhZKCAnJXPpur",
  "key11": "4GF3i1M7aD9jSv1tfs9mBcadymZDgFzywjNtQgC1M7RgY8zZjD5hroTAiZvMZ4a4SyYTMDktm8e1Fa84KUDy2g4C",
  "key12": "3pG8RM1q7VQgHErWzsPA8w1FgEaBNHYRL3nWdDHWb3SVvAs7AqbnNZYCgSmp3RZAVEoRDLU3dXDRpYpm4pkn1cw",
  "key13": "4w8MxqJhABxVzjKPLtfr52ZYcT1TpBcswZkXZg3nycTzXyVdrun1LVTXP5FsquYsiDgKmTEJMgUCuZvcdt9YaJaE",
  "key14": "3UAJ3nsxXiFX5T3tytedXFeSGJnsXomKDDo1hZsdAXNWyNARJiCRARzB1Dssb94P9MeNVQS7PVH3gzrfqZAxnVtz",
  "key15": "5jhdGbysNqm1h2pRrx2LLhZykhrnpodvqfng2EsESKx92mw22V44SEjP6bsDvv3SUowCRGVeQe7bGuqiJVBnu7Wk",
  "key16": "3mVPcJ6cFJqsueXYsDi7u1hQ9RacVPpSn7XXNeguhhPjjhGdUJV4HyvhXYyLrbMiSrU1Xi4WzXrdJQT9M4zWoB5j",
  "key17": "EieewgRuoHGBAbwMYtntnFu7ysmScZUgfqouz6mwRv7XXMuSFGWJCEBykmkpF6sCFzuUrKeKhn4AMAkWwYZKKHD",
  "key18": "4BFknzghNWgQDDe5GVZmonTdateg9upozG3AbicYnhsWiumSn6Mpxu5DYL5NtzPAMGVUXU1xVA6rN2s8c9joGdj5",
  "key19": "4HE5nr7QngqeJAcwPuBZVFfi6cndgBhQv5Hv3EmF1TaooxgJEuBPt9hqseGj8agoiwFz9Mvw8pMXschXRMctdfAy",
  "key20": "3MsS2hA86ExDJiDLFebMTeWMd7EN3tQ2ZhsbeNVrZ2sgKWCaFbxgFBNEQnB2stEEJiRq4UVdZyprY8JqtiJFrQXj",
  "key21": "2Ph1uNtNBc5xNmtbrADEbL22wn8xUdF3ttcdRFcQYrXA4WZgXei4RQFTzNi3jtbqVoDTLgiL4XSqYuQNGwEYerbC",
  "key22": "4HN5nEm5c3Yx3EiptwdkfnX8XwuKbHENX7d6jiJoyEyEiZ5Xz9TwcpV8jZB2DmsTVxMhS1Xq9j1tCu4HxzcEW4ra",
  "key23": "26UUKDLF1deBEvBpgbi9n2woko5Yq1JHQe4VBRvgYYayarwBtr4RCbhjGATvTWSEPNByDcrbf9MdtpQaW9sNXSwv",
  "key24": "TgLiXGtzLpuE3jehg8JBbWW7yxgs3bp6Cn9qUwCkVzL7YnzfHBVQjsh1jmMH138Xc6NRpr7dvxm6SuQ3b2z8on7",
  "key25": "4wKQ33j9CnMAcqpELthr2jtMiZFvKqag47TTeS1bcfsE7B3JVkhPS92i2gHzzrNVmc9jR6K4Arsz48XtBXCYxqLF",
  "key26": "Pn7ER41PJptpMAbwJ3EaUSEExAamRT4hdURxfTRfKjSRj9C9a8rBvm7bd7YMmXZhLVwXprExua4YiHtQdo2QpFP",
  "key27": "2rjG6DjZRk5gt27xzoXHFrKgLhQvyzsoQW8JmyUbWTPTrMKuBvmoCqti3QRVcn1mXys94aRAi3ftiVNTq3R7umEh",
  "key28": "31ckTacM39PTKhhwkRhPhEz3vVFYfVqru6u9DxBLcJNSGJUy34CQNq2DxqoP76UPXFuPLGEJ7Jove2SwEDbwp8Ta",
  "key29": "4tJmm3rbdxVc2woe6xYARwJzNkEKSFDDpco1kLR4NBT35eiRngUvGxiFDB6thSZB6hruxDm9Ch3WnqYhNz5kjrP6",
  "key30": "5knkPC2L54Fo8HjP3ti3Dt5MU8DVnZ2v2LTx1PCCthg8GKNT6MB7iKHKRbVicyzejmBso5q3KNjfUyjzFjiW4aZn"
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
