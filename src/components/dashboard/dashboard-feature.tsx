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
    "4kPmNKx3v9JbL5CAosvHo3XNyv5zoF93A8mC8cmG1F7iSqgzTsmU72PLa78LD5U4FQULhK9WYhHTgPwnamY2G2Ko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3emopXJsjhXP21987dPdd5G3JeuXYALThq1efmbJhV6B6GDA4Wd7N1kYBGd1CzpsctXzu9mT3Rx4ysNQkvZaDinz",
  "key1": "62LhafShpmMxiFKVjFHyVgaafFaqMBky5d7k5i295djwBRAfUWkvQsU1d6WBEfcbMr7DjWdFpKdp2ERMiRqCcWin",
  "key2": "23Zair8w2crjgBG16UH6QmXAstfmdZRAH7FkjFvwjXPWcWCNTg5gGBqYu1mHNwoFYzj8JS9FUDMVUkj6gzgLnBWt",
  "key3": "3i5TpmMLos2RwHSWSCDvJzH1Ti69HdwRXqkoUzrFuGr4FNmdjZ5ngUZjQYoo7bSh6FKv7tghBSR91cFTMPDPrse7",
  "key4": "5v3fCiZgHZtpqx6u8cgtowFsdjo1cpy7e6W81WrFUvE6adX6Zk728wqXdvYrotpNUs4jBsbxyKrteqYenUNAAD9y",
  "key5": "27oj8bqLtamjUDsMUz138PX7rijSHWnKy5zscLWM9KtH2gyjhca4uoak4tKepie3E6cjdAtuHNScjxk2at3vdtjF",
  "key6": "5DJgui8QGNZt6ccaY5Q5LVegvok9Tnsxn3qHfaV2M15yinVkFYG53gWASuA5RVPXAemeBLsQbqcJ2RbC2L4JisDW",
  "key7": "dVH4VEDNvcDQL6r5G39xujUyt8iyEiTwTLxBKYwSGzxt64MsdiiVnWnLEw3YPwB1e4tf5AygG6vNoZPqojLF8dn",
  "key8": "3C7aXRwmhfazBcCT8UTGcHsNPBE9dE9vjiNmDgAJ8ou3UNkkFUbNVCdiBHskZPnG8X4oBUgCwtQqxdHVdd2dojnJ",
  "key9": "5dq2pFjLJs4n7LZaD4ny9UoMCChRr5nFPE2JN1g18HpHrXsrbWJnS3ewAYZZ6r4YsmcJGn7c3UzC6cwSjTZgP7Ya",
  "key10": "32Qmdnws3ki5vrj9BWtPeGq5WTicE5GNFPwEG6oHkgu7dEZhAZQdcBJLU1qGmfpRoyYM2KCGRMAVEUB9VZUVCcpN",
  "key11": "3GCRdvSvm7PcdoBgZfj6svLgtcUHsnp9iqUaAGsps2rHQ4bcoraJ2G88dT8Wj9ojpPdxzi6GYUqSAkLmqYCGbha9",
  "key12": "2LDELwmwkMoMbDnoWRNZNfEWqwSM3WPuE6U8ZPzPXLCZJTXH677uD1wbvm2Yb2yDvb8tM2Cr1FtUHRGrboHvuvts",
  "key13": "445FcSj84G8UKcTwWwpA6rmGpZvMWKpvFVGJQ5hiDCPH2XbmQ7m5NjBvs8CQ4iWtBdU3muMJMC86GUVo19SQZ1P8",
  "key14": "3rqvfGvEaCBbNLbfRkyJZrFeh2xFrqGT18vtjyCTUo1zJ5RruqSeLES2VRbPdXSmKsgKvD82A4Jq25ik6F9M3jW7",
  "key15": "5pp4BMFcLsWw22APd2iYbSvZhLD5C97KJrCssXSX5j7zt5529j8cWd1caYjePLGjTJ6vXgHsi2a5KGwKFhy7sNxj",
  "key16": "3WHrt37pgK9AwsNVkckvLjz7P5SjfErHiN22wTZNZ9UVvZRw14ycX9LajWkt7zZaNPpTw8T9MpyEPftKTvB1U9D6",
  "key17": "5Lnjof1pz5qzRD2sWVA1BVMXvy7z2BuLtCu4XpXLLkNXHjiG2oodXCT9fL2D2Aq4vinds5JGQWRLpmohbtvuJ8LJ",
  "key18": "km7a39ZjK165SBs3B2FB6NocAye3krA1ZiAC3AiGVkVSZsBUmuBTSSk1gcaDntATJifk5kTcMbmsCYYrzqc8dr2",
  "key19": "5tZaMPkbrymMW5LZ1d3626NWAbokK28LsEquF3hn4MQ64fYVmbh6rh8HNvUzfvydh7NStPMwkgsupCN8Htv3z2Du",
  "key20": "4H9iHg63JCw8DWGLAi1CSFyqSQ15E2RehwnSqVV8KN3tqEt8Pf776Gdt7SQxZtPHVujfxeW6BhNvvG35sTBzFvxu",
  "key21": "2Vr6r7TLFZrwbdoq4x2u9N7ZBxWQLA6amnqqS8vUMKLr6ouj2NkKKc315usYzB5QzzVuRKf7XkK3wskXxadsV2b2",
  "key22": "43z9yp48g8YFv3dKUL51BCmwWSHWkL2CvtRwQHwiFpBuCxezXNxNgMSwYY1w1YW3H4R351AaJBhmaGwfrNaGNnkb",
  "key23": "4b2KqEgLHnHxwe7uyxDyhpAxta5uVwNo32xSWLGiBt7NSShHCHS9RYrr6rMBwXrPebyfHAVj5N9xQzSy2bojM3ju",
  "key24": "5Ge1imFQsRMoPFnzyDC1HxB6FB7v9LNRoYwxqu5FceDoVH5ucSvhhyz1GLFSeKaLK5b4pNMYhaMW8xvFHURWpKXC",
  "key25": "2q3mgGKabUMQMLKaDqc8SSusb1KFCQxB3XgvEcpCBEFieV4EgPFJngZYxY6AdC9KPQmnm3TqmNMd9hFtbHjLRYPy",
  "key26": "cwEf1EHa9eNBbGaqYXowt1sckqa4yuoSWuRbzEKwwxLY6YtAGR8wo4pPsyUjJSs1hBDFkVHCMpxeGYCF4EUh2ui",
  "key27": "4jFM8y7cJrFqSEN5wh4Kv8G5P4mgihtXDtAnfZEjXyT4kCGQAkdN21a7qs9c3rHPioZoiwBTNhG3xKqzS3fiqV1j",
  "key28": "yFdG7Xhsg8yeXu6gpV3znCoR7ZTMzaUZ5RgHTyfenGBgdNTTsF65HLx9mosboAPt2X1EdDnji5wK2mhYqeLu5JP",
  "key29": "218ACTShpKeeFkiokYCnoXQicyEEmxGNASyTHGUZQUNKQSpx6y9voifVsNscU7cKJvrQE8C3YmGq6SGy2QZdoyyz",
  "key30": "49FnEUACtaqbiDMZsCTo4kWJiweAMNmygxB733QYm2PVe9DBnJp58opeUeNnv1qWtCXH1sf8fteFMNmBAcBRoDfX",
  "key31": "2Bw6sQh3cxRvXxKVUvDhfp85p7MdvAiN24F1zUMSK82ZLM59Q9WwrKFgEjHD34gAVzKVNyk3YV7ZXuHZ5u3J717v",
  "key32": "2am4rh1g3xD4E3jxWbCV22KeGjYAfJUVj8K5ZFov38YbAKQy5XCdYY27qB4RXXSdijKvJVKomRe77NeX1PDASamK",
  "key33": "3P94NNpiZsGSxPwUR2qtU6cMb9AcCv6QPBGJG9QrZsSmVvHAdJtxUAH9Z9mmqnWx3KhuvUjh5Yairn7pbFfkA3Sk",
  "key34": "3vQ6qA9aUXSfqVajhdKhoiqGy1UCYN2KdxiMoZrqhz7hXi3XM1pp5Y6uR5NUDHseseEPhxvaY1dGgEW1Z5v1XGiG",
  "key35": "2t6JPfC1AALig84Dh4Y3eaPcHHLUN5iKXHxSkQCBZEMHi1g8gsQjaJ1u6NpcoZ8ftGbZGZDKAWf5rsdTZukyewF",
  "key36": "5BbRMiYZ2rwAZXcifBVEn64bMgjNteN5zEDHGV5TWtcuiBZGF98iLunxzy6u9gABPG3voETZa9wPVZX7gbUbwa9h",
  "key37": "4KdEJfTueP1s1J6WLgx1A7SiykUSaCpL6Ydt931ijvoazU9p5ExvXGC9eDLwm7deP9qLcv1cNqxJk8mcc4AQ28AQ",
  "key38": "4LBtdzJqfr7vrkah4Ep3XgDEhj6rQSGMk5iHZoJHq3hweeao5wuxEb2sG826ASq4VgkDPH13jyPPHHwXYXgAKkAB",
  "key39": "4FCpVBwU219SYEZpKpx6CKcjmEYLqPmd31w3QHK4BGrCauj26gQWj5ec369N3DUDGjy9Cst8vNhG1chDNFLQ13jp",
  "key40": "5EwRXRNTG2QjXvHHbBhc3dQYCxL4zS5ZQLFFuxXwgbjeDNojGw9Z61MSVidwKSRyMutAf76oKWaTYwn95MT4akBF",
  "key41": "2U4SjnuPpuz4ktgCpvsperxtc3AnkVg3isRkdQrc4YyoHVdZpYmcW11SmyvwVZRnDLUfHuJ4tV9RWTjYg6aY54CV",
  "key42": "Ro8N6hY32p1eXkWhWwyBCi6Qs1sk44FJeTjWh4Si3g2ozbZ7swetPhkdXctdFyPtv9dMG6zJuVLsbtArb5MPi1X",
  "key43": "uSbUXv2bMf2awvAPmE9Uysc66pB9H4itKejJHw6EXbFgLYr6oRgTUCH7nzfghzsFzYhinb5MDdtmqui7uooBp3H",
  "key44": "2RZisgm8woTNpEKogxgdv1dkUXkywvaots6ksuvourZtnxSCAEc7TX6bSE1wJjMUK1JU9wvQgNjQz2nCEtpyFpR3",
  "key45": "5S7WWC1YqV7pfAtRkYNPiaieptR5PWescSiCHrtJ8eSUyKggocdKV2k1UDuctTLdh9vnkEk4HjWhQAYxGc2tAuP2",
  "key46": "4b2ofA73wTVWsHK97nUjEY9gKxtRWBmEpfTwZB68PhzEz4L84RXn4XLGWQimQrtDJKrtGbnsQTDoTbknfRzS97Dt",
  "key47": "599ep2CHDVwKuAVSUfb8s42Gss6RuJ8BoyXmrtxeQveCQyVEXFSwR4W3SKVnPkmAgRSUy8qbSyDe2Bugspsv2sjy",
  "key48": "3CFqxVMkmxXGm11EtzGHXb136vWhnTphuccBKdSLm4szWbGK4ieBnf2HjwyXwTSy7iDTazzJAYDNxsDqykFUUqPa"
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
