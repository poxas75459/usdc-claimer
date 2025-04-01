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
    "4JTkoskfth5R9mn7AqieFAxW5aL3gARXVePKEc5rzEApr74uB6nQ6KoZJVSc8gJnhNf1MmdTRNpX1JnZ3rtca6Y3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pkdGu9NN1S94sfs6oPnFsVoDKViPku9z4fUuuxrXnANS2TnFycSidGTXa5znjSHe1MwNBZfQqXvB1BtsAVi7SGh",
  "key1": "647Lek4XUVjyddcRtp4UrFkPJ7RCegLBWVTjaB9AprftAkedeCXT8hMTQ8Brdh9kwYLTqHZzAZbt44rraAVhTiBe",
  "key2": "3bgoWKiGdptwkuAKT6SH15x4yRMiT8xPkJNEYUjPrvUJwHxDTGw5VYaKbeG25LqAYcujY6cy7yQxWqtb3usExYZT",
  "key3": "khrJF9Knnznp5jMPFRNncyeVqftQy43ExDQ3pcw6LBiM8GhGRCRzVf1eu3ki8JB584QLwviCMZBAMKu2n1Hfz1e",
  "key4": "3jZYdrqL6MTmfaNmBZhmprzk4corLEMxkxoQh43WoqZaHd1sSscGXqS8epgre62Ezd5C2F8bnZN66paSydkD8ecu",
  "key5": "3gyDoPVjk8SRSEGGZLCBKSprSyjVGYJTr3kFoGHrtbN2PS3xhwtSvqwP48cUjracxYnYNqj1PgHpxcofJt6QTVga",
  "key6": "2YVYxxQm79KTM6449ykR2qho5XXNbSES6HfgpFVrrKxJ7NF2vXKWtHnAVDWAmsMrTYsyTq884SXXq6xGqPXxHYYx",
  "key7": "53YiGVBFhbgmXpiKWoUcDQCL5nFADUNCyLMtKypSsZLZhWYRgnPF13gbydS7J8GFRb43xCDiKHi1hzPH8yqW9YBf",
  "key8": "4WmuZYcLQ5RB7sjrPszD6zS4wxPbXEcwACKKKxCVsRf5JBXxd8DWmiFFN412LsJr8hJSv2KgZd9YmowuSueJB9qD",
  "key9": "KUAZ3sRVcn8vGE1fisL8fC3qv1nzgxiDLxjeJe995euJk1QFFquX3WjBNScrUFsymVVc3zvagisft6JqMt5Md4w",
  "key10": "4LTQ3nf8kpUEBR4VT4Y72Lk6vSnzy7gi3ftsCSaQYdzAT3vHRyoKwgJQuZ8eo52NR1G24NrrsswofJk9q3bUM9HV",
  "key11": "Z5Frw9ScgaCyuKABo89wrUwxHrRcAqAAMcaiCgH4abeG3be5xcWSa6U4FdZyS4KbFPo5pWZfMsJF1pLrVBgLFoD",
  "key12": "DVFu3Gd6FBfQAiVHPJU1BfRjBpHiJ4GcQaCDMDbVHDCNUzwW4yYygoSGteADU2UKSRsbwubAGHmkQQCHUocMNMr",
  "key13": "3DUgpHD7nhnUmEUxefZcZAX1s34QJyBpfVFcwEbcyhCLT92cibejxSwctXfC3HK57jBmX2vUfN7k7ck33CeNTviV",
  "key14": "5notahkHeggHKgeAj6gQYLBRdkeZPuRT6XWARf9BAfT5M47aX2hKZiWgT1am1jjzNRt99eQigjaDXALT41vt8R76",
  "key15": "idQYPfvdV74A7NRRzBsq48cAEJkUYxWidzsW8ZMB793MXMKrgbw5NsAiT4AKRLbo1JKkqUKDbJrScjYy2KMVXTN",
  "key16": "4QFBXPztpegzCjrBeEKyk7DD4F57YZyL1nTEppCAXd5wLJFf863mKxPP1aeZmNY4vz9MZdbWixrQtvi85sM5tYUo",
  "key17": "5fxwgCfCMM2xJ9qu9GCM5NEcMFynfBNgh9dTZwSZw5yuyxVqTUaABVgJXS2if6ki637YPYLQG94akjq9tTetHW5F",
  "key18": "5cF1HKvjpvDrDizSC64m4H1RLgiHRM8JTfRDJN1q5iNmZrd7vji2tqgMS38Z3h4GZ8NUAvyZSLXx4c5X6csZsaKx",
  "key19": "5qCJBrXmoywkxng4mybdZZoiDzVDkrXTMF5J97q1iJAnY5tvfVU8J6Hxy3aLPoLm28svQxQ8NZt3ZYSJSLv4ofiS",
  "key20": "553UjYasoSZHtY6129oqpHMhZKCb9Lm9U5Xf6eJmTGv9jiMgyz5iHq1suzRxfcSEZPocE4VLZej7jWzcjMu2brFk",
  "key21": "3Q65otrcWVW9Qb8LeiZoYpgabSaAddY5JbkmfLfnuRtkcu2ftCUAzXYXTqgpjizHBjVnNJ38WfPLbrJvHaKAnzNf",
  "key22": "3QoUDRs3cygheYssBKPEdbyz4SLRcz3kHj76H8rUMcwRdiYVVuvyNgqQrgUs6vYZ7NX9QvynJpj2va8upnLdtYX8",
  "key23": "3g4VV9cQKTRhqJBLGAHA4mhqMEEYZMPvEHF5r7HmZVapK7znwVb7MBA9j8rduKyXfjyRYbkaTREaZBiuatPURe8Z",
  "key24": "ZQx84sxGt671pvTkccQ1ThC5rvFSiK5BL9aWKYDNvg4hCLjutNoB74rKheUTGpDfAaTAtyJGNrShJ7BJXECv8wH",
  "key25": "5tXfJ1MzMzptRE5NYjoX8cGzqHNDwwMSK3gnfzfQxkifiQJqy6RVNqMvnnxZxt5rWASnT8Zbs6q97y64u3VKddPK",
  "key26": "5BM3QE2uW8DcxZMKWH5JNNbjWP4eXMoWiuvXbWJhSgAcwMqrY3ho5MJ6Yqr6E7EVhR7qqJjxDQtXozzquP2yGNoe",
  "key27": "5ZyFVGRanAG6cniUYfaGHUwMN1NmcxGtRBsfZk8kRpZDY8inueQaeszYdWGZmv2Jh992bRgrzLqnJco5vxwKu8vL",
  "key28": "cLZREA2UP6NFBUhokXVm68xznTAdpj3wwRJSN1Cwkup99kBz4ykBC8TcWkU1g6BN7bMcZx1nr7ggczVK4txZjor",
  "key29": "2XFetCygSkVCBFcHiccn4tWxJkjaW4aw3wyGMPPWmwXvYGrFFMCanwu6kmR1MCZX3CpQGAXQsUhs7HNH4V7drLxL",
  "key30": "4J9es8YkeJfSvDpajNno9oB5rL2cRHEFBY13MQhJsmhKEkzNkMXfH7X9Mhd5QGyJnq6Y6FHY2ct8iLWSeSc14TWc",
  "key31": "2ZhUPEKfDv6jFHx6vpqtARe4BUKP7mFRYQF2dZwp4b4BLmMGRkyQGvqLTNRykKWZiLtubG8N7jbrqpmx1Auuy6mi",
  "key32": "qUu1kodr2vdVcSLf9byWjPdzB75VxRtZSqMbtft7wCPcDZsCarDdMWjFsXeqc3s3qV6ER6avgb7svoBM1HFcysh",
  "key33": "4DfBUkS26nV1mJsYRgo1dX8hWkHaQSTf3Sk9ZLGxmBx2oNxQdV131yxn8dGmAsVCMn3w4Q49X6tj79VzNyDAgu7o",
  "key34": "4gAw5fjHRiTWpUxvyqvHzeDUgsaAQ9eXfdT8JPZw6JJ7q9NZyZswpcH79bQ5oKnqSKA8THoFQ2hjKVyMANp8hAQV",
  "key35": "2VFfvkAsmbKQc3PwEYJgkj7HWMr9kx4qgfrcvFqPTPaNEQqawN87Z9ANLNpSw3kZ6c7bzTGYZvFVu3pQtRrTxvUX",
  "key36": "Fq1phF8wG2NjYhKFDh8553XfBb8kbqseHqY36HR2uqFxz3jtHxPL6ty3WBXUz3t1UVAfGTSX2ghMx13Lu8oiFQP",
  "key37": "4VicsUiPoxf6xsQeTYfzWkLS1c8EzQdeBb5uGRx4GuJA1BBzq27R2SxgJkY7th5oZoxSDrkTk1GesEqYkNoKN294",
  "key38": "5afU4X8Msiuc74eF19TZRoiEYuN4rveGxnE4Yo6mypGVALBPq4wScR2f16oMJiiQAYF5WpY4tmEgkRvqEGKxgbDZ",
  "key39": "2CCceLwrHLfR9F7SsuHYKbwhBVdNoJrotLcdWJGG4iKfZAaMY6Bqk5Fi59FSXTtEQ8vUwHNxn9JjfRzHem373BEi",
  "key40": "WKdUG6GL1VtTVMzpirsBjkbg5FXe8LBKzinZVw4urBcb3uWyDkkMsezU6SHJeLtSm5TjEwerBeLfG6PUJoMCQvQ",
  "key41": "5tPgQa83iUc38UcHvUs1rLAUgCx2aBnRfM6uDjPK6bbMg1wdMevRf5tXv2eFVbpnkEW6mrwWn6BqkHNi4xPFsarV",
  "key42": "2w85dyWKPLGTSv7FNq1SjMSgBPdtmRP4vErGPvPyrHKM6NQjg3FRaWqJZHWpmQ8R7gFk9ZDdy1gob3T3ssGgb5Kf",
  "key43": "2DYeWVr49xv65w1Y3LAntRPXbhmT7cFsNEfYbJyio4f3hUpoNbb5muWUVhG1DmQnAiPnWTNWafEGcAfT7s1e79f2"
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
