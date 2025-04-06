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
    "pQTauYp2ZmZRRFrduzcYYZD37tBdLhzgfP8NTt93NWT8gFib7p8xyvgkxrSkpBm3jMHKoBshEBE64zAvWAcjTTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qmf8BufZ9f9BbBCxPQCSW4eFJG8dQCKK15WZcdScwvA1nQ5GpwoVFy42MNtJY3zexJvJNMPaZensoimzyyVektx",
  "key1": "4V41eCrkxWVxa8J1Akbr7WjazkhBwQLARvubnHCXBUmVMFrE3k5UssoLs7HcGVbStJgAHNs9omzd4RSJRmq79ceQ",
  "key2": "661jC26tqQ74XNTyv9UBRjFXxtFtuPCn58JytW5viZSZUXbmPzM9WztNsVi7YkaDdaYRTCP5b8pyQyJBvEtkJwdx",
  "key3": "3H6JbLZpstpw6yHcTCayBk6DNh9foA1oUnQaZSbbQ3N9JJH53ryZk5ctUYXi5gDu6Z1zu2W9Pe2ysmcMU7wgVLun",
  "key4": "4V83qEeX9caViMRtoJGeRtwWpEJVCgGzd1tmpLjqCY6HGK128okKT8DEJNNWqK9wMDx7dLdK3o9ShwzrhP8vcovV",
  "key5": "3Q2DKyCgrXkKhqhZ213vFQpc4nsX5tqVFrbTb4zo4Jp4x2GmaoieD44j5sgmqdRsSRDHZWN5beXX8nGDzn1gWBs3",
  "key6": "2RKWfa33X6wYsqbSg9YshjkLcyxK5Fvx7D8n26TkVgzLdX1HbrUPN3MYXHFnUbYJSM6GHc5BkiReNVhz2CjMujvA",
  "key7": "k5HheSy1FQqKCVU9tzdX3ht78DF6ptYqQWxcF197oy4mcbxGyt32c97n2QSVcJWmYgmLtrEWZzbgF7eKrCbKiHp",
  "key8": "7Gwvs4WW8AVcdvbB6haZvcqeQU97fNuoJfaPut3E5q7vz1F2oRwwactbJwNYY65xvXUAtX1JkXVYPJqY1nMWue5",
  "key9": "5hGmfG48roBSMnoGhtXjJoqThmGj7Rv34oyvpvHsqnjNp3ax8gnUcf1RyPxEvZi9CEob65aLXkrtVxPQ3mwfTkub",
  "key10": "4F7m7epqAreAMQ3ZxBodP917uGNGYYWXCa68vosYxiwzgFT9KDeNXPWLbg2yLsgBVBjNCAFnXctxLY2aZLeN1KWL",
  "key11": "5BT2KAwxctZPNiwYMELA8uD6sTdkhW2nM17BdWWWySiWoVbCeJaeSs5kfRjmwWtpRuPXtyLU6AuJdLQdRRZDJA5d",
  "key12": "41Frk1zNwESw3x67n9xKsES2yGLd9fsPb2w15wevZYZsuV6wSPJbSuCehCYGkdQXB6pHjHJUuJr67zPrapddz553",
  "key13": "5mojM9qVhQ2HHQqomMTyoEdxdwp3ZUStTQoUkCnbynQSiWkYmeR1eidTFyK8tzuWENdCbs5CsPqVo87s9V2KuxjQ",
  "key14": "2oQNsd4pPjtZfeKmz2ED69XyGbNRjfASZmep7XDJWUC5fBjkfTtmXzZvnhsxZ8ofuA9QFjXFWPDqMzcdAPmHLvhg",
  "key15": "529WTjWyS3jBKXmLHxaGaYSFgYEsXXYacLjxngwfu2rEajccfXQ8prBAGCwQNdsvj4yRP3CT3pc26jbhSBk24Js4",
  "key16": "611igB7A2j4F5hzKKkXAbsStaLHqDSRfMbfYkEq7iWG7L6YDoMb7U2VxSa8mAZ6odCghGZmR6V5arCjwfM3sdjJ2",
  "key17": "5rgYjVA37qKqpYobJBjHRusAsGxKaSyzTSkkPxCDJu1cGrfEz25wr5pwvdNe6DVGs7muxZQTmgngrykQE5g4L2s3",
  "key18": "25rEUStbAyP7Ha6E1WNo7GxcGDmoXQyq8h6MziGd4M3Ydh61xLGHLazCqcGjfu5UJfQAWQrZrZntMTfFFx7Eenz5",
  "key19": "3mT4HyniiAtuu2dqXBLUHnZ3dDRzne5AqNTSjvnPqfksXBnswW29PznZijk9evvPZwzTr4MFnhYNnbemChxUtMkv",
  "key20": "2y1rAMjRfnaEi4LeZDAA3tai8whT9T7751a7tHD2VVTQLxw1iri7x6vogCRwHtntD2LKwyuvqsgdTVycrNmLrY2x",
  "key21": "5ys1HpiD8wGN6keFNoRSJYopzh3VHj6siVPtDoL3VFuooAEnTqreJzJyxCYZigDJ2p5p7KULrGXRhKpu5wK8uB6m",
  "key22": "UMhdyEvemHiaTEbzbNtbVoEmd1dhonk1vLksFE6FKcHFRmBP2tDSdBhXUJbqWoRCv1nX22UMdc93vVJPqCCwdrZ",
  "key23": "2VPSKBjHF74NBGEJ8gvEQUPtZR3AjoutYVmSFsokvecMK2BYm5BcAva17e9BhRPx3rx8nMhbnCCdMYNH6Y8FdXCb",
  "key24": "5QNp4AKEA9wRxmeaeNYsbgDsLVcrGaA7aLZe2r8dkoy9KdV17swPU7TPHn5pc7bt1Ubzz7ANDRBCzqdxNqW4sAa1",
  "key25": "4wkHACxgMjeuAR6PyWHsMsbpNxhe4RNMN6UfgZXvWQzB8woAPkHy2gThEgsfKGF7ekYSbiutb1kZ56LL18FkGrCw",
  "key26": "4DAQq2ARyYDYyfWGfEBbux2Juvttz6hhvZ19JsTv2BDppaYKf1gZB5MkxBzKmx3Q2C8osEvvWT8P1jFT9zU6AzWa",
  "key27": "3YE1KGXEkFzsZEZfUAq3bh6GbiQwjyBZrsnP6Gsd1gEZXXXigwTuF17mkkbAbxyjRnCVcSn7NBgE4Ysd1LSHCp8g",
  "key28": "5ofccxv7st6b6xPixJcrwxVdeYhAmzdTTFjELrgbxmmsYHvnfwVAQrGKuvvJkk9dumfEBVVz7zTeEuusQdwD7hFS",
  "key29": "5fp5bSgXSFcfEMpz7TGcLHLo8YSC7CmcWwXQBgD5PsB4AWh9p7CtBKua6Zc98o8pwCNUWbmQVxPDM9nLjptVpdPb",
  "key30": "41tqEVbtamxj7dvrT39GAU9q7sxHd84KgRFfmSBDXJCHDN6ndZEy9CRXddNfqsAU8FPYtXZnyjX1m3dAybkcPf1S",
  "key31": "4HP7X2YLeNcAYqGe6pps1A8QY1xxuk1b952s1AmiK4wDM3nEtKhnjQwM994Pgzd5dRHdbfhiE36zWhSUJbWZpcLK",
  "key32": "4C8EWXL9e22d8Fj8btZGUuqsWbToRi8MT8yTvRNn1jYdqDpd3vFU5r8RVRoVd3SQjzeKtnxZCWvcnV32sHBTRFLL",
  "key33": "23szkLW25sXVoDoRSQ9ATZCgo4KmGqbqAPFyLCUSxUwjZBrDEoo8A8kQhgC8GAMhNbQHrJrm1fB8ven1sjxWzrkG",
  "key34": "4UziuzhTNR5TNyuRX5KCQBKrF5ZHf7jsLCuaAjkjwhTxSqfgbeuCxCpR6ZPSqsYFLRffpKF3gFbuRqtCTgdeDuUg",
  "key35": "Ne8cSSohsALQ3c4QZ8t1mCqfK1bwhXtz5izjDsA21S91tp52pGGt3LWJJTJAAYvEgyeEon7Czzha8eXYaT5Cp3m",
  "key36": "4BLhmGCjyYbyvVK8aRCzJB8tFjFQDt7PpMUbVtAFp79ZeAR1rmdiYBkPD9x5qRoE1zr8nFenmvdmAfqfDALMV18n",
  "key37": "2vpyWg4rn6SfQLRyTkQbk1vbAPfaMCQWLGQX33Wy21cjPMVvtZRh27kDD9yzshT4QKbS3DEwSFAvjAwi9jBwsHAY",
  "key38": "51Rx3eFpWUxHKH9yuRfhFTf61KHUH5VyoM8dvnnqEvkVpuhkLWiz5meL1NgaQWcajmfjG9xfmq4ByuCbdGvxEnT8",
  "key39": "3PwLCUL48biqzkPSEREssBMdHPDfHw17EJCje7MN7APriwbiP89uEsejMHneNyVH3f9nWE9SypozJ3HyDSXEwPh8",
  "key40": "2iQadDMF7NkjXEZw2u3BCTBNzVgm1Ak3XoMAHa4eAuS1cMQMjd7PLVZRkJVfdRsVXXF4jZnoivNV6oFy6BkthPnz",
  "key41": "4XQ2b7LkkJvMbGLDeimV2uG468AhXPEKsWuvnbKb566ozJN41WwSPDfnWnihpJx4hnkVsUzWNC1z2gAvYYWyhXf1",
  "key42": "5iDuzfjdYLyqJe54p7zHYm3WUMPQKU3UtKxXEKYh8wiE56tW7bA7N25TRYTpXMPuNF5aKHgsDVcG4kE94VMkrxbV",
  "key43": "4uh13XXnzH94KmeB56fHoXN815NcyHuhNwPaX7JeJPijNFuKmFHWmVRZjBRSwS6X7dCmsU5bNxzjj4PuW4Ky1tq7",
  "key44": "3eyb8MHeXgfH46wnj2QUK5CbdFvHDZzEcj1kVHZu5WyxkbFmGigJF3BJBLoDUqjFyy2PUcdGWnLz61YFusJKDsEq",
  "key45": "3yVT4EBrWq8izXEoWDwVS9cC3AFkHahqsWLLh7dsbqmtyEtANWBWsPum9VTWcbUt1rGfjs1bpUVsRDGnt4soVfcG",
  "key46": "5JhM9ipeWgDVZPdr3wz3aMjHEiJv4nozWXeXC4FmB8kYRAnRaByNE8ntv6mBAyyPti56yzhJJr2htN5zNq1nAbYS",
  "key47": "52zZ4uf2d319piTqL6jZJs7kGYAbTbcBmwPGKg6FxewSr19faZzzA9gnNSXLFMVJqo6wdF7JPwmibckEd8WFRFQE",
  "key48": "2TaBTjq4DPzFxogHepgkYVnfmUrDbRYTodrA4n4JvZFzXRxVHEKFu8W4Rk4jTF94WkL5EBnaJpGdyKhi42EWw2FT",
  "key49": "336N5CTeYhR1dmB5Ym49L1BZJTiQtD7hQLncuWABPe1QoXWfc8xL3hFNuhVFYKgUyDfrhePvpdLLJXJeKXGMrCHz"
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
