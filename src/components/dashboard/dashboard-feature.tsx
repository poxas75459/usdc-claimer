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
    "47K7QzARNq5zmZdyFsokUWfc62H7EPoWnjwovKCRBoFjGcMc7VFuD8zahEWAnCAtuAczr6znnY1tKv7JFCnVeXok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wF56H5gUDfaTto2hZtoU37ppTqZZwscGVf25WhDsLfJQaYu4bBr9PjBsvJ7Gx9acqSWCxUjoBSPUFCMp6B7WsXZ",
  "key1": "3UffA67rH7BYMifyNR3ktwBjw8hmywQLTSAQhhQtHMB2zi9Ds2XjPR38EtnsByEZiL56fT7nANKGLzg5HAnKFPZL",
  "key2": "2CQdrXS1Pjc1fwaX8cwC6Tb6iXPZcjMcATqoapRQv21sE21k59tZkJa8n6844kExXi5FxbhiKHgnzVZcokeGHcsw",
  "key3": "5ZUoPUPVV8CaQpsAZJMpJXMTQmJr4QoAnPeobk5LhEBjtwdeZj3qVMm71EyRGoYLXdcPYN9XQaagDACUpZ3dRao4",
  "key4": "5PM81PHxFsUwoXyZoMFbYkxPuuB9dBjeBkELdQT1mn2yTmUhyaDNz6N6Qjoi7xZSaPAmDtbDyu1X77HR2j6zTutD",
  "key5": "2ajVanPnFSUEhWs9Lz3HP4VupqeYwrWabrNHWzvr7UR7N6UEPQWD8E9Vuvb9R4CVEB2gQ1ZvtWpbVifPdV29N7td",
  "key6": "3GHiyxjwXfUD8rZJBqP1h1LkHYnLpySQqcZhLEk9vnXq5k1VDoJzwFPsDt3Yto6F68xsX8M6Y95zbZCVCodnj5mg",
  "key7": "4fLi3vRMwsjC8MrHdiLaHTt1sepTng385ArUQfFwThUTRo1MqiuR4SDPCj4RHAK4Fi18mUHhhcWFL3Q8WDZxC4CY",
  "key8": "5ZWR8WjpmeZT3AYccnGoSzv7dtJxYNabyGWZ9uZWSyv2ZgH68k3eswgf3hNHyYj8fHVctmuxNn59fNxaWpuiY5Ux",
  "key9": "4NSiAvJJ18czL2FQwStesz6vdLk24hWo4HdY8drjx3BTDJCStSbneXEC8Qp6qxL1gsnixChqgJQku2TXzf2EywFD",
  "key10": "5gY51fHWRCgk5wVV9VqNwizfv9LCaaf4RyxbUKPKLDjNnZoRabsurLu8cKZegXQ5i5GNXKHzMxZ7uVJBxLitWey9",
  "key11": "4ryiLZJjDALc5oQwiYYAw9ZaL6GwG4vpZ4dcNMSsraSAypELW3ptwAAYsmYX7mqXVvzngtwzEdT9fMx91dTcMayP",
  "key12": "36JQGYR2wHJrktvUz2ziXncQXkhNB8jT3CmWS1oH7w5KdUgsTTbk6YFqvNEv5oBDtmQjbQCdFK1w7dxDGMvLgeJN",
  "key13": "7a4H1qA28HpUBwvT6DT1CRTdarpKdWfVbPrHA6FK9dWC1oxsyztJeMHgm9yH9YezCTdDfKPVUhTeRoYRJXGmxbo",
  "key14": "4q7aZGGKTderGHVxNFyfKWP4q6Pqy9s1YZcDjWuBMPVjghApoSU8NULAXvFv4Vq3qVku2msdet9YNMxVT2FhD9CD",
  "key15": "3UoUpCZ7qa2eKJgk3pWzmqv3FxwB77zL8GEcNCgy8HiXt5AXqz1fCVAzar6o9McsreNRVTkKunMLiF6abmshRVZS",
  "key16": "2tQinqxKDKXpJkHhXRRTAkmRbEEfRuXyrZXeuaCjBmuwJY4UpFdUK7trvdyZt2Epmtkd19zGLkixmCGnJKXSMP5z",
  "key17": "gANkZCinCJmdPH3oR1XtZFPFxG8YNNNcqmWz5oBJwdXHtJCHC71uoTht8H2QiiCakeqsYMyejyuQn9ra6Y1UCeH",
  "key18": "4KwqBWuz4nHsawBH37wbmq8BimERxLYtBynJyw26WDLSShtXjEh3pxUrk5RFzVxXFZuj8SPfq6TRWGWZvCjNx8Ay",
  "key19": "9gormsgAKyiZDiYu9HW6jWD1gkS89DW4AKjk2zomY2K3oTMMU5zzyui6GgXtFy9dEcumu3sEDBcyqiZ1iNXNUfd",
  "key20": "dTA184rqMxLiTRqacymAjcFw9R4QTUWWBsYvwe8B3csFj8u6ZMoj3NQJGNJQHcyj139hDsr66w1W6YS9knQarbH",
  "key21": "2i1GWherNzf6gf8bpjqYazjcKnjYiJRPSPJvkXA5YStYkGdbgdPdLwukejAXsocJGtTYxHfpVnwqrZnPrJ4UJPa1",
  "key22": "2wpXgWerYQFxLDLRo7AW5hHWQbunUGAeK6PQEgPeE8YdmpLwhe4aHfRD162zfT3iSweNUrZkAvAHNCjehHSwuB9K",
  "key23": "2mQxJyQTBr2WpAZFAPSdEYxnV5KtJo63t7vUBf7Z59mTTqohDrvbx3J374gP6z82fRXoCZunRSmX4v7Enpgt9oWG",
  "key24": "23N33hnohXbkjxQe5qti9mfk3ZMCBJjEnnhSXnt2CgKia4JHUAD2v9Jxm75WAd2uYLwtA5rtxAWthbMjp2qSbK9L",
  "key25": "4kE1PGLqmcq6vamDBBsHiPZwsr5Yes521vaYBY6Z92bkZphd4kZCtsLzqX6RJsSuAWRzrF27so5HuQxoZpmUfCZb",
  "key26": "61NqeKrQaeuNTfpLyb4tE2RTfPzUpu5RUf62kxEaHtxMR2geGYgFSbFoDtd5BJjTGkCKh7xjV24fDv7vRvtu2A7X",
  "key27": "PTQ4iqz137PC7ytjAM8sMK1KGpqbeoY2NGRPR2ZbP8VVnmJymbv6gf4xgGoHLncFeAwLcqTNDiGEjRnmvQJQZqF",
  "key28": "DqrmC2gV258wZkExijkLWU694ZGxQVimoUqUA57ZVvPecJRZA2ubtTo5Gs9RhPED9gEJbA3horssAZEpXgHcfZe",
  "key29": "3A64Bus8SDKWxtn9cUrrqYwbCVuguT2ku9YqbGGi1vTHZtRhvNmfUd2AhTLa1vnADQtWG4ob8ziPFTyw9RtnfA7Z",
  "key30": "5JPw7KGB4KHDTFaSKoZ41ZviXAhSQKq6qYZTVNxSSwZM5fDbtU8UrgsrdXgaXgNSsJCuqbU5LxVZYybbTpCUr4rb",
  "key31": "449cB5kJPQr9hrjffHnALw6K2VTarPdsQqBsP9obDdExzHuErcv5RfffR42j5jPt4fktz5NpjFTpdx68AGXXeycD",
  "key32": "kTpGLugo35N4DoNTjkhmpBCDofXYTVE9iLyVeofH9d489baudkbips5stTfN12wLCt2165sZCCMhZ9nfHVxpR8d",
  "key33": "3q5X9ijkZcLEestuJeQJ5H66UBcTEFsRAz1YRWRLPAXuCu99R9NkmfCes2iWxydhWC5KCUaCLBSDKJFxA142z186",
  "key34": "4e7Dif9hhbszbZhiwRWXkzqvWxdnYdWkHBCXEWLvtVaWkhWni5k2jBAQmsaxMoyLHjZC1MXoJuNK8taaM5ihFdWS",
  "key35": "27TjFGJdPgoDTXTch8mXWuoAoGqhBKVxPCY6kN3LPiJZFDRfJX6L94sdU7VfzTxofPA1f5acT6bJeiLHbFe2Wv4T",
  "key36": "3X2FJNvbQtQPVo6EJpbU3wQYvdiYWdPsmWbevZ2G8SS1UBVpP1rPkKJ35XHDpnfrtvdu9axE5yNaV1np9vA59myc",
  "key37": "5bJQu7Ce4mTjz2bsGes3weQqq9CEtQfNeAzQNq5q3knzWatX6d5YMmCmYks5dNgghaKQBmq7ReRZX2fBZ3F3F1Kh",
  "key38": "pXVXbX2ecT291JDC8evzZpkmb5mW4wYZgoW2nNSPwR6db2jS2LxyjTsMwU8ipGLmjaxMYVxRFcu63y3B3wND1kd",
  "key39": "4tMRixcRM5T81WBo2HP64QQQmCpEioKKSePBTfPTisxQsCK5irdyoJvTTnzCmAY81bZ31Vk25FdavqtPyjEZq5Jp",
  "key40": "2aFWEgwbYdi8PYMxVxpLoUkjyqRCB9wLrNKzHt4sDzntX1Bc4cfYWEvjrW9McTNwBjw7XoA5AoDU6Jjs5WbfbkET",
  "key41": "4BPVGoXESCfApiY2CiMJfuBrx7FbjFGdbsA2oQ9xjVYGcBswnmaZrjeKKL1ho4SeVpYnEpAZLQgT6PdtdvPrc6RZ",
  "key42": "6zdbgrSycXUu9dS99g4ywggpq9UjZcnatsE38WXK4M4DLegwD7J6v48MD8DZKRwZpmYQWjrXdefpGcx9oGA42Sm",
  "key43": "3ya98A4kVAs1SwyH8cbhw8AYjrx6noFqmQGfXSgRo54fR6QNdhoMv9qUdStHhKcHm1nhSyBvWoFdrnV2S8vhGK1s",
  "key44": "51sEpcPiX6VhRZ2dy2NS8x1zREUit8ZC85tkoREUveHG5swLA3frMNPmDAxPFtMzTJXiRqdSUo11f6waVFxqPET5"
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
