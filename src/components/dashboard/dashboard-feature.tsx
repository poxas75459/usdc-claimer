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
    "2KPWaVTTCp6wRhTYeTM1rMojndbZBNh86wpVqxKt4uzaTdgBbT4TimsNsYCUFNr83mdbbfyKtET9BrwHfQJXNN4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UMYV32zpy2QrkGYo5TXNp4gDPTxLn6imHDQAL6XApnr2DgJAXceUiGQfDJo6isjv1w7QHa5k5mMZcHxFHu41aTB",
  "key1": "27iXhKP8CfaKHqrXeRGhKwcdLanBo14b6D3TudBRXGFcBgEcyZXMbZgCsByLVbbfnxkB9Ss53dCjv6r27xaFu79T",
  "key2": "2tLDJaayhtstpCoatv2Rn97em9rXW1Ne87uw9WVHaizdHBhxQGy5eviWDDNqbtHmcUXY2oj5mbsJkmidD5WP714B",
  "key3": "4af7hbhCS9M4PWBNWLJMPwgrxWXaNQDFLD3oW5ZBpRqHYBbCoogXbupFQTn1M23Em8XSfqaevHhJEU1nyxbZ3pvC",
  "key4": "3azc61uC2wKpWrNUdKr94AjGrw21rqoZQikV9HwS6HPXhGVY6cPoQwVH3U6abhffnCkXNBJX4EnTPQA6r4N6ZCdQ",
  "key5": "JjRuBJU57f7ndxPu6977zJ31fQCdUVUpip3xNBTz4hdudv2UT6gdHYVRxZp6CSWTWzR3zYmY9dkdwhioCoADtWg",
  "key6": "2B4wA8FuoqfjCYgMhTkvA11RxF2Kuv8D7X4vg8FQ5Honr86dU2x3ArVkh5akgrhcz3RjNkWoNAw6NCTJp5KF6ae5",
  "key7": "4MkvGwfe5vpMZAzLrBbZWaST86RZftmvtPWnVexgMf56heXb3Fm5HxpTEib2uHHM8ySxEZ1WscGnHYrHT726zphD",
  "key8": "HkzqKboLZ3gqqa2Jk8DiAat1y5KQKzP4zgHP8FGiGBkmuDyNLyuUJceVJiWpHiuWNY6ZEQQW29denFh7AeH5PyQ",
  "key9": "4jfH49dMjEdbbsKhbwuoUooDyVMcXnRsKhRyHBkWzhA6UJMsCuqi8zXKE6CFSH8aDfrDAaz2NfrWc4cyWimnnPGT",
  "key10": "2Yzxd93kyroEqCAYQLFpkSBHYfGmQCxEWykAcXEciVBj65gRVz2x9faMDhaJa2FbqGzTkyxkLyqFfAP5CmLdxdH2",
  "key11": "3W1Wj9vqPu75UaX5XBZHozt7XVtuRdE4Zdbu9EBq2X6sYpco8Kqw6i1vUB3xoK7htEuGwNDyunHx5RaBPkcU41Qf",
  "key12": "2rZwjoMddmcktwLFCSNJ1WquAQBrdZpmqanj1aimRi7snAoZMt7fvXYxzFA1oavqHAJUPWQfmnsWXFfPkErxzaoW",
  "key13": "2tsJgho83ZxWaPu6qRuiTztNusiSNPexbuJKHXqyEr9vWF4cuWPepd6SRwTEVYsitjH8umL7u5Qy4Qg87V29QtJS",
  "key14": "hcPRU9xXCyxQ295w6PhCT5dvrFJoLRDfCfvqdWxLnd9y6mkBSWQRWpwLpRjcQWt68Jmyh5FFKty5SSgKAaeUrbv",
  "key15": "4g1iipCpH9wzk57qamDwiwqDMrLV3GbyBX21tDJr6qFGwPjtqmyNd8vZrZ8xXrNmZ27CcqQnEE39rPSCvmhQSnak",
  "key16": "2uuCKAdsT4F6BneMqpZykf3SJ9e3d8oKXjeDhJXJiiJzKBuVB9eaNZUHqq6H8Ubmq5uQMUiSHMEBcZuMhpbKpu8s",
  "key17": "5q7ZHNFpboRmGyVAqMwuuMFxwXYXHxtj5ySXXJSnBXx8xnAkM3xHB5mbxiDeW3SLHC4pNmQNemPAPQXy1cB7Hbkt",
  "key18": "2VZM8iPnhS5QSzuYpr1DjticN7nMygY7yGwQRp3jgb25PzVYtUAW9kNx7ZXF5apFtEuuPt3cZSuD72upuFPEqu8g",
  "key19": "45EyHdZqXcZEuVG22GNLjgKHQCXF77BkBoZiGSBCo7pzgTw3X755Wqib6CJhekGtks3V2vpBkez1HuTEtL7VKhzw",
  "key20": "3ZejsVXVDzZ2BBFQqKN59N6sVUzhpkyTGLD7Fj756Y8zFs8qT3RoEhuq9F7SaQA3RgwG8oonSC4hH7NZLQ7nQKZ5",
  "key21": "2FCnTxSfgKnWsHvas7KxBCGfrbRuzQmQMYyygzAaqfdSX2phbcDSH3ihb5QwKossWoMuTxVCxvwqgSm2AJpHLEMG",
  "key22": "67bosLboC75AAStqxmawcSFWAWsmep3dYRLFoD6aov1QW1Z51WkCXa8J2Ro1xj55Vxg2Ym5f1FMupV56SSjJktU",
  "key23": "3xDCuHfT7DtMgvwhZixUVV387hyn8B4nyo7G99epMF43jA8gkKP286cDFuv715qE2VJz8mwt9jse8f9bvGdDiskq",
  "key24": "Ekq2mKJnGBGK3NhpUSwhkLoUSJ6hTzWzP1HfqLsQRejUCQehFbCyGvtbwucT9wYHq4MWKekVE4RuxpjkQBph2Q9",
  "key25": "4Ms5DmL4ome29nrDCnzM6Dk5rsu1UQbF8F5rNvXm41ziCQRZ112U6yH9HLWzKo5vwSjA5CXxBpqULfwdmTNdF4nt",
  "key26": "4mongVz5mdhRKHVQPZqEauSVqvAqaWWJ7tLBAUHgwSGNB3H4CrYywG2YPoPNhTTStjoGXJPS9fKCHxkACFEm9VG9",
  "key27": "4BixpMGrjsxY5XC86dKefzSJ631fvjmqcoJe4y6w8DCvNe4z1mTRqFx64PJa6vXEX11sYbes7ewBizQehtj42R3U",
  "key28": "2ob5X8Nr7FBaDS8RPjbn3QXGXtMZouah9GBpxw4TafNGb2yptBGp6zo8e8KKxmw2VPAFqLPRSGrGGpzD3yqRoNUG",
  "key29": "4eRSUAgSBPuRJrf3yxbZKzqzFBZHbLdSPaMJHuWpyrNuoGkEK8WkGVPRXne6WCkGxWjmdNgnbqav9HhVJ3tvauUe",
  "key30": "2wFVsHibePdCC9RjGht4tk8cFGV3cbHKu8xVuuPx7Z3RrTi7yUfFDxkgns9ef61hKH7dXDm69ZCAdfcbSLi9NizF",
  "key31": "5v3YTRozhsVBbHBkWSyf2s1UQRUzhWtssTnr1rA3tc5VQV3gu9n7VCtdaj3gSdaBH86vuF1HXwsvoa2uoxWnrjMt",
  "key32": "3dXmnieoYuFHdNqJwEtWj29c5s14Bdyao85zpNQJHQQWjQwnZwXtfKHExfMo6eWnaCUwxVaDxev3VcZb8zdF6uTu",
  "key33": "32QVUC5bM8UZJ114aeVJnnLZfdpsBrnizYZenerFCc1h1Vp9KmNu8sKbXBGKf81CqBUQhnCbU5U64FkaaaBnfTZY",
  "key34": "PyvvfynaJzdGhNXGfSpj7Q5yN766Twq7jMm79yaUY9PGzJYFAaH5fSyHHdDRvwCa9mAqCBVr2fWG6KoUQeVw1Xf",
  "key35": "48R6rrZRrSNqL5fhPpoH9g2MMbDXvwvGzx8cPNjJJaj4XDcfgM427vSWt8JyQdcpPZsGiZoGtiB8cWAZspMXKtWt",
  "key36": "2uruBAuVdxPw92jMBAbTbkbES6XLmmpXX4uqZ6Jo8UM3obTzEHNYP8yHX4p6wUbP4TMqx97hnSwf2ciyB6Hp4jZW",
  "key37": "2YGQtmp7RXxgu4ANX7ry15dwRPACs9JL4jDdwroZ2sTGqy6Ay2auYBHVKTdcoYZ9CcZhWwzoHssFmt7yZSFKdPgw",
  "key38": "3n16uiJZ4HoSpvUCAgwUGfTqNRtQ33aaJhVVg5sAphfZhWadtrC4F43RnVCzP1dCbGVPyG8BoQgXCYV4qMoQQC7N",
  "key39": "1aDmXJKYaqgGXG5ypPue5HYaNu5ofidCTwruiX5NdddRSXuaJWxbeCBkCLQ8z79yvwXuryRmRzykrFjuT3D9d7H",
  "key40": "4NpMxumtYJZgqAYun6hML1WUnWR4zYbNj4GD6nwP2jGY3HugTbGYGRgok8tq5APf948mx7Pcg7g1Mz7nbGr3TEQE",
  "key41": "7oQBJvqWZQD5bmjVUcKqmN67ScsppBYaa7xZzAarXMSkMmA7fgECMZt4gjX1eRP8KyhefmGaYVW77Qbxsme9Zej",
  "key42": "5LfGNkA9FeC8tCwr9bm9DeHiyCgscDY7AoLKG3CQ8NbyEypGcbsCkDut3cmgEkt1cVVkJz5WGjYCQjHYCWdbrFMy",
  "key43": "3RAie8j6b8ZUryfjHCucxHWnTziUWWEE9booHPwJeiwMyxHTqdHtz3gVeQR1SnauwyeMC3kYZM1SHJBASS2bdwUf",
  "key44": "3MLAgUpoZ6Dvcz3WHhbk6kPRREWB9TZWpiL5r2xM4UU8CSPnR7zmXuNS7i94yYMM9b4PKx5AhSLPJaBEMXLrreiF",
  "key45": "22V1LcSKY9MD6mxNyp8NqLst1ocevfNRGXKaYtn2NscG4ZisAekjfzth6Y14KhXrbz7ZNUVKdXvXMgYg23kKotLh",
  "key46": "3yff4j3kz4Hq8sNhZ8FtLpy9YrJTk2usJHFqh2NvYJBhLJLxUHAfVHqWk6GDo7joZS85hRmDLaYVzSFVVm7cRQzE"
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
