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
    "5p5xybHwpMG1NbtbB9PAjvL84mvYS9Wh2msQ3Uu5hN2QK9NxCYeXMSEr6sWB5ZAEEKMPdZzbMBNwvwh4CqRcM6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ta4LtVAs9VrZpj5ck9W4iXMWSTto2LvXUwUZUVc7bg8NYEKMaQx6CxqtEthrSZ7pbtuDLkhpXfYM1NMVNgDKh3J",
  "key1": "65dY5ZXWccR4XgywxznU4Kh9YEW5rHuChAC5PX1mfDbf5CrFYonKX8Kiso4K2hY7VAdhFkJn8A9fTcjivTrYQd8L",
  "key2": "3ABb2MpnMDG1bAeCEgeKdycYXwqDz2pawSPq1C2ibMHJJUWudgPN31XCxjNrDf1wTRh9G3bvyaxSo4AdGwUaMWhR",
  "key3": "4ULLR4fZnrsTWM6zMu7AkXnvPy498sbdR9XdD9BHJ3iacdk4XZptgx12o5TacvBXRfhCtLtfLQxZsfP5aBfx41aB",
  "key4": "538fEu5xozoQjN6NjXPowc1TAKj8v365D21dA7WdGEHZNNdpgyw1bJrvmXjGCVwPG5ZBNZqzGc42bLEZ2Yz4g6rH",
  "key5": "2JoagnGQNuruEGZfVrjSBQBQxyZvcy7n66gGnaeikZGVTfRy2Fyo8ay5nCocjJZcPRR1VfkbRM6vsk7wVnFwuhKM",
  "key6": "6cqcTCYUiJ9KZfUbxVMhDGnRbdG9JGFdGE34Ukwa2Gp6DW3sBHCLU1zEWp8y9tDVEp2ofb52qLAneDf6J1SBaS4",
  "key7": "49vjgznsoxWGvbRhTNNNx6dTuySX5P9yVCbWgGdyfrAxPdvjqLj8pv9SZzDiuKCo5cV7CwkBKRKDMnkKwjFNsGHg",
  "key8": "3yWcXYEXsowiSFHng8eEBhPxd4Ziqqfsawqek1B2hdFK3QbA4ytQzepgR1QNpwaR8858R3BGk6fRFMKq54opTyBF",
  "key9": "5p8wfCiGpcRnqqfYJEZznP235U3viKowcGcCw1AdMLotTokoCVnVViVgweRsBpHDQQ15MBzZN3zbB623vohYqd8h",
  "key10": "5nhyxLDhMTVjdEamFmSvYSGcnnK77XpCHwcuFoZHRr2vzsvdfo1KU7y9i7wbcRy4tf1HaDhWpMfgCcr7L2VVCHoo",
  "key11": "3Tuc8tw94Yn4YHaJoExxWEq6n8p4Q1SmeU9u1PncfFyuiqeevfYYspuS6Qks4cApPaSCMCTix69zSKBc4iGG49zL",
  "key12": "33hPk3gmZroc3Uj5QJRziBSLCGBo6WrZTJ2qX5oWnidDoCzBJT5sjADZDc4CEbBAV1yRPx1PvTmVDM5EVXb1Xtxd",
  "key13": "5rr2mDQzK1Gy3oRCdPCfovZWyfpVfEmfgTURMhYNNuecP9KNQdQiNEnpnk8z84ggnXv2NKevN3ns7evBRyTr6C2r",
  "key14": "aSKkQmzqUBAnHeNpxWjTmgS9xv5AfBj9xqhZGSy48y8XzMWagoJWD4zCmKWPRVWEv1EwLES7z8v5p8BDD6W5fjC",
  "key15": "3KAqPiVML8hjYSr1uqDD37zmeuaSokHz1pW9z7wc42hKs6mcPFSzuB3pD9gEtZkE4nQbUVuqTDFFADP2RQ1DbpAc",
  "key16": "2A5GeTZ5iMeuNBngBvrsG3H9Vvv773Z8bLjKp9FBoJGRyfK4zBqV85DJftZ1j7WcwNofbj47X1mZrS6jJM3kuB8u",
  "key17": "HDT6NijZ3VZA4qczdsRU8HVL1YsJGqqHmoT19nHj8j7H3jkNd6mGXNT3yFBtBhTNciiiX1jKhPUeuE94NR5jCpL",
  "key18": "2ArTQRMgcGb8TtHLYaGkZzBQsKy8YBkiKAnWVdiLfA1ugst6mSUBeKMMcUY2iQB3p9WCZqjppNkcLTaVTg81u1D8",
  "key19": "dFaFCvG3z2doSkV6eRkZ7T33dFaTeUBkzBNzHhXJiowtvzcyRxpAUgqmsdWYit9uQBLZSSxQ3NBfrwnjQRzvyGy",
  "key20": "5fpFeukcgaWGaPF1pbd8ciHHBohLoPDs6qaPNYsQdy8BazQKcv7weon7M9bTxwpSHKrah6Hr9n6CfsDRa7rDPckG",
  "key21": "2rUCx6MPGbwvwJu4RotdTgSGpsDoZoPMNwjjqY3YjUcqZtHqkcAQL4iiejBuoUQta46c96j1BA9UESHLt78y7Ts3",
  "key22": "5rCcgGBc4Xqhw2K5j3YP2Hq69SVKSZrJEWuj9UVNEzaESmy51UiAorxzMmpwiXr7c6Hfw4Lm9juQxkSNqaWYWTkj",
  "key23": "5gnBoqdMCZmkLo7GnAcHqmY2CUpt61ydBavw5RNnTFi7aq8mAqWKbBMB8vMdi7WCABZsn1DdC1veF7JSnT78j6EN",
  "key24": "2gktXPJGCCJqit6SvZQXL4H1JpauCgVeXPTseQ4QSSEqu1uAhdA8kgD5zxB3bjvQYYZhMdqqQ695FGBnyXLNk2DR",
  "key25": "4AmBK4tRCSGGw8Pe8Ssksy71iLVgseY5xzDHbGk381PrVMbh4M53VVsZSFvkyNz474T9cfGmoR13zvYWqUqdGxHu",
  "key26": "4FiAsKKKXG2fvpD6EQkctFpxd89qp5r8WxRyEgBP65wjMKMfpMj9ho2FkgWSrTFwLhgSoYnYGddb8HdJTjuaF1br",
  "key27": "38zTpmw8VcR4XvjXEzB5SY54K34X6xMCimy5wVpeBU1RaQRktLC8dnGwJCcz17ZgiUMrEbjBigwHg2RHYz2Pimfu",
  "key28": "4zzJjW1w8QcDpqdYwHxrNrbiEQCRzpDAg7LJzK8J6wGkG9QZXNU9sFMfGJYLaSdxRSLCVSwovaXHNbRMYFesVCSZ",
  "key29": "Uu58zSR7Gmhm1n1hk8SCMmGNyWRTmVuwCp4rbJjEDY9aqWVc9rc9BeQP91PiSqAJUxZcjrqQXZ6QBWPNFJhzZUE",
  "key30": "2WqPWtACjAx79zs15egYRHx7Z6z89Y3DYMfnS9HMevYy6FhMpkG4UEBzVXkafz3tBRhunQuZG5FYgtHCQg8Aq6W8",
  "key31": "53DohXaeP2ZtCdADXedcYWikHtMy1gw7oVYEa53yWVero8sBjV157W9c9h1nrmkeZXFZpJtzMMdtifBUftLSyPwG",
  "key32": "5ih2kgGV1LWzfHubAKMHKp9Dc3YoUWNdaGb7a8axznHhRprcdbWTtQdby7CH1fWCiHdWkhAfQvtt74gRR7GxigzC",
  "key33": "548Ay7XBTYymugUtSdVhEnCWvgSDxFE4n67171z356hnkuk5Tf658cvBdjVjtvTGNUus7Ry74NSc8phrAtnGzarE",
  "key34": "4ag4R1sPvwvXokT1iAzZwZCEttt8eHjibbB5NeUvXRCB7fPYGjgxcmd4MxXNfWeH3HZLrwJSAUZeNzeTN1ShY7nH",
  "key35": "4BrbxTV3hpCLfZPpw2T6FY6evTxHDgzniX8gqQpJVNVSSTADBv7XFS3nDeL8gu3V5PCWEcn6dwA2SmP6CJDejvTJ",
  "key36": "5AinCXxMHfhmWf7RToNPBoB4LyeroFuP4pbBwMuAt2TDzYjijeeYZQqeLNkztFFSt9bg9vCHmCcPMbKg39cjsCaq",
  "key37": "5Nb4FEc6ky3kR5X88UYVDFifHGnBQfNvrGZGGyhWgJb39iGJqC37wUtW2WxNy9LSD8gLz9s2uaW9ut9fjXSH8ApE",
  "key38": "5KF4LJw7zAK3N3H2JHnfrqdqmLsue1jdftRWGynjFE6f7QJxppg4SsoN93PDCwSwM5QiCYU4Wp1RuxXrgVCfnZXN",
  "key39": "5J8dZDJS6aCPmv9842bdvWJw3NVtR2vsuVp6JeL7HEAnNx9gbthTcAGh44ewsZQHGv93SGG8ZD4H5i6tzMkwimb",
  "key40": "5YakLWxUsNJxobjHtqxmXEbeWDgedVCbTGmc5ehno1BfpqSkYstt26WAxXA5cYNBWBrhV5reURFpKzj7CuY2UXLe",
  "key41": "2NrbnfBgDcQG4fBei1bzask496toNVr5cqPS77tvANp3RxKzCXDgwepoUbXBcjkufwWp5YDxQbZ6wkWzndFQ7MCQ",
  "key42": "fMho2Bi8zFfQk5dN3MYqhmf7g3973LRmubCMhomqZHGnLaXN3FL9LSqGY6ezE6Uzc5YXXFkXYfov998eZ1WdK8r"
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
