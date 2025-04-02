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
    "r7ivBZQMXK2GXhmizNR3upEYrnfdd2EawR446cYVgNbmwhipdzxuM7rFLeNrKg6aQLT4UeA2fUTaoiJwpcuLbrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MhwbYxkDdeJ4T4JcVD93CYnGkhJwLTYfEKXvSG5Z75chkcZGYuCv9EDh4Vwz2VfMqDuvKcT1LHbSv8hzFyMg9jN",
  "key1": "3NUsGY7p8DiJkYGvKcKMFzLfFSdjcMsMgUq3ZLzojb5D8FHT5jLrAbUnust2m9ZdJrqdZ3Ho3tnpxT1Gpi3koMWw",
  "key2": "2Yvn9NPPitBp8dh6ADPYLeQ6XDafoFUDrBDUb6vEytYZsSivr1x2afokJ3E8ZgqoDePuXiJJ8SQuvy1mEkzidMXJ",
  "key3": "5usCYSw6FRV23WwejjwwwY2Ynh4r5CjPn5XZxEipALecr55ktsiTzhetYnANhDv5NcgJLvh6F1W8HJF7cz47sL17",
  "key4": "2rytHMWEjY8jGnYWa6QTxeQgAcPus16ThbsjorfZwYfJsVh8qz8nu4PcFgyi4nqM4FnkSGNhYWjtMqUmXLWXxGuq",
  "key5": "QdXa6EvMgpV9qhpSdUfkk5V6poKEC2vcL4ShhapK4DU6nxFwLDb8VSFU27n39qbJ5gBUabZV3Y1q3PpEANccrc8",
  "key6": "2WEUFgQY7z6YymMJhqMdKrjyQphXuACqddTAy67YMd5t5rTZGySMUwCgqFyCciutvG25QgEwNtRtE4Q9rx6bnwrd",
  "key7": "4v7Sb4gvkBp149E5vGyWfbzkerN8YR3nbJ6tZ2CgpuyRDT5zNaXXXRHuHa5feGDu4gUWXoZTJwvRYBfdCQfbX9yP",
  "key8": "3K97mcf1Bw8UQ47e5NQH82UdXhWtzDEWEbTsoYeLSPBXcwLSTMhqUM2Ze2tv6wquRdHkf3oUzhQYxLgpyhqvnMfo",
  "key9": "5LwWU1oF5rTQUQNrHiUkWVHJyLu3qEXWvpZDE1M4zj2nkuPt9WVSrU4Xh8NtxuYLvc5wDXyuTCLhkhhMYVfKsbRg",
  "key10": "4c4ANofipXq9vv3iB8pT7AkNJVuGJFsqc94n42i5t5GQzhM1VmXmjmAyL3p6tkNFbiETmYS9T7fD5AQ7w3NSowKb",
  "key11": "4Fu3jp2cbeLG3nE8hp36oh7QAwj1q2LKYQoZbL226284oCBwHNSQHjqnwdB2YyLuYMeJnBmGk6AzyzxEFGU5YSNq",
  "key12": "9EkAQBQBqtr6iJ8QiAoKEoUGbCvX8f3BJYZbQ42dF3pKQW7DWLBMdwX2gjbQGw4KJhBvhbcdz4X5XoJMmxvrfid",
  "key13": "2TVSSbeHdPFEUagwASFhXscABYppy3SWJ8NM4Bf5qEYAz4VcfrstySoxZGfPR67rsnY8AAhGZwiBukXUebgBm3tY",
  "key14": "4Ep2EUmmY4Wq3K4pLRXF7vFJiMoDkNuGmxBSEx7uYuwDhzuhNZtkmAAjUk8M3bJo9Ncw3kN3uw11cfqYWJHNNvaV",
  "key15": "37JDX2KaRxPtSKntrVV1dQLDWHbeEGSikxzwuLAraGemkztujkQw6iQMh2D3uCRs5tU99DCDh9s7Pysqpq8D1Tgd",
  "key16": "5eb3XVHQZHyXkKciaaHH53KGYNWSRs1jwoMJrk4uQXYcbTKwstCJswJawq69CYPHVnwdgjiKwNEKPjCYt52UBF4b",
  "key17": "3MVSjKiaURd9gE5E6K6K8Xsx7spKW7suRmz6VcvLHjxg1Ln83V7wp9PNFsW1p5neNf4z1JTtUZpYw8ayJmmwPaBg",
  "key18": "5vEReezr89eqDdtXZ2dhKKVELycez3wHorERwt4EyLzYYmqCQaBLi1y3sh67JuarYaQnGjhzpGMdg3Xzic1mMw2R",
  "key19": "2VFPQysjnALkzXiekCM5A2WCc3LQZMgDS4FGZC6DeVdCiQqVwVixVLftBfHnPZopjub1dcah11XmuisqEPqUjDAu",
  "key20": "GheCsPnNLeXLHGov9sdrseP3BaTN7hgD4gVNcRooh7gXYGVN49xNmMELfEg6qVqvh8eXo4vf6Yb6xReakhhcSrp",
  "key21": "2FiqcGdDWatMJP6fsB8aSMqsxgrDXoqf6Mrftw3xmA2ayJhnSftXr6Diie2DNN7n3obSERi7JrfLng73dbwz47pc",
  "key22": "8ySt4STg57zkQaFLvH95DxPdP1eQhcX6ZhweDnd7edhVZLXLBBm9swk5Pqo4EMnbFpmUHzMmNS1ikwdNB6njPYA",
  "key23": "2RELejuVBAVpXpgPzJFzkZVThWnwgTHrRiEXpdanQwzQikfKvqBVX97J6uNcQa9V7FCnPSHeDFoqKG4SFfxoBGnh",
  "key24": "25p2Nz4mSwv1fikV7MUibJtMZf8ruATesPMy8uLN1H8d4CQ3wn6pA7kfENdWYqdV3kYKnmUqKr3tyYUe7yWZTJ9g",
  "key25": "4ZoeJ933cjdiwunN4W6HEHKbnx88hrTa4J4PaJXLEWVAypAmvQF7L7U6PMRBJYgmGFEXegN5YCa76QuoMo89wojV",
  "key26": "59HhJjLQRCKEmsheCJrYqQThGUxXXAvZA4GRsSr4g9QEcVQz1KXyFDWyCERMpRGNRxaisPWbAWXvDyhcBzCo38cq",
  "key27": "nfLbsnryJGXThSMs6ogMhswBuPjZFbZkQPQoARKRB7RARzF7mB1CtfanXwCv8VdBBEwBqQoWpY8i44PrtugUcck",
  "key28": "Mc8upjNxGXVA4Cbrm2BTjaadYsVbNxPGkospUQGhhWiLqjENUmYuw4pS6MGgbGbKyn3ipFqgM9kJkDTUAaqmTyM",
  "key29": "3kGktAHh4xja4g7fUq3idRF7NJQX6nz8s531SnHbeH9n9G36N4rDC3ggVWjGCscoVf4EjP5FBLcqBW6vdAuvcZj3",
  "key30": "8j368BLSfsPkKvktQGhcN4vKDK7vPUSRKQwvXYNfsr5D5HmCJuEx3wLASkCxPVGUGs5Z692xayHDzUA73ccfxU9",
  "key31": "22CJwyKZphPw8iEr4RASUZnXn5hDpE29Jifmki1BqgjadVehBgxcG7Xc2mwNraU3W8ssjcjm5kU1azBSK16EewAb",
  "key32": "VQx4MrnwsJwz5qnHX2chEKN7ubBdCK2857EJWuqGVrnkowQrEhzS6KA61WQEEQMifdoLBU6KagZqKmtKF4mzAFt",
  "key33": "3RetkceSgZsh3sNDvZFragP1VUuUiATwXwWfWi54QRU8LCZgbxL8cy6iHVZWW6L3RAmhdHZ5nRAhrdCJW2GxwbjF",
  "key34": "3rfGSyuA1KZ1woau5NVs7B3HiMEv2Wo8xEkRJP5tfmsB4qWmm6HLU9TkJKNwYnUZXBEyD8euPrAnfXhwrpTpRo8f",
  "key35": "5PY3r9LEFwPCUuD6mNnmEZHubFTahWDchMeYKVqGuAn1hJXQDGx9yVPWkbvpb8wz9QjZhbwJYmMf4RUd96Qrcd6B",
  "key36": "56uXSEmdbc6e8f9g5jANGAVLatvp7KWZRtgL1Kb4qp5sYYCXsfVcDQWwkTrYyFKUKybteEJsd9AgtCzjpns3V8ek",
  "key37": "3FjGxEGaWqAshGmQ9GHb2fC9f3w8ZTkzpfe1TYTkEnwQx2tMuyNZs8nCtKBJcDc3CaZLWGoNGkso4RPfDZZCmWq6",
  "key38": "4fBHguZ69Toxcd89MXJRVWWPv859VWDcoyQ9AK4TVgC4Qvrg5V3frJVRb7Gv9j6ai1NKuWVfyfEUKcNkWLhYUY78"
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
