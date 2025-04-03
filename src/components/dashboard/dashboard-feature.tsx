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
    "3q6Sa59bcaK4bsUFWFVWsrxRrYrERe3tgBLsfPUVaqrCUyrwKXHGRCYpk3zxw2JhW9hJScGDnMYqGjz2TqLhdgJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rwe2jjnKnQuUAAm9RruF5NiDcJqNGRxjE7spAWp48oSmpa2znysy8okFdau9KY1ABB6gdmQqaqQo5PyjmbTppyj",
  "key1": "2DohMwRZDGQvFbte7az3WC55zTmWW2XFLuHnX9VcpLukhHbeoBtRvGZwLogAcpnWS2jSMh7Gc5XrbBgMGg1925HJ",
  "key2": "4huSDs6cDuhGB11iwWn7YXKzC5pcqNBTuFdBudvNTSijuptMpmxDSQeks6USxvYTEZPfEiDUA3e6pSX7NTX2vs7u",
  "key3": "49hJAw6DXrBLMwdHL3Zi4ZwzcjDf192wuB4BzMiZo62E2AvdAMAYUXbdVybX9WhNj83pN7SY2sLwZoeuMyXo26Xc",
  "key4": "3rab5DEoYaChpynhXXA24AcpZnmVkQAMmCnch69v7YDuKkrhjFeA5YsoEaTc9fvAEyHmNV8Bobgk95pvfEqMaqES",
  "key5": "2F2p9pPVWs2i2UEoGBvKkEEMsZAWUPGkGkXaviPSC9t3QTVLTVNnNuqtvwE8fqct7U9dk6Lv932uuAokTYjYsJXs",
  "key6": "5HUPdxMa8G2FT73cENchv5hVHnwHYW34yBwhWaCwbqKux2fHKCHho4uQqesSVJFa7SHbnb1KGv9Ba8DmZiDiGRw9",
  "key7": "5dZ7BdikC7gjYcjn1U2Qtw7Gzkx6dgBrCxyKszNQT4mqFeb4Nr4VNyJp2VBTTEZxEadxRqKTdXPyHQLwDUsHxxzM",
  "key8": "5i2pt8ZvhMrJKovSDWspfk2hFfHgATyXEFyBCLLFnKJcujv5QtAgzqkPdQvoavzfTiWppCzuSwA1VbaXBCHjT1Rb",
  "key9": "8FGSSgxpvqZtvMt9JiGTBNaArWbJ2dVvzPGnK5MfU1af5VJoVY9jBLGst7gTGox3iDBuW5pK8YyQDVQS73DdiuC",
  "key10": "5UBmdiiKqFp92z4ezxwTU7wxYGiSiNKLkpwpiJ4h5vAmhiGXA6nuxPt6st8TMTLJhZCCYdaciZJBgAHjLP4MZqRE",
  "key11": "2g4981x1VUUuTNYP7QYjHYpzY2rB7C3SgPQP1DVtjpcASo215kcJw8oWzjQCXKNM8TfxHndzVAnfRVfesAuEZqg8",
  "key12": "4zjsvY9tAzpDcP5FTh8K7CBM1wBfBCorSyGhoMdapiGJJwcYDYqbWKD5t1d5PMGasMk8KJ46gJPbCrZvG7zGbawY",
  "key13": "66KUB7mjWTC43rBYH8Q9uUEhk95Wyao6qKYGv5aAsJUUFqk8jEaAHRQLt4tg2NKcTSKjsn9AxUbZiAQ6ZEEhMnna",
  "key14": "2QKoE78WP28Foqd1zKBXeJFmajzZp1Zx9VH6Kx758kXcHTP4RoDAi3Moqhe1mTy3zEJzSeJo4esNEAUJU6crFWxi",
  "key15": "zm6c1fzqiDiHsZdt9TGZZLHEkM1v2u1MQxkU43avr1FqJfMU4RgGXP6GzHBUXUEGMjxFfeWwhQ9R5jXFtqhsagM",
  "key16": "3EprRE22f3FDLiZ8uUZawkPKGaLg8AGh5rsnid8dMufNXFRwdgHwg4NLU7pkvj9a4BeRG2Xk9ChFDJwzubvBEPv",
  "key17": "pe4rL5sNNtw67aG1bktKLDbsP1qVQ5DJMLapB6fyPw2hXskg1Lw22vdwKFjWuPfQ3xQvbn3gAKfScpjexnFAtMw",
  "key18": "3Sp1RV4C6jXfri1sC5eAxdnogaQfoEjcjaGcwy2kDZUP3wxSeFVFuU3LY8rSAb2YkqFJLKboV3Najq7M2R1tN5bM",
  "key19": "2PCthiT9GZ2p71z4hf1BoBNVt5GdhiA6Bf4i8nyuBf2Y8PnSjPP5cv32WNenPcnHpV2ZH8LRNakrPpj3YrJrgzyT",
  "key20": "2cXc4Z9uEukwP7Dwg88huQwSUYVnJAqLttzFKUuuqyCrZEkyaAr4GYfT6wvsXyxs7njwbooWkPKqNCTnQHNoAeuf",
  "key21": "4qafxE6Bjr6JSbCEibWTJuKryr3wG2mBFAPfUYejDAGpo284wqXkEYsb7FihxBLQWkSGo2bA83eCXjbeQ99pyWV7",
  "key22": "3SpcTYvP8TiKmmat8prrvuvKL8QJY3p1ieEap1YFTH7gzyouq6uJe4M4Q8AsE24LmLRxNcxxXzrNPGtsuScpXfVZ",
  "key23": "Wj54iVp2oGJCQ9bdvMc72FbuiFG53qXox4AWTNwCojqY4tyF9rWVT1yAfNXFbNkZBXkeGYmnccSRBejFKrxq4Qr",
  "key24": "2RfJmawA5TCjbo6awiqJvjbzcKsveaJPrM8zSgj5SBdXq1ocuMHMHNuTVNK1bFvXtjYrKJAWv4qtwUM926nfU15J",
  "key25": "5PESmsNk3htLfFQB3kQw4Nk65zytGh2NVStJiMpkCcBivu7Bm8mdQ8jdTnKquExquppZtrJ1zYBuw2xCfUKiVppU",
  "key26": "3oRtnB2UyE8SqrFATjLxiJwVePFdDWbuJMMwbJxVqunMf2Do2xoCjRZYf5qpou7Tgu47RrHkoPfwKgkg9qfxJY8u",
  "key27": "42UusQfwh2F3fPUuycnwfp6iW5ecx7YxHfsJQLecwoafaDmTis2seRZ27ZErkNCtz5XfcbauiDFMv2uNz9FSgtQm",
  "key28": "7xQNqNyHeRnF7da7oTmF9RAvY2uAHRQaSrToMkNLPy5tuH7dMeq1fdAdWtwS9SMdXbidBZWYZeo5wZ7Q1KVdLAQ",
  "key29": "46nAbUi2jJuRcXNkDSUDFzP53Gi2gb7DfUNiwA5iW8GhBjrwVn6dcY3J1eUsw3DtstURuWBfE4qYXRnqxBwuNG4g",
  "key30": "XdTWUP3xSg24WrcZSh74PeVviH5sU333fnQmN4WQVNF1AD8u3kgxeWWfvVNcvDTr5iuJUeYqwhMqxbjY4tRroJK",
  "key31": "3GK11YuZWsQxd5ur86JdxdsbjahaSVBncwrzyQU8ZMYszjYw69t3DiYtTTFGKLS6kHxMWnN2kM7NwBgxsvyStGfW",
  "key32": "ZmVEtePaaT7gaSZjGBx8iypW1XPoLBnwkzEyFi3Gp9UDSGfRKRp2uPyrhCeVhoKm9uxFJHCdMBr2wmDgA3h72fN",
  "key33": "3hXiqiyPUuRx9vca727oSGCupsShhJ19Ab15soMxt6gU3dwzF34HXebNNf8v4Wru3XPDeiACPPX1HvXM2HB5r2AB",
  "key34": "4v8bJXa4pu6BouCTGmhRWBMJ78t6ZHmYjeFeCEyRjcKq3ABCXtGCWPX8T94kaxZzMEiGFe2Me2rqUKuU4S2XYhET",
  "key35": "4d1hLXaYnd1Tpam59WMfCkkcJj49cWw9pGTvdKDk1zCeJ77DSA2na8ZC8RRJG4GytVYchPcmMYwtstUoNGzY9z9w",
  "key36": "4m5cGJHNNkR9aMUmyPQuE7msVQuXKnP2Jdiic9bbmqskaGjWPiuDJp8H8r9PEGpWBjXz3yYD4gHNhzHWviy7Qytj",
  "key37": "4GKNDP72bekzescvoqd1rjKCijASy5v8GogFhBCmxbrsWBcEcrXhxm2N7jM4qiQ1yzrZgJMdazpFQUNgXdbpL9yV",
  "key38": "5o8Ks8S18WmQRcdBRunoWP7nzSbX3mANgVE5aruBVWUcXWXn5Qoc35cjFpGgBdPwg4oA2VuTa4LD4DBswSNH2yTz",
  "key39": "w34EjZAsqDDvJbhTqUG2M1PyDim7QJjAQbtQQtYtqMZDDs6Rpn2XPbR2WkTsd7i3PATj7tb9j6hKBS9CGfsMUKY",
  "key40": "2h3hERbUHkNMVnEnTm397rNdGV98vxQLvK1tMe7Xd7zrksUWbsEzbaLXNvLDfhZj7LBq6PngLP6qw8FYKSpiupmM",
  "key41": "3iUYd8cwXWdYw3t14eKTaZB1cvdekiQSAgewncem5XuNzpeFU2hDw9RFbZekxmrmQBrxPprtLJPKXycgVEHdHUde"
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
