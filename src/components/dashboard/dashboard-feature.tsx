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
    "3aMyz19frq2vSTk4mjXnwq6JDa3XMzuxcJxv2wC1w1K5M1yUwSvjS44iB783EKdTc6KYKc4WRAQFqKAVRaU7jaYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s1TWvnRb5Mapb2YBnKznaSLNLRXHFZg4k6MM8dCQghjyuKkr32icLX75eT2R5pjtMTQeZxq4vxMpLjexnvZgFrR",
  "key1": "3CXK5JBVWuWEkCikNokVwPz9AwqCousdNuws2VGWJaGSZLYrPRuzYV6FUnxnEq28i8HtBdoAHqP1EVBEBLDmim7s",
  "key2": "wGzeycuHAAsxb2YXdRCAPJRkmeWcxTvP4P4m4f8bXGhsm8rccEtVee5uzjXXJuhLbp7swozqxBYhkoFPYWZmgw7",
  "key3": "66hMVEtSHcbXAqg4MTWrSkysAhTYAf87biYyNhB3rxzcLaXmAvAQXgMTXYMY77jJ7SBnGapzFoUF3kVsHC1KBNjT",
  "key4": "2yRK8wrejMArPkjjhD5bsq5hMXGXUjgs7bV73WTG5cGC92awPJWraur127SPC1gU5RQjK4oSTrQAWr6Dmv8fyVwg",
  "key5": "31xTpacnvLWCyBMLMpYQPv1Aux4BP386QZ3984xcReCBJaymngeMhgW1TGBqwJNPtyMpYcH7YPsnSiVN4wUapNnp",
  "key6": "3XuAe9aJJniSbSek2puyYrKUzxikFKBzNr5XtwsaxTqoS3EKgDyutfExwZC9HCDr7FKZwMEo9FBCDQopSSHcS17N",
  "key7": "q8JYm3MXfXoyzr4LMmrXKK8JVfUzT8twVUfRWTVo6WCfuqFRKwTnDfdgwkXgb1h19pvsehF86yKWAUqLZ33ShC9",
  "key8": "5EyG7qXgdHCthKFAESV4vW9sfgujfeEzGnjjgeqKjkpmDQt98EkEgbvd3GEtUxULk4n8NKt9Pj3SpiCHZXDS73Ux",
  "key9": "4iT9UKK3CFedV6Dvja4je2vVU3wUHrLUGPqx9NawrFdUUoTyd2hAipjsq2fwREKs6mmis6RCk9p4xvve9VHoBA1H",
  "key10": "4eYMtR72Wx75pmzt6vowqR1prEf6NwNKJ2gGeXyh6AZZqnegLapLPd81BeJxhKWaf8XE93EyfpUPQ8KGV5pkEvDq",
  "key11": "My3iKTakFxBK1EXrEfyNZvBrCYQ3fHEddy3Rivbed9X9BvVtGgHh85Dtvow68hyrGhZpSbyMVPPdfeuDF5hREk8",
  "key12": "63DPtDtH3zg59ZsdDwxR911DL5ntePfhpz3RqyFdFCtnzahibTVf8o23yvTHACFszRh6YQJDwE68CjGn35QvLHtE",
  "key13": "5dcVXj36Etq4vHVFAQq9QGgA3d5jRW87jmQZjoFBcp9WW6HUcCkte8fRAeb7zrpMvepgnuPgX4ch3XKUZL7KbF76",
  "key14": "2Wob2CbmSD745mfsGSNBNCuM7Ru6xKUfaqUcTehunxGAnWFnKuhHWc4XD7TFdaiPvetsEzSCNWCzqX9ppVSFJo8i",
  "key15": "NimYNUtdysT7D8eB7Tw3zcAy5wykfg6G7DAaTmtLkDetMv4shHdWVEQQmtngMHLLUERKnWPaTuNSecJFmA9JEcz",
  "key16": "3aX2d5rQJYW5u4eKmDrHTbQh6sE1wqaBcddrzDxa1eARgaMbZskdTEcehECeTrEviAxHZLcvLCXEMEWq6aPBz6TP",
  "key17": "511yQMWZnkRdC3fnKJQRDwYTSb4P8S7kb3MMbNKom7w1mFo6sGGjaLgbQbRxUeZwSSGeixgpt186uNnBkB72BiXC",
  "key18": "phTYYSkJWTCn7ZjCcgdcdRHyPrg135mheKYBuBwKzYvk5yFiQkvLgFUy8rpkRNxFvyXRsb3iP2Vv3iR8rnCxMMc",
  "key19": "5uEoknKiYYx4UrVtr98E4Fek2CaKmxCF2cW2c7j5K4VEGLKSWKMkh5Q3f9xhf2vN7djqy9kjLS69sz8GxpS99KDt",
  "key20": "5Ko8girnAqhcLrfEEEiN5JSNLBXorQrnwJPExZwixhSFSjVP9k3NzF8k6VM3zhv2vPnuWuy39JA6DnvamEq7Xctn",
  "key21": "4pRjDapJygve2EBSM3iDJen2JJ8kaaRSZNPFSCL6rh1qhMzRsJGBc48x6hKrpWiUjDmYh1B8m5ToTjNoP9F9xKFf",
  "key22": "2pjLJ6NkiFvVxYMeqcJvxkNeuP2j8EKLDwKyPTpmwcydQ3fK9j7K1M2zmQAxZL9vj4r9dCJfsBzhFg4yvZ7dK5Sh",
  "key23": "53fdtXP719dNGXd4ST5Zm5QuSa21WZn69em8RHhzMC52yxva63Rh4m3y6rkYgotzP5WKh1a2EAH7iFM2n8i2ifjQ",
  "key24": "3UQBAByh6WfEqMiceoJZjR4QFuqQ39rMiEzbtCcHSoqCcP1Q29hXrZBm1ToeLB2xFtiHd1RhLx1D724rz9BboVHZ",
  "key25": "4EqYL3JFcWfuE9jwJrJy7S3aiy676Ybowav3sTPKHQtnd2psPXeZL7ARSCyn5osgaiLtKesXt6ThURAcYgPFF2Zn",
  "key26": "4gYVaFFtXdgzWR8oBu73YUzU8to5jinrHhvnJiBTKmxoGmmXMv2KZJ3tN5ASmDim7gSuH18aEahLXzcp8JFwBe5",
  "key27": "5hjUnt1LnZCa3eUfCvrTZQYVd8G2YLAPfbhPZYty3Mgv7X7EnWZ2NouMvZTGxcsSiLGs36kb7iecVhgmbtyQedDm",
  "key28": "3WSpE7PQt752wA2U6WXDpnhUobHSJXagruRmYnmC5pUMa5r54RXrUZjgBCH5XdmcyqfMQ52xAxbGoWaTZqdHFJeZ",
  "key29": "5xHUNtrTHWxFm1enHvdTuLP4qaAoeVMr8ZsvfiEtJDNRhLnFv2L2boJ5KLWnMHsy5zhAJfwXUrvPgjMkghtgP5Z5",
  "key30": "5mEziZ5qvaMJ7VJho27XEiFSXJb6DKhuPykj5zhf182qrLdj3SgUmTS6xZ5nKqmvL5CUjj14AhacZ4tQ9nZgjTuu",
  "key31": "42FVvkhJ4n2aUidDyP9HAmFmrr47xxSBUETk8uSqJ3sNDMBnhARoUjN31Esh6JcK5AYT46AxXXkKn5v63RdjAiBo",
  "key32": "2H4mm8AnRggKwiMZUyupyEVDDm9gyhdzFzmh4WRfW1ZzJbzXEDkGrFFbYQaMxeoeJijn5VfevAf2vDjna7EhBBJt",
  "key33": "2RNswSZXMPV5ByBH3Gft4pkY9MQAuW6hrEJapBoK2otJqr8AGinaTZv1UTGKjCBWFLNAmDdmJwtvXcwdoYH2rx4g",
  "key34": "2fUK4a7JziWiezkaTB8mdZR18ESc8x9Fh6hyLTnrfR41EAFuDS6zTg72KR62sWUWraaAz5Mb8wvhPZQ437q8rNdv",
  "key35": "5pBFnVtiZYCMydLmKhqeoSLHHH1GvrR87JXjKr88BbmJ5JbNbS2cNTvTXrX3hGFUe7bTZBiJhWAsZbkN2aLJGPZc",
  "key36": "25UchCpGv3SQgaYGCt5nqem72xN4CdzU92AA8pskVjTYTjwPTFyVSWZA99gb62h7cZGWBeHhJRjyfcPCyGHvithp",
  "key37": "dQQp4LdSMH4B3HTAeqCHGyvZAu74kEkA5mp715zcKXBp5ceieBC2zQjU6R3VgY8ZmdLaYSrJVPr3EHLwWMdfJvN",
  "key38": "4DsnNtUU1SH3rxDo8Dy5qJ5sNA4xopfMd7DSoVn2dapj4FheFMnEFA6NwTNduxHQBHGZaVi1kXwRmMof3r2R6btN",
  "key39": "64wnQ8MJjrn9wCehYWuWMMRmx7RdfeWmjqK5wE38jyqnAdahJPkUDA2ENizCiB69MdkMVsDTSRyGmrHZaKAz5s1Y",
  "key40": "4nhvgML6D2TsBHGESzh9pZoUcnwj6PGuWACDpXUDqt9wURhgFVCbe5ydUyvv3gggKq9X3bAcrhmZxGJ3Y6ucM2CW"
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
