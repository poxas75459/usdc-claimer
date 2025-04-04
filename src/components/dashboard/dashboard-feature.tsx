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
    "2HYkEyjMAJTCYtnQnFVvYNKdzWy76eAmYiKoEREpbz1BeaXQBVfip9CrBvrtvX5RBW5tGHRRWwssymNsAkWH6ytz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GQHWKfCZ7TZR3TpDwnZfRNKRTUWb8EQPxH8bNjY8jrNvnPMoA5tzyLmuFGW7YH6L1FsAPUB1Z85dTXKqA8cjBh1",
  "key1": "3ywE3jqMfDwyiJEBfe2w3PRzUDecyTjgJfy8t5K3kiwUk44iiHsaAeRcqM3T9i59iGn9UQmAfXqJcUxfXVzTdnNE",
  "key2": "2TfR2xFoL5hy7GgFjQH53VVDKuTFfwQ8fKAe7sdpqKSfzptqwddxhaQ8pcWKY7gJQqimiTs2qz5eDnReEugzxrLM",
  "key3": "4mtUywYeFASq8WS7BQTj5MDAyJurKFGskPeUc7SogevBZeZCNaCSHdfS42wxNtEzDyyemyqv3eLJVsSi4gVMCwYD",
  "key4": "37q6Mg2XQE3mJwv2mJh87oQhq55g5BycGkbwgRxdsSMfLQuA4EdirMVBqS4tETiy4U71WqRShUDGe4rEqEdLZvcF",
  "key5": "32CWM1KgnttZoxnQ5mAhsSz13iUzuCqpWPv3nLaA4Q9EY7KW1CMqTsHqKrRenDS6MMak7ijHXaTu8M67jrw75xhk",
  "key6": "2ciTPiFhck4VAxq336cy3j7R2uKBTK45jeZyhcvHXZkCBZBqLF6UPhnBDawPnBEB1sP9aWRHr6wVWPR1ku2xsKhK",
  "key7": "3areqWB3HUaeQV2rKSKJxVCUdFJTQ6Y86eEDKkTHSrLbsnocJRLRcpkX7pDCeX7kDw9j5vsYnadGZwXkr27hHQyY",
  "key8": "566eQXrzAuW5pW9jDJivWU55Std36Tmo9BNDz1CbvydKXB6Kjn8iswpBxnqSqvLVCzGiCR98HEvv6jNRk589Mt3P",
  "key9": "5z9BAWYDV4kDftdjmnayfVhNufuhPQn5BqQy3LSWSUCnPhy89TVaqxS1Leg3qFaeAjRqfLLBX5FgzQNzbo7NTt6S",
  "key10": "65J7B7hsBXC2esqcYxr1WozZ5R1oYCtE9ox752Sb79s4E3PKvTxv4czGqtRyjXyvjydX5hA49WGo7zSRjW45GUS8",
  "key11": "4WaiEReLsqKn6Dq3HY6ZRJNaVGxKq3tArxgpRyiZirRemvaHJkodAHpEGdodHfRVCkKArYTa9YLZzJH4Wtgamznu",
  "key12": "5BrWUZvqfJCjZhbzWgb5DC2UdgJqeSkPJCMBQYn6SLVkWgSobYLmjFeUJNyCM2uQsRVRpKa3oY76CnReq8qo2cQG",
  "key13": "3SttcoT47y33PVh4mAF85ezEkFXbvm2LTfjhaNxRVvEQfbkspexy94GX74qaYYxvJj9W2Wt3HX2wQSxTZFNVbGNY",
  "key14": "X5iQpvMX1GVxEuQA7aKQ7xpuVpDkZAP3A4cfoWgmqFga2Ba54mZw3CEWfY2qyWr4me5AxVb5zuBUK9utN1M7W8o",
  "key15": "4TmmTVmt8GEAmXG9LcS7CcvbCuXsyQ98TKheN5KXG15U1RU1gvjMSWXpG643RrChgSiDxe4NZhbLfeiNCWSK5TbE",
  "key16": "2hzehpiWXN2qUshjbGTFdSmYxpGCA7SHM2iHr5iTpKsShyC3twEhzFQacjmyh2w6rMsgrrvQDjWdcC8vSsLZcfaK",
  "key17": "o6Gp76zCKjEnvqeMP6z3Eqb9GLH642JPGoSzzwdEjM68AwKT5RYKrQv64iQt5uu51bD5Q8TD79DyWyY4oTzXUxC",
  "key18": "5unknCn5j1MAkM3B7VZt9aYnj6asri8evDTxz27TGEwzaSprqryB4amL899xk9k74n7wNLPKQ9TUYEDEF9FXTY3i",
  "key19": "5J4p2ZVT5U96ZRiFLNbaESLjRTfftHyrBqx7iAc8SbwN9dcK3MknpQ1Ac1dgnDiFw5hVKngVpvC3mGaJDsJLxGmL",
  "key20": "2Fx4yuiUjrCHafMv18QQLVezydznRyaM9YPAxBATRZa8KqazzX9fWRYnfgmLB5sUPYBsp9MCTgcbzXBm9JFeReEP",
  "key21": "69AQUnfqDqw2focpsSYmQm3q8RdSGy9tGsUAPWXeNtXzNRgcaMkfN6kQfobzquBnHrtC6fe7X2YbhNt2Tv3cT8D",
  "key22": "5peB8qd37jGinizGFdYzWmnzfUiAumFw9URj2ktw4dMkYCQ8PjeAJc3gBGRSy528jxRLzeUkwzxUHE71ML8zizRa",
  "key23": "4rygUXiTXMBoXhMpASKRujVc4ybbJAWFdegPuQdqt3Xnu3NspKYog939GtR77AQM868v8hucvHCH8Ume7cCsnWtk",
  "key24": "4NtDfi2xmUsnX4HVKgG9EMwBxuuKYsQqPynsQL5sV2xdPaA95CaU8VUkWhYZSTkCgF2H7pGsAYUiqMwZN6FzrSiE",
  "key25": "2E2Bv12ZbLmhJaNNnvA7AGpbpDot1f2KbmkLr7J8bAe2yjW52pzetg5aj84Pd8BnU5FqH2mQEKCziAR5mxhao4Pd",
  "key26": "5iANgt3ZtRrbahk9V3Fau322hvhPZQgVyEuQ4dWqdpQJdxNN7FKVi2J1qGtJfHKwAw2PE5MDGiga821VaKD2bykv",
  "key27": "4owNVmGBwdquZLiEacX1WGK2C4kDMVnVLd7ye3DSCpQjGZMJWmdVTvNBHU9r35usn9WyqH97Y4jZreYAhMyFwGXx",
  "key28": "3AjfZLKrMXf7vsG6VNffvDVz1q5mbC18hSnRDDS4tJay45PhVGZQyzNZSgbytKgKrqVveKLkoRpkcJbC5T4rnqkM",
  "key29": "3meLYAJdqoE7HpmMP4u51PZiuSTvNUoTkjjKfBb82GtawDbvGvnumA5PQNScJ7Nztv98HBykeQu2Tz2yQYWBJpR3",
  "key30": "4yeYw4fq3B8EUnsdqce2sKc9od3Xie3CEYmU8U9CDunWJ3SzwnsZSxuF6CwQ18S3XYkbo58USW3msP3v4wwYoq3f",
  "key31": "2doUUeDCdjdG26rKy1w64dHgTSqypdQ1c7H1WTaTzEhZP41PZ9VQzFbw2UAixMA9WwDih5cwnJRQ6hvCorUFWYTc",
  "key32": "2QEABc5dpe4ZjtnUduQGfoVKaXv6ACsZZLDpqaXC7rjJNvChuVVcdDXr6xFty8BJepUEfSb1dCVnWkVVVVt7njSE",
  "key33": "4s16APBfZYXi4nqJ2NyjirHrqp5kmnHchtfmKHsJEYiCLbmBMpJyDXu1A4mUXcALjY4UMNQgw1DN9pAfWsZfE7BJ",
  "key34": "312GRPJxqATf4uFjNvKgijNqxgAaUwGiwzfjMxzByLTpbnJ5axeECi1kKd94RjNEZaT2hFaJePxYPxXAcHkfx44G",
  "key35": "P1VBTLFrPRJuRfkW1MFWB5FUWvWYPRHPSKLxv9usznAnGSJWwXLfvqxrgpiTU522D2LHaW4irSWLtXExQz8CcHu"
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
