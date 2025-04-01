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
    "3uw3bR2Hvdbj92BojR8veL8W2Fw9NQvQa7wt3MgpHMwigTZbxEKcy8AfqU65VkXob3SHPVZnRRA8iZSWhK9nEcA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43t3PgdP8XrhiNAxZWcfJ4cjV7zk5M86RzECAHiR8dqTVtdMHHvVzBojSKb8FYqQ7CV9uxLhgV1pD3x3ZJnKqDCV",
  "key1": "38ZvMrzzgAUHhGWS7BfJBsJ6xSKZnrbn6S9xGmpbAAoZVrSNg6ckjF6Nv8SKLvQVjuw5afdJ2DJXh82qsK6ANFa",
  "key2": "2QfzCvQYJx3372EYSffpfmJocbYCEmRGPzd8g7XCjx7BbJq8vbiwkrGkCSY2qwN1yUNnDbo2rzHnYqjCZM885Jxk",
  "key3": "5pGn6occ15tM3g2LvqyAJe7poKo5rLwX2f3sDL6DbAifqpdLUvwwWhbC5u249aXy5JGZ19ovaHrt86AhBGnuuVhP",
  "key4": "KkvVQPL4tSwxFseCfgFdwyUSk3ZRLCy8mWq3sqCeUfTARMC12s2b8VBTPcgXv64jiRvCRonfipbFGziXsazbdmE",
  "key5": "3k6uSWxogAWZGWVosRzhiepb2fnhU6EPPgKWGepbjSzdPTMkWByTzCWd7KWVmY5p7yMHgL1ESJ4vfS3ghvp8bpqx",
  "key6": "273atnaJp7BKb9ze7qzQTF4Az9YtdrDGqoiL2a6o3vGzGBswYue2kRwwr4fM7dm7J4q3ScR1HxFVyYs7DBtzKdJT",
  "key7": "5vdJ1WgQeHjUkD4ZwX6ZKZ3ocKvb8iiHFyZj3uX7QDeNHRqySZSPzEZMeP19T8ichd9CAGj1umLF2gCE7tdxxwUm",
  "key8": "4bJ7BP7jUwRz1spiTNaJKycFSeM2QV9pzCvjUDxvKdJ5CZWuVUSs9AezVHqRyb98z8jnck4opugbf6X8o73gkUL",
  "key9": "3ZwfCnzp13cUMUU4SFEykXTEqUmAPRmfJSwW8EuemxTSRCqLxzBJZ6p1hRxkFWPiDqkQjAm5htfRgr4wfGR3eMfg",
  "key10": "3cQHJGq5dNAe4Jyd5YEDcNRAUAa4k1G9jpcvL4YC4VHeujVm5u7r75Vot4NSyUVG1BMgLo6NiwSVZCXammzrRgk5",
  "key11": "4biSgzgnX8F3qPJLfEsUHZBHZWx9S6C7aaczTU7qsi9rcFrtp6dht15j2RLJytr88GW1UJmcsUNEbUz7ydiJiTGX",
  "key12": "5nfWNSvSCbNnQwH5HUxgWgKynCoWo39yw5RHNEX1uBu9AYrcCGuH61sbgMht9JywzK98eAPoaKMVwSTW3ZZkHVWw",
  "key13": "25YxLbskgso6JgMWJF8L3s5xyPL5XASBWb1mf34q8fwsGQ5xnf77yT3X1S6wkXepFDTAYRxh83QNx11aTCKBBESW",
  "key14": "g2wQpWMGZKGx4cpfc1f5kLF3Y4Mt6oDRzQahs7i91FnghvSUdqfgV6uPCiyqm2JcaorB7xkNPnpj1ouQoNcekao",
  "key15": "4oJCEewvLEwftVaCvFL5btWoYpM2eewVAmjRGhHHExUPQBXXqGDNh2NWqw29JrkciPePtWPEutJGBDtWKwpRagYQ",
  "key16": "5kKd6AcUGF1byb4dZRKwqrBjr7mcbCyjkiy2oMZ7PvefwNjVKhJ78aiJ7ZTzhJLR5iGmFVs3JRAjiTKHQN3WHWHz",
  "key17": "2UyU9w7e4GbJd2FAzqDCQosAis6CpLMGU9iddJmZHe7uc6GJyJdFLPtCu961P4mNWSmnr22R5hPp7dyWcrXA9LfY",
  "key18": "CSrfNJFLeStretmUM2cUosSRDWv22K2VHWe2ZcPrpU7e4qYNCFsTPD1KDvGc1yG68TsZhibPfsiYUDGDXXndS89",
  "key19": "3ErWzTtLyMtPZKUA7xfdBtPez2xNmz2jBZopJbhqFfby8wvnCyTacBrn56SWU4CM5y788WpSPaHBRCfK5wu8nyZc",
  "key20": "CouKwiQGNNrUHkPYrKJ2ccDBYkRxjB6X2aVdXFpbajmLBTeDMBEDXRRZHZSCNYYHcfjcQ4GKp9VCW6YWZNjQwJJ",
  "key21": "7z4gmzTDBAUBcWw7E3Q93X1wWWq9TwpJs9HcyYbgTaCuzbJ8cJKe2dV7WCpPtDgGfP7c5oQ6HoYwHg6GR4f52r3",
  "key22": "2G465LUFAquJg8LW9iD6GfR5SMjVLZQ2xP6t7Ra6dhJL3KVW5GqMZp6PtydqhiHc4Tup4J9gPRAiKLegp5WBfhvY",
  "key23": "25pk4qe9KBoCR77fuizZgHsctY936fFFvnawUMQDCCkMRmy21zGgskuzRkWNmM5oEBPPomH6zJxUgCkZ3hACyTkG",
  "key24": "2UbgXetvDxRNjH18fuxPXcPu4P2vQ9ikygPgVKVqi1V6dDV4KQsC8AcWC1aLHemwGvd4ZiYrMbufk9whNTgmzxHc",
  "key25": "5nHQn7mYyRCf8awnZbSBmADMyBbNCzCNZF9aN8823y7Hm2MnBmnNzgRLoreD62W2ZMT4WjVcTx7TeyEkEw8mr3YQ",
  "key26": "wqoFJGLNcpTqMgppZxV8wZV2F4DMWXVb2CgfaA4ZvvXF1kXQgSqFLQUKtsRtdUKCCo5rgpBs7c9GYrssHE6iXfQ",
  "key27": "38J3kJ7E1NmjbkreoZEbEfZE6ngNxDeGRQnbmmF4LayjeLQNQi3uEWcY7Da6uwyh39ZnZDfusYK5VWnumoR5dy5R",
  "key28": "5E95BguFeSP63ZpEy2gMQyeknpfQaDLEzqGiBBKBsqybinXkbW22y265hMJ1kyurCtPR114Z5wQqnyTeBh11YHqv",
  "key29": "3GBkifvcmtc5FiSe2emVpBcNZphNskD3SpbbtjxZG8FvjoDCCyKb21e9SzA1K41wtgSdwcBqtwji2e8xEYCLsCSQ",
  "key30": "3DqF3VMRn9ww48Zht1zda7Q6aDFz4bekgQr6nvLabZzSocVHd7WQiGZ5qc5i2dwNB3wRHTfCwz1qRBTLngXEiouH",
  "key31": "5DPicsD2C6rcbQd8AU5xS38XTxhZKua3ZGBHzjfRqBb56ddfxCWyqTtF4mzvkPqAnXUzXZo4VRcYkRHw4kpAo4zU",
  "key32": "2yvYQtTWSTLNXhZigirbg8bKR1KUC9kL7wCnjri6bjRmk6N6hpWLoKVNjbmsdhDUAJG5BNEq1pQ8a49ZHwT9Ph2G",
  "key33": "4PfvCei3U9q5WEXeZBpXrzDtHVdkerFvbTPr9Kv6syPakFLswWBEPfoeRLoV5bh6o3r4PFTuSPaQqZP8AWjhi7CX",
  "key34": "4HqFMqcLwzcc62QrQ6nUv2B92bzFsw3EGoGWdAg3JhzKXS1sH7unPTqYXvwXbzJDiE443NS28kn2aeBA6Jq99QM6",
  "key35": "4eEse19bAMw8TqtAu95Dx6GGsKGY23VuiUwZb8jzPpPPqFC2JZYsHiLriq2HqMdQqe6zToMko1iH3gAwrewmaFYf",
  "key36": "669a8Rr47X8xtQSJDbzZtLG4bFHPoaeTLuc1DEaETaxaa96eU65iC7sAUGMMLmbtcaVSY8yyKPiARwTX93UJMyJP",
  "key37": "G2pisdEU6khfNr5NGCbbcyhNyrcHh4oL9Y4MhXMPw18CtsicMUqoU92MKHUuDnH4NV82oaKmhpkaAqiVe5DdnB1",
  "key38": "2Uz8NrpfEbBKyqQBpEA6x7yPBNJuntNfAsLZ1QEJHK1UNezqxqtbbQ4cDvxF35DH5q7R5M6SPmKH1rYQJLTu7EhH",
  "key39": "4REHuUBnDdoPrdHRJ6LsAtZMEjHPKh8PS9mNLY44jxFeswkDrr9PcJR3w2YuMYBciT2uL4oPDsUj6roqmzpTYh5p",
  "key40": "2y7jdzsT7MsHfC2DaMz4otwa74e6VeUzhaipvbcJ9A5VAhYrqoKFzBMSY9UcqdisLyXkn6tgQFF2w5C32FA2JgyV",
  "key41": "GmXPczmLqyYiGCahNEsV5gUwHT57BGDR7AU1S7tzywLRQUZEF9MgTTeA7Wz8QDzaTXzUxGm2a1m36ikRxef8nF9",
  "key42": "2eggtoVnntzpvAMmKRiTrKguwd7F9SeiLnn7zTZK4oSSpw9FJjTqYgEdCePaVzwhPJf5FcpLCBk23cF85bTuqrkr",
  "key43": "35xz2ixC5CdBmQtyDMqHmvuoT4tkBt5ZQSRegD248FEaYvo7Ch3UwXtu9S7pZvDCbnoFmtc92cHbjjmaXRU24BWT",
  "key44": "4jPqgwbjJeMrnYAujH2JHLeRKXjrg3ik623UzoqSthJbUnrbgvQGZdiSrWx1y48NATvdCTUMTWqWPmED2Hgm8jhf"
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
