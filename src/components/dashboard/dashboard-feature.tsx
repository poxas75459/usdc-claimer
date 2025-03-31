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
    "3r2ZbPHbjEApMJ7R9qCU6TiUQ7JyYR1R4p4GmA1CKb3sBi2cBzFseAVANRc9p8xqwFpyUAMkcxhEyEtvK3atBt3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZE3y7dizym9VhGtdRTStRAXPsPN5Fsvms1NaiPbT5J2KpfXagrWnMzzapiewar17exe33Sf3sdBmAFGniSYkrhy",
  "key1": "4wsjoJ6FVBnC1Ki7TBN9cK2Vnn7m41BofGWoZoTxoYH4kZUF1UcYo5mirYJ3WiDLHb1H5A6oWMDp71NLfQgyCZ6b",
  "key2": "2ycMk6tXq5U8od583fVXbHYgzrFNRcxteNSiyUrWpE8B6Vzbj8FHFu884mt21R9Egho97J61GDQkDVSE7Cce6911",
  "key3": "67horgMDFBmXp4kMnEMshBWU1xgEk7WMcJWAR2a4tp2iG83ep3mnQsgsfg3kjNmCmGK9Rb3ngrZS5KLNhCCjnDGW",
  "key4": "4XfXaqwAkhZGLEDp6uYRhDCkgKRbK4LXGrbKmMZ6NFsKidXNpsSc2z8PrBcRXxMEuaSxPbgo1scW6GBryaQEjemA",
  "key5": "44KzPqqFj16YDnJCeXo5J3Zf4sJuYwPJniaX76RoXdNBJpPbBVvA5rkoashuwxQS2EvYfkQhJ7djYUuu5cQgZ6wk",
  "key6": "3RzomUiPXvtEnNV6vt8sVy3e3oSM7GcsJzNY4nft3AHg3Pi5RcnF9qNbNs5qmHEf3d36xuk8dy2mZUEQcqkhFAvC",
  "key7": "4zAav8VoGeKiMiK4oUYmMUJX4UtDuu8d8MXbn6hRF4T1MrKpt9zrSeiqCNZJU26zMm9KZukUe1mCDNJAEz7tZjxJ",
  "key8": "43VHeAy7XTt8FTtRYN9ezLStR3nPRC21piC6eXK2ykKQWJpMnVABKHTLUeRWsfooV9D3NBADEzBmi2APJA92TceV",
  "key9": "bPfEfMa1fBeJ3xKfQH3eW114Xnx2Ew7Ya1VkEezZmeQksFo4inX8ainxZ7VSbSSp1CVhfqLS1D8dMyMbqySqrJL",
  "key10": "hX3PEPxKGcGrhYJfRCtW9dFG16JKNqnR2qhnmorFXoXAMifSgLoU6G4z7Wa4T8JPAqZUsB4t3rASq7V8eTSczFF",
  "key11": "4VvXdLKSuyFyME1nsJ3kx5zyrMWSQdiMxEbrLQ9Qe3W9eR2riiwmxxUV11sYzFAW1aMyxnnj4bck7M6DvRKwZ9o",
  "key12": "3FcKR8Lk83FaBTxUbCmh7Gvg49WRiLW8N5orMqiy1FBmN8dBiCvXLKvTmCvoKM7ZTYdyzmThinoAwK3dhixZZJNT",
  "key13": "5ZoknNwv73HWX2sxgQrfLihjRxeLbqnDC2HAXULf96JhfAy56ktdY9krkXPUhL71dvxx9BhUnbdtVHsfgWD3daRj",
  "key14": "5QahxXLL79KkiVHDNm1hj88F2cS8D9FMhQFJwFVusSm2m9anBHXEWzgqeWUyN5GwMr17fc9CwL7nn1khCp8kzom9",
  "key15": "2u1Vu6CzAAy9kLqVwnXTWnyPpH1tgfBxF35vudnvNhVMBbqrSYz1StXKtEc4DTaYrnD8fMEX1L3n8MLAxWcDLSGd",
  "key16": "5SJeqwJRPG9GWiDw9h9ZsffcD7W2E8ofDATed2NgbHsBDppJ6wkT6tMi7eLdfEkDHnCoMXZXRRkkeegbVTZ4h4Ww",
  "key17": "4rq36PLQ8nSU9P8cwgtyWPScHzcF67gRg2fEVXyovHPeqF64Z7Cy1Xu3a6dPtpcBfmppoThjVp2zqk2A1uvVBWFC",
  "key18": "bq16Vug1Nm7xB3MWZfUXLFLmnKuV6yRxeYvyQtmDdcnM1QTaW1q1iTXSFRT6r4NPBtTBUPkggB1y9TbJs4mKABN",
  "key19": "oZehWkn4vni7iaYRCFRhSAWfebXx7MP7SYBS6mZpEKL1SY4U6gTuHdmBQtFQGknYeBUqLKHnfVy9DynCkuditrz",
  "key20": "5T85uJk8Rk7EiSm35Ggb2cr4hzpgus1DzdaxDBeNGu1CYjwTvXCETMCtVb85UizRTrnbiTUxbbD2B7PJNGK6ZTS1",
  "key21": "2mMWcwySK4zf7w48ermt1KXG4Y5M4qPhDXymVaSCtPx5vBc1vyHrH19QeqrFXruJSDEVCXN6SXqqmdTh1sZg5yWs",
  "key22": "4J2FijxigSNPmgwacHSb3q5xna7LyABDvbU8NrSFcMYuRRtTZhUdSHexWizyA6PwaaCxqwj8sENwghBB2YnWGoVu",
  "key23": "XgyDmXtP9yRW7HAHPCauFATfa1DpszT7auc3otvuawJyaaxyfDW73NqnDDvCvTiysyHotbifUtCjNhG6abt6uFz",
  "key24": "uwZ47tpxyfyvSEghyZFoETqgHhVFE9agTzLk9eMKkTr8sDUXkjZoVcLjmjBcuy5zD6XJANMHb6fAVwC4H3WRFTw",
  "key25": "TX7gN53sh8YiUtqUw2eKUgMRxyxQdeYdTHQbwP3bAKXr58GhZAKAD74thKtMrQsMmhP6z5ekTXpt62qhVqamZF6",
  "key26": "3ywWoFqZfkUTYHbs4itNAhK5KNPN1abe8Q1XhUqEtidt652EL2Hys3Uqm9wvDgeC9hc2NGx3mEckAZtwykZXaTgh",
  "key27": "bL5D3dJDaSvwH9SktYxZWX2ZAaRvXmsfg7ys7a9cvqKjCfqgNT1ers8vbrwVXktgUqG8aS5LKkEhhJGhtQm1zk8",
  "key28": "2wrZ9S1a6eoZTity6sYfZk8fniCRgeY2QiSk3xTgzRRNhXn43MMUGUKz7qb9srZaiMWTWWZapmGgD9nwh9VLRAQD",
  "key29": "2nAyyuqNP4vY9PigSmkxzEuEndVm83Zokw88pGJcy1MR2wGfZ4z779Dqgs4md22Ewk1466Pg154JWFsMJC2jNLgV",
  "key30": "2onDFCLz8RJFuRnBF2dGePqNoULWcrk6RPTxo2kp3QwWDgoUAvi4GxTw7wxHUiFm3vxaRa1f5rRmC75Gsu8BFRJG",
  "key31": "2yxdEpeoZ9ur14Tp9ar5dycxyTQAANHUQBHp9NuxkArDxTtVGCi37vCnEUYxPXDb1cfTafN7HEubBPckhmus8npk",
  "key32": "567XmBL7BJ8he5nfpyTZ9YNhhr6qnJ3b9feyztxDoeNqrc6jAiZDQgwFfgk8erB7YnBtstTAZocezJufof3c243",
  "key33": "3QpXdmMhkq3iMhz9NdhUWCsaXbuWjGGoxbtD71LmxJtD4jDKiqcoVQAPAw3KWtiagfr2ZWXJTPEvk52WEfBgD6MS",
  "key34": "5weUmf5fjWuyuuQDjB6jdKKuVHVLedrHS4FJpg13zVUVH2phZwdpxqvknEQf9y43CYm7fjQ8LmmxH9jUySpGkZXU",
  "key35": "5gTa58LeHnKorhbtWc7RQjwTLpsPYwFa52oTMgSjRdjxDgkaLdmShDWHReQYkzcJHvVWS8EaxQT7RwiCy499APMT",
  "key36": "62ECc5TCmSjra3GrTnRsybnEKYhBPspyCbc7tQoiC5ZvzaDbAreh7ZMSpZwVy5CWBy9tY24FVoJpFinuqHWKDAms",
  "key37": "42rQoMGYYK5XErrFwnMmv4eFZZV1sCB2DDttzakoP79ryrxAHNDFsiW6ed4UF9tM6FzVHG5aA3TZvfiRjrxqBZsP",
  "key38": "3TkjyakLkDDU7Y2WaVfRsmDUrJ74YcVZRWzKkTTzJjCtEshZpWRRZzpVLjDmtG23X2VxXxPBPiER8jq1vxBRgLZQ",
  "key39": "u8DMajHkhUXLGw6FxhnqASFqyvuAqwHXCURaPknjKPUb52UdJctPT16qXMSULLD7EhkSpY95vM2LDf6zRYoGXbH",
  "key40": "5nbf9926FUV6ZtKaT3LTwCNQUf68czkpFwrXP4a15DeAGxUte6skjCkBosPzP4dPmYpHCWmnsQznGxpN3GBZNyAP",
  "key41": "5ARzjjWKjKmUWWxJwUeD7DgVDrs1Sv1xrSBGoAr3zjnXQJXagFjuw4ptTgJrLMKpN4LKYgQpaLu5hT42iRsf9TLy",
  "key42": "5MoirWpmYDSppLGY7UvqJzj6dKBgGkCGnuPgrWrRrXqpi4njA9CWUKoHvAiqBdRdJb8hJMQTFREe7T5YXPVodUw",
  "key43": "2FsUiBKC6CxHnbk46UqcGseD67gVonTLKbXk8kwuiyo2WBypCCg5938Ht9FpevHVv8p4orr93Q58XE3NHoG56t7s",
  "key44": "3vyEsJHhdmMZJ5QX6SDWrx9Gm7UC31zZ67AsF6hux498G3Z8DcNd1MPSGV2SHCqBeYkRubjZw3QCWmAgH257fZiE",
  "key45": "YEhEi6GNx6aRsdSSPjaNWxsLSRHsK2fx2q4sb7L5MWHb2aFSBaXfSUZcGHzJeTt99vH5YaTdb5b8YALcb3gv7sZ",
  "key46": "5qj1YhykqpNzAL1gsghdRbCEEcM6M9BUsPPaHwHuJB48m6UFe9ikFmLLkDFnT1mH7VFmfGE19CHTawQ9ZkSkZMKx",
  "key47": "2Z91v4riUYv8a2Xc4WUvTxy4q2QgPAkUhRXDz1xjVB8vB6Gs37M8qfNLG8CFwBBLujcpRrjGMyDLzBBXtkAh6a2y"
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
