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
    "e423LmV21WbwNfx6h9bFGJ1HJ3VbtkaCQJFfYNqMtoFwLgoL3uqfKdbs9ssXpxcotPd3K2gMDS2qzzmfa1k4PPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eUSgK3xAFGuLUCyJ4cuPLCUsa5Bfm6spKXbtDi1L4VGJuiF8ZeQhss2CYcjJ6GTAjAp3h1RadWv7fbA2GiCQWb3",
  "key1": "55LHJjfuQmhVCo9n4USr6un822dCPFPeJG9YcyKi4m4JKNga6nrmQaZfnQbLiLYK8Pt22c7s4nxS7FhJFuqB2UU1",
  "key2": "2A6LrPWvf4mQGMW77kUnmGPqokw6iMgF68tx5Ztb8aC6nB4g4gTwRGKgZqZ6dULKbm5VUUE5jgYwQ6uvjUgKJSzE",
  "key3": "SpTyk5CWW62w5TqEDnJwuGrqmGqFzxsrtf5hbLhq6dMLMpwDK1fvpk4PexhPUMUpoKhTRMMFK6H1DVZ1kPzNoSx",
  "key4": "2MgefrDhthwYi5iSkYj9Mt2jHUBLrh2jfCsVeLWz4BvMRfbWQLdFf7KrYYWjZpYFLq7aWPw6EyB9dVm9hz2pm9d2",
  "key5": "2eWy846N2vhuX1y7Xz1KARvZQ896uHUsJMJuek3tzBEvbGthbTKPSc4k75ZQqGWKc8d3apvvETd5hx9vauSgFQuJ",
  "key6": "2iBNhMM1tPCnXQEvzkuxR64BxMCnazsciWYz1qf7JzpDBbEixYErGso5mVw5XPnbRoTd68evgdNbwq55gLkfjoT4",
  "key7": "4w8nPvYsKAAPwrTDoBKTLDXjS9xdxAJ5BY2drtCqueAnqqzUiTE3nnqvaYL1GYZHCGeYXcodCNxhZx5KcQHNx9R8",
  "key8": "3XRa8689HTT6GNDahc1NnQQsJH3MZp7o8iWPbnCPeXNCGm8uBFUyS6pVKLviKaMNc7TZqf75AhnX98Sb1V5VyaZm",
  "key9": "2gJJHHRo6dZ4QdVEejDx4FhBWn7x8B24QB1wDt9YWRm4SGgqSqRnBRomxZWAYqwqCKhbECJGXthiHDfjx7J2EPvX",
  "key10": "3wJaAGd9apNWhb2ZGBS5PGdhNikUeVwVqiCkrgPXRgaNSrMcVJMKvfUqfToJQc3BAybt8NkFUAhsx4YaQewS22T8",
  "key11": "4zeb6AWYt9bh9CMSHBZLWg6cdPnRmgwQhDzmkkcbSoPRBTfEfWU6R8VPGPjaXv2JWRXfTUU2ynaSq5Ru3HjRAyc9",
  "key12": "h7betAYBQbtw1RmCNCX1RShj3fPMRtbhMVrP4zknBwgHthmXGw9YkU2A9MMAXUDRkcpuyZBAkLRs4uqWL8FqtvU",
  "key13": "49nF4vVGi6i2dkyEiTEzTpPcro5BVyNNkMbZCZwTJjgmBBwkDZdDNyQduTBRd3MmooJqcAJwVxWc9ok1S6nMEVLh",
  "key14": "4YvndTJxkU5rAy8pjE2rSCGVgdaVqB1EKoFhArRQ7U7FyhqrxR5GvXvvkXwrLVJoZsFbzsydpe3ZzXmRmxkkS8pA",
  "key15": "2bmmCTpQdnHMb5Ya8DvteUirVkW3baw3WM1wYQm8ohhpeU3hRLMDgTzia3FkortqGb2VqbR8MtN4PV3hq4VYeewZ",
  "key16": "5E9DG2BEyTKATC1w6fNQPZ2qmEvTmPZWWUztwsdyyzpGiCP6pFxwMENBphH8P9VjCTe77yUiS5tHVyAatbXreAEX",
  "key17": "2vgZcyNkV9hucsX8Q2LewbC53Gmji4msXw5Qf5xcX7WduEtEit1Ndyt1zYucLo5pnWKMiycjphyXiQ8ig4Xama4h",
  "key18": "4r2iFPyBNfQhgUrLdsT3bdLfAkhJuKhECrLPWGrLHkWUBh18y3EQvajonbQhhP1DAjyNMKZe5ma3uLyL8WSN4Jgt",
  "key19": "3gvyyNwawif2CioFRPgnYSLMRqX1YM2ZfWoWbLMHxLqMyMxmgqeRQv2XhDui8rq5qsuXv7eSPN9aTCoujoHeoyJt",
  "key20": "2KpcfrjvSqSVz2TaN9jnSAAuiKPGPsMiHKqCMaBn63bbySuZxcSseBeqYtpGX44cRK7ttkntwggVGLrM5vyBnbcx",
  "key21": "4T5CQVZEJBgQMSKbRsPWbNieb13XGeHNDJRU4tUwuMFuEdB5iCiyP8Q7HyXZ4qXxHW1DLF3S8FGckqxYUXzKGsea",
  "key22": "2kxvVjofGAHbyHojXXSwQ9zdWu4ne2K8JwifoYrQyVuycRpXsh57swmWdEb8NPcqzYznRbDzDJgJWNC215HygZkT",
  "key23": "4VSDSBhechkpWn4DNagn6zX6LbiFuDv8Yz37yewwq4EgrMmWtpqnBY2ScRbqAibYrbjEYo6Yju72vK3onPDTtz9v",
  "key24": "j6Du44kna9MRBr3dL1pgMDp7wWV9JczwWb4FPUdpTR5intGATHj87rCve8YtqSqhq4uRtd8nscK6Y2mGGja4NLU",
  "key25": "2AVvkbUWe5Vm84W73BsMCCihvtcMgDkuXkfVQuxfTBzzd9NkrP6STAqZn54EmDFQRm9cZGnEekbM3qQhEZxbenWP",
  "key26": "2DaASB6TQ551mK9QiD4bGn2qrAUWw85oLFGAdhMfsMGNeAGqstxsi8xCwwH5xWAr6dDDHxC9pAAuqJ26ksjTEw3d",
  "key27": "XxVYW7fUFReoQ6qFwczqTwz9RgwtChuxzBmEdLFxU9ksG7r8NBPPqus4LiZmHuejT3s6hqWCx4J3ZHHRWj4DEA2",
  "key28": "66eoDeiAy9heppoViTzeHYyALBSKdu2bLj8BYgHWcUhkX4GZ6cqWESH8dKke9LHnrqfbiCMHPbxnfqHKQqQZjhJU",
  "key29": "5Z8s2z4dk5BLmopYW4Eyq9TEsXsYryxPkgFMzdpajYBnegY7SJ94yMExkMeQkTNgAMv6yzVw773sDB6UuPqgenK8",
  "key30": "2QDqhgWtKq8FrBtZdFsRi6AS8NJksWsvzuVQR1hBjTejP2ttYzdDEjeYtKqy1ftNikqnzBzTuE3f7PuXHV7x1mMB",
  "key31": "5uH8kLPT6is98e8Lmefn3vZegsUu3sWRVA8rpfG6z2h1ZwAVevEXg257xsBM66X6oypmGTmhLbhZzQwpHuRJYUB3",
  "key32": "2Lp1HTQoSJDk8wjSGzAvQzvG3fgfzeAucyu9uBnrPPRQ3cBywVDPLeic7JD6r2ieR3EMhU5V8zYnhFN25fWchiim",
  "key33": "2Uh8jc42BigeV9TyFYHsq52dHpUZtVgcqjcUwixBqgF7NtycJjpFgMSA83K9MxxbDcst6xh2SWpNT1NxdN9P7Nj9"
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
