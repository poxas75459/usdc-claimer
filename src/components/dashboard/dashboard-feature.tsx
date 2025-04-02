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
    "58BH3EGrZDVZ7dQhE8Dy3SsprAokmcphBWQJbCpwVbShUBnURQ7kDWAfcYUpt8RUd1Ecaxri7yfvCNXX2aKTd1sn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b2UhqCNuX569osc33qGafsbPzARanfPqBj2uC9YbgiEnWReFY6bK5wioQf2mhWekkArSucmYBAn3E4R7CrWyXkp",
  "key1": "icPmQfJSKuFw1rKmdDxNJGN9WeitNWfCNK7ddnhmMDwNqTpbgdfM9DoGKKdQuUsnscAYVXaQfomy6uBxzNzsiH2",
  "key2": "BMCHEkZJRT4eXsGoKVxx3Jadp7rkarZMypNehKY57hjg23uErJS5k3Bj6G6yATRcspi2DBQig6GMwTqF6dvgbBM",
  "key3": "5f5TiUzb6bdGNKwWwbcMfBsBjcFL7BBkyHBCN5icqnbN3L4zJDZ5AxuLr45d8hBFxn2eAdaxeVEicDcQzDfFuDUN",
  "key4": "2SzC1rgG27igkSokMiYpxRJS2vqp5FSSbcAcKLYmrbWS2vmZYHJ2ZyT41eW47og2xnorSaEp63aEtLJTgAJV5U58",
  "key5": "5r1AJM3TEcePqcaDWJZMnGvW7Su3kotUZo4imYEgYsuqEGezXjgbT6wpM9Qp6YK5bYT9UYAGgHFRi4CfvDxGM4rk",
  "key6": "4VHaUc7qZH1BCpE5hY2veoeBCNmaXviR7M5DW1JsKZVsmGiaJhQBNB7nBCLeGd3rhsVL3VT51pPLEvaui5bL5vfB",
  "key7": "5BJHJMvXTjyiLfgNww3TDcxceFGL8C8WVnLqJZAsKHst6L4ZsieZvokb54eZfEPR3xJFEu9WVoeKMU16Ayr8QFxm",
  "key8": "3un4FA2QnPFSMwX5KuhhFNwaBHSwi4K14JfrgajU88UQ7fCvVd6tLuxmXb7hzguA43VrvorQBtrrXgkQEeiSZb3y",
  "key9": "2TcsAicdajLzUdyWjgX5u5ThCAbHh2wq5FSHvVS1wLXXU9yjjgoB29C5Gt4naxa7h4VP8tEUcQtsnuaChEQYUnqH",
  "key10": "2LZjNMRN5nPQvo3XoyqV62ZQe4Vhoqx8kZFzAPWV3SepTScQzoJmi7NeHYm5UUTfnZ4k221V4GNh4npWtsdLqZB5",
  "key11": "36hLWtWcQqEzeUb7DRHzhUqraunSewxAEeCDBxFVBwBD5uHqj4mKacsmFWMMBrqSn1gUS3Lm5TowDY3SsE5aMjhV",
  "key12": "f5xZSK94hDrGAiEb1zEfn3HucmxLowPJKGQmh39FRhVkH52thY272dL9tP4vLGcCTDNqGiyEX2wuruLK2YrnYrt",
  "key13": "3oboBEEkSeSDvRtCdCxnz6mQVKnodvndojwFgRgsqFuNAx3PgJ1FwLM62Tc6j8J1jD9DeN9HBkc9nxFodHSyGVCb",
  "key14": "AieHZWyEJVdX6w8zjzeqgjz9BViw66Mm2zkuNN45ecjG16AE2rw2vK5Bw3oLmzznRqP87MZeqXJ9DoiAU1cthWk",
  "key15": "2qGssWzw9cqKqcBQrfGDtgzkyCW3GRQzUVr1DSsMu4wPS1dRnSAr1KgsYQMQ599jBL4VS5NRi3ZTAYNYL4mcdcoN",
  "key16": "5AVvZ9aJcSQW9KjovEApnds1JBgRQVUkuNWn99HKHGeDHpZ1LBEHijzgAqCmXTcc9JUiexpFAVhP8EkeUaKyU244",
  "key17": "5M2yrEdQBvjokgMceXZsA4zsNzVV4pJPNx8FZFV8fkxKfBgpqAovKGFYz4HYb4umq93tUGmGNy4dej8LjEpmu4Ee",
  "key18": "4EPJMkU4WSivhzwhNnjZsoAmeu2hmGN8YE4Rq17cmzaTTmjqtkMFQWDefKgfWQYHPRHzTmmyjqYRfMH9uA7JLUrV",
  "key19": "27rhMNuuQU2dHfRGPhnjVGa3DkZ3aZEAH78z16Wq8SBwV8rYpsu577cx34yxZ6J5mhKd872J7YpikW3TpiHRaGG6",
  "key20": "R5zQAALSLeX7j5tnQwiNbXgHRX8hfoyoadRyijeUEMyos157k3nDdQSodHZ84W8Cq5xCpn4UYgNtcbMeyN53UqR",
  "key21": "2zC411Qud9ihwspqXPdwL1RSEQfnrFPkcukkXmSdPjg8PdCn2ygCr91o31YkGBDHMExQiK2S2qEkqNSCruwhLP5G",
  "key22": "p5qRgXFZEJZpj8xRssbRvc8pavN74nVxVwQWwgvUHYCehB5EMEhRqLgHPiqKxxPp9KycKLzgDVZE3h4td7gr5m3",
  "key23": "bB1Y6Wv7fBpZYBhx7Hv5ErV934a8aDLBWCYb92nxFjYhV9fSXUmtXxg2LyeBV7epA1gv2DeY5iBaHut8uMpdccm",
  "key24": "oAtC4y7AxXcwg2nNbN5ivkbztZ4dfnGpMM5aukVrqH3rs5o6f2jbtjq7F9zDZMPZwyhT7rpGytWxyheD7YkCgTY",
  "key25": "63K57LdvMwKis51cAzP4V39pPbX7y2j7B8wip1LFYTUJKNAv86fnZoxf8iKaceEkZBpAUNyqQJV2eBcSGHzDSdib",
  "key26": "4SFYRQYbZ94A6x5yrX6JvQ4jctJftAUCVMTjEabj8AHrqnHrhRyyD1hD7qkpUqZqKdrkvfnTxX3MCz8tC5j811DC",
  "key27": "5VaZjcSuedgtWk8qrxatqupdoaEzCo4Zh7JJTMTvwr37CE7jFHCUBobnxfq6kpvtBc9vnVqP25UcVhLquB81nbx1",
  "key28": "DZmjYQmhHtbd4V59Ck6b34Y2HG4yLxNdFsUrYRWv23kRCRBMtCcJenvdhEikFvppqQUXMtqRnGq7K1kfiTijp6N",
  "key29": "hrJEnpTAZX9zpNLxhv4nc8UvFoAFBp5C9FYoVQm5fRKdv8sEcfAehASRTaaNBaZLsLNNNpMGXhscn5ynkU5XA69"
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
