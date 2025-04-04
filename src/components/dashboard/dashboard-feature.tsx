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
    "4bV9YgrH7333SUAFTReSFWFSsCCGSSmZPa14B7AjYt41uS2wksPRx1ZnRjnmApak9PcuHjK6HyCH3aXdmmcyEHoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DYhQsHUnZVvNZJ3Daa63cUgFPSEkrrBgnJZgo2cztrsGHYm6tZ8sxQrVz2FxwcidxnkEGKDbrBE7NsbPo6YG3d",
  "key1": "64mVW59WJALhwuWwwtmAGXAiWxwsKh4dACq6u5A8gKwKr7hGDTX2KQ3rgEMnsqvMA7S1dV3R5yapiCrJnhn9U5W1",
  "key2": "3spQuYgWVtYCGfkL6wJPLJcTGcxQ9NBhgQnfJAGUBHDbGx5VMe5WtxZqdYgVXNN4W5969nYoAXPcv5uuogq6nQvf",
  "key3": "5d8zuLoXSt71sH7jGi6k3A2qz9v7XBK7An38yT23hhHGdcEe5vTCYedzaWMDQ1gQeJUTeobH5KVBHeVYrzBtuJsG",
  "key4": "5FgcS3Z6CjCnLrg6oUH944CuF9z5reNheT6FnHjA4NAY7oBTYJaccLomQU67eyuH5HUztj2DfNmo3voiBSaqvGA9",
  "key5": "54R6RqzqDX7N8CnV1HMESp2pgnUJK7jv4mM9HnfAvAMR4cfK9suKRaViaxQdLxZu4UQbnM1iEE8gJR9KZUZk6wG9",
  "key6": "61tZfqk6KbSJjaDCozbpNM8c79J4WEYAmwk1zPD8afvnS8TTvnRVwg3oTQq9RK3Vpu1xgGdNWhAdtZDgzs9cokti",
  "key7": "vjTgFhCyWKb9X1SNW1swmfQJF99rcqM47HH5ZU67vo7uNgB1EpiVa7XCczX4qn4MgKdQwxKk2tfKDRL3G3pR8Qp",
  "key8": "5HYfu9kndC3dTJsnwH927fwuR36MTKFAVAYNunKzQra4FwRB8aRpxGyw6te8EM948gXBUEvGWNauzRxfEcp3qBrB",
  "key9": "3PE9K6GT6NF1C5N2TsaQbz6grfvXi6XFSn3iXCCqAwmY2fZUeT2jG435AVXkPEmETFXVss2p7SVCESpQW1c3DWKN",
  "key10": "38CjE6VsUhcdxUYnpPFL4c64uk8Vn5wRqBjZCc2utJyHajveMbcs8Gwi1BjzmwLWKvE2Y2Tn6GT6TVuQE4ZuB6EE",
  "key11": "whcSweaQrR8NQsX2wfXYJiWZFVAbtFJpNM5mRpBgBCt5eb15CnMHqh87yGJsnF9NvHaBjnUxp6NojAc7nuqAWWd",
  "key12": "3Kfubqy5mU9ucVay6ANHmf924BiMgEvYencn5Q4WNJopUfCtCGU1a4qfYuug8eFRewBNTLF2y6wJmvonJeTLBWya",
  "key13": "5QbyTMALv2tdhrWqaAv5GXDr8zcMqGiti619vkmtjCrn5FDrzqDnQgUfwg7Ait8KJ3FnuTCqpxi8pyKJVG5WPEkp",
  "key14": "4Vs9pvejB4gMzx52L2ReoWwaRSwHdPnByrjSVRjc27psg5hG7E5UPx74LSi8MwUuavwsPbLuzXNN9sTfAnB93cTd",
  "key15": "xN34hgmdz2KGkU7bCB5VxxNUtEiZ5mWsuYvPG4Mc9aB5vuZLKumj9PRswSqTi88ooPPWZcbd5ZckWaEJUkNTeEm",
  "key16": "4DkjH9z7NgyS4RFAJQee4gqJoejr4TmHzBNw8RUFN3zA7hJaT86DJMR3N7dou83ea73WaqnYqtMYCuXSCmQxQDLV",
  "key17": "512JSqhJTvCU26guvedd21VxZJUv8XqL481VSJtifUzE3hXVp575Ya3EHqbu7CvvrHTPQyzhT4EdhdYboySZyNDR",
  "key18": "4jruKebR9UM5DX9PDzzTNLdP378VPqEmiMZ3XhhgCAcwn28cd13eF4cJpfKdoLag77rLH2RofF2GyjAGvaCbRQno",
  "key19": "3oQ3et26rFDsbdf8aczvAWb1Gj6EKyPFtfNaXDFAfz5HuoYArZFKVBGExheoE44nnL4qiDmp4xdHEAAcvYBLHh9L",
  "key20": "2KhmwuAZQKR3W9wxznQByu5DTU1Rtg8CHBNyCZU9rEvmkLHw772Sm41oqxGu5jcCQcNNjfnoFkKpQTTwYobU8QJM",
  "key21": "2po4diEANiAyZc41Jon3uhFkst8VrksxHEaAxmsuYDt5ExDxgr5LcytiWskHYGUtoBGFK7sqBSyN4jQQJaKv64ve",
  "key22": "2kyAfr2Z3hFJCoAagqJx8TT2QN6yXr91MGxvgrpHS3x7JZpYUypeT5NgEGFSt7AGfQ68Pmi8mF78RCdjTFXAYqci",
  "key23": "4rxq1fHU1TvCyANGqm31WK41MoyYxxVs7yrdG9NT9QtQ2qzXmZeEbedpzHktJY3AkALRBupvHvPhyTa5RuH2FxRg",
  "key24": "54ECnHKHy7d1mvvKecUprmaZ7yFshefjXamyKoXRkHo6vEs4HgTSBbPRxXS4b3Ux16h28td8tHvcbuz5gZ4peoFM",
  "key25": "5CFaRtysrfF8h1L5Dzgy4bFkvouchb3MScSmsWescMUdf8uCBCnrPmKYwgPtM7AjHc4QddPsbNgG7XKyt6oxm4gR",
  "key26": "4RaYgR4h8ceSZMzUMWEue8Gyxh9LztcsCpq6TtbmDfmxU3X8zYBfTFdRDgTix2M52tjgJJ2TvyLsaVrN1Dz8sPMK",
  "key27": "5eLa73YX36ZHfMM3WtQA3MwFFgqGhi56kcSsh2iF9gibwFq3GH4ouwfpHmG6KVGWs2VX87CZQoGG7sinsGiYfHhp"
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
