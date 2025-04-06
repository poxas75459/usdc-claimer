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
    "23LCrpAt9u2CfV4WA3c8FY5WEpwWG7VgPoBkF4431kTkJV7HnuqSFH1a5bC1EWBhv5MAXz33BzCTfZfzWq4QNoQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WpJkHmXPfw9povnbWFXAWMV9rkL4rBaHDfSPcpL2RduvvECUWkH8BzZaqtQKpoAze8ECvJmxop1D8SzDnDJjJYW",
  "key1": "3wMY4qWF17CcytCe8LoveYXxtBMybg1eujbTdV6iHmA8hwX8XtqorXGVGxRbY5aHJiqGsN6ijYrjjr5WoXkbEhzo",
  "key2": "4dmfxoriFQf3EkyvdBAnusRro59h7FYX3tnvhd2imFARJ1QjDzqYwcyXgrp7ovjhVxW8NKeoxeMdVyeVnu9BYY7R",
  "key3": "5KuAgDV3BSDRzfGnU2oSqhuouTY1KUMTaFVXfcahyKTNh8qLvoqgsaowEL6X8ZumZwkTgsNvHNXEcnfG5bakic2B",
  "key4": "5AnG3HcqwVh2otuTad5UFXGdqThkgEi8NFjLuJA3tgjyB2aMRbEzTbWYPuwxW98cqQUxPrcAAUEZiSLy782fbrXD",
  "key5": "5PyXY5satPH1M9P53huDMFYYt3h5KrHxASvMVcekuUQF5EirtiCDsZnJmeuoBVKA32GxE916XXojU1GygrwrEHLG",
  "key6": "5mMasajj9NmzNvuQuQRG5gmkv63hp95K7rNtF2bjDM6wdN697WQwSxMguBdndFLjnryHfiitpYaARrUqKoCi14iM",
  "key7": "KdhzEh5LHQJJW79GBgfhXH8vWkFtcwMjejwxvV7Zb9YL79RZ9eczZLx5t1xQXvfWPDecLhaTW49sxH5RpSYZc3A",
  "key8": "39w3eiGMgxyhH8NK9dwJHmqmMwZk2a4BzVL4KdVib1C6JkXLg493dfBbsc65JwgthBRuHMxTYcEhiSFHTaBhmZ1q",
  "key9": "32YKsZQH2pMRVR7xf5artUMhAj6fNzsVj52J8iiQQjmfQsswerXC5vjzGyC3xNbJLAL4KVR379cEsyU3dCAxNPh7",
  "key10": "3zqVB4GSJP5PceQNwJ5DMYZaMRBNnKjyZAUVBCeUEENTc5BVecAgi7rGSTUR5NxNBP3aRYh6rHcT4ohXSCUU8ov1",
  "key11": "oqR6ytNPcWojcjAJyuApRrYqPqyYJm9Ne5DHRmcoAcEN1EdM8VKXVLaWHyrME9z8DYnQZweBEFupADi87TLGC7V",
  "key12": "5txY1FDLQQeNCPPdsEWZogBf8GXAtdouiDxagFnrEbYr8e3zfqVMHZBYHku5QC1zGnG2Wx5hkHE9Fw3D42kkMWF7",
  "key13": "2DF2BztuJ3MV4qozxvi6tbspFxAPvAjAFiZ39vY3S1nZbg8WrWyvJk9P5wwu9EMd3gjVgt4bqMrix1TQNXa6cp4c",
  "key14": "2EvbXhdcUrJVkitA8jH6ctqSEoGLkkmVMbuxbBWHXLrZ9b5X6EiwMWF5453CDds9YfBHvZNV3B6WVkxtAPw9K6Jw",
  "key15": "3D3GRDKA9oxDyYj9xdhEDgoguktmLyZ1PuzjD8K9i7seX79JvDfmA67uHgVQnE6P8hX7PDk8MPUZ3vrwkGbgzQDY",
  "key16": "wa4EchZozimjDHDWeDMyRdi8P2cFwYeTSgE1cafxH54MZT4MYsggb96sxAWjBDbFzAAdhA5KrpUUKvoMELkVqw6",
  "key17": "Hv1cYxLQxC8x6Bh1f9EoMnoCTfq6mQqKZK9MeaDZYGKf7waWRSwqtcCaG2g9q66X7ueLqBAjDrT73NHeed2jocB",
  "key18": "4WYWSxAASkn8MAJR4UyxuHDfUwVvdRjMDG4AtnuMxocG7JV3njRr4dMUDqs1KCsocPY9Vka9T6J1FwfmFu4Kzr65",
  "key19": "4odbG2ZBjqzPpJ3Lshi5uaRtVF4oMx78Vn4iBKYAe9LBGi3xgVHkmEez4JvUXM9EFPZv8zy66F1DCN9sEWcEsyVs",
  "key20": "2ETmE2PaXoKg4Eg3iQaGZb4JTBuxd2btDJAz4wovszFdX39PvJ87qcWnH9VYsxD6dPC6eHd4T3EaexXGAecipud7",
  "key21": "5mE4tuHCLjWfSXNn17b9Cj6r1cuCZdC5MEPxgVPpQAvmyoHKZEnAeVuJvkHfpzg3UH5EkiEgCtTa1ungLu82u4QH",
  "key22": "1eYRTXP7VKoEZePhwmCWkjaHwd76DGopDwfmgM9LiMnugQeuz2GyHKpwPk4HndRcfWiLzZ8v2WkASKMpg21bzJ8",
  "key23": "2ZVZNRiDxnM8tJLPSuzXYmJvBYgoAA2qvMnhR6E7uaNRvKHBKQJDDikoegeBTAndzksV9tqxvzYPD9Nf9xvmUcod",
  "key24": "3hEruoMJRd8BgGUxqWWtK7A2gkTgyrmkCVDGmNimGd8gbYkb7GaxU5Tk9JtaJhFDSLPhkSqmsxVfi3UzFfrvvMaG",
  "key25": "3tfpVHoJHRgSzHMTrbvcBZ9nk3XikPJMe1jWte9gJtuKKAVxnAWXd45vEHYRRSTFmtJSpkumjjKmBN25den2bwj6",
  "key26": "4rBR4HqCLzfXQFwrkJTJXJR8J2AxFVHyN4TGs5VDXYgd6oTG1t8GoACVNNcDd8JxmpxXtAgVecsYjDhxtedPqirT",
  "key27": "4msj7t2yTkZmrc2dbfziQzA5df7e9TsCEoRUoe5zsGV41GatbbSZtY5eUS3AZP9vjokP18bSxT6o89mwPewoYWun",
  "key28": "5Ds53RxzcQ7kGLnS8rBYF7jW6rCDaDTsLCRYpBDCfr1dvSi6uUe48e12nx1cTeYmWtzk27DhfxZEkKvvUzKXcJx2",
  "key29": "4ZykBvCyNZcpn85J4mGRX3JBjAqwPA6HvyV5H97F4d2pCxvXqqs2tQg31ZTz9x68pi4dAj5WjF3LdcgipuLF6Uf7",
  "key30": "32F44SjGGwDwP14bdPB7oVMVY2eYvJT7S9ePcqdHwBLNALh59xbGwBR42d8HfZAvE52AT8BYkzt3tbNZbhX9dZ19",
  "key31": "37YEZm2DK7DBbWxgZyAShVNLvXiJrxdymcPThVoNPafrhDHn6cMS8JKatUa13uWkT31SV6dapZC6H5k7mk79g65k",
  "key32": "56qKpgh9fs9SzZW76eWmyu4zqoMv17qde9a9FRjDxnU8T5TN2cmYAMjYe4gFTaos3yHaVWFGmrxWL6kDARCSZ15A",
  "key33": "b1YvvPCWzwpp8wgjueHBi1iMHN6VKUknkV8YtUJ4vfiEKXkpk2qH7ARoTUibYY5R6ULPT5RBb7XMah8aSausgxH",
  "key34": "3DcWfydHwNWm49vXHTpPM81aZsamAGqi59724XrTm3cjrpipHsXDPjktryDfLqWfZWtGceF2VQ4hUgMzgt2athRn",
  "key35": "25p1ujjWDG11QQjvuaWAm78UZaYrySVyh1enGZer97jFhswdQ1WfZqy7pQw41P1EgMJCeyLUnFhoVLZe7MSNp24h",
  "key36": "5F5Xa597QNsbQJYNwAFZgPWaj1ViMprAPA7HpwSpNepF9SazEfADbTHNKKnRZPXEumFGUT3K6FmkKfSXKcotajE7",
  "key37": "Gf1c63Qxw9pyw9dpdf3d8aVZ2MhxNuNnsgqis3TkxvWzDxEyTsEGPkiRsf1ne8mvZt9jHmXToBbTG8FcuCE2ewB",
  "key38": "3BaKNq8gajFY3yY5KarGhkCxJrRKAz1f7oidZwXX5RSdhEr9Qfg237nTxakdRdGvR7aEjoebR1wq6Si7R4CfsHLL",
  "key39": "2ipf5Yc2kE5jm2z4ZQrnXRsdgWVH4oS8zYsGofVYHGSgAngF5qakLmd8KTZ7CyavgEGThaU5MSjpDVftQtTPqv8U",
  "key40": "4ZkeB5JGEuKh5WCxkbWPnyyHNqq9VPvCsiKn8SpT8XMUZjoKsnRaBogdH8KohyPnpYMWx56q1wzZnB4ghm7eyiuo",
  "key41": "2fmQ6ePu7orvct54oGbMoqxP5wZ2TuPXYsK8vZZbPVeHeNnnCxUFtoydQwzbLQ2UbcCrWaocf6sXiXGvRAysJHFw",
  "key42": "5zzGeDfxB5RLH62njUrAoXwypLhzDPkaGKTjMpzjTxhCiUDV58DpQJv1LLiTQ9C93YSuaQfARWkQJJTA19k1ybvK",
  "key43": "4G2jb6eWSEVSSRyWehwXDNrmGFbEF19wy1VThkSKSPZa9rg4N9tCpeWWqCcYc6TiHWiiaKFdTD69nUKL9jsLUR8n",
  "key44": "33uE9CSs2Wxzse4oGq9vpyb3aQYiehembL2ZedECxthBoXVLw5xcaKLZaDL6pX5xcjriPvUoePFvKeyz7LogXAbh",
  "key45": "2u5KeKiHCC8j55KiSo4RKetvYzAZpMT34TrZKrAdF4R7abQac1D3ZMXedxphgmfiGLfNN8djsXJfFmAwU8q6LtJG",
  "key46": "2M4ZA7a5GeuzgSBea2H8aJtYjmKK4qCNd4oysJM9gvUaA62h7oxA5TCEGRZvTKqC82bxeWqoEmYwvUR8ADjfSSXf",
  "key47": "42pMJUQR8G87GatekaAUPs9k3tHKfAPZJ7ogM2fJxoo5zk3eFqkv4ZLog6gnKDatCwBqTPhQj9yGsm4HFVhwdMq3"
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
