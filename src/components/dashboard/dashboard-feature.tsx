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
    "5a9hVjWcapUzjapMAUeUgFC4vR6NFENB2tbBisSUvZX1XLhYshywqkjwDsG5r6d5dW3zbMi7hJnHEibBn84cKshJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E4t2xCyEjWJN67qz2yA5z4sjEv9jiNvfeAJfVXL7ThThPwobjZjZzH7sk2bdjjThKvB8dc2HB8EvYB1SzCbf23L",
  "key1": "5FjTJbMajS2vyiVirVPaAK6TCadkkNi3v4jxZNQbFe58r11VL9QJ5fRk89SV5zPDZtNRrmCbAPniVQCnDF6nHv8M",
  "key2": "8jixa1Ns3CmrDfSD2T26PZVYhrfd2CrGyGR32b8ZEih6sdiyebLKQvEHdBjokKSLnT34dwHJnZ2m12MNAszuwtS",
  "key3": "4cCyfE8wSD22zdBAuZBXQDadKMHT1C94Ake7EvwX9gv8QSGsNnAxrpL2sxx2d8TPxeNyYk7TWXARpV2dUB1wKagy",
  "key4": "5PAQdTCkVT9YkGuWeDX4gvtyw9kYLGY3pkypbypaYV4eoPz6jpFHaTGmfuQssrPWL6qTVZ9pRSNNyQag3tpKVTWR",
  "key5": "61KEfxi6pF54FejovvqGgUpNLYCvMHVyKa9RacW3nQeL7YuCpXjPPMZ8kgkBkif4khASqkEcA85AmbWUSur4XQuW",
  "key6": "bQSeA9xNVzQ7S9DExHTkQsY4bEq4VQgfANENa1kMQW32U9ztuFmKUj4hMePtPnUYYNVYijpcqVqF2pvq9UhdyHa",
  "key7": "4pffRgTZKcZUvRD26bADEjSji4wCeW5ebnSvNW7fQnPqfp8gWbBKtFNqFVUYMkFkNQ13c89WtoDx3QQ4dHCHNAbA",
  "key8": "62kn3tmXWU8awDbeTQp8UFbvRgRFY1L4givXbkNpYH8z4LYbHuoNj8zjimJVWDP83uR2hQuMdX8gbj8pr9wfwrXL",
  "key9": "2CJsmAhrhDyBKHwXJDMKxLX2xCrBiNKbiw8jKaNNXutzxdWMCM2nB1MXV5NnJHhtnZRZ9bs8GZ8iySUq8bFpHyrB",
  "key10": "64nR7k7VcWamDFStUwDwDaFJdTnjrnexYLcRMJRGDTMVo2UC2hkxnr4iR63T4zn7XdU8nX9EsEmPdjNeXatgEnxV",
  "key11": "3n9F1wn7Jy8JuKZkSFufW5GHwGPe3NkhPaNzeuRWbWuGvz6n5q77cmafK5CUx5jhAGjpci5P9RQzgNfwHW2UAwQK",
  "key12": "2Xr7BxVzETkYbEhwk6D8JXBB8vJyaZUEZpAP9CJetyKRjzT1GvpWLrtjLnD3EoL8b1UsSemXjto24jQABd9GSJsW",
  "key13": "5xb75VF5Ci821xW7RyAaqMFku7ig1oSr7xqTbcPxqZddcvZUUDCKsS9drpdv7ZqwybPWYYcyXWH7nyAe8r9TXN54",
  "key14": "N9hAZzZPUd14Hfxx8HwKMprJDSPitMnpgMwjUSJvhpG5wvdQEJRzTQkC8ELoiatucJKq1c6ywa5oufYmt64344w",
  "key15": "58FUR3EmtUHMcJt7UkbJ8JmYsECk2RmrKjdoEtEt6QZAG1QupAUMBkwJN97h3ZMnw3ThuRxLrFmujEF2ZT9mLehp",
  "key16": "5hd57rw9sKS5PcbGviL6yabaNSc55TsUPxDQqfZhMbA7yNNQN1hhZgweKU6rzWBT6rquHzNYFVLJcaAaXq3qVNeP",
  "key17": "2vSGzcuor7ee6e1uQV8Vr2m7kvn8zEDcCh1bNryoPMidSYgsHGgS52eqXpBoHRAECkkt11CXu8fZekbrtaDMkQaw",
  "key18": "3CzFto9g3XEpR1rN5gcgM4Kp5VrVWzvNBct1BiWGHZKnSbgcPe6CQHEwVRBn3doUJ9AxGRaRmQo8U4sSBQ1gSvWS",
  "key19": "365nfgJEC8e4smZPsJcEhes5Aewn8bYoCTRUSPYwYZnnyTFtmQ3g6FMYAG2umgxZcE23MLXP8mH3Xrrheaj8eqps",
  "key20": "5R6a2PChewHUPZ7i4xNpYUb5G8oKm2re4bXFaWVAB1f4yPh4WugDceYg15mY2PsiAqPCQJSRgT7Qv9z75gaBkdfU",
  "key21": "ciTWnXhQtD85UTtDB6WxXbdKKudE7C9KorKxEganrdfkWhJ437wjL54reb5cAZmx1UyW1bNa2NYm5KLZgaW3XGw",
  "key22": "4K584ewDivubcngrauGVUFkuWn8mxnudhHh5FUWmH8Jxq9aqm9S1rHFBVywu889D42CkPCuR1iX4aSym54fgEdiD",
  "key23": "3sSTEdoxjFr5bu9Y31Z8cq4DK7c5eas6gBkrwubsDNMapfBmizewmieitxaqPBgeMyCntRSMit5NZTb19iC9JGgm",
  "key24": "2QpDu2kiV1hAsxvHzRqsQUDiFQTmTyrjgNjAnmSdayctEQRGXCAEjZg6LZecZs9eowuNXLLz162HSUyUraDDJoP9",
  "key25": "5QoJJGxUbkAoLWAFDhMhcYgLvoqNGzV1vm6Kqy9hDR3CAC8giuGDAkYtgvogV9xpx2ZZPGQw5H4nXS6Nij4ouT3b",
  "key26": "49AdiJWCZJzgRcetAUXc4ELb3c6KDg5NYiQ7EwZEeb4jHW6EzBRrvh5CXXkDARW845z7kKBqUes4W6Z1xWwmnVd3",
  "key27": "SmhnxgcDJcf2LRBEATwnjFadE5SVbpWCTH2DqHA6UBct9Z7UJzCCobS3Q1MHokXT7PPfmu1HwmNJUvfKnfEYu94",
  "key28": "5bDXJRiMmmmz2d5W14WJkViJkiJJqMz1UD5TqK5aYYWKr6Y4yXqJR3toEF28aztwHbV5bxsL2PXakDn1241xFQXp",
  "key29": "ZkWnJHeNY9s2EwNUXymcyVsvdKbQe26vPCfmL5QaMh4j4rGL29kYYpqkAW7cZyJ8zrcdJDoLmNSRB2aWHtMoLYh",
  "key30": "4Np3YShVV8zPudUooszuu3pAEJYkHSfTajceHiEjXYg1FbcoUWcw5PQCqe8hwWFsY6Sv25dRKCWJkWVHNgnDwi2o",
  "key31": "2sLU2wmVHE3Wf5inu8r1RKtTVZ8prPcdTEMBVZx3bJevSa4c7NytE2QcHQcWmzGriS5s48zFKbdpQAW9XZGcbGnt",
  "key32": "GFuVXSPVAKZeBLojeJx3uTQaddNoMdgsPerBadkw8VTqrnn2AiMRBCCa11PZ4Y6uC98q23noexcEedDsdvMNaz1",
  "key33": "2AtnEdvtCPLCRLqwwoCYPsfXGJpUe5KoZR93Q1Ti5Jk7Eio83n4p4dwKHS925MLQNLbNJXuYXtTHP9Hthk7YTVBU",
  "key34": "351K3vuTtYkJhSsQD9SLEFhwUbJ9jQNyFfkPEn9txueYeps9EaHEht7DXZBAZQDXMqQ6rXcuZB4UeX3Z3ULTTPjK",
  "key35": "61kFrQoAykZ6eLfhGFcurca4SeaPUQwKDHRnLYQapBcB3ibJGRdUo7nJHbZ1hFRJ2cfvrKRvE3sNK9YAX7kS3Hc",
  "key36": "1U2L97zyZ6y91okq1z4J2mP9caqzuR4fid93NKboRFVTNh56M2e2vvT41tLyUFQAGxfLu3Z7VB64tDUKSU6pdsU",
  "key37": "5pSRgFBXFezJ3WjeqLstunqRW6qtBaRWGKYvyeaDoDsuR9X7gsKHSU24FJD3TeoxCScWzutRwgXpdWsveWK5bXNp",
  "key38": "4yEd7NDRyPGmWsyfG3kDZF6GT3LZ6t6N4Kjb31oQetNC9HMUAr44WtNRR6uxxAUHCqVhczoxjqh7zMP9zbuq8UhA",
  "key39": "4Fca7UyScYY6WofYsv34fvSuM28sgta57mirao7uCpFTEQorCySZAHAP6pt1HhZK9VbMZDxQiND5Xag8wTcfqWfG",
  "key40": "5ZzohWsFbsMFPCGHtysy2Kq6hQpkPz7MrTz4fvD1rRQcMEmwRrmkKxaLAcBxEbryCvRkS6a64Nvyb2nJD6PwkZjc",
  "key41": "Lf9PF5fXKsrmQQ2cYPJhQ4YHLQgfNDqgMcQQRTCZB9FnaxbZc8rvNpHGKJd56yYypmZG6phN5u5V5f45Q6WdtFZ",
  "key42": "5Z9WxdAJar4A4ZA2yzFQ2cpGi2Re7wuj9oQne1tzW8q3RYKhsf1dqxBuyXqTRfh6178mamu93ZEGJxJF1F4BJyUX",
  "key43": "5naaFfqRpKhqEmKKuEdeQdDMWQAM3FzqbPR9V8sa6udfABfsdtMG1DqXfnSqbq2LgMcKFeyADR5SZaTZbHujByxA",
  "key44": "4x8ZzsQi88NQ9Do83EbwbvwdvyboPgAaF5hZKH9Ls3WDV6192yHhVQadj5H7zcwB3E8VDrbr8EUKWr7q5jK9nkri",
  "key45": "3r94oQyTxCnyQscnbpAGagWhbCSChXbV99FHc88hhffgjSkEtzQDVw72mAKMMZU3BkmeVD6NyqfPhBkKjC6tHCPL"
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
