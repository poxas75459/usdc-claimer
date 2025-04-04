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
    "5pefBSup9sJWozDxzA6ZkDe5dVy1VuASY1wqCVYDTWsTHZ9HBHoLfiCRURVW45eRcrkacBod9MrTojoE27ycubDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FzGDXZLttpfjmwrgmBc7RTAft6uYDG6JychZd8R2PHHuWGqrPpNuNpLu5zQpo8MXGecBjWpKVRW3MUM7Amt3w6Y",
  "key1": "3GbuiuXVeV1o9BU64GCMwqj6BvYeDqDZtkh1zwrMj1Qg27jnw7imwB59gfBtDazrMzecmdGnckAAMG7LRkJXS1kP",
  "key2": "2vtkbUskhoyEFPqNdWdqVZ2RME7Vkxhni19wDfVK2iTciJ8T99uLyvH5KkYumL88D9LGt7GKEZfUKorWpixfAtT2",
  "key3": "RA9MyuMyuenmCB3f4DeYszuaeBhVLLZgAhzUmBDr82FmwxVxbK1UZ15GtVeUJLwva5AXqgJjeHXDfAf2DWd5zhj",
  "key4": "57UiiuBnCjbkuGCkcFFunmU7vLFSpQG8YjSzpcpHYwpsEx2PHtuvPqw4QKhFwZvqgYAQALmeDuNq7eL2S9z65pNo",
  "key5": "3tfmDfQCk9LpP6u7VXNB5zQP5JNJbjUMTCJAQavSqnC6VUKW9Ugo81edz7AzTSAoGFPx7Ctj7UgRkfzEimQQ6bNp",
  "key6": "5HTRo5GhgGQpidbFozxHA8sxQ1HoNZ2AzWTfskAMr4Vj8au2s916x3kM9qLDpb8vRkXmTp2n1CwPoSHBMayPhPPA",
  "key7": "3MLHLjJU1jX59g8vUiYkTuVEdnvoJfBhtBFPJzdt2mhY8PyQR57oEPoYZB5r488H3vTXgH3eGkFi3ob6dDooUskr",
  "key8": "2gssD9vwbmCrRnVwe74NLEwQ6pu8nemnUzM7hHtreGKCtoJShWdy3eurpdJAwoqFSnbbLkZk2zew419TCYPuXThP",
  "key9": "4t3Kt5gCGGv59AdNATUremUfGWQuRhJHwXCz3jWm71Rwtm1U9agviHZdYVXH9wgGPwNtP9ipweGwwqt8Pp6FRZb7",
  "key10": "yRqNVLRVycTBSEfi49ufAbKncz5Pdfw3T9cKots979j7QhXmTJRSWgcvurQJL99yhLcHUxfNo5ngps2f17AuLce",
  "key11": "4gfU3v625sGfX7DsvuEgDDxqpJ68WnsVcY5AU8ymMgDSzPmFJZQsEVcb1o599835gcktf2RyNpfhAJH6uS28YW59",
  "key12": "362F79VeRHxpAGTjUBaAy1WWVog7N2yZCddCMKsks5FWfxF8j8A3MRfhaFYXL9L8ruyQdMfpLWMLbzmsMTpqFx1N",
  "key13": "5qVKiu1GpStfyGacBpcWPBw6Be3j5MDyvrGrw6KNAj7P9kcPkC4oTw1SGucGXbbep2PciEQhUQeVW9A6VMBCCpkp",
  "key14": "2TBps8WQVrxn7G1F4PmYyHzyELdFvg9ZimsYes73XrVXhPGzUyHsXykR88u4PxNcwiDP5UphyaDYi4w3q7UReF2z",
  "key15": "4qfhy4CeSQgPXctqtqwNS6ptFZvw8JnnwC3FnWmwm96fgk7DLVDGWFKLVYQY77vewinFwofyGN6crV46g82HB5NX",
  "key16": "5cD1U83Ki9RduRoN8ocNsfvn2GwB5uNGtSwFtSg2CndWhGVuP4gsSoUnqTn98VUfs7UQrWWFk1SA4AGJekr5RMEF",
  "key17": "2NrZj7iaChK6yQ1yVEvdjgsGL7Wpa8qPMyaL6MhHKHcUMEyo9aLM3iM65CZQ2HAmuvHMbcbkbnK2XygzbCTZ6Rae",
  "key18": "2t24WWaakkZaZa5aFKhdgCSyMrETiw6fADHL6yr6pqCxCZBCpxs7QsRrKFFyYZRA2G2BTSYw4wm8CBBoZw57Vrka",
  "key19": "2MidPFTg3QsH7QCv3JTF465PUP9L5NqYDSLqLE8acj4ZrMLHueDtn2Xi93TP62CyMYJipTJZYpZV4xmpczrve1cQ",
  "key20": "4Vz14Rb5rNCDo8E887JJfekBa2y28tHQrSDDCakDzr8J1CSEzApZr2imsMFsrDfrbBFbT8XE1nTQ2VnGpgYXkhvK",
  "key21": "24zVqNQDh9VsYTj7PedgYEQYQ1hsTE6BRorBuve3cbUdKLRgqx2cfNMD55oHYmzMnyeAiuUxYaSh87GUfDeKsgQn",
  "key22": "2AxHd8XE5DpkDRUcWNkM14grH7AMBrFQy7uw1eq75kWYaK3GViTJfZTNUdrCktkFq3JrcFfAz8nogFuzYVXhGz86",
  "key23": "5nPohtLFH5MCaAnEM8EEM6Jibhba6kmC3tCqGethkBU3Sq7VneBj7nChXjRjw2SCRXo8i5aRh2djxcZGxJiN2WAU",
  "key24": "39qiSUJkSWpwKi5VavBn5iCvm7J3fVZgEnaUHFHcE2vEq5ENSHeTdkfyh4dB9gRso4ssf73h912bowN34RJNzd4o",
  "key25": "285QroKkaUZtW5PeG9Aci9DNVUijEX1z7jrchAygHXvnnvbnqVNQzBqJimzfb1DviHSuN8dCkXs28dgPTY3Qg6Pk",
  "key26": "Dh8Zd5FuSrKZ1Br3wCVE6YDkVTuP1BuDeRe3D3hoEPZFDRVQZhwkBpZA9JpPiNa5Px2kSrVVDHTGJ2Foc9ivCxN",
  "key27": "67BtbNQW6Pi4NJGAtCGBfcMwJLLycBz72e14ZHbQfFfhnp8TNxGvLEMoEGWwAJ7oZQUaxWC1vD6mqMtr1ZZ51NWF",
  "key28": "3P6fD6DcG8Tq3BAYF1PCoqLEuDpy1fyTtBSSSFQbuoP2hUaHybZJgkryVhZ59YQhevfnfPGcyeZgmbZkFpEXxS7a",
  "key29": "dJRnPXtq2KDTHAqDXpwxoJa7RSkNLoVQ4RENA4XNLHejyoAYgMknfkGr1HRN4Kh8ryX3eWNN5gRnCEypEhXDCEj",
  "key30": "5DhTQwnfkYYn6D5Av3SX7dMYKBvUvFL3tDkWTmvV3vMXXaPDuKfJ3NkjZk5kSBpDpjThuBWwirtQniANDiPR7ay1",
  "key31": "3hFRgkJ4cC2n4YfvFWbjJvb962EpGswTxsPuWM2p4jkZEemhX713CvNB5DfALR6aKWdVcfaAZ1tuuC8LLreeTkDK",
  "key32": "4Tr3NXivz65FFG2jPMkPKRqqn4JbPcLfjPSYsvG19WJRoYkC49CWy5kGugsAkqVmE3XuQV5y94i8wrgMm3yfa85u",
  "key33": "sumiD3LNNCAJid7pNd5bPDSzPi9rjNADxijmJQVwpfzywYiBpBZoZcYvc1KhT8wUg5rdEUExeQmyuoYGP9L9YZX",
  "key34": "2LzrrdrYjuj94mNMMNwRBc4oWwbh5MMhn7eiSPqqX3M3kPkXhYF5uQuMd9gAdZAEtBxLQ1st1wb5B66UqJii8F5C",
  "key35": "5ZzWzSeQxnKF1Jvde4F32Ej77nEWw2t2Xe8e9euu7wvQnJzsa9wMKgGMqa1eqeqdossfsyc7hq8xcK1wSccDDXmK",
  "key36": "4eWtRTNXQmKu1wDu8YYqtwtg9Dcv6yQ7NC1aQKDB7uTKA7Q983VHFfVPvYYfFW8j39XBDhpkSR6qssafrsDMDxoN",
  "key37": "CBcYE8HtejbhpeAswv7iqGsLfLjs1rVAxwYGcnQBTLxLKFMEgFhHpPzEPbKaevABvA7vaB9FKtkjyhMAMNKCTSr",
  "key38": "4xWjKc9CDZjoSNitLAyUnTa5qTHdDa4vn1gCW8KhVKUnbtLXkb86RfshtbB1Eu16pEffXjHdxAWzUVAQsEj76ywa",
  "key39": "5w9fdKJEVWsFJN7LaDLydeCXeGuhwMbRAyyQkmvt6QnLBVyZDQEq1xo8oMcHs8xEZzkCc5E6tkWvynTe6RMtfGEd",
  "key40": "44oFk58YmhV2Z23Lk4miybmmLhjHKPgemumxKenBiSchvmFLFW92NHcz28BMNTbcrxEvPp5W32Xi7VPcPePutFB4",
  "key41": "3eWbSygLYsNGALL2Cd9zXV1Zg4s2JHLNFNMxFYAjKrUoH5n6ecrq1qAGR2RRzAg7GbVPfhn6vbVEjmj6QzAjLGqS",
  "key42": "4h52hpwP42eMPZEtdFhtm3Z3en4u873aRBJhm6TGyf1qDu59ruXUmQVemvmFmtptEDCDqfhQHaXUqHvPT8PGimKi",
  "key43": "2zSBA1Yzsy13yXjLoA4e9sx6cpgqWxsZ99cDYiUn7gM9H78wB4H6qKfjsM2YeVfgYVe19RLppJBCSpAjMFZcFKFc",
  "key44": "2Rri6NZSxPEtJU2rqzDBfoTVz6SYoMx9UTe7NR9b27p8wP6qjvxcUvmvsrVHsVK86Macv4iEYpYkqtCjb38u95Jr",
  "key45": "2FEv3wgUGkTpvGtohXsAVUj14rbbKjAWFRWWf8fptYWhartgMJwC7gUZ8m5ZeWZZ6ovSaJicxU9aSXgDeMsxUm4X",
  "key46": "3X9qHVH8acGwSuJscAYbvA5pLVp1tvWczaGFcFmZGAjg3NFLs4Ncg3G7U2U27gGdYRmRd28U8unsDy6iYraBBSMV"
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
