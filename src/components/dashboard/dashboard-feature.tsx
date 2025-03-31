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
    "FiLHjz9rjnAQMwDrs3Aq1qwzLV9iErNw7yYFYrMrQYsAY17Hmf2dosCK26cWRAY6u2GDguYzc7xrnsuCC8feea4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GcfdNzC1B1QKqQ4RAjdunofuwHiEmkYTWwemV622aGzZ7z9Tn2JzXg4PvupF5pMwQ8yimVPwbQ37cTTmegpKEjL",
  "key1": "2MNXuosn17vBEG3cu32PwcSrzp6pP9yRdxp5JaqePih1Ci8NTNy176wkMVWwXDzMYB4CNLgYrSHxLPBbJokLNZk6",
  "key2": "ZAT8Tp6gRPCPysv3y5b7ozLPNtdDPAZuZVWHkxoimGG5rk4dE7ntbcW59eqAEwYjTNYEjB3ey2tL4vWZXyxsUar",
  "key3": "4Uz3ZTSAWffuk6ZG9MQqRp1xrtCkSggTLm5A9sXqQGv5stpDwFfqo5xUwvj2To8rYXV6VhVkVtNFFNCEKn9GJaES",
  "key4": "3mnb2jUbpYC7a26Pz2wv6rbgQTNk5cZQczMN2gHLXw6QnSxKXuKs3niFG4tKTTznGpgxkzPVjSgtf8EwtX5ekGvN",
  "key5": "5gwCYx8P1ihp49bfF5An6FswuAFTSH7mMNN3LZoBifYNNW34b3kRSU1pf5KBCXAdfEZkXu8ae5QejH5qFhoJQdf5",
  "key6": "4kdguruxc3b8FZpUCYgseQyb6ehJ9ridUDgpGuYQFQ5peDkGeD5oZXXPip5ga9obo1kxRfb68FUTxPfQiSvW3jYL",
  "key7": "3dsLbGTYtM34w1rkXWx6ioDPqeZ21TGtZJQ6h84HGc8PxG3BFBw2mVM1ajX329v8TisVNVm43qXFVX3ESYkkBqAA",
  "key8": "644jB4yzq8aMR3odoxxgryFhrLhHaFJZ7ZMDwupFiw7fDhsqEv6DPgzDyZ6KyFhFm8ddmBPzT6NcEm3vRxY1C2vY",
  "key9": "3r4R11M9zE5rZuY2RomLi28tSNNUKi69BquVrxatyV1Ne9W9x7bUbz91GLTNaXQc9rCLhknpLpGRutfWftw26z4f",
  "key10": "5jwxhincNFjmfBhTq2UJixRMw1AqF7FxWRkK5d5dhzrA6Ax1G7iu3LuLpFtmayDYEc7WthvyLFs9eA6E87r7rdn3",
  "key11": "5G87eU4BB9mWBEJ7ispHvEgH96a38NuSqgM7iwq2G8FnaswQrCHmBM2k57QgPfkheZC1pNBcuaAV5veqZqe4TekC",
  "key12": "2nr1JG4rXqgs9zN6n87z4ofadhNNh4ikLVJqFk7j3kCWD3e5T55JMAEitRrCGV7ngMW6xY8wK1Abc4bTVbrYVrxC",
  "key13": "UP4xnQK3nySZeB6KpiYJHZFXqc4wMrQDppxmN5HFvmZfxurSyeN14dGenrf1ydUUtwMqkjRWGa9Qb6frwt9VDt4",
  "key14": "4VajTAJq1rg47t6V5bHVxFVWFLocLBxTSFSNn4PCAV7XLfbUZDAPeqmY8qABqGUi1xJhE4PMna4vK3EXPC6tKcBZ",
  "key15": "BKf5hTodLGdYDJ4UfabxAp6jJbcqMFJ5yySqeo3Hj7SCHYeXtGtBbXxSRcrGozyD8ZcZe9N2RGWkn7JtNxpXJUm",
  "key16": "2P7GkvvCYm3j8thKL7SquhEsCqjtLqg2Hhu8KZ7zQk4gJwmp98hYfh8BpUugtLfUBaSc8vZ9o2H4Q5mx1GcKC4zs",
  "key17": "9aF4tCSswCvZmV2MXKNDWVhezvBNhL98S8Fai28Dc6gqpujbBATTw4TFbf6K8VcAnUZT7Gfis2QRcgb9TBG5s5k",
  "key18": "5fUCBuUFA24dUsB4kvWBsAuoPsdeZzhTN9fy2w522RLyjmAu4GGvqD5Fe8Fc6ruaw7mTwYSycjJQ7uPrLNsVdBGH",
  "key19": "33ZqVFvMwmUp63rEr39Xo4SiHX6HoJyC33jxyyunpH1WtvgbLjPKUsLovmB1ZupYd5a5SiEaG7TobjaWPH4JkzG8",
  "key20": "2kqdnjnjKH6Q341c6gSCwusHRA4DppE3YDAyL77gbhhsKm3DhV58yYodc4gF4zjXS8bmUSkQRkbWkkdgE3Vu8Em9",
  "key21": "3ivD4TpBHnoW9bPC5KJD1orxhaGQfkYH9W8TT2FXh9dkC8LwChYAoJmQmE95dMJQB1BWJ77VRMMTqorzxdE7kQbW",
  "key22": "3Qi6PQq28PToFvM6MzivQP4D7BWKU8fN9PvwxdhnjcueWUDwT1hzfQ9cQ5txAScomUGrsqtRxwwtL97UhcJEWP91",
  "key23": "4fXiBLYpG2eM5WZ4zsTgPRN82rnYwU9WoJujjqt6gEtFpVhr91qKA3GFj2imYDiNrbRKtNd8gudKqLAXPMuVjBV7",
  "key24": "EGC9Ha7ckme6amC1gTJ86GrvBisWW6EmRXoAp268YJdu5h2dkwYBChASg6oCP8hN68wQXHs92oKWbfRq7PoJa43",
  "key25": "YEtVd2ox9URJj2BoaDQpJ7oce57e61CJLxMSyGmc7esyQjYZUPTXGCjwtvSkFFxDRVHjG6a5GYF9AodgoCgeXNA",
  "key26": "MLxWFX2Sxga88L6mr1L1oZW5LsUy8mjqcL1u7QzMm2YujcghWNKvsrC1QwJPGkNNQR25DuiktknBTWw7egcCx78",
  "key27": "5H7erEcw1b5fQK8pNvYDNghTswvU4R5VJBDoqLBDq868q2bPGNv1vxEVWim9N8ZwVc5rrY7JPkmgB8rcxgo6o8kw"
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
