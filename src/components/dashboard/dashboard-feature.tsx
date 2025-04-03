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
    "1jRehipug4jVDu3pTJFEqvhiFtAkB8G4qU9YAmsX9q6xy21JWW33w9ZPUnaTHguWVKivEykcyoGDRAwQXWrbARd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nsk2wrdfq52B48DucVhfdqTfvhmpGvivdQo7kWphZ8A6icTfawpG9GqesP28WWjfqJUuNSUmnhB1TuB2rXebm7V",
  "key1": "3VyqBHb1Hjv5oRMHLbpujjw97xPcoCkhHTcoEzTEjnvbWGYqCbsaE7VjuDYSV6J8x2qYjSE6jGBw3tfHMJo7ddYu",
  "key2": "3fVqmcPnpbjeipZtpVp9X3WvuHDGVPZgyLhF8QcHLszqCXT3swqRvXFATpPeQJy27iju6axZmkoBtNrcGJDbvmT5",
  "key3": "38znHvznAn7uGBhUNGVGkDB7kd2mLnzMLM6M71pCCbNkFBq7iHYJstThLXpF6uqAzexY5NdCbAqfchzCpftriY7P",
  "key4": "2gM5YfCQ435eeVgNLtawS57ahzFFJH88UwRM6T2gpQiqDXiSbWmfuEgbW9BHa6yKPKEMdfZArBKNZ6KnvAPLVb1X",
  "key5": "2oaBXvHseMmDTiPFVDGcQpWBwBeFTtQLK49x8eaFobi1gHhGD7fLGL9bKic6omNgPTzQp9bC49u9i2cb1k8tVwns",
  "key6": "5jXrhT3KJ3jgLB8DtrHzGowrGbL7c2dzomeSz34nn8vnz4E5Byh1twiJZB5jLFpBvGwrANA25EaLkQ3Xngqit1j8",
  "key7": "3dfXaxw9DVVuubDtgxB1oJBhe4duoJn5eywR5vTdCStRFhQEURkdWuXxHpRRq2tBdDvSgqMVTqom9ujQMatsGc35",
  "key8": "2aPuav8ab2USXJi9tUD4f2s92khFUbLEzGjnFfRmr5KL4W37aLRVw5NVxdioVcMVk4RpfSycpavtXs2rNHGA4rGe",
  "key9": "4tvvbk3AkjxdE6KCH8oRWrW9ksFV9GHVq2tj6QmyM8Mt2g3jdQzFyfC1t8JnmvbUeT63XZhGjTmZVwLVRUvXweDf",
  "key10": "44RJgYJJfu5mn4cyRXCMiycCitWHoPL9KS34bPtg9NQ4JrmMSJJf8AradX2F3T9cTSznGMEanmtYP851z99YqMYE",
  "key11": "533xw1s9ndqRPfQ9FYTnUoQMUDtAfHe8KZLgWmxM8FJvjQpfQbzyzxYpL5FSe7mKbJupUvmjsHEf3T3cf2UtoJgB",
  "key12": "566AYQDHDax32W4bTb39QXuQhaajoRHDTf46RpJfQL8w4F6vhEJRvNz22XNrQeEVbHmYxCPfef9vBBx7pPRuCks4",
  "key13": "63uLiBsVKmmAMRKMrp9EmqPwMhPwb8oA3iWRMe4V9F8iaMcE5TQVwGkBeiBiWmjA94cGbDNoGcGGxyRpXa98N15q",
  "key14": "2JeqfSsi4TcMFWfrBuprw6tnVt3yffph7SucdRnJtyLEWmpfXnstTxWcHu41hWsQaed8XzUV7zsiMLF7t9ozUBxs",
  "key15": "5Z5uT2sUntFj2MZcGo12g69sm53R7M8u81QKqALtJArmkX56pGJg5x5DatzgygR9ZhYzBT5rg5xiVigM1XPnKvSE",
  "key16": "P1VPYMZcwFkuKJ3ednU7rBgygn6iet2jVB5cdAxMb9eq1ZdJQt1XoiSGcW4Tm9NvC2bNbhdiA8svXsFvoy7ntaJ",
  "key17": "F1os75sWzSPkUShJ15XQigK4U4ka1hqPyDC3SdtUE47pF9W5RsHYqLEFgz3HPDr8ASMvV5WfBvbBAM2A59K1ypY",
  "key18": "y4cJ5VbRLsh6NFjeR3HmnqZoQGHjh9La3vu3vbCYFcV1JhVfwafA2xYLkaKCbKy3uK1dtzotd56oNer5QN9oAGC",
  "key19": "1qKgHVbf59KrC2YWmv96YDU3XRPhcSvEqfr7S96JWT4zzVoQrNVnVs61hWvcw1XqtazZAxa4S6hqW2WNDN5poxR",
  "key20": "4UDrNnCkidUWzgLwuwwWunR1MmJ3ZvQkF77GLkDrf7PjccuTBb9Pj3J3LL2G2rRdbRysxRjdudWxSWr9pS3xuGxX",
  "key21": "3YHWy2FfRDeQ9ibhdf4yKoPUDx164FxjpbYB4g6w7YopNyJrxyETzZcK4stcnDmSG91u1eESPeDfAmV6rgpB9jeE",
  "key22": "3qy8aWLXTXTXCCPGGaS52nyBL7QHBgLny8LST9BmiSPNcgT7FFmJ5VnNj7o99MBnwinDZqFU2wJVLQnfDGG1Byoq",
  "key23": "4igGH68EGcUgK4sicR1jcZrC8qxTGLw8XcWm7ab42qtFUYW9cn5tYEjuBZ7RgThYsjTXZkn9nd8SkoCCufbEoJav",
  "key24": "235V8VRyjedgrbax9HjUXKRAPPbqP3vnSGFjUnGBEzJT6JtQDqoqoLjp8WQ6J7RPzP5Ap8e1AsyVdsQWqN5wQz3B",
  "key25": "2yhLBC2qC1a8xzmAphWp6PyFs9oFPX7DJ4zW3qZSwBk68TXeGf6XZMwaNJA8qLqoeGrcqcWxwXh9PcLcAEM7Xpxj",
  "key26": "5H4ex7fzLLA7So2Npe4d8jmdWdSvWwqj1G4JTdK9xuwD2PkSjYwS9k44E86TcESPpxjteihXJgtbRmyTcxK1aKk9",
  "key27": "3uGHsBoGYSa4sKbPRrzQbgtEyYAwoxDu6ST8Cb6kH5gH8KewL4snjMedLbBH2NP4N8Lk1zUb9UuNsAKM5wBzxte5",
  "key28": "5haLD3ZmDgdpuShz5mzD78gu5GCzcnFBqVmd6izjZMHwPdbK5R6Z6iDxSfZpYvsXac12AzhE4FEoS2KSd68ed6G5",
  "key29": "3dftEVt1zi7CqCQbxwPgXyy2rik4pua4dTfqrBJq4m7wW8DyggfAV23S7S3KtJk356uV4tqJQtLgpTKWTAXhavNG",
  "key30": "2zW6YQjuBZj6a47KY7s1bV5yvrrjH8pQ5FNik4YdscbYHAQVNtnuqYWcQB69KSGo59XKpuQriNLhfwPVEKkrBz3X",
  "key31": "3zEpxp1Y7xbab6iBPbZFwbr9bz5MaesewK7o3wpp7T2wTSRSaKne54XH7G8yvM87QBDXPeYUG1BPsd3AjmwSw2fa",
  "key32": "5DCJePibPE6tXHdTBiRgDzyvb1gySF4L45mQbnfETu86FMWc12Zrv44vmGjrU7gC7Ki9Sx4Hn6SzitwAMepTJiZe",
  "key33": "2JTjitCjhizRKvLhqokYMrqyRz21atTZ8zZx6aSezkgNV5vTNnV7X2hMK1iQr8Q1Vdx8VXQNDpEZqsfFnPVTLd3s",
  "key34": "3qkqYBt7YjymQwfjMpgUBPNpXPqzmtPh29AxxbuqCJX19vpYBc7CKXUcRsDxkmxDHVszccAmUJJXAMSPa5k7vfxc"
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
