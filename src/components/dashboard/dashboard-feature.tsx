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
    "HLTBjTBWg8yMZivabPN8nHPyxkZ6ZQ7ozaVKKk28erFmKUu2WU99W9cnsNaLY1ziRXktkaiHVmiJXnuJaQL9svH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VwcJXuF5XHNN6pdNYb7iUUAhoxxcqtF3N4L2FrB3rn5RX94WUw66JAKYdkCCaBkmTZRUbEFWW2h84Yp77teqWW2",
  "key1": "4Ksaxyc4P33qguqdzXCLPxNrviztnJm7f4Bcx8yDtEzp8CSZr7qABEZD5ZEPPLHCtbbk1DzpnsYd2nQqJQzET2QA",
  "key2": "2vV1unx4GLFiK6QcE9HTia3MzjHBzVB59duaeN4qYKMeY6y8bQz5mT9exPBF29g6kKds1P6JWPMcTyjqgaoStrVE",
  "key3": "2EtiQA5wDQpBRPbuAyBcy6fg7srSMuf6qb78J43h1aAGLe6txZXtRsu83Sv7SUwSFDkhG9F24FobSeapTN2tNvPT",
  "key4": "3b16RKvuXdG3AxK1bD8orZ4QZRWLu76G3QerhQ7Sp4N3gu8Y6a1BXUnpqFJkMgY9YZoE7xzxL4bTx8XEbfufWjf",
  "key5": "3tNWZKUwoSkWNMaHaCRLnfDd9LyvCjuYrxDGdEGRu9qFjNgTt2KzkCESrNFrAR3Hb41UfQgwAo3sByvaEcEyyNun",
  "key6": "5XDPYJCgNeAaBEnZY7VGj52bJDakumZgz6NjCXjM8dH8emrmjpDPqV8mGiCunoYqUjWpQSW3MakTPUi2BTHGnxzB",
  "key7": "3xAeyBjN1xs84r2xeYANLTGwfj5AZSoa6ZJ5pPrUH4dkegPjmLrCYC6SYN1np5jxdGab7gQzTphaB2sDvGfLxVHh",
  "key8": "2PhpRPzjqzxig6N6hXXwMipY5BNyw973nKCodxw6p94hpqAS7DvkdEwKtXVf6yiwSgrygNRvJ6FMFpphwDUbvsWL",
  "key9": "3m3aUY2SNQpQCg6jYTgGmM8tKXSoSMH9LKjWqGtNAJqjCaKLVBz5HJmdvbjLssdBWfAGGZdZhx6wKumiLmwHaNxZ",
  "key10": "4Jfnsyv487kx2kWYevcu161s2KeANxi2gmcKy5DsqUJyvszyRQnUeikpVch4QbGeCKQFTukDFtAoubax8hbPtwVy",
  "key11": "4fFA36ooh5QCFVe3VPYD7snkKwgiY9Avqarb6KFykpJTRVw99TfEVYxZiTVg7DsNAmMK3XaWCu2pvA1PjXS7Lwnp",
  "key12": "39DWfKE6kWnyC1jjyz13tC4DTCwzRy5q6itPp5re1PhqfKj7YoTxb2VQBv2YqKoXnSxdHMm19ZUb3QJrEaUmDRBF",
  "key13": "27HWqv8AGB7s7s362Y9Hr3AN1cXZo7Eda5XRb3xSCtva8DQPWzr5pMiF77NPSSFqGN49Ez54tbVdnRvGW5ej5tWt",
  "key14": "4y6zTxtwwYnh1c92KdGXU9HyKhaztU84RM8YRUandJMwdNeqct943qGcf5L3Ykfga9pQrk1Y7wpJ6BxqgmCGhGRk",
  "key15": "28jmvwtWXvC5aT6EML8fbPf8opDdHPAgTsvRB495aCZASNCtRRqnJou7urQJZepUgt7vXHa2MdFF19Sz7zRnuRoy",
  "key16": "32ihMM9wiP8z9YcDGJj3TuGSuJNrZSDrKH4MkvyS1qEd8LC8waVtg5SNCoj5ZQqik1CHb1xYCUmLhGXio68VC99P",
  "key17": "38uBy4pGzFHBuxuGrEEtRe3DbE7d4Fon3oJjLK5U1pq3Ur2d5DZmCpPnSeccRBKqDbXNVSLRHSxfisMw8FMgXsg6",
  "key18": "41Pd3X4p2UVTvpYz6xUToChAFG77w9apVxpSkgZtkrDzX3SenrgVk3xGs2jHXKWF2zwaVZPnB4pc4NsiLjcHnoqc",
  "key19": "23c8HqyGMpvp4F5uVDjuFkuYVyDBCEMyzb8KJ1uQhpNP2TmgYYHd9AGdpafjUhLPUbGshd5j5mvWNbHmVgKv7fvj",
  "key20": "4T4dP3grM1ppAnrWQoYaVVTgd2mLur2u1RMFKCvAeBsJR2D2e9ZrhgPyws151wSYaKy8cSw4KrSDhTJVoT2GJk4q",
  "key21": "N6PGbuySM55AoVZDkisLPxb9m4KH15yveyYZENwi4TVT5FJpHdzd8N7M4QYHuChFTxWBycr7VhkZQXnQegEhw8X",
  "key22": "2Bbtr9nNiSAMGU6aG6gy1wWsnPDh7f4kDxNN5YyFMwx4nvqpgmcG9vZa5F1BJfUJ1dRQsDCNh1T2seUaiwzWuhw8",
  "key23": "2ese8SJxpQntLan8CAmNSV1UoERjTQSuRJhRFvHjZzXioTfCxqbca5wnwiqDPZesKGGfxyTu545diPkJctz1JzE2",
  "key24": "tLYpqYiFjAgouckVsd8wrkyy6xub6s8wNMijyL3qxunNDYyesmjmUeNsSNHVrwHHHo3WchxNR35t9SiqL2CLcCM",
  "key25": "2Bwtp13osQc2Y85XgseyJgMxAnkdvuiNkELKkg4L8u4MsqAoRieTkLmY7N6dk7hngLVcaDiMmfZ5hZATrQMDMejp",
  "key26": "2YZRqGuGEWAwyg5pAn3iVkCw73JZFeRVnPjwgGaMcMo9qnFZ53kKGhdPRuypjNGHv26546RnH6AmFkTdKhZE1bst",
  "key27": "25fY7aU9CxwsTXsxaiaLSs41y4L6b1JL2cQNmGRxmz9wtysnTtaEErUNyzbJLKMqpgYvV272EtmtpFeMAeApEJno",
  "key28": "4Q2wdq46gzWF4jsswwit4ZRfTdMNazxg8d5tfqqmAg2QTKWCLdzUdTzvtBmUsgz8VZNWipKLbrnBdRC1L8jDTZmQ",
  "key29": "4u2YpG8V1DKQTx7FdVNNUeSs2AfNV9BVbC8EB9q1dhjX8RxTry7Jabvhkpy3MpKHbSYJFQRRriXypMMECQkivYjs",
  "key30": "2AED6pu8NY1H4wPQ8ooG3hnRBdoT1ZQE61AKsoGYUntrX2KcnN7Xks4TYQ6UBLSn8TrKR268fx7vG4DviTrXGiMT",
  "key31": "5zFqcSY5MfxcjddVu6Z8bDU2TevkuZnM5mwursvLkGtwXZdPzs5wrS12dRNKzo7ETcsiJZF1zmS96oKPXLMH1WC",
  "key32": "3FmKdRj1ZY5aN1Poa2H5rUN99681N2R9g6pcHTdLd6oKLXKKNtK6HmbXN7ZS4tLS8sLAQp5ZoYN37C4Fwc5S3pvi",
  "key33": "43HPwfZZdeG1m4MQnsrPPAsXgrHwujoGXyGgze1Bry6ujr8K5RnAZeou1wfP9uitzyZxeMfot43LsKTXSCqoG2V5",
  "key34": "5VtdGYopKsvnR7LARBzqAFGN9w2dHBRQzaVyrfufMS27dXB6Y324CLedAKhc93jgLobNMCPUBES8vCWZuGCjwbwP",
  "key35": "2rJMytFBc2sPVft5FXzNR945UL3RiYpRrcVuGkPhXXfn7ED318nM15gfczytE6o4FJQ166QWywuLxewovXTfgqrh",
  "key36": "4y99tXotBXRbxSoBQ3M5r35uW9L4tgHkfvU6mBaKhCpzW65VYmdUANzdjgcTRZrjrQ8siAD8pchcqKehrYivUwcp",
  "key37": "5dotjknoDYfaotaedCHk2syCExRTJCRdGA5pAQFrFg6pGyYL3Kprb5FC3nVinXBqy9j7sMcJvMyiB7HtH1h6C9Pn",
  "key38": "453a2a7SuPsDw6HD4Mi5oQAUH1rATM4vxzG7hpteX7pgCP6ZF4wMZKrKYwWzYkHof7qEZu9oyyVtySLAn2gYdGVu",
  "key39": "32ajXCs1zMwCL6aPvQ1KiMacH1sFWJzN8vBmdBMSGnPkQUaGyfBJ1ScHfQZMaFuxzVt7Ak1EFQr8gFfRm3EpeWM1",
  "key40": "4SX5ufgFcxoRAXKzCnW9GmgMXgcreyeoSt4UmmZvGCf28hGgTjbdh76GkuJ9Gf2TKoZGraguiuZ9WN5w6s1Wzqr9",
  "key41": "3HqEiXbbD8QGQZfP6nPEkiST9RgTtCnyfdDtgF87RV4c9WaoFJYreyZgtykEMXedped4rCxrkgQ9LYofhfezNsh2",
  "key42": "oHfFL6upMGgXHDihw5wU5mv4XVkuvbB2MG7udsjNR1YrXQAwtcoHnh6dHLoTHaCH5bhMKGY4yDK7obWXUkyzyDg",
  "key43": "2sEbgj4Z7rPT8famjDfciJgfYh5XGfsfWniBnfD7W8nFoTMwYNVPMt4tFu4GtFvf3QsEE5V135tjfYwuZKUiJtBm",
  "key44": "cPybhaJ3HWj9UNmaHcpv9YU73W9uNZKVq5diF4JBAwCpp1Vxdgw3DX78cmsU57nM8XqHn8DW8ALatomrfKducyB"
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
