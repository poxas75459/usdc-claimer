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
    "KQVLDw6bs1oTq97Y7dmnKvSZPWGxwj8BfLoxmSTZ3nkkXBEs8goZjw6Kwye29SjmazLKHHa9xxZgk4oCGgKYnmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F6RmBRoqdRZ1TLmNAEVzXz1LtociWFmvuCyxnJVSNV78udWRwnu8NM7VRa22j2QUuW1sbhnFmrZupK3eGSSWpoB",
  "key1": "4GjD4N8FaZ1DGW28uXmDVpsH77kjEpoA9updZVxhj5mzSALfY1zH4yUkN7MGJ4xfdxtZjcV1acGY4eRxu8e6hF92",
  "key2": "62tFWHP8fbr9g4LRaxprrnUqeaC87jQPvhZfXVdRPd9Fy6eNWgV3gn4xAwkJCV1iFffbwU6Nm1Q7XqTr5NZddDu9",
  "key3": "2ZAHmBTWi75uhStWsDPJsRU3PHvGvMmwBdvMRd2e8ay9o83voZg96VwWCASPDca6gdE3BpYMVLUh1WFoQ1WYBytK",
  "key4": "2MAnCt4wMds7eCRP7yh26kKxKNwGPVetPeQ8uCVHhYcDg2sLEcrqhemSBden4F4D6Fzyo2LfQcGSKyHtBnhY9TQ3",
  "key5": "5vwLzFFhc48yJ6B7ms2ruprZNNMJ8XeLERuBGM5A6fP29yxZfnYfiXXfFocEkbcMQfBXy1LK6isDx1uEMAmtUTJA",
  "key6": "5VMoQLbJtSYbhnyuWJ5LnHBng9CLtyBPu1FsMNKhqQ7sNEvSb4tuQsXcuRWxVDB8ydDCPeBAqVnrhrQZDw3yAfjx",
  "key7": "SX6JncV77cLtBTj24McXgghKAW8CNv5Kx7bXNS8HF2rhScyNyQPsyLuP7FUwBRPr6HS8PqYFgYTvUbTWnkPgWEV",
  "key8": "32u6x9zN14NbXWZoi8MMyJ2XVaw51ng7xJ4EkKUgL9Z4ZgcR1zbGJAZtAdb62Zm75XEdGZq2pdhvbSNEy8W2DutJ",
  "key9": "KmQosaCHqvoQMEoeNAE9X9zSDzQgQ4SFUhJSQmyg4P3BCAApFC3SMdDSy3fR51XDAvKV2VNDRnm1TnYMoDYRk3b",
  "key10": "59qsc7YCVoi12cj67yVSrULaCTuahsnnAAJ484hxJNqHD1CTp2pqgHJ8QeXmKseM6HHTHra3fVo3CLZyKy7BroBx",
  "key11": "2kvHDZF2nrmUuNXf73EmXiMGgnztbyJAmwe6XRcyqLrDwWGRPzDFCa7zYs6wx8EGwamdw2QzXtdRm6BCFYcDJGhm",
  "key12": "4TuPBiY6EzujqxSRLG73sNtD7qXk1wpwrxXsfye6yFHPpz8pCFKwFLnBNdqCS78irj4zmKSzNx77oapkUTfDWDQ8",
  "key13": "5YkYB5XZKgrntjCk4rwUPF8BB4j8J465TFqn8svkToTNVfQ63Xtq3APE1jJ68fQ2ARM5Dvq66EUbLBEQxLhQnh1h",
  "key14": "nftcdwJA6QnqFsd4HphDGxgLum5MU13Ytw8MKtuepkGwDaEj9au4E9qZgLwNp5vsrHufmkfMVDKy5mPdsZBiGGD",
  "key15": "3zacaqaDfMTB6PHGiazq9tfoMqZKWvDSjXuZMf3y1HCFkvj2fXdi184et1GEnFrLXgAUf4nZjvZg6fttQwPNw4DJ",
  "key16": "4q2cghHL84KLMJ7874rJtqo7YS77d29v9m4Bo4esUW8un7ajZKVH2bQsT6vCzz2No2wsY4rgRHBRiv6xJU9koJ9d",
  "key17": "QxZWgN666F37vthsfRhqciWqyfAMxaPyBKWtvNafi8GP699LLt9pNQXZD4AiSByo1EjoECzzFcKP1hk83c6ez9x",
  "key18": "53iUL43d7Wj1WHbctnkKvmD3GnNeacJZS6v9mMWNMfbHYUiioNpjCxPriVrxvpK3u2tTcAYcrR8U55wPaJXbT3rb",
  "key19": "3QXtDPL1ygR6ZhZfciSiaXRaRGqhQMgBUYygyG4Tpup9HebvMR8EHKx3VLYsjVV8pseJ8kwJZ97M371pAEodasLR",
  "key20": "2LSe9YqAjW16CmNvkF7jQpSoyqGpcA6wC4JJ7Uffpr1GSJFzLu3VoBgg3xns1XpJRVHnBj76jk5isYjuFncXmunz",
  "key21": "3dVUa3gB9WfRjJA5ogrfyQHLBpJwtDpLknyd2AE6j2onMmD5kF32HKwgn8DLrXVpznY4CRy5GW8oGDRsSbJttLuv",
  "key22": "o6hdW3AviJ2EELzhmP7ng8L5tHQMAz1MmLD3jXBWZRJ79ZWJnU8iUnraXvJ8ctXunTK9kRd6Cds25muMVwxjmzg",
  "key23": "2wFwuvX7CyEP6M5HUhig2s14D45z8Mg4SPEr9WJPMvR5kpx9xKjzxkRUuGQLePZV3KCvYGCAwX19o5AoGngtnVjK",
  "key24": "3VjGsxUKLTo72ZZr5zxPCvo23CkTaZzTkbctVDSDyhDRLe83k46dt54Rj3jz6XbqxKh3y9kysaoX4bF6HNibWLSj",
  "key25": "4F4bWZs35FMb9HZfwY5pUE5EzmMvKxLqBqLrucx4R8H92WFUHk8zNp6ZTChRcsKwwR52TbvXZs3uYy1SYCkzcPN5",
  "key26": "1k7LPET4MxFHAqnEf6KvdAqxhwy5UEaupriEGf7BRVGq4X9ephDpuqtmTtxBMX69M5oK6gQtoN7ZgyHB9L4xavU",
  "key27": "2ntVor9dpb6bwFtxFd5DpMqiXQbZoMaELw32DuUHMwcpDhfQF4JHv2dAHeYPZ8u9oy3tHxZr7fAqpGjrteLzh2gT",
  "key28": "4CepC1yHo8WrPs1GAZ394hvhAELAQUPfDYC8yPmtvNZAcMY7ZTSHFa2T7tpsm37hkz6B397f1oHdzSWJSUhRfUBa",
  "key29": "5Zygfxtievt6xsqfbA5KsjKdVDxu4hbeTaWHga9zEFyhmzPMbfgZ61rTfU833gwuLtWP3E4Ktdd659VZrw7VUpjJ",
  "key30": "3Tq7bjbEjdsqPti4WK1FNutcBNbPbH2gtJW5XcBcbJ9UCNxRDyiosivS1BjHovLDYpB2Mm925jRiZ4X6KHN6Lia6",
  "key31": "5t9dRvURz9VE4DmbDXD4E7A1XKWUxMFZ2zNNvTg6JY2SnygsZaYYqgq6L96CSzFHAPpjWABMjUUb5tsA4sAajBtv",
  "key32": "5zP9DvFx93VLqrv58mHFPWxx3U9VJKMvuBo6oqSSD3UDf1dk5faxKztXKsVUHKMqwbuoWuLZFKXP59FGsmJKM9wY",
  "key33": "498RDpr6Cro1FqiAmQthB49YBkwCGw8dKQdHiQ4R2RKsedwmL6JzKqohWASQMkTH3fuiEbLFaSVxDeGNN17u7bE1",
  "key34": "2bBSW1LaMd3fFvhFCK9hBMHtef71RGopp229e63Y8P1erNyR8TKEMW9GfnxrE2aXzPZBg5dQTdFTx7XYXqPL8Mge",
  "key35": "2WABAPefWP1kqhCShxcjJb3xHYRzsJoDURJ4B11Nj8dKSEq4Pv7kKBqgQhRxHmZmnQcTz9NL1wHYj9Nyy9Brbna",
  "key36": "5zLHrd1g6pmtDorUvVJmXQcMgLxbHrzfqczgjKfRWv1KriHFPmEMBvyjFMjByKHYBhpYueQHx2hiJkTvuvG6VMh2",
  "key37": "2VPbicunTdhmp1TCm1omJAT5ahcm7SqWLsehiu4Gt2XAcDXEJcFt8yy3Kvb85Y5exKn5Lj9mQc7XDbKoyXZupniX",
  "key38": "3PHAGV45mQYL83xwTxnRggSFcWWWFr4DtY8iaRZ1ZuT8ZzUUxK2xiuN49N5HpNydm3b6t1k4pmvJdpUaADShDoEc",
  "key39": "2792DpUdfh1ivfMA18b9r8G7kng4wrG6JtDioYezQzvBevmCZe3TYgKHGMFK3eDxPMc9Xz4EUH5H83UqeyZ2Jri4",
  "key40": "4kNBfSydUGuF59ASWghGBHG216GK8yBQJzWxyrmWEJxGSRSCwPMJM8rDNjDaP9F5V1bTKPSjcDEaoaUKQhFqZdJk",
  "key41": "2ktGBc8EAx99bP7xNRiwwRrr9hJsE8SMdHxSGssG5guKC4sdQD9DYz6o3aELS7i2droNykTtGycjLrfbS3yocTQh",
  "key42": "3rMNG3a3Rv3Z92ZiFj4YXev9hihPMGGNAnJc5LHK5jjNSoMTHWPWsD2pee9vmGeMLZxSWCve8iE9edi8G6wBFDQe",
  "key43": "3KxEmpAzxw2bEZf66EuSDKKjvJP2dwrnAW3ywvsN8kyTyNqxnXkNgNAtmt7t6wLLtvkmH5NqyiZ6XoM7fv2WZrs9",
  "key44": "4UmWCisqTHueQH8BF2YYoR3CNcEjpw3uFd5nE1wivbK21aVfXQXPnA4tc7W56cBNTbnbA5Cxaxgu85MAWSTDTGeX",
  "key45": "49HyCAS9K4pFAwnoyAtsrP9Acg1Z8hGaqJDTm7Y5nhTJ3DES8Tn2RpmT5FGxXoq7gviYCXjbt5EwkX8AC5mZ8vfB",
  "key46": "4w4PN2gceaWiqD4ZiPK91Te2Vck4ATB7FD75R61PW9paaNGMMmVPdQZ2arjMRGhtWtkxumfRW1BHcudE51VTEkFb",
  "key47": "54KNKfi5mkvLuFhPiMzKTXNmzTPA6876afTygdDUUAxYnoo424eTepbqpyEMWKNoTscgoThd95MgFp2bVQi2vstS",
  "key48": "4ud8J2ssU3ur9wJoffee5AY8fbN4e6icdtAqQ9cGrpx41y1Nt5vc7CpuRekiRp1LvZmJwQc8QVw96KCcSCRUBzVp"
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
