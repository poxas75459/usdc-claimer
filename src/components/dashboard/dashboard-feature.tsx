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
    "VQVrDrF1QFDYKKraboaW7e27X4FuesCcMShDCqJHWT8hHz7Hd8mGAcn18tpBQvX1DBG1K8tMy9natRQeTezDyGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4utRy6a2XX42A7dGgpWDFJjCGQfqmbPQR9XKbuEXDTCfndTNgs2hHEx3EvhgxRb4mg7coUNNoutHpZ7AdzBXwvac",
  "key1": "5eSHqdDBXsbVHCBN7q9F9v1VhjQno9ZPA3VmbREZ21SgYngtcMC3Jb1H2qLRVemW2oTZGDsmdaZ7m4o6AoBciNL6",
  "key2": "64k3vAxLFzNnXD51vmqeuU9L8DyeDWjR17cAfpNbMXD14twUY1w5j9Fu7T8Z5iF7YLY7DfaMqUmf1sxej55LwKLb",
  "key3": "3uqhdV62mU5tPskLcwRnBbeJAujewu5SDJY9zoD6dEEZzKV1Ed2szpvBLn897Hpa2pD8X8HutDem7QTSW8r6iYeR",
  "key4": "5hMXMCs2uh8USgMC7fiVWe1rEmRSWCrTmvKVPFMGCNrAQ7jfZTPjitPkzU2rYjzp3qSZv7Y8dScR5Z69fGcCZ6mL",
  "key5": "4MyDzJuofbHmgeviBam6uUPYcTzAHTTNPCRqiGfLD1ByyFUNc2s2XKpDo4r3GSZb9D7xDjUUg1w75KLcALuPt7X5",
  "key6": "4vsv88swVUsK9v7S2m2SPF4mQtev5yuULZSx4S54smUhjEYW5hc5jDUcYJPifRP2WZ6ypG79Fgip6qMzwUKEGKzB",
  "key7": "2JA2PjiyUwbJ7WSUTQiAUsufKmeGLkTN2RLFcbAEA8aLsPgbLqpZpXywYMXmM9QY6prbX2RMgLdFZKrgrEM55UtC",
  "key8": "59h9q1xqV2fSD5eUZ8tcav3o1p6g3F1L9VBAwfZbAd1vexy1cLZqdQK3S35Kb5AGBcgoSusyFxrFKFZunJa3GuiR",
  "key9": "664w1WbtxnLDGVhoUpH3Nx79Lwc9YZBz8iAL1R5n9s9koyfUWTR2NMkv1GrjdZ73Ws43ahFnswzHijwZERVJkro",
  "key10": "4a13tReTCrW4EgZiR4tNc7FMMHdSaTy3SY8sUk7p6vba5nJReoa6C3fYFHu5HmhszAb3ox7DEGovWAnXBY1RhYCj",
  "key11": "3bbQoPqUziCR5tE7Y7WCp7ryXzAmSsjnB8Knw2FMNhPig6nwRHGzuVj8oNX55dQzRsZMwLHXC2VFAZFUa7SThuxi",
  "key12": "2MvHeUPuU5V8xKdNNJAgXnyXGapn76rER1xYPRq1tD7Uh7FvVNnwZSrgajay1tcX255f9QYLSNw3CfZrBiTpukwM",
  "key13": "2uTRtkBHVKQyBqzALNZd23sPyWSktsAbKcpbsU3g9vVcq8qSZ4nw55Ta7M2kTxCRhbzJBXg8LRqdrnkNGvr3Dya5",
  "key14": "52p9LM7S8D2aKVEEunym8oTUJaQdDnpSiDw1pZXknBuaiW8rVqREu9mb5GQ3RmknZrmf8LKp4DqYe8PTYdXqpdbW",
  "key15": "3MiCsCZt6etYdMFhMHJ3HXZC4Qh4TwcE5ZqjePrdJVSJZsJCCiZAAWSuUrvYburts7f2wGBvJpHm7TvzYGdq694t",
  "key16": "sH62dT3XhjnzKgaxKEHuBR6utNhohWwsuxQkuMC7uPjywPZFRwTdqs7UsG6MeC84vQUzSsnDqt9skBQ93pQDFo9",
  "key17": "5MfiNuKQSgTydYNZjQmvp7kBgAz5DMhRyixogmy9cu9akkgvGPQXonM3WG4VttoYMf2pQHGyMS7HxjAJ2Xnx2gL9",
  "key18": "5Vy1gqawDzLy3tfjD7jxVRUp4dnY38FAHcwEZx5AcRkaEVbTycxRGTJBfuA6tLHpse91vWSa9Z5CE7byW4KTo1iW",
  "key19": "5uSDaqhUZz2daeBz2Q75CdLUJqbk4i9krr8Arp2aZJ66d3J2pAzkAmtdnNACUPdNnyLWiQgDQTm2tKiECLYAE7Bd",
  "key20": "5TW19RWd1795GCgxYyTQft44LoqCNUAynvoQ1r33LyaH2UepKH7Rhmcd5QHUcBBi6VsioHHecda48hEPtc8N9umd",
  "key21": "21Sx9w7oTHKybDR2JkUUpz7nj8R5pDzcfQfCa6ixs4VBVPSQxzKtdcxWZZK23ehZQb8Dr7sHLaUorP83xXaVBnZv",
  "key22": "4Tu8mcxi2BTkNDdZzk4APj1GJozFAK5qstgHPRLQKcQn1Typfmts2os6y9TPMhGTtBPPZiqyYSHtnokSFd3upSs9",
  "key23": "2fxNSXSRMZ46B16p5rh1GuQDwJm7xUFdrkD116qZ7q3nCz2hqoqfDr4vhuvAKdwbrf98ftxSw3uVTfyAw6c8y1HT",
  "key24": "653wVRVebVcxrgvyvbf6ubjBkVAGFbkb8kv5b8EKjsLUmZmhVScGeuSQtr1EV7XYhT7ZRyPvWDv8ggxv3aHCtyfc",
  "key25": "39nDFhEEwANi62uALiBLzRoeKhsBbyEoXDA83wRM1t9SjKx9UaW73XAdPLnviSCdYc7VhBncBZ6TtUgwZbaRRf58",
  "key26": "5QcpsgPHJNZ6X2HQNp3W9GJ13aDdUwevCbU3cERuKA33c8Yz4ZhSzt1v2ojoqg3892xX71giba91BCkH21uAC1UW",
  "key27": "BGHEhH2UtKy6YweLEqForHiEWaGW5VdWY4E47yng7sAAfbLi1HM3bMgqtLxu2b5DRw6Psid11rqrtaS4R2DpZv6",
  "key28": "2W2Q78vj4PWcfFqqruaGwiFCgupyH9kfL4b2UZ3rp5Pw3j84UeebAREeBgDdAPPBkEd65my9A4AiKQQ9ZK62sPz",
  "key29": "58CJqr59Ezz9eWrQG2XKM7uEaP6rxenJRndqvWNmv64c6ia43FeTyEz8rcQgT8tqirRJpPViRmvFcFMaDL3x11t1",
  "key30": "5DcBv6Mx5veZy6y2SaHoHhn8u2rigGinWpD6gwxA2ZKazCGhMuz8GZXpXtHUpgbmSw5Rjg5Lk9opcTqEntScgrht",
  "key31": "31p7qBny4e3wUYFzzZ9Sde2dSpQXPP95ZKyGHJt4jxXshfMuDyxriyQugWoiTGFZVEY6z3mF8jWX4DViW5kUxXmM",
  "key32": "5AdozerTT8iXTk97mnijk65u2ThAw6eNZ1ypLJd3xaN6wYy2ErbXtZogJ1PfZ5frFcA4AGM6Nj9aCWanct4ZbTaa",
  "key33": "2AhwbKgXfwkNe4Rrzruj7JDg8gQ8GwMp9JTQSAEiLwpQJhKxjc1gGL8cC48KxkqXbHPkjXfFNjqNSKKn4XxQA2eQ",
  "key34": "5JrGDDJF8Wcy5hPoWt1xe65Hvsax9G49b61Mx7jUbMK3b83usTKSCHXqomBoBzEG345SXdRu1AhvMr8n6cHzLotj",
  "key35": "55VmoGjqUUkb3hnunqLyrV6jS4ebckc4My5EfxNtazZKBdLC6G4UqCtkzm9uaiCPVbkFt5zzhS8ZYjS94aen9xH8",
  "key36": "62gs6i2Bid4jEQwjxNKim55ZKxGoGPPuG34YMHZtSa4HtCakamoTAmgz8WN4yb3scrGvjjVU4MDMUwTqAXAkTS4H",
  "key37": "mxETvGeW3nBN7JAyuHsUP8fmbTW3H249oi1RjnaPpb21hHadxMm5GNDUJZHxFEC8Vakmu8SXusWmYbooNrT7B8j"
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
