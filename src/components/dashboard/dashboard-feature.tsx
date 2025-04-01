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
    "3kpzR4hKtTYnsAZdbb58xHVfy8qiLEAVBEjYw7YeY9axHEsvM6FrXZBuQrqurWw2gXFmPbAKWTMDBjZhSq88eeAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DLkdptujAVWAwykr1tRLxU6QDADojM8pdfs91CQjeCmQ4xyd61JZTVXCHWFiA2LRpdNK7htQygs9GUuyBNFSphJ",
  "key1": "5YQNW5JDSKg1B6hvBpmPx9TKhYaqVXyuY3TxA6XVCihw4WmLoUc7mrLghK2Qaawn8eHm2eTpBq1LVq9wFN3LkKjR",
  "key2": "2nh3ermZriEhHqsVUxt5PKn1VgLWcHTmKc9BW4WyMwC6DfEvYAE7LMudohmX1Dnz3tW344MQXBqwNeT5PuHt1v8d",
  "key3": "5NSpejzBQPMXX1HmAnANfpMqwvkLpH84UT7hq86cCrjAYKFRfjbTJu6hGiTbQoLfb6mqRfFB5C4RnAUqSC8mdLkR",
  "key4": "3AX2Jh6jajGLXVwMLiJ8GtSG8ZBcCYduUaRnNo7iT6aL2U3peJ8uTi9evev569Fjr19D3SBmtxWcHz3kAtWCLG7b",
  "key5": "3b5zRoh8hFwZDyLnbzwmnhnVJhGPr8ggRtTVmV7cvD98b6d8kd3SYSAmTGyw29Lgf4m2ogYy6nTNbBsb51qndoVE",
  "key6": "3SukiwH3YZ8vsQLnXoUJorzgP1ueCHmygit1SGwTEN1ZYAai8KNQ7Zf2ZbMg5JJLR3U8E9DoecrFzAZT3XcVbpnx",
  "key7": "p3LDL3A1fbEiEXn84P6VzgvnP8aFn7XJgzHnHAr6u2RLKAcs2By25ob7r7Kp1YV39Hr3iNzNdEcVd5iiaCntQJz",
  "key8": "3QneoHfKisWdcyJtpuLbHN9g89Z12LnaRmA3qLetU1o9Ld1PY75Fubeg2z2Gi1WnF1s3kecURtxExreh2sampMS4",
  "key9": "64XJGpaVJ3B4DoM7cXHMUxtxBfJysG2BBW6bAs9RC4rn1JxSsrt4P9RhyYsNhvrCPPiC6NwWLgqWNqA1rqRUQFcy",
  "key10": "5mXLwWqFkR4PULJyRyCwASGELC6oTFuioYpzGTP35MUKiYcs9h3PyZhdao2xLV3ubi7tPaosEc1r6hx3mFfm42mQ",
  "key11": "2Z8mDNjQZUnZJd8jNnPJ2NP9akXtiTS7TAAUiEhR3jMPousxdqB7cDq8BuEwuv8cbgBtYmxoVu8dLkUaswecMSdx",
  "key12": "5WtnTg2p93RQRWRnMiXVBnz9MrwdLCxK3HRqYzFhqXJ9brbkR8MUL4bi31r3pgineetoeBsbSk1gUuEji5KyT2Ej",
  "key13": "RQ4rQKbxnYJjHtLm7A3CPvy3oVVGDNTbKrZgJSrRa66SN2QN9ppABwb5b9fTXnTCtkHG9mu3AcTEw6EB4yWJFYr",
  "key14": "4PnHJtXhij1hadq86Sm1fkRfmQjjz7qqygKHU4Ex6mVHBGsWHmpnRStiCQ3rwCEsTStoZwtTBF6J3kYWofNo36LC",
  "key15": "3t8B8eA8U62JQSuUAiMmzn9om5ZxyyXkyp3TSZeh4db6YUn5ifinDMrbZShGvGTmqKn3SdZn7fD4MR72tRKRz2pu",
  "key16": "5fFJLSyWvgv8MzvMECnY8hA6JYr4T3MrvHcXYx6TN52UYrdEWA4Ptzrh56ekaWMx6yz8zZ21MyBKbAAULjSigJMG",
  "key17": "3ATGs6bT2G4UFh4RAzB1ucNEhBzfY54GmMEHWgUcSuwU1gAhCXWg8ZGEgYhytR8r5sBmLH5tGBTBZsGTm7uPKm92",
  "key18": "3YiFFi9MK71jCWY7svKpGFnjuBdWzkDLHiDu9nFvbranDF58PDjNTsGMm5kcg5PkqcDKdYoqdkUP4azz6Y98o5sk",
  "key19": "4sfE7rGKzxK6xcjgaFvNj1yH6vTYcvJf4X3SF2muZ1PBS3wHBuFupLw1b9YFozD1ycyvgfGThNXygp7YVQ8heRJn",
  "key20": "3Aq6y4i4FCUrVy56ivUCobWNC3DaNZdzPV2av2kJLx2rgxukdsnw9Lkz6upbY4SacDPP9qRdX7CCUtx9353V6wXw",
  "key21": "QKme1B4UW5jB2yTDNSThFxLWvtsVVpgLiAHY5Pqf5UdWybmdaNtUQn4VL1JdGuXLoqFPGBHoh8fixHKng5C38hL",
  "key22": "FSVZ1hiP3dYJ29KMXzg4NoYMMzqdmaLhuDUKEp5qNAbaRqeCVhhyTHsmrFqyacQpHjHzqwcKifVfiR4kVzoR8Xg",
  "key23": "sbiD3WdrPenTGUJtN1PAxnr2oMoMTywv2ffzEN26q4k1UDZUjzZPWa1MAvmtyzsFf31oz47EjQ8eBmH8HzoQcHo",
  "key24": "CahQ7dUxYptVZhNmz8U3BH2GEzHQqXvucsCoiJm9rokAPnjwJN2g6HN4F4aCsB4Gy7yGc8Ge7axu4qJHiRFExm7",
  "key25": "4bwEK83BA8n9fbnBY5csC47KgXZihzZcsiFY6XJJe7EEacE9RhW3gsANCm5ig3sVMFJv52hTV4ar273D8NfdXBnx",
  "key26": "52ruQ2k67PUiYA9Z2zEPBVouLQ5AHj73hmWV1ymANi9tzHcCqEMkJE5Gtaz5HR5o9z3TU3WgDP6jYfD6wJ48HkHt",
  "key27": "uk5A1T5NshLA7dMjZ3Vz6iHYQB3kiNhDNBb1tR7ZfKiLQuFsLqt8nXm9yPjzWKo5EFq4Prn61AHRwzV8DimmYfn",
  "key28": "4cLi58LyXYdQNZxX2go2wpxTByARuyDRUEvXAatxvtLUUWpAFvXufeM53QMJWaYp4cvSQnhgTDVpRwcWzuF5QcrJ",
  "key29": "5RPGLKgQUf2detK48q62UAhqdL9XzffU19ti6PTHJoT2ehQL4ZxLwoqd9RnvVmAzJi3yCGKwQrMmAaztwGcqKjc5",
  "key30": "4LyHJhpNnXmnd2NLVJ2nzp4Zq1o8b2Acg13U93YGqohsNcWUkDTbUeHpxeU1DD9aPSzJtxxMHxS3tGEZynnTimvt",
  "key31": "2TJZcMfAuNRh9MKxbjRimboVxJQqb5p4BCY8NhGjdfUSQSTXc3knXULHzj5novtGXMb7K1gPFFaVPMqkfugqc17T",
  "key32": "4SkNMfGwgaYXCZKDkkUUn4nti4dtYUTcj2hZJ9jy9rJnoBfdBeSNDZmFxoperftk4jbCfF7xwtoYhMRDUTzYBxzD",
  "key33": "VkT9TPxjwwyK2CxeTYDYrE3G4tsSFi6v3HU8ivAu7eJascAWuAbtLZEjrBivD24sYnMv8RBQUcgKYPNDDSdS4wW",
  "key34": "5yESLCp3gFzChm5h2kSpBHngzkRX6Xdd6Mi83wGFsjmxL6oA9m6AEHNmPWcCb3jr2oHmf83wVQZ7zQjT2sSARH12"
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
