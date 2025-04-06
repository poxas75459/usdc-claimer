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
    "dinj5PQ7tKaJEAQt9V9TeaGx1P7jv7PhGrZY9tyjefqtZjnizSWfbMwwEguzKECQckxXoWWWwyerMmH7Znyt8hQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q4Jnf85qxEaeD7uRhdxaAnzWDZ6t1zoJaJ2eK1qTopbMr4nLvZyt3BCTVaWqsBU73s7gDdrmbHU5qWC7hi6WA5h",
  "key1": "4Gipwpbn1ZLYjWr2pREYPHKU14CsJjNc1kodx5GrUWy7kuFEE4AkTwyVZQePUMrjtmfjoVcgcCknq5hSktqyNqA2",
  "key2": "4GTVeq86smxwufk5YKNBGdV26bU7u4fYEurYnKmTKWr1mkWERGWC9auDBB8ayG88zmKvT5PBjn3oXr2AuQDiFsFy",
  "key3": "5EDCUZ4tjtdDPo5McBTYb5gkumDHVQAbLPM935wzKsPvrrMBfQX5VVVQePghBNHmzmDbpoByiPgbP5Qhi9KihUSr",
  "key4": "K1G85wy2WnoqjDa28SrNWfCVP48EZfXc8QEVgNRC8CAjkkjocTFkqL8cDoaTsU8pnUa2cRDSN5NJxzqN1AZskU3",
  "key5": "39BcBUed5bJ5KyXEZvxZnn7VpefXnmAJXwfmfN9bVPyEoDprn83i1XvT91fcbF1Sh9R36mi1v2qtiLXY11BzVmSt",
  "key6": "32jD9BXaemvGDYKQ1fr72Pt1xa5icvwKQEiSn4MamzTt7EHmLyTAo5gqh8knPztypo9w6f8TvqtDGbDaTBrKQBWE",
  "key7": "34kwMqfy1pvrQaVaJ3PNtuMg3KQEYT4zDWqQrTU3PmnB5jTZMD5aHDZCnANpmeUDQpLbGLsKKXXQ9b1PdBvnH4Mm",
  "key8": "5Kxk6KWnA2BkDiPFx6Upp51J535KSYhZxP9Va7ascN5GCVVfyYCa3i19fED5ajp4KEUQAVnzVHWW6UvLeARLMdDA",
  "key9": "26rTJNYNdFa6TizMvxRBWQJVtwg9Afi9aYVgtWUdspaesWuwnbRRreoafDsnFqUwTTteR2WFB5xyygLfzTteKnyd",
  "key10": "2DSpcuytjxMJADZmVjNmdXYNvDKiT98uJreUWAc73ztUvx4VShEHRYGqexYtfqEYUb4AswjT2mAf8TH9MSY12qpW",
  "key11": "4XwxSYAMaESGjEdodYzTznnZfzu5nNdf1YAERST7kS2Tn55zdxc9TG7bWTcPbfNxJ2mm3os8qpNRFYkMj39b1ztF",
  "key12": "29t8a4CGMZRVgTCXzKj7DokDmfH9Ks9aMeBMoSCKL4VWSd8ZvBN93d7Zrp3a5ZzL74HpR9iRmScRGnrb38MBo4Yi",
  "key13": "2uaCWsTKJTCWRvoGjLycC1ejHag9FVCNdfejBH7yWEUKdoSuxv6DwzVTTbkKWgoq2P14mtddhTWPtzUh3WnwYVvY",
  "key14": "5XdDgcmXytv5WWCexp9CUncqLLaJGXYfhv61qdND57e29r59Y1rx1d29w8QoNdiWe9cjnFDE4WYQFvVvFwcAj44K",
  "key15": "36MFZSrzUHoHu9L8JRTmqitJmR8qMdyxr2HGfgZiiFcUTCPoxQZGKQpRjU4J41WJqf7yY69ojYY8ug5N4U7UTfjK",
  "key16": "3wkFv1UrudTMFNdQPcbmGsrVBzL6wWZ5vvsm2Ju21gcxz8DYn5B1t4ijvqMiSfyrsPZdrcqKGmMKkgeN8CwS9tHy",
  "key17": "3HEbVyaQBzqEmNeqJ5juwTE9F8FXWgG6FXH6f68y5FpCzK6fhPyEvCaYSQFadH3jpe5nYqxnBtRd7RfQasDa2KRD",
  "key18": "3wbsq8cFmQqug8vmfeYfieCW85CptimK3sT9Src1jAx38WZPE7AaUJNSFtD3PBXHoHvWV9YxotGRF6KsLdPQWqzw",
  "key19": "36wzYd2CqRQmMyCRUeGDEqD4ckUAjYacRfvJwYuxKEW17U4M4x8a5fnuYjuZXnV1D2fafHZR1rtLBXNG77M7JqTP",
  "key20": "2y3Wv8eA7DeiuPEjPKBgCbi81iXvZRDfLi2edrdgwHieYeWwmTRCTPGTP78zjEpvHXKvmsik9YjXhxh9qqkG8ioi",
  "key21": "nL8Hs8yBmzFHQEpHgtECDhuESNBU6XCHdzS5KEZg4eyr6FDiDJygWxtzpAubD6j6BWhw57eomiF7ad1pA4r7nNq",
  "key22": "5vHvgjKCvdXSi6nTH691bFVjZgyvSyBZuB4acTKreDbBgyY54HdBXRATJf5BCaDTi1CvhiVbdgo5Pvc3gtCP1T6J",
  "key23": "3rCbzwRJFSA7HSQPLsBTDVtSVHHawA7aVKSXbaxmPhb1btkxugm2PhTK4oLPjFyWxoK52yEK1ENFMFLuTwwdZu3h",
  "key24": "4wCANXjUth3Pc94QfWRqN664BTNHpfkVNh9cXntHw3jCRDxrZPq5PbfVBem9sM8iFCRPsa3SfaTTytkSvHiKXyuE",
  "key25": "2scRmt49rt4brTFtkJPyFp11La6pBpneM4RkBpzLsRsDFPKdkhLZqACsxvcBGzuTE5xQpZ1WxePdobJc1AThPCut",
  "key26": "2H5nkxK8bzbQfe1HrVMsBHcuD5Xmse9aNXYEot4ATj39ueGfmGN7GfTzyPMKVLTh4iz49q958HWRiGnAwT3RSJe4",
  "key27": "5ccEg1EuW8cWbHTmoBRPkrNkzDHgZqrvXjDGn8xCJbrDavffDydWpgHbZyarAmT7TmP8wAWSNDpdozdos5jS5ZKa",
  "key28": "4Z8EuWcmz4jGCe7Nd67MkNBdZdRAjgfCZmGuWzNCNp2RHz5MZZPr9aADF7X5atqFvYXCdjruc3CDiMHCjAwKKKcq",
  "key29": "3yZfgbD4kmeQgvFgsrvSKGzjjKYatN1sP6TkoiGjNNVjY4sd124DvdDQie9aXP98A1GCcQEbNQb67nm5Qw8D6pJ6",
  "key30": "4khn1HgEPRPtBhZ6SMSh4LYNSFThQQ151yaY4jcyjCB3wTwPiMXuUSfi4wGuRFZjmpBah2Ddt6dTMzSpLjBXAPq2",
  "key31": "4NuWabaG6hjB8LBFRtsnjtcofAUCvDxTqubNyDAgQcoz5ruTfXeACRqkKDdL9uyNwbjscJrhLZwyTXKbDA9q5ji6",
  "key32": "4HbwNk8yFun7nDuMZ1u9A49PNBwZ94cG2hRsv6BECagPNm5dKLaprtwL9joB9ZDjS7deUwe7spcMgCmTdgzHygEc",
  "key33": "5er4tUULiEL25Pi5oAWzq3Ub6YrQqkX8HirTSC3K1VxizUDYzUedb7VqyxYcYpbg4KV3BWGuPy956RpG3B2f33M5",
  "key34": "3wKY4hqkejQwRGaUDvgjR7PCRA1neiQXLPs6fDDL8Ybwaa459UqFEVntFA6C9MSiZXrt4BEZBaRG2BrP5XcNcY3N",
  "key35": "2yUDqusegXnvtBnAzxX7Hr8ATDJk2CxV1Bo7rFPNZb2CnyuVjFEVRvTLuouYRxhNhTduxH9PJGMA4S2zF7bBvroS",
  "key36": "4ytPR4FY2HosAmNK76CJDGJBHQGY26DMfW5PkvQDa8w45XLzada7v9fY1tcP65ERzsYxQcyN5Pu9m9y5yKkwP2rf",
  "key37": "2FpRvmiMHYmY21AN1QDfS24BatQifUs5y1GVkaCFSD6Q3n75DmcUcQevn6hSu2ao5P3BvVFHeW7Mk5PXjfMueMsK",
  "key38": "5q65qWcpNzsoJ7XcoPM3L5YMfyNsncf7J7YQSNcGMd41HfF9o1d7vjufGAAn2iaXzAr4ujgr3GQ4DVtaYsyMLrCB",
  "key39": "2Jvse7KAGBUVJskhPoL9hoNfyrzc6fvdsKjYsciLhVE2DopEc3YRw1T6YozLBYGwdb3AzNLiF3bEyXejuncfyXUH",
  "key40": "43i2rLNG1G39UKqc5UEz8qoZXcbecnaxKYMdA8syPujPd3HFMyoaNzMg9CZL1WgFNZXapWCr8om9EKtNC88FxfA1",
  "key41": "2zEFH7WpwKcFdKUDA9u526nieT9vXDKXTzxWjSMeTm9UsVysfrfqmAoVwiUg6BJzBp2xADrhgmhKZoGf6ZNCCg42",
  "key42": "4D3sQfZbgjiTM8XS83oU1oD2N8bh9QLsuWgH3sLZoGeXPAh7ZFYgZjzCGcF63k3ZvBnokTDs9WWtvAaFAUHhrWiX",
  "key43": "5RmqRoHVwA8PfHnQVYrkckNGLRC34hAb4aE975jF21CNwTXD5j54zALXD9G4AKu1e4KfhMSGMZhPdA9dAaYTyeGd",
  "key44": "w1LQPuTLXixJzbdFePFe9nw3nj6CC5Wekjx4Ecfxvpd1Mt5FDSHCAkXazGEe38SXPj632WZTyRr6SqUzyiAGx4k"
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
