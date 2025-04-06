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
    "41ZHJfvv7DM7sMqNj4jsB1JNu8zYYs4XERvSXmgTWRZZFcVdnysNvhavXuC8sNhLGp4r8ZbAcsXQiEg9zimPYHZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U1RCXPBKws69XwUPSFpqUdT3AXJpMatoG8fa4FQZQw1dYLujV9tA1g5cUpx5mZ9wT1suH3AH5VaozPY3gvuZXLK",
  "key1": "os18k4nmFB1od2h6qnjzALddZFJ6wpUEKT5Zuxdb2timSq3Qcth21fMYckhp3JUwhgKUULnji5kLYM6eNcE4F35",
  "key2": "AftiUzwzumrmtZuPijxUVTj8Azampj8tcQxYyUw2JAWU4BMDtU8213qEKUxoQK9hkKC7e8BwWgWb6BZwBNNS6iH",
  "key3": "uXHMPAfaYJKM2fbPMeD2F6zjW9SVr1K6MiwXfTk1Jo63A93EHzHnJhST5vRvKCQ691Ju87tsUojmdN22DRQQw2Z",
  "key4": "2zuQtW7H9X22hMtFSJ4gBDNrZromr9d8zxpzbyoQZrBGkV5xDE2pgTTLxXzAybzBV8i4rc5kfvdkKPzBUXvuTS1T",
  "key5": "2krmUsFRAhtwfcpjzUZ9gRekfiqJzsq154NLgHdkLGxZcPS1Aa1BsU4P3hv9YJYicBHLWScK4Zhmny6NQwFmGXWa",
  "key6": "39tZPjSqqGkaTBg6X53xYix3Nmy9QPuHApuoGSCBHDrsrTKMEKHr9difQWp93SospAxfgD7e1bsrY8MN8LSKCb4L",
  "key7": "2TPkJqgfWuJzECWsLucgbAr8mzW1hhVTabAXAxpvMWgv1miUwpE28MxwJ7Xi67NNvn67W4PCStyXzyJ8z6wbdzwh",
  "key8": "3d5rCm7Wt3V6eMBquBxUa7UM52scSsaVLugkK74vgV7jxBUeCNwEF4DQv6uMxZDFDSWesPx5oERKbH3jgXPW1DNP",
  "key9": "383QUdYnUYLvMX9r52xc2b854hj5kxGDjHq74xQQHtXnBvw1ydfDZ6wpNVhdS9Hu9iYjhVnTSn7RxbgLqmbnxt8C",
  "key10": "5c49u6URkZ4crQ8m9VrfT2jfSqCkCYaz4jKnw7zrp9AQYkQsE9HJHkaq1Gkat7fqQY8HwRuh3Q5D2FAjwdVsr5DJ",
  "key11": "2CYoWfYm5ZzHRGtfzMpoe4CNLLgeAnJMTQGk6Qze3MvEADXGi4vZ6bXMD1bMUfPDbPABFa9GWrmLKp674fwqxWge",
  "key12": "2pLALRemv8TqWFupdYoiDj6kiFFeekuinHc29koQ42x1nRJEXoe2S4BebxqbM7ojm1whcWjLBHjfLJGoipjBk547",
  "key13": "3Fxw1eGFyWPAMRzc3aP4EwSaZ11g4Z2yNyNFQsur1qyo7W9eVkiccS1swwv9zvvt7hfJK4KtGGWt6a8Tc7anukgm",
  "key14": "48rgKfXxFwrME9672dL7DhNhsUoehb1rk8XuBY7wvs5DGRDUKN6E7EWEvTLkrSiDwvUoPtiv6Bww28ezaGNs5HzK",
  "key15": "3XcgQoe6CfP8D6F6whRjZyj2FMbPzWfsS8cnj6DTkZfQhHhAGMxU2ZhYDxDMKccoUP4evpmuYQfet9Vd6VYwq2Ha",
  "key16": "3CyuqKrNmauKD34PVscN7sM1q8zN3DA51GPsCPjMX62b9kBf4nPRcvzJqRd2EoePvSpp4mqqQK3HNuGQv4zQ3g8W",
  "key17": "53WZVZTEtVKLmncxCCR17VWJsiuTQwoWLRZCFANBQGKd2vHub2L57uACWa7i2WeQocqgBestAw4LQMVN3dMpuyma",
  "key18": "7bznvExMeCjf5LFQjfgh8bdmjiV7W4CYsQk22F8ZPvjNdCBBLPTvbQAft4ByFSzJjqZrWdXa2931sCprnbYV8c3",
  "key19": "3hs3sHogd6eDpsCqbCd8LYECwz2c9J3zMhdi6f1FjPvGk1VvUwuUft7f1rctHQMmyHses15j4GzFZ7V4v92dRVmm",
  "key20": "2p5Q6UKvVGKefahqbFYpdos9a23itNQ5AkdFDKHkNjHpduTzUqJsvM2ytuhjt36rCxJZRqiwG3sDBp99mVqYF5CE",
  "key21": "2MVZMMudpvd4znaxxHzWttjaySdg4sDWGVTuTAB9w5cXX1YLusT3sCYEyJsMoxRcvPEuQ1mJ45oHpFDNvuhreHVx",
  "key22": "vKVd9Mid39fmbrjsmqYaUxVgWEMwKiEEgoviPTX61HxV5ybPmQyydecWBuoCWDMCSqF4U7DtpmwHZWjMqjyfmur",
  "key23": "3WSaUtb9PrPBhNH2wndLw7ByMj1yVrsx7suYQGS4F1v3JwQ2vRwUdSC5ps3iApGT2cgtuWmbX4gpwd9bd9mdFWcu",
  "key24": "4XdgfTt88LCswnYCyiSfCJ9EqvbDTNfRap9gJxkHCAMsRV5r8X8MajXmwbUtsYFuLo1WPy2ML78WsxY92RzBPq1a",
  "key25": "2cg7SiDYTcdzdqgXqjKRhQNEWmTSirqe9F43qxkRnmDR1qWGt54umQJSSSyfJPDLmdR7xRJUM5jCGTnS12FmdTEF",
  "key26": "4AqpU7Z2Grwgr5iJZSgUm1D43h5Z1S6YFWd2EHxWwWMnWfnJeoBTt4mD9ddm8ETcurHViP4seFYtJ5chkXq7qe5h",
  "key27": "3nAoupdV3yTQ7erY6E6qqZzMbESSqH1mpMM8ss9TPkYQS5QeqJcWMEkhtzHJRABH76hJC3kB3nUjaD4brbXC4969",
  "key28": "dEqTVHJVJiie4fQR7PGdTgRTbnRe92QBhg1DV3PqDFrLifvmifvk3h5QVHPiSSKTaPKxpq31p1C7q98c4kvv9go",
  "key29": "3s9qHeMXpLwPaLux64S6jF13yqsnwM1r8GpDkH4fEBtcJToujv4qZ8f2QjCsgczGRLiNhLXxjzD8Bk5tCjUiAy8K",
  "key30": "4qY9L1y1ytKcD2WNXbdBBMRhTpCCxUZZS31t6dALdgGunMq3NsU7zQbuW1LjQjSWB8oZGMGpbfwqDyeY6Nq1ni6",
  "key31": "Y34u65BQM51nNKP9WJ7Q5yU5SNuN4ka5V9Y9XrFP2teAAXRjeNB8r1Zfx3fn8fDQonbmUzPzfbASGunRwcitHiK",
  "key32": "3dpc1UuWypg3EBZGB7r6UJAnkuyFd4u6A1Zcyks7YkQy3jwhR8AMFzjUDF4XC1YZBGwAa5ix9vWrhAkD3STWBa2Y",
  "key33": "3H44yxiTAfkDgSFyaFKwH3D23QLygE1ZHKZ5UjcdZNx2TyxHzV5zWaokbnbGeNd6n2j4zgj9qFZTocpeggG6Pysj",
  "key34": "3GsBg1p6xxoYgtNuirJ7NvFCeDQUzHPZaJjbmpGW2JHvW9JCB3yjMuRaGAb9NwXJr3hs3rJQnQDSqwKS5x48TwNg",
  "key35": "3muQ33DwUrh2CgQJ77g3fAFouqL2Yie6N4afVcbJ3zRkTjDQnLoGKYTBDKUBB4rTAodX5Uc4qkws5o4T1uyKe8Ud"
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
