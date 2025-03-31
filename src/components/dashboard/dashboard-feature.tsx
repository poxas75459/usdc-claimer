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
    "5WV7NsEhc1teMv5BkHF1ga6eeYSgj2LzqpWQDD5vaE9jispMvocWAC7uwYts3otxJh22iHGCHXbQrkYMVGM52ZMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ArDh25nAS4zZ81x6nAQa348AikwsMciUSnMaWKT1h1ExE1sKKAUbzYtQrx9kyNZzp3RFofk3B5PzB3VGHUp9MFH",
  "key1": "2NR7otRdxe3MiRkwbEMkFx6Fd5SRwM22JnrqqKntyXGiiXiC8jGL4F6Kp5g1FqhfnRjvdHU6eSuDeErkYtrt4X9w",
  "key2": "5ALnTZ9YoW3RgJHKXbFpcoFYd8poTGZP7hcCE5JBEqRm5M7vPSuHYn5AAn7bCtg63Yebj8BBcXFzAiSKQi2b4KRM",
  "key3": "EfnrpsHALtzUqcNozgLty6V7HERg9EqYpm2bgRWaRvQGyyHVUFaRdfY9Lste9PJDNLzEmanjayqqKiEuvPNsVdg",
  "key4": "XRCVZ9kpzpvZd5q82qg6iVYvjjiKFfCH6NGXdXr1TYJTu1PS1p4b8kRuXbpiEKthQg1Y5gUcnWsu1vUABc83jPq",
  "key5": "5HPMS4VRqVQDigqJJRYnsTMAX5rPKvce8xYeeNYWUCEsQPPYtyC3CDRAmVWdUZSWHmQFcxvJ6Sau2mKGEM8x68Y4",
  "key6": "HZt5kYN3x5uA7pDyHjYmKXHfNHMQd8tCpfEi7PWcEaop4HRMofKvJn7isqWQdUGVBK65JxK5yLoBV9dndRnbjmV",
  "key7": "2dfmmLvuU8ykjWfSwqkzwWWhkA5gjJqH73StDDqnecPMRMfxumcwfWxyDhm6kRRqU93cEjPUsZ6qgrAN4v39KT95",
  "key8": "4erUW1e1PmGwmaa7oTyyg6ZdPd17G5auTw1HdUEfqAUyfgAVj11uzd1hKFUHutFzZ9RYeZFGL5xXCzYrb6W5pwzj",
  "key9": "5wJRiBNu8XhGXKTy4kkbDsJfqcyirssCUtspQGbHUsKFwYq3EH57MjH5Y8or91rgdsHWDqRZ8RPHB4mWrTtw2qg6",
  "key10": "4kDFLd5H1LxAzPotryQhQHPi1MJUx4eNPSavhoVQWb844oLN8JkvguG4bxS3gDDk95nZ8vBKVGYCTGUxC9uiuV1k",
  "key11": "TFdKbNrxSphxnnyrED9N5YQ4K2AHcCvPg1Vugj4dSU9oFoabxV8Mo11GPR7VcGwBwXz8fZZj9BCUXAK8dTH8xG6",
  "key12": "3e3KgAppzAruj6W4trZT8Lv6dzKd6Z3BokGCbhMJYiQqKiJGv1pF85dLUeEQeN9X5C9yTxYJsBsYTBrwvkyPPZ5U",
  "key13": "2uKcV7JVHeSHSmf8ZupwQ616NXPX4vtpByXtLgmar1ov41pHBTpezeYhrA1DxajT1sWHeMefFguT566rABxEdaQz",
  "key14": "249qTTeAsuBJqcBXL7NPMttg6YrD49dRQ9oPoVWX7SFNeELjMdFt8Tu6zL4dMpX1dQrFcjjWLpCqDe4ALpiAKwcN",
  "key15": "5P6ChGbc2MXGDbuSjejYH6HezEALzJV3tth6XKTt37wNnnkqAQDEnnKkj8pC9m9s31DSz45mDs8m7qeRwcGiEXhK",
  "key16": "3hQCRWLA5jKKpxFG8e7fQUFjJQoctrrFcwRg2xmJ3mXmPdqwbBnSR4Bevu83H6NE3T9tVnggNxvuxHnt6RskFK69",
  "key17": "2qNDAY9Qa2tZCxwFC5gw9QYPUEoC5pDnq4PqxPCw5baHoeerNEHZUv8fCgF4Nho2RLjvoeUC7sotFFpsMaLrQU9r",
  "key18": "ruRaeJomgVXY7SFnHYsCMWF8u49AJho3iTjG1GyfkhDCHRJSnkU9LZEfKdZAQbbAw8KM1FCsdMepgbsvMLrnrxe",
  "key19": "38f6bySePcuC1Nk3PWUgtYMTmpC6vwTMZ5nP9jggNcaHKPx3gq7GEYUxJzwhFqSqNbkHY31wtsBHVhzRgCE9Q5AT",
  "key20": "3fxrhAZqWwWGaXbyRuJq8JWX2eHowEXG3J9SsCdAbQEDniAr3LhAH1e1moAVNoVDJNpQgTWnNjJSZe1EYBJKjo89",
  "key21": "4RB5b9yakngNoYZMZfgWjzcTGZbcnGFg4HDK1wbKSjSkKXEMtNGsAC3JgrZr2asNdDK44NbvhcJFHB5Qpt1jkiZF",
  "key22": "3niNFMic1REryzt15VPRnkARLXueWvRQYfj8rNp8vxJDfoz9YhMeBH1KT3w6B6EP1EHFYsjKNKjwkm25h8AyCXUH",
  "key23": "4XTHEdj1jTEtdWrUF1sadXkz2THmCb6nPgrouv8ACaevidp8sj38eB76LuwLJE9bLTjVJrcNRohp12BTLpTxU6mu",
  "key24": "X5bxY8qVyZeKTZxs4KXKdQvjwJ1jtLMfA4z8E6EvCYu68Gp3ysS9dzAEKaLW8YkvXC5UubWLUHsUkrT4LUFMnk1",
  "key25": "3AbgA9zAizR9Ez8p3Q9hnGk4PSUVCNpNm9jcFx23hSbv61uF4zruYG2VfuBVaWLM37RzpYCAqvkpxyzuNTUZaBN8",
  "key26": "57iAwZyR23WUw8CU1wq8brpQueC2Mbc7X4ubsSZuGG9SGecjnjNzZULBhSGKMf3oiCdJUzddk3Eu1vym3ePt9UPq",
  "key27": "2jvHgM1Gvit3BhuXEo51PhkMMR8q8Nnyr9jxrMTK3hkwtWM1v8JGXdUzSarvhgqSsJfVqCQyuoZf3etJcCeZvCun",
  "key28": "4srPVXtGiic8ViwxdAQn8VrpGM1CTuZUWX42TTgk6hp81sKAhBArRyjb57HaJM9QVnZAfF31JPCSNB6pmsJwSMTw",
  "key29": "2Kxid4Cz8dQDqXrJVRZfT2WyP2cspzLGYyL2xcH61SmKW3Sd8PoYvu2jA8uT26LaqNQpVF1n31yJbKzrawzCfhFB",
  "key30": "38YSELV6QvTwWcGMM3XZLtZaTJFuDNaGDcVbmSeDWDW8G7SbjMrAf93XaVYQiyJCaoDs48bYNtT1Ge64xSB9Ta7t",
  "key31": "5uGjbgr3XJBJXS5F7uUWzZBhDNkU2AHwParVVfSr3tv53tGQCC5mGjbHgdc3ZQjePStos6GPbkntrrcinxpqqrht",
  "key32": "4ZavmmAdvSFC1Qn3qctrWKoNjJkNEYxGA3pHoUHBbK3Ccsz2BCSqjFrpZkeiriDqsvN8vNx9Xf8dkmZj1HQuNfr",
  "key33": "5ti8pLCzQUtXVQH5vtqpqyRSn5MLzDQ9wf7PSBM9DgadnPjWzZqXYi25bAvTPFb2uqPx6KaPskqJZefW8iTDczmG",
  "key34": "2nstLGqpTyF6sM6QVcVvsm237CaNzGwPHT1r66geZUGsamA8By29kQUDDp1nFhXLRDiz4q91K2v4VSAhVUwj55NA",
  "key35": "5cSmMvWn7z8RExvGPtsgD59PymkYMToM4fbLcvjwgyjh851PAxmH1ZUvWieXRRQu24yjizZQXyxetRkHTF4Cvf1M",
  "key36": "GQtu1spFGkJedEVqpAN2zxzi5YXFcU3dkfXSyeEpwXnZ7EHMKFyojArHYebTts5f9F8GvC1txArVvDqndiLbpgp",
  "key37": "49k68SaPcrR7T1VVbq1SRAVaTEtXQt9Sk1fMPDpJSwiiy1UfMocc3oTcXrE5jcLFVLNottLeGzJUjNGmBFYXs4tj"
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
