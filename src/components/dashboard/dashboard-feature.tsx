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
    "DcfBAzF8iaGpaCV6XcyxfuT54ynor2Fpv5DFH2mAdVrBvKuwRhsydA2xtyiabiPAhi9s9yjjx4cmrWUcok92Gg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5agPqJ9g2ges9Ei7seh5YfywjBNsv7WtTpPhNLZ3AUonKvibgybyqoEQCbmwW3UvyYbdYeZypTte895UH47E4Gmd",
  "key1": "2MFJWLsHUKGRDyNJwx6E9cbbFTtFY4BcvVq6RgxMyUjmnSctejFcGT2aJUhnLaFGZ8RW2cr2YxkewgH4nsyqhFY1",
  "key2": "PcgXqdBsnsu4tUt83R5K5G1z1AX5JRd7QR9VLi5oqcxtvkke9V2kxYqQyRL3pvEPnkHizzvU31YpJz6demvkZDm",
  "key3": "5CduQHmUWiPxVyv6h9hk9w1qV8ZovC9CeTk6MuJzxcCUG4YxqrWkXcYxRP8xcNHvGEEuJUKqXz7gdGjDpHiSahMa",
  "key4": "TBkrKWmqcnULGDWgzDbdhDmmCYhZ1h8S3W7b9dTQHAtmFjMXZDcC6u3b1vKW4eL8qHeEneZTLRfj1Zumtz9Wspc",
  "key5": "4mqUwNe9se7tNFep7MQw6XNRm5JDHgwUwLFDvPwi5VyL4fcZqtfnyYyD1QAPKQQZPEjhBDqMVfXcSZWLdGHxKmK",
  "key6": "2Zj66ABSefG7KupbjnwPwSGhfLCv9HBC2236bgQFDG8miHNGKrci1TWn3q54p8N6aDfcDwnnDR3SwgoxDxphNnLP",
  "key7": "3qnoEP5mXhASs2ywGtTbmxE3Yh2rQ5qZnXGb7YCftWnFMRcMiXXrHBX1mbttmHbqrPAFL8xQzeeAUsS8Jd6pqsPJ",
  "key8": "4MUKk6DfZMvbFZz6HSW6tR7xtuX8qoGaQtqgGedpJTjRjetPHNhu8tnLPLjR9TfHqwm4RxmAfnJyju7PtdEmWLqB",
  "key9": "4GjQT6EMrVvU4Ljc2xXKApM7ngd4M78vmuEmKkJKmX2KH4hdJ8u2SVa8AmagFn3D4jHtAqaYNhKmwhy4LLey4AXW",
  "key10": "4TSKDzUMz555bzbym8maBxeAFihS9VsZ4W9xL3erYUSqfUN4gT3XeL9LawkoGYjv2ThXZGs6zGZxtAr5Mr7TPJem",
  "key11": "5YdA1quJ1yDz6z3WTZdBBquUwHMZeUdFfb72KMvGsvBwGynfcPK8k2vPNPKZdA75rkWM1WwSdiGetpkozKKporQh",
  "key12": "67JfuacxYzz36yWvtPe9m6tR3EwPHXRLRwB8k3bHxFKQfjdPkpFCYLWXUz5JD9GyHYKp3sWrkhuheuFyeNL4Htt3",
  "key13": "qEahKQCCTQA1pxWN2EC17jcCYKS7hsm78FoBXy5tG8XzBS7aToukxd2JNX9X1rLwd13Js7VZLNDtaDEur5VmLza",
  "key14": "5Unihc9jvThGacNCirF1utQBheNX7djjUKssqrrZrVBBFvdtdr1w5KrGKQFqk3MUey9bmuQLMpB42ZLousr42Fpz",
  "key15": "4ihcCg5w7xdQDws7aGcudmfgcfn7L85ztUoRLxEuTCRxbkoLZgoruSNc4XEAXFtxRtywfqRPsCCq8uiDBrRvXBSM",
  "key16": "5k7nHGB2UxRvfth4nDY2servAALxKNdkHWmjjxZFFRZYm6RSsYaK8GXgcEGfQWiHoa5soYH4K3pzF61KiemgCsUB",
  "key17": "dUQtbdLraNWehG9NTsHUGkPtW7CxVE4SoQP3FZo1qfU6ECLiAhmBywPBYLFLQuLbvvvJvDPtsxUtAryuUL9HEEn",
  "key18": "531rW56WWxCkmRr4QTx3QnxtSe6WWTZoTHkG6Z91HTpchcY6GyPDg8NBYRLqPJzy5uPWoZg9d5cNSw1fF3k6SRk2",
  "key19": "2P93jQmwR3wqmNahiXaVjzpjB2dYzF4pYxorAn5gfegc65eEzH5PkYky8Gr8K5PFYET4PRxMJa61xAffBFupKJj4",
  "key20": "5nerQyqSYrSWbz91UpWdwtvPAoBiJGAnZER8irpcWxnJXZgvsxiuaatjf3jpMoVFjjfPGnLPC4UBRC5NF1wYYq98",
  "key21": "47opZAvZXhb7WgKu6hpy9rKHsh8AC634xkw66s72zaZYjbtAzT15V7hurqUVHD2yyw3MSHc7YisD234Td2w1Grhr",
  "key22": "4QPkBZgZGQYPYibvdD6VsAQ3BTV6f1mUtgNzSrL4dYhbERJcQEYAzSMutJKjQURZ3GKbFmuK5vLwfwArndHkvw9q",
  "key23": "43Q5c2wM3SWKzgyoFGrHMvfcNyY2nc2ic1wpr61NWf8StQXwVv97bwkE57waasSYoMrxkuUhCJy4zZWy6Nt1rfbA",
  "key24": "5LyFWxwDbEEq8mAvw2fjfWEBQf7kUtWasjzbuBfdxfr2UYtQ4LQ4wQ71YLFJe24tm5dQ4RFWzEJAZuVBURwKnPHf",
  "key25": "3XwCdbprSLZHdbQ6qZWEKatgRSp2HayHWUw9RCmHknRiaBBrJ5ajxFhqEA89ZhP4pLuyTd9d8EeC3DCNsMjYDLZp",
  "key26": "5a7YtoHXqL6W6XLUtaPcWAtmW2GErqg6e6AnosK7znJzFCURktFjN8qTraNDQL22XchECBtg2fDMAaiGdBtRxd2Z",
  "key27": "3LUnxbgyAw6zpxkiU2e38S3EgvxdFFfiPWhE6FaTKP2EV4APnSToQHt2ADHgbyjVvnbdL46AsL2wc8p1tgTN42Ck",
  "key28": "44uyjzj6fDat4DhriSyv4nyxruZtE2pMxD9WxLmoQB5jxCUGFTNM5w5ZHMJxvduX56p8KEViYrb24nKr6PhE44Wh",
  "key29": "hTYZR3TR2RCP4trydrkH6taftLg9cyDXbLFske7GVFTHyZejDQec8FBX5AqfhznLvEe9ht9JAMGT2no9UJ7VwgZ",
  "key30": "Yjz2LC9XGCfQCbJF2VajtpbrHwPLEwZRJ6hpaX6PoTi8LpZHKdPFYDJ7Lu4JWr1aBUxxrN3Z2DqhCRzHjX6fTyu",
  "key31": "5gCStX3teVxrjKp4cYu4FnCDdQD3BbQx8zggdFygwrVRJTmaiogSs6UZyE4ye1tdooXJGVmB3QQ1kSm54wbeZzn5",
  "key32": "2KocofSJDpHMvuevfhEzvybpHmD5y6BXApy4LicRn1NncULcAhDobTeQdHZ2XFLLYSnVcJzhcJtLQY2GkZvDQDE2",
  "key33": "4tGXqFYjQ672wm9ysqwHaRKv1MXU8Xaig2MejAqy5CU4chhoAnRbHnhMthFATexRFdXPTcB7ApaKuvG67UBN1Qbp",
  "key34": "2Ya7azBgNhnV1kTE3nL2pztscJJVdaeqCFvC2jN4mXjqhjG8j8BpzBpr4weRfNbvuSoWe62v1P7FhioRQ4a6RsXM",
  "key35": "3Uxx6ym3CPdwg6pBfa4JZ6UgUjherJmTKngtQzXFUQLMuf9gdNbbyQwSyehtAdzdbMjSQiWmcyyyv212RECJRp9C",
  "key36": "5Wv3UBsNbvB2SNjcqntGe8uzsxQt4QJjii8fEUjXhXWgUF2in5GQj7Cse9XpWHjif5tTpvFqBraLPKiEfZKg7SdW",
  "key37": "2xEWgFkYKKydBnUUZrNDcLuSUiKvQYR2bMLfEFZ3j5ezogUWRPAm47skppTm4TAxJf8DUmzrnwNQQrbNgHAiG7Pi",
  "key38": "3ZGtr7MR3VVahaWhEd3rh2YNbdDhpeVJtxqVzWEqsFPkhQAt4mtyhA8kisUa8Znu3eX8C3gz8mcdW3xnHauZb3hQ",
  "key39": "Z6RWmTHi1LSpuUcYSktjS1RWkBzG3BRxKLN2Qo66XE2McHxKoGmqQCDnMc2Yjim9WqpjSWJuop3bEqkLsUWUcJn",
  "key40": "2UxUgryLpgwnZKY8ihfrJeUYSiBPrG5BjxAG9Xv4afpycLGLFYmskhHY1suvUwu52XGJJmmTcZfHeApY7mMExn7L",
  "key41": "SrN6FE4ixYSozhjNaqHxsxPrXGAQyXGURsDk5jx9zhCqkczyqYgRvtrTRuJpSTu8HqxTGi3yF12gwWfTnjARo16",
  "key42": "5rvaFcEhzqGjCKLEbp5R4nzZF5tfgf7B91PNLJc5pivqeoBCCKdFYh9xxqJcY9qJwe4pErv1zyYQnRphp1nzHiVP"
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
