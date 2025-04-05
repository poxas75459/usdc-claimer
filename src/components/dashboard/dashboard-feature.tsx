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
    "2hNzkysw4EM8jYeo5xWG6rWnnMhi5DTJyhrV4VHGZLcebeSCsdBCeZaL1fZDYVqtPNwjcGWWY8rKde6R8APSiQgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63EqS8gXkCvR6UBPeBuebgFD2bJxgGR77d5gUp7kqHvN8k7WK2YXjGxKn1WYkJx6eMCbXeafrxTSsP4gJKy8CKmM",
  "key1": "5YZaLw2dGCyL9HdbVSgMDoNm9LUhv343o7fmQ9AmAy1bwL7jqfEhLKL6EWtPoMzEtpYfGKrgSy2XxDBDnZy96Apb",
  "key2": "5outmo1gYV5VkFELcTmwMnt27aeGznYoVns1JGAzAVrXzVGS4CjNzu4pczTgwGbAsn9tMSNgaBifW6QPaUw4RiWx",
  "key3": "3MyXcUFoDu3kGVauSUWcvfsDENU9k2aKQAon3x3cXn3AtdN5xZR9BhvWDGHm9XsN2T81cWB8nGpuBgRxFqYHcHGK",
  "key4": "4NAAb6ZeC3wUfvjfFnSpqaGF1MKGhD3jNp4nU56qZkWwSPbTa1x1AwLSMqCSzdPvBR3jyfUYkkk8riHf3iG7s3RR",
  "key5": "VBoAtGJvJiQXXozgNJ2ZYTyTf5nh4WrSM4VX7vFSUPLZiiSjfBAELadwWJyDPnWgkJ8y1We51USNzhGYaymihEB",
  "key6": "5RKhWjJ8xQ83oquXmVmhAMYvTgHhUY5eBUxSo7JFQiuneVb6MSmrKSxCD5h1CrYXby9YGsJWiBvZ1FFqYWdUMrSd",
  "key7": "4EkT2gDHDz9bsEJtkeLjdekBgqUZK25zeqc66MSiPWDm3gKgidcF5FjKUt66XXTMWHS5sKkpC8fMnHYdqqhkWsmu",
  "key8": "2kz9X65CYo3UTABwJ4xZh1fcDXeDpKp1JaJjFtxkT4ACzi7Q6WUhzb5UwPPNHU9VUmVLWsUAzML14gJBH4YCtRNP",
  "key9": "5mzd9DBJgVZKZLWxh6hLeHa3ffzuMb9saRn4D4445MHVK3myQyzTiaV9iRk1tfKsVgo19EqFXgcnJsSSGhdimbjz",
  "key10": "5ZcPDtpnZQgCWdrga91zq7HsqdVF7cXrPKRQXPV4TkYhqAzrfwjxgAwnrhoQ4y5MEr1du3fmb4DivBR57RGsEyos",
  "key11": "5Z3X4PKv6YfvHjsyPMXbhjihsx1C31xqiftCKkc4NZrk6vNsYuqvCip5RtWfSumvJzHAcMnQ4J5HCUCBHmYjZCB6",
  "key12": "17iQo291jY8sWVySfMgZrbcdC2o9LgzqhsqHXtoqfiE1Gngw8PQWkqmSt1c4PJsM12KNQzSdbXjo7oavkapUEvb",
  "key13": "63BZP9R3VTPGXW4D1t1JMKwWdgN2AEAT9TRGHG6qpsaS7aSKCA2Nj173SN2gaSJ3ZTZMjAf95VFTBQEjDcZ8hXwD",
  "key14": "31DTF4KQWtVT4rQhm8pmgWCchssJSdNCp2Aj11gSJMqRVqgiX5MTsPnJJxBHXTKgBjBBLa1WCVufrSLRFj39rNBC",
  "key15": "4pvgNLrmYCgCDjVwzk6WjQ9xaBmBVGh5n1fbKWzUt7hQQgyAcabGWhLY2Hojx3mfHx7bvgGWFbYAjnHtHcxcHk9X",
  "key16": "5XTKAJc28Yxh41vTfzfWXbU2MytmfuYPr9wF7mA2e2WaLihPHac77wwkAo3ugUfFHnaQYrF36CQsjdVfFZaJUx5N",
  "key17": "Zj1R2uyvpHjzsE1b3aw3T8FGTL7kgteNgosHr1iQTmoKFooqa1Hz172JByH175uSnNM2Nr57sELrhYDEqLhktxn",
  "key18": "NGafgxbhCWt5et1JND18GskiknbBAoxDoewFDgt1xkTPWsxuRzirgjxa212ZrZAB52QeG5G75mp7W8RkakajmXt",
  "key19": "5gHKvrx6nDk9ixdXb4L1eQZ78M14YHgNsoAQqA1kReaGVWMhNhS1xX8qsJt9jaXv7C2gToA11BUUXJ1ZJcuRFV1B",
  "key20": "38bCz1uCroSQeBYzhprregJ15pPxsUUdrPSeTmQ3wWst2eEwTC9XkRqGzTJaAVRsRoctT3WLpxbZJdtbMTS7ibkZ",
  "key21": "Vvj8UVNDTQWGDDkn1YxKgasED6moVVGq3onN4LqPu1WrAT7GV1bz878hkwpu9g3gcxbm6Aow5Zwy4ZqTuLdFpnW",
  "key22": "5PMUTRbPj53qChUWCQVQFw9Wav7NHU88xW2n75s8rk1jYYTsDYnoehvDEZAx83rG4wUcuYL4EX3ayaH46dSUL1Nq",
  "key23": "CJ7CqCEpf2Sjm58BNidGi3yYp51XNqMKyH4QEkwEQKmZJSdkaz6Cd1rKtGWjgM7FA9KU9xPFcMUtiufaLz5w4w6",
  "key24": "umgwkH1ZiaMoXsAHBYreEughuYS26HtVGRVMWRQ5i98Hd96wrJ4m2o6G4iCinWPNJ2v6p9Zv62cRyVMVKn4ughk",
  "key25": "5QDgM9d8Wdvxo9jQgswye4mBS9N67VCP3hyfpiK7GjhCgXGPQ1aCi48Wk9f2Gz2XPkFTeVtDwcyctc7L7cC1Pyg9",
  "key26": "25hMEw4dujnUwQUWJVRnRQC4JRnS3CWtNtmVMwTpMGrN9K4JAbhjJzJBFR6Kgis7QNoyavgXi4wf7ZSTjGd6rDKE",
  "key27": "5ZP7KvFQVc1V2XAsNX9m5ssHu3AjHkf3eeE8dSie9M4tGxt6KFheeXscEjzZ5fy9dm7f7NwiFDDsQegicBGMap2N",
  "key28": "4jnMtjUsbdMNRNiLjqZNjUr2pkMEzdV2FaiMPfoPuCnYKrGnokdmnhyPgsNrmrYQw5XifqXBPSoyECPi1pmTeNxr",
  "key29": "4mcVnePSAcQe5uwkPswi6Qezu4iU2nwHcXtn83JfCXF5YpfcHu9UaeWwj9Vt1FX3K36zuoqpjLzztVSRWkpzuqd8",
  "key30": "3WKA3ScyTEEiG8H7otWkP9aguJSivbQZXjFykageEJMn3RZSSxBgA5PJ564b1x9mmTmFwpq2NES83JdMW8jE2RVM",
  "key31": "4usLgsDLXer3VaaBbppUAGDk14BxS1DqTAKcxeH9s2UWzHDrgg4jpcFM59WLwiTWKQmu7V1xtUb1SSkSNoNGXTjj",
  "key32": "4s7Q3krV9kYJk2ykLMWtaLsuph8M91XWzkBQG1fYZiFht5kx6pPJ7kbYb2LrB6bqmW2tLwREpxecW2CW7UGeCdB4",
  "key33": "5fRyp8btRUyv9coymVxSMMnAWrbZFaok53Umu3XC88YUH3B3Zi93gTCTFnNSV8BBiud2yYkvzsQUeU3A6mjUK6FU",
  "key34": "2UWEgnbewn7BA8kvAV3rbp1uvCynvB8qZr4Y6yw5ph4MHPndE4WUrUXGMv3deSkxupK2rReicTy4TsTq6oQEWHpd",
  "key35": "aWmX3PueKQgomeJTz7XDW9Z9gujwhPs8Bbrqw98Ls8DZeY2ZuxYvYv2SJn8XY27Tf8KQA8BdNNwTpZT6LCSWyS6",
  "key36": "axbqNcnScq8TuRNkLso74g9AjprsPmHRfN7hcUhj6RzkBH6xbwv3YUqiubbmwvNbgxEWNf33dq7oNFSTu5RPsvX",
  "key37": "5nEVkJQE9hHjmEMKhnUgCXpVisSEJUHcEuLJanYjvEgPbD16Zn8T7sL2mDb1soMe5HicWgUY7o6HyFRFMtjCQZb5",
  "key38": "4WrMARNDC7pZtVrBn1nxbsLay586z4DHYKyTP3BEm66sXt9nTHZz1DYE13R8rfQtwRkhngwBfHHEyFTs2H5mbra7",
  "key39": "3p4CdLRXapAYSM2YZprPsg7C593DPNJcAE9vqbUUiFniZMkvxaX76UWNEhtMviqN28jAbig8Zgszm8iUpmKUbM9D",
  "key40": "62ZRLyyrRNXz6G9pAXRdUyStKBdk36cmyvdFT5oPgwFqn5J6u68HvCcP6BYeCkgrcz4cPdk65fUrYLdehXwXz5aD",
  "key41": "N6MTmhHdYDpNS1U14zoh4nxnGQ7pnWgCCVPuJWSNvMWKKEifjunSVTtQbbgwzMGfzdN5urWzpXjUZ5MiGk4G9Fi",
  "key42": "2wHRrVdqX8QPGofcBHjYCorpoqnQ1VVM3xkZHtiLPw8Jim21wYHQ41RTz6gB8NeQ4MHsuyYKUPcEomnDHUqY8zm6",
  "key43": "4VfgLG2aavYsfYqALZzvYp6whnsU5KJB357DTuAhsDYAKuWJKSFZJZS4nYDShfQMJiPwBU15Nm5yvq9FC2WqHF82",
  "key44": "pyaEjD8ib7PMfYY6BqpnQWVyGkGKrseHUe9t6BQaD5RsmXW6tVeyLMZNFSHwtj2oMi1MEBZK6rnf5N7xrYcRAVb"
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
