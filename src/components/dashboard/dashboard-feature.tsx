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
    "5Zu6WrRpY7ZYsRUDeCUu8GtubFNZ3jtzoLqnX1h5QkKNTqWskaBd3Wd1yNnHLb9Qhzy8NvUyRnS41f4XYj8FQNPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46aRNCG92M4MPd9fTR9aY83eTzjaQJrzJFJg9Zuy1LXM2bgg2TCrYZvXEsRPAG8rQqrHcGtpX7j1QrzupXKPc8zu",
  "key1": "2tA4P82u3CaNCjgN7Ms2Jmoyto7Qr6vs53Z2ie7WzZ1t3Juaf6y8PA4Sxv4zPeS1Yd6ww6Zo35YZv7TBkwfGeCdz",
  "key2": "MemdxKKxahsdPiQh2RJ3jvVTZ6hmffRC1eMo3PwVCNiWdVYCXJsiDtbrmFf4cQynTTW5Jy7B22fnsqqLtsqbtbi",
  "key3": "2kzeRHh2gmdeKQ1X9XGoPXqisjAPyDpZhQZWUfq9bpwN7HgA9kNJ8Bz2niXe6WoymRQdeynhv93QLh8vSTBwx1KG",
  "key4": "66hSDkFLujEhhw9xL9Gg3gkJ3Q1HBbKCjS9xRdRen1uygdH5o19v3ZmPp1jAcEXoEeyQ6m8wxrFdVi2uzssySsQ2",
  "key5": "4UnN9uP8qCsZ4n83JdYi65MYL5ugaqJmsU9CzWmw7QTL4xwujYpmjJDgvgNWbFsnpTD9MnSkRCkmAZc33wuDTsEf",
  "key6": "2sSRhFmH6DdKvCPegTuEQ3KbPme6fHpuJmbt79j2w4qGiTrXVwZ1K1CdHmtPjtG6apt53R7T4yopTKFzzjCvRiMN",
  "key7": "Yxn7yE846Xqum1Rqg65d3XFRFQGaxfsYbvdZGcLX3uKgMEoznA95KpHc7NrLJ2wHGYKU4MMZTHw1UJ3CjaAr6HJ",
  "key8": "62QTVgwHLK8VZdVCcSScytBwk354PwmTQKZsEjKG9L8JQnNXSm2JYd9Qi8TepzD4uScUBdJNW48SwujR1fqsEmVQ",
  "key9": "LCz3pUyrohc5v3wfJq2fCVVnfoScnWuuYtaWiTnR3PASGJYT53nHTRj2b2go7L9pzvm1mHbDdCey4nqvV1z6YWy",
  "key10": "5AUvHuGbp3CQNHYVqWxrYqXzHfvZJXvPYqbUFNXEwHTauSQAT4RZV41nQK4DD2vyjC8J5GyQurWuhHEz2en8FLUg",
  "key11": "3VHtBWzXhEMgLoaKfcqjEfSyahtLfMrwe5f6V2Swy7c7owk6KgXF34UehBNqhkzTmyJ7H1kyafohboj7P11yyjHr",
  "key12": "5kG7Y4itEPrWC5mnEPeEoW4GyXUSvfWZG6gADgnJENqZHtjG4ToWYpB2quWbX2bKAEe3BqaLn6CsvswGxMmj4VVp",
  "key13": "5fkmQkxf4sk1zipSf81yoadcnvnuRFBTYdmxTCGSDm8Qi1GCtAaM9QVcDY5pnhWg4NZZmqjiR5VkuxjvNw5hF14X",
  "key14": "3QUGQA6LjRwR2pYMLzYmkMpR1uRHY9MK5x2QkReTQkSo8E7mTjM6A1hPm4Bsf5NFQpkqvTMCKRgpZPtv1otvVYD5",
  "key15": "5m6wQMpZVq7kDUZGJwREDzwcZnrUSrtuePpZc7xshxSa8pppAvRJbMu7wAVNmqG37Df4Z5UU9iaxAH7oqrRrixwm",
  "key16": "24Cfjf5FK8UhPx5fT5YT4qYk71Jt9ZHY5yEW4NiddXedHM4ZQ5UAmkAY7hKaYArRCQAWPsYbeRP1SaeuAcU41SA5",
  "key17": "3f8BV7XPBw4KVL5M2St5fEn9beMSXu3NFCriqieuXwNa4G6h3Ax7fDUzffV4nynAq4MitvwfSU4VNHnfiD5eQK8J",
  "key18": "mmjb5MDpauhGumMHdUPYYnhhZT1UdQSiJwkiqnguu5dJHqigQG4FSvrMrc3F3PzSEKvVHBxNn8mm5yicDeWF8Zt",
  "key19": "BorspRSsCELkWsNWQnCpgUvrCg7bvyyNXoEwoeVAtExw8y6PGdWMXpeRkGNbparffWzhdiQ2YRGCWpLPHXSkFCM",
  "key20": "HkWMZhhDww5c5RV3thpHnDNRoBxcjohYRN9Z8M7anbZc5YTWa6jQ28A24wVF2tzucAgWLGMeAyX6Utu8MfrKpS6",
  "key21": "46F2gchUEr6V8t19j2xggPz79ZTdtS3h6TPKqe65Z4fPqm9owhvDN6WKok3PX69qvUrRT9zgP4zmpDddTedTHoFX",
  "key22": "4g2kj65uGC7cXX67xQB3Lh1ziULkzjizgGWvDrKvatAtmGjiYUUCTMHHAz7zUkG1xSpDTALkaNZHEhe6zwk4KHMb",
  "key23": "5XcK8NYoiF7HP4bHMzdd3jWBbd3nNh77SDgU9GnKAh1NDErbp8tEXTAsy9xZcf34noem2FcFa2q8vVgPvAowgU3V",
  "key24": "4BrBRkPu8LuTgHmX5reSJhkg6bjrGbzmckZUQA2Xtooi5Uw5CxPFdZUatB8Yaz2EA2N75HC4x7JjxCdgFcaBH2JL",
  "key25": "LtbQq8m6Vsf7qysMFoSTARQS5ZhGQmyNFvF9MzyDAbPFfTxcEBPWmpQt8jJ7nEKHWNbbe6Df413XWbcPmBVRDMf",
  "key26": "4XeF62yVf4AJbrJ9V2bX4QmVjo1PgmTqSKxug7wFNzvSyz3XypbrT4oghBg4y3KPggUURofnPTx5x9xMCeZZAYFr",
  "key27": "4bX12V1ca6VtGhVDnLaUxg5LLBWNk2ZwtyM9xBipVjSi8VqCVjA6gE1mbdo5xD5bHYQnobUnsk9MZ6SfV7grVJew",
  "key28": "3N4c2yEN1XV2uUVmQAzDRCT1RgQE3EEeCshXMGhjx1wXYwGv4Lsugu6cv1cGRC3UkgMDY5ZmZFi5ueX9dUMPusmT",
  "key29": "3CLYiob152rGQFR8yE6F6Hhjk6cR68ngToSWqiVbHvnhK7oLsUDEa9fknoG5dwwL4nvdaE9hiQr8gnwefWcy1jx",
  "key30": "S1HTzPcFyFheVugaEjF1QNUM4uSK6A1QgaeXm7cHubJJchLzAro9RRgYDma6T2NicsnusUjsTiyewjKipWfw8fQ",
  "key31": "ESQyCt3ghjZXggrMgy6KGfFp4jrv2jsnhaTjfFkNWE6WCmJVP8Y8aQx9QXdxBAYLMANJy8EuwRU3pF27KMNJkr8",
  "key32": "44TjVXD8tK7fDXtyvY1pHgoy16HYRpiegqG97yyg9cqKcrYohhbe5XTiRmD2JRkwxC144AB161Tjs6DXmpQxYGcw",
  "key33": "3rLDDX3cc4Q1KKy2Yw1nPkEebtjiaqz2DWvYtifXu7GNXrTAWYucpkTc67FzxnMoFHmpEKBtpJnVJj9d4y4MzzCE",
  "key34": "SiyWCohhr7dg12jAkLjyJXmaMSGC2adAGt2VqJ8ZZUETuBmgavGQR4mUAxrVgRwNk7S2qFj6whKG8qD2CxeueAc",
  "key35": "4jcfA6yua5M6kTt7Lf8eJE9WjwgCXK1PtPdZTiLpoqFq4xeiRg7pEUTCwZgzbA7mJQYx1S1nRZkgoi7espJZfcCN",
  "key36": "63HhPjmr2p4yDm7enLQf9Wvc91iT8GJL9BT32ck41B3x2DZzvgvbAbMBTzMwiden3NpWKtFvwxVrZtoKwVbThfrB",
  "key37": "LQsvG78Cu6bkA6PJZ7j7PiirD5vuu6RPcPkssttav6fzgN2oSwyWa2FeZhLGMuZGCzeoDd8zXWyySewhP6DU7Dq",
  "key38": "3JwxxmxtirRfiSSRrUPnF3HYHcDiQEo9JhFJs9Vm3XdZZd4uNFNoPckSuPN8VEGLb7JxMrjMX77FAaMJB4wgKcK2",
  "key39": "4KcQgfHpwLBQMTa7ZECgE3Yk3sDBoYnTpvh8sdBstL9g2z9YBnitMrUegtqxCHLwjyipR1rpSSsKvyfmq2FWXpKF",
  "key40": "29Q73XsKiyHPciGB1T8Bb3dFiicnBxcJrAnhDDs9hDybS5yKnYQj8FUpbBR5xD4tSe5FFqeXLtpmUXeMCxvYUqH1",
  "key41": "2JzR1YjvpbUwz4wu8am1RKn4w1xNXDqpZf4qqnhA5SCA4iS389KPFDf4qWPNQEFwXfC6tdCiUWqaaQXzxLhBChhT",
  "key42": "53khMWEt2eaUHYxzP6Z4H7rqBgbMuSjxy9rcHjfcac65bmYSUAnMCCh8paJLUbxqeM7yCYcnZCmr3b46WRfCb526",
  "key43": "4dRJvnBZRiwmdy814dJLMKAbZoyK5yg6uKGLi8z2NrYtQ6q1kijXdahNiFuwjdxhDHApFZ8a1tvXyMvAXphKqPjm",
  "key44": "AD2nz2TbtzYjTgtqhEQKr17TNh8xan7QSWNwWcw6eWDW4ZHgvM3LoyGT6FbuPcZvTnDPdrGUDgzFjHxk1A84VYr",
  "key45": "32BPyK7pgsJQ3BBkV32X7tGM1iPWpwvwQehgUrutrHdfxM3BoBAd2zVgVfYV8KAEdfaynG9jC6v7vSN7DxXMMmDF"
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
