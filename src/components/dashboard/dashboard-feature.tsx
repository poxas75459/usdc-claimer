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
    "3ymLsT3AjVBh8z7y2msR5aEGB96tyrUoBMVRKuF8TFgc5oNyW1qs27yh869aSwQNeVZXz2vosmyWerWDfCdJbkAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8uER7NwfefeUBrS6i9tbhCD8bTMXBue2JUwBAUEhiMR4ukZFXAxQXB9hkHM5wzHDbzHdBRr9fMDD9iX9xuAe8fV",
  "key1": "5wP1nBd5gREuFARqnVny2wrKZujGHCMktoRmRNTnfQqeetKDbLE49ZF96vH7EBVNX4nxudZBe165Ji5QqeML9wJ6",
  "key2": "5wFJrxRrq6cfDsT3DpyPRffXaxKiW4vBSuWCEHJFxGwS86TBEerfZ2nfTLJjV4V8Q9uE6aef2yrKNU2inw8bzYbH",
  "key3": "3cRo1GwAvqq2hQ2ePp8AiV7oSArg7apn1bNoy6j2h9u11QjLDMkq68kLp5PUCW1ZrmuGmfGMek86qVsd8awCn69s",
  "key4": "3aR6doLBju7fA1Z7mCvaybERteNRapioS7Jj91sPvQ51t3MRWzzuR31ADKZ65GpyGXHxRbzJCMzCqag6f2kHy3Z",
  "key5": "5MJuUu15hEyfvTvutSyTep763qe8paMCXPZXn8iU2qThm4bv8R15diXBowsQ6ssShL8pbszwcx9aKG5UEnFrKLxy",
  "key6": "5dd73jCtRuJCcKU7WqMUGWyfqHNAkZPRh1uUNwUAKxq7n12MF4SC8dNGBwbNjg2h2xLfAXzaHiQBhuTRkJW3okx7",
  "key7": "4AJEKBEcnGnFeD68imeVKYe1rHy7haKxd7mxFDhQv8kyyCvAuox4z7Jc9bhrnmYyyrmbnsPgD1HQB7gAKbffPtAS",
  "key8": "MsuWJxdsV7YCzPP8dMJQWyxUENApZhnVwF9nqq4zJc38Ywz15RcDobASTeyDxghUoA4N7EhgF2v918NGe4amf4G",
  "key9": "2pDHaKk8e7erYUEpGmkHGq9YZZMcWci7RDSb2yBC1mwGhax9awG4X3z5mWrYpiEHtoRwNx2qDYyZAMDfUspKk3UH",
  "key10": "8F7YyX67dcuriZFuh6MZrTg966YybimhUH3TKNukh1duc19H6d8uNjJxzUG2CHVJ22GN3XAZrjsyGwxpR53Ed5R",
  "key11": "5psaALS89S7uNBhncZvFuGCPmASZrb4u6yWjNxWVXTwU6ePse4ASitMHozE3zx7w2RvnVKtqUzLMqYcceTX4zdPd",
  "key12": "5o2wGsziiiFwK5igpFp8QCtuA4cZ9FNwCTjQiy6ANYUF66LrV5Gyxr9gxfqBSeEMoxiVWkCoxUPXWB878wy7sRKp",
  "key13": "24EUfkurfcy2z8YQH4zQBRdEXSZaw1uTR3qJPkFtNG4p2WGwtCBMiXrNsmhU69B8KZoKHud5VR4UPd1S1XQ17tew",
  "key14": "yWN6k6cBncZxbEwikvwSy3iKvsZrTsiLay2Hd98EqKZbp6hXDednY8omTnLaoyRA9ESH24KF3gC9BUfMbjL9Jxa",
  "key15": "5Jgok48gdMztS84ifrbtWMshUtiXtDBregEVK1r9UScDxoaGA6ANpeNV9WcmRVT58tt6S2RjhV3huAcj7kRQMChW",
  "key16": "3Ro4K9awV7NacnycmBUpA94scbihq8RWBjr8L3YSV8k3oaYJMEec3Pfca3ZRBhrNErYmaQmaghih3a8DDXMQ2MgS",
  "key17": "4LkLsLx5XaKdH6jUvj8uZ3ry4DjQrZPkLZvevxFMq5zaH2NWaoyKQc9znZSxfogXBX3DskcqnHcLNbNhB62QnYJe",
  "key18": "2xSG78br5LmvWZGcQaHFkuecrFqc9DQKrUBPQEJnto8Nn1DSAFXNLuFectQovq7zsVymEXf3TKwCh2aHfWkTAgyJ",
  "key19": "5CA6V9uTvsjvey6viovpBsXtFZQyzLSBp75FY9z2n2SbBxKwdP7a71EmzuPSqHVQpNkSNANtsAuA1gABsUoPSGYP",
  "key20": "4QifPU4R7P5bMyCHvib8oP4cd1hh3EhN7o9KVpWDaJzaHkBwcNCByyjxBFi4d1Ev4EoZs7UCAGxGUEQMEaJhHRRK",
  "key21": "4Eidikb7Az889xVxYU7Bnu85GTtBK2nfw6PSU1MiiMY6bK8jeNzLohjJ91zyiMS3wC8x3LW6kmFGdJkmetH9BcZ2",
  "key22": "3dvXFCre1VFSkMBPe9vqMYg4D2PYXcdp1LhrMjSEoCun6vtLj3wWe4CACqdAFFYvFNvuuvAPGCiGdhthGaFByd2Y",
  "key23": "5nYTnKk545rz4WiW3meVcRfbEnDUmjxFKrnDJZtCWp4MYK9ko6juUBsdT4TYZ1RBoVcw6STfwYLLhBTQYTS1CoNc",
  "key24": "5hRCWD7q2G2M6GaTrgK5JfNXKWtdBtrx2Z7hEPPJ4zckbAmLoGRb2rvYBKLek46BC46YUAyB5z51zrB2vvpfwQ1g",
  "key25": "491ZW4aYwo45XkYk6hYrwxPL7e8mGoVDJkc15KAL56Bpid4g5YBNohdFJteX5t4XvRMVAFiFPuPHDrw9h2S2Tv9W",
  "key26": "3me2pqAU1e61849dnKJVw1fkr9c9r9mew1iqwBv82YpkGVfZh2SPMYETLD29YLeYZ7VjUjWGf7B8GvUxhqnyetCf",
  "key27": "2UH8jaYAsyfLpCY3G5RvKuWtmwRnXXQWN6jjVXZxeUZ2r4jURMQpiGvLLQBvWGXU9v8hgSJWu6KMJVWtSaWMAthH",
  "key28": "rqKt1MLpDmKKYvDrfjkYPUoX9h332LUfw1EHDN6BsSKa4MCmf3wpT97zmt4SsxeM8sa9zfYMnEn7DProZnzgPeB",
  "key29": "5bP6Nb2syfbxvjDuqLnHHtdcPjQWvMXeZKzML7bRfvZUJsXppvPRZD9U3U7TqEQgiGCT3X9Q54N99av8efKU9gha",
  "key30": "47hRsrAeSA2pdNtgpZie1nvTycgjP5rWqnMYEWerREPubtDq8NBzwFHZ542JEmyygMnQqBjqhg4JJsohrm5LB5rD",
  "key31": "3QGNoZRwRHxDtHyyCu4rZ6p9bkP5pnuDKmdnTeQG7gT98obJn7F52Vp8dhjKtPaS1KMdvZr5yLvo3oY524zCkKBg",
  "key32": "3ayFLoy1engvddxrS15rmR6U5uNEj93xBey398ML7Ng8T3pK4fgcbr4n9GqPpZq76QbNsH6DPibkSftDtNXnCcxx",
  "key33": "5SwJ2r5kpSUyXmntRQQjBnYLYrpGvLRTdcmm5C9B4WRxyBeoLALzdX6jXsL2iPwfj9QT3rnt8RvR7F1tyC2y4vTm",
  "key34": "29XDezMWBRBKehRuwxVw68dhQGjNusqUE2modRCtvKX7Ug1EwcCRaiciDAUt9tDXkqnna9yoVFpH6VgKbmVBiTxF",
  "key35": "5C7fiQGr7NUFAKAf2usiQmszCvTX3hKHKwupRQCNktBDL59L8retVEQtzrCyTgv8enwdgzTtAYdWQDfRhmM6yJg9",
  "key36": "3vLEwrZ2HKueQjxEuh3eWZrqihpgdnx9iRE9qtSZbEezwBDdHwzAevUeB27RSmUQaSVKiojTapfmWbTW2eq9btWf",
  "key37": "3y4jq65JfVrNaHPwVTX7BfE9anAfiJGh91MLhiTxwwsDhbvWZGUycY55oCHUDhCd4HGY1fJU8v9cihwYXNJ4Peux",
  "key38": "3GryjhiVigsDNBpCQCjAmZbqRWuVWjtsJuTKvBeCAHquJXFb1TNe5f8Q8wDVcp9jm61u1kCE6rom8CaNo6fevzwd",
  "key39": "4yMvFGNdmAVo9MuYR1RBjjrg47ssavjfF8CrySq3x2Fcu4EZpz7ZhrpTmAMRd7S9p1c8CWaymrE2LKnvobh5Gka3",
  "key40": "5g9ahBT3h7Ugzs6YttwhcaMyBGeP1W4NBfY8UVNcPx3sPbq17SQa9PZxg3JmhwMLZFyUQwbSExG17GNCQH3T4wVb"
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
