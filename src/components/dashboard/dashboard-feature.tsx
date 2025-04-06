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
    "2eyto59KGYcz8gE77KPmxcY8VdayC5LenSmefVxpGkvDPEu6NDhHy3KDY3y2CT7wzNdWAEbkczhdGLpdqVYGsADA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4whj6G3P5TYhpAot8RWwqodqr32R6HFTeLPLTSpL5YTxRJeuXXdXGJ7iexukNKDmuG37Y986s7VF7qHe6yWCyjzH",
  "key1": "48rS9juNseUkcWk5xQcw7TVfahwmLKidDVPbphYXkM8xbMJ6HbuhmY2mhkKEWHmMdMrmyk1tLRWZ2Wxz81QKq4rS",
  "key2": "4gq4f2n442YDugSxEbywA1zrfWtBNhUcjnPaztwgg2YBZawWDvEkobqH5GK6H9AeGm4xRCv7n2sLqHimWfp7WUof",
  "key3": "2bnwN6GgQSMQE38gFYg27TxpwgjxKPeFqx57we12YpsU9NpQRdujPibmFxJJ6n3hVTsNSe1jGrZ1jFHZ5UwoL3a6",
  "key4": "Y68aFc5YiuNaC89Di7MJL2cn8jLa97VEzSEgB6xy8taSyDmrSkc9CjQeaBmpUgWMS7pBCKYZA21yQy9zUSFGCns",
  "key5": "Q7GVvzHRLCB232EVG4TCSxEFFmNBZezVV1zhZimg5F1YxW6iLY2sDm624N4P1MUwjZfVwwGMLqTtpYjh4ccVX4d",
  "key6": "3kLVtngcLTGxqCCg2G5byQ7jmN8AEdTA6xZhK3ZbdquFT4cc5fC7Nw2HoNJYSErJA7hk9t6xP54FfMH4Qma4aYg3",
  "key7": "2QNCHBAvp4rYuN2sC5P1U5an2upKaXkkKYvLyDsrcfmkWqhi4fzFnoVmKVYDRpBduSERaADtwvLdR8R7RnLyYxVU",
  "key8": "noT96o4cVPiAVZaZ7gRUSFHykGdpcdCmN9t5q11pYecxPRkWBE4mKfD1DKbdoTYMukuc22CpTJh5ZRgRBpoHC8y",
  "key9": "67dfiTAfXafUJRTCGynj53riqXjBCXQMEpPpVMcn5XLECqCCgyosBKcP4oD1jgJh7gA8WMRuhu8h4LdKHgp3SPwD",
  "key10": "3H55Lwb2YFQDeZZvoBRMBRu4UeMDR5ryTLk6G5FFnSDGuSkjEgMRQMj9ukBTnpaKHFVUnNRxwV89PnBV3URGx2F9",
  "key11": "5eQf9t6W6fd2Jy1WKZFjpNvGd4rVmgeHBgFaUDGWywEVfapPTqWzz5S3Kv533mQoHCVyNGu2PPKNMqFBFphi3WTR",
  "key12": "3na8YDoYahMc9C8objjqNA8SgYyfUdycF5vLP3CsEfbF3qjbiRjLooKFpmWX6dvrX4duyZ1PYaQf1D9echZLouXg",
  "key13": "3tHsDwBqJyq6NiX4swfeHgPUofQgjGjrYywMCoTftdQGUgdt1AmGXqxQQMZ52uzex26y43ax2A2bvhrojMHiMnSv",
  "key14": "4jxkzpTvetf8BGLh2HMF8rNJGkJUB2mACqkh1LiEJVBe8uLP1N7J33tAujrSiQ6AZgSzg7CsE8CbbEnHg1gar2a5",
  "key15": "23Eu8TKActPSZruFSj6cMN5N2zP8AGMGgxzgunw25Ywzi4dVEAsWCm9tM6Wqv44nq6UXwcuWZMqNAVDDsRTvoEyu",
  "key16": "3CMV1jFzCxHqnEwf14PWBZBCjfVXxQGzqaCXYUQE69Th83v8oHZMyKvwKHsiuc7akQRufkuhVmdy5r7AUZogNX63",
  "key17": "32rRP2XoxX6P7o9wuejBV1n3cAyWi7vYYhUVA2Kyz4Qp2toFFbrKBzSopP8gnkPEjqX1GCq34oBDShrUA2BveFRV",
  "key18": "35VgG2XZtSoYTFjgsBqGbSQUbVCcnDrNZv8adqiKKqA6J4iqMiPUQmwQzMsgTkpq3Xth7aNELGaseEBudH9Dhb2Q",
  "key19": "pPrGbBJR6WE7kqzctYB39CoaBDchqEqBmvqsK5uqodEmAxFi4FV1Dj7useQJUNGkKwWG4yf6M3hXRBkgjs4Fygt",
  "key20": "4BGKfwMQwCTKQMZCNGv41epTJDWBM6uHD8uCZWHB1t5MdEZ37VK3MSszkTo5E4ar4Z968dKfTSZC1cyw77184SoG",
  "key21": "bC7i4eFTqB7D3AgrepXgJcXiQJM5bGkvZvV1y3RtUZDzuRVhE8SGMafV3McfCn5eGLRyKx4gjQXHZboTbiJ4dwR",
  "key22": "36UR9zqPXzKERm4nKYLfCkRfQAzZFmxxfn6WoounVAey9UxifK8DftRZV9RhCB1UnxrAn167rbZi3X7BrxhrZiDT",
  "key23": "3aNiKkFJUJbRCG6DBytV6SMhFDXR2Z8MbXwmtP6d81GTsbGVwq6628cmrkfN4Ahrp19JCSwranBtvEQjEjwxVUf8",
  "key24": "2FkTxVzTxC842YRRG1Jbj5whmMCtCcUfK4WDZ3rHQzUnrRCfyVTWX1Kgk6L1y1z67qPSGGv5CbKuJmM8FJCAG5ux",
  "key25": "5wwoAMj1v68TBCvFLwW3ZoxNop52H7oDBLAgUA9a5BT2u3XfDy1jJVu12gXi3bv2mJctTyAUycAhotTrshE3md9Y",
  "key26": "TjdfkZySfWvSGqzzsTD84DVVo1fYufc5KSf37dCxPGzFYLaaFKL6R6U5BfBoHQXqtbqKXhwiATWi2RJGwsrVKqT",
  "key27": "5XkVmdj1hfzdmkELJC8M4f6kji6KSBu7UW5SPqiUt5bBnRK8y8Gtd18KkJQqWFyqXhsn9W6xTQxWirNDY5Bvga8s",
  "key28": "5Zmb4Xh9ufkK8ynPHmAHh5shry4j4hai6ckKz6Trz4x9Gk4frf1hTtxabVCKeNnTrPz3viBgJniL4hha9NshUPxD",
  "key29": "5WPkiQXRN3WYy21tnRLPcZxWMLSc3FUtRdGcvaJgtVUyFRtB5cXYEfX1rhFkBs4Ja8okN5CQmTsSirGUemd3r22Q",
  "key30": "38DUCu4QMQPft63PDGgnGoWpdujZ12SRg13X5k7mNtpfsnEVYiV5X6MvacfpAUPgbm3ZctPEq51rBxYXRKJVaFG7",
  "key31": "3nnbeZUZxKu9wzpgfFJRRTPWjor8nrQp7ifwa7Y8LzqqS7EBHKdDbtdFJQRkxWaVEAxtFT2c7dCrX6ThD84LEphm",
  "key32": "46KYHD38B7sYs2KKkyREYP5ZbsLABLkhsnZPFEdV8RxQBgkA8T142GD91ZVx7Cq4xR45j8UXtVqn9GAY2yAM3nas",
  "key33": "3nSxkfoK3uzAAPPzF1oZjdaAcrwVSn1BacBeDLP8q1cikZqgscUJ1KxVe1AWsAXLcNtYS2us3ynxhF4j6cKuzoNX",
  "key34": "2zqDsPCRcfrnrs2ENq1uY5pRSEgEGRUjatqeQSAkBpfaWDsgqnV7mfoc5RiLPgGUDZoKTXVXsMj15vvp2xeNAnH4",
  "key35": "3FUB51dDKW4Hqbr3TRuaxw5FXmpmDtSSRm4jmpn31ifNQ7aH4y26UdrWRth4TFV1PLVRoQr69pE7znNdmMUQK2KK",
  "key36": "3SCGgZVdaQUVqAiy9bM5iZY2tLc2mXqrvc4hAz23TQ7PZQ5x3ay4iGuFfgv4BzBDiiubnbudJ5cc4QU7cYc2NcTf",
  "key37": "4NFG69y7g6Cm1oWcQRmNGa5h1ggnzxB3T5gzFos4J9HCBXW4vBBgnxNZ6P4R7KPioSqo1A1gr2D5WGfm9isbVPDm",
  "key38": "3dmpr7rHPBQdbTFya87G87dHt7q2fTD5UT3jfByhyirhBeNEi3nVcpBwebNQ7Srwy185693hNJcfZYW4SYYk34MC",
  "key39": "4AgPdQDTdRhfMUiH62rybrddzfBKNVQtPH7mujBNGjGNLzBs4tu6TXxySYERsRgw7TgLfeTTsw9AL5LFhw18PeMf",
  "key40": "35DTRZRzuCQ4BYGwkUHxuiWJcG2dEQKGjWcyWBeTKz2JQWzUsFkKWFKg7ztPYbFSFMcgvfkyHzxGsPgR15JAmhnw",
  "key41": "SmPpoFaHU8syhTQsRsfu2CTZVk2SW4gQ1sw8M5KJSHa2qUZB7SpXK97op1uyGD6pwCt6k2YV6c32ZvYmYncX16h",
  "key42": "5aejiE2PmMcfkvhgeqBySJGCpT73ZY9E3LfiU6yC53w4EDKhSeB8Yg3jH7zputBfDadVUMwJjTjhxoiYEbE9CGfi",
  "key43": "3pLH9sGhgumCjeseFh9Ho3rBdCoTGr1nLHik2TXhYpwDg2bm7Qzb8daam3Tbnh6GtuSk23wvpunUSK5NbacAynaC",
  "key44": "4VBU8c4BizrCmULxSGxKuyTZqg628YMazMjfNCtTiuyW3SaCXCTpbUQ97TTHFuaKQbjoAZAP1oZN52nbMMBPJYWE"
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
