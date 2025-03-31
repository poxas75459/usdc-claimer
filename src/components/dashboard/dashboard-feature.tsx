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
    "4rvH8Vsi4YddACtmvmMqGM5oXNm2TrE1o5uMmgnNZz5xwoToqFDjmCxgRxvAc1g3Ad4ecBeiYGoYRsSmCKxeHgvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sg8yUtRipa2pdcQhFNCkfj13GCmtDPJmFDafsgrbDAk2RiLrPd2t6H5AjWyrekKcvBCQd7Spc3UxDzLafE8gotd",
  "key1": "8gH8CQ3ZsmqNoEaoyvyYxjdKkhMXzCLzLFU6LWtMWmB9UHGknZYpuMME28QD86W6BkUqEDcP9hbv6tbwDwbZ7TZ",
  "key2": "2HyM1XA4Z4TF7aHu4vFaPBNbwj4YDzWUb1LAR6rZyJWnMD4LN2bzPpnfCvAs4V8fHQSStyNSP2a33zKZooiWoXY",
  "key3": "3t8JiTL6euUvESwbXGVE8w1ehj9zF9LhCrnzEj4jSUNkfNW1ajkYA271QxmaLJwsCjvXidLahCYx6wpm5cjnmBG8",
  "key4": "5CQGKU5nzKPu2hXHVW3uYYPJXEJRTRhjU7of71YPGoTvfQuEtE63sJcGpZLKWN6UAZs2nVnPwF6zuWWeQiKNwZMM",
  "key5": "dBTgSQuADzw9usFidc4WoC9g2AVHjwhTnWnv4iY5njhUcXzrWzypFsm1VtPsXhKX43W4Wi33kuxEk8z2EnieGC3",
  "key6": "PGdcwvbjcD1BYT2iJj1EY6Pfrmb28YVvYgkoCbNDLHDvta3ceWdL62TGp4n3DerTofdmGb5KV4RTvLM7DehD9cb",
  "key7": "5tPkHxNCF7H6RC7n9mER56aC8hvsoJwX4PMkLCdEynosMAN3wL3o9GDWwJaW7FdFG9HqywkavhLSyobVDi9NQf6C",
  "key8": "4MvMG1bwZhruAY8jsyZ1semGAMASZf9BNMBzpANph3Mw2MPbv3oYYq98jvaR6ycDZdGNAgyJHZQG23JavQ8a3Qqm",
  "key9": "3CUv2gCZR8nSci1hxoqFnWyXu5P4pFioYibzq2SFyxXiZNYmUUiBvg621gJ85YcZDpSLN4M2DnTo1p5a33ThoCRx",
  "key10": "41hn2EVjFNQDqvD2HZnC1VgUztjhBZciq5eTB1AZ2ca48hn6KFkf6mkHM8bckxy1BAamCzaBxL4yUZmsJQKVJqAR",
  "key11": "4s7DcW2PHVWAB8ogWqorPQocQSh4qfdQJzo3QZ2fWEb1cJit9HpAgJEbd6SfiBBGieC3xSCSorzgJk8FRJhrBE4B",
  "key12": "23t9G8Pz3jBmiaqfSEvnQw1duLg83zTSiiTeC74xMCfnWU6Ax7qByTNaw2m2GQ3wHVgZHUcB4YigXkj69hsX9HcF",
  "key13": "5sy8t8HGdeN1s4bcw5vppqTXTP1yogswd6H3qHGxqrk3ET6fUc7qvnU8kQUwoVzVrii9Z36SXHKmkihV6uui5VT4",
  "key14": "4nBwT7puaNy7eBJ6UQztBDEGQ4qCXM2JKQ5KEFsW5BdXWFueoZJ61DKEYws7vMMkxXWEZME1Au7keP5trHhUcHje",
  "key15": "5xdjY7Z6sKvxRVr7XHF9VXQAamTjRj3FqDpdJRCEXb46RDSBizaGwQSA3iyJTRyKbnc16GH5za5y685MUAUwt5mC",
  "key16": "rgeDJwp349nrxdeyARN9N2zAAsa5TX2L1GXs3k2AC172N8SieKrJGsiCnANPvzW4X5Kz7kXn4SLPq8jgX6o5q21",
  "key17": "67JnEFfeEsoYZLsii5fjVfCxKynDkAmfK8hZTpSEcJqwFGjwy51ohudB79fu36QVRTxFtsx3SPjshXK9Uhff9z1R",
  "key18": "48c6VfpXFpNyFanhFLCxdUU4oB6u9Ly9KNB2Cqp9WJCbScWpXTTW37GpATH1fFXJ3CSLWqAzWEmY73z3u8zx4YZn",
  "key19": "2LRzdMuaveHBUG52mVcjUQtyQZfXK84D9tH3PJ3Faet9PMFhwBnQftnFJnQf4LiymspnX2oR839enLko11fihCVj",
  "key20": "5ziLgVcb7gTfaf4bc3wuWsF6jwpLpJZq2kwYCkXF7qwhrPDYzpLReZWEFbFHvpRrcUFWQneZQQ2ZEdcCKxD7BRLW",
  "key21": "2moSigrcquK5XSuph6eBwdMGSqTdFt4KzKh8cM1ic617QphhE2gxquC3XqqgffZq8CoSStGSy6z76zsrkCajdotB",
  "key22": "qMgtC78Jdoqzh4iUMZQgdKKvK42zFHkwL5zACdAem4Qt9afBBAa1TthKz3x7ohfQJL6oVM9xwNvEGyzbWTCvjDi",
  "key23": "632TwvvR8U2dnoEBUy1p3x62PNag4F8WUZs9czRSvfbrQxaMHaVe3CnbhrVq2uvRSMow2TuA3BhtV77oZ99u6e8z",
  "key24": "3f4zBt6KwJpjWh3KFW5m7BuJ6Ua7c9bLenT5eEHTn9tzrkD3iWvym7bQXmnGYUtvvoe2Ewxu256e3LntzzCxw7KL",
  "key25": "24VYmkCSRdDUw5nVtLo5kgYzodbdzcxyaeiFdB63jzUU67zmSXC6aJ4oUab8QZpMcdPLjsXQr5cgLg7ihqgKqLmS",
  "key26": "rBbmztY5q3Zq1WAw3wKGaaMxr7vqsdwYCnvYnYqmtA8e1YJrh8hFopNUxgsp3CzNTvAAk2sS1rpmErQ97beNNqo",
  "key27": "5rcUa1bbSnxXioSPzuAmimQBx9dERBRh8ZHEgSedd6LJ8Timg8AqB46UG46ogVnu3cwswHTreRCy4mkWZSRnkxY4",
  "key28": "mfTSaD45K5QuPBDyjS83AvddY1oFT1t2w7EWknKCdCpoNG82gNd2YCzvS3QZARhuA3RVBYHmUiGwBbWNCJDNcny",
  "key29": "2DWkhv7q57joQpqv9yYj8y6DGSGM9DJXrYQW3nKTdKbd3aFuMKuduJdRVvXGYNfwE6ZNPrkaw8e47tF382jLkTUc",
  "key30": "5h3Gnhrqqqx6XqEToCwusrhdodorPugSafWi2AnrLj673SgUZezftJGG2GJQLmutdXFmisHNAVWfa3KPD2CCPStf",
  "key31": "5DHciw6L8dkH23n2sv6ip2Gg2BwsGS6YKDhS2gj4ChoG91Dpf1DZkuivWz5xcVowsoDBj7yodm3c5wgWtArAwyrz",
  "key32": "oXZpCKioh4FUqyPF7j39eqHp2r79YqgHo31gNW5fE5VNgaaD6iaC5SLqrKm4PKJgU4PRa2nhiqkMi2dPr8Lgrvi",
  "key33": "3b37CuxuZfDGsrY6kJLPvFaidDMsEKAwGdQqveDGkaodTHZ2raUFSxCaTt59grg9A9WP568tYipYsDGFutRntp2u",
  "key34": "5QTdK2aBMgAYytbhxJhMFhQrLMGLZUertSTGFVf67gbqVwVGcoLLzXSA5r7VvECrRLVWJfbERPhGDx4ztUMxCvBi",
  "key35": "2bisva9h4qyCoq3jZ8rLfGfUXNcJh3aetAqXhJxLocejiWxiKcbAbHLHGLqbSu2qQpCCPX7sBhDvyQ6VX2k74sSN",
  "key36": "3PN24BqLZS2Pka3kruS6auqqARD6i76J6Gf8y6iJqLMQUuXhHdWA3cGqtbhaeRRJQ7ihc2wqHbypN4KuC31ckUsm",
  "key37": "2wqaST1hQuwyf9zicBne8zyoFNhkTrKu4QL958yATDPv6YLu6FF22HepicWZB7DF175VgRBGTrgfkEYuTi7z2TGM",
  "key38": "4iVXJocz6T1oUjxeF6MHJLRGRiQZsGbmvpT8AjZMCkhBd9ScFaF8QgYT9i2L7to5dDHdXmdtNH6g43TQDJw1P75F",
  "key39": "4d2NyAshQ9dut4a4JDaDEVpVu1c6MskbsAtpg82rGA76CGAZYrdQSrfSoR9kGZpTTPr2htsteyyhQkbBs8AeK7Cy",
  "key40": "2NT21fS8HnprSN74ePaFEfyvaBX6YBhs9nRMgWEbpYxL4xxMoUL37MnScRAcEbBG7X1JbzURivywNxPBKGjAi95p",
  "key41": "QzajrB8VyDewnewGUqzBdxv3pqyx9PZ8XvVTub3bNze9WoWp9akXSBFAkZpipEWAFeZoRgHu9hYGqNc5G1keqxp",
  "key42": "5gTa7TCniU4zpwsCApwFUXFqqrUTPf1oSJUDDicHD9KubAcsGFUDxdx5aJQ9ZtJsxwYTLc2p6djUhFkxiT9xPQ59",
  "key43": "5TBnpmmRnYntJLCPw1UG4KNpMKgcrkByYXzyhyoXFjRJBPvPEDLaEFkkTTuM72aRCHDV415LmvrTXhB6AK8Z9PqP"
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
