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
    "3PeZMn2jP4wSBeR3NEwyusZN1ohPFyymBHYnUwVyaFoqpJuzmCXggrf7ijgLRteBYp2oncQ44ZXRS9Wagu27o3F3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sNB8PnbhJJDHVCn2Ug28mByN5NQC2neMfut2Z2hSKUHqsqsp43VmX2TGEFTXBXMBjNadq19aLFoc2h7XGuDfNe",
  "key1": "58r6o6vCTx9YQSv6FP58KM3BAy96h3vAyJ3wu63A5cwyaX5Y7oSvmxbsaGWYEqCMgehr6CZ2KGB4D8KtGv6BFGMc",
  "key2": "2gmwhLP7vx72nPdbqjcsNhuArjUFbSk38aSPcDkBULLCgs2en47KgmUinoxqm9V5qJm6X8P2hW3qETCddeqtGM1a",
  "key3": "53zJjBagTKTeenjTDQCaGSRwDFaESBzRCaByELWUPrDDkR86wsf5eEevckoTzkxfEDf2kyAPaB1GfPiFTSBcRi21",
  "key4": "5TWup9a7oryu4wiJFXcvRSkhtDacwGfytyNhaCptRafSRZGCtNeSJrWCdgaFEHBH6TstSKu6SsUdMYZgdVoWDBF9",
  "key5": "2mHd4FVYmYzCNwgGWh98BSCnyRywkXzPxCk5WgoKZ1L4LNFofgLQJ8LUKJqLNmF4pejrp9USQQvMiwqpZ6ynsgLu",
  "key6": "24mWSzwRbJ2TvAmK1LB5wmsS2NKWVfmUAN1putXExZyWxPCK9FHjLge9LEvqzU46Urgux9gspuqKBfpwKBd8GjQu",
  "key7": "4tEDYBdYZuNbeiFxicGZfXditGR1aneaWye3RDSr5mjxJKDJZfbKk6XrPeyuvzoXavt9j8rtcdQpGjkut7AQbuGQ",
  "key8": "4m22LXUdQCEHfGXG8Ja9WiEFxsezMDDbtQWXwG7XXbET6a5sL1aBBa7AUy7UMqn2d4uV6F5f4cfemvWMgiGfqJKW",
  "key9": "EtTsMigWJhizbEkHzb4cQDL7nA1j6gPMVPPXQbV7qKUAFNrjJDtzniHYm8A7BjCMbtmuw9t19Y9Voiyqs5Dbh8C",
  "key10": "ZAYgdufdTFkr2vAQzSVmxyRDF8S5yKbKsS7N3DSK8ekeYBg58TkrdYVjMVe9JvanAfRjEK8D85tZsqBjBSvTxHn",
  "key11": "w3hULryP2ricRCCHtyMfFarwCfrQWp3BU17Rb8w1dDneJq8zgRsY3bALypmpni2fQeAkxZuTQrdoJerStQDfeMB",
  "key12": "4ZvSoYYaoiEo2nHtjE1Tk7avRFtzA2cVDhVP2ZG9XJELHhRtM3Kgup7WZCwNQdfa64uHJJ1128qvi7JcBDWeype2",
  "key13": "Fz4EM3qvhnn9KZmdEWcXd1GzqMEXW9n8DJ3zxcixnaNL79YUd4YENR5fTeekj8Nh73QpddBUGSnLt9dq7s6e5Ft",
  "key14": "5BJcLE4RuqsNyhZk9Njcrb1zuMnbzTwNYSHsMuHvcznyQBB6ojrYcFCNpMj64BbrSCz4LgJoTsFKqvFwZLaFMhdH",
  "key15": "2aaPmS1L5BeKKz61ZJr4MPXwGc2CJhNGqsjs26CVt8ekijCXSbzA5HbfDyBbmZKM5VXN6mWWrpSoXeDVr3TWvDQU",
  "key16": "4fMJcEN7Md4PweKvjTqV5ZmcPnvzZnH33ZG88rMXWMRbZHQk8FWXosrbnqQopg7tsfGp9392PQSTAix7HrW4C7Bk",
  "key17": "4ZTTxM7EWyz7TTz6SgePqRGy33i48HxVUzDS7EmozrA6AYcBBCXjDghGfQpnBMdduiJygeGGMHH1ztvNmbgu8WCf",
  "key18": "3ngQi1ZnsJapuHUofBB3hiVfQ22nU2WdVdweDyny4PoWtKmf8cwHGnRmEvEUEFg3ioX6cYHt4gY4oUVyaowzpvnC",
  "key19": "3YaHaQ4tzFFFd1t7EDeWcaqHtTErEbLeznamqVTY4ANVdCMW6agHdgw3aEAePvRnFHnBVbdWfiSXJQaeJckWwVVc",
  "key20": "4XQojABREESWyzgJPxyFDDMYqPdQks3gyvbygYjZYLuRfg25AdQyRfAQuDj9XeJDq61nDWjRYxnqsjSGB6ZmgcBt",
  "key21": "2yai9qoX63mwi5voYFuiyndJTzJGMbYh73GwweB5deZXEmMZoQa31qGymLr2RRMBBcBJcAgqpft5SzCAqNPnXRMU",
  "key22": "54kX2f1RhcK74rUtUiENpFSAkgrx8tbdyYfttMXadZzGBrSgewKwWaFMAhG8LgEFC7oKWzM73wh7QRGwS4Y4GgKC",
  "key23": "2YF2fPMYGwxHuxdGAEzqLucSJy4r3EEB8EyMrxVmzF7vteWb59LeyEh8BH5DiwcutiHo3NYMv4MDx4LLiuvMg4Sm",
  "key24": "5Z1Ex4TBgST9f1VTHVBv57Z5kcXtCvFmz7c53xy1dWY896aVm51PPYXZtknyyT6sNLj9GrFqNrS1bsU5aY6qti9g",
  "key25": "3Whk4R4gMDg3t46pwAiLFj9Yv76rAskgyHoshWA7VNAKELLfV89ZYU1McYBK4K8fj9iT1dzT5DLsQ7mUL52hjQB7",
  "key26": "qXUPgu6wj2qrBDJWGkc62sisgfejAHRzL5jN4GURwbnyUEbFenBEXXsMFk9y1wsbQeJ3cyP4i8ihNbUNvyPkPbi",
  "key27": "5LM2VfwowrRbJSgkCoGXCyVzFCNL85oroN2oewa75PeBSeVk4qy87yKi3F49gThLy6bTuSTH2g9SRjH636xF1dMA",
  "key28": "2UsqDCjYKtacB3vAoEg8jfqVsc3WfDxz1Er1z9xDbmyR9AJ14hbh7h5bX8sfTjhNRoFc1shFxPv8CDv2xxZGHCNP",
  "key29": "3fu3Gge1EUw2yEoK7da7ZzCKXKexWT2AK56JnELyvXXzQFEoWTm5yiMyqoCwZnZXPB1xCFFEvqstp63YWXQTjT5o",
  "key30": "2pgoGG7tz6fdMJf9ADnECE83N4j5en266m3YLeWvfmkghC9Yzag9qnRvTTPxGzoVoB2XwJJawctiCwCS1PABrWns",
  "key31": "2M3Uh4X5R9u3Q9TcvWC4xmudxyNBnfVvmoBesEoWcSfbVDGUyGQKCYfCZiVsLQnbYeJpNhAWcwFeyq7BjrdFKUkT",
  "key32": "47eCNpX48zkKbWPFev1PtY557kXkbHC73K8FnAVgEBr7uRVQhTofjR4Uj3Zf8DZJi7XjQYdvhcUqLHr7wmt9sstS",
  "key33": "4sAaMDMyGwPE3FUkx1AjcoMyRLCbWJYsGi3fXd5LviBqDpZgmRxHScH4NWcxqpyLhg4DCThbj4fzECteYj97VjG5",
  "key34": "4nZ5ivcnvvwqW8Dn6VTfKEKz5isz8Q6BH4YtYTWdrVgpPvhdWCo9J1VLk12VeMuKQs2qNoRbwognnajcDDW4ts9d",
  "key35": "4x64jb8qEpd4PiPbejNPg8EknQipnHbBHYi4eay34mJmHLoJFo1JDHfXfXoJxNWtgzC3c4iz2AqL9wzThR1MAZb3",
  "key36": "5ZRtFC917hXwxEVLPb1WxPvmGWjbg6EmU6h2KiiD1zierHq8xjZJjFccGhmbvh69XjSd9f1UN5iB1nATgtB1foCe",
  "key37": "62kdPcM7483u39Qx68a53ZKrFVefgJHVmHzSjhzBoRLsHvWvnc8A9uWpxVXWAQJ1kCFeDBmg6TmCxrFDSRo8f94y",
  "key38": "38R26CniEUTgYhd7FkyRVKYmg1nSV7cg7ANexJpA5Ei63ZGsCeZCtpHjFKGaUN3Z8dUjiMa7ScKdCG7SCjzAdQ9Q",
  "key39": "3foerEUxW5MLaJhr8wmersLpmdqnAin3dKsdRC8BPFQzA1hZtZxveV9Rrs8mX1Ccw5Y4oMs7uX2p531Tc5b7jm5P",
  "key40": "47wUt3XC146aoaStgwMbjPHq1Fwf3xqhoius1EjL47nwUGztXqR7NoosePqHQH3BhX5xnQ2Da1Gz2VosDTK9JzXS",
  "key41": "3PS5Jhxdgn6TChAKGjoDDTjDX8991BkxUUeEL2SwZNhXvARnqYXD2vxFLCoibVWwNF7zttxR9MqWFE6KcXkKtAZV",
  "key42": "2d6LKdoiaBj9uETDJvKmzTduUkwC3skSrEBMc524iVX1g8Yy2VFFtkYb8bRqofm1CQgJXYXhKTMgGA9ycBRxw3jX",
  "key43": "4Z3iUCeaiYoaFcKjeHRYxk8R4qNhCGcLCTmnHbAkcPXSiAiH1YCgWk6US9vB1qGmbH1CfzDcF77Fbt7ahRhmcTHq",
  "key44": "22NnUUtisjSqMNhXN3ih55SnaRTDWGNf6CWayxNw4wvrcLRAhUUkJKifg9RsZ3kFDFmyZR5DJRn5p66LnxsATExf",
  "key45": "rD7JsB9sMavWDy4p2iFyTaDsFRivy84QSgmNs6XYQstdCkYrfkj1BFbyHgVd1AAUKTEsE24van6e9wE1iVWxWd4",
  "key46": "5ggiSVpmSnsijvSY3tN3vDZZeiYAhNhPQJKM3J8n3eW61AEfZLJs5wbSNrce5mKdNk5Jq1meZtMJ7sqqh4tAFbhN",
  "key47": "N2JHuupJF5N26fncZg4uwa9iA9ywAzS4g51Rka2rs72B6hwU17WDE229iZgZ4EkLgk5m6YiAmcPEsV5AkripG2R"
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
