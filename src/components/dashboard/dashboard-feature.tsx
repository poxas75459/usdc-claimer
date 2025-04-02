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
    "3coiPekmzhbjCjALVRToEYXmr37g3N4ybRvBPiQMk2TTqJycUCQ8voyJAkj1dtcCP6RFQ8Pw8EzhZGWXPifBoHfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YdgT6SZRShdJaR3KrB7tsb45Y3GffRepyuTa6qWnCXqRcZqYFVaM7sLV1F9irKKu37Q3Mhj22QLLszgxCGjSCXg",
  "key1": "5EFXGkMYUGWM1fGCdE8FTZfLYaDmS1UNk43tYY4kS1dHNeGYV55hJJMrVaKVCWAJbr3b9xNGMDCTWaNrRYfa7LhM",
  "key2": "4BSWgQ3NSQNqzF2bMiVniESBFaztwuuVnPAeLYqdSi9EGxWvHUwR3Gk1i1E2yqfXrU4Hddtv2nXJkWLKCqYoBEEY",
  "key3": "4phwRx5b67fptwt6M2ah8BBV794xn56wSmQjLgkZ8KRARm4s1f98qekwtkWfW91XVYTAaoPFg9iEaMoEhsAh8hPk",
  "key4": "atcRNZSBjTFuVrGedbUkSaz7faLcteHekpaAvXVbMEq6g4LRYA6371nK5xwWmBWxtQ9xERpfgw8L1DaWKnNs3vt",
  "key5": "4gVygFnHmA62oYBoR1NjFeR3rmcx5riHVYznUa6eDXvz3v9fGi2RTQvuXfwG1tTh3ACNXvSGv8qNg6H14BKZAk7g",
  "key6": "5pMrPzUjuHUHDcD6cs1T2esRhMLCJ4875xsx1G6VpQDGd2NkBrGq2xdh7uEbeuSjs1ktDApuTH5gSuR6U4L262ya",
  "key7": "5efbTekeNxRh4NmgwX8sh4xdyhbfdThzwmnJiymvNhpBouiqn6PDprRZWGbM1aETu3fKrromyguZxXcFTSDfzgvW",
  "key8": "92NsJGHTiYvKC649WWfnGn1m44GrfLB5vN36U9AE7gQ5BRwwJQvwZFrLNEq7GdDr1iLzh1t3w9np8mmAWWXebNi",
  "key9": "4V1Tkj2qSMbf9F3W1DVrCvxzwvLQtt6WCBcPWgfA5GG7rrTpMvPKX7JoJpGW7EJzcmbXwQiZizFFZ2a1FeCHhX5J",
  "key10": "4MB51WQytnLqVQqXPWhGYPZnka1fTVZC1nPh73T2X1m7g88YtitfdZNSCSnNgcBp7mpyue3J55bLm7yz3eRHg4PV",
  "key11": "58pCK4FGWrHNLT5jH4sc6TgLw828BXgtTAWPq8664ZbBZvr6ti5JQkDxnckiZdYrt1SrWpZuKc6XbHnbDVcun6in",
  "key12": "5TUHRQ6FgVpR87cqcEMKr4uMLyu64tfsCkgstF7EHbfkmx7hwrerBzi6WBWaibA15zdeH3zN9mpXZcoroUJPYJ2C",
  "key13": "4WUGYxQ8ehJT7mfd5sCvpfFFXM7RqBoMJZX6qGThxwvYrbQ2X7yh6UAhihCmkhbyniLqfxKwjHy3tWhyBtMYQQbC",
  "key14": "5JjPx4RpFYErvBqjcZtgR38E7GsuDF8XA2N3shFFZCVwL9TfRWjuNMVM1o9sRpZfdedCX6MqKh9QK95LsPmrFPge",
  "key15": "2zArEe9NoFK9rbCQb3VXdCLtNkbuCWppXHXX4AUmRyw7RignE9TDrDuCAXouWqxM3MENWvX64zHoAC1aWbG8Cm9v",
  "key16": "3DwWCsZdeQQk5yHoxhwSCQmpqajtGh5LYUpYKtLoBVoLmAjb5NqDkpRZtEvcQLnBNGB4dMYzRqBywmjTLuprtmET",
  "key17": "5pVdFBPzEGLenNrFSCf8z1EqXsaQks3Xa8u1pWFxxcdVyMGP4Qi2kfbVJAsfjoiyDpoetJq24vwmhovNgFfhMac2",
  "key18": "bzYLKtnnHWQUVxXpfPX6AJ2Y6QCSaqxPfX58p9eMKRyGXgqjkfrQLAmsdgnoApgyKBU3BuAoUw8JAV1fUGQxMMk",
  "key19": "4jAvDndiEAZ6Hpc9uTzWbJ2cpWBEWx6rz84cE1efjyAqZ2pENJFnjeaUKXqRY4qQt5pHdLR2spNi75RKFendHLci",
  "key20": "45GmEqwa7J2TnwNsz3JFeDMmNZQMuptYwME88LuoNSZQdQpEu14VK8nbVd6SB1rFivmXyJ4RGyitdQZYr2QxdznV",
  "key21": "5eExXHGqxGz4F5ufkryYT7Ad9t72JktRw41p2hqbP5moTJSM7wPaN4WLQawGBuehu8tX4mwDQp7xB2b9hiKWnjtT",
  "key22": "5Ao166HvnVMdHAxePirQBSh7jEisBSoCpwAJQTfd5HNjev8PKnPyyGjT3DjAg4toPgJTCDP1si7zYxgKSPKntpzk",
  "key23": "mjMQ7WmGTLewgSJJDPMNkZnAkF6aJTm3LMUsDyrmFr7p5xJgyWYx8duh59cSZhCf6WFZHbWjwWABxqUV6b538B5",
  "key24": "6786BRRU8hNdJg5uouRTkhE7AXLaCQGh4ewDUdPsKwcYDyrurZLnKkQEvbzyx9opXSt6bDbdfbztjEUVUWCmHgN",
  "key25": "2nnJXztaiZ4Wznb5dALq6WXEdvZsuyqaYKCbJro9qBKMrg6bfP4tyM4z7rFKtgChMHHrApi7hV8TXWAQBfjja2eY",
  "key26": "2K9Ank1EwsGoGzAgBPg5bAeDnZKwQRs4QHBV1Xc9Fe1oTHGpzHusHSvSperRqUEPAr6K26DjqiyNJ23kBHJvmuwj",
  "key27": "2urq7AFhkFpqHsQF3WN48WtLAG8XV9gCYqz4kt5RCTqFzS3nH4NgXcee87czCfxqBt2xNHvon5XDy7rHLy9bRFmg",
  "key28": "32PdgGyytsdqd6Ac6rPY1BmM5wBp4zvPtuQapYZDeTgEsH8t8oLFuZotq3agyjVYdgaZzjJHoXjnKpXEL97Qayhs",
  "key29": "336Kcc6cveMEzc7zpvN2E7AAUnct7s4q6oUgHRPp5JHFPwUyTo87b7yPEVym1vZZZtbZ87A8UCEyHyrdKLYbbZbZ",
  "key30": "2i91V55kXBaq9fart8ftwvfshYqq9wbDZ3RwpgP249Ns3JpPu2suvvj4SgJ6h3VhWU3HDgDRGN6xyTrc7JHS9hC4",
  "key31": "5VrH54huWJw84NknkhwaQ3H2H2BMHw682CRwohE3MWhAmeNaSbaWpkZFuK5pyTiPzgcAz6PYfyixXL3knDTU4NaM",
  "key32": "5RsziUxYU42HLxE8oWgXJkE7yDg58Lz9uUTprJsP4kvRT5iP2eG6BNU8tFW356fZH7UXoxaPQ8ntBQyGetQmHT9p",
  "key33": "xFB4cZzg7QexhH5E2Z6VEZLXit2kavfAUPGuseVnBGAVNn8QYJJELRWnXb4Q1yJDSRmBnKDmaUn9VwicgNQ7gba",
  "key34": "7V9QGmtZijvxcqNGRJqjVqoXKuGKJh9h4wMyCbsJTo7DjfK4ECND9m92JLYntLvVck9NjbMTjpsh5dqLfKes3R4",
  "key35": "42i4fF4dk9jDiCBvRvS7AqwAaC2Faz1oddZCuNtiNh6LGAKiQ4S85zWLbsKECDyggPM6nPb7ZfARV3zPfXLvvnz2",
  "key36": "JucrbALrLq2Fn5pCSYJF1ctBZH92LhJDyxSHfaxGJZLKmPaJSZDce1e4WiixuBYtRLp4f4Ekde1x5bAxmxSkrKD",
  "key37": "GcyutvcXGAgv5nUqPsdtZ45wbyqdbhWcusbPVk4tHPqt6kKrx3X7smZaVizgbJURnwMddZ7X2BDAjvBUPj8Tzfr",
  "key38": "3CsGL1TRQ5i33daGUCG6YSKoYgipfHw4F3PS44Qxe7tAVfTaWG1Bxu28hoQpjFAVPoL6V71b8RUGNhQ46rWLk1os",
  "key39": "3qcBRKVzzuLxvFrS2gy3m3nHe3gMexNbZSe1XcDnUfE6rsXNgx5DApufvBRNbch2F3MgNFnmkja8216Xf3aX17nw",
  "key40": "2Dc9xc1kdweUQ3Zckcd96UdrZXAEGcLPm16ZCogzPNWh4HT1Ek9CQQtdWwysaaQmHKccah47Mm8ut5L2NVfNn9Hw",
  "key41": "2H465KWxacEHfcJLqXxmyhKYLGfGDrHnutjm1BvL7Zi16oWsNCw9Lmi7JkFNPjAkdZDRNfUEjqBZ4JEWB8Crni5W",
  "key42": "brsWGDczgLsQUeiiVGgyj9k5X7HwR7f1cGSx25odNrUeynwbVN7S6Qc3S6chSfup7hk1FbbLbPrUTVhmDbRJjxA",
  "key43": "4MVqRzqWBVs4EpNnCGnaTWChHAbc9XesX7DJQeg2ma4TNvfhnWWidyKjeCRBYGygsFxmXdMqY9hH8TWkZMhQq5gZ",
  "key44": "5yCo5FVJFqJkm4pCsbdCreAjSPvvDchfJVo6JkytwcNvNH3Qz6XwER8V6DPFEkgJSYHNp1avjxBTCDS2LuxncCeP",
  "key45": "3ybbqf3e8qmCAiVCvdXBnsxoBdcvENWJo7L6mmir6ihLFjYYsgSGo2W7LFaB1g9LkqP6kcp4p4pKbhGH9fbpsa8Z"
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
