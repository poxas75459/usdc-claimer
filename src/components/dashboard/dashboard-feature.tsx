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
    "2i9KNFxAXE9hwP6bFY594tmT4bSNuPxBN3DgumFUySUsjKPBvasY6gZyqE6gxFMhBxfWYGh9zDaEhgcq9koqUbNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vUmjsN1M6ubQEygJBiBVd7pQSYrFMV3B4BPDrN2a5gLq8igBQpztAYMFRGH88RP7JRrL9CRGADCP3YBsGqCEEe9",
  "key1": "2BF1zhUNBuxLgftwTdjRZGNtMd2XTmuqtBLnbyiCW4mX5nSEmQGZBbGwcEDJ6UWvxcFvuHv36Fqv4tn4xakJFUFi",
  "key2": "5R6PNiBSrB3q2Czgzu15mWhteBtANRAC9BBgj3j6HrXzEiC6H3HUVBF4TivMynj3HsbxoMfk5XiXa7LqYJFJJxmw",
  "key3": "4ftrNJ2125p9hukiH6pdMYr8FB9s8BsQbZcqYi79rQP9UBSb9Rv3dPZTgZmDzFEpHb2yfkrtBg1npG9GNzmcbPeH",
  "key4": "FrqF32NbRBSpd9efWfyVstJra9TBDexKSB9qoj4VX9DLN67sT6xgv8Co64PLKySURMSpQtzsydvKjyUorvpcypx",
  "key5": "52w4iGcjPURHPcC6quQccizKyn51jyiYXqdcez7gmNZ7fgQRzS26cF8Pr5bXUsp24xhen5MstoKnnr2KXodnfdw6",
  "key6": "4v81GfxXLvfvx2jE36sgrZvy8tU5HET1LNX1ai6x72KkEWYVXQAuwjUv8DzcVEoTFwoCKvuL49swmiGeHH9nLG5a",
  "key7": "5kLucjqncRw4T9iJbooDtVE1VDHVF9FkTii1n7ZXh2MUawv6FHcWsGpv2YskS7hZKc4qj6Y6Z1cxynHa4f6V4cbk",
  "key8": "2UHyXd9314nQvJVEqgX5HPpm6inYhqJohcVtSxG47sAKyc4Qb8u8GYHCTDRRxVDVQCnitmA869ihgKKHA1bJMhT3",
  "key9": "3sAgEG5TYzAqwQbJTJRxHtEEGVfhjkDhsfJvvCfvjktEuJKpsnmKqWVVDg7n2sJqhw64DtGAact8Nn7At84Ry1QB",
  "key10": "4kjfasqUUKAVKb7mfDzYfQJtgxy5yZHcZjyEgNpji3XEpbvSuzi3VvLtFXnJduv4oAVVn5Jt6FCCPkAFZ6wzCECX",
  "key11": "3gyN9He83GupXQx6n3snFp3CUEGQYXqEtYURqRZ44qArTVx9YAw3xY44NNC2ueXvuSmGPMKDNptshK2HBS2hE5dq",
  "key12": "4QFL1XPB957p3eyDYr8aee8oMXZ39BA7RZdNtRa8HZrFFBr2C9NzJUscvK9rPqKtuNoytHY78wZD6jYEVT6zMKKs",
  "key13": "2L5SeV619SrdeNuPDWFt1TQPWrKk313tzZsST2iH6fpx5NxuXXHDkMkNS1hzsHAG9Qgtntq2dr8v9YAjn3bWD5c3",
  "key14": "52vqzrgwRPQi9haQGjj6L2WkzyMbugVGXUkZggoNjrdGZu9G7t1DNRVa696La8CHriiG8vphPcA4FtCWb4XspKjT",
  "key15": "54ZQsbYVP8D4MTcjMMBmj5DLNEfxk1ka5ZxC31nDHJAjwZcq2qbaUeTsDh3g51jsuU61tsEEGSof9epsVz1ifyYw",
  "key16": "82zhcrMkwUrKwZRdji7KgGhqMyiycz7R8vwqN55Nys1cPwXFVL2JFadex32JCmi3qfPosvRKez2Z61L3fLMzT7H",
  "key17": "4U3Npx35f9wWXMayzffnGDSQfGxphuLAWtv8Hr2YwH9vF8L8CVTGLrjVurp6G1mPHhHALGy2bgpUV5o9cBahPRKx",
  "key18": "2PDbvu4r7gCctk63Nb9Pa5xCdpsXWgKW2TuLuogmciXokrLskkV1mbok9kVUQ1pf1uh62AvzRVMKFjDcZzWxqGZB",
  "key19": "3c775SCcpyaLyCqfqr3ToPA6XKL7uFZDSWgXUcv5y4AkiEpKKVKNgfVmhu7ptxusmw3dsTBcbPzTPgnP8XJtboEa",
  "key20": "5R2yfvT59ih3uxudbA5po3c3XMzTRQKbDnTyexL9NBrJFVe5GUm2w7EkSL8q2gvs3W5F5QnGTfqZqwJBWa5g7Z7k",
  "key21": "3VVXr58gNmnycN5cNvanHhwkW2zVyDLYqEBa2HcfvsHm4npL4QxgZwS7X4Hm5FpidMEYAGdFctkSykAPHK6xD3QB",
  "key22": "4Q5Ccz2EhVE9fUfQ936nNJQTptCoXKmJTthUd3CFkVhXdvYkyxifm3jmEGuMuV9ymyZX9ESJzoZpbG7Bqp9GTpMF",
  "key23": "2Ndd8iH3ra5idE5YTp8aZsXwXnd6fvvWZ3K55B6jprNqTReq1MmkTvTpDWtHz7CQvyKm2JhW93xUoMH77rNFcM74",
  "key24": "47sGmZgDVQmTJbJzNPq6Y9GECN42MAQttaMdeXVw7Wu3YippvoFcDmiCS4tyeYJ66T74kpVFZBHiQfgnxsnShmSG",
  "key25": "49ZsCu9V6gwJRRVXaapmX1ufGMtNa894Y2cDALyrtjW1f6vXk7ZDBZqeLPKYcA2bZY5YnYUqhBHzr1Ha71ZKMLcj",
  "key26": "5neps9MB9zh7t9HZKTp5hwBojDGfd2gGL32xwhs83QSRHAt7tBr2fqwyN8URJRiNzJokgCeDCYuApqbB73QmJ5jM",
  "key27": "xQijqDVKLjYjgfj9X2GQVsBru6N9TU18fpHZKQB8vRh74fDxLNjfQrKYU6Cc2nKr8yAEUefr4JwDtH8b1pk1hpq",
  "key28": "5tS7pYixyJfp2ujJDbpyNow3uV7MSrziAc5a5N9trzV4WUUrujA82tLhJvpuJzEVK8AxzY2HRVd1VCL6bD3GMeTS",
  "key29": "4eaQCLN21HUarGqZ1PjQfBaCq6yZFYXYNP4mW3kuMMG4vpd8NgvCKep7nsYhiLbYSUE3sW78hb3E6avzw2bw8s4f",
  "key30": "2qXRpSeLQdSsf5ipvDZ4QUL2V2fnsAvLFz3DU6agcVY4Cn9dJu23tgHCUpdpeePJQsmts1L36wWjjdVXvE8c7SAk",
  "key31": "3huaf9MKyYTzsoQzp2KK86n1hqKnrFbnQLsrzHroACv8jZQuQqn2c7DhC3Tyd3bpi8oe4iEuC4LS4bPT9XUw9SUP",
  "key32": "2C7CwppvL74RDoHz3Ln5Kgxc9yBXTeZcVTnxdsBKG4E6y9QCdmmYNzpZUv752hR4J8hwFAw23CrQKna1J5YHj3cd",
  "key33": "3fkqSrdYy8qxFCGjUHahTK2rGULv7a96q9GTCCJBeqYZ7SjBXXFyoH7d2kR8qjQqv8d6vvmWwsX19ycz1uh2HQaa",
  "key34": "2BMZjCkJJPucWbzu3dYyDsQjzMEQM1vUeeMcDEGDEWBpXbZfS2fruF3ED35se4v591SVMGsyBsqZxUqA7XZFzUmf",
  "key35": "DLUroAUA5DD2Xouy4aHqADR6KYJtocF84LPXFGWeDv7dcPqpDUWF4vJG2mLnQHSWsEzKqkxP5q9hdQXexoFoSK6",
  "key36": "3ifgMr5HR4YFF7aQ36ZQTHnRhSSyZ6rXTnfbPpijqV5mczmE8QK9FmrKw7cvtHQnanFgrWDsXTpUipNMc8nr5Bdy",
  "key37": "3X9eaUacsWcXFxezNRjwXPDhrGLsX8cD18ccH5gkhBBynY3e4wBqz5PtMDkK66qNrffswp3nzh9sT8eDSUWvKdWB",
  "key38": "2VFKxQTWpPAoGz5uaLXWMhHCQYg8GWjrE8Tfc2GpFaADXyQEkYZ8q4ZFkFUy5RDECNPb2DSnnoiyu36uMZiLYhBs"
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
