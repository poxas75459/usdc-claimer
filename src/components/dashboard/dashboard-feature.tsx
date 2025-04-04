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
    "xrJoxEELX9R3E74WEMNUdwdewfh2cPhiHv6QaSPSkdemS87FgyYrTLEMp9LqGD96RZuYxKHkLoqYgUtN2y1xJrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "332MbwuMjcV14drk9FJUi8UqRJvpt2FwGAJStX4GwbUkWTykaEh1GJwrVEghEBfiUCCRk9pxMoYeqWtsgtmPuJqF",
  "key1": "2WYpbZ9FnqSuaEt2isiFs3BF5r4cZ82shgc55YKSqmSygi3KM3ieDNjPekLHuNmdeVrQYcKreVraPXeH72MV2FWU",
  "key2": "4mYBRgnAakXvmdwAT4RK94pQvgH7EuPoAqLc411sJHexJfKCKUjXqm1wNn1s5dzDjGYbCh1zfZJqXJGYLWggCGed",
  "key3": "3GYWr3JhxqRAuj9KytcnnPhJCgY35Qg3ViU3b3irdRzBBR3ErtvoFL3WwHrFLKockorcn7EXhghkF1D4q7v5Broq",
  "key4": "4hYYSVtdG91sssrdfzyu7awmRRiriKdj8uUSesfwx865qhRqCjaU4n5kRo5UmPeGjSZaZMHpYvwetUzd6PtMUWXT",
  "key5": "5CDdPgySyN1z2e936oBoBamnMHZw7h3FJzzk3aqwHbRpWviFAQFpMq59zmmmPk8hhvsXGAV9oj2EafjvatBSG4Nn",
  "key6": "3x3guhWaBhxVeJAGKkwGa2QJum2N16nymt5GJpbeJuaTgJiA5fNZCGtrxAqBuvaBA5bH35LCHrEVG649u28jmvyR",
  "key7": "favzcbtt1kCLcg6hzK4Fn2Z2X2MyNoZsHRfVJCWCyjR32yd7t1463pa9Uvky8hpByuvzATpyGb7sDDrH3dkHhcH",
  "key8": "4KaRezSSi6XG77ix3HUT6MpJuBAtrjTuYJ8ipRGhHTmn8ob7X7cq4u6Hc7uhmuKBPrEk4xU2fT8cw8EnfcJM9fUH",
  "key9": "5ezypSvGK244D9qk76vxfpHyok9n6uurY2AUjqvMJ6PygRyGJ7t1BLSpKmtgGBw3QLUNwvGWbryz2BW9RE5oCTdu",
  "key10": "3EuZ1YsZrL8t8CckbkuibJef1tvrjW5YzLvHjYnLjoxZZHeydCkUDbJAq1yEu4WPCr88DmDizi5kdcsBqLH3KiDs",
  "key11": "4EoWZFeoqbnhXmnrtwNRK5f6GiXjxm4fTgxJsBR4h4QbtsqbpkMKieDVXwDAKSefs8ddvY4viDPQirhQMjTMmQEx",
  "key12": "YPSRNJkwuGR1pRizAxWARtWu3XLtuXeQTwFANntPrCJx3NTfZHXy76vHYhd5zXhKTTjrAdcT8gUZt5GzVMrJTr6",
  "key13": "4mynJTyRbtmn7Z6Xhu8oN5TyVzYXzmcwCgXPzUL6x84PKrAzMLy1AVA545R3N4XGoNzsNw69kVmDVvz7gt3mHBCG",
  "key14": "4SnjFYyi9ANxrLwQnP43ruiPHC7qqkkyj48FPrxmCYAzF7hUiVqDpF1JA14wzNB3BL53YUwNLm2NoXACrhpQ364K",
  "key15": "4Bx8gCUxWVP3ZuSHTQvBCFqipHK648DqcoPZGf8zC8y8xEGe96dwdo4Dcp9NJKd1rPcSAX3nN4mxFtZPTrMdmjNY",
  "key16": "4bSMn5iq3zHVB8626dVEuYJN6h1BiKKfaaa4k8AqFAPePhF8YE7KoRhNNQP9h2TeqE3dCiAagVFK9SCnZxypMxJ",
  "key17": "2SAbVjFBZNE36TkfuZfMsE6uRP4fEcYvoSRziDMjXUowehCgQb6rhukNp8HY9sfi6o5nPNxaDfQjz7nPT6fY2QsB",
  "key18": "TuwXLYyofC263xLQSRbhAi1JWeY2fT4ijpFYGHLnTP2i3inpxc2qhv6kcbLB97dfbB4FZh9pYzsnQ8gN5g6YWyY",
  "key19": "57v1t7tiEF1NyGtDQnr2YMCC9r8MRGRUDvQzxpGV7kZCyKFLQCAp5wszHm4pH197DgFUjLuwiXZKD212DES5pRb1",
  "key20": "2xnSZnWHyove5jT8oZzU9YHyeSdeNCgRB4BDCvaL31yRXSjixmiw1ssaFSnD1pkSQKMMU8CiVETPR13yvN8pbFXH",
  "key21": "6ZgC8wtMtpCrHLApQiMJpgfo3JfSRHjYSQ4Eugjy4jhUbHKheG5doQXm3nje6buaozSJVD81CP8vjHrGorMzENq",
  "key22": "2EcsvEaU9HZGXsBFnJaVeYcD3ZigvfN4noqufwiADGC2XSckkTk4oZa3zeFqzqxw9s6LwKMxcArg8efQ1CCQ5hxu",
  "key23": "ie3VJUCh7XaUFsFBgYaExEsXvJ3DRL2H6GcT1bYSxekuzjQLEPUSE1CRJc7kaSRJP9x9imTnVeJEjW43RfxCZPu",
  "key24": "5wz1oKh6HkH38jBaSChD6rQd3uwMtQEiLSdGXDnr1VbWsMbtLR8gLYeH8dABis2SkLCW7iHV1NRaFAHP2x1PwRVG",
  "key25": "3Q2VAfLtdfDYvi8TFpL8YtSyaoBis2t1p49ruiqtZ2NQ85Yvkz1qq6FMwsauN5Fs3SSaNM2eFTgeizXFCgDXqhAM",
  "key26": "2k1Qq9sfAyDw71UzsrWXPA7Pkg8wUDGmyhowuhLz2Lnjy674XCP3VSDaQu5RDTQtkH3mNMQbABdgTRgh5Rp9dEqb",
  "key27": "2hYJnzcSs4QGHmHAm5omTSCntBrHAtDi1MVmxdL4q6nb2kZ9ErnDsiMW1UdUMixuchoCeCNhUPr4ac2rMjoysTY7",
  "key28": "2gRnvk4djpB7Biswzi2w22vaDByki4Eq6dnPYzZS77X3opv1e37cdGJPaPdeBsztDeNHQRRyDFVcUn2d5h6G7BiR",
  "key29": "4bcyvEEsfL1iHEtjKrYhWQQBCfwsFHauFaARoybd6CyvoJ6EJyHeJqpZjGkALBhHALFBqxhdyaPA14zhhLgRPy7g",
  "key30": "4KzjQo5rVkiFmChNF9MoEKi1LEAV1L5NQvoahotuDW6mUzQjPjuYfRuRzKMjX7jbgQDzRe43UqB9AKomEZ6YcQFk",
  "key31": "5JG4GLGkJeTGd1dxNUtWmKnPdvT2dD6HVEkmhWLYvc9nJcmqpTaonaNG3j5rULs4jYtRhMBAdA7HYQNLEBGqoK2Z",
  "key32": "3uLas3Bg8SvXkdn5hLDAZjv1zegFvAwTMtrqpcrM8mkvQAjeSQKxfsHYUtGNM1it76KRi5pTLtdPH5y6efS7BivZ",
  "key33": "5x8A83jEgHjPPTyQPRohCTLKBRbKCLkkaKT4JmAgJq2DSM7Xen1fftRfQAvhV9QyaBJFwVpWW8639LjGMDjn9hKE",
  "key34": "4YzeG5SWYByJWoCDFuwqk2z12sfJswAPYVvuqhfEShkjh5riyEFPUF3hzjGLinZx3C9C5XbQMMo3sUFHkaXCChiT",
  "key35": "Jy4rCyKKuFZMNRshQ7DFXtXojQyQFeeEKfJ7TxG9PoVaHft8oWMfAF5ZeyiDWHogDHg5Ljp9Huzmoej2UvPedvj",
  "key36": "4Y46prQfKMRx6VnZjPPTTsA9bfgtrEWcfSAbRJYxhicpy8BwhAtpknxSy3B57StD3dBeeCeq9dHsEmmfe1xgj4pM",
  "key37": "YKcvfgNGQPMBk6dnrRQCTyGLQmgr89XFyDBdWwWSgJAi3X6LYZzxYJzEQ3dxQVvPqB1o7FZsU32MJ5239WfCGiq"
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
