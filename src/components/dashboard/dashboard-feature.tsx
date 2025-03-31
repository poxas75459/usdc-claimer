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
    "5MZuEuy1nGfcbVgHBmZ8vKv9Wr5JLn2LaTQm9qVCAif7JAYjVSaxZ2a6Zn4dm32KbJKxQrtX3USBwYHV1oYTCTzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4unMpQt6Ebd6j9CrEFVa33nZqvmzrczXM8jDWPHiby9Pc9BCbgufP7jV5jTwX87hc5JguNkHX5hJxHA7nzgYYT1a",
  "key1": "4rH7Qc49NPjk9cn6jLJeE4syXWrTWTEDY8Smtbn8BaYbMaDtHhGVeKq7SBtYQ3MKTxq9WiEGNP1SgyW5gbuDvKiX",
  "key2": "3YknHmLAAJn93uSJ4yAsbUa8wP4x47HLod5nMvTMTmEnWhVf4Gvi17dRwcBipAPJj1zDtcb6D2AXFBmJs38vjvYJ",
  "key3": "4KgYu1oS7B6vDey9UcTnUHxDnHsPQJaLQYPTmvKPwHajbDUXwBur6AcHipdr7WJU9zVgcC6UDdBBSR2QPGX7tK9j",
  "key4": "4iaAxTASgtuS98FCWAt66eGfQ2ppvRqsY7pRsYmrAZYdf7W3hhgbAPtcfsHNpCrfwhUPhcyTrUGrDZkiQgdH9qjN",
  "key5": "5nWsQzSrZVnqscUvcXUSZqgtWxuunaygs6TvnCyuLow4UmsXy33M1pfxMa5mrQkzvwCLSkqPyJkL48d8RHNT3nvZ",
  "key6": "SuL5PJenm496dKQDX25Zfbdmit9ho4kSiWCbryZa5jxtpKxwDnpJ6iZZJfupF7qRg9cbWK8jnA7DDZyekmajGBz",
  "key7": "3wBAb2pUnB4Kwz57St1pPGzMtRnMRfudWGfNP9rA4oY6WTCYTguEoJEhUu7tbkBJrLAJLcaQJzmC4zuxim2g928L",
  "key8": "LaiZuLWmPxqP9RH2UAQXyAW2oqc3GWNgmgyiguYE1NMQeNyb6g2o6bNDhFAtNZ8YHUL24RChJJSZdaSfEEx1kdZ",
  "key9": "2yVoRhhzojkG1Lpzfy89P6DkDKWYB5JqzgzsbUwNKNkuUi7GK7inrhHizTrx1Qyutms1t5HBCZ3mBVC79z5SbPhz",
  "key10": "5TDR4m3ZbDoZmfkaLz2ZPSv2TpdPn8UGJwngqept3Qga2nA7BocB3jbuxKTyEKPiCCJYrhwuZ6Dhf3afg7he1tEf",
  "key11": "3XgUvAqHSGi5kWkbDU3NCwjXdGdYBHKQCifXvWwRbHDPpss9WimLYwwXDqXtyMQuiXvFstEBAtSLAfrMKWwifkim",
  "key12": "44oya46WuZJLugfFTM7YE4JehgEjkWZMLRqds8bykLynHvjmy8Zf2V2Q7KvhDv1JR1ADPaU3vXLgMs6dUsz4LQBi",
  "key13": "4FtnDcCWWMUtHk5rAJmdZEb7hQUNeyWZfDkzaoQD9RgmuASjxtSC9gQZXd9nRciSo22jumJPpYQ6WNbea2YRG7HV",
  "key14": "4wu6L5NYVHiEjY3W7y8UB8VidEtmHbLv8D9xoEDToo57i9pSK3htETBXqfEDanwbfMTKc2u1goT6SSMkCtqgVSRv",
  "key15": "27nVg3mBppHRXyoj1Thxpgr4JpNbVtXhcKz2jw1ksaUai5vnWMvjpLUiKaEm1dHYGQLnewMWH8e84d8dUDsfGdwC",
  "key16": "23UzDg3jwPPAPhfBuBuW2MSqCiMwyPpN4xvFsxBuAJrtvTuNCAmMktBUYorRY1jALPxmENdx8UpRXGgteJtbE4Wk",
  "key17": "3yjfsUF2Xh7ACpM3X7mz9grfw3yhGvE1DYuYqLHneBnMzBhA8cHZnngDgA3ymKa7ENvKpjfvbhSHJWJzxeXe5weg",
  "key18": "2Ff4qAfc3AY5E3mrN6bAvk7khsuGAmieHr9BsBsym3w5PLkNwbPaKZ1nFoMNwbezmUVoVphhtRfotTqCwdebv49C",
  "key19": "3iasZ2HrY1WCHZUFGaLnGe5HrNyhxwy6FnEUit2hz1uxghBgbthUrmLCBQy1SbaHiivQjtohQcsvtKLq2KwpLD4W",
  "key20": "2Yn4c5o3FAzQXaXGj1DtbE8GL8AnwRQ6w9ohXc1nh1ZMY13cnwp6npHNSo2cXh9ujoDucuqkjBD3UBTgXTTpEzkT",
  "key21": "51fRW1GdcDUmJ8Y1xFmeRz7ewVwQeArScnxCY1t8QPduczQav8xqPsLeUdNiGdtczKqdpq5Jg6PnDaJeCYGDXq9K",
  "key22": "AjSRJnngMcJYv1z8Aq8yHQWTbQwJnDoJ7qwnNPzhvE1ffbwxNf1EeyQxBeZV2QKt5V1QAV7gmngk8aGKYBMMXPr",
  "key23": "4dD4ma4LUQV7FmLCrsXtNZdiazGrs2BsEqTaq5XxBfGKMNWec5Buoz1gM4qMfaKvYtikHVwreA78uQYeFM4Xwzs",
  "key24": "25581m7D5SxBCQwYvPgDJDzgo1PXULahmM8buRfsVU9wZKVhcLBZZJoX8kTpvbUmCYbrLEQyY3qAMRWPSQNPp4bA",
  "key25": "4bxxxJN5RGXrVXpQDYGvRA8qivBTBjrhcxLLh6vsHpxR35qMg7aTMdPoDeCCz5CqqkBqHd4fLifyhQ34UsW44Qfa",
  "key26": "4DwEQHgobSw44BtJvPeqeSmV54dyG9DNX6JEdT2XZu61XchhvE8XCx8PTDSecUVZX48aahysFD9n6UherkuB8SAW",
  "key27": "GVnPx97fsDUrFXVQ1Hvbrwk6hzwxUhbWS5g56MNTud7kCs8GGzfTzsy93XkN4gJsZgH3tMgoq54Zua5WZhAZe5M",
  "key28": "RgLMYnz5kwABmHycTzLU7FkAkQwcqSC65C9y4VmoiDiRQkQaH62f8mXFHEKQTe2pxeDoDjb2mBfB3SmxnqmYoem"
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
