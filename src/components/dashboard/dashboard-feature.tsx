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
    "miEF1A5gQmYAz7563MxXp89VzVv65G33WyuX3N2XyZJekxqyT5uUEFEixAPNBzEjrVLMBqU3tx8pwVmcmNvEM7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bUwhjYpqrbFedF39SVZyHpXuDZYxt1NrMoeDiRTTbrC3P8etYsP8wNbSfRuH5CBNLENDNXrg5fwP92NYYBzt6Zy",
  "key1": "3dRt5PRx8HYnANPCKuhyvyeu9sWycMxfwACRgBKKSvHLZEetCZbr3VnVXecEXG5ucH8CF1teRJLFkStK6RSLje6i",
  "key2": "5VrDhQRyNSAmqjSdvv9ymEyf6hDmc61kff1vub5vyFQM9r44yuq9KS9TxTVsBadBtcQ2ciU5MMv96CrfDhuwuLKU",
  "key3": "5DMLdNUPNkv8kTSLRN3roDxcHvfPAKRcPXihp9wCP833jMomKuVUiNSXTunpecbyzYdDE9XLsrfb56PfSv76V9zd",
  "key4": "2W7hbxqv2YYKEm8vsHLGx4GDckWRjFESB4Ev48dcgqEPCxdtfX3PXaKr93wzrsvarA4z7qWsZovsYFSAX7eKsfoj",
  "key5": "4iekrFSpro3n8tcFBrM689eFXXLVDJi2UYXzSqWkwLPT8pUuBob3kWWXwxejpPsiXvoH3r7FrD8mb63EkurZs5wj",
  "key6": "3YveG7eAN5UrUVP1RKBjwvhBSoGhZQu3FHTqin2DU34eYtKiYRvuG3cxnRDvmPqBHW3SKVm8eBStDppkWMm36We8",
  "key7": "z8pDkqhvTFw1iV8vNe8BPYuYkjR1o38VGHWNn12Vus9FtyRPt3BkYUhLWhzxpt191G3BxtLitkposi6urcs6P7a",
  "key8": "25eqsyNXKKBEWbNWETfmj6HonUh3N84sAnuUqP2DWZtTSR7Q8qWhhpDmYk5oG3SiQnJAoEbNMnQu3MSujvmrN7wW",
  "key9": "BgdHL5gwkGwDRqV3J9Ts1LcVreNqe7RGxyVeFRv7AWv3J1zqgDcm8CrpgXAxcdm4pxBqfSRSiHAp9xksDrvZoCi",
  "key10": "4PmGRSgGYRFsvEx5dQKn7yUD3uFQm5yysVeWrdacT3DASvFnXsxF2gyRK9rwaZybPHukoeG735vjEmy9deQL1wXa",
  "key11": "4RCKgoeuLb1TGDeLtV9teLMVv8VfWvVDFQNbJuyyzxrrKLMofHuTeL7pYCEDvK2EXJXgA2HSQ9rfeewA7vBYEHy1",
  "key12": "5SBZ6m7YCoFqGRSF5j9iUg3Y9t7u6T9w7zqvd3YMQH48LFGtpHiW5JWHKGPc47zGLfkQtbKYCZic4qN12bEekpTa",
  "key13": "4EuT7F9jJpZf9b1aF9okP2MyWTtZ8Yc8mxgdLqnm3pD5E8jZFC7btEDJGkai6rooaYQ5At5E5vqnB1zkrzQx42pQ",
  "key14": "57YZfNXvttAfttzfVvwyeCM5zJacwCQbGE1EGgotvSe3bvvg4bAyLHP3UGoyvYX5GZY3XKEDgjujWHnQPzL78CBo",
  "key15": "371Qi39Yf4Wm19SsVkar6xGYruRhgev9voWkQUw56FkZifLRhjPDExq6yQGjAwAqLpNx5oBuV9yFiLVjDYiCrD4g",
  "key16": "34stQFUX2wWMskPDUD97LWDf9mUbHowY6TsUHX9HABFtdT6XyfwqpcZ9YnD1hLpdTNxE9UFJGi5UPyaDstGiNBbE",
  "key17": "5umyeY55mKp9mFUbHDpn7NDxevTcbHEebeej4s6xib2uLffjBJxdeETM7WS8h1jhE97LehjVJEKGcfQ1ASZJo6Eq",
  "key18": "422EdZdrmUCt5KUmumgZSLBsVbrUkTUvwtrHbkfZVz9fUAqLqcHQjnG2fJa9NJchuHnMvwNtdJxgoZxSTzEP6qxp",
  "key19": "upUZFZgBJUBoPhvQyC1noua66znRzrHjDjhwYriCUd93oRna3DmB7qhK8fBW4m13RzcjKFXMGDDx1Ce4QBXDBhH",
  "key20": "5xzFM5iYxmwCemZAwM7f1WWGfve6bG364d71JGnAi1B1Uu4bDt6AuTSD6j74PeEiQEiAXGEzuEom4V9KMehp41kd",
  "key21": "2insfE9XEzCKSLej618tbgkh3u4xjUZCHSKzTPbDxZakGYSqxac4YMxN6Z9bmzvor9THkcxwVg9Hz9zaZ57xJ1Tu",
  "key22": "4J5k2EYWVdbY9xuV4RHZAw7NzRsBgPHQv5vfhCpGuPHFfS9P2GFgimZL2bdor6fKNU69ccr9sSCvE5jf2B4gRo1H",
  "key23": "25bkupozGH5r8AmvBXJwN2L7NM1qHuLiGe5xWfw3bznkaAL9izJk31hsJ16jKArxsH5TkLjEcbeYPo7df2kZaizt",
  "key24": "4Q7sTx23ZjT7kfbXGSikHz1qWKy9DL2L4KwG3hxDA6DYXzXkMMqaqXVxrNon7196fLBy7ZsxLZKqTABZB69AXQPM",
  "key25": "32VpPqpQbdDpGFYobE2VASvc1JgMvoCWFMbp8RpHeqci6omTidQ7KvXjT7Ku57ASXCTUwtivuU32rF7ucirXnj8v",
  "key26": "Bz7jpGpAgRV9MfpzCQA6jep9d6pCzdEjMRJSyYcCNxzJ2YRf3WFhUB6n7TTpwy8ZNYMs8LbqPpRDJvGZ3ppL8Gc",
  "key27": "ieSctQVi1yfarxEPwBSnEFYwZ57H8bkEQgazDPYDavT6muUi2RPXZ6gsTvVGzjDFMBvhUWCPkfXmFs6AuQ6XSya",
  "key28": "3kBJHPyHnb2aesAN9EwCtCZwEqz1ssCMeKGDHSeQ1ybsSddQhYgXYz4cT8SPJLUDrXis7C3MXLY3byp9ZYrWBXng"
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
