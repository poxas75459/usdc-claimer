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
    "4hY2zecgY2G85PhzvKf8VoVEumRUZQ5taGPyzhbCWcMin14jcEcHsLPoxDsFXXd95VnU29Yoi9ez9i2AyH4cL4Xs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "238FdgpUu4uEggcdFyQUWCLkq6Uo81qgn4WvWRHRPEp8HVpPCEYm7gfTxvwQv5KkL8Fcnne36LMT4wmnKH9cw153",
  "key1": "4pVQqf3JAMUYYPHHcJVoMkPqzTP7cnDVGqefWWufWN1QfFvNM7pBTVwZ8ouGkrokNzqVqtHjPampmqfGwDMR6E2N",
  "key2": "4WKGsjHtDuhg7Li5wxmWJRTSCmn6KAgY7NSgUX62bvpjUHAwZCrBv5T7UuE2vys53SoyMFw5nBdFYbdBAAtxmzkk",
  "key3": "35rg63brwLBCfPqGRqGjnRo2XdWz33a6jbaKD9Gy2ojwvK7j9bsdgK6JHP13zuaKnhCnFbLz6xWZnfTjUjG9RsCD",
  "key4": "2q8RFsjz72gpdRpBa1UNKGNTdbyeXQqKxT78L8AJCVtCsMQ1UNVEyyAedCrVmMcgdWXbhWzkZ64CzN4FWRAiEuW7",
  "key5": "oVdSMHPps46pA215isGFhaFozMpiLiKJzmPHJ17drnGSmBxPA6bUXzyRfTMCPiXDfHBuvN76NEcFHkNZq7fE2Vo",
  "key6": "2ZMynJfyxaPqe2BKwP23BvVAMqCHpPyzizzgAZyhLJrxw1Zem5f3MZxeVaxYb2ULHUGSFanTS5ML2Kd5QdHBU5mZ",
  "key7": "5gUi5VynqCSvZjtJ5cZ5t22KqgovW8Ck6K88qFKHSVnnv1v4DGJeZcsoqihMvJTs4cqPa7RqFB5dnP8LNKvrYx74",
  "key8": "8dzU9iR81xYnRRXx9gU4F1BUn8p5d6ARnrB2c2QJ2HkSvQwnQKsvMFz85ypPJYu1MzBED9xrGXdBMDdKAyu2PUP",
  "key9": "5CcbR66Gv9MfFAKtQn5pGEq4CpmuXvYucxAwAv5zgHPdfWfpnPSKCgZpMSatEL1i8z2CaZUttos7dwV8pWuMGsN2",
  "key10": "3W1He7H8jjqZy1Z2XKtf49H5zDNAYca9Z6Yn2Dgv9qVZsrJLZ4hizL4YCHPxGb5iJk2r2oEP7t3L97zNHNTMCnk9",
  "key11": "kMEvguh6HY8QsDS2U2roLxeSchSqGmktEPJhjpM3MDSN3i1xYQrJq4c7mWfJFdLEWKSJQbLbkPsan4dH56YR4gd",
  "key12": "3G18QWi6kRSwgjuRR3ZcRVE7LdDBa4buktk7rRqyJ6dsvQ1uoVbyZ5mws7KDKz1bCA45WKecfZEKQLSxY9EhU3s2",
  "key13": "3zFHsJDtCwJPzgfP7qmGinHSn1Q7G6BQYtad36nxy7Aq9zoWhBgfwsiMo8uapCyCzFrYhbUhtCWS6PZGmQFpg1ZE",
  "key14": "4Yos2moQBzZ5GU9dYZotuDCpqPzGSXigst7B16GUKT45Suvf1S1yoGYnvxDATvwEEFNzN1dpXe2mdGQaYkFZqejP",
  "key15": "PFd4Do2WWfuS3zB6oUquUWMonsEqY46pRrNMKMuCtfmdxGNYLtu1PrJ3gnBXNZQuYovtVkEktFthvHwSf44RPjh",
  "key16": "3xJAF4JErqirJyZDgb9XLGxDsu83b1JzRTzorHSHuE3Exr8JyA9L4VPC2MPNUmcN1Gb31QEaz7U3khwHsc5RGq6W",
  "key17": "5zmetmgjTtAiJKrgbx2MzCH8nZLEYRgDmPbAP3v9TqkDMzekLPGCgAsjhwXw8PNA7Q5rHPqcis77jPasoyrdVMNf",
  "key18": "3a4Kg5gYFveaJHpuGLraSZJ3pjb2bPzFccGH8iZ6adtgCEdoQXRv6zdtF5jfTxhQE5skRQ1XW5SNP9RSAXqQjqN2",
  "key19": "35HGR8D6tPZrCWSWN12gLsGWLkCh481z1tVe5X1ysHsisj3LSVfuQxjEfUs1q2bXQwzd57gqYh3tABGt4JwJDqRW",
  "key20": "4vQ4Uc8ENB62n2Z5qGwpYxyndFiyAhTpatUnTQYhBa2NyNGDXLC7Eh8RgLdN1vMD57GPwFeVaJoEavvSoZh7YmKf",
  "key21": "4KhcWTDbQg61LWrki144WZ8s3wV4dav5LbgUvhDa3xQfRLnY6bonJNvDYid5pFRdvdk6s9FP3hj9o5pKMvzk4ybM",
  "key22": "21T4Yo6jk1rWPPZCyWoQvrVGYQw7VMMhDaLbMFHwT7qVUUvUiectMS6ojnxV9LFKvNmX8zmYa29dv158mAWJHoMv",
  "key23": "2MNoUNLUoYcuqJQNq5yT6UJC4xgWBQZWx3uywi9y3HozA5uhtJGFJUNBRNY6GoSDSapDEpTxtEFagtGQ5mHG2jdp",
  "key24": "2GXMCwzVJyZuUhWzFNm48TkRD58n5Q5xywuQhhV5Rc2x1GrUfwKTK9Bq2KgVURmrPe7rmgqSPp1QwwcoCRDZQuZj",
  "key25": "5nA52RiBZwfMSSAn9z48X5HDSWXMi38cibDDXSi9erXgw6uooohfdLRoCyo3p8SGFkSbgaQqenSKPtcvqPrkUhch",
  "key26": "2JfgBQE1EBvSbBP9zDjJui1UZdyiaBthAuhV3hxdyxx7sR3xf5Lk9vzzEPGaC6yst2co8rqVCzhKLjbf4QZLvmYA",
  "key27": "5jXsoAz1N9aF7ioLaPB9gTeoJGWLkWvrAjqGn3Edzciwf32VmFKiWzRjBDqZ2GJfKa24DoEz5xWfQj9iSxdYA9jF",
  "key28": "a2BvmbpG9Zq3gs4hCJ3zMrZd7PC8cimN3XMkQuo3i5Nr3iAR4vZEJwQdEbRfepL5ALyWnqcjNnweBC8uUVfXSQJ",
  "key29": "TSkk7CKEGr3aaWJqMkcT1M7zShWBTFUBgQZRdw7Cc8HAFEgx2ToSCY1CjaGHy1VLkGHrxozV6YTd2X4oMnVSKX7",
  "key30": "4sFCzTySGxrN4ZDAdhR2R3YW9nY1iAhSHjdviDC3sULjKXXswGfX8AJnT13hmDqnegjVdpZSNmHJnJGfzgRdFceD",
  "key31": "5iAzi8eeKUgiL2huYSyBx2WLGTgBGUQaYFbCQWhnCwkMtBiqr7sCM1tWsK44uzACno9v1BVr2hFngUQZQGfWApve"
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
