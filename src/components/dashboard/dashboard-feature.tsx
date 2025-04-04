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
    "2SF8aXV7tq3cnYY2B3gSpYDpEQMHKiRNpU4iTUhDC4FF4iejHEuSVg8KVcnyusa6TZVAMcpWbttAWp4CZWZVbmMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SJUwPHvB9kAYh3AY1t64oZnNfuiE7nREhm7P2p51ZNv1SLg8MkHQLpUwoDvXmNc9kk93tMzDPqGZDmPZpkgqvKM",
  "key1": "5JvmBt97Y9LUuDt31NpgAMXeNJRr4mNbkbVrhLQxbimsqNVEzERnjCMFS7b4j8LSe2RQYwyV3b9aiRp4K87f9w7r",
  "key2": "37nHRFHV3fGYX3ESLQKRcdo19RxrFzWZgBwV6y7qFLupAtn4E2euNCaz1WhcgQoSasopFcdUfAH74j2bC7XmFnnK",
  "key3": "43GWUw6cwBJqtiMinwvMG9kT74KHDeodpV1CoTrgsfFyKZaJ7qMrEouuxv92RiJFfgA1NsGLvHsA91Gcrd2SnaxK",
  "key4": "5ZmZopjBSNDJ6U9H42rNprLCHYJMsNC9YdYN7dKEpe47BEveQqKxy5LWHApGeZztm54JMp3mgLPviWBESojrVuF7",
  "key5": "4Pv5SpnFNrmSDV9JnQQgM19VDoibE4k9NqocG5BAb3SmYbWw648wNPP194yKveNu54zeCbMV4jckzMYdkQqe7pjG",
  "key6": "5XTufFtQgWtGPfwpHi3mG8CqdPpqKGc3jg4eYD8VomypHYE3QAdiBhLVtGb6NoxTuA4dhmsjXNSThZAZagyGeucW",
  "key7": "Me6Ks4tQNYqz3GRf4Lr7CYFXKBPwWyuJ6nshDcoiF11J79agcnACeYZ9o6pAwVzyKg5yuWL9vvEJohnBB4YKVjE",
  "key8": "3gZeRuRe3rwuHWJjAxFouygM316Vx158K7AETySNPHYJ4CZTNkRPEtJcZWQebHpVqiV7hMFhesmM63JAb8S9toxp",
  "key9": "wiCakMtuzxiXSWAqVqmxoVvfjhzNsS1gqZVHficLuRMPEcFHKBsZTYMhBNyNsxa8kgpJ71SBgZdRYCur7b4r8cc",
  "key10": "4dr5YNsRSN1XBS8VzuTdpeDV6UqULbWL2Da59ungsB44xHLEx33Vy7FQcNrKqP6vSxsAQCMcm6QiDAPUw39tSXFY",
  "key11": "pVY5d48uW6wnRabh6ZS1boC6mhNbbLrTc7vhKmQWR8NZXQCRS88N8NsCE16CzS5Z8vd5bHcNduC6oLnEN4T1uxL",
  "key12": "2oW9sZtQsrZUF7vfZ316zVXBGHQJSZhzS4PLwrnK2HtGeVEb6PysH9NgsgtBS2TF3rpjnZkPsh1fDj3MEoDkd6Xu",
  "key13": "3En2fh4e78ZSt5muucdL26J8vXXkY6y3tPDEMpbTjHRg5FZg3We85dbTCznHfYLaE492n9Ri8o1wGucFem9a54f6",
  "key14": "5tUx5wWoNPWbgPpSXuD9juNFaowEd4sPAMtbK9BqWTbhPZAMR2fFCs7cSn83bepgH7NSLo3URk7vNa64exTuiGnA",
  "key15": "4rCiwzahpoWfV3LCPxkJtKQPqjScZahjnCKTy41V46gEUTjUV7x9AzXSonJTrKLcoi4hKAqpTEYtiY6hRV71cBCX",
  "key16": "4zvRReny54suW1B4UUdSKsTxC7EKjftCMQRzqiPHcqRN35RFwfvtBb8mybThCN39iASBs6acVYZzfZfVRGzcefAm",
  "key17": "5UVKh71JAvpYDoSXPCkZS6qMWT2U8FKFKyNgkL4u5tQKBf4jkWbhefHw6YE3ozYc8TLLgChGbv7er6X9Kf8yLza1",
  "key18": "4QMZYyCEHyFMTXcR3GH6yqMEYLjkTicgrKekQLkZ7WaQ7aVqeHksLW7fiwaQ1xNRjr9m9JYM14he1yz1w3SWbN2n",
  "key19": "46U1DDHZyWpF5WxAm23qXkajuCnMCrJp4pt6tjAzzaRME3FsjtTrvFrNvUunfuPcoaqC3nd2Wu1uuhUT3Em6Pivu",
  "key20": "3NUbHPNjwniVzr4kU1ZoMou1RAVCwx3ig3sNE32NuWDf5aR452dsm5mkqX3B2L4rc1B9gJ8ru6hwtVezkywcN7eS",
  "key21": "5fuewPMQNiMi5H6yw17ZuNSYK1MkgvdfAdfzWmKmpXtAHUPJZFmyFa7rbFPtDhN5suy6DKkK97yh7Jxg6dndtU1H",
  "key22": "5UCa87JqfrJB77RMW2mhPZPmRCYzfrF7p25n9oagaL67VrqPuy9d97ASbEXHr1s3jHia9Dj12gXrNApQsM6JPu6f",
  "key23": "qjj569wqjfEgL3kg2sP9q4vZB67aASufhuEdCky5ZpiriV9tPz6bkKmi4bu49QsmBJDHsHnkeVZy13RKS42KTHL",
  "key24": "BP5GAgPj9oywDexm7C8CrArHckYfieHr3VTPTCA2cnUkJCN1Tgi2ChWuF2c8wURsUsDnSVgFoYJa6pmeCb6hQmL",
  "key25": "63UfC9pR1CjbTRcjFfsMEZS7CmMnVGzNfhwQHxSGWpDwAtRH3YtnDDzyBGSWQotZN5fe4JW18kAWyn6Z4NEkS8jq",
  "key26": "3nf9EJ35xjYimiGou4BSn31ZkfAj4egqscub9GHtAvpW2Sj2CoEEpxqCYfpPxD4zi3D5taMhWna3vLLMXZeiqjDu",
  "key27": "4ESueGgJrMHTuY2C9389HVCE86ZNEWdax4v1NHFMC5KiTFHzJjNUnJ7mSehnc4qWhjgWDjvXFzj7W6UreLRi7Mhy",
  "key28": "kj4NgNSoHgNpJN2aBZxWjNWBXqeTXEjfWqd9SwLcKwEKTX5UwvFWcf7HyVJz8ff4LrToLZZxM37zqJBZeDekdpG",
  "key29": "3sBirxbZz2n7i3uZNBvuX1HKenshWxAMHY3PDGHHdV271odwFdy2SEBXeCgZcyP3zuxFbn4KEGx267NTY2CNrKLP",
  "key30": "RFk8qLyewwD1CAg6PnoCBXLJ9PMkWExWjPQVGNPRK4RqpMHwWYpxvf2neJJfdroYUCaZ3qyWBSKiXn54oEycrX9",
  "key31": "3ChJEDeqqepZcPZZwud4jFk6UqQ7iHC3NjmmWhn7ztUXB2LzgAs11yV89xjP5zpUseKTBidp7sXC43VwM3xKowNH",
  "key32": "553ihTawTbgqaZ8Tcz8n9heEQisN8t57dB5uz9Buvkwnh1hw5Wfu4uKHLt774i4jYnXAqn42YhxUNhLrP2DyQst6",
  "key33": "2ZrSvZwhr1XX6EQ3957j4sHA3PoxhhTZw5wPnpkQT2fg8LQVPPRCyfwMhKnFUt3yE9HA5mhMjyauaMnwHYHywATY",
  "key34": "mFfSRtM2oooYxS1oE7iveeAtrRbC3fRCz64ZdNCd8kCzLVqQLUnk4zs3XsBVTCWmde7DAT9LU6JZz9fSKihEmRy",
  "key35": "4XNz7F6y5qSEBQHXNG469ReWDk73X4M546QoLZG7eQyo9NPBBZECf5gsYsvT2imzzLkMrAuMND3ne63HuGMzQL2Q",
  "key36": "376QMSfHBYZqPsUZwe8TWMjDBcNBkKF83q5J98DqfoMmLxogPiCoTErLD5ptLNfEBMh4TeBkd1yXijiarRaBwkjb",
  "key37": "4czvhZBRh87iBz4WhUMhji2C4nsYvp1VP8vssyFHtNy1DgJiWXjP37xMTBPmiBkZ5FxuBpUMYKPsv9gJRm2CmXsQ",
  "key38": "5vSNqBGD9Xy6XdU1X4n1HRj7qwwoHkrAX8oTX2Cr7cZQG8SMWPmbNH6iZLtMvQek6YzKVRDMcpUvoiSDkVnoTtPg",
  "key39": "qwv37oY31eQ43245ELjogZSJxGyxEmxsahUrtJ51d72zP6V5dVmk8E5qamNpUTWmT8UidgWZR2F3ASAdA3DmteZ",
  "key40": "3yBpWMrcLm2bw4HnAYuxgvGqfx65E1fndndTpgPYtGjYMCK9eu7dYtGcvSCvky5anz5AY7w5xRrskrLSHMDTMnHf",
  "key41": "2BdRhLS8sCcfwN2fzY2Nna1yXFUf7XHeVsqEiADCRTEmU2kPG5kx3wQfqL216ZE6689EDtEAa6YQQdPxK9fTviyJ",
  "key42": "2k3uSSMHWY7Gt6XesU2Xwg3Hmy51hhYfv1Jg5c9hh4WwnXGr4Xd2qD5xBjDbQGyJjV3gwZkr6NKQgm7jxx8UeeQh",
  "key43": "4jswAyP8DUrdvcE4Rx1iUwmtoJ5pLnV8iU8mRtCrrkB8zeESsXCmqfNsvxpdP67mx8oBvpQodXmGgZ6NQwbyp9Qs",
  "key44": "2XFTTjeNDoP7TEPPgVQaJ2eTmoLDZuwXm323BYjjG2FDJaguE2CtqJbLGPvRzb8ELavPvbRnPFEPVP35AiEQffYi",
  "key45": "4Da13jZc2Nnmq8dKrNHb89PeV9UC7NssQpjN5HGR2bnrc6HkzuLRozgDreUTWQSHKxcyuJ8kSFiMPP3N91X6Jy3p",
  "key46": "518p7TaRytjbonxpD25S41CLBEL2YVcHYELjRNnxLe2UH8qpvrdpuVr7UfNm5J2UieZRUa6BVabZJcYExiKBSS2g",
  "key47": "4ub995SzoGn697KnuUYAxpMwqUE3kDNcJeHWWZi2zLifi5Zbp5URxwMv4e4Af3ExawAUtv2Xjcq4T3JM4gfcndjH"
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
