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
    "4SUWdjvgQTC6sKgypA6v6jKjjQgWdHoZ8f5VUZVWvr9dnXvhf5zXxJjMKWcqQrqyCSSWa9QkCNEzuiv5TywNxdGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yTr3spXygCnRj3Nfp6cVaBCmcSEHg9qbXphHuwpgqazyoTHFwAnqoxbvnVKqTeLp1cczgqWT9CoAP6FxHAWWXF9",
  "key1": "5yGFB7WZCdea2eKiSknEtCfCsnG3KLK76K9WnbH3mnrprY5uttN7mAgKfRMEfH4wfrLXc48Abit38ZJzJ7PuSi9q",
  "key2": "4CtPYhqTvu6ZPduMZXKSVLzsV87GzJcvDZ5CEphya7jDnacS3nz6CF8QZk3br92wCS9ghm8yPmRhyo3dv18YmSep",
  "key3": "4jXoMZV3h3CTx9zAXzSZE99ZFWDoCmx4nP1YijTzGh3Y8qBtJsqkvK7XRfFxLzg16SckhKro9qvK6qkm1eR8oCSA",
  "key4": "5Cmmi2nLuLARm84Epyi44AYrtY8XqurPVpSSDxtGaYx6Br6vBzqnystxJtcuq1uDPrSyTy4o3eShcisFqWWgrP4Q",
  "key5": "4zpedU8rdaRxwZ3bShysqk2YjRHqqaGc3CfBNajFuqmivShojjvUzeJf2URzhBBCMgPDspXQbD7RC4YLApPLNDzv",
  "key6": "vJZMmMeBV72tKiFrQQQG2U8KF1JNEVXKZiHGBy8zydgBovVYewCxab49VufXht5RQ4oEK8yunWPgJkC8P2rXJRM",
  "key7": "3aLQCDfqCPHySVPHYVZiJ6bUdEfejXhvmUXgCukyF2ShMi8vzJer94x5nAZ7QG2g7N3uQqNxdSjRPJ9MAjyqgw1Q",
  "key8": "2vBKKPHqqEyAZU4d1rcE6JrKQ8qQA6zCS2ocrdHFJb3nDRnp7cbVdR3yASzHjKfVXMpudxiwqbkXoYj7iFxLJuPt",
  "key9": "5BPpRScgWHobDg3ySff5jJPtFQ9Rk6H6rVt6YeLWsz6VGjiE29duSiTJJhuSZKveAE3uiYtUJ32fspnAQxnE95Zk",
  "key10": "3PVzQqa74sYchLZVqXPv9iRQCvgjTeFdQ8ssAH24AiMZEN1UwUoz9u7TiYQSePbzJoycnnrdvqcd8JYnDxNQ6avv",
  "key11": "4Nxw4WwkhLTMjdajRMsZrjkD8YVNHUf1LV9skBbdbj6Uzq46PZvpkyhKrU7L5FnpuJqhsj4zjifkcztXBgSydyH3",
  "key12": "4Cf9oqdn1CZindtLCwsdu83zuecpWQwKrta2ZaQ61a6sSoV1uBq1C1E76Utw6iM4fxct4QvdiXSikikMzjSPigMc",
  "key13": "26mAW52GUcXCJJ64sjmLSNm8HEZH4cygjwrTVxzPd17fGYipF4Ay7JPDpRsXRi3gmdhst4yQXkW1zATtPL8xeMyB",
  "key14": "2mUecvYLkxjmV3V6gCUMQ7Djacv4uBt9eoFKttNc2CWWzrdSyELYVixLjAgXRhaH8izENk18f3DhVFq1iHjzUgND",
  "key15": "2m8o1oYJGWjskmxC8NEnasRZJUhiG1hLmVkBZM4kGu2jSsprs4K8iXgAQirm3ZHuTYLacT34Y7uzj8pke1xbFfMN",
  "key16": "4Rc96SvmkWHFQoGhMyBx3HPnP69CaTjJ4eKUQLU2jmMmTSdmBM2UaFEJB1Hh9Fd9QyCCe2FXA2gP134gzAgvx5UC",
  "key17": "4CtQg51Vmkpmihy9jkyWmujouctYxi7PKu2ediovNHPXKMoCu5ZH8YEw3BFZN57JMGvb3zwe6uoih3Hp9EZ8Qoia",
  "key18": "5XoTFL2QTtpf7H7dj8H28b7HNP9MigFbYEfSGqf7wN4koMHeyxivJRtk7rVBZmjroXdbm43Tf6hZ2SDEvghvpKKx",
  "key19": "36rJM8uX9t5n1MTPTG9g6UMSBMr6KE9sqHW9rCYxAicgZMw3GiB6VNyf6XH85Y6jXm67YXjzcpAHmwZzDxZCUCXg",
  "key20": "UDrCx2FPvL1NZzw9KKmYYSVzUrQcjvTuZhfQiyvg9J3s8gZccWm7yohD2ujN2UKfgKAjGL3zRAJqyNX7Jzoby3R",
  "key21": "2mtygHviDmFHk1KwDRYLttaYikRfyrZw9vTWPiST26PBFa1HjuzZCeJprL1YSj1xrnvXDp2n8dbnmKfE44zJpmum",
  "key22": "LM5EXBigJJ6MArmpXhTFsuXDsYEfMBsC7MSizcuVwpFncNBwjp6Yh2NSA9TgefwduyLKS4bouwzrVrveswSvwif",
  "key23": "5uzoNuvaSV3Ex6hnK1e6V8U3qn6RiKuQ988TsYhHaaQZpS4nPySkkU7uhGshZMq4cW22u5noxUPReXqfWicD68ym",
  "key24": "3seH2hXut57At5yY7t5v87P9AA6zAGD3E8iMUEtgvLUhD6ffMBd4r4V8QoS7TfSNrs33HFMKP5ZHCsXSQfFbXFeX",
  "key25": "GEHdQhHnct2nw9AZZ4be3yWJSCrtatUJbT5gtdU6vLYvwbXDV2V7iertdAgKPHYHCJzdeyvvhb4w1jD6rJCKA9G",
  "key26": "3gAMs8LMpPDgn7jdBZ7hKJ94PNgPyFJqxp6fkJbd9FKUmHPBh4QhEuePcRPdwdTm14oKe8n2h642yWqwGxS9sauH",
  "key27": "3e98ApNWytvQgW4e3kDwrbJbBiJYY6pBWUYokW5C9Z94GjWhSt6k5qyocmsbN44oY9EJ6yVn4PoBK77iUSPHXtA9",
  "key28": "3VgTu4CTwJkE8DPfWsA3HWZDJzkaDr8hr7EwR9ghrctYDgbywgnD9bK6Xemck1FhpSyqRBCwhSBr35xqVN11LxDB",
  "key29": "2rVswWf6J82qxrzJTwichcWwAoqv7d5qqFGbupuAuDVkCxQuNFZqdZ72anJr2ncsyMDhAkXpKzvBftGQ3mRb5Kbu",
  "key30": "3B6LJcYjv2weSWhedPAyGRfU1LdSmL93fnQLwezgMaHLL8cn9BUsZFSLn5VwY3eX9hZWwUDX1oXk2cn8pzTc9nSP",
  "key31": "54SEAeYkJe6NVwNJiD7Btpi3XLVgGKcFoefos4kpDX54vLGwoXhHLTSvffmU5AVPAxktBvFiSWSTJr2wrXMNsNiz",
  "key32": "53NpBigep6bmw5MaotfkyjER9egC5syv6edxLGd96BtVV6QBh3VTMeDn5HR6gCZXMxJUzzMnTAtuMom4kacqpsc2"
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
