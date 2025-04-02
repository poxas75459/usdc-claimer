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
    "3pHkVoK7JFdYnY4Zjgo6z4MociUmxzotzA2NW3TP7EH5ucduWtccijCqgo6VNHCaRAuah5mMQ8M3bcGVmCowrki7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k7WDCrYi2rVk7kUonJVi9sVwjyppNCKhyFLVa4jXNPWdhSp9nyJmVqiMrXFv6FrVFqsrfEKgocKKU9oVzv87c9X",
  "key1": "3M6ny4aab3kgybE66SSNB1nGCKzy2GCLQv8m9oBfuH7wHhbhwZgpFPSwtXZr7fpg4jBZKb9i4M6zQd6RAJRg4GrH",
  "key2": "2xaexVYAWutcKaH9XkwHhvGB5ZbgbBJUwZLg3SncPezWh9HWhBu3Hox6Zb8FG5i1Ys4mHEufQnkNizT4aKvkxuCh",
  "key3": "5tX8UypxC5JxvpmVUfuNcTJ2WKKyg58XkTSwFgDxwA5gfj39YhmkhkeX4kPGuz5pz4tcvSJvSXGaqpA2ESMR711",
  "key4": "5GgVw8iRVY4aswevWaGvJRtMSjcwGpKVeX4vDZp6Afg6snKLRcFCchzQCQknVMtuicG3zqyGt72qmUxpzvDDF4pB",
  "key5": "3DDsoRaT3XbKxXaQVdUKLcVN2KDBhm6FtHfCFMWRqLhZNJhhumF19hVAG6Tc5P4AK4pwmemejUTJrAEQAPZREZTS",
  "key6": "4Z1AhKEHPfzevJyJH4CqBHU3Tod5QMvEWjYR8qgbbsRa95AsuS8J2HhYjcpLJrzSDzmnJbwpHJQSbDM8S17Vkdk3",
  "key7": "3h6aXhRfmDMJfRhYvmzdZEMuYV665gLNnUPbrAWNYiYLosYXFCUMarfYc2dxcrdur3CsMFAFUxNxMEXgcBTXwZWV",
  "key8": "5ArHd8GevjxNoitCGqcWVePdrB6kFPu7rbQNmucpiNxkVEQBgG8xjo1y6T2QX6k2DGG4jjE49sFXL1azJVVNmyU8",
  "key9": "4CqxaupY7uXBzkaxjrPgg4md7cUoycJTjg2gS51AE6A8GxpMSp8X6kBzuY2mnL18jaQ5BDRaun1BUq1tnXo8fxkf",
  "key10": "2Bwam92f4bRG6cf4RBVoKtZpWbgYpQJBxmjTbUshu7oaqKRWTw9kdaMifGgbEue8WW8tostJSKHbNFkBYyXNwX56",
  "key11": "MyLjeTnX7ZpTNbD3oDBL88tXVxNsSFusR5cXSQ71DgLwQGDuTNCBFwHrCX9TnVKi5jDcidp4Kq17k43WuYNgdQo",
  "key12": "4vDUvMApUNBn5YP5SZT7tcURfA41QVLhJDQB89gMuYKqYyw9RGtNodbXvVmZyAHfthaoJ1t26P4gQLmLjHE9TzwN",
  "key13": "5gaftrNikMeKzK9RcrrzrCxDywmPEMiomJoDc3HKmM2b3JdoJ7nQ4527u7T2nUhWZ28dyEFxyRQdDB6BYCM2i2Hh",
  "key14": "iPgoWarHsCgwD3CMenAkbk3pf9ViVugHZg2acSF9xLDsiS6Ahms5U6JjaCeQhxRphN4NewT7pgV26DrzhJbxVwR",
  "key15": "5qGMVQMnMDrmTYmz7HPxgyZdttYMaqDc6oLMpHBQryWBCNbxKvLCafTxKUUWYVfayWeRFam7wbYrMoQEZW72jdBq",
  "key16": "2pn9ntFRQmZHu5VLgjpTDUTTsPmgPKkov5QzZMqxwNmWGCsRdt4Dd2BTUMA2c3rHqR43fR3AvAagBJKpKBG3u6Sm",
  "key17": "2LWfedRLemr6pm4PPgzwQa64sB3792Lp4vyAP4ErXPp3UZRQXuG48LQyXHPdXKPSR3Z7r4m3zQijU6Chew89eEb1",
  "key18": "2qM33pmaePM2zfGMS84D4FiWC9bWiZJ7JpQSc4wZNMuEtpqzz9qa5EYn7hpVm6AsA1ozCCkDt4rGcfwyra3HJGTc",
  "key19": "3eX4Bvba624BWBavgwCYBPhk7xMo1vtRpaWmnJZ2vjg7MBjxorcGmYgQuxjE6PrYLiigkj1ePUnjGvWtCrA1Hu5L",
  "key20": "3DabsuA7c3N9ks77uzzHQtLMYZ5RpyzA4EMg1ditKKg5Yb2BdTziPCc2qhTmZCxJD1PwTNagrMueBByFtmDnZMBr",
  "key21": "rYzJy4DoZMRoWsDSctXGXDufkSLFDm7vThrrrQHm5c3ysV4E3fgL5Cj4vxEXb4XuvqoW7meqwNMhCNMbvQEWJ1D",
  "key22": "5muf3mJG1gTwxrEHxmdHPEfUpK5qgKRAzLQGV3DaZez8uPqrQQsHGPFvY3oKFmFDdw94SMRnpvZGr6Emd8TzcADM",
  "key23": "45RuVKRd29PjDZEtoLJ6sWUr3tUU7Kd9sa8Z5bzAFdQuEjvXXP4Wd3AsrX69sow4u6FFDPmnNEyU8uTVsYHMcV2x",
  "key24": "26cqsgwarDy1SykmsNXakTdowrnQpyrLjpzfJbkTtz8dtow8yGLprnz6EmX2fuocHH8tsxxRbu2JjjNeoc3dxCqU",
  "key25": "4tsFe4qTfStoKGWmXrP5CMknb1V83H2vZgZe4SkAM8x2vdF3xXhXET6XDZpFKnYSLdfAnHsx3GnK2uirB8ww4HA9",
  "key26": "2T4KdRNRQtrunS2KjeZSgT34hiZoP861D8DqCNQNH9ZrpTfwGViaE8nRZeoSk9FMgPYNtJa7dmQdj98F9X21vhPc",
  "key27": "517JC4XpEyGtsgB11RVuyezxGseCPZsqdVge7jBR7F1UjWRmHwyDSc29g1h4BzdM5Jjgfh9gDMSz81tNEXnTNSoi",
  "key28": "UyvwCP2EKAzprQDvGVNrdp4QYSPS98zouyac8feNK6VUHw2SUyBoUWRMFEWdXp2Fh2HJJRLedo7f2XpwVeKuCUQ",
  "key29": "39MAhgQ44M2jsmJfA26rKD1NpqrYzZ87iBcebQapcXP575Vpvy6dPpVJdeWMqRras62CsADzP6eHfCRxssUpHyyF",
  "key30": "4wDav3tuzBzBqQKtuPmYkCFPkZb1SBSGUE9PoBxeKaYVZtwMQEnzHAipFpxtTq3XrtGefSoV5qgQByVvvgzDtkZL",
  "key31": "33bqubMiABJpLuJe7rETL58XFCRQ1C6k5tKtHFd7LBAQMgv83CYX5LdfPpQLCwv8PyZYnQhr4G7BTY76USFEG6Kx",
  "key32": "3ABwuRiyuUZuhdQC9iDVks5a4vFho4SVkMawZdC6d2JruMYbYjn9CGKwYgdM4ntnENk1HeSLN88AM6qvfMdiLijM",
  "key33": "22n9EzrEBHWv787EPwhp69F2f44wv7javk2siRxTdgggTndqsKteMcLonStSxULARo5PBzyt25aKdtRf11i5b5Bp"
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
