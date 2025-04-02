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
    "5M7oAHqb9uELgzb6tF8sxjKmhXRbQZyUbndN4LMS2oTwY1g4dbtwxZ5ZAvVs1VR1iPYZUN4ABreoJDuv5ot1nD1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bVJiupJrd47p81xzGx5jRmo88cWb9GotjR9FvdW3oEHYRyr4iodnBWf3HacZJ7YwsGk95yZfAR7j4o9LpwiYJfv",
  "key1": "4K2v4Kd4Ma1xEz1hE6TehuVHwStVzRqUJah2omnUkMYWNbKNDGrJxT1M1FVobd6xr2BrrsnTZ8q4wdT92pc9Qov2",
  "key2": "2qYNPBHnQzvezTQUVooPUFg4UUnbFKs2WrvQhMAnqQDXGf491JyXZUBqjQjJ1eVSkKaHsUTqNPjjq8jfMuTGypzr",
  "key3": "4zwQugsxRcQSDDmzLwveimA1zRxHGcPbiiqs7S3gj79DaJtnUTc7borGQk84KBFpZQfKNCKWMjQqTYfN4EeTSPMu",
  "key4": "3nrdXSmGA58hnjXqXx5VwxD9mSSyyTjSPPWYYAVJd6yZ3z4FZKDdhAkGRdDfmU5zVyq6ZyzUdMr5PN2pTXc2evoN",
  "key5": "3gjueXnYeFBAe14q98TDTp9PEUj6WdQ25B3JpVsLBpWywNPVjBNmzb2j5oEEo1EfN7ZtA5X8NxqwfZ7DcGD7zLUr",
  "key6": "533QxC4JAqYm5Ax9vY92buom6GR4g2KSpQxeUTXpXdzen3mVgmdoicLniMgSCEHmHBEogUiCPnhCgu8ACDHhnp9m",
  "key7": "4Xqo7JkrpwHHUGmMbv53y4eD2CxzKZCGtpTNcMRCGWBsnMXdBvUw2iJzm5FTAiT9yDP8Kxyf93YoKWLN35eWwJzD",
  "key8": "4LSAPLTunNLyufdY1bD8SRaiThPBXYrrWpHGenZV8y8hVkhanH4miHD9vToxWZkPDqkHLGhsUF9jqoWcXqJRfuuR",
  "key9": "U16mh7TGkyD91LUzo63VZY7xiLuv8d6RNKibEMYz8gEGB1vWWw6VRzQkCHb1AyLgLKpJxHoqQzKE2TPEui25tLv",
  "key10": "5TNgipqocSQ8qzjtPANNFUC7Hb6uqZnL7hjknJnpeVE6TDCVnaZaGHb3HuWr7SWKj1D8VjwryxVrN6ZYhVCg4jZ9",
  "key11": "67f74ohuANhACP7oLKniS7x9zZuZriJjyESoBFaQvU8AjqcnP7VdecNTutY2zBsb6rTtE52Xw6ZLgDcA3Zcts8wL",
  "key12": "26PcmGehfzAYiTKwvBitQ3sLeBmjypeXxfyAp4hJDrZENVCExCQR5zm55jAdYSJiGj5HveakxUigYUvooV2PxV3r",
  "key13": "28669eRXeL8LmDHnPXrXd66o89WHZPBMscGioBGV7XHeMcPTeERnY1p3eg3xXPiFxyCQdEZTu7J2nM4jjxbiCm6e",
  "key14": "3QhydEDHb1phKwv1urfyzry8EEbH5BXjyue2GFMneh8HxdFr5tUdjVmWTJ9iyUCamEzNv7jotcuHYdy23ZnKuMQq",
  "key15": "22GAWd1GYRPiSmBrvrsQ62p9zMZAgVZFYEZmRgAL269cJuGWkbTsuUmH4pvj1Xau59hUL7iXQpGRn6ZBRY4RpX3K",
  "key16": "5i22KjewNtb6xhLD2h8eVyC5b7Yia5jJJbMteMaX788LxFVzj41hscUuoaweAiFpq3E54ToKLJ83212xzsL8w9zN",
  "key17": "5FdtoC3QHQtLL1S9ewWLnoxzawyACRjo5k7GM3yB8Zcz2dkELvfKC87heENhgJZJSTzFd15BuPsX2dVtx934UjPj",
  "key18": "9ZvQ1mpUzwsXnLEx2r7un65J1uzS4za2FHjFMRLgUM2FmTm2FCM32JznUEY75fo5VKpsyWpX47fYG93k8UdZhsa",
  "key19": "4u1QvwWwZvPNKowHJYmTuqzMpPxz1uGYy4C8NaoApdwhY6RhCRsHPCJb9ayaPp28XLn6N7zdAmf389bjDzMwAPMF",
  "key20": "66Gvu1uJjY6vxo3aM5p1sifYhwxtz4Gie3YPmLvBkiKkxfYJBKCYxCyTjNidUNMNPpejvEfyvaZeNueiD3f1kvqX",
  "key21": "3VohtXgUDetXncZ8BQprshhRKuZTTiazfGLbFnMrxFWfxv26ibNSFdG4VXSzoKqgP7B5tZpatJKHtd23Ymtu1kNV",
  "key22": "3ZrcGoX7Ct6BWFzZ6bqM9hEG33B7UypKUwTAM8vy5VFqgnxUoJYLxxujCV7FeB8x3U77k6jYi3Fbecr7Cq5vn4nc",
  "key23": "RAFTVK7ErUBSi8w3jmkN9YR43y8bxbHeGi7B71bunzT5AHxA5euM63R9VZRVXMQUxMcCy5raKbjk2PwQ12Jepev",
  "key24": "2YRR6j8KpAnmMVgDEQXnXzxRbDwo2qrdLX3peqfBibUYY6UzfxsA9NrcHtddexq8GcrCnvLoNjVLjuv5ea5eUptT",
  "key25": "2uCBD98TVGPCkowQuXxiue833oR5FCKa5CAaY5bzYPxu3rXZsAeNrkYLXLEY7tpC4YYTiRGnAVP47bqsvwXrcL6v",
  "key26": "3p2rWokhe4sirMwRt8mMzjCEvYpNAvv4JdZoLeEWYrKE5JZm2DhK7u9dfivmqKLKUgeYCdyDYLkkVs5oY3xbsgKM",
  "key27": "ZDrigcntGXy7yENY5RUahSVstF9hULmQ46cenezFFztMjkkMdqxg7HHJRDDBQFRwfpU55pMCCq9d8Ncd9Uh65tj",
  "key28": "4mV1yMknbG4d3T4H3UUcA8LSTNeWWa98EuFa8Ps9JR9HNDxVWeLFPxgZ2z2ua3nXZxFvHQj5CkYZGtQzZhAyDvcw",
  "key29": "5mYFQNzdGBet77BRggNizHBEjKAYffcxZT7iPwwSWPSpHvTWNvAJAdQ1ehFC4isKV1p4Z8Fb7MdoQwNzvsPxknb3",
  "key30": "3BmmuUKzGk1uqFBrnjrgsDFJCyGXk9Aj6v3i7ohuhKCTxFoDvBSphXSfoW88qEFk5ipiigKmQRozAY4e6Hm7QzUK",
  "key31": "2unskHqKz31hSjJPweGkirUzrSXYRCUCkbvwVwjH6gGcQCz6327cVQ3tyyRP5HRXcxAMWHhfdmC6783gXWiUKqX2",
  "key32": "28msL56KA83YUADCmdrUhh8pksWgsxw7KQWfMMvCLAAoJhnBnTCvDj61F4boyaehLrAWM2ZZNbcdAGcSavMLaJxW",
  "key33": "3FjTW2BQ3L2AZbJQztBHcA2uFhCoGqwFiP21Dxd2NV2mCH7L3NuncSWgyyPomAB1WGGtfbFxicDTE9vK7md3cDLz",
  "key34": "eJhEsqLExVVMmL6youQupDyGwPHJ3exb5YJUTtJJ8RdrbaQcWjSRvnsi6cRan6Ux6QhdZq4FBiqoZbEJny2voZK",
  "key35": "FHFp4Yko6c74Cx1wNAkS2R1AG7RFp8fCTyteiEubuq7WQhnNJzxtVcdyprgpakm7HgSxsNjrGR9feHcJacF9aLf",
  "key36": "2Mzg9b5N8uSgdrSXmoKbrDQRJ6aoR9d3aWwDmDcZbzM6nmC5KkZFKd4c5PtTVbru5eeE3xocpfTc8rk6cumKutR6",
  "key37": "5bXudpMPhWBMWSfoxmGwbedFtBAcLBmLJzr7TjnrE6KhZZCQzcaeTHDeHHeVt6bQLFDyPKFwmihL4RY1xH5mPyak",
  "key38": "49HNCCnTz4J865EsaYdeSmWySBx8PykiPTURcan3eyK1RiPxJ5BhWq1BPBoi9aneREzQYggDU5mCdZWigdiFM68i",
  "key39": "5CKVTL9W8VqCrhFv2GivgedNzqwDdJYoN3mAUexBxDEfhuLV48LdsZiSGEfwb5Do9HoKTrGUxrJdyftYDiHUk5Xw",
  "key40": "5Mf2KPEbzSNiPf5TJMUNWyVk3AM8mwNuDUBkv1HcKipsDgT7ZiHr7PqmVG34Tqv1z45HzteBy9sQz6tELx7RLvg9"
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
