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
    "4wtr4SSBUC3bdbXpn6nHuwtM21228grjinRvLPzscT2DpuyUpLT7rEAXM8rfHwLNo4vTv3HoqyxU7hs3UdDDBfnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EyxQMK2NaQtp2DUogn1xpmKiFA4yNKYTcDLbRiufeQGnm2ky6ffGgLJnvn8wQggVvURELq8V47D5k7SFuVw8vaA",
  "key1": "3mHyv7t2QzCyvfBbkSssYVrhSXwZtNRNBDP9Yw9Ae14WMhW15EumeuHk2wvRE4WMB2FAMXN25Tt2p9FFiC1VCyJo",
  "key2": "3VD9idPSspKESeNkR52FrVpkRV4NHNYZJtZP1skA94TvUUJfNMzkej3koqiu6Dnf4QxvHCV7mNmQr9nx3vY73FVa",
  "key3": "5XKqcEojFY86ZUZuRPB6jWnHSKoRMZsckoQ5iKSL2H2scHe7eQgEHKpChGXhoFUTMXdKszZBW7a2NXGNPvK2avnz",
  "key4": "3HV1WafkHecbQBguU4J2razswiSD79fyjSo7t8T6gXJ3qyHzFy4VczDc6ppznxCEbZWNB4XNdZqTdjSE3nR9KGeD",
  "key5": "4kNRxcRiTNoSWZ8WM8Bqi93Xnu76mq6yZJiJ4QmjQY8BmADnUsx1HUQRdRb25uyH4Gn5v5PmAQgiNNvYuKxJse22",
  "key6": "5F7dG9Z22ws42fjom6FPHNyddU1tsSimhzVpErxCruVQKLnHvhX1emb7GFyisWoTyXJBwtPWgBfxbV3t3yytWXf6",
  "key7": "35xFCnGsdQ6W5otxYbUzF3xgeCvbTyXxjam4TroMGm7U8TJ2DVxHhv8jZbNSTSU24yYstaQX2cvd5BvbFVi3YdMS",
  "key8": "4K93aAyifhQaoYTJWheDSNTuTWUuLqnoPZHz3EgDKgUUHsRuzECwsaJDnjWcjbUP3jwZgXH7S7F9NX111FFCvFMN",
  "key9": "56RS9HRLoR7phiKGKqUgczzhJgeWbkQ8ewEXe65zHvFdv4srp38oxxydce2RHjiUAXumF7GCbfqCU34LHm7w5tUm",
  "key10": "3M7V5w6GH9hJCsd6YmWXrmFXkxrBDB7Rh1G7rYdAf22NR3TA8zr8vpFL5KNwgG8hTsVeszcc9eBvahGMpmyXUr34",
  "key11": "5gWQtbzHExKTaMEtaVaeQ6cxsRARUTgY4Ch6qpXsPBfQa21v45jRoX7uYAALPPqAvdFSmtsSdgZ4JpDMEqfuiLcJ",
  "key12": "A2uk9HZntXqtgUEFDtquB4bmb8RxncsSdcBHPFYukJegCCQEwhCf1Ybhfbr2RXFgEj557cyGuPdJKuLhgpQWcqP",
  "key13": "5C3MF86z43cYKhwxZPYGRu2ZDXM7SFBYQTsuMzUWZxGRikoA4JZVYW4ZphFiJUaLvtXd2oyNFV9hN7NTPqWMZgGB",
  "key14": "5if5ih8A2XhjN1ZToN9RURaPvUwLYpvg7pForBg5UTtJWBktK57bEABcDsceUTwRauaPpHLDh1UjRLfgq3yhEWsM",
  "key15": "z1nSxySbUpqYKRZXVuhoY4at8KTjeNdEBkNd5d44wGakQAtx7LsPJEtKrarGtVZeHVCxJRJ7CDQDExYfCZb59wJ",
  "key16": "4yUbHtuA97RYA7ix2rTsvr6SSvujTSxPDz55vWowy4v9876p3c1SRpqULp2shc62cGxjcPWzAZ2K37VcYdgToZnM",
  "key17": "5b7CZ7B7ckrYtmW2h4PGoFiDCh7Y5PTN1hGWP78U19ahziK9WcoFftSJ1nCRgxATUVTaSQdedNHiKrqa1Wj91zQR",
  "key18": "4g1LS8rFrfQuA9Q97mYhJvoW3iXcLWwz4Mwm71AfEFZEtN8hqwn7ADy33NvxEUPHQxzmpxHwvHgk1TabDZnchSTT",
  "key19": "FzWkY3QrijpDkKoobhRqFDcWfrLs7LV5WQz2pWF6FPkXZaXbgdKB6ib8UhcGGgkMKa9rgHva27CpnL3kYtp6uEb",
  "key20": "sLvfqjyBxxZKLnmeEF7ahG61RoPmzJv79tg8v6pX6pXceMUuwbqofVoPLqUFdDGkj1M4k5sGsv6VBZv3FjitS1C",
  "key21": "PNSxWx8D82kFwz9FdyhTma1KKzNtwmwuc2XwbWTQQGvjikuXshHHPJyuSuQYfkxQZ8m6ZDHF7bcC8h786XkXrYg",
  "key22": "3j1GtKpfdh1gJf317ngWUkBFng87XuKoFv9hETwLWdMn6TzZr6kzQPRXSYaFhCpaLyavvvKK4V8Mymg5pKLFW6Gp",
  "key23": "5h7Ak4NWGSNdjuNQBsNu7rkXJzdH6kgdQ7eTfz5UL45AjJvxofCcnPdgrfiFxYccrTkWtFqNJ5QyBPVWEfbetnPc",
  "key24": "3MUFLrej1NPgfxQwem7annNGnKNM2jpgjjHrdv8P3od7qfaW3VVnu4QFUF5uQL9QHWYjxRcmWs7bsjKZ6FeJhc9i",
  "key25": "9VsBEQNz3bZUBsU1HZVqrT5BEF7YbNtgT9DGihLhoHK5qJXbsSSQcvyHKuM6wZXEQhPUNDTk37Xq6xKt89CLWUa",
  "key26": "4ZzPPb8AUbLZBZS4GSK9GC4nQnjcXE6u9FAGZiJBXpW1SB2Sy8G2yXcAcJmgyFigJM92wePzF7BKoh7Ydw6W3sVB",
  "key27": "5tvnx8Xy36demPWJEC14Swsns9rCRrboajef8fmLf6rzgZMXiGtFw4zzhcSov92MhTUJ8S42GkEKrM2YWbCbXNrC",
  "key28": "nimHqDZY6W7WKh67oatkkZqy7g4e4NcBGnhm718uSajUfEjgTnZ5RHqupo2FHTM8p6JbLnRtnLBkMqp1YitDHan",
  "key29": "5dTL98NNoW4AUNtXzy2Uvq7vv8auN4aibrpPeXKsP2EwWn2KPLCn1Ejc4HMstQxm4NcYzffQ4oFfpqmC59GpUPcr",
  "key30": "WZ6TiF2kDXJgHTCCcRjPqELyf5JzF1stn7eddJSPJhS95nVcX8KBaCXeaigyYPS9HRktzWsXrDvHjGkZpHuZSES",
  "key31": "278uDSELyNJ77XCTdr6H6UL7dnNMQTnEwbahLeasQtaDkfTs7xsc4Kge8vK1s57P82znNChawStBzBDXiBuNKPBK",
  "key32": "2yEs4pEujfCemTPghsXw3mqwwpJYJSj1gFYgLDKSerYWRPsLnfuEjuHb5c4ahyrUaucuNNAP7R8mM4JMBkwrNnBz",
  "key33": "3gkypAr9wBQZbc13tKmfhNaoQXfnS3GSzq79e2mKiRS9YjSzf7PtgUkacjG3GxZFKqR6zp4cSKMjnCoABQXLq1cB",
  "key34": "2Vp1WKwuHsUn53v35bGDUXTMNKCQ14YY8XmJNHQjhczZhQvQ5HuFrzP9M2ihizyzi5ko3k7RMFQNvspwc1pP8nTw",
  "key35": "4h6vBbdNvEutAZ1cG3Dh9KSsZThB1mDRfCdrAxZDhrEBPpXDhpDbm5Evn2PDJ61c7zdy5Wko9naGSm22otiUudBp",
  "key36": "25kur6jfQ1kUDAWVqXHWjKdmoGMyzoxEDfKqSyABcGxSS5Nh7iUM6p45SKpdf6huyUK7HDtcK72QsR8D1XHXXUyL",
  "key37": "5wvuYdMj5SPAjVfTjYBMFVrU2zyg6CWtmP1KmreT9Z3RHgxzLUTti5LT42Lfj9wyr8g3xwMWSa5i4fYMkUSUnsu5",
  "key38": "2hyWbY4kSsEm5UQoHqtnerxRwGfvNBrdXGtzcbojVPBQzozDRo1hDTGBYt72Rc4Z3xd3FRRiVJWzXNtzZRtFvQVV",
  "key39": "MK3PftwiWdicC98aWJFKRBhK9BzRdHuWALFdqwrDgaBkjgZQFF8eW9PyDgBmECJn3fFrfq2UD1NvWkwRU8PiU5U",
  "key40": "GZN1Ztt2gdMpX5pN9GWcAeyegEP4tsD6tKkrvH8zTbUL6G527DsSBLFgw7BpBDersrGu6Kvbb8Xxvf74DBN5VEE",
  "key41": "28VFuAwHYw2kMiToZ4kmXdbyW7cnyfz1djqJY8hM3xwecjWaCKENAT7NZ1fpfUdVs6FC1mQbcHbZGUj5aAJH8rvU",
  "key42": "3z4MnSrgHZBW2iJ4f2Ne2sbsV1zcEca6xgdwceLUkktziqCQ8Kv3NzGg8rujMrGB8eWywaapRnkP7keq7EhGRRnD",
  "key43": "4CZKPTumuGm4NKSbzQH3n7ouCdQFqeoTKjkDASLagbrSC5SusnzafGw8kPF57W5ThzFvfkFFZeiEc9pd8Sx1CGfA",
  "key44": "2sMSScuf3wUmuZq6Xq2o5A3YRgvzrQzw2hfcda9YTow1ZhKQAmgfSW3vHFgPFhiw1neYtFej3xmap7oqGUfsc53F",
  "key45": "2yyESzpiu8j8q79ASmT6XBVx6eZiC3msNGaA7VDsgS92BZNMBSZuKvkHJdEbkYqwUx9J11KSpU2gnVtZnZuG9cdK",
  "key46": "4rjHdDW5SkHQjJBgBjKNxbu921AC1NmAH7J5M147kLm3on6KsLMo5pqXBrURs5jq6TGfVm5tmme8q1cvoKb9w7hd",
  "key47": "59grtQCmGKqWG2z7t2Yafmpg8hGmLMi2L2yQYZZqyJLGzut2K61xspgJaBBhs64YGYBmVo46dMnUfe95A7pdaLE",
  "key48": "2BrAeP1krhFxuSR3B7tqMjGVtaE74SPHH8Qn59oqTXEVX4ajiQfEN2YrXJypwFgXpzp9Jj4Lps4WrAtFNTz9P8Pb",
  "key49": "5uQk7SDjLrKEsA4o4FrTNyJxQgLrK3VJ8DDf4JdATJBKAvnQYbpqoyhaQd2NwDXhRd8Gyzg3Rg4yaWZoBZtvm6m7"
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
