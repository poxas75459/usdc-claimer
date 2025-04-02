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
    "4Dq5MuW1stKbhdRQAGhomAnaQqXrcimA8m2PoYsTpwzkEa1NG3sELEbXBmzv1K2adzGwdhEn2Hq6AmFuag2jr8QX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gKUfHon4gomtSFxk4RaK3MfBgPgDU8VrSnhTTBb8SSBLY3RcE8LMivL4oLQ8nxgkY26siwf41s7t5joqYtZiXxr",
  "key1": "zTZuBGWcZagm9UCdccSKfQ8SDnEEAUcRrZnso8hk5UY2Pz67A9J1BaLnuDHqjYjH3iTVU4ZLrWseWEaZXLGwaB4",
  "key2": "5Y3LfRNXaA5YHDcr7H9FeL4jqpwUpTZzX6zN7hPgNJUkUNSKdzqyaFukxjAYKQ67fTixMrtDGCvurASBGmJt7HyL",
  "key3": "5AmvER4ETACHEn6MvputFh6LAiMhccmUEQg5NAagn74F5CzhBDjhtbUJGTkKfLabvCgDYVZNyTaqmSHoGU3n9FqN",
  "key4": "Ep2bso65jnPineRDAhPLD7wYF31uLa8SWVviWAt1A5Y1H7K9hP7vRdF9uJJKkFdi9xoXZaXVshWCmrzGwXoPvhs",
  "key5": "61vMapMsaS4CaobfAXz4dYw8TxrChx1mUycmRovEE52WtbsiMMSv3RyfBNnYGfABczybNxVoNeZThARSv5Nr56wG",
  "key6": "2XGLCAFkC7ju5H7xBj3VYAw1AfE4gGaWpDcWc9NN2bFtwnYXGtyGz6v7Cu3rdz1VrTXxzTbSaFigxFWknGUH8tmD",
  "key7": "5W1n6nxpXifQ1En1kFeu2VDgqzsZ9dgYsxPgHPv2wbE8RyU9oG6uVFfk6BJT4SqP4qNFYR5qn6LdMZgX2RuNVqez",
  "key8": "42hSxcvpwefxpYjPWwBdEkiz9xty89upqyHRKJu4XS2eh8iGA8TD7HECUgLG4EWkpSwDGg19xqmjx7oypQbi9WQZ",
  "key9": "5sX36MknSM9CUf2UCo1MbY6FnjdCDnX7q8FaeocfGNZGNV39cLQvNzUreE7x5TRHMWbrvjxUif3wRMMXmyRrop1H",
  "key10": "2N2xNjJQLwtaeoCrggp6y1a6jT9wwe6dSf4YJL67qnqYy8sJmMCLyteSUJqMiSaEBPh2nBqb3SwSBMr9YD4rso4x",
  "key11": "4a7F5yhifpwz4sWNAwF1rUSkyBX7qtNBu6k7TLvRdX4WHpgvGCRPRxxT3qHbHLoUYvaSUNAB7KJqz3XjXXv4Bet2",
  "key12": "TuxJMR5R3rDd4LVoJmC3iNgbYNvAfvH9E1nczyn6MfNBsBZ4njNGhpNzAzAWEUtYzU3spnHyWnjYKMS9F7xsxHm",
  "key13": "3cxapbYMbNYd57ka541prgaHpX7qi1PgEZPMeMTzLd4qZ3ssTYvm23chcePJYcNavGRhdH9U1v42cspJmmFyCJvn",
  "key14": "3a2gd9Cyxyu1XBLDgW59gqTDeSnTL68jaK9KqKYseiSKQfsiGHuPtaaUpi972Y74g8SC1vg7gwrEasyjWNKPwuDT",
  "key15": "5wjwhARemBzHczoJmmg25NGeHEBLymkVm5DfGzrLhsSfD3e93TjeeQMtevzceiVDb52Mg2DZFnaYfN9qJEQyNHbS",
  "key16": "2D1Lr877eZyXUG6TedRUbJopyCU5mdv8K44acRT8VKq9oiyaAHrv6H2U5pM3Kfxcy2JfAMjdCK9xuBG1gCocvjQN",
  "key17": "4zaneRGB8TWVZ7ab8sLF3quyUjEjTXmvbeJcGKqhBZvrcTTFxBKsHzo4XyzSWVaW1bAZg87o1zzeWDcbLXroh78h",
  "key18": "5J7oxnBPEiAZ3nF3A8BgE9sTJtmEVQgEVxmYUkcUVgUVxUX97VBg9K6Z3VwAwRYrVLjmQyhxYLGuC9bxB29WdQre",
  "key19": "54gRXGmDiDUbfGa5HYEvoM7VYuQphCUq93b2Qt9jChwvvpqtZesUx1dAL3b8CbHr8CEgvt3eiw7B2BKgoScLVZKK",
  "key20": "3wdFcZgCvri87FyeXFKdiXRcYbknezNiCFaCuWaBzaxGDbF9w3c2AYucJF4DwL1jnZuqarhyQrZemaEcDcNaesMW",
  "key21": "4hJ7MU9EKjmkJwGWaaynMBFsGqVKkxSiJ1i8smC8zxwakph93PPcKKHwmadpUfGqRjaUx5AxJSzPo3Pn9BMBjwsB",
  "key22": "3oVNv5SvB1Z8DA6dY3gfZm6B2T9FxEVwd9Gh9fPGAtnpSF9ZGZYmiTuXFj51ZfwGxwq8R18Q54hXdxrxczhdoJUt",
  "key23": "5EGh3j8ojucC9V6mqsimZSiVpK8ybgp6CJdkLgH2cmctVxWqfeMmQiU175g1yBrUwxzS7tdKQrBFcn6qNsGn91VC",
  "key24": "2sFvsvDiX5jRijBAyzZSWC12f6dXtTjAsHKnrPLzZPqhcdsZBDKTk8fUbpnqAuG8P9B7WrJU3Qz7WUwhCgwZj6vp",
  "key25": "2ruiN3qxhJmEp5gVv7EDaQUy15suzG3cxqfssCXHW76ihmbZX2vJQ8ajCmmJxZNWpF7JVNDLGZeDch7aTncnLEkf",
  "key26": "2Sa53Wd5RWn87sUbf35Rh6WF6V7t6fsqek3XwCJ21S76MYqrW1mkygjoy1KDjtJmH9A7gjwP17Fg8g5iuL6DNLuC",
  "key27": "5y6MvvdQohPMxhBtqEyxsdiev4hGJ6ZdQnezvvK3qpMiHK2ugTDBGDbNM6ENQQM74cNvFRArgDpUz7jbb25Mv2QZ",
  "key28": "2JELZzxQFNW5KW44bsM5ryoBUhRzwvRiofx2NQmnQSqD8uA9jK18K8R82AYXnRE26yi4iLqvv6nYV55MFuBds6kc",
  "key29": "4BJxNVZsZxXrGUBYbkSXDmjSB9hBczRadihtszyyBURXXc2mFb8YutkqR5PyHtVMSnQWzqcuUUuxQJH8wFJZkhfQ",
  "key30": "dByBCKoBjoFTBxkdsLgHR38mECPwNHReJVwFYfNwXbLg9Pe2FEVmtEqCU425JVuEofUKsyvd7SUtx2feokshgX3",
  "key31": "zxvt12Aa6y1FzzzDqiFRkfmqvcWQ71WHiPj17TsC8R7tDVGWEyxZWzU1tsXYGLa9HKZW2Lg4yp4mBKfYpBFPWDd",
  "key32": "QBRQL8NgrkhigaeznfhxeBCYVNCgo4i9PMhL2US5e2PKvrn9jLWrqvYpB9MywtG4kHVkhWgY3M1wGQiCPGhg6zB",
  "key33": "5NqFbrdoXAiuZ4rYZQBPASr2xa9Dnu2YgeYytTFuKaVxdXCh1P3PM8hnqX9qd2UTwiXWXrui2b7hB345DA7MV5u4",
  "key34": "4khSAbVT7waD5AxMiaCBERy2tApDryxjUagr5BMttAws3uSeJwAXpoDwCtEkcMRD46iighS89YeMqEpcPjZToEsJ",
  "key35": "4a7qqJYsbFCcpftG3cKgCUQKRWyC1wem9Ri8jc2i3ZDwigyCQL5zRax592MEtk3VZQeNCU7enPJdotcAkbkCgeBb",
  "key36": "5HUpsxio9oPT5SjXYSdDw1UBGJeh3dTwzHcMEbbGVYHpuyVSwM6mmKT6LMvBNthgk8V5QXKxBzTtTx1iG24inPBf",
  "key37": "2kg7324iAaFMX4P7csMNpETnSENp8vzcFYVU9tMfwVbsgs8Ce1UVM5Pvp3GaBWLBg4VKsNNsY8zbG9M6nXNTZEcr",
  "key38": "2MwDFpqcAnMywstLiDDSvvE7TPb1iBbrpWvt7UmAoVPDmuQhMLx4oD1ADj4t6bnsMjYuSayCHN2nwprbrfzfEBtr",
  "key39": "3DtaWrPtST5gdePEhoy6SzuM8bciPfk2sEQx248VDsFT2ePz5bCtCTmxAnHUu9Vcmf5qsdgbhBD7sj3iyCfyGMoi",
  "key40": "5fS7q3X3K6Q52znNRJ9j7a6v8qwPQ8LPUzyAPtM7Cpg6Z6mgEbYd1PmvJR7wVpoQpdUsaoGrz3GUXSDC7rG5imNJ",
  "key41": "5k9QhGZdW8qnWLJ7x9Yknmxze9vBLpNGi4wBoi1UWyvvxQhZGDp9jxeAKYTT14dCvc5ekKoX8NXTjvn6DLVtWNnf",
  "key42": "66xozYvPABTJKCfLdgVH1kQwLRGxohisiUSMcTjAJJZRvizPrH8UQWr6yhGzEu8u6AHAtnG6GGS7EK99Gg45u6US",
  "key43": "4ggSYQjdtnzUDAAzT6jiecBto1gVYGMTwZ5dgzgzs2vtaoC1x49AEmGnxztTa3qTxAPJxhL5rpiswc16QDZygNwH"
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
