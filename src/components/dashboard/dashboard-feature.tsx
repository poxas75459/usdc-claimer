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
    "3zRwYeRBZukECJoeqz75n4PC6hqZ2u3QNFywFCeLvPTinvP6LcGU3Lru72F13cY9P7133cUcAZtonr4EPDL2bkfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3upCB19XDnYPsEtpDiYNWThp3GoyfPof8eFvvuje9RCcg9sd3eASu9SvHUGWty2izp9ksUAy5nfMQQym4V1p9E6Z",
  "key1": "WmbFMmjpWreUTnjL4pHv4YW9XTUSaM9LrfpCRzH9UyWh7ZLPnvLErTUZoz9xdLziBwAus6n4bvvNBbTWfwrERme",
  "key2": "H8z1XdKMEw4MxjVMHNaj2Jyr4Bn13hvE8ffGSA3USkxEhn6x5m75GcWHvLVEQcLjbBbD9hZWVRxGhpMR859eZmA",
  "key3": "5pJ1CkVLJBmM5xYW1CkRaJKhABM6TdSudhmEqvt3QhcxfkJEdbUxBmtS7jzkkE1fxX3PeCq2V6GmzB1y5p6XnJ6b",
  "key4": "3aH1bsjC3XAdn83Kt7fssNjUmDiRfnT1sKBrzGFCzK9Fvm1cYGmA4pgT64CT54Bm7oM8QFBapcYYzDz5gvgAPWPL",
  "key5": "3n3vTeRHsx6QthwE5LEgm7WrQ1B1XzYiko1oEpeWsXJWLsYg8EZzFjD3fGT1MKxostihNfUJCYTwK5JnXAVJZd7X",
  "key6": "3GrRW1BZ4Hydq5FYYb21a3bU74ghyHPjRXWhYy2KYHhEzwc296RbSreQz162M5L3nDGaoT6uxaq2dhAhweqSX8Ln",
  "key7": "2k8egoPraJBf9jkq9rWZ7TKuGDgT1GcAYsfeoEhAsca9f93N2RqBZJnnqnxvTKYXXmw3XThXxMZMkK2d1m8FaWqQ",
  "key8": "4VFGqP5cNtU4PWkdnJJRsptFNVd89M8EGNhR8jwSZJpupd43kbFudR4GxhoPDE12XuhYnmkCfrYN2N7KFtbmpL23",
  "key9": "owR4GNgni6BZahDdPHAi6ZfpDNJVkvFF4yXEG2VnM53EYKNLMWmd3SCzBBKaT9bv2wFhhMNA5nCp4XZkEmL8YSK",
  "key10": "EtXakvM5dPG1VaJvjv9VBZpxY7N9EnYcvVvB7e9NKfUxnH2Dfpx21gjhegCUNw98Wa8t5CdT61G4JKSsHKZWXLW",
  "key11": "55MuLHVmvUsvruN9CqcPNHzdF4fZiEd3N4LC1WuQSAUDRTeYdffFa9QXu4BHkvrxHpkgT4jqX6YwMLAdxdXgtiM9",
  "key12": "3FrSD8fdw3ndtiab45CvEQbtuV1UbGtg2KwFguAeh5Km4Jdvo41neFaicdDjhfQygsH8hAS5uM89NJjvD1Q1ZoKz",
  "key13": "3e82TU7J85T2ornt8WWv42hrpcfHo9jzVn2JEDHFMqYsk3hYMauxemQ8tWNjRzmRMTKxhkTNyAeCg4B4xyJDrkrs",
  "key14": "3EWhhfAvQPMxKodEBndcvhUkgYZHc7xxVzxsvAWSvf96vhtHpCtFgWRyzp3QvPcXFpsWmyLFuGyH1U14zBGcFQsr",
  "key15": "3sqUSQcVHtVzZAkcsLeR7P7sgi9Bgcy3sDRN4QfjV8wMJ34bSBLLD1VU1w5DK8wh5yDS5e7X8E5qyJrwevrA1uRX",
  "key16": "4EhgLfLvorrWJwwQfkncK7P7q4LRWRDA4FqugFp9QHxCbWSk8WygEbe675kwKHqd1eTkj8TvERP4QF9Kxb6dnc8v",
  "key17": "2GZDVRvxqm3Ct7uhP9P9eainzXtbwPwN8zhZ5JE1FUEgu68YoA1SqxpYiKKWvdS3HGv4287tUt1vxvrDGPZQYemX",
  "key18": "NXBEna6Wa846X9AT83LCXGgkwHKdMKa1gTXgd8khkat2k83ieTxzWLYwT5Lae3CvxYUBVPXV7815HoT8oB6CDLM",
  "key19": "YwbkKWpzsiZVZ8KTPtDGBndk9zH3amQ5wK6nTT8rjcAVsBjtk79KipwPZpLUxNjRpPEo9RSvnPb2Khajc7vNbCB",
  "key20": "HFoDtZa1E1yJ4S3cDpVoEhakTnvxR72GAZUhg8AvMiqb2LazBS6VMLPPgQG2X26zWDcjhtrDgD5HWvVPr6AcsEr",
  "key21": "5U2R7YxQCmFDNmN1tKAYzQhegUbGGQKHZPv7QXDvYe5Ben1ZxxMeoNYEgcWeWE7zdUzCkzVj3V44JvwBtJuNP3Cs",
  "key22": "2z15kWzSzmMWEg1Jm9aaAwmofoDDqpGd43AsxRDqp3M7WXnY8WiMNFZdWBqEbgkVBCLRWG4NerDEsnx6pvHz5Ztv",
  "key23": "4UyFJ6e3HYBJXk4i2BkC3cJ2rssHMx1WEcUY5ZB8w2tPrE55PohBSBbQzttqnNQDG7uf6wDf5Ym9p7qr3bjktg2K",
  "key24": "456ehdKcEjyRo2bLUCyyWPYxM4D6HzNvL8AoNtkQAqKLLsrJqK1hVGPnr2pmJfqNKEt9kwuQDsCcSMPstFYfJ6EQ",
  "key25": "5YFNRPwpW19DyZxgChkq25KXcjM4MWG4QJ2CizkSWEF8fLkzyMpobz1ddubYP1FipjhHnR9U82AYPDY74ZYsV15T",
  "key26": "5Y3wwj8ATpf6PjGPNv3Kn3d7MXM4HNe3MqfHpary9TfS3hh2RWnYsHYc11rDRMWsojoPXqbpHvkjCTxmHTzywtiB",
  "key27": "3Z5GmDxZXgYEbNHaKDjputmTaqyNHU993wGtU2wU5oGnyageUZ2zREDTauuELysZUzEVR7nUTDsxTVf3KhFR99Qk",
  "key28": "3idwaao4wPTyhi8TvaDeTyKX4TkwU7FfzCz3k9SN13E4fizmPoTHDo4tWf8bxCG4vUetfB2YbhWcjX8fEbcX98ws",
  "key29": "TikgT3J9qVyM8Bag4DHXGVkqWP1GXxcXhSc45mbPthZyq72YSo9QEtfS7rE9mxJwheBadPzRPxHRV1nsAeipTMX",
  "key30": "2NKEsHRLCiJr1iGCNDrLvr1DEadKRV9NojJe5R785eXqpPD13CXahfGte9pYRciABn6PV3NuDGYHgNz2Wcs9khVQ",
  "key31": "4wS5La4KziWBCJ8rA2Mp2R8fVnuA9v3j6PrmpafQ6zBSxmNstR37BxAUhioQMxMNdgR1sYucBQDyutDs6HAn8q1M",
  "key32": "2nRy4z2HCescF1bnkRuDWSNGQpF9pKSdneMb8p1mSFqH5HZGZNCEM31GkFdAAXweWztjNoriKWGdQ6NC8nMdcxXt",
  "key33": "4HMhwWfuWSgjtUpvHkuxi1j1MKJKUwUeesJ61uvCPw7toiyS9rCv34tADAfPsHsHXzuzh4RpKJeNZEzD1EQHWkpC",
  "key34": "5LhDJP5tqn2GZA5q1GJi2dqjUnczNSPJaUiCzv7W8s69eXngAzpqcX6uSb1TiwZrSsu1B13o5D6Csh8kHMJZMwWo",
  "key35": "4RXM7waKDj2BKL5USDgAciUM5JBQv6vSNobvT7UvTLKYCcQDYtERrCcZfNzU227w4j5hk8rtPXjo2zpG1N7KcZqE",
  "key36": "gvb2k198ufLSu4tQGdsM7WrQYr4tzbFRELMQkg4FRDiB3LDFMH7osAb1XGPXEtp4eY12bq4zSgmcz1zwv3du9mg",
  "key37": "44CU8N5m6HeVs6jFBvkAaJSQvu4Zd5kvG1aCdNszFN3PnPEKvVf6ACGpEdKjKFNX5znW1HLPGo5j6aoDayNUdJbR",
  "key38": "4Q2iRjqjsNrcL9Wnveg5VQuz2J42ipfoF5V4T5barsoVQFeUdM8RSB6LFmd2ZyFEWfqxvre4YujABqhiTaEAr6FN",
  "key39": "4gjfi1eFXQXYAuD41ug752q7bS8AKNR5PXYperM4xHs3py7qaKJz38Aen6BXEVouRPsrob3AgjL2qAyBcYacGHdE",
  "key40": "46qVq2WdKGjq2NvTSj7akQpdUTj7JfA9LeCFyJyoC9kSxFnkMAewfQzYPioPs9ify63hMByxLWssrkRBwHN9BGYn",
  "key41": "4CjDkvumyFSPQi8riTkQvifp7yvfoDmfyHuV1FqEZjsNNLjpw4cYreJVRLmSoY2VZzMnZMXHRP6ARSgAjYeRBmam",
  "key42": "s8bWf24UyBtXmLVQZZpswBtRJWaLgxXF3LVr5NBfLYZMPX4RbBoSRA2NMFBX8SLjY4upioYRTM2N3Yyqm7oY2bu",
  "key43": "3xc2oRJoXsKXfwLEnroBUWuucdUqAacVRvGxHmuVvW5RKfc6PVqrnTd38DZ5BBdnJ1C4QpGtPKfceBPp93WMF8pm",
  "key44": "24hMPXhcw2GDfGsEv8ATA5nKZ3sb3DXrksjvCxYWHMrN7dp77DowDK2y6tRELtdYpuT9iFKBfJLx2dQWUSvje5Ko",
  "key45": "2hsKBPL5EsoJ9WDGMJ4WzjKUa2nwmHHwMixj3doBSTJzsPjEMscxzoVjvGn1G7B4Bm1iCyG7nCMoXht6vU6CGBVX",
  "key46": "3NdULbJBDjhAkT9ns4nnemStSYW9X354GXJiPFNa8QNWXNbXwqkAiNgrZ1ewdiRBUTpnqaB82it61t77qLFQ53HV",
  "key47": "51Pyh6kkVEuhoyzAacKGs6eRHoogrATghmPkFPqyrhNTvFcGwE7ATPJKJ86qXyEottRY1pmgpPwwBhuJbUjWQNUB"
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
