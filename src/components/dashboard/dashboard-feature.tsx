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
    "3yFkLZn9DA8WuqPAECUrhj9vcz6hZa2Uf4JgXwWe8MpCDac7w9HzxgnGyEc5GcgxTEkVkNmp1QVoYhBc8aHwhrEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vuBnWsnhmjmw4C6sQvKvPMLw57DcWo6ndspX95pDcdqXHMmQjH42qeEG3CMwaPpiwNSKFq8x26hUqVDHPbtZLmn",
  "key1": "3aPWdgL6K2W2nnC8LWFJ2usLWAyCW2wmmXeDaKzwmTZHfMUDzW3ksVAvv8Dn2k9dL9jkQwbHvSguzfeqZx8MG1jZ",
  "key2": "4nXSj8zcrxcpLKFHNpqBZJZxJhLS3uiJ1GFf6WewF5LVxeytV5kU2pS7yJgq362Gdp3dXCGbzyMDWe9HER4BTQsA",
  "key3": "4Pv53bmvf9hwgrvPR44cve4CtTfNBLpvjw9ZF3XjiEtQjJjmWNzLAQ2Qr6oCoAjgviATzTPPi7nqba5dLrooUWqP",
  "key4": "21mHZHWPn1zVugYfCxJQwheW6yV69ZoLLL46x3CeU7hS1GAUZCCLCqXF3eBjBYnmRGjxiGDh5P5YhH4B7nUoNnxE",
  "key5": "4sHSy3KYU6LUKkUpdkjBy7XH32pXwTb4gXd5YwufKYTGHtHYK7mJ3sCv8qe6HMBZzPW4TYGjDhnorQh7NZZ2BN4s",
  "key6": "srbpUQqzERiF93eteiULFo2fqji9q4HXME91uBybSFBNv7P1ECtfTsE16FvE1je5HZrRozbMYLsjCp4qKg94DHx",
  "key7": "5NnVq5VNk5p2XXJdYZaAHEmTEVYKe9Ds5Rv4H2kcSHJjXnFr5xBwfxzcoCUhKdRs961T5Uq3WLyUCMzgK5pUuD3S",
  "key8": "29huVqDcaVCHvn9pnfmDAGDHh39s57N85EGqQwRAAcQdjAVbbLP99RRcCRs84Ji8vPSJXG75KAWH6LeuoDzuTbLA",
  "key9": "5TFMi17exe6gnEHthJDyrDbDNU6dS1r6AedF9MF4tDeuEgH2s6tfZfE8cY3YmjRftUuoFphVL2b5FuVjyRcMdvf1",
  "key10": "3HU4K1GvZCbwvQYW8qi89Kdzt9m8v1TV7KQo3SnGteWFKjf13xX2ggYiUUFhFQ4ny948vGABKDUst7to9WuqCN8G",
  "key11": "279NwgSywD6dfmLGUZStsJ8RV6AQYKtPS7DuV2qJVXxMyQPJd612ZV7KMBM9G6QHuPGgchBNQoaSovmXRbMEBiKA",
  "key12": "4Hwmh1tdafaavwsukU15enDczNQVo43P6Viw7EMNMpdAZonqKJUqTMqsAkb9XZseH97S9wj4LGj97G7GuuS2rtg1",
  "key13": "62debDkTB2T38CGj9igSvagtmtRrLbvLwpNN9ezuP8kTsHbEncvNvr8Wsx4cZFJoPKta9Pm8wFmk835zFewPZ8So",
  "key14": "3NUvH5pA9BBZK4cW94hogyuhgEBYphS4N9oC7e1xRfFpC72wEAa9dBFLaNMGs6CyGSygQio1oDggyHRzMdF5djiL",
  "key15": "4CZcTFVGJsA2fWbjaUKYEKjZtWoCbogocd34hPNzJLf5uJgSafFANzKYrdwwpNuriNA5H1QmjrjxL3YSB3KL8dQ6",
  "key16": "4tdimQnLKN51aNku5WnqGMai8wwotxq3hgiZjr5fUWy3buGREHtbdLh9Qo9EFaEnfbMCyXDbYqGkfdBqHLt1SQBr",
  "key17": "3fELctXrEtwzEdNeX77cyLgT3M1Af6h1RakoRW1MRb88P88NWFhkrsqQoCGvVKyTkViCZPRAaRuCpLcTi5p8kGSD",
  "key18": "4HpPVdXiP7Urjfid4ZxM2HZW4moraRWeKpGMRvB26zBRtgsg82mdVSLLjs6GHQpLbDgTDEPN2ajrC75EQmD29koh",
  "key19": "2Yyix5eVWuebycP1nf3N5mbv79vgYBYYsuuhyNDBGi5P8Umksuy8cuwTX3RahinkhkTSXBKFXt4J93NTnkN272re",
  "key20": "63EQ3vkes2hj8DbChLV7hE4VMRJraHuNKCGQ63kZWdsoE1b8HmXyi1M4Sy5v2w9kpZPvj7De7MibkbZW6tPWd7AU",
  "key21": "5F4EsgmK4A765CMtCdPNWqQNS3guUxmSDa5d1RWfVRDst5xXsREuqfaMsGiMMGEQnG5fT4PFoTe6B1sAfFtsk11h",
  "key22": "5GEtBZgDaE98Wi1RwW2v8HbQBLnaZr3ArjhFVkB3govpgRYS9VjBmj1gznobAadDzh3Q8TzCKPPcK9qovGfnCHFY",
  "key23": "2tjrhGnpx7E7qM3vXfbVX1mMQCwWs5op63aVjDr4uu9eSf8GCXCF9YLcW7aYiVXj8SRDKw9tkMiQBsLrKsAR4ECU",
  "key24": "55ZvsqA3PHCXbth67cmhtQipgP9VdT79kMVi4B6wu1REiprJXXmkPEwBt1JFrVSjHke5MBq69k3AaN9AfWA2kamX",
  "key25": "62VeoEXk7Po9ibjJzDtne4gp8kemNgQWXaJ7V6wBTerY71ScJ5ipDK6xZVtoihUY5zBKraPY5XLsGG9n5fNeSKQC",
  "key26": "2DvkJrLzN5wnJPw8D5CtxAfwfa8eDAEqFNtY8YdD1JedvXK1kVtk2qsLEef4B8Z7ZnjXKafwYi3RERSEti5ztEwe",
  "key27": "5E6poLzmehv7n8uBXYp1EWUxX2NyTozmgMkA8e78XDRRxs6j5zC4wrzorA8nk5goVdJ7bMVmrdnpWAUycEfVieab",
  "key28": "38BVHft2GdmrbsWkhcLDaEar5z6k3hnym2FYtyYwFpWVfmj3NJZ92SKp4VG2u8sgpkPoJXoM9gjqmHMpDeS6ECAK",
  "key29": "5pLMAgbS1MESbxjVh72WJ3g22BepE9wvqgLd1jjaYW3z3aNnryYb4X3ch7Y3t2jC4uJaqtBHshHGvbSxXaAjssUk",
  "key30": "odisNqPnzvNHPtBesffQmyabRR1eJRNJ8WkcCavq25pJQX1Tf96sy3i1BkoxXwiwAgf1wbm4kMw5Prbu72C8ham",
  "key31": "6z4n5ZwYwMkQd2Vdtg5EDhpsygAPPRJabURRnjrLHaqXZxsKeZQy8DGxMKiNte9f6rVoL4jKn1rFsYoHaA22AVc",
  "key32": "3gXg6B914iKRtn3eR7M5ABdVz6xoLv565FTS7CmApdKMPqoTjJZNuiEdWGP54GmwgyfQNEZxizA6qZiL5TRArtb6",
  "key33": "5f8HBttFv1LygSEw6k7gZr6NPmLGkt1vW24eipn9TS9mgacpkX1MkeyKYfuLSG6sML34hythxUKRxcxpvfiSZXfd",
  "key34": "QAAFrNunRWAtx2AfyxQChc2RwdXy2YTetH9STUKr1oUcEuxdtfa5YcMm7cW6LztWFPeHp8vpxy9C5vaowPanUDN",
  "key35": "knX5hJb7SQJqKnjkAYKsQwHDuVxrYNu1JeMgtxFj928wXMxUeK2Djzqq3nnNkaoRDLoLJQ6YjMwpt2cL5DEJtFU",
  "key36": "54d2nEEmvX6ZNJtKay2TxqW4rWzMc8QHWVKfXfeJrG7NjsawM6rL7Z8u1uojsRozxujoAZGQ8sBDkKRpWVQyrfDo",
  "key37": "4kdhKN2nyrkXzUBuKj2qJocarDNCNSNQrm8dC7joZG7x4gwyQpCRM1xiqwzqr3t6oGj38ALQX8djMN2eitLSiwHU",
  "key38": "gaJoquwnHKFogR3gXMXSbo2JfbLRTebZeLH9ya8rXKca8XsMDUDnGs8G9S1QZgDWfjnpHsuPpnsXsLXH6EjkkiL",
  "key39": "rbmRV8MZ7WP6QaSMNtE9cWDuWRNEmqi3WgUH6zd9BnRffD4Xc79pre913emBDGz8L1Ny6xJ4fWcF6otKyjJiHRf",
  "key40": "5raexdknKzEFzG17u5CJDXDGmZSLDemyNyWiwQcYs5yJYJcbUTK4dNhpJT2Q6PQvGbUQuQsDaNgQjNoZhGLeThY8",
  "key41": "5152d1R5uV5MWHskmjWtZfNq2kbQKfaQRUL358DULueu5y8gpBBFUJaUtcTNYtn57husgdmfmJif1SNKu363mN94",
  "key42": "572MeKoreWQ9VnJHAjTNrmHVY6Dup2TNdrP86Kvw4Rtg98qShFXH4mTqfxK8tAoVsBJjvyFozBCehPN9bzLEeT9K",
  "key43": "4Gzi4Q9e4VHTUSVfCrUpadiu9HQG4cHiZrf9deaZKUhuBqjJVCtwJztspsoCCTXVWzz1SFApRx9ZkuU842et1VBQ",
  "key44": "5joCWdhZd84DowQ6DT3dzJnuBn2YGPQekM2cgFm7HNWeM5sZdzV9XxXaurh3mRaAsqdcsCnz2VvsdcC9trEUiEB8"
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
