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
    "3sQMVkkytX7b9sEkjG2DVd8HuBSusJmrj3QCkwpswT9ejE9zS1hpKjCLbFfpdN4qzj5mSpGQxdVnGDgTzPpjs7F2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32jmPRBVhjdCvHZdNUAXdhTifKi2r8o97WKM6yZsAi7RvD5o5ZiLGKtzPtVQNXitqEmFYRvTPSRZQ3HsPnZQUTFa",
  "key1": "5cTwZxbAJJTSGuCnnAu5xAvfrkhBvreFsPiUe85RgWRHmaU7Nh827q4cVQu64WDNyFKTw1f2M5sXrVXEWcr8nK6y",
  "key2": "577SzvWKacDRuytRqajLWe8ytPmKRwZASmUMKRNVN3sPoV7CCcWcn78TVVsNYk8f4umj2kNHRxbc5QwvHUhrDv9n",
  "key3": "2Cw66XESfe9oNBbNvv9GmLTC8zjU1LDBPbBTMT14HM1nVm9jy8FWSQp78hxN7sKLCw1wxKnkjQUKh4uFKotX2dYM",
  "key4": "2M41SFQNtmT24iGzKaafuBkhuqN9YrWTT9JuxfEv6Mz42HqAjnCoN1f7Z5CuVdjq8EdtpHnMM7N4WTq8jCpyunRo",
  "key5": "5HqBHvxJdAFXAKFCJm38LyCJKrrfYjfEpocWmcrwrnHAD1QpuNNMPPadLRGQek3nUJbezRS6tGxeqPw4FS4TZukr",
  "key6": "5NKcD24caE1qV1TH49q4h4kDHewmXmmXctdMQiGo5uCDVHVVjYZMw5mGo6xC7WvH2aisrgyHUYv4LYjJdzsSYbRj",
  "key7": "4hV9vx879sKFE37XWKDytNNAyQrUSaoUdMCpdUTTun9YCVRCZpXxRhiLmDuvNjuiUoEKnQA84PJbFU4mU7Kvc5fK",
  "key8": "5CUDeTxaRuz26XdNQuHx5gWYQvB3SchS3uxjnSoJ1RmRk2nyDuhJZ8XZH5CP1KRvzPyCY9hYUWL3hdgNi3CcKxj3",
  "key9": "3PKAPMLasX3YP8DkzE5kmETo5qMFqEz3j3tuVHe7bKELvAAoDmvSZrWJHa7SeYepx8M2VvYu1UripPF99KBUuQRF",
  "key10": "4QmEBk21vQEPuRbgSWzMucKGhqkiYT8imUphB6PbywcoKgweCjVDRCsd5qHU596NmeFqqy7mZDTYBPZR6Rxx6beF",
  "key11": "4hsjrU5c56AKTiomXfSP2xQHiTzxAnLHnNMX1h9swzFjRrBGB9fEuALa1YuFFi6oN94L6JbdNhgwutyZsrf1hpyZ",
  "key12": "5suwmZ892Npvk8Wn93ZQvqtZWD6ALwRunTM4XFS853gMegQtLMdN9yMmYUHUScAYedcwE5GWC917hDVwUtvoDWow",
  "key13": "3hA2ELkifjN2uKyj4KReVZ3LihYdJm9d6jyZZA2VW1MRmeaavKJz81FVenoZ4M1PG9gbwGUCdkjenWpwuiAu27qN",
  "key14": "5c5wyk26FSnvkmm9rFRm1Td5YYbkdeP8BxNgM8UxSv6EqMP6KnCjN5q9D4wFnETzgDfnkc4v511Wek7ZbCDvtZif",
  "key15": "M2neoenfhs56BYdLS8BVAVryrTMqUPhjDAxCmoWJCVzYiRmJFEDmf57KcrGxFutNhDY5bX1MTmPSa2Fhgzwbdgs",
  "key16": "Z7n8TqDJ7iqkJqDxVDLkvffUXfsehyLj6vfTxo7uth5xiCsjVr8mRQqxF1G8Rakv4CmneFoK1Erp7mfpGD4m5tY",
  "key17": "5dcGPTGfdw3BZsSL7GEMpmeqG41K5Wjhcg1is6uHRbpxzBXwUqunUZ2RFFRS41v3jaibpaF56BoCbJNU82s8jS5k",
  "key18": "5n6QNjMQsqgomXQKLnvUFxSTtn8cdoA87ahMYDLhDuoTWmkSHAtdDwS5qEJYBxFBCHMpauEn3ZzgsQB3kxc6TYVg",
  "key19": "52XqHfFp3WzHHnHUrQ1tkBWKeLDGi5sepv8J4ZBKedK8e8FykKSvJXAQMfwh8PL1KXLAYiha9ExCo7Jee9HZgJa7",
  "key20": "fWhV5K6JcYCmiF7aQt8Hq9id7AsmMQXaZ7A7q3fZsskVaEg1kTArPB22L7qwpgMb718sTRgS7zBtdz57SbGETju",
  "key21": "5ERGCrWvoYJwdanPdnGZp17ad58m2bzZysLU6gez182UeQhmdGwcTFBhdwMRHWtyFVJF9s4ui9mYLXPT6Wo1mxZ6",
  "key22": "44fc5uvcvPUCz2No7JAEoJsGJuSQs1X9hbBVBtXMvwCTBoG6f7euG1KUsPoSMgPCkbc8XX4kcNVio23CCoSXhVCW",
  "key23": "579yWsMnimR5SCqC4LCTaHsyGq5d6nrh3hbevdAxQX3M5sZkpT3kLuze5jav6dBy5eGwMHxjpvTTuiBW6Jx8hW5U",
  "key24": "2KGXEo1mdu592aSPmYbqpk7cBdan4yGBPtU2rANLdQeepze8F1NukbxCtg2iPAwYXBrLLpXfTwdPxMuhzoCaMUiZ",
  "key25": "2eirvspYXEi8atWhhaojRN8SziB8uRW3Mwcg2PrGk2k5BR9bLqHE8mKNL22sSFxyKbPF58ptERU9Nf9sjDRd1Wza",
  "key26": "qFgTVS5GXzJNAUqrnYu2zNUEJfetKqrALNWHWSvMES7jferCZE8DKGjzfiH4kdt2AguE45wiXMNtLVAwBuhjbpM",
  "key27": "GxyQNyFQugM84ch9iAVp91j7RZB5JMyDP7biZC3UZqqSRFu7geAe2yYamFgGMaaDj5Rt5bGeiUBzPPdAXeZrAR5",
  "key28": "47wTQ2b7gapmLGJgpmKu5UBmpn1j8eZW2F1Sx82sUAQ55notb8SnCKn7s4EtoJbEB2oT3RK88pAwuVD32sHE6zCe",
  "key29": "gSaG2pMB4uXAeebvu3nopXf2ScjETP2v6kRjeNabKxFUA4y58y5S9mniA5cC2MiciiZQdR9NQuREFb3CtxESu3L",
  "key30": "4XzxtvfpdkMjUwETLsFSvsjgfp7B3g3h5wczRvz8vqZmDcSJbVFcmt4jLQZTzdGeR6wSwE7TzVA5z3YCbv41Lmqa",
  "key31": "3SVDfLM9Y5gnYP62YYmqvmBiFm5tr9i4jLuDHMvE1UANdFB6sAbVe9tvemmAJnGKggB2DTJfWh2MsQCcveAkkaCN",
  "key32": "358ZHDTFYjGE5nwysASPz3wr7baNaJfzVc5G73vfbs4oxuzpWEx3HrSjDDevgtHEDEMi3538YtC7M7D4tuuWSRUW",
  "key33": "3saapQrHo8RYysgrDDKaZD4morj5JAkUKbW15fkH5DMxBvBZYpvdyEvrRs4VN77JQE4u8EE57vvoyrLfYKJPa1iR",
  "key34": "55nDLqHTMJAojjaVZasWUNsVkirLkg9DAMZoZaWVGwvvxv1axNZRjSpV544n5JDoehRKuTs1b7aTL5yom9TuY2a"
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
