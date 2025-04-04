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
    "4Upa9R9HWC7EMt1kHbrK7iwanotUSimAWup8yAqQpRrR2t8E4nZtn3Ewe99QWvixbSpS5yMfd5f6urHz4dcaKVY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53uqAq6GGvvkbG2v6Z4aLZMdvUshvvz3kyuawgioVhAGAkzKfhu1XpExiiagTHjF6A1MQqWnfe1wkb46CrN1e32",
  "key1": "4YtzfdrJ464vRXZkw5KyzkQxGcETRpww9htAL5ySfvyV45hhnfwMPVuj2sGJ1sJfkN2TAzoRKrH4x7owcPQ1FHPu",
  "key2": "5pcPG7VqfeV1TcRPFwb6Nitq874rgaX4TH9pdnnzGQiL8i6XgaA4Pc41TC3kGiwVW4odhSdVnhBLXNaSRmcRt8hQ",
  "key3": "3HN7YgYDZWybdsSQ1KQiHw7qwKuN2mGSRQmL6PKoizUUqgyqXuymKzKzTAdh9M9N7vz697XrjbLaNgvBhsNBq4ME",
  "key4": "65gcNfcYv2JExKZfsRF6VRdhtDV5go9K8nn1pWzmPPbj9fvsGzHyawv1ZCHijpFYgNWVzqFpwUoLy3vb8uchDgWZ",
  "key5": "3oSaLELXjwCpEk1JonGyjRbv46WrQ4NMiSu4VtfSBsKJpD89nqpNQr4WmaD73RKrLjpqtCUBA72R7AcgQ1r4WNUR",
  "key6": "2HBCWCDF2SGXEZwwBvX9jeGhd1GvQAM96A2dtocXEWbtnKnNBsvdVpCRTjNJbwRjnskZc7buLqEPd2QmE5aHBqym",
  "key7": "5S7dBv1G8DqKou3PCrxdFd9v8A8wPrHy7kcQPn6uK2GpKdLj5VKksABpWxdjoaigeLZjvat4hitQujCQkNGy5sf",
  "key8": "5W7ndzCxG7JyR8wPZQkf8NfikkPUWSQfLBQYkr6gaF5nmeAaScS3U4h2oDFKQRrhvY2P8EJr5SSH87pdWKLc8dxm",
  "key9": "3iyaGi1rQbotDXUABEfPkjZJ6hCWafH6T5ACe5JvX55L9zKEt1Xg8p251F7Dh5EzyrVT4MfUEy8T8KCpg5UrthN5",
  "key10": "43sC7KmVLF9yRoYvZuz8wTvQGoAMrTfZzDSKMxcqLxiLatHzPfJjJKt4HGbPnRXM8WCCJ6NpqYUKx3t6ohwNUEK5",
  "key11": "5mjBceJGUD86nwab78PJ4Av9iQTkaR8UJU5NUVThxM5CKrUr2foFdze7jfaM7YdkvUr9pwW4F4UhTTGR9EJTXG2D",
  "key12": "3nyNKH1AhqKjefXBDWXXPZ4Q2HSYbpbHjWfSkA6Rsv27QBTDjrKhCUQEC1xzFFFDpTTE5gmyyiK4K167TWCeDpBP",
  "key13": "5BRWp9j5PEYUm1SZVxGG1biCZ1NLHDJtKN9Exf55G4s2k92WQCCf3msCr6NxSzKQPGQsc6yopuS9G26Rbpu98eRm",
  "key14": "r19DqsmdRZbiw2S5643ZHPZS5hk4iUPF5JNuvbUPyUqwVb6vZtr2JaQoEeR6wB7A7qwfiZygMvoa9iwsZCamwMP",
  "key15": "nraX9uCbb3uMtqwZiovkz91wVshraMCkamh6ZdScLmWzKoa8uVfSivGXDSRGEb8HxdPeRPXtnDJ1zLxyyMX9jan",
  "key16": "2PZmxzhtKPd53m61zK9rzFQ5sdnKtjxCLwiYbpRbUTPnpq4p1u8y1FmpFm5vV2cyjMeU24nevFmRKSoeXA97p8Cy",
  "key17": "4TmTJchmCtY4rBXbbvvuJL6kxtMQz6qmXuHYperNhXyLhBNAXAUSSxvsYDUQEf8VwhzX1kFV6mQw3uDQDBNbFUJZ",
  "key18": "oScAc8wu7aX8eNLKX8ExDrJm9oXLG4Vq3Govc4KcvjRHBTduUkDtkYi8VMhA5i6giqCpHVTWxAy753j75U7om4p",
  "key19": "4TQQtNFtSjYy1zcfeRBGcFbC6jQsjFxnmtVZcML33jPVmmdCEK8PtEyJwab8khphxHv7VRYB5Zp31pKi7M7L89cP",
  "key20": "2GUbP6hUJHnQQmgepi1nTKf6PvPwuXG8eHNFo49dbt8fm7Sj7CBHk2EvPz96H99U9WnTDRpYNmLfWMn9UAMQyYVR",
  "key21": "2VD7hHnzLr8SXZZM5CNd2TiLvNDqdPJcD6Zn49wBKPbT1nGj45WTYWzw1mX2W3h7UuzgqsCGWQ7GL2YG73L8y457",
  "key22": "4EN8JDzcyQ4bNXrVXFM6jQepdNYcbLDGXqU8iiz6Lu4ZMbdwB74pn2xu6FjKzmAh2Tzf7e7SC6PMhTJ6T4pGLKzx",
  "key23": "5svS8WSEisyYtXtLPUTvKMneKuq1drKrABe8CPLxXfYyahz81FszwewrxtuSb5dVSnKtHc4A4nFmkDFuBsY7x4aD",
  "key24": "5kmfbKgUMeFxNEuVNq5dGWRuCgKLvDCNBM3cKpj5mMdEFvStuQRN9Bf8ndXN6sgEZJ552iEjvFWg8Fk84qQFBCGa",
  "key25": "5NcYDuwv8r461dg3ajfhBbW7oXc4aDqkbG8sjhjnR1RULa4queZwpL9AR8Fb9Y3AZHojB9swyzfqQT1tb6ysfiLy",
  "key26": "ueX77gKB7nW5PUqeDT9RfQNgL3UFvKmKMx8UzVrTM4WZVSsZGnJwz9KdK2trx1UPKMBr5TrjTwFp9PSkVysRyeE",
  "key27": "4yMgZCJecoSqT98bma2niojQ6Tvzm4Kgg3E6cLesEJRsXpvnTYvR8GbCTrDvvvztUo8EaJnc3LVa1njUDqNDnZpm",
  "key28": "4fQ4A2gKLN6rT1JBX51tXFXajzZuRrwo7KNjhTRiz14wFDpucX1K63J7Aoyuokq4qyVgoc5jnufkV48bg35dAtsc",
  "key29": "61rTmof1JZfQJENsUfFARm7kGLSTLfA1TUbWZn6DB1AFpgPFktt5MuzBDPn4bpmwwV3Be1trF3QHYbQTXr5gKzxF",
  "key30": "3vxpYechYnReUuoB3GkZVF2NxRzopyNPbwV6z9iw9MVEzcWpSrhtXac4HzE2AdeBvc7LfdoXHGV2QaXGixF9z9kT",
  "key31": "3BEC5axjeYgFCR6dbKShpya9r6aC6We4WdyCbcPXNMrutMRUd9WoWTeYPdSEFDZkfVvnVv8GEyufwNHfxMB6be47",
  "key32": "3SA3g9pn4szAH5w2gv4Ux92ze2cmS5qNkNdEqqjwxkMabRBYPuMrwqTkWq4GfHpHS2wn3wQJKPGE67ur6Z2429JV",
  "key33": "32r8NfCLGoimM4L9Rettfq1C9uBD2gfHPj83LmVPPqi4cTkVWQ7QcG6FNAXwHr1CD78kcBQ21knNdM82TeT6sqS5",
  "key34": "3B95DvamKn4b1k5h2rmAZaX43Q7mfd4DdDD2tpntKZaqJeA8kMeJHgPQSxNGCijVMwS6tmFX5CVdjYkG9khPk9e",
  "key35": "tBgahaJrUPwjHkEEtd2faVhB2KNj9pJZSuWmNHfvp8CrB1VekQmv7z7BfzwCw96imMQMivxjWX24woVTGVeB6tE"
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
