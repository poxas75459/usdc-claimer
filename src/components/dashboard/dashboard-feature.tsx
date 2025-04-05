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
    "4ytiFmazp1zFLiYXgC9xNKn1ykYXDwSbymKx7idpq9NBnETAypbvgZ3xgHmbsfmqyyKjefdLX7cVoaKcCg2TnQMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JnyX37m256by3o7To2MwkcqZRPuEujYtcf3L4AtpQ7CANP1sPrSnoyTo7GtuNtPcDajw4vynm8bddYhKZ2SjHQj",
  "key1": "2q6jWgbWnYF8jrEV7Gs8QeZ1YfEhi3ASgmUUTw8t3n3vrZSeLBokZtYCVsSLrFamwbUH8z7hAf2SXA6DCrRJe7yc",
  "key2": "376d8n3gYAbb629h915jXP6W23KtQv2PfjHvUJsV9PdSCqqnWu2cJQLqK8tx9SKdN99y3oKCa4WHE7mCa3JARM9x",
  "key3": "5T5M8YKtERoFYd6984XmhJ1qizdqzqrk5HTBdGC1oAnnybgaRnmEjeMRKjFAFtEWLgP682kuyJGLVRVdKLCYKTWp",
  "key4": "5yr2Z5B18EYuP8Ufjb6XAQfyWq7rfpWXvDwnQZjHev71FaPvUWe5zLRKJVpcSKvKM4MaTh9m8t787wWFyf49NTzj",
  "key5": "4sSoBgp85ZJfYZ9fD4YUKVq149fWz1Eq1JbCLkYDQTkaQkcVsNKmcQZBfwxdepW1RsK9sqxoyAdGrGHazXJUfbkh",
  "key6": "46YdAAbvbnxrDZYNLsyV2MgnXE5cvJ9BpExFv2LLGmk78KvLXWbbqDFKeAigmJscP81UfHSYcoT99zQB8vuUSJBN",
  "key7": "3p1XJvq8vfXLb2sNH7o8e9q4Az76BbyMTxZ5nNeDWCeRmBaSoHKx9qBrzR34vPKdrq9bg4AB5Xhq7Z9f3S2KFohv",
  "key8": "63ZRivD4zmwRrBtCMVSvP6erW69n9RYWtbDvUVE6joaSyh2KgLiEsutZiXNCP3nFCJsmFLUM81C6UqXxCxfZfFyu",
  "key9": "3p7cwhvJBM6ugn5zoPpcbxTc7YAx5E8FB3xB1AMdrffhhyYLEVDK56X8hvEQuS46RvJ7tr7L64Hk3H1THp5zP2Sj",
  "key10": "ii5QNv7w5cmD2v4d4yTYXiie6mAnMQGcJoP1YkrPBQ4Xxo6C29C4VFkkBJT4GecAQUhVBuaXqmnyfsLs1eyWySr",
  "key11": "3X5GDwFAs4sNTkPUQRmTew1d3kykSMBXVzFghebr5zyjnUxBWkSDwi9TxYNxL9E5gyG6LsfkLWYtvi18Lf8P4zS",
  "key12": "3ZWL5ys9LxUEJLeMMDNhXTZLtsKyKRnTU5oVTBpjKbATfipqDjGvYb5Jr57N2L2awPJGQ1HDStghFbdMgGoprk9H",
  "key13": "3B34Zkm6Fa5omPuhiepNqMreLWRjSJ4M86DzwF1tubwuQzdorQJSaoMMBP6JUvQnrGexqwkj5wd6PKvR7yT14JkT",
  "key14": "TE3kryfUC1LikaJpGVwnu2GRoz8RGH9Zhs2htnGJJCjsMAqrPLGQaQpceHpxiJ9gjRphPQuJiPLa2xHUSHC42pX",
  "key15": "tQs9S2L2jwBTyosVWC4wDf7Wwcq9bd69HAmepYTtTiYpgWadfe29tNkqrFecDpi2Rw8mijzdsEcYqgt4NyjyUJY",
  "key16": "5mfqyGyCCXUR1b522tFJULCpbt6Q3ZzWpCsCYT4zJ9B8U6Bf7xARsssQoKPfi26iuLbHsgU8H3cz8DVwJb7kmKQu",
  "key17": "651zLwnjgNUQqA5o42d7Lpk1EFP38Kdg4o1f6XZab3KgC7oaaQNZfWEzioTQ2i31kaXWvX5XJ98WyjFHwnXMrd4A",
  "key18": "SHRUk3tR1gGeo8bqEde3GcBH14BS4Rnw1q4qioPZPeQCUhzLJWHNRA2Dkwap6GmmVU2fnFZo1jBJCsNSUyyXfZ4",
  "key19": "sMysXexsBSrAtFU27YZkA3EWcpA7paUjv661tLuy8ttXtb9UNaT47xfJmpyVRXAEGZoM4LfQzWvNwH2dAXdstKB",
  "key20": "2ghR9cN11PTqr2Z6etQd81Lk5KxrYGXfbfxhycPLrJEo6gx8G1YLHaEnRnUJVMcj32QqgEnZLmNPqsnBt3gQDRTg",
  "key21": "2zzA7oKA5QZKFLU3ticSeneDucYkcZw5dP7wDSMPsCaKdKURqs8XkpepxHYvub5Wc7ubu8j2KZcYNz2FQxRAxMmA",
  "key22": "3htLd2WDoEiHZzGieEywR1nwNFD23TFhwqbEuUYXwTwxm5EHQUz5LBAke1svzxshGps8Axi3xzeX3kWLt2h3UsWu",
  "key23": "tK9YTiJ1udEL4hHHQ8Ld5usraMeSygcmk7u2zu6FoDRFNL5s6LFaumR6S1CQyJ2YQo1bTxsQMMWSXWZmQSVU3Gf",
  "key24": "4N8iB27y1RXKij39RkmQrazeMsWpXb73CKKbeZDybNh5e2StxifBLKdBbM97UqLmvUZuweRdhDUN1qSHiK4LMoi9",
  "key25": "4UQhDiyjzEoCxF4WnaTtb88DhiPA1R7Hjp8UhTDUjXpMDS2F8eUykfbRzDLbQxZTLRMzG11xnFCikcRUwTpTRQLg",
  "key26": "2nDY7FDgS9QnABGotN2JswHFZK5gLE4y7wzmrDve4ma6fBsrR9YSp1ApUmEegAwTbzKubh7rZoaibav96SXjv4oV",
  "key27": "5MQzL7FxKcwLb2NiwV3hXtqDqWjJcS8XAsuEPJfCdKJuyamZJAATJhy9oV57VtegW5FdPFmxFwZaLdrZVJ98FznN",
  "key28": "3CJVoLXAU4g6ieEj3rz1Q39ijNsfPxjQ7Cp5YNByXPmeizisuJi23h1GPnsZVaev4dH6b8BNmZaMS61xKe7iHCBX",
  "key29": "49CZaUmBfXmvn13jHkkNSrghiugzWp85jJcntNijRrTFnNmfuacRmfG4RfsqEu1wntvVBVoXusKZFBSfxXQzMbGj",
  "key30": "5ey5GvSvi8DsCYWzfa6edqXhbVZ2eSVpk4Ksn47gtT6oS1VNFCYJ4NeeF5tC9GCPaCBb38nxVmhXSktJmN3X1Lj8",
  "key31": "4gCo5pCeQZWK4DiSdQSiWWSUutKNXgyGkemfRaYuDq13124ZwvWVe37C96HTCLmTcnMHmWJ9s69hstKcSJ9RHRB1",
  "key32": "5FN7SzrAnhTJyAahygRC5wBbGwKBbjFVEitzQApbDUpMGYMg5wC2aNCQ4rdbWSeVJBfPCEnvoWHVqeEs4bnLX5RA",
  "key33": "Cvkhg58WAzpcNvpJjSnEqNScUJajaFCGP9MPMaT9Wj5YjaDwuYypHcydJCGJ4UoGAZkfTS2o4FZFWysyUvzHEPq",
  "key34": "3nwwxm6zXm9QxXSKaynCbJKf1VWiJRXjkVxvgAhn2jv1XGqVVcYXk1gi362XS9XLVQZSNmZeCQDJ21sSzSWZTyxM",
  "key35": "3pBSWxASWCPaKPuAinAwtj9UzPV9cPjQXHK76S8jZLqTpqZDW2vaeuaiAAxmWGCx9tteNz75ymmhdpRS4Zx1UbnX",
  "key36": "5gTnsKFapGTBHNmaiAJU8ZaBGcfY2V2xu6h1PgsgvDGJczsvYYzGQPh19geQmY2YtrgHkdGdpYER1M9Li76iAbQt",
  "key37": "2BrLQSVjRxfNPkwHLAVR5ojwXmP8T9PX3MZeDRKJz2tLeSRh7aEP1RHk5z5nwjPbVuyaCE7qffLWEvQm3rSe5AUv",
  "key38": "3hzgftX7FhxZY2XoQ6WND1CQJDZCL2DNrNMDsxcdHWHzvPaprCRnVQK6pLWMEfnZ9FpHxCSS7wcmKkPfkd58BFPh",
  "key39": "4d3JsNw5pkWorwqFVp38xdV4LVFQvtw3pZGN7W7SeGkMmFWiPLuTmYmPbTeLpzhwdLwTxhFdicLQ6CZoSqHBFmwD",
  "key40": "PqyevFUqQKUZonD3ixhwwC7NVXyFS4Lzjui1JQ8Jcttep3debSJGxHFz4hSohvwzDkhjS3V186J6tM4JUR3Lpjj",
  "key41": "a7nD1vByh5aequzim333FTU5i35nKxN4UpXkTVHzpk2avPjHrfeP8zUNXirXQou49yBCY5VUcgdqKsCaK6z4PZh",
  "key42": "2oFMKMatZsDGQFgfkoouffXNCZzbHuAxyS6J7FfaZGyrzqA8hq8ZZDWXCtXKGG9r6B9YFx7nCXkEzg5RobPybBXW",
  "key43": "5rPvz9gHmxcSzynCfjfpBvSQtHRYcDLWNLPUR5ekz4Y8c5q77sdqyfy8yHE56tYytYL32yErZpBeaH43ntcWXooB",
  "key44": "32td7PX1zX1Rxx8EKUMsagcaEot5g3iLn2upvqzVnwXtRNPjgg9C21iNMWA2M921R6oPZNgaTxabPEieJYHvteWP",
  "key45": "2ZFgUW4X4rQRY1RNgyNMp5BNbrPqDBhigjhebjcT2CQ9icthuaTAkZbdewTxN1Sp3yEyBtAzYRcQF3B5Ez68KXQf",
  "key46": "4FNFiXJDsspKVSAxSFBsD345cG9CB5D1dyoSFL9ABAYDf4HZLKkrgHCuyA3yUSdHDGagmAuon2stFvjZwbh1ewAw",
  "key47": "En1M7JRjo2tqBT3YntVY6Lu35DicDqYN36BXPx7YVYqz6PPybtWeGZWRU1hcyagRbvkgwptUFs2HWud4xo6APDu",
  "key48": "4qdN7ma5w77iuv9K4LxC8yGZFvVck2ethyVusST3uqCWTfuvAZud9j6HBr3guSovEJxHqCfueEU3AzBAMwaMHVGc"
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
