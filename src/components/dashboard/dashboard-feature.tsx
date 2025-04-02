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
    "4opCgSvzr62Cb5FQDq243N4A6uU5aszzBtaKQ3WhW12PPzLMHJfGxhcnWGj3sZK6KTHF2Sr214GKmxe4o5vHY5PP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h4CBcEDFm5NGUqixCSomnRSVnfvJNGD3F5h8UMxgvTpxBvyu4VM2bVy3CsCTKYDQR4B6PKWmGowmWWPLWxSEQfu",
  "key1": "jGxmwzani8MsDyLbMdKdrYffdYSZHNPexsjXpFHfpdTBzgPuEHBZx65kknpeJozaN2mKRj9nBfhNWpaRj43zxwp",
  "key2": "3StFwMJ4PdDntTMtsivdZDSSPccRKazE62iEtjk1C3EYNjjBuvok8m1Fzj5jXUWrN8MJgUuhNmwsaDnmdvv2HMwW",
  "key3": "2b5Pt8re9Eq5PQSZnkSWNDUvGC1AExrpynE8Jn7tffqcwCTkxGdcm5ZXhaMzLth6YnNAJeRNcH49yXESuaPxNTEG",
  "key4": "N9avZyFSKEfJLztCJMHzBb2z93gQcJF7ANHnhnTu6hZoRmseLHqwTidDRtUabRR6zkb9yoZZbNr2iQqhLgdMLTf",
  "key5": "2MxHg1GprsTvH8z1FUV9LbMHdMjrkixYucwAhHeMJDp4yoDPQQsvQbZ7tY5zepbS5PPNvvcgwfnVqXY7PcYgeZn",
  "key6": "4b3XDNPW9ydQax85F5Rz9Mh9yo94E1Xytdoo2qwsjZeWi3gMypkLccfNdb448BqoZzNbGgh7VECnoawRBMse6LnQ",
  "key7": "XkWSJvkHQ31ErvoWNVJSWjgf3AVFq8o9H2qqQpGYT4RWeh3gRMzYxFf9usH7gX2A18DyoiusZwUEaoVArKV5ERz",
  "key8": "5aoCF3ajYbuVXpkbFK3jybQFxRGrMZ1nWffZecPmhiyDJTxCUYpXvTcheTia91ho6iSkLS9RTkoN3vSu3oWqqwJH",
  "key9": "K2x8F2ozTNoD8FbBpuxgfPhPA8PMF2sev4GKg74reCFtrQVdCPQuzKo5MfbJoCBM7aDRfKU37tczHVRDjjGAiqH",
  "key10": "3vJnB5QSQmsjNek4sH5nGMoquqmCdXBhmWsNBZN8exszWiscLTLsCiv982WGhU2WmtFWF4APAVBeMacLXC19NhL8",
  "key11": "2m5t6U7BKBXhXHBFc9JDTdR9QaAz1bnwACFj3ZHNfjX4fgPJycG6TKBqSsE4bEyCmScpeTqCuSG1Hf1rCUWTcWua",
  "key12": "3uDbc4QN2gQN1yYesjNrrLE1VCvWAXsw4KmHs1KzNaMRNK8g8KrpN42C77SjAX232L1vfUGxgpz1zdFhw7uNQKpN",
  "key13": "2EARHSWV3gu6bWnmx2p48amJ3oZxpkCcEABC8aqDW2CTtKZyEp5Du8P83WUkNaTbyXNP7yDEktudQBwrtwvJpBq5",
  "key14": "5PUKsgYZMcuALZtjne7xNx4j8QBcJav12YnpicgNHUB8KEDc86jZU9gETtTXeM3CMf9esGZ54ZsT7bh8xnsbRVqL",
  "key15": "4oVhCfcUNiG7d6dFxea713xQ8dbMCacmXtmib95e3VRvz1UKw4eAcfifQ2hCDfTyAMDvMHh3NSuJKeKLeXB6ESbd",
  "key16": "4yfJN73oUduTj3xmg2dECEyf9FDrjXidjHP9gRAtVDjWp7LjAKLzdgNSfvrCmrZCJRhZPgATj3snh2GHG5NyhBb6",
  "key17": "5UuEYUGHP7RdPZGZuxCeTFPixptRC2q8choVnK6HTiQYQ9qr7VJgj8KqaHfYTatiiLPRT63fWamd9PrnN44Qewjv",
  "key18": "3s6RbtwTGjwQBJfRhDRw6BQg8tmchE7XtXTXzjpfjLwjweXARQqrgY3cjnbDbvqmJ91xU72JXxwDC8iQcMAYjrn9",
  "key19": "4uxVY6JYbw2qDtQSkrr4MnfZ4LZDyL142AZXXvV3LRBinaN6Dcv4jEX88DZv1fidSYWpoYkN21rwfbrXmam4inQG",
  "key20": "NMrjGcRivggeE3YniZPZKwxaG9bn8TMcR42THBGsKUBNomkA3kCmuudRMFQBa44FdNGhKA4oUpn18j75FugMnpC",
  "key21": "2EdsZQpCerPxEevpJMY1NHwgqr5m9nghzFGNAnAi7thHffWs2PKWjgKNJXsbQyvC2CdVdG8cgCBxjvZtWX2dnp66",
  "key22": "i9F9JDXFn1c6sAZsL9UfSYGKAvZSWX6zCMZBL9qNVwfMfUuVPfQMhNbFVEBWTZk59YGE94hNthtJN2ZiFEFU6Fk",
  "key23": "3mJboSJzvF4WtMqopjZcHEPYGrQ6KnNJeeFQv3yaViXALPSwW7dkK3bi9UkaAwYzzNQPbRda7w6sVrpXMv2xMarD",
  "key24": "32JJE8fHZBS6JqC4DygadhVY4dWZBQqX2UmwKmqLbAtbz9rjWbVcjwbUaE98G9aEry8EyzQfVaEUJiCu2JSDVoHo",
  "key25": "bCymac1zmomFT5CpVokduaQGmk9BF7NyVmdTtfJy58AMu2XedzH4yYiFX8MQ1JDKBDy8wqesvrhrEPBzxprfGNh"
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
