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
    "2eiptT9sgfqbXapBCBx54oRF8gmq5QUmGBB6HKETuzUb7X9KmP9fgYLxZH5YurcA6HY8yz77Yap287MxHyyProDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L3FbaytYKcaGPokLm2fDYR5NCZEKxc21hASG68UvrX7hh2KoqG4w6N29ACX87oYFyBW8eUu1HS4oFmJA1N7eyB1",
  "key1": "4fetX3amSSpJubmEuuNj5uqVNJebKfZTzzcKpYpM2vJMngQ2DM8qZZLQai6Bj9LaJdQfPsThVJnCPsaEERqGjKjJ",
  "key2": "5C3E6LAPnc8qWUq6bv1F6oaBXrx7vKn1kVbTtraoeUnTzik3wCqV5pxePPzUasSoNRntxNpUbgEBGgdwBmo3ZkB4",
  "key3": "57o4v5tdk5CFuvHEbw2RpErSViLKaULuQp7xRPbyHQntY95eWveDHTrm1c45RNYVxPePWaD6oJQVUbmyLmJhkWMu",
  "key4": "4FdYCZCtjJtKwQZZ2PxxVNKwwRDr9CdkVVYeMUk549XBte616ysLXQ9rrJ7TPpf7LMhWon7D1SY8i6XaCR1Z8PBP",
  "key5": "4RnxHhzvVJUrrg9C1zq8715M56JmWTLdWgo1kZR1B3CJGsC1FspSpirRQAwafUGFwLevseMdmWhcV3aWeoPkCDUm",
  "key6": "3BWfMnhR97vAcdS78ntCoMmtvFky1hC21VMvMkJUu3oMFEoWnA8S961GdL84gY6fun3ML7nnjfG2hDHJdQ8AbXoS",
  "key7": "2cGR8sko8WePLVLwaJS3q7w7rgdKPxF9R4GaTYxKpAyerdmxkfHaJzjU23T9uH7ZcJ5GUWoW4sZn2q3MTg6Daz9V",
  "key8": "5oeo1eSzFjDcvHPAQyrHAvz2jYcbSwzykmNcEtFHBChu21VLhFg5vQbGwhbZy6aiVQB5GenAXL1Y2rMX84t9sF1e",
  "key9": "2YqQaSSET3KeDrTp7NWeGfEPS6hJBYHeUV5gjVKm3e9RBzyWYkkuwjsK9ez6YPq8UGRsoHCqmJgPKu5EuwmXstc3",
  "key10": "67DA9MM5B18kQGeyF1REWtuhHDRotJUZ5DSLZtWNZHj2y12peocWA4aK6JXn4HqrZ8qazxmnEdQM3WGBEjPYuEhx",
  "key11": "xRYUNG9U6qGBE6EQ426ibFYmrE6kSGyTZze8xGYF1AGgA1HFztpFdrRFf5S2jkQX24HpntURt7wXKUTTfKtFG9E",
  "key12": "4CTxeVmeuk4vdMXdZjj29eLqbbKxjFpDqLUfWuuympzJti6Cf64kbXKbWDLcYJtHCk1VKdumwQ2UFxSQa6QaLqQS",
  "key13": "2bsrzXLRDDNLXQuNWzB6GXHWv4Xr5uC3UGX3u2kwwBiXSRyUs39vWbLx1pnEiDkW1Euhfnw6YVYfme1kubn3ojk",
  "key14": "2Ud3VH4BPMoF4m67Q1Gqn9KVxXANmf7GGyUVqMnNbC5JJVBVZACxoEF2ef7oBa5Z5Dk29QVofvjGvN9Q8dngzfKA",
  "key15": "2EHCJhoevLtm3ZpbnjM1HqugAfYBf9XSfWHaxiCrodKjTEAAdjkyF3ovvqB8fvBP8WpNDPrkxBKvRMw62nY6RJy9",
  "key16": "5TaL16E43Gu4Uyz6ZU9f4PXD2ENPn6ssJuNamf9TiyyytNRPm3nPGX47mee6FWPccTW9LbfeJWEV7LxQdVd4jeQG",
  "key17": "4ztbG5JXq6xvqk33BCZwqDcykZaq2yQpXEtxN6hiMrEuqisZ4FSaSTw5G3s9rokWzjacdoYhg1obvXsGqLkWdw6A",
  "key18": "5icQ192oPwmRybVKKhpJFm8pwNRXZePFNxLCpzHMoFb8Yn3GbGREbc3rozqibeVaogJRmoUjR7UiNeKom7GH5iPM",
  "key19": "5ZbuprBwF8xaCTQaAUusnj3sA3k64GP8Gu2amqD61XTDrGLg5w6zxXLBtw9HF5ZJRkF1zbnutbiL7qvmmQK8MEiw",
  "key20": "5oVgmbJQ4rmqxaXNMjZny8vAHNDYRQdQxY9N9aFLkWKgwya7HLd7p2MNWd3jm3sjX6pAL4ekXr7SyGLeSMBnxetK",
  "key21": "bAMY11T5opA5UuhBndRLGz449zgjgHrThy3ErHFLRtwnfBMFg2NNH6tWiwv4mnhzGt513wEL53qNbAfpeGJ84Zn",
  "key22": "5V4ahKm3A6FGR7qYf4hEzoaE2F4woyhYRtfWXXiPJfKhmd3mEj57PxqFTHfMmVFAbe2yAr2zApX6X6NEcyzMkMUA",
  "key23": "2btAppiHQpJG6SZH7z1VdFJwWUN5wpuWcg4wCyGAPNDFUxDmae94j9ZcF3JDKzX31NE2bnxKv16e9wRKJAhZ6RmC",
  "key24": "26deJLz3FS1pX56HPEAKBmkhqxX8DhF4br8hT4C9o11PCwn4L82cYjFEc1pPLyb5LZmKtrAwZgc2n1CRB7XukyAy",
  "key25": "2ox8DRn6qyS6ijDrkzYx9PtN7ar7fSYwF87oLZBwug7EY7CV5ngwJkUN7YbWznTkPyayw7kQLNDUug74aypecnzp",
  "key26": "4KX2pr2yg8xArQPBQg2mRGZwQSQLHxkcM9HddduxezZbiGPp3kmo6LwKDSMyGrakSdcVc7A67ie549npAdeQC7eB",
  "key27": "3LnxxtJLgjawktHbVpQxpTf8gpPoK9fswJQGerHrtuBGgQmvmtWe3xCwhDVRi4hPJQ9rKLVaR6WSuCYePS1915t4",
  "key28": "36jLNX9eZDtmmdC3Xgbvmta1c26V9fjysXz1V2YU9Tf7oqz6nhVoh1rp37rtUHWoEbhU41yMnHmaqDFJ7wy7mKD9"
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
