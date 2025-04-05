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
    "rZvdb33ymtinGduaVY5JNDrq2jyBYXFD4yEN8Uxzv8iLus6btHJehmhQ11MoY7oXeAUjwFb7FKHcMt8HZJPn8bX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NMMMiUvipZEZN5NWKuRSAnjGDdQru37yiXMbagHTrrZ5mnsuYeja7uuXQt7s8XWTZkNEG6KC2LLEF7i2wL9ia1X",
  "key1": "5WJ14TTSEyLUZ58wdvT9yWYtW3L3heD5qofGwfG19gV9YEnp3vERmUFpr1SbZ432zS6jgimVctSvT2aagfnhgu4Y",
  "key2": "2DKbARqBj7KAZbHHVbhjNedKrSuaRkyM3ypWkrWNhZRPPdvvq7DdYmzVmihg6GFeegcZmdyHULqcrMbH4fNj6y6S",
  "key3": "YowFqhyFQqAGRUo11mPLsEU8A88PQipAe8hEmqbEiMvai86RcgbPPjTuM4eJArfAmLc5aHgSzDy8mRv6hqiLos2",
  "key4": "5yh4kxen9Anoj73MS1rgQwrPNboZ7wTdHzzEjsQPAfjopoUjDLyBaAeFV2AMdWoTxNuxBcbLD5xfrCiZd76v7aav",
  "key5": "4j8ZJUqUDSwJitwnWjKbj6BY826JS5rSzNabadmERZEafhJiK4LbgZ7cZPtk92MJXMX2XGR3j6ed4JM1GBczYf5f",
  "key6": "qUdimTF5Zk6dyFw59v8sw7tzE9uCSUw9psY8hRnohz1ak66AVCNxjXkMbLYKx65epWvCG7qQQjBspcNSwvtWe8v",
  "key7": "3xQMEG9y3c6CrRzm6ouNpDHH2KUNBBWwrUYXXXqDBx99trbYnKsjNYjSqTfpwPm8kvrBYG3BZpztzKvPgAnvzzQH",
  "key8": "fnAvCsktT4mKcffU2oJSKu1CgrANZtyzPcp5FjcdewB2jhnSqJddsXpFEy2QzchrWRPQ97VWBhA8gvDBVSRPR6r",
  "key9": "3sZHhxgemMr1V9gY51M1L9da659zSFFuh97w4GhpDjFwpqfSdBGwWLrzxiFoqc7XCRAULWxL7GetW57BNmmvTgzP",
  "key10": "4VWViwujmYym74bCNN3sUGYHofj8ECEvc75yo1Eq9wrhJmns8Duk9Ff558AkSz5optFWWwkHSCajHMNhFKfRCjuM",
  "key11": "5DnG9ApUwZwWEJr1859rFb5ha1og7WALEyt61dx64Q6zWwmsgsRMGdCcnhrAjqwc6H48ugRmcVsC1yv1tNdaPUdV",
  "key12": "2fe31BarAUS38mTWk8V55fQHtG1ujwMQ2eXjN2BsURcAD7J1v9tTokJVgMHK6uRQAQ8VYeP6ySY5XQSHDpKKtE1V",
  "key13": "57YvcJURv18173ZJ29p9XdBCJWX4SLdpkDZEnL553pG9Hm9jQ9y6mqiH36yNSH4esyanVhoeJQ6Aq5Q6CuTkRSfJ",
  "key14": "5ZegsfAqu2ESEnayDNHtXmhzNnfSPVpbk9qSx3PZh7CJC8x4PnU12Zpi29EYFSkb4r7xF5JbzPFjZRb8gK7PujMF",
  "key15": "3CikoeUN5F9ZzFC3anYT56n9qbJs1DbrEMofZgx6TW1DBu7btiAVZLDgFv6JLH6KCXYMfy4ocCQ6XhWC4FbJp4VX",
  "key16": "5hv5W2jLZE4RoLJAiFG2VNm9GXxNXGg8b7LvPrTrpeYCcGSfPHqx3k94977PmSTiY9QxEoeCyjDosLFokVGYLQ36",
  "key17": "5Uwy9CRBaERNf5ESxeqXBvn8cT4siwtjiSeRpHnBMxwPVCefj6AjEnW4nZFSV2fcD7N2L458hJHS3MpUWhwqvL88",
  "key18": "4oQMFvEcrQhByr6HgS4sBTEh4edd6AirwqYzZjQc9evikqL74QVXRy9TLu7Dag8cg2U3jzCBNNgzL4oKKZ85CSP1",
  "key19": "4rZJFVfreosJQBPkenaPr75BWtHRWTP5CxD3fLyK6zzpJ27h2snpnMxP9EU35YMXfrgZTTYSXsViiWwpaEcfLxhe",
  "key20": "5nQfxx65wATRM7q5pYZqcWkRuGmn5xHYDuMYwdv12L1ZNj8ukaAXhFAamY843SCAhm6DcKJc3ZbDR3FGFtAoany6",
  "key21": "2TX6RqHFFHQkb2cSpAPEcYtcfaMxtEWhD1CWMtPfSyfo8KJqoMKWVoC1Rz4eBhZZLcSVSRYcu4DPbK7DDGhoVoQm",
  "key22": "zQqFWrWuiFkAw5gxCMjtsu7rPcU4eUtvYNfVF9KR6pPgYVMDWz8JmWM7ufyZ9HBbLna9uNUtnu5ug63wA5K5i35",
  "key23": "SWZzvY8X7nySBggUumr6dd82PeKhS3tARSZ5FiRhyFgZ1f2cUzzLKRNrNCFtXAHVsSEg4yDRzVZcpwqxdu52oeG",
  "key24": "3i949RANqzes9BHBga878eL1ubBda9wCgNWAKokEBQXSRRDAmWBw4XHSs1pVXncE6hjLyg1bHWBnFFZgXUuhbPB",
  "key25": "3dSVSfZEhhXi2B1zZyzNu1n4JWQxQwsT8GkoV6b7oAwYd88iu4fkzZitZzvoGKhXdYjMoLhPV21bf7AHhU4XvCME",
  "key26": "212grPq6gMWk6GS18UhkiqsTySEyJSmVbuZgBGCufvVNSwB2obLLe9BkJKh5dVWtJHW9gKawuujusPuFETmKFeUe",
  "key27": "XTTZMzFZ3aoJ37L9s1RKdtfbkEqKBVy3jRpMWUjSRmB38WQttx7D5MxeTKAcWQjT7yzxfwgURhX2TctHuBZc84b",
  "key28": "3Tpnog9t9BQ3K2Gx8kRKuFahKmga5JZmQ8rxQrpn2WbooAu6QSxRggWJZMAd9aQyd7tEBxpBYaGVhTjSeBbDBD2V",
  "key29": "3w3fBY68s9RMiMWRkEieKPowa5FVtAw9jYyrPDFthXngjwHsjDuFveN3GF29tc8daA4tDUdi6BzGWJKaJRadY2bm",
  "key30": "5EgqduFze7v6FMYVT6tSKP7sMCQG52TUYSC7motDX63rsYxtprFLFnBZojP2jKdX8cbd7jTaxAaihKhPZAoHkpf3",
  "key31": "7s4L8hwLGPkTR1DZNRPvbbK3TGVeUxBCx5k8Soqo6eWP44JpbaqP9cyJgX8dWXscVd6wfLyAFSGGcXjzPL9hQmS",
  "key32": "5DjybCjiWMJdJRtSKJipnx2oQUQtsMwRKmb43E1bLKHxwESKkC6xoDQVcCwVw19pqSAJnq1mJFg6WEAtJBJxsNux",
  "key33": "5kSczsQu5JJG8aY5ihjAKhQ9ptP1eTyKPiyjcHKpAoG7rMTqgruyzkC221vCLHPfEBnTnke8WLVCFYbQJRC5bBub",
  "key34": "29u1q7cwWKYAWUQacbagforNgMQe3eR7J3BUpto5KJBMy1AsauWdcohovqWYA7tyNLEddsesdShFUSqRpftxFBGZ",
  "key35": "4yYTzqpCY2Jtvjwa1888jQGVBTkyLYfW7cJF2RVhVSZEj6U7fYnHJEDZYcVNwBCW1FpvWQRAsj9entnbeYMmaRec",
  "key36": "26rpEejy7PyVpNurhJzi9ywuwWCaQ1AfZ5jXwJ6GKKhiZ94VWwx1cjPU1RuaiPrruj3EudJRgTMKK7ubkMipLLPx",
  "key37": "5YwnF9iTiXvv5PMiDMzBFcHqHGvw8hM2nS8dpCW4UftjdpQf2kNcBELCi7bu4CZS7UT6fUGthmvaS6Pi2iKkwts4",
  "key38": "LfF3dMmDSnH7MwmEcJkGanj8GbvSr5gp1tBAm8TZPcrMqweCXeUM4WKnhreoizzmnrqpYaZXGFF2mPCAmZMN8aC",
  "key39": "65GGaPaQxT3gTf4YhSefUkE6yiWebtqQxqjReaPbv3HR6fvoDiksMEth3deCbApdDJ4FLsvhv2PFWeYWy9FQGq4a",
  "key40": "fGr8wCVM3cWAPjtYotrkiYsaFDQPm5TGk7CYVfNuFHnsrdgW5H47kRFYkK52T4oaShqesDgU3jeisHTkWBxcKKH",
  "key41": "45BhYZmRp9Ar2T85WXRDnRTnbZN3cmgSSbVMroBoUUnm3L28Pg5FYyLBKNn6C2wGA6VJNgupoAsizyronxdTEwfR",
  "key42": "hJdz4p6GDHYhJHFnX5YiRKoBiSadQGS9UVWKysBNTWCmMw8tCMxwhFnMuaD4EuBTh23myTghCLDHQknwxYPwb7D",
  "key43": "smbmeRps8KXdDNJCtYi6GJwFn6CaDoU7KS2xRLNtcmQkx3qWBzVbrQbgKc2ymgrj6ALF5yJs1UhgmrAN6a7nhcs",
  "key44": "4GtiUF3Sakpq4fFvY14EEpYa3X1TCULdThX7sdNg6znwRNE9bMcgkDQeBs6p6LFLdWTqwPtxZnawvM6EepmS9f1u",
  "key45": "64RyLNZvVxAuZffTuUjkdXu2HK7vyYF8mAEiCBaXJ7FfwkwJUrFDCxndg1JbwiZtB9tATh9zj1QPLQh5RikeYigN",
  "key46": "3wWtUHp9TF1jhHegDBJPUxFMvmQKZKFccmrZrieGKmSKF1Hdme8mUDjhs3nEwwg1JwwHRm9JvXe8McDGzV2rHtPz",
  "key47": "HrSiSSQ7FpzPvKzKbokFBvp7yFJKfNACUKEgAzmfSdCwxJE3hk2Se5L3vp9d19uDZUVmTg5ZBpCjms9CQaui2jE",
  "key48": "PNYTTSQgWPFbfAySt4d9m1AuetF73WYimroske3V4bbHvwTm68USdTPwhJnRTMmdBBcAMjSYehtUjswo1f1Rytq",
  "key49": "3zfPZfDjJ6BQDkQfkDfvpSoiaE8jrqxSAh6LavpzzHLm9n6THArtXVg2xrju6Ce3zfhLZLncxbVXAtCELsaFfJrW"
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
