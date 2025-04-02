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
    "5r2VAyABJJ99js8tLDPHouSXqxoTMmV7RufVY78FLBYowaKkCFc1QcbX61RYcZTdZL6LyWeGhQSC21Lh2J2ar74h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CGa3A4ViUgX3mM9cgzzHwSwgGfqxJEzVEtA7LmWRERL4GXqM5SYWTtVzC67feqbK8kvFn1bKFJUNXgWgAEfH51d",
  "key1": "3T1V8Uj6f2nrbNNhqAjXz8fWqcE3fQiJ9VTJHe84d7kUxvxCNjGcTBuLgEVBAsjYCCdD4UCHDxFvXtG6yjs6BFdu",
  "key2": "DDwCwCbyiSrR2mQcujdE7NbfEiy29octNy19scXPvdeQ1a4XksE1p5Wx5HYPMxcG7zYvnYwgt4KVKuJ5hXxf9TF",
  "key3": "4BjVrwt8NSUos65vJHphq28zCqKyAQY1THD1cssg2BSPzVt3wqFg22Xqm8zvLEzaKob4ChJiF4mJJkWATFCLVr7s",
  "key4": "2fmS3mxCB7b4jUN9P35oXfEhkzn9UpWmCd9jgNKwvcYaSJ1wTSRsNnPtUKiFyhmet8UmbwBhTzungJvrDhS5gDT9",
  "key5": "bv1wB8CyuHm4Pf8cw2QVcc4uHuWgiyMC2Q9yMdRquHhmc1kT7KJ5p6ke2PxrPztfTDaymGN8x4tjKSUBXuCamVa",
  "key6": "4e1RZDD38Cth1gCFhftBcm1kyCVU8i4keC3yakgM9uUNuj448m5zVsAAzNcoZxLcwqWyzeGJ9Hd7Rc9jBm7AYddR",
  "key7": "66egTUT7FmbJkEKDiMgcU6LoVdHvCx17KRRTri1fvgu2v69QWSY7zRwxNdLCh7R9hCL6YxUKeKuGp6ZjuzcguA4D",
  "key8": "3fapqnpEcpD8hv6Q7CoaDueyWWsG9gQQxQGbtoVskuTbMqhjWED5wHvCJJ9bQq3HajBqmzf6qDJNq1S8ETr7L4i3",
  "key9": "3wmAxMiPoR6mo3Un9s6emPmygZcy3TVXVDxUyoe6TEH7jXQtmozC9bZ9ttWP7FCbZBw2MSEWtwhh5e7yw3xLxwCG",
  "key10": "3Aoy3fvPy6J42TCCfaQ2Cps6u43Bi3qrqZz6wRFRs3hesnYjRv8dr3TRhmHAB9fLhFZoQgmrDbnmKPV8JXuqiW7T",
  "key11": "2VyVkZxLfg6VLNuY5pgaJ3nVbWkKCTJb1pmjeaT5hMnrVLjxShJb8mo34eQoDVeN1ATzDXHgTL5zNAzBHu1amWap",
  "key12": "5oYusgNGkJxNK2TYrhRMu3xMuhGZVkVaZCE9gKBfstoy3rwSs5mzS1k2hckpJUN7ARe8APoyHQu2x9TGEmvgqubn",
  "key13": "5Tm3Lkn9vNkHc1PRJUMpdjrBXb9CZhXScNjSCPE1sYjDN8dAQ3mFx4Q7qL9akSAtB2AjuigXMKEnNajtwYLBH8HF",
  "key14": "29dBZJMwvPv1VUNCKhrzXHtRoq8tqRboxZxRo4KUbZVe6tTKEQUKagwNgZ66LPaa93eLtu8NJ2sbFHJYE8eYDozG",
  "key15": "KQ2nKVmr6N29r4xZ7xNP4yiJrsAy73fXC5rszGc9JjUQZnX5p3avfyk4peoJNkZYTAjbsnA6nWaD4H9C9t47jRg",
  "key16": "4jKz7HHRAkjVvrXStX39EYAUvnX8dBYRabdmPByJkCovMvDXim1C9tF9RTA7YGTG4m2THCBy1MFtAmhCCaoLw94N",
  "key17": "5ProcCoKRHYSASSXtWwbruUqgmAq6rTNW2DJtjfDPknbKermVgPMfihmusA9wNCr6VtmqZz1Ln3QPxKMVVoRHzpY",
  "key18": "37vJ19k2Uy9KCaDxdz3tdmHz7ARPMyciJ8vDLtRZtY98CNyXBRATT56RYAyAf372GRwQ5w2ZT9M4443DLiXLKdi6",
  "key19": "27rmCT9smbDeZmp646C4rA8bt7WcuZXomekoxQRubJwYSYK9XguhjZCKPvkRZr7wSPZaYPVfvzqnEywCyq4GTocj",
  "key20": "5x9H8MfXFFXut2PZwzucQKsSgaf5CgLPJrUpyxVant7bU8PUCfzkp1qsQwHXypggJ9udfWc5yGmgbBUvP4Di5oqb",
  "key21": "29Q5aspv6eHM6UaXZTQtzr8kPjWxFP1sgfTHvC9zTrQfktx6AAGteiJBTvJ1YbLVKbyGveyR1vV6BwRhcBkkp2Yy",
  "key22": "655rX8rcBjYMaTrmMTEEVi8ANPTiA2qwAVCJNtFsTjvtYutXVPFqTpmhn6mjEh1Nmeeb6o8HU3T7r9yVgSZgf42F",
  "key23": "39QiswAvd9ytbBKqRygxCXDrK73Jhx3WAxjcQPFz7R3jTVSc3YvbJ1BHVvRfn4qoYZeija4UwKLZh5Rzjnf2qwth",
  "key24": "4t4cMj45MXcba9uqysTfJdyVH4YRH33cpK6x4LujuWQoPUgkD1riPt9nidx5DGQmckLXcMBxJa6GD6jdTw4QtyEo",
  "key25": "4NRFuK9vn6LX2eDa7s7zSdW2wepznmwMgqft2HqjwAuE8ZBKAhRrdbKQN9Yf7vqDiQ5oviF3ztts5Gi3XidYUPvA",
  "key26": "3N6qVNGMZoBiUm8LposaTXFqhvLBYkaCP77mZVTvF1L9Fx8Lo42duXwwxq4Foh3rf9r7Z8NLZs8vb9QVQUEuGiYa",
  "key27": "FB3pgf9zEtGxoSs9YDRRZkPwojSkMWfu8dAptNjpDHjtLvfCtisMQfNhcw3E3pf9tadEsRg2eMUZUEjpwxwrwpy",
  "key28": "5KmMn8VZ4dF4PLqw7aT2qUym6J62EAL19CNgTU7Tmko5bYYSieej7pNrgUMC4bpUWoG5zwWEjk7eHz94hUvYWBXk",
  "key29": "uqVym1CLX29m1o5SwBEW8hQeuUVBwyNBrdJyodFiq3NikRzci4GF7F7PqGzGuZ71BnXPUi2ZqrMvwxAkQcB3dm5",
  "key30": "476J1FPVSdn6Zh5ZEe1MsdihAJpj8WqVhvwKR76hKouTDKzWYbV3vpBn1hUW3PLEhiEMFN7wSnqbq8TX4Bhoi3MU",
  "key31": "3P3WPTzZnKLUadyDDYaqrVvrpCB5mnhUvtC6z7qWff3KrimD3txYArcGYhHxZXeKih1TicLgdmh4NmagMeXxeCbU",
  "key32": "4PZbLqgCyUi1NJpcA85HBnMCSiP3zR2yG8FaFsM1sKcGiapxTDRvUJW6K3uiiUmSvhrEX5XoUEVUVu2YXzpFQ1MR",
  "key33": "3Ycn71sgqgqVxVSPUNRJeNDmdYB5oXvmkzia5aKemo9Ajpbs6K17uASFMTNndQ5hGKEyTBonoWbEnh29FdrzsuLM"
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
