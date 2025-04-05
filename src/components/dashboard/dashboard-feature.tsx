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
    "437UbgfkYfNUGwYb1rxtm1NCe5pD22jPWq27CJjXEmzCZHRbP4xDyTxaMS13RzPX22Lv4d6JbivRon8BStsjBg4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44FgEifhh2jkPvKnZXsecVNLmfhMfBHAycJBZ8uwc4sWJnw5Wo9W4aKriJGeHpBHonwHitGAXzpBybgN35ym5WC5",
  "key1": "5eYfiz1Muq2phsuTCv6x24AUjFWRRaLLqsomjQ7BpDNFF36Xn1rRKo7fSoWeamLRNT8cApC2Hj3CGjYfx2HUshtA",
  "key2": "5VN2o1afSicFaA3QmXNvXmbC1LAUkKiZ22h5Nmkuta98bHjPbjfo9whXkbFKg1V1fq1e1wwp9u6i9Kn9rKbGGdf6",
  "key3": "4DQtibkr7qaZT4AenkMeuHnVXhBspmdgdzDBxNBZsrXp7W9LhEhEYbMJfibfnW6PZkP7Zok1Fc6mtCfVfcQRKfYx",
  "key4": "59LrFoy9vt2oMiEpA98ALfjVxu7QmVzx5rVNJu14CN3Rhpa4YtMec8ZW1T36NjnttaPXKPZHxp8rbe5RuPEVSXBw",
  "key5": "5Mu71Lunoepo1x4eN8TAEv7JQzivdKDsVDJmkTjZUjzb8ujdSsVBxhLY1ZehMpSHx9iUmTr6vVoKJejyAFJJXc5J",
  "key6": "3cMqPXdZAwFNezi1X7SoSw5jXWGfuRVYuBBtN6veAAWrUGBALECaoEC6VUFiYH4RdGxbHSYU4TNpnEpvjjpt4Tza",
  "key7": "3LG8hfkg9BZfAeZvsvjCPbJT9cc9Ho28C5mytNi9yfjCzQQSc45b7uzoBw2txWBscqeLsrrcHczJksvs9QTin2Ld",
  "key8": "3QJCAQFnUn1Sv1mDJcKhC5tQ1a3L6tjdTz95fe23uNt3NSDQ1fSnTAEHr4dcPo1gqjU1kUeHUUA5j7pZzVehvhcH",
  "key9": "2D545Pyg7gS7TsfvFhuCmKyVu8rcq3Sx1Jmksvuy1dHSWLr81qqxhqp6ADR4MtVwCC1SKLrzZBN6WhCUFdydSwe6",
  "key10": "3LuFE5eX8Hw36QTGm6cGVK5m8UkJkfEpWWG2XJjTvR2ZQsH863cWi74fEpGJEvs5RPnMU1sxYV6owfDLgprCakje",
  "key11": "RDFfhSKcDuGNYAqthBJSTZ3osktFz2HcKZsJoG3kyuP4njXjAfR9X8H2bpj1GwpUUdmznyLvJLwiEx1rUNHCbqg",
  "key12": "2hS2AbMoz8XfjhyuMGmSTMEsXJFogyiAHcbhiA6hvQ9LbiWc7xJ3ATVGChUqTF7r73UfxXJTSbspgqu3WzuQrn9T",
  "key13": "33BwutdrrBHQRNcqpiagEFZWvrTxL4he99pAmw9fE3nU8bne8hRDd3Z7Ut84DRRYDzw2pkaYVVK1izPppMCYMv3",
  "key14": "3Qc2dxvHQEd7vCVCj78cxi4MUnEwkMocGaxBkdCq14hacTMesDeNwptAGGoCzrE9g5h8RQAykrC7BJkZbyBRqkzL",
  "key15": "55xJpadYJhtJmb4ZNcnu184aroQi6ZjjjCYNh6rpqHBJBrcHeueDhj6fpD3i2koa48jGBtEcgCHg4ypbNJxB2rmS",
  "key16": "3djdo4Y5YXQMx4w7hWytwNegHpUSKMuWywgpVWUFj8V9XRz9PYkLXbCfb3kNZhUZicRfS9VxepsoJni8EWNFqgR",
  "key17": "4Kxpk4skskG4mXVDPhKmwUXhqdmULSTkfwvCrF4XmApN5MN5gbUZyHEJFyJADB3hpBKReiMtUmbZ9Vm5QxGKBoNz",
  "key18": "2wVJVMpY3Ns14ExCb4qPhH5J4Sjs4asqepjJU6zBrR4NjJJqseRpPFDhECERtme6K4ZFqZr6ySXAbSYfLZahnqGN",
  "key19": "5XSyc5hWp4Kc5hyUgNzB2nZXjcEfkvfvnyC3rt4Zsdgow7qG6ZTG54jaPcNzSveY9VKhPz6m9gtDVbWYekCKCRKV",
  "key20": "2zgqo9oF7gFm6nHGwY1zbb9t8YxvjQFwXbJTuecLf7pJR1bEp1f2GL4Za5Jj76PmxEs5m1kV85ny7yaSDauYqAY1",
  "key21": "B5xFUzAD7trroF1yqbCqDhNKreonCfKndNw7iBCoPuXyY2QeH9FhC9PGNWrfadB4ScVydvUtggo5EZFPTAHKGmP",
  "key22": "55AVrp1h7H7ycPpVrCgquaTD3TjeWogUiH5GYh72XCn94unsKdjttyUPFw24S5AFGfR3PWZaCxy22z67cA26RHWP",
  "key23": "598jRo2nrVf7A3xFSQ8pc5ZAmJ93rRFWCBwbEDQEyTKyYnAEBqwYCNgh9rTZ4fmx4UKCxGU2wqpFqL5zBHCJwutk",
  "key24": "45AKPoxeQTfx8rY88bU7VCCYS71hGLFjqWNWoHRSVZ8TGo5Pa6Bt4uq4wQGW6yVtZ2tj6bSnn441eDhdQmKCpov5",
  "key25": "hK6Zu1Qaeyv49wG5UN31MsKnAth6Q6nuNh7QXWLUnf95f6FmAyovnVoSZg1RknDo3PDQwsE7GBF68VbmKKre6fW",
  "key26": "32f68VTSEVWhYnaHvwRSQNjU83Zda58SQsYoFENk9Tiprmcg2f7YGAdimnh3ehDmPrcDb5u4Fy2S6bLFQikYB73m",
  "key27": "2PnWEL8aUVVr8ezoCrKLQMpRVzk8AC6XEHKsJoRjyUJwPuKCGAmX3oQTYdKzqtEyZ91GS6A4T6432GBB9wt3DkkR",
  "key28": "339ggndXAxkL8oswnibqo55F8qmCshnKNf1L27htoqFMpT8bB9HwpF64xtEgapnyAmPTi2Cr5U6Ng7Mxe46Nh5Pn",
  "key29": "22P7G3zo2EiS2QZqBg52TrVBQ2zXcnWFcsCzRPqq6ZWFqs9zr4fFQ2H9djHRbpTY8HCHFM3PEjppeyhtgiqFr6Xj",
  "key30": "6MWDBgzVbjt65bdLHZtsZmqwm71uCvEP5UVnUK6Rf7YTgNEdSzpvbe5kUF75dhdfaaAPH7C4MGkkAZwC5mZiHBU",
  "key31": "3JKh5y32Tua3FxiNi9iKwmj3XTvoV1h14sYxse7x5sKae9U1NbwX2Xoe4F7cEJm6DrkTDG5wXCEkafxbHeMd13Qz",
  "key32": "5s9ncAk7CCtsZK7GonS1XdRFZWT2Rv2LoBZYmbhmPAkmvCi1wHoZ4NnikidChBG6b4UvkuXKWQTgFujpPmWr1HTG",
  "key33": "2y5HF1mzomgPLA1kW68q6gWVfU4AW6ZimqC4xUm7s2PrhB2NJMt9Co2Xpb5zvUrrYguEZn5wGeS68Ukr4QzWKHEw",
  "key34": "3QYgBKRUi3VQgBWyBHr9UzZQoEfk9wEnbjtbRMLt6rkMHLN4itaFhAV6ipJujZQ4gpbZG2Kix1mmk2FuwvqBQYY5",
  "key35": "Ynni67Cfq1FmfnfU7bWSQ2Pz66VJZfCvaWUkpyMdVjReTyaKsLsd4aSEAabrcyCyq92Kqy6ahc374eipMSwzTVB",
  "key36": "h2NK2iHESE2DAHkUhUuayS9pfksAUeDmVnYueRgoDEcXczKh8DppTjY3CavXftkbFnuSwcyDiSPkJ5nqLKk8STe",
  "key37": "5gWehkGzBy6kseVpKGFhq7EiLLLVv3VhvT84WEMR4jb9nnAyc7pWn3QjZZhEfKCuVycN127H4QqGVXfguznFU1w9",
  "key38": "4mqdeS6BfJuv5Hzp4zmUCP3i1LA4i6bxxKvGa1SshQ7QJmVu1hWbRCL1mL3SkbL3SNDAaq42Q46AuFLEjsND3h2e",
  "key39": "5gQYYBJT7tazWaXChU4CL5tyrSaVJgrz9dc7xfQMb8yrDAaas81rqTooEp8tqXQCaTDxkifmBbpQcuGLraxATcby",
  "key40": "2ihvqXnAGuATDwSyW4bG8wwswUAhux7ZvvRp3i6ye8cmdtT7w2Mbu8kziTTSwMm9FbjXPKrFxVFCWjdxygKqfobr",
  "key41": "31fEuFA9ecF5JnRUTuY1JneVSGPgE4J2491BnRU3ijwxn5Jf5EemQPCirECRmXEBjzp3cZavPTdeDXYNKfcnfUCg",
  "key42": "CCiHXeaRZtycv52P94eBrW4JsDabWavbTRjzY3cCdR3YmhqvPbub83kSTT8cb2qopVexQeYzeT7NgdnXTYG5tDK",
  "key43": "2Qsp7BTUnyngw5RrRSnNoQAriG9iWEr8hRR5jgfB7sK57qPutUYWjHJY7fCwVotvaaTWaQxjBrSGWLLxftByD5hk",
  "key44": "3mrQBniBQ3yCbVVNXUzJkZmpYapRGstctjzyeyL4YM46uUKTwNQkMQpZtV3rUCAPUzHhmbzLooLmmA9nHZbmn5ri",
  "key45": "3ucv72VRbm6oUFSZ2rvKMZgAV9of7yHQABvjs8YTJVjXsLZbLMqRXhR3ybu7HVyY7SwGmBCZTBZvNvP5vDWxi3DF",
  "key46": "5xEXjXxvzedD6v449uya5LQeFSfSqbN9zb55YdGVWmab5bqqqbwUAPmV9skBbW6thdfmqTKUQzqWng5PirrBzZEm"
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
