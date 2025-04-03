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
    "3Grgviyg8h6RNpffWRDwvWoTHMArXpiE5YtVVC8oCurcCbvZeb4ZpozTqm2X2e9AkBJzkUEF8hfqjMgm7CSoggMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EpPAHZKDUK2TXsq7mCaL4XF54UcAPZZzpNo9AhbNBT3AygQ3XEChAEKPefSnN65gzYsHUZKLp1h7GtXYs7Z8eYo",
  "key1": "4kCG2cN6SMdwDVvvA2nf4Kk32X5SBe65VQx8dVsTSqTKYkMpW3uK9kdvvKMzmQZQzzKszzr8NozwDAHvecXUqvxk",
  "key2": "9dvbomaaYZZCdzYhULXNK7SMpNxr34anyfGoqfervhrhEgHgrfWrAsWMGzpk4DGDMevTZjfhWGLFqtQHC7E6gbL",
  "key3": "21q9m7EWfq45cuPEVGCQR97yG2D9abY4tdbytGaiuZmdcyjbTrZweYJKUcJCkyPGfMntopkv5gZrjzG1CHv2Rz1H",
  "key4": "SZ8CEbxArWbZVAcc5Hv6hoMYYHYjqdMFF5d9BpGXxEGuSQn9KTPbrsgCX2ARTXRVZtCKtsyN65LLPsVodDccFiu",
  "key5": "21fcEbUJrPK5exVoEqFdZ2HKE9PsSsKh2RRCdfM2unm7NaMPeNe59wN52ekRGnYachN9JTME3CXJQmJYt7RRDtS7",
  "key6": "4xaW6pZgPsbUrdLouhFiZ2WbhZNukQ8v9mDEqiGe4DNy8CyDDPLJFAmXBictrhxBzkncMeidiENWmZq6884yJBgj",
  "key7": "4JY1ueG5tQGBgvE6oBj85dgouVRjYr5aXGAmYkg4uGhcdvynp9NKsiTWPUvqWY1MSAxoG2eMcdWS9ffUCrQkfiSW",
  "key8": "2W2LYeFDSNN5hjNFB6WNyLYZiQe3CCP93vmZEqX1LJ4DQ3hZoiZfBu5aV7frxtSoYmyT7tSC2EgDadmKkYGmEJ5d",
  "key9": "3yZNa8zEEdQcmdtSxU5ADZogRXxZ25b1AjP3R2MQPvxzwV1CHXhhCVuZZz6nHRWMfQB9iiQiS3ozkzWRHoKTWTcD",
  "key10": "2ryoNcYLwvK2scBaYjphhBnkVQnNvtXQ3bKcmziueDYq2XVpvEUGbGPrf8SUpqKJKLTg8VALdqbTYBEjL7RKtAMS",
  "key11": "55MHvduP56FthctB3ZqhSGcVwHmRpLUnpdHquSrEmAgkkkXpETiWAm1itqJ7VCTmBjV71gMvftvVFJGcS6HsGx87",
  "key12": "2WC3DeGrRcPup8y6jeBjmXnRVL15hLTpextjm7q3ovnQEGqUNZQTeubi7kXixECuHELaefuggFXePHau2pj1GQ5D",
  "key13": "3g9j6fK62NRYgduTzL4kE3FLBCZnHs3E2TMEf4MB2SfQPQAqvMDUv1fQUF22HRNZ3T6sqAuNDB1cEjjFGcV8Jk6q",
  "key14": "4oEuv32Umf6rzGq984rbv31RKEuLHvLckvR8oBVuArHGXdtQtQbTeTfMsQPpvpMyeM6HFFyfUiX9c2a2CD2fhpvC",
  "key15": "23eKQ42pNh4UoG21XkTLnjqwEP3yavkULw8CtiXJr2MdqwQqj8FDXTTfTD1Ks8s49SyAsBcBY6qv2U4qYh6CEUhS",
  "key16": "4tm4zp8rtFB46E352Ys8rNq7KQVLBmBFgnN5M6fWS6etVPJLnvE3GzqpT6kZMxvkoVxCpbqQ6FMbMaV4KLb8UD7v",
  "key17": "4izJ6kTxA7xEGSizo8wxFwM1JTFd1APmYECMtJ76gd6z9g2phNWNx9NPExsNrYAPwsEd4W1uEVALGvYJ5y7UGmqR",
  "key18": "3cMHSiHdkmB3FRzNkVCq7sBsY3UmVSMRK37fyBVH7VRot83ABjSMiVhLVCvafDNFgUs5AcvdSNCka1momJfPEDQi",
  "key19": "48MzgY9cB9CXTMHAQMDKLSRvp1ntpZqZaAmoVDzT9wz9VPwtS9LfeakeK8y4r7VXnFDY6TYq4jeXwn1Jk4peZUW7",
  "key20": "46mb8BowvyBceyVmDtbXvRXLFdVUvHXvwvUpRwBcHqeJVwKGqAo13jK9HtuuuCqy4V8YCj9EYiLzwQhCrsveFJF3",
  "key21": "3wLWvVTQSvgqnfFGzhzGDTXCs7tbA2vTNpXBVgkay9ob9aRSGkR45zrg8xu7HNHF3iktyqFt4yvz6CxdHY8sRqd5",
  "key22": "2z7YjTXiXxkTv4bbv3AxSepxJrfa4uJzftk5pWifYXYpQysG8RuB9BL3rajm1b35MLcQx5tX2rquE5Hhxodf6ypo",
  "key23": "4gKnAfdpzV1fLpaW4UK5CgdoSR738xSBPxzGmMbBDqJDMjKMyf81bhHPNtn56t352YA3yef7s7d6dDLCnL2X92k4",
  "key24": "dUvKQsJWpgj8Bk9T4imBx1jxuZKKSk55ceuw1p5G3PA4xD4xMczya2QwyrzZxk5Qh4wPvnSrtWL1XzWoc1ZkNHz",
  "key25": "dX9LXxVcNsQdGKdmZssgRkfeHhe8mzDh6zjahoKT2h3gYdxUakRqoZrWkyFreunvawzUmSQU4macW97cRC39chG",
  "key26": "2KYWCFCWZFXmcnfNggayMj8mAB2Au3vUVEXNbysA4uRJzSuV2KLuHBD2Rbk9okDkrkk7N8Q8N5ghpTprARtFwTCS",
  "key27": "5wmsuhfRLWGqYBKo5gCCP1N216BL8kJBfkVUHGCtaoRRpqKqNusdz6bJ6ojwqZuU1xPhFg5N3Ugo3Rk8JSmTe1Lq",
  "key28": "4PVSXq86AMmmQ5TkhbMvQarAj7tS9JPeqLaykFieBF9TEvcAid83xP1j2cXrhKhSXFEzmUGPEAhwmWdD9Sh5jutK",
  "key29": "3QascZ79RapaU8uLP4CKaTr5p2zRorr9oBiS5MpEaNTTZkgYqgdtA3GZunJfyMTFG976GXpAnmEfW2F6oESpyL28",
  "key30": "VwbMyJNGM2AyggPrHNTtjwrBf8WYYUf2yUwkMDDbgtpA8zGhNJKxbwpmTVBn98vHeEHrD5UmKQ7JogzGGxZSnPD",
  "key31": "4r9wzuVCHP3rgCeCoq2zq2EEbQGS4khWzL6hKu5gJtHe5sKKhNojbqmLbQTXj6xR7W55j5rnKRUKMvg5b1oXL5Qv",
  "key32": "5ip3qB47ZrfZKyjqduAEZ4c4FxrXtMaAEqn85agEvThizbpDCXF6b6aS5W1inqwvgmPDN6eS8QA8NJx1JXSK5o55",
  "key33": "34n9W9xHgiPgsnRDZferzvw9SrQRE2oWf3WehSqD5EXE1K2qMuFi5nXLQGCh5WvvFPj1np8FdMsK6JHw5aXiQUkr",
  "key34": "5AWLJdAVyJzLcLVVhWkS35idQ7qBfFe27xYJPrEMY4vDZ5N1o2AbmgNi59nuQffZVwWqCgLAKBkQtYkmWrfZ64Y2",
  "key35": "4fGAyBYm91kpF95Tze3nZPGm2DXHdLBPQMj6Rr6T8F9L3vfLkPwESRkazNZE9ELdg7B8Agk5BDig5ekqgrAmhZXb",
  "key36": "2yvwBTj2C3pwiLdzHxm1uyGttTC391EiteUHJiD477Sw7iZ7gMrqEzbE7rYQK73nBNJUpnsBrtAXFx7SkFXKLzCq",
  "key37": "5LcqoipxTk7QnVHwHjw1msFS6b1jPzocu3y4r8cME2PmWVUpXJPivzTbqTExSXPAH7i85CVLVmVj45gBkfCPTtqp",
  "key38": "xWd94ZHQYoPKtthFVSLxww7T3jaTJzyVMvQgCcZ7cFSCw7ucLhGfyEpH6Zr4xJxuUbqN1JVpzVzi5MqQhh9URUZ",
  "key39": "38oy74jipUthbUCBYGxLpfkecQ18YharuZ9fZM7rjdNfTxysFT3tZKxf1MVarYC7G8SEc1W8ecE88BrCjbV1XjYx",
  "key40": "18VrZBW3y4KE5nyd3YvPyvoM9H3cSpAYf2X4175w8WZ9XJMuKZReLXCJah3nBpNrJU21y1gsptJyo6m9gL6cime",
  "key41": "3VcYNqq2GR2zre4TpftZX5b7m9chq45kHDnGdpCYavsRNNaxpZR3f6zdEiRUgJUxmumdrSoA76a8F1k6qsEz6VZL",
  "key42": "57ixFadKfdM4YtwfokMAGsSenPEHRjQa2au5Q9AAPm5zYqBmLFBhnXnzekyVde5hYNGYgxsiZdoQdg67khBUsmo"
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
