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
    "4KgUCN3HUXjzmVr7mrzLzg5tx4pJ1d29WZjSPED5sR3ucygs6qqc8H7p9yV84qLoYqcP7fe6QSk2UP2MBSbS2GDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36gSoHjLxmfNtgXYrop1arFk3LZbxXPEXiJij7HX67ZvEpPDt1otyQdrmcGgbYfKaBrN9St6C3qwyeaHpfuBtENS",
  "key1": "64w6Jy6jZJcRaC3S9N7K7dVBQ9sigTuEDK5EHF8abaQfmiwjHXHaFxeycg3BPxLYVi5eA6c9y8wiwjBzHgXZY7B6",
  "key2": "3wh9HKjXqoBoSWWsVY9qS9yT4pLA1MKwE6QFnVHg5zdpsesaKQaCFZdVvBF9ojgsHGY3d8nDgEEoh6grWVKfhDuX",
  "key3": "5LX3TSnjkDn3TTVR249k6LHX4DLvewdS7FgWeTLYvtKFJKrjLUumMe1rUJfbUNxS6GxtRnmaBfX4wPQfZWR2HDyS",
  "key4": "37iFRDMSmKctcSBfJAD5VibMEY8251tn3M5KogP6kRUhtTTvxHgx6zCVR7XuyEz2PXun6PCe3MTmptpJNjJKixcx",
  "key5": "4s7MJDM5N7iGCnMT1b4g5wBi77bMEBD96unDfMFt8irEXPLFf9z84tcNmXWXdgKearGgwjzsjSeJYJfF3T1TnNEJ",
  "key6": "1S9WgYgnozZdzCysMW5jZw3NLgtw4BvEB7C9uKXWNjfQaj5SUd1Z27LyzVzSSWSgUkQwmVVxE193SA4iNrLuxKx",
  "key7": "2wRRHobHnej4xrfAE86AEEnDwz4mpoFgsMUgUbGZdEYcB8xd9zBnfQiuiVRB6S6cE8NHMixNk1ECZBeumgaKXw6E",
  "key8": "a868qiiayT39SaUAQqU6Dj9ATbSvyW4y9NVeWCZFLLGjaSsgfH6Ef4GbMZqt4Rnb91aAT2LhiWLaPpFTXDCWUmu",
  "key9": "2kVRFSUnDZxQkfXdajRTbP3XDLGkxTAz3WhiC7RLuQ7FHqrVmEF9eH5XicK5eYwj8Hf7EbyNkeAbDYp4ets2vFZF",
  "key10": "enEJPHSPvcpVjzhnGdDhx7XCit5RCoaKVot1ti7b4VHY8yfQyNpSQty9Hi41ej6wbS6GAFJ6U4wiF2gWKHp57s6",
  "key11": "3GDAtpX8eioBocohTCxKpfETyCqfddHV6AAhi4sXWypW8GTMwNYU3gprsf63EZw8rkFn5UahG7pgHqFXCyCLB1yP",
  "key12": "2pKGwrDtgKn5kf5YdBh5CizT4eRckjzDdqxfbwbe8zbZWyhuN8JELCVvm37vyzya3GgDG56Fo9Yo9E2zvw9egE8c",
  "key13": "JTgGFhvDMm66MjHgWxZZmoFQrDaVaJ2PiPGfj2VjoKBZAxdM1QbfVUaxEXtzbsrGFfFNNaUNWRPKZh9g2RVw82R",
  "key14": "3vmy2b8UEnBrwZdTyTLmWSKNTchqszUZTWsFAtuhbhRbYs382dHSp4t2zwyqft72mBQE9yYS2JvSrB9ye1aqmxXb",
  "key15": "3VCqFE1NpjNSEhP44DpvYmk3LwSaYnfmZLVn5Z2VgMC1Hq1fEykASQSxZ9tSa7Yu9dKo4iCj2FaWDCW6qC27D94D",
  "key16": "5rpAhLfDZw2Q7HDYHAmok4CEfkNAJdjvixarcNHbsZcxiZNyA5z3vLygkLXvSree9v71WuHu4ib3LCCpd95pBFR6",
  "key17": "5xcFdTMW5qprUZe7BHjDbHJdAV5qBegaFQc4vA7HMNY5N6WeDN5uQGM7spyMqH253KFtqRtGbnxHknVAaMD2jJ1m",
  "key18": "4wPKVjRddYwxMPwKJhY8AdaKWZBAfAHoi9rXBkPmP22P9b8KXfN9aT5PWRc4WpJay1ERaiZP6GmTDmz6dt8MMntu",
  "key19": "4vsho7mRE6bXKGtUMT137vGy9GfWe3XH7fgB3muy1raNX1mcaAFQk7pzNx6B25AX3i16a1QYjyozWbqDKAbEsGbW",
  "key20": "3a4aL9dqjeJxLDMeCiWN3pE1mAiKcfAcNRET2HKjzQXeJcdz8jhnM9ov4fxMxodUwxp7ka6qraq3NJi1mnsW9kwx",
  "key21": "22i4brqJJSsTMLv7wNEop9Pf5DDey3XdQwDjdkj9aJELALn5Hvore3Qqk3iWrzjKTEqUrubUAKQWhTERRqYzcyWL",
  "key22": "3ZZpHzZgrQiMvM6DE46ucyoNCXbQWq2KhQ83H8XhN48VbEzhHGXRZMeRL19ER3sMtMziGekdU1JecafCFqmb8xf7",
  "key23": "2FpMUuXfoNVLHH7x5FXcG37aegK3XvLpCLgAehACJrw36CrSJQn2LjZNABmkfXit9XetjyyTH9gyfQ2pTAMj1s1Q",
  "key24": "5tZft5nu5Ax1SMvnSrWJvAaeCsDLp9RseVyYdWzDFtdAuBMQPK9bwiRDmWkdd7qfAQspYuhzLfup5z4Cskq6YjLj",
  "key25": "3ioBh1dirDF4yvB3E1ZCy54cbhf1ZKj4J6UxioKjzqWywFH5pUWUJR2n2X8omC6yaqdNC11uAgU5HquqUDij514K",
  "key26": "3KPv8KLN45bhbHJFACgyNXDKCema5t5P6DFYdBUxcguStjzHPzTiJ3vGaqB9WkEB9mP48QhsUu7Qo2Ev7KqQPAax",
  "key27": "2kxuB7dAWPNxQsndRKzfJr6bjuCoFLafhc1nJgtF4FNLVY7MrZjfagbF8U4QR35qcSZ55LxgxALSdVfT8aYtfyv5",
  "key28": "2xc2ZV7znSnfrpS7BAxgnMu9AHVa65RtoeviJtU5YSgLqs5LP4rqQ8kh6dCqNHASJrMv1ge6egiYGypaNrZ1Fu7o"
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
