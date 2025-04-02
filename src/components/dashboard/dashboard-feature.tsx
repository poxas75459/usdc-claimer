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
    "5ok3Q7US9iEuyfVBoGgEm1y6owhK8syjbmyWRsdTRpaiU3pjmqKXsCMj7YQuW3V29vvwTccdpDWJDVRepQuQ4AWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n4g8tdHDGnQw5V9RcFKYnKSMtvq6C8zHYA2fDgDT59rNH1nV4a6nKcuodyyuFFZFCv6cX4pXZ5FbnDe3E11PcfW",
  "key1": "4be79zzFVJB5YzXsAUzH6TfHYaJLWq49PkkLS7oSzggFSsLybvzLUXwW7cVGkKfQZxnUtbC2AJSYWMSxekur5Uwk",
  "key2": "c8WC1ZekmNNYpjSxfbdRFKuLhD7pMhVCPjsJGmhwpN5EJAYFuZRy8BXwCyT6e9NsHvyQ5nC8bmZFoKA4r74NCaw",
  "key3": "3ZomFGGBhdBL3E7udjadaSd919SqZAtZMrryqVW7irvBWZjGz8tctqr99qgD8kRqiTDUTZNNLrzSn5PJkwGBVXRr",
  "key4": "4VbQjpjajjabHo4HTwszs2uUkdDbEyF4VyzWVKokb5A4y8unvkUsQSGwsbf26QkjZAHitMegqJgwkYLkc5JKWxJ7",
  "key5": "6531RRduhzWhgSRLgKVNpiVLthnBKDbDwHSnLBDGa47jdGoz1BTHZnd2ARuLonWJ6R7msRnAzMVt7zUtVQECFBf3",
  "key6": "4ZxfvjPTH2v5fBntssa59j3HWJJDX2ZARSrNQELNeN9DRyTELRDiV2rob3fkbWVgqoJWfQteXqDSc8JuXf22ToQK",
  "key7": "5iQXLEkKpJHJKAFn7usYeYqJ5n8EtMcxkX9ircTMhgnpNziQM5yWBkB1iBRgGEShD7i9fphUZd2nrjnQFMQTKKUR",
  "key8": "3ifbzVE9oUJ66prVJeA1dyESi2MXR1Ug4PjYxKQNVQ8JEBJwCuSs3bB26nviTWF9woFVR3wS6Z4W5mVgY9Kp8H83",
  "key9": "5jsrUSveSh6qd2Fvq17yZaV7ygsaRKz7E4SWAJhAxkARpGQHAFf9VgAmjzgmkkwScXw36JG8CqK5qVLpmsbJ2WYE",
  "key10": "246yc4fGuSCcSJuJa4qUh6kSB3yTBZ9EJ7SRE33rNQx56mU5vdxNH1bBne2zi2j2iiFJwQkYauKC7D7AqhaC1DPU",
  "key11": "WiCmMcmfnAnjj6SbzXKYFLWTaYzwZaD7G8AiFJVy8BZcRa7uRj6z8PomMwvCSEvNdJmBoySZVXxifx5NkCuiTi7",
  "key12": "TbiMA8nznUswtJy1Au5hfQmH116LKiSiVS5WqegCEBKczzQbMDSqMxC1AD6fcr8WwofaGDYZx4zoyHmNHSdbSzn",
  "key13": "52M8pS3AYjwXb6XDAF37JuMdcmNNsXN75TCGnMJoMd3YkuiA58aT61vsEZkVXvnpd4bSxRsbUTzPBrPFG3FqmUmR",
  "key14": "PyeyA6nqLJBRGhCaE5jCMp1Rf1eqoS6bz94wjug7mkEwB8BrtKzpdtfssyjSdFyY5j9L7SM2jdKhM5G1NQpmbP5",
  "key15": "2LH7n7jQ2YTuReDXxvafzZJ4XZHYrEAeWGp5JhQzHDtKCd9TmMJFsunghrGcKPs9HRjVP1VQuyub9iK55zoYiMdG",
  "key16": "5aFUW8vbsjhkAd72pREtQ9vTWJyGe9bovZ3o4HvydhiN5MEY9NiEYsSfCDrqSP28nVFdkecQ3iFJK1sNEDFZcHT6",
  "key17": "3yJQ6xXqMrvBmTu3xCqRvTBqCwhxcRYEnFiU4gQUHrRpM489mKhPu2eUA3QrfugqzvByUiii5mJ4wGz7bHDcLoBh",
  "key18": "4kCnN4q9PvRcuvu7tb9thpPehWybp3jLZxyRg4jdHLrbuDZK55xXkLRbj5YUxtxKv91urKkRjA7W3arFP23Htksf",
  "key19": "381zmUaDQge7Ej2wYQv9F3LBNJKgyeuqvCxnpEoV1t8kvk5w5FGR2DRrd9ujej4r5kJQnhhberCdkMa7vYBJEMt1",
  "key20": "5nkyvXamxyqUEd49V1ycyoWpyUvis72dA2snKoEn7vE6vZMpJR4kFss38jmkvjGM6zfswVW9oHy7sJkrKao17rPq",
  "key21": "3sPTihtHGTa8dC6zEJGUFzXc9pQkaRDE4VZwNokCFfMXYkqpVWNxKfco6F98N8Eknfx3sR43yiEpoMeUwAQyTXPL",
  "key22": "3bk83CV55qh21ezDttV354PRtux1pvcVQk9NALFTSbc6WP5TavHs3JLDUSmpFU4v8LsfUQVU13xyVxRWmQ7X89pP",
  "key23": "2GD14fziVpUMQx8543hCo262uhNcsSEN7bNZroRcpDqq6mKP2MGfGWWpJ9TqESR76UNAUBMdtpNJWxh6Pfee4w4N",
  "key24": "2JFpHAAmhaER2Fu54DSSvc4Hfoi1ozv7BRDUT3aoYrKwjj5FNntgqvpYdL5y56uxxAZ2pM87Y29iAF5dLEntDG58",
  "key25": "4wJvG7U1t9yXGQH4Pn8YMr5uoJf8QgkuBZPsyv3bhm7HHGcPmwECpfKY88Ga8yf4uk9GMqykVZ3iMieB5nNz1Zia",
  "key26": "2j5J55h8JmiPdddmiZXkxRK13tpHwCBkqqHAaE7ajLQ4WTtXFHXe9FZCmL8VA3TRMM9bRW9koDtTwgxuLxshJqcx",
  "key27": "2gJA9tVhiV1w3Qbp5snTZJZ8P3pbJNWukPvVQTaNZxSBjKMXouqaQcrQ2FtARon4psePrUko1wGt12M6z6wXb2K2",
  "key28": "3fB5z4STNeRVxhHLXN1nYadXkZeoGZzeSDRRJyWNz2SaWg5Ryq8edUsivQVtcSHqoXGMC3KNHPtupf1qq3FGYnwj",
  "key29": "2yY8JVRzzAwxKb6pWtg8aXTPxR4KGBz2j8y8UUbXpbhMnMCrjXMGmDCaBhxEsq7grQ1JeGFisCqXmqUCDRXGCjVU",
  "key30": "awXVbvrJtUwtpH5DiwGtfpMioz52TdbnPPiJWztNDbWsdhmwacky6TDUBXezH18dRgaZE1CpFJHAbJaXcC3HvnV",
  "key31": "3bk1iLz4G2WgiKyLQ2pRc9S3M7HJQvuw1uxvg6b2bpU5RGWJHhHTEdAv7CPZC1jYJaJS4YT8BivxZjSP2yUYXmbX"
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
