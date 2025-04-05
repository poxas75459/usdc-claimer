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
    "34F2A3epCovyHALRTGVKBnDwuNdGyhEw2MVEwxJPwiLuKoNzhoScKN6NsafGAKqWsBtLrqYSmAmu4udHUSQfkU8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "513GMkinXXkdS9vQrmL69sSj5iwreKNTNTqUBd7MUzerNyrQkPsiwERV1QjxTaEQokJigqLwSGXhW86mmhHekyQq",
  "key1": "627L8Hnc8ug7cCUjjVVmiRRX5uhqjPA8fkJoqjU1sH3HJ92FPzFsmRqR2i8JUfui3CTQcF7bM5MajCz6YWF1EuPJ",
  "key2": "3yJWUhPTwQZd5Epxf6gGPcSHKKz34DMGbZdeZXXadRuQwqAeu3vkKvSbtQcBxnutAQE9KgqA1Y6GhLsBYs2a83S6",
  "key3": "4ShqspE4Z1uUwANprPNiD9NEvSD8iGg7KXwFYK8cscj9FmaQwRzCbMRJmGfj2KNFmXxZaYWec8TBzcN1sSRH38Xo",
  "key4": "2fPrBeZQDXe1MaoJb2U8AFkiBdoN6F7RqBpukn2kN3V3qQFAqmaorQbGBVEDXtqKgw1xVaoYb83fYnaAeMNQ25YX",
  "key5": "5ycUoiLuPp7cw8fsvDb1icDj5rRCr61NLQrdEb1Fr3cS6QHjAmXTDq3H9J9moMZQmPC17BpEdLqkPjCkTtzk4cJb",
  "key6": "36s5GhCgWX33uLL3wSF9xE9bqPU4oiCQS3E5cFjARgJJiuFP5gDujxRpWjcDyjvWxRTHLBYDRpczM1hLPCiJMuxb",
  "key7": "3WQnpGUfSyD1cGgufVG6cbmP4AEr2uxQ5o44CEjfmqAJYAgP4dp1SUv7H1RiGdKqzhJVfnU1V2raMiG5BX7mUP4W",
  "key8": "65XGsvQjeCh4oSr8nKsvtRSh3g1ikUpbeDAUkKZ7XfKjXHQMxLdux44HHcr5xRnHGbTpEJccc1njRbu642Vi833o",
  "key9": "3Vie7xUYnmQCURaWk7gTSaFTq4MJc4kus8Q66BjvxxUdgunWXDwny42C6mbdaQjt8xQ1cER7WgttsNBbZiGusjfT",
  "key10": "2qNLACymu4nE3eNMXXakqngHU3scVRWNxS57G8w61SSJusZ8UAvyGUwzP24KSgpJoCxkpCvWyAqAHq8xMeAecZPc",
  "key11": "25U9pRnZtRxu8dFvfJUmK1uhE3VjEGQ4guZvPdAVMYswbZ5o9Y1DQN1iWF1xR2LMPgUwbje5mN13n2Y46FXRMmUB",
  "key12": "26ghuhRu2PxZC2jshLbb7cXd1AgLFteqAGR5FhgBUtwu2qMZ2UgBDjfxUDp3ZjU1pqzrgSddTTdCDYrm1VUJzR9e",
  "key13": "42dJ9gh14XdwSx7wQxYPHSS4bpnyshRaLt87geiMTUiEfMiyHN8hb5di5N7YSR9reuJaJPBsZBMgjMMYMS99kZUd",
  "key14": "3QNevvgTdhf4ebnNi3LiJVvhsSFtiBunH5NkzdjBLVPoBknW66Mo8w6hbAQJpdUuhs3rjnhfsfuJsAE51VPx3mP7",
  "key15": "d9V2A6aNnUmDJAxwzk3bLwwE1KkHhENxFnbK3WTprn1bfehgaEjsCgNzhTACHf1diZtUzkp4u4zkcqrQxyCFpcy",
  "key16": "26KzveSV7tcPgqNCNJdJKS9TxocwFfgh62VaZJAwvKWrEsJ2WswE6YV7NY8U1fT5qMp8qS87BRpiU5iN9WF36o3z",
  "key17": "2VG8xMLM6gVTv4z9Qn6kaRyTAiLsFh9m8A7GoTiBMcoUnRAh5N49bJnLUQ4mRkcmhXxKKvRdinzpjzAJKQapyKPr",
  "key18": "4wNBarjKbDqzHufF76WQBeVCrvCPq6CHmmC5VfNd9Dd5GzmuWe6F7rpR1Gt1dLrcQV6rFsY66XD9N9tX26dyPqwx",
  "key19": "2JPV89KyvTg5wJH5UyUwb795bp6cJ5AhPuiRHa32gdcBmTzNvtxYxvZ7jtFfhvY7GGAUMdJEsSesrCZ8VGqYHDvX",
  "key20": "4HzjXccwHgeyTtQSkahHXPnMkZfGD46cTAcVCjkT9PQ9vRo89dEK5TNFxZBMRCYSqjR1rA4SWT4Y32u87wDbq9qt",
  "key21": "cq22SKCRGCmyhAmraWgs1DhT4tAXFZ7rSLPdmwRLESoezXkfjvVaTGzygMRnBE3SfRjm1kQpugWDV1zcoduQqVQ",
  "key22": "2jkZQScYWVRiBc1oibVGqesKZ14TwddaRNWTBLZAehRm8KwLni9aXYmTD3pKk9uwCpjJtJYMYKdeJ3Xa4Bx1bG5z",
  "key23": "5u67LgEUXra2GofceGpUHgMqEV636Erjs8v4Ek3LzCFht7zMSoh5qmiijq5WFpXaAP7m8P9nWnJZVWU66UGkANvo",
  "key24": "38BdmGp2CrxCEXsQ2S5Tq8Lg5twVuaDgXHbQTSZ3vU6uu8jZ6RfJY5G6cPMAgksHF3fbQaSBqEuL5fSW9WyUNqg",
  "key25": "4KBjnRLxnFD6zPy3XKxCSdhGS5iYSR3vF6fsBeqrVqHaHj1orHCbmrmKS3MpJVsJBdpAG4GnmQbbJKgQbSsZNoXS",
  "key26": "4ii8tLZVo9K95mo4VtvdMmZHNVANCHtmytvW4drtXjCJD6mTcKXF2qnoTLUSLDfsxaLgGCwKx5Avtbdur6PMTv94",
  "key27": "3yarKtapr4Q7ftw38huGUarpPbrTu8M9ZrDcUrpzPYbCjuocvdv31mJUsSWtwXjCUamGkfk9C7j8t87HokgG7xhP",
  "key28": "4bmQAKBLXbfTMPzG5Gf2KxZQXkBJdaeqgrP94eoJ1LsCTwrADhc5ZdQN1pC2HZbJQmJEnM8YFkmmG1fS2Fi85rhG",
  "key29": "64X73uxfY7wJjzuChUoW3m6xCoRxsiPSarSiJdE9D1UqSiAxtoN5oCrLvYnrupdf8CwaNrYmBBtrFXwxJVfgpz9o",
  "key30": "Yiou1aZjVTyojgqZCH3fPwZJJG9pnVpPPpNd9QWFjuiqpZG75j25B8KxP6hF7R1cRPQ8df5kXMDHqiRLRGukYAC",
  "key31": "5cenmEvqNTQb3VpXn1ZFgwV28C97cALvbwHMGdjpZK7VZqeaAcWtGaPHKo4phg4CWomiAPQNDPcvhTZoUiFwPXsp"
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
