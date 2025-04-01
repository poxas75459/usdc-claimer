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
    "2EgoZaihyWVHt2f3kXvTih9VqjYJ3pbD6BjBC99BUeA1wK53EMGZ6qSJ9gWfb1pc4zxXwW2bFaQshX7EzQQkpZfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XeGM7AmUcm9c3f2J3asWK9BBt62nyu1LqQXkGZg8aXqQpucw7dxBqEFYvahWRJSqEJmgoVk9vvJXgZQM1DmK2h4",
  "key1": "P5mJpmnU7UAFCXf3uW3uYLNMc3KccHQcoE2hqBtYz8pdzewpQx8c3GABNLYpkCnabJh5L9jCJ2J3vsG1ZLF5Lxv",
  "key2": "cEY8JyXK3fzSKpkuqAgRT94xsximGjv76rnUVxp3eXvhbcZX6DBvpU1o66uPnGUTskPpU2JDDWKLwCYpvntjRiW",
  "key3": "5Ze4urcDskA22NjQKsvptqKiHVQHo4DSguNmrW5nUesM24a2Q8h2YLHbsAWC2oZQpZuD8cZZqMKAWayzqZ56eL2w",
  "key4": "4haVdDZBjK7NJfvgL7mqxXVDZfmxCmv23fGR9vMFRcZgqDZPM6rRzcRZY6Li1a7yCBPC7oah7hPugevvp5bnXMh4",
  "key5": "hP23GFokFXZDbG3y2G9dS4wVbMqPQirCC2nSpc472uabv9xYr6VnPRapXPvXDRmreQ4WHrSTZiiL8DkQFMFe7zW",
  "key6": "2goN8W6Ew1EPyKfW2u6WkYXSeVkyeiQRVqgHcaG2tieifiK9zWRQED1ofMtZhqEsWiHxC6twyLPnUSfBzohohxpG",
  "key7": "5bNKkCEdvNzyQPuk884Dx3v8bkJJNHhZG3H4Jo7RX8eHXngH1JLD8zFbkKuHMKWgtTnteYnS5nUGU3gQrugnWXpt",
  "key8": "4QDB3J3KbjaarzZNj8ctSAkJaDvFhcw4GtXpLKs7EJ7TQoc8WmfkjJSdCa4GBk3SPHF2iT9Wy1k659sEBjJZzdCP",
  "key9": "57yJikVWMkbo6Xhs3TixiAw8pqnFH2E7ea7LSbe5NUQAZZgBH13a314G3UuckMJw59rsHURnbHsXSK3yHmcvZyeN",
  "key10": "3Gx2jTFEMGaysxaPPLCgA9NVK2WCNdmwEc7sXae6bQFzaCF3qxfS4TN2bUUk6dGNUtwPjvK3XNZBeC9fPYZC9hS2",
  "key11": "3GMG9BduXpKiMqt9b7hC9Y5zUNVuJUu1MxumzTp9Z18TGx6JxcBDpJfQMQ99ZvarojXRRGavsrvouZoqzRgHbzZv",
  "key12": "NcUHC71MJS7d1sQfR43advGc6CkQVbtAbKA1DPHqb8RmtGzjQyuQsb6S5Nr2734MeSm7vnvC1xRyJ7gBs4MneYV",
  "key13": "4UA8ZTYukSMHztUjaLumHj1aJVh9d8HTvXCATvddEMg6wqqGUN6rf51bvpX6hcjCjEpf9QF7BCVQ5kEXEVATGj6n",
  "key14": "3Nnuk8UuxUhB921v8wmfy6ABvsRkgXM3MrPaUZ4BRAu6pdUrnyM46NkKfBe1XJwFKn7vHByJSshnsLsKERPupT58",
  "key15": "3ptMDVot3PXG1uqwgwAgjo64vFejAJr74cAwCjDgLR526pHwqgsXdmrjSDJPixeskfGbwPZpuCCm8a3Z7Ec41cxs",
  "key16": "5fziy1bkpRv5hATz64J2RfUESgAm3owiyfQ7xzRoQ1mzsmBVaXs3GFxFV9gu7N4exDGCewFE7fQ64VrP5LuNpecs",
  "key17": "45o9jXmTFbGmG1XYnZJmnLtRxL2v2nNu51hE3MJuEyeYnCEw2Y6k78sRM9kQ8vgMpT9CLCMaL9Dj2YCbtJLUP4iW",
  "key18": "4vgoxGuDCddiUZ3UELhCKeD77aAr5q9qfVpkc7VSr3BTFeBCCT7TDwSWvmTqWQ4DZF45HsyT7fmCAbZBhGLYrSyz",
  "key19": "26pJDcZg8dezcKNbAwbQwbjtgrDSJNph1TRmJN4WdDjfXDEAJ5C2BEinGpddpsk7i5t8Kh9zvNVEX19EfgC6tR83",
  "key20": "2c3q9noTVa54rqkQ1c4m5WMcAz5oeTm86R5dDmzRcu2mcDy6PuXLenJqxmkFxHAwYBHM6sKd6aQD87W1fjaSQVgz",
  "key21": "vu1x1TVdGbrEMvLXvt2gnsCLpsMAoSHj3EwQ5neDes2p5J1cYLQgapgwLSxmXqyDoUEx8bFmbhbATUhhcMFodud",
  "key22": "5JifSq5J2667fnCFMjckwAw4WmyEiPicTv3SdTb3CqKPBR1Vwn3no4MSCmtab9kLYSmgwPqhtohk9bEeem93Zjte",
  "key23": "56k18UF6k3zyGAvWAHy1zam1tXLpjii7wkiSBJMd2waAh1cjr9oSDgQrmgf4StjXPa4eUCREjmb99tiLdj2oB8AA",
  "key24": "3FjbjXLqyzgYhiaE5oREEz3uT5GYFUdTMK2ddmKnzAboiNHjfhXWxRZYzbVmgWsQZge8dQYRu6ag7y1e5Nky48dN",
  "key25": "5sPodWx5HA6f6nzJCSrFzXycPYUUi4cackbVEwJeYF8Q5Kd29NC3adowNuhvYGJLLYWpprrS8G6kNyRxTw9QW7Zs",
  "key26": "5pnECHJ8hku16B8WXT2wB6SwLWrpoYEMFj1vZqf4bbTWspK4kzCY5FH8cMghQiFjdG1DMdCC2pcj2SaeEN36sN2S"
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
