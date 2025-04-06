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
    "nGPAh4y4Cp5wMbFqn5DtGVuwr3KDKJDiBzxvdhLqtrsJtRJJLwuwvHGMaiHrqj9FVnrpZ8i48EBZ8G29iK4QKgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43217mbioEBCe2EKNSW8uFrNWJf4yP2LqaKTqyfUPBHgx6kvF74RCnWxRKzZGnbFuobMTB5YrGrumB6Fwas1ecpQ",
  "key1": "3J1uUhVQWp9jXZUCr3xSdcjvczaW4KBzJJrxN9bHpmEtWGYuzZC2iHWckzndf1hNJHordN3JTQrLQGMnBJSsZi9D",
  "key2": "gwRpuqDq6M614vvTqZSkb5WrEaDtaAH1z6GD7taaH4abAdkdeZBqZbr8h9BQPHMeuEXWA4o3NKyrLtHvRaim1Jk",
  "key3": "5vTYSjLPDtgky4KJBYqeUtYGqcVdEi2eVwbgUBaPRwFRUZvXd4mTbM72cpTkm9GNBsFC4ByYPChqdL4G4EyQPR5Z",
  "key4": "5xgMN8DgyzHyuGNYigYCZoUEG3a7oRchMm4HVZDteExQDDe828xWHDiozJTLSvVjK6h9EghqsmTVdFvnqZZ5nKG3",
  "key5": "4o1dfVgUJkNaDG9BFZbQMWw6F6411B1jCWpYf6FFkAQ3zqNRkV4JfymM78XSdqwY5nd4wqAvZz4LnhEq6Ef2WWbD",
  "key6": "63nreTquS6f1A3d4MzL7RjB5hQfzxL9h97uUDwT8tERNqVeqfjsQfyojdu6XdfwtQVcZWEsDzqoawKqhWcYHNi4W",
  "key7": "ERbQaZdBBxVXqGdPU2JWMU72aUyWxzTtsgFXeDViEvhUqeHRhF3fzpKCbFhwAYwKwXDgVk1yN6HDTBY6ynjxoY7",
  "key8": "5s91GvbC7HRL9q462RxG8oX4DQc7Lu8jc5qfab1yne7H4oKfoygiYbZXQNj99SA9a4jw7XxC8HLrcrTKexj7Kp8b",
  "key9": "5pC9CEahPFKNF6PKg2oYtxosJxKMWXnHGoX4mXJNNYAtAsN9wvatuBv6FinAeswo7erW9WdnRTggaURwFF5kKVmD",
  "key10": "2bR6iFVA7b85MMGkwtdFD7EUYNxYChmLtxJa5Jq6QvdEpg9D8yEyPzGckmJTsuipnpafVbG9TtF8trekKUh5eLFU",
  "key11": "2tgbUhf3DGaSVsVSkvEzjCNdS7QqKUwWEAZLiDecHs6XbjHtXkXW6A6XmkgeSMJUdRL9BPWbSLM4cNxa3iWVk2Xs",
  "key12": "5ZEQ5A1ivkRzf95PK71nfX7rk9GbyyR4f3dF8acnGyzR73NgTvK1JHQmQNU2yVXgqpF65Vw5ZyHf4Tpry36aU4ug",
  "key13": "4cExNA3MQJYPuq9huVk7UnFA3SzDaXBh8B4r1oQSyXhoFuo1zgUv6VG19ySdvQd2eMqne4JpszidzcL5ikYydNRA",
  "key14": "PXh2kLL4vAzWE6XHvo5FKE7ANasXEFZe5Nyo7miur469NotPsVPe7sPdwGu53jM8Q7A8QA6FZXnRnBFBtSvv2i8",
  "key15": "4Uia2f8iTSPXWp1WZHg5FbsamiT35GEc9xjSq8c8vXXFJAuWKGRuNUxZte5Fr8eFML7gPuYfQMgnLjMhTgUK21nq",
  "key16": "3SqsN6T6kJ2bBnsuj2FKxtmbgmEWVEFsdyFCrwGBWqafijhoNd4sidfbapMHWmyXBDya88hsbWhAWQWHvunsi72A",
  "key17": "aBXCxp4Hh4YYsDAP2Mm9cBp2pKPVrJ6hQrLygcdUY9cWyKqw9NqQ9bWxmMz4XPz8gKL9kCF9tpEmGMvxwk6Fc9E",
  "key18": "4wAshRkrH9tBc6ov6hQYSeZa14CGMhUW6YFLAkyFdrdyMpqGpNDs9oGXiEPNxx87BKzBijm6aBfzerzqyhRpki7q",
  "key19": "5Z3o6mw1uEKWRjHwquZmv9oDqvwZCschgGu176DaJBFELh8djp3sASwKr1v5RhbfuZ5uifqKcY1DNLVXbFCxC7hU",
  "key20": "5JPoiYf5AFsPtqckdkLt9FFQUKHS6tzkdxeF54rbyEerKykuefaoP7siDdcz7ieGzqLh79qxNw1489KurYpRkTHz",
  "key21": "2yETTc3LY5byvNVu6K7nPd4XuAeBz758MPfWXxgwXgF6cTA5fCgCj2BMBNRCCJGcYHFV7c3Bk57TN7aEYPD8zDHZ",
  "key22": "3QTWiFXNLFpFnkXcpDYZtCqgGYw1A1sBg97CHWQ3WjQCj7sPq29xHnzLYzqfTFSFGuBqhEbwb5qBjmnCzKYXxg3K",
  "key23": "2Z5dNMr78PXBCETty5rmAtEKU3BvbGMAsu1tqsS7JJCKLtKE1Hw5FB44mvZiV7GNhxw3irdQFJnnHo4pvbSsGLyd",
  "key24": "29NHw2NCjaEBFxvqLrPHxdd8bMfZ6A3ioLJEGWXUdjDm8MdQaUShMRagV4hZrgQvpLh2favMqt1HER69yHddt8yj",
  "key25": "3TBA7ELXZ5TCg7vTHruD1UpqiTjoHAL8PB97Xh5SHSb9RD1HhsHnktK5MgZega1i795DdhBeFsdesKK7RPNHfk88",
  "key26": "ieFJG35vKeM1uTcJ83xXzjJUcqeoGPR5wNtZyeTe4EPmU2L6qnQ9NLDaoxDjibxLRV9b2sDGNQagw5vaCLGX1Lg",
  "key27": "2VGt9m5vsqMDz3FizzifrUfLDfq3h1jJYiRV5KevY4AXdQEAcqs6kDNqaT64vmXZ2zD4HYXyL2bEKktB8J819qJk"
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
