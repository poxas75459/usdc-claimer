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
    "2PGEVKBTYP5yhrYLMrwUuGV8xfEH5aHnV2kSXnDBynsRxb2LFRHnDFd7Le7UQKksMph2Vu2CoPQ5p7FGoGt3XWyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c42KBUx86b779ByxiTMUA1hFm7JJVop1PdzNqkR4NgyK5mKjoh6eWmKPhYwYhp4mZ9WETqDr3EpwHghQJECcyik",
  "key1": "2MQQJPAftnPJddRvwAMof7AX93Rcda3YjhMGqq6rE1Nvf79jimUYYngvnsUW8J8tJFwNQJKRNndPcqcoAADtY47Z",
  "key2": "3nYM1vQa6mgfFJvgNa6v3muTKCCngjuSsfCdQ6izaEA4asezYU34xzJqCqpvPMktMFMvZF1ozPCBeFe9trvWPL76",
  "key3": "41TQthyWAHS7skAD2GWa9dBJRHeEZQQxSkQo3TV4ygorgboKy92EzPG3GT2knxh2c4gPUyTFzVeeQUUPNjrWo7wk",
  "key4": "2noUxJsu5fNdwjmw8AU5PDd9h3mLLwgXfmcPvZAADZbXX4MrsRSgP3NhzC6hMPzB5eikABH1CXMLB86zdezVkTbt",
  "key5": "5t3bxvihkQBe92zZwEXuegMaRFQNmAmZeGLYs3QeN7KDUFcDZkiN23JzSuVn14F7fnNrJ5PobSpPR1G58UFEPuzW",
  "key6": "3E9ohgxDz3JcbeyEAgLN8WYidKYZVXj57FNWRtSrWWqhVWgRshCKtGHY16SYhaFRFCfoK9K8JZU56JzCpiG3jurQ",
  "key7": "3GcYppdDgf1rGVuCfkqtMNoW8N3MJ25DvsKDGfrEDpicqLq67pQH4EjGq2jyrRTfeRgL5SP12VAt9HKwwne6ajDc",
  "key8": "4bxYtk6hru2SZW98BP6qGJ4PBQJdYH4QFUFpQRttPpcG216UKPGC1DFTcK2BebYFJtZtNxXUCG2ugRWe7dbZPN5i",
  "key9": "4AjqNtzrGTxrMc7vqyqKQs28WJmpqXTr799u79CCSXbvKFjaVDrrBrm4msj1NLfEr9Z2pCKQPNgWwu2Sgw6MSsyf",
  "key10": "57CcvCfR9bU83p4gStGs4rEjE8NwJvsFH6nNKRY4HKbwQq4bdr84hkQmtQWiAeaENztViYzpBQ84MrsP7QstNqKX",
  "key11": "TRUPonmeecSY8r68pJ8yBbVdUsC1TePvCZerThTyGBEraKs6yrE78DC1xECNTGm3tWuCr7gh5HyZ2Hvo1bfzuQr",
  "key12": "2ij6dtUSgjSiromERTfJksfiLgKccWotd91oGUcHo4bprcBrsgCWh9fn6k2Huw371Qn6ZXmCuD9wpzypkzgxUngE",
  "key13": "5kDYQG4tKUC5GrHaYvPNyRsNLv2xXbPf7GBJmNQvQ4Q3r8unacvE12qREweaM4WiKmbJCXmpcjrWQJZFFVcgXU1R",
  "key14": "2wRJemF9FZ9E4bBGw1W5GfcRBpUmeD3hJS87sL1BX8tYZPH7BCzcg9ofvTwY36jEQ1n9C7xyZPeiuX1vfRWGFXDk",
  "key15": "5namwp9m6xwhJzmQKaumn6a9hUCdUk1vN4JD2ffkQnqTWTozU67SLVzuYvxY4aH2L345FGMEyYgNBDzy7txJnM5",
  "key16": "eTUfhdmYVqBEfiYfq2cN1PsgutqwUDhFmr8975ciRFoeBgeeDQYBGMFd4bbZU69p7MAP91ZR97SoZTwbqfHhrzT",
  "key17": "41X16iiHWsWTsnJvzNpD8UuZJRRon8EBMPxuqLLXRRZE4BBrT2DZbhfAj8cu5cZ7uayRb4F75nQV5sfLYbRyDXcy",
  "key18": "6rVfv4XjvbtWVo6mZDh6dT3TJah1kxkKKCQy1xY7xfDFBWMzS7ggHbfTEHfktu12BJ4Dk1QsM6ynRiJwsfTXb4u",
  "key19": "2ePuvqbADiRuFn9jCi7G2jE3HBH9CzqYoCUw5NK1ypYXFMSuQ6WBZzyEgZDApZqbsQ5PfcnZERfuKyA2vyHUt1pq",
  "key20": "WZDppfPbSLT7GGnor6p51vDxKQ5wQwagpSPHPoAZy8khJ4JKS26qwBD52CELF6WiXZuC88P22LPLcTeSEDw7ZxP",
  "key21": "2otqvLZTiW9whLWiqac57D7Xg1G2w7ixryqF1magewJxEo567Ph6cAsARYQaQQN79HJ5Nuo32JZAMm82kK1DML5y",
  "key22": "935sgtHV3VsnqQLi1ZRpLcTJMUeLcw3VUqGAtLYhkpcwgUzNgqpsovzydzLzJfQQE1oiBQRHJYJTAk4L6DDApLa",
  "key23": "2TiCSYMAn2vegkS27zZ8zr5iVRAyr6GMMu7vpdZm4WrvUvcQHqq5hGxH9MRnJvKkGqWkjmtWuzepqKEoxaZSPjQH",
  "key24": "RP9Fh4gnR4FS6rVeeE4zXeQgvF7YwiXxD3WaKjPZY5m5DtCeTN9aGReFTsCK8K6iYEJbQU5AxLwYGQEDe3CRo65",
  "key25": "5oTzxeUTo8ktCwZ8oJTyuy5cXKiJVR9VEWsPsoBrp6v2sop6J8urrSRB4mo59HSBoXc84m5vRZQ2zh1f6GbWv2Sk",
  "key26": "5zRUu6oZtiRZAiwpm3jSE9F6qk89UGdCfRVLVPYAXntTZpy3K8UyC9NuTtW8yL4TDEFBL4jgdXo3NifmKSATCzqu"
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
