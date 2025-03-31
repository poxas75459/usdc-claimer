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
    "57Q6mSuJyXSkBjcuJ3En8TrAeLNgztF9eTHQw46dCaZi73vWDUT6xZP9yS3A5CNBVWzrRFCm5cniVyxJoTTNQwtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZdRKG91KwWdwpAY95sM4h1TjsNc3bJZfvkDW8BCq83uMGK7ZxMKaCU5bgP5tytfyP7TR9u1Zgk7axXt5qEwJc6w",
  "key1": "2ck3EWiBEPwczn2hAp3BW2rczgMGLneSVQTWZeKHDyFJMVrcb151v8jKpsM5cQ64HYsk7J2vXGKVFGrZyuqWYR2j",
  "key2": "3uzF3d3ckL9BYrLSMVxfgYz1oweLXM4nLY85JccS2Qn6vHLmeyyFFMNZiyPcHdhi1CGzQve1xcnydw6G9RYjJmji",
  "key3": "5rLFu8646eprCizuzL3d8ZFWYH5NZ5urwbUjSqkHRauZCbVAaRYZhExBaiEuyjAAvurLSiCCeViRKPHpS4KmNbQH",
  "key4": "GegYWSVueDUHkvULahzGNP9i1op4zaEfpc64XxLhxHkLG55piAqnQKMe5QA6bX6HVjiCnLw1u9NRYiKnjUxP3tg",
  "key5": "5Uv8zebkHbuy5oZwtzaWSYEhKQUGojpPqmgAjFi43wGkx2CM9Cx3ZSjBcqXpEPU1eMjRoaVxJ1QECo5CoPsRggEu",
  "key6": "2u3ypeeafhTfP8qaUif3294wZG42jYKz6oWgBuWsSUWcyAqPbPYiqpkWnHPToRVRXJTR822rt8B5eCoez3JozXzv",
  "key7": "2arVwXPRkZjvypbasqy6SXy91hVKjqyiVpzyHNsvahv7pM8W9R3RdHvUqhLwPuYxtfimgzLgC3b5E7zFiDKvjFug",
  "key8": "4oeGdvMX5jNV8eFndy9BJyBAy8kkzCWaqQUnLyeLiXU2fLbJcW2tTXDKpTfJBnnm9Pa1mWdzFi8AbaJpgTJ8aA9h",
  "key9": "QP86xDgdNna6kXTLWH5sGK5Y9iQXemJ8u2R39nt29V5H6UopEapvXVd1YJ8ae3jc1zcpfN9Dk4JipjxhEiSmP7u",
  "key10": "52jh2MCwAmBVK3PtKymU8QyQTfNRZmFXK8ZdDpQvL3qMMe1GVpZwKQg2L5RpBvYqzAwum3zze4yXE31GuG21hAYU",
  "key11": "5Eo9TvvKxP95Mt6mUJasHWsmqU1nodDkBFDJLwtEJVR5kfyXZqmwktPq8UQRYbsHquPuibLA35kHqDd7HL2dhGDN",
  "key12": "23fnS9GwMaWNL5VDnNrhkuFffFHGtdyupkkXmFfmjhXm5VN2Y8AT2vsR3bDWGo7xf7EJtMNRDArzZ61tuuBEA7a1",
  "key13": "g22wfM8tKfwhajrhvyEY8Bz8U1tXG6P3SztLY63cx5vDxwDVZbhYJeMLruRoR1hQ7GUEM7qVFcTYAkoX6ka3L46",
  "key14": "3NxvvkqxeAYAecoHquR5p7Tqp4zYs1aRyo6aKSkpqze1sdhQkhhPhiGyjrgFEubg6q81jGJNtzy21vDp4QnzeD9q",
  "key15": "5pKdDcmuEJu6AaTBX7zQCeibuCb9JdrbYE7HtmDWEVhQsPD16PDVXTVyPVrnt8eQ6q1feMaRBuKzVciGzfqgso79",
  "key16": "3AzVZLvZbQ9pjPt4Bnt6nfmuQP2T1L9NxxWF9gQAH4bCKTPkk9wnsQoKYWVE3DYHxxQbN6HM7oH7i8By8kEKg3ad",
  "key17": "5iGnbPc3KNKncxqSArjRpQAhjJDW8AxDyQqYZ13bi68QoEjV1LoaF2bDXZszbXozL7GwVrH5cLqYRiC9B4TBih5v",
  "key18": "C7XtGrA9Gg5BVRzkdQR1MWDwDwiu76gMauZKtjGKpxse6gv4JSKHbKCaE6vVipzAX9rHQEHPb9mDxL3yUBkmMeJ",
  "key19": "2wcTDmrEv9cVaWJEW4nPhmjDHNnRGxdG3A9EbkYyCqqtPiWbLEktSvH7VH7U5FiR84YPsEeNgS7REhNWPFE816G",
  "key20": "4tSJeutK3BBm8Yp1bv1TJLaiQiL3sd9rFxeY7DsYpQmwrPsUS6AT8yfXaAuwdzJiSMNJ9aNG5DQ7CanzDFNfLNiB",
  "key21": "4SVJRQTwgrGVUWAA3UrsjjhQG7ZsqS878d8CxbqwJHJwq1AhpaVXTEowehU3usUUbgyktrHztD8gqf3cWaShikAA",
  "key22": "2o4gWY2EeA1jsEVLPUAy91Nqzc2xM6ENnw4FNchQEssAVHWDXfY3baxeXbBHYxPcoHHLgw5wWsqppMDbeG43icaB",
  "key23": "4yKduiG2HEVKJynHw78zNEiY9vKb9nJmDqve3yG5t5WwUyNND5JvZru775ngLbnjWqcFJcVngmJrbqfPruyorZWL",
  "key24": "3dExGuCirbSBLxcrPb22kF1AeVNGXACPPCvWygL4bvXfGfhgKfE8DhAVBjUbd8XA474ALoS36GT1JrkRLi6zEp9N",
  "key25": "5DhnXM7iLFZUChbFZYFpgnjt8hvGdB72V9FybqA8rxNw7e26ZHKJz46CNoy4267D5aTKRqgLryCSMvWy3GQadxBK",
  "key26": "JrUdQzd9fQxTvGjNRi4nKC2EoE3DWE985QdTNm2pkQHB5KABZvARkQ3FtCzvzSbnML7ykPFxJ5xhtcW5MCYssxv",
  "key27": "3Bcijc3oPHrEjh6UJVfR5mcNURipfT8NuxeVN11WonG1vmQhpQaFntafrMAp6FZDRvEk2QkixuFQRkqmyAbHL41M",
  "key28": "532QnjgiJsujLdU3LZeDa3WDAK8Rqo52ificWLCHvcmGcGXFwn1AoNnAJBo7NNGTMQRwkRhbSxzGi3jnWz5FgRd7",
  "key29": "5wFD8HNiteJEn6k7QYYPj9naC3KMGJkyGAKmkaRMNgdKjRLwNLvLBMzzzPnR1LPDcf7QLrro8uGQuHTyYiq8hxmW",
  "key30": "4sNTdN2wbhhAsiVZg7myMb3zHU286rW1Ro96GTJYUJL9rCLLd3uSL75R3TVmBLVUX8GD8u4fbzssQVxqSsojG8jj",
  "key31": "5pzw7oPe7PAS74unJPcFvLyqvCrG2oKPMhgiqiUgJMqeyrJKPdAjNhutZEd5ShZpb4juVhxuNB1Emsg2m6JgWEcP",
  "key32": "4XWqCEwGbrkAeVq6etcbYhLVZbKi9szYMBHUdKU75Vx8L32pr2QzL2xCY1Nw7v5cfhAG4BqveQLTZNP2WSXy2kAF",
  "key33": "2vUhx426moFSgrFCYezRumj9GfYvMevmSysdJdVmvKPvqHFMU9QK9fqT627B4pihdx9qhDRyPzLyDS51ZAqoDZ6j"
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
