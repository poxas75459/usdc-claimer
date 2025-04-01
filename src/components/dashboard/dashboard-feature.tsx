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
    "3EQBCSj9j4noxLkBEfshACAiLGV9TUqA4L42Em3djm1tbkAGSpqtgwmbggE5m6MGBJAiVHiUSvUZ9Nu8d43FHmAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fXzaCVi8mYNBKVczGUJgG8hMyRENni3ukkwJAfpvsNec8R6HXz8rwW7hihwtKUwup1p726jXQ3t2gRmd9ByH9Sj",
  "key1": "3vgeBpJotGLGyW5LA9KGQkJRz9Sc9jkoKC97r6AnsnZ7E4H6LmyrQeZnv9FtxYHLUm1xHdP1Ua6x9SiPE8fcbgHM",
  "key2": "5HLmZQzRKPCWm1cjWHfabr8LCwiunrT849AHhjMF8zJVxeGyXb6xUztqZNoZoYpDxbG9NQJdFsJTpfeK8MRGCHJF",
  "key3": "4h645XLTrmNR6929DGkAAQkwfTM3PHy3iMWDeUCF2DvEC9B8rFBmX8RrcvfG7899WdwM2xVkCF7EFesRbUCMqZ3n",
  "key4": "2K48T9AVdhjRBweixV1QExQw39U2cNsLkuWAa1b5zGsWEkXLbp2zSWDmUGv1tBDcgpr1mTEauQj6FWm1xa2BNvDk",
  "key5": "5Z2Lm7cJTvJ8ZwggghPgG7kkc6wrP8KECycNuxy4FWSZtCxeuSVJYMiWx4aWX7viDhFexj1E6Dda8S85Uw3yWhq7",
  "key6": "3r9VCDPuoZkRJXhCFDZdkp5ysNqJK73rtPUUBTT6F1PYuesM9PBiadsM7wz8Ndv2drWFvLwWRB84yNX3Tjcum4Vo",
  "key7": "2N9cmaf1Y1YiDvchiauLHGhkWKHzf75nxS1aXHgYDhqcoVKC4HDHPXdk1CQGS8pyiYPpwc5PArEnvzC43reVQJ5B",
  "key8": "3NAhsei8NPVcdtzJpBZnoE1RrtGk9RJi3kPVAVrabmQSHtjBYdZZubxfxQ5Vo8J36dMdCqPqsFVvJ6PmMj56ghU",
  "key9": "3XKyGJqz3ZNPVcFvDjXCsKUxKUnz5iPLJenbkbu7b82CVoYVq15MkXpDBW2zNKxmB7k4KKMnoZE4R2Dwi9yrZucx",
  "key10": "4XZGVKiLyAFzFJkw1dC4AmYxjSPFMijJMHdLKMsHp5t1bbxJaoybLrevDitmFpWEFup2M1LsHZiHPwe75EdBrhUJ",
  "key11": "4atPMfs2z2H4SKDom4Go1iaQschJYwNJeSYCkeRZahudW7jpw5Y8jTmj5NcmW72gowjg5GHHKbCmDsCmVMDoWKRd",
  "key12": "4Rqv5EyyrgcGUrXP2s4aiU6vh12Ez7x5bqapmX16ou2DnMfz7XvE3tnd85v2iXH8JcsZxAuXSmSWa9XQ32nxWsu4",
  "key13": "3hu2FC4xEgWnbvKHQ75KX7EvB7AyYQkQkhauQXqmscy7qUNjkgJjRVkvSxuCgy5gFBK4mGM18vgdQSing3XMpnDi",
  "key14": "5tqDhX7JiFqkWNe6hVAir3n2qoBjb1jfGmQ7h8YTkg9TpsNScXQ2vKzx6puserXanWik63ouZMe4taTSzjqDJMpw",
  "key15": "4qv74XG4d2jH1AHoPtE1uVeGAEHLkFA2TZx5nKPntTu27bdeGDxWkd4zVuGnERNTzexqNHBhWG2hwqhLyuAsph17",
  "key16": "4or4ucU8s2AnE9mLL9N4KyqZqbwfcNqCg24YKq2tvCi4PFvjbnUw2UdNW3iNfE2J6fVS3GWPgzkseShh1A1wQ4yp",
  "key17": "3XTvo5kqtC7CBc8fFqcQ3JiAmUdekUweNBVyd6K1sVtcjN2vqT5FknMuURoW9n1sdVNu9qyeUc6Ai8v623YCVtxH",
  "key18": "5rPtTGzCVAD1gUB29wA6rzJc3MTp5c6tNEsz4Dxe4jJAGHsreXS8tbnQzrdBe7zQcrjBtfSMbpHCMDEs7TnzJWgK",
  "key19": "3yBaL4MJWQDvxngSehx9XtYJuwvyUcrC5jY9pwsFqkHqC37XoEa2n2tR8i1RQTfTRnfuJhTevfWp9Bmsrf7S85dL",
  "key20": "5mxEXZZNR94i6UHmpwwDP9kL8fx5NXwQyAaMhMZ2SFvZF3bs7jw8ZoL6LjmEZktqhyGS3bgRWk2k5iLhZ2PGupBg",
  "key21": "2NKpk2jf4TjEXYNHkmkBhzwyVpeTc471ipGW6xNVR4uv7G6JWdSwgMEEtEgjPvmG1bQHYPkEhamgVpoNsDiqBQKd",
  "key22": "4UzHFov4QGsALawVhZ54k4PHtWG7GXBcEMs3K3TxYPp9KAmHiUg6asVu93oqoey9vNnbuLkktZeomGSWy7EUu4zY",
  "key23": "2Z3SWKxd52GgKeGcb3z7KMsQ4qEhFq5YKAEu8SJaiDymH9cuHsFyG6KQryLkFK9KW71CH53TpDhiJ9rMFQdE6CrC",
  "key24": "2qvN4T24eQ818HYq2i53pg2ZxrDgVC2gQbJ69G3PRP8o6sim5PJog5tpcP5yhXS4t6mq2cBTJDZPWM5AtbDhdhQ1",
  "key25": "25FRga92WNd9wmWycjareaUBvkWfhGddTJTQcLtXoNtCaZ7NVSnwQHpQnrbR9H1JJQvNHdewJd97KcvRiFsPMChw",
  "key26": "47fJmawBmDXuo72xhzg5dTV9agecK5HFPynT5tjVRxairEvGZfruZLqU7icTndVRsoGrzmgdwWxyN2XQVi3CZzAy",
  "key27": "2E9YQsSob69MSF4WXy4QsgRKqz1vnmmvGU9HBYjeg5UzbMA5Lvw3B3FpXe7kbN5fYd7YHcV4T2FbjiJyQopsfQfC",
  "key28": "23mh4VHV1LJCUU5PzPtTU2EbVvHniqx8xkaT9qSLykP67xhdLjaS9StLfRihJxhgiytBAJFb9kULJRGEKbQoQ7RR",
  "key29": "51y5MKxKai4VecxWV2Rg1P6kTQmkobPPZa71Rpwt7VZ3PgrXLS49ubohsYJvkRewwns2Ed33qkFQfgzoREqhLRx1",
  "key30": "5NBFvVS9NqHmax1taT3nmFpNTA1voTCW2DHTdELgFoAnAUv4w6PwEEYUeGY4AmM7X6Pv7UQ4XxgfC7RLNB9KbCtS",
  "key31": "3qViHcVW5fLomMN3NYAne5pkdHZAkGGDKtaNuramjVG1dYnAPnL3biFW73rC8TPReVy2WFPZUQWAsfcdUUTvjbPU",
  "key32": "5Xbe8nRHLRneB3PXWEJ2LeVz3DeRLd1hjhZyrHymzJkPVYbYUWVvfPiQE3gEZwNvPRcsy8hrQ2M9xz1nLxT84fG1"
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
