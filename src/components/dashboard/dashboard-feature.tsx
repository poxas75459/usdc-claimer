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
    "57q4dvqxFsdqAgFVKrvYJUPRJjnhugtc85WEgNUssSDCGozxKzNUTjJMJ3mPzbhx14LhAC728XcdbLVwfDMMViNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m96pfKb2q7JYPQDwd3XzdVEF2KFNzsc6yVXuEiGDQ9pxpepv2uAicWbC1tPaRzTKmX6dsuTnBpkD5g7pbukYLiQ",
  "key1": "5GxyirfL6sSdVYsnJnqWJE5WzT2XFwJ1QEmmyHqpVAcTDMmNjU6nVoERjSN7Z9GsxcKaDuB7a4tc5gSccg2wxMwU",
  "key2": "4McZqMQmQd5BZku4GpzxjuULwsQNwANXRsxQobfzonKzQyWWUzhN8AmLyFgAdFLhdJrtCmC1tqxj6mtthddW1YRG",
  "key3": "26J5WXVksJ3iouAgJk1c243PjGkd4zzYgjQB3yWAaS8XRApZLb7Jpk5W8ATWnm91ejFkYrGpJChtmj49sR361dFd",
  "key4": "2nyfx34SVj3iMbPqpvt8HzB55wybTnHkWaKopxuT7ZGXh9iRWeSK4WEyS98QEZMtQyqSda8mcPj3cBtafShbE7Qc",
  "key5": "Tw2qEUEEk5btjtRtf8L9s4DqHt2aT5jPAtq43694taZPrQ6ZZ6g6tb8tYiseqQLAgp8BWCg8QjsmrhW5gbfvP6u",
  "key6": "2vJMCwp1KU6s51dP4XhiUHYk8zS1HJ4FpX48gd7deuDU5SuER1qRwihaaF9KdP4StvWFHR49EVLqz2n9hFjY8vcb",
  "key7": "h9fKhRsB1Xk2tYKTs3B2ovXzLUbtW3qKB1DhvSSnzWVsQYnZ7aouvi93jpwqQzedgKuuLyb2nJheT45DQtNT7sD",
  "key8": "3MpJxevPnJ3qmhZJG3KsaFvXgLyKgPJ3m1ctpa7vUA7gor7Qxsw3ixs5iRmJ5nQdcZe1dwbpZiH7WgicK4wAeQTo",
  "key9": "2rzFHfy62dYjaGeiSuZksWXfAnFfNzi9tM2gmmQdDPJfGHiChL9MesNch5JdrLLzZ5XtY1Ex3uNk8EddM9tFW2fu",
  "key10": "45NzmkvzUwuGu63iRrCRemYGbdWBK893GsVWae7qCJvwrvn1aPShUjqRKoDQ8fhNFtfEVK5K6dn8DobkvVwvA5Ba",
  "key11": "7JsRjwWPFRMHTbLo69VHcNUC7YALfWtVi5N6whHCy9xf3CC4mDgkKEubghnE9VNn97oAxrJb5SJF79sN27x6RoN",
  "key12": "62ULarc8NYMGRRXqi7NSciQ71zeBzTYLyMPxkoD8Qg1X445GEnz85Cga6yHC78qBak2HeWMSTEEceGxsLvNiJfCM",
  "key13": "2nD6NuqNUHiZ1t3oPAFcB59LposthqgoG4yh1sEyayqdDq87wBWVcqrL6f9CKX7yMUZCHSb6kyDtzKaAoH8aZcxQ",
  "key14": "2pzRJC8mhFkdHrW8L2WjyMyEiSmNuZaPxrdGiP7eHgF1T3m9gJujrfBYTQmAHW6skR2LrySkZGiN71iTH71ikzx3",
  "key15": "4ZLVqsu1NDsAqWXD9YceTYLXarYZ2TpGXbUx8dYRZFeVxzivRHkjhMKTuEPeisLvqa691kYrUYa3EoiecQNp4wic",
  "key16": "23Yp79A1uE77NfcjmJEujZwr94YLAJX6Nn38yGCT2hfcdwH2UPzTPzQ1oD8BWeJNu3dEz5hm49nkXz8YtJE74mce",
  "key17": "3QENkKSBEk7ZQsfxtY9vLVngsa21oW2z8CW2YjeqYMWWqa8hFEskMzGnHa1u6H7KtUwR45c3obTNEFqAcsexZMBi",
  "key18": "31spxjFY6gL5B2AqGrQNmsVCCX6yC4ZQUXXzgD4FAmp23ndW47cBLtoANya2WH1qpFLRSEnTXDWBidt2cdEWK8As",
  "key19": "3H6TFbhafsNVyy433BCtDBjVHUiDfUgV79j86dJKenuzFRzAcyiEu8kyxEuURD33KxLHaDbV2FgU1CEk8tkZmQ9q",
  "key20": "4AKrffgpUdQsWLpu79SwwSWshzM2ddiURM4yB99aB2n5vK6aoYVdqLVwHG4PdQmYZ6sBZPBtNKvYdLSxaC54sojH",
  "key21": "4Y89uM33aXpBj4Ehi5FiQ8mut4XEbQF1hjJf8nDkULYMcVBrcpUyLNY5Z6LcTgEx9zwZ3vz834wsskySPbpJ67Z8",
  "key22": "5zRJWD7sa2VEB2jpfrKQvp19gFdfawGxnsQmDuUUFQDoC1uDHGnuKMQUBMndQWm5JyyeNqXNvYkhmVChe1oVA4am",
  "key23": "5TSodxJXuFaef95rq4ia6agccQx8yqG8tSMoTRz9ZjuRCntxFCYUVhPJw6g786iJX2kZt68mcJ6dKvhDJedB9v7X",
  "key24": "4qqMxXqNqR4b7QCHct67hMzbFkSjXf2fzrsUCa7ZVa2eURcU9s9uaNLqWJnF3gKzzZSSvCxtKjd9VhYnH2b7EYJY",
  "key25": "asTe4kZFxa7RETzTpbE3C3AXnK4v8caKzbXVJSzZps75wuRXZhSSDLmY2zM9zzvbp9Zvihr7eRezkxGYpZK3rxu",
  "key26": "5bswB2NufeY5PxTTLN1oGTK8sHARQ8X6HT4n84hho633Zhvpak3XJrmQo3w6FnEahcLDQuVxzznP77MANLmrNiJx",
  "key27": "2gwAQxp4suR4u1zhVPzDxJ23xTLourDci829PZR3vZQmtoMafPJrqYtrfXMTXs1j4BBBbuG49nRtLePW2g5CuK4B",
  "key28": "5fp9gDB3WozBzf12BfXpBBrNeFs9szRve7n9Hx29SnZzSrJ1KVDv1aAAxxhC8gLyqQQFfuxZ9f62A26aRZwvU89R",
  "key29": "4k9mTga78exKyyNFdWuokZhNGNNZzEtQiSecPibG2siLWyxWxrRVsHYZBg9PbL2hxdandaQifK1H1SgvsG2QZeq6",
  "key30": "4VQWLZTTX2G3fKdvfw8MBq58tjcEHFb2LJomvVjphwE672SzWH2Ug7jtpf6HSStK4ojhi1mGctkNU6cRAu6a3byj"
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
