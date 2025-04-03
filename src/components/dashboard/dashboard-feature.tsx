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
    "5Y8J6fFL1fwyfYhwtYmHRp2VsNujjSQx4G4LmrULWyurWCUWYYXfFk3Tyb9HMjcAc7DJfhQzwcGXkKBb8MkfxnD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N9Cwe5je883XGziZL44u5ZnVJ8mEJPfA3mSCp3TRTHBnxdcAWXRQERaCzYzbk3M5AqRwa8tiKYzCaT55u98y3os",
  "key1": "5JrBTwp45aRFFqbJzaYRWQhbUYMgDoCCWzeq2Ntj8jwW8A8QVepYagxVpkRqdcpEMmqcamVSAgHgi9qDNqQNkpWX",
  "key2": "2WDdWjSnc18wD3CpkGxfTnV42bxNn1w78dL6dv5eSwmjQEvgAqAuWW7HWU1e1FoUo8NxYp8iy4jbsicKayTP2xNM",
  "key3": "3ZsUocpcBSf7T3mMzCWx3R3Z7xKEAHbZz54dsCEbArrRfoGWN6v5carzppewVQ6LAeq3oV6kmz57UGiYpY8AFAeC",
  "key4": "5JwKoNynGWvRNHYfYbR7kiR6RaZLQ57ouQ8Jj2ab8AHU7VVJ9gBUxV3JG1hP4TeRS5VdPdfHAKrw6Krf1GGhZaiD",
  "key5": "374AuzcWpbC1RWyLa6v9gqKqhWtmviKBAba1XFK3pPt6w9TVBThtwGe5afxqVURgoEuFWJLfWeGJxkp1xpEiPRji",
  "key6": "3qMsvix9yZJsGUHTz5C4PFUUdV1vzMcjgV3e5Wz3U6X7PrpAJRopJC5sQsM5mv4twM8d9Zv2GpGt8wbzPrJ2PqkG",
  "key7": "3uRCJFGVGTMjzFuftzpJfAHeZYCS6LAvyKkKkTaqikseTDmevv6KWeEmyBh9rWDhvV4xzn6TEkMsvGGPW9QWevDT",
  "key8": "4SHyBJgEfUnBoUrQLF46QKVj37mQG5deYuN183F6uqyXpguTQjX3HmKebo6DXEf3jyYqNJg4VYXozntutZyLPjBZ",
  "key9": "bHunfewhUx5sFd2a8fmNShynyudkjDQLfC52y6s59FCSNZayr1ymUGATHmxYyz56TetjiqsFp8zuxFDDRunMVbU",
  "key10": "VqwGsxFQXLSYbV3k9AWWmTyy8xT2nLXox9ur6VEn7BxJbkn32KzCwCavMVsjT84FyFmNvLrwn8nmLMViLwMNn8f",
  "key11": "5r7rZ3JSh8Bz76U9ebHSdxcLspDs2FY91f7ypLrdyUScNqNGSdQ4V627Y8t8qhQcrPh9Y42dnug5qzWUvSZdSgvq",
  "key12": "4R6GQ1RhnEsC2hghDikB3XKMUb1qgPhQ4UwoLbdPQHtQJNGopnKn6N4GF3KqrKYucPmDAEKMKGXqLuu9C4LecjM6",
  "key13": "TJcKnnJFDYWTgyW4i7HjHimcuUXk392LcXpCvqtNxEhuokq6mdRwyUtvUbhJsCjDakXXvGNFBTXpNqtW7hJE6Kb",
  "key14": "5BM3uia2W89RKNznSzCihqcx6htKwoQDi99QpEmGicELrwqFQmbCom3X7Bm6d41bS23Y3PVy5zzAsr2VZhwUK9bD",
  "key15": "4yLBx81u5Nwr919ns78QKdK2XXE4Cspk9NMdvkv1tEA8JugmLKtjvARsdH8EssUCEGATDHZXRWgPRPLN5iNin3sA",
  "key16": "5QUY2Mt9tGy92mx8JxTARBjdD3J4zbavfvhf8gxRmWWvZz8dxxiruVVHzAfdLf2Z9e9va5wNkzApywhhDTiuFAyn",
  "key17": "5fHUiXbfNRDH7KoLGJVFvPNnsxnL8YwysLLuv2hHeWDCCVHTQusrqxtrR9ZV7mm9nt9qap36VAG1hakknC9r3NS4",
  "key18": "4SVtLaGnDJuTY5kz3jCoEbZJeAfGrbfYHAwudqQrDkek3kwJ7aAtY6qDdB2eSi4sA2fjveqkLsXFTsZRA7VTdXYR",
  "key19": "2qQoiXaxTtJoWBfFF7Sat4zezUHqzFrWNETK3FTR9TwbkkwKmdPMngj7w3ME4dDLAP7a6HbAukLEURe4VLnCMQhS",
  "key20": "4VPwAbQL9drLim5iLrWPAkAC5x5hqM2mNyoji3gFaFZUKVYPFDgsCRsK8CDgi7fTdbybyqN4RZ3Jf6MfNMrtFkrW",
  "key21": "426FmQJjRsDK5M7hm9C7U43MBZFLGxx2mu3wTTTUYsGxvUfLDzxj9rnmsiPP8ndeBgEdhiJjv7KLgPTiyR6ppTMd",
  "key22": "3wnja2LoEvPWLmnibHvLy8pbC44YZxGBvcpD7ihbhLdMM27MtxgumPDypAZpLanm6BFHsosbkAsbwY8MGa24zSE4",
  "key23": "2qxqVeJRxeeLrNFeTfU9nfqASZ1RenXB1VCS2HYKjeHUwxRDvze9FgLBvQYe9KXBnMnhkehgZRkHkndfyrSWaGEB",
  "key24": "4dx4aikVmTk3Zvyi3oLBTWmqGUZdYnreD3CziprxZJTfNSpKz9TZJM16RY5USan7fo3pN3JrLGRB8vjYPQCwmJuE",
  "key25": "656zELA41Ne9652kZRyYdikD5sXvoJXpZjncA4NC2uv7bCxo88xvGdRYpBw7ABxA9WNefFvZenZE8A5TY3rqSVmS",
  "key26": "36TS6rSyyCGHcDErQsPgwtCXb4CHZE5RpS6Df5N6VFzpbgiwrZV6qLAqFbEi1v7bKx2svqGmc327DeKrQds9rnaZ",
  "key27": "5Bzhdabb6icNdHjYu8t7DpbzzQG9eS5asGmbCgxtVcvgWcvizgeDjiKQAyKToineD6QypZFBR2dD4HVeBaCQZYWd",
  "key28": "HCEhhfLvx7MmGtKPSMCQRsriKhoJda9VcuMTp9UvGmt4Fp1CsBf4hP4KuXa43JfawxmdWwuKUyCG14WtUbpM5G9",
  "key29": "QntENDoTJcLmxYWbAbwfmLj5ZjooXyoBzmmBpaFVwou8wdPc4MpVJ5Bqi4PFh51CcKtBCkW5jc5M8saqkf3LGoo",
  "key30": "AYkzdJpULdy84CBrTNnh5jvHaXWYfaZ9EFYb4VPiEfTwQjsvkYWMDGE54wgefeRvKZTgsqTULD63orQY9gXTycj",
  "key31": "3SsPSp4w5ahmn1tFiQKh2ngpWudfirq4JopBK2UYKKqH7qwyjcBgnnVXse9S5fuJ1BQ6sDByxqFRb8o3yHE7s8UW",
  "key32": "2sqpvNN3ZXs29ehEAATWeGkRipRfEA8vGVvMvDC6mCDvTW4ajpnGAKg7rSbSCLYSdkyBgBC6fUjvBN1kFrH4SsFy",
  "key33": "nKiLAZSY8Ddj7LwHLnJ6sJV7B1wZ2E6wcZXp9V77kzAYqEv2gxasA8kbX7YuZ8LXNG93f4BhWGq3KypPmdXqmpX",
  "key34": "3r71LEsFf5kwaTFiCaHawMFymEUqxDwWjvSKpqnf7crrWibM91MAcxoEA4HMNV3kzjMzmiYzHC96pHnhebVuo8vd",
  "key35": "5Bo65dDYkLZLUJQh3toFofY9Azv715BkoNi7xnW4MYApPApoH1Tk7TWqGwMoaaaNHsGSbf73szccTCz1wgqmzuMp",
  "key36": "5oYZCqob6gfhgkDpViJsSqzDACAw1JP2F8sQ63LJernWMF1kN4UautDuURE2atz3RtjKdVBQmafxLQsmb2gZQd4d",
  "key37": "4Quww2m62FghCkRZXzVxjvaG7RPNVJoqcZ2ipJCnP4t3DMKwkCwdjnEPp2C3a1nRTijK1tRX2rZA6tV5Dr6BLdj9",
  "key38": "2xdwmEVTh8naE4xTdqrgZ9VWftP3rjQrrLTTJPgevosxaRdLi1Ar4Qf7aowfqkECD5EomSWxUxfLAQQJcTmojXS6",
  "key39": "3m68ppbf23gPqLN5fno433DizqGvKceNKDzZFqxanNaxQ3Rn5jTPwLLroUNBwAU5dRcdfVr6jEcvgFyuKMoj2k3e"
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
