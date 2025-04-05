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
    "65JkKsYJBNf6ePU4t2vUhUq4W3kEcb9LxCF91xpQxDSNSjwGSxPrrAMJY9F27Eqo2ff1W81b9DTvEnvU7zohCDfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rUoUabcrnik6dA97fyzQnFUXquv1KPRXPD8CATdzQqeZPxpBNkjL4771L5uwFYTG5vQ1qVfMDdHpbgJcHjLkZjJ",
  "key1": "4v6L8juHtph8SFk9uSAzGEPpyrzt5zHfBRUD7Qts3iNkzKEcojdc3MJJz4db4fE94ABeuMRGTgdzd7qnGQL6dw65",
  "key2": "5P71TAr9Xbd4nz2aMcrBRo9Y7o3M657L2XynQscYy6wNh9LaV5W8WXfW3Z7zgFsmCtn9HwrXB9Siq25W2yPNAEvL",
  "key3": "FiuY1qwwCJ9FxzVdAFAdV693EVNYHpor19d6s4wJv3kfaxsTejzTL8fgjETxUPzcANfVJ4fg7j6VGskBQM4rfvf",
  "key4": "2NpJFyvWbvsAMzZjx2heEkurSrvpdvFuKWd7uQN6pJMdeqmxXnK8CUdq3WKGyvCWYaRqHntqdVJi5wv34bqubpNp",
  "key5": "3rGEE1sFQU7RDU1LsLEVr5qcQXde6t3VPULiDyomxdpZgMMzX1vhn5nJLfTXuw4vfvfWxREAHv4J6FULMApN81tn",
  "key6": "2A7B4wUDtB1cWdb5yHsXyZNM6MpkMSvp48PLiZ2bjinHaKdxZnaMAVV2CwMyH1nREPt3L5butnJcocC3S9ELx7XF",
  "key7": "48g2kapHjr4GSA1QvCTQtZ6bY8J3ri5fujdQKePCJyaGfw784C4qdiWWR7BWVzM3XcFuvgaUK7D4cfFvesfoDHVi",
  "key8": "36vUQeNzMoK4WnRyz3ySDAeN2iRvC7c4s3RxrTYoC1ETy49rVwngprdGv4EfHB7y4k5Wd6c51jYaC4eUr66TQ9zv",
  "key9": "2VkWyWRCbwNjJLEiFkz79b2CJShamRehpizMa8GBWmZDvThfv7SM4Jt6fAhchPEd7MF6cJXosRpZLsMZG2pmuCY7",
  "key10": "WuGm1CKwsZHJk6cBQjhELbPNvjjNFCMVA3hu1k5jEDKTAhtthuk8iyLZua6ghvNZy6hPHFqaqBBTirbFUFDaDED",
  "key11": "4PmcVUREFXoJEpTMmZoUiD1pMTUvcuGPsXp5pKyuniU63BBigZNbnt7zEpHPJxHn4gGfLcNNtRNu8g1ts8JjrbvA",
  "key12": "3mGANhRZyYcroCA7u34aryxPXJDGWN62ewhwT83C86Gd89MCUAtpgUxqEJeSxkYVBykyMi9ouAbLGtkyWaJe68qf",
  "key13": "2xjjyy2vRgoCRdfEbDiVSE9nGDqAxRSRgCehXwqjkxy13TgEfZLe4fSMkL6yT3XC5LjfEUJvdNNXYcmSAFy2HtrT",
  "key14": "2BK2YXWF3tzxFGR51QbvfxYnkPxYpf4GK1ZGG5y1iXjCtUZJCbFxi9v98ZV2A99WmHJei8DLpqtGdBsSTs512sjS",
  "key15": "5zNQwbfvZ9L68WBFQ4Eqjcbvk9DMLd6HCzPuWwnviMhijj85Kb3hRZ4PSDdTGpkdEvitPUU4szY1UBjtHp2ZePqC",
  "key16": "3rqZE4KF6XysyzqRnohrXPY9bDSoCW8oGfKUaWj9cUjbfUcXMFjBaskHRTkuDGc69tG5Rk2HhDy5E8Yyv4mtXHWR",
  "key17": "59unddma53eBv38dgxLQu9WXBVEyCSv5A5S3NK4XPW3taB3yFce6HPRHgFh1wDz1jYreExNtXVw3jtMpRa6bZTyY",
  "key18": "4Uj8NA9n6qxkeaA1ZyNPwQSD5tUqevVHescrEAqTopb2LpL1LHfbXbA6Y7r6Vi3LpJSqTJXnVuve5iqZ7oQKnMGE",
  "key19": "2j578zqqMG53pC4Fy1swsXNiBZT5peyHD4zfsQcbYChi57h3HBS2dM3iuV5csjFNAwPTL3xcgQaqYnzSVFtpdGBV",
  "key20": "4ny5gQcFznX4WCFUyVrwt88ph39gx3v3KpBEo1ZXXp5B3dE33iiwy6x6j6kiL4aPQJx7MSZoH46t6ERC2xJYU7t8",
  "key21": "3J5YQRdqZKAbBmbTaNDcY1c4iuauNGQfttqxqg22moevJqtJyZoVY7tYXPmhsuoRJocWj8EPzk2m1yBhczmRsctn",
  "key22": "3AQZ9eQ5rAdZ9nZsw3jxQ557jYmpX9wyvR38bRZPFEvdye4s4XqLKXMPKS5djw9R7WxTHiycrifqQoJYftVYmxAe",
  "key23": "xE5Q7JEhks3HoPhf7DXzFnrnRKdNcS1CvucvArBkxGrHxC7RneLyY8ipmavBpBSqVFBnzkxLqEp6PQDR2hwMdFW",
  "key24": "61AmK5jN8G6s9zigKeEV6HeZ1ezhEETBFDVJRa4mS2g1VqLDZbyJ5mjVkxDbvEM7zV4NwsK1GAFEbkDpp13ZF2Uk",
  "key25": "5rsFJELRZFACydsAtoq891wMYnaeEEprycVkCaMWS9M25V3gKDjd2ng2mFqGufKrFg2TksgJ8e8H7RmmyLZsHyj2",
  "key26": "66CS51Xpff7GVUbfN6PtverTEYYqbfB5DxTHd5Rw6xPpRbCDaNsz5Qzcq4HuDyb5noTiMR6uSKwL5TtFJvkNTH7V",
  "key27": "48boHVGUrtBWPq4etbtYqkxtgd4pid7RnZrSE8b1ua3t3b9cZBFvWpAYpjeu8pzan9KcvrmdYMekeixrqYR56fAu",
  "key28": "2ByKu4Xjj71rA7a6NACTtXh3QHvitEzS8NMoveCTdG3eThEwdxza7SUD6rFmx8v9YN4RxPtE58TTC5L4QwR3dPJ2",
  "key29": "51mDYefC6zrSoVngCmUrDDnDu9axfhYCAssBRNZ1iPU869kGCPPfQfKtoK5d8qNi36YVHtgmciPR6btNadLzSSFA",
  "key30": "57RCYXuYQE2hMx3bNHFBcm51yQsNd69V5odagYotd2dBqznmhUjdsCka8K7BBouQTJM4FB7m3ZTSvgr4XRgAuK9m",
  "key31": "3XzhpA25NeDZAYsmdzUN84C38Qzit7GD7Lw8gu9RKUrpiFXfEc1LSLArjf55GQMhoWvWstyigTBGDWE5UtmHuFz1",
  "key32": "2wLdsBpvNxereQ5X4WPTB2pRBo7SMyruwT2Lhq8WQS99xgGRDKVk4UgkoeA9S9U9JpUMnbvVTXFpGVyuVf591RjX",
  "key33": "4eTZBgByfLE5N6LGoYTAcGiACWP94Enzq4ydttceu9RwTiVE9jMvFLbWw4XBxcHPMkdRCZpVtUpnFS3ZJasL6vWD",
  "key34": "3bkzWcKMEdYn6Jo9KUeJAo2QTbtZG6cXQVMA57q6Uw148mEkJCdd6kwtVQR7y3wap8FaDDK2amsALzQRmiLk1yNc",
  "key35": "ddYh13SkeHKLXTnft8Htb2UtNSpqaaiv4fhJqidnKLnvB1r86aEvRUicscaQYUy4xqnwiMoyybjVT7wsKkQmrm1",
  "key36": "4AiBNXriRkHPbwUE1YwkQsNNQjesAjxFp4W77Ui1UpehYB4eRp3JMVH26SR6bSs7GWPKoyw2i9VrGnmYRhW18YeE",
  "key37": "9VPn4jTxpxTtwdRQ9wmgJ52wfCpu8md9EBwPoPEppYdDSh9xncDZYPdEJUfpQGwWYeegYrETowvFdF627yv2NzA",
  "key38": "cDMWBs4tzCjatdGUeXQbrZbbnG8PT9A2bJv6E39Z16CR2Q8xmJkxJYHFDQkhL77x7E6ReMgKfL4iAGhMin9sxPY",
  "key39": "3RDbL1miN5iEdpuB9r2TseLv1AQTvWo7UqVBhhpzgvXhU4agy9m6itDgAHTRHbZY3czsZDVEXKd4HQtCb5DBgc3W",
  "key40": "55FK8L98Ad4zXeHMPhUdpxu39sPjQMyKEQXgcZFC9f1k6c2sQTidW5mJEfAvwz9MFaZpf1eaqsBvRtuykd3ZcftX",
  "key41": "5eBa5c4BW7YHWdLyk1vumbKbxsPzn44dQ7XPLGx9ALhh17ijPvoBQBkz1Xf2WxV2ETYhY71imSGocbWyqHH3iGuD",
  "key42": "5RqR2QdCkGG5ppAGSgFicpPRM6qgemmABNVjNu87DnGaZV9ufbNt68VQTWh45natTFuXAAfkGGih3VE79x8PTvHm",
  "key43": "ABJvc82ZAJLeQsGgqHynKU1WeJwJ2rz9za2UZgFJNmijuN2YWiUYCB6LrnX94fqjpqrqyBynaqvMLd7VTTKpS69",
  "key44": "DGiMat7arKiSq6GMWYcyX4rM5jfUWh9P5cxKSnAu4tqwKrKPFYDnhRsUBrX39WK9epSKNAU2MfHtpLeFfbXNst7",
  "key45": "2mk8c5u7Bq1mhFUyfkJfpGAxP8kjMw4SVe2hrMUuNuQnUAuAUH3yF7pPSK6f4HgFfaM2zUpUF6nJztRWCupV5Nju",
  "key46": "x2zisQ6W6f3PKJJf5JbtetEEge3RqMnvEytzqufR2iBkA3miaBiQm5HUwgoobFfvo2RbNpTa74wzHRrRDxuxApL",
  "key47": "KnG1kaYyfBn2gm79Ko53e8w7LrUF7GKgdzCts2jXm5xVhvKt8Ua8ZUiEdAfFRxz3Yu5UawqYQcqTjKjYFCKppGH",
  "key48": "2vscPDL7KhwmBFQqWigpgRxpCXk6Yap1t8KdF4xsDtQoU2E9iQ9tUDMc6A1FB5hprrHQzEYwdFNWTBD4UH7VaMM9"
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
