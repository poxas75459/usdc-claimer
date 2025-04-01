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
    "4udnMZUqfDcdxgwzSdZzM3zM8pjRacy3bD7QxBWULUtLitgCCpmanNuvsouisihCe24aQwGGZGgyfss29PHy7FQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BExvEk3XeyhHQtuFVUyw88hd1RvN2nr6n78XbMN5fMBZuvMUeKsSNPDa24T2X4LM5xjCbiLwBqDZsYAYEQFE3gy",
  "key1": "2yiSq1HhPbZGC45p9hSqV5Fj3oSvtdh6qkkP7MN6tjkJwuojjPg8WZ7iDtp7kfgNDqq2rdGMPnxBySp1hRwJNJdG",
  "key2": "67MPkjMYTGuC4JpT789qNWgunvu1kzpa3XW3wnrp2CA5EHPtmBzxJPkob6KUEGxpznDnb3vx2WWynNCvnprzSwR1",
  "key3": "3N4PAR7tYPSTHVQB4iDiLM5uXt4fN34k63WTktVHeBKQjUD2vqfjJw4ipVb5HaKo7PL4ARXBMmFGceaKTL3AjQiS",
  "key4": "31D4nF4Pb7peZHSniknxDZcYzD8J3xVAojdNHLftzjsJED3xKw4EgsuNQsSGVyzhwfVq2zM1HExoygbmsGo41obS",
  "key5": "22XitZk2yDAQrK9AWH6z5de9HKxp6xG2FBzwzHGi7iCCMYmGaTH4ge8jyfSQLUxa3zz2cBSWboyT59ajcXmfgiys",
  "key6": "5Vp8ZdRnSHGEhdpTubAFpkBackm2q2AD8iFfA9h8S6dcUTffy42hitS7h1KX3UffXMYACuzbcdhVmXqaXrhUsg2b",
  "key7": "4sbbb2548UY1q57UDBsEuP2EPDaPvsp9EVrLazMH21rrdjFUTNYME76rq2Ex51ufYEL1v8aniZYNxLGWypMNX5Sh",
  "key8": "27AynFWi1DTpGLWRQte4SmpAWa2pz6AT8FzsrbCxR5KkYXqHQHEHYSbXum9DrysfJvZL4YqfTnRvGNJkroRqYzWs",
  "key9": "2ZG4MgSvoCwC55Q4fjPEpGc4fqMvtkDFc4ozJMa4A2fDbWQmXftzN795NKgwtJY8UhHwtwjhKVGzdXv1Ce8ebhew",
  "key10": "2DtqYgbyhKtpVfmkF3qRBavMv8QaAudLn9qYyKan9LcpshQKp4epp8HPXnHuhQha1FFsa8Eg5fxJyjKNx2YKHYy4",
  "key11": "3WDRy4EcgfvjV97kJppotbriG7MVGuhz89dPLa54tX7Xiyv6jMo1YnyaDzrc5daCTbjotwLgryYVAgHJeixSK7iC",
  "key12": "4HbK3FYJpZWqPpNCtcnFuTCHXJSAQcGK1VhJoVRYJrhTQF1w63kkyormpsExnvqZXa2ZXs9NpVigvZxHdp4j8Mns",
  "key13": "3GvJTGCxW9gZYZJQ1rd93Fusx9fALFX8wjvimt5h32eFT5E7AYHRbtGkvEjunYxf43xsZSY9b3pHbYyGRsqNW2d6",
  "key14": "2qCWzqGnaA1qCpw1G8MEmfio6DE5NUXytvv1HtKBRMvALyZnMMWAHZxD1UfVbYAsz4swAsCC6emWKYFft2RUfrFs",
  "key15": "3rF9VVf47JSFjZLxEaVgFKcHQo7sbL8ZtZHyJTPsJmyjsoZggRV8P29FswXamwHZq5XggBRyNgFA5vA8jZ87kR7M",
  "key16": "27jmEF4yRAYWYLvzXKHttDVZU7CsawKSbsZevyfzrpMGkh5omyYTYRXQJRcMXZcGGZTUWnCpLjiBgfhM8eQA194X",
  "key17": "3nFPF9rMQ7RNATty5Cj7X6Tt9SjM7Bze7RJuQ22ZWA7d7nHPd5h3LTCX3KytYYH1H2ixiMFsXBAnTdrpBC573Cy",
  "key18": "5GLHJc755p6jSQReMXEnJUwcY2eR2iUfqWoc6Y2NTA7dH4Q48YAdUw8nWP3dhjvR2S2NDhNtaYMhepYfGh3vXsqU",
  "key19": "23NYC9vtZh2Hv8yVJ3YF5faVaibszNaAvYzYXZSWpHjHyL6bYGJP9qkxBQSUmFXA53fMoMUGJLrPX2tuRUCtjATN",
  "key20": "7x97i6ar3aUc1A6ngefBNdFjFpaNRhXYh13zXuM4pbDoy96Jh3GdjwLt7SKpe2NUUrnVr7Tvupm4czvweMf8k27",
  "key21": "5N8ZPFg1Q6pUp3K2NBZNSzyyAAXjpanVgqca394crKVcwVLkjyW5wyi4HSgz7srTg81wvppc7v5mNmr26TB7hN5J",
  "key22": "2sRuqQwAaAcuprghM3hf5zh16oQsJiB1hpXgTEE9pi1jhi9r3njTeRikKYh5qRjpNq6WaJDkjeSZS3r7Fg1dNaeg",
  "key23": "4ZzcWkDxbsH2p9ka1G9L8v63hCPevXq646QQA4mTp7bWyqyY8tGUH5pUMcZeNMjR4nZzXBQH3oJqpBjLzyPLBAyp",
  "key24": "3F3z2UBFLJ77BepsrrGmPTWtHuCNWbkbn4HsiNZDqdLVbSajAa35Jh65mBtF8nTEaXtPtjzjuw74vaaqdfNgMpyj",
  "key25": "42wMKRYkYPxyQDeqUkeaBgYVWjvjmYsLpmfV9NJBQsdfqMjNVuPCeJriguGQt1ALcHHLgMfgC3EKHZ2EkVDEjkhX",
  "key26": "25v3a38fU6qgDYy1NzWZbM8ajBk1QZdVL8KJKz9HZUcqszMKD44W8rpN8uvhbyF9RryuVWegUTDnJFoEJTSkZyR9",
  "key27": "3e9v14oyhs84w7mv76xgpvfLScvcPMrCpZJiZrqug8zNMgBcN13EQDChihwzpSYF4mzkGcMnFJBzP2yNzQ9Gi9MK",
  "key28": "vnAUKbkkCEJ9Yz657VRiibFrqeYbDQ5Kx1Xe37PArcKQ4cjFHHCpzNVJdPp7Lekfeuw1dgy8mUgHjiBQRNztVtE",
  "key29": "2BC25fuJB596s2LvkUJ6uk6Hwi8jBhjKxEriK248QUxydV63kUnse4JCkBC9FzJ5ebc96Uji8jrWAgx7iHdcLFKt",
  "key30": "2BuNgnY9r5gZEpb7J9mgPzL58jtRn4CzkbVKCMNPzDJJQaxadSYAUdmJK5UxHzPCea4BzgVhqptSah8fJKACviva",
  "key31": "2zJ74wHACNEcr59q8N8A1PT22SyJZe3JSrDw8TmMj9r9H3NyrQL1zhvMZhVZmUKwLXqk36Bk5dtdA8rgNU73Sh1e",
  "key32": "5rKuQ4iTo1boDag9BoRpxDgHF1GKU1DRef4Dt3joYSHwPuUMFvaXBT5TSkoU73KJWTbAvHpdKyeNkEKJTQvFWYXb",
  "key33": "26WYyrGabc95dAnqL1dnQ9m8g167ZtdbEaK5ywcbD9EvVCt3zRaXD9FX3322eCfvFkhPkk4dwgRAkSe1pVQcvR8x",
  "key34": "3VevUukqEz1BrJZC6XgdubenTRH192KJDULxFyUEGccH3hxo8vVwc3pxN6ZLRAA2vaZGPf2NnWgfpJ9EJHpQRnTe",
  "key35": "3enmdb1odtWemzruMdNqbNN2RWQmWmkQrvupnDYTDk8zMTTSELZXQgZftQXgYRYJm9wt7Qesipz8QpvXY3qpS83o",
  "key36": "2nhgXqu8pBqYsuthf1rzKzLHEdso69miCVBMW5aRPiTw9skyMR3Y8VQrcLM7uS3WxjMzt3zbBY6tnxMfZMF54JRB",
  "key37": "jrE2Yt7xcobXq29Li9YCzawTWijCU7NsdwuWZHjKbyXRcaowdw7bdyYDwKj1svcVg8N2AJjWcRs5yHyDiyHmvGT",
  "key38": "5W8GHBxG31qHiV51ntJhqHaTXeDNwrK9BNZKccz1mEPaumGdZWdGn4K8mmxEf4LJD6P4x2UZ3xpM3natkUFgq6AE",
  "key39": "22LsUaCMo56eSNkVd667Zgg45SNWuMMRD76auTcB8TE8DHikVdzWEhyDQjF86fS2rsP2aC9aYjAjzy6VXm5jwyqF",
  "key40": "2qDipW21u2i26Ad12m6cj7Kvjvy6qt87h3nFDbGsCKBn3BECUAcbEGPKnLWuWwMKiuvpS2ZuM1E8bWR7QAJYzMvk",
  "key41": "3qR9VGYNeW5sYChHzjgbKyRgUh4JCYAZPdcBouMEF1YsMe4pDbTEAr992Vdw9Q61CAvzKBkDnsoRsbc4VPaWCfBP",
  "key42": "5rDZxks7ewwRsf29AUsqN4Pf4E5qEUzJSGmp2idvnQmRGLXVi9bSwPhktnzGArKgF8ojpvoUa8dSRwkmhWKva21q",
  "key43": "iXVKcHeeY29WJg62bqrk4MBiq3nkT16rTqyfnhT46jupWPG4Ciyai6buiP33GmPW6SLe7Us6zv7CULnmb7M4X65",
  "key44": "nrpMRSAtLkKgEBeTVJHfza56vpXyCe2bb1PtBXKKCtkWRybJBP6xhu2AG6MjFQLStEAgePSTRrV24nFvtqpnAP6"
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
