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
    "2XA3P85BJNeM1azNu4NVhxcMuGKnbDRy1s2WRUZGejMweQTEjbMAEFXvnKidxZbN2en5tKkBxFNRWX8oCaxR1B5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FQKJrujUrwQdzJCSiDg81XqLVNN7VsSg513Sk4fjBsuK8A1av5x9k5KR22F5q7dd8f79XxG2FzLCti8nGfFRBsQ",
  "key1": "676dBoij1X93KdACdFn5pErb4gTYfQKiWVDkYfBqG5ZZMoLgv1Z82sAsR9TZtfZxvsFVJeqshbUPMVZ1Xb6DMQGU",
  "key2": "2nAesfJ4uyUW72YUCHQwekXwBBB3G6LNgnKHhPqeoX5ifQVqVkYBFJUDQvKYVhWm9bJTszm2H2xPZNvaQ1Sohj25",
  "key3": "67Xcu9f1G8ZZ1xZ8hWc1K97CVHvGAtBppZTTBN8AbdB1rcZLWden4xJvQ3vsnJo9cdBrbq2VESXxh1DBDgWnFMZX",
  "key4": "5zY8SUK8ERfXty6dL6UmsaHEb2mTjPvGok2TxwLzGkaby6GuazzJWbnu6R24s7qxuuRmGtWpv85u35eyLoLg4jqy",
  "key5": "5cjFay6y4s13GivrXWMJAnG2MWktYZuD1rjaLPGirTJ8qNdnATsFpouKoLFDg8DZKYuAVU4dm9aDdedTmqrdTzLs",
  "key6": "5Tup7RppANXtXFUc3YvjfCQ4SwjyXMXYGLNUh3Dk6bA8U3Jt5M5iyKwprmDSVN351m7k4na5tk79tWmMyoNccuGC",
  "key7": "2r4jLaQo63u9nPLTBSeuE2k22zK1Y8J4Sy6onWt3eXy9wBQ9aHoNmjKdc4A4bG9rYqVQU6S7TPCBYL5ft9nHoXFk",
  "key8": "2xbBAnhWsCgF7DM4TWcv29Acm3fmqKd1Hnit7weKENh4FYZDAucocZfkPYHREHkwLwMgqCiNXrKFejz9WEM1X4Ji",
  "key9": "3YMuneb53nxJqcYSUSnb59G8NsgvZ3fR2VHLBhG9YDkqM7hwCiMZ5YwL9NXUYZ8vrzSETv8GLdARV4zYh63CAAoJ",
  "key10": "bVwoEgCk7RCCg33MT22SAnWGRFj2TXmRtCRgWdX2S9sZEx8gRTQ3Mi3KuJvdGjNc6xbHc44dvhNvmfbUXAmFajy",
  "key11": "2JCiGofArtDzuvF9LBndD2HttWgocAod7RdYyhhkmQgVUvLokacqunF2txq1bCdN3Dm3ksDu264Chp7ewLWfUJ8Q",
  "key12": "2ocLJ4PkhYReLumQN26AZvEDNXH6mPYvfrCzGY49z4jbjjcUuhixt6MQU827SKXE8jcrsb8v2sUrMNrJFX1fJcgp",
  "key13": "NBYg1DncSicgcuYDqj18vfyqid8fGqRyTiXAhZ2FWztSSiWT1HdPyF1BcvoFt5oTHaHymVGZovQYULjQyqtpReq",
  "key14": "4CCCHquxGWwLXWy8yzQRBrHBUfrL2kKzV8XNLR4E6nsCufdz4by58xhMtiBhZ5e74X9ZV9w2kk9sUDhpiabnKZ6n",
  "key15": "48nmbbpf9CMuPdxT2zJiTMvgRjNXGMHnLLrZ2Wb5cSb6bF8JnxMtjkV9qMLnPDyDVvNxr1dSd5Te1dw7gp26f34Z",
  "key16": "4KdSxCxgCNQfqMeZvAWJXfpEmmCKLEgFwR6mj5Y1j7eL12PBmAKqNCgJsxj3AxjXUFEG7EexsUmYF7iqrNuRq1pe",
  "key17": "bwKZAsUo99AsESqFhp9rCUdk4rTBXVU76H8nSVoA34d4qcdbvuwQ85Gn8JgXiSWK6zLD5AYWQGqYABPHXmqc5nG",
  "key18": "trKbwmuMHPU2nKoRuWJL7qPaFLnkQsRYEe2todKaiVUemh19CmHFNTkgXN5LuLWoFb7ca1Rw3ypvKyaimF3qmvZ",
  "key19": "36M1V8M9i1Q5qAPRf7SqcRVF5tcE6LNPMVis6qHzWyyPYdmJJSvwJtEktXZTMZMwbwjz34Z1cNGuwqaGgjUsgp36",
  "key20": "2WnDtx5hxgzQv7CMePLhnEDht7hDzfiEctAhU6jufJv5CMTfkunCe2YuHfDf51ZAppRfumkndz3He2v81fgSiUf4",
  "key21": "25Vo3mFcCfAGefNq8k1NZ1GNaBe9prNwr7ssocL8nsU9fQ3k1k4aeSMpFNBYFWJ5V2cQdDgw1SfxRrMhi7GYYpdn",
  "key22": "2ggKSytH8RKeCgFz7srxZRRqWmaKgwBKvReyW2D8Sx1Cf7syDLG36hR347AD5CLX6TnR2AHtEZVmW6JugarFadWc",
  "key23": "3jBPx3mYufEyRtpQg2qh57c6pS5Uc2oVbfCPhboa2yRELAMqzSMDeFWquYpoofDzVesjz9oreMnKK771VeiKmF57",
  "key24": "5QbfXA84kLKoLuiERjyKfmqhK88LSCZRQahv4ydXAayEyps7fucWhSafL3RW5noksKAxfyrqxUTjwyMkkfGEvvbc",
  "key25": "4f33vrpokFSE56c4AmRB3gqDUwJkWuWnLMUnQbL3ZzKkgffH1m1G3E16BuMLuHiZNfi7x8htKWF1KSuQAGg5rHTu",
  "key26": "2Y6iBCW8GUFhouFzBcS5D3CDeMn79KXskBE1TGSf4XdZF4WaQiKYrmmHqpN9Ykhxd4EqEQuV6cZSgTp6LLoL7jdJ",
  "key27": "rSFXh4oesqiTcf61VgsN5jdtdFswBxstuqjE9TLfdY5s9DJ7P9KFNnG1si1n4cobeMNTMSnziJ8j1cF1kU5JaMr",
  "key28": "4SxewdsAY8FVy4yDjRh4ybJ8RCk619MbfDxZxDWY66EREy8zG9qtWXArc6K7RF4ddQ7PyGNZMh2UY98L61QeK4nB",
  "key29": "2UpNfzFShaTESwjibFrCMXWyootuAdhn4LpbXx3kqHgikyAMwTBLKTe6MCscxw2eXqcmH7pHpd8u2wv2WQQgcQAp",
  "key30": "2uhBajHTBfnDUmjgZBS6V3dqDWJhqCmNUQR4BwDy8ZLuSaKsSR5KY8V3xifXgYZxqCf1EJGfiHzZWryRxk9ZvzTX",
  "key31": "3LphPqASYyzZ5hvMmxWMTrvRTrxYi7FXCK18AJ7eZuW2Wx5t3Yc8umBgbaPnEmhpWLN5bLfNWm2roQcAtsWCbftK",
  "key32": "3pCCNdHYETp7CBZ7ViMbLxJUMcnNWvBTxy9JLPz757Q4VurPYxVfLMFLwDML5wKyfQEYQFCmYsaWWjdSkVhwbwUo",
  "key33": "4Kz9sj7w2uNapvChzJRTz7xzNas9mv6YNXp3A9QbKohwExSerLCMw4AaYXVFwRXWPCTfqQepspTY7rd2gHXNw62h",
  "key34": "5CibUh8s8DAEPMBNT7xoUdNZjyMwpiiWmKcH3RPstnjuoDspptg7anb8YgLuKsgv9K4jbBMRb44wpHTMbzANYisz",
  "key35": "2mhPMzhu7TRk83BgLb3nLHZYff585dAEj38JnuE8N1tmzTocPgTrPiYR452iH9bAvtxvf6wmN6FH3vLvLcaFXxSh"
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
