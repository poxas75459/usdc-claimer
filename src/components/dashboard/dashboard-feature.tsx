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
    "26e9PtMG6ujBFPW7B13DXwdU7fwEcBMzuDKREDJxgzybXTT5rGQusswxctqqCzmQZ77qkmazMvkoKQrGeE9KUwgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44FiPnC4bYT7CmMfnqSJCp6djnm9ABhFvVhUZeaCMFbKmZXiWZ2WmRZ3VJ67mKNDadm68rLdLfNzCJWSynP76Wym",
  "key1": "5RVTsETnesmjgRWLGkK7vmnNDdEBWr2XnVqfyKhh3D7UxGhWpVB6Hg2BPPUbsvS1jc1VNNJeAnTUyNwf2zDCJYDT",
  "key2": "3PtBPpSWBQ39xWuobfMPCMiHfEHJx5vQ34DwAowEHcabwgizUnrpxaUphVnACdnbrt9jKose21VKcNvm8sdtk6As",
  "key3": "nCJhxF2KX1MHWjzxQk6jXYZd4DcgWREyGYzf3RpNcvpUJvacXBcL8KWac6725c9bGLHZkiXkkPYxHNK8uNBBjJz",
  "key4": "4rC5agn1dwsojzSYnLbSTHXGELFG7Z9F69rP3LkkJoWqXQ8SgBEUxaSrLaU2FAzNaB98urqnVLFnt2kN7D5f4NgZ",
  "key5": "39EgERaBcfM2pmTouHbiiT3rdrM5uJ2NV7DT7DwKG2KbYPo9wXLeYmJDNZmujRHw2NGwcrZiVh33AAj5EihiRR8h",
  "key6": "3e1oyp1E3jxsbfcMTEiygRznTYtmNarUFRg1Xgw1w46hoRKa8DauzxXyvMbTzwrc5oqsu6EUrWD5KPdnBpczBz3R",
  "key7": "mfb8L3iYNYMcq1H3V8ocsmuoqpbXTCHcUsnhL7WwJkA5g8kc4PpcQkSYDUDgpmhZ9dXh3pcS1TpozEZq3g6wAs7",
  "key8": "4z8yF3k1v5BFALpgxFKvaM873yaoeRHxXg8bqckyFc8q4EQKvTj6efWFE59TGVR79ZNnNgA2yWxPQViuwnoajYCq",
  "key9": "4X9DPjiWkwBiGHoQWNA29o7NmscVwHa7Nttby51ittBrmjDQ7yxb9fcDoocRgb6jaAkby6usA6WeGBSWU5MjZw6c",
  "key10": "5Z2HMZRR78jXwrdJNkKBMppqd1GLsJ2yH7eMtHLrztCGeaMMW4LYNnzzN8fyUPC3F23WMrvHsMTpvBkkL6kvJNY",
  "key11": "HCweBmHVjiWeCgBZHNymRRHCuKvacf5Dc5vv73izA7W4xExZYoSrHCTAP7Zgjmwi4bawUM6WRLu5dm1z4NQMNzG",
  "key12": "4CRagBDfKUqYgKJqZ5JwBkdcffrwYjF184rcqg8Tv163s8CMC8HrAXDp9Ra2r553vrvFZzyZGvHv178svHU4RLmo",
  "key13": "Er7ivw6SwYdr1k3oUXq9mSxx8bGzsNqHaJH37w31nqokJbEyha68hFWbDKpDVUeigoGyWLx3gqVHF92zeiGY6JG",
  "key14": "2Jt1YVMm3PkiiH5rAfvXcDm28hwBvEW6CFsJaaez8TtpTyFBwBxuDmA3TiAcM1yxCL8g11uFNxA4G3hRNUXhDnPp",
  "key15": "4Am71tkEWKYqNYGJvxpXH6DiPpBN4ugfUpbuvViDKCQmKNsite6wNjssFTGGLdkP8SFEviaU2fDbTbCJKwe1TSBu",
  "key16": "3BUCnwgAYcpC8mjCZCrboXHfLUCYcc53cAdtcCkhcJv9anAauVoHms5t7ZCbMkY7kkHZYkwZ91GhEy2S62qC4Uoc",
  "key17": "X2tGYm1jpsydojND9pxoZWRZQeaWaVguSdPHLHMt1Y58nedHGbaK2yeUq8WfNjq6pqnEwzkKfMZ2puWAdCWiNsA",
  "key18": "3U1bm1aNs2tSzXWWTpm8rPAm1kVzuiUF1P8BEHMped45iAtCEy6JrmgsvRSj56JC7LfgQTFnYctG29UE2oWnFUiC",
  "key19": "4zM9As1Dxhz9NG6xGTLeGFfQHein65SjoApw9DH7EdoRyc81Ezy9JtcLg6SPhEXvUfqJS74HnohWFbWbhVuMAUoa",
  "key20": "3ntjgqFpsR8RR8T7VKwfyER4qgW3XXQf7my8RPtbTQR1kUkb3tKiFu6G6fgMFMashoT4FRmNLxvuXEE37XTcGiwb",
  "key21": "4ZRWFZbQdJ8dD238zNtnooCNBacEqY8rRB4aN69qRA68ZAT6KoKRe1vPX42R1bUQk3uShbCPMgyDp4SWV9nDi5TY",
  "key22": "5R6sgzEa1vEfGnCMVKsFTCcyxZSnuRjMTEett57Rhz38tNqQbG1a73myNR3rFitXnS5BSDbHZqy4xQUF1AhWLQmZ",
  "key23": "59hahsJ77wfe6jvYQzCGEtZMF6P77Y3AwudYoiXz24QnSQ9gExeS6z5ZKApypwAzYrm8UEtc3pJraSotAfCodYQa",
  "key24": "Cyro8Qf7ExpyhEYHjf8Nqw3hrhKPfwpF4jFs4rBChSBgyLdKR2Vf1U5WqgnE6KhXAtcYCUMic7dfM8WJ9hLwPnJ",
  "key25": "5s67t9o2LKjKEVTwWmAT3sUK2QTiPocEuxqobGVg7mUY5fUTXsmpyTiZ68npxiTC8UQ2TmQ65PrZMrazXGEHWiAN",
  "key26": "5RrsBdYPipKR7YG6VE7DL4VxieyqrcLXykxUFftz9zT14bU1k8qMZUGfhZ6WhNZhPq4Agjgzw45rZe8gQz9nu1R2",
  "key27": "C7CWr2EJVpuTdMNCsTrtKcqVwA6izDVBXJ2rwofdYS4qoDvXA37fJZ2MziB4s66cGTLqDzwedGPzfxpvsopYPHy",
  "key28": "3xCXw82RxuJwstT7faU3qE6XScCHuD2x91Ncf8z4kxZf1ZEJmPWVUAP5aZPyWx7wq8jU5Jf5ycZxgGB8swok4yXU",
  "key29": "sUdHVzSHhddk6VooYeKheyHjNu9t2JZQD9esdGJCpVMPgBFQAoaJWpMBQ8LT2CfJJwpYNygPkZq1NqboGGnKz4w"
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
