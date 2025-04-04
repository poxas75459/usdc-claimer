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
    "G9DKR4vMzQfkhgeAtTH15VLMUtf2ufXioor5AgXbBEE2SkUiz9D4NjMfmZQYxwueJUqCYpurMf6cVVFQiPWLqkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i2DPs4fscqJcPz63PdPw9BmpyWDmpC6zmZM5aKwo8uLLdC8khqHK6oBunVq7MGzoHnA4dX4xKAi2rgdnBtRgpnt",
  "key1": "2LYHcbtD7kShTJUVLYLXmas8HbREh8CSyosBDTJXM4q9KsBEEtzsmk1mLUEgMnTTEUwjrMirQv4fBNiem3y5NGb8",
  "key2": "2i1uZ7foCcKnCQ64KNDWnwiHVpkRDhZfxRBaM36FyFNW9oqpiQhEWRWhi69Y1JgvQJNnVtaxnvHrpD7gw5AaKNwu",
  "key3": "5r52ow6URbx9mjygXVJzT7VRc3UhJXAnSCGHVoak4CrHtrZY4ZsTpR4U6GF9WBJZjEhVy9fcmYsT9nFxwTsBT5oC",
  "key4": "fQfUmaQouBALUetboD7WjeNRiLZavX6oteaQowSY1yVfYrH44uhqJ6ShVBuZfGUziHNUSEc3wobPmd4ZS9m7aGW",
  "key5": "5hRsUogxHcS9ATKstZywbBRgaCFZLTXQzXELnNbvkFHQXPKe6g9hb4ycbAuyAQVqioD3eA9zYqSTWVyTvHHqmapY",
  "key6": "288Ns1XC2TnCVNERtPiwH9Tvht2JkcNcxL9C4cjqBAB3GYpzWHjZTvzM46fE7tM4zE5kP4NeUTTjkt4ZACACGCeJ",
  "key7": "4VrmAbs1UP6WAF56TwrZvAzdNpS6EdGLMsGKfoB81fUoyr8hdqiHh9gynTzCKPgzo6prvy15UAVbs4dWFSGDhqxz",
  "key8": "3pXuZWogpiuNAtaPvNPCPHJh3yj57jADR3JtbNjEr6Tq87ThRDbZXiycA24eUEhN7oGVVPXiutnGbUz32LR5t35F",
  "key9": "3FVK3hPpGPpyDR8NTBki5vuz3gsAQsMxGnthSvVg5EAcAwLdJV58KP5sVtSfcnfAFBi9NtwTHw5z47dZJPTKPAiR",
  "key10": "4uEstJLsQofA93mmR2t9d3TE6SDGwkVM8cYBUVRkY2z6XYUVLnRt97Dmjn8e11eBUnLjG1urp2CTUi3hipqyBK8v",
  "key11": "BaQ6DYmqMASrP7FErdBvHFYf9whcwuCEJeBGfBHSb32FhPWNZWSap8eAgrmRGXBS9QgYvpMsrwk37mTSiXGY144",
  "key12": "278MiU1tHwhtd8upDxWVaLyAwAB3e4iJRLvK5NZZvAekFbHXKnNuh7pWiH75h5xERddQEp6yypQpV6GjJB8jZpex",
  "key13": "66bbz5Qppm2AMcoAshQWsQfDfuJJ7DxdqqKVQLGE8kNh2SWLpCqvmhU4nBKxgQaUxXSD2Sub6jy7DUNhMkeJoTM4",
  "key14": "5ER3nYo8gVb4FNAy9YxD4masE4xhS1qkRNuTVJFG2KkBpnrDpJpVsa99uFT9wrv3UbuxSJmaB7hTgof3gUnwr5Z3",
  "key15": "4LPTyjqh1MG6zqzaJKKjQPmLzDdqwwR4vCNTGKh84QPeUtNc9EhxpdB5CVmKUjtDCdnop1K1iV12JGj9XxgEyqy5",
  "key16": "5myC7CZypU9ASP4ap8e1f36P5YfvjYEqwDgtJpxyKUeDtkqzHxVS3WfrKXt2DSjaSWqYTi3WEBq6zsnRss3eedLJ",
  "key17": "52kLXuPp4jDTMGP26rcPK8vrqbtq816v2VQPB47puQAvSniavqA5eiCUWj7mCGow441vsoFueJL27e7q3haYjudN",
  "key18": "3pQsqX7zcddJJXA9VfgdUcNJigH1D8jwof85AxT5Nh1bCFDgnDwTyHacp7hNhAmDwNRJQuA6NhwiKMDBZY98dtfZ",
  "key19": "54LripqWayDsECxP2NaYRxLqVK5vCEfbwbeSK3KmXKQ48pYGyyKJ3FUn9bZSpR7nFzcahw2UmtGi7u7xCvXvBzDT",
  "key20": "5qNcm7kpqEqVdWHC8kcBECPhfDzCNpVoJABxugqGEWvJSRbETmWPCZvQPB43Nb3vhRYeVe5Bc2vC3m1bksHz6Ejo",
  "key21": "5GfazqDGntaBQzeLn85HY98hFZrhJozr2zEY9F1BSRKeqGvQZ7krTNcCMFNZ5nqArrXcFjU1KG2GX1h6bGF34KJh",
  "key22": "4qasLm3NEmBvaGSHouV7VNPPuidksX5xeGv44wAiXN8YQYprRUYNrrq36Q6qvjK7xBQf4a6YU6UwuKVJgiqpE8i5",
  "key23": "3tqp4z1BnRpdbB7kekZ9AfPEHi1u4TSqtwvQ7ppUMAfZiRhSHVPfZa97HJoRCBAMDB8YrQH9R3j6WDQuN2obHx72",
  "key24": "4Az3LqLmX2V4Xe6sJg4LfUBMfsJrmRdGxhTArSiNWKQMVHZGpHuDcm35JKUcEXMnw2cypg2U1m5adyNpFFeUV1o4",
  "key25": "3i6Rf5uA1TobRpDGnZAgZtLLz2AstjWxpwkEq4LjhC9HZ26HmrhMVkC1wffzKTfTse6zvXkRLWSGLXTtqa72D4vH",
  "key26": "4eCePHTmfh39n8c81k5vtRmscmpvKkXWYfXu9dDWeBr9LrWfFgj2FLXZjDiVh3HTB2YN7E1kC4b9j2WhcaZhTaDe",
  "key27": "64ipxRNJ8ZMSyktZUFS7JQhQcCz2awsrX8JvF3Z82h1hWQbsWLucKbnU3sjEw1Xn1mTASJboNNfjovpFdmjFYVyT",
  "key28": "5nQnYirGFxpfe4HNNLud9oFsbnxJc9dd2BB2nUEgWhvFFqiGHywPC8AVd5ZgQBxYuadbiBHRPG7RGi2xosUZoMvS",
  "key29": "3DEamzVpZ42DyxRie3ohTrL1468P4s7MepbcCqHEbFJkYknRdVF9cNWTYXJTMAG2NWyxKYpjQseLzXZtyZyi57CS",
  "key30": "idWccXrNkeyYp4tKFNnhQ5Pp1N4q415ay4p5n8qbqKAoiK8qJKwacByqtdc9rnL2AfBGVcmVoFkbcjxXNSQtQDZ",
  "key31": "5fNEzLiD4SXZAo9s2dvNMD3H6pPvQPiNKs5EAVyhUbKt3X2MRVzSa34LR2N8CY6hwP2ho1V2iA8o1qteGDDepzhZ",
  "key32": "5WeMoHzS6cS3GSL4QjUkyhrop3MASKmxwHFHRt38YavTbRpQAzJt7sr2oDdDcauV4bhMzwxzgUuaHShyUnw1idMN",
  "key33": "5Q1NqLM4ofKiMccsXL5Z5pDTGJxadB9t2QEGMejGNYcnD1ixu1ViPr6J5hdRLWYwF9cXcjirPeLdU9a3jjpMu97s",
  "key34": "3R2BbjzuR7eoQRvddyQY4u6fiZ829x2FUMpPrB9kfzGg5eogQBE4JbxNUjRabYgBnz6DFnUjynRCymrfezLUZsP",
  "key35": "334Pbfqj8F3ManxyJq5KdgSNsdHLpKFFu4ADQQNkrGqQYgrscusYmkAkMThzmhswhbjjuzctG2ttngFYD87p4GKj",
  "key36": "3Yf7HToiod9nxqt5bMSZ6FMNuriENVTmrBXCsF4nFCGZw6DXWYEkWXgnkRNcprjw56YbcCSt6zDvVmDWZ2f1rPM4",
  "key37": "2V1u5a1pE22cCwP22bG8McwphQ6LR1m6xyjzhSu7AUL8JgsN176KQsr8jh9fCoafXn1KrD4Zkx1kx72bP1zHgyFK",
  "key38": "5UZCUBxJ7w7uRp8naQrRVo9YfhrmeZMbuZfk64awgzJHLsB4ivrzM9M6gsuCydjfCmMv79u9h1zEAokp8MDt5vnZ",
  "key39": "3CNw2zL3qsY9cSE1BNLYpZ2bKRof9tEnn5rFpvCmqgJkPfDHGmTceDACw3rEtyRXRC3xDgM6emW2QFxpcVQ6TsUr",
  "key40": "569hEz4fJBTLkHeRNcaom5Fc1qLU1Etz6GiJNFK3Ed2aWfTv9dFUiCsE98Fp4mBynS4VNUjEjLu5DwpDTa5o9Rj8",
  "key41": "4RVtdn7LjenYKDoqwY5sDPWa5QkDi3sCg9NQ1BJRQuL2bbHMsV4BYuogFw1s2wLVp2Fbo137d1UQX9pUdsBfPFLg",
  "key42": "5jR9WVAc2HcgxnRTujJzVzB1hs95XZQCuRVhjsJi9uyHtVz1ob6SsmonvuyoWkUtknQWcpQjNpgwtasLE9A8vt5V",
  "key43": "HnTyYCbd7sw5WWREtwrXhvuFBa6XftEDnuMMAu2n7hd8SwJFcAtuWbfywZN46i3Le1r7U1UXVEFPXcxzGhKwDP3",
  "key44": "5MHF4AqsiuKP5UNsmnSUpYG3x5UgYbBygvB9qJTWrqTRhpcnpn6Zuy6D44xBvE1nuzgkeZG8ZFbvLhhBwvpjBspK",
  "key45": "bFwjETBpXhVsTrDcySsNiZXx3KanGnPTRFuZNNnZDdRxQX8KAPKeqtSxhPLeUgQFeJASwJrNfS4xnfuvkiBqEWV"
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
