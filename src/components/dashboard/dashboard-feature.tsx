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
    "mmaxcm7ZaUdbuhPf4mRfYisWpsCwNJn4UiaNxq7sKp8pPo9jrAyhQxxQ47qsqxcrNqSN41e99SJCtCJ8F5jNSzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n5hrtWg31uevyezqY4q6BbzpwpeYwimhSEvU2dWav5dj6Sm3DFxvNk4MBGTgobkzRnp3hEsZfP28Np9M12nWHtd",
  "key1": "2CqixYXdJMshaCwrcz6VXEWi9c7h8jcMKmJzaa3SE656hnPqVQZ3q4K6cUn2uCmRJJ6Te5tu11wzSbSMxDVWseRV",
  "key2": "4HvUZ2C2FJEz1rUkzn7Hv4Co83iJYyFxaVTJMPdFAhdCnRK4qNLXJYuuYe8sXHjWhjxBvTj2Q3Xxhmc1WjQTg5dy",
  "key3": "41rCZXCUs4hXkkn5qkdPYapEHuowgXxoxMtn7aM7TWQkw9DKjBcYaMHhK1Z2xE7Njq5rCj3Md2PUrNmLtS5eHHmC",
  "key4": "4a8iUWD1bVhoDdbJFVxzQYwzMFBNEPf6A7kbTdGr5e38RYjX9Q7aACFebUNtCb5JrzXURQVzfmpfPCq4WGUUYG31",
  "key5": "5xyun226MeSbx6wvhMJNRkM3AL6cqEpYVDWtSeTmwamT1mTUEonzTqUH6H5pA5CDqY6UZtSC2yTCwusniHXZxozg",
  "key6": "WboB5CVPWLrTunhFp2rU2a6xrctAyWnWqre9mPrhZLvJjurTc6hYUWc3j4x5Q2N8hPMDo5Sxv3mXAUUZnBhYSVa",
  "key7": "3dEXLvxDtkHc16kkV3d2yE4stBEvtQSjaMVbuDNmmA9foy5JJXnHz6nsVSyqom7QSLwbv8iorQzhixDFVLu3u6mJ",
  "key8": "4PvDdQGQdJQ34sEr3Xox13ZrGUur4ZVKSRCmRp1ZKdrfyBH2ATd39o2mfdEhFrz8ESTYf4UdnoExsYe92gjsYZab",
  "key9": "jJkuj3yMPjMKyNS8uajwf25p3E9UCWcYSQM7ZZe2xyJAnNYdHkenzLFHRXWTMjo8WHGz4WVdSbU2DiTiDoQietV",
  "key10": "TRk4LStz5tBe4U7i7FDs7A4b9bjwFQ9qU8ZhoePHvtdJHJQ1EcUcrryYSjF88qo92Sr5z12bfCz56QsxaGHYQfX",
  "key11": "298JnDPeyE9VuNpuD172ibEBWZ5zYXQEEdnwFwdJgpEuoHNfGW5YynWDzoUeZzZL4YPpN54oRXmsX1wwEnRyBbb8",
  "key12": "hd3RCLm3pJp4WVYXUGVieCu1QjNZ4SAmLfxS4gyWbVh7dtTzjDhTiUB4PYaqmWwGEFJtFy2UaGYg7AvUxrcoTT7",
  "key13": "4twvX9Yu6WpiDi6FuEhSHr7E8Yhf8FvVJBrFk3Bu9xpGiEqcMak6wnYzqoinkLwv6gVzFifa2NgBqRMVuNtt7ZkB",
  "key14": "3cDKLNfytnYye6qXSCnvnHu51W3RjQSVDJAVZxM5m9GCFrLVYMkkF1uWD1Yt4mQsUbzjmRoqZXrEVJNF9XmDrV4j",
  "key15": "tDW2XSkJcLPPg4Y14nckaDwhvyAni3hyYyRu5WoVyHTmNAd8yyYrh3BvrFLfouJ3UUXbyhkt6W1GaH8PM1bTzey",
  "key16": "wZSWFaypuEdygtngybNgTACc5FDqV6ouMyFJ8qM3QoedQ5qap2aqPDcvbBQ3dhQTxSwp4wYEuS9MRMRddYVK5Eg",
  "key17": "4gioa6CrartEbmWmBHPjXnmX4UrgZhcU7e4AZhKLZVqmLsE2TM75v1rvD3Syp3YDhF6ffcPSsYozieDX8mFYso9j",
  "key18": "3ToxQgNgzEP5YZsGZkmBN4WeXkFz1JVM5WtMAXSoXDNJ7ED9uDaQpyZ5JcibkkJtSrsaPje9NxmJXPscmdcrA25y",
  "key19": "JeYCqoF1QiaU9ZnKtnJV6FBtXkg2KjwnooJJry91hwEQtbhUSS9RrcZYuGbopYd7rWystWgvMs3s5JKXvWFVx2X",
  "key20": "4fYstvmVJeY6q5JJ9VLqrT4hiurZhAMThkWB2kvyZz6s6WiwnVEJY9xcNjykU2a5xrDu7NyYZC2hSydDs7TQcmvT",
  "key21": "5ELgf9s2bX992LPdohGtSNYnCLYQWC4muLWDiJcj2mqyCTdA5D5an9Lc54REpgdnWfNrY6NCqXSB7R8ZQGtvt4L4",
  "key22": "3Zn2Dh83j57G4m8eCmw6APasrzrPhfsMj7ZthATnTUQDwtnjqtucskGFYrsuB3mGExxJkZYE7GMjJfDQVWckLMDK",
  "key23": "93XYKuANyZCLnu5egLkCoy7PRKexktaHSavpDvgijkWq3mbdhCiD1pJ7v3G8tBr6FkDyZ5DRVfmPEh8K3tnF3W4",
  "key24": "5vZSBJugE5kdRv41ErkG7oFiKi97bvHdQV1c3qnh8R7tyPqAvgEUe1aVf8dU7W2J2Une8ohh8Gpp1H7buUhUzPBo",
  "key25": "WpZ1bTqsaH8ugL8oWLJ9RjcjZZKgyNHeGdyVkCdKDMZCmgoRb5KpH9R8xu7FggfuSA57Fpk2f6W13R822nFFAtF",
  "key26": "2VHDiceqU6xh9iWL2Xs61wDVdpKThANfo9TDLsM8i4pnTcMAACQi2sJW34LmPxyPdH5Nye6qemBE6WWC9dt5dWVp",
  "key27": "3phWy9nfvL2CMU3CwZgshthDFuvHG1bmavpND24gyA2ZPTMvdwYB6XJc3PszAV8LNuFmmJYcYHCHZYtGV1cgDE1v",
  "key28": "2N9tAsGu1GG4bb5Mh8pNKzXGLHge7wR7HgSdPxHWgQAHwbe5fEXyuDfiZRsFxL36nfZAq9gkKs8aL8LmKKXhHdmR",
  "key29": "62bYh3VcDiAZrj581547Tij4fF73joEztpPKjEbJEEYWLcucscmKA1kBuvguZy3gHnMNaSJ2vHDeRxeVJkPsquDT",
  "key30": "56wC8NuWEF1k1emBVHa9Wm6Yje5AEFzuG9349yKtcNSpvWEDtaDWEHMwUiSv2ueG27VnXZ86tD6VB1isffiYp1iL",
  "key31": "2yfr3PLkHW8YeAtb2vzvQBB5FzuNnDv9QSADQ4CuLmLJ7s3WQxHhQZHcrNnkfW2BvxHKQYmL2ZzyK6JXNg9hfbFW",
  "key32": "3hqhaooLhFHUgNqumAxqqz5Q9wfQgdKDsRPAGSKAoKgPGY9ufWjaUhrLaJmSTdf7vWiC87XsJXnPx9YUCLvPrxJb",
  "key33": "5iw8NHRKfaj2gR77fbQtBbzN4C1knM2ZxbbsGPzMByKxLJsBkwv7wcueeAUq5Kt5MTAYx2c9Un11v5M2JnjRRdMG"
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
