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
    "3cYyg5KH1puS3PXo9XcaHrV7Q5Xe6rSMjPp3grgfhDzTkw2Dxq42FDU2VCG68zZhfoQtME2dHAiFin1EP8n8HnZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t33rxPDLHN3MkvCSbxQF5cjFfUpeMmkM7HWoh5HZi6tma3XT7Fdb7Ser62s8tsSpzSeC7YC9Re1ZjAL2GcSMcjM",
  "key1": "2hpGngamjJH3VusgUPrizUEg2VQgfQhMNpSL3bK6wBkZrdKEiUr37erQCVfvU8BSrLSdeT36Wj9iUhirs3dPVBR8",
  "key2": "2S58vmfeTBq6oHPNW8DyUC7KV1AbY9ufjT9HgaZ5M5TVNzWaaAzX1nrEZL7d9Bob1beA8ShPYk7T7PnAArdx5Sy5",
  "key3": "2XZMHWU9RnH7v1Bq5FF5J494YZSkpai2XefuHTqB2kYSB9oWCRzxw8gs2GqnXeLEg7ACBcfSm2SV9jBsSfHs8doX",
  "key4": "3TtdnQnCFt3NNUrT3BrB2UNn6PxkTH63FquYNnEqS7mng2C1aje3euSuHEhJhJXb1kosCpMiq7qfnEvW4L3q6oef",
  "key5": "1V4eGJrHzdcGAx9cgF3TNjpELLcThej66LwgRJh4vjTcHoBFzP1gVfTgxepASuhSPVRhY37tnxz1FKR7sa4u41y",
  "key6": "2PR3MoYpxqnT3dBGQ6RKtjuoLmSRtetdLzxfJNo8XVbriBAkjaaGijhPERGv6qKjD9vp53pUojrYMrLH4o2QZYJr",
  "key7": "4j3mfzx5JkAXu2vq9EU38zYBbKku6UntZvxHdfxLogSVXoHZeaCvdRkeRkt4HDRKXK2wLoMwmv8j9d27mT5CKojT",
  "key8": "aMJEUe5HbxT3JnUsp1xHyMJKhyRSgJdbqrsv3P6EBvVmXVxuub5SfVkueec5Qgvtr4efXUSb2GUQQwHY8H1HLQo",
  "key9": "36i8qx1kJB5oiiMftLsuzscx9QN3SeUsehhxQ9rcGkM6RVWgA3uqLKovcFMqFKWaeFGssou7tniFQtUNA3jJhh1s",
  "key10": "2gLww3BaARwbcGpjmMSD4fzwmEm5xZkznd6zkewRp949Fm1KfpUPFq4bWaoSB4kWh4TqdzoC8MPbsQhPXuaCiiBT",
  "key11": "23U3yJJ3wwTQbkgj8YXM5Wv5r41CKitRHNeWB1s5jiQnZKw2nCLKGvzBXwCEV3WHujwHiy5ruQL3WCP2TodtZmw4",
  "key12": "RRkW54jhpaimgSsuPtgS1Jt5MW2C3vP6qPWBNeCE7BSUvgduNSWKHqg42mG8p1rmjwjCiPxsCKgtp4sFjZdwJsE",
  "key13": "4QJh7TDPqvTHkdEam28ieNmULt3FWm4t8nzWcjPKAPxEsonjVf3GvhGv7CVvYdEouPG2dQiShcq4bxqbDY47y53N",
  "key14": "jPtuxGtJnr2m8vvcwKvaHF8tZErSfn2dCNJhHD8usumPnFA2BtrbDX8dhUWEiv6ZVxogqpkXeXy6BZy4hNdP1fU",
  "key15": "rP9a11cQdtEd7W4bcUFXTFqTURSQt2Pe9QDeRAwnwmQ59jQqGAFxpwisbN5XJ8zSqNBBcaYP14cGM6E72WQx81W",
  "key16": "5SjaSzQDiNiLXbgEE759tHkTf5NU7CTfw2pkFxg1GsTdwguZGsLkvL79TMncn4T3HNWrdbEU58cpCMTjhwfSYvTf",
  "key17": "2R1AP1e5Pp9pp9jxWqm6hRJjbT9mb8c6VJifJdcURDmTNgvLW3SAdcZyUXV1Kp8cLX8XXyjgjvez6u1tNnyRt5CV",
  "key18": "2afV1JK3HM8Z2WC7wtirEzZ5RW6djNUs3MvuEZyhP55ze7ZHJisBbNxmUMZ8mwfgvik7ToyX3LHmD7V7KetFUvEW",
  "key19": "4Mt8q61VuaGr3yUtRKHzo1SnsT2CZwqkKVMiyEK7NVFUmcY3BATYJ1vFLkVKLfFYx3w5LtnnNp1dUACDXTSh8VDk",
  "key20": "T1cHNvLkvtPLSput8uTD6kgpnhVnTxTwwFXDrY1GhYjcWTNiaKUwC4UXj65BLiiAZJDxwcyypFkX6DwucXuqCqW",
  "key21": "22jx5ksHsEn7xgUMGPHkCYXKe9P8XSb6oboiK8FAT5uozucuKP8oRFNw61eLEzyjd1sYTwDXEYBjQeUYb4CLCKgw",
  "key22": "237f9CkZU9RiVQb5pbaoHr97UJkuukyhBWweZojvygSjfJQQWJNxS5diwQgHNiNwAn2oaHsgu9HaSjC4dTktkPZK",
  "key23": "2TsR3tzepkNTnSiQ7km5mmrSmY4UHRnat54wmPiqVLqAkcmsR1AXKQ4nVYwjHhxQSWUoEcnRscCKQwR7EhcMyPBe",
  "key24": "4GgHR7Zbioc8oCHfKTyxpSLxKGAUUFXhEurBAvYNvHMtdAZvTEhV7nCkNNcEn4XdhwQVkumfKCAmdyBLkBpmVuZx",
  "key25": "V8HoEp5nGuGKkMdcrw7KdsQqcpnw1BCWkc6URNEnA8q95AyEVtFWicnCjVNfELugbFk8R2JDdDM6MRDotTPhHVC",
  "key26": "9VB7rFv4ozynYMAm2e8hwibD55CwgHHKSbisHHpBLYagQywPPkaCTXapE9cYz9x7NZA9nHbQE4iP8twMoZXcnNt",
  "key27": "4jVPgM2hzVxS3L5GCszsxXtkhKGu3NcksPM9gecqf9ggkpTFGwKuZMDARVtETdYUCyYHLYeMr9QmFjeNJ3zZ2vRS",
  "key28": "416LgojXbwaDUkNWiBEbHb1Ap6R8mYSSP3JcPN9YDUA1AB9i7fgqPyVJqZEuCZv61M7r7wvw7hoH7R2S6M9MRyXr",
  "key29": "3RGd1AjgFSLXuocvKnZGXpvdwUauRRunC1iFqWE7ro9JmqWa87w9GFM2J4mY74CZ88VnWeX4dyBmfacpAed1JbqY",
  "key30": "t54GvQPrCSjQyxHFdPz6rPYVzPFwrYuco3uiJt12rxXpqYy9YsqRr4EWMSVmvEeP7FbgJo3hJz6AJWVJyoBejbH",
  "key31": "34TW6oSFueEZXf5EGbuTEdo9FLQVh3mrKWQLhrncZCAVPGDta9vogJ2js7aEDdnJaVvqybG29LoCJvhpfV3trXVa",
  "key32": "x7Sfkm1pRzC2JhbxNZr96RC89Tq6BvuvjCwRqNUTbY8thDcnGYJKsVY1uwuopmbvAQ1cupRUqjzgQeiopo4Pe5H",
  "key33": "3Ad9i7TkyFDedPsiUkWw8dDe1Uv7bRrd4DzoH1NJxUZbZ37sC14JLHB28DkCuST9bSrCSQDYPCzQMzCXzS5yV91Z",
  "key34": "22jVixuaoKXyq6CUHfqa28nMXgt89GFDdrmBzDqTBdbAJ1YUCD4UUxmhUxMedQmU5jftp6WJyejhtoeVVZaps5dF",
  "key35": "u6WViBx5JxYNtRWq9opW7hSLA39nzQw6MJeeV3e89LGktc9iJsVxM3DKmWppXmx4PKhwv7uXTeArtuMKXW8rkHq",
  "key36": "4X5St3vpb1eW3pfzKMrC3WbgJ6XkxNzuXnUxbSi3Y53tC6BvPLp6xPtkPy9xb4sRBW5ngzb2B6rD3LtH59dpBdxB",
  "key37": "6VvZYtA7xSMr1ycBZr8tf1dYz8EvTVaLry4xMbbQEeBii7cQBz7cXV5WF6zvbEJfPhdkuNf9A8p2S4paSCsWrk5",
  "key38": "4G8y7FLrCWuacPchYyGvX2Jr8Y7LG5V5rsGxE5iNaEGGCg3Abvb8LRxQnmWHs4Wwjo4i82LYiTP8C2XAgCy1ZwdS",
  "key39": "4CsZUCsTv2ZYiNek5zNbZkmSXv4HvdjoTrL2sWnsz2QyHzyKTMaUQ86DY6fvdPBxn2oe6T5PGguJ4sLDcvupYoVx",
  "key40": "4x8EJ9DYuMKiXzeXGfPUL8fgsBEQrvFJWoRdDnNarT1K1y2RqgmaXTAhEC2yfCiuhCkG5hmfx5H9qk618tPQaAa"
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
