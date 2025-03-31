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
    "xxDzicC3kT7EYwkDJf4zJcuHmATNQyXkueSNwG56qR4ht13uEpgrKg72Q8ijp5h9kQ3w84wxGduVgLiCAaEUNok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zpkz1ZTgBufNP11wEwJ3DSeN1Y5Vf6ubjwYvP9FXE21Fz6WhuTnAEwPzwsPPKwwk78bBZNGkjit8nvneXCitqoY",
  "key1": "5qCAhJWuZHWrnw1GkFMU7UZE6YHQB4fpZb3o3QQRR7KzWjRoVAutxPW7eKEVyqsajWSFzSW6v7XyJTsZP6Fv9Mtg",
  "key2": "2yUBFWuwGkP1Y22qZRQdTiMhivah7pYAWYbCsQQSTxF1gTiSik7cqUJdNkwZ6x4m4Gr8DR73y3WjXgxA9YMe6q7Z",
  "key3": "5msHGbcDQwmjBXKMsK7Rf8zpgZjk8S9zT1UdBYSmr5rF9mLCF4ekgokmuwrdSgm8LDnoNqpts8E7airwSAgbmupw",
  "key4": "yGDRKQDnDYamxUSjbBhmU1fzqH9D6Lc8FUUGBCtxTU2s42hhN3vYUQ93NQSiGNJYteGCTF9ztRETL4DxQewfPxd",
  "key5": "4mtewoYGkSNsuVmSk7MTY3uzPhSC4kyPXYm5M9aL9UaTfsGqkc5PTscNY2ayVX3jefpPz5AajZCZjsHffqcka4tK",
  "key6": "4G7usWRNaRtK2JcpVTn8urKS8oFvz8brhLh8cwZPqzQkshQEuzrrYwCGn3if7j9gCugyaSCcp12AEbMBD7nDJTaU",
  "key7": "3WDhcUWUzUPHwg7NqDuoPhkA5P9aQLyFLS747Xs5HwSVA5CSb96Ds4CbMtbqxs9JsgxgQGpLQALzNyRYZshM4s9p",
  "key8": "4B7jWGf4ChF9PUZ4WaBsBD76eZYHR1QuicDCRMhp8AMN8WsnfxNBLUa78ny5PRRPZk4V9PwhQURhhSwJLuHRC7ec",
  "key9": "2oNkgqUPjFciALw5V1F59VuCSsQNrix1inMkMP2SwZ6YfRebni23T95VvbTWLubKBb9QwJ7e6r81CikW3Wqp5a6C",
  "key10": "CdMAeAUFtZf8rJsiqPYEy6AVVMK9NV5GTRTWJnaDaBZDLNxhbujfR6gFyw5bFCFPnTpU2Z9CAyhEg4Yu5gsWcvj",
  "key11": "4ZVJFwkhGqoSPYRntUGrVYXeu18DdR5PcYnhNtb32qMzgbAgYbtcYhXPGfLqC2dpJ5kVtzkWwvnnm9GZtqLoPoR2",
  "key12": "3xuajd2j9LUwZtoq8r641wPhBCBTYRCDbQa9oQCRv3sziU1KetRd3BTwvCbmEYqgywnkSEFqYuXVpyAxjGmj3Csq",
  "key13": "yD5sa4rSK8iBstYj1L12QTXf6PdkFPDKyWAiTsALk9qJN7y1Jj8RYVJggkDtnsnfSPXDTHgCAh7s1bY7b6R6atJ",
  "key14": "5jJ3TWeWqWAEr3DRzM171TqVvTcCHzYKMAfr1GMXF1FsphLYk2EVG7tVjMJNab3JGzhbEcTJZxFdC5pS16rfkvHx",
  "key15": "2c1QquiVvxGr55Cpn7UPUu1qssur3TD3s48ZAHfSo4fptJm54d5TAis8kuMyN1weG1M8CHEhq4kwimMCujqoogVH",
  "key16": "48hZoKSVqj2YBRFbyZvabkZKS4512EmktoWTqb2RbU7tAh2VBZMHwU4sG7swQjVbqVDNMZzG5F3yR2aACBJfce3D",
  "key17": "xpjGUm6D5TEYZ7azkoCkJAtjxPRWzmfA3jfpvFDZxMp9Qgsdzg7kP5j7RozhkAyVf8z9jo7WDF2F8aEgy6GAiZ3",
  "key18": "2q8b6Xbut2vdMprwEAEBLyegNLBkxvVNDz3tBug2nqXya5yv5MXWYp69HyEsdrMYWv7kv8kG7fib3XzSmq3iwof8",
  "key19": "5qJo5XGjfzU4ndri2aSnYXAFcknbJjMEqjd55AAqfRZrWPajRx4LFgab9g615fAJWGhrkz3kwgxXk8Jt4JBH9nR6",
  "key20": "3QYNfDjmjszKRW4qUEwpN7h6kUmSiDZsqYF7Cz7rJELHmwiYygRhPoihwvbwLLdfQPs5WbfhKF8GZvnC2oNzhq7n",
  "key21": "5n4QcsoyDkU4J4qMReaW7GVHZdBxpfcn5yqxvHakGNKy3UopSyr8rncdQ17o1zdZg4NKEfahx4mVoikdCB2uY9o",
  "key22": "2UFDP2ZHCGdKhaWNY7oyth9kWn9kr3bbEvwY8UdpCUdtzRHsmpNsLypzvuk6YUzzy9r1VmN7skTKgcxsuiT59DHw",
  "key23": "5z4QuJdCmAuvgbX4BzDcG86j3eyfHcudfLsuXCHD6oTuUC2jtwqvcrcc3Dm9maMF4GJmZKyG55t7T8L1ziF3BGzq",
  "key24": "3UXWt7rtD8CFobFfXvkTDbLM5RFA9jPaykomhtKfmmEVuf2zfL2G9HEsg3qvTxSSuPcMbz6qwZZ8Q31mGdZ75aVq",
  "key25": "2Vo2wboUhFVazudCH1rB9vcxYJGF4jXLB1THkzpuQfdici4XW2QCY8gJzs9sfEWxMPwiJhaBZqCTez2hDzXnmPKJ",
  "key26": "rtphPAJqmJGsd9KY4KXGZeSrcRDm6nyBhgXwRi6RPXCW93vTVdQ4YpWKEYQRVZPgVsP4s1ANd1FsqgRdSFQzqLL",
  "key27": "3VuSiKpNBjzystCD6EZdmxcmTDmpDKC4iafmdTQc9rEabQsGDoQ4xrpRahjdXriSKGVgv4mzVUvveSBDT2izKNvZ",
  "key28": "q4A9t2hyeSXJtSKbi453Xc4UBHxkN2kAd7uYpMLKd6tXpFgHr3iWeWXiSNQLrkWBkFmKumsuhQYhVBTnWcRQ5zK",
  "key29": "3P724D37Z3j25qaDrtriLfuC4vXQNtFUGVrJnYRTwG1XhQ6vxBq57bAYw7M7GnsUgrpLhPMVik7hK4YFADzXxH4T",
  "key30": "24VMXmBWr7pu9mc6fwXGDyss4Uk2gy9ECsJSWkUQPMH8BQYSo7hk4uBdPMbQqfpYzwJ836HwHiM2oTnfVdHtqk75",
  "key31": "2zXQosr8q7UnKW8FLkoZGqnkUAspBDogERZJ2aQGjtT26mVitn9xYoSY4LwBJu4KcKRZ1ysaBLP847H6Cim9M7kt",
  "key32": "45D7KBfDoogSgNKKB7LrkV5AVeH5fykTdBVFrw6XnDKnz2AbnafR7xdbMeuoTrQaedPjFfykiMMKnu6LhGrws7GH",
  "key33": "56aduLGRnf38ZNvtFMtHhQRey4YEwcDCT1DTN1kNqB5ch3jZNertj55bBSNmu3azvcNpdZfdtbMeRhLfw3ghFVyZ",
  "key34": "2TZEXgDuthNVRzm8dwY8jVQRsTmKfaPoSkqXk2sVDDxsPvn6xhvwq8SAhJ6oqGL65cKjBVDFb8bs4tugq6xV5EKh",
  "key35": "21r3fBXdge46aoXfYmkjKUTgChkqpAkjFYjwKMp58uTDckNimhiF9kCRcEicTob19xUCSiciMWe2x6VEhu6qtF3g",
  "key36": "4QrhfZhx7f444PZbaXgokGdZjMXMebjKBp7WnQejHTqhpnmVVMnYXre5hm97bXFYfaYcAp8kUxKG4XQhdKRzofA3",
  "key37": "V8hNisjHnLA8iMrUXt9Km8FgfcZiwPQSu7tSS9F6SdTqn2W7riBToPNoDy96qZEnciehkXjT1bcw8YAd7Wh7zet",
  "key38": "3EHFGuvQdvHjNumabcADAF9XegiUoZsjqqLCTaaA2mJWPdDcKLeSjfSmAfW5fMLWonWGoQ2P9SL7Si4vJ1fDKsqD",
  "key39": "xToUZC2XyhiB6w4xgBogDe1UcfJWGR7MtSdCh7mUD2XrVHAVK9uJaCawoGjNkUKPoWFLKVhRZZnAsXGRBthT55R",
  "key40": "3UbzeBtGSoka2E7RkCi8zmPeAg9XABovCFNja5aZdPNCiRVQ4XssXvxvxG3gTbBhfbr5NqDqE64NyhCGvTBh6o1w"
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
