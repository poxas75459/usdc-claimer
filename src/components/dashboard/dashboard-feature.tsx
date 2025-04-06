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
    "5PPv22XrRJCjUXgWZ7sY7n2ykfrDvWvRz7dxhdNQ1Ku3vwuQNA55eoaiBmhXoycuyowWoPRgtQjz9rk4BT2kdouY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HsH2Zpp2Kmx684baRsQcSvxoi6hDGxZHPk6HroWsMd4mgEBCxN1fWR4npLEeFdHHSEgcGHeEW5hSkMxH5TySwiD",
  "key1": "2qTHZkKA7ssjwgVuJG8kfU3gyg1Qw5M64D1kP7D9Ux2EkbhGcVCXSZEu5miUVwxfqEXNQSWJZPY8oSsPqNUMwtX3",
  "key2": "3dD7Y73LDzak38WmeFmLMSGKmG8U8gqTmmqtUYYJSFkZtPwCxnw6bg7nirWj1PCZUn8F8YyqNfHdQartUW6EDx21",
  "key3": "5xds9Y6nx6HxR2irezrNxjYpYNjedLLeaSwCEEcKLyJYg2dxnewJhWhj37V4Byeidd4Mk7dFqmY7X8LT3qZFWntB",
  "key4": "RdxF2jKdcD5HN1Xwciq13WVrdrGFii67dDVQCB2g8V8op4dJ1yt6sX9tLkWpXYq3izkaC8cjKwa7bAcEcsuJKfC",
  "key5": "3eddJRGR9AiW5dfyUTnKJDy27ZivjEJyKuWA7xMrnKnf5SPSFFNUox5rjn7ikqGSuMgn4NqgUc1edwTGQH8QxeoV",
  "key6": "8w1zgP3hFb3AXdCTYLudCptVGHhAykpwmts5PjfearEkrVTgksUdmzXx4XfWcNryk3P1dS4EQbUgheCFaiy7Tzn",
  "key7": "364PyeMjC6hxSkMwhYzk1f1Ci8H2Qfy5omsH3NCiBrsXPdLVGtYRd9VSY8nHh8HAsj3woiHcDFrccqx1JU8uJJEK",
  "key8": "3H4akDYrtoRQyBnAPmXJPrdUBDkZ9SkLwKQv5yMrdNEKvFJ7aJ4CAbfYd3cf6sY8oA5MRvCL3RhjNu9qYNkUHre4",
  "key9": "2AEPfnmrKDG9tSP8uxRtKLw9TqKHHmqutTJwQPuRrzBVG4UHrqv4LDABmZbBde3P3218sfkvKaA7zzejnujxJcZd",
  "key10": "prqioHtcuLoDEdDKVTbyUk74497cjvQ9NNDGhRuP5j7ub35BeiM4Q611gKuYf54PvxAsraypjgQK77i9jk2hicr",
  "key11": "5XqbxUcqpHG6iFVcMwVmhxGKtHPJuo7Go6bctj26c6MEdkwis2Yihk4z8rMnkcUnC4rYYNiKJyG2KCwV9iquLuLG",
  "key12": "65KvV8o3hyh4EEMwFrwwqywXsDZERS3Aq4bYXkWZPWUk83rAaaUUWB49AsF145fcU5gQbZCvK3tXafNBoEqKCeAz",
  "key13": "sMew4toCWuTLs9ExRDeo2Ky9ab8Gk8bXCJbvDGTLmCnYgw1PUqGmb63XtPKagfSZX8Egj8MjfqEz2VwRjtpKLR4",
  "key14": "4RZF59nrhZc6vX8XSRMo4RZGQNx3BUkWJ2sfoBZD8PYX3s7iScyq3YhPVsgt8v9N6rRjW2tpXAWNWqY5hd5Gmpqd",
  "key15": "5iX6ztmRe1mq3u9DLjZRhtrZDnwwnNLQ4isiDJV4m7jwGxZgJDCnaaYNsQJpiSoUmohYqhbpDYLRhXSgseC6AbKz",
  "key16": "2rD78a7yojMjWzjzJYb1KJ1zUg8c3MsvEnreqr5N6Pnb2htFTcgHVxWfukk4HCjALoqvs8JQ2d6NRq4AswEzzxmd",
  "key17": "65ou7pkr3dpTntS6TNeGg6PXQx7hQrAyatb6aHYfoZoMpgG5yKrqk2cZGkoder6eHSsGvfmpUAQYReAHEXzaE8VC",
  "key18": "4CLpUyzELKT8TJ2KgeNyBXpc1KAYXo4X3u47gqkvHUH3FTmecErHVUm7H9KcUKzRVgMYXEHhstYQP9cN5oy446D2",
  "key19": "4RxuXcZh29XvWNSFGqA5WD79UbUzVqyQRUt9AmEM3rLySnFBDHUJi8hc3SvC2KHjTKnGyxAGriCrJVrAYNz3j41T",
  "key20": "3sWUVgX8o8JkEA7aw1Qj53nUafB665xzkuLitA2q3XTk34J7pYaKkn4ceMTDycxkohwaDErcp5oJBe74Dre2ruEB",
  "key21": "2S9UAPwToyZK6PsGBcNoEaGbbRz58eErzQNQHJMdSKSfnZRa9xjcw68F2yvLe8VmTMCmzhY7GUMa4mo72HY1SD7T",
  "key22": "5YtRH4Uz2VcR7CtFrH8V6UtKoa8s2YBjo2quj7soDCeqMzoN2weGit8Ut2Sy3H2D1jzmUZDSAesQtfAFXyJLvbAU",
  "key23": "4xRXx8dEXJrYWR42Sab4Kq3zgD9yTFp76UKToGiqyKazwqVMDredaYfx6Wk1bUERv4roABVE91m5wys1XFvTZjwz",
  "key24": "4EQ1ycKJkhxugbuyHNF51kyah4HY6UmsrBXPNrCfvyuYiSZLuK4TpbB5NNc5nyA2gnSKgqL6LbemnuW3esfHzqeu",
  "key25": "2QfMrw2oqnoe3rFC7wVKstFB8fXbEbzfWvEziFrh9JQP9ADhxqKr4YbvVsghRzzZdo5Z5iQsds5LHYPmiKbPDW6y",
  "key26": "522PQQsbSGHpyn8ZdRVC57KvygHZNGPchWnnZ3r6pkYCuCEN5a58UQRLmrevJMa6PWHV9FanAXEUHSs6hHLvDmKb",
  "key27": "4FSGDytDLjov7u6KfvuguaWPZMcy6Ao9h6DGAx2ubhq9mu42yP11icCTF4BeBQd67dmv3HG2fwepjNrV1nnXtcJw",
  "key28": "4PdCise9FtdoNRqXtYbbdYjMSYy5Ro1pHzjEDAYRZqDmp4ABoinWxd5KPvHPXLBykF4tm7NZykAJ2C8jEtWSfZts",
  "key29": "9a4HTdk2LbkuZ5FF52waWg3Dsf5b9uuqifNjanCjpD1B9SxPmHCgHLiWk2wsBoxjmmq3pRzhQfZVQ59kJwpVrUP",
  "key30": "4H7gGLoyYkapLwGzozMkNp4CjAeoC1bNW7iCdPxnG3UNGnX3SGtFJCkAk2PPXXqSHoD6Lg5U4Dte4eLfgxDwSDtJ",
  "key31": "547XFTvXasb5uPkSPSLEzaNjpr5FNVkndghokh2EYaqtGgitvMSjw1bDHixDHUZtsQbmYB8xaCJAx7orSK57Qqzs",
  "key32": "JBMSLSCRDrjo54mtG1yzfAn6u13PqKNAVNQhJ8frsTioUpcTL5tXzqcxjrRHjT39qc3wtvVJegkeSjKpeUm96C6",
  "key33": "66otY5uPf5npNTQw26hpdBeMC3gJzBwcpL5EbXZdExTm2YKbDQGuwNZGMXnbw5GApFvGvhrtFFSCSXtvRHAdpyJJ",
  "key34": "4jYNZG74o1j1GDpnUYB2x2PeZzWmHzdubrSUVjK6rV5FB5Fsm4oBHmZwhXaZjouFjMQEmHDk9mL3FqSKKu2qAzSH",
  "key35": "8DwUWpRBZTigveWeSdE9gHF6qBJyRJAQBvTWR1nrtZiz7ywqX8NHYKUobg1xV25Tkf5idwG4jgMUrjDK1k3TKUp",
  "key36": "5hsfrxyjKn6snJJNvZuGP1tLm2hdHdnFr5z51iXWgLXRsneMFo9nCvbfsVjQfTMhXKyrgiygF4mT4dRzxRbSdAzo",
  "key37": "mp8zrRu7EAGMGxMtorCv3ZbY8s3QXS1enhcQAGZdMs8yT2gkeDGnwxTgyPqemddkELu7qqYYKXMSXey3W6NNmr2",
  "key38": "3GfVom8q6eyneJpi7rpMGxMD8eYVE4MKWLiEAsm2fyhGnvLufdPavqKDM83Sf4gCDxB4uUPzjZVU61AfsYddYqTG",
  "key39": "sKvdnnmBvJchHka4AdXf6CDcmbzKnwfMNxFGDSgjbmh8PqAzJWGvaXurrC7repFcZKJ3f9Gxy3W1QQB8Pu8PgwC"
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
