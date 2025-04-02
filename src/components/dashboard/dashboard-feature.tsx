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
    "22vURnii3DQZYvgePWBnCzgATokn5seS3Ah9jVYYkUd7p8yWrCHRghxW9pfNx6izT5aPp81qEYmjGrZ1NqW5BLEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2By2WXJiTYqgRhrZL7doLrb7MJVRxBrVr1sgJYutrNYgBJzGSaZ9uLk93RWgcpbDNMGJKoU8uQx37pUwxXxLGcG6",
  "key1": "5vP4Mqwio6jGB91DPvx3jB7xsfc4cwpKJuGqo3vBqikxZv3CkRihkCzSYfjKkLSKCQBeGWJNFhPRpYQwsQCEpGjD",
  "key2": "t6wJH47Bp3qCKoTnKnyjNBMcEbk4fW1BKYhoWePuwd4Sj1PKHwe2ASmYWCbn5w4ydkAaeh8AhHNYBdEG6yzjq76",
  "key3": "5LmipdLyNb4VSe4S7VeWc4u8mUuvfP6KcEzxXxi8ADUuX1XGqeWCTGSckixMJ4p5KKoChRYkkK42xm4N2h3hADGC",
  "key4": "2r5DSkdcixkX67bPci2qfBgtLwLRn4HWevLuasiKgmep92yCu71MyjDMfoJnyvxMjxv22bVD4JD93QX51uiFV8Zy",
  "key5": "3kAQpyDxZBNJ9ZByjCvnQPyWuJSqr7NN44uDsXchPkChLXYsArT9MbmywDGCyoPUHFPQRnbc4LgqzqrVjAVk5czu",
  "key6": "2ojKQswabu7Mkj6boSSxwJGuZsDJJ7gYFFRCw13sotVhpthgRoNrZDzLX6uARikB5cEhCf3jAfE3a5oYWv17RQqQ",
  "key7": "js7eixfYAYFzBzhVQHAaMugU6x5j6CQq2opYq1hU5j361EadK9HLLzGKr5P5v5x8W8XoM8nTxLgZqc5EYHcLa7Q",
  "key8": "4jLsatyQJC4eTR39B7iAxSSeueJGtr1DeckTmrdhXxf36B5osQJHtnKCqTSNWr3CykgjUM3jpgWjGHhSTA6Gra1m",
  "key9": "1r2sJk8go6e8ivfLoBSifqZYxxkCeEUE4YKAG1TcLdwjjq6yvGti1Dkk6DdCfsZjzHDrnD9sDxYgRpYxY52gMQj",
  "key10": "5ChY1Fh6wb5budcZB8DegKtDZ8o4koSeYDwLEU9BZPj6TybvsKAaXA5RRwuVh5vLrvFmLQSeaJutvpSFuMgNGrkA",
  "key11": "5NKjNNHDUyXLuWgToUkkUKwFhkQ2ewDaJuWCa7UkziDQxGvKkZaebxW52Gsf7kmG9u7XqPqytCqsztcDeaJWT989",
  "key12": "4XhuFthKJYpw5BGWVJ1H1onK8w73PSh6weMRNqRxRvZ5ea5JVnPMTx4ym4SdwMSDT4XFdTfRxFWXNudsqffzq5VT",
  "key13": "3Wj8mcPYfHq2nnEs7z435gNhovAgS5iuy9PT2F1SCJzyQwWbnwJVr4de5kokhEtVuQPEziyEwDJz9DmkSg2y7xUR",
  "key14": "2Bon1cqpyhKTNd7JFLj4TGbcZsxtzhPV8Uwm6eYAzSEzBxwkm3tjZxhaAURPRpip5NaChT38piuJEbdmHhuuB5LL",
  "key15": "2A2wSGsoqPrTCaecy96kA56yvtNZPwooujCrGPLZCFahnxXVHDKheY3eXavDJuMYAHhSUXqLnsqfAXkQ8woYW4Gf",
  "key16": "3Ca5w4xYbCTALoTWS2uDeix34nZds1V42ctPJmi7xZGWJc36FQDXGvefd2jMCfingoFCAop5cq8yoA5BLD17jch8",
  "key17": "43x1H4FUibim8MPmbp7v255a3bPTJoH8DpcYs8z6ytr9QDnT8hBP4FgtDrKWhZuMfusHNmSz4dyZKRnANKprrbga",
  "key18": "33ro4dzt6Chooyx5iFk2EdJZc7JeXAT9fVKrmh5e2p8JLPx6wgyTvztqAN5G1igdq2KcqdhEMkD1w5c9PAP6ctLo",
  "key19": "4Z5zsY2ZqqrokUNhCKSAPZViXoiqAm4svppxaWBySoX6t7EeBdJkdTywn8Y9E9odcgQtbWabQFyeukoi67Uh6DXE",
  "key20": "2LCLECzZsHdn9coSyxNijxCUPjDwhwGiwir99ynvejpYJNdfBr3yguFwfRP9ifyiF4BQfeMkXBFeCuQcBSgGJH7w",
  "key21": "4fgvAx17c4kSz7bJqvPRNgRbEWnVnvMRok4FgVD4VbNV7iPuQERuueESuhogBqZBp9Zch5MGUVE1HTqaCFE8b4P9",
  "key22": "4ejRD8ZhPgZ4HkiUeziye8rhwbUBqqioUpxa1rCxBb6BwS19Li7R2moR2hPaZif4aKwbLTrhfxcoEdk3i14xdAgV",
  "key23": "4wvfqkFnDvYr61qs7eyLhLjh2utRFRZnjgN2k6ZKCAH1AdMvMW3tN75UqWsUPQTwMGdtUKGrNCdGn6UhEpi3eVXp",
  "key24": "5aPAsh2srSQj9Qt6UqHUvDfKstPvaU2D7bD5mnTPGVTVEq9uxCVWS1RZyC1wD4aTuwvUUM5wadGFbLaxJNvaBAur",
  "key25": "3HfkjRo7MV4QZUpD6ppxpfi4pj69kk6unabwqyG3fAcqEV2GsWGbbr9mYVuUGXcHJ4Usm7WBZcz8BymiPQaiBQ89",
  "key26": "3UhiXwA3xAzChnXA2Cv5nzsVXrZXmmGCam7wrZycEJhGXX8yEGaS2KhwFzNdNvm8kszwJbX2M3GBzNek1JvqVoCe",
  "key27": "4ZKiDjg9u9GJdr4uVMAE7c6RTvvLhHJtGaM6ACgCUZm6QmGWWkV68X7k4qgn5Nou6hWRDuhCz2HUSW8aACJbRa4r",
  "key28": "4NSaziXwRi4GJ9T7UVXP15BortTW6VTkLB79pH7Qw182EUnK6FhK2f2hSmyKAYMDdRu7VFc7ViP946rG5CH2GG49",
  "key29": "UnKAeYowFEH4pHQEye72NodpZ1RzrX821DfsR2NnjABqdt4n4G8hT4zvCPMnczRb3pXyqkC3RuPQ6F4SMJ72LKL",
  "key30": "5buRyB4yAFUHDDAPgoFm5aqjenUaXjEXEsZh1EbMcrzxt69JzDiGjfWYanmcJ7nTa1NweKyAXETEviRpQnqwA1zK",
  "key31": "4KTrDZEwbhaQZMCJmvTAnVuBp21NbUPb7Cxx2KvgTUr98LLcymJJ544KUVbZBU89G2cwu8TY7gisXLRbwgLTJp48",
  "key32": "cjP3TNrFrXk6Lxp3oggbiYS5a8pGgCoM1g1CUbrxt8vRB7Ye2YVpa9hCsGTfQJvC9qmENr7oXU9fFn46kD3xmPA",
  "key33": "5io181o38gvHtAmYPDmb3zkjkkFZryZBuXTU1GPN5yhHctXVUZENAnhsBFNDBHckorUGJx6JH8zrEtx4e9tb9XEz",
  "key34": "5rsivqGz5XtG6pN59Gq2Yo4fLYa2JhNKpQNDAQVFNJWc7K65u7zWZFkv7BfwH4QK7XPMT8tr2hJSkB79R544AGgj",
  "key35": "Y2UVkjtznjzoy7GFfyUvQFZZNDeiJEuKAopLknPp3wVFNSWMX3EmhGKoijDJ78WtkQFZ9zSxrrdFQQA8Fb5Uxqd",
  "key36": "4KMtFjdkReFCZgVff18oyHRt6Cn7MnNLmTFXC6MCTQct5SqEvqkZbjjbBhCz1uyDzmVyTcKvj6m7h41v87tZLuEb",
  "key37": "38nppdPZHFwkKA86EwdA6d8FT5pM3MTAGcgFFEcc4ci3ZahEXH8uhRjSj3FzmsDTzYB98ox98gdCyG7LbaDaXE9Z",
  "key38": "5MnjExpnw2pZKr3RxQmhrRu8nw3NaG9LXtyhEUDdN17T2DopzXfJmkbBxLkerGQZkR6dqKZczrax1CJ4YopJFStx",
  "key39": "3PXuYMxbGh7Qa1i5Qvs4gySUCbsHQEEfABNJNRn2xzs7EfNdaLuo4VkrDnMC73Nc8gMrpwGKkb9BG7BzMb7BDKFV",
  "key40": "2ga2nV9dqeds356fErfxML9KhqLbgK7TnAyHYTPh69YKfecrcSVWpZjPTdqw4S8Kv73ffSCiEooLCDhE8eiBajrn",
  "key41": "6y12hWVoz8aT83Ry5s899HPXSG6hyzkDKuQuCRZd8KLb93riNrW4b4qNqDQQp1dGzkBH8mjX4n9qM5KUgrx8gr2",
  "key42": "4ve9zGCCLpsNXqJkfeAAmygxXV2pxk2FEYxdwRsxLyJtgTnn3CqJs1SjsMT5RQSneaufRfPbd9v8YXfRDanus3xM",
  "key43": "34n7yXePrca87LDT6qtmXEbwPEjxq8X8mUZUu239t8KgPmMsaiA8qAX8KLjvMmFnmh8PGKHwmHcCtoUpX7QR5KgV",
  "key44": "2xDzXxKManjcmjD7rgDmYeDANKaAss9z4YutxkvJtrcQCdBi2gKie6pJPDTTk8F1tfm9veqnHDTm8xwxaqJZbTZr",
  "key45": "G1dqruX6mPtvx4nRqnHX5E7VKzwv4ND76wkc7JeW4ohXufHdLf4UQPtNPq9nJjcE4u7sfURuRUXpbtVX1DCpNR8"
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
