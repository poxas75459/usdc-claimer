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
    "tk5Zx4u7TDsok4HrBsQaSNph9ag7iyXQ8Cgw9CrCBbmBphrvnP2upL2xRHzVrbhKU4ULYeB6FbLC6whD7pG8hYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54zbK68Vkz1zmjVeM7pJ5nWiekLhFBYoHmLzErnQuDNQvJZi1VRZKRs2Rjdh8MdpzhkjkXAiMtUEjZm7rPYW7joh",
  "key1": "4v86TVUnVjdVD2JL3tfGTc8Zo7CqLcGXrTw6wsBqACtHnxZdyPxm5WQmRzvRfMspfHn3iiCW6GeJNQtWdDdAvfce",
  "key2": "3BKJJ6TDY5JHAocLmcpg89hdjB5UMP1xks9NRUxspiXbLsFSM9zesLkCu2ENcYSYi9StuusDm4DYvz7DP2u3nhwu",
  "key3": "4VmEKs5o6XkD3yHmaw4d1sh9BMnvEgtCMN1Q5s8GRAcKd7aF2pLuFMfZ1yDXGBnY3MzM4JUSwB17Q51LaULeEdnj",
  "key4": "3KVQQmF5DtboiFJT8gkMPqirbZu7nFNVfH3X3CsHYXzTYZmeEw6Md4bigLm9ey49UxsJwPzN9XCbq9skN7nmTGVe",
  "key5": "5EeApvDD2uwCiAK2aZLCDApvPm1xKt4MfVCY8WSQqJrWBWgqDnAZu1KuHp9m3Uykg4iB6scGZ3xttdX6QzunuJFS",
  "key6": "5SE9shY5VjhZbD3sutKjmHdCZEsBDnYo9Pr7erPYYuCuKETVaLg49vkx5bYT1E2oxJDHEBS1TerNorMxWjzw3tDP",
  "key7": "2CdB6PV2VHYTM1cjRSeAsMa1AeeDqWnDxFzSAxv3q2QnMcoqso6kGVjPCEY99ddjazbC7rcovXBQ26JWaio5sXXD",
  "key8": "4tk98QR62SsSqqXQ7osV47RvAiQe8i1EqSA3YW3riVhGHMiPS7FiGjThSbknwVNhLPh6FsFkS4JBBAkXRv1x2VaV",
  "key9": "5M5qvfhfWQtcWZBEb5Gmp9PDoxCQ9n9LSh3AC5MMvk9CFQGdiwJXaG1FMR7A8FDre8GqPJbJdQJFbLziLZsJL2KY",
  "key10": "XwrwRkdMg6qnHy1QXLJBhSZLFGHzwvLSV1px34o2EDkaZd26MW73cbmj11RCFDkDuCbhe7R8a6KpvqaY1WPcfUq",
  "key11": "4rbN4GHTQn7v7napXw5NtAvZaLujUpz6UofqrSLdQk6mrLts82LRR9v4Tniwjtav9d9Hppx6QkV45gZjHXXxmnbT",
  "key12": "AbPYFWaRJNs2nTExzM4bXdQXnVNPGPmcfi5h2DFobZy9rhbx34CxgWLCc8WJCJ8LgCKyV7UyzuWphuumVsUVtBC",
  "key13": "3DDYzFP9y3PWgakieUoQSfEHmhEQcGuXqYewoNmb3x84qHZZHE4GAsT6LUg3yT88aktotWBKh4FgiFQqYoxQp992",
  "key14": "5gYUt2SKXvK49TQYeY3kD5tsyAeJBZfh59J7zQ8gVpQnvgr4PKSVWiTwFJqNrEst8DWFncbHBZDfrwmBo8zksmWh",
  "key15": "EWjCvx8a1t1mFHv6Hn3tKpzQQJ48edrT81kTZHXednog4juVKGaPDFdd7gPpmn4dJ6pHzmAD8KnCtxfhBMgUnsj",
  "key16": "jVtJwML2uLgEYhWjpVnajhYCnDTk1apMqshFVB3BgiNkAMGF7YKweUk6ukoejDA9zKyBZ1SjVbLLm6btxeb2ViC",
  "key17": "yzdkAhMCL7MXCKJnfNm6ZHZKdMKrFiEPh67E7Eq7bLMovvWzD4uzWVYQoAU4T9zTr9Er4CRt1j1NE77Gj744tmu",
  "key18": "3cB11Bo7ywaaCbpJivE7859noYobiqPHKRf6dmsGEGUPqsfpJFMogMxhQ5cC313FGa3rPjnLh3ktPHyBbjRpnQp3",
  "key19": "39JpcjWRPMC3sCFDYzyHEK7dTd9yUaA63WcnJZRWTUCWQKAvT1xbAzDm2u5s6TzBY6LU6azTCrAMk6m7zw3jGM32",
  "key20": "c6kFrqGpakwz5br38TRJ4GDmWzLzsL26vdG4QhuBdg1PRZr4yjf1ZvnHmnwqLXJJXBUp1PxjiARVsMUzLTZmAX6",
  "key21": "4zAyywAQXfBQy7qmhHhcJBMdxS3jQTdvcSYCiNXEJ24vKMhq3efuFk1epNrCQ9i5kqTvYFSQgyD2UeoNurj8NbkZ",
  "key22": "3RoKMZhepf3eg5JD1DgQWaYx4bLD1ZtKxuBVF2aomAPi4oFFrqZawRJXcdCf42zcW8e3i9vaTV9RpYr1M3T6HmkP",
  "key23": "2ADDFoRyjGC26WhbPYYBS7p4aAn5Pd2ZmvVzbpPiP5areqk7Nw5wYJaq2oRdwBut3jgddreYTQMkTPEFqct95u9g",
  "key24": "TQ1mqE3iV3equB92wLX28qXDiQBprk894uXZYXitAY9TE2vmAGPtDVxHRFBj41WwJbDkJ6zR6HzFZP1kLEYR9Up",
  "key25": "hgorXK7FJpsHMzgNV5i3aqC2spf83RBuKq1gxBrirN1bjwUA2o6oD7NudKjARvDXnd6StSeWZ9zL9JyRv7psXW6",
  "key26": "451Xjpf364tWJcURuvSDMgTB7GqfciXhqGv8Uwe6EAGv4NwwDz5qdYtRJA7rgotZPBCCHNY7z6sPGdcrCBqWK4Pw",
  "key27": "5RKZ9vgQcEXTMFYFqrHGaMGEyqnMdySNhRNM4yLWbFTQ92zNSfPDNRZBk8H5ucCihWwjaLC3dXmAHz8t1TN4ir3v",
  "key28": "5z7ZcdWoeSadPs377jfcDsMVnpK2kz8G3sdTvVaDxwpXp6PfBvapRknC9U7RGNmUUos8JWwJs9qUQmMtCovkjGXL",
  "key29": "5T8CgHNdaH6N1dvnrXa3TkGUtN46o66at3HatqhzUvFhsuxwSKEBpPMykVssibvmTMAkLA6xNjnaD8MxamKw71iD",
  "key30": "3QEaGMj6xYEDQPJ7VKQ45VhiSwUNWH7LrsYJvXpTpbJwhjoJX5eTnp1kmXgscb1rMcN7Z66s9nYvKME43edMjhX6",
  "key31": "54LdwgAMcH5iba6QoMEzPxKXZymioC8dfnmmQNwCteDXYCndqQfP7XRwGDny1KPTPaEjbhmZvKwdNQxcp71zxXZW",
  "key32": "5wjRrgVEU5zLTSm8b5tBAP59gaLHxCeBGZWTVeTo2B1NuHx7Xv4FMGtNQQxTQYYhPXHFZN8mFXRLZfmXUzsaheBD",
  "key33": "5sFGqHLdn1QkFUuhHbXNZJpVtcFxcaQU3swin3fbr3n27pgNk4Mz4c3YnGcQY3g4g57mE9w6xuEEykxECY8Ti1Xs",
  "key34": "3agGL5mGBA4hPXCEg282yTuBDTH4TPYnBcNuqvYHApu6LqJXQE7iGemcaUGNSSU17DmHaY2mREfuRTyVrAaSBN3e",
  "key35": "2NunANVCBzV28QBEGaQGDMGPecVqA1GSrzk5igm2kKsXe8HMhNMpfC8ghcwHoZ9PLuRFFnPDrKuBuToSxQVXhH6P",
  "key36": "bCUw8gyiUty9YSWA5kW7jj2BMUSicwsF3BAAKE6KhvD3oo8C3v9tzWKiGzgRTA8udV7jdNDvy13Z3Gy28Qu8cxU",
  "key37": "2x9nYgd7WsbxC5dnnZRLTBdVaYxN3ZgFPeiGWyAdL9SWT4fuaeEUSPzTPoPSPfgaa3Na4HPSGciWDzy9dzYdvF36",
  "key38": "5BTJCVCkm6eVawn41LY3v4iDfcpG9RDzNGW4G3RJ8QLwdZd8VsPG6QMji6GHrSVE4JDUXWDWHZvJ4modbAXdsi33",
  "key39": "5PVFE4BdABuHjbPTLxMWM7mm1BYjbVUucDj6qpsi9YBLeKS1wb8Ai67Ro7FbPzZJP27AKCRA1MuGoBYwG4gLXzid",
  "key40": "4KeayJ9QfAcvNGzsqdoMbLhzxzQkNA1DqZ63sGXjXEvNrT6g1hCazUvq5r5po35uu8pjBkVaiLsLaCLfvh84zFK9",
  "key41": "64SwPcHUGkkwQKqkrhjmX2qf2WPcy3oS7ajfQYE9gfP848HbRY3472w5sYZAmjPvT1vCfZntKVTDMkkYc9V7gonh",
  "key42": "57qLMg85jdZjfhv9daREhgGVzJHDRzmZp9wktypqHNWs24Utywcqnhb5vvCzZMGQvWte3GCGd1VSfWXh3kJc1jU8",
  "key43": "4iAZppDuJnmwVrzGPz48BsjC2nQzkZZJAsfPANUmvKBgmXdp3M8wbk2FYFgowy6ghV2SyHvVZ4kpwF9UufYKwAnb",
  "key44": "57UQScahDX68HL47jZCKRXRLKN6mH9w6ncVx8NUWQL8kvHatsTkvKtq1fzBWJpYrz9f9wXRbn7izWihoePtBtSZo",
  "key45": "241xnnRTLZdWS1A8AvnNgqm4u5dRLeKYbrvz56s7xF6PimwE5qGbisT9EAjUBNbs2M5m2hMt5zjWeVteJx2YvHio",
  "key46": "3fhnwEH5Fu56Yf1PbGzic1KxGdKojKcSzBqNahBwKWhuk9fZt7nRs8XemaTZ9isQSVCtoLvd7ceqqT7kMApygSHp",
  "key47": "3bc48PQDP9DUHAo3S5nYEdJm8GiAC7HiFQjVeb4EFxj8Xd8wRNSBRTGiXokpwicmG6hmQQdsBt2U3bFswzgKt9ZF",
  "key48": "4myciXEhUNWanjcbwTaZFMZaCbE9whtdjndaw3Qj8yoDQWPyzNotRz2eH9LLUapQVz8Z3SxL3ChaY7ZN5QttNYs2"
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
