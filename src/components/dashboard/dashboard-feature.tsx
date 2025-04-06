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
    "3GWYCpTpNNY3j9BkdTwbHvm8dQJmAArBFjuAkFJsAmCpXFGzAxtoo4Jk2vazC8WbqT6fLiXJQk91FxuTBn5MgHLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QCvEAQRQ6AA3Bh1xkKPweAt23xtiGGmCCETZWNsP5ccL4NjtkS8ZCNY7nP6CbDLKHixrP3C4pTHEkDnfxaHrdHM",
  "key1": "37byysgQRbgRQ7HJQ3pYBwCcc4Ni8jQCh29Z3DFQXXpvG5cbCZaqP53fZEyei6gLy6xgV281z9LDnjN2UXB9ggMh",
  "key2": "2pngiHksoXyFavdt6WVB5J4abvHRUjab44jvBe5vmWt2bVpTHm4pacdc1EEP9zL4JMwfu7poTQR2RxEruzvmtR4u",
  "key3": "325a7PGqfF9pRs29c1HiKqELrWv57kXY47LTvvtBMDSyG1woaxCyr8orKUEevoww3bkhtBNGcQcJv5Q9S77QXHp5",
  "key4": "tLLEN1TP8G9kwfrCzL17646dyG9RJkZy7X77V6ofL8cRLYDbTUBDMhdcpgHPb6UViWK1Me2XTyUEJRdTNoucTa6",
  "key5": "M5jPgva24nJvji7ygmCjvskJCPEvTNzdK5xjWqwmW7C54u8K4q5BL3zat8Z1DoiPq1PcSyFHJxQ1sEZUg37XWpT",
  "key6": "2ChLY8KQrAQgsJvTAezn5yUUgk7NQMyYLXBF27kSQTW7wNdf4yhpQfhjzKtFKW5ZsAeuR5fx5KoTAGBPc3HDHkS",
  "key7": "5kYu9nePj1oXHpX83FEqRbDQeuixBg7m5XW8xSBGM9F3i4uoPVbuFEK1vq1hmPrFMHHmpwTVE1hcFxaA5yNPLszG",
  "key8": "3h4JBdSaQ9jTnyDaUTmpY2RwZFa2zWdKcrejGK3vu9KcmuvqfxA1oVTsD7nxXu1LzfZK3BVZD8BptteNYJAH8hew",
  "key9": "gaYrb9HwrTSUyisC24Gj6SS4mFPi7K1H3rLXJoqWsSTGjevmWr5gE9mimviLC6Q1APhFb3E6PTVbK1xvtXQyhqo",
  "key10": "37YpbQByvh5kmZbV2oXWhtvdXdFNhVmmireyyJnVg7EimKaqZiAsGyXdQDidbjDYz2JwrEpguVEhvLdoa3yw9PVM",
  "key11": "5ZJH8pWARQRSEPBNVPPGzwEZGn2ADsKGVA1tU6d781YTMSkDWvpky6kut1VuFvoHPusyKxh6ZhTT8Z5Q4ABy7VLW",
  "key12": "5hwS27aNSMgPugNwHxLVFx8z2LJxcWjCzoGJSq2HzbNT9hPeLHMFwKqrmK3SdkvqbCvD1VnZapzzS93XJvH4TaZJ",
  "key13": "5wYV6i6eb3Ch54ZhdAVT9qgcV2s6BS8Cb6UMRUDEZ3iRjus4uqfe7JFymv1pPGjYhD1pUsKw3uvC46ZJEzzKw1gK",
  "key14": "kCqyx1JDy4fpDWbWxcVvntH9vTaWHKhvRzjC5xnFJFEpoS46vJe7RxK73w37Z3H5Bz5WkjZETFc3tod1jjPuRZT",
  "key15": "5c2xPaujT2UBwdsoZgNeE6sAu83Ew8gwZj5fELf274B5WZDuB88YiZVyr9yrS548Wi9fspKjYLaUuifE27xRU83v",
  "key16": "3BbDqjmSKxvzCvyP5JmbdbcZhUtN5ZPnfkTHWBERGEr6vVUs2pnsNNuZtJu9bst9FBHffCF5Xj1UBswmWmag85AX",
  "key17": "3hwKLyQwKpBxiiXeuxMbDfUavvqoWF7PfUhjHXGBhDRGeWEU9auAGiXe1cjuVK58fc5cEHKBYiJoFkUmjBbG3Dao",
  "key18": "4sXmmRcLesv5dfRUnbuhdvemn6HnRZEQbk5nVWNvzvQkJi6zPoNx4fWX1KzByAmLittRDfBbFqQj7UaXUHzRYNXM",
  "key19": "jgxTZvbMoZDbxmbGyGArSLRa5LwofbCBpjGz7uHA4feQbjtiZypCxET3eYswx6xhLSUoQGi8MAp45arKdpss7mJ",
  "key20": "sxkDQnKV4JQXEodHLAgTKF26t4VY2Yz2uaKuErSJFhR8ieQcNhsMMjMqFnUCaZnf6gcPwc3bE5vfAwSvpqUZ48W",
  "key21": "2sBdZEGPGjw2Ga4hALkDqaxTYGbSi1tNpgG4hAs8tvGAe2H5dC4GpConfJzxYJdvkFLAV17gRtZbEenQ8AkAzapN",
  "key22": "LDi2tMseEMgrYQ8TPY9HxXqxqiz936LT1SaBw3TqE6wYprfiDV9MhJBZV9EQ5hshTNBepNkiFyRytjvErKMJX6g",
  "key23": "97uM7CVQMa9cMGDanswMxQMQs3xjNN4DBA2ouTE9wnM5VnsuVZuanFmNPWM8KMKvUKh1Cx6y5Lvdnabxb37f8gz",
  "key24": "5dkzcMtgV168xPUdBa4tJ9ZkyH6kLfEG8gwC93jLDemC5zGsgo9EtXxGt9oFMaoLsDkBWeBcK4j1Ne1tFdpJpCkm",
  "key25": "2VgtdfFxm9ZAGJGfdfUpSUt5y6FGGRqka2q5pqJDSdGWzyq8oLWFBmLqf4yoBeDgSyv2GgttV5ffSykf1ZwbFpCQ",
  "key26": "3vTYYg5DTd8TyP9KCEuWPGtVrz1wTgZ8UhthucaYFVx26YyjYCbtS6DhqXL2SMdR7RExpFpuNfoRigPLFewdLbNG",
  "key27": "4Fikwf4jck4oyuTXvxx2U1xytar8P5r7gNwwFPegpvbafRGCVMfpkkYCr6NgsDEwNiPT9CP881cLeQxUYHbeogMV",
  "key28": "2P7cWeDSAyQxLPMwDkq1LmQEmt3sFLKeDPuKjkK9mNBcHoCXdtyioidMChS3FJao65oaGCYG9Xwf7v8tjMc5Fha6",
  "key29": "5sCwkQDpRhhGhEvreBwVc5Xx9E9zt8bKVNihtzENDkX2fbetqzYwwLPo9F6mzQvevk3bZ9EA1JX8MB2gV57uh2sd",
  "key30": "2mqod2K7A8epVkvafW8cxNJxdzAaQfPPZtzHYw832hFb6H3Pfk9YNHhTagJWdkQ5mRbAQd4PPnoq7x67FoCLbSNe",
  "key31": "2WCs6ZWT2RKhdWFhHkuWzKugsSbUmraqaYJMHKM8gRWjuGBAtr3BGwSXy9FgDeT4B4iPXmfSd2fLobXWh5aU9Xue",
  "key32": "cmcrsQFKct2Lg5jtmdE5rLKWa2Ubz1uKTVbW1prPDfJw1gh8ENPFMhMmCVqp8FfBr5FsP8gzJoQw4PSvevU4pUE",
  "key33": "F5aTLGX72LvefaNXAi8LAhaD75P4DnVEx8M6bxcYMN6nuDSXukBdUxQmMfQgMMpVd8JGu3Cpi9BG5buTs6aFQZt",
  "key34": "4NQzvD2WK6z2zrfsF1CHWL7rQYWbk2TYuixUogBd4touZsq98zCireTavfG4BRDtV9A2m6W1XfcRKve9G5AgBJ75",
  "key35": "2JcT9D737YK5LSpkvtX2qkYrAX3f9jM56fqRiwbD84rJQsDpBXR1hCpVpVjQoVfk35oj2EFDjEK6AzvyVAWfSich",
  "key36": "9yGAJi1D185VNbJXGrR51nn7SB99AQRDkxVFsyxAAGaq7AiGx3acVSWpsAUt9aXufCKEQHWmTQCVjGqXjsMNZGW",
  "key37": "2ShKncAtU4xp8t51raLXBF7ezwkayNm37Wzm65yjEa6ykKa6m1dXzP73mRZsyTRvRsDi8vAecSdKLccCjpz7RwFx",
  "key38": "44QB8ZUjgRuzhtxCCY2tQWtDBKeSNBFj6EosQp3wFoxmBVL9moY3Kxz7wj4bHftPE4QRVf9RgBeEo4pCqfyqYUFM",
  "key39": "5eERfdKQ1RUbsr6KG3q6bESnfWsensvkUjcEY49QhoZiJnBanC4d5FXznA6dGAnb1VAUinkubF1bHXDdVz2CAC7E",
  "key40": "2psiVuTGcF3nPCqhKgozFpTbgy6Mq7Dh16yj9GzkhBbv6nSBVAZQmK3zxAV2ydw3r7ipDWR5ju5xmdnaQ5cWLHfY",
  "key41": "gVv48NgSpEEvsLsPQrWaVLfRT36X4tqx8gm5Lzh5TKf1PyNm25XyJsNoLSPBHoWDwTxftCvuHRTKRJLFykFqzQD",
  "key42": "652gUf3byvav7x1Qfo7MWJxtqHJd5H7C3pJ6A9Nbpz2UVB5RkfL7gK2JE6GKePFyc1PyHjAaeNkZ8edYQxUtXnqx",
  "key43": "4hJ3yymoo8hsXHjxi4to1XnoakhbLyQhBwpTLX5oGsi7MYuUPKYfkhFQLnkQygzdsxUnFgga8HoUnh4hPt9piAq1",
  "key44": "4YXyNTq6qFTbGnexwMqKQNyuZUd7Bte9g4hJzJb1oQDMkUfGnXT7JThGNP6Dn9Mhw4oqddEGQrZdGDcgVeXY6Wj9",
  "key45": "8k7mKffjyesQuSEb9Bv4nNxvFDXHEFhGv6QvkPpowFL8BkZQzs2GcFQ1rkosm1A2rr4ddfoxFyQ5mQuBB71VsWu",
  "key46": "3BFrrta79k1JhinDiCLwTdrysrK6PKLbgucajZrETv2VkeB2QMW5jS6XnoMLvHmytU1bSACtCuEGf8X4cC8qPQiN"
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
