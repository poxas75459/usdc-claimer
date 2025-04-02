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
    "2x43ECBCR8UGPgiJdD5DZAtkoAMF3RSHgjSq74woVP8G7epRtPJwCAmXv1ZdCP9NAh6rfrc3744V6CXJXToyeDo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54o5cu8NH5SE1fkx6z5gk8sEMMeosVLqvAQUdR8oMWVZ6rFkxzpFTtvgPLiWPgZeG81LLErv3jbcWNkiuxsfqkGS",
  "key1": "4JoLC34RioWoEL86giwBuLUU1uv4jtXj13bEzyPn8zsoioTKvzpth4xgBHvkigpav7d47QVxmF4zoggyx71A4bsp",
  "key2": "4ztXHcNPJ1Bqd9hfrewatK5YPt1YhjrQEBHd6qR939e9n83uTUCY3JCvnPEfFo17YhRG3gQ9VvwF1XqqcVpXPQyn",
  "key3": "4jmMkS2DrDWenAZSsZb4pVtSnga8Q78oixADqqu1mEABY8k1JaK9aYJ3c3uJiEaWtvd66kqdWnMVcLqNLTJ9pQoc",
  "key4": "4kkyD8U5C3fXJsS1qsZVPHvtfcJ7sdWU9DwjAfSUA3FztvrJHSH4JscEwWG5omvL8xpVyo6VCp6o5vrLcHp9dHfU",
  "key5": "4L3X3c1HHGx3Yv1Hu8J9TbkJ1ZShPQaACyyygXJmeRiAJrJDhn7s3Vd1zpuqLamZZcUC7xAzWzMZcqpQk2wzfgRC",
  "key6": "5zHQX2dY5x8jYbP3fM3FGfAFJ7xMRDGjAUyiTaYg7QPP9cyoCUds1Zy2vnpBU2dRaCLrpvLa7xYDyWaJEQBWCDWT",
  "key7": "5X5pDMtbSmsWkbZfJLuzcgcAhF488vZSH2C7BSAKgVoQb6EVkR9k6eTsDcM2TyFDmco2uQTMLwKNJgtkak38SCf3",
  "key8": "Q7e7MzB9rWhwFQppaUC7zMyfsUh7fU7eh35F9CfCG791k6Qp4AJpf4yvvjYdS6DX389U6nhAyWSqRC3bggNvh8X",
  "key9": "2pgi7PUBtdpYsQATbsG9NT2iq23BQohXEMAR8Gr6ZiPj9VkyNJqmcsbBN9CwwngVufwRYF9rD3HHnYoBZXfnu5Mu",
  "key10": "33Ha96ekEMtDEs4dPkMucHkpTK7BgUon27njWd2UXC4cJtrg9YRcN9ArhNzLodLXkrw61x9LbEZQR3NCda2TjfWz",
  "key11": "Lw6XvTAvkYtKtmitMvHCnQGfGAQoN1o4SLpyoG5zTxmevPDN36RQDbPgizBTdRsiZStkHyR9HcJeFCzHw9UyiET",
  "key12": "3eGfhCzYSM1oc5tQDxss3Ffj3rx1vyZH7VjKt5ZVTpbWo2iA77k7cmt7EeA5rLbKZCvwSSFFTwCvxVCfyr4sJPam",
  "key13": "4uwnS5AoYeDU9qXzX7oGVqEJRyKwgPthEsbQJ3AFarH9Dqyy9xLk9oJ47dzHq16vYLmpGnj7kwjAJyc812nThnqJ",
  "key14": "2FVeoSrjJAfdjo6UWgSJsrWAULPpk2RhYnc973dNgXoFGAY82qmYGuDKanfcmf1At494vYu25twEoQGXYKcKX9Qj",
  "key15": "5zGpUQK3v3YaTv1wbc751EJfYxSikxcpEDEB5JD3w7o1LA6L1E9EAp81M5ChiNUpZKpR995YN2yyNytZ2qZ6jhZM",
  "key16": "WDdT1PUa9792qvWTUp3FbKvi38d6Cf9SPw2JfvSsJYLWSpfQzHCF6ooA133EhYYUBNMQRjCs8TFFKqipUgWzq8y",
  "key17": "64G7Yz25J7EifvRy5CHPihPgoTguUxf68txsdqom6Kisq7bsZM1cG1umuv984qwL9MALbAWW39bAsNrXzXfVtS8P",
  "key18": "3JJb1q2LXpUvYvE4xoCLyagVmn7DhSZ1X7wAtQ7sFqGsWZbPU38G7kZcqAWRnkmhQn9e2v8wiPTbKPU6ChQyebsr",
  "key19": "2A8gQDt9gjgdsjpLbWrjzyQT7bqfEmvet8x64Rwh2Yx1XugZrer2mkDbdcQuExCSi7iFUu52X2h1dcjV1qzAJCB4",
  "key20": "4io6SUgKBjBSEoM5dkpCdhNWeMpjCmCmQWg6fCM5C7MZAZaiuT92c8zdiKaAwgp4jX86MACmRxEk9qQDCLxBHbNg",
  "key21": "3jQEJ7nBjpwnRDLda2rHorckB2i9pJboYr9J4DkaRa5miMbNF788xTy4qTtvqkN2M67nTp3VzSzj1VJRA1jGdb6T",
  "key22": "3tqiCrTctByd6qhsG8kAv2TFqeotjk6G5mqwkzU8LKy1H44kHWT78EqhvfwPB3Nrh6yo4gXr8NyvRHUGKigApPsL",
  "key23": "LaYc7np3riy9giPvq8CYNTzTLUSgmFCcRys8NhEtvFeX8cvcsSGC1EJP3aB8gvgnBia4omH9hj1sbouVB1YfV1B",
  "key24": "3vUoHh2vCM2ksoLCJpUqhHc9EKWmiWmLkiPEk7K4jqGcPgVYGh1nhYX5PNvtfTM1gEypWuJsUyMkbnSiS1e49j47",
  "key25": "5FnVwN3NMDkKzRkV4e6ifqkTTPMgWqUpSZZYKHKD5UbH2Xz1jexk6gGqdHQytJMTYW3B82Se5B3QesZtZ2nEtsap",
  "key26": "49eUowpSzuDCWrncNhsHenWuJU8x1E5Mu9oW26xDJinXAbfxGnZ7VkNR3enWkCK282cfJqaLPvtvj6g8k4rnvXRw",
  "key27": "3AoUqVo2YxYLJ3YNYE3tBKZrFsD8on6aR76KY4mdnThS4Egfho1HDxVaSAw8hK1FwT6czMQW7eeEVKmCwWCVbQeK",
  "key28": "dUR7x8FEXGpgWX7cjkjTbrqpMtypSoSDQXfpH7ub4XhPWLR69niC3W2Tpp9ASKxVn6igqsGNM9pjg3KrNXMyFfV",
  "key29": "FmtQQfFGBTLn4LJZg2JVW1sa5ujyrGqK1wq5qLwh7y6ZPQRPd5wZaC8oCb6d6VmX1FVwfDqNanq7tD5H29w1Ea2",
  "key30": "274QpESncXKZ3Q9wE5egFMM5bAFcebmCV9pMJ2uELfSR6tZuzCHVKa1cvxx3C5gFnN6hDqbDsrmL5MtAcQNXBq3r",
  "key31": "2Jj4WpcziVSZUFFvaPeF82rXGJReBE2tAsGUt3qaiAAXN5BCFSMYubuKNY6SESSu6ANagHrkrwVHSMF6797DixjD",
  "key32": "fUgHy2Rbakg7AyjT8SMw2SbkkhS9U2zrZQJLh4wu31UvAu7uMdSkoePyUXBgqcha7LQeVPZBN6gv7hbTPy7vFHJ",
  "key33": "9UdCLibGPhvu65KbRtFvmHaKHpqMVGnm9TheAUiHp5ZmLuyBaibZiYazt8eMaR4e1P5R6p5Co98BXZzcWYaLAc2",
  "key34": "5yFDSuTPvCzQ5jBYSvJtVmEWaKsYKHEqWA6oJxasG9kMAwxUUP5JXRdqPiR7R1eouRJ1RHb4hNCDBzcX3z1hpviu",
  "key35": "5WbMYdQz1h42WepTw1sQq3g3cLRXP67c8fwTbj2D4JN2rrA1436Y9kZyjott5Yfzeb86rBH2BMhfRGjUKx37Jmzi",
  "key36": "3VgPr7rP1Jpw465M8ppjLtZrM75Ecvsa75dDJfbCicYaePBjh1Dkt8jVA1gsYHVbc7NbEA5dymZUACU2pWVVDkuQ",
  "key37": "5qhfZrhbWY4YnHEwQkcxqXbnL5xjsoBoYA8SSgxAidsCgm1vCCBWYPEvovcFXFb1bWyL3kQDZ7CNoeReZ1d7XiVi",
  "key38": "589fktzyY8UbsredQqMyLmd3JHjrZg8DEYqUcgwkLuWT3GvJo6Frx9QHVboh2PqKPLJc3Rzuq9UrBs3Cof3n6EaG"
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
