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
    "YXeXb44xjbjBMsSBsmg2EJGZBSxnhitueV5Kdevm3Y7Qudz5FLutwL1w43iAEPtcFMtYUiguQ1ZYb2heQjYj8bn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qW2HELb8GWhqGu8GKDaaHoy6YEhc9MHUe6k7pHWiGXzum7XsPpcKyWMgdS4yap3i6DAduwXvvtTWRJxnv2buUc2",
  "key1": "5gpEzemND1ETe2BrXJdRdKak9eq1xBBuysDyghowWjt9htSyuiDEqUT5oRQnJtdBZWCCtmKUXXRhxFg4q2JjA5VF",
  "key2": "3sE3GFgZCGiomWMA2uLW6VyMyQRrGdZVuhrvHyuY8uoQmZtDgBJCGBixvVMc6a2UqdsPqyzUtTXC94jevKhbJ4ep",
  "key3": "iyVV6Jhv8fVZQEJZtjUGdJwQmL3kZtuM3X488VC2U2R8mvpFMwihhUTYkYPeBLp6ccuVJcAPT9Z7ZQ2QZHb7m3A",
  "key4": "3q9cadPUShJ4H2asHAAC7jEmQYqLE8TYtnU1h33s2rfU32q4MmvG1KJZpc2M9WGcXYrbMkwQRqyc596H9otP8eTb",
  "key5": "3km8NWsDVhMtgF7dAs6k4ks7h2K5ZCdaFDDNHi6BVKz83Q4HFHZtkyPWFdb8Ez96pjpuvU7DB71qRUJGJ8jHQ5pG",
  "key6": "2TdfWXpmJposiMHViYVj65gfJXg5PVrQi4nGVb4WTTLBzmAkzWeeR8ds6gzJJQaZwzXDz4DWetBXvsEaoA86uHUn",
  "key7": "3JkqyHh7jVoEdUTnvRu2cCsRUJ5m1PKRipdgFLL6sf1c4G27wDz92HRvtz1ZnEcBRDhqnckY2TEn1PmXboovbVxh",
  "key8": "2dsaiYX9nP3PkHNgLVruLhVjZ8SDTdSzDSetijXW93vYrwGAERDnCdVGVmawq1SmEwg32vZj5VBfrvJLPBzdLEuE",
  "key9": "4rnEaXa3f9A8XV5ja2MHUjmvcsQF9AadFkz3y5KjTAxPR613x62tYk9eJQaaQGDBVBXQgRF6VyxzAH5aEzVFFZnv",
  "key10": "kWjh73RnC3MFFJDjcW1SbUC41j9XZgULMVzU2aqFTTsSpnjUaTTgdTT9sP4vX1rs5Kayc5LRwGpufZBKiWdYorE",
  "key11": "3BDas17wbNExJyrhq6riXb5dCdEgnCFZfq9S7xNkzFAYsJCPuJouUfiZZY6ejXqXBHsfF8azSrEfUZ8gWrP4fuaT",
  "key12": "467ua2KjdDfTwLnXJfLVjuE3bXPXkdnUgHAYEoyyzx3FPTgwMyxDACbwvHRz4hN2a8MCKhcWEdE91GAWD64Fx8iB",
  "key13": "D8KNb3TCQnoUe17rNnzCJPQ2g1LxUQjKxwZyAhwsX5HLzk2ethruCnVrJiyN6JamQppWdRQx5xnYbsBVuMNWAUB",
  "key14": "2UAQstnHAkVDJuoEg7oZsqJTC99ZeiiFGHDGkxR6FGw5L37meP2QJFGovLaPikzgUuD7X5AQ6vZs66wYid6Wa8tw",
  "key15": "54BkJo46C2fo549gE9tRqyrRS22ztWCkk1shKMNb3pBteqNx5goAcPpQVUuojTpfaYqrw3qeSwRjDkstmbZ8ftnP",
  "key16": "3YrAWXy9cyHLuBTTktCYXXgte8QXq8bUHZnYyXjUfjYVkkftJ4fu9aN3yny6nEHqNNyB65CbaocbVfpkJFcoR5gk",
  "key17": "45NxnQDWeVp1J3eyVehYTWtXQYWFjYmLZFFaSwXgnK92nsLbw8CVRgDADwSr5N9jDx1xxoUSKpHUACaRN6n1Mz1U",
  "key18": "3sBFYpKg5j66WQMAcSthrDb5Rqmax32ZJGScygJQExXRfbSMtwGXxD6msvTmbgfKRapVtUgV8K82dJXv65uAuwRU",
  "key19": "4KQCSxjXQa1bx8XQE4PzdSNG7pAyXKexY9mE5SjEngfbFDcgj9qFMYmJgJK2EoegPFkRfVj7jV11VozhzgTdE1kD",
  "key20": "4i9yn1kAV11KBL9WPQ7XCMoxpprKqPea655NCRi4ca3xz5z2WSGqqFSMdhxpyUq2pbNnfSQYkFxh5L1zQXiKoGfy",
  "key21": "5Fsm8URBfBLByPXvEijCmkxB5uzbr5fyb7bsVYzNjGwoM16RBsSgjGBUocHEG8BoLaPwUKXMqB5ffPDAPQk9qxGW",
  "key22": "64uo9W4hy62pyhmT6iiXcbk5T4hbgDDnA8Jqa6NgtsnoVwTGeztcEutWBf7ZkhwZKdgwa2HtNpb47iK3HPk2LB3o",
  "key23": "4L5bs6N1cRYsUWD35hqCaPGTSxXVrW6DwE58ZkyJMZh5j4qHtBQ3DM2ghkWj2ckX9FHrgXV92w3WPyhzgRhJHZ8s",
  "key24": "3whsU77EwKasGTwQtE3LFdxHkJWRn7HMEnYMmwUjbDhEY4wE7uBmrZW1Rp6nx9SV4fxjMxn7ra8L1KyPFfeBDim9",
  "key25": "4DiKywmNRN6YmMtNnwCgtz6tnJfYtqquDysPTkRni7kp5sLfDB7pgFxw7Yb45S1Gy9nc6NGZXdvZRzNujeFzPnKT",
  "key26": "3kSt3LJUnG7dFH9uvL4Xw78BNF4ZwxB4YnkqghAqb35Ne7xM6rCM3Ubir76ALR2yhrmUTRApJDJ5zXnZqq4Kbp8Y",
  "key27": "3aEjBDp38tijbsSrZXSxSaUmjZzh8f7Juoo8deMw7DcW8L17iBgMNZVsaZn13zTcFNEMYR8CGSbwhRp7TgGk7eWY",
  "key28": "1qZDezv6fFo7WbB8qVNAr9S53ZWXTqCCncbuF6wjhHHT7dFEbXekjmmu29LTV65ExSJqJSQ466qEqZv5qh2sBje"
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
