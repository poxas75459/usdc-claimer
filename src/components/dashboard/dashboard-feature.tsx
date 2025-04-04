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
    "48Ec6oJeq3PUeyT1zbfmf2TjGPuji1YCDMWPSDcvj87he65rTVBr8Vj4HDYYroayS6s5cTRyf5eQav1hcXzypmm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Lhmp5r7wUYMF4nLoPo89eDsRmqnx8vkSN1Uqci81UPWjjMtUTRTTXtQzV3DBJp3AwrVxitPH3MxfDDujGFXzSM",
  "key1": "4LRummhmTgCULJCNFbosfKuyE55v6f1UFjEbcUiu2BNWzGQ9nVWQ7dMYRVCf8N2SymGhYR5yGFciMxH1xJDax3jY",
  "key2": "3UBSU5qCWXtAyfbjjrTu7Zt2P6L7Dnc6aNoPTtBjVMRWqxxwNF2jbQRptwTtnqhYK6idd6HACpM8hyj4kaphbwDi",
  "key3": "5qyiz7dwvKmT9qhtvxbVV7oqdxGqy7uGg5boS9ezgQ9BzG42tsQkUY1uu4qEbSJDjyjsUpG2V5qYBYcDS44zRHmR",
  "key4": "52a9AqqXzmL3Km4eDX4mPEpPBxK4PFZrVDg5B4T5b4WKofgvpzmgVcyQSSHL32F7RhMHZUwv3kF1rn4CP1BjFcEN",
  "key5": "34WRQqjrA4GgNLo8HoWguehbW4qLD4HUa3KzLy3PBXpZscwXWufsVsXQu7gnTGg8Ds4qXTRBkE4RUzzcS8s12SQU",
  "key6": "5WTAfTFymLoTNx192BvLpjLeztmfp3mckiEuSLogaZSJJstWbmHUaHJgECM2zJ8wRNnnHuWWbjAxKG6WDveZa9XM",
  "key7": "3UB2sDbLqx3ofozxnfA4SDfFRemYuQK5Bxs89NBWF5drZ5WvwQEnE33uAcVqsRMyDBweujz86BYWSZtwcVG7QADH",
  "key8": "5uDEY3NqjUgY7X8KCc3aFFJy4VnnqQJMSejfFzonbqkfnx5emkbsoCmYZAtsEGjn3SFLuQ4VFkAqfwngG2yyBrPa",
  "key9": "QKoeqa6s7o81sKN361GhMbNbYfaMJ29KvQUYzvrXnx6Xmf8U2ewJ8ReisrW2c6yBi76WpmFThYHVYG4AhvAEbFP",
  "key10": "UBz1VvT3oe9TCB4dyKctooWRXmZJQKDTxKvb7Gh7PxKM8vwKGy3VbwUam31ztZMVKvrEgZdDzQqyYhqBmwQdUro",
  "key11": "3jP7iNHhsj6o4wgSfZDPDdAZe7HJRt7bckkvvWZnzXtgfUHcXQyKUZWEaJHtyX4o4TM3HXDSMysUAWUZwxjDViTo",
  "key12": "5Q2ZZbTC5Yd2kW6detoo8mXeU87MWxnrN23Y4Lvoxc3HSvufmcErTK9YqpmrV7CRgLTcXaCjq5LgpFp5DJJ67SHC",
  "key13": "4NZRFjQiypMv4XKgAy2XD9XroLYPtJ7GGvyPck5ForDHduqFTcT5Mzw1yKntQT6sXDemJDjgp7zhfJ3pFMexEH3f",
  "key14": "4asdzTn4JbrpzbZmwfTKbpM5CGV8Ht3Yg31SHckteZCBvPb7rkqPvPfcPRLvnKc53qTdG4zGYPgufHjmb3KkcVZi",
  "key15": "4h7rjuNEDENGiySb5LqAcvtkkh2eqyGzFRKNCLNnAkHtx9x1eADH8ATsCvfs9CrrQitdzox3GeVbHxpU3JgtfywS",
  "key16": "3YGZ8vjzfB8pER9yFfNCfn8jNQt1WhnEgcJ8dbQCm81Tq8LK5UJ76bZzE9ZXhzkb53dnzVottCBZjEv2PH23oJiB",
  "key17": "Ynmavor9epHQmLkbJ8PV4ZfVZ3zikBKHbHNcaJZofeNUzkgwTFxXqkp2Y4q1MaTmtGxf1CcUET2zah9WCWYbi6H",
  "key18": "4xpDYJT8rkT3UHrsevmBr1KKrEWa6nz5wA1uAY39XbECWNe9bKVoEsvvxZpEN9HrXnCYqKbDAcoxTPtEDRAor4Hm",
  "key19": "66jFrVG5FJFeZzuXdu1Cms2qJVBrNqrZVMJd4bWdqCgMkAv8ZdAL2HjZGNKcLKvQhM2ZEKnJCt5s4bdDymXTP2o2",
  "key20": "4sB4EnGxgjauzDHrGE7Lm8Vi4UBqut2pY4T8oKMg9obzTuLSJhTsHVKTyWV2vSSWLz4Ngzf2hUSYTvrYvtZDky74",
  "key21": "5Lti3fxzmy5YbDcCjfNqYbDJATkqEiyib5T24b8KBWcgGGdhNy627L5vH73yMh2BvawfZZ9QP11sbchm2TA2GypP",
  "key22": "YgQhA5EuxneX4WnZ3yAbRTWNsX8BBUEKuYHhvMihVwzJELtY6WJjG7VDWTT5ao8yBnU6AA2ZMeKUiVmL4T5DMaM",
  "key23": "2ULscEywjDHbNbGD97iU87e5ecLe3t5e2DHderoTVuSqpaeFtrFLJSDXmrBczzcKvzZmA7mEfsN33e2Pf5JsofEu",
  "key24": "3MVcDAcoU1chcLQTVKMZwxkLmMxTvH15vxo3G2CkwZfFG5dXiXchLeGorUauoZShqfQ4wh2ghyUBkxGB5Ntc2cS6",
  "key25": "3UfeXHr6TQjQdRmjN1aAvCTynZJU7vSEEK4tcj7gTcwU8YG2HbJwCqxzUjpf7sK8nmWYdehuVHdMqSgaPAsbf5Fi"
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
