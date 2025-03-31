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
    "5DAZvo5bsJcXLWy3TNg3DXBfwu7UYvD6ckjmU7a7ULi2sWXuCTHA5CDqs6yqEQi7izkvAa3C7JaQqWDJSv1KBwer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JFuZViy8Ezgj1TXtYmbxURiEAj1pXAvfX1mnvSN4zb7KV5xDCZdCdvtcxKxLVzTjaNJmR6jacQpAfMmnRj6VaVM",
  "key1": "4V6ay9vzZdDhPCArFqVUzzBzC9JNVgYeK4jemearVAvkkLpq5gFeg93Yyo8qKEUgbjPxHiStA4Vf3hYMnFua65EE",
  "key2": "3aDM2b9cSzc4hAQH5cv35S1jXikiw1GkMT2g8efKwhsse7MhzzpZyM3QTyjKnvpEcoqdfH6mA7FMNYQLWZHousr8",
  "key3": "2bCsFq1Fj82tUxEtzpevaRYJ1yVbs8RTczr2yv23gpfFLQsXBhUL8VR2qCkWXmQHkMCb13ZxaQQ5pk1ZuxEbT24W",
  "key4": "55UUCf12VS2GxPTXAVCPeQt3sKeJiEvMUfrBJ1NiDbAqSrKDLfQFEVX9xKQtdPLKqQwumMjP8Gnx7M8F2wweXPiE",
  "key5": "3FdDCAo4x5MADxx56X2sVZJ3EnWfkK1pktzvhnHPZPjtdMRmd1Co3rDRo6VBfQgeEYVqYP16WUGTT1jTVNbwLmsj",
  "key6": "cPbRsazg9M8tJYTfpBZiFKLCfVgtT28PqUKFvSL2fuF7WWACcSTGMgvs9DKmChyhSZsHp6H4Avdvw2CYNqimqif",
  "key7": "RekBVCEK7EPe3dt4oDVH1Q7Ca4QRmzSBAUzHLkBvcsgzCiZCQeH7HUd4H441Ui8ehrFaG77R2b3FaiK7UkPx6Cu",
  "key8": "JVnZ6DWVrYnXBgCSdU6kNbbAD42Y3b1NrBLbeDDP7xZuKWmKM2h5Umewiaoh5GL19WkNMtJK5Mn2bUVQUMrNUip",
  "key9": "54fw8KWCt2Wxn9xzjCSKs1JsM7pqGsUxq7MhAvo2f2sHKbzAuAF1h9FCM7ahmnDxH7zdbYMVas47d5X6EQXPFsjo",
  "key10": "3gCkun5RCTf9D4beBHGxN1J5yk9FQMSpg5fC2dG7cARo2M7xpkRwbt1TuNLYp57UtKcc6EcXWmPNVKcyc5MhfnJ3",
  "key11": "2LSVr4gVqcC5hp8sy6DarCYWZ6xYoPt7LDpKSqJDyjiChoWM9Knnbmxn5dajCuF7wWwjGeEqPt1MWhjYJDYVQ5p1",
  "key12": "2cAhFurp9rPiqPnhKSLBL4AcQH9Evaae8sDuYBLL22Eq9dcq5Ltz9zX2UVzjYhc9J3aBGaoSHMuqbZ9neCfszfkF",
  "key13": "mRpkCrB15Yy6HZqeAXwTcv9aivZ9h8fJgdp9MK7uGtYbR5viVRyntKTSz4nni1bP2M4B3trMBzQGWqJ7qBw4gQu",
  "key14": "55HhC75ptfJ34zptX4LBncsG21NNezssLfUHuUP1CmCbptfywuRumXPyLBFQrSUQEHgGXcKeiwcpvE6p29wiYSFW",
  "key15": "2TLscybYPmbWrJFdZyH6X4NrtV637b5RrS7FCdKyzqokktRSjZSQpNTKPiSKZ88Crhv6sQtZTp89CqinZW4rhTNc",
  "key16": "4uXZgCFzKdmotQzqmPwgW9jcbZLDp4kAit7iM4WwEoiKXtK1t1486tCCoZbR9oXDXKGPQgTVHugA8Xtj67CpypGY",
  "key17": "sqYbfuCqbVBPEjKTM2HU2CeTTQWaUrEB7cXzt8zHJexmmQmqgcgdy73qSwSYeRiv1rwsXWiZiBfiUx1W8q4oVFj",
  "key18": "4pxWgxoUzdsWc38EqmQMxDiXFSFAw6xKNLu5j5eiQ3M7Z4RDsuRDXbkLaxtGogNYy9kfcvztXUMwxfZvrP9hJJ5B",
  "key19": "4HKpTUcq86qGYSQD1vGLHW3qeEhvp1v6Y6Pxq5V8xT9Fdo854R4HDwNn5qUTHRHgtTLjdcD1b3qDV1bCjCxLrKNs",
  "key20": "VZ6pAXNh53xnMLRjUQZWqF2MDCuACyHzHVrmXAwDCNQ41xdprLzXsq9WD5dsKMuTosAnxFzc3iinpyXLWW1rCek",
  "key21": "MMMJYPjLF6jwEPh5izZxPyzRa8dKrUsNLgsz6na2fW6zZCbt5uLweJVAhEAoP52s3Xi9gQvBE45zdiPePvFQ5CY",
  "key22": "635LWqmGDuzQ8d3eo3yGnyjQveUeJ8atPpbzrVEtoaut2zMm8vygG7CRHjkUr1JokJXqbkXPpcAqxVXCrg3vJ7vP",
  "key23": "4h5htFCJgGRwx7sQ7fKFwWHM9sqyKfPVqmGPn2qZsDBaWSze5tP6bCQBChSiAFjSQp3JjrStvNNDy4UA75jFgjER",
  "key24": "GdvqJK8WtXUDVakQHbB2Qp1vXx35zNcxp8JCfXsThZfWmaE2qTn3k3P4ZFmTi2QdaPSLMNPvHXXgr85PzRjjiuT",
  "key25": "39CPDNKAfcpK4RjZXBAd1dc9LwhcjuQzypuohShtPb1cevnowmGBG7u8HSJxdqwJDJyFqaSZKTELSSGTEqZJjJBM",
  "key26": "5XZKBQGqZBEwKNUnmsaCreAN7WDiy7k67zHpoNregvc61rgHCVMU6zaag6dWd462avuE5YbFD8jPX6H2M8A4MyMd",
  "key27": "rWSN2wQQ6cHGnev9ZAYg1Ue9UHnLmi7n1Ms6w4QFu2xG3sV8qGNxgaTwsP6CiVRzv7AjVDkoBrU6cBeDh7ghBC7",
  "key28": "3vPmScb7KJJ4qZ5Q4sn2GgFJLAD9WFQ8CxVme54hWSLTZ6sug3iiQy8Y4DcThmc3ZGviwmEDpoSDdWv9JkohrHo6",
  "key29": "2Q66w7fiLxYJVugV3pQpbwp2nv3CQn8Xx8dEt5T9ZgAqeHmJBv4qQyWDVv9zvaN3CdjndKoZyXGTLvQo5XmbJaCC",
  "key30": "5ScwchdfCawHfvzaiR6Z5Rsnp5hyThGUp5H9huXTgMKX586DenKZ8DvuLfqdUUvPi9e3y1LkGYSpcFNhjXi3h43q",
  "key31": "CsWKh2Z3UBCRwZm17kv7XVmgp7ERTKeFrTFqXLRTSNi5nxULuWq467WA2jFERM9ygBiad9bT6kdMxi8vswCXAET",
  "key32": "cg4RiNwPyMkfjnfA4ebjga4rFcmAGAdRFTuyDgpoCaGnbRd3THjhXptHTQbTe8BihCVYxiYAC9qzMt5CMT2hT67",
  "key33": "bg2oMC1kC238nRroaLZCtpKwg4VvPvkWL7QMXqQPnXAJicqrqFDW6Q4FEorGxAN9fGytRuV9yB1cqSN4sqpcqos",
  "key34": "5vATkExsKd5NPjJXwfftpzK1eZCeH1sUJNH7CZY5uaXM1UmDknnmU7tdkwSXYSwHLqtk4qyWnnmYN2hgTW2Z8d5c",
  "key35": "4tGSqoPAnVVj1TvHn7AJigqyfzGVvWjSfvgTphH6HDFr3v7GKjp5qtE1pE2N5DxTW7g8SVqBXRoY7Dgq5x3gd8wP",
  "key36": "4uwk22Fvmu3d4t6LPTPJu3x2KSXdvYUiJy4yuC3L2hPy6GKRp8dGK3f5FPioc9dxZ6GH84qVoPnAy9eWKS6p1o1U",
  "key37": "278dWL7c83V4X62ZDzxa9Eskp1Un5hqypUbLPbYo2jvbTCrC1n2tEtpqK3U11FQLymwF6ZCyLqbwZiFCRUAhhoZx",
  "key38": "5eLfSrUvgByd6hmx7WEGgJgWHvoGt6NLZrg3TTD81eaVc8JodVALnoHgvueXeUpmyJzhwhwzUR6TQyaxfHuwgLCX",
  "key39": "5PLyGbqMKNHfwjBDiMT8Xyxh4QMnAVk4j4BnqjJvd7y1DofveCx7SLWJ78MxgDxsZpWP133yE26xtq1pUWEuKhaC",
  "key40": "4NTL1NaD5RiE18EtQLS8SUxbSim1kb3mp17NYbnjgc1dae2xhsdxRnCJ3xFAsEnowG6kBjYeX6FznLyqPin9P3qN",
  "key41": "2zso919eHfy8GKWRQUYuK6L59cdcuPUcwPwAZTRK411HsSV5PSV87nHZSdugs8uVdSSkHVnVwQGAZe4BVZ3fH5gh",
  "key42": "xFsZBn7H5uhtdezPWBUrfLWXysV9GbjdoxwBRxYU3vwCXrZSrEJwYh9BHizFMq79fw9zqcwrg4EHfuVwzLbhkbT",
  "key43": "2t1BVLVhGKFbRPG9Ty1MGkefJ6k3WkLW4TtDKGg526uWLNicM6owfaWYT8sWnmgH4ZNM7z9P6aixqySFVfVMd6ZP",
  "key44": "2Q3mCdfwCDiiHXesqrKpd1Z8D9Np94eQ7bUswwxyKpdgfAgFX9ShMieCjAzbzfTYQb9U2FfeH6eQQR7d4SQe14JN",
  "key45": "5GDuhMuccxCqUmTX8yf5byHW7oBScQiqQdV2WK3pjSCNtWxFsELTc94oipJVkjcxKuVZR96xKxxFKAQL6QtyUj91",
  "key46": "58jRQfMCogiGgRzUPygvZdumd35wFL6M98TXrVx6j4tibwD8LWxBgKgxrvCq2G253McRttLgZ5x3yYT11nAVU3ut",
  "key47": "4n2wsxmfEbEod97YJkGQ7YDaCTy4ihS3Qy1PY1NaDfYE7zLRANwTNxop554NuxsFGtaUAyrQK3djNiRVpKnFELE3",
  "key48": "48vrsgyK19q7MkUuMz4P5PsFKzScYf7R9pD382Y6nDu65EYXvkj69sbFiZhaTowgLFqMBAh55N8fCzkaNeWENyQ2"
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
