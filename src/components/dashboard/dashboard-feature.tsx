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
    "3KqNgB5efXUhN1JMxJiteCpXS1Kpa3pjg1LrujqXPMST6Htx2B7ukRcK2kCJA44FzmNka6Ln1M7nWEJKDHT3G4vU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EAgKPCLcDZFEeaKZY7crcuUL1HR1sAc7AEedSCDuBmDE1Vcff1MkvyRRyEyeknwTfK8UjJM2FzzfwiKL6uNMiyN",
  "key1": "5dxeVHZGTxFonPyxHGxrzqu8WNoRWFPhAdNGKyg143GgstNEi9VRKeC1qUedyLvjTM1FGdNM8dd7T1TDg2hKURHy",
  "key2": "36y2KiDVmPCgj1GbyGXpnQqrUHicETF4W7WR9knBt7rmVWiK5EjYb19t2exdCZqXtuScYp1rkGxohdNHPadTemSk",
  "key3": "21rZEDcePkBQQvzurwRHQpMvMPnLa6UvVDxX7cybcPseEyww9gx2Pq6wh7GVcM2ED1FJaajgmNfax1eV6RsSgDUy",
  "key4": "5eXNTxSmhCCV9wjpqFMBywbAncxZpT9DhtXwiVapaMEqMi2nu4A3qCFHWM7v1GxnryR6SGkQ11E6izKm5spZFHKu",
  "key5": "oHPJpV9F56wz9C3gfkEeSDB19pfKAEvkcXQxUyh7ZQWNno8Sff8AfyWXxbGHJ2or5yea2HNZ8LrwWx6NZd99RFg",
  "key6": "2jXXXjxiyWCa3TNx8shGP6upR4SNGAwXiTCTaT9kRtpjQ6jjec3ZJzP1PfP5a57DEEUYbXcUQ1FuNCR4MzbmJDeC",
  "key7": "5yqFZKYMgmzV4iYpJdtHYX7NJP5zJFhvZJjuTqFqPrAqTybrefqnJHFgwBaGmugoCvQezGtRUvTKPURHK9EVTc3w",
  "key8": "xPLG8r1wNa2DcKyFpuzCGJEiksiymHiZB8h7cu5XGJtm3EWMi5Cpm54Sbt1b9mGM1A5meSesBj4HKkXnY27geTt",
  "key9": "3aNaKV92tqfxrJqyNmNzH1sya5aC8BE2t2cuxobeET5eLK5v1oa2kLfmxcaabQvD6qFwnuLrutfFDXjXUQGszFcC",
  "key10": "2v7MbJanUgckp7kb4pq8Sour4EypNikxJTjEewcYWvE8kR35fhde11quCQmfzLzZK7cxvJzkC36WzD1WU8cJpr5u",
  "key11": "4m7zqv2XATskGjNaNSpvxVdwuP3Bz7ND66eeQpTJ6DhZaR1AUHjB6iH7UwxJquD7ZeGMfjfmT6dfMdDozuoEi1tQ",
  "key12": "3kircg8WhR7kshzRFMjTXKxTTkSaXmmyJjjDX2nctY8KXXdKn799bdiULbidvevC5o2EeQxUURdyb2UpoJmPWrvi",
  "key13": "2k8beeDrZHbFQKtfXXz8Ksb3hF899yq7Bvt29jVGwqru1gHuoPs38NYsFu9PFXqxtmoFgapvXRvP91KTxZTqpQkg",
  "key14": "Dem6d4u1Dn2fLqNMK9sFjV2sRaKCHdGbwSKXaMNz76vSU4koJ3kUDvkMedH8b14QRXNbwdGgU4GJc5KWMnULBa5",
  "key15": "2feGAUe55e9jRqtJStHTq1x2YGyfBLu3QrXfnGczPKrnSRnRrV4Cu542ZMNf5YEZasN1BxGAtvRgJMZDV4YYWhHW",
  "key16": "LzAFE1Jo5165ReQShuLzhEwRXhCHz7tpaVjyXHPjzT4pn13qtAChKZXVxWmg9oRaBAJoXu4ZMU1ySaMEceMJ11h",
  "key17": "52kRhNxEo9ASzW7gbydi9Umi6FmZA8BWsUbnHhbh6oQigjVoXH9utJ4cBUFw9qkq3YtJyGLA7bXey8zK6KVuXvDX",
  "key18": "pKMTEw6FAoYbmba9GtsEwdikmfb3Sds8C1N9sboeG4WbkQ1fYFbitFm3ShrLrcN71U4oYbV4a8jihzBY9wu6JCQ",
  "key19": "5J3mTWEBwtmhBhM3W61adWwoNwfegChKx8xTiZQXDnNYQDpftpFySrb3hZMNH8zDwwxH8bVEy8bQuYR2xtEBpviF",
  "key20": "3G1MwdtWX3nj63XvmAAKyYQH98Y8N5z87gTGmVqnufWU1bueLZx3L8K2dP9CcpFBNH97EwvAkHF9mXeS74uno756",
  "key21": "QMBTJH6Zgz9W1j4unHz9NJB9jiTDVknp3b9gAq5Ki8t5VXJvfKCDQrDtmRshNYucrNqjDwgCwWeyByRBJjGnHqV",
  "key22": "3LpPQa89nHDku41AadjE41YLUEsqCcVTR1oPCsZfTp69qJTtPtEPH78rPZwrDuszpUhd3T22qwuWxwUMUSobiMrR",
  "key23": "29eCaH7eiUgBF7BdBTK3zLHaTGchs678VVoUKkoQ8fuYvBLQSvE4TZ5M6DUrMQxrNZ5ADuNbmWzvRBfbmikJSpXz",
  "key24": "51zoHwxLb4TUj6v34zjJMVpCDRWi2fZe4RbhXGJCRZn4K733ZJ2y1mZh4hP5TGLQj5nzU8oU1T2vMhA6cNqhGcsQ",
  "key25": "R4HcJbQoycmjEAGgsKXFnY7BnHDA3gcXtfqQD6hfELtmts7Lp3kQ8bV6yM7jm6Qg1c9G5pFUsw9eD5mJBdY2HzL",
  "key26": "4CxyrUtAcAhE6bS3yXpQ8TMPJUTTt238dhst4B21Ep59aBkBreB6dtLwa55fvZ3VS3LtL1WMZEZSYAAgNvHkPUW2",
  "key27": "4mEicspqghzwUrQuwzX5giMq6ZqxVAjUUoS1GQVw35SY62kfY7xhmu9r7fwv3M5FMCiW2c36nYFsfMbafS94DvyD",
  "key28": "3uYC9pknSrcQFeC9iXRoazVRASAYP4CatLdWGX3sTVLerRGymJAofKfd7aZQJvHqxpjpz4H2Cf2CkQxTxpxcsXG3",
  "key29": "yg3C27gqtXX3DPvtfiGAbDNe7A7wPFt3g3QkPJK2h6yiuJNLf2cZ8hvEqTue2snZFqPgr2MPfTsVPFn6rAwFr4Z",
  "key30": "GBKTEsrbbbRBHKJ3a4KDKumXLzmwoPEL99b5Uzc5LW9N7xnkur6rHnYNAjM8PBpWwNp9DTTsqGwE3bZwhyQDRtA",
  "key31": "4ut3uJVKzWfvVXFDAYz3QoRbULJpZxqNAa6qJzVsTorvzgMYSJvTTDBKWc3UH3xCB73AqFm5DX62dBGsAVZUtVoa"
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
