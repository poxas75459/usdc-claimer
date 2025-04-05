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
    "3mK2igA9gEGJDCkNdFQwMNKX2AB55mTFL8Ey6EjrT34krng1tZCaxoCQJ7rGKZaDZ454sLGFvKW4FQx6HYAg57h2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38KXQ9eKLAv86y1Eeyf7d7c1y1gWJuhUQVE3GNKU8o8jTw6ybt11n7FfXRqEjc542ymKbZiwevNzLS1Z8Rj2tPsB",
  "key1": "5j7kdaAjm4dsGKPMfSqVaqmP9dH2Heu35QLNc9LzU7buyZNYzumJFUWG9yTAY8XtvfuUrmWhmr9EhW4eT5uag37p",
  "key2": "M8SfTjnD7vpJ1Z61owu1etQQHNpWf54FjqDZgzaT8QNDgtXGed8v19FHgNeypsp2rQAaydKDoayiAHFYxJ4378t",
  "key3": "5o36Ka8mFrBGzxyhiBMzr9a8W2mJxyrwiYx2P3fhHS5irKNnVkrY3w9SPSEyVKNNr3U5cfT53VF3yb1MojQheMpy",
  "key4": "4Vzx9SQLNu1xJ7N6UKwhwMLRS6Gc9mw7CFAQ6J6TyZNUYMgQv4FyKJ4Z67KtBMsRg8eny1ZMBweEJaZ2TmnLfsKk",
  "key5": "hnL3axbETek91gArX4DMvW78YoN1hdtpRBewQkR1ZWzk22EhuLHx9xq1e8MaUrQRQqY7v6XmUz2Az7qx1UQYo4B",
  "key6": "41kMeDsgpEVdAcnUCKc4wJRQfJTQD6fgRpEG1gp5nBq8UMjemADGKA2dNriSAj6sXgvxTw5ajA5ym6EnuDWaPdR5",
  "key7": "RknbeR7r4svdH14AnFBhrUybnRa5NCFvcpnvwYuxx13a1pidEVz6upi8MwWhywXyha9fYk2BAAzfBiiwPeZiqPg",
  "key8": "5VLzqAFCbLBXhDG6m3XgoJBR6erdEJJHFjQTXXpLFHRkurpuSpkNS4g8CNHoQjebRaSRpBVd171rBXTQeALXLC7g",
  "key9": "2j9vJ6SNGNMbSs4Hc3oBuVJANRdg26SgVXkNLPVBeHmrhHxrS7Ywpn55CVkXY2tmqVe8PGT8m4cTsyZE7Z2vcES6",
  "key10": "2zRvG6RHsqtjoD2d5q1zXhZUbGYK91ge2XaVgiGugAWj62X1jvSToBxNQ2BCbnF77zFMdaQ5185iXARQdLrMtLUC",
  "key11": "NTgYMM1pB6LssPqX8XvRsQKb5rVmbKKhJfeEvfk9MCsvCf3Nx2eYftr8nsYcjK1npYpiyMsJvte2666ijPNV7sr",
  "key12": "58ptfNrQUN8FDi1fLQdbd5PXg8Z5JFujeUVnSoXCAymHML26PpXrkC9Nn49Diq9m8VgEKAApbtVp4tKtFCjJQFiX",
  "key13": "4FpgzArvrNw1wXNnUBQQ1iuJRT4EeS4zBVjZWmfG5Tm3cqYn4hhsgG8DqaX1WGVRW1xXkumipWChPofnkZ832VgK",
  "key14": "3ZwAwYM58EwcQFJf6GaEPrKPQGj4wxG8Yb1BG5yTxWRF2Q5qMvqKr8UJZUh4ejj4HAy4faTWhtkBdQPoKz6KisLi",
  "key15": "65gPE24XbB17fgMSqEsFhZa6bE9gmYjqsu7hdGAGFKEJJ3kKxR7LbsSFi7whmgdyHscwsXvzKxDKqyA7kvLCq1P5",
  "key16": "3dvmbwzyn8hN5QCHzN1RMB9fQ9wJcjqymKab1gsXwbRLgeyfQ7v1LX2QapFeAeSTHtY6CkfYBo6qE4fLd8ZtcAEg",
  "key17": "4WnSyWBxwuupUyZ961DtiuBPqkGmaMCF1tidG8heNKdVgcgCmwXRyVa9iWRxCdPJCkbv4Z9NPbAq41AWsDkYmDaY",
  "key18": "3q3JUji3vtxgGkdLty6wZcuSSHETqTRACdXy8rGcVnW1eRCU79g9652YKbVfWUk5XARhnDvCret29SM1EaULE9ut",
  "key19": "5KQqa4vKmt8z1WfcWm5muxWb3Zexx1Uvm7JpAyJnpp5p6vhyUiZFBE8ioHkdYFurcvq5aQoUdwG4TFL94PDNpEQR",
  "key20": "4yRD5LdmedgkFL95n8TKCRSA5pSfEJYXi93ykq8L8xqHjpAb9xFtzUwrH8HB4Kb8x4uMSoVgF2v6gJwhocszRWKX",
  "key21": "5D26tbrUp4vPZpEjr7fBiPgyDs56d2VS4dLTaqXM1T8Mcvh8BqgAiLHkE4cfzMVQL2VL5T69qGjMdodTSBvUbych",
  "key22": "5H8Z3oAsz1EsvA8nYePGpbs8bi1C5sooSH731n7hCXJSTtZ2Vx1PEB7vg1uvUsSUMavadXbWRv54YXkFnP53HD2X",
  "key23": "5JvZMZZ4ZjfxL9sPbhpfTvU1X3N6e6qWuD3pHNkjDtTK6juxvaGMMyco6qQQ75WwBc4r6R8arhU3akjszPGb4U9M",
  "key24": "5WtQabnTVfLAFxUGMRLodA1nWY4BCdxvDhWcVmpa31m5a1V9hy7bi4TLYULjhSeKMr6genhEtEnUkN9sEbhHnbr4",
  "key25": "2ZSPhxquCAwKLa3zNvkX6iDPGymPx4k1a1ZNEu9Mu5SwHmoE6VEt2LeeU1ZcUZnHs2cX1dcZzNCzD2dD932nLSnz",
  "key26": "3xG9Lte9HUWUTn8vDZXUmKumZh28Luk1ZekaKmci5x1LtDnAyk7zcUXrSYSJSkJG21hsYrpW9r6gePRm9uHbzUDv",
  "key27": "488Z14W97NxMgjewxsckrRvvMBaA7prxHZJzwUPq9gtUK3ehgHM7vhmWwGpJVszFyHmkGCTudZ891Hx1Q2iBxdWp",
  "key28": "3QTJ9m72QFQpYZD2Dmt48BEqJLL3RxdDL9pXf8bQgtrCXMuKGph1iNkxaNdW9NeGkLoCcFkLFEX9UE82WESDCrUX",
  "key29": "4dCH1WvauMkLraTBHyfPeK78A7QiEgSUK2Z9dxVX7Grqbgn6T7gXGKFXWvu4kaLhKNWhXWkY8nXk87Z2VPg5XYjb",
  "key30": "4d1ijdpt2AohCFFAiFEvtsed45urD2nYLxikejy26vZp8NtGGPJkib3iHrjbWh7HTGnZXFL2kHxLHB3HZkCoJp3z",
  "key31": "3H9D4XKwGUqx67bvb8ReLEgJjvekWRE8RfSVTYrnTjXxrPgsBqGaaWJFVfYYUaTnSPWDviyKN3myArXGHJ3Aty5N",
  "key32": "n2bDdxLZb9uLiw9TkCoGDAGwCQ99mRWCVctdu4aQDHXBRCbnjR5exNUujrA4Jh6Zb1kpbHUFJouN6nDsY8Ba3Pe",
  "key33": "3cp7SuVnmvBun5jg2xwtmvFQzuT2Mec7781FSG4fUpGF9Dy4qSEgaGiGcXTJtvMVX5h3went9NXVvohPWQR4sdxx",
  "key34": "JEadvAdoTbFAoF4XjxVRHWymKAMwEvvbiQNhCt9yxK6ZHLXh2Dz8ctL6CxzTSNWPr6MqUBgbdmouMD2eYoQHXSY",
  "key35": "3JTEF65gCjoGXYo2NKR7qXSdTZryaZTWPkzSV8adGA2LHhUtyHtbcKfi345cPprjZRqsjSZteEbrxMVFHRyJTexf",
  "key36": "4Eqnze9m3xVnGtgMgAUMdCHwFg5KeLmRCjMFKqNxa18Q75WpehehRfPv87ELtRZqFuXd92iraKQc4zLGMZQHY9tj",
  "key37": "5LEYvvFwqWS7VB5T23kwYykmyw68FroK2Gwc6TmaCxZPv9SSbAoox51KAP4YCpa8i1qvjin862A3pndjxRSEfp5x",
  "key38": "66LqazAAJvaQJL6hq7aAkdmH2i1fKZorF6FPgTJHopoH4e9LxY3mDQGCFNtNuxLMFdn9XVvuLaKxJarBnyXUaJ2Z",
  "key39": "2dmdEAkpxrVELT7c5NmXRUxQQ6Nu8JkRgBxZ4iudX75nSU2NwtFC2bDv73oyuFaSNZJdubZGoKcuxWtHd3FdCX8N",
  "key40": "hjXhfB66Q3ikA6sjhbgNp2AgarYzxUqqb2eqiHEitvLHTFatgvqXmUZ8P8w7P6avzUsMy4xM1q4gnocsnaUyMhf",
  "key41": "2aojAeizQjSjQ6GcY8huVbSSSDNsmB2fiGTkMsVzLLR4zFFycWbM2iPD98EVxjeGpnZUx69ZpXmERgDhjfuEqEpt",
  "key42": "UUY3EkUbPGdUpqVuXayFS2vinR2XAQCPr2Pzr1v4oUtaKMAAytvtyQBP4mJ7xC14KyqXdBNEGJLr6XoKTJN6eon",
  "key43": "2rydzSh5Qe158R3zdrZcKwoBGyBq3jdnXGvBJMb8Dp7RGhDCkAmSJNS9cecjzyhED9Q2zhqHvYSmHMqbJ4kEypgB",
  "key44": "3iuv8SZqfocx6YP6UKV7cbH45n6cGkheLrZRoeautpVdwZQ8fmEZN9rbDeZPbdFpo2zSSFee5cBzbso9da1dHHmn"
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
