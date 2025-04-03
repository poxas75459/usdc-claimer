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
    "Yxe9omxjUuXipQRopVcCEvJxNMGGsinUSU35wTMxbkLLzyKDn1ox54zow1wH3xB6vB5fv45Q4MXJU89hzLNctDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kRkxWQpTDTRieePFFKQj2TREpXX79hRqZQ22HNmfyYJ6xerkbDVTmxywTpcnCNCEuBaqcfsakkdoDEC3YXa9YVF",
  "key1": "2Yd6ript1y9t1s4hps9qLNDjEhbc3xt7QeVffXSMqFKV4Cm1XUZpZ1XJven8dAphqw7wca11Bd6v25ThjznatBXq",
  "key2": "LfnBK8HVQeKdgNwUV55vLHo8wTFJSGJ5aJJfbzmA25iUnhhrkZQL6sd8qCp8gVxzecXGffa8x7o48ggzrN7TC4a",
  "key3": "5idRaFPmppaGGhov8hAngbaaXPux2rqU8HtyBj5fDExj1JuZUAYppBEcBrNEbCRmPg54MnV2NVZsawqujRnrhktW",
  "key4": "2a7CU49r4gGspiHZ9aPHh6oBZYfmuqFm8Zef1hJEXkbXxWHKv5AxgJ3AF3cW1onEXqcimjtvzT6TF4ts9AeEe3a7",
  "key5": "iT3qq97PopLowLypWmKTi2TNDciwdrbUWk1W6bmtdrkDczjSKBW9sExY7eR3rNbXHJ2D2ndVtnWFFyv8ocNvw1T",
  "key6": "5B3VKP6kEWHSr5gTMwb6xqXzg7cmJfmkutG96dVumU2XZTrxmMJGkbrNGWWqtnMyZRkZZrfv9PZLXoUwn4CcYz6x",
  "key7": "3MoSvUTWvpSBkx9JqB7vv9Mq3A6ukED1Em9ck6cnT3hQThC73qi4VxhVyFQmkNpFGKMME61qSWoPhUttKHWHL4Ko",
  "key8": "ciPXUbzHkeL2NW4GciWj7HYtVEVWM6iGp478ftTbF1RGqXNevpZb4uEMix9pnamq9KFAnBtf6kvkeKjA7S4zcLi",
  "key9": "QiVGeiHKzpZ3AsL6KxhyZ6amy1sDphPxJToUCsHM8wsxVxWXtpxZ6ddMEjspAVuZR4rzNdvMQe3vyU9qxWtH7u3",
  "key10": "5VUuvd7bHQrCLwMTstgbhYd32Yn53YAp1dvx8zV5fCSLCtqE65HnS1J8pJ9G54kP8ZSdZxagWtEMaa7gFULFs3qJ",
  "key11": "4w49XAsCaLgF8VzDTnSw6ZED8XWdAPD1XYz4jaw6vymoLoEbUstpWk2qHMRshuw7b8ej5qiTwSkPucfZiAhTGPc4",
  "key12": "23LP8Jx7jP8dawUqF7M6hbgwxTKZcYnuqNkLniD6ZtKQDcvs7WRQk636YQxRPCXgt6b2Bf9qNvhGGwcQgDpAwR2y",
  "key13": "5QU5RF6y4CBP6VA6kd4ueLPTLoz3oCz35xrVi28S5n8XZVPgY7V2maDf1Tu3C2hAmedCL2twEVYC1HaxAT5tDEg3",
  "key14": "5qt8CDtPEHzjz9pZdJEkM8r74oUSgbCUH3uUMbyUn9y2tigH2pF5ipK3qLN5Mtak3uSQcXEGNDETBai6NBauNMd3",
  "key15": "m8KhuScLmvTadPxZQomJBrDkgcMesYWB7haYetsTNkyYSUwoaCFaWCTSFwKgogv5V2E3RbXLeiCS8fuW7b9KjbA",
  "key16": "2uQRmLHcJQAc6vHfhqw5oCHRMKzCxrR64onXJ5T4ApbJgGJDB6oFxbKrVSpVkNbwT9gEx8sAEtB49CL9sQCZWoPu",
  "key17": "rYh5MrXjYrKcBrt9qEjwZdQFWghq5bX3yprezjSQszrFhNr8e9u61Fq636bRTxz1MmGYgwZgyrhuj7rM9YLKc5n",
  "key18": "djRNMiYM4FENDgpbT2KPEWj9QsZBkDXtu8aJJjQPZbprmTPXyzZdCrpkVW6zZR8SQ7gRUKA8Y1ytaH6RtRMpD97",
  "key19": "9RqARPPfc4pW8cURLZHyFjwEFFHzqV4VEAop6mpFcg7fk5o3ombUFbAhDf5uJSYo88UYdG7zJ6P4HiVqSRjKKzM",
  "key20": "2B1JQF8YH2npsAurxuEXvEpLtDFFCc2Xk6rHP17AXm3mw3z4RZ65NTedyqxUKUnTqpVvmMPs8Ep9JGcZkjoA6q6v",
  "key21": "59jwt75eJA45bkMxab2kMxTQCPvqYmH9t7JjN4H5dSJmsqsRYDTP9nGs6TnEexZ2WZsHYgtys5vLgfqJvvfhZXQ7",
  "key22": "uzsBRbU2fSAuUrok7bp6a6R2n2tKv8MHPrsbC46mp72GCY3tpxk5Do8n3szWWY8WRi5ozzi6pbH7R2wYQvhLpuo",
  "key23": "2kYgbxamDXwyCNtNHVADm3RUVeNYPqWkxWNYScD5Gdjp1ByRzdMQmXN7SoYY2jYwdUJUy5AXcQ9DXgxgsV4Pmojr",
  "key24": "3BFweXyVMZx9Dw7omjmAtGcmYfLdDT1Tb5Tb9wanwKLbDuL9TBHJgx6vh9FUuKeC3LMdFKD3ccLerQ4EU1EZ9qoE",
  "key25": "2MD2z9LbAZ2kzVw3UtjUaGYx7BT9VijH2QSSUyfAvicrE9M2tHNKQLPoGZ1HUEsiqdbRn2eqw1BujEU5XPprqQic",
  "key26": "J4xyMFpiYcpc4Y2HUjWvPn8faCzAmy55zd4avVsfDaADcg518joh6ZJ5bB5sPfXxJ3dRzWYspDeZ1ukjNiCKm7P",
  "key27": "MTKdh6zPTB3iucqfCkirW4giZjxWnWG3mGVRBB6mkZdbrKxkBHRUv4ozjS3YH5yX4baUpErrCSwXYZZR9mrXb9t",
  "key28": "2iwCPvG89KK8YvHdTxxwkzK2NJZvaY8yTA6VSgsd7WeDinTWFK65jvJkzDcgEHS67JQmB7JFkpczenbWTudzUtqP",
  "key29": "375Q4oDPbxhMQjB294rLuoRojREHiFgoPvAKaWGmfmaZwpRQCfps5LAj1nrLQkQbY33SLijUKsQTeyp6362c67TK",
  "key30": "4jX5CCSoaWQay2dCwtxcTAAUmPQkLkwRq9XKEQ7sU8AcwfjSwkCACL4sDqtzBjH52pdeTy4zTbMds3VCvkfdtjP3",
  "key31": "5ZhKcuP86rbkCnY9WZqpuDhigE4HB7LWF4PK4EUQ9F5HRQhNH6SLJMoPtYVmUUQje7xHtuqkyANFBAVut6BL3Asy"
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
