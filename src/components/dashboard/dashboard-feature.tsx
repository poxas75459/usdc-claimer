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
    "23jJRY1UdBrmhMPV7AHqZJAjGHLF7U4mkpneRHdXDCjSaFGfnWzAkwwW85tVotdLQsWVNCVAtvC33hR1C86Q1yLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xopf79UZfwQvxje23jc8gQobPGUw2yocnmnod8UH7oCvdvBxzquX2wnecqZiuq2UhcDDshqcSj8YsCCem7GADsa",
  "key1": "Po9fdCTuHXCf8fR2UXn7aUG6KvEENhEaJDZSZP1PRr31vbgGcD4PZD7U8qpacJ4S2sbTZNYn9Z9nYTJTU67vqw1",
  "key2": "4LhyNSQvirm1p5ARTc9z3xVqw3Uj7qEvhDDU5rRmpz7A5kH28ZmVFWqtXgBs5FAwbzfVHUfnsNLuo979q8KmtNTU",
  "key3": "hWVo3Tq9AJTLdXYqqNRhNLFpUJML3nnJxbzaHC2BizUAS98xwb6JyAgiymBLG4GADrLRsAuC52BbPqzhYQK9dcu",
  "key4": "2SPPiqn94pNTm8PSkNXieW5YqZxvLMP2sKkb9Sn9HmaGkt26fky48F1HKkizjpJJoxPMM3E4ekr7HKdwC9hWm2ZP",
  "key5": "5GGZJez6k4fheTksLsLWz7QQBFVkJ2D5KkwtA3WXkM7bMwiHPjxM2ZVRuUhEEE6R5GatdF2fhu57Cwvj1dDnBEz5",
  "key6": "3F3pEs5jvRNe2LMSQymnY2sVPUBxbk19M95gF44N55bULKwSQQ9m8jyFS7RDjJD8CjxvCKqUuctk8LJx9rWuWJ3e",
  "key7": "3ibx13gHAQY1oB1ghgwWK3VN3mtwSEo8PKphAMRj5gEmZGKsuxSgZTVRUKLmPN4xez7fZb3LgndkThQmGiE8AS61",
  "key8": "4qbQo3XegNekqHv1KGUMjsB6qZEBtEuxuK77FzKnqdzqu6dv2kn8BzVnJsG4huKhdWkgNoxapaR3xgREAKkjnRYu",
  "key9": "2Ksv63jgvqBddkAmBFS8Ezt3rjqa4MMDBiXWwycNRdm16hnacFaABXv3RJxxCsoNJ52tcda5NfK2FEeehvB6Pv8H",
  "key10": "31hyRt9nGp6YqsUpYMWLTLAxnZW3XmskEzqimj2DzvsMGWp6Wczja5kPtQZU25PWJHPfgWG9oVcGvmJCLFLbwoTC",
  "key11": "5v3cyuTYM5tuYQZwMkJaNF9R7tayGVJRSei1A6ANCAMFmqw2noBXSwmmYiZgCSgfsxfZJR5BdK7Vi39K2oRkLELx",
  "key12": "4iHWdbi2JYvG6Z1N1Rrbex9mGjsfpS3zVAfeNUxQEMHK8SkjP3CZX3CJtzKyTiMibRXboA7HCYX2NTWujmiLySix",
  "key13": "4zC84baKpCdTbm9yJGnbzqgQV8w2qaUaSwu2EEvmiHyF21PQQ7gEdHrUHdsRBex2csn5orWfDfeDhzP6Skp8p83J",
  "key14": "3xaNWt5zBFtnND9rEMwwxTsPDjySvua5qtsqqGAjJ98TesHEszmf5LgAmf5aKBZuUDGVBrnvVWbQGwHQ5RJcWPDz",
  "key15": "XyuYhjCmRuKbGFcUFQc3Nu8Cr5Z6K5ADCN5ACdR5Cfgu96GShC5c4o83uAtUGyWVKKme6eLLy39yA91UHryK8UF",
  "key16": "3F6qjuo5AQneA3DnMcV9YUPeKSTw3R6cCevPnTPfi4Pit21nPGJp8a9b9DwCD7XTm1TvzFYJ4oi6kEcsRxBk6s3D",
  "key17": "5GDncA8P77qkmfAJTy2wLoK52GiXvAhFr1JLExbUhxy21hAYMyd3yn1W2NZNiYCN2u3QpuhH1VYkx24JCLyZxyPM",
  "key18": "4kZbETwqHMSpzmXMGekvMbiexxWSA4aH2v8SPYicthjVSHevgFBsFJjAxqmwHS2uNt1XW8MhTXLPzbCMiBjUfyY",
  "key19": "35RFso1ALocvergBkhsE8FznRP7ppZvLbBro8PzVWKrdv4ajRHSjZYwWw4Ap4Q9yHpc6iRzM149fT5N36FDkDmg6",
  "key20": "65Gbp2ZqQheiir1x51XvmXKWE8NSgoTtK1Jr4CpQPQV2sDj4tniQxRAR7QDeNkVkxqzhwVHXvFtLM8BiKUS6kmF4",
  "key21": "2K1bsf9fj5NTmLnueiMC5tgENW5tfoKExJqpvRn3ZyqDuiTqPW4CKykLSW2zYgEtdtkyUb7JQrVb9NRvzEEBeaHA",
  "key22": "3FG3JUPLRw7SPVuno4x5ypkdcYH3337ZeMNJNc9PAtA38PAQ5eKHmZHDx1gRLADgivotdeNZYRp3cwm8681ye3Se",
  "key23": "2trVZUSxiFh9HLfLy1te15ZHgCxWPMHQon1nii9PZsZRSLWVDxb1re8ahQuoHHWn4vNtcZY2vVZxo4fWSMCqkSzK",
  "key24": "3X4SfCy3gWDGjeSkazsm9uef39URi8Mo1Q3yJoGaUXwRkZnhzMFf9vBF5zsBPLHLEF8ULqJvTjQsKBEbqm1LahzA",
  "key25": "23BW3DNLWxgazoY84yCHbi7PagKufEUJbmVQ4uqfGB5LrYyQXA3tC5bjMVobMwsr3QUE7tJFHrvK1gkD5L5j7LRd",
  "key26": "2UY7UVc2n6pHKa3i7KQYfirA3rot4yZ6Pr5oodwkHUdPfVi8oDkSFTttv81k5Cw8TrSj67MjWzJ42emia4iB2CSx",
  "key27": "23SRVGP583Lt1F3kzqU2v4sM4C8vwj5miZyNsiF7eUSdYBYnBvkZc3pBjjgaYM6j1HKkiDYdGA1ZX68uPaHvuXav",
  "key28": "31RUrTMH5b3eKSjyZzzVmSvBecE52xiaNP5hAR5Vw3xUYkNxfFYXXQY15dgs9oErWoiVNs9CErcEDMv6BuiTs3F1",
  "key29": "wuS4uQ9XUPJ4azg2WcMHWdhaTLWKBxNsAsgpyWiNrUWvbPqxTNh8Y5FeSS2guPazpodbEuzxsNv3wXr1iYWAbCz",
  "key30": "42oxyvk3H3fukUce7TjXN6szT7b19YL1gHMY6bqG6wYkiYQQNEPQDXt1dXtVfhUFMYzfjvcofKDHLrBNMXNU3bV2",
  "key31": "5doY37bFuqBBJJrgE87zTRjT5n1v3kx3S5icgXNNGiv3ZpAFTgJ2e7ZCgSDZcoTJivZJ88dpKR4F3dCm7Z8nAzhg",
  "key32": "hViSpdYBv3FTCuWcU7nqq61wpgfi5fYk5hnPhAx3V4AGv5XsZnofZuzzJ7zUcuTHQCmaz9G9645gKqz6tYZffFA",
  "key33": "5JnsnkLX9q7hHp63PVoEwkFabT1s3bQB5eK34MH2182auUC7vGLpPFkS3ptEt3u8iEHjDaHJpYet8jKZZsegYFME",
  "key34": "cxJjJBKs4kWTRG6T3qfyZT6wC4D3K4J2aeZ4WRraas6mW2NUxH9CKxPq3SKeLgDwCrRK8dJhCDmkowfPJXeKzF8",
  "key35": "4Y6VikzibkJbK7eWA59oUa8X163kaKQJuMUJGAvnDnoepKHmQZ6UQsiFPPfcwnqrbNVBsF4KAvhkHy5UHdXdzJod",
  "key36": "2oQzQkgYYPjNyrDfUTYCgEyu1bSUBDV2SukJeCmF9tVGgDWkpwgzijcQQPJ1e7vMsoZBy7hG9VMjx2UiqA1S3P3f"
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
