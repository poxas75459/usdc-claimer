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
    "jfYkPQ6SmSYNntXNBgqbCBrfch3N6YMBGkmhH8xq4zyu4CKQZkFgymwuWu5uwY3ehM7T3kNJUCfMyWHkcRjzQjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zYNZsZkTGSqcsjeWLFKxFdsbSEDSn5WLYTiJJWHSAZ2v6k85S5j37TbUmvbSC66S3uL3LHnz2NceXJPGSUizaeo",
  "key1": "3KqosX4zLkH3ps9ZutNxdNodd2B2CBcadGrx5G6sLyGmDz6USu8MteSeA8VYLj49tFyGpJaWMvQ1bw85cE6iGC2J",
  "key2": "355amYqhLyrHv41iGjpMKtzqJMLp2RUSoxKKqsHoUJM2ZNAYkLebk2TQuPWYewjBqUfGG1KuvHXv51Zq3H1VxEzr",
  "key3": "55bXtVkJVK5Xf3Nf5RsY9s4S5MkAo7ethaBabaf6u8o4VgPezZQiRi8eUidqAC3Fks7V7zEJ9eJKJDc6TtRo4nxc",
  "key4": "3rMQQxoei6z8RufzEpcyNaUpC6HBwD6JuXKvoppq3LpjFi1seEe4JhvuD1dHzMNkYHcNctTTPLxRyzEHoxizENkK",
  "key5": "5f6QA1Gq9wdoaZMQUQBUu41TjjC4AH3kjjncxR3y32oSjkKuAr9em1iZyA5EdF2yXzP3pYcy96AwtbFspYUnYWbB",
  "key6": "5q5GYpYXw5HjR2saLz443WETzGfvYk3sjhh6D6fnNjnsjDwAyZKPADhcZHkHTpueiCM45MtGmPBp7TEeuwbhNHMG",
  "key7": "2d3AV3gDCuDvLHWXPUipZvwrRYrFD9nLr8py957mFHggSoZ5Xp1mVNu1YuG4Quw2Hg8vo1MsFuh9rhERhC5dtyXm",
  "key8": "54QeNfRiwzwEZBaWDEmnDFyorTM6cTAe2P6JzLhir1S7KbQTp8egfXF28gKUz89mKB9Ukp4g4Q32DhqW24xmyYxD",
  "key9": "GMTp1ZU2pCXxqzt6txtzxedJT2Jx3zUzWkDarWyRtR2hbCdQCaFsPN6gH6g1RMGixpVFkaYh3NqzmecszSKyxfy",
  "key10": "4HLx2qcDhhVh1wGwSRW2m1EVG2cXYeSoUf5pGAK1ShgcTQ1H92YcKrrTNZws8ziDb9LWy8uPpiG2nh4icK3hyXg5",
  "key11": "5X7APTkC53JMBJsfE5sWvvB9vn8UmYE4kvjb2qjT82Zk2PHWfwGefbB5FG8L7JwK9BZLwWQfbRThFF7xXtV8bzNU",
  "key12": "5tMjiSwggvQGdLRyiQpZ6XravvLmKnphDXt8PufMGAAffG94fLa4KuyC5SFjac5jfE1JEMo4wbXWnW9ZsxgPt7Z3",
  "key13": "7Woqbz332LWmDndtyM2MJZnKpSBrp3QYtXbkCCTZtdavvFDE3uc8gDjS3iBD3iTHBNx5Ge7eyfQQC1h9X4vTxB2",
  "key14": "3swkxgFraFgzYMv1NnvZfMDUGbUgoKbBdaVBzyZbLL4fdwt3W4ahK8as3FhvREZ7qRoebssdBJ7V7KCwVAgKQL1f",
  "key15": "4fLtDLz2d1hhnpfgPL1mCcnDmLoEGa7RnyTYPETr8efEchwMuzL5VLPF7HLZvP5cgeBkz3hjFoWzLFru7hHEgjnh",
  "key16": "2cz5dgCCQ7iG96mXrHTMWnRs2JmURw4oc1oPAxTTrax789qGGFftaM7zNfUSDAEszTF1RptprRYGfMmZjRU3xbVR",
  "key17": "5hsidMRviFTcoyFQVuxzuCXaue7QpYAHA3jgYFtCVv1mWzD9Aw6kLojC1WkMNUXW52jpc46Ld1ir7CvGmUukh6uF",
  "key18": "3SkJwsHRdMPdmDPuSuNDRN7EqnHA5jZk1DsahJ4wDExFB2oJkv4wQ9Qh9ZcTN9MerTrgxkN241PK6Qydm8aobqZd",
  "key19": "rsVr2DpNyUFNoBYV3xfWm5zCMbBGpnmb8Nv6en31A4E9ABcrTqKHuQnSkoPVEhLDwZFFvZo3wtPQuc5GJTfbnqD",
  "key20": "2rdfLW1z19Yu5464DawrCQvvN2gxnypxnNZhtEbFDqSFcLxUPv7kTgiGjPvuh5moBykVMywqvnzRbCcqNe6JNYhu",
  "key21": "21cKDMtCVU1GHm7NBLKQ4M82YQX28WCc96AEvhETb99g15T7o82cZ6Chdcz5yEm7iVBoL2FSe3duP6tE5wKyFttM",
  "key22": "4iiwRZ9X6r2X9EsXuXb9pvAH4zXKhfo86qVcQz5NdEmVe99G3RvaCqCATupyJLicPMa5LuBbtpaMSDXoXHs7SGSz",
  "key23": "4Gg3dCwon7hhwWUTkBEpRSBcZpjDC9TFdeH9nBvAToHVR2PdGfopLesGBNJSM8ZgMGKQw3oCtZN7xSbpgecFqxd2",
  "key24": "5U9V6NJKqHnGG73nn9ArHsE5Ld3qEZYXtwkufaXjKwe5NjtZ18btxmk8QRRzU2sqEtBHL6JYjRCY2vtSZS7UkTcx",
  "key25": "2Zpa2Fers8D41epP6mRp8gYwzjvnzm2xM1EpYxxhzFTTZkc844yBoEnWvsYBsFagxnPhGW3ryNAicKEVb7oJ3K8S",
  "key26": "5GfD27HYLyaxRfXPRfZEkHYFosgvCCeiVbKfYEShPYMS5Nui9gE1EMXjdfaQsnmaYqfVRR9kfpS8gQHVxEvzDMkr",
  "key27": "67AapBwbTRzucNqGCAcrYpqHLu2EJafzYfu2qfRhuSKFYgSqLRTHh53Zf5sghFN1XNwXVHEjrhPfL26oEeXzjPRT",
  "key28": "5ZYipro6VJMKceJx5B4RWtwxFDh9h6BUf5tZF9B9mqLsPxF4HUBsjbsp1c4BNveedhFaXWA4mJEDCqVhgf2RwieK",
  "key29": "3BBjUZzPs7TCRhVZZGvyUmcyzsut7XhhHiZuVJSaSmiTAf5koFuNKBAQShhUJkzSVcjCqRkFjW5xBMsjfE74Myuu",
  "key30": "4yR6TVc6GUma53wU8AwRKkktE9Y9bVcCLjpuiCYvefGKC6YEXffhoWNAJhmuwnZLXDyb5hyxxtHRjhWNQ9m5VKUz",
  "key31": "3dmT7ZD3mVnyx7jmhJLFufW8gSbAz1jmvVJyNDMiLe6z2cWmSkq71mSCyxS8ghxM2Y3BhhA3ygfrptpTS3ireEG3",
  "key32": "g6Vu6bcYmhppj7M8SVqLW7qVHh1oVhxyeBzqpBQGfmR8foynM5LPqbWubjALdMaZZ91vaieLTQphArstvLFtD9u",
  "key33": "NKr2EqTQTHjj3HroB8J9HPmqJ8rdqA9n7ivsPpH54BxumB97Z2rr27bhssHdXVuBHkmS9fJs8e2st8HBe9CJ3MJ"
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
