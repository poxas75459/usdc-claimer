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
    "2UaMTzFRyBBtrkbhm1tzYbkfycjuh9XaW9TLPt2oa6zYiKwkSNTfRChhuAErqWsK9K1JSJCgTYQPT3vxR8WW58y1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZKf76ZG4zpkFk7QaTpvGmBynwfx978XgqjLhz3JJdJUuJu8PdtDvLnApgzaTSUEhSBndj2BPqHrJihtn43APPq8",
  "key1": "4YYpsXvQ3HfBWw7E5qxuCwaNmeRo4LMK5Us5WwxfKY54Ch4wPZpAFGDboVVd1h8MnrCKH8eDhUurWsK3ywk3bNbn",
  "key2": "zddiCAafCE5D5zuYZnbgomMfkEJ2z2kg4kknSp8PDmwjJp4qgob2P84CmHXMN9KB8svPgdhQBBCg7FmjUggWjr8",
  "key3": "2hfWsYiM1QzwDaQ77SB8Z3Z24upGtqBtPa5LoNM4Cqanu6Caa8uWPazstonRBZq2kkHSEC93iPq5MukoobVnFgzB",
  "key4": "3ms2fFVHYJwDDnAo68XzhaDAF48K941khEFNxifxUEd5uf8aXWa7ycjWUXpZUuB3ey6PdVzsH4wSyCAQXWxNu2Rd",
  "key5": "2ropaXvGrwDt7EwSCrZJZMfWoBjfTo5eEHedeofdGsRvTZRDYERjCd3ZvVufPP96V48S4erJKQaZcTrqGczyYMMz",
  "key6": "2dGf4VCPsrafQfBrk35eVEH6462sfN6hCgk1jZ7QzyZi2bBo31nqk9UNhL98Fnto9nzS1sfgXzzB13EanQkjjhBs",
  "key7": "3iywW1Mw6TveZEEn9mvmoWV4BT5xDQHWRraiToEUQZMSFxdBssJT3v9bvGSorinkkuwNfLxMEesvdXB3m6ycjzjY",
  "key8": "7m1nRxVN5oouaVxHJcRxSXe457i9pvQJksAm6QAALJsGaF6ysxQJoipWsdgHYGveoJUMwvMMrUv6eX5cMg8hHxX",
  "key9": "2LmtFRw6ewVsCsvLbxJpqTfty1hfixxEBgtPk7HszFnDPkrTG77ewVgDyJHpJPA5f9yqYS7QpyccLsPTuP5H3992",
  "key10": "2PtKHhfzEBsW5P8D5T4AktmEhRNqhnbuErJNw7F5Yy7eQ78vrAaNAJrM8oYGLrk6KHShoWPMPybznWeaNFz9DTz9",
  "key11": "P6mgp7BFYAnjHMP73vf1ZXkmjoPxXPo5VztrqNNkKsy8VzHCgEaKs1NJpbrdCNxCkL3o7eDaHDqiXkpjoQsJyTR",
  "key12": "5wyiSKtD4g4ZSKWTZwjn6VJrr9pa8qbzysvp6HoUFhoGURPCqTM87hDseKCbH3VcEin9W92tu1cst6fyDCuzWLU9",
  "key13": "4YuBgt8QKijTahWzLk32HWocD2dRuzCniDKB7hGgRSte2wdZ8MSzaHdhjv7NE8hGKTx4VxZfDtwzRZxdYhkT3VoJ",
  "key14": "3LanZEa2bHZFywMkzDTxUUQKBqgegV4Zi6gHqpEGHqNiguxpPaUfZRDEnJ546tVQsKVzkx69PqZad2iFmu1A1yrH",
  "key15": "67nQpYBgCvW7ozEVqDBpQhueheU65FsCG9K2r1Xrman8PNEWEHtZrFW7JGTxeYrbcJ3gnEGhiy4UaaTqNUAwT6yP",
  "key16": "22DrbWvTD5Ked4oCZTXinzNuTDL2VDWu4c9HrZXD8NUXyXB9dvSWTvMhUmXJvabDu5WZbpmBmLj3coGmNcYEncoW",
  "key17": "2XfJNyCSHzYM61e82bRdcPf2KLc9R7RNNpsfU8Z9cxhBZfVd4BAENLsDsx49Mranxr993r6WCjPYvNG2yL64fjwB",
  "key18": "5Nt2VSJhfag2rFs3kUFrDYEGM5H6MycihgDN38EebgS3CsEHxU2Re8W9q1kKPgHtdU17rR2dNtdBMvUrxu6GyXnh",
  "key19": "5Wr2Z7Hb4JLic3CcrAVYMwxMoGzFUL58ExzikwrhTN4LeRDp8pxhN6YWoVe1pb5c4tjDEEiG735VQcbjmUBraH6i",
  "key20": "5e6ptYH22HgyFbCfV8UoX1mcz71zdtwbjvfGtypiQHH3pk2YdYwFG7JhJus6VbzrgnSRTEb44iTc6CjKvn2U2w8v",
  "key21": "3emVokEgGJF4i33wNWZzkLe3uLTFbp2N7NTVndPc1FJnLfszWpa4CEDRaN7JfvLXGbvmQpNF22552rwmyS7y6EqH",
  "key22": "2FWXdXdkKdwrxU3sQ9PzRMK1rrhVQnt5YCLRV6KhVyBY3yJME7zqmZx6SvttYjrokU77K6BxS5zUyWnswBXDt79K",
  "key23": "28ucLuQfRhp4TSjsSWD4H2tcW7yy473NakQdMumDBNHUQisfrGTCVDG9fRR3yqgtCfSUXxjJ9RhNkpHJb51Tzggh",
  "key24": "2vGqJJUfKorK6agzqpWXkWx4jq7F1fDMTKAU2TiiW3J46eTpJMevUppqaQLtyHqVDZEo6etuwwPaxBsYpiWh7Ka9",
  "key25": "P9K5YvetiXdqhtn18MUyLFxEy6ZQ5Wcu2CfdJUU5tLerenB5Eu7KjmbbTG3HTqKBs7Cq9r2y91QiJGSx9qiowBj",
  "key26": "4MR8cuu1UDX7FdmUTsjt8kYVJNUYeCpz5TNWbTsCSrJc7hxakJbRDgEPo7ty31P1e5YfERigenJqUFM8kQgSqGSD",
  "key27": "3sYUrWhoyWjxLmUgisH7MA5HbDqbZzvuWrM9XWEnt8rwf1pHYQ73FFubhz76Es1X5UB18NwqyHxseuUbLzgAzFkK",
  "key28": "2xpdoKZpkVQXWVq62e6M3GpkNkBSAEXJjkgfoLBq81gUE2ge986JbHR3RsLZAf1YPcXxAkuo8Uat82tWAiFybukq",
  "key29": "5GRLx5SGqSk5MDpmhAgqQ3QhRXrUR2o9c7HTjEoffcfcWrNhxYi6KDV7w1p8fy4sz25nFob5QhwSsBtmcXt1gP9s",
  "key30": "BDAaDhRpEUaSbPSGNjHLbMcTwLqdfMv1KBZdmWa2yt4pSmirBTEU1VsaLJQaL4vusj4czbjSZ9SLmULQgttnqaS"
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
