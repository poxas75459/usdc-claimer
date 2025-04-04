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
    "2wMSBnxwo57Y4HL1ZNtL99tbNNmMCNMa3PtTdZTECfDsiqDDKJJep3n9EUzQCTCcZcPaHU4UzyUnw6B99NbFMdnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wMncsqh7iaEhJe9ihSAcj9RFnzaF2ztDWEVi4Mk7WkfEdg9PURrtstjSktvAQ1FZAhhKdFk4AZp7Pm65s9SnUhQ",
  "key1": "615gH27tzEsrQX83CgzSvLLpodRypFFvrkDtYAcyk7hDxZmftiCKgydaHE8zqjaXJfuco9skpH97EavP89nqABn8",
  "key2": "raJ3zzvEk2hqB2fvycL8ToKQ56vqmr2XNJpSdJHnakCC6TeX88JwGnBnDLSwGGwDGkpruT3pVSVhsQQ6rPZu75m",
  "key3": "DZmhUGZNuzY8xNByHGNAuHQUnNfT2HkonK3yYs9D8TC7Ms3PWbx5vafAyBrJtiawfbxDA4ve64Kyu9XoxZoC8NK",
  "key4": "51Gdec9R1UMBbHfzRmF2dLjr8Dyeu21g3RKMXvbG8BgqmpmGhzQ1xDSQvA9opwsvBtaVEmTPFQ9jmcTBb5eS3nQn",
  "key5": "4jgGjhiAWAYFQM2dtZTbxeYw9Y1BzGekMkEcTEcS5a1WMWo7yAEGpXfFmDAYJAr8HwA2uGDpSQrygaF8LYuBJmwC",
  "key6": "3EBv4BYP1MKPHxitVi5k8wLS7iquP45QyuLD9tAtG9xoGskd1gfivRZLdefAofV8bmQd2nW7wrhdYx4U3dGrXb8G",
  "key7": "5wYMkCuDzaLufWA4a1zZVp9XUmin1R9XiNcNyCWvrZupjHcjDcaE6rULXTjX5onZEG1gwo5Fz8gq3QMVjCzGuWUC",
  "key8": "2bQA6T3fxPdd1s1cSDAknvJo5aaVPpq7rw5GmbfuDi16CUN13ddJKg38Xh75Cjn7TaweiVttWm1uQUkk6iwQYFvF",
  "key9": "55ZMRNQ6qdaGv9rpHfMF1bRWZY1K8hkKCcyUXCcGDzPGVsq8hPgDuKjNvPfdjd7QQtCdzWoWTckPveFfAZ5Wmfq1",
  "key10": "2bniGNNzwpXFe7yWYyWziSU9wwGfuptc2F4WirF97JjidscRUuyPYz2egz5e3ABhrMCMxzhfiQWLKC6U6ijtjUFy",
  "key11": "4A1YBnpFopZ1CGAvDnHmUVbsTTBgiRVQhr4gxWCWyq8qcUko3HW2AGiVZvAGaEnGFWvjHnLoEqVEcZrhCAj5LdPL",
  "key12": "5XKtHNDiZti6YMezbKqbEoTgEFE2NpbMwaML1EDZdCDf1tYqGYQdbx3HwXVgEmEPwosxUKK9uNarFFZAi53Ed5EV",
  "key13": "2USZTctquwv7SToHPpdoxQXaHp96c683uRSGgXGXtXGNrFmwE1QT2AhCTyL8NTtctNochH2K3YEf6AocwZm1ZPWQ",
  "key14": "3ETBqmMB8ZxmP1KZJULhhF9r8ecsD1m5CwCw65GkZv8bYiZkAPknGbQ1ZjeMDgfQ9v2tZxagvSPrDoA66aU6E9bQ",
  "key15": "3GMEyiRPNouAqo6Xb8Wq92QUPLJ9btH7BEuGqPTxEKqgtTyS1roR19iA5cbFwx9Eob5iqgRMPFkAD93oDg4Gsccu",
  "key16": "2jxukfUD13Tc3M4THpRZr2oHuhLR5TDkVNRWMEHwihZcLNFuvPK9aPzm26Lbknnj2NGqYv8BTRSiFvV3tGLW3s5Q",
  "key17": "3rDH2wsWpAFvF2SeARg5RqZG1DBznoqiUiL9G44j1FQGKvMEk9ffGvbb7cp6a89YSWwh2W1pBaCmLx43Y2mhJJb1",
  "key18": "4yKfuiFMr5p3t3AcWr9i5uG8XEKDCRBhYSYS6K1LNBCDQPfjSjarPtexqWTgepAQdnAneVg4bVh8bdsEmKK6L76S",
  "key19": "5LdczpNNMu1rc5tdGDgdTuozdougE2wQ8r1EWKHN5wHebbxqwAQcXuUftrepX42UPquJxRntzovbkRSN8ujjuE43",
  "key20": "3LuRcySm6RwsEG14vqovtBPAY65FUNSdXFxpW6ZqpPu7bSDBMnB6mLwLWe2vCfMjZdyXto4etdP8GcoPM4Kb75fQ",
  "key21": "413GECw7qWUyomVLNgT4Av7iKM7i1Q3675Bh77UxniLhRJCS9ZzdFP4PkZPuwd19B15xWtaSMJJRRQBLY49kFjAT",
  "key22": "4EXxhbxC6SLSKph941uSDAiGXSJcb3xVoXR8wQk4GKBr3smPq3WSEPtyrDh6ma1zZjQcqNVFj3pMxiFxyqwdZNf9",
  "key23": "3fu14TDmzusuyzPsLrcAidVYH8uKRN1YGk6MRHbjFrL5o1GYonu5TnwhvTLX6j8s23ywJKtgznAxuAP8btdot4bw",
  "key24": "3Ks8nnXjzvqcVjWPEQLyRzE5nFk2m1MvyyupHpZqtvsnwohDQPb92ZdSDmNS8dttghj4SPDYTUhdTdmqZiHKNHDX",
  "key25": "4kzPoHm8YfPSMknsDmQ5gitZde5dgMZT4n6LKCBWoiP2ibBYsxjmJaQEtB8MUQSerVdiKKWpdhgcvHmyZnnWjRUU",
  "key26": "5iVZ2SdhFruLX4bMbNeaWNXDbhQBmxCiPWD13xVDbuHBGFz7RhNAasDE1WbbLeWxQpjwkGPqnaKtpwEpBuAYymEZ",
  "key27": "379yCSLT72TGt76e8LZ5iivDrmNQmZs9SdF9Z5MkF4Ng76RUhXc3rM6oE7Ewqiz6oZRDs4RMdxQE4HNjoobaBcnv",
  "key28": "rP7dSpM28wawLxzd6WPqaXmaSubkiZu1EeKSbM4RrnGVQBZ3JgEoZiX7Mj7QXZFdqEyVN8i7eVYRTMjokPLBQ1z",
  "key29": "RJXRpAWRi2MDyZ15g3vQwhREuTP7a2dnxSQh3cXCEsWfyUrDjigciaBuyN4YZaovhvcQM4xaNqYKdGTdicjifX2",
  "key30": "4wRHA5SgLDiLmMLRnD22t8wk1gASW3xn6uu2LnUdJZoeiccwDRzBARknWMAUyyHHE5yEf3DavDsHg7hcnU8zLH99",
  "key31": "3egHTtVAreXGGCrZULLtTYYjAiNvC9psQtKa1AvsWcyp4dJQu73fgNQG145sMCLDwxEDscbm5HBEUEVJFBiKiJ7N",
  "key32": "4t24QSF9XuHvQkF5a3ScyxLHxP1QMXEV9qRf28Rgp5xU1EQ6ubm447fZof4DogqMfBXmneqqwbNu9ZtuDicEDHPa",
  "key33": "3G8w8exym4kYH3CUUqwLXmA4tWbENpdPkxpPZysKohqFKqo3SrKnfW2A3u9AdFcVYxufWTkdq7pYHHN3mkdPVoDf",
  "key34": "2ZGcjqzoKy4yftXMmEq4nYhkxZfiMqUETmSarah8FGyg5t2qKyUQVCJvv8eHZUcEkp7YbkRCZ3bcPmB8ih1oa9MF",
  "key35": "3pvqzRGeni4t8AswYnxnNwVKSRQwXW3Mu9Ciz9fxwrt2MhtVRctcr4SRqbNP8vzeAnmaU9RbJ4DspVibERVh7vK1",
  "key36": "2ukjJtLn51sVSQS6NHKSsPREGEnz5jxM3zSCKtA5BFXFsTbqXRhrpsZH3QAszkuyvw3aGFgK2kPwaknjBtW8hUwW"
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
