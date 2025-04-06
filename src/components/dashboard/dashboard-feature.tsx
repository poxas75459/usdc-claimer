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
    "VrxXvN4VrzX5mHAPz3UoNTMyh5Hz1JCq9RtJTpYQwZu1YXkgGpnNyhoPYmUi7ujgTSAsDdPJoSTQPnQc9Q3mPpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rGJdY5P6XZdYaiQAxxckBFiJRTk7PFC1sdJvuwyicCfdKzLScaHGP3FfAgUqW4dHfPVGKngdFJht89WtXTBZr1E",
  "key1": "3o59HVXBmfVh7j8s4B1WvVi3F68yaeacHzFom3snUrsPYUSFDkHq5dMjFQ2HB4SaTpeA95N3rAefat9oAFiy7hph",
  "key2": "3tYjmXafUCwproqsgsSWDbgd3PdGmgjZZegjmCQgzop6tgzkXfwkfHEieVcC6MzF3cigbX3xrFCENYBw5AWiXHyn",
  "key3": "5fKgYvjifNVSpkDTMMJ7JH14uEPdwa8Ay2Z3K5sCoYjrhNw3nXu6zKpn7N1bx1dJL5ds57AbfaUYrTrFyah3GbDe",
  "key4": "5R2wazN3Z1M8gt9VrX2MkEctSVgGyyak9xamdrFycTotbywGDQmCP5vwQmEd5ghy3vPrdqhmwCSxgWpWkczz6ggF",
  "key5": "5g5CgjtpnjKdWfvgNMUhQEMVnUncBxCs44K2nF6YXmN7R8rPBE9Nxo6YZPti4a5vhKurV2WkBs6HtP2poERemHSZ",
  "key6": "63WSo24AygeFLM8Uis6ymDLzb5xTfz1SaVDKbYLzan1HxMudnGEZUyq3SWkxFqGdGCEt3pF6FYErtKGf5q7GaSCb",
  "key7": "2hYQueFEiFtBtAvx4fd8LHUymnDDV1T1WLcwu9hUFFXMnAK6xGxpraWXf2KYWU3dAWFZGYK92QxvDbcGFxcP7Txv",
  "key8": "3yz15Le4x4AJpcaZ2dnzKNP5t8XU6pppuBSJ22giURTVEnSKc6junJjoWPdDAkNYW2y9ZyEwVnNebqAd1ieEiGtp",
  "key9": "4QiEzK6T2M5vptmefEvTaauLJEPKVf3f2Fr1c6pFyQh64ADBbESsGDBVWMjfpqnVb4qcc27eT7hnA4c3RxZyJFuB",
  "key10": "ARdqjZ3i8KrJUpNhM8T8w63xHRhk3iqG2G6RtFm6dwXmq4TAKezhEUeoKi21qx78CpnxAQdFhuvDBihcso9KZ1g",
  "key11": "2moikd2tyqJvjwo5zU1ZwEXWbVxK5W66MfEhQoenVBUYcmHzV1sstFn6jBQDXBEr7p3KY3pVduFL7w81yonhvf1z",
  "key12": "5PkUki4R11gKA396girk8uejdhkBjLS3jK12tqySmxkzz4KhGVRTMN27nfcQZFHkBgAPTU6dVpL6QqfyzrUui5Tg",
  "key13": "2SMcUMLJU4vir521hip4XBpsojDM7Lbt82mDcnntYVsbQ8QRDERe67UWf82pytb2rdjsExAzht8QsL1z7hqALR7Q",
  "key14": "x98z6qzunq7Xu8BJhF8vEVz3WQHfrM86Z5GJYqfXtQY5AA2zk4kWEsebSUzQpmYuzvSd1tALTUUKjj369R4BEe8",
  "key15": "3QFrzy1wdZHZqjQj1zHGGtQg72Y8g6VrJj7xt1Rhbgjm2nFSnYVC5gogTdTAuUWGqg9EgZ2k8S2xvsyGEtahtqxG",
  "key16": "jZrCyPoWbszWQf3mbPv6uF2fsy53kFg8wFfJD9gXfiNcEfBkcBvk4vyQpExwp3CFxcLn2d8DuzmGhibt2gnAb3a",
  "key17": "34TB86gDp67yR8hBBQbGa4UcJTFtm6rNb7xz9nUrWHDGyQqEzPgc13CEshNmWMW62aWjWuVzc85pDNE2Uhp7QJix",
  "key18": "wVey5qAGV1kZ8wJprn9HNKKCMB7oD3ujbCrR3mqCjCvVfmo44y4Ubmiom4xFNKGKjqDrihnBTcLE24HqNtYZwWq",
  "key19": "4yAo7ECk78XnyFLKxY8dtaswfXkiy5VAzBBsD46ZhsQfpCn6Dxx9u9ydxvyahnFSjGPpofaDNLzQ4GhmrZBwmoRf",
  "key20": "5msw5RW5hqzCXVFZskra19hmy1n15NWvATW34ftm2We2g4RUfQ1NeL6GgvVwYS74HVYkmUvYBMv6EDE24bxTyJ6q",
  "key21": "5EPvVQU2bNkZrkHWoZNXVndS6d5mGzgo8sfLZCMNstX3LEcuvXy67qo1uYA1CFFeosHkgFdqcgtXdyqJAZU9kGFM",
  "key22": "3cM9FG3BnQ5Uru5b26mUYkK8hFmoDow1DJBPxXMAEJr1xSZ15wEtN7dxFWHdX6iwno68V6hhDwgQY9zCXM4t99my",
  "key23": "4Moz6BThL5b9zYf7LBqjiTDhoVrGXeJLxq5Ypf5BU8Dai7GmLBHxCPKHg2UYFoQC5mthXYMt8ciHX7knFwqtS8Sq",
  "key24": "3DXRA7pXMW42M29nnNTXeZKpbVEzwnM5Lnig5mc9H2DkNPhujnMauZBAksXUxLkqKQhPMEKKmkLyr4NqbsMmn8ZY",
  "key25": "AnWWGmxN8kXE1knzEGXGYfpWkgf7FjgGFYXcVy14jv1uFZXkZUaLuT7FhYRZfJjn36D2oajhDeZZ99XEoSccCh4",
  "key26": "5xXUcrc1wN2pPUGPA9buZefbqC6RSeD5iVumeYjPbbqk5CVJc2NrNpxRLEctXwdeLrB4Csa87EfhbqPUdoHqE6Ah",
  "key27": "uKQcnFR4T5EQszGZB2HHDwbxi75zQHsRHiVdBT8MFZSTL97bgRXb54stu754UJZrdXGTnc46Y6zJ3Mbfw675mwY",
  "key28": "2J173d92mLZRnGCSuAjYc4DZkcBwFWJBySr3Xsu8am65ofa4hQHu8UZ3btYir29rMC7izhpJiBzFZAFXZLXcmx5m",
  "key29": "4NDnuKKWSKKvHe8mV9SqumdW9uHpYqDksyjQCKAqCSQqkcAXp3UxQ8tK2dpWrmqwdtZroELMphGem5ci5hiy5FZ9",
  "key30": "2kNBV2nHM8WCHn37Z1JoseL3ibwkU5RsdLMjNcJMH7pQpG8vipHrH93AVr6PYChaNUuuGdfZByimG23NdkW5B1N9",
  "key31": "26dzVnNMN5qoq1M3vd7LhFjBRU9YqD2pirsVrdHSt4xRRfSY5YSF5ucVfyJVJ9Argq7SY3GH5U9UcHM8cvj21wPL",
  "key32": "5oALFnadZJkvVm7JBwXC7xrgP1RpziPpP2pXsjkp6dd4v3JMt6b3CzbTSSNXYZFWk5sggxHtPenBdQ29s3SnrRDV",
  "key33": "2YQQoehZyvBCh5cQDsXTEPvKCqf3XkWRGrv3btJdK2bXjkPSqtG2MkeUwSsEqaGVEawD9fAFVnYfkzR9HFLa21tu",
  "key34": "4kyU9ft5Px44cDiB3D8eSETC7DXmEhR6586jRYcoKtpCDJaYB4gjUMcdwGcRttB3yocf7rDmbWrymozKTqvsq4BM",
  "key35": "3yesZ3Gu2C6zTVJQ7uT7pzvMmumD2o9KPHkTqnxrVL9hX9eLcLgKHQhpvT4PJT91ozwLdRuFYUWvndiXAWzqDbxj",
  "key36": "3o8WpghAAryRhTg9d3k7P1Z7dFH9Jn3fUimswmPBoRRZJr4Z1VfAWyTAaVWnYbhok5VKSt4zELnNsYjQyX8qqaHf",
  "key37": "3cogK2iPKbqvf3pqBCaqjktBg62dXSNBA3ECc9RPasuNbMCpybSL3yHKkRAAdVrWTMcDdBjos319geihSDQaLAeJ",
  "key38": "29RCmwwGobUTG1aqnMGE85Zt3uhfH4BMYWRSguNfwnZWbieDZY4D61yEyR98hg44t9Nj6vpmdvfgt2Gd4j95evcq",
  "key39": "2upR6Xf6zVdZ6ohf8eXBJvTCVYsWF94DEbqyEMC58tCPYr15PY7or5n2WSjK2GMqtnK22XRwrDLCB1Ue4GdK6jgP",
  "key40": "21UHBHrLaHp6HBUpxzzQvUivEv6H4odRghtA6AJhsRDCoNrFBEEJjYTHz5wjGB4kevs6wi5zNuQ6ndpwo4RRawPp",
  "key41": "3smCU8ig9txgWzUNPuvTxXL5tgsWgNaU9jkd7ygoXzTA3V75bXUdbRMhb3pGKcGqEiHr9cyu3XSNFT8EttTq48Uh",
  "key42": "54RNhHQaFPNsjkanX38mXQ8rtrUVQyD3qk6S7hGhJsVQov57pKkNg8SkoE45aJnSY2LF2v8NF25u3HgcRwHavwBp",
  "key43": "4UeyENmTkfYsBmZyQXdkJrNErZkxaCRBGvmGsEgeyRdpLeZbUCJonZGR5XUtc8auugCjeEFmYGbL4uxdmzN2GrYT",
  "key44": "5feaYUVdBF7iRnyr7HavCpvnekZhUVrXcK2zKkovAMMmGinzKvSMN6ibybpyAgTLXPSgX8aXUsCMdjdrnG9xVocv",
  "key45": "2TVRtzUbMLbPz7YhjkaNaKHe8FyV7nT8WPxA24qWeKFrqjBaoC6p9gdTicNYpEFEiAhrZ1d7x5oPHYjw6i4GkuzM",
  "key46": "37LGDZuxZedU4Zq87BNamXCwuQJFRaHWtRznmR9PDUPatRiUc8NNhVLT7BD6rhzxBh6x15ok96yCPG8WKJoFowha",
  "key47": "2fWwq7dTfkaCmzK6C77gKtmHrCNuSpyXUZUG2m6TWNVfwh1Wt3isUgEFPjeMpSvBFSZ5pesTenkNtv6eqef7KLAU",
  "key48": "3K2dodQXUEsS8m4AmvJ33XL25wYfffr1dxGRiNoqdhv2pMVwMWBjrHh5PrspUpWCJCissCMZ8AXUDr48atywVxoh"
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
