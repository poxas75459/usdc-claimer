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
    "2aX5Y3jnm1NcxCYAxJAkBAuzyxqWf7zud6raFU64rWKSXYoT7g7EJw3EJWGQpGj2NUKqJ1oV5WfoTmM7kCjFU66g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FaZrfHpA7CWj6AAbWuZUmZGc4TH5m1fmBknV7it7HzS7kq2D3GreMrX88Nzsca2fasGPshwsEMGmKuzMH8d9JbU",
  "key1": "2f7cehRyzwAYrWL2gr3ZJ9GrdWnABoV6DXxV79ACNZhSmPRbUXSjWpLsVHiSPvxpUqKFMuHh5CKLDAvcmgdTvsk4",
  "key2": "M48NknRqCLJktbPeVonS74QbnA96WeNh52WPRaE4rg6WjoxDknTB4J5wYCn9eFMBD3LaEkCuNyHR25nk8kMyJyD",
  "key3": "8iQfN8LGhbps2W9ZQgLC3yAgjgyi8pmLzZd7NRgUNELeEEKidvX2gSmVZdQnUasVfrDvCf2HhqGb1sxdaTAny86",
  "key4": "KMiqGNiGmLGkq4tNv3KmHX5MKWs3cyrvcoGvSifVtQdFJ2wkCWcHtFxPr6qfcK6SKnv6icnMeJaTSFYiUoFyrBK",
  "key5": "4HVdzjT8FJywek1MqgGYAVvdK5UMJjPXtUcNt6GgQC7UBath8rdwWeCPqPRyD52iZK4hgyHBgzYpCF5NHBCpw8wq",
  "key6": "66RRtSExwHa6ow8onpMtxsdT87EP3Yhm7WEzCUfePPByDjnrDFiqaadXWyXzSM9WRFEDyypRPi3Hma9goPCLSpfU",
  "key7": "3QbB6j9nkHayW4GiRxf6BRHPgRraH5MogFAv72BYUQ2PV3amtNQp3ZHX7BMbnuh2vyF5mKHaMDEXRYmzUdTUpVu2",
  "key8": "2j3PrfizrinYfcdniaqu9RNcuQXdrGBCW1ARzhnKXPr8AorCpRSsEUhPek2vVmqP6AbwMi9xKpAbvziPnDLsB18y",
  "key9": "4L9AciHXuF6XkCfPNHr6y59ddKf6shsabpnpcKiNUimkPyPXj9GqyJxjHT4Zf8PjYnBE7uFzdjdwP5FknRYv1gop",
  "key10": "47Z7ht7fzCoRZ5EJFT9tz8CoMxQ1HTeD5QJXoAJ5Gef74tW2whorVkhUu5DWGWm7zQ7CFqLfYxW7c7sRn4G3yeHw",
  "key11": "5xQAHNQHrwtt1YhMzNu2fZ195ezuEPENRnXC75DmpsuunVoDQXBDg8bEVnCYD8tJT5dxTLie7dY4pXenBoAgiy3g",
  "key12": "3QARwSQTz392sgmYmwsRZXUzkYmNuTCR3igVpzUjDBGEBJHQKimf1kSibvf7LMDMXxmewurP58SkdCSLpi32e6Ju",
  "key13": "CCYfRNMSUHTfXGXcWfSg5zAqQ8H8ddZLaekeRDqCZoWZe3GaJ6r2K2sHZNKMkWtwcyx7nweLpinbLgwXwjtiDvz",
  "key14": "5mCQC3dckcTDhgW6teWqPxMUvuMoCv7jkUJXXwhCXHcyZwdyeksaFU9WQLdTJ3PCazPpe2oP1xYV92XHHf4zzW9E",
  "key15": "3gTdeyYMmBT3eJmo3njVHbamNH1W6rS37jVTiwM5v4t36RgXpBiUTpAdwoVstm44BHkUn33bucKuzW1wZppmGa4P",
  "key16": "5XtyZAZ3jvcXQaLbHMamAPE1Q7AiBUXSnWDZT8ExjrAaQo6LKDUy5ggipxmHN5GWpaNVvH8iV6NDU3nM9GhgSYNt",
  "key17": "5KKDfSPD2ko1mrQDsuCcAQQbWSb3df4toYJt8S45QnQkkfohLRhUQVDPMv5LoxwMhwGSHAG9vainYNKzeV486A3g",
  "key18": "2v4bmZaLKQ6qciLH4jRzA6rg6BsNX3hAgp2YVXnCVJxQcCUHgxFP6qqXbAjsXuYRoE3gvyJzM4qxSW3cxfB1b7X4",
  "key19": "48u9DiFQHuZeNtRrM4HSCGB4ezRE6GzUXps11PN9xHfsEYLMe8uE3skmsJBUdiN2Ws9spRbotKxgdeWen2qpkGRW",
  "key20": "5rDEnEQoHQCjyE72bxnePRDoETjAHRVRV9PtZtJz4AyNicf97QXEZzBSG6Vtd146jheuGQQ8pDRsK6TkQxBVSWjC",
  "key21": "3gg1QaCu18EmHQ9KH9E1xwZ6b1sbxP3ci2yHtxA12szFUJijugYWfKbtrVgjuBgUDHvsFaes6kbEF5bcZxkunnKF",
  "key22": "4YUAy4d2yknZGD1xkvSswpL6rV4NYUKUNMEgCFJTBuTdfUPC4t4QTh5GnyFhB5L3sxFv9bHd56jpEExQwUSy9Tsg",
  "key23": "fkyj4aaAG2RH1iBqmXcnHFvQUdDgWB3azcnJRD4jP2u65S13pUQwPyBwhCnkAeVhgKe1nBLL9Ky8poZ2j9dhZqu",
  "key24": "3YXSW54nKTnJYvrgJTsT1kZ5Zec3AVHUFXSuJLMrzyLL9AktGZsQ4pB2Pn9hXwgFUfe9JHzJTZS5fK6e5SNsmZ4L",
  "key25": "BRyLbbRPstdWJDychrQLK234URpWsPzE123NXi4HZeW25wTV1XbT7ud89PZBhbN71BhJ9jYwbZPdaGaczmDtLv3",
  "key26": "2NaxGoFjKY9hSYgV2ZszvZ7DfUR9YcJyWrFPmXaBzQxhwHG9s4y7nao6dvHS4fFPmjJSz6PdhK9tfvvrbpBiZXHc",
  "key27": "4JMPqFZM3yDd7kx14xkn7j6iAxZHqQhPmox14ygSJRUK78jiQo8MLqzMN1xMfRCjpym1R61v8ZtdrCRuhWnvWjJ8",
  "key28": "4wBvBwTV533dqT5mW1LgPhLPAFsZgdBm9cTpkCThzZYvdKj5yErmHRBgG4ntmeRcF1WuoHEUMsqoUn1n6bsf3GPM",
  "key29": "4yoijLBoeqjEEgyh7ZWZPHYWMfkunUeD3HPUq4ztRqfQpA2rxVhC5nnvTwDA4nBcSyMhiH8rLv6cki5smQRjqA3w",
  "key30": "3HPPMHRXNZhoFruXg544x3edPVTmyYfsEJUg6bP2EazFywQVNf1st9TvG9QdEdeVmPuwMWPHAcSW8GKEaFgReCiR",
  "key31": "3jpPGgJX8nH5XBygHRFuGa7Ra4odYbVWeP5xNYH8BhcE1bfgMLrRmi4fS7oLEVuoujxr1HgpaquBmqsQiMTqpFwu",
  "key32": "5TPEQeerpcanff6kYeNENd7K45pvve4r1s72FDU1WydEex7KyeihVaj25Q13vv5YjLUDyxyqK6YYd65rDGS3u6fd",
  "key33": "22aLaCPRkRKnLrfEq8R5gP5UzcfagerndyKvaXR8qq7zbTMCRcBRi9gQw9HUsv9zMT91QJAuqe1ZVA84EDuEDoKj",
  "key34": "2pDs23zCbtADQeV6Qtj6tR4VHTPALDmDUybHnFGvBw3vct4PQ4HvZRBQLH8CL5Z3mcuotqBF1a7nDNbGZUNAjwEf",
  "key35": "4KqZQV1TtZByZL3KDendZ1RetNEEPMvxrvQ8S16hsGdgGDueT7nDhTc1FAktpaCJCbLsg8wfAh4iQ7bB5aUwMyaR",
  "key36": "2yJB4NxV5vmNEF2wq547EHXiK9DQXNGi7yk7v1Lh9Ka4jTGtQY81YobViGevRYSF6J4r9k82mFP6MndtCxZY1Mmj",
  "key37": "5SnG3vcgv5s9Aqy6wzzFJhqpqQXjcg4je1gdgYaypQt1pqiPNG1cZT4Ja8R3ptivfru3vFNV6oH1G9LToEvsQerf",
  "key38": "2v8YjoYk8EwJpRiyjBw2uEjgJcc5esdCFyuDmBguh4D8AtR2yVWaBvS8Fxup5FsewzGcnWuEYDeX1qbs2Gqmh7mZ",
  "key39": "2z1QUSCHswk8yXggLSWG8AGJWx3tbAVBVusWyfiZSqQbcvHJUmD6tsv8UZgkSDLnjuRe66teA9jJT4tvZ3xGyhLq",
  "key40": "8YyVU657hGhcQq17CWL5ZdvHWHFcdnabPhWucs2br3pupdXJW8SUdozDVNUoBKY7vUKAN23DkgefLuRLVPHxtia",
  "key41": "ohEccTHqVWu3L1eERAEwuToodx5BoMjVrzJra4D9xzEQpcmXMj6iaYReFEVQjkmgimC5636rbAcQ1PGB8wd3b2S"
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
