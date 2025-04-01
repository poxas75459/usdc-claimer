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
    "2eVHPcciggdAStcaEnYoPfPvsQNGgtxW7r2jZNEfzsj3cKh2hF6DA6wMJBVz4bm8LZrmvsRTHssaLAhfHH9uHacE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UFLzJ85tzfo41fArjVdrf3LermXX7bqjhxJpszDEqxZAzr3RcL9MwVP6jWJd4hNzhsoDCSo5FjJqLFACyZxxMko",
  "key1": "6BmTF69amgiTcvDD1WZcuv4kNFQfPUB62TSy2ggjTRNJGrs4WZksxrxU1Xx2QWQBdA54cYc3pqETjFfeNrUsnMk",
  "key2": "4zREfxwapwytP8UNAqYMYpHBA62dNh6X9uSTrSj7rSuf1By8JEvV9s7Jwhq5Qcfa885VxBqQnEjKrQPh1fiYN7Cy",
  "key3": "jsXDWe4fFRSsAf2nryT1JKJNp6ZacXD2XywTNUVmqUjACkmETYCiWbc4BZ7cxiHhoA4YmfueA3AfT4ytqp4YM6V",
  "key4": "5zCs4AZw4x7PnAtk7MdgHgVZ8GEwM1ibHwETRDgavhsBRzZ396FAQmDe5tba9mbEsMhEF3VeUtjHwxKswhfzrUFE",
  "key5": "4SuQMu2628Vqov9wYCz4N7HZTx8xUSqpXD1jKAGwfBkaXjDLXVyRoiHdZyohXbL76air4e37HJbPkgnuyDicNp3t",
  "key6": "4ec2TEHXyAudrhYJPMdLMELYGRivkgSyt7TcMkMtJ8Y7rZEZiMP18V5fYhckedLbQnvu1N7QWk3PBhhd4L3MTGf5",
  "key7": "XNCFvDimMK9ReP7PJGCEtY5QToS5yQR64VMiUXFEDqxCMngRVm3xh3B1T2YKVDQ2L35Fgie8BS6ys4B4skzymfd",
  "key8": "YPXJat2af236BR9rJ86EKmFKTxwsgV9iTXWEVDVxczrARjikmttxj4Z3eebhG7ktcEy3HwwUQGaggDjzgVZjdfh",
  "key9": "2sWsmUtyZQtX6QpfWHGwDNbn2CsW9dTuCgMDii5SFjfhXAiTNZSp551bYWsnZR5Bi1QJhuh5ndZcz2X9e5aW2bhx",
  "key10": "7YPwkJeKjANNHmyGctdKg2Q4JSDthkzfxJ8J7TyHJwPtDRi4aJDbZoy1wSR2tbcxYFbfDybwwECwwAk25YP3yoe",
  "key11": "4J8g7JA1UdzLdQiVTKZhwkK3544EnkAfrmwxDNAfo1mrueLsa7KHdmjQJfeiR9C3fFQ6yaC5cezajuQh6mBBeeEn",
  "key12": "5ZhUwFS4A2CaBtCNFb2n65fWzrCEg7w9Uovor7fVdjSsQrqQifhkqcSQdEMuoZby43GFCRiDepnhor6Lh51HaR6F",
  "key13": "4TV6piFSUv9cxBFoqkjYrj8Lk51RT4tbkfdv9kMgHNdBF3XG9De4AS2NafzhcBJX5dLinAbu9wiGBfvYEUB2hR1V",
  "key14": "4E9wFxdi6yPviT3Wvy7BfwuAk9CBzXjke14dWhU51RKYmubqkiGJgFaR8kcJ1tQb8Szg3DL5Q1EJPcNsJ6kByHnK",
  "key15": "5CBgHDAfyTmfmrWNmbokbzpde5wNrM5yj9Q5eWmwTdMNM8oM4u9msYcNZRkp2kbYAhtmexGrQ9yPTyp6yEmV5auW",
  "key16": "S29QpyQtgL2ksejsRsuzyCWwfufyhVtoDaVexdMGTFzizxuQ2GstPaTLuT2ZFHp581wtmYwKiy2iWzjM3YUe8Pg",
  "key17": "rkEoWhNRFDbBFFxNnQgBtFG3W9QyMBiZKexDrYcv3dD1tkEKw25AcYKmbYUH9iYSBwmfpRsuSjEjMkMqYS6wSrF",
  "key18": "41NmPa7YUVCG2N8uhnoquEEJaAj6Dn6nCoVfXPrFipdPNuBCTKfTLxFWU14YJcSvDxLzUwsBx8sHcauXWxmLdVFG",
  "key19": "4bzEDdSAQToM7a6t3eAZGKFS7QqmiseBJaTU76bb4vJZFSwY6w3X2jCStEfqzcjz2XpUJwKskzkGtUcUMjoZS8Yb",
  "key20": "22soyu1eCEnNzRGy5F5bEztX9NM9Ca2kZdsAeXwB5n7X9hvELweXENXyqWYyJZ1hCcYwGzFQtrjmk4hiGp6qNLv4",
  "key21": "3q2Y9hRDf1D9AKXm6u9Arr12SN4uZMi7LB2daBGBp4pVvSC8PS2wtD8totyrJQbURui84rShtcicAm4rgzZmQ3pq",
  "key22": "5vbCYN1q9xpubY7pdo4Jri7KazKgnA5SGY416gc7pCUTafBiQhzrs5ATUhg8Y3TB8BTLM2pLDyp7XZo8SSjr37bT",
  "key23": "2cRJYuUycrEboXQexAkUCcqZaUrRQecQDpvA4ZwHi6zQfwaAFTno1zmJocp8gSj7RgLGoa835WdhnJEnmFsBzLcW",
  "key24": "4GJJmtBAnrPmFunpQpfMcCCRZqJppMMk974DfDUhVj6YNWR4oRWkWqxGUA48jeyJYuiVknitwaNj412KB1hnpxf4",
  "key25": "44qjbJ2dE7cNcqcy3ECC4Rvjg9YJT326ENPUqgMWAVububm3JD8gAcbpmqcDPac7JmiGjdFy31vrAPWc43Xu4j1S",
  "key26": "5NHYSoyNcH6zV5mZww7qSsPqGSbmZz6PpqeVgBdVqTZn3YmcdeAM8A14Zwk4TvtidqHAwj6n7MLxaq6pp32E7VCP",
  "key27": "4ef6JpBTwvysL3vg6M5ctDVaftunMufCTC3JHRjdAFSdpjBUaifHRdXkNYFbL5yXSutegVKs4KxaV99tiEzPYUWu",
  "key28": "5AgaTghdJUbAYdeY5G6H5M5QXJFVPAGSGxsbXKMsh6XHALxQPsAvwPSWr4Y63jJp4tyQxSRvg6YEMbJqysdQQA5Z",
  "key29": "3RFwbhU3ajxzfCTSuhw3SwPQa5k7LFF8bNHwwJgHXGEvv93V6AeXPeL7YyPGG8MnndzTqVfHkg7ENzvtyvGsfJgD",
  "key30": "4yyL7rCVEjNx2bPxD12WR6i4e1rk53MVU2McXjZRm4vuoVmq5ro5TmLgPHWyKZWJ7fgsB6xSatu7voCU5ajaJ5dB",
  "key31": "3ETXxjLFfmDyw1CAvrwzMD42KSS49ZZX2Xx5wGGU5iZudXrCeomuFCNoXwcKUu4erqnXCiuAeVJqBZn6pH1SzKhy",
  "key32": "2PGcaxtiRfoDnT4YEPWVqvywX1pMJuYMsVhQrDYXc7gBZdF975EN3bzGtUh539yJcdRayh6Z7kUuUxbYkNyMH8Jn",
  "key33": "2Ui8qeGXuHNg8t1y8vwL4pHZUpHta7aLi3tuhRRfbcWpSL4yFzgfzvYofrW7JCDnJL4y3XT9Ypm424WV7VU6u1Yj",
  "key34": "nAq2bRjGVWHbPeXYcVgbnyEeBb2DnR7zU75Mj5wCf6WHWpQsCnwR74SmS1qCZAckFFhSv8jH31n13pgq11FikoL",
  "key35": "5ymhfnQBLngfpijS3izNbQb1173GR1CksBUrnJj9GRRFu27ZmHyA77jccwwa7CDvWL7V6KR599Srn9B8MJB5WpBt",
  "key36": "2BGmCNMtAGaUgA3QRrD9oxvZm1KPGKtwjX64LHgDHvKVNwb7jhNNjBMnXs9BJ4TQtHooYeUHKsLaGR4f7J7GBjXW",
  "key37": "38cYezVNksbkjHr5ESVyWMGrZXZa463LeKWPsjjbjsJm6Qzsci3ACgrqoiyEddWBHMiQwH8L4hn5fyPAWetjY7fC",
  "key38": "3sTfFVxNwyfjooqw1xoMBTjvqd4YRXWnNQhUNjRUcRH7ec6pX9PmBXthJ61Kj1rBthTHQ1F5XX28VR3sWYaHTthk",
  "key39": "3zdwj4SPuBZLw8K7rhWVHzV8yNrPV5MtcivqLEYFr5NsYKKAsqrxjKL8nVBVZ4XqT2uzdYxQZP4ychkQ2sLJYG1N",
  "key40": "5DviChNasfMY6Z1jqtC7wdLJeBfJW1FC6oJhGkKL2yL4RYwT2uMtTod74hGQvVq2wahrCKouQFC5a6yQg1xexLRW",
  "key41": "tawV4eb5EsGc9BNgK8W52ifLub1mcsYNPXVJy97yBzGRHtEzJuf7QkacB2c4378ATFB5F6NBtTtGaZvWVwYjW9u",
  "key42": "4K4C5XSarRuWmQCRWMK2BXE7M2VLCxp345YB4gu4MoFhBober4EZjDaxAot99xUK6FL7SD49XPszNqsEUoCirEoS",
  "key43": "5QYYsrwF93N17yNhHpNjMGzB5gFts3xDquLJoT8c4icPzaawdfkizhVLz9sycNkht6WPKsRaqmftxyd978Y3Uxba",
  "key44": "5jLUrbfD31YkYAyysbgVfj7a7AQkXqEoF3aNErfZCGkBBDQrb6jSrwfxKejh4dDHXpVZZ22i5rTXPHsDFH4xsnsM",
  "key45": "29zwkEaEQqh6tVSs99PCcBDDWDDGLKGjqZW92Z6pRqCkDR3JWWfgnJZaZ22Q6uJyzA4aquNqmbGnoEhzsuc87LY3",
  "key46": "2hQLbb8cfoYwEQUQL8CCGwB7tM7fA92cRzdZitk6xQxs5mAF95bYBaggjSxrFChEjvtm7n579KPgsJsvM9qneTC8",
  "key47": "46RerHggXq9AHFJqymmY8jrJNAX8RohR6WoZgPVbHgsnZP4SBpiNPfzTUspDxjgSt6BdY5hgbZtsMru2uvcX9Y82",
  "key48": "2gGjDoMm7ge8Z7fekzwqGmkx7V4GYb5SXb91rJ1qNoGZsGRPTr367DbHvtuyVjc9AXRAmbyj8383kBovbVsEd45L",
  "key49": "3EF8kUNDjLGJHmbNz8jcbJLJre1gyUt1GYWS41tB58ESCxeLoRLYoZmT6hynmNtrAnm8uCDHJHzHZWRgDqvpB1Br"
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
