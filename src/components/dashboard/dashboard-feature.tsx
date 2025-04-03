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
    "WbbKJRCqdDoJfTkHsyENBNJJpUjYhU6k39xqfTtWx6qvNmZsDLQ2HnaxUy3SEdUdv3KEgC2gisg62J5LDdm5his"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aZ4XYVyfDgmKo3UTmWjHFnyCuZH31ETKPfubWP3v4L74ULf9pd7QWGZpdtGsB65AErCjdJ7UxsWFXr8hDxoPy1u",
  "key1": "5yMmhMnmRF2yDpFukRNZJ4LKapCraeV1WrNyAnQPukERCpsu3RgX3U9CaxwfysxFWbtdmPjLSjxT8dC4VkWkbYj7",
  "key2": "3qEYjkmtQ6e7YnTJxKz6i4a8rEQMfcwUxKm9xm8te6aZArPmNPnxxNehvWF3gBZq9fQ1xHEoisimgJEQyAV5yGeJ",
  "key3": "4poLGrau279EjtzQRH8JQsmAPh4q6WeMjLGexvNEHwaajs56wX2ZnRJahV3F9p6hMj4ouKLbm2idG7458dFv3oKm",
  "key4": "3W3CYzUCa1LAUfWPNZdA5xW2ua1a2pDsnu17eok86iDrW3eng4bjcN1vPCppbDGaNe5tvXPCiCw2zy8PSg7XRn3k",
  "key5": "3ZMKmWqv5NaLwJz7zrb7jVfEdvohYBaDUxFQWBztn3KasKqefbzY9agJgAntZ2dW9nnYDtMJ9YHKmuECrFTbLDDK",
  "key6": "3Di3qfeCWc2mKmVAPd2AafaNUsJZZYNHd9JQrabe2aBFtBtzDoBz522PmMYbTqcKLPjzPQt9ZFw4XVe3DMmL9PUU",
  "key7": "3rgmaAu5E2wzD2ovHnRus7Ft2EsJKirDoA1dXArAuCHLKnTCtRuHbj7peuyhcQmwW5TaT7CKrdW4d7SvCZNqLsB8",
  "key8": "FLpbwQWNBqYa4Yt3m8p3r98aBDZB16x6sBZZv8SS6YSJSMaYY549rTGy1KigsT9D532JHiMwATDW3MKrYcgEiTV",
  "key9": "4Z9RgGVLLESGfKvvtMJ3DFZiYCa1dVroHoV3rTVViXMjMSvNihdWJhWmmMSPYkWvWQBoovqQcAS6Tx88id6PH9s5",
  "key10": "4tRqTSD1wD9Q6zMgqGJoLmyVi4KeC6gPEH97KUFJ8CLMrYQn5T74f3bKVwwgus4t1cANACvjLKa9KGgrZue2quNL",
  "key11": "3qztzgFhywJJnRmibo9EP6cm97XkrHL2AS7vYEm4W2g9bpn4aG5AxdGJFmPYyZZ9FxMEn1EgJtfL3Jc7iF6ZHHvz",
  "key12": "4heWNGNgWSrornukQt2CNnjA2eXzUwzbuwuve1oMN4qAkBi8euMe5Kn1tfT8AnyKP585YVqhnmQyxTRGPFdcPgQB",
  "key13": "3WvFHr1S12rM7GnT15XbTucJxcQxGhBrRtjCN95vFypfnduAhRt4GPE3AWgvrNf22swUXeXxRUaatffb1cyckAVP",
  "key14": "mxCp9a9A8vt3VwAeqwwbLDTgmdtFbRUm2zQmCXaAEL3F6oBMsX29cSLkf2YhPhnQgmwemrnjUgGcqAzBkSoefTS",
  "key15": "62xZkbhN26QEHQRoLE8XHCKNKabkg8umf45bc9tRdxSPvw2BDNBP12Tj7taEv3g3jZni154n4QBDtF9qgXKGiqFr",
  "key16": "5w9Fd7bSzdYB61ZgezkS6VTqwT2xij3j9u5hB4USN7NjksVipYMizyVsDzmuTWYay2UrjnyofKJxdRdrVKWneDSL",
  "key17": "3SUyXdiCNnVr5PgXrgiUukgy3jdLF4rGdmK36mSbCwkJVrRz4vGqa1iT6RpdE8cFNXj1oD7HzSQFcCYtUjq8omMf",
  "key18": "2tgz9b1cRVJgxZA7aqGMLnLKz1LKj8Q8UYF6cADTjbcMs5xZduhNNjWGTSQfNaLc2d2KHBX4mBBBFM2EkoNhFtQE",
  "key19": "3SEvW89oDcujoA23G4H63hFMR8xDFumwDCogqodiaqQ2gUa8gu5SN3HataY6vwuqkAJV6TXW1EQRJKCbJciPaKoA",
  "key20": "5b5YXr4fGAtehSW2s7YwG7yWcQBjxpuoLdySfh1CpkryadFG6CMYFk18Vqe979YttFQWdVY3ndDXfLpUHVisRxsn",
  "key21": "3cZUe2QNmHq1ccdpWCyfiGSLF87eeVJ3cPMkWRZtvh9RE2tNqE6iuLgDq9hqgRpdSQsYJrw5zjsojgiEP1AA2GfP",
  "key22": "3os19Wskm3DXHisToBzCeCxQM1J863FGqwYZGd56dAFdrfpDM9z2vovnBAxaQDDMfeeZfgfJiCVsGz89qExtGgQ5",
  "key23": "3iRKQwqPcsbrH8Pko52B4S5Xr5Qou9qPyeWbeVNbbsTsgZhoDoZyMZTtLfRBKjgHKe4XnxnPoov6FjzMwb8aQQGd",
  "key24": "3mwgyabFR7zwuUQ4wrvZmNfXcVhbURJnWT2ufs4ATRMF2FxNxxdn8vLx1WqySnz4GgGu9nY3mxrn7E5zz9VtjUoh",
  "key25": "3uvubvfecs5ZG6XaJkb5Qobb1cpYDMQKKoNYUL8WKWSQKWVWkDYYq9fXqGoyUnrd47Fjk7PHHSQFwctzqG6d5TTQ",
  "key26": "2TqydbKKLRjmqBqUX4AR5mX8SxFTmFJdmbc5dhzz7gf7GSz9SyDm3jj6gwUrmaj6v2PtBXEiohpN4cMm2gXWjxah",
  "key27": "2Z9fazejLdoWHWAWEJVE3dZ5myKF31xwKCfY2oAc933Ca5x3Ya32BtDRYpqdBytjJENhrwMYA51JfBK5xKLnKvzF",
  "key28": "514WXuc3vhzYLn3iQE8TwWcMGPYoxquZgTYgqyFznXL5HACnnfkuPgQXbAcE7sij6kmZJfGXw7sNet4Ep1VGtx6F",
  "key29": "3Up81pmAkvmsUfUnh8mWUMzPF1FPNaAB56iQib3aYsGWFxuWnmtW6yE9dWLBKC8karqfEe2yFqBnDzRWbcawP2KB",
  "key30": "4hgARuTgHU516eHxQEgggnuiqLE2dXtor9V99xbppx4DLuqj2DBxQt5Hn5C4gSprfZxBJ4bJUc6AssVUE8HCyoZ5",
  "key31": "3jXPKmjUyp7aSFmC9fmJSzrLqPy5qAkgBryhZ4u8cN2LL7sLtNeN4oKk82UtAbYDuZadfaebr4EjNHZRfSHaPHi6",
  "key32": "2D9nwsskya2jeRAdSJBvnNbbEdgShCAt3ys9dgF4bicrJfJwrztxSbKB14T81VbcEybzPz3Xm3Emjn23JnL8iXW9",
  "key33": "3hGskNyJBTAyK4DdAGLtD3pbASaY43FG6oCgJo199SeagagdagwcYm6fJcWsNfVSsLh68eSc2USFeNYGngue9qax",
  "key34": "4Hkw1RDNAHSYvQarCnDnRjdDqAwZk8234ck6x79YLRDLZRhopVfAtC38qGAdSZPjLSNpo8VBUvJZfEkvbmNwnjzF",
  "key35": "4GsX599sVib5xUVBZVrWK6HdrYvXGby1zcFtUGVRgM123m7pRoab8dfHqndarDQ18qKREp131Z3MTsDbZQMew4A1",
  "key36": "3FaBuG3T56c6fgVmrhGxFF2RXNkPzbatPVzCwebTTwu2gfAFx1FCxMQzgXaD8tfHzsv8EXK1FMq6a9Lix6tthxC9",
  "key37": "3BLo74v948gxArAdk3xH3fetz8U5fMzbtm4Y2LneTjFB6SZ7Tnrq8s7iLh3XYDzXnDR1W3YGHmp61otWVq1M1Geg",
  "key38": "vZ6QzGGSV1nvNPQgQZ2GRFxivrPvqgK3QMbgNUkxB8q22SFmtaEYCSChyWJV5pnTuRehBswXUWpruKZEXVmapme",
  "key39": "4s77pey95YiyPM61RHze37DPE5QQG7mfDe9vixUH3NBHcpGx2sW2ZJHwa5SaPkPLvc8YeJUgVPjzMuzSEcMvBYZG",
  "key40": "38FXoWRVxPHi8LWPgtzCDjBgtKRYyMcYihmc9xuZpeP6KvR6QjQddHyhDuPaJg5Vw6FuPEAjFtnGwCxJnZ65CEwv",
  "key41": "5ghHPN9b6tMfwXE7FB4yAvZjRe7XB8nPJFTrwB1HVBJxq3uwEVwNU5Cqz3r2WfidpL53uWdUDVXsyMvem4xECpxi",
  "key42": "353YsFw2ARgqtKVzuzSG7FTndLXr6Yby5R4ChoBjWP8gkbQrbjUZNACow6p4RBxkMKcgxHYzsnJ8vNN4njDrLqWL",
  "key43": "5jxYZNmQT4mdHPx88XLgiHtNM6pxzg45WEz9Mz2F639iDQKoTftgB4hxtVnGbfLPe5hu9YtHzYx4R3WXsJWcANL6"
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
