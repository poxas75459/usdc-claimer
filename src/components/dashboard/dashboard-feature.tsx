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
    "4YKurngqTWpNWVUS99TwPbYJYo1KqczufehHAehV6gPBbnapx8wprreswnYNtoahWWFp1VyGdcPLY4VaAmVujYGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CdXQhr5D5CEWDFxuvsZpVQZWpwqL39HumNLyecyzPiBctv2re5naCCG5oYADsij83PA1o5wXRuSkhEu2XraqboZ",
  "key1": "5PapQRjba2XnLhL3PY2qouijVLiKQ1W5RbZKgPpsMN84M9hXNd7vRSr5Yt1YwypiSCJoCxVqXUiBMtJ8tr5Xvs4a",
  "key2": "5C73rZVi6JLVADCW2F9VoCktL6gNKCyJaQdpY885NJPoe9Uq5WF1rDmKz6hGWTgdbD9mVnGfY81R6Nqgppc16FFi",
  "key3": "nxbXm6qtJUpRUGVdXXp718ys1CYmUw5riHLvjJcGXG6pbCStxLiAofVcanC2MDqz6ug9zyK2WKcAf3Zdexkawns",
  "key4": "45eEmNkDJy23KDiUEJwUsyQrPZCCZRoLtKFaqNYxi1zDQZgCxcvEq2RCnfVGkh4ZaLBRk1A3pvVtgXamPeUzxNp3",
  "key5": "3vfbwyoQ9M88u69ixP6AshyCVQgJMXFuSL6V47KKuFMfjfectHyJgZWVe5yo8PV39V7dq6egape1qmJvJWdQWgz9",
  "key6": "24JJ69NWQNZPrKRrXJWR1CJ19nFWkKepHaZAdUcvqRYMEvJ2svSkssZ7uxkEAdmTywAP9HrBKFKLtuSWrnFBi9cM",
  "key7": "55qGrKjXW5ykXwv5QHmR2cm5aQwD2jiG4bUsvF9vyFJbqVkZ14WaprmsZAtqCVoh4jFFD5DodbxoBoD8yLoDxAHk",
  "key8": "5SBVetKFynoUCW64DE3b9ySVLD5eqLqjTpi15qayfyAsTcRRqqFpnamFUtPRTb2cV2Lgqrsj2wyFMatNfTct8adQ",
  "key9": "4LgcT4cAW3bpewKok91RsyovDpiJ6McZGok3CPtg1Ak5xxtuX2cjpcouitiXgECA6C1tp9iAncsY8AK2cPRMHiA2",
  "key10": "3YehYHg7i7SKR9JMNKMU9sqpXcXFKFoVJ5z8UEfSAmQFTpk454YejH51wgw5T6kABQQeCB7WAewLnA9xYeuDnPpN",
  "key11": "3z4kdUWnooVNCeYA6eombHjoYWr87xJwFDiEGUKLYuKNGdXQ6feCzQw8syzuEJxfmnHew1wnM8CHrhWik7a1Q36d",
  "key12": "8ji6WafJV823HTJcc3RN3PXKRt3jWYXS5cftat38ZH8dtEBmbjRPzBFDxi2TuH7LmcW7ew1uR3Lu1jVkJZSyHqA",
  "key13": "2ei3FZEuLL6Pm7KZjFS2eTHkeBQ9LtrLAhFPKsCQ1QAghbKVcBN6ELdWMURUQvpJQtWxQg6tsP4pqP8PpYNzfhUX",
  "key14": "2wkYtSTkN5J2cCBZV4ay1SNeVBZRJufw2rb6thr69GjK5UvG5cDgRmYaAddoAy83Q86B83bLw1HkLSnAiBckMca8",
  "key15": "5x5G2WaxgPMEQvJC3PGGULK1V5N93SwHR1ougvDjjqUne4pf5XDecWBTz8KV99vLWtzm4f6GcvzNznWwW9L5JQVy",
  "key16": "5yU5E8dkFLQvYNA6v7n3ScqnGqs9xVGn21FtA2xjSKzeCDJRp1pkv7rhbxQmXtwZSXTsXTogXVhGFa3QVBveZpw8",
  "key17": "63WteNG831gkFyhz7BtJeFGBZeKzZGXLaChEWvUrbPRn5YEBVZd4Ekn77S7eioAZXrQekJQP1UAGHTamZYrhuWxi",
  "key18": "3zbxx9LdwZ4YTdfwC7gKZKATHPXGCLuGdDZZtgPa187ktVD5uvrhdaaC7TtjWFxrUE2QLz8NtuqVjS62Xjt2Ra7m",
  "key19": "5JNRDqaBoxhGukjPHbMAUGja8Jp9JdH6yG4T9M4JvZ6nNYz1dMhXH7nHB5EpPSjtRLMHES3i32mtfbnaxEyKmWTA",
  "key20": "3kfn8NSg5pJj8gAwZWNQbGvoMNstdkFohaJbuHcxhXG6aEYmctkixCpJeh6JTfYndmK9PJ6NfgvFZ5yRuRzmfJJz",
  "key21": "3rMBJQEFobB8x4o6j9xAzdtRNxLPyUQJh9qtWtxzJtfzSNgsXGH8jhYCTTzxQJ6hRkK6wPnw3W4auqeeQQgZjp8T",
  "key22": "FhJKUX2xsTF9NJeQ67wAfyfqntPnBxSYa9GGvpnZpdMuZ9gAhKrbkmKP6nUVpU1BeNAXpn483bF9rtwmg9Fo3Tf",
  "key23": "5WHdRf2dvBaehBB6v9MoL9YXEWjiMYS1ExJZymReyCtxjubemi2c4J3FjKZdANM2WbitnJrmrB9t73d3QJv44DJv",
  "key24": "2nJLPSnFqemEbnr8im1ur3gvKreNV2ukf2EhaTZiTqhFSq86GWvoNvzU8u7RrjAmKxvBzmMTpzsgaWrKFqvqrJqE",
  "key25": "2mw4n9NrsacXYFahnm4QoGQjYbqXwEkz79Hx2mzhGP97Ep2VKYQS5EZLVAW2dqssCWX6nTZf9KzjQUfLHsqXGK4R",
  "key26": "5ai64GopHunJ9n9G7zA7bHJ61HG7pHdmoFh2SArdNrpcA1axfBqe9ZvfjYx2ZeUu1trNfNw1WMFcwuBG5maBz6rM",
  "key27": "NUv57tMeGpGqL1wVkZpwES4J6UTWUpd3Bka8PUYkvvr2JANdJRGzEfq2B34HwRGGRkUnqBp72VreB7Z4pRcEnhK",
  "key28": "4tqbg8n6QVsNvSeWpoavJ6QMiN6wyxtx7WJzcpGEN2ji16o82wduvyLrEGZhNzSD1esbHzuqE46W3WtF9dXnQYcP",
  "key29": "3UK8K3qbVXnZ8dLzwRPm8SqXPspuQomXkY6sc1iV3trgfDqevKcgLDwgSkckQr7HmdK4rA6Chp5SxGaBtZmFhJqF",
  "key30": "SRzZF5UqZ4qR5qTPcqd6nYBDShv9jnoYVJ872XNXWjkM1aK8M25uxk3JesqyPS9iM9BMuX1P7WgQ9MwoaCnb3LD",
  "key31": "5TSp2dFdnv4wCeVSrhfiLZjPaynAf4cjd7qCuh8cKSFpGWayELjEPoe4QHTjiJNWmzKbuDo2use7Kus62r8pfHbH",
  "key32": "2QaLE8oozbmuALs38ax1Uie5KMe51phcaFhvpXB1XYcA1iWkJwqVuS8hLVLMBU9vTmySPjB7uqfbM9NtUgU8XyKz",
  "key33": "Jnwy8mC1rc7Ncf857J63Vqa4eJe57XLpy85bT5Bri2GDBmLrJRoVUAhU4me6Ezu4hrn9GSDaDq2npuaw8s7a6Wj",
  "key34": "YDEhsqCAALGexxtfdQSaKJLMbttoypV4QqbppWTc9mmW8CYuQHM58j7vRPV5faketTfRcHUjiZ77Ua6EmEdQBp5",
  "key35": "2GSM5oRVa77UHddE3ZzvaBKaSfMRy72JHEMCnHgrfSJ4RCaVdpKwZvARek7t8yR9NEJTZhtvJTNicz1tgQykqMnd",
  "key36": "3vyaUwnDA9WXDNp4qdaF5KgZqP7VuvKH4MombYPMPN3cFSn9k2GUq9ZDxWSxYBooBnRGsUy7PEv75rrXP1qrb2ZH",
  "key37": "7Q2KBk3KmbtqAQdMHEqDUH7YbmWWyFKL5re4pqwJe1DrEaNt6JuN3ei1QrLcc5SYis7sGREgjSA98Dd2wWWMtXw",
  "key38": "5JJUECzhpWH3YbWGxw7G2cafdoBuuhqht2Jr42qt7KumbsaExjSqk65SqvMJ1cUTBgdpRWVo5unyPHoBnaLZMRXL",
  "key39": "4LosRvfgw4HbCH338e68m9338dmQb7Chf4mUqcALkTr4239dfauu8KFyp3HsTnhzjYFgLJ23vSLDi3h6WiA7RNiv",
  "key40": "3cnekfeuTvyU1pSpf5ELdonYTCgX3MoFGMMmAkakhbhtHV1zpmzD4iFZG8RtVHHeSHQSDanH91E8eWHgu8nGNpmT",
  "key41": "3KvwhcH53e5nfDdgB22w82zreBAM9X9zxcsmcAHPuYEDtBxt3DuETsSTphvnMXG8qQCH36gnQtkcTL18NdQu9wNo",
  "key42": "yfS6jiQAmzhaerjs5hjgUUc6wXYk1JXLrSGbUih6umbdE6EydxEmUrWraHmezrfia6afKPbLwMzbn9eqSJ5qf6b",
  "key43": "2HALtUTozxzm8NPT7R5ADQYFjBiMUhDCNvY789d5QAiFv1wsKsQNEWukiEUfcgHcDpiNjAQUC9astH36zw4bGd7D"
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
