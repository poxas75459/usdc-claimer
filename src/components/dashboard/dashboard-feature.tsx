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
    "4mMLz8mnQNF9g7nZncfVLG49wFoLyEJTeZT9bUhejfxSSF5zFvM2vtgG2S1gtG5wUzugZDKMcQnFrctEvArfvGeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gg289ftzqpqLju1aRFrpHaZvVQA5SaoRDTewQWoUE3VXv3uFrB7Z9Gu8eYWmUqZYcL6oUL3Bsw55LYCzoivRCWp",
  "key1": "12A1R8S8SL2yKySYcCA1i72nQpSQEMT4ZSkGDoXEmXaGT8zS9X8qMCdumVk4YoyU2ySZncnLgVQFZ5QhaFqtCFhG",
  "key2": "2HS4Guyzd3yrtz3FaxsS6sAvEw2k5KpvBEsLBspLvC84befo98fjsWzhWrFnyvHYEurFjtEtXFz5194z68dh1fda",
  "key3": "5k9wnHfH2haY6AsHENt32x2CM5VwRBruRSUUWgHuxH5K7HHRreFtZiePs8qiv9bGViF3M5Jbq9L7byztePcZQUWc",
  "key4": "2rvmd1rfpHYb8Cfve6dbX9CeY85qfRHtSPofvSqegFjUYm5jtrgNdUFq511aiQsAJYxMCmPECbisXFrLsQem8nsL",
  "key5": "2E8uwpmWqsjsbhX3gnecDCjnzsvCWAeoT13buw4QnoRFjJi3N22kimdndrPhTwg8pbiYVD2sgHRzEv8S42xe9mGo",
  "key6": "2EG6XiBMozqRg2eEFqe9EwJtfNETKNcQ3ZXt1khvYYvjLT1Z8jt9mNMehzjLSkSYcBrPtdu8zekTFjXfTLiWx8NS",
  "key7": "3jTCLLx2WVKPrGk73ZHS3rkKyN7akmdMwDqTrzWb2gtBtgYbYS81EQv7GnSgV6gZiqRWQaphNkDaCiWcrFnrnV9b",
  "key8": "5ZyVWMShWJfcEoMFDNeL11zSgibYDG8wDZHgzEqiTSugZZ4cBjMdGJRnfBubr8ApGGUQceAH16c2eNiEmCeNuxvu",
  "key9": "4JuPo8DEYDmCjZCaauWQiBMporqsDwUF7sox1xPmLpnsc8LjZwRZfNQJTiuMfjSwyefNvkYiFtHK7ioQgXUjSa83",
  "key10": "4NzbprHoptQC6mbQo6Te8tRdKWgXNdBtQkMzEQ5bxeJr8UiyTUeZnShk6kPMdUfGLikU71kSxBm3NsVijf5mmDy1",
  "key11": "48uZNMRpLR9dRQiQup59Cckyah54QXicRBuyWH967ZoW3Zc3kwdyrTC8R8ZDUwohRkvj5DC7t71suPkn7exSpzEd",
  "key12": "2B587vtDsZKdrbRz7rZQH8V6NTr7wxEcTRBNBMLwMfK2D3QMttg8dntXz5phg8gRw7SbmFpbS5f11jCMvTCqNsiv",
  "key13": "3iRcNcKQd5vYHfjwk6RDxTqBdSA1g4dmeMnnjbmvzYsrnoz9QRKwEwXqMyjjrohGyWkGQrPxiRgyEs8df9ScBk1z",
  "key14": "2nb92Zgi1zvmv8W2ZXC7tAekKf4V8tc41tNQRGXHxzcUGWZzvAPYQ5d6MGin76mYQc6Myn8W7mt5Kn7eL681RvUr",
  "key15": "3XEovxZsaWPg23WrU7gyQya3EQcesguWYizyzVL9yrBAcpdZ7631pG9dihRuWfenSQD87CF5zSo5iE7PzJhsCE1v",
  "key16": "5JhpsvXSApjxrcPYBNawjASiiqgNKyb8aZRkJ7xJBfWn7pq2U2WK5tMyJxjWAMa5WJpZi6GTL8rKzhvirKmDNhM2",
  "key17": "2DgbDzRQTW2KcezPPHDhGhbHoqRMAJWigtYSrzhQwj2Ba6jVredUHD5sswMZcchdFGEBhbRtogb54UTDbyg3jwo6",
  "key18": "3hAwBUMK8yr2z83X2zWTFdvrVzjV1TZZAX6744LJi1baqD1w8casDUEE623GhJXkkao8Ja9LcVAdW1pewdAgFheX",
  "key19": "3rmFFnaxtpT8QyaGTK1qEdxNpT4BEERDDf4TZndEQ5uAYfMDJh9HThETbANNVod5XUHe6PK6pnaRV41ReXoXCma8",
  "key20": "5CnPrBWvfbPVwodz7EuoigdE3wY9ypvQH4pHUBwF8PLx2fktrEnZq3TBNLHfQYNfp9kujjDtvSwKzonHPGMppbX5",
  "key21": "4HuE55HdF8AtEv1T1SqSBEXJRm4iuW1XN9LqCCUBnsmShT3XUW9F3XFnq5tjc2FkcfVPRYn2M5bQDWEMvxRCa8L3",
  "key22": "4Sk2WjCn4T8E42Yd7u3B7hZV3K4Z2m4gJm4RmBY3iqjBhhpabxLSAZZ9tNP2LXxrx9hhbjvHtQ2bERaDXueYMSSb",
  "key23": "5Xf93TA7HvbsuekYAaYV383LupBoSGLjbJtybDayHZvgTum3PxKo3zni7F6VqKGk5sRSjgUVbEZL5zX4trzv96wa",
  "key24": "2qYtdGDvWTb3waa1QVCdiredXK56S6vokNs5bSqnH6dds8mimeEF74KJCNLugqaX4WnhofHacEm8iuifThzbvmk5",
  "key25": "56riuEYgYTC6sjtQKMSmgJrR1ymX2fCUBnMhwqWGmL1feHbnVLHgKtpHS1AnCP7duMUn1tF19zfM4GHTQYm4cLnR",
  "key26": "4iPKj9SJTREVNw2U471LrgsF4rvQL84vTZdmdTTB2u6Ekd4m6NXT2AmczcYcnMAC2FH8mX1mHN5Y7bMnnAgbiuHK",
  "key27": "DFbxs3wE28iYb9Dushpf77T9SwAdMvFjdHy2G6g4RexXpiKepTPxfWhVnxGctmEY2cRcMDZPMciT1NChDpYGsDy",
  "key28": "5LRcG6pFQH9sid2LVSb1BCabya7pUtixcy3tp5QXmS6yUScBkN9gwV1rD8X84nJ37j4UFV6UfqbjGF3RTqQzYv2E",
  "key29": "63wtiUaT9GNVz8dsi1QoprSuXpYnGf9ZWQxgjDsoDaWd79SJdfseGfDXYUiZ4RARmWgXFej6uRNMACPPSfo1w3Qa",
  "key30": "2zyUHQVARKDDQCGtzaER45cRWGo9qA7HYXBfF7hR8vtp25Rp5QfUNpAQvuswf6bV8No3VGT8oUtjuX6trsajPBce",
  "key31": "Y1CP8Z59LmVLCnxcMhWT5svEDpGMRzGhkqXyXU9tazxJYUQsLFXY54dsHU8QjPpJrbJGHVjvEkv3Gf5gQGzgaod",
  "key32": "4BjMZt3UoNmCxbYApPoYVcQzfDJsmVoXJoHg6LQeWFCo4ihx4pR13YWqUBcn8cqDNYdwKCmDyc7DrbqAycLNuF7M",
  "key33": "UPeVcAHPsvkHHbXGaRBJ1XM1idVo9nT8rLFAbDGwG6chcNkuvGtoc9bggGr1x3gyKmTTaWwx7DgEhs1USZv7SYq",
  "key34": "ZVqKasb42JmehCTScizwc6N9KNEb3gQ5Qr6RTEQ6Wm4VncdXyYjEe7csK1Ja6qbKdeH8CuQ1vDhtXShohJHBTZH",
  "key35": "4ssueTR85gixScmLHqjggrmj1rCaaNyyo9CmBucWefkZaER3ncoqzPSJ3NVWngnPrqXx3CRw4uykM8dQRmyncuL7",
  "key36": "2pNxYYky9ccpJXta1FXwmDsjXUrfZPgCoNycTir7G3qw9VDAKKvyLRWYgX4dWfayMs9yuQ8B2JSNJgEjyx4Qb3mf",
  "key37": "5bWwiTL77UZaAQjc5r9gJjE9RGRxQnDFFaH2ZfDzEDEqp6KrkZ8PjiurTKJT1bqfAktVeVwMZ27N7VCsFxR7Tdi8",
  "key38": "3EjCDg6gTRrzc7pJ6da7FaGUnN4jgAPT8osir6K5Ehb6aFQJnvHwHPiToLJCiLX8xhk2qRHJYwoz6d5v8WCzQnxW",
  "key39": "2Kb9e8VAsJxy2Vbh6eAAm9ikH6HtSJYdmU4K7MQoVAUKp18XsjQZaCYsArxoANWrWmid6jPib372LK8Bf1rDvzhu",
  "key40": "2VKYH88fNh1XTTZSPS2kuQCRC65pEUgvSbMKSDxpFniBGb1cnJyD89nKAMpDneRdoyrzr1hT7yTUzPDnZQFFC5HM",
  "key41": "2zQqhYoYHVh9qd37nEiL1HeWcue3kVnJLm3Xcsg3XoE4Lo2XRZ5eNZaRuAdz8rbxP3e1kGZnTXdTphSQ3ybzFRYW",
  "key42": "sBtLVorVWr7nakv7E8KFUU8XXnuDFw3EUc5zq1yqkv6syQGs2Ly9UkYfFLj3tkZfcXc19isaDpY7edJvEDbeXvp",
  "key43": "4GrUFSvtJne4tgVSSbSujmMEjSHYoM3tzguGQJYpsUtMYSeqpPrFJhJCA7JrLfkE7FnozxdjwdeJ68KZhceiXCFq",
  "key44": "3uAzEK3mTgj6UtYyjptypKUpvwB3GD4iiYNJh2zR2GU5SUqgawpQsMwBumBj7QuwCAd5RRdnpk5CsDBNxYNpmRuy",
  "key45": "4Tbsqzf6Db4MAVf7ZQUVno8w5iB234DFjjzCbFDDR1Zw9TeCRb4EvM2uN9mDGthHYy9B3kjxxSvvt3gnScB2UKSv",
  "key46": "39EF9H5psCFyt2SZ1RdcTu6ehsNtuCXsGHiSAhzDYmeZwjLQmMWZyhrHA9FnBSVCkQ1bALr5zFrb9qjSptFq25M5",
  "key47": "Pa8ph1vP1eUVD2yXAA98EEczLAQ22PfCBoMTSLEeuG7MCx7TTczYWmUX7oJh7nbJGeaUXCiTr3Rw9nqamBM1PGh",
  "key48": "52NfGHVg4tU5zuQ8V5MbYm36BwZ4qg2sNdhDou5pVtS9doTQSMneaMQXH6tKnB3N5p91jnmTw6cyeLrqMmdx6zew",
  "key49": "4Z8PGHN6sqpv4wy75egR2m3SpgRPyeGjNAFgBAzstFacsJCKduMZ8VhXs8PceGMLywSM66gQiSv62yYNEEnfy9yE"
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
