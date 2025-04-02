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
    "62FNgAUdmnhSFNNhUnxpwFrJmiRtYoq1KkHC4w2M7F1UHDpxQUcFkKXQmvoiagyfuosxbrEcBMv4iBv7epwAJScg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kP6dJzvbqtibs7Z9MgG74hZBcdFB7ZL3J77suz7E7ah7sVkFEfPmfeQjaQtxY8svSv8cFyN1ya7DjjD9xzn1geo",
  "key1": "2eiFuCaro6WFMgQNAnWA8sazyD8CqAcKm2qPaQQk4QupLxpsgDJVjjsMVvPY6nSbyBeFEFUCN57Zu9NSLBWtoMXb",
  "key2": "2GgNG6EtHALzbSD3JdPoSk3GgKspASC3M7RLCzqD1d3gzSu8jzkmiFjf79AB1tgQoTm1NAU9gqh4dT4oMGtRSyYx",
  "key3": "4dqMGbZt3RG1EKL2ndrvCQ3U98CJtjjpvzCjuAosd39enWe2qdiaG4Mz3LtqDNwMg5jfVwLveje2LHwpFYprAfBh",
  "key4": "Cp7A8H5LLNCYPXZWwbvEfZ2ub5zCvsMwra7sdYQJ2EhLNhqCyqTyxNq1a3DUeGck6g7Ffr3on9WAmTik6j639fS",
  "key5": "34UmSRzaqgcwX26sp8FgEEhsJtEH9SqbfnQiKw7pMTNe3DQPBrYcMSSMb6r6xUHvedEVeYPxhr1uZde1S76vJJCs",
  "key6": "4VuqcHCzzSarAQUz25Qdq51jSa8AymRWcjSsUdZrFApkiCtfi4dFUmqu7QqdEFUGDZTqrqkvjhSWwf24PmnGoAMo",
  "key7": "53Jzy15CMDJzYucCKuWwXep2ZRwXAExZZpg9VW4CYmKyHqjoBece2GPtree7tZcz1nYmoYKBQJjxWftWJaHkyBuV",
  "key8": "5Jf9mLuccJan3E1mnRPfVjSvMZkbuQx3ijzunzxPdndzGYj5bsfVGYkL4iR58vbYW9hNeN6dNHkr7Li8zzr1Rzmy",
  "key9": "2GebHz5Ehv7E7ZaApi7rtp2SPYLE6G5PXA5gRaK9iMGv5YQxjgWWyUbj48eTQtAs2kHxseQDfJ3pbZY5H7FmTSCX",
  "key10": "FNiwwE3EUuzWNDU7e5iYmZHBTYcHLhz2kNiexFsJx8e9fHjPupQrpUFwHsfuC2yVqTpRbJNPkNz2zECxu1iirkW",
  "key11": "3SAcfSkvQ3QnNeXTFqTRZ8XKAsMWd7mb5ueZrC7HBYPtc4Bb9dyPax84stHW3nnAPNfeY1meFUVVkCKrwnftJiBh",
  "key12": "96hQhrErdG3dFt4EtP3pvyJaFGcKunHH96mwxaM6CXR8xsLbcgYXKoafzEGnUpDCg6GKRgWJPyL4KUML1YKRf9o",
  "key13": "8yVV29BSDQjSvsxrUKEvtTj5oZNxrzA3VkyQEfEx8QubRLN3SZTWZzW4wxhsMqAanzUgRuqJPciLLRAwmtvViJ8",
  "key14": "4dwuHDpgMAWpitqruGLykYpaPq9cn1nMYHAShmN1sNJXkMLpShm5YY6VKgArNZcKLm7hsbzGyexFLoQZ3amFeRh7",
  "key15": "52B1vfdMuqUPFt9pgWRufWtA8QwoV1HhGSJfJ7mqX1pSo7M6hHUwy8rmGsFUcZR1cy4gggMPsv1DqMXjV8bWU5SD",
  "key16": "ruurtyL34JBE2pP8W6weRmi1Bozaqq3kPMCffhN2AEWLvK8zMTSwFVG1N9pYcFP6DxyMByefE76QvhmCmFcg9YC",
  "key17": "3QeF48rLsthWRhfr85A5J8nw5rg4ULvJwi6Xy47SE98BWWLs74v3tjVd1k8FHYJxApZY1zR9QPX7wwnYboU2QzBc",
  "key18": "2SBx989j1JhrbCjXNstVRxQEQXkt5bryxewZUTryp2exEXi9Ro7omLwfnoNmuEcsyLVXHxfYitr4hH2AX9HYMBN9",
  "key19": "2QfaQ1PMAe9nPsBFu4jt7xDPKCXFyP3coU6o7yTvSw4WJBWELfRvEN7EqA6vu8PVQD5ebi6jjRixbcYQGGowRJam",
  "key20": "5dzaPynDcsQuqEGfKMqLDNRaLy5QfN5gLDnQxv2J86JTXHgEPgG6k6fzTd8BzghsYpTDDD9dusuTbBXWS6Erux2T",
  "key21": "24ezsLS8MphUm1mVYuLHEdxEsJH1HzVMJn7LTHxjN8zSpAwDBdPSV7Lq94guZz5xcfjDBP3xHwDxiX3P6WVy6yLc",
  "key22": "2wpFHQVMtWkupcMufhvb56bWrAqPxdESHt8ZgWJJVBaMDGwwiy5xACPLP1mtXkj8hawfn8Vg4CuD9n61pnikD1V3",
  "key23": "5PhTuhNgknxgXVwf7JLfptdMvF27p6VaYThKWzj42MAQHjaLLKxiDENHdvSSqyDFMDwaiFYkPZwWcYGWnAfNSBL3",
  "key24": "2Qgr83fAHarxmzMRDtmiNAYbS7MZnHHWWWkyZ3QkzmGtaBNCoN1gDb5eNd1THohbmGeP4BasUk8hyocgRTEHzwvm",
  "key25": "JW9C1kokzWpuwPdoWuv3onfyGfrCBAgXN5paVdMreNCGBinXjZ3Jtk6NiAc4yPv6Uk14L1FRJr4B7c4CVyT5DQ2",
  "key26": "3UuU8WTKLyEGnmARRhAfVoANbhkz58NCXyo9q8urGpakmoFn8FKDEorNMKz8ZHkjYLsLpU1G1noH6XpsisApyXdy",
  "key27": "H4t92MgSM1gVaqpnBboXUNjFT3LobZgNZvVwSKDjEswYc4bvt3dYZy8yAJ47Mjh8ofVuxK74bF58zYbsCJYgi9o",
  "key28": "5JVXRAZitHxmzWGRyY91tSMMdJTqoSrM9ByryBAeKz2EX6ACXf5htpV87aryAKw6UDGs7Zx6ZHAFLc6nzJgDDsjR",
  "key29": "28Z7YWnUMpdXHjdhNtXTUPKFKSxFxpmDGcjQoadDjrJzxdYZYzLepE33Yn3vhGn7vwYEGM6yrqRNUMzyCBBh9umd",
  "key30": "4fF9ZNJarDc6EcvhCrfaJchkXW9HaWdVuZAcJSQwANaDFEbsgNTTQYsenPCFYpkgRbc7FHPqEfgjKBrx824NMCYN",
  "key31": "5ord6JT8PRR5jhkmhkzCokwQ2X3VAYkGcv5NuhpCvYiX4fqvP7CGswSPgPLgJno83U9V4JqfeQYhQoQhwYvmrtE9",
  "key32": "aYrTzjR6dabyAwiafnG1XQ7G5xPJ3bEc1BTDQkjcwPehTmh9vfDCN4ZofyAvJdK1Lp5G5Qv1wnfMgpEiHaPMqmG",
  "key33": "21CdW4Yp5SFbKXgADpjQdMyCrfk6FWEdfLLc5xx8WBpAA13dH1V4m5D8cZ6dM8w1KHYEw8JLPjAF7bUC5JSHwcAG",
  "key34": "8zkcN1ktxwGDWBRWPYM1gdLPRtt89kNNyabLQ78xBag8Lr72haqXYo3FpCZ2GASBme5wDozMkbqEpqqqK2ad4KS"
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
