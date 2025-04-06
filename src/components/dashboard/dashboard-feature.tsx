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
    "2YjUMkPxZ5cLyyXgytxScp9KDXdNSBGp7dTLJZRhodA4wDk1KJnrmdt3JASWm6CYGUTJAC6UihoB47sijJYMDLjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EnZC8Hgpq3K6q39DajXT3VR7bvrvxoWPckN5KpxezM9qYbt5Sjr1EDrBxWe3apXYQM1wtinDncXH7KGi1xDvkz5",
  "key1": "48jeaAeeU7JaRZ7sMn8y4KGEQJxjomQb8t9EyM2HSBvdNvsshMdfnBwN8TSxUC29KkE2SGt7JaAVS7aEHuPWNfTv",
  "key2": "2c72aNm9Eesw3JysSdRQR9u3KTYgFTmmFBsQUPoGY1xGjypJJhHiMyQnj4WGYNFH91RpgQrupfZLVTWwzvz73fpq",
  "key3": "4b5nZEDcNsKAa9i44zrRY1FrNpJTDj2f7frARmu23sVRBAqbq2rNmMyasTJpSkpSPyNsT8JdV7xgcR7nNP3E9J5U",
  "key4": "37AsGyTYLqGrrwnpYdeKY6j8dKBHA1RbUT5kuMHz6PWZizodiwjVku15JmgEAoycVrxrPj9qePjwVY1BoTKM38XR",
  "key5": "tgG8wyLHP6Pam1S3YKkNkjFMmhijRMDqDGgNq8Fcg9Liv2ggaz5m1jSgPGcwCTroGi8HsWwynXxX1g3PpffifYG",
  "key6": "2DQg8VyWcP5tZfkRH8MUssU4r6WUBhT77nRcZ8zw5hSmTP3VSijx47DAXjLmLjSKjvBWbVfF6YZdKhRKL6jeZzis",
  "key7": "628QtXP6mNWnwfePqoumxuTfABAEgN8CdPPFbZSSiGgV5PNv73xyZHwJT8pJ7ZZNuVyKRkJ3bGHUS37mzNziBcrp",
  "key8": "2dq3CTpuXeriXQ3vvBbTJgTfi8VgRhsxyF6Az9itR7khn9rmWt9hxs93QEJyULuzvoJ9KMze9kfmbhCHT3rDpGN4",
  "key9": "PHAgS2g4q35op53TY96gpVFXoHt49eEvj516Pp469kXmR39cRoUTRNXMAURj4YS6ALus7bUgpY64XCJ43e1LAHX",
  "key10": "4LSR192BTmtMUdLLjcaVPgNgQ5XoDqjqJLmGmaAukjiC6e8QNBXg9aSCYMmE8iPaQfv8dn5yFLT6jeV2M4wCJ6XU",
  "key11": "32PJEwfrE79irBKqUvcmVd3vkdYWMXTEq6dUhXg9eg1A8xC1RCCjv9AWLfZmi8ZsB1YVgN5UtUd6SXE5CaHY1zCU",
  "key12": "9eHgCepFJwBMdNcD8obUPGkCwiwLx4ZxFV4nAy38Aq9ucTvYDqf9v8Wu9cjZtCKHpKtDrpxPSCua1HVRNe6kQng",
  "key13": "2J4zSDpr1sCBvxzMvtWhfNaak8FPmPZBJdooDj8EpVHW3yo7EEU42y9atpYLkwxF2mC9tzeohiHtUYqE8eChFrh7",
  "key14": "5AJ2wUuWtEvCZnKH3cnoY6wpHRC2dhDJaQG3vydK4PCy3iyubaSgVUFRkfRAyqKu14bncieHdqtAoShDgSV1Kp1w",
  "key15": "4bqMShwJK3JWwFe5wjHGCgZoBi3JMzHhpNHGRWVUQNYxfAXH4XUmbX6rp9YYYEhSXagNid13zHkN7bTFyqW7f1SQ",
  "key16": "2TTx8JJQSVTTnPXnGMu7iARqqB5jfPWApcdmS1zQo4vUa6HsiHmhGmYSk537iE3vJS3ssMr7u3jciu3NUb2dr6WP",
  "key17": "rEWiZDLYWUkbXpkKDy8DLoKuoz9cXrwJV16HMGfy5YDR3iXfhgys2qmx6g3rnUwCQ5UqNRcyimhXzaCHohGcidi",
  "key18": "2uer9Y4U89S8Q5HpmXEgkPp1w1UqvnqxGgD12tYfTUdzjLqkTUpPG3JKTNYHXHnECrqfYc6xad3BHvZYgXT4pSQ9",
  "key19": "2oh6pKcNuNUJ3pHGs3dTPWCzXkYQTUTDGzxutb4enTgSiHDHFiCoarsb1X2KEm5uJxVEysig2nrnuQjwv2yGaLom",
  "key20": "5NTBgvQJrwqLnRmHQ9oAvtyMPKdr7HUCGgi3BhWVP7g1L4t5zTBWFjoTAgZpqhtCu2govb6wGqnjYP96G7Pna7E6",
  "key21": "tRgx6ewedrnN4WUuQ8QNAxJafTmFfywtqSWP6g2aXeLZk8VE5Ykn8qDoM5dMDkTLnm3Vyt8819rrKNgH4jVgQDM",
  "key22": "3pSvZRDCrdPrPFrrD6Z8kFaUiRjPRA1JqqtsqiLreWFbdoiFetsP4AvR7n7GbJ7kSPFVdrowWKL9eg58X64roVMA",
  "key23": "294Jq4tRJDkRR3mygQvFg3HBHq7Z4TifdNXDnLC6MDkka5yKvUzorYt48y2rWGDjViVUqLkzVvL5tXS4dYbtTwMi",
  "key24": "2PQBfiS4t129Z2wwzpftFSYWUDnbMXapBKDUg2iVZv1yho2mx1YavPDvrcr8XR1CqbAZeywEbbNhemyUFQQGCghy",
  "key25": "paU3NtYHq8MF3WqqKRuRkXLrjAmbXNg3HvZ37j2mhCgsPH4uFRsz6UbwVj7M3duPUZy12dzBnsk7ZP8bp7K1HsY",
  "key26": "3H4nFXwhz6Uemcn3nfDtGcRZgFeNPmKuSh5rTbrwTQjhuidqZUi8QMYhzvwMpU1vx3dSowEomYTob25yqFAi2Y6N",
  "key27": "3xuBfDeCNAUJH4CzZ9wFCQW9HEV5Z8Gg2sd2EFgqGGdDvXzAeHRPeRyZGfw61MgjNeLJfzWTbU8YFANNvYY9MsPx",
  "key28": "3cLTcDivF79t8wphLpcG9hQCisMLCZMsYm7syH3sbCqh9CXyRBcsc24HHduQxSU6h5T7UCMdC4c8CLZn9ZZFa4Z3",
  "key29": "2sz5Qn5brhZv2HaskT3mLHUdNMZYGS5U5N4qaVELMFHYx44xY7nG3yJXSaUezpwvLW7QpnDKgiswH7a2EXWn4oiW",
  "key30": "5rxkgH3J7qS1RisMYwDvRrXYVqWA9HbqWjtSAutSvVCDGZEyjLoVJpcsVGG1TvDgaF2ZGQFqHzihHo5TVtW9zTnW",
  "key31": "5pLLEyHfEe9Bm3LxounSLc4Zgquw2Rs3e7Vip4gKSrn5jMS9H9kbB3WXMQjjrcteqY2QUHg8bazkAjAp8vsNitmZ",
  "key32": "5S2ExDbQbEu4wRpYinTbYjJvhhVpEQ7tK5Su1xcV7g9gQf4thwxRT1dJGJ81oJhxm36nEHRBQBkeTYGbB9pySrhe",
  "key33": "28DfPs4vvoQJSGE1SuiotP6DqnYfy1UZiYtDrMQQPcrHEyEe9WKUdoHwMfL8mdy5uabaN1AvF7coMnAWD632Ybed",
  "key34": "2fNuz8rF1ux6dARtvqoptRBSJxkDBWufWdvxk43P2ZkLg9R9fLvkJF1r8jdxoGg4DfBs7n3DDF5jHZn7cNujwd9w",
  "key35": "2UmVAnXaAmoUwaGHS5DS1nRRkfDMf7EQ9unuFoWHaNmzH7x5sFbTnNb17nuYPgbxFUso6Bd2ZpFjcYp4gZ3NFe5y",
  "key36": "34koXdW6dojNqpWKSppCpH7Nk1wrE5hcvSfcV7SGwNpK53Fq4KnDd2wQCPd4xkmAgEm2JvCs5DrXz9TKsEkxHc9y",
  "key37": "3WZEN5byVXwAyTF2RzqnK46wdDMNT2xVLR9EYRmVCV35ucaTBTsYPuBPPeCyQaLtNzu535yu6nqdw83Z6NTd8fD5",
  "key38": "4AVU7SsmPAAU1XPRc1WdYLqaz49Sme27hvVNuszrd68q5tv8xdxUXY9yNxqh2QT7nuR7VwSBqSPy6eNaw3HxSaBd",
  "key39": "397rkq4XBLDBwFHCLtrTDVRn1og5d3ehBb6mGxzeU1CMVYuRyf7PjWp5cJA3G6m2a8n5UJTDwYYMoAxS8u5wmgDi",
  "key40": "2oMDXcpaS7rAh4iHSW36w4hLeAxiF2utbYMzSDu8HPdF54Moi7Ti1fRWEQzcUcaWsvfF48ptjtmF2DKkpYPzNfaM",
  "key41": "AafEyy2KTYU5e4EVW17LMFWHMfCBPevqsEWVU7U792E9yGA8jE1EbnBAyPSU5wjETRx8km4wbkLKo9U4p83mQFS",
  "key42": "3q7VFMRbNSsiXDqoK33zyQ2QpgEkQ71X7Wt5Lq9a8F5imbiV5qkA75sQ6sptZFiB8XTC3n7GJ1WxBkVk37zmeGmD",
  "key43": "4T3SHr1yoUWtvg36pq4NkVPcbtMkpvkXBBKzxL7LusBGTEc8EsCpXnDDt6gSH32o4h7FPQCVEmeACHw6zXfsxt7f",
  "key44": "3dqW1rE4fRkuiRz5UXvuqePqRj8ADv1bwEfXqEzJ2d1N1Rpji1DiF8Y9HMJZnSCVAJTRG3aYTCjbBrjWFKmieq89",
  "key45": "5qYrbGi7ndm9AaQNuREstDj6GTdhSdQcgsKSackPexfzJ4MSyj6sHBv5wFRftvCiQKmwmMhv7ofKoXpU7XfR51jX",
  "key46": "53nj3WzMQAp3qniqh3hnhyDFoiBPvato4Bc2YRJannwWVPTTAZKMyzdqwsQRbjsN9v7mVesPAZkwXUjjGWdZTgU2",
  "key47": "2aEcmxHsGvoss5ZySDz63TGBquu8w5jQTB71gF9gKUaV4UozfEXU3xaJmchtUEy8sKG62TYCJn69JkEpLYHS9Mvn"
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
