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
    "vV43mj8R59yMrvdYwvkptYhj8FHsQCU2BnXR5EukGXABaYHYGrPaQm8m5Lsg4msyWRAzRQFRMSJBCvBtyNaqFB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K5uXThU2Uhu1PDFJGMGgNsPbC12CPmrMyNwpiMCdDuuQCb79HbNWk3YYDeWFrVfzENP1DCmPKJvYPcBFmNtdugB",
  "key1": "4rrhuawMxwjc4Z3NGYGD2wAGpkU1mRRChvjg3CbYV17ctoj5YCDq8Pjrft8CTmeEf99QooYDUCwhfsoLQQKEFFqu",
  "key2": "3jfzf34tznJudGJxWYsYTvTP6wiTF48qM6RZ4NYKTDSgR3su32qg9cV3PahwjYRWMsVK1CRr8SGW7v32p4ohb2aX",
  "key3": "iCBqgL6bEVFFXL88AJ1uQU436AW7VNkzApXveZdybE6D1DH7CCz1swYcDkhuL3LtsVUUWWDm75dp8RFkkmWwiga",
  "key4": "C45oxaCLUq8V7TJqjLnEHpvEHf5fF2kdC1VSf2k4gGugFz5TsG158dneA69xxtB7cPWJhe9GxmaGiPPfHtSrg8U",
  "key5": "3fiiUCipufvJMHSJEcuZPCA1CY6jbEW1s4r2GXBND5tpikgG6YmFedq1VPCcJFhAeEPUvfDUMTqwTnZs3SN6GLxg",
  "key6": "2eLCvRTrx1tWbZ3tcdbNZd57LHRzC2siYyWYYwxe85BTLJ5TEuE4wcZzaBbT35qkWF696NUmi7AASXAGKuEjr2qn",
  "key7": "46iyScr2G5ywtQUk4CPUZu2dMMExGFm53bC7HhCkRaLctzL1rm31ehV4LNd1Htam9eXyAiyQNKhdPdQGdtLL7RjP",
  "key8": "5g8ctL3uCBNE9Bxuf4xJcfjNPxpVeWDpB3jLjnjU4ZUxAJJjrCeuepRbTxZ68iKUaKqhLL87awfNnkn4Ce1v19xF",
  "key9": "Dkbt6NvnKMQpQWfVrktetTcMQWkqrNnqqTrvL9opipSvwnETidCVQfKYB5J999n9AgFUsBykvGhEmo5xpWNwWBP",
  "key10": "5rJSpU2mMRwrjtWGyv7akPNjQEb4jxUn1txLQ2sLbTZeYKZSJ3tcCTX8RJhdpYZyA1vcZEvXz5sgFkvnDfUarkiQ",
  "key11": "4UKstvbXq9hEVJHkuyYHgMgkFMJYreMABx7mbaa3HdvYxgYUvxyiEYzeVTs9WvkXjN4vQa5CEV6Sm6UKtqR7Wnsj",
  "key12": "4HCwSs86fKgzXemQztLmWPP1eF1r69Wbx2reAjpcFP4CdsTiF1f1L5oyuMSFNFNrUqSGmaTteYkFCA322dgo7Qrs",
  "key13": "2iQWMAeYnbb6cPVPAcdzim4Q9df1LiMg1G38n1jGABG9DvfjjyiKt9eVx1WvgwwLKfsLUnpq1eGz2w2N9rRKn5ar",
  "key14": "2F8LjUYJGeCNK2bWSdzFzxocyWFJMMzngZHivpUKKyEJCyLgJ3DzekENP2KuzvLipAdXV3ZT4XxzDFaLNXUp7RmS",
  "key15": "5gEofTcTwVntvCsgYgtEZATQK16cAFSbC48QYuGPMNUiQtPqUZhMds3Qyqc1C4mWfQrbbPrweCdDTS1jaL7stCV6",
  "key16": "iQRpWtcEXPMKRnP9geUu667fy8xfFWFikH1j4kE9pDudPceLVBny8BQi7LfRgRQsbMHhbBnCfihdga5a8JFvXWh",
  "key17": "yDPkeEHo4mmZj4N1C48Gpna3nsf1JTqAMHCnSafPMNCtAEV5GVwRf14kPixjgN8NwM2R21JPrmJojVShak5ubiq",
  "key18": "4mj1hG15KcAZPUwRNqEVzoRUKLCPq7MooXim3kHcRfbuuhfQkEYSn4Wxq8ChvkJvXnU5ooVD8KCpYf34wCSjWoy8",
  "key19": "37DVsuf8q37vvGZkFL6bmPR1veKE7119Hkd66zDAm8iU9foFrmBbQj84PreqHbhQcB3485V1BgVwZ1StXP9wBthx",
  "key20": "4SiKBciCuHLw3DUqsYmf3QJrzWGcKGqCAbWn7ZjuxGdTixyAmv97J7hcdN39aAW7SzudzuT2afdrzuq7ogxM3UZQ",
  "key21": "oj7XdpCfbyNeBNgs27xGegt93aPp31CeDuNEysY1uyu9erGUvti4gYYiNq8hSqCwJEj5is5HX3jx64jqfVZU9jW",
  "key22": "5WnsUu9qKWfxjc7AjUNbSjJGnF35GZkr5R6J6AUDgD9bF3shHKMmChGEEpWsifryY8iM9ZzWLjTpyfYGiXQoWqpA",
  "key23": "Li7JpBc5jZrhxFgWsZx3bnvuZc6PJnRJEGr7nPbrWUj21gFXNvF7pWhGFqFv54gwXb2taSzubKJFMhWJU84LK6x",
  "key24": "2DFtKM9fLEMiLfHDA235YyjDyijVq6sMqNPvgKLHbHu6bkXBxhpuFLXWHS7znRsy15bQcvbANTSLoe5XEoCtcVc1",
  "key25": "2Wzz1YwcuZ5XUQ33vrFJ9USVzi39BPkTFZ8agmAAph9WPgCeNwkW7yaJX6ktfYC2THTApnVV56XgBjwsQzgWd17e",
  "key26": "5C4bDeKAR6PGdmz3VQiAr1hWRko7Xc746HJRJ7L1qt5ajc8b5aUp1sNbJqFUzD5TRm3LJw98HKPVtVFA25i3d2ZA",
  "key27": "21rqnsFcECMZvvEMbCdSgt26jy7vTAstRrQsVE4FQbwo7sqaY5tEuzB1s22Q7LSTJxNXgRJwGy5m1yebfhv3RiqS",
  "key28": "3QWXMMxjFrusPquN3MxErtZawRQbvgaJ2oicjwoKMudXHano9ye21gHHynryYtMnSzd5sYxXcJ1GHRP5GX9eACk4",
  "key29": "3M877tc3GFM8PGhunWfXvcTH4ierkUEU9TJjNzKk5fBN1oEevz6cwjZnQhzRyHDbZCsniaqjWxcgmEbED3vhoeAT",
  "key30": "5ZLCP3KeEXQGhbivfCp8Kp4spgEiqQ5E6oHZP7r2qqwPXP9Zvr42W3tfKh15rat8EtdvCg6oAVsNcaA461cLWTjq",
  "key31": "2BdH9VbEYN2xda9iXhEpgCsP6LYwT4kvepYNGa9LuUwaC5AVGLKAMctsLpjr1DoN3A65FWi3huJe44XWFWraTErV",
  "key32": "9PsbpoLWkQ1hm2u68ZSZQ2Ab1wa143ko9VTUxaWJmAdeANe7W8rFYGr3Qyx7MTVBJPuy4FN6BuyMatdP88p1eGg",
  "key33": "2fUtKkviuwCkHcxoKBw6BHAqVkWs2Vh5d3dF3DKsmiErmKdextCJNxrJTQbyEenC3tiVrtjYcdbrV8og9RTRzYpK",
  "key34": "NUTxnoWK4iScGcE2bTGYxq8H38Q5beEkjDC3nt4M7cS65EPRGVZFNbwZDT7HcGLVcfA5bshNv9Dcp8kMEcx6ped",
  "key35": "UKeG53HSSjQY6MNqVP7DvDdLUtxjs6LMvVsU73FFiUqpaZNv2Nt3eWj9t6sCiPAQKJjWfPeSi9W2ckkAkgTP3t5",
  "key36": "3hXo8ebP11G5eWueMaKmWSjcTZjzSVjvBNELJ3m8QbVfCYw4yZ2fm7QebQ7wyrR8dFQQqMPEJ3iRw4RgmdC116nF",
  "key37": "5q9txPLaznRFYv2jgsKKTfHVCiHoddtttWSHaZGpZgZYwNpKw1cPwJ3Pv4heCm9MZt6RRTmzHjvLYZG8Csy3S33v",
  "key38": "JJV7cWaLAfivuxKT7MYZD42cGZb5B4SojEoafrhMdVADsmUz4D53RPAUtPbpCGHNE8D7u2ogrqGity8aK2LoNvW",
  "key39": "33L2MpVu7hufTJBcaebW598atBb8tsVZYYfAGDp5Mwq8MtkGQq4b9fFTVLEoUSbNG1W4A8e3pAZmtH2GURTvvxiM",
  "key40": "BxNkStitxxXQcQLK4GnWdQZ7JmDeBmvgttXmbfyG3p6eaNVK7gaHwhooQ8tqSAX7z9vgrFztxWKUvETT9y2fs64",
  "key41": "2HKke2kRvPTbwQ8pcn9ejUx9Hs8v7QhYpAU7KrTXva6cYSvnRr4cusHbNWRd8Tf4qo1eGZP19hB9GTaAvYZbFz8x",
  "key42": "5a9jj6kuh3buPMKVocdhQUto9DcqaoLYmMP8HBKhjc2GHQtgtUypBwSBTkL7uP2T1JPcTYrpT8mNFbMbD52dJJq8",
  "key43": "23jbAsH2TyqJE9e316FNULFo72zSNe8mziuLnGHYjw4PgtL1GFYiBMQLxAuPN3r9vdyD6N1TwpeaT1KeGhxbepGB"
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
