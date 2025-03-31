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
    "h7k9edz5CbrtUrDdQL5JqsMw8wXkmjnNx5duYjrgL3asVXWN7HmRp3eYEdt4m2rgUGc1juNC6DiBzn2YPqpzDyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4siNihcdWfHeskFjJW1cyaMEQZ6xLHibjBL4JdjgzNdsJeA5ZYkcYBnmVrwj2tjqUDMhJ4t3xCvcuc2EskVor5RJ",
  "key1": "2K2WKvnGvqbYtCHZVuuWDmBDs4BbVYfutrBfX13is8FCnES5hp981DwwtpEMKeekamWUXxNs1opBKQSkNcm7RWTm",
  "key2": "5EmhkLcnHTAaqq7n7w8A2hbdxAzCjrYSjTVgZMscove1ZWTWR1Eb5RuHnZyKfxZdKA5p3o1By3yZnYL9fAfACqWJ",
  "key3": "jJrHwwwUrNPU72v4LmnDonxJiFS1ppPTq4wtArc1W3zQNfvkHhuHBPuGe1HgkvXCBbVz8eqxZ3p6QShNC7CBLD4",
  "key4": "3467CCu7T2c4Fdpgf3Pyj3S5CWo6kcAmMKN9iXFnDwKi6H1G6zQh2fVjA3p9gtpCfj5PGwS8DUhXtCocGYboWQ71",
  "key5": "3fnEngJgzVCCyqk1wsXiE3MATirNkNCGkbzXBHNX13qFTS4Jynahfrhpsab5tkd8kmQQPqjaQfVTskTaA8cDoRA2",
  "key6": "24YyVGwgTb9Zfuq7HgLm67UmgTZp8z9yr6vWHXH7qmiRtgHgRcqJVTB2YmerLe735fXfWtTVWJzcubc3sM4UgbjW",
  "key7": "21jCr6xQFeNh1HGnLgVTacCXocLxCurR1ziGKoFh5TmK6cg8QruHR7ukWAzyNtHu3kJASrAGVfphgg7hHuMBCRM6",
  "key8": "3ePjRHhSgXpL72gnsCE9nr1S4CGJNeKsmfZcnqb5hoXzQdkkt6pVRYmXMvMdPefCojRCRYkQbsBuKVLMMV9s7SBt",
  "key9": "gBHzZJ21WyR8xk8gi7zWwWtm8EjPSpkzgQ3cXrEN86cfac3z2PPWFXNqePzXmFuRrZDWvgKzxdgpG2pEPrHGE7y",
  "key10": "3QKp2tECfTKPhYBUqwzqKgTDrMfikCmS8PViQQgb6hvwStVEbWeoeWdhMKBFtzgR38Y7ZnyL7xLVBMyFqQPaH8Qq",
  "key11": "XKJThSvN44BJeQN2E2jyYiNb2bRmbMCFBBU7dCWpo8xSRfRaVtTPDyzYT7SEPLqjpxboJeVQQy67nL8P2usuDNr",
  "key12": "aWi1D6xs2JsWAu1eafhmjWkDXHMvxgVWjwUCcgKGfuxVrjiw2KFaifQFHqJxspPUePokcz9WEvQeXzkN3MW25VG",
  "key13": "23nF6A5XcUSt3E4MZnJxrH1WpmCcZfM4xJMppXhcfntj3Fncf36BYwPDL1g8d5UxqFbYkHSt6oaUKd8fRdLG7NpS",
  "key14": "2MF6deAE1UzfZLBjcwRRKNqYEtDrmNPunjJfjejsnAzr9fssD4axMnCyEudqynepGsqfrhbjFKSVM7D6hJZWN2Tz",
  "key15": "WPi6uZw9he6QYdR1GdXxFipmpTtLhGScz7UadHVRdDSfcSKer172qq4JxLW294ipTWnEQj9zrE3zq5LYQUutY5G",
  "key16": "4A9taMLxFjDP4WninHbceWzM62eemL58V1X1dLZPELvd1p8ijYQWgJH81ktnHqpgdiqMSoJz4fX5Zq531EaidMuZ",
  "key17": "4ErYwK7fb5yWKHpyEBBqPqGPY3pznYCGkHfqbYXfVu9hc934wYr6J2VXe1rYiuqT92F1AxCtSb3MuAL6rVcZNhdc",
  "key18": "427dzBvBs5kxxvojtZAaPquX5updzHXB1ZVigvo4LKGHJjXXXoMmhaiZs1sVpQzCQ4mTwF9fap3rMimsNy8HcYpJ",
  "key19": "x3bzubW56dCweD3GdBUzTJF4PkuAjStLhHi7WU2gsmwRg98PcriQ9vXTdvYoz74saznePW9JVeLaocCVqQmuNN7",
  "key20": "36Ht2AfAAc2JVux7Z8HcDrK4CjPDpeb1GB4rqdzpK3hj7xXA5xU3kVkQbMK3ne8SbDBcWjL96nie8RSW1ex8NuBf",
  "key21": "5iZKpX6Zp4TdMhmvWGMBohEMXptix4LdgEgKovkBcDwHXsgSZuL3kHQJzpw43BMvMojMmeDqoo8AdDHSud2nEJDU",
  "key22": "3z6sDmMSt9yuv5DteYMS5XQRyjBdVg19rh3GNTybbR2dS3WAVQ524Z6HVMfswKPouQ3hyxtB6XmD7mELqL76UTXm",
  "key23": "5Qh1iug7rYnMscz4R6YMG2SCxHjXAqjT93LEJy4rb6ZxQbinvWDu1hUU4rw3wPpZbYC9Heowha6gX1gVdyn4eYLp",
  "key24": "2xsd4hH37m8DdutAvP6TjDtNp7jMVfhbJRgyrHPyvAfBzYMjn6PB5dSR2SLyih3CwmawDJqYMW66YngbgeziLC4z",
  "key25": "5R3vZXps7HsN17AccqxPkWgvNQrZmcE6XCU4HC9Lgd7oFibkbpKifnEkaocDtPDhHvE9CUm4QmNKz7LiXVJdECfB",
  "key26": "5yAfNFF99sow9Zmce7R2dVcUBjY9uNsVmSBF7frE9BwcyA9ZqdXGsVqqqA38BS92mfZb49L2w1g9wWLd4PaUFFkv",
  "key27": "3kvPfskZpEv71gbPJAsnnHAk4G78r6UsD82aHDpbw2y3fgk6cUfRg49mrzC2XcmBfbhJ1FMyQYUNhoFti5xCm5JW",
  "key28": "37MaPR3RreASMijmVwYuPhdkDQv4mSMAtSKXMnZW96tstvFYDnRjmZc7Pjhrq5CgtE43XKCsYT9q9qYQU9rmMS5B",
  "key29": "2VQ7dsdvhtX2cYnk7doqtEGcAvdrWibwRK4g6JzZ9VEgLbU6vFEmMtfcKkfRbjCiXXKHSHnBVBGFr5RVEYurTfuR",
  "key30": "49Lrp91niLKeD9igKqZfhiE1U1BhiH6tFJuQMic9w7rn2fEMUUnAtKj7AkiFj2tpMJmWhsx5eMdwRE522zTNk8tp",
  "key31": "57ZNeZJDYPs5CUz65ZtgEhKpM1gL9xwtC37qCyYioMssFdmurH2yAFhd4JR1xEZKEuvn5s6EpkY2UqmUjxfjj5xz",
  "key32": "4b8wGSS25BdS2tP8pXycEAu3jyXnuGKySX6p9xD9XQvNdjnrnvFHtHSpn5LApLRrqeAYnUSvpCdiS7GmXHsRKoo9",
  "key33": "nw3oRHSGnvUsABPzm2DE8raz4j9yw8HoRBV3uA4XjVioP49qoB6MvBVevdewa12kQWHnKkhytR9HVcy4x4A4YGs",
  "key34": "5E1df9PE3CMgAHBT6XLkRJUk4n6CjhGmHsvaeKQoaffoSdFUKTQrUsN6iJktx15D8k7trHKSJNptCsZ3NCQrdrTo",
  "key35": "4N5QJxEmCMh4uduu2oSrXoNe3gDv3nPCENYEB7pHr2CF7pxRvMqkmzc3hoVUQER6ZihzkU794KNA7iC812MGWZcv",
  "key36": "2NSzi1kn7pBM3BqfHQJSqNN3Zdx1rsrk7FVUcGDo4HYRTN9wfFHV57HtddenNqQXeiDkNhwqrDxJ6VoN1sMK7EGv",
  "key37": "hYz4Uhmh21Lsbep7pABC7Y8jxpApN7S6nXbbupqwFg3f4ajjmdFppacnQAn3u3cvZBKhi5F73NTRGsgqdHPHuFv",
  "key38": "5DCiEugV9q6dEmyVNTpdhaaRykzuKNxoLHs7rEePgaQwZ9Y4YmH2amrq8PfqPhSbEfkQAWwYboDMnsD1BWNn75TC",
  "key39": "57AzG4LcRg6aYK5nhLw1q1vdJ9wBHdJX6Q9o79k6LED89jDKGL7At5bUR8SPjWuJcGyWjZXXTJj4rTZEJYF858GA",
  "key40": "4MyHhzqZfKxknMW8E7GbT2eoymmFnxWEj7fzQqtJ4cpGHTJgaXdFNsz5yit8C9WegWnTaY4YQrCYWFT4SdnNTnSh",
  "key41": "2BTCedS6HxZu2USyQ8SGaf71bDb3btmoRr9uMMyAjSmUszuzXarKwzyiBzvb4osM7jeqAX1WuTfLyPNFciyjyXmr",
  "key42": "5ZHGHrm7WkMaTKyJFZAtJDZfr6JnFZyUCzTwwpFvH1pt9YeezXB1h6o4BRWWE7TDqUXTbL4yZbfSN4AmAcBYLj5w",
  "key43": "3XREL3DL4zGzaGiRBxuKPXpVCPoXY65xAP2ny7CMDr6oQQmeLM4cBAB9Mzd1whhaoq1nBrJH51LDQQH2MvZUnCt7"
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
