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
    "4WEEX1MAkdbmeazxZynHNGcq6XLkzhV7afsKhp2VDenZWm4wAhJ4cLX9jQ9AnNzVZNTuo37AM3Zfhnvjryws4R2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CjSFhcHToqRPEciYcpikkzzsTgL4M4QAeEKpbKkGf8GPQDqNUo6tdzJVz5TvX2wonoetvNVQBDYDXmsJ2HHMpii",
  "key1": "5iSs9phCmbwY7djWmWYfWxmcvNHJF5rV1KQMifPL4TM4TkeTDq4LxaoAhoKS2n9R66w9GJTuEFdU9kyConTvGVa1",
  "key2": "54PW1FNsdf1qK8CHDw4z3XcqGegMrrDgesEUAoyRfAdCcXHjNVN6mdDD8bDQoxunAfnvtYbLNVu2eSSFscy6F7oQ",
  "key3": "st6MWRjqJckaw5xDpHHBeLaPn5KRPjbR1CXUnH4G2JFM9qCr7NR5Z2rA5PUS6jmp653d4vniCjhYtiLNu2vSMZR",
  "key4": "2hpvzjYv55smFGRAokuFKttmuiriQWa7tA51SnpdNs6NRAR8CezfwyhFztwQkq94oXekKjqvj1VnmZkRm63DQzMv",
  "key5": "QU1ot4iVT9iGwLDmyHpHVWE8ZVG83V8mGyAzYGGx6etez2SfijkBZquVxXQ4XB3fSrmSR7iZQ46XbskwWx2qeqq",
  "key6": "2wJP4RMNtMvbP6ZK9tHmrDYL6oC2hwjesdkCi21ev8LKszC25E7YcVNqh4WgSjkofD3WzqxxZoq72B5EFusU3Bq7",
  "key7": "x2MU5tEC2vdkRLyTJGrwGpBSvooquwiQGr4tKDMMyBm6waii5VjrdeGAaevK2XFieBBQLqTRUhp1aUCJs5yxCsu",
  "key8": "3qV17bdRXAGgLXTYkWVKpytekziipVXjUm2VjJnkofrKpHaheCZHsmKDjG8CPe5ePSuzJpKJ4hh8Sh9M7rY3ijvA",
  "key9": "3KyVTGmTrjB84injn4jUZqzYa4fWXfVG6gCWJZdg4MQyCySVYPSgt57zqxKoHi4Cvxs6KVUHnnK7nNKEpQdfNrhr",
  "key10": "4nZueMXh4F4BsSq8g29ftUw3WjkA8R6PVG2HtdnkhD6HZEjhm5mb9gpErJeeQirT6rK5Gvg9VLgmwgBVpGYhuRYT",
  "key11": "E9i2KpE1ZQDFGQWB47zGsALLSLTzpv9fgJ37BQn4Bch8xabJL7W3jB4hp9CsS78wXAiMQXU5FxZSd5pXLbYLHwJ",
  "key12": "2hLrdmQaexrHhVSq5RCeBBQPHsFrkpAhofByfMcQxT36U4MwpJih7GseST7mZnhFyzqndxZNWtbpAgS3cFpvvvH4",
  "key13": "3QmR463AC1EetSF3Vi3VmGZjHTy2G6zFKS32pD2b4XyQuFfapNH9uuf7FDDKEMow94DmuY9Q6CmSWDcQDLM6YEmk",
  "key14": "65m1C5KaL6DWtcVox47egMw43wi5ykqo5D3qjao3vyNLgnEDZizzTX6WAJh4ctp9TEGP4FUzxmRKK2QzriFZXc3a",
  "key15": "64XTgmBN4Q1mase6cp4uBNMYEgphrfc24MsbiwEczRy4gGdb482htg9bDhg3rv9C21BPm8pNztRRnbjso9gs8kmJ",
  "key16": "2vcGLx1T9mBiekCyC3En4zm8LLAuirghTCethp34sPgCq2DGDzCezCTmhUCPuwKHtEhjLcM2UfwSXFKaoKjGTcWf",
  "key17": "3qanvvpTFxroV13Uc2nvv8cqNy5woPk9U6aSDqrkjyQnCvLNdqWSYaf45Hqtrf2iKddiv3VcYdH6QEStB9yWrCAZ",
  "key18": "5H2h57zXicWXYbj7aK2s7azPDZ4fUJqaffdXL9cQDx5ra2hXM6J61cvVs9S1HXWQXqcmu4bHTCbWFBTCC79jT3Ax",
  "key19": "2f4yZvJeqR3g7XborWD8okUkSFvP8pKWH4XZXHde4QyP1qzCphDqtQaSBYtHkUr7mRxmNoy6ptLxANg5zfsJNiy4",
  "key20": "2dw7RLNkT47Jca4wefoAyBu8t3egtxV66JCqxBjxN4hDXDQNScEQys1nohyGD1tH9axTGYGw7jfQMefzmpvKVA1t",
  "key21": "61iYYK195t2n4uDB8LgkHaBzm8LeX5rYEiG7eHHSdYY63zKW4v7BfqrKmCQo6LYNNAzpoj9pjyHyZA8ATLCXHMLW",
  "key22": "Apsa1urP11qQc6EXL4SnrekFJbhqqvRt2JBjKnZWFXPLETYVaU4s7grUBbVYc9WagC6UfgXhcK57RT5aae6qW4u",
  "key23": "55hCqepy48xqyo3uy1RMgGhbM94JKa3uPW2gVHMKRimUPhkJrCoaLLxUFTFWv3cvzoxDiqaaS1qttSk93Xo7QSwJ",
  "key24": "4wGk8rYgp1e7w3AAzRFygYWq9hGFbG4tDAsaVGUy1drFzbfCaQpTFyNj4ajDPhKYT4ACufMDWrF8fHoCJ8L8NfcW",
  "key25": "4PSDjy7RKH7SVUUN1PMrPKbrR39Vpiz3F6Xxf3YTwE8Gz8JNM1dYStkUfFYaDqendz7BRGfNZYSbwyqjXpzsLKHf",
  "key26": "yrJ3ojiAfcW259AQ6dciGNnDNeL5bsZmNYLHb3MLq9yRDFWaDnCt9DfszpN8iu3aBiVZTZMV99X5ruXNuZy4LHt",
  "key27": "3M9hVS8ETR69AojPYmbtYMyRvXziRhdSB66zfDqkXUMRSwEYN1EhbCvAwmwceP6uQmta7WMB9uwAGADXEzMokzQn",
  "key28": "5rsy6faQ2RTefPbqKmy7PT4g2VgixMdGuHQNf6BJX3wbEyCZcJaZGUuyiRLrnvK65vu8qXcUSfzKBcCnmQu7YmVV",
  "key29": "H6f1SDb6C261u34edxwbjNhbdUYahTJq5sUbd6JTDvo6ds3fQYsHnGvzibUWFUnhGWNpzYQo4h4RfB6ZBk2WUsf",
  "key30": "CDKUq2Y646qZu55oGniddWZDMKFfKbTNVthQU5WaU7ePjau7JJv76QPBSEqNfSdeaoAuUYht3Z37KDb3wxHH3i2",
  "key31": "5pK3PAwPndHszuXrgxnz5a5ChsxcJf754sCHPQeLU9CDwgjbfRrqThv9L69hSPRdpaFBw2Ja8H56RQS78ariNrkd",
  "key32": "oitA7MAnK7hxtvRV6fATjq1KJHh2AKoJNFQMftcTxFA5JhYMQPP9AvD6YHmN77t3GzGxEJFBbKFrL7S8gFdWsnM"
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
