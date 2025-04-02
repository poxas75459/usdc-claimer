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
    "32s6MACMjiL7hW1AJK5LkNAeYLirdwDAqRNMfpN4Yf51vboezvrdCXtMfD1Jrs2bFRnqygLVEbUbb17mj25GCk3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o2219ymVkxDvmd3x4dox5LmjAZt8SxnTzUrQHJ6TMQe6Gkac97jaeWKqQju4qzQujJqZcMjAdUetiNbVAroBCnz",
  "key1": "3dhR2TvvCjGbtC1obKzsq4ikS8EBQN3GyqiT6BBZe6HTB4ZYeD8vs8vYJ1ofkfKknbpiTngQ4WbfPsZzQN9SRKn",
  "key2": "5iNSbwC4jswRRsU58XGBu88uabkrcHJ5HbH8ecxpruLbDBy6dreUKpnM6nQ3282A7sH7KTDTKWPBHapR7QDBnZeo",
  "key3": "3k79uxQMWTUfmQBEAJf23kWXb3mrx3gshSj6dr6tbuSbSfbTDCtUiwBTPCbhShUiXm7vMcWAvJUFnErM9AGNFyGp",
  "key4": "62sVgrCyw2Q9hPVrHj5b5pWkif4afjjTtRnDRkwpNiaJ3jeMD4y1sSwqf7V1o577Nb4NoFad3RMoL8S5EJYCbH8R",
  "key5": "38ZFXRymqqhBnqAFVYASuzR7uqF44K7W2WsgPBm646HukKQq53CYwbYDQGgQrYyphVQ6byHZeqzasA4d5NtxjNoR",
  "key6": "5WtrGFr4zurHaQxjca4LzvFLyBdBPMQ8fTibzn4K9ZNsVCHRtxUhU7M8QTGrzMsNcQC6kSNMhTPLTxRmziYKxmGm",
  "key7": "ZC3Gz7BHmpb7cmp7rFC7xomfXivqeTsT9SQaH65Cz43k5g7VDdGpSNj9iFBbimhDruGS5d8nFy3ZsHk5cws7EfK",
  "key8": "22EVU6jiS5oUxq5Tfx5NGm4GApD5oDgG18yna6fUuwkqhEn9cGyWcejFaDZqZpk85egkdpaTCZRxFiacf9yvakt2",
  "key9": "3BAFV6Jufenhd4mjMWjGBQfCm4rJDDH3JDX1PeXjmpD7iRYcYnSGCZbv5UQsE3djMRHg3Dkg2KYJcZNHXvsAkQ6e",
  "key10": "4npqzUJj4Jb2AiSqyFAPTTmMsrwfLG5hYj3BTFo71AxbFgW1G7F66MqhqvuCfJMHHV9HaCvr4Sbf5SPgEeAdEbJk",
  "key11": "qD1JnnA39eMrvAwKYKsGK9MDEHAHKC9SneMBzsRHkG2ywiFJG1A2ohw6F2xWWLSJ7QDQcW61diFkdJnFMK8CCi3",
  "key12": "3rYNXfB3VA2Evf4Jvz3DpVBYp15HVHYLzN2fA3ZT26t8tVyDWr2yzRmUsbY3uh2kRZP6HdMzysBDBGHivMkf1yPu",
  "key13": "53qqokWzHtzaMbRcSqVguGS5qTMxN1FhQpdS9puftYj9hsV7ycwB1KChMS1H5uWfrbDDNgjG7V3iPwo5KfCeyLuh",
  "key14": "4qvq4ioXRgXcUvZHqzwkiNs9aYckZ4Q53umCx4wQW2Kw4WCrTo8bhSEvboTN4Q2FPjeyNUz3LQtdMcThv8SWkEZ6",
  "key15": "yGgS6kVoLCoNnTjpKkFqWWLw7YxPpKybjruBnoVdoq97S8W2LznuVnnHoQL1gXvXosj2jWMfy5XciUegZaX6mVt",
  "key16": "VFtdRfCs3GQ7gX1yWipiFJwyCdYFsHFqGdgSF7kVb21hEfusN6zBtYoLFayHafGr6NorE7aitVG1FKaBQNgHXJa",
  "key17": "RAxaGL5o2cgYN5sYYsKkNwbECktrpw6WZa1RzJjZXfc5NeUFjj8T1MmaGYjaZiuBGuYacM8LzqCHYFCeAeeEAa7",
  "key18": "3b2wQMnAwNihFiLpQ4gVE7Y7z8LA6daywXYfsKfFzZLj72ga1F27L5jyH5rmZc797QnY653WSjnyVnaEYXaZhh3e",
  "key19": "3cwiExDw8EP9jMq6d9ZUYwkS7GXgMLRNwd86UaPD7iAhDcoj7uDXnsE3BZYEn3LuDToDnp4Kk3uFqVGpNpRpMNyy",
  "key20": "CsWNS8euuKytURcsurZA9UBuPpzqergZHmM4qiCghgWzTaGrobBaCw8YQGeY3skFcXeh8CMJkyQaPHdZTP8GyPa",
  "key21": "4hc4gECxiKzkrJUPuzbmBkqNEMMsDrB6pgo4VRAimHsZ3zMaUi4jSYLx62H3KiTN9yfxXyhxD8gbpfdD2tZjB4xa",
  "key22": "41gTRDPjqEoRPrQu4ZaBfaeSyck7JfhSwVQHuqm1bciybHG7Si2roey49YBzGsN9hQwbu7KmmRnRQ8js3CWzzk4t",
  "key23": "2WnDyoVhZg5HtthSQCSR15QmPZqVdMHMPjZGKquXs4ETN7CLG9mzRp3j4bvsQJSaVoB5UCXCJWnNBVajf8KeggRC",
  "key24": "3DaZBVEmp3DBNmZR88GV1J2A8qKphNYz9KFF8zM7uDXdMZD1ghZheUCk9GcUWULyPxpBPAWCjQxpSJ7TtNixCGcS",
  "key25": "4zpRJKvtx32V5QGMEcy9dS2e1kMnC1BeqMJexL4CNFHxV4aMdJ8KLnLdv18mGVk7Kw7kBuAWJtoBnzRqZfpCiFig",
  "key26": "48SJEhVFbxm9UjcQjpuDbVCGNf549jLa9SfDapYFCtmCR9dWNftPZr4Djb6NPW1927kuhGf7Ty5VQNsd6KxoMfit",
  "key27": "5Vzih9FioBeKBzWq1CoLw5DfJZAbMsawksN3WJkTojegj8WGQ7fqXAvcsHi28btRPNWCkV8L7pBQkkCSoeEG4HCR",
  "key28": "4k78WrwZkgvABTbNV9PXVvUqZbu16m8MxcsZyzdPU3PgreEhWLJuiipKjWN1NpTVnFQ3X7Cip5Ypoix8sjVHoe2h",
  "key29": "2ZLqz4GWq23zNXjo6dq4KyLAakYHMA3kPagTMAUEFm9ANYJFi5nxbR2yDUny6KYKxxB25TtHn8RGAQLtiSncLTfB",
  "key30": "oxtUhxGbL6t87jS4M5f5L5Kipzn7ME8faq5txszGM392i1cXbXsxztwb4c5GbZneeFpQEwJjBh6EMEFih8KAqFe",
  "key31": "3zcshteXZ3QCHkVwAEyJ32bSyB3FqaUBLDNRGjoH35WzDzpqb1oSx8inAd5q5sfhvVhTDjczoqY9tyrwGj274hQ9",
  "key32": "5hyHePwEvipNTFLUGALGYP6njfYC1ik4yhssYYKHoZLSo5DFmhoYcD5hbncFC9tdRRakU1Znn3GZuTFcGtxExCdX",
  "key33": "5dPx3zYrtqBaAZwjyQmyf7yCPeTG8M38DS97m2eepoYE4pNhaeLD9juiAj9kxxzvyb64vSmRyoWhkagnQywp8aaY",
  "key34": "52WeoZvDGwPFm93Gh1ASFgzXjemzG62XabdXJ7vjRgj18wXE9gVHdhTWrHtoRRLRCJ316pd39ZBnGmVksd8ATpKb",
  "key35": "F9TLvVr8aVzFgqpvwfaLH38fz1rVMbZJxdABoFyjxnQrMuv8FKmz8mCrQpiKCyMaCvfk1wHnNsPHEUwNognP2pz",
  "key36": "5ApNZT1D9Rzi3hDkXC7spWQMkFhJuR29d4LARTLZ11T4CPdRMD3U7tuuwgZQ4EqrVs57PB3TWsy1Kb4iHRtV44jx",
  "key37": "5jxDgxtNip3SQLbC36c83rwNnvatzwqKkcXeUxqyynsErpLTeNXFhvM8zUPVpjmJq5idSbxjiTaUesYw7ctCDhzU",
  "key38": "fS2fJ3ME98yd1kso6GYjwVziBhkFkWKmdoHAePqMAhB95Y9mmWmqYrjLYXRSB1RK11WpxJ6PKpvzgRKGJrD1FSZ",
  "key39": "3rK3BLCqJ2GuwRfqd4TfZfFXeZMQaAE5Uc1RqcpNvWw8Ya4i56ygXuoTh7ayccGiyABczj1DvzF3w7Qb5xvvVMqZ",
  "key40": "uk42ivtsSM1NHqVD81oievBBtUUEji6haA2jtdgQmtfyyUznXM2z2sSJ3iFrryAmSsCexxtwGZkyxks79ER8pFU",
  "key41": "5PAbENfgKmjwXAAYpSMJFpmkVz9xhsuKcKh8dqjQo5mhBTH91wKB1m3CjwC6J9fCC46Y3a2gp8rRvZos4T35NTzE",
  "key42": "65oktNF5PNtjuizj73o7cDeA1z5hvnG61QBSi4e5LSqzKf4tAMcrBBmRZSw5XM4WWoDwjUwJKxGHXAKPLUtAp4v7",
  "key43": "Phijz4VjwTT1AhXYQ5N2BMScNYSo829DA51QKa9HNu5YybjeU5SQvirmd29moc1JJSWjfhgcCzoB6o2DFfQuowK"
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
