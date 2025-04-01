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
    "pqHpo8G3LuWNpknHMiGo6wJemQdRvp5KVG4mQGYD3Y9ccqRZkuNgaL41cpSac2m9UQfzmE68gX8F2KHdias6cRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jYrmUceoJeTyUX4hqPwwMqo6y22MCUA6HEN6FJKQ359fM1RTVHYiPhizS8iCwCBYuH8JUUB6SbYbTozz8txKZm2",
  "key1": "3BFJ4CviBoAHGEbSGDY7bCqNLy2ESmfQUznBZ6jtHpSajEEULpwKvzHsNb5P4bn7zD7TxgugVopha4ysSWeMHW3j",
  "key2": "4Q9SK7uYHW6wa4u9LkHpCnmC5QSCyWSuWPag1KXMig4SY1PTyimYFkvMcatPhAdgyepmaTKxtqnMVxupSPGaZnGz",
  "key3": "2F9Uq8GMLs737UzXioGRoCHjw4q27GiUp3617q9vQmBV5qkdJrkCAt8H9SSpTd8a8AAvCbqwgVTfZjTTD9c4eVkp",
  "key4": "3MgpkWozqU1GM3EhSeoh97bEuhVqSdCJSKvFY9EnBeTrdYpTiZVS5jUBd2M5Uq6QdB3YvjMy93XRKRj1jTHteX6u",
  "key5": "42f13E8WRkSU9QKGgZU6f8CL7Kp37RHvoKChaZ1czAVdr4ephZzKRg3n8JBc86Wsb6ge8aQbifABjMPPdyZVmiB9",
  "key6": "5FNSbeH3R965bbA5Kvu4uh8p8mZSc57oSu2keEft1H78485L6qfQXiFRNqxUeFKa9tnodfTsACWsb8wMgrp1ZeiY",
  "key7": "XQgFy4KHapkxo3FYBqtDpi466EevaAB2Kv4svRb591mEEF7oEMCGuvZdRP5g5wJRCCApGDk7eNQ1Qrq18DoT8hD",
  "key8": "4Far2MRCcfCHpfaCG5uU1pSDAAfB5FbUWdeZC4vXftUaif1j2QtjKYnB9ty7SXjUuFmRAoo2KCUokv5YF83evvz7",
  "key9": "2yixMUfmxSDY64jiq2dg3G7rz4WD3wwyxhGMBfqS9NsK3VUnkG6AvQVGxEXR9wEuEgCRQAVuN62HLWv5RxCKojNK",
  "key10": "3UQgBdRRbwtbRzPpkbzHPikUSopRNiSaV4ZYz9AnoEgfDi9PoPKRNAEPEv7atyrkwkWkq6aFwqRFxL8FudGZnJSm",
  "key11": "zNshuSgk16zE1AqXCHMNDUVL7s5wvbziRBY4en1taSNjEPGS5EX74ABGxDMfCkW1FAV34GyQQN6iuMZFgdcDvCZ",
  "key12": "5QUch9TSqbEQpGMgBk7aqK8iV4r3GDJod45dgrE6NCBXtjuZXd51KA3q1VioST6XHZZoDTtjwWycu2oqqdQdpE8K",
  "key13": "5KurUuisyEYJGdqFacykLeBGMVe9jzQJns9LJYyGVAoDVDpRPDURK3judMPvYrXu6hZ7M6Qb6x6AMZgtFMDyAgNu",
  "key14": "ecgF8RsAW7DTMGqqJnoGtbZLvxn7odNDEpSeQAZ2EeJwgF9LQBoivpwmCGwzvxmMeW5oUSWhULZjBX3MYoVimiC",
  "key15": "5YUeERw6RDc9QiYMdY3JdDeHGnzg2FDPbTStf67qN2Xmur4a9rbwF5DhW65FitUt2hJQrCz5CDYTYQsaJCzMrRrb",
  "key16": "5yJbRjUt8kMybcgEhc53MPqqChKLBJTLbYTFVyThDEMoQzdzE56K8tuaEGD6Bk8TGQRpfYiLBm4vvkD2ubXSPvC",
  "key17": "3biCpN9V99wG1zLTT4pqZu3SNQrsFkF2nATBCgDgPXg6x7v6njF5MKQbGucdWY269ETWdc7yyxQfw9zSW4KMj31F",
  "key18": "5DoEbnq4zGHntvxnmjgiajzHxRfNzDMuTfWWYkor1wq4fv3ynaYypCi2hNWgtRUYN2nUxuuN5qC8cMBLoGY7htSU",
  "key19": "WNAicz1gUq5tyYUCLCVkesaJrt1eGGwaT4tH6igFywwku8QpiGdPJyLa1XCmqdhPpeNRwXr6n9orVyHWgxHksEX",
  "key20": "3LJVipVhjeps3j9UykMCWbVGfhgXk2oJetKbtMizEevQS85q64K6Edzj1LpdRqpsBbzQwVfXwQxqUStfKsweFRF7",
  "key21": "2Gp4SbnCf4YwSsZtbnkSCABSB9Z2pqtrUXYFpEsPmdno2agCyAk6X2BwyeRFdGG2CWdSGycSsiZr17g5QZLbPsUQ",
  "key22": "2ZrvNRz2mf6zaqi4hWzMV4KFf1zQNsfyt3zvydzmWHw2CZT2ExAsBzDePTt3MxZJX1XyYWHeAzzu4mkqeguQaCPW",
  "key23": "425qnJtum255qEK3oP9uULsFPqbVGhvYQqeNH56pKZBFjriNDan7VHRTn7C1hPWm7ySh2EQpmAR4HcXpxnL8hVqy",
  "key24": "tNM51ZncqgJidqpMJk33Zic4uc4MhDWr2VJSLaatLB67ijQ9B7mXPqSUirF3yBfPLeMfFFbqBR1bPsx6d9wyNGv",
  "key25": "3LaPGJigMUnAWYeorUkruvMfGtUA5ECVdhGXLgGaTyiQP6FrPVKdDfgZoFR6ePTjn6Er2f2A9gmGdqQRMYfFbUSR",
  "key26": "4KeW97Gdz4Z2789LduoEABr15PPrjBHTGa4p2PPfFokDW5hZpTQyy2L186wHWo6inenYfeq3TFEMLsVMYymmNoKE",
  "key27": "2ZFDdChoTK8e861qfA3Sv9StFESNDQ2cAMrHmmbFeP2h2CFFTxQKRVAqZtoNhiBgx7Y84RdTWNFVQ6iB4pSVEH2C",
  "key28": "5SVVuRj7VDok8En4njiTJnG7Nigwj7QyJSuUhQRJidHf4Dj2uBnXH5u2risF6zJ7VSCTf6j2KiR6TwrjsddFRwHi",
  "key29": "4xyZEcR3MJitSDnrUQEgcy1q7HrXqN6cVFgbPqm6shEUZKyEVB8vkNxmu18WcSzRAQE9EkymzvkazztvBA1B9Au3",
  "key30": "5aePLDiQd5gdzTTRB1exfAUJRTe6ZdzX9TcH287LsBhqqGR3xUBnJFWCsU4os6QGMgYSgWPeD3PCo3XnMfXDvGLc",
  "key31": "5N1PtbeCjDm7ybZpxG6oxuKgWqxQoezNzjFmFCGtjrdCcNGscfqKm1SjqwC5jnSadRSfZxWcDDKKHSiszwwhFsim",
  "key32": "5ZbSPtKQ65V7y4bfCnWDfdwFH6RFQjJqG2Js2r1n1EXqwdMMuRPeq3w3xm7QmzNQpYG4qHNczFcz5nS2r4ZuTMLz",
  "key33": "4gAZFs6t7ur85CDixpdN4goyAPdJek4ntLGkXhEJUKZiJ2VHLPgbTWUXFG89nMqi7yNbQxgBEhYXZqQ17He4Ajnk",
  "key34": "2BHndmsUHaz9rzwTifnk7VqXg5Q3ySpjHaLygrxWLzUnuy9aa9qeLDgzvQi6j4Efu9RxFk8b8M6a8Kb5UMHJSY8C",
  "key35": "2boKGEgi2AzPxQdNkKEi2KomSjWvVTHHcNJBwdesMJePxYcCh6mwZiunmbHumeovP1jbz8dhc7XM2vijZumtZiqh",
  "key36": "dr16EJg9QLgrruCmA7Ns5dzQ2qvg3SWbMcH6hHoStYG3e7C2v6KASc4b61BDheTR2cMkU44fxur6G3Y32b74Q4M",
  "key37": "25sLSiDYJY1RBYTho4bdXqEUFQdYZHFXqcSX6FtCBpmykD8UBtoyBNHR3NfJaHk2Krr85fRgdDCTtQSFBmqBsqRG",
  "key38": "CC8fWEnK5AevHiTJmffBiKsGWYQJAGKL8bqvnRuzbcLdYfvhZimwfPUhm2GV9kAAcGH89pXzg6YEQxXa6N1DoNe",
  "key39": "53sFdm6A3KC2vWQyxFWGwyJDHgwFtr8RDKwQTHf4u6LTu9gPqLiMYZDLQJGTtYBDViuoMFcQ1dWG4qWQ4yLnswcV",
  "key40": "2boXW45BvVpaQCisCzqRQqhCjp1e8V2UgajPdbqbvAVBcEQ4YMSpPYkAPjUvJVGu6PLwNbnCy4HY9BBR22snKmH6",
  "key41": "5jFcUwKXCwTLJSknMwAaVNjssp9gj2Eyi5VnjURvp4Uv3i7dBukiNGshSj4FAhS3U47t9CctVAjKQGZ3hHKbiC7X",
  "key42": "2zB6UrJaVDQtx3BrsNrZ9wv9huVF8WrGvkjmnjKwdyku4q65PbasboY5Y6azrujTYmJHGanBVetHPjgf9cEsCb7k",
  "key43": "2fNgMCz7SmQGBnvF2ouggEhCcVbC9QTTH9Fw5FsWgq7PW7XJfD1GD8wL7bz9xxZQi28ADSweve4tTEnZxau5jYqh"
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
