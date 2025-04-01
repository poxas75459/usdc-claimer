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
    "3VJmKffffh1ihCkyhWQqCSm84hzZbzvpqQd7gpqyJJB8qapRNFzysCFfUSjPEEyp3UkjVLLSgkPGL4Lo6oNhc4eE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ojMsXawcDXZF7AgifZriksPGtNEGRCY4xfgLaNA5qra8aG68cct3kJWHVCXhc1dvTQu4PuJTZYfGTcz1UrzyvHT",
  "key1": "3aTh5L5fKgeShgGCntpCWLEgupy8JY9txV4KjEtzyTGxxgCmayATkPi39AVCHkWD8ZgG9vNbKndfF65Hy6eGCMSm",
  "key2": "3nY7xfa3bVaFeCpmh2o8pez7oDEjQxcVpSMc5Y91VT6t1qZo8e7MFiDcZ6imP82VdheLbAQYTsHmR8tieEvKWYxn",
  "key3": "33LWmJrKVCFwjwBp8PC9avjJ5WJLXsC199pfQb32YTvTZe1QzianLgiNcsKYJEEnHu248dptuwpZBtbwzvpogbMw",
  "key4": "23p8tHmYeiUAnZ92nHAXAyBsnwhQFCdfgyu17zCxMPah8bh9waZQWCU2hCcY75V6gVc4P2JuCbEt1US811DtEoV6",
  "key5": "EmJXRUNBsUbfA8dH9babcyForv9DyvLBrgrLWmPQFgPVF5fKFgUV7sgSHJqABTPZpbVXDBV9pPBeF8huYFkZH5A",
  "key6": "3HXfn9AjNnJgt27SRwJTqdULCGE9Bipc7GvTRnS58Gik4vT2bgEguxmyR4HTPVsS5jPAeHnhjxbUZzrTJ8c1B1uM",
  "key7": "4WJqgGBFawiStSTD2nXEN4TAstFUfqisvqTcMQBmLxTAD94F4YuxZDSHaqKDnn4ngcugRNrz7hi5VVoaMGZvFwx7",
  "key8": "2EYW56npmzhQ1862UB8dNpo9JnTpn5QjiA8Jrcpyy6NHLB4ZiaZiuavmsVb6bKLh4cHRcFGtXgwTxVdKdDbnbdNF",
  "key9": "2XAjhMhYoQeK466gjikZWLcqmtiCCyVgvKWx2c9miaBiMDTxSz8j2HpVWTwpRojjhusxT2XFp3v3GD4LcYihXkqJ",
  "key10": "z3oGFgMmkbV3Z72rHz9toFpi4WCBBZfeH9WHBAhakw8nPDR9JvvdBuEypmKx3YTpjL3fzE4ksdBvy7wAacbn2oG",
  "key11": "5isxLpZrenhxVHt2FV4mKKgnkzidtyCy8DWiHkxH7cscGMV6bEJmYwqvNh3Uzc2Eir3bYWC5oxMhDDq8thrEcMpD",
  "key12": "5owdpLd4yJrX1vzLHt8EtSs3mjkGHeupb2JfTw8DbMbzXp91ZdihSdNrpiawQfnTi69RainGTN6jWmyWrXC1fwAV",
  "key13": "CJLweF9qarhs8inKEHcvRLHWzuqGUW2Cc7CtQXqZgDP5CxoDMXtimJ9bcbUx7eNbzeHUwuLTSWF8DXRPKhmHWYY",
  "key14": "5aiX9TgN9FrrnMgaFriSsMLdjvJumZnUMD276jMvNrXQf67KsPh29cqvgnp99Z7hkDNqezCoKbhTLrpK7todryz7",
  "key15": "2sx6NzQZ4GePyJQebffm9vA6ABws5QSZMhFn3ohskXjdUyNMuy7aDWRqhVpVED9b6f2Hf4u1StM3BoniJPbmyEk7",
  "key16": "3yvoh2sqEW6LQqjGJ1p7CY83oTwaBNHQpGVDQnQ4qk789X2FXtsvCQgBwoQVKiwdJro2JSYd6ojASKSUvc3WxfPj",
  "key17": "4JLUPF63og1CVPrKLjTVSX5QsHLYpbdCLp1G9348GYtd1BKRi6Y4bukA4fJ9xpZRbNBJ4raMnMB9xATQDyiUFLsV",
  "key18": "2kFqV1Nfh5cSmoibH3F2jw8MVbSxz54MVcT8SupCPC87aNdmRrcQekfswcXnFu9hjXzmh5kLZrgehoJpWQLdLZPc",
  "key19": "42UbencBKdskpdtLyoijkHHkmeGytZCPAGuvjZjn4jmi9N4eZ91SZqKw7V8ft4aGS489WohnqnBRCcpMuWkWzLou",
  "key20": "5epoqzXakVCSD1httetSjVBVUYFDcoYcUecd8WKeeNrpWgw6RLxnyXzrpdbeWBNR8NKva9v9zfSWbGX33XHem7S9",
  "key21": "jvX4Uv5ChFEw1RJ46xKTzQE3ZpfK4qWna1d3q9aFniK4pyapPf2C2Rhc66JLveEkQSokpYWy92AoS77vbadJghv",
  "key22": "4q9pvhWqMdZzAHgVJfK5hAFNXkumNWqHQBWukTCwJA1rWu3eCj9ZsNp5BNtXCpPZArwp3qRezkBpyDioj2hsyeq2",
  "key23": "YN2hTnej3FaHKcyUXYvFF1CXiybLHTuFPwQpLwHFwEdvgLer74NzMQSqTqb5AXJQ2YwxtVfnd765JZ6gJYNmEyf",
  "key24": "5gJiX1zCQK3keLinBUkv2wdszNaRofNLyeqqgecKvjBzqf1412f3WHgyBgA1Xs2mqcR6ApNK7ZMBMc7UWj7nwHJk",
  "key25": "2By9789GxKVnzkteFv6YbNsYehmg2k11aFi85zfYYSeGXaS7k3u2mm3Ek6iubAbKoeUftvmiDsoC2Tr3rqEk89cY",
  "key26": "Jzb84SojGDXNWG1KLHCaNT9ftPcGnqinC7wGf5QttFnhEA8G47ZoZ9jqfcq2L16u1PmS56fBJWN15UMkkXkXhUv",
  "key27": "3PEoAxoRCTmPLEdLmuMCfx4D54VNLRJ4zqBWneBrLtQcAxx2FJg4FRqEMQeNY6cq6UbTP8d7Z9bNmBCr6HtXTPPN",
  "key28": "2jWUaF1sD9v74JXuuxXDSW6eTPmkTfkbBZyCVizrapqdjcbhhKFPmVUVi5U7a7CXczovH3Y4bjcVD9roi1ATuvWs",
  "key29": "eixU4jfJus41jEvAfiFF8qCxF5KoDVyzprQeZv1yugjSwgxdbbyuSVus6vk8mpVhzjXKc3m7BLMr4R9HnYB2shS",
  "key30": "5G2BqHhLSX8VHHiJDUM76aMbdbzAvzJsXQiZqqR1JDYCGPrBAkvnNy4VqjQLcR5sEXhN5KMEg59qiMEbpRbR3xZR",
  "key31": "5rvjP3xPnt2a6HiSU4GxmBkzmpmTmq3MNBBh6gPnreYqKY3CV9LxdnRtodpfUfqrQRoGPzPBShfWjPGy14C5kxag",
  "key32": "5VEiKWVNscyhXyhRCECkPjDDYyxNCLcTH81VSDYxFAagfh1QZqChVxbTnLH8Mk4LS9VRvCx9zW9C5QTxXbmtbFu8",
  "key33": "2KCvRjKCKJQ1RLtpBroGfZdqF3nf86m84skcgTLzrdrkVwR37DpQjTA5exC2iA1qMbVZyGE4p3GoVB3gxEWFzewz",
  "key34": "47j5Lpi2EoF3ty7YFPKxeyNhZWpU22SLidX3vtzCXBWiBWr278n4pFgMZmszGubPwaKqJtfaKwbG2Lf97k68jR8H",
  "key35": "2iFB79ijq144s2yLBa5GdfvberbqPLbBm9gDMQsbpcBP7JRc4MUC7hPUTEExtsYZkZ2xaewWWfJkrSK9rPX86zMc",
  "key36": "5x29E9Sb25rvzHJYynH4zU6Y5Vuv3f8iPdueWkkxVHPZXmFdZR6PymohnEkyotRn1Uqgm7EyY8KSeo2yTAbb4NuA",
  "key37": "aFmrKfn9jYfGpeF9dAdr7rfojcm3vMBJDteJibKCE8yR2auCqkdFAevTok3BtWX6C2tU4zdGvVhZuTSqXLBZTsy",
  "key38": "1iXiJBZL8K7ZQQmS26TNKxsjRoZanFJmh9sphnewAYnH1M57fRoDKcuHzMcgb9N2Vwzp2zdfaZLiAWo6EYP7TQT",
  "key39": "25zTJ8W7YbWdU5Vg6BUm324WL2X8hi1Se4UreD5uwtDrNUkXYrAHeXDeuyT8nykAEiHqMLRu2bRBpQasN1hX9MTz",
  "key40": "3A69CUE6dueyayFbQdzUqrjaux7NRQHirBpFW89NpDpSm23kiyF7iMtDPp873EnKCGffJQvR7Sh8kC9mbt2jKqBP",
  "key41": "4HN2WuXTtUP5jrY48LuGMhoKpw51tdxS3hcCHvbnenL8U9bQyLUvMKWZ2avjGEjvw6eoBEa4EqftQbbx9cfh5JrP",
  "key42": "3obXcKmnsPwWzcXeXi1CtnuXzdJ9xGTPu1jtYkfg62AS6BXRz7fTqVfRcHNBTWyrMW25SFoS1qGF8TbxPSDx51B6",
  "key43": "28vrAfYK3sQqJ7aiVDRiNtGNCdhS5zuznk33LR8oAtwZ7q3bkNKXeUYHAAbT9wuVf6ART5ZhxAvQxq7RYujREoym",
  "key44": "2YpuwuFPYQBrFKfD426E4VXcTFLraqrgVBimnPRymkpiYYNLc9RNRhTsUUZB6wdzdqQyyqH7w78vmZBP7A5SQ6Tm",
  "key45": "3zmCgbU6HH69gNrz2NDGhDwekp7iCSUyuEhdxp2Ls1SrFqUHhKRAiHXoqRrQ19u9zMLvCShQASi8fGppbtMLQFBH",
  "key46": "2MtfMGruMUCNmNdZzfE7FFmGCFrySJzLsg5ds5qozzA15iu3cBP8oy8aLoWVNVKPdNbpqEAKTVMRr4KGjuc4scjR",
  "key47": "31dthr3mBoniwQ6G2TjZwjVWt3TktawwhdkRfEN4MvX2EB4iGDZ59DBLwPcc1qp3qkjbdmCS9P4CshRrHvZt4gMP"
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
