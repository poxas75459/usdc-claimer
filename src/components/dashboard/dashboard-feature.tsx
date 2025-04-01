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
    "5TwxtzbboenttNf19t34YJ6vwRzjQkHsJ2BrESMEapY8qkDbwftjVffiUBRZD7tgxAsYYo1TEnVsBq9cKgueqt5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fi2xrzmr39aVH8mtTv6bDz9fGZtQetxWwhohbEvEUdmdGsVxAFpA3ziiAo26foAXdNDra5627AvzHKe3QictWSd",
  "key1": "55hC1QC12JUeYG1JgCmXsSpzbLx79B7qaZJRxMSPKena1JynL27jSzdDvAjRHpG76RSnL9BAtkxqqid2psSdP8wH",
  "key2": "2jjF1nGQ6fmrobuaaPdf36VBB9yXz8z3Uhg4xGtrtP3gng5CM21bEC6PP54WWomZik5UEEQKSSEoRMpznVH6MG8g",
  "key3": "2mBbsYe3o4zuQnHFBDxZ8TDmtfpk6BGUfdbT2D2JmqK1scesqEu8J8aU2REbCo7eDfdEwaCVVF84QXkg3QHDJ1Pv",
  "key4": "4P6PEyYcob8ULc6e4LkZuaE9nLSEbAunpseSa6c9ai2eSYQuf6vjfg2LdXjthB6mj4NaRCooZgG7kyFY8FMV5Vc",
  "key5": "39BSUKHDFDPRYwohJftJ4WTnTWVkHMvaB6L4C9pqq8hJZ4iUfv5GwTQ68MTFHAcsQ88HitWhnGoAippnMXyW7fZF",
  "key6": "2jmrA6Hr4B16enamgBwWPXwiWFLraqeUErK7PXqTGLqCHGkvDiNJEfcGd9jc1oAvgNdVAdA5F7nPjEV7X7AbeGfv",
  "key7": "3Z7rBu2vc8EiWUr1eRPaJmx6zs9rrm5J6dfMg3gXmwbdD3QYwrF2xnzdLowgr64Kz5PUScgrpGWeJcmKqhfagPVX",
  "key8": "5Ev6HxR4KnLbpkFfEniQpG8bNN6wSrWeYQsRHvMNU4ugW7rrJCPpMfefuZu5yqN9uJHNkoM7XJiq9vGL62hvTL9G",
  "key9": "2zyjEDUPTcwKS3RpVNmB1egqGV96Nto8vkcxp6JT9f64iWiT2t5qupC7yrpAd2jyE9unpWgFWQ95MKNZ86KXzMYF",
  "key10": "4dB8BFZeGp1ThrphTX1hjiEdf2K12rpKTHEMgeoWD9xSNwzMnTuDaGFp23b5DFq1JMdQ7W7hpDhQw5t7wezrQAmK",
  "key11": "PE1kE49uG6M6MNfMxGzkcpLJai2AP5VvSh9QjLQ8T5GbBbKj7QBSpr9ZKAmCEM9qg71toXiH7q9Awpw2phQ1Dey",
  "key12": "3QXMMGWio2Y2mM6ChqbAeBudV9friC7oAcNUS5D8shHG1nMg7o6D6AbYRNf9t6EW12vVwdZ9KRYSrTnM9rcqimcF",
  "key13": "2wrLXcwbFzPfrDi2ZfUB9LCL2nMDrYSRjXay3RWJcxyPRBaDg8RCgabb7Kr9LhCU7mQ3TkKr93Gx8GQMzmEkaiiM",
  "key14": "4naiuR2hYwTFwDnHh1y4exWobY2ZtMLcoEjK3T8y8Tg8JQcTV8seW1dNRyuV383u8GfjhknQ6u7t7T3kRpzjf6ny",
  "key15": "5tfim2WhRcDbmbQFkL94tXTh3AhJxTW7qAWb8ABmRgyS8vWmqPv2zfEfbSf5p5mmQAxbDoHrXj99cQFdAYSU6TTZ",
  "key16": "3bKGmE1WdR64ML396TcP1oKsNCHmahX9VqisA6Le59dhN3pYTAZGAQNRwoX6pdL7RxK4DfE3KMtGv5wLpbPBLdbQ",
  "key17": "3TPCbycyQoxYP3spEwmKCePpj3Negx2Jp6vMPDiDuYNby7ieL3U2xtR4ZhtgAGmTXJLAw9SsH8VMtqSBWRKBcJLB",
  "key18": "K3vvtqXsjPT9chyuJgQqjydymZrg2bLUGk4GkU2quKN8RPMQ6vsxrxqMEHQHMYNcT9jncEYi8znCEyMpfvQM9Pb",
  "key19": "61rVaCYkWkp2niwT1XAU8tHXTMh97Qfeh1tuuCFkFT1oHNk5dvTwJkAP9S4wWhwnrCSAHmRKQqBiAcqgCzsLFXf",
  "key20": "61PDSgNe6ihfVsqhijCFb5CEG4AFQ8UvmaRscEtMhmy96vPWbRCNC8asVhnK9nhcqz1tuvmTmPYMczwiUaxguC4N",
  "key21": "21Sw1HjCoXYpqwrHgggqaEw3WEm74Wq9DD8MbZLcHz7WfSBaxW6zyV86A6nNJCZ5HPXbDhzCn89c43jFt84u54vC",
  "key22": "2U5xSujpbLN1nbkd5L9vkU5QqejRJhnnsJyUHqPofhXPSZm71NN4dUvCLuzLFb3S6NP2smttPQKHaq8iyAJrfgsi",
  "key23": "2mPtGXSYvFEBUJRrJhXojzMGd5oWLnBmCeniZgPN77S4YAg3MwdvQfsHkmgzKyiwcUk2oeG2S9zq12zKEs7K3se6",
  "key24": "2kMt8s5Uib96XFi6DMfmVBNgkvsyUJpBy6ipS2uG4zCesmGRtJ6m4UMTqxxRVLuCR5m8KeafJZ8p9B725MRfxXPC",
  "key25": "2NgyZmUgeULSwWXuh8CcyfgjahdVTEoXc9VrBCz8jfBeZGkz7CR7YfJYdSkPmEcgw4DprZxCCJfvWkEEzQgJgn6B",
  "key26": "8eFS9uRvjftXs5fGpPA9bPqmNMoLvyCn2FuEvBJSkVgWP9MB1SixLCXqxHef8KEvdCDrppMMu3CbSZ7XnHF9hWy",
  "key27": "2NTRwYAVgSMUkKVWwsrX91jWoZNUrtDv4HMQMmW9GN453xXfpGt6AN4h2RqXd7VYJgiM428Z3CNkCEaCV1dVF9Rt",
  "key28": "NXdKM75f5UWmy6rkAme7Yq67MxHPKrASZQeaHG6euwpenuyDQvQhYxJM8He2PtXExMZ2TPfFpLjjyv3VpPCgMLY",
  "key29": "2DauUTZfcMs7164q8SRVFb1gZqnk9ZTpKj2aEsRUrUPYhTmAKT9CdgRiLd1sETzcm7ttLPCKg698HzJVGYHd9YHg",
  "key30": "56b2V1nLZ4Fg3iW1iaWxLrUREH79m3Jx9PBcF99SDtaSpweGs4qTdA84fwtp1vb7PEqgjVuMgEgGW89KX4Cut3kt",
  "key31": "A21XvR9oZrhknUx8MEEs3GKQhyDbZs5WMEQgdLuMgUigYLc9Zf7753yEmhvRkKKD2ab3RtJ93yba2b6Q9GJoKXd",
  "key32": "8JiXMADL2LTE6jsX2f4iWfyzoQHXXwQ3AV3k5XcCcj4gyExzK1qE9PEAbYhYDftNQmKjC3TgrFn1UBuGfceqAGc",
  "key33": "5CvWkso5E2BbwvykEnxQAB2ynvwYkWWW1x3HUNCyx9PMavZfcZe9VxEQJVNDd1CW53F5oi1bH54qynneX4t5oMJr",
  "key34": "3wQ7xtBSkc36c5wTWCFqJjc3mqECpuEzK88Yvffnh9o7XHbYMvvrTDTdh5KFCFL3j2nfdh4pjB3mMcMbD4U2tEpa",
  "key35": "4muntPGxBkQfbECzpHT12FFx7a5rFTGMGck3k98vzcX27n9TL6Pqv9xBVZiJisSRGuNy7vjabyfCtJfi9CMdFpzk",
  "key36": "2aUjHbZ2a5C9jYKkRcSW3NSBg5Qm716aQtHZaakaPQKg9UvEb2Gh1MthcgUiPG8RxZ3vC1PmRSqvxh1mYpKPFnE2",
  "key37": "5JKJp6QawDS5Ahfa6Svo2JQxRY8GtL4J8hrHZebb7kikDwyWtU4M5yd28wRQeAKUpgwPNsrAXGKoRdmbSS4N8Wn5",
  "key38": "Hqvn4wQ7TeMKr1ZbiUw3pfn8FxSUqbpYck9V6iGYpX9sa9jTkbxnNDQsw4TjZwLHMxyoMFTyCByCJ7qEksK5dmE",
  "key39": "NrgQuTc2ZE36ym4cS4TrSN7uG5WbSJBtL5Gdp8TVKM131775Yz8RKnddDryAKD6peejsqbfY4CgbuNLZHZMmNUZ",
  "key40": "2W5AoHyhLsL6Xby6AiSwxqye9N1n2RBLi2bAbjK8tvH5cMLPgSEFPXquZ44GkYWxNCK5yztmiLs3cVvQC1AmweEj",
  "key41": "3Ac3KZNnJVxMrVKNkH3VBXWJhB91fGYsDoNg8Hqj4SWXir1jtMfZDFdy6HdVgc4bBg2jryghVUewAKQ8hKoQLp5H",
  "key42": "VDyHybmq4PRMn6Wx3WbTTrak6M2HpHmk5ZH4XcHC8CwuDnBbvdmhLep3GduT9hLCYkJaAfungC87FU6sBnV2UCR",
  "key43": "4Di1kAXMbHnnT9faebzGrVzM7e9s8avFgXKhdtxyjokdABQt88gaguGYVGATruqXJ6Pa72btgFHTh8ZXJZ8tX4iC",
  "key44": "4wnzvT9Hu54PtrikXdoZFzd7SpDEQD9iFEFJiDJV2qWTAMWyVf6Nw4zu1A5WPSvvLy1HHzMDMw7XaNsR2eD4LkFy",
  "key45": "3JJMbwDKRJpWq1ua8fpR7BJ1KkkYhsaXgNJnzSKid7bZex7QMTsYVfyzFeCvFFt8rb2uV1irFGXecRi8gUUPNf8e",
  "key46": "5zDKBGUTZttbkgB6NfSFK9wBgrz1hcqUCQVwMzF3ASFaZKDxjR2mvpJTFYHZTXW9CrygnGkkSacfbF3gadcCHfqX",
  "key47": "5xiy1dJtQjwqSPRb9KaQdVW9EvxZhF2EENFjCJpW4AuCGBUU6jgDyXs8THzcyuTWnoAGQ5LFR3SAWQRXEinFrqVQ"
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
