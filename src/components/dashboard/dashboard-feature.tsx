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
    "3NYqwHm9t7JiskStLQGgqMMjFbJS5itiuto5hNCZy66jWemL8nBmFNR7QMx88cEA1KCqCLL8QRxGZ9H1nATaqzpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sjn9sazsLeuiPmS7smSG5gKrYSZDoYhM5wDvfmrG3DM35F2NacGwZHpvGaqLtXQtEJAKQKPhx2ypohKwWnGi1Wt",
  "key1": "3RkKVq8XA73Lq6t2BU4k5JYyQAiQ1itb8B7mYVR7GjM3ugb6hme78hBRzHpFhBzpPQG6TsgqpjzZTHQR2rTY6iso",
  "key2": "QW3LDgbKPjThgX5Nnaup8ZL2c6Pw3o4tUgVFSq4xUoa8RQVhE2eKiaWtHKf9R49qh3okkexMiqCSeStW8NvqZnR",
  "key3": "5ws7Td7b9VNsqn8gNndHJKNv5Un9apjDDTpJHMshfiJ3EyJsy8XYp5A3iNFLHcgjNNiPfxCnL9enJxXJueugTNEF",
  "key4": "2JPfg5isPT2uAvCjCKQ3W9PKY41m7BNkMEEEwR923k6VV3C93csdmizMHctyKC2vZcHyrhz5KHb4a1fTD6hm6nGk",
  "key5": "1U7Q8CA84NdoCNto91Fuuw2RKifzpxNy6hoL8tD7RCDKbzSTEsL6ffw3YhzqqK9mtNFj9AbjsKx6F9YfFwc3DM2",
  "key6": "m6fV2qDDH4GF4cWEUBQYVti9RF8CqoCJijjDJtrJk21VJrQw9e3fQMSH5JvubnQsYDVv7C7rpSy66omt5zXineK",
  "key7": "2Zbsemfuoom7Cthv56xh1r5GHaF29Mqe7DAhj69Ap14ep1XaEwBnLJw3Fj32VUywXwL4PbSGBFS5DQM3cXV7kY5z",
  "key8": "RVT4mvtC2XcXTVbaUhSEjCeqweFdMc1gibDyL6TyK8iE5maCHiafrYbc6M8MSWXe71hcXCfSqu1DqrTqqpnEciZ",
  "key9": "4uyXwo7Xdvy7mWtXos7uXGqoE3GG8GiNNKSiHzb8fCPM5cs3MJdMYQGnXs2fNLzmEC44aogChVq2nRCr9gAnYC4e",
  "key10": "4qzpB1sM6n8u2KoPCiSrn8woDjcxoEEPz6MafZxbwfnN8qgnvhDxCb37Fg9da8ZKUuMbXABdpfPyT8Ka8tezH5Qk",
  "key11": "3VRXKjDUV5ugddcWcYyLkdpvswoJMHZ24r6FVfi6HDL8tyQxrB2Mz7DV8MBkVVDy13vrE9UHRGXmAX55L9H1kHdv",
  "key12": "48ntQGYkx7CkPUYi2xwQXqC9z5meaYjVhnoZvKRNiTAEGji5h1hEeHrEH4WCvKiY23vFQqVwpEHWXd1RMZKMyRCE",
  "key13": "4XA6Kwh1qTfdwfTX2cF91xvwn3Vt5tvVN1Bf8Pq1k3N3t8BHDWheUA1LJBjiniD5EK7gtm5UgTNimWP386Fw8cxh",
  "key14": "4AJp465oxCEnboY2iwLMWZvkc7Q82aJAf8vb8qy9F3vZaaJ3hcBAJ9SFrQrv27wwyx23GhT78qhqjrEDaB2oAAA7",
  "key15": "RgnfihpeL3na8733e3Pv3qwV6CHU7x6y5DGaeF4JW9P9wscGz7akUaWJ4XxndCiQaq8rnQCpYWwZvagcQbigRZD",
  "key16": "2Nrhrck1u53CQVvv23J9KWxxGVLrqpwbTn3XvucNfj4Xe8ZUurphcTRMx7ZgfQVc5y2UEkskCPmYt2DH651dzKno",
  "key17": "5LVWfjhRoPNk9ry7EjKvP7TQT626CqQiM632FBGaNe5t4ffThRDUxJbLkXcfTu5yjnKqRn92zKwEPMPxkQ8mqdTJ",
  "key18": "5uoYCTUgvyS8rK4wVbeH4oC1smiaxPdQqZL963FkF9VG5MStrb2CSFuZUdbLyRb7tVxhETi7UaFPatad3PJRL6W6",
  "key19": "2iJL9MnkrS9ZhQgcNqA1fNeL7R9kbMakucjisbPLJeFCXcf2mizF9MyuUecoHA6qfocsD2VFG6bacFEWBH37a2KW",
  "key20": "5meLSyrFQSXkDqbL98c96aQs2NyGSe6CJyKg6ncdWRSwyEokCBETphoNBins1EnfE7xFTL6W6aZKobL5x4bLizrn",
  "key21": "2fFa9y67pUNiNJknZxXFPuUZhJAhufX3VdnDdyNYGH5VjHr9iP2pT7x1kPZjKNfWbJLB6Zm2j6YbmMcG4x8CDed2",
  "key22": "5Nip9mC9UpmBhPrNaABhhohCc91dL3pVe7WbDMavGAHuGA9VpqDsAruvtLU6QkvJZ4XBceUnWtqQtWMw4QxLqm2m",
  "key23": "ztHu9HtNfsMVCAjgDgJeyeCqQxrU7TgZP49A2exSEPedn816revUzXsb1jGgANfonzLSp8TmXioPC4HFhYzHphA",
  "key24": "5AfD8YtFs8qHLYHnDGszK2uFZydZEFatPY76aSMnzJM3QYqYQmdtLzquCTza2rXzQb3K9rqsTigF5zeg6ZZ2NY5n",
  "key25": "3JrGcbYdtjyB4yNhwdN7FQNcvp6KAfKJBkbYeDK8zzR5dGHvrZc2nkVCX971e9LckXzBT4JU3mmmcqHvsHxh5BJC",
  "key26": "5AvFxQWuNRbxhu6ZiW4TxEKYPXgrotfee63Z7m2km5QxQKHtsboRJF9VZpF6AXX8rBtEk8hjTDLwXsgRd8HGfAc2"
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
