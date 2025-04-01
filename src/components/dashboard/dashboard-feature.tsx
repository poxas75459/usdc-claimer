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
    "xf3qkTchMKb2EAmjYm6yVG46FAtn6f7Vj9wJEVxdPk6k3wbzEfgvxnGS68wAf3m5pSj7Pfm5EMvtHo9mbkTXr5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RbYZsNAKfvBm4bhnyhC2zyahPJgCxsgE5mQcSeA6sir6t2uHMYmKBZyADcFkds1CueXsFJmMKvEgwfMZoT9fxhC",
  "key1": "GMKTXAuDb3uFsNSutAt2o5ceEK9buGBAY1LoAZQjyyJk5vfdQYiiRe3n1Ayo3BrgGtrdkm5rpyJt9f7dmRLkMcj",
  "key2": "5HfdotdYC7rqkVvX58y2bG8xSdBmiZsAy9FELQez4hJyS9KFteXNNpaZRFWrFiYjksBBoMwc5DAKfnMQWV8Ytp4K",
  "key3": "FsD7JZUExEXik6Xuyi6Uam8JhDj5Mrwxw1gtNuTDE6btfFAoFAb4JEXRPheV6vnjdjW3V7YdhjShDyiYvQpkjHp",
  "key4": "5ia3DeDKLiV7QNy2khEzR3oAcycuXEEHCsyKHsFXn3U6Q4rPbkY9UdqXcEaZYMxu7CjNcZw8UqMZh35JHnwMkjhb",
  "key5": "2q1iXeeJA9Sd6smAfGHtxowdX2ZErwvP9ToxZ7N6YorFkfMLhMtL9XbmMDg6apa3KVs7d2EjUnAediTZwEiyQ48M",
  "key6": "5fTBBbhf27hE9HFyZsZgC17hURKYLqhrgteBKufA4ksykzX6SkHfnFBQMWrKuUBwwmvLN1pnxe5QY1SvquCivxUj",
  "key7": "5TqrNBxp5HFebDAspA5LwARKb4W9APY1mMHc8hcVkChYEHZwVWcjZz2CNrs29YNEpRibUb9s8w7cxbMyAD8k3SH",
  "key8": "3F66aT2Yb5oVbDDNaTdMJrGAGnnDvmqahci6vWYxVfy3Phv3bbRrAdQsraeLNjzjtFDby4VJAo9UNk5d9uwmpmBT",
  "key9": "5STQQopVxeThSCyN7EvRgxpcsvgrNCXq9QmJT3oKdScpvaKByjJCph3E9xMjzdnaAF2uB5tBsprZdbBFQpruS8yX",
  "key10": "26PLtZiq2E4cNJFaBrvbXRkAqYbdgZvLPQeLBCixshBk9RbyKqasPvhQSKNh4hoX3Y3C9e315JMj6JDkYtrisLcE",
  "key11": "62uirJNqB1W5W3c8DgTfE1tkTJ9Q6SyaXFmv3jov5cEJWgJ3PH8XQH4D3v6PUBKcB5ZZF3MFJoCwmbNwTtQUKSJd",
  "key12": "4nLX7g5Ne7cfvBG7tQypEpB1qJxNXnKtGcRaMxDZykH9kmo1hquidWNZN9x6mviENzrHeQZWP6A1DV79nHRp2WJV",
  "key13": "21cLozS6vhoV6hFDWD9SV1j5ULWetPihQK5LtumyYEiwUYYjF5i45jmwtfc5jhXcm8bq4oSewYAxZUjHNHmnMQ2U",
  "key14": "j2kPmiFH7e86DwfKWRrhyGmK861vz27NMQa97GXvrd22i2JqK3GApCMybzPbojpyjsrzTmJ5utCxxMf6tXvXfQf",
  "key15": "2wLv26dRzgcnLaooxJjXpXeEcjzuTCBEjLZXZeJ99pZm6S26sHijmHLUdw2vMAHZT3cxFvv8wtG8Wgdew5jxrR7M",
  "key16": "4P6caix8hKZy9RwNDduSbg1xQjqAhA3Mw97eECnosjfjN75yJFYP7FeTU16dbe38aLEx8nra1FvdEostUmNRKvm8",
  "key17": "3jEtEojhw82CTN4tifMgQDDaeKvQcg9Z5uxjeykH3dEegTN2DqiYDtVwLbxZCPdyXyHYuK8wE24CrqzrT46XzdDQ",
  "key18": "4CE6jpUzSYaGRjc7etdHQqyLm94tfzWF8vMNuUb5rc1sUCJ7RNJoyrgV1ktru2tUWUcPMC6WVkjzjTHvqUZ61a7c",
  "key19": "XcCvaXZixF1pPdRzCDwim4WeuE4MfcsrGRJFS5t5FBcRNWuHiZ7kYTjHf4aLdw42QenF7jgyJP99DMAYhaETh4t",
  "key20": "64pfBmYbt9pr4endvkPeJjwNwxB5Zupr1jhzimgG5dvb5vwVJP1gbYcmwWEiNpjLbjHzdEosQmGUDhdNaLNU58L9",
  "key21": "64iZwn1RkbnRrVRqLpnGbDrCdsR9eHZyDdYHzHEge8bFHuSeqSPjnaGjTRY6Jsw6pznx33AfL3EkrKVxRy6YsW9g",
  "key22": "3pZpYuER1A7LEYU3bbToPyzd8fJDk9UvkbZnrCrm8ha52oPVWzRGN3ZpLnBx2VK8aXdgCnWdN14wtuL7vR3NqAm4",
  "key23": "5wL5QonMcFAKTezD7K1utuXrHrPykc8WpGD3XPBCwPiJx7UyyHhZGN2ozFwgSAE4mTLiFSor2LX6ZvkqZBsmeyAw",
  "key24": "21AuYiGSj2J6bpzvZtVrZ4RxbGjSZatJCcKkuYWpoht1cUqhTm1ExwGGdHtKsXjvzr1cugETLvSGaEFDWiMbgWYD",
  "key25": "3gisR2UjurDg4RxodFiikyS47HvHvQkbZMKV1TXcYvq3QKRdPN2jDmUvBJTphgWhTCf63rq1agqgEAWrTR6WeHdW",
  "key26": "3d9Lw7dn2YQkjLtHkpK3MmqfjJE3bpJQNuD8G114QVwdEW2HVubRDD69YApvcY2JR6MG972B6KPtD6eWUR5K12hX",
  "key27": "2oSnrXGbNmCXbiJtBZbaGa745Joz5Uz2qfyghjKaPNzzoQ4BjCttWn35dz3cNNoHm4roAJaC5ALBBn5BmcogTzbw",
  "key28": "2zozQEVv6Cf3V6DdsF3EXLr89rT2f7M56vr8RDwgmPaqfRYpmN2uSBsrh6Z8s3CLqWgQxTexW7Vb53SPF8NN5byJ",
  "key29": "5K9Fy87NA68jaojEfX4PA3rcWXdGtqzYZhaaJMYxSXBdbWLahsqoD73CQD9zDrm3F4bJZXs92Jr3TTm2VBwyx1kU",
  "key30": "3h4mZ9kFLDcvPjjtCRyriWgvBKTS6gZftWRw4gyQtDaPLbrmKb4NDSxrTWqmtT3h1VSxaac2T9GfjJuLVqkFy67d",
  "key31": "5ysh6jZGf3F2ef3Gsfq8ynFzL4nBCSAYnkJp8tr69Lfg5BR6a6T1ZugNUkEH3uEo9Jq3uFKiarvhv1xV3YzP6XVS",
  "key32": "3UYtSpQ7q6yYUoZQqYrEg9cgDXHmKTVfUS3x6L9nMb5YBceFWt9u8WKZjJxwF7qaPWemyhMvP3BEzrmwf6KntnNE",
  "key33": "3CQzzQ5Fd8s478Rrod76MfVEKF2vG1q5VpPqgngxf7SCXXodAvGMA8EjmaP2XrofcLN8LJm1DkfcgdFJSFSXWRsy",
  "key34": "2WwuMf667BqMdVuSAyG8mWYUjVLtLtuLMrGcCDWpaWZQNJ33JBkSdzeQTuqNMFzmmRF1RH9jKoPvXq7wjJs1km64",
  "key35": "mqBFLqi6Q49xF6YuV6TtWxgoYqV7SQk4711nQm3EvoDaixEr4M1Sa9Zmwp1MMDHHhhyDcoJpwicwHGAB5JWxcHW",
  "key36": "2hP4BNo2N9jC2zMxrkt6C8uVfYB8yTdTx9eFSBzG3DCkJfw3Afk21DBxX6KyUQhD39vtZurWLCRcdzGoUuLEK3gP",
  "key37": "2eTWw3qFbh5pRGj4tBDVerY1ceGB87RTM1JBU2ToLsUHxCgfWoBa1QNmZDGomYTSG5fQ4GekQoPZvgZ6FfpzjuvA",
  "key38": "4fLdxxM1Pb3qdoSqW7RC2SRYqy1i2Bfe2xKyEuUgqaNyhXgfCXaEmrkNabkb8thjUrq6JU7Dg9aCgCQne4WanQXf",
  "key39": "4XLw4hbKbP6zf5UyTvSmvHq8pgQjzaNZgXnVqRaJJgf7ZfXpodu1ZHE9MpeZoNkYKGg6s1pzQ1YVppUYJg4eyQeL"
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
