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
    "5rPTGNgKSY8aRNQMrjtqy24h2ntGby1jMxXR2zwPY4nWzoHPXfNbEHATqdAUCNpMx7xa2ZrDhy33DuSQRerMpXJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DCGwQPv4QBEKguhUXwPZ5KoS7JudNYwaUx4RHU6P1KyLpEfCYkWyrdAEbezEJsWEJbrb5MJFxgaFYQ4e9BDonog",
  "key1": "2NJpB852dcfM4HQYEhkZ78qyw31Lse6eCo3DyGGvsHrp1tSHqRY3qLfc8ZueeNsHccdTyvzEpUkGy4gygfNtovMJ",
  "key2": "3FWt7TrJEtTJdMiDue3z27wxaFYBtLHFgqYpz8xZ3QmHUeJD5mmXdtcXQSM3BCMtDAB7g6mvLhVKGTRc4CqfaZFX",
  "key3": "61PjM8SpYh5fbtJ3FLy8Dy4S6opuMnWVjAC2gi67c9SDu8J7ECvFbM9cer6Y5vN4FfFkkxDBKk6iRiAT5Dnp7Sdo",
  "key4": "4CJgehrkvJrMjjLTGViX8EVrYYgSBeHvhT2hTH3a5WoB93p5USDfj7nWsHvbamZaMv5xAVGgukELz4uJVhGgBu6z",
  "key5": "52xBEBdritofnSbPtmRQjMj9HMSUixua987kEgGPZcqXhWKh5qKifKubWf6YFgmTioTYrqdhBMfscv8gqzcjWC4f",
  "key6": "4zmgFC8rWNnfvEKXMQ8WTwPkniFZN3hQKk1LJerSxDqJhW2rhaJ5y9gcrFFo37qv4p94CMG1X6TiURHzRbS7tCJC",
  "key7": "5SRUCFSxHowTS1ee9GbWSybN7mJ8mXhbQWZF2fRip8tewRKmiK5XPVwZK3pW9he1pXKby7EHzjVUfZktSKrtyRzw",
  "key8": "3U2sXqsv5afraD7jTqAQAHWDFffWbDsvrnzT4rQ7E6TpzuT7cKagjjju5QTyCUgpr21jywp92MmraBWur3U4zoXE",
  "key9": "2MCdK9j9MqHp6FyuVkcDLQJMJYCzULA8DvGDiKepuBwG5HFtX8BSrVdzQ8GDTtRsA4kHWifpGXiB9HEFZV8EsY3h",
  "key10": "3NxBagQDN5Dfrg2eANCycwvsmDuhNLYmpqAKfoAkWo18ofwhEXghURTCF487Ys7rsqDN4DoV6suw2qdSDv2WkTKj",
  "key11": "9b823RHA3H4KEJ4eUg4ahVx4s991gEF72oyUoz6B1p6tkZtcp7cdQvAq8axZRUaY6AcNcdRi4VeXbeNyBoRzptr",
  "key12": "5hGNQp7ud2e7c18kE2sy2AThs9Uz1G7W4RRxAhVjknwxGjosRv1n3vXnMea8J1j4EqoBdT8P6ENrkfqHwU3Ly4CZ",
  "key13": "5fGKjhyfmGmks9PNy99C5BqAN3nDNeHsnAGUHeJDbqPjAxe7n5QF2DyA8h36GqUgtVJN9uKgVUSdQvcUwFMGYBq8",
  "key14": "5Mj3PFwWn6XMdyyyV6JfhM1iopdpcC4cZGsdfCNEhJ8zPv1qpyEZMDb6NW6XbgGVJYM8bW71VLzjynLbfQQiPLYY",
  "key15": "2qc7AkPRAK4Bi4WcYTEnDFgS9z8fsb6m9mLjw3SZ5t1k2aPAedzuBFamAK4pBLx6GdmnsY3uCtD23jPnEZDf98PJ",
  "key16": "5wAzfSgwQCBsLuGrBB8jTrrTC3KaLsTYkaYSGEq2HV52HUW4wVsu3KVFKEznPst4d6hzy2vGnhHPShuJzZs8ZwJs",
  "key17": "5gczPP4mCgvfWtDZpEsmWm9ATW7aidQkhopYzwM64Y9r5jwvs8Hm47MJYtxKXM7dpbPw869vp4EKuQamXKJedcFV",
  "key18": "5KZ47B3HEjSW8vcaVXnFxy6XAVLzUDfHAhuPLPZ75JU4gDG6z7b5J6eyZpMcDGBW6cmHtuKTKHo2NwfsVnRSntMD",
  "key19": "U9rk7zoewisAMrRqhuFqCKwBGSeZf4mFcac69TeSFJGCFnzYPC2521cCKhq7FWCm1R8W5X2fX5XfeC8pMzNDC9n",
  "key20": "6687s5DPEFpmU5Dd2shR1b9aMszVMZvhyAJg6RFsgdt2Aseok2Vpyj8GbbUZf4cuHoUJUffgZqiyZn6bomg5mfiL",
  "key21": "41LaQTpJ4RPBdoutaRxqovYPGbGC8goMM7FkshwUc76jGGS67bPGEwcUh9pV98zzCgqomXaKk4f1uc3FLENBo2L4",
  "key22": "QnBbK9YiRP7ME2jLe33uBQEmESCcDEtzd6ZeCYKm6BaBrRisZ4A8gVHFEs2cX77EMMqBC1DL2evwoWC4vAeUMnw",
  "key23": "5BCF6T5dUNixHUZN1JA3dthqHZ6x1jtXHKwFmdgF36s2JqQeewSwjvE9TFyaz29xHBSxU2zQ32HzErX8wKZ5EQ4H",
  "key24": "417ozogzDpgj6Jy7yjLmDiPUmcpF4xoQNMww5xRUYmvZJjUeKQybBejVx6jwtAyJpLK8jhSSsvPtKptfhmeQV3NW",
  "key25": "528p7vBB4FR1XxwfhH7V1gRmdHhL2f7a33QGaMZKTDvTR8kGPbj7WGa68sGtEEzhAYJLapeiokZdi1HG7U1nsui",
  "key26": "3AWaj3gHek1hcW4iAtRiSzm6oGw85o88SqbwRB1cXcxpa5Xj6G8DKKAvuBZCR9jiGXSsmP6bdq2fxypt9WfwbrnV",
  "key27": "5zbYpAXxaZJNyMSengtYm3Gq7WibniPw1kZEVWD1De8xoY1N2FhixDN4jJJv816A1Y4xyWhev4tWZ16enDo1BArg",
  "key28": "Qyh1V77UV7crENgKWEz6DB8E7ys8VpnVEawsJ7sJsEJHq1yRqDFr2ntPY7xDfy2DNB9zYKgfqy9FZXXVPSZiHZo",
  "key29": "5X4gw3rdV8WL6REoGaBWg8EFWZ6iUUtQDpyD831EAbALEqx61Zg5AnhmjNxJf76HZKgduiBiAYoxTPEaQWLV25U9",
  "key30": "oes1mfAmkpxojFxJ5j7tCLm2pyMNT3dmhH444Rw8jKukMH5H8TR2LJGjxJq14RGNRGwcEASH4UB2GiEjMPbKpCk",
  "key31": "ivteb7TgaSz5DaAnoNWZb35P5gjr3EyUmLEDpVWHoC9d8e4nzrPXYHWMB6jYX7G8acoqdSVmBpmrMtbpBH8EazJ",
  "key32": "tB49sk5NxiZKeQLbxKXxHd3gqTrU6rxbNZFR2htNmocmNEZ9Z1ayuMSJ4WPeiFzUqvLqLA5puXCosiNc4smQaSd",
  "key33": "2kDh7rYFriq3HZ7tUEDKb5vcuYuxJXKW9w9GLadmSfbVhP49HDjnGcJdmncuhQ1jnkVnwJeY6EqB15xSwwijnQKV",
  "key34": "2QCHoE28TcgNZPtNHbDEJyqftw3uUR4Bvs1V1F9vgsX5rYriVHQG8TXsFL9T3kScemLaPeaFcjLTzzmxuScZkbsr",
  "key35": "2J9cGfrMU95NVczpxCnjAw1L5rdJS9qk1qVL7yRWZM33uBViVavgmbU2CmjqiJ8DGBoqUP2i4W1sc1jLHoMvjF18",
  "key36": "5Y248HWqkrPYP932QsYNqkouskMeJP53mz3PSDkbaZooezHQhQJXcGxCH3gkTG3n3FNWCvmxuvVX3VD9S2rdRb7N",
  "key37": "4KiR96wi679M9jVyc1AFV5b5w628N6vYVQ6C39owTUE2Ygv8xuPXwesNX1jkpyEvb3hH1Vq8pNyPRQNatxtnyRx7",
  "key38": "29mFrphQT7rTuhvapE2CoUqoWZXPDNQeUCtRgiJUmNgVBnBiidFy3sBRFZ1Pa9tn5gWkiEBKjaKZR7EDWvT4egyr",
  "key39": "589rXX7ch23qAYLHiHBk4nfx11VwvcnMcukj8AyDYJD1AYqu4uFjqm3XdhxJzJWuppuuuxr6k2dzGEyBKFT5iwpp",
  "key40": "21eD9dXtV7t1TtZdyWiMDtkDXpjjDEVb5dud3etaYkgmjyue1BkvJh3yndho2ohoVwjEvPZFcB6yexG1dJnMQAHY",
  "key41": "5R14Y2JnRVnEqURWQYPwtHgfb9mkbFYDKRptrx9XA9f8iwFDwLxXpDdQJBWByKBDvafkQuoLf8Y6kpc2JEuLu6G6"
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
