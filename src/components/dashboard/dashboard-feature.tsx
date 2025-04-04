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
    "7fNxojUpeTLMfkubmjokPMUxUbchAA3761KD3hUi6UasHJYwMdo4DzuxcJ8MSreMeUNmgMvgXpakBt4XX2583Pp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5czhcx9HGse5fRCcWGZx9zGAsHHzyXFHa5WeKWfTUbTbkQ9S4hGK1kaVzWS2HRrSpcgLwpHmJff5jrdw7G5zhh1U",
  "key1": "5KLN9jXhYKMrooszxBV5mt7uxeMmw6YTwsgAbCRVYFKAb3U9ceX5efMnDmzDnvPbRVgVKkokzaQXfR2zxm2fu1Mo",
  "key2": "3NH7mpJFk1UcvXFzWQazea6pqJyP7XDKFqWowF47B1mNaqXTvEa2XAAD1FRWMQRb1vUg6e6KXm4erYmhZU6GCobu",
  "key3": "2qrB3GMn7tcR7pjPULKPLX8gt3Eb7PTPxXAfgjmiAnjfr9K1CBSDR72UBnVUkKupBTTfAkTMDHgKwGDkzp7YfUx2",
  "key4": "2d9dkBrgZAXrNX96jJQRPSVdpHtMWuZfAVxjkxUUxTva7C7eGbKRwajto6KveUk7fDRyN5P7o1AfPuDK7WxcLTn5",
  "key5": "4q7eaBQFUzn6ZSZs4i1wJnrxR4sMxqMTyVTSQvv1jfS2jb6DrvJBraz9cpQJrEUuxsDVaUDJgt4fvpG7JdFWX19T",
  "key6": "5Au8squjAsMgEYez8fy23bYFzEhL6JSwDddYfb1vM4HX3AuVdoy4WV6FgGicFe9afm9o2svmWnejJrSgUzQSwk57",
  "key7": "2DVb7fgtK2fJjW7EuLSwLYVUrxBWwj568RghnVDNaqHx7Nr9cqAPdDmVAqP4tnLa7bFGJt37wzej2BMZ66uhgvDz",
  "key8": "6BkxmngAwpJV3yTRhN6PXyZG3QtLs2KGqVzH65AmUFbzyNWHPiiN6FnpsXs8Xw4zuGgofBRYE6EP6XTe9rp1keZ",
  "key9": "qG2WuMnR8KFv8DnnZASCB7xCfRTH4RT1rndZugW1qfMLAtd74Wouhb56J2DhpjxiAJZP6sLc1HMrEXCQLCrFSUJ",
  "key10": "4J26RH6FnvADGmoUWpaELv9BAXXZZX45RnX4cbWHMhWTQegz1fciSmKHzqDwLQZMqbaGC6xj49w4SSufF2YRvic6",
  "key11": "17ecN9ggwHrXaWabNF4fJf4GGcskeUsx4qf7BqusCQKNYDUcyQtLmsi1bYB6L2hUW1M635AtpLewfK7LkXs4bGX",
  "key12": "2ke4UGGw5R9ozw5E67gafquncr4F663TETdbi36AfKtGWYgnSFr2CWRBLMXmPhKie3idi3aHwRZsMVBpe7ps7C6e",
  "key13": "2hL7LtevKpZET1ATTjZzGma4iPwJ243ACnFiBJoCcCC3F752TDCYMaprzGkVjg98ts65rykJ8i69QDTxrXupWhF8",
  "key14": "2VtDvVmy4jW8cgYxuCjTSBKZ5F1oG4UNfJ5Dwccjr9mb9MvEB2fkhjj4anPnut8LTXWR27Z4GM1urAEWihEUfUDF",
  "key15": "5d4gMVmapLoKW7GrS9Fm3Cs66XB6Kigpr6Xnu4q4kT6tKg19B18HJbkwQa6e1LmZG3MWG22WpF3xd2UF4CM75jn2",
  "key16": "2bGHJiwh7JrNnUG2MCL2pfwruDF7onkJD2YGVA4WQJ7B2Q9Mu9rkxvxbhF2boWFtYWWEsGF43Np4z25ryGwAy8UB",
  "key17": "4rGRevBJvuS8jgG9hSYduYEc6KoUSLLfETGKN7L7fm9ntwa2VkgAzwjgoVjqoxJkBJqmTXWmhhqGHKvSNYpY5YyJ",
  "key18": "pjQr4wATWGLtr9jkqPGxiBan5d3yHeAe6rAMcWnHYCbQ15V7FVQrHr2FJqVZorD7BjjpamWpJT3oerAqyHgLe4n",
  "key19": "5uwucehvGSyLjzfu58rGuQyJmSRwDnEFymZ9Gfg9qF6jfdjXx8m3QsH8VzFgduxasYAM5z6ahKfGP7K2HQpyNcrx",
  "key20": "3wiPSmbqXUExZRFMkS5x3G1dKh3TGYCEzTFnsZREH13HAhvNgh3zBuenRPApopdmaJWiRjDxgKwRcMGNkx14ESfk",
  "key21": "2jHsL3Sv63QX64QwWraJ4mM2N8jKaQUzEPzwzhGBkgWTShFn1qWegJ4Ra2ffgvoh7MNQ2u73CpGDVUkdHabai78r",
  "key22": "44psZNYoSUKfBWVFtfQ7hhcEbeaRgHzCAZkUa2nxUzzQ6tC51FHUraU2XzBkShNiFfnRy9GsbZ2L6xiuttJXaa8C",
  "key23": "3Gy2VffJKX4hVdaFUXeevFv91cKaHF5gRVjWXXmLXVhZo5RCMR5zb35L7QFiSuKys8cdf1YyAoBLQYCczb6xYNSC",
  "key24": "4uHrdukwdehLpvcEiM3x9j8oDivnXMuKcVcvSBTMC5ycYRAtybCK17QJzTpo6Y4yghggtHdkVcfyVNHBmkPYFQnE",
  "key25": "4aXfuRe2cFBjqSUMTxPVd7PLXYdcKLCr3fTXZbjhdsywP4JhDXSGNE2BxZjJ3bT8LNejdF92CtH8DCJPnSgmmL2J",
  "key26": "33b4uZpFYG4m4dDnEUWZvM1TuiPLCrWQNDgS5vrFTQi3xb9nLgcd5qbPNCnmkRoAkr3jqs9k6ZReVR89XdL2Rcqi",
  "key27": "63LjSQijDE9qvTgrECumkMPwY4SsSJqu7gnU348gJz6UPLQw9x9KfZiHcnBEqGfEAcegW9ZJf6BM3q79S6Z11D4X",
  "key28": "ZgDZ7yRvEDZRJ6pF3HFsp1Ke6YEorNvygPq5Mzs4ZpuHwNPwZNcCuWpcP1vQmAqkkuwMM328qQ5R2tk5jPsfhyL",
  "key29": "3pkcrZzv5KGxddEEbjuKSLadZtD5GP38VPkxV6QD2RPZg96b3XmJToaSMRwoFK9AU7LYqRecm5gRJR5VCKnaPCiX",
  "key30": "4Sw4X5kuK7QvBoybYW8Z4GjS3KPbCtji4qeRxCEyS578AoRqsYN8Pas5C6ZckgJefQXZCdrfwcvMn2tMj4MfF93S",
  "key31": "4NbGeDFk58mHUd3vHeAt8UQ5UpnD1QKtc6nFEuF3JxUPsohTkvLqcUCavTKv8z97LjAzeScfRuhegRY8BXCcnwpH",
  "key32": "265h4Ut1uj4hL1JJFDxdHWJN82bkMU8z26ZmesAAkAqzJnaxoguZKTjB1xRiDPi6EUV38WV8Th5b6713PjpfaNNH",
  "key33": "4Ww3h4fZULT8spC4eeEeSGFw3n6Bxw1RZb6dPChvGrNj9nQ6C3A2uNCCGksbN7V44SXvrF6FoEcH5xwpHumhAeXs",
  "key34": "3K25oFkLLBJ567Cdher2nn6pX6EdvKfSfesD9dHTNnLJvYTWRVpGxMdKsyrjQU2j5XmKpq3q2FHXGrUrfDyZZMZA",
  "key35": "5s3Yt2mmDxdtBt7g7ZaPce7wi1dUKFL8Z3bKg4dATFRTTQXE1S61U28cgd1iroNXdpEnzTvMkNgqqg3xMSZacy2D",
  "key36": "49YijJ4QC3qvB5gwUCWw4tmhHSYvNtqcb1utdJ8yxz1w6SmQoGU2PVH4VATTyHdH7vd3CoxCwJdeRMzWz22Bp2jV",
  "key37": "27eF5BLHQ7u5NBDJjN4Yu6ArV5sDdWAuYF5hYqtCuUcFdrKePRudjEnZaqcoxmDjr374aiGR3th5p21kwCTUywvD",
  "key38": "49REvf81bR1ADzEQ1L4wdodNmMZ2svFNrnLXDkEi1Bj181YjS2zSd9gcZxvZ2Cd8gmfzjiAGGdQiptbEqRC7x7z7",
  "key39": "2jXCqm6ysX9vD1ng4rGGxrshcTD17eeNUKwAKZQp1q7UMSvLx5HDN2uzNUPe8rYYDhPaNjhciB28kmiVNSLnFWgG",
  "key40": "3CTCJEfuUngtY4TB8bhdvv6Jjvh9uzPMqbW7SaudL7fcqBDRpdnjSw91Uf1zJKR7mASThJ44jPrynZ23wJSEpx2J",
  "key41": "AeQo1USBwE8Mo3eo7iwM4gMSKrDrvbToJDRJiKV2vK7ALqoWAoc4FZ13zLMhNeg7Z6uCRZNfA9rfnFQUA5YxyqK",
  "key42": "65Z2MhEj5uGYi89CcZuXgkqiywm5cR8PNwq9HTK2Yi39kaDP79rZtuv3sipgPepNEuzzhwJid4wTn86rRgFYnZiL"
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
