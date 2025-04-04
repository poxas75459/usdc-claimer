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
    "4nFM2ha2HyR5PWwB5RqHoCBadzRTRsgEtRUfzXnqhXYngUzkTvris5f7Gqo6bP8acefxAUw1a8Y4SY5Yv2HvaFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LojappX4KwSKbSkMw4Bq3BGvqagZDUEGmsi24gWkGCM7vHgSqF7BMM4mpwNren7KN8fgBLsVte7TCXrp6qVaygx",
  "key1": "3aVrEYvC49KhY2pKmoitpaZrTw6thQFt7KoshdMYRgnS77Y4X7vxJrHx8r29fGjGqYPetZc4mELTRMomB1wSuia9",
  "key2": "561ZX9utjF4HYqXWN8kZYZCgdcbJ2g65gZtMMNmwmRr8w4g6mn7ZrDq6chhyg8Grk8oJHZDokxEtH1e2fUZeQdYR",
  "key3": "2FmVMbLvgw6wFJYiufaEfoPG8P5ALtX78UG8Z74azpr8ttxeP3XPpTfrwqZ9rR4s56TGnnXyDzbyERPVxQXqDhmT",
  "key4": "zazEvq1Vib28ynputUJF2YrLrpHgM31NmK5ZhbPRZp6cuVUjnGmR6oHRqAYKn58c9QaDrD9UDsytxdqsDa7aoT4",
  "key5": "xjXMzvbpWD6Kx9iihx1djifjHdyACdR6zQTB3TFVqEfZsXxMDVvVAmeGedDUwnxv1ucbgr3UemxTMY5bAQRNunY",
  "key6": "TsFLoASe6ppoDEjWTgg5UeN3FSoeyJHwpy36PcH4iuaa6LvLU1bVdg7bWnTjNEnz7XDoaZ55jyjzZNC17pqja3G",
  "key7": "gUFcco2w92RvbvNAuHA614WUXm1iZCXJRG3XkCJ4vyVEn3hXmabNJmq7o7qYgHPyuoEHVAHUE5Ji739eTN2g9Po",
  "key8": "5587ftng7VZfTunriuC9qcLSjQMR7H4EYseFeh8AKDoEHqQA3QexsZGzyFZnrWQKJN6q6njacupN42i3zeh8XToi",
  "key9": "58tUsspJ9HrgpE1B3xvd3Ykur3MHuPHVxPxQhUJaFux2HZN6kdBbC2tSDoTYVxK2ZNvXKHhNQRdptyFPgjeS7Pj4",
  "key10": "2DKRnfCqf4rsYV6VZ72MRaRQThJjFFpTurtDHY6rvdmKM8iStjSd7xrQmDJpbvYNJ5U84rc22SpGKAwBaJYXS88W",
  "key11": "4yBRRRB2dB5WXCQXx1sAUKQ8Z7gAyNKSkSo3NXjvwmFKw9prP1vGG8ZVceEroJMMzPAJx5FDrh5MM2NQs9iuQ643",
  "key12": "4uHd3AgsH21im1DAcocwRspZ6M1L4Zhjby4FAP2ddPsgTWkWfHfbJbaVJMdXpLVoVez79EKyBLYvYLSxXsQAuZzm",
  "key13": "w5qskAqQiAi8iKaDbMwYWGfFvRrSiWysw3uMQgTozszN9BxKiF9LhBAxiKKyKDnD7DTCpL39RdHB3Kq39idxp3i",
  "key14": "pyc2Rkbwicgkg2XAUfgNywPbwFAxvKUbD6jV9MYP4DUtHLiSJ14BDpzQwAuzi1H4rydp1SEgDKJxFYguxvyhVL5",
  "key15": "4DDuGnXEUxqw5dmncKt7E2H5qY8y37iU9xEV5PuBEigjc3ASR7itPsmqbQ2AzQpwWrGcTtAGzmX7rZtWFLKUmJoe",
  "key16": "HrSGDireGPUHGiVqDJs9D9rT2G1Pm3Wbdydu2E6t71pKT9CqxxoLtdLNAeSccWX7pqHSBHaihf7Ws9gMKVp6yWd",
  "key17": "33AKp2e1aAZYNTtrCpY2kSbx9pi33nkSmqXwWcemkeADqoZagt5kFKWdkwNtzUMb3tRPKjnWCnh7J4WVDSg44PBC",
  "key18": "49quM1Ba4hk3UhVjnur6JbdCnJMKw3dxzii2NsHE6VrLidkLazmfcVxVZrazqWx9JYBsED8qBtcwmDLt1skPajyg",
  "key19": "5nT44F8WkkAH7EjfjvonfeKpDdhntKRbJhfDKuJtGvZde1N8tAY7zf7LL7K2EG2Pfk1TGfoyYbuuP7grsjzSghKx",
  "key20": "5VzcHvDc2Q7F8UAkJLhHohfKLbaiRBXi6fJcsGXzaToEqn6AnZGzJzAM8ERgBkHSekiXV99BFRrc9wLY5VZBW1Gm",
  "key21": "3rc7Zjvg8YGeEmKFaJMjBVm4aFVKWtmTigsXHsZFZxvMTwnfFwRz4xpjrnS65UgrA4dGmLMrviergZa3CWN26q7y",
  "key22": "2ZSukomC6Q29Ynye5yNeCjzMXCiGkKa3nNwgfLhRNYHahdj9PFCYi6VreaHSVhfWZy2j88mEG7R6nPZEBCLMNQg4",
  "key23": "36uwDMfPCAuYUWifAwpfZaBEfrPhhyiMYcsYGfrQUBWBwrhX2KhvbnUx7ASK7NwWL6mturwvrzyDKEgTumoBbCqm",
  "key24": "3fzLS5t8kj1TZK5i3kkcaaaZUhicTxA6Bi98Pc92Dr1ivxjvYiQ7VkgFVKuVtjhWbCu7v6Yn6DEZiPUhDJzdPNw5",
  "key25": "5jdidurFiJzR83nifLyKVSAwK8CvJDMv4KzrmRN3oHr4p1bLEScaBeoTP4byAcs9y3D8juL5RNbLRStDvZ6wrHsB",
  "key26": "2WJPV4PbxkmpjBF8hcKq82tuakBuRo6M27EqSCCcK9MJiGr9JkRKY1PkzZetoebcnQzEzK41sybp1wMTKjn8tjUv",
  "key27": "4TA2aobvMcqN6LY1MxghrdCsD36UhfFCM9pmqfnvAH1R6d8Mkepqw2yTY86UmpkgreSoX7fGtoNmWJrgStnF98Sf",
  "key28": "xvhLG87M4LhyGY48gf3gf8aMwUb7noNUmdtQEotgriMmXs2HrPzztkyAcg9bodhFiAN6j6GyXKTCfsUbz7qDLof",
  "key29": "4RkAPYffF1TXn7PXPRvPh2p5eDZWmtx4yAkynTYP2XXesavfDGXsC6fdZBh7khbZy1cFT5E7gbjgjHVCustBFNMP",
  "key30": "5XsdL18ikYh9eByirad2WC2jZrkPZUYQwypHJm1SywrGQY42NnNgLf2YMor4cD88hsVDQtNjLM1y4GcSK2CZUuEC",
  "key31": "4Nxz8vDrf3J3zebLkbwJbuc9iUAczn6VbC92hF83FXVRtEW7weddMpzqdGuBLLDbZEJWFFvxct2fxEthqtoCEogh",
  "key32": "2aFVQYKLusdFTBQ66ihJBLiphwdgkCRFyeyJ5ck8ZdzrWKZQtFTZrdtGMUWtYQsFeKvtKCaNP4yGHL8Wi2Ss45xx",
  "key33": "5zLY2jGYQ3nbfYV9hTU4jLJFPVZf7rUxEx33fgAwqyfuDQou4Aq7bABRJmFTBvMUpVNYMQ28gZrsTxUdxH9K2y3Q",
  "key34": "2S6rjvSXrGeennLi6pDCN2uWArGnNLWmcVcoA4wDJt49bBSUrVHGj12MTFwjrYDuJToskcvtEtwWYUE5LytrfhNo",
  "key35": "4hJfqzaDxY6su9QN3mYENDHjijcqG5RY8VATdYyASVuEdYa92EX3wbno6yoLyAVLaPrhaiq9xEJg9y4K4SkCh9cH",
  "key36": "4FSzddkXsSKfBwoFw6PR3JoZmCaAmyUbLCYQVWMuYq27L8ta6UxvyTWGJ9dHdWVCF38UTTDDvufWpeXAJ9UYCPEJ",
  "key37": "mffFyuEy5yc65dRaKqdBCxu2po85hh22ZJtvgBYdLBZucPr5Gmyu6wrd2Wq9hM7e2QDb79c3GYeVk1dxKk9YnBu"
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
