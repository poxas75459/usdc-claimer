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
    "2d8cvi3DSAmVTQbibMFmtXcTeW3Z38W7EbjFj9PJGMqrWx9Cafuyow2MnKgis3fUmuGnh4ap8bAwjgDGVwgNqVV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gU1JX2yQ1n69Z9Dn7Hi68joxQAtA83jFqk2Hy2wsgknvTYQNf2JfG5z6KkVxAoxhRjSLKDCfPJeY4V2CgC1zBZP",
  "key1": "2m3WQyMfgBqWzcNwhtH8XGAVmmNHApBrBBpprrj4QrQv5tAheb6Jdtqhxxa2ArcJ4Lk4dwqkPaAaVcG4VtgUi82b",
  "key2": "4vetSitc95oZzs7uNuBEDq6t6KGEW5UfBYvXzE1AMP7eNXt6egc56snYuh8moUvBhjZGzozVcKyAmGs8apNGpjdc",
  "key3": "M9bCjK674k8ib1HrNoyEwvrqjKminHcFT66Z1qorYqkcA9P98PTzpWMf9NVJYNCnnfCCtSrPRr1GN34x87MZHrB",
  "key4": "2PqcHFUpbiLptsj3qmD3WNVFubNjG61pquCQs1LQL7UqqWpLrC4bajBdZ19xMSt9yt3vmosrEMMNFgQa1vEHVNzG",
  "key5": "23h5m6ZrQSKmHiyvdwpAYqCh2Xdz5puxScWe9gWvHGHhh23mUrp4sgjQwRRuHJfM9biABCfy6f6rmxgjQgcy2jb5",
  "key6": "5Y5p8ZMVBUjFpSd6Lbro1KLwjG6tJuTfuGV64ufnwYexzWpQokGz3cco6Hg34WQ5QTmpnuwBxMW5PkZSuJuYibE3",
  "key7": "2cZdFfiDiNqvkJx8NemeqoPEbNMMT45n5bPqLapxvpM9tb4iQaxYAitqDzG7oxngtDg7oUnDHfkobeEzLumQRzjU",
  "key8": "2NqcvTSa2Q6DLFnNg28cMQZ2DBuPKqqFu5SGaWfwA4YvZRFg82v4QiBVdYZqQs9mZxUsScKSh3CptqZ85yJRM5uH",
  "key9": "2924JymBMdGkh6Ht86CBWVpxgjVhnnv3pVEU2SVsBYzYXn9B4vyksy1xpLcefcoqdM6CMjwMPHA24nR311Z2Kp4n",
  "key10": "2xkyU5enysPahHrtiqfsZhKpacqLwC1in6vmKX86dwLaqda2DH93nXBY3cbN3eiHAAmke1odjSm2GkBAR4pkgvpv",
  "key11": "4fc6o7KW3SK6p21AX7YyBEBUiL4kASMxpKcSMRf3a6D2JEayRB3wPygD4QPWPMZ73VMUD4xw2r6MaPz4k1JdCGji",
  "key12": "58TJBvFryjmJtu1az8HWZrPAa8iEgPPPQiuSfyW12haufxvefHYbz2nPZ7DfoV4sz9HS6QeE2gggrEzfaXYBhGDf",
  "key13": "24unpNYXDw4NujXW7tGScRa3sLPr7AoWT2QE1vF2XuUsd7xKiVBFjHR194LcjSAcwAKXDf2tooUJQDLSzF2m7ipj",
  "key14": "nEb1yFfRR1EpuGHLX9Hmf5fGvNGbqBw2ovpjQZ3tuhsW7va9etBsdnq8S3h5K8KPeFTmZr1aTcB2ERHV9ijDuDV",
  "key15": "4YvYVMCVqfTDt2R1wcbhAqe6c6wV3tQK1xoqNg9Kkgzexb9MkDX2NpC9rNu5pyxFNyRUq3LpKXNfSPso7jJGBujt",
  "key16": "5azp9QuZGUKTsbQmun1KTfU15NUXH9ZFxPzgCLYdThcBpiyQTuzdut59LfKBVCuzugU4KbNXmTjRaXTomBCZuNyV",
  "key17": "4wyhqr2uhcHjsowhowCHJrFQqBiMNk9UaeEX3hSsMejArnixJqNg4Eyi576jm8LGGCuo4nqwXU7T52Jdk6rXDskL",
  "key18": "597fSvuPfRywhPPtMuUvdYy7kRSimYLLwz7B4UVdFaUxC1MjYWKmMtTDiUGnvx7tBgEjVh8jNrJGEE758CQqctz7",
  "key19": "5TauNUSt5p2Gfxww7izrk2saMJnpuxdpzzjHAY1fbnd8zhQvTSEJq9miQSBqUQNmek9dVThjJ9ndh8iFpaqPwbyQ",
  "key20": "44bY2wYjEL5xWBsVRT28fX7YjwoqZPWjWfxwBkrxmPoSLFvU1HR9gBi7b1hpk8AvcPn3cXvZFLoDDSCbKVC8ZddM",
  "key21": "2x6EkYUC9qqkF5JHgAhrstoRp6ezmf2hC6ic1iQyyGpZhTTgT3BztAA81taanwFUvBeZ5aU3dhxf8AgMLVHvwYpk",
  "key22": "5dEiEUifdKYXU1ns1btJczfEyYg1C9C96E5WCBA5xhvhyoEaEozPaB65BSWNz8PaFvvM1pR6iirE2qZH7Zz5mYSA",
  "key23": "4NNzcrSTmfMer7VZanUxJrn4AGDJWxYTESAHaD3Y5bs14Mrr54JswkD7gDjD3RqGbJP93TGn3embVKcMiZjsmDt8",
  "key24": "2H1wqdrwyCsZxvKDENoG2cKoFBpbYxa38e1TRud3ZEJQGUBZvYafV2jN5mJbCyEPWzLBJyd1Ue8PvqyKYrPZQxcj",
  "key25": "3q1Qrye7624w5d2WFon25F5aivkKhr6qGNMaU9ucsZagK9rK9MPongGvKViwCA6YJc1cf2xWbqqs1i7czFmk5yjJ",
  "key26": "BycR7ysKWw5uSdmdzEDQUMKaryiPf1QFk2FNqXb6nDSyT43DMm9EeoGraY6iomjpeziMMocqZDbVVPC1Eam3LZ5",
  "key27": "26vjHZxc3VdYHit7ztKVZDrZo1PKWSogCw6teGagZdESmSTDYnDdFhvobVjPpVZXizLfqZn6Vx8LdUAhRFa9hHVv",
  "key28": "5fjEzvYfiV6baA2ZbLaZZ6r2wSKBApqjqwVRoBkHjv72kijSQL8hPwi6vRmz6mB8HTz6x5wrif57wgytjQrQTPnv",
  "key29": "4DULuqujBe6yC1FoGF3VTw1VqHws7CaeHUGiMb4BNqYdbQXH1BbMJUjDv5DJ4inkdDihSY9H6QR7w5jhnq8MkGnT",
  "key30": "59w58tG1fFAe3mLLs8bVeX4TuRqUPDE7NXec5uKGAhALCvTTC4P7c4CKCSm1xfi613eQKNg86Yzr8UfGJRJymx26",
  "key31": "3JmfxBgpHW85rmtJ7Dk7cj8gTXP11BkLyDomwh9P3d1YZzqDqx5v64HfRujMzdMJSciV6yzhuyx82nigB7E5xaaB",
  "key32": "5i8VSucc6oosg9M9UVWQHSCF3pq3RWfaw1UsWF7AQmvSz3RmbFypV5q9CnJBidDxGNBh8wHancec1tV6U7DoYFrc",
  "key33": "2ujGmrEemiPRpdC4dU4q5Bsu5cvCRtm7vuT1txzrcgWFMfMQszUG27fr4QnacYH1w4UfWjiYAsMpRZFBUoJF3FCD",
  "key34": "2F9oT6CvY7BXEwdg1h6DpG625DbgypcEFyuJPpzkd1m3a582ev1YmJRV24sgVRgWhC1czBNZmfWCZajrMPk6HnRS",
  "key35": "58EaxDxAXD8um4vuGbLkDPvzXhcju9UwcmtoZB12QbgykLsjx3MW82kVaZLi4mUWukHqbC9KeYTFGxtnV6Bs4zcv",
  "key36": "uDQvZAHdZcTFHsdMPcgw1DtGxv9XJ8g1HGAPMNokwpBTh7BEqTVymcrMeei1fsxsBqJg7oxmihs6pbwphTgJJMJ",
  "key37": "4LNYSgdSh5CuZqZnXwtTB5vbQm4sgPpR4YewSY2wUKZ5Yj4jVKVvdsKSAq7NhdYDaSJMkCY8CsbAhZCG36NJBv2y",
  "key38": "5xVjPL2WvSZjEqkqiHLKk2xtCFt3MqdGko3CvFdfnKQpo6ccLaPoerNZCS4aJw6G3fE8TkP7emTdStb9gGxyAmEx",
  "key39": "42ULJoy8sSFg7C1fW3MtUc1cGkTgRFHb7m5nVFNHRjp97waxNutSUJzpgigEhs3jSkaN8jtxcxgN1z4S8gTbnUzt",
  "key40": "Q2PYcYKADCsfioDx63WDkuArwEG2HtWXU7E5cpF8NSLgFT6cPZd6aUEhEAncvoTgfkywLkZpTM4KfSzV3a6K4SB",
  "key41": "5mH9BVJRjzeNFv5uke4cqQVCLk1ZTpZ6Wpt5p64Hamr6HqDFneJuTTfDCrPDc4kSvAvyUdR6HbfWZDsSmErspqJn",
  "key42": "41Sh7w9u5zfHrLUR5RE6LQd5RpNYWL5Cz7ozJEqqjxHNnRZF3XCxvQoNPv5WVvUpGRWs6KCDjNeDKeVsCaBvggw3",
  "key43": "4BTpED8ZxAxxoZ5sGukNW1rjGvPd6eq7QUeukS4DnXMES8z83RfdF8Z1VY94JdjWeQTJccMYWrETFMds8mYnRtx3",
  "key44": "4sPApD8GKxgW7vaEuvbBEjbzGZ1B7ePoqDhS95v8TMvK49Nc52Mgg5Ycuwai2m7NZoH7CerGu5xHRf7kL59SqS2F",
  "key45": "5syrs2eYjbhDkEssnbxpsiiLinB5AneH8di6GrE1hGFR7EgK8dXmArkXJ722XaCJ39NMzEVyGzxwkreEDJ8C9kgM",
  "key46": "DcArMrEbnEfnsLA8L1AjzukwQ4eqna1VB4323NAWXw312YezXaWGnigbH6k1uUu2VuGExmjPC2H1HKcDFKiF34A",
  "key47": "4ggvH3irayRcAhBAe2L4ugKWARkbLNA8NpU72vR2RHRUYeL4XNZ4hmTDT5iBFCbhDYhi4qh2mu8TH8pySNvNfUsP",
  "key48": "245U8HPQsesixWuTxUDWCMp3ukgiRbwhAxafzRjob6r9LFUnEo7jtWKTeA2cGgiwAgfdtVUDhxdN99Tf37EZqCFj"
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
