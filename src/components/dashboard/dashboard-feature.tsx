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
    "4YyFr7ByvmUX4xfD9Hw9jaTWUdcpGX1Z8uA4uHH1PDmLMwTVNatM5NUrzp9cR6uUiEDEiJt3kb5AoBj9LTuPLTmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FguBvobGiwkxH95cEoU22W4JBaTdiGgWoYYh1xQZh8rxiZHjtQCygNgG74Zi3GdureTcgjbVha4iRHSecygiBYL",
  "key1": "2UFnrkve79veEDUA9e6Lp5L1NaqGc5h2jA4KCLFEUoQCN1C2Hy5M685B9xBgo7MUidst9MAjCQVoDSSicna9Yqov",
  "key2": "5umR36fF7fNXN1GCT7pcm2h3mMLBkfw3b51GiC6oqWeZF16pxQaLETg2CcfS9LKE8kChvbU4psoawUYvaPFHrUgj",
  "key3": "3NSrWiXCESktd3cSbBdAnw34w4N4JDmbHkze7YpndKmE6k2WDcVUxKJDrYbXSZNeKeZhdp7u2rDEz2ni7JaLToSE",
  "key4": "2DJUnMtSZ9dpo9bspcZyx7Lff73G8wed63hPKMVw2eyrxYfXjSngUVcgXERzzrNCEkJpEgb8hJD37BzisV3BLf6q",
  "key5": "5HgTG3WoFoBAyqSUoUgVa7DSHKYesUn7qYj9H8zJQtEAnNvXAu7PFroFKKaMaVECpVciCB8QrqWamAWkQiHPevWZ",
  "key6": "3ZjgcRPQ9ciRrBZxvehe1quq9ird1NLiHcdn7LwFbYJWphbd9vSn2UD2QCD2MEMVyitB2GaKsxer4hYHJKPZsksq",
  "key7": "2VuvZvPFcyATMkPdfFopGTzuKAUvW7GRu8LZQqgZZ5zPFnCh5zwNoAZj5HBvv6AEHeETB9rBjh3yJut6H1nceCh1",
  "key8": "23q1wAk98G96GWUmohKWq7JcPvBHD6mVQVvMMVK2S1U4nWRML8QUK4dwgmnv8E16mnZERoBxPKrLVoopwTCc3ksV",
  "key9": "36y8hvWDvzZ3REMtSNchdKzfKpT9QXejzgMbrxc73ZwCUWgmWfLEFRt52u5H28dFcRbvNV8iErwrrDHZMghx4ANB",
  "key10": "5DUbx5cqYQZ5A31w4ekXChh925YCbuM9p7rH7dXTnotJzN9xp6sWMKVYo4Kf7CWECj1vFFzzU6QTDbMXWP1keMcx",
  "key11": "5XjktMiGUx5ng2TSTAcxevxWjB2e8jb1SJHNMntaSbJbToJdnt7BJjhJ4KdftgY9P4dvYCRNovm5D3RFZuYWkEu2",
  "key12": "3dJ49xkro8tYSWV6Ai7bKBKhMfuQNmykoa6aasN76gVgiELNNzwc96vgK34DiExaBoqxDqQ2gA7AmD3W3KovPFi3",
  "key13": "3vjQ3RJj617CWd81iDYbEnW98j8FNAYcTEhXazYzYiNjfoRGTQSv1d6rTK7wTy57D3NUWeHmcchgTBy19QBRndFY",
  "key14": "xfaGH3nX7z6C1Yxw1HUFUyC1D5xMjEtk3MJx96Gosw5Vie6GrRb8GMKCjd9AUbYFEB8a1ePiSZaUJqyoZW8scmz",
  "key15": "4c9fYX9p2eFjtgFv8haciC5ofN6JSB5FENKs4PuDwXkJiqJA227Ubm61bQTNX1CUKfgvczyhvd75rmLvJ4PLNdWh",
  "key16": "3Bs14f4TdBSqCMoNUiPyw9PEVYMu5DMnYCJWpgNhoSWVyGXj2FDwSBcgZJuMtgzMcBBwpbWX5y8nRWi9hEFKS8Yj",
  "key17": "4MeWUsbzvzGSoztxfYASCar4HjBmgU3HLLGBqFQiSe74vzzAa2uF5aXNT1zkxGH5uDQKrrPcBdDecAHWpDdi2RPh",
  "key18": "3gKJtBd5WNhFDwDpHCiB4uaWBEt2eYNE7Pew7VdqKvD6FiGxXtPwVAt92whuw3T73fWMX3uKQY2Bd3vBe2cc3kS4",
  "key19": "5tUybDYD1r9Wx1GbaxRarUe9k54chEi9xPLwuLqXLULxwMNcbNcGqXiHezctnS5jweHMBr6pcAydsUEk9yBSJnWH",
  "key20": "Z7EGV39mrcCkuUKqeu1qGC5x7Ge95pZxNuFjf9r39SgGQpnRoQK1TWzqk7D297iFtYE4x3ogDYfkvEEwDVVHqGp",
  "key21": "54muGENpBLTwrxKirvFiKXytJh6X3k9hggWJq8AZxv4cmQ7xoC6FXLJj2W3iR1CFkxkxf8Ru3vSeQoJce8173hQC",
  "key22": "4wZWdkTJrVNRLA5ALdJ91yRzPZcGSrn92cmHVv4zUsmYTNhrsuWBpTG966HHTwyyV1eDXb8NMN7wGtaspARK5DCH",
  "key23": "2ngMkgY7RJsW7ZctkJcsRATgRJH3GFpZuazZeLi5A2xFatk8z7dxLrMPHsmn47e2frhToFWKggRnFoMgM7E4aNQh",
  "key24": "2b1dGHA9W3YKnnxRa53wHuBr45VvPtHf3ceSM3DxgUFHc6RF45b657P5W47gqbbHnWivWDRUkZHcVLZ2WP16CxVL",
  "key25": "2jB3SVa6ugxF1tyXoxyfD3mTiyTN8rvE25GaxfTcZN1BZUuuZ42qsDLFH47UFujpFfp2kz6kKEUPUZ6daTBLznP2",
  "key26": "5fhG5o5s4YttW2yoVpyQQxonYT3teu785FyBtQNcxgMLVvTEsHScsSnEzzaddFE9LCt8uZ5rBCFjHU62LXjXWUES",
  "key27": "39cgomKQ29V8oULhZ73TspAwqv5eZnEbefFQqQraeHnqGEcLMJAaBjGALUHuJXJ8dNuRQHHzKr1gT1Ah8zBsYskS",
  "key28": "4a2vr4uYdCUtFdWdjbjnxVmKSUhZ6uPX6FP57cQ2SXkQKgus2rWNr7mxxxzoxyjkSw9UQbaNbZuUL6yZigT36uvB",
  "key29": "3F6pXVeEVMsrGmmMjTQjGUHXu18545B89iqCR6aayEzTNwwg37QSfD9YxiCnj4NxCTZvxiNN6aSdSUfPNzgUpr9U",
  "key30": "2SLzKjg9WUohTdpbEdSYw9rYGvbEP7ToPLMgXYKEXfS4pqN1pqx9AhoB34gKbzzwfFsn9TcJouLkGbKbnws9Z9rt"
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
