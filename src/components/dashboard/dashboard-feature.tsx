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
    "59XbB9CTZ6dA6kmAhXshraUm818bPiotEim4Q2q1r7VkX29kHQ6H8aGidZ1owT2imHCgDFt5EU7W5ZtNrpx5ymp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yaJUoJUJXr5rK5P1MqbHDSZw864u3F3PhsANELfFiuygkWBNHwaCpKZmrFjgRHDuHM5jerbH8Jo7G3WKpaUHW42",
  "key1": "5U2AgULSUY51UP5UT63bGq3eAdJ5fpB6Khn8igATk1pjtKQpVbc9jWQYMnr4Pkg97GwmnekvcTVC1n3FEtdu6SAQ",
  "key2": "24ktdXPy3BKDAjT4uYNKYpsCV9yS3LZDkYGTAxCdAkssZRPjpjaMh2KufMSDMZ8WM1mqMzmD5sWNrAdeGbxzjVED",
  "key3": "34nU6PuCBmKx17FeNj4DJEyApT9Wu55pahidvStCD4g5VBQ2n7T6CQ6L3UYCBjFFsm81wxWR8vUKxkjgB7pLVXw2",
  "key4": "5VFNfB5zkAZUc49LcsU1n1C25UT6sCEAfj2W1uE3vSGCGqV3UaxkXXzY4ffYnpHseqwdyDAav5ZmxWW5hk2uz6oP",
  "key5": "2cvs9YfaxU1VcSvrv2kPsE62w3LBh6gycEWz5LdpTHhBNSfj6S6amGctPzX67EsG1qpjUGfP36JGLGM132tt9i5A",
  "key6": "3qyMQoJeMYAKQ8iGbpXPfkgE4ow4uynBfNWvJmSRkAUkg6wM5zPgMkEuBpiSejeVA6cv1eMLcMxWZzzcpytC4SFF",
  "key7": "3PMA2NijCFWg74wt4FfA7DGFRN6F6FfpHVoQAxz6VsL4n1oGiboEEGJHy2AWkuX92MDThTv9TB8GAEHJus6iePu",
  "key8": "3Uxag1h6yYWovcyRkZBPf34fUycGSeSbh2spZAioASMUEA522d6Zv8Qjaz6JZKKCRqqRuzrnCPdJpnx3PdoeZxnt",
  "key9": "2dZJvjspbkFftT6HFnfMc7i5iqnPTmbVfFkpPgnhdpE3Ri3hHezJRJy4S7VPS8beVFKA56eaHPNZpMG3hNPxCqWq",
  "key10": "27LT6qbo98AyenpM33iPLiWuGRhHpHXQkTdyg8eUwmXmcghvg3Evrrq9kZerw2TiuiHLge3qA5k3QXEdKD55RDiw",
  "key11": "57QkJnBSz9mCon8ub31s3R8JbTDZ7Xbz17TCwmqmCHdMLJGk1EECtyULiV5ubo1i5L7ZkN9C2oogtG9KnEhnPb5S",
  "key12": "RHZ7pLQyJ61ncQJHneL3gJhaj2nVRugMDDSc1o9Xo3umg1WwUR1QuGYrzSiKmNBHjLxXywvmtogSdGKQmALC8fY",
  "key13": "5FPuPRWbdMdDqA55z3qXTpi5TjfYUikSYAjpUHv4N3NVcjhMmKV7booQ1iN763yQXwUSEs2iU7Zrm8aMGpTaptCT",
  "key14": "32JCqXL62hUc4HjEwpPT9eafYZ8asWNcsHdvKePD7CwzF3bKYAJ4WpuZizRgW4f5Rp1E8cp31Jmd7yUn7ZRPBHdP",
  "key15": "649QX5r11H7G2PLpwD5pDJ4wHKBcTKMQ6mVkcWFYBRMLuMHE5Hnn3htL8pjMN4aYRFQ4qENxxs2mDME4g1kz8Rjm",
  "key16": "4sx3wHFrMQG2mtJMrVntee5KwuTbmYMSv2BtXjgZdXd4xQquuMRSnLEmze9JvrnbcAhtKk7zsT218XoT7qHCxxH8",
  "key17": "4GrJMv8JBqXWgeRiXh8oP8sh9Z7PgdshaeyJUtDqmHuUGH6PDRmV2rQoeYsK17mSz1NDLxZvsLg7jKFLvxqNBmzv",
  "key18": "5uqf8C1ZyqzGitrkaTxMfRFMVoEa8YUH4GSRY9tyrcZERMW9acjJkvmztSgCFm5uaqeuFVioP3ihnsm9aDgdMwDQ",
  "key19": "5GuRKv7EpoGRTLmptQuB15hNT7nceXL4p1Js1bhTeyDZ5BPDUwLQaU4uzxdaZzNfXYYWT2Ts2QtK4z2sZfZYgfTT",
  "key20": "2QpDjZgb2PgYN746GT2yhimYS5hRUSpSwKBXyqKznKtcKDpLq42nhBR3PKydEX7wL6Y4Af6L32beMcnrEMao87ns",
  "key21": "5se1vhRQaqJX58FGETHFxFkkVWinWnm36dAr4K6kExPb1wKfBKH73w3USMCasdoapTaiNPE72s6yui5dicQBjp2F",
  "key22": "5b1uS9WKp7Y1aJPFd6iVaoZxi6L9JBNFVepsgAYULmHWwVnfmfFN54rqFguvtRupdCevBqmWq2LvQf4WvgFob5f6",
  "key23": "3BmkEfHh9mNqmH23F7pCm2kF1o1c9kXjdb2FSpb6BvxQQJhf6cSv1VBXAaNi7J43icmvzcmCyy4pf95LvcFtN2hn",
  "key24": "4VbJtqxnhSZXgyxQMf3zexdcbd4Dp5KJRw9B3oXfSNk8sxBzkdgv7xoiMKGL3isW2PvCtPQVfPajbfxPrNGmKNnD",
  "key25": "2mC81GkdsxKZeJykxQMqdLiAKx1VH64Ns8STwUBUDhm8QytGzb9SX7YpSDbGTmLj1KgniaMBxy3G1R32bFoCijgp",
  "key26": "5Tggt3bzVXXDCDmwoWwHVeYEkfLpdyYeeQWp3k8RHS5pkrvRxTBkKyYxNTLF9icKboQe8ZmbjCpcpwihJiU5gBgm",
  "key27": "cDVtSyzzWPuJppxtxE28FgR43UeWWHqQ22rCMDf6KhKyb2vYW69ba99kKxgWjdPHGRZFqvmeFekwkuuQomWiGig",
  "key28": "24JdDUXEcHdDUPd181psit9MFDjr7L9hL3HYg877uTxmg1xsQXxhtnSf7Wg34qjkMDoXE8Ww9yfUMJ4fhqtrSPBp",
  "key29": "JGibAfLKaHuAMgBGMNhmrwaAQceCN26mfperpYtAiTQnRnSZqV97g7dvHbiDi2N7kzgMdB5dXoLAxPouf5gsakH",
  "key30": "yckvnJ32p2XvJ6jpxg6nLSXsrMzBsWEJU4FFBCPbGLK49tfYW3PZ79q2SYTiRa3QGWqoDKgxxTuA9hkMv547CQb",
  "key31": "2znQ1z8mKwpAusnB8o6h7Xw5VRS4ethZg8ZNN8jLPWmC7EkR4StKs3A3CxEBGyjrnqGRG1ZqL6z73T6p2JjV1VZ5",
  "key32": "4xqZazswhQyJ5WA9j1kuCaqTohnwQNKXpVQ3X8tJqhoLjx4jo8ZGkxA5HXfXDhF8L4ga8vbJNtLQwDwAs8ELDPev",
  "key33": "4wD69q4BFfwSJpU1U9KdEYG4t7Q5ny8EzjVC7oyCiLs1JWbkRLtp8TeLEm8wQMXmwp3hXgmMzPnphKVqpiqGxmpP",
  "key34": "2dAqQ3etEszMA96La85QZH3G6Nzu3sBF3BF3mmQvRf22p8gdoDH3TabgPFZQ7oo6UtFqm49eCmbJdFTYESbGZHJG",
  "key35": "4ZYWLTs1mHa5a4K81PYPMmY6RmwEVkuMSVFjGjTjNJxcTuacEGy27CEvy3QmJoD9mVkHVz7xMpVtgyDdeXaf41Wb",
  "key36": "4v4er6vix5KxH1AfPZbHZoBhP17dxovr9cZQvkaNwZy2Ah3oWpP82zR4G8Rx4nMNJufW6niu9RoSXkKtoc7ioETu",
  "key37": "3Me4AcAgxjrpTDene4XU26pqKQQDCmSxFsvrnu1Tit8RGu7VrpQZmDcgLr8HLHFGDLxkfJCic92398e86TVYdRP9",
  "key38": "4Zohh6mSq8dkHS2jrEMgiv3EvBfS1KMhE1G8tmnAGf1Gz8NGipfS1R5tgub7FQDuXkvEVwfGh9UzPeLyzvcxxKcD",
  "key39": "57ZQXExyWbrfbT4cCmeMcfJbnWSwKV1UEygSXZ5GcHRyRMZJupJEgVjsnzRB34RtZJvMQtGGWBJChygNoGQ1bZnz",
  "key40": "3eLZq4wDXUA5PYg355dPqAaDTwePPKDVx91fBZhdzEbBSsof5LCzNMxLLkw7p9cGoyoSwEjtb2zyG6kyxgz3y12C"
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
