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
    "cSxWPZWR9i3JLpneMxdjV3BTJXePqzyLjMt2pY4pBJhkspfzodzTF9cygfoydsQccm3FGUuRLe8ueuLzhy7fsNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "276GwFpwdZEm1pXQzPdjVRfFU65KRQAQSBXT2RhcgvtG9JbDKZkq2vsU4qUmDBvpUUPSVJXxTnDdtvwcxjU5inNB",
  "key1": "3K3QcJPLJj2P1uHF78MBnK91fn3TCw6Y2quaxq3tkVTT1f992ieUec33wRHFeWagSyNQxhQhaTk2iWGy2K9y8REr",
  "key2": "5mz41b9Fk1HijPR8NrRnjQxPoCASvjHaiG1yrWdupVpNbLG6N1DgxzYd9Jzt7jQ7D7gSm1hBksvb7MGkZkkfP6XJ",
  "key3": "2Jj1sc3RCnaDwaQSebURpHpLSfuZ6b5A8beF2RmPxPscrRbbSm4uAXykTWjk7GBMfJWaQemScnfFH9UCp9Y1y7Zh",
  "key4": "3hRsvTNotBm4ztM7jp7dhCmZeZ7ssXW25E7KLwefUakMA7LmBGbcbpj8Yok4E8WN67ygV7jCx5xqLxsDmBuzFBXE",
  "key5": "4QqCAHF3qdV722cspS8bpaDigHHe1DdLKXydE5APoT8b9TKP3TWuVusEM55tBBhaynBJeHirGCt5aHK1LiiLQDwd",
  "key6": "3eZBVPydcUF4sqZs97ugsVGtJWHNVp8y26ot11YQsPCCxZuxakimErF5ef3umkw6sy8KcQj5rr7363QYqr4Vx25z",
  "key7": "PeQ192UjDKpPSXueCeyRtHgnWLqemsXLhtsMWUbcVaoiQsu8pDTeyb1sDcVui2ZP2WViGZ7dPf4HFojrM2PLh6i",
  "key8": "4S49pTCZwaRQM6wNj4PCqL57PgYK5yiTSKCePMqVurogumT4CHEoEx22hQ4EBxfAqgGkHFCxf9VVW1NTGKYV5R5y",
  "key9": "52CmL1SDsVC9KRMSTS4SKXdiWPvKHQaKgKLWDoU4mjghjJJF8h9MU2BqUxyvfCCY25jbtNekuBkX3u6C8aeDno2e",
  "key10": "5EVfwyTYinvzpwuTsJqaXL7Ur3sUDDy65eBo9NU1ZxLeVYA4skFFzdoyNt1cPGb9uB33Nz1GLwdGBa4CyJ9qkZJH",
  "key11": "67HkBFWQLZXZpaFVqL5rBMijAUExvD6NSDidWQ2Q3zzzFrAhQd1tpqZXwbJRWHHcJgXJzTCxngN5W6Q68ftAop2b",
  "key12": "3FU9NHMwpJGeEpGoz7zz9X6aYWsyiSGg6dTvptwujtQ2gpWGgSPuvrqGMG8DoyZuBsyoXNi7UgstY3pPt6GohRbC",
  "key13": "5G9iKUPwHmKsgqZXBiLE4wu7fWn28ajcp37BpV663MpWzLAuL2198dw3a6yj4qhZcRpFzg9tFPPNQg4ZP9pitS1f",
  "key14": "63KguCwF71aqAjpJCdFhSTZ9WCZMEUqUdLTPPjy3PjjUkb7SCcizXesjj2Cj5PSN9Kvv85eNib4FHVC3spQ3BvDS",
  "key15": "4N9w1XUMmFJibP7pjgC4oMWLsEnCDszjAbCcqv5wuSmE523ckVDkf6cmDmdJJcdrCPNt7SojNU4rrxTJYJYw2Zri",
  "key16": "4oGZ5ziKVxhacB57mqvnikVRHnpS4Rvhkkj8AB6CzqD7Zqxivd6BeyqDcg2st5X4NpDHsovwGw2uwC3vfrRhah4G",
  "key17": "3NdAqC3PRh94q9ZqkzRL4juwNvoXcvspr1Q2cTyha9np3r1YmAKsnCEz2Jtgkh9sqeUxo3Y6NNWjRMkYG9j9EG3k",
  "key18": "3tdUhE9AZUGef8dQhzYGGrevcko3agVyppaSCKJSyXdqukiyu1QU3PsY9huNcezCZDBam7zC7EEPaht2jaZHxKeh",
  "key19": "5MUyX9PUNmJKLpKeQWCENwWo4SdUjEQjR9nMVLa1vBPdN1EuoeEyyt2m2qPWyN9t77Wz1gK8Gw7BNtVvpEGaZvaT",
  "key20": "4Jz5aq2ex9652xJ9mtK24rYWSJ27ft7Y5yMnpxkfGtNPDxxyvWyeBXSt3HbLFKnHsQ1tbNCxG89qzwLqz1tuG9S7",
  "key21": "znRSek2uRfRJMo63zuXXQA23HSwPXaMNKxUwf8otopkVjmhbzJ55pG2mtA51xMkxE5wSLZq2zmKQcQYNFBAzVe5",
  "key22": "5JANrpw1EbGkVwVSfxX94zQGjWhcDPvFyM3rsNG2qa2T7JqjqWcMhwvoUfShnSWxt6gc45B2tDpqzzFeBPqrYDxL",
  "key23": "gErr644zaGPE7fnCAxYEawh4GcBqdi92isxcQxy4pc4gYnzJCEPrQ2CYnW1MwenbjZDprkRWwgcEvQHLN8tJmaw",
  "key24": "2emoE8pwYhQwKKRk7mZHdwAJCz4ctJpn5HcnNPgg4UxRozm32DMk5A1T3QcMn5cHHC9n3NFaP4i7ZLiL92ZJW6uH",
  "key25": "4v2sU4MKegviWaRuk5CmqBuR3Psz9Gk9E5sh7xA1awh4cyjUupgxpQSUtcHDueiciEDxed9v8d6G67rdo6oU1Ruj",
  "key26": "5ogJesgwEvB7yrB8JDZxk7TdJ1UK8S5LALxSzXLFtnY2wXp5q5aKMRxpRJvrCXHwCFhjaSWWfVHnPHiL41mx39rD",
  "key27": "5fKv4n8YbNUcjJb2jsz8RuqonAKrr6vU7fdjp3ykqvaJwJLMTcMijPBNaw5SSZzJSZCyXnKmmkWAhiH4JMfPDng2",
  "key28": "2HNZrkFwM3XXY5YRBHmFh3Ry6eNq4uQWRZUkPHBUkwWebsYrB5uDTRuhovfGZ6Qwde9NhwhGPGECiUUF95uoobws",
  "key29": "W4iRYscbwC57eCagRRNM9u5wDekNK7VvECNrJ6Aimim7ZLe3r4uhQ2BiXiK5L5Z65L3KrHTdUa9CeWGr8W23aUf",
  "key30": "yUTSrEFZnEfo8fUthfrgt66QwrPEh4YM2RNt8s1G1RZ83LvKEhg4SK6i5PKyainWFRbHp4YQB7Le57YbYhQ63Gj",
  "key31": "3Jnoiq9F7eS2oE6BGwcqYaDbvVJRaxah8UYrQxopVH2p8hEFj9hBsYTdD5X8dcid3VadssBa7SbKRG6NdMghkk2M",
  "key32": "5JbiNY6XMSJZNNTa47ojqJtfV1RUgCxE72wqqbCPijJHpZVb8o5d69o4xBoD6nQDm9kFGQxKbRoGvZ1wgGY6Wa9K",
  "key33": "2VSmCJDoN59Y3JZgFGicYDz3ShPp5aF9x3yh5jW7G7XuYHcbDEC4EasLGEz1YZGfZLD3bf3A7mE2qpPpXkoBiDYX",
  "key34": "4wdAa2Vb2QWCxQEZf74366QKLwVvuaMfzd3ZR5jPbvLeN2JGzBsb2hkCcNeJj7Q3AUGcHfgLWYtFwbCNKvxS9V4",
  "key35": "XNxto7J97rByxnjuvsB4x3iwxEdfrPiK9UnY3Ds4u7rX7brsDwVA6gi3YF65NZpZiEaSpWMwQaMbCvBsWBRVjHc",
  "key36": "2rG2hWiMcTr3W5q4226HqgPqSH1EFh2FeWhMxgaPkKumSvnVbpoQoiCVrmgEKYhqnKSsL1riqwPSJgb1LNcrVedi",
  "key37": "4XmAdUd2EjxXD4Du2XVoYqUPy2XonX4CFzCghU6JP7B6h4bWeVaK2EDS5bLbkS5tvpWngaAzu5C3YrvLjc9QW3Hu",
  "key38": "HSWaA2mpq83NFhLasLsouLgMcbN8exZU4NX2o2PaJWJ9wrGY6W91MjwqcuY3c2Yzw67mtCJ4hjcARn2T6KPDXtN",
  "key39": "2T57MRJcgbwLQdQDXDaoTdXSzoohQKx1Z1XbNZkwvxn4XEBR67Dps7z8iVDevitWt5dXeJn6YzNMEffiwTWLCjzK",
  "key40": "4q1ciasy7uG9WLiNm1ftLk466NEF1eDBfPqxoJyBhDbBPKoD6RDWEQoGgtQYQMivRSY2FPT4eFULppzG4pGQgpXF",
  "key41": "3o2f4bvUokMWm84LcVdkM1DjEh7cRab3bZMkbX5sSPqe4J63MA5W4qrueaBtNfhvpgyVma6GUnEHADgJzZk9yGU",
  "key42": "5dPM8Hgzojx13SjTH1saysVAoQzBhKPVvt98QT2ZYBRiQF5P7cabBWh2gsKbRurgfbqAeMhkfHRvwnQ2xZwa2baR",
  "key43": "5voaurQmxucRis2ksAQ1KidSaZDLjXFrp9JtR7rcB9CXX27mBX2G3TMMGeUhpB26gjVLoSU9pCkP9cXqxpD5a8WS",
  "key44": "EzXehPtxsAs7DraW6U5wT3BknLfcPRSZXSJcgjhJ7pxapNKpdVKCQMczJGzdoAyHQAHpoRNsYCXQexH2Hf6mwru"
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
