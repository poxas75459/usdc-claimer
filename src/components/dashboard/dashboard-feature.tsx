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
    "Rc65sFjATv3qWMUNcmcBJj7AdyFUDuCxyEuAVB5ntbAcN91EnBSoXdwyooR8awsRAYZx1KQuENFpoeaR3b8bvGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZtkxbdYz1JAui8tEH8E6ksPmzhXnawV6NLChsVEWk5wf5csZvAbPQkKRC3PKkVUR8GvLgfB9zdEsFXHPJzSCgf2",
  "key1": "5imuJGCchotyWjD2UZQcfmDRWN4tb1w2s4nbkD5dQivxCxCsqpns59DpVHk4cn9P612D4c2UdQZLiGmU4gc13zQM",
  "key2": "fCL22PpbXR12kZi3cL9YmDYVniPbU2W33skedMixhh2VWhsgKVoLFwRT88LNHpMiAwQqKmCKt4v6yzvb3od5qqw",
  "key3": "5JPFACKttfrMMbP4zAFxTAikKrbyVNYT1oXQ2LzBF5ZXmkwBT6SR1Zbg57FAaDr9oYUU96wdG3FJThTA62BmZLsU",
  "key4": "3GABLDkPF7pJJEXsvsysQoFogs2WpFFYTtebLuto5krkUJaHwptRqC4jy24efSKJsE9hXe4auajCtH9yBvy5joaM",
  "key5": "2gGSmEq7v1uoSSbTYBgMXTsMeLRTd22e784T2nXsPyf3SnKbUjnG1GjWu5jRxrc46Ezc6ZQo8hFwGJtMNwx2snHF",
  "key6": "4fb6Xj29Gs1Z45TxQ8oTBmSjPZUxGAnSuTB1CqYKhcygiyGXRuruNyGUmpPF4N6i9Q2GD2kPCQJ5ogVyWW8WAn7r",
  "key7": "4kQckNG3it3p4Ajxhy7vgQrdCyxqfbwu8cTjFGjr2oAg6bqzvqFbjjxF1RJDvBPB1jx1gpwosgJWHKd515kbF1hV",
  "key8": "3KmoUuf19rauDX3ZndkBRZAt6KwMKTytBjcQyMqFrDZBWcnaFXAGwm9W81VgvczeqJ5CeiMxMYhsqGLLioPdJWkb",
  "key9": "47h1Eq5cKX1iWzecwaZhMviYM24BTGMCiACvapiLsgJsUf86Vh8SiJdFP1cuqKEfcANiXjyUpbr8Kqdx1JhWsBQV",
  "key10": "4cbFzmej12XVhbKwqD3bDq1YKsvVqSHTpaSScWGnovi8dy2SqxaztWFaXV8zFdMFzwhj8AcRHFk6oKLTeMbryAxA",
  "key11": "2vscpHjeoFYN1kimHS1r6JoPvvCqCmemxehq42QWChXcxCbGRnK84qkj2iekbGoTwf4qCNrepeuH47De3TweQedA",
  "key12": "2H2g3xZ3CMLbgW34YgUqnNX2bLYZCRncBSUbFuFFgFZFtuCyHGsRtcqT28rRbjRWUH8dko1AFpdSJpht3ctjmg5q",
  "key13": "yw8rHjF1vzbbE24hbHYaZiQZjMZy1jP2LEj4qf9fFCz7iYZEv1hnsA9EE5bcMvVsa9vRfBzYJ11w7VnK6pZenAf",
  "key14": "jskaBrGNVZjhcpKRK7Gx8VYCNnJp42YgvmAB19x5YJhPoVHyWacVnqhs84novJCSpS5DWL8prrkHH5J2YCikxza",
  "key15": "4A754zbGqwEbisAo1QAQbq7ftqLQiJQaSpR579qYaXrVHhF1P8mtAAgdxWB5AjYyykbeAU3SAp7FwiGwVuXHxWDJ",
  "key16": "AGbpKVoscLM7AVKuiVQ7HgZSjvwjNcaPjrDqJ9nJxEfr9z5dpnEvXgrXB55PAzY6eGtdiLhwYw7UBa1ffmCijij",
  "key17": "3Hqpgz2jKVkLadWh2ucXzizKfPZ6hEiMN2bYhHdxgzLVDJCsffLuUfdzhZhN1xBBviYQg4cmaDYuX9gzKU3Q5tAp",
  "key18": "5JNazDAYQrJ7x3rv7RhQDPgb7ASmxS5DUS8FALUdSapHuAXXYqQVE1oKJLmF5DKRkCWWsYohvswnrznA4mGYXkKL",
  "key19": "3GYZpxaajdZ8joWMkzuGLbtVvrSTUZ2eqNv5m7edLzou28JhEYwAcLxWDbLipMPeqBdQFCzGTE1NTbS8QsBnbLJT",
  "key20": "4pKaoLfLA1aToHYJEGbZyTDyivJRVBxGAZLT2WihThMJX5X9ALUbpQRrLRjmwywCrDhHXykQLg5b8NvrSkFynjg7",
  "key21": "242sqAcxtY9t3Fx6znTmXjXBLK3rsJGLF8ob9ExE2YVzNsBLR5avwE4xQMNPhLzwr2iphaYXWHQvEzfofDP7M1Ly",
  "key22": "62gZK5JYEjWedk6LRQiukSkmhEj9o4cHRA2de96vNvFT7e8tnVRwyE66C25J5fsKqWcTbNQLgfpeFefUMvg5M3wB",
  "key23": "31AMwSa4hY3hmZQu6mrZmNaGFesCHUijQqaMBGuppq2CTsbp8MJGi9KvUctdjFiU3gEsa8QNjHW2Ti3HbPcW5AF3",
  "key24": "5uyWG6o8rNS8xtkrn6eGoREJGvg28UvXWNkDcBJhLRXuLDzpnXdEquxKhhTHdANivopc6D4TKLQ79c2aShE5Hcec",
  "key25": "mzuSAPVMLyNJditoyaZ9xgSc72ux6MVY1i1Gfh1TJVdS3rbCrGWfuwZ2EoacoGh9jNZEix6XVN87sePTNJjMcQX",
  "key26": "2hJpxrueBKUpmQEH7SACGgP1dL7MgW3ZfcLwPfGJgryD57aZXeMVYcNgk9bYdbWTavZi6Fd5ZwBna1VUx1rENLmV",
  "key27": "4BSDDGzMvDGFh3WkHtjzXMzRBPMoMJs9Tpk7EEfMv3JZtY979tKvp9F3QixFeiP4Bk48z5ZZ6L9VWDdDGnWRJ9j5",
  "key28": "4kNq6e6xdifmcKD2cNpk9oMFxhtf2AqZEG9ZV37ZX9B9eYxL6df5wRPYNs6tqPYYXnFKYiinVLXFowppyo3DX8tx",
  "key29": "2zjVbUqVk8V8Wvuom8BCnGf546Lr4bzsjuFR6QachXDDdszhvP915P2XMcmNB7KrrdkfPw1KqDBm9vppxj1BXyZw",
  "key30": "28efcFgbPJb6zXm5iXicu4evinqNdHYvwEKgonSvJGvkBXj3iVgjSy5pfQg5zBzzYFaMh7uJdG4LbKKCGs318vp1",
  "key31": "3LqYeJjPs2ccnjRCGV978Fosns17BrQnjUTDFMWofLBzmHTu1PsBGYgKY7tteBqqXH7dekj5SjZVSQBPiqoE3AJu",
  "key32": "5fCAbpoQwvsGEsCW6fSuWGTJHcn5MLfs8CBd2cb8Gnf5fvsZUBd2VjLt9qbhzF7qHmheaoR8pZaK69pd3vZJKBTW",
  "key33": "4Vyz77gmjNdxZD8PvVfxEgGJCpSSA9fQesihDfV63HM58XDbG444nC2Yt2q7sxhNpV8xLFEu6Pb6um9urthD2WeM",
  "key34": "5J7QCihT3rrGzmMNUnmmYWEg8K6JD9Rc53WPBqdERq979U25F4xKL9VQzKg4TGgJekezubZ9kcZ1oDGj6QAg5ikV",
  "key35": "3izPYXciaHv4Syr8ayG8yjjDG298ax2AHRu6YK7kiPeFqAbMB2nDkPk3joZL3P17pt3oHRL3w9ATze6XAeCV1Ap3",
  "key36": "3uSfFDLkkha9BTYassPUfAhP2sZCJZAE7uEGB1mtXc2gVhs27PwX6u4XoooJz5JwwxtDkyy5gY1w9EAKmCG8TyaC",
  "key37": "5ZYwtiWjsrZmjT38xZLSqPDApytPJtovR7CsrZZmEUBHLcjkgrewwz35raaa7B288miHNhZ3hmTawNadtxWS6opy",
  "key38": "VzXoVHfk6Uvsh2QFZ576kyfNmz7biYtWWWE8RkF6iPMuwmycfAzdWGibgKruLQ9wNGv1YQr1FoxnMyagpSUCA1J",
  "key39": "38Jwx7cU8CjBp3o5C7bnsBpSYCmxUf6NnBixKb9mdtxQnCJWoWct5P1P13DdKaFkP3AL5T4omU9iL7r7cLnLnH33",
  "key40": "49VFbvD5SVEyJfy69sgyaBwBnxJUbnq1B6bLCc8sUWQVkysLoomu3AZY3GpQiY5u4hEEznyZJe8PuckQ98CGjjT6",
  "key41": "5brkmD6hQK36YWzkNHoSNMosggqfr5wUC4bzFXa4J17aunQtjEQvAzzH8JnQnZYLLbt8MEAeNDbixaLo2QE2DKWZ",
  "key42": "3GcP1MuVzXcEB8g5sZcegjEw9VxNKzWQexmgcUYqpU5AFKTz5GsP1ZtzyuApYA8wYnGJFEpQ7Gm9iNfFmsLLq85U",
  "key43": "285uTicubcg52y9nEHbNQQAFS3YMwHFpqgVrQDqT79b28MidUvg4NErcEhQxWhrVnCQdjabX2gG374cAXXbFSavs"
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
