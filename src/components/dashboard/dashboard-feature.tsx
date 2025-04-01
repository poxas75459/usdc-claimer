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
    "4KyYADKBiyWZSKHKYwDTwNvDwYYa4hFxu49t2NFREtJxvG3xdY5iGg79ELcFd6KgCJedp1C9dZJNPkSMkqD6ZmE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wHVeePvnyCpy8fk6U7AnUEnhkWcg3n9Nk6EuJ5xaqHG1tARkk5xVGSYXm8ZgepAKTdY4CKUoownopRn5saoYbFr",
  "key1": "3m9CjGkntwmQ2HmbFukRKQfDAb39tduySPUWC9UkvrB9uuggMW2K1nHdcqbjJagA2mCNviFyDmCLzsVgX5kkhCSi",
  "key2": "4ivazJ6wT1mUrADagEfsL3eFXJLjrKF7QAef9cvqkr3fbJwvGH4KdWdqX15JuSkKzk5y91a85GS9gvJH2SwTWc4x",
  "key3": "45wmX8irhFm3QqkNR5bTCMtum81cegTcZm4Z4AZMouPnSzfZGtec8p1LVWM18QxYWLmz75waHpLqWCiZDM6gv7fP",
  "key4": "4bxaiWg3s7sibvazTL4tgoHHSKWCNf7yXkRSeTGMWbdcEHvVMB1dKm7EqDAkbgwLDL3AtFA1qnQco7oCvS2cAxiR",
  "key5": "3fBZLS49A7EWXuE171t4oXKpovxgwRgNVda6uVGWh33KzB7gD8UpwvzaeGWUMPAu32CV2mAER2iAXparwRLcTDsQ",
  "key6": "4ZWx7jemcgbJ7ms4exnrNW1pmKHXLniqka8rT7JiMKooMTZBECVJLDuV5kNHCWq46nq7Jb98bCX9da6aWP7uwbH3",
  "key7": "2cD5XtMoq5dhhCpqVJZoBpzbjUUxuLHEJnpmJbFxVT9rExa8YzU9ozE6eMYWfSpnS2PumTBhWeA9T7WqPk6FRGPG",
  "key8": "2KQd3Cdg9KL63Hbe2xKNFLFLZP1UagWUYNaRpKqgruSM6fxfKwuErMnk7uTGHUivmVvhQhvYktZoQL3UqyZYvHk5",
  "key9": "4WJSR5Y3ppEfEEY8fpWyRKWbHb1TuGiA2WeDHc5wxNQgY1SxN8SMtN2EZHQvzZtXnDsb7YvpEhpfRdcaBwbVnGX2",
  "key10": "4yQDiYAzxn5kADtu3WK6LL9ALzXkCoHHXcb8cqs9V6wExZLjDqChy9MLHPZ9tGymCpwLsSvEhLbu1V7Dc2rM6Pfu",
  "key11": "2y5ttEtvd8PVnWGZSERzXDpofuGv5ZVGBpoh91EiDGyaBsArp4296eXtZHgd3vs2RWHuKfB2RGp96gBtidKdCiJ",
  "key12": "1qJY2iyoKTtcF1BFpPcez2N2BPcAHgH7Zaum8reC1tpbkfEUx5MTudXaspmsxsfradciNHyXX7n4CHWJyo2Y1JT",
  "key13": "2YsHUPVe5x3zieo65izPxyWhz9bcNENqNv4qrKTZpZBK9aAcQEaLxPbDaaMLW7NFegSocsRmRjPGAcw69eMw3Nve",
  "key14": "3EW2PTcacjxkQ3kS58ESrzGxDVW6Xxjyvu63UbK6qHJdBfT1gVkAtzgqe1uAdC4NXSzUMCGGKC23VCHhz7TRiwnw",
  "key15": "2k8FMedzcxk8vYCM1Hdp4RxvPypbwqztCnougZCCj9qWYkSS7QRdzexGBk8VgUogKTkKTCXbCeehQLoFfe4gf29Q",
  "key16": "66JXiKJDmwxKLLWaurcy8CqQ22KuukcRzb567QWhVikWMfUSbQArdyF6sk6eS9asy3QnoMiRzJoBr6vs9jj59oHy",
  "key17": "3AS82ysP3R9j3ZVHV2c4chVvVHSsNnvTmz6UT4hCpKWkKHffcw71bCVzuVjrSYiaaF7ikZhumq1GNMn3o7kkKYb4",
  "key18": "2zDWWAeZ4iuz7HZ4MDDktP5YcUZeVxPHFPxjwCGnpSvGVAM8Gsj98FtY6U4XGrCzyBUpo9pysaibvjAFk7z7qnSH",
  "key19": "4gCyP8B5jCKx7NBFaza2KK34da6sqH2aghfg8ReS3tPUxgbet9vd95WdEub5uqUvX6zPwmC5kRLc8XavQJzAy8vi",
  "key20": "2CvaH9K4ubAp5aucvMpR2VWbtapxEqpCciLNrtqFV5vqwUKxenaUM7XWz1a3mZB6wjJ1p1rZBj7XBBoW4uv9mHDU",
  "key21": "4UTvT4aQSLLY9AkmL4WradbPVjHYzqNbXkspaLk1RXrPsTAwX4uD54oi49GY7dTq2UD5nxfWhzB987bP4dhsxzr8",
  "key22": "6HjFa6gUNJSP9NN1CqDBk93ZotjFyDk3CavAXBgUG2drhZ8AXPSovfimf2rB8Pe4QRee6wMAmARvd89mj3BftZp",
  "key23": "5rHEvoz4NSfULfBeNipzWVGFx2eCSfVsZnGdrnbFJVp2aEAP2Xx5HRQKPkxXmVSWxLFc6hpimJgiMqn1gFijiJeR",
  "key24": "ECZmca1njodJH2EYmYn4gpUqJaxfEvMWmn7Bbkze2yFyXH8xvCG2yivcaVgK9JyCQXsSJRv7twNGymv4mJ8j9PB",
  "key25": "n8G37P6pNWKt2dsfG67obpaqps6msHJkayroX8uKrSBDgW6sdZkwX1qpNMgbehh7ZBx6qEm3VL4EG5B9UfRimQy",
  "key26": "2Dqb9Gf86TErvFHSadz4hTn3Ku1yKcuFcG21Yu3mohtHGHqrnDrBY6SHNKTXcVc6LiCuD4KsyhdCjJPLPjwnG86j",
  "key27": "oxvzonuA1evRLERZQ1YjyS3s8nqS5xa8ouu9qUiiy6jPGjsoS85b9q839uHKisnsGsRbVfnhEJ2ps5dqeRU8p6g",
  "key28": "4Nk5qep5jyLbmhy7yV4avmGXCKw7sfWxECrHdJ9M6d7VoZGygGRTpV5vQovzsVVsWbiSSJMmpZv1btKeZtntvkHi",
  "key29": "NK2dEtivV7KDUpFs3nkuKiAzerrhedaE7EX1rbSGATpZ3hepE65tgWiHk5EE5Yc1RSiHNZk6HQ2oKjxgFXLyg3M",
  "key30": "2pctg8PZuEdT7LERgpDJeJw1DgsJLNd8gqRku1Ghet7zJfhP5ZPX3mMhPBhhghQDoE1AdFqZLcnUVWBvwm7vczY7",
  "key31": "5Y9KvKrGFfQtQWckD7aW1pcrgYZEw5c5KPKD1NzFBVWV8N6KafCSaMtKepapWUS2JyeQ71APJ7nxQCtBdij45t1p",
  "key32": "65MCH8yHY9VJuuZc899YG9Tqxn6ZvJNp5ofyhQDFvJG9Pnt7XQKTVMKcbaASQwSTHGkmiBbdDixQ2cNp9Rm3YfV8",
  "key33": "2pkBu77a1yaWEUZrar3AC9WcMvLbT14RAwv2XGwRg9VBiR4m9MoK7CKXsFUZrQwuajiNvmVEM9V1gfaMN9fwbdE9",
  "key34": "3k8ZGbmGQPVV3jfEDAgmKBBBrsLq4NdUbBry5Wq5dqHhBDdm9mt7nh8cXFpttNzsnCXdpM6LZARPabVS9X277WY2",
  "key35": "2wBsvj4ATFqRr9tqLDJZQDbqKEDZJ3y2jf36jScMPtPQ8HCyKCvtgwg1YUWNtx5Vgb7Rphu6qsSq1RHs1GHSLSti",
  "key36": "2p9Dch2bb7JjaZ4Ngjse37JPons7pwRaiPEu2PnoJDEMN2H3gc3t3MREVz8TqqJFSdN8e8pdihMJPNv4Z3zJERLG",
  "key37": "2SDFr4nrGV6GA88wYQHju71NGXjHsixY9ycyQrLtAFnqvNFCe1F63XyAk1R1sot7Pk8mfsZWUBiUje7Gg8hY9Tdr",
  "key38": "muMJPktBFyPYLvf94EzovskvoZ1sbs4rw7ehjGhnt3XNinPuf2qpiNCuv4zJwKh2uxBdbeUNhVfzqSbGKHfwSEx",
  "key39": "iEcLdWQJYfKBN7yVZscneLkMu3g2JX1gqU24jVnuct5NXqbt9gxNdDNos9Z3Te4CwceTDivWrp3r7UYw2zDTS5t",
  "key40": "GutR9rSyETTB6eXrQWBdtYFa1E2hnmQmGq2JPeYVqgXp7poV7btEgM9t76bSrf2u82xRKsHTAyVBUzLmydJwvqQ",
  "key41": "AjvS2RQfiLMfNtF6mTb7yW14CeCEDb2c2ZXruKSFfM9JqueFCAzA7gW9o27dtc5qhtWWCTLGmfXFsVaac7ic4QS",
  "key42": "N8EZeAAEtLohUBJhZGiVmCN5xwFwNW88KQUkj7MfmTeBEMb1N7hLd5DiWaQeKj3JjqFX4dD8fJyxiod47ahLNQB",
  "key43": "hLMojwaxVMRzE3sHAkZYj34gLjFYbxjZfBr1uT7vYrauqr2dSmSKk2mXcTxK7XWQzCQwPCbM2qf61PbNJUXnPjS",
  "key44": "yRTgwteGqCDJA9KDUrn7Bibs9gpEr1wSFNCZfBPsemyHuK3pnWwZrVecZkMCCs4B7fFM2dmmsMbEXCCEppbsjfb",
  "key45": "CGswsEedLYDf3naVV8pYbEmgWM26z9tyJfAiNaooemRvqayrdJCXwS7jtFhzvDVi13Qq8Uqc2RUHVUivSvivQQF",
  "key46": "5S5ikNCSe592VBHhH675GKfDuR5AcApFDCMF2SNx4XSEtHjjZjCY2cSwnB9iZmutGGTTcaP1x1z65WdXik1TB934",
  "key47": "5iGVNs79G7fR3JMkzuPaY84UU9CaVU1uHm2ychBLNsUwVY9kMxquU4fwQ6XZUnopjCafpvBwq9xkv5JzZVWXKQVL",
  "key48": "5gUFQ9G9cyAjqqKwoP9Kqn7HRs9nxo57huHku1mHaAnosQPNvKtwdwzQEWozJboRiqSSR1A8F79LD9zepWw34FXb"
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
