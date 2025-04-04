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
    "2r1QszoMXbD8zzTPevMiBpT81o8zV7teXoyLe4mbUzmKPy8XtPFw7oaV2KsPRbuVLxsUs2K4L5FnzuFpanDguaCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nj7HZZL3m46DLL5wzhDnWaY3q3nbeWpSfUGPbBwDkzJLrddnG89R3VxRzcTVW1nnjaM5vHTqhM3DBXHgncqT691",
  "key1": "5XgWzhaXXz5AVPKogRM35PAwyRNg6AZ7dADxKFKyCDFmzvhmj5G9zawwWbkDk9hxaEDCChtCJgDftWduR36x7vW8",
  "key2": "2f9SHgMAGrN3Y3hy1nYRr7fjGsLgPFMqr1x9hpQJiMW4ektnVuHSGfDKAFFa9e32RhcStkGv524ruaPWRwUwGsBk",
  "key3": "2TkUVwtmd5aNocGRf4dEjjCuhTZwGp3fAUJ5mVzmsVNbRifpuzS5ubMtwRqCyisnsGFsxFFxRkniAA3UPvxUoct9",
  "key4": "59PsnCNWDuQHbZ6maSWd9c3dp8FLaV2uZZbGH563bJ9an33UoQRGDc3ZHPwktfV4jm81hHBHxSJXT8VdWzPbiEg8",
  "key5": "2sqJFAVnWGj77fZKJPqPvCFu5q7gAXMgxPi7d2r9FHh82EvbF7EFwNy6S2tUmbPJwhKdE9EA2kNh3qpCY6KNa6V7",
  "key6": "3mcRCZahpng4tdJT89rA2BhEJq8GG5tDjqUViBepmgwWDTyjmpzU3zRaAoXzkEiUpZ3P9V1sCLjSK6T69ezjmynJ",
  "key7": "4zhqRxwR3mRdbmVNRdmEJEcz6GDjATo2De4KG5KQ5Cu9Fi3ZNZVronm5F27SRQch9CV4AYS6PQmx8LFb9grGvLVN",
  "key8": "5MPbkMEBoP4ZBmRg3EdFynjUtCU42g4yJZJUdHc88MH8xxw4iBpTAn5nScDJBKybvyMooMRcu9dPByGC4Q9KQuQh",
  "key9": "qwduoWv7GWmAj8ffb2cS6crxDAK6EYZRULDXrb4ihyUJgcEiWQP6Yid5JPn6NWbxDrb2zjKeyVAFmvpF6PnzuSG",
  "key10": "2b75eUgaLVNWjAquVxuAZuV9Sufu9u3DVzSRgNdmomjNBbSbEsRzz4TbfTjk3xCVE3Pee6kfoiwWN3wAPGRkice5",
  "key11": "3Fo6XNrRRFRAZW4Jrm8vbeqPdAScUpvGuesQAJzm3K4yxYEs3rkm39bvUSfkyBZf5yDpGSvg2y4MGVa6YnGxCWEQ",
  "key12": "3faRFgu1qzYmT3PX47BrUdj1xi4trW71Z3RXGfhhfis3ZNv99bUaajbXMCfoshtdXenkkp1G2dyjs8z1m4zxHvPF",
  "key13": "2drv5gDWDdT2bbELPNsP59ak2w4T3rkAZBt2zpPCCVFwMPXk845hS1NsQk3UTmsp1peGvKpBBzDY6NAAfU5s989A",
  "key14": "5rifeR2g2R3jvDvDfr5vPK5jFMTYabke9WRyhk6ueDAKfWJQroN4Tcb2nfAbG1J6BXgXu8xFGtsQUJyzCBigB5Ta",
  "key15": "2hf8DNv7wANTPNvLogdEGrYAmcxRDWjVmH9rnrNDiDsYAMadSQR9a3w163mxbFpcX7ixFactJpu9718hJYHUEXuw",
  "key16": "5eMCv9LJ42w3hG5nfpmqEmoch6pZeYWyJRZWYLGxFLiJcCARgFJP2V9bwSn1Njj6DFYXxtYGcJS51Zy2GbHekjEF",
  "key17": "2ftUQi5wgdjNb3b3mAYEcjFMUX1VYsPeNHFQix12fXNaL4FCQuDK7TvhGnSevjgnoKNVkDEqNtVJTn2BxwXf1HQQ",
  "key18": "3t2R7MgsguaZYTHzEaxPSg8TwA63c54ETsEc2t9wBY8sMf2wZe974kt9zD7w5UKdVw4hQX8gpoj9XM4wtVnFiJD5",
  "key19": "HQncA3EQDE595ooqqu2pDg2iaeJ5cDYh8JUf7sJ8smg8UManvAkHpGyd717fNRV3mf3RJMUXiNTajxpQokpQaDD",
  "key20": "3VUnzWWZg8TPkUz2RF5pc18SGs1sUt7rZ6k15P3dZE3GjxSrQqoL445fv38p4RdGgkzEkUDCXG3UfjW8gY9jrrxn",
  "key21": "5BEFbCF1adfxNXvs9jdyAXraA2v5p3581TGkFm3mA9Yp5BBs9q8W9SRrVV9R2FAm4f2gA5MC8XuwJHRg8EPhqneA",
  "key22": "oH2z2qjmiG4PxBUmTEwT7qT3PGnUurmZgLz6hYCnUMyYn6a2fop3S46QnFpXmgCyZHbiodDGTXZb9rDGiqQoF6q",
  "key23": "PCYSYDeHLe939bVCdkR6hxM6H9tLAXo5A69tYWYFPH7AKVRGz2eqpM2LnqKB3KcHJhNjr1gbwttSqHvejomraxm",
  "key24": "26EWyTEuCjNBSMbzHZyhu74BzC1UoRfd6tjNsCQVo3ryrFxeJxFy97uAdGZZKJU6J17WBNhAhzqpA6XkM4wXrcaA",
  "key25": "5hxjMsw6VLahopwgBH4yaENZ9GWpwbocdcGg9LH7vKHfhyRuXBUfxwXn7FvoiJjvReMFrr5ohduR4hPiwddqyKEN",
  "key26": "5yi4Mt2SDkVCxtmsK8F2DEpL1ekHX6e1FbLxWQ2QyzqhtDEkDCU47PbD8nPcZck7m8kpRj17DY1HuxqQf2bUZkvN",
  "key27": "2V4uXewtdSaqMv2hZxrpsHN4nEMMrHDKqniGijgsLM3tBHmaQdBBrkjvEbZMZTA7hQXcSDTbvBBbov1pZs19Vjq3",
  "key28": "4EQMGCMdBHghcdRPwN5y49J9phWsbdV99mdyn89YRQuDt9UDpQftnBVWjdFSbPAg9dqyoQdaXxFmK351pME7JwUH",
  "key29": "8FjnadnbQNHVQ4osd5h9419zJvcyPiv3trD3MGvqS415kKpPZTZVRJ1DsegHH9uyXoU3KhD7eeQqw8nFF8JUKo4",
  "key30": "3Ynse5rzXSak1Wf4Bd6sNDrxj371VnZxg2AG4L38HcEGnSUyY58ix3uaTvbZ5VZRo2PTHDxuWcDTtAfqAdWhQWcs",
  "key31": "wx6srUYiat6ZzCBd9ckuHJHQoWsHyLgygs7DBn4NwgUYczcpnut9qvvYWDpUWhZjeW6bHRuQToP7Axno3RXAUDK",
  "key32": "2XBLxFAXDzQm54vxsJB6cUcW8q5wJ5izKnQL2XtMJ97gHsobYZtE5kacMijKZEqyfS1DHxHJ83MDvZWLN8jokVdT",
  "key33": "4Xmzj7Pg5okCi5CowuFfxGZ3BX9xGMmotPfjv5twnEVfwjnb8te5YcLKve9tEzmR9ozFLGjSmvsLRQDSwo8D2Hct",
  "key34": "3XBTJEuRcRoedppaZMyzZjhiGn7dxw46zxx7wr4sbbYaE1VVLAbEkSxJwpLnTeXaXXcdgVmx4NGM8NwDe7wxfumK",
  "key35": "2aDaVzh7FFK8uPdui9ktCqDK4UerFHG63iJ1Nt7KfzDZxQ77sGbXvEvuZ5UcGekambv8PtdSeuy3m4b8DW9oBhXN",
  "key36": "2urrZzeeswjMQjgRysLYN1GzisHr87xuEotGamqnAEEWeykRDQNGqb5a3eW1QVeMNmmNNHrwxwGPjTdhqEKA1Dct",
  "key37": "3rQaex9idr9BEJEx8bZpg7oSdDwrFrVLqPXmmt4dgCW6MAWLvX4SZYWNp39c1RYo6B5F7PW6PnQvMvBgN2Nk3Jdc",
  "key38": "5om4ntVsuffywdVHy1CHofW61jm4QaE8e36py9TYDYq4ks2RXaLPT8fQLUcCHzPkeQdeEXnJiFYNkV4Xcse3bU13",
  "key39": "4TAQjd3Q3gGFLGPw7X16kY3U3ZQc4wiFEnvAyLUteSv8GsXixNHoabUpskUt1RMjWKnqqzUuMNpwxSMiHfKAuwot",
  "key40": "3LFv4fFCxdnoreochfMPcWJ9QSNH4SvMQaQeqvqrsdikeX22ZVKrPv87ek2yofekgrjSkW8XQPyvnrxSTHUqg9cK",
  "key41": "2Hqa6N1brLLwp1FimaBriotDUkW9Uf7JqMGLZh4G6gRFprxPcGUqWsUycXBhTPEx2VtJ51rRCwSvjPK9grMmyiQh",
  "key42": "cVvVWVfdyMxLjq8HGrAAu8EW7x4KCdudxjjWTShmH12SqWFoSP6jRH9BDWs2Mm5NUvgs58PPn9e6BTTaicwGZQk",
  "key43": "2mhQzTkNsEi2DS3ZLum65vGJ4BCQDsRpNP78BBkdBokLGgfAvPd3KkFsbHXTD8Y4i8zVn2NHYaecQPhRNiDBaHYn",
  "key44": "3bEe7a5oGpXL7dhBpytRWJzobZvZ4BDhWazYE4chiHCXnN8Nnk6YPXX6XgSA7XQYcwmss2GGyB4bGCZLAMm7ncqz",
  "key45": "4WW4p6Ft5EMSiiQzSAaVZbQor77mke3qdzDTANUk7ub9q6vwcnbgAgjz9fyDuCoT53xddqScNMFBPKSuCjhQL4D3",
  "key46": "2wpHgb16BuShpFVy991fC5tLonmGkA4m3pfwjqWMqaxvforViLKeZ3X4iEf7vTJYutGrLMfvdQv53UcNjAHhD7Fc",
  "key47": "5SP4QAgMY1SWLfqUpXA1r9Ea1VU8TDZ4XrgJUMbrrT5Ci6ZByneGu8dyLNMsuMQDNNr9N4bjb7e3CGVv43jJ5eEz"
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
