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
    "2EYHxshZ2py9FgBthT1MG4tKux8bAEL2K8jpCKNDEQPaZ6gxke18rPvNeozyCUHtHyoM3NSe848XJcnZNMfADry7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XMCKiyDe1YKhqTwS5TB8v68XjVY1kDSFuRj493BLHdxUzL7BRPsy3FWB66HTQKDoSrbhJxJYgE729HECBTMhjf6",
  "key1": "K3rrhXKEm1Mj5E7v7QJqw3N3Bo4QTWLe2eqAgqf8tpJ4Mqg2SgqPCgoeFfRy9oL9tMJigtMJcFEFJBRae1KTEHw",
  "key2": "3uLCS58B5JDZcAUzhKa8neKgL3BvX9Wx8BaHcS79HpBsmTjmDCwG481ckyA57FHVCr7UwN9BiZxU1ooyQzTPoEH8",
  "key3": "5Mp2SqbjapVSEPh1dJ8nvZhD7XUi4AeBACzsnVTwpwjmJsE4pM5CHQm3Gw1PvbJBKZBM1pRKsqwMsWq7SssPXT5y",
  "key4": "5MHGrSKUMhhKBvKi9T44Hrikq84VVXq4gaXAYvkZoosySbe7xTrtNBA4B2MED6o4JvBhqgtFnfqdXZnDqoBboM7x",
  "key5": "4x19HMy3GV7C5eKNgnZBBc1dtmt6sgv8iHZvvssCzLoJDLVqPdbhW6E6o3kgzJoFqvVYkzvH6BPtPexRJBotvHZV",
  "key6": "5474NXmDqcPoz6FcqhXBh992jBn7CYdgho5VSLwSEe5NpXvjhHCrEggy5U3W2xpWdfLx6zUCAw5SuXRKdpzw7Qz",
  "key7": "u1UcLFduVoWQSTwUBXPCpBbvYqyHdNgQzyHQTSVtAWUt7hGUCM6YLsY3bLtKWsixG3pqGFAYBTXwC16MWz7dxrN",
  "key8": "37Ye6ohzUNiQHnynddGGxqijMwBJm1R1vJFLdzYXZMJRpeXmkZ1uC8RXwLs7VSp5UtZZmARW2zhd53mWVbpRogTQ",
  "key9": "4gsW9uwRLVjbthmzsoweHok6E8AJtKq9dj5sqPx3wE4PtXXFbYENqLZeWobGdcjT4VyajUaQbRBLPRyft91LApy2",
  "key10": "4sAqpvV5CEea3BbE1a8MZV4qeeEP4tX1UAtLuzC85jWdMtyMUHURRUYCiXBJaTk8p3Y5xNxtBkJ5Atfz3feTWFDX",
  "key11": "2aoSYLcTodVeiQgChmMPe6xqw3191KmXCFYkPT1PY8qd79AF4LihfWrnr9nwDi4oLg7WyVGw53ebpN43oXFiefxc",
  "key12": "epF75Ggihp4mSvPVkBvUgn8EwmF24oyaCEgA9tCeZ9fqxBMS1FpFQi8c2kKeWfhBwrwzpjy31yc8LN8U2ptUf9p",
  "key13": "4JHaenDRRXNm6LaUDfGjMS5bwtVMMf3R6bkcF1zvxy7pWRYak7c9gxzRi2weRsRebfmNZjaf4EwQWF8KKgnSKZ2R",
  "key14": "2A5jpHvwBFFhPkQL9FVJxZZ22q2rka8ArKuYdpgpAFmnPFTQyXQh6WhZ1ZJ3u3vtg7aaebCBZ62boEYTHZyKmPeN",
  "key15": "5jtvJnVXECcBMZ7JCBWfyp7BQzAH1UC6QNVj2nSnpAwwXEEknqjH6kRgLceWXWnB77UZT9JqffSRPDnyzrYooziY",
  "key16": "51Yt9JmAp8RVKRuTgGHAYY1Mvp7kSiTP7YG6r71f4PSzm7eHBMmoXWtYGAukD6UsGDoUu7wsQDT2CjbcqSht1vYv",
  "key17": "2ZrmVYVejU1gNVXUEAoGJN7TynnghdVZTximiabj9ebN6VXNqgGS9KqrQq52pf2ksGkv6mVdo2B4kYc8AR3dNgaF",
  "key18": "weN7f449nUFufbmqsw8FqaGQFmTB19V99Az9ftrzDwrzS7s6m8tThwGGys6oQwDAK8496pNMSKCYPk9jfBALmcf",
  "key19": "r4Ka5bJStj5jtYdRZ9BQrM27Rogy7xcf6QaFh9gSdAceLVSA5NKaZraMqMPvwLzmpUXJTcJCxuzJkcVtE188Cjn",
  "key20": "mnbPah4CjNKHKJkpGe3RgKzYWkcbvsgLGGwzkESYr4GK6RGBdR5GcPA7iSrEd2559SFGF8uisXthaYp9EdSm1eS",
  "key21": "4UR7W6zAmoieFYKfDYbockMphysx6PKbtHHLUpDeYMaT93UdSU8AKZGn61Z21EjfyY5X9NZNk9jL8FCWfkhtCkhF",
  "key22": "5t3Uv4UW4L8wW1JcaFeU1U5GipczhMnwVZpXtYwTcSHjhFYHLHBtbejJLCwDYQcciCur69P9XQGQexa9UHAwVtPU",
  "key23": "2NNEsABPUiDBgUE6Qt8SFKd5ezvej8ZEEHhi7vJ9o3LCGpRW2kAGQt6aDGB52ms8qhcaEK1a8rfZKjCDGt6uQ7sW",
  "key24": "4GVbdxnCgpzAkWf9DEVMLfi5YJ6rLJSfYrysGcBE52GK62QpUjs23jrWfFroizkP5TNoGB55ipQRgHxCvx74Py1M"
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
