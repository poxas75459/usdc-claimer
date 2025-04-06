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
    "3utncXP3anDTp7TtPKNF5pxByjYURzd6nS9nGNyFQjHmYiLovVrGen8eDM2BBWfJFqRe9iDRVkRxV3y2CwjEvtU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DWxraqbCjGhpPZDbqNd5EnnLbv67FzMKa5sDjDtydzxzJQ7zFX5UByxabixCnjJ6X2sZKzQ3WJByRKDXCUpsvpe",
  "key1": "2LYurjVBBtJrmR2n34WDvSSnC6xJaoXn652K3pXKAzVdmWQ1mcQPdHEeouvp3rBxRnyNJhnEitRq1R1wwGpLmFK7",
  "key2": "3uPFs3Qgit2kmLo3CsF7TYbcgAo284idUKXrDPHNq2yVzfRJXycd9AKSogH8zg5Xm5AZjv9tgEKGwbvNfn6MRSXV",
  "key3": "3Ph97TEenmtSo3E13AkTrJB4h2bt8Tp5tQgCxXpYeyNtuaRue2dMv7BKmQga519C4UeS94uWatahdRGiqiXoLeb9",
  "key4": "5qvPnbWyymNoT3tgHjVkGBqY6RRCidD5Z1UP7G7imLYWCkzf5GcQRzhgz68bgEmv26jyCbv25J2WDgw4ZV3SpQwT",
  "key5": "2taxWj3wEiwgPyLkBGKhbTDzEfatCdWVp7cVRkeGi32MfaLmirF119B1vK1FYfiFh6N6cbZ3VEC8a4U1gAePd2hu",
  "key6": "4v7cAx41sGGqAYeedNvGzz116f89BxR8paBFXgYnmieHVpKWA146Tx5Q4tC1UCq75zLbdQ6KfojNUTg5edgpiSxT",
  "key7": "57GxYWnnvVVeCWzymWTPYj9aDP8zuce2NpCtu8etPijofrBTkPRUxsCqGF9vcnNiLzJeCmidpDxuQRBCyubV2TcP",
  "key8": "xbwKku4E1dyk2x1QEoVR2bXMTU51ic4RdwSMYrkdkfonYBJTxW9mXmuqsMq8QSN7dxVa423t777EF5FqRouU9gR",
  "key9": "4nQgka94jMvCA2G9tx9NMTVMN5Ub2RG5ewCW5PmksCyWcpYtp2aPj1Hgx83UGdGCV5c7iWEmL4KXr6ddP4RRh5S5",
  "key10": "1rkyeZEr2seM2K2gdMEVZTxXE2YpXAHC1UjasqvstBBxHLHSizqZQfEDZWRGEmrjEkMcPcTZadHkGD9Z5KuXSXH",
  "key11": "G7HqjaGWh6jSNAUgQxwK2CDXQbabMiqZ2WvRWXc5Mxjkf4kgGhuMmL2WdzNEiQZQTE1M5iWQy2ZHjVFkcMn8dxL",
  "key12": "24wx7mPh7PtLci3r9wjvAWZvmDTQ5vMkQc4bbTRMk77bdDsUQq7HDxuHgcxABAAEXLsY5evqENN3KxukUhuwRfhH",
  "key13": "2NvacVfGbGGMEKe7HPBdG4pk3aDDaUua3LGhp8Z9DLfw5mJ1yS6v4menb4r4W6Jb7KJUxauX7dSZUfGZYTq66qWr",
  "key14": "5mfUKpWZSxjViN9zFCkWECeVuLPQ1PpAW7oRtAyrQo66qbQc5Dmd4o7pUAXqnJrbZ6NsXNmXTJMaC19dUtz2P1DF",
  "key15": "2Qg7ThPSi7QNSEikoXXsTb1yJcf6Jn2YgUozcZEY45JmHJhY1HHVoFCT8s5ZLcJoovSk8bWWyz9bvCBg4J8rUCHz",
  "key16": "2Ktv5Dpgw3a1NPMoZev5ExMY2ziufnQfFuAyPF673THuz7KPgKNw5r62qmaXtZdANabAHJkiSHPRaUAcfbnvTZMs",
  "key17": "3UHVYwQHDZMypB1ZTt8383PCKE9umbJmdndc2hwFNkGG6iTY3SjMFSAx3cuw3CZfZrUjNL3zboPn7egpJuv9jfH2",
  "key18": "5JJdcGVXoKduiA1qRhcDi9B6YyHRU2avKAR4b6vXCdxQrPjP9ZdtJpS5Js5cBBBVvYXLbvDm4GLTsH9jQ87MEZcs",
  "key19": "3sD2vyc5N9X6gFTh7swavSk8PGu2LirjgoqTsN5roKrMsW43ibtsXs5L1e6ibVG9G6V7QQrsmWuKLyFaBpWLHqRe",
  "key20": "pqcRHogLkJmA2nmgtTx6oBRf8aCzMEfU7aq7LTVP8MJXgoFXqqTb6HsZf1R3smnGQRcuAyHzgPrk3BqquCfgARA",
  "key21": "4rLNRHUTLXgm37nrHGAYNK31onvGhc2JKtV9pcjSzEKHeuNSqoZcXo471zYP3nmHbcXR2ekwdsnTQDrQA4yrgCB",
  "key22": "2SwUovBrNJTXJDEk1hpQJrLfSVRTCAyJtmA5SpRBDtsVStN3rkhVZXrELaThvGzHkpPzn8ix1p2raj2MevmGpj3G",
  "key23": "5miw9vixgKTskmVZCngeSifpGNyZYAFwG65EZXggT3sVaWFaWQ6zNSv1cskhqGZmPB4keXnwBm1eQCWaGUuGRfPB",
  "key24": "37aBsQ3EdjaKMAZcuqeW2hUWEcn9Mn3mfo9TGDqrPo6dKfm1yU8NYvcDcHkq9dD6oRG9oWdGLjVyZzJk6LecnUoY",
  "key25": "4dFmnRnzR2GLgSSVCP5hQJBqAarTCtVMxH2TVwHdgrGQPEvoVSCfXtQmyLG24jfoF9GkcNtQq4ydUvKgdWd4dw8J",
  "key26": "bzVp8KdnochCjdoQTZoh1TF4SfKbX6SbV46TgueHZBWps6NUh6pSUyCbLCEYSUPBJPhbGfU4WfmGypSXcqSQFkk",
  "key27": "hddhEQxPU3MhsVe9G9FRrUzW4JtEGL6S4TF87DNHMz2rBtb9qpdwwY64VAK1o2hEdCPv3L2MZKQRYuTKdQvNrnZ",
  "key28": "59zB2AbdZUQRHqTkkYRKTB7CzvMN2TNgHwMnnNoyWQiBfLE3Z4NCsSqMnU38jdCGPX3HC2GBTFBi8AEbGddogFUW",
  "key29": "2sn53HQi1GZyXwxMv9wCzdf4u7YQcUZ7bXYJ8xMQrxYW4LdZ5jKnuKoecnmgEtmASRoriaLMNDNPCgLksNq2khBg",
  "key30": "cWh8VxHXRhXgfPW1GB4m9b2oUaHe1hDU8Y3LHC8x225xTbqjoQGQbNAwBicQo9c4PDcsVKrJuBU1fRPLDqRN78U",
  "key31": "26L4vWzTRZ4FU3NjvEdxKwHENMgJVdEwiJaZZfCz1KezXaVnLmZYEoEdDhs3zymNcBfnjEnzWj36wEDAv2W53z5p",
  "key32": "4FYrp5TsHJWLqDH8WZiPSjby4gP4KPR34Rk6Wxt3CtCLSGcweVCue9ygDq31QjvTDNwWXegsvEciknMkfRdhzQyH",
  "key33": "Yco23uKpQVmeQqf32h941Yj1YoGjCnm9SXsWZzCT9DPFhDr3mkmzZFhYYYFq7p9fNdb6EhJQoM2KnVkc52gwXEy",
  "key34": "3ctX4hHPKqYVe8gmjjVrLC3Wcu2ndmD5TwtHSKoXEd3JxFPxKPG8724mFm4eYAxHrx3RKiFcp7qX47B1nTGG6snC"
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
