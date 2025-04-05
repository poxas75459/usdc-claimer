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
    "2iN8ziq1km8iJ612CYhpZCNUfYNyciF61aRgPY3wun9T56pNpyqoga9aDMbvq7cWRcrtDdk4e2nhT4pMYmp3BynN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iYQgPWHsdSLeiKCjt6cwZ8STZXCDnUxwiGFNbK7mqYZdMpiHgd2t4Ta1sC92uMwCFoLubrrKTzwRRDSJ33JQiRg",
  "key1": "5qU9sDq9RKEStGop4DjGRd6N6r44ZZqkB8aaqeambFs1D5cfFhgneSCAuMc6sF83fQxh6aatiQJFnSMuCyv1NgEe",
  "key2": "4MW3XcWF2MbU6D2tAmRnBunQbGGgqLTRRPixmYBxXNEJbCdbkkeGXNuFcU5V5MkSYvyGR5djoqPYXhqUhRfMoPjC",
  "key3": "5jZnyUi9XWZbWge4pg7FxFHVFEdcZ3c4FcoEDoXpajoBM7MMSABBQqGv26BsyhDPYMmyjSUdtFK6AmrjRgfu9wfB",
  "key4": "4KVHWzNPevn1VGRcFxcT1NWWBNq1WMs5UNNjEbaEaNvhp9PmCprkACqMLgLMx4XZB2sxWSVHzJbJhajqLz88cooG",
  "key5": "5MLXWvcEYfkK7wXQG2Nr1ay9iUA6JKe7wRcabdaskENwLkgCta13Sn4hmdZzSL2zDCkpVCkWnFrgxEN8AabjEwZY",
  "key6": "3XMgFACQCyLRfsqbkDC56bmeBMWz7MjJWFm8Wcp5UjRkUeAm9AkGRewYzyvtKrLCCt7o9CbojTvmUUkh8H38K5ao",
  "key7": "3WScpRRazGd7NL76xyTGmseSxFWajaAQL3nu5quyrazgoHt4J2xEHuJqFNrHY3d9vYY8VDv3CGiC1RPUd3281Vh6",
  "key8": "4L8xVXA5gVg2Ws4k5sET6MajBZPt45My3VhvPgTLkzs3D6cRChuqxEC3TTbeHLeundgNMxjwhRSyo1WdePUJKupJ",
  "key9": "3WKT1Fq4gq8dWAfK2obR2fAqMUB2aq4A4TgfdwgvHVyiCFP2w3UJeCUk6ii4umJUeKaxYs3KxARDzMfZaNbPQiUU",
  "key10": "4LeUs6nM2XR68Cwt49EuDvrF6xpzZ1mKVQKeuouGYxNhzuWNDT6zi8vDny3BREJHTuNo6Gwu7uPWsrpmLyDQaebV",
  "key11": "4BFmJS9Vz11PX8RRawQw9jcLurHcJfvaMaaeQvw8FeUCZZhtffNzCyzWn4HswxU4kPN9oTtE1w3vDKsAi9cshDkC",
  "key12": "3o13GXjnEfLtk54NThG7RMEWPBHhMEGnCBW9Rz1nE3QsqkuFTqrJWfdULYTWdhzgTp3mF2yTQwDnxngy2JAN4oWr",
  "key13": "LVnhYG2ZogPPbg9BgRmcwgG2epFLEVVHhcgeSkviNXJT3w55zRTchFVL5XAdfDPprg2wZqAeLUqvgsf5T8atZFU",
  "key14": "5EZ6xtZo5mnC8r8gUsK7cTFqxPx6wZPihmifDMuX7Bp68VeQHr2D6cMDcXAP4GTnT3Z6baBXMueMQbDqaBZwTiWZ",
  "key15": "9fxP3WobWTsF6BR2c5gtNS8iMNPPsE6STVFvnBksqe8wQCfi4rt9TBD5cX4SPTDoiLTo5yK8xg3WpXMaZ4bAJeL",
  "key16": "4Kds98Go1yK488A4tAJLpNupPrrVjLtXD8VgtMyTfeSf89XqGU7ovm6XcVtafZ6RGVMujmXj9di6teZzDMiJWhvS",
  "key17": "5aw6qhzUsP7LbYMrYZTXPQLpAsUZb2ryJLAx3xMvmWeTm6d3UQ9i33PEYu9bffpaaaSR8GVe1QY3AZ5vQJDTfJG",
  "key18": "N23WcUZXXEbaPD6tDLK3fuX4ccUbJd5gcPE9m2QY7p96V7D4yLFMhcusGhm3eNKTkrwwxSiNakNqLasfax9xDsH",
  "key19": "2rfppkcYFKEUxTy1CnnvjCpa1N8nqSyx3YDYGbANuhzVYpVb78QbaseKs2hGdcJS16gKDCdhfgpSrtCmbX3dj2HH",
  "key20": "4MvEBNEnDfnE7PWjtHejkbezKpf9ANjoJSPgVpaMwDukxWdhTFYw8BD2YvMtiG75eLcNQoLWsYkYzkRu6y3wWhyN",
  "key21": "3VvocR3i3nTiZh1vU4QXgXSnyG3pcC1cmENhCxkCN9NPVqgn5BUciBRKogrQ1aCuo9ZfhHMaSCCM6NhR8fCzn224",
  "key22": "ibbq8YcuH2W1U8bEzTEUN5rcE4294QRQPPGAL4FiZ6mjdodxhtCSVr1AKzq3W4MrkHG1db3RVTfHcWauBj4r1RV",
  "key23": "Rd92FvN5nyXytcJqYUZQfKAPuWNSWeVvbpYhUydGbiwpyTA8dcv7NpcSHdtBmgWhkXnokjuf8pAiZEiA4mMR7PU",
  "key24": "4tgfst7FdEUaoef2x62GX21HtfJWVV4X8xa3LWG7krVDakS1p6bgcpwzuyLynnL8ePCHFob1P4Jm2JpVJPEPppDu",
  "key25": "5nEZAmirguipQRjgioPnd8HckSVGMogSgSRKC5jVL6Thkjiu3WLhQrWsgjeBhpZ3EDTqJdH1BakFnniQR37aKyZc",
  "key26": "4254pV79hmdxfdUdjsmrzp9u7hg1UWuA9g6yAF4YXh5raoVEFhJpHvtASWs1FKZvXtGUBosVhVqpK716tC4fL5D7",
  "key27": "2A9dSzkqFj6FXwomob8V76fLb6qvEZ8LeLn2HMPVzcUvCzeSadvaVvw3aFh2NkqDvJfwn6pEPVpVbcNCc4oWwCQb",
  "key28": "3VeDFwEYztydher178W3DeYXnpNm83dR9Kd5zYS6sfDyCH5DwPzwZC2NGLsHLNgiBZeSpjPXKxAzXBPBevRLCcZf",
  "key29": "3p2LLaMmj1KvkeB5xWdHBXmddosz4aea8AWuRcwZuNCb2taM82yfiLTcD8k58qkpMaRku4BU7gE7SzzS1tvu742E",
  "key30": "5RzbvfmTqEJenYttRu3JC5hvSUNidUGNL5XYhqzbv2xf35oJ4LxGeEPCChLBhvS9A2xAb5cJ1WXme6JgcoB8TyRs"
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
