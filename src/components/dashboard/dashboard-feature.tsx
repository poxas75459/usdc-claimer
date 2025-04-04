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
    "336RkXXsZ3xpDJT6YxbZhAmm7rN155yGokd9csiedAKWktbYx2inmvgsE23RfuK3cuGEcsy6QmJ64V7MrZWQuMV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25c8BxfvwM941kbfLfbvU9Ye2r7kUz8uSFMdCvn4WXhGVmsg5UdrDAxHzvQy3xZdXXpsNwZUcibXV7zHhDqHH3bK",
  "key1": "5m4zdcF5wQqXrWVNBJbLsiq1qo9Ag4fucDaUHZUNAfp7NP6PdbeftyD41py3iWbDfAjktQFSdBwYWCAhBdTyNmRT",
  "key2": "T1UsPyePDMa4t7mzwFWQcjCc2TvDm9wUSBFJQ9KaPFuxVaFoxnLNCf7Ph7Lg3KRcxpv5beKGHow4DqwU5NkwLxr",
  "key3": "2Rke6Sxcgkh2LTcPURpeKDep5GFnqy2EJgtAoiGDUsznXWXw1B1DAr7Vr1RYEYCWqqqkqteKnxS6Z6yUHFjMw74q",
  "key4": "3tZHyi3xAhYgiEgnhXMCCXN5FdS6odffBySi4QxMdHVSSwvDyaZ2HGEDqvsXDW7pgKc6jWZsUDta9abX2y4FbH2u",
  "key5": "Jk9JM8ckMMBs3gUwpYMHQm1MbhcQdxM58LPUhrYKmjWPyLATJmmGD77V9yrY11bgsqNQ5hEdCuHFnLBZYfkdnWK",
  "key6": "59gcSwUc9GJZsML55kX8ALo6apM3ap2BzofJyvrcKfWz657P8CvBfHsREKZMTkxWJZpH1hkByQLvZDPMzWd24sgZ",
  "key7": "5paSgMByEiF6Vd9TJh4ASZaAAEKFSN2kDmiyKJV5vCeuj8VvUBiQfictvx8vjVwtExTN5FqXPKFGE84jmKVcv8Yo",
  "key8": "3F6cjw96WQYCTtEN41XwfxxBZqj8fvnZbFGZGq4KBcpfNxpXHeoe6hWycSKUcSJ41HCFX6enxUrKLAoWezQCuJ2G",
  "key9": "5G9SrYzofoa1CSNmbcAqoQHCsEEgAH8raToevgewUPF8iRa1Fut2QPuRtTXAQD1SxVvy2HRxA7VrrE2oDFZ3Ljnh",
  "key10": "5EyVr5eMMux8F3H1zrDVcjTbRc83HRYnNos8kVr9YLGKabD1GMGhKYKrXvGVbYzfRbgxivnbDtUjM1iv8EqKL3vV",
  "key11": "21frbg5vUWMqNvVHKu2wVYQLmM3LsfTQcXu9eQHCa5TimcSBxocGeNGBRpwTTKJWZC1Yg5mALEMtcS5Kr7MF2x5o",
  "key12": "3kgfLUseU9Qdf4mi9LTzfj9Sh1DTViN8v9rGx7r8fAwRzfp5sdACQmSroNzjJ825XK3efjUPNrs39YDszrPDwzPL",
  "key13": "cGwQsABVabfSrT5GTXrGBYWnMvi1nsQgrKfWxKRSRuuLVXixcCPcAH65x1oZDCNZ1qsZg43rvxhnrN11Msk5Zza",
  "key14": "d1cnGLCLayeTuiB6wrCar4K9cVLoUQw2kc8ZuzPTjczv56JrMyDfp3yYFVsvNsetmDTkPV8jDxokJEE2REE6jWN",
  "key15": "4DC1GHAG8y8TTseCTerapGtHy3fb94V5vQZVJGnDVHoQML6yxMcpAPuuL6w3nT46AG4ueUkN8USNarLr4KVKZgnD",
  "key16": "5BavcjkKyW4VJh3wB4RW4Z1MHn9ax4SkJVX36BhkzyaFEdYX7MNVLjoqY4Cym2A1UBnfzY1iNTqK8KjHVdr4zUdU",
  "key17": "4F4RpSmG1qsxez327tsJRTXfRyAL3ZWZBU86Croaj6dVj2KCYtvxmHsZrJbMyNMpK3wA9SiJngVMcTB1y35TqEnY",
  "key18": "4kDcJ5yNqF4Fm9WLoYPhEUTTeqKJXYNWjx8hnREVxvJuecFuExv5E8oeBhopCFqanvY5mfzQzpna32kabugbppFU",
  "key19": "5w5H9EKS2LfVfqp1G5s7Lqky6qYgzpTK3Dgi7LU6YbmMkGCVSzdqj1WXk57U3qpm6pYU65XJZgH3WUZP1v2LUw7y",
  "key20": "bzCqD3bL2V2QCd2K3KYBgvSjekbV6g2thPMQVNfQd2xFtYmUAKZQ3EjvWUtc5eXDvLdDQTqwgTepWA1PcWFVwiz",
  "key21": "2dMy9TATygprs8gEcG4vsue2T5UN141YV3MhmhPUyV6NZPxfdE8xNcHbN2ybvstMWDwpETABjUDRYcu1ChoMoxQM",
  "key22": "2gCg85kkZfCgwM9cExQwx3RqPzEN9KvrJQrS12gtrGY39rpyv9PpD5sT3bZNvT8EBAJDBm1kTTC6T5XfG6S3SXmm",
  "key23": "2eeqrV9Svk67FrjRhG33oXpxNUWs2QPyrBhiuEDquF9hgU84jAx3TCuSXRaNQmvj5dtmemvdRgNEnJo6XPuyb6wY",
  "key24": "5QHDdamS6ZztVtPBgo72w28pxtMMjM8F5ERB873yL3jm7wuuGiwqjE9RN8QYhw5AKeBVGEEapJRL96gsnY5rqqhY",
  "key25": "3dRBAPxDoyZ27E8PZyDnwgE8bduSdiEaQeG8ygiKoeMNSBV3rzjUgVTAy4CJUDQk7bAHF2L4kATqfNxbJJftDux1",
  "key26": "4PJEbTRRaZFApe2n4P79uZBjLVmSXWxHARZczTZNasB82VZbmSXfkucTJnMtxTVSF2LoosMEwJZk79LoksUbUDKv",
  "key27": "3edfgYbaZwm7epHthQ4JervLtPU9rsEzn2qUpb5ethEhZ66huPeeMthaDuaJGbCzdnRKWFxEQkxsvVVoW18qXxwW",
  "key28": "5qhNJCedGk1LMY74GNnQwMDTa4pxkkFatxapkn4f6UWYoTSaQ73WiqsdZrTSmRxQoPzgWHY16DhrYv82pN7DRzYN",
  "key29": "2J4kQPhwZgw7cTLRdd8akJknGscpphGjeBMDd1K6supLi276R4YjZQqdqtaid7txjfj1Aeb1awAYRaDxtEsvcd9s",
  "key30": "3qpEDDgeeg93sgwFWskPJfFh2hiu5EYP6d9Xsftwrhw1jwReErckefhYmZDhaHaPZpkJ993XRYzpWrjvw7xnUgXZ",
  "key31": "5d9uPrQbhee8qNcHyA9mykQMEU5pGa47iG7WymJe1UYroKwotwxYLjsaF3hzVNk3yEBmd9wmT6LAbr4Yoa1nxdQV",
  "key32": "2b2nmmsu5XcPWXZ76K3UYArpbF9HJvGsL7U2VUaNtKB73rMyd98XGRxqM8Xm5tjQvia6bhvuCL7zLWCHnUrFBaLA",
  "key33": "5bSrcwYKFSV1ebuN2xwUrpLQk8WFerSR1g6XEvqzfoF4vxhzq4QzFib3MC5roPsSyMZFW5Kg9FRtzX6ijADWEaMw",
  "key34": "4n8AD71fDYrCaGSwPZx8CEmPJyLtSwL92b4FjCsyr2KgogvQ9ypYF7hVPrqi5UqF39SWSrMn56hQ5sPudJp1B4Fj",
  "key35": "5UTf199oxRj4vn9Q6P5ypPoALBg9n56yUc6EBqKg9u9NrVB2LJWC6tUtVJfgeMtPjHfGirbrofHfiTHA35nCEjeA",
  "key36": "5R1Y5wBKGrFQXQCLvGjifQds9fupSG1okdf5depzSm8x76DUWCE1JKQkiWkUj2Nb5bo5NWbSCbET1obeiWWz5LHB",
  "key37": "2bsjMk5vy9VvRDkyLXmm5KsaKPo11a6cxcN5zUnzRpEeEnJxyHSC6jjmmk1boYQKxAg9YFpYYQb1sFrnKrb2qhto",
  "key38": "3AFC26EE5XR9vpJXwnkb8r8sGS9TaBkWzKsBWiCc3eCFatpYAvB1Y6MFuoFr3uD2UAGKGgtdxv6NowES6445E6a1",
  "key39": "561GmHjXYLm8jbk1yxRKbCYSW7p8hVyDBoyTomt8Z6TAXJxuGnsb3CHKmmPtTxsygdcjWpeifVv7uDT1gMNwcNxH",
  "key40": "3xXCbVzXRPu17MoLisXC1AGQcDHyniWmGXkmhAuSSdaxEcqUqLXB5CsmW6Y4vbVyQpeYcz4M2m43vvxCtbsMf5CL",
  "key41": "4cHNZAyXc3XPG3mBfD8niPYLyjExFP9mEnpcRQvBusHYBBn24zT54M3QrFfoChVGUuh2kYtu6bhPQg9KUkt7sJQi"
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
