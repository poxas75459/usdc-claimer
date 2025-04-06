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
    "hKcQ1CX6q3qcKYJDzPkwZJ9txJk64vbBkeaPP1s25Hb3VcwdQBH2BZMxHJcGDMzA9zmRwnHZeybi8PRiNcUm5ds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CNMWAdjC91jSHAmytZHDWRzmQD1zi2Be4ZAbbUqE9hFPHgcpUpLZhLS5VLmE15rgDzC9nHe3YB17chmDSMGaG2U",
  "key1": "4tLcKa2K4gK8vHyH7pnpqjbDsJkqhuBor6aHtvBRhUuy3eYaDof2TEY4CX4c7pQ4xtqjC1sNZVxoo8mhPFyhVcVa",
  "key2": "4jsz5QnysTaDiTzJQgCVMw3Jk3xE7BBTLLsQAGYReWPan7kbNawXWEBKktBrfBPN7TfBnR7Khy64mU9HBkaMqJjE",
  "key3": "5fwwjiFFoaZyBqFTGrR7J4QFHQ8LCWWdXgzDaacQwZTCofuaEgwh8TuXFaQ982h1SXJJcuMZAkxp9fWYyo2gTJXU",
  "key4": "393jcnqv6863A9ANXxmdC9np5fNdz14BuSvqBykpvRvGrPURN5MQbjRnda2FqsyJZrHQKBBUyAF8o1A3wfEwFhDF",
  "key5": "B2m2howjHwj7F97Jz2ynuwhr4Jx8NT5DEgXhDhWScknoupcU1k9iXeuRDYaCrY1bsccStjb8z8n6aMRZoZNKf1V",
  "key6": "59tLwQ3ykAEyibKJqsJceoRjhr26abt5hYZ1A9mJjvm9y5Q7UTCTPgVWwts84BDgkf6dpgEi9FuMaJfN7ZUuUb9b",
  "key7": "3EbQKt9AB8rUwgKSnZQPwNm3P5DF8z7sMo32nHMXdGckY6jyVbK2wvrDL85XZS5eWXb4W9PtXYPzQHjbiFVt3qN7",
  "key8": "2HRzipvgi1qjK7BDcw2nnF5c59sgmq4NVZv3EKQ32eefXKshxUzaPd6UtFcQqFntw1UPiujcaEYYoWYEJXkUWeKe",
  "key9": "4dx9EZn2zfFobBRqkCdQtNtqff7wP7bgK4dUuQWUoYpQdFf6uvnWseytfj8KXY2oJEUmxxa1wZ69hmbr6wD8kue",
  "key10": "4LVuLZtAdKLCsFFDjbBXP9e4sTwxuKV4StwJW8L5ooumaRcLjqMyWgUb9myinkHHmamgnwX8a4pmRVoua1nrqC1j",
  "key11": "3c3fYGyTeNAGpFC4yvaaKzZrcSoqE2uPWxgX7JeLaJS6Sk8wWGQKsc7x8TtKK2nraggP1V9WUGopxnXzS3jN7tBH",
  "key12": "4qz3BM8EtJu3yCviCYyqdxftorFp4NNNuu1yxx5wRdWUa64NBK9wtFzXB8zX86RDCmJhsphBdJ5i9MbhHivLAKwK",
  "key13": "5r6AcnhwYXo8d1GJve2ZzPGRxikjVzYYRv1oNti9gRbMaQSTGp26rNeYdhL1cDJjWF1m2D6aLJgRwF5hRx9uDuzN",
  "key14": "3G3J6DRDQeAKC53Lwrj1vrqGBtV4J78AQnyFx6TW8taAhfJpcAyHURhbVc2aAaELuxFJeZvd6349GpksT8yR9kas",
  "key15": "rXzDMNyvQ237x5zC6zJZ669bjRaus9gmfRoZzzb9uG7RhUpEYRmFH33zMVmg4ZLT6ZFfC9BWfqeexogCQ4DnKho",
  "key16": "5j25dacJX6xBjrvjaa1nR4g1cn21nXj7egd8rUve1rq9X1H2eDAhZrxZf3Af39CcSC5ekdiALBQRQxqMRExR6CW1",
  "key17": "39pwMbSCQ2bZt6cFsQd8mDdXiJP2y2xnBWiVkb9rGKVjDwwbT7KnBX11Bq3tgZ47WfhBaYxVsCvXWGFY9CEXmc1i",
  "key18": "4LZTzkyjweJpETJWRTq12oUaeZhjmZAPCBsgrciWUD7J7uf9QHuM5dMkYKfzmrWcFDswZA56ciiSjgEdkoDo2Hys",
  "key19": "S7H6UHCGg1xYRbZmpjWLqLe3EjE6KyvCpdQFGPc4Kcsf5EsPY4EbF8b6H2xE5Xq9LzmUs4THxyvBkZuXw4XjNRG",
  "key20": "2BXJqLBEUqD2d6DXKzZ1r5UNZSHCRL6JpDoVBaPJDSmPsmF9yMeS3QxAKXhTAW4AxzSwWaWh6sHtcctb2Mv9myin",
  "key21": "5n614PaFUrfahJEqJSSksyf1PgPjUwfxQ6GUhKvNR5HjL3ns5gT9GhiR3UtZPsaXYHpNj624FX7Nfqk9nxedPC5r",
  "key22": "2D8JZZfBwYdAe9YfcytsLcoiPZtdZqrqUPzUsXn8S39vt51T82k9Beuwsan45vYdZX4m3y2ZjwwyH9FRRU5XvovL",
  "key23": "3xL8hvGmLMci2ywDYcf8qSL7cYV7WSNXa4iN6H8ekm3ZRtnQaDs2DTHsC9PTUCmFuvTggrFDBuVJC69CMuWyPiV6",
  "key24": "27hJRwrEQATkcVHv5cbHQnYKSRYjo3D8WgqfTDCqV4NVanKZVCjkSiSA8pTPLx7YVW25Egb4qkjCq5pYq7sFkaca",
  "key25": "y7eA7AA69Mtesp6gi7EBDkPfr26xJiKZy471kX1tBTqp2aioCDYkFZUyZxQaXXfoD6TnZ4eHZZoPaisA6ytmwNa",
  "key26": "5297cQGNM92NxW3aWaKTdseB6iTjtfBtPyTP2V72DtP2uf9YpMBpcdyYY6LsmHAHrbtGmNXxsQmT8BurKEaiTR5G",
  "key27": "3LGocFnNDmRFGE1Nq1Q3ZhgSdNQeE8gUtk8ySL8TdVWLPismt9Rum4xaV4edXAH26BDD1pXM7kEimNtWV5SDvexB",
  "key28": "5BTuNcLsha6hN9nDdLBjp6VV4umCUhFUaVnjijwqv2bn9hrxwkv4P4WTkM3AXFFPdkSFJEVdArdoRgngfLeua2Jh",
  "key29": "beJ5WeReZW75TqukE8fWxdrp9Msdz3ryveAef7Pp7X3DPPTbXCTsVNqGuhnKiV5csudUnaQg2umTqLGfHVeSvGx",
  "key30": "29X7gBBu68wUB2HBCVNGSvazp3kGNErkYNufbyxL38xTMEM9QvpPPkb8drLcXMafaoGRtPENJAD4vNBBS3PQGPhd",
  "key31": "2gBHzcYpuZRGceZuDNmosvQZTFg5Z3etJnXtDeKfRggDzdfxVMyCZ8B8CcUNDKvKEwdGee6d5P3797w7f9e1DG89",
  "key32": "4edDX2A9U5u1BC9riw2KQhZrZa2CkMw2csSTjw7VuJXWuheJ3VAuNnE28gGhEw97S37NhKTmVQfQLS89iVQQ8wrG",
  "key33": "HdFHZjUdRZzvt1LpavvUENLGefxrv8DX2PfmDbTwZ1XmGsQBnqC4b4uYrJs7cABLEpaCzYwpaPyDkXnmwfSsdos"
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
