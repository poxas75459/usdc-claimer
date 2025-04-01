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
    "jXLeGMBHZLTtNVQBUzu8U2Z21ChfpMFkfEaBSaBaRRWymLUxkdxp3aHCo7VViaN44FMnmhg41A1k9ifktDt1h4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B9FHNYiUtQmTDeD6K4ntGigsxphM6y5CGJXiHUL3etZjEoc8VbifzyApzapR9Wt1tk9gyPxYJJaYeY8npwJ9eMR",
  "key1": "4QKNsCqy7yeSoYRRiSs9gy9Zq5FNg6Uv7RCJbVcYQSYLRpM12XRgcY2hSB6LR7kWUA6B7TdFdaQsBUPLvcwH4LPf",
  "key2": "24Q1hrDuzBKCfbXAvUU5kugNU3Bd1d5hEfRiWnofVNWQsfTHrEnwsEpYRxvCb92xw6AHgtqjAKZqbXKuRU9LGK5q",
  "key3": "3QbVk6JXALKPL6zYtz7pPdvUk7oiiKQGtyUqyoHxWHNiKtgEJBY3QZxRQut7PJzmPMWqKEEWPEhibJgv1K7m49xP",
  "key4": "CDo6T7tEGfes3W53wtr1emfUTxYwXSqCFTergK2FnMfqV551xDRTZENtbSJNGSfnnaZjJt1VKFErTE2aqtBDPkm",
  "key5": "4w8YD3iXg5bYgfQZE8JSCkrPTWBJCvbsMsxtSB4obSGrucSULjxEpbmzQpxH2hsugSeNgAn6vxdKo8c9g1TLBrGg",
  "key6": "4HohzXkMUv7wqaa85uagYrBaQjvLYEryHhhBugCBVBzmACt5YrL9oyp3arWKxtv2K849JNQHTUoZ4Rhkmc9pMff2",
  "key7": "25TBzf3WE3tbZmRjACrrVKP4FK1HVn7ygZb6caTN1CY2RsMbfr5rterDCkJsrrrzn8wJxy6xcNDEyh3ajSMgb6hH",
  "key8": "4LxjXaCxgcGpib4gmk43J7dFmdyJyceEsVsq4xLC67FRFvvaXnZ6PGjWTh1TaqH3BAoL6iywNGrTZMV9dyodczD4",
  "key9": "7tmLiZ8jUc8EaZJmve86UjSkYG4qYKkvpeE3hq5rzzMqRQwXNjqf6qX2ADRAmfUayFaQj31UeDPsFSszWfYkrY6",
  "key10": "iZ93FbHW7jHvPeAtzgfdjJp5CGZq8UoVQ5tpNuakXz7pXPViu8Dsur8GNFeAjcFfuFmPRC4VhoDT87LKPUHnt7r",
  "key11": "21Gq3VtqRjBQRYxnNfmLD2rDoEgEtJhrGPEn4fWiP58zsnLa1qRVAxHnbXQdjtCDegXb3i2BctjvwzEkwKh2GUNL",
  "key12": "63kNzLJQg7jWqUs5UjBc62AycS1sdGh1jAsQoAvXM9iW3vmqSUCYTx24A4EbTvhRncZUsMGkeQcbyPTYiuM4LwME",
  "key13": "4banvcCBA4dnXw3ujC6WVhhxBtBQrV9fzWMmWJdK8zo5kxzwrNkiYKsbvfnT2DQbw58QdQeFuJdKBrskDB1sSBiV",
  "key14": "42a5qh3vVhSX3mBnKVYzZ13MF4w7JxbD7YQLht4qT2YxVncbVWoH4b4jpbQDZqHS3EFiPMQ1BR7wBYLcFZoPvBKj",
  "key15": "25ymRMixCiEmPpPt5zQ1qRjrkquxg6B1xjKbWhkXZjMQpjf6tgSF49EGSdRSiV5X99HpnUd8NZSCjU89k1aRM5aQ",
  "key16": "2pRSpebztgxK2eiTRTBTtcezJjFYSPE14eod1CbeuJeo8wpkH678hLxcmhztWZ9PR9BsJqxqLzKZ3gf6M3ZafpWz",
  "key17": "6FPz89M3Rk5nU9RdLz9pS7AWDGUbgmGBZ2heTP3B1avHrFYAHqHRo2GLknpqTfzhxvUM6s7eFjqzWiyVR9GUyT9",
  "key18": "4MGbcL2M9Gi3LhUhseu6ms6cVMixPqMWv3bcanqmerrvwNYzudeS8N3VNbBfARWUUt394mvX3y6EWys1S1qopzZu",
  "key19": "2GkGuQNjDaEiUZUFJ2AvgbEE4LiNSsrENqmAhcw8jjgiJuLBhvgYygm46MWAPf7PxMdqyGVVJzTUSfg558JagEVY",
  "key20": "5TNxi6Kbr1chVuw4jbM6ghnEe1pnaNPcNeybyZcNe46ZoSVckreMiMukMHBWjFrmQY2PhZ6ee5Wk8j7sS67fBtyF",
  "key21": "Sb1pFsnaP3FMahyAzQAq1M2VRodk2RJYK6qT279fkAbDBQcapLDHwHXtvkNBZTkAsezhSEfrrj97Y43H8ALUrj7",
  "key22": "3Fa7aGcUjEgfVrJq2DAGsRvXz9NEsLSUTFY6xPBy7kL1y6mSBRDjpFtXf1bjmS1W1UjPNhQ4bGVmrMTNaVdCT4qn",
  "key23": "3a1nNUG8zEbJoFcBM8Ai9zHmUFLW5r4Ynpy3ApNnq4N3y4hXvWqMPGJG1uZdgKabjEtnFdfNQPiN5qS1gTeDjnCJ",
  "key24": "3Rru4UK4GqHahK8wxeH9iD7w8tbMg3uXDtK5DbkCHiCbcZbncfbT2XS8v3QD4Dpd2PjKwvMM9XVLn2SfP4cbdU7c",
  "key25": "4EjQ2j89Yko3WS1Paqms3hgK2yUcsRS2CUSEYE9uK86p2Vot879SrABDaVyqGa5YX8KEng5jf2Y3XyDMZEQAKnET",
  "key26": "hLnhHwKHZQVxEBHReWerzDpBpqizcP15uhgbY8Rc1B7KZMryTRNzbBzjdEN4mUJga7AWCFJp1xbrNoEi54jZd2s",
  "key27": "5c3R6dY5QkU5wtAn6fwAkc7PeFHUKNiXvJJKUyHKisXNTD6o5pjN5SezwtPBccn97fTB35mQJo7oJPWuokMZoEfh",
  "key28": "4efDH7cK9Keb5zDebBtrhy6uXC88oPoQqfdf7rbnGk7EeWEBRZBMHTFL44pHpQ4Q1ro8TFfuUD1WdvjvsuGWsTmY",
  "key29": "4qENjYT7V2rXTKzrPLqKWiM6R4j8bywrGaSeW5bKvhiwPjugmZvfQPMwg6Kv3fJ1S8BtnX7BwgQXafZKcwgbxQnj",
  "key30": "5GFJ6CCKPQNRyPLzadYirKvfejx8jZA6LrZsyUUyQyvq2UkoVMgs6qkDybahSrZGk31cccaLFmTphtwSVnmagbEN",
  "key31": "3ygbpYiGvoFR5ArJudGCouyZBVVS5EYJYBKzkxkAv5EN4qA1dLfg74DLDsR1nwsaERkoSf6G9tfc2L7hxMbYR6td",
  "key32": "5qUYQhAwVJAY8oPyGmg5zeX7iwgc5GnWiRBxeaSVCt5WFrvhHeeGGYELzorVqDM3QjdV13VEwHTwNZbvp8iw3NMx",
  "key33": "VFSfbJJVYbht34d3e1xHJYSB4H2tYKBNRkqxihN5rSPmn4Tj8gT5jZm2a8MFZQZzTmrh6GgZ6JUVH2HySbBivju",
  "key34": "5jLTSXpQyGcqCLwkLPj8wSZrW6DBFxSi6VDg8soyAhisVU919rW3dwVHfwWh6NTZYgifkEiLUDye3ZHZacdvW8Yc",
  "key35": "4sizvoAA4oaLZzvnxRMVVjAEifj2YCsGwQp4Bj2Jt2WS3DpcX6WmBHt3JuZVjJdGQMVeHYzUkBBerzsZj6ykYuf3"
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
