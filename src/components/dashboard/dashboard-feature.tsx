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
    "4CpUhiNCMxvNGNZ72aPmVnz96J1s5E5o6RTZDSMKfPQr5G8NzkZNwrupJ588aAThw7gLoxrkm789h4VycCodVxJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h4ms72a61xttQbp42x8SRBmUHHLj7RPyK9dfJzDsVtZxLMPCFSQxqpeJ1y4rYYXMJRuK1aii6eUtJjg9jLCrXiK",
  "key1": "59QuGy5Q2A6GUdZn2cveu2PArz1NAhbWz4z4ZaGijhruL83vmYZbPm4f5oc6CqmEe7J61yenUyzkEz97DN32nMmC",
  "key2": "3ymNNs2t9LVMuhRKb2F2r6WTdgvFUfTk7XCeQUS2bCpMFZ5ePMw57jcCAyXsrDL9dnhMZKNqcRLJ6YGci8e8bWkn",
  "key3": "4qST8mL7foZPi4EVgNYpDjcHh6Y1MfDGtPCAK4rd7p2VcDvFkzZe9KW5c7ZDsZ2CegpgFQCze9AEoCvEjRdNPpFW",
  "key4": "2LLMFPPWMDPS8qVZyJ242qUhkCcwg4yzJmsMW5F2Knuzmj6PxNudZSpKGdhCqUnhsH1KC7erdwwRuzNRdkPoijYa",
  "key5": "5HfapNoYhMZjoaSK3HV7FsXhxDKqLjySZKLBd3uFcU4m2FaxJoC2sKha1SSeKkJGbdEaKn3bvEBfKSvLp1SLNuwV",
  "key6": "5Cqhk2XT14EXPPK8PLn9MfD4RymQDE456farEnfvw5xVvnY71pxCiP9D8fPUSvnTQS6BBdJvNwxJrvKsGvBzwva4",
  "key7": "4jjJVbSgGHYgutB5hu7FgnBNPMW6vRFsVNGbemrQRP8vTVAd7ETTpZH9rbzX9dtVnBhtzGoz4ABnCgjq4vFVwcTv",
  "key8": "2brUuwBDTfd4a2VKfuACfMuEJqW57sudAejY5R13cSXCtwEkWRysLybQhxTzDbfSZahtTtLVcko8hP9QsQx4Xtrx",
  "key9": "64y5GfXxyZFGvUcqrkbcgaTaC7fbz4rEgWGDbwf4Z1aRu93eKWBUhcx9s3mNSupCDM91GqKBLcnHwBFabNcmHg4S",
  "key10": "3ETc6eHNJJbafzLEGwtewDabPLACWBDz5nh2EJw4be5mAgakX4DEKXW1wZXWQD4FfaCjGMvzTw53Lf8gx6sqsdUk",
  "key11": "4owru4e94wi4KQwpw7nSXaFSjgDe7SEX8SQfUqFLHnwHCyDBiG3aHAjXEsrHwwLKw7bDh4zE3spafSVmH2JdLsD",
  "key12": "2ZZLE3FvxZmatmrzAswWkvWwsQPwQ8FkS7BJrwFbGTSgs7AyBM7LHJ8RAAKHBx3H5onhxYe8WcmwFHVR1mcsnuy4",
  "key13": "2bqbttp5FhMyaqEpZ6xfvRDBJ1tk3MQhpW8EpFK6eXTivCUUbH33Pj8gUWKmWh4juzFzGuXVmXfFrYu6bWiXccEm",
  "key14": "2Je7YFCrLoYKqLN3jNExBErKcbaz41wZB1R5dH7nsFyP5cQMqLPHw6aQDnXQAvYAxQJ5TbEgAEL6wBG2g1zwhFZE",
  "key15": "63spRdM5Hb4F2uBqJqbvrRnUi8GRtK44vox2yoYZJjmwb9sLGS53SWxETZxAjzPiz9rGvCxNWdCRgQRAhkmQZeaL",
  "key16": "2yvB6QsWtyiP5mvrmN2hRet1maUzqPMhnmaeUs37MDc1ZR7QfHiiYd7fLXhiJ26eGtxAa1mWz7fhze5N3Ci6BkUT",
  "key17": "4AbvyXpXxRQvqoWFTywqTyrNd41ZmSQd3MMWU5tqtuBM5uPvfD58hnePDwdq73LKFjwj3TXGnp7624NYsp4Hcrkq",
  "key18": "4vB5S3fhPecc8ZxXHJrbkS5jz2PaPpEdzDHiNJnQ75qiixfzyPtYYzvNRWjz8XbW5W1xDHZ7sFHBUG8ocxxTYnp4",
  "key19": "UDgY7HkA2tsnBVNC1FJFvL5fo4Ps5fioHixexAj4TycSp1jDdTSKzFZpkYJ9gFSao166PrTDWYrNiVSUKAt7WDN",
  "key20": "3Doz2RdWcGWZ7G55oGdU3MSh9mmtvpst9xjBprmSR2tzuNKrqWxMTHW4itdYrhttEot27gCwSPJ5AoqspSgGtza8",
  "key21": "2rYCCBRbLT29g22hUC5yedjtv91zLpCntYvFT7isu2uM6bEqhLXThqfwuBBHLk5GkfMJW6zbAdYRCqHogUfMxZSh",
  "key22": "gZGwKVry2Vn3b3kfDd2218uszy5qtJqPhhUAx5qaQXJS3MUYykteXQVHN5LkGyVCGdvcBKsqv7NnoTs3TLrde5M",
  "key23": "oRnTr35Yddd2PAXMDKhQ9BAVuKZywQzLWAZPHt6sqPA5reWXjXJCZ4PGtceYAsubdRvYoHy8UQBED6udxWqY71h",
  "key24": "2KUPTe85xaVdXZd68tJQscYcxCa5QAUbaGyYqaBkfzZSAG9AbjzRbz7UP87obx74ZoC6LUzDgpgLQ3rLWeSyGktH",
  "key25": "2wjaanSLT7HYutNYyrvZqs4ex2VK4dqh8Js4L7ob3TnoH7AmaES9eTM4tJZ9bLwq241f9Z3V67AN1s8YXfmqF5YH",
  "key26": "611AYo7sDMRZ49DAnFTBsSgDjjV684HptRWWAc1nKTTrnakuqPPBaUgsmERgE3PuLBtEbmFKZ7uhHWqBQPZV4eJP",
  "key27": "5rdtUVJJBWC386HduHEq8bYLgU161S3XfzMdXuvH9TDMvjs99iXertsgQoLTefGFgz7eVz9gJFRux19nCjXSsaj",
  "key28": "3btqfjqKdNG1cQ5F5b1gZwRNyYVWgf2VSt8yarYxkiGYgcTEKmVsBFduBqZaA64WcpgPQ6wp8LRa6civTK5RtfrX",
  "key29": "hsoyzGWvh5wNJi8xfHevXD3YJyc5nCVdnRAJnHws61wcAVwGwz8GffB7sniL9aEF3koVynfyyNHXSPweTRpbwfe",
  "key30": "3Uw4aWsTvQvGBngCYU52DMJMtN5mptmDEArnLgbhXs5FoiL9ZYbXnityCBupJGmpauBCQRMpBcnvC56nQvcos7XE",
  "key31": "4o9Du9F2otTPrK3fkqgYFvkz8zHVxSDprCY1EdthvDnE3jxokxZA5aBLeBE7Ry3aVtGNbkG6esPTNWxGm39kFQLF",
  "key32": "2QAJgtt8rWZabx3WKybUQh6z6w62eLqVESzy4fUh7AT7S77TbCzypM8dg1RZb5DxbDrQokSc2sB67dLBWyUhyjTK",
  "key33": "4ZGfVQYbyo9GTyEiK8wBWySsJrboYxAynNzsndVs5aqJxtDW77myra5D4VMoYPjqmUZ9DgyuXaDk259NPgNXfbS9",
  "key34": "4KQ4entqyfMZWocbUvQki4LNxa4NSHzraLgVtABxqenbUx4aYhc2J1YJx1a2gBwvvy4qDrTyzvgGcxvnotgFccv8",
  "key35": "4AWkK5sPwGRecbdFRYY6aTjoAinmJ8SU9YxwVgBVg2UnLBzCeJs2pFbESQCUaUemxHRJrLxEYL493qonZTyxBuRn",
  "key36": "5sRJp9VtxVrDvtHSRheSQPgCg1iqGNTuLJcBzobx4ZfRRyJnb5AWJVibf1seudFW6ZCKfqGYYLZ9v8eGVmuURJoi",
  "key37": "2wSfQfqzurWUq9rtGLLKZ9w3SbDv6o1thtFYz3u9LpVUrig8jpNomNqsqVZQAXwCDivsfpxZzeAniQEZdSHNL18k",
  "key38": "5Le5VtFP5XiQpuDSzefxCFjT3Wo2q6CpqW9AwUJEdicBwtYZaC5RLUXY6nihX8qwY9HEMRgab6Jkh5mCUun5HrBP",
  "key39": "28LQEHyhAR4dWifZZbgaM1q9oLF7AkUbmHRYR6XrjPBNqFLiEQwzH1ibbishTuu3h3n76yteTXEGX3nqS8X83Y5t",
  "key40": "5qUBqcdytz2aL5uM9NisiKTYQ6Up2KzvejRCtcFcqGcnUnpykh5VmKCsquNL1s9wS1NyyrawBk1suJU7SgTWmaeD",
  "key41": "5ouuawZc1Q5fNAPuLVqfsaQE5hUNgkzvD53W9MrNkP3GsrcL2AxMdP7fnNUVaTJtTbxd2GvoxhCQUFZW9Rs6XAXa",
  "key42": "4i6PdRtJWi5poCdQePDEeHaT392yJ5TE6HMSpPCq3prvj7uweke7jHA6E7teHamqJ3tRtWmA5yqXeScnngf6NMBz",
  "key43": "2iMQu349cveXg1Q9DbsRhP4Joeousun79P1zGphyG2hUGNmtsxVUANE3NzdU9fuBnCZNuThRqF5KNShKVCuJeU5Y",
  "key44": "38xE7bRukhBnuhZ33msaHWVxpxKYWmHunN2vi4gxXahZGTMG89AwFCYgWcr7Au9fkMWiENcSuBYVTKXRqmrryZsD",
  "key45": "2cxZy91XHTJsbMt8vdibuFbNYb265BscJChKUcqvj8uA3jfamVMWKQ8vBJd2SE9VgGUNXQEtgeMd3iPbmjevYSuq",
  "key46": "66kqXUELYGgYQVoFJ5LtyRceAfyWe9Nh9mPUZaxSdnKodFBwgQi3zRvPHppSnEZeAE6cfovvQyrgoAb4iq9J6gFG",
  "key47": "2t8PzuVoHQJBvpSc2ywVoX9yh3u94mpkCKVno5XWmfgyjw1Wqq5pEWgrgMp8PwKxtefefWNJ6KiCtcuMaNsBoP71",
  "key48": "4AxF3rToYBPuPH2spLHjzmsPZLUvUKNFFswvqZYsDEcpSvL57gkzPKkFKC4sGidmSdoKmTfjrWuJhzFxmwBt9szx",
  "key49": "3TdEUqrVwRqJbUe2C1QZSR9FwpKWCC7BAYEXWgZz2XKE6Gn5xjehGCgGSpBZZgmJQM3KC752Q1PF3vn1jgsm9us7"
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
