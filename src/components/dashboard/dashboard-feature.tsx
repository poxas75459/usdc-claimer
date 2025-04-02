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
    "4QXWC9qwmuT1cxumKeWxKsXuB8zZzLzWEnMyrAJi1yL9c3cr3kqjjY7Z2Xn52aQxpMWwdutyVpdJcUoKwsQMzh4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vS7JbSsTWPM9L2RfnctKthThe3TRPZkxggYDxymXZfrCjufbsATg4BhjkEMLfXbsJwRT8ZznECWVJd5ajtjREzW",
  "key1": "oSwk3YZK15fcF2u4u97jwwJhJwdiJDn77qFSYHxHYHrBctdbL1rEMbznLvAQtbg6kLhNmWejeZJdEViizTgQM4Y",
  "key2": "3sxX7C89FQPdecwt7rcWpbSrKMAYueMZh7Q8qY3MJCCew78jaeZ4rwHSmraZu5PdDHHZFQSFicyEjToVLk6fdQZr",
  "key3": "2EvmZuyzhiLCkaNR5ATSEwhUpnzmLUE6xnkT7mFm1iHJWRZ5qNdMDpMT5kvPHwK8EYNPBkSUwwYUmkkwQbSp61Fm",
  "key4": "5VtuNPThkFFU9xrHb2issN5CuNUGaPNt2SapvpTc58574E45rpuUPG1pBfpxnZ5bkgpAZCAnd3RVDWzHLwPJG6k4",
  "key5": "vDZgkUUUZBeYQCcx9sr9rC6KWa6wiPM2Z2TFrvpcfzbLQufzKrTcHtmvxfWEjotmUaAms9oubHr7fhQ1ZrmMQap",
  "key6": "3SYxET4wSuqQ9wySJe7X55yWU3QiP1LnBkQzV9pFneQNmPtv3ogarMZbJgegNta9Cc7K97R6SjEVWcv3NdtHfsQz",
  "key7": "2VdZjtTFzmeRZT6DKRodkdWVY9AaC5CYChiao1Qe2oT3Faku5FoD1YGA1CbL1RSR2hTD87u6shwLrbtAi3ohG4yN",
  "key8": "4vTUqpGngVHw4xgWg5VR2FTFxC4UR1mM3hi3n4nYwzJEnnxSf8rVbRZo3qLo7TxKo2iYKfWV5DKF3PQRxcnMG98J",
  "key9": "6NYhokbote3uLAoKViFfYEVtQ39TZTKprxG5hVV1XKtkGdRx6Nd1rWFbfiYk4ZoMoGpKG5zjTbA6i7vz8sRvkzc",
  "key10": "3FUQxASGtBtYwMhnAzPfDNxKMV6UtA6UzYuBg2AK9MKrTX1gNcF6rgwdiUaiWS5V2aiiUBQT4ga2St7gzUckkXdQ",
  "key11": "7dp79rThowun1BxU6XGRDhXxgKRX9nxaGQPr5hc2J1NeVizL633v59BLXJzUc77mbu4mjFepVeUxjWNsAnpPHYW",
  "key12": "5nTyvFwcqGph8w9gfHKFXJyBkVhNSH1oyL3TRu4SLEXsRm2fZ7S2aGMckQ6co5fhWbR2A6kaPuNDLuzZevST9VnA",
  "key13": "5B8rfqqC5Ycat3iShPXFVsLuQFhWU6zX1Wd853r38TRwPSZfeLux79RopweT1K4TSvAwc5JK6DdhhgR2M1Lhbsme",
  "key14": "a3KJ7jRwyVJvKbZQSkRiBx4rfmoehC7BrW9a6pbnLA6Ef2d62hxk9Fp2DsabAAJYQFH3jiaFGbYLz6KrrWTZvny",
  "key15": "5ucnTVu2NmJTpHjGCB35MeR7dRPhVWGSyx1GZGShpG7vuNYuctjmQg5idxjPVcJrbus6cx5men9uXMfssbYLXMCU",
  "key16": "iWHcYuqPxmWyJsFEMES5n5dy3aHaD1kc8rVqLkwq8jaChenRHKbfX7SqNtWzkmMsQynAusijgxCu2nTMAAMadfX",
  "key17": "N1zEMZxiAZuGqY4XEB2x7FnmQ5KdKYiKMjCTkmg8Sc5oWfeZogzhQG9fWGHSTUhd442Tn1PXofjhB6jsuKQNNrL",
  "key18": "32wNFLf1a3CR5u7k9WFYdzoq36878gdv55FYhgCUuTQmn7AReN6jS2f7atSjMX5YWAhr12nvA1DaeNbpgyzftftR",
  "key19": "3ffiKjshh9X2jN4kcBtnPaZqgHFectXznvt9rkJdnTkJXtyyJaomsx2SUgsTYrvsu5WrPqdGQ7gAh2PYBuDNiGao",
  "key20": "3YmEnUMSzht67Ph5J6hnTLhodPDbbrFVhGQ4KV152ZKHV7w1xdVKnoa4J9hQf8veRJU8WtRpumc6cTbXyoUWkLff",
  "key21": "DTZgC5R8druXZEV4PZyJiUav12F9BLak2iun9jKMscBtG8gKFJbmRm1roDv6T38BcKMKQrPQpDFaDphQddgnSWJ",
  "key22": "3RWkrw8gUgSffTRueYjN2x9zoxDiaVeVEpLQkopqiW7g7uFks5Z24JpLS2FocBieAATKUzN9ELCV39orz85T5dcg",
  "key23": "5prdQVpz1VEpz7iLjAN7tkKsFFtMVwnNaJrZ9Dov8CfpKDopQFFSCduQj3uo6eFVhoRbJpR5YsaNds1n3Mb1mmb2",
  "key24": "3JsHHrt9Q97pYmF735d37dk9RBWsPY21Q3EJ7y8UrNQdfx4DUA2esyg3sqkkc4JDq6SwXVTuuKHDfoYL468kXi7r",
  "key25": "CAGUx2yQT3K9mGEGiuDC4hUXUEP9qvgHTgeNJ5qCPopo5GPWAMS3pSmcoABh5KpGawibvz3V6wUiDpCgkdT3zo2",
  "key26": "4K8qMebyodjR6ZRsf7iFzP3Kv2cLHFSphdjwBLxArSrA17vAh5mm2xFzo2ptdHzPBXTqAPUv3NQoENKtuKQNZxYh",
  "key27": "2gF2WAYScyxpZwm9J6jMdesHkJW2MtHxEJjRPuczFJruuAc5Wvf4chhzsBZmnCbqeum7niDwUbxXx18PxUiBEXKh",
  "key28": "gnHUU3igD7RvszrNfnD5TUyQno22cGhxYG3Y3Jv9J9GtpUMwUmk9fhiAfiD5vxTwKq7gTod9KNAQajYWTNivc5r",
  "key29": "4zLfc73rtzDffqesFSgRKQofptdsWCfwX1t8bdNk919Li9vG3RxtxVDM1ma7h6gNWxZ1VDR1kgK8zm5qUADEGpoh",
  "key30": "567shCNeKnSEFRZq91niB2tsmUAwnstTKBZGRQ11EoDrAg89hc9cvsLFpZYCn2XeqkAEzT9LTtNJiLHcNJwtD261",
  "key31": "5AhAqmFbPrRLWMdN8LTGg7X6K2bsqDzHv6TiRDWyrD7ortKJLCyrHAoVDCBn6z8AmUMugPBdSvJBw1NpWwiYeLsL",
  "key32": "2C4v51q9QTamRTZrsB5rMKwZm6DNPZc7tLoAatHf34zRCZDTdxgigoXYVPb76xCUnQoeaFy3ASzGNcPS74y73csM"
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
