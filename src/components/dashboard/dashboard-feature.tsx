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
    "5Nw63ZpSQR3T4DBMB2rMhZ8SmF9WY91FuxmUFVwTuySJErgyALUU9YuKfbgYxvnZDKJ4ctZPjyChtEH2pkVbPHc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5APoQFw9bxA8awZZh3p3w1bLF2C16bBwtCxSwqNcpouu77fdBsaXAdYzzJ77NTe1moB2SzUFxk53S7BHzZA7xqK2",
  "key1": "7eX6TeGECtqzy811Dia8bq95qMueBddjHFEV3VKBQRpgtKNariAjxp7bTDxo9A3gTZFxapWqjR59kokTzvu52fW",
  "key2": "5WQDM6RDLPgSLJmwnarYmuHJ2SyUCGu7Cr2BDJwZhDhB2o54nK6AxgcmuvyEKw2yW6jTmfDcgA3v2Z3FFA1GhXkv",
  "key3": "2GqmznFveYD2yZ4qs1RfYWpvuGmocKZxMKcm1WTGDns7KMzC6raowmy2kJyb61eHvm16ysQCUaN1V9i83Q7C7jdZ",
  "key4": "39bSYb6SAGK8JURjDVNuYru5kbgsAxpqxuRt6kUjRcEZYnQkeXHQoSUvx6PBSbPaEqrTTxyFSxgGMxtJkJhR2eZW",
  "key5": "5fVy62hFAXCKCAin1vbAAKuG1qb61tPUk5AUFaFqBbQ37GQFnYMvS6yGbuZ6QKh3fK2NuPuzJMrPcoQRPKoAqe6s",
  "key6": "2i9RdDZuN4RcbRzNKFg7b3kJCSahnwJpKzkNRRid1ZGwaNavRrbbK4qM9FU31k79hm9D57oJyCpSnJS3C3DzZqqY",
  "key7": "3VL6ce5r78coHnjVZ6SmjuYVLyug9Doggh8BX7o9THpikSvJoKtcv9Kca3QZS89Ykbe9WEM86gtJTwTLqS2Dsjwj",
  "key8": "4CuX2X74yavEQtyfoXNsrryfeXnYAE8dsuoL5f6ktvy3aALVBu8867FUeDULdnPajcMcUDMKmF8yV9C4P7E4eQCs",
  "key9": "furzMSW1y3fyEtw9KqUxnnxZ6rQEzwiGs5ENAnFMBaMRLjJ94SriM6xitah1LekqCBTiKHRDBLKV1uo7HFGZUCX",
  "key10": "eCAa91JwJNAU2WDvYEtMLpnrBu7jBqQv3X1oBnYuxySn7QXpZNv59Rx3i2dEGEbi6sPhtZXN6gZ7cnzomYuHbEF",
  "key11": "5Srts7B1Qu5vZbtiXbZaKvewvoqhEHU1XVrR7yW297bSFupukNLWPd7h39XPanRedUYsQ6uRmUJvCDYKypCvwZZ9",
  "key12": "51XDFM46fU3Qe8iMh4BNwbp7hdcTXrw8ViVaPpu1VQUv8383FjWoz3cxp82TPGXPCoKMKB9jqiufFikpVLGyvcq7",
  "key13": "2LzHoTKmMBjWgucQq5dYL5e2hN32VVBqHksjzytd65Xu9S8p1mAFcRKZh63mtiULyu2fccT1JtAGnWLSGDAmS9gX",
  "key14": "4F3tj5bAGukVuRtQy7j42b8VSb7Qz94FesMmNWzPcWVRtADAnhbEYQVk2SvoAHoZTABXRmcHfZWKn4PVtZkdmx1m",
  "key15": "4YWRh1k5T1cFp9HYZSnXZ9TsiKkbTSD4Pze5G59T7WG2xsPYMF8eLfAMKfFwjoWpBRnUahphhfAigDRjP8mNBNV5",
  "key16": "3UnKukhUrKp7KN3DMxFfF6Kag6NvGFDG4nMUSHSE9qAtDFpeaMtWsyLJNqSSEiLWuVY2F7KfxuXpPGcVo9jYbxbx",
  "key17": "3Ju3gjSRoshPAAbLvK7BVqqsEmjQ1de46z8wpJdwzYPrwd7dfrpEDFywx44XqufTQQtKRRG1CYn2Ya9xLJmjMqiD",
  "key18": "2Znw8G9efCvrkdi6wqEGoEAjib3p8hVrkJLya2LRUiGoUrgKdRfWtd7r3HUTg3UTYwkNCAW9dv2xLWTaWXQTcVHy",
  "key19": "3jRVxi8teYZoiXr7gCY3FV9hXmLi4KtDHfzjZTPhQkSREvkHcSeEatmiD4F7qmW6oRSszZ8NJrwb7DoaCysEnGn",
  "key20": "4FmQA2zGc1Jm8vs6r5ywejMER2Biuk5Dtahh4PhfFWbhTdHgBdha6HS7ABPEvWpcCbEuTe1hxQgCPTzZVmYpm1y2",
  "key21": "3ffLy9usXyNNkfRjNfn2n3VYB3WsY26CqUkbTiXVFGE5GmqNNKJ9CreiVgMgk6NR8sa3dQmkdV9JFGWJYF2cF7rj",
  "key22": "5FK48PxAns2RZzbLTQkowtmYDVcGDhBdKhyR3sjGuT53yhxnrsabDiU4RK3y3EzEz4TJ6rtKHuznntuxfMPmitaN",
  "key23": "3Pjn98TfcKKvW52nve4Wjeoc2VC25SbfvHyMG4iPTBNwoe8d4x9RnmX2DYKmP3Jctz9sNGQf21cDqoBTJJdwUdNP",
  "key24": "649BDpZ9eMPAw4xH2kp2J2EdavxkDzUzwqCsoT8jctU4BNnSs83HQawwpB8xdzTPzgNVNZqg5qKPpQoMXPTQ6kCe",
  "key25": "4sbMB8LQRsS8omZLaDjp94VGM2nP8FN12J3SFBNXbHtPNCqVMWFQ3ixCquHBso4jpcAp9bTARePVpc4SFtq5tfHo",
  "key26": "2zzMsScMCdEYr2B5Y2va4j6WmUzcGkwx89BVjKxTWnJs9zCfuSzd3izzSGqPJMBfX1t6z35TJ8HCTzEtgeDtTrFR",
  "key27": "3RAaYgPk89faJ5dbw3MFqEaU2NqTuxKz1BBuYP6BF1wFZrdywSUkQHMyRD2KumDbGoZNb27U1yXsSBgFFsYF6ApT",
  "key28": "2nCPZc8ACJBFQziYkNvQXWm1H8hcnQE7YKia9uSKXvsd7tHiqMPiawWcS8BgbX6222RnSdxdgQ2Cefj3H4ffByu8"
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
