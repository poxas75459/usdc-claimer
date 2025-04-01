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
    "tMkFp7Gn21qe8JsxJenDsemJtwaGrH9URonwcyGtdn6RSVsU3mhzenJPePhxjZ9qTtAMDxxDYwcqAxGsfeSwvDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34e4wrEzzXexPGWwhUKySbqabdwyGtdD96soHopSreCyPpt8qnZxk2pocvG2b3wGd1C1fvGD3wq3MwsG1otUjoi8",
  "key1": "4d5DTTxgYCk4EFPQgq1Kq8X8mJUhkQbbXd5APKiaETzWwVNaw2EL23NRryAAejbcoqjzzBA11JDEGN2ixjfC8rnA",
  "key2": "3EDcqNKiRRArSL3bsGpxyjX1CpUumU1nkJaiGodZcrCar5pWxBD47cBMiPfbMSPJojkUAvtMPA43d29Aza9PYTbZ",
  "key3": "239j5H249RXvJTynDE2qUzGws8jxpK7Cb4ijqL6P1yteLbVfpf5c7Txbm8MHi97WcvcLnbQXKLuKCL7qPCKkrUbY",
  "key4": "2s2Asjztxi8NHoMB673c6JZzWM1WffY4JBz8NnNbvh3V1y7Ey7c5Prv1YDejvtPBatkJ5ZWCNKKnmFc5DgHkZra3",
  "key5": "3mxbX2SciBirJd7VuWmUFpuK6Sqhats3wmkeQv7SZxbB9K9BWMtD1Gasy3G18mCEicudJR3DXrA7iKk3w8yqhkLC",
  "key6": "3WDwwRr7FKjJtTtGew3BFxkYgkZUsiEjR2PRh3N9EA9gnNf8KJe4b923mmWx9KV451srhVaSoU29vnVb3pePaiU5",
  "key7": "2yPgBGaq7oVv91AyiBLDNmnUCXF4fTUZZMQHsgLP7ZY93NLptKciYuC6NUcfj1g8HGpRYPhGCQdgsTiAXSaX6Lqd",
  "key8": "4DgmFDrNtP3g71oUutpyWhwCUszhcPRxk6H7GAKRdm7dCqE7DTULDmrfUT8b2mhhyUdTq3ahHoUqfLqquCKDCwYJ",
  "key9": "2pLGLEw4FS1WBKGmRC2EwaC7oLc4Dtw8ftEkoWcCvZsmg8Y7JKHsJXqQt63ja6YiYDdYTsXYXVFan5gkEMiRuhk8",
  "key10": "3sRg22kghbK3YQwxinjWUMZEPQ11d4CFuMjFWSMixniSzNwidjihoriGR4doGMoSikJDW1hHQBbXEWFZ8fq1rTtJ",
  "key11": "2VkBqY5zxS8ccVVc8Sp19ub5e36sjyTET6UZwQ7MpwQJAqCiFFt9YMY1LPXyucv4EM8mtMdG5hDUSGBJ8X9K2fUy",
  "key12": "wirse7nYTCHTzP8pzw2mtVWjoUn1ikF3f9FUVevLU21hTLFLTXEwXMpVWFCeVydzqaCn8SFxrZYoGms4do5pUG6",
  "key13": "43p1rx5zxWT2rZza5TWyccSKfy5wmSR44ZXHY3hEnSjyUAQYDc7TCthNacCFGTgUZn6fNSWrk2ie6C7p5kNbppr9",
  "key14": "3qn5HYN1zhQ7jFmdvpWGK6deyn8fyNgGVdBnxwVi8LhhYk77rmjSq9UH2g8nXfSosQffLf3765amsieTGghjT9z6",
  "key15": "22Sy8wQX3qmVmEaiubevVEAubiVz4DrFM6XXBAMfg6Jve8yW43fjzhE9vMQh7uaRzqoUN9x2Hf9Uvg6N3VHwaEup",
  "key16": "38k8GftCaAU7FaoWdJEjCUvE9zgKvGsYWA2bZzUGrG5ehNyb17DSUZyyPcUQowZf3auvxJNSs5RMekHJBtHyDWFt",
  "key17": "2wVBKvdXsFaRK59M6Fr3yasT7XM3oXsFPr4MQs5EXvV9wmnJ4YVQcTYFg5Kh1L7PrxM7ZS2rGxo2DNj2MvzKzMjA",
  "key18": "3zK9j99fiHv4otxVZHb8sTByxNkxeTT1Kn7vsZ2rFBxboMtVrYAYdYHqHhG4bc1AaBsWbNX2TuyeeQsQErFDkGww",
  "key19": "5zadva7UzUyGNaJ4p9b8YZrnbpBbJvh132miDRsNspJMUNhVKRq6mNoHPX4LWzvXcebjueTEbvDP1cyir9jaTbbE",
  "key20": "3VppXvPrGKsfimFzVGEwUR6aKLCKhHJHQB9nNoS4PKN3cZ6qv9YY7TqbWDBRfGYXTrmmWdYrw8A48Z2gTAzupY9Y",
  "key21": "4odDQHraWqZnHvdScE6LZjT6D6CLNh252ENovT2qSCRBNibLsp2ZLnbJ5RY3T7NcjandyM2L3D1Rpq4ARZB9Hp8R",
  "key22": "3FvGYGpYy7XW8QSXR9C6Vwabd6mipgKE91bvVMS7Foqv93SjHca6m1sBzUFncoJ1ZmHM2iqen3AU7BNeybyvrrTm",
  "key23": "35UbSp43TJhUdqk5bELgTN771A7RWKcxZRBKo5mngyhJ5D8R9KFJbKUKNhduL3c7JyGQ271BYgCYvsvhgEPFzawG",
  "key24": "ERi5C7riLLgcfRTEWWhNbRNou5J6dNWjRXNLfJN6M67xSWgMTAcDLCdwEKBau4Y6tqPkBNwbUs9vuvaLyXHA2Fm",
  "key25": "arxGdNLpbpnEFLBKNqe3kzzYPYvtPSXF7WVBoE8avGrTWrJvKEv8TVkPq6zpqhefYx3HyFHJU4hFkhNscTNcUnw",
  "key26": "do8114bATXNY2k5NRuUJxNvAYE7B4XjdjceGAk5HHJuoa3EfuwYcipCurXjsvTez6APtJPR7DsqXHPxdvQaDQpu",
  "key27": "5Leu6ZqBq7fNV3y4oG4FZnQ64LXJKgHkZge2BEFS53AxeeyQZqzBm5LAUuLMcYNwYqEZADXfureZRBnN1WvDDMCp",
  "key28": "413XWdrjsQzirWJpg8Bg8h9QTgmwUhZuYvEX57eFpqpYcsKqdtwLH4W7WBgwn5bD1wfn9UCEYxBf2jG2nMCFnKCk",
  "key29": "pULEkcJfuQ9Wcm8gAvnGR56UgdnpfVjT6YJ1EGH7bSCQKf41tCZfRy5TzwYvtn1DvrmBciX396NrJw6stgKS7kB",
  "key30": "5ZVjtfEZMXpWmKXSeov7VGYQcSPK6MXKtm9zxHUbWrixqaWhAkTFsoQi39nr51vDhvaoXXRUb1EEpm6b8ieGuxsu",
  "key31": "5WfWcnUCynA2dpkupG7YJJr5bd177VUnJFsYq4HwVgZTb2zwMtitJht2XjEvtTYCxJrgvQ8n6xV3BAotPyRS6SjM",
  "key32": "5As6joQnFFBjkkrkr1FBB4sGToyE7889pdLfRxGYgFr7rYtWgQi4EpG2MHpUqiScxrdwNx7Cxdi2Lt4z7Sr3gw5u",
  "key33": "2ec1u9oLi5TN18qZVmKBmAstnvhiG6oX1vypxnFtuoN5PPRGTMvatXHuKRcY9nMcG8co9RHywCxj7KURGg2HUjvZ",
  "key34": "8ovrHfRc31HAndkHon5DNbveyhkEHXHAqCJgXVwxzYt1kxNa27aHRZJw1DGiscq1sgXuVsuSCUJST8H1616rDhw",
  "key35": "xbyJRKgVAVKTGPWeLchWPP7BwUDJHgWWzyeQSTZ2w9LmBsodmzvdpUCr8XtVXMcNgUHtw7btw4a3bnKnSsLUDFz",
  "key36": "3APNGXbCL4YbhVazeinroSmW1FJzhass4LzKEYuKxBfeLkRYkCYEKw8AFPjgNgq8FLJmi9eExaHPGB5v2yDRicXu",
  "key37": "4JkanHbnP3UFNrwEwEQ5mF37joRAvGMAbGM4gsTqkQBuEjCPxHVso1VARczuzsjkXVBjBSaWums88gHnSRX33cUQ",
  "key38": "owmCStEnzhNrR4SnU7YnxLcMxq2pNexSBgTVPKM5dtopPh3mVN2yhdKa8vGnwMc1R47jzAZz5BBr8gyCQoBofgk"
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
