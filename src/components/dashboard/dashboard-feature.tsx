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
    "YeH6ZwyvLX5NN6L7bAuEuvP4Kwoa2xFUf9YEVUvigG9Ss7UJKJX9eCUUezXYjeyoHwYMLNziPjoxfCWornSnZKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m2t2HPM1nP4pMHpgivyFTRkAtRwKtPgqzUozR2sSjxmGxxdczGh1dmwjEUFAPzzGoSrfpfudykzXwuvSxu1WpEU",
  "key1": "sE7P2iJiBk1vwRF7R5tGmBTSyrdyAkadnF7NfrY323Q2cZ6YJXTwy1MYJWUj2Xhahh45nsZQGVju1MDVraSqG94",
  "key2": "p7GorccP3cPEz3pJZ1nLYugUx14J2B2iBtxGe4yQfkRyhWThHM13YNc3QzZThkNLuEmJCFqdJ4dxWhq7xJHHG2z",
  "key3": "4Yaqi8k3YC3pia2kXw8QmQE17dm8zJWgxvfWNThFehzyK6KFjCWdoddqXqFfJKLBN9ice4S8tq5hZUQYv72eFoj8",
  "key4": "XmvG9eVaNNoAEERHHmxdSQMf21LqFPyUYWvf8UxcCJ8w2K3V5bf4YjFuUzLMPoJcBQ5LoRUNi45WdwVYRXzY9Vp",
  "key5": "4rNx5P3MwMKVghJEsb5nujWPgS5nDN3QuTCrtraWufo73uJoBwjptDcbZHHFNShmPsAVorSxMcJQfmkmFqVzaDLV",
  "key6": "2yGSKLwEvTJBWKVVFLtA1fLUJAyuB96R61nNTcA54rryERHweLGxt9ZK5twHEnPXM9s3QNAYNjjDughQfE79pPTY",
  "key7": "38EG5chxbzDN4rbcHobgEoBHRsv6MjBhrupQFuG3jubrxH5p4PYh5gX4eBntDYauBVCksMnuuR9RpXdGZ3Fh4c47",
  "key8": "4JAbRfnHcTwLQwQoUNB4uKaCvPE39bVZKC16UTBaemuWSEc3VKqs9z5tLgPytpX5toZFqZBrGMirn6avfTscqPHP",
  "key9": "5ri5zmd2yEdPbdZgLqF8m4z47jtLUPEvvJamCNztxpwLHBXyeh6VoEM8q5yYe4r1XP7i9ckHxywNcF4R5PtNhci9",
  "key10": "7Ciap1xxuWfBRnCsNaywQTvwuALMbAi5vJvi3HLgfjgytDJJgfbzV9E51p2vZa1C7zpspUu6BVjXKgbYdgmhULU",
  "key11": "FeMETeCS4Gw4wa9MmNBQsjeM7c5Rp9kfYaKWDJKBExXEinuvNLZDw6nfi6na2Xy8eKcF1EVDPTRyAESALjKZ92g",
  "key12": "3psabRgChLgj2QDvfYHboxUL5434vJpaQ8jQRSyxJh6j7A6KUEFLSitSfJkW1nmZVsZeZk37EBepVmeoXfJa8seE",
  "key13": "4KDr9xCrcRtn5ZKMgcPVw2TBVwvjsxoTPXqRRPHJtyAGNR5sw2LVi8JATkL5JewWvWqqFcc793Lq6HCrLFSVKN6R",
  "key14": "5oZARCSAKoPAMk7kKnHgRauR8nsLnvSsyNJ4pNobM4fhgZnceiHWN4Tcx88FFW5khFjBEhtvqtAxeZQVwfZYfKt2",
  "key15": "wAi5X85ogFGTrLBCsUdtEnsbu6JrGPZdwyM68TskcgbXMh2fEKkr3yFYeEunhgnFNfuv7a5dzUZC7JawgsGQWy8",
  "key16": "5ETPPF7VNDaJDs7F3WjaVJ53DeY2oov5bMCq5NLeRD6pU1gHHHHx5uTFSP4FxnDZjsMHRjZ5t5W7C15AovH8VHMP",
  "key17": "5SWwfVGShrWczijKLj2vv7aRwWA9JseCuRRLyH79cdjKewgGuoHtcXdEfNdhkD1sy7dBDUhPZenewrsBCwc3qL1T",
  "key18": "C4LrmNf3XJvreK465bbGuFJ8tDtkiZNKAsJ8sjueY8S9WAjDkLNhNYU6FMv7TFKHCfqwiSU1MTbbjz18JSRRsJp",
  "key19": "66ZUsk82atKuDG4XthMFi9v4Z8GHeJAjAZ23ooM8hMG1pHsWGxoAEBtmCKGTGgkNJ82imV7rCQfq2eJQhDmXfPrL",
  "key20": "3Ukp9ozuYrm7wqMK64SeLj6eh9yeFwjmaEeYaqah7FTiLtyfZCJvFouVdiWKxRZXkBpXJcaxSG5EzuUMc4nC4V8U",
  "key21": "27rpyqnscubUzhtxHW5EJkmMSXfqYSAJimDCV3yaYXW8bv5YyYxSfYZXyB3EJdiiy7ku5ABTvShx1Nkddaopus5m",
  "key22": "2XApbZHLts1AP2TPREZT3xrqcewjX38JVW78ktDn67TCfjrXgzXgbuDZoBXFya5bHpQ6qPn8dX35EzbpLV6HkhpY",
  "key23": "4TQMa1xtPhwjLPH6JH4H5wogWKbDqhwiAJQLSbQyVgcQEmfB42BBHcaUvukosQCReKkmZNgoQSDWqcNrEVCpiNdL",
  "key24": "53wpEuNzRUm6mWd8FUS1ZMVuxRrohh1SbCh3x7uDCYvhWrXxuhBa7niHC5XauXBQuvStunkwztqEnGauKjqVU3vT"
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
