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
    "az3Eo6kpJcSjxwffHeA8vLzat9Kz9JSbV9pAsGi13kQiNVD9p5uKjqbmKWJ7qPkrU6X37Ccb25H6R4bj8MNMkZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YaQ8oyJgKtntiyUM71w6LJ6LjHkkfpYGgUXqDG7KtwJwraomfUzKSNpScNmSac9sh2sWbFvwh5fAYP7nyefnwW9",
  "key1": "2pTwNoLGNgAYGRKSCa51iUz6LuWi6vszpAPggXn3nBDtz9ZfGdzztpRzHJ9sBZo35jWHKiZJnZkjUCo2mJJZ6iAk",
  "key2": "44fQuFtxWiz37H7TPqZY91SCACEU8RSsGSGmDzMdksEHcYGR8Rw8QeCsArAmkBEcrrtwTdqfUtzkg58pv5oY45K7",
  "key3": "5j5V1Vn9fdyzE57VrAH2ZNrKAgGQoM6cz8CiGJf671N55RAs4KAH2XcJW8aHTyaRrRrVFhh8QMLn2nMKAk16pszh",
  "key4": "326VCHftgvuPLpFDAqoxUM5eifk9o6Ay7sKUNmgnjvTPnAaGczDWUUsUqzab3GuYNStgW2hKpeUfsJNj7JbXjaux",
  "key5": "2LRv7MB14DA58PW4ydN1pNB8DDn8mriYvnaEdARF1ABoTdTmGEWN6682XGqb4W8v8xqk7ADJ7zzBco1oMDkadptC",
  "key6": "3E1bRWrPbYNF3KvfnuypqhqW1iKjXonpuvFh69rKAavE34eymwxsod3SCPoMSykGkUeuf7ddL9Uq2zddjbUH67dh",
  "key7": "WytirFzCikTYNaT5agFMciJgSkgprGib3XUw9nZKbvWcTFmedP92FSU1bUFyAbdaH2sHS5uq3FKVCz86mJ4mYVY",
  "key8": "24SECEXLWPveHE8MsEA1J7wrXq29D6nd1UrDoCNSfcfSGsF9hpXzyFkRoGL197uvEKtisMWP8UXmyLuwpBq8Bk1s",
  "key9": "4i6EaR7dAxrGSPQa6aHmGKm9LJ6NamCHxJ3yvK8tXYScp2CnpXBMzynRQPzyGm6u6bhc1thauRiWUHkXQFKjk1QF",
  "key10": "5giXGm2UpPzb7P2xyTRXxLysxHjN2JRhjGcsk5mzteqwomguGoEURDq2zpz3NEDi58HmPNJKnyyyNMuzSpX7ne9S",
  "key11": "5ZYfuG19mtPeonG9EfgddTiQDt7GJQSC6oRib74KJFoPuTNSoR9yuE8ceVn74tLEwgji7rz8quUQYMd9ZvvMAF21",
  "key12": "35K7E7PUsDGrbnJM77SSDGHmU4VXEzGDFXKvrPoyi4k984qLZRKroSsZeybNRPPs1GtQpM9WsJ4ZY9nrJFQdzNNi",
  "key13": "4LWSgD3VHgVmWpTaiit2kg3yKieLLZj6s7JVHctRaSGibVXjbwMQinLQ63uJDzAEWm27RHdBKFZm8bNLHcqeyWtv",
  "key14": "4sptHmMdRjXnD9TkexrjGUEJGN5NbwMbjThudWDo4stpRxVocVbNzLXRKk5LKTiGVcfhmbqNigRchkyUnzyc8thJ",
  "key15": "2tz4P7mzVxZJmnX4xfbSDKbq1A8s3HhM6w7YUawH1BgtsBeTBpZbGBUenKJaexzTjVca4HsxrhDYvDv9QybxNsax",
  "key16": "4499wUNocoE3GLBBoMmwYVbMpjUzSwTWCmFH2o46ezGHNhWDLBYJTzJnX4wDXzTX7HF8d59K8s7x5ZfNtcDNGxx5",
  "key17": "2vbNy4NLG4rivMsik4xVA7cEE3q6Q1aJUtP482NLyZ1NC2fh7FsxDQcUgXcAe1iBJxYDYGDaRXdejVgN8oFdYgQy",
  "key18": "2A5KtNB7vebY9v7ePrzYnNkHfRUjHxDW6sD7uLgxrUGjbcd1QdfJgE9QLxXVuzfLtggjEvbQFMQqEPbw129owYvN",
  "key19": "53LW7TWzjEjumUhzHKLmdmpEVD5HY2PLRdvc5pkRN7PJAYYc95cbVjeZNWiNfvMEEsj577Vgq2hJ3Spz1nG5YWLo",
  "key20": "3GafkY3hu87r3EKXoa6aTbC1JestBqZ81FYVxiBHxzEibgVKBpWSP7uABVs1dRryQvEgPtPBdpfrZVj4KgrnSE4y",
  "key21": "iJckzT1csErPLCRZ63XMvhqKMeppryKm9nwf31V6jZcAvkJYsvYfbfkC1mCHzzHxYYxGnoMLPuGdrNsULiPxwfB",
  "key22": "3T9Vfbvq1jtDipQ4TqzqeCmJiMDPJrpJNZnBzn41DMybQvxEyNa1zZB2MPExzaFHxksdVrNRJQ6nwBCysEbERvv7",
  "key23": "4gAHCxBNFY6mc5cfak5YJeGYiNPtkV88XYbouqpBsyEnATSrkNf1pfyGpexXigQMCr7syPPY2kuEQTSdTkbWXTSE",
  "key24": "8oi5UNJ1P4kr4UvsApyg8f8AbG5HbziKEciDzn2VHcsHN6XoEqwZ1neyjWYKcUAuHG5VsvktJaFHV2CBQLi4Fvk",
  "key25": "4DyQzBa57MHNn2vgzCzw1RoMGkhA1esHws9ywuMnPLskk9nPqFjGGTPw2nQ11TSRqMCdv8MoW3Yd8NZa9wBLLFcR",
  "key26": "qnFCktpVD8YnYqWKW5pRS1ueNEfFa84opoACGdC2EJRvcJHbMsXaaVQ3hBtP9RmLtNJG6GkMnURwxe3Lstq8UqA",
  "key27": "2KFD2QgiFB4oPzsMvY2PzWkaHHvcnJsF2Qf7WYmELmd4ETWxmfnBH3nb28yteJokfhgXiRBcNwfogG3ZAur8AnoX",
  "key28": "5yiD6wikJp4cr9mc1xQG3KyiBnahLiLi9GAVFz4yyM5STVeTajdmCjjHczsY2RwJxP8Ao63MVYnKR5vDHtTH7MYm",
  "key29": "3pcr7iHuVkFKekJJwyfjyK8rGKs3a3bSSjFhuCVqNcmnR5gcMVaLJYpmBmrmXMXmakiePfr19eNrZquZtJQabxti",
  "key30": "5EbcDkbtBbG5be9TVsfZtutmeJue7v3pERNKZPTD4eogqDidh8mi55MZ59KGUy6b6UHDYGE73vtur8K7RwkaVUvn",
  "key31": "ceBwDcAM2UpozHwLDK7tNQ1qgDc1DfC13BkvityVEP75wwJcnnbp84BpqXwGaHYefCtw3CDtGJ3iNCWHjEdq6w4",
  "key32": "5Q4bLuyr3pZVJVt3BTW4miHYJbqwqu7ec8TUUSBT1QKJAhXqcztRLnYyJ7FnMtEVEymfzd8KtAGBHL2wsHPSskcQ",
  "key33": "5go9x4hcrF9vHqS1QLTV6e6XRcuAh6aTztUKkhCCjfP5Zj1MZKuGQAqKbEGsTnZ1xz8tXz8MgAU2xBYiaHiB5JBn",
  "key34": "3vC7mbE6Tsq9XJrZuuZsAbrAEGYgfDBj3DQ4dFkamLy4BCzkU1wKHD5t1ADnCYMAVbWNsmBfc2HMSLrS2bbAzE6y",
  "key35": "5g8HMesCHKvhV1cUy7yDavMfAtV9aH1wQ7wYJAzAJaFsjXtDvrKEnXa76zwM5DWkyqwwMtWTXQ7wf2988BwRPcP9",
  "key36": "Mm5pAJsDrAQmEyPBZvQM8SGChTHrDsjqADMA8AnyhGBLa11a172Q8tfpMBe3Rvz5n4GrTDeEko64PxmLUrgvXGd",
  "key37": "b9wrbQ4WZesmZfQaWESifZn9GXr8GwQiiKU8gEvoihLYtjhYj53A2p3KwDJkSkrB3oZ5tTDz8gmrWrnQmib12cx",
  "key38": "4cxbno4fZ8vs9kLL82cG8GL2dT46sc5FQbgSiKoWqYatkTQDTjHZkXEaeWH9emABZK4K79utYT1VQ6enjZBkVbCN"
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
