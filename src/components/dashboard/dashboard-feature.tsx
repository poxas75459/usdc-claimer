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
    "38U7UJ9tM7nm82NdJQB5iofWXxMwWistMEgyrE8fL7QfEPieYFoy3yCreajceqG3qybDDfzbbx68c7CFGVpTWnDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KrgmMs5h5QmrSpnCWVqjbrFFv28xdbVXnCR9FvszLQ8V3AWvRqZehpkAyqydKdj12SBxsgrHmevaBS8N8xYbChq",
  "key1": "3aWSwscpqppR6iCf5bDZsd69xARjsSyM7u9mw1VC6SZ8wBt5WZQoxBnnWSyjsAG25qsgUCTAvMLDWWurz2CZUDhE",
  "key2": "45WunhD5ArzbGE9mBpAT9sb6nvxyybXcxS5c6Hv5wUiMHyuJn1ARGSfAU4Lh7K3BjRHyKRzzTHsL3HwMJ1ohZMvN",
  "key3": "8EF7hnxxkDsFncoVh9mP21wDEdwk6FiH1HW1o5FRyiKxr5hvqsEXvWXEV8umBuAYqyPnbSyhLM7rtK9M1ZELiMJ",
  "key4": "42DRYF9VTQJ2DndeLtjBcwH8Wbb5JoxLSBrRdXGTaxoq26CCampJWtNMR2Vt4E3quwv9ZLFdiPr5thw4Uo6fEW6T",
  "key5": "59SPtDYGGuN5FvbprBJANhPkePXEaF7MV7sBpi8B6ZgqPPXeGniVjCuPgooXcRoyYw5KSzb3pNuirhMLkL4oUHbi",
  "key6": "4drM2Z4pGDkQbw5DJVh3SshS95M9CKdv1znEzA4NraYtHkAJK7iNA2Jqy6WtoET2APZnjSy5SwNvDecA7V7RgqPv",
  "key7": "2GwvC4irZ3TzjnVSGqbu1s1ykpET9gcLBbNHq1J1sbSJB7NjEoVUKJq9m3QkY6T87wCEfrRLTgvSvnhfSgjjPihp",
  "key8": "3DDZcDe3o5znyxj6MCRXDVfuMULX7jQB3KsPLjRn4B2RSezenFrHBzVJDpedzf1wuGrawprSktoA8EBQDJ7vh8vk",
  "key9": "2B7avsozkh8GBytfsFUGrSLc6uccqZ21z5mdS7oSaZN5PQrbLwgyFkDT8TCQtcdbwgQXEJiJp2FGY4Nip1z3de3G",
  "key10": "3SgxjozAWGecpU95epLJHyhFW2xgpKMtjyhAHzzTBSAnj4zvte5dfcKSyftzzAhhdDFc3odrrH2uHi3FSjrTwswy",
  "key11": "4BipfnZdPoGRo5EYe7oDAmsQ71TXtFG8ZdLzKddmuApj7ETrDycPqMGrVrRzd9DZRi7ypAYYzN3b9v667FqPbBD7",
  "key12": "55jfgS4nD7oKk6V5tNh3U84t7He7J6pmB2DnrGN73vorcvpHrQeuzKMXpdU1Qqz7DsTywF1aKPhEt5k4VUKQehLj",
  "key13": "3feeWm4rFYTR92Gcb7sEdgfqEiEa5AFXchVAQVTszK3J6kMcRc3ScRJdvQ8Pvg3xTUGvfMXTXLtsh8y8ipKYmC33",
  "key14": "5g5syFefYiSSBbM4AkvSMyxeFuCAZNrkMtZC6ow5FJU4mimLDMsZxbiTvYDKpH376rW45wAQ3g8P2igq3ocD4s5R",
  "key15": "2tHaA2bwwh3kDj6Rd6RC1Mx1QKhEKoXF6GxJzt3TE1ochyTsAUttdvXae91VD8RYL3tspAYgNcweFEdZqdZRVST9",
  "key16": "4M2GR85u44yfGAncDB6HJHwnaJybxZWXQfZu5wGyNmd42sfeFJp8TbNr9X6JSQVQMhf2BKusDHLQjngrWN7UEgns",
  "key17": "2xgejvrN7mXYBBQif9jHWvwTbU12hVF1pFczDNhHFSxbd1nG5EKLEUGtcVdYiFZfAxxSabxo6cAMTDX3VPxYnaFF",
  "key18": "cU4weGcdend6BwRVnEFR42PcatTyeffgqvXhFk7Edhya6GT6uTrxNvBRjFbe5yy2E9UHs5PQAijnEC8hgyoP13A",
  "key19": "5fXb7Wh6VYUNeYLo2bhLUbQcMrfPGEQAGmxR5Gy6mrP62nQtkHk9jpQv2Sxw9oZxjJFMSTALuF1VduYdb6SMgzoa",
  "key20": "2cxV9qWE1UYHof9XdNgCTLHZiaLhbN6VWCCmVUuSyt8icRAdj4r3RxWw1vK6Zvo2wmA6BCTEujAvUWxRRe4FeDuF",
  "key21": "4rX2nDASPgWB3XJJbfk7uPaE11f2PQQjaM9BCskCxZsyPo46BWRVoc72Yao6Z6GjR7n2z72ruDUPeUfp57CbBSVC",
  "key22": "5TktmKW7RCR63abFumekmEZ96AMd18pnpj8mvgcSt6TJWVBucG2ELtyeQB2pHuP12ruSH4Kbk1tBLdHAxVgTLWnE",
  "key23": "4wUE7zagpD9bU3v8Vm5JuES6EHgDLhuVRijZUUkP4iztv6d5KEbjuMGTSYmLzxJkwpjGdaFzfXWPMB8JD4QDpyB9",
  "key24": "5JZswfQLu1JWyZmKAjai2PUKS97cHQeo7dDAKwaY51cwGqznrpzmJUfNcSo8Rb8x8KeLSoQbJ76diVC2DDpdNUka",
  "key25": "3FoBvPiD8SPjJAUJbAweWJuQkXUCnoBwXM55iyjch5vgrgBjgPn14aia1zWvhLkgeZvUYNzQwmEScJFfRrK27xS7",
  "key26": "4L4TEvYtswPKaZhfKdLsZDLjm86acWDznLW6iQCyexitp2bcLUVobV87Kj9eBdXyp2UMErAgQnetGgq3FLxxqbTW",
  "key27": "3Ez8faiCRAVrF3Mmape57ce4GEPhAV8ge9hy6Vyjpnc5GyuyJs2aeeTM1oxTUP93RrmyCQMAuA5qDNQAgBKXdjr9",
  "key28": "5YB3iepbnv6GL8cnhwNA5QCCuWsb6A3A8RxKDg8HcFucU4Lk8JGRWKE2tR8zpLQ4gcJaELgJmzeJrJ3hH6si1Ar5",
  "key29": "3XsMLavm5aZYYeYbC9wSXHdyhHW4Ed36sJLntAoFxpKx7RpDnykUcQyw1NB6dqpCoY2kkE2AGca7yzWYy2b8WCvp",
  "key30": "2NP8fbnCYsBnGGZdUHUQuDh8mm5uEiJ2fVZ9c1Y5eRDDuhjTeZuYiGA6vGugWi9ddiak1SN8PfqU9FunKqxqwENc",
  "key31": "3Xus6qKVSyAkzbtY4DxDtExqBcGbqc2JkVhaKx84NHGnB2J7f6WavjbixNhA4VuScxJWSUwL7aTdXJe6hiiYdL4N",
  "key32": "5GZizv1EKi5qRRpMwF4tVdq72XR43oGo55nV9rXacXg1xin12GbrPAmX6ziemEEmAFovpz5oDhjDTshF16uhEat4",
  "key33": "4EjPfSPUiQ7DMWQgF8uuMvtXn274T9Ld7Ro6x2yuH9cgP6PrdfXkaNTUjbZux4yrEEDppVs9B78DWapZpBLbSdPJ",
  "key34": "2cyhte8TWjrt7thMwPc9ctS8w4nPLZKpwUV8xDJBQ9Xj9aAtHgstY8Cfru54jJYoFj2QF92c2iQGXxN1Q3f8rxja",
  "key35": "5FT2AaduxhzphMwj1U1xUUfY8b6wYf8y2n6iHUD2g4TsTqDZaCFBUKgsP4eFSiEwGWno8ik3Uvfr4qNaQquTqqUq",
  "key36": "2FQ5N197a5ubsUGcrde5q87EnqVZiEcxEe4bDW2QJT3PQ7UsEGuEo1XUqkxwhnaXmTHGC6c3KwwLRcM64Hgj4McW",
  "key37": "2A6cZKxckzfiPnxjvHRYc4dhu2aLMJG8G1mhnaUMDvJTJaRcPgNLgicUquWvENk2vskbUnvSoZjqpGZ1Th2kp5yA",
  "key38": "5DYVFzSXyu9kKcxMn3xsxJZPf96qa7Gd5u2Xk9V8XdA1CwBdhg4mqRtV9Nguqs5HBTXK2VXpLkTA9dw2yy1UUVoV"
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
