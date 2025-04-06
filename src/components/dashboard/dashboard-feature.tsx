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
    "2wFPqjUpb3f55r6DDQESHV7MktRurhtfZFSkWvNDEvnXnRHwMqN1xSJCnCZQcwKHN9xhoBfpJTRbia2P1samaPmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tFGCLtzjgipn2kM88VX6Hzv6tgmZQb9fyhMmpzGgEfYU6WZzVWpWfbBWqSua87JJMknc3KBeApD7vpYeab88KCW",
  "key1": "2ZXoLQ42gxWDBgi94RPGP9MyfYV8o5Eu13TBs4ZeXHmQzXRMb6KurnZwwvCYEFd4Nd5hnEj5efkP3GvkcuYKBByZ",
  "key2": "5VksR82Qufnfqcmibz3VwTHySF9rP1w2UeK4W2Z56yUR9okkNGwQcyEvpzaTPDb1mMDsAeWsXGJMuHf15TSJ9jkK",
  "key3": "SD7HLNzzPGUzZgbbjGURB1ZhkMptAdqmL9WL34gcEKdF9fVNZV42pYNkgip7twFMXUESSLJtEPabqQe8uaHnjz6",
  "key4": "44wFmuJNnUhQgxBgVmNgRhDstAXmwawRpmN6wNj8PTntoGZSXUYyrZmPmgKJjZdz4kYNnQk7LhPS7dNR6DNbeD1B",
  "key5": "m5nPGVTdPH6W8geugniAvq81d5jZvz6xzhKk6n5SpP2rLri2njHV7Q7CDQ4UyGf4y1PSKVU7BiSqSGXVS18H3Dh",
  "key6": "3uyA25CKFF7nB6nzmRukeHwYCYf4mpWvAaNsUPxL4cqW9KVtPqn9F5jP4oimS59J1DP2SJzL1q5zLweNKH6y2Yke",
  "key7": "3gjH3UFXaD6AxgoUns3w3uEr2XAoQ4SkWtKmV5xQeJtCCrd6Er7YQEBRbnCSm3wo4aT9oKCqcC852yF9uSVmKWw5",
  "key8": "3YtjfFXdZbpBNY2KpdRoBgUqSDxthcjTVjwetGdwWLpCzJpTBvzabRkBhqVCDa6WL1m7GS7S22cGhyovFVNNiZrs",
  "key9": "4LJJD5JZs8sBeesiNvSzuZ8egYLb2kVqY9vAgxoQEG3KVVz97c6BRJYKdr3LyF7tYoMr2Qwx2cbyaqbUMjTVqm8J",
  "key10": "2FcSXkxWBxbWNHY9cJ3xWj2WkzNusuMwtRr2H2RwahyS2ycX5Rg4ARNhfsADmV4zD5EULRHgBtySUBNDxrhrJY7P",
  "key11": "4dnnQ2g4KBWG4srhEVQrpXoueBq63Pk4kn6JnTp8JDj1MjS97Dn6w4iGU5dcjVsNpVzkGAR5ensn8RxRgyc8fEGM",
  "key12": "4kNu37ChVGFs3AeTpeyg7ADzN3QBCWJ2g9SHvJKxrjTTwpS6pwiXCeTVPTLxSstHeM6mf9bxir5smViAh7UVsZuE",
  "key13": "4rQvTaoHhqvv3Z2fBAfaz2nec8XrChQaYvaqsAt5gW2WckiZhD37Fc3EmQJ7vBCs2CvhXkcxKh8hunjjdxCsX8La",
  "key14": "3cAVQdoCdXsVbvWc4z1MUW52j7b4f5aZpVNw1B6436t7A6aWpx4bHJ8XpKkJxdGoBcPPKyh5hgdvCx4Z2X6Az8F9",
  "key15": "4gkboG2eG3iAhTK4skhHtZPdBsEiNGhshGNYy5zhTdJMvurujvT5iiwtxk6wCJoWUZbH4XzyFB2DfaYXg8ad5FHp",
  "key16": "y6ZmW6M5tGTRFRA8JKvVA6LALxrjANaKSoxURC1GdCbqqmuBWHG1DNCPpPmsqCXJmfPq22zfxBEwNAYaNwNw4Vo",
  "key17": "GhLdvfUY7WnpXdNDdL58LHRkQbUKe7n13ZBN3Ur5JEQy7batJ5m6NJjHvvCUR42y9dYQKoo7vZeKnKHtZhnQTjY",
  "key18": "5KH3XqgeWbJ2Noig35cXH6v1vL4FJUJnxuUCXQykPdbAATnneLqKNtKKpWoMQaQC8qHewwYomY75d6UjKDB4AHsW",
  "key19": "2VnnZqfkdPsJxpzXz3Qx3vVbdki52XpoPmgoy6vNjuFFDR4aZK9nFa97kMDCFUQvdAPDt5TEHbV2TvdvRWnEwS42",
  "key20": "3MAQ9MG4AFgR5MUpHfKiAf52SLnazaNtgyU4egz6gPorsDZTLNmP6pz17anbePfAGSi5kmDF9yM2grWMPxfsNFm",
  "key21": "3PUuS99ywXZbH28CtMRt2SXwKY2zHFmZxVNdkozPWdKVD8M8E2mpqcFGbEwCiEEAHw6mJmoKqaFMVnn94D73G2qX",
  "key22": "5bsRbvACDXmkvcvuimoiGjgi9eiMs4cQhjJaQr5Th4ZwPohTciWLiCi2uMKHdijzKKDh5YH9YVpkDMZtm1Tuk4Yv",
  "key23": "31RfP4264BNRU4YZ7Gd85YJTYjymfXQfdkpL4igzgV427LJ58SsWLkmqYDk4erSbB1xePpVvW3CR3UDd5KF2VmFz",
  "key24": "53Y4Eh42h2jM5L3GdXvGhPxidXzvAdP23xzHXLhYCVKDq9UzQPomHXhhwe22zNqp39P3CUBTtMTLqkc7MEcxFsWR",
  "key25": "4pvKwiXXyneQXvxxZHhp2BMXsuQ7p4QD3B3JJunEuRT6K2m1UMrrpYmveGStomoWq2wFCtqbB5sxQoR1491z1P6L",
  "key26": "5ierTZKyptf1y6xNF2sgLYBCA1i37HhK21yH1gXMtYF3HYBYosh75dzH8o61H1HD8t7Np5CcSoFNjBhenuZhDGk9",
  "key27": "FajR2kDcLM7RQaT23vEc9gCpdxs8N5QXDXUYhPrr32mfkLYGwro9kDR9YstduRMvEAvry97ruZYLoJU42voa2rP",
  "key28": "5Qrtc5QhknbJjGSh9f1gHUySuAGL7W6Rp7YU1RopJTLBNfmuJ42XzHcJ8GUDDHKejz4BCs6EiZySdCSbsu5TmTxN",
  "key29": "5ZprevRFGDrC4rmKUyM8Rqr1kRYnEZBV19un4EzUHw8293AgvPZe1syCMjwAXFg6m4GuknXWQtHNDYrVPxfTYt3v",
  "key30": "3qxpxkSa5XzfdfDfmfKJJPmnUrw3QpqdQrzKtBqUAgdfQotQsFmX5z36b4ndMAWg8ausc6N4mCztACA2J4ki6kEp",
  "key31": "3swRvT2RqFunNsE9uhpA3W83cKNycTy2nk7M9c8xB9FyqDHuARx2R2RBK33Gtp2DJ7kBnaTbsm7rMKniEKepdvxq",
  "key32": "3ZT1UYoYxFSV58qTe9QRRDu4fNrWvpfnttrBRfmYDPxf7FVKB88Jm7yHKmn53rQG59K67CkPmqGCCz3fc3vnvr1X",
  "key33": "4JnMkMPxuvboUoGeBYk23esKBfLhUFvzFhuydWaGoStRzncUVzkR2ANosfhDx9RZkzaMD5Yt6YE1sw4nowEdRiYj",
  "key34": "51TYxtc54rYV4SXfQzRKeCZBxncgeiWxCbUXNYAo44Kg4hGbyBY6CRhcDg7nsDYydB3EBdUoV8bni5RfdZYySRr2",
  "key35": "56dDrQEmBgudyi3GNtHKqyUt5wJ76zW6FQjeMDc1F9kSpiZN2DMc8iLwxrCSPmLg5DhHyfX1Dwkg6McwPSQ4NwTN",
  "key36": "2MUzWXsvLjNFMGjwnsXTtpYRnAPUQxsVDPkqznyc9qJ37sSUcutcn5L9wpKkrkeMjAhyNT9R7ebJKnFQXc6b6nWD",
  "key37": "4KGFxKNQpyvCUPYyPb3FfNdrwP6u93DC12pyxVjYUwEBGGSpTNikvFfjcknBG9P2sutAn3Vie1XLNb3La2LVCzyh"
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
