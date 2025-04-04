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
    "37vnnuhG5hmqQnrTPm8vZNwouJtyeJexGWg7WSQW7iLkEWdNxQoYBketYMw668jYGCPrbPytfT3WiTu2w7oPoodH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mZbRSKdFNJqo1Nw6QdujF6WEhnhyTsmzDPPVJ2CZMj6nFL2HPDXvfuiGjo1kHon59exgaQvJghMXxMEiUWKEQXQ",
  "key1": "4nPDEEz1v4FmgrNfD5M16tHv2q9uyFtHrvvNz4JZCJk1B8MVmMLSCgtwuBteWrrqXqprTjXdfCWBWVdCvUtES7TR",
  "key2": "5chpjPFSu27Ajkymm9sjYV7NMTydnyNo6fmqgYFVxKce2AYiG9ci7SUvhiCsdT1k7iyrvhEJaLfqsbae9Tt6jycK",
  "key3": "25zVZiR7eaAWjVXaud7V62pmD9VVikctT9V3KGezb4G1RyRePyKbDkNZfynHp1gDoLfTm1LiWw9U8xkiGjGs3Nc1",
  "key4": "2mq21fSNv4fee2UB7QXh3W3Pfgc5wQFw6nWZEi7Z2ihDrBGkcBSokL5GQUGGgM6Mu2TTAQYSirCwEaFxoUczajTe",
  "key5": "2f4YcaXEUMfgBuGMZ61r2aJbgSDzx2PXRwMX1XH46QXmHmHSCNVoyMY62Rtok7x6x5gX4yVLnvstzr2AQghayeNs",
  "key6": "5jHcjqzyH1bm8QQE3eYpX24s9KtcjbgYp6JRAvULQV56KZusTAPiTW4Y8euona6Yo4GyNFoMxh4EZQJMogU8KACz",
  "key7": "2WP6NPjYGiSgKFcTUhpQpYrpN13hQ9NBmWHTR4Pq6Nuc1ufMym3SDcGXYb8mU69ZbVAvJYB2qsrJoFpNbE5fMvCg",
  "key8": "iM8omWp3myjc5sLMfBLpbufSEpoLeHqX5T2VEqawo4UQ76fos5GGuRuZDdLKDRqAFN8fyMuBvGEvf5HoFNfQuqT",
  "key9": "5gKNPYro328q5q46WabbQkJbahbra7j42QK2KNUN9VpC1gFYWojqevRsCEfpmjVhdNjLXbQwKG6fjNWQB9i4mWgy",
  "key10": "3J4bN6ogz6g376LaYJr4t5N1t2DbvCJx6kabU3EsCm9LyFbGc2JJ9XtrE8ZhoyBFw8TicKBZc12Z6HNS8BF32jhH",
  "key11": "2RRfh2Mtm2ccADGteWiYMMj62X5FkW6WUr2ThLkrzmh4fWcVGJbXnekKFPmFCctMxJEH7g3gmF5hRVwcWjfDnufz",
  "key12": "5WvR9h68nbCe7gByiZcNMUERi15BboR9yC1nnNB5PL5i2LoBingSY69RV732VsFCKGng2bVZdkTmLSKvByqb7pJG",
  "key13": "4NpjPPSMFm6QEofPgsmURgDiTsvHo6VkYtScT79z9HxjpheaAC4PjN4NzFMiTws55JKbaTkhdqACUN3gVjoKntQk",
  "key14": "5Ueh1GG7TxbkDjSBuu3nZA9Y9AZEKT7i1fQR8DkZCU7PSE1iMooL5G3UDfCWSNfM5VBBTt8V8gNmM9AjV917pJ9G",
  "key15": "2PPTHCDNFM7MNSqd5rRJ7ckCJucXieKFrmkxw3mxcFgv7Y2TJo4th6LDmmHXZQExEvntVsUce8NTB7sRTsj2yvCg",
  "key16": "F3NeMDNaMC42fbnChbG4db3NvEVPEpdgRy36QV4Q9L9Mw1PMKkgzj5Zf4jUjF1cjNsWFLjZNzYjn7gLkgvE9aUb",
  "key17": "36FwYMdTUgsQqF3fS6qQrbhZJoKs1mwgyFJfNvDZePjsvyj5r7VN27fJPtbbT3EdZEGhmgrLkGWEcroAinviyp45",
  "key18": "2sqRi3LUfANbz2GrRu4Kt1xwQngRAMfE38Nve8nRGGAtd9j2p9UpJrPiz9Rk12iZoaeQnSx53VaJfp7ceRSnhmzH",
  "key19": "4rLbSEVqB8TA9LQgCScNXZAN1JJcSbn3gvWZJ9dGziWTrwcMGuUni6TuKHUG9iXXtxkhY92TpkmLqTetLd9x75C8",
  "key20": "3k5vpMSduVYYUBZYvxL87uvjQTa38rbZmjUUo2emLjGmB3n1WbwpGY3AFPTbhvFro5uGC8tetL3UUfsXFwy3KKVs",
  "key21": "5i8X4PEfKfeZ9KcyRhyKq4xAMqs6U4nzuVHCFBRKZDA5yuaQvFHzFa4JsQMVbgv9RUomQSU7RBg57RUoNMy4neC5",
  "key22": "hTug97o8Q3iv32ydpUpBSe2trkX6bCTymZ5rngSuVtrJ1iZK35BLHeBuWCKpwYGQjcqWBFcLqTbhu6FaLcjBe1a",
  "key23": "3qCAghGrWfYYw9P8d88HmH8oNMMAxVJ8LFLU2dyfsY9PVyDok28RAKA3Pze9AJVGjKWSXGvRsDWM3FFm3GtCQ7mQ",
  "key24": "5rGUSqf7vKP5xSewTSMqxP4xBh1vvLzpKpXpXgU6DrpyvJw6G3SJsWBEoaF2oxVb36LvA9kvkz71yCxQW7LKQnRW",
  "key25": "39ymK6q2meNqMiDx7zUeP74EdVYyB8jAkexNMfxa5RM2f7MX1RaAX83WjKyS86T6Bgej4HNe6HcrZNCL78AQwKac",
  "key26": "y3mebEXDcj5dvKkaSguzEQVMUP28UpHG41aDMgFiUhTkPXS5R52J33yqLoLW66VF3MQbWtWfKPFYZKun8LVEN54",
  "key27": "42qEE7Vyvakk3jxbZT3MDbzUzbBgTR1Vn3vy75BMHkfi6JswhuJet8Tknfg7o499DR9LX1bxhoQ3o7zRHY2dxW2a",
  "key28": "64ffKd8zphbXxSqwogxdYzsftU3yxM7KwRHNvUvi7uP6CALXmxMLZJEcHASFnUdaMGY8aqrvttJXzg3UQwVWpj7K",
  "key29": "4xsM6K26k5LSU5YFmdRP8irFVjceXFA1EjPpua3gNEa2xt6EDW6ojiwHLcxuHK2tW3neaN1vLK9azuSHmLtKCNiw",
  "key30": "5NLQb5LqxLxqcFtfZ2UuonsXyutP9AZ9WU86uSoZzhmZG7d2YtMx6atZ7eUfTVLTjwLqZa3mFECyErxy1KYRkvVt",
  "key31": "YwANgbSLojLeBKE7L1A3CGaPfvHVaeV83KaHQ2SWvRMRMkYtaSPb1Qbjm4XcyRYa2AtyfsMrBFgWEQCTU9CBsDV",
  "key32": "4Y5pQHakGcCZm5U3wLTraDVfvNyyrqzHWDDmGi9VdBE5622zWLyh7S22SVPXHXVdWGoSctSqTwfE89Mi7nzYdx6F",
  "key33": "3hXinDpptbqJpQ95vAcPhxnB7wFHatN4wD65NA3aVKZpKnLbbgcWkcQqjvfd3nHnXKVoD2n6fz8BCcKnguYRTc9Y",
  "key34": "3FouYcqAfyWfb3iv6tu2CSgqFp2sSSp7mmgbm3GwAsu4DwJHz5oUTx8Rh8ZkmRbZn8WNLFsL1oX7cNyJNTsfk6Lf",
  "key35": "3tJx3DpRbq6tzqvybgDdYE9Gs7RxEdrTB6bS7suiEG4zau24k2m4cdXEYpbsPae7sideV4VbxZ3jJFpxcYMfczMv",
  "key36": "3fr9YT2FrKEncqha6HevRaxatZ9R4q2wtkkCn6ypDiQcRGMn1yNw3qXC5ZWoigsgUSNxa4kGxNojnhzU7XTYQuAG",
  "key37": "2M2P7kGxehczbMCvLPXHz2foaBTiX8FyvjtGUpjJDSj2pJYDzahCsHpoT9dQWXhNQiebytFi7YSNBGrjzotdwXRu",
  "key38": "3ptEoSNyehnpYX23WTy2fjj2tt7NLMpj9oRr91bq6b4g3zBzJrTfRbRozpJo46wfikBBJWYjHsPQbG6D73L8BhRW",
  "key39": "4oN6qFNMsdgj6BP1BHCJbXhhztGLAuUtyNTX4G6GWz6cTcJjjkGn7w5ydxmRGfmtX1vaWmxEfngKkQarsffDtmUH",
  "key40": "5yTr8tRm988GVEVgSqZEaE9eAn9uEg5C3d3bEum1777Y7rSqgSugBW3svwp6r51eZ4sWCVNTB6Jy1RVH2RsSyhrN",
  "key41": "5ryeZU2ozuHuV3z4SXaXYiasJvpxfR4zqN61pqhBrgEnLUXgfcXEnwqPcN8twYS4HiKBZ2nL7BmykUp2rQsKHaGf",
  "key42": "38NTA6FqBLYUHavxeUPGzt8p4ywyK2kTuGwcP2smxME1TSD2mRdpFUr2Z62zhdVPd41B3SFGt2RP63XPfE6zzZrL",
  "key43": "37khzQi5jzGLrQJK1vuq458aFsmARGbwyNmwH3a2EPzTVKYfi2sAJ19N55jKgnH5WSkpmKcgka4g1a6xXChunzyc",
  "key44": "24b8vPZPi4whZzhA1mS1bEmGEZpDYTUCvxdwQBUM7FijnN3iDm72TtcP9JjEb1cuofCVsS6G234UKMpD3uQtZ8gY",
  "key45": "4DpQufaV5AxgKTRR2ypsUQjPukKefVou88CMPEWCMkFUUHzjs34BLS3xaDWtbsceNcevyXDAfbAW2HjQavCSoga4",
  "key46": "3ysnEkneCdyKKrmxoFeDYLBbdcqc9KmCXMbQHbt58jRAuvDpprSGsoBaevQoma8c8HX926yQcycVx73xicG8YVKX",
  "key47": "3iHF4TtazxVAdqAm4f2XdFVywi6GftYFxQERLe2hhApyfPkdjxjG7UtivnBGNTmALf3GJzY1LdegjVGR6STvLb5o",
  "key48": "36PnVq2pqveLaEXjJW6XTsj4j4dihHAnuEpC9QsjiSZiGbrwA1QuQnoGLXfAnNAeeYQdXH1Fscq8Y8zT6WJ98AUX",
  "key49": "vbaB6L9GcEiQeqFiph2v3W7dLNwrJCDLEQcn3Am63XzHGVsqmKvGLi9SfAcH7SKeYRggCSUuKNoNBHhP5mTxpWi"
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
