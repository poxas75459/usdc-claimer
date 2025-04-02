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
    "2hYgfwL4bGQYYDhVuLXTxKp9V8uR5TwRvYnioH9v2e9F8aPapfWzyzkbdqUnYGZc2VsU9PXjiHtXT45VVVZ2q9uX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fgRwf4S5NNPuog51D7n7bCg4fWZp3Bq9ua6W8TW756uMtJicvsyQFdcsGhSNXsU6AdeEQUG61nkk6TdPz55YUsR",
  "key1": "5vuJTrDPB476FDW2RAYSFhYzt2NG47ZaczjT5DZB3osCcUtHW5xuHKWoQdmHc7pMMv1g41XMk9Bm8F4SwwuG1nKV",
  "key2": "neJCe11uV5rRFd33fxDjQ7QYvSW729uYdD9EPrgUa3TEoCJ3WW5a4AZEj6WT9vvYZAF2UcCsHpwFNstWBV1WLs2",
  "key3": "5njvvzUKFe2YW1mQAWGbucgTBKQzzUM2JmpYrvpGJDReMZ4fNayHHDFF3Wv7afN3DVPGwW36A13EJm4EzuRBKGNc",
  "key4": "4LbEHZKvSb4csNuCRwNdzV1NhX7PJDCJxJcbAZ8NzXNKutGm49MoEJYjTPEcNZ5ZuNDunxxQBPLAz1ZBrkaaY7G9",
  "key5": "KJ4yxkesSnsLCERX4LRSGYK2njaKhnJCpTV7NMbMZZGGihTdRoNYT8TsKV1LBvkBb9P4TH3r7rG5QamhJqA12R1",
  "key6": "5U2XC3aEU8p2dqpdU5eTzM6EM5DrTrkLWC32Bbf8hFdc1WkY7i99DqE9AuxEUHqpuuxakActn2FwQvmY7wngyFyD",
  "key7": "5kY1pH7WbsFy97iFHwPvnntiXLbyPo6pmgSVX6WPpZ57ayGYT3JwEeNRHxVL87cYrixpeJw2mjNBJsNHpK6bZ6Qr",
  "key8": "3BXZHpAJQ8gnfCSgzvXdU7GkMrQZv65TkjuyE9nqUMWyUBZ3tWquGj71hwwxuEx2djZqR2pmhaFLDiLpB4NwRZtR",
  "key9": "4p4YwNAygg6YacsVXa1EKCMAA5w7MSXrVqYsFWmtS99We5YR3h1ndWvaTjvsysjUCu5wV5vT2xz1UCwZMfu16m44",
  "key10": "5QwDYM9v6gvgtKchgqBxKrgqn95XpMVBXaCT9k11wr7RwYEsXzXRcd6QKK2LWPgmm4cz6tQLtJv294PBGgG79NDu",
  "key11": "Te8ngDMRaFixj4GJKuGWYevUTcnRgvboiYVjJy6aj7S4uwxYqurJXkMmhEs5QLSzDipuGj1i5dMAnnWf9uJuMzy",
  "key12": "61ojNaENwQBvNWXAJd1rViFV7cHZW77DuzQhTHmG6eDX9hBFdGCoyo1a3TRmebo4ouwrpcFEDfjBmPXvodsJuDyQ",
  "key13": "3Wz6uq5FokQXsWLa5NFjyAes3Bi1FzDAhykvMT8m56ae6P4zY23LXnp4LsQdAj9tWDzecJN4DGiuKTe4ak4BJa7a",
  "key14": "5JFf8gnjbaJ8vkBoAkyDkmhGUYMNoTpxmmZGNr87aEcyK4ETcxFXJbTvnxcTX916GFGWvzJUxkLmsqBUtaubny3w",
  "key15": "3LqQDDytpfGPSXeGvuECiowGiqcb2QXm3bLMyKow19ciuR9rknbkQ9ZyNxQF5g92cLafrPruaR7Nn2rXrvMXu2qV",
  "key16": "5qosvk629EfAuXuHfyfieRsds55KXW1ZcZK9YmGGZUCJX7MzecmRJgmQEBnunYkm18ioZGmUYzgZWfaeiPmPPDhj",
  "key17": "29SqtHkKsQodwU653BqYZNHt3suTc2aDpzzHiaeCvbWpZcrdSMrSuraQj4thHJJBAdKkUfLwxSef1HESvVEdtvRd",
  "key18": "4tRYFrAobJ32sA5Dq8guhU2XdFp5scD1pAXNnShCWZSv4RvQmzGhUc7335oixwTySnPb8xNsEYK28yAzYcAWEzqJ",
  "key19": "2Ccm1aE1scuspTC3jm75dCquJp3tpbM8iAboJMzGBjGKaySYQAxLDTAFLKwcwFhZxHQeyRmsYC5Bt7E6ouo5qq3Z",
  "key20": "3c6hEMMekey9zGTikSScS1jHqV9E8o6Pu3QbnnDoEK118frKeCCbMBxouB6cHRb1sdrUo9FFG6ohjzrUkWJHGUtL",
  "key21": "2GJCEvmbCuQAGBMPzErgDMp56QaubeqbFUTFeZWRnuQBeMugmP94hBG2xBaKnko9883CUdBLsYnU9VkL2crN3Wip",
  "key22": "4TM1MNBzZcoetDCEMv3Kj5EXeu55EMmzkGHfHzmUMshHRm4TJWpwBQQPMYrMyu1qWABWHBEqhUPkdNVpGyCm4Q5c",
  "key23": "2n3jT6U1h6KTgCriVJ8jfmGCNzQUqwr4F6vd8fEW311CwuGS1Cey7KafGULnmGEfbKa5uaZ3dE43faMUwwJiAyGp",
  "key24": "4ndcuCYB7FriUFiPn6iFWQjSqVkH3zjJ8GDVihTTHVsqX2jo9AUPVLVT6CoEjSjduNbfZvASDDxTXBACQVXeBFoA",
  "key25": "4YphWy7hC19soxFP7SehbtYoKKka9qD1t75p59m4ykjJEv2jR1hNj4aAzENfsd5ckquvUfojHWvBp5jSDt12yKCj",
  "key26": "3dpStHaUYGaaTimxWnsRaYR9qvXvAgebWMGp32j67zSUaymt5yreJysVxeSBrndGgGycezCqLZu3Gbvw8C9nKx94",
  "key27": "shjMzsamzeF1FCMQHueyLocM2oMjGqRp79T3cnCEHzHXh6B569TmfgBfmNB483gsje4KcRiCxnB1ZyiGwUk8QSp",
  "key28": "3mrLbyrrzNTtwxKbrYdB1CtzPrWAkWAyGYi9hhkWYXRauQbbGsLkwHwGUp96sqXkNCLnKohWnLAtQKAtjtqEVi8G",
  "key29": "2K8Va22YgvwBwA8Hjtres1oUXskBEmyd3kCa8tfpLWQtkUnSA8eyakZzzYTrSF9tWk7Ttc17AeqxuXi121qJUuLn"
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
