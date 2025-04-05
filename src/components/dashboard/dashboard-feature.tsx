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
    "q9NMhGDtgpmJyKBxr86p9HgotqqtydF5ZVUszTZaJXEDDt9q29nSk1S8yQzFLCWwnoFibtc7BbVQW32hdcTPBwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ueN4a3h5opePWLsL1epsswc3YXs9PvNSLxv8ibFysCfsBrPwrEAaAGAic7a8khMLwqEn8BY2kDkenecTYsAt2W",
  "key1": "5Yaskzf8YLjUE7NuUw5VJUzSgz23FnYiUA8qu9GVcBNm1exKhQt9DBShaymjEatqcqdkbF4AU79i4qECJkcCqmCM",
  "key2": "38ECH9chwQtkeTi9apQ6VXABDo35toQ6qu5CCjAUV4V9AfgQc8rrSu5nnMXWdTCsUDyFJqVXa4TJQZJQiw8sWdtV",
  "key3": "3BSsuwbW3KFpToJDNmfwuDewqYxvER71Q43Yo4YVZZ5JgpvrWBTE1LDmK7ExCWgypNJefpLtQJt23NF8seSwhrL1",
  "key4": "4yWdnot4CDykeNtzaJQv7xYdzYaCdeywcmuUdRN9e6Xoq9aUuQjxWi3SzrzX3fkM8ZN2MgsMNBPgqyKtPRSEZVBX",
  "key5": "5YmXe1BMYHYanGKnem5HGWAbNhv5ebaLGFCziJU4toe3dtkBLkemHTGg2Hsgt8FhMidBSxpavLRtQQguTzwkyWyg",
  "key6": "1YhL2QbffN2EHZw9gFPEG5hPwo81cKFeA1yooUc6Wsza7SQZ6yj7KtAJtotn53N2BHcWpp7q9AGASxkt6wFtHku",
  "key7": "4Stsum1GY1aUJCYpPrW25CLZMwnhMZi1DEm98JtXTCWgzFF1Qhz8SqMEE5PyqgWFSKq4co6JRhDWdhkzD3oPcSgo",
  "key8": "63QuTm4dPZ79bNbN13wnhFcWp3vTE3jDbsj386f6BoMZYNrYmVzTAjAe26rKGzbVD7j4EByVq6HSPXuSJ8NwpAyX",
  "key9": "5TdSEcJy6ANbNGYwA8RjreKGbYXtGZrgmS49JgZFAbfKa3rw6kUWW1opFFdsoXAxiVBmFDeQdSdt5dHtiQgpa2id",
  "key10": "2iTx8PTFNCSeoXoCvbqzA4ZS5WUtwYY6YiHgGUBqgx9JV3d6SL7j17tjMaurxkfLwk6DsWAvsQNoxrYPcdPug572",
  "key11": "3uAtkKtYquisEhmpYE5xkviHodf9L5ooFUt9wBe7x7rJmQWmQ6JP4DRYCkxfYYqmLngpLSxtBQZHaa7pXmKgdyZr",
  "key12": "3wzC69cnuUZeuSf8TW6hf9aadagAA2rCkPfr8svtTtzZ6ur1odhPLgQBKm6KFAhGWD5KDMSTE925fEabxLjpe7VX",
  "key13": "3dp1y7UShzKoz82VgxaBx1B5jkqZHDpTsS58f7vN8aiZ6zzXJ9xKmRumkWqqWM39WWSGsExbfHakUZLoskx3SJcd",
  "key14": "4XqVYjvdP3ChKkiGy9PbnMLzH6wkJHpbtVqjjnT5te2iWHX1H4Sbn7LMhz7vmJoXt9wg7P2yUciUDB9FAtS32j9t",
  "key15": "5uziNWYpApeGj9iAV8kgF8BvLv84hSwXDi1vwue4ffxxoa7GtNNGJ1u3zvAeJfgtZF1AuJUysyvnwhEsba6L4DTt",
  "key16": "3fbsiR4mGvZWWrzBv4mJAgkvSbwjzZuQfYzzNN5Mwzfrf3ykBut48pQLFx3BR211uPsxJvniC5cMESBT4SU7XC45",
  "key17": "4Ub9Xk4aXJx4eR23suYMsrJfftUZsBwj6tPLPWxu9FDRQCkSYXCU4jiCuhke1YSyoDPCoDDbLLsd28BPEo5jeXvR",
  "key18": "2DShQyBTLZr7yqETtGrf1FoRXZesfBkeQ2eTb3YRTm7acWKVijpUyAtn19AKMvZVC5SKoif6wrNVHLUcqCU3iard",
  "key19": "3nkpyyjqA4SFJcuv47T2ecy8m81GCPaQhkLZqtyA45mBawKLepEXg3KWVnQUKhYffqea74HL7qMiVESPjCAnsvcJ",
  "key20": "5U1iQQbpVVYEdKsEqbb45sPXKbyQQCxd7NcJnvGc6pPc4m2h5kzcUKKV1adKMyz5a9yedXCkQ8Z39tRbTaCxQZFS",
  "key21": "5EESybbD5GJzsEJFDDZoctm1kPHXJnZnJfxwXp7qG573PeyM4gL2kuMUyahqsHyVCmqXqScQSTeqfaJMfKWsSfXJ",
  "key22": "bpfDX2Fff95K7GsaSmPHpKyfo2BVLKsW7rLSGBfng2W7D1mdLr5bF39XNmWAkYXJEpTsut6VWMwWP6kbnCHb6Nn",
  "key23": "2XpmUaPySz315nSCdSrz5gWXzhGhfVt5pRjrfMDxpfotAcwfd3gn8oLo4aUpZTMDjhUHhyjeoF3AdZk5dBugkioa",
  "key24": "61YmMBLwtnc7wtnWC4h76wvMYXnSZDdjRjKYWif9dDoSRHVz993iLFvQPUZa4NWCNvR9k8jgFw5QfCYxQ2ZMphoe",
  "key25": "4Wukp71Z16EZyJgb1Z7PUFCkEAwctyrnujAGqUampg5bp1HG5i2m3MePwYvmujExrCEJ73tzY5CRjj5C9Y3jCVcx",
  "key26": "RbvS8cJSN4UFJaknHBjrdLmsCCDE2Csfu3Cq55qXJQcv7KECfeVJiGTg8omNziJc1Vc8CVy3KrEFeFSeqEcNFwB",
  "key27": "MEG1H5YyJexDS1EBMxLmF2Pm1GGX7Wwj62niUDb3m3Rt9AFLiKU9wWKc7YttMq7DsPUfCYJoxnj2oZYnAt3oNxu",
  "key28": "637D1YY91z6kgy4b4kixTLi329W5ATZKvgXFQbEQrFyvPzdsEymfQBxRmYC7PjpQMdjgkC9we7tVguxuonrjYupv",
  "key29": "3gRqhzRwPnvb2ZEDr6E9XhjBa8DXZoxAXUnJfTHHJyn1L7qcEDwsPidz5y5f7XqCHSeFJGLiH7icqLhUm7yQjRLZ",
  "key30": "4obHuE1aijRGdm5WAoGsdR4gPPLU2ssPowxNHnwzLqoGzY9DswvW785uJyUm4Chxqyb2UT66SSffAvYbvCDqBC3m",
  "key31": "5HbkHrM63UZtZgND7GEX8bPoPdepQinwoKpgJxpChZuVUmVZEteVLBSJk8tcYY5d5ZtD5pD5g9Nchd3hmHq6bjP4",
  "key32": "3CEzmQiy5CuSkVz6C5Fzxoxr9bVJfSRBLAfTJYiPyTSH63awPpqrDxkiTETpAhpLkrEhK2CjDB2LyrspGbFojsGr",
  "key33": "2zDEEawgAtyvz4nsrXzR4smF6Joip2gFN5ro4qY7EVbfFiFj9ZRm8E46kKvJSuwLLpSwdhS9DwBgWYMzoysgsg1V",
  "key34": "GUoGnBFngt7eNBLVNJMtjYtw4UvoKaXZhuScKiFjg4aGXfuTVsnBSEH2zRkuu1zXBV916vC2XbHkZMMrWPrsJHJ",
  "key35": "2obeetX7ycGKss4b4SWfh2Zbx7CHp3j1Ejej3h11DeV4RuEJX92aUP9D6ynvPu9DbUwverrYJm42JJgx3VuNyc3x",
  "key36": "4jUSbRoWtFp1MZ259E2PPNh4AFaKAsHPwBMpDUJ73PfrNd1RfMpasuULfVNbdyNai6xMVmVpPUbLmkWA9cSXNG33",
  "key37": "5SKCNo6ibVmTuJPKY4v3B3iexMAD3ZS7xfSiFgtsPKE8zVo3appZyi6hHeo6KvnZFe8RmxYYLBcR7QF6VUzwipNL",
  "key38": "4RyYmYiMLkJQXW2yyAb9b75QVhprPDChh6R7YtMviwXHy4mHz4o9ZMdXecgsZAge52DPYa7UjxfP5A4yzdEb3oHj",
  "key39": "YXxQCpV8sx4wBmiKd6hBDxS6pRqizDvrwpGMYxo4okX3Yqx315kXJ1gLzjNCQypNMEi4W7Ehcw1kXvKShmzMbYA",
  "key40": "3GWgqcHbywyDiKEP6oqrK5Qq1EPGUDurm1BxZJ871aEdQsHm5i7YXroSihHG2kZaKrY9hRVsqfmfTKgc54G8f71t",
  "key41": "3boM1o3FUj6URddiMRb4Nvsb1Gx8AyN1EmNbk6AcVK3TiWyRfTkPMtC9GaC1D5WFwYzg8AaqbBDhHYzhYov3H6bH",
  "key42": "4foe8quDeZcKfMYWdnJ77m6wLJpnar3W2g18FdMcYS7AUKQziLYFS956jtbnJqdR1rnj5YVw2hJD4mgt69h7gc7u",
  "key43": "X6MsA92Cadxsh4vEKZJFZbGo6s3LrefNmxGoLHQVCwyoq8ZFfuNbK5cLPBppZpY4KrZ9MXN89hCWMiBXRjFrNWJ",
  "key44": "3Ngbjq3PnTz59ZccmV4vo9w9GWysLSVAEBxZwXGjv9FgydjHRyTCPngx6D1fDejz6CdzsdSZXcvrF9A6kJKV24gx",
  "key45": "5YsLjmKUfzGhsrDa5QHpbnDpXyH91xuwr9nYy4uhQHa7YmFxxh5ws2swaZqTWcTYnWNqJBWAMREfbXQX3Qqf3Nnr"
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
