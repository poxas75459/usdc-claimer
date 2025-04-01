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
    "5KmxyKtu7NBkBA95ovwbxy5QQKLVpWu4UmQopMNk6EJvFNbqsW8JWShvqeZVRXTvn3qs2AfMTR7PHXTdqmWJ62ny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gDbwHfQZnVhEY6QfBMY2dVG1ZZWTs6XSPDx7VjF4QPURdAiXj1cnmgpQftC3TVcascAxioRZq4v4UkHXzd5k5Uv",
  "key1": "3YRoxxh7xHjoL2Se8HDN4BsQEhTV6sTSnjPNqWJojWotCZ63pVMKTR8DyFjpzsX93NicF6AHqZJQ5ok7YCVU5U9s",
  "key2": "3fujJximWHWX8YRBL8x8sBHxR9BpfvKWxuRiQcS1tDyNqZg7BifdDv4wNamSWvnjQWt6LY3Y8UHUP44AJyCic54T",
  "key3": "4BJo3P2QM4TffXg6MtJ56mJXWSFRFejA7JFRqNEoFb4L5578v5iHVuqW8F8fGkxVRt25rMLJeEyjhH31o8o1FvxD",
  "key4": "4hefiuS3LawM5y24tJ1fjFMqjsEZT8nL5Nq2R6hYZqAMv2E4vFVuqw4x5fHPM5J4wCyacBQhLuoKSLXkBVrZwKF7",
  "key5": "2Yarc7gC8XVU6ZRP36w2g6mwJ9LjW5aqNDmmaqhdMB7DUwo9rTTxbzxzmuHwDgPGV4PXnvs6gwnvjLAFu8waPJYG",
  "key6": "5SuDBjDwfdvVMEDJJ4XDgRzYKKzgb27FonM9E4zMjqgGddvnQNFrwTfab7zNf4LgEb2frzUt6oVMcVsA7DsPB5Yt",
  "key7": "3eNeKxfuL7sgqhxcDvmmckmMzM4TDVafoNQS4J1bK3CEUhNLz15HEgRKWpPghzuLUAmA3w6AQyUqkiHtw3NAvbn6",
  "key8": "tR3ujZQQsQS3NGYDRRn36wTmk8xqLTkqa1eFy2hPZXU3ggzhuh3TyixZ5SeLVyDrfeovBM5NF2tj3Hk1qBPa5tr",
  "key9": "CeDUodWPqi2mDvv5XCK2jStJHC4p7CyPhchDbBBtKeYgLDTKh82xNLP6RHrLd6zB7dqDnSNaxE2Nwbua5zADGE9",
  "key10": "31r3X9A67LT5a1mHinCp2ynAo2NNbTm9sTtBWwYVjiTVhsaXGbpqwrocQNQgn3JVZ9a9T4RvNzVDpPgrDXD3YiZP",
  "key11": "4YGLZ6WHaLFKS555kJ8tSy9RHBHri9ZP81hUHmWpkdnbyFz1ijHguwLm1FWmtvcHcJUuvep3t2AZh1qePcdgRHS5",
  "key12": "MRZgF1ed8CB2FZiBDFyuJdfM7q5RHVe5yXEeDwAv9LxCNyt98WkEHweqQMDCSYfYtYZ8xz94Y7cKFNFUDfhnAee",
  "key13": "5t1rsJs6KPcHZKvebvRi3WGx9UACrVp6HmwSGj8MSLMbaeun6WtkLUdeuXoyYJTKiF9i3q4P4ai5giMNZTM4jVam",
  "key14": "5HR7SWmkPvJr4rhiQX8XVnYEr6LvhwfkfYVyEFN4v1QF2dwBvzxvrLb6spSGuaz9mEmD7qdfbXMRu1x5rb7QF5w3",
  "key15": "1WY5p9Uq8Nvx5kwrnyCDKRkYYLpLZkT86BiLJZv19qir5ay6mKcYeiXGZHjCczg4tX4s3BD5h7jw5FBsc338Mme",
  "key16": "2g9GfcKTWVn7WGZ86Ywe97BpQAP7jiETACz6dppPmGTCedaw3m8HjeUYo4Cdvtrb7SLMHAUDUQq68bVE1ZYZD3Hm",
  "key17": "2ujuA6ckABEUVr35xMyHwi21mZzkZ15tsHNLG7SxQT21RVa5vddxorFwqBKAemG7bc3K3FgmfpqQzLJ4ysxgJWbJ",
  "key18": "9e5FZigWjZxcbkikqcd7LePHzmjMQ82c3zmXLVYWkdMo1K22mM2UbR3xLCAAqjQ2YesGK6MFhZZFWWim53ExaoH",
  "key19": "9VY6bRah8dT3uSrh93cKKEfbnSAep6PJSaCmeSVjrXS5jj1fPobRkdcvq1kuPEjyJeB1wLaseK4Qt1UQ8k6ny9E",
  "key20": "4Yv4dQDqD5MMe9nuvBLMGu6u9nMxoBMadNekfFdfdsvrU8u9DX8txTGEwEqmgiivamWSY8CgR165NTjDriHvFrYC",
  "key21": "3dyd7TWogqGRVPmu6a8BMepehdguYJt2ebNssEaGMdJoSwxY5USdo63vc7wc6hFYZjZy3RdZcg3mmJWokzLPjbk6",
  "key22": "5FUBawwRAgyyLyFo6TXesPKFDvzanfTFdfABJpg7QBBx7ovjWK7KMonM3uEqyKsPrntF7yfutRccEdSXxUgxDHpD",
  "key23": "5aSkEM7oWg2XRwyuGSwYvaE9qyh9Y19NjCnggGiCAgFE2tmfuWZKqUg1L2nKPJ9QcghGKT35ZwqRCnBy1FTFtNd1",
  "key24": "3gz4c5YzJAE2mNfTcFPNy4dHNotS1BCmETk93WtmMfmjbknR56HwGKk5yBnjfKNRBpxsQMUwdpECa5D1eZZQtyyy",
  "key25": "579i68kEjuyJY3fn6NNpWt3rEpjuY7EpFfqiDnQ29uQxJQBNLRKVtK8Kvv17D2UeQ374LXqHRTtVV2PtUS9LDgQf",
  "key26": "bVrPC7xtXsMXU4iqMmDFbHXhtALExffcKfyxF96ArrZjrTjZzmGwQopSqip2taK6juP3c3B9iqHm1wrBiFNWShw",
  "key27": "4SU8SfutV6Mbygys8z9eKTtXATRdmjub3mTLXbC8HwxUMg8L6ZprweHF5H7NbpadV4RQyVLNxGBUrjUn7a2Wqzn8",
  "key28": "3UFU2Ns365F8pdWRocWEqhnnMq5D5pGiXExRThPJNgVvpcYLNJQmCYifpHpBd1g38wTiVHPUHKGB6E2F8eCmECRg",
  "key29": "MD1gHYsSCQT6nYDFcYtk8tRTY9xTd1t1XxDRZftSCLLzwgBASa6ywA4NauHSsX2eNHsZbZh13bZ3yrRMeXNgfjB",
  "key30": "2X2mDzd2ULYsrh5qxQ5UcJXNn3JnxyHsqargxtas5vYwy8upLt2CbfWP8dwF3hYZ4AR4HZgxnUJAUCWp7A4o56nA",
  "key31": "4SQCUJXBCFhRxXm5NnC1EE7ehmz1cbbiXbmfUq8BWeKnXi22NeR61oZv9FGjUUN6u2KyfYYSgiwrpFXXYKEnp4mx",
  "key32": "2eaBT5YPRQYeL4jdfTGd9wdKbz6ppReWFYSqNRPkFiCbubxgjEQSE75pbcxivDu4MAVpUXjiqfXgJA9ixnj7sE2j",
  "key33": "hA4HwYkjdXtmk79tvsvaAFuvtYxMXwjzJKoRr55GGd2xJHEQpCBBwtiBrRLSwRDoW6zsbTUmtZp4rt3z3vg3kNK",
  "key34": "3BnP14tVsXeJMswecrm2ChwGc2VpmWqd38EZt9QtXwmaZZBRharY5MGrzdcpxL1WhSjCVYuDgsgX7sjdWVSRjdcZ",
  "key35": "vMhd3Pms1NnjmC8vWc1s7J5vuz19ip4N21QA5mDwQGFuAg96T98mXUamgZncMqAtAfDSZDVU48cGhDSRiQUMDpq",
  "key36": "GoWcXwetVTf5C21hYcDsnaRA4ZXvwgRLa6gED37kjDCSmmZnKzhxqq5hUddoYXhSrQcukcptRy3MhndP4gtkqG6",
  "key37": "n39rSZ9DJgQzrbZjL7NuzMPTp8X2iqMefuHc5gv8F7C1KitjrPPBFZueEL73XpucqqAAUSMpYVamfGYmuZxpVHr",
  "key38": "3BNQe5Mgke4V9JJZByBZJ1b5p4UbNDaRPQxw97mqEjPUAWbv8LWYY6zNPRQ6qvYSBsmh3z917QnY6xWaxndaKfCN",
  "key39": "2ss4xBzFm7JWaCrL9W78kj6FMf9GAm51mydnL27NjDZYHEPiMBxrPNHjfjejbGHU9xjh2iQWdyhYvJWHagqvLx4F",
  "key40": "2MimzhmBLggrEcZ4fF3juY7wjKiHQKvH7V8Xu5NCDJQA4ooNg2ZwHZgoyGoG5LpixXvzigLHgKeejRairADYu6s1",
  "key41": "3c2ePCQ9RiYMvS2Noa5A2jNaBuWeaifzgK2vhgWP61sTf34UKC5JP8q6PeBPYqJt6Mz6KC1An8gFyM24VCuL1nM4",
  "key42": "5UX2BAwmmeiq2F3r15sbxpqRGxBDinaPj16R1YaDzyNqQBccqyM3CVTvodBKABcyHgDKtocBJPDP9zu4xyk1mf4i",
  "key43": "27BVPKPDdAdLqU1hcptgueJ734TzWJMK7qWMC2p4CKhQGuHoUdJdzpFQAJai4MeT81J1xENkBVioKi2PCFhZorPy"
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
