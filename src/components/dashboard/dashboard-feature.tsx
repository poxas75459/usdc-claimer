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
    "5U8YCNM2KBgx7QxbBKx9tg7s1qd1PMjHMF1FpRsy4XVhi5vWMNX1mfTatcwuRU2hzHCmMYTLwghBEnQExge6VMqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3po7h33fUBHGRqoFPPhiwRPGEL33kBFM9McXXYckpStudcxKD8HfdchSoBZUSdbFPBt3JqZgHytLtMJhMMAcXiiZ",
  "key1": "2Z75vTZic6Ar76xRGZVqZhhj8gWUSmZjLYiERUQP6vYCh5ZPBsSjQU5q42tWm1a14s1zGep8tXq6WMbjSEMVNVgy",
  "key2": "5KsWBms8fat2muo3ZLf3KfsvrE8MSarYgQBin2HPL4jk1RJffYm3BwApHHshg6bdi4JrUTX5w1YosrfzpiJW8Ymc",
  "key3": "X4avoi8nLmg6QqXZbgSMVbkFECuFnrp6tjAHNimdy3rpk5nzGcJh4VmutcRxD7M3Jna6saXUtrh3PY6GsmL3gxh",
  "key4": "h9o1HtvX1LQp4hk4LZDi1ehn7gZijXUc8K4FDGa2uACSJTbu9QmKjDS6uKcFtRXYRSPTvKeGB9wJxXjT6PaVuzE",
  "key5": "57L7Tg7MnsGLSxVeNMQ4Lc29onRFdDHSQmC4hk1rpM3pAfWWgNAU36zFJgijFXR8pHFYfgHHvczjgPwVm3Gp1WWV",
  "key6": "4vLkB5SdWwWx5wJxymFjGGvdzSssbnvDmF74pkFMTuxuzMo7faAeXTcwF2fm9tzppdAn1C9dDSrYtCVgHaNa2UqK",
  "key7": "4UyPeGzzAvWaQc6GbTPYWWaMvbTFtakmu7qNAjW58C592Ypgm9Ea1o7ge8mka9W7quTwSk6UCYAhB7uLr1Ed1qu5",
  "key8": "2BtGj8gsyoyHWFsk18SChUqeoQLpeaQAiiz9bPJTeqKxQcSgbddjNYRPceXEAXAbqpQcHay6xBpBb3P6mwxxT6AP",
  "key9": "3mUHDN3zSGNyUKmjGFcGdJLDBsKjVpDEUUraWrcE6kT5xGTh1MuoCAHXxAVKFZ4eo8w8Tuz8YQkZipjRt1pNZyuA",
  "key10": "4HMT7prCy8o1vu4UdvmxJL43jURDaZui8LnWKn6LxDu5d1ehaGLyBmvzgzLmQjJfh955VMMQBWo2o3D7LrV6Vxvq",
  "key11": "2sByoX9ogpnnw44zkteFT5m2h1tM3sXvxmFHRBh2VRUhtHPzGaGjKE3YnJX1mYtNqZFVaJjrK4w3dZuAc1WNv8PK",
  "key12": "4d76YgiNRXb4eFLrnYxf9QdrmxvfNayX8B5igPvXNyY43X8Jdkw95wiWM3G1xQw5z3XHQ9eF8464uqUEexxdMmo",
  "key13": "5XJjtYvyDWHAvS1PXWPvSk1EKhr7kNwzZiT4Re3pc5VYeoq76pxhTZTvgMMMo9Pbsqv2jQfC75CKNqgtcSmMqz9S",
  "key14": "5VAYRPeXpBeVdzsGH9Fig5xRr7wHVfJi3QUW8v9VQNPExgjoKLbkWh6UtiFGuqPQvtvhHSGmYWpNq2ZnsBw1Qkgk",
  "key15": "59Y6Wh8JEcLJRpAzE1BsgPt4D1WdK6JkuzqFdHMUKqXtj8mMr1wP8Ehn5MzzdCjY6CCoqbJ3v7sQkZrFjP5BbT5b",
  "key16": "4XtdQkCt9T4RLWpeMvpgXNtyZdC8RSvnXVXi92FYYnAuDukznHBdNyngK8RGXsGLfSuvJRLcJTpFteAU2schRWKa",
  "key17": "2b5auw3ciTdbpe1gWMBtFuR4CrPiiNViJv1JRBVZQpd1yaUiMR2q7BXNvDQDGFK9ASjJNEeDV567uGmTB4gBT6hV",
  "key18": "4KeYMMSQL2g55XUVywv5mjWVv4D9cd4qVjjjThKBVRQpjmcwxT3SLEkmRrwLDmtuZEvH4onQMfHGfcbYz6aCGQuh",
  "key19": "61NZpMRBwoTKVhYuLDZk6BhaVzimLfRuMwpxiFVuzfow47Cj23GXpRhumcBj3QrpsAhWXAUcipTX8RRcBeHUceU2",
  "key20": "2ayXHPKcxCeq6sFNRvVMgJn2sSjFt5PiBT4Wupmt4frVazAVEdA1bi3rsYkRMzBnvJVxxacQWkrH56wmuPCf6sY6",
  "key21": "5EmVXL21eFnb5YUR6eT2RZMwtzzprWZFt6ctjwniRnUK2c6Ms31rBPvaVgbk96VvBvwCnkEhGHvgK86Wyj1nHrv2",
  "key22": "ChekrLNrXJhbyMFZWhwmipr4bJ4ujyQL1F9bi8ZCsb6Zr7pvoEgdnPATJReC58n7nnN6DdZ1vngRSZXApUtWEb2",
  "key23": "2VtmkwnYwkiQ4xHBqP2YsSboMydYc88KF4S2E8u7GrgUG288cqs2KCwWv2kHdYcjJ9pfdXTFgxRwEmeHjU77YxM9",
  "key24": "3H9kaA984Di55uD7WPKJesjRAnUXbKqi6Xzd8Njt9tGBTrdif4yMfHSVMFNJaqPCZ5aEVDJX3Ews79t4KQE17AZE",
  "key25": "2rSgjxpHZWnL1svUAPiqWVWxGEQM4U5CopACM4ze6XPHGpiebMsKUvxm4563DmNPWReTV99XjNQfrxpEXnHJar9S",
  "key26": "4PVu3S5Q857GwHwTo1SHtrrnWmyqgWvinowuCLynxaDzsEFYyBpf83hNuVstg1EbwzE94oV8XemwcQkspD486b2U",
  "key27": "2odUFpHrUzc9vTwP8L6Abm38Tj3vebzasehnXkMeHrZ9MUGuKeyUuHwhyQ5AaeGUoAi7P1NZsbr7tRjSsFZ3Pjvu",
  "key28": "4KT31icQGZ9YjEfmemaKYXySeSJVDJkVLdFqNziYagQjQXLSvS29QQJzRAQ7QbMkMqEEw1NnUkzsU9sxuj5i1zkP",
  "key29": "62ZAWyRUyFNBVd6zbTv4qpEiEdZS42hAAua1CYXY9NqKdoNhVehWKhNr4xucJWeBNy9LNfwfstUSWmYNZG6z4rCX",
  "key30": "2RqqXGwGDafEmvCoBZEPm9Kpz73yKQbEyvx6NRE6emcyddLHyPD5RWKtjxMa46YZEwFkC12rMY6WGMj8AuWgcqHa",
  "key31": "2BFQDdb68hk5bYB7u5x21Pq4JaNAC398X9hxmkNcqspiGgiGvKSVo4Ujg7bYQmi2XxQLVexd9ZML6t7agwr1ksej",
  "key32": "5qb5N2qQR5hWjUg8jgQ54xXGa715PqCB7cGCnQvfwNctmJBBB1ibg95h5VQ9884TcGYUWwCy5xX6sapVa38ke9Sa"
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
