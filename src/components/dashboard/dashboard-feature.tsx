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
    "3dKcFxBZfZJvKP4m4Gnzhrv4eBUeRh3Wj4yfQiKWVAeqxHi5oeGvYQGPZpw3D6FxDKyWSBZKz4N6oWm9TTMNfa8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gR7LYqBwvafu1itdgrRzSrHto88s9gJNaRRrso7yhqkVioGHV5VmXXtEcHtWHwwtTyFB7Lm8PxpnPqDdXB1aZNT",
  "key1": "5TF72tNsTh7YHvTTuAZVTY8wYyYVEh1viXuZ9fVCHyQPRSxCa1iASUJcmiJmkWYu2uDAcbNjMpzhuhgvfwhu2dED",
  "key2": "44xYe7fZnRHzLgP2aQynnigzYSWM6CJ4ZaYs6Lk2zAKvS7MF6WKUVDGaB2ouSoKPDvuixVs94TzPaqJZPTdMiEaW",
  "key3": "e2HsBWXiYfEmFox5QfGedKyxMtEemKDjqSWEPb5hXpH9A16r7CCsyXWESfdKukWj4YF1Sj9Nv6EeF8gFKyZ88J1",
  "key4": "2XCH6Efznn3WiGEjMTbky4AKVCY5HZu6a4gDuY7Tz6fqaBTyEi7XTdLUUqjur5QmifYDW45kVPuiLY2svHLwRNz3",
  "key5": "6SAKFYt783djWc6RDKJtSeFBn3g9jJ4AFUPD9GRw6xjghEDjeKNk9644X5G2cXQhZCuU8ikQQDEw8J2ej2kqjcz",
  "key6": "3J7tweS5qRm81ESLxRUMaWBywAUC9tszvu92GTFHvNJ4q61Jaoz6KVUq3LWhiJXhrzHKuiQVNEPn5NUMBfgxqQyG",
  "key7": "5yAfezGa8bdkELJ5UHm2sosb8bKHdqkMSF2H5h5dt9hgmTPawJtcut1Bhr7ANkGPa9JT97aFCErA8276jkTkgyvS",
  "key8": "3uVK9yHLn79G5utRR8DeHJ4BfMnDPEKGa4H96EYHRNdq6Bb82UKJKTzzjuPkUoa9kf7LKZV463s7t8oFNtNqWFhg",
  "key9": "2Tuq5V9fjr5E3qy6HXSKRt7zHR774u4K8VznAo4y5VPufoV8SkLkHpTG4kyw2jBbhRyVywJmZT7No22QGkfCdGx3",
  "key10": "56KXu5QWxiXemx3gALwwPkGvfgeP7bRCKR11YKE4yaJPvnyqL9zVuSSYmo8MHxVGnyJgsid9ECPLfpgf6Fuc3Bvv",
  "key11": "5VB4vivsbfNyNp6vHx3mqbFVtNh8ZE8AiRrCcLg3Gw49uxcHuEQHzWf2qRj4R4UvFtTH5DCP8Y9GusKPKPEJV1jX",
  "key12": "3e87ahaNzEjHeHa4iJ2KyasSTo9zipCpYj6DiG77uTLPoD4FagsYmokKpoL8APAtxPvZxpyoNstGUato8hxXcY5c",
  "key13": "5GFahC4nRWHLnGpFfNX2RjW5ACXv1rPQAc4v5rV37V9y5gHeo3TsYRBHA9pNo4dphrG874rGCjc7ReaqofZvqZB8",
  "key14": "3epnQwTEvqTWERUbRc7HHs5JuMCMoZ7d8Vo5YCCdpEvivEupXgPctSYazRMSApYATRnvJRQ3iwCxs3GH1PTLZtLT",
  "key15": "5uxguVbzsGM9VKKcZq5YzusTDn4peeZ8xV675TmX8B1B9nb9KcDA1g97jtpTCrYyzAYUk5aSVgY6LWfhWsrUS789",
  "key16": "269qGKgVduypGC3B8nVFjFCCw8QgUTJHbBQcXVVuuqHQPvmXfj4UtiFLt4TUPWdS9MqodvpET37g1UyMYw1HQj2j",
  "key17": "4k4uWVrpbnU5CnTLeGhG2EDqS6Rq8sH3jh4d5MBE1HLXWMpb26Yke9cmdsYNV7GH1KtcV9WSqLLHgoLkqLVZ2WwV",
  "key18": "3r95Z21CPPPnskAzmDGTHm8JCc8B1MGQz1kzURxpBKRtgGtmPSwyhYhpbzuMtjDppv2ZapAPyTm1P7qmRPyci3YN",
  "key19": "2CUu5tEqd1KNQY4UAxxH8GLTRuNVYXx2HMPLc315kQWtdBMSdBzdu3BNQAfePtLxU2JPfW7ozLtmjJ3EjG7KeBpf",
  "key20": "4mJYAahk13RzPvaohJBEqEsEewYYHQYW53vqWGJCmatdxd8ZxncneYNkWNbBQ7QQZBg1RHdMJNM89XBSjRTd2AYq",
  "key21": "3qU5q1p8Kom6teUybGUgafQjdED9tc7f6FuZTvj6AfPCGjdMqWpNcjy5P65WDh6iw939zxmTXo4D6hJYubxLoEVV",
  "key22": "71XchcSG18txAbsynTpJd4eLrh4XoMkLSds9DtAfaX8A6aEbLNLj3rwP7JMW78n8dTCDEv8272m4si27qnCbY81",
  "key23": "2vEz5fy3VKevCGcZbJ8KBsxjP5SHysHgwL6fwtSsyoLNXftnYLGoNf1EoTdXK3hpK8QuVHfLiun1grWyBh7x3dss",
  "key24": "5bwzNAqurVSL7NGsRnLLS3QkWqVExKbF848JuNWsNeKApWA5qMLQvfXr7xNinjBQg3vo8VAmZ9marPB84fk5xFgt",
  "key25": "3Mja1wGMyNFaxNPFbEvbDWyZqAqsWa5GWXN7aR5LhbVaXgazyBCZSRzHgAzutmYDP8KJV8yfqfJRZrYd1yZznA43",
  "key26": "qL3dJvbdtw5TwfG9QnqdNcUBJoL88yty3pR9ZBcZ5xeBG5q8NhWsEUnY5g131dob2Vpri2KXmbB7wZwNZpimdPz",
  "key27": "3kfRCQE8nNnTWSw26cfzEMYFkmMeKM2jgcMVinfuM6fhcvpVuVxXUYMK3qdH4v8nDwrcL9uL4QeaVzMZPcma5Dyo",
  "key28": "2HzaT2UCZDEG13ujRssaYx37EA8tVRWa3YFYqCsQSxkGLDv8DPMAB3zsBujaEw5T9pWoRzkL55TmMdiPSsApEDUu",
  "key29": "2KdPiPobkdXaeBiYBAwGZ15cwiV82iRZmYvrBPGh45dHuDRPe3NkPZ5E13M4XdS4a2M43aQ5yhQdoDQ6zFXw68rY",
  "key30": "5FjdcCmDAdFHwCzm1DPTEv1pJYyys48BXWfHHrKtnwteDktwV3kmTkoKVRc9vftdUpinXMBXmuopqkxajtomSZXL",
  "key31": "5pHWDGjJNhu79JFRsw4M3k9yMmPtfBTWHWbC8GRL3WPPuroy89fZXqVByVWV5c9TEN4whkvJC5A4JwNjNNKJ7DYa",
  "key32": "5YrYeoH8ozF2PYhT7VeNQdrCiUm4cMstKcPgaazobmZ2bZ2mGuhQPu4wfXQbUpaE7fsPC5x2D9Sc4Zgo3EnR5uNA",
  "key33": "5FdkTPFLP9dwREcBqdsKfZBgAFipZioL4U8ojupBpqfebgNqwH75EehYqz9bmWfFBX1rLLAV4rqXA4u5TGsP9Z9t",
  "key34": "4N21S86ZFT7NAGXUSvxfPp9epF3MasvgJiHtwN6Twuk1ZE5jn7a1kpmcoK2rv5gnmEbhs2ZqJLpoWzjvmcxyJrhz",
  "key35": "Ft9UitKZ3XLQbSiqMnUwSLsKqK6tehyYtBbqLSFHBzyZXr3BP7Spdxf6rhvBTuDF7ZTotWtTsxX81A4YqxgXEZY",
  "key36": "2YmMxxPN1BXuQNAASXKsVeb1qATRhGzKW7mcPa6CD7c96hwJjQU1MXV95AoBsDxk4RdXeHnbtTSEYbx7wyoNabvF",
  "key37": "4jRMGcZtiZAKpVoZ7EgdnLW1JqdAquXSnMfj4GFtPh2MRu519c6JHnkD4DeEY7AU38Gzw2vRWBy4QCEtRfcZ16sm",
  "key38": "6p1t2iCbYA41CwLVMpnESAVjRdgcFrb7T9d6y1Na7z5EYrkLGVKgeZVW7VR75gmpC2H7MczZZdHuhtz3XkbjWqU",
  "key39": "3uUAdKtpDknBvVYkWkUeSReM3EnA2N6j5mBxbtwPXtF7e4LMuJNvLmdSur15qdwvs5RQaWU3nEZ5JjyVBhwyCG4w",
  "key40": "2mX8DnnCu6wNxHoKoC8ckgQ1gPX5yP7HPC3T6Pk86fe1bt92fjoJejoJEwjBraNUd712zLyyn8BACBgEp48js7UD"
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
