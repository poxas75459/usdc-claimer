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
    "2BBqDFhVvNS5HrmtFqFHHtzgNmzho7abmDDmht9e6sUT6DDuAH1XqpXF3hznb3QRktWg5ZbKjbtu36apAcABho8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ht6EubWjJKWVE5J2vM7o3p5SJ6gx2un6BDzWNgsKtBc4G9a957nK9WAaLPCysfxM6horQRtktg28sEgQijggmKS",
  "key1": "2pipVVjPSnADFcY7ewWg9fQtfcRJwAurswQgCiUoSmMpTPLm3tkeW6E8tKTnzYAfTSmY6Y7Raj5GxBaFrmAs7R4h",
  "key2": "4TeNhiac1iwUeQZAia7f4wK3rXAZVy31xP6WPuTyFoNjvMGRbt5RmyLqXgkzV2fHK344cNr1hhZRxzDmgY7U2S2L",
  "key3": "5SiPphmuo7k8SCazs4MNykHVycYT77i9aM8xvLqyukGk9ThHW562hzaiuDouQq44eq7LhHn4NKdtBMje7VqLu8GE",
  "key4": "2i1Y3zmPHQRiU4jWjgMQ8T3SFJYpF94pGga8ohUZPX8rpTRyoTGbSCSe8UnspU9A9kwnxKPf4hoqEtonhFCbt4jN",
  "key5": "48eykSyi1SB9xChm8HBmr8u9Mr4FJA2cwMoqHdCTueMK2L4aHoJhcMGyeJ9GxnPNtdZDSXdTYcXJshJt4z8MvsGf",
  "key6": "5ZY5JBaNd6GezgFkDeKEiyi4nYjWa1nENZAfxYN4ecoUWNCFYFP6BV1LG57etZaThwzHWsu5mVUfdbFDounyPt5H",
  "key7": "4rFsPW8RQLPFsc8bWxkYSvtXEXs8RDScyKX3ZN9qu2ViQx1SBHFyPxN5Jt2MnyETTDbeabdJ8DMmXafG9XTtT7Zg",
  "key8": "22b6CZcsHwRkBZbxniZ3UiDygxoUWsQs9VTGQqsgWgWVrnfqehumFkPhmnCPGzqPTYEX3e9noDYgSD4v5s8pFKg7",
  "key9": "6a1kTZQr3MaqnQYUHTpwFG1qfUnb9aPTex31mNehY9Tgx6sWaJk9UNyz9yZ5MNiTqFHB9s4pyMnGwMMrkVKLAyB",
  "key10": "5QLY9C74wBvjjDN486yGi6LYoHFQFM8o8nVg2AmouudFrCjapiF4FxieYbPisqtz6VobtoLzaca4mP1vQvTjCDHs",
  "key11": "4jnAGXjqtA6fDcHbSYxZ5gHRisrQZK8er7DES35eqrp8HWBLvhmPy1SGPXitvxgVdCPVbsZXxXoK3ddTQ6mUkN3U",
  "key12": "61sTzhsxZDAJrgWCKZbfgRr3Mfbc6kR7k79JBFwxSTGxa1VcBfgeWYdN8x479VjLTXYz6g7Ub9WoXjG5Ahx2WhE3",
  "key13": "5ZAbStW8rPbqQkUeK5dpeUKFsQcRKEXVrrxP7kRx7EeK4kXM3WSbAazt1HB3hpDTHCbCrEF21WWV5oLgXtjQCczJ",
  "key14": "59NTEYyiLTkQ2mrceMmC8Vhp6hqBZHDii8h6eAURAbk7nKgLEnmZuizxLUH7DGcktPGcD8uMkEWFh2u4XR7Hw8Gt",
  "key15": "3PGWzdGRbigC25AUpNqC2tLjeK4TKghWM1g1o5NZfXLZ7iAWBgAH63UfkCD79CDptRC6sgK8LLBfPnHqeNiH7YNM",
  "key16": "1M6y38DWwJs8HdbjBauKC9pUwihMYmh2f57Pdu5V5vWa6bpiSM2cC7hPZNiszoRPKGYvPBJecMrm3gd5CVkxeaB",
  "key17": "ZXXsruXC9LYUHWaMgbJ9KGX5sua71SSqaafdhKsdYXrFXNT2sdWFoEFtE8HFSURygZVErgpA7PWwRfwQpFU7FXh",
  "key18": "5KmxyMz8UYQ8hGMNMjgRRyzmVNtXMHBrtZWLKsuGfAF8yaUC881drzSj4UFj86nkskHCjgZYYeeWLf3WK2BUEK5Z",
  "key19": "4HhTVSRRDMtmhNaTvrDY5pUH8AK4pJQVP5uZ5Jxqk3DxYVbgB1WPo9gSmJMnxQBC9ViQmAYBDLCMqs6hWdghkzn8",
  "key20": "5yQFJE12jCYytEiNzPFACGx76Hik6L9RC4R7pTRPjQAyiJdbLkR27VSZSxKprbBGgW8f2uy7KLwsJQwQSPwvWjLr",
  "key21": "3BKhYMvAX8HPVba2ny177pncHGzyBrqraYmoct71WPpng9pJGwwp9TM1oCEBqKzVTnwAaFWnohWERm6iT4yG7bMV",
  "key22": "4oMkgRREn7KTTREXqFh1iFzz6ZSSYVNFnZJEhCzQSz3GuSHXEQL4o7gKE18PBbKoVJSJPAVRt4BeG85iukq3diBQ",
  "key23": "2BUpon7bwcx9KivzLzVkqeHfSJFM91Nm5TUdxoUxQ8ZmRgnDJoBgU5NBJnSLX2FXe1bcJHJZ5qMSdrZ4B3GQ2Sz4",
  "key24": "44fybz2TnPBdMrzBwedHbsrNQDrny5m3NyKfVsyAVEhoQQYY8wYLVXHatJL7BWCxv5WA5pTK2qFNKxKmXA4YaSu8",
  "key25": "2RdLXyWqLZfG7MAMYmcbkvydrLUHuHVXJ3L1jZGRJeG8RmsuAo2TkBCbPQkCKkj3HpLQYCqhgbycX3bpN1km9wrN",
  "key26": "2LCypSGWaNRdqKc8feKkDAQEUhJJG23vNryghEzGrHMftnGatvykZ3fso2pcWybfEMUTCidhdEcGU2HeYtQsyM5W",
  "key27": "2X7wY7Lw2D49UJGpvQfaBK71JyHPsjWsyDbH8Z4MbvXuncHyustCzspx2GagkcXtQ5Ubto2QQdykFH4XKgoyWLfe",
  "key28": "67JyAvqPzTTYdWb6jBTZHYCUMcXAQzXt4WyhVc2kQS6MW5ATkMhJzAhZP6Rg3q4aEqJRHpVU3xKtH3hkJi3PuiUk",
  "key29": "4YPtM2N436gVfApMCFofqMchM7oexZLsMYFpRrkgJQdQFmwMD9zeyUD5h5VynhDkvREsqAWgTmo5RPiYKcjSshpe",
  "key30": "y1AV9TzqwAF1VRGr56yEa9WXtCT9BUqXJnEVfNG32FAP4BVHDZkogxK6igUXVKeREXSSeTTM6vJ2zJbpsdMtn8o",
  "key31": "vXAvdXtKSWesZwoBcCD8pgyvTMt6RvHndJrMFPff7MdxKe1nGyMNsV64E8hm4KixiwR8SyMZmVq6cR1bS3wRPvd",
  "key32": "AjrMHnrLG2vigBjsi3cb6MGkjCEPzqyHLYjKW8zw8mgnsUvYFfxJBHWshGtaPnHHi37Ve2Hht3L1huVowYqNXJ6",
  "key33": "4AGaThrJwSFEuTVBBs6myqraLFeiWFsD1sLpGaZ5X6mxxg2egJFCQcPAqeKFLGTm31EGSr53newib2bUsMJDDTWy",
  "key34": "3kt1cKyausnRRXqqoBYwkF6t9XtYFxA8q67NMSUEYVBH5wy8gsR6CRDkUEeXRS98CZzZyj4uBkndRr8YvRuLei4o",
  "key35": "3gpAQmmkfnceCQ91A5AiB5arE6oKmh7bpnFHLn8SHTFhAzwmREYBbQegEyyfSgQS8ttfhzwYzmYvRFm5wFr33T6L",
  "key36": "42BNPizdzsBMm1iHzTrm8gofykyAiaXmtkx3ti5py9faA9Nu2cb8muw9KtfNP8yRGHVJA2ffkozTK7A1BtQtVpo9",
  "key37": "VyUZBwN342CymQbrjGPUNzXmNpHWZAf18koJxKzstsRJqqWf1xY1YUE7YrEEqKmx9aGvqDD4FvSpifMqfk1qPav",
  "key38": "3kr49cH864NQ1A25fwDzJRLGqqzw9HGdaNBnh7rtfVH8GPKT3cgs2M5pNnxaaJbXU5Xk8mWLnncL9GgDUQbWQ6zY",
  "key39": "3Ntpt3BCdD9cs2t5w4PnNb7p2HuDhoK9vZjkMT83ZWPufVUnrGJuCW9UznYkMJdRxnBebZ52VLV96bx9DcfB6PY2",
  "key40": "5GZsA1TmCuSTK2k26vWbABtvrwUHNU6NcYdJTDsycMVkXZAJT9UAZtwQ9QTUvRu4HmgZZvTZEssbbrD3rXT4MtHP",
  "key41": "4yyGUeVTG5J1Vm9EkyH7fXWmV312tdWg8SJfXxhQKdgz67jzV5GEHwRvfAe54QKkQrFYDf1nTDvQRTXGaiw7qsYS",
  "key42": "4HfQ482yzaHgqyifYK3k2bZVRNVwhsskh8eu5WvHFk51WStfVNdhuD2JxiuLPfhBexsDUwYNnE47b6PTC6wxwPhU",
  "key43": "2hhkJBiHihKecMXYCGtJXNy2psaq3nJt6aHAmAybYk5Up2EcNUpArdMdPf9dh7xsKq5bdvZL6iKrY6vxRb7Z9g5K",
  "key44": "129nvorNhvU1bDjeLm6BKX7FjZYKrifzvg9Dwne3xSJBbjmMpXR2PaJcGNN1293mAnBtVbpVuiSjLZrWhbokx1Lm",
  "key45": "5skAkg7J8btZrmCPbKxXuwxrewMGWbQEEAEbSGXCdW5YcJzU4i39zTujeXYnqYFZ87g2CumLHpScbmBMAZLJc2eW",
  "key46": "2ywA8dDPcKP4AYAsWkCNQDprhukvPQx2qV3JT1iFiPBHLS69De5ei5yyrpjzimrkqRmVWyPdzm9g4cSnYfwjfgyj",
  "key47": "3AFiYduuQ8LwHMd4uyAoGPGFNW1s4KaR39CNhhjJU5spr7e6Xs67rZLHfun1uLWDn8dxnjrqdqJu66twgKeMP67g",
  "key48": "36MY1rzKbmc8LaqPFwF56V5b9ANdYdNFWDdPKnUfegtMprdHePGgsSZbH4uPV3en9fmnK7Qh7ya5aKtp7nnj4m5k"
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
