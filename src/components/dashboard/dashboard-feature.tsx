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
    "3GFvJjyYPJ8ME83d9nnyMBz93vsEq5MniiB62hdpxkkiJytSxwNMjA1dsTfp49MLd7VLw7yLhC8Aa3zQqt8TXXaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nhjkM5bAGof1wGYxLj4PQLE2VbzGMEwYkCJVw5KprQKZwJDNzQ6ZhLjbZ8z7pMTp9WmfM21qR1EUYm6JSCkjvfq",
  "key1": "3kb1RzdqR4op83i5nM8AAXpmFEs43jgQz43ykHt92tqFBg87d4KauMAKegAFkctxMT1cu5ziQeBUmvtABeRsDBcA",
  "key2": "2QjqBeNNJp5qrSysA1cbFMWWQqc1oAZ62wjmYgNYpbERLCyWQivTAUspfScdgHm1s4C7MS8yUaEYWqnpxpvPL1UM",
  "key3": "64Bo1eG4brVg2NdHKH2kLZMMYPscjJhroDbNHK1RtMndXheKZe24Yi6QzmwTKaidYwdkruoMUuaw1rmMo1K3dzw5",
  "key4": "4UWFQ67q6dN4X1uB7zSa6W33cmVDXq6oUJC2C9bjXumqdq7LamVNHCQY8tXFAoptbrXczGDwVAAuVLgdm7VACSba",
  "key5": "J5uAek4bRG8ouN21MKPf2sKF1HodwxjCoxPA5Fcna344aZAh8P9ztLwWajVTfuVr5iNXb4GENKz5PT8AdxtdEXz",
  "key6": "3Ad88jSmsyssBkgi6WkXkKx658FFXXJ3CZLkdV4LT48mkcVFgDLfFxdSNgdEkQUAdPRca449V61Y6ZUhA1H7HQS8",
  "key7": "4ma8DwXX8KgF1sqSh5tQWWf5b4r4cCLnx7yzXhNbUB3cqYNuMs1XVCfcdoRnbzmvaUV5fVym249EDGRgFFGbrFnP",
  "key8": "3g7hAXJRB92mdWjc1UGVso23KNpm2JnTwJGJHYFpDHmviS6ugMKwX3i2jpTFC8s6kz9LwoMMp3ZCFFsK46ECB7gc",
  "key9": "kzsH7HAUY6pGTxpoeBoPXoG4pgF9uCnjpk3ZMtCgZWC41uKTyzSrfMgpRYFfVyDy4boafRi2gbVyQwGZaj5rXos",
  "key10": "4rkd9787GB6tG2LHfGoa6JVaaPRfLSuiBnsMDxUjw9A3AnXyBQ2c6ZVyExbYkYTYMToGSK8gmo1Kbroyvt5Nq7Qd",
  "key11": "2z3ue8wMpczATiaGMSeLAWRKX7MRcqmckpPSWb7qqHuunKmZYrNSifA8Aj85ryHBumkgtddnREPaBWFeEdf4XbYV",
  "key12": "5tS8XEufFvpbUrJRs7EiWYUaL4XUw4xwv54pTtRb8zh2Wxa1tEwx9KfBAZXjNm7qsDvnQykDYdTzQHmJYC4d4rmu",
  "key13": "5THsCwoj6friXaDoqMzfpaYaknHxbLtJtYV2qdYod8SwtUqjrMowAZ97r8GJ2Fm2SqRZTgYPsPdSrC5aHkSQBGZG",
  "key14": "2oAZJmg3CZ6i2TsSd7hqZuwHPtWEmk1ySA6Z2ThrArJ57iWyjufVDadw39vea1QfqcCo5Z1QoHE8tFZZwbb8fejk",
  "key15": "3JLfZMKhwLwssxJqrQu4FecRhWsLR9nGagm83QfK9idCLhNA2c8YUqWVk1XmwpewqckkDmAUB2UX3M3QmcbTiPfv",
  "key16": "2RXZNV7F1tNSp6NEiRv7t7nZYN86XQXiSv6Wjs8Ny8HiH6FimViUWfkdDUezxBR2gTbgcnnCxteYfRngTepN9xn7",
  "key17": "43gJygihp8yKqf7bFucsBwCnsmKCwtNJ3ygiChCiiCWTaJeme3LLqLtb64s5GQ6XxXJfYHVsMFMNQ9JYj1jroag9",
  "key18": "4PLdf1KbxCL8TFdJrsS4m5vQXLReh4zS7JcWkhb1Y37DE8bE1ZN4rd9nXfTmsW19L73JzCEHYLKXWbc6E1mfJD6Q",
  "key19": "t7QfYS9XhUwH7rP2W9C3A1Z4h9jRxxLykTPUrJaabX1LqKpya7kQYHCYHRwN6L5tJ6jePP5pZpQNF2JiyREtxDN",
  "key20": "8taQpSjdSdY9LyRCdwyLE8VbaafSRD2AAtkpb9n2aq85K7phLDGgXGN5BeVugjxK3H1RtoCp6wnNcMNfKdeLcgS",
  "key21": "9GaaSmFttGr25bXu2wxudurtVX1uNuRYKpwm8BQB8YTLsPv8CGxUZyWnCssHxU9VxTtgoD32k5hPtMD2gN6eXyv",
  "key22": "g6eBFjuLcQCnkicke5ZYSUUUfwm7HVKNBMT3GpuAavUjokCpxs4btM8gwvkGUgRCKNZsxmjUMpo7H7sBZnX55ci",
  "key23": "5SvjekQxxnh1VY3iyEmoEYqYA6c2QtEXrJ5nze6d3cAjkn6boFXhxy1trzFVS8pKHmNeJjj432bYjz4hPKndKuVG",
  "key24": "5HTQRM18ACYSfHhZJvLPp7uNRieJrzRiSouheEP4utCy8z5aXqax7GXAPWnbdou7BfwiV4b8oyjoEVGxUg1TRix3",
  "key25": "39bxDH4ikZi32NSNczKCqKJonj6Y27Q1RTmztJiA1VcibYij4HBuy5vX2AXwZhwsATT8qmT1yfTFLabUkp4rkZLS",
  "key26": "5JemRbJvHYtC7NxUnpZpst7GU3jnMxJcf63EntHSCK5cnmtZxhtv4QVKijw15g5UGei2gaMRUzJbQsB5Pbk1Jbre",
  "key27": "3Phr4kapL7vYHrwpvM9DfHip1TYjUhjfaUVJYjW9x3MWstG3a5b55VcXRQ6uQ9qYMHikoGanaY7UcDhNKUkNC5Lc",
  "key28": "4y2auRLhb3noKKRjvAZNu93ho7kDkWbPumCy3JXE3kNtGn93QTLLtx3o8HzDMtyyD1rV5utMpjXwsBWGWNRAdzFt",
  "key29": "4YTiSoxq6zrfneSNPxFmjPNmB5AY3HrkHKjFbzCSyW7AbrJ9SytJQ1fde7patNZwE3UYfhTnEsa8mCpKg6bpgQ4A",
  "key30": "M891kkX4juGcrDhe3rSLmRtaGZitvtWy8k4z97SBmNN8RwoHmbeJu8SLPLNBcqyia9MfjLShtZkeFeCaGYhXp6Y",
  "key31": "4Grp7mhhLFK1oGVa7qghfCsSBsrQWJvHh8U3VCAMaAh7yx18NmQFFbd4T2hL21rgknZc89nrryGyTcf5CRBnvmoy",
  "key32": "522QkfNprAa4HUWpZ9ZxA9h3UAVCwpdozpHET66oiqww5C4L6LDvUAij2kXkjVbsTGo9nujb4cerXs1sxuXGzKnJ",
  "key33": "3eeYNRy27ndSahK9ivTQqBsA9qpqwBR4RrWpHb7hYybew5a8MJts1m1Rxwe8MNitk51sBqmxMzFWQHwme3XbZ1DC",
  "key34": "25zcmah55eMRAPqfYJLVci77uJZ2q8n3RKcFBkzMHqys65K7eVnqCwsHyEDqiyLMiyZeUhRW3fiYzuKkJLVu1YyM",
  "key35": "3aDmEVtsJQVLKtV4X8bc9s7mvw1UGwkjKzzukEvVvdcozMV8xgH47GGRt1DhRkXpCZJ28wGoZA2ujjYKyKnaTRCs",
  "key36": "4TfZUaUtdYHJAE4PhJGCK749moyW5w2QnRDjKqCrAxJxTkq9vSzQmGD3khXjTqu6BrB9YHiwbg615oCmMvCcWH3y",
  "key37": "4PFRiitaDvMShpWn9ACzHmLG4yxxCzu4oZuAA2JHyCdCovZFCNbi4w115TPBMD9AaZR7FGAGdBL9cNxycLP7jR8r",
  "key38": "5NgmL147rvfXqmNcRmkHNERRp535R2jqp15tPf5dxzjVNHmjttuQY35iZxM2bKdByAqiLZmnwg8ak2pGLwu4yCFH",
  "key39": "34aWbhoi8rs3kmtLUts9QukEnGfVSJwz8dbifDn2uYTMKvRnecj9PNbAqeW3DUCUKWwKedqCs11mbi3jcXCjT9x7",
  "key40": "2AusXa7RyQwXjG9kXnagCJspPWaAZZ3hJiMBgw2sSWLj5MJBWuyvAhEKVwCc1yWfoxRVvLfe4GiucUVTF2utuAbJ",
  "key41": "4pER5W2TmYSFoZrB74TcbYvJoNbX51n4Yk9S31rwmB8T8QkoVX2awNL3fBE21zvu5yGUngK8GE5BRdcJmm8PekM9",
  "key42": "4zpU4qwjYqTctnWUEVwq4ingsUj5DdqsMsBMiLhybmkc6U1kqVB5JeYjv5Jad6W7HMk68SWV8y1FPopxhsDgPmA1"
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
