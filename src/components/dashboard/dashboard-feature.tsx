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
    "31QEoAnZQBNi8NB79uaNdy8rDUR7bXzCpNabMkewUBgPTmJzD5aUz8kUM8PTynnsNfw9QHCsVa3ZxcYs9D21v8NQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rnEw893GsccKzLKDPvXz4KjXgFArJJw8EoxWzCDffXK33bFXyHqWAsXvWQGnLuzf1AviUDJVToV7j3M91D7xNeS",
  "key1": "3kgeMp7Rh2qrqR5afPzcnvEZEHptPc7fjfPJLGgRgWRf6FSQRjhXqXQqvCdC3ewqYoCKJNGGrFpmr8kvzd1H1HBr",
  "key2": "3QyGfQGGXXHVY5suWJpSjYUbQ9dBksHu8yy6CYJxEmgfurujgmDocC5zfzz3Sn42BzibL6jLshiVHKL6f2Lq19iv",
  "key3": "2noprfNiQNai4HqTLzx5qzssGe8Ag3x6sdvz2WfizXWW2cdRKNNzL8Dj8TA5Q78jfvk9dWBy2TpFGzMxsEz1ycva",
  "key4": "XHH7nPNGvxJR2sWu9Sxr5B73cK4zxXTxYTPXCfgf9KHoKQRMTuvV2Ac5DKTH1jJ7Z2X4LZMm6xpx7BHNdQts3kJ",
  "key5": "2nUroSMFTyLHydBYjV6cB7ZxbQzzAcUVWpZk9JfBN4E2vGVL71fQrJEVJ6Eeg1bHWTE1C2Z4vi3A6EkPGYbuS7yz",
  "key6": "3puM3ms2ETtRhhjLFoyZbGZ33JwvSvqHk8fx2WNEPTF5ExfYEibBkHPBJCQaV8BNfXd1QZQ7NMnBy82w4iS3FVhR",
  "key7": "2z9bihqkrs4HLb5RJibRX32wGoZS86oYEXBShyMbGNimaSaNnQ5dxzc8u7secsVNKTo6Qv3xusjXnCNs7n6bvbdS",
  "key8": "4H7qrgTFkLzafnuf43egVynqusq1A2Ye5iqiN9bmKn3771iM8qZWfMF5PeGA4rgS71gYNsvQhZjZaqCGXcmzZ3QE",
  "key9": "3oZATezAG2rWxFeiecRQHE9YDmw4GHB2U89WfQ8jwM1SAN3M3Qx2NfJghJ3WhtSYsir5rqrYT4o8ZMhT9HeKt7fu",
  "key10": "cNxPi9NYVTWnxnGgf32E7FrnwR66xdfXHnCMNNeoCFsyHPBCmXkfcGcdZrpWRJi3iUdPYvG5ATX74XZAj9eCPj7",
  "key11": "4bSwbvBq39Bs5srkWnuUNNT8aGbkgCvF4X5K9A96XYcHrE1ZHi1p7NAY224DnmqnBQc6rS8xeuh3bST78yHRF2yU",
  "key12": "wzzG151aqQKTG5FYTD2cVK6kjh4zbvZ8gxpJvLGqzAoKf3g5fUgUZG2XPMS8Z5VeFodz8XettwvdGVNGKjagv1x",
  "key13": "4HuPcaAsTDSesKdrqBRQXAKh7pLjC1woRjsHTZ1hbYH48hzLAhJTRmhqsnnDFfquXWVY7x6nQczptQuTgBr5TXdY",
  "key14": "2khVijoSVRXUtd9tUUS12fM9JpgJwmAZC3bGa1vXYnpbwEET1NckpNXqcCFfyKBsqkHgCfvqbQ2Vq7Jd8R3dguUF",
  "key15": "4gaUevRrRm7q1JCbZ5kaDfPbThA4LJmcKzGZ8ebxp144eTTzgZABZC1eoBLD9SFvu3YiLbVFXjj7QZq8KuxV9rEK",
  "key16": "46BrRo8T6cNVsMcZGRPmwz2BSM1dabn5jDC9UBqafH2vc4XQtSSRGpUKLEH2Lek97RTPQMupZSBNbmvT6JvpPgCa",
  "key17": "4x88Wr9ozQM2BvpudMDAKhyWMF1e3MxQtKmMKwHkXdRHK3uVVBc1acWb3BDebvKXKrky1RKAHqNVttwETz7FQRj5",
  "key18": "3JmRBkDgVn6Kzc6XTpWa8eSCFqMx4Jr2g1VdYCh51Nm14tWynREmedzCFBdYZ6xH1535g9BeZFaGoJRf8ZJzWsqv",
  "key19": "4UHVhZJARS68SDzXrjh4LcnzFHit62orFkhKy1fFczTYsYyDrbAiV4x4JzSL7PYHBCBEFbegBMRmVwxQPnZuydP9",
  "key20": "2CJE4oWyTzHYfzNn6FV3jJZXw8x1rZLN8t6U3irspFd6Po5FBrEdj9ZdNkGt8XX6fVKY9AL77kSRUTS6UJWUc6qd",
  "key21": "S1FRKgPLAhNWYytKuGq9rjih6QprToLuzfbG4KZeoauJVSHhBiyk1Vw9BoNSB9L7xcpMb8u5R4xhmDsvyuxiwf6",
  "key22": "2AixbThsfYUsf8BbYNeAEWMNtkhK6JJUZcUUgvhiXEHEVwb8bFFJ8Bg7QqH9G9PUqST1titxAa6HjhAmHGcxRNNF",
  "key23": "4UW7a83osZySWhUaNwzZpaZUF3QFbKPcU44HFH1WSmxM22b8Xam9wrDbT62n9Juf4UcLav1Tccj1oJiDz9xu4S5A",
  "key24": "4AkAK6Wh4oGWwry7egzVgF7ZcGeQVjxMjphMPkbthbnSiwkVgnKwvBAtMnwtammTZnxgdk2mrYxTKD9R6xkqQNGH",
  "key25": "3FJ3id2aPAMYdn9e1d4uqQtGbRjF4LtCrhhgLSvmYTCsTErhSCDWF5xUdZRifyZp2QrGs21RioZTfmbFuL4LcRXk",
  "key26": "436ZZQh4uckPPNDZedKL3XqYkqtoa3UT4eSo8QmADdBBFFX8BTQaQS3gTqrPPCCdprb3dcQK5xwfwbJ9YVk65FwG",
  "key27": "4i2nwvFEVG7pvrDfcEXobnVZN2jaieG1hdsJ2EBqQDnX4bQHt6gxGF6AUpeXDPpJyqdH1yJKWEENe631FD4FWqQT",
  "key28": "32zeEtEFohRkhBtujYcLrQrkMZJd2CGkZ8S9WxLoYSypvFBbSszRGmJAiShCZhrWnsJVESWoLWThwomaEmxFriEN",
  "key29": "344vy9PAHTbHmuWnv4geMGAyMyN87GKtW6YVE4f3qF4j68S5jkatrsLbwxorcigQYkB9C8sgxKVXTPp3FAzo8SND",
  "key30": "hczDCuq6UVWA1Ki11kFTKhgDgJgks7V9KsAmpT7jBwNFNX1VfA9r1qZrRCheNP1nGmZ1HLH1tnw2Qp22PUP5uCG",
  "key31": "2iNg3q3hk188EyoavPhnxbrMLCJJEG7umdfyB6LK6msDvPksqjxuWKkDagZpVW3joqYgBPHMoMz3KN93dPNwCmPy",
  "key32": "4G3g7hG79vt2kzqFVJVnuDkXS6PpVkTLuVi1YEcXKzTGYhhLVn4FRoD6oabPyNKb3hwwMuKhb5KFSjzzFWFxT389",
  "key33": "5fvGTMs5oaHR88T2tBncKrDECNwigQ3KdCP38bd1f4NwZ9HFVyvnACUTasMyStuqJBCd1vt2xZD6MfqmQsredbK6",
  "key34": "5m5eUNjkMzHdup57qg1WZFzGRYsDmkFLzimMLfrfryvq5t7GgL3BULxBiLpGhy5oTdxCmg9dNWdz2B6WR9WUCRtt",
  "key35": "nVE5JctCXoGMedNFVrqkQk68vxnvkP6VyJEHvLYd63F9ZdEXMnvHgbfBKv9UUzYFSMVWUmHWGH4tWBrK6z5r9Kt",
  "key36": "2YAwq1862nHbiAbimjtJbDk8qD7zVJYb5k1j27SANQ5md8vwnaMt9Hgjthj44nnUrdhG8xpD3V8QaptwxG4NYhfC",
  "key37": "oSdZkmWWrYcgvKs7iZw9SW34pofm5M1tot2mNMYXhy9bb8tMs6csM19wSvFhvuzrHYBHhxq6Jk1nmkkpP7wsde6",
  "key38": "cWZKjRYEbHVAvLk5Wai8K88CBqNiMbrMQLPggtZ2BMVsbAfteMAzWbZwTf7V3pncdJMCDkpyrTtpy8MbqcftMbc",
  "key39": "y2P7YGLdZqWG2qMNms7caxeE8NXrpctjhq7nqogmEZdnbEKUwqPP5z6LUtdxsrLn9mbqcpkcS5kLHA1oDyquqRz",
  "key40": "5FPw1wxhehiksX5eGdA7X3TDEfij5asEkvP3iZD8JPQvF2Ht7ZdZp8WXVmjHgmZbwAdGXMqanX48Fhp1bH4AoHHv",
  "key41": "3MQCYeGLRyLBxbaUJTqgNfEEJ3DiwwN7T5RNnMqP9A3tGwakgyeXVDXj1LVr8yaZHigwn8R5StCKTMvM9MeiB36v",
  "key42": "5Xa6hkkPALwfUQWGvgGhuhG1kFEJYyJgkrYEuvdf5yk9aj9sPnYrCPV53W4D6bo9EAurWRqmEZU4bnEsWAzpjz3r",
  "key43": "41hqx44Fx8UEbXsE74ooaavURKfegF1wBhupCtq6mdsC3dL2BzSK3LNJMA5WExYsW4tkQiCJzZcYn6PJ6JduWJqB",
  "key44": "1edNbCQgGR2djL66abUuF8k2qvKxuHDEnhz2s23dU5W2F14K3Wz5THZPnqkxtrkQNgEGvSMGDo3iHV1e7RX93zH",
  "key45": "4XWYqgF57piH2vsxwVRLGZdVcCNjHCe3h5tEVR7izjQWvBLWd8Ha53PaxMwY7Kd4x2fLqFnDkUUBKqW8i8VJ3Rwi",
  "key46": "2tivDHKocUcvK3QR3KJ1MYqKURvKqMNzYKyUqppSvCJpqPCG2X78UtvWABZ5easyRBUD1K48Mbrf1MaSpJvgzhXo",
  "key47": "2BorQZJxmu6BqUUQ7waBS3ZbZ7SyKxAPqApV3EWM5oRctfpT9C4pGMqQWHE4nss1zK5cy97CD8xW1b2fPR1dPpTu",
  "key48": "4TXrnaUJybpYm989fCcQ5HeMdnRyetDm5eafwqkH4FCHdujpupgf3gNzFTgB4YtfJSWQEj76Q3wrn7mRyBaTEyf3",
  "key49": "GyKp4SJZJ19bKTvRF6715iG7vJiXMieRePYuG86HyJrBDKRZJTmdK4v63NYf26Hrm9kx765A6p5V69E3cu5um7b"
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
