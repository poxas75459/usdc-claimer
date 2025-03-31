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
    "5zmevuRd3hv9baYmABmmBnZJg8U32HbCjntbsHAReoGqUKPUAE6QsnBY4cn35XQTBtEvsRLdwjoxMhx9dB6BYfZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uHo5d9UADaZe2uY8mdGhT73xq191sjZud5qBLF9H8UkLL6YQ5JiEA2BhHQJFhUL9ejW2AXrF8Jfwi7Tp9vRJxQ",
  "key1": "4trsnmrvtnhkn83wqicHZrei6k6KYreL9FCxHfP1Uac7myaJm8aUCyfUSbmn1zcHcCj4EqfP39BT74b17nfn1uu5",
  "key2": "5aTPvYsZWcUurvYGF4TmhYaJGKZzNQb4VbF1UVTugEwqe3QxNArzZbxucN4QxG2D6QmVK1zQyAyWTyRNNnFfAgcw",
  "key3": "5C4oxMSFEnY1zxAT5Z4CPt3ZiqCae1QxLsC7p4W2URsoKeuDw1HCswtydM7MRxftGPjXVSmS7DVhJ3q7DEn83HDa",
  "key4": "N2aQE6SiyogFY55b6FRcSwKe3bZjdkdJc4U32uGExZReB4fsU4iHwce3ESMqy9iaTav95mcBSDSv5nkX1opskmw",
  "key5": "3eTiy1BQaMwGSxKeGUBp4gTy5FSUWt2kiprBLZQ3SzcLybTasDdK4YMAhSNAD174FGAVrzsKEbzzFNNLSQsH22FJ",
  "key6": "qJp4WytUPdnpQqfNrztpjL6qPFNzviDvL4atanoMEGjnprVYLaUa9gA94Vwuj6mZJcMWqZ2UgrsQQp37M92waKa",
  "key7": "2WSWr8JsP39rK9v4kQDKqX9kUBWNK7ActfnQrqbtUktpm8GrmttAQevqnKBSHY1azdVPz8VBk5mQsFo7Rsh11pRS",
  "key8": "5omxPTWu98RprWcHh3TdEzrLanfxAM6LYtrSehN4cgDyNB4TerSXdkraEe97dNmBdW3xGNJ3ijyN8VgSQHAPJmkg",
  "key9": "ypEhrn7d1gxzBPYVHEyWxmkRjt9M5dvMkmD2ZcfuGAChVzgiTA7VEeUyzeBAgNrWoXJPgtVZ3mHkcnsdinrbub8",
  "key10": "3T93obecqWttzNio5ykmNgNMo9k3SyzNB2xovagBbU5ayatjfnyTXNcPmpFQuELqXgW7wtv25ChzSQPisXekbX98",
  "key11": "5vuUM2EFQhnn29aVB6bArzbq35TjT2fsvFP8mrTnw1WN5s8tV7BzRHcRvmejuFh1cLK9Xe3wdodzFNt4F9GE97bZ",
  "key12": "3oZjAm1g1vMSKhPohnFDRyRY5dTCC89KW4hqg4VWsMUF4BR1LW5959WVeBSxgfHkfA8M8dZXYcpp77RmvtzbF5nu",
  "key13": "3ozESDHXFeWsWPK2nYA5VJkncaiDDCMstibcH8dzku28KiX1Ng4aPj8tPjethodbhDAwwPehbK9TPxHKGcHuKvRt",
  "key14": "DbvBYgym12P7bWDqP41XsoHRKx2oa95PySB6itRg9iT6HNMHsAWjokdM69FSvEcHNJHiif9sSA9crjEPDvB8i91",
  "key15": "2UkSaEoUHuKsHmsMff9oYcNUCQb8ZAh6y2ULj92RNdsP4tkiQywP4wLX64FtTJukX94qNG9ZGxzT88i4mzKwVYyH",
  "key16": "CF6GGtmQZb78pWybbMjJg6U4SXtcn749VsX5dzUSgqE4wGYap6QSckNm1goTXe9xDz8a2iNTofw6ZHhF2MvA2cH",
  "key17": "4vAT92CMc6grzCu5Vvig2YVtkjenWm8gUzzMZL52EUoc63JLr9FJojrXfA6mm4cMK7btXDB3dn5WnX4KAZAJYHMa",
  "key18": "4T3rwrWooZBu1moAUMMZ3qdB5mduWEWydA32UepPLQfp2UEMGd3oKLsAo7Yt8g8eHv1PTuC5e3y839AapKMw6r2C",
  "key19": "3kDDDDp81rqragfSCTqhgNn2AnabEfuYz3MyydZ2hy98Vu67cTZxbKmGTR78zwu66yrnc3XuGHQe8fUEJNesEarm",
  "key20": "3qE5GMptoAdUzjeebtewDcAWLvEaiqqweLVaJmYMhB6r86SrVfU87SW1YxaszsykQcUSWUQEuBGKGitbU3hBNdPi",
  "key21": "5AdeXTf5eNgLgtP3yAYbcioRY64U3jG8SnJPoFJoWaG7xzaM3sMDLqDDno2TTeanTxUvmxwBUQjoTN6VuWogQLmf",
  "key22": "4Hzp9XyNJYNwqe9kAFmvyDAAXWS86JuDpQFBJQ2DPM2huPGYHM4xzzKAS7HExawgYKhorGm4x3pTXvgZ9RSpFh7g",
  "key23": "5fgPVfuFcG6pPEEJjQoEveJfU9j17xJwNeu4u9fXJ1khSGzddEo3uVA87eyCTUf3vZ3wz6Ju3DC8KAXCVdEdvKQt",
  "key24": "2Ctdd4vCp9w5RYDMVnyvTKxxA457WAhjUnTkVzVFycsSx3upSF7KyK8xaZjG6TT1fiC9qbWpoKucbL9YBToH878Y",
  "key25": "5FNvGxjQ9KhS2u77SQnWCa5tqUoxRfqGRooMoYMRpn5AwTzsy6S5VjQquts785ct4qFT3e8AG9b1mxyXsEkqSMFK",
  "key26": "4bmV2NXdpiRGRrY65Zki4UDg1DqF3dgP9YMs74RzUXKfkGJ8uuUFa8aCsu8LEFia5wWnSfRfLt7vhGXDFkc1eVMk",
  "key27": "5NVNTMkuRiFey69rwu7g4vNZcxZNiQMSp3p4yMvnSHc1rC3PMwHeoezuiE1MWerUBdZpCyZAQVr6x3EntuvWkN8s",
  "key28": "5ZPQhs4a8Se63u9MrGbMq1CgoxNVYfkbHKJZnNjoXFhatLEQDfQ7Ah3TDyJ1Szsx9gL79q6PGwrbSoQtCdmuVEg3",
  "key29": "5X4Gcch8Ei7APqKw4bR2Ft9EVb5sSNn6zDfC13ruoxsuspWwn3GjehVKLAGtKCcSwravuDKv9KLfrzek5ecDQwDh",
  "key30": "3YyMzrQFfF5YrVqNzTS4kZc4urPbvmxnYC1RvtvGjSk3Hec7H6Q4ffn5bwAAHrCUEnEfp1vuPTxzdM4FsYTcGz8X",
  "key31": "2WGCpkkdaKF43AU1bQXRmzDK5Riy41575mjfmPw8EuhfTCjgdABBwFcC2XYnjB8X2FT2eKebkJbtQW1HYoxUmkYB",
  "key32": "45jPDsFmzeFBrtmP6cAu843t9TZEnGpSBZnsZ4Yh2kj9tS87QrZ8EGJNQKbobAqw3fY7vCNV98awCfc7aXXk8oLW",
  "key33": "JUgEHZ3H2YTRPojdNkFbZi4jWxLMZCYjUKuZEZ9Tjv36g2yHVzDcy3ZJh3Jm1GTRjTL3MUT5nNRXbkreYc3KUdB",
  "key34": "5rfUGYnKWTEFfHvmsy1bNP9G19feEddiYEScie9D8zxsPiHTqb9vrZ9UFgfKYzYzpy5GtBuv6C7GFdmgn2dpmEZt",
  "key35": "5tpHcCTMNfvbHNzfc7K2N24JMpQXVEtuj7Dkakt58x5aTd9Yr94P7kx235mWQNEe8SErNwmGfc5VcLqfcawt2YuM",
  "key36": "Zb7zBoQXMJ9wgjJjf643zQqBoof9RJ6zwb8XTuWgq1eJfX67nUeixJCkfBPzrv5RLqzMyVM6EPj9crv5cvYLb1g"
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
