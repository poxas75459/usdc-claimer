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
    "XD1fxou83vjGVGYCRZ2Tfn4FC5zkzBdRQq4seEBEMkrB6j9PxyjFbSgwQfoKasHKnhhg7mZ7Dw7o913fiw25jLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56PUAG7gFtweAVHDZyccofLrUsYUCnXfCPLyKXQzkr2n3JCUR8fq7Z8bSeRtz3zqMMcJ4nFq463bptT7LqvLUzso",
  "key1": "3ynZu4CbHQGg9CSG5hp3Z9fWspEyUQBG6iRDheShBN6SNSLatjEo92JZacpRztdrQmHWVQRPkWe1UwuGfAWQ77N3",
  "key2": "2hsMWeqETfNZuFkTgExa1cUShc3MChAiNXi3iTQWZstMvasPDbez1BF7aVDRMm9cMLE1HbvvYXipgEycSkaLmPSV",
  "key3": "CYhGBQh7NsBgiDvn5psycfqeL6jSrrySYLXNnwDn7E4Ji6PG9d6njoAVBUpdZxJngGuxhJVdFL4baUqpvvaQwZ8",
  "key4": "3d1UToXK5A7X64NXGC3LeYHoyDzqLUWGFvHmuLndEdDonbSpxyu7sHpatqFDhKW5DAapxE8pMnxiCMmZvAvt7yhB",
  "key5": "5kA7RVSXqiqFMXymekCfiALtpDpR3XTxkKkhXaMuMKsKXRPT63PRK5X8zkBjiW7maWT3kRs95Q7Gy6KMfCyn8NX8",
  "key6": "jj2f6Bi4tMKfoezkig4ZLzxx6kkJopzA8yN41tXZPNb3fsg32nDtTGUKSDmTqXCK4enFW2bZCtDPYTpZQNWhrvQ",
  "key7": "2sbd7nB2XP7n35Cw1jmpjbZrDiUYkxpSFDeUqSZVWmJU5vUy87r9NYSUjGDxFzMApYfHQ65cTb3CQj92pY31eZYk",
  "key8": "4115Yq82UeUTRQSTQMKn4W36AwCZFwwSwH9BzinjLsxSFnk8odpn2TVX6NL7r2BjoYXm7rWUKFZ9ufYQgTKA8939",
  "key9": "36sadhYFNt3Hzh4CB9tPC1kow9qCbNPNuYMSUsWeVXkrokVgQoQq8Q5FSPbXfnoTcCtyBMgUXmteyrVajB9bXtRc",
  "key10": "GH5QUJiwN6Riv56fTQQaJxw7rt1fSrq8skbqBkfaDTohCFMXegpiu4xYfQg3BR7G2HhqCEounXJB7RzTm1eWJFt",
  "key11": "2Ypd4UnmwvCWmCJQkmAee2bFmnCiByBhKpHerkY2H1SJJTE1gsR58jEpd6JnP2QsENNjkcATwpSq6KnN7tiCmLmD",
  "key12": "2h6mtFMsRMHRQcR7Gtxpc4GDieh7SCDvYWoHnSDVQV9sRFznvPDesUoeYxFTaxrYtQXMUhPYyRQ1vGJ43DNyktG1",
  "key13": "MdxMQrQvvF1XUpK4Z9TmSSF39FJ3reztcXitn6ei2LtPuowxxTNYi5Z9t77Seuh13NEFpX3YS3HuVL7a3avcXNP",
  "key14": "27gy2nv9KVxS5xMo9TuuceeZ7VkdqVyjbjFTQu2Rtmqd9fijQ7fmFK4Sd2gfBgvfYvkAhXsgufQP2dyyqHo1ddtQ",
  "key15": "3nxzkN5cigbU3iVow94Z3dAzWcCEZts6hKs1QNCUSW6K6ztUjsb3puAYXPp8mFLMtD7iKhmXc3stTbTngvfRQ5gs",
  "key16": "5CSKdHr9YQuqHaNXL2eK2ZfwDivqCVa8ESp7wh46RWPEgQmYakjc1hZQNPcADJA3YpytaFuDeTF2gLcmCFTKBs9r",
  "key17": "2Ypm6AHvCqJRjdAyZA3v59VKqkpfab5EnuD1Qndt7boAxJ3PJoV6WU87C89tQTf1u4gY4yuvN9aTGnDBbBnbWZ9Q",
  "key18": "3pSF28svopVAAJz3cQG1LSFfDwZXYSJnmTnq2xuxvzhMrCcYGWqEYzu3ZB6wcvsya1tRwRZ2LvZP8vd3JWvMZRrd",
  "key19": "5xVFNGMRDtGRvBqhtgEdJyt4eTPuWbKqndPtTkmSLbWmSyJShgmJnaBgXnw3Bit2rQC5JkiaopweFpxWZo2RJvz8",
  "key20": "yca5dMRheK77XrrxzYGiuWitS3hXHHD2zQWhzhqj5N3PbeM2rSVEnyF3s3uDLAojZiutmtNnm6QJPNpxecpwaKZ",
  "key21": "4j9d1scpYYwJFsskJhyqnSDLucS9VXsTKHwiiAM5JS2rcV8ZrMCFqfREMVQwLK2TYCD6JRatgG9UnayC3tKfDpqT",
  "key22": "2s73kEHoKKezBkBNukCKej7r1mjGCNYoAiKjBcsW69fWwsnhs34vmjqiP2o3VLK9KME56QCacAREihhpQqVLDG8e",
  "key23": "4WQorAAhPPVqsaMD55yVZrqnsRmn18ZwS56Sdh28asVhAWtCTMsZKYVT4yskVbdbVfvs5BEkGkiQLsStNjU6kmPR",
  "key24": "5tjpnBVFrgP9sUjHnij2fsHSVGEdKHC8hC4qjUJkxTot6Y3nNyPjrDhQN1pYyVvpimPdQz5A75a5xBY3Vpz3ktcA",
  "key25": "2x6w2Wgavitgqwm11g9VdUT4uNpVX4kSFw5n98DeExp7A6bZqcXgDw56WLFAjdh7qxghh6j8G1G2N4gy8h2pvcFa",
  "key26": "67kL2JNHFByorr1XVkrth76mUFYgHwAHtvJMgLkEHE92mAtJP8EdRNtfrWLRD1QJxGR3uNogyCQqHkdHQXhLbJhu",
  "key27": "5oNC8nfvJg8rHsBbBFLfobUk1M5iqCkfksjaE9YhNmkwvwp5zUrh5eWsDjzs4RmoPgpcw91LMb9pCRG9VecfczUG",
  "key28": "2VrHAnpVRMuyaYXu7HDSc4YfCn2HBw9wvxEe3xjJWZYPRwg5rB3SwJyBG8sKbrrL1rnNqoUee1r6BoCueBPzde4Z",
  "key29": "4anD8U6V74V7eRJFZLtH1aAse2gY1bczQYMttGXv5DgAeEcg58MCZ5TjfPwxRjdL7wiXYG1HsXiH5JvWQkma2NFa",
  "key30": "67jUPZiK9bRCTi9qWfQT1VSJvXapjt8qo3fpQuEix3oe7xges7Psw7YzgbJZtcbfC5QA5eZcdjk9N26tz131Sugv",
  "key31": "2wUPdsyme2BvUSCM7B2GYTshVpxnwHhZ8D3WX2Npdxa6SK41LCzx9iYL6upjjnBta1Lp3SwnhWjzgKCArUPqx13T",
  "key32": "v5FUTTt2LPdcGeJVrHVghPi5k1EmXDqcbRmtq7tkMiu8S9bKYwjShHt1s1Frx6VM5Ky5bgrALxWoHDnHjA5Mxq8",
  "key33": "4Vz43M7jerAbwP11ootAEBnwKsag7SybbyMjNcM7mo71Qo5iWP2E3KFzgJajrQjGF1UBQ1EJ1FLN7XZn36BKFw1H",
  "key34": "49dwJuP89ruxt6ZdBUT2fyJ8onh2DyQ3BaeGPkrXRb8zDmzmmLEKjqpgdJ58uEQv8qK6JGwEVmoTVpXjrabtjYeT",
  "key35": "2S6HAWXoN7NsBP1MhcZp8k2MAfiKc1B6dXmUpyYr2mU8mDXdgMbYdkzReAhDncwPyotZNYYD4LBNQgikkwsiGibj",
  "key36": "4Yx4JhSP1nDyzMYJeCg4RbwqU9Fzk4vQdvvRok6RdHhiCXPWxtTjXXqk1P7o157M7CYp9dSdH9G3AGfcMmhS4d4p",
  "key37": "3nqrjbaAERWykhGnCCjAmbApSPU6gDHs5xzwaQXbKNBS1owusa4MnFwvgoeenhjbXU7cY6Nq9fFgdWJ4D7LgiFvc",
  "key38": "3N2tufSfqeku7jb2tABfmBBQXakNTbHDEBWsmZYz6ybofZVXtQ57E92SgYVA5vaNnGHs1U5w6wPP5MbCoBTCWjKi",
  "key39": "5547eCT3mTEgAHGsLEzZ974F8u964UtPzQ7epvbJySjkmdpH2or63ojWTazekujtQ4rgEKrD64RXBtnStZjYssGx",
  "key40": "4Wfd1dvcVnSGtNxq9ZXTqw4dS74qxGU1trCnL455554TVgHSqesFFhoHdsgpxtQzEWuCc3NDJw3CAiM3Y6Je9UnT",
  "key41": "3fB5ut8aVjdot9xS5gZ3fppYMhdsWa46RW62TT4i7MxYxcx8Cst3zMdZVBy49JRj3gXsu8Cz44neqe3kTFECchvE",
  "key42": "64jQ63hkxyVyyKCaPTVwLzaQhTyUVEbcmmwrYZkJ9khBaGSj8ZmkeDVVWbTbCjWpH159d7FRxSVVRteEwGKoRFRc",
  "key43": "4qin3AwM9CV2TdE4Mxf8UsP4BoYVZ9kYG67VPywf9gP1VcYYFXtbHTJ536DaM6buELYXf3KoKwC2AQ7wKRA9VUv2",
  "key44": "eMG6pdtXuhE2w42iSxeQtJjKz8tyi6meFHRcKEVJuVEsk5DRbSJDWExpLaucEmtNfpNLoEcmZ3fPGp5HNQyMdSh",
  "key45": "4a2RLuzGzzVPmdhS9dSPWrdDJTBhvUiMLG6eMSzQ3jNEZYrCW8Ea2UztcWRs5C7m1bGe2zmV389CDLMgJaBsfMgF",
  "key46": "2mNmD5sjzVUfjzFVTbmuE1VikE2ER4QLkkQxs3rR75SkmLToBaGwvYsbSAz7NeAdqJQEiX3wnjsP9DMc7QXrkxku"
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
