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
    "gm4BYsPTPNES3AitvMic4fJPuhuzYhxFuHgQ145b6oNGqhJCrDvu9MXuTk2yHTieboHGH2fcQekYr7fgZBq2hjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FqbnbkNNWtJS9VUsanvCKeDn1VVDt17yP5uBFsPVX3F7rDqP8QEwkJ3CSHKGvKqfuaUdmpPqnvSrwpQvKrTQ8CE",
  "key1": "2GDE7SkZGuykzLz6XnuJzaAuDB8G7eYyg3xiQrPmpkQqmynwwzCnKkumV3J6TqxRw8fj7yzPvvXYRHWCF2tNZFLe",
  "key2": "2zXpskmN2ydANETeFC4JBG8CWZUftNccJQndNzHm3mA3xLgABqYDpq4eRowQhVa3U728qAKr9QvjHvMv4suttZen",
  "key3": "2odZ6LcjFKcyvk88AgYP6f41CWtAcEBTDSGniQdMGVriNdsCF9RHPnSUuaxFJoPuzuJGuiLVShCXH9oG8s6jEg3u",
  "key4": "3KidsGUtwqMXsYQMEPqmmM8cYs9pHxuRUw2rgt8AzsqQD9ow417Gf18fxotJJdusMM7GFcKzJ5cX1Tkxd2NwGdzY",
  "key5": "3czY8d1aa6WAbpUXrqfcbJRNGH2U5c8zGV1sJ8FFEmS42fsKq2NWRcT6vdRr7LsTGALw3wbxAdcV2kh5AvB9mgT7",
  "key6": "2zXiHgkuyDnK1PjCqWdGEsCqfDtLw7vAaQMhB69L9jrGi1PBhxNjzp2N9PWB19q62PH6LjaFLn4T8okNi8kWDP4H",
  "key7": "5xDjXUueeTQKaazqQp7JGNiaEAthVvWeeubd4UNQGC9GYu8Qzbmdj3BPmGB6v6m6wzfDqerLQMjjokNnv4qQpZ38",
  "key8": "3HRjEKTWBmULju9aEkjDTUxvEqxC9BshQVJ82MLd1VyRD5oWTQuP7H2rANYBTpsNMJFdfYcvxrPSvxC3ZjX4BJfY",
  "key9": "4M13AC8m9Nnor59JVojoYZ2hFGtqXAiYDboTXtPZMsAKoHfF1s1ZwYthqu6me8me83kNhK3gFQv23nkUGL7Jb5Ui",
  "key10": "5mBS9ujBjehCayrQfoPz4jbxk8nZbovsQjugeiaUefZUrJBF3uhtsPpS1dLDvFhio8QZiQFP5ApjoepLpY7zbvjf",
  "key11": "5oGuG3ztPYtss7kxkNXY4avQapmidqZ5z9ZKoRYJwznWruXp76pmED122WNydsLuYQHN53GBr8ZNgxLtvBF7LGHf",
  "key12": "2vBZjiKz8S3bUn5WxvwYMpSS4XvXaWh5GJzUvnaMJpVmSbTVJQZKqPzGrcz1YAMxdWsWxdgW8RRVnkMp9tr8K1ZA",
  "key13": "2Jr4YHdxjFfh2TLXcxxMhMfwNukp9oeTymdPk5fqcyvhSKNTBiptmczqLFUxCQwzbisn6bcaBgRZ2zSnZMV37it7",
  "key14": "Texuqq94z8P3HsxePCZyrxwWbm5FJdJGqx1JgE64B8BuqhLMuqnmfZy9wszCXrk8c2bfsdsnHzo938Rp1qg9Nmi",
  "key15": "4AC6m6dQx3TyjYkxiCiSeuH2TNbc3C2gJhYJUFRr7UUFjJmPMNywnWPWwvSvAsoH7pBk3XAYVR194JK9r9FenXEJ",
  "key16": "4CQomoDcMEs2VP4hixEFkzygrz3JexHQyxWSHS6nR3zAxDgnXH36nAWo4rgcXLQfWMji51zkSA64vVszdwDwMz5E",
  "key17": "2MoVVparUq3PwE8tjiog4pYN7DhGxtgLbZPSHxEQMxHRWXTe61mqoqGJe7u4ubX3uui9yRQ1dqQcDm2gKPMXteMB",
  "key18": "4yXf3iGnNrVYXP58LJ3XtMNoekHhTbfdGJELLDASg217PxPiC5zQiShoPbX95iDRegVXPfiE7iAyt4LTpPf5tB3W",
  "key19": "3t5Qd9zj6dsJzGtPmhfwPXfR8CsYAXqSZCYa9ydT15JSQrh5fLMzrAvbD2p2FHGmeTGfjShmMUB2S622fjMsFxoE",
  "key20": "28DNcFgNndWzdayTzCtPnbRQwnRomLeWYu4mdw7kGQdjyt7awahEFZhcLre4tFc1dNy7ZFsAzXsCZaWS4DWbyP3N",
  "key21": "29EsVWUDA61Qe7DST7xWphsEh4oKd7DHt9zRMdrAPZV2d8TnpatbxZFLxvccZjSEh8zLHyBEnmqbRAZVaBd818NG",
  "key22": "4iJN156rywRQzjHAxXDyuU8bb686EhzMPaKC7AspkRgoLJBixbA9Egw7Vnusxdn1BRfWBwTySFyutkgogyo8rPut",
  "key23": "2ndjTh9kDpQuk9fuLBdbbhupxnR93J2MzNVQbBjLBbuRXhNyiQVKiHFmxAR8mMVsP8dHhLVfkUU8YRg4aAJ4TG8b",
  "key24": "FnufM8iV5PfVLB8Rm65G1pQEnoccBWEGqkaRx9GTVsHdVsACocx2iZg74BwtGwxCSUBQRAqH4W1tiFAwuEiD1vY",
  "key25": "3BjvmCXr3irp1wktq4UqpuRmgVFa5jG3LumQhvRUiGKYBqSp69y2fnNPAmZA3oa9gQxE3fjJLpSoB3p9Usc8qdRX",
  "key26": "mayiZRmXucveYtTZzyxbRMgQgr1SpjfdAARadtXeL6JmjgkMF5jxDyMLfErQgYv1dHswZsBpNEe38DhWrf1zU2m",
  "key27": "4LZQjVCqRZV38ocvnnv9t54S1diNWecEVBTh4t5VBgwhtd8naeNWApgeZKJkXcubpn3kSYNRcAEXGveaJwaAbvve",
  "key28": "52BEdJnrZjHv4rkBQuz83hQneUzFKmGrhg9kVLUXPPbV2McorLXYz53EN4ninDZ7zkjTNs4xjB9D1VnuM1nXjuoV",
  "key29": "2yFJ1MC2vx8CCH1tBebuKWNdtKTKYnzihsfktAGHjwcCgiXCJVL2VA44QZZUzDr5PydUNVGqxfxj89SkwP2NjQMK",
  "key30": "4LW5guFoaiGZLfctK727eTuHjaq1gGpYRhKb9x6bXbzTGrTaMdK2utTj6ubTBSiGfUvuY8SeJk2PbHxhjrJvJZKQ",
  "key31": "5i7zQEVaa4njhUmc6kVnqUxcEicqVkUA3g8eoNZkm7zdukTXEFQY1r6FGKWv8wNx2Wb7ZPSgGmoUnwa3SUs8qyUM",
  "key32": "nvrKNuEaTUKXeAwJvkCvCGuMFcCmovQJaaca668FwJ4tfN8eiZTT4kFdCy3xMqSPaPL48hmswVHeoqfvMKnt3MS",
  "key33": "2x4ZkyF6YwsGsFTdtPBuqSHVtSsK1GMebLmDHT6nGcsKxhWZ7LJhjZY7y8XYFgma1FCRVLbbTEkZaXSDDYgmmbTY",
  "key34": "3uZkKojGSspjuw7pVtzRRkqWkhoLLqbgrbsE9am6UdFUwnG9zrrJGJ2pk7eryk7vfhUgN871vz4hxsC6nGyinE1Z",
  "key35": "4FnMqQ6cnxg3VakvrNjgD5tC3b8iGh4F6zA4oPxviqqFxVEGNJTaCwqDzsS9RvgvjwYzcY8zxxfCP1i3dDH783nv",
  "key36": "3yMUF6sgXSUWgpxf4dixWWxPtzzYD1aDbt4cLPaq4QxFL6drPCucwaU4hurMaDWzN3Ff3YYdj5puCLvrapa82VcS"
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
