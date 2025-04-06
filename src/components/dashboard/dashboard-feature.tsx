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
    "2yt2cNUMJXHFHLJTcjH2sC3UHdQbJUYvjwwPP9DmbUTEtkGmFECAAfjwtiwHtsudE2wUjbepLeT1iS6RQwxeoYF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zMvuLKwb669x6r7HZiJNFkLMXnZGnHgADs7L2iBTkbMBVHt574owPaBSJ498rSF1L8Yk8oV6CPnZks4heVenwPy",
  "key1": "p5xtVFt5GnMd5wNThLMutpEEg2XdKR9fUFS2rKgCBHbrSe3yVPsJdiRY2SrMtMnm55yoHywM3NJLEQoEJQ8ThS9",
  "key2": "4cHU1Yg4qo1kXzPZ7f2p443r1cBskbpfWGWDdxaBUK7AsmRPrMoi6rxrhegodvREM8gKiHakpugjaMqAHLxd1fRu",
  "key3": "2KjHjG2dVi2KLpoL3kMehvvPEpbfFe4B1Cfp45ypsTynqmdAv5xo1ppb5ko14cd1mAS8XioUBrq5QiGR6EP5vn2P",
  "key4": "3Cok22xBErJ1gvAWTDzZxyVQBcAuMCHe2ke7JyMZQRdQSLLvKHESu24FCd6aEqyz9VnS9SDcNsN1pGsh5C42voXc",
  "key5": "5B8Ly44w8QQcfhQu3oQB14kh2RpY5wLBcuPyNfFZWxsYxHVJkX1FQrv2VuA3bzGXb5nqrVdfrwUMPNhgnK64NHCv",
  "key6": "3KuK98sBk1Eb4jj6UKWeNLmi3XzckmBAuJmtENdUhtY6Ejg6BumnPE5vhqMh9f3Eemc4czaV5pinrXFMF69Jq72Y",
  "key7": "4ZDbpATRyCBjaSPBmDtAoGvwYnjg2FKXNdGS2f54ZPZeBu7iyYpmRL2EZZbMpr1me3JME8h4H3vUk5rbjbgUj9eH",
  "key8": "636x4ErhzntdVS2188cTUHgPGt7gquXweJnYPVs2pk5UzcyEqTpNgVhoK13xJjGviAMpK2wVAVNEEbvpDi2cJqGk",
  "key9": "5ya9UViJND7JfRYctwttvdFJK7fA6ePDfGgH9vwyZkuByxgpYEL4fxeGzZrK9hEuzJCSUUYJzrfUqQQogoypTjdA",
  "key10": "4dPn8mJos4HKzRCdHvGu5j7tQa8Wo6WXDgGWFMAxAZSoe4gamJcbmbJwxshYn2JiYRmRa84Nk9ZLPRDyZYX2TfqM",
  "key11": "P3aBrb2WW63CMRefshyH9ethoup2HopjPkSnbBpxEK9yBuLqxVdoh5iMi8tpgQGJzLMGvgLWgHbYpSE23TVpEAR",
  "key12": "YbTEUsuuBTo6SNTvwHzCM6yHBb4XEeWFzxvwcuSZ4Q4AzSmd8qRSxYDommbJ3mmWo8SsWe7kcJ43UHePWdH253X",
  "key13": "3MPkwF9W5zYYvPYCvFYrkexcAQiHz1ufHj9fEnJYw5o9CYwboC6y1HaA4P6q9Zf7ZacU7sPbBJoDkToVqwHPasZH",
  "key14": "4UM3txf8jamSF4FqPW3kqX6cC4L19utVTo2snKuh84RyuS8RSXMcmd131R42tE8YJsosob7b4kkNpBcQ82yZbw13",
  "key15": "59oaUXkkkjyi7NeRgdkaYfekcaFBc5APw66qGDWp8U3jrsouzh6NooH56fJjm66qcQBaH9RqeehgZ4tMYRNCaJXn",
  "key16": "5iw4F8AyFSmRJq1is4D4iGFepmLuNyJEm72bhhFTNDXZ9a8c1cE6Mj5WHP82mX9SZ6wTp9qwdXE5Mwiunxf2aVjN",
  "key17": "5KpVGtnqW1y4Jx7RMuqSSjaEwgtcR1TzXFTirgTKk8WNbcmPUgdF8NqSAg3yxww6ZYR7Ph1gBzTMzUebtjDDbztF",
  "key18": "cTCb1s74cFeZvoubBncSERNTrixvA5iHqRnPg9bncrsg1pwAQu6uAaCsQHZbQ3bCTkoULY76m6uJtGNpfAWwBUM",
  "key19": "2taW7rq2fuvvFY6XCSma6eoSk3MD39ZnCKBJE2EQj3erAUWHycfsbznipHysFv3kCojT8Q7P8xdsUqzWR5mZ3WjH",
  "key20": "5oFE2wnAp13qoybqSwh18RYSk7wMYLvCJXYv23dFUJ5GsFS6h9KdzN7oRS5gNsDgQL8a7m7dbpyKtwUiftpj3iwA",
  "key21": "5Ur9rgQjaDhRyoD8XAmegTT9GP3bereoqNpMMjo5VTkZpcCwRxsVFbBtmDfhiErqLWMXQDbTNCwT3i85KSVuBwMq",
  "key22": "jznKD7SFMc18VadodCdE3vZPZfKRbrg4xyP9sBuyNHRMQwPhbikcUAAnFMErPsHafPHEmxoLeAXzghWxqL1bF3h",
  "key23": "jcysF1uT5jG4K4xiQUYir3yS8b1C7TFud4rS5J9JHiABXLdUHvzDjSuB2EtePhMCeK98NTv9TyFpLjsuiXZ6jzF",
  "key24": "jkURq5rJqEiMGKqbobXiQGTi7BXXGX61SXySLaqGZdmTgijcEpVPwJ1kUoRuTgGs93F7V4MR7nZKrqCCQsDU1XW",
  "key25": "5e17pS3yEjhUdgxFRmndQBMw1fCrNGHqhKqHpuGknGSAiz6jEpKdu7crUtxPwRYUpR8BLsZJ6SiHbN2s6uCXei13"
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
