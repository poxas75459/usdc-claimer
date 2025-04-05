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
    "2Xf3VxYsusD1zQJv6fCcgtFsSiBWzSq9KQF4NFe6Xrrz52fH2kA8t158zAwfnjiroTekmgSko3Fpm2rdFBcRpPeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gVdeneyVRhoisfDKwm9xXpFSwHtS5mLv6wbj1sBUnCvr2LBdY2ei1gfGp3vBRVqPmc3C84ipqTXa9LdFvEsU9nM",
  "key1": "5EKEHfApGSb3sRxUTySHoMWsBv6VLoPusLFxDzgNaS7GHdxaadzJwumRCHQkgNur1fL3igRpLxredScpwrCrmCQ2",
  "key2": "34qS7FyGpCgCygzFwS7yPDk8gL5HfZmWNWxbem7E41itCtcGC684QeSnBNMuSCCohuMEzdSGUqrsPJmAb63m2NM7",
  "key3": "3NWWMYQpvbezPvw9Vpa9ZXvZoLfE3JAx4qm1qNdTTcyih8GRFenQf7x8DgJiBjHG8jFCiy786eh7MmXUt5PqvvMX",
  "key4": "39Fso88ZEaxA6siqtTES9eDHVgr6pqwfPuPTEgBycXX4TzP1ZPh2fVLQrDzKEqWoeHXFgZrKVnoqmwdpr8dhRr4b",
  "key5": "6144mFToY14XzfYLXmwWS19tzNYxg7YCC2mUW28g1RKTjKRRPR9d7wvXtwySAB6v9GNvxkNFXiqhTj1vvr5EPZhk",
  "key6": "2C7caehf1mAE1VqDGJtEErfZ2skW1tdQQwczY7EhNPM1ZZWnavXmhpeJMGLxYQko2tXcVQygW7gzCuzGMrhtdnAv",
  "key7": "SuBY8XaQkffSjgwmRfGu7EYN2H27Pj2rftEnjTVNUBvjMo6GoQd8ymHN9Qjk1JQNbPFyaYGdfZgvgrDoRrd3cyd",
  "key8": "2MzpDtCVxona3mViPb9Ae1im39YiuNmDeKrwhBT7pqxZY9gbkyKV59TCB8MAnLwtHnqB5zb6GLdjDrcwPZpEcLsa",
  "key9": "3itao2719TEDN2cBFVaBBd9UPR3K1spohH6X4c3aRtL1YSYFSsTWuAedxzfttt6sqJVaUp2bKRvMQ4keGtqd5TJP",
  "key10": "5ML7nV4UwEBwavzSjZQEbJRZ5U6yWduy9sWUvBLET4Dod5z5v5gTep2QeXVbBPXECuKqJi9Rc7tUA4y2weiL1XtY",
  "key11": "3aKovSAaMV6wnRE6RMW2fjpziF2BZZgLYoZX1XgowezfarRiCfAJZuw1uUJHCdQsFN6TzSqZYE1Qu5C1qp1uNiAu",
  "key12": "HW6eh6zRC8NbJECPBqxNBhPdWwfNCYCShWenBzEGYQYUMcQc3i5dxRfZXxZKWjZBzwQhhGD4pVF8oB1aAZJ4Qvk",
  "key13": "5j7Aioyit7REo9VGsu35XAURkSm5UhJnwYNuP3kvN3fiZPuovke7i141gkwgNJFJF6mv1ENX4ZGzR2XH64xoD9Zk",
  "key14": "4jWrni8NQSiWEsEDb891uansPYvniZvaUgTQ6pRH5pTgBiu1u2gFvYU1YeZZk5Kmq59YYJhh51DwZt1WPd3DVvk5",
  "key15": "2jN1QCotA3bgG5U7HRU8ZbMjbRRSVVttuHueDrXrXgfyNkG9yN2uJM3xc8vYrjHFHtchB6rHVWvxzYMV7YQ7H9Ra",
  "key16": "4u1zAb4wN8Naa2EVPsGJrEeBKCocyAzdt6zMnLMQZxGKLzg1SEMZk3aeDKP3GnkCUN5HWN4a8ZPbsr7Vm9Bsd3r2",
  "key17": "4fjZm7Dq5jyeiujiBNsum65kspF5eJPK7LzSfuM6x24JYygFMXNgWuQqL63jBTRarYZZRAkZwF58PDsHnArTKKNo",
  "key18": "53MbQRWi2JhGYbEueryhbYvB9p789UCHp3xK72tQVhj4pn88xsMgZr37bC8jrLv25824UUeGpfEkxGVzZwEHCU6r",
  "key19": "4dikuDt64NJwvZN6fXFXQrnozi4c5B397TKYBxMyZRtTVy15WGBoHsZURvhoVPpPiqRRSdZs3XnftzPHnKm2DzMR",
  "key20": "4yMqn2bzFB7FJrZwtJFSw27vCTuNyEKa936ZgByMJ6UViL9GNagRqe7ZvsFXYDPiGXvwHCvULT8wu2mLyVVMjgHh",
  "key21": "GGg7b23BHk12ywgsH7XpGGCqZZBjbKWopM9jD2GKvmLT7KtMYFy1ajFh9zttJXnDuw7k6TsJV62ju7AJPpHinAF",
  "key22": "2PxibCEJ8LQhNiPzA1zf1pegzhfWTGpNpoXWAQMAVTNZHGgvCbYe2AHnbzjnc3LDxJXDR6W2Kp1brqn7sb2ZtqT",
  "key23": "4eUQQhkRWukFAtK6tZCCx17oshkdSVz6ddwYZqX8wSyzJgsbScahy515CeUteUqF21cX5FtAmWtB1ioPfLARYLLD",
  "key24": "4ymF58gG1362oz35W49vjYUhYWKmr2j5yRNWVwW7SyocGhmncCpfX83Sc4iEV2zZ4KzDmU2dyUgADEAJHm7jQGLj",
  "key25": "3LfXssyBramJpa9zmYudewMLLSdWc5tanEuLETL664adWfth1ajbBA5qA6GUy2PWgugn5NhRyab5pcxKkz4CLrCX",
  "key26": "3GTvNa6TZcWwR8zFUEbddpjACWTwSNqcgK7mwcvRb17D4fxpyWLJDRa4MPJNB5T4vSWHjBfWTXtjdMyHogjrsFgr",
  "key27": "56h1vWyagUiBvFSjfwWxj4UcErqvWX2KzHykZCYEwK1HLJAzENDXYmCq6VuG5j2A9KKJAJcAJCn5GQiVLBq9T9gK",
  "key28": "4y4Xcro3sqAKr3QjQPdnkeMbjUqdZNjnh8EugVUjVPdLmUBcJc148NBhgQiFM3eCgbAuYxscEe71tGvRWMZSjjrK",
  "key29": "5XcKdisddqHUpDbcNsGRfWTYovnHWSuPBQsspqWCbuCYEhYnJTFQgW1Tt5oUsqtatdwNMzHWCBAfKfdUSW9iAg1T",
  "key30": "4iGraLpjq1jwvPqkuhPViLyxBGyPCXCr89ocaiw3fLq4PapoTcx49jU6D74sfLkUFpxYd8AYz4LcZkywze1CyeaJ",
  "key31": "4PRTmt5YztppkdUikNd9nnEh76heoAhH4qvd27sz8kgNMzqtC38HG115T2acHMjqmavP1xgHBoUoX1cbzJJVJ1iS",
  "key32": "2gRbq7KMHds6AUsJCgy6a53c6duituMp7VMrVeL2nDexHnXVawwz8eDYeDxaBz8gg9zA1RokKF7xFhpRF8Lp39GZ",
  "key33": "4Ga4yBxdQ5fPrWrztu58FGQBNpJqXnEKmLkpQtzDNVgrrxPUje48sgG9k1NQvgMGFG6dBKAnnvmjYmcoheqxHiFw",
  "key34": "36tYYE5g79ie7V2N6G8XBkkKAa7F1TeZkQD3bFwQBxLXFQMp2y9nXpHrRhcvnk7uyzccAgQRJaCsJTXMVuKJSEJc",
  "key35": "5Lvuwz7vZBN5L9L4Ne3RYwGQTmmzqm8FZgvNL6KUhPPfZTcSygmD7QydtFBUk35MZfMJFLUsqppRo7gpvp2CdW98",
  "key36": "2nAfdqJjdk73esz1uNXpgFaB7uKxYs1b9APrbRK2sCviaYdaCmjtHHjxbHSjXpkKDjeq2itMNNGicdY6r5XTqJwR",
  "key37": "bWGAiJ1J2YyRysQuge5WKHGyk8DdvPPPdVYEQJeEXtLYJ9RChGAo93AQw5mWxh8v8QziqNJYoyNYL7PS7wAHHf9",
  "key38": "2SJVirFmcBGHE7pzSUFMuMEuHa5UQUafTdsgzeRxJxghf5KmHs1hmmSDaddFdkuKhjfkmx2CJVGb66bVTwo1GCcx",
  "key39": "34duptVAEbkXUbFSqdHiYgrDsubfpe892LeaHC55Ue8LgrxwJQAyJcCyoC1wc2kfwfgpgu2nfHyHZrzTJqNXK58p",
  "key40": "5imCoXXaboUMLCHjnZRMPN4FuHXksBsFLioghMAJdt4AAdw3UCVpbXdovsNeDvHCy6ZYDRfvWDT7jPfnjppPZiij",
  "key41": "qnrcY2MPy5oS9HfPaY9Dn6krgoqk7wDEdFZFAtTajRdDCX1AvWrXzFxV615tqYMKsMXEC16P9k2oCrJJprU42ic",
  "key42": "5fkSRpzf6CuDmyskPCUjwNBaFPnFiKZoMgPMRyEgL4GC24v7mGphNSvp7dZskhmB8XFEdoLswvrsaapMSTEaCznW",
  "key43": "2BpfXkxpVkmuqhMN4DuYFh6ffohGLAR68TjywpPsEn1Z1ehoo2kSaLEyDrkrQ65ZjtkAYkcdU1E6MbC1EcUMksjr",
  "key44": "5fpsgnfn2Wtpytaa8FNBDYPswujXDRriFUhFi9V81uqhiDd6AVKxfLZwu9LdmnxMjuN24C552qBBmc3y4QvUJMDf",
  "key45": "2Dnekc8iwp3C6kGgsB2FV5D5bCGb3q3QFzk2AAuihj16ctkS45Aka7RpMQdufTDu9nTAKwncSxiAvFzbFdWU4M1V",
  "key46": "3rXqcvFrK7LXLnSdfHds2aidwuM7pAG1oMCPn2YVK6ByGmcdwgJMQnwqyFbmbX1KcTs7nr8TtfVwPqMLy6N12ZMR",
  "key47": "FnEiY8KQxaPtw5ymqDNtcYcTsqsjRsUfhtMxoQkNEaWnQzYfbq31VPKfom7rwN1ouYxrXGRVDYnr75zwKrqmzBE",
  "key48": "4TojqYwmdrhL9inY7StULQsPsNF76eaqJb7U7aoyzmCqKeCjFNAMDuQfQHBonJaeqCL7RQDQdbycv8Vd3PCV3Tfs"
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
