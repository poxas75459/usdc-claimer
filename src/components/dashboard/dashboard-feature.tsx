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
    "3e7MDDrEApZrdMEHq8mnh857ZB7patE31E6kdgGcXj8nCfc4tqWsxMrTsvNdVabHX7iEt1NdvhaFEeiiPuPi8xqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e6fhbmjNAZ49XtmzghTh8tFFTq8BCy3VDCw9BqYR3uHzXP5frCHPEsGdExGS8eKVpQE71W4V596TwhoEo2NJMnC",
  "key1": "5BEC7Kpw9JmQcRZ2YuET5dT6h1sSM3fX2kvZtr6qwncmbBmA6QGCewAU3vm4Qm54ftkE3sL6grHEjw97UhMaMxMz",
  "key2": "37N7x8wQPfS7JMzys74NgbDzhaLjraiCL411pDEuBQ1kf8rYEhaFZDFfLUjUZFBGR7DP3sJ1rDfRh2UvrjQZ4Ljg",
  "key3": "Go3CfnzhDofvrnUhh8QzfKgbp9zHZM4USGwe5KwVkrL6kJtWpFFV4LFxnu8sgDKYum2J4qtzwJYDgPeGUYRE2Bb",
  "key4": "3JjGXnsPawL7AEAcMdzf6ukFuGbRPX9speFv87znUjNS4Hymuy8YFEK2ktQfkxyFsurge6nJx3mhFeGpGiU25xyt",
  "key5": "BHGiEjwrLFdswSBWqoDEHRsH58CvT3u6H7CtLStsPghtgVMcL9rxqWzJugt2UJ9p1BmbzCZ3pctNW8yWucMKsHX",
  "key6": "5THkENXmijEt64tzamSzmCipyH3gojDJqbRdBCWFNijP4MYJQrYZZGCKnoRkjxTB3d7qngk3QL9sjWLjCMsdizQt",
  "key7": "uE8chT1323yxMb5LvGWJzN5nYeuteAWNJRoc5ojzAxgs85qRrq5Ui4duNsJtFhXAdtXsmkBGXeiYoKDo5m39u4Z",
  "key8": "65ZWiEBFAo8ahVTaLmKYGaTNFw3HA4KBtGFk3tZgphs4ecqn3knyzC36hHA8tkmxnR42cSGGaFhip9v1npCttToC",
  "key9": "KKcbgzLeUDnFxBVWxrsGFMBWxeCW8DjR2K1Se22Q92TQUY4d8P4tAQ7zURJfoRL1Ruk1KcNE4E2aqBGCUg4MFCz",
  "key10": "5XS33VoLcoR9jXxTmevnSrDMYSWh93XJut7SfNjYT6D7KWQPwG9395qgkik4kBU7xcZ91eTcCVSswAuosHSAzJWW",
  "key11": "VBmQ2JDYqQMeKJCYDNBiPv9QSRyoGeMxD8Hzod6QCQA9mEB3qX933K66nDkJcBsXnwLZfJrAjABPByAcxdpFFJo",
  "key12": "2gT8Mvsw8vGsZ57mKnZrKCPNS2xmdce8P3JdSyZ8jcHzPgAtpLzELkyMr9mGtnTj1tZojrMWEt3Vu7Fxt6si3cha",
  "key13": "2AcmJXNgwDXW5EHwRpaztsvvP5hgbT4rN4AYZXLGgqemy3Qbv68cJoSamvwC5zTXEHhENJCdNzZCNaYv8F2FojDe",
  "key14": "4o7cKunuiT2xosxMg8FNgZqMJsu7hKbLA2JV3rh4ug1TJk4D98QAcxvkKeGBMD3gqcMky4JuU91dLerW9JvxwFJV",
  "key15": "411nnUc9j6Kd157k4yjMjphChymq1ZFwoxCVVwkr6sXqwtqGy6jiKVQCC8xJ2QvZFgwZ8B5d5MvaRrZq1CpnfMpk",
  "key16": "JZVmw8tMLsebJkzNHiy8ukps5JMRa46DjKhK63FyEfnknNtA5ER6NZbxvVUw6izK1aXnU5q39dReye7MztPQLKv",
  "key17": "3KEwZSjy6nZHvibVWoTDVNGUQjiJtAnh9CtxEvnWeDkz1gDgqAaZ3b8ZsTbGV6ZWDeQyVQn8XvRpFiLNuYbqFDY4",
  "key18": "4ewziLZZWMJttFSw2AnHcmg5p4z7Z49mmTjJeiYWqCAFsjPs4E7RGgoY4s3rd2oydRYwsReWCUJytyQmu5X8WhCL",
  "key19": "4rQMekWkG6dqrGcZ6CCE6359pNsEPf6hKnU8DwpBUdT7w12FbJBmsZ2weGLEWSpcp8yuS4Geurxf9Z5amqHHpu5b",
  "key20": "5QCSAZjzb84fU4S1bgckJ3HitjU4DMWJNqRVyFt8LaYwdB4vybX1P874xNuSfa8jyEDhsU9dwdSqj6eUdf3oBsnx",
  "key21": "3fEvC982mFYABEwMaH95RsRKQHwDeEbSksiGLSE6W8Qi9SnXQXuQKKakxQPcbj7PZGKE3RjFTEhGUZYSwBqxw1JT",
  "key22": "3HFmrFwA1bdT8GppTvikMFB19cm9xxw6HvP56JowReMPTN41Q2RLszXmSwWrPhEWy8Xiowy38EJTLaZimc5DTnTu",
  "key23": "5VJUxGoszKotqohUDFn3dusAmYU9hQDKJ4XqoRRubKX4XccxuJt8wSS4u6gNe9dXwFW9QfUT81nRkN34JM2DQYev",
  "key24": "uyyGymsxS5HhmxtmjQkpGr7PoxpmitRnMiV56JnzGEcTNnvkPFYmie9NiiBx36BqeegHSpStdWmmntLYAiEe3HX",
  "key25": "4GnRMNHm16AbMwdDgKDNizzFi5NEssEmqszT2ZWQBe26Ys7aqjM5E5nN7afos8UsrMYhbzAFVztBzFwHa536nLkh",
  "key26": "VLQYTQmek17N6KPr3p4qa5r6WcNGoe3yvEAaWpZVaLt4MpLb6oNMXwcJEQHCqwexRLpczGapRVLojtxeaGQum5D",
  "key27": "29gt5nzs6vNCVsDsKGj95j7HA5xqoCds7sgMqiiHrisQy9d9WdAzDgZYwqBCy6HS1zx4nmckG6obQxYJ52SgNMfk",
  "key28": "K6cYftJEQ9t1EhLZD9k4crYxE92B38pmx4cAYbu5euiKRPo5DKwGSwhxAt9yTWxakVck6EwcCEb2VRfLCfnYtHq",
  "key29": "3kwr6VLWX6wnW1bZMApHb4RgsHLSDiiRf4gpwqe8r4KQhQyHrLcwRbVEyYrbWhKhgBwQNrjiPgJD7EDdQiRuTm44",
  "key30": "3m5rikXAjdQZqocq7w5wZ3kAoHgXEb9V9DSECRB5qJYjGNJpqcZDAW53UkaGvphXkd7v2qgLtNtjkeXvx1vFfgwP",
  "key31": "Z18jtB5EP41WsbJAFWH4MXmYXczYUkVW1J1nZzYb1PQjb4eLbM7Po6e7XeaBqCmovb7MJf4pWiUJMtfDKpYQaHV",
  "key32": "5pdMzH6BhHdX2bhyyUHJEN7Nv2xbtFEEhsxjq383y16doCjoHsB6PAMGYBYnyx2Hb4HVxeAa4PCnDhXyiqsbS9PG",
  "key33": "4w9hUGc4kwJfShpTr4RsxkdrhNaGsZPLEpxNAaXoMCAbL3kyX37woCkmTFFm5vLz3EMvtuVfur8adsonTKuceGnC",
  "key34": "4PMLKMAi6r7iEMdat8wsGvE73p9WFW5jrFrHrs5J495R5yfLZQSPWixDe7tRsfGBAvtrBZhXo9SnHRezZKvLRZA2"
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
