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
    "5uE21TsB8SWnTLWEwkpoUUhWRFzmTefQYLE6wgxGHH3BS2KCZbv2PuzCvLhd2bCWB8j25fSLzveXxPdPUBLhEVA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R4FTogkoyGaBVV5My3F75PkPGZpkXkKqkWq9jSGBQ1im1ESfY1UDim3uscYzjUN5gNpvJZ1aFpT54RBnpQmmHGC",
  "key1": "49mzxaWHskveMkFgM1a22GGnS3GrstygW8LFb1GsVwh1GjJZJ6c2AzKyhLAvX93nRRVJMun6Cd6vaRk2HyAVs2La",
  "key2": "W7GxT6bHVYqVHfaLJucJdimcSSRQYABJAKFBXaFsswTVvaQaXFPaEH4x4zdXrrwVSQKzWvTNnzbGCS1NaTieEkv",
  "key3": "eV9piwv47FbWmkBUxPLFwfgUxwuTKxhKjoaLAaSuHgJkJyZGrbY7sWeHMkfTQYdFZByQist6RRzSpxYyVyNHVUS",
  "key4": "4nDUPUpKz64uWosDAXzjBQe95cce2W6JbdHc7DEWReqYirbSZygifTaBp3bLvij8AgWEdCc5L3R1nVRKGK9DJiZT",
  "key5": "4Jts2d4XgPgKgib61F1AjDBxSnChcusVnynTmrwdTUS6VxoMzHLMQ9aPMyeNCJPN44W357tbwpaX5NDSTSAfTe95",
  "key6": "4vyymtWC1JbV6UVJed3PaLRNxE9ikqLnoKjxmfAsWXLji83oXDqnuCzK8LLDjThm3VZ25BJc8GCP9cddtHPquuXx",
  "key7": "4CiVEXfRRwzMVXxJ4JgqB9L8vyKbWko1Z9CbiviGf48iqLXqAWFHSdVkSxHEzLWnQD5j27D6fDoo3FctkacSApQ4",
  "key8": "56rFLUv8n4GVSCgGzfAGWLFDd3cVoTif828BJFCdyLQbAzm86op5HNoYn9h9F1rCM6ZqiMsX2fEaovKfgvDop32E",
  "key9": "4GaZ6Fk62NsjMeoDdmZG16baRLwbFyZBda8Ezg4QFutF2TEhyB2PGNRCN54deKJRGguedMvSJainp9WtMqaKJosU",
  "key10": "2icvjh4XawQUjEkQMcxGxEMGLChHDKNyGcK1nZ5Ziz4UXcyZjdiYNmqeeSADuRLMds93HfZBZ3435MV2EBDuv7rX",
  "key11": "37rsqtTPNcNjL7u3QVYF1okwhWVssBr2sjssqQ5K9Lafv3KBiRZKuSvuoe2gqR5jdkU2BFRrtkWuPhYkEjdN2wPb",
  "key12": "2JNTDiS3PBRQa2Cq2zsureesR64Numk6Q7tanPr2FnqjJ7omnXdozMbdr2hFt6SFH9G6LiynbytrqR2vkxRKwG5u",
  "key13": "4nCKaxrPFxDasnuQfGMwafAVL87FZGHZqre6qr1dmR24BSp9iJrjRNRK35PSUcX17qTnfneDBmybrY6XoWr7kgxp",
  "key14": "QtQQTVYVq9zJmjCyuejaxANwPREpMk92ropwpFL7gdNs8czHYSW5xdG1w16rrQP4tWXUM7P86rdbZzFZd7HZih1",
  "key15": "DpvUCL39UKkbDdE3gavb34aJwJm2LdFPcJorNsUGJF6s5DUGEe2phmd6ZCYSs5SqHbqqwsxTwXCEkjXGeuArShw",
  "key16": "2eCYJGfzTT59aq3NGiwXtH8txucSvNq16cbgRt9dsqAeanUMKG1WhVCaFYcRTpMKe4JToMcbmaB2d2riavGcQaGp",
  "key17": "5pzQJsPqMHQ8rfxGvCAwRNqPAN3ycpWVwuPneb23DQLszEshDf8y56uGWRuh2mHAq6NdvQDnfGfarXa3Bgssgrya",
  "key18": "2LFfdMMp5oSTnzip4ydJEuykxt4mJuZJwN4zzo4etTPSzHT54QUbZbM3UWG1Tn99y49brmgXaVhWDPxBPkv4jwhN",
  "key19": "2G1ZAvLXmpCWcd65CphWGRKXwaRxcJMZzNegoeeXmepEwYChmUN9K2ohbALyXFyRo92pRSNvcCCpxs75sR1w9MKH",
  "key20": "YMZsRwoi1eoqFgZVUhL57VZ3xpVy7cGbP2nQCByhjwiQKnC4eQW3ehXFsdHmixV8s56GoitMg6k95H5edwPVByC",
  "key21": "g8qujHGEpiviSL1RCsShg77Fi7NkvP26sZXQiBHn4HvB4pDX7GNN6zSk24tiKyQwXdkzvmzkdqkr9QAboyiGvYQ",
  "key22": "3ULHVX2BSMVjRtwQx1L6YbT5qEcueQHDssgZ5Sj8YdutQfdEVmWN1b2GwTrTPBsk4YsCCDkCDbW45QoLnbdKcjaF",
  "key23": "tDbee66cywfEbbrjymnzoQE345kA1aBRmKHwr6qWvSsVWwB9b1At3363JReCVh2APSmwJpox2UexcJNQer6oRS9",
  "key24": "gk89RmZ8LSn3jRev8CWc3k5QeqhKYjQrzxKgapeD2LFHEK9utrdAuNKTJSEBTGv4x2LTb343fqaotimguamhtbG",
  "key25": "2BqCFkK7pVFSbUYpV3USXmY6w5unoUtu8vxobnK7rgktzP7XQnVirh8E7yJGCnXiXFE9RkZgqSe3UkkW5cNXe8QB",
  "key26": "YHwtpmCKeXiJKXL9TyzhKA6NcjTBPPP9snwaQ28JAvPtnk2FLFPqRcJEJSkVxAvhGxf2ANDsvmBg8SfT2pPfHa1",
  "key27": "63jHKKqzSZjVvgj7HKYTMEPBVJym13EJuA5Tzbu2LePN2iV493dxn15mNQrYwpL6JqK9FKrjFhQ5eCtpVxmCfPAS",
  "key28": "63AZJhGMKshJXiZNEL4HgAgeTM7LxY71QUuCydtfgz9TvzBYqHHWFf3mU8zqjV8vtRhiUWq4etvmiwowZSPKa2RM",
  "key29": "hEbA5BNFNagTnQP3R4d8UQQsdpYmoBsJatSdqG8QsAxgn61Dbg3s3ynoERgFEoXUzJpYpP5jbbZLxwkeXSAPrDV",
  "key30": "RxBNQhxeteFTnGfFjhHqnEurUXdynjWBGP2d5HWpw87w9FHPyGMUTXvELxjtXcJ77ioUycRwNwyQ3GezBY7usQj",
  "key31": "5CpsGBwLGX2YToogMxhuS1weEgTD9tzaBqqvVbKEixgYXmAvqUPz1UZfTGt9PYmv1ke3Mc9qiA9VwCgLJyPdPpgw",
  "key32": "u7tHH8Jb7GsJGtrMMFD5RXhcaNmS3c1pMsbD44Hiet9XBcWHNjvH6tYvv4zeh5gYJZg1k4svFtzqbDmgfbQoQPQ",
  "key33": "4qb84o66YjrrkA6zjmx2jeEge4LTMdcavcHu7ucnqvgR7sAkGq4gi8FMT3CFsKL8CyzCv8FEYhrHByJi2UGCqBT8",
  "key34": "3Y5fCPZJz7dtR9iCNas9poXWXFT8g595Kxsuv25PuQVDCozDJ7rAEqiT4o36iy7S2Ppjc75AJcy7YmNXRxzf6p4X",
  "key35": "5LqnKPTP5dWJDaQxenFHv1EmbXUXNioy5gjBi16oQ6kReSgLN3QevpE4najyQaAdf29g3GAH9JBhhXxxTKWywbKW",
  "key36": "MjVJLX9nHs4QPdgKdnA2coRgoUDr35UaTxmm7mssNZVNGefyV1kAER4ojXdTVnNkmWHF2kG93mksrLaB1GCf4pZ",
  "key37": "4vDUpn3gb6z7ZJCzHbAyDq2xdZLJKJDUY5LHzEn2p3CDvFABZPdKdLiRMDurGrkPQ12LCyfCqF6WXrx54HLePHwf"
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
