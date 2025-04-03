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
    "59sBBZ7PAmBJq1EGfDq41BhGEukUyd5tD67qPezdPA2RNaGRRMWxWW5szLdtBQztZ4frYf3TwyMcPxgmRV4Wjx5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zv9GyZV3x3zfPnhbVpTX3AfWqRnSLdxfc67ih2mWjMp3prXzYjGALxwkacGgYviLeXaCpVfLL6Qe2YRMNKm2G1n",
  "key1": "5LEuQeqepN4abrSjUfcdUS466MR35JiNgL9YuUeiy4F7g4nTRAs6nqtBkNDp1RyqSNayKAKej7jHAZTy3SMi26UN",
  "key2": "5JwAQVgFzvzZz9ayvV9KDJLCiTftaBVbmy4GDVwCrncz19ZNKfSU7A9NnmECdsEWJAfEuhpdHfNpdU2qsgchcnHu",
  "key3": "KYve5RuZG8c7fetH18WXrMJ9HXETTQ7TS13C5fWreavqKdBhrAe14iVAwT53YffRDy9AtWXmdX5Xas3XT2kFuap",
  "key4": "4cEz5zmicFPF2pM2KDGPfDAgf9nzpxVownfAUkumpTxWnWy84Kizc7du63j69hWJ1WuPHeKeoR3UGxMRvWjJr4HN",
  "key5": "4rmH3W5WxQ9SDrnyJDcQSJeK3WUJLM3oMWpgy5mLbsby4PTA1STmf34Y2PAA6jjBsKdwYSFE5ehYommkdTqPQfPo",
  "key6": "PZxD7JMzwEPq6vMHLhHJ7hbt6mW9MJugTj7SjwJZsXRjcqjJuTD59s1EUrsw1psazQ4dnqJYF1CQZqUpETiYoc1",
  "key7": "5rWYKQmZqAFkVqxyyC2Mix9iSf9qVBQ5YyGsnGVpZFXPFDWLcBZhLmq3BxXAmXrqv53kHiBoFdLK6SDce2g9RLZm",
  "key8": "3xNH3gwQ38U41LKAtPde2U3zbjwrpTaG3E8ZjMtKnChbGuyVqZyMJTKrDA4uUxEgK9E3G6arDjn8F5CWTMJfLvr6",
  "key9": "5Rpp9BBnHEEBuyM9wWxjSj7WgZjYtk3HU2Y6sTBHVnqD2MvXRtqYgSKMHnUwCequnoPB9ZWjQXEJBaKC9FUta5Lp",
  "key10": "4cHVuQQegDc5Q1vQfXf6BQYi2krU1TkgvKfGUAQJ3rdf9KrYjdvjXrs2GVfqmbZCQqxGKs63EWyzpt4BTyM5CNoC",
  "key11": "4Nu7mqY3nnypDrj75Hu5uUwCZaQG4BdhqZpCkFdE18t38JSJXKzvdkdmWpkcJYkWQuaEEGVsxEayTjTFvbfuVwFu",
  "key12": "5DZ683VkLnjPQ4wz2SmhnCxt6Cqa1EP7qC69bbwpeucjcbD9aiza5G3Gx5R2z9xS5q3kAU3srvZqMyLZVSJrebFc",
  "key13": "5EG4vAMKxLrBPKdjspuSbWcdAxUsReqEUxi1KPmxws9So7Gxjp54ndVH5ACZUMizipYZBNpFeRmNAyorW1Xgbn9j",
  "key14": "4xCG7bsbmQb1nB9NbdnhQhNWxgCNQQCVLEtAbT9DNWcgmnuaqZyvLdfgmXwx5ouX7zLsozJiKr4RBjEFPQrTMnaG",
  "key15": "4kkkvUBEhUudJqsjSb5u2ctHHgf9eoiikMaqk9M3zP1yXMgqRHt4bSShaKtvga78Hn2UCWQazBcQbEDUHTvXeqKd",
  "key16": "mz6MtRCWXJ9F2zVisYQhrCu62kufmGryxSQWuZACSQsokLHX7oeLmEWePNPHpLwrCUDyQyvH88PKSDYZ7nUt7xE",
  "key17": "5hmNbVniz25qkufpLe7kb3hsSZxdFyQjTGBf9dVezh6snWhmZE7u4kRQs8N33VqmWZp2QiLCA1VUWipYxm794Q3a",
  "key18": "5651GBKrvC5g5iLDWtW7u6cbs5o3sAKFnLNUsvDzqMUFj9Buoq2ezHwXjMtpjEBUXoDFKakpmZENW4VzXL6x5xL7",
  "key19": "4ohpX868EzKHggyzhCGrc2o2AzwHFe9kcCsMtQmJZwqF5mSu1sb63g9p8HX6pVgL4yehp6xdpCM42TPkFbsmKvxd",
  "key20": "4wLxThDZXvmXNGcRNgXPLGmdf3WEjQV8JpAUHW9H6tYwYgYQS5ZwFmJaRF12VUnQ83VfGib36GmutGXsM4kLkivB",
  "key21": "4o9rtPKDg6ac7u9bsQ5cjfUsVnNvRxE6hthENxYz2UKS9hdZyeLczomWo2rFib6u9LZSmAG9jbWRLc39P2Hfoumz",
  "key22": "29h2NNkwrfoExA8c1ydXTJ8GjX2pwiTbpg8PgK5LZCPgkGzuRRgLdFeiSf886BRaFtsxhEiaTzCMMkemqd9YPZwC",
  "key23": "4NWgsnK3EWoowPtAJ1BVqvQ5c9GRPhVKu26Yz6H1bEr2vrGeXBXFjeACEE72t2hKWKXe6JNWZnzQChDhwTcXD31w",
  "key24": "5Ge4LmtNMfxGTyBagPDpVZL7VRWJKvVEAT6LFWeNJpKfXBzwdYixhBKLRJohEbu9iV2LFr3Fcz8AFEvfRMvHbUWz",
  "key25": "5Gkiqu4ierT7bA2FNdQC2fQJZv3upFtsetVjpo2THfc5XDpE8sE24uV2Xi3as9xHHCvvxkRe48C2VrhkNLKbs1jz",
  "key26": "BkMXrgrsfaNKwTu8w2xLkW6bzqWKDRy7FWcN5MDnCDgJsjj5eRe7yULs59KX9gMb9LM8dRrUTfJvNryWnhnCU6E",
  "key27": "2VwTTmHXvjdfa2DqfospDX2QHa5Lhgbhup9FWrBDuY7vVH97qvsdSHbzbbMeuUJi9r2akFV5UkK53pJ2skqMCvCD"
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
