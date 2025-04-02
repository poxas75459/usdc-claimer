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
    "4XtPdYiKHt83PcbqfAjnTebcATvoLyHZJeFB4xS6m7t27ShRTGoJUQ2L3FdkkAmyXt5UNDZbXVHUnTFj1odVF1AC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h2qUR4DAawPpQTQXeP72wnTA9gEYXcWMGZDntUNtWxPE5aDBs8hEHMRYdmiqgbqfq9MK57H634GgGFW3Ype8nZ5",
  "key1": "3gd3xpvrLDiTMciEcYRPqGucLyPNGTf7PtffGSEi6gnctvAvwLPMgE1xMTdLYpTcX8z63dzztPEUJSPieV5Wabbu",
  "key2": "4mKPD9HUdC3hyna1v6oQsdwJryCUmDfyPzbWK7hiLeJkPmX7ProXRTuEqgMxdW58pAr5G2rXNBB6BwVeBfLcmWEB",
  "key3": "8St6zV8D17WoPcXSbQrMufXg1ct8Qmvhc6NbK6TjXRrDxXCuSmvbyRbYQEy2yJcRTFiUGbdyt4o29nDeA7rmw9a",
  "key4": "3iuATJf8D1TsKrHiRgppxrVRaJuGkHwgWSxnrqFgRfjFs973yBeF2CEUsQ1QixsTAQVWCJ6Yrz3PMubWXhJJ6YA1",
  "key5": "4pawtVt5cYSwSdsw7GRUCWp95e1LDqV3cwtbKkVMvo11hVzBLJNMuAPk8vH9F6GTxtqJWQYJoCsaUukv7F4HyHzy",
  "key6": "jcQ6VReRXeQViRsDaZnyhCkHDE7uFRY3zi9vfKiahhYW5wQJJPsezm3xjttvKaPRLRAJ2vZhb4bLMXSUbdnpGHJ",
  "key7": "2AMeSWAS7CpaX8LyibMmf2HnHjZ7sC6ELMk5hEK6xmwCmASndh16LAf4JsPxYYi91e4sWQmasoRvrAcvmkWbZKAN",
  "key8": "38uDx7JGwdmroocMMCuVgUdQp7G2enyzrXoDRyFp1oK5F7ZokYPB459XUndKNxDtH76trty1W9pBfot1pAPLr72",
  "key9": "2DdgfCqoRvtpdBLnTkTv2pBn114Bn5jjA9asPU3wMZYVmE31mnFqDxA1tKd3SZ7P1Wqu5KRCU1vBHrT5m8rhgfGH",
  "key10": "CH33C8GtHMGfVS9SAssMGtCNtBY7KGo7tVQnPQkVuwPkFGRmB7zycVup4mMJ7SG6rivZMHJvQpUukkzrGBPqfeB",
  "key11": "2mM5AqpP84UQ4w6hSjpTJZox7Ww9vrCB8p3Cp9H3bnmBUdqZPAwWYf9S3Q45ph6FPtfoHM3inNjZZsWXtFxXJtF",
  "key12": "44s3pb9SpaYLHajMFLZSBCrU9Db8FJP3PBitPbWHTQtKKKGrpWx7DkSav3tqj2t4HkcrkM2JKkYNAvogJeu966j2",
  "key13": "2aiHhcso1xC9GfoybK4qhstWXtcqTcvG379kUFSN6H4Qdr7LahvQh9LmPhNz1Q9XMVyUa2nX5Letun7K7Ck1KyFb",
  "key14": "3EoeSzXhWzKBFMKJB7CnGK74AqwWhJrVyAQd5rMERSg1AhUCkLS5rrbhuQedGE8nFaDTL8mKZLAL5cTUVchv8QS3",
  "key15": "5TUxdKKo7KBmqPoFfuYUPmmLXSHRA4oxGW5BrQ2jW19wFwpUTc2dG6Tb2raFjQKRhJx993ja5gnaeP7AyRwscTJb",
  "key16": "51H15Uo54syktxxznfTaThjMgMgSFpzqcQNeTz3fp1mErgz2ZoAJYUnoKHEBCP63W5U5Wns8FkR8d7DvSHTS6ioy",
  "key17": "3D3kR8URNWDYe8cwKfRuE5xZxBxfrdDR1ZKbAVHapmfHKfWhjUoCrZfT8iqkZ4owj9ZGvwSYEvozu3Ma9UPabV6p",
  "key18": "5Sw53bf1bTCs4dLguiSe3qvBbTg95xgQERyn4xzZugfBLi2kk2zZvGgV6y1kXVZXEh57YkpT2VaqPDMERbpHUyW3",
  "key19": "5EsoEjZF9B8o8cCNygTd5zVqbMVykUNu1AB8cKEf1Zmuv8hToM3BARHWHqcdEfGvGTNHG4v3fbC8d9NPJbo5uin",
  "key20": "3txHeiqeDSM7Uajh7EWzJC95ueikyC7EF7obfFtPLxEWsNy9AozvFbRp2t9ptYrxGt6pzTsBfEKZ41jQwUdiFqhS",
  "key21": "3L3oZHhMPmHczfacqF6H8RWsH9UQpzvNPuH8CKGRnrqUJMppTceQ8iF7iPouUoLSUMbyBm6JzigkUsgF7WprGwZT",
  "key22": "5DJmA4RMdrNXJBHyTcdCpubCur9Y2vjdHEanhVJbV1TAv93Xzo362nxQiAAgVAKkL588a4uU9LVGdTRDvLqgcvmu",
  "key23": "4mgKhypSsFyevEVzMgfjQTw65kj2gCAWjpog61ZAZfPY4jEPZ5AKLiZEgM3iPGph2kjCVU1X5eCEEoxH1T7GckQp",
  "key24": "2erp7x3onaNQUgqDjjZ3HoEDVaM4tpLqKggaeNwZzgc2EoTDV8PovnB5EWqz5d9TBZzCroV33dfrb7oAA7MgZiEn",
  "key25": "4kfSmQxAbsWn8aSx7hqZH194dzW4rfdwzxxPQ7cyb3Hi23Sf9wmbBBHCULcNHJjprfNZruNQVk3bVTLmzzk4idK7",
  "key26": "uzKeSL9LfDqf8AbtJberGCXSHN5crqvY9oDATsERMKZXtKzwHtJJbSfJ3xXN7ChbtBiVDGpDZUUP8ENLrvpwfvz",
  "key27": "5xnkQKWmB4DAGPaoG3jBorMzjsPiy8tJUcWyVzno1m8Axx9TA94PvBLFcHsfRRQ2YNHLjp1xGLiKhzuMSkf69v9k",
  "key28": "4gEAfEfR45f1kEbm95etnDZCZYyVCNEsTQgUPG6qThc5ntw3wT8GyojsWzTQTv4Ksw9u7AYnwYMy4YmkbrFGXEDA",
  "key29": "2tEWVUHa6ST6GYbk5eRDHqhA6d7NKmu5pKxe9JE2k5nQgwgoRprHG9yTAUZBYjEgcP495CA2F1ab4oREBwTmf9rq",
  "key30": "4SVHnnFKaGGiw43PcqnmLtUbrcVRRWGhcnGVm88ecRPtnHLzYRydhXssNjNPhZcXkVs1QJpNyxoMnUzQoDXYtSkn",
  "key31": "9jQEHNXUyKQV8Ri13Zd2nYSAEbMi1kHTAv3yyh982QPSa3qu1XoSV45h16bgNGAPjRcF7DE2qa16WHC5TsCXLcc",
  "key32": "2FxDriQ2geMsLv285Q7CBxuZ57w9BaQeWpEpgQ81zmnSUaHZjoH43GnrJLNeqckv9BEZEcmqHU2Un8UkJboFLUf2",
  "key33": "2QBuHXMYBLbjCons5LhNdK4MDNTsuDnka65vST49euSm7pVmN8DRhe9nqsXreyiqtsm3G2YWXZrho5HqfRXnffKa",
  "key34": "4gK4GyRFKAAiuDvAfWa8KNJxdVZ4qZjg2EdBEEEk9PoSoMHCZ23UfE1VXXeVAdrFYmX89sV42rA7dGP7h68cmdnC",
  "key35": "42DhL9UZNyWHvSmwA8ezrNF2KLShytuS6Ye1BHQypr9AdAmvektGWeo6KwYmGvTEdTQAqbC3XZf1mVvPWGAG4aF7",
  "key36": "2sB79LLGTkCWDRef31Uq5JEsXVsD1yDzbDgTbugZ3s29ih1MCjd8SJsu7MdyQBxMhdi5g5dyKHMhtrXZDWzRPcvD",
  "key37": "d7ef58eVx4KrjvWdYjntquUvyh4xj4xs61p9FEvxKaJgARt4pSQvBtCCzcr1ZorrMFQDSvfVt5r3ZCzPyBCyMMw"
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
