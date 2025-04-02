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
    "48NtJ2zL21wMLsRFdoWcNaZTotZttnkRPddUbkHa1tCTx22dbLQCDFnemwV756nAAtopMYfEbz6N4S76gvBMLhH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XzvDpMjy3SJepANr6AceiuPH8ow1FWNoBqWTsA8sCpx5AN7PgcvyNAmqZbZfLu1Yos4XYZyp5TNDT642AUNoviv",
  "key1": "RpP7KUbWPvCYS4zrcgqJ3tM1CEdjoNQBtd9EKjVRQrJptp23o7p75pAvhPLFRcUojHMpjzjW7NWaxyUvkh5SCCg",
  "key2": "3rKzUksM2aByRnbrdrptXvRY1mSRwSvEbGUP541cVjd8zVHD7zd92niWB2AsxTNhnFwXgGuRrzxhC8KeFr1weHoY",
  "key3": "2RireUF4oFrERseLNnMHxEJVzC8JPbeBuDWqetpcFpCV8djL5g8hdh765R1DefskYLJbQ3f3UbaVTKrkzcWTY4rU",
  "key4": "4Cg6yT24H7zJtB7hrSHbopwTYRZdDXhnatzJTk6etq4wkyNoJKy3pQnUS2pUajDkpNS8HMeHKDNqeoFerpjthVYY",
  "key5": "4oSh5BNABejrrmQcvUCkRQqRc4AT1CguHeMySbWxekuiRTrFwCJS6hLFWXh9Y9kBr9yfwWoqLHzZYmzeENQjoukL",
  "key6": "5z3vbLS2CVbu3VDYqeVUvX1KLpdR1aHiFPRXfNsSqgBjq4aAqJvHxdN17kNrSgi6m6oHNJ3VmWv28qqn94ioGvz",
  "key7": "5Mijyd3zgdQBCwLZXFo6m6bVWDiaCVhC9XQdGSqVB73DtsWKwCi7ZjumHPiWyarF5g9HEgAaMEsyMwXHuy8JpZHK",
  "key8": "3rTk9XkjKiyZVjeSFurw4NsmUw8LQBfbTxLXXGHv7A7opkrGYTBj4qXVJyFkRBBSjKmpW9hh3Hj2EzmxpTqb6Tkq",
  "key9": "3b4YPrLbwhmfcGk5Rp7FeiLYUMaLKt5F5tHaPvWTFDVhwQdrTmgVHutH2Lk2yC27mLscGVVD3yNSxibJh9Hvqysp",
  "key10": "3DvmTBc3XsEgwE93Tf45p8uB9ACWSzza4vJeJ3E7fVxZV7w8Q2SKJsfnSw5g49nYSswC3pnAcq3X1ZHyQPwZiV6R",
  "key11": "2pkuniJMwA98kRwuJ518kEXD7j8UgBctJkYEVs8WeRAd9mr3737LWqXzW8PpQh99foLk4qfnNN2HCgyDv3ZDsbTb",
  "key12": "2yJxpZXd1fo1d25bfvH96iP3ba2G8xQY6sBKVnaXbYA7wZ6yBL87US4B7ofbtMQr2ttLc23YT8wFYZVBWU8aYvL3",
  "key13": "2Cabg13WYeZwwYFkHCsSnMq45wtqKMAon5K2rMKnZgLpar8uV7GKv72kNzeiGtKMvyYivntwdmE5Cqh9HTi5EDX2",
  "key14": "iDGNo6KrqW3wimpGRzg9aE3QsGdVLQdRtNpBBqtLgPSNJqZkZcuoPc4FzK4rJQRyybgHbdLY4RaRdMQW3sVY874",
  "key15": "5rnopJZqAEUUy9rYfWKFfu8dJktL5FdJmuiffbe7N51NWmdkxHmYNmycQiiuFYiV86aDBuw97wgZyMe7ZeaYyS4g",
  "key16": "5qACbRwoVT7DeBrDqGLbyfaog7cxxsyRT6BR7Mi7xcFeE8KZyuV8MVFUPM7Pgyndd74sG4zAiFMm8AheSTq3B2T6",
  "key17": "3Z6tVaxH12boESVMk7pEBS3s1ei83HR5jN84L9u7Fnt3hPGCwUuAKrnz48xrvUofikN5S3XiUkGKVQmg99y6ge87",
  "key18": "JP55xKJFFgDjoQ8yUwCTqtaBhfeSNuzxWNKrdUzGiF5qxREmNZpY7aUK1kwfneHovKoAz9oBncyGiCoRwqEsuHT",
  "key19": "59eZxssWLEWrssQ16g1HgtDw7JJGZGRfGRjqEw7VtiXRh7upuXDj57Uc63vgMq7viPZSUzXnhy7UXBJDWdF4kQBs",
  "key20": "5PhkYkhY5nELPXrjnoWeBZ6D45WvaaUqsKFXra1w7uF2JaWWR8v2wEYLeem9V34xdbCDcThgMG9bp5MQewp7kmHv",
  "key21": "2dirvoNcrLEnVJ7YwVMwrKtD1ZmkJPBWZV12YsZT7QByLQ3sT7bH1LNNNACvFDbKmvdokP2vfVZHk4vh1nHW6MFn",
  "key22": "3QDHets3Lsy4CiQz16DkGinPo7txiMrDBD1s4APphmKVxj7nF4FHX1kmXA7jSaYDqrZ15xr9wKBjB5zks8qSaBNV",
  "key23": "5voK1g4d7bivFjkXjA96qg4pXUkUNMSBiuW333iXd2AXMsgjLkHz3QH6hNx9Mi8JE8pW116LJLXSqav8W7mkNKzA",
  "key24": "rgBGvF8rbRaF41h8QSPUJo3A1SKehsgiAB3EixDPojMTsZAb5YQc2c2yu28b9mKb9q3P18NWC3544f4pHMxbwYR",
  "key25": "2ouvxyKkSgoscLcvnSDnkw18PvNGUM1dDscyGPQUaaQQ6vbRSm8fRuKU3JaBhCQdsPeeqMyVMe5U98iHtFrfgct8",
  "key26": "4qeMTKFDRbUBJgapXPExpvHGaHNhuE3Sx9FQpSsBEegh9QMpy7tnLsBJDnK2HAVeniYmVh4yp81BMaR7Z2FZcLgc",
  "key27": "2ZQERJPyZCJsjfChsbpGuPbFFHG8sSim5pzkS2uKL979CHF5d1j8qebYbbhTFhSE4Hv9Z1T79BkvfkbyHKPt2ijU",
  "key28": "2Ap7q9z8m83gAGBiQa4f9tvncdC3jA1nwKnLDtwUKAWeVVhVriQFpbA2f4xkeQ856WwNiJB66pj5rMVMc8Hm6W8L",
  "key29": "4kRbXcpebZbs4MFp4SzKnpsDT8LP3dzjKPFX8MCBhKjSVVTPko1jdTTUnZ2oH1KkgMft3PzwmkabiTNeuHRxCzqU",
  "key30": "cAAestBiGMgXG91S7bZJUdvn36UEy93z2PZqpbtbZTQiobLDZ8rSQB7w6YBbQhbkfqdDt8vysu4TDQd9MTEHyLr",
  "key31": "2MjtNjeuPqcs7JCrbVJikFfK4sBCLdUZJubVxtjTCLdWSon4jV4iK3bJJya4wcHoWDGUwU2vM97fwopHzzUcugiQ",
  "key32": "5efjQmT2kwHFqh1TQJR7sEwXSc9QXMsSXYRbRLzCvFJCy5AVQmaETsHvT47AaandFjayLVHW26MqQdd249WLSCNX",
  "key33": "2mJFyGzGphTkAuhzyDK8jcZGX7JTDUPWCapz9tQXz9351Gry7LUNAGMWMJkGuBVyToy79vro4aYHTLHhBFgeTyyk",
  "key34": "dLc3uxe4jGP4aDgMoTsFDePGYGoQoUmEkj25CzpUE5L28SKwQjBcv3diWWNRPru8RGJidzTH9N41zcw2AJHfiA4",
  "key35": "32bKtDcyF7ECksGseyHf89kSbhaSR1eXHikJP9YEhZNgRtsi7nc1Fn9MC7rseozatBfWeRUJuTetriWyAeEPaNX9",
  "key36": "4QYSSKV3YGSTxsCjYczzcMcxqrRKfNFsm5m48cdBZxx64uD8WBYo3gTjyx2HFs3QSkmeXtGYzJgE9BdToytxVvRU",
  "key37": "56kaxJLowoyvmB8rVpE2wdBSKUTk6mwhPaKpbxJ8JiGwsRA4wdKvuTA86mcLffyBEwZj7eTq9UD4Qef2sMVFSbs2",
  "key38": "2zqPgbtnmP3CzgpumDYEFPpPNbgz5ZK5CE1juT6VpN9RvsG6AVVegL8UY1D1TbReVBePqXD7fgQb8YkzzXkBqpyC",
  "key39": "5p57FiTXfGBGksAxYBy7SURP6qWUkATuiRQMRWWaUgmbGLy6P7Hc6AGCwoZeCHhJhqvATK8kNqi4ve1ahyysAjDy",
  "key40": "3VgKH8VHbBDCAcH7PZgd8bGkgSfCyWPFJqPUuu6qFGGEKDYgpFzBVUjpcVgP8AQRGQnjAtgswBZN9S3zM1NYQhAE",
  "key41": "39C7ppaNwt4CyWbjDMKST7dkwGLZh6S7Lo1U9VCneeiqSE5WP3ur8WFznJjMBXCQTYHEbf8UnNNqd7m6rcUGXxpR",
  "key42": "584oGcUwnuE7o6m7wszqqKV6eWCYkqj5N2tPUYx272erf7mHRX4hTGGCJKScy87PHaSizQEGxjzRFELnF6FDeX38",
  "key43": "52ErW3RpiN2irAbhRdtPsQ1Wsm9JnQGiMnsAdqYwZnSBroMpNQaLVeFjM86aMqcqWCkMhV9SfpJQM3CorvQNL9bk",
  "key44": "2QYKCpoDEai3zdwmrT1RxRkSfa439fN2wW8z5VH5DkUu9TtQVwYZqsZQbowDuPPXnM1UwtLv166ERLGXXhonPt6R",
  "key45": "4CYDnUtXjLGxfGrnPPYiwVXk9tnW9FwuZFSstXH1VHWj67gmprH6Qq2KLCPUC1NAPd5B14Kc4oPdWKWtRgaq8vtU",
  "key46": "4J6aVUufZb91TN5r6K6B1Z88BoJczFfq7XX6VngRS4Zns54wgpSdtr4BXo8MgRauXYb7vR6AmiACojJHVse8vcNb",
  "key47": "4NKS62pAhB9zmwv8M1tv6rq79rb4AFdAxxRfEXBrWGnKSGzBqVvTaYzToUZeaFY9rxhDzay2ceU2KTkTum1cUKSV",
  "key48": "3ecGnnp33psJ3xfTWLFd5QD1KrJSEqFKnhkZQfbtRPjrosXXeNAN7kNeZbzeomuYuXE2Fgv7nhKKhnVSP8EF9LXb",
  "key49": "4KREU6uGchGdjWULSUzB3GcPbpnbHJHAUWSGVowYkqFxgn3vR6z9mWQsqUz6nwah4hV3zEY1V1cyyGpixYh8Xo5b"
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
