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
    "2GZMWBtQK7WrcUQxvSftoUiuzS7UxBw7vjL8UWeCfhh5NB6f9wLTM9K5Ysv8L2nj2o3LZZAaT6PybYV6iqLgdswy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XcW3GFibEmb9NMpgjJGiVvLFWuGGBma4c4LZ5RRWFgjzk5ooAMjQW1jrxNS5dwh4cMoAnPrDCDpgHRDtrB8NKKW",
  "key1": "5oMcYpoFgeBvEEuw6Ser8FcbuM8WvEvKXo9n1cSbLxUf5pwqkzVL3G89zdepukjcSrz6JRdzvr8EFNxBu6oqfkXm",
  "key2": "3wPExBQVNyQh5YgCMAYpTs6ZjQE1ZwCotrVHQ6RFnAwDNRPQ5M9W71jrUQ5YkS2pJ5SXiEo11NhKJLYEcGJFgNgC",
  "key3": "zQifSxhBr9XvE8yTNpcYamvyQBYLizTEN3RbJCcL8AetVHTAr9fx4AdEw56QeyuGXuHt1EkGGZ6FtnDPM6M1xXt",
  "key4": "D8ScyrRX1134TPX3yyHLnjQ9VcmFt3FRr5zdoTUgri3B3SCVAEqaAtuDQSUW4o7uWcdchaUkKYfVEPNW8bqYohg",
  "key5": "4x5yAzmj94vcYR51sHdxpABcLQB9W4haG8vYuLw42kcQGnGhsaa1MMdxvApEKb6BpmFiBgEvNhVwtsZLuRPMTzky",
  "key6": "5DtFVfYRNGbmxro1gTEhy85qAnjYgUVKcHKs7TQvLxcPTkfSEzoXoQk5KMbeySETrC5Bch9J2xcanVf2DmwDNjtm",
  "key7": "24ABw6jE15BGDtbnHYvQFqp3mE7MFgMpmQHgCG4NFGHTNT5pKz96zcFqqqwGK6SZPbzicb8QLb69mFk8nCLt5QsT",
  "key8": "AAQ3YMcjujaNVBQkBKuQpf51edc3ZToZz1T9oiNyayMPaZMNJYDU8But2wbKhqbaGvLBchSvFCjTJZKUmaTGrrr",
  "key9": "5mYRHjQCGJybNdSSsb9QYhEyDauqAYte8zxfJ3cn7Sq6xjS7aKSU6xmiuNPQMGHSbEmZknxeCjWxUeKPoMsUjQ73",
  "key10": "2nGubSDWaDU36LcLGtHw2voCodV86Wdd84dx5u2FJLdK81sApqwHX5h1MTLEDQyqXFdZZgMXPAzcZ9YPy8WrKrQc",
  "key11": "3eq8mrhNJ5V8Ch7h2kPTsaxq9hanDhqEs4PzN98SpCPVCdCLNJYim18S46askpUAWprxiAR3XMjho6ogWQo8DAqr",
  "key12": "3NCWpu7UEW6Yp9Q48tsJQG3ix7TwCk1Gj5VDMhwPoeK2RDECMGbMBPWDcoRcSkhkG3YKyGQLFdYhY1Zg5dqUCqbh",
  "key13": "4ussNUxyaU9YEGSz7pytiaFj7fPBsAbkXMNRM2FSfNSfRNWTezSqTDRRAQJ4XZezisYPs9VHq24xoaXRLJg3W2LA",
  "key14": "4rNjZYoG7yeZpwdF6FRQgxh1PdGhePMr9RApysbXDLdJiko9C18j6sdRkjvEKGprq6yWfF8nq1fvp3yfL4UHZPrr",
  "key15": "wGu1Yh1kG1rpt22vS2nvCbXuwv1roYxmJrJXbqKN6LXdT2PeLZrvZ3RscPpA3RdJisLSCthJMHPsCpCrSQd8GKF",
  "key16": "28cg4rnbYzzFqPsLNqk9DKKgPwTsTksNd5xD1s2ECZRVQZdZKyYUxn42D5jJeAxapTaCAYjHxe4RpGFBx9n1oqz7",
  "key17": "2ef1bCVqp9Wgq3FxLfAdMA845B3dBwLCsEcR3FEYiUY2Y8sPzqKfA2rcCW26USng7DWrYLwesBJkNTriLwq5SG2N",
  "key18": "B8nYxsZRUtXuTJLq2KiJ8jnoFvWygyN6MoGHktcN81hDPWCPpZ857MthkrdP7YJoMNpfLyHZjre1MibzJyR17WU",
  "key19": "2hKRK9eLd3nFsnW4pZTXRduDPSsPJoXW6BnzJP4dmK861Fb4pwMYxHuvrYSDDbCqxNzZNVM9YU59wejmWnQopSe1",
  "key20": "33iqx1iJ25Fh4Sss9cSFkTGJyJMkJ5guzXiYkwjkfuGfi3QEHkbBrYWgDwHNAgwBvsWCYc4tWvwGuP2BhbBTBBBE",
  "key21": "3oxcDUYUL62mrkuoLn1YuKbBx3YRMkDUri4JHhasxkNLopNfzF14tsi37h7QxCspxzgDw7mbWGaCZ9cdtUCukJ9r",
  "key22": "5YmjVG6ia3LQginpaQxpXWz7SVU84CjwsLQsXUi4yTVH84bDu4unpDGoW8WGGw3mLVbe37UnGsGQB8QGwN8FVyg5",
  "key23": "4US3M65mnLLSYNj341hptgrBApuYWuARCNKwHpCsFkUyLznHM3aKtRQnj2yDkMLTtHESrpQdVGm7V7QTjwbTcWfH",
  "key24": "5Gq2e2nzkLrcQnS5gmwriB3NrmNk1PLqtf5K34cD6hqf2nbvNod4DTYqd6wHUnpMA72myucAEgp5bY1oEejxpaE1",
  "key25": "2w8KBAN69WnJ282Z8n7svUY9MvypgzB8yJMjks5zKs1b4n1J4tVtrtmBnugSNNx4FGCdrJMGLLvGJhCmfJbJuAc5",
  "key26": "N78McRLx98yBLDL5St3B5gp7cyMtd47t4Hfb9AfmkWYFcti3i4NNoppMfRniaGyZumAzEfTShKwN7JbvGLNjywt",
  "key27": "3PwdKQVrG2PJUWHUvuxEWgsEP3eRV7dmDi7geB2EwUaNPrY8aCPLjtzUGyUyy5r38bUrje4EPfPDfyKqA52dk1PP",
  "key28": "2N2Bi2SNutJbWPtUWXQA777t5YMX7EhSTekZNuKsdX863yB3FUamZUfGaawBzzfXwPB5nyuZod4ye5SnGy8xmHDk",
  "key29": "462YdFLESZMQyuAVeDShp16MqJX4r7wQRAw1eMtALecdZu6Xb5EuECMJRmBpMSqoTJTMHFjjJmaLXPfab7gWXmMU",
  "key30": "56cAfkmrFPwrmEyTG53JqCj7SfidEc8NwHLrfc5SuDgeAY9yPsEqwvDjUJ8s8hwRFnNpz4HwinEQ8K2dqkJ67Brq",
  "key31": "5i6oYxxV1RXbEK26PGEKWVjW6aoudCj7NEuQVCVE73vtSmr7Kqbb3dMMuHHdiibhwAH6hybM4PNieFs1uixdcpNT",
  "key32": "37H5zdyAsDi8vRLWzWqc9xMYD8euMGqLHitr6kYCGyk4WmdSjtmpoQaqLBrk4dFbQfAepNJ6dCmTPtsHiEDnkX5o",
  "key33": "36enDi1ySxKNjo34QXz5s99BHKda2T56tXMKA8rQPs2VzuE3uXyMcVXm2engTzeHxSY83vqekLyEvrcmxQBv9vru",
  "key34": "3JcYWPjh5fhsDbdGNTHWDSUHppxzkv7QNJxF9mCTT34TVc7SVBHwuYRopzbkeZmT7R9R2tqh6bMvy3WvdpqNoPhG",
  "key35": "3RQQ2zeUXxjUhfZASeKgK2zfjAqbVhw1qhS18sT7P87Lgr21nY4NgzhmVyNBfnWia8aBESyKHobdnLzr5Y9D7K6V"
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
