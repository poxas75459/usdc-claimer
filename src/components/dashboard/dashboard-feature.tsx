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
    "2YFAr4R1Ubtye25bKiYjrsHX5nEMHnJe9WT6k8kHUAPzHevWNJfCJooKcB1z6ZNuNrmukCBQb2B49dKqMCuFZ2vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AnSvFT7viXifUdkRQKs7w9WCa4bHzwMV4zV4Gefb3WWayds7AVj6zA64DQTkNpDyfQ5FvsCvSzGRArdn42tTCUj",
  "key1": "5BcpYd4LDC1XUhRvkSCeXMN4Ytenw193QQmRS7sjLW5Fk8aiXSDskFwQbeiJqfUw28fjrDGQbpwRbCP256GdQvGA",
  "key2": "4y8qppLKoyWmiekvWvbzahdn8PooDPVMNE31w3V3DRG9i6jwwnkCqpgBaEC6ZfUbdXL8KQVKTKw3kNypbbSoaAU9",
  "key3": "jMLyRqmtV6kqtvLvZb8CPtBRg89WuJMMAYuZjNN5mRkhRQJ48WoJos1WC2fbJvMy5xacQSjcJUZVzoU9v24kbL4",
  "key4": "5MeddyztTKQP9mgWurG5NMXRuAk6U1BXh2hRqRggQT8vRZ3jMkVmDcYaenCvjxXHVoThGdBggEDbJx5n83ZKUyb",
  "key5": "5wCdSr28HJ2e5MYZvxhEDLfEjmVR8WUktSjhmc5YGSaFP1H2SKh6Edu1XraN1Zz4JFmXHV7KWQxzkwGLRE1LER4W",
  "key6": "2QH75ayEH2Ac7YoX7pv7sZRU2envPwzKAbiBu6aXpDLmtZTb1TJv7bCksjBKsFXeBHbpAunrJZBDYQPr1S79awJe",
  "key7": "5stnHC5SQBthVS3SQhiuDwm3tmbhgYUZTKNyE8SjCZG1dqRYcuPsSQoFcUdnJiHbjJE9FDBArHqsR3xJQpDHHnLM",
  "key8": "ECuPMXH4A6VT63gzjcfQX459pcWD9itJWHhyA1Bn6uSmkW5EkfrwF4EfjQ6NQoLD32vi3LzpDkL6FfVQnLnEJwz",
  "key9": "n7BCcDLNQPwpupjYC86Cqbb9BY67pdJLbPsds1ZKPms5kJ2EJ3n9RMfdtF2vYUeUQJiYwFE7gwiWFBBDZ2hhttd",
  "key10": "4ezHQ3ExBgu6UnAGAv7GhS7Ndfc7y1uj7GHJq5hZk1zoRw5UuY6ar26L1DCPq5qBr32bo1xAhUoibwGZ1BhBRaof",
  "key11": "3iZVupeX9XWijWXpR4ZGtaGSTHeCgyPC8veYDYWZurizf763ERwB4ibqNA8gP7tZPDEzC5hBWNCYbEhRW66h9PoK",
  "key12": "4tc1EZfrMrXW3KixmwYmtew2iR9vaEiY1fqkTmrjocZZURo9Y28mHA6Luj9JVf5NhEVgEnGTP1s3hVp4VGs66DxC",
  "key13": "4BAiwC4h8CnRKipAEFcDBXkD9iwYpvak5RGHRNuJQVEmsTh43Z4PmPbFYNK7q2vsw5u6cU3DFwJprm5d7RkpYQeT",
  "key14": "646Sdpe5fmJYsPzE2DTWWVcKLC3EQRfVjaVvSF1XhBLydZUftQNt51yp67aM5oL2RFGmAX6fvNwjg7PwzeWo3Aub",
  "key15": "5Xu3nLzKf1AV6HLYYuhVULpL8JFDWi8U6SpBATPQSVPJJiJTJ2Pm8dzhM3mC4Hzs3SDy8E5eJv8e3aqZLiyKmLck",
  "key16": "3f1wpmMQaJKWtxhwVJ5Xf5UCCZ6pWdSXunQaXinw9HVLZae19mkKFUbre9NwkVm2g8zZpfG3VcSrDtqSXoymqBab",
  "key17": "5KMPTcLQT6s5rFMc2bp9PdwUHQqtEUakyfThhQEuJTsDV6kgiMnL8paKvgrQsytPq51EmFRXB68WPJDpVe4omyjD",
  "key18": "dNcRyvXPZQGEytnkZxAXdiK9yUm2XQrREX1QVwdxf6mqCJhhnWdfN9eS544EmVtYDa847QyKooSC9zmvYmPEfKh",
  "key19": "64cuMjC3hhcbfzgAJQHe8hr52vnxkimhenZy55WhXe6N1JXXRRpV85xfC4GGViU8ToN98seTM9vFCtFKuVAtjDQ6",
  "key20": "MbPP4FBt8CbdSc7E61TWNdSXMFdKYg2NFJb7gRRGgSxNsHmyJvktxSrWpotYommCmSTSnEvhM6YhTYvqAnDqNH9",
  "key21": "2BK1gkiXPEZ21m1ZhoSe793gcdcrRkkAegXetjTifanhooD8rttc3QZfVEKYye9qmSgEFg1fsc3DDqpHXLuhfdrv",
  "key22": "4ZZW39g1hrN66L3n8FcWSZ2K7pbPDD6LZzshTPtJeM42NzTUjF69crFi8qGF7f6viQdHJr1iGUae21HEyq8VMk5E",
  "key23": "3pvFe8kML8hHae4hdvCi4YZP1CP8BuZYfsqpEe7woP2iCqXA77aUa12B1pSAizajtJp55oFJz71NszhhdkycRp8U",
  "key24": "2SPqSK33aAnq8PY2F6FRfzXyCGXN24mQ5LUrJ2HgW6gqysWqmVf2fqBYd21sdPaKwVir2Yhe6ySuKJdxAqJeM5xW",
  "key25": "3NC82R38611QE8jzo1vTz1EwGPmDSDZoBJuGyfcx4zb1bRJP7e4aLoqJfoNy9RbQjFTbGxd4VtAYu9PNPNK2QGhy",
  "key26": "38koc7xewWKJhwTAEfgJJAx5BnrJneg9EewqUo4mESfrkaKdmJH6mxAWw2KcZ3qJGppF5vykz1fstdFDAxyPJnjf",
  "key27": "2J15gufGj6JqcdCRcYwCSe6n8LQkJoaMvUiiFFKzeucEsx2eEMYfVyBU9ZsCmFyTiYF5yR6qaugSpay6sD1s5jJ5",
  "key28": "4FvsKvGfKeQQkiNJiGaeR7zEVGDfyMz9DZ9ZGBxChP8xTGu2WhvAPmTqLiFJt7wmCc3P8fL8eDF4tKgmMcVbrxE8",
  "key29": "5szkmHEMXXpcvq2W8V8BWpCzgBnqFpA6DXy2E4TQ5Gr4fp21PWUYBkyYd2mJswedf7jRdftmjKs1p3tkdcEZztpx",
  "key30": "4aHBYTaaszkk8B8RsE8Ut3137hbyPnEVqEAqxJPXtP581XzX8itYQXvrwDejbhLNGaUUvnH3ijVd2f4CJ5vw4HCR",
  "key31": "4neMfTYWtq6YoEghe6NFdLHnDNVXXJfNjmJiUrwgRtCAu2YVktgUdRp2kMkJDu2Wnjiewe6Avmqp2qoXgnTyaPuA"
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
