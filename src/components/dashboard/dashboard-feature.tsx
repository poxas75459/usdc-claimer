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
    "3cjc6eHRm5dfcVUjoLwEwabRYaLEc6Bds6f2BRRF7ZUEeqX6bJFvQkSv5sH1g31tAa3dK3ahknjseoLJH4nWKZtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EZkz2YLcT6S74SiD3LfsLcLWhDazRGrsBQppmyx2oYRu1MiZ1hdLi4mb5j3JvW5qB6kSSfnrQ6cT9QdzvGdKLT7",
  "key1": "3mWRXTepcPDfnNXVfZ2tSDg1TpusDHWZhdMYdkQmLrmAdA4yQGHCQ6aYHfdxUdMvbycGPEJvmEG2QnoUzDmmTA95",
  "key2": "3mRd9WPXE8r1v4m6hBQLmzLawSh9mHFqTGm2pEHyo32Dm1DcUHBuanNRUWgJTpCcctHUbUzAYZik93cekjXtsqem",
  "key3": "PKYLSxM7xwKFtYnztvdy928JbM1URUr3ydwLip6hyoZjciLdcFSYqLA4FkPZ4eJ3oS4tn3xjGrGUMLYtPAZsqjf",
  "key4": "22SoWCLdDU2Xmrb7B3QUuDUNvxCeV5hh2Swkk5pR1HUWetGHXC3km931bQkEY5xQ8D3wJC4WMR3YJ7Ui7vFAFevV",
  "key5": "zL67mCLwgYaeFNdin72cqVCAZgrBSAJSTYwGGzZpNawa9vYErDE7rLYnfVvEq8aEDzG4zdgEnvxNjrMGWFFCwBr",
  "key6": "3mroWeCqLE6pT6JuTUzzn8WedJ6EkamsQqmXLyJgTkyANJpNoUxHzh7cyJbzuoDbauw7QYwZLdnLeQfVBQcVKBm1",
  "key7": "3t6D5chd9wHk1Xa5CUNuNk2v8EB3EckEnixe7846G5riyd9CPCnq2XMAjFrZG4jprrUWCNsCDZNigVYxPahsAqja",
  "key8": "4aVYCx2yRFguSQMijJ9wyjnsqvRtsUtnvwuYWAn8qJWxdYShkDTvWVdn9znqE5dVcrpaGhsMwfk2uuw7WivDZWsA",
  "key9": "5WcxZnNXfnSXURDcuGnZCswMmwKo87wjW4w86uB1PAxn7eb4RqKzLNxWMCAgnydZ3aEHX1abixBt2QVcAsN9g4Vm",
  "key10": "31sKade5CQmeD3qXSvFTs1DT1TEHDgwWvTuuXVwRHxXVfW3urM1BVugKvyfXgmm2mWbhVswWwhZbqVBTvm74i9J9",
  "key11": "hTukzaHnrwTQAh6fAKKye99ntpYb7KhJo1X8RMShAMYnkDfRrMKN3P5QVd8xbRphuJAxhyDNZrS9gcaJ8qtco4K",
  "key12": "odJoSNha1sCGGCJ5AWR4wmR9afPXRzBxRgGdhDv8hR5gMN7Erd1MFLYVX8Rb6JaUsL1RnwJ8WQ9sibCLeaMvwHR",
  "key13": "5g1DG3VYKZiMXpk6SxBZXZgCXHqVsLYfMP3qeoepSkNxYAvWxv7iekPYScu4dw5LLJbamcMosvPLEoZpQHMGL4iD",
  "key14": "2Q77sVocDmR7ZNfpebz7ML9nmiPT9gkTJmWd2WVvpd2b1sqFPVSYSjrTW98WMrSW3B6nmuE9XVipHVMxxPSpdoas",
  "key15": "HNaNSmrQEhGHt2TAHYkqKwQ56oQbKadiibWmvfZSamhHWLAmubVMab2BZnqcrbbrGHuFKePRN7Uzpbmeozw7sdb",
  "key16": "4cfGkemDBwXqvwHjKMmCd3bcAs2WdTfWtujdeX7AxJfYBFg4KDj4nGPH1nCXFzKQBKecv7yiJLqXeWniDpvVm932",
  "key17": "56ZMFcDSDPUdNqheH5h6J4EFT9UeeVZ1uiEBh9cZSphFJPRUAUYjKYpdHtxhzABgAiXS2da5exVWkewAL9LPHR5y",
  "key18": "rBncGH6mnX7HVN3LjGiDHomvpbRkUgXuTmq8DrsAbYfnwFWrvJt5GzUE9RkU8twYUMMFL84LVPNGdVLHCLvQkzL",
  "key19": "4HuaYDGw9iKNAEPhPHA2npeGtq3guu9HnWXXwExEhnniuJmXkZJsUGUGAjEPdouf5ewa5pMv4QHtbD7tXR3X2Fue",
  "key20": "2m5VBKr1BmkJMu831PJnEovVxqcLdhDXwkcx4K9C51JQ8YT5RqptJ5NXXRWNigdMfpqT4ArQFWe2KQzjgyuLNgn6",
  "key21": "3W7V8TPNXUJQxUuVCtDzJdscrPFTbqJtHVNK4PAtaU45PxzuTrv3DKCzZHfq33FeCQEWZq32z6H4qV8NVBnw841C",
  "key22": "2GQf5usZ8TfGCLvjeCNV7jV74DAGppyVundxNXc8LWFMcF7jkqJGAQjyQBBiebwunULVWRFLcRqy1AXpa3LmXTmt",
  "key23": "61qcMLE5wiKVnLrZhQT4hC8km7MEHMbcovqqMcGLR3PhBANpXiRoQnEJzmWzcC3THBPKdXn4BhT5btCQzszCg4Uw",
  "key24": "4fK5asw3oJqowjeSeqwMMeeYrYd8bT2PTdHS83wfX7pEtH1jJpSzFc64z9cYoAUuSRBEwXqvAJHydyCKGVaftJ4v",
  "key25": "4Jx41CpkyVRbWYErVvtXYFxiAMhPRsmd3AQe9DVnPY1zfBCidnkm7Syb5HY2nASYSF79yASNCoxDSM7ehWtAUG6k",
  "key26": "3pzbs8kaWGLsgcjNsyCBvjpJ8RL9vCmWEsWYrtWGqkpskJjJLbZdbSf9bxkxFYWgMzpFNnXwduwijHq4aon29ShV",
  "key27": "3Q8qQz1MPgGddswRZ3kX64Xtg7pCXGbXXvuWQqU3vKopiyPCZhyKtzfWSM7FEkmkdmAVpeL9S5c1LMU1nW2SQDow",
  "key28": "3LkRg6wfTuAZFdAYrMs5VfXAcwSfEKXQjupF4LHNudgAs41wbrKFLVDjMDupJZUfF9upZ38ZKSFTt1sUJW3oBikS",
  "key29": "2iBhsd7w4inoQx82JJWoubX7Agaie71CUjsXcmRd8w8mJHVS1N6pdtGwtrvpxWMw3q7NLsDq57mmY1JEgAzf5co1",
  "key30": "2obWUPt56LCm5DvCGSsBD5Q6WrnLBVrVkwrtKHtJSp3YGJBNKxd81K5sYSqt8WckGJPgfTu9yRzVuAQNnbv1vSy5",
  "key31": "229vwSdP8W2qW1SApynw8AzJwbFnSsoqeFHaqaayUS6xJCLDEFm4spq1Ga5DGtsmsKYUvqTpmLp3qvW6oLHeBDD6",
  "key32": "3tapWDnWWaiRE8zEdrXXJmtdyvs5CNKJUfjGXG3LDRoHhCzhUDuSRnqiyuw7K3YUwnxWboRDFfq5WAdK1bAobwFG",
  "key33": "4YFAMoUKsqxYQAyJVfsTsfsEUYgQ2gXW9A9RRZLw6D5yjw3wjwp9ih6FLbzkatTWEm82WGXGRgpEqQuQFRoYfq2i",
  "key34": "pqLugSvJXxP8PFonXEdfSpvFtToac2aRs6BSMBmmXadTAqQFKQZj9vRhjDtKLnLTbF3fuHRvSwrxq3YBAu7hpwn",
  "key35": "3vcH1MNYq3hLfFbmMmPnbYtXGdALLHqkZPCrXnLQKdLwUabGmGSgzin7uJ8VVqK6GPYYXdyJGmeztCByMoxZuLXC",
  "key36": "488WpEb4anuPBB7yCBFwjeQm3CTHmFyFpHMZg5TUJpKfsQwjfhnuHteykGjiF28kSid1xMbZRXBswyyPQ19WSkBj",
  "key37": "3WJzUGy6zmScLP3nTHYDBL7vnGQFKbwouNG63EzC43D3xMytSaxg5ktr37AsmePJp76VMNcczWKLwpVuDSRPQef8"
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
