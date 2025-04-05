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
    "28HQhetQii7jJEoA9hRbrXJwkS2VDa6XHjpNVLTEdzDftZZXLWUZ4Dte6sDGoebQZez9Z6KxP42SfLQskVRbMUHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ctkjdavVfzWyb1TqkcpfaJWq4bs84mTaAgr4PbRhpikrmuSERAjtdmoDBEXUx3NgFzLVt46CvM727fujzz8MQs7",
  "key1": "3s5xyiNCQnskvc4SLjpzu561iDCUFLRDDfAkoVtnouFMitxaaHLf1VaWvZaYoCaXz5WsepKdBntNwtN1s8F2aVDo",
  "key2": "eBrGhPHreedanKUk3Zho2DFUZdXbCmHaJpvdiuqqGv7qUJZf8rWPVk5vSaDfKCY1W5X4AkEhNuHJssqpWZbmt3V",
  "key3": "JFfUKGzqC5FKRKxHap28bU5LqC32kGpiHDEJ52c99K9boyyX8VS2G76DKbCAHzknk5y82KAa2VdUJqC9x27Uz26",
  "key4": "3mLpNMwy1twRLk4ojy9gpU3GpFmasZNrCuT6ehHqG95shP4wZKd6LrDD8gekSxncfq4GVq5C2Sp6fNwPLtasER3F",
  "key5": "T4aCrQz9QgA84tJVdSprfJj3cAGQ7AJo8R7ijc9oJL5HJy4b3LK44dLbU5NKFxLDF5JzdK23wMQe2HDyxsEYSEe",
  "key6": "3Env9RjQ6q3PH2o4rU4eQUknSjv8AGEGQnG24zM57sQrjJj6jKVhuWiWUXCst7yuBAiKtuofvF1NQw4vVc2wsuvW",
  "key7": "p3giguEmgbvrvGMqhSdUqcxXwWC3JQGhnrA9qTZvPBQrcnipvTPNEbfLzP2bb5C73MEUpk2b6BagwLxu1SUjXMu",
  "key8": "4eoCA1mWUdKfLCXSuzQggh5t6AbvnDhfiXUEjgRMfgnCy9PgrMsHi391RmuYfo7vTtccjwXCRdhe76CEbm8MeqoL",
  "key9": "zGLBQAx6KM6A45yVLmi7E9YmboGaAAEdDEL6xBZC2htvp6tUAuv9WT6iqmGQcHzXgJFMi7VDsjzuewWzb1fFA9M",
  "key10": "5TPB7Zu4SUHPymUcsyUA3Axg7PKFC5j2ePsnc21DigP8BebakDUuQNunQLDKcttmDtFEoTnHjg8hTXUfU8LYAVuz",
  "key11": "MWNN1MCgcJWv6sBtFKsjyqdCeVpmU54kKTAb4uQkiDous82ccq9RARhxcLGXX1LCFLfs2AjxZAuPH5tBDvP3M3s",
  "key12": "4ghUUWb4ZsLWTpnKwuHKKxoKtXuk8NVv4ec8pKGjEEGQ9LxFt8YrQmz9qMHnvkZP42jmDhZX4dj7hEtVLVAnVRM",
  "key13": "3iof1ktonrgCEoRejuF6HGLd4xBzKxP8igMeruVNcnZpoPRPeHJT5ysfG6eYkVtFY33PMHVJcXJgTGhE7Yf9v5K6",
  "key14": "5LJ65U7ZznxcCgg4sPbMddbByyidK3EzU53JDy2rUhevf1WRn2F695zbwjr8TiEHFrFkbx57BHst478AoMqYG4Rr",
  "key15": "2fhNatUjt9xJuhLqCxBKxyvMVXsaE5a5VrqsqiQRjH76gYXa1d69oXpqNrixnBqxC21EaBxQQdUFT8su1Xf1QLB5",
  "key16": "4iKN66jGWz7Fj6vPRhgnv4yAT4uuDZNAThz9Jz9g4ZYkAQhhKhKPX4c1azKyYTMF5UWMhmmkjC6au72GeA2DJcDo",
  "key17": "VNu7hXhPiUFF5KRD1WEzSpCz7oV5eLCThA3VoeSEwsmZrWw8gDKhcZqGu7rwgdk6RSSSKCrYxDDU8HF7WyXeb1k",
  "key18": "49um6oWY6HfQaMzXPxbHgbCdSj2sG2U8KUzpEzBDc76rXoNNGMjMaA7C1zTiyu1yCXhBYPnBqVBbUKpQBg7QubuG",
  "key19": "2Sej2o7TcMyM426VtMrzNeTt6GM3AB9v4TTbnWbHL645DJ2ci9fh9UQXWbf4DMMNjKjiXJd3AgbY7gsRcWqNgCfF",
  "key20": "3STTvKwXmAPFJ7Ugg2tJ3QqWA9DztzDkd7vdGGuXKS3UVt1j3BL6rireNNjUYnEVwvGgs4GdegancrHPKLzcoy68",
  "key21": "RRH4WNqJGVwFe2xEa9qFTtYrW8stKNCNa683MDeEH2mT8os3L34fYurTQvjg8tvfbuTkP2GKqFEvhPddJz2SR1L",
  "key22": "4GGVsWuMvCGunvhsfLxr3pqbDHTc1ZCZVcx2Lo1Vm1RMK9ztAPFxyyMCZgcxn9oLdU4rfLkQ6GegpSu8vCgxJukd",
  "key23": "54HX3KuQhe5asgFEtKpraPdvGeVMj2KwRZq9wGoMUxkQtVsM1E3WKsiu3C5BcBZhmVRopQQY2FWhKq6eexWEfmY7",
  "key24": "5h9gfmGUagpziRErBpm8tVnDWGVxDbWobi44uFgK2sL6phGpcD49RhHWxYmrHJoSgfEoqy69GjCnd13uARikHkeW",
  "key25": "5EVVi8mAbNVHv5EX13QMPqcmq8yu4Taa1cKK9dZpchKtiL8eFbZaAHVm2sVWigM7dJCrcbLEqgKUSzjeRY6vMtCG",
  "key26": "2oEDeg4KBAfr3ow9uvii9Ud3RPuSauQUPoTqbHcPkLC66go1mURutWdvY34po43CMTbkqmvBWJMiChZZwiWfd4ei",
  "key27": "3d9bknVGTH8bQL95csi2cdwzc7nt2Dwh7nWcrtG93ZYo5hJPYE8v9RabPesnkpVd3qcfKmMSSM8Rxbsakoq16iFT",
  "key28": "2ZEkAD6nf7E9wQKM6kGhA11vvFYruDouKDhUJJhTCHacshgMLnZ98UWztWcggVNL5YCitk1mn372fNKJrg2LhZ8t"
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
