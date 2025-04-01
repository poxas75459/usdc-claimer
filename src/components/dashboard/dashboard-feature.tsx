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
    "4HFh3tPfPtPpmezGcsYNRRwdnHUAvCkLy8eJRwP9GFyYvorw4rQrCmh4wsM5JHvq9xCTM5f7sTWF2TuZSQ5GaPKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RfPjzSCHKkATds2iaz5eWqGezE49s1q2ftaxeDNJuzGhAC6x918t2pwuM8UjhfwVfx41cZLrUw8TDtoYu8biwzs",
  "key1": "5nHrWNsc4heKjyNb3fBCiKGYM1hkAhxksryUcWwYqm3o2CoVgiNxHCRsaQZ5hf8cTdzqymjJhM36XPNniysUzTh7",
  "key2": "3f5DxEoPt2CVKGDttAmxFyRMW2SR1mK9q8UFWvxDd9Zm7bLSJgZNfMxVuoSWrd4xCc2dFNyKqfvx74TwaXtpZ7Fr",
  "key3": "2WjfZjMjQcMjMgK67pvokZZ3s7Kzwa84xrrqND2zvL5kTU8BszNQZWURjAVoRnpVVYex6VAWUoHRJFqk9rGdJoiv",
  "key4": "4aRG52Jv5U7aLwc7f9DuPPH97TiBEA7bJs9H6UBGXR2ekjDmF1z6vd84CERRQLxj47fmumc1Fd9HZBEoto4Wc7S4",
  "key5": "37sFAsaziGhnYbXUf3Arjd4KM4CkY43J7gRb3PbVp1FybkCmtNXzfDzg4nHuFLAuo6TSim2rS9kPiYrZr89LKD6g",
  "key6": "2z7TV9YSMTAAQcEnkHrbD3X6JdN8EVuW2zMVjkm5J3K6LbF99UGqWh4Ev1x3itnny8S9Ds76UFDq71U6CaJGg7x",
  "key7": "4YbYfMSDpKLqXPk6eBKfvY12e9JuXko8XHmdPrh2GuvoS5HCi529qiXLMZoxnMqieXtcdF5yYqHREw6QZepmYtFm",
  "key8": "2PQTM37kNcUDYqHXsR89m4rHnprUYbpnrX35Gy8c8qT4ZY9bePxfqTjCutZ7Ud14FULWBqT1XyQjJPfumU7G2yAJ",
  "key9": "3bmivqUQW9Yf97ytivr3CPH9X8DpvULDbZaAoT9vaszUmMVPyT4pdzmBdyALU5iCDAFesqsfoSLLdUvaipPFMqmp",
  "key10": "32cqfmRfFKBhFNhFcm5JPjYvj3PsyxV4729BKCRhYJ4j5eTaHryr5ZxofTuQg36aEjunN9VkqCfJbYewLHjdKJLV",
  "key11": "3k6Sranh22EKzFAaxczx6mtBepu3Ybyyn1L54tkoCktY7GuAVpE5x6XBaE3zL87BX2os3fSDGxCqe1k2cKtJYHUD",
  "key12": "2BkBFL5ymR9SjA7F6xRTugbUCgM4J5XRAhF3CXxNQFjehiF6HHUXpakkxAyCw8CUSonNxvx9w3FucBaGDXaaY2fx",
  "key13": "3NGWCD8anx5ADmHNsBuCSH3aU654YkntCTWd9Us4Bgnq6Z5jtPkXcnVyQwBixJrzeZq9CJgesmmcYfTfav7pwvxg",
  "key14": "4GCfT6YKfUXRcZyZrJtSH2d1CZqmfutmV7L4DhMTpRi4Froe5Xh4T2Rpof5gwKq49dwxvqk37oowg9aHxig92oeP",
  "key15": "2H6apyosXeGip8U5HsK3jCZF5kjs4ZDDM8fqsToLXseHtJqMpMaP9ZVmSSUv9iRf2whExFtEctKfLuohSTEHBT3R",
  "key16": "5Yc1j7NcBnLcdbDSyL4qVPXsYyPKEvZ2BrwPqWHoKbBoX6MJtMbiwWL6its9fk5qzmvhnNvvwNnBwubthFRJJNeD",
  "key17": "4ExqqJa39ug45v1gxqruSKrqJm62abEubBCkYNdSmX8krcUv7v2i1vjkbaNp5rn11FwYYPfXxKDzSmGXSbnzmzXz",
  "key18": "2GuW38EoJp8ga9UyJB2NjAwjtAxufuHZaMtFNWpL2KeyxRo8ewLPzqXxnPpVHWUJ32tRYAZzc2Bf3hetYB3dtXRm",
  "key19": "4n5y3fgCZUS7V5KfeZGVvLyZVAdeHa6bXKiQ984WAjjzRuh5LKbzvYFLeoQpaVEcbB7jCo97DmE3Q4PyEuJ7m22c",
  "key20": "7mRUBvgQvcErJc4eQbcAimpgnGvcsXHAcyqFtPZduUmgqMYxdqZRahEoxZdU1csJ63Ky7JXW6ji36zq8Ev2XGiH",
  "key21": "5USMokNbfCRmbLziPWC29PVEVvecz6tAxp3wScZPg36abmbZPRRjCjmLZFw3oBCjhEu1HvLuwthLzb6qh6sAJj8c",
  "key22": "63ZLZrTP7AEghq1biE9B5ogUWEUsyNu8i4vhSL1QExs3Et7HbrxVSAtBDG61F1ikSCeM7iu7PCTen3FhSLmvS6Kp",
  "key23": "DatTh1oPRHKcwdLiwWUtMMEfoKQ9ofPsdzPBVDuEJ33oBk1bfRqdegiNT3ytseAQoQg2sbhMwUJah8yrcmQhj16",
  "key24": "AofWYhK745wzDwmwNy6DFfdvxPERybPToppEZN9CPeYViFZb3J2d9GZwsGjHxFoMXaBcvAdjUJd9zgdB2aKMgQF",
  "key25": "guKcqk5Ufckuc9EjQr3EWAKVGZdj96h5MWV5FvL8H252uvR2j1gDB61RmuodhHjHF5Htg6PQEzU6efR6AP3pFm9",
  "key26": "2m5VpoTifWZRorU9zAkZaY3zEH4dPVwfNnQTqLaxLMBUgzZJXagrqyRsW2QorkFMseTLQh18mSirp1Mao72uhhRQ",
  "key27": "3n6agbRGTVp9sMK8Eo9XmAceg7QngJKRBsEWSAMGnz65EXNGP72ASiPG9kUfwwTCvoPDqMcZoQcECztArfkrKgGE",
  "key28": "vaXppMqeZuaaVSrqwW2tVstWEmkZb6je3BwbhyDC4tLPj3VAdjJ8Jcz9cwsGeLMbz88wdDdyj36Ds3vEuW9yaDV",
  "key29": "5Np4K6riWTJpFit3hceboNpvRkCCZMQB4QXu58XZq6kcjdXjNZPsSfkCZcjNzyLFqZRDQhL6BH7rdv9C7JNsUFNF"
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
