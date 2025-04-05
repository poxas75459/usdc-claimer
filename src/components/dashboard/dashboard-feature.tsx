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
    "3mZCb7Ei5y3MNAN7cA334WN6Df23dBtxnv4C2cAhLk4YPcSMhELz9h6KZb4YYuomcKBNtrDxMRgwzcxHphV8PfDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nBVvafepEZEZUk7xGSGyx8AnSDUAukTDde2WRcnyqvStUBdWNMauSjrPnDGsPBzvoREXQ7bmB3hwS3xu5PAXZ5c",
  "key1": "2a8LhiPQdaWi99gVnqMb3C4QNjM73MunnJuyC9aRVLC2RuxDDc8ocD4DAPjtdtdEYPhMYSZAZP9pnEwH6g71GQDW",
  "key2": "3uyYmZ2xuFyeEFY1nJKsZMnXPv4NmQLLWY2AS8AM6n8wrVQVsRzwAqVg7SyY2B4zrGXWrqCybVpHPW1GjJgvdNgX",
  "key3": "4xNWYtMicrgFCZrFVELbiMqSL7tnWaqP1dXgcdiroWcZP4PNp69bLXDsejD6U7y6AfaEd6begJN2epvxNAS35BAB",
  "key4": "3rCfUccftzrmyjrmm6fPRxbmFcmdcgpDeC3XF1MmP57xP55bsY4v5AWwabtNG3asXW3UpdBBanfY1YKYPksw9C7z",
  "key5": "43rdUtRyUVqPVatRKWZNvozwk677S5KmBqa8YMa2Hevzx9vWNNRBF3t43TAzAogiGePoN9aRUsyRM3rmzSiL1ddc",
  "key6": "3tASHVT937KdKCxwFQMa5QHerDgFV19cr1nE9fYAKYKPX7BePNu1Tb5tFmDgb6UhfetXKTZ5UgB6JnmFwgZdA8Go",
  "key7": "4WNuwTnEHYqo86TjnUhun5j5eUQ47oSSNuYyNULEKwEtZuzoJNccatqCyvzd3Pe6jq9CtFR84ygtpZjVgdBPmYYz",
  "key8": "4YPmUpYkeJru7DfsdvfDxFUcBhom2zVp7tfYajTY42hbfjWx2vLVCAJoQQws7EHRbNWVTLYSsvA2yLzchtKARLf2",
  "key9": "5fxuECXKDswh6jt6zM9xT6NJYsmaQaX61gAMCZp2WVHDz7sZxh74SJiBbdHgRRKsvwquSjsrdWko8ugfsjmj3p6U",
  "key10": "PyDtEYuda1PmoojbrQmmPAJJypxGH2jVLNskQnujtUkdfLC1znTfLioAmX7Km3DDA9CFsfwdr3aEDqFbkBCB6Ra",
  "key11": "3RDMFNPd6it6M5nbxsrSEAa4uDhkQiJbUt2Jn9zq8arub11cu9u1MmPE94b48Xo2aYJ8s2b3aK81SXySfzo6oNov",
  "key12": "4hAjhQAMrxn5RHEcJCAUCu44RYz5XeHvY6aWTKKmgn1TemwN9gETJfgKVytXqScuurtdDhbMXaV2Aw7z1qS7b9rt",
  "key13": "5Qi88HntGvYBjk2if1qvqtmRMSLHGkqgJ2YEtNY45Amgu4D9re6u9s1kJYoHonkWd1RzDLJeBjW9KkZsYk8n3vBD",
  "key14": "MbzRGmVwVjCjUzewXcV1bTGEMNKZP2aQe1p21uTmvHZUG66eXL9xoJmYWQbmDrecP4UCZ9ErRkPhFtRB7tAFDKB",
  "key15": "4QBFi4EENZ6HBCi7vw32Dzb9Hz5LH9yMdEnJU8LdXwHV8QEVr7KoSv6o65v8ZSJ9dNhT9YdHRPxLKy1vvzAqR8GR",
  "key16": "5PPCcV5Xkjiks2h4NH2hVfrEaxe4UEiJF6NZb84Hd2YBGJL4uPfxSgwewvaZU2S59dYyBrw9jpmpBHfBTu6WTTjg",
  "key17": "2nykYBNRZykt1uZFbHYGEPRxUTTix9brfV6m37ZhA7UDJmCEHwZts2cMbHaQPpTSmAjvrhPPzoAiumi4HxccBcnF",
  "key18": "561RKKQWcDB2jKBuqwryruo7yNiKYGyHj4wRE28dBzFg7WMccaPixCupaoemDGDTah85p3WSv5rZMrvHqUBTVP5X",
  "key19": "3W7JyxPHgAQUdEgomKdERfxjURzMgZmb8icNDGNUofAa62MUwTbZtfiMcwQghgqjcdGPFw8bFFZkQcUEsuxo4kRh",
  "key20": "2T6F9LhGYUMMrApbgv3MjtFvtA1MnBAb3qfaoz8tMcFoDTks7zDPLZFmDA2V1xnU43G1y4cyR4T81EKPQzRUaWqM",
  "key21": "38J2gJnb5nyrP3LwLaCuQAfTxaxZrMUntbv7zqMMoy4zmLaFFCL2JYJD8NVnpgtgWxPo8mdLY16Cxz5XgYg7PCUX",
  "key22": "38Rt8nCKCLEPEZ9PbCmL6hD435gDTXJNGgaLJ7b2dwnBFpMGcwtf2PjfmpyeSUrRjqNrQWG9ncYQSynWGLm4uqmW",
  "key23": "YurW7bgqkXZJMLxFxCKHpb3qGjE7mFCYwtXJoVHG2iHyS4S7VsLb4Q2U5jwkdFZPfzuaBACr97gW4Fj4Em5mjgB",
  "key24": "3uYJRQWAcgTZ6EMVhdyqPaL3zPX7LYneB3MKu6UgbjP1sezFKB42BwPEoVoUf1tHY5KzHAXmtzUucjMf8S5Qyp1P",
  "key25": "4tSjKANC2vgggFaACjm3Hp6bkrfUXCEjgt2t6ALzv4CmCPoBCGtLDRmQWyLP2FZtuuTHQizuK4UWT3mrHoG5oSLM",
  "key26": "57tk3tZ5HFPrG3S7viWC3jBaJQcMhdSpWJA4Wu75rJg9aFkBSZYU36E4YHQaRd8ZY75Mymyyiac2gxX23yU5BdyT"
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
