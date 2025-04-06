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
    "SJdAPw9fgJ6Vi2fH3Lc5VgPJoQuQ9zGFDuXfxXFjFu9WnBztcUnSrFbfw5fJLnWMXHV3HJUUV6rLRqfqSW7s9zt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cRa3qPcgwLYCd1sPC59jvjjyoYhcZyZ8ws5UPvt5qMVZtfREFTmH368GBTZt6k6yhbjrVVX2H6bn3ihF5c284sb",
  "key1": "4XqkP7amc8KLyscPvKfEWJ2t5ueY6v8yz3iPb6M91hsZPXsKJNrNUwuAP3vvbY8N8FqDe9xLtVYi66gQ5qXeqKw8",
  "key2": "5skr2HoakLCSPCbxnFbQJMqePzuw76rvwk3ZTxeHMRZWTBHYz7sDKpeZxWUAXpDCkhJS2YbeHbtsKgPkoamTJGsF",
  "key3": "4pTxwnhNWyiPgNgAXjPrLJYKa4KHBTGwnPjfHttKZMvhFnRsLZ5cXUeMk11UCQXcHymPWrVfeeyExXSMP3HmLESd",
  "key4": "3guxdHTStkg9MVvRH243JeGjLEKAVDv5oRwHmc4fGunWuFXRr4MB9rntRzkXUdZySBY2B8Nwf5VfyJYS8jSZ7Tkg",
  "key5": "4vJf9eiD6yy5FMkevuzDe5uowHPegAymBWEBZy2bzXAJCyXc57mDSwTvFPzpN4RtpTPqESowkpyCnviaJ7foQPYL",
  "key6": "54EghECcAt5H2LtEH2v4tT3Xop1hjMzaU2ciGVgsEWXUj1kU1jFTRiCAokHBR3S9nFwqsazoCQKvWmjUjRyabT5r",
  "key7": "vVxNrTtFNY3BQ65dwZyNvBoYixexZkSmHaRBEaE1vg9zdxpBiXjWWRaxQ6yaX7iJ9WvQ2zpd6V4PEimZFpHa9nN",
  "key8": "5KXcWLzHv71ngV4kd6T3XH4WdNfJt2retKmwnEpBhfUZa432H6xcFqWqb6eJkaohBMoGLHomWkybNEBEuz9gYz6r",
  "key9": "4Hp2fxUAEZff2VJy75vumiMXspprh3tcNiqwDr8x27ABJiFhe5BLdq7BR9kpHCowCQVBgYTF5KbqGZFf6xh7cYjB",
  "key10": "321xdq8xhiUsfW6Xyot1CXrQy9V2hFmzZP9PWjwaCAt8bov56vLEyUNqPJ8k9kE6wsWRbQPoaXtYx9PawiY2pixt",
  "key11": "2sZ3uzQajjdmj7WMxRHS315aNcThxaWRHbLauMSAVH3cYkr249vSvSxPHVBoWeeTGaYgHEpXsy6e2c41DFzBFo3Z",
  "key12": "4qpr5o9qLcy1We8dWcMQMekxDNfspsmFjLtLNM4bEoC6yYMNmyCo4xTW2YyyVuVmCjF41c5w1S9WyiWq989d67FJ",
  "key13": "2iPvpmy3VRxDNAGrPrLfwEwi8VGFjoxNKZRJQeN3REV9xNKAMt4Dt798B4WwQbbESk1ksUWvJMUEynGAMg3T74Jq",
  "key14": "VvcKPwePuQwetNArxb25DdBDPQBUwLZqttL8DtxW3Kk6EQNMNwmAbCmAJ8oGuqvFYfB4qV2VVouSoogMdUJWGwN",
  "key15": "2kQ6kNrz7HqkVL4wydTsTeHxLshJA84R34tqyzSRXWULoWe6Kx9xsh28B8fburGPMX5bTyRXoah5r6o3ekjrDvhR",
  "key16": "3cZ5Nki1bAWAFDEjXRqyEtHuetrSHRiYRrpsuJk2L3tzS2acpwsmqLtbXpwcdPLDp85huJ1owhY3948pKrExrkJE",
  "key17": "5kd8sQjdeCmBYPBEapXMqYK4h46LWPvhu5ZhBnj7CwwknwuHYuJt6MdDKD9MWQm7fqroBSEXJGbdBxPSpZjPABSP",
  "key18": "2UWXR9PX2CcP9zxzLXfkNpvZ8bGsejbvMrzZ7CDVP8dRiRTRCdYbjLk3Zqr6ey3m5ijCPm2uPuKZP3Fkrb1iCkJN",
  "key19": "3ViHTsSyb8nJqnxKFMo5jyiLepVYkrQ54PAazZSFs7qx794GDtZT1CGyFEcda68WqYtHmwqpbKWGb9j8QVKoNYtc",
  "key20": "3gnH2ZxC247ufJdU314BkHCfrbG64YMCbxFPzfNRJRh7CvKdTPFo5THsYarL2FZ9d7zD3HdcMf6R517fb2KdqjPx",
  "key21": "3qqdpGzgvvNPFzbLNzCumr389uRErrUypaWTofwT3ZRSUGL4Z9C2vZSVgzTsFmqhrLL2By7ERy7QNp5RydMZgo1m",
  "key22": "2MMsGiLtxmHpuN73WTCCCXDWBvN9VCRGnUHhST7GjaPGUaXPvxAVSEGT6qYfjzsywxvphkHNBA1Ao5YFembo4q9f",
  "key23": "CKfdegfMRixVNhTJ5aYpF25GU1wsS6Ya97XBA8piXPjiTeHn9rh6rMMWrEJbhcU15fTuckYyXAPWyTDQsmkPgtb",
  "key24": "DvdWAYkMUdzQgt6uxcb2MLXRRHaS2CoEYpxL8GUU84V4cbWQtR8hTgNgL23nFoQE3BMhrn6VZkUUty78Y5Rb8RE",
  "key25": "4nsZhoDzsoUS17pxkmW3u7xNdpes5ZVFnxVMBTiirkGRBH5AUJwyzxiWa7CGR72iMrV5875891FDxoBxaMBuQqke",
  "key26": "4mhWhGtMvzgRC8rwNo1maGKziQMhrUrWwUPub17hm5zAjJuQ3twrccBkEkt9g3hmwgyAt4WDXBRswGnHEV55nre9",
  "key27": "bKHst4bpXugwGXM2Ns59byZA4cJts8oYKKzbwQLngxthhR2s8uXPB7muNecEjfKqUQnseBCrKknrwoHCX1DnPK7",
  "key28": "g6jViCW1vNXVqp4YJ99oehjKBT84VLvLycso8uqegGDwwwkNrqhHLHzfVMEvLuHAqiQ1LNZLzSLsam6hNy9CgVB",
  "key29": "3yEe9eBQVYnL6xo6qUso8aXvGvRaBgk87kEMc4fuSzztoQeXwTQtR6QmYkxHhUzEB5zT2pWVkGm79btVswf4vt4g",
  "key30": "5kcvT38W3V5AHawYnALKENCb3JkeYsZi1rWJC74bjyeJkLY3Y9oukSuvk4GVr2KrB1YvnifKGJJYLts8YAvpC6XF",
  "key31": "5sZHs2R8XM63rKQKCgww1rcrzr69C8GXGoxJHd9yfEgECaJofkLcxm7mupnvJc8g6zJGEUwsiZ5kau7kPoBaNVBB",
  "key32": "4oEu8MfJrNxfDq8fGNoPUUwbtY9WM5iBhugFW9iZcpkB3sYdsqa5DLPYvcjBZVBdYWfRx1Z5K9wttSd9C3ViygUo",
  "key33": "5e6Q9H3PKVq121pW8LKaoiQTYKpL8PzNCHVNcnNzpEmvjLeVv44HXZM2P4bM7r759x27ySiWReVfozqGmjWz6pJ9",
  "key34": "5CFFg1BKCQ1BEy3FzQ51BT92SR7Hd3aJvNnwrDCJ6K5bSrwhYZpevb5f1nGgFoKc2BisGPGoqcu7upcQNFu6SME",
  "key35": "2vsdJzpEZNuH9QH3DDAEVTxJKxauffjaMXQBByngoCvVwVJCBZPtKkiWcHxuLSUWbakAfT7LzYrt5ytfotz1p2kY",
  "key36": "cZ5EwJQxrqjqbxmV3SsJdGdmjYxJEcYCaec4d1uyKmzLWx2MmXx6hSnEAYKsVE9f5vpwcRnREswjwnY79W7Yave",
  "key37": "5QsQyPopE5B2dMmBj4EzGwhdKDZSYQySMGEhCna1AieBPxbZKizK1caYNZzXZgu6t9bhv12dUK6bX6LS67XTJi9o",
  "key38": "TtNjABMgBX3gVb7BxgLgPWAhpKJa9KkGiYAx6Mmk1gSs4DqAECjDP3HrA722gfZyn8q6S747d1k8EyHYBdq8p3f",
  "key39": "5hiLCXiP271onFFmhQf9BgU7gdHkhEsgtha9Q8MrKMfXWppJCbMAvQoZeiKEHsVsZqQ3G9ZsZuzfsPLovAmADSUu"
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
