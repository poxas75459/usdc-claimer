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
    "2zp7q1jJrK7kgtXyY5QiQMKYzGQYEaqSxYqGD5F6YSJ5NgBsHA1roYR1t9jHQNBJU2wyhb4hu43wxatRtYrFiupB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xu65RVLCTNYey8X691SJE1KYjYhkB4c5dMmgjTYrZ5HbFeL4z6ytNkaHZJzYcYvEivmQ32mMUjC7spGP6eA2RWs",
  "key1": "U2ixf56kgeArEbcDsLtZ7BiKVrNioFGWq8kDxUdnj8r9vwY1Wf5292WJKGQ68eLrhbcNbKmT2KcuAT5takCNJqq",
  "key2": "rVaeYTG4qLnnPFon7PxFmq1ZyrBwddY12B27GvLCgg5zmZaG9N4o3v4dXviJxy7K3sb8bAeAmQrfGHK264u6btR",
  "key3": "3NgciY7YwFCwr8bJ6v4Uzxfmk29yxhu8hZhjNQcXc548VFi5KYN2te8Ci5kiyDUpKJ8NAGmfitY3e52H574iRBGt",
  "key4": "3KybLPPBLHaGhdrYrsoAGDjeFerojRcBNE21X9jWcVJtQJnCybtw11sTvM9DAYvdFDEWS8aWwXM88d2QjUpW7nDT",
  "key5": "2JwpeE5fff9r83V7K23b4qder3PAaS5wrPW2xqJCSut4pb8sSkYBjH8zoGU3mAQ2UkrGgVZoMAGUQ9jbnExj7jfk",
  "key6": "5acRchmfZ57mHiscpBzoaiJN1CctCmN7aXxneiuejpx683bN1PXBJxVA57X7SQWbD6bnGKjghy8Fv2tLJuPAZFNh",
  "key7": "2anDevVH4WZBVtSugWk8de1sMgox5M2DpNAzFHGphShGqgKqEoySctW3iX54JUp8LMB2bnGpvXRaYCbpk8awiQcf",
  "key8": "2xnFhUB7KHSQztwevd9x6niJSj1XpnXKebtrnA4qyTXsoiiNX56oZ6t7txowFTxTkCqhuHeF3C8aMz52suqSMZaR",
  "key9": "5eT7AvUrNC5tPq7oUU85wwEuhoYUQAGyMcfriYdbPKKFNCikcbbu3osDEDV5aztRfu1LnwD8ooV6hL5tjkUg7Lx",
  "key10": "5LwTL6jUPyFLbqhrjooqwbYgCMLB3p5cBxEdUQmRq6gLvAN6xr9v5ViRMRgjwWZJDFynxhg8NtCYK3vYwtzQvFoH",
  "key11": "5d5sCVS8RonrmUjnPRU2RU6xqAEAwgsyZJWN2RPCYC68dKVnGgCqGkhPoc4iK63pbVykMA6s9jRaVz9Duytu3Hfh",
  "key12": "5uUzVr9LENzGBKpZqXYkoD2xFHKdkP8cyp5czksWkpFnVA4QtMDx4hYbrWZSLaDcdRBfRU4mRKMEowwsjVikpmob",
  "key13": "5BJGs43Ktqs6FAgWP7NgNMUnzQ2YTK3VsYNqKxzFHoSDMpZiUSJ24wLY1iusA5gJZLPm5a7oV1rZz37ZBCVfcQyS",
  "key14": "61Q42fUfWVJiffEPNvWb37t5QftddFeffd7qdyT1MSZ4TbGLoEAazLXGaAKnGzEwtPpiSc7Cj6j9uHYR4MdhotVY",
  "key15": "5yw4JqKYe3zD8vAN6KoRdzSt86qGRtqne5fEnvC6UHc3MMPEmhvkpnSsqFRwUrXvfJ8DbNsLReN1Fwhc4Z5WHtmX",
  "key16": "5Ch9K2M6f4JU9jW7RQGMS8RHjzs2oAEEwrUSx1xbBvJ1LQDYmBmxMMgkbGdjdasUNgoUbYj4auPs8En5oFHRtbCH",
  "key17": "3a4ZyWoDaNZYA8j8cu187UVKVcbQV2eE4MiGYXRKWfoUtJqSiKCSkHXERjhq7vd3dxqRi3Tde7qzsqHAud33Z7a",
  "key18": "2RuqCftffrrcJjpGSFp8Jhm3pbTqzwtb8VHdunpF3T9nSpSodzuBYvSXerBX8j12rvfZdM27vuaio38jvUncTzpi",
  "key19": "gsqeC4DE6TSyafsfRvQovBZsYD7A1tRAYpdYGELc4rCKdn3yDUfiu2mauxYk99bw7KcPdhnRuM6PxaMF9rQ5tnz",
  "key20": "59dvGQAsQhkA2vjTZehmJypuRDCdspmYavPD2P3Ma4TgTGTkxXy3Jp89hvBUDGcbD1ZiVQhobkR8bVjVCLDLWJ5s",
  "key21": "3Ka4Q9fNdCVTnJCi3JJJ29K1TiqaLB5vYKFre8wTZXPDMhAADUWbFSm9MsoeG8qtoHmQChU6pS1Gzf8aQp1zSkZn",
  "key22": "2QbL4JHwQfKhCvPKUPSqPGYkZLshupc8VkpPder1N6J7tqcYA9F9abHYxgLm9Y3UkAFad5JomxSMe6woisXoS59r",
  "key23": "bySXSS4yxtCZ393QHNtTTTSuRSTiudvckMy7FAVhXbXHN9qe64hHDXz2aH84vSKeyJDqPoFab6p4aRQwKKnkBGi",
  "key24": "5fB5eBWNkPVP9qXPJAaSP3CbTiw2Uomc5Vk2A8EdFQGHFFtF9HExYJwX9C1ncoNU99yDAvsCZzoREsvnVzoQmAEW",
  "key25": "2R1kJSSdCNtibBcqcBVavuvhA1FEgSK3yaFTdadaG8PzFNwYqgRy9FeD77jrprWPXNPzH9TBT923TpEnshFd6CUr",
  "key26": "5T37UfkpzCCGgZjTsXq1xk94TGaXzkBYUuyJu1DoB5ZiRzfBAf8VqSkWQoktoSt4cUfNxeKeEtzSNfE172uEbAXx",
  "key27": "63LoRU3FV3ZfNWdjmTgVmSYLnoiPW2KPGaYvWoCzrbLpUmNGznFmM3BqwX42XY4Z3ktKt5mPgMy6D2vWvMLM8Mtp",
  "key28": "5cN4Xa6JMEQKE7ecvZPZ6EUNtbSLs6E1KdJDfU1iazZSBsj8NaBHvdZ13msXsrUqR3daQHAR9vChFEswWPK187aN",
  "key29": "4WuvhFhDhLELLVp3ha9o1xdVEbhEJEMqKH5X14nDKN1zZgh1d4JxWoGLGQie1NDrJFi78xxZZL7gXGkxASGVv2FH",
  "key30": "HJaozG4AggtRBastwtgffDq8DCmZ7hndYpQwR1AXSc1GAHGNCtzcF55FyfcvCgUQD9UscWUpaJ9hRz8mjHewgR4",
  "key31": "451Li6Az2MjasfGKNK7n7fQ9oLvtNc8bCjxfkekFWKX5vzTPJGzvyjRr6qfGKRToin8CrfprQPjVRXxeJTdtibp2",
  "key32": "2Bx829tQC2ruG9G4Z9pyuT589mbJK4vwkzPxxfFA6eki7D9PZX3YTGkzWTDk7QxKNfDPkYRCBxnzGoWUaxsFHdDW",
  "key33": "2K1pXZxcyd5X6SqfwPjRvaSZyiK5nY2yft82uucBo9diMPnoemitCCVYnD2cvNxuhPiBXCepd5C6cTbpNsho6DLC",
  "key34": "73wsLZSqUvRVtV3pPKH25tsp6yaUMBSZTEML6HsLPNANJMGcGMpTk8NxCAAh71gTtaLHPzikhzUQeRyb8oYTvDV",
  "key35": "NNU2Awzv6Mr1Aj13vNATg6QVhB21doz3pKUeUgXStc121DeWq33hKrTpDNUZ1pSdvNc3W2Uk1kp9w4Rrs7hHvis",
  "key36": "5jqtvQZp5SUKYskQ55nM2STxNRjhUWzZ4XPYBfxTvBKinBYJXoTnFTHo1Z3bWWL4NtWhnVXFezfG8tCpZgz1YnTP",
  "key37": "2vUjGfgfxBqZpqcULvVuSPtCAo8j8ccgsYNkvp9XPU82YafAaZ8kbop4u5yAkDcLLtxb1Ek1KQfpsPrPAacT8jBQ",
  "key38": "65fN1NGbNZzZgNQb6oHWjRJsXnQkrHxvNTxLXA7dKvZWfZARsq8JGfUr2F8yvvwntnLUxN8cRgoJFyNgqpJeudgJ",
  "key39": "5N3pkLZuz8v8bLTigtFf5wcwFEsU5yqsP9QGzZa1meUWtpQtZhAkHQCBZihNTywLm6Tuiaehqr44pWU9SLynjroQ",
  "key40": "2kztUt2Fs8JqHERoEcaHRaTSZi6C3qXyi6MtPRfuH48DhyP6hFjmu8mbeWt3aKnYXJ4MwV6bXgrhqiPsG8zKnpGs",
  "key41": "2fJ1wB1iQSMU7DcJZDAHSaWQd8e2xpVX3FL6LaQjD521QQtXkPA8YEy9iRjUnCjAALaweV5KPtKeF6ko2WPydv82",
  "key42": "2e9N8sp3gmqtxrsKewoRresaXrUMSYRCNNsfx9np9Mp6Pi94wT7sTfuxzxSQi7fZ5rTVJF1fzfgsRkFinTQZZU4H",
  "key43": "2geD4Yk3wvWXH67HSgU7CMFyQxht8pUpwMN48g5c8JKwAY53a8cwjBwVgqb74uLiJYhtxy44pF5YqLKzUfRUkED3",
  "key44": "3k83sqHVkDzJU6iWsnN2nS866nw37iL1UJQCMBKiEsxFJEqEMRSezgcwu1enWnfH976TADjvZ84PoBQZCywpzusL",
  "key45": "2CUR3zhGy7jBQhF4oU1TF87hBcQMwpaTcfNf9UjE5i5kz4JnJkQE7g2vzxhMU2HcRWFKzMXNuXMpdAukwZJUYh1c",
  "key46": "2qZhKELf2C3pTZ3E8XnBwDDnmoCwfhNoB1dzJ8kouHt2jwVpbQP1DcBcsa1kKKe9uvuZXW25QwqpXuLdDxvkLQcg"
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
