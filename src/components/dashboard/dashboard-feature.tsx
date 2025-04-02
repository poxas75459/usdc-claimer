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
    "24JmpnFowzGEVCPYmh2m3xm2gmtVn95ggh1m153LoD633hKsUKRa4xoSHFzyGQyV4viky86KGDA4x2u3aM9MKLRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u84RpbbjSxosCckJL97JCS7QQUSWREMmMUBySBSktxW3V9HoWxRW1ay8oBSUMyFNhAzWZTkARSbFVHhuEZ7cRp4",
  "key1": "5SgNUErgeveS5MCz6D1QxWSEsSoWsg8feoggdWMS4RGmVE6AoSJw1XJsvBd4fYPq7FH1Epqck4YADUHZwXf9TVtv",
  "key2": "3H6Y8HFqa69xfp1NqXcs5kcasHJGgLFMUAnLpTasSL6zkXeBsHMMZ3EyHDvRhpHc5i1NfZEaFkHSEcZg7VzYcfSt",
  "key3": "DknXYBKESjLaSq6GsnfzHakmDaWuhkvwTUVWUn4Ngaf3z9gPNAwPqUEcPVtqXycAmEoSdUTQuYzCikoHU5imcDi",
  "key4": "3mswLGYBwA2q1bsttFXunrB8D5XWzRnq542K3nCEYhNfvinxQBRvjDiMpEP3Ckd9jLzS574GZg1ieEyRSipW23Vw",
  "key5": "5SjPzPo1QjjdND3BSCWni2sQeLrswLrYW5kZtEs3HZz6dYu89Ui6ZcW8zPy1jCNLKN5daXyDP7oqRPvySLMRzrSf",
  "key6": "2nMtcVkP7DvVMKjre67L57hZuANUSePBdcZXGZmT4uAaQL4EV3b3TZuMTxP9sopSZc4fRTrZEmUBaYypW8aawGk9",
  "key7": "288j8vnmaWiW8tWVmwHdyToU5EjmFBEKd6viiEE4tYgvVAsKmjPKv2yMofzP5BySuQP9VQGZHtehyQr27jJcHMs7",
  "key8": "42s1GDMPo3Rxgkcn8oipoL8Benx5MxXDJuLbiFgGDrtWw27C1sTBRPXNG5yxFrmQKv7osdg6tyFfxsnEZpgoTGwn",
  "key9": "5UppgQuVN687xzrBDieSuJqU3YuL9JeoSXtM2dwQYGnbMzV1ZTaFZHZyczpP8XJHjFt7wr1aZwf3WYuAZ3FK9nm4",
  "key10": "svLtdWava2Ai2S1eqBNXPQ6pBtPMsKhRCkYj8waeXAR6X69Ca5WH8tBwGX8eNuXBMnw4GdPGEFz9y8QB6uNoVH3",
  "key11": "2cqUqF8c9e8Gua3s79DvBoi8oYvNkNEmeQGy4RyFD53W5B3eqn29gsknuUsd1Sfn2FjYKGEihZrRtJfPrQd8erNo",
  "key12": "5tCJYNPK8V9WCmLcjCSy2JoQs7m5P5g2X48x1xHwWhvioDUZ5yHTDJkuJtewHpDDBWCTCh6R8uTTAp8c5WJ2xPxr",
  "key13": "3vBEktrLbc3BigGZs6tP7YBTdVVixckHwPqmrsJ2SYKhweeqJuuJECkaZC1hqXcFBb1qDYjerYWg2x6aQzRxxu1n",
  "key14": "4SdmSREDGPv4KM57wa1VXNdvpuBdiQHRLmxwt9XmXaBjEiD63NR93bAdXSUGRcAdi1RbYk62Do1ovFca6srPqqCK",
  "key15": "3SP5qHc8GhsJxZ3MLQ8pyPEqwNn9UTGZRDNrhu3XPwNRD8yuSuU4wrjiBL64dxq2mLcsxVUGavY2N4BCxhoSsiLW",
  "key16": "3DbjUXRpY1bA1h81uvGzikvRbznrXa4udRdsTjZEcdtbcZPzUGUi8itMLX2QzvdQodkNPoi7RUgGgpHVUhJYrsf3",
  "key17": "3rkBcatKNHddKnEh1gQJ5xJfG9FnkbYGcQuCT6EYmREZgoHjaviLd2DMrcks488WVZUZCJaAKk6E37isx5hzJxX6",
  "key18": "312CRp63YeV3kLQMY7hzKZpDjT2GkmgFHeR6Cw6GoENPNbUti6emKdkG4qAa8N6ZJhkpegz8k3HGiM9ozjeQPozq",
  "key19": "3kPoC996vBSENxkZ4Q1mFXrG5sSu3Ld4CHPtUpsdC3HcJCcmSUZMAryLAXU3f9kWEb2uLEa7PSmN7n7Qs6FoNBau",
  "key20": "4AnqzHURwrosyM2djiaCSg3XdDnpTa9H6An1RoKA2hD3Q9bYT2oppkkfGbXkbaVHsZvwU3tpDZTX3LGjbtDAEFVz",
  "key21": "29NhdryF3kDNNKpi66mMZUnneuYJjPJTKaTzmrUGPeuzACewYxm6HUNk81V8FyMvjVWE1VGnPkC7nqzcXkvxcgPA",
  "key22": "2HGtcVbAtiNgHipyqdsHVvVNdePdakGJktLtoEULXMXzP6SVR5Hpf5PWGQT8TKn4u3nTXJmrBF3T52YqgJkMZh8e",
  "key23": "43i3Rxd67oSQvE4kyk3Mjz82Vd5Z1GheSCX39fAoyTU2bitav8jBUQtPc56XwwCoLHNVsxNZQekoL2CkBbtt5nG",
  "key24": "3QBfU8SYBtDHMTjrjTKLPXAn7UvmEWMUP8jtAGSaX9AQ2yCBRBiRPFo6b9NkLT7ezhUPxVWttAb5LVWyJvMRD75P"
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
