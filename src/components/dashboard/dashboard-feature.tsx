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
    "2qCgzQHWFE1bHKTErCXjTtsRaUxBV5Ld8xnc4CYukkf4zr9N1o1Z6Z5dVmj5x5MQRddoAn8kd42YSUDKQEoNCYFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V5NQ5CEsWUsuREpTyJ8pduJAEuAP8eamscr1ActDg374R8GdCd1hc3RyB3obR9wmFUhyuCB3WkRy3KFoaMd6mCf",
  "key1": "byfu9mTNvkwCZzGwRCZscb3ybeLEH2j5BWkmQMGHwJSrQfAAW3crefnCh9joQiiYAgJEAqxUfRQDLFeuegnRXtq",
  "key2": "5EwNsuFJNyHv2X2EPCtPNoGg5WwpAiFFVrXLeRevRfgniTuR9id9DgjHzmsetxNPfv3aFaZDUh9gCp2fAjMrVLo2",
  "key3": "2zrG7SSr2yLrkNuiwzeGZn4dTvigiV8xpTfHNaZeF5GejXFywvokn2jcn5DPnmDy1ik9UHa1wBUUVsBkM1UqqpRu",
  "key4": "GBysgFoERt66Mjp5Brr9t5hCnzmKQDPEbStothzRvs6Y58qGxNW46P9oMPhs22YAQS3tdtV3XGtU2PieEKL5XdT",
  "key5": "5nQd4YN3sjzgYe97cYZrphj8uhAuxkhyG67yReH7ETk1Pm1pYVvxx5XCweGGTotPBBJQ57LT97XY9YLFvXg7YR1q",
  "key6": "37FGz6mB5mENwC7gfMFbSgDt62XSgijEqDqhkup1ViyLAvFNsv1c3UDVkpfjXQLRhGivLtX1yzWaEBzphVt4E67m",
  "key7": "cYoPsJwv3DQumBtmD3RQ9ZJw2VtHGUNg3PwVgSsWhhVEErsMFUhwSsZQ66mesgK1FbTgi3JDPcL2rTQDFRoCfm6",
  "key8": "3Hcwsfjd4PH8o5FGZVnU9w8rYskc2UFJNzYzxDzYdNGzkABRabpx3qgSmbksC1q3Ej6o13gg6xa8qfLSgFNvBiZv",
  "key9": "1RrLUYJTPJX2SCJR45SQreLZQBiLTchppF6m5mGc7gQYUhu2xx48335ekG1nRtz6ABYoVyBYMmsPWMgBogkKxPt",
  "key10": "2S3Aaa59JLwK2q1HKHB95HqzVc7iB3Hh7Vq5R1GDZaeLjuMzc9LHKeLUEpv3VYQXTGE785Aa9FSvUvoNbcryYr3D",
  "key11": "3WCYRQgZRx1PZJf7LQdQ4oAvQDiNG2i1f8MFt6Tet429o2An5p8GzURxqmAA4qAXvJvHCebGbJ3Gy7YPrDm97rE2",
  "key12": "3TjvFdXmf2T4do5TT6nDEdWMKygU4WWLFHf5AAJShohnqUTEL6QqfBgyj8Fjjb269B61AagpKy4YhJHhr1tuGmnt",
  "key13": "3PfWTW3W3BeFVGfuUd9U4YwrLLFd88rFGE5WPdSKast3Q3yUFaWiszEvLsWPfyxoa8QrcboyBHsnNnRH76Q11o93",
  "key14": "2Hp6Tcjdn1hM6tHg3YQBKAWf6qVMzPzBSm9q2o5CxjU2TJJEppCNNpTSFR74VujLvkhDCm2LMRQkPHP5NEgJzGx4",
  "key15": "3u56zcK5yabBzBda6BGrbS7LEfBHMCaqGQyc6xE1o1S1kNbNt8E2jVRVZkKhL9tueJYd4P8iX9KBtnxjDHCagBm9",
  "key16": "2LoWzhEVTGUKmRCQNHfoSEXMfMAYpJXYqJL1M2HQFj2iBjen84Vj133MDNrA9tyfKU8UpBqPuyAYu2BFRh2bjU6R",
  "key17": "5szVpwBBB9mMpiqbKhjJN7yWx95o2Dzdk13qmGivW2qwBQsErnQHNpu6bScbQM4V6pikwv4uicrtHGQ5wHvmw3ar",
  "key18": "3Puq2A54XuoLAJq8fM5iuidBgYwzmrynLf9Z8S2mX61QL9WcxWVhZEqpc99SWif5GGsTAGgHCUoWpoj7YAmPyiV9",
  "key19": "5vcuTyTdNgikGdgX4MtdqnJsc6PcyG4FQ1PQowjvHDPcNVuQbNCJ8FtTy5dvgPZXj1UAWdQTiC9cdC4rG4auGUwT",
  "key20": "3kcfB9Smi725sbwZpQCetxKHZA13ZU3hjX9DhSzQsFfG1RwEtujkSqfn8yrA9Tk14zH8v1G1cbkmKjkT7jqPXUov",
  "key21": "2dXGw8B9DrPW7ktsGGiARuCN2iNyGtc6tUTdJbMR3p8pRvBjcARpgEXtb5WRLiaCJ7jWHQzgy4nHu1QW2eKahQ6n",
  "key22": "2Amr5QDaXtJ8CSJg7zZgcuQDQmG4bmb8JTA7caA5ApjuvfZXrZkrb8PtMXiCU2taDED6jucuS3sdGoyj2iymN6L7",
  "key23": "5UVb7HRUgqjGFEeUihh86H17iwPHB6M6LCT1HNKeYuh3ejig71iQ1nxSxkd2PMWdmfSLjwXRfhNmop4ZKnzEqWNS",
  "key24": "42YsZqkr3ncXtAtrbEf2kTvQAu92WDGNwVDqYoztufEimHDn1gG1gPaDMeA3BjqdU6iuYRfchUEaHosBjUzpXyG9",
  "key25": "45FVZPndofKnrNu4RSHqtVUy6eorfRAyYutc184XRNYVoUb1GtB4AGXqJ5Yv8XE69UALe4BSCbyfaziucoiwHrKQ",
  "key26": "2gUWRt6BH6iR33YrCXpaH2mGSmvPvXAULUmsSXK1XB7RqGtSPWvGQxaTjvGgsGH3sF5g9ToM2cK4f8miyw7UwZtd",
  "key27": "xshHKU987erTD7jxF3WTVUmCR5GK5pC9WuWjERiqNfmpD8GkHh9WJ8h3FWxwf7sWrWc9JKBH5bBN6TEXDoKbVYc",
  "key28": "2R3EHPB8Fd2W4KkRWnBLpdW5rJJ71hdunZLcThSNzTfQRmwVdwGP1GS64ik5H94fve2csukzFkp3bdsXvWmeJNLJ",
  "key29": "2fLfpqKh2KVtB4pPskuLPLmD8ZfLUrJe1o3tTYWcc8naYZCvD5thr5rnW9JUzi1dRadJaPAG8k9yRbPRAniTtVz",
  "key30": "3K9R6KobskYn86R8Kg6BHcnEHCsEzGqwgi5Ski8HxC7ZhyYNQiFtf74AbxDg9opjnaDbP3YDHu6NWrajvYSRcqD6",
  "key31": "2MCPDwKpnbMFRvwdxVS6t1BEHnRNrRdVMZ3sLxmiA82XLqHBKvj4pGRVND2j8MKhgd52oWzmbXZhxZP9tLEsedCS",
  "key32": "64FvVh3sqDhrKQ1Jgnx2BG6Sq1v8ncEhA8EhiH5HAu6BFDqL3DMnSfwm9kLJdMi7pcm4Q193qpELMpEaP1uygDz9",
  "key33": "DcErJJLmNkXbaBYGhLkDRcu8dsFqXGXiNUTPA8xJ3Q4Wys7qg3BAEHNDZQa5Ein4vdmmRu8cGMuc1jZ8TmaQXx9",
  "key34": "2WebXTonkoZUitDGGmypjayC2VyYMNuHSJ1j7XtgNWRypr1hU1umigwT2RPk33G1AxQfaCybhWkEG7qDQPG224e8",
  "key35": "3LrF1qzgGSbpe8qX1x1FMsfWqfaeW2KVtADBx53ebSU1vjFK6vNGXGgfi2RUQU8udAtctARnrXixLMTjvk9gYMBH",
  "key36": "3DdBuBpCFRy5Es2PYE3FBeucrwy3c3ubEjnWBcxjTJR1MdesNFS2J7Z4okbqgmxHh7ExURe1bntCXL9uSTjD1x8k",
  "key37": "5yaQPWxwRR1nx3FuukdtZRD8o55LpyL8Czj1uwsHowNkHE9tr7ETh3p1EqUmJEM2HHu7moybtmz2uukEiSWyBGjP",
  "key38": "52NqJ78Zv1hRxykisTLsfGRBSR3JUAwtK7P7Ls9p7u19MvLYKyJsHhJMRdeF7gDEzDAeJ8e21igGEigmEaX2qpzm",
  "key39": "3NkBRqRaWULASJxDMfmSq2YJ3MqqQePT1Sv7WBEQUnWTevojFBtxNTf9TA8A3zBKony6u22M8c5zFKCWh7iifLy9",
  "key40": "P4bQ4pdKVjcSjuyvTc2ofPJpq8tp2rk65sALrGgJkQLS5sBb2qjZPNxXhrxyMv3cJbvGhCcPSh35Hwy3fArstEn",
  "key41": "261LNNuJRcpS1GbwXYnDD5YdW4ugHoA9pUrvS8oKFfM6QvAwU74Ec2RDKhHeaWnSsurvxSqVt5aMs8TSq7gvYtNr",
  "key42": "2teP75WeGxnpD67AuzTQHqPGqgp7biUD49gThx1mSaxmRDrbZ2sAWY9RfmZz5KmHEzCnbi83E8hUB6w6mJcnJde8",
  "key43": "4YM2UfNbhWWSQA4zsQm4inmvsNGyfva6PQEnwuB4NVysNk4jwpf15S9vWbT1gMS5JznkwQKFw22fv4G4KQtvp1f2",
  "key44": "2FPgiWhn3bEjSGP31Bq5MX1rvHJ4Nk2f8As8GEYVkEDnv4YMyBnQo4FvXA8imqLLttkgc3TXAr1toKYnqLxBaJQp",
  "key45": "5G7a59qfCUCyqhm6oThSyCAaNbMrP6cA3jmzhos5bZDYBKnaxwGiDYTYPhttra9rfp3kfRhH2rsvn25ByXRwaoZv",
  "key46": "4oj6BSm9w1y4Z6YDy1BFBVrWxxwd3NPvVnrfUsbZfSkQNDgshbmKxVyGYDkYyovzWsoUk5Z57P6AKQhuuHdqAzVX",
  "key47": "2WkxfdgLzqtp2QpzupYyAaskdF5w2964QNuiMSCcoknoW3jJ8ewWP6fBWi1nq8aYqPAiTH7vqPzLz55nBPQgycG6"
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
