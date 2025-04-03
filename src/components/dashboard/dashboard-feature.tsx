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
    "o2LDXw4FHqYsjHbFxCbyVCvf8eXYarscEEpLoCcKakkDErsSqavroKSozRVt9TKjs4phSMe4PPQy4XNQF2t9VDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54sJ4UrX98VnxZEq4yWs8D58PvSGNacWWxGPZtpRrX7R7A8bRZG77opuf5C6deSFYsX2ULWqHwoCKBFZ6ad5iJt9",
  "key1": "dcEtP8BR9s35TgLiqCewoDmLMYvfoWFFFz7LgPkxi61Z6aSLZeP9xrH7FydAj8B9NB6UWvzT3TJpqtUCMF5iopF",
  "key2": "3G7ga3FD2LSLjWr2nmANTgucCFKgr8QPt4RH61bHcgrxERo9NXbpgHK5heTMQgyh1Sfk1rUdmdwoN3fjiWG2s969",
  "key3": "rji842VRtQEbuiqMYSPbKNLdZjm2rFCwvX5ZkfmuNF7j2Z1ztu8YBVw2bS6e2fNXqJftSJqtmE8hT9oq2TikP6c",
  "key4": "496Kx5fwP7VyerDpN1qHYugLZc4PBoUwwZTscCKimvMpEy1wUjvfkz9oT8B5k9N9gV2MSDNnyWhtbhFXzuC5Lsmn",
  "key5": "248aDUBvExmE31eRucLfGyQ22zk444qiHjGQHDNndv69jrgqFXNVhuYPfCSd6UTnvGaxWDXSM2akyMTAdUHxrhNN",
  "key6": "21uTwUdBQyW225t8i86UG3eQJLhrghMTKepdDHaErjisn5X6BXewfcWPADjGxWagwuEqRze38jmvKaxj6u5ZxDrN",
  "key7": "2HE3Wftk4kyEfz8tMag1Hnqfy9PkcSPj6CTdyAhXiuMC3PZf2ELGqjJdoeMBoEzUtGUWZUFV8EQN78mE6MJbjJbC",
  "key8": "5nBNqBt9vQQT9VhjYmvFLPUYvGUUBPnngGsNPMnRhBFKKXAubPmh12cuHFceJoiZkoYWcoTfm3cwfZ14owguQd4c",
  "key9": "28ePwhCDgP6JC78d183hDyvGJf3AwRLSqzp5DbU3ATDJTpmFUFjPFrjgngXnWX3brcG31ZuHdypwzijMMDYr11Fw",
  "key10": "474TLcHnS8wnfkL6cKk3C8sou28if3as5NYUF6gUt3QKkZ3jV8XkTKV95U1UgbGeWnQhXoVpBp3BdbWbc8eAyLrH",
  "key11": "2JZ1KJrA57dedfefpHh7jEsVY2LW5G1pK6mxjXvptLjhFqyfY8b2n3xH4QtV2sXLQrKGitj2Bns8XstdBFKh4Hqw",
  "key12": "hRRhmpLT3akwua2RJxwEuD83Q9Vid4DZb9SuaWmiZh2Xz7K4RZAPq339DfuxAS2nPjewowSys62EyUr4sdmMGMK",
  "key13": "gaCamKnviHnHyQ3hzSpbnV1m5Xps727mV2EBj6ahPbmNP2Lc1HXLDND73SJiw8L1NCMa9BhUaLJsFx65jwTddrH",
  "key14": "3iFUKxbQe4ZxUuozuqo9XfLUFNMJLd5SQv2NHWxEww3mM3Gs3gKkVTSUibvDEcyUjEpAvaNXNUa4kSqN71F4rtxT",
  "key15": "2sq8ovij6WSRaNTMLBct4ubmf2AzVwZerEHeALQVT5HtJ5CnpSuVXGHB8mtSdVm6qKQwP6TnNHh6SwxZAsoX3fMk",
  "key16": "3briLsTgeQR3LzspCsmX9jd3C32uT1Hz2gCAd8K4AUMCo1QfsQyTBuMtYJP8knk2MNe6FNypvyVytkFGr88PTYwa",
  "key17": "2mwUhwR4tpt1M2Q6xiNiLV4d2iPEYmEmwkHwfuF5tGMYYcB5KaY3uK3nv27NGp5xs3m7dqwGN1c82FxeqFaF8D9Y",
  "key18": "2KafyXSodWzdUmGdnmRon1PntFsXnkm4bBBXHnzM7UXHbUKsXuN8mXGGJHixP9ucqph4Yh3AoMaYrkEcWhQ9xgru",
  "key19": "4miqpSnyuFa7STXKKqMKfwJ4HgKUa4gUE8AYNFDfFGaZRuYaAroxQuYuQC7AaCLQ34YjQ72sNVjuWRoXoSXW4tPE",
  "key20": "5fh8fPMxuzrCsAstAqf8Pr82s454U2NgdAJ5WVxaBG5hUqraK96VArkP8S3krFY5FcdY6sxWXDdijfJy78fCKNxZ",
  "key21": "5j3BH7b5rAhucv8JeqAGiNmzY3zpqAVGYnyEEJMKK2vhfUXcUHCxJRy2MUQ4Tcii7TnfYXAR3rKApczfbWDDKkUD",
  "key22": "4L2s9sPEZFpe76LppamLDt65Vz4n6yd2wWfsNo7hrLqAfh3dorDwTU9TU1g9SmALvS3ydkomUqKftZvpB39tcMUv",
  "key23": "4zoeE6QzuxyykfAYCgfMurXNhANMUVHfXGsehzyUtJ3HTFvxTuoxFf124y5SkyZxhsY1cKEiC3b3f2WkdN2bTC94",
  "key24": "1iErfYsxWWmoxt9vyY9ufKLeyN9rwfn9TytfFTd1c8SctLS3GW11XeJV7xrECY7zj7Q2q7N3Wg1yLtHwY5SV3cj",
  "key25": "3JwcBKJKA8yY5S454pn3miYX2oddi3KTwZBVDrQGdBEKS5M12aLXrj35UQhgWVqwvv55LKAkSixfct3fNmvd8Dbu",
  "key26": "59cJypmhDutXrsdg2SMs34kWbLmsuBSJPaRB6Mkmf1rfgRN6ypRn7PoYgsPLpARPFnggPN62JMWbGeuaQU8HrmDW",
  "key27": "2Kw91Z3jH3YKnCLJBzXEUTT7VVYfTdYqCzxDJQSEjHuxrd1UzMPqFnen1yZzRXnKULgYjm1qwVHHGoxy1QxtnVpd",
  "key28": "41bX1bW5XhySPDnxp4PCxK3YCsGvsCXTrsuAAf2DCY4jhhfj1ZGwE3sR87TogeXdmxsAWJaZhRaY6rhmttm2F6Bm",
  "key29": "4Vo4is92UZzGSdb1MhMycCxkWcTKiQHVZjBdbBVF6vgFDWTPDZNeswquJEeRQqPnbSnCnUcYNjvawByHe8yLe393",
  "key30": "2wqT1u27o72WqcojcJtmgw1cbUS9LEGUsNNUEL9UZyWzzDcCP8UoWe6qnSMfhUBEpP7WMf8DaNFPy5hnhcX3GQCH",
  "key31": "5yq7ZVBrHbA3ETez1WKZKZCq88fF72ye1VxJrFG5dHBkLFXQqW9Cd3BJvkDhgsyZ8fMKW94oLd5LFHYXMmwr53y8",
  "key32": "LRGLmG6bUYHuwxjknvDS7LdKNpPhXXX4DmEzF8wDviLatcfdhzUGnMcbnKV8kG1KcctEe9s821u4bgtHLP7yQDk",
  "key33": "2PEdVq7nL3SM4cfrMJAjkFMgMaSuQgQinXWwjSmjLwEo4J2CDYGhuKSQXPBtjen39WaZZTzcJaXPgLNK4d9N52Yg",
  "key34": "2qi6xHA6NJcFyH6433pH1Qwg75hzbsdvx7wTfrBSZ9iqpNQXniNEsE3zpisYGuPpEQTFgpnAHW9nQWCR75XNWvsN",
  "key35": "2YYanqs8rWcX991FnewMiuzckosd5BRyVfPkMSs95sodVyDByS2rite6i7VZjVsZJsEJAFbyPai5ZEpyiwTpivh6",
  "key36": "3ZmU25qCgxuWG5m4rQ96kJbbFtoJH1DbCz9VAivfNqm8xy8cjiaZNrR1VqYpnPgsfyomGmZoRu8paWqQQcdbASYE",
  "key37": "4M5a8mdFjhGNxfP1vxqQTgYLXGhgXxzVyTQGSh4Yt3BWqZLTdWTUJDfJvgccd28wHnmLnkC9zDt7sydZdrXdrABj",
  "key38": "5rC8iwCSWMN2tyYuKWJY4mnNCxGdHknVoi67RKTXmt7TJVy5J36z9J7JWFMpnugHpC1SqhMUyxvBwFM2UpuvYjGs",
  "key39": "r2LtGWfvrW52jBSWdXT9gSFwLMHAWoA8ZT5Nr22vHsDXqnLFaFhJ3z7w5zUo6yjvBQzNENq12yezh5Ju1iTpB7v",
  "key40": "5gFBi3sPx5VEnGfsJrMyp3w2ci6gJG1FwsvvPTEoJvRwfmuPs1mTFT3jbPsPeW9dpeNMVMK8DtNTXatRE5JXyhP2",
  "key41": "3Bj2EC7hwQVyGVghduJCiAFaUqELDsAFgiCciPx1G9JHwFsSagr6ZnC1LFGbYXuQtj2zGSEBgbQjx11SwYmyWtXk",
  "key42": "rtzFPT1fVwgcqdJ7mvPdC68udGjASNvLGQ8SrNkzjVcHqejhuA9v7giwi3zC2ydDeQiVVYj8DRW1JwM8dU55GLW",
  "key43": "2q5rzvbBT7dNw9XnQhTdGRtocrP1AKQEw5kKESDRwzC2LQNEfVyJJe5UUvdHpRhTnskCpukqfw2VKn4iWUxvyeT5",
  "key44": "2F6k9jdFADix1VxvvcM4YV36Y3xDbZCM8u5r4u3PQNDoHRx3f3KT6PytiR3MHokjycrE5WuJpFR8bhdJEiK91amY",
  "key45": "v3hqLgo85sUhxGtp9qUwCm1UaHkGHv9juEL5nNxsDeArJTSxzZVkPijEPCyuVeh76excWCA2ZMNRLFLxM3jdeZe",
  "key46": "MTa9EytSH6g6LtdPSmt43VT7DtvRVQSDa9p5ba5BfrFPy9hDN599sATzNYNaK5WNFnx9yzkzFD4pouBi2NqGvcJ"
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
