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
    "ZqxN8yYtbNwQrY9r8XQ2YCe4EEvj6B8zjxK21dnpP8cwdHY1PrrzZSvmSaKjQTTYeL5JZJaCWFfzhiPLDYAqnDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HfGDVz6ZCZZVxhkJaKcC87W7rKXBaVaXesTwt9gA4jVSVXeJPH5pwjb1i7oYwn8ACms3GwCwX7mTub9JgDyTVe4",
  "key1": "5hRz6JstGfnjMzpiYp1wbPve6LnfhgP9pQ8iLutcku6PLL8xAooZJdznyjCoDgwM5HEZBZdyoFvpkSTBFBPQ7k6n",
  "key2": "2dKn9oYFFxwEac7ufxgTopA1wSJe5jjjuZxj5o1Jw6opaxMvnrkeuyBzuFw8timLcppiU7AT3oHxjcUNkqUTkwRH",
  "key3": "rrYd4Y49DrhNrJUUmXvTAf4J6mhHJrj8D5q5r6fwKPCE68HZtvvQMKziecnPYZwxJDmMctotcT37tcm8gibAcPb",
  "key4": "35dh2eqnKHfpU4hR4oNu86C9S5zw4iX738VdFCUt3C9DYUDRMiKPwKwVdzKXLqG7WN5tiCqfXttzjtCSuwkrJewq",
  "key5": "u1DQMJTgSxM9wL5cvkttG2YJWdbupL4tvCWaYXboLkb7Vsecu8mYxmjsFDcAiYJ1GPjyFjHZYsZcknBy2sSX1Fb",
  "key6": "2d8QXyPkpTiB5xYgbcvEvNUkPrcZUud5Y17zeArDdPG2tHrpUsizpG7fPPGyYfG847LswMcTajMXRHcyq27Myfny",
  "key7": "zGTVqeoRLxGdQ5DequZfjVBYKoaVYnwA2HLjSoCkUwWKPNqryv2qh6ZQYDqEsvkDtZXV9yVkxqDsJA6ZX8oze2G",
  "key8": "2iQQpJBMZQtPwx81ijqmXKCsiBbQf1fvrgb1dmkPn3kjgxzZQ3ZWDo5diJCfNznqeL3GiXfro3yZvaLityNYbepg",
  "key9": "mzgdiezDeY2qmJCm5zBaAQseGX5Zh6NoUrwyjKvCZAkToVRG5XwenyUnYhbYPFcXXxdVuuEwS3iUSbgvapFuCZ6",
  "key10": "54hMDpnMRRm1q58FHrD2Ym9mDki1Ju6etzbTyCio8UwXuH8wy2r4EpEBnjUdcDMYhbDPG3x9KsXesXVQXo4q7dKD",
  "key11": "5bVAL9cCYwm2xn9K3peVAZEJb55vqLm1LCDoCQLo9TByFdtgR8cgzMsrUohN6wwQLMMKMXWEeQzWGL8nxYZH6jtF",
  "key12": "41C84s21XYFnscPypuUPhufqVPr2fKa955SB4L5HYWRXeMAUAmV5b7YZw4SAcmi8CWjw9s1RAp1sxNM4kkakvC2W",
  "key13": "3m5UvBsF7W6fAF1LvZL2Hhb4dczaYpNNv7DVN6rssPFE994ZPbrgDYQdk25V1zu1BFPDofZ1ys9Pv2A5yTR42fDY",
  "key14": "4Z5BHcZ4FBdLbBHqSkVa24r61Ap8us2V3ZF7z3gaxoNxjxeWGcqXNeR2Ks9nULGr1X6qCwNrB1WySG7F6EuK7dGU",
  "key15": "2pgUVSAjwWdQsJp5xaa1nBAkTh1tcYce2EmhpyYFwAM7VAnVgxSd15XCt62SytFxNgdfc4rDmoXkXRKdp3e7M5A3",
  "key16": "2yuNervXdD242yj9Qnpkb9KjJY2L33WBFDGWtrnWYuNYAFexqCcJLSzP27g2mmRV2cVqt13t3GiXwC9dH5jRRYmf",
  "key17": "3uk9XAccNsPZJhQRzWt1uFzKbdWiHshRPtrzENNA3JUTK3SxQ6nvsyGgZFnEgFnfdJJMEdzP2Jr5NvcoWRG8HH95",
  "key18": "cfktyctzv3ETNuXk4i2L7wd1CFqBWUowSr8qYmnYFiS6ukP1dkBoNjLSrtsxN1MzhtbDShU6ynaPoGNUttYs6u1",
  "key19": "4wgWVsqNtXjh62veScYAEdg14qGLKL3L8Svh39jJqM2Qjt5XozGyoESsPfF7oShW9j7Q45vz5nWPTDfTBFggra8m",
  "key20": "4Mgy9uwEvk2dcZfvrbnpSbjy1ev6YLBcwW2gNu9aQK2reHpLQnskxkYXz9XJZKSBHo96DEXZAq7s7gFDWf8LbMjp",
  "key21": "5CcYsNi75TKoQUfD1LX9KCrEjdnpXttxyNDcXeA2cxGgEBiBFEXfTpWxMriMTdU89v6dZC391G1ivujDqydhVqUB",
  "key22": "4i63jy2H7puwacRBDvq9rxBYtTmG9R7U3NQD2qG7aoNdoCDFXSJEYABmrMPbyegBX4WijgCs2QTefBBCTZgN8vXD",
  "key23": "2d3vgBjuwo789DLXqU2vi4ySBistUpNsCtvzrS1r7PsfR4aZbrcwoG3bSZxcHcbyAKJfvDyX1BteeSoJzrA2UUxM",
  "key24": "PFnq16gGrQLj8cT1Fpv2LSLoMEAd14j5skkSV8uVLf9XGo3t2NZFuQMPigFHt6hQWY6zmHUWUGVJEkUcteFBbfN",
  "key25": "5AeCpqU4gXbX7JLSiPnTbJzafAJk3YUigK8AWVj8g2htMHZwtuazzC32vxKwfC62sJEGV5domWGpm5UjTiRPu3X2",
  "key26": "4iqpSW4pt4Ut3gLWSD9Y3wcrWi52PapgHNV13VMCkdDimRa6ydEkJiSWdjHTPp5YNj82yhZjz78bqBq1wdXa5tMU",
  "key27": "5QZVUV286nquaH8Kuh4KQhDZaUwpHmy9XnHhNMEiWmBtFSezMz1zVkiQtnqq1ym8Zw3RxDvQaAqdJH2VfgQNWftD",
  "key28": "2xF61DkjYYi7F8D6nBgQ4ZQCwXip1To33vsLGDrScBefnCmAjkEGwQt9xcUKNuqkF1LTuVhUMk3FJzq8dAreFE4b",
  "key29": "NyeZg182fvCbeXrVbjLbYSdNh2drCFZ1runPUip4urfgtTjbHRoNToxvKGZALWNeW4VTrdgQeTdJ2X9pUg1awG4",
  "key30": "2MznTxvifdqTDjQNz7fMgTLJotB7hoL1auBxeGantZM5vuBPxqtaQDHR82LQ66YUKWEQSw4tp4eReLL5habMVQUF",
  "key31": "DpHMLkECnVSB8RW8fBvkpGd2gsA7KK22JfvoRbbDKon1UxNZsSAhdeXXdUBQrxiPYwigstwLagLxiNJvb79kiE8",
  "key32": "4bUaJJHiV9ZsJCzU4CopVHYkRbtwNLxLaMXPCuVRoqdCeT4venTWP3rDDcb6t99b2H2JSu6GADBeHcix7zPvqGzb",
  "key33": "CRvCCNdH7sfphaGBYzsZtQf4SdgL9Lboh3HMSwY2rJVPnLsLeA1MJhxP7dGpmFhhVuTNAcUUkfqL6DTx5H6b3qw",
  "key34": "5rg3vHdYLJqcfLgzLcbJ8SgbAdqb57TzFv5uqcuwbANAGY9svLaodLcxJskGYWdJcjNfNLYhr7Wimdpu2Gra4a52",
  "key35": "2zW2E6D1HBjen62Mh3M4PbYd1BWEx8qE3PoNf4Pq9KGXYgextLh75vHBdutJLzS2JrkH5zzioVuC87zw5p1pcYgJ",
  "key36": "3gVSa9Qiig4ZNGTbGy4NdkFYKiZ1ZKfReW3Soxpq26vJMLvpSJJsjJ4safncAdaKDEynGvkPqMWGerA73Kg4th1s",
  "key37": "2DLYFcj4HzGUhaN4ovdunMsTX2gxcuE2C8TUFraFimoZFEZaxAEUE36CEhwoXFUW7T4Kk11F5zioBtVNgRf84Vn6",
  "key38": "4da7AvjNWzkBYJJtEZrsC1VztdYUHv4s5UNHRVQNNNJxmaBU2XnksYBBHsVS7JCWWtWiPGChNeb94s7DkUguK12G",
  "key39": "3u4ENZTEcf34Lv3QNMH3Y9KVz6moR5AKqut2phiGNq2fAZ1wG18jVWd1VFgvh1UZEeJ7ru6U6fomaEr4FJDvWRMp"
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
