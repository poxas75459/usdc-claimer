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
    "5J6cL1NUrco4t2oTBfW12XfdDsB177kfnVgFXziVCo9U1kfH93peaUbGqFU8bjb62ovKzisPKQmo7N5hRpkAh8qJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wGXY1rwZezEeBZB3oNSC73hmc3KmSfon3RMrcADpfgcjyn2f3jEikSk899ZiegKdp37aYkrCMAmFh66eRgbAzLB",
  "key1": "5gFSQC6rxTQMhX9Lmfk9s85A3d7RZi9dVa9nQTPryhP5Z3HSymQup5C419XdThYsBk87MpPmdHQan5UV3hErwJQg",
  "key2": "3dSW7vNC6cq9WXKgYQAQoPpFL7eZsfFzpKhp9L1dT8JRvdj6ZKHdqELakrCnXrompsX9CHdqBhDvasx4rxwg3ttw",
  "key3": "waRgsNAvpfvL73FAmqdNFgTD9WzL19Mj3RVbdi65etSx5VnjBnFTUtrScHbZogYpVwr8rh1k8Gx5MZ6F6N83w9e",
  "key4": "djrvBa6SrzDteEbsatGkD5s4vxxGzP7o3SSBRsQPLg3eWkdnt1tnBim1JXje3Qa48kSf9sRt4VWV66RPfF7L1ET",
  "key5": "4sSyz3a67m3bBNJG2QAQFnGn8wK3LJ65nuUKcy7RxhPCMkv3G9B1fZRLeKC99pPi3gvqvHLBct4Y6d5Q2zbxxwUJ",
  "key6": "4ibjYX8fjCnELCZMwC95VJgLpLSPT4Tz5uX9dfWSacuYsGpkvNr3YgnNpDZNkqHm8FZw4ExfVmBw2bzQefB83Qca",
  "key7": "3LwanqvPHxwBZyq3bBGfgxWNkWPZVjPTrDEQaXJQ5gZSAkMdr82NM6wjk3chTgwwVpz2KEuUTaAAGnp8E6SAZVQ7",
  "key8": "4JLh8ecGVUqsRiJ2LXP4whKY9ejC2bEhtw1ZhenM8dvEy77Ub2WRhpZq3nhgTywF3rJHBnwNw1WNqdLdvQjV3WCk",
  "key9": "G8B8nej22kX2uxAy15pY7yyJd6AzaLCdVUwHM7sZkf3zzYvQ5r1aj8nx9yimomq19Zx7KiJ149QidT5GDzSGUK6",
  "key10": "34vMKdTS2fpEWbYkdFRCoD4gU4hreVBbnCpkAf1MAa7qaX3WJXnxrXSdpdWmxdKFjb2MLbnbhx8xZUyujqKJ9ykL",
  "key11": "4XzDRnufJHTmy2urig4mqtE788EtkJTP4DxRoqZroqz9Yg1n3b9cE6UeRBEY6W4TgF62rDszwJtzKvdoABYkgSDU",
  "key12": "3bViDe42B543W1SPoMkcqhanU16gUTTTuo7T7wuSiLzcTTNMEMLydhTQQwxTSNDYjMSLKKadn1crorMRUQRQtmWn",
  "key13": "2LeodW6NVKRknMhM4t8QfSx9ha6bd4jcwy4qxxoLfatvHFi2hycFkhWWVvihpToxkB2n7LPAD1juVi14PFnqQCEW",
  "key14": "2j6eE2QqSht9RutqVXg1hHvrT7eukZDhaXdU27s7XUhxcQWTwgemFVYQaET6uB6mP4ihEs4ceXAuomYBj34Vv93N",
  "key15": "5JfWZ2R7Bc9W5i3g9getVGBZ7m9EuPJM2wGbmeWnFA57m7MkUbRnFdiR82uinLkpoCbMASdBProiJezPbU5tSw8V",
  "key16": "NXd4Mg398VpmKnSmWGhmJWjrZbeCQgnnuAoynUWvzP8z34jYJtqbMW6ym5HghukTomtSs6hDFegvSpacuPVGT3Z",
  "key17": "4Ae6CU5U3vVZeww4FmibwxAqR4Qd6MRJpHQS7gDHoCC5AZMUE2cP1a7nqspHd4QKFiQzuWTPg615G9dhzcvByrrs",
  "key18": "5b6xpAq8cnJrhyiYpZyWGy73F81vn9SRvz2p77CytNqFs7KnHreSsk5Exjpyn9NnYoSwwu7ah3spHA9AZVX2NrM6",
  "key19": "2cRFWqsh5XGWm54SR8VEYimFkW4B2UcU6NUc133smU7az3wmTfbMqrgD35AVkt9zoaLyojBDiRMiz3JbSNThBJCP",
  "key20": "3PTfe4tNxTmMFzsf8A8CdDCZWeFpDETyi13Dq5Vd5UPCpZ9LHJ3yKVHdQFbNMxSPhfPXaiimEcY8jprJaB34QNDS",
  "key21": "35vwAjKJ6PS36NjPgfWnAL3ZRb4fKNE3t7XiDx6q2r6GJNQGZcs1fFsEQeX8BymfxtVPRdC9JHdiUbVZBrdhRK5s",
  "key22": "2jsRRQBaBUpvX4sUdAT76wYKyKnkgS9LwuUv2tHad5fWE5DCHfNSFcEJGBT6JVNM1Xw8DE5gqS1qHfyJkDJiqqiu",
  "key23": "uZRQMXRayA38fgyGPpXA1TiW3N7CCRyEDje7AbJNSSuUcdBNKbvdcZ5pwb94N54LMA4uHeDZ6cvRNnjExHbymeF",
  "key24": "3hh3FvtoNf6TDU52DUt8W1jE68uUDg4RsV64SEy5oUh5feLzFekMdybLY7FLggqRXSvmhEWKVkSWJeMKWJHBmJwu",
  "key25": "38TRvaf3GyLYY1SCzHaSPXMwBfvzouZNNzkjogf8H4tNM4ekWcnbLw9HYskQ2YJ9SRtkiXjH3TfqoDyqf8rrYTBk",
  "key26": "4mcbYE6hnBax2nr7SSSXQiRBHgPiDQ8sReWks6bPWPUR7vSYM46UvTA5ycwWPBz1vhTw68Jfk73qnRxqmnRoPuH4",
  "key27": "4qgN9SUR5qo79VwhE6MRA25kEfXL7S1vDxTM3iZQGoWYJpFMvBs4gfyv9cjDJT6UuBiaLa57vJJZ5UPd5oxJbezG",
  "key28": "4G6ca524rGTKZegA8KLAG3pYiuFWxznokLaqCGZpEGJCwmDuoYus2cC9NAYeM9qK6PQXPDgHzdo45rN8eSrSKTH",
  "key29": "YeFEYBVKnPPRxezDSRrZnnTTaJzYdLAoQQkAAaD6DpF16L8MPHq9XbXFu3KftZvmnkVZRdyD67bbT4MkLCqnfw3",
  "key30": "4QZLa9LTxmByoFy1YuGgHNApvtpzbhPhrS6gCmrkkfXu8GhyfeaUBpwBgJD2YVUatJvWM3GkbfGpw5wVmPjFGpE9",
  "key31": "wiggyPZcMt2E3XxgQv9DYKtahzybqV4xsUwAurvwvuKZkhu5SZvyVDYnzsBE44pWLeLKnCv4DtafimaYSaz5XyS",
  "key32": "4NCxpBPX2Sf5nr122CPG2h6NfJaGMvnVy27qYTWSKyc9KHG96HLCZojvNhcu3oJVkqBW1ju16wbSf9827sM6cyPi",
  "key33": "4orVNZunS6YFa715X2urhniyoqys8H2fS62zJhchUySv8ANoKP3aEkMhnrG92txx6jDdLf6jCtFxnwcuR6BuH2yH",
  "key34": "KKvKpkitEhnyrTgqSEA2h8it2vvQ4DkA6RA6jpxix8HoAfVZ6moZaA5nSfY6WWvobuYqubaook4WfcdfTWk7JLo",
  "key35": "3tCzRWuQFBGJ8ceUqU24nfrYSVX4MGvLrn2foXjmpRjC9bCaQxcPZiSmp8GVMHFHYqUsqCiwdpa8mVy41tiH1GjF",
  "key36": "iRmxXi1H79DQni7i5PrkujtnGXpeVY6Wdab8zrHYVhvZjPx4PKFNUTY2M7cr7SRusHxzWyqZ3n3BHY8bxXLUSND",
  "key37": "49qz1z9Hfo3icY63rANVKSzUwQknLe4swhoBMU7mdwmDakFUNh8G6tyx4sEVoW6XJ5qcm6yMtb2RnQS4GhZ9FPjw",
  "key38": "2kexUqHuH3bffcRPQP5jkUrz3typUXDHjtJ9YAsQioMifKidExVG8fFktG63MFzrf9hRLJwXptkL3Y25P4tDx5Jk"
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
