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
    "4vi9WuNbR1c4RhTNRWbYeWvK3JQHwfeVBLtbmLJPzaHdyxWdYwapaH6QpYYgtuB3y6FiF7kstMmXdKYNNhd8dTt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vBUGfnQQjxsgK3cYTExnX4vfUTi7tKYwRydWjtx4An1h9uwrSZA4jGY7tgRCWbeLatMmtbTxpUSmP7TmRkivat4",
  "key1": "27EycLGgKcjsQWAjNJH7CFwnmsz7BqNpyNfNJTMCa7NbkGsG5LbdTkipS1vQ6yX4gFrvFj78ejRfa3h7t5BST395",
  "key2": "5uN8gMz31QhYZvKqZcjTqkpcBkGFUENvUPVfiAxiUE2YF1nLbEWtKXQkwDRrNZS2dnC1UJa7DcVW5h8yQBK182rA",
  "key3": "5EXeJQRczJu33B6GbctasfHPVDJcginQjMtcdNpFbNi4fUZZh86gPjd7D7uexvg2PxgmahBDkJWJLnUtANm1RaMF",
  "key4": "2oVULdaXif4zxV2QXrNhAh7gL9VubPbWq9ePbKcyXjhQkYjrx4dxZQKEz9FXbkUKKEwBkmmyLRispEG2QGTLQsMo",
  "key5": "5HuqWpWjQLLdtMFnVnP3CaRmCDH4mTi5wKnz5zzZLeDbvJuTAtPJ4htW7Pnqimhdxv7g4595w3uwLZ26NG2wYLgS",
  "key6": "j52KC5k3JzJPETXuR5ZWhftqiGZe4Aih3v2JTp8R5dRNNQjmTTajEoZYHCdLqjuMnfLBB7DZqN7CLkaNN7p2Ewu",
  "key7": "5Xy1xugKsooDqjcF5V3T6jnnv7E8Tz7hf1unezmLvpTHwqPFaV3ioQjV8DdZKDENW4TYsoRr9tZRJh2FYWfgEQDK",
  "key8": "3BeWfMbLhimUZEFg6XfVKZoJGQnrJVJ9wE8VCzuQkboA1GmpcpxdWLZ9TcCRxdFGUB8bPWqPodqzKzx6AQwV5ndg",
  "key9": "2yYcHr3JYA83vVpUba3g85S9suBRdMVAdGJozPxMxbdpcZhtSZaA7eqWt6qDWCUvLmgVdbE9qvRWMTKQ4k4TU4zh",
  "key10": "2J3phyjVJexvcYnR4extJfswU8gPUQgn5oheRcKvebgMsCcb1xT2Mm3iu5mNSr1ECcvrAJYFEjUDFhX36a6p3RCx",
  "key11": "5tpTc94cScc8ddsxzY44oPw3LRv9sxdrS2TSASKhBvNcHCq1cULQNVwkd2eXkB3KYhhqva42rURokFHTJ2vLVXU6",
  "key12": "4e7F7YUYnP2DZE9dSGyMUZD23GYijffNjQuGowFi6Be1X4YBqNFTowG1Bp6o9kFbFvGz65wrZjj3VZzgFRLogz9e",
  "key13": "3sT9W2Eva6tNqAFNhuopQ7vxHGa9hq7YuVg8hjgUVCkNgodHrfXhGhXbmHkfWTeAoSbPj2xzLnzG8d72cExapePd",
  "key14": "5FDSxqmbt25hMyv9P57VR3qbt6Kpdfo21QR9v3yyyCsL9ZqvSkjinPVLDzLBznZJ6Y8pXqsV9H4rYJh2C1F2GgJu",
  "key15": "2RRCD9HzzoWuLE3gr6rEw17gypG8j4oKrqZjtXtbgcWBrC3xtxkfbAv68oWLyVrRJ3wkEB8TbJTLrvu1fvCV6m3d",
  "key16": "3kKdmTS85GEMerbHqCoH7PNytnwTTo6ADZDcmoHLhtCC7kFSTYRymutjf3xevpm1V9MGYGivdx5Kks1cEU4Qm2xb",
  "key17": "57P13v9UaXyDkumSMPvLS2iMxhXUoB6uAEE2w44x75np3qS5Yn5fz6Fb5yNaWt8ZB96fjzHT4pHoEs5FgGeTRHCK",
  "key18": "543fYDa7w1fRoYzRcPUm3jyp996gwxhbWdUgS4yBPPedhTHzWSbb83G1u4z3YjYXRcsohvrmoiP7nn1eM4jAuL2W",
  "key19": "4h4Wdj7CJtMAY6dL8VRoPqQikpGKix6u4MiBBYhpiDbMaznhcZBAnV6ixDEbvz2z6kotoiTx54wy7cyR4LYLkHPU",
  "key20": "3MP8b87VfzsmMpYmZCLvELmV9U6VBuwPybunwZs5w1THhV1GtJN8Xn7NQU7nPzbCTCgmsnsDiJCN4PNQ6pNaZe6s",
  "key21": "CUVdEjNKaXhnenPrJxM6YqmGsDjfbz79zRiLEwPpXdu3MT9yyMDcToeLL9TdBvyvyvZR7ZzSXWrU6SiddKvtvaa",
  "key22": "2ea2wqB7Vm5fD1n4qRtCSAmgmvMiu9fgAw4bzGfaVifGhGqTByFYBFWp9a9X7Ao4tPFE6J6j4A3HGV4QmrAdkHBn",
  "key23": "66kuxoPMxB1WdjfuT2mxdfPcEPbYosjmcQ4g5VyHREtXak1XwkFUEfDPfwUk9dZLxBD2jgpTagNcYdHdh2FkHAJ5",
  "key24": "4VQ7q8wj76fYu1edzyEvVEgAShjFtjVccbZvMFQsqctHtsQcBANqN1bngYhkAzVn93afr57nFtPbHbgA1cVYAW1k",
  "key25": "47np8xj7mJGn4BP1oqgofzDHfqm55ctGW2QUPQP5M6YC1hXS8W93RjxxphbXp7RqGeWLUNZ4qH32ZxkG7sRZnWkB",
  "key26": "4ZSerNst7MykvDRmzSQAAtaU5BD6xYho1dc6CC1mkmx3ciJL4WMScKygx5NHs4LU6pRk5CJq1bnpVsEt1aArpiH5",
  "key27": "2s1LZaJWx6FTrU3rDYQ57VH4em51PZeyP3Ue1LGuV2t8hdQW66d6ZQLZuDjZ4vD9WoxFBNWLih1CpvJCH3VtPqNP",
  "key28": "4wNoPsVXgHHFHLAe4dwjiUzr7Cn86hi61HTgdQiWKrKX4hQeKxs6rDEjffcBPDZx7ts7WuAXCt1K1qC3P6tupRjL",
  "key29": "46gGFve5RLyx2d9o5Uzk2iuexW1KXLhhBJLDpaJNHGzoMEVG62PvvGyMWeweb9FJVVxgL93qF38fiWtgWCcQQ7z7",
  "key30": "61FRf5JZ3BXMRgp7dc7NCLXV5BmW83KAZNsCGNWpjENhDmpknmXP1WdMsGjuoZkZrtQfCTv9oeBvCcVC9MWCkWCh",
  "key31": "3ebR3bVF6bX7kP9y43wNtLARCkXy9V8JsN6UxawqY2Z1PWk6yU3nMN5DGJEvCEq8pqhBsBoNisJN7Ha4AY6Det8d",
  "key32": "58TBS13N4UYstX489ZC4AxDMLv9HyxbaxAgzYLt4YtuiGW53Y3v5Y4qXPqXu7aqN2zo6MW6LFCpVEHHusNCf7D4K",
  "key33": "3MBR1vDN5aNJbWFyXqAgdo2ozJQkEWfSLZREwGQJNohDinkAiondiEM3PjR7E1zmUqHWQ31G1CE7xHinyMPEEn2K",
  "key34": "57aBgLS5YpPN2DmVCtqAcU1ZDfYoQo2DZEkZ4NR6fSNnnKb1SAacYAQdEvZjN9TwJtKtSPfCPZvCePrpD8GjYH3X",
  "key35": "3uqWVKuVAYh2oh9sn1Fes4SadKTU3jrQC2oVvPqFk4SH24DoCBGqgCXZGsLefovHUF7mE2KMf1HcnwJjyNBu9nnx",
  "key36": "4a3XAq84D53m3FcAE99PQdgqN5Enhd2Kzaby6Wu63kVzHDmUkPtGw8w1wC5zubj1coLhMyejzpwY6f38RAhNDcy",
  "key37": "664bvMoRrYHZVdwayoEUvpgpG64LgkqTSb8Pp48kj7bnf5C8ZDquhBGNN6JwyDz8F5X7MZor1tamSJWfgLDNd1ch"
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
