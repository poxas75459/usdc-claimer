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
    "3JaiabQWXd3J7ZcZsM6rYfMFVW8Y8cTRzEKifT3TXEouHDdbh6b7vfivpJUHydhLd6rQeMS2qrrL9UymDQmxA58p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YiXAP4cSzrzqkpYXsDMoyh8BE7iCivpW68krgBmG6vrK9aY8HJz5dar5rDRTPcMYvJvZUgFYC6w3PqvRP7QAsYg",
  "key1": "DpxLak71Xj93CrkPVXYRhDynz8zBfbHD3nzTA16U6seUfEuMGro7sSroy5KW3NEcCQyV6GNF38TFEeMN1cZpxXR",
  "key2": "tSk8qowZZ1ErCyYkVMkChHnxiQie7eA4ndq3AAoTXFXyxQd7n4NAHS7cnzK5hkw6B3satvxTKAAZpPe3wZysz8C",
  "key3": "5qyZPdmzmABZFQa2yx6R4Ev2tUtehBMi7z3hwku22Jc3qzqbR2QkN2pFkbx2rJd99zmFNbqbocDc1X292tFQBFGT",
  "key4": "2hG5Ga9L7g8cxMstga95rE8abN5JTDepdGoDicb5EHH3hvjUosMVq4UZvouZjLEP7aTWwCw7nPuUwvfYmq4ANq9z",
  "key5": "2khSfUxcyb8AGk2FPgmSYnbqYxqvjDaXp69EQDjY6sE6LCBYxGtLNk1tyqbqYKNyFzjFJCU3B51q3fadDMRymQ9s",
  "key6": "67Lx33y3jxvB7P1ktXCJHRfEVVXpg7VXJDFspCAvyjsamyEHuRnHPxKuc5zJCcvFRPfDhLWkxgDc8v6646hQcdaH",
  "key7": "3kXwQo4jRA9Gg25bBrxhZdBShYCzaR5hHTHDYtahf657baCja5rFrgaR2paGAYLQtg9EtfqgKFMdX5bn4tjGGWQm",
  "key8": "4TMDfDzWFqeuMvtrRZThMV12ZJomrvXPDPN5Jeq4RrmyzGFPuMkau2ZgSSou7Jt4BSGsezQDCrreZ73TXzKAadBz",
  "key9": "55vWTEDjExzG19fPxpPUWm1spBYSm6MNaPVUQe7iHZZ9U4cNFbgkV379jb1LvSNzLSmbrUX6zs7Aes7HHCFmHQ8y",
  "key10": "3wLjSiQjup3JEKm8awuhkVp8Mr6rUw6cFqD1HcezCgXEL9FjqdU4VYSVF5y5HUnSsgtmjos4ytes7bSP6BwKKWed",
  "key11": "t9p1UNzCRpiRZ6dBdBgPVyGmRpMAvQWP4PP7JZT7wzEmUmLXwrZZftZLprhp7w7x5T9hLnV2BPx8gDCmdHHDdGu",
  "key12": "2GN5B6ipEt4XpWW8E2ruT7wwHaus9M95Xax81Hk6TtMismtFu4uZqbDngW6kF1yKj26rX5SwPWa28pVLFNjXYnYm",
  "key13": "2e6ajaLT9swo5bXtUdoxmxTqXAM4osbk89NWkmsRTGnzo883GjuXy4BgGbYMdccttV3Y43JD6XF7fC7efcQJmqyY",
  "key14": "4srTwcAxuZaM8fhCpk4ZSGCem8bNEDgTe9BGiQzis47gRo4upjECQAJf7wKejmGAWn1U7Bwyt2nnZ1889wMkpLz8",
  "key15": "3Wxv5Hzz85aEWnyHKx6PMW46E8tApgwq5sqnTmhxs7pS8yMtkbzzCdRCpgsbbWA1p9usmJhEwx6wajai24CUk5nj",
  "key16": "2P9p4R4rvFJbfod62w8k9z7AcaCnuChoihFwVLJ1G6Gwjd1YUhhMg31dLk49ockYK3Jcmy8F8SCB7EkFYgwgYRb7",
  "key17": "4UGj3En6iRxpvAb6WFG2jaVXCxnD5pn7dLaiSj6FpnDp9zX4scqkCfmR2f9uLerXegmMidEEodmeyp3GiuVGBhuE",
  "key18": "4WqM6RLLBVPYBPgUwZAE4gcWxjpdUsbBwmgS46Middr3NrQJRNQxow8uzqy7jffH4PWesXhckd4ZmLWJLoyEmzHT",
  "key19": "56YKDGfvaSDX6tY4GaoCJC1NRpZ2HyGX2W6yRBwxuBmMfuUvw6KXxFtr2m4kfxPxa524AzMNLAesrLYsUSvakfMH",
  "key20": "54BrTFzRcj7jCKHipnibnmGN4gUMK8H73NugHryn2qwwsfHeF6BWn8gdZYhFCYvTCGga5rnAvyQrutwdZX5yMpAb",
  "key21": "EvKzXNQCX2J1pqsaGqUn84d9nMcsdfs4xcapNWxujVFeDoj6HX6z7RJFwjhAc8yvrgXyHrFQqzpmgRdGrD1umFC",
  "key22": "okq5BENxjb3amTqPWRKigZNSL6ZoEcEzJ5BvegkfnQTNw4tYKJZeJPQPUdqVVZRvKNQkZQGXQxnDVoJHsPwAFrS",
  "key23": "4Y2fu7PJCyYutkPsVh35HLnP8nn4q4q3SdNwSkDcfYkKyd6Ac8gBUZtgEG69Jt6aT69wKZBGePoszf4SJ5GZ5jNE",
  "key24": "5k4iP8haP4M3w7ndE3xD6gEjuAyZNJKok2P47iyxpAYWnauqihSJNUN2deta3vrMn2RcDhVTTCaqDrb3A7oct4iT",
  "key25": "2d9YxBznyQbXvpS9tDHHvgksioDni5gwivowWLVyoj2XcSWXEgcUE56nDmxGmnAJbYhdq5eDrxRw9vgq6KtEEed6",
  "key26": "3gwMa8mQ4jQ2qfZpdBUQ8yWXhfjMUYgndiQu1deMaJ5qtF2cNaNyRdnitCd4QGP2Ch7hyCz6w6yqGFmQxqiNvqFR",
  "key27": "2DuymLNEUPif5s22EpmtKcGeWXdJMu5hLgu3Wi2a9tnvL9JTAVMfoULWiy5pEe8DkfDH4dySfy7G53diEjjF9Zc2"
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
