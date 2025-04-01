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
    "MZnwTCSpYdXkxqqo3CZsN2iKMRZyKWhs1vYXkWwvsvZmnHcksguC38udTZqUkTAeodEWDHdzWdcccVqVBycPqzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "661in9YgFdddnwXJ3KUDTZbVkXmKrxuJjEP76VADTcRiXFZf8Hf9zmiBati9tfJqB4qfZBHqmdSKNpU3YqizgEW6",
  "key1": "3ARKKuGRSXYww5PhpFmBSUPtDgUW4C1fgWXXs4XwmbTWmBAzygNXaXnvW92wXc9ouNdFA2ukvkJsQJZ9GpdWcFj4",
  "key2": "5VfHqH7QqueqZZ9nFAAvppBZ2Q2HT1rsSef9f59X8X7PgMBfSrH7Mk9ZzuadC4XJoDXhgHGHRTQcUfq2RXNAdR2p",
  "key3": "52oqtRo8TztHnD7o5jeESQx7GmV3Zdw1t7YZZVz2RuWWSoUYpx8vC1iyoz7tCYnbf5Aohg317pdNWtXb3eepYCKB",
  "key4": "5vobcE3bJJQSKR8YFZNPUw3xUyo665hiRETMG6FRYcpQ1KYgJQBPvkZ3WsuU3GduRBRyofX9pi1ayp3sa7jCkgF3",
  "key5": "64y1TyCggh5xBb8U3DocHCvLtbottAju3SjUs7PtEXz71y6F18rACTqpR4gDebe2myTKz6ckt6zu1Cv7RUtqY4Qo",
  "key6": "4kiHUXKAUFXPaybuUeXoAtjKwBwB7sA8xqKE2FPZrJFxAUUWbX8o74SyLYgp2TtsCdinQvHLBmWtAjV8h1P21TaL",
  "key7": "3Ju2Pxmphb8ovqXFKGfMpJ5PEbWjZUcPhccH8b8M1Acs29DTwtFj5wkBL1u9K59AuxZKmxihKLTbqjBF4Sz1TL9j",
  "key8": "26Q9JqNThVTWc4vPDDBptDk7kQCaTDDYjaJeXAuWisKPyq3JPDUqFqETLwKZFciwz18KkCEq7zXyXCpbdzHgjvNJ",
  "key9": "5f15hv7ipHfTpG5SMvgcquKiE9serwExayeMhDWjezKSbL13wz6QkAuvPY5UXTaaB621iCPjMicLVnfuFwFkiNFo",
  "key10": "56MWbK4Fc7Tfe8rsudRoM5sHTXEQNmW9KNG9ym4N6atHfQ9X4g9KkA4AYi98xnr7iXEnfwicqGWgK2EYPDxkNngZ",
  "key11": "3pGd9Jogcbz3xMGALXkmx2qNWJTtUN1gkEsnG83PrcUn1nWLuSXcPEe1nB2TuF8erFZwrcUS8eS31CeboRXkoF68",
  "key12": "5JVTFrhVKJwNrHSp8ti6pMKxPgqVX7yMSWhTbS1Y9eeuc1NiD3DxPHMPb9fPJsWEA3izLMcRqBbojZMTLuvF3Hb8",
  "key13": "41XtGrdi4SUGxhWXUT4i4rGpaSgh8QpQdtpVFq6AMkmRxUzWmuYnpwwZsfFv67Fog4GUQ3f8cKFKRLeB6Mt14cns",
  "key14": "2UdurA3FgrYMWmkZ4nS5h2KFfPyqQGs15Ewfjd6DXoS5jauryE8b8so8F4decegsKm8pKevAxALGhBBUzW3Um5a2",
  "key15": "5CZsQTrqgoRzmg35TxXLqWPjowH9TJvTrM3J7jmyWPgo1WU8DcvBhDDqk7uYeNCSp2N46UneWfAviqCfvpo8MJu4",
  "key16": "4rznWQBynfuAMTAFhq6rkUh3WAk1gyntUZVsFNWNjfyoKC54Qe5HboBaBQZpgY7YkCeFhDtwKLfkeysqMbuPe8nc",
  "key17": "5mhrxnbH76YgoGVMpHhGucJqsvG6SQp95V6chwGPXCUQdsQTm16sBGZdZHMDMKRZcrPyqdw4kkFEuUhi87Ktxbgq",
  "key18": "3vRAiRHbsrfQtxWGJcCpYxY7wcQ7CWh86SUcWYqPAiPk35omg6YM6HPWqdS5AoqCCyCsmA9fJMAtdzypbaYdMEGe",
  "key19": "emceTyhLL4EzxXUSsayRKqDTeRqKahcDVSuXdyEk2MUKPC6ev7i7m37ca827HvXD7HFFnMkvTNmcdCUASBxWbDy",
  "key20": "3VjGYRBK4TPqQ8TH8KUsjiF9f2NiPiXb2HeqbCU3e7JNqX9Qm399bnyLjyNJW8tFcmrewn9BSeSiPLD5DDF7DT9g",
  "key21": "2bc1ikWCnZsdbFyDnZgQXQx9FhSRMNWCE9w9BgoxJ5FDpZ5YBwV1z1Bz7bomdWPX2eYk1yZAFwx8VHAAuxsfSWLZ",
  "key22": "MCHCLkpo9BoYVm46SbkSv2vnqwoWo4J28ddZ3931dp7RgDJcc3ETzvUcR7BP5K1fJ8WfTXhqFnuX1afaSHonULT",
  "key23": "4xi6eibefizxsjV8vBkayfcr5kmH5DCWwnb3SUp9RZ3narwd1hXm5ejJ6qc82uhsQDppRSCw93wcokq5Ekz9p7Dp",
  "key24": "48biNP4wDbT4s7BcCfPm5EcPq8SfLcxHGYaT1FFYVGr5mGB5tRLWkc4HxAH45LwXPv8G1Y3KwLWxfSgcYqaToc4m",
  "key25": "4pnDBBBD3qamfcPAaAyatwSb8DzR3LrVzvYBFXZavnYrf1YTmtpRMtCx2E1fF9n9nfXxvHKLpsTrE22LZ1c7kJx9",
  "key26": "4hgpo9iXnNnpPoZMw3RrmUQMSPSdNzUeFFpv5GYxPJhQQLUpA9X194P7Yd1tcd47g7sMdmjxJUNQGJXXictFoyT",
  "key27": "2Pqs1fXHs1M8mvkBfxWtKYbkGpoHuMwK8b87Nie6AjGetKPcvuYUUe2bpmZjA1F5V7M47wwnH3PkA278zY8WYbs7",
  "key28": "4R4YLrvU6MeE6n4TMiBjYU4PTSGhWpQYPxWgg5TzWt1nT2Ry6ncm8CKANS8ntpFsT8Mzv9GLewjXwByHgZM4gbRL",
  "key29": "5fr35QM8FCpgnB2iv7TdoFZBfXJ7rCAzpLDUZjPwULfjq8UoABVUAaf38FjNdz8Rr4tC6okyFRsErsoRbkytW2vD",
  "key30": "4dYQ6cLu3zXWtJPCcckQbSQCzJCpxSqrJN5pmnerqwjyezz6FwhPPrK4StvsLS9vQ7TmSRxk8DocLUNCuDVgPPp6",
  "key31": "7z5WfWzWsWcsHaU6yJ7x7qdsEwmQAQTN439FDLrhcwmLn5W6UFS1Fm5yGdfhmamyE7DfCipGr9wo4pVma8fYByb",
  "key32": "Ah82YnTf1wJYLSdNrGtcedgJnEhvZgFUZ4r272zf8bzggDpb25hq2cwQy4FB9icwJzx13manZSJDQyRCXeG2iLz",
  "key33": "3oSyeupjjkr17FCajShL6REjXjmgU8C7KpS5vjZDY5UxxTGuPhaqJbJ7x8RfYhPQFpKZCFQyJSubGV3oJYfsQwpA",
  "key34": "472spEdomdpdQy8YL6L47o9b4Ht8vc3xHy5zcFrutNRs56cZFgsgXMBn7NscaxHShdaCQ6CkKJwpnooGQQsu4TyR"
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
