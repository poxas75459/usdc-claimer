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
    "5ttjpGZ96KpvxvoJbXL8GvVrqzPHtQPTxoAoyTrvty8oYCBoXJjbc4qxoPebGhCYQqujUoEddULbxDyovwoEpCQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MFcJxcziHaFBUvP4qg93JjNUJiyZNChXJZXMiXxmxUZrQhtJzTs4ZUnAwva8niuxSWbRdsU3jkdtAHPt4V2MVqr",
  "key1": "5A4nRmh6CaVxMPA7MMMwsNiMNwRgc5fQ6CuU2vtDJ3NBpahtyLhg68AKNopkNGQdMyFxQikRKQsJMTn6YJPku7Qh",
  "key2": "5yxeaGiiAq2MiwSSUvSTbPVG2VietYTUfZCmDow64C6FjDe2hB6bbKqYkHJgQjBu1Hn5zzieQeVi1yZ9BvAxUgwn",
  "key3": "2sEhvNTb89rUamfUNj83LurjnGLd6GzXaBxEgcuXjLwqDTPD95PrfChuMvrQiVNksejkuwsn8pWV6LcksaFCFWuK",
  "key4": "3Tu5ECGvoZ2gexT5uomTZ7TPXrVE5E5i8v1GtqJxdyqDuwGsV4YjPoAkVxQ83Uny9N7RgsVrxsF622DaNayJDBGU",
  "key5": "oSXiEvdJ1tUJgXtUZ3Heym8jTa5y7m1VVVePK9Nj2hF5SMWn2v4CZmTt1ELc5gyVtNu1sqaaax5wHfmLyuzk1Z5",
  "key6": "2ain4pVQ2TruZzRHS3is5wVTEGTiwZphx9pBEKadAfm9RfKdSG19ehdjinE58JubGNZQE5S55RnmjKm8HuRE9HYm",
  "key7": "4RrwvMxMk25u168MK3u57vHmtCq9bqv48HBMHXqa36o6d81mNQFTyTW34g9oXuJGFe4mCrEt81jrmGw6vKQxadcd",
  "key8": "2sahCdxpRzv93mEgvv9GV45bvVKr7ohdpecNR1Rm8yY9xzA1gCH9srmKTJ9YwA348EBiD1kVXbA6fPGSDLF4o5KV",
  "key9": "2kMbeWvFQZhQyEYf7BuixHiEF5NTtoLayJkSEdZaLXfQjBMGouCFLapZj7aEhmeGfFGPK6ih9yKMGZD5qSAZcfBp",
  "key10": "2K1zb18hLRd5Pyb1ivq4MdfecBQBi7TDkEGXkCfhYAWao3qmKc7L8Jehi5ygiVfyjmzzu2L41v5gNeePcXrtdRC8",
  "key11": "n5ednj1vgEAkdH53WsxffkrDFJAkRca6Rhd2p3D8QDyYJTH98S4NgtYjDqxhXnHCq9975f1g8FgwMYNDvEbr1ng",
  "key12": "3h3QLVJyzmnjLm763u5fyD8QH18FRq79yEnPVZPUKrMinSdPQr3JRHgGxhJSPBfF5t1ExW2vgtnWeqZk8hEFD594",
  "key13": "2HPaSt3EUEcgByw7MQb8zymXW1dQ8uX84hGKrCeSRNXNsFjzVqZ8hzgarvpkQVkkimJQ1cT97dnykutZ3hv7phnv",
  "key14": "57nRL5Ne4SxH7WgL4E9AkWFK7HR8nEhX5H3Z7dUxKUiTwqwA7UMPNdfbN1WKBX6MFz92azuEY9w7cqU3BDmifMSB",
  "key15": "621pALq1Ddrqwd3KF7p4UDgdCkbptK3KmXKbMirNkbHrQreDxCHcidp3ny5URP2FH6ukoAMtSQqsX7WYrGK7GDzR",
  "key16": "3r8yETyvqBBfuUZ7WBwoKMn9YjFc9c1TGo5LdQh4E51Ft2eWiV4eUrjgvLkjAGu2AMaV8Tn4wviSVGhcR5NvbyAY",
  "key17": "wtT5nh1p4MExzvwoAJEqbcCWy7CGsLfGkM62EhA44q5QxK3G8b4vDCe7qYVDQamZYHUEaCekAkKsJtujnsMrDzq",
  "key18": "5RZstgBHNbqb3u9vV6eVEVsuq1V9hv2wadTxzSbK3Udy6y9Thww2gcBtmT28PwN9pQ4VtpRrnAHsHruv1guVNSLt",
  "key19": "YfyQUR5t68XQH4Ey11o4hNBaPELGB4udUmwzskXu2SYG8MrNKk7nGTf4du1JYoGHUJkR2w1C8RWQS3NBUCntAPF",
  "key20": "44TKHSQXs16jTbCtF9nxP2iRy3VwT99NTcnknt7X48VizgcMbHm2ozyDLcEZyqaSsewuLbR2tpkKQTqfiMj8QcFZ",
  "key21": "2cD9mAWcpqsuKRct3v5CtDKhhBGqM9QMogKKnAqa3BLUcDmbHYaDC52EkRiEYSdFhj4LHBzK7dKmadDjVmTphmqd",
  "key22": "2eLqskndGJJ42wXo19QXocvkt8e3o739zFuoN34aaCw8ZNW9CuGQJqG6haLVofeiaod9N2eYxoPFR2qJMGb8vxef",
  "key23": "nX6VC7utdpZotSXet5TnzyG7Zs5xz3UFPd1vkxtWQDdzaTbLGYMz83KtQk98cfhQkDJGSUTqbn6717nk4hWRRnk",
  "key24": "iSMGPLGG4gac5XoATwoPtBcuEDSrRwSXPAskttYmE2YzTytpNMma6KX1HCNmoUPxkCcs6ZHL1ve1yVKn3ENmvTB",
  "key25": "52Z2sc3aMy76y2ETcBbrLAG7TTxxLP6TjZ76MW3DZM3Mgy3qbCkoUkYLGVDNH75k4duMr1SnyNikrjLyhVkqrUhH",
  "key26": "63XXqerVJX4b9wm59k9yLGSK8RBQLvSLTkwiMZ26ADaMHsvo1pk8uddhA2KWWEfQ52BK1ZS19pJVdRDVjnz9RnwV",
  "key27": "4h6xJ5jtFdqKL3VEucxeH9bVTHQrjmbJhgerR2gjusgehCmvQLLE11Ejk5iPFQXhTpxShhCjebQxGULFbz2F1LhQ",
  "key28": "2aBvqTVzcAo2DGFuQsApCeh1KWgnwazPQZpusc9yvvT1g17Q4K2brWay7NbLvRYXzHYSMxvJ8VP8NHxfDL69SX34",
  "key29": "2jesBk5M91ayVvXQvqsktTJStYR2KMHeuYKMjKJvargD2zSs1qzdu1vqRE6a79StjFq6J3V97LZEwEMyeVefu5pq",
  "key30": "36XSMxKUeizDaXwohVwtQDG9B6ynFGaiPrEMNLCNEJtycg7bjbcUUyfzRFiVGXcw4fpaEx8BtBBo5xPPYg3jAiDL",
  "key31": "SMVZyDvwbV1X1yyNJa4aeFmtjUHeQ5EGbbpBE9CeUugs8wJqpyZBk6mEbyA65QUUtWHLZFsnXnDpKF1CwyBBDon",
  "key32": "2KjGM7PpannuGPy2Do46yPpGcN98ADPukLAt3inoSNiJ3jFp7xLSNj782KUJARFtEr9TnFvUPDk7a4gyW8AAJSWv",
  "key33": "U2Ax6N5mqwAMrMPzjXNMZ1DqnauVqJ9aBYhGXntcD6ah1RXqNkQo5Lo8HFLZvmAUMmENWJdo13mkjFx5fZ7tbMJ",
  "key34": "2MAS9xkW4nER8VLuWjVkiYYfTrZbz45yjeWGWMeFBpdM4DdaeJdH8AfKkL82eCHm91GuAh2sL2jDFQamNcedFA1f",
  "key35": "4x162QutPvD7t765Ds2JLRbqoUxxgYcjbYsKp1Ru1gGcsR1JrbDgr33hSNJFnJB5vzv8FLVmr6YXFCaJ2qAuXMap",
  "key36": "5zKPHSdeZZfjjdCgb3Xs2WMW4orKXFvxgojMe2C6TyVSPnyecv2Tvn3DDH8AssYpfdbGQxRNSuWy8aeUzawPqi9C",
  "key37": "1ov7k7if9G4p5mL1XKfF5iAxnWDaBYMR1crsjxm5JpHuqFr4NM8SBcgcbinzeHtwqiMCwfC77GfcykR2B3Swir4",
  "key38": "5WWoXrjMb2g3rRBjUHBT2WhG9KiL4TRFYeV54KrNanXRS3UfAojodktak7tSu8sUbtT16gW6NRjPne1gxNVQztRd",
  "key39": "7LpJJ7ojueHM3F21YdToA7ZDt6NU871fvqGuxrXHyx4dFZsFt4HSXpSD6B47ZdTFt4GMFmSsPXnmNuFir3o1Li1",
  "key40": "437b1ZsBGF8bdHUTGyCJd97sQcqewWDse1wzw5B3bR6qa8xLVMpDBGyuytxXAuzzRTGy9tozTL4SGMtxTMJ5tiQX",
  "key41": "4BS5XKivkeLiE7xyDUCzHTmmut2xnLXi7fYkXSDjne2HaXQgoY5xrEEZpNtciEorUaBRbixjeJdUVNj4qzNQHpqW",
  "key42": "LGr1dsuj4e9vkSjeQLHHmdD8QDZ2tan7pAus4qBAgq2sfV1mh2GT5uS6vaHgdqCbia6Wo9wu6ZieovfLDcNrriK",
  "key43": "2Eh9zwpSsHRjTDiB2a3D8vBMSvK8MxNep6Gd8iRtpL7mnkJ2W3XF82sSBrgqXjFFTgTTzBFMCGMf51pPR9AFdvrc",
  "key44": "4V8sVqjkKk1h77reUSsL1eXJSfnYDmyaMD9Cg5p1vcQLgVx3K1xhB4faeDT7mxriTERyir8MoYGrNepjNhzT3B5N"
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
