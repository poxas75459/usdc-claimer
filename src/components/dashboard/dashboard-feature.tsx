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
    "4tvm8mmuZ2ALSen1SL981KxRqj7kCibPC7Pm1CiFrRPjJ616f1BW4oYnksorECwS7N5rsb1UV6bFBo9WD8KiXm1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i8ZzUJQt6j9bWYE9g5dyzmwSmtAYEnPCX1E7DoPe5keR7S8Q5ykYgNu5oFyKBviCm1HeoEwVcv7Ga3H9svR994w",
  "key1": "3b7yk8Fd53WXhJFVdih1CVYt8NrnmYs3HrPcmbWLN3ca3rErmfswneXt8icVpetknHWsfFRNf5NdcTpAQE4phs6F",
  "key2": "2Yb6kiNCZ7at5Lir8Z3rVuGKDzPAJbPAJupih3b6SvuDiEf5w4pQERgDryAmLhTjyWT47Y37oH4wcHynxb5gyP5L",
  "key3": "4Gte1yspNqEn37B7aqRsCu293Fku83Psp9YNA9g764MhKuxEPgMibZaGL8cDcygkMCFiojfYrh6fVBhHjQikxHpU",
  "key4": "22nSv3sFPbi5Fec8wE4tXFsngTosCnKTmoZaNkB3snS8uHfS4PzVuoe3GQZgbfC55LPW44eoH6bfsQAvqDRLQYiG",
  "key5": "3jW7Yi6P4kuW4oZVV8Ceqyem2S54Lpcdf6Ytjf1FV1eNMcXABsyJ8LbnuHk6pjgLKURppssedppjtBUagHiqn9H7",
  "key6": "GpC6okzdCPzrUF9urFQE3FH6gdWNoA9hN3E6qHVUMi7Y9Puc6Pu4bafGoxTK6NVxJEcKFxKgJBaMr5uswyPPHmk",
  "key7": "36uVWbTNgKz7tBrgag32f8v33iLZvSw4urQ36brEJBT4rNe2drBKrrRodqVfrqtu3Xpf5iUXEveN1x7GXdph7pVx",
  "key8": "3mj5ZLiki5XLYykgHQnQN4DiXfpdMX6qJLMgJ8RdSAdGeZmbDDB8eQg6uiuWP7voyU1uWRq8udiEdJ1F35jAJ2L4",
  "key9": "3J94pAvau1UMHD9nhA5a3oagjoZaGn4FGbvei1tmotAzmWJZG8KGD6cwXEcQfTJ7s1n3Yn8WP5MpRU9mFCe71Dyg",
  "key10": "gSEnKfBvp6sJFGaYprXgcirpprC5R2AiHWMn6RfUaAtbwngjhmDiGXna7h591kB8ws2QtfR8fDw43PkJa8sVqFx",
  "key11": "2Fe5Ath9rLLoX3RxbPKk2TMh9rPYsbrLeL9ACXjhDZnRnMJUUorkkD9A5xSCJrVWUm6yqJu4rygZnNYq7HSz8aRi",
  "key12": "3CDMdYCmac24zzpEx2j3wkmAe3PxcHcZPQf8q1ZnWhKwqr5Fg4nQhVouxrcefHk4PSsmQuZSwxqiahJDfGt3TR5T",
  "key13": "3cGbxEb3N7CUNkSfvzh6nTaev9C4JJB8UHkBReW1Kz2TuDaT4jAATBZgimDSSkgeBHhxfwshF82yE5xSM6ie96Tj",
  "key14": "4KrFLucJkiKgCVqLeYC2wLsWhVzb5R6yGDQwhbRfjrpk49DSbApMu36oLyL5j6PivyrTyxmNXyq3SU3EpySdSh28",
  "key15": "krpdXXFgshMj79HBsZJBRQYoMKgGTVUfrdoCuVNLWbVMrkha5G7EDHp1weR6haBCiGi1pJ8nT9jps2Jw2NY8qYn",
  "key16": "3ZNgK2MhthCjLDt46PWUCqW95giYGVnzm8XiJ738RHYaUH6Rfx2nMK9uy1tLKAzFywWjAzMDbjNs3NUUqMR6mqRh",
  "key17": "SHCv5cVdHKLk7WVVDSfDPycVtJXuq1EXmnTCq5cn8YVFQGez1R9vfgaLisF6bKYqQFhdN6XafHqzhP9fjSjkvoE",
  "key18": "5YXaviuUbWMxrAWJcjrTSTd5qiRWHMuNgHdViWkmTUNoVeab1aikFYM1VaZFWjJB9iWd3eEC1tAwL1pdPetAu1j7",
  "key19": "2FLv1hTp1g5b6LJKMYhzsvGcdDYR7o6fxU1Kt1UuQx1qs8vzGBzPrVw2cW26wDxyKEw6CiNknY67QeHdDnNCsMwL",
  "key20": "3HDdRLkPgHy5x9avLiGNiqg87PuQgBhy9g6eR8NGuTqDXn29QYSdE7QBsvtaYpjGjqjkHzW7tdPUGGEcNt4L7knm",
  "key21": "4LDNpR64og4sxkcz8zgdS6fpQ7yhyu1jbAPZd5FvfSFqhNXkrs7LNCDq63CssMmMZCKntTscEhT7rSMHpztAdAdx",
  "key22": "swxiREj7fsr9F75MLaGMSnqnmxSA5p8ppRiW4sR434sHAha1uxjh42mnYqXUXDgWoUucnPW8QPJuLA4eosP1D3H",
  "key23": "5EM6oek7xcfigt1xWhzT9CX8VSad1ZA32gTjxfzAS7B7n1yyreBq74rD1Q3UJr4qS4181mnDsPwtTmmzoPZjwXar",
  "key24": "j4nPF6TRiMus82eTDc52uJCLj9mgN4WW8kq1XYQKojWFYrv2HGP3xvBcZRr38LNZhpnoMrGVsgVXQHbkpqTbGUW",
  "key25": "2E4ZC1ZfsxxSb2hLX2YsCpeUsJtVMxm6Hf2uAc2xR249h1y9xTBAQt3efGZZFPLGeiVFJNGzWPwMpGUUA9bhwWQc",
  "key26": "34m6SEThAb6va5bZSiRA3UXjYCvb9vNTVNqd1dzdams1apxarufjhmenRd44kvC6fTqb27dVAGPtEiDDGFwsydte",
  "key27": "2KjQgo191gweCAxVPKN4EbrrBSj1HthoUKJyGE422o8iW85MrQmgwt4MUpH8joQQcZu1iTPZTozZL1H9swiDUmEo",
  "key28": "gYAWnB9gc8UAeXNYzQxQpPvR6bL5QoZDxMFFD9v8yCMrRf4zuTUXy17A7cZMJvFmYswSWKL896dLtErngdfAQm8",
  "key29": "4anmY3Z1h9uXUEh2tuSqLENPBfLwFU68qBCTcSGrYYNi3cGK8aJ9ErRaNeyWHx67DqRVYAx6iwJRUWkXXUhXeQJX",
  "key30": "t3dCxK5oF1kTeoQjoL5nQBu4tCtMUqPXo9MS1dieuLW5ddQiWRjAMfoERNjytRFwjdXghcyc5HyRNZfPaF7JHYM",
  "key31": "2CWxzxpc2sxsiVSNcKiz4GjrVrkqSckZGWDDwM5u7nZLxYXUxHzDRGd3h98khWCTYeNnZvfcaFqBhMShkdMEybqq",
  "key32": "53YmQVQanJyp3UrfY624yZYxL9w2BTmJEZZSut9ZFXgs1kHVsfiaBRZD69LEn1fLuLVvESB4D68LBWnTdaA5WAe7",
  "key33": "5Qp1qgYNPHXMvUquJjK7P1bmgXwhgArcjG3HDinHKTwepbdnEkokvWKEVW5UuZiL1YhHvJN1ZXPp8b77bXcKYhHT",
  "key34": "G5XWUigRwBFH8Qq1G26cDzJ9UMEsyjzX8hJYnKZUGgWnKDQVzpyeYUWKZCzfi3JtVroGs55kYemoEWiss8RHZ4W",
  "key35": "5xiPQk4Ait9UocDhL5AUCYa6bNgC13a3YXC2eNSq9VNiKm4qsfK3zTZUdB5wP2KX3a7YQtws3L3jv3xurGE1dt5W",
  "key36": "URFnCFP6jqoiufCo1LMY9fL8m1USZok2zcpGZBieNqDJ58Eth5HiwkTrAGJiUhPbmd5w2g9f5fb6QC5ECQGrtq8",
  "key37": "ns3VGXprvY8L7Yhx8WH7kiCzmEFc52avve8p15pHjrn6D8UdZXgvvRMDyMonCoZgSz9CHXCAd5SerNT7bA1zNXq",
  "key38": "2ubMPUFDTUDcy9vPQ1kDLher5DtC8guC3FZ8Md8CXtyP75KTgwmG2c6wWhpjnv7QBQs5KkTmECMkhadHZpAL8B6T",
  "key39": "2xno24swiWf1Nvqfr6DNQSsntyK9Bat5AenfMdHQrfvLh4YahLfpQXx3QtAwX8wdi1CV8FjHnXjbdaNk3wZuWUFF",
  "key40": "3jZSuwKRTmustcMCZ3Dzt5EX1soVi53do7QyAQG4cyJuAfTqK4FbW4LiuQ4uHHNTR1a5JaHFA9wpSy4P4Za2MMuo",
  "key41": "4voMJsdv4jYTfE6V4v9KxQmHczkWJStz8AK6xV7sm5JJEf5p4ZixsK3eh2Ba7AhWYzwCPdqvgDRegmRjuKNE3QcQ",
  "key42": "534bYv1Rzm9Hvmrnwk8WbYNvHyxufkBcG9mFrfySWuLMYPEpTycH94SZSLK97BY2swL9rSVQqYFtmice6tb398xP",
  "key43": "3SUCktWnrzSvJhqjfLChA4ASZDoWiqP69vDqVV5B1nKwxqCaUyRiiJxKh2e31iPcJaMjTr12YHtqVo2yQ8jUqca4",
  "key44": "Y1SHrPS72KVQTWNvWCDu1a1V4cWHguBw73GUmLt9TKBVc2BiL2K5o6quTt6YHQYD2GcmDVYn2VynQ5hzj2vJq4s",
  "key45": "2rXhbkb6UYokgjUKhbViNxV8Uan22KY5eVijsqWQTooj7t313osK2cb75gFhXp5eD4BKsZMyCZCq9oRs8jrjH9BP"
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
