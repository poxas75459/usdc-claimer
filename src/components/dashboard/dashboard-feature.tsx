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
    "2hjsxzeEEuXwVAp7GuZ663LAiR4h7LUVj4qssZJaRmFbXMirBrWkimm5g96td6HfNPWA6b4yQFYvF597ruizbfjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e4BHHTozKYN7qmsXK7QjXY7YRFwkJmnvhew9uo7Qb8MyihUzjHHgfir1gauuo565R7N1DzZEAU7FkpVBBWpHsNC",
  "key1": "zVFTnkBYfXscBs81c5J7tHSYooKt6BPcEV57ZB9ELgzR2MRTjJJ5eoo3HgC5L8toLbByi19wMjTjnodCQcyaxt4",
  "key2": "5eSsb5KAShC1HTuzXe83WEf8zc33xxxqoeBEUubCYLKKYzi1nkXTbX3cdHmrDPxVJxWmdDG5kFmJQsUEhn5fDqG4",
  "key3": "7i3fytwxQpwcQF4UUReeEpfgG1idRyUhKAmzWikdJJG36Ld1ehp8eDSzMULsgfyxRQvarJp1TYqKjgwjYca8jxw",
  "key4": "5ZcxC1c7kgLwLZfmWLca3tkCxTjUh186BiqqFLQqpZSDb4iZPpSK4wRgTL9GdpXmhhoxZp4VS5hpwsJRSzCocP1x",
  "key5": "37F4xbeXs6ex1e4cVG7pkpyZemCzsnmj4ZL2VQHBSQ5dvPzuBZ68JBeLHFRhGG9p7XQXL6xqq24aznH84SFvGkHm",
  "key6": "3nns79XYHFTVC2xKHEHF4SGpQnfyTsd6jzr2ZzN6cn8EXEqcmwxqqbPd3B75XFCMf7MqmetPttsyrjoarKq4pFp8",
  "key7": "14iCJimyhrzBRnYApvFdDATCTYKmyB9yzHb2kCnKqgA5sUaTucH6wJq5r23AmpjeVHEt6jr6ikZkrXzZ7ghkSQe",
  "key8": "2J7yt7PB2UbpHeUFxG1cqcbVVUvCD1oMFVgDGkKjFhZ6iA4HXbPCAGaknp7vP8rYsWQwRxg1XFpe1DbLFGnLsWGc",
  "key9": "3DaGvUhavduCC4kSX3f3PxnwsDnJNJqGSAYZLbmjvW5dULw96dNeqh3ZX7ZwUsaHvf16fWfZwHsHWBET27vATKfu",
  "key10": "nTdLU7RVHEWQULM68ikPpavJpLi5tTXqJ5Y3xSYCg6pDfnRKaeBB6VAVuCzztqsbJHa1ZXuwvoYqTgqHnkLGo2C",
  "key11": "dPi2viifKXhraN7QJCb8qpUPAPSv7oRbks6f9bn5LLCKGib7FN9WahNQzQxf6gTf9hagVbKrnVXXB6ihJwTLgxr",
  "key12": "4eppqHG9ZSi6AV3xamskoZhgqPyZ7a9AYQ5xGqfnQjxNdG5h6xiy6nLDai2DSTjdtkTHNVGemEUtEq25xWD23ERS",
  "key13": "DuGn3tupUAhsZSbRsn8ZmRmmbVvrjdHw3tjinCbqjxmUdWyomscDcQtLMrvRLPzK2TkTnKLKtCEtX5VEdJQbuSt",
  "key14": "2pxpZ231MZGFQCyfaSzsk3KmDnwEN96cbFkmmiM7yzjtorB9xoN8nTVKiSH9NumPYxjWnbPJFCSaDXKoKxVZudk4",
  "key15": "PX2RPRcZCjpQKLNNzPGZWBY8uZnmEH9sPoULXaeFV5B7tMF6JjHXP2wsmskBXsJjFn2vUYvZL8Mv8uuY9P9s1UV",
  "key16": "3PsiYVCepXKoXnmaH1z7nJKmQiq4jC7gDSfRZP15bQ3RMYomzBsNdoFFp93JsFgMD5XoaJDpAtWCG2GrEvLfANKV",
  "key17": "3sANYX4Fj3eoZ5ymEdsXvyotJTGf9vzVei1NvBAKqNGs9veb1EcJzf4noZVH572B1cXL8GmepYWXXNQoSxR8HZ8y",
  "key18": "3ESHdGAy7jVaV45Uui5tx6Ef4FAzBi4xfqxoqvCzZ9gueUC54k4TjvfdSjfuYYPbyXywfJZN76xWd6v4tSGTnM4G",
  "key19": "4b13AGAR3f2gz7q1NDLhbtLPpNYyyEM3cdFFekikSzbZsLwcRnHXqiqTVKKSTbCzfALCfAu8DdhvFeZr3usYScYv",
  "key20": "3kAFLsK5JMcvDeivWk3i8v7nccpcBFuLhnr63EWqdRJknhUbxVqDXuqLU7fGYyGF28ABUKhgj4R2JnvsAma9ZHq7",
  "key21": "3a57FRAzETsiPwg1DiqeVAes941wUErDzfB5dHAWpQeRUnA9HJZR8NCBJ61duatNCCkxwuo11yxL5gVuK89xQ8Z8",
  "key22": "5M4B4bUA1Z7rq2fSGSYui5J1zvtNzHsSdemJTMt1yra64MYLTDjEAwCyrmRagEGkgjS4tZHvcfCs6v6egVf44ajV",
  "key23": "3yhEUdvKKSWx7wyoH73tJsFZ8DNdnZcg8ehkUUccdqoZt1RR22J5kSMfrE7uVfvUr74RAq7MFCG7XdQTb66KXBKP",
  "key24": "YJjcNtV9J7R9D3caZhFNiFTRN9CvrimSin9DB3uAuDb5PUPRSucXEA91CKpjVADfxoKPLBXsYn259Lo1T8tYyth",
  "key25": "Ri3cxBoML3GGRvGGXZBezUnE4MnqjAk7mWAeBZ5ZgU5CH6bAoJVcd3FWjHfo3MN8yAYVzsFWZqM9SnimVdWjquN",
  "key26": "4yDWBPe1kVqUwCWPGS7xCUZFRfq12GBm2pNbjQcdyKQhP9EUFoEHdfoyDixg9jCjM89QMn1mvkyHUCPFJRvt69Ru",
  "key27": "26qWxusWGqK79Ts2XSniQKShrwjTSLYRcaM6qM1Tu22VBxCmRcBUzkyoqPRuz7yEzYpYxYGUAepnKtiUn78MwQSy",
  "key28": "pxCjWD3NKcJdzTbz5KcRqqAkxiENWa4pUG8fVcy4xDMnm9cExn4pP6HFLXtmSnXHM8tfjzNcSra7NsvxcCYmVaJ",
  "key29": "328fnT5RX8iQMiMGF9KacF7KcrH75PrSeM8KpzYBUmNMuYg4h84yKdrgPwwMdKDtVkaZe8y4RuL9NHDjF2kBY6sL",
  "key30": "rANYXQFiaJhjQ7xve3Ffe1uT4PaBqaRY36Jk9S68isADWyFMezQg8zwqx67FrSSqFs5KX1yVwXEHa7YDeuikNZy",
  "key31": "4GyFLYyYyXdcBNtt5oseHm19zxszUGMuwo8tSvYDBTtZdVwKiadRDDT26y9N6MDLpm1mQA6HNTMqidsyhr7EFsvg",
  "key32": "5yFtst9YRkAZbpFZMnSwHZmk58TiK213Vkkw2fRQX7zP5pcJ6eoPWt6Jtna8AfwRPyXPv2V36g2yfUp5ZU4Vu9yv",
  "key33": "5Kdnyw1Dd4MDmoR11Ncz25x6vvHHcsCUB15nBu5Pi38NNzvqBKEnNXjTRQYohKt6t5Q1NVqm3txTU4buiZKRy9BM"
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
