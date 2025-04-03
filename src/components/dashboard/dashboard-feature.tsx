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
    "yPXvY5BabgAi1rqcEXWuEuwfqFjYiupa3vVnFxWMkHEa4FRnezwEEhyUF4bdCnR2592NSw3a6dScez2GUDhxHZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eu43oHk8YEok4BdAeyZc4nxYmbFyM4A8GbA2dt63qsXpE6KLC4dtUamHj3tCsrtaP3Q3c6z7aYyRd7QDxyUWbyg",
  "key1": "Qu8QS2rHbT8d9qnxmE5meo4BcHaNScEfCcBVedb9HrJ42cjQT4q8ztHUrPdX9uwfUT9PmDLc3kMxUDBEdcWtetU",
  "key2": "5zdYLHAJQtqMGqttU8G8MRC1SyiaygmeEBwRD78zkiAPp2zMSd521Ehujrv5sqZkZxTtykoDFg3kMZZugMNfSowC",
  "key3": "2E838ncLMof7fiDiNVcMXUTusS24DYgnhVRrw23i6q1xgH4VfGjC718gbkDTFtvvUqXvYn62gvzPs89Zw6VBEkVm",
  "key4": "5eji2p6QJjQAijjV1wVps63xWqsbk6wmTAD2k4VGiraBtMa4txsrhyC8y3iFTNaEPDgg1ycURkjLC99Gvx4KTAgp",
  "key5": "3EVRPcGA5nARh7CLpjqJTeco39YtQgkFbka7C9wDnCdm78ejMdg56YVnPipHhXcp7jq8Zt1dfX7dCGTWAkbhTUcW",
  "key6": "4ynEDjqtWtkiPdN8vtqP2cZaoFMM5sGCfQqyR9n4p6kWdr9Pmi297DpADucsqWpcT66FVN9c1X9iUxDUDqVVm7wy",
  "key7": "5pzBywzv4rEiRLJCSVmkpwWYtnzW1YDyvHU4gFU3hz52viPxhCD9KZL4zYobWu8V5uzeb2DnzWLdT6nEcWRxnfZM",
  "key8": "63cp7LUoSXnxRZM5524kUDSDVCF4M9UhdZPPPwUAFi5aN2DgGMt9nWd95NuXj6SKTUrSiT7h7nizHTnT4G8NxzCV",
  "key9": "2ouUc1iNqBGs6kcmDpjNdhT199XacAYkwH6EDMDzz5NV9DsGeSVq8TTeYx4Atj5ExMX3VPWdXUpJy6U5drwwYwp1",
  "key10": "4NyEgQvER75GEP2cSruv1nDe7wFRXyWXzT4SJmbGByLTHdA3NcZaSWQuJXwFgP8mJd6eHiy4FBTuiFAPR8c6W4HM",
  "key11": "4kobbBY4PxgANzTxeokhqUJa5co5Ts2frs9NGiMCjcVaMWDriG565rCip57db7LgAGVUWJwR1sbDwV1xrr7Ly3HF",
  "key12": "4fBYm8wDwd6KzGUoR5aDgmeHoJaUhFSPvWx7QXFUF1twuJoJ88XuXkxTtNVcQwVnimkrRYKFqVG6BYRsskDWiN1P",
  "key13": "5Y1Vy8euyKj3YqJMEXtE8U3K9tDCyBTe24HZrWAnSLghgCyo8vndLfmasV55k5D5ELyz9GtzDoCnGNjgCoAL4qMe",
  "key14": "5epCwpLhjmwNDdG6euA8AyvEvJTPsUU8bJbQcitTgwK8puv4xwQjYVVCpTsCPHraD6Nv3KCGHXrYhptYEWetApW1",
  "key15": "2N6T6LeS1VBzLLKSQt9kyUWt52NUCKSicp2Y9rnNTjJiQsVaHvmteE4Fm576DLR5Wiv6s8z9LTSYeBqhgV39pzuu",
  "key16": "39ujUZsTv7A5RVTuFBDqCMdDL31b69u7Dyo2qXXJS7YaWp5jfWhvpneX1qgyXLvjTvjeZTXAaRwdN52VCKKYekzY",
  "key17": "3iU6HYRcGrgvuTKYSKnn7GuJ5DUvaUtsxpmvMJJhfBMqcv8ZLzJE6DVyDcDygMCMuKKxHDYAP79NbY52end5CsV4",
  "key18": "4at5FNkw5WLDe13ir27F7gc5eePsM72JmbfkA2Wa2Btea8vrdsd1SPzHSfwCRavFgCaa6SQZUZnNueoszgVCUiF6",
  "key19": "5LFUqwn9VwiRxefwFLsKwEe2VuGSthnhdhMSDdZjWooFp2L9CqsgcL2ANRbem2codm5gJ4m6atfEE4c1zo2pErsn",
  "key20": "U1xVfuGXu5Abz7dubjNLm32awiveHmmWKhChHP6meF33aLMgyN7kbtUfnDzvZkW3uDZ37Q19eFbMRkwuodNxkGq",
  "key21": "2WUrGj7xYaQdqwSgz2CyF71uc7rwgCwvbeVRuEsTHobYKVwtAhhTtwZbgZaZeYffW8RY4h5c9gpB7ZQmV8PE7HY9",
  "key22": "KkdcpQV4XFREhwMDnvcvJZNBr2sbgBM7PTuS2MGkc8y3W2jJsD4PXPsbRiALBBsxfnb1FgXS37DkZqdq1m5A1XL",
  "key23": "4Zxwbb1rDQx2jCSiyW4Bzom9hXjGsWsTDfZTb4n5PJvBuoT35FkUutapRZ1vPNkGG7LpMhPSjb1ijrCGpC4X8F3z",
  "key24": "DPSdcKkgR4UxkMMRnk19HuKWHjJJj5hwCvDXfsZKfCtGwTnvRZqDKNgHa3v7GCxQUnBZc34jdzDo6NajwsrJP9u",
  "key25": "61sD5r9nqu7VJjnxU4nKCYfQ7oZDmzJHaSzU8yDyuK5o5AXw9bT74TERZJjPopbQ3CtAtM3MbQahhpMqFdSTRYDL",
  "key26": "4ivKiT6xYzp5yftWkaJbdXGGBtJKm6bsAjdS8NCN8hTXdxghUvQD4zi9o3ph7jhDtsvXXj3gMJAD3F7Etq2EfChX",
  "key27": "5t2Bny8eP8hv8Y97pZkZy4BSibihDugdRstqfNuv1Hrw2gARzo9LK4nseCquSbPE4guBJZmLqfu2kNNyTj814qT4",
  "key28": "41WtJKtSpiFJrXsWVWEHxSaRFq1gbsB1ibXFRVNeAQWn7pupWfyN8q17K6CKssi71GVGpbAEEpa4iKxbKaBVH8Mp",
  "key29": "4WRwXBU1hZKN59DoiP74UHwV9NQy8LDPRughKkx5gShDVtwa3kSJ4dzFieZWmSNL61eE31quzqZmM4ndHp4AcNGc",
  "key30": "PY3ZQvL8mEQMzbUYWonPpW9Sb7veZCuAakSPZ8oVKpevFJbSUf5gaGM6u5gHFmR3C19c1frvXtPnpWnAhgzZEoG",
  "key31": "BKgueHNRnnRkBUGdsVAfpKrEDR2HTLY1ZKNoCE8fv1H2gtF4dF7fPNd31DaLPCzy7eT9ZGrApQ8r3bamX1vUveu"
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
