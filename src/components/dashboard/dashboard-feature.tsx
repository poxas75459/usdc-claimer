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
    "5LUtXAnDQeCbFZCBmrAcq3KcTNpDnrLXAhSByqf86e51Xma2PVvq2kuq6jCzyiMbwp4e6TkdMEeS4nnMTc4XS74F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YiKfqJfHMGQE7auDdjcDXQywyEPEZsasrRcSALijVaSH3bLfp2EM9h2KV18kxFBZPSG3q3PeGT7zYosZsvE753j",
  "key1": "3y83cw8xgDzhcejroQKER6DJCkgdfoLVMCNuBJC5FmsQLAyQVqR2wNK1vknX9HYTfivSohWSKspjXz4dsGssFRAm",
  "key2": "5ZExE28qzXHbMBKzTwYq1sYmhLecYJe1rU6pxhr2xZqEyiSTGqzyjhkend1c92bW9X48wnFC9XP4CRKRGfd4M8uH",
  "key3": "3pC3fiybSTR9X8ZGZWJq8cjnGRrF2wBQUim7QuDzQhYJP1Hek9REN8g4LF2ZC33ZJnJPf7oE9LsVpDX7eYMVynho",
  "key4": "3pJcpGqhtZDg9S5SqZXHyuMqhcJuywZWXJ5AKeUC5BPrx9R5wsrguJDfj5duF39893dAegn6XFDpVBSp9uf7tJcZ",
  "key5": "28YM6qzrAcF2ygWkA8yrkPUJSryE2HoZGRFRf5jySzCEExXbTX9aJt5UJHaztVHYypNdQoKqgcXqh3VLDNPU2t75",
  "key6": "42Py8fARwFAE9ZcXvasQE588PRWGy4KqtWYSDdyoLZt5ri7iQvfEEmkJW3rNcPqv6p1SyoH4idhJ4KR1MvZpAi2T",
  "key7": "4VQnYmThK1jER6R1GepYowRWNEZZL1mtcYi1qTcn243Quv4Z1ZvYeguFDu1j2yxEksuzKPPQTXNQKfzJbTqNZATM",
  "key8": "48qyP6gAgdpyG9VQYMUVUAwix8xht9Njmh3vparF1fAyPSr5HzMrxnbtgtmDe5jPY4s4NhLEkNdu3q6rj5zmh3E1",
  "key9": "2JGxUHGSeq632Af17oiHbF5GqpFgDrd6CYCMDbs8feHVkCVRFFXhrL3nJrvduKjn5EtEVTUK3hmPWevTpRAcBtc3",
  "key10": "3aphm4N3U5zYQaHHRqQ81jU4JYQa7nEm8nCzAtkJ72w1RED8uSbwAu6T7V2QTiNPHuzHQCGdo2TcZGR4aNTcGNsN",
  "key11": "4PeRTvJk13qksT4xXAe3TiXfzTiunoR5j19ku9TzwjKKxmBhXTt5nwDvPaeTeXySwUzL3vp4GCiaybQ1z5dLxYYV",
  "key12": "2y89X6x1Wd9Mhad4H5tXXqFUp9DdZRpVAdPReuivLTa3uStRmEaHKTBgUjHpEec4kaDnD9abuUv4NafoBHTbYRiY",
  "key13": "5i6sA5TZgsB84LWmztudPwFGZGX5NPmgfe1mUvufWVFR6ytGS5Uop7Dj29ywrydLL3iUSVpA58WXTpTjuNKhGn5X",
  "key14": "4JhnkNW6CRozhAXoXwPzLSSrpL2uJgJbRnnFhZUpmn2koTjymyrP26HZt7HxdgfcRiaRipPsERxnQVEGrcchirU9",
  "key15": "5P6QHKDaA7Ln1pzwLu3m7Pe6DWS9NDGisLcf3WcWkaiR4MArf9kxa97HsDvWWBvRNJuH3sweUh3mynrQ5jxQHTMm",
  "key16": "e5QedMQhLTcFX7r6bJuN9DJ5mtt1a4ccXLNUmtjKC3E9SRnwoC9dvUo3XNqWTU4FECqbKc3ePyQ5W7E795GxiCB",
  "key17": "41fcUpaLBTbgnjUawmVuSpxQ9dxkTm1tzfGyn7hZR539Ki8HRbCwyyK7FJdYzPbQFguGm5BJhqUqP6YeJMVzWvAH",
  "key18": "uuPpp7sqr8mKpWTBA6vdppjJvSkK2iUq9D5byjyjWnWpyvvVn6uQvzNu9ZRSxVoLNNwwtVeqZ8sdFvWimGfTbBM",
  "key19": "8aVEsxdNFKNUPCUkESaCaLk3HvnvprrN6M7SZDNUccEBhoCUoMQcaH6ek11DUqGD5vEtwMfVWouHgRnQ6n6FbaF",
  "key20": "5bF1TDLAyAy69WBM4zscoPGwBaThEwRSbLkp28h22WLw3u8vv4JjiGjg8zWDbtoB65QbaV8Qo2soF6SHJ9Vsvu9W",
  "key21": "3MRdxE8LCGkA949EmhUByK1dGHoohCLQzoZQEdosU7YRGYbW62gVYLRb5qvEz41G2ox4wSNtxezj5RaxQrkbuASr",
  "key22": "4DDh7iKZ4CSnXNLvMdLSxx7RUttqdvU5pFWd8Fbvp5dS3ZjYXVn7UsRQ55iDkEZmCyvjbLDy7hzDTd8t1xLWwJU5",
  "key23": "cRS4r9cErzHeKVRFCmU4uZfFAGAVs1zd9vr5tAAjeY6Aj89M6D76b1WPc25v57YXopRmxXp7w4z2Qq226ANUZDG",
  "key24": "8TZVxjGRwz6ihA77b3oafYpEvDHupW8khiAuzkiXXMF2UCfu9XBH2xwEwfCdvsh9bPaiwS8mpYwoRxaJZunWyFb",
  "key25": "3WZahUEeRpUedHkZtTME3gJqrDraJ7irmwhdLJuWmEA7XAWC6fU53DERJg5DLBRj5P9a3FbGkRX3y5qpNq9yFnf2",
  "key26": "DFGSKenDwx4iwNaKcDMsqqetgNqEHsuSSdg9w58p5RsP9DAb1A8ZUaXa7gvQg6pT1hCyAPTBJ4dvfhG5xzfdPsC",
  "key27": "45RCbvJFLezjtNvqMYbvpPnYU6RwaSLDyWZm2zVzrLW4Hq3d7Mmqqbo7Y7K6vXn9i316JmuxJWYhXjdcVeq4Npv4",
  "key28": "UnCqB1dNpgtocAbqkf3XBhbRGUVbWipeVw2goMXSY3F21xDmjcAQkU1kbcJoxzDhGBPnRqoDc4NUd1nReJuoBSd",
  "key29": "64eM41tQVSm8tb9LztKYy3s7hhb18M8pgTKMh8DMmFLLdEgXdXGLPmVXQEbRDJmeZY5Wo43gZB7FqADLVB5GVWGC",
  "key30": "5pDk55enMRub6KNFVFAfZexqPKEWvDspopmXPuCuPZmw6WXR1nw7jGqNoccpfcyhbaZeL9bfnUUq913w4BxXzRFH",
  "key31": "3RYWBSS9zM1YthrXtokTfFCigAqkbibap7dS8Tdv382hzCjWMra3KqtcWj4aNF8v8RpzRttqu1Djn7Tk4ehptt9M",
  "key32": "3CAPfRkbsydZp2VDuHV1hSxdsL91UPpS1qsfcvE8BtWV5B17jw4Jd4ms4XkHSCiJYoQCpGhiC62ZWN8RJ4ViDtAC",
  "key33": "jNdh1ZZtADbMJ8oygq57rER3oMFoCAZXU8L8NpzFg739rDjUHPaDZ4VtpHTGV3DiaFW1qrg395hZP1i1C3BUcc7",
  "key34": "4fTP5X4QjepPe13EH6oohLDguMrKFBjrmimtDRhdxat4keWZLU7Z4U7FL5aSGQZ8TW8j5KHyNnzWjRkua2yW4rLg",
  "key35": "2hmJsNSHTcNKAPWQfgjfwcQjfw1o1bzVk7Xui12D4UMmhCCEtnnMQAeASsuDSZkkoEfdXrJLZnqAhbA5kw62cxGZ",
  "key36": "27pwodzXWPz6sxxM57XSZDFyNHPfu6GnhcomwGrTr5L1UcLYm4r1bnpH5HukcqY1FQsDZX5GeadSeZ3Z5Q9L1k7e",
  "key37": "5aFeCSEe33s3EaPAs1fqCqVcy7mTj6Yvqcyk3s81iZvfUgXcVjFWRVdjpiVZisHdJMC4B3mdeCs6PmLfQxzUA2ki",
  "key38": "4PCbx9rcSDkAxVHAZqAfZ41UaKa9qEXmwEDw24Bg5ZH21WvPR6X81saZwdyFjKExapB3EAAuHboCXuYDSsTXQWYF",
  "key39": "64ZngBfyE1UpMzuuGW75H3Eo2Dqx1BNqZbGBYuAQ9ZfnFdBrTzb4RmBx7JHifP8fxu5K8kDN5v9k76FYU8vCqREj",
  "key40": "5zte3nPRiSrTxBnWUPLRdqZX1HS6m8U3gQ3utVZKQjn2foWiBMEXL6RRcL52DHXDPzGiSHwuqZJCLeCnTneXYrD4",
  "key41": "4YyuS9RnUquCh4B8rCVjrAqCbnTTXdR2A9XgfGmZrCnvrcWubq12kvydcZj2AVbaCxwNFszAZYGmc1est8KVrYzQ",
  "key42": "3MZ7bsQH78EUswQwMsqwPNyyri1cMU41nTwMd4xSUhWNoBdPv5rVBe4arQ6JK3TchevVvbHNJwUs9tLP1dA6Le1K"
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
