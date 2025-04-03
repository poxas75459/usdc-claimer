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
    "3jAixRZtycxn8QK5Zf4qFz8bD8F6jddGsUbESnERNMx724avvNzKLfxVceZADKinUdU18Y5ztAWbJ4atCpMWrn14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J77XMRtEwwhXDJxGVVywZfjFmA7dDu1M2DhPaLv7WR1ACtsfgQgpJHbkoZmi463UmFYVJCjU8XBGGm6GfugJFwA",
  "key1": "3REKWno94DLrhxf3uWMyVmwuwe9SqnorrMS7tnPdPmYUa8YxftYwu7CPwkZbkT1A38xCZNS23QNekNA8VtGBXS6C",
  "key2": "YhNEeDKJ3M8UeEPwB4Rk1u8Q5miR8NxGpFVH4dk6UCrnaw5hJPaW6peh36Nuongi8hh9cYva34cev9YKYJxmZ4G",
  "key3": "3f94PLvZKUvfYJTYR1hwiiby52DJ28VuW9sYGkr9pF5nt2Ymhx5sf17t8T3kHmYuLDe8t7ofXoKXNT8udWj1uXCj",
  "key4": "5vcvCeWpjcorQ3a3dKoaF62f6DLizFRp46mukjgYvKEZamCDh1bfWyRGmF2s2rVXbcUWK6HZaKEJ5BUL2b5YMDgQ",
  "key5": "2WkLRUyYVLpc3nBpnNiY7cn4LwjTTTiarLzbrVNvFpMQcK1bGiGFMgYB75FkN1kR5tpheAjUaM658Hwg9Yf5LSa8",
  "key6": "48eps7EiBzcrg2evPpRZcDUhgLnhfEpKUxTJCiZREAKMEsRim23ngxSxfNYLQRD3qhBFDMgaVmEvoMdQPdjbay9k",
  "key7": "7mp49kXi42wz7UUVD5A2RpLB45koVCYHrvktAjUFTLcZWHLoWh82jxA3nBbcyj8hE8A4smbzb1cxbRyTP3gDigi",
  "key8": "3dAnHsvNDBYiMepGbWUUuxhkaUEgb7oajetzTs9DS7ttt8NzjMN963Z6JAQ6cLScHgGqzAnDqrVEPemFfvNFk5z9",
  "key9": "4AY2LneMVKF4MYHod48HunTX74uUDwZgyj4WgTCPzFtURD6V22rscqxvamgWUNP3mYJSXzubqVFAWh89S1wKWRuH",
  "key10": "CuoFV2NFxY8uc4ckQZYRMMUth84UwhyssJ3pfaKThhdsLMCo6Kwo9DWzw43fkfrGDKmEhcuWTychRGR3ig7qQy4",
  "key11": "67oSiqSou44EtvF63RbpbtJUZoBGBrRVJHBP4mr3jXtVrEH4w9BnAPZDR47kJS6p9vHqH5VKcnZ22QULznPxGNDo",
  "key12": "ZcguZAfvkVHjxhVnereiSDoJmGP9Uafki7tpRYsYZ61dPwqSB14mNgXWhk87xRNK6mviANLEBzV5cyt3u6iT6Kq",
  "key13": "2DZ8HtdnLFUeHGYL8uNmzrD6UrXPV2KbAMXcbLwNTwAHizPx2uTh5RgjTS5HmwNetVsbDPeFcBfEW8bXb7Po7agr",
  "key14": "2zGf8rT4jZCoP4ZosydYhhcWTH6c3htA8H6sEyAnPoP5F3NF7U7Ga5LGGSTrji3QCoc5MXSqTaJUqPHayqnW5g7S",
  "key15": "4V5kwazW6gvWrCEUPegsEr2rAbHG4xHfVB1PFWqgxNTYVHoxD1ndhHJegnnmsuiaNM9qdrrmsF8xChRsm85FLGWm",
  "key16": "5JFzSG59q9KKtGEy48ok67qUkb3LytoUV2AnFKqCciVJsqE9ZdNyZbXTH9mAemgRdDtmuxdaThXQp9nSuXZnYFNX",
  "key17": "5FHCYqv9XFuu7RvescaUx2GM2YGC91HjCYp5MHCxQ38SZALi78X9HSfyGMtxSgvpZ9bjp2RsxbKz6XkZQ6bUWvR6",
  "key18": "34Fm42AssHB2BaZHQgZc9qkbaUWScqPTeBcRBK29VeUFmsVtmpJrZUXFKCaguJdsnaZbEbZwRgAURhess2SazRhC",
  "key19": "53xsUHqqfkx2g2JGSVt9hoGmjAnEpMcsbDPgAkfRFa3H52Wp1477csKRHn5osAy7X9Z9sDVdPfzpci5Hd2Kw6nBn",
  "key20": "4LXp91Y3gkV4F1PyrTBueR3Nu8auBKNjwYpeX6si4whxxm1P8jL4JzsxHbX3svDdFmjKx1yxGDrcfxBZCYV3f5j1",
  "key21": "4MJvE1jXYBXCWjWvCzoT39DNC1VECpTr86tu7ghKNP2MTa7rogAHQFKjA4YCxDJNaKb2uePsBpddnK7JdX3SL5mE",
  "key22": "2iSoH8z59AWSjkb32gdWgpomWFHTb9ncsXExquuzX8e1D9HjXZtVnZtX78exDvQ3dtvD2t9YGH8Fy7GJhTMebLvF",
  "key23": "JbMpcjZ5sd4DodxuA3xCaMA1n6sAgZyNLBoqs6iXBbzCHdxwAopypHDfTWXmj96kYo7WYPo4wjiAP8BJ2bepvXp",
  "key24": "3o39W5KcYESz8L6q15dToFNcLJZg4cwxVpb3vivZbP6RafCc7MG8qSFF674A9GNA1qxQtZVhhwe4jzYtZkFBvrXf",
  "key25": "SX72ngafA6Gj2Ys3jgNyURqKS2wwxEExJmLyArGkSwsRaCdvixciDbEncvwsXUDZB1frkCSQEXxzxY8t1cySxPa",
  "key26": "4CxLDR12i5RZweQXXs32NuvFTQM9k9o5ixME5VQEa8FG1TXb8sBE8HREyx1o5djDqU14gecMc5Te18MV7BcmVT1U",
  "key27": "4rhHcM684AqDtXgLDHERWp859AVEf26sd62iqsQoAr1rywvgFXe5PV4oWihU6dceBf9499u7DtCsfnLoXNL5SASy",
  "key28": "2ppzgpmDpbYVCzT5xv5xMcZcFXfoWBYtey4hnPR2ycRcVBbjGWircMVbfk5KosP3N2ScWSapHQaN3ssTFqLQ2T5A",
  "key29": "3deuHffquAVZNBSwFA4WNZqhQkt997T35uKg6HnXdvGUNphvuNMWxz8EhXfDdmxbwSJTQFQ23mjm3mRwRrvmfmyj",
  "key30": "4h7yo4BpgR9KCaJRDz9Pq6KBywoi75dc2iAnXeM65tGRZLCB27P6TtFyaKuDscpa4rpn5KQBzqru9qp7QsJLKrss",
  "key31": "4i9X9t1PqoYrKVA8k8ksg656A9Hzq9xY8i8WWNnt4UbUi3jG4bTB6UT7ZJ57tETJ4paDSxHzGETu9XXnkerNMmnX",
  "key32": "MfrMUE4bB4DPJZP7orzhjdXHPWvgDhqNP3Keb21iMeQc8i4vtNvxN6Zv761SsKjvx2s5hpmR9NtZUtc2T5KjH1t",
  "key33": "uVbZ7XhVBsXmz3JvXUbLZt1aFaA7uvXix4RgqbEioHCbik2VbtJ4DWeZrzAiFAZEKAM4GLkDtts6ndC5REXD8dS",
  "key34": "3VkwLx4gnE7hJZhLXa5dQB9fvdtZJGcePgK7dyrUKC3AmqMAkRtYRauDqRDRPJPpy8sXRtfu9onJUWEs7DEU8Kcd",
  "key35": "4785SKwXZSYEGeNckZmsuFLq63ybJ6EWnBDpuZUESQ1FQB4Jn9fWVALm9djWkq6sJdteVc73iia6YuCwL1qRK14f",
  "key36": "3qDLUARkYBZZ5ShEMKBjCCQ2MCpsqQFXN8NLodNPBMtCHY1r4VAaHfKUDbQom77NkLMCvh26Rx6D1dXmZGZtbtFW",
  "key37": "3wsm6qLyuzJDzoxsLhzjsjGbTnZ5dwcaUhkjcEj2EgzAwixUMCqUyzN14AcWTosoHDQPdSQcoeKG3nTSkthaiNJD",
  "key38": "3c6ptE59VZw9twP1UEYrzCW6D5QjPkfjao5HVW2Dej8CAY148928EbK8tcnb64zpbeH2X3sq1MLgTVZqu9FBGuLa",
  "key39": "5zmEsUMm6gsZDM8jHCeHyc3HKLKRPC2osaZhxu7geLr3ZF9fXoafqd8V2FhYmphJqzUJRD8dNQRNNAg8qDSbg3C1",
  "key40": "3yMq8Zfpzd3BKp92wSXF1uaqbC8u3yH8ewcvfXUpmuV2rxko3VtUHfnx2zU7k5TFuUyuZTeu7EZi8pR4ee7vFZJw",
  "key41": "S3hxeEqwLR1hqBrYWrZ6KEpPaq3Zae3tveMZ66VBZ8r5NmPe24wswo2huBsxngGZZXavFaBKaYYougn9o62ReNS",
  "key42": "5gWvGWf5eVqonK2rdXydM57FgieuBwH5yX2pdNdrqYMqt1arNh4WD6Zw9qXRfNJVg87JfWP4xoCzvTmm9JEUqP9b",
  "key43": "3oZeJB7kucD28kDcb9xpcPJz8th5EpZRzAhtY5D2uvN9czhNthL4PSW12Vpm8g5LMt2aYdJAJBAFy1tobE2FgEmH",
  "key44": "5WkY2igGS4ZmmvaUWVAqeLah31YccEjWxcMHVxBJFa1FYqTD7sn7zAxVeDstBHvy8F39FH2BdTec9Yh4Zzz4tT5g",
  "key45": "27rX64bS53dtLfKuSRxHKKWPX1YL9w2fKXwjeHkyMvXWnRwmcos14ts2G2wFj1ayu4veNtmELbRdG1GFGeVxkaJk",
  "key46": "2jZbWudpfmDLpLB2zXAaoDFE238ioyBxxdq5x6eFBMdJRAdHnjjrXh1aU7zcArWpXuFeqMYndeyp22tXM5hnvjrb",
  "key47": "469fa8LCxJTfweSHsZo63tMaiPweb4CsAcfwVWm61wb1mJkzFZg1F7ycH1AsdfZ27LbhuExS2zozXr7pu5Tw51ny",
  "key48": "T7SJxiYm2xNnvX46gVNj74Us7LMz7E5imFVx7VvMNtsy9gnB7nsHfHE6Gj5qE97oCRCapqJomXHK41KFuZ2DSwC"
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
