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
    "CrD5Bn73ifMG7SDDcEVbbkb4C8CfM1iSvmJ5br2EBSWiRoAYZfTQiESTPJD1ZjbY5LXpG87E8LJaTyC4FKtzok3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rc1HTzr9uYXiki6mMJ9dL3NGaHFSuT7uudnHnadjbzuSKhdauyWAejS4m4SLRXLbyKrcro6fAcBy5niipX1hVSk",
  "key1": "5BPSo71fTRtf3M9oUpEt2HHRoHdPqEHfxPTbvFLRShh3yMUuPwpNrngcs4GvcUvmcxDDDZg79SZnmE59UGKXDouj",
  "key2": "4gjD6eSr5y9d2EpYWg7SQn46v2LCoeqQ1xnp1ZwYpLQUuih8GPiRQCGL7XmWn6PJbW9SSqx46XVVYbfhSqRf1QDP",
  "key3": "zwQfRyUHB1L5fgyQUY8iWspepwhzmL5mUaxdZFmCjtox1aqzYjniKtqQoZHMppGCUa68wnWVwKboy8C8Dm6eq22",
  "key4": "2Qm9TgXf4fKGKoDar1hTmvM1MX5DwQFCT7avGr1rXqpLpVCxMRUN7UGzG1G2sa9jeSRKEW1U18zvTBum2j8eBwxp",
  "key5": "2wrv1pTKtSPspmFWx8kBtjGZtC8aJWrkKfqX43T9YQ4fVjd1yHbaLxAnR5EvgZywGTKxWepuY1EL9Nma9BDKg24T",
  "key6": "4K6r9WqwzcqCJwnX5PxNPf6ociRzwmK73w7pmhN6bGQ8Te67E6jwB7wQy3dMEHzEqLURnpgww3ZhvNakriRjHVdZ",
  "key7": "5Sk8hBFjeSPGkigCdjqRJVFcn4hq5N4z4t9mPC2YkK8BRrrn9y7obrsHbJTBb3MyGE6iZY8jc48QShB26RmWNMoZ",
  "key8": "5sLouDmC9fdXMeotssfp7umcXzAf371yeFzw76mVheyRTT3Q1CnLMK91huFY8zzmUiHq6f3GoMKQx7R1jtqsKkck",
  "key9": "2s7hh1tYesTnaWJTLzvofvW7XwFBKaKsMsvSwJ2dd9eAVxBNPMnqsxwgagVKaEY35nkjoU7f8qNqCf49w6pBoUXg",
  "key10": "2rW96ZPYUcobKazRLmwucZKxwNdWAWyaxHWZk1LARzPAgCmd9dX31ESHzMXrjKUr4RVMDY2Dj1XB7EKK875gGYCg",
  "key11": "3kjv4ArB6SfGyPCoRXrkH6um8eoNFYoDDcnT3Et5HK96tAEWRmJBWRi43hai8CqDQcUNK2uPyZwQmjcTk34fHPsD",
  "key12": "2jMWRR7agEFyLhPCzoap9eYGW5MTrWnp3Ecjd4Jn3NTJYQ1QvaWVzrEk4hd1iXZxzhRiSVay5CmdkMC44eEqH9Qe",
  "key13": "4K8uoqUPbn8fjLpq6F5dRcUjRuFKdErAn82z77gBfSpormQHVw2414kcu9cS6BvgeBYdbeKqxuoriCLHFwWozpAd",
  "key14": "4PaLW7u7y27iycLEhckJPHvLAoSv7yJTL3xBaSXCwkz2TtzLjj4dWU5xyY3f8JHc7rAYYUVrpJiQQnE5Jv23VFTA",
  "key15": "49nNUiaH1Hb5zwKbiMychADsTAf4ssYJZ6pBLHMC3h9gRzCej3Y1jAsjfw93NR8Nzxo3t3dYaDsSoYsf6TzyqtLC",
  "key16": "37sanfn3JgSTcwCHNZ86y7xQiG5Gv1GhdaTPBeF3rupqSS9giUPPUkVXHTB1rU1froakSLLz6EHz7f7Ayf6pdWKF",
  "key17": "GVUeycXGHnwNa8YSDs3eR96seiwM9QXV6GRdV3L2eWYfQcNL9A2dA6KJgq1fvtb6g2fvPni643o9SwhhvECojLF",
  "key18": "5NQzcPNRN1qvKU8KETmDSDXa86JjK6xgwoYAbSZq3A5K1Qpc4BebX9zKjuNDCKyEhGESMUEQgcBbDgfaFf5KajbP",
  "key19": "25J8ux9xd7hNGqySsb2kP6NrDQ7pnoyFnTxystRKRF2YGj1VAkJ87VT5NK9y1g4BsdiJEt6rTCWEJB4zwnj284Vh",
  "key20": "3bB5hUWFGcYH9azUGNiCVtZKHMXNPXfACfVvwHTrpUZMUdRvUk4BVK1eEq6TgNkZm48euA4X5m1kfmFWS7LdDQro",
  "key21": "5SELdDa3fRXK7mAZZiiECPaKu21bQhNh7yeYCUsP14FE71XrUY2Y4VgMYcqVMgdwoqpQk4kXXi59m7K4zAoxhmou",
  "key22": "WTBBguXfpQ2vhWpA31Z8WsD8qHtiLz2kJJC46BNKfxqVoTw9mA35iUR913YxzPVP3WcwLEeVqUQ1QpwqnRVZaZx",
  "key23": "3TNJRniA89Wg3H58g6Hvu6wBBepjENyg5sEdWfB1ZkC1tjU91akXG1gyxpBdkShJw9yBdj924My755H88eoVqDEX",
  "key24": "1kfx1yejMWWC8o28aXYuN1god6tFHZYieFWu5KCjbcjvF2vxx5MKWJwjLHE18KqUHbwAng5Q1Npt8vVxe8axavp",
  "key25": "29yUJWwAk19u2ATUZzPLNZBYohHed7CPA6gsKMMTp8SnnvH3B2wN99hVZKWBkzLKhNwkfwKCNpWprnWsoKLTbHmN",
  "key26": "4DRCyGgt28gUF1q5ntzc9Fv4YSUXLSRHg2wiKxB6ngPrMCDP1jLxBz9kvkEpvWRnPmjmYiXChUN4nM6Ck7q3anRf",
  "key27": "3hSkGe7N1X4iT42jA8UUL4sK6XDcbK36fgrECGKaKB39sBKFsV7GB3nYCMvwpKC5SisViy8kJgZqx9dhrAJt2s3a",
  "key28": "9Yfq3259K8uxvod7zMREVNrk1mrbRm3peWi5tMguZBan8sbvdYApzNAAEzAyuWCLknj6iad87jNviLAABaJDQMK",
  "key29": "3L52XYPP4wXzjDt9puxuFzcKbzGkpX74r4rXd1QEYLpUZwGmcw2jXvi9gQbT7eXJVvcSi9WkNd1wya2rJ3j32tWA",
  "key30": "pc2Ws4ZwpTq1ciTUJntsR4nWvoHSo33XA7Bqit6vkmkEqpYZbheERX1B2S6tfLQTygqAhRQ1AQbSRKShDHqpnnq",
  "key31": "2hzsuZafqwygfNyesxKvxhaqD3CkJz9bMuHWBLk2U5cD5ASBtA4p6rNhRSzvvcTwSFuZ6X7iz48MK9xRnRr1Y6MV",
  "key32": "2fb9KzcoqsrRQdvBNYAW5UkL43153iD7pttme7z3kTmST4T9JVdaqq1ndxw7YRtwQDd5YmMGbZB572vvrxvb13Jp",
  "key33": "5evqA2XPoBiXxdHuow9oB5G5Yz9zpYvtwdVh2A5GGGyCfza1p7cnQwybvzcoZ4S9DrVACpj7fe64Ch8kvSDJSYTm",
  "key34": "3VZ6m3z3oCXVLQpVQuY4ei5SCSyKSALzGUQTap2toCeph1suM5e7Ykdvz1964ME68NMMfgu1i77GJ9y6KNKr4sJj",
  "key35": "2zu6hauYUFy6iJVbaKsJgQouoM6jQzodxcT5Xvit1H7Xdk6c2oFXY4zt3wCBo5UVbFSGnvu1H4kbwChen6rGzM8f",
  "key36": "611q2itxCziLVDVWD2Uy6iaFAJReLXF2cebR3wD8CRrRnW71n4cyptyixkkrcJ7dS1hkU6XKw42jQtDSj1P9BfSW",
  "key37": "5584bvH42Nu4F6AQoVLsSGPsQVC1b3XqPeUQFCTDn35BhtyrY5PNzgFhP9ddS1boT9Bd9szn48Gvw5Bswbwo6nwJ",
  "key38": "3B2HPwVoG542QkjWgw7sZzKAbzERBUTf2rRLCiq3cazy9oN5H3qKjWfz3rQYbUuKW1HpKpZ6DnrZXMrkMmn7PLNU",
  "key39": "2Axm7Nfv8oYkmgfEBBUuXuH6sLXphVbD1JdSaMfsvsDs4dwYMcH821dnBKqKrXA9YA4jtqygNYUboofhPkhTf6hh",
  "key40": "2ZMgNcUMrCNyJAZovbv3KAYMyb4fX88LnFD3sMtaj6yDZ4nAk6eXHvtMLdeixaCbejPyAAb9rHQMs6mJS9gyej1Y",
  "key41": "2UL71BwtUiX2N6c8vCTPa8Unbo3RsWx2yLmtnjtepr2jfZXTq8pfD4tES7huQ35XusLtYsEKzZxVkwvVxTRoDXSf",
  "key42": "S7BhCbqAfR9xBKcYKUx1YbJ7c1MtJMTCRzaUSbDQxYRH62Quy6V26CeWqUXQDwmVAn2qWBQnL5p9NmgdnbMd1yc",
  "key43": "5HsAuEFajnzdnaWftjqZVb64afaaQv6UyY3rtKZVjTW8L5JCq3bBuvuR1NVLrw6X47rzBHsxpoKbs9HuPJ7puMRH",
  "key44": "5ftaa1rfR1fE7pgQTYS5Fap665kafn3VriXm5aqvpuvCaT4ecpDxfuJHRRjKQAKZ85XmtXQ9rjJK1cz59ZFk9NmJ"
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
