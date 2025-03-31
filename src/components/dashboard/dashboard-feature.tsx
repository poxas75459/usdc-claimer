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
    "Hi7hx3UwWvGCMRGmYoNfNPjxwXexQQQA2CZHsuiucRXVEEGF4edaYqYhp1HgdrAs5Z4MJnUEKb46LTxbEeG8gGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rTLcCgakhosEUacofoebJdmdrkMJw4juXeai12BUesdztwb3JnWHQg53gWkG2zSemqKGAP3RQmAgevCiePGMWC3",
  "key1": "5fviEYCxQ2ANaNo8DojbuDkUA9TUWY5sUP1GQCESXcFfiZqKb8FBMGWRzi6ABc6znRHUsjZQbfktiKq98yGFSTf7",
  "key2": "26WqicMMFAPydZJRJ3TBMZM2idD1LmsfrVMCJnXgQyb8TrFXCPmtz2x7qVqD1SDCaAjFL1cLzoobG8AvBoxaUymP",
  "key3": "5VPwGtbxY5jT1LVbFVdT2V7BQxbZqTc1Rnwq5M4hUvC5RPpv6qeWqGGPB7tXvoKWzXXvtLZaJfw16DTeh8BWBGwG",
  "key4": "4WFoKGFWvMCQkbAXtRMksrtRrihEv2jQv3AhGLHWq2Gcwy1sDJyeniqai9uV2UJsLPGvVQjkTLvekE6xDg5b1kaC",
  "key5": "4bZyjtrrwUUNk3ybWBZ1wC36b6KEWxbZjYyqAQVzo4wXkZZvmohquJ7iKwzmKhAd9KeS5vYoXH75uhAmp9XaXyXs",
  "key6": "2Mnggwavicpko2rhwbdweP8TE1NvwyweS1UR1LeJDmCf8537xnS4DHcv219fBFj97uYRi26kSKckv9znfQLb68LL",
  "key7": "2PUZbb8cmF3n8nmd3rBVfF9nDSTupLw1a2abceFAikMKMKSZUL3ZpNiVudgV7VCnD9NcrqcQRQiingE2NVgz44pC",
  "key8": "kLPfEzRv5Hdi5hwDToqWSqJP5yr6LpEaH9rU9kcmSFLhDN4Sdz4RkdXUCEAdncnbVhqNiuj9h3c62vGpM81KDqc",
  "key9": "4JbNauKsHRokspKprybyLkPKqSSyJUYSg5ySLjUrg4KbUAKaueBr9Ke8eg74MQmXi9tzScD2SnhX1GdV5oKCWZbV",
  "key10": "2sS3uPiZXXr3mvT7gDbqbyAA71j5Lnvt9DeP3qyVnF8571zwyG7U2dGPCk9Arm3Bv8rvMgMSdW7Rdp7Fhk6vW1tZ",
  "key11": "4xQAVqVAuGCbE33zdVeTfdJ9DfmeUpJBMQFaaRxDL4G6JjCD9HompmrxnMywg664X8NcBLrP2SG4z6un6KkoCoCJ",
  "key12": "35fd6Xe14HHdXmh5VtQg3CqD8fpPCdDi1oUu6cyx51qzmNRw4uisSBrExLxmfqFdF32cfR7kV7wtHu2H5BmcqhVB",
  "key13": "3J7EhTU48THfYJ8Y7JUgDk6izVnJHwDE1Y3Qr7RXEDstNHhTaJJhUgQEhhhsTUEFedJYsntJEDndwAXEKL9WJXY1",
  "key14": "2eYX2LidbZWdnD5rKKbWDSsXos8FsRWEDHHj7KTzF6g1wUqVedmpoodGjCqTzKanh3bwNVU7LU8XSEhk3eNy3Vzt",
  "key15": "WAEArFhEfXviXsQvbbjCbQGQNoi2sJYYyb5N7ynPaYEUyR37Ncsvq1KDknvePcJEYw5ZhbXweSSp72RS2YvaH5y",
  "key16": "3jtrF35GYSinrKhebeMjekNNJvLihXfsbvktFfSzkXSKByJ7Gef3WFa13Bzd71g6Bi42uSwDnPhgcjEnGLkk3y9z",
  "key17": "5Nsu7hQAzbmuaN9t7oGTChHAjNaFxEqY6Uk8EPpLKmejC25zcWWRfXL1Kn5PSMTEds2tv2Bx6iZrR6wfPkWy2XHn",
  "key18": "FuQcs3vQrk7V2KZrywhY7wUzjW6DNbnn7Xu4ED5cGtrSTm4zbxenRKLBESBxAqkFszsgZtMpLVXG5hCd5hmLkB7",
  "key19": "2Hd8pdVhxCMg2N1rcARDAi9SMXrbwHwjazptZXR4oYd1ZfFi45CWUcvGF2rie6T4rqCZ8cD7hcinuewRmrWLbEsz",
  "key20": "48VigCT9gd3WMyFUmW2yb7Zguo8FBVMimqZkMvTgbKae1XSaPDQbArCRSsRsM4KvTfswtdX7CBbG9BwEodZqUXQ1",
  "key21": "2rHAGDqhwDXT7mQq36cWT9ui5uqCWfoupnpTMJcGVtsx5HNaF4gLC1j3mFgY8LsASDUnmYVA4t8LJTLtFJ2N2YEm",
  "key22": "5EPTT2tTJjZqDskCrDx97CPzK5ZoEE2HbmEQA649Prxgyq8XL2BR1pCUdcUibWSiNVkirZjLBUdhcUrBrcGz21BS",
  "key23": "5g8roJx65FBsYS9LEQvRoF8bZG1iCqPPFbeaNLArg4V8AWRwBJ4dvmFn9TcvUjNxpa9bE6EnArRrxCP1JBwdvZyi",
  "key24": "3LV8voueWeUYcjLwMw8SJEJSwAUMLTg4AwcWR5NBJK6HvjNLzkqn8YV6pwGicw1hGAcuQ1beTcj4kfghBMtdByGx",
  "key25": "5zogVT1cjEFKr1GbBK11RuAQTYe9zhY4e1bE2pVkhjNEtmaJ2mCF3FRykp7CNcRCtovu7pFHh9qBcxPmoGBXawRh",
  "key26": "DSrrDzRZZU3AuxS1BKmoxVftquGEikkkzWSwPytgZuud1nyWiJ3AtdfqFKdNss553VHN14TPDHx9HwjeudTw7Jo",
  "key27": "32vFqTEAF8RJTGheZEyZq2MVcQ59f92okCovk5fH1wWhRwfBz3oC2PAy6FmrbWFu33MXAmxdeyJdzqqxFwSn4W1p",
  "key28": "gHHTipPpnMgWd7TN9bwgCvgW6GcQPqzL1VUaaW68oracHofdYvv8fwxo5a2tSJSXSjHNwzxut4JS58jmx22mB6t",
  "key29": "5Zf9hx9wBhCRbECNsmkbSBqoBrxhkU7HEjwUiKbPZbejBbLdUVwURqMPyYrtxp2QyhQJL8QE6A6qWkxEBeEFBZhh",
  "key30": "5nFPpQ25ZkZPGJTA5TzrUvpimCrawzyWWZ3eWFi6LvQv6XApwstuJcThNdCQdVBZzqRyYHbij9spX1JkKcc4aZ4G",
  "key31": "5YNqugCk6JfdqajryuzumCG79Tky1bpAUqgW1v9qckrH9m9FprLSGS5QpviqaXrGY4vaDzt9BJCi2cjkPWM8rJhV",
  "key32": "2ci1LX1fJywdSKhRy9nLLGfCw2NZGXFwHafMBYSbEYqMnBorxxz3tSXjAiDUccD1xy6tE3a9DNHWDvQ153ZGR2vg",
  "key33": "2VMofRUWjzzWSrKW8YVaudaRDkhc9S5yZq5kGQrUKtew7ViWE6t2VykbQgjEQtPa7zEmKWhkg2R5dQnoxVpNyLM",
  "key34": "TGEK8rAgPSZHZSUdSJ7L9Sd6Q8xKQX7Xa7zHprW35nv1nv5DCP4v2cKxv62HEDG38nzcyKouqh9rEjezdYmdriA",
  "key35": "3awcFWTkwVKiMRYmn1L9KGpndPdQ6W14Ho2xF7WgFadnTowQmczGELTv17yoBu485xvTMpqUF892WFEwJW7jhUcL",
  "key36": "ffMNZYg9KXDEfPUNeRzP9YekkS2AuQvVPFzurpz1T23bXAQSh9em1G3cV6yVEhQSVwxdyMkdEjYyRpV67HdRxVG",
  "key37": "2jcLr4nEcp2FGwniZAFU6vhT8PjNpjhC3oqeQAezQD3oZq9nn5vVWQT6Movkcp6eXtjeJ6yj12TDGJBcaDXXeN4E",
  "key38": "3UP13tuWt8Tr5FCCqAB5oNWnM7xLMJJ2n9crSxijFG7mXn49DDsCKoBpP34b6rkAPwV9axaAuedH3z5uqE81o4X1",
  "key39": "269sUaGcv9CzVxP5mUnWqVajyiE6yopMqUmk2r1S6uYtzgXPs6uYApbLcsCsvXo67HxAb699H89XFh84RpQDxosN",
  "key40": "4gj3LTdVVTvrfwtuCnjC3xXCacNqpKJ3XpS15aN655i2fQ1CELXB5cmqeHMekn85JmVCyLhCLGQiRwj9XWiCkQ9e",
  "key41": "2xfZ9PJcMcazFMJU4hCWW48Msq4nt3R2hSY97anmtcX8LGPp9Fkus7oVrwu7aD8tfYriwaZD14yD5EXeDB6s96TG",
  "key42": "5oNV5YSJmM43H3T9axiUmBFt36WwBMpVR5XKRGuV4C9Fp9yCsQLhayrpfUuyP2ZxLwcXuXPSSyBNvRxKdAWA7MUW",
  "key43": "3A493Lpaqy3K82zWXqqkG6k3vmuA1ifUo72eYbrcPXog9J12xvirn4Ar1w6YEDcLG1uDu2KxoHspYc8wgq57JbLd",
  "key44": "4GKvWqVCQXLSx7W9wTSzoFCocB6oqwgjX1WrojjjD7Z5bRC4faChgQAx4Arc2ccqWWJQT9gad6Lq7fVBgkNcQvRe",
  "key45": "tq744hDBouWXKJuU7K1RXxCTfCQTZhNP3QwVJvN2cQCJbQdRkztejpR6HNfkjMvTmL8zQrP72YvpKNZob99dnhw",
  "key46": "21AZjPp2sfBpUeUQu5zuuaeGyp6FBYsjrcYJLFTGaMcPr9tzXizBqjsKph34Stg6ve4fz3UYHmXynygGz2GfZJLn"
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
