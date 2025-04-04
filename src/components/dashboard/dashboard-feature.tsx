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
    "5Lcu8vE8B19caUuxxUKXBJXxkdivocD5AcToXt3g6cEEHBzPNNSEicVCuAoFdvhtF6Sit9ARyupGxPrzSaU8ze5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Skj3jY7mgWhGoQrjSGX9MFUdjRpJqpGmFsAoctBJAe6tyv1ct9ePHA9q3tYPp3aUwqaCZXf8NE8zEHpBjwSzzVy",
  "key1": "LCrFemvE4VpxNdofqmeg7QysgFkq2SmzfdGCzZ7drqHzTmq9KaRTkcvzc9ZYm9UkMBVaPpwjnPeo5BZf1F467g6",
  "key2": "3yuFFDkPMR3tdtoeJugK7xBYmnoMCVB4BH1H7hUaDnAv1YzwsXUG5yJhL7iWooqdkjRVxtaHd8EGN9S9NfKLaQ9d",
  "key3": "SRFWJKypu4Cx7eG89XVXvptHARtrcitMHMrifqEpeMDGXeaZg7HPQTa1pGGgZR8dcWGcj7EAL7pisQpaFRcwRD1",
  "key4": "5KfmzkpVk629vgvQWy3fUb4qHNy7tzd9fLJhe2GhmbCNQaHBmjtNxCx6i16tK8H5DSzD4KUgm6fmbV3h1YCR1s9R",
  "key5": "5r7GFBYfY5MPMwTQM1h52R2GvyAHKuxzDizyBzCjfkQaxz6JZtmACddbz86VV7UhtfVTMRfQyHjQDk2XvnJTeVQJ",
  "key6": "t6TnpQfSbUtEACdtrKYbNKJjFSUL7S4KGnnuX7CoLfjyXQtwTqD5ctCGx4fxun8KQBhw67HGNxAeCo3rGAuuH9i",
  "key7": "4mTUyaRyisRkXUvFgQTDokvQN3ya6Gfnd5MAui29nHXFXvSfPgjyWgEEJtWoSvX8vLZNNx2Jjr3b3EXWYdRLHmeQ",
  "key8": "5XfHxeLFM9DXEAuhQZLRhtVyyhuZ2U4VZvY2PZcPpeeH7NQmyhzCRdKRS1hAQ5NJp1WHdgUKzozmJBQcuRnVa72L",
  "key9": "2XopPC5ixjGE8bAwhVEikPKxUsASgnTY1CKdJqEYbD5sn5Lf8T8qxDPZD2aEBF36jir1LBAsqx8FP5ep2456LicL",
  "key10": "3Z5LaQTH6ZBNa6S4BUyP2tFKAPZYUHFNZ4NhvqEmpYXsF7PTF5n7oJgMxNoJptemJo1wNcTzpweqxsEhPcz4nYm9",
  "key11": "5pnT5GkKGg78yAb1woKQfDRtWAcinM6Dv4vQZPkTzTEqph8mWMcT6f2nbYgkp5ve7WDZuUdZPsduHFmeGtRKYiYa",
  "key12": "4k3E8rQmQ5LmKP4jVFDSnCH4MEDtg1fqsz7jxhMnGkf2vwUb5QkfMR5Mpb1LrUvbkDQFN5NLgexEiwzTtBr5QcPL",
  "key13": "3Vcs8HgX5hTWAz5NKMeBtg7hAqtBhgSSHqPb2LioiDGw54nbLFBWJ1525NBtZNspGX4diguz1enTfWmSTHynrNMJ",
  "key14": "5WxAeWzyC1qqaNfAt5A39MwRCy9kqvWjwxSEqYi6fdh1d4eFsSJg526nD2ksgRDqrg2wozezNQEvjbKMjWsQ2yMe",
  "key15": "5ynU1vfnVRJdgAjVGPZpiSanSsnqGWWyeRv1pzZjsWumAQ8wUuAhEhA12T9qhKjXTZtpgE8HFxbkAvQ4rjLL8TZF",
  "key16": "3Kqw4EhRxmF8daKWE5c1v15H7hANbnYau5HmeSwcPgfD7PYUK1mV1gnL7u6E5kwf8HZdK2Q2G85usiAeANhvkG1g",
  "key17": "6P7rsB7nM1jaCR2Ne7iqV5nE51E7bfwuCQ6PsMKGnC2THuzMKXMMEyHGrurdCF1VvZ1dUGfqBb13eYQBVam3Gqt",
  "key18": "M67JQY1egcD8MMzQsDL2b65VgGKEVG3wJrZLtfN11SjVxYEcDAcfDupAgt5JQnSVN3XsiKSwMnq7f13b2hAyJFU",
  "key19": "2B2eFaXcGBpsKnQa4xVmLQdRuXwBRtUZ7uXuhs149rMcbsrMfoQ7BzJkeevUyZe1Drw6Dugw66WtK3HxjaBJtMuU",
  "key20": "3HWcBUhqk8YiTpUC6P6j3t4XcvKn3RTuPCpvGkDQXZG8WTthGAnMRWLRU2AGLcwMDvo2TaHQ8PUoxTRHvUCtJBMq",
  "key21": "4EyGjJzuQJFtdAUyvwgNryntT7gf4PGZCFRty65PrkjhNfANWMuJc6peX3L5YCQY47r2WXKeKx1dZwsFWY4rLeJ8",
  "key22": "3cMQw9Kroix29MjdLWGYK6WMBqCVx6S5U7vngtffo5aLUoaXMy6yAxR9PDGTyKZgjFFNTKtTck9XgND7hEgk5Ghg",
  "key23": "2Lfec8p2KC5xxJSeuDRwLvhtAWnEp4CKxk9Y4NhqM1vgSe3wZTSczJgqesYBeA1YygphG7PfmS6HkbSbFdWsZL8i",
  "key24": "28LGoz7e4tpg7KYCYmf7kxUgrtYma7G9dKHNDqx3Jmt5k9KCvrR9nsw6zFPtZjVP3pWW75Jey2Rq3A7G35mCCemq",
  "key25": "wYUTnt8dHkwzVycADoTJ2CsiQ3WyDyYyzdJCtuGCgZRe4mWgYUfxZbZ83jpm23LrGrHM9C99C7FMNeht6kyV469",
  "key26": "37jbhfd4NZmJMFcNhywmXqpFepkFtSwzhdNRcE2KXCKzskdxEfe6AQ92J9PtC6LztGxFHF4VHL4U6WuXPFUEKYnC",
  "key27": "5i599SLKnXiYWYQ87cSUQN7e5bh8KyS9URxAsksCV3MfaVqWpRRS4xgPZ8WztR5iuAsBS858no1ncUzNKMeiNUVR",
  "key28": "2MTnSyRHLqKcHoEUgLDQCRyfCAP69WGD9ruAT9PEiMaWzY27SxD8LDJoUewGK32Ljh22pk9RM4w92ZxfG3f14su2",
  "key29": "3sH3A9f2WF8wvF9ejzAQGbKAfGxwkFDazZJzq3ZYmcJL3i5bDkXQFxrw2y7RNq3eX6NnH2umjb5X54LHrohr4PoQ",
  "key30": "4veBcJiiNGfwxX9qYw7jXEeZXhF7GpXwEBWiNi3N5cesPTnrRc5sXX7RKjkws8coK4MMsBFiVb9kbESRnvX5ZmHB",
  "key31": "64B5VnM4s1CxWm2Tb8rJ39xEBPNZNEMQ1LHfjWF1BFGLsR9Z8KtUyf8Lrg8fc8QKyk2VaKNqYG3x2SkWLUXMqTk1",
  "key32": "4kKRT3D2DzWfXKeXHrL82U53u1RqHPm2hKms65Zcg4vGvZYn79RSk37HHiJJLhJeHipVSBVTJcg3EgETDQQcfAvA",
  "key33": "4NTjgGJjBmLiMuwm7hwMHQSxrVqMfsda1Ce7pJLzFqbGUcqiLJxbQ1PjTLpZe9KC1UwyNQYhHZdmk7Zci183qA2G",
  "key34": "ZdrDMMSzY4JFM3ooTeS6ApDxsbeXput7Gf2hTMo9SN17HmuCbbFSfq3jV9nkxd3kQx7mWaE8cVEpe4UkDJr7Rfn",
  "key35": "4kPLucHHEENo3WXpNBRfvZodRE7d4quLz8nXiZka26cSZRNmkpuPtJLn9t82CcK9sRteGk7EN7uky9mwa3j9Rczr",
  "key36": "2g5bJvhcCoqMG3u9B99718mWCBEYXFiRmkEKnog9KLzbARd21FPs1MYvYvkX5XgKNsf3KQJENQ1wL322VW9aLk2n",
  "key37": "4YKzA3U85L92KKcynrVExE1bAT4w2DhntsaBHKjJPmedMKRu2deUTLJnExPJibYAisnEd9ymVZryqVBRsmDHwh7Q",
  "key38": "BLry3k4hg5d9dE9ZnYDx9DaU5UzyovvcZhzAEqewC6P4UUoiyT8P1obdwkHmhYU31GA1MTWpHpGY55JQKPEes9i",
  "key39": "NKtXywugz1Q2DG5EW4GejHT6fT19CiMpuEMEjdQvnmd3TdEBmQ87cUPMVeLDpwNNB6a76qHU32iZs79nUr4iH1x"
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
