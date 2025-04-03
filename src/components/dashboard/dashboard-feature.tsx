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
    "4HrB35EQe46TfDKLgvECxoKsEfDGmtfbRccYq2hfwxpZ3FvMFqRopHKcoCQ6TCLwSp3qzqMBGqB6QXSaQh94MXYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jWy5dqSDRwRTSAQtZPT78TabWxDHMfatTX1GSrfiKhYZMc3rzdqGDksmJA4NTi5ckkB5StTjsrFgJRCUZ5PNzTW",
  "key1": "21ESQQVHkXkqqY94cH7M54HnSiFyZVtVw3kUHvZeiJsqv5YG8pxHCJS4rVPGx61rMyDn9EAieRtfgjaHQmpqx7EH",
  "key2": "4AD6i87VPfwPB3rNeEzHhAqMdxUEJuvW1xKMgsmPKdxBqTU1bUJwucoo5PDKVmG6FL4NGC8NFx1tNxaDfnTm4ckE",
  "key3": "5HXSfxmi5uZCLoKtrteFpYZvsdNU34K2VSqLTTwPxvEz3f7s3EN6xbgPZ9J2FAhmcCo63AGpJcq7UG4HYRibo29E",
  "key4": "4KdyYFbgwNp29SkTWGpEmXpp9WN6VfE4ajUyWYVbRKCNuGURdc3vxyDg4UUJf1qMrWvMdRY7z2J39SnTVUUaCdAy",
  "key5": "3pHxgZej5kX3t1qrkVRDyPHm36zPNRzUCkJY9DGuKqJYBKQnEPTmFbDV9kbpyh2sMmvUHbyCVKWkMDVduH3Np6kT",
  "key6": "3X99jNJxzLa87BjswZRnqb6jmpYifwZww2dtep2m3Mjre2upBB8MQyK23Y7LtScQeokLjEPBAi4YznWxFeC8JF9F",
  "key7": "3Xv2XQAgjjeR4gEGr4qJnVnb1yGGqj2cCbndvtULf8KcPGej7dM81idDZD3pXW5LNNz4AzX2tdZ5nsYDqgqbWHbL",
  "key8": "5pp8RkbmwjZMqVNYm6ZGKiik7UmxVnmUHVxnFbfBzwBh37tz1Fc8rnTu8qhYNJoPw8vKfU5Wy1kYmx8j5MTRicb3",
  "key9": "6U6noDgUABWxRZbuaqMi12ND8W8LaBxECY21VtXZqv1wdNfAyZZYpvW1Vcr7rpdjRAc1K3L8cRPuBUi1tPbcUck",
  "key10": "2fBrCZrpzqUt7ymp8eFJWBUicEb6jgEbQ8ChB2tTXeiaohfswHaADBkopnL342dmmDTNEvHRuhcBZMucy7sywSaM",
  "key11": "3KuQubSiLiENFx3GWu6SSfFs5m4xMhFqY4pGUjUKpMmp3UWRRZTCAHayTrXEBnFGmoSCUtaJaxxV1f6pha2TYLGm",
  "key12": "2o8sYYLubWXqbPnrawEx6qL7Qb4UPFrrujyV6K8RpvE8hxDhScv9HBu34umxvushSguxyWLH1xuyXKDbd4vbWeDu",
  "key13": "2FAhsxSSpDHvGb1TrgznpYUzcgpdsButjHLBJpcfd1M4rL7QQiooiKDF9gQpiQqtskQTBT7o21fA8u9tbgGMdNB",
  "key14": "5b8zG2BfoUSrjPjv2nMiRSdZGwsSCdzit3PbbgrbvZu1wsYQW6K6qBUoLzueoJYmESfjVwh8MZ7WsuqjdzynWmt6",
  "key15": "EV1xaJqQQL75w8e1qaMEWDEfmFFtYZfco667gQoYraqudFBR9bpATCMm2toFaUzvugwXqGe7JFoNkjCtBWsNet3",
  "key16": "4jYiGeeDLecskcFeWqBkCuKRxBxtKspz4kjTpw3XL9Uy1J7wY8VAt7pb88yLXkbygg4Q8kZSh4BcoGP4Qa7zWHFp",
  "key17": "647t5KiQEi43QoasMwsPckCfEHZ4ACYxrUDE11ZinCHScjuffECRPM77KmofyBsGqhhA5prXR9HE6b3VyEivqQt9",
  "key18": "64V6DNsJ6eVVYUimnrkhME9troPJHEvbREv33uDrA6nMgMwg7ETu2ggSjnnh8UXCrfCfS5hVsDD7CcCz4tqSXjQ9",
  "key19": "zPBE7m8SqQCRzFH45mY6xGahb1Y9v7PMURCaiNzJTChGbXAVUKFCCAAQYB3ijdh4nUG9XhHTT4NBcacBrutmGN2",
  "key20": "45W7C81B1AcpUFSEUPULS8NHyFjNE7PWsrDT6fF5cdC9q4xaQ8L6popYLyCdRmpag88YxarrqTYumap72EFWsSvN",
  "key21": "4NFVfuMJBD5MPvCNFwr1p4qM3b5eng1Vv99Ug975so5XJY24QVUkqeNxWh2MYDvHtsJyFofZD3p83moFwFtgoRQq",
  "key22": "3TMFWvyLcLgPAmikSnguhW8jcxdoaq5sLrCMCKYV6fsCAwcwiYyLamim7XiYUZmQxkNPnAt3GVCDdQTEACwYA3ys",
  "key23": "3ZnMVtqLtNbSh8G5mpBL3ULe5VSLiSKtCw4JSMr4Jo5zVntaegSgPUrjMk7qwwzHeaaEK6w7VGcmWD1qeTVfza49",
  "key24": "379NvdwdxGTWi3YFCEEab2r2etL5wqz18euphDza7ewRkwRw1S7V9LpxKzNDEeCES1SofWSZetUvKmQoM73XSoZC",
  "key25": "5YxV1bfm23J2ssfMMGVzmCHFYGN91QCNnebE2WuF3b8g9kPg9goRuD3a2NT1FSRiUzwYKBcXdJUtwHV1dzantXJb",
  "key26": "32jWvmo7YYckoSQPCCxkUXLXiowXtH7of8VEvmpt6KqWN5zYq6hQAdopAJis5Cg7VdZwjQLGRZDLMv6vTD1bZcAP",
  "key27": "52ZuryZwPEEqBzU7hRoFEXVBMbnLZMsG6Eim41pEtcjuNTYU1aSHPd3T6i4JJdVzXGhBdXHHHSdELET5fZB7AWJt",
  "key28": "4U4HUahSXfCbmGuwnW4rkGecBh9qNnzMzZdqV5gSExhE4fU3kwDihKb6G4iAhiTj9W97noUrhKwqrzAT5SavfoLq",
  "key29": "5LohCQZV3brnhnGyCk3HoqavfP32rRshLpSiZW8XH7YLDgVE5hBkMh4Lmn4WJ6KzeZDMemLzBNDjiEkZyC6f5Wix",
  "key30": "3TbbqaXiZDzix1N7pj1Hq587dnQ3dYk2rmuxVY364VPRD2LMrZ7zt9qFpJzic2RSUGeHuqZekucqHWbJhBZkemcs",
  "key31": "3uWgorBwSSRjEtWSJLeNXJFMTsGg7a4Q7uCX3L8KP614L9caJ3MewKWV7JXpHGarzTcruzX48M8iA3snxXWNYMVL",
  "key32": "4tydVSq8Y89ycEVwj5JHGZnsCeBQGBXBJmysYztep4jkML62oVWYF6QYmJnCbQbpyht6vwXSrYMZ73szNNqEQqXt",
  "key33": "4ZfjUkFu645HjGycPFhCwFHiFFd5ZM8FzuLwZXCkLsYmaSs3e2XQJbVE6dBaQvPRpie7fhbrumbTm8ebfHeegNnP",
  "key34": "HGFP9RkfwM1TdvoVqBgNSNgsTDXsYfgsBcT8Tv3kpDni7q1RtJTkLjmH5gC7U4wSeRTaKugnz3NZPqWLNQW6L7f",
  "key35": "5bMiXdawxPMmXB9f5cY85aLitVDfhQq7myFMarfAMharfHxoLHxU8bTs587oTn3LeQADS88cKaE64G8rDTaAqfZr",
  "key36": "kkFSDM9YW3KesaBcH8mQ4yjJy35yFet3N6Vshh7X8ocsNL7hmXaWg1sYo3RL9rbpamM91Emm66L5yzi5aX2K8RJ",
  "key37": "NzHnABjZGdC116X1JMymc5HPy7bsg2PBZ8GWEFDjaPCzV92EhWAWQXu3rC6fT13AcmTvfPR3Z4VFzTb5ML1zuA5",
  "key38": "5RsZqbq1gZuqgqTibAsNvhMFKeJiggDN1L8vML2YMxwa8dM8U8xvwEr9hNtooNFZerk2gRcF5KfPAFfuP5q4qQtE",
  "key39": "3Vg7HCaAZ6ZN9JeJNPBTDF29C642z6J56NCu9kQjB7xijogzVYpifggrF3pbkdU5awE6sh4NtGusXrWUW9s7j75c",
  "key40": "3p2Vq8GWKjY6ykzHbUT2SKwjbEoHRK78q7ttaJ4BqxBnJTaxq1yDVsJ4yBkvuPwkuR6ZgaC2a4S5sfPi9jBE6LGY",
  "key41": "YaemSPxGuoP7MDdbLsrVDfvvv7GqSugJT5vQE9CKtqbixQxxgiZkR44aJrbspm1xmWTzL6UpQzTAvCzErUpt1LV",
  "key42": "3wmaoiRDfecarkEK7m9T4rX5Y3okUsva9KEjzBvnekWdZUkpghAUxpJUq4rFJk1MbuyCVBvxk5ge5fLUSYA4HHgY",
  "key43": "59sxdqeJBjAwPnPi99E5N7kPq3PoQ7kZoSiU3GfDfhrB1YRvshKZg643QitBbxqLPZCmhr23Jx4beKyu2J1oGFNR",
  "key44": "2yQmHknwKokQd9WsyDYG212SF9uE4bbv3RGc3F5hbzfxzPp8YMKct4UrYUC2CdLEdjykp6WGPFs5LqD7XR4jqTaC"
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
