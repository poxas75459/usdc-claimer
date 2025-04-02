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
    "TL2AZy4Y1qvcxXBhRgbgbrcWVHCyNpyAVH4LLQzquGkzeiLmRjoTJYdEiZtzSm8SHLW1BLBC5Qr5wpJVvGK9rrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g82noBaAnYeC8iqhChHHxDoM8m1poZJTNWAyrHfKeX4MFqRj35jcWqkBaSyVsVqWHbZBxXiYks9BrJ4zoVswaWr",
  "key1": "43fxeQZkCWxYEZuVkBFu1eSbjh4RvMCvBFX7fCjq3PwXYhLz3jK6irLH4diEKY79Bm7PZhdz6BoJKZHp9yJK7cxG",
  "key2": "55ZiFK75HmPPR63sASFQApy2PLyyTYALSeUyxMjZ4Xf6ZXznkvvGTN2XyL5FQGQYibdhSMLFvuGU18btiHzhGhvh",
  "key3": "2xbSY1SrH7Wm46R1JFfnbewDL3xXuQTB5FECpv4awXQuCX21wHuT6K7qztLzXivfWoY7npANWBydhHAfeNvYPk5Y",
  "key4": "w1QN5WEQ5k1NWMHL8jEfu6FBvYNTb94mC2XppBcs1mCu7XR4AWbDi87RNLykzAMTMihABFCuvnCBS4NPK8P9o8t",
  "key5": "2xHXRcdkXYdCCGmqVL5D4W9S4jZVudxs8PgFjkE1Y9anUo93NCa7yrTZVJHpK82GLVwRLkbAXbmvoUyoa2E9B7UL",
  "key6": "2UyFSq8EFT9SRiJygRsW6sicKoNQ81NHyBZv8Jvxd9C2NfwWTSS6N1fottq7F6mVCzbFu4YTqVKajjm81BHECBg3",
  "key7": "5GPiqWnZCrAbVboJ1daHz9LSiEeyzhw7eztevmgcz74MzietbSSqgt8T2P49hiYvVQMrNVdMrWshTfvt3DVV5ahr",
  "key8": "46XKdhQdLANtjqz6mYJHFSdBdX5iNgemE8nCtMPmsAYTtii72fQjPgtkzJRSuVCPe7eLotMX1LRF2oNyJnfh5gku",
  "key9": "5AqQ9WnkXEQmaUCPNjDnQWzMw6DdZ6iePTEfPwGqQMKWUpJhqZ3EjykcuVjuCJzS4TZQEPhX7qU9seCVgSuNyMdN",
  "key10": "8dnvkkmKkcxcoiDD2utPgUXPsc38Qhu6vKxRmXAh7XVEKRCbXWECnmamqU19BgYakLHNztkscHHuhn5L5YM3zMH",
  "key11": "2R1W725QPZkQi84WvdXpgm8azpVE4LUMU1EcKur7r7W7utA91Z1MMzGA1CvM3Jm69xLAHhz5evdqftKzGF5GzvAT",
  "key12": "H3jTYvqWs5WPKdnFgENUqHof8iM3h1Yw1jebjkDMVvjv4unJ5twuK65bQokMrWdEaxYE6zNnWzBAGTDnhKmHTaG",
  "key13": "2z3NfcugjXSvGPYwoW3YkeNTmQ1zH98PJTrd6m4sbEWZapfENRzfCeaEHdTUfDhr7XTnuVcNKR24DiZyWmabUcJY",
  "key14": "3U2Z8rvCya4vxq5peJUk4JH3oqNUsCmZRqo25RcmaWiWXDUrjemPmfvpjSe8U3qzYKctH25q8gph7EC28GjuQ3SP",
  "key15": "3dHGQ2ksj2vQ7ADj36C66Pw7RbRQYCStLwRkHHPkd3gtPNHFGzvY7fSdyH8gNc5LN3ResFcYt1rogjPQFm1mSKpr",
  "key16": "2biouUz78ZEVuC9nCFA1a72pVYrNScVRdKB3XktYk2x6nVnchUtfLXsqDLs9DWhJc6eN4EH1tuq3jmz9swhEFbPS",
  "key17": "2UdRvsg9Q3kgytxPcJCczHQnjX6DqRD8LCeMtb14LaNXVjcJEfm46fzgKwHbLcJvWPy7eTt2yyZw3jREHcUjAwjj",
  "key18": "2rcgszzj4K8BkxFuvToVCXgVExzsCaCrJMmi28Mf2nRaBCVAm8M2yL3SZbXUzGe255LVZtVjNyVTW6Tnd4DfBEu9",
  "key19": "3qrbE9WWjet2oHPYy51Cxb686B2uw4hQ7DWsHEmxpr4dj1k14ci1rCqdK8bcDbJfnSimmNbKx5CqzweXyzYdCAQD",
  "key20": "2BHhsidRhXEtPZAYuaBqFZogQAZbx3YDx8CbdNd1hkfWhmhcsSN8N8fwPrDJkKekmfGYSJDc9wmi5puv4X21F8H4",
  "key21": "2ppLxe5UBXH2i9jm5LD1uEeEx6s7SbbLV4zy3G89pRiFrBk4wmoG96jK8fVHGdMy3dEEq3KwTKLYRPRaJtsmqhdA",
  "key22": "2yE6LASjt1omWzwtconXFdvCjZEKSSWb4dYtHEaTWYCCJtumqbfAKma9pSy1S3a2Mk9rFR3KFw3oSHZ29CpXcnQB",
  "key23": "JRfPPMtxsapm46rX5coXdp73UhNbCbSqT39m1QN5CXxRRZdkiWKjxPKCTuAeupifvpqWnjzvkxSCaU664ARNWat",
  "key24": "36L6ubr4eeGSkjD1PSVpaLpLt7oicfab77q8mDabkwW1daoSb3qnzTo2rCwmM39af7bBpLytCYWAAQsSPHwEVCks",
  "key25": "3mDFjon8ebwATXdMwzbxwbfyEMeJkaxj9QZoCSGGW1WxgHaJddn6Y8734MAP4tPowdSJ6GbcUUNfL3PzDLTf5Axd",
  "key26": "2RCj7F19VSXiBNZKxTtqeMo4d3HChS9iZnRkGVCwikdcesPvsWXUj3d9aNf6qvH2YeEGgyQ8x2aZjtoJ2aeArCxS",
  "key27": "fL6Vk2Wzbrs2nuYmmmnJ8MppcqyHZPJpV65S7S56ZAbtiH4Fw3zfSxuLM6vYEkhBXSMrtcLNaqwwcry5ChfikHZ",
  "key28": "354FbNx1o2LRvmX6ZSSEJyrW92EtHp1fFTLFX77B4c5TyNMqyh2LiwLGZyYhbcykVakzufERkq1QhHRFCyRcUGjc",
  "key29": "2B9oDEUn3nfKfKg1Ka8YuSyE5YE1zvAZcPPhwpXQRwYJ6nViBw5wjqNEbzEQLaxYa6GBQcVdrY6eCibMvEGpvQXF",
  "key30": "2FRVQPqMcFm9QXXtZbR6AKod54LRNkCmRzLHPzSk4jmRxbV66YYUBkMvVj3sRz5Y6X4BPoGKCewuiPQ4ZVG1vrRD",
  "key31": "67DQe99iRKWcT3J5Bd7FoQNk1Gi6vVtsmDuAkjnf4vnoYSnVB9WCt2mmabJG9qmV2eCQsfmJyPTbvvmPjdagAPyv"
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
