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
    "4P3gKq9CtJSarBLT4oj7Wpq1gNngNDELtjsYbybdVAHBKtDb6pXXjZsmHkB5sht8dKXd6MerJ84JYRv6LMTQSX1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iqWsS9i7gVKEqGwhm9dgK4oCApKmxrHeUt5dhYkhFQHkFfEMXxEC9DxQgpcWAgf1wi2AJeNpSFaEybwaXrQxuTy",
  "key1": "4aGByzjhShsoMuLfrb3znz8BWbHiBe8dGSao9r6ctSo9qcqD7aB4XtPL5Gv6JtxcYBsR6DVmyB6ERkVW4nYCXDDG",
  "key2": "4rB2YZEAgu4YBzRKhxvH3nosrT5e9XZ2EDffKqxJg5vMSJCXyLEY2UeEcQcg4pWRkLyu3WALPgHW36SS3sg9GKdc",
  "key3": "2AJEmrwr4GtcWrQpLVY6p8T9p2uXh4KVJ5Zrtc13oGhgB79HBZNvL7CKcqrtDCokNbTgg5J5XzZS5YENM5pBFQyr",
  "key4": "3BJd8Jojyc5LcPbhg4bXoupUFY2eWSDtPWMpq3GbFNPPstaiE49n2AnYABJLkxoSdWCwX5dd543GGFEZahzdd97y",
  "key5": "3ncdtP1oSWhkFbQghQsmqABRDEQB8yYqZunQozWRE2T5vafv8AipAsDqmpb4DHWAs24arSctucfrH76m5w9efbT1",
  "key6": "58iAcL1FVrJECWTAdYyj1mQdMoKX2Ju1qCEZW1dETVsHVLZR8kEZ667AtjRayhjxJQkdLQosEGzdVpeFmwzriyrh",
  "key7": "5n3mxgRUNzLADVFYf3k1PeSMgeEepDQBcERpofHGnT4v4MKSE2dVueJ27wz5LCmivMqTCzPBNAZwo3GQE8mituW1",
  "key8": "2pUDbCMPmpvefZQC9pEBVmbHyPpvaE8tNHMcKjzHXgwoThBwn3i5ibRQmhGrmoGNRMgxnYu9YrjiMXmvr1Q78QCN",
  "key9": "24KwNaoZBQR5GF5unXc1T16UF351BLVx8bcdhdBEE4t4vaFtMaMAG3maBFvmpRsisR1io51CgEhjdCMUaCGJs59W",
  "key10": "4D4q7E6XLLhjMwKQFYU5y9kUnkZ6dv3MH7Nixszm6UDxsBWf1uQxMy2s63LXrFA6VctZy6mem9wG9F9rcBBN58a5",
  "key11": "3sV19CfAFuJcmDrDRPMMHnxWSD1bqTC68ir1dqmkkedCA7jTPvscJVbHg1QNNkGmejXaD6LttHJLCQDiou4M46Bv",
  "key12": "2NiZH5pqrgsP1V6s3jKiNgW4aLYKU4DEQ1F55qRxfV3UUjbeWYZFacy1dRkg4nirT8agwA1ZG2U9g9Y9Fm9VTekm",
  "key13": "5G4D97DxVHRrgKiafZW8frtPzXEjG23RmwYZsjWq2UVRdssh6rQQBDhuhFpcunAMpXswE7C28sZfdwavNCAvKC3s",
  "key14": "4x541yHwYP8PR7F6xDWH1Vkjc53RHJJ1JZWuUGcHDKy9mzvDA4SYsE4mPTCfWhBLxpEdeeW1ERhfcH1QD3ena77Q",
  "key15": "nJhGWdGBYyXdCm9ZjTgBbbGt6NDAdHRUJddvMr8r2zJRycUHCnkkrFBMNAUwoTrMpkwKSHMMtZsnA8DbdESZrWS",
  "key16": "47696b3FVSgRt5FbkcyDkC2zdTX7gicEqUjfqCKDYUhKFdFwkm9cv5dGkBUxL693VWWfCPik7AwABWk3eA9GNonP",
  "key17": "3kBoaJJVLYhccTdC9MkCWWfzmWHtvto5UnLimzEyT2myJ7QSv7NZZyEKgJTuiGQEFVKKbVghPtTZ6osqXp6B5Fnj",
  "key18": "4XLBBbvqSHw8ivGzGunwFMEm1bs5im2214s4T3JMfG6JPhktpnqwoAoKk3eN5Cnhq8RRZV2aio9jQJbp9TqUYKht",
  "key19": "5ArLJ5oLdKCBZ8Me9BDP3kruJYJ8tWrGsgstNzqBExuBHVjPMNv3Y5YS5EzLnrEjCqRC9zeDDA6HgkAexWcYgohs",
  "key20": "6CVAueGuTfk5v32jkMLMyc1aup3Hscx3CUFsmNjqurWHgLYNhKAY8GtWUP8Y4VSERdReMmH2yG76fa49uWvmHcz",
  "key21": "4mo2vFS7c4nY4TufmgvkWbwzNWCzaQuieqK5ybDdna8G5BqkTmnKSRxufLAAAn7vkxox4RaVArdtK3zhetDFseGJ",
  "key22": "2U6raZkNJHi3LSW9UbJJsCPaSozHD6DKH8WiQA6LzMWyGuCzZWq7L6cAJJKfCtdYfKZi3P5Mv6Yi5kgPQk5JPway",
  "key23": "3Sa8Zp2Pfq1Trqs89KTJcRk8VHSuC7pKg4v18oGzRtdaSJbZUtysUTKyNCA3yPUNG6tad9DGt99phM24aaSMp8Ks",
  "key24": "2sH47XgsFtosqrS9tpCEiqBnmpTJJ69ajPDZAqJba1cUm2PYs7sngva6CoaZ5t1yLZb47QpdM3x7gyCk5ERvY7bm",
  "key25": "pNR9Zqe3jR3E1HdnNgM6TdaEw8dRtUAvSCfUQ9pMee82SLpgYL7MqMumARWHBGA12n5Jjtet5NB5atgzA7YrkHs",
  "key26": "sG2waAXLUtfS2DgPqYG9JdBSYePRZKt6RXvKYrPoFdYwidkA9ETVKgzF2VinJBqrKTTRZwFTFAFtV7nJZmc7BBX",
  "key27": "4ieZnKJgRXyUe3sfaxA5Hr8uaXMSiqueFXpwvq82LwaNd6sXLGgu7iF2pS6VwxRVhYrycHLHvN3VPgG2nUQevXXZ",
  "key28": "2fqZePmxtTkxmPcoPgNRnhPhwFuwLXSCfkevW41QbX3eG4yGxacC93vD2qZkKmuPkKg9w2mszvqeytn51eB8ZTgA",
  "key29": "3v2mi9Q7jqTqSwBtb4PfKDaSZBmjfBmx4U4H4Bf6k2KAYsrp34BXBGUb9H6vbC6WKqixxDUndV6UMAHzJwuVMegH",
  "key30": "3UNwaJQxKUYJwU8FyBRw6fFHk8TzLJKkprB7eWrUsZjtfTFDWHW3keZ4VMsgpqxntxHuwmC5YYRsQXnAZMxFm1Kk",
  "key31": "21UGK7eu42nBxBgVKSi4uuJsbCT4jgCQ7rETADdPrBcNmjFHacD9uW6fPiFvJAP23zF4mMZ7xAgP4RFYjik5tQ58",
  "key32": "4cCm2aNMqRqieQHLGujWMpsXYHeWittCHdCKn3oBHuYK2xzNYmkbYYiCP4p6fDUo6KLVyW9SCd8tQg7rzu2czBTA",
  "key33": "Wt6N2SAKhQEcQfRwHbsfAgZfEgxtPvLUfxbhfKREy3jeGag747Se9ehYVSE7WNkg2obug99zBDdPqNBFZcRq134",
  "key34": "Fa5iRwzawpbXSvgJJerk6ijudzTedskNgCwbMQp7UyoJWQpBzttPRa8KyUbCw2NMeK4v9PhbtFA99CfcCWUfUcC",
  "key35": "4PzHUTkMgBcyuMt75YRn3VENC7ysQjQKDBMeUQ72P67ypU5ntPKUfo9bKHLE5xR3eRqMYfegePDDiZBg4hbRyJYr",
  "key36": "2uXB79ztiftgsGf1bYas2JToEBt2skLYdENpZM9gNLdhBACWUmRwAHLLd1w9cYsmhCkzBhMWh69F6x57R4vzpCya",
  "key37": "4kXRaRj1VZ32CJQKG4wifQ162NcYqxJQThsDBqQAMkrmw3ogLJERL1yQif3ybs8z6eaewy8aDssfUomuhmno22Mq",
  "key38": "5BfSTKLsj9ipm4wCzkdZ2ng71nuTsyE7xCps5UqFZZf4ezeybHRs1NRhpdetfcCYqVQbBSBvpw1xXYxTckNtdi7Z",
  "key39": "4TXwihHu8rAuQZrPf2MBxEVzJdVank7xEah2qqJqoaDUWMoXFcp4jVgrrybikBPyUJDgf7Vbqzn7BMKvRcHBSEUf",
  "key40": "2v8SKffwevME1vFTfFR9Ka9sRu1B6Mb6VZTwzx16rJhy2QmUrayQHmCDqBZv2XkC1wE2kjADtFjfKuBynLZqsnpE",
  "key41": "KnaYmmumSwPxaXH1Naocti2rWSnK88iHWvtoSKbyjYq5MeJTaxAwd1UPjLPUx9kGW1pPCJKbhig9Vz6osToMHmH"
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
