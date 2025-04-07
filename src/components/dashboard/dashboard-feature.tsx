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
    "4BnadFA4aeY6fFitjzHBU2zar3svGkVsWfPxY7EFDwKv12ADgquXgybx9Z3KSVV1t1E5LAdmhorWQGwAR3BTm6zK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5guBDjbBKV7EteiFGcyWoBGXDvJPTRjgiMEqiVFC5NJavEbpgm9HxvZsaRtWwbCVhaLbfedQVYTxoTqQEWz1F9n8",
  "key1": "67T5ayFn6pD68B55XdS41Aw5z9jfbsjX7YbR74oNgFTTCCCALDkpZvEYSfEfLJHT1W7paBwwKDKkFZ9QpQYmEKj2",
  "key2": "N9WkSsqgjmMUFoRQrZt5ZqZjUquTR63URNbdQGy44sXsvWsp1mSbLzbFgjA6Pf1gCovefLyPEkhnsZ8MhCwHjhR",
  "key3": "3x5ofbk4VicefoiNAekkKMj1qqWYqQphwoU7oaLyuaZhcmw9QMzwiTuoAfx8zDMmporXLQiEa67E38cozgUhKaTh",
  "key4": "4nCK2cCWUvVTNJBkZcV7fztMrayBeQafqd5xqiiHVE8kfhaGkiZLwayMxaKJbPxnJYPNKkRJq8zZk8Z5SRtLYFNb",
  "key5": "D4D77GfGrsoH5qMvFx2UnA3j7DcM1pEHfrZe3ZESBjAXVhZ4c1QorWZBRNARenwisguGmXbfxnFNN33CTCT1Kdg",
  "key6": "5zani8kUSVDPPsJEja1JTLCvK4753VvfVNwuuJvATAjg7P3waoUQm7ffCKC6kAEP3xz56PTF2un6As1G5axFbrZ5",
  "key7": "4hkuA7kpDKAMvRcV3uMB87qYj4KtKKsz4Zik7XTxoTGcRSvTzd9spCHxrBNVqnrNWVacwz5EB7yXLWFHgZDsRimc",
  "key8": "yqn5j1xVtoCEDmKsoSw3VGVWtDQXb3uMBUTsxfRAMNqhvtXDqgqMUXXVdB8ehvNVxqXNK5CAqxBCoYhVNeUvwiK",
  "key9": "3qfrCLMy48c3pXzEni2xR3J4XmnAZBjr5PqFYRSPy56mmNaKY3JwrbRkeJuJr6BdopMEEH5cnwd32h7JTfMmQPPN",
  "key10": "3wwE8CVxYfJeS9PJPRXkmfo2Gn9ubPsDofsvuPrhQFJPzH2M15aMPASHYrKrxHoyr8Wj3tSQiGGbwXdWmb13633S",
  "key11": "5iuBEMxzVescK5T7zDQ7fnQkcBmqvQbnf4Aa7bWUL67aJeJqNjmoKeXHDKV2gjzZygooXLgSMonid6jkkb3DERdB",
  "key12": "5HbcvvycoPR98ZPXCJKzxcK1Bcw8exqfPULf8QBKznwKb8vTu92DYuFvYYjQjybRdfKHmEab3LKsK2APotYNUPXJ",
  "key13": "5zPvuAGFAxbJkzx958W336RaYnESuCbERg4Ap4g2T2ZuCwSnmra5SsMzn1nVQpgRPqijytBQPYWNjWGfHttDQnwa",
  "key14": "5kZeNjPqNmQ5NdvP3sLcgDN4QHP3mVdFkRA5ieo1y59JaYBeyVgAQdXURpYu9vzph3RhFVtveqhwbuS9cEtZvogX",
  "key15": "5onusmkaBT8MVZXeXZuxAN6YEEEuS5puJBHY75CkiHmrwhtbP9J9nmA91sbEucGm1KnGPPYGW8hVVA8HEUZKw4a2",
  "key16": "MtJ7nD45AgGvJxVseFW2ktz2XohZTw5n7iYsTUC7mNGvtqgfwmKbTaSj5YG2JrhcnMvyBTwwLuUtPUECrja7stx",
  "key17": "49cGwWrMkMBe6RAkkiCGCb7htffcfziru3M387M3MXKVP81Hp44tJR74A9K4ZP32QwWPkS4pjJRCE9TJGWXzvDYo",
  "key18": "41FxbAi7cBN5KpEv7FyqjHBqtb7SnSw6vP4hgzTcdv23YaTGuGpuh7vAUyrH8jhbqsVCGv3vvvdMUJgd71XJPTM3",
  "key19": "txD85HNnXMRCQet6LeGxNFu8cjuA8XU8RV8GkpP3ARYL1uqAsXxjNrUr2kkMnDmpSkRsccXiLRFWf3bbm3YFufp",
  "key20": "2wCHUhxWhpywrxRppkkfiq4LwTXMWUphrXf4FXNZXxmhkie8jms6j1NmbvjtjfW4d6KLyLjcMTs41AoPLEGGMSug",
  "key21": "Dmhq3iYjBpVsM85YQHinKPRC49GrP4LPmTgkkP7USsvQFsPkbdq8mAJti5nog8YSnjpTWohD7yt7CbmTV5HfsdX",
  "key22": "DEvFiRSh1HygefKCE5iEyTk1A4ZvRbehyiD7v9YyJWYBiLJkvDoN45nizRo8aPvhBJsAmxjTiMofzEHJcD9eCy1",
  "key23": "2wBd1h569938U8VjCfYKvCFt7T71TP2Qe7XnewUnHNuazc6suce1E1nYRG36cbf9dGUWQWjR5x8J52MpNX2oGb5z",
  "key24": "4zHPw2pDijXoK3pdHPNUWWQa8vNoasHpR9ewHv1rbNkNDmXGKPppd7ihfPrAmffkNj54fQ9ubSAo835ANpt9FnEZ",
  "key25": "22Nc6stXjGc5dsE3D54o6TMWPBx2Gfuu6n9RLwMt5BNcB77HBAyaiGfoQAaquPvMpQs818xBZGHacLVyak5nkhnq",
  "key26": "4PjgC7n21Gv7wCBzJmXDuNDijytwc6U9WeXKqhz7A2hKLqRCXrYeDYDe47ktjKHB53nd3HavtSj3tpxtHwoqLz5c",
  "key27": "52bqaHF5wzx66qRJEwmi3xBZ8iQT5tWVypyMdBM3H2ha4Msvrg9R6c4StyFUrjwRMedYTxxpSTrCxcDzHUQQt6o9",
  "key28": "4MwSXoi7BSiig3p1efg3PWYqSaNxn2Z6TbaVZSX6Viy2CLqhGRS6tjefYHgMUZ567FnL33gSoqUzvxE6CqmADviC",
  "key29": "4AX3iheW5Fr9AAhK3YcZNCrHwAPS2EXN8XJBtMeYYHq4idQcfAKFjmgymwcyhVsQ5Mt2m9VanWD1ExrKZQrM8u62",
  "key30": "4xrTvfmCpU3SGTxAziRrtUYbKygQrFBYecPfQrT847HuUPv4WCWGzmbBANcVpx1r2yNtueVb7t8VBpzc2jsDvgH4",
  "key31": "4vujL8f8pC5azQdo4tgFWqtCtML8irW9FDr9LKhK2Rr5Vr7XV1n6of353Q5SayqFwNyjvt5UQqEVLFxiX19STmHR",
  "key32": "5hwthgyen8iDLnbe7BeB4GKHXAVa1qMeFzKhSHd8uMgwEmhZLeVoErYAwSHMiBqzqoCJgCJxvcywxvcR49d4NPWE",
  "key33": "yWrP8JS698v3VwRHD5gD4UH3ZaiCB4qGbYX4wqFtZqHkh5CWPMK5BtEQVBjw6sWQXFLsLkhs6xRr2YSkxKqMt7b",
  "key34": "3Lu5HqQVvMxGK2HYxtTV9GzBd3xj1ZZaVgtLp4YYeu6fkfoMGDnsKgscjgSQqMWCpvtBxpM9BK6qdoF3RKpmbW3X",
  "key35": "4n4D2bJVmAZibN48w6RxmvF6xdGMafPKCeeVdeLUSCAoUTu7oEcbzHKjwJk5WhSTTvYrxq16gQGZzsSfDHByJ77L",
  "key36": "TjAHVmdG1MKMQotFHAqZQDd3csLYkYw3JCczpEYavVcvR659tmnCBtWzcz1ve9Ye7NVdAHbEVBrcSeBsb6nNjke",
  "key37": "26VDTjUzuBzbyTWH17T2NLN694nQoabGNaoGjm8LpCa6guqtJUUDKashQrDPRYDhRBNaDFt3jfaux3a4dySmbshC",
  "key38": "5uzd5kuhgeufayCYKgbq169uMZ2bYVB5ELVSNqPxFPFPNm7vdqZ3w5tPNtsLb6WvVKZgNYhR5d1p3o4FUJ5ZiQpN",
  "key39": "5tAxdmVJbwaZPGZUHVn1woQUmKdLNvyQ4dcC79j8mUT1BHHoQW6F9WsMVh7PHtwmnFGtdG7MNd5hwMQLf85zv7BB",
  "key40": "5RRviBvzQXrUFZtCK4ZLekgTSLcjt5eGNb7WNj86FDBaRgi4j8UXe4twXwGEieVLQ17k57gP5bC1ahScfn4ZQmUt",
  "key41": "3RB41eL8jLeKRucFwoQp7NB56JHGyZcichzdW9VW3E5WfWfzh8Wo5mKstpbk69hz7ZZD69shT7yEQMZMmzRK7z5o",
  "key42": "MRy2zM5DXjSUVdEdsg44eGZRX2sViiwdY7AXa8FnT5xRQZaQ1CJB7d6JriRCqpkiQTEZsCATwfBfgioTKJaaS8Y",
  "key43": "3HJR577JguXYAt3ni5CZLeGUYjCVjWEKEfUBJxGsc3NiVgoX78kaWkP4SLDX5qcNS8eDNtGng4rQQX6tauZZqoP2",
  "key44": "4YrMa6Qhj5AH2vUifmjxhMHPyFnGbKecZCn85CqygL4s6JRNkBK2qeFu7jvGndT9KE34s81ct2XuoPoctH3hgzbQ"
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
