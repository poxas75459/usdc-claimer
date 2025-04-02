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
    "5zBvHAMtZWfUE8xALWvQU9EUyUmucEAqVtVvBQVZfRvNQ8gbCWLzCJJRhcpu9gCn8XCuNdNGs1zx4eqdQ8ThHd4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67iMrFgkavsiu3DTBYm6x66t2X2Y58jJBgajDT5JxtHLTveJp8jCZmf2AmSVVi3om24BMNm784hpVhfQMWh3PNP7",
  "key1": "8ivvvjUoPBTgU4THiGVVjyTVESMyg8Po29YpEejKn83koeYK2pATY6QmDPEYhNKpUdWzk6wYqhMMddXCVh1xnQn",
  "key2": "dCUbd4uRpB6ViAKXRgjD4MbMm9CxVEnjpLzWoY7wvMFJeEv9aHVPjb5hKw2EGQLWFJDBgcDfyoYcCqHAVT9UHTS",
  "key3": "2faG1wMFqsPHCAN5heaJyMR291n2J9mYPZ3zfwEwCQE9QHaz7QQz3UWALqLmmpLesQ8J8hZmbhgbLWk7eXTK3RAr",
  "key4": "2FvGxLn6AvPyTFiWwdNFDXWexcoczsHUYkGuWiKX2FZTnb72tcVa8DvErGFV2NfNyfRqhnCyBhKXqvWRaKygu32H",
  "key5": "5V6eevkp5mbT8HqZHaUBkr1GzNJZM3tBDAJ8rutcHKuvSt3kDmRss2CxXoJTXiULKZoPnSj7LEEBJsZnemHhaVR5",
  "key6": "3VSnQLUmiLAoHYVZWccmtrWGAJZW5KAaWhGuPZ6rS5k9M5zKxeEPpBL2TJBkScph8xxVdiwqESaiPJpKkTCAtHKf",
  "key7": "3iaaqcHsJrhWUhRQwbmYVYe9DMH3C78H19wf15bAPtqnbyGfibKvHawPfYjRcq2Zf93DMsVPidf6vqmN7vMw73vy",
  "key8": "5FGwMwLqA6jSoHUWpe7BmhCWtJ8YXPdkkxUeZiVV1fEMukbJ6DmqErBMQK86jq6jTRiNUkkf3ZxJSNn2ZGa2sLCX",
  "key9": "4pd3dakxzPT1J58x8j93wDhZ34UAHFrgEuQFBUWbMCwE3k3PDcpqpzGSGZBu6yGFXHDRH1QSmgmT4HhRj1LcZVpC",
  "key10": "s5dStu9SPjHNT4qKYRJNimMEQHd8G5bG4eu2azKcJqfny4vCMuXWGPndtuHqTkTay7VxtEoAZMPLYFLbDWGRSDp",
  "key11": "4bHTPKKdTJMuMMB8rpFNdb3f5LUGGFVWMqp7W94Azt1uXFFZjKt5tss8uTu2wC3558nwAP6h3w4oNdH8xmYmTdnR",
  "key12": "2soFDDQywNeL9dttTyz5aBnSQ2MwK5EDN1gf821hChcTH5Qifv95S3bi5L4e4p1nLdH3rtZ4Rp2f3vTTsLjni5LT",
  "key13": "4i47uc7DEnqsMp2KCDseS95tmS6H1Qctfpka7LpcfqTqpMexuYDeAWbPV8M9TRfa3h51uiwanDQi6VpaU58CfMs7",
  "key14": "ajib5snZWHpcJinpdzbjNw1nD14VF9RNFZREtNWwGUbs7Kt8DP1nVoc2fyhafcyfSVQyn2uDxVFuRHkKhq4mVjG",
  "key15": "3RvMpQiBUfEN93a9AeACDTHSGmQevfTHT3SXdBT2B8EDCrwM61k6MtEEDYtKmwj16BJUykmH7XHdrMeePtJqx4yB",
  "key16": "5ZruQhxuYbjgcezpY9vCce2Rg7SfEzMC8JdsQ7nQp1CyugWUbJ49g9fJ298S6MjKZP1CYBdUgr5zAUNCQCBfyWhB",
  "key17": "XXeNGGtq3VqEwEPrYAJSV1BR6XbZ1deXnjJGZaFE98wCgcSX7GtDCDkukq7yr4i8ECue4PfoUk9SNR1Aa2uzKJa",
  "key18": "kiLPCCaCfCqvoeQ8A3YmdCAPFZssYSuBKsdpMP3Ah1ebE4oGE6Jy3hWwCHhVzHVtRWme87vU53BR7QSVMeLndZs",
  "key19": "3jsXpyGbaSB6n248py1MGAkmMmF6hwhktL6BLV1opncwT7m5RkmkpBFNvVj3GtqN6AYsEiKEkdbCZmXnqsV8P9dQ",
  "key20": "53zRBJP3kS61Tkq7kXfyxAf2R46NVanm46AKC24rpnQ51H2FnSnkFDXfUvdquJsUWy1AHdF1UWiJHSiwiMaxewHP",
  "key21": "JQahtP4Nzj4YtQTckUofX3AHjEGF5WsLwLnynsHAMDTN1n3zcTmz7A5gYchKz4nPrjyJccJutw5cTNYoFJkpFzF",
  "key22": "2h2ZepEUtLFy8G2YVMvD1oMeSi2AFaAZLNnJSXwokwSn1kJgoPzXhXYXNZ6p4xaGghiwPbf7JJYPfJKAWPXQ1fK8",
  "key23": "4ciRD6jvWreC1wmEJL4TQx6KYYJjvBDQzWMNyQfcyzbpkFQXVRgNi9D4tRG5jTukmFEhUqykUpiKcoUytSkiPM9F",
  "key24": "2d5FYzTxNHptuR4Fw1EJxbBEsDUxpCnoZmwy2YNWe54pxKwExu8jyf8QUruwgGkTDyHHKJFpmyFJkug79j97G499",
  "key25": "64fFMv9FMYRitJmXkF438AuxiGq6cdqMAk34m2guzVATzoFvKtgqGdDf36ALsh5QWzvw1Uch3Cc2mLGEW3XB4tgP",
  "key26": "4vGbJx2HGYUn76d7qQxxaMtrzphjWP6PUPomn5pexHabVzxevJdyHKJS6Z7dE5oNkLkz5pRraKYCJnoVHERKTgNS",
  "key27": "4q1Zm6Y9sd4625MX4gNAxJBoJ82CEHtNbBN1sAgZHxEXhzEAz3f4Nud5Tt1nRZm5pC2yQoigY41q1yFP7c6wDqDi",
  "key28": "2w93SPRtuZ92owRvLT2zAoqGgnbHePBCTSuNMz1LZbRCf7swC7ogw79GPuhew4Z3dJTJncx32CKoqjubQTui32QR",
  "key29": "2fHZnEPdLM1HrQ5bCV3sWjKNFeKwZgnvanVNHdC8d6AfZmn8o2HZW7uPzMvYaBW9T5mcTThyr3uhAsXJhcmpJAt4",
  "key30": "2N1Edi9nw1BKQSQ5btTXborm7dHqWnYaHtifyoEZqmpmWf4pB5aGaCWNPynKNKCTG9nDPtPZQtMhxUYgVmboGy2V",
  "key31": "5Xq6tAJ5tAuXFizM1o4C3b6kzo5pKpUgPtHh7ccRAGpGZ8X3wQjGLpUBf9ZYc1z2TUjf1BHz9s9YCCT3E5hzJHnG",
  "key32": "52HqDD6VxcMBEC3i2dVoAgQSKAB5Qx9KBaNpcW676fSVypZhmARjr9TwNBF34xSKsaq5Xp72g63mmT3bSDfRsLc4",
  "key33": "AypsG2HCZ6HpiDrqUKXBqw3dJhUSNHmPHXZ54Z1T1FJWTti7isXhZ4Uw6vXabNqHCxAPCPvZ3wnF9ynrwRhfkff",
  "key34": "ppXa8aEGxAgF4EorjWYKPsGz5ArWvxHFD53satYmEsXF6tC9jj6JHAYDdPHwDZNq9bSiVasmnPMXueLUza3Ucti"
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
