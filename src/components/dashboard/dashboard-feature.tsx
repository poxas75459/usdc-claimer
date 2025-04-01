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
    "3sN3VViPReyxe8nLVjQQDMcPbz6Axmr4EdUMPbEvLEtyi1DHoTHshWhiyZZLdbieX5z7fsfzxMuAocqD7iivEUxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VmxyjwimAzfQfdU17RJT6w6dYbmhskfZzJecLmZUcSqQipwzSMAaVKhaEF8vqp9tqNa94yn3jUgEh3FHp1p42EF",
  "key1": "2fYwPQcv999qBqTwDKcr6P5gZTgUWtuKqB41dz3PDmjjwvZsB11d2pmK9YToo22jA84upM4WCutd3rdSQrigfa6z",
  "key2": "4kWMRBiAQ6AmAmhGujrSqJQZjPcCcZijR3andt8yKpvrP6xQTJ2JbjFZBZxLsH8VGdugF4oA7fAZVxp2G1PQTyLJ",
  "key3": "K4dx5AZLg4mzSeVmjDBtqGqGxzUhBdfuuhMvmE9QKhoLV77geMeCZ6U3xQPRU53Ur5EsooMiCrktaVKQMLJyaVV",
  "key4": "YAhcoF52kj9wDuaJfFsUqtVAUou89KzSxBuLG4tNXyt2GywpiKdaiBg8ABmvtsm8qX2LiWm2LG9poozFSEK4qVK",
  "key5": "5Xzm3PmwfTHbvaULpT5BWiUL3RwtGLQJy3vp9mDpUSH9SZbXM19L2xBWw6Gw2Y65ehz1VExkDvHAzDhE7axhMRrN",
  "key6": "V8BeukdELYE2dJ6gkQogAaxqfwfHPTXprbDDivFRU4YJC2QEYAy8ssvkE3YYuRutnHigbwfxFqeeF7jPYu2SX42",
  "key7": "aKRHqFcgKTfLeX2qWE6cUQFAwDnoEjXQkq8ZLg5cHM7UhTcDwNZLDabQ7evooDizrw5bgBWwY6U63qtgvUd8HzY",
  "key8": "39P5HN6pHowPGBZ7cHJKPXucGwMxmmJtMn5deZ8LcwjGwQ6hN8DbAv7zKvFEiF6ucXfYvk48fspPtXyGrUzUEQEC",
  "key9": "3Bt7B8bgLGdMUaJristR9yXpPfciuZ97rASXQo8ziHXHq4t4FBb22zyx8888opxu32HaMRhxMUW82jgHBvxrgGMV",
  "key10": "5WbqPWvgSJwYfg9Tu496Q5bnBb3e2avNS4oeepKFYNz9oSWvpXwVaLLFiUDtgeeahU1axJ5tYqMWV1bnRkcviXmY",
  "key11": "5zmjxzPLQYoDei5hWGofV9X9d3GtRUhaWrXsTegGCrQ5BxVhzNAC4h5L1itWq4bGnvLFYJCuaJS3V6YM7ofSU7Cs",
  "key12": "beScjNwqjQJV76NiuAZ9j2ZvbaFCAn1y4NF7SWvgZcYWV54qmKvssr53bAsjhSubDRHWyvtnZy3Sy2WvVkDWme7",
  "key13": "3U3zDGUGs9yCbF3Yp5YAceSf9NS67mgs5xjmVyPp9uxJ1MwfndGKd3GbjY98mo1ok9uGNrA9H6bMVjtgNZaxwiTZ",
  "key14": "eNTGDRD8pYDCK8jMHKyScQqv7NJrWjKthQR1GoeZD4ZLAqn6MrN3PwWUPWhe8XhANQ8f4kpcJkHf1Qc86qWCgiN",
  "key15": "5KhqsjV6LfDhKYz5nXVRcqeJCBT4WFLjYLXYRe3SAj3CPZ2ubx9X4qgbubrKFWSF2KcX1s4DRfq2Nsozdpbsd3RY",
  "key16": "42wN1PCkwa9UTahGEYofJ5TPNBRbxqcvBQFXZGQWb1YUxzajyo6nc1AUXhheNZ99NRZfEuQM13HNvHHcXf4Vqo8t",
  "key17": "dkgKGPboRTB5FuES48EEKKRF2trhZm3AqjTgotZxWHpFwUC69xBDA7qagBM9BWbQWCGaua4qSveCNghM6bc2nqR",
  "key18": "53MJ4kW9aHiY5ew74yQ9McNSBzxH2J7ns2cWcSMKo4k7uM5B1qkW6RqEQNUwJpqRzuYz3tCFmfUbVspt9e3wPtJd",
  "key19": "5Tm5XUBEa7dgbGuKSkGSMbwwDAnDsgEev9rtPUB8ouRhQRQFXn33QcL3R2t6BvExjgVj7hLrny1CjneqT75GYvVB",
  "key20": "2bbzP6JnjS452BsVJvKVesgV1PJR7Zuqpd4EL79GLic8rAXmdajQac4s9xv1H69bERDfHxNkfLo3RSVWeaqSfgPb",
  "key21": "64ECRQ4sxTUgafTeSmts3FQwP7ua4Na92ZWoSqnbDYuUX5LbECfnom7uMbRkT6Jd9jJFiDzP3j1DjpMctsVXte7t",
  "key22": "3FJd9Yfz4rEqnGuLoQWzf5vvqWVCj9DUd4qgjNNSaJ37UMw1DJXhQxbJ29XFzPAL79sTgKVwnu5kaqSkyA6jefqQ",
  "key23": "4oSSNFEYMPCyouCpkhc7p3Xz1ss7evtvrGGYCe956GaSYUwFj674AJJZs8jR1vG9n5TZWAEeUdT4aij4w1HqtKzh",
  "key24": "2Qn62cXGn5praSWMEU6QJhj7D8TCeF8C6yEjFZuKjiLQYgfHhtA43FBGX8fGKWf8woXqHzAp1zayKptYuKxeZPwB",
  "key25": "Qy4aV5F8gyw3oArYQfQfKsrvD7MMsjWj9iNy8zocVDYqhMP3CeEjYszq2HLEzJP51UpchivCDm2py23RdCzKWFJ",
  "key26": "3QcJicDKRpUEfvDg9HsLRcyWh93UbXFuRRgtmzNWHw7pbLqzBPB18yjNDmMXLCscmrvKVFdnrrzQyaPDLZXFkX3Z",
  "key27": "5wEj63RqWW1gcWpkZkPXot1TNe7e5QBJ1XWDFitubGhizm7z4rTJNFYeb5HB12iUmzjeh6NgwcZndiGRKVNWmbzK"
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
