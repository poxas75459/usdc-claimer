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
    "4UvRMLG25o2ocCrNKnDEYRQKAHmhysSrpbsutCfApn6idmaGiTB5SArqdzz16PRjtVye7yAZzh1UnWc5XAw3fby4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kULDZ9FzQQesqodDK8ukh68zdrNVj6VxT9njzTY1rHdknVKaz57pUSSjy8dB89wZ17MhfJEdsuyyiT59PqS3dWR",
  "key1": "4ZwhxwC8hnPbgEFPX7HcUMgtoKEAuirrHknSzorwhLs3roBfiF94j262qUfxx4fBLAdAU7fQUvS7Vz8juscSFG2a",
  "key2": "5G4KzS9uXGxJeikiPvS6w6RtZswUBZAZRGQM1XDHGnqJU63vukRBXTHMKh3fQMykaJr6rrpEBTGemQ7jHd6hxFW3",
  "key3": "3vDvQcfpyYUSC5SpWD7kEkXvJTiiRYiMYDfpCRn8rD8vhYdW1kAnEmmGHsoc6NuqFbsU7EcU4JQfevDV4dBu7GYV",
  "key4": "5cR2iavcYcATNEH6bTxTYarQhDkWkMxbJDeb2jx4k324byNCnrgVUshJ1yHmQsBmYmjunpStLrohX2MwYn6FF1D",
  "key5": "gEbsHgQi5avPVuKBj7AWGzTzpYSakrbnvMEuoUpGrhjKnr3sjgNwoJynbFUiuxdUx32QbhGTHe1P6ta4tGN5Jkg",
  "key6": "2yqWW2SSAk5RWi68jU2wPQeMyAJSfYtTNTeRZAfU6nCQPGAAqiu4gGmVdM7bxCSo1fxRd8huCEWmhbn87Siuan3L",
  "key7": "2LmxLwEJkaY3zvgPTqgULDy7c5xewqgn3eEU17xneLsEF8Kd2rCKfvdZjY9qYp5LacVLHCaxzfAfAiTp8qJSbN8d",
  "key8": "5P5u8U7xKjC5rtK2EpeuNQLUMJ4bhV3fMZJMjPhmjz88C5b9bBV6RzHA8HRYgYA4saHq1BQh4vvnNDrJrKfddTJt",
  "key9": "461e5VzfAmwXkxfb3iL4D4kqUYPCpj1DyPznjb25XYTH3gLQZjDACKE8hALYHk7McgumnKswYJiJkvNHqrUZpMz5",
  "key10": "3UrRJxGTYLNjaVLixEdNFcXw1w7ER64aAmzYTBkos5SjG2nguKDRpGdhYbfj7tssiw8hcT22FPT8vcnmCZiZcGBk",
  "key11": "3Lp4UF31K2C7WBXwW1eQWnNy1s16xVyuiFubZ3KfJpfJB5rvS9VZ8yCnpojVmjmVg87rDPuKPStKJ1sm4LixaVi7",
  "key12": "3aMSovuDJbRQsMA2337ZtUf5uAUsSvbhubuiRaxb8pDVTfWXXWBJXLEDYxdqjqXjq1w7NBxutCuz8VopVzzufLyT",
  "key13": "4rX9cg5kq6yi461Kp4AoHvX26Nc7RQZcnYitJ2GmpbkFJGTbTGAnKg9VPt2SZVDSwb2nNgdWTVvQsnEe9zpScg1k",
  "key14": "3WusYzYBxPSmELijnR52HsyN2DcUqigYWH4F9Xi42P9eyaMbPVvYBXX1AgbpXi2wvfM5JN91zUG61frsNgKdz2vQ",
  "key15": "4CNqsuQDPztsL5RrqF4s6DY2YDUj9GEi9cGHSehz4KmZXLbGTPeP7pf9HmeXYoqF2CBtetczCEYiJtbtk1mjv5BJ",
  "key16": "3soHvPnQgZT7ZkxQQZV5ZMh7H6YB45rifHRLrPyTLhSZfPDpFBUA4UX2YbgMobTTC2hPRjhaG7Q2abJFQUStFz6E",
  "key17": "cRVjZfRtQ56gPtCa1wzBM4bQC8RGMexDy4NW448NhDX5rockGgjhQv97S85JspqRNeuBumk2HNEBmuFaGaYYYRj",
  "key18": "4KTPEoT4cEz8M4M1wLacybpXEup6AmBaAeDgSGrnkZqRG2bLseEbtyxiZPivbVh6uRjzL6ENpxLiWaFNFiQpbyt5",
  "key19": "4DAKzKnfEjaoFz6u1E7FPEf9TBcchN6AQHrqUuJsUPW41rnKQNKLtN2w4FNAry3E1g9AjxRSQJygrT73JDe5hTMe",
  "key20": "4AJRDNeHxWQ46iV8uUXQxjpqWNVVKJrFBUc3qsBtARvSTKxU7uTU3wM9yRGPxGhsbyzY92buzy8V4B3xfcSV1TAW",
  "key21": "NZ2BBxbJ41SUZMLTdphTH1x5W2ST5jDXBGMLogqsoc7qu6h8pSQYxtYoHmWv6qJ12ssYUMkbEtX1kG5NCzqDe1v",
  "key22": "1GbgqJPNi6dcKXgtTkvSHK4m1A4oTzzvaZzjU3VjH99dqHVua1viksXFmT3soUS835eY4FcPNJyZ8p4ykiCQ9e1",
  "key23": "9SqEsEWRbiTRh2SspPQFtYcwg3P4g5Q88zwVfWmh92FS4KzWbS28iFfk1rQuPxBsiGNK7ZYVJMiXhTfNGYT4Bup",
  "key24": "5c5p2aYR5agixL7U7Y63mm8WJzXWyRMyN2bxhidi83sRXKTsxZxDtmj1PebvqcXXBLoh969NVZSf9fazYpiDYkNq",
  "key25": "32gH8K6RxTyeiPXHteQc35pZiFKeM8ZjZZSnXA6Wei56AF9AZQ48zniAGJnFt4qrPB9DkZwJ3qpvuymVMpkaBRt9",
  "key26": "56kDXGK2Y7AZAuHPiP8JQ4Ec1rPA4qV5B2w9Dt3yJEo6x6udUF3gwzJ8wongKXa3H8fvhsrzbLMWbXKn8mEoqRWw",
  "key27": "3JsW4QiocfxUgVbR8FmTrPbFfH48MpTT2xTaexeE2GJKs6R5V3o1cJzARsL8fFYu7RUykTKeEoLXR9abSbjkqJUd",
  "key28": "4btr9uFBamYHEA712JpGo7pDJEs2TsYGwGZedzF2fgtPzkpdypTeiZQ3HEi1h4kvhx34QBVSMLXpeePDgXjNVv9X",
  "key29": "3knwJ1uQ9nQENeH9hSXQas2pnMM41gLnWFJaKFsm8Tj4aGTicNPabmw47nNV1VUYWTx373rgDF78jChGFtSkBzT3",
  "key30": "4bzH4WTMGHhD7Tme7qHKZVK7FSUyo8355LPeuWSAkga5WciTfa3hektzD6skrm7NK4nw3TfuCxTR474u262QJ2Nt",
  "key31": "5BDYVHvLrodc5zcTNejnfwtBYS1bfnumSZDVjwoLuEZH43cwecwWAmh8muGs9SN3YgvJvZpazBLHiozMhVmq2kAq",
  "key32": "5dr7nzG1B8GmiQ5ztuu8xzeyGdjjjvRfyAwk4hYkDMVux8saeYuhzK8ZWLMSCyAvMSavkZ5nNUb42DfHEMboqDjs",
  "key33": "24L9F3bmzqTEG3YT9mQypwn8aVu8yGzvuyEbT1NfoYyXETGhT5ywQLx3mKDMeMWRpt96oMXy2dKYWv2Qz2gqBvEb",
  "key34": "629cVGaXCJHXsHYzrJTPdTf6YiGamxr6DkLEu1PD4suVz5HyZ3mGmrPff2bScQ8hBoqJ2YGBXPswdRpsidmhwHU2",
  "key35": "4euh6pnPs3HTbABszXxhR9unW3UVtJ5XLuJLw4qCQjSoC539Ein28ohbKZsZ3Eef9zrFEUthRfqimKQqZmCkkvkz",
  "key36": "cPPyxT2eiakWhNuWfsoyphcY9oHJaZv5siKUoULnznQ8jicaxwvNfcjqAro1k3fpVyuLBn5CnioPyUiLbnqnjmy",
  "key37": "4eBgNXJpv1wenusrzKG79td7HSn4DBTeetuD1qxUC4VMfmWHxL1vVnxVcYoCjhaSMVCL5fvxQSiiMurxSNH3ZcQh",
  "key38": "rC1r9qmNBjiEAfW4N2VPFxjbukJfXku74hy6B8SC9cXVZNizCcpySswB5kRDJdUz4iv3PR9zFT3fw9AKhMBdfqX",
  "key39": "3XrA7y4dysm4iJFeFLAzapTb2F7JfwEMbdn2EUM4Efqx63Hj2owsRxG3cENZu2ETyh4MUFq2DpbiDppmovLHBJQQ",
  "key40": "3A5PmAAXxp71aL8X7Z4x3mhTF5U1xdsYnPmBb3q8C2Lmhj5V8RUipb6sYer995criZbzYcWtXY5YK3Bcf6Grq9bN",
  "key41": "55Nrqp8cM41Rn3vfsKQNc1JrfguB9qWHwqNnGfGR7qusVm5Kc8zpSoCZGnia2nzEijVyETkLB19CH2VpY8mwgLFY",
  "key42": "46wh19CM29QrNdMbimtFL3MJ4Cbc19wqzXkvtpAmHw12yur6nrMS4aVoFfyTJbjzfFXJKvkuzd1Yz5YuWB259zrT",
  "key43": "4GCecFPZ2bHhi9xEqHiRWdWVRoGktQtnUDM1GWHho7onZykoQLSS5wEJCWd8VvW9D8KGZUt4E7hET1vuUvbaxDrq",
  "key44": "4unAqfwS35ji5NwyHU9yTybSP2jxbKAxfPDbfiM34YmAPYCqhDPXQuAfARXSGHgioGmpNDBLufWDS4QkDd6GT9w1",
  "key45": "3vNdihjjyqJcK7gr2qDN1syJDepv8zkhA989uzg1UTfUCWH7hJWpNpoMqmmrdxtg93MEGq7k3V6VCGNHnsx5JypS",
  "key46": "2FemN7Rgifwopc1sx6kfUC4cgwdTbcwukLFBqbSTjyHboHJmwfxaVDnL9vzyNZXGHwKyu2YDpKet6zTfFGXTbF9S"
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
