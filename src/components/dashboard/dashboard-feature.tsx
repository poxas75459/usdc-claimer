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
    "3rgvDjWgiLLVQuUy9guf6yUZSTWm2c7Mon13bPPjkz78pcAeEx3iW3ZUEF6hPhakJQXmQu2rXEd8VqkZXoLFLKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KBHskAEucHE6D9Vj9QwArMEZMd9USbFDzzrTWjDJLgwWT6usjup2GgnBbWZLsrrGHs1acYXskhEAQhuFoF5qp7f",
  "key1": "5YPN4NyPS88kkohPiAyf28apDPuWRF91Ry3HeJKUHyMzJLVyT42bSTpLoBRhBJVaPuYMBD11sGfmfaxzjLNXSqZ4",
  "key2": "3g2xgdEhgn7bktrxQ3NNigr6CxGYLPQLzN1cVz8g8h1QECzpmJprSZoa4Z9TvanweSuEheMEr1byGNAnGHAtgavT",
  "key3": "5aCTKdj7ssLXdzEVMNi3MunnctvfGUEikTEs7wV25Vy1yfccZBT3m6bipB1jSvDZwDVzvvFfFSL148mBC12s9avm",
  "key4": "2MFLVHiAGc5DnQa4qf9393J9gEFwehJMW5vSwAq2ovmQmmHoKq9doBeWmA5DUxLVvcXfkVJ1D9CQnRPTwuq6n4d6",
  "key5": "3tmHypk4mVv2HAUEiu7EsH5XbtseaSHAhBkdtc2KNjBTauoQTWyRurpzU4xx8x6ZPAroMspkgJtVw36sBNUTcU8V",
  "key6": "4Wg1XoPvfTG3DCpxBTUQaMXodF77K4YgYmJ5iSpzTjFYy8gTuETKEEPFtVcsjQQWUCdhy2cG1KXYDi9qFmwqfFMD",
  "key7": "j98u4L7nwogBqhgcuFgnLJWts1aQdQVyVXQ93D9m3UWVAWePXtn7pU4MNPrEDtvi6a2GSnvHPewUJKq3gBXMyXm",
  "key8": "2jkKP9PRC2qgwK4mbnBBsRp9ZdgAcrMQWBh1JUY4zJ64pxmQTAQ4jdEs2ECPzqWeYoUcKztotTfrFSwBqzt1Tgi6",
  "key9": "4EfXkHvLz13Hu2BK35yfGomthFLyLHut19gDLQwsAo1MYf7t5ycjYSRuUrvFCbaikZd4whRPKa4QX57XRVUmyDvA",
  "key10": "6499KKWXTFK6PNaiZh3hT4Py9qgA8Wy66XuwjGoozRdJvEaEsJMYkKMphiMfC6NmBYxYhMC2HFiqzDXsymTu2tJZ",
  "key11": "3Kw45sX3ahp6yMhRvyYNZKTTGLdJzwujUHteCVox8GkvPvPyn836S4ytNGBHvzeyrM7G2fDtRtVWZ5YZvQu36T6V",
  "key12": "3MFnSKqbimVCnujQNnAPETQC4NSLtXtW5DE1qFKbqKxpQE8T8CD2DHGmkwNNuWrZrNMHXFSZzmHFpd5oyiUWzGWM",
  "key13": "4NMihrcL65EeyGhRG5v93aN4tXHuXhZVwA6eAhcXcwYfy1XZhwuHVaRsUCGdZQmgiCoSL2XhdDf66puGt3n8mdKb",
  "key14": "36zYwxF3hFgkKN7VJfEUAbnepwhjEieXAfsSUQQVKmM4XfcG3KUbvZobo2h6dnN6jFWHNt3J7iDPadYKCQ4vndMZ",
  "key15": "47ikeMjUKp2Z8vW35QGh3jMdNXSCeXxzERaBBbBNqBLJ9SehUmRTigUpunMEXoWsHi6exxHDkMbSHq9XGMZPnUKZ",
  "key16": "484MXhAiyokEdnA6oksUbJeb75E33MHBsNqXcP4vouptS1qNq5GpZvp7Vq4jzAUB4QRaMEUekZvQhDZYZw5PbW5h",
  "key17": "52NUwiY9zzPSSzFATaBAxRRzHHnnzqfZePoDsthzHy1Q3R6KqcSwmpyLnQeVDjnkd4hZnAgmcGeYPP7ixvTeVQ89",
  "key18": "3jxu7YSzzAns1uBVpAj4ch65EhPiWNgdTJSZYRf3DyfXGjUuJDHBFJfwwNjAGvat1zhEUxdYqkcN32GAJHth29KQ",
  "key19": "3kT78vGrjAjRFkFgFujBamswa4bwV7CTT2jcM3ZTa7suW7PXEUBmBH499r2KgZx27AsraxyMLAUXiTBPo8rEksuQ",
  "key20": "yXDomgVEPmkLvZzfW9ZJ1jmsmqottCJ8D6kgJtcK5QfmjJenPv6YCYuSQRXuJRPME43hUjGagcFY25tYY9k7eka",
  "key21": "29peWoMKNPc2H6JSQR2awURqNqJ2pDbuAcqLZFwRZyZNgkMGaapEuYMtjqWK4j3iCh25zvavdEPnigQXD4wJ8t8Y",
  "key22": "2sa8fe7PjgvfnPajgamEXMn9npp1GnYxEz772nUHfX7zLD9VFqUwdbRcomphTtTzKUta7AeZcnTa1XdGsb8y4xxb",
  "key23": "2m3fpGJDmQ51NaRMBF19FQXpHLGsKXZkLZhSS3QSeeEAp4D6GvcGwXCMdQcjvUzjgEHagKSBtjz9dmP4VQ3Kv1Zn",
  "key24": "5hY2KM6dRQZgCmMTeHeba2KEhbvHNTSqzt2yK7rsRLcRdJQEDjSsw2Tg1iPWZEsfJk9XdStKiiCNBJu2RVq8SFh",
  "key25": "5PY4FHus4uFjVSb3E9mLpLVb4LCetBHsYC4SFziuHTgtrYGtVYYFKSY9qQNBFHQe3nguu21o9nSUgVLQNdAE77VE",
  "key26": "5GvdSSrnFPNwtQTnkfpE2Y4Mop8tkpyAf8mbhWRHZmfGbvYG9w6wWaRprd1wQfKCmhsSpfr9L1DNJCceaPc8TVnr",
  "key27": "2TaWZ3UvYCejbHXNyQrCdVhXbuH7TD1RNWqSAxZQrbC6EYEuW2xuPsFBPkRBZTnsrKdtTyN7sg2AFwhcXCHaJofc",
  "key28": "33U2nvG7AymjJu4521hp1VA3zKMrGNzvVxw8AopQW8p5C1rYHeRC4UW2FC5N8jMcrRK75fQHs7cZCMThN8DnAddv",
  "key29": "3i1Lkd7ttnUDDqrVKZTGJB8jXQnf1ET4fxXKRoHoQWocQzvN2A1RuEVFahZJVvmwd8mQxPNLqDcGBBGc36xpfUnR",
  "key30": "5nqFwC7aQr9GB16e12YnGoK5f8ZwWC5egK4JKFNZr3vzog1Q6xw7QrYcqrqQNWhA9Wmtsj68eccEpVP3URRLLa9u",
  "key31": "64tzqLcTYhKiamFp1h1ve1ZX2uBkrjMcYiKqApoGzPBo9ujwpBeokT7gRKHvwf8xU53GpF5cnaPViXBigBMCYQF4",
  "key32": "4bF3SaYTjsrypz3Pz7gL42He8PMYxmyhnjAEZVVkmZMKjNRAhBJdapFRYNBs9Ttj5n5cGT1qWbExFS7e6QwHsjX5"
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
