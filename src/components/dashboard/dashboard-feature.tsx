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
    "3er5RJxBQxWP5oEov591NS7zaPoxqwo6LiL5YQQ6A3Z5c3qgaEdkfyuMNH3KCznvsWaLeLVyU3SiB6M94GKGYgsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jz5PbMMgU7SBUbAhvL2LXvMiRDqndXRpT87jZ4qm24Acf4cvLvFsQJeD2epqh5eiE2yoPpWPkHBLHGQwmvShdpb",
  "key1": "67G8LcyrqApUeiNcQr4NjWnPyVENKBrY4gQzA6PYT2Da5a4pP5TAX5hYUwMtjDLwoZ62Tf1qou2U7gDsFkkDfLAH",
  "key2": "4bcF7RJUrsrdfgLjYa9NFefy8bcDvEN3do8xPrN8qmvjtnJTGN2zPC23fHGdUdpsbNb4poGUkKXWbaTKDCZHNHL2",
  "key3": "3NgQ1o3ues8wPTJv7QogNECBePJQK4p9U7ftWyXsAkfKCmTHHasfMaw96Fv4zPzY3LGb61ccsp4so1iE2Drfrspi",
  "key4": "3SsovX5W5uwhaJzY9oAqQ3Rw9QdJmL5iQ584Awi3nAu4DjToYKZNFX3bWwfYWCm5uokTmT1Dwr8VTRrYq287c3by",
  "key5": "5rS1bqj2mh1RJtGR5yuxeGiwaqodreWVjw1oMvwoyJ2Yh9YqLp4cx1d38TcdxA7MafzpxXU38FwuJAvRQe3oEBJQ",
  "key6": "Jntb5uW9XRZwRiyyNyQPSG4qBSSYibAM93LgrzF1U7kiieJdvRPjP2ZhP95mFPksvv9FHPRdrYh6LAVM7zyNPHk",
  "key7": "3sgCmHfHVLVXfHjukhvzMSbTK6eFxW5mPSv1Wynrmys7sY4uZKkgJVpNVAgYE5eckwTfDrDXakux6L2qReELnHrR",
  "key8": "61ptvrxHUA8Ydn3URQcVWUcsVPe5637mnL8FfFxQxAEUxdyGuAGMuaGmSv6BSgZ5cD6dS9JesN99qkXEVWY1FQwx",
  "key9": "2qkbcmgeJzg2WjqR4aueJDBYgsq3uNmC7yXYnAfMnVBAtcJrprrHksCGErHTwsxbQ3VcsdC8f2zmUnAoWsRUg4Ao",
  "key10": "5pzcA868xWzPU1rGXFea39CKoXhEPxzV8VR7z1qtymrXEDSzyg8sKBTgtrBsB3Rf3fyw2Prkx1xGsFAyTt6ndPYQ",
  "key11": "59CukXdvRHJYJdT46JiP8MZGnJ6NQHpb3hj9PvYwRFy9c4NVCieD9d8NbdaNmMNHSgHz3KjJ7jqGLAU4tghfKiro",
  "key12": "3cLwN4Yss5x9jZ2U9W7vZo9aUrHfrHQB54pouZEoQh4hpVjvzhTNZXwwjqTtWTu2p4FTp8FgC7YTmiivDpuyfKV9",
  "key13": "2wyamTMXnkiLwzb5Efad5EYJXZs56J2JVqoSduU8xZbQj7dhnjG9hCAe13FaePK56TLLH7CHSeXq7J6U8xWx21ef",
  "key14": "2ggT5CedtLFeuvFXcKr9dkABhBsLT5ULBWw1CQutFvjJFLo11KfiRpaxQF4QCV9frn7Q7WzAqMKjWCuBPuWGfnGL",
  "key15": "23seYqwTLQHhfpwwzDQ2KDWBSqFzVoWNGe5LUqANK5DHx6TvLgjMUuToQuypvbTx8XAgVW3YtNHUHLuhtPwrFKti",
  "key16": "5biRpdCqT5YqUoikmzHYvfTCgLQpfr6cPPZ6ecAz2NYqbSTVdfwnmwZd8sDARQ376u7jZXR3hd4cvjgCKeTgvpVg",
  "key17": "ueTcrYqc3ts19AAppTMinJ9LGRD6jP9LTudTvMn3azTC3jbvni9uetWmYok5rkHkwDWRWk7P3yGCfL2EFzeiTiP",
  "key18": "26qNNWSaKmUcy64GHymofG67XTHLvLKRRCqBKguZieQa7yhyM7B2B6nV5t3QRawJUSModbT84goPh6VSU8EY9vmM",
  "key19": "XjpLx53WaancSq91ujcYpLQfJVHw93wUtnK1ojRqyHCrGUUeqvaQR4Tm3qGqLNEujnCVtFYiZa7Y3Ca4zRpCrKC",
  "key20": "xReDPv5rUSW3JUtT8rYEiCJeiLDfrENAGow2LyX4t6AvDTAPwmaarF3pvKRegpp2arbdu1bQZ29xCWGZoW7k4UT",
  "key21": "3PwbbGrs95t7RmPx5sKYF5K4VtNrqaa4r6wPNX3FZx9Ryiiu1tzqc9LW9fi7c9U8DUMMzHmW3dB6j9zZJHxC3WWo",
  "key22": "3PLjaPJKfUqzLcYXr85HUvFmykNwT9hh5tD12DYjp1QLKCPVN1vkqqA8Q4A2Xi1qBtYKcMdyA8ZsndHUzBe8SJZk",
  "key23": "49L13xxFEAVrd1kgtT2jpEbJuKdPKUYYJaiH31wso7G3mcMAUPoFq6suTytan6MZKZb6unsuCV1wGmjXngL8Cdaq",
  "key24": "4zmLyG3oMUTmuahdpJyzjKroBrDKDgFVggHbbg3EoVi9LoEZv7pdPey4pbLQzSrBi4zwreaSyeMNpUm7mpD3pRfd",
  "key25": "4DDXfiykhXDmNAoiTnP2uRUyLxfkivtj2Y9n4nXnwMkQ5aQR47jBT48oxQPjXDJ51tfBUuE3vR2dgQ28WdgVFp2Y",
  "key26": "436aibR6hmyuYYXwWMP9XJj6FSUPSB9AkiVxSLUVwPPBZMPZYoHHV2ckBess1xAsFXAqGWTv6ZWiYG6WSUDVaDTB",
  "key27": "43CR3HguHTJt9iJAQqJqkz35o6JrNQ6swwYNDxTDeSqH4dWL5LL6u879t9ZPhfwdRqrVJzPLAXHJfT99R6WrSL8M",
  "key28": "kQsEBuWnwLXAu3LPhkHkkdjwtSwY46HwrkBu5MyWFcdjb1shSPed8LxyVAHhnaqsdjsvcAAg5LJP7aRet1aGXqu",
  "key29": "4CECtRq4YpwN4nEz9Ejz9aNj75ZCtxTtJBAmc6zdrkDhNwzYHBa4A2p7zorg9EvHoC7EHfEMqbb8nBYAbeCzg5ie",
  "key30": "NvWxka2wfQPkm8RaeWfKsrAZa4STK98gqm7us9dvoUC47hS2Y6xawzU1yuZjaXuPcJhh8iZbxMqa7xgzMzDkPJE",
  "key31": "2o2vofS3EmGdd1eYXDQ6J9wqG9nrGWd9XPepdKDBPwR3V1GoWS7nuH6BCb5zBvqRVwZftpVM4DSXJ1ySrqFoJZkx",
  "key32": "tN5tVm6kkZg9r3bNyRz4TwLk14CYknKgHxhdC4wnYayk3FEX5vTV1ezmLJ4wkghbBLtMjQL7xU6h7USULoyUhCK",
  "key33": "3r82KQcEcxd9dvyEQXFvZLbHYGivAYvTTpzMKH8hef5iMGP7RbnS2vwcdGToipQ5NHpq2wvyVX9SFbD7HJd6AFcv",
  "key34": "3aa5ZRHoqiq9B4TxWMiN1dYAxXQDeGa1GkVpEuMujPJwJgZdcLSns5LFFDumU9AAtJGYkeWhQS3oiQ2UkYZ6w3kU",
  "key35": "5ddV9QEpadW8uXkHcXhnw7jspTcouHuXGBFFYxjV3i3CtQV5pxgydijTEuTi7SZnoVcb6wL9aA457QcyG24vYxPf",
  "key36": "3ncbxtzj38UDXUf5rVHv5iYFnPAqVSX7DohnnL31yFduqcmjXgTQxGKkCGAYkTtL8K24KRqhxxJPkEiMp6kJJQki",
  "key37": "4z6mKn345ErvcwJGWLYPQSDHB9WEdDfw6mARzFSgWabK3eUK3EkKQbLYifoNXqVL9YjKMm5ReCzF1eSqw2SrLSoh",
  "key38": "49yYy2zXvhqth1VQNgoMNbyk9GW2p6NvxzWx4fxpwDkTJqX55ERGJvYVAw8qLAuxTZV6cXx7bWFck4Ypd7YRFxL5",
  "key39": "3cdN1uLW8WQqNzmL6NQ1aPFUYnWtzGSFBa6CNdJ8wg2hYwWMtVqovuQMbkRHt5DzbZtKCztWjkSFEYszFZUsNHYd",
  "key40": "3EkL6YcMDCYtVfuVk8jzWRFfX5e35rjTB4KkBvnnGK9ApJwFQEhMEg8cWmrdgf5sYRCEp3sijqqB4iQshJPo5PkP",
  "key41": "7NawA9C6ePovULtfdnhhepyubb7skMkoZqborVsSTEaEASwTwQfQRaYHBe81WejtHF9ybeP8BA3ocTeyTFvtmyU",
  "key42": "43wGMBGTZePrR9JmQvfUPMx6eJ8xfUMya3Gt4LeWxswvf8EJtRMTji1hzPnSqNK3oGcB9xcrPZPasNjyd2c1hRtL",
  "key43": "WMbgRQUkL3F5bYnH1RzuKtyoLMxMkYNpAUT1rdjqkp2gSRLyxdzjyaEVyerAowaSZHzhxH6uSh848iQRYvEEcQs",
  "key44": "9MjkQoeVBFV5cQf6F8cxVAKUPRCYCpFvQoH6eKtj6dZaurnCJEFE9sF5DX1M8cWZujv2zEW6G9pcYFQ6XuwtxGW",
  "key45": "4nCU7xESVfGHrctBfAcEzdBWB1rMk9S5VLS6XN5MgrCctfyspTrU14bgvmcPEgt7SrDcS9hWwso4o3czbjjrx3JZ"
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
