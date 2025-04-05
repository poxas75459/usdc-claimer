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
    "3JLp6LDZ8RiUbnKf6TQvUUYRGjsuhru9A9xMYXyRVynuVWfDkmnExhRYsJSbdNQwSps4Ex2CWM4kBRi5K1AeEf1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ioMFxSjghJjmwadW1rWk8YrQHPTgur654nnnVB712zeZjDheJAzpCqdEDqFia9oBZhpjNWpePQi2KzPzfsrxAa3",
  "key1": "rnWmLFfQHUajpK2zdGAhC14QyUhtnHZGvUjEoJKEC2dMJX6doc9VE8VVroE1rT24ETVDxLJgP4P8WhQbVRdBGXm",
  "key2": "2HSrjFyzLvZaDGx3X57J1FwEsi7EsWzPjZijuAvaWtFbjH6V468GGjWR2hw9378yVyeum2aPzEKk89KLU1iNPrK9",
  "key3": "W7caTjsC4V3NoYcTsY3xRWkkke7QTAcXL561z2mCmQ7TyzJgAXFgM4RSDQQf8yhgB4ZGvZbBQ1PrqoqgPZLArEC",
  "key4": "5Q37HdxNDJUwpHkufja2jYQMGBCmcEDTCJA975AvgSLUkWhpmeFwps7tnC9eXFJDyuHcy97vubhfRtn9wVPbU8xd",
  "key5": "5yAnFxAHCrTB95txJV8UakCsfYDsvZiDNqGcKfikGw2Ky6Y75VQ2XhZm2gzxKVcvMed4GqUQEZjwm4PKeWmaDfMM",
  "key6": "AUqt2ZqYg3SdWHiZ2RxSKq4DkaWaTr1kSAKwLBnWRZjDNkELDAd2bNkFoUCqKZSKfR2j62TJmqCJLmxom57xxHa",
  "key7": "gE8gCAxyssqqDfGaXrxcG372bunjNTTmDVfLY5hiRd1FFSPmxXnDuPTbAX3bXde8Mb2uX46BWVfNW96ezZGeZNb",
  "key8": "6Py7yPtk6kCoNJgfdAyEfj6BrXzvK3xG8ev1YtPRjhCZE8tit4kb95Xm4FfJkkt9uwoDMmRoyPdGLfcDC9xutmE",
  "key9": "5x9CcYDsrQvDtR5PJqvgLgQ6wUxzE4MaxGp3yH5QuFW5nwGYJccSwp2iViidEzkufhfK3U67y2DBsvWmH9i9DE7a",
  "key10": "5eKensJf6b66DTjhMcvrQX1mLnaLBof2nfvrRZCChSWsbWEXXtB1VmPVrcMm91UCuNHn8gHaKyzb6GQchbZ5Lg3z",
  "key11": "4CtSWxTmYAdnmWTgb5PuD1t44eU9Da2DNgNUzYPqVdhn4UbxxTuVk6g1oLrCSLrvVWJVGKo4j52P8FSRezxnZgKo",
  "key12": "4QXX2hNACtDDNXKMq1Tb2oPSr3jV37DujFUGfkBwhiy8uk3GbSsN4NZuw5HpQXLfASgsS6yBe7n28mPKbLtFbhdS",
  "key13": "Ha1YphjCPTnWJo9Unca5upjVnSfpKnxrcS4JjY53bXSk8GiM9QknHzuLgaSVyZHfWFMgn7Z2y943tWHfFgzdrTX",
  "key14": "4myzuZHNT1chNdH4wTMXQmczQFZDa9YSDcCjDp6PmaYHcdyfJzEqQ5fKL9wdRngvuzMmGWG9uT8iJSUsMQ36bYga",
  "key15": "3eu2cjdVHorXFyx3uRQ7ZpK4hehyM8aFD8PJqDSwqS1dzsbAjMzBLmfv55H4oiJfXFfQHsLFypsuUDgCRzaRfUdw",
  "key16": "5uGGpSm3siNnQgtfCoKaiCMsVwoYLK1WSj35wJevwQFf1dJw78JAV3JvDN3KMvPceFMSZPSiPEgHRHHrhAYmUgnT",
  "key17": "3c5bW5XpsApLrgJVNeCj95fGZER4NXpM6unfzpvzQrQ2zj19tZqbxbhvtQdYyUF1BTG79yxKVb7GNF7e7RdMwnZF",
  "key18": "8yicf1UwbmgN6g8q4KkX6qrRMuVAQZLeHKnbcZkURm8ZVRqrD6fYwCegVbx8TFKysmnEzsasU7zix7cipbdo9yq",
  "key19": "82t8mUfb1wpD1JydnTkzDk315KWCMY2h7KVBc6pfvczmj5gFe4csXurgK3JCun773LSCsBaMiirxP4hxqWoPLtc",
  "key20": "33i1rdSnRY3bds5QmcoScBL5cVZBqbxUWF2zyGzQRCBxRMwsqCxxmRW3M9SRqYKKcT2oDyLmxyfJxnP34noJbKg",
  "key21": "51DojrUxCirXBTS1oxapEAMFDEyJ1Axg5kYL7Z49gGBPTKaJ8JPj8yantjeFySzYKzArpdVMRsA7JMmadtV2amLW",
  "key22": "2jeVv1e8HoUk6UMs8EgiDACapUx8pEnnvVmhyr1BP28ZYFvB6d7X2BL1PuvTU6qf3NtiC4kvZBuTVQ2tApCKF3bm",
  "key23": "5oNM7zKGu5vyRXkQojtixp3zvSLcCBRREfagHMTQoM1QbiUcCWP56hYtBHYcC5anL9tuBmXLYJ2g4zao5515aBRm",
  "key24": "K8bg44sJwcAetChAUSvBpzgxMgRdYDummy6pEvxShTCbJ8CZQdJypMpTcbCSHBWi56Yf8ZsiGfzPeRR1ANVhFtD",
  "key25": "47q2XFeEjAT9yfW7zbbX255dqCD3KTpV6qPzPSrBYsU8qEkocyGDzwtVzUvvdV5k81mmNfXeZvNX4UzwDuv8mxcd",
  "key26": "4Fm5SJsrsv7y1pb3LePrwciX2XNWVDXym8yyGNNXegRSzNThmw7iqCWccNVe6xD5jygFA4bQxWkFqVEixXPLNkRw",
  "key27": "2qqwUTnxTSwq7fm3iKZHsMiVMc6zGhZLRiGDzgztgdcgT5ShdXcs7pMM84USfdNgvgkNtqWmbtVvGkXogzpFRPeH",
  "key28": "46rzWi6ovkvzsNFkyGos3udYkmUNETRukuLdjup4jxoxwJCjZHZqc6yxjof5E5JfWAPNj3ZUS1uWCfbA7w1MrJR4",
  "key29": "5WNmxt7fKK8AoRA1sbSS63aEFqezYZpCpCtPscgVeFXd8gNRBSRXztrXxDgX5yZnSpFe7DGou1WaRqFHT8W1Lz8i",
  "key30": "3a86k4B1YCVrhsSC9QnKSStFs8XmeDB7anTkxS6Zn5FZBTnGVQcv1N153XrxHarZDEDGPmh3XT6f8VaUUdb299H7",
  "key31": "5Si2yyktL6EJPrM4LSCKyKbZVzFsNADNFqw9Er3xJNsxVgdZLRH7P3CDsEwKa7NxN4xP6XvCkC6M5LjKhJmYksdU",
  "key32": "2QjjQatmiboUGApNvSQ6Q8iaiA6fCQGmojPhNB7NnyxGXi7BoF8kmGE4nT1Bs3yZR1bqTYVfoawBVBaJn2oPzLA7",
  "key33": "2LZmmQoB2ZoNMDJJsVJomfxfTjREt9hpZYdQRe23LQrJV9LRqqtRRdYp61JKtEX13EGBfixzAKFEX5pRL9jLDGNr",
  "key34": "cNvSN5KDu7pDeswbgwdQDEB4nA6Ng4tRaEJ64FpD73Tv96fs1vGo1oPSmcvp69CpQbEXurPedfgkEgRRf1WWRd1",
  "key35": "64vnnjkZVwLg5h4tpw4ybfKeQorFV9YMBGyhk2vuSFgB6U2L3fW2haf5qawdx3NYkP4n6LPTRoEvRx66j4ZCMePo",
  "key36": "35Vhajm6qH8iBvLU37h3NrCB3b8cSh2JUijup87FSuy18wwiiwWzka85rwx2NcLn73NyCGCqcJc7adLvcVDNwoRN",
  "key37": "2JuLP3QkXoR27TByVQbghpzmcgGQjtDJ5EqgmhkGUUNGGARPrbHxus9hVddPsAYQyUgMvNvkzc6zj1omB7XogaZg",
  "key38": "5K3wRCqJy1ncTjeDdmPDZEQLQYF5dT5qGFGfdK6De1kF5oLAFNXiVP8m7A4hMnKtmdVWv8yF7HcBEQDS7aTariWo",
  "key39": "5f3kUqWceazsRVGAZ5mRPQXTRWdufui83AAWdcXanZX8HKAxFwGVyPHR2PARZ6XWrhGroGeqwu7REgfLUhGAovui",
  "key40": "2Vef7B7arwYJmDAM2Y7oy7jRUxYC1QmrBNgCYpQFFsb4cMtMfvLBqpKkD7xfv4h2TPcqtq5pG9Zw7aD54SkW8FGp",
  "key41": "2kmseiTnNtE7SrAWPaS6bmQVQk6PxvnhDRLTLDvVAmXDdbuFAhwaVyetAqAS8chTk4YoeE61YfDmkX9BCowwSDZf",
  "key42": "2pKgqmgznoV8HQcDhxWZgs8gF25C6e7RAY8jdCb2NmR9BNbitdSKd4fcWTYrh6EFfDSLuYDVHX2VJB9qgXS9yN6",
  "key43": "5QmKsLDkAgMJ4GYos5KwmCkrYw7e8j4kDErGB7Np8oCBeAQWFDvvZdNRr87YK3oy6RUE6aWnCsASiMtL8T1cRVBd",
  "key44": "TrJStBSXwPSMtRYBYH6EKFrHbTmRU2n57ixE7TfXKBMSXffB1gfXBwTpH69KHY3tL9Nn2BsTJTxugxuwqgzMgg8",
  "key45": "36FnvSA4HQt2QH846qr41GwJokmkNB7U9UQM5gxB4tYnjjtekrGKwu39hyg3w9GEgeAm6goR5dyZXj1Pq6BEU1oG",
  "key46": "51mvWEr2LoqYtMHdgqp3NhVZKaBhQnNW5NvmjxBvRKhyfhMb2cJ85rWJk65S9zaTTjbna2wNtbcciDPtMvz9gL2g",
  "key47": "BAiZKyEF3dPSu2EuLjnSWDchqSXQvbafdKXYh7BMdeCjqs4cdkFJtbBSmr1nuZkTUnsL2APeGr4fWFXJu2CDt3N"
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
