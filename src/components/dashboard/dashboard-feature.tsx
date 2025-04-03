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
    "kFk9ED8JXmMA8nG5g6UHCoTisoN9hLeLJcxCBU9KFed5yHS9rQHb35MReXQa7c1cDzpGEywhdHmptQc6oRfRhU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Lfp5KapUyieHnWzqkjNDxhKh3T1nzyPEH6JiNwvLTPwky5yUAmn38b6hF8DBANrp4xm1FA3qzVkZ92fNZkeaZr",
  "key1": "5kqqd2n2id65fKwoqY7z3jr6JeMWyx5NfqwBN5oTeC9ifkdGHerFNmcqejpu9fhhr3UkN3mpmAHnr268M7PBt4QF",
  "key2": "3apwyw5EwyWM8JbiK7kstPQwcz5HZk8i3vJudc3rRDnxKmBdh9QTtCECFJbCKdazqMrzJ8YTv2BkQUnXj1hUQUha",
  "key3": "4X9zdynCHLjj7XmF7j5VQ3fuJWX88SK199rJaPURK65wCagKJDBKbG6AVGczuKoCxQAmyuwLL1fvsc9nfmA82cAp",
  "key4": "2amaPLKbzyi7KRfPQe4WZsW4r6dWjUGA8nfnAeQ14zFSjnjyeB2eYQA4mC8fEgKEsQHkpAJVSEjzTDqc77gyyTt4",
  "key5": "CduCxdXzpXVyCjxEYcgVqaQDUkKeap9jSJ8iapSPHCC1hZtEaAFM2V6yvfq7NuA82J2Laff8uLTHT59YEJDuBGD",
  "key6": "3hbZyqtp3x4xBKrDfCn4m2sFvTsQGkLnaAsAxW7ZbJDV5eJejbscV5N6GVHLzz2NkheHmHQfEofmNNCUMEhqCRC9",
  "key7": "4xyUpLD6yT44Ho2ZgsfbkiFLrnaraDxoqUEXvp2341woZQdDkV81nkEVhe1s2HG5ywfQ4NnJxnUdkt6mmxhWrRqz",
  "key8": "2gVbk84CGLwzDkYsuEtUNWMQDZoMLn7gmDFfW4kKa1Jzp24AeRVD8rpJhbJ6pLsPJNpJr347JHqkvNMxbYqnRmMV",
  "key9": "5er1YVHFvFDto1NCMC5wBrPbVL9W9EcWYFTjVLKfMaBifG9q3HrmL1ExHP4aTgeRHyzxhBFR7pVXiStpkXpicEaU",
  "key10": "5V1fmZXHTw2UeAXxFCY2m5etEdVYVpZVbZossxJb3gg3e5Jsa9tQdvsC1Cfxm5JCwQ12q3NHuftNuZfuHt1GrzjX",
  "key11": "5q8evSASRTA9hZAHNrGiUCT89hHBXkwcW1ni26SdUjcJKReZkKMdXiiuVMpwDb8MoMokR7dXT9tg8ojoPrhHKmCM",
  "key12": "5aBDRQe1MWQyVuwAUXXoS7BbwA59euTBYEUpBgcNerT9Qb6GQs3VnPC4oWG1f79CHve6SDFiuhJ6aSjLu6Y8gqh8",
  "key13": "p6DhN1BeJN2Nz7Pg1oAyy93sW8KEwYnVj8giSgtSDuocZDD6Qr9SUTpefGLkAaSSDrdZE9b5oBdETWrLzAX8RF8",
  "key14": "5x9UBJvrz9xHtHYHifP7zPH7hPc198o8vBdtBYY3fED8uMNoNxnevBst5xVn7vNz7dDeNfGgpCvc62SNoDabUEzC",
  "key15": "3n66mjT3pBcavTcQD7gia1kKQg29ECMnJPzUjq5GHutTJ1HposuCnMYP2ZFArcKNT1g9S6MeHSANRsvM7KTqEEJB",
  "key16": "52QDRp1Wg8FKJ9MijnWqwHBhXxRy721mk3y2dPyYkGhCmoWppYXvcBwe3XccQdtTB88Y6GvvsqhqJpEpYFovHVah",
  "key17": "5JjvLSiP8RBgfkmt7QeHNWeSUd1j6T7zhf4h3WGbdrPYJ9JrC81pT2RhUUoYpdM2aMEUkkBqkiT54GyVmyndXFPj",
  "key18": "4YcxZDp4u9BzZTboo7bcZ7t3tr3fFohMzWuSTzLbvBk2ingGyc9LY5Kqaoj6wKZV1f3Q47K3AbmycwGBPCkUd3zZ",
  "key19": "43ep4t79sK4rNPPhaD49X7djV2QsxFWVP5AABHr2sF6HexsL1cKdDnVs92T7GHTnyCijTnS2Snu4F3omJseaEpyw",
  "key20": "FrnVuJRrTiWq1CttqpCzp1PjKnYiBrrjbTUcjqoBQaP4Ntga9q1ArvWjHjojLTqwVu29z8xKzcpjN4tdJYWm3g1",
  "key21": "3q1WwmgLkmfEoatkZucmULSn1FXkNFvrgMLhzQcveAfdgcBxEDhEqVGoKpuUu77yEheds7kQHCqVy6mFmH1VVvrZ",
  "key22": "hWZDgzyMTeiNRiNt3eCt31qbtyDDnbiBrPD2vWcNyAbneE2sg2xtqhgZhBk8GL6y7AHC4mGjWRUCKnHnp9Rv22d",
  "key23": "2FqKwCjdn7cnfFVAinsd1K7Ab8RUikr9k7ktMLStmTf61KDRYWQoXqmvmUMiBdBiVRHYKA8fQiZPDsDQuigEtVbd",
  "key24": "4vkHNEHp2gyGEDE2ZP3fM6K9ppW7fuoq7SZJ7aWwuHMcg8otx126a79RVfE5jxSAP1RakkkspXYFbVrdiGigYirn",
  "key25": "3jmkntRXCCAMHJ9V3yYmKDt1VZ25S7cg9KRXzpEYA1m5DNVnTiM67STmJZ9PAiU7nhYnshhU99NR5R47kaYoXkg4",
  "key26": "5KDnN73RFdnE7HiPNPmazM5fdvyfSJxjRnejHZqmcbQn7fGsftNKDqnxqMmCNnhZcowStPF488sfxKcLwup3abNb",
  "key27": "5tUzKYoxEKrsoVYudo1UkKrD9eD4QcopRoMwDoWgPLxwkhNTSgcczbAsiybXrGaJZkdhAz1h5Ysgu3VTyDsjR7KG",
  "key28": "2BSG396DWvqhmBsGkQZFkcDT9dtnD8URzpuWJaiCsmhhSU2zvFDShQriXxpLBVRRtvNmm6TKaR6prTbAnoQnvJQc",
  "key29": "475GvaXTDP98rtSBCzomLNCV6AgsgafPVykJiYVdH42gCBVBsu2Yf8oEYNcN6ZM7Yaawg6KjSb4tC722h9Lv8Ggm",
  "key30": "hBkSSzHn85EJiZg6ekZeAB6rR9XiWoh6zjbCyL8MauN42kR3MX3Msydp6oTARqsjo8ZFjMG3GdXLR7aGjQHPCxw",
  "key31": "arQN5B3pLSquFigeHwdAjd1KVbVTkJR1UaSTrL25X4RNL6eJDrq93jzKR5mjGKbD7YuLwfV17quUuCEQdGwxpLW",
  "key32": "6TUe7Cg63wHsQuoqd7WtTTmRjWr9dUWwVxgQkXbJpxfoVrqWSVBb3Xv1mcmBiAMJYbEYtQ9wXGM7tp5QXdCFgEs",
  "key33": "4gjbKHgjg44He5ZKMpS7iQBRv5JPbQqJrNjbL9tLiwoGCQPxGBGXqSVabaZEbeujK9sXKhKiWHFTFmPPwqhsNhEm",
  "key34": "2dFr7BiBripcgew8UszdaFHZ8dgDkkLemZF95jNcLUwBPezts3A1E1AvHbwNx1u1eB37ZquJ5NBQJqGGh2yY57fZ",
  "key35": "4ifMDcG1cq9tE864h7SpveeThmX2mbqaGeeLSE2XCX3Ftna4wgfXCSFso1MQ3NTtAAUtmScSXst1RBU3WtjyWQP6",
  "key36": "2d2g67fdcZXetKVDXMTiDtQp3mPs522Zc92cS1hV9gNrvy4nWpJQEFfSetJGG37QD6aCLX4tvC2df8moeTAV7efm",
  "key37": "63tBNNfYb8KCLoVjY8G1zB6afFMwyodVmKqy88oja4p5gGmXzqnmCaZ851b9nSWJRSNiEd4vBe1YqHXfB4D14vRd",
  "key38": "4RFSB2Dw6qhwHEr686RcHxgjbywG2Fjsf7VaGScEFrdsSkWU5YfMYXo2XvBBxX1bD5J47WfbSNtEoWfsNatA8xGD",
  "key39": "3k4mvwoxYSZjdBhjVfTT7y5sAdcVLTawTZkHeFW2tXq1fQYAqgWqnu9s83dKzi9kZNBqDji1WJqGeTwYcxVm3g5T",
  "key40": "3x2nBDmu4JjXr7F1JoJHhFkDYHSGLgPHo8HhNRraMmgvWCQFRWCVhqNrsZ6eNfedrwLtyiPcTizH1UuRmLS94RPc",
  "key41": "2pwHFqrMFVeXbZAoPCVEHx6QgS4PCHYiae68fB4tep4VDTq7ZnRTbJAVMH3DLukYXoXif6vKReKdawPqFMLNJ8MB",
  "key42": "22fwFxgaYsgoMiWJpvoosqxYPn3qTbCQccBrBvvuUrVRr95XShGjHvTc46eoPrenuCk9iYswjGsXLzzMLKbqwMos",
  "key43": "4KeGQMqZLmBfeRn1XrgPyjJeQvBDL4YpRqnMtHDByn8hvVN1sNp9AQtfCCJWfWAsKfcToMeGSs3tYLtVDcqSGfST",
  "key44": "4VDcn7WRZxNdeRDGoWUsNUidsnkbyTEgLd6qRJFb4thzVp713N8Vuwg8AYUyaHiWeQzav4tKQSPLVmHhyYvkZifz"
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
