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
    "4L4A5HtZydTV2AmnxLnG7m4buFX2gJ93jjYpvTNBxidPo2heQ312Y3ow7frcGhbr7fVgoVsGLS1RbrZNqNhs2uw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SNc9hywiGNK2YDszWmorD3g8sSZAZGuxqonaxBhoLCj9cmicw6XsLYoBmYVREd7Zs25dm1Dhsas9t9g4aavzceX",
  "key1": "D6kanRyCPS9eCPGrn65sfNM3m3qrzjRjACrWDMFum9db8ULtbYrjPF9W9d5RgJQEikbvHaSTcZex376axkrtLUy",
  "key2": "59stgWgUvhtmQA1Q7QH7qUHHkLwvWCJ4WBsPZAFNuPVsuawKoZ9AYfAZKzLDknGN1Qvwj9UG7Npkubphz8HengmM",
  "key3": "93aQJg2YsEzVGYhzFbTBMcKWDqi2uRxnpUNrRe4Yg59NLC9Ggse3xfSZRT4JwQn4eBMNBGMisfo4Heh2yoWA9iL",
  "key4": "5tk25jRfS1H9jrTt2urN8EwAxgXDdLMCa2s6EA2XST7Wa5GFanAiL6gW3g1M9QXobR5JTGwsCdbBiGybNVEsFoCR",
  "key5": "2EiYzqaMXspTkvtWmCm4AURbHhSrcD9fe5tHF7iCVE3VKWZziPGb1FLd2zzqaS4T6o5Hot2eCykk95W9mFDKaE4Z",
  "key6": "x2vz7UGfK94VowtSrnGWwB7d2tFyknGY7nHgB5avigyrCXy2ZC3VaPn7dzn3pk3XfoxrmqqHzGsfxz3fpvu4kK5",
  "key7": "ExzcAUFiYiafJFhnXpmAhD2WjRX31UYaTYiumbdYfDicZPLHRqhqwjVXXUp8rEXnd2mJVNBtfdNLniJrgnJwevz",
  "key8": "2pMTspfnRch8N63Mz97oHvoSsFjjEfYnAZjAhdVe3hwZANtAvSnAwTFS3mRZcB41HdMdNCYQDDwipmuhhAR4VoXb",
  "key9": "McuYtFry9K3rAm7xWyTUa9SgFY2KBwe9MNk8ErxJYuZjJpXtV8rcYXL667vxLBcnC298y7MtXKvUuYQegny5aCP",
  "key10": "4qKv8nZhvWLPua6sxJukuup8QPPzgh7bqWDe8NSQL4vj7i11QKHyDSutTvgxKLvSqfS9iuVzb83JJCrxT198Lnb2",
  "key11": "2ce3CcrZz88ReXhTXwQWf4fdywL57Mc1jaRRgMhtHo39nUxhLDbnkp4s8ms7Ucm7gyrDwTM4CtR3zcdvDiCRys3U",
  "key12": "4U4W9faVfTwQkJEEXzdkxs4aNyeDVo1pxxN7BKftnCbTHpMW5cyKHuU1Av3bbsPyxq8XpiydCVjZfUG4mwvNUHr8",
  "key13": "3ehZ9jcmUnVUzn57imAdeE78aAjg8en4F1Nd7s6qGsu3Vfj38sh4Kax6z9qkvqqCqucwJDK8XMpcPpCPdodsKv3D",
  "key14": "3dkGmm3oA5uCZJM7bAxp5gTKkP2fQQQimfj3sH9i12hnVK61av9THZiSKkefdHwPUKo58Xx94nLQfZbZPLXmZPxY",
  "key15": "39twCS6MzUe3L5HnWsF76SRzfSNL7o82RgVWxGkhsMjvmgtNEaeE8LZ3ZAHk4h9C9uwG9QyuDjA8TV2zcidowisD",
  "key16": "5kwrCV5EpXH2aALyKGFhUsrhg1HLNdZw4qKp9pz6j3htgnPovLicKHaAENVhreCEmTBdRztoKaiTgvWCojWnLhSU",
  "key17": "5VQBfGQ6nuJij1vhgd8W6GTsZ6jEaozyMBcnc8woBmZJuNjcXn2BKWLfhYucg4s1cHEGXGcS6mdmQT1e2fYjBcc6",
  "key18": "3g3z3ARataekTEQN6UmA1i9ke7uAgfPSPYFMRMszBVThEbuh3hXvcd9Qps3ZMAdUHapQfxJsEZ1jbv3Jp9a6JoPT",
  "key19": "2r1p4HgZFN1WHq3q9oqDa3YaRj7yNqBWmLqdrGDCj9rPJdyuWQRSAwW3g6jo95b7sWw1HVRuEvNzt5LYTnuvsd6y",
  "key20": "2WXd9HVNhbv4vaoxyB6vzd2XheqnLqowzWE6H94Un3UWwf4CqVdoFBoxQRSTBittUDAtCh6M6mG7sf1RwRHvWUt5",
  "key21": "3Bx9U6pQa4UZduZihfse3hk4ckYci5PW5SrXZiSBYqFrfq7GQALEqhYAAhpUhBdeeJr1aephKH68Dap3sDuMVTmm",
  "key22": "2v5XTuVXec1hBV3fnX7fPKj8XKZFBpLBoJwhoA7Bn8QWgpPUxCWN6q2aSxWgdAxTV2ecdzi3KQ6wFBWB9rFQwf3V",
  "key23": "Xbyut9TtGctSZjhUJvQ3Qq3gf2J3QfMZhhfAr1uug6B2JquNW2em7x4rH43q98L2WF86XcmtTNcj82THaz6PC7G",
  "key24": "5MrZTj7YHN9dcWorXiPVj2y1GaUKJEw2WcZGCeNg11AnWq7JZRZZFfYustw9bp5KVrZfXZ5B4os42oF9aRTJR7q2",
  "key25": "2QZ78NMBDbodhuhzmDKmjxks2kFJ6WncUvqQKFfKpCPNYRHU791X8qeaHSzkyVeLpEWcVNm88WzRt4KBtvhHqEjH",
  "key26": "4JA78J1qfxSLEEGKCdZdCDdhP7RNmeUZEAQ6SgRuHUNURmPMZsqoPVqcXyxqpoz2C9yRHiGLfs9ngfv6ptG7YV29",
  "key27": "3MfQfhV7YbxejQoQ9WpQeh22is9PxZgNXKTdTseHJHtp7wA3f42LkaXsrmcW8t7kVh6RGcD1MQxcxywM4vbxCHiV",
  "key28": "3Aj9SQvN7DFG6miQnP8gr5jYFXnkfiR27fsVGdc5BESUg4ggLJupLGdpZxsAqgHNb5qKB7YPJ7f3221HtG1Ai4Cc",
  "key29": "YvBSD4jLj1gtDCcjoB83SomCuRtuqRUFaW2JYAfLqWuPxEiPbRysMb35C4bPg6Hya66eRVZYaUgyZuuB8td96yc",
  "key30": "623BWfPiu8r8SMzUWGZKRmsFp5Q9UwtKuxbRLbGm5ELK9BLCNFdBV2h4dh4KUgSi4wpPQXPYUVFZne5bAeGPeXQN",
  "key31": "2gdZjLFf5KWFxSmuKqNrMPNQgGk6bXJ31kuMfSJBsvpoNrbhaG81KP3R75e1FMKqDX9q2upQvSq1qzEbzXG3vQYM",
  "key32": "3RN3xq572JDH4zbvGu3RoAjWYWLF7HqRYheHCgatQ5MtANV4zwj3euVQnqe2FM3uAZgcxZy3PXg1QfgcScQNZ7TC",
  "key33": "4gGx5WS8oNMhXi5vx5Ppfg6DxQpp6SDZ8MdKiCYn9p1x2LEMtmJGdbuYUqxWM5STozgbargxtAenuu67DipfTpZw",
  "key34": "2Vut2MNsaAt1oYKcxjJC2uPNfsSb6wpXnNTfFhR7RG1ngbon6VSFpkonL5i9kXto4GAkiyLPJcnM3XVAd3DisLn",
  "key35": "4s1zW4uGaF7mETmqb5MBXo8Y4hANPgPuyjqqT7YLoa3XX6hARShapD85QcUTjTzxxDdTZ3hkUuNy6ddUWZDWx7wH",
  "key36": "5N1tXFD2k6aocspZHPh63RvSavzi2uMPeAfdEGxuyjrhnoHfSQYqSYdCcxkNcSp1NtMeG4y3iRZ4JZD6dbv3BbV2",
  "key37": "2y6TUpsnopgPMoVpJe8LUznDxn6zBKkAYd5i4h5kQ8VEBGjui221cY5CWkCKp3XimwTcsA9KAXCzqrRsWd26uhV7",
  "key38": "67KGN4YG6Qxfsao8HjUGR2bSpTnuG2XCk4NdhpzochsunBjKGEjMGLQkZB59dshu1iqqJBwJgkYNfg7sHUJJgyCz",
  "key39": "5dkeSsW2c7EvNpSErMzzo8Jr1YSg22hmv3Qi67X2kJHKWFbxNWo2FYEHHYzWekx9VqdFYHyiK5vgvpgi9FtXzoAU"
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
