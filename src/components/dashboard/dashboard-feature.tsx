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
    "4m2Xi3CRWUM9DSW4gcebZR9xPgndaboYhFAX9Dw3TBqezYRwLm1moJhrhn9G56gK5aAgX4cuWLEd4XrFce8oxpxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EArGmN1akXDsic7xfw9dkgHqP6zTJ5tqhrRP9BTkdUKdUdMyHAUxYrDfaAjexcYE9Xmc7GF36w3LRXLbz6juYQA",
  "key1": "5E8Mo412Q5Df8M5QCfnxGNXf4PehpejoqTcauHZwVftHvuRtHiNkYFBB7LDd532eStjkMZjvN9iZGbQ51TK1EDP4",
  "key2": "2EhkNmg74Bi1hn1iJnZW7U4AbHDZnFotaxsv6VRXJxLrrQ3qnKgzFVwC332q88fPm5boFC2Jr3wgfD8SDVPE9RfR",
  "key3": "ZbqfGTAvFVDfY657md3fMXWptzLsJ7jjr4LbZox5UJZacFEQSTR2XuURvXEAS9ELjBwdModjML9Vd7e7jwjaCMN",
  "key4": "52GEu9UsTZwQzYga38JLuRDT7neivprD7hnWSAP41VKL3jGpEXanbHSkpzjwb5cnuYk9mY4qwW6EwVtHtYcE3qAF",
  "key5": "2w12Vy5zK7DjrrvvYA6Ey41jK4xymyPCjjEVXjRR9vT1tiQNUiT7uG3ymevN92qozwDvKpnPkjbGRgDuoG3m4cPC",
  "key6": "241CkVh1Bx1EuECxogeTjbWvKePxK1dHPfFEpaJ21TRcafrUVLUcPwa6oYWiUsUc3PtY9mEo7gzpsZQbVaQaRB1V",
  "key7": "2PdLYGYZpuVHWJjng7aBSHCZQpamy8kzMkA7SewWPnMPnDHUJDnyjxESjGH8KyWs75VLHJzTNaK5dc9gS7GYMw2m",
  "key8": "3XKWUKZXdTCkEKjHKHR43sLVxJp1j9JETe38kMRQ2g7DviTsNCCpH8jHaPGNePPBRkvrQkszUsdf8waduBvBPB3y",
  "key9": "2cQ7gEZSLybaXpqpSqQPPMysEiHgkbYyxWtHiavXPcx3sdkwa6YqZrXzsA6U5FvcSnhiA9tikMwxVCK7VqHaMwgA",
  "key10": "ACGCV9rxwuB7y5kYto1T7BmEQSDdKTp8yUwvQC56zNMWSBtaDJVrJPbR2T4E4YRHKigqHKAG74KXA6zFwiT1Y3Z",
  "key11": "3GZx8LxhZmp8Hs7D28ZtK1N2UZfefxZnGP6tKcg2jynVUYfMPQCZobgZ7rRuzMkCBKZYcSnU9EVLtxX5bXN8Jdc9",
  "key12": "52FKT8njGbMBXTrVEeaABsp1482peR1uHmKcRtxDwMBwypD55nDRJkVXCzLt5ZSPfP5gJ6YZ9hFsjqUGJwsX2xi6",
  "key13": "5bW3dRVxVoBq1HNsmgEWXErBASpybaKA1dfQXVXEXTWUvi5Dp16S2GaqrH6XwAw3KJQXAbcmV8FnLxPKm2WNS6FV",
  "key14": "5MNRkF5NTVkKFgDs12MMamWK6DRHsHWo4SZ7TVJAQXddiLkK5Vjbufxe1oKGacnPUVbjDmHTKu6HQtVXrou8abmf",
  "key15": "67pQLTjwMwLKbDzvg5pZYsdQMST3E6LumPxYp4hq4bnrVmm4SG8bdUVF7XNqesFKD3RKCDvTfU2ExZjwBqnBQetq",
  "key16": "5WeycND8H35FxDsscsNiv75frU3pxUpBkBHbwWSpWGMHFWTfgyGnXsf4CUxF4fFNnox9p6f4Fa3DaV6HhXzMJPFf",
  "key17": "3Bhf35uf8wa1SW5Jfa9Z5ddJ4Q6kpudSf1ajaasVi2G6E9pe2JNAPEdgiJj7RvPwCaWhLE3UAE2DtPEQrLUuPnDc",
  "key18": "2YMmXHrXsb5pRThVRnjFaATzS5yjR9WhwdwL9wZrneUjLEzx8iBysfN2Ch57vg6mBsCxnBs2QcBMM8HrJjHwLB1n",
  "key19": "4WuerageefaV1CCSTUuFmTnB8x4CFJ6MpVGwZDh55prYW4UdAo2LH83KkX7Ap9r4nW33GSBa9bNHtMtiXD2AcCei",
  "key20": "2cd4EiU3X9o2R7w3Douty89eWiHnNeao4qWwNv8MKcRQCcPkvRg5Rsnb1KRvmX52UXeHziZ6Toz6cwjNuXvhxfHc",
  "key21": "1UDFGM4MDBR6sByqs1m5gury97RynbDK6cQsa6iYp5W5idLt4smsoJo8hE28a69KtQ6b2zxUC1A2cv4CVpjYu9h",
  "key22": "5VDXFKr8BYQGGkBdGPMPa3Xp8hqn6RYEy6uyHj5XCWh99Wtbq4bUyb4qSp67vjrXv4tMoJGx5nVRniNyLNfRgWvE",
  "key23": "4uihgJjfNJm1sPZARjhts8XtLryyeQ9WimC2eLZdJPrT5NLfdM8FRqhfJEHv1CBoLnEHnsFDQUKyiGXPF3F2hb48",
  "key24": "5ptxT8jRNPpjxWWfmTx8bTV8RM9oci12kqbDZxGCNMSPNEwY5MoCPegHDiUwpYVJz3rtrrHe3yaCozYDdoTE9dFi",
  "key25": "4wMhvYKmuynTrGxoTncv9m52sxF5UzYdS2FJQdWToSw52eNj6fiD4WqhZ5XUaswTVrPvn7SicrsymHdxEisz8aMP",
  "key26": "2sxM1R1kwawafKzydQZbzehLmWmJgF8JwUF6jeuHMRw5YNY19LrmW3k4rerD9BxcqLh1Vq4mf1p3XXY4Qr3hnUkU",
  "key27": "4o9oEj44b7YztSHoCj35z2KjzQp3HynGLe7vH2wcNem8sL7SoTY6rLzAGh43WbGPtWF3aTPabDfqvJEK5vhBib1R",
  "key28": "2CMdTrGc5KmcvuxT1nRXMgcLRW9vG2v6sh1iJRaxc1pmQbjtL3vASzkk1MuK4UqTD3ZKkYt8C6mU3VFxqAbzi8CZ",
  "key29": "5vdGLx6o1YZp5ad6eQcwwJ1NQtPfBfqSEnVsvCtQ8Auy7kuZuRYgebiKyJsvfxHgKcgDAsUZMgjKdnASU6wuATba",
  "key30": "5863UeJ7A6DTFLudhsJcZ5YwCE1EsxrkoXCVJArw9Lzh41gufsj6hYD6rcECdHxwpt59XrVJLki2GuWoVybY3sMu",
  "key31": "2CuCN5uFpJB1Bwj8EebveTjtK6Vgwt64x9XpnsgY88kLaXxPRjbAsm9tYb5ZDor4Ue6hGwYhrcDjK3nsrSzbuAd3",
  "key32": "mfrSKX8TecFxnSJ7jCN9Z8hhLVMF4rincyYwAA8uvtY399fvy7Yc9ZaqqtsiP6hjUj3Gic2goQuCLGcACswhXct",
  "key33": "WWfEY1kDM4DHvwBSg4ZjCrxDB23pGnVMr9wshQDDymYjx3r1JUCvzXbbZuyKEhucezjLA4JFVp195NWW4VFNve4",
  "key34": "5fbrQBnRAgkKw7VwaJVjZJW3SDpHdazaY5ouFxp7eFcnDR7AR7WTPTyTYd2fmqMLPvkVytYsLir52THQvhBkLBUr",
  "key35": "4NJTjhLEddfxRpFuUeyQpCo3rzQZjborBSGSKik9ZevMUfkmo3dQyF3xAgKo2mG6i6kJY6V47bXQ4wdokLwPWN38",
  "key36": "4NFqjT6cvoKTzq932xTaaoWmpfCxSAh1NJnnb6yGDHf59USJMHfkCwP9rs2QiMN41NozAWmmu7myweEaQn318khT",
  "key37": "3hkXki6umb3vGKvvFfvekLbVG9dGuTSSQSpHAJndyeND16syDe4qqRHFRQqgdA2eQ25Ryk6Hec8KFwPy6Mr7GR7E",
  "key38": "2NYh2Tm7Se5K6Qctrz3DQVHZubcrWgge8nv8hWou4Zcjyft3foEYbrkGx7aKzg7E6hJnPv5gsQzyPGtfdGoNmw1h",
  "key39": "43AKRharAxTKDpUqVe1MhhUJZNUBB89piNNWTaS4Y1mVz2QBL5qFm8DB5znvLbBJ5M1vncBjmXUYWVW6pfbt6SSy",
  "key40": "2wFUdUiRbrWn7oak2YsH41CXwzAJ6fCTGWa2KTg6Tp4QMrnH5Y8NXEgEd5p17phSRA1WYT2qk5qsxK4m1fj3sd2d"
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
