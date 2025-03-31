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
    "5NnKo9DrqN8RGeuEuuTypae16rHEHkBToQcrSruGhR3ck1nP9LK46uSDiWG3yx4dxm4P1DVqQ47YXkj17RJTUNg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xy8LaqSAX5LWPJ9R7xsSPLuY2n3JNxHb3Nm9qfapqpYzwTuL8wMyZc9UtVwfotiE7mxey7soop55NiyAyPaznML",
  "key1": "54nrAjFbRsoJ4nXoy7YFWZe5ZHBA99Co9VFisfY8MAFrRCHsWroU1YJrkLhvaZs9jVFtut5u6jxMPug4jibuvk9Z",
  "key2": "2Ce9QzD9iM9DRTDnzSLMTa7ooZvE6QYij6xsk6TaQn2tVA9exqdtGnw9d4yzF7USMNUk9UcYNH14af3YWJvXebUm",
  "key3": "5Zwb6QUmyANJtbqa6PfC4xPF2N6DpCpHDXNqe9f6PtggrKEyRWjDHP2AwJdB1y5M1ZWRSVscDi7TjTy1qZ3uVvKH",
  "key4": "pu1Pk1dVh8EmUHoxNzv4EEFzh5nuALgVuJ1T95bwSKT7BHj8gG3ksHz2xXgd7yrd1s6woSmpNtmKmNH1jyU3JHA",
  "key5": "2cngJDqLGfq7JZBMaVBHBnKULotH9Kx8ujHSJWHyKGegpPMnqSz8cGN5wQhbzZyTo5UoMD4LWEHf1SfeYvSVrZd4",
  "key6": "2EVBFFiJh2xxbHz2VnboZXTSa1UMeQ6DfJUuqCrF67DHsFA1mmEbj5dduE4YY6XCQyQD1eJcJxBpE5JMStVUJmDV",
  "key7": "2fuvGB4C4dNF1hgRKS8t8jbLd8mkZz6VKzEE6tQ2gzyQp6VNHrFUEJJ61Tc9xpDvDqXzRkRxg7gbYrrDnzuCruNb",
  "key8": "3e6w3HFA8UuNLS95pzBNsDAhJV9DgH1mxE26ZMHC5BekAZJSf6PB9G7ZybXpzUbmMESrAQWVsd8FK8K4J4qtrecR",
  "key9": "3CVqum1oca7bynb3ot9nUChDSWhW3Vm9ZW3B4GnGqYgD5J93XyX2K7BGRe8ER9oGzURdxpHY7yGbWu2sf5QnEtxb",
  "key10": "2ti6dnakbxf6XewjfHGSpmZxtnDnoRy9zejwmEnkqXuUbEUX1AyUaizBtmkWBdHJjeMDvnfB9moFU9XKfbEmqmDq",
  "key11": "K6Uvs1KWU2CYfffFJTEaT76L8g4Z58TL6USiPGQR7NyXdqLn26qbbND4Qpi4Un16MfE5rSZkFyMm2m2nMKTjJi9",
  "key12": "6Bn5zT5AT5JwjmWpJp8eur1DZvCWS1c6aqtvtY84jn8CYsoLK9jFxp3pPr4Q9xkRv6t81kMihKMjAodib1qdfBk",
  "key13": "4mfQqnJ9iUvjtmdE35UB29VFRXVuKfEqUnEgYpuG5ev6G5esCcWMYSTM6QtB4bFeu21uWucCUSkQMuUVAjdC8dhK",
  "key14": "3zurUdFnBtfL8Wvmr1o1dByANSgwRDh9UrapeA9ZKPx1WhrG8vcQMnEfSHJo6ErokF45reHvkG9LFxVeL1WEFcxo",
  "key15": "51Egfy56u1D8urUXd36vyAXvLLjR5HmR5beNPSZEWwE9wdXCieWAMm4gpgU56oiwDJjgDsqUYo5Bc7s2NkTCxnW3",
  "key16": "CtMSiVvBdQYdcvKVxWfGbhBka2HHzWTMnL4fAH6EACXRWG95JNRWd2QQBTpRvGsArwKssvjNwgn4zW9AUjSz48Q",
  "key17": "2wih6KUhjGLMEAeGYRNkjj96MASYEZTVY4GE9x8NaV6xMjvz3VWcY6cTQE43D5EMwqgeSqn9QFm8mDwp6HzSf82y",
  "key18": "49YobFLRcQZQJTeWcDTdydaHnb7DFFbxrKtkJ1KaYLDUCCzSBDT78K9poQuy3L9nhcpeM1GmQJUYGZ9jJ9UNAtk6",
  "key19": "3TYiPxtNyiDGpJ2YwwF3yydY5Uv3foUVCsbHaCJU2ZpvsD8kZdS5wvH2uQQ3WW2kH5TNBsykhMwnGecRd5jNM4Gz",
  "key20": "286GoKijZ5QD8h4oD8ANLVBwtxDLp446zXLm3RXJ34vH86GRjtrdgYxURnbFFQN7TJgshx3E8GGEm45zk29Fn8Fk",
  "key21": "21JKFQL1qhKUWTQKny7ZYiFN6mjDDhcMZEhtasJoSjjTKSCac2LHNPbZkzMZuar97xgnnYgJU9dcBZo9zGRbvhyq",
  "key22": "2yEFX2fDpuCz4LbA82c3xkQeej38prQwaqsexQxhH7tS2a2XyBYfky6D6yVevx4MBRhXPXkFP51KNxjZFaFHiy3i",
  "key23": "2sFyA7X7wLxwVZr1uaErLcwcRBYXr1UW11dYHZdt6NzHscPH62J6NYmxWQpwFqFG5NXTkpYJpS5nEyhtVhUzr3vF",
  "key24": "283kSKEPDvctSqa886tCAqSVteXLurupArB6RdJwkorsbPfmdMjWnCfziktPbmdJXYBGd5xJEpyt9qDMdVHtvmhS",
  "key25": "2TSorTwrH1ihUPhAmnmbNHyednPsfGKbBcWTUpGNcMZCstJEvzqc8XgVWuDJtkuoDmFXfyT758rVMgZXfj29GSsq",
  "key26": "42FKJHeMHwsGRWer8v8rRAJVot1PgZ1GeEQAqbFAqvq7G5azU23tc77xq6ZqjyGZoWKRu5MbzPxNLc6NyxgcqzsP",
  "key27": "UuzErWbZ5xVZe6HSDQwYuKG1wNLw2dFmZj4AEVMbWnKNYPxDzqvp44N1LtxcRjsAEZg2STnqGm242X2eJXasWXi",
  "key28": "4iXka9oW7BiLNvFRakXikTfYhTx6mc9Ynwar774CKnDocYTqQMrhFKqshtwmCbuwCSgQwYXvogssSS3J5cEWL7uP",
  "key29": "2wmdsTrCGm71iHLCAgvw9YvuR18EfJokyM8kaEz6vyUNSQf8KXMA7ppANfR7m8i6hmyV9Br4SwTgXbMHEp39GBLK",
  "key30": "53wtREw1Rzit8Umpgq2RmKtrPgwwbGTAcEGXczTDKYTP9GgNw7QkF5aVKMiJKDpBB7cg6dXMNxLe2wKYJSsRkZmN",
  "key31": "CB45TyrpU5A5bCsK5Ya8z2mLaGPCd5gpBNYpxgHc4TxBQhV85C34xpCxkw4Yq1ELDLk5cyaM7QhzZkgodhjNmCv",
  "key32": "3Uet67JusxdByACPPorVhTar92TteMBHPKGG5X1uynLuAc1hmQWeqNEft2GePytCp8VFcabKVWm6tSR5L1JGQApm",
  "key33": "3q7E4qeJoLBEkkq2Kk8wox6Qg4Pd14JRgCLiA4EU6nzDtWn4DsRtuvBafX4sZxRVGnAxEBVXL8fDLqu1KgAXBtjq",
  "key34": "3JL8eWJ63TifntDzLmaRPez1dinvceMEpUQMAG4kUxttHYeToEVpPRQZ4dxec7Y2FmnsXzpPgbUcna86qQ2ncQuA",
  "key35": "2UQyYq8porwgTAHLxZmtAy2HwcNuco95JFb432LX1k9hBC5PAJJQ7gTCjMS2apgLPBSHUiFbXKayabbZ5KGD7uwu",
  "key36": "4n1doMJhrnXoCQT2SMfjjc3bB71dVQXqGdfRF6K78zJH5F8RaBHfnZQ5SUzMPFYowjwvx9mPzkdYF7K84khyuhby",
  "key37": "3kEtu4tmBNiQ9A2JLkvFnB2ju6r7SmSMNWML54Hz4CyDiWrrS3XyDihbMqNTMEC44XvVHN76CW97fVwtWjpHaJ39",
  "key38": "2jxYaXFWRm2k5SRgzhS7DuVcc3Kfi6RE4c9898yAGidU8r7k9LrLCnzsZHNnjgjxWFZsLRHTWwsKUFg2pAKk1cU4",
  "key39": "4mPiBJa6SXPzCXoXgvxGPX8UYVw6N9sVz5BKm4pRAnFa9jSmXoo93zaGeT8kiAfgwXPzWe7Pk58iVXcJaPGo3d7b"
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
