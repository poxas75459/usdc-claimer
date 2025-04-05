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
    "4rsAwP3gAjc8ZHRoFr35hUAMtSMSzeydyjmBs5ShHcEVBngpCfkJY71udf1LZXp6nWFfAPYpjSSKijgVfrrx5vA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yjKRZtQCm3kSqBB9vqpL17t1BWQ6cDubhT7mxuCU7ubscam3WRLRF3j2R2P9oC3xFspdJ1UthdHmGpRabr6VYUF",
  "key1": "4Rp6orWJmPhq577JP6DQNRiL2Q2akRJWFGK4XTckyoyC4z8sevEAyGXRgLAApprni7Uzzudj6WL5hew5B8B8zdDN",
  "key2": "zoVgusSwVcWQs5nQaxxEPVjJsQ2K96fESnodrJMHNg67579MyAPmrNtGr69CKsGfDw7rNx6idmUZnt82SLDYU4i",
  "key3": "48vP6WtDd3WTKhQxD32uNoBBcEzS8qyn3zspy7MZtpVHnMGxHSdtcQo7ro1gW3rZ82L5Xjx7k2Kxw13expD18kiR",
  "key4": "2p8JUpXkt1y6MygCVftdHgiz3oznFzJjEABDyGdiL6urXqFkuzCi47kK9ASN6BkxxEa6a43Yg457p8P8PcYz6iKY",
  "key5": "55S3zKaBvXjykYsPYCG6Q48kQUHQdCyzgPp1f5Xc82GjvzK5EQa3g9i1b2KCj1ffRpV2wNeaXNPB35KebYTihA41",
  "key6": "iUgqrMtD5xq5BvjLeaSKhtfzphCKA4RtD8xbCcDg3xo2Ln11HQ7dFzCqMJWdPxC9XiwQChFjp8uiSCSJ1yDF91D",
  "key7": "34nWZcPnHFjJ4HT7XSAuSz8swzte7uaiHA5FumMcVVhUbtKZBEErSszaCDUvjk7RJh3nPEEGaXEo51itLt5Mk3uf",
  "key8": "4hbYYjmJEkdR9v7wTTDxd7KxV1BLZzTVAKiSzhaXwEAZRgXkNvBiBXeHyBtVb3APzc4NEUY2mbrgyMMau7tRHBo4",
  "key9": "49VLcEJfJ5vnEMiDse1Th6UQHcYJh59KTnUuQddYqNLyUrhmhKCuxfubj6kipFFtb95n22FTn5ZbgvfTAM8A5Lob",
  "key10": "EV6UzgKEFnV8DrMu3jC7LQsxRfr692uG4bXVhJ5v7rPKHfkzCnidzvGHp3MqEx8T3WEHT6bMGSXiUmP71qvipXB",
  "key11": "3TnZuxecf7vkoZCBKipuYMuPzFMKRTrv5LyYP9tz9AztPj8tjajpGTpfWiZvhMCLaEas5rYhpn3uAhs9K5BDTvNx",
  "key12": "34L98Tzw4j1oc4XAGw5y34kZ5r3wQryQkjpRtbb2ZY7Av5R6RUyRs3HuCzLdFutk8zjHmmobuqTwK3X1eVs5Tdwr",
  "key13": "QYVrgERR33AhZNUkUNdUij8Wc7zD83vfTyYPomJJ13qiQvxsBe7xBwmtBPvijicta5pHPG1Agk44HVXLk5A8Y1w",
  "key14": "5haTeu7CYDBn7iRNQWUWF5eBUcRNpGWGuNwo2FuVSKZ3EMfXr1bZDuVn9yGfQ87JA7yNdPnUhbvrms5RSVyBE7CV",
  "key15": "nVxK6kHgKKjLByEmakYfjuXwfjfVzcjHkbffXvxfunD7uxLEVxZXNeYg1CHRZ2omZQSKvJZvYA3ghfF7zrfKE4P",
  "key16": "3GPsH9edU9VkwQwLha3E2W1YoTMTursE4awaTLV8QRm4i6VtFX26KeoJUAQ2Hz71ZeynQZi5stefhTPLd2TmT76u",
  "key17": "2ujSppV38wuW4zFU7xUGPvzShnZGrLu7mWK9xV4LC6Md9kHUHoiJhUZPhP9hYoL19NUrz9x4USxgNyhMGYmK9ipJ",
  "key18": "3Gxp2ARhH8tbzRy1HJkyxjb9uucmozmAxLD4PSpusAQQJ5MWqo679VqK1ewnz76vd4yCZ628bEHgz7HR1wPFcLiU",
  "key19": "3F8coR73NeeyoP8fh3hUcDQM3rDTus3C7PNiB1BtuhxVRxHY9QSfpsRmsGNn1kkd61xxxHesPjub4Vi15yDYJGfW",
  "key20": "5u68cgZBqzt39SXx5HEGPJ3WEt7aoEJ9x97KtcU1pQ5CUs6ZasPSrDzjsuPMSc8uKqX1sa6KvE6BhpK7BixzRcnV",
  "key21": "3HocFPoicv6tnYb77zGmaGMqc2v2Uahuoj2RTXwe6n5HDJpqqxXcrYz6G4dPeLhnwwaXBdnd3Q2rEUBrgn7GtWCd",
  "key22": "3EDQF81ebvAmEywKSZnsJbRqogSqrbfBA6wQesBEsy9GRRuzZZ2MKxbuTzgyAYZ2KDUQvtoGTUVe8YdWp15QfGHP",
  "key23": "4dW6PNGPUuRPNYNRSRhNnazsEoqdDxGGziL6a8qucKZGJ3xcyhNvHDtCiFbQhSkuMsbtXTzZ6epfrKJx466U5rRb",
  "key24": "2EL7QMTfaiXme2F6yCELN7mPp5rmPZWFdn6Y9beXuzda8Q3Z3AoS8SzueSraKMLMEJ4nFY3XLrSNYgCvVLLzWJDf",
  "key25": "2inEiUNi4LJ8Zazr68w6pxzaqQBEQ7vz5BrosZ1JPtTXbqJD5jp8ApZ2Tw6HPZCARLhS3NzQhCL9EXyBw8Bq5eqj",
  "key26": "2izQHTGhBPWDpHoeNE7csV9iDDLsCAap4rjwgZkSgGSWgU3mXAZuqtL5FcpzRDCg85tJmkCM3QPtBpTUaQQUJyX9",
  "key27": "wbsCF21R8ipjHByNYrqeN749oF3rQY3xzjmjgRCYzozmon2E6srwvUhVkhxxWBduWseCuN2m9JugcyFVk4kRvaW",
  "key28": "oR7Z1V1EXkfAseSVviiJb2enba994MgqpqjQPtAoK8XfcoPejXA1VRuLxdmNPWGeDaQW795f5qgL5dsGvMRA5Fi",
  "key29": "2ULsWgTs6HrwwYN64DB1SXW2L5z3EJK1a3BSKcLW66RtNB28muMs2BspP71hyQT67PKncB7CBqetD3fknNEx63Uc",
  "key30": "HQPsMnwFECTwrPngiLFpxFiPo1DoFZW4uBZUqmRCk3mWtuqCLpw4539SL8xjiG4U2MJdxXkyW7x3BZFXe172adH",
  "key31": "2yEesJMuvGKcbwcdvwUQL1gntHEYtgnvwfm4chGsjLRRWhP1Wo6kFL6i1NgDyYjZAj8BE4EZdf4VDYmUPeViTrqQ",
  "key32": "43p4KJUYf5cQmPf77XuWNVfkgyQtooMQue7nTTRUFvswicEb4J8TSrP4bukYZLwQsv88ijr7UYAG5qP5JWt96cu7",
  "key33": "5wMqNVMLXeUbmNZFvRokJXABERFjrHYbsTnBU1hFUbfLYaN5N7tUeeR3hWQYkdF7zZwnv6BGL1VteAb2bny48Eod",
  "key34": "2UgS4B2WWkDusgainMF8jD3ygftpgbb2q9VsM9SdCTAtw8Tx71jtGJb3RHLsFKZBLnWGzgsyHvwo2LkEP7XE3KUw",
  "key35": "tMJBZt8BEPd2FTZ513mJrFJRSHZHtWerXpdiqGPXM2mdSXyyzzrweBMvkE4o6UTe3JQgBU4Q5dB7arYUkf1odUG",
  "key36": "KwajidxDcnfXQQP9XVNGfPcVGwwjJueZAmzQAc4KRshLcoBqWPBYNzM7nbFFyTwb8aaFCTPTpZUVHsUnmHC8o6g"
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
