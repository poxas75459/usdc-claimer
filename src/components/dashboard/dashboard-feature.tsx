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
    "4au3rMKqMBMnv2Fea2txnmBZGyuNrLDvx3y7ZVhNx5EW3g91CFJGxtYf1JsrYcL1mXsAQzxMxBTDU8m8k15MAk5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k9d7k29bzhxsam6QMFHdXJ47RPSBrpfSS2cy9W5iD4NJebQENtWpsuX15HRdePbsHWTWW5ot9GXZP1yZiTMv33m",
  "key1": "3pefByNC75vTRci4jWoXPVKdZjUYnenoiRwvmmNEox5Zia5Atg6cv6AiUf3Hqq4wyb9d316c4ppNKRb92E3rBmGb",
  "key2": "4ZvfpcoRno3i5agShrUEcEh1ebjWYTnyARp7M7Zr1KyWxJmbBksG6mYToGb2YqKvnTXNBQuVrhhWc1x2CpiKvrK3",
  "key3": "LE6uJfG22fcnkdmmXE5dY3QkyGQDzx8SWkXKQ7SMYPuu2z5Bht5Vauy3VLsJA2WrE3Ko5UCVEvATA5JTU9Hp6QP",
  "key4": "C2T5BCkiG8sGvYsY3uLHmPBjuEfAgzqmskCXgZ82JhKwjfcXeZk8Wy7QC18hZmd9FXn4jB5poHxAMvWu4YjC3az",
  "key5": "4ceL8ahg27Z1WMmatDn9uL9tDJUwicGJvDmwk8hJ7LPUF8dBCwvt9PUmHJX6bNigaotW9uDaQYGhDu9KnDsToq3L",
  "key6": "3oKYikjbto62qBC776GvkyMvS2EftcNXZg4RiAF7Tszr8tGqQst32w1uQUQyJEYp4PMhKjextDg2GrjkUuYiEYvz",
  "key7": "42rJ1mkNWH78EJt7CzBjLFuqWosX9iHRcsiEY7z1vTYuQqUEVSr6dXcoBqxguc4xJmxTFiqRHcSkrmLvmi6fDfWT",
  "key8": "4wNCSdJqFDPG9v4djhfvr7no7GZM6HnsR9iLVi4qmkuQC8GKHEhpWzukFywHFhaCrymucn9oP3rs1sHSKkQYsH5X",
  "key9": "5TvC1VT37gHUtVAKn8X8ULyftiQ8cFL6QHoUD92D8TEK6sdzjE6AEUewwKUYSC6FGixJtqHWyhV7tmiXo2neCHLV",
  "key10": "2vD6PrPascLJ14RkBTfFDCZ1C7tt63mHKR4YHkUZTayHC2GeYiKKtAyY8Xmdw7fkR8sE3e557pBy8Tn5JEPNoJtP",
  "key11": "4mGu9D1QRizSZRab2chUigrq7jLGV3t3t8vzZtjYXrGnbi6SzaW6LVAVQNqW8QEmXFZGWJNUq725yNR5WgVQ5kHE",
  "key12": "oTcvHVYubqjTGCuTzon4P3a2Ss3RXUoFRyhKm5ZF3meYgiGvaERSFNsPV9U7LNJg47BQVFH64ceDwDcpVexRapr",
  "key13": "5v2odf8UoHmbNJqWd3M76e5FrbXQ8LnJLFgfS7hC2ZcYx4KChtB1vcPW7gb8ix9jNStuwR2ryFm319hZeBZ5wbDr",
  "key14": "49ARWjYxWesbZ6Aaw9KQgYx1WxvnGKxRobRGZUTNpajZx1haJj7RJeASqedcuiNj6S1sEAshf8h7hePPXSPoQyyD",
  "key15": "5oJFSqNSvsDXfE6KELRWDekEnLmjzpJavUcnPWCb8YvzaTw8UJJ8pHUXq4MtFkWWHQ1XwYAEXMSN8v1Gr9bZ1vk6",
  "key16": "5WXVqvngKsFe2S9m594RvoPPga68XsrqZtPmzxkpxF4G2CdRvGp6zXBrNQ4KqcHcW9Hh73CZ9sv9DaqfXujhkzQr",
  "key17": "2oy1PkLjAkwbayaw9DXaSSqZwtaAS9k2CwD13E5P1YhezNMjyxnx4YboKKn3FnhrByQn91JYKUjafsaaKrdS9LeJ",
  "key18": "4fgAKakeSkRD76GyqCKdoAJhjUKxs3a3fPraDerosj5HfuFDZhamn5HMdza81Fbmhww96hNnn3Vq1DM8C1nBQsc",
  "key19": "3Mo99jTUGdhvhpcxhgU6U4tPnBKVbyqiaAyDKjwfaKAvHrHfZjwj6wpc2JK8TqUQUxyouUty7iexyf1yrD3c8Zvg",
  "key20": "2G7xfAKndXYbwYfRhvd8HNrfnUhSBZPJ6sHnHNwWid1dk7r8QwL4s4FwfHHvQDMSg1ystr84NjufuSvTgjmTgQyW",
  "key21": "2Ht79u6RRyLmRZN5d8otMbWv6Ek18GsYM28PzcfxSgCAUwGzmbnKRqwWhQY4wp8C3LzxDj9WCRiSxAAA73nRUsSr",
  "key22": "31MBuLWZBwt7qh2Eo7VyyLhCPvG4jXBs4mV3hag47vFJKaPwjDXrjo5d6P8PetwwRqBt3XtfSGHKN5JcWUyzFQN1",
  "key23": "3xZn61Mc2qAmfdnDsiX6SVrRpdA7E6BJgVxAjjZ276uyKbHXaKXNp5vE6kouHSUb1AwBhQiuxaLhvAitE14j3H8j",
  "key24": "jSLE8yfnwvb1BhqjdUe8TuiTYFBSfW4j6BdetrDEuZchGzMB2SdkydrWW3F7TbFwyQZL5L9qFDLYfSm9UKyk5nm",
  "key25": "5uwp1vcZK52x1wMqrpqaWYxk42nn2nAMsiQNGEyzA9Sp8GrDxvzpGa14wQrjNgmgnDYht39Z7B8vQPHycxUA1yge"
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
