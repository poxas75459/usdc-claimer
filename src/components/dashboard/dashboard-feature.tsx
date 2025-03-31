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
    "2c518MgciHNhvHWSHufvcEMHpJp4A5xQmNPvZRE8yRxdxFNXbu1nmGoZeShMJq168r8QgewHT3eK95UfG6q1mmHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x9rgp3MFWzb2se6VSDNaAxo96pwN21nQxetLJHc45MAh3RhFKio7jphWQ8dAxSJMoLaGnFXqYNaCrfVMdCMLBmz",
  "key1": "2GriVaYaUmwp6Gj447erPFXX3ZJV9Cb2DeRfywyGvJxeyPvCYDXbrgu4p8dQBsqvrhgjZh61G6ux3vJAqQRaKx5j",
  "key2": "5PbCaLhU47ZYJmKpcVHJ3KD4GproSKKnhEmgfzssvZLeM3LpPTnLUt1aYC6zk3qjpqoGqZy1A44MqZh8kUCuDQWZ",
  "key3": "38hbQFim41Q4UZSHwXrEV2LPYqcB1Zt3ZoGjhMUDDjv9AjW9fxCFBA1YU3rVQsRhGzTkEjspjtQkZRNPnARhhYZe",
  "key4": "2kdvA7krvoSvdguaB9WDhSXXjYMDSw1zJxVQCVXpEbViV5focNxzpZzi74wkUNSkedU2VV7iyRbsLgYaED1Ti7Cz",
  "key5": "2n5TzgcV6Vqao8gj6ikzeuD3VfkDTeYtiV1top5TMM6FVFM69UTmWmwcTwBgau7VNF5vaKExZW3ipyzu9cyeUfuy",
  "key6": "4j7vmyRbWqtwMRWz1MrmoWVYuGiem3xNLWjcDpxE9riQj6X2m7NYUiXx7typJbh6xD69nyvxqyNPvcoJeqtMPanT",
  "key7": "dodsfBw9Vyceo4rM3kz2BQTrTXmP29XRur9cAQAXhhjmdUZ6ioTb3KeadZnHjhP71u2NFUWsLo27Wjo6bhwWBn3",
  "key8": "3cnCK7EDEi2diwtCKcCJAkdqz56wrESqJNuox7UKUmgGZh3wtW9sdMFURwtorojVQaF4LhT3eShcSsnUW4yy3GUV",
  "key9": "5KUFwbfVZ1uu5MVYJ9mkGX3NjKH4ZdoNujgDU6smjDRah3aSpTQXXvytFHpa6CZnS9eoTWV2Xn27aFu4ELpSwTqj",
  "key10": "2W1D9LSvK3MpRhpyRJC2iKjryMfSc5VkZormHu1cUWyx4fEqzR5ptG5GBHgbw9ots3aJGQ3uXsPUvH3QDJkfGeKP",
  "key11": "2cfM9NZ3URNM6NDkNU98BXfYEN9VbEQh1BKXbVVnBKXtSFEp8urRDZDwMGHGu7JB5gNQE9F58YyaCQnHyUYLg5bR",
  "key12": "2Uy8Y6cznmNojUmkiHUsAu7MgCoAyRg8UPXoKK3a6hvQWUCzUdiydUK6GQk5RJb2GeiwajJHvakdLn9bipj3qWqs",
  "key13": "5pL5fk2eVN76sbkGfaVnRVigGJ1rJDsZf5oXeho3SJiAtD2PGaQAS8tXZyvY7BFBpk7FMyR4DxuYEeaZVNcVeTMv",
  "key14": "4yCUxMrQdqLaW8qJ1Nc96ZBTJ8FBnCaxdk1QY7xiPj3sUF8812LVbJaWbwDkdndGFNqx4eBuzDikaiY5w4dBJFY8",
  "key15": "4nx9Lii1kZCTyguFvFNMv4rEtoXqzNYthk1VXx4dnRu6sf88FbtZJu3pjjL38jPaY1vj1Zm8o8ddNMBKZggjZHSg",
  "key16": "38WHPCGg3RXcfLtwMfh3Fa9addbi4RsS6doeZdz1WJTevoXzo26rJzPdotXRHqPeBroKCDjbo1qjmB6rA1Lp3Miq",
  "key17": "dhGcbtJ9gD9mhfNN1xLPd34U5Z1ZRir6VjMEdcuK99GUqByJwPYCJJgGdgXD5qoqVr3MWkKpsCVHJ5tdR8akZfe",
  "key18": "25Q4Nicv8USHM42YJG8VkDqssWTX9VMY3WjxYnjSA556C9Ex7DVT61GFpoMcK1VSBRWQtGMNubndaed9rQFF7P4w",
  "key19": "2xG2uihq8P3GiBCj6kqSFnmUsEkGs4YbqNaC6RZrRYF3u76yxrusjkWGi2NrQ28E5KUBsNDwNvB5om3CRHxKpYpB",
  "key20": "3nJTd1bocP4kwAmC1cjuxUPW8gb9QjMqahEY2L1v1gdc6RVfqfHYqsiCLofqkWv7UfAjpeJ9G199Sa3SXRoTU5ad",
  "key21": "FAcF5Rbua1C51sZ9Apg46CKUi36bCLREv7tL87MPhqYfC9jkgFZt37kEYBhLGPSFVxqtxGstRMaSVFjAjZSecDm",
  "key22": "4Bu4WLfbs7v1bbJXAwcbFzCEq8JwdHdL7gVrM7LXHUBVnGvq8cBchGbkoL37fVzSw2ryMUREY9qU9yLJpgfKLLWd",
  "key23": "5hK9S2RkHiShjJr2aj3y2iZbzLHXPLZgiwiLHdHZbyGnJnDRjtqV6HhqwT8EymXQ4spiQWiuKCpFGosP1c6Bwb5Q",
  "key24": "4tXLhdTCXF87z2CEfsiTu4enSfkvdq6inCq73PaJGcmVUghAD8a4UQydzSgakXHv1v55e462qzD7UKBnp7MbDjrA",
  "key25": "2ByjUyfk4hApF1UJ2VCT4Xucv5vJTMP4dVWZVj1VAS9Zu28n8n24jGD9Ff86DX9Gef8xD7XMfZrDc5dr3vJoyXtQ",
  "key26": "4DoobrD3NC1rSP6Vs7e4XjDowT6wW4UfdfEgudHR2YE91t1DX9EWxv1YccPS4F8jRDyRa58NxEr8H4FXyvySURcf",
  "key27": "59S1vLy2Rt2FiBgt1j4655vDHZcrc8iMNDHXmFn4eKHW9vE8oeeb17L3kmDwopURxPScDCAsUFSTSiaQQq3uAdkS",
  "key28": "iG5pgYR6tpfb8c3tGY5BrwL8aryQgHGymt9eYy3Ub4A8gW8BoiezJeaKFy8mkiumH6Lpo8rBFTbpmG9qUW4EuPK",
  "key29": "2ujn8WMCFJji2g44h6zK7o88R2sRG369NdKiWeBDNd7Z2LiLzGB3ZystRJABCpEMRiGDTtgPqCCggskWbJ6LSjg8",
  "key30": "34K6CSmoiEYBTdASMdeNRzbHptkfu27Z72LoKVRfmFdFJs9nu63gd2HMMp57zF8mxEmQGTDB99vpJ7SxBuwV8PbK",
  "key31": "Thcr1WCfbFmwdmWVwr2TdjMtKVmJ2n8axavNbsBL25XLeuDgBYGJabW8eFgJYiZsV5FUbpwEAfUH7M7xHMhrWwT",
  "key32": "3K6kAjpp87qRkwRJ3FuW22FKF9zmXqMapkhvS2gs1SxWPHuqnmZr9UCmaec9aqr67Z2r2opQMQEBqNhFfBJL5TYb"
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
