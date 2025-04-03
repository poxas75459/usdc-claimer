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
    "LSaFkSCsyEX8XfV1dikibtH7QLYCwopDV2F39JnGWhzY5CzB7w1tCmPKwnozRWUv4QuPhZoRiD5nQFc3RAGVeCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zuv9LR4LhyUEoMHQX6RQVL6ob8m3MtbxxF7EPzirBP4RMZkQT22hyG6kJSsV7rL2FXnaR5yrCVYx1h4VyGaKLow",
  "key1": "4oVkrcykuoA9AE8jBVncZKKCfW2vA5zYhm2tKGM4yaiL3yokL71K7TtM3xX2Nhx7vq63wpFmhj4fimpXtfqwaRLy",
  "key2": "3JMugEinKS5QStUFmVcgKCP9DoLmXugAAcMUFVdv3H3iXTVDudphT1hFm34N5QvcMk5ohyQSg2wuzsRzmssyM7oi",
  "key3": "w2kMGXK9Ej2RbuHxw9uV86PGszLBdGUg56Ndw2huYGHqA7fnYbq7sTMLm3mdixXXxNgZyGML9DpSQ3aCqCb5ET1",
  "key4": "fwDzYxT7rEdrt1Sf6KB9t152kxzV5N5ov1rrenDRU5SFcdJVoowVkAzVoDsxvSuR4kiyHNoAMyZ69DU79dGhvVK",
  "key5": "52q5bYNw7M9d8nEfnBJdED3JBS5TSUqtsAMmQSxtpd9icqoT7yLhtFn29LYMd6pQpA8SEY2YbGLuNA3Rtr8h9PPY",
  "key6": "3tU4L8vRhfyrCdeKU5RiEgwVNWcuggQ84PcW4JVvNWJ1BpYY9RGSXuAisrifRHT9JiScTHrB7Mn6fuFTzyKnmG8r",
  "key7": "2PiRvQG3hodLfN1BKgoKRVmg4FSoyP4uDXXfdkTKdwWPe8yd3eUM8Q7zptJhtvNvKEkYnpNdz3g7uXCa6LcUN8Dk",
  "key8": "5qSa5zcr1BXmtKStV4yRtFnQiQ6351HKtZMvHW826wognh6iiXz34Lt2bsARKf7R9GSEJWFCTeeT95K91m9NC5k3",
  "key9": "3wCu3rrJm6UVnua2mxe4qP38251qvXetUYoMVvinjQgwb7XR2kPWuabnNZJRj2G6cHurcH8PYKAUQQ6CVT9q8SGU",
  "key10": "3iyWwUqCd8EyYuYvGn7BqBtauP4HaL4F52mytGSzksA2kJDF1XCFRFVHMvKZdmpSHo8PskJ1UDatTCTYmJW5wT2a",
  "key11": "31aAGt35cVabmaJgViKdvoGTViGdrT12766HTUXdwhZ9j4Pzj3yVrLakqPbFKsMHdXkdEes2XFDCpD5mo1tViGdH",
  "key12": "2c5e5heRxvCVfkzQmex25Y5CUU3dKegNcYCXb6kZKmvCQ3ZRorz84CPCvMFa8PhvKz4FdvetUYtspvBU1L4fXMSN",
  "key13": "5Zenhmt8SvGKcTJKGk7rvoL18JqYX3VH92p6kW3ahNSuAhHytfffLnr2wCdtqQsKnbxqHrdDpK3mcqooETo96AZR",
  "key14": "4VZskrpiAVYQKPonJVs8ToZoxvbeZfsufj1ZTCHYVz3mE1GvzCPt9jE1b2Vmif13J2SBFGozW8saCuWhFc4ZXSd7",
  "key15": "5xDLYDqbueu6f8GWCt9ZZm7dTviDsS4xsCLQSe6QpeA5nNY3sWZzKro9VMesJHkHnpAu4JpYK2194DqAam48a4mT",
  "key16": "aZiTV1bNex8jfMGa4Lv1Z8hGey1oZZEDnG9WvssXckLwUrSLMmZkUr1cpjAUcPZCr2fqdjX9ovPyhRQNqBgcWnR",
  "key17": "4UTRUHFGcR12jtHYiPUvy76fLiZYRDnEfxidSRh2ivjfF5gV5MHcHKNDc4NrCpSZUx9DFyCr6QxEDD2eWXU4jzXf",
  "key18": "61edWUrXUvdyxYDimoXp6STmJRufqDTAgL3ckXmiz1JcWpzttNgr4yejRa434NGuX4pCcdhnCp7KPFDNdn33atLY",
  "key19": "2HNseyEH2BbdBVcxW9ALV8K2qS5b9LV5KFmxdLvR8xr5mWAmh4BaUoGiTQSx3aUsZnYwvgbn3UD81YtGEuaB52UR",
  "key20": "MagVnRr68TYptGM3u9cNWDumkSZANohWuT5CTGc58dyjJfZBWKJChzmzd6fDDUn6p5s1ToguWhHon8KC1gwxDhN",
  "key21": "3br7ZE19UuB41rwPgRMsvy3FQkBH3N3A7w5SQzH3qsgLP2gXQTMKdrZXifmr58GdpUEP6QhDCtUzx3nq43Xq7h9W",
  "key22": "62YWZp75r4ynNP15jxBiMk2a98V9PjNsRYbbcqSJCL2eY87g21pK12T9ChQyGZUG1FMW8fUGKQp3ueQ6UHV3XJZG",
  "key23": "5YWvTBgmVqd9ReexbZevQ4UpBxF1HKNTudB5HxuXhpEuTYpz5hiyr5AfGjMwLf59pjZR76pd5aebipxpL6Qwcbrr",
  "key24": "5wWnXVos7GSocWYmuhX7FJXEdE8S5svwDwdqq4ZMZNhqB14YipmmiCvi5mSpm9XgcTfrtAX84ok5tb7rE8EMuXbw",
  "key25": "poD9gQCzEHBG6RSTSe3m3NUYFfwBfvQpoPGSu5ppwNypRtLfsAMDQ8jm7WS5R9DHXZeLpYPg8CBUSEiq2qdswWE",
  "key26": "3WMAmz4cVTbcWkY79igbcM9WZSaKWrWScKKMqHsbK2rTFDNoLxwqjbgXadoxMBU3BCf5HWYchFtPU9CsXkF151pr",
  "key27": "4WDKrepSQUSianGUxTPCufRxBV3R5THghQJw3vPavP9jSrfcJWo4bPYoRi2VQDXxF82ZuwYYH2HnVVZqKqSMceKX"
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
