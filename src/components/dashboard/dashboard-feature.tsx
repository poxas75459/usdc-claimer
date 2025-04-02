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
    "51xuGxLgpN12sz2WyMh548C5WgG6BkurA79pr9PNT6qbDBnm53xghYx6yuLQPJSgA1vVCVAAbpjj5VAU6aAQVki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D8rN1MoWmUN6NPwsAVwidjzVvVZzKBg6w5naoGobKkvokeCmA15B3P5ysKPTYx55VemkT5raSyMvRANxFGuUYW5",
  "key1": "5fTNuwisoRTDWCH9ktdnzaegDmuFkbNfmRGBDFf3gVnWwqZsw6vmJzwaGTEYHWMabed3Aigib4Gzdk2TrJ41HA4d",
  "key2": "477G1r8DKTvjgD6cYpWXpngTtUeemDYqhe8pWAVwaeXg3ZPAuLqEAEq1yyMuyTLEi4rAw29EGvDXS6mfqM1HyWK7",
  "key3": "BAFWsj36gq7uuwY118x8tD9wAnHm2abgGC3UR8TXxXdxRkjsdHn5R2qW9KrtjHjS1vPhYuuEfF6n2R15g9vx3pL",
  "key4": "3wHANuKVVAksVJNutk6E95yfRwuZ1KGncyRcR4VSWRr8S6ZHep6sRKLC64GSNkYLMMQkBUjfWTpiGFuUzWK6uuCe",
  "key5": "4Nn7PpDjrDNxhSfzAjp5JoRknDLjjzpDLAm2pgb5k6VVwytnqTVraktqhVJESS6REmgmGZt6K2Lgee4w9NK4sqhr",
  "key6": "3A5YTLj1cVtoADZS5w53qdUnajLMuma6qfwNSf38Fo3NkY4oxd6PpfMYKrrtNq7Z5uWnCRR8WQKvsQ2Gi74SRpkP",
  "key7": "565wm3EVdyt4UKKtprZfWfJu7tSYL89o7ieT4rPsU1mo84V2yDm67A2pim8Vmu1u5S4LiUo1o7H3YUhabLzW5AbS",
  "key8": "2WMuBJ1u9uYe5igWTwKBYos6Z8Yr5CSUm58DP4ca4WLsRnx85gAxsvLXkcRUESMgLdsXrLMd65tbzEbeBkzc9y8x",
  "key9": "3FFBpj47MpqApDd93TYB6qbJWzcLXtaYkBEEWHVu9oxmDCxpgkxSEsyXrHT3cL1D1QL6ZCnTEJXsRvFoVoZKxwHu",
  "key10": "5pwgZGf5C3fQhuVoXdRBW5KWdYNCtrwsVSFyDukJHPiGt1pxzDi1VfneXATXVvPxF4NSNJgdQr2KzQg4Ah25GMkR",
  "key11": "43yWyt1Cf9aXbuaVUBACBJXMYrHmW75hLtn93J7gJAVRouw9oUKp8zcj3yQFxXDXoAzHWe9qvmcWuSkbnvRPLBHa",
  "key12": "4fE2R8f4k2anFjPGDCvhvctbLqvUmzcpbvkBWECMSG9Q1GhEcZLeG24Jd7ec6vfvSG9roZRJ6j9hG9bv3LKfXYmY",
  "key13": "2CPAJouj7ftvqXTmqz94nfYJSp3BPAjpw8prS66BM8RyP5eM2SLwZEhbD9krcKGzdYW29Dgpp2khz4otsKrxM8Yz",
  "key14": "4yjDi94XQiCKkHf4ERCF53zE7qsEiTojpopf3H7AVyvkfPYPqhyAZYabM898jgbcP1VAZ6igpgYjxqHmjVKW7BhV",
  "key15": "4v3cmhpFkmwCayigY6bSDhZGALzgEx4YuKyez8x2MxKgbRVf5qoxqVnEE31eJ3gRhPHyKHptQAm9fREBzcWkoAk",
  "key16": "4wVvVs1KUx1JBpN86awbF1A4KBpnSKUBB2yGgfsaGJeur4JfcwQmh4CCGv4EWaTRTXEjPLfr8RmfvEXCiUTFwSQ5",
  "key17": "4U8pjgHx4hF6x4coDZ5iGmptkNdEquXqnjKZAuF7sXbz3AbrBNrSYZX9NfUeJwevauYfL1gLujR6pEV3hFzyj6Ba",
  "key18": "5iudE3x3RvczrNdKcZeF3jPTBwG7MsYC9GhWJGPgHxbuvmYsrgXX85CKm6mqSrz3MAMUsTRYuqqnpu2zveyzSqoM",
  "key19": "GzFQ6tEhaVetWbi5PM1uf64ZuF6fS8NFE7zoRSR4Egbn44NTKYnDEJn8Fh3SqX9kdT6HyMu9mVJyxDa65Po4tDG",
  "key20": "2438SQeo1Q5VeJwJr4h5dtTMkPK9wYCPwcHd4MoB3sVXvPiquDLVVUcoPgC3pUDk8fp9iUZcQGgq43RxJnBcoRw9",
  "key21": "4oQaWxniWoxU2A1NWhmAkrYAVnhquwnMBD3aTxR8Wftcqq9hm5ziRWf1szanQaQvqoeBpmfcUWNdxo4j7aZvUgKY",
  "key22": "3kqKJAdrazNjQ6tWkop23S1czMjWUTpoypYen2KjCHQgW2XmEnRbP46Yz7QodnWML9jZJ9PhVX1yDLBXCeR6Esrs",
  "key23": "2zKtsyxeF72p4r7kKBQiE9y5TkekNCexG9R8xitDtRKmwHkoSJ3yiZeXvFH7NmnzfRTfZG6etZc8zCrGeCVvLmvo",
  "key24": "RQCT48vRqgKYf7dk5XpVhvArxeVgN9hkmp4pbakmWKBaQTScypzVTqM8ECwTYCqSirbEcNioNKMFXfeqj5P8ua2"
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
