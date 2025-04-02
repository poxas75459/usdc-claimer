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
    "3GDWtNzV6JDu4ESJPPUqGRvLxTgknT1JEGLzypEU4pFea6JFMreo7wU3wPFWQtZybXFCDReiS48DWcVqBSKChF1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zMW86CqjYEshmojcvMGRrGckEvcWaA7hBsP5CgxqZqcBxy4wgwPA6hTVJkq9gx5Vm6KGdYkX9NKcBoidK5qU1nU",
  "key1": "5FQDDmLCPQCySLsZ1Z8ybLgtskURzujVUerkRj4piRhkYZHUszW6kYr17Zc9oHUcC9BrodpVzCVbGrxZW8ngPK4b",
  "key2": "44KMWBVEkhCY2xvZsR43MuB9LiVggqT5SkkQybNsbQGy6xTkqBnAUdYFx89i8wN9RGek6omeECXN4L49qcpR4oVM",
  "key3": "2zf6LU9S5cxnf4Ah7SUM4YWhfwN3ps8HcvFYUPiGyg9mbz6TXKxSFdZV82svTBUbjwP3HJ21R99qRkvDoVpDjUSJ",
  "key4": "3mxfqv6hySugHMbREGTS1WCnpt4JqDLGuYHJtdbrzMNDUntQi5EquemJw9Vo17ZYR1dhmo3x1rJqTK9n2Ua1PSAF",
  "key5": "4mqBMH9ZPVsbAxXQHCtgpViMQGNVFt4Y95yBJe9xqV3g71XyqLgtjDXUhD3iv2oftu848SsNdcXWjfJsXF8NqMr3",
  "key6": "2LWA5pDeUodHt7J1YYpXbC88GiLwCeb2ru1fUrjKotgunaPfDNdqjQzqyneJLjWUsaQAM1wA7ByuaSjUP66zSXTr",
  "key7": "4gTHnTiLP42onkhymJgx9JhQXNP9Kkbq4TLi3WdG42jhz5eRtXFyDKFphRBVLsxVLGn6xMmvsSW24Qd1CpSAEyT1",
  "key8": "24WYYhTYdndiw5p45uhvi5tu9YahDjfQQixBPiR26tNV9qyFnEM4r5btM2barsTZoZXCzteDsZL8QV3pb2taenVP",
  "key9": "4PMZdHp5cZDwxLcjGT18kovRHBU12KvHSTX35zvbSW3gLvJY3q15afGBSZajao9aWwPHj5uUNTooaHnyTfbHBfrr",
  "key10": "5h3iGRKc2QzShptWv4H2aZJjep2LmhjTjp7zEoci1hRMaF18XqgaQw9fWiLR21DAY739mYFRA9RQ7PhZniNDxL9g",
  "key11": "5ZMV5wQhpWvAgLf61biU8HsddT6g7973gbqsbgd168CYc5bNJkmxN2wcNkmtdRfqMui6bPNUzn67jzvh1jdeWxk7",
  "key12": "4YNZZm6jvr2MWytuoByhSsKCh2TBMD8cgqe55ct55wmKTWtJVBnv34LhPTWbDxECHVjEMnghedz6Yptpz4uoLkjZ",
  "key13": "3oFw7vXop5nnPAgUuCQNkbyAAGqdmuAmqm1kp7QfDu1aiihGtrQG1iyZoVxk4x9B6VGG1UNBjXUucMZS4iQ3n6xJ",
  "key14": "4fT9nFaQ3oCktHhKKHqQW5Rm8TKTkk9S5MmaTVShV44JHZPM8nwKB8UZCZWN65vUZnm5f5GLCd1ksFhvnAxFX7N2",
  "key15": "24sVodUb5QX52X9zH1JQqYeKoUeCw2rLWiSz4echRLZPSfM5AB2YYwwYXJxszSyUZuf9hKZKtKTPo8MDnD781nB3",
  "key16": "55kk4ujpVxmYRRyoBNYZLKP5kjAemcioyQ8QotmrE4csfYhGcHyV1DeLeWBrzJESER1oTgws1ZYvVW2gVNQMLcDd",
  "key17": "4CKLMPgLzgQBVYvVitBXYtMEusMLJXuF9NycPNZ4a6wXDbWoH3svdNcQiNmQpKtXPngw4wYGSHrA9ArTLXzXbLv6",
  "key18": "2ViHSeLxyazZ6XNrjS6MuUvWvAcCV7kXfR3rCnJzeu4C6E1tDoJDy7CnBJZpb1VSBh17rUKUKkEzKJjxQPE7eD9j",
  "key19": "5vVLwoPMmTRKFRUuWfGVpUh5jYKpvCvWAG8fWxzFxvEaqwt397J2e2nkTrXP4iLmJQ6wRGBBtXqHeL6YTNSQ93qt",
  "key20": "4gmGigdKdqtcfE5CHVuvTLvGYhJ8DomxboiRtrmuZ9mjMaGrAoj4YFPiU8dEp19NVeYYzxRHTsKeksu65U8Ptbb",
  "key21": "2WR4EBBz9FUBn8n3v1mEb9MKWpNhD2jUgZP6p8qUbb8GfxyhmnodTjsAJ4rAWyKrJBvaKWwoG5zCL7LjW2pHMgG6",
  "key22": "3uGa7Qj6gRz3ZZ1g1s1czPDtqw86pKaHQLvrvnZtZLrsLbe2qcBZpjxAJR5yQsaEkaRUQchFLKAxkZwbWNEZnGQk",
  "key23": "57geJH7xCcCvUAS3P4Nit7FLPmwRq8xNUiMrgcaY7ZU14cvrfCbX1RB9Qd6Bbv7JzXUtxuTY7LrTTQWViEj8coGv",
  "key24": "25crzodkcFhJJG6xcJBRJEWBxdhqXkFYdVFg9nFAHPi1SwGpuywXdgit6kFjyVcdNyF8CxWtC7WG8tChhDDAH8jA",
  "key25": "24Cr2dLLyzJuxdXEdweDNbqF2v2hxrqr35meT39h9vtjiE7NcTh9QrcYLu9YnziDCeVbiA4XhgTGdecMcjUQFmeg",
  "key26": "2kcLidBPyajbvcT6CFmqeqR5pHJJVswf4zvmqBiCTN6RErRXuoFNJPQ5EHTkSk6325QbEWr8ye4NYRZaDTkBz7os",
  "key27": "GNXK5As7eSH3Ufg3bi8DhpEKiFZH3wMTcweqC8w2TngmFrR1uQ6jZ94e5fbydAeydopDCjaBrhQ2wwCRTxv85Hv",
  "key28": "4tRbAzQxRxwN1oEp6ZsxKzMP4TGvuYWcDFQkpoW5FLbi5vd6RuMhv1KwEFMzNLvNkfx2JqNknpFwxJsBM4XYpH2D"
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
