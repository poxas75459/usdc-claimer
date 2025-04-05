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
    "sswqk8fYedS5gt16ezk2JTWBeLnuSXQVBdvcPgjZMkhAXGreNnR9G6xiipekrPTXxHkf8zMwNJMmBv1QbGzXhUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oVkqjr2g89zeFmwVMWxummbpXmFyuVfLXYiTpXtA1HDwdVQ72FzYkcqAZtHFidPDAtAhBgjrwAEzgoXxy4JEu7P",
  "key1": "4hGMgiUVP9b6vBvP1UaLQESDTNc3pDDfEfTnkB9Dmk3eRQz4xTs3XJYE1vmeVLtey9pyvgqs5tAv2V9igvwssUyt",
  "key2": "65SJdw1AGZsVNvRAUnEEoKpXJrECNYLwkYGdU9qr4KkiXeDMsgMitHYp9KUCtz9j12v4ZSCxjDpZ2A6JUTEdHX5t",
  "key3": "5Beypfixdo71cJm9YahVQhj9ewaGT2DzceiJbyaPLqQwkg7BRear2sezi6qwXBQmqp8pUbYaLQKMsRqmecTHzNu5",
  "key4": "3jonAjCA2TNPKmV7itQUBmb6hyaDRFtTzdYcfQ6x4VTBT9ydornWiXugurE8PfsmACBv4bK99vUCFqDRca22LBgT",
  "key5": "5YZuemZXiHmvkKw7nKFCnum3RyHEiteEPNtH6WDoV2vEtoFqfE4LsnyMQzVt3YrYVQeX1ht1V5QzkKeo7hsG64w2",
  "key6": "2BQjg32dhCki163BGNDq24oLcnuSAF1ijz9uLGunJzqekygjRsoJAMxHttnVrPiZsU9Gu5tnWLu2nEisttzSjqdC",
  "key7": "Hv7BhkevjYAq614xt4gectcYGQ6jDjwGbLqfsAfVpYe7RVadqi3591Akjn87E8uWYgZzzuWHtQYqvWMLBv4os7v",
  "key8": "4zdjAs6Qy7WZqf76bFwGmDNn2WgrzpZLuRm1pRqp21uHn8F8CTdsB4ZrAUNgpwhcyWUW8FTrKcYFPkiYALcMixgS",
  "key9": "2ZswdHJYxmvrCULhteXrLrC3c78NYjyctw5Cp7CyRiAPZUci4vrpTJxQ8QCg1hhSogxDwGFPBRgBAhGfYv4mJrte",
  "key10": "3qfPNKNpWMBYfWjyEv7UbM6HthrR6UMhXgMNCbyT5daVXrGUXrrubk9ptXGRJqS4YyC5sARkCmGASbDS9c89V8bd",
  "key11": "3cKxzEHyCwGdJ7bEny1VKf84uNuePfgSCMSr7hwu1ZdEGhwtffu1y2oyyAbPcZAyrK35bLaRccYAAfCMA2kx8UPS",
  "key12": "p1RSSK44A5auRzr8iu7LQ8DLKq2EvwgtpAGiLQ9stLRWie5y3MLnzwahAhKJyRsUiTbGUBDLwUR8vQJdVvnRjhJ",
  "key13": "2FuT16Fzj4VGBz2p8GrWULaKubYgMwgMEBVqpLwfTL2fbg76JYJCznXcnqNs7YQyWjMvs8ujJ4oTQ1oXW9um5ZNo",
  "key14": "5JrqQfTaMgA3CR21SD6LEwHPvhZWLKUMnavTUN7VyLKR4wvRUn4mQf3agfDUA5fQnWg9xXKPzjqt9W8yzUD5aT9",
  "key15": "3UEr8tVRKLVhhwjrmXtcz6qrUNdVqp49DDJ8U7HxNAcJkKyGijw3ghC5iaydraF4a5skiLeTMkprD4Hfx19cDjaz",
  "key16": "3HfM6VYYUbXVdbCndBkjE1gMfppzJy7usK9DZnxzx53xYzDMBVHBdjWpNQGriR3e1otLg6esBQF9ttBKMJ4TqTUL",
  "key17": "25PUvs6jtE5jAGt8HZf9kQcWd9w8Q1BbpXTAXPhrpoZZR3T4YDCzJgCq6NMTdWZj4zuRN5jUkji8CPtYLvkDw9vf",
  "key18": "35tSxL6z9BaTVZuY9A8cqS1WfDtnpgg7WMBry8PVQFCdP6uWWiNVwti7JBCbweo3w547P5E33CSKn76QRUt1TWrt",
  "key19": "5SJCrFivdRjLfa6pZzTRNTbcm4uFEmB6fRUZVaqnidW21DKrvd6Cq1mpKf1DWhEvrGCWgV5oNFQnNq7bBFqnFSAt",
  "key20": "2HUwMw31yRpCeZY5oz9F3DuUKyuMug5QrSQSm4WVuCAMFtUxmEESQqJ9fNXFnsoWW2b8cPEShj2cR6oiXfFvTfL5",
  "key21": "3ddnrZVsyJeFY3D7UQaWrjUp7NK5uqWAGN1CrWkTRgesRAb1Dx2iaUD1DNA2NTBbrEP9LziBLoZSk88TFszLktSz",
  "key22": "2F1r2A5j1t3TUdSA1CmwFBspeFGoy4vrKXRJZs89rk2X6SZbbAPT6cZkR8UcWzkkFZgi6VnB8njBHvXMTLeL3FR2",
  "key23": "24zDu4466RencgNDTJ2C1GFkPGh3qz4ap2uYp9V8thFucTcvMLYvF3vZo8J3TN17kDheZWuVV6r3mg4UyRRN6Drg",
  "key24": "jK79ErRsWkysfqRbehYBCfVDEvE5ofWdjiVTtW4dyaDVB9bx9EPxSVfhs5cnZevjCzKs9krG5LPofKnxpLH2hL1"
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
