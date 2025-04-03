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
    "32224QAbgUMbvtGQ92ndWiddEEKhuqseyubsvcZ5zCAVcLdFvxweQfKA6VFjPvqxJhyekU2jmkBPbrfbwxMgTZMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m26Ty9jZpC6zGtVr2CFLMvLiCs2osFLazN1dGg4RhzpqDjyZWkHAL3Z8MBSBVzMTZp1jS7wQCvLgkQBPynRAMCG",
  "key1": "441ibJ4LPkLkf1VM47YxraLRCKz5Ev8A9h6QbsVHk8ca3FSfcBJ8odWnQckKJ6d4n6nBZkakKoiWuLi9DyYoFVLp",
  "key2": "4ngW31xL6gPswCub9bfrmZNCFkN2dqLTKHR9zdyfAf5JgKguPoXtTfghGy54Abfm9K9xTKXFaga1q77rcTDv816S",
  "key3": "4oDpY6dSQe7kzhP9hsEktbfLDrxGuMNaczAFQ7XDj7zkrwQqMKk4p7GDteu6Cz5iNM7efe4PsebA51KkHtBahoWC",
  "key4": "3reMcCY3GsuGqRTprcbk9Na6r7kqJ1h2yMTUUPXBQ2oJaTMecVFUq9RvYuuV81wto9eX9UJRUyhQ1ycLuC7Vhiux",
  "key5": "4QrqN6611qYh8JSjw2MtKdaAzDu7HuSqx7yebYDStSSCmkeR9vCq6V2bG3HMzYeq119QGoitWs6E5oLpRyNxyKA2",
  "key6": "kZ4CgSyX3HHRaMZZwCNAAx5AKRsbp8xQkQXqEdq4muLy3WcpKTJ5v8xLL8qbDcYNu1tto4ZCxoCUmoZo3bQbKDE",
  "key7": "eHKkuuGGM7EYSRTKDwEKFUoKqKvt44nRvHAjG1K3sKjfNwATFeH16o6uKgXm3MHJKUHyN4KFC4V4ijxLcgHVN72",
  "key8": "XJiLu4qD3oaSvDDKxCJfVmV2NVis5U9C6wsSSjh1XyafUzb3CDr7tFqkTgpj8ceH1zrPXuEzzUiPuMo2nzJjYxx",
  "key9": "5eLT18NrsYsUZGMV4X4Mb9hZm1A2TZjLeoa5NZS6UcEwDwXADo971kWrbAmN8yyZ25NekkABWmpHA3x9zdmnmufs",
  "key10": "KSPvpTFJcpzfQEyjWvxFpZKqjU1HucdqSMqDcgiLVJ4XMtGRXdiboF7HYhyTLffqq2a7eNNvDygk5TbpTXed5co",
  "key11": "2EPhKwQToEoL9tpkdMyg67hzfz4yE56mjdTS8gWGEULKpYJaZ1E6UzK3UTkxg6EZSKJfhRFWksyhqZCk6xpBrEQn",
  "key12": "2redRzX2Zc1WtEm9ZP2VavGHvX876i2afi7kFDAbS6Kqtq236BNoTJ9aP14ochE2Hc6q5AyYM7vzn4ci94eYVdEY",
  "key13": "5iadQvGGM4cYaoCaiSU4vqNt6RPWUEBGrz6S5ypr5s1nyHjLBwSCZJybFrYy1bCm7kJi6K2aTKaKirf8rrBNapKJ",
  "key14": "4CpCH9HfihEbBcMi624AUMMQbkmiNxYg5D7oiDo9g7kbaDL8vXyPFCwaX2xQXakGxvFK4fyjKHpqSfNTFJVMSia5",
  "key15": "4NLmD7z13WTTVpDKNF6kB1AWbDDXGLdkpuKPXx4ctyqG6btjmQRVfQWUQtokRMeR6fANtimyBcz3rF7e7fzdcEAs",
  "key16": "53xaKByskHewPYcKkASnWx6S1DURdSG4ziCVfcsw6Eet6NbrN3J2B8QrDxLSnQUwVC9iDtTYXgEDzjBNCd3mSZnG",
  "key17": "5GoMMppucD2d5Ywde2kD24wrVvKVtVG7fUX241djLM4hepfLVoy3NihP7BQwy1W3RnrytDh8rhAiJxNayJkH3ei9",
  "key18": "49SeLaV7mynrsVgmQUrCE86KYk4pngm49PPiQ6B9D65pxhPYV3vYnHTE8cYU4NSVjun8mYLFoD3D8LsTggGWbNZu",
  "key19": "4M4edHPvy4Jb1fFbyajm25Kbg3s9Tvz72eGQrKbLNNbDYejVNBNegAdz1raVhSHqEreZriGcjVz8xToS185VH9DB",
  "key20": "5V2thWaPZpeMcA5nQoKPj17LRZmachaTfect3LHiEwgQFMHTYFEpS7xqZRDxeJSnn1hN8rVoYAXd6YH6WhmR8p3S",
  "key21": "5pJvLsbPh3SCSLnaAyM8iNrGEfjLQScfNcsiT1qQmUSdW2jSc6ohvK93a1XbmGBxG9XvaZNJpKfBVwt49Q3bZJzc",
  "key22": "BwPK4S7rmQDxnAD2Ck4UgPQ8AUpnsMBkFsCgarzYtmVNnk84iBkrmh8xDKyYu6szS9RTcnRCVGZvWHFjBKU1gTt",
  "key23": "MUku4x1AFHfCNF34Gx5eegCpcGhHe3KmXRFQap7gSughj3fHywbEcaAQfXiuQUWsAPxrcUqMQF4jAP9EjHh9MZB",
  "key24": "3DZuieso1Zi49bPsEgfbMKQc7hAJTv8Rj6NaKj8Ag2ewSDkPr8aeD9d95hje5xnrB1gwE5978UyneYSJPCA7HQwh",
  "key25": "2Zz28s3Au93Y2ct5SbAHgmvMnwCCW9NaVUK1azxAS7kbrDY8RdtbabCUPQoYCKQqaVCZCJSveGyG1sfAukSqm96r",
  "key26": "5tgMCeQVnYazXXFjnzKPhPAqWSsSJkrQA4xoowPn44UmcA6VZpRdhyTwtEfBZ4y3HHevDvjQs6LtHLBTXHnAuyEx",
  "key27": "62a9jVF9d1PajqbqVZn8EGUw7f841bZ1DELVZGkeybuE11Sv6PQd4GqLPiddPgmzE8pTb9DqqFU2egsqexPCKrrX",
  "key28": "3Rn4kbRwBSbBarVRShCfW7WdekGtmLfj6narzmvLuPXY9Jz9rRivfHx526KQPbPVsQTwSmEA8UgMW71qHKWwzMnQ",
  "key29": "5yhr5N3YH1rrV8aihzTQUf36XuDFBeJoToH6cu3ZWEGtTUwviojo1qv6A3SJdvmyzC7h7EX4npHq6UYztA4KTm3Q",
  "key30": "6DNJwvU1ncjDufgcruhETEa5cn6tpVZPdB862drSoViuNYpAoPvf7shh4q3PK775UvtP3mMcj4qyjHf4Pe5Sxnh",
  "key31": "zGywCMuzUQh7fB8yNpzNcq6N77KwuN9y88yetZc18Wad3mLMBZSgqKSUvPfvi2RFQEdnykjVXs3b3qBSAPGT3Uc",
  "key32": "5CTFEepc6CcKEA55dSYNu2tcBL2PuBWSWoPwWHnHgdvSexNAdWgYdmgVSdhunwJMkqgTgADjD5terNkV3UhHxcVz",
  "key33": "5m5mksRXwEwCu9Z1W36JVaRVWn1R3JmZhc5JtA93PHp5AzrtSVEoyaBJugohTchYsvstWttwguM1pAfLQSHo2qGd",
  "key34": "4ZxQ5nXYKhx5G6X2jPpZudsXz3H3P2N61bTJyfi1nQ87fxYfcoTBbVSquMDiCtg2qrJpaawY3QMFbQXV5ukxBUiY",
  "key35": "5PQS2rUrT6aVbDCKbsCeTbaTFv75ji1UeTThiy8hNAEVrCxYUdbs3Xvo47JoqFSGZwJDigMFhYyHC2zVSRWUXVss",
  "key36": "4VXkMU2nwpB5BtjQiSJYbSXZqBeupPka8tQNweyPVBPcUqyxdg6DDTJLcRxRX75f4JGtyWH52uzWyi2qAcSGyyvs",
  "key37": "WtVE7DcMr8dTFAB1tqqqb2cfKQDSGDhXEBC811CgFh6NrtN9nZu1i5kCTEFc18zegtAHoubtHoVV5GJhDm4AFTp",
  "key38": "PPxQTNoSr5254UEApQmtYD86EemVQff2VTrJyRqf5VxWscCYfcNjZooSVbReubHdrhYyHdrJ9yxQJC1RL8HDcy8",
  "key39": "ft5rmMiDwPGb4JKLeeXvAtaX2s9y93hvBWRwjcfhKvQZATUTsfNqMjHrVaPyRPkonpxr7r5LT9u2CWb1YVgAk91",
  "key40": "3qRTkYZE2NZroW41Zx4tAprUdxmsHDAbasb8ZgzJ63eDiaKWmuLrYnFf6X3YgZcTEEcJqTCL9CZf4YsNNdTevQGs",
  "key41": "2DJ5TZvgcJMpN3pQghdBZZCzo2XkcZJCHkf5x1fSgPnpg7QBUdsCqM8nWFfCpDmK4qEeg9j9gg4KqNZfi8xW64aD",
  "key42": "66aa6Z7tmBaRVF4wtXhCVthLcy2Xn3vkpPNtsb4mSCrMJmMtjUhbq8tbcz3JDnv5EFsNjYPoXrNZHDSGWboVQrww",
  "key43": "2fVCqjyBtgkLt87AZvms3iwM2SfZ131CeKKveg2FXDueMtWdpM9HYGEgaFL26mFfLUmStphLEsTxMok5CdZN88D8",
  "key44": "39H3zAVCbmT585vvVQdkDeKt5XCqCPqhbdDgocsaZDv4NEn8u1ULR2G9hQ23UGxKNj27oeyLTVaLCmbdZU6ox1Wk",
  "key45": "EGetqzG27m1io3KmpWAWJ44uBpVWnP5qYzM6VTQtbfNTrp9xEPzbfWCZanB6AoZLzDA2nZ22PznChxkkHadzf3C",
  "key46": "4VQ9y6Uoafq46xVpB2HCYbkVBt8oV9MEafss513FZgX7UksthBJf8Usvzwkd5hG63KfB7YUANRpEnDCABUGtWLdq",
  "key47": "2SCd5usLDMZGNdXBKQGrjXjfV7MbRt6EpRjqFLrwKEdqgNDYcjzKMEWZiAbA9EyUjqmkVruQfSWdGgcWnUoteSxV",
  "key48": "58VEPML9ryqoiTTtFAEwt815cbhFJsAT2A8pfSvWcgKkYETVkR9pc7Ek7PHyhEKQza4o61J2Rrkxbqit3DWUg8Js"
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
