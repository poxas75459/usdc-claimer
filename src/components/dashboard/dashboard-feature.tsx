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
    "3uR6y8pTUaGJeLQevmTbE3tbeTEXvzEbSCocDfQguHmBG8nGeyAtohaCGBu2FpGk9vfLeegAsbS2GCZsRJG9hKKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43BBmr5fpJ2Y9Pms4zbYiyB6LvvDT1j2NL1wZAW6YsWT4ishb81R214KAyv3MLJWGyqtvzdwqUbWkZnkuXCsg8sA",
  "key1": "4yiHHRR8RQo2M8M9Zemrubvg6DKRy4EtHNu6h2vZW6Yx68fz2aHK85stdk32SEep54YKvLR4o6qThn54YSfQUhjm",
  "key2": "4NGnQfqKePVwwo3S9UrorchCThbkFvuYE5eTdKKH3QhjJAbQhV9pasCUicvzHan3cf6idjzxsH9RyiPvB1zFEecF",
  "key3": "2SFuMPighhXfnF247LvtoGnkKfJJ5WqcVjk6f5PgeyJ1euGga1J7YNWhs453esPdbL6z4w79VMxgho4ECTUz7ZaR",
  "key4": "4ptnLH6jfZceDYsg1wLmz4LWGqRuEGWp5gif5ae8TaGSNzpwd4hcP7oj7M2sJ828te7oJpaye5bLSeqxfHhDdWqp",
  "key5": "32ck777P4f6eew4sqs8N6cymPioKu1M8HawE5Nq9vtpmDEVMakFWRGFcb6LnMHNhEzuMYVfUU1dz6pamMropWFRs",
  "key6": "4WvYec5uv5eXkZ8qoEJGbE6V5MNEu64pibcZYxsFPysFhsG3hrHhKQaXuQR7pctbCeYCnzsqFhaJMJXxxBtrfCQX",
  "key7": "52U4RUNY6JLyeNtNA9BLuNS73pSKvq93bJaQFktjTiAebaoXyUgjvwKdDi7VuZNHroQeCGotBVDb6yus4zDWLmWU",
  "key8": "35QbPot9jVFRHw81rdE4WrRC1rRkdBfQcEXbYUY3xvpqsWNrFTh3wQocxhKpyYfBLqK34CUPrJAmR469q3RXvofN",
  "key9": "2YJGRRH3wQbRnhtLsSz2447Zjjnu63vKu8o2re6vrLZheXMR4iodWp9MV6HphP6uSY4sqWSam2WnQVghUUzAehzU",
  "key10": "5FjYeJ3K3pqR2b3NjPF8vRUPzngRzMfSZNsuZnx6RSGFHs6pURKVDCUb8CqxfoK3ri3qcWsx8PGtm4nRBCdu96Rq",
  "key11": "46VdN6vy19PudK8m7wSyfzvnTGanPyn8ZUfYzgpRwkSjMG9f6PpEEENstzB1VExmL9MJRzVezhhqTHpd1UoV6wZM",
  "key12": "2E6F9rjRVbM68Hzq1sK3fTMwAPNJUZMgNnCGSht7nJknmvMsboQMRm3skaY5HkxrBmQAfd8HNGAWEc1UBwTkj83p",
  "key13": "xXLLeFYkNLysUJH2x9EkPD3BRXXDNHApd7VPzUN5C6ZG5gwRDACXohw4fySRLBqScaosfi2T5PVoWrz92fz2TQN",
  "key14": "4b1fzSi8JM2McPyJQApHkX1Zk1HMMiTutomiXtGBFRYC8BS6B3kpFZrK7mrqTNjG5JwoDw4Eqkbx73LK5ea3HPDr",
  "key15": "5TPNcinACmRRtuF1tVitLhuEKBNTRKv2mUmqyQtbwdW43pW2YVYYfzG6on2NC7YmFY9DyyTdYvbQiCPwLCQQtGQH",
  "key16": "BUyaeEMHZ5vmsJU2BZRD7VyXRwHboqgSE2KjmVCrHVLUh4hJ65Gcig41yoTvrrsFzZUVRCY8aLPHrG118T1VF1H",
  "key17": "2dASQb2amsNpMKvNkuVWWPJXeoMzpwQgpya1zfkAL8iY1Vs1ENVj2vwBx5KyRAs7NrU4HcDVGYzo77KfVEnDvgsc",
  "key18": "BWHCLPA7q3yfaMJBDDWrB2g8spcpFiKxocTDDC3JZ2F6EQamo7KDqNzdoVjksMb8yMRvXrt9wXDh462dfjopV9P",
  "key19": "79mvpsNcW7adskQ57Bc9zPdFGbLwe522o8JQjgf48FzRqMhtVHWepNn1S2HmEEG7ttWPgsyoWLyvb8Tteypf9pH",
  "key20": "8mMBHL4Gi2gWdmj9yB6zsTSuxxvmCyuywmrfywp1DTB4xWx8jnT5zwxkM9x3cSmbMumJjLYFRVcQGyMoBFvfuhc",
  "key21": "5MqAfgq3z3wyour3hvuQdanj6BWnceMbxSYq5tdnKPBDwB2HcuGi77UtR6bSvyiH5n9vm4egokwectSVkCTAC17t",
  "key22": "2UBtBMYiB1xRifCUvzKNz2h99XFHYTpJBcUqcoZ8M2YmJU9Mvkd4f8nyLRuC6xi5mzfiQWnzYEah9kcBuDFv2jd8",
  "key23": "5ZURZ2V3CSWNFGacQRCPYNAsWBXqa6wJ64TPsHfujYyXf6nWvNVTYi9DCyicHNo72PRXH6PW6UGEesrMyVefjmbx",
  "key24": "54SaUKfN7PMNeZdCiGy4bjf6267k6yWifhYx5Pmy2mYDPZcbQCMM1bkFg3TQsjRoGMbsATFVBrNyL8bjuauX91xX",
  "key25": "3yh3AyibVDRdSCDijgxnHQN8y6dww41PP5aHgWRbNVor9X91M471XE8gGz4Tbh4UbwHM8aQuUHu4swX1AGEy7D7o",
  "key26": "3Rty4EqEmeEvE9xNbKR1kCVeetzawK7M9EbDa5G4xsqy4UyWDZsFKprY2XnQndMBKZZWHjwZDGbts1F43CsHv8t5",
  "key27": "4Syv1phjeSUBXcwJMk9TgvhHv6Wv8NJUQTbC8zuJgN495Gx4qsBv36akVhcgUr8msLmqLjL1PavL1ptEaQRhchXL",
  "key28": "4gdCeGEes889vLS9ohf9S3bkh1TWjbVCJyAQBq22jaLvEp9sX9NrsjvcrGpBB2Y7SD4xaxf4Vhv9hiLu19zGWtvf",
  "key29": "4tHT3md9Bhs11YTpdMFRh8mcnnkUBxLWo1k8xLoN7Ygo21RffGfgqWSev2MGSXNwrvCwqKHAjxJUVimYTtheYE2Q",
  "key30": "jJsRAcRjiipsAfvQeHiQhMojnQcyce9CybcJwEkbfdmbJvdQkqULbCH3Nr7ZmoWsY29f8TjMW5yYwBx4u1jFbbg",
  "key31": "4jHMpVRfrwWJWGqkFpXsPd9kgjKqKWNYz81YnbwvHdEHNJYDgub8HCEGWLxN9mW28ospN1zQTAXp5yAS3yQKdTHc",
  "key32": "3itrLcMeChCuKhNu1sQdZkbiFqKv6kPCskvxCx5hsc4MYyHJqsiYHFJqMuFVAwJntQ8dYrhnf1LKXfUAQsRiCLig",
  "key33": "2X9e7fAvozuYFTQ2ZV4PsKY62ytpzpKeaBr4cUDDQKRJVhZ21rJbhsUs8CLzMsg9qCcgnS5LUFRFdPg7Z6Hb2GRw"
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
