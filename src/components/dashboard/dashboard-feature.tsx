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
    "6VYSKk4Jct9TcLDG8RQMhgw782uwsjQX65sf5i9qZi5pVyYCfMff8dC3W2EjfdKPTz63CP85YB5iYzMQYcWZdgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xt1QPgzuPZCEWqCFqrDBP1G17ofUPeNc6aM5wv3GpT9qobxpwtXLzCntiGBgff2qSqSozs3FXdWm3JZMvSWiU6r",
  "key1": "5e7qdYNh74jFphbSr4YSKALroi9QzUwLWwotDHepo9tU34qzRJ1ZRzBcYLyrHFvhnF9LbRqtSdy8A6bJY2oA8xJQ",
  "key2": "FfuaqwdKu7JJ9CCU61Yt4Csad7imjLKLmULNSXuoa7rNEkKzkNejyVjUhr4kyDT3GJ5Fj1xBY4JnKite11RU8og",
  "key3": "2o2YBBT54gkFij4K6dZ1JQ5wDeViveTX85jpicTpiTp4ys1mQM2sNTdcNww4rV5bSg3tZaz1RKjAuc4SYqwjBMzf",
  "key4": "s2V2tHvbLKa1YaQP56LM38z9u6tJVFThfEbaLuJE1b1PUEsBppmiboUW7FN6HHMWeMnEfm14UGSvi9rfPfEu1Ff",
  "key5": "2iQwekniZZVgTV23rKFVh36vZWKsyXtU5ZfSrWbjqtRnjvsXfDrR2ZhqK3M2tbqmyRZv9o9H5RTP6hW3dmhcQkNm",
  "key6": "2Q2Qf6wWASJ9kaKpsecZF4JVg7UEaydYWAi3FMBgZFnZCXr56NAae2ED2EZ2doTUFUq7Pfdd8z8oM29yAywT8dsY",
  "key7": "7DGUH4ekuM9PrLXXtupMTHtTAZtMQYSX1pfZoTKRYNWyGmFdPqkDtMWntPaFhUdGKskD1BMEtJEFF99cHzZbTJT",
  "key8": "2nVMDVJ9kfBneLdjQ1nu3kDsBKuz1ZFsk8B7pnXdKsorbGVYk6cU74ymDyD6pFEUGAjRccZAfkKBaNduYjspJhSq",
  "key9": "m6cU3XSaGNczuQADwvPSZkHEZmKGmuZnXxrPbVg2WVhxhJE6JzWTHydHwNBkLGmnJnoJ6zPxqDSmqPqWRaJduZL",
  "key10": "5nS3zjj5YzSRfzTfttPBSFnaDb7T9JkeLWJjM8Z9TYd1cWWtmhWBCFe7MbrYDPK9CrhniUr6ucaKrJYfChL8G4qs",
  "key11": "nDeK1zzGK93hXjF7DNRoDz9pfNwApD8pxt3Xnd6tZAUwwyKSUMU3Yub9JUHhywZnbG9GT3M6quVxtP4foKXCquS",
  "key12": "2RN2Xe6k6n52XTrgjWbhc2SzPzb385Ya626yxe3XU2BxddmBNWpeKAUeiF7VDT5rrYkJy3rBfuLw2zDYtM4Cgpnx",
  "key13": "3r8SRNju52WqoRto41WzT2MA9LyRfPrEJ8ZANJENfWQetkpzX4PsZs2ivWgEUajNQFtyYG6TATnxtyC9rJ88TKX8",
  "key14": "4M9crmpfq8hHUJx7JUk6RQH2DwX3ySJantjzYTUM8QgmZDM7Kg9bZfNX4QBQzJtdBowc7MxrGtMGLHuM9sbP8dve",
  "key15": "3gGUzBjjzPqTqQSXZBY2pdg5mbedqLMEmcf74v1mhaw5AiVCBa7bCyPzJNx8ktnifyE8f69ck13h3ArUKS87gQ7i",
  "key16": "2Ut3nTgjVyctYfxJWQyu2uMtew7QgF5tbzhA5rRCwwCgVy8NvWdE1gBxS9Kjq7CANjJSNvUMJsu5UetYP3wy2Nnv",
  "key17": "2LD971NpPBdRG8ubAbNK2ppBpdsoNtVFG9y7CK1SKTTY2oWJ7921oyXFbjrsJ9z3NeUEp5RqMcmFqztWzs3yJcZC",
  "key18": "2JH3axAt4CxGSNfvATFvCsE2EbmMvLNwLt4bfKkaKg4AQxK3tjqoJowTYiTB9LD8hyCWeZDtoee8T9eSWnCr5rVL",
  "key19": "5WYakrPhLqVpEfjT5eCuzMUXHUwMpTQif9ephSUcuaYWNfuJppPxsDN2KYKAEQvYbVMB747YdfKVBU5AVXW8fZ54",
  "key20": "2zjnSVin8xf1F9F5sCcHycuKYdunRcMsgQuwUHepW83WDqYkZfH8WfFrRrCyzi3edUpmaevLA1HSyRvn959kyyKD",
  "key21": "4fU1HZimvfGUCQUA37bvAo9WatqyMWVoy7jyJV56CDQwmZjpPiqYF7xKjvuBDycK21VsjgJgCNZZm146zafEC8RZ",
  "key22": "66kRWZVfoHwVVsjbgnhkgDmug4ZxsqP4exxdjdzPTk9AdYZXiL1B5peT3ytFkkSepw6mGcD93d3iLcFrvF31TPva",
  "key23": "31ycWMnUTquUWHHh8fVFQHM1GZLG6i7ipFthJnmVVLz9iNs7ef3en8tuZ7ePo5aRnbz2NEesm2XkqpmabzfSHd8L",
  "key24": "3LqZ2zVQzVcij9EQcrieueFohimX89E2rkPtghPVtG5pggsNDU595VepN9nCWHwQmrMHtppwHLazHDrJMWzMFWeA",
  "key25": "qAxoyx4FRvbUSD6U33YzpN2V3HmB4UMeVbyZKmbPCbs5dfSwEzmztTMgQGCL7rZqYjpe4pGSbZwZ6F3QnDF9oUL",
  "key26": "1YqbDJUgFt5BWkgGD3ABRbzWDbm18FP9m8x5fD7tfeKroX3nZXivA59bLex79aoUk6QAqgmaJaDDGVd4WFyotUk",
  "key27": "3hvVF8R6kbD2C7EEgK3D2nDtFN9nYyyGKvPPzAawcQhkTfyL1A5sTKYVrMFuPWRsRnNiFBJxA7NvKLNdDcsYj8xZ",
  "key28": "3Y5aMi6Amrv1iz5MmKQHUXseeSqCW4oLvEv8G8wM3bE9z73KkrsHR6TgfXNRYrtisXN64XRmnWBFo9AZkYaR9ndV",
  "key29": "36aPtcnmagJNJgFQqzFk2e3K6rJ24t4Uc6zVjwJcmokUFR1iiPVvoSNmXHTZ34SeFh3C3RH9iTauubTs2yRnKr6W",
  "key30": "A3iNZAJdBTgMYWtMYPN6qCGR9GXjy5s5cGmXkf8f5RCuMKPtrDAQZ49u5YGPT946C2LDWidWwYMvZXHTg4ZNp5P",
  "key31": "5DZYVfCPj3fKvt3m6X7rgV7fxzpp3hymuj1r7PagvUAyKs5kZdQ6AHj8qhHKGbB6GJ1CeQEh45ZZcS4EfmG6t8Vn",
  "key32": "PEeZk7X6GCpki7GJp58DLRLfLMJN5DfAKuknJ11Wk2cKxfHm7TPQKBCFB2u4TGiBgdLxwTEoTNXLFAV4uZx3CzD",
  "key33": "2qUK5QyA2XYpoCVcQ2Tb7J1cLvBMKNRWZraJC1LUURSEsr7bGN2zxrDe34iWdZ2zoXvfWY3wwVz7s8viJCDNtmv7",
  "key34": "rAgh63EDpey34MCsdkayy6FPhRpzjSu8akJjsYMeuQn2ETrjixf1NFh8w91r9hmWHYn1r7sCP4Ai41XDmaFb6U8",
  "key35": "3hpdpvrDtiqhbmBgxCnirw5V5eQrpUBJsciYreHcPgjbFrBeWRY16mpK2nNrjrbsmT7CdwU1XmNj7JKroGQoKazq",
  "key36": "63buYFwXBFQyipDiJQehz1ncjuapLhNNLiMogE1VWLyJcfHStC1VPnm9vtx4au2WL9Wk26DZLRYsTiKC4rRpweBz",
  "key37": "3XZEyk64PEX7fFDBWapmb2cd9GDpWkBqv6WgDEe2YbYNSLVXJR6oA8axPxHioSHQ9Xjmujbfz8bBeByfnuSP2d8C",
  "key38": "3wS73RLFdknncxfx9cdEAht56f8AQNUMACHRzNbFZT6HFdokwq4MS8pTSwnpVpwBV8wuUkAdafFQFJ3Jnqu6Qa1g",
  "key39": "4DxpmkqQ9sX2wxzxqU8sWprkAGtR2nka8Fct42jg9Jr7GbwaWAnFDFt6G2mER58ugFTUVfSLN9S6eNVjRjnHXZVd",
  "key40": "JeBmXMNpg5uaZSX6Ac4cgtFsCsv7VNDGiSHzW234pm4EksZ5Mojkt6YtinW461v6ov9c8niSDim5qj1NpuNyArt",
  "key41": "3NYxFLRifY3fNJTeQ3pJecQ6gusUf6fv9DcbRt9Hz5uC6SbaEC6Hwcfgi7adw3cXsDMzyBoxc75Kz9htjxe3cyy1",
  "key42": "4hzVsi3XJCMAdg2f6uBQcVij4pUyHC5hw6honYb8Gd5uZbrfuzaqUJSEj8WGzZMeiHqDWDBySoEMjKqcm5HUyezZ",
  "key43": "3q8AJYno833BqvvNE5ByyLwtFQG7PdLGyyfHFYLAMv8tqxLPCSYCULf5igdyqVCGG6fyhKaucZUsBk4HioeSbYnh",
  "key44": "5xJkK4z3x8mfH9L3mbvGm1wxxiJVUhzRLmZsHn3to2xDnQ8o5JCNMZab1rPrnmYBAScf7uxEaAs14dEgCVqQ1bGT",
  "key45": "4TtEdBMCJ4AjHNv1Cbh3aXyQsPA4YqBnG1voju1SxKi3ZG3RmQ8qSWZ1XPEafHychfdKJY9ruCywhudBH2gZMmnm"
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
