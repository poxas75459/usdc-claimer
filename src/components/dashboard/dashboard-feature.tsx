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
    "4CFrWtV624s4nf5rJg1fQZdafctj2dLfPyTQTXKRodavqczL9yxsgLj11To7sF9b99ztjiHP2syK4521ez3Cj4GR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hMfMveoTRVhzJbLuBKVYCxPTBQ6mjNQ3WMjTS64Eu7HqRtGHj9wvy5cv3QMh3qVUqHfauvBFQbP5S9uKrg5FPPc",
  "key1": "5wP1fLS2RL8Auu5DXhTxjVDRBFzUfGPY5jM2p2xs97LGsq86Jy3xpaHAi6FHCkCSLypwrFCojZc9A88hMYbsBxJU",
  "key2": "5TKDpczeeHdypZYnTnd6TdTopJ5EjsBKThJgZs1HkwmkJXSDZuggSsJHoKe3Wv4gV9PMdDsTTVBHY3HiyQvZpjZr",
  "key3": "3oDtKjbZSbxsiqQepdD4N1vAH6N1t9DSDBY8NsuohfBhhRsWj1yEu9EsBEbj7HSrchTeoRA2ZRfHg4CDAhG5eWR6",
  "key4": "352HkVLLWKAd25WhFTrr6Lee8AuVozcay9omb1e2uKM5dmdAeGVmvWDv9XqnfEGXzDSWh2qajMncpg8kduaRM7f5",
  "key5": "4q6X81zaj8pd8PsxkLJgwPrrwdniLeZg8BhsdTCezCE5wu79WzU1uNqyVgXfWLeeDLrAQa9VYVxadaAGsvjQrJsC",
  "key6": "2PAB2on2uDqqvTWXiEVv1gxZjqE4BBH3u7agBq2xQ3xb2179vKSStsZps5XYYRocAwaBYUpEyP293M7CVGGNxjJ8",
  "key7": "3xKGv1aiuw5zVQiURQeFfdaEP17MzGZAfLprJDvU2K6USGQqTNzcLgdxT4SjfwdnGUdeCMf9cjyRLyTDKAvjyScq",
  "key8": "vqgCaqFUxyy8trncudTr8EafEuwUbxJpPc96DWBdDjsg1h7s8GVm1TRjCzbMpXyM38naLXAfxbweA7uQsxC8TH3",
  "key9": "gqAXcZHYDHagLTXQYbTnF9qM4vyhj8pnNCGnwN2jj3MMhdaA8KDppdexYGs5PuCgfSuC7frnxZ1uUuvSEC6d5GD",
  "key10": "42rYg254uNuyvAgjAomc66bTM1HBueqN4oUcQx5Z8Xt3G8KVgamCsSQyMCMxB6szyotysoLckbR6i197iVTzcYrM",
  "key11": "2TgcbbRTauwNd46YM4sNV3MATR42CGy6RxYZcgAyo31FicnXQFYxd8kAjT4Ss7bbPLJLN2ceWmcT1voRWBwY7UX7",
  "key12": "34LcTS8CZWCuv215W9RZo7yUJvWijktriNVv1QtmMFrxyexe35FZjzJSCp5cLT9jeeRz6FxX9Vc9PLe4X1nDUGRd",
  "key13": "zTiurCcKQXvsPKrwTfRifVDaHEMrNB43BaEX3N5W73G6uh9djzrzAAcZwKYuKKVWMbdo4QzFGVFnUK1VjXhpG7a",
  "key14": "29q8JnnnegEq1Ph2jVeSHPFAX5nsABwnE1YXWfgwNgvzdJxxyQJEryK3s9rxQegn7nzgczP4AFYRuNnWBeFAkC7E",
  "key15": "5eCkt5Ffn45TbyKVRRvxreSvnPDEkdLYdYN1ZshiWNBmQVVZqhcUXnAt5meUckCGD2R9J1dFntQCCK6Jtc9qo37M",
  "key16": "56swrxnthj9KNvkjyfhicbAAyVrPj1C5krYxTyFFfmuLatZwEuju3V1RcwDGDAdgrXB5creeSx3yYq6u2Yt2CuBa",
  "key17": "5EViodszjnPnAfH8NG5gigobpJe7mwrvSeJpon4FDGcUunaHyxEpd7VAGV56swtwnxb2BTcPunECYdt8qji2GQMp",
  "key18": "5CGcJS6ayxNSCJzYTXfAZypnWY15LKYQUB26hYCZvVVKVpXodtJfg6CHVZefYiQCSPDejGCQjJGvH9PwDVnESgMU",
  "key19": "5jxRfEXSdK51V1KLPoB3itb4oCpPC1Q1AtRjFjUWjD8s9v5zVEkfeY7Jw5ad4PRyiJVJkYhAJQuzXkeTh4oksSML",
  "key20": "4AqEpqEk61Uu57TgSzpC34gjpv5C8hPV2ka1DDVoW4bwQgk7gDMy6JSBNMgaSe2mdrVHrfMUKiYPDq4v4xu46THz",
  "key21": "3Ay4UuXZZ4QakeZSZHDQvpJmq2L16vR5spnurYoysRCZgJJgzxAHvswe1UkcXtkaZo4nU2uccekfvW3V6aLaVkCg",
  "key22": "4vdaD7s3kSUFJPwjbHNbdFhb1oYg5bJtfAKHGGXr7zLsBou6R6RqLwBtutt2poWC51M8rwkNSaG9nHpYQ7fYc11D",
  "key23": "29dTPZUhCgPjzQC7XopzoQyxa4XQxxnNzeyh8jmxBvbXKE1iQsLw5nzBP7hjVa9YPGyMEZbw6APaybJvK6ypTfjQ",
  "key24": "32gUpy4fqY9XGBHutbcs3CjdvQmSxBviSAxLRHjymuCUrwGHUzQGrmn88AWk2xtuHiioa6RpNDwT7zsQokcRawbj",
  "key25": "33cfBxLMBSYmDsmRsB3np2td3x78qjWHYQkWc1UEm2thNEZh3D4E31JfSjun1TBiTjBi9US1UV8rnCu8ddxCHyso",
  "key26": "2dGMEoc2b2MemxuRFVwaBAriAcX4J1AYiUjGi8ND8Xwx6wekFjD3EvX9APRCd7L2EHR6145o7buVEasBA6R85uUd",
  "key27": "whCE6N2yk5yd9XUHMX3bRQRSxuqZTRsTVV2HsqCPxKb2GJCbUA4H8RgVavkjXYrK7dFR93EsfFNxKDcNd5vkJ6d",
  "key28": "5fBcmSi2nHHEjJraqBPu2fH6RcU1uB5B1Mk3HpcQipbbuMQ7sV9tmp429FafDew9o1PS62MVyfzdTdnMmhk7xt6C",
  "key29": "47PdN8m7BXSqQMavhrY5AagmvHg8JFrVXL78xtStj2AoqGvVfTpvaK8zcGWkDkgHMMsBCttggM8soY539GJmUCuX",
  "key30": "22ZrzPGX5ir7xtvvpiGeCYfoUHzr8vrRu9L69j8iz4rH4MjtYB3XcjX6w2bkGpvRYayFDCcnCpiLH8nybbVpHmqh",
  "key31": "ZJ7N3XKf6CvYy5QzPwAJaPoSzgA7BHgfmyrg671PdzUuxQShmzqGVMiNPCjhJx4L1mx5KcTEyosZVnYuJwNSHPY",
  "key32": "3UaWxPzTFPGRasXpMeFunPkQe14QJXm8RgxaKRWwPryaDgdJaNy8k62noUz5RvWyw6pVYcy7z5vPthgbPEDJwPWq",
  "key33": "3Gb4c1jFjxGEhg8P4keAEc62R7MrZD8WG9Yj8oEdFLxMCmStjNEYnonrWXxcaXbQyiiyUs9N5WxYytFhbzVRfmKu"
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
