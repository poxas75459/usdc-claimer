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
    "2M6MmZMeC3FTTgRuw5YNiXDophmck2gUWxiFqR7u7qMDm5LVihgo3TJDdMaL9RKzoDckLCUUCTPPBFK7DAdB249"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nqFQfeN8GKUAdCqkakpAoDwCsBvHUbnhukwRRaoZ6pRjgSN9RWeYMJqjyqFVUHwprJB4cFYFLw946ZrqXmH66fR",
  "key1": "4641L2EZ47kM3QTk9HppmPXzfS2GbbuGpNCufJgTWNQLdjwVppZSKkRPgqwqKrMd2mjLswMjfnQuoXGU1KwuDVkj",
  "key2": "24L8PSnm1DY6bkKe98qUucA2Eov25SGbtStBwkPXUdFre2hLHPyFGk9ogjKSBj4XHGSYpk54BuQ8gebyxcUiyWnG",
  "key3": "4B3qBmg8dDBgcg18K2GRfsdk2NaU9dZSSETXHE83QZoL7YMytYvAkUwtYiGZ7fnZinXxmcKgV8sV3j11kof5ubCp",
  "key4": "2QdDm7CEUmhW5yfzU9EWCtFoyUZ1Vxdi2SPY2S4uJW25oQVTJb8iPdAZh8pPbJ9nXVhRYH5eCeweAmBwaNVr6Gef",
  "key5": "2rfHXbeRfPthS5KSLPmvTr3J6ro5jLh5bD7o5KsqXPWA3Tb5YbrmrKKmYY6WS7BSsLsUbQV43aTMoe7LpHiAdLer",
  "key6": "4V4pBaCs32QB7yXep5xsLhHHBkM72uUh2qdiRyGiruFm1tAxuZcuRmR6wh9hkLcsS3XrKkGA9q4HKe5oEGd7NdY5",
  "key7": "4HH5iAQhUNk9nUFUMScBQJTDbPuiLFAaFNia1YrTZnuf1Bv8ts5vpUQWsSu1aUqH3BbGwPJNmTAemeBpDGATQjjx",
  "key8": "2T65rJMccEbkaBZnN7dzTsdjCyyAM2PWaYZEaQFJ8wbpM4reCfBp1v9jskAr8KJCDDnAsGxwrwAyGmDheo2mHdoc",
  "key9": "2L5bMSdhKKNTXF2c6YUxaiDjRMYm8QZpKVdwVtorH4FGLAncQxFYvFByd2cCbexbTQNx5PTKeroL65NXuC7Jgjdc",
  "key10": "2GDFd7C9r95m9pyYREgRcKgbYsnWs5H3mVtZTrhGYf3pVennJpTmsCKJSEqtULkVcgSpnkcvPZURhcPwyuyx43gL",
  "key11": "4eErSaxiEjgSsNV8My6fMqjHmkhhdZhQiHhReN37SyYQwGTf1LFahDXKZwMdQ8xD8tA2CJL7LfkP3uZUs4jzJpVc",
  "key12": "3NQqtX7MRMMcxANpKt3SwiWodz8KWwjmRy22ARckwFYdvahcTpqW4TvLzsTC4nter2YkBGvXZdUUB6t5Baywsh4P",
  "key13": "4CJdvZuxMpfJxK6UQ9kD5jBBQG5pG3aPiimQiU1v2JpdDkW4PqDzrSs9nrSWYGoW3FL8UB8xTJWeFDBsifNuBcwJ",
  "key14": "D1MDE7pEyat1nTqb5AbG7sucj1uadijjdBmXT3gkYhiWFbx3PtnHaNRZz38vNPnGD1xzivVQUdJF2VjooXs6Azk",
  "key15": "5bV3bFdHNGUtzy9XBmVqzxRXDppG3bzNaiwBkpQx8FFJdwwvLbGP1KfCsJpMrYXhfpfeis7JymdkCR6k4oP8rVoe",
  "key16": "44T1brpGXHHDFnSHdLgqZNfy4jSR3xbziFo2BjFfZv5MSaJbrugx5F9nupgpserJUxTjLJnYFbXxtXERZZd7EHXa",
  "key17": "3wfwpALQHfzwY4KfrMuSGgQBr8VwQTaPjBnw9KCnCS2R5oynu7WS87usdKk9ML6vL5ZvZFzq3gTMkrKJnkUXs2zd",
  "key18": "5fsPXbHSHTri6LeXTQLhp3dk4BZhojATwLXZhNu5or2arjyoxee8bm9Jb3gJ9YjAF8rEGsY2LaSYhkpVypazuBpx",
  "key19": "5px1BRy4pRz5vY69PNXRQRjuEnaBrfeNUDc4Hdv3CvsrFht8acC89QXY873eYwnUpNQb5SaUNASp4uxvdcBpNzjx",
  "key20": "63jr1QSaMiyF9hTgv8qXf9HSTEMDn2CzULneTyu21ZNuZCT8KWR4hi3bVb9pJ5LkAbn2eEbSR9N8aMpWvQCuo4KB",
  "key21": "khfwTNynpKzCTqzxLcM3Usksv7uZ2aj3K3whapmZTNWAPF98tRd1Qfo97ckiVib1sCS1Uwjvk7ZmuELfur75KcB",
  "key22": "2kzuGwfaWWFnLgokgFieyNBrZSymZAaM3mYKdzgpuQwA3h2Er7socXAfEPwMhEPn8Nen1ETfdhXD1DeBR1DF4dnz",
  "key23": "4HxPjKy7SnMMjVoVTedDYRMGembMGKfaHf5u9pbZBKuc2u1waCpdzY16HH8nPQ3rLqP7nFWQhsVMEnNHdHtNWPfU",
  "key24": "2LvsW2hBXk1YReyVCkaZB9FXwsnTx8ybrDkSmCrBX1BpUVNQeVa2y7YMoXSw7vqZfZzRfDbF95i9cdDmQpLf1avZ",
  "key25": "Z1HSERGcrrW78oHJmcXKQEXwvsw6eyw6uTVMVAAb8nxDr3K95VZzdqGkR3UuD3yKbtpVUkYtKav8wBu73KzeJKP",
  "key26": "Lzo7FKEA2zx4dHDrbJURBCAT2MPdaXmeYMPNjNPtnwZc2yh6HfUUa4GWC7J27pw1kxRUr4cet2ZUPf6wjMNk4yy",
  "key27": "3r82TuyysYmKctjRhcYztBnGZjF53FqQLumm1QsQC1NeoCQPAzLbnSr5eYBkuFkqynMAS7mHKiC7r7dqiGVSZ44y",
  "key28": "3REF6qcZaGTYWwnYUPD9ibUnVzU5wD5kEaaQcKLBnATE1zDEtwMkvkYHsmQ9Tf5h4YFUjh6pveX28NG3zqMzdegW",
  "key29": "3mq6zg9eMDugPPSDUiTUjrBf6Po8Rtv83CARzMpBBV4tcJCiyyHP2S4xSnGWeoEyZPGb9Varr6qb27dpBuzsDvxJ",
  "key30": "2rEyFyXcLLj5WpqtY2Ywk1mxuiW4fZChGt7nNwqz3KkXqExbm93zF3xPe5be4PcyKtRhz1rpzEixAxXL6Buofs3d",
  "key31": "2efgkUKMDCoqsRE4dJDkWkCsPyioGpHEbXc9WUARxjXepVVyHi7MDN5VdNfn2Ugiyo8GAf5rYjQWdP3WbG8TVAZr",
  "key32": "5Li1ZsNRXzqrjVQDnzcmH8WtkcPNhcRYyzsCw4PU2ZveK3kTBhUDg7E36HwbnkohNou7DdEESgwL4WBpXSqBpgDf",
  "key33": "3zY8uvmU7hqcM1R6yj13NoTnD1VmQmbWuCrR4g5M91uaXBM6pT6Z3j5tCvFruTnCJR7pwy5N5Z6n45L85G1Vd2Xh",
  "key34": "3zcq3Wf7wXQUD7JWcEsAU3BN8Utesjc6z5EQ4XSDeoJKJUnCDVT3FjdkiajrMnEGjqZQzeyyxGWJcbLaNGTdW1yf",
  "key35": "2rtkyvTd659sqep4JtwtyYsSy7LB2mHuXWftBrnw1xhmLomVKNk2YhFkZTkaRNoDLJXxuBhXZaqg4kDTvvbG5rrS",
  "key36": "4hthfCcvgNABDsZfU6XH3wKMnNXLAvB4ABDmnZUPYmMtawxq9DL2DpnTpm49kQ5gVmRANmdJr8PCv6NoDtU5mrBv",
  "key37": "nEPf5ZSajN7fMHdd4tcVHBSyZSKVns69pDJzprVu8sUpz2NKz4J8E5PB6orC11FVNiu7SceqZoWi7iMeUqRQfAE",
  "key38": "5QFA1qrx2WzFtV65rBc8pT49CjMGXVorrTZ8gXKaEeXWBiGrMevdRFkMshXTWAQPpDx59JgWCRSpDaWXrkXLeicq",
  "key39": "2BDAYsjwXiurjfVCwKnFZjoeYnXSUic16AUHEb8NEXDKtKCxxeHD2STjCj8PqUanch57s5129BAd6wWq6oCbRY14",
  "key40": "3h6KJcsZVow1oV5FbRpcLFqaUV8w9zfPcoxWt4XSNHPbnk7PcnYfe6ZWe5ZHDctJPCe9SDj32kUQoRHxubwyuCb4",
  "key41": "4C2QtLo5ndBv6bpZ1aVWBKprc7RAaojGcpxk4D1Pkiyy5VZFF37JfMJCfkVJs8uYV6KVnUH37ggPwVamqRJqZvxe",
  "key42": "2Rz5AFbDGP5pB59S2xc6W8iqa2Kt2PgqWSC6ZfQH5tiJbLR75LQYELj72Nvzfr3dR9SrMTkN3FJ6fHG33bk1VvKB"
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
