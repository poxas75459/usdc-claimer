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
    "4QMX2vntKCUwqde1eWQuKMtZNDVafmD7JVzTm65bkDjbmR9zy5CTTv4FAvZanxtCfKCCxLuvdZgeYzCf5LdCVJB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "599x8JhGgKCBZ6r7xXmq3fJ65iJLaCcJrhERQWdCoyB7MNeHSp5xFqpdWRSeZFeKpvx4R1ifGWNMVRfYLDzVTJLJ",
  "key1": "2dRSYgbxXA9pPCs2CoMxZLNuz6rAXVnwuXGv6bmXhGCQXaieAETZuNFZj75445FvUxjPjRqWrrr8D3kfjBNDQ9re",
  "key2": "5vqD37U3u819Myn9tzDkJEhDpfB3P5Nwg4iUFqn4sShycsMTNxo38Zqm3juzAG9C8zjMdXT9jf72dPniWJkHQPfr",
  "key3": "3JihyyFHd6wHUPUhUc4wj6QiDur1EnyWP16cg5RPSMZG2AAWQenfAAr75xX7zENHkCjVgusy451KG7CHRqwXcoV3",
  "key4": "57MJYH2KJdjR6Yt1gf3BaZtUnCXgnvucS3NaoRJV9k6afVa24RnnoDux9rbpeE4Lt6nepT1hsZtKQiqHTBmYdzVy",
  "key5": "mdNSYE3UpMKBwqDgH9o3ujVQr2axeQqPuhCLZdDgXCwvXM57C3CEsphw5LLGA7cbEAZ22YiuA7sKEyvuM1TfWcS",
  "key6": "5vMCg7auShwKgF17qdpUBs6b2jjpPYFDadTYiX8qxwxzNYeYF4Z3WxFEyGBPCECEyQpq84gYk7povSFbzT36M74b",
  "key7": "38oALxzrqCePgzbNFapNu4iqszLWZts6Ni77C6j76Ds8EhzLM8pox5ThYdtoSpRxR6PHQYncw3QxikU3gpauDFdP",
  "key8": "3sPwQdw2gfBHCXS5XFF3NX7axcLU6Pq1CkVDDWgG4crAXeVpek4v5DFd6mFrWCTeumia2NdG6N7SYj3ErtX2ojRi",
  "key9": "2iZswMFm4qD3WN5uHGSFuGFKFpgB7CRhpx8SdhX4aV7vsDwtKTLJXb2XUMk5MTXmS9Ac3S1dqyWXqNGfGpEokwvm",
  "key10": "4W3Kaz4eDK6JN1VeU9WNKjdb8ch78yqQZou6U2vDK4PLST4yxmEwjHQLHXF8x1jD4jiVXwKwuxoNVvPmoUzzk5vm",
  "key11": "47DGxfnenQtScoY3sM6Q3io62sxCb5JYqx9oCCnQV2hcRGrZpYThrxw8vNZsSp8GpeiNrARauGTtU6LrEPdZmjky",
  "key12": "5SSHW8nJ89qnAdLpZGNjjsZ6F1C5UcGRXcbR6UTinLrXTtm6hNfiubMdsPqucKGh53yjaXtrj7nkNUzANDo1MeMw",
  "key13": "2xGjErxmrcJdzwiMg4yGKCiYScW7Gkz7WUbUVH9zZm51fVDHCKnN8Mmb5kMvfhBf5vxy1fN32YE8gH3ouNyS4vt1",
  "key14": "4UVJag39yGC46WTpFXsiLpj1o5CLPKqC3tp7bCfcRdcP9xFJWy2akLyx3ejQhdDQNMBg5juXcPdAiUwGGPaCvdXe",
  "key15": "4KXZvHmuUmVCgZuvDEa9cPBkfKq86YzWPJ2dhfLQe5jsCuweTo5XsawUzEuxvRXUhuVR4SEqACmVJcohtAsPAQXb",
  "key16": "CwqERBfD9jymgvsLTZrRd3KPuq8TDF8bVqySa64rRo1kQss8Xxgi39AbLqsKLe46v9aN3zBifKR3yBUx6uDNQsz",
  "key17": "4znei6s5aDok3Y7aJfjihRohcVW9oeqzSb37bTCm7cA4C3qW7YDcVkpjGkbg2xj3wv7UnogXuVhhQz3SrBfbho1T",
  "key18": "3dVYLZTDJkXH93YFvDNeVk6FY2tach6KDMYpjkcHgFiyp8ngy9RYDMMQVsriLjMJNditUCjr4iQAmdnpBn931MgV",
  "key19": "2Z4bY7FW7jL8t9nHbmz17cPPgaNjqoT4x975PjD1t9VQ87s6iEq3Fo7NsnPUYnTrfCL5Y3RirGfDw13LCSxFz48T",
  "key20": "3iXvS1Qh8BSxJeACU7YLCEouFQmLKzp8kNCLHVsJBEkYHut8WA438u33SQApbzQtevputi6ZUogiXJtzLfUrHi8H",
  "key21": "5iWC8ghD46K8Yj8oGaWzNsb9qw39XCXtg9kTXjwrr2iZh8nuqC8MhnUSAEoNpvHhYx9Gtb95UefGxpiFnqYfa3J6",
  "key22": "31U7wHQmG1SwjN1x3KE3QrT2LQVvmgF7JqnJa2w3obYbtDufe6z5RAyV7bJxUNotH6AseGu7KtPpER352Y6e4KmJ",
  "key23": "5PsPJWPSYwmyVjAbXwgkkuL3ffsQ6hajMeM3wEBRA2SshPYutY4A2c83iomEUSfh6FVi6apLCH4uXseWXntGiorh",
  "key24": "2mUwWDu6i4GSyvjytiwWvcagNZGKLbmGCir7Zp4C6RND1F5ss4e89mdbnuJ1VtPhQVRFNbYyq1m6koEF5NHJbzEX",
  "key25": "3eABMHk5eNfM6jP1hzCY1oCR6XytBS8mRybZMyD45Nb1h3KsHqvQ7E9gXXWrsSiWMrr7NMVC7pWQVfM9ozWRSTP3",
  "key26": "4DT1Zg8J2s8pzqg3mm8LLX5nqmR7WCwnkMrZ1RMvwQ9MRNt2v9KBBUMMwQiYRAoeDvRpSbKnPMjhKjzs3Rk1DqFs",
  "key27": "Fdp9vpWs837S9EMXgP2QVgwtK418BPw2gfz48r7RQnM5PCD5aUJZ3F3Q5fXHdBeov1C8Rh3FDCYVhY81MHkHf91",
  "key28": "2HSAi6bzu8BVBrMxWvJXoA29vtzdp7X1EvCwt82RNHmXe7NcxWLgv3BKdtRwMuKjCvyejCSmPPxSyGjdSSxpeTQz",
  "key29": "5YHCKgjZKVSPEUz1Ye2W6NkBHS3Y63mJKGHzxvFBUbUXfGnUNt5XWoTJEpkv7kACZXvHcXVGNP3ia72QEPBKaJ58",
  "key30": "5UDdLydG6ujWzZ7XSoN7rHfEbHtzouUA8rxaBqqSgyECpYudhN578BoTKuVLviLuvSPANajrQAqKNvkZu4AAPTfQ"
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
