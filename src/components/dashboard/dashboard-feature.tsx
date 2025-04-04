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
    "2mqQeji8wDPBjM8qpUgDmShoQVK7Xm9cdTgBBu2mmtLLBq2iRf1WeSU258LyWus1iHFyxJChggGrCzWFYSoJoXXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39gTXuJdfnTLAYM1kTZHBp5i8NkCgRNWBy3Z1Wi1pSsnJKYqGFqmZeZa91FCdqQkzDKQd6JB1HRJAX8jQByKWH15",
  "key1": "5YRnJa7XKLrdGHGLSuEE1nzpdN314zK7ec1ew1jU8kE2GW5TfjMRxWeEutmCJkRf5A2gEijVAkeL33sMnGBGU2ak",
  "key2": "96iV7YgPXs7nXbmezVZMXHHGzEDnp4yA6wpenTCpr613WuEDCcTSCZDtJfAnvSTdkoXsLg1o6HMYfAZPWRqYHqo",
  "key3": "4an9m9VANjoaMN4rGjLc2Vzes8qJbzLYLMvogyELAqroc3c2NVAhHFaaekb7NiFVpu6P2TuVyrA82d517yHnv81t",
  "key4": "5xUj8tZZBPAhnHqG88Cs4Mao2vMcqRH7vVnkYf7y9phARpe8uLPbZtMuttKXMKAG6P6FWwE7J64S1u4b8s4hY4c1",
  "key5": "2zrbPVFYuXFcGuCJ1xi2bf8JDWiChdVa24dq4ChMjij1RjgNm7Wau3euYtTWsSahVfMu1r6z5qtW6JPgyBPeChQB",
  "key6": "4VFgczdtCDm9xS31YWfxgNSTN1rv3mH8PukCkX37YM7mfsfUKgFH8Wry1Gz8yFHqnZVfnsrpmHoNKNCrahoDmK9X",
  "key7": "3karytoVpSCzWt4r2iq62QQBsb97UZABjgYpofmWLg7iGXkbeZzMu4c6ewWifpduG3BvH5zTwMqJnPpdHtpQ9bhN",
  "key8": "52SHezVLmYKXga1Yi4kDuguYqKNKmvZq8d1BEdX8mZnR4MVxW8sy5Djx5q4GZoMTM3JLbkj5t2Xx3X1xebVxrfm5",
  "key9": "4EUegXCHLtKQdBYXHYzs7YAsxMhYwQWMCwVrWwWeEQ48HrAmMxHuBe586U8BMv2BgV5y1K7tmq5ZL7gS4DBd1N8i",
  "key10": "UEfh84ubPxhBShMnRSFv2cqZWmk9s4R1Q6FE3H4sCwBLacT6FZTBarZgKFn7THnu497LX9UeShpHcbdrcbKv25g",
  "key11": "2CSdC7fAht1UM46HQP861e2j4stESZ3i4XBQUEDQmbR36DBChBSUCovtu7jkmgCv6EP6CT8fdsRjVos55xiR67J",
  "key12": "65PSfPnmqKXHxyxGQakZdsajmnJsCcwD4vut8cudyiqz3AhLrxLzCsdt15yf7e3NHx5wqWd46dJtB2KzBC4iWXpx",
  "key13": "7qgxm3gVRZJDGnJJk3nbVcpLdJDNE1aSabpPGT4tL1m2YeviZdJGTJreiPxSUHiVxnj8G77ULswt9wZEPCrUzfp",
  "key14": "58pPCYDtCaLMU3HK45dvTFEs4ieEAcgWRG4XasqhLjofmNDByqXR6HxGXuxhUEaZSGjbJdCAQfXDD8tLcMeySAXj",
  "key15": "5hBFMRNutfPa8QdT3YX7CeeKxzyrhv7u1fEF6f2UgQJFHtecPAURyXNiyiopMFHRuG5m3BFDBtgnB2MizRNhPAnm",
  "key16": "4mtKd2ZNngRMvjeUFxvrzA3VRbFTiZQft4UvRL7WHu77NUNPmANK4NZPXE2QVbmwL8Tiwh98MNn7HF5XdtnWmRPu",
  "key17": "4zCiLoVYiNz2DiXjRvNsY5JKHHoHhFDUKtCyyR6AfuRLNjczMmJef34BoF8rKNThogcZJo2ALEF8YyJKmntDTpUy",
  "key18": "3XhHYCxdoxy7po6L5REN3SEjGQv5XvK1Epiyicp7U9ShdbFQiSxJnZFELbKr7JE4vanxTengG8wF7RmsFC4XgUaL",
  "key19": "4Ai6ZME6W6BDt79qsaVQghbGU1WZJ8rcyeRJCBEhBVkYyLrNarpx1C8KKTs4XU42txTHibUcbautWzGsug9nGSUQ",
  "key20": "5v8YHqyr948d4gmpu4VaQzH4w2KmjFo8Ywg2LFSAKcAe8AFpChUCMTwxU4NA8te5RctE8Yjs78bgQuMJpbPQWyhT",
  "key21": "3fKtR2qq52CCERzo7UxZFvHnGnpa9nAvSbmcGqj1sqvVFeEpZNoEmZoTzBY3AdeaWqmo1xr9igSLc5t6QfKGAjWQ",
  "key22": "4dNP1qj8Nw1X2i8irSZABjRYRzQM8eAeSFjQ2WZD21KwMEDdaQmftRcCTbQFVB2L78VUsrTa9Fsofa1eFUKkVH3e",
  "key23": "2MVh9bVZq3oHHKoo252JVjV2WTtxKJL15uys5VKcS2RzwnmyMf9MRw2mt2CoJEaFmLFVMQ2QEUc8cbn1s3Wxjbeb",
  "key24": "4KVJAQdb6mtjC2sNDGyDT3e77np1eXfbazxKsJ7L1igAgrQ6q9hmgqtCzr2eWi7aezcCtegn9VBMVBBGFxB6jBgb",
  "key25": "3Y9hGusfSsQfiJRVBX1i1xn969gN3KUr5taqHqgQhXMYkeHoZuDrW3MjEXem8jTpKYq7NxLRqVgY9U87NSgr67jL",
  "key26": "2yE2NkwPWoDRNQynxgadori8cj3V4zC7jWAj4UhcJBsY6vwb9Trmmh4PEmyNji1oGJ1KioiCCQUpmVXs1At946Y1",
  "key27": "DqEQJfmKWZ5PDwgszZNRGRPHFc8cwRmq33ogs8xvBYebSQewLL7Najb7jXVH7Xj6y6fpNZPNQjm1Ffjj6K5cB47",
  "key28": "42QhVybyGrxuNZTkRcFPZ628N8HENfN148z3EbM37jJXWktaLtquZf6uztdcj4M91f3uN41DtLhVpZNodisX7DVb",
  "key29": "4sFDSNwqcYQTU4JEHbrPKEJBs1As6PzxAKyt3uxhMswH4WZV3XNyaFY7LGuw9qorxQ4tthMW74ApECWU3ET5jFLW",
  "key30": "5wrpVryS6NrQkpG7FhYDTocna9eCT2hPgyDKQXFr7HqPyzhXYGZzA2zBYd9Dj9aGcP1jKyU8x1CMGwxKGRjmKMdp",
  "key31": "2WnJrxWdjadzKh3BkhadohepQQbpfGgjRYzEbpjaTwedyYBwfQinagkoLh2PeS6nYNchuXRW1RQUDCQtQEbf19NN",
  "key32": "3J9QZqoe9Rtnx9csQoecAZhT6xqhSdxp1x9ZJRFhZJpGm8dphaW19bNQKPUT8GbC89JPf58JvqHFZ5sZiTmmSPn9",
  "key33": "61THQfjDd4rMErDhhMaxKhKqj8VTXZMvNkwbHAxNUMdJQFBTm3JWivAdBvf8Yudjms52QVhExxBH41riZUaKYTyy",
  "key34": "5qiwjZyJKoTWDF61t8kE7ZJKbLU6hsb3UAHBKRuwFJv91kTsMhw1eeAbQsPTp2gnMyHHZsyLaDk9FA1pQUDCNi3j",
  "key35": "tPJub72Anp6r1KgAf3vmo9titZ76dfTAjnY9ALpevdBu3QTmm3RFeJxSTfAGNNZuo1HWuRYkqQR5BfAonMHCNob",
  "key36": "31wdnWGkzxyo5KKJs1ncq2aTE74Lwm4h7DpuAf9cfviWpUW8KDfHR8dZM3vrv66qpdcaNJLQBamzCJQwfNxPTM8h",
  "key37": "5FyfSm5GoJfRpVQHGJaPnDsgfHreufwbDu2CQ4wYfKo1aKXa6HKDjw8JiGYkZW2d74Fq1FqN6oGbD83wrsMxV3Yg",
  "key38": "43YkKQtmFp8qEHwcZoQEo9njZrxuYFwPcNEZA3g1wNdv5TssdXnaK7hxweQPNHrYB7vNwsVm6ABfaYZX7Xa4JXuR",
  "key39": "2uehFUDb3kGxTAomBXrJAX29NTVv7n1MMmGhLc2foWXSyvXy3KEHgQL3Ezt6baBc5Di9dU4Vizx1ZzmXENiA8kLb",
  "key40": "2DdHTabaHX66XJZzZMDNys6krT1xBJM8AdDzne5VAREyKCUayyHWo6PQRZ3dQYmg7G1dsV5SHFwC4wHvZpK5dqNG",
  "key41": "3Esd5Ra8fZfsUpHnLJYKyBGQEZFAig5sBAvxn3GnjZ4ysjHQyXjxHz33wfGMtBVR5kNTK656fDxCE8NJFa5vTw9",
  "key42": "59vGjgvdSznyE9ipeNK2BWT4a59Lej1jBVxDeqgrCc3fgQZBhzzyTKToUEHjfYkg4ycy5fNVPCCauXGx8Zzc8YUk",
  "key43": "8RRaFoTCjVWksiV7FZiVfMpHjJbKFWx5jUMM6ZXaoiB65f3JC4wD8NdixB3TD34iTfBNZCWcihvb1xSYsEYwQhy",
  "key44": "4UeJUD2eb9T32iAwDCA6QdF8spv842WMDAkgw41weehbWUnR7D8wQTMrjADsAhBu8S1o4gEVLKjssNC3Rf1dWM3Y",
  "key45": "5oSPqhzz4txGAk9G8DizhSiXp9kmZx1EERtLgiufU75joX3Dn6DXBCpiT4XvyJSdpjzowNhyM65uoWQjuqCLGB5n"
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
