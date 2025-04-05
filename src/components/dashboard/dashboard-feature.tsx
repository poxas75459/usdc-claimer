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
    "bdWJxYosxCTarw7EEwsi54YdA5jmYNM819u42BNBotZKqf2c7zZJ2MuhBGsvLU1VJfSwt2HrVMxJWAQGtyjmUsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4njYiM8g7vx9aAb5MiUjUEFNGGWdCRvk18xLZWvL1M3sHtU2W18owngwXuQw8AUswf1gCB3aQ7YnRrpsTdbjpLky",
  "key1": "ED9zVHrwiDP9oMR4Wf1S946M6gU2W5vCzRmiA9y8U4WwYFMXj97SEJr2AntpXaccX5uE5u3tKaqUzxAQxJsbEZE",
  "key2": "PJijP2foZcqodm8mSMtaxuN4aaM7RJisCueScJM7QNKcjaViPnhhvXngCsgANEBknZnf1s56mbZqRYs3NLXC4Hj",
  "key3": "2FpqPzE1FE4wjUHytJeiytxyCBVqjASCR4Pwk8YR9AhPFLT2WFbGfhjrYvXqJCSxy7izHeooZq9RPpCSEyVYLwMj",
  "key4": "4DJt26hjnYcKUqxYXKSzh1KFyZqxLog4nSwbZeBydwcpT4cqzbAYM36YaSYHe88Rqbx2tsVDR8iPzFTSRu5ecmX1",
  "key5": "5PWDpsZuto4G6BJjxTzS5ASG5A87GaRsEZrJvpAUqbWxqkYAW3GZbh4ZL9zcKzuQUFhPPDeNFxJMk7CoCpFM36tv",
  "key6": "5uhAtAhU2zVEB1gcodNEMwcCDCWsZR2RJTG64EdBGT2W18TGNDwQGud6JVSmgrZoPbSrAAQGoBMtJkHyM9LytzDF",
  "key7": "9q5EJ6WKo9ptpvd9uB3ovLcFoTQiK3b3CS3PcYq3fts1Yqkn4fGeWfdZ9Mn85ZisqcHjQnagdAzf4CqGMuqTaaA",
  "key8": "3wXGD893UEaUnju9BXxs8fBqJKtJN3wKpqnmex5S7KkdKtxruDGqun8LSYUr4zke59fumhjGtSwbYhaSdkTtgJjK",
  "key9": "43FWQX3j5JAJcxTGNwN4QGjRy7fGspkTEgDZez987x1ZhyJZLq5drZwvkRFUws54scNprAVWQFd5V523zLojkXR",
  "key10": "2fbFvtXAUPv4FWUaDMETpwCEqXFTmGGQmu7ZcnMbVjbGacXBFCaGKaFFgSDmqHShMsavsRiPnxgQcp3v3Uv7GEEs",
  "key11": "295DPUBK3qHqTmQ6ywmARaRgoPTZoTh3bTVa4txtpR7pKc2YoedkENQgzyVWbn2jf8w6yqSpo7C6Z2Byrgsz6L39",
  "key12": "AshdsNdqnG6XTD5suTuXNSmSFdDgZoMfVnLKTwhgDRvqD4RgofWd7QzpkgQ53vTgydbPzRBtN8fh4NPUFUaZCpc",
  "key13": "2V6Gg4vVaeZ11rwxSxU8pQAxep5AGgYBsNk4ZPEMKiWTcDHQ6Eg5p8LCQKxNQjPj7xhXBHdWxPfQq68AfKKMvAxC",
  "key14": "3ZeWtfub31a4otByv9xqtwt7JP8vcgn9deoay3cbHMNg6XUjNBN7MHk57Y5tQnx6ddA8feLd5Yk5SvgiyaUiHJKc",
  "key15": "M2eUzPQWJTNtLs1crgqRGZvWfyiLhRTczq9mXtao336Hgmmzdp4Eu4mNQp3m4qUdAP4m9Sqc6BcW3xmSCtWmcVa",
  "key16": "2HuHPrTaVMFtH2T9L3r5XEFoJYLcnYt8RzY4WBo1q7wtbXFuU5QssnUHcArL1wtMUg5ig4yMRHHhBHqYeja3QnRP",
  "key17": "4weveetEL9rWUh1hpHaT3xVvwBX2sSZxRxhkdhELHPVbp3NjRc8YxMsJ5vwFuHmyqNs8DHxaLTv7LdLanr3fPiRM",
  "key18": "2cBDq2XrXYE1TzSU5TdokkrBJsankbdJgzDpx5FJLr1LNy9vd65noDCkE3JfDZq8UoVmyY5XqUerJDbiSSZPfCbK",
  "key19": "4nFZCcA416eYygqDK86gvHwiUPL6oMZLNPbEF2sZy5LQX2FbpZidX5xAkfGRm9NSvf4CuPk3fjpfjJtRkjENMwu2",
  "key20": "hNswiGMQQX8VWR1RZjbodXPjmR2rrEoZQmwPcWbeZT3p9ee8zGNxgUV3FNeE3aGKdazUDXu3sHkGsCWeThgxL61",
  "key21": "4ofL5x2nnC1TdYr4HtKYDDYn4GbduU126CC7JqhByXsNQgYTanhrnsMwiCR5D8aGLcWnNhrEMsUkjCsbmQgjyz4Q",
  "key22": "4GuGeGkWf129ti146ZQZr8X4HUxQp2uUqnkY5xZQV3ZxTKRtSSjDXAw2kV5nn1HspZeXtQJcxxxb1v8BzCWaEdZd",
  "key23": "5EUpyLSHn77z5kfGYvAgm9ysk5VjiYuJwrcV4c4HkZHfeZnR6ceCAy5f7FBTXWvCxiSXQK4uJPriPu4tPrv9TxJv",
  "key24": "4TFagCA2ajzkKcYn96ayA58V2zrna7fKUK46VzvmTQmuUMW76GRhBubJx5MhvbmxRis7QHXXycDvUPQsk85TdRiW",
  "key25": "ZWppFucBPJqQCHu4FkNEsYYuLh5iygqPR89RqRvi2kNpcK7rVGeomUSRUMXch1wLgoNZEioTE1bydtnbFyjME4b",
  "key26": "NrBM8AmX1NbtchXzbHKTVDRKhfv1SnVr1F89ukZjCHc9NpPLBRFvjhfykwuESeuDEfaGMKQXVSnyuFvvoHbw18d",
  "key27": "2dWg2kSLeS6Fe6DYBJBUjGwF9EuhuoGqYFcHLFWj8aCBW8mDSj45ctEdvb8eKzZ7Mu8vjPdS7YRDv6rHFA4Fyvdu",
  "key28": "27yM4e1bjN1RUntmg3AVdN4rUVoM39fcrpsiLoPgyiJ2hnH5Cn5Ldv1m8Gr2vbfkKLgpGrjQwAogYrdK3mGUwdsw",
  "key29": "64V76zyEVpcoaaepFcudAwo1zHfEqSdHb85tbnp9G1oq6B5phgbPXEQb2p1VnvDMoJrn4U1xaZJ5YGcbMXx874Cq",
  "key30": "2Q6iReqY395roj31iPQR1cxW7FPXjC8ZcJr6bhuZMS1s4cdVi4TkrPAho7mXPg5cCXTc59S5LPQKgyZ3TJzHJKpF",
  "key31": "36TrVabs1FZbBWgg2bYUk5dNWdZa2Rvh1LNb4DhcWQR4AvSNyiGiMcUUYX5Mb6ytmWmGdKT5eWnr47swFUoUoae",
  "key32": "44usneFivBjGUwQ21DRNgwFtGtGcGgCEBnNYab5gDKLNyEz5ZpgMwEk6mwvCBotiUkfyxkvRh65heB4bDUR1fP19"
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
