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
    "fvVA4s4wJANYC6SZB5fjJgoVZb2evmXpPXDq3XU7VCGxJVekQYFpJYLXiTkaSYvUn9TKKkbS3doZ32BDSTd2rp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oT4JvzeRDPxJyr1QqUhf9HsYgS9FSeDFFYodDKbe98nhMjApDk56TURhGHoDEu9XXFikcgvv7csvX4ZCYBBUFC5",
  "key1": "4KMLcxVc7mBhJ3EhDMvrxVDFsjyBHwxNTGLa7KLPv38qsMKNB4PruUEdpPkpwUDQYcf9dNA8T3qSBffYMPt5phbz",
  "key2": "4GiCMLqT9hAHjB3HrzGwewW5RuJ2LrP6mWXuuHyuuZc6mADDrZQ2RbYRxRnhG7t2mGhxyxw3Q7NmPev6WH5ad1JE",
  "key3": "4m7vcGvBruouoi6RCjdGPNzAwkG1QgeCVYRtzsug4Tagv6nz4AvQ9CuQMYnZvUgkWmK9HfcCDontxB2yEL1mBY1s",
  "key4": "49B6kweZzxwWh4oxE2iiycHLHjQ6WkAzyBzD1zBoVAgRRAi7vrXdc9sqt4qraqwYzPtEhGRA775BGpo56YSvU5rF",
  "key5": "B7eZ8WxEpEMRpX48HTVThSkF8FqwxxPyDnGUUDKwyon5EkBwCNnRp7Yt7ScbL62Eb6iBfYrnR1XSTPxAzdWkP6K",
  "key6": "5vNsU24fEr6uQvLXWocHYF16UrqXQMb88JKWDLfFuqS2yeBTsLbEDUAQbMh8wa17hRtwf5MxUrvmbLCDFFeMkY6m",
  "key7": "5XKMSccrg883B4RVw7VNjTqcWUJN5yrw6tj6qYpNUBtJsXCJZcFsV9pPPQaWnyhJwS1f8nNVyBeUchup97DVUdEr",
  "key8": "4B6MBSGzG5UVHEsagsQa9DLSp8KbSb7B1FYJnRx6mXRJH1dTgv2YghAzQj53qKW4AjS2Cani4bKDaZfKKZyKhzQw",
  "key9": "5crkazTFfqyURaYBVRhbgR2GHyr5a7ScsGTZnjhDQCkmXHftAhNkfevj1rdRFD5ZX2xNCWPEzxkWQWY2iuhy4Tyw",
  "key10": "5b6yyq6UJirnUqEEPWycsE8ya6vixqi1C6EiFVXAGi9Huv6ujJ8LBYKRS2bBCdBL4UZn1g5YLVxvSwpHZtPcvee3",
  "key11": "2mq4pKBbN7ci5gjoHfwQqpVuHbyUTGV9S77Azz1mPkUNMjf1d6cqJnk43MM7kSjsPP3nkqPnWsZcX4tvmpVe5V49",
  "key12": "2u4z88ethT24X9AsSDrM5neFxsrM9nRBHoTeHAeNr553XSVkQo95knN1ZVcC2soB9mecZ96VMUEVB1tKvrdtvUbu",
  "key13": "3a8CeeszfQLQTWmek6MPNRLkpurUtDawtVPTHzRZBVTgDbFAGYVthx4ZH4aS4pE61svaRjCk9rKLRzyRTj4L1E9V",
  "key14": "2DwTin2BnXzBcGM24XQkaqc6n3MtuJt3DbXCw8SH8T4DYT7whqidsm8z5y9p57sYFGgm8dTNveNQcbT87aYYbSrr",
  "key15": "4gdpHkHQPH2L7sXjLCo37HrFDqBAQutXyGyXx8vndXjrywJFVe8miUSD1qBW6qeYGpthXdF5dwQnyy7UxHmySYkW",
  "key16": "46wtWZnBPwwSXWHUGJfCVMDPnWhyhYFMPn67ZRb75FkSgTgzGXwvSokjhT2BkzJNQPxkxXJuR883rFYdG21ftx7y",
  "key17": "57NYK1v4gsKmgNpoiTZayxbMMTo3UmbJammnq3xP7PJcFxZwuhHXjYQgQszu7HUoabhyXiv5o3q1aeYnh5a1nKc8",
  "key18": "5u72RthKzrBa1t1jYWHkJW5entM39885cQSKmHfQ6dRp5W2yXLfdQSjAVbit7E9yVKbv7FF9EYd7HtFWqjrNjShb",
  "key19": "2DRr58eNSYoDDU8rjbrLobkefCLCZo145ys4VK9x39btc9ptXbbnhH7Ww7m3r71Kz6dqr5ZAqiFtKEu6U3UJXJQz",
  "key20": "5MeMSkHU3gDJmqVknm9vhFTHF4PSvDSF9rvraN5tnuGh84VgGpePXmA1gtP5WVM1XvUWyAYgLikLsbjCYeBARpBv",
  "key21": "4Yf7cxF6XCBK3WHderL9Sv7HbdhcyphUMKMXfQRapHbysagHncDS7Knb2n2b2AR2B2xXUopFrAaDdQgoTgcvp9ck",
  "key22": "SRSRSoWn3CH9qDovNtLtDz8PrGcY3J316XX12nSdDpx8hsar2xVQfuBZypM2tc9sxVwarz47L3W6QckMz2cvbmL",
  "key23": "5PC7ZSQV8Lc3HdCJdmLNbQCYccjC5eAQpygb2cdSmnz2sTU15sWjErQTKNATzHHX2RGvoinVscx5tyqzwpgPjdAt",
  "key24": "HmjPhKGPJkuVRtab99ueW3aRgXhHNoJA55ncyGziXH9WHPvc5Tcoj5ko3QiuwyYmGbbfMjFuav7xsRLi5KFPJRf",
  "key25": "4jZMo6VYjmLDYp5cYBoZcmgLzMVELAbXWmV8SGtLTzmrgBUB1unzHyzMZf1cmxG9dKtJnGimdTArUtvBm5xYJYkV",
  "key26": "5vk39BLrSdrQfk1mkuy3fGJDAtYf5G7ibzwzd4RYccHK31k7fwE6aNM9FeA4fUcQpXPh8BNBysCDCUM7MY1duUto",
  "key27": "2E3V1bX74SDz9sYCDet1D1D7ESu4HgwFdUcxiaxwPAG8XUe2tfeBHso8ZL89eCVCdcpDmsq6XfRoTR4Rh6BGZXj6",
  "key28": "4seJaaURHxVwA2EFVXJ9VFvTVt3CDwGkFsdY11EQXp66hv6A8sk6sey3AvF2fVTaDwtEPoE77fpMt4ki4WH8wfyx",
  "key29": "4rW4rAxbayFYjUh8uTa3EDkDHE4ybBXbZJ8vbaYRwhm53nbpf9cJJsBjHczQUKebfN4f4Fc9bAKMnRUbFZBVjuHg",
  "key30": "4eh4n86iGrtMbdASM3TbAwZAwPF8sCZv4qEdfVMsfvA2SnxxKp38xAv8UVQyVvDt43PdpBoBWW1iJSp2LFFgf82W"
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
