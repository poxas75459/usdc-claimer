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
    "4coKX5dGJ7WZQdPSN5tgVqGPmkjdtNa7RW9pA8gR8LSwJ1wbna8t8Keo5Q351jKYQK7mQ3HF9ScKTuJm1GRKQjjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QzDsC9m6pNjQLRFEKP5kv98ZDEJMsH1CrgVPDnSQ8u4ByWTcedLqTMcG6FRSZwLiiqaieYdojsa1zEH3eTtxvEx",
  "key1": "3bjFbEsXvewcof4iJHr8B5Mar63myv6wtbFysbEHYeKRmznqDW711JESHssAEMQFTNfQfTJmXwgY29RcuH2m9EbR",
  "key2": "4qos9ENZ8FUQnUhEJiKYui6Vy965NhNNxh6wZ9SkACzueg878yDjhCZ2hbpK77LzPomxmMHDR43HRdyKetMEYSXw",
  "key3": "4AZ63R8uXViT1EkJvXZct9ZMu89HTFAcu8Pu4zi55i6ZMzka9RqrEeZygtMePNs2EhhfMMBkgNKUnxw4K93ETpLU",
  "key4": "5gE5SLCrBMPyBteRstQY4ByKb4FZLudW1oJT6g9JATZEX23126v6YpBxk8vKFRqQerCmpcEcZA7DGQ3pdJreWHr6",
  "key5": "4S6qKfht8oSq2ktPPXnNrLXkr1PkApaKMjTDUotK6AsThW5zHx35FUmp9sWXQFodSeGgJSQF3cdToy7Yjxnoy3DC",
  "key6": "5QkFLRffSjYE7Zjpu7irhAX5QEqBvFGFaScr6iYcPRYp7mf2gPdPAcmefjoaPgAsyiuMMpySvKcbKpaHMywpnkTf",
  "key7": "2MPZ99fjkLfZ1bQP8cnCK7wutyYd4cFzAb8uduqT54sdDr8EroLHmTSyKEDzNcPHy3UvD5reRJ4LzxZLHYWegXNu",
  "key8": "2TtpptHzvrDAQtqypwD7u89cpcu9E2z56WKv7tKupptPMWo9yY8YPZHfDFV9o683cx65Hjbcz7sB1zYcDMnY1sQu",
  "key9": "3PHmVxHzsj9r2ctLwiue4vr2YHbKKyq4PUGmJKKVo6PD4KQC4C59azgqoRDN165MR4sJeosN4GFEfYvJrYgqoZBS",
  "key10": "3wH3ccPbMqjxQY5npsfnQzu54eKHDgDcCAVzr7pLPLZ1xr5HbQxBBcfsoAAQDb37jF8aSzcn3YGhMVxq9aVqeXxg",
  "key11": "2hFUUKeXWG6ESEEpe2oRdkX4ZbMFj5eTdB5wGUfdiu4BfdzG2D7fPS1EsL2nWzkmcyMiXTj33eU6xd87zuzc7Zbg",
  "key12": "5wr48hndxqsMpL1k4f1fYmJueQ27MFpLCVUCNZ8zmcwyYVRwaC9KsTePZ8xCxD7msJLMKc1DWPmCBpkrdXh6T8U7",
  "key13": "3aC5oF7y5VUTkKAZ5r1CzHBdrqAQTy8WQv3QtLwGPe7fArtLhp6ieSFh7JUutPKGTFpHvyoZSgDuQWbAVe1hffJo",
  "key14": "2gngtEju19oEwJWjdqF7m7zDEwoaRQTtz8GN38uJqfZF69wRyaP8Ss3o6pxXnPbTx97PkUzHWQ316XMWKaT3UwJc",
  "key15": "4isJrS3RiuP64txjCFPM91AfTUdt7JBKMGSXkBZQUiqX17ZuJd1pea1Xobj8zNbBXxrukarUMNBdbqx9XAa5U4Vj",
  "key16": "58WcVTaQbYVK25NP6biQjw9GM924v9MVLYDZn22JEwgKwUWthZqYFdk2WrrXwNPAMpwvnUyB3oJm6q6axMaE9Dw",
  "key17": "4BSJRbLpDAnqUjXEVgH5yUMjJVnG5C3eekxmyCQjCTSsk6M25n3C4G2Hb6XU7QSnQi5VxW7JKeJ7JrXWKNr6dSUk",
  "key18": "pNHEJQXUdxSYYuePu1yKj7Lo7jf83nL1uTCiQPVmN2pY3ZfWykmH36UsrXh3mG79rWt8htY6qBuAuC2gC9aKj66",
  "key19": "8rW3nv1Es8SyX6ibJjWapaY4XdLWM8WVttFcn2oEDrr2JZGiVRY3YLvAfydEnvGyAVDT6x1pwdshhZ72Axvpe1N",
  "key20": "3KYzafcXfmi7L5vUjfDFu3nHdvYDXEHSQBLyg8YwpgaWmhyXwW4dGaGVKgm6LnGS7RpZ5Db644BXPDrPVAoZf2ec",
  "key21": "24fmsMYFPVoT4sgBTqhzEUreZBWES5NjW4NjeHheCR4Q7mDzSSY82u3YHgLu7sGZ7kazYH4YzhxZ2eXu3uSypboM",
  "key22": "59FcvGP711mBcXji5YteRu9Kzv5mFaqTNpwdE1BgWzyKcJJWDBXq6TbgquxS9JkdpqKCF1NWtYwDKcKCFgdev3sk",
  "key23": "3WVToYH6Bm8dAU3pxGHKPLSfBjmEUzDq3BTNVzMPFU3rDX79APW94GoA1SUzL2A2GVT8TpawzeUsGwrcFXTHv8jL",
  "key24": "2ScR1hUcCh5QyXdZqRKBjbo6F5rGajXqFPrMz3zMuYutjTaCwZsKgK2mQJWsr9D7B6GXNL4RHZ2nhNC6BCcWNi8F"
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
