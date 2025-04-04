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
    "2zLwzHkzfb6pyhXiSFMqsfFiZS41iNGVVgBc3UVqc35xsPxCTJPB5yKnPCeGpxXCjFUtnkHo6erXiy47j4p4BSg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "om8Kox6NZ5Nfx18dqZAAQb35rMN6jxhKGpX7Vs87N8mcPWhCtSpqyRVPe647gCSq2FDDeh7E3Bn5bJJ9NLjBpVg",
  "key1": "5zCn7822y3SvAazsLWsPT3R8KVXrxVwxfM1rXocAptgnMvDdhK3YffwBs8jYT7qrAqaHScY8gQh7uHMJPe7eAuH1",
  "key2": "2Z3yn19TGsP64R3YpiV23sxAm9iwAVgdVG9JdmPhTwmDkWka341eVDnkDM2CECjpAWFdWXq1TpidZPH5mnMQX4kL",
  "key3": "4nXEP981hY48DmeQvYs3NNqz9Nw6j28kR2JFpVDMzvourj8A3qJ85ZCnciQLP5wBvmjtXWS24JAKWtjE8tPP359F",
  "key4": "3vKBf3QkXi7S48tZPAbS5NYknW1tp96bVKLiqBVrsvewF8SEy62W5X7apLwx6xaJUYJ8KVDDNznJYnYK5tDLfeAp",
  "key5": "83NcsX2nPKYNUhNq4uMqqz4LmBwaisQFGxVrB2Ndbsq4Y2Sc5DXQwaeQsbsmGrSNjf8YB1eGDUV19rcnqtp5qGV",
  "key6": "676Gn2Fu9SCXL5LheAo8Wb9ajZKPafnkHPhEAWfJbp2jYb7RET1au3bfK9rHbKSCcBsKmsfENfAzeVKgTxKSxD13",
  "key7": "2FMwJAJQLiwqo1jUjtWYmCxY9iuEKX6sWsXynK7Rp6hcgD5iCCc8wRuubank3ZhDqa9m9cLJrU9gWfhLrX65eusd",
  "key8": "3o8dYUo5ZxAXRtAtBw4WxbHF6vrwdcHGQg5HZ812CPFZggFBmFPVbGAUMMjfnFm6ZoBiFxMBUpBUKA5ZJkAE9ZQp",
  "key9": "WJpE5QmmRJ3fa3vKpHMyuqAGbdtAcYTaH1pWbk8VQfaWW1H4KhLJbahXfGR7CCksJMAmMyTx9mBRz9L2xDBXDon",
  "key10": "5dWAqPQXeyUiaaUQdtDx7it5ypCPkz1zPAFxpSfWorQXWEu4sXx2pbH1iiTGqkfPAE7fT6MNxtBmJ47NyH1eSDuV",
  "key11": "67Suu56nzEPZ1X7YRincU23jACfXMvoinGVNAkvmzt1Mj1GKsXotbqvV6JHEUpUb8i4FS3gyJP2tv1ggcyXDPevV",
  "key12": "2FskCpwCFamGn25VqsHw7HtYTTSnrF5ee45JJjPgfCDHAq9snuXJmr318gsZp3ueX3GQ7kZdLz4VL73j8uGQ53Zm",
  "key13": "5CgKX1K2Cg7dkMAJofYcLZnXE854MYZDYKoe3VoExU5e7xDC5v93zYQ2R67D7gNCopYFn1bPd5ZRPE5dr3sATbmi",
  "key14": "2cv7DHJyVbNeWxaa6X9ZgqRo5NNnRKJ3dazxQPbox5vbJxBuVGKThf6KbywhpPjENGUCgCnwAr9YeNw8EE2aTW9d",
  "key15": "57nSZB2n2NkrBvrRaWbXnMprrK4JFouoEeC6yXrW2fctpymzDW8gToUMT8RPpNuKr5ZGS2nP7TtzQk416ArCwxnm",
  "key16": "hzULQHnob3aWdRTfsdwPEzpH4FKAePnpsXqDxW4tSj84NyR5iFmtrFAhjXcQf1iP4wmev4rggFoizK521mjVZW6",
  "key17": "33hzn8DDpFD1Z3K9k79quwh36rSVVeLQ7YMgdidwupUcvN6FfNdPkJW3EgU71t5He9BbqKTPkaYjig8HDzB6Y1zM",
  "key18": "1NgduE3FnrETYrWPz1RtKAwQD7YkDjBTk6bhVkQidbsvoktQdFN84F9BdaTgptrtjxZoH5ByNbpBzorrWaE863C",
  "key19": "35BgwqbjzRan9pKDwARS2uWzeViNedYgSa7FgTj78N8iLc8GPtQYGB3mz8pv1EVP4Wt3Znpyti7PGF4jYtwnHeYv",
  "key20": "mK1m1Svy4BEJ9UuuhhBFRfAYAbbZGvCqCRQMCvNvxLS9TNBSJnz9EofmWRDQV4E3fM7dbWv5ARc1Qcw1YYAvgTZ",
  "key21": "5VhQiyDsA5CAPoV8SfXfo4Qm6bJGJXQgps7aK4umf6orRYcYzFNjb2Se8xeyETy1cfdqAtPr6R89Am5h6oeTUdsf",
  "key22": "2GMjFyz6LJPS3uo5kvTbcCVVc1SudQuPrxPfR2CpqMV7VWZZtbcGtJT1Rry4uCAvksATg7nZ9ezyLTSbBE8qGwqC",
  "key23": "4tNQYrF4D6sFY3E6LPNVajiySMTmybudsvFyQKUYQhgmfBfnbXrLY2gpLriv9x5a2ureSnF425CZh8ZB2Gm2QTee",
  "key24": "4AAZd48PJ39iRqrZeBi33c6TX5xUBWRtEM1L9c7zgViwPmFgoJDgju2oTidQjZn7KF9BnM3mAuuGRZGruh1HQUKj",
  "key25": "2E6bYyyWP1J9ee3iENLhQnJAhmG7YrfXQwFqY13CgoL3m9WC4h73V1ZYCTcyoRL5rGVt1GhKyESpNpJq5vZoTeMm",
  "key26": "5eVVgt2MJgytXjNnsVYakyveLHc2HgVyTdQsQQJdJ7vee7MWVLGpfXE3UgPHkzkB7T47LebJ7SsYnPKPWZXeabGg",
  "key27": "3cNH1W9K9vdAY7H51kjzhUKhrWSug3RLrg3XGJBdeXkbWpEPBiAKEgZrBtnfEFAdpecd8iTd1HTU5hyT6igc6sve",
  "key28": "2pXZESduCukLr2VVy2rutMtsKQRQLc7LBTn8NrGTbE5pTYU5xn8XpR8kG4dRpMPTjNQTzpmtUhwBZfH27SJ78Bc9",
  "key29": "5qgNQdPbXbdr9LdeijZbvgBsTjWQrXM63XNQiKZM2N6a3TA9NBXPSwogWrnxBUQgQdxXtwKUJ8vStpg35EzwGY5D",
  "key30": "45iSzTpecL16sJxb7gpjgKyaJPWkLZkZn7xySzN7WFbPPYVdHGcPZQ38n2qYajheYkYMyoChd47ret9iLuoKpQs5",
  "key31": "uuQEkM4U9UVv1yNwdX857hE3wuFfFhKeMRYNV91JKfE1EYLZ8EacgNc7pfoPJ8c16v9qKWCiP3N9pgmzwbGKgJF",
  "key32": "3oUvW7xm6iNzV5x7mKV2Yh1PkJaoE2cKKdygTfaPcHuxydeFqGiQjx9Cp7MH3c5x5kHwzvZbMTWU56MHQvVXVzrL",
  "key33": "2rAy7izfJk69MMPKK7E72w8Egy96FHJTQYZx1yU9x7UE8bLdVBpSreJLDiB5LcFDDM1GKGQcfbxbRg2vZkZhTNhr",
  "key34": "5HKYPL5fTs6VZ5PrWJLZDpttfLwjPerN9Hvg41Xr42CAygT85mXaFRdY2Xk96xGktTKjrW56B5e6dZC2Mg6eYPEw",
  "key35": "4xG9eAFngkjLMgQ17aadNsa7Ah5p2JHkfGkaHf7mouiV6bpUKjxoZA4rovpRYDgTzi3FBB3yBGGShskXZgVR67es"
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
