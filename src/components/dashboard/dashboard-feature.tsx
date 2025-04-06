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
    "2brv8arFBX841QGXqg1L669qwtjJjEDQgVWBiAfUJVMaZr5h3mMPyBmdadtU1gAqbkEZk6DDQhwH2VcxijXJBuCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ujW62odY9EZpwf5HKy9cBxC4cNcftjEUweFXSbG1HjHaKtSbhdCDBovj6ZhKRmCVrcAJrG3ULGgwaVrWAjdG7oj",
  "key1": "uryVEhcDK4Rn1yS3oQvfBxQ8VZkLmiEkbrCH3W5wPdXWBAbpWxx4qhBSNPXjLxVUoRxi1HZgwKkAXP8zL3vq6Kp",
  "key2": "2nJdAsViCL6B88sfY8W1MmGoUWRQ8Df5N8UvZkaAf4RJ9qFRzTNsYHpUXaAnxnZPQ7Hck4TtZg4hva4exAC3Yk7o",
  "key3": "vDTNQYdzXgSfxGDpEpRDnTa4DWUxRgGVGqnsB4dXFnrREfoudeYwpPW55xgQcVHvpCpxHhW3BSCrC4fNUb8XVRH",
  "key4": "5mpFj4Ne3ayDtJNGnhdFs4aRtiM5bfPL3jD6CfQS1xRUaKVkHcAXjsPfztQDmR6LXDkmZ6qJSmoJsPv7HLqJqp7o",
  "key5": "4AfouV55p56YQQ6r3vExeqLftTVAMLBazmtAimuRZS4K3z3nPdFuEDUTt2acj1PGzzXJc7QtBoJVbt25do7uWkSJ",
  "key6": "UVRJkxuYFpY3cwznQdK5HAAJZRNDsTiv68n8iQsuxU7Jmc7CGR1UJ6zBbMWUo6ra6tQaQkL3zr7x6pvsFfsmJsi",
  "key7": "2rUMdJYxVMMGWiqYL4g3GXxyiRTRM64SqhQK1qyYTHaMKkySTQoXWfJe59a8oW3hhQpgZs1Hr2fXpcT2ZGmjs86S",
  "key8": "5YvLRsRxyLB4CNFt5BAm4MN8RiNSaBMeBiMaHi7RchLHorKcbTz63QJS5wpPwD44ex7YN7zySQQLPXhnhzVoFmSH",
  "key9": "D7n8mCLVkR2wC1ZB8PsUMfrp5XVZcrMr5hLBJpgF6BXw2cVXQhFTxiK88gjZ1iE6zfts7o5KydTvtU23C55pYQ8",
  "key10": "WbXXTxf9dswBZ3eorbhW1Xkk3GkwM9qBD56vScSaBRo9Q4uuX4gza3ByP35UtfzMFq9bRpZK35s4A7NnmBXzz5u",
  "key11": "2f1GoicN5U57SJKtrzSZEBNmb7DBxHMrsrcY6L2GfCQP2bGDB4YDERiJ9UqYV91HM8RFEehNJxkcec2JpmJKvLi2",
  "key12": "4t4uG5LoE82LzP8Xs6mFpwCPRiaJoKQ4VP4H5E18h5gmngue3sf9LfBX11VaZsRJ6EuQjfbM6AM9kop4XUY81U8c",
  "key13": "7ZJ9xkCdWX98armtnUSMHPLaNhY15B5jo27pdW7Lys3MbLpHmEix3fCKnYu1DrjLYrkkn4UHkEGf4e3fx3iB7N8",
  "key14": "PTC62n3NXFaPcg4C58hdbEJM5FxnNMx9donhsSoaYGdRVjMPWztMe7iXSAoighimbrfZXy2goVMHX7WW4CEZXba",
  "key15": "5JgN2Bj4BpqdGNRstG15pwKN9QzJTm3ohfxha4toWWWZaeUbHY5JSqyjv5DJcot4NnZUGbZ23B8UJMThyoRztiNK",
  "key16": "3vQ63ZXS5q4ymN4U5BJhcnRhv9KveY1bvY3MAFBUrfRaFk9LYyTGsFWWSwS4p7WJGeCm3Be1fh8baCef2BMkQ7mb",
  "key17": "2cpDxU9zvyvBVfJBHXDQotg6QAwZfjbeAUFs54DVxMrJH3j9DR7vN73x6ZrDr62X2DxNcSiNvYJoFbc5gsVv4CE2",
  "key18": "5Kvp8FuyCCXsMiPBjKNNo2t6nZVvwxmbahh67kkP2Ngv5CA7uFgbeQfpW6qNwQK4jY5zb82y62RsfLtn9mSYfLpx",
  "key19": "X6D2neHDdQUFR1pZaSoRVs29abgjK765BQhsNbEnsB11AT77ScDFyoRtn8GgMR7UCQTTfVRc18fsWiQAjJRsJwS",
  "key20": "fGkXbsHf3p24EbJeWVWhnFmZ85mkctTSexMegwV3t867GWawNQ5ASkBDzeE84CnQuAkDGXePJQTPVftFkpTUtTA",
  "key21": "3fLp5gNYhjrH5T9wFxVX8rfwnUbPs8X7KLus152XemNmPqYeGw79ZzavDK8QDKAKvoVXktCxAkr25hU7gaFvmVdL",
  "key22": "3Ds12V16mcZhuTBSS7NmYT2qBsipv21EZWHyDtxjDcS5LqFwEe37DDgoNpPsT9jHB21qsvAPsYRFYWRCQWWbvL8e",
  "key23": "5C6eyXHMCH484c7Nkw2WxmbEXGz3dchEyVhfmoaQQn4BxFDpDfAhpb2XPPfnGrnnVGGv6acz2LTh8GrDMKEoyucz",
  "key24": "H4uuPxYcUgBqQUr7jb1cAeCLN4kJJ6pPcmKYT1dXBp6zbDb2LWQEN3jdzKjnME4iuXteP9ftWsEz9KSuT9N9DEM",
  "key25": "3zWH1wgxZmvZSykMmLZ4SnamsPRoYfXKDWegP6P83FkbinZh5rC1NjjvvyGgL2T6woNXtCeMzZpFfwuDVSp4Y6SB",
  "key26": "5GFoRkLwZkFG55LNxzUFVC3MQpR2jv8bs1FzgmVpp7WzPRmXCfz7KUR6wwse2kn6PcHfD6UvEA7EVRb7pEQqpQr5",
  "key27": "2WRXTZwdENeWV5hnks2ZH9huceA5GSeCauzvXBSUS3hqdn23sHTMcnoFbu6wQnT9Q773PKgPDKrz2HtAiCE2pWCC",
  "key28": "522wi8bGZmNMjRqRztXfQ1fFe3RfHBSx2nwW1STTCrUSdEtM2YTgCc5KXXB9ZHdQRqpzShF3VTJnyG1tJfN7NCQ2",
  "key29": "4jRASW8NsUCGsQtt2MefvYx9vedDUffwA9iF37RyU44Nod8VEuKcrxoSX5RNYdh9otv4c8nsbBshynxVGHm9LS3",
  "key30": "pe3S2tYDQJRcRK84BAzFvg96T2xxbiNygCzsdADDqEiu5TpeSAuQBxLa6VuW5c2GKLywxnQ9ySQfo2hoiuinLFb",
  "key31": "5rLVfbvfstAkHbcFPMdDCAzDkFgVUUuCVzXGU8rxiUn4WFaJDRhhobrmt1B9tiPaYDHW1R4aWXkgnR4sFek63c8F",
  "key32": "29W3iceks88FQdYKA7A4WUxp5RQ9Q1u7Q73j5RKntuBDjqRJU4K5Lru8AyeXcRXKiqFbgZQrhjdxjaVEjcccT98v",
  "key33": "5KXk6KUA9tH3HUcQ2RtBTHFhg5m5aknrdYqMcZcSGxnjgC9b3zRRBb6BXAtzDWKCXr8g66JEWL41dNqCw2ZEbMkD",
  "key34": "5d4DF71Fbvsq3KAfCiwCrxutbim5MiQyGy4qwDLwzLqJhjMq2EkM6v4eh7YchVtSMQBqEpYGMkEZ5GjbcAX9bwxm",
  "key35": "393Vzw5PQNaZioUex6zHRreBdkAa6YBc78SxRjFAPoFow86Cch7Jz2RtogG3MtHVghQur7fbERswTs44QgFNQMnA",
  "key36": "61AH33mtVeRVLdxCM64YLmV93YXek2i12vW7NpH5cxLMeVqTqgYctxJgHUevgMJYBni2mudg4Qfdxcbm8Q9UVzQP",
  "key37": "3SGXxWuTLWf8N6DSRJKRk4zTZJB4WDoDASZeYDSEKqUaKcccABSF9ieE1292ZAfbPuMiW2WmmhfKtNJFSdkgtyZt",
  "key38": "3cHtJzArv2YoBMUjaryAMwZuHLCVHiRpXQqUZJP9C6R6CrPNgbMVDm7nPn54Z77fKgdrmk1m9D31KNs7n9gHVpWX",
  "key39": "sGVX7g9maMBZLV6FTUZwmXt5CLfGcfr3MQYoj8famzaYDa2wezjQTjSzqhrZsGV36fXepPhBerFdMbczN7F4g5g",
  "key40": "2am67dsBZE9Zq9zLpyf35K7TFDGRb5T7FPLvYDz7csFHYfZX6p6Zf4rCqokZN5nkqkXKuqtYxpintSkgmAZUQASb",
  "key41": "5TRMNubbhCwv3UShLTK1YBEXRwVdG4Rs9ERJAXHbfosBDf4P5cAhrp7WM8PYZCmR6n1xzYk77zwEKDsm24ZZziAs",
  "key42": "3fiz3cAqkQXN27ZxtVB3twDy4LANXrvkpVL5pKrPwLfd6McGZTjADwB6vX2PpumCgATeSZ2sW2qwwMTTzt9YmskR",
  "key43": "2zuLUcV3EVv2GsCjDzSmsLKZt3mQcSJyaYzuyLaM7Woow3GsBEJ4ipk1vDNK7uhUhMpuYomfuKnMz5RfAvcvuicu",
  "key44": "oQ4uqqpyAZrV2Dqc4b6RdzzoDhiU9xAHkJqrDTdYsqhnZzjTSsyQkjYwaUpqTiQVTvHgiaNsP9Zh464RqNq752q"
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
