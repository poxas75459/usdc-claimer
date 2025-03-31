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
    "phvexLJmVrDn6jdgN5WAiY2Zj3oaKTXrzu2B7xrvFGX8E8AC4UAsBkRhQgTo7J4djrk3aHyWx95FH4Ro7y5AL9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v3L61QcmHENpPEAXbNjxdGBHNJk6YCK1Z4riEbEChK6MojCPCg79mvnJSmtDb9ns7TccfohVQ9Lt35QejrpLhVv",
  "key1": "3Pcec6vE1NbKrHq3YTymMixKAKPuRy7YXrqLoDopwo339CMJCDD827tnK5dEtpuWDkt9SC9ULmxwRB1UcVFKETgW",
  "key2": "DnL9tXrgDdeNWNnRnAdxGBP76zBkhzeki5geLzfnXB69YY96yQ9aVh38Eo1nDC9FxTbuHu8R8kYCxhHWFtxDmXL",
  "key3": "3BjmGgr8jVKspYUMpPoighnZCbLUsVsF8k2jisumNyzqotD1dk3PQjP1GQSpZrppaTy2aRXoUU4pdngzknwPdSXG",
  "key4": "zWExT8b4Qt5MJ6Lifk52XA9jQ3TCXno2LTHYGHAcETFncwAZXZVXmpQttPcB5NsuSLaagv6Q4DpAJ5KphrPUqaq",
  "key5": "4ycHWTsKUEPozmFgNGTsBaeyGMmqyxnS1rZRyzAZbmvGoa62sMBBaj7pqdv3LBH72B39LZwdWGqeiPJW18pD8gZe",
  "key6": "2j564P1GUqyxRFGoUWMoY9jjEqPDxhdNhm6hFeSbBKp4pyo8NrT7zHsLUnMm9K3anqRg2MgEUUKvVGPwQR7MK7uH",
  "key7": "izU3EZZrsjQKtNg2iuqSnpfXbU3GPXu16vV84TH1n4RMhd9vzdcMNDLSfqcwfWwfJsW9Lqsne6g5guhYj1cBnVT",
  "key8": "3tky6LH2C6Anbjb1bDa5dpKa9wCskdeDtD8zC59LMDQ2oWLETUcQgALozdSbPyCxAcE6cmy5QKe77kUJJwLb1sQK",
  "key9": "3fsEEXK9JcEsgwbvAopL976cvKZY8wn4c3bgCM1cukWUfryzhd4nEYg2Hq8oRFNwqM1wWafGVAmYf2PD3YA1uYmf",
  "key10": "44u8RzRSm5xA4AQWwCS6wDC3WkVQ8Bynq31tkdqy5NBHfkZdzNpbsZSEdeGvL1NPcmPqsutPB82xUrP7X9RwLHpD",
  "key11": "5bdQtcEoysUuFR5FT6WFySJdneqAGmevhH3Dn6g7rxSupT1E4BkajTFvWNmMCvfTQBtzo3HFEGLx3bKp9xfqDPmP",
  "key12": "2P2RNaV4guEvHcNqooU2zXzn7j8AsnnLgn4tAvmxyaApoBvibyUJYvab7Fsbmwqz2wFtvEeGocrKPyA8pFwyLVoM",
  "key13": "44aKQZ7gzmBGU53Z6ZmsZwDB5kuWYnWtR7ZrLpwgTQ7rjAoM4FqF5UDYW5faLcCgZQt3RtFZ67s6umTQvakrKueE",
  "key14": "5QQq5VWGQQMsVX1oNm2gEfM7MwdFNUDgCKZDjHY8gJqCQCGmp9HZ4ej4JVCTw6FXcVDHxq221zR1X1fb3A9eaVgr",
  "key15": "3LmWa3VRvvH6TEbUePUTxKV5hbBpynJhzBsJnKdaStAhm7pUejJY2uRhsWmpuCNuDD8FKktKaPm1tt6XmuAHJTxT",
  "key16": "5TjSkUHwJQt8gwqNXY8bn6fnw6whrW7KjsewPJYM6hXuCvySK8QngPq77fTM82xbqg2QSSURSepp1Q1E4VWVEm3R",
  "key17": "2FLrYPTHtWG1SV2CzL95YxfnYQEinc5jriJkERpSy4jjumqyoMd9WrisQ3N3kTwyp16dCkAxQpD7rnCdfMT2KqCh",
  "key18": "2M2L2qGuLxPX2FzFf2yhAZopwpr5waBcHQ8VXZK1pRyUf6A6sR94YmjqDpiaqH2ku7pJysx6f2ajKa7CcpLxNfy9",
  "key19": "387LjM7AqTe35jbDepqjU6hmbYkZiS21x5a9zKxWYm3j9aWTKJRNsC5pPaGqPaBsL3PaNycUVLSyNjPPp8gLyWG3",
  "key20": "51XMb9x3qs2sdV77uucj6nH3fauvQdwf3YAUAPrQWSxa8BS71Skdt9fMg8aBtMKVrKWTTYbgAJV4tDtt2D7LkYV5",
  "key21": "2RsDRJ5u3U4XFb8PoDb9fKrzmuMxuGscRHSNvFFKdq3zPjBwaWFSHRbrr7UHLqux3bQPV7q9K2QCcTTtDNGoa5sa",
  "key22": "3smvTZKMbLKMSojfq1u8y8wzzWis81WW7RSNPyFGqwoF8otSA2Myjde2nouCZc9nCWZeMmqUYzvmvqMcEJCvhmD3",
  "key23": "NuijFMxU7qq3TZ91TX7Hm6TA8U7gzeMh5DdNtMQXjYeXwGPcUJa6oveveM4Qas3tNhLs1bBauL6r2YHuoK8NbkA",
  "key24": "2myHVMiQCPJMtzPvp4djLdBnnpCSy8yMjk4uH9tiVZU59wLoM9y9jQ9w8fh35z7SMenUYd2gpfhuHCMFSEJNwQMF"
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
