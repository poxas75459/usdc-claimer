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
    "2pQATWw6PsAg8X8fYNgVZmiXEVgUUFnA4Ys43qkd3LkTTMxPCJGaxfXqdMWPxMtHF8s2yXsgxKLiyuMMXqyGjjpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CAc1CRkJgtDDphYGY3N7W8kHcBymfqCnTdSUiM1LvTNnhsxsSXKEeX12bfbXbyEFC8JqKPz7cLoCJgM5t5NHjSE",
  "key1": "2wCkxAPouKZKKy1KTj8KA2UjPFsbTobooQfrxgdemkZnupz27r9jBaR1JRsmhZKPxHJiGzSpDZS7nkhsHU9CyHYU",
  "key2": "4d7riXzUopNUuU2UY2c6qinD4YF7UdpdvXtwunZh2iDoeKxXCTKncNNFJQSPRXBUZfRnfhg5UBoJXQeigYhZr2M6",
  "key3": "47QeoGERG7vTSLrKCNCk4MoZLAf71WEj1zTk5VgHoez71FQ8Nu4ATQsp3ErbGHh97j2xUgrRMjBFcrLKMF1igoc",
  "key4": "3RYAN4yJvtCyN9A5ba28VY2QktYt8gUKBqWEzwCHfs8qHJ4ikL6orzqmVfqYoBTWjCYYW7wkxZc95XMBbJGcSrch",
  "key5": "4Kvy7xBgETkFWb7PP2xRNVr8YPw5FdQ2ZN1pTLZMY4Mz5TJQhBPcNATs7GdMYZhP3v7FgPwk5okNQQMuXpuD2zw",
  "key6": "EbjFVngv8CBhFaUn458j6Wudds3zrxue3jvavN2ZdcB67M7z6hZmA7i3feCSfzwLCFeBCbHKTHxQcpZRQ4BwYKK",
  "key7": "5tNka8xXDdJEdSKF46jXHrupycZUZFCLZFC4Nh4DV5v9ACVNN4NH3pSBxtoyGvtJVYmD8qSJVxMLqjtgCaemqjHz",
  "key8": "3wamy6XxjzNNkoP5F74duMnynGZs63RekYHhjpznDKL71SwJ2QazLapxNGshLnwKUp79t5mb3HXzTXaNXJkyCeQD",
  "key9": "63GMt5fBarAWkyKdvaepvto9EZrQ7dbK29k6UYu5sTZVGiYdukWQMKKNTjgPqSqLjkyjqNWKEYki3MXMx5pPQsxF",
  "key10": "1QPway74jvM8Y65z34jLTm8BxgNQFh5fvJJKtE3kmoLHQ22ggNNw6PEUhgsytq5LnB9rcDSDTHzLWx1eY6MVab2",
  "key11": "KiNDwTRqEztNp5KLuqtpJnCYpaervrELMCbSeis4WzWWi6d835nedxDGJaQRmWxXZc9tQsHuMUEaaySNuFs143C",
  "key12": "V4aTR3GS8D5RhMiXThon3o6EmQDpSvFKv6NpLmHSbrEfpjxhcjTLooxGfY9dhzZJ3TxUh2SYnAoNifMPVRj9aq3",
  "key13": "4GoC7QFK1vzYtuFNKUMio9xRNrA3rw5kvTCC1kQabWBaimWhnzXNJuCfznQttorrQNe9FXCZ8YsamFTwN2BSv1nY",
  "key14": "hzGQrWTfQfLKfyV8dQrTvnm5ztEan1cnPLHuSVFMrWitpoLoGMsUkD87QfsPBwsgZ47GZ8DpXE7Bqe5EvxHHV97",
  "key15": "2672ftmjGpPCVkytDNqoSG64ot4c116SuMiZj1oTskRyjcdwJpJAPHsyoZiywu4himfbDHCXsgXefxCFtBuKW5A2",
  "key16": "PajNdxyff2AuuxmXXuz124Ve9vdiVd4AQeQfSiHxKTQenspqMtpxqLwDj4JgFqcoM1HHAdx1nRhvNXTtVu2Et6D",
  "key17": "3YpjKtHUu8zkZNv1AoSxEPJY5667DNPCAYkRLhiNiDX3ob1pyXxT8uBxs64gB5reFykNLWW7eDwU5BHxTi5i3Ngr",
  "key18": "2bXJNBpmRRT3KxtMVf37jU29MKQzWkU9LrE7MRqCW1DXB57eJCUxzSLebLPnYBjzUBvQUVuJUKznaQHqzkRVEqTK",
  "key19": "3ofWCeHv6uaD7X6AfZce593MPeUTvAMudxzMe8s5efbLgbVS9FWpNgyaDLeX184vuMq62EL2naSYJhvYqk8Vqsty",
  "key20": "5z6Mt5QrgFgzouwKA8Gw1KVuH385ZegiaNNzzJt3dRznEzLQYSRCpyo19FXG3cYaztyPzDqrU5hhpiLM4woTin8f",
  "key21": "3FAPh8wXS7Q2wNKcYzvJBb8rgzawMk2wZFjmYg2GyECdf1RHhBF81P18GaGxUuUGDdUKNGxtAKSw61BkMN4HkH7m",
  "key22": "3ek34Jd9Ebu6k4kXg4Fv3vcq7zNaGnPyXE2yxrxaPExkAMgti25risJvy43oBvF2Dzb2La6vtjQkEchtQQmyvrK3",
  "key23": "3UHYVnnHUeLLr6zUZry8UzT8yj9ih1Ybh6Av4phhDgAgZMmicLC19sRi6WXxWSDmzgXpv2cUn2SsLqnaT26cZKKs",
  "key24": "5RESpGH9rJ34tk2tKXsrFSJVfNFbAYj1m9bUDeKCRDJiZqeHSZ1cha1bmDWmdEEmWSh5UaCsif23mfhZCbJtxGTV",
  "key25": "RyPvmCkcUFTvjcKB8mDbZjuP2eSHdzMaXuFXXA5f2xGMoWG5umr8Nedkgzepua71PHMRBs7yjT5BBqyTU5UEyCZ",
  "key26": "643CA6umXE8dT9rtkrfPNRFnC9r5nqxTq8qshdEZTUhKBhc1C1UCBUTx5qRtdTxBEcH6ZKjscEV7rSuzmYNkcLqZ",
  "key27": "4VJVZyfL2h1MvJhmVxrpoBwLYTHv6AKi8aPdYbS82y6NESwrK5UVGcw8h6Qy9WmXvm9Q8fMHgTVPsrCqQQMewEtS",
  "key28": "5WceLHDSf6eLCQAPDDHK45d6RmNKvZbLEQBQG6wZSQFWD3K13fLDCQtZ9rJJdr62hVrAdqyRYJizaZmtz85ZwQr7",
  "key29": "5cHRWuL3E65QSd9ppgduzeasNzY5FAP1huLwwCthrRue2XmvEWj7MVRkSedBzuUtgxa8fbqDhgZ1zaUhEfkRvEVu",
  "key30": "aswm7Trt31xzjs1DJJM6ZbqnrdbX6FsZFMMLSN9qpdfEJ6MYNqPgJKDLExkuYrUEzhKTiLZ4smDybzv1ZqSxJ8R",
  "key31": "4EZp7nae4HTEJogshiQ3ev9PtPVyHV4zzYpssXwLhFqT9JFS5cTwP7jasH8dGRBJuDfAkdSzXFCCRqVM7pJV3j3h",
  "key32": "5Lq6NxAZYZvSmzJcwMNDw1XfVJgYhKHmWCrHjgSp1Hi6XnTDQjhbEkuWeZB5pmqwkpLRF4HohBC5NjFnRgbQhyPz",
  "key33": "2AaRTfBRGvQmDy5UaYXpTJfVrGnDujFqzSnwgEg1aziBSSPFUBVnPTHoTwvdQh6mJHhgGx38hKsXFucEVDbRc63Y",
  "key34": "2GVp3SZ2yGG3CWcc7U85y64JXJCHqBeYT48U3NspTitwJrgH6MjaQk7zUHbsYti63ZQVjckm1NjvhaC8sQ1RGwJt",
  "key35": "2ndAQgJ3vz1YBVtTBo42HuWxsNAH3rCgMjgveMBf9bKe7m8d6FNRtUuhL8aS4AFePiwXp5zraHS7edxN5xz73Tsu",
  "key36": "4b6EjEbvSVCiw65ftQqxcg7WZdDPyNMkQPA14U6sqvUYzZdTH38sEwNvCHMSHKmE9DqDfrjiDDJhTzeb53uhs4NN",
  "key37": "3z231HQQ2FbETf3AxhM8R1XCkUQ7PnyLJTTTowgukF8rnx2i7CAGb7sQUsf8St9GnuiWCzR4J1dFn1aYA2BKrjG3",
  "key38": "4yGme4C7EF9E3GrJmu2EtFAG1uddtcCbZwJs8Mc7NQuoWoZo7BQWSu5Qa6rr7ZCT8Xb2PqHhNntGaxVjSL8w3111"
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
