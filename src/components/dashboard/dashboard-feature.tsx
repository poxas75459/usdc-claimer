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
    "5ehcceKSXXgXk6DBEiDV9CL5V9QA1xwfeTAho2WTfP47GU3CZAjDxX1jkw7huNH4Rp9g6rbU3XVF4qFt4tM9aJeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tETfw9vi3XYxNeYDLDwqDwXZxmi3justpoyyGihBayTPfxWbxL7gy74ECTnTebsqz8iPCtMyp3af9gX7SMtpWah",
  "key1": "5BCob3sBcvdY7DusNz6YCtm3p15YknrTTM8vGGnww5LKVv5dY6YeyvJcNU2KGR844uP3oqo7mZxCohorqAwJQjNi",
  "key2": "7FFDizPUdTd9BNtrdxNibC46HQKcHBa5Zbzz7UtK2hY2TzfYPHi5SuN7N6fFzHXQRnoKPCNGuBbm3ufNN5gXVj1",
  "key3": "3JQz3gLyzBkK3XRuv1245SVgcqj22TYo55jXY3XiyvWWjncUFczUgmFPqa8sfBmphMWkBpJoYrTrhJszJiAbkhx4",
  "key4": "vKvraipazkVbhC2mjbSK3mu6nTTzCStev6KFYmF5DDp2wfLAdoXnyfz1mejKE1Pj3D1KcrFyEsgt4cu2UNhsbGC",
  "key5": "3kGMkWTyBnACmzJkABjZZe696nruC64oyLZgtaGMpdPdcWkkC1QgLvdXZirQ9R731KfR5TcBMcbnEgMgEKHKnncm",
  "key6": "5Pc8pSDB5VELANMhcEUXSnfYECuiZLxBWDF2YQ2G8bszmeuxvJKD16LCsR36FjeG7LYYauCApgeVj5x1D84etreB",
  "key7": "4cQsz9pX2DnS3iPWJncLdQnphABejrc8Ge2fMF73tVyXpQsXgGQ9ZcYxBynfMXBbycafZ6E9oYHSTCJj3nh4j3Kt",
  "key8": "2ZH6EyUYwtix9zT9213K1PiVC47JabZXuVrVAa7P4h33NDMwyWRVRwrEswmsbnXVQ1qsGHogMhQ6BijabuzqZJ1c",
  "key9": "23boRM224wQ3ZqN5bjrZXEGjHNLHoVkP3q7y6oXYPQa6RUax5bKgmaceMdXNQLRqC7Qyf6BAvfSFmFgJyrysPnyJ",
  "key10": "32sgVog1Hdx7mxZBDdCvKn8pq1zQqYV2HuVquHAfn9myEa1MahJfsUzEGVfqqmZJLaw5DLFrPGvGerUnPXhqGiws",
  "key11": "3gD48DTtBxMrj2Yw16oPqdwdY4gRZCtYsRRMGgVqXT3gLRbsJmFPZvRc926Uex2MzMHVjRUeboXyTPcsnyKX2ZAz",
  "key12": "42hTZcMMhD232RsJFMAyXTTjkkFbZdrTQZNMBtyHUP4HiYSHDLJuXip5qhqvXrcL5sLaYLBQKRsfy8rbubHUAGi5",
  "key13": "5Uzidx2PvqwqGGmaaSZ17ihdkZyqELP4StpnXSFvoMsqnKj5scPHX3yGHAMiLyGYHZSSzzervZreURCW1kAFivLm",
  "key14": "Jr6azwBQszHeUWAAHhmJf6om4mGueW6GraJPqXPgqVWRdFNvMbBWGrtCCPx1RmUiqFHt8nQSp5MbEW6rJFXDqXv",
  "key15": "2d2hz41boCEHWo8vzdj1zrM9gjz9X2U8C8oCiJ18NsJcwFatu8RughS56nL6EjntXuCVDvmTHbB5MD53Qh8RcX2D",
  "key16": "47G7pn9hvwviSsnUd7xMq9FHYjtBYcRr8N6aRVq2HejKhBMYDgcSoAEFZtg5mKqPZDWkh43FZ9yo6LM22mpTaJB5",
  "key17": "3HAPMswNxwouqDcf4ZitdxZMN34aNuoRE6BuseirCL3WGhrh8PCmACkq3wAXSxCRwfBQUKERkT2wvd6rDnALqKv1",
  "key18": "BRxi3zrfiavSi8FhqVnM8uGZjwB7ZzoP5ozgGbmfRsvf8AVKH11LjpkarT6HLtNvR3MfqDnHN7MKzSYtB393mza",
  "key19": "3qbFcR5aUBqp1vW3yE1iRQtzMvfCrpHeN1znfRUnTPkYbcqdiMEVennbZjBw4hze7HCGjPhv2gQtCqTDRY28r7C4",
  "key20": "3nPCATYBMnLjtcSQyHYdZ2XDEANLwWfF9KbFNPr4uEH3fKFjiN9LUd8SwNkDFV7FRm1eDVs8D36ekWMLRVaapdj9",
  "key21": "3SmvNENa3eh5mTtjHwqNhRL5gNi4TsqVFPDYjRn5B38XFyh16a4qcpVfxYVXbpp5GfrTCTgERWcYFoJmJQ6upekm",
  "key22": "5CUGPdM76DFM8c1qt4kRczMDeaLqoGfhKjChB7EcNxZgkBBfvsx961yAQb1acLxE2y63qgBFVumRqU5k3gcLXnwd",
  "key23": "5AALG5k4oRHsqept3ipb1o9DCe2iEGEY7uEkvvtCRdYZREfTNxxvYJqfBib8VcDRUEa8KTJgvkNJfFbjZa3z9nSH",
  "key24": "4STGKHtpZmbXdBBvdDpLAPcLWvrbchn5mHfMxjGMB1Gzg3cNBCc4nXQRxxPZoX8Vs5dZrXNtVhrsuFsRp1cj9Qmm",
  "key25": "345ptDwcro67yFWhBzcJAVKA2FHuTXu6MYFE78PwwHbAJ2gHJpGA6aiQyDrgKHGeY8tUEMTLJhVgBxyAyZpvk72V",
  "key26": "2o5B4gtDZHX7pDkHF9uLE4bTFRbCP4JAXM9ats3iU9D96SwKyzQ3REnnE9NDWV4ftSAKgB5Rz7oFP4U3B1BuyYeU",
  "key27": "3sw65CVcHJstvUq3xFXGRSFvZtJnphyToWw5xEjd37ZaQcp8yFEKZiFe8hL5fJ3ZVs4Zezw3Tu6XNFCmkXqRC2yc",
  "key28": "5jM2NL5FcSbgZnghdbjmuDjjUUi5FnbHmRH8X6S3fU7Eyh5Fb2RwHfeaf1npqnFkmxCqJztabfFTWNUymKby1LqL",
  "key29": "4f1MRMmgcHvQc6wpPdDsEkRXK4mLe2g666xQTqkPK21cFZ9WzzJQQPM3WoQ7NBVZYz2aYXaNYjx96KWSzwd5pTFE"
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
