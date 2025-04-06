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
    "5iyVHAdFKp4LYZboGSzLmQ8q4U5v2xz8t6W2NVgxLR5GifoqKAETDgRqqNyBfSem7ns4qnL6gemZZ3JVsFTdBtUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z2nC4WgbCfD7VQU7AWZ63Kgntqhnq7opkTksgmWDpDcutZ7EgyR8oK5n22tPBFXw99JdUg1qpk7kjJKvS9ANP8G",
  "key1": "3Y7wYDj7zdqNFFE324Qbq43XyL7bpbAmmJcUhz8A9AQa8zJko1XkoaS6x5RavoXZuDATxFsVezbwoC5AQSjTV6pe",
  "key2": "hK6wyF3PmF2w2eJ54tHaEPeHqnRoBem8u4PhTg4DdbRr1QZDtNqMg8wqBp2LvVG78RmUiKieN9WXhhCfctwCNxT",
  "key3": "2PWTBnPSjUQajBiZWnB4xfTKVUSQVfYk65NNMSoaKpiHuid3SEJqvgzudwxc3fs4RScaBCqvS1mAARgot3rUtu9R",
  "key4": "3AvzxBE1aNnAbzJJux2gEjZBKwaCrVJHLTSLfZYSp8wBSyC6P56hBgKP5AdzdaQ4v5rWD6U8FHvfNsizbpjQ4vy5",
  "key5": "3zssnp9ugSb75hvCzpHNoVj47tQwzGZ9tjHdbMUT4ePU7aw8nx6Bk5UcLoTk1BWHnDxsBwXrBuYcTRcr9XzkEgep",
  "key6": "2CMXfxrL8Rk3LMkdJ9BTMPSS8ABSuHgjujceFZYm4Xp2f6QvQXAJAK5mwLBPpvG4XpdraX7JvjVshKRMEqvMCRuy",
  "key7": "3oQPd9GwJ5v22c7CPQcPmTEqFuGAjsyii2jQz9fxR9gr7gr4UJRL6ETae5coPW2XBDr1JmMmgcwP6wacrGF263rW",
  "key8": "2Z14zYadn8cqbxKCQpsTreqriNShChJjqjdCCR5K9v7MRXnHtZB5x9og9mDqDraWtVgdSkJT1NLJrpeFthBPjwH2",
  "key9": "3nJpw9hht28z63aEVzd2cpDwkP7jsT7Di9wUDTRHB4QVJ1NEjAotC4RfdSfn9oxFyM3GArwas4Vjm34kfTLcVbk8",
  "key10": "2U6nixQRvWKETU6dT5MbYQiUdoDgm6NFtM9xZrti6jUsz81bFkR366sQC8s8Jh9cz7nVdmT5iKcRAJtmk41uLizi",
  "key11": "5RCgV2FP8q6xsR2eu63dBFZktoqVak3P3SNDCgKt17p9zfE3TfavBrktVjpQzQ48Hjoakjd5SeHSz5LWhoWB4h6F",
  "key12": "h97noZhdTbVsb65jnu1MrtGEB8sKCJazoQBTgbbymnnJjvSA4RWKs7aBuNPyJgLwwwszfdWp5p9nvHuRTcwaDZe",
  "key13": "5sN1uak9VnD24J9SLNb2xG6EaBpBYZeY1XdeBJaG3Z2ipRkZdiNHTeoz8PTqTe8eEe2c3u4kcJ3Cc1hj17vqD3VK",
  "key14": "2TsZnZRZBjxvu4aaptKRwMqgsFxyTJvHUH1vWQCqgeFsMz3GAxxaQdL9Sxvf6Ebr8LyoiQQyNRXz28Tk8EVcFvi4",
  "key15": "4tRY5uH2Ddv8jx8kDyceiFU2y9CZgda36oTMfCHjA65SQ61DoxC5SKNMAnyy7a74LQtQ6rhs38J4gHyvzjxaSaF7",
  "key16": "2KHi6tqyf5QGqjuqfG7CDmrftXLnBuAh2PetUEfZrLo7YRJP2FiQ3387DhoszuiFDcwhetuTVgqdHKQQ6Xi5MgXw",
  "key17": "C3orM1zEhC9wUFNuuZUemTT33aCUe3G5AjWAggCnSoypyfEVafEjLbX58KDnNFrUcy4MypknjC7XLn9uy2irM81",
  "key18": "nT1WPXYd7tEtzFKu6rvTqpSghC4L7ztpnZ6Uef2UUv8Ykw5sdxqFsNSZKW3WNYe33ecdiJeMzAzSorzXgG1sPTD",
  "key19": "Gi5VgQs6JrxpYpXmTk7zBLp7r18BuD6E9Q9b65zAr4LCnPE13ua8kCMXJJPdszULyZVhSqxn8ky85NQpuuW3FeW",
  "key20": "2475F66yWdmg3iqycwAHv8FC9qto6A6VYN8xQHAq9TkbEN1mJJiFQXyVdjGg3YQN4qkAWPxdRzA5fM7XgCwykp9v",
  "key21": "2Lv6DGu8rDa8nrPcQjpZ4SPcC2Bm7NazJaa933sh9YYdk7AuasFyouu58bMwFxvfGGT7TF9B8Rc8m5ArQJd6T2PC",
  "key22": "66jZvPjGFs6WgXFcS2Hjcqo1Ydmugu8LEUsg5j9bVXn8Ff7G8R5RoKVQH2itZCYcjT435QNPZXDNhMyMNKKu9Zgq",
  "key23": "CncBr2i15U2bPtEpAFvXH8doYVFW7fxFVpZ8igcXvtJC8dq4ZBDMsiCKi8PyWHvame2sMuKTAwCCyYXhZh7y8My",
  "key24": "2J81L8ZxgvaGEcWLLDSnQuWaTCo3nawGgSLhmxjTT4bucwztexRqRaJU4fa13YJNcJboQvcxv3SGuuwzS5Vw19N5",
  "key25": "snLSVsCcYWZZj1sXAQ5iV2UB4DLwS2oQ2qK5aDUx3RwSjge9FZD3Qrvh1etjZRjqRXsap3xwW8pRKRyYrvse468",
  "key26": "y4cMKu7dzGjEvYaL1DBHuBm2QthZKWvzLgCKvrmRDeD9WyXW5VxK7WG86dmYSQaN7mejv8Z36VLnPJpywG4abMQ",
  "key27": "2T53sVFUEcPz4y6iUpteCEDFxDLqhP4WvbRYaSy527HHZnynd32jByd22bxio8Bx6T1zKGgCPQ6eeVwBFNHRNsFZ",
  "key28": "2E5NR6DbtZJphx6ShNyLucpnjxp1VvKgN8H6ZtvjMH3U9Nin5BnPHdX95FKEP8uZjaiwmxFG9FVMdkDPuJx8KemL",
  "key29": "vGVhsqJe9oAptgtiSe8v4C3PEjsMiMabwNb1NH54Sa5KKJ5KjAqGi8eYUFSDnCACVJ13n6UwAcMfVZUZJHjXF3g",
  "key30": "5A5aaUxEEetWnc9CGChf4iqVkbnGbezEaYQuTghmzdb6dq6yoRT7Tp2YKPPHA31kkEJymno9ZzHY5Br37MgL7Nhn",
  "key31": "Mpwe92aeMdBcyvB1ba8WGTK3NhEawXgC2sCfxjqU2B4a9tHVPpQG34fwMkB3mbPwLoc8swTDhGGUrYyy19MTXik",
  "key32": "ortPcThTxcqT68WhvVjc9Bwh6Q8QG7AD47uA5VfNiAL6vm8eJYvN6YmT45gZpvoCdTYPky3swazJhrtaRTeuJwh",
  "key33": "3oCKcf5Tzjv2zJD28ZnC6tWPRhHMXtjv6mqxs2x2ohmAiotstyk7zGJmMeeW5v5dUxCgkVU17eWg7FUQ9vy5CzKY",
  "key34": "4iPiMKhSDZDqTUx45z4JVENEKSa7u6V95ymdCrLRDxxP7fTA5oeU4fZY6ZUVvSLZpqBaYKBZ4u17zW5JtvWfJoij",
  "key35": "sRsVP7bHTeNmDPG3c7MRzDHbrU89j3GSvJpQXccVvgKhnPC2YBPue48ypZa8naYhG4XpboYyfpp58sgZgwG2ES9",
  "key36": "213wxn2SJAaZx5s85qbVgh7CKUAYRQSGA3PKVmUDXtWB1AEyESrwG7xAL527dF2scBvyBEV8MzuKBJeTTT7gMdp3",
  "key37": "VBqBcQof2AU1bAzqnLamMF5uWe4ZrvaPHtEXF6ndy8amax68d6C3gFSCRcpPzf38sAnF9BdyRQqUHSdQNzWoD9x",
  "key38": "21s4arm9XFCcZ7Kmc8ffPjQ9wmhcTc65xv7ynXWguwr4BHaR5MDRW97FqBfhN89MJJNLGSTMVSW1rpHDS7aWRC2w",
  "key39": "8nj9WLtGgqmfwiDGc8vK6HaNxrk4iFKHG5eDLzvwThBk3mGtWjHXzcicQx8dqp2B9sprwSy21ppkCVV5iwcuiGm",
  "key40": "2ELgEkqjdeuYQrtztFYrWNXes5YEWy7pfq14hKgDpETC7ia1HwJzz1Axjr32iXxPE3fh8o4tAvWhUptRCJLH2XSJ",
  "key41": "29PJ8ASMWYMUkHXKhtTbtnsqtN5HACunC365EC6qEq7EzJrdXyLybVTwimhDeQcsVQXPAjxYiZENhrTypdHWi3X8",
  "key42": "2UxLJMqda7JE6RRbXVKthSxN49vcQNaoJpSZ4cpC9rewxn5sJ1S7maTuhFaULN5W5Pnh6CE5qWffY7bZ4YwTNNdb",
  "key43": "5RgyNkKRNKjukKVjf9WUjH7TyrdA4eym3oFQiWHvAmKhrfpL9dQ2ASc7a2dFv7PpHkXd77ssVzLH1VvTSSJvHLE7",
  "key44": "3W5pzbAmg856ZuwCVis9ctx49LPRt5upd1rBDCu6erzMdMkP6WMt1QGDu2GBKpJvAUQfiajeaK59bhDpqNR4DWYp"
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
