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
    "2DWusMgLhwLXB3FrkRRVCfCZarT6zhT9BeNXYebR8ngr5NnRja8qhsW6i5MWLkUR1GZBYVtQwLnSJZ1rphAoXPQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WDifZbfVVCySTb1Zto8JGxu4bib92CqDfDVyHECFqkP2xetvprbjBAYr4HYuth4JEP6ZsDHeaSYjDwSEmevktmP",
  "key1": "5XQXYT4F8aYZ6verES1BgTs9hGoAN72tzMeYe7nCeAUV2tWrWhx79KkkyG6N31zn5a9uK8Z4GEPK8fAU7m1wGSb3",
  "key2": "3EcLXpjNKbFAYFjKJeDfwqwzSqRZJKVCHj7FtutqenQ1LCpx1bfdzkLxs5aqtQLgsthVFKQSt9sWGXWsRugHGts5",
  "key3": "2eDtWxvNQsSLt1NYeSri9AUJgXkoC2MD8vgXkmbv7QEjpcf5viCFEvjkfXVYybt62PyVN7Ug8fAaenLTdFmg75cb",
  "key4": "KgGnPshJ7mpz1xvQDBkvtaQGqTHRD9Q2H7P4ceFpLx9aT6PEvw2KoM7fnKC32oS8sCCJwVX8Bccu69qSrV3bdAH",
  "key5": "54EWy1nCDjQxqEpXrQyLAYUAkYftMFq1V4XG5NDMiZsD5byBjZSWApBCMRuWSC3oCTjrXopvKc7bKjJCdutbE9Vv",
  "key6": "43hRvJRHKpaM6MzPdxSsgqN5wn1WSPqqUeyQjEjHVtVr3DuAfgqwdSTTyuaHC7LVe28fM8cckxwY7t1nHJRrhZNg",
  "key7": "62hiFMtSgtbqehrEiMkQD5o1fQd1LNtv3KguAVDCeM8Y1pEDYDAEvtTN3Kxrp8Qm4bGE2J9TJuMqofLqmoFS8LnL",
  "key8": "mTMzeWGsaFcds8rrYYwgAdfVKj4exBEwkEttoZMzcFEpjYxevyQr7yka3pET5om1jzurv9XZ1wNxi4VGyA6f4rf",
  "key9": "WYNSG3tQpkKPhbSi19ieULGiuCbmdqiaJGc6acpwqDxW1XadmsHNn1kxfBxyKFc3LhfAjCSjrGGATZkM3f8N94e",
  "key10": "3j94GzHJLMgebpARdkPX6f7G97d9qyZwMTv47VfnECn25TiCNgkKBXEQYDzU6GoNxmtZ4aQYQ6ice1hMYzUUmKp8",
  "key11": "2HJmWABYgcuZ5VToKCgB33fXBxqxVHgQwLY1r5xBKATHXc95suegQimr3UpGPQ8XNzC1Zf9uhBKd5GsveFsDEGk",
  "key12": "2FmFqcpKXGD7mr2zb1FjPqL9SGtkbqq9PL46wxLhPShHQYf9AW6c4HZVQdjJ3XDop9hENaLCodcad77qrKXo9tq",
  "key13": "2CHJu7W5iRm4xWAmBD8aYtqMArLee63YMtMqbjtZndxHe1K5HNarhkyKqtCj4v48pESZJKTkShaJNTtzbvnLmT7j",
  "key14": "4AAvtyobdjXvUF4aNjbWaX9JsfbCbieedBVbJa3eYoBcmUEiEFduDotP4Q3boBxXL6E78meUsUV2vLhEc8Bk3rLk",
  "key15": "3y8AxJ2aSYv2yv41y2Qry4ApwJLSsczV6giUJQu6L5aAnHBNEEttnyGFwrJJ65rm1mduqAqNnqLNmz1H4iCJhELR",
  "key16": "3yf5oKQomRRAY9RKU55Kr3egLpJJ6gzgFp6LZ5mCpc6rQBEWYc3P7DNxpVe18wbaodsNAN3kDicYBmisnaJYi1C9",
  "key17": "3QSaNXCmQfFJzZtwUW4HoeRCQKjCGjbTjLY7HsDUqVgDx1PC42pTtnTmWqRZhjkrQtSGqrSNNmDiyYjM1VnQ9NKm",
  "key18": "5dQ5bDdwHVwh9kSyEHMZw7Pi7h3Y3AeVbCjCGHH13cHTwwiEgvv6xcZosmfiLomgYDVh6aYaY6mg4APhuaJAjFH6",
  "key19": "33s4xGZCwFEWcrTUEzQQPADXm3zYvs71TXmSoXLLbxN9sy3S4W1DkabeebJPNHjvTM3RXH7bovYXxWNrt2K5fUAG",
  "key20": "yWmQfTeBKVNp4aUT1KfSwfrF7cyTCC7kjuwuTG9GbJu9GQYLWjWtWtJdn6eXQGZjCru4GCx9RBax1Uvw7mLn4CF",
  "key21": "vtuby5sY177a2vXVMwRC9wYMUE578zR6V9iXScYd2gThXvFB3FfGKTPi6aETiEsBjK1EjA6uM8F4RnDnWUkDyFu",
  "key22": "4855xwZGHVQGNXiwFm8u9uvnq3UYjA5E5UmhkbDGaQDcvRv2WF6htnCtcBBznJRPzbYsVMA4sfmD1pmit4YwfEmb",
  "key23": "2wgxSsW83m4msWMP7BVcCsFwwpZRvmTJuwtDiR5Tar1bLQLF2curmUu6mpaR27aYe4cxwLiKi93kqCL4ThrUK9Uj",
  "key24": "4WaviUmqwZSs2MagEwXWg5pdBCN9fbFV5YyU1fWjJdaBkWXAdbfkCGhNbdbXTtXyzF7oSc2FvqoDhhiYLKZTdwgY",
  "key25": "pnCCu2ij8sr34XZyhyU443Z5wHtgrp7v5Z7URGTFjPK6Bp4ZteKgUyLKRbJrLKbkkceMmr83fyr8h73xXsoQPPz",
  "key26": "3LeYA8rEJFEn4fks4japBYYnpG7cez4M2PKsydWk5f1tNK7bYYgNaCYFmvHXNjFA6fKJLz8N6xaaZvQBpeGg8bNY",
  "key27": "2tMXXY5dTAXAUR5MBd7v3iMezwTER4j4TzCkWCfrxmLGdHjPm6zxxeGydjyVa1h5znkUifye9WSHawhe8xMsAyGf",
  "key28": "3SHTBoR7ZG7p4HJoHJP4vxJgqEqWveDNh6MV8tYhmncexP4kftQDp2jf8UjoZzZTFgtt9GyjoCVVYeJ2CK2o56SJ",
  "key29": "4hURP7BdLtgKBpaUEBfPapMLmxc51nGRkKDAXuPjjqxTsUiTX1SJtdx9znzEFt6dJhYQtcQ3Eq7Cqp948tyLMyGK",
  "key30": "4Z8YwjAuZh3JsbjKfiqomcf8mwTDCXuhc74isc5NH2hxc1HtrFKGszCkMsPwreCCXrizkMRaGMcPoewYKZSZ1wHa",
  "key31": "3NTngGfGs6pgizJrtenkb4N4kArLFgv4MFumNcvJVjtvFZwgjGrCMuaSSY3kHdSzud2ycKWe4q9Wt1rGRRVtrzmr",
  "key32": "5jKZGkefzRw345TcH4RSYtrEiL6JSjt59UpPsaT1Cruz3jw91BJZKxFVMw25if3orEyqMdrxDLnBaFwmK9Z3GXbr",
  "key33": "UsR5ZKVEF6bdtczaJ4CHppK8ad9A2st5hVsCFbSRCT3MwfaWMYxwuki4LqBiGykDRHPxmd21XARN8dByBAnA4jB",
  "key34": "26YZcsKNyYBdqY7Vf67XB4mhfjtcW1KuNopBDuZusgdcZ5N1rVdugZUxBK7srYqbZCyNzU3oEtcsPwa7H5sLTRfK",
  "key35": "4ERprbmNLBg21EiyB5NgnAdEqyXJxFMUBVTz1zpK71NhTDCkqphDeSzkGKSnxusZBRfosQytWwVpLySF8YwwkMCD",
  "key36": "24Ran9eX78zFBranvnzJQ4M6wTMamngfQs26R77qLhAsz4HSQ9Pdc39v1iAWYSrkTZKrLtdUMYEqrccopzy28z9S",
  "key37": "5MiXCthHyu1nQqEsPNSYJsgUAPvKRw75y7s7s6ht6AVPvWNZnpUz4bG5KWDCEE1dhtW3J1HDqFHbVH2WDthwTY9e",
  "key38": "2zKBdbuQVDsTK2A9xxrfABawfTEt9qM1CvAeMfMUn2bAubssDkiGHH4fxLkoVC6yD3L7xkQibXdrQj9X4RwkQFRB"
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
