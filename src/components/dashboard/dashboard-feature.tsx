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
    "3X8BgpQqa2DtAwh2HP6pGFBGxmALktDzoNjGGDEnkD5iLHAET7TK7Y5eGt361oVVXwb173m4wzt4ZzB1zhVndaX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gdNuGHdQpQDhMeCGyDU9vYRBSg2q4N3K6ntCenA6PvbijbDtXfb9EsizC7Fv9PKdYkFvdM7LGNi6yJ1fH9k8BvG",
  "key1": "2FJh9FmKn6qxbZ8jh1sXsCyRPF9WjgNXPXab3HY3ZgZxGDXJgKSZ5tmtiS5R59deCdLbQ2h1JtA79cD3Z6ZDzbbE",
  "key2": "5uMDToisczsRHBhkJSsU4VVajT1uqFph6PE7NoorkU2dfmR3Mv1mKP7NcohkPMZ659Tm5PPAnEtiZnSdAURJM875",
  "key3": "2BsEB4KotZ3PszxRx22mPptJtwuknS1WCSFGGiSLebT25cmZ4EKJh9A1p7PMRNGbcRk3pitkKu9gwUWJmeHheAHN",
  "key4": "5vWCYyGizb1wAKt4RpcACdrt5nHz11aS5vtQRkmFzH1pPZYhYddxebEpPAnnMjXjx7ThHJJQELyfi4eeVF9R3sy",
  "key5": "3cGcGDwpySA9Y1Tn44ogvRHBydiTnviZGnKWuh4dTqvZ8kF2NxdF14mmYfVHQfYonAQPT4YLYv1nRa8d6gCvfqtN",
  "key6": "4bfw6rjgtLn4JExYWFEick9AbWnNxB9yB9vXw4iqBFECvqBxfjjzQXa7uXdYsBXEuxvjuDRv2xcC93rGBaF1JuRm",
  "key7": "5tVpSTRGnBxnkqtAuGFTy9eE6hLnGwVrpB8p7ixYCRj1JherVqSnC3gdEa2ndrNu8cgdByord4icv6Wnwt5ZyfgS",
  "key8": "oUjEeNGhjXt7onLgGVYjjFxMn8gKkVwhEYHW9WXz7cxpaU4koi3Kvw49nzH3PqvwAmCoqzTV6eVUeYdYyKvqv9b",
  "key9": "2Lf8YgiPeaJYoTn9GuVLaJsFqCP7YQN8oX3NhvM6Y6V5eSo7b61RGRXXVRV9c24KZRMBkQ8fNcvSaRs6AksUeBjy",
  "key10": "u2yBiVW5qykU9uz4GwxEosWBbXuPG2RymQpmK7ZrPpEosZh7m8aLavSJ7QqUV2m7Ny9KseCR2K9NKDf1vHB8Hg2",
  "key11": "4xHgZpXDzrELGGcJgi3us7TbBJK4gBgjwNvuz6LCKmq2zkB5vGAQrwdx6vkfk86T4vshyEvtZJoHM8rWL1nuM7of",
  "key12": "5fJzXAh8bbjZ5ohu1SsPgs5fpPua3m8XuHamhTCgxzgvm2C174ckhhnAyxJS5ZVKkWfzBtbCgU34Xedg8K4o2y62",
  "key13": "5JWH4Ri3ocJH3EXGDcMFprAwta2yBhQJiZTsanLezTz4dAyboBsHWpFtZ6TNsr2iHdgATxwqVeVZxQRAN3jFame",
  "key14": "2i1ELvVqjiT7FYL67NcaYvAx5Vti5CvhBLZnLWyQfswcmQXXLbqMp1KTjBz46X2oJzuVz5jgX4ZdFtGSKay737dh",
  "key15": "58rS4oqAbbUFHZoy2vSkvrHD39y8BmbQDrTDDLovwW7hCr9FaiXrgx7VTGKibKQwEvxMmoJ1DjX52g5mTgyfP8im",
  "key16": "3rWgy5qnZEMMEcWbkTPszxyDriXyj7iGrhJzaRSHecbqSErNeuiLwvYq2eqqcG3NAPwdYv9dcAKMXoQ37RWWzSe3",
  "key17": "2tWdiJcX7FLEGJSoKZgZwS9JYL5ckwJ7B5qZcv3gK9X5pEDA5FVf2xW6nSRzcMuE9iUdBbJ2XXRoAZ3x913nk41H",
  "key18": "36vkBcGZ6GgmN2c1t5JbJwNWP36SoxAiXj5T7yQwu5MSB7W2K9RYb1UckbeuUCCH1J2xuKHD1weUJQsFqPC3PGcS",
  "key19": "3KXLLkK7VtMZ5agk2XmssZ8fGUgYSr7gHV6q7jPzhZxnWeR6SWDuGA3SoWQVYVZXhvi6oDZeSxSHswH7dVKfqiXZ",
  "key20": "65Q6na4ndrV7tnV17qsfTgNiVhUURo5cv8Q1yZy14Y4KvY7KS7cP4hmHxfMjFHN2mcRAj3SJDXs4WzDe76HqWeSU",
  "key21": "4zEDvSR5Epj8rJ7UJfNUAZriLV1dU6m6RtKKPuMUDV7W3aaiXsa3zRbpULa4THv7vffeKYP9v9AnJXJX9sKK1gCe",
  "key22": "2cxCUpTMEeu59cGMMW8L9CjZrFvGEAVLi6Gd15gFHueFyAQrh5esKdQ7rktbVQdwdajyNehZeWd9QHCX4ykMQYNi",
  "key23": "EfotVDkcG974JaFiu8Qt55gBKbh3ZgdNqTySGzARbbY7bxRLqEB3vbsDp8nSbUtR1NiKpkYXybRsmLha3griJHq",
  "key24": "4wEipdbzxAwpU1Vw9FQkTf2Qwf2tFv9pFRzhSY8xSSK5nMQKng9CBqmj4PuUB7jwWRZqYcxJVQc98bZPvRJuBQ3S",
  "key25": "47eAtxUpqP6k2gy7rL5X6oK9LLnL5Ktom2BMgfUwKY92MyKBh4ADcshuMM6Xm4MwFCrqF3663oqq3WNhknrvBv6Y",
  "key26": "3QixVdYyDmYaTbiZHqYdtTXZMnLwEBwhWU5BNeBmZiXBcBV5cpcd3JrcastyZ2M5Wyss1o3mD8zjjevbrASyBmBH",
  "key27": "2LXp1R2oEPDggD7hua5kAna7z7eMoMeqZAhpTBeoecdbbvcQhu7RumgK5hKEycSCGSLdfXigLx6pGCPUiVnsdtBt"
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
