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
    "5bruNrVc1sqpiJoK7CbSkFwvJNc5CoyiCdxxJCorRdZD9TgJ16nCKD6GrPSP3N5xMVKE1xjsfD3G7tUXQG95uwhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f7XUhKaz9y7LGiSJ5VLEeMKhbNqo6jwufscAxhXDRyabrCJaczh6HKzxCtttpUuUAzDVarGN7yyjSoEh9FcNkhF",
  "key1": "4a52PDPLbaYcZ7iN4jvcAfktBCUhpoAmDqSRBsCHJQBiA7Hp2aku1XHPSSWkHYLfRYTRzKUUyJKJ5GmzkGZeM8vQ",
  "key2": "31RAAzZZRCsmmxGifaySg1YmcSH6VZ1xbQ4JNv8gEKjxo97j1fQYXF2sVFFYLYh44jm5KcUX4c9mTkeEBDVChJsP",
  "key3": "4wDWWtL7HcRXXXFbrKSWjyRv658x1gtougwoCbWM64b2cnBcMAFK6hpgxjYBiBb2KLsFYYzfZ9WXEgYNzZ25xBzG",
  "key4": "28eQgUhEZ3prq7MCf4g1bJxXAKyLVjL3FTMk3dAVPLWyWoqFvpR6ZdwFgxXp6yy1nWhSAV9keS4j9k3XznesmGsu",
  "key5": "25rU8agjoc5FEurrpq3WYx8RRPCE2ANXCyiY6ULTnaEfusN1eaxcjmhrw7geSZfNtFRMzrJN9yL9d5QbbPpKh3Nf",
  "key6": "2We9u3jfQYYobPS4tZE3mQtETadKZRQNVVjXryvk6bC5u5qbWFgqKEz41qbYbSWkjUuw46KfUB636dCUKCrxN3x6",
  "key7": "5jbPH9zAwpYk3T2bvPdTgYcCR4HgKNvdbvGeBevG6gFnWuVyayMMDuqPoawWsDeWsAA8W1kjBmiLvvYJSkah5yb1",
  "key8": "f7dvRyZ8m2EveaY4ZCZXmBuKr1sWyUwyFN33QBGbhcib2UydzidfUt53HQuErKiTSMfV6BfDb2rh6kCwZxrJbJ3",
  "key9": "376dW7v9WWC1VVW6J18uw8Hpo8hQicEn7aAQN2L4k2P5RiWaxhe82A5Yur3ikj7qmkvwKoJ15ENahwjuJmvhMaoT",
  "key10": "2r22yiVVSq77dW2v34MmFF7squ8DiNsQtNfU27CcWD4pGZZDtnFyjq4x8G2hg28oMEjL5vu8Du8hN7JNTucakT9A",
  "key11": "w9bZrKk8qQBvjBbex68aPHUfQ7iTiewxynzY6fHYzWFWUmPLtSN6Ey2TUajimodkBz2E4DE5EyuJWBaCsyd7Xv4",
  "key12": "vEqjkiwAEHTmGtfmjaEZHNZyVVY8QiEYAgEiz2jfkekpLSpNEuejXoYv8mLGR55kjA3PxxDcFmyozmuFo6D1iEB",
  "key13": "3Jf9PJhSAZiobhKmFVj6Ag2a6WLAkDWVz6y6SECDoLHJgB4U3ny3YvsWh12n8pmwvmCevq5eXF8AjRkzp4jyJyTm",
  "key14": "4LrhuzDwEeTTzQ4mThvyxr9Jdch1Kj57pfwwXVYJeWXJEpfqwZNM6QARFdDBAU5AWMyzZoRo9i1CNt7tj7QCxueY",
  "key15": "5JW9B23CmC9X5wqTtsQRSCiFtQTLJ5PBZsUMDWkikjTAJ3G6zguuC3kr67YUt5qKiVdb3R9jRkPPvxT8Xk7nWpaR",
  "key16": "3Eu19Yk35pLSrqTJqX8F5yBZ3qWgKgkqjCyThaBcrJv6hC7rNgKTHMGZQtxjLkLLxyoG5KFJKR5TgkyBB9i68jNn",
  "key17": "4JTkHuxDQWmJNniujRrNMW3mmYGrMMALLt96dRWLNGu7PExsSFYPJzLb6ARNCpT59dqTYfmTNoM8SZaszNT5PXuz",
  "key18": "4riDLnF1cmMGiHQZpDU4Y6HDW8pTRf5GmfkpHHZDSyxB9KpHTr8oaJram5DUuqBzcikRyKqDoqMrUPKcEcZbDmjQ",
  "key19": "5zNkpf2Z8WfUiFeSrMg3ZnmsMs7WHNEBsBC4YXD7sadbdEjfh26kmhVJnSS1GUWQY5MPdyQTThojuYgMqcCkxC73",
  "key20": "zwrKrYrB8pnaQgpm9JPENFrw1Jrzb4y582G4f4hUUJqPyMUPeqXR7ZqEW96hdtLtHCWrYouJKBev3eigiTVYpaa",
  "key21": "EjHVGEnMxgofwV7J6o6TXaWAnLARvS7cnv4EobP21LzYXC6EmHf76ftPb4EXEgaiYK6a5kjNhqTbvsUGs22LuMu",
  "key22": "bNtYQTGSRhSQLRpaGNjbQUJk14KumH6NLjhv44aXwVL69wtQgRCS3tGye3qd4JMoTcQBFc92H7frH5obRf9NQDV",
  "key23": "5WNJC3U5TJCJY1Mt54pUDYoA2QrxG6odH6xCUtPQdjx2T4jVXncmrhirt6cw5NKnB2WdpXUL3TnPh2pWkSxgR4Vv",
  "key24": "4ky483hES9Cjy61U7pKQQKm76KdfY2XTfQyiWE2Gka3CEFSXFhEE2GaqGJ7HqW74Y2aAz63bY3PbjBpLbUnA3JNo",
  "key25": "4JGMtFSQinkLMnDDfUB81kwjwJXJo8r181vkKy8H2nYxA2EfztrYtgkv1BYptmjoEHLyge1QHVu1FVzW7K96YjUB",
  "key26": "3KkHkRUbGJtAC8W4hAG44xDdrewgT76DPiwcYujUed4uYo2nKhhbqef2GjG9R7M28jx9MA1bTCGG3YQZk7VmkszJ",
  "key27": "XyPCpfFHqoz2PFGw3dXBMonJSzD6TGmdXcam5mAxGNJrsBWPM8J3iz45osApTug6RP9AH4oDKx3pNunLswwRdnb",
  "key28": "2Drf49Wf2nUoqhgrDNxLbc5purZStaHMPS1TE4syQ15CD92Bim8XdZA159tFNtw68iQQCfB7NLbgtc7tXNZmXrMv",
  "key29": "5nEVsj5RuM2BKXexrgdabhRzf1KnoQ2XRtVkg6szPUTaSfW4jQSBE7vgeTzFcqwtLpk4wZ7XicFKJsMyfZ5EDRCV",
  "key30": "5SoWEUy6yuDMx4vfkSyPSxBkwoNYknBuaqS1ZagyH2AkBbA7VD76b8ENYuf2ZuKE4CxLDppgBQTccwuHSoSz2X71",
  "key31": "3V6n1zC2Na6JfrGfja8zw48bsvJZLyeYoLdVzdRkVpH5z6cNdX5P3UrNDx5aixiEyBXaGgAx7n3byZ49QLwfj1TM",
  "key32": "5vMdnWVy3vaY8Q8cpM17Q43bymx2mZPHyWPJYEfTteSssM5og4TgBRddgkVSVG6Afc9it5LMLAphQgn6cAXcD6Zp",
  "key33": "5z6hmk7rbSD5DAaX2QjM7rECr5LZNA4y9BeJzBG7yUMWqwo1xTLifm3JoeveqQkhEiZ9kGWYEwviU9YMUGKAGzPX",
  "key34": "5fyyrV2skqHUxHg6qFcDy4t7r7t6ouNGTunY791N7HQWDGiLYRAvpC6uSAjRJ4GT4Bcy5fBK8qmyo2h3C11RArCQ",
  "key35": "5rkxNGCpS8ydJEyH4Gg5ivoEdPUyRcxM5YgxuZmtY28ATw3N941sMSXjGkQZLL3rX3TphTT1CsaDqqrcTpEWvgUF",
  "key36": "4HXtFvnE2wLTQa3oWW6ZjFMy5Gj3mXgmdmu93fiDYsDNqCBfbkSZcVeXTn8mpTNLFdn9qpNGFe9oAuVJ6v4dzjfR",
  "key37": "r1F65UujfHvjPf1LLYy9cdCXAn1x8eDJghGNvBuGswxVSLEumSHzsjhGi4LJLChVX636mVSWor9hnJPtnCASphz",
  "key38": "5fnTzegxFJSULyJPZmSnbbiZV76j5WTJoQ7Nmmq9miRR6R5jVpiG4oWn5Kbu9UpRQvR6UkcZMJ1dALXKcQSnW61Y",
  "key39": "Ukg1LNErnPzscpTmRVf3xSh2dG1KjboAgKvHoqhgvqTzsgSB2ZU422AbRTuueEwG7bSWR6YPUdThe4XQ5LkDxaR",
  "key40": "42jdJqDzsmWThuWZDRa5HMMKHPbF3n7BLm2M2UKfQvhYpvzxBu6x8ZT9FMkFA8A3XsLHgSaffZAssAcGVC2ri1fQ",
  "key41": "3eZXLJRrov2jc5RSfDFDxhfd8SftktNZDXNExgtRxPYDPvuBnhQ8XTQ6Av75hVExpL6VGLxhey2KJvC4vGew96bP",
  "key42": "3nRYFtjhZSHFRc9q63x6viuXom2HzUCGAbBWD9ZN9EVWgK5Mb1iXdxfKXA67RZJzSGvgH6KhyXq2ASzrxvGXKxrg",
  "key43": "32vQ5896M6B6ct9sqygqDgD8qmztKdtKWZ2Kj9p5Zg4kMQLXXNRZuZgvk3ah7UWyWjHA3g95KDZcVLq6NyMaPTCP",
  "key44": "5ukQkFT6EUcTkH3pdtsXgA2mYirRo4n4xdYY6xX5wLKn5iHWtrCy1xe9S2wBKd9iXXQoBnZLDJ5mD77MGpfm7X1V",
  "key45": "kBPApsZGC1sGcS9jDsnj3Xee2i9fQ4dMGJXPcApqwVFqUZpTQ4gNV5AXFf3XdSeL6VbXPfH34N2j7LpMyyhYVx3",
  "key46": "4YB3N8169bAnnPQwrA5KedXCS52DZSxWAS5qN5cDvadKb8voX338izCpiGsQ2XCfy1FegCigFtXsjUxJWUy7F5o3",
  "key47": "aKMcR91F2CyfZ5D4EPCX3XYzcxYu5p6ygENveJCNyPXdsw6Y3RqZtc3hCYnUU8MSjwz4nS4KRiK7DZYjLcXLggP",
  "key48": "39FRUARotFEuSDPqAFy7FjL1oVrGtUBYq2KtXZHG19Y7iU1jp8KrKgRDxew7jxvH9gbokyexDzvJm296RkyccpDm"
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
