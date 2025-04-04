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
    "524aQUEjU57DkJgeSaW6cxpwScs9MRnninaUpd3Bs2R4YgscpK6Qccrk6qjtc6h61jmTV3a6SJ8uJeh1oGcVDkg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pM26B37dPbfqJrWB7DUt9UBpVbNCX4zB2hg69MfA6h5qirw9LRvi1fMjKL76TgePTAXkPsE4L6KPiyQmm9HE8d6",
  "key1": "4tbVqyM856RNfgVeyyXkDxmBV4PUXrUcjVUx3U72wDdqAczMgbaZqkYcpoc6YwpAfbaFitNVJGEzk3yBn7nvnJ8B",
  "key2": "26PpsWKTawav1vLg6JedpkCwP96whyonEZYC6cSNWpJHVFBfrskf9QA5RFaRiJMV7FRzCGaodmVyTXungLNbJWby",
  "key3": "5FvJ4NkkYBM1rsQZVV5rwo1LWRsoEsJXcoFUZpw7HpjTkMUSB1bi26bm45EucTKTF6BY4LmNTAUZy8SkoQYvSi8Z",
  "key4": "5hHxHFxdgmQjhUtezSCHWRNpke68DiyXbg91Df1yUtyaHXKLxrrneoPGHd13LwJiYWWtrSnB4SSv4Eu2pw2Zvm15",
  "key5": "58qgZsrWDpqRwvxkK2KmJWZzdwrfWafACUa1e9g2P7EpPydftrDw4tZQ7k8gum3sqQD428QVasGgjAUsygNm9r3r",
  "key6": "VNEohq1f5gErtpPWCQ7GFwk9sX65PBi3ocTTuJXih53wS6VKxbb857ReD61p14gVHfGsLTsepBTrXFkRo1rmqFW",
  "key7": "4CzomGPypTBtRarqp8P3vkLdyj3R7RKK5Kui324FnRWiyqyATtd12tfSUjSvkixUpJfdDmWvEkAqSEsMJxPmVttp",
  "key8": "4qgVB1YUeds9eLspTKiXs8tcPuM1YBC5cN3izmyhU2sek8pLB738zEP3Cs9cFWD8AGNbQdgUQWBMYTvN2PQaw4Ne",
  "key9": "Q1jffKV3KvKPcFi9FNxdxb4WGYapDxZryXiG6WbTqUTrc8bMS2e4LcnZwtS5Kq41ZWosTxZi1WTPbssCgMvFsfG",
  "key10": "5rF2o4kgW43p3m4yPZMm9KYtj99pPeojP3cxxnFycjia9bvhHrEwyxD2XqQWAZbEgVQ2nJrNEc1iXZ8ftdfTbio7",
  "key11": "23mVzVVett3DcaEcx2xRHXmmCPwYXF5wL5xgJBTXvwbJyQptwSVW2ZwevNvZTb2D4C3SHGEV5dsgC7AfXH7AvZBZ",
  "key12": "2RwH4aJhEMyjX4YAt3967z7scfFtDttKsUoDmdt94FHroZw4zhPt39QnD2YQPmpEnNfsGAoAm6bzcmmkHUoW4j8h",
  "key13": "3usWD7RCUP1xJuRpHCPaZ8qzpn2LqjDY9PeAZobQ38qKtNgComEr19rf8SJg5huicoBEyJVHq2b7tJiGj6a86LJD",
  "key14": "5ZYHxyeb5mLGCbuMLfwXz8UqEeshNSgZCpoWYe38MqFgzCcBAAhmkE5Tq7dUMnenPK4MDNzF1FKRX5tJk5o7GEuN",
  "key15": "4X4LrkX5w36r54PzLHBJ5YXsES4n9xQWQszhJRk1mDUyjVKTQoh5XfDay1zfAG6cGVBZpztGS8ysZ3aihmcbLxRN",
  "key16": "2CCvT3xHkTvSDuWbrPy1VhfFgik5i3DfpTEnt1x7DmhofokMQuzfRsorNu8Pt9M7MNjyTRKYsAB4iWwDqtrsasXf",
  "key17": "2us7M9jh1mQbdff4seVvm9NAUWX6pACTZgdCjxGaDqYDqtoN1eLRyHB2BwNW5dpGn6wVwjmZ1mFrhEqNW9pzsGWG",
  "key18": "EQkPfXpmKxSzddficRBT8XMX9qxuFHdXL5kkYsPqAWXcUPxWGjsCCSnyZpJMJW71ETM6upP6jxqpEJD9NDNn8hU",
  "key19": "51SC5tiRYPuWFwA5UWpT9WcR3mroSyhQGQCKE9rJh3E7m6LCt9ssnU4K8HFS772UmfUgiFeUaar4JNRcTYym82Ta",
  "key20": "2F7JcnHtfBbDr6Ek7VZqhcJKALtyhZHKfNB7RMpAh3y1gmfPiRegUwHJSnkGELKjfP7wpGPWY7kr8gVGb9VSeJhn",
  "key21": "4Xw4qmWXjPiFJ7J6dMXYZSb7G1NNhKmuC7nArq8eMLLoUNtaDvbqjSBtNWRP8njZc8FaBxKF3hQhjqNk6uWi7WV7",
  "key22": "47EwZMFbR5HqJUMXMW27Gd5fpVX9jF2zVD4vdJCpWJeMoQ1jVcCikbxcRU6WuFYT3i8SzvyaggeeGjNn7D8wRyYi",
  "key23": "mMHgyB3SyU3cqGa6DJbF1Qu85h5ffeKBZu5kYwQiFzPZjuScoFqWhnBzteszXZPkJVXFEkxq6JRP8DpqHKUKdcm",
  "key24": "3LidPmSmYmUpMHVsbbKpLct4S57F7T7tHeEnNYqsLf3xANbnmm1BCuGphPPSTFCpTdmcFhemZZvaJsgGaX7HUopb",
  "key25": "3w9AugKzeWabq9Zz4eZBXGxQFMCJ2kf1f4V9LEHtTAru2EHxgpZmEH6xKT2UsZ2ZjTgFMskRgVY2tXBWXtLVFKcS",
  "key26": "Bkjjd9w5LkZqKX4s1XSjswnsWtmgZ9HsQbQF4yVMkwakrCH3NBF3VLvGW3LrZQx7sXy4Mfx8wpW5ZBCH29rF8bC",
  "key27": "AFNnReGfsE38YtLs7kL3DQRiEvmsB1vAK6TRdNxmgXB8oyiMT1abydwnkLazYtZY7jbw9GfFSZM86zctG78MNKd",
  "key28": "5cN6pLX2KDfJ9PSw9yy6NBz4gCtAtBix7mVDeBThdtJA2VMZ6Brh1HgS4uVpuQaFxfvtgabHM51D5pi7UdgTAzhV",
  "key29": "4VJnWv8czkvGQL2VgjWJjE7sLBYVaRHkxxCV4Ay2oTeLZ2HAtXvzUiSV533cVgxZQrfmXafQQxqFL8cUkJAxanLV",
  "key30": "3kB6Jom8AsZPDPwoTbxDBGZ8Fc9KfYAUq65SqXz4bvCcnNoZzeV58CxtBhfEpQU8UsqW99h44aKj3smr8g6xMyVx",
  "key31": "51H6eHigofxpfFEcLgSd9HpazP9BjnThWT8kg1nXBNBN15QNuWCo8WKqFsUEovswE7fR6z4fRx1X5xocN1qynfpi",
  "key32": "3QEbvYZ4EhcPeVydbfD9Y8Pk9MYkkLp6tnKavHvDWBynCMnZbuqAWV4PNmrZ4hM2B3M7Y3A4LsE1h6topKgiCQez",
  "key33": "3NgCPZJwD7NJtRjp3CKczxhd7jPkCVAYdSmmSksbuRadsVZDPhUgJs7jFLX13bHUAoP6RqbzmGYQcDzKWmasUc9M"
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
