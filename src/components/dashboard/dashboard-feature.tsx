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
    "2Uq2mHvKh22QFMAhWP6HytmYN2ceYeyaQCtG12EMoAT5Nb9XrT2TkahkRCF5CUitLj44621MPxhPsux32bPiFXC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2634cNZed4uyDESCMsQpCwNNkYGD3odF75TzkNwVdpYxxW3hdmyQh5edD1uytCtdPFLedgfFMakk5P1qUkjNrQ51",
  "key1": "4D29EGqsXuPExVYz9k7rw6Fe5Am5X9fbvDVLr3nN2HMmrRmSSesFWNBMhe9F826WznoBKtg7GmXwfB57BDtHnD89",
  "key2": "4k89YyqvHjGDWuLgq3Prz11QYq715riEFaPge9jC7xrFsHekQB1CjiyDndHDugbTrKaG55HjEr8pdAp42vAqmiJD",
  "key3": "4CkXAdJXu4KHtrd7eA7Afq9put1ygXs59qC6ARMrrxPm1fcF8aXn97J849vJmTSj1DKWrn6duNmCCA7597qX9JgE",
  "key4": "3PjBispMWxhsykjoJbGc4zKtKAc43GtPXFT2dKxy6ftj5D3Ttg2nnx1Jq6yfeDGgWPcBRLajcm4hpL8vj7J5waQm",
  "key5": "4tCXPDu3EYLJRipE1JFKnBmG78CoqJnyVXf6KKfK58HdeHpPxp8Ftwogp7P6jmmdGUohZ5h1CWLQwe4HHAWLzFz2",
  "key6": "4N8df1uHCQW4TGwSsNGqo69RRzZ9zE7VoAoe5t4PtyXsPJXjk3xBvkYzwt1pRkpQ42rZzG1VgPnZwgWJyyG8dGyP",
  "key7": "5t2VeCKu51sr91kZ2yhwA1ZAH5D99XEwSitp9qZDQu1d5SbjmVUpJNskWsFRF1zBuco7d4VPQaSdNGcFq8LbUkF9",
  "key8": "2yeJphvouJhDCNcaNEKkb8UrDwdW82qM1NK6Z8ckUtGkUPzbyUC8xSXwK4RPP4LsrccBgPWnTPqvCAo47Y7zZQUG",
  "key9": "2GehNNJji4HRcdVa4rkVy1EgRQ7cJTGgy8txNxXgToaXBpSqbSKB33Ni3CggtRJQ2Ce1aw2qWdxSv9XAxQpY1GMf",
  "key10": "4dtQBWK7LZYmawjg6XSUNm3WZhH29CGMMfDyZEqTSo5zFXvYvnsRnfnYQM3YRLraPv6859ZZeyYTVZ7f3XzvJp4f",
  "key11": "2NQx4CusXkho5vVtutJyk8kYGFmcGYUfNCARzzSq92saRVnn8uMJc7Jhh2kkqTj38fKXLiQiYxUJ2VqYEtZjK2uk",
  "key12": "5qM4NnzWTVucPbKXNZ2AthrC6dDE2vRZqCGdZozCmUADsxRULkMFSb1FHx2CDeCn9Arc8KG7rMa8nic9hB8rWrm8",
  "key13": "43pQfwTTyLJr5pECCsbfxUARSfK2EVtskm3nJV2zUUnDZXxD6tRpK5w9L8WBV8sTQ2AveKoZMymGbEQCts6VTyGZ",
  "key14": "LNngTVPgdNwVwtAib8YkHbkgyeGKGnfStPYCXdNKXqSaz7BKE7E5EgakJV5B6MLjRQNDxUxUA98c872DCucNFvv",
  "key15": "3PC5DNehKTvH9HTMTynDSpGKdviRHMi96i2emKeDV7ALX71QskVxAp7AyqYFMoMBgGV7ZyWhtwUJuJff9gzsyYEP",
  "key16": "5AG3BQ4QczWVtwAnMaYLLGTk7Dd1TKKj8hh6sXnWEbZ9gNRWRM15VzGQmsXdQuYv5HCGmCaLAimEC6zL6kpb5pH9",
  "key17": "4dTriGtCCo4oukSQ6F2we6mBceJB46PN4yksCSHjs68XVFkQu7g2sbCMWZkMBBH4WQBt3AF9vYX8Yk6o2R4VK4cU",
  "key18": "2gkB7bF7YtqQuFsBfyx45ThsC17KQ8tJ8kBvULsnJ9FG7uAgDy7QNsiEKn7gmP61Soj96FVmtNJqHjdL5WjXvrbK",
  "key19": "5zRZeLLBaLT9gxw4cMjfzX1X3x3s81Yu9iSAAwgVEwfBVwXLdoDxfa5vvaNuJugr31FhrRXcr5xCRTuXS6pccVhU",
  "key20": "5DXBdH77Jo1mJ36eoTHhp1TT6p2jpfVEirgxwAhyy9qmCL6pXKpt7RruqYHP8g15Qng6ySN17kjEBMe7frUo8K6k",
  "key21": "2kuYaa73veLQP1f59GhYkQ2PFsHyGie9fx2JKWmBQ5sEqAB6WwrhW2GbMiVg4XVRd8n3QSwgsnk7G2eTKurLEj9e",
  "key22": "3zA8iUYroLeUQMr9vPPGR1faXb5BEj8bJPdyguT4yXu7Mr7Tui99d9CXxRspuLFVvfwaKoVK1L3zEdzUTuXhUgny",
  "key23": "5kjvu8roQRycXiB29DKF957meLW5Dk3mdtfiuSAD22MCmnqvcRW7hT9fsCSy2P4pQpg8Rv9Cw37BstNNiJaxkCzn",
  "key24": "ZVnXWdLS8s5RYCJqBv5s7wEUPmwgXNKKMpd6gNncqGCVU3a2xvsHpcN2YwZNbVKisEYDoQc58Q9eKojoGF3Gh42"
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
