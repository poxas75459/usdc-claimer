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
    "jzNbKc7AhPNdfxzc4e3zCqvdB1fBCxhZ1JL7kehk5SULm65oKtuf5R1NhybRxSk73puC2kBCnjckVETRheLM9i8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44WLAy6Ybw3EcRdRrvqBzTnSseSRC1TAXXmmA8zFp3TPVsgNdo52kY8HxKjobNHeRTU22s1m5HyTR99yF7F5Fz7",
  "key1": "3ePjJc7rP2bQKHojjon5Z1M6xRLboj4EWrMTucpaSCcthYe5hh6ZUT6wwnj22HRjxGw4HXJRPLYMn85hTtKczLPM",
  "key2": "yYwsZh6miC66zXxCtYWxTHxNi9RscEQD1KWz8TFEoias4AL4dvpYmdqD88tQSHeZXXPaV2HMnnJXAz6M5PNfBmv",
  "key3": "312N9NLFURMrNfvRCnMK8X3BkGbURFaCf3Q6szn1msJK65bq5Xg5h1a28YZEc9qaDmaPeeZDRXp96vfSpvgzwVTf",
  "key4": "2orsyWVzi3yYtFnWwZd7Pk1GfbWZH5taPdeE8L8pPcfcNvB8749BU2HbyyebGxg78sZQWqe7RMMicaFJL62xrGGP",
  "key5": "2G3PYmzhUhyF9cLT9gQ5MkQy5ETTHXNh2vU7hV2TW4wDQeiDUjTBZweu5fAS4uyy2xShSKyQY5Ex4uavW7c7qba5",
  "key6": "5YK8kM2AW6cYDddRuKEWhx8YxGrySWhcFTrYrLotux6tkYxvya2XfmQZDAaahu7Ghh3nb8mQfYqgVgnDpHNCZqtc",
  "key7": "5Vqn4sg7WKscwYGt527Cg6y6jyhWJwTwgHCm4ztjywP91qHisWLikmVTHEyARZeNTiL4SHuxPCpkRKpv5XewcxpK",
  "key8": "3eoaXBLRvUfPXJ2K9kccfD2vuLJgvHGP2n2gmY5hFJWwmE2xYhCFpWWYu5invs4wJBZtpcS4kZ9dYTpAR9Q8Egpv",
  "key9": "5YZgiByM2eX5mFoUpCZAhvMQXmHcMNeWNvu8ACc58XUX83v5iVaPbwk9Wx9AkyWx2mQb4Ftg5JvBaiVLNCQ1RDAe",
  "key10": "2uhLcaTWYJ5YzCxWtvrwtvvBfyrteb19ZzGXkmudAuLkFyPcvKG1cjzgwg6SpHAL42dPuGN3PTDhNBknGYdKq9XJ",
  "key11": "5MWxk1xcT6dEg2AmrvBtrKTtE7AS6Ma7BQcuUbb58KgDQP3afhLxxunvtWUdtZ4QkBL6smzydFWSrrHEC25ACrbY",
  "key12": "4ZCVccXPNpFn1HqTyVNr8DX25t6Jmh56zBKgCQPc6nzfb84Z4zqLmDQ9ptnFUUBUQZ2frEJY7snjbo3psDHqQy2Q",
  "key13": "4QRnSqnm2u6bN5nkpBFAgSUTPz7qRXNkcWUhe35rSSNXEhryNaWMMZ1LbuTdEoAVJ7LtTS5FtsKohYLdFAvWDwR2",
  "key14": "2e1TfuquZAPFcTuD2oJUoBgKE65MssoFxmT26A9jmdztcUmNc1uM9weEU9MSFhZcL6zNHUEHms5WPQapdowYfKgU",
  "key15": "4BcZhegKDZ6F1nv2Uz6DvNYfXS5XTuHseCDe1AQqLnHEMp4ZjfBkLBvg9hyTjxFxdkAEr1MVpEu1uUmB4J1Q6QaZ",
  "key16": "2eAgviuWKkUn1ca46b1kD9kLP6CV4RxrTpq4GHGiFPHbACvzQzH9PhWkdUecuYGGasB4YVxTqrZvxXfVvX5aJXPQ",
  "key17": "4WwyiPyjVBWTWWwejd4KpNSXrqyTSHQibCMwGG6VuitUVKftgN1951vNiHoLMBdUXjTixYDmgn4uppHzUnX9sBMk",
  "key18": "4ZdJEVjqFL4FEyAADXcEJd5MdTRmgLgJFPXoBSBufhc3PASVFPT17R6WL3jdPapJMycgrWnKVnva2BDgHyCcJvth",
  "key19": "5Fd1coYGZ26phu2chrhf6wszq2NvQNN6QVhdHQZKmKkU7dsmuhYQ2syzojxEuTKTSWwtsP1xQ9pyVq2iFzMXYtA7",
  "key20": "Am8UGiGdQUEgYuKB31ZCKGYfR44QpVA6CtVEbREkiHTTt3tSj523fMHTjsaxGg9dDfQoxAwjGdTaCguiUwkMjow",
  "key21": "4aZSFKQMGJyMwbov9CcxwGiqUXotvYGvXvPwsL3RicxTqBgJowe3iYeiLDoVm7gcMr4Qn7e2CofAZyPqdSd7Ywa4",
  "key22": "3hEZvgCD4zwXWpE8wYW5f4A4j1HdT3kavM6tJ5D4ry283fjmg1745X6mr6LWUVu9ZNXn4cXCLAMX3rtwnhQh1Acm",
  "key23": "5w7PwTjnSZ7zRaEcjjAVtN6YaeKjAiQLCJi1Y6dK4Y8CteQbZd8VHAjtETa7foupfsSk915aNB8pQ8fmQs1pLNAD",
  "key24": "5Qm2y3ZVqJ5LLuppJV1641czszdcMKwp1bAmkvaHAD2puiczCDFtXMuEmreanDL5Va3X5t7nxDVEufkNVXBhPb6S",
  "key25": "29iyw4bDH29Z3GeFfJm33CGgqdZQa2hSHXYPWHx2Lp8WKHJprBCHzCTP3h2DHvqPAx5umXGaFgEzsmhwfrt7DE2G",
  "key26": "2zkXEDycyiSdse2WwUPjiqnkpGSjb4ifz5LsLfeEtKVEUeoyXt5PWDsoFe5YyM7b3N1DAWNUPp6xdPqe6j7F3nbw",
  "key27": "2xX3ffB2Pz8S4gADvJDUW8vagkwhEZgwD7idoC4CZzZX3TTRgJEf8WmgVGqDLciDaBRKsiGewHq36CARjR9isbrB",
  "key28": "4wLeKEhpUhZ5kJkUm1Y6kpsbXZN9SUEoZAKLnofEnr3SBn8obf7izJMeCiByXcdjva24AxQbpHvxJAE1EFKvZsYe",
  "key29": "623E4sbZ1E8QjKp452QrZ8eJf83uGBC33YhV4DQQ46B8gEqUpZYywuG7MUVkWqGbvisQ7aNCpNWsxZYFyYRqp7kt",
  "key30": "29Ywe2bqNFbjZmhiRSaNFunrUxZ78nfVkPhiMfFjCbcpnn1zQjNYYBFUtBcqNocYiP2h9nb35ACmXXjgr7fL8sis",
  "key31": "2rKF46yxWcx2srqkwUrLKpMyTJxJZeDKUddd4pysTS33LGaJA675yT9v75nMFSMdCowQQcnn8uv3gfqBB1dLCaMi",
  "key32": "38kYpsbwULcqY16YPK1nQqkmipq5PV2qRJqtuEjzayaJcwKESS5vVKwwusYyZFBVTHL3D2NBaNyUnTNsjSp8amVU",
  "key33": "3RPLB1T5Yp6843tdbSUgLUujQaxx8hjVPGDKTadSPBhm93GbT8zoF7zSq5owKqfNdq9HJAjQqutvKZKTpafu6jQx",
  "key34": "TEjDyqW2buvAScJd2wSE2ttC6f28kJT9GV5Qnod2qgGQSqXgJS5oXhftiWcyEcBW34LTDcsYQvVtapEhQSu1gKA",
  "key35": "7PL7QK8WWMyYy2gzBPYcuynTRg3XoDEBQBk8FbTCiYwaP5orLRcGSq2oWo7JMsxRFtwM2UEM8EF15Ved6bcsMgn",
  "key36": "WuvWE18NKJibb2ekGGL9AuD2LgrD9yKHQRufDrbEdpaEeDaF1SAoDNS9b24gUnMx7oZ1BUnHv9UuX7Uap9zNVfm"
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
