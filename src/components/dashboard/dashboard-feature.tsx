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
    "5NLmSUn3jjjz4iG6AJv2WLUDuN7hTK8kLifbahuA63N5p2o53M36EVKHqJcqo4zThQ86r1wjnKqdrCTPgbVnH7p4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hq2YWyp2cq3gRtrH7qhdMZwoqrCuYxWCwfueSNhASBttJUEjL9G1zZQTwGd7wQuZ4CKNiaSuRJB76o9aXhHw1v7",
  "key1": "2B4xQvCjYApvo53fYkBExE4pUrXdNJ3npNvJ9vgJV7FaEHCApfr3ZzzZtPyY1D8zfLKpNZMDtkchK26yh7PVEe7Z",
  "key2": "5Usox6uhSN9mT3QaSgaFWd9J7jScZ22rGUSHPTsmQmPTnM2LbC9uc8rkkMgATmftM9kVuK4NdAkfiednvqE3mJWh",
  "key3": "3o3axxkbroWCnU82fyiJYuZP71YordjBTmhBRhWHrFhSchowUVwmSXSZUkSj3w8ram3ghiMvppYnykBNPjeHaiZp",
  "key4": "5xgs5q98CXST14RZ5p7PHYZzxpzUN3mm8GF6BimjQQ7Vpa4tqTMV6aQbsFsGNLPcCQzng52R94ved9UVBjyaVLy1",
  "key5": "2uwRegD3rYMuY1S3wZkZVCNVn5o88ubUY1E96MMWUSMJ5jJyUAayRzDfUJfjtVfKA2Dtkv4NvoWRU4V8U9VxAkLk",
  "key6": "3AxgmfpYxM6s1h11LoEtiRk9DGZB94FHesjSFF5iSrCJhewsCRMXpJCg3xnuj7c39Ew3jjD8GHxRh52GVa1aXnaY",
  "key7": "3CEuBUTwNZ76ivP9NRYdgnRgQpGmu3gwvFt5MLXJ2w9vu43SKxzdF245RcG5YfApZKZBXxHpaarRL34nXotePwRs",
  "key8": "3pLjFFSSZCA66zoRXk5kq7M6z53dzekEVUHN5VAubQqsK35e5s2ZTMzRhB2j4JufzAmAUKoLsFFe4Rq6a5Gw8XMA",
  "key9": "CyB6tZPLQ9bdzmHaHmzBjUF4rqkXEcit685cmYKnMpViqxzqpBCVYrrmtzKeB8wUTYW2f3Ja9Tjvn7q7xzich5g",
  "key10": "2Y8LoTRJWNuzvCyAb1xErbDtpSvNNLn9hd6LaAnyP1tffKndgtNMaTMKSx41ZKijJ6jSci4HcwJT1xuWvhUhbCQZ",
  "key11": "3tnNjqWuE7u5btwe3XqwPrvt5auzJYzoK1KtsLN8VUDn9doeX9dj8sqoU6AB4rmUaQMU5CpGP8WDbfQUjHYXtpob",
  "key12": "56t46tMB6kaRhBrMyGWr6FuBENccpRb1TQMc2WExKjPkFLx6mfexb35jdkrg85sWb6dVJPj42yVg7tpno1CcgiPC",
  "key13": "4T62G99MDPcpkRVVjV3t8JpGA55GP1YbBHvYCmVqr8Q1s1KFYZ17vC1XEj6C4XZKQjwue8NcXpKj3FRLR1NF4EuL",
  "key14": "n83C1NSC6Z2WoJky31hfa67joXcDukGzp9Qj4VijejKSGVqHryNsAHxR1GCxtYHbBojAB97gDXhAkjKPLg3bRez",
  "key15": "2cRdDFmTFYighc1Np1ZLjpM4gP8ctxLNsjdcBBRToXATWD3gyXav4pCm3emrWGZeYtzWG4fSb4kdr1yENSu8HqmT",
  "key16": "61on2Lh1RbtktSxRcisEfpndjBScsJEeKHyDtfYzAUMWszgYWsomDoKMyiYNk7fnNghqJnh4JxQWKDTttpcqhFs3",
  "key17": "3H13Fc1dCCNTUZmHAL9sX5gEW5uxt4JPCkB6CEJkuyKXmjcs8bGXWVbZCLGueYxMVbqtme4fd5RZR6c3XAwGh5aJ",
  "key18": "2bpyLzENUZNhxoUigDKNyTCdNe1P3UDbkWwsVsg2SyFBpLkCzceRjfTfhNFss7HZHBQ4Z4BtZVsD4gJ7eJ3bwhvQ",
  "key19": "3TBVijmmovGmoRDvRygRmma5BEhtk5SsfZWBLVdJCCQrTr47ZeBDiYz2yu5BfD5YDu7kdkwvuwewoF5srbYBqCBt",
  "key20": "5Lh5DzhVF5jeW14HiZLpmE4hAF4C626WDMCoGtYweqZZ6FtcghcGLPDJMf3mCdohLmgneUD3w9yzrcgvBrS8HD7X",
  "key21": "5Wgv5nebCWvMGx1EGZpccpv9RAmCYUv4CNQSEgjEnybTZvAD3ECkyKMotzg3XY8mXjMkzkuhmLtoq3wZcktEnivT",
  "key22": "tQNQKASLoRXtoZqC5zMBtCVLmjtFYUzo3gxD2Ga3B9rieZgnwD8yro3HUeq7JA6ebUvx1y75btDEXnSSoyQ3ZvP",
  "key23": "5haiBAi7sxTFzjnE5c8cnwjKC8YU7gaBSqR7NZ232KSUBTAGEZj7HLm2vKnhP4yeMV5nuYkQ2WcUdCZCYzSQSfBm",
  "key24": "5YbfFEk8sxmUw5Vpt42yavtfRLj3q3PScLf632NyKw9Xqnoxdn2ER1SGZ8eEz7vm9AtAQUbFBj55jg7fcgs3v3zW",
  "key25": "4nZ1kWjdxudEnkzyd86D6kYKaaDuGKUwrAQpVUsRePzT3eLVb9EMapQMyC9LfUeKKzYM8HwUnn7jVL2zGq3yRgff",
  "key26": "5TvB3X7paaDfs8EzgqUz1egzzuyBhe71x8cMGmftjmfDSHCxtyeZPPGCo2uhKtm7Qs4nwBY7QpGGTwMs7crRHQP1",
  "key27": "3namraMbyijLKiKmZpuUFcHphSjXJcPFJktcusnsAjBzEeTcStzTqnekZqnH1ttLoLkxzcM8T5hetqMwit7siyLp",
  "key28": "ZUF7vu96EB1Z7iixNVsYPT3TMYYhet3ma4xanVoLJF1uNR3VbUPmJdB1YXTpjd7TjX6bScw5ZK9jeocct4ou49b",
  "key29": "25Hyk1uVreQdH6E1PX79wMKT989X6RZpfaAFLvVdMrcnmjTYVgojeMvQ29YfUFTNYtbYff53KMvzfp5DHg6vMkWJ",
  "key30": "5RoRWAbE5nyx5ynerQAtAbSJWH9EBqaZ5Vn5FpiLYWnQgPTHrj7QP9DTRNfSXqnVhR9qYaEp9w7b5SYh8CchweX2",
  "key31": "62HEeVKBe2QxRESDUJMwALFHHUTjwPcNn44pTGBqKqdWwYHncxRDacYRA4n45VfyJqPkQJacsy5N1pAu1EtZxhNt"
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
