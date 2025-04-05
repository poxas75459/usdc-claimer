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
    "469E6aR4hmnEs5F8n5AYz6mC6T3x7yX9sgFV7PUd9sN6jJAf9m8SdebhY35PYYZdt7dCJwqTk47JwUthKcVVgoaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oozaHxhZB5XmKrRGTmbXfWvzwZwZ92mu85VAoGAi5395pJWdbioskCnvhWCtmgSL1qES3GkJ5h7dcfERMDhoEjV",
  "key1": "58o6gZtceCeDG1QVyJs5zUoaEoET46i19eUwePqLxMeRcVmQH86kSfTRKj9QRPZnznuBdKXQc8RXAFoTG9Jtx8UM",
  "key2": "5w4Jr6XEipodNoVrmTb52nf94weQSpPdzFgW9uBPb1Pwnco2FxiUrPRDZF6J6KHdMkLVERBpdAAo8vX7a5dZcAXS",
  "key3": "Hvcfk4CBA86y2vYzpEYoyF1u727emZ865kBYPHeiWjrQiojWSS5BpZiQ4RQyHTPH4jZf155BZiQERvL19WZCHMA",
  "key4": "2KWA4zXrYoSRfEWxXqPfdYiTr7fgjbiEQ81GgcqSfXFbG6bYhrH8DeMyeGwEZeHH8Lasn7GhArcYjdWWWLQ2u4U9",
  "key5": "4tKByaBdNkqCynzKigBvKzuYPnUeEBDMMbuVzWBiKe6sjiPF9xdGzi9UpoAAPDptq4cTTZMyampKr82Tfbf7u5Ma",
  "key6": "3ovBb219k9TmEWaanKg9JfAY7JZsZwAZsKWJxZywXPkC8JeJ76aP6KwaoheXro6J91pYq5ofoZWwregJUftMLsx7",
  "key7": "5iijApcvDsQxi2aoyBNncz1ZT1j5BYc8zah7LGQmjrVsQJLU4PPqFCrYeamrTrffAujBgaH85GHvFdS4ygX2yg42",
  "key8": "4hWtfc18tbQdhMTHiiNnQPZKUGD5oQuosar91TajMTKA54cg8F1p3ZKJg92tw2m6wgKFjkZJjEyZuw8cGUQXXUFo",
  "key9": "2ezcdJVCmcGFg37eY5nKetxutNe3wsgwNwTNA6ULRERXWD4Hy4B3A7vE6UcPfGeqeHyjSNqfLSBhrFmhnLVCDAre",
  "key10": "3oCaBXYKWNMbQhRQx4Piukai5fdEmiTZ3o4B5XSoHxSxNYZCCUmKRmSaAARkbvb2S88ogPugPLs3yWYBf3bHTF7b",
  "key11": "51NBMcjrhegpPQcgC3pvgG6AZCQBUkxCtvmTStwNN6PMFZp16pnvL7s2nDSrWDkU6zpdS5zdJLhxFNkcL59Bpgnb",
  "key12": "3a8vZbvrd4up5U3SyCfrqRQX2rMUJpmdhckaWn9FYuBu94YuAm4CJvU7ihgNrmuX7YGuy6CW63Stxzxx5wZshCNY",
  "key13": "5Aq2Tc5oYbUqnKsgFzH8r2QdfkexyM4ZUT2YX6sz6ksDwvwHCRsC2Z6pNzeAZewQchrYsHybEaeNZu1HtiPUxF5A",
  "key14": "272ZEQiSHFj7wNjj2JwVjbQwvjCog11spdHKxRDW2gTmAJj9GFptk4pTysfExDXibKUcLqRH6SW3JNLdryzDwgUH",
  "key15": "3xYHR7t6TdLVPeSFsCjCbC7Vo8M12y2tSC5brewhdL2heLxbZZYouovGxrnHfz4ogRw8NNxiki9Y7XZDUgbvezJP",
  "key16": "4NJzTMzC5VWfDbsXx8Lrd5Vy8A7GPjMadeNUuULU773pgZEou6E5yfg9zRgiRhmsJ37fTnQa9AxzhqecsQn2HaAe",
  "key17": "4RX8muBbkrE7kRi9wVpRv7QGBA8dRtBQx9uwBzf2NUNcBByhwN7WR55ux514GjPbfQctSFkwxPyLcnm5TSUpyJ9y",
  "key18": "67nhm3dA9z1Hw5rZGBHbWJAg3tikyx3J5C2Poj8wdwaQ7ph1wxDTj9w5oMZiu2AwgAJKcR8qpskJwsoXxPA3HDRt",
  "key19": "4TLP3i3U8tez9L8infxJdLY6iXmnEGGGbYN9FgDSUddURtFdNLVrHRohs3Qwi93tbb9RVqVLMnB4vvp8YfGVGzqt",
  "key20": "4KffoLRMLZ4ueyYysvuQzKon48jPCMUxM5NjQ3SPAWGEgYHsbEXn6ipRHh7L4spjQxjmh34QTuitgiYtTSaG256z",
  "key21": "3QrqgWzcbC6NEEZwfkWD86ADxsvkLLZfDLfnY6umW5fSVZX6qM5VWAt2E5La5P8EsWxaTdm3JyZDLqkg3Zas1JeH",
  "key22": "WN7hFUHLrMs3ptNybcBU3V9hbVWW9nK6SuHKvQRSsPmFPqspEz5mHSxU9BpQC59ohgM8STYQ9C6sb5thCoV6Mub",
  "key23": "287jiwswoLrrHfF2MrCuNJv331R2uj66dnzocUJDFnTVh1vMTcBjTuNrc4RSzNcGGEC89hxWM7iEKKeHnhgtVQ8i",
  "key24": "2JuJu729exzu7Tahnmt6GgDYFVjWSs8hs8uuxUq7iD4QeZXpskzxR8ZN5Dofx8Z3HDC4oETarZ47sAttRtGuk6S9",
  "key25": "5awd4C5vzbGgjxdcd15nDeTi8vZqxYruJAYcp3ZBS2VKQ6Kj2jvztkFo1Xy4Gt9kmqTQARcDvYmAqxSNhyNNRbEU",
  "key26": "2QWky8G5XNBtNvQSqqwPK2CsUCnBZ8u43CzF9WCG8iUeTzXGB8q1iWcqBUUUdJ8zqC4KTZR6PpC6RUAZCDsJsUXS",
  "key27": "21JwXc8vwtnwXz2AyBBg6HpM6CESrbxRuNNz5AsCp7CvWK35xdDkr2v9xo3vhnRGv8tui8RoedGZMRxNmAfHmDh2",
  "key28": "2CFd1iz2fsLSr8JtDAiCvtNdvrCJZaEyjXpXtMgVVcVNSrPAxwSrT5Kp1hGYaNnAPQX67bu8WEhrZWsM9pPzeFer",
  "key29": "2PiVjTVd9vNRMxNUoVuj7h6MmdBug9xeRXWDZ1Lk2wpvurYnkvs5MhGtAQ1x2sf6s5k2erCpdRNRC9MQm3bSzWyn",
  "key30": "472fNZGBqQfhX31FfvHTU9LPP3XiemXWY1JQKNz4mT5NvkVzSienrhJpDjVc7Da9ZuqoY73gCmtATuNwu7c9MXDC",
  "key31": "BXD7durzd9mVtPsmvgsWasaD6Ga8kKNRrASoQ5qawVBhqLX6FnUCZa75qBogAzt2HoSL7Qp6EjSxkUFnPrQnnbL",
  "key32": "46bGvhQrBQ14VjUzduu6VwzXv445Murp6SA4jBxwMApQoT6viDtN52WusfULHMK9ScUiwiBFybJWMgHtPfybuJAX",
  "key33": "2eYP1sUZ3q5xaDbt6kuaBiFA4xgCjbbg8uCp3vwfQXCv6Yf9tTBtAzTdGHo6xYAQ9FcSWxyjyGvcZpbTijguECQ",
  "key34": "5AAYWtEGxmfAceAT3YjAJyjN8FN6UfYdzW9LjagemqmjPGYqZ1s7GNbtXSfWokAdGtDxGfTXzTLfgJmDVUmyapUL",
  "key35": "38zbLa6ZyswR24NNZwjFE1eGFh1JWwAhXxiTyY1du7nHFoVUrGR8vrihrzWBortPTGgMq5NokDAsEejqXLNUEzmM",
  "key36": "3M9oavHprxLX2NwhTFw1yfDhEbrgNeS4FGUpu33AZpDDYngws91AXE6VD5RweCM4e6DwzyK438qLN5YqfS5y2wif",
  "key37": "57VJwjeEEPYygLeFjrzCZWnhMdXqgbfE7bQf3w8bBUBT3FxrsPAr8ESTP8EKGuKpU7qoWhGMPsTsX28V1Ffun2TZ"
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
