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
    "5N2ZbQTmMrJu6mFNQEDFVLrCaJCtngT1tCKq7LSpBzE6HPm5XqqX1J77DSCNLMbj4XTYpSy6hxraTHGBBv7P33xf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z41heb2S4v5CKJKcoFhZhpNUzkTSvCZgcBtPkeCD2kKsk6LMsHuQXrqqcs7c7ouYG7jAhCFqtvUaGzm8n4DgJFH",
  "key1": "2y52sLU5xAhEfWbXp4xtddG8SLjWY4eaTDSNmxTqzjnFJFnxnXdRFibo5NH4DhqsZbxzSv3H1bPqAcMtxvizjcj3",
  "key2": "2feeoZZCPzs7xD92MjFSnUWNHgNuybm7bQG3peSBARC7vorzfiDFHm5v8a2oAAkgXmHzH2u5K48NFmvxkXKDNLyK",
  "key3": "2ZcAif8ETUmHW72bCTyJkP1MExtY9YeoXHVhB3jWDV2kWkBvM7M1syedYQcmAwzsrtZUbSeCr2F7DgqzPYENHHcp",
  "key4": "3Uzn8MEk7yLjzwW951AGv2X8ASrJbA5dHfFSfz3jZgzEjG5WxJCFMYMEW9BWoDxpG9HxQCt4FuWsUnsKP7BHKEA6",
  "key5": "pnrSs5b5X8qerQc2wpoaEHw8yJS5kXwJmi4m2UefRtf9jbdNb8d25Q4q1F7ck3gXfbRPD8s8uXkGikUBk6PTQwF",
  "key6": "5PeDqaQHUHkgX3AcLnN5JYqU3SpLbsxG17RYqcKgasY7iXtuXbCKsjZHb5ToM3NPwC9TDYSyexxW9FiY5c7k43W",
  "key7": "5mfVCjLP88XM6G85tNXyDStWom2XWJHp8oUQqmD4q8gBufGmHYc17yA7Z7S4Vh1vPEWXHb1esvbDPqR1PhMf4K9n",
  "key8": "2hNvFKqdHhe6pSkmDJFcSg6si6prevdWHywf9SJLr3H5LeJ8dRQM71N3bQ6ZLipBNfVUVgQp5ZqZSsu6HBXUs174",
  "key9": "2uiacNfdXuinuNhgwx92w3vDJQM2we8VGWHrtNYRJfpAyMK1iUop6wYiR67GTWAxa7UwKfXBs2VLjN2kd1C8VB74",
  "key10": "2mQtQfcioKDUTjuuorwgXMmPkP5eMhSk3XPP8MXymKE2d2xCpuAA7fnZKR2JRerUo7xftAfTJHGzZRJoomzEKjf9",
  "key11": "2PDeAZfJexjaZ6e1omBzRsj6vnNzQ3s3kT6BNZ7AaqRLwNotgjXpPNbZJKgk3T8Z4EisosBzugjGviTa1CmVE1J6",
  "key12": "3WHG3S9ShMiMjPxjj1BiouPrzt1Ae1qxTPk1aivYFrArm33j7tJMHzdbL8TJKQFk7JYm1dZyr73XN8xQaprYFLH6",
  "key13": "5FBRYxpfnrbGfMnLyYFxjycU9zT1jD6BP1wQ7sU78Nj4ZvSPRmQ4PEwXE9zButhgZeoZ6FV2yseN5yDorLpjPcft",
  "key14": "3SH6Zpmtz1iAFJrAeaxijzafPnGtxBQCWsp6q6A4MFapY9Wwo4P3bDvUmUFcCUUgo58yd8PxDzsMENEpRNNcH6LZ",
  "key15": "E7xoc4ytQwVGtR2gdWXNaATnr4ca9r7T6LqLMvwn54QKJNi84AnArbgr2fxk3ASCQA6Lm7uUBYe8p2T9rwZBugy",
  "key16": "3Zh4rXnwjH69pD4qwsijhhyM9rPhjtf4u5agbGAusxQXxokz26zP9sxPT7gETTWRvqSZHUih7onvLm8JHfwhttc7",
  "key17": "4cbrg6dwAWrHPK7LbCcUbhPsDTa6C9wi3Sdb4mdz2sfU7gGM22dTjE6gDcqmoaAicT1JgmsRcgw7EtcX6vJP1uHJ",
  "key18": "53mTPMhupqixsqSUmomCkvx37fKyUtepuHBe4nJR1pFkksSb7rEAJSjv3ikg1VDQwxGTdZZ3wheDj9GpMK9x14xh",
  "key19": "53gjdaGf51oBbvSYh65CiKRJRZFmXAQ17btewqN3SAGZKZTCyRsP2p5ToNqmq4Vrz75uV4Co5yhtMhnHo9XBVMUQ",
  "key20": "2ZS97kXbcJEavdybRMQL1ReYQyzfho3HM1QtQRFubzZQLcEWKWNHmYiS36i6yU6wkDt2hKaUSA7bssfP19MqcUS8",
  "key21": "5a4v7ipwUfBmnkkaxVmnc2L4KDVXRtiRVPhcN2AkxuMJHThaSgYBZYmuMkuUE9LbpFHjaFirc3b25fq6WTQCGfrK",
  "key22": "62KXaCDZK2Wo1Jgma44ipkfBybzjvrPjrf99qCasoF7kfVsEd1BfjDv84z5AmSV6Haf4zmeZ9FTDoUgvqYihn7ZA",
  "key23": "5y1KDY6KW337z1keKYSCz2WXLwUCapB241VRCBUdWBqDvfvKUZbLMeawkz31LavgNpch5wvQxQmx4RGR5WAi8yHE",
  "key24": "5y5G4gEvM1Ec1jsxwmpm7sTbmKDg5yTgkAASXgmahPQsfkPCZ5vRkcXX5UUW7ZboqaYmitJNSBqxTGABoKtriTYy",
  "key25": "Y7nbVuVCryL3bkAP4y84Rfin63p7azddrFq9zRzqvxn5bRYaA6EmNSk7HQpSwY8CRKPWv27xk35GK8GYZCfi1GM",
  "key26": "3qCCP1m71UHZhZQZfx83y3M5BexbMDYb5UJGHDZvtfYHxagFgajqgbMVMbBkGxo2ddGYG5w3Lr8C9QBMYHF3QaMC"
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
