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
    "dRj2UGB1S3xiG8kxnQVpqWSS8dizpQF1QtdkkGvndDevBnajtwwNDRegdtcSfryDLDwBFm2U1BxJeyRDswgvTUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uQnQGSVZvrLZLjuFjgcMRBDAK59kkyCavFmkd5GcU9xRr8MBuebEqWSsoqyFFjWjqhiuJVWmzKy91jXb1J5cUHm",
  "key1": "44dkH9tEEUkomZWAsrvgNEwiitBjAL2twSczFggSoC4tHGn2uPqd8LDEnV6HxZMJ8uEu82rWzy5bm5EtPXuTPsBq",
  "key2": "39Mk3yQVqbSL5ijANkC6eae8Vv1vTtK4eNivqyHsLXdbPHBHygreRt9P7ncEeF9238tJetpBf6vTKsvwFD4hRxcx",
  "key3": "4jkHyBXSK6UeZiH3LqvyfGgqoanxHE25HWuNqAWnNwJ9qeuTEWkzre4RWeUqnvUZsh5kgkPwirmnNratLmd2pU59",
  "key4": "27aooFCGo6UpudwCJz6ohLUELwfYXvNDx3tccmDUzDC2Lvpx4gDbg5rYgpTfmFaHtqBK8dZG47ckmUczz6M7r1LR",
  "key5": "4xuAXePdmz21GEKu7vYDuhMYEHppAXM9q87UYy3VhrATB356c7bSHGcoPCuAehk14jkvcxXzu8VrAw9gmqHFPcy5",
  "key6": "2hvBfsrRC3W6YVyXxo5AFUAkETK7CXUWhGsTbK4jANSg5u8GLtn66wPjFUX36J9Lfc1RxKCQwsNaNr4AoaRSjZGy",
  "key7": "5uZ17wMD8RE8FTWm3YGVkVksBY9v3RZiF8RnXU8KTi1MDyCSUg5WBGiRH1ZxFKstjQvkKgdZnSpae4TJad9Amdry",
  "key8": "36rQNdZgt52SLvB555QVK1LwbqsrmUmNiRXBrQJkYSKNzwZaR8yij8R9QPSqd6RS93LxfaDeg214WbTPU9PCT1cb",
  "key9": "LLhTPJZ3nrvcN1nGPv8HfT4hFdMjDozo6CkDxDdiQiy7f5onhDjAka4DfLTCuVpZ2raj75NFsW9d6SANQKS3V8f",
  "key10": "42T6JRFdQ7cgyFNC9HkHLyQ7pdghQfn71o4DEbZHgveuLnQvdPSLLLAKh9fUH6tW7Y7K1ZiTUm4DcGYx4psMuCfH",
  "key11": "znfCFavvJr7JcuFukJ3xpYRwStJ7dfrvHQc7JkUkha9fK1yHeDe9TvX6et9HTcMqfGH9j7VQmJTp1MDuR1sJyRh",
  "key12": "5bSMPySNLk6vVWzj7QbkYemFpvRvJ9BBwvaPsfWGGG3SxXTYSqvf7AgAPLMURdRJ2BevnCXcJhMiECGKa1aoNz2z",
  "key13": "2txVaQvNQYpLLbSZnZYYFinnTjWX5z97Le418rXLXLe8cUxmrjXEguMxv6EE4PPH71fPSz1SWqMhntdtUt3dgJ47",
  "key14": "3AYEuvAp4q1MnD5G2nQn3o7qn2ve6NFBUaQ7TFdA8aB59XVbEgo964uksj8urMBn95F54Au8uwhfMEGR1PTqL61r",
  "key15": "Tjkp8Zd2R2f68JS1SXsAXWe2sdEaN9i9iRffdXJ817z95bz5Ae29mUYnx8V5mU7kzWVkARBmgocpwTzrND4wthG",
  "key16": "4oPXW1r5Wrct6bHqxcQo1ZoPGGSwL222TFTVduSxNb5E9t8StGux3CzwH7kR1VuYkx69EMXzteKxH97vtQfPycW3",
  "key17": "279iz5ukQGUGRkm8j792MM3a4HDP9iHxqBZ4ZxKmtFPnna3Zv1tchbyXBnohjsnbHbabqJviYms2Cv2eUdKbSEsA",
  "key18": "itkpw1ajKRUeuifupbsDW9hYosV6mqMEPuJ3PyXGaepzC1LH94eo8JnP39KQ55FhFi2icmWZNtRu3qcPTEdcnci",
  "key19": "4s35Ruk35nvPh85SLJGhdksaSceEyeaSCWb3iLbJrorHCrnCW4EAambYWo9c3PU73g5xWWuFNNXKtoe9nR2kAgx3",
  "key20": "64AkKDcvi9oPgdS9PGbMWj6oT49iXprzhvRmjQC2V5MRTSvqoFUspfkmmkqZZAhKFwZQ4Cs5VzG7mb7BLiFkUuPR",
  "key21": "2U95HDmXyoh8EUeCqnM5R5GsNKmbd3US93rJBbB8YdfzAJjM4sdHTFmtCibcVqCmwpZtkVhju22pf8RH4bEtN7WB",
  "key22": "44xkw6rRQQeTbNxAfUUrE1p84YnehBi5RJaxnK8CALGeZvVjKjF5QDGhYJbgLtJ8LZLhSMszPKpts2st1TnFThBL",
  "key23": "DfvLedC2De1jjzwLNJyPzoNd2yLvuJLwfRSdaT1xhmUYXfj9YV7ZFDEcXqpYcUaxE3gJF5dunoQ2SBdTbSQeDVC",
  "key24": "5nnRpXCUZ2zAi6E4i3FtQs9FT8FpFP4sCQCuKQVquYw3TLoePCLQLvKBbsG9WHf9QqJ1K1SM8b6JmHCNgFnyewXC",
  "key25": "4aDZwJeMrg4DZxpqgDfPJfe3xpKUgskjeGa2FAbGutW4WMR7dbAwfeLtupKjHydUKtcDJC6XB6HFp9uGjFSp6EBh",
  "key26": "3kwxG74giG3Z3uGGhZKdV46dcTCemLDwS25H4bSe45nToBV4YyX5jd3sUXhaW4eip95hEwuzmREYfyfbsfWZeHh9",
  "key27": "4tTQaeqD4zGPpqCPjq4dKYnKqU29L3axyec7Mq3NXfcXv3g1aUxjzNuxCo2PQ3C9nmvvBSqBhdWqwn4UqHFc916k",
  "key28": "5sxpEb1UYb6K8v2mdpxzSwvTKWf87R3PT5E6KEpEsxHqVejXcQgaA4a2JmeXrxnWARYwTSC5FUWjZ8PWs9UsskDM",
  "key29": "22c4c5B28XSsw9PGgNrcitvF3QP8EvA3GSP5YCBPZ1uYWzMQN7MB2BUmAuUQ9LBvcQF9V5KLehfvPCC1HCpU1VU7",
  "key30": "4hMEebHBEJWACQ8uJ2YoNzTCt9esg2RbV9QPXA5XrSRMyDFGoNWw54XaekkStZewEYmJX258Zm5w7GdkCAm96gTa",
  "key31": "62eYWJxgM38Xv5ozm1kjBSPRywRDY427RWxx8oQTqCk1bsyJjbxFdDBDiBRGWyJ7oYkji7PgwAHgaAZuFPijV8NE",
  "key32": "2YnatB67sWFUeCxYCY3B3EKJPxTXX1NjEr1Y2btAErUv1eBUaNnFVwF2QQGy644aX8dGuLmPre6rvEnCyCBgrcWG",
  "key33": "3yowzrB5d3bnXgra1mrbYXYx9DdmmfK5tjS6AXxgW6WiENLvdQYQAod9WGW6Zm1pDVoa7VRa4wGqTHS9nT9NASwY",
  "key34": "2qFnQnErv932o1etC58RfFN1hpSAx2EQF65srDwudVy1xvsHv2ZbVTmNno9cdjXnmgKLPaV5CJWXdWSH4JG8f5vX",
  "key35": "4LWWdC6F1XriRUGnhEUdanyuiF6bR2YcqXfXUFCx7gn65AKJqdTTfVoZLmtAj3hYA9u8fszh84uJLU1YiKZk5cZo",
  "key36": "2stM9Nf4iZCRJXaJF4J3mK4a38wyPoUkZ8GsrjGqtSs3aez5Bj5QAuPQKoWRaA94iKcGAgrJCt4mst4n5zDFXEPy",
  "key37": "4iZ3LxngLgKqXUi3rryyFEeGrCJ5rg6RQ1tQUM7ZCUWyKhct1hDuuuc2SjEtFiFyi3Lb2dJ2TpE3nfhJNJDJ2e1n",
  "key38": "26LTucVRz9URuPE23TYHAC9iBTQGs45Pvo6aLFnkUGd4K6eeLZ7JFQgESo4NsqPNidExfXmheUh1cjL6Rf8aFcLz",
  "key39": "61c8CAkxiwRVNAfDqGuG2cedvJRWP3YFeHzcTQePhJvuStAJEHVThUdQ8pzGACXMozkgjFuKCAXBYecAsBiHTSru",
  "key40": "2FWTnGb8MUcADXfXUXReDZbZ2J7vu2KXmdZ4GqSFocR1anyrvP4HbYYUfttpCKn2YhnktvxZL2bLYAEJcvydMYR5"
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
