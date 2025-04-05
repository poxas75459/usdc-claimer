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
    "qWRri2Symeu9SXUxRbKMxvxQnsDLh4TFSs71djWX8XeRsRcrc8J753YWwN7oAnJZ45HPdxSXr8BqnFutM9azqyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LC3sdGp6KwnQiSvKt8TGmpruHHwRg3p8yrGxbM1n4jGy1nCv3mDUTt5osb19J3yvXU7KRMe8NcgnwENC1sjRWci",
  "key1": "4HBPpGUE3es5BHaEyWwgioYNmDUjSv6uotTp663dCjoGJrSZQjtwpLKsMNioMDSUtXc6EP5qWvDJubAAPAJzmmip",
  "key2": "3H56W6MSFQ5aZ8K13LNKjJujByJN1BFVpUcNXbGaJ6ZKCkAhGzj1kkC4HXZHrDZac2YixdJEFaE88rU2tT2BgGrc",
  "key3": "4jfUCSUPwDZz3eWrmz7h35F5ye876wCHD9gwBwVs7T8c4jWYBerEabAxWSXVr5pMaPYZyCcy7T1Zhji83qkukCq5",
  "key4": "mipwoBBrzQrU2zctWf3kah4DEYTqoTuzutPqxLZuWV4V116Cs5zMBRm6QMjeSDPjZxuTofmHCDfMtT92xBPfTik",
  "key5": "4AkjwNz5xPHCoWXbvZZdsHZa1L2QV5ghfMftyv72pi85HK8YJ2iPmKxuZnqQ5MCYvvmosSDj4yk5fZa9VBQxgZUp",
  "key6": "33FyrBEhVW49tDqVWHvgPHcNfZwXt6dokG8iFPHFTxvx5EbqgvoAxapoK6CHJYXsYLVvpTBYbDxxbgDc2QzF3Ay8",
  "key7": "WFszq8w4crBJd8pTyWoCrQVT8Pg5FWQ2Mmmd7Amt429VK6mcRhRQPpKc51tosiszxTPiFxKy5Nqv9SiP5eF29K7",
  "key8": "29VmYydmmayRcrnQmVWVzPFpwZGnwjFojZusav6nCAeW4NQWYzUHesv9tG73KzpaXk1NyYrMQcgbcHUQPgX7FMRS",
  "key9": "57u7tRmrZ4eKn7uitNKttpqDWqy5AFvqkYWJdMxvnfKqoFyoQBL6t99povAvap6n8fZieJ9XuUNxtkPaiAQunZXM",
  "key10": "NfjKjbkvWYfwxwXuGeFGM8nxN8dAK1yjUuTj6zxV9xzbqS74FSogza95p5iZFBfkk2hrZzim8UF2EFhh9yRKxWa",
  "key11": "2GDdvc4qVtg54ZhRnoGU4PRD4L5K42JtfvYK7ZvLCvkvXroV8cJLC4zS6EVhznLUUMsJhYugPthtfopHKwR3HAJf",
  "key12": "3UtBjYFHWCae3u8mmVXq3NFr9dZCJNEnktq3yr2LFPJc55oC33U19dSqowSbV36ovCCutPq3k4fH9n73bAU8BkXs",
  "key13": "4NFUptXTktCYLTXDtcXuyAb6cQb7hj2kFk7JmbTgicqTVX91kqS3DLDu8khRRurVPTGhgB9xgCbuwtbCfmmpVjcM",
  "key14": "4e8au5v5xPF6qgQqF171YfxxeGuUD5jkWin8bM8mL1ioFoSnEX6y6R2iCGiK7ykKs4wx4fZeU9hjVKRUfY3zjiQa",
  "key15": "5HEUz3V2kfpVyc5bCKEs1kFBKQ9rL4wY2CzJzaSfKXcjim3br9MciMm5GdSTAuMPTBjKiQp9Law8svKunTWLpipT",
  "key16": "4uLxD4ZSq98NeNnmbHJpAk5f28s1u6Tz7VnfWvZCgaA25Mt6PpgDoMRXN3isqmc64LyJGLiSFLQEGVb2quxoTffK",
  "key17": "wddJc44AMHSGSCaZd7KW33a1diBe6GWsc3ncwTzXq6BUEEASwDqhPxc9nJDjoa5o8xw5JxBnfa3YWjQXBaEbLcg",
  "key18": "2NPUehSsMxTLAgPapjoNiirziuoB3jpPc133S6c6uLz2qjjnY9Jvt92Q73bjoj7vHj5trvnyPjP8jZPqcnKt7p6R",
  "key19": "3stVhvox9ddoZrh1SesbmXVrbT2FhEUHiAVzrSsPgwJSZCDj645o6TCYrzQafqkVAw24kYGq4rtu8pPLr1iwS7oL",
  "key20": "4oUdGrruV55QxLDrVEbbebsS1v3panKR2kBo8wdX1f9sHFM19hVChgjDm4NZHWC6WCQgXfd1jgrsQtuGA3JSFhXA",
  "key21": "4U4JvgsPAPtbRunoEoxVzVSALaZjkSETKQsqFjVpZALkXaxsvei2sy5PCo2pmXyNhggmK9uH29cbhDr4zk5c3pvU",
  "key22": "4aDgrFYamLmWiVe4uz742K2EaQhieaWj2TWDndVK64pRcNy9of5xrbAj1zzrwSaPzzGoAwqTUbiAUMWPQvYGobqQ",
  "key23": "5zX5z8F78VE6dQdwwZkrERYLrdWNvYYggEouphEovUhThrvpMMMmUXuHEu8C8psTuifuHxE7UEEteawCFXxJFuEy",
  "key24": "gCXbVp6M3KA6qA6Hz1qJVGe3qA8JSxJxu4A44RZjaAqhwRoDYW3e534JiwiFJSGnmc8A9CBRdJ9XdMWksDRpG8R",
  "key25": "2Gcj56jkqreBzn3x4jUjMhkWJFoXeW8YY165SFKV8o2FDSeedGCGYntHoGeiugrkL1sZqqxRsytp9GyctFMSzL8D",
  "key26": "26YyvVc3N9yT2JUauRMEbGkBF4BaNCf4Tbbw1dsrh8CMZ6E7eZDG11Jz5sx3LjSDKWaVbPHbfXVqt4s9dMKJ8rWj",
  "key27": "37V9j4dQXstVMqf5XwbncbwkFqeafiNNkC7SF9MFRAfguqjPJ3MQwHXR7fqCZtCvEmAurLY37bP3YXa52wBHziTU",
  "key28": "8HdKjCmRWd6AvRAqobXC3WeFfVVNeQ9gBEAiEXSt63i1Ag6EX28G6ffLm6EsiW5Ddc765xRi57uGgKchf7EnmuE",
  "key29": "26w1u9xac7TkgZzqJnn7G9BJSVLYWMr1u6rUfqjKvCA5n9hF1eRSRQTs9y8yfHbYABzXt1mvkQRupHNfS4bAPg5X",
  "key30": "4tS194dyMVzCKUa7WamP46BXEz2Z6rV5FX8BmqzgsZMAnJQFq94yDk2Q9FRCsKF6rofDGQEizcw7BVVVC4D4hdLs",
  "key31": "5sWns52VfUypHGfLrKySGszzSkGyhRP7VXTSEPJRzxmTx9aGJkpqZ5DdirnGKPKv1d27RNv8aGZGpcH3ySAjYgte",
  "key32": "4KoRzr5pwKvrcm9NfVEABLud7SuRPdbF5bTA9vfkfE1wYGiPXKDExbK3ExGS1QsmjZB1P4JL4ZBM9pa2E6aXQpBj",
  "key33": "MxUEGbbq5JwNtPjzm6UqWNh9qkLqpExXjEotkFxSy6ChzYB4Yt7AjVT8sDB8J3kpetzPQCd5c82tMejeVicQWdf",
  "key34": "4GFPJ6qexQvZbSWFaHa9nRKH5n48b3f8NmSAVoxiFZXzRCo2GheXyxJwnUrJ5R818AoLZPw5aGvWZWh3z4G95HKy",
  "key35": "49JM6mCnVqt7EqhyZNfeK9okmRjGiecpUxYncFYChCQ1NxBHxhG28jFrW1HoxfpxmmmigopvhCdTcRtosPkXLFSy",
  "key36": "26CSoCrEaPN9T8jYRWSZGBmaB8BN9qf4g73SUHh7iQksHzqhWmUn1e2sxWW54rtKZy6oNq6Rb8Zy8X481GLd5Gpj",
  "key37": "uc9xABjgbohP5iCs4zrdWcjSfXm28WtcmqHXbvc31inxu1y98MdQtxZuPdHi3W5Zb36PcDGSELuuRnRmNE6eL64",
  "key38": "3WU4v8sP6ASnjVu2WRi2fRCZ8TsSz1iAprFHFSYp1NpqarSCByUuXnArBitndHgAPpDBhe5Hvtb5x4bQQSDzi517",
  "key39": "25bUJL57bmKpJWaPyu2fPaUhMZfc91yrNLhqTNoWX84Cg8voauVujd2hYMpyHcopC1PPSBNURJyDoFqp7Z7DuieL",
  "key40": "122BQ4WijvtuGTNH7gnbE2xtAguWh8wpf5Ye5yJb4jDHVeKvWpSk73CbCqV85zWoScWiHDyF285CyMEpc54vAXYS"
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
