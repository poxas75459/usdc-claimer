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
    "5h5jzKLSdmXRQAK7VxRMdtiagZa583xxS8UKTweFSf9bu3hVvxcGj7B2S89sEtxvodTFTzrEhgagBaQJX7Be8xjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Hjo4QEyggYsqKKxsBasUTLSwCnbowvWFAoyBxTQFRytXrkwvngArTDgtsisfGqvKHtSAaKM8eTMmQBTo9FqcSU",
  "key1": "7iycGaHSGPC3YNvBL7mqvXod1Bg4H51WRTxoMU2nSUvHASTvWz8ejSyt2pbMqevTbvPCigNgBqwKwLNSjMfr6fz",
  "key2": "3ia73bMqPWd4d1V76for7LPg2QwffPjeu4eduiATG81n1qRmoNshf2YSdFRmMaGPBUiNh3aFw67gEQ9ACPuUkUEG",
  "key3": "LUM3ELndUj7rnXcmThHsj2ThpVoXHwuPALm8E2NJnAxTTVJvWNf86v7pY4wiCCNpvUsCny8AB6Z49Y9h5xNn7zF",
  "key4": "3ur7JPoN4C9XaGYiDFaRxFen6Gaj51USvHFpKBuLkCuCnN3ULfmsjjXLwJbyk7p8JgFeY1bUsbwsv62hWXbjv14j",
  "key5": "4MD8hUdzeMeqabFHjhc4KT29aQbw5VgrcNTkYixSnF7HWhMbWhhCHWWEZoq5LXFddzakxY8rVcMQURs5faXDhZuw",
  "key6": "gEjMwNbAEfmBbeK3MbDw9g6hF7Po5XwWHriYBn9JqwN7PWCvEvnca2BkmT9w4LcPU9JpX5VL9ZxA4YFnpDMEcxV",
  "key7": "4jBr4CWYnrEDxUoJypFKwKFMc8gJLkbFbUWvRjjp2PhAMTPjpCc7Ys8WSZL5Yt3k2zQ6pVp72TvyeASFDMVmBQ9Q",
  "key8": "2Z2h8kfBWiuHF29eWYJMmABXL92ePuF4C56r7FNZmMDPE4kgeRtCrGcDKqbFXsPtEAj1Mq3dnLRsYRCUiu6jePK4",
  "key9": "3rTrUniuYnbpAMVseVLvqk8f1QGNHvGKsFZ6vocg3W9jVF9EmdhaRToGQyzJZysbrMJmq3BwBPJe28Bi3iLSSLrt",
  "key10": "jGQDTCvqMkTKuyZKjqxEpR1xq8i2NAbuXwdr3tCFAeeMnpdyiR1gi7Y59z5nMEM2Ao32vUbYLThfvsrPwR2g1Pr",
  "key11": "4q1bL7ridXNkA114gXcz1eEDkD44KzGbpTrtbz2TyAjixDSoVY2Pcev7VPJ1Wd4Bj1LQDW3vgGDFfi4G1ZLofWWD",
  "key12": "2bbRmETPDiic5vgMQ97yd88yUVCeVexQ8WyY18VH2KJUWxH1TBCBaV88b8iKaYJzf4VSW6g1B6muU2FPDfXVqMfV",
  "key13": "2PSM5o4n2huSkpr68MU3F4s7eDDPVxwU3T6V3RMV3P6MCpWrWzsvasN9h2HDouEX5wBqM661M6rYXr37YFBnFoEK",
  "key14": "LnZKSSXsknF7Pjg95Mt4aWViKzJr9U9w8hwqTsgFegcVem6RKwioZnrK2Njn2JYcWQPzms1w3Ux6fVcYSrf78Dz",
  "key15": "3oFAXCJPWTCqF61amkQ1EMQ6xgAhSgpTc2VXj5EokyhgbsWiFK9CYXmpUnhAZAVsXgS7L7iRnvSgZ9Q91pLM7CGd",
  "key16": "crnizMY1B3JUmuYFih5hXMBLFPuZy4eHtXBPkPibjFTSVWav3r9nPSQaHHHEwT3cKvzWqPSAgHihG4tcRYf6o4P",
  "key17": "3dFGoNKGhtJzjYHe48SbZ31jpyJTrecn4wpG8bRaKC2qTGuAZVYM8iVmPKz61PAfeDLz59uNzmEJSL3Zy42TkCcc",
  "key18": "4Z77woPuQ1SjLupWDtXZnzCennb2VtCbJ3UxhXMFH6mPxWm9XHzogeTX6GG78zcG5VDseBZAm71C7uDuTBLvLjW3",
  "key19": "f1W7YMvtuJJMtU2eS4j2cz8VLubeTNQvhbaz6Fr2z98DK3QH6LLZN7JjQe5s4sA1hBd9wu2vZ2FRThXiji23TXB",
  "key20": "29nSbcmokSmXHfUE51UFo6DDTF44x71XFEmLUTPTBu7BFbosmP8uTRbGXEnbjVSm9YDBWEMNAcTqu6WkN2vXF6aK",
  "key21": "2Abr5xvMEnRuEyBjgKkjE7pQR2LH6HkXMGimRKC5giaNDzShbgxCyzahmP711xFBa66ASwLqKnPipaxJtz8xzusS",
  "key22": "4LBAGKxJqXWz4i6Sutr84hczuYRNYq6TJMwYc448wktDn1xuRTDiRw7n3uC6fctVXcPcTKbPrzCGHD2BVuVXWQaB",
  "key23": "22SrCawLHRUSuWiz2JsWjrZyWpm7uJqKBVQaNhGoNAT9WHkx7LjRdbMaKGi7xJxNb8QETGFyFs7x7bruwQaFMhy2",
  "key24": "4oMh7nyk8uxQgDPS1TisLiZfZuG9kXj5FT8sfgaR4VkUH8BvUPVumTUj1bbd8TqSbrow8ebpMXZtpwSZsXaAbG8Z",
  "key25": "3jFLMrmCVuXBvp5EwDkgW667HUwxBApWJBHkVMh52XV7Wh46aop4nSRYKbAcovTXn4k7Jugp1hzmWNH3jt9rV7eQ"
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
