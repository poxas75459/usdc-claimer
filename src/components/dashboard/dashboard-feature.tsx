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
    "4iGtP4dDXDmo1irP4D5oY5ATua4dWjk36Lmtevh6ZTzKdL8iAb91CziFJ7uVdba5323Y4tkmePD2SEyEr6xSpDbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nJTgTmdyqZBpgAnb3Qd9j1NBPdUaZR3vC7P652zcS9du7yUzmZdvN5PbNkra1vABZr7oqW3MMwpAV23ipXQ8z2e",
  "key1": "23MstLjm2qzTksY46JG285yMSvsTygSXuDs2uZPizh962zkSNcAyizUgSK1YRJUTHgg5NehJLXoYcK4scfABxYm1",
  "key2": "3tdrv5zy8dxo3PhZ4CQ1BC97yTPyNWc3ndxvgf66xWdb49Jm6ERkaozgiixL9iPW7CG2G44e65HwTYhiQPVyietB",
  "key3": "5srwxPJexMG234U2absaAWc8o73efzFXSKkteDGYRf2Wsosf6uszbh8DvFo1obLinFJCep2mRHyHtfin67MB1ydU",
  "key4": "MrdP5qFGZ78VvPixxoX1NPps37ahuH1XVXGYBUKTCWd3qtiYYK7hqZRXSXDpD8ZAvjGcBtVbghfCfyXTDn3XnAq",
  "key5": "WdskX11ccEjmtwmsk7oJm5X4xdLBBuZDVvL8BSefgFify5HcbABibXhxFATUQpaWhtUH7EtWG5cP8LWotifMpAv",
  "key6": "5rz8YHvPyqtT2cps2s5Mjsj8R6vsMxBkjhAx2d8yaM3srAC5Zj44hu7bENaaMwQqvG8yiGVHBQqh4WLhbJQKvtJB",
  "key7": "2opGajSEYvqCpEmfge7rHUt8nNAwdPyRifRL7s6WQPJRNLQjfWPWz8HgyPxUKiWT2ZDqmu8XWsjDv2F6PQvjDRMY",
  "key8": "2qFZXCGMExUkGqdu1ZTBBrjpCLxk7gNgAF244dD4uE8RSYLnxRQPYm6UhDpJ9L6RGv7Z6wtCHNnEVjvnfg6PDhiu",
  "key9": "4JywVr9Q1LENzC77kmzzpnawAYREXaej6zKzGvj53k1E9RZokDeNfhMGwqwzyAdvfmTdC9YvZ49zEm1eNuARP1Bh",
  "key10": "4AopFGjaPJxgH8vTwKmXoeW8uysq3b75QuqvuDmo9yoBjiQNFY4M5mouUG8ZvwjRyvRcSc9dgAq6QuyQK12WAMaD",
  "key11": "hS8NiunhAuHMsQqV9qh1VuRS1f1ZcwRVaWpK17ZxXAHCbeQEuSQUGSobJ6ev38nVz6uPiGyVAZC4jab6XNwJAZF",
  "key12": "5cnPQ5GyucP9K3yhGaY2yjToLn2XERpN49KPG3d3oqc4L1qm4aCmsrLP2Xz1985r9DCacE7LXzcnjWQYJkJ12eD3",
  "key13": "5yRQXT6WVvecXKUMNJak9x6RFznVgENmgY3xeDqvAnk2h8k7NmJdrQS7jPb88rGh2fTCzf6oXLgdygQWphya61MV",
  "key14": "mMNgVkzfw3pfvh3LACvwS1CxafuVS4iAh3YarZ6bPKub7jMQ9J26D8GdQ4biP7bjNWBuUupWdPeGcmhD3Gg1SGX",
  "key15": "2VTgtiN4XLEdkoEWwK5zBqLvrbBsT9fDyXkSDg2nuNw26zv2XNDhAk3AFRsQjF8avYAG3wMANrFW8XUmT3zXUq4i",
  "key16": "419H2PHEXpTRuCQ1MQgzHMcb4h8AYcj9WRCV8m5SBrbQY96TG1YoBtEH1ZkjN81hNJHP1wkgCdKe3PMNKmVEgQCe",
  "key17": "4Xd1fRMLEHZLJqo8HxkmE7dWmUPPTmtRehoAg2GpPmtoDsMY9vu31GuJsTUedRTs2ENZWGAhaUyvJekAHRqratyZ",
  "key18": "62UX5v8fn6hBhTMxi9KJ3uNJWea7UJJnwV2bbsvQLij7Q1xUSLdPWVDeej4obh2w3NeTiPThLkpABpNpP9hKxXtB",
  "key19": "4uDojiDCWmmfGBJtKQUmDCR3UnRGiVHufd97pqScnQyPvbfXWaLamZGNWrCrNUNArEf77QLJjisgFDK1shexS4u5",
  "key20": "UAmt5QoBQ9NyEQ2SNdXeJcGhFnh44kSx7UaXVmHpaAJ3V5eNMpJcntJ5km3R3D9DsBvevmmmtrHmNamHkZe2yPs",
  "key21": "54Co3cdvqiMQfr1awc1toUQ3n2rzJkfMw6SgihgZuCBw8DNBxnTsf92k1sgRWTRwwagS3WJRC1YbKCMzBpaVM1qo",
  "key22": "3aKWW9T8j1TVMyvsMxV8Bc6HLiYnKxz1LB4cugXNCAgERXVUEcBeuyvmGjCUunAsJ3HeJbNTkZkjqmPtucAbaNtn",
  "key23": "UfCZ9ieaHpXViyV96d9UXZmRPfvHpBiHYwJoXCpxS6LUJWfeHi556igYySTUpZQ4YmhkXtk6NdU8nsXfTtBgBT4",
  "key24": "2w42PSRsQCAX2EZJ6vLrkuWE6ntg9pZQprvmBTc5EMowjQDRa6E8XZngenb5t9Cw4GFjmxcn6uap5o8NPNV3FdyJ",
  "key25": "29JbvHGTmHXQX7UCXWtvUNYtCsQVmUncW7dbJe1CMWcn8U7drJHfkXTP1cJiAiXEC1qMUiu5K7pUVskrjEsD9dpr",
  "key26": "3t25GT8gNTh3tTGTVZ7ENgpEhRgALqZpii2ecw8E8aCrPaNMbveyLVh2cSRED3cnAwNqgBW2bF2L1XdCuXgYVMQM",
  "key27": "5qWLpfUdsmnG2U5tFWztjAp9JCfU6phQY6MsnB3c2ZCMD75Heit5kyB3hPCKqxN8C5XY2CaavmM8p4mfPBWMMtQu",
  "key28": "faL79EtuHCnjz8Sf4eSnTsXiQQs18qXAWgUo5jo4FNK7R9679EVEpoy3HqRAJu6LqX3srbKKLy8CW5bnYnE7buU",
  "key29": "4YbEZFKQxRCuWnXsKQtzNqFgq3y4BuTbnp97wE1r4E7HMgNV8QkFNKERE7DQ1iMidqSEw7Kc5KmV8kbmCJZhdD3U",
  "key30": "2iHk948jCZdcP6tZjWQdwE6XrbPxmNVDHG7shXgkUJEkdsixkvgh3EfWTCzSuRTexPACM9FN3huKtqgNxkk2XyE1",
  "key31": "2FuNcNwQp32J9EKMjvZxjTboRC8apkeXRGkaL9wUrTjpURVFk4QXf5ZaF5Ps6ycJqCA4pRwvkc3KuYWBpTSawVW5",
  "key32": "7WoQL6E1C9Y84BhBezSm5D7FLscoVE9rQBeG6cL6UxzrT5ozSoNk4XWHJap4dKeF57bihysuxJjg7VMaxRuqGt7",
  "key33": "5CWj4Kzni8TGiu723GkpH38qKpffowMN7BPQxNSwvwvi7bqDwbGipTNBGtqwkBGEkiL65X4kT2qX439U9RHEjpUK",
  "key34": "5x62ezbyktzreFaAJyLFQewRvHECpR4HjpFWEhACX1u4F4bKXGiRdLgAZH6zUq31MFPZR1qkJYF54ERBM1EsvMPw",
  "key35": "5ahTqMi924kyVsAqF8v7B7gEsJCK8kyKNVMB9pzvfnPNSBr1R441W22eihNYLnPhM6fcdt8s2uJ6ViUrbMCN5saJ",
  "key36": "2MYnGT1upQarc3K4kT45Ym8cm6F9MQBMRNdchPMC9dhHLYLTW7fRCVc3HEBwVQgdhwCiWhvX7hE1BioSeWZ7ofcm",
  "key37": "2H2gw6bURcfR6Y2QcmttsKUngiZ9Z2e2q2efCbSRTYW98qUXMCSG4nm9kumDHApCUnLSFLuLK6dbPLUk7MbxBwfQ",
  "key38": "2zhwghWqWGhGuPxdvsLFUnou8iavBGdups811n6sLa9fXKYGY9iNn8gfL1STVqsBuxoU7WErbeAHAPZK4vAC6LkV",
  "key39": "5z5nPhb16Sx5KDV1qw4xL7AR1Yo7WD3k5zJ1ZHLMZh8QsznDEDwyUDrtmZoWkA52bV7DPy3psB5fwoPZ64ozHBes",
  "key40": "iLhMmtyxdDi7mRYrkYyhS4pK9k4D2rneutqrdZyzYCDm2NB4gR3T9fJpGXbokgFvuGcSHRMeNrpxwU94W1KvpPE",
  "key41": "4kPtjPWWjtmGS9sfG2jLes3SpujtP2pdpDJUgo3vHswz5ijwcgzKw65gDvAEKBRNLhNwNrTzC69uX3Ys1SSCAtXs",
  "key42": "5XsF9Hz6Fd9ghd7NbajeUcoP1LYWvjjxpJMs8U3wAyrvQApGcWApvaQ7FJRk6imM3En6t1ffPGQtbr6sTuRzMCvw",
  "key43": "5ZioHot3r8dwBkCupWCv3tgkhxjweJRtfxJjkFfXm2b9PUmXCX3MvS1L1QmRYxdudwVdPGoBTre26ULejCNPkhm1",
  "key44": "3nLUWGd3b3YeJSVNPikVwUKEXvMt8nxkh8B9p9MhDc6Z37hw4ecvF8tmGc8mRiJwUHbe2Dq79xZscMKQ7RRJkc3g"
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
