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
    "3DcoNcQeyCH2wmaD9We8GYKQysE7t1w3uPvkYCdXJQU1pRcacZgcZy2aAZMszrJrjvrzxzPnE5ZTvZQPi3aVjtW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nCqR6f3kjSWZRvuWFn9s1VtSC2hYxk59ZUgFNMEggnNGBnfgTT6XCk9L3tM8FiWnZbUc5MorGHopUEaabZcfy2z",
  "key1": "2d2jaHMGEWpoP58DSxgPo17q3KgdpS8bdBpZKGnGKze5CS4RJvhNmppm4LLg3YkNe4RZC1hXk1LYzQe5s4Dmj5cf",
  "key2": "4BwSYy7XK1NDKQAh8sgsVwoa4kfUCdEQCvSjGg5ZjSwQP7Z6DRQcnwuYy8ffWyjxHNf69Nn3xZCz9FVgwJ49scm7",
  "key3": "5oQQY1EMLicjuijkL1MMTUoS6P6G94u9kqQ6w9jAuK1o5F6tQeFRfEwMhjK4aRrnqFtjiSXQK12SMussmAjRdkTm",
  "key4": "NAkrwajhmdni2RnW4dr1urucRTP2DiuRs3DqMXCHab9B5eKEkci2PqZGBkuSmzbVt1358yPtkXsMDWhsUkHt1up",
  "key5": "5WUQGBRTi7dPZGDFkMh8aGLn5Sw5wqgnhaqtvFZJxTxTyAiR36zd6JnT3J7cbJ6HyqUfMd3QdQc6KuWRSTFXia4z",
  "key6": "4tt5FKhMrvscjmtdqixsdkPDCaqXB7Pfue2v6M7YtH1gvnSqk2cVyJGiEKdtEaZMxWSYapRfLTe2o8GnvTqHBTjb",
  "key7": "63JJQcWLLTArkw4ubTQsh1gS39WzC1ZAotqtpKaKEWpB5RpTHg39vxXbn6DyTsgcvMBJzye5ALtDNdHoQw9bsbmN",
  "key8": "kC4rsKntm46aNXCiivhnykomQp3BYnM9HXdAHqwe5du4R2bgCpkdgHD13APZGgZX7Mjb7as7mcoiCTyFLtYkARQ",
  "key9": "3KEmiRwy2RzqmUiZbWG8aGrDaQjgDxa7Wp3vXTnRaA4BgQEDuRq8wo5QARKAgbH5BsTgppsNr7Wg2ZJdAj4Ly2zy",
  "key10": "4dzJZYgKTpCCSzCtEJ1PHmC4ym7Jp1BqoTYw3xpZuyRdtpTC26VSGPVrtzNBTpPdWV38jzRpUWspQRoPfEo7qzqF",
  "key11": "254gFpeQN5NRTD5EWrBSeNzdNdkt3jmaeNigYiGAFEz6uMthr1Qvbn2abuxnnssgSkATeKZJb6Y6xVuMNmZmKiuW",
  "key12": "4JywE4WzS3ywiv2zJgYZTosYuERZBRMyvqai2TqiKcxJUUtv2nP9AVCWxLYdY6VhFaeD363Fp4nf9G4Zq3RVqGg",
  "key13": "WbATVkj3z9H9L6udmAYbJTMmp4Mu3Svy9X4v5HAcgtfJnjysiukEcQ9QLMpU69ugUoqqE2T5axEAEbiHRZgcgq4",
  "key14": "2Gs97HQRCQ95QLe7zGioBPBY1hvsu4CUqg2RLW8ThagopnvKDDnExA7US1tYjEjc9kX9KXSm8EiDFSpBd1exR3Si",
  "key15": "5MV26V7CBqj5FMTAJscNQp17TSHzqM5zVsByVSkX5DNLHtP8mnj1qjGAMhDrWhkFJm6oqhyd1oM4xAqFb1DR7CUm",
  "key16": "2qyJHYZyXBy8mnFGLMSEFGajAw57wX5sCvoh8m7erSBV2oRcJJnnUx8U8ZXB4SiFqEpE8tNeAzZdmNMkMQHUcHs2",
  "key17": "2hRYDGJQ4wEcumnie3ra9cBrLRHQAric4fYR6UuDsAW2acUBvG2SguaMnX3ndZsCNU8LzoaYj9ajeAocZ1LRmgDS",
  "key18": "3cc1zd7MwQu3mQqRXG96rRFfuDpG7VfHqRgqPpdzyoB1TJJWDLs2aEV3ZeX1YaskfAY8eDV97V6sTAzA6DPkUk4N",
  "key19": "5PK138KbG6uQq3K82Ryf16RgxtpUA3DbgSA8EBf2rJHzm89YY9H4fJ8svVfaVmThpncH9rtdFYPj9K1APuxQtdgq",
  "key20": "3YrsKUybo3BeRpK63xs1HKCNfdcr7WX2mfj76yaS5E7ZM4eFhoxEnnyc42RWTdBXqzQ1VLpA38vd39a4VeMaoEE4",
  "key21": "3tpLoigM3gQ7S6dJZLXCksDEs6v4kYBd8Nzdhy9LGAiZ6JKk25DorbiQSZyajU5b7VGPT1d9nYNmGp7b3F2hhMeG",
  "key22": "3f6P4pbndsf7VRngTnMEbwpgg39PZRvac8yPaTZ5FpcQ3bFDEAhRbxxrvJ7AFStBbFUJTf5soZftSqG9PvpdWcMy",
  "key23": "4uKop5Er5Re2ACS9cZqhfKxWjgcUegTA4uFP7mP7QJyDMpxZtKrZ44pUk8jwMajYwFHU5H6Kn4DqdZUczutXqHs2",
  "key24": "sGrTCPCg4HYBndwiKzmXXxv6VkZTUhYcx2aokD4kJfhCwkH7RhuACYLAoWewjwbhM8YhKpVJLnyhrAGhZfvNBHc",
  "key25": "3CHU2cYbV9adLaHSbAQmznha989waLZ9rL3eA3uAjDvqSqKCRJ7jnhTJod88LrHjt3a1XsWt3zYqTFW1JdcVZjrs",
  "key26": "61nb6WbQu7gLJn7CCVp22CiBLLcS2Au3atcUm9ijZpQkTDsGPsg5L1M5vpmgGJVQgkakMuZM2EibxxN9hmBaDXkT",
  "key27": "2M2UrWSGmdS3RUGmMZxUy8tGbVVVd7xw36XVNCEztbXXZmByD1nmsZEUZQDdcud3XvjDporrwV2HBcqW8b1YVYDm",
  "key28": "5Rzv6ivyidNX5RPHAUhC4khHkmn5nX3sGkH8CST5Hh5LUEM4jbkfSEQKBTgdnuswWf9Hv3vJDtKeVMMaRuLNtGDu",
  "key29": "5uWgoa4kvYQCV4ff2j4FrtAunDovoKwUGC8v1yLgRxoCotiBCEywqdqyano8nYJsK93bsj3xSDhSnwLAYgP98RnP",
  "key30": "2kHxJ3GWS9gUQVebe6r75VF4V6ohGc6hLmyEjBESk2RxjSkcfXePepXYiiaQ4iStMpXth2wijX3V4MxXuGQqfzNb",
  "key31": "66ixQjskb1nFJtGNjEZi5dT8ijMQ9q2R8URPaoKN5a1kDADPw7mpzFhRoHxMYTEs1mzSgorFpV5oxJSbrFZDm8W9",
  "key32": "3yKD7nTmRU56gx8jHniV916yQ8sc5spMVZMwdX6fvFsgBS3v5Bc5JeSVgo7r2Xs1cFf9DSpRuWCNgxBxSc6NPVfn",
  "key33": "2QzXF2fcRdoARg7j6jjRh41AdSN58wSNwZUNrt2DK7WCGrKN9XioBe2Bx1mt19L9L5rf5KQo5KE2gCMc4RP8Pn3o",
  "key34": "Nb5gd6YgATJV9hFKYVh6yw6rNiRg32Ewhe6Mn1cmfGftK12Na4grssXK2t77i9pjGaaUYdEc3e63UKmF99nSad1",
  "key35": "2FspRMqDgsenvQ7eYH5QisRbJUUkPM79QqBjSJsBV1CmBYpPr5k8gdrpTumFiftGARABX6kmQcpKYALYwHTdhTuc",
  "key36": "3jGzhXU9bCnGWg41CTTtwJVM3qY9P8gL9SEepDHNrx4yMXwR2WqwH18aHRv1gyYu29uWY28NzD4NKXys9RZJnMXC",
  "key37": "2d76raSYFFDDXd21vcUdM5Pr3XCo1hVQC6fPorKvT7fs8UZrGE3xqLf1n8JXhVYZu5Yg1oJiCs6YzkKJdsuJMTAS",
  "key38": "yuSNXoFyc9suQ3EGtvtYfv8sSXkm8PrDakTe89ZGyjVUpL1hWKQXpkAiwAae7CeeRE6vsZab45PPPJtEupQQxs2",
  "key39": "2pGDuMGx4XFTYaEpzuM33bhkSKnotW5FLm5NtBaXLL1U4eRtpR7LztiUK49kbQP9kyNBxrrAxjJFEVWG3HdZXzvn"
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
