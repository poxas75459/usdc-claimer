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
    "3gXpG3nJs9MCrXQfn1HYqSuvcn1DNyB4Zg7i6CHEJGoNPCL8abxfTzXXJEefuWLGZfWxrrfcmQh6RgKbRQzpEQ2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q3aVzxSdgJxp7A9wjrYY1kfZLwHCZ6fMavRMLqqEY5ebzgSmuhdMhY2br2Hz8RzuUagda4bFrSk37n5ESbFZahY",
  "key1": "23WvvhMyCGzjxkhPESFnK17uNyXdYt25FgiMgkQaRhi8HEbJ4xdAoTY5stkA1CnMDJjVcJc9udjLkd2oqr9D5ww5",
  "key2": "22wUd4W4dBYsso8Kyzy3HDbNujFFqjYrXJQQku4S1qfEWRprRDdN99w1Z1Mm796SFzsUceYoYMKNPZB58iMzviun",
  "key3": "3cxLNDRCU5cY8uLpHp3PcKNVmJRd9rVh9CbqK293XCYEiZRT24ep9jAepA9tEXfnmbHCLhKxrYcxyBy69ovCbR5i",
  "key4": "4whLFWWwYvskFuipHQ3Jw3t7Q84HtzLmGAsAgHeqtBzs7cd5BHXy2CTHtg3fSqmyRRGoK1kEMvJ6aLABQxuFXzqV",
  "key5": "2gZMY4EgGuDBZtnv5LeQF1sTum74FwXPjnYLXQJrx8oJu1mHARUp74WuCKjyFt7i33qCpfxtbJ5JggcwXUNLayJ8",
  "key6": "5gTD2SsQGxUyrVBTdUbtxUWGkBAwJeTBjQzrWmZA6D7UbfMJ11yYkfTvBvfDvZ6qHJbhmHKSHQhrk3eKGCNfbJvZ",
  "key7": "2QFRJKwvregnk4PEqVTbxCtRg9z1PEGSE9uaCm8YihB6fCYcZiYBgkc1JFFj8QanqtmQEAuaS4VEHn6UcUDrYuvL",
  "key8": "dWWMFeKWbxTcw4KEExe9gKQwFJxCoU7YA4qQT3D3vu1bdjsmGLb9Bgeu93TKjzf9iMNcyJb9CJK4C12fwu8wouj",
  "key9": "48w8rHftWe9ENWgTSb6HL1H4id76vNc3ygtMDEzcNQdoxfBn9naHPGNF7avFtVTGTcUbH8kBpegZvrNtHTQtyuBn",
  "key10": "21XfXjPJFnFpeEMBU2L2CxjN7cVSQ8J8Wzfx21b6iDvApZzAWnghVXayPkdMs6cFP2p6b2ZeB95iCcbxtbCJJQcH",
  "key11": "5nS3Uzx9L36eZ1CVyxPMQsDDeqef8ZDY3xep51SCcm6LHFG3J3jYcmjEQDYUSmpV2qEcfb6H32iwvMb9o7CRkXwP",
  "key12": "2u7fJk12UWgkpL7Q2y5GpqJ18TUT9MiwAQjUhFMEM1MArecdK9fbvjDxNtdp5inj5WtuaKty6vayKS2DDQz6L4Gj",
  "key13": "3zsE3QG9UEnd3DgVzWHGYErg5RME817tzGpkRncJzYpiND1dL1nMpvsC6YF88jDTAZYD2D9cwXLrw4G1NHVJwyWn",
  "key14": "2BQU8s3n38FmE1cw6TWPmCH7Qj1trQzMFp6uPGcnsww5XprvZRnZudjnf98aoUTnPJJzHqVFZ3t2JkYDWpxemhc2",
  "key15": "5QKrCkt9sYCpAiwRa67rfJywDVnNL9G7S1L6ZLQTNTLHFNndrjB9g4Y7A1oCERMWFhEfjzLBz7r3jYLd4vtco8o8",
  "key16": "36E24dSXofffjPgmU2936uCWpVaR8VudNAa2DsgHjEiwByRLNNm2Cr18Zci7WzhT9Q4vx4EJ6KRpZ6TQL4fSXfsh",
  "key17": "2vcXjqyviRQz7KV8dRMpSQiuv4pYA5UndGGQ3Kf22ZgzerhTuGztP2nvus9Jz7N7Q6fW5rCNNnm3EFcuoUUHomkQ",
  "key18": "5esr489VXrfrdCM8KHAgDHr5AJgFmi9iv3UvXM4tf1nhrr6y7dWAo8NcbrWKvKeKRiGqnGjyUij7wExkrpf9c4zf",
  "key19": "5KpF5zrMMXfuEr8UZXmKXAwJC7u92GSXDpAXVFZeHjhqBtZivepntqNAugdL6FMCKMdeHNfYcGcUGRkZhXzbf9y",
  "key20": "4P2F68cyxCjFgRD1mfseCdHauUCDGHcGXpDe3HwWdGHuagwnU7PAxhkgYhDukg2h95p6G3d79jsvrjv6ALiuWqUW",
  "key21": "GiFQGdNUR1nzXN4Nr9vrL7bMQ8ipHBfhvNFUCo4z3kywHX1BNT3FbvcEdFmpNHrTDAND3zqxHR8M29nn2rLspiB",
  "key22": "2SHQyQktk9CjRkrVN6QawABh2C5WraLtAUmit4BJH6YRXtLZzSN6wsQdENU7kKW94tVWsfN9861riFeZN1Z5bMU",
  "key23": "3PfuyMkCJpeauWB4CDFrS4LKJsdkYfDpCN1v5sxKfoCdCACpqat1TeVREnUACELybAok5Tp71No6H1KWrfx19odE",
  "key24": "5c2jsgXdq7ZuRHmrxteadGuG2oMtCtUciuVrfsdQChEsBuwtVP3ESptyM93NHxJZmEgw8PfNSbeeezGm8ZFd7oCv",
  "key25": "3NrPJUtJPLvpcSCXXnCBaNx8VyH84uTFq9rFbfbCeNc7MbyBeKVYV3jExvPYSfZ2eQ9NPUgpzStk9XVdcErWXHiR",
  "key26": "2TWH4LeQVEozjYPw5miPhJ6V93obtuTSUgh8rZNru2gVWfRnF6oKRggUko65ayPwymmvC1pNzMxSyL8CN56fXr99",
  "key27": "oTHbh1FXX82HZe7Sjg6fFqVtgbEqn5FGmwYCbUeVDEuWWu4bUd52eFDuniUrdRyGYGtqDKkxmLBWaXk5YyYWHyj",
  "key28": "3aPsp7v3WUhsmwhxUUCHb995TbLz9jbrUpfiFvEgCfwGmQpqYUpmas9mHcc7ve1Bb8B9LtrYDGV646WpfxJGvuHj",
  "key29": "3JRmc6FYxc9MDmbKhGGWgHjqdrddWrjq46Lceu3Xb1V9bpAXU2z7mbofsv3FhyRFto5aPFGqtjPWNvgmLNPbHN6B",
  "key30": "bXfECHLtCz1EK4nELuysFxyg5SD9DFV7qJXGuDvvdYJMdCmCFcgdFcUSEyiVEa2CKnpPSLHBfM1qYcaJLyKWyZK",
  "key31": "34KsQbs3VhyNdjYek4ij6zqWG24AZKVKaY1aPkqymU4WcnxtzY2rgfREDLCw5TuhNrPqj7p6eSF8VQoNdbmrNFu4",
  "key32": "4VyYKQN5ttNQJx9NHFUNb4pwuNF4uWyki5TUxedW8EyRFNUzxajnp1RXF8C7JsF7kzzfj36mwfKAAyctCXBnn7BL",
  "key33": "2aSwHyPtS9KogDi7ogDMGt4KWCboSodZGJBLmWKLGCBEFGzgyGAeWVXMcJbmapFPcJQb2BKqSNVhXwyQrKLm3fGo",
  "key34": "mARf9FyTfGG2PXe6BMhLWfYx6VBUA8jsN7tnZMXKT3NTQtBztUM8sT4w3Q2sPkf48RKtrN6nyfDfwaksSkj2n1H",
  "key35": "A2E7ccbEZa8cBq85NXz9fEHckcEoX3FJAWF71nH72zPf94izSx3mnJ4dYtnihGEj28KU1rDypNTzm1FLMUDyAq1",
  "key36": "5F1VrDSRWtyYshitSMKxJuhdxQBspj1HaR1RbBxdDH1udykNYiEGm1DqZY9K5ZwcRBLe2zWjRZHQPJdUHcYLiKSR",
  "key37": "2qkfi17NhFjQMEiRyPiFyKGRBAfLCtHiQM2dAeGQQJmjEdCabEBJp99JmBnoJNRxPrErYN7WUsF56b6fB4VVKE4s",
  "key38": "6ECMvkx232HiqzE3FA4wbwedrZ4YnZ5ABT4U4v1v1YJsj846D9SPMnRwuarxPZMdXumVZidQLoMZomaSxuJqspn"
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
