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
    "3KCTNrHmoVZyiaBs9MTurSt1hz5UdHBu5HR1an6JCfanRZksxhXUSJt5LBHpm4kJ1NaUtH13f4wrvQ6WZaiyecUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J4hnHM9fyhNTwfX2ACdf2QyDcVhQRZQSsmjM9GYZ7qSffdapESSjgcLM8gQZuv7hLFPhYgWtJYJcRLUptWS7fJ2",
  "key1": "GkAk9AZZc9MSLwYc4wFmCmN3WBrMGVQmAydyHujVQLt9st5ZK5tF3eF74v79ALtR4mCgZ4b7N5fzQWTQXfPvhzt",
  "key2": "5wQA6LwDkNfB55jJwKePZkKtXFzJPSQdkhSa9KwzxaNNK9L9dYnvoo6ffjcDnt61unw64RrDJAgZ9pVCQHYa4mrX",
  "key3": "2fDPvnbwPXQ69DyFBPZ12Gw7DYvS3WJzgwaERKtHRJPaDP2Fcoy5cvuusPPV5fsDKE8AMtgvnGjAryvrAQYUZQKa",
  "key4": "5ddAuwv59HR9BztkSDQC7kQ8Hi8RA8eH24hvHPj4gGsenK5J7dXvjEPWoict2HcWgTLrMQaHiay9i4hjoX41VU4k",
  "key5": "iXB7ootc2Q8iKgZ65Ng2ztwrfiLR9sMgx6w5LXTNLEmSJguDyyYJMfhnntwo262Xd4myDM5UeRYC26KyTfM91Ce",
  "key6": "2dnrrr2j2VtW6mTzQsL8t5B7x2odb4JRtaADnDUC9zdJuK8s9vbGK8J8HuMx9qB18UyYQXxys41Kh9L8Fbku6VhM",
  "key7": "4XbF4GdkGsMQNXHEsp6WLNApyfbo64r1ZyuVSJcqpi3uuFLc6Ymsg9M97XW2VYxDnAPUbThCbBjHyCVYCy7RnJ6r",
  "key8": "2Mx3gB93jB4kgHDKmStrm4USyMTN47WemE6G7deF3fEeJqrRVatPfaNUaWikYzLQHTKoq7kCjqgMEe7KgEmZERxP",
  "key9": "22DnDsjyDYaJPtyHx7f4DGgigsaMWtjNEqyip3U1FAvE9mcaU5UmgxVDYwPio4uRMMqoRYszehxa5vrEbTbnrhj5",
  "key10": "5vtCgqzGNjJ6vLk35hEaQHX18aEpmvdutcHhJiXMFMRz4xKCQvLLBshCULYjQXQjjJkjBfoKh9xFn9K5jNJ3Xymy",
  "key11": "j7bWPKzM6piHhcKhJUvXZ4t4CG9YWaNHhUaztHFebXSgsYgUmq5VbE4QTnwevo95GvGAJrGiYm35K3AEQoqXLNs",
  "key12": "hh7ReB8J17WzzeMymVGBhxkuXBU9GR8sfHvbBDNT3SCGmJy6tTaMSSSyA9UBfnvgrsRzEibb1mqUhAAumfzUxcu",
  "key13": "4z8bABxpyhEa7U3JPNZ59odUgkLMgzR2HxiRPKx38qGxQs4GzwnhgMVLpySctxVeNsE1Yp1rdQZMCy6k4cU8GcSf",
  "key14": "4aJQMkWxELENv3KJ4jARErVJG51RXzQwF2wLTvQMh2rbcEc8joHpJD8mP2JXgM5kRNHKChTaXWSzsFqyXLcz3x19",
  "key15": "363Jsug3nUnA57XbSEL8r2De5m7AaR62VUjaj1bpyGxJCNKw634z5BiAhzBpCh9ugv9wJPx66PpWSETuMuUGvqTa",
  "key16": "2Js9R8UyocQskJZNTw7KexBzWnmmLukD5CPSWJYzps8La4T2gaVQGgBcJUG1uzCsaFoZnkFSYWDXnBhMVyVTD73y",
  "key17": "27xXd966VRNt31x6vpMe2dgGQQjR6gGA584aWCWLYxB1fArjUKUZ5Rj1dTnHN2qg73UgkKzq7hLZsN4LKLDzdvFL",
  "key18": "2CQJDMx7y2Wt2wUDLNiUz9Ysi3VjLWgKL2BkJpRHEbXs1t3xqfHAexpfz2tQ2rAYZTU8JS78DAUd5XDKgsY7FVCp",
  "key19": "3BCgohSx3JYmWMReALgorxoLwBWGuAAjdjV4w9fCHPBFomjXWr2RoUEre6uSLy4pXgdjp1aKCyAtPHn9k5JoWSjf",
  "key20": "ySehqLSi8uHR4pnrPWpXFKdEfY399kF9KwmRXZZybPCNGWHUZ5iw7e4ZScgviwE26JhvKfgpAaz4EYrKBrh6jFQ",
  "key21": "2Meh63fAoSmb3YJuARC1naVRf4P6WxE32hhmgZfnA5dik8cmYV6JPVAx3JFEmeiounSDn9oDN3F8ce8w5FrTA8mN",
  "key22": "49fMzBaEFc74dHszHUueox3tJi7rwuDVKeKXwh9DRwa5Hmjg1eVN52mj9YtY26vGRdmvvm3yz3ePHHJjuvjKubAY",
  "key23": "57T1JuddHx67AGYa9FGAen77z26KxgaJkyxwKxCgkrAuDvrLzYgyJKyV4Q3rjyjjZ5RQUqDK1C8i5XSxdcyMVnvQ",
  "key24": "2GFBPT8yJyjtiqfcubbz4XSoFG9e3aQanApu1PC6FSa8R7KKtJtyuM5hSoT7N7E92E5kCseVx8VsZSqmyGiDrAt1",
  "key25": "54C9N9o96kKqJoJGJn2BXWc6DEtjzFCkSRgsX5yyvYG2e6F3WhoA6oikiRSrRJpMc6ugvwzh9fqmLWZw3abDgZEK",
  "key26": "5JsWG1XrJ2RSgKxWvREqMaQ2v5uAKPoqFNooMdQo6sT6hNnPBfuXLCLHCgvDoFYUpLjWtR8mPQ5r3nKqrorq71Uj",
  "key27": "2xfzGzq3avSDoMKiqaTwKXfoRb15MbqMakmZQmwPdbcrSw33mKvdGZqLb1MuNVCejofH9qxvsnvMg9WVi1Un2ACM",
  "key28": "54MfKQTftwufGhnrTyMFuoQaLjWkMVCHwVQaAC2opV4u3iaEwrpw79kTXYZLDEthFhAn955FcieLRDnvuHas6jDC",
  "key29": "2MCMBWjYqv5DBnLw3vdatkQNFGFs82VmEo1UmdRiXYRRgrnACUpUZu8URhAzoufdfLTn6Gen27cRNZVF8YHtXa5K",
  "key30": "T97dQ4mxCU5M27KtEF5EA21gtSSAgZTjhz3jXqfvihiipqyN116mhxKQmvuZH5L9CqDioqzVJqcPXAJ8VNHQTA8",
  "key31": "5qKJCyTeBhHyvXh3xeQeqNNKVvbSxDs9k8pHXyU38cEhnvtavYteDn1Sd24op8danHK66qXvDSGn4w7KkaU4wj1T",
  "key32": "3e6GDDNt9Qa3C7WTjry4z9XM5LU2j9Rr13Zn8kSeAvZ33bqNSanARkwXc8jx9kf1rnd8cXAbzfeirF2fEG7xHfBJ",
  "key33": "23HhFXMGvC1deDQckQSjN2nGqpKzArtRgy8P2og4UdwLT3znpQTaSjvBsw8UjFE9UE1QvMmj2QbQEt2NXuJLJxcT",
  "key34": "3EHLfeAKAv6kcfhUnoEMdNL6kVhFVXhwZaSXVc2nRGEvAJTLqM4hHCPMXEZWGkrkMfB3u9xhK514iY8ANsnpUCa1",
  "key35": "omzS1yVumi3uPv8EZcodJ34R6i5bE9vhiXmAnZ7tEK6kLERLJsLFg5JwZqLr7CuamiYhTvKJRMQBEGoko6WHdxE",
  "key36": "4cXkFfqguiX1f4nKGjwZbTPSJtoYuTTnkYizFzmGafUR5SnaSoTJqnMTpqzK1ph7bozaC2NFzY91tUiMD9biLQor",
  "key37": "rShcy96sxfEgNR5jGfaY3o6xoYnFQT7LBvdtxMoYw47HFtbwEpHjWcGnq8p4GtQ5G9dcHj9Y6dT4nCLomKPhmVp",
  "key38": "2np1Q1Qp7RvyvWjeSbf1A2yUq4eBTYFfC5eLnHqQ2cwupbKpm7YvPoRHTgnRivLt6c6sHk2mEeQqtYQAWLeXwSrz",
  "key39": "51XHoUD5sEbATMW5mcb2iEWXN7pbxsSpBXcq9ekq1nL76TX4rd5shH8QQwBdbCBidc9i2EySUZC8duVaNwvdz7nF",
  "key40": "5C6mLoQgt1BzAiLFWH2cTT2haTh2Q8ARFUwhns9oBW9pm2cAHWPUq9HDx1V5dmPqRHxuD9fcZ9D5iNzsRDxNyvi1",
  "key41": "2ZBhfv8NW5qDoo1gDbJTbjobCR4zega2xS76vTnudF95Vc8GP7ynpTFaH4DFsdtNMMxLpJfrcqBqj11vugkgfisW",
  "key42": "5Ei1CfeMpX9Psc6k1JR4Dciv6RjK1iwfaQfP2QHfUcDApr7sMvV2WuBfwLzMsi4jamqw4iM3XMpMkBY6ND9pXSCB",
  "key43": "5svJPwHBsY3utavpDX72KHFuLNiWwNyRVEdWKsMrs9yCD3z7nSZ97baB8bDRVqgZMn42RzMwrhzUsTxWmy6khaEn",
  "key44": "5ZJFc4jrfaPuZ7y1UdHj5FgH8Cw7uBXx65LSkhTrHQb79apESCZtK3zypkXkPXnAoZuNUmDy7SY5mYuo8V8qQg7f",
  "key45": "656ZavBNJN5MTfxuzZ8Ao43rpfWsb2BCLFCxRz6zuzD1oMN7gABNj6mp4vkB5Ue1Xc34DFgTVN1C5nijfcpKVAwg",
  "key46": "4B1ntWTqJvJYe5oArufc5iUYfjxTsYxCR6m2F1STZ7GzfcJc16KxD6EoALmBfQ1PZ4ussQP1xoGUwU2HRkaUYAAm",
  "key47": "2yz57Ff5wRCT1oCSYESKqT5s2UvoQyxpxkVwHteRfUEdo45UfghdtmwkEB5G1fgDfvKPQjQvwKohenV6QWQCAdDU",
  "key48": "2dpHk2mzHTwX7nVu82LxWvgKGzwbgJ7tSzmMmGiZuiHmBUktJftJLdpsXjoS9JzRNeNjxZuuZhMKUVH3VpYvQ5Lh",
  "key49": "qfufvE6m5N4DVov8Xg9wEbMCdGjiWovsBPqKENjrjGsA8LqLNqZTn1V5HgeAcWgtSxbyb3QrkjmoQovRiPGZ3Uw"
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
