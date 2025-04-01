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
    "3uHhrfiVFPDSsJp13f48QXs4Qmm7SsZP5A7xjY2amkdtxTeqaxeUmEtquTKpqTpfirFMxnNBBw5NmJwzYdy3FV1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TZDhNDGH3duiNGbXGKk2jYBCzGboBwhBPCJAY6NabjpzboqHCQSDVzbx7t6Pq1tZjkzabfCRxPyihkiqcJTC4AD",
  "key1": "ohZYR9MXrWCXp6u2ECyGXVyiFFPg7bieYd2qScm4cGtbJmwTu6RpoMuqfTVeqkGUjXxTGca6b6sjcAD2rWDX1V8",
  "key2": "454u5xJxfZcAVenymTaZRja4XZ6H9Z4ehwzKPm6cECcLGqSpvXZotqQHZpZqmTh1Kq9saMj6FWeLjeRLiDeQX4Ye",
  "key3": "2dFQJSH6eKoLMEpZ9gywLPUg6UxYyjHtgLq9MFSH6okenBKLFTepxhJjgKqRyBnjQMUUpcbYm1WL7tCBnuQmvGEF",
  "key4": "4V6QQqhroEeYWbtHqNtL11edFvG2fjWMrCz4KDqyqygxoid3FLSqXNpfAkRGCLCcVkPZDSVdqMwqvuijtZb8hsmV",
  "key5": "3nsjXRzTWKjZhXFkuaUHu9Hd7FeVt3iSSCnWAFDdUYnBRzGKrqKV1pkhU2SqsuTzf6ge4PgoLnQTkhg41Qk9LyLs",
  "key6": "57fDcobCD2yyifeeqwqyzGwaY6oQRwehvPVRUabbTKkkUcA6Fdgn6JeiDKmfgHYjA9oGL8XcLxdH4etDEUumFYN9",
  "key7": "4zQXSVA2Gtrm6ryB1ePo31fdaGUfD16ihC4hX937mbUFcquC6qpJTysqxngJWCxmUeuxuFU4eBhZZFwHPXqqCs41",
  "key8": "5EfHQb7QAuCuK1e8SChvqP3q6HP6w9L4aVNgGE7Q5uiyjyV89XtSTNDy8ZiJX1oAdauqhRS1LAonQ7iFd4r8L8oT",
  "key9": "2gdLNqhe3SffHmX4Cbq2Updtnb5ypE9QGnBpcDtDBGNieUbQPkNoqnXCyGXMhyzduD1ZbT3XQXXqK4GTXHQCN5ct",
  "key10": "3w7ZfqBtqBUjYt8ECsL7e68xBJNat4pSZrCNfb2HzH7Z2121tMx6PhbtHMQwVbuhtf6CBfmu2FoMngLDTepXvqpr",
  "key11": "3hGcusX8nTWxpLFHhBdMCjLNNpzNsDYRw6xkdrtnbYoT8Dox5ks3dMfyK9UV1NyGBNS6YnbV7X6kGmXcx9NSWbVd",
  "key12": "3WPt7kXvdggUtJAGuz5edwjNYx1sRkQYhVWDuixdF96cstCMcUsrxgiHvNxdRMpifh6HZQGFYnP1DvkrYcSkoobY",
  "key13": "sa1oHbtV4oV65wyWVPMgCj3aN3bCMSJZoigKvaYURCef3Wxfsx8NLSKScGs5gU6gpF3MCPpt4J3FLrnXZ8n82UL",
  "key14": "5Hm33EXtug65UhNp2ue61RE5fhnwJ4tNSDet5x9eitdL983mdPePQaYS2kRRXRMuwCYFkppRknq8Jq9t5xxd5MTY",
  "key15": "2aSCDLSWBKqUMxCwCfRysTgdnoCWJSP89AoBoyr2gcUnXA4hfJvkCSjY2s3dYRnpgrdKSZrFy98Q8robSZMj7FaV",
  "key16": "3F8rTCa3TthdeJYRDFwBxtnnN8fMm6RrEBE6AHegsQ465WgLq8Tw9jgzrygsuuYtPTZvZbswqvsxtB12NS4xPrft",
  "key17": "3WRdSnGiHVLztrhwQz7kgSApts3KhweQW1jfwC6b2PVt3T5pkGpWgrfhpuqeyyLpZtJ62SkioGtKoR6tra85QZTy",
  "key18": "61jdZb3vZs45M5H26Kz6Fwdq3zX6sdwvqFEnXPWSGnyFxCZsJen8Wo4EN7i58baBBXnVNThTPWSwJigrbBa33nEg",
  "key19": "4Dqpgngtfima85EyzsUNkHBGA1JugffNY4GFDN1AZCkhhappmViZJQxa1Cq241kWDu7m5LZiEQZLt6MVoEYAhnFi",
  "key20": "5PVRioz935xs1RztrPH1paDdcSPkjoh49yQ2sWktaBLgJHunnuCjRstHbkASCjouSjktYGvEtSmyWQaX6ZF9R5Pw",
  "key21": "643zq4jLYgjs3UdroFRjpJtEbgr5JWtP4nsMwkcysekuemPPM4VYsYoNwWNGpxBN8AxDsnYyGNKb9irFxjDkMssg",
  "key22": "5w1qqHHcivqgPu4gBXC62sgfCnBWLe2XMnDd4SVgRx2XnaiowZXP3KwS96BivPUd5XtNBeKdMiY5WwTtzvPK7Yfp",
  "key23": "4sCfTF5sbiHt14rVX8pF9BdY1vq3kXANrGY7v7JE6mKtkc1BCnzqE57o53oyGHvosPeWRwBcMYPCSRBujG4YCfjq",
  "key24": "bvkT6vrpLxX9KgBDSiZLqALTi5M3Mk4GBc9e1dsByb27rHsSCTNv6JKyRe7KtdBTCf2E4u6YXRWScB8wZqpiDH6",
  "key25": "2bFCkRuzpPTvaJFi8mtrv9WAYimKpypE29y6XffMfxYVqcgJTb3LHu2vwKH8Zsr7o93V8dLAdxJxs81KsWAiSLYb",
  "key26": "5Jyz2BfK2zqekcEc1cWgroN8E9NR7gXJY1Y7fogYsG6V1suWkYqwSzuzJJT5Q5mDh2YSwidked3wJS1Chd59XHbg",
  "key27": "4vkdqVneszgPEjZ6cY1YPzGZ6WCXD6HpopGqSXtVNRCt9s1yFgBsUcFLoEZi3YLCtkdubBaQcwSVyaDXd3gKYkJU",
  "key28": "5JjEkt7DFD8mFsPcBsVrZ15hmALTctWCVSJxEUasuVsJwprAb6jx8CJmp4Vq2z5hn43Lp968SfAEgJvSRcgtY54C",
  "key29": "5watKSCmRdGNDXqNFVnYGbuNadY8kEQAtst93VAmLPofcWM8QMewNfAw6CffTrsTSh6WgxXX5Em6zxi9MoxBDMHG",
  "key30": "4khuN3wYwoEDKCBCSXxWTrFS8f2VBSEAR1BPHXp98Vi9YUNgxSrv7Dw1L1gHn5vY7Nk3UQvaXkjAwjba9YTSb3M4",
  "key31": "54NRFpzqAmrqfEA93L6Uc5j28SZFM6DhsX7nvb5z26Hc7AmBHGENa1QsQXSAVnHcwzki9sJWFxUYArUjfE6GPuyK",
  "key32": "2JzLLzgQAveyyyDhhKHVrrcDPVAgy2zVwhCGBf34Q8pVApqpG5dPgVdE6LrY4ioCMGDtVuUBnfBTy1kHA6EtVNQy",
  "key33": "cUBStdoFHydov6qKV9xks8DN751Bb1p9bFRGF2wrNZK8T1R6p8zRDpo4QgogqC6ZKPcx3XFxDzqzAw9FhJimKbA",
  "key34": "5MeMv8r3w3AGfRG2r3MbEdVqpFW6bNyzFB5d8cxD2TfYkPfAGBsanhi8aGrmZ2eMfYxy462A5Xd7y4MwPk7LnYMN",
  "key35": "3Ke2jSHZwbgkoGDVTjpyZRwkFqKAiMuLEZvgNG6NMiraRknAepPCZw5K8bwRMd1mNQUqcEy8SDMrr8R6rsvK2MjG",
  "key36": "32HgEA5JiTfrzRfjuhwgKmDPEPixAw7baQ12cqHvdAFGQ6XoTeX8kD3gMANKNb2cn8k5fmGDt66k3NYL22cxAGYY",
  "key37": "33SRqa4DFm3tzohovrknURbyuuKWnMz88NvHuHKpYkXtqzrdrhjWrMBwpcpxgU3oTPmXf7RUDyDEakH4gFtvYF14",
  "key38": "2zTfvnbjAyESgVX1qMJZGTagS3i8ztYGpzw1W8ysJxoEQQNCs6wtCoE8cDh4QtoRfyGSZBhCNetQE2jqDwSLhuWq",
  "key39": "34m6BxiVp3j9gYCKVG2KE6sWeto8AdYsxwpqydGsAa6GzMBzBjYJ7pNEqyqH6s6fWAfMhBvmMQGeAawqvR6ZVH7f",
  "key40": "31VmcDajjhppvNc3h1YH4UmzQCjyWTnEwgMrEkFEJ9p5WBKA7pENRt5h7SVZSNBLhFSZrzUgDhZ7xaRkMxMNMXV4",
  "key41": "35qGJGuvPNLQQUhNZ5ncHZVNiQ9PiUyCpSG7wGQAcF1C9gFWk7VXfsPxPEuDePs8C8tNzVGrra9FGyuj5Zin3RLm",
  "key42": "3LpTYramAFzvC99pEeuASxf84rRsWTnveX6XCRd8waRRBaRDXfH9JSySJEASW56bghZxSaLTbmGPVCLQZv2vwTpW",
  "key43": "3u5dJt2ZvhJGCwaokWwWs4uHmhqNXKdDcpiBf4mG7jYw4wumiLtHwBTWNeJFnLXLyQnoAksKqj1n2wBYbGXb1sPb",
  "key44": "2V6HddsJH5wWeoBZwoUxywdAZsiTW7HbiBC4zeFQCevqcS6Q4UHjFMCHPaB4oMccCZe9UQKxACzxP9jgeTQQ7Z8w",
  "key45": "U7xYC2YZ6zAQbGuSzhxpEdxQC3Nw8we9emX4WYH4yqdcKYTMKEkTiHehB4ihdiuNasdDN1tEyXnEC4CrDFuX5Rv",
  "key46": "4mFZ5Kua46Rmys6NCeGZ1rmk96WQfVZ74bWn9fhSLyyk5PyEf7i5k9h9GSk6MXnJbqkAuzJ1oW5fCFU3LvrBxN5W",
  "key47": "7GQWzGH1CCmE3SNpVNa8KaT9dG4ZohMjZ4nvtDZrabwC9na5RkcN2ctfLJgdbgVod4qqYBDd5F7tcMtUGkDzrJJ",
  "key48": "NALK2WiDQg3Gqn2ndFwkbWSFdV5ECjqqqVGNqN8VV118mZ2t3PGoaFQ3aMZPhFqYxSvN9uwGGieFgttdmrCUKYw",
  "key49": "51Jw91Kqc9XKrBBqDeJWbyJ5o4uQBXNiFSSPAVDF6np6bFE7YdFmZ1hRRYdZtuyUWh8CJKLVisJ3xhUeh4pKJxsF"
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
