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
    "2uRNV46HAukN3u2MBVDeiMa9x8nAYXgqSVFemBjJXdZTjXPsd7p5oheBwKjx7NAnowMHZCYfF1tF6fzcn92ngYug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45BuFU1fxxYhiHBK9X3T7peZKDgJmbcWkhGpTet6RVmn31jGwVe9iYZ7dmiePL99CyUwgCYqhjwnXmDLKiscjhEi",
  "key1": "2XoL3R7eLaFmXqLPiNEzJ7jpqso1suq6v2UnUsdpY4iGYozCyoFnCZNhEFUHRuvq4neJmvJ9mTK9acUn6CTn4TTa",
  "key2": "NK94Djpif6tXomFNwaWFZtqFLZdv5vecNP5Qzfct3ZjUUvpCc8SA5hyJfMC2KNjrABuyMfQr6N7Pw4yZZBCRiFZ",
  "key3": "2XNqHki2tv92Ay8Hv7bJbcTTn816c7GdjnYBRCSVfY1F8uzd44gFLD9hcUpNQiY9s1UacYGm3xrsSNr4NXCWW2aM",
  "key4": "7qGUbw2tWtywJSrk45MU9BX78jkWxpeZtZY5Xgqnf9rpZMHjH32yjyhyDAotWZLku12pb684F1te6b95qx5xCCG",
  "key5": "uzJTmR7zt5eeCDvQFLnCanPnphHGgsJ7Nkd8bR9kLTp9AeQDypqtrzLW9axwwCZnWTNNNEs8rncH5Ee65qy1c8P",
  "key6": "5M9XkuKFzx1bK6VyHNJ2h7DJJDSjkKMYWQxX2E8CNdzEihCxedaMVG4iHfdTgMryYBK8mRT1qh156BBgPyfksSDS",
  "key7": "3x1Tk8Sfodpdh4FLq7qU6XtVdae3FK2iqrJqy2g5PVSrKQ5zePhojq5bEuVF7ANP8Lsd7LMNvAJLKCtM8mkUa9Fm",
  "key8": "2PgzgVa1q6Yuqyf2r3BqZ5UUDAnKjZzWV7osUhMFA2q5eE7cjpxi6HLjuSYegeHiQFQToaoWkrJNYLPMRAcZ5WxN",
  "key9": "67c1FWoW8x3aBUMUdgVyFXE5xtp5au2jABL1RhXtJdTBgvzxTK7qJ3yLAs68Qfbrsu8R5S1GZzDCV4ajYXM1A1VK",
  "key10": "2MHak6B7VvKX5QzRZKQ6LJ774xVzUkd7uSuY2AQjuHVGcJp53bfNhmWwtRtwzY6expwcPXZzGrmLvm4StoHQVkvu",
  "key11": "UAy8vmD9xqt2CuauAHtRMtS1WjUCGXKxXMjhXvYnV7vM3g1FRRjuxd6qhxhAMhYi8rbpUFtKsB4oPiPfRMYQGzS",
  "key12": "3FdcazvwhwbLvNYUrjuQAkDjTgpjjLtHQY7cYvdMHmdHrUjCPasYHSZMjDVyzPPbL1t3Ru87FuK6hhFKKVRN3DmF",
  "key13": "45AunYMw6w8LvssFjPgdFLKaWLk56JYYF3QTqDemGSwkJxPfxLcXQcUT5hfKcrKH9BQKQmVBLNphudarEM26xHXP",
  "key14": "2bizNFTqcWtmTLX3tjDWxZcgmD7sDKButHMYubdrhw2pMnUNEdQdKQfi8Et8cF21iJCW4MUJ1z85ba4G8uWzmmCm",
  "key15": "3fKXyAnqBWyKwEPihEgbH7s4HhuBSWZUJ2oF1nS9BYgXZpjPKzgMy5JYgvY24RvoqmiexfCy1eXMEAa4GuAZFmD2",
  "key16": "3qNhWGBwg8GjTqaJhJVSDExWvHH78NDVgPAYCMo7LR8Go3MMLDiabGwBvYAUd9m7ubY9e1gPjasKunL4F2nPuVoC",
  "key17": "2Lvc2CUB38YRnqBfvq5v1wJXivYJdZPby1ZsiLfznC2TfBckapJUyLC69UMyhwjp1fq9kvG7kWMhShtzq4bK77Sv",
  "key18": "2JPRyDosoYgrMpoF46TLxXUzfV72aKNKqrfk1Ypuex7XahTeV2uoaJmUsKBZgW9FdZtoztULjdDzkvQk16MC16Df",
  "key19": "5KVQDPGUwKbEkhcSjVZKsLEqxawBo4EygJmJ3w5g2Pefzs4YhSePxaQ3CLAqnRGwmWC9RPBLQUbHvLNjxaGjb5o7",
  "key20": "FdXTtnWPWNKupaPtHPUh7p5rueTGPeAmW3xfbHCBzAANq1LGcdZPHjkQPi657VnYaqjWJpCSTjWrAAy6kr2LxrR",
  "key21": "3j5RxyhvvXHK6RVnVRFyCheVvxQYyWxbC1jN3MRBe55714MvqhPFZcoAWjv7k9yguyLWyoScg1pyvM9qKcrMVo8g",
  "key22": "23dkKWZCTyxJZkSF2K3qfnTcYugowf2CJzvFkncMAYv5SEzehHi1j1hKFt4LhpZjbydnqQxT6TqWw1E7p6dpMyeb",
  "key23": "Y6DNc21rDL9zgQ27reVVw6o5sRdi9ny43yikKxovyz8LYxt8bPHRtunHseDaGXKNJjBPEkca5iTrDoDpkwGXqMv",
  "key24": "58MVJLxWBCFFLL8DY1vzGWYj9jj8jYKaAQuzTnHJKdVkTYfx5d87wnzsdVYu9i8uxk72oJXPHMfvdRcuksZDNewX",
  "key25": "HGFYto5m7pbc2tmJgV917CTZwn8VVHcFuavLZYeX7vcN5TZ7FkyjMQxnXdFAUpBd2PxzCEtJeLUdn84JTJirU3P",
  "key26": "4XNJ8zLx8wMQEjFU2mCQoYj2aaCYU4ocZyA3TBrFBrCPB1cSs3rpfy1eK6QAic2VknccxCuH3Nej1dGsGZkKcVUq",
  "key27": "2hJ1nJaU4zJccr2XWvmBwarn9eXqWEN3MLPjAatji7pzmV1fumNgxB9V6aGjK8sGTJ23YGh5ktnysqv8vmtmaXaR",
  "key28": "58NkxiX4LZLsPEnUVNSq7yBTyJAQPmc5sejDJd6EwvNBVmM4qGnBvR2DUuqMWkYhdgbHzmPfnpry13WUJvbkUNoy",
  "key29": "5Dj5htyZwKKQGbkaqdHpqHofvKWhTmqczR2YuTqXxog2vMkunBUMK9tXtHi6PtR2TvL2ZyMbHaczSE6Z3HJiPgkH",
  "key30": "47C8Z1gaiHJKXWTdqhmdDUZWkpBETTez6V7nsYg1WMfjw6pLZvnrg6HBLEwsdrJTy3jQfytd3SRmDYJvPNcauHYU",
  "key31": "9ubdf6SJaG5tvaWwWnPUnZd7gaR4V1MQ2SD6N9HhHGUNyXHUoQrAh75z3VTA3h9KnBMLVdRzrn5Jk4Zz9mujUKP",
  "key32": "4CuuoGzbxuV7Pp4VkWRaaWmQmu9wZ4LQhUGj3tbCTUXtf3kLowrAALKHXbaefk2jC8DAKAXTzXL6EsTYbtmtgQDU",
  "key33": "28zyuukGvQ6dCUgWGBA5r8wq4EJJJWApGhpYDcsHmYymYNZ9aoBavTMn3doM2gSZfXQhTN9coQPLuwB8tGqey8EN",
  "key34": "5roVrWPtDhR33oJZAM5CHyz41C154f9cVNFNmEUvR8sw6UYjPgH2Nri6nVyrzAYjEYZp6gSg6aPvFWdHhVrWeoz4",
  "key35": "EpMU4TixsKZXaHVmyF7mGSo35VWUHoZRoD2nm1fy4L68qdE5s5q7pdDpVYva1uEdSep7SMrg5UvRb1uTjjDJnhP",
  "key36": "21iU4hwFRdqT84hUYAja1AReRoYw9ma2pVeieaMXGhwCoYbBa3ocPCsu19HjedPxmWM2bK2PeWurMfH31H7BnsgS",
  "key37": "5cruRgd32ipBVtRo2esXQU8CGsvuLu49cq5Y3xEJPdpZcMtcR7T7aTdiTbEPkncReCQDq42bM6VzFtBxKUcmsDxH",
  "key38": "5esHpd7zRgPmRpDhi4XteNeCjxnNfkmdxvKDRibmttEWfHSBycWY8g4N7Y9Cvi7v7Ghk8zbw1oqXoSmkno82C9mj"
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
