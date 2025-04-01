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
    "4z1RruWBbBxssuPipUUEfcbAgJGAynRGB6uCa8UQV9YDgZ4thKxnQD8gVQvnbLnMDuSPAb23YQ8QY2TtmouMQNKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qPcZRLUxrTr7LvpPt9SzohkTgCuTv7svH5eQbfhFZ3UZZH8QjWfR1UJx9NFFMkXxEPiJhBC1iCDgzZ1TgEdNzhm",
  "key1": "GFZJAxjvSgYTFqXrrguFHz25ktHSgvCsc8BiHHv4GDpi5sdU2RBRuePVhVdmssPAMPkHA1xkd4BBvux7kJUEc5t",
  "key2": "2og3P5asfyqFV9QiYGJSSwjrriBcWAm1xpmRAMZAe7C9UfdRSq7JTxQ6Kz2RTeHvxdNhuEfkxUNsbXhJQWQX4WPL",
  "key3": "5sRqMcYcnUTGbs5ao1y915brrviqew2zR26rPAvHZy1mLGN5TKSGLGsH6Wt35dTm1XH2Wuamn9X2hiaHbaypcreN",
  "key4": "31TaQV8X5sCsE7avi7MAjg2Uzje9gu2hG4jSTgQMxJevCpwEbSQeoxLKuSMWNGzPVw5WfxYy1727zbHE43nFXBPv",
  "key5": "62VJeoShfTvj8bMm4u9UT1MCfVpidygbcp9Js5pz9aVT8WaxS8TEW6Yae53fmc34tEg1UYc5A49SB6c2sPhtUzne",
  "key6": "34GAjYikphhsaSZFX4CwuwRYGgqcXPZUfNkCqKSrw3SfpM9P8GMNzHDE6YJ1G7Yd4fowNoTFWAwek5YyQ2mS4nQk",
  "key7": "3nnfuKrjdJhCSWTmQzL8MSshaU8R7Vr6xowTdZiQ9bwTEp6ocvKnw7MRTKFS6Cgv5gRJR2aSGxc4QjJb1mSNbVAT",
  "key8": "2HukVhN89Kjmq87omC7eoKU1R9bjdgDHGRPkMJtBo4zSXXjkQKanfTZLz3ogRkuHyQshcX7GDJiCgc7TrrxEMwJU",
  "key9": "3TawDyQm43txQfFNdpt3vRb2b5YSkgGAzQw52R8xBZFDNUSABik7sP62B6bWiCCnVdk6KtBmCNscHt2YfMi37wqV",
  "key10": "2UgLSgixXn3SpoFdCZFJz7bwcob5Y9ixeACX6Ca9HFd5jL3ye7HNQf593dMcoprkchGPnk6ryKduGQZwz1YeUgBc",
  "key11": "3sXaMPWa5WMdo7M13mz8cLWnwxJpLBzWRafH6eAzWGeeVTeEs9nCWPQUD1jyXHcue8sk6hhHCtss4hQuEjYmJFFq",
  "key12": "66RUHFZVAuCHQsrHx5BBVtDC2Ro6QYnBwGaKFWkW4NKywDhTs6prL9qw8iqXvucXz2Kr7XiBpCv5z48xbsDVqHxj",
  "key13": "5Y7mj1tSyZa5tgmL6ohifiVcBKgvfgNoCw8BTVWB3rGSK6mhvCKEEmjM6XufNqtw7RLdyWUWkKdUUNaELDEwJRFW",
  "key14": "5N6y1SZeqQtcnX7dQwRwYJdFUc4DwieRuW4Q9gkzS9g9sNm6xMpBweBaXFHMs2wXyVa4r3DjNdXF7Dhx9RLn8qXt",
  "key15": "28w2mD6Lwgao9E4QqZZAmJvDn18w3iixSqPxUaLXxL8pfSdjZz5J4EjQ1DaGAaBU1DimiDczvyvPMZANgvJ9x76R",
  "key16": "33eT2Z723Ck1iaL6Abq9CdJsNnMokAzC2TqxRRZUcL3AbLVakyQj8n6iSedux7kMtxvdLUWoVEBz5GnnHEo6tsnp",
  "key17": "3fhjWzCFGShvYVwhUgZMHREcBBB6FMhf1rpNPLJKCpFxxFeMakJRcnwhTi1vBV4Ms6pH8TrtttExs4JH8YuH2Pgh",
  "key18": "4Hwwj8CBh4oCTt59wfhtTYzVGWSqrgEDLU4MiXma1h3V92WPfaUS4bzzjdSyWZJtEif4AFSmmQpawH4TWS1WThV9",
  "key19": "2FBStxJdt5YdhBnVbJKEHSJKi4ZK1VrqbUkfAt3p16VBP6wXqnqZhw6Ng1HuWXE1nx3YcnA3owcs2szqUzWdv5RF",
  "key20": "GZE3p46f6QmtN9u8UDBCMYzUHHRBVKCzEtiNUsDP6eKRe66qwBTtNgPctiVo1p7z7Hz2W9ZbRxFMCGANoDhS7yP",
  "key21": "3Fyaj1VUwA4LzgusBENNvmD6L8HyMuX4BXcJhhM1CnmW5Gimtf7b7DC4PWuyjicKDVnScXQYvbqGwn2JSxKpQ98t",
  "key22": "2GmdaPC1nfodvmdypcqTiBRpiniyDNSAQtVDZNHrnAahjx8GdcDVsmubZtySXkyL3ZUNUgEgwGQTftkS4rQkHVVu",
  "key23": "5kwmxXD4WdyLPbpQHWnG5AYTmuTcG5tqGMdhVbPuFQ9BqwKW61zVEWAC9dgoa3Z8hPmGkqtYfj2a1eue6VBz5QKZ",
  "key24": "4r82U8sL8725oD1ARYfcZwRaG6DiNdhJxB9b7jB5Prr6dVcZxgio3bMCjK2Dxg6KHPfgBAdzYrizs1vVrn8MyXMR",
  "key25": "5LAgzHx7gY1PhUogyRoomnRTzGtayMQ33UcU9wDdQibQBFrKmH3JyTEKTEqtX4qTwvu6TirQMTwJ6YoApBf5w3RM",
  "key26": "2iKLZuq4CdG7k9Wm1kfLKzKVE2vUejwQeJZMHohbkZBhKRU82euHHwNHNM6m4s6Pqq6mc3NwtLMoMxpdfRa5qDFP",
  "key27": "4Wq8EZrvmAPULkfivyhk2hu2oJMK9FF68pBhoHkfnjJqYG5JanH1CK6oYk13LXweAgcDjrRbtvZfqfQ9MXKGnthd",
  "key28": "5LDBzDqcjdDdHdiRYmxu943RSDPBMHeEZTcLYPVyXU3PY4ES3qftxRjrC5P6qaQwyQVnqgdjMDSoiWfqBDEJukXS",
  "key29": "3GRRDkL3ujnMUPMuqwGSDrdyqrBHZ6WiiK1TVziUkreR3R4TUmmGZYAtENdeFBPpVqjknzzzTdecrKj9oFaQ3bsB",
  "key30": "4mpnisSEFURBCWEseHFtLZxXcG6seSdiBrgLD2yXqP3q8ZfG7CKzdixwWbhFp9PBZYbM4UENLDLhHFRRudhsAK8o",
  "key31": "5Yjgb4HXbfzE6UqjxCmpcVkLEQHvNBFUsSZYYjFtryUFkDNh6T4hSEw6kYmw3N44jmn6HHdt5Der4Zwz6PfgKPRA",
  "key32": "3oyQMidf2ys8KD9U7xpFh3sH89FwCnWxKRPmp8F27cDDtLaZLoq5pNFPxcckPHLw6G3BLAs2mhm2bwfKiwf11s7c",
  "key33": "nJ1vroqcBJn8UJgHrgVUfG2FyC2KYMLfJwJSoNXp6zUAzTUkFYhHnRM3MtZG7K21QEBvz9sDDJVGpTh9x1iKvwH",
  "key34": "3AQ5crb8aqTYxS9VNRz8MaDhn29htPhw9UdqxBmsZRHgtKT8xyBv67HzULBxPUjVEBhRhDZz1v4DqZH3xzE6QiCU",
  "key35": "4tFHRcbTdErAn2mnMpND14oqoobiTkEks4N9ojfApYpdFiWn9YdbY6wVuMP6xnTpzN3rnZqNuLWVV8jDv56GJFyd",
  "key36": "37V9ozcojfpftqkvB9rJrHjjKdxWFF7623BctfqVVDAnWHYkNjHPeGxCPFcCZQHiMkSbbEChQESYnrgegv3y6DPJ",
  "key37": "51Sur6PuHLPWohTLSM4B4BZbjjbGWxDoJ5Rrq8d3bpDU5ofVBaXeZp6zYdmwmptro2YioQuxSGYnQJAHgMt6tAca",
  "key38": "Bm6ZFPhYSP2NhAkRitC6ZxU5ZK7BfbiuMy2qoMeHpFVT83BNVnwoRpsrLCF8YnznBTWJ6rXCuGoZURdb4gKTK28"
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
