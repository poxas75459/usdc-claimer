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
    "qpAA84MHj7HYNCFXNyYZSkjYrzFJfG8jjtCFw3C4qR1VZGUCPzbx3vEszWyPhzd83QtBtwGC936M9DkRSn236kx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61cQ5BVyWpsWQAfLXGgNav5UwmT2fr9fLVqXcF9iHxp3oNfSCR4ZdcoH55m7t7K9C5AAfPpjhEvpwFThoMbVdChG",
  "key1": "3iJSMm9XgCj1PEfQXrb8Uj7bnSYztF5FY12twaMkJapEizQ4HC8ZLS2GuYaLnQ9oHw9RepcySiYixfjavyPDyGU4",
  "key2": "2unCMtdxVyZY8g19Muq9HdEzJYXoQMqcDxfVyPmubb785QvhamHNmBA7KhPqbAt3n6NXqxpPvnG4muYPtZ66A6ST",
  "key3": "5ycam1FVKUKKMYrFA3EAgyw3iNmSvfYVmaSbPsczJCsGocFK5sqeozp7ufjgnbZ76fWBCsT9kf72QxgddKPLwHQP",
  "key4": "6vATpKk2G2XuNxDZUp8m4yCrNwP1Cx9A6oCymdSis2UChEkWEUeraTEhutxP1DDXXBkZzqf33voXyd4HVi3B6mJ",
  "key5": "CpBaYMHhZiTVzi5dRGmJ8mhF7X8yBXL3BDSsGnAuDNagrE9grDGDqbkhVg8mq58BqRJqxXKfmdAXiydqFSXZakJ",
  "key6": "2hUV2Ab73UCYYtdR16fCg4Y7eiLKvcRuNJsSrV5JyHSm9aoNZfF44wwN2aAhuMZjUnp6XhDN8tpCXh8bSAbqcM8C",
  "key7": "MxBnCTH2gUHrsFUE1xDB4eXY2sTeXHFmEk8bABRYxABG6eFm54WXDF54zEtKhorYA8ohSdgH3NdQFvEAJRaSV3Z",
  "key8": "USit4wg6zDTPau2gKZajYba8QhxJmqy6s1E5gZs2qv5VYd3J14KfMVurJYPKgbijqXQ2q26NusJL4eUFCpfZR9D",
  "key9": "2BF6cun6CbvWVUsLKAEM7Xzjc4cLf4PgyXSsNu3Wm2txgEowZcf6igGsBNr1btw6Sh2p9UFjY3LZY5sEpShLrQG2",
  "key10": "25mWDJuxP821DiLTp3QZh3tr1MNccsoQveiCsoHgqPMH4gvtQjojP4T2riUjwSQ2zNo9ZSGyKJjRvgLVk4s8shqC",
  "key11": "5ycZvwB63BwUfFcECtyizkBgKxxSTcQy6tWUF3ECKWznhYtgqY9YGEhbUdc3Exbt6qLSiR5LF115ap63ajP83EBJ",
  "key12": "3h6pgkavQPs12UWv1SKCnTCbCPAno6fXou16Agk2EwQmEXaKcHjwQDwLmiZ1pSteyQ7KtjkKn4joMRAAjR3xieXG",
  "key13": "JJVMycvQv55WZurou8DzXZKfhfcDqma789UmAQmT2pD11oa5hQi3nDTxMYLSQunWYm9e9FupAN5VSHqbzwEJmCW",
  "key14": "42CALDsWF4BrfcRTcT28PWAStUPzwVKSGjFvjmjR1XtU9ZXv14fcjbizuPo8VgkvRJds8pAxk1Y6frc2xuiPH4KY",
  "key15": "4aJqW5UWnpYwroqAXMWW5HLvRxr4VV8vfwdj9nQMBDeS3EhQgK3CDKVkQHJ7RFzxVe83S1HWTXybgsXCN7Pm7H7i",
  "key16": "2amLhxap6VMtWaKFHgEboiQFmwbtRWRLSUNVJxqnWMp29PWDfZXo2LyUfGWrUekJMcEZypABd6uf8xc6ivqZYYHA",
  "key17": "2jnysGEEEtSCRYkJiwsKne7hHC9F3Yru3ZYBEjtTvFWpFvwj1MTBhpwW211Sdc73hQ1NPhDEXU7tpMaPuN3LrK5A",
  "key18": "PjKfH6DTkrkzgGCB3yaxZxLsChzES8H1GH1LrdLNPJgvkEcd3pTkpzmjd571nVyiitTrP5yoVWfuACLept2tENo",
  "key19": "xBAjETSYM6MDeTrqKzHG13o6fRaLdVZzvGFs7khXPXk8ykew3U1FzhUQK8HsNf3AznjX4kEHxDL48AXAkkHBnp8",
  "key20": "2EKLeSAnswWYJ3SZfpizSHiEktCTpbBVb4qX5tmQfFHaT8NbNuhh75wTJ1tm1PRhf25mEV7HH3GQ44Eg3k1GGx2q",
  "key21": "dg6nBCQgiuK9Efb4GYWkQ1a59unj4rercAq3EfBKTdJ4xz6c4uMEFzqmYo7juoZvHPqs4uNRnYnF1sTzgcMDojw",
  "key22": "54qfAj7uzDjWwggAjB49czoGHeGdSUqQc7KEUKxE91UmT1PejFG2fwymmqLzbqBrqqnf2hVbdGDtzJVVvMrcLF8m",
  "key23": "29r3Qa9Q4ZKCNRgQB83JPDUi9JcKs6x8ht1HT7KCPP4qDxDCWPdvn7BzbBVthsDUS6V4KLxtVLVmZpoLYk474Gwv",
  "key24": "4mLKmLZha65PJUiL5t8dZvJxWjTtBg8MNLRZQJqBYNFeDqBNqi7tiLVf8xE1Tofqpq2AtSeezk5eN99qcj8roVCJ",
  "key25": "38U1ZfW2qUyVj5AGoNsLmqj6XHAbYpoEbHrowTDW1otjkvb6itT3zvXDRDNoNusi9ngMe7UdAramCSUiHrCDvx9v",
  "key26": "24XDPgG6UtQsminfm6aLSmho1iTZJczbEUJZjuzfmCGghQWAxPvKCfxoZwPhsfQuGz5jmdy8knw9uzm3FK2QJnfv",
  "key27": "5b4CocTYYEYKK7g8MDiKtp75ZupictQ5RgBBmjUQPRGrbHviRkwBpEP2PPJzZm1KETUqz3c7xd9yM5M21E9S6EA7",
  "key28": "5nzEg3qvBEAFyMubFAM9PpMtCsoy5vA9Svf6MG47NA5irpFjMyPf21fqvDjcRfUedvUqxuBVUwgsQLoi8EwLXeY7",
  "key29": "5kooWanQRrUBNVoENEuWgD7NKAEP2AHUurxyf8MuDkjC1gGg7FvD5rutA2VAyKoYiNfSyM3FwEy4PqBeZSSeedRk",
  "key30": "R3JqyW4UtgVW7htMvh8csvx3gExcgSwmheuQtvg5Z3fw41hgYxBC6zSytc5P9hc2ovrhtA76jg5MsU53DtLce1Z",
  "key31": "3FArabwP9NgPjgyw5eYb3Z25S8aPo3XuWVwpUU7vChy5L38Np2CCvMeKpWZBB1hgHxXkou6XqPxXpzq6yr4MQ9V7",
  "key32": "5U6sfciQCgcuFh2aSUGZhdpAKbctHE6rco634GoHU2QTes5JUWZc8At71aTA3DrUXzovZwGhwW5jHHaf2TM2F4vU",
  "key33": "2AAGShUWoUV72PMdHM4jGRQVbZunAv6LStXWRUVik7fAvDHCjD6nUrjpASShRrTTKwNE3QwGRwwBVMRdbVHDZ8yw",
  "key34": "4sC57WTzHkkCxzFxbhGut21r78u6oWmUfaGeJv11xNrRwh2CSzGLkMDu2Gax1B3hCbT4h1cNhhDgmfgtfW8Et3c9",
  "key35": "oFrPGbdGtpp7Z7nswAu5QvS4iBMDmpgFektXfCdQpqLkP6FsPRrCrFunaWv9N1Yf8tgstkv7Qz1WLTdyAeeHKbf",
  "key36": "3c62tzHxYRPyjnrhYwtTXtrtwAQQWHMW2WrUWpSysoBNr36WCVYnPHp9oBy2ygBMfCLZT8KwAyHsMJrtjgCC4ugr",
  "key37": "4tGuNAr6hRD3THfwEQbojstZhHLknRbHhH87qzTTPsk37tVio2rrWvbj5DG3HMKYKdsC3JpMTrUxEQDJpTpMDRLS",
  "key38": "2SbJYPvkTXQYK6tha8BSYM4u5XGY1UdMgsWdb2Hexas8pAt56Xps9hmEsGfwDE9Q9VMCjdekwDEBfcJz68ryz2f",
  "key39": "Fgbd3KbEZM746h4SEQyYFC8tb9FextKtqJL2s17yvctMHT5wCYnqhzb8xkNqppkQwj6Pca5e738CC3ZgZgZzk6H",
  "key40": "b8nMweY6m6fzgkP8rk6yWyFuXcfMnqBHQN5Zrp5Ui7bnUgtz74i5JiKbr1c6RvsWWnvuj7LJb2Vce9M9qvzBqRH"
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
