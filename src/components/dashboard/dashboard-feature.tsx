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
    "tBn1posFvdqYa8NPkBtKHbcaYLdarW3FRgpu6nkDP9Tcj7bifbdvyCBSS2i4H3ktiTqKx8U5ao3evEnyeYDEPEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LZ2n8moa2CcDFbqrgvzD2aqAFNivhNfYYzydRQAHyzF2bWMoi6CPV8r2MmEabHj8y4agdKMeDEHtijqAoTmjFi4",
  "key1": "5PghCKfWW1gTCSWqnWYmHEwwFkTcFfV9jAG8KuxHi2RzgjnC9LywxSyQLPLJQ74y4Z6unih1NuiUe11EqxixH9zJ",
  "key2": "332mf4VDbwrVCT4ft4hpXBkEsUaQtoJXgnwd29QPhhFeFViLi4zoP1RBtR2ScyhXKefU8hu5pR9EYoYFNvcWz8de",
  "key3": "2XRAEmgBhd9yiLergzCSyxrZVkdxVFKaxZnXAGTbeYcUXGyMG3EhdogroxRGGLVi92SXdH8KfCNbFq1zRTxbXhgr",
  "key4": "3oer5TiTnyTyzDFD8LBbvm3prErWoKTVTUzcY54e3GoUsEWTa7mvdBNVS4gU2fFLTjaEfJQx83HsuacyfQ7bFcoV",
  "key5": "4h2rBrXfytArWqnaLQ35QHvvQNTb7eg7K42YruXQxqK84ZNeJQLHhq3CyfaTBnJoWenTtnhgM6g76iemRhdBpLoU",
  "key6": "2m7cTF7ezwRygVhH47NBxSpxBX75ntRqXavjHT7pKbeUhh27hm7BSGXs7xWQaTQGtNriQtDK9yvBvLWjk4EHFGUp",
  "key7": "yaAfJopt9xL44E8LKJC9qEBm8rM6gCPfqCMb9sPCrJmZ9hXkryrEoMjLKVnm4T1xvXcJqx8VpGzat4wWcqrzmb1",
  "key8": "2bHrbWdPWJLisBMWNfh2hnFXuRTqXzLVZ2TCFfaTkyM9iLv68WQci7jebzYL5V9FBKcwfAfbtSFd1Aqh7ieDa8LX",
  "key9": "59uQon7zEXCdXqbPyzZ818VfQWEskWsQjBM9b5czX6ZFeGfm5rhMr3nUJAYDdfZc2FpakLKpgvykM9uPZVcckyGf",
  "key10": "d4EP1XNYEcxrmjxcvkebvfVMme8sm7BRS34Ywg9WRxm9jowVyNUM216cxFYoDvC7N3xgqpRZgWpBMLN2HeNw2dC",
  "key11": "2w6pow7WERYKs6mysoiar8DKNHipfKevPMu52t5uUXWdmbpUZoyb9jvkFQEPogj8v8Tn4Y451EB5GETYrpRZ8jNr",
  "key12": "bqmBQH88GP1GpuzUAHZAn3xT4zw8q4KHxuT41d6WntxjEVoTn3dKMC2povqc6tPQX11Xh1UZZai4SAAoJREosDy",
  "key13": "5tKmX25xXW2SE1hgkarVXzd3Px2Tyvi5ZxM9zSGpJAdTjGMg2aN7CqX6FVF75TuQbW1SBGXQSNmkm1jqkKyZREZZ",
  "key14": "2BGp8YpKoZorByqBRAuw88Lz3y8MXG3aQW38zVLwrqxRaPM2HGnkYHMbKbYCq6hzqxK15nZbuXri8pgjhLQcS4ai",
  "key15": "2dAuuCBzBGKmkwjEVqHf9JG9cR74y4aMSoye1Ao1yFkcBEZ9hb6SEcxH4qEuoAd24LMSKAuW1cxYQagE4Q99mzMX",
  "key16": "2GYFwJdYAMVB43j1ux4zwFBWrznjCa1B9fMi3MjtHigrdPWgN1PXXEMx5TdYzSFzbhRu1Sti4pnCaap8PtBukVBf",
  "key17": "2pJTB1LQCZqxetS78DQxAFLv2iELFMAxWtASL4KPy4DYAAGm3UKRirh1tvxycBc91ETd6ogzBzUfqPUuVRz6Kyaa",
  "key18": "2Kd6tRk7ysctsCFwu1LoeoaUkHhyQRHFvA28LSxkaWqYyXiMehjZgZW8pHcjAjzvE9DEanai8jrDw98iAaikqtXq",
  "key19": "2LzDU2cASLmPycTQWfFg4mP5AZCwqzfu4ujvhQvAw8uP8WA7H86MuLnE3tVunfJKRcgY6XuHRcvhrQmzfdiSRv8f",
  "key20": "2xYTLRkzJEENGasNVFkVjuUBADbMfzd357Yz43mgh3jM9CbKLETLqmewcjAf8tJ4gdr4y9NMpXRfVFvuJKaNUymC",
  "key21": "5h7iHJeEcHNZPWQXyHrrrom7cTGRK2pdundmfiFWAn7H2TE7YCF9k3B7ZLT225dt4657hwbjFV3YAj4VtRmMpufV",
  "key22": "2kqBkC35CV3nDCaaAAYMXLEC31G6nQmhwYSqVYbw8eVmNDn8ds39vHQ1ELRaE5oF8UQ1EmmMZ2kbYnWsu3AX4SUS",
  "key23": "2F5n3uBzaPrKPzB6RZggL7JemmdoZU3o63y1VbEmZ4hByM8se3Vy9MHMHfDfmch3ZTQWU4BHZMeSzTcfERaBWGHu",
  "key24": "4H28jmvw33BzArjyYmmjqWS2pUBC9uJwokHwwTYfBaWbTun3aexdHo5V8fEc3K34je6g73ZsJcG2HtoTB76WMTdS",
  "key25": "qPvLVawK4F4rLr9KShY9BqWJZoyZo7GytjUQrcrrNN3auUeYkjRZf5pqPKD56eeYk6bzagRNWMYXnUi7QmPK1qc",
  "key26": "5WWT2paqnsPEeBEEVu95VPfbp9rxRPqMvRmH1YUZhQCmY4PT88HwHZvjJjvWNexSRf99m3yCnay8WZqFKjnHrkYr",
  "key27": "3EfPSUYApR4pNxpQ8hQx8UfWEdiiPW4upocQ3HjqXrMMAr9JrjTDjWG2z14mb15AdD2qSchnSCpnJoYK9VZbeXoM",
  "key28": "48pKsNPwiGVyJE9cbCzEAfPpm96fZZDTzVBngyr5Vs6GYiDXWAYK9cofjgWfKK2QEVEV6wRXq2ZmcBViaKYDHpTU",
  "key29": "3GGyJnk4dJXo8r61rrQqSdJfTuP14uscx4ewkSYGbD7RL3pEU8B8c73QUwsH86NjV6quqQzfy1DqdegXUK3bJPB2",
  "key30": "2FedBXCA7SM9j8nXiMdCiz1H987MENRC7izAMnztvHFGpsZhk7qfxTgBYieAMoXYmdp8hxAkrp49bmWE4MhDTyDy",
  "key31": "1ttuNi4qheoEmthW8rUmAhJguncc2DCeki2yyj17iFXK9UyvyRsEuJHSj5eLepVeWB7nDHTwEUCbf2nGLQ5XkP1",
  "key32": "3rFn8LsNZVSerZaizfRx8sKBpkcRAwFv8rJN5NoFce6WJ2BePAuhuwBmdaGDBtsYMoP5Z9LXf6SNFzajfCMnXgKJ",
  "key33": "2wTX638vgdSVMFBo8NSSjhJHieVUv6xwC3o7vkZPqAAmu9CNrYsQWGFQYcLCXLrXXQsMXshLPzWzCivxW3efLDti",
  "key34": "hEhDZFi74FZQrP8371sEnTL3SiAvmm2UrVfV1mSXBfpFjjMphBrv2rxtB7cYpQk7g1rH75mY7rwfFMptnKMWgp5",
  "key35": "w8SXTVfZwQqJjg7XnLJ3tLfS6wNUuEBDB2NtxkszJV3T19pVT2vX8wu9fGVNX1qMBDFi1Jxz5ghhVQ4D1RiaL14",
  "key36": "45nNYaMJE5pikvrDFGCo9akjNY4RZtZGHg6pkg6aZ1DDxVAFri6jgbjXumoMtEvvrXjfSjXBNexS6EF3s8q3NqUR",
  "key37": "tCVsUwPE5vi2N3rc7NYEzRMm1YbbjsrShCWfLNRUQcnL5DRFN3yN65tmWzn3RWG3xiBMSRbLV8B93ceqTK7chMg",
  "key38": "ZJZGssUrNKqkESKxwyoPxfLk2Bx5zvNPV8G9Joq7AcMhhLMrx75NRJRUC8a3nfjcmAiPi7a8yPCtLA5FwZaAGv3"
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
