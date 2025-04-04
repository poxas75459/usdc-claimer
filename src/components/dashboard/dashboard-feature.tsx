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
    "BfmM8y1Cuba5pqnTStg48EACAGzQzLMNJCjJLscahyVvjVWRCWQEx9aPBbyFJ57z2MZ4WSwp1szbL5hNZYpYMdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wogUiNmhJ7LoqGHsXWE5kJQceLobJ4g76hs5b3NSckBZe2wq8fFq4dYtN1jaNK2fTTzAkKpnpAoPWLYw4eA2XGS",
  "key1": "4XAcrmWrHNvzDBYwin4fB8m1RfMK23quZhqMpepGFjqpe5ja7qkWvy7VpnbPffDzVes2h32twd4HaxP9gEVUxciq",
  "key2": "3uUMcWCSSfXg6E35gWbwYZZ3UriAC6VZVhCsGyQrK8NDg2b8zqkg7w82LxKgfKuxbeYZFRpqhksy42xYPt88LTqc",
  "key3": "o1HW2n8H2QPkoJnjzfHbe2dBeyXkbXQBsgVekdBHzzxoE2TvJtz7YYTGpedMSmCV7o4c2NHiaJZiyfY42fGXsDT",
  "key4": "4K3rPj2dVKUzNPMqfHRpqJdSJDnbtFgGdLjLb68r2mFrN7pLwek7hNXr9W8wZP6R4bboAXEEtH4kYp3WzmQJumYr",
  "key5": "jNrQ99MoGrJL1po1HMMw3AXtWPSfGJaeUDeA7Cgi23YXJV8FzdzzXBbr74qoCmAzEyfhUXSe6oH4NziAYA5dYqK",
  "key6": "5tHxkEvWRAFQsZ2ZREAmhDKJfQqgzF2YHrr2FJoiYbrN3M8vtzyBMLWA7wDRv5eXRA76G5ynokH7vxiDUTrYpZe3",
  "key7": "4iwAAYnKJabVFvYxsSaiD72ECbjk7p4izyLUKAAK55kf9mMmqHinYJUJnN4S4h2dSwZcGrFmpeXCm63PCnnSCEkj",
  "key8": "yJQpfDjWUfeX9SduTSyDLFsvbAxZnKjZcKbsJuvJcWVWa4GMT7WKj883EjVYqjEjvH6WqaUhETX74dGTftYa3rs",
  "key9": "3UH8TfVkWb8HQy1AYnp3H3NDUerVq7BwLqGPzF9kMnpb4nxHGXdpqAFad8kvoFxFofm8PiTZEVgUrUpopijB6yo2",
  "key10": "295kXygzjhmBiV7yVsEsYkfsTdLC5D3V2zpGtF4RR3njcXKu6ogrsQTpxiyo48o8YhDDmDvVrfRPK2Wp4ugLjkxL",
  "key11": "4cn9nw4wogNVAcMyESfLMFabZXsqnQKZogbSY4cYFTcz4T6U7RVS3nYwezvJ4KBy6thJAwNdWN68WPGp57jFCSJT",
  "key12": "4DkpV8KYXA2e3prKabNDDNys9PiQxwQuhLrGpjZgszpnksT4kZaFfTYR2mH6GfLT1ooGqZQmuEdcNjkPQAzuxbkf",
  "key13": "54iFhpmTQ2QCw5neCVJfuQ7K1KtHD2Bfk83rq9gJVr15hQxbM7DEJf1nGCVfXFgiRAXTnGy3e5Juci5ELEZMx9QC",
  "key14": "4TYR7H1a6TMCjVAWG3ozfhA9iS5r1Q39VwxqUVmvYtmkWzrkuQ4o8hNg5BpS7uWa7MhaV7h365m5wrDd3Nz2Mfpu",
  "key15": "4RKoH28sMpdgpmBztQbUTEd8oKNdW55ZFsLzAWwivKXHJgwf61xa4gPj5ijWxUR5PYY5CKD8NnxffLnM5nQF6jpv",
  "key16": "3D7boHBAVPZUGs42fBtEbmQ11ytBnU7pNmtdh5EuVS6X2JLvmWqAL3uVmLRK32Sw48J3FsGqsuV1C9dMxRiGZqV4",
  "key17": "Sn4291RbhkpxhoaCaErWFoW6vEH77j358n3o7b8kMSYKMJ6fMYweh87Mwd8WQ92tUg9aKae3iFCDAVe1BzPKAzf",
  "key18": "qeNA8VJZ68UAtN7as8KANtRFJwLAVZDcZJ8Dbq9JgRVvq3LpZg3MYkfrGeddn5Dqb2uuW8oMfD8M5w6kPCRmEZd",
  "key19": "5xXFtEkQt69vpib9HdwtCv4UHnokDAKTQrvnZnEJXMMzEf8yqoWFqUMkjy1eVoGYGqm6KdPTa1dAo4oJF2nWxsnH",
  "key20": "3Tta7cyXLH2t1tZv6iM3Hw48xS9wnxbKavqgggscSnsYncsLny9nWGtQKy3P3T1QUD9fm3piv6Gg4mugF8oaCGPi",
  "key21": "43yHWWGnri6dVUVBbXEKo8L9qMhUiQevVirUCAFFUKBqTa3wT3yoCg5oJ2UGVKwyH77RgF1rfzth9xVkERmiW7aF",
  "key22": "3fkwkC4BCjuWpTtyTLGM6KBa9xxZrRUTJT6bRBv1UAzJqUxi9mSZmEEwCajR2JnaVFspdkKmVS43sGgSFZtn7fPA",
  "key23": "THdSjLgJxABwvLm1y51fdeEKNP2DzqBNFhVFTTi7JVrooG8ZUpb9aV7WrfSDubVxcH3Mmv4raGB53hUpWcfEo7w",
  "key24": "Mh68b1Rr7HWd5JQhACyu9gTZ9y6EV579GB3rDtsYKdVu6M2PVePKSq8Sg2YWcHCQFZLckawkvutw5eJY3mtqJx1",
  "key25": "4gLKCG9Bf6iohqbhBqMNgBmkKqFicjxuMhNoLVgYo6kngpbvZqiEftFXZvVTprwkdA18G2k1r6v2DaXkPYAiHzD8",
  "key26": "ST1hj96iW6XCJFZWvuPwVS9HHrH6UB6TBLzkh3ohiReWUD6cGKfRxNkLbtTuvXc25abgoAe3k2aARjzeLxAYDnn",
  "key27": "3XcL8PTfM3hzcUW9XSRgRpWneEaiy4ZASwPkH7eiidv2og8HmCGq8gKAHeVLQCeqirHMRnbtCdMu2j1SY6t6w2um",
  "key28": "3j5AAsGERJLVS9rSDyTpEPvGbpfXwwp29mhntAeEkJMEGVM4HZi1PCutFpppSgPGVzd99aUTqyymEgpF9Ts3jwem",
  "key29": "45AK3LvXMs4UAKFFabEMEYiEF1bb6G4wdDgKZszCqhspcaPW7FVfZfvGYjDZMzLZAgFrA9mPfdP6X6yWa71k4W8Q",
  "key30": "2aoGoFUv2Tri3oStv3qrEPNZ1iLqSpGLk4r2Hh389EppPzZa3DuY3ZpPPWBR1AeC8PhQBZJG4SKmmz9sfJBfRH9U",
  "key31": "5GGxnktpWzAFAiEAqni4253cy6TFFmWYF2SXwz1beSmEcwtjFaDb28zMBhmw5scG4WPZHxif6rRciW4QBYMbyjbX",
  "key32": "59jdhCEgkwuqC1aGHirKZg3XqQNiuR3sjocPGTq594NQx5eJXLqyYxXKQZcnkX7wSmKQjVBzuxnyAMAuBeYXbeqW"
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
