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
    "XfhCPEZd1ouTBCTuH14Z1GwA8zJ9PDkLVvemiKPXy2SdQhLyG8sR3FtSuBaVxFdm1xLoBX6CAdQd8qmMUJcpfe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bXuGZRMgeLb7enxmebMwcq6oCPQfFrZ3gdvuYwwNM36mRnk8pYrDWRKr8y1qSvRR3JkRTeALvuegG92woL6ARXh",
  "key1": "3iq8bA2Dsa9WvQtJ2V96J1GaRQsFY9NyQPtvSRbstLgK2XKHbiSE9p1GF1gA47hT7Qobe9eWWPHfbYTdSVRqZ2eL",
  "key2": "3U3xhB5C8yXgYEGv2fKxFs8A6KPKo2i2Hq1F8b3wYb43h1NHVDox4qFZ92hkrwpVgzp5dn69nSDRoHx1p5FJXyMZ",
  "key3": "4ece3fVauunpVHqKzDiBndaQJokamJVm7jjgRSCGYezkcReEdFxx71S3qxxw34BbuowJVeusiCoPSLJeneTpWGFu",
  "key4": "25Qco8HfdnPSqJLQpbRcMuiuuWov8eWxLNEUhmAMDvEhkuBJUW3cmnvHK8vKhZsjpw4Y8hnXxXkcJC1naWk7XmXY",
  "key5": "4kMNr7zcqfmLGZuX8jN21ZQHSXJtTSax4612JQPRngcAUb5fZ4ZPG8Ba7eJcsaGtiUYYxWdrKL5hRgErHU55DPLr",
  "key6": "5C4z2x5aYUxxKAvUdKt5y3yNNTRriTNScPzfSo2WNHpuE2xL1mrhCV6JfytLUGtBiVauW4ayKx2BzQRRtYPMWBci",
  "key7": "3HBYYbyu8ZAKm9tDMhyovpNgsU7UWJSFtdKdMriMCa9YRDe1Vy9yXSPRSmaCaTesTgSQp5AMC3TPAbhAraR2aNAo",
  "key8": "45eQkw74vVfSRL9DMKBYQjjq7vZLCz5E6LdDEwd5pH54TRfFrTbTSsWv86oar7oPebwn8M62E5LghzYycsStQYym",
  "key9": "4DdD5uKoRdc8ifyuCDeAmuGbaTc6pX24ShuSH1hxTGtevDjpuYMCnvJ8qLQnWL8Lhoc75k6xkYsxjACGGC4VqKqf",
  "key10": "2w1LgcG2hhA4ESDPpimZbD2vs11wzwPHnaBmB4U8ZoajNcpdEoEwHaAGgHhAvRiKn1xwLxUxgiyrmxuF9yw9ZL3q",
  "key11": "5s4EMGyVveGC3anPEn8492xyaDJQv2oveEXjwvSF9L7bLNcB7WqEeFDUxxJiQzTQm68cGi7kYuCYiT4Hyqti3n8Q",
  "key12": "5PpKovVtFeGJoAw8TUA33JxvNSUp3GMixY7BV4zHbBAyTY2Pg1iAtTAbtR8pVruUzu6LWDagBnRBSyowLRwECuNS",
  "key13": "3sJUqe9ECXk4UiCseLrsacuNCy1T4J4chigKHYaCfGwa6Xsyh7dnZFdYaxgJFUE9PbnBsXTE8BTSrh43eS2ysMT1",
  "key14": "5ExcbCjDfyGLH2hKD1dxrUQz2cz8qsRWPtEgCkRgVg28ep1Yk7LLMAfmQeyfXqF1LxW2q4vundZC6yuraENmEoXi",
  "key15": "3N7i9JxrGJcJawyNLJ5yX57y4Nc7Sr5DD9qTTtXZ7WbcCXWSUq2FnwCNCAcF45GobAaxRsNq8X73fbRQzczpPMiR",
  "key16": "45nyCCktk5U8tTL5q6dxGPw17dRuDL6tKfatLM1twj73UcjvLKobVYo4tG7wqoq1PyRAbxMTgvkRvEkw7Hrqa74E",
  "key17": "4MxBfYNSFntpNHhZvrzcEuVfG1gxU13o5pv7cKqxUjTejEQgGnFraB7EbyV7eLhezbTgT7PTSii1JwMLRescFp3f",
  "key18": "3W3moh2xnrGC9vFsaPbVqfrCDpnRiFZYuev1Gz8xrCAbz4joY4Qmb3KR82D8cG6WYnhaL1tQLMeJFRc9dLnf85UX",
  "key19": "5MMx9WXwryEbRUUpH3k3x7wKk9dcLmiiNTzLq5TrgYZnmABVHRRw6iVnBEXPECkv2VLLgxXZkDyNUi7U8sci6v1k",
  "key20": "5uGzAPEQQz2x4X2ZhwHPqTM4SzzDEGngQNkZFqLvJiRYfQZ5MjVM5K8xnJDdaGRZS38W7VrFhtwkvD6C57AMttro",
  "key21": "m5MDXtPAutqovvnafifUZE82RbYk8btPoE6S2EtjwasEDwcEKt7Pc1id2xL6EW4BAGsttMQZYUwy3bk4tm9CnrF",
  "key22": "5BRHs77Fgf15N2CUW33j5nLe74Fwmsk7xoBhkG96jtyhuzLp2wCatSs8W6HvheLRtsvkLFnFN2RfZ2e9BdAdBoRR",
  "key23": "2MF1eTM2GMkdxiwoowqnpW5RquWmUhwQQKf82iBGuk6wjStaxuEkAB3AWL3YpnrxHLubrGFNs5byvZBKGUvKsLxX",
  "key24": "2nxP2TwKG7yz7oUTwkXLxoYbQRVKvqfNiPhEZZHZ8ff2uFiePjSBanUigK1BrSb3YpHAGHqU3zzdWFfV73SPiCqL",
  "key25": "2fG3a3CzaWzYhPRo4MsiYWW1FrgwfnRXyFnaQdc7YrJZW3mbGxhjgrxHVGh9oUTirPidkLoj7NywheHCzVPSyRsY",
  "key26": "5ny2yyccUjVg78CfgS7dQzxur7cQi7gVt6Neov67kbEm8XobfT3CZohP9fv5maM5b2osDssKUi8rytPo4k8trjSZ",
  "key27": "PwhsED8BeTaPxCKtibHfa8GFNZDeymeCzfnZ958wW4JRKCxpVWZ3juHtJzcKFhjexCK13sDDQQp2783qcJKYehv",
  "key28": "2Gw7ixkjn5cBmqofTTyZy5imDYfRJfFYWJDgtQ4Xtc3AA2zhz64RuRGumSjutRyC783EPJNxftiFMMX3dd25EhC6"
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
