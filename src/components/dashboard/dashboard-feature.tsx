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
    "5npNmTaDYLCJKHWPoXH6xZmy7C6HvLXRpHtLthirNZ9LPc8xxSm264csHS9xqtF6gRxaz56MDrp8xh9Mk4wXmBEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gvZdhYV3h43QFbTzXLhMuHukr75gHaHt4UqY13LgiV1XLstQANPfnKESFcNs17bku37JRYNXBJTXgctznvdwtz9",
  "key1": "1wru18ka1uk2CGds9E2ZLNHyYCbkUfDPiA5LRYBXWw4Fmaw4CDP4dFzcxqxZNdcfc2bZekKJzfyDmnbKDWRUcb2",
  "key2": "5uiaQmpUZTCW8kzH6Npz4KxNLMmw3kC3J4t1gnAJHgUZSXJQp212j7HeCaPTdq2bmBhJfHJxjCq6zNi1g6G8n62q",
  "key3": "3pT7neBK8WCQ5dZvfWwGtCkcq6pYcwa5Dsib73DTPAqcG6FJUBWkX7HY641kfUbJXaxY6KC8oa49LTfNrhNi1G5N",
  "key4": "tpuKhUDThHhttYV2x1VytNjRyuh84BjCVd7YTUfGNXrkRATCvA6gmvaQaCCnk1AygQ4aVAPYWzYRLQt5cVQntaF",
  "key5": "41nrnDoR35FyjUtySS44qaBVwC6Em8z4gHyoUSLkduBohiFav96XyzL1eSPqXdUs4vsQFe1Fwwth8WR6qaJZRqYf",
  "key6": "639DDJwEdrmEjZDFvZey9bg63DA5fg4xPEsmPjNy42RGCqobKwDTM1YqwBTKCUZBRLAtzgyiF55GU59z7yC5mcqU",
  "key7": "2k8kAbJeT3obau2rsLeAWSNQ8CZ1DYW4cmfZKudosbd3DmCk8vRG667gXEqycotnFZGboxMeqKnRRjEejRLEhrmQ",
  "key8": "4JyLYxD5zbwuKyicFa8wHz4YfL5JDfG8nQADxdkM5aBzQNLrDDLCRXcTCk5CZjEiTVxrCA2oJCGBEAa9E4gPtNSE",
  "key9": "2EGfCGNJvtbJZXDtbQ93Hs5wgbp6fRn9fNUwZj8Zvc3kAJqovMLqnXbCFyRRUHN7o4dbbLWvsE8kJ3wgpHf4n7dr",
  "key10": "3SKCSRCqhEP9TSxhCHiFrB1BQqCgakUVh6u15dUSR1dXER7biF7MvX4yCaxZakqmQ6qFR47xmZhnTPurxbw5Hzun",
  "key11": "WXrkRGNWuGKq7qPNDw3bMYnzujqTCfzHEaLnYDyHF4o34TgP7vg1vuv6uNoY4YNSDZQ59v1WoTSJDMZGiAU6qqH",
  "key12": "2V55sboZvQ4RzmHLQRZ4BfrimtgxXbvAsMyxLwbTSz388Y3pfQmv2YdtoZgd1b7VieYTf8ULRaNSgTiNHNNGF9pf",
  "key13": "537nDXXxwo42tY4a8VCBTbegTZurEfgbidbXTNvVPJVcfdxHpHmA8fhbyrermsM4ibWve3cwuFiWjqnEms5h59ze",
  "key14": "5G6yrPSbgAmCXp1PPpffA8sBZXmo3nuQSFCaiGHvTwL2KCLmMpQpJmsEZcsDoY1x2WnSLbyYbopUmLBSN81aK3E",
  "key15": "3RWZy6TYuicZMR9MmXKQCm8fnkqmCNJAYFqoLjkdpr9WLUXNKBjazwNx7G5n3ssHUX9HHEVfgRwA385VsiBMLXYB",
  "key16": "3E63qajqpcPze8CZ8idmGCuJHjJLvWdxWErRQ2kxzgp2UhybfyWWHhjoc2Sg9ANRroNkUDGSyVFfGTFSmiTFWDPK",
  "key17": "5VKVNrXWqzR7tYHz5PKnwBighZVvkA4NgdnqMnXinVmDzhvjRFbrdLzst6Cf1cphLk7ahXrCMptRR8CxyVMs9nuV",
  "key18": "3ym7RT9HWap5LFCB1sBmj68gnf8rJrJwn8PzXU1vNkrNWDJ89rZKMjfqAADxpx4gQAd2BZViPwSgvnNwUpzdP8sw",
  "key19": "4Gb2anLpvmxfJyVf5nmLGU47FmUpvQmUqj9xkZGxzxSt6rTPtPSc1TvZuJvZ3BfQPMU7wxCpFNU7HQZeY48zot6",
  "key20": "e3gPd9UUasBK8x67fCve8YZ51dwhfXgzKZMtQqnw65G2pt5x9j1vKddJiHwJxK7YtCKumdiDbEZ1zj1VsshiaT2",
  "key21": "2KtEEWDZARtQcgmenQDSmvDx2w85yKdo33BduC2ZaVxUqKH9ysQT5Aba46jjHKB15FH76aVcadLN3KuXKvf94FPC",
  "key22": "27bwk1PnufnnfJ6Qp4tSuY4Fwgv9MZ6NYZCyyb4GeForZm6NSeS866gwTqKG9AXtCQuMt66qtvJpDWVYsbWRG3Kq",
  "key23": "4XAxudQrM6JmMbZoKWfCJbiuxQZggEffjt6zuAXRHbo57m4kaky8CoBJysbwBdi6oBz6Xjr2qDZgEs1UHv7dkvjZ",
  "key24": "3ay9pHRjKNd2ALwMZSPx79u4QkzLh8euxBGRb2nKUYfqPwVQLUFkXa45tzd1D5gshQhPtWfE41WmvNfQeTG96kyb",
  "key25": "5DWSqK2PSh69hK2YRHpFNQ5cYA8j3YsiBMdx47SS7UFD55P8aCqYJ6LWzRtB441wjc125u165proD41t3gaRQVJi"
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
