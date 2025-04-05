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
    "2S4mUYfEkPxzugLwjkn2EBB5h2LiRUsLNiVvRiMiQXiY8fNqw92wq12cAJHEoD8CWTT4q3oSu9BMuYVZmJXvtDRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b94HaghbLjwGVkA74qowd6341KRK5DFHDsRoTskfKtYWmemxBxuxy98LsFg4hvG5WPRihikyD22MVaQ1JarZK46",
  "key1": "5Abvo9APnPzryAdoARpGTw45w3EZr4VJnzMG6JCZ7veuPNGqadfE7bpajB8NgNRx6AXAYhQJinwucyMqurPKdUAh",
  "key2": "4T7ehucZLecfxLjJjUzPnMrUT6DByMUMktiqS9UscS1B8QbhaSYFWEBZnUREhiwGhxHjevLAS3zBhUcxRYaUNmuN",
  "key3": "4KJ4MqdmLiAPfm1uCp66JH19sq3mEBC9VkpUrVN69M637Fh1K3wtJAyGPkv1PURTkwSH65QwYYDG2ivVHdn3Bqtk",
  "key4": "2sM4jVNawx1UBgqoHz8GEHF6oddFsEcqUR9Jj86pmSyws7P5vT2SERUcmNfx1RKCaWJJKKCpC6FTft7pmWJhZRfC",
  "key5": "5EfjJR8ouxiK8XyMTnuDgYyLkyr6KBTFpv94vm5N58ooVX8eNd8HUqkt8dGnsKGKoHowMuGCVfZcmirXY4z5atrK",
  "key6": "5GUC8JLrkJgY9JzGBEgv8SKcJ6Nn9g8ZwXuqiWsKdrcEfbLKzgN2sboKJkomxwFYexoKDCXbPnM88gwNYVuCVFbE",
  "key7": "5Myt1d6fte1hbhBXuehBrXiqUoXXtKTvbJngSNNm5ktrnDJsa7AjNthHR3vvppkWnbHMTgn9BF2HAk6WDxRsakE8",
  "key8": "4euBGBfKRSaqdCjPMbqW1kaKZKHhjmTXSKKyYXYhtEEZMpcdTZsNE87hFVDrxvF2Vizmc2XnogKzLqnJ3JVHR9cv",
  "key9": "38KaM3HwF4tuDLaDTWCFLtQQpPu7JfJzsxQAg7ispaFwvTtvHYfZ6fLqsz8qCwYRuafk1UfaJRNqcAFXf5ZP8kpx",
  "key10": "wMUxWWVBdqoUR73esVoX48WbnzzmYu1A34bB8PC8Qc3bMv2miHE21DjjV7LXJBfzMjW71qQJBV2ApdrznttHotW",
  "key11": "aW4mzNzBAma8gAGc4sc2CBYHngtJe5nvicJSb3ZrFVft8RPCLRETAh4MHmK7xjHrBruWVLPsULJoAqjjoQkYdsB",
  "key12": "4FVnfHRcKLyX6WHEdJ48tKXpqfnMAsXzCZ9ZUs4RT5gREUAmSzxPvJCByYk4xYJkauyKbxTmVqJXFNri1fSE4gSd",
  "key13": "x5gF7Vdbknh6b6GcQTJ2HsCPPEyqzetEKiECGRoN4pqpXaQ3jjWYSyPETzVQP4nDnWd6ziUmsjF29YPAVtWD9MQ",
  "key14": "346apSM1A2xAoY6JViFSiRf2hNRvPmK4q9KNL11sfoJwh2D3UyaQ76vNg4WLAyuUvVABgpbyC8qPcx4uNoSsHZNu",
  "key15": "59VwqPaQD6f2D1r9dSWMungkHuD83RQhistoWgfCkgDRB8DTWxvXZwNHv6reKGUvRv3KDaMqygxwYJw2hKC2EdC5",
  "key16": "5eDZLvn1vNG4tsHQhiL8WfCz7LmimuC47DVkbNGJptebr3SskDD1CbdB2PefKStYagD5FMae6hE2dahFBFT6j6cM",
  "key17": "kwC9vu5FZ1BM2WpC9qkxwDoRP6uuwTY2TuvTDAYkScvF3mRZFrVSeCfHwBfhmq8kSCjAGVHmNfB6KR5wwi1oSF4",
  "key18": "3gVR1Z9wH1jVpT1GjdfgMSVpoX8QnUQ3XChxNcBgEamsxe3zUKoSSVV8527Tfx9cm21WYFir735tPWukzjaoGNAK",
  "key19": "2QxA2ozdTRPYrdLbKFypZaZBz1gn9o1wSzWwM2zbMPM5z3V5CtTqKivSwfELTkkw5LJYVXNgKx4AUm3Vn158hyNc",
  "key20": "3jmyZTg6K8VaiZvnTvVDc97NhFJ5oTsXX5tBFBkP2vNFR4NKR43QUghwM9mjzK4pfNavBY6hhepj1qgCYT1Jp9a9",
  "key21": "5ThpaMbiZ5RG9mf9Pp2GFEkCdoXPb86EWjrpKh8bHMsPUM5Mnycdjnf3DHhtbmahtabihDHQ4tX3wa8A3SSaGJ3u",
  "key22": "2rzVnv63jHLyH1usmeoHx6KANPME4hoqL6LHV7PC4yiH5oZ54F2sHJBmFPJy6ELcaC13binmVCiiTC5rzvFQcBrk",
  "key23": "2T6YPbNVToCQT5TtdynK6jsyYtdgA6nQimVqLBqS6dbFFCoAqAToiBhhe15D78rNyMCbt1sBRJiErTMPSc4hae9t",
  "key24": "3UMDRpY9nrC14SiMdVypi8DuJDqEgcWHu3DLd5tAbMZdgDV1AAQ1yRp29ph7rZh8XDJ4dXgdADH1CksEivx33L3Z",
  "key25": "3BzSy3fEz4W59kEEQYPxrLqhTpCcGsE6uVBE32XMHEeMGeuPNEeDRHPohTCuGZ6tm1W9wA1wEx6paADcQ6fEhXeM",
  "key26": "V56X6w28smR1QeusiiUJRxNcGjJ3QKR7P3mTtS6zKKrqvHZHcLUaTyBxLj87jrAzkSJwma3h2j8CRN9A1h3kAh2",
  "key27": "3QhqQvKpV2pCotFJUQYUzUvsj5zzmVqqcsP5PEzPoNwRsHQwSgoxn8a14iHszNEG2BNS99pu5F8LEKp2GY4TQ1V9",
  "key28": "4Dej9VYbNLb1F9i8o6p7CY2TvD8FZ8wFn78DPL1esEeCib32MovQ7Mi3qxUFQ27h4ca46eYzruArZpj98d7rxoey",
  "key29": "5LpwkWkiPNdokjRqfq6HGi8HVzPh6Uxio5UJKnk3sA2zjoq7BKyjCW2mNqJSaPXDmXNwjZe4VAATKjoAkNRxXvyU",
  "key30": "5exqeD68HkanHg9hwDu4FAhpQRY18hSRAGwXwZkvEWHoVLbhQThjCGpBYZo9YmJvdDwD6JL1iUAggyWBJyZ2Wg7Y",
  "key31": "2FxuT9U62aAmina8choVQoAQKBAHXAm65R2BvmMhXu6N45JztSyMoAJjYr472mWde9hNHhmL11eYDRXa4BAGUZTM",
  "key32": "4fPnpkmJjnZUw8Fbw2i4nu655gi27CztT9QcPLz8usHvMPAvp1zVvjPrc4VnBGDRDQhnLnpeJ7z2CoxUjvA4m6YL",
  "key33": "5ZHxD7V7d5t5g1eMjhc8i7d4PnCggZZFHNTfPQ4DdGkrvRFwTmQuYiodVbfCq7Z6Rttr48nhdELCGDMyVE9Nev1u",
  "key34": "4q5jWJZ7n34zXM75oJ2KAjiNdivNJkWKmzBGMygi1nMWk3sdkt8ArFkVCyf3ByjZKuTc3rYhtke2eeKQKJhFZrDP",
  "key35": "Ka86G1SGNezD4s9dgk7PWG8mTYT4AQmvw5s7JBMqq4sZfcsdZHH3XmxbhoPRBbM5tkdh1xmJLRwBe7QowiMsUTF",
  "key36": "2ANWa8YgHcZnA45h3nkfMUMuRs6GnVWs1kgbL9dPCNzvhvAFhxPXkY135mFV5yeBQ8tsEH512MwiuRCbz2nmBX76",
  "key37": "4j5ULBWmtWehh45fZEyXA881dCe2VfqqMaYSCbDGA1gso88WWMT6s5cXznCJxGr66rBTBMHZrocd9Fuzj4PVphWK",
  "key38": "5awmiAmcH4Kex4HhDa1w3dVvH1mLYPuVmhz3eCs2LyWSTFwFYaqSpceM7Qk2msTpL4vHDpaJY7f41KaUayS1CuaD",
  "key39": "2CSXgUHmJcQ5aJPdGcwrNH9A7krZh5Tv5EbajAExUoE5Rt3uGgkhYtBr3soSHd3KXnzvEW2myVGZ23FcdZBEM1eS",
  "key40": "25Z36UffnpFyxnsxx7tKR64zQ7yBHUwaDrwte6qz4jGnJJ6FWrULM1AL6CyXahtEg13HkP1JVWj6Uq7iPCcFBWf5",
  "key41": "3HcnKP4tTACcRrjBGqxPJnjAHqJCdX5trFU9pJKGmeGL1C8STSWuDBKmk97qziJCBnVKHEfoBX4PtjTKG9yTVYpN",
  "key42": "3BHaCALL18Vtgf5VDZxqM6eQNmbshVwJnB8JM2VVP2waqtHnWonSKEPb4jAPgQhaqdKYh1NchrotVuxXt8tZcCof",
  "key43": "4CNB9EZB4mRRxNaVLbcw8JbUTjzu5HgsoJRXeJVy8weZchbKuiviUDhXMd9JuiBanua9q3GE3wKZZ2a6jbGNATPV",
  "key44": "3EK1cppncjW9ePRUppf4xBZnqfN3yDznrgWPDc3SFz87T4uAyW3LCNSQheKmum28oJtDoSaLH7gVwei3pT5eWzGX"
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
