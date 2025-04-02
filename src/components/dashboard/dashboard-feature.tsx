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
    "5Kuucxjb1ufbrP9hhiMqRcukBpPi3vVPVEh18z25hSYJdttLtwDVDN6V6HEdn9LmmxYgXhUnkavpA6iNqiNG9LHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KMXWqDJ28EEpoXi9weD5LoqozJj5XikAAEZAY1M12GxB3UasmyjW8nCtuMbWijFgxCsh12Nh9h1yDt76YfoBRtT",
  "key1": "3gUzBuxsVFb2gnsT9KiE5Jv1TJmNraKCgeDoFGmEUWPJAFTdvK8E9wMrPJiVX1qHpuRHaorU6LGTs8Zp1PDJGaLF",
  "key2": "3wEXpYqb9ATu72E4rm5KiSFtKb35L6PvYwazPo3Kcqt3nVjsv3XBwZ8Ls3ksAVvNyF9bEKCChSCpLJtGN3wFyuXx",
  "key3": "2Ht8x5PY2i2p8sktyCZXdNDfk9VRanNFsiiVYViUtNGxttxKZCxfhPLxA4uN5zSLcJTvcQdj8doWqpxxpALoKTis",
  "key4": "5ebfJe2pLjdfBKaK7foAXi9YxwD8pSPHJbt8m4tQXKpNC652vVJHPm4NkkWb2G2BqAr2fbxfkrRdjgWmdxuG86xF",
  "key5": "3kKoumsc1xZBtme5aNV6LVqSrrFZgWLvND1rrzRnADYDATiG5bSAbsy6BBxbpADMhwYUpvhwTScA4HcuzFYLrZaw",
  "key6": "4pZ5HsNm4DoALCdCzB1hYLT1eGuap2MBLcojokZ28fa2UJzZ4xSNcSjTxYdYonS7LiDUvJRf9wyy2TycesFF8Kq4",
  "key7": "tc1VxxrWe1bMJccWfAwZaRFpPWjkFMkiP8idTTppvwQ8rvtU93QnPTYssvBDUYXafKYLjw3iYC9GJxtbAzcoACs",
  "key8": "29k2ixJnjNTvs1VQ25BTZ3hVBKd2WsLNdKdW7bpHvoniomMMCEARWyc7j95bJK2xvCGcN5GKuKgzpna5Rihqkz7p",
  "key9": "4q8sYmYqsrPVqjoeyD6SLb32iiaLmQoBN4EJ4QEtuwL7MKJ2c9G1GroVMUwQgvgHADrtPfon3GspuDLAqt2KVbuA",
  "key10": "2sfJZnZ6c8iQhog7WH8KDic6f8SkTzZpEXjeyynQtJsV2Cv5G6u3t9cpxnZQyLJaShTQLPjCXKi6fSQEYpvNh9Vt",
  "key11": "2kT3jLko3XwbQMAwbQHhmrnXD89mKUyTd6w6QAhKRUucXVDFceHTkHtCTCZShA3S83oWBGnpmfvu2ys2BkudrFce",
  "key12": "5w3679mAnLiUjce4cC2P8Yhn3NmocP29LdFWbQCPZpx2tCgz7R6KfbD75E7BeqoEZLMt3dfznBKgUxom5xXBKcrN",
  "key13": "24bQ37zDq8CKCM9SjvrLjZvhvQGUeqxbJAwVpvaxxpKYJ1k5hP3NXLCazQe8XDdx5PbumqQG3Cr5DGffVhN6xaYY",
  "key14": "cCvjhBvruY9LU5TLzzYJbVmqnbXhUGb3Zo2V3MsfT6Npu5QeseXYiGNa4wXXrGAyBzAfLNFZAsGCvtCUC1u5m1r",
  "key15": "5tdrTuNn2MLwQXyutZKofzpebF1hLrVvamsCYmXiNULK6fu9nJhhdkgNQfdnHBv6kaLHCzb9geiXwK5c8nwuojk3",
  "key16": "5ifzeMexmyTVkHw4pxcjgnWcTCSes7e3tunvjtNDsR71Hb85hGbaSaPQFHuumxai2jVDVFkn6WYyMrAmqydz3mzG",
  "key17": "48HYeFRbtUM3P5pqTxehCLfv2yDgq6UuozLYC9xaaFS3fCHwjydCBcJVXrLdYcmpKM124Fmt2q4C7PxqK1HGVfnr",
  "key18": "3rfkhFRCVLLv5ihYE5uLaDdKgP4aAq5BP6DGLnyWtRk6xrFzgm3ZcqNg5Eru3SQAh9E6gFzMg33prwYkjexAjRcS",
  "key19": "3Wrcg6KtiXEZfE4xc5JfAAVoNeEUQRaKSwwFVmdMhrPko4uWkiQJ9DVrte7atZpNQvKWG4zDrwK1YyFNbLxurFus",
  "key20": "5qJ7kGJq38Hq4FnH9tCKUq259Cx5eNvthNAwg3Z5yY9TFgqxf34PxmZX5wJEsJk8TE7pjUaqybeFBmcmfY5jPcrg",
  "key21": "8NrucprFdUBp2JaqgSpCffTL5aqfyvUU7dk7a8BKV7azZ6G2kCNDc6NiM1sDaocdmQRNErUAxCJ5MMLt4BUP75L",
  "key22": "3wMsSUQkD8Vt2WQCtdkswjR95XAMW6jRBN5UTXeK4d7orZUYorrcQv8v9m96PksWtUBHy1xNQ4RxaU9thj2WoHHh",
  "key23": "5wwFZyPwGPnDyJDHe6HNF13YrZg3sr37uf1GaiJmnqffeUnmHwwhqVqKpzfvRCQhzvvEpZ2CSYcuYLWE4kZJue6R",
  "key24": "2Ra8RZ8NmPm6qKmQcQq5goHhARApnoxJDDm8CpFPhn6rwjRrqN8Xj3kPyYKvx5fmHWnfmprUyRaFVnydd8GVpCj4",
  "key25": "5f6UrBeWoVpufrfc5Aj9XhcD8uictjwkyCv8x8pv6h5bLhnhjfXx4M5FLMQAS5JQJhCuWSJH6dnZ9dA5EbKA7k7D",
  "key26": "65gxinTdTpZE2Sey26V4QNrBqokAgB2hyMmQfJzPe4ndDedFjiH2udWV9zFvWsZG5U6xoAK35kHFCmBfyapaMZYN",
  "key27": "A99aMNwhCx8MEYX4FtuxZnAV1VtxaPByoGNbtCVj7nYRvCo742oUsggB6FL1kVBGR2fbxA23pcDHBaXFa7hUuBy",
  "key28": "5fADuMmas6NG7cE814BnYaUeRH5vttZ7FzcedDsjRYSQg1YUthAGajyNirdGMhSKezmwpgN7fuPMmoEAkhEkVt9p",
  "key29": "2XeGPF1Fo8NbW8Ne1epNjZzWiLRiuHDYWcXrmcGrdEkDGzKLVtNNQjwpxP6ARiettY391E5qq5PkU9sB9q8SUmUm"
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
