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
    "5X4eYDYr7K2nUZWmfUG42mKYZNhSEb1VRk6pihi8t1V5w6Yk4nbX5LfNbKJ3BFPzhQPaTCEgY1CTKdjbVH1tCR6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ESxHhTfQiECiKeuNEQUJJGFouPATuhJ86jvHop2mZvAevcgvV72Co5uCLjfvWnkDVdTgFgLa3Wuthc5RSoVnzg",
  "key1": "3H2syJnBWyqtR81u21dwRhUWmbi65fk4Z5HsTLEocgnY5kWsrXyFRVndCzsbzLvEjN9p9Juazqw6ZW4ZWauBR1J4",
  "key2": "3FXz2PmyCWBZFsxKr9irvLoVwgnVWABWQQPn2QS7KFNyf4VkJf8eLHPR5BJog9nWu9Pd4cfGiFkzPTLKeKg3wJcQ",
  "key3": "5YCiwQMGiLrqinwPfHtBRMd5A7gqmo5KeRcFZBFFNJtfHAe3H7TFDtK1ScPyCkrPvy9KQ9csnewDZMiPCemDVLNG",
  "key4": "2pLTGTwV1QeoaTaLJz5hi5ozNBtoYW5ahMHgKdn7XRzzQtLbQLguVp9FTmYC1KijZV3U4MdoDXHswQYVVgQqY9ek",
  "key5": "3tHkttoMVqz78wE6JgFXWAcQjjZVhDoVrVddW2aLxwNKcNjAcmHXCTwwVhNWqCJ9giQuVQUE6NYQzUkiu2tkEek3",
  "key6": "2WLVAEuSzYUzqxrGXdWLTi6hNb6zkvy6g9b2uYFJXM3PfYkhD8L8mKDWqCUndfLFYhVK2d4kM6Q2AZDDi97WNh9q",
  "key7": "2Hg1JjrC12Xv2NaYTXmPAcXpCYNn6fGGvn7cEuxtEBKSxdMj3CaNUygdWWfcECWqe99RWmZDE7CVNdWNsBasP9Di",
  "key8": "5y5Lb3SbBjGCqvQAV4NRXnojTWZsC7k7GacN6cD7pFiYrX65oXeP1XrFwmuUb9zt8NKQyJcebok5zrByJoSVUbHf",
  "key9": "4WxUZ7BCVpqcHTCwKreYXcdZFmCNoMGKD5AiDBtZ79cqdMPp977BdzUABEDRHbe8qF7EBRGZAPWhXLHtcg5QDytM",
  "key10": "wDuxLt6hkVCqfhWqwSzsrZ5DZvy8o57MTciCfpuByxe1kfqSDfxdDfNicEwAYQJPTnRFddiLRhUCHgguWKP6eP3",
  "key11": "2WA5qJhpVSc6B1a5y4b9CcuKJMgahL9B6dD2RJnsoZmaJHipf1bVVw5QGdUUMMZ6sJ2M6qEaN4tNwCHW2awxCkZf",
  "key12": "5BRMT3TWZ4hrNH1nn11hisu9bwkXjQXRkP9SizkdKwvjVu653EYEqKL6QmDGaCynociv7vrhhUp2EwSUaNeCgua3",
  "key13": "2ZKSnWnVABS2YQpe5eAUiBZkaXVXD4B2LHbG9bqSeMiTrvaN89v2diXgjtVNokn8FFGWYDzq8N999hUUZ13juJoA",
  "key14": "5MZUEwonPn18xkqYCVyyNSKX5FKBEeFhhqwL8pwBnxxfsfNtJ3eG7mvUBpBrVjJ3vbt57mauVoF7yb2c7nFYiuL6",
  "key15": "2jwiZszGdvhvJ7JoVWefi4LhhfLCs2Ht1jbR9AcgQsHHFg9qZHR2KwCJxduzJxmPGQo4AjE8arFuk675SzhsGHRT",
  "key16": "UKhDVgeeVTam4gZfDTkw8kbwMMzD9YrkNQ1GHJJiK8QtAXhgPiJcMF1r731yRQCwGBYh8LoFyk7YuzjvFMhTxPd",
  "key17": "pxPytbw73AYQorY1sLh8tvanoQVLVaxmQMg2p4aGgZ9QMbqWUfNkjHdwEtbdqe5zZgg2A6oU5TSBv1zppodFGmt",
  "key18": "53Ub28SsbdRBr1rJK5tsVNQX2eSPKzZpzEEmG9GkcNV4usfWKeMR3oRDdLRC881TurovicdFMiZBL155dp8wnruj",
  "key19": "4CqU6qmPpXuC6jxjf1DURtpnthGk3XafRvCPkqmN1Js1fTYeB6P11nDe6RukkVH2bVwmVsrPpmDzQAyRvixRqLa4",
  "key20": "2uWXV2NXrhu2j81Xq1gtqW6sUHAsQpfgHNketZXaWLfKvXsRY1WedH5LBzSNHzmCgNQfCLLRe6RuoiqLj1BS6KTx",
  "key21": "5pQUAy2KJhGBJZ1qQfLESEtBg3qUeDUwx7CPFVkT8UQex2bPmqBiQ1jorMvC1Xt5pnpk3HzAK2cnW263dWrrcbX6",
  "key22": "5dWXKEGCkimx8yptsQoAydVonjAVKi6tRQadHQaH7VkEizmtgoWUBRw1uf2AdGWuyBwERjm79QVCZHkn4zUP67Gr",
  "key23": "3PLKxp7iSBNXCh4z4QL8qZEyd6xPJK44akEgvp8EVrNqgfJzf7gpWDW8G8bukChvqgXgrKH8BiTkUaeAfhWtp95v",
  "key24": "5UCoVeVt9NxxJQWUmBWEZU5jhhwbyiknCrgQYKjPg8HxLcuSTiDZxPgxyup1vcCA89QcAkVVRhahMCZJfAi8B9b2",
  "key25": "2uQQagBox3Sue7E63Qm7kpNR7Xm53mKnCBRAhfGkq2GgVj4pBd5FEW4bvqmdKsifcHwxeA5vpVe6DDAr6wBAYJEP",
  "key26": "5FsqQ5NwvSbUv1CuWd81jyTMJPVEokvYjXQmjAWp8JkqLujsZAmwLsrAM5XAMk439gRJ5VCB6ySSbF4WPkSGQykX",
  "key27": "5mrEFH9tdqMYGLgeMRWp5D4wbRKaho4wChQUBtpp3oUXNAQ95EKg865YiGUXeej3pjG4t4CXMLvRba1vaQb4QjQa",
  "key28": "4HBufyjb5CWdRNt8m5mRCBRbpw5Mn4t6zWaNuaLcNqzWXRzdrGRAZSShAbCjW6Xtduy5JgNNpfzXHz3RRSsjSCVp",
  "key29": "5a6kpJCm9aEEmcFJsdWbQeXgekRhWfdYvJYsoSbhZ6UbJ6GjvbVP3xGgDFio4AWYVVpBtxCPb9Wn245nHWTTzUAV",
  "key30": "4qAfTiu3HKHuvjfGh8s2LrDfXGfKfP7qHTmaUdr5kz4u3esvPGS9tn4rr2Qe1Bs137k9pDZcAuXPk92Rt39WPhHn",
  "key31": "TMuo6jJ2JrAm1MSJVij9ANPRrC5QaJDSiMKhjBePHzBGbzxFWPmxHvWHfyp7FJFw2ratuVz92a8DH2tpYsajdEB",
  "key32": "4yggrUhsdWPmX4EuXtAW9hbwibWZhkrRiV61fies1k6SmZb1YKh21LcfNLcSQe3xzU89irgXvHBoe8sccdF8SFJE",
  "key33": "2CrsYGxNk9Eztje1uN9UHeQ23Q7CwE2sTw8ENBhnbtWfxyxRHt7AuzEWCrqFiq8C6sSXisXCYYqddg6b2q3oMuj9",
  "key34": "kRFbQexx8oLCtTEWKxtQzgyJnwrSXR6GJGhRVKg1tna7pycTLyhBRBovNxrQzMkcovxczT3Uovv1PT4gHNBATNp",
  "key35": "72V1fM6VDy2fr9g4kXe7rZbn5KYcy3mNkVciEkQuK2aKNQfxstvpzLH9Q67oFgNNGYkNfSwjkmrc6VLNM1cASaw",
  "key36": "5Kq1e8oXKJZPpZ7q6Dgay3qnjDuPkaqJnwMQFm3Lt2pVz1KPWWQ8Kt7KoR3o4NKkgkALoGacJRFpQtfjX3cnYoUP",
  "key37": "43RrV39m8nCTZWs6Kjz2ayv1e3Njx58ouhvdbrcfEAnTqqRvMu1w9wdwLgQGRjDUfkNRdDSmnCpHQeosY1pEqrnr",
  "key38": "2VZbPZ7MV6jFJE3A2K3apthhhyQ3bJo8k3r2txMpmWdyzA8mfKoGzyKSWnTkhPVnq5ff6PbTbp9ofWx779VN5nTH",
  "key39": "5oDdQyfgxbsgvdewdVACLVY5NHx8FGapJ4neMAu9KXLgfCAFcSCAcUGtPqkqEbmDBXwL7hL6tqGVd79R8fmGuYsV",
  "key40": "cnGKD9evg9fAyvvioRGbPr7Vy5cTqUCtfc9usnrmaPoBLxgMktggEu7QN3tZhFgBcr8rjUbwQNtnbd5B75SHCiZ",
  "key41": "3D5BQ8ZdLVGVLjWnqaG8yW6wX18qsiEupDaU71TzW1RLJJF9FZ4ACu4YgKsL51gh8ZAt3T7EGxTz3g1XojkDHBHe",
  "key42": "4qww8oNaqR3zrnpWFKxYEj6SsLPxYhYQGhjBhhTnRVzLzRFCdW6mqG8q5Uyt2Ty6PK5a4Ebmtds7F27Ey6weAwRy",
  "key43": "2HzF9CxQqyzQAysCRUEHE79sikX6x6HqTsokw1rz893uEFAfCVTHjN4deYL41ERL64gkLtRWPJ5x6RuW7voK9kvz",
  "key44": "2ffSc6YTmg1H6bFqUeYcwwRyyjcLae75jzBFNwKxsVFtF4huNrqxi3BpRPfiXqKcktwpiwiCibnySwe2Vo2m2AKc",
  "key45": "3298veCdT9mkhB9V2Cb7aykG7ftSLcPE4infpmZrs4HynSrbspk5KuhYQ6ptUEMJgSnqsN5EpJjAfow735oHGPzC",
  "key46": "56U7k8UUjqnSsQUSxsCYfQSrKfGABx1L3tqBXpAwj8euUHeDWEiucunu83ET5Q13vWDr4EPsa9YSNjA1YVcRQAoQ",
  "key47": "4yqbfTRcBk5koJLKcLKXPQQMwoZ63FpGvJ5Kq2WSEeJE8pKxAp12M6yQupr2yVTcvB2gzFNcwLUKmAyizSmcCtpR",
  "key48": "agR92XJSa14Wg5mnuFjaKgc2Cv1SMgS7ZQn8jRNr9ZuimRm3yjmjvMiGUyTsRkQ4t89m82Le6oqpojiBJQrS8VM"
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
