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
    "R8drmR16uUPoMFt3Tph4Eua3SnuqHzQFEWp1soHrgvvcKWGawvRLjcJ6hkXai3tDy8ZRC67akihdemkznzRi7Ew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rrgTNWXtunEebNdk9Z9WpGPuXyMBCxvh4pEWTmZW9tdu2j5QBC3gLiLqWFbCVhLWP7W3v8y8vYECzy4ydCgqiHc",
  "key1": "52CpEUaJdSjsm3duthNZgYMf5NELWJki9UQXSsATTn1M1Y3rg7FLtQvqyFeAAbfE2kjQtoMXU7VYN76DwUYsB7kK",
  "key2": "5bVf7X4ZJXGAjAYzkCyjXT5GhzAgoNBpNo88DgLN9mJ3NRetAmzAgE1N4BYvDNLAEd9ug6DDqPxbuLMo4CHggm6o",
  "key3": "5rSNW8oJnYv8ySuGRRBq5U4BnRuEZgxWscmJmPtaPsSBuFNxoHoKAprKGsDC2ZBbhuKDH21SCvs9jkmdCLSrxtqm",
  "key4": "3RXCqYt7SrrmbPAanah6oz18y6hSCfrwNk3AHXfQ8wDKfCnjXPKC6Gk2fHb61GU2JZZ3KVTjrJsrhXThXt4oT5wH",
  "key5": "cq4eoZ2vSekZT1jA3XpkM5vmoqovs6j4KW64tAEy79fZq7XFwFGrscrrPz78gRmRC1scsM7T4QddYxrWqRruWQW",
  "key6": "Yu1xaS2vwCwj6FSTHnCV26kehctGjHaeg5s75EZtLaKR7emu7QAwUe52DHcpRz7TqLhBNLxLGgjRApyYbLjjz4J",
  "key7": "5WHTm19tWcZVrU1qkz2jDZAXcWMFHCSTC9kRpR2BzdNotmfjJ834YMJLTAddFVE637XTy54FUP1bx77i5VKQaVfy",
  "key8": "VeXNVjUbqufXk6hqzL4o3HRmnbzFW6pgAfjCeEQz92hHGFiZZLcbCCcwctNsWqwHqFjkrZ47KwFM7PNPvXWsxco",
  "key9": "3ufGnY44r1CuFzqm4BnNw96tmGmXFL5r7onbRRWDiDzsrpWTxuiNwpPeWkrceyidHYZRgXcBZZQpaYTauPC6nzWe",
  "key10": "5pU7Gjv1kpDsyMfhCFkK8VizfvhBk42vPoWR5RVEHMRwQmqtBKAAK4mWBn4k2GtP99nCbdXrAtt4rDL29pfXms6P",
  "key11": "3DjZC18CFL3fTovxzgtnXwQVYrEzbBiBJZ7DG6BQdQToXCMjbwh8VaXgvytJD1asGgJ1S61456mbX1iwhs5XSWFA",
  "key12": "3iVnRdnXQjGpkhsWUEKqHYSTjKYwukTuF7yjxuW9HvyaxUkMfaEE23M82JoceEpwFkmgZr2y2S39YA4dyNF2mnEx",
  "key13": "5YkKadQ6cqfseP3JZS46YfdJ9eDVKTxGvRGvMh6XCyyBvLU3R3mQdkx5DL5WVQ42UTSGnyQBCVDGHqHnN74m1tFS",
  "key14": "5Z6CsFYySsnQdM7HG487n1V1eRNJxmf6Hj8TGzxYASAKdAkMsi19YHwArGU7aAK1AtfuXM9ZYbPPRRS3rFTcRaRA",
  "key15": "2vwALNaKfPbqVxYY3WzRMbmdrnskKrLq1TC2tfkn4EXvFY1hGaqjGC87tJHubCzdxQJQwYN7BVxyiLC7LaVHm4yn",
  "key16": "4EPdFUTxZJYa7Xe81BxpJW1eCWPTZjXdJv8JPStPW88BrXdqDrnLiu1BC2JwdWSs2p6EwQthurmRTg64hvU2Labf",
  "key17": "4xakFta8yyb6EZH28EaywDuLrgzZH1yXdBufVEnDX1dVvBgXTo9Uc6796cXASLbDxTjx4Ms5ghr99YDWRGDjqnmL",
  "key18": "35yuxBD6AzkziihyegU9gFXjnedMDRx6SZYWzupMHxMgcYy2dNpWDbmAVWDghJnh8RSrscQj5VRhab1x2vQ8BXRu",
  "key19": "3Xfkj5F2yJLTF7emwauMW2tYGMdcRGVpNU2SSc6eZCfxvqHBZHQoaGhZYWKghRV6PfSHcSLEUAjQCBs8io9RrJQ",
  "key20": "3Qsca9aQRCkuF3fcXdE3X6b4am7bTt65q4K94cTjksZDzpKjvBGvy3gZhZWnDaaBVnayd5PhYj176j2BwuJP1KPi",
  "key21": "5HvZZmvgeq7DV3zcZKjUrTyJurMYBK8uyoWs6jZhyFG3vwNu4NHnSBjLU8oCnCPSFTEpLKwEwC3YHh1JiXV5vNaV",
  "key22": "5RsAXaFUwsGprr4RZEv6fCjZoHT7rcqRSupywoGeqXCk4uTwst8vgxG43mmfuGGi79khJ5roChn9qKU2eNFy4Ate",
  "key23": "5TxULKKj2mA9YKsTKpfksfAAjvMWdXTF4p6oYFfA2HP5MPuZgSdCzdZJFnzrEDr7Y7CnfqVQY1YMXrsdajWTUjuX",
  "key24": "5safxMs9aEorS49a7ZwjPDEsmKaFsh3rgj8XnJpWRJmTqT3HsirRN8aPyWCJgbejvPacY9rGpwA5TohFxey7DxZa",
  "key25": "5bmW1w5Yokyf8Yg57Ry1RN4cx7461vszXysDMcgfBM6yEzhoWy2UybjazrPAMREWUR53j3vys8LFx1KwbK2XwaQm",
  "key26": "585NFsysiuQGdPxjgok8yAth2myxs1aJnWwrpzDneSW9xLi9zTLV1CVSnEUZnNELHJ8FNiTAMBGye6tcYvuSpDUa",
  "key27": "4Yr3gdsFcx6xSKoY8iD2yiAR9ePqMp39prfV41PLew1PzfrLj1NSx4CUt7ZURNmREhr8Zm91a5J7S4UxNc56W9sn",
  "key28": "886D1mx6gVpp6W2368BCFzc2dQbX14s2hsMCpDk54fnAx9k4CCa3L57zNXy8YB56ErP9jyufM7xbsnoDFgaCf5S",
  "key29": "66kCGD9chTABes9rvDBi6MBJLJWRK37e56j3a7Nn1eUTdpMhLryjS8miSN6XEMCGbdFrDxiK7yTSjdVikL15KYEQ",
  "key30": "2qtFKU3G7YBGAjTnMAp8ccpJuZZg2YdtgNcNnovwajJYabCxX9PK4kjnb5RQbkyUU3phAj3JtA5edFEGVGNWDWBF",
  "key31": "3Ub4DynzoneSban6E6VBGiDH4JBphYk6hCMvkVytwXAF6svCC43xBf9MTdgjXxECQkgZEhh9wt6USYveDwJsXDPv",
  "key32": "5SEZkyXCYihoJmd7svEKMu2LhjJaBaUzPuG9gk4qNu6obfRAWZbbh5LBJ5Ct3vkyAKYGMpnLvwX9a8JfNje7h95D",
  "key33": "3G7t5W4wGHngiVF17gACHk6JyLAo8kY9oeTi8yRgzU5NHXKrCb84PcLPdCGpUQMgPX1yDKbMaEDsNHLzMGRhqc6C",
  "key34": "2jy4qiKFBYyX2gba1XecPzepog4CTuSh8aT4uS9xGmBBzhkQxCuUjS15gGe9UnSaH8kNMFHSzZ2FsoFibQ8awEw3",
  "key35": "3ZhEFxuJciAfF7eJ9APRZmspqTAtypwDePmqkTumVVvePKrDrmZAKLEhVfRZSnKuSSXgEbptpp6UUKWCbZVj1Vq",
  "key36": "3Cd88Rd42CxvuDhsxr2sLsoEJ4iPhghSFT3T2Xat6U9oeejxNNR6tqhqEhvd4RWNSZdXwHMScWyrDKW4HzRFTNfd",
  "key37": "mwdPYwVArXvQZcRiWED4urSqXQDAMb9Zfn6HY8J2jzvhZVzDkLZ4irFvJnGaGXZhGuKTmmwpWsSBeNVKW8ZvMxE",
  "key38": "2oGYVm4dK743RjitADcCWYfqT8KMwAp8s7xrB7tMbfhVGDzXNFWrvmam8DJLbPy1n5g8wMyaW22hhCSgcUwGja24",
  "key39": "66rbtp8sduYsSWeNHDam9ZdsqjGbZff2ddKnE3vgE7kBAgxhC8GGShsqHCPSW1hYwLieBV2xXKiwRGWpim9Zcf5G",
  "key40": "51ikEsL6NPhD2LbTty2YGc65neNqEbPFTExQXXQmpYxLs8Tqn1BXqHCF3SSSbu2Bvn8hh32Ey3uHXvJ4GUwxJM4o",
  "key41": "BU8z13KE5QuL6NzyYQ5zs9Az1cw6bMrtKzhpjYjSEyGifJ7fxNDyKfUazPr7cTs2bcsSE9TfUtxyh55HD4xW8i7",
  "key42": "w7B2zUoMBGKvN1L3mQumke8pEMaZQWqGG2Ke5tTniBmhmjxugXjp36BUVwPQ9khrQ7Did5AkGQj3reeZjqJ3fGm",
  "key43": "4GMHD3oFUt9ux6FisyHurVWYdW6vQkhKBCUuCcGot93UgHqtx9dtivZqtKtTPgXqWysJ1AkB4iveff1f9ke6Nkkz",
  "key44": "3jhxYnNaMcLUVqFTTDDxAQ7HDJcHXfGWYjAVCWtUR7QnAufvcrX8Qr5SDEnGfNzRvKAhrDCsbr68uBaQq7ywAciH",
  "key45": "i8Y8K1pPzNG2eQbQzzwmr79XHKjQhMYgCW6AxnW5qWL6aCfmCtEW8PBEiJGsfSeANM3Q5MhNYcWjzRrRYhrAddw",
  "key46": "aar7BubCEJpSvrEyEwxvwC3fGPjPo9bs2g3fyBJBKsep2TV5KKrzjeDcB7PD2xM1sNBk237xyPtws5C1PVtcL6d",
  "key47": "3LDBDDt5RyqQsGHA6tASEddDbkN7GaCNQcf7TPEUiwxsVBPi3DXPBqpz4Z2co7Be7ZUQJ2wykSLwMpMwbGRqH4xC"
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
