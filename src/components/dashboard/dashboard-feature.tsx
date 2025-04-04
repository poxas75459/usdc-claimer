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
    "2J8QZJrsxAVQuDBpHiRBUYrvwqD7y2pUZsJMo3VjsPDwaYL6sChW9BcsCzt9BPEb2rJRJdpTi5mhxPeD6PW6GTFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5754BNT4EXuySa149Rq7hkD42AdPQK7XAv2fSgGWpXdeTCZCZaE5EZ5emKNCMfqoAUnpy6AzujArsNFAMC4sMRsJ",
  "key1": "5VpzVmugrN3Me7dGQefMUF6LqcvBy5nSuTBfaL1YNPkdyYteecA4kkASyWhR3T8tEVWPvzaqUtCUzgwEJvHSaH1K",
  "key2": "4jQnZtZL66a4WwgfT4QzFagMWWu17iwG67zm6VYkGEapVuuN5vU5MtXsy83GTxJAeZGj7Cm5BqooHYtZiPaRXb6N",
  "key3": "5HZ6q79PL1NZsRFh7GPD5385neALivmFqzJ6yy7p7em7aRJrXR9So8NxF4Z5qVKtHYiEF6RHGD4hS8N96oYRAyKw",
  "key4": "3dE1mio3adCBMfEK8cDM42DTmV6UdjCDHUfXamMGuYpVcg2Q6ZKkgJMFpnVpqpnMA6FE7hMJbPMzJ9uJi1gkEWmd",
  "key5": "27iWzVsFTo99QEzGVSuKB3hv9W4uYozvmV7HL5ckfHJkp74Yt1dib4V7nEo64io42s6AGtB74BZKHJBSeCFiUnQX",
  "key6": "5eDgwpxWTWW7BvxHBiBCGir2EwRTq6gq7jwStcYgcR2YXm37KdfuGiE7HybY1kWkhhHMXu4jMDeJgGbUhKUy4T89",
  "key7": "4Zhyi1zWjr7EwhwX4wdcQRRkdUJptvNbK1R82UG5bsxZFLujEQ3cgq3JJvmqDTmEvUuBSZuJK3hWGsEWnT677vP1",
  "key8": "4VWvbYseeKb1M51XzHGsqc1MuBgq7WoHFFmjscXXme2g81xDowBaiFhmoi6VUdivtDfpAjfCF5fP9x21gZNE9gaN",
  "key9": "5TXLh46NptAH8mQgS57JfdyE6N5u2d4tra62HEHipsY6BataXqfCJDAMLdSdoiMeqinbZ9n7AGe3WsQUgKgtEBkp",
  "key10": "6C6o3TA4GZd7H2H7cXEx62AuwErn8jMhMkM7bqNcaLYBYYxUsThWBwV8qGccn3gA9m6go3gx1WvRDoyh2eMAti8",
  "key11": "4WG3cNJTmDgMS2NwkyM9j3W2uxBuaJGgV2aF5gAyNLj3vXdFNisYAgSTE9Uz2pxYw5y1PH3v9tMmWAuxLiApKtWJ",
  "key12": "cXppUtEL81hqEvZhxyz7qA2eVfxJEmcyWPyETwpek68f6jj697RaLFVtc7wU6NKWSDXjLC8KJ525AnvdeThnSvV",
  "key13": "3ynJN6Rt6ZtS5beXWnnvhP2d8iUwZ5JHgx2DSyqBtV4kYLQAeWLXYSTc6C9gK9xc3W2M6tDc5CztG3mJqwLrD2ft",
  "key14": "57sTirz3FcB1yFiEror7Uk2Dk2iUvtcYSdc7vw3nQCvD5F48M8MUHps6XNyYd53tVVVGEe4NGSvszAz8s7auWV59",
  "key15": "5CCNgp55mZAhTdJBPHr3GYFsBsWt9WrBjPwdTFrsDk3iz2TiBb7bTNqozCdwoJcAVF1sbAg6Sr3WkSj8mZ4eUowX",
  "key16": "xosjDDX7UetTKb9wXMePjMEMXdYgaLViDuAyW1Wc6uoMhK4yjjwup7qKqf3H6z1PiHEQDWF3QU9vSjsYkAUxFTL",
  "key17": "2x1MDuAs1GixpEEqH3eeaT4UvasbttCHmVT1RGKnew6o7ZMeqrMbpo4uJyPLfNctNHaCXuRQq3KGYkpn2kunQ6gi",
  "key18": "4b5MjFYdgFJc6g3N1pQParXN3QjAi9eRtTkWdCygGj8Qb1nWi2ddqYpEdLq3LK3QsNqJVYYw18bTHM4dq9SRZQsp",
  "key19": "3Wdn5v6vCRhmmH9e62ktD9teinvvaWT6oGwCykBagE1pd8L5Am8NrPNJz6s8ghjQHu3HTaXPPTNabbXWRW1hb8qn",
  "key20": "d6Gx2Cp21gQiREU7xqGd3a9eSUpdUw56Fgbmxp7MkxeriRNokA3EPfVR3FxoCqERwwnaxfsEoftCKgmcYp3txPh",
  "key21": "3BS8V92TAZdxAvyVgFyQqNsxH8PGDaaeas9TBjTtCMUkApJwyt2mALTi2hupELsDRmNCtCcLyvFrREJTK4rVLDUZ",
  "key22": "4Gtxg1ofYog2EkucsbXVeomGwupTcsk4oEw8cBqttVTkGfsnfsaWd22DdsF5mpzmDc7dnXqBrsoDjMuFkGiHGN1a",
  "key23": "3JCLgmThUryKMi8n2W8pWrcn2CmswggyrMRZMVrzN2SGbBGw9oRqXEHp1oTWA7Xmdcj7Sr1S9B6fYGWbcSD2t8ed",
  "key24": "2NwTDAWffQwuVgpMbyvkYhavHuFS6z2YaBKEyWp5tecHoW85pU7Ctr5HkEgvJ4sLvrCBmM2UoYG2YBBB9oE8EhSG",
  "key25": "2gz7sLjiKnpcB15sdCP9Dzsfecnm5YAAuPKGv8KzKXXqcHJRJXx9T2xrww19QKyKVYB773mJ49ANwVsaEvTKSeqV",
  "key26": "2z9Rtx5VU7usuRZgKWnEUQttpAKKY2DZPULQgzxfKjMkrbsK8dv7o3mywMC4nfKo3A4an5mhdgJKEvAWhTMQQoCx",
  "key27": "3yoM3JuWS6d4SsFYztCnkc9qL5CaAGZCZipzLQtENtoATFRGkWavm6jUmF533c5N8HuLdS2jGCaP26a7jPvxJ4uM",
  "key28": "2732XKH6ocgAE915AA88t6V1uRFT5HWAMursNZf2gDxt2UAMFNx7KasB5gJwbWYXVy8W9JqmjFU8CLSdtcyiY1hR"
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
