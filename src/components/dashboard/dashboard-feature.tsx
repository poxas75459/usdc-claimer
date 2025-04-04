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
    "2Pjic4sFuudYQdaaLmpPhLkcGhpFyF5dfxNvSCnxEtsqo4D8dGcVGcvNgjQA5n4FCh399X7C2z5rKmaxdfmqnmEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jyw8q5diy2QaRDP8NFTNztPmr5vnRbpK5AVdQ89hTDFQbA82feAaSLJhyXEA5UHDMvh6wZHgRUf77CdUXpfcTZP",
  "key1": "2j8e7tzqxX9iKLYKVsA2SZBBD2TwgGmhRokYSCvrf3xkpiaNgRWyQLk5PXZwWnvKRSxma219sBNUp5h9BXyNEpZq",
  "key2": "niMSd57Zkrj1bBhGMBPQoMCtARD9UcqSbve4weTQM1cqkzVUEQeTVi2ipsqfNvyVzXX7oSqvdvYu3p5oMYzAgps",
  "key3": "4pem2kieKSpqg8p39Evz6nY5KfvYC4q35qGRCvNwUHG6wHWjnUsPUuFfWeuhm9LitpMpcP8hXtAXNa6xPVApnwk9",
  "key4": "4GQhz5vypJ6RMCFTVV93JkCrnGR36MSsb8Ct4kCnadDQQGU5pZCZpDNKhEJhHN7MM2YAAzMLdNuBSGHDz833ykuE",
  "key5": "wWJzGJppGHHZJEahFA2FovEG49YvnK5FyoaAMwZjShftyV4XCpQivvnS4NBa9ya6vYEvqj3SZWFELa7qgAsJVPH",
  "key6": "2wo4WRtz9zWSzVyD4PDkhzZfYSckErAXTZJEvaf7uj3MKY5LLJYQ8MTyvV5JE2UerNiDixEfeEA46qrBPTNPUK9C",
  "key7": "4559H22d7nErgDZ6zm9cxf1yzfKKKnZ5fHyzArEah2tjZbN5w2ua59zYwptqdFhovqQKyp77WnsqB6ZyJCcvsFWs",
  "key8": "47zrmDygr2awdeVCBW8v9H13N6pXL2eZzQda5njqsqyhEg9Up3rfpKTLCQVUWJbcbWuMGfJQdtD1vxGoHorQjB6G",
  "key9": "59anTCPjuMRAArod2kFr58VuZZo7zbtEpXhjMq3EDboEegzCjQqnParpyrFBH1yLDLXqdZt6euySRTPKZ9WX5crg",
  "key10": "4AL4KV19Q8FNsWufbLLAdUtWBjrJpdCjXyhm5GWKpZc5n1x6sdTRu22Kj2xgBo6SDrM4S8iGxNPHAERH3jH11XAR",
  "key11": "5pGDAMx4wXwZnSCYFJfFBBcjdoHKFVqDTGjs5cSuSwtrhVCE2DVbduDhGJNWqvZtuh3eWoGk9PjSoWfVn2w8hnnM",
  "key12": "5GYSdRBwBvx4eD84rbeEJiBKSfksPNmJjx8mdxPhVAvsKGrYbGdPFZjQPFhKj8sQzYWgm3uiaoa8wurQxoPExvg5",
  "key13": "2qFyX91UFE62z7uJJrnCSPWN5big1o1fZzMBWiHYs925DR6S6PQrbhDhEa9d3cjx4FamTAtvWtx5BxU2354ZrodF",
  "key14": "5LbMZi7q5Bz6kfkKBBoWS9Jr7YCbAHhrSP4hYD1qBNCSyzbqhyGY1hj8XTRiKSKh5RtTvvzLPmyczbfZvRTbaXzZ",
  "key15": "518zMK88KVBcQiFpN7pWu42hrUt12uBdqq6w9pMERPKQbk37Q96wmaPmMLFe4zQAPTy7a6o4acYjiqCqWRgfGreM",
  "key16": "5xCrUhqMxaohdffwo2M4rfFkjnuk2uPbREjQzsFWNYPWiWNqUS9wNGU6ickcJF6PDs9LTJLVppak1Mk3FZi233G",
  "key17": "54v1eDSE9VEL9vjbS1wbhvGSQgzpNi6LYM7YDqpTHLQ36wyuJH3FqGpznYUzEBAC8ftYVd4yfJYZrjrFYFrosJtQ",
  "key18": "3nBpNN3ernAFJ55LoumiJjS2Dfw32k85pgtKLTbpQfSncmVsfCGouQAv8BwjEvg4aZJqwAM2Z8q6f5efkZxadCPL",
  "key19": "5YAX7euuAtJZmKsXVcA8UCcza3xFFGYPCBjuP79L8KZnj7TX7FQijnc3hHE77iM5yCCzuz9hhEBw9b9uPK1Q2jwU",
  "key20": "3e8ta1tNu3HSYb2TmmKXs8jS4M3864NpYso2TQ1GszLkFd2RSFVKyihB7Mbweb98yWacJP1h34M12LvsCodsjv7Z",
  "key21": "DThf12kvWVugeyBNKWjFMncQLfAydwmu9mSrwXet7cfgJ2SKLxGuxFhrMdJEKXg6AX3zRJemhhbtzNxPjhwvdyz",
  "key22": "3mqE5piZCQWeNqz9WmNhxYyS2tDVNbWyK6WdV6VxafDtoCZMMt1dAnhEwrabTrYV8uxKkAvvpR5o3VkbrjcMFKY1",
  "key23": "2QoY8NwCipyqkD39HM6o9C1uWFVPutcYDRchaMaUvkhv5gBeqU2yZsUV6G2eTecsAVg5M8rMhExUwVKzinttvsmX",
  "key24": "4ESs21H7XSxQuHKxSJ3RFRB38Pn919rwFfdg6pgxktPfG8LsknGXX2Fmnr81C7U7a8f5YpTtJS3o52nZEsJSSrDu",
  "key25": "5R4ee6VejjA3BZa9BfYdjM1kRZJxApj9K91F6MdzzUr1tsgCs5VQvczWCuEcjQGjZapk5SrqHVAFo4VXvoyqX19H",
  "key26": "5jo2XHMCsRfnvkvqsEKJfoCdeobrJjG6dJop73v4yzUkVaGQXtUesV3E8ZnrqomsQ9vDQNkNBaR2i8qGiJpYwAg6",
  "key27": "4EjbLhN9NyDHGxbhNGj6bZF6U2WVVEhg6VGz7HHmB74TurLQGNLTDn6r6mVZ2oW8L3HWXNHRbJyYfDwsaDngGwLE",
  "key28": "5wftzB1YiAjRLrcs77CqbC6ekNC429hRrqxcyAYdywXrcHrhzMPDVv58jUs9iaAwmc9Pjna5cGD2kw36yFNnP3vY",
  "key29": "4s6zT3P8dev1PPWcbChwxjXn7SLcm3wGkrLbRGCLRhbxJ7gGzW7WFB1Xypwc5o6U52fXodLpdfiH65zxWLY9As7x",
  "key30": "4L7G2VJu9jBeYr4i3ARyGj59rQiMHwtagexsBDjnGpsxF3MkLpM427THjkgvjpM72APovJRuX7hLvRW991F9KuRZ",
  "key31": "562NrpbuQnDthN4W1cKqw8PaqecZ9At9cX3herTww2XkYgezUtJZXwqZEcYsbS9CQCbxVi3Vxa5gtHmuBxJcPAL7",
  "key32": "5AnjzJLVP8zWV7QUMvV23zWzscuerugyJzAJ7aXxW3qWYsUkfRansP1H6cn6wokxZcrujYc1gE69ftKemQo5tBa2",
  "key33": "64bbfLKa7TMzaLtHvMtWstdFaMxKmsgMKaSY16SAAkuMdCJSysNGSkMAzVoCNNBrMF49c681XfHsgMN79RzyLLWw"
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
