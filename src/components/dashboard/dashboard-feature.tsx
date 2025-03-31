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
    "37vShA2PYZCEVPriv4RaEb5CcZ1BdWj7upFVm5wBZbAznFT11bEPcPHj8QBfW8ortdK8C1CzRJ4gdAQMHSbyr3pB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42vqpWYcueDPSyhUTtJF5DnGu3oSzLLzhwKff16faxNkEXvzLKjFBseiMSQg6D8WjVPutBRUmgMoyhrUDuUNjAWk",
  "key1": "47sC3GrbuDxtpt2WBzSWkLWS8VAt9Sn9EbqLbVwdqk6Ht92wYp8LHUkZL6K2g9q43c4A8S8czLK9sitwt5RKyqoq",
  "key2": "3TkDgRGSfM3EaGgyMvphZasY9kfM1TVCG25uT4PSxm7btLekChEMo9U2pkP8EmE2Dt7hgfmaQhVo3ARAgyV3GX98",
  "key3": "2xyHogw51zCBMA2cpyaH5qHMsNgqAyu6QMdzS7h6orsLt6GdaXYXYi2DCfUfKxaV2NbcPRLXvAreg8yV8PdZqYj",
  "key4": "45yTbjcL3YfgwEx2fwDjiVMXPTdn2Xm438d9hQz9Wz7uqgR5oDDkgtP3DVzgxpP32HH5FgsnEj1osjZqnqosqRLG",
  "key5": "dSCNXfPXxk4Xwb8NJzG48Hh7CvrqvBhStLz7HW6BtpKrqBgWqyXGAVTeKkYWMnCoHfuAMSLbdXxZcJ6RuBYuPEw",
  "key6": "2WFzDML1nQHLFefhZXjxFveSdXAwdNTrUEHHTynef6gYtoEXaQA8BXQa4mk3kQXZNXow3qeB8ymccySHDE67GAtT",
  "key7": "4ds7bSxqaff6Scx5xe8hBHAMFo7QJBnmS8vZzYNdyyezbv5A3iJ9s9zfF2Vg3c8x68BgkVbhQMZqRzHGsZqxKAMJ",
  "key8": "5FBdLcpALhoYudfuS23Ek5GGRRH5gQdncTTcTFSYZtKP4t1gL6JePvBEVxeKZzsk5FaFRj1nzVxh7MRvTL4xiHM9",
  "key9": "42BAP5nrkwyvVNX375ropFnQaYCpMkbQTY2fDXNxt2JM6WaNeV68YfoutuZBTc9unUSEnzzqgVK1Nb1y25sXdBAc",
  "key10": "2UqZnP3Yg8xT6pBwPiAhNApCTuAw2WhQHLNjeVg8AyPLgc5guwhCdpyVbNHDoQmM24fypY7vczmT5uqHomYcNbTg",
  "key11": "4ikNKBUMT974FbScCWW33CHmUVSSFPVVVdRS7ELBedXVk5e5XxkZzJRYoyxjRTP1tutxQhnDdmK1dpHE88kXodgn",
  "key12": "4D21fh4aq3mBhVJYRZNLD8rzbhGHJfDbN5ZCxKW94Rzt3T5gVADme9WfBgkPF3VPRzmgdsRTC7nEMKCpWRBbevRo",
  "key13": "48Jz28sfo4N9gtKTNDC8D8JvDkJ341fsGRHZEnDeV2FykYU5tVSwm95VJwv59aaX9iQAvdTEQU2dyQjoZ27SpXf7",
  "key14": "57jzPsUbDybJpgqAgNpGkvqCUkQWFG1TcTgvX31ZtrJCP7QKtjxSKEv6yDcKsw7UvVHp7bDLgt5ZcxyRNRKuHkHP",
  "key15": "3ycz395wSfbmT13vn34DAo2oqdGRTXSxcprQ9fBTmj8CYcir1FA2RLRFo8XkB6tqpSsVUi2ybPMw3sWKRPdjQ3aY",
  "key16": "y3zUmUPCzBXMjAjg7WLSagvQqKZ3FFuPAMJcKsRwZAiqwe7px85q7ixL2MBNyokUXVW2E9E7jmL1o9kgaw58feo",
  "key17": "tVWV9BJxV3NLWSMkzfPtXNevCZLDnEtam7dfGtkLbCUDwysJAtxAG75CUZUDfrmTRA9pRnkQw33QZiUYxr3oYo1",
  "key18": "3HxmTDcAnxHugg3GKPPtWvuPb4JQwAm8p3XC5T59fC7DBBqbHU28TVnxu78Yqb3oxME6NUwRadzYjgXMWnJf5GG1",
  "key19": "4NzM5Lme5JYmAwrCcWs4CgRWYEKWRzYFcfSLZKLzNKSEEi7L56C3FuokhS2AaST9ZDpJ5HVTfwjpwP2jcziTjfuw",
  "key20": "fsd8QhJ3B148o2ANwJwufiuKaSbqSkVV5GTi2bLySinko3it58hLHGVkWgwWtEdF7pZq8qicGs9L63UFa1DwzDZ",
  "key21": "3HYsqoVxgZgp9D9DVahrXcmp1ZwiYPgtV1M5zhMPrSYCYkqYePuztzEpeeyEuzv6N1WXLtzLBZpb6Qos4RUaCVvQ",
  "key22": "4LuufaVy4Lh4PBNw68dkGNTZQroqoqpiGP1kF8oeEY6xqQRCekQV5fSKpVdU7wNS1mhJrS1ZaeJoiLGPfwKcDbUJ",
  "key23": "Ad6xLbzbpUoqFCAx9jNiGHLvNKkkvC6gDQHhpvNKRQX8k8h6SkyoZ5XbVG3FMGk9MmLb4GfJnS4SLDWZWeQ3KP8",
  "key24": "GrRJzAGvcKqae8JXtXyxXPD1ketoYG2CXzUdf7nVXntojvpLRc7QZhM55osqFhgKYQUmc86uS2G9VpHQdYnv7Ek",
  "key25": "52a2mVkoiFZdsAAW5ynizYydiXmUkeynBg8XPbuWYnKi7ezH4Y84rkeU3NKN1n9oSCUwfNEteMR7evkhyZvXYcY6",
  "key26": "2gdS8VSc6g9PVCWg7355dmxYWZKZK5XJYPpa4AkTQXYJZVgiA2S3mnVCdsK4MerfLaLUi2MVpd2M4GUubv1nnEsm",
  "key27": "3po4PVqGSWArgn7UFpMdWicWKT6cVwpYqSKW8MWGm4kisLC4fvDQ3Y44SjKD1Umw639mXST5ZFpQJfy3muWEMZy5",
  "key28": "39sf2VWFxQMbhLBxGTXqDAVKKEXyTeRPCgSGJuGKHZaNqgoib2NjC3NkH5by5gDacs9JF2bYmYkG5oLTy7eiASHT",
  "key29": "45QNkXjwZ7k56QVxMNSb5xKexc3hbUMFhRRHkneGkQBuY9ththWrKuD7Prip2qTGzEL9EY6EGNeYPv2X6SiTAJFc",
  "key30": "2JwdyZvv91ZieVkUAy2FRwTiyS4nruEBycsomCvtGkr8X1hjT2eG5ya11oKxtfCgoSUhqFe5ZHAsRDJ5VTn2FmrC",
  "key31": "4z6GYxNnP448FhDWES589kB4z2xVRN2uh8Ati5oQpqUb5AGBQEeCkWLb6WKy1jwuKNdC8H2YxknBGVfazfMLcQKT",
  "key32": "928az3Rmqq9cxvq9895takyfKR8oe5U34ZyWHQygN8hv8HcRKxZ14WRP8K4BXwFzedsW3RETLS3HSUiCCUUDDyJ",
  "key33": "3hMoFkEgoTFJLs9vyndJfKfQH6UqVfRkFehBBtnQaLzMpuuUW2FV4bVZymiuYRJJsyahVBVBAKzipwgNqQxhXYSZ",
  "key34": "2shyVsTZWMSVyoKZZ33yueVBRBfkJVxr6FEQBrwimR1kSB2K6jTK33B4PscnAtYSVpKF564TdEvEWDeMGdAj4CKR",
  "key35": "3AWykfyjRFhnHFMqaWcEFUKmpw9YL7etg4YE3KELq8BfsgPwXzHkRPAh9YdKRway2nKZE8m6jTYRytqNjcNbemJq",
  "key36": "4ZLpixdMb3t4RLGW3vnL5KJuvqkfRj47wCcVgFzGLf7vh2LeQjzJohrS78sYa9yjyn9EGZGSDWgfUevx9xqhBozf",
  "key37": "4vVZ9Z2osUrSAbdMQ91F5eEBzDWxuqjJFy6GywtCPiFEn9JzA1crzsAKypq3GNfRj7A7FbGPgokRjgvxrmGtjgd8",
  "key38": "49PJhgSfXYmEChVNrjMnE4zA33NNthHVTNMZBvCvB9VhX6EDGHXVgcrhdkPY6as36AoHhRckmosXjSp3qoJf5HF6",
  "key39": "3bGe5m9PKwDkAUN8E3wHcoEbSmeVZ1WRUPcQas1dn5WivDjtPJTLGVe3TNo9HwwjHi2qVwisD3HroxhZmMCia1o8",
  "key40": "2HUe8MsD9dfYG6tZgZNZJbYq8FZankpjiX6SfVriBzYcQHaNMNHhKHxVWN3wv9XWdDjnpoDX2UxNPZeG1dtBMSpz",
  "key41": "2vsbwXswmW4bdT7A3uyyT8NovsbjTuCKSjwkiTP62ZmzP5rQynS6Z4vP8TUVTRwBCVJ5oQqr2FyureED4wHc9nkW",
  "key42": "2RqY8L4RDKDR9aQgnthRTEZDCWsx28AnPohY1xy8sDhgFz9VShU7bALYbr97ZuAn3hBCD991gaKTwNPhevjwFMc1",
  "key43": "e6YyvbFLX5RdFAyTmugbLmjLzri3FyVuvA6p8YMPryaKS13RWUmYCdY669NiZogtNfBCAvJomjYc2BiL5gW6E8a",
  "key44": "45tvPBAuADAtZA8e89gozfMqZeeSQiw3KK4x36c7wRMQq51QqgWXSGDcrMSEKA8sAp4WqcvHaTRRSQaSJUqqtcG1",
  "key45": "2Aa5DxuZHVuypNY6HBNbnyLRn5tDWFBg7BvXEUMkn9FS2RDPoqTMBu1VqZDojjvRanEqUTJx2eXfZL5MukYsmJJL",
  "key46": "2PY7o1CQABKcusgRESDwWSYHQpkJ2kmvh2oEQP2xfmuPF81kwsaPSq9m16nohREFhmfgkaXvhMiQsWCBnYM1H5ea"
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
