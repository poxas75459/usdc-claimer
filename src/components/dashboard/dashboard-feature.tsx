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
    "4269Pn7LywbN3HueHrfxBze9tsEFUKDBhBVZbPDAvovoC5GJfH1ZERdB1n3fmk8fKPXH2pcD98RtavmxbDA3p2e6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i3vXnBi9gmvjLHezdBkqx47GrPUFBV1SS4hSKMxppZcu6vd7ZU4CJicYDLthiTkiST1Vdt1LLc7jAHCpPsyfEbn",
  "key1": "WyBwAXignwC7npcygqiqTCKDQrRAm4S6nZg5XH6jDo4UjiPFf4wMgkg8xgx9eRc2B8Vb2aX6UMPZEBSA7yeGxE5",
  "key2": "49PLyNHDhcJVhPFBS8NpM2ZNx4UqFXzpoG3BvjdP51d7dUyMzodr6W28PHX1QtrEDwDm2J3eWy2Vjg8LcjP1oTxe",
  "key3": "5CqM1edMn7SPyVN4uhkVWTvESE5LTveRbKZ8nvDU1zD33VFsdBnmZKPfon9JurKwvtSSDYWBMWatgDQEQPGDasNN",
  "key4": "655f5KHP2vEZpGvP2sfRWwFNrmuPQNwxeEkDUwFXhnnWjuXFwEUxg3RrCq5zLvw5Ci7rPnBew8AuLfT6UDY3YFCP",
  "key5": "tCuJ7tj3bvzHvHkXqaRGAQBQQr9TEtcdZBn7NYm8n2jtsHzYaZ1RWwBJkyKxCQQctyunXuk5xjpzVqG13enU1u5",
  "key6": "2zzhh4Zg9KgRbmuYidyxuAJUgYj1ZdwvnSjdeSaZu6Nu8AqPvhbyFgMPv5eu2h22fK5FKqHDzoHfPHDKuxvu4PrP",
  "key7": "5VdUqWu7vRCXAZ3FG6T9NkZnugvmaDiPrp6yqNg5pjuCoQ7tErkC9fgtPSK5Tf2BUPHEM5afSNdnFmAWSPQBWGyx",
  "key8": "482mTSyBVm5j7RqhzAqKV6tbRHmwtFvhfy4HrHYNchiEwx9kDy4imP5NmQfSDnezg4Jo8Re3gUxbNFs3NJzcwRCm",
  "key9": "7GWGRqttVQ2J9MSxnPSYbahmd9hFgzPuRUzFPKwTSg1Z2JKZVFH85C7H3N81j677HFu4Aub2PFR5qpeeUc8ZFvY",
  "key10": "2Y76iLuFVYpnXJuHe3zfwsFYb5YnAU9fLSMzhDVS2iXbNpMNQPiWqcrj3eU6mAboPRukSt6Mgc5afkyqcxPHHXTC",
  "key11": "4GvATFgf7WoG7jvkHyuzKHk4iiVtQX6nM7HdRgxRM4U21T729kCfZR2wjjz185xHWgroCcvxHenYjr91VDHf1TPC",
  "key12": "5bJEWmR7BeEuLkS3WoiiTemPzBYPCmebiEKTbRn8inmvnHdc5iFujatsQZmQUcfd3mFhgUZJ3RrBK4txCfM3Qqt7",
  "key13": "DwHrJbANZioXFTLzBQcELc6crH2yp7UjudYg2fwPszk6WdXxJjutFGRPnXq4GP15PtyLhhDjSAKvGB1UWh4zoGc",
  "key14": "2rSV5qPPmSwykttTxFuZjvFBVf4Dprh9E6XwqFd9SMXmhWP9Z3q79JpYUS1hw1BYinmhkivhwEWyfpRNhy9e5iwS",
  "key15": "xnMJuXhj5uQ2s4MYGhzKfXEqvc5d9L6V2r9YC6JsAJTAg4RdRVfpdf7NAUK5jQiVtroWRqUHkty5EaQM46nFvT4",
  "key16": "4AUwVEmoYE4uQ3ZuAziawAbFLHjhGXTeGaQzdMpppqo3z4YQ2SAP5rRJF65hVCSiTXRQqS28UpaYJVmsCEui26GA",
  "key17": "i87LVqDt9PMMv12U4FcrHicUanvFiLnsEuBvM9HNEdymKYUUdhdtDAaSFLDA67Q264oWZnckCyHSXciZGscwnKi",
  "key18": "5EZnpbW2oyFiKuAycSW1RzuYeSdShHQP7kdow82XH5hsQkh9cvyjkqdvxfRZg7tetKC9kqkBPjMoieGrZUpdkws1",
  "key19": "4RLvPFJjHrFsD866hVVztFLqCVinaSU5G7JKuTiBW99P5qf9inSoEEZD1Zu3nqgaqgfTKZHSTRYobDuWk3eMKoKa",
  "key20": "5924hYvDAzGjdAEjaHpMwqxHmtFtMJQSC6LtwnRR6zPATAxmsEWeqbBPeaLBPi56tiyQmvkqJtWTuUe4aqgV3fQV",
  "key21": "24pGjpfNbemsiDPW2U5vvYJHfkEnqc72WuCSf6Ncw5PuY7bhM5AjHjxxCw7FUoZBnbRe7MvX1Jx16czCwi6JjGL9",
  "key22": "35jL5V336RzKxR31yxCmm5ruZnY3kdLcY1zDjtGEv8WDBUbqiV4PmzGuBYReoFar2ZZ4ksNexktaZoJUXxdsToFd",
  "key23": "FiWF1saSAMaw8ixttpnvtsL3YoYF5Ax5SRRA7Cgv5Ei8brhGawLA86RHGJZP3gLX3KQ5sqGdfufUW2Eab8BziJn",
  "key24": "4JzmEFmTxQUSoGG8Cb5Lwfxpf8qiFRk1gmHAGXvrNRHeiT4T1tjuW5aB1Ywj7hJwX9R2YYoVKwtXJuwoyb5DrYSG",
  "key25": "38NvaSR6hgtSDcgmi4uiD1hLunQsx4j5iWrotWY5M79XG6VNgzRqZueWbMzrM49JX5MSM8pQmPpXMQhtxPExDVL",
  "key26": "4SopbmL1vdjzM67ZFQa7V2Xcs7ehhjbb9SQE5aRCFoPT8fMwmB3JS4CcgEhqi8siUT7uagTRSpb7qLLWwcvU86kq",
  "key27": "4ooakiqgiv8AGdbCWymDi5M3eKPDujb1naC5RaEW2E3UBgAMrFqVi9vnx9a2xKovopPq8togFUeo9MGrzCifMLUH",
  "key28": "3N61oL1e8ddA5vcEoTQjQ7jWoMWZK2Kr368Tp5VekFijkMKmFRfaVsf9b5jhdJtKN1yiYV8LGk9R7qhhvDrTcpmu"
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
