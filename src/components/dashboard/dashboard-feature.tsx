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
    "3pw6tSQNyQGzb8iRD5bWmiE8hNHiGULGLa1drvNm7thjYs8yh2KuRmt69h6DFrB6thsdrQRuux5URs2XtUyaGKgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VscgRbDWoxhp75oYT243BUZeUXtEqpMufLEjaL9WCKTB6s93hDpq3ASHi224JxC9T52L8CEoyJHn6h5pgnGHXhb",
  "key1": "3rQhEGXDXMFGrGiWAcFyAA5mxwb9kjCckKuVetTvvdige8JM2ENoBhwUPYfhF63Gy4VtKuBjkPBAtRVCiuWaaSSf",
  "key2": "Yimfiknu7FTXA92apsMmRc5B1S2uMAZLz9zUU5U9Dk5e79pnw8waM4GYrUmZFFQZ97s3CXusA9qARa5Xr8wjLUK",
  "key3": "3y9WpzuAppHv8smUbm6VU5TUHYCJ7tA8rnAv11eTuYFrBRMaJFrrRRdjHZdNFvaHDAz6s4eHyJrtk97YHkYPESnt",
  "key4": "5FXq7yqiiEbKiZkoqBzg1CMfbnki3NELqB8wU6x39ydgH5NtCAy7o9mm7rEifP5XhLLerRQB5FYHNEH8VfZj3uDN",
  "key5": "3uEhezM89wuai637vRzXuwr4zRBxax2vPzE4YwSnpEonzN5U9WCqz3DcbPFuXZUQeN8BoyxQV7zdegwFwY84iiKf",
  "key6": "2QD3EEy36SRognQ7p4rEtQnBf2gfn7pVXkEvUXXPnWrULxEoPBzeFKgmQanvsYDafjqe7kqZASLSQorMp4HMy4t4",
  "key7": "5MyLM8cFt8hNchSgxYfsd9TkRtKFe8SWqTtA1xBje2dZpUzjz7fQCSHnngJJEPutBeyfAAUSu19tGFRvJz1bQoQS",
  "key8": "3j8UMuDJEUrbYr1TwvGLLquTcNk6cgxceCEKy62tcgNYP3nVWmZcYR77mURFesCsEqLoE9t6yjtfaUQpiLB114tj",
  "key9": "jA4rXZ5C4LrFpnAFaZv6j341kLvT7JoAnW8zg3A69tZmFy4Xy1wewHmqfLNz54Dyf52P4yg3TbA9eajdsGj61rd",
  "key10": "3pGhPScR34sZdD5x9mh65mPzqinHYuCReYGooHuPbvmX9ghZMAcZUGz2XWc9pUS1aqCNQGpmDX8qU8Xkp5zgxxGH",
  "key11": "2yKBbWTMXqUqNgykoQJi8QEXyhU8VCWYpt4HqNCvD57N4P3TgBzTFhnuUooJHfU3sJrSe5XmbPsjZPp1n68AF5mh",
  "key12": "RFaKhjBhU7LX7ztB12EUDtuUahbpiykrJA6JZSn3yKqUWnmunQvGASq5dp3vUdpXjSGT2V5NCDrsQuGdvwEgVy4",
  "key13": "5wWAPtypGYDi5RMvxkm7Uu2qjUeASNyUt475RtorSPw4mUQmxbXhwUme1ZcsK3UymrVEZ4hTznHk58vMsNfypZw1",
  "key14": "5UeUdRzRVCJahwfzYXUBKP5KkyiFf9iC1ux5HTaZSL1nKLAhMyQmf6H1LPi1Ph31Sh4odbiMrR5SG9SMgoAXi6K3",
  "key15": "4LegxQ2uAemVjACxobAF1fqUMwstbhnC4PpUviq5J7w9EgCuBpgv36yw7RcYWnQgMZNnSDvtiH2i5hskRhgeqDTc",
  "key16": "3pHQBAGfR8JDR6QFMoZ7UehuNDACDM6kmZEroWe7PL7xUKsP3HVzri9PytbkBGEJVUxiBHKMD2to5jAAxz4sasyt",
  "key17": "4pXDQGaWA7kswjtoWLKnSEgF4DpiCZN7rnds9Zi5FT9UE9L5SviEUomyVXsMQdaVxsp1rudshe2W471KvyUJqzJm",
  "key18": "3v9jyx3s7cM7iA59QAn2mjsUeggrkmnNJmw8Gze9nk9d48GA6bDHf8nw2e9WZYkmDADB3ooM3CVLf4bfyN5qtzcD",
  "key19": "43cuQp87s6aMAkYxk3WkZjg8GVVrSHHMCLizsNxjfckJnp2gE9d6mLad9MqGiaKFCcU6QrCb5nHUfhTugbSBLNtJ",
  "key20": "3xwpcL28jAGLARnqS5STQruzos2F4arY1A4Mf5QiK2My29Xc6MbAMAuJevKrzLX8WGVDLmhzkoEvvZsYsNC4zYCe",
  "key21": "3cwy8Gspdxn9Aq2MnTEGJzg9iNh1brFPyuxMqQZ3hcqGJkYqYnKrDVGAVYbp8QCx3ZjmFrpk95kuNfD7oQZ4Zp67",
  "key22": "5KaBTijgyoVgFFBx1TQbEad9p3rig8r18gzLjMcfALcPgn9aW5iU8RvKS2F3tYd4DnrzuU8QGzwnpt42EdotavtM",
  "key23": "3iToWB2AYGKmqehmQ8mnP1BYGVZ7JrzLTiskk7FRa1zkYnqaX6MsizMMUaaCe1TpiXjASk2dpsurYfAk6Qrphki5",
  "key24": "5aVbJ3h5kDit9wsrpCVX15hWRAR7EJNKKVPr7a5uZPjTvtRvVFwGYpt8caYAp4kwVmtFzQmWHkJj5JH2rNig5aEN",
  "key25": "3rWGcqNQgHrwvKgLNyWBzRxnd2kKBPpT8wZ618CeHB2AttGUUGrbJ3Wn9oMoMXbAdLnmQKuiTatDhmfQrmgh1126",
  "key26": "4Te25u2R1zcDJVKqmSCkgzwt2PncWSxipaxg4zru2szdzgkvbxTV1cAqgmjaoDx5cJQncwR1pWETrG2PsudTApzB",
  "key27": "XZrzh8WLBXBKvuoemNw2NwUhZ8YYgits6mCFL6vR9cY5kCxGPsew2KyMNz5z84yTcV9FK3ZSz9JznGEVe3JyNCF",
  "key28": "3YAePZ5yuQkEhxH2Sq8PtP98D6PLyNw7foCUaZXnPkipJEiyrHmDksHt9DWXyuTsEaTRGvm833gyeTTP4Fon9FJL",
  "key29": "2sHgV4iQFHaRb6UCxZu6rb3Tj39aryd5NE44cEnrYBe1knmxFpifcr1hQxdDzPUimWEwqCJMa5xGSxzAMPn2KWkn",
  "key30": "2svJJ2jKFDV6qrxYEurDkyxSzccAB2M7xL2pPFL2eRSsSBPBDL8Naenf3xBknapPU2LRMUnX9TpnZMYVfaQeWEDn",
  "key31": "3spShnjgxet36r2VUNSUUc1AnxQayKw4prjn8MPeaRPv1abWw2tviuU1v4KSrARTccn6cD2ZixjA3vnTixT5iMsx",
  "key32": "2NPeRrnKpLZUA4WjFTxoMiVV2dnvoKZFzYNqt4woAkUYVohT433RV85woSMtNiBiPo7aSsMgTAeWLqoqkfVSKWZP",
  "key33": "61ASyetXWeoe9HVQYBMSiJhoZqfEVAamFSJFcQS91GJ22C38ZhqoaAWQUhceZkELtN2ae28kCMKXZq1xwBJ9Ct9M",
  "key34": "5GoRY3WZRB65wD1DnnrQzgMoT4yhRHukm1FvkXwxDwoGKAhqcLWmx9JhaE1Mk5ABerJMzbqvG1Wqw7vtycEEsmCX",
  "key35": "5rUjm4kzSppsQ2sSrwaZCDiXPyLdwUuZXUbfXuoKwyjbgJTDwGeGVHtptTrGHYezr16HXtkQaxZfpZWz6fLjpJwt",
  "key36": "63WM3nVm3bS6BUkTQELCbK6nQGThjgKQaRfA8FPeK1o3gbZxAqbsmBQtYrUk2y1pEdLhPYYmbx2uJici9TibShLo",
  "key37": "362j7FyKXtwpjtyg9NgFJ86Go36ygERukNDia9UqYnqtyshJgCHB4Zybk7wvGpCaYyfsTktTapAYGpXCKSLUvFsR",
  "key38": "3xVuSeCH5BbALwTKkVjBg9LgdgSEZz9Qe1c4Ft3NH1EvBdeZ1r2QMft1VdCQNEr3zhVrayGM5YJkSQUKQJPcKvGT",
  "key39": "1ZYbdr6Mt1GoANUazoJ9buukSvGiM4cGEj9t7S5d78xKUx4fhjPhbVVzjxGwLWCZ12a1tAY4h9WED6TtDzByocy",
  "key40": "Bp8vPymZ9w9ZFtgq5iEcArzBreD1ZCzoUCuaB8EreAG82EkstmkRz2iKPL4FEFrKjrCjgxSX8TrVmxJQxGRLX9i",
  "key41": "5QSGB8riCTtq4gKqQqZYvktuZZc4Znr1wStGTkx9WZbvjLFxPSLBaY1MtdPcT7NUrvjg5Uvswim7bZvdeiSTTKjo",
  "key42": "3QTbRSfg2dDjZEqKzvA439wnnRJGVYbgRcBf43YLsXVo1aZ1RA7SrHEqtJbn7jNTsJ9zECEnqFwb8CD27nAcsVwW",
  "key43": "46Www3HDrhUAf86Jb9hvcdMrA7aDoPWVN46WQ19qwUbheVfRCaGpSDZjTxEq5ivuQoefro5gZsvx75La7xNALuBy",
  "key44": "VbCXrpM3a2t2Hz9LYiUNUsKsDNnzfmsDhCQJfsQ3k2kdom6TpeUSimzGYtMoC4fwS68Jr33hucJsVh731jGZLSo",
  "key45": "i7XoptAqSEMyBJm9S5trr1sBEyJzFbWfpvHcz54ZACmu3p7UsVMUAznzRTx5h6hy7Hsdjm9hHUK7M2fvV3oyoBB",
  "key46": "uNMR1gE6sq2xwmU1tmNRT1HeWJSzyjeJ2cejcKpvcmsME2bXQyYk6MyCGcFntZHh31ynqW5gxCz6MzrNybtvAhN"
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
