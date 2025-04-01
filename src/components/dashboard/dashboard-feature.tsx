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
    "4Bh9StX2AxL9sWakRF7fronUjmXPKQq1pC66VKwpwrLWitPzfvBNWhu2PEJD4Vbt8M82KQLd7pHAh6wcLLnGbNir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xWVFfBWhi5bEXAXrBL7ToTWvhUpCA7QC4LG6NTib3tUPh2FaUNDg75NHkLE5E1pnbYgpWkSY9zSpN9gN18KoFXU",
  "key1": "4uoaht58rnbQvN7TKsaoyW2pUbyrvjNqFGT9dogUqog5JhJvrJXDrMaWB1ofKiqk7ZoNv1xnRMwh699iqGRCaR55",
  "key2": "3AskVVvzo3e4UiKrrZxT1psTpFcCNk8zFq8QfZfB2rWqamW6UpdUDAhP1akFsdnaMh88ARuDy7VfvZDNLfjQUYPk",
  "key3": "4FFLk9r5ngePGLbYTz6smGCE2x4i2zAHYZnrS89H7e8gHzzTsj3EKcamSArEWcotyqfbr41a6o1fLVmDWPZtoivf",
  "key4": "3GChTrAFhnsUTjHnvY959GhxYZX555muG7Z6sDcZBSdjiqQQH2KM3dnxiEUcTKkSDe8GmcTmbPEwsrtGnSpFg5vP",
  "key5": "3WGpMJGx1daFx7NXY6jqxtyjZWgKPjXvuNbVFWQ1fgUbsCzjXzxjtqjocCig7iNoedgQxwJMG1E9XJmmPH4SLBMm",
  "key6": "35Rq1pGXFT18bZxq5cyq97xR3PtRvyJJiR7vVjHLj9w2zdaTNGfoT3r5itA9NN6WbvBuRS8EB3eRiuPEqwPz3gew",
  "key7": "46jp5bHCXoPdPkEhxrFaRu8ekQaZKW5sXWujoMyzPRPwg1qAy7ucUCmixibHV1ZNN9zYq2M68eY1MmhFo877eDGC",
  "key8": "3uACj5e7B3FQgborVZL2VeFUgCpS6Un3z5QNJmG8Z53pdBa2kJKFTUgnbNApSBk5KEgcuHxaxwpp6utUCepwcfDw",
  "key9": "3qXmyHQGJKsbCJ7BuGx38B9bTP9vL3K7ZqYufyLGPuDaVRRYiuy2C7nQTgZCjcHjR33Wg7veR599XypqqVDnPAVg",
  "key10": "5qiYuV1tVDQu5u7NZTq31hgWUY9zR7pADAeCpcEbpcbwSE2cHt1sGW5XpjbwWnBX66CqcNEwjHLSN6muPuVJsMQM",
  "key11": "2sbMdWhrKbnoRGy8uVfJU5z7Z37QKeQSJwEuM8Vy4VheBWrCq7qiUBq8Cu68FMYK2FwMyytpawbddtY76QDc7ovG",
  "key12": "3yD9pHYHGeijuLGanDkgxvdCbn9CtFPt9ujYZ5hFf6yRnK8aza9sFe7mbu7JJuQnj9aWGp7oEoUHZENGFLk88J9q",
  "key13": "5bQxWr6aekxzjdpghUJfxYnpTQbYDZw1A9raV5VE666BiogCSNn5q3ZQbrd8jGN9xCFgf28ALURq8GZ2UMgfsQrC",
  "key14": "WxTrmg4wJR9kzkAcBj1wJhqFNDfbZK6PUwqAn6kRbra8KgkiKPHaFw7YGChPUCYCr2RtXB6qNH3QPWMren9zzYR",
  "key15": "FF4fyqGhzCrYNBF8AbjTkX4VHWY95W935uCsjQaGhofRadXMW9V7inFtbPZ8Fcu3PVB64tH65kXPkuRK7J34So7",
  "key16": "AMzDUjAUeTbaJ3HnwUZNwc4skHYsjpmFEmqPnrwFpvKm2ez4Y7GTYJZuP4zFqL1z6mByfDRFxdPrYwhPrQeTGBc",
  "key17": "dSrgsMWXkGbMTq7aA8EPRUqe3qL2WLieHx8rKeLoRzu4KF9jPTSTY2kCt2KvwHYKNrkeHwstQvfHZj52k2MvnZu",
  "key18": "28QPpiDFQUxUYJjAaQX8X9EFmRcxEpwenJvzUy45EASCXLBCAMzP1iGsiPxx79KqXkSom56UuGspijqZd2GVjpYe",
  "key19": "VD6SNAEbjWzLurqfJy4sz5pDrwh16hsckFiamTvxnP1isPbJ6otr6AG77vws82ZqePv8UmzXkeRe8rrs1wes9ce",
  "key20": "2RH7SBVYTqBKKzGndFuGguRD55c194LuGhNrrN7c37vBB1GPHu1g5Xfj56vNth83HcFF8A5K5efM6aRkzFsps4a",
  "key21": "2oWrtY6PM1S9bXNv97xCE2RXhEmBqRvg12ipBQNPFkW1D578tP5ZUUpECeLyqvZCBeJ7NqTDpPjRi14XQ5SYdaLL",
  "key22": "2D5q2LDvz7kZWpLQkTJzxodtMUF4FXHv1z9sRFGuvphF3itbhA4vQkWTA7nmqGLTPZf8KpwqSEZ5abhn88y9xFFJ",
  "key23": "5aYvkNXbh8ip219pCdFa18tqDVH72aFpZEdHPsE6KuCti9YnFMhkuPcNSWURsPNDGKD8XqXxGr8gdNAUCEo6B3qH",
  "key24": "2xFp6gffFXpdsnhqi5uB95285wysNDrFgFLwJLmoWpe8RcpgtmXSFEFWGjskYBr9XX3NmxNz6YdkXP6QRsTf73DX",
  "key25": "GyUxSMjJd72s5jhYKkz4hgP6mvJnqkjPorLzB7RYSaXPYe6BRkbR2RfSUfDjiAts838rm1nxbVAqr3vDEJJEDnK",
  "key26": "BL7zYH99NwVvCo5UFiFcquuj2AabQVFTCStAaRxPNvbe7NmweMPhoMAuemowsVa6yx4xmYbjcgWcxcxyfzMxrqh",
  "key27": "4aYTTHCbPbXQ3ntzc1JMDGmfcf21VnHJWJUCsNBptsKnAVUWwEArvAX82p9hgEXtsZsRM1iupgrKpe7HAwS4E6EV",
  "key28": "2LeMJV4HTXasqHXYNBo8kato4Q9iJ38amT6RVxNmZx2ykZRk4max8XotAXEuXayjnGQ5LVyxpGMV66keTsmzVDFH",
  "key29": "4xNaXS38yeo99P5QqDs5bssAki5oKvNzdzTyVSAs8qwuvFMo9HQJ3F6XPkHqLhz1tvik8Jm8wSYiM5WUT7icr2nu",
  "key30": "3fP8wHcxR5jFSoeXbcLqWCaN1GNyxVh7micvEy2JCDKv8aXVYhvpkt2Wd2Jz27HTmDvQWwrz78TbN76os6MuitD9",
  "key31": "N2KW1mpw1BnMZJKo7PdLW3WPLi1d61R1pi9HHSSSS84RFVL7tnVJ4YF2d9n5S6U8on32DkwhfxGQu6qeKLwYw7c",
  "key32": "3jH5A59WwhTRzsbfBg17Kpxikvrx52R9sKQvxvub37it9XsvpCG26mCBTDumMk3SEdWjyTj2ArJwXg2oBnUBHmsZ",
  "key33": "8BwBhWR8k57dG3uQfvFRtyF6VFcTretbr7UZQznSLUXo4EkQh8keuDh14w2tokTTQuCmVTtjgV1rZV17DkKykJ6",
  "key34": "dr53nh8skLW8qk9tEx16KKZKQ4HbfW63NdZdmatnt1Tg6m1DyKgmYfdHGeSaPsWps3beY5CmAcFSSntu2JJts4E",
  "key35": "DRA3CsVvuvLhNqes7WBjnBigxF24kXr8hbcDmYNqRU3pMrqcVk4avE9j7kXcQ6bnH9VGK2iD2gscwAbT8ESSpDd",
  "key36": "3pra8EWypK5ooYsLVx2keQ5og1wcyctmS6myQtL4hWsABsNmPofCQJJjx51RFx8eQwz8T2jAnCmPgafVU1PHbGQ4",
  "key37": "64TLfUe1LnyD2pTf1Kw2LoCEsxXcU7MUxSpPudMX8EwT1uZ7M5TE3WZMdLGTehDjrrMBJk9n8waPBX6MmQSZGiJk",
  "key38": "61GomDPk3d1Nhsct2yX57EbGFNw4imw4Jdco4Vg5zakYr5t6x8KpQAmE2bvEwVuffKKZnJSUYtaB98aLEdfX3AX2",
  "key39": "65iqiWAx9HwGEVEr4GmBfZMdAn4kDKtFqgVLK4odnLWnYr8FGKJcx6yRzUxHr4XVPbTTx2uhNWkjPMDPvyPNjYnW"
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
