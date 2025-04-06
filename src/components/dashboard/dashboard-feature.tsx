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
    "3HXPFGET6VpwpFSBijZW6kUjs8P5eUTGkMzjc2Afwq3R7pM9WzxbbbSEVXdJ13nvqYXAvXgUKGT3v15nk6w3Jcf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RdKrDCgRJU35cXQw4tPZJn2MDNWf14G7JCgZRPXR1BCE41Zxp7FWBcodWJjyvXvj5GAoCxZz3JY8rPXfHFdNPHm",
  "key1": "5Y7y5YLeANjHTBvnRitxfZmw2pDbyJtejVkUBCyq858CuqyTmtpf42AYeavLSgzL9k2D2GvuZJUtXHHmF1rACAph",
  "key2": "4V699poYhxbzThjtbFTPaDMYuYiqiHYY4qXFyZZFJ8CfJ2Rk9p6CHUMvXPoPcin6BpfvSfNk3ikdmi3jfytXhRyJ",
  "key3": "5AhaUmHzTRc7hqTM1D4fxa6PCrMM6jGg6NqSNrLbgCziUxzKLVniEZWd4ShCb8oRC3SeeS9x7FXGTm7GvmuMH1vA",
  "key4": "2HGjZAX49z2yDWbzfon4tTxiPvC4ecTw3abRFJEDonkYGLTt9oMUJSS4nw8QNnbE6sZfeALgZd1r8JYjmpbNBYLz",
  "key5": "3ZwGK8LMxed1VZVD3JADBffV2pCTDJ9VHRPXpVKEVWLu6xAswzjVNki51uHZu6XrGFZiNqJ2b8AsaTwrhed5NydB",
  "key6": "5shrnzJyzwa6AkSUv8ZNiZThhKufuhE7FpBsTiNm6KVBZFEmnSabbWDQKZvK8g1zgEnpseWJ9XTRcKuoMsBjtaNM",
  "key7": "5M9RDYqSFeq2Yv3EBBgiMLvYedz1rFQssJpxXWv9vh34kViSEw7MkRVSQrZTtC55g4eyokbQdcookoY4NNYWNQnv",
  "key8": "33gKJ7syjzMD11MwLzeXcdM7VYBjEpWZQxsLH5BNoJPfTFKyCfmiw1gcbgwuNG78HxAxELVUWXetPLppjra6BH9m",
  "key9": "rJ2AvbntYu9rhFtw65mTfLo8bPxXieAF9nK6aqk52EVHPoCbHHrhDXwusQVPQRWNZ7jqtrEDD5LXVRH6Fdr4h4R",
  "key10": "4hjDmzUssVAQX72KLJQbBmq6eD9nEhqXPDQac4u2KqT6LYBfU7fnwZSPE4tn7DwMzvQscpHUsHGuYwEUCE3sMbYz",
  "key11": "S9WCETUZWE3PXftuTc7sJ4xeAHKEEE7SJDpP3zCfis1ZkURKwYj3FYgkLA1H5kRnaMPjHsu31P7dzmwzMBSAYaK",
  "key12": "23V26hWNmHTc6D8LPdMXse3NTk45RrkjWVSG9KaapqEdckoMUSrWJ8bvPvmiWuL4Ztop5Afcn4LYVgTLvuXS8vtu",
  "key13": "48zhjv9v94Xyf6nGQnQxeCSscCbdYukMsNtcDtvENnWEY1DWFXa5LJHbQNuRFqU33sLsQP9qCHSZUuVr3bsKTP4x",
  "key14": "5mHk98XYp6Aq4z5b8q4JVoa8DtaVEvvvwdXMd49xcLqM3KxkbqUbbRZokSpFnMYL5zwttPEXdxGSiJTGegiJkPk",
  "key15": "2RKPVMVZhxbdFa5AgZWb18MjRBPgrzpjjNuX1YDwSg6BCkpDKkcGtsX5iQcfkfNJWSTr8VSjZv2DShJqBBSJTbxZ",
  "key16": "4axBFvE2obnoGTUxvTpLw8ouipydvb436rAgbQ8uPCyFAdAw1R9ZdoVAPrQAjtNjzS1Yrag9r8vxo6ZwjXRX3FWy",
  "key17": "3wD5Pq4AkmC9DK7KQvxRHKp4jb8V9ZFj4kasUeCpT4GDtenTUHYqYvKoUsKqcpXT7g8DavbRNRtbTjtppizGZpgg",
  "key18": "D6R4VivDDn6RTjiy5XLDCN9EcHHhWWZH7hBRAQNsBNNZ4gZjscmspvjMpmQfauNSKys2feBTe4futC9rShq6Uuw",
  "key19": "3MxkxM3WdERX5MmZNRXjudfaQqNfEuY7dfDb9GmksabphECVs2t7ehHgokGa9rppAUGtWzNu44wN1rm4kDprTNaf",
  "key20": "497n6S6bVnTrUuDdLGuFfYjzekEg35v9HyYiF46d32emDVNsPwzZDnaA1LPthntryeAJj2fVqbCJLLXyxZ6zS8iN",
  "key21": "236ALXVQBVFKP2CUvQJrWpsguf9dPWEe2PkoEc4KSY5ssNDGK6Atzzb8go3yTjmB8yYnfsXn2N7DCDCLLW3ai8Js",
  "key22": "QE2k1mQUiGaZJyTA33ant47iDYxN8z7syuJfAcwmazYFbjP6Ygvh9eumn1GsTiyq87E6NmJCQZJgm2bxseHRTzK",
  "key23": "2YGTgnM23aRV7NC7MSe1ksyqHqc94B7BRrfg8Nva1krjAX8LNRCBfNuFKKgv8NeZxdXP3ghonv6GU26MLgczvjAT",
  "key24": "2wb92v8khWGZJEqW7yrPa1bvwZVDBBEi49FV8YFyecRwPsnCtzxuzwxN1vXbgH21Lau16B28oFEVvLjm99J7NSPE",
  "key25": "meBKJ9Xzihjak8SxHpVoi9TVPLmjkNwbH1Ai78Y2nGwYnWqsfm4x7DCfS9MmBbcq86qTK3za1KfAswfgASwMx2z",
  "key26": "PjteFiRbWqDxe2Mepg8LV8eqLpvqomxdiRc1MEU1gS8hdy39XPRG62UExFPpovGjQQvAkn16XsMVWzDLvfzUQQY",
  "key27": "2v16jWAkF2bwC43s6TTusG6mhXofrV4Gpk5jckoxLaDqoXprX19iHastmhKPtJm9kpev6ZKRFXa3qp93JHdUhLS1",
  "key28": "5SBehGXQfXgLVxVNPnKj6NVZdkrr8VSMQmmcAbbWDHTWP5Zys5hmzhNz4LoJy6KVFhSWCsksCqHC5j6hEcKM6j2d",
  "key29": "1233mhKaJkCbcMaCiuS6K93aFYfbkuxSNfJqZxZ7ZBBULqS5gZLbyoo5ihurBoKLJwiiHfUam27XYdjiBqXVkYMD",
  "key30": "5w6DzydrP568prrkGQbrhMc3BhUVt8yEbmMWjM5Goa83tzoy7oYdWG8hHJn2wxT1VTYty1U8fiumw4Lv8rqwHcJV",
  "key31": "3BHoQLpXHUijtNzWDB1FKWRjDv5hhEnfH5cf36syAqvF291kVy1wCDL8Ya638uWJr757K1Y3p2rbJNF5LYV4mHWX",
  "key32": "5EmwviQNDXVHHNY2f4pz87JL9YMUYsrYemTCwwnXTUf9286CPKfzYcHFaab2b37R4z9PqdPPS46sxa3T2eMz1b8Y",
  "key33": "3MHoo2K2UQauR1ADk7kWyDTdLHdGZk7vD3x2mSrtGFLW5g4FnvfRq1SJCvyoBZb6GVWcXmtEwYp9CXFttYezSk6j",
  "key34": "5rZCQNAhnMz2rF2yqyj2hca2uhBp2XHjRMCAJH8o3YPstdtu75JaqSVCqahPs7wgvZyAUJAJCJbWXDvxupZ57p2W",
  "key35": "5wrDxX6ShvjVZzTXR9wUtz1aandtxCS3LCaSHtxBfBmcBcExDuzdEiEGxtyBWiBARuKz2XiqR3snd8X7KcYQAoSu",
  "key36": "36ibWgTWW3M9qoQFy2AYaBgxtGbWrm7etrjqpv8B4Aq3mZhU7rukpgGQXC5Do895wgkkD87LkQUop5QyqPVgFpu8"
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
