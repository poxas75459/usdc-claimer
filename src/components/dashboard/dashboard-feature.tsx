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
    "5CQqp2zmzSVeRfpYCYxsfHHGx4yGKKu53nS5fhKGT8WaJ1MArNG7gggnckEnCd6yGvwgAPXxoazjBodoPxXVYEkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qq6gtehU3icraxPBwsvFqDGdobDY34gkQRZCHw8okCuV7CgUiRSEWfxuGs2PeARYw4PZQHbnruWovXSH1vm44n",
  "key1": "4tnWDmaNBz9ekzhNjZyMNHHvP7kEwhNCvKDfpxaw9585cXUwmh1gXa6oFhENLS8sQdNZZrdzV2gvmoFyDsN26fdA",
  "key2": "4sj9CidBRA7mC4WqkuJ8mKateV1HzrZuHYq5enpqf8SrVwBRnBTgk45wQEGiWtNYbrjEKZwhMKvuLXZUhgHFPhAj",
  "key3": "57zeqwPR9hGNpmNP6VtfdAsJBCXkc2nyGF7F5nMUniAfUzatrpmzq7qgst4YenRVPBBE3wmX86rUAUFueieouEXf",
  "key4": "4MvTSvwaPbg14wo7WrS5kr4xq2G7CVFPQc5G5wpbGFpMMvvNMXCFJqmjRwV1P5Ns3w8Yr4VASMk1gr1v75Eo98N4",
  "key5": "34ZVy1mK9aUWwNLawdaUcM8B9FMF3E2UWqXrgEQ5ynHHC259hEtiZXGvA8VFNPBAFyVQHKAzomvhJeyFqpEEoKbD",
  "key6": "h8wT99Sv9E5AgCAn1mWW8homqNd3rjqV8yqEtmyBX98cfr92KHa9a5dNiYpmTCEDMPXMasGSWMMH4EV2eu5CKHg",
  "key7": "2BmqKsrZSuDx3fnKmYZJSLv2UfQ8Y54CmY7uCERxKArxkfbQjJzgqAR7rFGTXjHuYxJ2sbHT94Qe6erCrtVRBb7E",
  "key8": "3BSHxYTwAiopTTHLDj57fi3FNJxJLAHr53onPfabogJttipx8PoD3SynTqwEKAWswiSbJcJaKu2dXniJUBzYijhG",
  "key9": "kRhG3jc1KdZZe9aaCbBXTQSjkcAzsauyrr7BKydBcuVEy57zJAbrpxZfGrJSJ4Zju9G7ENwLwJ8vVHrzmvRftTz",
  "key10": "sJEMpwwJ75DKdqBZkkTGAnP5cHS2amxmoyeJjqzgcLwdg1HMPVzDJuDkL81PTAYKedNG1PxoABv3X3ieosuHfop",
  "key11": "2dWKa1bGUx4BmXkevNiWmWCVDiWGcVuYkgagMfN1WPEdkq15tHk312fMhEUNVjwWaSPBTJxyohNCXodnrb1Vgowc",
  "key12": "3c2DNLWNwnptJb5Umsfbvoe6w2X7zAKfQQPYyMvTJdGp4gpk11goZZhCrpr6FxihdUcm6sUmFVxZPNxFgvnCZYA3",
  "key13": "2BH8qTccN4NnPYKzKvPNnpfy1kYPhYpfGDRCsnALZJehXfmyEC8NPRnbNHcjnQ5tn6XP7eg2ZwNTLeEuREuYWShb",
  "key14": "2Ru1jJtgBWGwxYHgadBhrJMQkxJiqvrd3JypTMMyZzjkFXBFh7cGupnYJdFZgSHd6xSqp7CctqswaBVqpSZrLRNo",
  "key15": "2NvXUiT29ZqLHZSgcMML6YjjjAgQwnoz5o1J93sLcYnJMSz2sAuyqWfoX24vfcAaiitTWCy2Ee7E5A5mzva29DTe",
  "key16": "5n5SgWE4nDaidgPXmTmpE2cFz7Y7RctV5UN4r3zpqjhdytEBgTZAiEWAAqa6q3C6A3V58og8X1xyJKGW3ejM4dCu",
  "key17": "3KhQej89ps7T43sBsQmaaSaoSbcEwhMJqNXcwki3zX45wVtmR8VDQGhhwPaYmxr5A8TLjugtk3yLiLp7ntTcjtbj",
  "key18": "3mKccGwcPqtviMt15kGmPbfyGbTJsVzUWFnLhpp7jEcARBrvBESn6FpDURJxWCUqA9jc3kWgE8aa94RAJaQyPUkL",
  "key19": "5EWpxcu3ENQu8n2qLWe8DdK3qGpqMSVKwCXXtedR2p9ipNnwwBNGg18gTrqdqFmzH89VcZvcNbXZ5spcCzKcXyQ1",
  "key20": "3FXJ6sRwgkeXHzqYipQTciwE99UG6XxJxwL5V13RRNLGnxaugVcY8XsnCuErcYZCNinJTBiJZGcy8qTnWrzof2xA",
  "key21": "5FxuFmZF6DMywGxTJR35QFyDoFcatmVvwnaf6amswTrsxPWYPuiJB4RnnVLzQ215x9ydCvBTi2KGxPic5yCgV5gD",
  "key22": "5Fk8BBwPoc4iyNnHTfNi9wL2BNttB8XiFnaeW7PG7Y16zFJV96JZ1bKtA3hbUKe5uDH4ib7af9N2GxJbhfkyHRXQ",
  "key23": "Xa5xLMWnCuptUZ2qo3dWwqhoqucLEnbTnRndQWicz3ETsDdcaQ5P2sBmZ6VfMEH3b6z8YtwUgsYVyQpXUDRQSUs",
  "key24": "3dVzptJNWF2f2cPSpYcqtsfzKSVd5vV6jYZCpXKpbpYGa9MHj6xT8wMvizRHhzvx7KPStD8bnGQTL8vWeeSU6vTX",
  "key25": "Cs2KMhjCBGoX6PA2WPJpeKGUjH8wWczkHTJHTm82sedyDUKMyBFF9vTxPM2ZjsbUC3A5VMdakqnfnxtfaqhyWte",
  "key26": "2F1iqWdGkFvpZtp5Ubzq8SDpUGH98efNNGdDBgCmEQDNwNXLmGDULAcC1RXHg3WDRnUpwZpZ7u3kMySk4vgtMghc",
  "key27": "SQNYbZt7Xsxb1NxbLz1ByE2NNKu5vwVcpKqtUpSRxrGmWczAScz2EeaW6NtBp5o3aqPyFjUjjNmZasd6UQXSPnR",
  "key28": "4n2FDjcMoq55AHXU13366rG2QRzrnosjjzx49yqrNLjeipcffV8BFHm3JQtWUi5mHCW3v2uu6fwz9BWWDKXH8X87",
  "key29": "4iWUQKgaRwqLd9vBb6VmdjHh6jfT9Kknq64C2BwHMYgdBaQEaD4RKQQUWHK31LxMvQuXzebchjoYxbkRA2HDiAwM",
  "key30": "4sidsXDCRi2MFzc4F9ynCf9XYzw1WoZfx5Wstq7ArN1RWbBaLhE6fgnRBiMSP9YMZBUpjr6M7E6zAQuUnJeFkWjf",
  "key31": "4q42t3QhU6FfkxjgF5ZKbENGvgWnHxH3MVGK5qHXxaPAajYaDQsXAaisx1v4ziEJmH75tJpXadJxmf1d7JsDm7jq",
  "key32": "43Vy6zgUUX9my91iNGaGEGRoKcf1LpX2cN5trP5YzosYY8CeVMNPGbyM4iumP6y2BdHrUNWCsGQKrQg2nV8TyHe1",
  "key33": "5YvekVUNALyeqCu44iDiJBHtRDNX29x7Z1HzeBRAE2UFgqcAsyyqqq2PvZDUqXuk3Gpw6y2LrFT5ARsRoRTcMtnd",
  "key34": "4JwjYDxGuWqBazWzDMkJDvMku7GEeV3cVd5EB8K1RHGUm79iFrKrmnEFzwzUJGDwFfjDVc8pqgXAJZzXbd7sU3LE",
  "key35": "4auE1Wh3dcEUXkHsj6nPGs9P5H91JD1pnuD2eGomegrm6M7r3BYQc4bBfY3MMsTpZxZ7JeAdoNATZreBvY3bZNB3",
  "key36": "4vCgVkzsNHE6CeYJz8kaPcdQdsn8nVtqPTN6bBGuPypCHHmCgKzVcxTViNZg8o6y23U7rKdgoKvCCEzrzvc4g5gc",
  "key37": "5KiRTGNZW7TCTqCSFyHDhCy74vWiRBGok9VwcSFVeg9Zs1hPFBRZpTqJKHjB6jeSS3UnyVAkbXqm7wqHM5cBxjEh",
  "key38": "yZ3V2TAzxLQ5dvd8zrxNpdLyPfbLdiDk14syksvda4bjrGSkknwo6sTgFXkRxqbPtazW5MeJuTBWD1BArcjY9Wm",
  "key39": "614amx6LmUHfAtnBxqrs7J6544PW3f3b7m92MPVWEduCjBgKBGdMyLvdbW8qmV8ueXQJHFweT4f4iuZQPaWPf9Da",
  "key40": "3bjjimMVYArE265qyh2TKFQ5rny93DZfXnyEwRMyj4us8HcPBkqCA9JzVmVJ5N8kAzWag5TGtMTpfPym3kYZGiCs",
  "key41": "45chhf573AYa5LLeaMUJqijzdXbKN5WkV5ocgLCUd234rLpPPSyR9rvuCgZCgTe8CnoxXnJXZrZ5pgaVbzTC3ZdH",
  "key42": "4kof1ku8qPt6TU9or958afFCE4GUJxsm4sjonFjZiA81178DwahiMN2V3ZC9RcZZhiVMCtt4CeisZqcoM1g99Hv9",
  "key43": "32J2ub9zqzWaVRH1rhv8x1u5ZwBsw4aoamv3efzXPnQc5Er8VzPACUo17CaaFxHhz6R5bpYPxKFTKLRZzThG47L1",
  "key44": "wGzvzzbkgU6q7w516EXYDupNZz3hu5xHXgyoPqc1dMaV5KuRH57wndPcyBGeCSfCBESoDnmXbqPrhwmNn9JFmQT",
  "key45": "62wqQp7qKJD5URYcKQPJgh6RGmrDs6tabsWLY4fZdjMwYgrQmmwEKkHqEA9rK92inQ9xaMGVRZ775vtkv1K1HMFF",
  "key46": "5Uquw3G6Zu4y3ij3uVRd6nQS74bauu347FJiXsKyLGgzkePW8u362m9LCN57dPdafd48DZijWnuZTDvyuErqpbjS",
  "key47": "3cdz2WG9Nr2q7sCMtyn8vTgZ73iQ78oUGzHiz3Kczn7nhm7o2LToW32RQo4MMwfQGifzo5FD34PDzsQTL3rC36P4",
  "key48": "59nP6j8MRbmA9GcZg4PZpKMM4H3kfYva5qk6FM11NSL3LbQ1Sh1o9ZVXNEcZshqmjjKFxiDq5vG53HkX4xDzBRGJ",
  "key49": "urU1Z7mRFzh6xuVYJhkiExLL8aLRpCdBPbBYBSsR7FydJdQ9MvxoNytZwHLaLM5SU6aUPuC7uDAdAy4XeA4y1Qg"
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
