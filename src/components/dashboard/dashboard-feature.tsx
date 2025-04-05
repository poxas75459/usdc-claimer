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
    "46axRypYRVPFUejGSpaomR6VhrfKA9SGkKP4oco9zECuKPs7Bm2UfFG67WFgP9GD4hfj4QSJ428NKguMaQVuN2VK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uJRRMhvHNEGKhCpYAiMaRwTXuozsWHnZT5yWWYkgfj2VLDs7cnnf6eYR2NA5JsvKTJqzj8SDdvAMZ5YGj6ckjMN",
  "key1": "3YLcsCxqbswqK9d9mBRGfhEP9EMEkSPVqvQQURKH2N2dMLMr6VWw364ZsPieEcUXEAK3Kp14qTJazB9b95WgeVPz",
  "key2": "5VwoTuntnPnn6EJQcjHb8umTV6Y4LPCsdCHkMosCwbHpzKhCSGuVUW4CQYYgrURvHC2dWQy8pEFSaJE8KxLqDz8N",
  "key3": "4kYkrcjfnqjn9PUZCqnKTgBHUw8ZkGLnhvkm45SsnFv9opC9AbhLLC6oKqEvtzQ6tgxqXpk6tiM6qV3hS8xanfgY",
  "key4": "3VwxZgix1cmHuLey5v9SFh1dm4WttoUMjHdvQkpDpWeaPpKZmLAjUYHnRydffE8MHSAPSv8fx7n5vi3pnvtMaA8j",
  "key5": "3P1tBNmaCJg4X4V4ei8zUHdLgJaRoUfCBJ1VzD4kJNY7c8DPhHmAYM2KeWLe5d9TuB2p9ciCEcaYJNc2h9S6GUzK",
  "key6": "4KUJhac2UFuxTKFEvCTGiSszUSiE9b6EzJN7NpkiYEodgcmfwXQS88HLyLP7K8a8Su3v1YoawsqjB2iFCJQ6FGiD",
  "key7": "3MdmXqVHoc5yVYspMrXDBuo35TQaPLeXEjNSFVNptkAj3sS2KSdHh9rDr3DkKbewirprhhTsznfmhry3dMvz33VC",
  "key8": "5x8C31JrPqxcfGxERrLDuUJPhZgmcAv3eB7xAP7sV32vsMUyqTvWcTwxmV7MjZGFHrGwywFBLFeEdc4mYiKqP2c4",
  "key9": "k8hNwr1DaxAEcLEhvaYFKE3b9MgMPKirGsfzBAEUGTn7tiM5iYNiT7auZjZY6G1aFjNfnd9aG4pTtGH75UvNaAd",
  "key10": "2r9xihSzJkVrdJ6zz8wLMCNqCgznHqmrFePvLZYDEmTCmbXE3UZSPX4ix3kvkLqrTUcNYgwAUn4cB8Cmc52XbKDc",
  "key11": "23M19Z44adzyAcMFWDMir4XNEcSbr4MSLeGbZiDhijUVthMDYtFt1Dz9cD2MavoKx58SzDqHrPh7gLNF79R9PgJy",
  "key12": "37DuteVbg9v6Era5SEsfikCPQ2FnpzAxfwnvXSJsFQhymU49oBeBq9PFaVjZjBmVTd9upSBEUKBkfmpfTo9czCHR",
  "key13": "2TzM5LCEoZwc3iBTifjJW919JmfRT4QwFfJcMZdYV8G8yZNmjD1mL6qrDsNJ2gkFyBQkVufsZPEhAy8iM6BRYFdT",
  "key14": "4ounzpTWXx6KZfScv3iFF3mQjS7ES7jCRoRr2hfZnHrtdHphKBRQJSmZemD89zFvK9Ee1H4PeRc3fd9VYg2rQpf8",
  "key15": "45eDLmmLaeJ782QB5tDrqXrLPXVZkgU4hrMeiiSrD4vh1a3M9Bx8L2f6xhoQNx5kFSbP8biDtDfJobnxkyk8vC5x",
  "key16": "C8rPx4hhZtk3AsU6CVLh4nStLAKxXkkug6TrXtPwX1gHJC5c7LfhY1pbA2fnexc9E6QHQ9edSt7AkzKLoZt8Tg7",
  "key17": "2AgqJN1Mw6GqzA8RWa5ew7Qq8hKKHkhMECddWdZ7rYPV98JPiKmYpeTRKfcfRMcW4zwCCi8b3Z8tsY4q2V7mBzeR",
  "key18": "2dSrAybekQeWbTUCnUsT2uyco7JBcMMfcmDB9tifsMswJsEEaHXQ4xm2s6Nww9pyKuoCtSJ3uMpRauw1w6tosUGv",
  "key19": "FEgcu6WbdUPAQwkfzX4bRT9kS2z7Uo89HioTYw7Rk1VUzDioVueNeKuqZEcUczfgsHfxREKxVq6tQ32DtLhXJ5G",
  "key20": "YHaZVhsCedLEiKg93V8Not3JxY49sPgDRkZw9cTz4ruyDMiPccfzfbq4zML1S6m4CceALodcHeYqEuLSm5F7PzQ",
  "key21": "4Ut1hSiyG63Xf7zKqMoNTRiRHsGyqyUpUts9EuxcfSJk9yEgbkvLsbVgRPrf2Azk4nKeHjQvDqRLFZEp1mMGwfao",
  "key22": "s6NPqd1CXACWPPZ1v7V8wzKUxZMj6KcpwMKhwGDw2pS82x9qZAMHeTPhpEeHVFSWLRypiLkC659D3XsrHLA7z5u",
  "key23": "56UQnS7CeFimqFR5qSdjjeY2yypvhhr4YykUFVRytjBuy6q8aVmimiDctn4cAtm5CMXqvfnz56sYnPJ2dMcrcdfA",
  "key24": "3i33ht38Lm4h8FPKVmNQcyNQ2oQjhJ6wnbNCHtdTefjCgvBLAUWeswYCgMCNqy86TdbnA54GVxkdjFfBNCdvpcdt",
  "key25": "CpJcNf4Uo7noo3YiCpwE6dfHiQL4SjzXnfZnY4dSoDxBBf5jQukFTUgNrvC1F5PJhPRaxi9tEKiig5TkggHPB8y",
  "key26": "3xUFotEWkEnm9Q6o1CvSxgh9YJhCv4paXfcaC7AjnX6pXZtarrALbDXsqhZJzC1agKdjqeFRg8uaUHddGCDvLNvm",
  "key27": "2Vvrhp3RKD4c7dTyvoAtKQLg1mNrMP32miJ8QLduCxUk5F1Yio7V3kS1MMf4G9axTWmrRecEimwCC22FWTAvcRyM",
  "key28": "3BEtSmwhR81YXnfFGAYgcKTFqZRu41c5NUnYyXhuQYceGnZ1EpRjwZQq8nHMkayGw6bRXCXAeZNU7KE8AMHEPuCW",
  "key29": "3UfnxsJwkuKcvqs3BjiKeKXURctrZPjjJZTQ4TWuyzhBshf86eZNQrHC8fK4T6JKpp8MYEJPrpFghotTETK52kKq",
  "key30": "4F8cftKcXxUd9s1gRF3Qnt4Hn19sMFtssLdiQduPFLTMMFeEd6TXSBDD1c5dZr3RVirRas4ehjuryDcDNPKcRZne",
  "key31": "31e1hAsVudH2qhBBJPyW735bruhfUXmX4TYxnidWNimjbbvYBjvEsA1ihjKSuqVtrvbMaDzpXLYPGjQhhNe8jm5B",
  "key32": "5mrrFTrK5tA7wqzQsVdH8svWRHXZzTakebRFin2AsAK5WKQeb9jp555JKVbUC1UrrjfAnH7er69eToy1x6HUqn6t",
  "key33": "22NaXsaU9HVcZh2JmG2QXiJYAwhpuNZUwFaDMuarfvMWFBA86hPgoLjeE6tyRGbgjjHE2YhrPXwEXeZQbme4NgCj",
  "key34": "67BThf82VSTgCxXVKEQStEjRK6bREfv8JTKpsxzULHGguLqzPF1ET1KSVinngqEHPcc1hUwXdtKDzAiwxRpV3UUf",
  "key35": "5Fnjf7Ep6PJg4QLgqtTc6b4f3tk8t38potCsPuXL8UbDhqGrp75vDZrBsoS8H47MPoBcnwpAcF3jpp8wuKiY3krE",
  "key36": "23u4U9c5nkfCZq3h1GJx1fUjCrBnvdxck3WCnwSm6Uydx5WSytCcAtJZ6GKuhk3RWAorbYMwMRswnVGj1BayaCMP",
  "key37": "Lx92W2mkPKfA41x3P5SYKZZXMcK9665Ycd6wXbg3iA8dvnJ9Wyi5s93tfMMEKG1HTHq7ihcpgzVeTUXU4EtvetZ",
  "key38": "5gUunFVvE5BDYWKGkqoqevcY9J3vrYXvQWXEkHEVgjPTKHCWZAiFjQADQFexMQwhtZqv2wZ5RkaFt1qSdxc7Wiiv",
  "key39": "235WTiYpWNP8ZcjYfSQbt2KwbMX9EvD4if3kwfUhEtRCUc7Bbeq4Kf6winEvquawSvYDPcznGzgLQS4vjihoGHLT",
  "key40": "o9o7fCbwSFmAGPX83uYnogKzSn9Y24MFGEccC7fxxj2cDnzzUHFAN5tgivTMjofbxGPHNE84U2jCEteyHXBfp57",
  "key41": "65RuLFqKbadumFsb9vNYJAxSeGR6WzD8ZUTTZyvGUAiE6xKyV3CqALhaUnCaSupesJ1igZ3tBHEqmp9ssjELoCEF",
  "key42": "5jQivihDm5sjMHgvntHPKpvH4CVpxwR3hGMjVC5vjdHQ2LHZwVuvKcC5sU7zQr4tDH1sM3h4FX3dvy6Tw8evJ6Ax",
  "key43": "3SZmdA34KuyPEx2d9P138HxMzFNHiuy4oMP6TmAX3suQFZ7B4iqwkuEX5EB7vUV2TU9DNbLzpB9ePqnEYd7SXNL9",
  "key44": "2smnJMRuGJNSsdW1efdo2qL7sh4WZyd42KN67UAVaNDRrSfqVJLhh7dua1Yex8p4ECUeDMmb9Y2LotUMXfXrrFtX",
  "key45": "5gN8irfrJqRCQJKfudzCSutuvG6dpUt4dQc1nKA3y714C4SSQkocWx4HUfbc88h2wfLEmVAcCmZtUEHEEzZuuB7L",
  "key46": "559xEBG49RqvfPQk6CoEh5FazBGsrFEWMikkRK7snRJ8rZtBQX18R9EiaHWEhYqY1pJWFDfZiYja9yAeWigQUEXH",
  "key47": "55DpyVkY2Sk1W3VXYQC4B7Ay5xbynk6p6F8Xf9Yp7tyX1xENZUdDqusTEMtqxqLdYsmBS9bikHaNrVqce1DbUNSx"
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
