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
    "674AagZ4NKET1zyo8EYfQu4SUGbJHSmaHfMi1J5wq1hGwxu8hbVXiWdUYBGQmHdarchEBYkbQ3QiUeUZ76scHZu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mSYt997rLmZfTFg9TPc823aRAwX7ednR7VXUDFT6ETN2QQZaxJNoea1CPbENzLBKUhVFQfUgmDi833uHeSYY3Ph",
  "key1": "rVsBRewmhzcyEHU7v5nZz9qpDR5y761ecEqRPhq9f2qvKsz3exBVZsWTMY6sXRhkpJchq9B99Qe4C7mMGkZ4QYF",
  "key2": "3W6yxS91WFMPXUNwfcNHbuXkWqiQQ1TPo8sDkAjuMoFQ7mQkEeq7i3nt4QP2nZTAuZi5qUytpzgB1L1JahTBRkY2",
  "key3": "3EfiPNvJRmeC6zwpzm5AdwUCaQ519odGYc85KSNryCp1AaMrWR9BjeyqRgKa3zFq2GqvJsFQZLPPWrVpcMudkSNv",
  "key4": "Z6RfXZKo3RqU4PAh7dbBDLSNmFxxbG3N7tkhDhc3ejEKDkNYtzqyNH6y7FsR2F6FPUWxGkpcm8LsrWwYiuC76QT",
  "key5": "2xQ2Wsua6fP8bLftdbcVdconuxeh8ymZ2bhJQcWGEybqSFpwA2jioCGtWXYx3XffgiUWCjd8iUAzG1awkqssnmKd",
  "key6": "2AuLHqTbJwTk14Y3qp6UGy5fbCjMKv5h7PD78e9scG4NZLyRes7bkPL1bRt1GgMXnCk1M55nsUvedLEihF4GfAFj",
  "key7": "223xDHeqHbEaAwX3KpwLnabPukXxkMFS5qpir93g3LAjA1KkTJYKfFMFMqcLs8JMdYceyCFfdxmaGM5Wo26mUMQS",
  "key8": "434Jy7N8UUMmQ7FEKZGFxpz1u2KSuSnp9ZMY7x9Ehb9Baxo5Y8WEUZEREbkAC7t1aBnL61b8DX92T7KbPh3HUvFY",
  "key9": "2LyZu3xeuJzzFeGoF614txdum6mD2vvBSS469WnfdE47G9VhdxrYx2ok3iykgoL5EGs6LQQRCrvaEg9DA3jRrrsR",
  "key10": "4oVerGPj1pySq1FCTyg6ZGfoBekKajWfcbpLYVebmnrAqWSMWxCZPuyn6bBWb2BMox25KmGMoWVUFWeuv4n3bSuc",
  "key11": "XgGNYKHyJw59TR8cRJzEnkXjoVycsDP8fD8N6HgdzNr5iDS5cJAm1ssZsY2HDD6RkvApxrGXU1q26XpxQPEC5Eo",
  "key12": "5GTyxdbF7vhABgJuvwQfVsBiHTp2URaCXQcFPkG23XdBnnkZJbeFWqWmWkrJe2CNUC5fDqXW4fE42X3ReJcYak22",
  "key13": "A7b4npD7kEzUDkC1bKYHpZyX591ZGHJZ1z8GT6pmLHixHBeBe9hNGvVGYnJDadqoohDmbusMweDnmcrNLSV1sVu",
  "key14": "tUBjE3V6QiqVazSsGV13VqHHupBjuiizZ5J6iVrFSr8XDnMhyVnkWu7nGNsMQfqqvjvxzVpZLhp7LsJR93qVjPj",
  "key15": "4F2XsectfrHAhxBLZyGpGH4t2NdXao5b1ShTy7QtLX65cFSHXxA3kizqP8ptFFTJnYu5RUWcdh1BRwt2Sfv12Di",
  "key16": "2MEEzHwyaR6DANtBdTvcmZBEt2TG2sr15NECwwXafgqfSaRokMDB5i2Tw5s9E7RzGHK89DpGCLqqRh7GXi5nXV1Z",
  "key17": "aF7Xw1XibMMTc9p5F5MTfoFyonfoU7uLufmPWrP1oLTLnoPsbL51qPDks2J3hXKbbnfmheuE5xWxp9oqqHFfZnV",
  "key18": "2rRYopBHFG1zonr89gBBEHzCbrQ8JLuv42SN8AuxVjiQLMb4SChBM7YqsqYDB5MmpUxheRxD5d5FBKs6vB9shRhv",
  "key19": "6ZEswBqMfyq6u3RgDntZWZGbkfq8kvSM54NVz5JTrK57XSpUgM4ULRD6TF3FwSNpxNnrgvBtRtgQ2nwyWaxEkx8",
  "key20": "5QadZTN9QCTTQ8DzUg8ERyGkyJAt92c9pUZghAqEHCaVhpU3zttEGvAwvFCAsS9WeVpCQvsUBVUGBQCzBtWf1W3z",
  "key21": "4NUtk2D4HZL7oM5BWx2bkvhWmYwCEMV48Sdn9opT7H6YWhemLhnec58y51V4zT9p6oPCTdXfJHPoJ1USBRB8qAYa",
  "key22": "57sdSbskq4MCqyZyZkd6gRHorFQ6sdAT19nBCYyZrMrMBodQyizHCm7kncHeqPdh4Jy9empy6Z6xQYiCMNAxRCLF",
  "key23": "47fSE2kYf4TRLoUzeDtqUTwXzkDCp3jgfuxy1gxp4GDUkSe3c9ub4HWxdUZexcMJreAPhY4SptuGVxjJzZGASC4J",
  "key24": "5XGDUZw8HdFn4cxddC5vXNVVYvGhJYWnQTti2aKmCSyG6uAuCSRp3S1DH6WjsS35JUHX2ZbFqkoNpQDkZe9uC38x",
  "key25": "2XH1SyxihQ8a9YKAaoCPRtQS1nnxP3sHcJBRnMw8cwsYpNxb2of3pfMDgcvuegn9WyKUo1DLPEjUyL6XB62oNvJJ",
  "key26": "3q3vCVjiHZtqGBUzt7f9cWJKNmukJFLD5LFsg9LXbViiJ3bQp5sx18urqguPC8tyuV7jERWMo158kNHDGwQanJZy",
  "key27": "5AieEgncUmd6QfigQqLC4XKw8XrwTqNEayEmQ4k84Uy6i7YNi3JiwUDBDuS9Cc5KyAWgzpezgtMawG35Mcv1C3au",
  "key28": "4rtZReUtZBZi3FeTUjWzjFvnbo7KCAFgKofmPrAB2cYy3kVUfUcfQk1t4C7MvQpXSnyVdQCKNk7rmcJuE5Zg8Lt7",
  "key29": "vUBZaBAGzrhukbV5jpvM3r59nWd3DCaWPg78nBzJzcXPEfZQfYCkjcADon9koacy9GHtj14u13dEm5SomM8QSdx",
  "key30": "5GDRUDaVBj8ofCsokmhJF336ruQm9w4NV6DFUpw9pj6EJnEoMcBXwvEwFUYwyVrSc6847Ya6rNQsUPMoYvyydAAX",
  "key31": "2or5UKd6rDcGsAB2y7qJFPMkBedPCMLzje7rXRpHGTN7UiaohGn5SRAxSrac3oPBCNyLXNpc7zGV5Jr1Ud1iaEp7",
  "key32": "5cSefiFy3BLTUqZCdZy4HVMCo7bD2vRe3u5L76WN97U2f4TzDWLpS7uaAu2FTSoqpE2wC6Muik4YT1qbRN3RKSBp",
  "key33": "3NtsCrwmdFhwRomAaHqbhDGSyJhk4JcwMaXmRZqviQRCgDEGfm551EsejqHHJMwcQeuKzC33Pvk7Br2vmGpeTRXx",
  "key34": "5j6BoU4Bq7FxH8puJwrpW1rmXeZtfrG6g874ycadY9Cq6EPj7un5NTBBoXrtRYjkhuPBMAFSvFVmGxqUvxrnJLdZ",
  "key35": "2pb2pmFv8376ZRRLBuERkg63Y9aSTMdBgTN625ayPcn91yoAheSeszzAW32fDjQmSJMs4gtAD5MHpTY4yrCp98Fj",
  "key36": "Hmmea9YxzxwT2NW6HGqrRhrV8VFEt5AwPjKutFA1HFaji3Fp9U2CLge6mPFDoctf5ARMqbNGGcsPaUAc75mpddo",
  "key37": "5QsKS2Vuq2oxuG5GySchtiNKAdBdY6NR3zJQcpEW8ym5BLuYa75kgjqPRDxiZm7izXBPUcWFyKiNTNZDBEhLBERK",
  "key38": "VuM9H8Uqdnjk2SaVfLVXkKcCvNPAbMC1sVSHQUKasAtxGby25Zm4vMX1ftYT3JyhBMqDXmZcX1CXzbCkKdrHE7A",
  "key39": "2CLdPy6w3DCrBS4WGmk1hLmALSyGbzFLLao5r1gCFMHoakzqC6E47sXxSJcaxGidPQP71R6zo5BUhiPNn4ukWh7Y",
  "key40": "4jtYYApDMUMQ5ET55LJmmA2TJzeBfyHxuxZ417xo2rGvb96vuSVkLwHwyrhT4GzW3gAqHTh7teyRFw7PRsxDMLo3",
  "key41": "5Ecmra2TSjJJEAqmip7PDKMK6bGq165mbwDfB4Qg38hpoSCmNUeSuaWRYv8tHzfgfvK1aV2KVQbEbeDLHDN7kFKi",
  "key42": "22KUztfZrw9Sfm9gZquX59x6vw9KqpVsueZJ7bg6zTnGnksd58wppVxfDXnHP7J1H5fGeQEfgs5bciXyP5HpJ4Zv",
  "key43": "2HmbgoTwWd7wGdLfrAhGjJ2VVBnmudHNCQrTcUFmwVur2uhRn6fD3k9usT2D3WqBsmvTm5qRhofHa5LD526veU3x"
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
