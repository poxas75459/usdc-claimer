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
    "4v3h4VCx82jKQhyLgjGjwDvpP4JwK1jjzqGDNBSnZDkfyhTN9RHbAghmmmGENrLvPpFDjBjzswqGhevr6EPdiWES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YV1xZiheCgDSETmr5J4gtm21KuAAwThwkn5ia45BX7YpvL9rxoqmYvShX1gxdS1wemcaaYCNZ22aepp7V1itzKS",
  "key1": "2FJ6b816vE1aFWYwP4pdC24Y3F5grWttP2DaekznRDmKKjAKL1dX1TM5hgA3JvBmX4fGK9kpCo6TGjRNwe7geMRY",
  "key2": "4tFcbF83ahNgswVJT4Z7jT5jEazfDoqANa1MdnT1bVnEK2o1Z3G2fk5EBYdbeyKmLQgWvKHahCt34sktY8WQQCm8",
  "key3": "3z5gruDacUEvJhcFqBAgXnsWtiFKuhX36HQBSTC3uQep8AWoBoZhknEpKzxuczDgLa2VYFD5QrQhDsbPZf3itX7i",
  "key4": "63P3PPoK4sDsDwGanZyKhb9pMEMvpEGWcQETGvw5E72UdRVodi2g6PMgxnBSiPLijKUsagmTQ9daPXjHhmcRSDVc",
  "key5": "T6kmKPpXETuso4eDWnQfhFLLMU5PtkGoGDBhTrw9dnPak1WMvVkuRWqW3PvF2mVzW1zsDvaoVX4Vc1C4A7SHkeo",
  "key6": "5KPy97EZJ63aDz2pQ2Pqoj3EEo3JqF9YyFxT1LhmbgL8UJmPKdTc4qnuH1MQ7Vng9yw1gqjP1bzP25TVjtGNxfD5",
  "key7": "LNNCJfjr9WeM7XZJZ9aSX1CpmJTpKRYKeVMMSupDmTmfqsy5jPK7YkhQGXXkUvVyv7dQ4YsK1i3DvDp1oruQyzK",
  "key8": "2naH8V15XrLq4NS77M2HY4vGYq4bZTZUpVhiNYXXFi7eVemuHV8B5wzntEqkBAJpoEVPs5zpGUUhKLLggEue6Nrq",
  "key9": "43DfXWryJX3zDPwmKf3kzkHubct52eQDAFGJEKoTKLV7YErUS83pdQH6yT7pZmqhCXojiwsGa3WAoHc9aWtnM4gj",
  "key10": "3gd1kbVD6bUGGEpEZkgsmQTYRFszFKZj7pGTnzW4yj4GLVVF8a7515Bh3bbnRyiLAEW2sQyarSS1A3q8Vt6YTYVC",
  "key11": "62vDRd9P2216V1jMP5gQrVAj9faxReUwXRdJEzXMoRWVfq4UZjHMKsk3anqBHZpCja8YHs2p7zUphYZCp5nmvfEy",
  "key12": "66NNuxLSyLXwFQEcyZWmthEKHuVQdaxHhiS7tk4qgbKqvwGZr6sX2M3GPyqKuUDwC1QK74rTEzJBmcQ8f7zNfebP",
  "key13": "4YsJsSMyR71KHnkwmWTJr6U7A6p33h6Sqrun1u58PKroCpyRvHyGogXvysyCiLaWdmP4CrM39eTWvFdfVvNLbDUJ",
  "key14": "4xzWAGHbBYjX7MmjS8WcwVQrPLhtmW8Drf4crmxxXwmSukYeGR4QvHyhtQgnRYoeACsLmBrPnuFkbayq7yrvipjc",
  "key15": "2F6K2H3tyoX3eSLoiFRESDEPK2FJMHyd3bKECW2Vzffdoin7iWb6Vi3SRcgKxJmLQjezVAyoiie3kpg3VVHrMiTS",
  "key16": "2XigQb45pBqDSHmPUFTRCaroBYR9KH8pxSj7aHuJ12dQQjwk3DrpznfjDdUES1DKhrLJXeeJVqdw4ZWZgZZ8VjQS",
  "key17": "3rmvTjb9Cnx492VaSwSvFUBVLgnraGtHoownXuNyddc7Pvw8XzHvTyyz67k9ftd8kpXTX6KjDmHArhegsztYiunC",
  "key18": "61bFp6NBxMcrgo4ws3ysS7SYdVcBdhQfsjpHMPzS7yvFdoyWcZAQHCLGEifBV4WFGrmXS9yLGEeuKotqMn9twex5",
  "key19": "NQdXBhzyibS35zT7WvAwR85tthA5JktvqiYMWHrN1SamBseEsnBsRGzZYWM5zpicaj6EAnJdzN7Wk2uqSjafHJU",
  "key20": "2rAmhHXLa2uqmu8ZurHphgS2NzngPLbcRhp1NPKbCmckiZ38suedzKdBx3aj4vH2LpG75cjunQme398AXUTY65p4",
  "key21": "5QVt8TTaBcJsyRFdZQiF3h8FnkuAsMFtdmQvsodNnm3oXwvH5Qz4Dhi5tHWEFZwuM86VhHe26pnqv3DNUin9jEAT",
  "key22": "2LnvHS5tuDux5ms1ys8vd4v2aBY6BADNL9V7EEujTAuULzQpTsPDv97QEWpueph78EZfPXPcjNj5aESMUfL39o5B",
  "key23": "5qkZS1FnwDLY3s4umj6oRuwYu5DJ5UcjGo7FJ6N9XHjFJzBVwbtrWHP6EFWjwUDmZDSpTaLmYP4LigehBCcoyzC2",
  "key24": "3qoPjxERZSYEkvZs3eub9DD3xTwS1TJSnZDyZHvcmdYj9vFdEeM175AJFa1Qd24NEVsmWpPWZLUYsermHvUWoEAa",
  "key25": "5v8GRJhiWCSSmsvE3mveYKM8dtzaUb2w8upmHK8Z9G4WFKsqBTF5dBA3hMFLccMEJvRajNCCGVv36PBpqv4fovpG",
  "key26": "5JWUgJ193wKeEAg7p3SQyE4HuPY6RHXAy6i88JcjrpyYWJgrjAZde9recAQLshnqe8VNnwivBYFTiT9XSdFXxKvG",
  "key27": "4RZNQ8msytybw18c1khe9R6o5vHmNkRGQ53tFU1v4wSAnLCdWV52asHfkr8ijbR1wF9kgwVWgcTKbSHXLjgCrJAL",
  "key28": "4HunyR69Y8sbU9EZNJDuU1RGdU6oqpbmxRjVbXk26yZCi9yLVJBcuNk2bcsYoGkraRHAWRB2MvZ4dbnpjqPQtkmn",
  "key29": "4iBEod8vQHqHAPk954FMYh8E1ivZy11CjZJHCAhdVWCvTdyAPVJBM2u2d6iQozDCvT3azng22TTeaeFnzewHonuQ",
  "key30": "3rzCs2P4LjNhvynMKrtVa3hWFyAbLRnzzpQt6BPt3XuVja3NcZTdC6vR2NH5aAFja279sW63VhGjsBVM6o2ZGgzf",
  "key31": "2mrA1WTiVeJehokjBxh5wEhzHfPutNVdjxEV3ixgb92DtxdF6ZsmzHBHBPBZnFQZtWVriNuWCVewET9sGdco3hbG",
  "key32": "5VDEmBUNuj12FFkBWw11knqNr1TP71Byv1R5EPDRb7m6RF1s43dZbwh52jLugaMLcETXWPXxmZ8BXP39rftk1LgD",
  "key33": "8anczAobrjXAzqM8ZbqdV6ZcSU5Yjm4PWdqcipxS2AUM5btWoEcoyoVmkaYCJEWBQrvdf9hQeBACuWQtWRr7TVW",
  "key34": "2mjorUdjB2sUQXHjjWzBCERygMZPJi3Lv3nuoDHng4ez5sz6PyYptk17wNhsEF3N34ywNXZNF9i8LJGEgVFRH9GT",
  "key35": "3uEAhGA3hGZ5K4jfSWzwhvUtfm4BgCCJ5oedFTUAQ8YyXEmNfomzFCdH62wExbnak7B4ZvdQmaeQYBNEznWbKiXV",
  "key36": "4CyAgAqBJy7mWZ22M3GvFS8YXn6JJNTN7J6dMaMqaYuEeMK7MS8G9hJUJsNh5ee9LULDvj3gERZ1TW8NFs2DScsQ",
  "key37": "5vjR2EDzb3ZqgKFtEnSmVLiFoybasxwWtGtUZEQ1PC5VK845RkishDZwueNRHgNsQtvQ9BetMp4n69kn9rHhNHAz",
  "key38": "51XGwuUAPpewdmfc165QyX8z5N2Jkfbr4Lx2iohTVfLPqUYARwHCPaGwpSzEfPeAyE91Qtsb5Po9GoeKYEvEk5LA",
  "key39": "239Pg9RnHDQpgQ6kTbL91dHJbzj2TCe1VnbdnFMpuGcpwNLNte87VrSLVgoTA6omkMuYxExJQqMzsrL44rdqg7U6"
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
