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
    "4zpKrs8LFzRFQVHAK89WGkzuQ51XEkKTHjvyhmbwpFp4cWZSKF4BegjrjtkPrczNKGHr5W1Tp9fgCKAevyw3mdGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jppxv1J6EASNrUMUx1zVGKejzuXHfZDU8FynBi1BkApGZL4vDeqFjEHx6XoU3v5B1Yi5Uwq8VfPAdWGUfsTKWH1",
  "key1": "4Va1tAN1UTcJ7ivy5m1eTCi8RVR4HdmmEKXi4YYzPbDJq79mBUukn7zoWZUT7kXCjGneY4kM7hr5wGauD4MZn5Mn",
  "key2": "ywYtpKPP49nDg7KaJBcya8BsZ5QEdxq46kCibRaqsbWnJbG5kYSPM3t4rACP5dLKUttjM3zh77STEzSCj3mggjs",
  "key3": "4DrxAf3LjTf4jWDbN9DoBTUVJygcmgZVtNMEfyAKTMgnJXXYqVTXELkiCRVreY17xDoSXsTxRDkmsMDJRyusY5KM",
  "key4": "4w89rzwGQiTz6BLGq4Fxp6ejF6UaEuLsE3iLTwwYzXCDVsLsuG5ShugX8SsMXALinq2Ke1ExeueLkcQ9PsBSXpRe",
  "key5": "3JZiCb5uYb9u3kXCDZ9GZJLZ1JZsT4h4D9XXBu1pnzepPU9xroinRFj3iHoJMVmLtFCgcUzoVr6tUa1YayFSgYE3",
  "key6": "2dnd5pACq1Gvn5jQ8fFvE1zzWuY4rqVHVGWa4yQrSwxhmDZwVuZGy4fsTSRtxuAJ98BYvqBn7VtWPXzbHuw54tkR",
  "key7": "2YCm4wZj85qH31dCM1D4H49aDKg1sjhojAcoRR72X2461J1pL5Baos1dJMV4QkxxhVhtWNUEpauujvNKnhkzG5BS",
  "key8": "Dj5cwXUvq7hdrEjTUDBNQQXxpsjveMkmHg2aSBcTPX6vwe8checbXtnnwPkahFwyc1jxX4zjjB4wQeqBy3Yw29Q",
  "key9": "sjxBkxY5nTxYfRa3oSASeiEKwFmML34K3vcqZeReRrEzvd3gGwt95ZKL76XK98i1LzGEx5XmKxpc4H82DTRtm4t",
  "key10": "2uxaQBUVsv6csz5NfcEhmJUbsZcXmWxBGkfSnbpLgg6sGZW5879P1vqHRxze2Fj35Z7bqXq9ACqRK9iKm1vPKi7y",
  "key11": "2YJR9TVWHjKpX5UWWsWSmZQYsAFs6tXmtJHcMmpLTW5KYirj4diWa6PsWz3KzvkoWoZEeEyEnt3j5p9PwMNQrEGh",
  "key12": "3ue8Tno1waUpfTcsFr4y78B2giNcartLPZr6RrrkVURe2YNivMpQHWZ1pUXvgsRjLV44X46i8j1sywEtBXx8UuoZ",
  "key13": "3Y4JCAwMdNy6rW9uxMNmWev6sY1PJTWHDdA3TMVbpNwRrMTVtCM5FXFVHLJ6hmncQFxm61hCGv2Suhkh1eKVvVbR",
  "key14": "5iSAgwzw393SeERZZYXKjeTHUJE3tRngHXiuRZFVC3fWaUuqksgEB4duFxoYcHKwxGbVkFDZLoq8tLqWF2chphJL",
  "key15": "64Km5dpTpNVtvADGqyjZtcxKZuGJuT8YUEPvD6bndUa5YJ7qeQUFoUg2AtveBvfzHTxWCEC8RZgCZAPgttnppGbt",
  "key16": "5R7QCsWPWqEb4Mqt5BjugQTgJCobMFyxDXbrKBEcsaeXL4zN1AstmN8CkN8Nw7yCKM8gKN5KP7LGGKqTefSdidCR",
  "key17": "2nDz3WDebtvykLzBTXyJyusFU4a8fsethK1vUHHKm6aGMAEHsWZ6SYMD4ee9eTBm8CZbhyK9mLaeenqJvgCUzKTU",
  "key18": "44tJZmdpWuQuoZP1XoX4NpedeQe1vB8h891dtcKLHbCJx8SbNnVSnzgMuMajqsZuEFyaDgrbviCijdbG5s3p91qv",
  "key19": "31RabXgNKa2TkbBHHDEszYS6mt1cs7mrLkaYDZPuaDNN1vd9uJQFdfdgqGzDVCmwoa3gWZS8gAtPuztSgRQboH7u",
  "key20": "2RBT4VdpeDwGvPpo45pRudiJYRCNuM42aUu6ExBZgX9wxGYetWgfbrtAHA51dAPSmBGeDABL3PEGAnafawXSC94d",
  "key21": "EGHSi1UbUUmBimiKA8crDJccgeR4oSaPGfkAHZ9ukvfKxgk2k8jCgNNMPbeW4EFkSZQvSiuaTwFpnCkxwAhcUMy",
  "key22": "4FgPxgjk8RF58Y72fwFsshtXe5fpBdybbij6aPmZac5ELDweuDPjRHm2GXZd25nv85MroobejXAsMb8AjnaS5434",
  "key23": "2dvo9C8qPJy5e3CLm87XuZ4Mf1LWQBKzV2Kd1gEryQbMLAW5Bxu2XtWyGpytRk4hCP6MgGXUBWHJ4qYppn2dLzse",
  "key24": "5sCq1p4YdZgSsDx2s93WSUYmoQFKcQEeCGiD1NN3SStwHvEibN5EwHJwCyqb71qNJdzEoNonHotRh6qLZ3o3LS5n",
  "key25": "etVyAY9eqyoi8qNavEuVQUp5mkgkrbAsFwzV9pwy838YWopwysULhCbzGgvBEkinQa3WqHGW5h1RDvCvU6qop7m",
  "key26": "5sy3J9UnjFSiGD789Vkp3PgN43L4X3xhvWfzarFtjtiKfKk8BX7XMB84DsPshNqBFGJAbubsztUUJamKsdDHM2Cu",
  "key27": "4hYVYR94f4E7deYKQsBQJNqAVRjNCANAkreQgRd7npC3NxkiSfVroASai6Sv53MpXUnX7r5qdwSGVwZs75APS4D5",
  "key28": "5e69uSitxLnkGcnHiobvCPRcd3wRG9YGd7R76gZtYiTf4rkikSpF3iuLreQBdYWRua3ghKtR1EwyjuPCQEAJwz2G",
  "key29": "5tEPE2zRTPcwjBRjEm49qPoFi1c8CSbZRRvJgqi2vbQPoaBpgXkkGZ24jaeaLUHgyjv31ThUmbmnuJi43QXtithv"
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
