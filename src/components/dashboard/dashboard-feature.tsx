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
    "2a4dWeo598XCSy9qAD9j4oDvqizGgMvuZyNUmjy9FUSmavmMjJ1mnZYaXtUL5oN1J7Ar4vED3peSnasQ4u8zouUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "285SGkf4uG8b9nN7BY7qZVzWBgKRbehF8fixdbA1S4UrJiApeoVP8mezNfNDmvUqkbYaAmZh4x36KhpptSwYZyR1",
  "key1": "gnmMzkKPFuoR8zW71dsAXw6tuvca5KoDeHGsaSjs51ZiRGdTSgXkU1NXkrr9vi3Xhgf3CkVgVSuzbSR7Ae41AW9",
  "key2": "3oym43eu4RNGv4hwqPyujskWtpchCwab3MbJ6S3Ue9MZww6V7tn4M8VtPSd4TqDEtti45aiPXfSPvPELWCXbpL4A",
  "key3": "5Pvug5gmVCHUG8av4eV7Rnved9fQ3868fDjGcYxnnHZCnrKB69uwr8u2L8qHuFF7UgMivvLGBCD9D5xq8ABoWEWZ",
  "key4": "4k3V4nXirTG3fPwKn6hL7JG8GdqE3M2M8BXSnqBwjYRbsu5MU8HtjnFxQkPq7fMWw3XrzFr7tgnKyFVAffkXcDz7",
  "key5": "2QiGrnp6wvYisV8BiJX5N75vHLibQHPXNdfn3Gt8q47zw6drSfn7pqHUdQEptJpcYDAkahpZ68rjWFc4nShujaEj",
  "key6": "2Fv1sSmevSK8JYqvSMrRf86gXjMpP5Yw8pbJx9my1uDqwAfpk8xShkYhSJzt1NF4KGTtM7fmLBqzKLpygJ2qQzAZ",
  "key7": "4GjxEfGfGVco58NnCFKgPSh6UJJPkDEEPX7WPZJ6fEPEkkPExMPG1hUanRqioNGhDxuAHCHsuYXnGCYXB1yUGZVB",
  "key8": "3CJeVBM26GNRoeDuVmPVoRmFFhBgvb1NE3U2LSQdVcxcsVfw9Tx9szRTXoWNBxEuFqhWMgUnHD7NwSbpFek8jfks",
  "key9": "2egKR19A8PGbTvtXvtkR6WpukB7fRYC5hwatxLFu6enB66RAQznSgeCu5ec3Qn6YGxkk8PFdJPLqi1sgBzA134k8",
  "key10": "3QbULyeutE1UpgmvkkKUuTH3Cx3jjMFdCuD6dpu7WbfmNXxaV68awgnVe3otUJcmmXpKbLiaFSdzXL3MQNSkcHpm",
  "key11": "23cGjX7tGe2QowyNAnXZ4GQCT8riLczPS1Se9ubBkrAoM4RQ1gZFowcDPY2Ex6d9QVJtqGknnrK1Du1QPV6D4Tc6",
  "key12": "4PG2vtRTpeV6FJHx583PJc1XMpSwuNwdYoidQvGuMwUnLE4qLcHZRNqeWeNj2ZTbhJZ5g3tSoKDfXirWKu7C3mxS",
  "key13": "4BqahsbZm2tiDwxHGMrTZBsgPTsYfaF4RRVgccwcJ3yyGu2G6jDYkognwnA1ERpTsKQQYkcystkNEtB1yYGr9k54",
  "key14": "5K44TNVtiaYY1Dh2kA26EXEGJxD2H7SnfpFshd4whAwVJCZgGWqUtfgZCENvco4azTk7KXP8sK9XtsynHSvvwuwm",
  "key15": "Q17tTjtcnkp818DcbqZqzhX52V26SnZKrN3nnex8vD9gBehYsCddzKUkickMpJhiZhbESJYoirXpzW23zJsypa2",
  "key16": "3Fmt8RW1ncnowSTFo1juVzbcZYFXWvyFeD5Xyy5brcrDNE9Br7kfwqj9y4v2PEppa48K99p5A79FpQsxNaejkuXH",
  "key17": "4AuEs8ZQFncb4Fy4y3xjDyGcXoJ4oN6xLAsmpqKPcJs93dZ69M22eQGsXQCq5SwQZ4kmCTVnAMngvsz6eqZBKcug",
  "key18": "44LSo9idseMrksc33tySsGGHTfngMBJZUKmy6VUazF93YtvvNGscGH2RvSodVPLYsz3Yd4FAYmnZYTr2KrekzUM4",
  "key19": "3j8i4ViqCEKYuZyVvDywkFtp3ru31jWhoRhasinaLekwhb12CKXSWD4MF6kVeirJJE6ZTVK5zXTFrfbpdaGskSq6",
  "key20": "2opSLBsTiDQa3Zx2ZVWEDDRHyGsJgL7xjWPxDHb2B4J6i87cPogFAZpd8C3HShYtspGBTvraprnorp6dknwb8Q6k",
  "key21": "uYHwDkp6NhVHyZMkn66zMEWpaTEzZuvFdriQnA3q82EBnb51FMmZ4ApmNLd34o1ZHWZ8bJdTN8CaJ2mDzYcGqBp",
  "key22": "uX9jJUaQrmnH85P8R7opxHiLGr7WTuhXpvXGfjX1Yn2nJCUsWb655kxxWFWaPGTP5Yndo7e9Y1f2qg4pZbGbVbs",
  "key23": "2BUMNd4ENH9KrtRh8rotqbNxMAFCEDzcrU1YnUcnsQFLJwhMBoUu327tiS5TjGJy26c8BT1CcZCbjb1jcWx9n6n9",
  "key24": "2XP2ihiZqHBuJCyYLRSW9uBS8WkSzLu2KgUp6RaLp4vfhCnW92wmgu2sNSLAbXXYBWZxibV6Dc1oViocq2euXhWg",
  "key25": "KzCg5yVVFUB4bEmfJ3TfcYTbtYcage35GXpPVQYCbyDFJj24Pztz6kiXzCAqXJwoHP5qvgsD1bJmiZ7YQLSJJSM",
  "key26": "2qQz58UDiRzFiCvRyoUinYfsYFAUbF11NQuGZc74PskyYvkLQd1ZSUEkt82HpsMyLvaka7khYonwBgx1V9vqUqVe",
  "key27": "MNyfYZm3yC1tkTRaRM325Pb4iBQrvNzJgZPnzekFQGsbqKzFuAUbUcR2efzpsXPZy2sBEBzQsTLNJutZEBx4RB5",
  "key28": "3WTxXHvzQReM5Xjbom8iQM8ibRpsbJUtzy7QYSb1MHYCX89FzBQUBoWg1i1we2n5iWa687XtLE8g51C2YFwEUnMX",
  "key29": "5mAjPE5YMESh23T5JLmePyaUcu8ENUqih78M4LshZ5a9kuK1dpHRFv6mcQSEfPZtEvNadzxtxGdEJARebV1e2GZJ",
  "key30": "5TzBMmBsicBZYqwYbdmwVAJ9M5rkWnA4BCE54Ps3SsTTD9kTp7extbi4PToksr2FjL958Ab3FMKoJUZsWYVDywQP",
  "key31": "SyC1JCTtJNYC7UxGioEGkNLwKPk6ihwz9R6N3tgAkKLCFKNxQrZ7o9KEB936VjfCFWzLqnArdsZ5Wgbo2GVw98X",
  "key32": "JM1vkFLWi3GRgneXSRuKVbWpsZaUwEk6x5PDf4YpkB4HrYFhh4jrZuohE8kS4W1LtNgcgTuxgdUavU8NGuT59Rk",
  "key33": "65uQeQ6aMWWK5FkLDKuubM8XUc6tBWhCcNYQZrrpp99UBv9fxp5tGy4rv3MLjnb14Ezq97TSYHpbSitqpM9Ppx5J",
  "key34": "2Sp8PrkA1N5hea5Hkm8onLBSQxCGQYW7Z4zYpbRfvWv2k45fQ23ha3nCCHGY3GzDfJjDebk1Q6iYzJaCvFWYaKHP",
  "key35": "5RpaBnzoxW5xYeRGZPpV9WiuPuwYt6XeXDp33dHSgvHDZGUQ4FLghZnNTapHeXjJ2GP59ssLHAJhKgZV9VNPv7Ce",
  "key36": "npj4iebzCV7891NHmvaafStYdCncKNzq9K8JGhfPKY2W2JEFq9Yg28x3U9e7cRzkQBMgFvBAyrf2ydWHtJBx7Pe",
  "key37": "5NCx3NudcHMnat2z28CtcHehu3onYfgMsE1mxYckHy6zeVwffxRZBia7K53BNQhWL8q9R7DbembLsxfYLmdpEYr5",
  "key38": "3XijLBBAD61ktZUKh8ea2Z29p2iFendyhii1H8tGQMqFQ5KdG5SEJ8rNicSkxu6XdsJe6wM8Kp2QjmfQ9Y9UbXDt",
  "key39": "34yw7Jz8fvY5cYiPEx68c7kdhPeDF7ZamBRg4tksEBida2BsymbbTSnLaYiypVUvXocbGXfMXEz2MTTjvbVoVBr"
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
