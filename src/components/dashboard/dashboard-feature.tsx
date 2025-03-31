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
    "2FbjBdcP5UyUxpvjkSMgvdjcgQVJENdfsfaqGVGjfebWSpBKzjoZdKBQQChP32VJzPWZi6CKoDpiCdJYVEVDe5K8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XT534u8qaDiLbAYojyYiGCQcnAWZbJhv65cYescBBc1nqTMgngWACqg7a6fQ83YNRshkMc2oU15X5CWqfhtHesd",
  "key1": "5sB7oRB3Rqn1xV7ddpaxCpXbpcQxgfsrZwxCWKB6KFeULkS2GNdxXXE2sVtgNwBCQa88Sm1jzUgdivDTeEmCHP1K",
  "key2": "5FiRHTGbK3o3QK4dX7mcyEjAza2FeXMbpAE9jSGKnBWtfd4Lwg5KXd2hiKUPyhTkKM8YqveSojCFpfzFNXNPsi75",
  "key3": "5e1gnFeGs9G81JQfVZrQfB5isU7aGh5L1V5LKBJAMQADthYsg9LYHFU7j3ctzFCeA36HZ9vjwENmXwkSzLeyMeva",
  "key4": "3RDJCCm5PfRxrdWmWY2Lv7SBYJBrQ4XnArssvXPKgHKpt5ttmfj4pCngBErk8EK88d56ZiYGQ7GTi3kEFoKyEXk4",
  "key5": "2HAzcCnhf9iD6Qff65cCQwEiHmHj6YzGgrRWBcCtdVJyB6mW4WTYH8JqmgwjLTFXVReUYMBfDckxasd6ufQ8bu65",
  "key6": "5vcEJHGGK5LXq1CpPd9wDzdRGoPzQCVLFLa95JSWKWq3dth4gURoueJa4Vug9yDm6Fs5d8wr1vhX5EXRmtejbvje",
  "key7": "3RrZ1a2FvY1bsZeSz9H2uPcSypEfYLYVxwqo428Jg6pKwAffoSuHAbphAJi4P83WZ7NxxrRnppB4z1cZmN5Eqo64",
  "key8": "2x2JWfZEmtzaemCPj98vwn9NKKYXRtbrX9m5daFrv25wJ9Y1LNyWu1Mo5KwWRuDQ2oXzAtKaMVa8wcMzQjMjjinW",
  "key9": "48wNQFYizHve5g88YRmjmKEKw5zucQok5VyD5KDRk2MNSUanZ8oN4KngDpvdwYEJBS1pLXYUVaKmWkcbwZn6TZiE",
  "key10": "fHhHD19Z4bnuidjLfVqnS1c5RPcgt8XzuSW1h37XFJ6ZWd95fadoNrFTraw6TvQb5dvKjLcJqwLXiiFruARYSQn",
  "key11": "4QrAc2DkfnEdWaLNTHeFdM37Xf2cAp3QeFHdsVefDGX6oZ7wxwWFEYCzWGLadxwUxK8sgtTiXPukUjPuSUJPjzGj",
  "key12": "bawUWe3fY7XiDawNumXju81o2RY3uEtU4JDHrQjurgxzEWZmCjzK3thQ5R4goV7isjjns2qCGGJ5K39YyzCkTWL",
  "key13": "4iXCcnLRQZgrtDckJ3H1AiUediSkwyZYUTE2yCLehqws4m4Qjwm4ak9kWraeRkkUyRbJULUYTBWdDzwBEURfSAcP",
  "key14": "2CRzyTRjQMrfy8Wf7qKZjjpjvsMD23xWCKJGSoytiw3SrmAzA7qjZzx3C44LowaADHZQqyhXXsuZYp1kpTMqRMze",
  "key15": "36wqYLPPoKLdma7o66Q1sfttTjwWmGcNgjBXUtNqRiQfMe4WWcHgSEJ6CsYB7NS3ZAkd879sXqvLhFJ1MdXMyPXt",
  "key16": "36isxa3uydGAkBUa3jsZeeAy99SXuSRBrbi4LVtVJxTsNT4HZujackUaDoHjpcAEFMWN8yZK3xER41D9vBdEBTxL",
  "key17": "39zqD7HNbSdbMwprBFuRkyAJdmsNhyt3eiJo8g3KMMgwwYgUNqJRUgwVy7nRnQAtcyDg1D6WM8YR3up4bFc3u5S4",
  "key18": "tsABUbHTrt95rs65dsAFEDx182FAy4bVKVBYgLnA9aVBty3bG5tD2SqV1rDewRTGanSFjhuvvq2sDT5RKFpV6ti",
  "key19": "2ynut7Kh5dBEjdWic8aQ1Byw31qs7bUPz8bR74mVmHQ2ZWP5vMm9MsZ8J7dsvGpjyLzEvXTvQAkhtDz7hTViYA4w",
  "key20": "3MEgqtZh8G5nioUMGwSX4ptinD9HbkRzKa8jUkZ2CEQxTaYxtEU9kU3uS6RbM4XVmdHjGdYvRR2eTMoKWH2rH9rt",
  "key21": "5ZYdVn6eFeKVLvzWDvngWQEUvjhv7eYbN7NvbabFiCWXBRgJJ2R4b38VM1bZsZ2BN3im1hEhDdn2Fgzg4ZuoieoU",
  "key22": "3Nw6iuAq99SazLeCsgARvB1VJmrN1b4gQkYkudDAecsrgASG5ojzwpEiMwcJ8UnKQcHC9oeSCxyePCxoDP4eA3Hm",
  "key23": "3SEbRdb8XJruEav8siQj6uxTHYPrdZAHScn8Fo7gKhTx5vVxZpFY6Sj7hGQyjJiTYjdyvwmaWQ93RiXTjvbPMp4q",
  "key24": "367U2bayjzDuJ4dCHiHtPCzo7n4Hyu5qGkmJL8h8ixRf9bYLW2UWto6fBaoBitneiTuSYGtcDM4fBQFSpDjcs84X",
  "key25": "55FYd5a2YACCFQxzVzieBkCdPurb7ZeU64cYvUTxpisyBfngNwZTDdnNcnavfoWZgogZtYrqhMXuiy24TeUGzRfX",
  "key26": "5go299yqFzjuadb6WHKaJGNFJhpsXr9bKGy7Y44hXedJSHykEkT6nuRq9ipLHqNq6txZE4FisUJrEYRkjZvyj1hX",
  "key27": "5is8U7cxCvqBNzExU4JGjXtH5Pr3YAnkPR8wSKgQLNRQJqJ5Y5MG6wu9o2b55n995NJewUbu4yJm5iBkQ1eCYfqD"
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
