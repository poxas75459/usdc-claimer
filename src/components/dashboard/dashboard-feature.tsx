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
    "6y8JWpynzkA5D7XRz9eQ6sQZbW6vmgRu469buJrhc33Va55DN4BfhKZif1kMm4v2Je9xSHd8JS4M99SWjocuGkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MniND1tqse2EU4qgyoNWeDiZYTpHfdPGQiHRNzKg77TPVyBpr8RmNEHZsgfcybUvLyFgfY3PexZjxsanz5kdDAM",
  "key1": "3B2v3wW9ah1Dkc32S67XPVDc3pFPCgMB1YQRte6AYdhQBFRSj4AKAQbLQPVPc1yQAxSs6pJjNetggWT6FMKT9X2p",
  "key2": "MnLeAmA6QyShcngACpgD5EZ3S5dJhd494sZJ1v5grNYqpU1dFUrx92XqRC42PgTc9J6GdsstNKFVYMfWqbb3h3Z",
  "key3": "5PjTVcv11SSh682D5t3yNUjv6cvqMSxBCiXpgW1rUScj7pWhZGAeivhMd9ztqkFPi8NBw5uMpxWfDJibtukPhxWE",
  "key4": "25ZQefKdndNep1JvE1CqoHPqDc9kW3fth5HT9HVKiaLQmiMF2GSajiRw4bGcAMBfSqAtWQigwNmRvGGEchCxN9yR",
  "key5": "331NviH2V29VijF6mjpCrRJ7C5q7St3t95vsTSgiHjz69D7uyg2xQRUqad2E6Lt7CAywpNge4qzMjyzpQAjWRT43",
  "key6": "3z9Ak8ierPHSXtF1TkSrJZy7qZF9LkzYmQEm4nSEyuQckrPSfenKpwsNSrzmmWFDgZXXvBvVSm6tg6MANVZ3Vs1H",
  "key7": "5uBfxadD2Nnaky5ceQ4bKCJzYnkLJ9Hh15Z1u8RwHc2eR3Fiu2pTKKYX3DpWvo92G2U6otykpBAucAwkqAkyFLMU",
  "key8": "497ZA9VzxFWUntQZ9opah9cxbqTe8LJVAtzY83mBd5Qjr3PCc1YwGg2pWqnhgBj2QyZMbQWoicwq3b36viCV65mN",
  "key9": "3FbX4V5G7CMGLUkXSBoiUsWKrhkVNJAjHEP9SjmKw9AtHa2uHZZhvzR7vgFygxKG894b1eqL4hSRdEXH5T6qZMKv",
  "key10": "34W9rnvVt8Rv5vaFwEYcY8onrw83UoJr2T45gxk8FbDiM8nmZ945p6upNrD6aY9XmbYQMWawhLPBf73icDhKfNQW",
  "key11": "3DFqLUB8tSD2qVULZucxQFwmuJ1EJwEhAs1SEJEe1Qd83Y2HhpnMwgDcRgJhEAHqEuUBsaBbococuGYaxVZzcALG",
  "key12": "9Lp2UByLjB9dj6V56vxcCfWFB2bYRMiViZdRx4PuGQaMBLbBTQY8P7mBVqqndx6ASowqhYdQGzVULRDFGMwT8LR",
  "key13": "QRNCZNrMiVvnovvQS6P7i2EySqJiJREfHaEeFsCBwGZcEuNJS7gvZx7BXCHXsqWsAyBztRWYdz5uLHUULfsriT1",
  "key14": "cQ3FyeZkmGbWD6C8KXNHdcCDPgMpfHg4AJ2D78CWnjE1hd4c75pDyG19nJxShmFrX4ifKKJ1J8SwRj5pbsGpfm5",
  "key15": "4NFqSsrTJkgZ2nXHjXARriyqvdTzHz4jbWz6cPifdNcvbMzjix7zYmoXtRkkvxfJ4Z1G4cNA8mJj9g6KNdDSwxBW",
  "key16": "31tBGnCiLf1NG31hsnKAEcN8BaCr9Mge7eAWiTKNQKLWa6oacvcD1ftMSStQZtxjNnKSWhwnnqfj3Ww5SoJyBKsh",
  "key17": "WP5tHRkMBAYSJDnwxUheu4NoTLUZYYTthXVz7VfV2v13cvodVwgid86tsc23i5Vd4d1wRZD8rML3Re4eq9bPH1w",
  "key18": "Fp9GbdL8iYBKCombQSCSEmjotp9K7bnPdm5YLyp3wGNGK2aBkgWAn2J9uexnejSm8sszoHvHLj6b5csK5QUaWSS",
  "key19": "sb78k4ezNN8CqQ5sVs8VT225bkEjkifB241QFkctTJ3nyDZbAFiXDUHH7dDN6fqg5e5YxfRnbexAx8skHwyS1Fg",
  "key20": "h1yxnCi4LcfqeaKmmJmj1GphTPf3WchHjY4csTQ7JtQXhp7c9DjJKAb2MetYCksTpT8QtqhkKTCqPgTyzrpoZ3r",
  "key21": "43HRBTuQwebkAjmdp4aPq9d5cYv5cVdWFyXinpZ9bQv5FmqLroE1EVSY8DyYqk9GacNpe1Fy2bq9qZUu8JxXFP2b",
  "key22": "4Ga98uWykzvpbhqfhgKKi1PCwfELZZJkjXgMsd4QY4HZwh8PoAgqBjhr9Jo4dfLCt521EkqADvSyM1H42QxQyhqZ",
  "key23": "3rVgJJyvffNEoKdBAdh1hTageJxSExcFWM5ZbhZkuv8Fa8qx4mLcYky66XJxfT4ZffYjvzyuyqpm8F3JJqC596DW",
  "key24": "3RJTiVTgA3WdyiQHtZwyPfSXvouEyPYNAHeUPpxzgxVyHrA7nqq4BLLMZzEwZjrGHTqZCdqKkPk7pPKtJt1TZmqJ",
  "key25": "5MAugnPF1VP91hEcu4PBwehLgax2cK2bsp5UKzD9GK7zhKaXqtpdFC1wgWirgsLTaFbnfAAACesxFuWhrWQHqb5H",
  "key26": "4FnxssisH4h7juQ8yjmFDS6wRxTiN9uY9nPNR8siLH8bVUPDdwtxk3VoL1U9Bm7dVgDhEmQJqdFjhAmCgvy4n23m",
  "key27": "66K3f8DE19E8Tq1obX5hgoKkhwPSEbZ7SmrwiJkXMAA1T297kyRekx58GZMYQRHteedFq7S2x1E1sTRQFeFawpt5",
  "key28": "3FoyCbrX2BfLNXrZzyU1JXX88dUtDrNZUQTeHx9osCQG5N3MyRsT8og7srWfkXNy3NidyYuPmRBX63FBrmhBYHes",
  "key29": "QAEy2qYQerYxGHz5dy1oHZfnw6HLmT2rvVg7wwvV2tpZYGUGoo7anMddTnyEFN8kzJor69BjBj85Ls1UeTJ5JkL",
  "key30": "2RTERKmLQ2qAgNoQdZwTias56det5ggis618G7m87FWTnXujkRn1fHeQzv3WTt4AC7JZAbneYnrGaWJQTNUeuiP5",
  "key31": "5AeiKhaZbxTMQ4ggZz8tWcME5Qucmdz8PeNTGfVAWfFESyBVL8ARcEqHKpvKimpKjfJWzVgYw8LmzHp3CG5bfiAP",
  "key32": "5kWNYgMW1EoPVKovjR2c8qEjHEJm99bSng6yGqDQQaY3su26TMJLCaVyTAzjTUczmuVoJfg14mSdVCsj9w54A6cz",
  "key33": "4hkvzxVMpwfmYwzNk8YXnyiTxwFFg4k4rgshK3VGWcc4SQhBXriKowespcJC3B7etJ6a2owS7dfVD5Q1MbneUyz4",
  "key34": "2CZiVBYrnMcY2bBzwKiBoGNbnZXvgjwbXRZpAw5WWUMn22f8DjZKj8VhsrvR8AkwnZSQ2deg4u3J1fJuw3qoCfbG",
  "key35": "q8hg1EjZPjDbMPbb7JiiRZ5CwwF5XEZGdjJmXFQGHHYZyGZvd7nGNxgLpApqSHFNEXnuTDASxcrpjucT6yXFqG5"
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
