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
    "4ykD8AvUrkGWSX5imZvGyB7Dgg1zHyntpaCNVF7C3D8pNASmXr2VY7GJJq1znkenqBvCVk5RT7Q5phd8tzRVv2CC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45UzBPryiAfSGgSqxANc21BmLe73hnpUJk1YLUQnZn5PmQx3ahdJQZBUN8T7g6q1Vp7UTWusvv3sVXPQbKEUDGzG",
  "key1": "4UbYVdBzYBxaEQwDgDzGTbcPakNxPMePxt4sYM1qPhozUffoHzuxowuPhEudxpB7Jg3uFJmcwsoBxuWZpivN4NFU",
  "key2": "5bjoLe9XDBjz6dtV8HKTLdJ89E9XN7TfD8bwa9iXKzUUDs2iVJ17RMqUHnoBnnBmhbhyPezbdnC7Q5L5JV6S4Wd9",
  "key3": "35ySx4Ptr5pg4SZJbm88tcKKSb82EEqGzE7UEshVj6bMD3LVbCQWfctR9TAKBQfE6prxzZsmepsqx4233za9GHsH",
  "key4": "4UfQgndBSd6Scr1kSa3SnjqNQ2TPFaboJ5TwKP1D5wgaDVQfUdUZCVSWWBFY1AxjaW6W7qeeGWvAGGTbysjcfxZd",
  "key5": "4FQ5mzbBcG7SVryjcVAAsejuwTnGCpuTNZLAjiJWwjp9fiRP3R9SjQdq5hLG1MBhA8hTnXuiGLsFwcUs9D1KtyiN",
  "key6": "679xmKp5W9VjebCBCHtyj9yTWoyvKoG9yEMjWZ8iL8rksbB4dcJDP4dWVmUo5pZiFurprvwM6d7Xh9CgphMXX73G",
  "key7": "vtmxN1DXQtV5kN7h1cduJDtUt6NgAEpJhSFztTEo5Rm22cPM6uRrbT7yMQHLn92BSzXadDVYssi8Ar1gmTKCDNU",
  "key8": "5U5j2ZLNQaEwzv37ucavUtjzjRpq9mKBg5szPW63ihSxvA7eDkrjMLVBkQSnPar4mdNxS9yoAM4zBndyePxdNaEh",
  "key9": "kAGwQt5icHtY76H1Pc3xnzG9YSsTUwUQpmX4izLVP4EZieuceYWeCWm1EJ3CfX7TQohBFQShcuEEJrBvSZizfeX",
  "key10": "YrwFDikmFT35KAK3FygssUV3XpiHzTo2wxxjFdUkKNbvU6ttSMFXHkxVmFLBx7h7SDw2Kvi3r9BqVb8wxR1PAio",
  "key11": "3Ce3jQTYsoddfL7t9GWTjW2xoHP91B9FSfg7NRZLyKm7ktvb1RiAwrcZLYpALzMsQPn3pnGS1MgcNractedY13hW",
  "key12": "4NjCKv1JCy9R55WHR8n6y6xVaGHfnVQH4S6e8sCCvM2DyPnhuFdyAGzULtw4zjboqzYvYnyAYsSMzVnLT6qM8j6p",
  "key13": "2aGj1b8uzuWbkYZaGDJqo77fgoVtUk8z5uiQNtjtGXf37pY7SHjd69RgypHWtCaQRYXMw1QSjgcRj6KMTnBPy4kX",
  "key14": "4wpRkgErswQqtzgyKb568hL9ufXaeDtkuSCPg5LWjpkwPP58bMChmzhhFzXZ76i6vsLuMT4Tt2dR62GkLu4mnMPf",
  "key15": "3xLown9NnC2YbpbK8JK3dpv6K7wHHxjDZq3eT3p87q8mwKRbcTYEj1yQembFx1K5y8P6LRcEUBx5T8NpnHc5yGyi",
  "key16": "2mbLhz9H2a3WvQTmzKHE59jgCLcMfwzzPYsb6iGdG1mnL7YB9rhAREUtxYFN49aazXo2N5dnQUW7B58oorQqYfH7",
  "key17": "351Rs83SLZ9nixs7TRWFPXMf4rUqm8pHu8stS43qGZU83duKZ4Urm5UXH66dooHGhvmUB1k2tDjXv6KCnq5AhQpS",
  "key18": "3ffuSsEJQXLRa2k48w8L6gdsB4gePhGHcEzRi1uegWEBCApMsEdvQFwnDvNGn7cFT8hbow3wq6ETai8wixVUQQvz",
  "key19": "4zkJfMrGnAjqNqFE7TYhbK7EanD7VdXBZBFpJuX5B89qr9GNgcebPijGnnLZkFt4WmqWS5QJAX5iFnkwi5uxYTAZ",
  "key20": "2GDrY5Niqkkh97xyE49p4r81K2M2naTftshkCo43EwAqnLeitQpCtFbPJubZGzEpZ6tEtWupEe2kUejciJsEp44R",
  "key21": "EsUpmuyRLSJwkS9LbeM1DJw9vRwAxg62ZuZhCiju8HPyhFF4gQrEfmPYQfPAjj7qHddJ8buUZMLVrMGwaFMTFSM",
  "key22": "4Wu4ufc6XHxbNcjt4YVTfTF5DBu2Hb33k9gevQ9bdp6FhK2WGKmCJfpu1XX1EezFWEsmHmubVcR9gUneJeatNnsa",
  "key23": "2gZvuhBLxFYbS7zSGs1ZzjtTrJu9xMQ51YgER3eRMnfLvmcTs5Z1eg8K2xxT3MofvSnNiqLJZ2boyyAWk8aAxoHQ",
  "key24": "4xo7GsE7vGS9aPLw4y8fnLJwzmUogQDeCqYPZ1HEDDJ6ioJoeAQxewpxcfoLTUeRN5d3iuQqdPXACnALUow7fLSH",
  "key25": "Z4KEoyKY3rbcpywi2otCEGDrbvSgB9Xzj1fxDdgou4J776F7uXJhe8yJ9Fcdce3j7HTCBjnRwMuSrVur1c88F9Y",
  "key26": "3UUKMrfdomNJZw2QtBhAzVQ3mJh7RrmZuggbsKDkYMgbxy1uN6FZ6GQNGksG1apjooLg3yU87HvV8jWHJhEPXh7",
  "key27": "5GbYv2Ln1mxKRF9gvGdBt5WgtYfevLHBNjG5zJG6ZvSMq3tvWEXG7STmMnwTEwZcw3BRzZHAJgsAPEWHM41dMUMc",
  "key28": "25g91SrqTbDqN733vHaN2j7ScYRNXduHZ2qzRhiYcyCsktM5yYV3eggzZ1GoQGsWYxz349fdmtmGfz8qeZjGHAFX",
  "key29": "d8nLHfSH8rmRvYhBEXAcETDthhqZZjcAzUa6fAMSitNLZzUUtzJrqSsDaoaQmFS91QGTs9GNa18a3DmmTsCX7bU",
  "key30": "3YYjiLHUeWckqrQWxRBSsVxdjJFqAcEvqBk9EJrseK4Q5YgK9VxFT82McBzyrqNJcmwJhZg9JNz5MRvsdM4DYSni",
  "key31": "65YYrxMjCtDXfeqFiRJw4WKYJkRhd8ekmVbfBNPHwpBqeD4iaidAUag2pJoLSmFhr2yb4Ma4EjFa8JnCfLWjqSqS",
  "key32": "v5wmqiyaunEGJ1pe1SXYTuywiAT9ffuU464BUivXy1A8ENYr1Kx9w7hazwBngnRyPRL7F7kRyv5KwxNeUbb3FXK",
  "key33": "2qjtVwMmKbPJpZH8AjqkaJFJaganv9fUCQXMZakY5HnTSDUtVgXCSCwygGcC2sNu3R3g8UwFGqcmS7VGtZNukvAt",
  "key34": "5D2ocf7ze9iSmzmS42fz3NCkXiLoJVCsCxVYk7mDeDGyhR8ZZ2Jy5cnFNVtZQ6ADt4ymgUJBHAEyTYsE3tL44qL4",
  "key35": "4afYs6gq8YMxrkFKYTh76qeETZvfQeS6v4AofmSB68TqayiENRrZ12Q584FryyjKhWASTJuec2goarmYxA1n4xxm",
  "key36": "4bE4NJb54nroUJh2UbeBK783MqHKvT5GMhGCsU4xeSgPMPosLN78TuwVDJ1uJ5XzNZggfdC35g6uurSJtHus4oNZ",
  "key37": "4MrU9fPBv4Ztbw1MMDVHE9UUQhtdnpym1jsJJMNiXo3rCqkejhAsnz8oLfnHcA6R9r7r6WL67dkWdLnUAZKdHoAi",
  "key38": "5WPPWuvqbf3WZfhzL55aVCbYN9D4YfJ449DFX1wACpUkacNTXmruEFN915RDo7eQs3NEq8e34NupBjH6jqeCw24u",
  "key39": "2CWxzGUidTyweNcnrQTk4jnUiPsiHhDGEwXDLHzyZpzuyZHco6ZHoGLfXyL8s4hT94cf5Rqekmrhe7CxGjc4quHF",
  "key40": "5UEHEt9YuvSdUnYNhtekJcCvtvi5wypVvbHMH7BibeTUfof51RVGLTxfcJzpj189Gxgj2DXNi9qXZfpYjkcgzRtg",
  "key41": "2e9vqDqT5fxDFin6NS9GHpJeufSF1zWrqaBq6KcTfUtNtHw6xWrXrRKkWUPFmECVRhWrkDw3JHkcs7DSMc4iyVUH",
  "key42": "5P42Mee29FL1EhFL8gR5uZ1zCJ7nLt332emVodCavF6BKKh78ZXHLHCRUwAgFBeLKVxH2obi3U9nYwX5MErthHrc",
  "key43": "66Erh9N3Av7KmZdjWiJhwfrCD6g4vF8cBzmH4QPTuiE33Uta78oEpkzjwJcG5T5cV4ZPNQCKFd3AnoSG51MDaNGQ",
  "key44": "tc1MKL27fcKdtafZUNPgEiBoB5xweVsJn9k8GU3Bszz9khKqxVNZuGXvhJVYGrrvNCxiyrytmsZtY8hXM4krjMK",
  "key45": "iiftu21yBA4jeKkypo7kPkZd1fpxGibhzMvh1kept8prohyomzyQWh8sDCMfX7DuafAU41N7snFoJCiNfT2mBv1"
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
