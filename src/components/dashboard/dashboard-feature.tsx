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
    "4pYt26g4LTi1hJwH1ym7bDEEcw2LCJSjpEwP8sTrpMr6eNF3Z6by3ahvgkAwqxn8kBFsbXht5Vb2LRGg4KyuT5rF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G8BYsPMsp2YhPz9wZihxe77jC1YJbx9snme33nzT7uCioeKyCKKZQ9LQWRMhrEHUhTsFhH13dCiaMaipdp261Fr",
  "key1": "4raKw5Jrgxbjh3ks8hiY8SzcydwZU3HUWoAtrYxDsg8AzUfAUT2aJTm5KAL4zrq9HcuNW3rJZxVEyooG5cecQSua",
  "key2": "41vt3gm5YYF1W2wrmYNJe8zwNaT5khMbw1L2QZhhcnS2mFJxXozM99NxtnErLS5HZdTjVARyGExFf22CnS93b9rY",
  "key3": "4v4Q1xo44xm5taMYTHtPUMNH1aX61bXjbqUihjcpvehw4TpgvqqwaqdyBJTf3q7E8CNeQht3x4mvE8PeM7azTW8i",
  "key4": "3dpK9AGWqcHf5nCvMtTiHZYthj59PTp6uwe43QVEnvde8kyZrdRD9JGfaf18pEdeJX2dFZu3JQGTL7MsUZ43LiH8",
  "key5": "63zbYMj4bqVWoupotqU73rbiJv5eHDzUtw61Nz6JwdCmrLtFN7WEVJnosB98DAzAxGTVF8u1tFFqsGYdjREn4GBo",
  "key6": "65V9GewTkoN4WQpJAyZ4hq8u1zjYfBT7FbLBBsxi15iDW6sdtQDPSzJ6RGYMKdJrbKBQ7EKTUSgkMW3Rt47bQJbf",
  "key7": "5A2eVA5WXGexWDAyN1iFSxEqSerWC3m9PG17VZSChYoMJ5EkuXaL5CpWa42BKACVMZbpJWNq8qUsAxbz1BtE6pRj",
  "key8": "5Xza3sfaMmvWJXsC74N8sDxUpCGh1FGK3djBheigEvRFUEfSH2ZaY4rbF9ZuSgGouUsdLbxydWzBzXxmFsVGxsTZ",
  "key9": "3y2omb45wRHkRpVdxNh5W95JjkTD8TMZTm8kH5mMeaNvy5pBg5YCxarHEjR4tvZLS3XESvVHSdTPhvCkwLFCwRRt",
  "key10": "4M9XDuE1MXJQvZvj2ZoA3THUy2yJzYjcJiB9V43DK8arSENJxa4gLVFQdyWeqzNfpXsAxSUiazkdeSe8rgA5KwYD",
  "key11": "5kosApYPs7jGUL9BQQgTMDGnCgYuX39ApgykQ8EqjULJ5kZ16fVsvjUw5cKDdwiXWhw13a2tZhHgcyZCgb3iznLJ",
  "key12": "3ESVwnDXydQRe57SBSoEnDNQBuL9KsBP919RWWXBQ1FZymA68kNhNvUgWqpvefmk8qP6Z8bmYeYDUCtzp4hco3Fz",
  "key13": "37N8yyaBXxNPkaNevMYH1GexA5bzwRmgdVT4dn1TpjGcYpHnvsMxTrPDTFYAbDSRm1HvuxeUyLoZfSYKsKVpBaHW",
  "key14": "3J7k8wy9xhNCMdVbqRTKKoNhEM6sqw4y6DGC6V6ZVXRCCa6pUNVYtWcKZpsPmfSt3DsMZVzLxTpm8T8cBeKdVzWr",
  "key15": "28tCSAkpxfRh8Jsg9AJtPFsGMwFdDqcztsUsZmgXU7t4SqnpwK6pPfUJCQsLKUeSfLru1yHi7Wq8knKCiyjB1GmR",
  "key16": "y3vHsmAN7TvE5SjyLmAgbzLiudrUWDX6aTBpzvEegJky4tKzEzDcS3971kef9Vgh58esa4BsVAnCJsDmUXcrvSM",
  "key17": "4q1ZyP9QrJCS5hhs2aGdzhY9foSdLi4tRN3BShimqVDopyyxKW2exn7RxHqP32PyCLjEAduFJVEQuiqTqKHdTxpc",
  "key18": "2g4MTmguXCmr1oBww7sF1USnj4iooea8VvuupuxfU4mFaD5rEE1ot8ngTvWp79VDZD1L9cs42Nj71TayAvoDzNyz",
  "key19": "3hQJnMBAFp8FtmQBTXKLBsjZ2rziK42khp77zxRNyJPcj8jDk13psKymoF7SKzqPyxLxRPw6uNLM4uRX9tHQR5Er",
  "key20": "3T4vqT258aaofFG45pdhxQTaHUvbzrA265ZS9u9CCpxTYWJ51Ki3LT2xUH6WywwVhYxNNuHFBga8aPsuAbEwccj7",
  "key21": "aEvuYGwKyrHBy7p6ZViehn65oAD7GX3h9yjq7mrJYmgNGVnxe8NpxN7bTLrD4w5eSuX2iri7X6Uhafzjt5eCxbP",
  "key22": "57MZ3rKoX2SVSvZfiT64ksFtc9FBfnUzVRQNkru8HRUZ2cySWnfGgWcUn1FHLT8jDmttSWLJzd6ugp9gr8a1DYz9",
  "key23": "42XdwSS1hEdLYYi5AoHbVD5fZiDewDzYipc9xdB2S57S2JzyTeSWdYjRLjNWR1nRYou5VvjGyw355ZKNfKWNqFMx",
  "key24": "38dvFEdH68FfrvJtoTvtfARMdhbW7iVs4LobyqwBfQnuwCg83EjMUHezM2vEavL877dM42hZYDHd3gNf2DYtTZde",
  "key25": "3MKbwVnMcam8hWRuQhdW19URxMWxyVba22EHiB7CFC2KrMCv8V2dWfCGjHV9gkkhuDEMzy69agg22Q11rD2cFqJY",
  "key26": "3BjeecPkgRkCPxBZ7EbAWbXQXD32RmTxZaXJDkthUEtXAbG5C8WF6nazVjcyboLPifCukanLbq3mFky8a6DsyuFx",
  "key27": "Y7ebdmqM6QxkiGCoCqVGbYirGoPEgziY2od2tVVnNpo5cffP7F9aVbfX2fkvsVRC2xUcqu5NVuwT9PB2RDWRcGG",
  "key28": "3FsqCvCwV4NDsLXSJCtvyNXS9DSYnJ18veMPK1H8Ba1mdwdxVmWTfxSzAswh6pogtP9KU63QE8ayjgaXhUfDRFn7",
  "key29": "aF14Gaqk3XtLCsw7xnJuu8en1LhWhh3m7Ctt47dHrBaCiXzLo92zTVPkK7jGxJ19fkr42y5Gh9zZUPYBrXwKYKn",
  "key30": "3LuYBSjg8jwnZNVgstyLJkeThyZg1ShMLmeBffT41dYioHfD8j6RvNNLv5crkrxnHRP2oFDesHtgxMt4mQik6pZ1",
  "key31": "2nProSoFWbaPDk7zBDFVLySTU6xHGQ1YccNre1zRxG5SJmdL8GLfss4BUR7i4R3kNk3t1Z2uuBr3E7zKLE3pLK8D",
  "key32": "H66CtBc4LyognCyotsdCAvyeiWZwSdf3wfqMc1XjVxKiL53jxdZMHZZobAQgZnkUkvVyVRoZ23kSc1Ju9Sqx7ne",
  "key33": "aAN1JELf28qSVC6iaKmwQzziP9rm5dm3FsoA4jgcPfkXLzE3wMncNPcQ7WLVmEnLpQVQP7ANpATnJfHFVZ2GQ6Z",
  "key34": "2EnTNQ2STprrq5F16V2UMFCwWZu44RJWpNPECogRawYTYvG6x3UfmcVQu7GRotVx77otJe2MM7Z74zjKSgDcyv3d",
  "key35": "KwJF2MqfVqvo1wChC1pp7KMYmFCe1CrZnQmhPKcDAh3yVnXhejzwMgwB58GXqNrS33XyJPBTQXjLfZ9ihCnVRjT",
  "key36": "u3FTCixYGxdoWkxZjLCETEaqgzGPZGRvU72oRL6CcDE1cBF4TJPp9e3oXZHTxgaSB7qYMdbz4fPvEa1KXaMX2X8",
  "key37": "4G479gWxyge8HVq1gX114smc84ENrMwi2mkXmu6YXYwJcjfrf4th9afXzkGmbBiLha5WW1oQvxAGHbg52F1nqqPe",
  "key38": "3QHqnQSyEPK7F1KNvp15sckuGcuLr5pWr82hNtfCMmeuP11njRRVoak5NcvjfJWcYVoy22uahJ9RMdCzcduDTiUZ"
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
