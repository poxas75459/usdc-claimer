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
    "29MBbDXZHzLKLN2ci9kZh2Vzsw4mb87XzrkAxRvwsfaPyvtmSLDQ45w1nFSwM4ZU5H7zdy9qdSC5QHMagTqjy77f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2giMj43Dq4698m8PLkkenMS8xB4kjjLwWsqGkhDWkXuV5bUTn48brhS59eyS6sEiKsCp46QcEN16Swpos4bB6QbU",
  "key1": "678oae4y5fJEu3SdT7mpivywoCRiqMeekcuTLD1WgCR9WQ9MKSdQg89QBm8S8LHhFVAiw16kUzjC7KZcKBzeAN85",
  "key2": "3EqU76nXW5arLMqr3nLsb98t3foxfRxhKcbynugNuUB5mnUvqYL6bdqFBvrCTBsthV4VNQBCh18987hkuW1HZEMP",
  "key3": "C3ZdMWZR6JigoyVegkWjh6szPBjjviPNJuDpcbHioBYWEWmoeKFa9JbfPWEjE1q27yd3GpgFgJffoVCtfQqfhKs",
  "key4": "496m3esKjvbJpEgB7w9uy8nzVaGneGnfskDHVEwiV9fD1WXa1H8bjsQ5iCStcW34ub1UpobfN5V4s5fWw1dtmCbr",
  "key5": "5GTS7EZNHvmj4ZCgCSP2wB84DsTchJ4QfHKCnGDDMXg5DWrs9aB3SkHCfrs5rUASJatdEatS4WfXQPxzEjeVnRJs",
  "key6": "2fgNS4pdt4Z5PT7PsHUtG7bvKXGm5o1d6n3EA7RoKVnwJFTEYQexPFtD11sqBu2JKebpJpitNnAvobr1W9oC79PR",
  "key7": "8JUQDYouUuAtfzmJQeL88m1YHi4UTXC59WbBVU1fym3zJ3Y5AHwtaPdBAijTaB8YvocDjwqE6kon8yJuckeZuQ5",
  "key8": "4s3UQFRKEhkxyy9aNesziL16BiHzvvD3rAHRDf4kHFuwQHQSoJPr3js5KSrdJaDoLTsXw1tZBzwwZD8LFPDfBZbi",
  "key9": "4MJtP6NjkfcsAwvLtQBsZurqo7JrDbVA2hy1QmhYTeRmgtffWSRKKtpydyj2cbx186JCEyhfaBgykWtsssAhQHF5",
  "key10": "a4wfhSZft1p3DaRoHfWEpiy2JgqJgEUwX9tN75UydX84U9Stg7JhCuzmjjmA7ppKm9WSzyoHnE9inmmWwPcB4x3",
  "key11": "mpzfjGWDgr5Z4GgLi3gRLs1m9NZ1iJ4QR7W9VRVF9UJhSQLJmAQNnAyMJ76h1Npqxx3WFeTSa3iTSF5HZ2pccYY",
  "key12": "3NBdCio6SYuV5Jn9gTzuXpT78jpsmut4CwdpKhdAB6ZFuVjEXcDEJPrLKcNNvphcK5av96wr3KASNtx93eF8uqMR",
  "key13": "ccap87iZjgwzEs9x46i2rnGb8vuzNpR1MbPgTNXyANWVmkpk8sEJu2NdN9bopztHK3HFYpUe2KQZ2vPoJ5wsJKM",
  "key14": "5a916bkBJeE5ZwXLdDAJbgiUzPWkorBrxA5LLdUvapkiG6fiY1YzFazWGJpbz6QKKtJvXUiSRDgyCf2ZY2fhswWf",
  "key15": "3Q2foZX2K9Fs4hr1oxbuBJofU1AEXs5Cko7Ksm758xUKH8d7hQDnJ2FZWj2AGGQxJvpcdwMhv1XnNhy1yKCC7aDZ",
  "key16": "6Be7Qkcx19REEnvXt2tfDAKZNvTp23qeEzxWvzqkJdQiwTzwzyrTutpGYsSmCgWvrttEArnwd39XmTGA3rvAqK6",
  "key17": "2cH9ManiRfg2iKFqQssWvjdvWJJFvn5q8xa2njxedd5Ru7cpBnkcyQRDD2xSFbWUQnhm1Yi3zs2sBmfxJiayku8s",
  "key18": "5ubtj5nBWvWtsyquQhqvoVxdUXnLgMfd8CPbDfENZFAGSXoPEoxwGAfuT5FZJ2h7Jd9mXx5e4c6xkxVngajdzkEj",
  "key19": "4uD29rsiMx3uCTcPUzYKLnR3UikSedKsorR76iGGZAPmzsHQR48kEKVX29DFJhpYdbUbxDrfvo4Zv843oRsUnPwu",
  "key20": "5xP7C4kbV7LGeyuPc5meGWQ6V9YvwM8chdEv4x2c6E3fFqMFmirp1NLAZuRMVLFrAJarCDjBrFGjD3mzf4NS4vea",
  "key21": "5geCcKg6iQoywm8BV6vg45aw8ZL2oMqxFywvgPKemUBBLxwN7eFvSffrJhx7EeNc75vVBkNmJLSoo66VMihi626p",
  "key22": "287vgswuEu3QSE6Jz6pNrTQzKxoTgXuvNXiLmb6imvnVGy7qmM9buBWeovSMKLmmyykmiSQVamHnHsoV4KEPkjE9",
  "key23": "3JtNY2RSLDvE2zBQQbwHsb7E2PBgsVVH1fkg4pKLKnNV2PkwSd2Q2BQ9CQe55tmiA344KPs4aEc7oAuYSCcocuzb",
  "key24": "3p1b5uRSffWNLnLk14nvFMRoP2VqJLAQ8tNbk1LmoQs1EBMvUkxpdpHSsGXKPKtd6iYwfvaxtn5dp7cp21JqdMAi",
  "key25": "5kuPD88TuwMwXzDDHB36A2tLiyddCQBZVQUB6JSQGX3CMnRVYXErXAGsMcy1jCGXgw7pTT25k3jtmiDipxxT7mRS",
  "key26": "5psAkJYJSPxiNwp8fiYgp7twTprAqzu3VzMKahxLjj61FguHidKuSHPRMUj8W7t8KS96WpqL7vhWovzkL94yDKyp",
  "key27": "BTygYz1bpq1qQSgaie4piUkYhT7bi3XmMLEZvKw7CdctjnYYHkNiPx5er93vSjEmGzUeBApDXWe9bYDuFLJDL3i",
  "key28": "51xP4nm5ZjWAaqHYWunPQU9gr1uSo43wBm5i7VArsvixV6gv9L6QgjRz15P9ESMPGwJKsJTw6SiAvp1KxYLJodZB"
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
