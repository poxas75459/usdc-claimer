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
    "MPCnEuKQqs3rxvqvX2tQiHTynfPYDzdiqxWKMayYGyYgTaULLG7vBYUEX7k9Su3vNwxgrySWAtKnby6XmBsVTyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jyB7qRmzbK71RUy6KYPDrSmbqoyyHnuU6jBjYUnNpznQ7Rv8nmyByd4MrvbKzpBRWzNA61FrLc5bMQjfZPuL3k7",
  "key1": "4u5jB9z8SDgGpfFMhc5B1s42DwWkVguhZPfFejqTLRiEMnc5VzCEpa55mtP1fjMVBNni74kep5aZZUz49XmnY9ji",
  "key2": "52wKFsUCAbnyxzKF1NKEMa6CgXD5ht2bQpJdW6dFKhCKCVTSJUccWX3UPro9HmU3J8djgXyCnR2BQrKbireA4zJ3",
  "key3": "kcGTHitxwAxwBxZhqZo1XmGZDvChWgvQdJ1kTR35ZfyJ55U7ZjyEmXjYWeCscKspgB4RHdNBZBXRVapkAQZhSPc",
  "key4": "4QQcT59RANAVU8ktqB6UmaiFVBda5ovVEHCJPy42mkvczKadUbyhPeVTS3ogzncK1yQKVNSm4sGmihz7ZAddz4mh",
  "key5": "5cyo4zBTbNudH1ssX2aFtYJhd5RDizDFAXn8jyHXvPWJWmspfg9DXcwHDZ62sqvBqkgCsejvH5atyPTs66pX5fNZ",
  "key6": "5nqSyi4uDEn8m5dx4vmgQrK6xoZfyzNKCq9CAYEdTGdpVXke5CxPG54p3dN9m5zXtssCVtshQXjrsUfef2wPqNKJ",
  "key7": "37h59vsBeQUb2hfhge8ZGXsXMF8obN2fFPj58aKkzppHUJozP1sTdiPcyS9AUN44G9i8ahdQ6mTKGWmsym3yNqvM",
  "key8": "31ZL3vYsYSakdtBd7eSHhrttkMYwfb3ZLFbJVVszQH8Cxq5MWvc8vLypAaoj2koQaUFHzpp9ZQkhtLVxPxvuUJo",
  "key9": "3BcuDDL3jSPMCSCS1bPBnbuQXUjoTeRq4SyUoo71eZuG7yLfk2hfpfNHaFNahLbxfmgvU1kkhcA1tQTpTucN8Bjs",
  "key10": "cu9fD7fPsbziyxyHneEjJCuy4KeXLrjSc7YsdzET6CiNDsV1kE1ZE8zmTLLj8U6YtmVXRSFKDsCpW3WtdZhmXF9",
  "key11": "4KpHGTuHcKKfEcik2JGx3SjBpVFBA5Wr3844D3jLnUo3cd3cKu1FDus7QVasSPBbpaHdmfQuTnkXg1pd4QPg9Cy2",
  "key12": "29w79yUXesjUL4ShZGMUJgmmSi64dponX8owVxzVbCwunDFnpAvtBjU9ZnccKjUa3cXwMsJJtT84pdSqW9B6temG",
  "key13": "5cUzFZoi9kGdYfjLqQEBG5K6WLPBEkf4wMwSRv3o1Tzfbe27fofjd554b3CdC4NViCE8C3vqTjS5tfHm21tsBWTZ",
  "key14": "5UxYan7tbvgQztGBUTuC3x7F7JzSVdWR511bGto6mHDKPEsXY3hK5yN8Z7GRHXyr41CDk9ifJLF9yHTGPgxUkbYP",
  "key15": "3B2M1QtCsVYpNZZ6U7oMu2GDzQff7JosxUc3wQjAsFk8mVLyzqaCWFVnCm1FttJsCkQa78Q1wP3jfrNEU1v8uurg",
  "key16": "5XKACaUKjt6WLpz3eTrTQK5xizcRcNXyJLWXNvxWwYTdYsF3yLTt2VREZKYXqz9hVr4eHhujd4JWCz4d4o9sqN4u",
  "key17": "3CjWdQ2EwBZPhKL8nUj3VuBpXX65yefV9E39gRvCqcSVKobkVFVLsmf9X5FHd6HzVbGeXWjCpWpEPq2wqqMxyfDy",
  "key18": "56xSWufWaxAv1XFo8yDwnJCAYYa1K6wzYjT9dtTWRkoSGqLPSe51PPRtpsieKn2g1UpVnJZKXSPJmfWD9Fonu4jw",
  "key19": "7XWehsBCg5ocvuXF16YVv9XiSe7UxpgA2qKL7iDAj2Y2zCbbGBPQSwxchX26CTXy557iBpCsogPvymCb5G7cvcA",
  "key20": "3zJdxjRvpJ7rCDr8fNEpiAjGCYsgM8z8da4Vzfw4S9S4g9csRAcpzBFUmYkR7Ph8AfN6LXS4Z8gsphe7GdXRLfGr",
  "key21": "37CJQd8C7ooED6h7huT3c5fCEQbxDybmypBmBLSKV2u5Kxx1RjF48UWBmbBY4yS9wW8itzXnrZ54e8fs12FRTCMm",
  "key22": "3vGJrXRJU9PDkgNBCuw7HpAKafMk9Qiyd6hKSRt41vy4FWBqTjZF57PwfcDHaQJZt4hozqdod6J2FVFx62o9dCxD",
  "key23": "ZGZ6uYHTyNo2mbvU9EJz6AGmeatEiPP4yFKmJU8czv8mzv3kDbn5qB1WMzxTpGb2vBajFMD1AimPT7wXZcRgJxH",
  "key24": "5mJxzuebCvBoAKZJTkCEXQF67RkZV17dQgHeNnAprvn9cTu8mytJrqx3MU9Lcyjj3efjFmsXSZnyMb1wUtpzrsPh",
  "key25": "EaK1AsCTH6dNtXAybJM4uQd515WVZyG8cwQG3nPAbHEgYqPmSA6Wr6X53Hr3N7NCSbjNhy1YGBa2UpjUWq9qi4r",
  "key26": "4oH3fvnqPXZpHvLka3LUidq4kKru4HTcZPu7hR4WHPFw79VoTcH5YLTshg6NMXFviK54oFaTPbGgQk9CdEM4ZWQJ",
  "key27": "5zGbN8tHbmdR4dN13MLcTHtZMfoaSDXNKaQi5wagBGPuSVT9NJuZXgHD3xz4tDHZxhPrQs98z95kTjS4MrV2A7sh",
  "key28": "YJXdY4czu6dyqXebEW5CsK3Lp7AvAqr3esVbssRY8exLYZRDqPMXYnBngckXB1MAW6yeTC1GLfpggc5yFvpT6H1",
  "key29": "2NSoy4VENXhFdYxhC44cuLSXBnL7zttmUYH8UXkRnUmuYkTVupRinywEyy2tKLRbzevDgK1L9sqWBx6uZHdGcHgW",
  "key30": "cRAzXUa8UpH6TsSh7wpwCtfKXtrj63byUcSNSRng3QCa3hmP1RRUM1FcNGpzEbRMjS652jqbdjiTZjRn7gF74hC",
  "key31": "3GMkqSnBJHXH7952mUFuhbPaNBH2TYv91dmRXUSv3s6BN8CszvvfUtG3JwVg27A34gTaPdeap6dWtWdgFUvD1MoR",
  "key32": "33YueFea9z5TB7gzTyu2tdPZJJq2mGPvgwyJZ5RaescqF3GuY2Sf3QnMJVkmLnfBW1VrZ9Ar4FBmqB1Ep5NQvGne",
  "key33": "2sfgwbFp2CpZzB2j9h1t4T6CEMbkBpXyVLKp4d4w9r7rc4VjrdPKULWAwjKzPGZhX24pj3m6YuuSVe1ARj26t91i",
  "key34": "pfQrTzU9yTsb7aKchfHiaqvCqVb7PNLV8Z3jLNdJAwnXkG1LAdcQCqDVDzJAwz1YX5Y1FzrLwLjkqtn8oFMs8eP",
  "key35": "3Skd5GQQoTuntFkKXbhABH2V2rfcM8S7a6XtbWSSxGyRqGvSn87cA3zgyTo7bazmjVm7tgsuxiUii3iBtS3KTwRG"
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
