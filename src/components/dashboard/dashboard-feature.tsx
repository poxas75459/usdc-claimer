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
    "3MjSjuEhuNEyN7Kftg3fkDX72b6PSA7G1oTqFJJXdLaWovVEPmPefmYDLAqsgnpJNa5XG6vUQKLkid3rRyKZ1SMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29GF1hyhDhzhP5UbhsmZshUbLVq1NLCxbfNWfFGqj7KbTEPTq3sgzcbXEGz7tKBfVRPuH2HWwPgMcMGprUP1hgpF",
  "key1": "5Zv2vuPozxySWEAfsCUktq24iLwFxbYLLXUfEgX9jNFUWS3F3j4cNJ4gPcf3wFj4wnd5arwRKxHqKJ29nXdDdPF5",
  "key2": "QbYyjzPjoVxMgZ3vEKmfoSFFdTYbbiEFgU38Zt6KZQLFsqYxh9iXzN2o2bShbRT17MdidbUK67WcSFqFgUBVmxP",
  "key3": "2QUt9c8PNB3jB1s69oBJCpU8aPpHGXm5SVvBErd1Cdo3TctV3yA2MMmm8bJup8BX8fMnSPSExdUsMNt7erSiQMYU",
  "key4": "4rMk8x4nLGW3cGSMF2eoZ8waUeuZeEhhkHgRUeXj5wRB2SvkyKb3BCpFV8y9Ly9uABbmtEYnKNhDoVkUubKxrKpQ",
  "key5": "2YY31zyy8Z9JGKpEGNBRdF2aALFjKyWgqpGZp9aLi1PbA7gsu712n59C3VtWcueni5JAdsharqSfqDKKHKeihYFZ",
  "key6": "3szPQLgfRo9pWWvSW2p7VNL6C1m4nfpqP4cNBkmRCQdpnQeiRLsRRf44uzYfR6QHVuoFpwZKPfPEEH69dMvmDBPf",
  "key7": "37z7ZYuNqNc6HGKG2tWcxWQtTomEyDU9KgroyjcAj63iVwUvYKbfxuozene5TPtkyBKGp1TesRwRYDJ6Vqf6FZyS",
  "key8": "4FwYuB8qFUvccZoy2un6DPCxvmBmBE3a6BeKzHCcphikKYUKec7TFAdEyNfy6rXkNfnzVvUCMeWQLZ4FBS3EyieC",
  "key9": "5YmT41phLxKHjASgznx238qgRZTNQtk5K51qB3ebqCjAZ8PvRNgZbnvLPs1qKrdG34qaXvUcAa7p5fxL1xFSQ1gb",
  "key10": "2ACrv4AiMyTeZs8pAsGVjPBwqUKxvXpjuG25BiZbyWfCd2nU1BfU49kW4wTAsS3xEv8gVhq6hy9TK4Eqv5fooKzZ",
  "key11": "GwNznviydxtcdmcoNVCRToJi5uXvxEHar3traCAYNWLfV8KnZdJbJLREKPHvdX9M48SNcDUt1kVg2JMboZukJRc",
  "key12": "67LSKu3ZjoaRoMgCxLuzAx53YAZMTobMgguhFxC5g4RibPxYPYb1QoBTgyZ9L5fKR9NdQeSGvvjLpa68Vfv2GW35",
  "key13": "5mqWZJkjS7mdPsVJDH3LnLybEHxHibyctBBq29ii5xFBkNeExkBMpzSxwCAvyAUkSv3GcfWJZSxTVSYPtKmQ31qU",
  "key14": "3RcZvAHkVMJfvcGB4A9F2fhza8pa88MrFHA7n9cYh4Dw5fuMdkeEhiLLKRrBUeCSsVCXcsoYb1SUUEmDuuy1xzRD",
  "key15": "43PJRyoV7RgUazj79xcWABRsqC8euHHTMQtVZ1g4D6bH1xNQjAefYyTSHqyoq4XL9ZHFj4juT58uR8Vs4cKdRjC7",
  "key16": "22Qyovzg4AZfgU1hTtA3xj1AiqEquX6aGrGj2NwwA3jKuEg1U3KGSDZBrtST7sW6ELVuWYYpF5YGQSkiKMvjLDHt",
  "key17": "2Yy6GV75LNUQ69c1MrCbKDmD6kCXqydRqhAsrLbMB3QQZqboYzWxFgdbmbUfWybmsUrmsrgzvSZkgpsqqHS94nYb",
  "key18": "3V4VqtpGhgyuHFtbPm4MSZfFK3UApHjy26ziRg5zp9oWe4tE4BgZQeAKrboNDaQNJna8AVQVVLYa4tagFJEKR7eW",
  "key19": "ZwtiCTnsVNrDKsmDX9fCKKBpQxYKZMiq5otApUF5hSUXs1Q3Se5KQR2TN6Xakktyh9foeK13VdPHnCWwsM6y6yz",
  "key20": "uNtNPckSGfNfyiXUB1fJJxbVg8AitGsAFLsfWnXwWDZ6RNarccV6A3Ciu4z2aiZ5r9KdYfGx6dD3TgRWGZVtskj",
  "key21": "AdxaibrPaMzbYfDx6iN5dw9rFQtSH2ohgnf7yjQi4cHFSEqbwvm8hTHSUmn2CTYPoxkaCBwiuL2X5M5D2WhY861",
  "key22": "4inZDWyptmsghSnRXY7RmQ49hY7NVNN8Kb67K9eMUm1FgxtyiF4R6h6QWm2kwBb6VnrrXzYSNdyiDdeZDKdaHHBR",
  "key23": "i5cn3w9kJYu7YpajkAnZDvkPJxMhvJp21KxqmoQ5AckypagnCi9UEzLnf9ZdWb1CVxjbePeS74PXGbGwRDUkLiU",
  "key24": "2JDFdXwF9mW5xuyFzXj3ptkpYiPvMREV8VX6mEm5QUuLpHsRRZCH4HkEdvZp3wGMHhCpAzXX5QYZvgXsFcsa6uf5",
  "key25": "2Nv5mdPhWpZB7tB3yBteZvfJSpEyg7yVBrzBE8oZXszNc1s6NYuz4VaMnFr33BJDa1jcuinGvPVF42LVpjKUaBNb",
  "key26": "hmHG5A7WCjgvFTkYaboB4n2kAgbLkB5xt53MwK2sTYQRmT9ALRtxqpPLC4dpRTD36pWJ72MWgND21XbPhrvVodM",
  "key27": "5bxyHSdLMJyEhzo5HV2Bsw7CZUbwccT6dEE3aBMeX8hCWdSiT7snocDkbf7G7iEhpepfyrzdeFnSME3mUisjY9UL",
  "key28": "2qGmdYQP21ndBEVjonccrgVXntG3MQf9iK2xDoFzRoQjXgc49NtfBH6K4ZKKRgk6yxE2pGWTLConjeDTtJWovBAc",
  "key29": "3gXQcKiU3LobgQRmRZsFdpEHJEh6a6TPfRFaMmXQtqr3bbQ3ggZsYpREbnuMMacVeBNe5Eo18SfHTgZX7w8CF39C",
  "key30": "2WcD9jcbv9aCNQ5B3NDwz7JVnfivXv1Y9r6cdF7ZJ3HDEG6T5GSr7N4rTeTWo2LWCGBnAGEW3ELYKzhh7xV4paK1",
  "key31": "2Phpcu7YdNC2WdvRH7hhNaKm7A4eQcBdLqcfc415DVjmu96QgvLm8HB9x3jJx5ACnu7w47u6pCzSF9TKnWTMUmTm"
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
