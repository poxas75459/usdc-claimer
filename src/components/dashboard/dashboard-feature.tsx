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
    "5XLqFvh2AKUTMU4pUEqnZGT4DmmGWGTxWD6UeLHowCdYZC9aYTmqSNQzRcvp9vQE7ftkSxdCNutEsx2PLoNnrrnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gfpa9LVaaApumBVSYw8sHGErjuB58jFDYpYsvQ5YzRYDzoQvzq1mMYyaCuUhTEa69yPbvnw9pk915bD45n1P374",
  "key1": "zoVDpJyP58Hb6bEqmq8dYxQG79xEx7MCFscj7Hsiqkz18cf5qrVm28yxkUrkf4A87WeZfTtKt6iM4gQ5c3zKWG1",
  "key2": "5GLfA8DTS89asyC1N2ZpCFMSanBmNZb3WoKPNtgG13NeNYUgUyXUrCghXn886KCsjNKTEst74LE56VG45WdahsTA",
  "key3": "Mhei3aqme5E9v4WcrrVDTYXMbdASo4xed59EtZVdyZwCXshnqgobLFffJcAbumKoMsBqZkNbqVGNU4t7LrXpdt7",
  "key4": "3SWYjgZ5J1TiNyoZTNSYnxQ5Tx5GEdBoTnX111x97JLupdrWJGEfo4gRTwayBCa92VuQqKXP7HJJawZxRv5qVY2V",
  "key5": "3yqvSa9wMntR5K8LXLm7bA78Mx7Vec16A6qgAH3qAPomREXu4kCp1uRrxKtJc2GzBj1mDuxS85WewYZ7oLo7Ppwu",
  "key6": "4ZXZDsuyxCzVcNcwghDxJCpn3sLr7ZpN1UDcptPCjy6GwJzUeaD5wZn3cHLLUYDYVwkSfvGt9VTcQYo54NRxx3Pa",
  "key7": "uU4796JN3MgCmyo5JM5yN9ti9gBfN9ENTAbz778m8RMxtUaRPYfaTFV8RFGW5pAXWNbNh2R4sKyHbVrbU3sXXSb",
  "key8": "5p3U2s1T6zNM8dfvEqxdRJFuEmZuVFFrqXcvuq7cesHLvMeCrzrUww82LWKHWGqpcjERDkjWiD1Eh8dXrvvrU7ek",
  "key9": "5jvY56N9fdkkrmxcQC75dYn7ZSyPvEevH8ZTnbUJ3HEg9XqyEEDZMQDo5QkSkboNbWmwuip26FKcecudgSiwG5CH",
  "key10": "3JGNVTP2yLZ3XztSNtnBkAk9XiZYwrwDgSb64mAaHjzmGHpzdJvoQEAnazzxmA1CstkkYjjBkQmrQG4bHtApSpiE",
  "key11": "2EWpYm9YRfJdKFStBFrh4QKH5Q3gQwULb5bnhGmPPRTaKmmjRnsuxvcQdn8g2Y92YmsprzoSwgQm88hSMp5HVXxq",
  "key12": "679kcypWbiq4qsjYNhKmAhoJYfZf6AyheGHVbVQuksNYGHjbM9RsS1Uk47tcDo7taNyvJMztxKe47mygNXL8efMT",
  "key13": "2Xu2TJYy7QJA13yQnrryRNoa4jnS9QEbakwRJUZYUDJaTrUKjCcWLKMs9ZqmwCXFLKz7XjAJfkJxgA76LnQFruqZ",
  "key14": "9HkmGvir1WNkR7HLBkTcectmsrGkJVgeQamNwQjoCR7X2h1VRqrFhsBEKgSbUXdaUNq8pEQELKCNov8YSnTG814",
  "key15": "2FrEjSkahwwjk2UhGPHdWd3vSvRgTCNbqWH4pC72x1Bb8zAxzRWRGbGyTBwK4SxvzGRKKgNjXnHq8kndDosY1zoW",
  "key16": "e79eVtn5rjMPzy6pxfgY99ru2B46XgN4uQ5ShDzMu9gBspzqVcKMZuJsjg82QPnifa5YbHhCCJSZGAQJpWy3Syr",
  "key17": "5mHLdH2KjrDmoQK3ZF78M3gUzpNz1uom1MVQXenEvv1CRZPUUHWFLEvKW7T2WEAZD9E2QSt5REp8yv48JEzjRn99",
  "key18": "SWXYM3C2Tgxo1BNAgHLaQCnfw9xc2SL95VuDkQ2LmrACKSevvq2X9yMbsMTUzhkaKxFiimDDUsLDzcAL8hinYSf",
  "key19": "5Moj4ntGDzRt6KJgpBB1KpzcGgYMm7Ugah71t5zgtSee1HALwrihhpRemn2zbEGgH7GfEwMLEDP8z6ebh9yAbbqc",
  "key20": "3KmfLVmTUMafvLzGpdVfP3DGcUS6Erp7z8wPgVNVLjs3McPmKn2dFZL3VNDpsVhMKPJpZ6uBE5RYkf9Y9zc29LSV",
  "key21": "PxHb1FLgyr4wQTvmo2P2yUZsh47YKExSWpCw729qW8WGSiYeBKVfM8fatxGEx5xutDhrYoPFbTbHTa5SkoAjt2s",
  "key22": "55HMSUDqsy89x8Gq7UEBbpDj3AzvN2iKAmBqKRTF4k99mSVFNLuDKgYypqXFo6BnYXLqYacqcU2fkcTQvdCK5GYN",
  "key23": "3PeJgLKixAce3eew4L3uNdTfwsNHU3RYqMMpGXv8M4a3uQ3iBRMMY6W3tQhvNJZ8VGYQqF3MrFCmTqJUbp2WxBEp",
  "key24": "54GnH3bMEhwNjf8iNF5Viuoc78sBmwor5si3zrV5SmPCHGRW2yDYjQHXfQV1L1NED7c1VVRtKrRa9HfrKZyR2n3g",
  "key25": "5yEWUPnT1SkhQqLNoe4qGRLmGEu5JhARn1mHrwJ2N4un92aBdHF4tS1Aqj3TZD2fK6giXFPizavrWhYUHYNuJZaz",
  "key26": "39qVYnxV3QnJaweXJqRHTqBoyiq7jNTBusmx8uU8zGAvYm3sfBCVaopK3JrGpZfL3eZT4NnxPtBsjzWUPNZAeSxQ",
  "key27": "2iar351tbZqZUt2jXnJdwbimqJKE24nRK4oN1s9cGqUBwfnFu4zAZLG4XLYw62ebs3inZwGGW3HtfcazxgD8Go6F",
  "key28": "pWAnjxn9dKaxKY64c2FXqw2PkM1eWWYTJeNoYaRBc1b8hTxCv9ouCPJALCsaqBsxAEFuDKiC1UzyLv8BVGbSDis",
  "key29": "5AkC5XtyrGAcX9pB8fS1P9w3guXrN9ewSx2Yy5k9YvGrb1KMvFEcKv47QrSHPeExU19ywfEnbsUV8FZ93AHCcoeC",
  "key30": "57yh3CH8rc2VYtAKV3gNuirY227mEAVQuEozCiRqmzNwEJfZdABsi5WzrPrsb85nFuWHNvHyGKYzXF9MGstYV86A"
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
