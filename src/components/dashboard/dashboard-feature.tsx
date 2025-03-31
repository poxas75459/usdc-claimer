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
    "57SHybBEX3htRuszeQstiLuAEHiQpyZGkHz2FjG3MqqPAn4UGnsEsEAaLa94YGNTYyaEZHBn2uB8Qp6jDhFWrEfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52H2DWTfnNPCWBVcNPbj4hegvX4DqZ2DjyesXt1xFR9MAaZNBShs2YzEL63qEufJDPV2RQYY8TqUh1d224RhKcTW",
  "key1": "55S9rMpARWwka1EeyRUtoNHzFeA4cofKbu4oNnaDMC8y59Aesdp53jQL5ses6PAFvejrxrQ9YbhSrGZUe9XdZVVR",
  "key2": "4SNrUnwFkerY5gGxn9b1DyuoWCZeExTZAnFJaF2zFDBrnZSCoxVF19c8eXZ5R6FkkWnyxo7S4TrQVr956VZPbfEF",
  "key3": "LGA9Jvy3pwWMzoUjZxC3EYMy75qS9YhzCGGrPLujPFYcZXrryPkr9ffngK4TA8uEA5tzRKfE6PAQm6uFQ8a8SCu",
  "key4": "4C4nRnG7SvduQpE6AhfNAL3GzELzj1KqB3GHmbcvzuDuqf9WVHgkWfdxs1ejjqDBwZgtEoXgjqjqctSSKhje9moe",
  "key5": "hAr4RXivC8Rc7zGSaWrtUCSV24Bxok1y7JqXGSh4wT5SyhKkY6vwyJb8mTWTSSfo3FTUc8nDNqWRnPD3PFs9PPi",
  "key6": "2WP3HfhY9MRrtLaHg24XY6G6c6FSRFT5SD4yDExkUrmDe7BawrJ5p3zmQtR7Bhp1fg3HWDkfpM6TgDhxGo8asjoU",
  "key7": "5r8iKu9H3dQ9w75zG6u4LFS2XazRv1waMjvd7ah8Rakvw41au7LNaDxEgGVkwbqXUsVEk8NLHZCtiEAMofcQB5K6",
  "key8": "48TJkra2wVMsr6dMkTjkq8KjuH8amwQT1cFEoLYW6t9ARfRkHee289DmybgvbbJuyC46sGPB13SRdCxD88iNTNVr",
  "key9": "3fpwxgaH8cZsnvQ7G7vYhqVUKdbB24CusAYo6z6GXonTCBoiMkaH6H9rEAKrZXK7b147GratNReAkTtfiK9Mq6Rm",
  "key10": "4GFCfJHYVcDdZugL6yGsM3KMTBMk4L4h3hByfnov3AuXj5LrJGQkbjYrAEhToHubJRsh3BNz5zZ6ehAvuSXBvtHS",
  "key11": "3fxQBFhg453jYKk9vjLxdWrZobJSErHrufW2H9xa8E45Uc8MHUpabUusVGk8ZiuJxFiTKfaXunfvP4yz3iU2QZbf",
  "key12": "Fek1U2kt2WKN5kL5PbyB8ktYKKWc4eKWoT9iVYUGiEnbakNnbP7JRj5FzvZaT4yRwSTQZCUCYUiQ7d41Ux632Z5",
  "key13": "GQFaSydTMrAhyDKvtmtU1uwmW9xnNDYtKiShUY7WExL1gSKU4fd7pgKvmZMb2CNBfDxbZEsPSk3wdj94uU1g8kV",
  "key14": "3mqSYAFo4wykDSGBJxCMTUMUVukzEJ8nHrN9A37Yr4mNjPAH6PJZQCT1XFAsG3MTK38bALN23YUz5reut9GuCRhp",
  "key15": "5k5Mjvq3Lea3e5XZ38hqZUct6pU2297EGh7kxPMdrZD2wDLtgjwwPdzSVwwcHoNyGh5SuhjwzSJ7kCDeqKuSrNbs",
  "key16": "3MmZcQqwMciSwDWuAYKYRbXaSLtvL5habr9Gbg2TMvMwDgVL9id4kjxwe9TB7ru3qSFgJ1K9og2RFQNf2aoXZGdV",
  "key17": "445iQYJjqvsmRtuECjEvC7g9QXBiS3oAoySkuxE9zngMH7DPjradWwRHYsoqmXdfSSpEubqHw1XAE1BCUoxTzGzf",
  "key18": "62zJkQqU4KGdviDpau6gJyepD5bFdHkg7mHcmZsNLp7X8Fr5bztE5mFQe8XRXeTvcFRNKYSiUCXZToGibwBYGmbV",
  "key19": "3wRefMmg8z4GJ8uJ139CZSwSuUXtfyaHk1XBBTDqHhQcBoYMapDxmEgCD4oUCADw12aQdMP3yREhEVi1CWsR13zz",
  "key20": "5QTe4edGGXUHwF81u9dtBeRY1LTjTxDiQLayZw8dj6CBWFXUjSfSkhUSmrfW796P1wBPRnKMxLfJqTdseEw3wTuW",
  "key21": "3PeW4V7CgUpVyYu4Yo8iiV34vd9Zbqjof7dj47343xXCNAPjyexTXsiBj3DFtTWv2ZnYPsyiDrs2Ku9dFKRMKudL",
  "key22": "373PdGnFGJcQpTD81cJMGi14psGYD1rDjXv3iUJrLSnkg4C29dfUmGwtW2GagsyBQjjKn7WJLmu6EBgwb8MANDLs",
  "key23": "4hBhGK4PESQeKPJuDnMSqxhmJDFfDG45NSYUeL4bk1D8XUqyZB5PwAnx9G8XrDyP2PNyEgcMRKdxChmoJYAEuXZx",
  "key24": "5oHYNmNDhAFohGVWXvredLSCSLvs9Q8x25pspmJyMVMXHyYaMpiATyjbvwJwsr9QrB1hYZrJhqRHyb7fxGceCnYV",
  "key25": "WTkPyc1b525SvmdU464afwCjSY1KVNCSDfQ56ufRbax9kueRHEfonPdAihVNEEWAZDBM9L1hAajdyEUcd1nKhkh",
  "key26": "baANJpT94jKjrQ3U496yimsdsa9R9KR8VHTT5STAt9QktSRBQgRQ7Q8vFqHAGQfqHreE1B4BGuatH7DyG6Gc73A",
  "key27": "3UBV1HQ7MyW7Cj4QZXiePDurAUNBAkWwh67kwHuQwgxNY5xju8vdH4poQBZReZzxFmKFfUQ5VczmyLEs9ZwDxpum",
  "key28": "3oHP4b6LB1tkdf8196fy358i2a53qWLrMpfJoosWjg13HHLS1HyP1TLVi8KNQ1YpxFSSHPcdBFQSrregVJjGkRiR",
  "key29": "2TmMd7SZ2qQ4SV6dfWExV17yfuZno7a1tU9LFvVqbbPzCUWNvGTCT9itWQQa7toFwdfKxXa7CoYQcYUY6CUT1Bi5",
  "key30": "41jK8p2oDjvfELExYGBq7xYQvmJ3YkAAik8UgXkH7M3E8aaimC5Cd9Nn1NmNVE8ULEv5zciL2Vm79jYALDvqgDUA",
  "key31": "3MKZXLjXERv7SskjUm6hYGtw8FzcbhYgAmLAshrhoFS8McTXTgQKUVTib3J6ukVS86nT5scMoBCwPMfYP4VBrAQm",
  "key32": "avFuw1Bebe2iCE7vj4cD1smanqDB6pSngxKBEa1sUYYxqrZo4T1GtNv1K2so2nXcdPT35J5dqTsfJuLzk96ugB3",
  "key33": "kmV55YMCSkeCXoxZZrRqkEGRrvH5EsZ4dLpzfKvu8DnThhXZ2CohCYm13G8HYehxCQvaqkgXQji4iaoJCLx5kLp",
  "key34": "GunqEfzWjmDvw1YCLxb7rah4gPZphUuCxiCj5VSNXkQRMWyYTZzCTmP9ovJfqziGyABN3YVukUhYW9B8yBTZigB",
  "key35": "3paVfL7oC7xobUq3EmHLNViWXX1xAz5aaWgqrE73oKahZBq77mG1psZQwsuNEJMiDf931xAMhxzeJEjw8HPG9ito",
  "key36": "2jiiz17E71cF8EjRJ37KgkkcRj89RUYVJYEBjqHM3kgMTemjxGZwGdMicwhFe2HVASMt6TNn1ktwUfLw9WJhjpJ6",
  "key37": "4A3N8EeZMvvHnEZEtSupq81MTZd4xX6PnR2xt6qXvk4gme8s6xLDwPke1TA8WsXHTULMRZkBkDupYZXvKfNtqvqx",
  "key38": "4R7rPkxecmir7Ed6tzm5z8bKYJnqG2o4Xys5ygn1GNfzHMLVN1cYjhtgitBYJoG4dUCjdn66hbDw4yYoAvsG3hRb",
  "key39": "5WqGX1bz9RHeq2vFA3Su3JR3kdRmy8mZSYrU5mezJu43DKtziSsEFM8rRcK2KcXb9aB1P3dGrgmbiE5X8d73kQ13",
  "key40": "3js2LGqymyNC2eUVhhARUpgUHcE65GccSsr99UdkbDY1xYsg8kTxoprGnhZ3fiDLbCoy55iny68Y8Q1GWBdWBzDQ",
  "key41": "3PoZ7dTmHGFgmMHhSvhYKPdFFheR27r1YWJfgwnfaistdmuqJUFxG8Q3aBGTX4FmQdhExUH8CdX2YjsLb7LdzDEj",
  "key42": "43aRTCJb3HKDz152GZCxEdEDHEHrM3P1tz3cQ9FSegGyvdp3aGfqkBnfsLURGrRdyBWpZJJ849e5vKHdUP6XVs5g",
  "key43": "4ZXBNXYGiHwqwtNvZBweWMXxBckQW4Z7G9abP63UEsM3WXnexw2Uh1iit8vYhXaVndEzHVUMQp3Pw6UiHA6TUftp",
  "key44": "4CyL1uJAt3CRETL3x1Cd9whsamW2eNVjL4AEhqwPkG6EJZyQUvxomakLw9X6EMz4ikK2oFjjuE2AWLnjG1N8TQMg",
  "key45": "3pQDmgGbqV3axyRAXgMJsuezvCcvXKv5YR5VuzXXsBMonsLkWkv6ZE68U5ua5s8j9e5TRmbkkGDkCgJovgrymVk9",
  "key46": "3ZcFrqLuXVwMmJHby4QiS9fb4MTXMMorcKXd3mWnWLRUDRSvzt9t8DRNnvgSHx2pAhgMnmJdBBeHxc2WdgxaSAgs"
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
