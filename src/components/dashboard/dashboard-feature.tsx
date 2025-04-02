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
    "4b6mqktgb1xAsTg8CohXWyFMs1jK7vQv72BWPoskBp98W1Bq4SbRpEqgdTeKUwHgYQ4r1Y5n7ga1ek9GooyYGFJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zWpNvKutoX5QGjkP1RKwpMp75qxfrhawBaetK1nNvkuho8EX2mpSGTG9bx4e6ND5kpFbXBtVX3EhybrCPcmMptp",
  "key1": "2kQ5tnWCXykmz44hQz9ctohyjL2o7izvzMHbjK25rqEfFE9TSSfgZ1QjTXkrDeR8cHF3xD7UGAsPAvJsxUp8p5TS",
  "key2": "3AE6tinD3hzXhq59eCSkVtrkZ1Lwx9ZE8iSvkjNZ917aCcWtM9UXx3TPbN26LS13mebRM5d5AJVq1UPgodKqy3J4",
  "key3": "3hRwbjHDUnFYVYvZa6Hid2R6jGNdJK7XZ2wBHdBYzfkwoqD89oHPJskFL5HgxvcuM1E4koAq8TPrkcBuzqEpKkbW",
  "key4": "LknSoe31oB8XSmFAtVEEdNZAcdVydUDL54Ki6TQ6PCaEG5qMfnPAKBEx7riSpsnxdfkxpJ44Z9pWUiMEK5imn2k",
  "key5": "5tdGWzt6abHU3kj2yEvykLHa81UNNuY9GuLb8vYceeA822WGuiTzPDSZsS9MdwjCTk5WK5NPYi9PocFTnuvB8Qzq",
  "key6": "5ohyuvqh5RehNbVVHdQYW9fgstP1yKuYBvMMiJRfLPpt3m8zEPECyBDYdcBvvkryPyhccw2G1HoQZRhB6ARG7N48",
  "key7": "3V1wbihaHS8KbS9Q4RLQrykmRj4Q8UgQUQfgks7GGq8Q2AVtdJBCZNhQhSwsgsEgeeaLgzSTyXg4Rts8RFAhXTUD",
  "key8": "4nYViK1J4BcKtJq5SqtE2BvpYfWGZTMrW6oN69eZsrkYwTuevCR9UMnZzH8dVtsPbrbmm7oSBFcUZRr39TyVi7dq",
  "key9": "4A8CEzzcjmk6oFcCDSWaFSYL5zu2hkWXcSsUJjhMuwbeSDWyUpATcjdfdN3bmNkm1uT7Uttd9uF9kGUTk5Ho1PZD",
  "key10": "39aG99dbBB54wp59oSzya7eNXacRcnGBXrZhZWN7SvQRcTTtJyzUWN3m7nvx4pdD2Z3FqVi55mRSDNw7X1368cE5",
  "key11": "3VB1C79KsGDpSNzLRZZnSd1oGXWsfqiWoGmiiJJPDd2PwKdp7PBE8Jc2cXeVAQnYH6TK1HLwu6KqiiH8hKeAsXFT",
  "key12": "4X3ySyrH9QJxVcV4Qt8Si676gewWJFUAyJ6CNLC9y88VgA9WByMMovTaeXZCcrcTYnhvSRZF93PYduvbmtYfrp9j",
  "key13": "2ajMgNz2jZZmMnqG3XobcF3rPeKGKRhZtZjfHYX4vH2oK9A4HuxNbCgsbLT72JCk2Rfu9Y4uy5fufXTDVNVxQjoD",
  "key14": "2QnsNpwiCYmQoESHgz3jx7eWpEBnovpu7FPKnRKaAPmYVi8dgggzueEBsUfa2zgLzcvbHEbZfopYJxDuuScxgaRs",
  "key15": "2h3NEfXBQCUrtKtxLQ5KJ2PsAAAYHfTHe7xjx13BZP96PjyLdy9T9g9ALCNVwRv9499Gd7b1kPkKHQVSjv5vXAZA",
  "key16": "2CRceJH3EoBMDevtVsgf47RZ7YV6SvZcEnhFcbgwnaHwXK3bsWTHpeHJXe5ECrjrwsxWFedu8wNbLbDQxg24JJZx",
  "key17": "37MFgE7rMd8FwVrFVa1ujptAgNSqTug3dHzYycjFgsrd6g4bNJibtLCA9rCp6BZHjnbxyMzgANURYSgisFGTRs1A",
  "key18": "62F7gpwTS2HPbpAGVVMQPcg2dUbQGFcwhvWKAHyCBVLEKipATEAK8tqCzaf8C2BgDQiYHfKkjxMwTyVQy42f4ZJb",
  "key19": "2hT6EFkSHVTg9KM8vSzdggh1LPgnuU6LJgDf6YnXcsVhPzHTfFEfXoYLenJ5KCKYWLxu8US4AekVoxxhov93LVfu",
  "key20": "5FBVTWWZJ5MnpLcZFfzTmjUJYCXtJqvaesFhS2oStZBV7Uoud3uBtyFqzkmyM1xb4qdVQ6Hmxa2E6U1JEdtBwynK",
  "key21": "AinqnMD8RFoGcdrF3d8UKW3u9n46oN21RatdTUiPo7bqLcsdasfNrNRwFuQrgqeoptuu4yPS7ANXv86B6HvV37t",
  "key22": "38BsSAX38cCTFmVttCrcQaSw87EuyC2bZ9riqgpPLYu1Gsm5N8BDybNVKojyFTo36awdQNrKo71LHqVC8jBWbCXA",
  "key23": "645k3Pg5CiRKjdExUSLe4ewF99KKWEEnk7dMdzC7RjqmmfqHmD3HUBERsuHtPVgT6DXJQWXQvnFurUZ8UAL24kec",
  "key24": "2k15V5BJDZvC8zKkhWfqjBhCJFiF1XwEPL47nNtkDRtNT5wWXmc9fTw5qsdKmkf2HczYBfGbEqRBF3ihcwSWhMj6",
  "key25": "5DqJ4882H3q2WvSye8UHSPGG4t2KmqzQz2QuXdyauB9JLya41k6sqQ8TqMP1Po7xTjpGBPT9rvcVtfAK1an8fPw",
  "key26": "5pa9cBLqn3tBAr9WqVgQmbfDJjdsNn1LSv93xLogZf2t7CUzDnwpvF2Vczt12u8ToNuQu1Sc7ext7vMcXbqQjZko",
  "key27": "4LQUwxQAKC816wQNmBafEzD5CmqDYu8jDKrhcJAfvPvdMS7pdY1VrTj74P9ca21naRe6omD8ksaa1cfmLgCoit9L",
  "key28": "3MRBvYs7s8xDvYSnGMECEBUx86sMZnXPohsBgpQiZDkDajrS7GzE67fCj15ziaaUAmqb4T8ttLRdFjsFQYNn6G84",
  "key29": "hN6znnkke585byEto6zJuQJFazL4LhVrAfHRFu1YQn7n9PbpNu3gP4KYqBCPuySBbzhEB4bEdftrjpDz1RjpXkT",
  "key30": "2JSi3V3M9QAtk1NB6etSAFqAa6Lz3kadtz4bM8EaqCw7Rpze9GHwVueXtjXC4dyMVyidzgSAk5PxG8pUrcJ87ScL",
  "key31": "4FYm2dY9z4bqczM5pYYXWk1LCksqQy9jHJ82W2PqyAT7Gvqpm8XodwdC79QSqi5yrVuRPVe2C8Trd5jeL2biiAcs",
  "key32": "4di2AHNAzSwRfFTxR4iuezKd5maZv4uiw3uacRwhZQhtUyCZDLcqyHe3FeqMZqmhP4qrKr8x9LRNtVsWnBLtTDPt",
  "key33": "2Yz2BrAjjeAYx4QijuqhYCkwx4fPVcx8KUaaXvFGsAp5GYC1dxShVphybYhpYHaLCfJ7VKP7LBxgAVwg64fkQn9F",
  "key34": "46YAZb57qBmCXg8ohUquCtAghL3ju35eZ4d9QKrbeyuN4rDUJ4Br6jSRndeUsCspFZXsck7uJMFvLKAGPdHqZpXb",
  "key35": "3Hu6KaGwf4NHxqr1EARt3J5ZZH7qQTxMzfkz1o5qStMvjqw58bqWqtFJYLonp8zBSgDpTcyJvgtLcCesviZyTFaj",
  "key36": "2bd6YZgicMyqgX2NGa3fv9csLiscixarj3jRqokBc6QTCJDkKXwH5MrHGsJKsxZAyPmYfWLGjohoCLL3XAy7EUBU",
  "key37": "4y95tyZnAZdYE8WZ7Yc52CFspTPUE5ZecMJZorA18pToTnEeb1kD96PuCoYTLcKfMBG2e6fdiWcT1bKcbXrx3ijP",
  "key38": "92vbjLa8jYhZSwXzGa9e8XtQPYLaFrvXgHjJLnUQkLi3wW42qoBJ9bQrZJnCExwfhRtoMSR8jLQTBWPRCnmqbYP",
  "key39": "DJZAo8NWkw7Dz2sLCPNVNLvJRtuR1Pw2bsQs2TSvKy5kbNxVbcoDAidSwUHeGYUfzctMp5Uzz1S1Ko5pdjYnzXx",
  "key40": "CNSRESsYyUAVoKrAkmCNjWLXVtwHjZnEXGi8EfqtpjckmtTJ3AtN63TFoC6gSJDEwQcn73EFLJqmvmgtG3hNNpv",
  "key41": "4u9FhTQJiPd1aEaya83F8JV9Jej7ToWkoY9az1E3ZN7yHtcPoqB1pmGuS1aAKKVAeLBxKfwVJPCuDw5LFWc1YBsd",
  "key42": "aa1KrMfEFQLLq9MpqkTtZXEUATHeG638HG2HKxvqPmfj4cAgayGra6LpwNEFj8chE1AjfwMf9y6De1NdMzX2NZr",
  "key43": "5tUziDw7HwFnRW9Pj4deiFtfd4kGH6GYgLNoybsYoB1vhi1ri3YrWFuNRiB3C1CsLxvX5emLTN1ZBDyHxMokKShe",
  "key44": "5ozkSYgycnF6jSXZMc1cjHUTdQ5gSKorrwKVYjZDueM2N2VHtnqgQsrkwdjMA5Dj9fmqGBMAnjaegNbP8GZZiqTM",
  "key45": "4aHKUzX6QX3mTwfVuSPdUrXZrHP3Ji2cT8nnSfBtoq58PHh2FXWa4wxWr1EjpkPKgRao36zCMb1sHyAqsXGZuQCk",
  "key46": "tNiiyw5P6uYWnGGshDTpuDDHnKZPqydZMSxCVn373LnrXrQvfbaJdw159PE2dbdfzjC894uqz6xDBkidr7eNoan",
  "key47": "sZt8mfsx8ajzbGyb3vy39t5B3vn9E79WYxEGcAM31MgCRYaj2jhsRSg4B3PTd3oD7Q8iGmpEviT1mimU6QiwCZ4",
  "key48": "57MCNPhbzirfPxkYJakkwKL7ynKjqrQvdhbE7EezsSxk7pSdssxgFaz1ma9WufbgnKqbn3m5RQXbNGiLbVGa1js6"
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
