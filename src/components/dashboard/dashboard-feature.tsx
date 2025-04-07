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
    "3p1aQh8Tq5jKzf81Fkx6MiSiGSBE6k3UfD86aGyqv2kwatGMVpjeRQUFtBEKvdmi5qxdNyUKaq8kTiPChantTdn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PGyJxFbzwRKkRwTn9H24stjRa48WbjvMein6BWMSwaupsCvEJhhRZTwf9scTN4EdiLsFbcajTaArwyx3iub2Ra4",
  "key1": "3oH1ZcAVeehZcYn8QGVF4cMzucyKbR4RyDNgkaL34vBQ5W4D4eM3qZ7rUcN3f6w1bU4dTcf7y9XrDyMq6PU1xxT6",
  "key2": "3grmeevUGvbbrEK8hXVLS6BfYNhdHWsyaCshMbK8TVcUn41onVUpbfRW8HRMc8ydwiDaPd2X1Hfb837PuhfLVqfe",
  "key3": "2GuWSzT6eG1mSeyk38gfFqj1qFY7btfmsb3RgqwhgzZLfUNuqdpbfvyEjNEiqLYCJybn8mLUSSEkWvASQhYvW9Av",
  "key4": "4gTmFFu8KG69DRap3ca9G5Kbxfx5v2WvSSN8ttoMquFGfFdRJBYXmhvZkPfvnraC1Cy9Bw3sCugSBHq3NhqsZu72",
  "key5": "4dNCKvCFbfXkRFcWySoDuHHfyDGsTMrS8w1CrpDakcqf1L4i5swEWEgYTJDF8xAQdqMsxWdh7CR4vrF5kjYeyPQ",
  "key6": "4jMnzE2GvxhmXjCV546rV2kMEvRYfwKJxAic5RaVuvU5S7GHhuXN7FPhjtz5zCKoRfzcACqv1jN5n7qZmkWmps4Y",
  "key7": "4hMDvjL1m6x3dE9Y8yzySm3PxRvuBn2LZJZfvAwLYzjs8Kf4eHVJNnJJ7xPi1cP5JR5er8pgFZusQa7pr9nBNPZF",
  "key8": "3vCiFXrw21cG1nS5hG7pfRwbwPUe8tdbVKYBUnD7wXj7jTBcC3rpX8EXeXpjWcKpd8LdhQzDFzSWjVHFrVWsnEvj",
  "key9": "o62GPZS4EpcdEy7TozkQEDJLyCEXK3YGHsh8UVXQjdkoVpjRMGRyBeKmMdWwGLwZiz7UwkM6FBLsKmHxkhJoxdy",
  "key10": "3R3HGj5EpxsU16oVt7y5UoPmqPtAaWZaV4tB24iDKhrbz8hTEeGYAxjEmcfuqgRFneiw45qpCJVNsfTYX7TQNhbS",
  "key11": "ywAPXgQLvcADmMx99gxWKAfQnGUqjevy4dbWjicub5zmrpM4e1TKTb8Fm5GR2og1RTCZQMRkTZZzXThbfZLMNRv",
  "key12": "2tjzVpFgG7LPy2ZsozwfjgxFszUnXKZQhNc6mepNtrpN5LGwtiFBAEY3awwAKFK1EVZgKyhwswgnoKS7JWBs158X",
  "key13": "5Lpmwb1zH1tt94jrav6YES85gEA8gBX4BMVQ5tRLJrjyvw2pSZN7QPGuDF2kWuBDbqTsVQZRivx4uznRiVGgPnov",
  "key14": "4AQSShR6XEG93pt4zSjHsA6GxRCc8uf57aienw4Jfd4KdTfzKB1TWJkg9Jm1e74xXtzRR4X1vnmy7tJnGUCGrgye",
  "key15": "2CyXZK4tJYeYdxLCGfXU9BuoRNrU9uHjTaiwqccoQYJaze91Cq6WH5aLeMurb8XXvGV9YRFa6XPDtzHRa9fskSeY",
  "key16": "5fvRzyoAMykjmDsPeZaLJiw1eBTBCCtMfsrZWvP8bt5WkMkfpt3Ddf5R22Wb61ULdAk9VWjkbwxwGbQTVBpn1dj7",
  "key17": "5BrdKYuSFPBASbG62C4Xayey4ap1vC8zC7hHaK6esxZStCZcFuPJ4kQr5pn6n8KBpJnm81FyPGAyQZQKxga7SBq1",
  "key18": "3qMXQEakNvr8zMrL1ueEMKiPkYw8R3mHbMUWjEGzmDAoyagcC5TXWiwD9DaLkbEjx74SeqQADrRAXwKM8iVrnpUK",
  "key19": "2JqazjNC8CWTVZ7xzkucDipcPURQdZZHUcoLTkpeAUwCm8QQ73oBvpAChSS8xgVLQPoaenuLwVh77vffuZ8MWeMN",
  "key20": "3JWWQseiXteRiU9B15TQg6dxyZGWMkY9asatC3Eo6JX6qDZphD6EBvPEN5E4xhNEwuKdmKEkDCyMgY9ffNogpZZE",
  "key21": "5W9KBnTiD5ecE3FgrqkhteY1SNP2MDEaDgu8nxfgcMb65y8JLd5NiUhEmqpLyhvboYvumcMaSnyhKQ5wwYBn7ebC",
  "key22": "62hR3yDr17WLBeg4piSBbyRfaqvfb24Dszcq3jnTgtHbfvBcyZPhzDg6QxEqVBNuGvD4efgobGyAeg5drZvuBRq9",
  "key23": "2QZjYc9xJXZ53ny4t5c52pQZT7mCkzruXF3mmr86he9SNYxiix8MKR1hkminAqEa5Lzdr9c9rssmxzFRFgA5dj7z",
  "key24": "23QjuYbW2UwB3GJYSxqbe2sp7eNZ6Gnj6WBSvHuYtBEoL8qwKgHGS5PxMvBg2Y5LmsxD7yH24QnUSJnWpT6RtJU8",
  "key25": "2WiXHE1LYzoKsaKJHiLRBN8dFcAtyJuck8mmor7G6rLXH7FpDesjDAhAV7gXEMo4gBSZtRFQe8swH4hCg7EYbJzZ",
  "key26": "3SZdiuv6BDGDkv4edyzdJxo8ufR3yeW9pbtrySsxSueNhPZAxUaKuYp5E8jHDubfPLFn1XvUtyyapwbCmQrequBn",
  "key27": "4xEo5KhsiPRptt7yrep2tJfe4GD7czrbHp3q2Rzstf8NoXQyjm3CqKmv8j6qRD5zX5Txny3nR4YCS3N57eBQc92v",
  "key28": "5NQ4orb9mTSUhNDo1EGyu1uJM4EcJ3nn5TvMfa4CW5NihHU4rEfkgfTqJw9BR85KKyBD4gTxUGwyqxauDTfzGbSD",
  "key29": "3eupGYx85vxB7jKbC4dLYeUDC3AuMCTfhCR5XN9PQR2WznaFskeEHmSizQfg67MPKsQFog32ochfQenKhqtntByt",
  "key30": "3URNdd8JNwWR9VHEmiGLykjvTHbNsqV5pxjXJRWy95RPLTvVhXgKaTruA6J9XUfCvT7fVeXu5HFXPeY4FzXkVWsk",
  "key31": "5nun1vbMVTF2EBUQJzapwRQDZeMuGiHLF7MGtQ5dMYk1A7xPZRjiSC6shQRUJqcp4E5JU2G3ohU1q8MbGxMx2yBg",
  "key32": "2aFSeWUqYNcZVSnzZNLBBiZECc42qtAV4fn7V7NqHyQV5FHM3zMhpb5GYWWuFEha6oSvGW4uySrmeAtSocftNvNA",
  "key33": "2dFHeiqUW53J1iTrREZ8ShXyP9YciyiJ6povzTWZQBaU5tit35ZjTdTYiSkmKjoMejVuKgjPAwftYwBWHqtZvtQ8",
  "key34": "7zC1SmSXEuteffw1nZotRi7oRjtjEfcaQM2LZXYHuCKu85woe4tPusKwiy32frz4hJp9xSJKx7hdgL9vqQ4dXFt",
  "key35": "3ZJVkY7Tw9WyGLFhQEvmunPmzujJaLk3vBot5Gzb5FZ9giLCGFHo5EaUwqgjuqy7MzcZWtq4AEdGB2KpxH2C5zYi",
  "key36": "2qwiA33gTzsBWp1W1TbFJJfZp11GhABxp4BsCYw2wBHVsc3B3To8a5jUWkW6HmkeSsPKxkmkKxG6j2UrrMRtTSQh",
  "key37": "463eX7BMGKLRs9wbXVXGQPdvRute3iy9wyWnxg1nrwQAZGbbe8JVVMcx5HUAWTximNocVtPaD8Y64TTQ7FLoYfb6",
  "key38": "q4CAN3uX9TWqrW3TGcbWHuPB6bzftNRM3wB9Y27FcYWQwJa45hR2VkWdGg1txheYRJLyKoNcq2SQZqFT4gSTLED",
  "key39": "43dMUpp9TXrDwWrcSThwM95po2NCs18cqGRrtuChsqV7HDuZVuXtNBKYUuU1DdshomJoosPQYsWuEapHYZiz4pYF",
  "key40": "3vuMB6vdSyn6VGNCrhkWXqUhPG4UzHC3Z62rGnYd9MiodtBUxW6P1K6Wg2QTt3iQi1tcQb6G833xUdBc9n5uuS1S",
  "key41": "455K4YeY4jCvJUPS2mg6Fppe7Yi6VoGdyUeTPsXgDxJf5akWW6fdyUubujoAHB8g2kEs31idLgLxWE5LBefYdewf"
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
