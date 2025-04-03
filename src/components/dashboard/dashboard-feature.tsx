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
    "2sgwYzPu4Ye4axGmKPM7z2v5yAEugnkGUFwAem5Y5BcQ8AyPeZ8d5nqQHcaNqS4xnyQr2mo4fX1Y1k4E513WqUzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PKqNzsEGkv4UfGFFDcmtQS2niQxT1dZhU9JBimsKBhuK6g9YKhTxM3XXiPrrBQxtV36EyQbRtTcWhR9smP8hCZC",
  "key1": "5HNhKrHpCWdxWAt9t6Uot1Er53eLYPvYZBZiofMPG6x6JCv5vmoYevMVbag7kDgag1A3YaDAwMDTK96VJSrvya8e",
  "key2": "2jLakdMWa1LtkQ4gwC6ibFsXf6zouRt3mMbxvn4Ereb2WrUmDAkZaBCLS3ksiYSphXqA7wBn6HBzz7yTPNm9DK77",
  "key3": "3PDpQvw2GbALtpuiC5oDqDkaM5Qgi5kb266FQ4D7Y6v5UH9m5bHcJsubHS4x8UKXKBvTbPw69NNh3Kwa4kNFgFr",
  "key4": "88HZ8CV8fzUdEsHc2VeBwaCW6MYRZQaSKT8qpDfkyZUD5sLbwhfsL6MgtdotZ99NQEDejHJ2MuKs1t8QHYL9xbn",
  "key5": "2m9szgdmCXW8UY1oiES2YLxPQiKY7FqEZzHMquSDv8Am2EzxDKvaFcSpfhWqiBYznJfuxvPoxiL2f4BjTNrX7RMv",
  "key6": "26169W25u5bV5563ZG7C4uMTKKYAVX3a31HC8S8PtAmo9WXCSGzFBQLctRqEB1j7rGEAscX1WQJqz3eZ8GbGZCbP",
  "key7": "5iE1YMKoCr38t5QoAG9rLur3T7A2d8PnHmUs4YbDhi5JZ9Hb6t7ybBFDzc1sxFJ6LLTWnd9PKe7tTxbK6EZokLNB",
  "key8": "3L7AmE4XAaCPrL1N8VELF8pQC3J61EawoDc8V6aCx6EDXZGNYMZqi6H9PiY3sDT2FXDF2ndeDPd3ZHvgy3RScGKU",
  "key9": "2iLbN43ssDYuPRuFdTMZryHEZjUqeeB5fY83MZ6YvdtikUsaJhA5irQCQSGcVEwhJZ6YFM4tBoedE4xG9TqHtUDE",
  "key10": "5mSbLcG41b1prEB5JWGJseV62tqkWz7pPXHCm5ZxdaSQFsoR6Cva1m291kyvG6Y2QrpM4jvNrYZGBnZJLXRCoaD2",
  "key11": "2xunmEjM4s3tqPdUA4nZ21TwwqLHpxE6jeVLRjkKuuVP5oorRDk2fw64gYFhPCs9czKYXwE42mqGp4TQDrkAHeGD",
  "key12": "3fGpzeFeTW7wmqq97LTGrYqkfwBJs49T2Wiwzmvi8GBt5yTnrnssAHgnyV3Ca8H5WBXMdu4C5aJYMXHK4vbBxBFX",
  "key13": "2PNdxZFnspyFukpRPvk5MB6nZVyFrM5Rch4NzXeSnvR8MrzBYnB5xmiEnGSyhAu5xUndq6d66pATsRW4zjN4GUf5",
  "key14": "5ZPBnfUucDCYUw5nRkvXBp5dif9SuprutMSovL1gRd8KWgnN6SuJtTH9YUHh5DF4eqCycNM5JCVzzBcudTiPoVfR",
  "key15": "3HyagdU4o2VwM7YDJ41EV9cs6ebiEVQVVzAcxe53sxfpu9DyvvjAPoSyKW6uWxi3P3o8Pq2endSMrrw3cEpAs5nu",
  "key16": "387pidaDYGht82tthK2rQa7Bg8Au5T7J9pe9BHc5mJypgjKxq9QTPApBtouXnjnAMomYeYXxzeoisZVGDnNUdTcb",
  "key17": "PhLKhXtPZdHdHFD7aZLFSaFYbHiScd7nJ2hmzsdGLoSq5aswEDKkZJAkWXzQt5wShBKWhQh49NX9qStyQyyBzV3",
  "key18": "25z3shz5TBCjKW8UkZx4DtY4RvRiQSVrpd8xPbSikjird4GGTov6GSreCFx7Q1p3zpjeGwPP8mEErGRBWmrQpNj1",
  "key19": "2D44UDsN1wVtSBBRvrxwjM4ZN63TZtWXkrYy9XBQ28tTe774EJ96ECioWjjC4DtD9J5cXLQJYVGSj5JSFQkAd8aj",
  "key20": "3pW1BW2Y8ASLLWNBEfxy21bZnCcRTYVwKaofi3aQVmekJVXqxmPX8fvxZuoLSAxsexjYx4LygLvR2t9XwL7MLXKx",
  "key21": "46tHCM767yEXn6XYdiNmQFULV1UEo6T3SHX9ZU52ykeaXZ2TrUbckhntvf7EvVCBCzDgBGn5rrvxg5QxAPLZTgeL",
  "key22": "3G1o4QeYjQAZMezYEiUm3CQTThVgjnabCULEPgRWy8XdwWcvQVGL33Fx6fMkWAotWPn26VuUjipiWXyCkEWPFVDN",
  "key23": "2CSCFDdB2XQitQk1sjw1Yut1NPQ5xUaUtJTNiB3CKbh29DS5QvUy4mdZ4GHGomncwSeFLR1221zmPZjWuQNpGsBp",
  "key24": "4fHqaBqa6QHht15Pyf12yVcye7S1jW8wgSwFngzumW4ZdYEEsyAjynZNU7wGDoDWsLT8C46D758r4VfiD1LpgHwm",
  "key25": "2y9hHdAUARgbsMf2wQfUGKdeHUaqcnikzC8azp3MD9WgAZzx2WH8C77fKHpddt8BTmcpQY7SyGpqRonJcKV9rmP2",
  "key26": "4zrpHsPm8rqBoeCSS4nnzmpAaQDLTcLfLLgEfgg8QsLSchXpxditLbpYTtWRdP2a7yLd9c5m7S4fSQbUq3GYXdDs",
  "key27": "yFrrsbdZSmYVEFicEz5Q4RUPtY7xHydMVkZEZMKDq8JAdRJGLZezhKDYdDahPyvP325L2yoEkpi1eqVCpC95MWW",
  "key28": "WZWY8v5udJHq2b5C3eW46CvJQ2nVR1VmjWdnqxyWNi5cT5u8AGQUGkQLKS9MtKCWymQPYWRpjNSqa7cHpbTBU63",
  "key29": "2oxv5zNLYHibfdubXXKmUvSiH2DJ8jxs34EnC4d2VCCfSnnXytJUg9GBofPMijM6e4Lwe7DDmp26myQdyDG76Nk9",
  "key30": "49CRx1znkLwfonqaLUmFKfUEMg1hxH3GhFuGXjVZKbFD8R1akmK8TEZ1rcbatYZWD7ddpcdGbZ9nQs4nseHq4iBg"
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
