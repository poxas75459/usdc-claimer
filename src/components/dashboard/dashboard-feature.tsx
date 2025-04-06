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
    "5vr4m37BUTNrttxVcEk8UssZYbw2T5ChzRutuxaduoG1cqZJf3BTrxkUWfqgkpTcpMyjtzsGbuNPc5gEfGPJfRGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EysqiBSMiYYPEmzxEvPqpo8PqVfWGHLTZywfTDww2yaQaKAWEdyppRQnpJGnEqio1mETcSRCkj1nhngYGZyrvJ5",
  "key1": "5Vp2ti3rTcCvCThvDmPX3JjhjH8AgBVJRdMjh2a6rmRrZV4zaEsYY2BED8Vifs1T8soLoa4nvh75fnqZL5k6z9Fz",
  "key2": "5PaCF7N2wzczXPZznamA6KSARiBhLwqX1cBYn3uzdrSdQDirugqG4WrhKmFZR1mBLq3Mmt2f9Ro34rJYQDcjjt4m",
  "key3": "552iqVQL5UeYJ4Gs6jWmwCHCh6GuYqiQQdoR4A5crkcLHmoffbA2ynaLoXCX57776iXWd3GsCHPh3RjCuyQWJ6Wg",
  "key4": "2jjPRGW6g5CT7dhXNJi7Arphur2qhu15Fsm5gv2HwvHzdkN3g4cr5KvaAmex3fcLDjsRfDvjQkUirsu65sW5DJC4",
  "key5": "62sHideFYhyEKqVPTraabWJigWtZn5kxgdYEqmhzcybJ9FqM2SYizoRi7Yw5P4UAaw783u44hUoBeb5Jj38JZ9Hz",
  "key6": "5RpyWdtfD5vXzsktXWBLpJDRnFhCNW5Sfp2bLu6XNwM4hiTB54knXxeQWFCY1sU1qK9QxfXr59HDYm4ko2ut8ua4",
  "key7": "2oxuy7natcLnFLBGA6ZsD5JSPacH611mdX8mREfbUfivm3ExMuv47ieRb1XJYYLZrGg9scb9vjiZHKgFtwbT8VAA",
  "key8": "2voMXm3Yus7HqmLRieyT82n1G7AEx2Eza8JhbuQzc1UPmGTkgbvboGdx1U58xBoKGagw77gDXgz12Z38Dk2iykQk",
  "key9": "49KusEwGGufcesXScAgwGpSWu3naPAHr3o1iwyqeWkzJUM3kDFyjFTMfv6jpvy83gpxyVF5UckDMc6ydvthtPqBk",
  "key10": "5Mp6HFFCHmcYRU9kFRnJYQbbto23a2PmYmosasnqbSV2M1E7t4jxUtThCPBdhgocZpDdKwz6qcfW2AWRAnUt3zTL",
  "key11": "3Xwg3JENy8QBFMQovHYkGfFwxwqDqBxzkfPVZBNwjDfoSecqN5FKp2gFYRpmoBpBcw2NRqX6cV1XBdRNdFrX82tA",
  "key12": "5GE1k7TeoMChz6cQ2qeGHMV2tzauAmX96g8QcSmwwbEghUXc4y4m4qzfgVdgnzQJibWXKH5KuNXXSDGDeAHK2Wta",
  "key13": "2YHmvYrX3gFzBAk27j1DV78UBDK5uSXb9vcXHx5tgpw2VWhkZcXCiRa6ZZ5BHeQtwcmLtV8unwi8L9hAkMKh7qUi",
  "key14": "33EHnWSFCfYiPBM6aNfy8iGytVE19sNwpV199PuwNxUAJUoKLJLkA3fMyc3XQVjSL9PUh4i8xbsJpDeCLkJUonWX",
  "key15": "67PnKRXSX3nXz2H21o7qxhQMWbCrMLDL1i3DrqQnRMSrFyx3HRFESPXL5s7bTgQxHSb3Bp53w6xzdPC2gzidEREe",
  "key16": "4vK45UPD9rAzeL8R9CMQP896mN9BXn6REysEXB72BWUWDHQ6sphKiZ5kUKxeUXQ1MzMkouREKKgR26oEmuJHRbte",
  "key17": "26yULNVbNsuhvia6EX82WMLHZoQ8NqZozQtE6gk4Twu5hPeGRK7X1dT1rgFf22WSZEZ4CSmRwmLraZoGFjUfXDhK",
  "key18": "4145kL9sRf4DhZxSWNhtYV1imv3u6KFyENDjx6SNrt49kSpabHcSKaqutWkVLYpqBpYohNmcoCrQ7JH21xt6F4ot",
  "key19": "3SpjMMKRYHLX5tKJBFMEZ24s2FG9KUwRydXnaoZcdx8sTapgGc37Lb9ZmgwwzuYQ4YtYXtppj6SGhNi83rNUuyaP",
  "key20": "2USAut1HgwKjA4u2RVjGhUpQLefGfut1Ykmv2dMgaNCHRX2y8gs8Hika9jnchwX6kjK492j8A2JtXjbc4cjCsmV",
  "key21": "3eqTadLjwQue8DodAQDvyDfLwJKFVvBJoMjVvKnJANVqmjn2mk5tasU69AuLqehiPpRw6UhJ8HxPYH3eqSZFwuQU",
  "key22": "2MZLHC7rhRRtVq4GqdLKWjGoKowHXKgEhAviL9GA7keYMruLpETcDNNF2yCSMLubKAQWjeKVbBbAFWgD3tCNMapm",
  "key23": "243gQMSR3hyCkSANwSShfcZorf3gyLKeGKufMkhqy8L323NPjEAypSjTu3GRjrd7pRW3KKBaDNPTKuK8bdTdzfa2",
  "key24": "57SZwsr1FxYc4fTFM631vYn27FkxTiLrLiZunMhQiJkvDSFjKGyLm41PkHsWQqEZi6pCJxYy7UhCup3XCZDc47y8",
  "key25": "5cYPe9Ent4moJrHAKmdDU5GnyS95WjZkCwcjhTvJeycCb4mjpkC25cerFU5kVL9n5SgaNHaAhaJsKDwURSTHZCUa",
  "key26": "5y2FhJ1ndMERXTvByhS5uC6C3fi1jL2PRq7dRacFveRPgGTyci2CUJuCR71jh9JEzfqK8TyhymtFPGEa7FSM81XV",
  "key27": "59Ewi2yBvXLYMSdXGUaEvammWcz7bRwKCKLyT7ncbyvBDs8tLs2C6Ws2R5dyGqQeAiTKnHT6Tppj3XgvDRPZjpqE",
  "key28": "679na23CgT14NCwCNdJzUE16wjoHFiWKLv2UPkaZj4SE6yCrP87FQSzgJoiRcKdWV2NFEZH7ruuECEirbzRAzCtt",
  "key29": "3pBDkKUVPswMjnMRsYrxiARbojNJ1ffqBvBSKaUiwq6Sr3bw4eoXGReEnnUwojpwviefFrJczzUpEg1YvoKzxTqw",
  "key30": "5eghKuU8s79XYtQSDbj9aHYJ5ZcAKLM3AKQTEo5hBbj4aNAiKWJjgDrezuAhkxif2eribdxAhcyqrueUzGAWYtTY",
  "key31": "41rhh9iTsgJmjqqiTinQ4mCwnMzUViix6x3amgi7BmfPe169iX2dDT4gBBFJ67ePbJZrt8rUQNw44TzunXKXp8ve",
  "key32": "4xL6R4ATH3CgvvTaqhgQ3QEHFwQqHWas1C3hLVqS4eogxVJ51kGLtdY58dDGLhGav37ihfDiLhhDgC6TQra1hybf",
  "key33": "3CvWBEV13r8fwMC2AQkjVZ4g41PKWKPwrj5i5o7LmDGoNwYR9nuGCHHUyXathPCwnGXDdf1sGd6dNLCSKXrbdBCU",
  "key34": "45FJNVEzqrHFk2uQXAtC6e4QTnSs1mBXNK3UjT1arCZ9EJwmD9b2CSgMWsAM6KJKizLXXTVM5w8Kb1EGd1AbgMbF",
  "key35": "SdjZtEDEk8aHYgV6mX96F9WMLKtzodCCMqKqXir9JA9hCcvCZNDQzNxHk76gzJwW9W1hjp8Ydvnxe1YH2xT1dUd",
  "key36": "z9HQWvrTPx7xVzmEnctT1MGvcN5owDg1eKq3nyLmNEZqDapGrgwmx92736JKGV62bTZY3NcyRWjfi2Xbe6ND68q",
  "key37": "vFAwsGpEu9ecEy2qymRAK2dKf1FvZe9vbKntmw4HrvPB5Eq4d438gpgyAfKVLgWhkermy2TF3gSSmc4ShQDCNYX",
  "key38": "3fBnTiA73GzZXvpKdN2xZLAJqLbWCcdZzUAdpZCi64RzWBzdAwxeevPDXTTcRfre9kT7s4MFt9Rj7oJscZdbSUZo",
  "key39": "2npe5dMzobGwbxuCZ2ZThq5x2Ly4auCknKR6LDxhYksLs6ouHFsMpEkBfGyJVGvsLsu2ytvfohrcv7B3Vi6ua5KZ",
  "key40": "gYn7MPCncAP8QL5qg1HpGNtRkzStBZWq3im3zVGEgqtQN6purBegK8jr1BGpGxpWfidWRt9rACE5K2ZTukiHVkH",
  "key41": "eh43DDtnhzRywuUinEx5VHAQ1kbMpCJtSMB1qyDzjYwHsKmQZ4tmxPnPWySeAezdNpwjVX5mBBBM3nfk2CKn9n1",
  "key42": "4e1Q5RxevUhkXJJqQSmK3gF6DWyuYxuJRr9P9Lryerh8pPAyYVq87q5CF7xEtnDnqZoN1jhiyX5XoyZp67qY5qhC",
  "key43": "5e5j1zuU4gNXyq9YGrnLLyRKvJiNmKJUNXPrN2bpQGznheQrHixxEyKVf9U6bTueg5wsatdev4siopYdEQf4BDfo"
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
