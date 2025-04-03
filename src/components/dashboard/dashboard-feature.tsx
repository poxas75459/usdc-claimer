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
    "4hkBe1MiKUDz23cJCYQ9vo682LbUBC4inE2jkthbfniM9PxBMfzZQsUgvADEvw75JCmuUHKtURdN3xxdbzU1Bpik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mnJhCzajWRkKGDCSedtfuvF36uF3mutEUYQ72PnLfvkuVBRJ9zt8Gw5xbmHoAyCq2LYBf1wZZXhiXGy4iWpUoQb",
  "key1": "2k4AnrWaaGXy6Tbf5NFqdn9R1p8ML2ABGnvuEaxaPTgJ7BmNZfCixs14neyDrbVXYQGTnP68w24iwz9jdJ3j4urL",
  "key2": "3vEN7N2FwiKKKAKJYs2KMYf61X9UhiE8taR8EP5HPjPp5qi9puNqR5E4ojXRLNE3PhQ92a2YAaPf9ArwEdYFZXDf",
  "key3": "6Dh944SWCrVwXse4Mr96ev9Xt4YDtAZ3JYfZTxtN8Peg1scK5dtV1u1uLC6GX27Vp7UGCLWVwBwPx7MYytwg37u",
  "key4": "3w4npXjJUm5kDARtrZ3EcSPWhyB8VrJa9U4DDoQ9ftGG3hLw7zhLWoqJ2S3wSABt4m3ZuSWpDXCKFwz3KuJwm3ia",
  "key5": "3oTvBoMh7GL2vRranwFzVeQjKkAzMVFy2zKZmbaj8U6hcKkBYUH4CCskNZLEXKNZFDd3NwG7crSHKhiGqaVxhQog",
  "key6": "62sYGKX4iwTaSvvEDKYZbPHCYtpHQebWL5MfzpgmpPafJWmXp67hckGrNJJZrEDUsv1M4yU29sPubTaVoHcUrASE",
  "key7": "28MSjQMrvVHd21ctBhMZRRwhmEMsxii4cBQ4BS9snjw6ZipGxuLT5ZrRo7x83xt4dGjKzqXGoaRZJPcrrmBCAWHm",
  "key8": "2J2HT5Z5NRFJSjjK1RgpRRsdi343Ji1VwTgCNAamWHhECfpr8YPggqCM1wniConnHWqFcDzuupXA1tgUo6ahfZNR",
  "key9": "26ufUd3j3aNJErDzSH44iNziizTus1qDAE6fVcfLrjnvoEX4WTMVX2Z46f8pCtcaKK7P8srLr5bUmTBZ5FxjGED3",
  "key10": "5vQtWavHAb7EgnXudexAF4V3vjUNSeoGR2PDCbqjorkq2vaoYxDmFJR6FuNq5YX3i9U1dGPY5JmJJveNsRTCB3fh",
  "key11": "2eFotbER9NPndfWfU1H2xpGvHUEbiE11DEv2jaC1dzr5jRptVH4t1BUzb7xJHgt4AFkHzxyFoKjaqg3mY69rQ136",
  "key12": "3pQAjrkJRyaJ6EkvweRNu4mVKqfFMtFQ19yc1RFDcipdPHWWmb4GfSDcKti46Mnr2tPYaEFKosMJFgusKs6n3ypu",
  "key13": "2su6wxNWDuumtm18EKHVwRBzRYHxuLjysfLRcWbqhkoohDmorfbuNjmo1GRSJCJuw6gmkbbEtrjmoYEuiSqQuvFz",
  "key14": "5dgFSZ9yPEHqJYHhepB1uuxGrmWL2VBBZTMezoo5AAQgKpoLMMSKHcNHbMZebnneu6VS7D3GangYFfhuFj41Uzsm",
  "key15": "57oqhA2ETH1MP4LPf3y5wS9T4VtDHXFzUqonY3TPPjBKL13KrGMZu15UhMDqB77TvC2H6xwDDP8T2nq7DvR7f86u",
  "key16": "4MY3WFMjo4byvmkMKhFKFmG6TFmALTbp59mcedgaJuhtSYAsGcVWcjnmxtAKAhFEP6pjtxscS8YrESTZ43aMBHcQ",
  "key17": "5TzEiqFCGtdayeQ5HD3h3XkRHsiymrt85pJz6DLdigBGe6zPyCCvJ3esf7MvULuShyzdLYbJsCJ6amByCFFdzDLh",
  "key18": "3qJutRMrgXPi1G2chTWNzThAcK9KqB5VZXGcb5YCEdTNfigAkVLjhhw8icccZgoz1cQdbb6GihzW3RVmCqaDHTY6",
  "key19": "286dZ4Bozs6g1RrWs6ZPrMNsykJiGZcEp3qxJnWieZQUGHqnFdiHhxUkJentBqhu9ZpbXe3sV1eR2i944eg4LJp5",
  "key20": "8BmNp7YdVy3QRf8kgTezdnTpBrXT2vViTyexftcnKAxWxEHKCDFV8RikXiR5nQ4DCrULfDCiBYX2oVzWPwnvfxK",
  "key21": "qNnJ1UHXU7U9RY4Tz29Y9pLfbW7FPbYbV2cABaCcMWBMVNr9BCyZpRRwvE4gjSsRFGmRWkKPV33mpRaapZUouAz",
  "key22": "2fE2Qca6wsTPDX91nVqcsVfhrUGdRXb3rngxVX5FcrwvsmArAFQdus9jkaoMfiJSXi7FL7KiQQ7T9rX7hYtZqkNH",
  "key23": "3EPQoLNhQzPhj2YuD35TnxdnMb4TSVPBM7RXCuqZuX4y8oA4sJjZmXAbjtJ6TxHRkizijVTbtMp2GpcQMa5b8zG9",
  "key24": "4nUKG4cVJNyaRtXJNfVgmxut5P9xToSh8akN9P793GRmNVtMDptULR7FUaRfzV3pXXj8aGyjso1DvP1zBDzjraY4",
  "key25": "pPb3mo8ZZMV7W7ZdPUCzfw6vUZsF82mKUyAUEsnYs3idnH6rUM8zVuadCjUc6UNz8iSXGXCKjwkJRkbe54ZbAYx",
  "key26": "4gfQ5HrurjpsNtbozujN2MnkY2BBXnJGKSvhbmEHQkMwEvegV8zc2iFVU91U2pP21ZYBJ5S48kCaMWShUbmrP3JD",
  "key27": "3gMRf2W5fbupFg1wzRxuAguk8oAck73pJDLF3CLwD6s6EMbDtD21wDbqD2VpRE6cKW5YidtxCaXwScTHuMtp6K4U",
  "key28": "411VrVfFKnu57CjqKi7Dg4LVmRBv7u4kVhoycEdnoCQYgcWgizf4PutAnD9dMp3xJq7h5JxuVkxM851QUPAkn19F",
  "key29": "4c1cVxpmQZyahWFQ4vZvRLa7ZSb9GVvrM69JyWrBn7RkQsQZsF64gN9S64U6UGxDBNEPKEAiFpLn44LqAedGnrLE",
  "key30": "2pij2sWwXe4h5mRf2oXd8grWrskuG7aWg99RLFavPA5zwww6M87JPV1Mi9NdH5DJL4dwaAZ8u8zs7eUVGuXi8fNV",
  "key31": "95oJwURp6rZ4a5BwfreSQ1vbZpSCDhQS6gQxrVHf48NZFK9MCvNS6beDaPsBqBWqaH2Ee8vk2K6TCobrMpdEF5t",
  "key32": "435NNcngzTSTxybsctNyYvFh4W8mR8HvwWsKVKs9nmCghe3beup3FQiFsHgVRswcY84f1wqSp2tvEfY2tKQFKgBP",
  "key33": "5kiPhWYreSqavFDP2JCF8knAfJhzMDnvu125h5TuoNSAfZp9WKcLZYXQHmfQ222TFhpNpZfpGTmewSXnTR2JMBtS"
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
