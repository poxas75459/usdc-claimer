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
    "5tmgKFv9QRuaTtwBDvX3A3azGatCYSvVpJBPc5vJPRLEY4NbMdzjCpfryohuHMeBcPhjwdUVNcaWkAWfkWwbpJ47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ezMnxznXcJKMWbCvnnaz1pw8tanAYz2xaByHuSEiyD3qbjoDNVfpybVFaa25cfBwrrxEVhqhcSo2XrDNZJkvxNS",
  "key1": "4WQRS7D54w8wVGbgQezpb2ChykQ7EnrmHtXKNAx42U6rMKB7R7DsGQ8z8hBGVxxU8MJvtggSkCWZjsTx3DP9yvvY",
  "key2": "49r74EkvUtAtquEfCFTmTvRpuBd8aStdMw6A5YkkJQnxUfZYgXYHYM6q8Yhj9GoMUD1kmmGzZieJTmeAwMbmEKN9",
  "key3": "2UEH6wpR8QJrLWMLfPXmyssePpL2JaC14MrdZSCT6USgBDj3TxsgyvdxezezrE8wCxQEEUxbsSRNRSeh6KKAAuKH",
  "key4": "3SgBJHyetbQqeJ9YEqcXrhNqaccKLsv3vpMw7huwFbSGi6R49bo2LsXNE59gm3LwxNGKwPdMs6Aqb165ZLGYCTMo",
  "key5": "2PxQ9jZmaZgspBTrtiD4UyvG2PbuCxUaz4b71z62WB5Zbr7QK7tHBffuhsxyHEmjmuiJazLkbXDyWDe3sf9f34tk",
  "key6": "3AB7BY2wTniqvfVHcyWZcYiW3D2M2v5ueTR1mD9SZkpKLzfFTLt1vjFJtpS8DY3ABpgtoMenTE5ZxbXXyCc6E4zd",
  "key7": "2RTjyjqCAAojGpoH3E6r9STscwRpCq53Q41c2pqGUUhrWKjs1vDFpqrDzt8QeJuSqexcWEnRWUpLmStFk2eeidtw",
  "key8": "36zVh73B97sXEyceLi9j3mrmMxsexAHKXzxDUeQPfNJFZcZk8Se1xWvjp1GuMoioNG4GmA32bT3FRbSfgEicpndt",
  "key9": "5qzEM2KiC19CTsEP1bnpKWAwrg1znZiTxYa56qSTj2pN5BGVRpJkV5aiEQkrzNSzHfu7YWU8aFyEtGch9tQWXvT2",
  "key10": "QX7h7ay5b67BMr8B25kFr8vbaWtozMm2NvjBd7zMui5hS5WSvhJt3PTvGEJnKHZfZGv4xNoW6C1jdSj1B5PrZgS",
  "key11": "5W952HuDMioEM65jyDvNYjD33YgMDDLJhVDeZu22ZyRWeXXxqJXF7Sz8PAhhuZo5YBwKiMdUiRHhsA32EUfEYhFW",
  "key12": "ASXsRZ1SkA9MQqDqazbpjbZyQgqHGgoPj9Hrunko32NLDsy9MtUwppDh6naAmRxVk5Lhza1B94taukGKFQTPq1g",
  "key13": "fU1DSJdzSCYxeTVbwM8TRBYn8ihZRmD9pWLZ6ffAYYUDVMZheAZNxY8vgEAYaBKKkicQ2wc2kr7acqGTrehQJ5W",
  "key14": "5GpXLCDBpQurNCGsX4NPB8mBTyugLqYYsTBVGYkpRCwbznQRbr2hY6Ff98DWCGKBb8nWo8TS8ba68X2n721VXTjx",
  "key15": "3JRNSLRYUyAPzL79fF3cJzXmphvLdf5Aj9s1KBeBbckbVSPgqDDUonR51mwMGCi8L5MC6NbmR1yzEdDoCodzTAvz",
  "key16": "4GFbzUNJwNSPJ2Nnzmq8WMxMWccqfFsW63J3r6EtdRBmuMiFGJDiTMHdgv2CLAhLigCw6FWpWr9UAiZxtGUUUATX",
  "key17": "3AxmM2ydbP87PURqEQZqaPSo7f4fuPJaWxkMxX8E3Y8WcaQRFLvRKW5brkuMgAB7UfxaHnFtNn5UaFPiq6oQxZKR",
  "key18": "7X1ngtX4VxTFSR1kciGsvEWyezeizdUFMcpG37tXR7VrZQnFWtLSJPqoS8R1CHgC77oxoJuGNobZX7fi3RMwYgB",
  "key19": "zqRWgvLbngiL6Mv4eWd4ZDQ4jqi8mR8N3HgcoYqnf2GYahv71BJGqhLiMuKHP8qbScxsWEQPcSmRnvWZqUhE23E",
  "key20": "2bC7sYos6khQrfXJ9sjeBSypwPHNxXMma2PQYV3fKEsH3NyPfufkM1zv85bnWBkrLCopTUieQNCeWqjpyppu3dVd",
  "key21": "4wwNZx5ww6ZnLobdrwzxzVGGRXMTXdJzc6VmwHvxSTQRLyppG9faWFSWvr29CccNw4uVG462fBQDonqSrr6HaWX5",
  "key22": "2fRwi6YNN6YSCDxh4Aoqm1Pt2ovmqb1xeSs7zPq4iZV8qfYEyJ33P2fz5hXyJT2KbDea7kXGL6JuL54BM6kw8H8T",
  "key23": "45nX7UncY7xWewFfUZGc9f7EdMjk2YWYT3YjY5NfeTxDwSLcaS14rMLwFZpn5Q61rfUQAwRn8TnKokpy4mUKEYS4",
  "key24": "3hZ8dUhF8CDbjZkLb7Xus6tPBC88FAV5qWud9EVAv3sYySQF1gvztaQ6Z9UFqai2p1wpS2ygAC1KRYjDUSHCkima"
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
