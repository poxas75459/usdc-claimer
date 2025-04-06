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
    "5FRSFT3KGSf5dcX1oENg2BpyjdVveSr7Ef3oTQpoLytMmxBgQznh6pcXSqUj79or4BP2csSkRwXHmeG65g4v411s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23SdYjbVHBZk8WQh7RWzxrhUVKqtkCr7ePMSArvBGCkujDyS4yMnApxvmNSYubjJMhqt4A7jLRoexrLYc1o8y5Fb",
  "key1": "26sbihP8Y7KUfmZ3yJAZu1wJ6vARkp3o99otc246F5shDdWrhtCbTKKd8U8UfDwJGJrqXB8UaGWCNNejN38H6xTL",
  "key2": "4VAQsfhqKfAToA7d5nwf89CzMa4AJ8myT6yUXHY8mxkwCZ47DSyVyJLKekGxNWx3wZhU2eM9rMdfNwUXoLkCvnZN",
  "key3": "3jKg7ipBhHMwms8xCdvTRFNzvjkMqWnurakqQedEu2JqedQrCj81kWvbNftnJvywSyUgoMvVE8VRN6LT6u1Zngoj",
  "key4": "67eXJEAuKF3JCiQRYRY8EEydibhouPZMg63qgQgDscJXU2L2ZdLNxrRWGJGqoVBhKxEeezM1uQ9pzDmrqJudxWBp",
  "key5": "wZWSRP72gAZeKLhTqBwzDMUuWCLJn79mqK4Y2CmuwrexSDexUTpJSpFKhMvqS8AV65ja9QsD9hnJftpUhQkEEhz",
  "key6": "4TPGUHx6SL91BSBK4bM632htxPvF4ZvKqhqSs3CtxqB6Q4vwtYH6gemXUC1gLx9uZJ2YRHGywJoM58xrZKrxazAx",
  "key7": "wFfpSjQfjZsGZ263ubdn2uvNvawTVZGPNNVU9Zjovyv8NQNRwxbsyHXqJcM9cpVABz97WZbX54KrBtJoY8Gmg7r",
  "key8": "5o9kQdnnoK7fi2LzUrEC9uMRXcFwNMRk15S43AaxWe8PHw3L2YHhKp6Y1sofD5okzRJG8TWDQh9MMjqbo65H5dDp",
  "key9": "3rYoz2dh7DUYwc5i3hKG9XPwFqzEMKTCrZNPzx56PUSkvSMfoEFTA5s9JqfCn6t6NBXBe2z18J28myXP3eAmwmmX",
  "key10": "RRUsdTUmE4Xf38WHvg6w4hY4oWHDT3j8W1iNiFzPX8xUT9XwpAZauCELA7ZfDNA21C9F3PbY2yZ3zo4ZYg868oD",
  "key11": "3iTFccMzCgjbRN9mkvbbczM7Hoi4yMPMvzb7TUVyKbxmpxanEz1QqFvcGdDYffqibqNkUo8US9NjQG7ACo4y7Dkn",
  "key12": "2PDPNvAQnRRnLNTTuiAcE2rVRWuszL9ajkYAujXhrqe5uFVzPLW5PxKGeGrzciR9HKzredjD5LNZhapkqE5Zes7Z",
  "key13": "Mhb7FVN7ddYWjdBHiAuG6d71M775KRdJDiM3Hqoq6gX9ZgvcKuaKTR2DDbLMCT6hEjMfcisRYXRAR4an56QAE7u",
  "key14": "4N1wTPgcz9XZGHnZx53hphgpA4C4UX3N37FKrZKpWv7LrRMdzkoXPUsHJNfqpGSKg1aYrk19HengjEdb4t82huvo",
  "key15": "2JGujkbeosscn3kRoRwDDHZKPitvKPLFAE8YcRpXgZwh4HCBkurxKvKy8SHNzVAsZbqpZa3feXGUgpytnqhxxhmW",
  "key16": "5hxvGsKrd2d6PVHVQ25yCDB8fdpVcVfMGg5bXsZQ2FdBhwqQeHLKBMpcbfq4pEK8Z1Dt7WWBxqACJ4ydvMpKPKBF",
  "key17": "27aNWYQ4HEjyRSVfDn6UryGZMqDS1GWku2w9KFMwqZyoiN5mCBTWNY8c6hsqWkote1Tj1xGDiy9TShiZYe1P5MVx",
  "key18": "3zoQ6GY27iGSUsWSdUFy5N4ZBmeczajtgAWmm3S7G9AbWk4oz3gJV1gPuZhvedgAuRf8vmmE7kFedap8BQfLgGuq",
  "key19": "284uo3akswnZiFXfSqZv4nEeDnR838aZTeXoTVjVZCu5Z2R6tMaHADguNSDprKMKJEzfsLfnQrfyZZNvJTJqbLrQ",
  "key20": "5yEnx246aiiMAC6TVVnVHBN7QxWikJGWBhmk9sXEX6He7RwvojM1JSMPzKX6aodt1spcYAe2zkutRmUEuttM6Zhy",
  "key21": "3v6miLDXKhD2vyNjFuTMJAZLKmPU1go7xUYvbfmkiNNpHMGQZKknasRh3sNcprKbyPFJMbi9CRMwk98SvS7onrdr",
  "key22": "4X9kCAxGy3UKSnh778hTeBCcghkQUXwGyrsZU2UV9R6v9UYts1SPmBYECHMrUgCVSJGfvDpZz8Muce1t92H829JL",
  "key23": "2V6e29XFwbb5RsLF4qa6FgbKDwjfdmXoEFckmWje8gMzSCSHnXNmnpqfJe5Pvw48L9u5Dij8A4aR1kCeHf45sBAj",
  "key24": "5s4Y4G7pE69H9dw7QTwoQ8c77jPY7FKYghRRwidvw4YDVjELE3cSMfJWK4RQjLVB6FRVJK4tazd7vWJkpCbEnmxf",
  "key25": "3NpxxRZfSk2xLPWNP2r8JUBtdxywcoUni9nbTBtL3M2W9vyxXrWEe1uGf9MgEEu6Z7hwQcyJk7NNuS7tK9aTTdGh",
  "key26": "4bgxKs1AJF3B7QwaQDMQQkXhWwhxKTUHmxG3eaVtnZHo6xXWC45NsQoAjXLMhonRxKfK61iAh7wqbxMbs8zuN9cr",
  "key27": "2ndmQoowTxbExyfEa3FhWrMMqB6KtVa7NSBRGv1ubBok6xgBism8FyrAaHVp6GoTCUsHuANj4BtiCtftRnHNctBt",
  "key28": "jXd26HcBHHP5Zqk4rjX9Tv1oGLW2CEWS3BQd38Hz8cfTEYKLHYwty5xDfgVN1eNoPrHHRyMrSALARaj1TdjZ9up",
  "key29": "UktiAG4X8Vgo1USkR3f1dv24yKsPaP2HxmQbpGeu7uoMBqTzV8P5cAdK7hFf55pYA394iqgU7xZE3nDcrxx5Nd2",
  "key30": "3hfyNvqbXf965JYH87Nvj4SwbPjnp6n2oQYtH6YhdkrayHjBAk4jAWBX1yXjAmX2bKTvo4eYdwHSNg242aUBfe2p",
  "key31": "3c3ijp9cJ4v324JXyXeBRQBdMmoE9B9wX93aZivm7YikThdZzsJfRGS4DvyMK9pw8aSczmE474TS4vU8eThVGNcR",
  "key32": "4YGr46oiwaWo4GER6vTEm5gUM37U8WoiFr8J3oJ4XFm7LKREpWHLibCXHyrErw323fG4pHNAHc8GqM2eb6MrpWyu",
  "key33": "uq4LneFHUJchYp5eh2XGxaHabzkrWcaEuJy1oV6Z9u9GPsvWtczdhW6AfuhyxyYm6PMiABdZ5UxfNGC1GC9yjW7",
  "key34": "3cHJ1kV6oowpRQsop7dyooKUt7gpkDCHaL258A3JeKkQ49csYHwz4geWG5MPvPTMn9vXgwL5Cay2G4gQpTiTRKsP",
  "key35": "x9J1fQQXKvzzvMBLAuXR9UVHAGy2m7GV53braP4UMUpmZDSGwNMWWvERB6jXfncrC6yUDeVqThK2B9wbYvp8XWr",
  "key36": "3Uw6gxyh6wz7oRMcTBe9vdXjBTviDtqrrEX7BuLcjri8N98xcaubkjPg3xToCsArUhdVAVjf4XH6eaeFMGPtGCst",
  "key37": "3wY4j5zNzmNdR5CMZrh7YG7N78t37378J82kJkerH4g5P6n873DMviaDMtkjXaBRu6S9Kd1XtWeHwE6cHHCU1bmj",
  "key38": "wwY8QD8JJMdLfYstXLjCJHggHjergYspQ1scXVomi6jAQmHZz7qJCNDcyAbBgPx5PMHJoALaBLMiyChu1fAJYBN",
  "key39": "43xwvNGgRc86ALE8GoQd6BBsX6mJDonVUKHo8Q6WpupGET7aS2VaL4YJah3unHfXUVFJXUDZ16KHZozMaH1fZUpK",
  "key40": "Af1xozj7Mmzfdj23PA8WtYtXHdii5d2r8zFjuR6qdF4vc3fh1jDgm2pnaURkLJUuCauFgdempfn7fnmkAr78Jtt",
  "key41": "3FS75MduBpbQERGc359NuxJR8DhhrMvWQXZQLkWBUM8SjqiumJ9BEJ9p8ACCoeoz6QNH4yibaQEHL4B8KHJcUr3W",
  "key42": "4kwibUoFPGpYrTiXfC7aNuQuQHqU7XQH6a9dFAgwe12MDuqfSgF3Tc9LajoQXL7hWAjLAYcRAcLeACZpK5tZ8GCF",
  "key43": "4sks53MMjjYw5PNPVX44DXLSJtjUpXqd9i3MgQB8KA559CyDeW5hwvaAWxpm6PXwUorqoChA7xPJwQzEhYj2T16S",
  "key44": "3RTEE7s2pCucWzRZV9x6Sb8wQDSfm6jii1hBN1vVsHWhKBcemtQ2xhiZML2h57fLLbbex6vXFn4zfThtUjWQAwLj",
  "key45": "46BkrSgZShEcFPT38ABkq4XkBSEKMjLqihEBjyJBZ8GzGuuAwXoUeqfLd7KcUsZq4A3Va6ob4t8xhvNGGe7h9WuD",
  "key46": "3SXXH3yDGRSoA8XuqMW1rEMwmXJvridVfMQHYh5Tt2b3ZjmptxwqCtAfrh6uUEbAJSLMha9XCHKdhAvtfuXfnrA3",
  "key47": "HubfguZ7ho7ygoaZr7cBfkQEwT9eL31mv4yaSP7bL8aVz7rXbk3MoDc9Ds4NsL9uahxfh8g5NjKDPrhjjz1UieR",
  "key48": "hpXGBGx3pdxQaxbmeqeuEGq16w6WeWcwnR2VLKzqpokGt2W2mmFuEXBdWB5rM1vL6RhsqbmmuaVvN9P9HU41d8c",
  "key49": "62TvpQ8iNoC8VuaP1HsNWBRHugtDsfBsaiSKkQUQ4TqdUtJj1kU9LRe8A2W53zg15dEzN6ApBvTfAAdUCX9PDeKd"
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
