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
    "4rP4rESAjHaSnXqqTtHoZGfKs3bTUh7CEcrfFhGbt2XXdYhCanpaVuXWGCyMBdeXvk8oKWWPdZrKxXGA8wpcEejd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JPX8wpbh9KRfAH9mem9rr1qnW2pQ79WCQwpZ3dujEHP9cg6gbv2mv6THtv4Hd9B5GRvseWyaFY5zD9PTUcQ3CHK",
  "key1": "aQGAMD4yLVFRcmRAu1A3K8fhfg44JgMRdvdN8MxuAC6ZtpkfZeLa9TNexHgnkY1ZuPD5nZWfdFgcz2KqXSGNGfU",
  "key2": "4ejCzwYAsw92S87EnTwi2sK78VXJyAhf9pEi6dpjexFUcmvGtRMiKVXhXjhnub6hqNKaaY4bNjTSkXFbjLNTQLAc",
  "key3": "3g3BGWvPeJRkQSroAadvWb6KNFv2cywhUbSPPA2bTTpKfSACygZzpbwX7uS6ttjrMiNjL4XgwGSeBhtySUZ6cAZ7",
  "key4": "4qGKXsgo1jc8RcEQt9wnzA161wfC3Zy6xaxMXiWWfaqJ6Q6NxZfycL5duBsvmeA23K5aTuaoDy4kHKWGcbAfHvB",
  "key5": "tq26XG1bkRqGQpoXjrdBoSBDiKQwzBum6JvRysGv6yRC2gUuXiP4tpoGTgePLUWb9iozNcASh5CiHerM9J98D2y",
  "key6": "hfbHHGZqWoFq1sv3mFRBMqVPKML6EuvXoeCkX8zWgRRHjGNGTL5N9CfAcbX6kZHmUQPAcsgZfTsVh1j1NnEBtoZ",
  "key7": "4xcweYMYQUjZPkrSifpxSREXZ8nndzqxY7quo4j7xEH365Rq2QFuJPyPwHZxaW7K57Pwh9njSwj6mxBUfV6ZmJhY",
  "key8": "4iXpJHNFHobhK1cFvFgZskM2HzPB2xZdkCsUjswstqJfcvuhHAtC9MgDy5XLJJSky6gciu7pEQ7Y4W9rbunpuSSE",
  "key9": "26ngVdsM5dm77XFa8MDUq4g7QAkHAQCDJaTtsEZEUVS5vX6m2R3sjGNJYuM5DM4ttTcvvpxW3897nbNvT629SY5h",
  "key10": "3WfzNRXXMTLYRYpErNuXH7EMHcSQx91pZYGhsFdxQ8BF6qGJWsMKU72STKDJ4vTWWfqAUMS53ALBawLv2gnzBfBi",
  "key11": "3YCUhxsWDgmmPZAsj1XQMzvbVHgwWGEVFpYGVzgh34q7wwcbPXwL9PRaFkMFrKJNmCmss9VMpgXgUkDH9VtPJHpZ",
  "key12": "22Wh66kEZVE1pjG81yQGwLnF8e6X7QdQsoV6whkfMQVcfKic1qj3TYHS1jDQb9Aa6MrQt7xfCTrUYWLs1B4KHCuV",
  "key13": "4zrX7hB42wAVbyHoMDEwC37XBW27Vvj2BfeB6wqgeaxHRuNz7KMCo86favoxEkWDsnLTgRqqkm85keRcgEb3thw",
  "key14": "2PCstNRLwmfp6dpWUoHcEa78ZeC4xAaNTcu4CKmBLPpkpP1jeTcXrhyhUVMzdRWVHKnCmLHXc8pE9zgujGYRkxeF",
  "key15": "4HSKJVFizxVhzcPHj4CxMxbJBV2MC9myfWYL5tmyey3tzjDcyvf55hUcPgM8Mw3sntMxYq6e7S6irZunt6uQJGp7",
  "key16": "5MK7Nk24SKa8HNre6GTwjVZKd9DZNVWbCkBx2Zzpa8KvX6Mj7MhZaK3ScMPokYYze9hy3GnuZv16yVeJVJg5Yu2z",
  "key17": "2viRX44PW8GvzCFcUdvniUtFg9u6gPzF7Y4FZuJ3oQ1NmKpg8xVZtyQTdJL3i9Wj6FNjh2gvVd2NUH3zYBzVWz6Z",
  "key18": "2CR9aWAmzCAq8V4SxJdx7Nvn8xvVjHrFNHMEWvKG9qyJ2H9wwBgxHCEKsGDFxVAZmkrc9czMePg6Q3cLLnRKfiAF",
  "key19": "4Z4oipVNi19H5xsybaUCGTxo21TvqHYbxG8FyrWmpmJgEwiAQLm3LtQprYW6Yr9evz6vCHupfehEeDAEpw1j55Bk",
  "key20": "5aGVQRNC9qhQ87fV1RQkizrPCvnr8kGWDqJqDSZpqQViWATrQmW8hsxemUmoYrsuyvSEEDAbdGBiqA7HYhsoQrGw",
  "key21": "5gYr78nxRvP73c2rGqrMDMCx5ympgC2evMFap5BK7qmkvKYC9wQmNCShei2sbwXzCiRTeV8kud1m6YwkAuvGbVkA",
  "key22": "44x9jq4uhjJPgHhXv95cpWPYZrT7PceshTV5RtctNWEBiP4DRJHTQEcwER6ULR32ju4cZXbYcTyH1zba1h9njPpi",
  "key23": "2SWRj3Vaz4hAcXZq5jXpzMJu9Ku8Tdu89BeVtcfCpB6fhrdKQbSyia4mLnNXmXuF2f4V6ZCCjWNA2aCs3UaLCbhA",
  "key24": "5eNBdrTgS5YHRuJS7oHPX7F8JmynFoCFFirVi8wLcuGJTm13aVchF5SSUxHA6w2NJ5mCwpdcfXrserfswY9TmPhf",
  "key25": "2tochnnhSVHBtFWDy7gAapk7SdKVyZBXJHbuoZFGT8Z3Dpf1XeHwsVCcT9E9c2TbC92fszueewGFAcow4L1Tu87c",
  "key26": "YXVt3tHHGhakVjZ5m2JY5Q7a5BRc9cKf1yyVstwkghgKkPisThCjr23SS3tDQFWAS5mQzq6i7zVR85aiofjxwPb",
  "key27": "3FNHPKYCPNxPAcAk1d6RiFCNd7ai6WNe6w5Y7h5yharY4aUGQmeeg8hgEAQGtN3WcArNzKP4S3HCRQqxTWFvwmyJ",
  "key28": "58DBY9b3C56XYWwAyohyT4mjaPV471aTHF5QnSiks1PWTLpWJeXms8nHk68U8ThxmumMDrzkYcGjmD19vwdysq2J",
  "key29": "3ZGzoYST3EL3Lm5G5mMUBV45u17BVeCByN4rMg7fCYARkRTj61VUd4ocy6E5Qfjb8GmywziCr8psBUaj2GHrvbi8",
  "key30": "4cT8gosvWPRfgpu3bu6Vo7rmvDLLMTXEpdrdh735zzNCeeFLJqRAaRfisvPMMjEtUt3QVhJ4NNm6ccRwzkZcWbR1",
  "key31": "4BgqDqZyjYyPgy4myd1kGpXfEAYDyrTnZwYdaW5hvdbwyvcPyxuNcJh8ztuF9rKxYTz4XqtLHX8wPannWyK8yiwJ",
  "key32": "4c5FWhMub8ewrCm8J5aYPzGB9KFRfMaMXKUPtbRWp7sZ8jZZicTy3rSoneaJFXFWV7KWhAUWJRBqFfj8we2kY4J8",
  "key33": "NPsSQgSoSaTsGKunfSLAdKNFyVjkbRjx8GZuZUxxZXbo149VWNVTVQDoQ9Es1uxCatv3XSfHUxUHgakBvB9AaTf",
  "key34": "3TZf4Y2444Wgt1kRHLht9pu2BVosHsbCL3E2PoHkNoVruhDgbUeY8DPKWGP6heFGkZMiRdrA2L4E1iCrpzMGduAT",
  "key35": "MFBKsRBAm4xuMmBd9hVKDhWTwEdFBZLh7PosemGfkLEjvpSYLjSbj5ugHnbsEunFCxKuHRhq4NjCdDaWKv8paxq",
  "key36": "5gibWYckoRC8uVxtk83EmWJmvTXWnvSbG53fvAkXByA9guymdaaVnpvASHWubWiCyhBeY6TBUuJbyCe54NgCh4PC",
  "key37": "Reg3CqrkxkYhV6SYeMSm2L9MvfR5C6eHwZQ1Fsqysbc19rneHHYZyXEz8mQDpQphc4AJe6jmUjoBXNsik3AFxZF",
  "key38": "4aJBkxW6wM2GGZ84vN8dp3TQuvDJi8WaqFhk7VJM4nyVjJZwv3kXjFckYmpRebNtw9Vv1h4QFxDz8ff6KLFXQCQZ"
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
