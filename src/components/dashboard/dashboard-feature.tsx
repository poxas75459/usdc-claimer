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
    "p2Ryc4pyf9HCjeRWMwepJSsxwZEUMaey8xwLNStK7siwnUw1DK9XKm5UhNEQnVSBxv3utXxTzugZnohPVh7xRFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SJrfJ8Kv4wC7n4RqA8yA45qzo6SAf54Nb9wKGRYb48eyzhjJLcJSWVQb2sqav475xMZpd3d7T6pTorMnJX4xjoy",
  "key1": "3Zx6Aw6mKzCMzgLKx74JWyXP9CeLQXHnxHm6V96aKSSLtsNVkVneeJhsqqCZxQfJfnLBJb7gsX3jpPTfNZpQ4c73",
  "key2": "5EC1wbExaLHa3wo3aeKgDVcWaFjL3BwBsbutZN6RLkdiGvT1XG8P1TsJvGGygUspPi4nN6smUpLfvdqi4JjDjxSy",
  "key3": "2MYmzPYJm336uenDR4tkbmXLvcbKg2Lz97ogB8avnMSEvC2uBaLTodTF3aaqDan6WGnnp6PA4v8ex8gFpCoktC12",
  "key4": "5XdKzrKMst7FhE351iep4NzCaiiBTF8zko9DedcjtJp87tE6vMqq8CtmBx7AhMxbRaU3CazQjxcdaWSW1oKFXfVg",
  "key5": "mDL32yT8LqygWPaxcyZYQqjtkfVkKgfq4W2vtbuQepPjBxnfsQatmgsDErmp1hPkbvQC6z2ExRZPaGct3hh4H9v",
  "key6": "5XSiHhU1VJh2hi4DLEMBSpogUU9nfapEoyJAEqntc6EswBtkgHAKeNaCCFdRBphfPT9T1LrL7VZn2zPg1gYa5qHB",
  "key7": "2G94A9hFW8At48H7X6Wz1itHKHFJVo5GzFWkDYC1CSQ2XNS8NuGvTJM6YFtvqwgffVSJdvXwvb7uCv4skVfVSQ2U",
  "key8": "AEZR84vCgNJangKxW15Md83BG1t7zWBW3tutNPzRZ66US5xsp5oAQCb44ZMj1wAf3dz3Ws2EreZjLsjmgchhPhA",
  "key9": "4SKvSuNfqduLwKiBxxPXv7RQBfwqmehGcB3AUJZCqYHXjockv5WopsY7r3Le526RvNqfZtNScFwoBFpduwgeLdRb",
  "key10": "4yKk2SU9GLMS3L6Mq3BzFrXAf2fH8KWMWcp2ZKqBqXudo35FhxRDxYVmmTtLTmjwtKLnAVqMAjrmTn5XqVmQrWir",
  "key11": "kRBb7prn36mcZffNGfPHQ316b6VwDHi6BGqmEkLJDdpSGDXtbVFBUhe8YKksniqR5kG1hZZ7iW8k1xmBYufVv6k",
  "key12": "5MXrKRYTLjZvFzp2Q2Jsq7KxGBhYLZU9qzQGPrzv5Syp5uriFca6VNWVaD1ZEoPPoYApfSQy9y23nAY2ea9hsdLw",
  "key13": "3AtugRYzNZdRDWQzTktR5FPJ2rkPyJ5cyUd4G5AtdvfXrE4RCUM4DA9hnLPJAYVQA51eUmPxg14ZqMPBNpu6HWt6",
  "key14": "3k9EWNVg74yECASxCpTocnzMVJu5igNxHLWg2kj6kPN2VrWnxnS6mnH3iqquDGfKDprKBm4kfVp1wtnVaf8x8WrH",
  "key15": "4jBmsayPEsrbb5bDxdHvNzr23QcqVH6b2Zvc1LiR7gTzj8YQq6CiHBkPj8P6eUECpwt6PbAhFJQwMeGUs49vCvhb",
  "key16": "HxH4JMYTywLgEY3GUKj1Evun1JfW16dZUJBDA6E4vhpw8hcx2Mba7cK5LpsWgbLLgmGwvHd6ox74wTonYqfxz9C",
  "key17": "48tZLNxUdLYJwaHdZUUw4yNuDBHBoBp23NmnHEKMWjJmW7nEJCbjBHzhfzpS195EJFjw7zeze31YLsZzguvWcfgn",
  "key18": "5Wbaq7qfwztjT73McaTAowZ6xoGY4j7ufqQipvMGzx1nZdQFMs2fUBrRAsW17sWSQpy36jzXB78QAYkbA7RN7p65",
  "key19": "4YRo6bkjVpwzqdiMyradSgTJ3sJgC9uHYRnawFALikT3qXNT2b84zXCWcUFJ7LdbtnwwtFhEstF8QUfKyfgHyJ2B",
  "key20": "3ykqYxAiiZbP3amF4p3PXwJXxhSsCCMRTJbLhgggv8VCLogwmzk44y6Csq28ZwATrbabq8ppaokNFKVUDv8GvZoz",
  "key21": "2RgfKEytNTxS6CwHSUDzHMNYMpfgjo8EeXoJan3YxXp56xdG4tkoWNyiZJcHrb5kg61JSvf4LJmr2oiawveDFz7H",
  "key22": "3TAALBeTSzCyNvQeAkhepUj9hrC4Zb65KjVAbLUQQzEpMfLBgEG3BERTgUJArGBM9YVZXjRQgJSq2eybDgXSVm9X",
  "key23": "2dfum4hb6MDuhr9cVwH9iungo6Sv7225DyXk4stKWoWQAoQ8WYrykxe12h87LKeGC4mZ41427txW3AKbbp8Zszk7",
  "key24": "4kmUjTs83zALcGvDgM597zdfnMrfZVnxz4646mzhbiXdHYdRq4oaLKui9FFemVZsx98WnWSyA7FfMXMJ6AMJC282",
  "key25": "4Mpv8r771NfHzcnZAm85atrBwmU6PmfmzA3Hkxq1svr4aNex4Wy8zgjVrggksfmSimFJNBTCoFQKvEau6Zjvs7po",
  "key26": "4oFJgrDaV5pnZBdu7U3q3BzDEboZyRRtigA3h1YV4Jx3DtL9fi7vS6C2AjnzAWhmAk3n89z7dzhGp9jz8B49xnho",
  "key27": "2svxwtwvzs95puTsfp5e5Ybrsdr4Z3G3djFDFpgB62EM6pX6qivw2UPu38YbH3FrayD1uLHbhpDbRRyMFq2Khy7d",
  "key28": "4R26Y4zU2yUJBWJCWrScy5E9au7yap3vHPinZvnQ9x5NSL1DB89PhF1cRg54DAUMfMJTQ58tM2E6sqDrPk5nXDNn",
  "key29": "4eaoxzGkPCqgouHc8YdPrwda6ZjiKMu64r7d7oQWyUxoRFFDnDG2Uc4bDM69z1fDfzqHQ8mTTWnKbvYezSdUuPfP",
  "key30": "5ohXpqkQZ6RPpbBLzoA6Q4obdG1r2yv1xe8JTw8wjScMq97FUXCvRS9XNiQSbtPwor4RYXKtkcXgcti8mvM76s6w",
  "key31": "XnkzxurRj4qW2UHzb1o8PKipvJtdEF7ikJEKVDcHVCf2L444L5p6VHDF75W6m9dSLewjViriYrZC4LRPEqKwNJ4",
  "key32": "4s74EtKJFzhoJySXGs9aqqppuEsoZf2gqXkMNZmAFYS7AUA9bPZMEG5SLA3GCCXHeoWved2Hzx6FQW1eEUqgWDmP",
  "key33": "cTQ8qZ89qSyX6YSWHcf6PSnoL1SoqMbhzuuwnjSTQYqqa1SwD9UPsopZXRoaUJ6VJf6ib6bUm6xqECzQqGabHEW",
  "key34": "4fPHSkr9FfruWbYePQGN5WJ9v5uuhyVH5Ly3QD34YrracT3BeryaWuqPYqbDCUCALjek9ff9Z26UmReD76c2DcNR",
  "key35": "2aQpWWopYD2PuiVRTPXXqEhRZTHy7fQ5EQx5AngDQ7eQJznY7tp4ZUeMrQGQeLkrf7QSqJAUsq5uNLaPURFG5M4v",
  "key36": "4jfdKGKsxKnMteWkcvaCdNXPoQTY5YNTRCM6ArwKoFECrsftd4dSr9W5znEssQkCF7fgfwGGCMKSEh9pkC6FNPFw",
  "key37": "21orK84urPNuZ9dmMy3CjN8yLMKj1QhqugCuVw2a1afyi5q3tbVZ2m3F7qorLep2Tqkn3DL5eDCFXEBJv2joxxu7"
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
