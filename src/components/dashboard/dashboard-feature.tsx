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
    "4Lgt1vHmibw5TD9Ay4YmJQbqUs1pewWLfZMzicLsjoTNFYb95AoiL54sihJvg6BXPYYGXXWNr356DTHZtcSejCgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZU4D4FjoTD1u1iEu6Wa3kgayMhuTv5JBkwy8UGTPvPv6wViVPbg59FiqWygzyP8Wm93z3bNLNXCGEBmaZXQraQS",
  "key1": "4eg3aWzDrMP9JTgHwU8NwotEkQdytb3MSfykRWkfkFrzNdj5YCrLnNLvi7keWbMsn52EeXZsdJQbQqdDfFwhvMpN",
  "key2": "4Ta677vNU8fmjzrksmCDdCFs62xxuAz85LiaCUj3Ayd8kMkoLKZpGEK57tjyJ8cVobvo9Ng6sWHnrDMdX1F6buLp",
  "key3": "5rNTsz6MoRUU62uSNMvrgWFGQgTNpYCwZLHo2YwF1UCutABtZAHQ8MGosfhS8sA7WnDEbwpwRs4DdzWgfMp3bQCS",
  "key4": "4bQhALqW83nnkcfJYqDRN2mBoXZLd98wWAoaVLppx581hf7d4L5jpDRxUibjzgQgUxtLTi48YCb6Nivk31poFCk",
  "key5": "644Y1ZkK5H5vkRGGmcMZd3gfSEjKWeuZdmxatDzMrLo4qrZkPTwK6gZFh8B33RZNQuZ1Bz3zbhMYL5mEJYKkCdat",
  "key6": "4f1SrcPa35bCnCfQ3GoLoHoMxFRoKqFtUsjatjn5SCmLRLHhrthHvE9QZAzCYnWPh5gnVZXXz7oC1tRzQXkEpUNN",
  "key7": "4TmyDrb74vjzPqt4rkrk2BZ4WdboeWCSMMBDzCnDPugks3thQ4Y3n5vxXeqmzwHsTXUPFDvvCsfMFR2AcvhFtGRe",
  "key8": "L6wZ9nq9AJQTwkFAYU8LuWB9Ao5D9DX7X5kcWAJK1Lruoj5kvwGy8ygiPBLVWh28C1BCZa9s5QUESer4viyGHmu",
  "key9": "3LDFYvieGiDdPqvrJiNvwHLjaDqxVU1z3duvm3eQjSLzkUUqAK652ZciGtdrPyx4hCfeDgpGoGsfU548i23k22yX",
  "key10": "3wWP1HdaMJpnHqikXhFCi8629xUgn3yt7yadxKANbLDv5SrtaMbfgeFbMvwf1wHbu1ugmQFJLRAfJZv3GoSNTwSX",
  "key11": "4mfyCatwyL3TQRuATp68Ct32Ye3fRXjzBpKpMQ6Uuqe6qTVmSgfxvvvMKBpymRmg542EKXSFqL5P8YCs3SXrYSnD",
  "key12": "ECL9Z6cqfREHJqTaAM89r5JGwNCTvCg8rqv2U91kPVm7bwDSuvuotdufUB3Kv6JuhM1jAjaZmCCqR5pD9ZEhEnV",
  "key13": "cBLFUnZok746Eo7dbNfYThgc7ZSdRjs1BzXkYxLKhp3BMbLdTv5gUrJrvvKink6V6ssBFRq8rcvqrEedorRYM5d",
  "key14": "tnSGXdV8rkmTMKhMFg3nPH9uSxU6MGAQwpq2Ky2hWDXUFMXtuZAduxkuQ8rmUqcbkZ4KskQXtM4xYAisTfikNNT",
  "key15": "45P7eiYG7KRsCp1fMrHr39BZc3xiyUWcB2KMzczdiHeo3fjtmub3HoBmAv4uXKJtQvVhCFv8g7hNuo7FruPYVUf8",
  "key16": "VduzRsBgyt4HxTz91rhPifGiQhBThxmrQ1Gp3npbZKQKYkTwsZ5X2bN4V9C146NjfdJcbREFbgJhgttGW4SkX3k",
  "key17": "2ZHQUiu1X9eVW4SQVEawohiFQD1qb2p3CfSwMTxFNeyW9GbkU1Dp1LWhNxyvb6j4NHcthAh6NL1koMTKnXK8UNKj",
  "key18": "5kixnA8xt96ddhjhsyd84fdHnbkpPv5HWS4GL4rSFP97F3WCUTBZDU2JZ9WwWsCh2HA7anwmnriLdaiEzzrVoRz",
  "key19": "633pFSipHsNZxYVKP4KHtStd3v5xHLSLFuseukjSkKBM39BVRG3JfkSVFchYewiXcjMS62kpZvCrkAsFnbEYdpPS",
  "key20": "5ksu8sSzzkeMVYHf9WuxmbwmTXcUADpZJoU1Zd6taih7svpL6tAeYZifUEZkMoiqGS7isKzY7QjQnGYyKMsF61qY",
  "key21": "31ju7Yp3XwW5GYvUUJJqVbg4WARwSqopHmsKqXM14nU45MXVBnC8f5tDqP64UFsLngmYRuzjXhRnZTNAbaC8Hmvr",
  "key22": "JbaubszJrsWuwoftZAxHBm6Hbqma8FssaPTQvVxdtmXWGK1QtCWbCDm8CEBTiJHTijfDbMAA6geGz4rMfLNK4DW",
  "key23": "2juGDF3Lv4wdboeN76UYAE1pqAbVs6rcmEhJkchw2L6GmFhibuGXt9ZznPnP2HJTyKcf8pFUEFrbVGNSurCUhxLR",
  "key24": "oWDrEJHNUbQefrTonBqfAvCojX96vEPgyx5X9aJMVj7nAUiJuE5mKXYtWmFkh4mrVezRyGe8SJd46DhywR9GtiL",
  "key25": "5VNxHGxPL6qDvVJ9tYzmYGFEtQwBxddPhXKPzetrqQFnuK265RHg6CKuJMbw8SrrUvPi9mgFKdxdRmCkeXMaSBBW",
  "key26": "5eJkpSSbPTNcBDbFEzmHToQ8yqSG46QcNpdbaBTFWB3g5LGScJjeTFAFPEUcEZzQ2zshDpBjz2L6zJkJFELKnsWW"
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
