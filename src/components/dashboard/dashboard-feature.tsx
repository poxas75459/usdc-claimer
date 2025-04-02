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
    "36z4rSvqz66TtJ2E7ScEa1Q8BWboe6Y7URTGTS9LcF2MTcB5bS24PKhCPK6y43Rcd9jerZs9bNwUoiPgHT7TMAhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R6N5PG5WhQqEFXYiYekGbVRvpcNAZVLXyE6KGPiCxc6BZVBLEsA1CFDd8bVuYqiwcyF4LwbNvNvksu97Nw8FoKR",
  "key1": "4gfFZFLQ8b6koyu69hLE6dF6KmvArBqDRsGupRRRxSWR4seY1FbyAPXBxZkkakkME3AAe7gPC7Fc6AbwwpvsuGmc",
  "key2": "3uskXdSijpAACv3yYaxQKzDZzmtxQWHxKUMyBMomuA15iq27eVimRu3Tp2jcCiGMQhEaAyeAfi9K4RGPkZ7nHggj",
  "key3": "3LzWejyaK5gDh1eLwGeEAahv95Xp18dQgYCUNVmM7rm1CSy3Pp4HXtTM5tccZc9rPpoaVxDcqNYoADvXPYWtyuYK",
  "key4": "4eu5g1mfD3eCaxjJsvP1uaMdLQT8Nauna8Szamg49DQraafJcS3RCJYchGYAAHXxumM9HZJjJ3GqCTSnnD8oKhAh",
  "key5": "4pb22XHKtYRMF8e91aN4d7oWSLtiFGTafSSEDsbvezboFgQ2wfPePUTkPZdRLtxQZCcqEnvht7rS1G4W8tx49w2E",
  "key6": "4cG5tZaphj5r55vTS3AZURt2iXehdifdFn7d259PjontUQV6Dr4mdyd46FEygjc1XzQiGyxQaEhf2zEXk9CGdYvF",
  "key7": "5riPKtU9UZT98xcpgDatkA2Z7e4aK6zLMw8w915GptTsNeiYt4GAk3QQDJbxjNMNifGuqBAh8JggeUru58f99bnm",
  "key8": "2piRTwhYXz5pwvingeKAh1HVWnpbondyKQtufKjioAH2gY83u8sV5ygTYX1Vgr4tQgJGjXumXArF9V9tq6apfgbP",
  "key9": "2R75BXqB39mHQYiTj6iLUoQCsEvSXPHRLJ4rz9Th9EVRHU4CTWispAsMpKt9VHQDXwo5xuGGgmZBFN1c3TGmPyi",
  "key10": "4UqtNcgM7BwNeZSmgFiLf6qMppUUfNLXJxXVecvC67tskaBiA734NfWqzfam33VsPj59r9h2sac4ACYM2TgMsAEb",
  "key11": "hetjLYcx5rP4pEaf1y2TCMDAKapPRdgA5aXXHomDsGHSb3mrxwCuL3JJ2U4FUDjHTYiP9jcaaBnQhUZjpmSBNC3",
  "key12": "4v8dW6VPWTBLUBkp8ADufCnuE26gPojn6kER6CjmHmoeXG3d9cADiwXBFLKv6awKRci7n1oHcpL3aNurVqHvbwXX",
  "key13": "kFxmn1op89kK6FaZQH6kn8VA4e7zo8egbXHT77xgSn44jXpjFhhwKSJ8mE9ndbqfdup7H1qhis68d4Pgh9uaaKK",
  "key14": "5DPvJ34qJRb3Btaj65txJVGEtTKTyYJLZ4ec1mKLWpUX7CA1ZddBCm9uentZwkf7GbUqJdS3NboyQGzkyNrDnpoR",
  "key15": "4yE9EDWAoVmbjYVqdU33vRcSVwq3rPr8v3hx8DcYWG5XCRZrKbgaqrg33EKNTiyeoiMVYmtcw9vvKpk14Yk6TR7r",
  "key16": "2mDDimCxhN3UtrTZVyiggsx1bJLQaCrPVqE5HB4DkaQaMMyXnWKenFoAbw9JFyLsY3AdXojWeBfcdn1Md3LbR58f",
  "key17": "4p68mJi7LUFaH4cZfjLfXq6bwXm78GpHXryF8s27D6SNA1v1QjRWpLqBndAtMTpkJbdZWa9quygzpkQmhqqdnFDT",
  "key18": "4Zxq6mKFz7y21WQFhr4VCTFxRbytpg4D3Tm7tu66bKESZr6VB77zQWkvxjt2BFGv8rbQfDMNdT8FnECpA58TXM5n",
  "key19": "H4hhnp7YiBr2a8FfUR7P5xyAe69XpP1t1NJ1TPvbgNPWwtazZXzYAjhjCxqXYGUmkULUiNZrXBD1ToHxPXP6b2r",
  "key20": "66VZ8zABwCCY51Vge8gAG2nNpGMSdUbjtZSdyutdaJRvbTFes5NoJQxKzs2eFGziLi4mVWySYjVDY48ZJE9ytty3",
  "key21": "D8TkufZstnVCkDwQnphwH3ferk9GRPmAxeXukqPGWtwkMVLzJfde4LThK32Gm4yaUNsQzNKrVtfzTf7KDgLRwPN",
  "key22": "53GSAfPXrrYAE1Cn4vC5gFJNSHdopZJRykRXAXRJQVXnbswuVny9LKyitppBKFQi4PRcdWg4fETJCLtPZucFWwMX",
  "key23": "5DFcxPkBEvEJB2EgFc37hVvtq2p5XkWfGsgsbFbok4B8sSzJxYKDyjPLPJ9gNp6iTzcy9f5Zd3Dczcb55W8RHGFo",
  "key24": "4FFmraEntQ6SjrUeC5AzpPDrpaetx4NUjffvzRLYYZokThQdUdvSVABwhBsUK8hz6DFhhWstahQi762KEcBx5fr",
  "key25": "2oj3aZJyo932EZvb3g4L7MDDPUPgfEWYiw1FroPTQ84RnErC8yYeZm1Ls9K47uiXLhR8ttaXCZzVNJdacS5Xvh4V",
  "key26": "2xP7ecbzc4DcKCzgeNq7FjLU6KRD5hx8eYmTajqCaUUQnsWWoEkM1iaeDHBHvu4PpS67BYMdWLDFwkXpYpvBP462",
  "key27": "2rWYUB5ZQ6YGuNftYDUeN5CQ1YRAvLSU7LgGgrKDLDC1FPgoHhFpmkXP3gdbFKwWevSvdGm8t98pvBeQ4uwijpXf",
  "key28": "5VjkptxB6sgR1c2u2BQ4C9fip63q86BLPgJs1xL9tVQY3hNRKM5qbsZ5nSAmX3aAEnqsUCYJc7aJR5JTtX14stAE",
  "key29": "38aZrJVyrGkwKrjboZTBy66WPEBkJbJsHLjkKRQSiGResbrKyW8MwhdbV776qjVqcmH5tBnB15askMc2wmTS1bCq",
  "key30": "4jA9bF1Yw2V5Y7hEsqwFk1xPjpeihai26Ud97CqeLeZU68PBEXr9uNndsyKA3XQ55hwx7MbptWJu8xPoz1cHfReo",
  "key31": "2mbKvT9yiUhiChYsMDjgXVQKdMZRbwVLp71NfHxQC5c6gM4F6X3A6oaAknEZNmMW3TCnCqinedYa5hX6GuQRDXFj",
  "key32": "2Aw9nvpKdpJkjfMQE17sswRuSzPsTUArXVzfaAoqYPv2SihYV2uVzQL18rXncvxb5zBnhsEyBjoU4VbSH9wCD6Ye",
  "key33": "3swGjZjNzGKsE3t1bywEu4M1QVosy1bu7gQZjpMjygkbpuK74so61CxeZ52ZYLdtEAJr6uu2rvGFAqmqYLJhXGk8",
  "key34": "5uD6uvhEfKZpgRf5kA4BHMiiqzxAR1yzgywoc6X3V81m8UYSUddGSNre8RBhxind6Guk3EfHkNC5KuZZubagiC5W",
  "key35": "4AQYvpvUVy3mpHGmv6gW77mXwhf6A93wpeWh7nQtJdhMx42fNEuHvz7eiRvAqVybLRbi6H3PLwRCKzfyYdGZMe3T",
  "key36": "4V59rRpcC5uqwXF37X9EPVcCTS7G3f3h8zGbsuaYyd8S6HmWGCts8mZrvepTc6VAYirStHxMyJpZ2b8GB77Die5V",
  "key37": "4sQsLWe1ze4H7jy3TyUJFPviG7XkgUMzhsC75W6L7Ubs8jnknLYcGH62JGRb8cDtk1hV7S4SNnqVZZiJH78zauxz",
  "key38": "A4noPHccWoBW1VXDGC3hBZ7mJAWKpnyPDfoG2Q7mEvVuJfDCRx9hDzSPBfZgiY5NNbavUqDGyxka75im5335B5h",
  "key39": "4F51TEXiiVtz4Udd8omfHeute5R6oiXLeLyYJF8jaGNfv869HNn1udZxG1rN983rbeUAtkiZJWGjGC7j7N6hLdDp",
  "key40": "2tcr1hx3aSi34y9cg4hAn8WMjauEvW2FPTmGMG5DRFgnhk13qDXMKZu2kPqfuNwFprjUX5y2dpZC9PtzQKXYmX2y",
  "key41": "5Lf889B9LSwByUi1bmy87wLYSqzjfBDL7aD3C5NyjrJNLuQy1FVebU3kCuDoNp2SLWhJYvqk79ERh7EUk5SEPbT3"
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
