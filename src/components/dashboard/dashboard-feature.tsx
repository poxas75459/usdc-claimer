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
    "29sUgDgJ1eddM8rfSBVhCpLHrU69GpkQana6JfYKmz7PrqQ5d9AtpdRhSNExFUGqdQyr83Cv9yw4rXvQr62aUhqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sjf7uiSSh51f7AQjVx8BacWdXPuEEpsvPfsKY7x9x7bCtGMCM9QycN7T42UgqVkmpbKcepVk54cEC1euAWJubZW",
  "key1": "5Hx6DwsuB7m18L2W1VmfwVjUFZx8k8RBWpJz5C898F7EKK83f48suitjyYHr4hKShE784VwZ9ziJYuCiwXbWLtZ1",
  "key2": "WZAP9jzrow9PTxKRz5d3n8jiCe4KktLqzXRmUbJNs4mcWUigXAv1k8Fstxi2hySMGM1Lc6PtAirPpDX2nZYHHkW",
  "key3": "26hmNs8Z2LtUBWE3Ak3DoMXJK64HogV4HiapMovwxtiuCthuHQmWzpT8PfjGoKFfSSukz62N1HC1neuo5U8Yg2Se",
  "key4": "5VV4eoJiVvtFcUUERmwaSLsEvopjK4cS2TqjoqAypYLPN5jDdQiJTvHk3QuqMBXgMjYHZZVTjdqCVBCPUAnCpsRk",
  "key5": "3QwQL5NAa9YKXMSFEV4X24dg5zG1iPzQi8bQavPZXixc1Hj5tAai2EWnDAfoAai5z4Rm2GxJAAcEuA6FeNJfhYYG",
  "key6": "5APDbuWqbVQZ35V2UPjmaYcc5tdNZEa3hVAA2koX4W1Rri4P23LGeQDU8uqwFM4k3xqjzGbpZFLiXzXGWPeeMr6u",
  "key7": "4cdEVkX1NBjxGeJyhPUyFpaRKPFTNPLBDbBzeQvPB1D4U45sp6aSy7uGaLddPzktSNRper6FH1JnaM95P9pVy51N",
  "key8": "2PA1mGoKevD1bHSfzBXjKd3M8rwyhmX1xpWELihKwJbvhyE7AjWpSx4uixmd2Mjbkw8BTpCVxowHEHb2rN1fojQT",
  "key9": "5WcFSHRptAuQrAyndeA1JvMCJMWjHsaHXdkMguj1FGWeXDYij8n643VRyNrsbZzRbcA7JmFC3yFGEhaC1VQF7Hf7",
  "key10": "3RuHCeDgPvWbK7HoTYHiVoz81fbetMFTpr4PFtZKWWXkSTYWJXG7hitHMTzMbPhGD4ZUAwFf72LiyoooXMrq5wig",
  "key11": "uBrrPcePPA3XaDG5e2bhBfnr4CuAGmW3nQRGXBvrDnEeY7c9BfxT5RNWJ4juP2SHZ55ZWeZ7nHKbaXVH3cfUcAe",
  "key12": "2mN6D3DzFCkBeU21bmz2V5rfUKGx9YW45yLzCpwZjbzrEGW7usx3oUuh71hKs1vNNmGR5w5eEuJu7DD8LDxyDtfV",
  "key13": "4KgxnCkargpk6iiY5bdbkX9rQdDGVKGdwe7yjkLAfRhvGzyR36zN8fL3NNt82j6J5XwqoELpBGzxz3XNsJt1Lrzk",
  "key14": "54iWJn4p9QGY2HUfXzfRGe7JxxeMME9jd6g8WtVWKqKhRBKT4RYBK7m6rEVBBHh9acJEyymULHf3Zq2QpxBNUFBR",
  "key15": "5ZotASrhbhtZVMY6HiGvJ4Q1DJ6mvDRvL5266cZTH7qVx1LrXvxbbZBxMFVmJtFHDkuGrH7ztQpZqP9MsckawWhz",
  "key16": "2FX8JX1dT5KYjXxKsVjVXcWuwm1PEY7RgL6zHdUNayHM4t1JFERyLY95tBAKcvq2HcQtUS7NXCMaFvNqW5TofAVE",
  "key17": "4QmVxHxw5aihDYcg8zMQGQGyg7VW6GEnGwSy62Lxi7Lvf87zrfQNpJGW4Md1HyEj4aWy7RH7J2CdqaT2v7oRnjsw",
  "key18": "3G6WpH9nQiCTkXPXuoGgYbySYSaMHzNceyJjok2ziBkuC3hN3Ys7ZMX1bP7z1X8qyAenTndXUjE8DVQZgzkmBnTo",
  "key19": "GjQAkstgL8zj7tkpJLBiVKFXFZvqpKDVVy9cDVCm8MGFFNJSvi2BxB3fBy48bPvscck1K2L6bNMyZ4GR3Ws5yme",
  "key20": "3wJFLNTc187PkmbXvzw7GJrANLCAo62fuZsxgdCqHt1uwvbeo32NxFppiPmCvMYs6yTvdX3LBr5ZDtrXZExN5eRS",
  "key21": "4mXC3tBzhT4hJ56TFr5rRGjcDdriWZBg4Ag32QYehVmjb62m527Xdyt6hrWiRsiU54VeYxoHKdP7UVubqRMMKZtj",
  "key22": "8kBxs664kSwCoWwnDTeVeLJBPXfQ3nkpaTacvSaDEAXYJGavhEhN36RzzS1e7wmvR8fuNkgfdTo6Xq3zFGNZRGa",
  "key23": "2WJDwxVqs5kwCtK11hhda13K7ssNM5qgXPa9gJxRtLPde28rtk2FrPwvcCzuoUgPMfHx6aKvDvhVuUKHzR4V7DdQ",
  "key24": "3WQRYkwiZHGLpTx5z92mFrPQE9Hpx7bSCoiKU9nabdicVdQTJNxVqvMWixhtP9ttYBKyM829Hw46qvERgcCrjLLr",
  "key25": "DqHsLctnYYUCwajzodXCdt7so4fNNPwnoeoVXZ6LzNTnQQVcd38GdVKZQiGWAF4HB464LewQLuscwojHHKVopz2",
  "key26": "3uHuZWBT8KNkqAxrggtWMMZHFaroxyrdcxu5gUGvqwqDGC5EqQydbuSXDi2ANVoeQ3FgPaqu4kQhmZk496bfo7p9",
  "key27": "5FNjDVtLemohyhhbpkY9g54ojetYyMr1LTmV2ZjM2uzL9QCPYNSzKQ7qVBNotTECofSnThgqN4JPdT5fH3zYV87g",
  "key28": "2CYEoUQ8JZTqxdiMdxrLLmHCjwcZLv3yf1pXRsyKBrStASfot1zsL4vRXQxtZGEenRb9Fio818mgDfAE1L5jypWT",
  "key29": "3JJfryEMXvcJrttmzfrjbnH6jrMQ4y7KiPvUx48VTcbcrbg5Pah6iK8yPsn2spEdsyYWorwKzL23ai6VvuzKTHBD",
  "key30": "5gQPWff4LSqaaA35XGhs72mBcxwA1GCJj33Qaicbr3g56EdKpihihhPWbtnxdDo95S4iU4YcMo3uHnzd2G9aPEtF",
  "key31": "4z2bXvoZzMsBqt2pBzYfvYCfcQfG49XQN8Z5uayh6ckMChzNhxcSoVby2d5wrKfkqif2ZW6nUPYcNigEY9gFwKxe",
  "key32": "3WkiZBQhCnDcmx5vxfGPNEZ2xfnWDFrKxGpANRdZDjhUGHsKfvm7wQWWUfF6aPCuAkqojby4LWfCtHGJtLR62zge",
  "key33": "3Gf4QQTNRYFLqFCsjxwcuvTtQSRYmuZZSmR61RVJZN5tVhMxJVokDCEvt2CQcQX7Z5e4Ju4V4WTL5GmEieSMoYJh",
  "key34": "2gtjh9VfYRJqQXqXaRUPM1nFHh6H3xWbc99ZHvQWHcBsoJsnxRLfe3YNa8ezKW3bR4hWgu6uP9Smqv8D7AfC1NEx",
  "key35": "3x4JnfA9BdCtsnWEDu9pVhLXTT3rzME6cPWLocKHXaMxUHYz865Mmf59FuqNG2mFGJSakfm4fGmLmHnV9JsXEn9i",
  "key36": "4RQyiJmUiMMi6KHhHHhQUagZUnnUxhoPbtj4JFZZySrRyzg5Gkxp3bJz5Ru6VkkkyCfm7oYgCpDrAxXHcMoPCqKx",
  "key37": "39LPXzD8uvvF7pGGijdTVXnUZZZboDzhssFMtkco28fbki6DKpVYmcAWkULUEHBNkaZqDBXDpLKAeqEt5iTvfqV4",
  "key38": "YeCX1Zmv8xrC3LHm6EhyVLL3bkSGo1qVa3EhByPBGPrfzwVEFXi7fp7oGcRL1cYyEyoijpNXoJSFgfXaxU5X72t",
  "key39": "2MzFT9f2A9LszQQKq1rjNSQzth2QYSKpVqgdqpyfRxpebjznMBN6BbEpGHuU6VyVWBxTNUJ9QkzenEXs8q1JaqrV",
  "key40": "516WydqLze1UC1BUKM82uFBFzkGmRMVJn6GxWzMUhYTiXNQeHQzyxuvxkcc8S8gkAnNsXDEUxVSsHybFGApY6a6S",
  "key41": "4WRG74BsWHV4iHpQ8XzonhB2A1RvjBKr1S9vEE4d4d1ptSSQYc5dc37taX2AbN3CGW17d6oMk9HApGGWhbfzvpY7",
  "key42": "4pAXoVHeLit6Rm5WbfzLxEUu9e7qXxFkCLXfUoVWTtaJJt93MXSydJWUc4B1bD87r2mRV4bhM4TH37btBtHE75NB",
  "key43": "41kYEbPXg5TduQYRqrDKJGaYCoXiRWidCaeU851ZVVi6QnAuLaMgpecs4xjKpa5uT3CwRpk1apxcKike5sw238i3",
  "key44": "3V3GPa4bQvZvqmAJWAPEC9wMFSuDbXqsVkx9BufwWUdMpGqUEKdH946oH537SvXa76g9AiRAXtatNZHQjAuT7Fnx",
  "key45": "2zmGWv9ysVJVfg7QRqfQE8hDwYyQ5mBXHkd7hpajLXaRUaXED5g5GYEvuQ8fJt5Y2AspYCzYGLtUUjrYuH56a8Sa"
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
