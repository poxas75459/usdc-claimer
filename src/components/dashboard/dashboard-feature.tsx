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
    "NiAc2JgSgxfYpGJ8rctdR5nuwtspYpTrmYsRBAxiimQA5R3bsTvomeTXEVrAzub4SeCWGQKJqwC13sMLnwM7AsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VcAdWWHqWLBNQXzWXKMbgPQr3Y7cCYyTXdK87VjGxk3d3X4tZa7JwHqMzFnCgTapj48jXpeaqjXN2HZ27reavZL",
  "key1": "2aY6KKt5r8xDXkTqVTM3ivKoCKCnvckmdf3wopSubSbWYWdZvYXRbruxASdXyNwscBsRvd2Meoa646E9A8JRUzpC",
  "key2": "2rVJfGHbhcRqqTo6PMSkUvwbVw3GcYNiVhb2j9JYyVztSfMbVUE9ARHf4H2As4yLe8mbapQNcB4NtYBxdLmUyye",
  "key3": "3A5ec6Z3jCouMGAaj4fNBmPB23AmGkK3Zag9ot9LmNaujS2K7dsx6UZvQxKp65SPA9nLCf71EQP9K7xCeWfiNLsx",
  "key4": "bDMgGMstApiUTR97EoaueMvDSVisnFsF1VenkfML6wx8d2WCAC7eTHEVSdLFpWQDVuraiVpBvmUvjZkqovCuZbB",
  "key5": "5Ey5x9dCcbLj2SUcqhB1kV9T7M8o4ziaCExPTURFNWHqRwvsFL6KLjEbrFT7DsGknnQJjvDXdG8nRjxvexwAxTrP",
  "key6": "AW6R37oowMdLVV7myAK1GHXaarsJYUUxcKpJNHxc5oq4mG4DjwYzP52wtnbRvUe8myRjupXjMU61cVrwQF6DumM",
  "key7": "4vZ3XzZxEG9SnWsJwT8ZqRXYvvyKjSFrY5hdzN98c7sDMC3WRzdpvBgMjxmRzZPZM2Pjojriwi91wJ7DtXjXLYya",
  "key8": "zPDnhARu5scBHVbytnpRhH5uxCmxintjuWsmC9q65fsy4bmsErsYa9QAjhapEo4PWAGBNrBzqMvUdRzPBAA2GDi",
  "key9": "2vYWJnaopf7rvh7eCmXVSM7KfNJWuJBaCGeiBqb6E8DvSDqybzkb9nc4U91oEYLHyfZBHsD9vQKdpE7N5SJjHWib",
  "key10": "2eeuiJ6LzkJYi6VYuxk5V1ophSxTbcXM5d4HT65TrT7jikvcLyxKu6sq3Z87eBfkHyvqjT3tvF6rcA9yfR92KQZ8",
  "key11": "47wpx2pBwojkisLriYFnhAgE6xc8Gi9WsBpMZasJ1fatoLhTYHSHToWMd5QYZnxWZVu5f89zwT5PwZydoqY38Bco",
  "key12": "3x9ZivvZAPvvhTHVGAZuwpzBYBsdgvYKunfwH7q5n3QTar9gx1Dra6VtBRWodfpueXwP7rXcDkZETZTdTvA57Dho",
  "key13": "62iVJupRa8XAunMTz1WjFRxY7KHzrfi49oXtxeyNN6JeoEqVGQ7oEYwXUZbfCD75Xbk4CQRnew3ZqQeKnrRjXD8q",
  "key14": "2SooQNAAAWujXizk52UDDcHg1a7mtDudVEbWZkNX36Nd8G1sSvd7bUPVCZ5sCsJS21c3Cd9wYg9xqYyfNQsQdbyS",
  "key15": "mA9ALJHZj6WijrfjeEmhLxuZvripZj4JYosTXcRcqjBtrFCL8TuXSQA3HWgaZf1CUahbRZs2c6xx317rtuWBU9j",
  "key16": "4DhpqAV2QqvwB1GPARFSoipy3ooqw8J8j7Xv5HVqFZbCPjqaA5TGafUoYWUUVhfapLfX2Tdk1ETR2wT75xEmFxPy",
  "key17": "3G8jTe6duFndKiYGGjvjXXh6ZBCF772vYb9BcbpeMLeR8TcRqPXwaQ23dFcZW8bwctW2hnvhrkNWV9C9qrYsqPXC",
  "key18": "mDdTUBN8y5CNvZpAMVhbYCzVSPFyHR7X6HffzBnQVtchNN6KhbCeAVSjdPCcM9o9nxLBfEKXNb4K2hCP4mszz14",
  "key19": "2HTBKdAoasxy5jVdPjejFbWiY3qZcn7AHBCgA5G2mX1CpFgkBRkSrh5Vqzjxauxdhj8DUGLYK7K3dHsqpaXHXwou",
  "key20": "4NH7Wz15PPHLaKsZr7utGrPKJ9NXU22Z6UaxHygXECsNyghVmVX4josQFZkP9F4d8biEZu5PE3xNx5L29JuaboW3",
  "key21": "4wi974CT9fYdsgp2xqUYng2SQcKFaheMZaQBvnN4yLSS28fFQSSApgzS9qN6yjrmNHBJ1JDRDf41aG2cyUqZ5WrA",
  "key22": "5SsqXYVZvy4tWXiQBKf6T2LuCVjPzqqxu9ZsckK1DwAK2tk1w114Jap3V71KzxQghDku7qbPXmHi5LwasXWbcbCo",
  "key23": "2xzKSxk1iSVZ1GQbJ4Mr9XGY8uMGFQDiJ4Ge2a3ck7RZdaDmb2JBgU66dU4YhU39yTnPmFEgEWdYjHcXnA7fM7xj",
  "key24": "4yW7dU7s3DFsK3hpSVBCTnRL9pHxd3G6RiMiVgNhnrW2b5ep4TF8QsD8qns3KvwPtXsj5J8KA9ZfSP2wz1RCNmaP"
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
