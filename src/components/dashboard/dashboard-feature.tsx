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
    "5oy87o62UXx3MNkiboBRgc2x5ZatbWPWa5HpMzaGFwwFjwXH9s8VqSfohYwCSZRw5ow6LHSJBQVBiZir9ZBE55eV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MzDJ4M9apyUtteuRDjgYvsX1tm3FssmfPgqngX54iPYyPYzvUpajJcPbEmoBckXEsvCNL4go9ZkLPL6FeJU1m1D",
  "key1": "2xZ3E1PeLSMUjaK4vpqfYZ2xuHb41UMnjccibxAanCvR5xJuu3LbBXFjLoQFEcP3WxLYtSUtDRgE7RnZf6jb2AEc",
  "key2": "5D4a1JS3YeQRwVgK6jErtEphsLgMmCaUhtTvCGAaD6bkEtLgZSkeypykCmm4WAoRV68D5ajUwoQuBexMMrG3HZm6",
  "key3": "5VJzev68fQTkSRCLD8mKupDwoBJKEwWyGMCNpEfvwecELfJRwRRWggTLNMNgqqAo8hq6GBGNcpeuLFNvtf2yqY3y",
  "key4": "NLRoZXJsVo7K6n2sxD3uVDHJyvo3vCmkXQqjQhmcMAb8AFpHWH9bCCcBXtFpx1mEBqDTXyxWEc8UDdDuKrS9trv",
  "key5": "2tPZ8QZ5rHedwXUkwUR9MMDfQcCTpfxhbiF9kdt1k6t6Y6MXN83MvJzL6iJ2KFdjHNjgMXD3vac6X8fZszrxeQkw",
  "key6": "2JtZo1BSnJk3K2mEijN55zDqJrPPVE7dqjthQsc453ZfPcdw7XoypwPDG2A9nRaWcgcKEMNAvP7vV3iuHBAHfpz6",
  "key7": "5HBEejGC247H6psw8th8x5WNnuNmWgDsSMgpNUPSgL27JaRLJ28paoBFV6KY8W9Lz9gWiVw8ngd2RS2EA2pEYncC",
  "key8": "3A4omiBfTDrQbCWQDbDFNSAboTThwEkgeikrMtzenht6PHztN7ECXfB15m1qN2ufWimbYARwq2wpVCD4vGwLGf9v",
  "key9": "27qmFTx3hM4Syq6TriQ947axWbFndSEjd7832VQ5EVQErYPAWiA5RzRxYRwsRA4aFj16Ta6HHwk3aMMK7JUcqLA6",
  "key10": "2X6fE4twThFyKVdypSMEYLHfyZGirL3TR4RFPH3W4dALMgK8A1cJk7FxXE5PaJP8tuT3huaCj1fgAChvAFAVueFm",
  "key11": "JCkeqb5KnXLMbnFYo6AuQJznFeSGyeQ3jifrCTK5FBKxJH2tsMVZEmPd9KU3xr7Kjnh32PhxZdnjaeqn1QF6PP7",
  "key12": "viivX5oa6o2o9AUmZcTLyf8kChRJHbok9RujgfmpL4mCRR55NdT4LXecqsN5hCAAZkqbErh2QR7k3eKCVJsjTpW",
  "key13": "2fg4NWwgr5XpA6EfrgwBSrBFKp7swoFaazR6J9zC2rV3BPpWY8mN1XGc7kdSsgGtGfHekjAesK5gnQg2oCNtipyL",
  "key14": "4k4gpypFghVx3qUMskM3gfq8HBKi8YyXejhDvYhrKQFxMYAacLPoznFJjnBwdcsJj41qVzdQZseogpR4gy2Xpkdg",
  "key15": "48ZY7toXFvQodtUpnRC7YvuATFqD6Q5rsPDM7aMdte158VCFqDFfCiJhWuJfx9fNR6MQRwWQhHG8ejE87uMcyBdr",
  "key16": "3iZGU2UPQ24CQEVYzoBMduHQ2msuq1E3WDqWWVq3FqvR5XRQE45C9J4u8bFLgP9rfsrZeACVBf8Ve5isR8Gey4R6",
  "key17": "261dRjrsdwYDUjPmBVJ6JEGB97zyZQkF3cN5dAGeJfuejhvNLwSAQP7u3xNFtRdodVsBzSBoNdgzQCaotCn23Ry7",
  "key18": "PKiscK1y8Y3hYmrC8jcpzvXS1oTgSuSV6qG7aWmJC3JwrnKxUXBk1m4NN41pb5DQydBxo9HZSGWfCCZXy3H6LyM",
  "key19": "dzjLTvnXyfc82BdnvH7LnR2YtanoQimA6z47ZxHWHMYQqmDarEwDtMuJ2nBNDGbBwEv3FURZVGSNGxhn5PFWw7h",
  "key20": "4omUoy1sgDiy7sMNKvTrFXfJcFvrLWKiNhaDLx11oFDNU4G3QbrwKHZFDUGqSzNa3B6RNtRprLEPgZGtZPz2t2oR",
  "key21": "52YjaUxSdaDYrpvkQnvjSaYmwkXzR1JCtgoPgz7E1XfbUuGaoSMKLZyoHfDt5Wuo9icaH7eqvEJpGdTKh6v3nq5Q",
  "key22": "4657EtdkrDNR6DWrGk1Wa5typyPi72XnQkcxtNQxQrrMLbC6XWqFA2bbs2YgaUy68ZStrH2bTBMG12iyGSSnrg6n",
  "key23": "3fufnMNaqUZsYVGBVHLoEEYyU6w5RYFDqh6dAPgc5S62gSgxXZ7449BMKWPGJqbQx91cP7HEcLyHinjCjUaV6rS9",
  "key24": "2A7j3w4RV5oz81aqzM3jqTeUUwNLY1WdBSd6fALVaCQ5x77yXnDGnmiETLNKLLwFM21cDNmGMawpaKEwY9EVqFq5",
  "key25": "ukKxhyPCZpgrkX6XvsqPF4YFK6Vv14vKzRw6FMevGkLvoobqrQPdYiqye3nmiQ5Xpzzw9AJb4ZdUpgBEnk6eWfu",
  "key26": "Qic4i9PEhu48KWQVmmQLA7hmtpu8e2fB2tvPBab27vQiBTM1PiMzcJuTVnDUviFwXv2dQm4tMKoKfuhnEGrK7cG",
  "key27": "2Ktm3g3aMpaBbLrJbHk54UANnUc7DN8VGcpZibVEbxQr78m26RYQTHM23hB37Cgw6tfyfH9U5wQ4nUqVNDdJ1Eye",
  "key28": "2J6kPhw27YEYqw7KtRPvqEZuY7vwSeW64ohf31SEYEFmyJ4XCfbbHbq7odY4uGbsx5Ae1kEaAdX64M117a3XPhjm",
  "key29": "3DjTWqJBHoxMYRsiPBzu42k79eSDUb9RMbf3wMm6rnomeYRmriAyD8y6wTSxJ1o2Aj4VdhBm3HhaUWpqeZ9wfE1D",
  "key30": "p33mifCkC2KJ15nK3P7zQXmT6abNUL2fLcUFhd2vTZnuTiJMoy2EXdKMLkkKNQjurhXGYoezfjhCimLWMcZF5MF",
  "key31": "hnSH3vDkZE1ka3xtq92kFaPExfhUw6KNUZzd95TVAiU7CyQ3XNP4xP2b39Cjz6KB5ktnjRdnnf3HCBcoKJDMH3Z",
  "key32": "4k9NZBXKmThJQwqBJ8XHPKfmyKT5VDDcbzhZcttCMdHStvNZVpXQa92HNRVLvmQCZgswvsMhC7mJRbd6Aqrxb2Nd",
  "key33": "5ZuFwTEstvCdBMgksyeaFvLtRP74SEmbXg3t3woZWVWDgZFWaRnBQwjcHKaNgfhL8gsGw8ARuLtHHSpEiZ34earA",
  "key34": "4GwNfXNA76P12isAWxC8j66dE5ymr7YEB2fo4E3o8Ctpj6uMzFnmgmnBpRGEjaiRHppV9WJBek9cz4TBGq4FjNk1"
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
