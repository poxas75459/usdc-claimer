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
    "3Shhnuyfn3cSdjsRTKUJfdkTc6shcAqiccv3Hv2b9rpF9iH1Y1ZKtSDkqRZSLWVFbE6rsGbFS5hQ6cZ3su2TdML8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UXHZ5vmDyvJGzsDhrHUMf2xSktoU9X3CsmskbWie3bcz81Ep7qDHHBprmyA9bSGHZxF6LFodcb3bBx8X2qu98mK",
  "key1": "FgAnnBY9cWQjVYe4H1mAL68cwtv6D7GGKGK2Kmc3rTudGo5VhNGoxDzg5sE61Zypf4yF1KUxbvT3tmMaG7J5rkt",
  "key2": "5wytm7uYXL2y69VbwwLRp3StNwYR87NgmDjDXnRfZzjkvt7TXpEmRBxttYHUQYCnP2AKYH5mtvj7pF3BV6CbG3VU",
  "key3": "2j6voQQQ8HP5i4Ya27tepABehcQLerzZEPt1EXCbRjF2bNvWq1oaErMb4nKqEHSk2j8e8qdNEUNX76z8QDs89Au4",
  "key4": "5SmjEcfBWd7cXLeN33rtULkFa3ivqqTaTus4jAaRvEWuyQt6v1kdN5MwuTfMfAafmNcUEcvtse7F9KDskYqRquyW",
  "key5": "Gxs33we64TKUMGpLHyJr4uZLgsdz12ryAGuUoVyF8CwNjzqyiBci5jziANYUXjRyMrVaw6Xo3QcF5hgW2tUEGTF",
  "key6": "4fjNTz1ExumqUq8pE9VVikp1fqPAh1nCprCMBzQQcKYZckRWdvzJuwSVakxVz5FC7Khdo6haMqN8QoXHaCAgG9L",
  "key7": "3DHfnBLbZeo715T2SPYWHVw2Cx3NtBzbRqTeci43JdAEho6TrZtJqbjYR9ohAHVt3QecTqJqofhWHxe1HoFUsjcv",
  "key8": "2YpvqVCGqu3RqfPz4VhMFEuGp53dgjtQdzkNPQMeaXsvNj1VEfTDfBhP2Q3haehdHcn6VPUT37sLke6ocXT1vFMb",
  "key9": "3MZdpDAGzLRLr71yeMb9UhCYdxZx9D3WfsCompUGFMecMFs96QdAdxs9v18xUrG9mC9gdytvzw6DmubjRCw2ajDu",
  "key10": "Sr763htMc1NhAe5sBXbMCusbn8ACp7dxMVpB7cY2XqKqVbJfxbJahLq9gwqGopEJ5sPX4c1QpPycNKxKodggCHJ",
  "key11": "2R6psUntTzV5MReR11pBG3wYcKviUAEP2zA1VBJNXmXB1DmaqNkcZ83X7RxGDDVnTcVBfighs22KejGvJ6H3TaPb",
  "key12": "2XAYQgdTfxBMKNzs6QDDYA3wLQwEpkD63ASD2VuqRQCVA3R6PZTK2ym965ZqY6LEFv5JjEbQs9J9tPyX4Cq3XQ4e",
  "key13": "Qu3aKtVuVtGfQdPnbe3DdCnXHK3MwLzQUbhGwQkFqr1i9mQZMEKAJNGZQg7tioYqFvVZ3q98SREL64SsiWajrDW",
  "key14": "26wWLnYmJT855a3JepuPYRjXAUG3xA6u4APcfVxu3iGajqK1ScC6ofNhbVzUR9X9enMvMeHCfHAgPe4mTuEPc1XJ",
  "key15": "4LcJYkVmLthcPCqfoudXPfmbC1YC7KJmeJ9AiJKLdy76nCMHQv658cKeiG9hAqLEf6e1giAJfNXooqnQUpefzMt6",
  "key16": "3rHzbFVc86zU2ZWcFFjb3dq1jvEbPpLEBXHeZMPdTNv6mNYFNyP5wb3uywVUPuD3GKTd7EAcAQ4nPUyrFiMbrFvX",
  "key17": "5mPVtQa53ZyDDBaTJ1UBZj8rqUse8xo8AjPWjYUtzzKBiHky327rjtgtqvYjTz9mXXv6XhneL8PYMYDGtuLxTQ7G",
  "key18": "5QjGtTm8u1nNQYdXU3Qt3YrMtXxxmiPGB6cJHAH94GSXHjfjmCnK6R1vZdywje5oqD8zK6g7bxBDRwrzLpSZBJwK",
  "key19": "f3DhaJYd62uq9mPT88tPAB2kLBqzV45JRbM58oVnw4VEXRn1gqNCYQTEi4wZXJJjKBdAxtgX81gLVzkTGWD8Ssv",
  "key20": "5Xo6RUGnByyUztRNNgxszdhhabJRzzjBVCu6FeRfSTwzLXQb6KURyjW6PMQsxtdx8p2kDP8pkAiZzJwVJAa82JxG",
  "key21": "31FknGMQBAbaG6ZUE93ksfLRQGUZKnWH94Fh4NmDZNrpNdCPnJhcr8HsBkwWNVuYEHRqnHEnshrNHJQ1XrhmtxRm",
  "key22": "61J2HAotpT37xhRGw2GvR8WMQEDRzUesZEziMdT8BJzDrfvxnCNLkaPCDhdBegiUorZGFrbZML4DUzDepcJUgbeY",
  "key23": "64cjaoHebkYP4BeFYeDLNGn9bAVarcG4DfX149FqRRppSd3dRDbFgj2gbZP9o92ReFsxXqRjwvcA7ctk9ZRwCj4H",
  "key24": "BEoHZ3EXPs5tsKDQahuER7HzM3XP7kzSww2f4L34JmuhdmQy7kuVNRLct6i1AxhyPHmSr6yZHxC3J96k1n2sRK5",
  "key25": "2wB3BVzgiTZKfSPHPp6sAWHLQ3UnTbUWBRvDqsY7uGow4Y21xf4D64SS4ZDc1ptdQaKPi8kSw7ARxk4FEeLVMLq6",
  "key26": "2Y18keS43JY91dq7wFtVPjgD6e773Rzbnt5fGjgwqRbYuptRvmMpMTWVErNXrcNMNCFPomHHZzMBCNSXsYaF6yfq",
  "key27": "3ZDyV5fSzDpGma7WJo5KGSjxdKVyboG3z5tF9wm83BREVHKQ2n8CjfYTFFrAxcAugPNP714F2A6xCk6zPD1kwG8f",
  "key28": "5eaYAPDFd894q7iCfMsZLvJKKKDJW1bHNysHTxJVSmHhsppA1hqvfWamNRDte7rfia5d8nzz7mmJUAfwQJns6TY2",
  "key29": "3GjKwsKQLjBHNpmTzuJSZmAnnr87sPdtFtbLcfX4TQRXocHLFviMffz8QuBsT4wP2kXQz5noTiYfAhzbk8y719o7",
  "key30": "4V8KYGtFWUU8HRaVhBPPZT6eBHzAQUx1bD9zBjSpDUZNByuT879VnSsqLEC44F9PkvJ45r7ZnVtMvTvpKohNLk5F",
  "key31": "619hT1wbKSi4oKaPnKkuWnjbsPca1ckSAeK7nqGVZd6zkiDQYWpdGzFYYgeGyhxfBAKpCTRRNnUmSdGbN8S2c7st",
  "key32": "ceRG16bKcm9vvMWHs27w8xLUgHyBUy5g1RkYvartTHiXpCBx6oy3v45kpUSbX8bh1ydyNpXnvN6aa6aVAUBPCAE"
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
