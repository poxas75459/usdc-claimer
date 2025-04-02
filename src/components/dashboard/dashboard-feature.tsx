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
    "3X8wqmtsT576z5rmrqSNUAjLgEFEMhKG3agieVHgf7g81cYQUC1ucCNw5RYEGxiwnz1Hkf4HMjHUPUdMmDSWDSdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pQ8pgGcr36g8B9g7HtHDQFj2L8fL8fzeFcP1YkdAuMgDoEzittErCBW2WKdaBCuqMirCy98KbXw3kW92jpUHhZR",
  "key1": "2yDX2YfzndPN4iNSnVDzQH7U2HL6nNHu9W4ZTWtGPsbKEvn9Q2PvLdjUDMgxhYXjvcuAH35yihkDPdHw3v2eEXXP",
  "key2": "4eSzqgK18s7dnKEGhywT9SwC3Mdv2EbLUaAkYwAx8SmE5aSq6YkggT9JVeR4Kokbay6HQow1DpTo5JsgqgLEGwn8",
  "key3": "47YUprbzt7hpWSbpd6EeqYUR8HYnFeSEXwadBdjKUv9p1d522v6Y1hTWst9CBxR8DariZnBKGNpnpmuhiAbdaNBi",
  "key4": "kT8U8kM8GgpcMjaseWaviWjcmV7TNcY8yjnR9QMMcNR6F2jVkyWzB6HiuZUZeUhyxG5tqU41bcVpw7oN8CtebTs",
  "key5": "3CUkL5ZXTpJLAMzzqiobEhMc5xneMrJUiXVobJ2gTfuhin4JWfibG5RstgF7J9H4rQyZWGxRW24f54oFvFk7jbrK",
  "key6": "5imq39XswE9MuRGZAdEiqsJXKb8cVEjcjMKrZm3KXm2kkn43B73SSCQEGSuVzGz7SgQD8aax83rhy6nS2GcWUkF4",
  "key7": "zDgnqAUhntpVnQd7ZSU4JoB1vuKtwjk49iDcgz4LrPzc4ksELRBvZVukgnt39k7yPsdC8LjQin5onG2veK6YXr1",
  "key8": "3JnB6xv537zmscSdF8c9Uw3C2kbkXGq7yvaxcoSMH3AjAtoK7VUYos7aceLNX2rYA55i1yTXeeJAt7nhChpq8KQg",
  "key9": "2uVDQYCcw88iQo1cJRho5SxHyiPJLoE6BWStgXyUPGZuwpFQXUbSrdx3P97NNxGxDqL2SsANQ5dXK7GgrvzxXTBH",
  "key10": "5FhLe5P2WU5ETchFmsJXC1zxr14JDtqCbkDL5GUQ2M1sUPFVdSXGp1914G3pjobTC1dgqViGgQaE53rq1QxwK2bN",
  "key11": "eaSEGHahfPCXXgeCz6TqqhiPBscBdbYLmecd5oQTPJjmt4THWBnWSefRZCd4wPPBsvi7dPMy5FVvJGn54PhznhB",
  "key12": "4Zn8AkWmd5gcx5P9HcFJrMDDJPMtKDP5H1TH41hBp4S9eomw571huJKzj9nKAm5VsPcPVkdWey71VKrKVeeATc94",
  "key13": "5UCjHu43qzuBv23UHEiM8BC3x2NGNJbb8e7pqfRp6VJQyQDfdccdo9EXUEuXjKsWtznC317qX1qcsnC1oJHZqk2f",
  "key14": "5DnUC1FPRF1p13RayzqLE4CR6vKTq2EDy7Nha3pN7GvJyhg9tAfUBEoxgMjo8np7JC4NDnCFdSM3U2ZfUxHTBQNJ",
  "key15": "5vKemPWRmd4Kozrx4AokkLFgLamnMomLrYNpWZZwgB2i3ywE4tzFvNZf2xYtjqUeAwQ2efB2NBZSjjJbbCVHgdie",
  "key16": "3Dtyvd8kMdM7uLATFr3vhbHDXd4abeYgWs7FCCvQfSYuD5sZVVhxqR6ntF6L3R2fZT6GCo2zzMRjZDgNKmt5CvCr",
  "key17": "3BtBqeA3gJVZmP5VsnpMtXJk1kK58xQymSo1q4sa8CUepDyUJZ5EHZhsAK2bWvvKSTAWSkAFipq6PSYzaurLnC8n",
  "key18": "2jf9jaxSJgCYu2M2gQ7Wk85T5v2ksVXQShtgQBmQBHTBcsGWLuC9XAHb7QuV7sY7JA7t4GTJMtutAfbjpkjSeYwh",
  "key19": "2tDKQMGKeoMjF9Jk9zvMQngpc3hPyeGJUWw3gmdRoyRm225r7cm4BoBiXQzK3BMefERS9d1UvJAT6arKA5TVFZaJ",
  "key20": "GzbCNxobg3ucPUrD2wKpPQqBnhTUumK4pHGmmgwSPqFkCSCfxo2kyzagEzeBHrht6MRSecX4qffLAHHbZFndpoH",
  "key21": "gwTEBCrTm13GmXVjogRcmDTdxUrUS7jiPoZd9iYFA6tKXiF4AetN3cKMiQfADgUKDepqsdqZHT9vkz7VAPNnBJw",
  "key22": "5PXvxDrGdCeLcMg7eTiCNk8Ly4qAG3X4EaPzoUv47Kr6YQuH74K56QCFLUiQxST7ePXVcPznidgYUKhnoXR8TS5M",
  "key23": "5WcHgZcgrvgBAzZVirYsNK5bfLzMJMnc5fxbadSRMAEXrC9qgWZJR3RYes2EoPCXst1osCtyehcPoXEmgz7kMTZZ",
  "key24": "3aRgGZWz4sZcK9ug1ASmaSJbhxu5YtPwWRqx153iueEnn7oZmT2MxEsWC6hWU3iefkJywWCRJUxsQmdcBEdF96KF",
  "key25": "64u6oANLj2bKJJypAU1h1CikXd3SBFakPDtjszKfouPCQtDRjDQBExGYmi1sELTrbM4qmWPRh7H3VYWFzVJ7Fq4u",
  "key26": "4zJsRzrKAVy87UuyGMwWWmoWyfXuAALdkSts6VTMY1FT9ULQnnbT1NhEsHUK2pUuZ9QXLZ6EM2dy4eocoonMJGLe",
  "key27": "2mwghczdqq8s3e4YeLYNys5awX3jyabC32p31Ka3EjpMPCucjYFJ1pW7yVsQAWGX6QeNihNKHxpeyFNS26HVBKft",
  "key28": "57jJLZ9CGNjaMNa5ZzeoydFbi5NXZ7CLt5or8UWUW29Skzwth8iCQCjSsXALg7XKu6JwH4En6ABreKw6jeZWsgNX",
  "key29": "41EKb65aUUJiDgHSLqvwmP5zb7ysSvX2UJMdXjxJhsm8pUfS126vubeYfkBhPs8JyieaqxpHKcujr1KEz37CA8bx",
  "key30": "U2rGbXNwL1mrkg2xkYphYgATuDrqP151hnevAg6ND7Mh95GGefS4J9PmstE8zZUVMNLsx3pERu6gu5tsXtH6MMe",
  "key31": "PSdutoNP1f79VWC8aTwxwsazSkeiNt5UBobgMVijRwZSCgyicGGDf7RkMek3XWwnVP9eyzQcecJqNC7wg6Vx1pn",
  "key32": "2CKwQsZRFe13yNvKaY7ECmZkEFXjrNrytJKfjt1fkgKnW1DM71L8yyC96Hx1bbPDHSe646yUwKdAcZCQYbt9Tm38",
  "key33": "3ZgLjtzRyE94Yf1bwpsZH91feEky8YKk8g7HXRijGdfrfoX8PKf3WFqHAJj8LaARscomKijDSWbMYkb363Ct4Uts",
  "key34": "2Rfox18JBRrHC5UnKSPqZnBP66b8ZUWg4Wc51gfPZEkhm8ndoAPLGw1YUE2yhTtKuiFLiU5gceLRPfKYvFYHpfNW",
  "key35": "4S4CAaCdC8JQvHwRggL3M9nSNjqGTRn6N5CkjvFJ1sdXsK1x9EAzU1r9B734iGZu4dBCzCFZVD1aTxXMqBaibpTK",
  "key36": "dkqXtcu9Fx2ubjcxYyESUze5nTB1dA3Dv7fgCnDSjYvWdVu2okeaebrvCKEHAmAg42bNkx99M1PmgqtNd8Sy7sS",
  "key37": "5nGQPy2SV9brwnVVPZjLtsGA4HvkcRMPfb3PJ8oz2xAqeDPLhzUXWjTAS7bApE7mXdUskFefzuy1nPYVhqacG6Nr",
  "key38": "4yyB7idBa2QDtRBEKrp8kaXPbtMFGtWvhTJGxrCvQfB1n7TaQE9Ur35UG5X5VRX5TLrGQ2Qcw5F25ex6nmTDNsS9",
  "key39": "61TvmYbxU51FTu8VeMjQKtt4KUaVAUTHC9d9xd9h4uoDx3k9VZ1o4gYuuJh9eY24yWMAVspMKxbVxFKonSCEmKWB",
  "key40": "5Tobs8qgVFZ1aPSTtJ3iJpngBfAzd8DaD9DtDQne2MhGc4wQVt7MmXPyv4FvmwqzmatvKYD5EpmMAgtmuMzVJ469",
  "key41": "2kMk2cn4dhEiZZ5rrrGu66k1BxJWsjEnDWXACBWPSBthGhWiTbeVYVuk3UUrMszbcRUMFbZv5iQJgMTRge9gb28R",
  "key42": "euhStBmhZMzhwMZdso8HbNQpi73XtcQFbhhhKcpaThHGbpTHjnysKi8SS9N25cX9nKpjU3oXGg4XqV633d7joT7",
  "key43": "5K7KZWCh8iSZjWAe4J7me3PTv3pdrq3RVXvzZ4vyEh18AKyLdeZdFVrn75wyenUUc4MVE4bFuHDpRGdVbLsXz2is",
  "key44": "2nxaqB9JsFcWKvRkiwb8FXvC9fx88AUFZE6AYTEQhL2VQJBuyN2ni1W2pYPDm1Z6u9rBeG8qzsis323H161v9vwk",
  "key45": "3NQqF2PVaaFk7RrvwrDVhdMPjbYDCYERN8zAe57m17BP8NPWTsQYUE9DUfDtTrZTQ133i6Sahug7HHoPnerKiroh",
  "key46": "4o52bgJBjDEQJZMbj7Q6yzZz7PmtRpCXUmJPDeuCVErft1ZKRRRijN2SMVBxJuA7D5N2EjgUas2GiSdeJhJwF6SA"
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
