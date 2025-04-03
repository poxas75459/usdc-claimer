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
    "3fLo6iNyFyuamcfBqQ989ynie4WxogPakGVELst8qCvv8ZwVL6NS7pvREEhNjsQ6Zi2ToexP6o7z3sBq3G6bTtCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fbp3EqjWTq7mjgU6MsvsDwDP2fxUTdQ5MGNvsh9nHMno9M8JDgJji5yutAbWQw61n9PLQz99cpHmfSVNdtHpWZG",
  "key1": "4o37derJNDnqtUEjBmVUgxV86qr98WuajCGs99i7XLkgRcy51LEndLSbFBEpAL5VPv9hhDbYxkhp2es27fmfXhui",
  "key2": "5DBrrEUibcMj8Kqgt2hiWByYifVpx3XYsCVYnNnNGcyikadSbeghouja3fM3Gbab2an8TZVYUdk2iVGkHXtBTMNn",
  "key3": "GGRAN5Fh9qRhVbRaCbSbZ5cJpokbmtcjzhKUDgd865hczM6ngHZiV2qKFwJeVQuCtT4YurRsSCBtTBYWvRV7EbH",
  "key4": "7epjcVa4SXYBHkDTy9AjZCFxbrxXR2byuARUk44Uk2DW1AtmD1zPzsgKDd2B49GawJFHq3cFNDB66grhYjaE3MM",
  "key5": "Zt5Xe8Ej87Z4LxoSoNJ3ERxdzkNi6o8fiYmHigLGR8Q4Jf72aP4YqmpY5hNFaK18xC6mrsd7jnrg9vEGCjz1cR4",
  "key6": "e4zy2aP2pr7xVZSCExZbLUChDiJHDBVvX3kmxJcLD7Gxkzvpe6q74vHX4LD4mHmKWDRfChyauPrGgLiDWjpMwcq",
  "key7": "TzwenYRu1UkR6CHLFRs2uRUs8t5hArNizs5wfuE6G148xo6p3zGxFW9gdMdEhBbQs3EqyGHTWd4SMeFtQk33pD4",
  "key8": "4Gx6XWKMyN8De3ZcYAvxBwrg52jDr6pJXG8ago6Wtty8un5TUUqQGLEb9zoQZqcdfRWm7eY28SXVDoTV4uKBVtRS",
  "key9": "yijzFrm5JMnXSdxLTBv9UiPSNpZhFokfDFhusCS6Dnwnew7qT5Nqz5Ag2UBFpBYkC1PGwM6jcbGJ1P3g2j7TJDo",
  "key10": "urhCe2srsEybhnqXj6YZosn5TaaoLYUTQyjKT9JUboiGwzLn6Ci6HRCbcfcGMMovVxKHHTVhQukG86okjnPm7a3",
  "key11": "2YdMKST6y32Rs88QXkNKJzSu2xEfdQpjXurNHR9nM6NHPEfAAPXS8y14ZucGaJEBTJ8n1mMZq2TLHhHXnfACV6X3",
  "key12": "4LFgHWCASWZGyAE71jiz3t1QvmR6PvAZRq92pwPbdgeq6GeBobdVXsoQMxQSVcnL1cDs6uUCnASbHEXbjBuqPxZ9",
  "key13": "664vksJ1KgGMWLKPi33ecSH8LWnKXyiUwMLPKMNY2MhVDoY3m1e8dKLDPp8vPvMCG7ARnYwprhaGQkJMEuJug9Dv",
  "key14": "4gsyxDNuYszWWXsyrLaVpPxMrrTjUBBuh3bNurijSPPsAswznodP45KahnCLMzrGQCKW3WUCb3eCzbQLkWkMKe5X",
  "key15": "27hHNdfTPT9aYyCXQsbFb3gypUH2vHzDGku1841zuNAVt5NiK8epssjSGFdRZEEpUXwG1utooXY7YX8H8rT2Uh8n",
  "key16": "4h4rKPrLQebLeVCteHaZjR6xMRdZ2eb47JWcVkuy4nZdoDKkdK7sGnvg4wj5NmsCUaAJFJFkeiWuj2Q694FkUGTB",
  "key17": "4X1wW82Hoi9dgUEygkMNkR8usNhQzpgDy24SoGtzGvw5LHjxZHpgGkCVrJ2Wgc4HB5YzKxjuVqdFdVg22voxho2A",
  "key18": "3Dp31RYqA2PZuTAyBTQavJ2fPFDhZUaYxH3u9zrJ6oiXc6S22QqKieaHpvEAVgoDRRNSh3ZKJ7yxGQuR4Js9E24z",
  "key19": "5FWLD8bTgMB7Ub2WT72aFPVNYBNLixxdzykKJU7Mk23E7W8hEkZJWPmqnhfC1aPqHrXEPdq5XD5XV3L7nX6vucA3",
  "key20": "5aJQcozi3Vty7HoxkoCugkfkjhyYtRFCquN8w7Vv7N378B5yTheXB97NMJRChPvBeGq3s2ejopi83uWcis1DKqWL",
  "key21": "5sdZKQxjgqun9LpATrt1uaVQiJgS3oL2y7NPsrkNUNYNTYc2qrKizZXASmtufTB25MjBMSCCevLmd32nEdp5Yy3y",
  "key22": "2y71dEVaro4exJ74EcCLRaZfpZoW4nLLYYKpbYvcz9a5ehaQ4vVvtPVVVMmaTEnwK6tgGAPWuoLKdCq2zYt4da52",
  "key23": "5P3D2NLJz52i7r8TAGase8JaCQwBd7zZJ6yuHBXqf9ARfbwKCViN2UrMVJRWcrs5HJ5Crut4K5JKCxhvoeRwDQ2Y",
  "key24": "5U5vcEN5Cagw6rgPXgMroKaYkAt5x465ivP7FEK1GGU8FF7DBfTEJvxJWBur4vd61EBthUSZjovNqCGot9tJ2zQm",
  "key25": "57M74knNgpGz3aKiLWNTeqEcbh4XWXg2S78uvFVQ2KYeS6dX8NLqyzw5bxASLMtxtBZLK9434ix8uRgRu69b79d9",
  "key26": "5EuzmtLShowCi2UKhK671Uvw8giwyYtdrxFiWjLBHEAvA1tbEePU4i5YvVTcosRzMZFGLrfQa9x1uBM2FvFDRx6a",
  "key27": "3dsM2Cmhse7zPxRJo2TfkJu33J33NFPnhYrV88UbHyxqH8KMKVWVkYC7v3TrmiuHdAAAjgf7v7qcqTbxm8SovHap",
  "key28": "5xyjeosasxnab5Qb4quPRFStk7bvEn7MP5AcD7o5EDnMD1yMX7eey3jPqbWqix26aKuMU5HGCdMftRH46eYA6xvD",
  "key29": "2hph3D4Lbr79EiXHn8K6rYQj3vFNQDSRNn85YPn8uzLkuvUFQJjYV5LaeSac8fnX65gJWPRqbZiCNYhmnaXjgEa3"
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
