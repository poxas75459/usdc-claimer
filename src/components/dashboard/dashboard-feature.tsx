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
    "ooRtpzfRVbBE5nQ9mfaUnKUN21sJxvK6zH1g1CRo3q1p6FDAwTAFNNC2m3EbxK2sH9uVAWvHy3roimyDMUQuRfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66JDn2Q7vUhbefwwuUP1m2CVRRCntaXiJ4qLJHSB4AMe8EW3W4Xfsr1WFRmQ335pynPRAsuBH45RPYpmN5YtVmt8",
  "key1": "5iHF19obSPZNwxDfY37EmUnL2egZQw15REy7zVQSG8vPNoqFaM7hG1UPRCwH7LwCJPtiCTscqd4avJti6H8ebka7",
  "key2": "v7Xs4pCkk9hfizcsM7CADPxa6ps6VywLAWcRKcQLM7PSfeb1wbn3uLNF4xUpUcNPcdtuQMpozs254V29dQ6Ff92",
  "key3": "4fZGhj6wEijZwsrUxRZNxK57xbKqCGCMwxn5VgcBLHxGVjmiUY3ceUrJn6FrfGhmtKSpKAWA4hXR1WzEaVoqwza4",
  "key4": "5TXQWexov1J4UBNUypSDfgsLc8Uyauu7eG1wQNuPDPn7HzC8TBmhE2aMtGQiaDoV6tNzPwSqjnbdgGPmjXYBnuL8",
  "key5": "4MvPVWbnnwqm5RnS5QGC1r5WNsb8Dv8VHav9X4VWkNq1wu7Vhv663MPECNBZMrsR7nSLGJoHoNBzBodswHhtjXqy",
  "key6": "D73zomD1PV5LaPWsEgzDXCQgNN8H8UKy8bcYZPnZSrApAKZqtoocxxMWCb9PZPWph9nHikbqx3av2za4LBxQ7qq",
  "key7": "2ENcYSoJmSf1aczfSeXzmkPu8FAJP6dJ71qbRSgcaNRJEcUGV1kxVWSb224dPLg3wgMtMauXD1K1aKvwYf3EypAh",
  "key8": "2pXPtaUucSqmRKdLD5EPvw2shYyiqyaMx2X77XdwdpUrftoaRADbgQ4aTFePrdJz3J6D4QFds33gDTscVtJ5cq4B",
  "key9": "jb25fsCWj9xS4KCFs6XwxqnQiY48VhXHcF8toRFbgrrDHB73XwFAvUeuPhtj1Bthrz9uVg94arinNKHK93LcpX8",
  "key10": "4L6P9J8GKRwsQsNWLjExdRU8CjsA6U6ymx9S6TJcNcrEenm7jQ3xkWRekBPdnnQYkVRbsmdzc5KCKJQc67Wkm75d",
  "key11": "5XjA3WguWSDC3ABxQntDHCZ9eQrskT39mBcVfKuJX84FY94enAuFXPob9816D35qviwfd9i4FrwbE2Y9tuV2h1ZY",
  "key12": "3LHXQ8sfm24qtwYRMBD5228MQpEGjU2t8QGepjDAdnLm6koLzPnJkm7xf5fp8zenY9hNfotJVsZkuNez7BbUzSsA",
  "key13": "2nRiCKhSBm7vom2sdrrejfJhZKyNHe79zBCoVG8VQG3Yddwom1FvtJChLhh3BwvDrc8cZBrKt6K52ZLvCEJrURp1",
  "key14": "4XxjtdqpzqXsiWoermcJNZdaSVxMyWwGDGHPqwMc4DUaAfD8Uy2hGQEWc7kUYXG99fPL8pSrMTbWpcTCcwzSPmbo",
  "key15": "63pyxow7zpRZJYfZXB1yF8SRzdXcSAeuu98hD9ogW9xMaj2gBX3A7JVnXo8Z75ffqVmB5NthxnHjo8YDsDQixD93",
  "key16": "5oJywe79HQTHMbrrASW7dmXs574BmJsZ7Q7njXojx6zXW5onpKkbS7rDhTb7H1vpVwZecNTAHfyUGxRuEvfhkq6E",
  "key17": "29BQjjhuS9rw622W8gRveksB7BHb6ButjHJ18yA4XhX3awVZ3yZvU82aRYFE6UjrQwrcqpudXEL9LCz5PXF5tPq4",
  "key18": "2H4im5ycNzbRkEC8J2GYtMDkJG3ujWuy9RfX7QjadQtoxW6rkZkJiiqp3HLqNcRSvoRYSXHmA4LNx57ty6ZEiNY5",
  "key19": "4rs6DxxqwCxCaUzWTbYREVdU84xJ45U7PDvyW9HyjxVdHc8jRGzzmVqXor7tFEnTNt9xQ2HFMwiV6eW72K4J9dpy",
  "key20": "3Nqcdue5ogS1fDcLNWR9JERXGUrvP5CTWbmpgz3KAvFKjGQQokQTb6KxoAj6616dSugbh7mcLJMfh2Mp2GsLGwHC",
  "key21": "64er9LiDdHjRABvj8cBPfTaUW1QTaNmLG3pSmcLWPomhBvhb1zydPiP7ySxDNnRJm2HnX6cHN4n4E19zCBtzmmAL",
  "key22": "4tGo8GD3v3wwrFDVnSfjSpz5saBTc5roRncGEoW6KU5pyzYALic8LxdTBvoXbXTC25JofS6euCyCfHQ6SQyp5Tej",
  "key23": "vAtA2w1ZFPrNR76J4J3MqQyKjuGne3rkqMv1yw2pTAANPFjTuiifoQm3voFqrX4KJj4EuGrLp8avtcC4xacnxGB",
  "key24": "4ZkoH4ykt4vLoy5bBjrHm3UZjYmuPAbsUkUp4VGgypcA3GhvhLPbeFTATCqD18tPPQFbpWAexbZy1PnRWS6QCaTA",
  "key25": "27AiZwywNNhGmjkLbRFHoXHoDmsYhQKhkMVHdG1fr4idqGdZ9X5yKaVhWHaH8iB2dQzomoXH2S3sh2GX66Z9EBoy",
  "key26": "Rs7mzmHz5yDHGpJEpCsdJoBtC1GAo9za1BtCxbk5Ao6sr86LaX9kvwy6L6o71y17dcc1e5uZtuGPrfisdy6BZnY",
  "key27": "2HqooLjPZj86DTGaEcMdSBASFQVhRLqBfo1mufusqhX1saFApHc5sMgAAC3GawWt5W2mxYsnH2r8p8ACpFUdFHKs",
  "key28": "2fAr4wAr3cTjKWD7yR5P8Mwbh5K4ZwNpdyZuWPgfRjmVEpU9XLXyfPJw3LYemw6WuYFMgPakQUvj6z6FYaGxqvU1",
  "key29": "4m1uTBsFyRHjun4Ty1QixFaDfnTBHcVfdt5t6eoofRdPg3LNT8h6B11RhiqZgx59Te62Fy2w3tnWCYgNjXBd4apn"
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
