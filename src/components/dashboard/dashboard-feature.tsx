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
    "2se7iT4q4HW7mKV3gyMeR6bkmZWrzCb21JDbhsT2neAcukBASmjnYsz1R7ikUY6344oHf5U6ckpkqTEYyBZhvUw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kk6QyyoHNWrYDTU14EyJ1LeCJPvGtsy4HPTYL2wkcRmPZ3pWS8uAXZkEBhF9EsfehW8yqFYLe4MGaPDbhkTqrMK",
  "key1": "5U7R1KxykcJmCwvxaQWthDsr5ovUfjB64fXmdUPUjjEhgvCQF9NenqTb9EzPommJxEqwbA55KmUqfkha1k5U7KcF",
  "key2": "3FnKQMEqudsyvLBvK87ZmYFXscEweohyViym6KARteLGRsgRHCKsQTPJQeUS2xqYCXR43PRUySYNFDYezZgke8Vo",
  "key3": "5uwdnGuxxT3T3N8DQG98KphtGKPKzEyEhrF6Xx5jg8yVsKqHoWFKiXVcgkFyzf19UuKrScmmozaEMQq7UCg2b8ZZ",
  "key4": "AhgyeFVf95u94hjDRhDt1yD1pvrxqzMEjzRF8oppXUkukUbr8h5FYdjTT9dmnrUcBdqbyFeoroBkR54LAH5VJ57",
  "key5": "zgL8ABqiwSVMctJZwcsQzr35k4CZ2zNi1iyxhL4vcPJgFHJUfKzBQg4HcDi7xjWTpSNGXeJai7ZWTwBbAPbKfJT",
  "key6": "3BvWDZyH85jsU758474esRkwo12zGBMJA286rZnGkBvxAfNPU3KA6dHSd7vTPH3DFwMwbYzdN8gZwJfTKXpxCzra",
  "key7": "2dpDuAQ3quBscKaKjsUro9fbQJkCwUtKPd3pWUaqBVnBJiKNxK1Q3NXaT6B2VYbywcTYWF43HhJxb6xShzVKQ6Lo",
  "key8": "4N6eL5ozF9Zuwp9F49odZ1CBRB3TNC8tbENe2qXykfCK31AJVQJzs5VMKz9x5zCbr6AThLwcThSAGhhx3Vm6taWK",
  "key9": "2MgVmpGSYFEJChDt9FsVRzVdsmwTrP9cY2Yzk1J6zZbEz4uW6cnXhZjzNWbbzjC4GzSpBgnP4yvP1PhtWNjSdKXr",
  "key10": "2B8YpfW6DyfKvwzNRJRS799UZbxuvH4j53ajCLKTgSUXPoyLLXuodboCsgZifH3yMGfojaqspLFsxE618Hz5pqfX",
  "key11": "3WRYWfq6cm56ttparwoz1R16Wda4gPHxUo7B8tWSvfWAwwbB8U8d9FRCqzAimDArLtj4CxvypZj9wAg8ZAkETFsk",
  "key12": "7NhFCTyauSvqiUzh8GmtmSp5NV8UPYE4Z5QwqP6DqHHs1djE4LmN7VE94XGaXBky6jA8L6E6svipqaf2jsUqcsG",
  "key13": "3cirvFt1BNbuBQD5de5kTAmc4HazsTfizV7ZHUGHnaSSn9YB1q8Ny4fhLvis6272H4Beha83M29ps5PbiD6SxYSG",
  "key14": "3HwAJFnvgrrLqjTrwXsFmePLCgtkT4nYtHDMF88tSqWrw73DiWovHiP6TKDWAE3TPjQQCEBc7CcEk1Fs694GZbSr",
  "key15": "3Y6Y4fQxEpr6yW2Sm5zynVQf89puytsdPDcXA8kqCcWe2jMyFPTCtSk1oMCjHSPUHsuwvukUax4rK9cZXjHmcwnT",
  "key16": "3iSkR4VAq9YgiLq1jzS3Y3tEbFsPZwrH9aamTr84b454R75jPPB1VBYvGegqTBrpPCM7h53XxEWj9Lrkg37jvYRS",
  "key17": "3ZYpmyVmGfTZwTaUHbP1UKBqA2RyFZk2dTCEHJKUec193RxTP7QtEjKEobvGHKyo3hX7X7Lwjy8JhrHxbfjf7fFh",
  "key18": "pNUx9AT7ciDnEUynihjL5b2eqgLjb5Qit4Pwtdi4oTvfGE9SB8Z9UYNPxaB737sHvsRHyoRVnMaWHLzPnQ86cc9",
  "key19": "4sNxvox7YN8XNhZMk4BrgEd9zjVcX3CDBpTyzMHRMKNS7KtDgi4o2cgzixD269PMdSC6ugeNyLLSfdd27R7XqUW8",
  "key20": "uCfL7ohwdpUMK3PdfFzk2qqQ5nyuzhuFEX6yrtKfU2o4Ank1bGrPziLaFnH8pR62EY7XLjvNSTGx95Umw79PS8s",
  "key21": "3XE6gZaZ8UzU5XhPVTNbbsfZMd4yjvuJFDBmqJKFqwDLqvqbESxgaBvRRKnqJ7sywVGdNoG3yptYCz6cxBcWz6Lj",
  "key22": "3yTJ2zAK2uuGBkoLE85Tg5XnnFSe8pAFGpe7QhLGkhX6eGm94hFmc2Pq1FnJaKZUnEgFr61xXFLgdEyUvGBBpMQy",
  "key23": "X24VfQ2Y2k3ZnbuP57KXjVFBUmBHSvwejPBZ5JH6Mv4ybSW2NADjB22g3GnaD2S3xP1J9EhpTsCSHF1swNGvT8K",
  "key24": "4FFKBxZWYCvLG7MG69RRkvGjR5aMJEa6w23unfgKJmG62PUZUytQurLt2TMwWLEPpbDJb6VsHgJkWj5uqMa2sKUm",
  "key25": "4ypekYKyUncKCR8epNiFdsBpEhdTS6YwhKGnJjwBX9oehPR6nvBVG3xmYNdC5sVdg2MtUzwsCWCNsEsnxx1K5p7f",
  "key26": "5M34N5beD3A6aSRFDRLtencAdAp7Wt9u28HysnrYh7g1rSEsJ3yXXfB8DeZoE7cesjrjbDtfsT2wassQe4grn8BX",
  "key27": "ahQ8ziBg9uiwQehxNTJgX82TtnRoK7NXg8vYUi1vpix9p3HTTZAFZDSvQJdeVsT5wY5DWqegoZEDE2MdSzHpLbe",
  "key28": "2cD4eKVb5gDDNyP92ePNWZ6rP2ezjT9CRyhUuu718EqQx6ZW88JjLrsbwh5iPv7VcCnM4gshfUZXRwseG7jNEVUs",
  "key29": "61dqwmLm8nEv4qmPugFc7d3FTnupXW35gQmexqHfnvmrFwpcmP34PmSMmzDKCpMs4w9g8Mj2xzU3pp8VFKrTbim",
  "key30": "2vekrr4by1m5QNHndG7EDx3SvzZzb2tSPFEdRriX8bzucR9zLPPE5TeCWUyEZ29XYVqDpruyeLuDRPvSSou5xphQ",
  "key31": "CtJqqcpWZUxK7j93aKkucnsvzZtBhq5LqfeUtB8m9c3ErU3bLhg7pEc5AhEcAezRWXFbJZ17fCsSxU6WtCLfwke",
  "key32": "5rVDcRgXqNeRGvjdKpT5EwgWj3hgBF5iMH3yKipNfTntqn42aQX18FEms3NHyxWc1CASPtS8idcirE83TRF4eLMZ",
  "key33": "3t5Uh5BmugfJ2ucAutY59RKKp7MnjdnFt1Q1iDeh1yB9S3w4Sow3iBDrfCP7XdKVGm1JtbNpjF2fLCusDxyjVtYh",
  "key34": "3GTPVrs1vRCs8UPKXAD6qmpz7Jqi4U4TdzsetyuC1dECaXnRxtsshitzZCs7qYtbKT9Vhhnp4toc1gSdfhEsS1Zx",
  "key35": "3uFkVoeFYuSBo7nLaEzTpugvTi4b187K37F5PM4nrDX9Y4ZJxMQc695v8N9DuD73fE86WYwjeLYG15VqpFdMH8V7",
  "key36": "5wg98eUMQmWc1W1ve6FPxW2vbch38PJ4R1ZXNiUTzhaakGULLdcGvmtYqs11fUACJoXooGMHNGcXE3akMD31aj4Z",
  "key37": "32bM67HURASYm9M33YeQoL3bhwspLbz1NGB6JHiFLTVcH9PZMEDgLVtUGsA66qtnpvn28FYSF48DByAS3TeSfT9Q"
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
