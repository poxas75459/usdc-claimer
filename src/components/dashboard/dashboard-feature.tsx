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
    "2b4rCFSzwATg26FmQyfLuWJcPzoqK8PUtCUE8RgzVUotQZoTqHb6TvAtPeh8hr8MMQKCDp2yqBDyfkwBCBiwdeWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x4yRuwVh6HacgJW7NyFzdQKEz8oAk61kANzHv9qw3yUMzsYDsNx73zADPZyAqqnKWy5PsxirUxapVU23r2RrGkf",
  "key1": "Y6vhMusg1ZtDxVAJ5f9rnvnZsjCKmMvPoPAR7xjKwA7Gucs6QHHz1jREJjdUynyoHNi9N9JsdRG7agszmTouCD5",
  "key2": "2sHEaCwD2MWnXk974Umdu1w54oNAzHaQxz4tWZKPq3YaGAm7SCjZQVkfd3CstzXL8mo2YS23gGEj3GCML7nCnqxh",
  "key3": "3aDDjKsCGdVdWM3pWYuRRH5GVYimQcqFeYB1aZyXMqzRU3PfZ8u4bfRaBTAm84tmc4BWY8TaYPoVbe2Uw4NYYqq4",
  "key4": "5Fuu7JqagPToWjkQwxcHsfmcmvn12XWqjMZwg8DGgJctqx1aiV4VW5ukmZBYRFvpve7rjfF7cJE2GAcFDnp7wnwc",
  "key5": "2HVrn5aaV253fw234cfCL8Aym4cBxKphKrjV5ePQfV8JsVK5CTfJm4R2QWpQgTV4uhyxXeK2hWGvkappJhbT8Tr4",
  "key6": "21hG1y4jvzL6LQG4NQnzd7HaLRQdQQfYbUNj2vbaayB6usBNmeLcTzzaeXUMCgZEvXLM88vF8sCKGkmM1zDYWeBU",
  "key7": "2GNQS6GiuaTakwYhGNmfqNsf2DHVjS5upjC3qS4gCNjT8H13oxX4rEpUvov6cCrAdJt8m5bfK6m76561knGoxn76",
  "key8": "5KShUfMrrWwrfwCQVVvmoGHZQxtqPsczYKR5g9675ySd7q6hmhjhpaLqUsV3jK8eG89z8Xtn5gbXi18EbhQgpLxB",
  "key9": "2Fn7KDPtZ3KHzJXH5Nafkt71sQDdWVXXxoAoXKsZ4TWxBNZYf5jK9p6LZHLLv9nfq5PdFho7KZyiRht3M7PSqtcu",
  "key10": "53PgpHR3bANcYCDT47orqNM2REPhvA1f7nELeNjHGyBnUyDdAjF34WKTuKTC6qHXMYRgUg1rxLtprkqyLFS36tzh",
  "key11": "2L8vWoCeYBTnviKVvC6P66EH1i1curKKx3zybqRd5oufUsBK7cRtNZopT8uNX2MB1CvjDmu9avnVa1AhCT2eD8iX",
  "key12": "3jhJTdfHDGaN6QaaimxqQYxofvosyaPEjzB4aqv5WAc2iyKS8AsdHEr6ff5NeHV4NAmrRbfuv8zKUBW5EEM22UTy",
  "key13": "geTEnLzxJmLpC41mJGjZLFXxFr1xuG5Lb8g1KM2aWG7hJ67GUjp3eUHELnm3uKhJ3k2qMV56gfEmQTvwQKYQqen",
  "key14": "52Nw1FF6i2iEnc5cZMVwMst61XV1ZQ3deuwUZbx3TtZcU4ygDLVSoZSm3bASQaTMaoKaWMJ3rrm2gBv3TPxUunVV",
  "key15": "31xsicvKt8SNntSN2CfgJqzwQX1ur5WJ27ydqCeoS9B248xbTKv8SQFp7oAvcoWgzZ1UBYsJavPCDydz4cA3EJeF",
  "key16": "2bxCG7UW1n6a4TqsL8VXNtdKiV3BFwRFdon8gNYZZAMGJ7JKoJn9YAAHEFniT6oePmbZa1QGqbkRMsBWMvfHfBrp",
  "key17": "43NjAqzaECrTLUaCj77CTehTjYec3QKtBSgFWqGNb3s6Pg8KPMjrsTGZU1kRTNzjAmbC9hFTQ2eW77PV912AzPCY",
  "key18": "3mFKkw2bZWoRqGttG6WKXXnKXR1MUgYohsEKUfZkTSn6d3JQsMVreXvMTFQGUvnSc4rVxCo38DP4M3GdsP8C2diw",
  "key19": "2DC1tp3bisSpYv1iXZ3obz1nTXDcJanp7NinHMsT8MGqw6PCfDtjJmswEiDk9FsSvgKRfAedrtkF25J3nFecXgd3",
  "key20": "51uxRHq5WrSSRPGeLV9URrxaiKkTb6CNCBQp8E4riyf1Srcn3w14kpmrBT3A6JwrdZe2PcXNvyGPhGx4w6MFTwLW",
  "key21": "3rrgxRxbGyH4H8LBUMzbNW3agbeW84RZE8XtKyLLALsNVJ1Tigx4HUJanZeTD5N9JvaH7149PQonoy3dsWnHTp1G",
  "key22": "5dQwPm4idqPT6MeMGbKv1c9HXfdBn6b6om6CcwPjd2Pk3UsEYftsNt2EcGYDVhBYVLPhSPS6h49X9ATNJSawmQ25",
  "key23": "36yPodAvwsJTvV25kr4fxtNSVQnq1CNTB2yLyv349PDQSqVfNKJxU4BGcgcJ6PV8dSnoH9WFwYwxWKvKGrRXHD8Z",
  "key24": "3SMD1Z6cwyDQtK7SQ9kn6KEmt1kxP5xpagjcppyGtvpNh1XSaBtpfW5ySa9Kdme8JW3KiooPSxgJcLPd4iXo9u2r",
  "key25": "5oe18HDzqc6Q8dw1wGdA8TNfMtZ2uuQan6Q8UUTQVVEbQiW4JLmxbfi3prPADvPLaEDCH7WggzXE5HG1QuDacNQs",
  "key26": "2skHdCzEWphEazCeV4jB3fybhjrNTJZkd1dnYdQxC2ew3pSa5AyGqjcZJuXMiyyBjhktpoinw9ft1jJAojsondJc",
  "key27": "31H3Ve7KTBQoZhPPepUgpCXnxXChyB1DrMoAK8rs62y5wjatQaLYXsvMw15eBnCPYqteU5oD6hPYWnGM9YVRmSkD",
  "key28": "4k6Ymt7E92vMDM7SpMfcPYNmudDG8JWnQ4sUry4uQyMx1bPsaX2DcYL3NC8tUofZC4wKzTFTSbCzUDLjsVpoCdBA",
  "key29": "57WXJ8z7wDm894eS5gmbHEN6gfEQZBSpaQgL7aVwsYjGswtVLQo8AKhH3Es1nTRQgtZoWsJjSdpZCWatyNdZcVeE",
  "key30": "44FupXEeJSUypACJjjGhjrM47k4fcT7M6HEhH9sM6LAk9J6gJkS49m3Bautd6MSqFJGtufj4SCnGpqAyTGPo8bJb",
  "key31": "2R8TPP1VYTKULYkTn94QgEbGuWs3BRWQXBNXTsqETbNMWP2bJgdjt8PHFsr9hJbk1u1Bqx6oFKg3ufCEirQMHz1d",
  "key32": "4zUQZ3xjFNJ8zsoYuAZT9b57H56wgGXLSrryTF7R72gQigtrigd1RBX3pbmjbbgAJosds6xgiffC5t2725hALvHu",
  "key33": "4iUxJT25SDfk6oY9wrDaUw2Wzgxnm6afjwkCKQu7F7PgejGBXsLeBRfUQCLDfLkZiEg2cJUTDsVV16AqL9TU32Ej",
  "key34": "4UuWwA2rtkxkHXoVyo2Mjm5sz9Es4rJzgaDxAch1WdiygwSbyJBNLtK4hrzLTMRmvTSuScEawgyhN9wWBYhaP4sj",
  "key35": "3VXxaRQW5heRaXwbqAwSqof4wRMjv3TRpst7AV6VGVTfgo8XEQqKk6qLmHDU6gRnmn4q6Tt1tXcAa1nEQKtXQTkp",
  "key36": "2jC5uqz5iAycNck2Li7YhhJryfHGaEn55hdCChUnojE1zba4h7m6gRSTDVk5ArRd8Lq3ukD1ma8LeMvgkcJc2ZSD",
  "key37": "4RKcxHSK3nUGY4jJhe2o4r6QdjV8i9LGJH97HfNeRSSjSdL4AH7uVT1XqN2fj2xSKbkzF3WzswKe8LhQRs6YTmhd",
  "key38": "2GkBgyVBKdVgrqWnrdASviqY9t99RJ9AQjwGLow46y7vwTUfTJmkj2dmcx3oz24AhAoShRLvotst7s2SjiYtP8q4",
  "key39": "4QLnWjo4w15t14oNFtXD65GV8hhyD5vNofCC9RahcAf1J5ooYfvsjtJeMSS8NJnt9uZhUu8iW5UGsoMuHk5SmyRv",
  "key40": "462LjZALozToyettRCXV5RtCz8wvEy83JHDb81VnY7pqkBeDxh7iu7PjevQmCMsWDCGCEDrBAeWGdEJQceDAY15K",
  "key41": "3wnaJPHRS9NjNu6aNkPxSFX4kEUN8F5jCHzhVi2dGuXCrXrG7HEpH7ZzYHXgW3FxW68K9PMUnxvHbvfgYWMnea1i",
  "key42": "Ekie8dT76dFo8jpi7KrSdsFfzqUYDWiL54bPoi9MLuiTn1Vj6DfYW3mLsgypzFfXmoL342mp1qTUzEmkHxFsbCY",
  "key43": "3PPUtBeemn4S9WxJhV2WLhnX9RRGYLqSvy1MJmJnNXAiFL133mEMAph48wzbTnDGw4NAJJBgiNVviFvNuY2vreAt",
  "key44": "4FSxsuTNjpT7U3dg7kjWdfiBHjKJaCKKKP4obSNjjcfbH5FGZCLPLPbT4g8WWJrNDzBKMxr4RuNhL6So8L12SGRB",
  "key45": "5xDsMfPpzp2BtmjRatc7LJAAZQJMfvC8xLwFjvCrRYyvLP3GUpf6Ptq3wVB9uQoMKFActhFjarXuw2PeJuU4sJen",
  "key46": "3fAhVZag5Fspm8U2YJySfM7EnhH6WQng7CYkhLcHi4rQ4u9bWjmws9RH1mrCzXRsJjXs5GFaVbWXdgXSLeY5p9SS"
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
