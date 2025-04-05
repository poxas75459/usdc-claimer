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
    "4VtWyW5wGENEhvZTSeqdhLr5BpbDmx8mKbAoSYRS4qP27f69oGTv1UqLDaRCACjT7jYjvskH7kd8S3p3wLyFxqyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46j9Ego2zCGL78ueSX8zBH9g7DPbMxHXXi5WrbuwXNm88ikQaXLEavyMPk7EGZJ7g5fESHE2meewB528LRNo3W1p",
  "key1": "5KoyJVHjbDHmPXpVBUWjmGkW8rL7ZokFxFhrbfY5K78Y2XYYtWoMFbu23yeYLerJkHhQjtqULvSGu4MMHxCFAM8L",
  "key2": "2N2snyeiVT1zvwB7FphLFKwMMvCdWyHabxNZ6kvKmr4zBGMKwDSiuByQ2TkCzSBYVnoUu6QEMxBnedTRp1GrUMay",
  "key3": "mBwvgnpSTYUUnKtpoJgda6kdMF1r9vAT3CoyKUKunmxwfYioBkoBdLyXbMEuUjyFaXh4h6XJJ3HaRSnmHWUbRK2",
  "key4": "4FRnDnZE2zhCnFWjSgFrALPC3HXCGdWdRJWVS8SPjG689DQjxNWn5QUmgUDqkBp1hdSyChBXh7FPdcGxdjhsVsji",
  "key5": "vFjQXQsbjS6UuJPKpeNr2SCCowD27sX8xJW6XajrtHsBzokwWZhW1DbFQJt8SnRZMBuxHnDsA2eSHFV5AG9r3Tm",
  "key6": "2iLhMDHVN8DoDHdSHmrr9D9FnHBYjVd6yYUFsz7st6dq6PyJenJN7RaLhhS8cGc1tEGx2uby48aq8T2tr5t1c2cE",
  "key7": "2on7m6ksG8ZRSGafwsM11nCtRwvEBgKsp2Z1qzPqputdcgo8iTPZ2k4QPHiMiUbZqncH69Da5mSXGqoWnMWSQjt2",
  "key8": "24LZsKSB4ecUp8oFbztVmMRcvEZMSL8toHLdAunDaPKEFKFEmZEEAhuPLgeGvHnUPYxnnYzKEtadssGNxGHPYfWC",
  "key9": "23H9FxKZqSeHAryzV89z6jJKwxXNjjaRALXXTzn85WxZpZj86pv8cmRk374fDDQV5UFQF263oewU1v8bnjnTn1pv",
  "key10": "57TCAyzU7jEmpiAnnBZn4CV2eq5PgjqRVm4ENSjuKnSLs6fGfGLfhWL8nzdhKb8kurkXNUGUbeSwehkSp5B9WX9W",
  "key11": "Fa66weFTQfEKHvFy23M9fWTFU9Mw3VdopzskqTTapnKRMqKuN2WPCqsBsWQp9deXCiSanenJZ63dmaYCGNS9pcf",
  "key12": "3feVSSVkBACSroAaPnhmFeViA787b5LGFiknFDi6nJkT7g3RWM3AYd3h7XQ9iC1n4z2ZNDzQ4k6AzNCV3kTTyjzf",
  "key13": "2hKZiLrTTRHKuydNW6Q8dzS14sAn7giSSuVKRcHQQnCyyMcwMsbridam5zm4DBi53fz8QpwxaU3aqV2tnTJ4znB5",
  "key14": "2ehMgPbVqQzjUUxaJBQgFTsi7L8AKSg5JWjz6Fvs2kWkgWGfvjTfkadsHSQV8iPdsFuFvgv7XuAersCWb3ZYvzWD",
  "key15": "9zdc2FuVFbV9hkJK4LiYaaa1i8RjTC396iRiNr1kYnmbjfN2wVvwoiPFLZeGnBVeuR5khffBFR1amgsFjAszjFN",
  "key16": "4ZtEUmFGVzKrviC6krHznXPjFmWJGywPRfwdHkeGHBZMpkiJCtfdiFnXr8CHyWQUjuNS6YxA3Y4BDwLKathwkjzH",
  "key17": "3XNo9ANR6stcoHgub4TzJj77MhCtwXnmtgKqSjAsBDWBtvtHBHBABUBormm1RvpgKwL8wjBjtp1xqpitxchJqYxQ",
  "key18": "K23fWzTXTpqtX3AcN6xepiQWmhYV3qptgeFZ69xCivZvKKobv2CNemPTUyRwKfL8GeBuE2vvE95XpPnjmRV81d6",
  "key19": "3NQJRrWHhkbKgG2LWW1M1YakupzuaEw1SwYSxjNURFBPmus8P9wK3fmcfhNErUVtSveGW3PxQ3AcPNA4mDpsCMcK",
  "key20": "2YhMa2BBUwwmFW8ZTXwYDokXhMLXogGanteikqGtofoTFTRxherHzJMEhQF5mb6b8KjXkGKDBsyF6Znv2AgbvtJU",
  "key21": "3yyQYLpAj7jPTJZa4XE6MM4cpHhe3yBrHD5FHgoSrgBCaZmz6bPqNi3vQDz2waCfpCPW7QLXAAp7Dae2D4Sg8Prf",
  "key22": "4UkpcyCza2KvqjL2jheUz8JVmcQswSqmiqRy8xB6aA2mVFHfFJXbRYrUHcqmksC7wBgCU79uMKwFy9ckExbq3PWV",
  "key23": "B2f2qTSaKQZW25xjNJwGzGnEAu1MVVoJGLPRnwGJ5TPyw2W9ufVctQQzSYMm8LUJnzvj3V4VzwBNByvNfMV7jAs",
  "key24": "3QE1kcDa7GH6E7XYGwP7Gq7R5V1Q741tKPjrnWqwz1t98qjihi8RbJS3A3KyJTQVyYLZEVdJrL2foMhQzRPxfGBe",
  "key25": "2kLPzmCfAVE2LZQgddZH6cfBVknZ2tW8JsJLbp4eMpB22BxCoYMcoRdh8kmsW7hXrPHgVTUvRfLG9g6B2SYWEt4",
  "key26": "utuYcmR7ZM19qyYABBpZ6WzNafMSZLWmzRE3ui1vTE63GLZd31D7WEg3uNRNhiiAg3mWMnPrCUxqqJ4Z7ZFY3Kq",
  "key27": "5haTDYB84eN5tXHQNAJxHJMkzskpPiSWoUx9WgW4rULLCjRRPJs6ZjF1srRrwDzgfbigAKa3yrMt7X5wMAmysWpj",
  "key28": "3mASaVhpehcQ9h5QCw2c8BP3oD6W7UUZ5eNAN2ShW4pUgNDqoANzYRKa5uBBB6kYLtKnRX6XpsfiK9V5p2XG7Yrc",
  "key29": "59KYkhXqrypZXteGisDZEGvjUQzaSRJfy2MJyogVwGeBDxzsfajDS1h1eBCzRAKDzTd1B3N5G4dJDZq5ePWj9EQf",
  "key30": "577nwkGZ1jAsJMgj9tPTbNSPJtY9iHm6JBiuvbEsfQkLbicTSqNnVbuKFZdzZZZw6KfWcns98HiyRHbgqPZmyUEz",
  "key31": "3MRTs9ZNzbYbjVwQWPQJgJiSb3CubMDk5Nw9eunUENKG9ntn7pf2oBRefj4VedMrB4Q7Js7MWh6TpocVzgpjMuZ",
  "key32": "3ASdGMyd1qwrLGDzfjidoPLtCwVWhfo1T7ZAoXPVBrp4v2zB9B7SdqvFMNs1ZaGSgtDSGidEcy7XZX9gbDLnmfok",
  "key33": "3Aom3YAAvmrvP9jQKqeckECFVjsWLXBCVhqLD7T3HofpjFD739ALUMHUheJjnyT3tME1G9ntiF3CJhEMbraB8j8A",
  "key34": "2LZZYFE63CiBUqZX33VtYnXWVRQM6hqWnWwYe6D7KEjdXWDvMsFLwTqxkK13FyxzNPJVtPXqQnS3iSMgGAhgD1AX",
  "key35": "6pC635hHYTMi22LKQvXVwEcS62MFYmXQkpg8tB2qNm6kLZPZMimVjwzEQFKjciWL1n5xR9J1J5p5VN614c7R8YU",
  "key36": "22mCCZbBP2GY3jMi4EDLSk4zbhD6ePNpApBwkrhrL5WcGx9TxkPu9GqY1yRuEAeSdZMbCyVWJRxY3iGbcT6skx8G",
  "key37": "4LGhDDtRAXV3iqYmD6dYxwn67zkXwcTSZQxC9MLbnApBzErTfbTtDT7zBPARtwKZGaaW8mVWKf19cMVJ74RR7GXa",
  "key38": "5CMn8UQpnYzTjcdPam9nwSVQaU3ghf9GnZa8RyVeAqrWwznwncezaXHWmHqnGzuU3Zzxk62aQE94r7iS1d93jj2Q",
  "key39": "3rUXiRTXAHg5YSNfFHK6FsSKuX9Dy2JFSj9QfPaZputZbNgMwGF7sf9dqfQsyiLnq8UTqqfjX7GftTcRBKw4NXLj",
  "key40": "3qnGQRxCWYDvqyVgtepGGoH1i9BqsvGdNJSWbnb8HKpggnrWRmwSQng5FLP5zwg2ra4CwVFcaVsGUypwPByZbiaS",
  "key41": "6KXyjgzR3nRLueijHMeJQPvHRVgtns6ZQtqXGxqWZzbmxTZULLjTAdNjhyFBHztM8xRwuDAb5DDPiFRxFs4GEbg",
  "key42": "3RTAFcBobmd8nouX83VWVjDvL4McF9NaB2f6ZEaKKFZ4xHbbdbN2i6kpQwByNyNEE3pCCSugFyUQfbDwVTp7kTeb",
  "key43": "5hpMAaagkETwWzWf1oqytAjCHn1SRN12kixpSEy3xuXV6FTBGLREj6hdvX8wiovG7iWsJiTvVLffjweQz8xtqvLu"
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
