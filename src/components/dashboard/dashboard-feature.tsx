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
    "2TWgC3ezMqNm5kw9PgPKc6NschqVjqN5V5JWo1HpUGQzE9Bx1waNs92X1RCwCxRURUyFSc2hzru9Sff5rHToiQof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ruogv4DYypP9n8TMyvQCxYm5vPuf1cjpmC1JmuxuPu2c5jCAmA8Ci4C1wbMdVHgLLJYUVLiiWZbtBzBCzdSZhqu",
  "key1": "64NCx1f4RrK4FZMQByox9U6NtBVx89EAAUb44X5GjhH1YC92bFqVPjZkJzNpFv2wgduMhZVtesZv5vd6NxfePQkW",
  "key2": "UWeHF915aRecJL9h85WDxViEFbvVQtMU512Pz9FQALn2sUexDcv4FhtjuPuzxyQgxdNcrun9dwrTTPitP6shoaq",
  "key3": "w7FZ3fKFCaW8aPTNFCMVpoACxCqXAvAqzAVE2fTfNqHXQbQiGu2yFcdAP4zGLwXLofwkFiARP3nbWqvKmJqSQmS",
  "key4": "2DxP2UMAvkHzjfkoZPrNZRRGExbKJza619k28pVXj1eRvRmkQNWf1N21ZARPLoKmB9qbLMrghJPdmj24qBDxqEFs",
  "key5": "4SvKPfzq5MpAtCZWnCjFFA5tpy3UUD8FrXe77ZXZZHuGy3XhuPiCd4xHv5xCrb6Nxka61Rw8Dk5UzA8Bj8gMoUcq",
  "key6": "J67AAHW9XFLYBFrVhNonqtoyYA4ruNFPUtg34PzVTdiCXRpD7Apz5x6wSoyodCk3iPeJFvYQxqBXFtL6uk2bJRd",
  "key7": "4hvyauwqBNVHWnoK4LtA5uBUudt8CgJzYaJPDLZ52DutkkqausSAKeauHzemTuPVbg5HB1sNYWvGqWUZ7BzbESKP",
  "key8": "QvuUtiM96NAadksNqQdhE3n3goT4c4Cd6uyRQ5YVbHKN78JcinxbvehJC2epQQnJdKfWSyqrM29oGm5XtkGV5jL",
  "key9": "4kJTwDcm2qVjPpNaKiTUSubkPUxB38FmUeMrZRVcfXTamyzMpzFFQqRfbTQ73ELiYFxAo6DhMwHxFE8A3miMyp8n",
  "key10": "4DjwAGpGiJGkNLXFkNZxj7PB3r8udBeFYbAQjoDFZANQU24Vq3ibEeEu3e9sEeRhxxVfPuaeudojpv5ciN7KRBrS",
  "key11": "5wMRhR8gYHuhyqhJe5hFTWfqnrhRTpozLwCM548GjtaMB1U8EMyx8uQ98z6z4xWdPAD63uDknXYJPTHECnTh3Wdi",
  "key12": "4ZEjidM4iWXTjpBErbFn6FiR9gs418ux2QQLawLYczNrVmKabF8UaXfyZ22z2vzfaLFTkW4syCdrU5b8aFdtxHFg",
  "key13": "24XATbYRYsGcgBqxwjAdEw6NmvF3M2nWGzF3wAvechxrgiGB3SftJSQ7SHMagTLXuxZyABZgjFuvRtYGECHybozj",
  "key14": "3pJP3xq5Wc6XRC9LWkPvAvz1G7CePYBn5JpaPvjWjerdB5Ecteaei88rH6Xp6Kb2mkg3nSSc8ZtRQ3eYAYD7K7zQ",
  "key15": "4WbB26fSnNs1NSMu9XNoEcENAzNAxWYXkhAdsvMwGp6YgCB6LeQ2FdgDBJBCh1mWLqyjMTuguyQUAKmdV3PHEuGo",
  "key16": "2EUdnrU2ngXHB1kZnNrvPAFFY7YrJiwRVNqB9E2JGzDicrPJU9JdrxLqgsm9L58S9ptgB39kBFGfEzkXx2ZmFLKU",
  "key17": "mwciefwCsuAc8GWUjNv3tSmF6HVQdrKBx9E8aRAetaoQP18oYdcVeNyNYk85woNY3c4314KDs2ZyThaV9tZBLZC",
  "key18": "4wUKW61UvcPxqVEQ663XVYJMynPE9yb6fLMEgkUmmfb88XNF17nD8NUtzAcs7g4EAHyNzstnMGXJWqKqu6WPUC1M",
  "key19": "4Gbvhhq5wj7grucih6rZ3PXjtHDQUKHCPbxrzeFpfxFsyMgb5ifdpnmZrPSK3FeHL5eDjSVU4dpWRnjs3QPwciGY",
  "key20": "3cVqzLHGxdghnCTxLmTNmSfkDtmbSUL2NCmirbjsaEWYN8z48vf6jiT4t3YjzBSccfKcsP8DFQRf3dzGC27LuKA1",
  "key21": "QXSPnJS6YwXQHZcyTggby5uFQ7Wi59RQK1jVZ6yvj2iy7V2hAmUm1PkxRSUBFEUazVuFJfT1qwu34s1S58KgCkx",
  "key22": "D2Zqk2YSAkyVwAwwptL6bQYwnWpxHAG3bPF1KoHRJB4pNVgA7oUnEBhKxmgxYomRs13qbaufBYzDNi15ZmMevpb",
  "key23": "4JGuyPR1Cmy7JV3b19j79NW3WjBeQhecMDkUFWTiUQnqHopDsVxqJqh5iPmdykgUaQRkKKC7yEmcNTchPAFJRzBi",
  "key24": "33o4Gw28H7uPkzdzab7WcUiF4XodxEirfZC17qtC3AX7Wn4Jyt9KdKXosVRh1UeMiFxqtkALbpGYkTHLVa7F5M3D",
  "key25": "dvk43BtuAaENeAqy8jBonRP5LozMte2T8PG6ZvauwThgXcxVBieB8TvxvfQ7b7CKqUS8eUb1JEdtTRCYwwQTLyz",
  "key26": "ZEVhL7ZXYC4REK4xCsNQXwicvRfB9YwqYcxTzKDVZ2msxsPMgxJpRR89sLymHWqr6WcJx2rbkDYhuwyJu5HUgzU",
  "key27": "5ZSwBCKmD1KTtG775UhkXfGSmzRsRKodbmYWAZW9SNQaFk4uk5EnuCkYPFcj66DNLX8qRr8Tj1KB2nR7WBBcckE2",
  "key28": "4ZX8WnAUoacsqcFKezjdbe7izZQhTvi6Um6Px5pu6oiDdGUZtuJQ3BMH76SxcTb8taV8JamGbQoNKHtbRDuW4bcQ",
  "key29": "5KXJZmAKMM69DiTKiTv32PAtAjcSfpLUMBBw4AHJcyuC3DU1FNwj54W1J4VD5W4vFqZ3PfLyFuYJEchbfxzDKyuL"
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
