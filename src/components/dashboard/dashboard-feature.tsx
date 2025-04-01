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
    "ZjxaMsyKdPa71WGoANgLMwe1MydoGojNbSfXYFMvh4hpSzAaQFmjcsVUedyDoUZWUMYSyb3Q6xnttLEUhapFesa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qz5vXesjf8HCgafggeCHQQNtQFx64gwkEkLwo47ieiimtHuR9tpLuEMVvzVFKNHExuhB2h5HnqfFRT8ZHggHnKE",
  "key1": "4c851yktUPCZB2aPWT6v6DEEixgVwdDmogg5gGpRowbPccjWJBfwANDmbbt779CfhxfBDQet4qa2eweSUwNx2ft7",
  "key2": "5VpqY4ZFQWT4MczBLZCjpRSeqnhYX7E5VGEdJ77tWZNvKPeYhc3tCnArwsGdLKXU2zifYWvBmZBonvYa7y6Q4mbK",
  "key3": "uizz31VTxQn72gghN6MtkCkHgSNeoQ2ytgGdUYPeANLp2Gxy1nYzzLrsxyJTTcsKYhMttKBur1h9nbx9NxNkjZj",
  "key4": "2cGi2JdCXPTArtakXxxvSxBRq7FPgeoMxcMRj28P8AoRgXfMKZg8uJc631dT27GXuSHroZR7KWCEm6wVpsGvRtjg",
  "key5": "WYEsadhqMLid8eVECW6gyfUQ5pAjFSrPs98ARccBSEj1gdJcckuw1TH2g1JVbn1PZ5GtZtobhb5f69FEY1tLtAh",
  "key6": "5CaUJ9JVKGRcTgeyrPwQyUd3U3WSTpAgaBYGsXkYmdr4HjzMVgBnuK6hwXzLox7YnjSmi37tSLVLocGSq56SYN3N",
  "key7": "aicWDij1dRNfL3KFtgJL5vyUcDcfL5B9hs8nXQvrC18DK3AuypgqN8RQd9hhYYXRzaNpsboVhdzUjrZAx4s5WUz",
  "key8": "4kBj6NDyj44oqn8FLz2rxbVJeeF9cbkKDxZFCw5GbSSNXTpC2wjkTAnLkaJE64zroD8jBhcoJNxkf7QLTefdfG2P",
  "key9": "5bUThkpSS5ApBardUNyHyCF8LhU1mNzFmMUA7XzRK8kfh8iVkCjxhBSzUGzwz45uGu24HtDcihWKdsHoZyWQ2uwy",
  "key10": "YcWNkiMBCPZJC9YVFjrsEdwXvni8hyFSmJ4WHHxf2fdtBt5EktjtheuMftEPuU9H9NGA5SkoPRw8vsKR2TyewuJ",
  "key11": "5RwM6RryBJijCrqPikeCBCAUZL8ApYMdZFqnoHdU2QEZDhB8jytVXu43KndLNdcwoSdmyyBLGVE8DnWyeGQktwBU",
  "key12": "z3MGShweeu1bXzp54Yy3tnBzE1hGPLFeAnjwyXaEHaPob5BBd3WsS3FKQYg8dEwJywDJKF1cKHjzVSM8oBv48iw",
  "key13": "5Zh9NDDNkj9mznKYvWBDirEimHNMNs5wdp5xxz2E52Bkj37BxoPZbh9DmQCEjAg7dhgLVaEWf2pLQFMMjCoyCdyy",
  "key14": "2S13bBJqoiB3kbnHSvTKN2vX4L9Z27QpBaA4cMdrHSEvA2z13BBbcJrC7SiCuikDeygvqyMEnyBhZwu2rScYapW3",
  "key15": "jDqnmLkVPBW4CnQPQhkVm76BbtauDL5ip6RUGgx1gzdfhC8PVac9ToqE9BDqV3wZ2ETCXv79AQoptwyAPkWqNqz",
  "key16": "5pRmR4BUB9RubkvwYvCGACzjmaWE8TWFoBsk6daWJMdeBymm6PxMo8CRKDVSWrNg3e9YEcew22BM5cGHCca4mFu3",
  "key17": "2wbSnT22pPdWy4uCjRbEDZeZyv52kd8EkuLjhCv41t9jERzVGLZ5NUZdMJNWKjsgkcvr7e1c1GjHwz3KqAC5trnD",
  "key18": "32JfRY4K4AjTA3A13pYU9VTwofPLF1k5jXpvYXQ3d3Ea58pXpgR1p65C4fehWwNzuSGohMyLZZ6PBJrcdLXx5WMb",
  "key19": "5dzvBx16eTP9B6hCXrJaudTRHDbvbVKygdUtRy1asaNDqfxecK61PoStfsnkBug6cb64S6CNjZaFjCCCoAPP8c2U",
  "key20": "5jfe3AD5iLRtJ2rRAP2gXRbNPUQ9ZnkU5hphzKXTSTS4EFLvN6PEsNNaHzNuMGfFcnM6vbZ1Efo5cnWEex9h6mNf",
  "key21": "5JQodsPN1diaL1MFr2sgM6R5w4BrsXWq8PVAbESWvsromQrYZ3L5MWkGLDp51p4MoiMecjjvtTp7iNu5RT6qiUbH",
  "key22": "3FdfkF5Br9DSXX5W6VgETmKB8z5BR5t6PCDgrCqG1kqPnWaFESPzYmeJRPDKJiJWEVVnH7UrhxsqhrEN2MDgWAea",
  "key23": "5WPkMFxHoNrT8B3rrCLTMs3SUYn7mfn63FSfbQpZNVvyZonrYTGzk7RMFvEnTi8PSPg8JfNsM9SXeRzS9ry6RhCf",
  "key24": "4L5ULQWekkUqsrdzSYpjmEBXs8AYW3YfLLJZzse3AarnQfSRE6AKWBzq3Ynw7heDrXEHqWkwJdGv3CzVE4QwDnN",
  "key25": "2qmpZNjrf6a43cTssqPj4ZzGmgMNhSkBnwQuTMLH4o2HFK6yNx78a4qKgJaq4LHj8GwhaFFk3vW45pzapDBLGHEZ",
  "key26": "4tcXWYhETenJJkX1zcFMv7WDB7txWfxnJKXJWePs34M9G56L4T5k5TnChYauPWAQC3qMuL6rZJQVJ8KNXpnSzNVk",
  "key27": "3Km5Zq4un7yBpQYuk4jdbtXRE6vgpz8XNTNgHD7LHX9gCYwPZtcrSbSC2AW8KaVCTfqooMb748Wyj1DU6bCQ1ho1",
  "key28": "3LbpnSRuNkST2TZz27GaZeSRJp16jfS37W6ysDCRvAADfSKCKgMpxUkKHTDuh8sANxWdZhXiATXH9QxXHeKWV5i2",
  "key29": "2itKZF3Au9LFA8hs23fGt6iXpVcUCEqAywWWwVZatqiE9Y7feJwnLipt9U2uhWBixauEetYpBAac8QknGFJ1xqJV",
  "key30": "63zSKk8KaxpHEfm2QrwY7hmFZKnNvUzhnNgBqJtwSYtnZEA32jAytyn4ihH3sWBG7nCC7TUyt62bEJtMu9MfrKzP",
  "key31": "61PwiqcfLXg5jk5ikkS5EC42zAJEaZzdxuQamr2wkJEQJh6CL3NV7BFVZbiiAJDEVszF73UWZ5cZFKfH9GyBoUiq",
  "key32": "4mL6K8asDzknU9kYyPjSgCwyrU6aPoosp2hqd1hPy26JQHakJ5CbRftrRGtKioYzeS4hcWoDHRHD5wxLXTzBC7Pz",
  "key33": "5othFbLzL8hDrZd2CPfz6mDzBRn2cGPucWQZ2nLHcZ8PU1dEuiZJ8efE39Ej6wyiQQXFx6kyQJn4CP5yLrtCqfxk",
  "key34": "4fd1Pj8wmTt2DZnXXXp1K2wuDbMH9J3qKBqhsgxG38QehNENZoJyyecLw4uBJT99wLZww3q6c88yjSABzg3QUPxg",
  "key35": "5LBjS8ZyiANnQi3BpFw62tHzLJNXMFedLtgEU3DbKNAEa3E2KxZd3BMRtKBpD639vyr9sUfhGpEW3d37pwRmAKyh",
  "key36": "XhowLRVCHwrkxcNpcWYaL9ZYWeuXE6dApZDzcN6QA55FST3YviiU5T15NSvM7UN17gbQYtdn4kyZn6hJ6Nb7Zvv",
  "key37": "c4k8CNmXP6Hmk9BopGTVX5PJfXkae5P3iSLzwYH5FEm9Y6zgXru586kjpwEZQykGm9vjvGF4RbgGrD9MSLqEhuo",
  "key38": "4GWjBj2wgevLWmAqAi2fRwSdbkLwxZ8fzeipJNTgkpAk4MNbyt9HyCHtYoQeQpUMEdUNdzJ4q3m2NWUJnbgTPiXh",
  "key39": "dWpbKNjtNZrW54n73xcK9KR4Uu4Zhc1gLv5Tk6H2SDEUebXhr6D4W2aLMvaaU6KhVGwUqNFmtrxZhjrVGDvvavX",
  "key40": "2fmNkMgzag94EpPmzyCPKmkwTWEZcRr4BVtb5WsXAYqWkVn1i5uPgKkMumHmDMSPp5QeEejvETLMUt8AoGqC5Puu",
  "key41": "ScjhCJDeuaEhQQborcpRu8UTvk47ei71UWE9dYJQ1qsCmXGrtTPQ93t6ivdQXSTLeYG7ua8c4A86ZfHfrAMfw1R",
  "key42": "4TvtLu9kHjYr89GPg9yr1ECSmZcVR2hY1jN5vBWhgEqWaDyjvQN2K48SucM5mqRwShuUQLLjE4UacYbBfB62apZD",
  "key43": "5cQjd1yuCUvgniSsbwHog8xq8juU7uqNvaVLnfXTnyjMapeypjNSka5oVWaUEbWD9LHMwZd45mJ4Y35YAkrHawzo"
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
