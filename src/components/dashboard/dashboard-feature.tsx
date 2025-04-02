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
    "4rVTXTGExVYmnSJEYHDBLwbNreegUaGCTA5cEcCgtfvKe7m8NnsJqTcL8iNMkak2WmarPbzTmXNzcJVQzoBMRLPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vaGJ4Wbsde5aHvcQ8iZKTi654QTgpLadDesQcxLsf8QUSHwYjvZYR7ndSLmc4FKzf9ZnEFehHaZjiNzXUn5F63k",
  "key1": "7cYN2HPpPfVXjMbqqrxhQy8hJn5Hnefs9dzRMXo2tLcC9zWMREbAbA6u1n4zn6zp52tf9HpwxutXFkGjyuXxqXG",
  "key2": "4cgc7oMtY5mETX4TiALXxFNRrtix6t7gRQqQMFNWALtthYd4FUAjaMbwRjsnuBtjFMZVjrowqmF7sQLn91HbmW7Q",
  "key3": "3GxmFi6AMJCQt119pR3DZiqGpnw6f3BWT8PdyFLVMcJPHMRAgg6vPeBe4QY1p8fFVDEmK8jmzpCQNoBAkN9JyuoV",
  "key4": "iZaN2dh4rJXCfMMZD7CV2ELX6nusZbL8hBWsKiEtfKAQRrzoPDajPGZvjUU5BbYqELqTNm6HMzNypiSqnCaezMc",
  "key5": "5pa3tA1ftLubdhTVViSGgFpamRjqddWHBWf9GXAWYXRs8H7rhy82U3PWScjfB4WR8xf93DysSkfEiccD2qkZgrBj",
  "key6": "4z4ybCdrYtoXqJneH9d747FCGyw1FxBWPSKdJENqCzff21s3cP45EmPJs7TErMmSjxWKvXKqWppGyHGt8qU6M99e",
  "key7": "3DsoGmgjRhHDgMAPSb5aideFafvFh3Z7tt17XCCrdLEchA26X9K2Q4hUMZxb9ntwour2QVHwBoUJqymPeXEcfoUW",
  "key8": "99VqPrmNLztM9ZmfxRNfP7F2J2JMDx247f1r9ERtUZas4AQ64UZpJRMgatLCz26Z5g8RJbrZ9pqDohBhcGNcbAU",
  "key9": "3CM4y449AzmgdD7Wz6tRCKyxZvT1ohF61vGgN2vLtcEFW234PNyGE72CG8kKHG67WQ7x1JzrEfcmVYt6GenycwP7",
  "key10": "3V5cgphCqETQK1eDsWa1wM3tDDDLQqYey87jtiHXGnLRaTUBr37fdoYejiFZjRaiReo5Pj57YAD3jC3W5e6p6JCQ",
  "key11": "i2MowrHmC37xBhd85ottUjmteDgcC8oYwRU3gJzjKasr5deEqRGqTJCuevaACeWHERZW7Bo3xxkgBZbY15rTstD",
  "key12": "5NhQxzJW8w1Yk8Jp1eALAFotTSqqWarNoG87iu73djPAJpo5VQ2ST169DwGnuHshUcCUkazw9MmiQ6CPy6q4VzTD",
  "key13": "EfWYN2TbnMSc6fNodkzYrLyyzbH5LoYz7C3CtYVcTxcaXKkBnVgCoXtUAzgBbCWn2eUXuZD5kJ2YsmQGpie7PYZ",
  "key14": "4ZzN8m7xSAeUGARFNNrtXsLdRMg7fRcw8pKp7yiG9kUxAkhtWwk859DAAUUMrVjWMP221vjjvq3Fo3zV9rhLdzRn",
  "key15": "1W26zj5vgyyvQKsnqnVATtkJhUW4vwvWWF5xjpEoYjqt2E6ZFKDJyNTYnretk4awpwNuG8TiWx2JkJx7SPzR9ij",
  "key16": "22HXPvPPLPzEup7frw4h8Bi6K2U4tdw5y3zJwgCDhHvCNir2vd47GWN6XzgzDEjg6qzV1T3SRgycgASq5qGX3MMY",
  "key17": "2D6Lfgqp9Ly4M3JcN1YeP4fF22sQwp3NsaejwvFf6tLdBKDkropYsQk17BNzT2YhoPQqQTqmfoFJDpmfh422wRRp",
  "key18": "4MYxN62Qhga35Bsii6p99E173PgoDzAH8HtwKpDPgRr1kYkfCYv52z3kbbvQ6XjARRX21mdfddFkbaeWrFvAbGJC",
  "key19": "4kpokcYhHHVHeurND2GbcwtvrgDz6fypy9tkn3axdggRNsntRKvARkBh5DJhSy7nV9XnQ2zLV9JWK2DvNkDm7yFu",
  "key20": "3rKeEPhJARwMmt7KPZaJEkWGpyVpDXTKfihdNMg9UZU2TTJo5xhyDnotFz85xuhe7p1RhcgN4zbRzZLAm9BkEYDH",
  "key21": "2E3SktHuduqE1hqpaQCgR6G8TCu3do6k2PCrAqweJoNmXdkBDtcHR2WfofNisgwQmeMQVKUpiXpGzWB3mo1ZKUKq",
  "key22": "2w6zZhySaf2dFfKEG4TP5q5P4GusSJ9q8cf4h1mZxVEsbAcwQLHS1r9Cyavs5pYampDT66S9YvZd8XzXbLo3SQmf",
  "key23": "MzQ2B9tB7nakQaQhoov1PURyUyKy54wJRyozCBYNKZp7enAoubFoxWDecwMbJ3KvRosL83ec9dv4Lg1TETQeXVg",
  "key24": "5jZP8U7UoDXN9BfxWB71HjS9WPjAfZEg7X2MdoLRYs4QyeRb9RyVrcez6JhfErREqTrFabBJj7ccF2T5UYpajHDL",
  "key25": "2jPacN6YKf5giPZpARfqW3rNw5ygKicwcUNEdVnEFU5zEd7phfYsxqeCM4zLJc4RusXkc9reqX886eiUEQ8pXU6p",
  "key26": "5pNkb9nfLqvvED1xgRptQRw2XyWQjpcHpeNer2Scg2zv88ULkWwajZEFiTC43M3ZRWJHMjDVST44raPXUj6bUz23",
  "key27": "5S1oYFs18c1xDwbvrsHiuJcJEZCixdZrbUr4nPkmtSVqQHJmA17i5V3jNhyo16aYKGdag1wNqeTP4S2Qgmr53mrp",
  "key28": "5SHLz2FXDZtvDWT49evafWHqQGpj42ysAdBK34V27VuWqWpj6EPgdDwhR1xQkunxqtGjv3GBnRKKazhRkgLr639e",
  "key29": "5RfyPT4sHSEMC3yMFWThKHqrvEXyjpYvL8xRrXRYTZGwJsSq5iaqMWiqYwRaLs4H7qVp2uYauAj6qbZ7oZWn4p7r",
  "key30": "5Eyypus9vLfcFA1TLkSWmm3ZV9hV4qJtjfndegVCnyPtbWxYMKE32RVGuci5axJjWP4xQkwtUiuBzZfqWEGAsvZz",
  "key31": "66txrATvfCpump5d2VGEb1qaNRPhpm13P5qPfUSQ1xMy7thsZNyUJffBr7ZRTEcYFXuvnH2Yzao6khZX4YrQjiYw",
  "key32": "gRjbb1uhm8jPH48BbKsgMFt45B7oMTxcPXNgbyg6kn6Ld3csC9UudkDY7ToiEvTMwJZ5MpTR8kccxm83PijAHNa",
  "key33": "4PcQbB4sdz1xPMVJaFvFDi3RY2pzmAT5UuPfL1jW6APeBsTpmsXbE4A4DdodNHErbQ65PampQfL4QKt4SxcgcUp2",
  "key34": "2jEVSgQESkPqU15jMvL77nGgMYx6vdaZmjCBbk3L1Tdhw8VgvgTJYwfxweQWAWoH79mqbV5m7d16YsGa7r5hrag",
  "key35": "4gdMKUXpgym897cJ5ikJKB8U5EuU5vxDhQjyJhgsapmGChm4iNkhVEVpPL6ACe6vqCQG6UWy8WRQKksPMw6XJSSf",
  "key36": "gwEAiBpY1hEbfVNwkXzyGURyKjmRSww7GH84Yj7NYaA8ftsUFeqivMom7B6aUWdsQscocyXe7Cq1gJzSAVxnPuq",
  "key37": "3P98EzZURmAQgt2Dg3wJ6sJLJmTLnF3xnxmpgp4wy59bEVy5V1B4XN4SP6errtd8z3ErKshdzHhpdUx4XEHq5Dp3",
  "key38": "4FLX2AGzrrREUtQZNViHqtkjo93MQuLqsKZ3RdYfMkTRTWYU5j8WxALxZpca7sovqh21SKNftwhvUbFrRWLZuGJz"
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
