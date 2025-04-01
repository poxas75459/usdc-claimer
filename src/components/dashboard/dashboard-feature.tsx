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
    "62UP2XEkxo1PuTmPB8bVTe7LNP7j1ZNNK2oSrBdMHASJhPmrbSMK5EKdqVEiUrmt66eLPn96i4RnFjRcAukgeLbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jg7cQJgYBdPyPRaXj1UvGdcFd4s1WaCp6WTDq6xTGcgGLBd6Kd3UoV5tX36vmmRzKkRgGQGEsaipX4ZvE1qvdBN",
  "key1": "4S6MJXTojiG9nyDJqrVaBGiuTuV7pDNP2duxb3eUJJ5PGMGoAKbpiAWYZDyyDdERULkGc11otntbzQFdzWr4wW6S",
  "key2": "Fno3iPocscEbfGzbvuUef1SV7H9YaJXwqFfotzkhW76uTAjfGFPbMDz24HagbZWA9QcMRT1VbKdor6iQxMZKYEW",
  "key3": "3JCdTu69EY9cNAuzVFLzGEe7VhU8YLhv7rT15kxdt9ZHqqKUcZgHB3yPxNWBRXNJat253Bx2WnKJXP4ZisPAXtKb",
  "key4": "5w4CY8Ts7n6Jcxr283TbVGSjWb4B369VGa1NWsxQkoK1foHbHERdjEueEX6QicSzfwPemXjnLKd7BggZkzWH2fyD",
  "key5": "5K9SLao7djME5sccNKT1LxkFiqcNDpjRDQpLt23aMe99fyzBJyvZn44ykUebp2J6ABybP38WSK7LfHz6Te9VGcjR",
  "key6": "4iQihaAbcabs452ZHwyuY5w9DJWnAzE9Hfz36XDBF3wgGi7uymYfAtxZUfN76no49V95eMuC7ZsR7z1zZa5CErVo",
  "key7": "3RnSrLi75bd9ZgCMUr2Uqcmm7XDeafT7ckc2UZzumWUan7rgoFFWFYVPywNgTnGB5L8a6mkq3yF43vDm5nh7mrkn",
  "key8": "d6pMsBeFKQUYr91X81ABbmCuzZcmRHTh53SuiLoTKquPxVH8VUq5NTL7SSGzyuH7hpsuFn7DePDwyR1KauZ2noT",
  "key9": "wgJW8z5PXhjmbYNdG2YgpPbxT4xkHi3LxwcvB8PRutd4YRjMYbR4kwFmrNxvFSComaiJT7DKpcf1dwdMn4tnDGX",
  "key10": "2WTrTDzLqE5LnWHq2UdhcBbbWCBGPk775TrqAF1TfE4PBWUYHnUAPTtzUj7keTqoDR8Wk5GYLiD31PKzPA5LDHZr",
  "key11": "37FUZwv7d56RghfT62K8BBrsnXYNtTsfqxnacV37JtVTbPdVtMwGsezeRsUsBBJmarZvRS9pEaAFeUqcUq7zrNgT",
  "key12": "3fCYD5RHDnGweMY47ysSGiw3Y8qyX7XKW82FMekCKap8SV471uPriKAbCwA7tUnb9tQBLv9XTDtV3DYbRdSJ8hDi",
  "key13": "cFzNjPC8Z4cAbYYLKAp9R3FtC4riokQpuHxz3KvysUmUzRApvLB93sjS1cqPqSZvX9tewwEygBtYG1mf3Errf38",
  "key14": "DkArm7aHBrndbhy9Vzc5xQi2VY8Drkfs6kJVfrzZmxuEAv6f5DezVpgkHh8hYc5GybrHcmrj33t24SV45Bo1Nep",
  "key15": "2GMQC5T2TTBLnNrgHY4kNLyiB5BkJ7ctendhEF4B9iw9AMKmPhcZGCLgAyBmsss2C82EZK6nfcQhXU4jQ7MoS3Pk",
  "key16": "4WXMRU8V7NEfiqTUFQRSy8Mo8fqZn842CYnDpgGXSi2mxFajrZrBHTjeEai7Rn68eYeZQhoWddHToqaFDkWjSJXY",
  "key17": "4qQuko1dDZ7tir3YnRHXsc2qf2JDHqeftV1NJbixFn3brx3zLdnpx93BD9uRhYULGfoKMSF3psiAKaCTXk7rEVZ9",
  "key18": "35SM8oEm9svW9jU4ci5JaHJJKdzLw3NVUXPYGjXgRm3fXdYAQYoZvWRcehMGzLL48inAxAH3FE8NZEtJe2qzqUJx",
  "key19": "2vU4LC6cores2qnNQTCYey1Fvk1bupggSmoUcpFuKGPoPGrSMVVge7y9RBJXaoTAb2uKU2dtWfYpLigRHL9TsGMv",
  "key20": "6455zKasHanhPFKKaDLGP3xWUKp7qVdNZAFNSqRCtcDeAzyPihJu1UpnU7q2TD7wwoKpR7G8mB755H8V9FiMdZio",
  "key21": "3Qtp6hx284mUxLQmf4jp3h4Gv9V56JZhEowKgPD765HWQ3GpQs5WXCWsq39LsM8q6s8RLZRPUmFW1oMCpsfpCGbP",
  "key22": "5GJsUpSeJJ6aqP2NYG2BsRYqdh8yrjYySduadCyXiSyEdr8QbFq2i3fv8dnHwJTyHafovnhofn4wviRvzUai4tPi",
  "key23": "x6kN13pJCz5hNErXY11UcV9XNErDzPiBVwSiCZhqx5NWAtEivhxoTsmJzRWA8GKc7UQypp3QERGS8mbuD1tJD6n",
  "key24": "4y46Gg9mrHmPtuwGrahvTikVe3R2HxVmP5J8wSiNRD6q6YWpgZgva4CxUtvVy6UgquRFBvPSbczqPMH6gYjzBR2C",
  "key25": "2RCa1x7XsdQa4R5SjsRcczDSbovCMkF1DiKz2vM2Rbe5mdcEvmWBLLQwunBvz9kvKs51yP5i3hxY2cHxja489vhe",
  "key26": "38bhLhXLsoEKcokPDJ2K8u1rxwsVSGjUdwhGzHXrAELsdk4ehYRdfTfLfp8Huvg5Xnxxi8F16Vg85BncdrH5FRyx",
  "key27": "NbFFc8dHdVz1J1puKg4dyafSyBwhnvKgUtxbLGBsnLFRBYsU2C5evLTHv72vJuosTznTVgzS9hGFAnRZAG1g7XX",
  "key28": "56t3YHFDbiZtSoHob7w4sas9oBDxJ4K7VTwPdjX2uWunACbggPGdU1zksYYxuqazyGL3r1u6mJYonY6C6TrBaJUX",
  "key29": "5ZuY5cMk6qqYmen1v4G3W8vcMDJbsjDpR8NUqda8T3gLTQPv58R6tTRXuN49an1GPtDE6e1fD6HqsK5xecoEKnoE",
  "key30": "5NKSyfbeeEBc8QyDx9ZNzBsiBCcPksiNwjfJZ3jVtiwB8mHaWf2aAec7EQKLw8jMPgy5g3M4Kyq4THTDzkWPoTAg",
  "key31": "3r9tRXyd1yxJRD4FE61xrKMyyWn46oUyZAa7LBWTGQARNdzRaKndbrmtZ7PTqnoHKpNF2SQ9zY9MiTqsyKYm1H73",
  "key32": "2jVZxvCzDrN5RvwPMT3LcteCpJBUWVVucZkw2M17Nd85k2VnZ8XnkMndWRafCwYzgBe6cjbjbiRcwEk1YbVDnhMt",
  "key33": "5gGDrsPRZy2PyBBMoRUAfCsPaSJM3yssXZA8y4F9RuRwS1Hjt2RuriZ4zLJicKfPdULQr7jU1PejAHHDWhUW6uwm",
  "key34": "2PDZLGxp3ar8PvmRn2MQLWEm4SXAKZAgyp4tTUBfaQUBnSty3JRXDwg9rUwqF575h3F7YcoHmhyJKFjbeotBvvhX",
  "key35": "2TYXPrq6BNombJfaWv6wtouB98uWRgVcejCrUw4ABPQA619vgb8vDF2va8kcyvC3rwCC4ddSsjfFz48wyuBAhr7W",
  "key36": "3RW4Jc2qTqkTzepVcrpuB9s5swTGUkgkcCQSTgB9dhSbRR5qQZ9sSjFyNdzT4JFQa9hWCEsBUKrZHtbRuP9igTas",
  "key37": "4zVQBBfPfq3WRLW72uTKVDKM2SfFGFZiFhkQsotRCdCtvwKhPgBWwirwHfSYoR2DyR7pikhUJWEyuQpNJ5FLwQ8s",
  "key38": "4mkUF7JuXeuDoXdLf9skLwbzYQ9LhTpBkMrTh4dH1EG3pXET195MqR9FqJkoPc6JEFBqQQPwy8MbPZzB4hsgmhwj",
  "key39": "572DwEa4muUXUcWvQexmEXcsH8w84r5HiqErapgzKzA4QzGNKQtCXuVU6YKeXMn99pK1QCpMAwb3TVYZfruqFpvd",
  "key40": "2vgSJs2oiTCeLHLgHYDKUAYqxjGL2MkAt8et3d8RAXLq1us2mfmFkiF4AtYMpj3cutQ1iVgD6Un2GCXeuMCsxnAZ",
  "key41": "5TXckWujEYBbMCyeeSFBkgq2mLPuTs8CkWVnyiTWQvYUNycnyeLBFpxSmwWZRaaMAkdxzg1VrHw1kGjzBBQ6oTAL",
  "key42": "4NUffTMh3n5UHqD4z1ZL99Y5QR5sMVffwozw9kj46hxVvSjUYpwXdfsVmcD8DYR314d2MVioLmE6K9qpRiJDzqYm",
  "key43": "56mHYZNfKkkuKxGsw7bc6QN4UfauXj874YPhv6m6g3Vmg4rsB5wkFx7NdqE1HqTsbgkpj2MuaMTovU9zDnVD24eu",
  "key44": "4yDBZQ4A77kd21zeP3LJexz2rBxrJSxxc9AJPZVY876VPB1GE3sok1jMJZc7XR7ctbBB4C4H4oYSh9GDSSDbddmC",
  "key45": "47JMj4AZYZSwi7EMaEEK8FDB79v5Zdxn9Yy7pkjsw1KoGDSzq5WjbQXjVKNTdGmph57oMKdwfN5J2CRyYCfrAzCP",
  "key46": "1HJoTwPkdF5wpWw5zS4fTdpSfgQy54XUsbNxES1X6PBZnEWMfEcbN8AMU35Eh6a3BZbdBdoctVMuoSDguaABj5X"
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
