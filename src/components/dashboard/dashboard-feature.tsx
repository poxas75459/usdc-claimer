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
    "Y7uQbnioScvU8BjYcwiHXS5pHxZ7WVtpEep4DyZzC2VzpAtvrppYLRYMrpLTqpKPCcGZ6F6mb23YWpLmEFpa8b8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P4QAdARyoJFEj16bBTYWTzSxiJQPsovEDK8avsbX19jmAdSLeEBPVLtS6wJFBrrDvyDk4UaVJ5wRoQUPiRNzL1Q",
  "key1": "5PHsY52YUs4v7eJPhagY36q4u4sStcaJBsmPtW7xbGGn5VJvetehwk84Ka7ceUYmV3aSRD7Qp59JnPmKCyXH4nD",
  "key2": "4rtp62CKCWhVWkAzfTEnDkKdeNWVPAnySs4robaUaChFc4n1xpoJaD1p44hSeen7e46KvtRYftKXi8QJ96jMSpRT",
  "key3": "3Y5gdJxUpazn9TttEWVrxT1zYTwGAyVQ6H1XiAogvi1FqPUGET8U7egA2WQPXgwgkuQMN5m2oNnLG3LLikGfHnnx",
  "key4": "d6g183ffenx7zCUzWsd7uSiX3MJJwQ5HdCGGiGDt9vh9QVcKtp8PEhcMSc9VMQrC5BZsthyarNeaEYUbxQvyTtH",
  "key5": "VsaGDhVWLtK9t8LU2foeLZFoj63gzNHfggQZG9GCH85fYMkbNVUobma5iswcB8LNBSdQo5Jba2t5oJcoU6zxLhm",
  "key6": "3f1JXheqQCLx9uwnn34fX1Cb2SrySnVxBv7Bc4YkZxp2meoUyNWUrBpghCFUGP1SqUYP7bvuBok9DD5aoiM1PoJv",
  "key7": "35CU9kY9dw3bGzgnvtign3LEv4V7mMRqapnerG6Kydr3L8b8f16Lp5QM7ZDkPuaPamXwQAcJ5ggUXRU91bXKttuc",
  "key8": "5mJDbiVEp2iDyBAJmo8zpfamBoEUuF3Fe11ap1fu2ZUa4PCCbbeTnSMeHiUsutqyoPWtALzQSjwqk5v2CbPeXCuv",
  "key9": "CGSQX2GGX5caGJM4RiChVBCiPaqzKkYE88YmDfxh7i2raF8WGgP91EomUZNrxGHyBcZkMEgUQHHfgtuXdL3jceQ",
  "key10": "3kmGiKHzJMRr3cAqLuyt3s4QHGUUuP6DNjCu2Hrqy8W2nUeiV7bnBh16F3df8QBH44TPDEU6KoKqRJXuQZaXpdRR",
  "key11": "3JxgQxkJm9151kB9YWyHpdCTQe65ekR1fVgfoWBkXVbwefQa3Qghn8CVNyah8TQzM1owUgAahw9uHk2NpRabJbCg",
  "key12": "66ZXMd9ajXm9DZx5F2pTo9BETwwFYhVaRkqoJMp7LXQYH3BGnkvHqB6muhudqtG5eXadRqybn6L3sCcSodWqxjLg",
  "key13": "5qQSMqMUCecfRqM4W5tHQj4twNtYB3mqZkHjTqgZ3x8C6yNX3jw11jY8h9L4ya3DsbQXUUnNa5uMneemRHoGEAWh",
  "key14": "27aqvzCJ7KfCSew4sKj9dmKD9wDQpt2gdRGS9aaCw2HutRtY5cqJDvBVpu54ux93Baiua2zEnYcEQNzAjM69Kdw5",
  "key15": "sa5WRDqMudskYARq1yMQ4jP88QFB1eeSh3d8f5W8DFi8PJ6GbqDDgZk5VaX27RfvN5auUV97hZHW8vFtGguSSxX",
  "key16": "3zfhyhmQirAzAPAfx9XbdUwwHAZ1rHNwDG7AbcJf9q7d2tYDTsZRY6FL2mCrZU4vF8eipjiTKqbad3z2eQdpP8w8",
  "key17": "3HeQZL5krsRKA5HdfMLNDNyreVmGesxr4jegQznTT4NJsj4HPvyApZypfspx6mSC4ydPDuW3msX3PGjo6ixW6rUw",
  "key18": "4Pi5jSmHxu8u6vfCQ6XKiM9sD8LkBekiryTiQumXDgHvVxNkGuk1tZrkwoND4aCnEWL6hYCZMiDMrtFjBhVMuHtH",
  "key19": "53oBiRsB5BHCjJEiMVZWQNW8tK2sxMFznRZfZm8HxDnYEvys3JcE73s2ZvoL9h9Ln2DXEqH5yxCvhocm1B6iLTvZ",
  "key20": "3zv6Bhov4Dx1xNLGkmH6muFpCR4peWG7LYEggTV7HfU5ja2iNUE94SEWHuUX9F7tntqZevzbd7GRJg9FiAvbWDky",
  "key21": "48cWpDcSzs8xJeVCR9qcGAc7Jfg32P58g2YvETuAZxSB5X8cpQQCEXvsLwpA1429zjjGLgeQU7n78abdqezUwgFS",
  "key22": "4YgMXz8scELHX7NRMgJyQoL8rzDCwKaZcMNQHhc4dWdBDMDNVoM3ACZWqKVtyC5vtf315FrxPqdLTenaRKSUwNBq",
  "key23": "3ej2PjahKU68F8pQbfkBWfGFMP55BW53LwF877P1dvnNXa8GiqL6k1df5hXcTCNV6gCG4nZWvYL2DyYbPJEWS6BS",
  "key24": "8jZa47rxoN9nMwVvGNUiJEzdzA7M581tdSBEoPxRoJUuEPjTDUWaAu6paLF6a1ohsj3dufHU9g9vLwJXN9E3A6g",
  "key25": "YmeQ4thmMK6WxRL3fTSQHrKGJAyvWGsEZ3Lss82vGHhf97UuPawrMcKcM7HpogpybceLE2hauUmszpYa8geEpu7",
  "key26": "3rWrXCDUqaTzwZNMQG6gNzFRgUevngwnZzCMp17VCxqhv5HLe93UF764STkE9CoPPLh6xjhzWz8466LTLxU3Koa9",
  "key27": "4pa5QNzBmAUeMyRs3Nh2jMX4fYDi7AgYGpzn76crMeo8gMhY8G9HFuYMc47gQUszWojCa1j3g2dmQfFKDFS8rHdL",
  "key28": "4djKdarD3TRm4papDuvKoGoSREbCwRCjFkawE6QJ5Yg59xbwFSejZpBnYaAgJY7VQuhiXNemgvAu5C8bmMXwBcfX",
  "key29": "41MSKJZAeXKJgzLT7gkXzrFYAfSUqDzz6M3vs4N7vZKxxtjrTqAHdaQD4osjAnrhQn62183KVmoi4ydZ9FKZnV3u",
  "key30": "4nvYC7QYxYGxg2CkUYEL9tEvaPfQNZKdhLZpAeFQufRQ84RWSf4DFymHyAxUya3its4QJSSQfhQ5abEzqrdsutpR",
  "key31": "5qHr8r1FTpMqoZA85gvDRrwq9t89dgdfRuTgWUiNuV2eLpQUpAY4292mZa62ieGdAuzG7bHu2fsWxuqKCndsArRi",
  "key32": "4yXaeBiECTZwWCdPnX6sXsU6unJgvtYYmTRqa9X4fUunP5tQCgcESvpFnnHTNWyiKWjtcw3QxijNFDAeBBgT5DWy",
  "key33": "5UBGuuPD2d5WBN4iqTfu7fPqB8outAtUubVWvwXcMkveGByaMjiUM8XwMZ2sD4zZkRzXrYA8by3kVMg8rkDvnrxv",
  "key34": "4rPPAdhEaWXjVxDuNTdF7GrZm8mT9eFNRNXUCMinSoCBYXB9CJEfRwASwXfM7T3ucFkPbDomSpxpZA4kJQBx1QYo",
  "key35": "C2HypYCuJ9aQhCCPDxwG5GEwxpXH2naARATWSzQ4zcksYeaRrMYV2F7hXprXWLxqiTqNqFB9pCRJ2AhUhBknh3A",
  "key36": "2oqeBPuJPCUN4mQkc2qCnenNd16YJotXsHSNrAKZ5g1S5HNTvvak83UP8LviohsVdsBXG5WWhFGT7oXKKieDXr7t",
  "key37": "5Z31ntTpdLzjuStqdQR9nsjkupQM15LzMxfcWXUJKHYpa7aBVWeGwKdo1KFQwTyAAfbdSNCtVD3mdsRsoHxF22N1",
  "key38": "3Q4vaTui3xS6GHQTa73zzEjyfNvm6wrKES6d7x6wjfCYA1Jvq2Tp3a73nB49dfwxrZH2HG1wg5muzfK7z54jXZCq",
  "key39": "4BDfBzsxbzXxK3G5VCf9rmjBeDUDwfUvnswLzwUJX6eYQCuToDQNosPyW418dXystddYgg9rwAEXwcJnyggR5ZAB",
  "key40": "2TcVj7t2MHdz9wLKXeZLMADA7wURcFoFor8CyB5y5t5gmrmi9jtnGYRL93JdvCJuWMLUS1f9Dift4KftEdQWRwZi",
  "key41": "4xtTfFWzK8ksKXnRhLUTnJNkTGEusJuCGf4xTfcvqYeXDQf1iCU6MLdCetozepV5d34k6qqtrYytGbARVXvD8Mjq",
  "key42": "35gVSBXDrWQk9uxSwcuMFy9ZPdaiGnUtaC2B6oFkr5nayNK4CoHmqiDLxfNWfvonoM4VjEN5jqPWx6ygNXtsXw8m",
  "key43": "3BiXRFUEzzpLuGVb6ZM8cDvNhjNsdq9KNy9vAQoHBBbnRNTB2WKxa8XL2ZQLG35FxFhf6tviBi7HV6R87uF76ebb"
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
