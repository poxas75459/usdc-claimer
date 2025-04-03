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
    "27LhSDSQrTSQ7qtvwXvpX8X8DiQsTkXAbaZLUY174ZxnW6LW7Du1BySMVP2GS1SD6qhQKVS1rhLukc2bzjR8qovL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F1ci1oDPNJ9PFeRshjMi6a9znKWWGdf2vkrpTS6NMHo3DZJhF51BgR4LKWqZoSjkV7oe7buCWsTG6JAjSSfzMw9",
  "key1": "2ZiKYr1AS5QnVqB3ta55zhYHz6BfVoeoPKbvpCGtbBA1RNJ7XE6CfqrGcVuMQB3XNieGeF8r2BHeCsqJGU5a8Yqy",
  "key2": "2dFmtDwwPC9Qh4yLP4ENdehuRZ3sPLg3MDChFa9MQTEH3hbuevm4Hfz8esmxc4GBNocddr8HC32coAmhoReSK9MU",
  "key3": "pcdNkfiEuAcZxFcQptDneS5ksKj3WoYptxMfh1DdGF9mUxhLzouj4Xhk37ZdYZkjqoa8W2YsfYwknNwzmSHe7gw",
  "key4": "viqnQyvnnAFo3nVb2isGg3dLyzjiw2eQf8g6F2j6gSVcUvPJ6YGhCdte2ftoNb4R4A4HthpG4xdoorvjtYooXxT",
  "key5": "2XXRHAh62dts6AVmbgEpEwtm3rHzAg6Kxy4jNeP8PPe9LrG3ExQ3GCcxZPpnKs7UTwNJpWvKE94gDKgK2W3HawZj",
  "key6": "33pyWVks2NSQGmEPdMomFEi35uw365FN8ZdBH7pKCL3PJYfsbt9WZ6sRNiysbYQ1RGcQSWbt3tftZAPJqT57EDRK",
  "key7": "5tsTt4QTLG8k2fGGRL917LxuXQb6np4nKh7VMNhkL3y4ziRQhrVpqhM4ZnEJodHnoh4qZNvNu1XPG1EHX8CdCTXK",
  "key8": "5x6o18eyQXMk21mFB9xGzBdUjdXwsFH4b3mbvHKahXeVkKCaJNMh2xtDX2uxSzejYk7Y27QKd3Su4mWU1a7BPFUQ",
  "key9": "67MjDjiXkmZmdEnWXB3BfiMxxKqJoo7FybU8qaF23N69uxsBte9PgPZEhb1CTKQ7kcAXzELfQtqWSwNMcDDAv5wV",
  "key10": "4jo579eFZiZ9Cv5uJKXwPGfGRPNG9q1AoUDbHjaxQvcv7HTMXTSDCuTWFExeucnNupgmGubHbRkFwXZMK1KyaTin",
  "key11": "21fd4C6mkBRUgFjLFpU5Hnkcnxy44hmfekctc1vH6UYymmb37VdmPWN6FXVAXrfR2caTwfgRAxy8QMswPibrpVDK",
  "key12": "4epaGfRC3CHnRDskSZpzssx57sXpF1DahT9oxWNsNP1EBn1o9TUuned6r2Ewg5k1VHfAtRtNMLsBLMqsRynEyJY6",
  "key13": "4JdtN6jRxBstinVRVh6rtG1W8seJbYsXHRMHUf1gio69G5EL7KkUb3HuMjcqnQNkVNMJSTrvt1FV7Hy24hyfPDhm",
  "key14": "5G2wRwaQGGmNGprvtoGbVTPZgHd8Gedqf9JoucTkv29iTJ1iojijt7eQWjhkjTL8BeWvU63VUhtKyvAvmg7njHJU",
  "key15": "48RMa23DwbXWFwPUajK4nsRMbR3z8DwNok8o3x8uLrD1ntnjePS9jgzHG6ZAJrKpyUMQMXTkpsd43AHTuyckzSV4",
  "key16": "2gQBqNc9cfEesbP4skLGGXVajNq4cDYdZm1mso7CsvhwhRLJ9LxeTABaMVCMuPrUgpEJPRrkCDkSGARugLgCQqnL",
  "key17": "rDYKnuHSpVKjU8eQpo5JZGuBFTsA6AQinhiBkqqi8gbEqAWAkQ8VvEjqRFXHPhR3LNWovwJSsfmKvv9TXZ7U4wk",
  "key18": "42wq9gayzjvB28dPpwfk86uUByoi5bCjhwmDyLSy4M9Cpa31VKNAvQEKq1Ujw7sJeC9U9EVx3hCZ8FWJcGkQVsDq",
  "key19": "5mkE7FfPT3pwp67ij212LKsk11fMzvWF4vkQ3M4rY92SZgvnhvYw5jnADjWpLYbdKW1fqazNz13Z7n2mjx3VEVrZ",
  "key20": "vGVYjtXwmrmUNZ9LqXSUG4kaqBYeSPKtEo7CnDwVGZBMjNtZzmmcx6x3asFLwc7nvKWpHnhQWcTyYuzHP5DEnoN",
  "key21": "2ZfgW5RuC5CqMbtZjRzu1cgpLwAMpBTotUDr4CZmToYCJiRoAGFpqHzuW5cb67jaEGvHsFRzbTPWvjrU7YHuThkG",
  "key22": "3vv4vY7XSC3ihsKase9kHKcFc71amFpqCTnRnCvse3ob47EbsXk3VxnTrYYt8pRTyLDcsYJhpnLutoLbhBEqFDm4",
  "key23": "3seg2dDQdf4ztEQReSRDKNJz5Ri8wRaf5XUkSto7BPXCcKGe9q1p6DmRgWyG4Fqa1EvMr3PqKkg3ZHazjB4uLQh3",
  "key24": "4QHnvLBfWHxfCzzLcZ7dHVpicQshmRX5b5TVRGRPQcH3t2Tr2AdY8xw8N7AEvFHiRAfr3iznpXQNTGzzbprC7Xbj",
  "key25": "5M7ReAfEdDRFNUuTjcfi5KwSDURmxB8GxDw7HaY713XeWoUG2dMtMDZNVJo1EmwJ5t1iXPjASj6wjywHHDj7o2hY",
  "key26": "3Gz11z8NBqEwrwVJpXuNxjDwYVTFMwTHDrqL7vo6t6dJnS4K4S6wHHN4ZneAGGrNn6M9Sd8CpaUdZpkVKUHJzRBQ",
  "key27": "5ScAfDpPbXvXxoShu3Df5k8YQbn4ZdiwVrRresaDLxiRRCiwv1fU16HK9QPhbxQh5DDUYrstXQNbbftkjy8x8ZTt",
  "key28": "2tDQsfK9GvYiubbviSr6iCL8AR8ZK9xTKsRJiUfdGuypU76FDLxfQ9Sq9SQG8Q7fxUsu5vguLFRUe1YPYWswWtcm",
  "key29": "22tyDmh2h33vH4iwT9fWqYLWgxA9BiwMz3BipwA7BGUAa2qqPd3mspTy6XaEDZfpNRnt6428GFazVt4uZq6Ezr8n",
  "key30": "5ndJHZS7kvX4yPpyPxguDw4KH4a2Z6XszyYusmCc3UDD5FyXtXpDVBoLc6edjmFX3uwapxvfNhGUqLKJ5CDoJa9U",
  "key31": "2wM1AvdXE4erJ1JSS91JV2CCcRQ1qEkzxaZAqu6iyqzXdgg5HRu64jjjyqZaTedryBeFZ1NrDETEadvr4RwDXiE5",
  "key32": "5B9kBfx5Njxxku8vmtabiYMt9VnQVRfkwgYzsJgbu7tWpxp4brLRJ5xLcrNkaDfaXfXAEMPQYgeyrbPWEiYsgH2B",
  "key33": "3avDktCpwGwZE6mdvifV9CofL8ZCebYcaMxdEpn5mbYnr7ooL9HziUkQBdSJTQoTkXbW45a1oSpkW2LrrfurdRqN",
  "key34": "3djvaZ4Tftm2LpjoZ5tj6at9rw75V7KvJnPbfRupGJq45W7JbpePpV4jBFuRFs1zLA6yMTygTU9qqrNzzFreuE8H",
  "key35": "4pCi1ixjJkDo9tAs1zh8Qa6gCUVVFc2sz95UeSTJBdxmvagCFz2CQxDHyKXqSzTByJpNAmqRFUhC4kQ2z9cm25mx",
  "key36": "33QPPTHN16k7S77d4U3x6wWKhr8CxzQgBb32V6YSfNXC2Y3tKrBxiYzYdNtb68DRAQCbPLgwBZcryUnVi5TRDe8F",
  "key37": "aDUroMd6AnCCHatiuJMXJtdJNLJz2FroQXu8duUxP9MfMtvWVwj2nh8TfiaFvzXB9A78u5PcWoEz58awTQsQHry",
  "key38": "5JzbtVVEqwFxD7qQFvoKAWAv6hoH7bJbaAsn39WAtqLPmJALkdFRqbLvaF1dt2gFjRRewavV2QGgPtKRvYAqUyZr",
  "key39": "3c2DE9KMoovKGwz46iK5vUReD1XGFNyjmmgUyFMB7fy6CnykVSKfPFEws2Qbny2kxkhk6VBV5dRJFdRgCaj78S96",
  "key40": "4Fn18RBQfVREVa5vggbYAC1qRSn8vhYbkTADXMQQjvguC1FJi9J2mk3aHJrwquv8RLwk2wu8PbyurNQ81CBmAvQt"
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
