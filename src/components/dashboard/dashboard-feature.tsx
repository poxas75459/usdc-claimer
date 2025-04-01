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
    "23fV48j6P8TR5JSe3QaUpHo5KeZoN43YHR2DuuHPx4GkVBJeSr1kpJk3yyzzAUVEjimU7Ljn33Wnxn21wo1cLNAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cg7UxErcDr4V8MixSv3FMs69kMGkBmZHXFoFibKrixkmLAqFErJUormnieTPSeAwudmVVXHxVv8ALHxt45f7XpE",
  "key1": "5C8Yb7afA31nWrs1RghfuQwNua4jM6meszmwRf6DeHkeZxNHqDVv7B9UntzcewCKruhVAMwwNPDugrrQrrrL5pNY",
  "key2": "2q13osPC5ZxUNCUbwigTJrqA2zLyXK5B5oGag15PdYgpXm8RPh1WXr4ToGpNkfgfw7ZDPzoJuLeH3PNukZNg5iRs",
  "key3": "2HX9BUY6sQWAPJrJg6Hu52QWJDXo1TT1v1Y7TCdqo3JfMbuQWhpNgut8UBfQWx8JX4yhKCdbimDh8RF2RUZidqY",
  "key4": "4HVXZLRjDzV6HwRu7GZe9VEfAuw8QhuDAxf8HLPZVHtmeuMid6B8F9CdQdJUee513uwxdf4r2ip8pja3Q2VQWJqv",
  "key5": "43Cet3pMCa2QizMMXFA18KLa5WPN8rgvALWh68oVcAxWj8udrcS8N3rAAtm98j7Rhc4C6Ktm51Mn9yGJMeR7PF3r",
  "key6": "2bpK2dzxSmoaWY8LRQHmArD3QK4py2XqGDVWKwZaqaubaRugvWaYSST51Wzd6JeLP4sFcitYwdF2PX63UzWdztgm",
  "key7": "KGa5Cb1K7aUQjaXsBZ87Gdb6eNk3Rko8n5N8SHyMpN3KWu4ZaL1vnfAfQeLtoQtTrXaV5Ey219kmS2YYrnr68Q1",
  "key8": "3T4QFRjE4c9J8E8FHBfWUJdwta2DFC5t6biXeZraDvwhWba7U2yW4jrvQvSF2MAATEbyiEKjZiPeVmWxgcWozVhN",
  "key9": "njZV6zUtL18Fkhi8gf1FKTb46AP3r6Ma6BTvdxhTijsGyEH72YdcyfuzdMU6j2A1JGbGsYXxFYETqQ5KCJ9sEsa",
  "key10": "5Svc43QPDJoTZDENfKHRqp3z8ABtid7ZAKy7v1vzcgGPbujvJjBvrqwEzUrFpTwaGf3psvrTrsf8AzXXRabXQvaW",
  "key11": "2LyusQj3phJScwPgkwCL2q7virfzd3HnLhLP43aHqwz4QqbxcujzBUAHGRu1VaMLFwcHqgoRtjfkds1ak2a3bWQo",
  "key12": "26rM1z2wHvbSAcDNUcKnstH2SLv3k3S2yZdjvpzoyyJMiHWuxFhmWKR65dAzy3AyE2AgNEwVnD2zrpuf7cc76bKK",
  "key13": "5L2XQQjuAJcZXjFucPxiaMYEZ4qWdLPpgTeRAmgsvW2CdDz4xGY5vRud4X2GFmTg7s82B248SEibpU7ybAfBUH5d",
  "key14": "8JUAHNDHt1T2SE58uzjYjJRECpujcyMrAt4gopPWEcUvhHiMPycioMFujmvi1HLZpg5tQecT2M2riKiTmLG19mE",
  "key15": "4TwuhDjAFifpPG9AsGw9hyaSE4EGRtVsUrj9z2vhdXwkz7nkLXinYi9PqY6YZBr5gXBqwAVTJmPm4HeDbJUxUjBR",
  "key16": "4S1QWUxZtJN8uw2PCy2Aj8Phe2G9JxJnM7xL67pq2GKB8AwNvb3jEyCMchYgTxm562MXBmT1UghZ5drGbhQpSXCA",
  "key17": "MscKFWnydGCZ5gtSVkx44muu8LEMNeL6Kju3WNUEebT8vKE6kMhrbWBxUr2F5Jqg53eFKiR3FHpzo1sGksooPdQ",
  "key18": "PALCzo3GMsyvh427tmUtLKA7szsGcNXvKmbAegQKND4GcWNq152A8VKyXjkL7BEeeVqbMX6vKrW3ZH5AhiQx4u2",
  "key19": "4raKRJmj8A5ww5YM29yhZWRDzFtfwdMefbkKSuevnVufqxitzDdwHQUh1vPV473J7jRyn5yoY1RmTNVrPjXb2jVv",
  "key20": "5iNurSDcvKcfc8kkr7qXhABVUzdcn1gTezMwWmdY8cgksGvyaMBe4EMQ6rjLq4fKJSsgvPeD3SJDr86TUn7NAmTJ",
  "key21": "4v8rkWVwxsccGmABknSfv8foJ1rcyKu14hwhf7uJdi5ry1GLn3nZ36CMjBVLkCQdF4puSepoBsHMrJqFKVFFpUDj",
  "key22": "3LfNToCzqP4tFQ3RwDGfXZVJPchEZDsY4idC7xMNxKmfq5w14UeiYzMVmwmCHgdXcD1vV7zJJQt2zPCxn9CjCtaD",
  "key23": "2iMD3YG1ezLaBJQZcMVP1rsxNKQQKLNWdb23ScFcAvu5Sti1LWboWD7wwnx4rKLLgUvAoTUWLiRdbpjQHgj2dtK8",
  "key24": "49YewqeLeQx7GSRjpdBeAovtqedCmXisjdAVhgD43LWLmQTQGbX8drXuZu3UWvrSQT1Y9eiEgvjepJkv55pt7ZXD",
  "key25": "3ctb7GpfowgmcK22sDtfvW9Huez7aEHDh394xFeqYFeA5VUpH63Cz2dg5u7PGEgRY7jKHyeKdwBXKt5ycAK2dHE9",
  "key26": "35d4or19ehRFpou24dZiEVdQN1XjgH8SrLASNYw3YyWr2aiLgV4QA84rze2KBtjpF4YBA5WwWCauTVGGT6A8RYCR",
  "key27": "4VepeoeFDTXUY6Acr4VXJS4sxvpKwZcGqKCKLaty7VubbNDuypDZynfAWAwnUbejypPm6TACXssKwUAx6CQgZW8f",
  "key28": "Unj3n9F3uN9RD5ZDCBAo6PzAnxUmztpM84EqmMX6JrBSM2Sqw6ttZSTUAgppBumJLcYc7MCzLKmMHGv2PnDqLyZ",
  "key29": "3B9FkUdCHzDCMLHfAaxt5rk6wNuK2vcg2o3k994gGD1ErYDSzaLSXiUaASwFqZVBvY2PuuR9dGzjkbni8JwtZQho",
  "key30": "2vhmPb44ySLLs2rSZgDMRWKJxJuFCz8rgFj8VY4wPdKfbR2UatdYU4Nk5xJVDqfAtgQCP7j6JUnvdUjExuG2St9p",
  "key31": "4G6KXRKDBN2PdTYjzzmWqBJaUzr1kHBKb9vvWpKnk89FrVMmAyxFpSihfuVD7ZigeWs6D6HFsBjBKxFGA5xPpTEN",
  "key32": "5M9jTALRvzj8GkY1JemXekBth89r4bzkM41VabKrDr49vyfev4NkdpF2U1mAgWW6kp8nC9nheZpUx81s8ZPaT6ZW",
  "key33": "2AQ3uQCZoqXWoLWAwUxcNVMZFyf1Z1D37ruKPHmNZmbXDW4bj1zgjkdhDRiYizJf7wN8YoPpUtPTMiL7Er6nqQjH",
  "key34": "5fDDHcHyEgWuTtzZoCnZhtNxSaSBCVugESWz1nQ1AjHSbmbTzmf81ViRooMQjMg5yvTXKnR96xjvy1g314JjmytA",
  "key35": "3B5Ra9cqnE5s3amxpJpL5UvbQZ1rVCiVo2jDc8spZEoioTckT7tahAgRvb84pCcXQ1JuVh2TqTtzCRTNaioig63L",
  "key36": "o4pwVTKiZ2994NbGEsuAZavJm56siUnvenfukxpuitNM1NhWdDYV7C56rue8HgzKx6FA569ESTe3Vqc4a478BYo",
  "key37": "4NRaYQ7FDZiaG8WA4XfSTZvNCzQJ7GPZCmbGZ1j2XDKdV2dJxKhNyZY5VwvwK2kZApEiQJrzhz4rZeZSvKfqph8w",
  "key38": "3f1mJKX7QsL5Y8v2WNw1LbVsF3NbVFprb9MUFFYwRWGPSXpymnaNkAmVkw5sNNB2okvdvUGu4nMjsb4dXViCrGjd",
  "key39": "XNzcm4GFKC5PDn98KdFKhgHs87bNhCanArQKBvAYG4goyzBnq4uyikc56LRBrZnLEG14a5iknRKkqGxo3u1bjU1",
  "key40": "3UHuRopJ7dWu2KG2E387FdY7kCPmASQKQksdJQZWhyHq4PmEfHffxuVMTVeVq9YUUAYcZLynntZEyNXE7arvn3bh",
  "key41": "2Qk39prKTcJGD4SXEG8quaicM4VUw6SkDdMyrnkxymZEx612ajf4REbeT7jDMUuXeVCutjbPjBzSwXx4AEb4TZHm",
  "key42": "3Pt4mpbY5CpM7tUX5PAqd42n1XPddSmMiM29AN1ec6geNuJbi2pNXs59mBspuUckkED58BuWVBCWSZZtbJG4SVDj",
  "key43": "3etpDUaetEPGJagfnUMn7jKKBoGHH5U1qUDAdr4EddueexUk2YL2xuz63D7qK7Wh8rHA98nhmsdXKbGFYFwfGJ1s",
  "key44": "3BY8RC9H3y4GiKGtiFWWedYUZ5fSZMQPGzT4UswWTE23mQdehnhgbuKDaJFPe4H67FC5WgzX45CYVuFmdo6gPkRk",
  "key45": "4Nfy1zL6fpxQow66f1qABz4e3eBdNzjF2iK452Sv7f5KE8o9uCvCftvfAH2FEj5MPn3mVe13g3fnfkvgrjJtB6Tb",
  "key46": "qp5idsQzF8rDP6d9eSCnYNiM11eVFG5MUpa8WkghmDye2iWWfrM16F5VNjuL4ZbiVGTV8HyvqWzXoimucdZ5Yu4",
  "key47": "4kLb9BaoTBt1P3xPbXm5dhrReXroJV1B1QyZJcUUtuZCbyp11ZHRXfGc1k3WLi3w34ArwkqwCh8TVJMPCtURLDex",
  "key48": "2RDkLT3BEu11jSRxABUfVasV6qvRATJGiwzSmXzGu5fnTURbpxpvkr8LGMPPLPm3mSKsn43RP4WteVUiTAngFwg7",
  "key49": "3rRfnjTEmrPXPiWQy7RGHGBrQRY4ZwgUD7uHaTcrKJK4xtpzzCSCdq5YdJY2nYW4TARHALidZhv5n7i3NsB2bqQu"
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
