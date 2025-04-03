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
    "3aXuzLEgHW3SsggN4YxUahWBFhZHbbdwATK7G8Nfk63D4v2z8BjRWqFQUBXkv7e9M2tgzmuUa18rGuGgskudiCDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27pxaXC5qqAAS51mTVsGpaMZeC6VptvRfSSPXxgnhDZan93woFkuDoBd7jLnHNu4H32kjJbhrTgn84g1ZmL9qNAE",
  "key1": "2N3QALTVPjiXgxFfafgZE4P49k2KWDS8GRmMkd4ZmsA7tvRmTBnDX74RFnTTBF98E2rdXftnhCBwLY9zJoxMLyX3",
  "key2": "ycBjMLsgTk8Gn2kDGTqsH6m1rFa5CYdqREovHSYq6TajDqeGKr37DWgDzgq28njjhVd75TF6i44xwRh7xQt32kR",
  "key3": "587PS7owMbH7n5NgRHFAJjgNdCEhNEdEof4oTyaxv97isbxdmGks5u3z6mDiRo1xFbdGFoT6YxTyxAXwN7iHVcqY",
  "key4": "3FhSAzM1pRyPi2MA7UejhhwfyUSVBcnvM2njzhcjHihQTuhFJb3Vdy8FmHCQJrnYrVcxbUCpWWHB3frxACJNvGmd",
  "key5": "zdBMM2Y2Zmd1y6ycWVvDAGH5GoNw7izXdLcGtTksScR7z8MRfSnNW7YzueuZDLZbVw44EboEp73bEv2Vogbnd4C",
  "key6": "4hPB5G4DWDZmho6e3fJLXbtdpYUurn7n4kVA8A8M83o3WiohFormedY6J2bS83Hdcq8BiUM8zDRZ4aZUgTvoTZKD",
  "key7": "5i3hu6X9gbeu5XPc6STh7FCGeqnKkknGdDM13iG94K2H41NXwWYeRYTnctDgtnMxz3jnMpaM541kBAwF7eiPbJDZ",
  "key8": "3FEALKnTpzJEYU8C7yhQvgejUiDzVxXfno4TrPpFjR37SEj7A6MNZZjHk2o8oGfZo9A1tmmmRAkbkREpuduVLy7q",
  "key9": "wLi7gVeDyCSKJj3oduosA9BhYUSU7meDVpoLGaxdBAiHfnFq7AivvNH52VuxNDpcPBGB3ocsJ2wMfvh3WniicG9",
  "key10": "4q33MXjXEaC9Cw654LoHryiiZotdedfks4dbf2Bp9Qr2y1AJpjwu2RpTa1XQgTk4UgNmMjL3qJfuE758dATfo3rb",
  "key11": "5jboJw5kpWpjXTv8AsstVF8nF8MpRNRX1ptjtonusRjGSceZuxqNVYmmzMjmuu3xG6tS824TwhBAufT3MH7ygejT",
  "key12": "J6tGDKKQPBpcaQ4zvSYJruGRNSTs5jy88EewDxkP2HwBXtT5MSxiPHi981rZLfZw2TWfHyE9Jk9e858gUD8iMRC",
  "key13": "35XMqtXTu8XVSw1N2weErxZqZhjLzUNCDtwD6Phf8ovLRD4RVKyVzBTjXpGmcx2RzbUvKrtPrD3ikVTuxmHSqopd",
  "key14": "yqAoGs5ZuxF5GXm6kHJVct9bdckS4rmocUGRgtxaKxMxzrcSb9GgzoN4hQ5GpJjz6X8yBPQUgbpRoK5BtkZEQgX",
  "key15": "5YXkaQkQg8UyagPvZU23JY6HnoGXu6NXj83tcYXn9UGgaeSWmj45doATijBRQ5NG7gUvy5JDbEYWNRvp8ixG3Dck",
  "key16": "3UmaNZkywm2hRqAvF2XMardBeXxhSrgwu3DDTcmLGYGpLH4G6b18RkLo8cNXHU3Mnf4HrnAE7QzWVxqks8T46wWa",
  "key17": "4YQXGtawaPq6qdnMwr9EyHqzoeq216qv8LoUPcEVsU91auDxhq8NBy87KYxgMXo1Ds81Whkqi1FCvXoLEXHLacvt",
  "key18": "47WguxDqN8x8LvmempsG8TEvTiirLiKhkTDgKa4PSRz6ng5xgxCnuV1QZ36NF2CBBY8qoAxez9q1L2ngr1JUCWRt",
  "key19": "39JGNndjtjHFuZ29sA67FiebR2c3tT72U7fwKx6KqXTQaebWUraHcdM9Giua1AHg94yhdmagCvyNZteDGac3jPVg",
  "key20": "2BsE4FahWwiYL6BaatmTbr6o3mWnc7dKbSzB6db2i7BbXLP21bZ3wwzJrVT149ep8iKRiyBhYvrD1xMofhJYo8eg",
  "key21": "5CsEee6EPKi9xwjJuAdzegAa7KE2v5QHsf74W9YX31FVpRpFAq8vgmYQ7yoJwYH7UQR4UsGhNMJbrJWe8q8NHByF",
  "key22": "9a2LjgqHmNSidMvoJBpu2637jKtCpwx3LMzZxU7wQgugpu7kwgS1RF8dKzowXU5ysSLPBsf3ScNuiCq68JLdahU",
  "key23": "3iZyT7Pocp6LnjjN4d8dqpzKLLaYHQUefq3ACnsknF9i4EBmCLFS2bHAaFufpYYYsaWRD5bjtxiNJre7w1HpNnVj",
  "key24": "2WsemtChQTHfpvruZKv6aQ3HYcQEu28QQnkaQ4yX3zrV2faa3QpunUr7fPcVXdGrDQz2JtDhLZSh1AieiHRtFiVt"
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
