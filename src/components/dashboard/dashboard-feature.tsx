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
    "5GgkDAzcwHKTddN3nTPLxzMmK5Y1UUsfXaN4n3JSDTEdTDDKfbwpWh7vhosFt6yW4vNqJAqahTiqLtoSUxxcG5YM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZtuLEKU33uSFD9JxmuTDDSz9oAvp8zKWyuXAXwuq32mahhkrvbvo2itWt35x4dd1g9SMVZMiq1AvXLo17hBMSkF",
  "key1": "5hW94AFkQuabNNYafcBt9Vokg2F9PgVjkHStez8rUhMhpW7mjDcBMtcXTqUxYrnPjuQq5uiwavS85XTNb7dfUx19",
  "key2": "5uomkUd5cGrzcgaaHGNVuiyQBYwVbhXnW1pUKi1YM7ABMJxmmgCxa43aW7sYztL3DEVzgM2YhLKq1p95ZHoYzhRw",
  "key3": "4XZcJ3k56RPNs4siSB5j26brEfvwsnUQnyYfeqEaJZGy5ZyxVYQefaFVp8CzYEAJrDfBwhKXcLxteZL5Qh8Hknun",
  "key4": "8K9HHXji8qhdgsQx82sGP2jRASDLS4iCX9wxdeZMgTNe4Bv5oVDZrqxcEHwpbKBPHfd2vcvm3ddKj9WyxBb4wRc",
  "key5": "57x9ZoMm1Lo4NeaJ9NgoT1NxTh47R6kvLdHeeBu4KVfZtShEEQZsWbShsTXVFpq5Ek7EAZiEKZdEhY9SaoDTvQW",
  "key6": "CcqrD8PzTos8J3jrb6EknJVyQELWLcY22aqCzDzLHj3NAso5KFRA8SfkiHrZ4rVLTkiqta3oyWcFsxVEuzJ9Ciy",
  "key7": "2JYSUb51He9D9ChkjwcQrKZ8zf5se2TzsSt9XgBrrmJPxdvQQWvJE6rC2dB77ar5zRDnKMHbU4ZDBq2qExjxLXok",
  "key8": "BTS3hP2VNHb32tNysXSnLNGLQLvyHg5DTFxqanWcNgYePiioPa2v2BPqCUoqMytViGWyEC6WZgo9Doow17Xus1M",
  "key9": "42bMyjo72vSHV56iXWQyAB7gVybQo2Vy4aoHdbaxmSamDrjUbJiE7xhiq7144htmR1s5VuTQ6wSvuZgnssMzBpLk",
  "key10": "5DhYR6uDXe4AAjLetuSDTGbLk4fZYhPxLYhyycYijmrupztXKMqPXqEwq8cN7wbiLhGTjSYVGBV41dTu5KrBPXfy",
  "key11": "2cQdS6utsV1fBRUcBRGV8SXSYSHowbFPrNABgMif9NVQWQSWsz1QcasVJYfbs2RniT1s4QijbUsCd88PsjRZ3bB",
  "key12": "3oQDWAV2wGAnDnzHBFUKf7orcmjofrPXEZzAgkp6kzvkq3V8Cgba7UYKuraxpwrtCUB7MhGNxGK8zhdqiz8NLEyw",
  "key13": "mM9BUxMGBBVqgD9YkHc5cxYrGGsUja5sr1w8QfXacuGb8JVUX9c7iJnREnbbcRKAqLfb6pgRKT57yTZq5hokTe4",
  "key14": "5nyxYS3guJhhoXFFpTku31di4qSbA5AwKKyu2ZGoEah8vviuXb84Lgcb2NnoaLvmuHvGQChTHX5WjEdknHVLXSLd",
  "key15": "5mTFg4uwKcACoHpZAz1kCRkJnbi9d6AoUr384drrLTT2jG7hgFZNNtGkxF7uPgZBuJLCpjn4L5bh4zs6pwwBrTSp",
  "key16": "3JbLmzD44PotrExLBaaj7zmCiWPkBsvafVJg4EkFvtoLGsNAUgRY59QxS29KqYTzS2Eve9Hs8MzgLHatZNPd3PdT",
  "key17": "3EnmryMvzwBBGtEnCASpnnBj7SKPo9a1pHMmUbE1P1LGcqoSe81oyPD3NYyvBh6yBHS6LAjHW8EzzNTtNSvM3Zgr",
  "key18": "4mRBt5zK5snFK741EX4cAEs127GqqCsVu58iEd6Kphay9wQSmyUmor7R8tVq1kNYsFyYaa6bkqh5GX4XdpGKznkJ",
  "key19": "4WZesi498eFjrVYtyRCC8ShpJaXpGXJVrZUaCPTWgDy9Jf1TuSqJ4voWgka9pdPauuHJrnwxre5Bn68G6TeNjx8j",
  "key20": "4p5J6FTc5m5sJwjZyZfuCeLbWypKhA4mhoztLUg3CXeUUpJMHNCEoaNWG1K3z9EMhkTweTmUmSusLqsM573oSSnr",
  "key21": "2H8XBT4YGSAMWm1kUoDrtVWwZby3T99SjBcWSaFJDiEpGTpwN1Yg5wZ2AnkiVof9NJcnYoPHLhrE771mAB2r8BEV",
  "key22": "4o69NVXiqJC7tc9Hsm46L4j9KDtfoa1VBpZan5V6uEKVLbkK3zCg26dc9LmeLynV8MdCvgK7BgK5wqFNzDDQ3yB5",
  "key23": "3EDELuwWNyk5DuRqCGXroASfbGmFagZAKr9P3hQWbXT7dGBfMT8HbBYtjMFgfM5dKHnAS6KE9EpMiBVTzonUCjBt",
  "key24": "4wJFjr8aU3TVUrKWavA1FGmV13rVP4CsXx415HKxLKKaLzjdAJ5jrKPkgHQuajvKKVWLN8sLp5YYMtMXubQZnNj4",
  "key25": "61Z9iUP5mG9er4wLQ8CtAD1vJvTsUD1TqkMJaXKpGfNVHesQA6o9pZmKzqVLAdou4NHNtwqnV33V8tedHYs9PmVE",
  "key26": "wRZXBWcEJ6RrtftXhkzRe9aFkxC8xSxHVg4ubsbYMM6yXhsHnLimpfX2J6wEuLMohWDBhXTCCViSCDvRoyjETMN",
  "key27": "4oeqoNpVr6nkNaTbAGJokgnYznouAC2A9wpoTDoi6E3Ae2SMWc5ECzwgvC3ZeSuv9QMmGPRdqmFMkAdPQ2QfByfU",
  "key28": "3xDXsguoESuageuq4RASmHc2buNdfSd1n7uaYN38tK5FaUq6mxdyF8xDbqqm7Usrft7WTu6Nb5sv35owjWv4x2cv",
  "key29": "2AJgkn1FpdspNkn7k8AMBHRw83viESV96T68tuGeaqxg9aFfQEYoNBZcEyfL7jiV5YXyRynN3SuF8oEJx4FtUQj7",
  "key30": "Y6HLpSFy9eDDj6t7yi52aNqo2qaMigezaT8qNKXbfMwDbf5uU3BWcpnPdnRGLoRoxehZXLtXGTqz5K91paUic37",
  "key31": "UJ67r37g6WztBFhH8NoyquTzkRP1A6nhRXZHsSRTAGcfRQBA4QHnFWFBjJdWbnbVZsgPJgm4zacrUW1J7bvM24t",
  "key32": "5hMNnBxtMoXV75fDBTv9rN1cF6hQen8pZJuenPBmfc9oiJb8xD6cWUhsSuu2Hx12zyGpXaPcANRMiphB5gTueGWp",
  "key33": "4vSFxYX1kwnBwhwGfS5QpdpFWPeSgQY6xEcdWcjv8CJhZpdKpGRzyw2Hnu7XSqFrygrBdiFP8UwXVABFw67mh9Yh",
  "key34": "2TG7ez42DBEqLFha9dKY2ZmYkxvEqKjWDkpUrdBYNYhmoxwXZRZKBUSQzfT2JukgehzUK3XabKTFi6ZjmFqawtvg",
  "key35": "7TkMjeHLBtP5MVSJNz8fuL7oWxwc8YBz22GtAZ1YMdLyN1S37UGQcp7GzHK95W9XVAmWsJCghKyAJxGw9eeuJC1",
  "key36": "k4SV2yG5XcB8ABt125gpbyDsGtuBvDdyQVQjn2PXRbRKYQQMS5Yk2dE4VEDks7p65iXgs3ofFdq5aWJv4DHUSpu",
  "key37": "58BafeHF9C4upED48zajm4gCqiJ6WwKmGmb2KFYQp6V5bqs2BNWVsypfQdxkEdRHMiiXWSTvW75LHhCAx3JbvjJ9",
  "key38": "wt8WD5xsHgDu83yZqfFWH1ahJXxXSqJ6ayNzWGByWMK6qoXNPYFZkk5LQkvjZj7JuobKi8omqW5vKf8KeZMtKR4",
  "key39": "2KMVC8Jj9uGzpM9j7ZyRaa3Jko4jNrKR1rt6xG3NpsMXZEeN7p4buW65D7x7G7cUVme2MBxLGGadQW1MHPsRA4e",
  "key40": "4KTz7C8frenPWXiL9ewRfwvSv6F2tah3ByuDUQGpe7KmwXDtd3iN7oaw7YxNiwVMm5sJy2BTmsBViWNHMfKo465h",
  "key41": "qz3jnhGENnypfuR6BKahiaswFtcdisDToxx9377JtQ9gDTVH9DiDQesD4FhAdnmtazz5t7EGnM5Ypy4HwDDEiHL",
  "key42": "qxRQgyM4xwiv9q9vMpUW8WLmbSiHGLNafSEib9CxXkeqg7wktqH849NmRdkZXG1y7QvShDb24YXhR2yabd3DUoS",
  "key43": "4TJpiHBEfDpdw3Xcvh4mAjDUdq1ycwkJm5ax4Mf5YjbYHcpGKHDJ3CSPQJo5Me7bhxBsnx1DWhU9P5qgqHwiESfw",
  "key44": "5aa7xj9kpxXZHD3ybhZnATVUCXAdnyjrsw7ymcZE7YktGGHETTxjYtSxFudYQ6kAcjSRxvGeSxjbtAWRmtgciiLu",
  "key45": "3mNeUN7xp5tvUzz4eibqsHie2NLhrA7cbi5FWikL4RE5EMa1ZbuAEEY11Rm8jzMhi6XPp4fJqtyu2WQEEznyTKD1",
  "key46": "4d7YjoscwtScaZv9NbiCBezQSxYGNNPQEzTW3H9ivib1ceUJLky6z7r1DnANs41XsRdJBp7aZ6ML5rYjxVcxwigA"
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
