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
    "4vrHdcimty8JNEsoqZfaWG7j7buvrGVt1pKMh1JA2yQARipXGdycRqXQ5S6RXW36eYhEDi9X3SaVLsXdci85nDJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GaENfNcq1uMQb9pqQJhXssWoNiBwp5avqyfebzgqkuz5VRNhJ2mn8a8vYEkhern7seTgttw3GDoBVsXsQZPWnkK",
  "key1": "2Mbyb4udKmmZ39SSVg5o1CDzyRtKGhsvecTiwHLMo72ZyFBhh6YrwrP2VPDJd5bKyuCvx2nSj8czzUGcj5uw4MA",
  "key2": "5585ZKjkvqGmTkWCXcGG5ueZSMFsaW9ryEmpa26XELdrV7jpsoK45jH8gXJQ6JLSmLsjcf9QfvGQ8m3zRpXtqWcS",
  "key3": "5NtYcV8H9McXrVujhwmjkjLmMUmA8DVhuVVRxbbv28DFg5tVyHUDCdZTJbMoxQy3vojhxB6D9jE89kdoQnwMVji8",
  "key4": "MVTesm7v5CHpVQLCuPH6rZd1uQQaKgtiKC5VKZKcmMDwZYoPDRyax66ixMQzpzDeNKyiZGErUYKHXRMcdubV96u",
  "key5": "21HMJNYggfbi6EPgz5u9kFReH5pCkZ52ej4LcWdd4Gs4L5v3WMnGCsipTvvRxrttUfpmkaL3HMZTce8og2xgtNXx",
  "key6": "21AWbT6UuowB2fZkWiEdYFxGUcE2yoKCzpuikPN9xXDtWCAgmQSxh1H64GPxuXFqSu5MdxxsXRefAQzgDKsZtieD",
  "key7": "dC4nYbGnzCU4TKA36UTVgh9tEVN5dLh7QYs2bwVGNc2A3o6zTUQNGUVBRqpidRjzpyvMwWDf4QGNK7yzyhSVQ86",
  "key8": "2w3tTGCk6mGKX4G2yv7cD22TUmtZFCXAArAY3GcwYPw7rUtjdDY24conCkE8XZqzZ5fDL9rk8Hg2FWptrXRTBmwz",
  "key9": "5o2fRTwy8PwGwnq4wWipVXoguN4zYTw3JVgQBQyRZMygzQmmMxs76hGHX6c4syxaup5bUQ6h7HPHpLdAQqRtBEBd",
  "key10": "5z5eP12zZr6kgWmmcVM7yXwtSvjwBjii3UEAKg2totZ3UHdnJuxqE61RQPTXvfEEZpwHd7cwya8SvgZyr2yrQGVy",
  "key11": "5vZj7P3C3dQ8mfrjbW8QF95FvrrT6js8emg5kbdnjBZiCJoAc1V5D7xF265o7TvJNMbkjQcWxhd4Tx6fqT4xQFim",
  "key12": "28b4FaMzESv9haL5gEZ5RkYWZPVgALjjWDDHiHzZcSaqopAovzXnWYYJbSWQawNkxyswYA68L8B5ReQvGK1YeEsM",
  "key13": "3z3hFB7f9bVyTGqa7bHkDesHgxtdamxyEZxnZsRV6u82FQYcBYhCx8LyXWJ6xUCZGHxBPGLxz732DFVt9UMvcqFN",
  "key14": "5uJf8qEa29NQp4jsESQMwqjVi1Aqfi29KoUntnNQ66U6LSK4HhU3REdvRqLxQuBXriWh5Bhv2SYeN9d9yVJZLTzs",
  "key15": "c16QfmX3L3WxGm7J5dVmEig8GYEy1RuHa7AeARMC61oEzBafTybi3KWSZRYUznYxccc8StdiEResHqrEegSGo5k",
  "key16": "3DJCA3ssZL3pfwVcm4iFVLgqpPQFdhM3UP8QzTqwB74N9e5h4EkU8LN7euMdhVTeRasVeVZZNgi7eXGuzdvdHxju",
  "key17": "3TVGs2aCrjM2VyeCmP3PFoVwz8arzCMeJJNebgrkXNsTafbfjFWAdavwsF1r2deXaHmxGYKmFVfkhSe3nUmEW9gx",
  "key18": "25p8oV6wY4F2YJbSgLUXxq88GTRWz2CX9D5j5WvNrR9Vow1Qv9LApbLpK8cfQCA57r63HVBBpkWh5NbH5DJHrGGs",
  "key19": "3CW5tC8QDLr6NaPcfeyxU96Xm77HjBHjsU3KWKsASFK6QDVQx1wGKaDxsbAa8ECfkFF5424K9Rg3LBMVReNhwUax",
  "key20": "5eFAaG38oqKUL8aSnz5W178ShghMtG89gCErwq7TLKk4YqF2e8tPtd8fFu112ZY6dyaEwDyZ75aA4GyjgFQ9GpZp",
  "key21": "3NrTwce6SHTc1A4sKzUaqsHop8siP7hTgEmGCaBkdiEHZX94d6XbuxPci4AFi6NBNLYVEEj4kp7hhG9qMXjtJ2BZ",
  "key22": "3fZR9UQ1U2Rf5hcjDc7y8EC6Ao3Yn4uSy9RHnYUwtzuhagmy83eVsiJ7AkHTV3RkEVbmvx9QSDVuiPBiwrMb2BJf",
  "key23": "2RdbtD9TUZiCYBwvcDSKn5KZpGMfkyThxp2DjgPgvyBKr27FdLTUKZtvn3SXTgerzJBonEdMrfnT53SFrrUSDnrH",
  "key24": "NsBjLVAdsXH1uztLJTfGQpkwZdKpd287AotEihtF275hEcp9BCY668YD1JfFGYwtg5rF32K3nTUej5f9ETBoihp",
  "key25": "2a9pZCjtk8zji8UbE4KX7w8jpBcaYpRJFfLRMvUWRKouh76dgTwmF7Jdx5M3THt5n7NtnZrWiDekhErisQQeANWF",
  "key26": "3EYzUTLdsJRhoRkhGotZaGMNqpq7LKvy4e9JWzXt7QC39pvBq6iN7AuipGY77gNkMQim2rCDGZdUzDqjhAnT1cer",
  "key27": "3DyTKNr2EgUQuQHHXuDtfDhj537Y8Vw3KkfQf1t5VBoVrNyYXgYu2wGPZ3Bw5VwdrUTAB5FmxDx611srN6PbjEMi",
  "key28": "tVvwjLypJHD9EZB1x6gDiEGdfowfyahE7nfziuVDdTc3hsYDYvZGuM2TFhtzrcQ83HkimWjvn6zj9AcWwtdZcUh",
  "key29": "2qf9ym2XS7ANJhgYMgbGCTeZcTHcGEiGhHuLMKDtfTZmTcoNEu9iRSYZ3WKV5GaKopZNhngEixe71f3j4U7iSr2k",
  "key30": "2xXgARPD1v5HgmpnLYqwGj6oDZsRgv5fr7fK9Tincn8i6k8HNKz1jmPxdFXNR1zkzDjsDxTPzAFgdAGftAEBBoYM",
  "key31": "2czghBwtC8tYQeYHhSKtZ8ppc97AYvKaEY6QKLNhmxLeYSrq4s3RCL8a1XPPTzo5X2wqfJqGitr6Q9sGFMtjKH6W",
  "key32": "2v2TcxqaZ4XybVH763B64VjsUcYnoNEKw23JjwVBy72JWh8djgjtMNdP7wpf1ahetzPou2xzgZukwZLZycmy6jrZ",
  "key33": "5RFe3myNcbMB7GMqfuKeXjZLYBf5ni8M9cwGv7djXsy2mWLPyyBmuGwAf1H4ybtTFPT65y4BFnCcB4gDtHK9YRdy",
  "key34": "24bu4vijx2YrAwCmajqjo3gYd9SZurpQPNDbyJ1mjGsVxaFdrAcm3EQLx1goNvNTxYcTp9XD5SfdHzPJtNTbj58b",
  "key35": "2hQUzzGyyvAyLS8NJu3zJ2vMZ2UsH7SC3ZEid4pQxaEMJDqR3ZRTJZoFGnkCdEoXiJVz76vKuSJDETYs3vVUvaqW",
  "key36": "4wJ5VhAw4aoTL17j2mokgCwVawJQxR84vVD1GpNdmv6ALgpEZ1a9rc4rrGMot4rGtWCYdeuS1QweVDdfQz6QyLFg",
  "key37": "BuzLjhpZSgNvyDetKekeMhWQvssyWLNMYkHgHSJsH911NP8EvuKpQtCn16sseLuXAaK3Rq4nFGjtqPT1K87PwQS",
  "key38": "3VtFLTygHjL5vmnsPrupLx52SdKLxYNy2u6TFADXumKxwPs9UetWRUXZ8sHcpJAUet6DqthNvkm2kfBRmthDbBwD",
  "key39": "5hkeMqe8asFQb6wZCmjsNFXpNFmnUV9dGirqbo2mXsgKN8FkZ6DoKNh3AtyR4wUA5ufJPFGqgGkjQuEKVadXeorA",
  "key40": "D3ZNa1QzGVqfqK8yAiAjnUedyEFcq3xr1vTSV5ApG76cy44K9y34dxEUn7gUegbWGLwjsJqATnTz3uKTY5mQ1dN",
  "key41": "4kyXrBHHyyeKpRzb4ANZHPVv62vpxjjYWu9xNJVabkoqXMKQdakXPPmA4GoD9no4QdF4YGyvNwqpDb4XWtStZeMn",
  "key42": "4HLJP4snT3cHoVPMupwcRJgMeoGYkhrrPibcmyfCfimmPKK6QojhcU2Zma1VTyEEP44mqh6Q2xDbZ85SQCWcgcq6",
  "key43": "kPTfwMVuhYb3qW1YjfaCYALaHu5JatDxJe2K8hdB6vKmmdCWGrQ3vhzEwkwNYVafLEpK5c718SiabNeyhVZJ5yZ",
  "key44": "25RxUP4KYHiALWXpB86hvmjAnDPNkkJDRT6Kci2aVc8E4C1dbbLJJ1EFUDLRBorv6NqEETzFHBxYE2mn4XnM7aXA"
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
