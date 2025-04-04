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
    "gWGKMH2FQARmfgdKgGjRZKuDfA51QdBx3B2hXuRBmS4ZZyQ1SLqw1kfpr4UamZhATK1oJuaW2jzgSAEBVn88e9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eAaQawgZHZVYYtv3dHfbPZc2qTXeb2J2VSrmwhzszDpVNuYiZL4boURF2aFCpdHsb5ao9nYcuyqPT4gAMw66MVt",
  "key1": "4e7yrGunMaKhjaR25mPfaQQXeGewzbokoAqVqR1krTsdsyMMS4pgaTJHod6FjoR7AxBYiuaWibMttoCabiFfZ2Ws",
  "key2": "4zv56ZJCwSaUpdRhxrSKF3rutYk9PMyCiRv1tvMHFDjYpsNBncmdqsT5ugsFRRpUifgg2uiAgs1kLUC8Wgf3fsyt",
  "key3": "E9onv7oni8cXAGzHukVVBgzHxDfYasY3sNLJ2dj6sAaCnFoFQ4JLbSbyjmB7LM4KJrXBiDNhdYdaD8xgEFdFrHK",
  "key4": "uwYQshyreKsCsHKmwYkCvWWdyAmWVfnMkav6xk5Lj11L2BsrEhm8RcuVaMADouaqr1PNAT3RH61AqkVfYGxE4Y2",
  "key5": "65u5GBC5DLTzKXeLF6LYW9arf1rs2uAUCtPbk6NePxWhvQBYVKHfvQ5MKUarVXDCGjinTP66VcFQRJqBjzVt78je",
  "key6": "59s5KEbRXePs75RDeNBDENio6ciB2CDkq23dvipqS9KfDX9nfSyCbH67kieS7onfzWoTn7EPVfTgdkdcPcesjxGS",
  "key7": "2mAYqQ832p1comeuJksGjs4ZP945CYg8rLudsxnrxcgAmvhw7AUe4rFdHoiW7AC9axYD5wuX6iFa7V5iedQ5vkBD",
  "key8": "58yPeHi5FTQh2J86ZaprByhNeTut3U3BxLL83NVSSJ5hoqF6U1341MuHarzy2L51m2mm76FYAEWydUgubp3ZaV3s",
  "key9": "3gD8Lu3LpPhDW7TTVht5FaSENa9w775yrcRZU6ca4ymaKr2oYN2GbnXaMKSXtLqE1Jkv99R6sR1K7kPja8AUhqxL",
  "key10": "4cBG1BJ2EGTdZgqmtf1pRxMAgYxpHRnTYjxYMKWqkJAW4NLMUbiwNFjXj8MyaKgVdffbKhjo53JgDdaNkKHRWcc3",
  "key11": "5ox5YEAhQywUUedygtDWDR7ix1QxGvdD266gqEcEwMNidWM6TnX76Ui4Qbb7ZQdKx5rcz6rTVTzbdzBXtgU9w4wZ",
  "key12": "2oNzWnhubeDEtRkMQcV1pN5x6HLtVh847fCMMYWuM6vfjCP6VxEDnydjCRkPJQtedYf6QV3GPHW6mZ1my6YpbtYW",
  "key13": "51Gh2oRxbUSL8xCLamM5JZgMS8uAVT1NUSCW25wQczmBPMj2k3aqmvWimzJCg8FufFg5eau7DFDMRp3J4ucpjPd8",
  "key14": "3QJVZCcynsV6WbSv4WvnaiLdJ9FrfyfjaDqUAU5oHosTkyUVhRVm74AhAA1FUN6KjavG5GpjJAGdyWh21m3WQHLq",
  "key15": "5x5rz5iPQHEpTsiyCSw7fGXF6DV9mH8qjmgH9iSVrrd129mAMB6QcQFGvTMVH8HhgVzKJw2CCgvwoc3mpfmpgCjZ",
  "key16": "2s8S1WP3jdmN5rLBcneumQErG2bsvviQq9hEVW9GcByDqeYyQ9qWQj2hVjqFr1m3FWofXuS326vUWnRDoGJ51bFS",
  "key17": "2rTtkqfEKj3jDraBPq2qutsbh9vZN9SsKVANupH4zcGsmz8y8Tjy2S5yXqVeswfCw5PJNwNi7T9PYA6p4gN7YEYx",
  "key18": "5WMsvmw7wapwawzPG976XEEupwkbsvjCLCBgUvUpufVo8iSSQN9ZQ2u4E3zzwv7AdBB89AA8CU4ffcQkDqjMtfXY",
  "key19": "3R6pRC24DArdM3QT26fHu78pGDNfCab3ED1j9VTBZFSUtmDsSzsnbCZUV5wyuYmpnN8fLWZwF9cu9cwEVdAhdN5Z",
  "key20": "DoFfYboJvYcRaxjSYr21Q3tYsTF36jXufc3jPgzPLw2pXw5qGe5NjC4VXRsk6DS8nUE6JEgz1ttoQtoMFLvsNX8",
  "key21": "3MCyMzxzi4Pr96P7147tSkQd5nEktjnMPzhTLhaLYFcwVwd4eyz5oHRiZQa4SmA8VqwS5j1hBw8z8y8keU8bfHLd",
  "key22": "4tzWdEn9EMDuxfpkLJ7qRqJMNyAcss9QWNgc1pZDb56nAJV3hjKWNDAx4dNH94Awm8fUBPQBwF8c9ywiXFvRqsU8",
  "key23": "VmAybvVoqxQ1iXScYNjhH3euaCBXJbkf2F5nCRoA6BZmRpvwGcW6ouazk8oynqdwuC8XtRQ4p4js8Eg6Rpx415Y",
  "key24": "28Z3mods7Ng5RBoRiDd6yX7tzL5xiyiWMdAMUihHTXzCpmorDWZFh6r1jy2xN1zurgMQU8oUC3pX5PLZov7ie7n4",
  "key25": "3dwNE2vPDZFW8UitZuXBNpFQwMrP9QBvnGWcKDEKZnK5vYqfUeuxbhk5C4ETSJZ4Apo5tL25HhNAFsv9ZpbeCx6Y",
  "key26": "4LK36eHBuKfi537UT19D4y7Ey5wYfSH5AhoGcsdTZ8t9JiHEvhMuy2vbbdUFajt8e9EwSQLZmR3UFzmoA1YUqUvP",
  "key27": "6464AYFZx8CxUk6G5tzUDS7q2w1eSCVesYsncoFByW8anxSt8CKTBYReCADuHQqGbEDDR6EZMcGNEA5fnhi5E7gF",
  "key28": "iHhGMbY3sfSSUEoxnZCgzRzvfQP6pa2jhBCB9QFSa2nU8v7iUzw6cj2oPy8M3YBr8ec98933pviJM7No2of5Pec",
  "key29": "3v56VxsAs2B4gVgAPKVSDLBeFQgGfju6buW1PnTaV7Tfx5Nm6f3LvBykNP4MNTeHfHnuoV2Lc9svuomC8H8meHXF",
  "key30": "4Z5ZAoF24vtQyMrB9QQAZ3kdVL6YFv23LhUFiQuFCwbRHphRtHs9p2P5Ppqm8W5M9V6xcffAaqRoxnRJd5ftafFX",
  "key31": "rEFCKxfnrx65K71HE69cH74aba75P7Ezk4WhWFB3FRM7pQfG9FsyEP2hxBx5Vfqxb2RMz7knHbgSJarJ4qQRhJA",
  "key32": "YB8wKben6mhspGNmtJB8sWtEjcA2GeF5gLEaN8XtFg1EdBYhP5Sw6fiQ45bP5uUXGpZ2PDqudduZvGWAmj4fnte",
  "key33": "jTQorjMxfvqm1S1Xh4ViUMPBntpmmAjCjupb4tiMCojQQGr5bDiGMgrUZDE8KTGYeWmUMffDZesYYwRBZrGgiyv"
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
