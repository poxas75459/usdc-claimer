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
    "5wCzZaSnjQAbabZ9Q31PzfBHcdQT9HVNFwYpKVa47dwJPxiF1fyV3Bvp21yGf6pmSMjucViFQWYkhD5dtwUtQLBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63WDTb8W99dPtqg2BX8wHmC9G1GgGJhs8urDbJF49vUPBsvpsucvXc4Z9hMokdoN2mLizxyLy5FBT9FbK4hAz6rj",
  "key1": "N2i7gYbdTCNa3BR5N7vcJNojiVRr8zbs5ytojgteVdB3d7WKFN9K5zExiHkxxxSHEQDepdFJofWoc5axyThATKV",
  "key2": "2usZwnYgzh3e6yk6ajwApFoKQRkcUMsqc63WJy42jAQcW5gRGkAFV9GXYMj9MkmQybrpdZb8fGwQMah9MEteTDb5",
  "key3": "jVSSfRY34NYB645WCCjc3XZrFTjoJxwmiuqPknBGgDa5sn2z5XFhoVwt46GWqUdM8t82JLymHfJFQmvyxArcQRZ",
  "key4": "2JMyRxRCBhsctM9K9u5HvRjJ25JnxcSZypUhD1n19yEUFJMHHrsARdVj2uiysJ1isapm5Dy1tvLoCdok4k75bMGX",
  "key5": "3ZqTL9434uXDjk1xerh2uXChiuRF6tizbZTqCEau7nVS5gYDv5A8TivUNTbXF26sGfWo58YKN5P35xGKvkB16n1G",
  "key6": "3tBzvqh8XD7AjddQXgFFkAbs5sJL823sRS7g6utb5hJrUfCEBuNvxVrFvjG2suMgVyW4oT6WpEbmBD7vwFjK68Yc",
  "key7": "3BYXvUnwJbK47PNTDrf3ZTtmaVTWCrbWHaw43hYxPGixjTPwNDyThoU5YKXR9sSwtEvFWHYkTQxd9do5hJQLbVN9",
  "key8": "2bbGVJtoizqHo9r6HX2FaH569oVYkt7Ci4qsY4zg9FhjsBaq8HyKTqhzJXZhxgDssSRRFtm1CxRnCD4jFwL1JLNE",
  "key9": "57GqnQMDQPi5apqiBWopyXnjcRbK2nctZazs1h4P26xPv3yCotmoc2KUAeCQADKW9spyVnLvU6ECKNxVAEr1fpja",
  "key10": "5JdxDeji9ku9dKMF7e22tvQFZeqp24nA1d9pUaNFZU78PDZJVGiu2G3RDPRPR4NwdyHZwVsxMfCJpXgT7Cu3ApqK",
  "key11": "2Zkw8Y7r8XKRtpm9SxyiUnockSrmvr6v35vNqiLTDm6pYoEAUeVnXpzBdsvA7ieohD2fLmuzGkZKTPhEPAE1HTLv",
  "key12": "wkRpX2s4aS6WaeuzTwPZ9tbPqvu7zXhd8D7TAgmHXEUM52f2DQcfwaH7peUbRF2SMzHdHkWbvsh8wjBDaCeeakw",
  "key13": "cJU5m4Kq9wcQoZq2ytD9V2YqdRpFtPYaQgjBQ94YDCz6GH8p2rYuE7cWV5JL7q1aiiVKMJxMgGBKBwkago8tHDH",
  "key14": "3UYN8GECeQmFtdtYzACMKwRX88YSpUuigMUDYsFwB8SyeGSj44BHemuuGcyF2w8a2ntVZfBcwbb6cJa7QpQZsqus",
  "key15": "5qQbNdeMaXSM3FbtB9pf2Z91J5ag7VC9GNdu49e2YbomjATNpbidtrrsCXM2jif9N9jJsq96tkK3rJDm66Ajtffu",
  "key16": "5JoFKCUdzT2yJ7BmefLdg4Y9QT6GeYmmRXRqqFSGK2TDF5h5nfJS1LkiV9BmdLAzerZ84TAxAV6hgoEK31QQDSz3",
  "key17": "DQw7XBDZtiJRKpwDQFMfJ4zava8wjmL7E8uZHynRAx6oBQUb6tBcUrMV6B7pCJu3XnfJ45zXCKyXrYBhqYykrvL",
  "key18": "3iJvPzSRNVQMfDiteD4nawAjhHZHjcCHuovdGZ8vsTk8J1SgohkCCmn7bHBZeu4FnebwRZGadpwow7bnBeY9DzeD",
  "key19": "2rX6grvLSG5M6hpS7pUGoxf7MWFT28Gp7MHzE2hYQqecAhk1V6fN9haBd2yLUUuN7uxheBS1tpVCBuKbQrDUGnMD",
  "key20": "3pNFEUaZcgjbayMMEdSrJ3fwUApyR2PuSCf9iVTRjWGZXWdnFxFYbybZqNipJrjbH7aYjWcQaMfrMpdvbNtSDXTE",
  "key21": "2ea563ygM3Cdt2qbPFvgStJ9zu3D1gYReTRumQpcnUH1AbLxo6TBGudTsG3XQdgZ7deeWPLhJKHfUjiBZmpAvZSw",
  "key22": "4up8L8F3cFZ4Y4hWMmeCgDhxwEbNrgsKo3P2kh3BnVgYFH6s55pZ1kfnRrocvyJi7Dnpsve3ZgjRN17T6p3dhUPX",
  "key23": "4SCXi3ShwoFdrsuw25bTjp2cqVDRTG7E1a42DCydDdFx5Pvnt9U3uhhmyvzyZTzNtiMM3xXfdKGStNATnL9UUmYR",
  "key24": "4VQLbWS687f3GaSG4ezv4j38UtmeVLrAMaZrQcP84LoMezAMgv5b8ZVBFV9i2ubwuSRj161tuf6Hat7Fgwv34vCv",
  "key25": "4rQDE3LrJtTX914Vgk4rt97yot2vU6jrCx42rsQGpmmYn6VMnwyAQGGN6MpQkzwYFaDNyn2B1cakajgCM4uAAU6e",
  "key26": "5aLNvkBpRYB4jegCPVyPEQFcHU6grgPKv2M5zj1XgqwU3GrCaQbKJLdTwNKuzg35AvCaQUsEzCUbnh5hisf35WiK",
  "key27": "2YwviAppoDzUuqEWKZcKvP2Yb2ReXx4WP7Htyy1a8ix8rjGHaYbsauQYZVbVTm8nJaYqu7iJ7nNUrT3vcV3X9dQh",
  "key28": "5ngEEfpYDuheTaVg51Y5kXpHMz6Z6CkRSW4ZYCas2N3r5KbM8HnduR8nqgPAwcG2QRvqeCksxwuVZZgzVihKfNKv",
  "key29": "5h65S97SEKoEfBqqEKYL73YStmUQt4rEXcxgvTktBNmrAwHt3TcmwsrYgQY1vTxZMqZW1bVasPBYd3Q8yVyeYmXS",
  "key30": "2xHGU12Cf227NnmJNQiLQKQsEB3aNji8TYtgPCiyXhcyYdbNF1Pqq7rkSEwirze3HzAv9VYLteeiDK5YX3Au1SXd",
  "key31": "3rkYeAwQwDqjboifqtnwsdVbsU5pvDdDqZ8rPasPPWz9jXey3dEjnPoDkQU4Zs51a7FQnMTTypAypWUEF9j7Wkc7",
  "key32": "3xz3rDLZkptB6bd1UpDZfK9q2iwVhnZiDGo8mop48kKBdb7devMqFPQ78fSVhh9JdrRYEJjuXgifc2ZHBiP8ybur",
  "key33": "2b7s3veQrpFWSphKXbAY8BjUQZSLXc2MRvRbYWHAaFb2PBjF2dPCs8tusrBRjsKpg69HKS6cGQiytu1VscLH5waQ",
  "key34": "2skwW6cedtSMjCmaHVTsWztqEgZo5KWL7giTUWkyiubTt5PtnC5jZi7iVLq8s5cizNuDCPTavH3qs7Es2Zpk1CBa",
  "key35": "5ot6tgcsEGAkLzAKC3bKuzu7f9Y97eUTiTzgp7SXzGBhize2amC33PgA51ETJtpkAngVJ5n2dLYHj3Bd44nPyeGL",
  "key36": "ZEUBrQ5sJrGVD9VLnuvDx3859daTAQKNqK7qW7korQLCWihaEJM7z6z3SvhV66B1CVoMMQP8pWAUF5xQU4yj9Li",
  "key37": "MDS75ANhBNbULdhJFfgrQMUK3rCUEhdToXJLtDWSxq7H7YjuoeC3SJKt3PrzmQEncSKmkHY76hT57UxGpnhvBQJ"
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
