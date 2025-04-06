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
    "Pj7Ct3J9jbC3igT4XwSe7W57yjkkicDhSzwpSbj4LTcJX4ymCcPnQ28MXkyPkkMjvAGjok6orYPwNz25sh73EhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c6QLwhwpG7MYHXELEe8JmaqN84q2Uvi1c3XPR6nzGB4YQFLqc5oaYgQ9hmGhZYefPriKVcEh2R43mwYVupeQi7a",
  "key1": "2eLP3tmL9EEAuVm28eu8UU3haQYQtnXAzhgMEwZM2rBfLp5mRpsRqiAEUFqrBgwtHVPasRrnYqdsCtqnKHCV145Y",
  "key2": "2o8Gzq882yyFobuDgLygBKToexsUG26bBwbBWgC6XK6ALkw4DiDXyBEJHEUtVNCJwRNCGmrMK1inYfbk4efc2FfM",
  "key3": "4D3NPH1E128JsRAg3A4vDdbzynGBg8t1DNjxveCa5FSBiVAfoDTvcLMuMrzZoeN5LwScdbjAACdHRTF5xS78a4yc",
  "key4": "4sAHCSPYs6rGRR61ZBYv9JP39VZ3giBzotDMTnFkkN52DSpx9X1rEXexnN28ypaUgv87e3cN8rWUqthVVFUtXNji",
  "key5": "2BWgtPNsijx4wtnf9ZemDbSmeQC5eNSmLs2eRePQTcUCVj1HMDuNuYvAPn1Rto7aipnj1t4Dw1ZctqvtEBecmkgb",
  "key6": "3cWmFEfGsr9RNhJmmdy2vq9Hzm78EXjWhjnb2fJtUNt5WMtaHDDg3MQqypeynNV8ZgZ2ezP8hG3yC7xoLUb5c4rn",
  "key7": "5QCQLthq3qjdbyox1pVJykZFd5sEoXzE1amWJF8H2JM3dmNP59sjY5YZf3LTUDJmFuzgyjhcJ4QWwW6Qbnm3U6gq",
  "key8": "nsZfhtwHUada5HDe14d9wT2SJeAGbVKAxq7v8bwMNjUjvFk3Rtb34dvjQPoCXAAcEJrET45XxwLUQcG4zdZCn69",
  "key9": "5rCMgASyyPxzjCN76uEfuLv5AvSvrPacCJGgyvTvUUN3BcnVwUb5BkXCVm3bFq3ijhAZVnKxp5tubmi4zF9byAqP",
  "key10": "YEq2JadR5Kju3pahM3yRH7y3mGarP5kzWMEnX3LqJ6iJfKqasKPDvu4KQdqAG7VezhJ8LrLikzLEMsxq9V3QD9a",
  "key11": "5ZzreffLRxZTCrZ5mSLGWXyxSz5TyZyqtYAuTm9KbGsM7vGbGd4sgTv5ix4ESUn1NEJWr6bMS3VwNkFwb8DtsKHo",
  "key12": "2YFgj787FNMD6KqCk4iF7WhAJxtbtZtcg6uLPN7cR5zthHP86GH7StzWuHQ5Hqb8YiunULZn6QLLN8fPzLL1uxZN",
  "key13": "1wD8VHxJq67tJofjZmcs4nQwHKBUWi5hXjjU1hc9hJRAzRgnPcyd6SbZd2vbZYDo4PqDErFqwtSHk6kr4nzWCCa",
  "key14": "4tFxXnc7BJhx4gQPe6zBegP8ujQAk4EUuaL1TwYDAytg4WCi3nxdEcJw6iueXXPEcnzsfX6qiQEQLdcMUMYbeRqj",
  "key15": "3XzKXadLpCM4b18Ya75rf2az2t1KAg9T4vAsEcSyPUsG1LRmQuhZKVVNvesH1SV74E3Jp6K7EJEn3pH7foiukHPW",
  "key16": "4RAdsVvYyxUpFAPXDPN1V9ZHZ3dTfX5AUmw1ycAwktzvRoCTw1XFmMZpFN1Lsf8JiP2SEhx8ugYiQWroKiWD2xWV",
  "key17": "FBt8TGeEUNQEefekCsax4yst6pyXkNocqvXTUR7dDbosivCJa1Vahr6EipPdAeApiEmNZuj5jJ6EfiSDrDaY2Mz",
  "key18": "3UEFea6aDYBndz61gbKwjy1Asi2KkZgBFzo3eqpiJPdGYEeqQcRT68EwPCXBL8QuuS8ci61Dy6d88tJAEapeYcW",
  "key19": "5ZacDZn9AmhVGiuop26BVRaobgygayxFQdnVxfkG9RXvC5x7fLQsVPK5ezbCUC39Pb4CWiSpr6jFXr9p3Fs8jCBv",
  "key20": "5ZwUjJBzswSJAAaojuRaWUvj1G1AcHmj7eDxUzw41nctaxHjG3uX58BkzXmMXCveQqjwoi35n2FKobQUfgLakvso",
  "key21": "2G49Cp7H7vTJUvqGe38mQHnf5zzGTwDBHVoKFJBASJKAUAopMPmcE9P8wb5pdu3q6oyzjUXTPvTNXjzpTjb4jfqc",
  "key22": "2y5bXvMv8g8SuTwg3tTbzsP9tGqSrPTVwXz3HfHdAsPYNTpHzwGjVxH6XuBEczPDfpJLjo9ZNMYh68kztcxpDpfs",
  "key23": "2L8LSfMauT43B51wHUFDkU6JWYkiDzgwg2yYsmvHGp97YcE5MB6ntQaYurb3dVCr8SuHMnGWzNmFqbJEz9GKogX1",
  "key24": "3gcki1MCWMiPVz6JxatxpsTYUPvFRgeitgAo2je6sSBjEBVjeoxpq85UdeTFgCZeDNBzAMNjUxzKKH5LzDsZHui9",
  "key25": "4hjKBdPWF9stmgrTeCdAFxXZ7GXwR7EzMM6fQuVT8fkDa79b9XEh81gX4U7Ao5r95iJ3MJeaA7HDrjYtpKNJiDyp",
  "key26": "5S6jUteq2XTwxcwMtyLy78R4G8teiVQvYzMLcmREurzuxknLXLkLVGeZmsXctLDABkQfo94WjuWEL6xJYEuXpZWE",
  "key27": "46WuaKkugRux2Bsu388KMFCKCphA9soXCFENCZSy3UPU9hJqRaN2gx28qUkDJZDuVndLhisypz1kqkTTVh1YPeEp",
  "key28": "4SHpSs9vFockHcRAXVSCG8BZmZJNtoSW74rQRKxodx7oTu6yoDE1y6PLsNy2mDYfEbQgX3vYxNFyKPS1AeneJnQ7",
  "key29": "3S1Ni7jhvRKYiagmP7ZDbt7yciVqWtzai2ZYJs4FZ7EbQQ2vFHmRFpi396GyLMUV6J45YfzNtwVQze8sNiTHb9T9",
  "key30": "21tFoUAw2rS1eFjvnkAYXywuXfp6SsDMV2GRxkCt78JbTJZV71FZUZRZwkMqrQ5nLs7mumZzPuNNPt8gvyKVoejs",
  "key31": "2SDFjjbGa8XHYWPZwmLjP3kdBpm4qDeSmVKhn7zguqf4RjcRmnEKH3k1WkvLv5ttcqbKJuHraQJjM6WLJiAtnVeL",
  "key32": "2UGnMc27m8A8wpCMAHYjg4qwu1nkdoZmT6GruWDCXWfPcrdWdYCRdG3dU3CUrE75ZtB3UuzPHP4KkVyX2TEbNVLi",
  "key33": "5CzFBeNrLLkwZfho7vgMiWoSVYcnwuLtWpqYeKBXmgdUnmbci38vKygGq8rg8EABBFknR9ajwRPrWH5swPj1jZ8K",
  "key34": "4kt1QHGXxVJFbQWCXFWtgGem4yurPaxhGmo4HZHc1YqZBkT3XU43hHjQU2s7igQ8QyBXcyBJV11HE9WLFCZi6KD1",
  "key35": "4TJUuw3wFyRkxppFqDkbvcD2zHL7kM6W9xotEXKGZ9ziFcWqx8fMv98soyEiz8d7XyuMk5JFikPTba5hJJVQ7xV6",
  "key36": "3ehNux4njZxHcce3odShenWUqBTp68iDqewL64ESTGopjW38oTuNwDuCiww8TXNisbWC5bmRcxrsk7FY6edjkAQ2",
  "key37": "h1nex5uXKS9t6dxwRt4oD7ctMe6y5CGEMkWuASd2tmXmcyAw8Cq7qkxN43dVGMmv14VubaQp4ZJ4qe8dj5wPdWN",
  "key38": "3NyekvFHFfJsSQvHifck93okRFvSXuB2dKb97X7sUywLHm1W6A7ofM4dGTXWGQTfo77tactWkLXMt3Dn44t9Tjmg",
  "key39": "468AyGuMgiXL5iXfhn9J13RKKeh24nwkVvFztZ4RfNvcSkaC3geegAahQeFsknDgwRpFNnUX5TmZ3z2rMwDtP4PY",
  "key40": "3Ue3u7EGvE3UZbkPE3BNN2LmzV6eP27ywN8SEmaxNkteqQfF9moerP2p3qYL7xPWhV4wMywp7v3cexzaDP6iwtJ1",
  "key41": "A9dsSeC4eJN1G1fBA9ajuneG7BVZNheHMAy586EBqVHvpBnb13Fjkrbzco5cPvHKsqENfkrfsrHmURTJ12oZ9hM",
  "key42": "3YAQSC7cMc6u5mqPa22pfTf4SemgSvD3zzL9dWSXFDaiy4eW2pDXj8uJjSAJp5SQCjupCjpWnv4pVxsQcP6Pn3pQ",
  "key43": "3fYrxMNXsYvcfgbHvbWWawfoG1op8WYkupQT65Qkn8cmPoEunjrDoMCi5nYFiHWebiTxi7dXK2e7NgZtoAVdJmjW",
  "key44": "2BQ9hCBovp3R1o59zhSspac2cxXNFMgXP9S5Z66cVsEGZtKiDr1eis5CkWQE3oPJqhk4MnFa8eJVJicfTJ69BB7p",
  "key45": "58wbHLrqExPaVGEL6m262rYHjakGBkaUoys7A3y1mU9meECWsibZ3DuHSCHrfmqCQBtZbTbAT2xoWfYZPcVb1TpW",
  "key46": "2ZHtR3iQF4D1EvnC1769mVX7jhrUaKN3isxydhzyvNvF2ofEN665dD3pAXLiv1YQSXvkPm2HLgsTYJcZuBU3DjNV",
  "key47": "55nz95s6JFH6gpk5tJNLB9bsZZrALmH5MfS7s5fppcpTP6EYis7QnsuQCWGgDdnTsNeTLw2ivbKt4yfy2vWgr2DB",
  "key48": "4f9cwonUQK5so8fv3CwPA9GzJ14bQSQ1Lj1Xpn7LbDbcpKNngWtHFmZYYiAho4ni7G3Y17cVHahQ4hhmJnYeoU6t",
  "key49": "5XryMmdXenKp9LLMVjRDBKF76ZQP7w5KMv2MnqRbDDgy1PfgW3VPvXrSfm9zfKfycj8ACBGS2c7Je6KH2pZPXjp4"
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
