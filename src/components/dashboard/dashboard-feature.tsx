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
    "4EyegF7PPFWZpTZRmhQ21gRGrR8EKy7r1NojVV6nMn84fELgH88L2gaofmS4B9oLiku67vKg2PyhMhkjNZan3jKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rPMA2tYAvh1J8tuxv4m818dx5TogLNYus6ABZyqiXv2d9v4CpFBRjKetTCnjAb3xEz7nFAqB4hvycaGQeaPU3Xq",
  "key1": "2gTbyNmYmuT57fUjNJthS3V82XCVAVRv4cS6aZJ372F8dktV1A5NUQmG3FdTnMDTv53vHEioy5f1BDSKUU5uSch5",
  "key2": "5bFh8avLfJgxNJ4W4MxYpzkSjrTgeHx2YuVFwY6pw3NSStmUP3iv3knp2vLzqXAPAzxnY8fCrhy4i72xFvnbnPSE",
  "key3": "32RKR7SN6zvccjnCtuLxtjaYUdzhRAMANk6UYRwziWWMJ2McCbfm5g1QjccSaZBatKBBF3xwD7Nme1smQFwbXAAG",
  "key4": "uZUAf6dZgDCwG6ofhggHZiSsNAGRND43Rmeu6EYFPeevD9cNjG6Z8QzmQP4gJRPEiZYGXhj8utcHf3Q7jNEuDx5",
  "key5": "2ML2uKPKEGDFZyW7D5vUdgPXyCPWKFKaeCBT2Dfj7m8HQRSq9HprbJidb1PNbuR6moeFMKHnspLPMEDKVzKF3qh8",
  "key6": "J8SErtBqHLuYrz6npLP1UETup7DwMdD62rw4FGjf1aMXVhLNbGT48F2wX71mkBFRYY3njAmk71vJz3B426Q462Z",
  "key7": "4KPo6fa3qwpEqYMsQE1LJACxGdFDYnS1nMY2RxYXiwwX2nRqEV1mKk8qSBFp9pH4fC8n8YVZhp1785FC4QTYjNB4",
  "key8": "5ghSvNhdNyYP29wBE5xzyyTdN5NeKJeA7MvyM4JUFmpeQSG9zZaHoq67xStx3C91Rx9r8zoMLfJsBUuvWcu6pKRp",
  "key9": "5qu1Xm7zSeUa6xPeL2UxQx2v2UScUHsAXjKSem2f3iEDc97zUr5bTEq2ynz5wVD4vZjAVxYuQ6ANVnn3364w3t2i",
  "key10": "2yQeWV4TeFfbPQwdmEet1r6gRiLizd8BL7aRmrzRSCySHwwzGKjg5vyABKRdBPXYRSUCmgUBWUBHCDQYJ3sV9wEW",
  "key11": "57XuPzAuTG86m79nL1sTL1hxdbwUt3rcHf5Bw73ThcshVkWhH9fDzs2zRgu1LWaPpBQwjaPzWHQriBXCE8mz7uD",
  "key12": "vCrZ6dXrr9RwV9MasDH3HBd5MUef9mz3NoX1tBSA2qxa96YkFTvwRzyjbsWFQPgk7W9KaEVbZLBEEkE9hkV2vHo",
  "key13": "5qDmnndSGGMgZnE2T4GvDiFZVoYCjahpB3G3B1AvqfSYifw1xfbRVk17U2eAfY5nm4vHEYCFNHVNibwFz7Y8CRW3",
  "key14": "Jfcp5WKbP3pF71431VqLfVaiLhEC2jCq17xBPXgymkjsAFun7L4PKqrGxy1S9vwdVz8kGtgcFeDhKWJEXZC85KG",
  "key15": "3m9MAzEuJ2rTcFBTRVQAjDFPQ8svnKuizWwrfPE6gkRXUfgx5mRDCTfMV58x2KAcGi7infA6pkxPhAAs9eYHmTy8",
  "key16": "4dQqgCjW1gq6qrYv4UARL7bXvPkGBWDcNrDK7fRKCwig4gNeaZEzDVy73i3YG6b8rJ6boag4qttYzwTbyViKpckS",
  "key17": "58DfZH5CEWyonF6PAY3xcNXvTjxC8cWwMbzMRxodeYPN9A4sc7ntSE2tLUmZzufqz4qSGxgB1DJ73uaKH4ymJxPA",
  "key18": "54Y8xaEQ1EQCL2GAVGqtSsZsAxbvumGaxFMMUTQDH7eCMg3XRqZExx4ysbB3L4yrGqgUZwiqDEDENWHshse6Lc3W",
  "key19": "2abSiEPsRtMNZCtgFn8TAtAzsJ1usGn5jbHK7nH42cqQwU4JBDQ2sasP9BLJvPpMd6PFt6fregHzPk9okTxceS9P",
  "key20": "3Zrf9uF1cCmFy3eKN4QEXKEimdozUmXYfwRvf4bWVeGB6JdXGav6j6121ZRMrmN9tviepLGwZeg2Pg1WCKcwTFsX",
  "key21": "3dT59e6DcPL63YMmTx2KDq2Rv3nynqrihXEmzcDAFRHYcK4aiRDHzUXtZeb2rnYJpcna6TaCUEjTkduPiYnx8zQv",
  "key22": "4bWCt4AGJi7wrK7rRxGhGM2WCVSRWHiR8WJpwXLgJYzUQnrcZZqpbM3PN4p8M5tFMquBSnWDpTBAS4R3knGSbNqf",
  "key23": "YCpdj8ohHyqd4J8WVDudKeBnm2kZEhz4UbFrJNz6jppzHBshmSUs7fjo6stzQiosCb6efvGD8D176z11VVMArHX",
  "key24": "MDd8NWfFYxKwwshe62xnKfaPEKpuAudJbmoZK5Jj6KUPMz4S8ds1FUK4wdmgdLJ6CXWVjbfoEMjC3jfptqE8VRM",
  "key25": "45cf9wouhRka41RF2oRtaY6f7HDsnLC2udqzFykYKxiZwRkyvFEfw7iJVweNz1FaouBmFcZXqeV6sxv9tUsRsqQq",
  "key26": "MWKwNFdhmE9AQMcQbs8pnH8vqCjiRexqQTjWzmXhgRuYZq4fWVYPTeC47zcwS2euhSXYPz7m3nza4xMVBkTdChJ",
  "key27": "44P8SVoab4M3WSUHQuLTS9v2Yp5ercZsPzRLCpLHooLM2vp1G9v63rfqh8krZ7nW91VbgwCazXKreLkS6ZsCGM2W",
  "key28": "3FoLuJDpD2MKmo3KJowPCk5qseMyxkVkMeciuMkrbk3Y4T8HfZsgoPJnoLU9UDhefDHTD1yZxsy3M23HrHQdZ4mZ",
  "key29": "3eFef3NF1L7c47gNpQPbqDr7YF1aiGtDZs5XQiHXiQejq6BSx8kEkWguVbqmkVL3dZekpygbHhN6j64YDnayUC5p",
  "key30": "4tExJLJER1L8aui498hzBqCqcC59LqsdBma7FeHsAHE5czCcmGm2kJp3YiAuXbQL9FcGj1AQx2x9aDHkCZGpsLiW",
  "key31": "2B2CYx2W6rsxPM68AxL5dR8AHsqTGBm1D5PmwL74jFHmFY7PKXReEBKARaEy1NmbeoHCkUUto3SQFTdtQFJNUZz6",
  "key32": "3VhwzZpm8WFSgFLxugiS2sRWb3dchdbisdWFPe65qKQnh7BRKkuf6fPCwG1Ly2iJ81iH98HFYTJYkeQzQApmG2vq",
  "key33": "2kTzAD4fZpasNY8LT1EWFLcHW7YpbpkdwBVog6Hy7zLZosxrEmFCh7BZfscjUDeG8r6QcrvxkJKqMbqTn6M7YgLk",
  "key34": "5NuPRv2L9YgkCE7kG3e5kSgnSun7Fuh4nZE5iaoTP5W2Y6vib52i7Tj1Hys4ThCR5FXnbjAos2M3DEDRkq44aApG",
  "key35": "5ir9UrirQ8Ya6TY3wLo2V9BZ6wssiFkHAjTobUiewiTx3wi3yjG8RdVDh4iqYq7sM6VGEbuRHoDWcRoGPJVpFz2o",
  "key36": "5n2tPTX1R9rhGT8maGKbzswgupk4FdX8xHvRSqAB4KM9523zntHbQYoDu3TN827ryy5d25VSDPRpYbAzXERQJ71",
  "key37": "57xbUbbb1XEfG6PbqfpRG3SNsBFVRcdYuqfXcRqQuXZXw4mkAZc9pJyDKs1U7yXmr5wFf2W1Bv3RogWzX4ZXfF9J",
  "key38": "4sy5cBGgsE1fx3MxMyo6KsmbX17rK2nbPMsBAcEn1W4Ex2D2MPNCt2Q1zq8Gy5aRG2BZC23D9VJ3JACox7qmJ3ZA",
  "key39": "3LhmFamwe3JUV722hFMoA6TsGNKLqZBaPdN2kxQFoyXtkFGz6M6TCsRPCtPX6D9Bv78UT9VCmg76vqffzuPsffK8",
  "key40": "2YiZmy5TYNCv4Q1WcH62MLaG34tc74zn7WZBVx9HzkyMXpTXerjprtgswt8fUNhRNSJnrzgJ9d6pxasQx8hG64H8",
  "key41": "2fEree52v34QXQ9v4c8NL1N8uJJXiS3CFr5i2tx8NLhWPAxrUW4uzpxHek978js3guQiqiQ51sxwJhy6NCHF7Joo",
  "key42": "2Mu3XFRV1Ukkf2Hm3w7pp14LnRNrJsi9SNzFamov8Kx5m9u1C2WWQhgc9cgHAQfnmw8hek4MxP93otziiGdz2xqK",
  "key43": "bZmiS26wZ5Ysx3btkxhTAoEb7kBqgVfp7CG3ZM6HJBUVW2Pu9SziXxdTfSngmAeBG1NzYTFQpbJy4HTkGZwqmmE"
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
