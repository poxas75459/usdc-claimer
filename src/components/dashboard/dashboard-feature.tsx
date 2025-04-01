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
    "4SJGHv7J2yupYggm8iAwANQXUezty2DwnfY2a2cH82WnisiYtZfHtsXi7AAZ3cC62B7cKzr8XG3KV3GNRZ2rwSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J6jJwvKedWA8FLgNh4qmn8sRzrxZNcvNnJWFQJj5wr5w6xvXLPHXBWNgaXh3PrkTuwCr6QuzvLNhPCjPDNTa3ut",
  "key1": "2QcVsD4LUYui9e4RZAkTq7sFQwFGYJFXXZW1JcndMZd8uqePWR91e1Sw8ndsKEtfdpSmUMYXkxYbt7B9fCdDfZ9v",
  "key2": "RtqD5DDvakeLYiw8FWQABorukbsnYyhM3StqK8L8PgpcjwEBKGLJ1mwyNXAr6x9UpBdnDnL7BmHEhzcbMG5urmx",
  "key3": "2AKDJ3iXyu69SJbc9FQA78gxn6b1CuequpJNvFYGG8qJzdbmfgRhpsyaxivDnadLE2xmmj4gEqbYJtfoA7bk72QM",
  "key4": "2bzEMpMHwj2BuLnsBAnJY1BU2p8KdBW8vD9GRaFwzXHbbNA9azuEPxfXvTZGxMFAAf1uLWr6YRyiu7x9Lyi1bvfW",
  "key5": "3Cho5t6WkQyiR3R1YyEjQXU3qt6UzG4pJAptTrFoj6hdo5H1JhgKcFy6RgH95ZD2PkjMcCis4op84aHncphC6jQX",
  "key6": "3ERcjwRwToCGuDxer2ssC6NXKE3zMbvRCfqhenh4YppSrZ2M4BH5HcsXwbStDdjE8qMhdLgjiq49rdA74BoAdLGD",
  "key7": "t54EWf4x5gs7G1cgs8C2Fw39d4DM25jqAmc7Yx3VKGhQcvS6A1WSsxsf2WWRkft1RMVsk27fizZrkkByA9KQLPX",
  "key8": "4WjLhheVAq3BsV563Bn39Vphiupgi1hnCMDzyY8N3B4iC9LGkYWv9Ly4aXssiSCPGGfQ1Co1WU3HcSaE8kAEka7Y",
  "key9": "4uPnQGpVhawbFzbhxt4z7chNcVc2vdSjVUKMmAMK9Ro2Ey96VRQjt1GYK9V1G9ciLkkVxRLYaeJ9GKFeKaYhkeiH",
  "key10": "5wg4UDAFKJzgSFq21tsd24wyztQGKbqGUKKmR91dWQ6TVrVyASdxSt7hWwSWAT4CXmnTxRmYEUrNn58nkvyBE57G",
  "key11": "42T1EbszvmkSDdEv5tM9j8c6AX45zxQr5ZsvgkW5fxbaYWaEQ9U8swcVBtnEFh5hSWy5fSR7enVMzB8wjUPwWtSP",
  "key12": "65fyAo3kkq7MojAGvmdRRMTM91oKn5BKdxewUyHBmw2qbZG3exC7cNxyXRAQNGorXV5V2jnWpESQ8BkU7FbZJmoL",
  "key13": "5nt7ivs6oNYHgHTpqAW2TMfTiGdrPNVmukY8VwGhMZxHsY8iCWEDanG6ubbxWrQBzkd2sNXtKKWgftrGKkeaCj3e",
  "key14": "G8SdVu3vANEdgGfXbzMN2ygFBnLXw4CGfx1pRGhtHYZzHpacLakX76ebCoeVPosCs9CNM9NPGz8vzC3sorzsNXH",
  "key15": "51zMcm3dWhV4YrhM5axaWQk88kdQpd3qLwkA1yVZM86wzQBaEL9CoSKxdsepfY7hBVgb22y7vygXm1qrijLYCBWD",
  "key16": "ktpN8mEB2EzEiTUhybMLKmBxf3S2QJoGkuoAR4sFX5uCDb2t5Ldgfv2Ev1SdHFPHSzS4txSebdayLvtZb7wEZWi",
  "key17": "2U7xhvpcaFKSSBPP49PQtU6oLMybdUSybV4sv9k2cBiVFESt1cqxXbKtHsToD1MW6gGuUzYQFcuBKPpM4c4WmbhN",
  "key18": "3n5apTVLB9vGX7w6EvPjj8UxFfF2yfZYuiCC5pzvjpasJnV9jQtubi6NMQ7vJSQuye9uyRS8trNvu9kthdJAx2sQ",
  "key19": "4K1tKm27R8R9PAVE6GhXJPUrMWsLgpHff9hHonQH6gVLZRQ24zqmFgsKkJNAcPosoKeNG5u387rY2xo82U7iscTW",
  "key20": "5kMiMb3uCEYTBT6i4whJ5MQmB6MSKmbGzw9niiaKsfC3jhuK1LaktJQgPNsXvzBjBUUGCg8sVRNgEoe9Rsv5Fp52",
  "key21": "4pPQAnax7358BvXJbvHCFLZ7rmyajQF9iQEyWvyUNp6Wy2A3xugGQqjsfKYSF4Rr3WZpTbRTPbDAJCKQvRLRE4R7",
  "key22": "4MvohBdDiUev8cjjWymz1AVvTejcGezNb6kYF33HMWuEdU5cURQdD4CbNLAhtLKPkjPnNETMAcsm15n9W1yzy37i",
  "key23": "226ccibY4P86uFxU84qHsSKehTKCDDHXATWNLtGxoXP6qjzKr8uxern9exTSftPFGQFUFggX6nsdfo8iDLYJsvhn",
  "key24": "4oggZDhDL4ohNMPcJ5SymqyhqJ6BbLtMpWpbuckgeKnHehDyNLYxALHQBLerkPxa7VB1vVdyBN3rLKafR81wPBff",
  "key25": "25BP2wzhpsyT3vyZxwLGjiL7qj7zNVyddNyy6Qk2LxjFm2USHA8zY2y8ZY8SxvqwqgtWegxg6Z5eDPWf9GzQuVNc",
  "key26": "28BNrCwzTUctPCaVHsuNeGifc1xGcyNrsn2mJ2duhZgtf86RgV6WrmxMcnzKuFVqimcsut1vX3XhcmLmN9KvKCJ4",
  "key27": "5SxjH185azPgZttz9pNkBuAwEBiMSKzjHGEPfFiQ5ZNvHGMSE23NMjwG4FoGTxxhxe6AoM3AT7oSHLiBhwqappSJ",
  "key28": "22ktQr8FTnnBF8SnEGsPUtohLjH2FVXia72ReM9EwD4jkCLEu8nvkDmGqxKFLTFhLV3DwHXen9a4RkWnSqHqYntv",
  "key29": "41kjpDtiEoSnM3AyJt9j1FYa6TWTzqhfZT1GsL3vGRvJ1RDr6RdbUJrY4hjEg5P16bxRzTK2AqGbkRfzGrMpyEGT",
  "key30": "odBSKCzbJusfpGXXznkBgibVhmeX9qGBcLVk7AyLT1hKuMvu3wXDzwBpevPAfdP5sSJAkdJCGU6LjGSULiBQkrS",
  "key31": "49b1f7EG21nZGpmNmjUUqnXHQiQGxfQuLc6JanG2upj9rCiyyrfHg5qUtt99wxHjBSNGg47CrQsME7v7obybrEHt",
  "key32": "5Mw5ZWPgnovie9etwmY5Aj7J3hCoJ7h7pRFBcdYBurKdgSzp2wxTNJZujMFwja6tLufuQuMvtnZbpatUga6YHXeS",
  "key33": "4445B3pZjEzQEoKj6MtgDLs518QjMvuruyQkPbqA8fEWc5V7ALBuHsAMAqX9xumZP2m9SSeshYTPeHzo8Y2yGYZA",
  "key34": "62GTQwoNh5aPDs3sSC2BC9RyA1brBkqNsB4DoEbVNQFPvK7apShZdCEjqNX6gVn86s2Twc1tPspfE7MnUYo6Byjy",
  "key35": "34R3vjT5HoWg4tU4tuWg8rpNcXDaJjLwfaVUCb53vtMgQWi1C9afmRT17gvF2pxN8gZM5yvv7UXKA2Axfpa4qzjr",
  "key36": "3rAfJye5o2PvXz5kJoeMctt4F455gna7JK7bBmKtzi125F6BNtoCQZKE2pJiUGyhc7odwRWM1cyhqvBp7Kn4kxMK",
  "key37": "pKFNj5JppiJkG33pUZ48k7AUTaXVJgfp9gNTKmbYTSh5LZkiMVUZowLmHi6GCkKU1Z7MECn86Q3LT8vrBiopcAc",
  "key38": "5wtX2BdDhaugsgkZ7RTs5BM3scmNmbawtv4DK65AQWZzcWoQvfe19aUbPdRKyhjzyx3v6eidSDqkRGayjwXdkCxo",
  "key39": "4RgvqvMNcu8FzNM63J7HXKavJeG4tbNxGdbDvBsfy5G6cT2PhciTM6QRMFcrdYghnFQXue2hWoF51fzY3ZpTNbYf",
  "key40": "3SKu6EbqZgdXzN7zwqySogh8Xkr5vaPNVbQXTkbDkK6USF7s4b8UaJTvUDZpby63HnR68wDV6QdttHNukdSWY6p5",
  "key41": "xN3DSNWZe578ipAsnpAt4tbsPoFKLGAjqohEWgfuAyxJnxukdBrT4LUVU2ohAfv1aVv8qT2fL1ayn11Z6EwdfiF",
  "key42": "cp3CXkJLoFbTxPXzpLRCVzRn2y4rMGANmbmyJnFo2ohJgwwYMLRpECbTNEf2sfdXaHdeSSa4a861x1Bw1tuweVc",
  "key43": "5bvzs7F3AEp1rsXWy6uaxn8Yqnx8q6hdz9zLENre36tqQqPzh4xfhRdUqpQsmUmEeLtqgNRz4VEQiMns78nECk9K",
  "key44": "5nyM6qNVWRwVvkaGqqvPfBa9dg37Md1u5WopEM5HWYP4L157poqYPmco3UbuPYWoV8B6roNPKvmbHvNuHSZ3iRM1",
  "key45": "5Nw8ZHz5uSZKTfwa3S38WcPfYLE8Z3Bu4XtPLhRRsur4xuHKN16GUWsew9UnKw1aMBjTsbEpvBxrfTXLrmf6PnnJ",
  "key46": "nnShc1VvJXyprD1gJLxWuDbtLGXBB1iebciNm9VhF3HHGy9ntsh83Q3xZTmkxK58JbrsVVoiZSPp57anvJyibKn"
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
