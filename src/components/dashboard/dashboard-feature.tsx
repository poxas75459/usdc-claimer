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
    "5v6Jzu4HEvtS4CQFjrWH7mMZgpPZt2H4xrxSPKqgJkDnB7oxngXs2rdajLontd1hDgiKsmU6dEuHGTgpNFLuZVto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rUt5hJiKX1vZyFDeXJ2i9Cff8GBGRp2VFbXuYjXwoDNXU2AzGNfZzgMRY8bqpwjiCsfmVeJukZ8ums5JgbkVTYd",
  "key1": "5oBtT8EvszrFMAVBtiyLnF5nEjeRVKoMg1XtDs6jdxiyEQMziriZEbXBeHtTbjNzCEHdnHtuxXUD6JDuFrm1TrJD",
  "key2": "35AqWnuwiMar9jzzH8WEnv6AyZrbvtqmdaqGpWJNGyftL53KiVtxMb1JdM7WFUajWLE5jxm97mscLMGs6HJ9jEVo",
  "key3": "5sKf6ATAaBhHTxXaH1HK2GKJGyw3N5sq8X2GAdjmCwaj8xujsh9qdSpVMB9kgQPxcNq7SSi9jrqAWUye8TAJtyn9",
  "key4": "5kjYE3nRZvBxhT4x4xxvriD2XDBvDGepUheerk65G8Qr4Xs52erzyu9yrxnYSh8QWLoE7MThH6b3YMVD6Z9ptaBY",
  "key5": "3jgeY3tCfve72JcQ4ZBJ6skrjXJ2kNCbkFBUFdJZTdgvcqYKLRdw5jaDHdfsftFYMAmNA8cMmw8AR7rStnbhsjda",
  "key6": "353HtvpvU39Ajnvma5CPJy4LMq8rYsQrf2RQK2ULoKgp6PWeeVrvQwWwSGtNdTb4jC9KWNcbHNgrwKgd6F5b4rJu",
  "key7": "67KEHMbCPD7eBZGmtFnfmhvjrWKYb8Y3kVboJZH31mbp5NAuGBPWHHYMpsAZYQizu9hBKTaeDnywRPPSKFkf9PqZ",
  "key8": "2NFVRNDRca9FrNnTdirfzo1paNY4b58ju1ZNqMP3D6q4q7gKSzVBYKQN47rSyirGR8J7tSNVPaUApeY9e7vZb7y9",
  "key9": "23WivC5cdCPtsMFDCKDJZMETNPMyJSreZ1yZA19ZXk2X5rT1EwXeXsSLa3ANMws6kmpKxpTF94SaN3DJZzx4ZUuB",
  "key10": "3Ajwrq2ja8k6Jm1F4N54XsSEubzpK56QYTYXPcNDJx7rgmyuNkGqKBWbBptXs21f8Xu29w99GWyvg9qWp6F3Wn83",
  "key11": "FtCT1XJBuf3U6s289eew29G91mxYqAzzaxagkrwDpVQDBxprYQ79Wk3eKiefio8Er6X6ei4ZinZXM8nRqdXk4i4",
  "key12": "2T7i69p5xzMuoCZJadMZCxxbBn5KYcyWPojYqoikhpcS6HwafjjJVzpRBYDq7NP9yAQxPYEk91Umcci23k1SrZWM",
  "key13": "3UBZ73QF4ANZcckB5PJCj4RLPzEeB5kYC2SsYV3h5KSXH45YNb2Kx7KzeG6F3nMGScBXzNE54Ew2tvDiTNkWKeYi",
  "key14": "2A6YwP9QiKjqUFg2vVLaPMvbmUyNRZiTAA3bzD1HhEAhmHP7VDeNYoZaZsoLjX5QDkbtsByVPrk3B9En4w24EGhZ",
  "key15": "3Yj8X978S5uhYcb91RHvDZL5MvKQamqrbzB8ZnTVrdMHD6kPT1sheNnTfk4CXvXBqe63jiV1FuJdqXzuSsWxCDoz",
  "key16": "3wpwEhrqXErCvJqdFgPsWYf2Lev1HUdHiCZ3YX5uRzDuYwLimuW3MMJLzogNcwFX2TVLUTKQFMgMKpEW1Mm1Y74v",
  "key17": "4QD8JkmMBQVZgzrfKp2SGGZws9o98HhTh4uSno7nixUQMh38DyPVitKYtKYu9Ggy3T2M8bxHHN94w1gs4btvFgGS",
  "key18": "4MeroquVhyJtBwVmLZeebT51yYAdKEDpNJDPkWyoXm1SaYZiX4wcd8VT5Efbz4prmCqyh1JPDzjQvBCbFkJahrAQ",
  "key19": "4dwrgupnDjL3TPkVdvPrpYTzyABi8oEuCpvcoA4SNedm1mFNS4hHq7Fokz9NbLrcAmssGmwpgM1HVqNPMDj3UxsL",
  "key20": "PUBTyC3foMiq4pssmUVRf2gYAcKjS5wcDo2xgEgWaVwWA5DWTKmdb17jdzBhia1cXjp52YW5deN3ZHWMguWJKt8",
  "key21": "4oJiVDQA88hdGD3BCgPQwPKV1PEgAizAfxcK8zxY8vmtcajjPUZaZitHfrzQCAxJ5xocYHoNWGKPpwHSkjW6mGeB",
  "key22": "XAuE6ESFDKFpyQ8Cs4LU9MpLShg6tJrMwmQyDadLyUXB2AgMRys9x3mr4wtPd8y9cej6Yw5KyPt5ynY9Sn2tsJf",
  "key23": "7pLg8W7VUkDDLJpYbKkHNcoDpb3e1Bf6GZ8pXSGVyS6KL152Nt4XSDJPUcnx2oSwnHQKbjBF3nUAXPtwDm9RqWv",
  "key24": "CtVY93QbRrs9T1pWp98U2maqCYPEBzC2iZtUEMK4hXBh16K6iTCwdTXQaTM6V2A3QRnbWUAro84SU2E8Qhm7qCD",
  "key25": "nUuU2Vm2xXxVkhfEkSSW7uQFinxZqx5NQiavNWWamYMHrjYqaNmX2M1F2EzKvABqqeUzQ9juZQYZvgtJXfwL9Vc",
  "key26": "2CKF6jmKN7U7sPHY7eDH5Sb4pdUByMhQLUkuiz9ug6ad9jBWwxsxW5g6xkBhEW3vGJZGj7a5RsxvJBkVzG8i4xbQ",
  "key27": "5WuBcuna96463gWLWH8bELXYpErqz2qL4pZcyvGjgYWzDLT2vk6RWqaHhHNyAdpMoGvaVzXeD9qphaHpzn6tyHqi",
  "key28": "2LTztKyYbz73WSCHe2D1TxXxszPJUXipekzHgeCUVzn35heVZihewtHSh4Xc5iFdZsAoTKrgKDDrfak5FxwBZuMG",
  "key29": "3rLL8Rki62b2fgYoiHTaNYWmeV5E9ttMXpQXo5pzLoXZcLuBxEqFL2AMZcowiU18D347KtHR9jLvgbe2sqgdhmag",
  "key30": "2HpMmButbnkDF56GuFcH6aWEzydWgUtEF9eUqZsSr3BvZKBizXukocri2dKR5XyMyS2YnxxADPBfLvWtTC7SaCqh",
  "key31": "7LRZ7cVbQqWdFyi5BQTVT6gZKbPQTGWYBErRW89SBYByoGzFqChsAnXKx2ybsXkK4rDTRrCLg62vyfLueAg687M",
  "key32": "5r57BgRP5g4ooRQLn7HcDZ4rVxkYCHt7gepd7o4ngfKjFpdaGEmmhq7CyGugnv2rLHd4Yb2msPYYWtWVqgL4BFg3",
  "key33": "5NvBFFyUF9W9bWrHh4w1NooockisuPpKF2hwhgFWEQPHrfnCEK39pL8kHt5mWe4kCCtScZQnmfdbK9UdtxGKuPg2",
  "key34": "29D2B9XjeSX2ww21xYaAPx5QJkTwHzCHE9pBuUXEUT3kDid7RpxxW31d3c5mEXvgp9kUa3imQuL9UBQQyptdVrT6",
  "key35": "5b5WL49GzjmcvooMWKP8t44e3E6mwLAqNYMMg4ByFLUNmt8jobGWSnU1XPkCY2bQoGH4K9n5gRNMdTLSaC8FFJx",
  "key36": "2SyWjGHaACp7nv5kJH9AVBBjmVmerrQMBEu9vgcEmGX9Y1ktMwDdNCCRhvKJaYNNQmgkGLnnz9RJGtJ8yEbvJic8",
  "key37": "GVrgZu2HkvyTDBxMxKkoitk4RJN7JMT3tGVZ8RvjeazGmDoxAAWTneD5LGyuLCxLsohDin7sabqdW66v2FQG3zd",
  "key38": "4jxvGEfR9NjzPk3YZhmYEYgdeAR7P8ezVMg5S1ng4xLbmiU8Non6jqiVibc5Qrv7FxpwAHPj4cm6gntCpiMaqTca",
  "key39": "5uF7dXJxADYfR3dyBuDoYZUCk9WYwb867pZM7Mw39F9YjejNrNxnXu8u6PLeswTXUrDokkZmHZpFN1yqheD6j86",
  "key40": "45AHQPa3GXmx6QCUyyjeGzpQ1kCGsPxtQJrFmidjz73aEWy4nrtjMDTp3ZEoMh6dkJw1ps66nUvbAbUxeSrMvhKD",
  "key41": "2bqz9e3iHCqGAZXs57gqHdEuAB86WyL21N5sVdcU7cAyREE4xESSJgYvYvUgytfDLRCacVDhm1AcybscE57BQJvw",
  "key42": "5UzBo86WPGV79mNmFoMfiXvfqWrVVAAZsUDjtWYqZvAwtJW3pRZos7bSPX9H5FfPDTyqjoSpQP5Ew5dxJRNkqpcQ",
  "key43": "51rwoq3jmDXGAQXvhsLP25aqvzMJ2UucCpab38s9rq19e9ujJcQtefyNe4gYb3kAh6HApfyvgmothUWHWU3WJZnN",
  "key44": "3b6XpKTsvHGWvaeKb7ZVvfkff48cpk3SRKFD8KCrqmAu9gia3cojb2w4APkJayNwsm5N8VRVEEeimFiUaGB5qHjh",
  "key45": "4SrUCjx7JkCeALfUJ3WL4cKr9ncRsXBJKe4vjvcLzh1dR6e2khFttz7jGWtRL9Bd7ewqr2EULYPStEG8QkKNCLHY",
  "key46": "36q5xB23W7Vpki4PAopEV6JyYNYo8VGdYCnMDsEX3SKDD9TkdEFnTNB87KGVsTHvtrft2JdRbnFVH1a3RsTsypCe",
  "key47": "DZ6mRpCmL4p7cyRWN9dGUEKy3ounbTddSE26CbikGV2pDn3zwbjqqh6LPbK4j5BSYgVJZB1WeG9BPFrBKkyZLak"
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
