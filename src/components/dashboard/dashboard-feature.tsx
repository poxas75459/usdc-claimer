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
    "2qU4As7KmSc6B9cDjYrEdwheMAYFUFiXRnWCE4LuQCynpi8koKtMrWvC73cevbVQwwUiQCHZCZi9SBaMtrAQFbKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WqiGY9rqk16hJ2QpLjAtJXV8V9G226vvSw8nj9RQWncaZyfEQ13jvvLSk75DYbMKDU8SbLGXsipfcR6omL3HC3a",
  "key1": "2T21Xodv5jVuywe2MqNGsYqPREYKFmDMioMuhUeZGcoSMjA63v4wFM1oFasT8LnQQhX1fjaZYAQqx1phcW6gbecp",
  "key2": "3eMnKhwbKJoo9SN4UEWhJysMKPnQmstV9fuKoD4osRh4ABwzjySNpsUjkaF9zcB6P4FnaxqorYpEg5ZK6NhXXcPB",
  "key3": "3FVvLmdSCroscLLYWXjKWwxpkSjJHuZp2mbb3qWRiQmvqyd9TEgdURa1r7tPQdu31rma94YB2cKrwqwPMc6A8fC6",
  "key4": "4N98wsHzRsNRKMANHfMJSBqLCeRnm8JMTDU79AiEeUdaAm9MXw4R9wgruk4vqoiQNgXg2dTR2QvpnW1yo1NMeap2",
  "key5": "5hdjtjbqAdV9RyG3sbyfpwXUb2mtTKDaZGJwhawJsyQjyhHBYMFdv4WhfoG4wisKqcQDVqXjF58KJDMERRTg7NkB",
  "key6": "nRYv8hSG2G6Kkv4mgbNnFgnKisd9cagDnj4BKWrYyoLkVEgzuJMz7ASbk73e8Y89AEg1qtN7gh8pLz3mFTUV99E",
  "key7": "3dNUrv7AfqpuqaB2D4UXJmRqgMhpDVen7VTFT4BRPWWd1dsv6NQ4ArpBDiMdPSMxuuJ7BrQpJC352VzK8b2o26ZR",
  "key8": "4HmRsfcmJzzHvTGBakFUsmDwcYhkfqfCHXjo1GLVuuWAJp8wRgwdHVQ7azDMCsvhkjcN77Mbg1cy2GKLKfU5UCpo",
  "key9": "3jcoWvtbrxjUhYt4xMYZKtU4e4JnvuUPconRmK26Dog4d5G42x8RbLPYWRWtCUd6g9Vzfpt5FJ8T2bUrPyznGfZm",
  "key10": "58UnECz9i9rkD1eXEGAzULvnDkGbEcCAtv7ueuFVye735mDvNVDm9nuPvNkfYcB4RSXuEQNL5TgZ2kQwqGjeguQw",
  "key11": "5pAu74hyL571ffNMSU3ZmxQZXafunKjXDPwTi9rxdx9QorWm7Y8CY2ASyDpDiWvW4MVnULsvbJcgQhDtejDcBKmf",
  "key12": "EfEPHQjpb1rmX7mdWatzT5egi7TTpJWweRZqVt3XrweZoBoRgg1QfQEYDXaCUuzyjU2LRDfNtFjtQXAZyRceS52",
  "key13": "2HbeMhKhpnXzN9TJonsxB9jsDm2s232V1ayNdUMsezBzafoNcKzqqbSvF8AY18MWZKEH8bFzWJJPkWjViSTt3tBK",
  "key14": "5zm7HQce6AixpuSg7rDMHQHdsxhHc2TMEfNuSqQo6uFv5Qye9oEwZf7sjVntRdbLZ83mpgoMHebRrvP9Xie3zmnK",
  "key15": "WXNJFi3GP9wKsQNQnXMTAsfpELuqM3aqnzFs4UHtMmutfmpeKWb4bDh8hxSkvUxCoNPLYGyeamKGhjrjbRH6NMz",
  "key16": "2ALrEGx9c8H4FeU9iT1fZ4r7kaqMz5qTGWe9zX1ah4JsaWMyTsZ9MGuH2ugehF9bjREwDAUq8LoFGJ7f8eHQWYav",
  "key17": "4nxRZiUXN1JfBdzzsj5yjnofZ44nY9VTm83fHDZwY3z8WS3wydMiazzZTsAcQ714TjG7c2W7gsa77tdBZeB3zU9Q",
  "key18": "5qcKBjYGCmQjy5zJPKGtqg5upPadCkFabuEnEQyGxUp9CU9DrmgoeC28GSBYYhVfWtbN1AomUKNR1g92RAUBW6fo",
  "key19": "2f9rWJbsrF9LLNy2nhSPWPj3ZsmVnRdSU5DmtGs6JjgUBZUmhX56NfBEgTJrA88dC2pf49wV9t3EbbL6TjTJtM6t",
  "key20": "3grf6pqH4snq6bsnVF6ATXrvtDWZ44hTu5i6qVMA6zKpt8unSjYaRMh6Yk84p8iwF8mAdRTi9BkQ5d4XyJ1JgncT",
  "key21": "513LUsALsN41uyHk4JPhgX6fPXGUU1LDXtetMXoZm9G5k2J3DPKMnXDFaHD6FWzWQpLpEXuCEQbVyFLBFWjvPZRn",
  "key22": "F1RUmi1axh3sveoScyCWBoQfhQNHN7bkJ52cs1SzC8G8FwMGwTwCVZBQtohiF4wt7S6h2kCeJ6r4vMjCSWnvWR5",
  "key23": "5Tqc19EbZEqGHamaThXQb8so4q7HowMFNLhAdPgWyebszkZjBJgopwrK1yGPvKcNwQSjBq1mGnagc6tJMCjN4ikX",
  "key24": "3jtQqiyQJi5NNfYbK5JyrmAMirug26ZKuqeNETMAxmLdtbfjPb2YFxQhUHyacn2WDvVasdZnUQPuVDRGfpCV61YB",
  "key25": "3U4M735NnLjyB1RjfzHY21Nu51CRkAKTWpxRuGXkkLtchHAe8eCpMSYUdJnfUDbFUi98aKZ3xUz3PDH6QoCfyF77",
  "key26": "3vfPJ2MxwrKm5J8PUtoUcMu6cf3dUEXmG3wp4qVv9rHMU6CNN6gZv7fymkFW6fToEzzc4kLejXHNkeojFmR4NnWC",
  "key27": "3P1MENDdTuF81BBkYt4QpkLvV9Eh7BULLbG9NnUkGnQdRdDBc77ycDK5nwQ2Tvgi5bk4vfRLjdhFDdEuijex42z8",
  "key28": "4NdLycMmvbmXpt1dARdPBM3uXzYA4qr993zDGbuwxgkbyhuG1ugSdbQufotr7gXGKD9MH8tnWtwDwjCDicTqBg1s",
  "key29": "3cxeoBwCj4szqeNG9HoQ7meKjLRCNLNH7eSu9tFm9Nmnqkb2JvkzTfVhSXQgGXKY48SrHxTacTfFjzZ2itTCqTh4",
  "key30": "utujiW16dxUV9E1dHuEKjx7ApA7tCdwct9qm537FnL6Ca3Sj9NXAsvKMeRNgpJ3g2wXNK4gZW2VgkwBcqeqcpvV",
  "key31": "2aMEJRN5JYNZBFLUKKQBccUPXFzbJm1H3iqofxLFHRUUBPA7Xz6WbAAcnGmzUPxKxwHtPtufQPHU9UBqYSF2s2nw",
  "key32": "5jCGsYkLskfLg43Dkhz9fCknCDwwF67c5frhGVaDA8GBsKAqFGQ7J1q9sTDk1bAjzXWSHySA3sUrtLMxJG2GpghC",
  "key33": "y5g2DoQJVxrQmJLSAbMCdQ9M8zbQnTpn3b9mJvntyQTJNtXVaHGe1t3JAvDxSskCJJSuJig17KiFwA6E6bS9cPz",
  "key34": "5Zf8bY2mrZBPAQ1LvRmixcpJq76tozXeBbAMrVc18UfFCVZWtggVNL9FnhfBmvEpzuVLEhsMDDgZucgBUgFh6oe8",
  "key35": "5GmFL99fFPBvLDBdZSuf5q7rs3ENtsEx62H9MGPwFQwYDL8WwpZKQ64rLpTUkvT2CXpe5qEnd3XNpguCjtap3TYS",
  "key36": "3LSdiizJntVuV4bvynL63Jc6eihbaV1PWENtdS4e36GV2Bop9vdWTKsp1RTA1RGVZH7jsmNUJnG3hmaxr8d7qAtM",
  "key37": "26XyvG8SDiKaRvtPAyjSSRLGzCy4E2bmc1WngvDHEaygB99hmP4zF1nGvAVbSdndyroC3f8KiswURgkHbq4tKRx7"
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
