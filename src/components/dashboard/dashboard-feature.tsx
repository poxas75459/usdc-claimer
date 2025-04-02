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
    "5ytdkSDQWmA7EtzPyxLgv6tBWPyhXsLh6LKZdTnZ4GRT9gKvCrw5cAVG1abugXNWXebVwHsdoTwPMCBfxrpgDiGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PHFVUgBTYai3mLFEyChfwX1wXuE846TJBfGNhZqqwP748QyZNoWVDRz94AqqAByN7pXySMiow5PKSL5Mc2HbmV5",
  "key1": "3hy8cHFSjLWrCzS8BmcHQfmxYVZu8MsXkrjv9tDUsD6NKX581LT7p3Gp8g8Ap6ZvrwhFHD8SunhAQD9iDn3cJac7",
  "key2": "4mXNDbTQVVnEPstJgSN8mzAWTaFcF7V1hxGABBGZmFKqiF6gam656BcqR3dDXr3vK6SmWg4bkXqFqSVpBDXi3HHA",
  "key3": "5Mm9xPrALo4JuLqh2nvPZCWMNwFoVS4ty15zrEw4qrq6WUKPB5uvbrzWxj9682tHLgS8MXRtCeQ9b2u5UkZkx43w",
  "key4": "4ugMLhNe6Cd9UF3Laj98DeYMTUyNZZDJWM2Sqtj91g5z4KR8qDj2mHpjTJpYsdYXuXUckjAgRoAKpd3X2CjCETgu",
  "key5": "4JCwHZsX21Aay3qVjMdypKc95CnZZKmWhBiR4Vz2rAcMcYECgYLjv9aKwzaNsnVn7vRPFxV13RuhS74Z68xxkq3C",
  "key6": "3dtJf6MTmCKccwmhh1zfPpEBSEBZHN5mQPcATTijzGm58PixLKz9gFJkEqnMVJwXnvZxMtKMGRn7rhhriho8k6qp",
  "key7": "4W9xVamhCFCn13bZbz1ZkXT1FHRbd2QsVjpibMZwy47SzxPV7f16gEekJ3pB6AXy3rBPEpGgs1Luu1T3EdJFcxM",
  "key8": "5oYFWjhNroRaFU8rhuqQLE89jmtbQvPtE5zQvY6FC7ygQnya3D9TS89gQD5G7yvX4jKqQADZmEUVMV3Ex2deBJZJ",
  "key9": "3JbGAGtzUomobCHbEKQfRhibRMbL1wV66Gq6xDsvs95swLMe6xoahqj97MmLeomjjPzJjgxj6BkG6mW4C6aDzhtX",
  "key10": "nqHcXsAzmNZx2RoiynreR6BTCyAv523b1zLE7GTTsQMVFdgnGS8Tbnm89jsN3CLL3WaWXxLPZBLZCJW3eNyB3eF",
  "key11": "4HQVqWdQdi2Ki127CHUbA9if82wdBbKmSW1gWTNpxLL6S7M3tjJzW1bxcke6r6fBfgKTJmCdxo6VjGUoNpvbarf",
  "key12": "5nSPC5CH7ooiNoMhqJdCDFWrzm79R2G7WHkGe7gHgm9XXm1qWgyrFhbdwmqz2D33nAMBc7W1ecXWpxj52FzFsCKX",
  "key13": "2fu5cBXudYmLqDhSQRwqJp8HV8ubgHNJqpSaQahdBHSLJz5XKjU9Pte5uFLX1DVtoiZhW3wdMvcHoLNXpax6Esdn",
  "key14": "3yJAobpBp19q8RjJLx22Wv3PkxLivei3r2DuvyQ1xTN5nEwdJ1yeGx1u5yh883L6YYR9v8dWXbiaQy5LaF5x6c3m",
  "key15": "x5ivhhpRfwgMmh62YhSQYgFiQbjFcLPuxVAAEUBvoNFctMJFNQbnt4YjtKP7CAZrvny2B9cTwzLWro8tzX4NLNs",
  "key16": "5ZcBB8PekZMUcuT1YRMqihKt17Rks2oTBkgXDij9wABVTpWDYRZxocR7iLeqnFBq5kpC5GNwGqajnqPgg3J9TyJp",
  "key17": "4MnMNZpWMPAEiTfEQXsymfb5RFuXUTtGG215HJctFgmr8cFHmDwZ7TZmSe719GV514fbtZEyfzfhSsajw9McQwab",
  "key18": "64v5znSHJNUrX3nWrx2XEGbWjapD5RLYyqkEQnXSXWjt9X5Me26ASVzoXZXo5HuTz7aKNZW31rAJoE5QWsVQENC6",
  "key19": "DuJt6qUEaZgJcWSkjGpWTSbtMthdTJfq4nbxt61JQRy1ZXPYb8FtgwfMk6f8bcw5RB6xhmcXRBhaHPx77KRogwg",
  "key20": "21kefZTqhHpnX3JmUvNFEdfKcZ2czndgpekhf6n9MWtYHbeqs11aZuwcNH4UyRHGztKFLhYTwkknEtaToszzBCwS",
  "key21": "qsYG3rHD8pmEwgbMP7fba2rRt7qWPhwTVB18G9ViE2HveaKZMahYTbv5VhgEcxzowHm3pf36r1KTcUkWw6g4fuj",
  "key22": "2vufUfwQ6h1kUGvTUZLGdWjVzphpvsJMxPMX1QS1PsVmQB8UHPX5FWyx9YLRHUThNoWZkH6nEagHVjEJaEAfSPHt",
  "key23": "24qKiRkbt6eiRz4VXeo6sFuBLizvqy2vXqwp4CoJGV9EswJwugYTUk2CDn4GEfgkBCUyczXcYj6SwbkqNCE9iak3",
  "key24": "4u9hXjLymvzC8Gciz8kyLrzM5K31Dhxs3xrxUJZdg3fWAUTBqRp1g5j8dYqPREk51SdxdVNvjfUefGbjyzxZi8Ay",
  "key25": "4DHNPJkSDMM3jvCv9TdTjMmzRo9Lt5Nr7ZoDGThs4uYDG9GGZ6MydbjuNVY4aSu3wM74ZdRUNrjPPjeajtrqrKZi",
  "key26": "5NGAba6A8x5WDUWmYUoArRDVtvUZuE4wHnE18wyB438yBBNkdhQXkWLHoF7UzpTD8s9dB6QXFbZvMsQnjZ5x1SrV",
  "key27": "5pa3fYa1ajcfn5t7GV82SsTUPnEE6MTrDQCQtECnWMQP4cHi3hDkhN2GkYiNhmN42U89Ypg4ZPv3H586HqTFor2p",
  "key28": "3eykw3dSDcBe66iixmD2uyGNE1YFakiWiegA9wSMQjCtdV4H5CDiQUgqcFPJqjemo6M1hzhHZXe4g8B5pz3LQwyH",
  "key29": "4SJ27YdKuGSRxBC1MbpRi3P3gqkcF9LukS8z4ZUVBGzQ6AMZPRBar9vabLgVJWM8XoNf3Cou6YmnvJVSLaEbzGQa",
  "key30": "2nK8NH2iQgxnUCpb5muJC8ys8ezJ3vAJkR3XeHmHcEAWFfqpaUmcgbcrzj9kfhgLvktctidwgtSa69p2pch84RyA",
  "key31": "2wAVvS83Sd89xTkznyyacAqsdr5kayM8WjTyXMopDYt6BVCpEvwMAwtMKBhjRLVUHdawKWMtrorWiMrhvwmXLeVg",
  "key32": "3fnEsCFw5aeTohU8GCxRn3Xm9t7o7LnPQSMkbaTyX8fsu9tiF5TYARn5TAyAWKMc2fzXqF7qGDjKwwyC12nkc4d4",
  "key33": "2V5ttWt6fvngsudJ4bc6xqDEgboFDxeWFBmqwy8V9HTiSn5c24aDmR3QuYqi8CX75iM8x7XWiGxzhKNKMXRwDSkd",
  "key34": "6tfSgwu73fNpEit7zn7yzPU4LyTq9E8SKc1Yzad5DF6LhJqE1TspuU6Ab3MTJ5E3c2Q6pGSR58adorXnLphe1gL",
  "key35": "4jCLXLwTMvchJN3SQQmtbfG4d3waara7E6ePBNw2i4PoVjEwitL2kmGp8Zdzc9Hbipd5LAoACWPucD9mH9h6tkvS",
  "key36": "2Yj1ajmjVnxWj16ViTs5p3Eg9Gmnso2BsULhHnh8c5EPgQ5aiNNtcKkgx7PNEDUses61LSZAhMMiBvqNpTDiGLBK",
  "key37": "2C4KEzscnNza6H71WzzgF5oX6CnWmLijnNkHpUAhPNx2CUx2UkzBQq5Qs1KRRLL8gGHmNeVaEdosBKsmaKsxHTcs",
  "key38": "3ZPurUd6DSqnLPe2o5FFpXbXQ6AvmbHkkbGxJT1WiLe2MTXC5bQ2EjtspiQXFp6tXLzHhtXtVAFjGHh1aPHVgrJR",
  "key39": "2QKz2EAiXyqWiUSURG9brYRMeSy3dMsyCe8oxbTpJpis9Thr4Tbm7ywhaAAm2eDtUo9NMeL6XGwXqBfjAYGzuM6G",
  "key40": "4QZRAuazb3xQohUXtq9aDsBSyk21pjLgX6LLJhd1Jjc3LdAtd1EQHiCwFn7xJZ6pcj7AuzbuihVAukzCAyrRGh83",
  "key41": "5hcwamvGBf5Kva5G7W2wpdBQtmR2Bw71NwL99GXo5DzfctKfZHDKmGbBxvWzAgDjJ3qeBKUxDsm6vdFE9U49nvHT",
  "key42": "4Gmo8FC9eSWaqN5qCCd5ESyFtHu8Wvxg6oZtFY4o4tCQ71FjxBv3RUTo4VXFZrj7RTTmvEWZmuUPXiTVmkFMwood",
  "key43": "5LtKDz3eAhQfkNB5asWV8oSeB4D5q8n7tLBBd82boZTeWG8xj9Tf5Xbr6rfhKQR7ijaS4tPGRd6fhZRuT8mHZSQJ",
  "key44": "3MoZ826H4esgFSYPfhjhneUMeMcTQeBpQib3oXCAV2hKLVCygNaHi55ac593vidTD8VrMgdTBukHHhN1KesgVqEA",
  "key45": "kkEqG8DC8bQgiyFtLNfhkwA3Cb8miE2iQTCoaDTp6u55c1jLLuG7rbJWtgXaH6zVNsTaXLUfvAp8V8yqoU7jRZD",
  "key46": "3mhQSFRDPcHGsmX4zG9yaGGx2isv54nXegNH85t1ag295CCF8zXUPeMr3uRP8XtxsWY6FJzeNT8rciQp9bGpjHjY",
  "key47": "mxxu8AuTtVcEViQXqafgGsPjgRFMp23ERvSxWc6KXgtp3YZEmNYrBoGcqeWDLKp3JF8ucDR7Q8eD6UbKJfJipMz"
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
