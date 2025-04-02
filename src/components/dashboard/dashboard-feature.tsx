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
    "35J2ykzgyeiZEXQyUDhhDTLFKwTKtWTMt2DrP2f8QmRMPELCGYpw1wC3z5mcDZjeR38kekNtkcwK9JifC7DynqKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W9qTArL739N6KiMfPQgiKi2YCmov53NsVP6vgXwuePL9gv618RFhEyck6uURN9YYuPeansuQGDJrAYYaU1vwUHP",
  "key1": "3JVJ6LrJgj1w4exa59XmUt66QCqh7nKjBLy2gYPrJiFRnhANKeabmWwN49VDEuwfHDMbbazW9D7RSjbfngp8GySb",
  "key2": "3sWs13uFd2MVv5XxFcLcAufeoxRFJA2X1EikPEFpe7t9XYEvjqKPpeZaR1jtTWVmuUFGKKu2qzEGem1KkH2mvke1",
  "key3": "2hDBD6jNkgSN297b5WjBJHA5pWWE8ss1mMvfgNejNQTqcfgXfSMEKTGHB6QGyGjiWQFwdBMHt61h3ZbxaqcAFBef",
  "key4": "p1JhgbnFAwRAD4pRe2zXDfZKNqJitLnhonkXqaCzVNwZWK3eXoAPif5jLjT1ex5NArZQiw2Fsggrvm3acSszV4K",
  "key5": "GR2TBmKwAMGWbGCUhEK8SreFK2rdLdgjzoWDgYotFoDVGxBpLpw8JWy6WDM6QpEKtAiV66pj2vhVfZgS5FuDsyY",
  "key6": "2bHnWQRqNCoNrNYZvr3AbtCM6c9Ja29ov2BBPA2Ky5aVr5kENDirLZDXbmiiJCf5s8psaYceYwrbbGAtmPsx92Jm",
  "key7": "1PJARdh4LQaTJfAy6onyVsYDgMpRCwqyjdhjfENvwaV2aUqN7unQa4NfHdRPatxUagUqb7YUeKrR4aZcPYzS5Fk",
  "key8": "3GEbfNkQYcC3tiv9mZc42EBhHULk54NJiXVU6WcA38eELtECHW5XD48LLR8cyAjBc2UWxPGd2PegNTMS6oVDHhBR",
  "key9": "4GeY3YiLVmn4oJVYNECJMntUGedo7xr787jKfocC6Cd7RUWikAvBog11oETPKVVZdHPSEhYt6tf8BMJfVyg5fVJ2",
  "key10": "PLJPgK9DsMmpPNpTnMm7mqhnKrx1k4gt226UE65UAWmq89QvJtNiTnZsrHnvauQ7LbwjDCFSvwYFgXVfNtCemcv",
  "key11": "2LNZEiw2KsjdC9dKL3vWr7GZvsVLcufCiAVXsGHPurdG1gfZ7iQG3AXP8EmskytX2q7LGsimLEztpP3fquhd6FdZ",
  "key12": "2qRGD3MHwcHT1t6srUvMNAeQtxhL2evimBCSfL6Hp7Tw71LWJhp4s34eTVR84WAm4k4cW8rLNPrNnhauKd7MtaNs",
  "key13": "3NuPeDm8NtrYwY5373uNL9qg7cLkvzqCRUCjNc4ZjYmkr212r7XsuFUhwgaX7uaQTth4K6EaTiNDdbrYmrqa1Hvg",
  "key14": "3mgQZw9mEQ2GdnEVHGcpT8SgHncbzr1MKVgqsBJUEfhZGbfsd3NcJL3B2z4Dnu8kT4BDGZWPyzBD9rk741WFNdT",
  "key15": "vyWhw5noPMh7t8jjim1VhqofyA8ufk6k4MzqvponxgqcAGXkckcRxM6qfUdoGAwwP6GvZu4fcxaKccdWT64wEpG",
  "key16": "3TVzYSLDmS8bo3Pe2UPHwZ5XA5RiF5kSpDpoWgkvhFvf87aKv5dGsHed2zJM6fFiQ4bcR1dQzcVqVRn2ycFW7oM9",
  "key17": "2hZyVKuEsBtWC3iH1zLPa3M3bMEhDT6KzuNGgnSxpXW2CwmrVDjj6NHGaez8ia8zBfgyfC25xNTU2dfqPbiwWqZe",
  "key18": "2A98h3F2YmBdLjRFfPkTZit7cLe6GVA8cCUrkfrfzCj67qdkvmX651YhTYUgYkviavpVHttfUd94PS2eeQZa3aaZ",
  "key19": "4CT9cazPi3ybqhfnQF8RDJg17QDUSgPLL5ZQiG9RkeYTZEbEq7bB9CUUMBvDBrxuwxM7TZ1rQPyka2G4KNtjw1SN",
  "key20": "3e1n9Y9gbmKAQJ9rLc6scNkgR32n3ATuWTjJTysEojkg8RnSHKuCyLeN91AeK1ZyCpRn9M26fk5VHQ6yTJZxiEVi",
  "key21": "5r4jWm3rdJYS9AE8gYkMQL5kn5YeUcXiMNeV6Yx66Yd166XzuPabTZKGVraamtz86wcxnaapiKJUnqCQBuWtQDCh",
  "key22": "2UUopRjEq7QAhthnE5ApamN1qvikmFBt8iNEK656Xh9AJYgxe5fnHLVKBh1nuNNk6sH4NJq6E5VwCnwuBKi36yYp",
  "key23": "3tx2TkQzsh7727FkKSNi7mXjVPXFdLyRkzbYBsYptGNKi5fSkhPjhknWjQy92jKT1LvRH8JwpFimzNpe1wW1kFWL",
  "key24": "5Y8tRKomByUT494drHe7inRzJ5a6SNJcqGtH3dDQzC35A8UQuoMG4s1sV2QnK83FtfMb6SrxSv7RfBnKvh1btgWV",
  "key25": "2ANu2utSqL1zG2zYJcmqyRaiGnpHHtkE2xZxhr78qo1hQ7K5BdX5jSnPihEWj22Ak4q6vcV4hEnsDUh7b4mD7SRX",
  "key26": "5yQ7kmP5rakoVJpZB5EZ9g5eB3r81rDoY9hidMXufZjBKorSqHhUuXjxGsyWB9D6xN3eWZ3J9M4nVTfmExbfZmhb",
  "key27": "5sr2KWzZWtRHntQykcYUweTyHHydAkL3RkbJojFUGc4srqeM71TC2QJyPVAWPQvgf5zyWMwkMf3vHdHci4PXXG23",
  "key28": "pKKW6cF6QG6qM12qVGu7VfC7KRQnaoYiq4FpFRCzUPtFLLCXr6G44R6psD6cLK3iULr5Z1gWNTXyHnaegudScr2",
  "key29": "5JR41nnp6D7pvMhCvVjSQNEMLjkiCoWMRX4FaKRFkCDKmB3WN7W8aHLHXRVBC3UXHTzrJRPjGTbemYKfgvvLxe4u",
  "key30": "TBNZjaixnABZUHgksXBJoEn5XQyv7JXqQuLqFCpKXKgJtvT5nUmrSamtkqkPeGDbhZYyK5DeA7Fus53oXPTL49V",
  "key31": "65nwEdbbHjxLhGdt5hqi4MrxDUqYrDJvqUZEuV73moD8LwVEpgqdC7L5q1J3ra1WA7zQvhTfhkvMyf3r1aMJ2for",
  "key32": "5aqu9frebv6AGP3Bp4Vc1J42qtEBpG5dhQ1xiRJkJ5VgftyhQ4LGvbVJGJDLrHwYGAzGEE76gPURM1Xnqxyn4v3Y"
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
