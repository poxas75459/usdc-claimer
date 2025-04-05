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
    "5Qzjhai153UM9fPvZh1t8NxcXMMD43LCEecajDswWY8gfE7NwTev1odR25xgGmVZXsgTs5zfNsHj3X6T5MExZLgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gqAq31Ya9sSA65F5g1p5maaZniVJc8t1ARVHgQSfUUp4ar4vTy6tV416vjuLEWJJxiNnTvLpUAZMqF23Wu517ux",
  "key1": "Usi2EApREK5vQhT1XRqdDGyibsLzuqzGYXzniRLENkAjHFWHs6mn9TKvUcqh7QCc4qjyYT2RvgdzhXwJCRatc6K",
  "key2": "5wHw5o2VbSAJfU2ohFfkk2shgKn9NspsqjsHG4nGhToQjvaDtTvAJv1AfVfSHacDKfTq2XNchnYnD42ScaoLagVQ",
  "key3": "5DTvQjYV159aRMw9zcpCdXW3Ci7AfV2Xek3pNiXG87VfTgYbdkeoNvU919BXWz5vjkz5X8UFPQ9XgoEHvLtqccP5",
  "key4": "3jj5UMYzq44Vm6t5N2gfbZssTtkwimFGhmV2pa54Kewjj9yQThZwUTLZEFFC9hTJ1AKwAJg4upTCwn5wKDj1XkGo",
  "key5": "2hh3uu1cFSdynLjNUwG3W8AkobqPRMBehM3PqE6T1oMu3N9f3RuEMbqZiZrYq2aJJePp8sCnuczL8sVrmUE5FjPo",
  "key6": "3Yhe18yshKZo8LUM4g78vGU6PPofaZUEovm6WbicAcF6ha8dLCmFY5TEKejsnt2AKxa5JB4AWGBHdU93dWrSzmvn",
  "key7": "pBbdPPGfwPf8e23rfwZhdf5WELcucSsLmPP6tdn8qhrxhDgRy7R5geCFqabiczTUp99kHK23VVX36tP2FvW9dMW",
  "key8": "5VvPWsyGr9npYquGWw3HiCfVJhF1PbyNj7xNCuYHdJ8da9BYmzDBfFg77xyyVLFmcmSGKmPZVaqgSL1GZWh6YztS",
  "key9": "MDBUxeJ5aN73WicWTfJXvegacEqvWKxTaVfzpoV2TKBKHz4QHompUvU6YB8jBfk8JeqZnv59LEgG3T9NTTgQKxq",
  "key10": "4pcPmBg8fQKcP9ZAVFTra3cfP1pDRfQsc13HmnRbWC32uTatNuPMTXKxpEKoqzKjgqxQaWxJdKXYSRD8ARW65fvU",
  "key11": "5GwaTmS7fgVF7Bmahrra7Bv8Ev34y8LWt11w9seBcNxJVAx5N4UH3sZtjRdaFJGf3GRHTc7C8j6zBLLdmLtzBgow",
  "key12": "51azMrgVa41MUu4j41kj16aZbv5Kr5jBu6GScuXdAzpnQDsuiVesTS8Eu7cYWsgEa1NSzvPtBQNLNth6poxaQDYf",
  "key13": "5ThryDPAN23ag8E31YtG7EVsGUghohMFpg3AgkBXbVRWP1guUqsp2HLEpTqxJojLPBNn42qZiDgqco6SxTEdVuWk",
  "key14": "25qUQRucCpfbSG2c45HsPUtdniqAwie2HiQVPzbsqAw5bG3T2ci53QCdtvdubEC2MSWnj8YurPF5YLPtx5aoBdP8",
  "key15": "ReKZfvtoeyRvHtZQGq4UTZJrcKgQogTcWUFTHwr6RndHHEpTxEFi2Sw1n1U9bs2uSfcHQX1YxzH2F6XoiRP6Cjs",
  "key16": "4As2runapTqeSNv94ANLAd5ygSg2ToosVoD6UVgk4VYvdJozfBTdbtNJQQew1So9ivcmmVy6aApL1uRnmgDvKF5N",
  "key17": "3MN2bzFPSHn1kCKAUXNKgxBLWfaVmaNNLqQSq3cnMhnUQbCLEzrhNZqYdknqzL4YYCRdG9tiyQi6iUPqbwZZAN8Q",
  "key18": "5Hw2RUQmT8XXFLYWuQAdFcKcTPwWHy5829cJiCWGMcf5E4UQGnvRwyuNWpSqWqKFZKsJH31NXg3xCnTWf1r1kKvN",
  "key19": "3BZWTeS66wfcgY5SZiZ74JUgCAYxrtoYfQKMZZfjczfWo12crsvjX2kvHyFnzgDoebEtqM4idWapyCGMyLFVbukU",
  "key20": "52wguTLyYGZ2LA7hf5Zj3GS5qW89b9kyNVPw92rK2rQm6rS23ziqAxkFfJf8GLfqEiRSuZB1nfZjrb89NwafDzGh",
  "key21": "4TCYrjHhsyo6ZGnNChCsegMVgkGCdg4WNiYcjUtkRwwfbzaCLgqfsqeKA9Hvkjwve1CiEdeuvPKsBuUDhwnqGvCB",
  "key22": "3vzVmnHYkcaJXGJmhSCtosd6t6fgzndJUV3HDdQDyajmXrhzZuC917EGoocWdpHQ1LitBsV6NxUaVZ2NoHYt81gW",
  "key23": "3SrLr6cn2etb67xqe9tfNP84bmKWx1cShV8o5j7SriREWGfR9d37i4iSmBuTAVTrjaAzEWoQp7Ry3cwUji4Juexg",
  "key24": "4tBVAK5rqy9ySY95MHWefFniCV9KtW7n5Tp3PqXnRL1eNJhpXqbLBNREyTMyfj9jzdF1r7P2ZyoQn1WybnGLSvnM",
  "key25": "2jXSuv5Hr8Lk3EzFUrtZ6bsX9o4vQiz3Dybvky7GYNeke5qtA9WnoVNRk8mSVstWoGCDznJjNkskuZoYWgha1TkY",
  "key26": "5AAUyqbyZVm9MhERhJ11zXTnt331eMADkmtoBH5kDZg5eNAjfbTn6pzVdfahLcxf2RDYz1n9X5qLCPeVEesiFH8i"
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
