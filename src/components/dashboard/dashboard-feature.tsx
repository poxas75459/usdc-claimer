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
    "42M2D4h8BoTvEE5DuWNRQ4tekenFycTeoZvbw5ERqK2gbdpLi8LLNf9uRCpxYYMA5LtM4A7rWM1bgxgAbavoDc8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FZkHE78eGFcfsK9528b36sT1zgAYVkE9aPiQhK5ThD5mS9hRj7pip6zNyu84aGBrFgjiCXNdNK88grXt4r1WuiS",
  "key1": "4mLGbPK3X2kRot2iHqGdeXJbZTkS93gMX1zesy1SmH74er3HoEKE23EKKwHV9qqCvwTqd7nVsrVZsKkxpvnHdcz1",
  "key2": "pMBSKUcAh8Zo3W6Ez7ShAuFX3CDaq2Bga3dGh6e4T4kam8uD9mev1RY6imxTLY7fXADyj42Ep9BJi268LQhoY6f",
  "key3": "3S75e61Sws8oQbDfr6ciWXRAHKTBKNMN8LhJRLiLGqzoCQ93yDDzoQ5id2iZd5VsHBWAWiJNxUCEggZfyswbURTS",
  "key4": "2Fwy8R1dZxn7RBKmz8sqMULzA8JMQPwa43XM4CLgmbyvRpmD8emH2RYK5ubFpZRfhVKUhm4jRRLaZyaKQ4SagZjS",
  "key5": "2NYYa5M5Z8Uq9YPK2qvWJ6VfzKuCBTGAkD3EahZSVRBu5RgSw2oD3btpWjNgkyb6MCB3vKW44pHzsHj85mkHfqLq",
  "key6": "5MT1QjS4s2WB53qfKxqrHnDdaoC2GHRbZVaMaezM2BRXkYLuJART5gi6mj3TY23dbVPLZwu4NWmJuxdRiRdJi3fy",
  "key7": "2TphXVKKdHmYjwtjjvny1K2pvbpq5XuzfVUJbnXqAgVkgHE9PA1B9Uux9MwnVAuiFkDY9K9r2bUqWgFXGTVoQu2q",
  "key8": "5427zTr2cguDkKLnXTV4XJgkGyReArEoHV6JP7Qe7KsF4pj9wK4sLNJhLsmmccMiX32puq3cpiF7GEfRxZH5gMzg",
  "key9": "2XkmKMJwPz9zPLCHqjJXYRb5uSPUzARnkZ75VroNoRGGFJHifoMWzVC2wGRNxiqKdDqncYL2VADcPE8XSrBDnmYN",
  "key10": "3WfYBV4S7RQHXN9r21dGd1Te2mf4P2X4RLdCV7V9zsJFDR7kvDV6QNokjaSKns7H8nDkfBUStGuV1DmcRMGBwFTG",
  "key11": "3y5gjJo96aJ8sKVFqjEu9bvt8FPVovhqvJZsHWSrnAmvWtRpyBmuu1jxWeSAA7bBh5Khz7JiJ4d3pxvPdbTqVF86",
  "key12": "bWTRGXNfy2q44ad4v8FHvm2n8hcvnj45Ls7zf7RbJjZBVMqSpEe2mkfYSsmS4DSgfBURyRVepEC3GfqxzGVaR4u",
  "key13": "5K5j9wri8A5Fc4Mwgw8NQ9nLDd1kwbvLofQ6zPh5aKtUUs8BhhByMjedZVW6ZEAmWSikbtjfpMUEnMWSv1QCFbdJ",
  "key14": "5vwBHcQvEwSAQVuiy5cGxns9Uq6gBkJxZu4ZWm2ERc1mUdQ8xYC7fSJTkHwrZDGmnfGbSt3GhE2krjsMPdC2jJgg",
  "key15": "TWz6LqkKKsDEJ9HWYuY8jk2gFsjhXr5q3S6usi5udCenELgCcUYNKmidZKxixya1p76qhW2mHBUjY8sgYYQpiW4",
  "key16": "5cX446PY5TCJPkzaepF4UrQ7e6Q7mVyTaWa3U7uCB9HnpSKSdLeCUFzFGU7grfJz4MQxKrzRyTAxuSnP9cqb9cEA",
  "key17": "31xv22RAS6qevtv3Yy3GntLbrCnwE72WgXVHnnGa2d3LgQs3scQwZGRMUCbvSMMkcicCVmjpbwyDKH6D8MpWieyz",
  "key18": "5fUbZQp6fjXVeW5aXcwtpUdgR2JPicUqu3Eg6Qpwn246TWM3KiQFbe1y6R7R4zrKoro1BmurWSoLVrkHQNgHrH5D",
  "key19": "53r9WSC5bMQ2TbSi8ryTxJAyGw9AqVye8X42u1h8Sv6BnNGsMP5FJmZo9PjaeeJG49zc4bT6nBeCBHSgufTT3br1",
  "key20": "2a41gNLB8Fcnfaoa8GMFQ66pf3rEGUV6nktwJnGSgbuuUCiDPsSCXdZQar1SbcF9bWt36oSGCZrV2z5kLZgyfUhk",
  "key21": "5gSWenQ9TPGeb5AGeaW9fTPRjaAuZ5B5xirPkJ38MZN9x7bvB8rhFotD9NsmrwxKUMw19kWWnE3DANCc6jJ1xJwp",
  "key22": "3u8f1yntEWHDChVYQNh2Lbnu9mxeyzfcoXaPFNjK7K1a1sK6x7AESYKdKX7vnNmzpdZwoSFGNv3SLmerFaiHuTzV",
  "key23": "V83osJTWzAuwquDJLHwANpmFkX5pb2NEZhC1Z4TLMxuLNz3DeoV2g4yEKXzPqA72mpsVZxC6GXKH5AxzcWujCmq",
  "key24": "3sHiqKwjKA7DH42VuwWs98rbVUBaQmPMJn2crRp6vH8qUVDmWuvWgBCf68noPp1Q4Zv2a9wYwWpjCcu9HdRUM82E",
  "key25": "WVNFXzKG1iLzj6QqCCEt6AjXTxj5fo5c8kXTGLr7tVCmpg7DvP93SnMC6QUe3sJptt6gbnqeF2KKUgSJLGQpCEs",
  "key26": "29hgoc39NZbQtmdieUVgWKYbxfBRXyotnVYquCi2ned9pQkH8SHFZweL4shkGGDe77ffXbVJj5aXQSPmuD7zzaK6",
  "key27": "5orNAE56tJ4C94pxa5tKiCZ2hLgzfdub98dWxnoiA6ESDKVxXAGPCnHSAovecBe5yk5t3DAZhoqaDAGJba5V8whB"
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
