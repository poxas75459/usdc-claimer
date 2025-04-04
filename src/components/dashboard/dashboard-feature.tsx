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
    "qXhQkz8QpK4UidnekFX8CdUH478bHG4a8a95eq8ZbWk6DtpxvzRfkAKbMVdAjPqfZ26o1FYrNCv9TvEZX8nZdmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52RvmNKcatCh5sKekhfN9GP71FeJAkAcdqPr5HiD46BD3LhgeZ7Uii6D9N1egssDZfRS6LxpDFjZzGpsSNun14P8",
  "key1": "4noHiAr6KGGqPjrn4WvfEMbeEgAg9czc3h9BCKG7AkbGYvCJmQoU7aWWCMKaxdqK1fdikxp8Gyo2NWQvzA5ALsFD",
  "key2": "4WSbeoHE3RgewWkUpfXXtFhRpqZbKxrXxy1VMwKZaLcnkgQut7oEijZHFB6Rjdx4eLpAxbsBX8gM4f3uGYXsMt5G",
  "key3": "4gzCdNGMAQ4g1BvJAQmRxwGJreHC8ACcjBCLCqpAZRTZzAwE54MQhk1M638Po9i9yFWJpdUbuusn5QfZa9ThaHPL",
  "key4": "NDXexTJdAaQQbNvKxQqsJ9EXdVjvRLuopZGG6Whq9pLVWw52QMkHTkjfyPveFDnkGYSg2w89UZVpzSCKh3FSjHH",
  "key5": "mHFdZhtP61meHvVV6P5FUCbjZNcxmXzNgW7Hk4NPR9vXCqLt7xfg5m4vPFoKnydq4MY2yLuKQKH1z7ouTwNHfCP",
  "key6": "26jgUsr7BQ4QXBWhCjJAJBk2n9JkvHQiq6e6p5kkNsMWdNYnSgNNkA5D48vCoUPQfkwHbggu6BK4zb2XU7JCfvfn",
  "key7": "2FiQv6UBBeBQgMPsosPZZbZ29fCWKaBQt1bkdhk8JZgeWcG7qT737srWfZz96tgM6MKyY7ixLTVBWUn7iuSqvj35",
  "key8": "65dXWzR33eyPn9xP4MqxgVSv6KeQ9Dnnh5qvjCijLp8cc2J7gA1nq9HuY1qvrUW96EqqZJsvEc9bgU926eHUiWfo",
  "key9": "394PZQLdvdk3gRD7Hdg1mZKf1GTce9chscjYzLfgro872bUu8FsFkqG1XrbKGZ4nhjsAj8vMCyHd9HpCvK8dgzM8",
  "key10": "4H3WWa4vYU2m7Va6uNmaNrA6LMBrikuKw9Qhd1hDeMJpg3gYhBQsrHi6t9Lc551LBdT93eBYCJDTTtgXJp5aWHwD",
  "key11": "mptMGhRmxhYbGSmLNRMjHyPjrMvXjgxyYy2Chsje17924u8J1wGETTYYqgnynGuSBQVNqapCbMYa7gzcE8UZ4DW",
  "key12": "4wv47B6ZAGqWSByqoSDXFjYzSC7iQH3Hde9DL9AyStoz8khXUhQBrxNVtskmFXnLEb7jaMJdihphiFeGitBbPSgG",
  "key13": "3zgCyen79wQbnTruMhW9xRxiyjL55Pz46K2yzDb9uvTouR65fypSu8KV7ow64of1y1KkV52uPMLFDiXyNzCAaC4T",
  "key14": "3SQ1VxFYzYzjqHVRcg3CDQGJFaWtXjq16iJ9xRyUMSpypRYsC1E5cwLJtgKhSQ3gXY4ZT6s3j4vBG1rCx2c71TRR",
  "key15": "3qBQsTazABCJ2S8kD7oVoLxis9hUn12KAXiWkiQjCeaDTveb88PqdASQRoF4SmGBSymcogPczJNojcAQhJ7j6Mf",
  "key16": "4dzvzYT83uwksWjBCtYfDnDNY48gc3Utgp8PeFQwHDaiJAUSXJpqKKdofwfyCtghaUrHzKtytpESAacfGWjr5qNo",
  "key17": "4H49aQzXGVyJdpBgttxdg3owNFJQjdu9fKN54dX7vd3P3k3kxDJNUNNyL6mJpWHw9UAMLSPXgfrrq5TXci1YoaVc",
  "key18": "1LjjjMoC1kY3gVU31Qx2MFyhViESEXsaySSQ8LRy2RPnEnn392dBbhb4xcb8oD2NMSC3n3ac5EFZwmoXyewkDgA",
  "key19": "4Fu1SyiNqZaRuMbLjcMopKBEZvuhCqqJQYSeUxhesHeaPWYHDzgCP5r9xJEhR7httv9Fx23jNF2w8UReDu8U7KbJ",
  "key20": "65saxgSfvwkoE3qHifeP5XPoadxzcXVjYnK8MvzAu3oAZMTtfHbPAzBUaFvFgSogjKgx89DoP4tg3MRB1wQfu65U",
  "key21": "2soDZTnysySoLz3H745DVpWo7U65zMYPg94tpxVUESFEWKYEqeynREKHZbaQxCK73BSmzxy9VAMAiniaS8ztwj2v",
  "key22": "5AzQmBdfoVyDKYXLpt8QZMaUKJh55kJEx8CAZeoUfeEkxtiPTg5cQvGRrW9ADrHyTcQNdrQwrU747SusCFVTiGmo",
  "key23": "3bZxZ8RWJ5AyDBCNgZUJifKsaUk6VDN6Dqk2rh2M3bpQhKePEYg9KumNhJKYmQDyBFij7LPUT1A9ackj7nbKx9Ei",
  "key24": "5xathoGXchtdDtLnLPDkGXScwHUzG6TwxRx3ZQgNQgSA3ZVuX945WY6RNsUhQHii742RPo7zS5VZ3DtiKoZwTh3m",
  "key25": "4vJLQqoKENChokCt9LAcf3mvqAsHKFw4xWXjReiyGJHasxCyQn6ou5JC4YdDy4MpMUJiR6X8mwBmdGS3quG4XgUi",
  "key26": "5yVPFquaoCa4guTMrYWVEZqnUhCV7QA7npb24oRvJSJFYGePFvpgJvjXax5bWFv74TKX6gULjGeCddYQof1T31xy",
  "key27": "5dYoamomiej78DG3HmKGT727JRSvAEA7qBXAMRWs8QFeEZZSoW8kG5cEHdxhDmDLjFtStrC9TV177357JNUExSKN",
  "key28": "ZT68R4WzvtajsfNYw46Bn1W2mGrYnBs1gySTWj5UXz6ZRmPFXFNmgu4CdeJtDN2c2JW9hUbHMYA249ma7fWV2KF",
  "key29": "2p59DK8WPSb3yaMak6xTZJdND5Pr4wxd2s4gimEwcf17ouqBaMYg2HJ6Gkxzde6YneU5axruadNgfFtFvHhSFU2D",
  "key30": "2cqy2dWvSi5Bdgn7t9qaBrbSDofupS6pkpna1C1XLHcdF13chdUE58TfvMgqgDh8MiNzcMLm3M4s1xow1tvG4hta",
  "key31": "5TEHTTT236u7YBzRHdYq9bkAeTM1GyqRVeqn5QETYKT6ZvLYr8KeoC4HVUBdTttfWawZx3UGSmuhxxZ6FSpUYuhV",
  "key32": "3qbkLbf48qrkeSvtBZsdnNuyioWZrYjKRhT4AoVYs61U5T9aCvcBoHNpUkyAENaTh5k19vek46D8K6SfKNp3YwQj",
  "key33": "5ffXy4KYkv5VgcPWocxduaSmC4yHMwybdyz4GFXynjXjvASWcjweNidbyQs4v5y2xud9Y7jCmBDkyEMJ9fJReriF",
  "key34": "59LT9KtpEomGbmqsasia8kjmqfxdRyDBN2BEnekviCxa6EAYKCjZNfZKAqc51TZeTkFfRwb1pP26HAYhSG258DGo",
  "key35": "35bLBuk7mRfNBTr95NEhnUh2SpqRVnyUWkMdxXFyTvSonocCcQiqaAS7uoHFfFUuRJWcJCGz5UTTgwawZXQP5ccw",
  "key36": "3S9TyYAoTLeWejnEfcGJSyyVbCAGumKERZqKxr96xXKXWnQ4dCi4ktXr99KDchC8rZr298NB7XGU4WLDA1dKPhFo",
  "key37": "4R2YUcgrbCcDyoZQRsuagBMWp52pFtACgsHn3ymZEoNmcyzmXgqDQDqKqEzPypA9iLfhUptRWrHk4hRwHdmY1wqa",
  "key38": "5LxULur8a5v2e7H5fZwAiZTL6p7W7zeNJSFLt6VaK5PtB9Vvf5aVqqiqVtZvuQXUND55nSEU5j4jJznRhvEWdDH8",
  "key39": "f2qsfDseH3bzP2pozEpuNpo8JSJUU6JJDvkWQzA6Njh6UXqMLpPmZ2qf4iK84KyACNSaLwiFZMrjFHdfXpCGPVD",
  "key40": "dV89Ue1Bqjmy7hVmjLtRuTep2ZC7CsLvVfS7B8jt5CsAAfpf37Kx1QH2yzT5hjRxJp2Eita15hHBcdoZRiUusDc",
  "key41": "3E7ARjBXuyB7gUoUttgngAELwS3T3MUeLTcAWt5yAKN8QStmfep4ncVB8t1ku9hghsoG96eeoExj33Kfgaeqdrm5"
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
