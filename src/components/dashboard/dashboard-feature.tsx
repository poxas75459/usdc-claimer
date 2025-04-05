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
    "42bEKvEovEyNFifLcuqfczsEyJJBvYkLwBmR1neSjT1SaXdgpd7x95rgmqQSVUfiKJSowcT9SdtWBxzkuNRNYKT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61DJiZLg1CgTa2QfJ9R4FgUVHvomn8GDdzMR69SG1r5oDbWdMgY2Lkyb7gx5NSueSWTbm378xYfmmMJTebkVqXrX",
  "key1": "4ZTwFKx43ibrzLeXo5rxX2bBt76NuXi3RRYHpfG6PbKash4NGR299a1puX3W5AA6fT4S1xnApNkWnmX8d6qh6Giv",
  "key2": "4Am8HpYXUQMEN1jSfXce5ZTBDftztqzMK7qQbtaHfL3b9uKcTzfs2mujo9zTqwDr4Mf5pEJ8MtbDGMiWZVVMdBQQ",
  "key3": "4dvH3p28MSYik5QEa9VvoNMNNTNYcYaELfbd1KAjqR1doiChSx1xxHTE2ktsGCEZTgBYkXT69UEkrsNHrrioUCXH",
  "key4": "MfKHJZwPJ1RTjKt49Y2zdptUWAcXVNgrNnyivze5dH8yPGUmjLhttgjkQkFc9Bm3gyuso4hQQpcJbMrfYqN4zZ1",
  "key5": "56BheBb2HofwTtSCqhrCVQQohQsDju36BBCbhWJfWJJxZj94WHro1acKtEwZbgEjTqKbYH6hLNNNHvb5xANcMV2J",
  "key6": "5wRaRob7F3qchcUL2UnvykUBWvvQkULZuRru5j6pekkfHMXTeunEis53ujdynNpxc3nZsGzUdjc8avuVaSgEGreT",
  "key7": "4Siu5JgNeEZ5dvatf8NAdF32LUg5tr5VXAJRKmQ8AepT3Sf5QWm7ZxqaYpgfaMFVF542Bk8ztyPdkapUcEHwwpyQ",
  "key8": "XWP7EuyERmRZ13CPWLcvzCDhYq8ZS968cffvY4BMaQ62GSQg2LQy3crFpPo9TkqkRjE2Vy9JfwR6dvv5Ea1TonQ",
  "key9": "2S5WdxbAFRtJ9itnMJoAiTzk3rgu9sa12vG5PdjQhxHPDLzMUX5hz1iLkMDA1vh7ShfzDpsCSfTeeGNPtKmC7Pyf",
  "key10": "5HESDrxcqWySjYVLQGDyKMvh5Z1YzYCwoTjUxntXTYFwu3kg7yQyKqLJzun2wHWTHS66tvvjvfzgmecvymZ4EQvC",
  "key11": "v2rNxxSU5QskDnmvLF1gho7zpVonVbnmmeqPJLE89N3Eu8YAQ55Fj9SGYqkQ7Js9DHcER6WsjHSH9gfpYxFeMNs",
  "key12": "3PZwGW3JrSvrtEyjWjic1npV4ipJui7B2QX8gV22QBhps3rfSUAgzoPLNsVAXy7uV8KAurCZGoTgFLSRQ6A89YFh",
  "key13": "5FcaAjj7zMMuDVXu6cyiBg1hKP84PeUJ2EybYznYMUND69GNoMTJinwopebLgQchokzVRCmpDuaVJJmKH4hbHtww",
  "key14": "5T8fTyCqwg26wavkBQkt1sa3gSBtVuJ6nahtT8swEsRQW4FQpXs6bn6DjU3zv9Af6qCcfwnbC8HBpCMvXzDAGiQ7",
  "key15": "4LfnSbpaGJ2cZs9SWZtB7FD2paHjiBypWnJuyS15B5nRudiMssworrtMSBv9mDTKrjc8kGqCFvC3ZMLy8kcdfYgb",
  "key16": "4A8MwLjHHnRR4LcasVrDTwtHfykos9zPNHfPc78YCzk5ciCbZxyyecoLuuhmfuALHxpCuhRosdoZbA3V2MNZ6LXC",
  "key17": "39vty457awTaWJHSNsKqF9qiP4hKZL2DueMtriEsGkoZv87bqji38gEm5zv52TGRVTtq8G84SZp5hf7iWAmeVMRm",
  "key18": "3NxBK7bQ3Nx2Jyoq3rQVpDfWLZHASMy78GS8L2XMjrGRqFzNZHx7TqTkXQtNPEkKBppK3qQGomxwfbCzYik3r239",
  "key19": "3XJ6G2qNNcWscnGk4a6RbpKVQBP1uDHqFR5SfmMaj2WUZmreYeKX98i1uvbvkWD2QbdEBAxMDT6RAc2nV3Rm9NEn",
  "key20": "2NXZq3AgNASeMn3CGpomYg7GYKqqc4UsCRftkwJgYp1hsj6tTAVKVZ917sQmiAE5tEbciJLG6G8HtB2g3MdUjF9D",
  "key21": "xXCPeQBtcJwjCB6Djzqweaadjh2aoHrMybVa6NBEcsmbG5pQp1dkLWzgqGHreXX8W23i4SfJyPzw3hkq9vFaX3T",
  "key22": "3M5JXSxxnPUqWmGAaZVdWvsxdQ5CkWH8r99swNmnuyUh8STvfEF74Seesnet5QqkC4kXvCqF1EkHaTATKAeDwSgP",
  "key23": "2q9H56yHRbdkc5fdpZmzYTVxUkewZyB1awBNZAbzwcvzn3GnpVejWpQrmiALbQgUYSy7Vyc6bjL87FMP7iMgBgux",
  "key24": "4XcCqX5Fq6jGQTVqDeCmskyKdBPSm9Q3EqLMcfDKijmtW6AXLKSP5Z48AseJTZSGPLWevaUajnDmzUg7GF8bcRzU",
  "key25": "2Kk2wfyGqb1GqhVeCBHiBkxCwj1nTUD6KoihHCn67kS4jDfRSQzCnhALbW7xcx79raPTvyyBXbo5Jvgs2wq99EC",
  "key26": "5YtkkZoA8ciJxzCS1sEHX4mtDRKsA1f3TYtJbBi9Dkh32qWzcJd9WhquAHjr5D21GaYSfcC18d4DSnZnVxR1DnXm",
  "key27": "3jNV8kVBudRiwJmWrhN1aDZpr3HWJiBG25TbcBEjtJScM3xNwyALz1S94UBuCMngVwunPKM8EvfefRdTcL668eDL",
  "key28": "4YK1P3kWExpyLqvJCkEhfZDH3gPUYdcAb9YHv8dGCDKh36C22cQ4dNChgjMPcMF31GgkvJi75krCVLHQ3PaMmKtS",
  "key29": "5isC35kX1zUhLPkqqSRFvvWyKDeAKaYaSnw6jDQeC3rQfXcKVMZfUTXut3Rd7ny8iKDMnZLikZ2ZXv8nLca3oUm4",
  "key30": "5fen9HDBC2Dq7DyqKchQLY4NAW1fuvz9hykUsox6jV9Fhj5BMoqtYJe5FJyPG835cZxUbNTVLBVb5JgDTULzNxc9",
  "key31": "5foTcDKJmHXbFAH8EM1VwnGwwQf7CKnBCvLjmxrQdAmsobLnqBhTbfDfwQ6ejje6CNgmurvsydNCF8AcSAjPraRc",
  "key32": "4CnFGYpyXuWiTJarYBc77LDZZwz1iLYEQRrjQiayqPkmRBdebYbVYBVmaVVnkKPVBxsJJCeSiJyVczYtBPAJWz77",
  "key33": "2h56yBo3paJ1Uy5rnac4BG7PoxrmHGLfqrbA1AeuEno5XgWrBb9ZRVjDoMctm5Vqs1ZnS9wLxhvxERMsEcV65BAK",
  "key34": "3tEv29LAyaJfnb1PLJvcfqnSXuzMqUFjt4ibKkxFjg9fHsceD6fQvizTnxVzjGFYs7ZirfkLSAB68nCAqszG9Dg6",
  "key35": "3GH7FNj16Sa4jRyj9NxSeXaumDmToPjrGQhQoPhoifknEBQ3tegnxGtsXpnjVzsaxKmZ39UUCX5APS3dhEDnYuLP",
  "key36": "2qF8FJM6ndxCQScUT4Pt1U55wHKFnfCZZR8QbDTsWP3GN2ebHeaBS7E7DhidcyTxqNs8mHF3CZRpUVNddM4Z2qUE",
  "key37": "47QM1EcEVZjyztcMNgSXLmJGeDruzHTV7thQxPSeNAYQWgRHC5EU1H1mTd9hxUpPjggBKMcb6VVAhv4D6S6dCY91",
  "key38": "53G7pJpgGLJwqPSu73v6gmLxLx6wQFyhgRWaeAvkFYWhLC3TBBDkyZeXT6njyTkQ1YM7n7rgycDncCFRdoow6GS4",
  "key39": "3Xzy7ziuG6X3cFbQgUuKso4HWAnkaWSGEUhRyMpSNewUE1DR7LAJReD2YaCngcmhLjJB2ZDPPH4Nzvv5C335VFFG",
  "key40": "26nV1VDk6Tzd2NR1cngQ6UHApWpvtjb8j1qohcsVDXFYBH8nQVquDux4qi94DH65nmFje7rrNDwJY95vPwC8p88D",
  "key41": "4mAQkeS9WzUxZG5Pr9HTkux8bcMTjeAjL3qs2svgV6xKfeH5Pqwf1zWSEWJGqZ5qha4dq7pw2KyBt5ZWgTmfHrtY",
  "key42": "2CruWZSVRpecHWa4bRuhR8sWDF29HtFi5KcZBkr32mmrHPz7vqHsNW4JhjA8PaFvMLBdu4DvwkXK8W9tY4S4iq64"
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
