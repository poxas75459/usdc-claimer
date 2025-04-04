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
    "FKaUDR7MouiFF8nuQ79iqzuDnDNtdcjdm19sVVd4MizbdYPqVUiacJp5nFLzJuUnXAUVCCT441reNc1ZgQmmFNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cLrDE7P3gQhoJtBXf9LKJu5tRrQY6UeYXWBmW7rmCSRrLTtYNuVUKhvMrhvNQQe9pHbkugyANsaLAFtLock5qHV",
  "key1": "65yPYkndE2GX1suwRG4aBJSqpM96EpHR3uTEpWJN5uxWF2V99JV8WKrj96Gihdas7Ax2oEdkAmKRizdHpEyqzG8M",
  "key2": "2AXK6X94JZZ264ap8kvNXjXZe42CkJDE3X22T99XAiKLqAPb8NzmtsLL5ztZS8KY4fcTGeE6wGHwEFGsLAdUxvxn",
  "key3": "zsV26BcHXRT39b16QqiEWk3kEauo3CXRUrZahDSVaDWQqv1cK6y5Nssb615SJBaeGEVB3M4Nb8ac7nP97aUiVBA",
  "key4": "5reEUC6UtXWjKiQqQ6LfP9cGdEhqbKGhWkDd9oXqzZ3f5YMAXAFDZnC7QHMsquFVe49zywQ2o3jYT8LPtAntrrwM",
  "key5": "THwSzEjwtt9EGLxUJvfpxgYKR8HYqW97yx5HDvMATcQkCnVTHtjnSFnAEoVp5RbT889vpYqGmb1W6VQH2WhQ1tw",
  "key6": "5MjLe5ZLMhT8XkRuvbKpzAw46TRnPGd23Th6HbvNY8UvgeZ9H7csg85JoyFuWSr8vLHBbjKrj6D9bCtuA5DGJFGu",
  "key7": "4XTS4w9TucLidsU4RqoYtBhno8dBESZ5DTUjGez3wg78zqQpC7funZzwh327wZhG8KA6gGtmhRrvQMYw5g5ARjYp",
  "key8": "38cgnjp2pbyfVxbTKBQ5KBbbfv3agyxLnagN8x3TMizHnGwZU3Tq6UbJaUDFPkdUhDKZEmtYM9NLLArGpb2HDsbS",
  "key9": "2bocQEtZ1aMafZgv4u4MD2CsyxA6yU5sod2ZmB2KYVT4kXe1Zy97mA4Z2Hr8iAYU31sN8dU1nRNe6aKPgGoeoZGE",
  "key10": "2ztzh7LYVA6unfxgDsgVxnynUDPeJp3EkF7GiPUb6DK8W32U33Mvk9nG24n4KgE1Kd6ooBEJ6y8nU7GGmbqupKUm",
  "key11": "2o5mhrusZzWaatbWbp18nSRqvAukWEAXtutskbfbfTt7HFNMnW78Sqfm5F4FWLX8w4mbkpLnhsUm1c1nFqm5waR7",
  "key12": "38RRjpDD4bYvSQ7dc6NM5nYjegi7E5ZiZrS8FPigw1tEV25fQugpz2dGqitA18CgJRVQcNrG4BY53UJgwC6HaRAr",
  "key13": "nzDU31UQbGEHfjVsuyTetiGQQe8wjysbgZ8zz6DmTix2xvE5Z9FNjFcstxEBB8QksxV7spMAokUDakKoqeU6uwX",
  "key14": "2a4bkozxDztJMQ5cX8MvKawfaWtLzTQh1JUnbHGwVHUqxNhXqRFkSsjjn5WbcDMLUUnfn62b8ACP7KXLSnYwsJbG",
  "key15": "a1XbGBVCw1yDHMZSJgbgnemmxB7vUd8shwR8jBukJDZW47Au6yq9Vs3JFKakD4J19HKy5eqpadu9kM9BVwV5HzR",
  "key16": "41TFzaMT6qNoWn8h6ghDCiasmM6cPoEjTfZHYadYys1ZLWM9CzMcdTTAdUZ1KuYVjBDWAJGquE2hVCJMygpN1z4g",
  "key17": "3zoKJv3G4uctYt1biq5FaNmyfxKoustGbdg6Kau21Q9gkjfFK7FbVmi77Zxf4F9yPKCzGksBGrxxkaS1G91Smzy8",
  "key18": "5hcJgm3LR4srSYoDPUjrHXAB3fWpHpj3EHTfS2e3Hcvc7UVhiVfn6BPkUspU7HEQky4sMzsys1uXZ8Cd3C5gJvgH",
  "key19": "brt2dc54PPCReYBWVo41TwQeZdhNZ9FsZKTZGAcGqEyn6HF3ekAwbsd8XJ69nQzJSWUT133ydiXhcxRQm9rJyyB",
  "key20": "fYsZ5H6fEjSfuzf9KZDLsSPaCfBmdw5FYcqMhFS86RkHfv93cjnYZgLokzJv27s8NvWvmxikaVGpSXF9ZHzqr2u",
  "key21": "276TMfmp6zU4CjCbLaxxQ3dH4gCgMFgFosHue1x7WsWyCjTd2pcw1zGsWvbQLFfpGvt2bWgpDWTTbfaDWA1U8PqP",
  "key22": "3awjayAkwmYqCHTmrA5oXp1dL8JcXkAcrhJQocamq1rNPbNPdAJsi29eRgvmDccxBRRrejkgfEsZZprfkyuZpXsb",
  "key23": "4BeXq8dRJceUZV81Vyjictq4XN8DXJmn6HSTcKv38SxN9BcAUTKMnjPLArYFnw2PUTY1pPfC4ejW9GLRjvQoYVFF",
  "key24": "kz45Wd8CLCt4VqwzYh68w8GRP5ZB3hJX3PCad2sKPAxdwfA5r5HK98QDXu8abv16WjeZVo1QVBewGkpGh5vur7d",
  "key25": "4sVaqtYjAWHfeLJC1pKxPjaE2NHrrM4TeUBdouwLjp6PjcAfmEcPyQEvKbq6SdmWFiwudrKG1uHoMJgXbz1dZjqu",
  "key26": "a4s9pAfkv8p548NuvFtTZZ9sdFpXWFdg6jNDtSJssqJ848yy6wxcCz6KLbeThdmwfUNGKFWGZyaVTQeQGPLTHLG",
  "key27": "4yD34ZpvpvjTjRcKuSuhcf1tqFF8ow5qEEXbsFRmmwesPBTZzRem3yNPmdKp3AKrKum2ehz9J5YmLfFx3BCeo5tV",
  "key28": "5refdYyjHvCKMxXQdG6cnpKNdsNpzd6qkLGr1q8F1mac8eom1GegUSGeo6jCbw8Hv9xxM3jiPJGVh2coDzjfaFXW",
  "key29": "2NoBwB5HFUFAudwuyXU9ha7ueqze2mfYaBi5R6XNDrgUdEmp7ypPSY8EaoXDdSjJubSvTubTSciRF3V2GrDoAEXL",
  "key30": "4n1Tq8FjEXUHUNLGzwWzac9gBByHhch2meAivbVHecnxzy3bzJxd6nJrg5njpqqssPhQvFqo4XWQ9MQwEbm6BEUm",
  "key31": "5St8wy1pP9QqZcb4B9iUiXqEvENwPnkpn87BqJbAkJR5bf7an9mVoHcC6zpXHM26vmTrCxHxsq4Aiz2aDeQx8tfh",
  "key32": "8sQAVuoWVGcDpdd8rzffGTfSCiifY9gxu42CMSdHZkkAgNmtHhSXXQZ5wYT7YXFGRWyFBtaFPN58qutArkGb465",
  "key33": "2w9xw1vR17rF7yK7viZAZfwLf3T3UPQrrGTMmqN8LWUYk4uaYCYYaBJVX5BhKPpZHvMNawo3iS6PQWUk6cVCuqSP",
  "key34": "5so9sYo6yfx6GGTAx2X8yZHo4GcjzWP3G6TMgaN2vgvuBQMLHy2srhBXwASF86AS8VWvFQofAcBcc6zcArj2DqFd",
  "key35": "2H6krr23w3RxxfEd1mKnH49a8MdopjxFyM6mb75XSR3obiUqYHUqxFGpX1Epa8eXLz8JubvHU2Kjhsat6DTGwhef",
  "key36": "2jr8BU25UZTPokeeAGXpoGZXCSukB7tExVjDkBk3kGmMdGKeF9KkN19MPHJA27zve9HAsPBxpHf8Jr8g5qhwwo2d",
  "key37": "662RDtQVm7ShT992wexntUhi3W9RtBkcC1sqYPxVSDgBZP3MWtfdFvWg7oG6KRvskaPuF53MN3jMpsXvmHoWPExv",
  "key38": "4LLcDpsPtz9KtKyrAfxFfFy6vpxxYqSGf3mRedWfnXKRHeaJ2ztjVZmkow1hFfgHrmuBArMkj1kguRasZASuZvw7",
  "key39": "NKkNRv3qwYtpqA1hWHQg75euTMBUDSMTMuJWDUjMpMXJKwPvKHPfg9RyGYG9H2Kmz7rTE6iT6RVrgBpbADFewWV",
  "key40": "5vGPJGRoyViEt3hfuBK21qBUHRj9SAdTNjUKTLgHvZWbDdwiDCTfAbxPisktewzYKLfVqahqjJgWoHqsFcCX56yQ",
  "key41": "3bovgXztvwWNCG6in1zeQei49j5DQzeUSfUBNm5vRcEPZ5AFbTR2RqaCnHZyDWHbEKT3REYymFwP16QYc68sBVvT",
  "key42": "Y4nML8TTWudE9uAEjLZ22wJYpBsRigJ1KqmFnFPq9SiXKAWUHvxzKc9cTQpGsYD5mprKLnWRRLLh5fmb6d1iAgd",
  "key43": "5rWYzWLkUmqbaRWYRw6c9C2Jt6zwHxQpApjcpTSxiL42V182H6MnMZs6vNX21dV7HUmkt1MVvWNPQ2JmawoGhugH",
  "key44": "4hvc5so7T1hZsBsL2TDeUueiYanygynDB1BFNK3DV8g93gifAHnG1bbrcTmAMDXpcCLsuxRq165Hg3kpcKFNAjqQ",
  "key45": "3h5YWi1AT4uXDDefSHKbWf2zxRftrPPTrF5BFrSPtwQGAA64qoBHWN3oFmMPfSgkjZKzXr2Nu1Pb7kpt1d2YgS5k"
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
