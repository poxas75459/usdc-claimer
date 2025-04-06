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
    "31Hdjtbi1U33cqgRtWFM6mXB21QBEmCMkhG7syRTu159PsAyRUprC356tUqU2GPupJj1xDakUnFx4QtMpS3NNon9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39WwWrpv9rJ93zMhsutrkzYRJxxszGu6aLHjCKejWQfnu4KHeUzS5r92tfBpQjWrhKeKp34N7jubZwM3rvSe1myS",
  "key1": "2j4T7NFTuei8yhJPtSPxskVfHKnJS28JwTBcBHVQh19VDKcUnBvt9SkYUg3M2rQrxGzBnE6ud3rWsck6srQMKa43",
  "key2": "2vLeS16mjv3NMCxkXQRXTkm8EhfiePt5emmHQbygKGvDTzw62SzKTN72Kscb4A43xYijv5ZgjNgxQLTFNExRQVGk",
  "key3": "oLoLuA9JaVuXnmLX1ZSRB92qpr4f1KoSJf9ywLE3JpTy4xARiSECYJTvi1N1coKqzwvUX2JzMryd9CXGNMjDNN9",
  "key4": "33p5c1RGUU8bvd4S5VMgnsLnJDE7akZ977q3ii4zq9GnjuYYYhz3bXYWRbXvYYj4eQJAisigMisnC1hCixhEuENG",
  "key5": "52RzvPUYxjkgAL6WK1zzVhDUP5jrvzSSAiYmQY6GrepQzeEBSGFD3cjjfaU3b5Cxnq5wKQZnFqUTSqaYPf8oowxg",
  "key6": "2MjBgfUmV1RHkyYQ6BLYwap7SMgd89TAKXZrTYxvHsQ4jHZfaDYJc1ZoFJ3TRTbGZSNdfuhMrwki6YzWJQ9uXyQA",
  "key7": "5d7f1AexFsCJDW1w1WRP5i6rzgGYXMFNUEkX3HFNMXWCAtm17n93iRcKo9XfYdB2iogEUk5f9UkV3muPyPyiWGo",
  "key8": "3ahahVTzhNmfz6BTbT31b94QSSAxg4j3T1WfC6ZByXddezeJouVXffckKnWLx7PUBDtheS1Q2m1HCXCAzpTMTEEf",
  "key9": "5gffr37iAkZAjZX8yXTJJBAR1ooynWvrTY82j3JHtoXsC2JySW5gQQ8DVCYrS7tJhHTyCM4Xe7WXW8zxL1wtrcQ7",
  "key10": "52D1fFnmvYi7tBcR5RzrAFfpdRXfbXQdpAtUcMeNVTQqFYQs4JbgW2AhrgDafP7y5WBxTv18znh8Y62U5h2o7Rqb",
  "key11": "2iC4hygzyGAgQ9sL8WtySKCt9HAp3QoNszoLUgnYDVmfs6qbUf1qHZ9DTZqoBU9EFqYSP627VbLMrVTacWBgPF82",
  "key12": "4r6HXhHyEFHZ8qoB6Da34Np8fULVB1W3bvey6zQPoZWxd4xteJyyYVqwqDvBJPYSQ5m9uwRUtgZD5t41DrWMpwk8",
  "key13": "4WNFjoogbKugGbJfET1LPgU2m7j4jeUwDNUF4WroXk7AsFXYsqApLaMdkRKuV9tMMSiUbmg7YMSxPFBjVaTznH8i",
  "key14": "RRu8dyPXHjfVJKUxMdvpxLxWEbLEemfDyrjqh4S4LP29Y34UCbkgiftPd5GMrRYRFy6coK3kiwZ446iD1FbC7ek",
  "key15": "31s8BeNivFhtXrx3e8HVa3YMTG46wanzn5EVzLaMejD9iXbByaSJdw3S9fQKbwDd3p5fzmgG2Smttodg3e35oRBY",
  "key16": "4xVBZQZtZ5qHp3WKuQMKFtHJawDE2FLvFyH1zWWdgKVdJPKpYQa3QAyQCV14j3LrQ7ZNHULh3TxSqdzWd69jKAwX",
  "key17": "2sDrJiHgMLxQeyfXnaoC7aMU4p42WosGmj4CFmW1kBtFt5T8eCzMdzttGPQsmgtc7pfwUSAnSsZ8zCsPoQ5P94MM",
  "key18": "5hsSfzyNqbpYDgfonuiuNzsgE69VppMdyy9xFMUYzm6eVUM6DUQKK15bzBdLPKAAR2gnq8ECuEwgqeTjeegxyn85",
  "key19": "dLRmSEW6F1HUdUiDU2GgNPcgSZAhHRtXtmzQkcEJJLGjrTBEkrGsbeVVckctfPmsirpL6318yrpM69emjVMaMGC",
  "key20": "3T3dAU6vgWVPonm4gdfpzHEJi7D4i5oQH2FDrUoiEg74Z5LB1FP8CcZdk1PdLgMtCbtDzcFj1gk1muHkRCmF9McL",
  "key21": "3fHSYX7opvgXpdkpdyNJpyoVSxMkfyGoMogFdvtHZBUab5MnnMwq6AY4867KqMb16ZEYP8acYVCYEdSgGExH4R7S",
  "key22": "2XNuiFhLPjtxspPKoeyTWDk5c4ttCapiHzmN3LponfvDF6rphzCBuz4EgjL8Z9dSKYbVB91xjmKuhjF6AmNXvWGH",
  "key23": "4QhryBFGcY3yn7EfG5ZFTnyu2mHdUExGJPZazrLBDYvzkqPRFRVEtiaJUyzPLWkMNvXxembzJyTnTVzsD5N3aAKe",
  "key24": "3z2aePUuprVx51Dohgi3TGKGMFq1bncxbqJfRFrHVDN1ybiDhE6aoRBYUJ7RQWnmq2G3dWiFoX2EmYdAyKEeYhoH",
  "key25": "52UjXYBUzse3E1qnz9LXzp2QzrECqLq1V3dTgPzYaBRXawLQpcSg3wcJKB3Kb67g74k4tdNoQeW8BEtpU9kSmjtj",
  "key26": "3jz5BeUUfAnB5TMxQyr7doFX6jnMMtdUpTYzEVz9m7z8jXKDgE3XqJAPGyoJ2LzUWBpMch1KRQTudGQdTJzZ9MeQ",
  "key27": "4e9pVo1NhYKecqzPNp2oN1BxeNPFSsNoNQtAgwiSEAzhp4U4wv9oXk9hLiiPLsLJAMTNfi1SUrP8B14n5Z8aAQ9d",
  "key28": "2doJqf7LyzbwRxZ9dCTFwCVK9AzHADozYdE8RMFQT578NDCaiY38u9Y1BZnbyiGemmJnpBK1x462mLyzZPtZbYkW",
  "key29": "vyHPh1uHJwcAJJigKe1pzBL9bfuegKyiUFvfJDnt7fiwcrahGaw1s9X1GtFjCps1doTgCdtNXDDAyS8KzMcqJXD",
  "key30": "2NAJCxfhiFspJqJbXFrfpRVC5JSjBWvV6xYKFquc5rnNioqBGQu6WwKr4VibzQ6Y6f5SSTHEDsYFHqxL2ew6sJYD",
  "key31": "4D4vsoLfGKyM6BxgXLU6yv2WHud22WnTdrEBbAUq3FvL4BGJJiuB6EEoNDEwwuXstExh5L4krrLtrJDACD6a64WH"
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
