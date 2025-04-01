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
    "2SGB9985LUHFdT16YgTgbJmLsuCVNSd6mU8nLLUpPjv1J1Z5ayYr465CXkvTqtRUETzgwAKENDqygZxgCjRab7pt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fXJ2HYC3Ttzb6imEtNErRLJocj4ncgULVkyPa1F9Xjf9mJBqGdCewvM5VQ2c1mhEXykbdYUPPf76QNdMDi22Q14",
  "key1": "5rsBuVCpwDLAVNEVESwBi18WfpSBxmVmaV8NmE6nBoEgyWeqYoxYQFXHMLdAFXtyeEJxSYGBnLBDzSNRDv1n48m1",
  "key2": "8WyAfuJ4zExLe5uS7kNgzziv1Wufxcbk6xWUVcTZAGvYAh5wo3HA3Qyhfv74mc1y9NPNhTT29TZ9cZxQvuvCfa3",
  "key3": "46MBFG6QVVbYJCSB4EZGVdC7fHsZSAvKz29PxEaLCRLUVPtQdJSMyoHjtruc8cDYr7W3P8gtQAtZ8nLbm94idFuD",
  "key4": "47YniBDExM96NeiTwygpJ3B5TA38QdxvcAH1em7b6d8nVG9tUM1fUzz8jM6eBjGxg4sy47k3XphEtKyUDc5z9Xg5",
  "key5": "63E5RTKnZQ6ReaFLLSWv3y8yuajD2YLRKB2r876GUU16jfrzCqbgDZccig4WNBviANUycctTNi2pyfdJuNjALouD",
  "key6": "5GyThMN8yurrMX69jwze7fqoAzU5EZYGyTpWGA9tdtVZzhnUmpcNdEyf8RRhFcLymcfNPMUCCURWLYxzUZZ67K6j",
  "key7": "2UBbQ2KufDLGU9MHEfGH5i6ALSE8yL2F5UejLwJWbnsoko9KN1ecyz8Zfv6mE2sf52UsvFasgQmSV5iVLJ4iA5eX",
  "key8": "3wrJtJ7fCo9SKCqtBXmiziW3YwhdDfq2P4X11h4M91vCjEip1YWvyPxaEXFCr1aC1sEx9Kz1kRwJMzts9QViCzo9",
  "key9": "5rdfaxcwToA1eniDciUYr62TnirqD8qfev5Z22dfS9Ct9Nsp6QzUzDvKeJpdGCmHtNvLTeZv2Knyc4ZQxK2peiBv",
  "key10": "5WkNYWoMa7D8paDtEz4kDfZBwdCy7E9xPnGDT9JMzPwDVpRD7rWWu13nw2GREJd2xvgoGvPKRnNw9xhp4kfhDegh",
  "key11": "2UX11e3RcbLQK8BWcpnoMzpLPw9HRZJiC3j8HwFa9TLmY1QSjUim3w6pbBKZ7gzdEWyKYu5R7ShEtxNKbMfkcriS",
  "key12": "2SjkLUHABCwJR8y57qVrW5dyvJHZnTaAdA5XWCotd3gmFwjjnwhncBcN2uD44camZGJT4BuxWXxtoaqBirhKG7K",
  "key13": "5xJjA93t235R4L1JidUc3dvuUoTkK4gPtZq9cjfFfseiEddXnow3PDzg8rbkWaZWAyR52LrPrWHdXohLvX7sSD5P",
  "key14": "58KonKjwJCKumWF4voNwFf7WiztpT4ZvvEaA4opNXucPDs3vgjSf9BomwnqsdPLY8NrXZpqoweMLyh1coFRPfwkZ",
  "key15": "eh6iUGwdQEsd4Qq3pNtnVcU6r4z6K5oygdRwkhXXfjEZMWcN7LfN4jUTkUF7xfN4VnzAr9MABSaRiKpyjkLB1Rp",
  "key16": "66QF4FU5ZgVnu3oG48FYyhx8wqoLgrz1kqhh8cXgo83u1t5FvfvBgXweMhwQ8FKmprPTMYym6i4QjEWv9kskJUQ9",
  "key17": "51Vc7S5KKqX6837Kd87zPxKshAGqjyspNW59fTx99wXFHp5WTU5MQXDLDetDfjFLkwXVr1tvniSNwVQHTTGpRTNY",
  "key18": "WYUXap8HjYumqkjnYuvqai7uihG7LffuSxGQWCZqsRNGCPinVqK4Ka3KXfuWnygMqiMfthpxjhE5RPumcjRMqbS",
  "key19": "MqdcRMKors24soeZbcREbagPQh6XYemrWoFygVF9YjwbgsFUMgECwsU1GcyeSwRdL6Wtb5mjENPrUWxLAJsDKkx",
  "key20": "3BgcLPoEAf3VLXGDnVDkR16raQVJRTjkgkadgRZxEE4r1Vo6X8i9FFkGv7PpaT6t7esD3L6awRgAvDX4iyMQoFaw",
  "key21": "2qKU8vZdbnWszcBCoo6Z7AnUCvMsjHhCBAKhQWceFpo4nJxcaUupiM2FS8Q1q9Hnmc2ieXNAffQ88w3kUgWFGpUn",
  "key22": "3Wqa2kYGrRMypnNnMu2L6Nzg5crWm8xUdCHDNJC9aHA3GtX8vXUVZMcZWCWPU73A3VEsXEnsAkU6D9MX25H8wVqY",
  "key23": "kNpAuzsFuyAqgS4jL2yo1sUCnAiXDBvwYRBupGseC1E7S757JH5jfGo3R6f6ovGNwwaATZxgnK6HP52E5jh77a3",
  "key24": "4n4hJTmLqhRekvWNjswfXzcJmHb5xjeeKSNQLNEJd4LSuzNt6d7JAHTrsKF8TMye2nLWLomKYeXehyMJ8EKxAvh1",
  "key25": "2irKV16KnG7wFnCGCzEkTu3AZEQ7uEFNkumMvjgJfRZjYQjMfpVg5nYkCVeCPRt75f7D2gcgYq3Wbxp9K8QfbkUW"
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
