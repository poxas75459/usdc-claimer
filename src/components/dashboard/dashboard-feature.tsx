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
    "2LoFony4nF4YA6pbwRAaP5ALEsnqQnRb84zgd1KghcbhPof9StQfWZapfWGje1fXh4FMJAZVyR8ppFYEZXgNsVJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ypd3JP6CcZSACt3h6Dnpyg2G5vhWeMxBfeRfPJ2msitjREnzYJNt3WAYRHLqgrVvPzqHvoKAsHitz8w6ho28FPZ",
  "key1": "3LyRjskzChL6LkBsXeypofoGNjW3sCLRUuTMqAkB7dduBQ5qRCgrEwd8aL3G3UoBM8fQdLdvS7AFNT1S6fEJNosa",
  "key2": "2eJ3vkq7vYRrES4BKbDXaB6cy7NsobqeuiqWsH5GEykQ1RZvMq2PXb28PKr2V5U6AEYevDwq816e2VauKCyZq3u4",
  "key3": "5VjZo8cDW5C1wxhnY5Fxf5uBqTkhSPRy5atdwKix56GQKe7a5Bmde7TQzXFG3UBbhXD8HqidMSXaYNwk16qtXT7C",
  "key4": "5f8kLT6XBijbuu58XNurxVuZL5YTtw8dijAXPUqGHc8tx3RQUbF4BAoj2vX46QGR1RVjqPT9Tcqk4uwgb2mr3Yzc",
  "key5": "3kTk1STtxwGoGW9Ww5wC9McsXhmD7piqq61AyPUnW76CuXpDH9y7U9vYxVf2TzWtRVP4KgmiNcRu3kz9ZMfKfcfj",
  "key6": "HsyU9fRP3tJkJXESLqfJMgJxxiJKxgbHL7DEiq54dPoUs7H5ug8RmVyWpvte7xMpJ7tQ39spoAQ5ozuSMwG3rWr",
  "key7": "3PLqmE5yvtLJG2JwRjwNC3QXGckmwbAqVgwwYrYTnaTRDa5U5M8hCSGR7guNFxJVa3dnpEpwaj7TZCZCWitfx8RM",
  "key8": "4E3F6U7PHvADsKDdzn5d1eNsK2QzJcXDdQn9oDHG3Cpfvkp7zCqP7Mfuq9Ad2bmb1Mqs8UMtqWrCDT2XJLEqciv2",
  "key9": "3b9j2oz5bCW1vQXBM31NW2ACwipz8t6D3txL3KzWC1soySacAkCtuNUkncPm1WFJK3LaXmgWuni3KDQc9quzJT6j",
  "key10": "5sUXVB87LjKmmA4YFiz74tEn9vMGJyN9wehh51zPpjSc6ofuqEEntqchVHjaRQdbGhFG8uRsFzvB9c9zHvhVmbPG",
  "key11": "4a9rpzyAj4HtmfBCjGJyB9TvQU3C3PuoC2bgaT3z2HbWBhXPUk39w9JNtYLnv5kN9jWpqo3oCr4miZhqAuw6NZPv",
  "key12": "5snjiPFNdYxPcMmFfBuD5Nw7yD3LKTARXY7YcKepgGPFS52cjKNDzVk3C2W8RtLhHb2zhDgEYKG2zGXMSwun5ZfS",
  "key13": "HhgKBSvoYawTKSWBhU9ZDbMnCBDAzf61HzTQYcfGkdjDwoLRD4nnFJwBCwTwbUHFytrm14W5f9RuVTZ5774N7pL",
  "key14": "4Q5GtYUbiB5ie8pq2oKgBZUq3JqwnEj3ph1shFerAXweNt9tfzB6yyJq4sKcWWaCYMsNSDFyF41G6ZoCz8kpWkF1",
  "key15": "4RJJyS157JMat1mtMG84jtAx9Ey9RukUTKZXc1gim9g86M2RVEvx3uShswCstW1Dm3uqqoN7mRYs69zfiMpZy8P5",
  "key16": "3DaTKL4WLT4R5htNSG2LmVgaF2yWchmZ6LybhK9tZtaPd6vWmhWqgnTGZf5vumdtEwvQZm4orX9cSgArSjreishV",
  "key17": "5iaZexKY6mhFiZWUA81WLjiRatwp1dXpezi7g25AqLDRUi19MxwdSZdSKyCGoviGzNqDRiQrENWzcbFwRCidn713",
  "key18": "4KKkbSBnPwCseY1y2k7dDVjypctJgFQfMWs8ri3hL7xL7L6bQWsHZUXseTFKd678knwX1ESqzNBuk2HDNqsLwrr3",
  "key19": "3p5tvaoeAuTjFLSLswyB4zejfi8pAKdTGtqsXTR3kHdPETDQMVTijgV2yG4hTbgPptBkg4vuu48Uis48oxB4m6cG",
  "key20": "3JUpMt1hBFxnpBa1ewwuS3P5kr7UejiCjxFk3higf7VZ6Xuyhn46j63Kmu8LGGToHWhDPv7MXYY2D4qgRhwYTLdB",
  "key21": "64qTQrv8h8MPiT9VYeKFB7vSdjSxpbXrLnsQTiY63zc4mew5c1TqngybfK4jpdJvRP6Mss8N4YanpeggJor1qXj4",
  "key22": "KPKQ1V3rcgtKxfk1K4efGYmArVt8UmQ4ovAe3L3mPXekTfyBkBvowvuV1kTWAHvGJhnD3QRRrQ4HcSMw27PUSom",
  "key23": "27WHNaqgP8A77nKuP3WvuC7PNkh9nZC5Tj2RFL8rQk26VBuBXqLe8dLF7pnWYKABYZHhMkS67a1TjDyhH7SpHb8X",
  "key24": "3dsod7hob3JCvFKhy2BSPzR5MhRnJXHHAisiagfMeAjVXXcK7ApRJDDmiSQ6XcHrMwZce1FHFRq1KnrNUNbnc7SE",
  "key25": "7T53hAMG9BxEY5HjsYsEPmQ4hWokAXmzwdPsJeguMzVbPuGneKw7jyGRXnYw2sNz131JTA75xXxbfE49G8mYjmS",
  "key26": "28LAhx3FAhfYXyancwTegdtgkvV81SYmZTmwu3wHH9zSpXoqWUzzdx4RZvuWQwKGjfxbYyMhMmDL24qG8CHBS4ZP",
  "key27": "5BX57vx8KkLucL1BvhXirDgNetpuNjFBqBK1PcdVnmMgV4oegTkR8Jk6UqSXhxrCMHaDXMKPRhiikB75FMSpUAzg",
  "key28": "PnPRFb43QzFvsXaEZxUyCRFWRAcsbNoEWqeMtXg45CdCzbzb4roFs1hz2C58kjq6JNriDxT9sYEkJu54Zo7NzUT",
  "key29": "3EwxDRkT5wRy6AqBRjQ23JeSkFdQ8EoLikeVYqo8rQ2w6KEuAQQeCvAP8KCNYoyjLXN9RmpMg7RhMYYu23t1vyLL",
  "key30": "2WsqX2rJYohXhrUqkwFnWmXgVFFEpitoiKmviML9txVajBiEyh4s8qZ67G4Y4kEXhQ2ePAUvbeKbgG4FRZdY49jc",
  "key31": "2aTmTRnCKC224iZCGakVhdLw4BeewmWaLb5safNiT3cm5AHqVC7qbJMWfcZZKkY237V26QKW4rXPEvzcuWojNcuW",
  "key32": "2Udw42L1EcDEXrrZzZ2LFdwoGx83hgVnNAkqLBF8yHaENKZxSXkbQDte5vHY5UuXRu77f5FYEuT4xCe56mRowpFi",
  "key33": "5LvkvtMFLphur2N88MrSSFDM5rmKKmC8b473ZfCTum92pRbivsscNqn8pVQPDr7fogh4i5qFG4DqsiZ7jQ6YnFoc",
  "key34": "4mnWjNG6eeJFB22eQ8WzQiapkqa8Nz4hW3CHQ1Am8uLHUG9wvhFmHZVnS43g1b7BjdzBichTWwChN5C15iu5TLca",
  "key35": "3SYXybjHv6Yd6gokAsYsxhiCJHQdbcb47rj934ahficjawgNeReGKrtzhijmLrQKjtEQYLekeU5jrAg1h5CEpeCE",
  "key36": "4EyqWRBi7gzcGC7z5ifdPZ5YNkLp3kmLRW6SC8LB5jZoD1T9M8ifJJ1n9CfYutHk8fRDL4Gic8Rk3djbjSriRY8S",
  "key37": "49n2CnVgezp1VwSQmZDdmf8F3nksy8EcoYrgtBd6NmvtjWsiEw86JwR9H2mPCfqfiVGnmYwHPCu68RNsGZge6HhB",
  "key38": "5FJU9L24xNJu8PmzosDbriDrUuMW7bqZx8bSPHW9fb7EFMgXrtDj6qk9kXM5qXjEKZ2SVehpNviinoEHbHcbdK6P",
  "key39": "5M2QF455rwXjRHgzwRLhX9smt6K2j91aR4aPjoNaXE1TXYPjFrc9fWMSuL4uTbg28Mh8MXujYnmNJBqF4GwGmxpo"
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
