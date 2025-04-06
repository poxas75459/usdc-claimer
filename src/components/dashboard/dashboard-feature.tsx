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
    "3z91k664TZC9TvYtrjnkXowCkt6xem9osKPwSCWoZ8ezP9REgVo3UFvNqGpygQaUSW1epJBfMdZAmHc4zNj1xG5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CPEDTEhKJu7oD6NqjcxXa56HJg4yn4TnMmty6kcvyVbtr9ZzYDPoEu9mcqgcNkURKrBeaUJuDDwPCVnmZLAETdq",
  "key1": "4ovtGQKH9oxv9Fsi33kq7rRu4YQuC6pYZgVexqKELJEeoE6nkL75sfMCqWBAtnhLQ5cMpS7BC72ZSXSEWRBe3pL4",
  "key2": "282Qzu8KhGp7FewG4whjgBJrXyQHDGUhQgMn3ruv5maCbdH1nJk6v4h8T1AimXyPK3n2q1DyysAno1gMnwnGfLtr",
  "key3": "2H2CfzuJU7i9JrbCgcCiJUdGPbcqwYEe2q7zt6wDp2ZnQuvvELQfZWatntPYEiNsyVR6jyoL9HqoqwHWb7BYoGSM",
  "key4": "3aKevZcCdzXx9FxuSf41FpZRujg5gqnCJW4VRAzWPjbkwefNg864GjK95EEx2VbpAeCsNHH6vp5R7x9QmYva134f",
  "key5": "5zCBUsW1pQZrc1VBui16YUDz7XmCRkcGCbwH2o5cc4zHNW7YCF3JBrC2uPdhdrN2aPUaAe2pFqNmrRFtF1hhEusR",
  "key6": "3HtJvi3Qq8DLQyyTRNQYYBTZUqVFE39Hx6mhvMJ5FdxCstVXhCuZ34RRd3XLkPahAyAP1cX2eZFD4oT8UoukUvRw",
  "key7": "23qqdCzzUUr7URqnPVgAEsb1CtEUvCdo49vW7SiU5txA5QQWBx7DWTiLdTQsaF7cTtoU4brQGHWxnjyquUvAf8zc",
  "key8": "3gUhpUm8J4CtiC6woxSzZDt9p9EEKUMgGrFmxoRwbM4G5y9gT741obkCVpF2HxgoYgy394WbZci67sbJfPmNbrHP",
  "key9": "4wnK4z3PZrboxSCiuwu1FqqnBiSd3HtjGjXMQZYXVKHTnJjhY11pyZgwgozknyeJoTJTHhPha6QZbfVD9uRxVeHX",
  "key10": "5j1gnFoJeLGfn1eM66kg2g4E8StDRWbYdAzKj6DtmEHqFTcMmimimWtLoSpY5Sdsxx8zjUxcuR7hRCShLckP8xte",
  "key11": "58gSeN3M9PBsWnuNxfaUA2kHgSrrhqHCQc8vBJ7QWTZdmow4eaJTdx2ghnFfqzM9xGXtcou3n93kcZeZWvo4jBun",
  "key12": "aSF69J9KfZe6PmajarAQi7rYxmvAM4HtmmrDHgg2hj96Nq5zgK43zj161Psf927uLY1VDUXeSGrLJx5XfkbYdHv",
  "key13": "zGZ5DQ9MM7Rf6iDC9KvjhZrnVMbTuLP9J2fQSJuzEYRCQLxntNeArC1xBoLLtmrGufyM5ENaE9U1VoCkoRktCfQ",
  "key14": "3ks9R7WPtcPErjYybx9CHD6P7kRsrGeMjtmAq8gRXLuvnexQmPQsTSnZUmG4aQQSCunGp4Q5Fgqjy3pw3kGR5FYv",
  "key15": "EYi1qBRMAFQtLjZhJCVwJDRRuHbZu9STXDJp2zdasRh55VVioqKxVW6Vq5poTvF3UcQzrkpRq1ZVw42hq8J4pvM",
  "key16": "4JaDuM8rcCKrvBDnTrN56Gph3qrpdEfHj5AK7zmNAAq6tymvGoRs61CTaBmVQjWWS1vxJUpR8qugMXXUaWkukYPA",
  "key17": "2vUpJ1Lm5dMQsnXryfB31xMcBANPK91dNCLo4hAxchCvMvBXCYQU3yrThXUScfA7vTfE1CUgdSkWkh23GsTzpS63",
  "key18": "2rfguNUmKvssLHWA1aySYraDLe6HHBrh1Qp1pQQoxjDNDC3aEdSgPm9XKKU7EmtN2mzku9XjMmfsGx3mTL9ox1jW",
  "key19": "2CeaPMourK4xN7HQQN6s2HsXgup1FVxRYEpAxEHumVVAvHd62hicAY6fap9tSGPPAeqDgkwseyeXWXMK5wmH7K9h",
  "key20": "2LDdcsHRZ18smCaBa4cC8hb8czBw9CuzVhVG4WJDfRf2fS2kCuPwAmizf4ZBrUE25rfBgsDb22imAtTuv9b7RMWP",
  "key21": "3k2zHqWLYzdabLz2ZoWPuvikvM9pgiSxpoRSeoqwWYJuJqcg1hwJs76mKevVYoDxNBWnTaCLXPmhzCdioqEryXwe",
  "key22": "5pnVG6t7Ua91Lm3uNiF9W1bJeMxbZfv1wFn1nhsHC2Xzo6sShjL1VhsufWeQZXeQbddRcMwy5ygYtv7YhCtfegt8",
  "key23": "4JNx4YZK4bunRn7Gq3oxB52Q7zYFH1eocATozsyFkkvnZZfKUTWgHAXtzAvxRtsVxAei83btwW2RKdKe4VUq12CU",
  "key24": "4fm6BSp864m4Zhx2RQm7k8cKmNP9fpJpq5kWzhjDgeAZupq9acipWnaNEgTdRuN3KXtNv7uqkvSU7MexpJKWAhbv",
  "key25": "27nYufYFr4o8juxCYdUP4FeDrbHHNzHxkexVnp5j2peJqUj587T4BN6W6f18a6pntiFoAydRq3qqsTnkFfsQhpGL",
  "key26": "5WX7LhfZPafvpAnpvLdBtArXKCszknFAgXKGtCNZ9DvggXZRv4gRiDRjPJFcjJJW1EqUWsGjE4L3oenWruC76NjE",
  "key27": "2yK4bZHKWveXbrwYesiuP6BitaJizWA58LhPNoZ3KdxwkTEa98hdr54xfFZZ5s9Hsb5vLDo83Jwrc2SaNXrSLStK",
  "key28": "5HaBsKBHakfxXeJMp3Afs644GaPVi1hgRd3qfHB5bNroxheCK5n7arap7u9upRw7dHRVLPg8eGuuAGhCcUPWs5ux",
  "key29": "tCsxzga7X1MdpEMu7h9W5a5bsu9YqtopnqkksPW1oWJxgJYsRP3xdnCSG5BVLnwmfPwvv8pVsaLoRc416sKwdSE",
  "key30": "4mURu5dBDkFbkjcKY7wqE7GkimfVK94cnGDFfXsUfLZBP3vgxNRirwijrAgTHa268L1GoMWgVZuSiz35xpgCtLn3",
  "key31": "2qaT47oCL1JBcJeHYeXBit47bKcoC1wjLNBEhNHFAhzkAhdQfuiJdnQxoR8TvcBvBRpYvXzzEEVwCrgwhFrW2qys",
  "key32": "yojgeoPbFsWDthaBQRCHgzwK762zCoJGBB3Gr5kRBus3M3z8Y8j6anVk1mAEwSqtKd9fv4iaQJJhG89Y3sdHEhk",
  "key33": "3L9vL6u4mvNcMyTYfN84fttrjxvQV7yAif47JBMcxMvED8og2d8Q3emUasgNZfvUpALBCoBu43NKMYfaRc3CvQFZ",
  "key34": "4gnqv3QZpsKncqZK3ZGVr4XZY3fGMe5Ctw1YJQz5MhcA95XWvN9RoCJkb5zSHaExnHdaoowBkhVP7EimikUth4Mn",
  "key35": "376EDhsHSaK4c1MPTS7hNnuyGvEFjTVwsVzCtdCqwdr8qgAKeTydPLrGk5uSAzhwTUgfgEPrkAXu6KFN4WB8z6Zk",
  "key36": "4Uz1yEt2M8uJCADovsTBQ7YzAwjAXxzN8FbDpW4W5zwciPwqhEAHucptAax4DndcxpW1mJroZwbjsQxFTCYJCGcv",
  "key37": "2m7RUUQSpNhpBQGVwJzpnjMRHaT7b8LWXmBb1b615x8E2Canc4D3guiJoNR47TXKcN4U89254W8LrKKT6XPjuDja",
  "key38": "41YsWzNYkV6cusxwA3BJSWudpuHhsXkcwVaH4ST9D3wdj7kQG7r6naUXupKWZYRLVb9z4dVM4t2oa9kQjWUUQ2PP",
  "key39": "41gfvkoZTgUbv1io7YBvTcvHTrgWaVf7gn6XDfM7oT8j4nXZnZs2sJLwQUz8cuLdNpABkX6kuruk3iwdaLNGr8i",
  "key40": "4SiJ8H3xhVpVeD8Rpm9r7t1rw4kQLzuC6oaatFxeGy54FDBy13YfWufjkg9NF5kqH7X9MpLksEQh8xWJpGd8n9T8",
  "key41": "2cSyjA6uC8TZK9BTrJgW2qJeA6KTTRAA7zUFATXhST6wiVcaJS1TLEf5YsLd1EJbB3PyMvCHoixnDA9mrVyhzd5Z",
  "key42": "3b9G8PsENVnQScgigVCjqW4xSCyjYBwitpLkA5G8WP7QqpZi6zyJJVPpVgWzUNCDP6H9KoF5vyDasCxWwaWY6Rc9",
  "key43": "61nBQyFS9ucCN3axni8XQEGp8KqRaxCRNSeaC1kuzFWbu9vod7UsMrqDdPPhEEq5JQZPKe6X3izTWH37eJtcm3KF",
  "key44": "64QtN2cdd2ayGhRR44hpMgNcsQwyut1Fn1QqEPYWcTtghQNkVD8egy8G8g9F5g1oSQ19PoWAKsoCDkRgTLgJCMeY",
  "key45": "678bmXRh6MiXeErysS5X86twJFtNC4bDWHKqJ1f5bXJ8UF8K1cL2z47zcimqUDmYygjEVXvsRjYocpRZ1TDbPeKw"
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
