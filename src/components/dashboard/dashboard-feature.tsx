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
    "5DzwxPFya4f8nMFzrToYG6vXC7oNMU1Qk7WgQHXw3CkU3c1WVrnzaW1TQNFeKjAQMZYfFcBzR4Z4EMZdeGJJwfdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WPkVJfmVHVb25EEQDpRynX8qYfP721SfDEuQUx8hEiAiR7V7bqEK3vpKpXWjzcjwhZACSSwxwQesJmT99GUnERx",
  "key1": "2ktgcsayekdeN3uTYECrN4E6jYCRzKHzQvwTbtKYAWFej54jFTPCu3tBtohpMZA64rBDVdHLqjBjdHzDzmah4GSP",
  "key2": "34HBg7DDJkWJPJfBh9DsH8oGRvTbJyuPgE2C7MCzSQPehCCoLCc31pJFiWYVUDWeWnNLogDbg1bWc2Qn2SP59D92",
  "key3": "2wcr9ofayxykJgtPQsbxoDmFQzFZ9iJxBz7Ap6rdqQrLPhvMnbHPPvTnnN4skdQ9rCjjmrZ2TCazvek2kbAymGnF",
  "key4": "2ibyqNfjpjt96LXyskBzkWXtcsnP6D1swUajeGyhRVj6A9f8qtyemQ24eYqpCLAnT5gG7NSFqcwnApGPdDA4s28p",
  "key5": "2qARpwFkeZJxCSMox7q4bnsL2cNHSRyg3DaY1y5JkMvRoXes6p4KtBjcBBDF5Uk1W2eNcEvW7eRAK7cnU2mBZvz7",
  "key6": "2Jn49PDY8jJA2ZSYqq468nJ9AZNHtqRXmkBR7GDms656QWD4bivB2rfT3H9z6N4ZhEXgHwkuTNnzEXoH4QWfDehw",
  "key7": "58MpLeYd4Yy4fj7ukAFQSTKKUeDWFKw4DkFSHJnL96eECsDQU4x9xgJQdiVpatshhAAqKWxKYSQGtBLFV2tPg4aD",
  "key8": "gjaJw1jwnw5RyDPzCBSi2Cd9UCkuqZYtk5uhUznY1d94bBYXqmaBbVpqDu3Nr92YUGGDppLnLuyALLnNeWTkgkh",
  "key9": "5ypSCQR6zDsC1Spt6Kw4vCaXLe1WYdnpe9meuCQLeQRK8CRqasoKHU78Uwzh2s12LXUwiF5BFWiPc4gHRbrL2WyL",
  "key10": "3tF7WWzUhvKppYWcGBDH6aVjkpa7XXkRG1sLNvnRnzU8rioZaQ2PriqSrEmabJaRajyA3JYmbYtbZEVciAsu7Y14",
  "key11": "2PUfcGczC7hbRRZMATR4CCQZtqLmjR6LAPtE9XnK42PWS8RWYJYJpXPRvAzExafV85JKAYphMXKRxcentm92mvLt",
  "key12": "3TthGQP1TYWFcSrhGfUzYVimjUwLGS5yb5aZ6iDs7BGjz1khrwEzGMj7rejoeMgbCF1evpXjPzvr6R824gdSsjxJ",
  "key13": "jYV65QM6STwfC1UyiaujM4LHqhhBE3JLQAnxsS919s9oHNUEYdN8YurFRk53aB9BkaEmVH7dYR4XfevrySjAGYr",
  "key14": "iFXu3Dh2kcu2jFCczbWycbws3c3JhqQyN1gX5MpJZFsoB27dNCCt1TGC1hWmYpZRQnwP7CT1X5tADpcbk4C1U2X",
  "key15": "3bw2U2uZEXWCijnL7Rq6qzEta82zak2k3Vw4gaUGdkEkF3zaSBALhvrTCCYqD6Xux9orQnRXyfeegzvd11N95Lc2",
  "key16": "2VN1CWbxmEujHmta658453CZTJHntEJ7HZrM2Qt4JsAsyh3whskeXeMENv4Qndmu1GNBmiatGDd7ApLgj1sUny2z",
  "key17": "2UYXcGRD5thwnwZYyf3QNbygDh9zyA1Nko46Vx37DR3zcCL4GK5GSqbgwP9UXATeEYZoDN7UDxvaLa7Mh6LXQoZj",
  "key18": "663tvTpzAxDekteksSziCGPSZteYb7X6yWjpZGkuGdoxPiKqoaQTQpqxNWoEWs5iJXxwd4WauBLNs5v9BSirCbFA",
  "key19": "3YFp3oEftuTWYbXMXij6CsHxpMoXzrpaAGA3PdXYosQi5AQtNvm8z79hnMzYVM6y2jTsNkiHHZovnK7o3VkA8mUT",
  "key20": "3kMQMMLCS9VJf66Uwg661JwpGUHPQu5GnYavuffANkq8qziTeovi78NqXkusACwCXZKRLqZRD1Xqc8m7azsmtSEX",
  "key21": "8rkvnJQnK2rK3ESzy3oPodrxHkVxZdgBCSvhNkh9E1JME8ZELmFXBgYRYKAjitbmARPqRvdTwf8Ao3aNRBmJmUj",
  "key22": "4enwVyybRnvMYh1zQXvoDDfKzBvRQJBcdkYEMP3FZ4ugtGPZ5nnxNxnAC2LF3Cecpt53GHf3o5fnxJNMJvYo1fu3",
  "key23": "5JUD9oUagkcsHSShgy6HBE4W8Ys3K1kKTPN6E1ETz7fBXQ1ZgdNX9auMDKPKtkqYUKorwGPw4SqoGPjFyb6Ge6EQ",
  "key24": "2kqWfsEw6AqqNqpDhbhYeeqwNgw3iEPnUzsC7zYsVPmBJtE5sp6pP5WKxyzDrQL9JYFPUzfhCAnskaENptfM51Jd",
  "key25": "5HxPRXc3nGWNsJbHLWJusgwJdsHZGtFSL2eRpL9jEU5FegfHdBQfr5SvnDDPgY9h4zDyz8KGz3RK7cpdE6DaUa9y",
  "key26": "57ymWmZzhLXwNoxB8JEj3355q7rHGVUVRzqFnvrD9FziunNSQkD9qYgjJ9UxsQiUYdJDAC2WBAQAcfCMTeHuBBNY",
  "key27": "4Lbb6WjxwNNeTzqWFh6mc8ekFN9hqSWCjp3NmoZHZm48TgpfM6SGe1ob2NJKcN7GJE3s1mpBBSs5jdgLsCcyTfcC",
  "key28": "4HZMdWFvAnGeCWWadxibj4vYink8PqUXpVnvBy7WGYQ8CcknkpTENQhyZbkBLmDojBkhB97151GcsoZCcWcGb3X5",
  "key29": "5exVQxpbhP6W37oKSS77o8Te7jBdqXQv4coLSZJsSDFEtB7sTVXsxT7CmJ1duNDWEz4iFhP9XzCSPYDaM86LxvAP",
  "key30": "XjgwzH6LLYTiGxoG6jWRgLfRVvv5bbLJrZAKxuW7Kb3bibm644kzuPfvv1Z2eE1TqMhF2STtbmeQkBu4pBfAwYH",
  "key31": "Tofxy1FwHwHyDcd44jbYvtPEE3EyNEJeB4ADMfvHthhEvcfBa9xxnXhGNn7pDdx8qV49j5hEXakqrCmCyM3jARp",
  "key32": "4rTQRm5dJ4FD1gDDsmbFuVH7sqZF7x8v1QdiRC6TtWVKa5n1wDnY8rrpTYnpUnQ6sJppmCB8x7xACh9pRCMA79zB",
  "key33": "4Lu1Jb45EGCuvHRUNmzgJXkatQ5kGKDtEMawNVLYCu4B5gwWPEAgWnGwmbJDv1oqUynkkpcg6dbkZnyZbvWBvNd",
  "key34": "2CWKvCNvRms1U6cFAoaMVw5B3MjwNvEevSS3cJkUiNBS3cee34zYBM6xpN667mfp2K9Q8a648TNNLSfcyutSZiub",
  "key35": "k5dee7Uqj2LA7JmKpf7THVyxXd7i9D9UuZK1KQfH4q1awwkmWTwYNZDKUR26RnQKetYrtH7g4LQRSF3ALmEUSAH",
  "key36": "4PRfNVsxFokoZynHw2d14BV15Pr2Ttuf32N8bPaVDRgqsmCpJGCNjrv4WeWPQV1F5BJpMwTdrxeP1ScXo874P9XG",
  "key37": "42CmfcLi6hZb8s451TbdMGfvWjQfZ2RWKeKjgESBCeautQcAjcvLr4BZB7kKq6WLAsgLsJ8gd1Zg922ySnrSPRLJ",
  "key38": "5CGSRNyyNxQ4UfKHQ4HdfQXqmcCD9iBLDG231opRMgNB38WBoT227bz8QAxb4a253JiYxxNw92QVf4MZuMACrMy8",
  "key39": "33K6ZoLUMsaXWZ1tkqCb8vSt5jXL9ER82vNQbRiVsPm2eAyAh4rXn9rZ5BrjnCm3dHDmmAXjGbkLYECbx29r926g",
  "key40": "5quJaQKmWiGzqfAQudEGEUfjkEnnXJ6Dd2NTh5z8KgAWEPFVFmgifyA6Zq9kYXFBDnwW2Sem3egfxd5nYQWUvfzU"
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
