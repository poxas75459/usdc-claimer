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
    "5Hrx5T5aGmYexemRgzykXUjzzciJ1Zcr4mWTcbwGYa1JqbW1dMwBiczsHt5QA3onXLhNSLDid3ptMNwU4XMWs5LW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wrYhtqHSWVFmJCGsFyQNDGzx1ogWUwmLmvsJMVws9CzgstQaxiy8NbzbAbrRT49kbEgDWaNy4uvjcxYPEG631L6",
  "key1": "3K8cyD2MME9sgVwsaNjcLVfS6A7qUQxqr2oAuEdrRokwoqhNxcsySowTGJ3RDFKJXfw6FJEiUiLSJtJdxXBasbdt",
  "key2": "2UH9MuB4V3LbAsrrpDqtAnLzaqPQq3NHN1bSW4zMFDjm988zD2HAMqYTHMeL2WDpc7FksQQdusBiN1F2qLiuvdmF",
  "key3": "2LLwSoP47i1f954HSTfA4GBfeTTtNgyi1Wt8ukdiVxYq5Tzgwt6HG2DXg8nm1jcfE6f7b7fUjaNHkotsxrm3UwKr",
  "key4": "4akq5huowxxrxXsgKnoVkJpmsexkd7bntoEyD77SziAzbawfwADRXbT2JTf5UKpSCQcQyJFM677CnUKPBiFMBxAZ",
  "key5": "4HUNsfNaGFXS7XKHyyymnUPHsMK5nspZDfGZ5Dk84ChqNEQqmjPYLd34jPjZAeMhjBPnZT1c2wWkUD2gccDchojN",
  "key6": "3FSCYLfq5hjgEej3pnkQKZ3HRVt51j7yYPtrgVXefJ3GsKKofYBQ8Fv7GMyhyAw2hAD2wfTyiXDW3Jv3vTka96V9",
  "key7": "2bP4JG7JCwwJtzjFYosXCVhWHWTobdWTgUSQhSygmrhZbbSp6SczNTnQX17uAM3Z8RN2hsq3CvmQbCeeoLTEUjNo",
  "key8": "PipGpLAnjfEYBbd5D5SpHmXgiaKTvo4njNzunxW1K29mtyWDzt48HgSJJWST9FvwVVTwvf4G8paEN2Gk5hoSWF6",
  "key9": "2dcxajAacSeNJaqosjNAxcA82FnWuNvEXcq6gLKBV7zhkeGPjDeXGjMwntnUB2536c429AWnT3kWSDmFZX5Gxkh2",
  "key10": "4Uq3vAgN1zMKY5wWhfR2a4UEnPhGgfwvGNfNBDaR3eEwSYaCXdEdLWubDfNiLo7FK7bQdcNhdKvXVE1um8QHeUNq",
  "key11": "3mCPQuQA6Sjo81nRoYLXWzNGQbQBjLdUbeokoLwSrL9Ycj3hCgsk6F7zFN1se1TduHK8mjJhKrXGzSoFa5rKzHYZ",
  "key12": "3B69UKdNeNd38bzSGN6RE8xhQy8Ep7CJQ46cztPXV7K3Yr5KRKn9r8Lwy636Rcq9PK7pEVTiWMQcb9DbowXVJqFA",
  "key13": "39y5LRSkFigM7wEXFcibErCcUTcGQg1rL6LCiLzWzKgbbn8HMTGmFJcTn8UHGS25NcGXsZSTGdNf9RTw6a1ffH8y",
  "key14": "67Yuzm45mg4FvkwWjxeikMZ7wya1pXkEsvbfWGyFTrgNd3tduqg2eoyG4GkGZcQMDNr6LJzBW5n5TTJcNhMhdGPB",
  "key15": "62DtM2h5WtW78vcvjvug4WrZUaeW4nMFGPhsCfgbRSY9ESQVN7MVr8oVeghQKJ1bx4jnhR1YDh6YzgfjvUi48PNe",
  "key16": "3dexma6noKdmDDjneVjXuRWR27kWdyxYKAHcxQ3P9qN6pAQ8Wg9G79Er99oy1A7wcZoAUkHimDQYLhs8wbQBL6Y5",
  "key17": "3PFcjwXvtNqbL2wdF7BNkNm8Jc3ZGg2JdmYRT59ms9qUNo8gGnjn8yomVJJYhtwd4QjMQgWE8jCbJxf8K8kMwjZC",
  "key18": "5KsBR8iswdqVwDif3gyBUWuSh7RhY7aPYECwqmL8pDXyRzXEVn4ZKJrf1vYWLH1TaD9tJe5ofNjQ6sy49T9kKU6f",
  "key19": "6V9AqrT8QemrtbYjxryAfzUF3GKxoZf8roTDVmQnPuvm6M7v7zKm4dufSmV71UBAnixcqy1XehrBSRY41QR2mvN",
  "key20": "5qtCjeqBRCw2Cjp4BsKcKpAyTdCStzK5PoKXwJkTMC6txjr7VboSExnA3YHLMjUL4qaqqqHrpwZNC2xQn1TMsKJE",
  "key21": "56Ne8bDNRhFnjUkBg7B4R8UFBgRTS4QSDmz7MG3787b5PdEeMmeWwvmjyRGyD73efjJSJbatJyQfVncC9t8UwUKf",
  "key22": "4UQYyDeW36AugWE6UnfZRdunr2Z1TuTDcUZMWd6n3AsjXFeTnreb11zzWMCSnS131JDLRNN9onYnitjHZT929apW",
  "key23": "2zHjpv1MddkvTYkK6ZA2ccq5bpvyLdv3ej2hB68YiDD3Ai5yduqfTYJAdLV4zHPf6XhTgzfY4G1ZZCJcP3NsvdLq",
  "key24": "GaJDwWmu8zzxzVTSFAMePEvDP5L7b4QKGDcvTMFDXpKfFr4CsMANmBpDsoBheHUgwhSQ2HxNuYs7La1YNSA9DfP",
  "key25": "2h3FcqGNmZgdHVMs5S1taa1mUvmxZvSgKqTqCYMbUTY85g7pbbH8a9whwXHQmS2gGFk698EeT87Ui2sLKLoFkkue",
  "key26": "39DYV38dfndhespffDfMrgphEEHK1fUWzvYj2Rsr3cFdQ9M82FtYWvwoJiSDZen3Z6xZCdEQqsLbg8qiGxTzQbzP",
  "key27": "2bcxshwmT5gHeymTo8D3LGSjwNucFr3DQWzTiPMsKPtfePcXZBQLkesaD2D1ejg3tPnNKXqqDSFbALiczUbAeDHt",
  "key28": "4rXgJpiw3gJJnkTUoXT7Rznk6uz6Jw6nf5JrS6cMWS3zn4ZRqmqRufLDp6xuRVNYZV6vuzpr6mhvGsbn5K1e9sF",
  "key29": "Z66XmMQx5DsCjvNB27MtNM6ah3Sjbf15TTzx9TtYYF5ZW8d5qn4Vf8x5L4roen2YE9dqgDCyjvuUibW9msTrS8t",
  "key30": "2Dad8hrnG29dje4iErP5GKLgeGsTbc6KkmDXSH9VnY8g7s1vS5RA5Tj8Gzj3VnrkBFmHPK3sXfjnqYYc5QxUbR2i",
  "key31": "8p3nzj7LNtThVdvoibtCc3imJoq6p8gdhAiXeWrY8JWZQJfz1LbmXGAna3jTGU5ZArCFkTStmJiCD97tqAoZpw7",
  "key32": "5egCccVHJkEjPKtK41AzWTKqZDJvPGiq4uPgVvA4HWNuLGhZ1EXg8pG4YTW7drJNs3kqNP9NumB1gJ5chV3QMVfr",
  "key33": "4WfER6qfuSekp3vBBwfTpNudqu3KWXCrC6knJrcvtsR6BDUrUiWaQWbud3dE9134LSPQdvYeHBaZ6LXHZYtkx5pc",
  "key34": "59UDVtQygA5GTHSVq6YNijj7szrpN9HYuBdxczoX1SwM1r2gXSB72X4cUwEU6tysiYgTFEyqTQD3KUtnSeS3Dpez",
  "key35": "jrGm4Zd4rnKVfci6ohSXQzqEV4FxXGo7PmNrB9eQ5hNzxeQcMcX1UBqQfeZ6dobUNj5qxYYfqFJKAC3oGKYK3LZ",
  "key36": "4pSfi29vTfRk4ygApuwDKdqMF2VcEHU5hDjN65vZ8xikFz5GfgLumCNHnCqZ4EWZKeo1Wnb9BGKgDCxJu83gWzBT",
  "key37": "zewjzZjXLjn8y4FuJhu86t6afhbjkFh2QxYMSQ9ndZQDCXJJPryXzuonjvHKsaLbcTaGEkzuJ6aEQrXXZSpqqGt",
  "key38": "2QaU4m1fVg8vrmCZ7saeHgphsYuHiEC8v3bSabpRMcWxU2PTsaqpqKRWGKbaVBKLkMJoqk7GTpjTg1MJGxVG7JS5"
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
