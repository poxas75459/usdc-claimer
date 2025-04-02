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
    "52dNH8NMLyWeYe7U6tgDcSpHqXy77ynpeuajUzAqATNhtsEfdteHY1MBU4zEHKQzoWLtx3M8hf1UYU1eEnUX1WrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54GDpLP6PK5rbKkA6gFaw1cvyXXuJLc5MQLYLvdqc1kYPCAfHq2iLEsXWLFv6zJSyGwfipFqXKBAtybLUzZKYS8i",
  "key1": "51ctMmRaYyotnY9PWCMSn6zfhoao66HZLBvc1snZzse42LftLv6as7dkf8TiQtiMexDNFo54huhDsLncbZmLs2dU",
  "key2": "2TnvGRpk7tUnstQHpGZUwNQbpF4T8GMpTXqC1ELYLm219EEsj4YXk6mmLseGUp8gpUkAM6X8i62zNWVThYZokB3f",
  "key3": "5gtz1sjCnz9DtFD3LZgpDmDeXbpgKi7JaVgwFbJqbmf7ZMtx6o4dC4zP9T4V9DW2tkESSm2uBai79jxoXsoucxLz",
  "key4": "5pMNDPFGiBM4yifaoRB226hBUDyW3gbz1iZJ6LoFiSumSj5v8cDGJpmHR3NSi4koTBEm7TkbEfMbevcvyAHA7d7X",
  "key5": "3JGempgEo3ct6dtCjFtbbDM3FEqMTaPKnUcVhB9h7itK8zSUrSnSMJhn7nUeGF1aGorzqBfpxr58aJk6267Dt527",
  "key6": "5nk5EWUzat2UWqGqKB5rqz8nAwCQfJJEA5FbjdLksxJ6jZR5TeF2bnmE5VAMwsJfPQVGvPSgCouGqX6rPukBXsje",
  "key7": "MYUUekEsuUb28TarEB4R9Ga1KJyZwS3HDNFwbgxFABoh3n14nVmFrT4zJsSL2JhAhvci66rmG3vF5Gfyxmu2G9b",
  "key8": "28eTbXBMmMqsLJ5SpaX5Hp7RvTgAKsvxG49Dpe8dZUSjfq92S6vFYBUD3QqsA12a9zc4nrJ5RissTzSgtcsSYGDE",
  "key9": "avYvLExxcwFQgTCNnMhX7fS2mVhyy8TVbqPmFHQxACsS46hT9YGErpHzcGgKzWJEJTeAVtQj9CJaAN6eBNqxnoU",
  "key10": "5eiy58RRR7yPueV5x9HUuhJquYgbvkHw41fgq9WSaCCzsdPfXkcuNs1SC2GazZwZFauLdq9Nhk6gAQTwHXng4tgm",
  "key11": "3CoRt6xKevfF9e6qX2j6mn6w32e5pycukiGzZnpdDdBapsaFWC2vtFLqhhAvW8yT6kcof4FriopCPy1X4zga8b9b",
  "key12": "56mY29ingSLGuCaVtghbsJf8tcBkSjBBaeUYjCxUc17hzVh5tsLnzfDnK8BFpzRUSA2irfazn3obx8jET5kGQabX",
  "key13": "3EdbMooSTgYVVrXJmHVKAxxCtxwh4g6EjR5BrHD9zzyiVNyP66jfWkMKJjZDB4oRPxJkmiALojHk7PgJxAx6Zvc5",
  "key14": "V7r1mYakhqi2262n7UiezU2UQwkxhZm7oKdvB9xvzzvL9WAQSVVfFMMwnNKw39nJgTzYcSdhhWcR5XjasjU9Qzi",
  "key15": "3qcHqgGCzRofi9wkJ1TgZwUoAyYGZGB1t6QQ7vtbUqhT51T2ayFGV5oTyCLxqDiB43tDfa1Wr3abDbymTA5Rxhss",
  "key16": "HyJWHVJvudf9JyPqNzKb55iDrs58Xp1WLwCJdPmGf8wLsLK33DmbuaTn7LHnLYwstWSNzd3SQBmDQ4L4Uz3fH7z",
  "key17": "RZETCscJqghJj8cnFia8B25D9w8PaLZaJkbmQ2wQJQhN5NDP4bDD6Ju6MH3K8PhTxiFsRUnaBe5FnUmU9YNsjxD",
  "key18": "2JEdjoxMfKPoYUcaLXuYs7JiSQHu6ZGPm5H2iZaZ591XaqBCBDGWkQ4TQVGrzpphSjLh8p6Se6mCfqgKo8PxWCZj",
  "key19": "23cGksbuiybCjnTAKYDGW8FNdndZDuU9FFd46Jo3gZPFAy9Zqr4NNHjakCc5UBGZwEzVe7Vg1efBRtoHxwc3VnYm",
  "key20": "4E2j6rr9eGdrvewi6BEf7KUzchE3CRq7sPmEszzKt638QU6Yy6ugLeYsad4ro5rBWciFaKRug3tgAeeYGSDvzDFQ",
  "key21": "5xRDbarVYkyWLmumPNkicHKLwn4mNEnePu4aQwJYRsdx8wwQXB8kmVbk1S9njfQoESWhHRzTtVri1EjXaubAnUxG",
  "key22": "msRB7qDUvS39getC5KZFZJKrwcSg9zCjJv66xk628mG8GZWxZQGr5iApmqCn154L7udXAjQadfa9LxTwRpieei6",
  "key23": "46FUnNrShX8rDgsgJjmB69Uqis5Kt3GRraEuMNssX5kXmMJR8kUn4boLctoRRteqwQDeSVg9N4juxWGE2tx224gB",
  "key24": "fTcqHfPQH9ywr6qpuNZKtvChQiFYVpBpc24iFxdYws1kmWf4HPv9vEdwUyeGURGLUHWnFgcNvY4hjL9Et2xD6JF",
  "key25": "2ALg9qNTDQyZMZP4bGW5SxyoDgLM21qmZKNoCLxhTkP5AkLKw7v5vhT19vT5vCf3LmMkqdx8N6ktD4kcSU3soNhB",
  "key26": "49qSk79a2W3C4iFUqVcHujf2Ny3iTKfySM1wtUb7YS9MysNEreHbPB1kPZg62YmWqsoMw1pX2qouwDunzrWus55b",
  "key27": "4ZXHhUjCzioFQpiWZcRtorELN3oPFFa8k9unHDnVsoonmZeV7MT91wb4xu7NBkzC2nXMQWhGYRqFdDz1sXRE4dbA",
  "key28": "52deqEsJJwz5NSy6tbbJyGSMCF89sttAFgzxD29VDy4Hh2gPTbMF3kbXDE1jrEruTPFZjMj39FYiTDLsii48u5oF",
  "key29": "3oN9bb7mj91efw4soGaz7ijZRKU1WMRGaoxDNubzZXPPzut3V8aDPsx2YQYKztD4HkYHh37ieauM2H17JL151EtA",
  "key30": "4ehBuaFvgP4SGEYmuBTUodx1dBx2yMb6fSUCtiViF46kgRBHATQg4SEkEjHe9fBsELJNyDrSswB5eaiWekCBXN55",
  "key31": "3jYZx3GWnvqws8MgX9y1Czfw67PTZ6bvNap52DaueABz9P2f8mEcEjsPaXjUPa19VzfXS3rUCQyWd2YDdT5SRvn7",
  "key32": "5fxaPb2w7UPzchNozdu6JM6U4J2KKbxJvmXVZfQom2SnJddZgKsPQCzmZrVBi2QyENiLWDNmt54GmkUti3TF75GC",
  "key33": "5QjF3Lp56Cdo11QiMr52VzLWTLV3GrQLQj4aPFTieTjxbX453nr35hLbumuY7qrcd2Bnv8XDpxy5qjSvi8zddetm",
  "key34": "4NU16TM885YS3kHS3Qsot1NKDwbimPt6MUAMciSLe81AEFoyzPAC7c9WfFLcceyrS2bdGQexhJMcjeqBpCuNq3Gs",
  "key35": "64cB6XatDs51VtL5hdUS17k3RG9EwDk2muoyKcjWhPXCSNDXBy7HbCwW4ULzrtnu9uDn6pNT3G9d4TAi5pevCL64",
  "key36": "5uGDeGbMvJVaGLgU7zLNUNjtUGyktBvLEYqnoUAYtenozHN7gUeKVD1AiqYWWhzDEAra8QxHdiAh8mSHTvjbanLP",
  "key37": "61LFmLYzs2bCtgVwR8iuM7shzXyRoQWzkYfjGRd3BvVF2g8p61Dq7xRhvQ5cMq6PRPc6SWTbjxARMrCzXNr9iQXN",
  "key38": "o3DFCfqQduWkgMsT3bavo4TSjSupvojh8Fh69yqm1839ERDumh1Xro8TLZ76pBtP8aGszMFYZsDVH4tiPWZ1BXz",
  "key39": "5JQD4Y3KFUyo7D6N3ZxRcXhDH1g754sdY7HirKXmRBBpZmGi9HQC3H2GewkJBDknNZpshvEzbiYxNZWCwWoTZKwt",
  "key40": "5k6bnDaJdpKH4UrVK8voAWzAMzEnpuC5G1WS83Jai1vdtR6uUdH1GDt1XsxQnPYDHNd4coJmkZpGHXyVjpMuUW67",
  "key41": "5nzScJkH1W1bb5igUcyGejbefN1C9GDL6N4P3c5KfhUqy1k29WoDHRGxsXLmkxvgBu2cg5rGF2FJvqk3NvTtv8oH",
  "key42": "fSQb7wdWGCfEvoapCzn8VMKBuTiSdWwmcc8QHgMvn2cYMgKHNENcKWhKnCAGxVffZCNPrbqEiaJu1tMz6CUZ6Qc",
  "key43": "4f1p19pA7xL5sjAAtnirnEEmCRXDeyFquu6hw2bgpuXHSJfcQiKyjfg9ti5HxDYefBm93ZtX9qsNQfLe2k58xQaj"
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
