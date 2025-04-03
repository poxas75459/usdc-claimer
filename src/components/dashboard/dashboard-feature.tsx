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
    "SXjZPbq8QPjbTuLSWCAofJKD4FNVJBsH8ef4i8YBRWGL6FpimuAkcjti1KQ45PZqLfQxBX4bcTY1PrhKijqH9DA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UikbDoKUniRdXi6uoPWYwZQj8m3LSVjmRuzoS9c8HwfBHGeXwQaVmYvDnENcKS3nyM3YQy6VbeHsZesviziez5V",
  "key1": "76nPiwaie5yXRg8SVMbQePYKFmMeodkb9wgLwt4qY9xB1ZGcS2dJpM3agqbzxtfvdekJp6o87rL7i2Hy4oXSrZw",
  "key2": "4YLxYiVePdmdPdHsjNTpTkqMbv22WX5Ndd8bmzmyubPD8rzTbxN2TCrZLgooRYv5WBFmuagM76ATrSDdvChhus6q",
  "key3": "2zxyWDxZtZqkouQZw9XG98nUP8dH6834kTWXE64eZnbKBfemKSreh17GYBG1Nrq9GgzNFHKSY19gvvWd9C32yPRL",
  "key4": "2x3LajfFnwLfgeuFXB8EUMF8hA4chUmaVC7etkDKVo8xkK781QRBJDy7y5riXXghvBTjmX4u6sXiUiK9kMPcMRpC",
  "key5": "3JbEpQyUzM1iAt3EMqesvSB1F1zeigMub4fep2dTkuye5uTpHJkHCQAnVprBzirCVoxde2dEJob9Z14jSd1TWSkD",
  "key6": "3FdxYXuW3sF9afp3k4rgpsPE5fD3W1dKwhdMXo4tx1xHjp9qQDDwoWHZU6VYiAxLfiffgG7UQRCdepBNWPfEmSfr",
  "key7": "17gz1L4be7ndGN5nRfdb7UB2NrhnxiG798JfhKCjuWQ5UaCzVWB9fgYy32otBk8wTZusGLWoJX4FEKVqQFH6oas",
  "key8": "3BQ43s3nJUNDdZ8hQ1LxvGWqEXiqGdUSwAmcc9hfW2gZ6LKRAyXSLrLWrzLbVAZjj34mZnS4mRJ3w8q6jMYcrYG8",
  "key9": "3SYDtBigYrNiP9vHDNmkuSvGuieGWAJBoai8rHvkrFdt449ciAoHrEDwjABfCpTiY2iaw5wPsKR4qWehaggKoqv2",
  "key10": "65bEn2KZ9pRRvVAg4RSN92vP4WdQwybVQWTymdGT6YHu8NybXmHDoRen4Z5urhLz959pNZ9JdERorHUPFPWW3UfJ",
  "key11": "4TfikfqL9yh83vGNDgw6eXeBGk7bw9Q2qDBBwWAs16H6qWGY7qZjj56bJmzGMe9Wmtnrm89JceLGEyLs2VyKAyHM",
  "key12": "5Xn5PSnYgG2J9oDztpDWon6C9qA8gywM4Fs29vXTKgMBZMzorEPpizEp8cHzQrEEsnZAGaaxmPdTHQfuBf8vuUEf",
  "key13": "1G6p7KRH1pspFYxrEoV6Pm8nH5UKBNzcNVzTiEn1tzVtYKsvXnwcrFqnQ6LtQth1fw8ReCKc3zZhkvj4B9NmdVM",
  "key14": "2twHSZWsQGMkokw7USd79WtZui8DDgBQmoRP7LBXyAL5YPXUYSQjL97Jj9AcvdD9JQKjET47R277Deh8ze2FuQiM",
  "key15": "5WCinYioeG86oJzZsEwLdMiHVrU7T7J8uDGEXvbofMnACEVBovRYSxBUBxYs3PcuRT7bjRjGkg5PfozQafXH1vj1",
  "key16": "4y7wY5YJbxcxQXoDkNaRQ74DpKnA74qKGne7rVGLHhB5g74Qj5vu9tXxy1Ve6Y4YTxWpCaFkKSTNzuaG37czKgXs",
  "key17": "39Cf6FBZKEf4WxrCbGCmCqaTUJquHyw4xu5RfCbgMPR6Px1pdzuyMG5hCqV9R84bhTLHX7Dj8B4iuzVAjPY8uqRv",
  "key18": "qrjokqUPevrs3NjCb7UDmSe9cpQYRfqHDmkvPx1tBUWLDsPFJBU1qdbSdNyMxwRw3mPuu4mMSvFZRMnRcvM8VgD",
  "key19": "2W9hd51oqZnWF1f8rR9mFCR49CYddfmanapft5vX89hR14FeCheKAV4wsAoYHSxDz24ugAqmFsstWMjG6G1b7PMA",
  "key20": "2Ckr9q1Dz1PQJ68M5s8nq1Hh3kMetoUfrP8wceVXtGWcXYWLAQmYSFQtmSZnuncEox2YwiLkN4TwAw3d3h2jpJjs",
  "key21": "5R9eHBT8gjQjqjKooNeQz47RGezHat815gL5D1XDV292mLQjdoyt11YoFPm4ApiQMDoF7svJ4F5qGHpRdGjbJuRz",
  "key22": "5yUzvNYQctvu1RyLvxZ4PcdkkRFn6dv8CUYFw6ZdDtyATEtYUMZf8cpf9W6fcptMsUtrbbqejbhLBVPtCo2QdV7P",
  "key23": "3Xwe4379JSKzgdUWKWFP6FrJwytNfc2Phv4CnuSiBZ9d3g41HcsuJLxT3We3d4FL36M4qAoRLbGmsHH2BPnGxk2J",
  "key24": "39cZSVngYQjRsREAqJ9MSE3fNn2iUaifpPEEE2cxcFo1dfpzsKJtiLPaMoBXwDfQ6KMuuwSYUNeUN7rf7tgLMBfJ",
  "key25": "3w8mkH16DzBYMtPWMCkVN2bqALHAkEsNQzZoJA97tsv3hJ6dWsXa8z5ESonz8NRN57NupJQKgvZHHie2e79JHoUV",
  "key26": "RqquYrk5ejtspWmWV8ixiHWhff25KttyFq9G6b5b7ghB2jtYuA4oBfMa7jZb1pMUqj3uTrfFGFA6hWqmAnrUAZK",
  "key27": "4hwYdy5yjRo2Q2psiXR5Pv2ZKTgkEk36YsgczeyvYkxqFTC75PvAuMutnKajjdNzHJtdT3AuMz8nF3rLw5bByaJY",
  "key28": "ci7Yoca5c28KGfieVCxLiTHGSSozRaDDFo1sfykaaq6cNJVchfoiPUvZ7Yz8BHjyVxzuXF6Ug9w4rECiQTf2spS",
  "key29": "2N8UJWQDs562gz1Ne94CKnzJFBAQw1cSGjvnZia3B1SL5CnV7oP6UmJ6KSCjksviEC8528Bb7pgjDFjj94pS88YQ",
  "key30": "4ULXKxi4DNZmPgnBemhvknEHSs7CJHgYDzKjJFjxMKQWoZd3DSE2WCbrn4ShSZEWFNevG6Vc6u2YvuXY1jP2Y5P9",
  "key31": "4T6ZgPmCK6DcpohbGxSHqKWn7BrFk5Mm5KE6at8rJPwr48UHKqaMrwsx62kXa7otmzFQpXA7bgUzH83cgMVeRkfw",
  "key32": "4vREo7eG8rQxcNRXUDVeoeNsgmU9mRj59uJ7NmqArwZtogSgofFESkxeudEtZJ1rSGi8yfBdvFHhRetsg9M77csh",
  "key33": "5UtjcZx4pndEwEABmJU2zD5VbMv3XmXXGNTmhtozLp4DBeXZpyAj5K3jMYnJj8WgLZ9HybapX1GsdhiB2pByV6sB",
  "key34": "5WUmAFj45tFrLDJVZ6RodkgSaiyZq6KbaMTsZRWnEym7PvBGrXPgmGmqEJQJCnvsaQ9ojcZV4pfoX3yqTcDKfETE",
  "key35": "38CVbF2RaXvwZ2kwJksfbpBPHz2cm2imQpMgeVtgXXHYFGDjJphhvzUHgqdVyC7vtEC6zrWG9ab4SA7iPvzJs2tR",
  "key36": "3deoTroq3xBWXAGkDLG4mddcnVu1KTjCL32qFLyErLJQ9NENNikjuQJaFqkSFxtviqscDCqoYce1xb3LsVYwFyPa"
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
