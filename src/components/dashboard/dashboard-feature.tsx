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
    "4akqpSn4TrudLDdJQHXbESQ2GYc62GszRwK4DYg9hdjKnDuffHvFNoiVxbb6ichbdcXRqp314QDcFkSXNVCHsHTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nrNRWoUydDT7fBVfDpBrV5zsJtop93HoDFXwYAxNRTKEDSjX7QdQ8YTRq4DmeDhiBrsXvtDGQqPsJBhY77hWdAD",
  "key1": "96XzYvFitZz9HKYr9rJ8zprQjFNP3PxPcNpw7K8amFY88cE8supP4FigzVuwYL2xx7LJZAixDJBYujTxbTZbMuM",
  "key2": "4b4SSiQKMsLLT78Q6WNMghhuqRGMQcnUy9odZcfq5tLeXoNJJrU7UwG91dSdRRwXJNHPbonuvyZD26XHt8XwcPNF",
  "key3": "4Fj9mpEHmMLSbLQ3GaFgyBthabHewthovhooeCRVRbzystf9w6Q1hS5SAh9yvc6mvXGHV7vrS8f3rtxowyvbGYLQ",
  "key4": "3ay8LmndL79w339PvoN4McgeAqtdYArEftH5T4oxcNRv3WJuACFSwHWAWYdsE5ZimgBNkcdZqNBRMSLmcjRL4dbp",
  "key5": "2AcanNu9qrnFGUPuqTArncQdho4nCo3tVFyYLzemqRnvNsh8Nbznmqv2roAuNPV3hb3K2ZmjQQ31GwsUhxRetmLX",
  "key6": "2cJmVP989wS9k9tRHp8UmjDxziAqqT6JGp5feHckS2mbPooL9eDHYrxU7HzYHAukEAVHnvRzPcjxMSWWPEEg94Lo",
  "key7": "5TYyk4kMofdbBfyzYZjv6GkmMt5QUEkNsUiip4WvPCgF1syK8jkT3U6JhZmKbKUnBpukX6oToBUZpUdcj3qbYXDh",
  "key8": "5S94h3nwKNXNuu19wtvPvTQfiRFdkgWCiKXxMS4oFffwTyRaaHGyjtvNCoPb7KS2aUB28BRoWiffz7SVLue2HRtq",
  "key9": "V6W2UYEuCNRqvgEb7oRLGcxuXc6WFQsb8iz3beBqfqPXUHdLJPggDH9JhDSSFFq3sxqoRrARmfPgZczM7m9GgDy",
  "key10": "v8KTdXE19oYwvLZpAK6sxmBrVXyYnkV23ERPfFP9FkescxAKb6bKtTarLs1sy6j9FQj5eXhp7vC5AU7yEN3PtES",
  "key11": "DauxYxCoaSm2cTT5FKMcxbXGNWQVfRHmftksHFMwsv2Lbq8ehsx2c3TkvH4FsfGR2cXEKt67Kh9t4H9aZaRQE18",
  "key12": "TpvDzebuRiLgoJUH46S6wbcAYr1HR2sp78yLv4TrMegSvwG3V32JFnwp9GT7s47694xuB2bRq27SHTZnhQ4uW39",
  "key13": "5v6dMWA6jXohBCEB7ubZcDSYXbfYsRTBJf6gpqcRoB8MbsGKyckMyy7dtjjym5qeU66rgq4mvR3n32UgPbXrE74E",
  "key14": "2oUe9M8zHRWxekP9kCj2JGU5ndELHF8FKtX4jfpTY6qp9xN7Tw3PQoEuNBuvZdEyoaGh5LfwjnN13f5iV1xALoMm",
  "key15": "2bdDzhoLxLvo27rcZb4oUWWZEQECyVsrHUSNZWyA8LyFEycUi9S8AJyqA1J8FMbaDkT5NXc4LbDcc3kcNC6Qjreg",
  "key16": "dyRtkEJFCHXm4vuGatCiqvCnLcPxBzPN8XnQ21Adcwp7TohoHeEZmeccTmY9QxBVzDKzEtkVaisQqpFjZ4Msmk4",
  "key17": "3agcmeebsVTCrjAd4UcNVNS1sZR7n6Agwy3Roej7i4r5UpqsHwK7Js3LQc7UaqPVjchuCZRcd29CHUvu1CCbHiZe",
  "key18": "4b7tbgvUvA3FFey1XuzbofqePUm1NJRcsqbtcaQ9eaLNAmSGtDUGxPZX4125pD3fwW2CxzBUCMNT7P826PL58ruA",
  "key19": "5qPAveYdaZ6JXd831wWuW4o3UBtFd4ttvkyZKgeqgvKsDvtKvbiNFt4BxNM1tfd6DZs3sXVJr96MNG121mcHmcnT",
  "key20": "3ZN3xRTgoXCpszk7uem9HLw2QP1iB21YM4efWCsuiuYrf9FQ2vuiJzBJfPQT3k1gDs8v9TyS8U6dPpk9h92kKJ2T",
  "key21": "5urEvGjYKqrdzZwyss9JmqK1ArH6EXqoxpKxSnqdSYdyU6aJGv6X8mn4nT93G1MfZ29UPSGCAJzqmofh8nNjb75P",
  "key22": "38LEA284tEqwm1reZDRQvPma5zk9ATa4LbF2XqCMeprgaW3JHcRZYi6F1uZDQjSVpz75sCwWpquDSWpFpHFjs7zc",
  "key23": "46KSWiGehaB9PhPC1UrHVUNH8yhhBmZ5dJKVbEJdwaPwjpwpxZZgH3esFgtYW4RQkPrpst27aBJ2UTG8p1poKvTw",
  "key24": "21K68dfa3NKBYmryLzTjNGcPotycDZV7DhDuKqmfzgqZLgiBj2uCKuY6e8WUibyR1txr234Z1wgNQuBAEV6L2GNa",
  "key25": "KNfQc4xKU1MmpMA2Ruzpo1wajbDcGuZhAGvPYPkpMycaNz71voJbmRrAYhzKbyq4G2sCcWw7fggafSvsPt3bdEv",
  "key26": "4PsfKcNZuYb8fjT4UuYJ38gGK33yZRjJwLC9EEfzjM5Wfpj9VhwkKp2vxJTJ3H9MkhQRn9naiY2CQcSxtBRdZpP6",
  "key27": "5LwH1HNPN7ncsqujPpcHgWz3bBsjNHuT7e9scMd53auFm6B1x5LsXH7RS6gzdqrq3eFw4jrenL3b9tFUnASLaQ7M",
  "key28": "3uXTS6YcMwRPTrT3sEAoXqBv81db6Y6jBR3wDaV3sXt3d1tSyi4aZmHFGwtrUeEv45YEp5778xytyhPcaacwF1v7",
  "key29": "3oMBcGVXzLtJZtYkNSa8FnQawBKyGANDSgKPGx1PuAfZ4yRMBAzEYTDFdhp4DFUvU6tJiWtHuksnALpkMBMSRwHo",
  "key30": "pR5fytgh6f66Aj6HoKrWMu3rHgoqY1Tf53q6C8pwN9u6137zYXr4qhBLnGaW2t1fJXCTPeiCFh5Kidry4cVJ3dY",
  "key31": "4BFHyNkjqbYJ8rM7vAf3MnJvrSeBVqQhEqTpk1FEaq9jtKNZz6zNHSLxGb3uXB5GP751BTw4Pn8q6wfKripp72Zv",
  "key32": "28x2GErXQj6E92WxvHam9gDPusAfQtgUkyFsnbrx1HdKpXnbR7br1xpApQV2BV77z5mdXyP4uH4HDNJC9Y7TXRDr",
  "key33": "3fYei3gaNbc2odkMDFRw7fHKuCYc3eb1bKkAgA247EsysZZ3Dt9MteCs4w3jFyxSbBwQh4aqyuyzGVwXxMGTmZSW"
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
