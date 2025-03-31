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
    "tSUa6dGLiSU77rJgrMPLazDswjEoLojVh2igf8qXNF9hCsqKmxJDN3PXCQYnJX8oGJdCnA4WZ8iXF3KiERvGxbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Wk7iA4UiUNFyeQUch7yq2xAnoHPfSZ949m59HdfgFhHP2SCjpdqLuKbLX3LRuEwteiJYeH5LWSUwH3cbcdxQqL",
  "key1": "BNF4CUviMWk865D4Tf8N7iPbKGLRnegjumP58bpSGgmPAp3TzmCWnFBZY2uGvp9df4rZHbKktsEGayTr3g7Jc3J",
  "key2": "gv9hgityq7tqcpb9NatFEpwHYa7uXeEUXtUbcXEtVmEr6az7UPKBkU1ZS8YjLam8BefBpKQUZamVAMsZusDgLpV",
  "key3": "2k2u2DMDebrmDvhSoxoibqDoqXZcDK2yaaFnCw6KQJMsMYiSgvjYNrz61vZJTQNW4QwzgkuJ7izSnCvvkEtqSQ6k",
  "key4": "4FXDAMUHwTSnfVoPLm7kuHTmY7q1GWqwrEp9oVMWoNjPhex7mQFpdp2XTCiSv54uUsvQUb4fDXGu1n4CcbYZKMBM",
  "key5": "5Bgqbwrc5Xb7QN6xiZLQNkm9gvN3WYxFmX9zyRfEqzFwPaZbQVNkckFLfprYRJ4gZBd88jGPo9qXb8Sb4QZ1ka3m",
  "key6": "3MzSw62E7kbCJ23m6WBdqfSLrEhqKw9TkcUnhgXiGgeNtrJPgZEjZezZpAQU2ijMc3EyaJhCm5YkBhV3sBNgZ7n3",
  "key7": "2HW4vetBTpP2mYumWu3QhMbENfzb8f5iWdELrrbqZhrXGPB2bMkodE7ancAXQ5iWG51M3aCfTVKkcsgnZaN1LzC",
  "key8": "2ro5a7BKHW5enSwUy13sYmvV5BJPjFTWMNcc1HQUKzco1JB956Fm7UCipPsMmdvM6aRswb5tmrZFy9rSWhAJpbjW",
  "key9": "4KCWkbGzk5YGULis9jKyBPiau4c1CkXU4u9Hwh7aQh9tB5mke4DwwKoHquZmNk3DZkZrfZZBQabK3df3WmZT1Mj",
  "key10": "3vNoByEMzTqNQnmV5KBD8dJRavmoSvEvwD3L2fNJMCWjkv1mmjTT7VvVmUyf3pZoexTfT6sxmvVpRiptaWjH2j3i",
  "key11": "J5UNrRcpZQiN8MB2WyUFv5DpgnbZGB7bqkeuRJe3rhCqV22ZGKWwc5hQ348pg2biKcsD5658a9pvNEaUsE5cW2L",
  "key12": "2sy5UsQLmZmvkawtyqrtd9CZ9XpCYFntrtpuhLx1hxjScVxFeV3eCfoVkYUggJ89AQGUgzd1Ar4rDeNALNrEZuY8",
  "key13": "5DqZ5xAEmTo5XeC6vdDP3qKWumdFsWzvJMGBiRJXWeb6QGrCD7LLvvNfm4xxrWVWFD3RTe17vX2pX1ayTLmoePw7",
  "key14": "4qtcj4Qtq81xkzPYsGxaTodHMu7ZCtgB4GHueoz7A4bRFFCsMehehoC3W2GKRb8UN7UQLwvfgCfjwiHLDux8or43",
  "key15": "3uRvgeSXWy8hteYDQrnYVPY5SLUyMuM2sL1U3K3fSeU1qyChF2z3bErLyNWsuK4BiewdbNztMvqgu3TDUeYm6Znc",
  "key16": "29ZNTjHKMe2NmyTCCzKcVpvwURgSpNBQHj4SuDvhmuxnfMrUr9CW6aWNBirzGcumY5Eoei7vQQvDNZph6bjpf5g4",
  "key17": "57AhqpFyETMq2d2r79dxZKkh92Br8tReT2ogqBSMht7q3vwvxhbtStLf77LJxaSELcx6ccWfgfP4QJfs3pRYM9Z8",
  "key18": "5UN5oZQEZiNG39dkSR3dS4JHDKqmymJNPWZp8D9mQp3r1YNPVRPEdQpdyHXCDeMGWyJmfYu8yjzpMrs26SKDyFDf",
  "key19": "3Ks4trhL6CbZWEDMp4yY7jy6m1NpKC3DQFbi4ZjCpF2HJ1UKZ6pPKfBs8hDk5bpsdKo5h2GsuEbruEuMkYyn7PjG",
  "key20": "4f8mQyqgSLyHQkZ7PJo8mVeQe2aq9mksRFkhBHnP4cUq3kQhEarhFzMoqAX5QgVCnaq6pCcRauwS1ffQZtkSEpbZ",
  "key21": "za3769jkqrMgAQQBkD8gnHJcbLLy4zgbdmkMUr9RKtfQEjF1kUaVXXE7NtaQxofb5dmzKzqhZamimtPiAmAi1FZ",
  "key22": "2tnf1pwLGGRbFdLzADNLJTcAze8BU7xZG4QhTTZwBNNS2JefWRzZFTVnoyGaccsVFDcwhF7AE6JxLVc5wBF7od8G",
  "key23": "5q45nkm19rW95B3NaKaQK1SFN7bKBKv6CJUYPu6DBAt9CiMWGGjgRR1rth47yiJFBj8mpS8XobkMw3s3ZL2UFKVm",
  "key24": "5WF3b7afhrbKXVWMZBoyWHqFcRkMqy3fjSwdzP3V5EdcdebcyxH9ALFohM3KDfHLursrDUWBR6gBn6wcT3D77Dz6",
  "key25": "2BrzLfRfaXC8pbTyCXSyY2vULwrdoXbApwZzWYe4mXjVvw2j6GdUPAjzDmneY7RB2dsHmrEM6km2tvDgyHMpeitt",
  "key26": "3nU4ri63kwSXiMoP4BZz7Z7kYnwkZKa1n45X7FiBZQgPZ5XDKpa9wvSjNxdv27Y81d4nqppxvP1Dh7ZuKX4c7AXn",
  "key27": "2YpFFT1c5tpJu6yaMYP9mooQbzTG7RHXiaYozybNGH5AuHGxrBp7Wdw3zQf4Mq9CT5zPDnS3NYdiEoapHAc89gNE",
  "key28": "3T77Q42M2G8vUwjgR4orht6quV32Emqz1sRvpVgGsQhopr2sdRYoq52kQyHVoMb4baJiJPVLHgVGCETAonJEGBub",
  "key29": "3gyQKXh4AVaicnFE6viVS3MpAtCHFPA6e2Q1tttzqMKxsLrasGciF6Towgq1XQtpEcTMESZyZd18n6fzrsgvHSS8",
  "key30": "431fJS1XQ8xwPgDoUWz4vjv6PmxJcrer2nH3HaKmnCG6W7BJZHPvy4yqzJgjAMYKbiDZERRmsPLxtyisJ7xw218f",
  "key31": "57qJts8FAZgRozA6t6YJLBZkZUkaJhNJur3dy3bPZf46mqaYigDqM74SNfYzwu3gUibJqU1Z416XnQS9uki2Q5Fe",
  "key32": "4gWCHJ1PdRGNh7iMUCsJV9MdVZUiZS2M3i9sEnE6CBpv5xtkQkfFByrtRYxvUYF1mgj6pmQaAz9jhpCeM6imicoo"
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
