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
    "42adLXbxv29h2QuBrSLPijav66v6MKc1mrzzJDpvNNYBYWbcCPAQbm1o4D3VBnnyUKTrdeESzTJ2VVoXATc86v6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mEnjTGZ2ubo1Mo517MLQ25CGmtRKGZCWJPy5ybY9PGFdu193kanFczVkbB64hy4dbXjSEfmVY2vB6dveSVUcX2G",
  "key1": "3VLB7641cDRvHKTUqpGsQjCF2BQXih1NbhBq2PnhnymvhinyA4tUdP8Gvzfzb5iyBt26zQ6fB7YRg4v7nr8o2ti7",
  "key2": "3c5HhjSVgiBbHpxgCPCdBZiB2wDR1QWNqxguSKhsK3sLLnYe9WWz12u4fA2BxXodJC6beTg2TzevRY9ezuNwGJcF",
  "key3": "3JPgNjGGzrXShY8GXAW7cZEDkG5S35k1PcuZL1HHgP2e9L2uGkKA7ngx9sXpUUpVd4HMhbm722pTR6mGqYw6GjJS",
  "key4": "4qGbg8aXyYwkWBcueJeNj2KChc7VHfiuViquKY1LEy8KEBwFyAHQFLeXoi1RtD8zXEFr9jHKj4nsQ8mrcMAyHCqC",
  "key5": "5PMGkPVWZvkHC5DnpTNj5kQAnrxGWWz3jnZAyJRUyfDzRMDLDTaUk5tJiSsSvD9LEhjKSkoPkGntstHUDK26JNZs",
  "key6": "3yG2qVBQh9JzAaaya1uPMNQHUppVPrSyR8Yw2kAjQxUhTkgZhWUZ6mA2Gq9hYDv4ULNduoAMXhhxeN39Pi4isFim",
  "key7": "owFVGVFQorMN6eELSJ6ZWk2mstprLzTo4HJzj1HYVytqTkGVUix1Eg5zgbJzksMLVMvQo4Jj4TfPtZoCbdb1e7N",
  "key8": "2RaNbgPdFDbxdpWuV1qihdSKUjXGjDQV2GM3nqnTpFspFEAZkipyBRGbQ1HdL92gT8R4C2B2NyM9CffN6dBzp4dh",
  "key9": "4bgCfqCFqpLxm9UAoaVdqvwyQrDMr6gGK166fXDUuQFjrqNoVZEGXeZetiWmoNFxKK8pSmxGLn448xqcgab7XeXH",
  "key10": "2VzaCupxreRSS2YRDNFfzzXi2V2JaFw7EEQNkjXrWs7yxZmBysoAeqsWxmDQFYCh5L4uqSTCRavcryfgGEUAeJ78",
  "key11": "2cZu2ZLrGoPkvDPSpguFDJxbe3U4iMB2KRraAAGpcRsXNDVdHhT19oA3UWxy3pVPMcYSAmorCHoPnTAZxSEiuqvs",
  "key12": "UoYCnGo5RoDqFbQrDLiBaUgqZbU5WgZSNwHdwYkJGULFcBEodVcYDyAPcfK7bhhrj5BSymTwEkqa777UizHsodF",
  "key13": "3JiWP7PJ7jN6tDTFZCw7meyqssvDi1fhjJmZhYYBxc6dWf2pfxMe6tXrVfm3xCJHYvuC7RixEZxZiVxYX9pdyA2i",
  "key14": "3GJvVSWEZ1LsTBNVaosPEQeU75fZHteJGrE3UFSRKnRnVPe3EF1NywxzWesUhAjAAEfpmiyRrMvattxXgrno96h6",
  "key15": "4i93s8HbApVKd2ocn7qaNwqLv9sEv6ryH7Naxd9CepqQxfz65XPBFWXWe6fTsaoj3dZYP731cEMH9cEdvi2Sn9cV",
  "key16": "3udjy34sh5yEnYRvGrZh71JfvYGZHLeHNW1VhxRcyZB4Yzdr45ZY8xFAYfF77Wp7SZ99ZoJz2D6ViH2WdbEZhMMo",
  "key17": "ME6JCA1XPY7mKUYX8AWRY76hTqV8d3XMSjo2aUh6skEGPcUK9uctzGYoU8ReyUULDryRtJVHbnaB4WKhbDPppbv",
  "key18": "4aJPTC8tnDwBwPMqgM1atPX62gugv13EaC31UThu87b9jCEpj9CHJFuD25jqX1u8691rhxsoQrW4JveqttSVE51o",
  "key19": "4bo38ojbNL5MxKFKaqhzcDRRcDRid8ECZAD9SGvtvGbHc2vBazmQ51vWFMR4nkya3YggBQGyb63zpBekcqaq3EhH",
  "key20": "3HyURMuk8Q1kC6aqATAGfqaACfgEZPcShrGp1KjsZodHEvPeotKo1KKcm8A8UQbcdGvRDkAjbHksVR5YYWPoYiv8",
  "key21": "5M5nXUWzap9b9TAMfr8EYy62mMKGSt19qtco2fMyhqn3T3dhzzETyn4TNHuSfFCiRyw7R7uvpQxFYZ5H3wDZ85pH",
  "key22": "3sGLLSJHRjAZ5JLUS2nGggDwzxYBGvBzB4QezfdWHAFyaDm6MBi3iSGtgDY3jbhyZTQur6WyuHX2FETHtPtDiz6d",
  "key23": "4BH4f2vo7DjGEFoTPUCkcaYSwz3SzxWb13FjuaVorGzJToox1stNc94dp6yuqJQMEShUtcq8ynyj8gb2WMT8LRF",
  "key24": "29aqUSxDdvkUwBwgRctamnacDNPSazboaTfWKD4hWFB8cZTcdsfKcdqof8yocswucP4oHmyuzF3oejiNmAiTT1uy",
  "key25": "5ed3gDcqXpscgrZM5UX7cqEhPTvDe7H53BoqKhGHAyCBAmmis5RpRj2vnrzB1v6GKRbh338qjP4niApjkNWsV4mm",
  "key26": "56xEK2kqverPiyRJ9WwibPURc393XnuAVS4F4RHCUyU9B5VMRHgQRbPQL5CAjqHV9bVU4wdaeGwBnATU4e7dv7pd",
  "key27": "3pvLwGbg4eC78hBdJMQ9U1yrTvk8exz928JJH5n2DgCDGnGR98b2nsjS61qsGi9HPY2CAp2Bs3YFLDQdK3fHV64Z",
  "key28": "1Z8mtzDY4RNXC8bbafDwZPFZEW99iFQcxeQ2jogBQ8wLm8mnAgxBaGzPVKw4c1q8S1GMG8seS7ArfX4s5BvzqRQ",
  "key29": "3wrapukecAGAc7bFRacrchLmjM9QomRdWSWnV2Qhze5iEzmPtnuyRnPuAnMiCEmAcktiGJRYC7bwxzRMNgY8mSTh",
  "key30": "PgUT2T82ogeL9KZmrEJNSExCf94qxKZSjAuHDW9GqGSszhhh3ZrCoyhNZCPgjzoHR5mjPJVTYc95SY2sm6FSQxC"
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
