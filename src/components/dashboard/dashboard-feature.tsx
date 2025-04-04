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
    "4W5iACsT9N2yyUhaL4SE2c15aJG4faf33LHvZmh722QB8zSrGLEnG7gBPpaxvrMXiUmy2qGxiffgqvu89UHT4oXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61XtbmBQn2dcAjKUy4e9Dr3KTas1HcF86yZsbQCaN1ouvQP66o1g47PbsqoRW94x9pmqDE3wzniH7GMfNvYZ1pvd",
  "key1": "27FhrHUnSHUzqUbqQzwUYKkjtKK5R6t2ydPS6gMS39CCRVJatndjdncRocRTEqEUmxvJk5AkDMQ8s91mtxUnZp2D",
  "key2": "4ts8jPMy74uXCzGQU31cb6kxeVEi4knkLLRU9k8ng9D2BQqfSKbaWTHZwkveCW9w8hetUZJH5CwAgPdcAza9MGJ7",
  "key3": "sBV7aexSRtCqXsHSySPrZXMLfJ2wGZbxwggWcekFDoufqo1iFJssUWFdoZDV5RgQ4tEBn5twBhPXu7AeZq2d3c4",
  "key4": "5RQfcU5sP8UdhsNZ3GjYmgdmMycFnD9RtGr64nzMvXZJe6jbxG5bTHkfK4LacGiwRzJd4xUKskjFNpyxrooaT2cy",
  "key5": "CoRwm7v25fXsbWwRYja1kkRhaDPGXCsBDWUUPEHPqUm4DXM49r5NKiCf4XbPk2yLYQRQQn2N8KXPvmcDk5aFpJo",
  "key6": "49cEKTLjGeEju7bJTBDc7dmJfWB1Yy4Y2J2QSgkExE9dwXkyEBniXxxxTDask9gy4Tkrjs7ioBpVe66F3pWwuWRP",
  "key7": "2yLburCupGUtf5fbaBHDYzMY7bxmNbVH93PXGr9UcP1eL1oggs6Lnb25ofuxhVwknrSb5T8ZAJcLq3FJQwksQpr9",
  "key8": "41xBxPJvaT6HJLMAmfpE6iCMH8Ht1t8ffv63iXNKFAirewjVG47R9bk6xhGZU4L97jSAidnr7gEDhRefnhtLyJZG",
  "key9": "65XbaUz2tjaQ163Kz1bvnv79wPgZKJPYzVVjTtWiSN9nLtqdaH2CeF84LYBBXeRFctRNfTT4Anw6e6mWdS7xYvtR",
  "key10": "51oCm8QWQ8WXt981shmzNucdLKMZFBrxxYDCSvwaAtzKfpY1YJqYJHVb25Y9o5C8AAuGgaGcBwJPTpC1uTqMhics",
  "key11": "2g1h9FgWhC83j8DPa3Toio78QLwymMjTDGBsHGVwLXf6eeqHZ9nhuPEKKBubsEARfppCiAKTcRCLcDab1KfL6S1K",
  "key12": "27G7ey6ukRcHC1eQhjGN4zgcGrHjAhgDdccM9qFHEPx1Dkh3m17wygQHyoAJkjXHBFiGtCYAEM8nfnoP1qq4QtdL",
  "key13": "5YeyDVoXq2CuQqMcyiXLSG3rFrCh9Pwo5qGcDFpuYTcs56dh2yXjx8UfuqvtjFa1S5gR7QdvKGBTi1PybeQjt2Ti",
  "key14": "66Ep5zdSXTs1jfKFrBsSEnDZYjSdFrcuHo6TX2e7MLecTKy7BAfvSJqxNTk3VXHsnqGv2rNJpYeH6Vkh1STQKKoL",
  "key15": "2Ej5hBtKz7jjtjSyXhWyBWndEoZLRppipiJYWqt6DSCWhyYUeQ8ZAZt3fTcQeHpwQdC23mMpgzkbVok4sJVQFULn",
  "key16": "3NJ5CWzgA8QbJK2ThcpLbqcFMFcB4Z5R62QyiVqtXDnU2bT9wthR4iXbx8e2sPt11DogNC1rqZaXuEr1D4te45EQ",
  "key17": "3gpJ5pUHCPnWoxascAvHvF3PQb7zJyFiEYnBaBgYsqsWJwcWgGKgdZWXVFfZntK9rv7Fxrmf2cGqa8eQ1SEN5XG6",
  "key18": "5FwzTT41MGzCkxnEnWRE6Bi1kzE7eY7Mu8iEbQ6KiPszKUzYzw6FLH4NQYiKztQ81wG9HRoqg27myKzS4fQJTohS",
  "key19": "3p6zjaMGrNzR3hPmGQyD28v1WbaFTgZ3nctRXGPv5WvrQVWCEXy8XSNfiiHjWTWbs8h6E1fGpUxijUgFSnrwwKUC",
  "key20": "3NhQvNCvs9cYK1Dr31v9jjTyBE2byw6SHYRaEHWruzqQ6o49whyEbpqvFP9ibg8iydciUxGJ2uhZLK2NSm9fS6Vs",
  "key21": "4LgHvqX5M6uPjY8sEsX5qfa8Jcdwh3GjvSmY1SCWUAKZswBtdDHqtWp9TNA2bbPX447RKiURLcHmQs8pnUdo6fRs",
  "key22": "3EEQqXfZ2tLSLNJinFCeu8SYJr1r4W3LPpdzyt7DCvX1oFoLy8zPDm9BTzMUi3ZCL3pnoCnXddSXqQGuUFJXWvaf",
  "key23": "3Qc3KpGKMccRwG7mi21VpW2HARkJory6pZFP94mcD9FvLhHvDsZ3L1mTPEiZ7Y9pMm3uDteM2V3NJCgFLrwZTK34",
  "key24": "3xAxzgjsQR4rsDkQTF6GQfk9hoSrZ8V65xGvdGwGa6BzcXS5WJByvm6G6FmftXrtzVwX3xwGK892xTW4qPM27Qqc",
  "key25": "48k8oE92AbTkpwagpisJiFQjy5ytxQ9MnnzyQEByrcD1aQ9NE2cgo2vVK7YSp4hxqV3yhFRQqSfqXRGCmoLjiJNh",
  "key26": "6168JKSH4bjKWDbp6uCDEU2RFkBdwvMV3SuKhvTy3nx3FKZxE4CUbkHYeNRLkEf2YMNDLNv6esN6U7CezEDJjXbi",
  "key27": "4Pur8D6RSq5kA7QFoDsKvaRxR9eMHLQt6Abupv7Fmw3dqGYMeGw5TAAcTp2aDF7MDu3YauvsxLDSHmjTA9TKaAbg",
  "key28": "PzfDbc5QV2EktVuhbNRabvekqnvdpdq7AeugMRAgMZXzsz4k2wTwR8jGXKUW55emnbupZukkYtonNeVQ8Scr4MG",
  "key29": "5QUMgY5y9prPxp7XmCLscHXfyQHm1zKV5z1xHuv8EeayZoGyz52FjM62FDmueBMEsh6mS6kkjEhN8XLvjzPUwGDp",
  "key30": "4bBHcYsz9frCnJS581bayM8km3BYPiYteQnGjVaUdFVGGQBFq41VTNX7cqQGxadw6wNo2yEQmSTG1Hrc46SVWf6F",
  "key31": "5s69tReSQNEU8aMKwprFop6UxkZdo5yG2LSDQJmHAWdXAFQu6JHcWrcz3uDusemsdYGewyH1njw7dg4sc563EkPZ",
  "key32": "43CXg6uRnUEpWy9xSZhHBaG6qXiMdbJb8t2cFcbN2EtErApBB5VPKpRVnU3TYjLCgoPVs4Ly3RGhuTnp1cMNP1em",
  "key33": "5RSZwqtVXV8yteVVdjCJgNjMLuMe8VBLE9b4683casHVRb7SH6s6aeNNB2tkVjnodG5ZU5jAZuCargJM5n4ZpdnN",
  "key34": "1RLSKzWTAXCGy5hDpM3oTBcjLyxYhzvhmwDFkEFZFPPM46a7HATE2Qrj6yCGFNF9nq1GkK8x92GP1h51BrjJcbG",
  "key35": "38JZ6UXUFPzXcsNgpmd2wJeqcf84kZNd2epd4UtZQr6aaZ6U31HCtidEipZrsN4KthYXEqdbJgJAQMLL7gN9tBn9",
  "key36": "2e4pDCm57WYR6RDskddLQKpChx1sefxseCtiYxRgarDtARgFAe6LEz8aYPRdt5gRQDJg4dUrS42YwaF3GmbSkSoa",
  "key37": "3vaw2GSA6yE1VpYB6A3MuAeUg2TE9A9QLMXX2rnGqLiQ5yASNQ8QPPC1RBqGDw8NKkKRZa25cCLqH7gzhmWMQcgA",
  "key38": "LwqoiYSJ112wgpzVeFe3QhPESY7fnGmcPYQxtm9RWs3Lwa28gYreahPiMZvAv1tXZU1AD8x89EJmRJBPM4n11kk",
  "key39": "5U6V6Gs7e4vQtUfGRmGs68BiBQ1LTJdXwMQzAtbqq4tpYvjmM72mpZybnrP4yT935pBWZuTy5QS8s49SxAaQdC36",
  "key40": "7MHxfiMqgiA84BeLU59XdQUULXzZri7Fo7FEpxi1uiifW4gKpMpjbHbJ8GrQWhRYjYHPt6kwfHs7jPbiwYguUxn",
  "key41": "8y1VeJ74W5jMksVGZUQbuM19o9xzuMSC4R7YFLXgBHP64u1vzuAkaqG46Za1Com36Et2xkieGXN7NaenvV635qm",
  "key42": "5NNP647vHhNVR7eRZBoANycEvADS4tzYQ4K2Ttibn79ZNvaJWktUDMtue6gkirEMdcajkmqzVRHT5EGQ8voTqvUj",
  "key43": "41NBPqcR34WMYNkVFKCUMZaomTMhYfkbxS6XCupDBqyS84hKivwW6SmZJxECpP6KpcJRnbP2NjmAC6HtnJf93s2L",
  "key44": "3yrBbtfk5uBy2wPd1PdcBxXVv3FUkvAkosArrd68CCpfyfKwCPeChZhShQrwzut2Cop1G9oAbtcKmVqG6PAWZQrq",
  "key45": "2P7QiY93cmUmqNkHhyQoxZXikk9zgqRpA2s4WCrLUM5UUzj3MZ55pzNBSFP1n3upNbjPBou6QvZ7ncuSQ4f2tfx6",
  "key46": "4hQXSovgTDLMoeMcanMSqEQ7p7rYacxvZdkFVcEJrezoMB19iQPQUzah1agk4pmeCF43aLiMwYMH9xuizdpfcPaS",
  "key47": "2hRbx6RKz1M6wXaphnsMNiDy3fc8ctkkPgTdxzorg4TSaJHzzrVxecJWF8beyeVtvn8ZGUjjzggE4xi2vcMk5VQA",
  "key48": "oUs6C39aNjuUnhQSHYqhnq2CM48pqMNzEP6uUhT6k1YmcRgLU8v4fx6mRD4sxdkdbsQrPWg5itGSeLKPJu7R3Nr",
  "key49": "ZoyW9F23AR4wn3BK2eYqe579ZrFkfika8twMT2inYe2nVRg9kTJ6yxF8nYHMAzWjiRekYmxBWdfmEQkijcN7rte"
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
