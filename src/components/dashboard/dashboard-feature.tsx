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
    "4iLHDMKqL9ZaYoHgNybJUZcqLauXyzqYZsFmZsTNSUnwnWRhfz7xoxRSj45nxgngENif6ytiPyJiKgpE571piDN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Anf6wyKzXxQLKhYsJuobq7g9gJss734NbG6iTkgabnR9guAArrFgp29zVAhMEFQY5DBqdxcK2cRazYiaaLfSLU2",
  "key1": "2AAq2ePfCTHLqTpidebYQPrwoUZUeP4XR7M5ssstsRw1UcqsNnRTJnKYsrCQ3zt9dG8MzDtTAPWFsMg1FS5S8C14",
  "key2": "5zuECUmTo1hUmeCykYacEMsSGk2JRr2fXMerb2qxQd38oszcCVQgs6hoiVSdL4CnoPHY7G9Ng9uXRdBSwKPUaUoZ",
  "key3": "5SfHAqVNjEJuxaXJhQo4bLbiaCfAXnHh4av4TmUcPLWZXkdXzCpbBUiZiunGmewkjAyUstfePv5opZrT8SFEhmFM",
  "key4": "37RprwqtK8p3VzP1WvcpGyGxrm23fVQa42bC32DZzF9wESLfBEf5TS1eQb9sMfkasz6Ks35J2WdGfXFmNMGZTGHG",
  "key5": "4yeJqLq6mKx3H5aF5sU9bGSJia5oPSkHXNZeskdsqXTN9uTsDZeNS8rusua2dhqfBcKSxGCyP4jAcSaMpN6r25cL",
  "key6": "4VQmq7nboBsrVTeTaynf8CnQV5hmZBgsXe9iZivqQ86KkPff6Mhmnvb8L7jucFGzfzx4xfN3qyKxzcSwkf6pJbrc",
  "key7": "4kJCLPgV7qpfr1CDihgFaUtevWp2ihHuGfZuAEHikQdAkfyZbML1188Y13C9zHwyzpxUXuzr5W61vyHsTruQqrad",
  "key8": "4nzDb6WKxi59q5AbRYHnh39GfD7m6KkmKa5JDQsM3L8uJFijC4fsro4P8PSyH18BTgSng9AEBqs2CLG2X4NaaR1b",
  "key9": "2d6zsuq5JTzcTSQjByCsjbrkQGXTQnsF7KGGvWDNghfPdi2LHoJxdWTvR3Yfr5TQRvUAuYi3ovLfhYwGQS13Nj8L",
  "key10": "23fXvJR58piLv1Pg6Cc4ffrLnr6jwuQF4jFyXav2k2v3Li1xoAFVSeX9VhfvzSxpjAX8SPvFNjHNeX6rAeXzENNt",
  "key11": "2Nxi76Bk8j27nJBsbUZTAddWxyszbxhoofQzgtAagQdQRP7VEG3GPf4VisBJEwC44WXk61PaPD1hK9x6QVkCn5KK",
  "key12": "kXyhSu2dYX8SzSYtd48bFLoP3MV7KUpMFkL3sMyYMmuNr5QiFvQ69feRo3n28AJ12ahrAA64FWc9JGKb3fHyfk1",
  "key13": "3gwu7j2SH7okGLK1LfwPU4sFNQDsDPtqqdoaU9dpq9x77MAJ8eNNfhrCoZFbbzC7w9WtGxdhZSRUc2vT5BwqAUvo",
  "key14": "4CA1CnNuzAuJApMHKdAzEavftQP1rVEWxoL5DqLhi5DQuwFairxCyMGh8hwvkVYGXqHgmfCw1z3V9qpqJqYkiPBo",
  "key15": "icpj8wzLiiHEvWoNziu6HaW5bCExYjZ8HhdKa9jLFgwZfbyd2cqN2MoUSLioQUxpZQSUdb4Z1bWjfJUDTSKBL5t",
  "key16": "64etYAhkcWKarfrswFgnGnDPGS2kn8GViSJbrmwgtegKJEQoawEKC25qPGRNJHR5qESnt1GAHCMXZ8fn65nqWwDh",
  "key17": "3gDd1KCb4z3i9pnkUVJgm6ZVbFggQHqaVSkUg187KBwyshWw6iVUu36XJ9jZwvcoTaK4DmmSHQ1hkdEq2Mn2Arne",
  "key18": "3prAnWtT7q9AtgNke32MzhjhYCXeNDZjwoCoi5EPKx7uooBYje2ZNuBkKgkJrqoD1tXb5VLhaUn5262BKeMzBg9y",
  "key19": "5QKR3RSr1ACn9MZMcdgMVWftqCRFHa2RdUEYoa6gD5zT1X5sXfw43o2hfgMgHCg2HubyCnjz3npnMVR6UrgpZnEN",
  "key20": "3nQXUYrqLvY3S5ekneMo5vUu6ex3aDpaHoSWZBwtiNQ9KpbxBLCBNTvLQfZCQxLQ4Mo6hpDd5v4HQhYBnBCgLEsX",
  "key21": "5ondQTbeReAJ851K7Sgv3Eftpn4CZ3oSp9f4rPdDQvvs2hX2TTzwKbN7UVGViwAgAwWuVegxSeYGfv7K4azUak2q",
  "key22": "3cXASspxGP7Lxeknrt9nXHbBG8FA5331PzRN4j8BdwxxoYFxPgVJopZbaH6bmWrcaKVQ1JQatG7BR8duYE9NRBcd",
  "key23": "4An2wq6qnLnpDRYXiyb7YeY1i5qzfCtJSQo7p6JYoTzpPZ3nNN5UuZnpp1gKXxebEZKRioMcs8BjkMfgenCMqKna",
  "key24": "36LnuWvB1D1z2b8iUjucAAZPADBocowNFGyQSaeWA1NbwwfRrbVHTCaVroW3DUCTQgrbYYCn2q5W8YAFYEiQnnog",
  "key25": "3efJAUTyXUYZS2vLkNrz3ctUngNSxB7db2A24FikczDsARkqU5jEA9FU9opaPb31nc87GzY5YtDPZtrRdH5QAaqq",
  "key26": "wPz1NcsdTdvayaZRgCKabKdX9NrQvcz7nQK12Bd5WrXRB6BZAM5rNqrzfoZ4FQwyevJNxbE1puzTf2fbrzyxbGo",
  "key27": "4C99B3P4U1YrDKXsBj1uVQccWoy5m1Jn8FVuSKAop7FuYBYa9m5iGAZfPorQnhkdZev5cNx7qwaAgN1ZC1hTTXbX",
  "key28": "6J88tej4P1BWdwBC3i7qV7hPpp6bWdu4tjgvrcb9Y4BxMzS1iHdCmLjqA4BsJWgqkMiiSZbopoGgcZZ4Ze2FV7G",
  "key29": "2SLUpL4Vq3jE4URakSYsyc3awT1vJ26a4fZTXXjYePXC6LrsAb3ZMUCVn8iUTDxhDS7rrWYrURzQBbuGwiMQ1hUo",
  "key30": "3zd3RyPKYACJR49z1xyCjsD2Ea2pQpRLFiTHLZ5uvS4fgkYQHeLEws9nVKzoqGoYtDvNri1Bhd6MRB6zQ86KcKSM",
  "key31": "2EJevdcFxyeBxopzCASXp4qY8x9UAMrg1H6bt4naiZr2MeaZwf9r3Kv4xdf2AQ55AYfSZ11fik9K2rpTNeYAk2tc",
  "key32": "qLzxy5Ax56ypEt1aeroXa6UAj5iBqgn83FksmszvBeAq1ynLBFjn8F8CLWLLGYvbvVZtW3URhKWBWpUc7bn5pc6",
  "key33": "5NYmysRZeG4kkZ5BDTb3Q87xLd5PHfbSd18ABP5e2STbcBQg1GCsUcRgd8c3E93hn9cNxQQHkcfr1Puz61LELDGV",
  "key34": "2nuHc5TtmDKbWbeoCsdhK1wF6u7LgWkVEGzXFNbFWz8f8gZNmzMADPaVyGUfwZRJVyw45e8fYaLB616uppLQmqKp"
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
