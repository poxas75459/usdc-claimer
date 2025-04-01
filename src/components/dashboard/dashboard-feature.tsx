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
    "PmHPLvpWQGEWZvJDn17H2toPBSK4EUWe5EXoJAN2acoasdG1u8w9aQBChzzGkPjqLgFXAWezm7i4S6nNM5YxGsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FiifwsZ9xuAqviukAQ7Kt5ZbsG7uHBLned3FkUAxm2WtqBWj9kyytfMdaUi4ANLgKBEbJ6UA7acf7coR81X9Yr4",
  "key1": "2w8XKCWBFzkSZgSyPY7JWie4Ksnj6UH2VK7hp4rtkyZRob1mk9oFjmdPng8HsrAzkFnmM6iGauksWBTG5eFAKism",
  "key2": "5fxfrpKRpCABbPX395Vekgu7g5x7hm22FWPAhPhfuGy5MAin2Sb7Etp1k9CgZJihreYqZWGWYc3BQ3BWqt16yPTe",
  "key3": "5vme7rX61Secwsw7nZju5aCzwxyDAKFU6S7bVVt52ArhNX1NhXLHhzeGpxxxepxbSrQmE4juFeJiL2Yb5ccEZz45",
  "key4": "4M7CYxbbsvwb5PaL9uBaNyrvfaCNS9D2MN7Ys6vbJ9MrQcRbXumNbtKQx7Gvyu88ZX48N6etU6DSpGWADnAzkxT5",
  "key5": "4jk4UKM17Yk4gbzqWVDRmFShxvqrFGZ1mxSbPwTJYhWxpDXMaYxbDgw49TA59iDaYjPm4USMuqk4JpQ4zwgYSSFu",
  "key6": "4Br5PD838DCL6mhbPUbuoP2opBKnv3tJmpG7DDNnJVvgEx8AZ5JyNVdgHoewbW2vMkAsWJ83oMtfTT8ZtkajWDZq",
  "key7": "5tkzTzJ1mq8gGRuBzvdmBDiefWpkp2KkR3RV1diVcqxdoWLfeKdL2x1WNXNVZajtEi5MjUwiaSET7qvG3uKxwNDy",
  "key8": "2jstWMx3KqGdBmJChy5hucoNk9YL5NiuZnjDYFKBt4bxXZbh2V495hHvEXFgfroiHcn6AqqzErdj5HFsFJvDoiJe",
  "key9": "SzQhhq6TLxqgpJPBLjSVsZZwg4Meb31N6R8tDvtMWH7EDUuP6muBbfpD8cebwS3aKiXk8VgnicwWiHNvkhpvh8U",
  "key10": "4tssUpF8S7KVhK1TdzN3SPhFa1hotQUP3k4UywcyqDuT4fqdnyYiaBsCs2sdFeeimqFH1VmoFNg7kWab49u2dNcJ",
  "key11": "2Rp8BQcQMeie3kLEBW5D1XTx25556JDvBY2B8XyQdS9uTQ4PL1x4iAhLPAhpLq1tCdD9A2dKHuYT9ot7kZhYnXuy",
  "key12": "poRt9YdwuHGbsNv1snCPhahmUivkxmHsHdPu5cRm4fruarojTQYwptHpfsJVNBD97GV8cxtpo2cymip5Wz4h93i",
  "key13": "4kKi4Gr847KxQiaKLg2q5TZpPa68QToZDvNWR9RXnWSLxtWQkyDcpHEENEvnFi6CWrZTDiVZkmzN4FMT1KPrHp28",
  "key14": "2E1Ev3Tn3fdYC73CisCaK2NA1tx593jqrLEHu5KJzNUBHynhBXMD6s3WF8NPeYMNoEuWm49ZyM4sGzCRzgTztMyj",
  "key15": "VRKeVSpn7VYMeQYsHqtnZ4ZE3XUDKcn6NTiZKFo9mfJJyqMTq6WcktmT84nLNHtZqf6Wizpjh1yryiYj6AXuD3h",
  "key16": "4Y3ALjQmdFUsKVKMEYLYPPP7AXPNeQR48L9FCR6o5NMaFm5aDijoTQBtBv6N8uLC9t8WAYYFag38LkY4tcPmYQos",
  "key17": "zBiX9MXgbFqrpcf1ZjcoksHrgsM7QrnYfH5bGuf4VqNJUL5UdVQjcDDEJqkNo9yHpoFCntmWnkqTZRLJ69p63bG",
  "key18": "518Gin36ZqDVWZVA6Bp3wNndPAhC1UXdZShbYws29C9fjDSgMo7gawkQhA1dGbeDKeauk1vTGWGxk2a7waCym3hu",
  "key19": "3ASxksq3WvtxLyYHk4AJZNkyXwmf9SU4QqgQW21PAVWGys9RFycLKs89QCTffLtNnpMpbsrkh2hwrDRpGprjydsk",
  "key20": "Cf3ag3trt3x6WsDkQd7m7fYAEWPezyXG6WkjGLamjvQcEkPVruXdvzWRa9Ui6axfrzvV9X9uKYd8KZTuL1s79Uu",
  "key21": "2eG4uUJiDf7xWBUcr9uZoDsuDStBF7d6hBnCrG9eZ2viPjvSyE8ejQc7TpS3tobZpDUbvrwEzPr2rAmFtoGU8UzM",
  "key22": "4mAB8GWTHXJUyYrDLiM8LShxTJ4JscXjg9JneBR69M1SvzGUdYacg9fsDimz7zVe9tsX8MdimTXVS5UibNu3AHfQ",
  "key23": "25UR9VXNLV35UjYz2hxp2qFRMAB86kxo14nEjJdDRAa9fVGzfELihLYs2q38PP7urVg7qD17q9AD3HWhjuDjSGpg",
  "key24": "5whk1KhAXFuQKt1fX6TsehLD1r3VvrFSZnPsoijG6KrcWAwVotQNWfZsdfV1UmKbzeTTXQnvpoK6ZVdwbF5dxLv1",
  "key25": "2wCKzLfdhZYVJJZv4Q9oy1qhiQpWxCLf8XssvoWPgvnr8p8jFmxjy23zzAEjx66GohxoXDP2Pepq9uzBuoexW3v3",
  "key26": "3uhAyUEJTzApG2DzUowmGUiRTQCpFtDLfjL9ARJ8hVHrpae1gm1WFeJc4LJD33V3BSxaSGdUVimpfXzya7QXmTpm",
  "key27": "4zhsarX9ByAvELTjJ38Tj5jYoAmq4iwkXeEoniikDsrGFS52rvw33hpbaJQMSVFk2Sa6phgzGYqPzrEaZt1k9hN",
  "key28": "5pJsjM93EUBWM8ArFV28riywBcpSbAZ2qzs1VcZPDdVgLtv8emuaRPNeaGSkcas9GKBH7McmfA7pxoD6HqJWrThb",
  "key29": "PocCzFb4qXfZexMd8MCxQKWCRwFEc1HNRATDYssoXNbqA573xviXmTd53VvVZVoHbDLX5kRYf4DjEFJvfVrziFj",
  "key30": "3Top5HSoNWYqqdpBKG1eFAj3QKUouCAoZRjhaWAXhRLitKJ6YPV9vh1j4nc3AUsTwdCAh6KNTeszww2FtYsAnFVu",
  "key31": "3piUvwTNTYwovtx1V5YCGZp9BvTqggTi7nJRehqD7bUzhVQxZ84DbnDPALDkpsBAYyG3jYrGh873EqHT1JfWoQ4u",
  "key32": "5wm9MbUQNbUrvRXEPqBKrN4MDesazTYtF9deVLp2i5SMqW7bJxrGzMUj3EgXh2f4xszCxpKTN98QHKWGX3xuHrn1",
  "key33": "5shzmnetju9EEA3YPdFpVVLLG6NfoKmwXtXjTYuFLXmwRkwx85Jyxt8XdF9yn85kHxspFSfraX8YS5LEtxVE57Ut",
  "key34": "5UDHEn36H1mxQNMAaKLkfF5AtTsd58xpco7o1AE2rHbq94tW2RqAF6z8G1R6hvurw1urKU2xvimV2xk8d496Nxqy",
  "key35": "4iViCN8n9X3gEcbQmkMXEZdbRnKsnSgv5sCQdqSmkPBHBSSbJFrGbNdMry7PHDteZ5m31TX8itKWoqEopJ3Zuugw",
  "key36": "35F6mUcjJPGsvNBuuQxdsJgGqPgShvMnuNf1S3DdcorTKScJv6LnjP32ruC2ab8Dzupb3b2Vf5Q1DKMUPR1bSBP",
  "key37": "3CxhePVYDnJqVkwvWjYewN64AAjk1v53BDdyEXerhEBKjSjPdPwDTFE3NMv7VVhvJJGbzfnTY16gsABAyk437WhM",
  "key38": "7GwwtcUT9cki16h4t7ENR9Sdippb8yPSrW9fKncau8AZ42wUAVPf595mVtHmFprXmkEE1KoAHYi4etQae8jdnNu",
  "key39": "3h7pqA4XgSA6NvwowdyVHhQEjhFhFZWtFdCuRcfz7mEXbB7tUWaYhHUid1BReDdsuav9vEUD25KkcVtHLPjtkQ9S",
  "key40": "5aJtLWaiBmfCLpMLecJdpjgvQfq8nTwXaXonmFbfKKPh6QdgNLXC78cRymNc2LFQydHqypjcrvcvAMBEJCprQbH1",
  "key41": "2sNxHbf6PTQFasds2Nifew6fk4J2LgGgKFW3UnV712fGKBf7SgYXTLUfc9k2gLBTuypMwvwkH5C1xSfZ4fqHbW78",
  "key42": "4BHvM6SPU38eTTZVFv5dEeqKHdT9WvpRANfo9jtPEsJ3qS7iGMqujCSDdb2mahKMcJD8M9usmB8dn5f7boJFtGW",
  "key43": "2sG4J7uLevjH6L55fC5Z2ToL6sF9ApnBBeP2hpz1Qwjmj9vS2DzRfWFzjn59ofm8L24cPuZyV2ovbsE6hrd1EcMR",
  "key44": "4FUX7XeRpF3RFMhvp1B9fWZsYc2oJUC8FD58SQJZBw9TXNqZ6bYrhnWkGuxiGMenLgLNH225KawcC9L43Hj5yAjW",
  "key45": "3gbjCZArceNVHFN2DjT1wRfXJCi5yiuqE4ARtzPAMV1W53FjDF1TqWfEqF4r6HyQGzDfu6cnBeSAL8bXoh16phC3",
  "key46": "3Tjr4bJRG5MwpUcbifudGkikxDDghqdUHKknpBnLDP6BPZ3him9FpN9n6Lvve6hthYBeWYyLV52EnGA1JxS9PMf4",
  "key47": "2Azs75DHZ7yFs3UZjVwo2kYp3FirSE6JzDF9S4BgC7GodABoJvrz8RfvhVdvQo5HdZTg9ShbYVXXMVgYFTuqmu8p",
  "key48": "4ZLMcLwYXzPrmAM2kCDKHsSnaqadYU5AgK2gHBXE7PXfikoASre59fyUM4EfYpitKAfQUQ8rrQAkGY2nMCMxRLpN"
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
