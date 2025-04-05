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
    "4ewFrkLbz1PD2cALd9SkXLSWaiCutZKhD1Qm63Ny1S11p6PmavhkqTDvLz3Bd7YBfDVJAjaeZ5ot5TYaHSXQp4Mb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vvVoC8xtYD7deDfh45gPbbsDtZAoqbJTK8tfCjy2azkXNfgk2ggS4VTHbufKHTmgNKWFvZHLdvUtP7GDWUhRwYd",
  "key1": "5rwwcAYHL1ujyCoyvaLKr9vybqdJUyS9P6Kq46tWE9A3rkSHWktJmvmuBPwf57BqCHAWAU6bGAMxUPo3mnzL3jNX",
  "key2": "q5SBsHWQ6rDSEM9EF5faPUuqU41yuPu8qGNcr2tNfCYYA7Ejgt4ttsfWWx5ixMktsmoFtKp7GBCMfXnjdeHrhqm",
  "key3": "2j4yge4giLvRVdmQm9XL75gnGApbN6t1ys5Sdim23EmkNBAiTshLX1BzaY3MTHr4zxNseBNnYULhmdkVhK5JmVHA",
  "key4": "WK8C7mvjbWzpUcFG2D3fXp5fQmtvaRw7miw7W9zHAMzQka2xThz3niaBk55SmmctevbFdHUhWBitLD9K28tGPRL",
  "key5": "JYC4ycDn2qhoFsVguS2BEDdrbLMr56ovNQjFRJwmrUSaQ3gE1TgUzTTX4e9gBGt6qBPpeT1LHBxWK563TYdwDko",
  "key6": "255bSymf6XWDRA9dBjUKGnQbDXVB8C4xTdH6vY95p9oMxpcy9VB53KmZSNXfCXbL5wibLeZC9miwoTWPL79sJjJq",
  "key7": "3Kur4PMzyq4ais9PFNr3WXCvFU12vuVaWFVekF6UX5ccnS3mmpQe1gh4zuiWHwRienMy7kGiqg41jEyDEJJRpwPj",
  "key8": "5t1opWAbsfRQCKpmcU4qC7mFX6g753UQNruXF859UfXvkiPfhyuLfCLpwyutKEWRunNUNqxdsgJNkyporaYobKTG",
  "key9": "5RiezA3SHhBPBjeK6PYS8Z9hL9k1vXjjkGQRhGWfr1iEQUqTXfT6dCiNneMJzUqFsaeSbWQJUNbA4Tkz5N3niRCy",
  "key10": "3gebe8odNm8BYP79dYAtRPCf64NvPoDgZwp8E1Uc1u25y3HcjZPfc6WZYcxYDrpVPBxGQ8Tabyaoo7febJ4kHQ3K",
  "key11": "28mvPZsdzNXmj2CxPXRQHVyXEwQQdVtH85byN5YBauebAy8nou1nVo4vtDNHURFF4Q5buzd37ZE6NGSvQA2GQ4s2",
  "key12": "4N2vyzpBLL7CqBECbEdU73UtgE4gWBt93D9PBeShtT5fEcwtPo69424ikS2Vy6VaWeoh4myhs2hVcEtoVheadn3q",
  "key13": "2ynWx8yN79WwXjYQX4swyADsj3FRu3qxr5uTNeqymaaaCof15hoZawFeEieCiGcX4dET3Kmcu2dTnCAP2sqL9g49",
  "key14": "4YAXj91pCeHJf7232oqddBYHiTiJutyzve4bTsozoPsZH7yHEPeHetCFgJtU1wY8R6KuhRYiLBg8XAhQiqKCTi2h",
  "key15": "sjKbwUfaQjjvHk4RvcegfKZiPL9CyR4quSJBiLkhGfBAKKs3M4e6BMWMuNyXiHsVtDd4KV68HfarwbAbHnEfimf",
  "key16": "wjHtoRqBm244YDuAqBgyLzDzhGtSCp2tJP1K15BqKoWn4J6ZBbqRjgUZJnCfD91wzDi4BREzuRgb4weipR2h4Bc",
  "key17": "3Pxq5hYPhun55oKjQtJPbjfsmirCNJq3P9MAPv6iQnQ5vvChu5vgRUFkoT3eVBQ1H2opmAcpuePhFqMjeXoE5Zpf",
  "key18": "3u1DYC32EFEqY611vn31KYLjPA3ema9PGXDvpQfvgeGrdLXAN72yjguiwdhSPnSxAEcWRLh2p2eKNGSTaSK8p8uT",
  "key19": "4vp1GkKWD8CH28WtjZFuPvKpGxhRkJyga2jPirkpohaAL6nJpfZQ98daAc9QC8sZt6Zak6D6GcNg4vhezgyMmm4G",
  "key20": "4kUCij6H9soXEnLRznJQC8yg4ANtrhVHPEfDftjHNNkD2g2fZLBShJvBsPaEqwpziihdJPRGbU3T43jKDoPsMdv1",
  "key21": "4q5TnDfzZHxMaVcm5AzqhWTeNyjGqQN7t7DrLEzU7PkMWt7cQBG286qxm2z9HnuSXxtdaj6dRixwvW5qk6sGMCC9",
  "key22": "47MT5fZdTt17wYQNa2muTsLAquq6AmFYyGN7kTQDTvo5n7PtppTYDo9FntFPX4detLrUtwGJFqNH4BvAbhwVF3o5",
  "key23": "ehbtUUbmZEip5pBczYXmeHnfkSRVtApeV8aR7gDPRJvhdwwCHbcyHhkVCtp3sMftqwyNDaDt1sURnh4Tz1rXe1d",
  "key24": "2rKGdo4eyiVxKuMh8V64pTNWopEMGpcEp1ycUREMUcipeuXvzgEkC7B9GHU2xgQBhxyyx6GCMcu2X75mrwf8f5ja",
  "key25": "4tQHyEGo8a371Te6iorrYM8o6sRUGHVA3kjfntu6L3fQjEMX4gDFYFJHxujBfFdchhMAauhgHc4quxzsauBdxB8B",
  "key26": "41s62uJXUazqwjgQ5c98w2oFBMK2VraVmrQDEA5DgYqbnXofuyX3NZLvqBAGdNY3swFFxPJxNEAQnrSqeDCBYsJc",
  "key27": "4yMHBCKETqTNyYqFM1m8hxCcyyMrJxdY7nY9ct2P5GJkZpZ8QvPk7fz1g65t9DaqRLCwEJpQdEaftejU9ETpiFRd",
  "key28": "2ej8ukc73MGQkp7YfGBiDCCiqWruAZa4YBuoMdmemT7WTSAoEQWdRmmP5McDzgwjCow8Uucp7igY9f9FBsZLK8r4",
  "key29": "4skGjPp1LEio753DjubSqDSQvnchF4xbxJiGHCq2aD2rkVjYAAQq4YvzPkzj1XZ6V6AAYny62bKNN1ggUawvvVm7",
  "key30": "5WwknhDpZ3s4adWUy4LL2fHyQn5yGByQwnyb5oWESwdd1K39qvPHgt8cyGrfaQ7KR8ujUhyJaNJrmYFngNFPPC4j",
  "key31": "48V9STt43JAT7spaB4eYsySkrhvWRzYFa7JUa7mqCqviUgbpJhHG4Jh3RohTiXj8gxyYNuhnc4Cic6YVsn2jQ1Vh",
  "key32": "4jVLnMSkfDC3X3BJnYYNQk3cVoLpnu3n9B2JrfB5SePCuw8tVpU5u7Pp2RPfRJHF57PHDuKGNPcJ1qxvxtenm31w",
  "key33": "62P4N7nuQXUXGXzjcQzTobCHY7kg9B5AaVeFC1pU91x2npo6wsuaqc7sZGU23jRHQG5xzUsBwHwxf6Ef7tpeNtXK",
  "key34": "3aCdvSBkoHzfPJsSPgkpoBbEtCdJWE1Jff6DjSmMjcEnCrdRUgd5XKjxHef7gVYAj31snwLaZEpLXetU5zmMEDL",
  "key35": "d2SqaTBhKoJUNhyFhcNmhCmJ7sg5SXvPLEJBEBqEq7SBtk82AAiuqTNZczeNqu3aW7XbKVFknMmvWpdJmaBisTS",
  "key36": "5ECfqL5dPGHvB4omvd3zU9mDWyzgmwgp7z82ZP1Qyzfd1Rvac4C1fFbigdydB1q9xjrTAAhNKEJsa3gcBBTvR8xv",
  "key37": "5pXtHCSK169DmzLsTSgXgrkYZQgmCypndYFqwW1YSA9skPF34UxHCvsMrk47HUYNTJtAUskF6g4u6iTHSeVCQHz4"
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
